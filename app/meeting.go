package app

import (
	"za-white-screen/model"
	"za-white-screen/mlog"
	"strings"
	"time"
	"bytes"
	"encoding/base32"
	"github.com/pborman/uuid"
)

func (a *App) CreateMeeting(meeting *model.Meeting) (*model.Meeting, *model.AppError) {
	// get meeting room
    room,_:=a.GetMeetingRoom(meeting.UserId)
	if room == nil{
		return meeting,nil
	}
	meeting.MeetingNo = room.Num
	meeting.Status = "1" //开启会议
	result,err := a.Srv.Store.Meeting().Save(meeting)
	if err != nil {
		return nil, err
	}
	// save meeting member
	user,err:= a.GetUserByUsername(result.Username)
	if err!=nil{
		return nil,err
	}
	member := &model.MeetingMembers{
		MeetingId:result.Id,
		MeetingNo:result.MeetingNo,
		UserName:result.Username,
		NickName:user.Nickname,
	}
	a.Srv.Store.Meeting().SaveMeetingMember(member)
	return result,nil
}
func (a *App) GetMeetingRoom(userId string) (*model.MeetingRoom, *model.AppError) {
	room,_:=a.Srv.Store.Meeting().GetMeetingRoom("0")
	if room == nil{
		return nil,nil
	}
	// lock room
	room.Flag="1"
	room.UserId = userId
	result,err := a.Srv.Store.Meeting().LockRoomStatus(room)
	if result<=0 || err!=nil{
		return nil,nil
	}
	return room,nil
}
func (a *App) GetRunMeeting(channelId string) (*model.Meeting, *model.AppError) {
	result,err := a.Srv.Store.Meeting().GetByRunMeetingChannelId(channelId)
	if err != nil {
		return nil, err
	}
	return result,nil
}
func (a *App) GetMeetingInfo(meetingId string) (*model.MeetingInfo, *model.AppError) {
	meeting,e:= a.Srv.Store.Meeting().GetMeetingByMeetingId(meetingId)
	if e!=nil{
		mlog.Error("get meeting info failed! err="+e.Error())
		return nil, e
	}

	members,err := a.Srv.Store.Meeting().GetMeetingMember(meetingId)
	if err != nil {
		return nil, err
	}
	result := &model.MeetingInfo{
		Status:meeting.Status,
		MeetingMembers:members,
		SystemTime:time.Now().UnixNano() / int64(time.Millisecond),
	}
	return result,nil
}
func (a *App) UpdateUserToMeeting(channelId,meetingId,userName string,isJoin bool) (*model.Meeting,*model.AppError) {
	meeting,err := a.Srv.Store.Meeting().GetMeetingByMeetingId(meetingId)
	if err != nil {
		mlog.Error("get meeting failed! meetingId="+meetingId+"channelId="+channelId)
		return nil,err
	}
	players := meeting.Players
	if isJoin {
		if !strings.Contains(players, userName) {
			players = players + " " + userName
			meeting.Players = players
			me,er:=a.Srv.Store.Meeting().Update(meeting)
			return me,er
		} else {
			return meeting,nil
		}
	}else {
		if strings.Contains(players, userName) {
			players := strings.Replace(players,userName,"",-1)
			meeting.Players = players
			leavePlayers := meeting.LeavePlayers+" " +userName
			meeting.LeavePlayers = leavePlayers
			me,er:=a.Srv.Store.Meeting().Update(meeting)
			// remove from memberlist
			e:=a.Srv.Store.Meeting().DeleteMeetingMember(meetingId,userName)
			if e!=nil{
				mlog.Error("remove member from meeting members failed! err="+e.Error())
			}
			return me,er
		} else {
			return meeting,nil
		}
	}
	return meeting,nil
}

func (a *App) UpdateMeetingStatus(channelId,meetingId,status string) (*model.Meeting,*model.AppError) {
	meeting,err := a.Srv.Store.Meeting().GetMeetingByMeetingId(meetingId)
	if err != nil {
		mlog.Error("get meeting failed! meetingId="+meetingId+"channelId="+channelId)
		return nil,err
	}
	meeting.Status= status
	result,err := a.Srv.Store.Meeting().Update(meeting)
	return  result,err
}

func (a *App) UpdateMeetingConfig(meetingId,videoStatus,voiceStatus string) (*model.Meeting,*model.AppError) {
	meeting,err := a.Srv.Store.Meeting().GetMeetingByMeetingId(meetingId)
	if err != nil {
		mlog.Error("get meeting failed! meetingId="+meetingId)
		return nil,err
	}
	meeting.VideoStatus= videoStatus
	meeting.VoiceStatus = voiceStatus
	result,err := a.Srv.Store.Meeting().Update(meeting)
	return  result,err
}

func (a *App) CloseMeetingRoom(meetingNum string) *model.AppError {
	// close room
	meetingRoom := &model.MeetingRoom{
		Num:meetingNum,
		Flag:"0",
	}
	_,err := a.Srv.Store.Meeting().UnLockRoomStatus(meetingRoom)
	return  err
}
func (a *App) GetAllChannelMeetings(options *model.MeetingGetOptions) ([]*model.Meeting, *model.AppError) {
	return a.Srv.Store.Meeting().GetAllChannelMeetings(options)
}

func (a *App) SetMeetingPresenter(meetingId,userId,userName string) (*model.Meeting,*model.AppError) {
	// get meeting
	meeting,err := a.Srv.Store.Meeting().GetMeetingByMeetingId(meetingId)
	if meeting == nil{
		return nil,err
	}
	meeting.Username = userName
	meeting.UserId = userId
	result,er := a.Srv.Store.Meeting().Update(meeting)
	if er != nil {
		mlog.Error("update meeting presenter failed! meetingId="+meetingId)
		return nil,er
	}
	return result,nil
}

// 发送 websocket 通知
func (a *App) PushMeetingMsgToWebSocket(eventType,teamId,channelId,userId,omitUserId string,meeting *model.Meeting)  {
	omitUsers := make(map[string]bool, 1)
	if omitUserId!="" {
		omitUsers[omitUserId] = true
	}else {
		omitUsers = nil
	}
	event := model.NewWebSocketEvent(eventType, teamId, channelId, userId, omitUsers)
    event.Add("uuid",NewId())
	event.Add("meeting_id",meeting.Id )
	event.Add("channel_id",meeting.ChannelId )
	event.Add("meeting_no",meeting.MeetingNo )
	event.Add("meeting_name",meeting.MeetingName )
	event.Add("user_id",meeting.UserId )
	event.Add("video_status",meeting.VideoStatus )
	event.Add("voice_status",meeting.VoiceStatus )
	event.Add("user_name",meeting.Username)
	event.Add("nick_name",meeting.NickName)
	event.Add("players",meeting.Players)
	event.Add("leave_players",meeting.LeavePlayers)
	a.PublishAll(event)
}
func NewId() string {
	var encoding = base32.NewEncoding("ybndrfg8ejkmcpqxot1uwisza345h769")
	var b bytes.Buffer
	encoder := base32.NewEncoder(encoding, &b)
	encoder.Write(uuid.NewRandom())
	encoder.Close()
	b.Truncate(26) // removes the '==' padding
	return b.String()
}
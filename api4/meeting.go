package api4

import (
	"net/http"
	"za-white-screen/model"
	"za-white-screen/mlog"
	"encoding/json"
	"strings"
	"time"
)

func (api *API) InitMeeting() {
	api.BaseRoutes.Meeting.Handle("/get/all", api.ApiSessionRequired(getAll)).Methods("get")
	api.BaseRoutes.Meeting.Handle("/get/service/url", api.ApiSessionRequired(getServiceUrl)).Methods("get")
	api.BaseRoutes.Meeting.Handle("/get/meeting", api.ApiSessionRequired(getMeeting)).Methods("get")
	api.BaseRoutes.Meeting.Handle("/get/meetingInfo", api.ApiSessionRequired(getMeetingInfo)).Methods("get")
	api.BaseRoutes.Meeting.Handle("/create", api.ApiSessionRequired(createMeeting)).Methods("POST")
	api.BaseRoutes.Meeting.Handle("/update", api.ApiSessionRequired(updateMeeting)).Methods("POST")
	api.BaseRoutes.Meeting.Handle("/update/config", api.ApiSessionRequired(updateMeetingConfig)).Methods("POST")
	api.BaseRoutes.Meeting.Handle("/close", api.ApiSessionRequired(closeMeeting)).Methods("POST")
	api.BaseRoutes.Meeting.Handle("/add/user", api.ApiSessionRequired(andUser)).Methods("POST")
	api.BaseRoutes.Meeting.Handle("/remove/user", api.ApiSessionRequired(removeUser)).Methods("POST")
	api.BaseRoutes.Meeting.Handle("/set/presenter", api.ApiSessionRequired(setPresenter)).Methods("POST")
	api.BaseRoutes.Meeting.Handle("/heartbeat", api.ApiSessionRequired(heartbeat)).Methods("POST")
}

func getAll(c *Context, w http.ResponseWriter, r *http.Request) {
	if c.Params.PerPage==0{
		c.Params.PerPage=10
	}
	meetings, err := c.App.GetAllChannelMeetings(&model.MeetingGetOptions{
		Page:           c.Params.Page,
		PerPage:        c.Params.PerPage,
		ChannelId:        c.Params.ChannelId,
		UserName :      c.Params.Username,
	})
	if err!=nil{
		c.Err = err
		return
	}
	n := len(meetings)
	result := make([]*model.MeetingBody, n, 2*n)
	for i,n:=range meetings{
		new := &model.MeetingBody{
			ChannelId:   n.ChannelId,
			MeetingId:   n.Id,
			MeetingNo:   n.MeetingNo,
			MeetingName: n.MeetingName,
			UserId:      n.UserId,
			Username:    n.Username,
			NickName:    n.NickName,
			Status:      n.Status,
			CreateAt:    n.CreateAt,
			UpdateAt:    n.UpdateAt,
		}
		if strings.Contains(n.Players,c.Params.Username){
			new.IsJoin="1"
		}else {
			new.IsJoin="0"
		}
		if strings.Contains(n.LeavePlayers,c.Params.Username){
			new.IsLeave="1"
		}else {
			new.IsLeave="0"
		}
		result[i]=new
	}
	b,_:=json.Marshal(result)
	w.WriteHeader(http.StatusCreated)
	w.Write(b)
}

func getServiceUrl(c *Context, w http.ResponseWriter, r *http.Request) {
	 URL := c.App.Config().FreeSwitchSettings.Domain
	data, _ := json.Marshal(URL)
	w.WriteHeader(http.StatusOK)
	w.Write(data)
}
func getMeeting(c *Context, w http.ResponseWriter, r *http.Request) {
	if c.Params.ChannelId==""{
		mlog.Error("get meeting failed! channelId IS NULL!")
		c.Err = model.NewAppError("getMeeting", "api.meeting.get_failed", nil, "", http.StatusForbidden)
		return
	}
	n,er := c.App.GetRunMeeting(c.Params.ChannelId)
	if er!=nil{
		mlog.Error("get running meeting failed! err="+er.Message)
	}
	if n==nil{
		w.WriteHeader(http.StatusCreated)
		w.Write([]byte("{}"))
		return
	}
	new := &model.MeetingBody{
		ChannelId:   n.ChannelId,
		MeetingId:   n.Id,
		MeetingNo:   n.MeetingNo,
		MeetingName: n.MeetingName,
		UserId:      n.UserId,
		Username:    n.Username,
		NickName:    n.NickName,
		Status:      n.Status,
		CreateAt:    n.CreateAt,
	}
	if strings.Contains(n.Players,c.Params.Username){
		new.IsJoin="1"
	}else {
		new.IsJoin="0"
	}
	if strings.Contains(n.LeavePlayers,c.Params.Username){
		new.IsLeave="1"
	}else {
		new.IsLeave="0"
	}
	b,_:=json.Marshal(new)
	w.WriteHeader(http.StatusCreated)
	w.Write(b)
}


func getMeetingInfo(c *Context, w http.ResponseWriter, r *http.Request) {

	if c.Params.MeetingId==""{
		mlog.Error("get meeting failed! MeetingId IS NULL!")
		c.Err = model.NewAppError("getMeeting", "api.meeting.get_failed", nil, "", http.StatusForbidden)
		return
	}
	n,er := c.App.GetMeetingInfo(c.Params.MeetingId)
	if er!=nil{
		mlog.Error("get running meeting failed! err="+er.Message)
	}
	w.WriteHeader(http.StatusCreated)
	w.Write([]byte(n.ToJson()))
	return
}

func createMeeting(c *Context, w http.ResponseWriter, r *http.Request) {
	meeting :=&model.Meeting{}
	err := json.NewDecoder(r.Body).Decode(&meeting)
	if err != nil {
		mlog.Info("hooks push msg  failed! err=" + err.Error())
	}
	meeting.UserId = c.App.Session.UserId
	user,_ := c.App.GetUser(meeting.UserId)
	if user !=nil{
		meeting.Username = user.Username
		meeting.Players = user.Username
		meeting.NickName = user.Nickname
	}else {
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte("create user not found!"))
		return
	}
	// and redis lock
	_,er :=c.App.TryLock(meeting.ChannelId)
	if er!=nil{
		w.WriteHeader(http.StatusIMUsed)
		w.Write([]byte("channel exist meetings!"))
		return
	}
	createMeeting,e := c.App.CreateMeeting(meeting)
	if e!=nil{
		c.Err = e
		return
	}
	createMeeting.ServerHost = c.App.Config().FreeSwitchSettings.Domain
	w.WriteHeader(http.StatusCreated)
	w.Write(createMeeting.ToJson())
}

func updateMeeting(c *Context, w http.ResponseWriter, r *http.Request) {
	update := &struct {
		ChannelId                   string           `json:"channel_id"`
		MeetingId              string           `json:"meeting_id"`
		Status                  string            `json:"status"`
	}{}
	err := json.NewDecoder(r.Body).Decode(&update)
	if err != nil {
		mlog.Info("decode update meeting body failed! err=" + err.Error())
	}
	updateMeeting,er := c.App.UpdateMeetingStatus(update.ChannelId,update.MeetingId,update.Status)
	if er!=nil{
		c.Err = er
		return
	}
	if update.Status == "0"{
		// close meeting
		c.App.CloseMeeting(updateMeeting.MeetingNo)
		// unlock redis
		e := c.App.Unlock(updateMeeting.ChannelId)
		if e!=nil{
			mlog.Error("unlock meeting channel failed! channelId="+updateMeeting.ChannelId + " err="+e.Error())
		}
		if er!=nil{

		}
	}
	if update.Status == "2"{
		// send post msg
		user,_ := c.App.GetUser(c.App.Session.UserId)
		var cstZone = time.FixedZone("CST", 8*3600)
		timeStr:=time.Now().In(cstZone).Format("2006/01/02 15:04:05")
		// get msg
		meetingPost := &model.MeetingPost{
			Id:updateMeeting.Id,
			MeetId:updateMeeting.MeetingNo,
			MeetName:updateMeeting.MeetingName,
			From:user.Nickname,
			To:"[]",
			MeetingId:updateMeeting.Id,
			ChannelId:updateMeeting.ChannelId,
			Time:timeStr,
		}
		post := &model.Post{
			ChannelId: updateMeeting.ChannelId,
			Message:   meetingPost.ToJson(),
			Type:      "custom_Msg",
			UserId:   user.Id ,
			CardType: 	"5",
			Props: model.StringInterface{
				"username":    user.Username,
			},
			BatchId: model.NewId(),
		}
		_, err := c.App.CreatePostAsUser(c.App.PostWithProxyRemovedFromImageURLs(post), c.App.Session.Id)
		if err != nil {
			c.Err = err
			return
		}
		// 发送 websocket 通知
		c.App.PushMeetingMsgToWebSocket(model.WEBSOCKET_EVENT_MEETING,"",
			updateMeeting.ChannelId,"","",updateMeeting)
	}
	w.WriteHeader(http.StatusOK)
	w.Write(updateMeeting.ToJson())
}

func updateMeetingConfig(c *Context, w http.ResponseWriter, r *http.Request) {
	update := &struct {
		MeetingId              string           `json:"meeting_id"`
		VideoStatus                  string            `json:"video_status"`
		VoiceStatus                  string            `json:"voice_status"`
	}{}
	mlog.Info("begin to update meeting config...")
	err := json.NewDecoder(r.Body).Decode(&update)
	if err != nil {
		mlog.Info("decode update meeting body failed! err=" + err.Error())
	}
	if update ==nil{
		mlog.Info("update body is nil")
		return
	}
	updateMeeting,er := c.App.UpdateMeetingConfig(update.MeetingId,update.VideoStatus,update.VoiceStatus)
	if er!=nil{
		c.Err = er
		return
	}
	mlog.Info("update meetting success ... updateMeeting="+string(updateMeeting.ToJson()))
	// 遍历 会议室人员
	players := strings.Split(updateMeeting.Players," ")
    for _,userName :=range  players{
    	if userName == ""{
    		continue
		}
    	user ,_:= c.App.GetUserByUsername(userName)
		// 发送 websocket 通知
		c.App.PushMeetingMsgToWebSocket(model.WEBSOCKET_EVENT_MEETING_UPDATE,"",
			"",user.Id,c.App.Session.UserId,updateMeeting)
	}

	w.WriteHeader(http.StatusOK)
	w.Write(updateMeeting.ToJson())
}

func closeMeeting(c *Context, w http.ResponseWriter, r *http.Request) {
	update := &struct {
		MeetingId              string           `json:"meeting_id"`
	}{}
	err := json.NewDecoder(r.Body).Decode(&update)
	if err != nil {
		mlog.Error("decode update meeting body failed! err=" + err.Error())
		w.WriteHeader(http.StatusOK)
		w.Write([]byte(err.Error()))
		return
	}
	updateMeeting,er := c.App.UpdateMeetingStatus("",update.MeetingId,"0")
	if er!=nil{
		c.Err = er
		return
	}
	// send websocket
	players := strings.Split(updateMeeting.Players," ")
	for _,userName :=range  players{
		if userName == ""{
			continue
		}
		user ,_:= c.App.GetUserByUsername(userName)
		// 发送 websocket 通知
		c.App.PushMeetingMsgToWebSocket(model.WEBSOCKET_EVENT_MEETING_CLOSE,"",
			"",user.Id,c.App.Session.UserId,updateMeeting)
	}
	leavePlayers := strings.Split(updateMeeting.LeavePlayers," ")
	for _,userName :=range  leavePlayers{
		if userName == ""{
			continue
		}
		user ,_:= c.App.GetUserByUsername(userName)
		// 发送 websocket 通知
		c.App.PushMeetingMsgToWebSocket(model.WEBSOCKET_EVENT_MEETING_CLOSE,"",
			"",user.Id,c.App.Session.UserId,updateMeeting)
	}
	// send ws to channel
	c.App.PushMeetingMsgToWebSocket(model.WEBSOCKET_EVENT_MEETING_CLOSE,"",
		updateMeeting.ChannelId,"",c.App.Session.UserId,updateMeeting)
	// close meeting
	user,_:= c.App.GetUser(c.App.Session.UserId)
	mlog.Info("api close meeting begin,meetingNo="+updateMeeting.MeetingNo + " userName=" + user.Username)
	c.App.CloseMeeting(updateMeeting.MeetingNo)
	//unLock meeting room
	c.App.CloseMeetingRoom(updateMeeting.MeetingNo)
	// unlock redis
	e:=c.App.Unlock(updateMeeting.ChannelId)
	if e!=nil{
		mlog.Error("unlock meeting channel failed! channelId="+updateMeeting.ChannelId + " err="+e.Error())
	}
	w.WriteHeader(http.StatusOK)
	w.Write(updateMeeting.ToJson())
}

func andUser(c *Context, w http.ResponseWriter, r *http.Request) {
	update := &struct {
		ChannelId                   string           `json:"channel_id"`
		MeetingId              string           `json:"meeting_id"`
		UserName                string           `json:"user_name"`
	}{}
	err := json.NewDecoder(r.Body).Decode(&update)
	if err != nil {
		mlog.Info("decode update meeting body failed! err=" + err.Error())
	}
	user,_ := c.App.GetUserByUsername(update.UserName)
	if user==nil{
		mlog.Error("and meeting member failed! user cant be nil! userName="+update.UserName)
		w.WriteHeader(http.StatusOK)
		w.Write([]byte("user cant be nil!"))
		return
	}
	updateMeeting,er := c.App.UpdateUserToMeeting(update.ChannelId,update.MeetingId,update.UserName,true)
	if er!=nil{
		c.Err = er
		return
	}

	// save meeting member
	member := &model.MeetingMembers{
		MeetingId:updateMeeting.Id,
		MeetingNo:updateMeeting.MeetingNo,
		UserName :update.UserName,
		NickName: user.Nickname,
	}
	c.App.Srv.Store.Meeting().SaveMeetingMember(member)
	//判断当前用户是否在会议室，如果在则踢出
	c.App.RemoveUserFromMeeting(member.MeetingNo,member.UserName)
	// 发送 websocket 通知
	c.App.PushMeetingMsgToWebSocket(model.WEBSOCKET_EVENT_MEETING_JOIN,"",
		"",user.Id,"",updateMeeting)
	updateMeeting.ServerHost = c.App.Config().FreeSwitchSettings.Domain
	w.WriteHeader(http.StatusOK)
	w.Write(updateMeeting.ToJson())
}

func removeUser(c *Context, w http.ResponseWriter, r *http.Request) {
	update := &struct {
		ChannelId               string           `json:"channel_id"`
		MeetingId               string           `json:"meeting_id"`
		UserName                string           `json:"user_name"`
	}{}
	err := json.NewDecoder(r.Body).Decode(&update)
	if err != nil {
		mlog.Info("decode update meeting body failed! err=" + err.Error())
	}
	user,_ := c.App.GetUserByUsername(update.UserName)
	if user==nil{
		mlog.Error("and meeting member failed! user cant be nil! userName="+update.UserName)
		w.WriteHeader(http.StatusOK)
		w.Write([]byte("user cant be nil!"))
		return
	}
	updateMeeting,er := c.App.UpdateUserToMeeting(update.ChannelId,update.MeetingId,update.UserName,false)
	if er!=nil{
		c.Err = er
		return
	}
	// remover person
	c.App.RemoveUserFromMeeting(updateMeeting.MeetingNo,update.UserName)
	// 发送 websocket 通知
	c.App.PushMeetingMsgToWebSocket(model.WEBSOCKET_EVENT_MEETING_OUT,"",
		"",user.Id,"",updateMeeting)
	w.WriteHeader(http.StatusOK)
	w.Write(updateMeeting.ToJson())
}
/**
设置主持人
 */
func setPresenter(c *Context, w http.ResponseWriter, r *http.Request) {
	presenter := &struct {
		MeetingId              string           `json:"meeting_id"`
		UserId                 string            `json:"user_id"`
		UserName                string           `json:"user_name"`
	}{}
	err := json.NewDecoder(r.Body).Decode(&presenter)
	if err != nil {
		mlog.Info("decode set meeting presenter body failed! err=" + err.Error())
	}
	updateMeeting,er := c.App.SetMeetingPresenter(presenter.MeetingId,presenter.UserId,presenter.UserName)
	if er!=nil{
		c.Err = er
		return
	}
	w.WriteHeader(http.StatusOK)
	w.Write(updateMeeting.ToJson())
}
/**
维持用户在线状态
 */
func heartbeat(c *Context, w http.ResponseWriter, r *http.Request) {
	meeting := &struct {
		MeetingId string `json:"meeting_id"`
	}{}
	err := json.NewDecoder(r.Body).Decode(&meeting)
	if err != nil {
		mlog.Info("decode heartbeat body failed! err=" + err.Error())
	}
	userId := c.App.Session.UserId
	user,_ := c.App.GetUser(userId)
	// save meeting member
	member := &model.MeetingMembers{
		MeetingId:meeting.MeetingId,
		UserName :user.Username,
	}
	member,er := c.App.Srv.Store.Meeting().MeetingMemberHeartBeat(member)

   if er!=nil{
   		mlog.Error("meeting member heatbeat failed! meetingId="+meeting.MeetingId+" memeber="+user.Username)
   }
	w.WriteHeader(http.StatusOK)
	w.Write(member.ToJson())
}
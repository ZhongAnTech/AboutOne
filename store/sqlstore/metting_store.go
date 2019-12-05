package sqlstore

import (
	"za-white-screen/einterfaces"
	"za-white-screen/model"
	"database/sql"
	"net/http"
	"strings"
	"za-white-screen/store"
	"za-white-screen/utils"
)

type SqlMeetingStore struct {
	SqlStore
	metrics einterfaces.MetricsInterface
}

func NewSqlMeetingStore(sqlStore SqlStore, metrics einterfaces.MetricsInterface) store.MeetingStore {
	us := &SqlMeetingStore{
		SqlStore: sqlStore,
		metrics:  metrics,
	}

	for _, db := range sqlStore.GetAllConns() {
		table :=db.AddTableWithName(model.Meeting{}, "Meeting").SetKeys(false, "Id")
		table.ColMap("Id").SetMaxSize(26)
		table.ColMap("ChannelId").SetMaxSize(26)
		table.ColMap("MeetingId").SetMaxSize(64)
		table.ColMap("MeetingNo").SetMaxSize(64)
		table.ColMap("MeetingName").SetMaxSize(255)
		table.ColMap("UserId").SetMaxSize(26)
		table.ColMap("Username").SetMaxSize(64)
		table.ColMap("NickName").SetMaxSize(255)
		table.ColMap("Players").SetMaxSize(255)
		table.ColMap("LeavePlayers").SetMaxSize(255)
		table.ColMap("VideoStatus").SetMaxSize(2)
		table.ColMap("VoiceStatus").SetMaxSize(2)
		table.ColMap("Status").SetMaxSize(2)
		table.ColMap("CreateAt").SetMaxSize(20)
		table.ColMap("UpdateAt").SetMaxSize(20)
		table.ColMap("DeleteAt").SetMaxSize(20)
	}

	return us
}
func (me SqlMeetingStore) GetByRunMeetingChannelId(channelId string) (*model.Meeting, *model.AppError) {
	query := `
		SELECT
			b.Id,
			b.ChannelId,
			b.MeetingId,
			b.MeetingNo,
			b.MeetingName,
			b.UserId,
			b.Username,
			ifnull(b.NickName,'') as NickName,
			b.Players,
			b.LeavePlayers,
           b.VideoStatus,
			b.VoiceStatus,
			b.Status,
			b.CreateAt,
			b.UpdateAt,
			b.DeleteAt
		FROM
			Meeting b
		WHERE
			b.ChannelId = :channelId
			and
			b.status != 0
			ORDER BY
			b.CreateAt DESC
			limit 1
			
	`
	var meeting *model.Meeting
	err:=me.GetReplica().SelectOne(&meeting, query, map[string]interface{}{"channelId": channelId});
	if err!=nil && err!=sql.ErrNoRows{
		return nil, model.NewAppError("SqlMeetingStore.Get", "store.sql_meeting.get.app_error", map[string]interface{}{"channelId": channelId}, err.Error(), http.StatusInternalServerError)
	}
	return meeting,nil
}

// GetAll fetches from all Meetings in the database.
func (me SqlMeetingStore) GetAllChannelMeetings(options *model.MeetingGetOptions) ([]*model.Meeting, *model.AppError) {
	params := map[string]interface{}{
		"offset": options.Page * options.PerPage,
		"limit":  options.PerPage,
	}

	var conditions []string
	var conditionsSql string

	if !options.IncludeDeleted {
		conditions = append(conditions, "b.DeleteAt = 0")
	}
	conditions = append(conditions, "b.Status != 1")
	if options.ChannelId != "" {
		conditions = append(conditions, "b.ChannelId = :channel_id")
		params["channel_id"] = options.ChannelId
	}

	if len(conditions) > 0 {
		conditionsSql = "WHERE " + strings.Join(conditions, " AND ")
	}

	sql := `
			SELECT
			    b.Id,
			    b.ChannelId,
			    b.MeetingId,
			    b.MeetingNo,
			    b.MeetingName,
			    b.UserId,
			    b.Username,
               b.NickName,
				b.Players,
				b.LeavePlayers,
				b.VideoStatus,
              b.VoiceStatus,
				b.Status,
				b.CreateAt,
				b.UpdateAt,
				b.DeleteAt
			FROM
			    Meeting b
			` + conditionsSql + `
			ORDER BY
			    b.CreateAt DESC
			LIMIT
			    :limit
			OFFSET
			    :offset
		`

	var meetings []*model.Meeting
	if _, err := me.GetReplica().Select(&meetings, sql, params); err != nil {
		return nil, model.NewAppError("SqlMeetingStore.GetAll", "store.sql_meeting.get_all.app_error", nil, err.Error(), http.StatusInternalServerError)
	}

	return meetings, nil
}

func (me SqlMeetingStore) GetMeetingByMeetingId(meetingId string) (*model.Meeting, *model.AppError) {
	query := `
		SELECT
			b.Id,
			b.ChannelId,
			b.MeetingId,
			b.MeetingNo,
			b.MeetingName,
			b.UserId,
			b.Username,
           ifnull(b.NickName,'') as NickName,
			b.Players,
			b.LeavePlayers,
			b.VideoStatus,
			b.VoiceStatus,
			b.Status,
			b.CreateAt,
			b.UpdateAt,
			b.DeleteAt
		FROM
			Meeting b
		WHERE
			b.Id = :meetingId
	`
	var meeting *model.Meeting
	err:=me.GetReplica().SelectOne(&meeting, query, map[string]interface{}{"meetingId":meetingId});
	if err!=nil && err!=sql.ErrNoRows{
		return nil, model.NewAppError("SqlMeetingStore.Get", "store.sql_meeting.get.app_error", map[string]interface{}{"meetingId": meetingId}, err.Error(), http.StatusInternalServerError)
	}
	return meeting,nil
}

func (me SqlMeetingStore) GetMeetingByNumAndStatus(meetingNum,status string) ([]*model.Meeting, *model.AppError) {
	params := map[string]interface{}{}

	var conditions []string
	var conditionsSql string


	if meetingNum != "" {
		conditions = append(conditions, "b.MeetingNo = :MeetingNo")
		params["MeetingNo"] = meetingNum
	}

	if status != "" {
		conditions = append(conditions, "b.Status = :Status")
		params["Status"] = status
	}

	if len(conditions) > 0 {
		conditionsSql = "WHERE " + strings.Join(conditions, " AND ")
	}

	sql := `
			SELECT
			    b.Id,
			    b.ChannelId,
			    b.MeetingId,
			    b.MeetingNo,
			    b.MeetingName,
			    b.UserId,
			    b.Username,
               b.NickName,
				b.Players,
				b.LeavePlayers,
				b.VideoStatus,
              b.VoiceStatus,
				b.Status,
				b.CreateAt,
				b.UpdateAt,
				b.DeleteAt
			FROM
			    Meeting b
			` + conditionsSql + `
			ORDER BY
			    b.CreateAt DESC
		`

	var meetings []*model.Meeting
	if _, err := me.GetReplica().Select(&meetings, sql, params); err != nil {
		return nil, model.NewAppError("SqlMeetingStore.GetAll", "store.sql_meeting.get_all.app_error", nil, err.Error(), http.StatusInternalServerError)
	}

	return meetings, nil
}

// UpdateMeetingPlayers
func (me SqlMeetingStore) Update(meeting *model.Meeting) (*model.Meeting, *model.AppError) {
	meeting = meeting.Clone()

	meeting.PreUpdate()
	if err := meeting.IsValid(); err != nil {
		return nil, err
	}

	oldMeeting, err := me.GetMeetingByMeetingId(meeting.Id)
	if err != nil {
		return nil, err
	}

	oldMeeting.Players = meeting.Players
	oldMeeting.LeavePlayers = meeting.LeavePlayers
	oldMeeting.Status = meeting.Status
	oldMeeting.UpdateAt = meeting.UpdateAt
	oldMeeting.DeleteAt = meeting.DeleteAt
	oldMeeting.VideoStatus = meeting.VideoStatus
	oldMeeting.VoiceStatus = meeting.VoiceStatus
	meeting = oldMeeting

	if count, err := me.GetMaster().Update(meeting); err != nil {
		return nil, model.NewAppError("SqlMeetingStore.Update", "store.sql_meeting.update.updating.app_error", meeting.Trace(), err.Error(), http.StatusInternalServerError)
	} else if count != 1 {
		return nil, model.NewAppError("SqlMeetingStore.Update", "store.sql_meeting.update.app_error", traceMeeting(meeting, map[string]interface{}{"count": count}), "", http.StatusInternalServerError)
	}

	return meeting, nil
}

func traceMeeting(meeting *model.Meeting, extra map[string]interface{}) map[string]interface{} {
	trace := make(map[string]interface{})
	for key, value := range meeting.Trace() {
		trace[key] = value
	}
	for key, value := range extra {
		trace[key] = value
	}

	return trace
}

func (us SqlMeetingStore) Save(meeting *model.Meeting) (*model.Meeting, *model.AppError) {
	meeting = meeting.Clone()
	meeting.PreSave()

	if err := meeting.IsValid(); err != nil {
		return nil, err
	}

	if err := us.GetMaster().Insert(meeting); err != nil {
		return nil, model.NewAppError("SqlMeetingStore.Save", "store.sql_meeting.save.app_error", meeting.Trace(), err.Error(), http.StatusInternalServerError)
	}

	return meeting, nil
}

func (us SqlMeetingStore) PermanentDelete(channelId,meetingId string) *model.AppError {
	query := "DELETE FROM Meeting WHERE ChannelId = :channelId  and MeetingId = :meetingId"
	if _, err := us.GetMaster().Exec(query, map[string]interface{}{"channelId": channelId,"meetingId": meetingId}); err != nil {
		return model.NewAppError("SqlMeetingStore.Update", "store.sql_meeting.delete.app_error", map[string]interface{}{"channelId": channelId,"meetingId": meetingId}, err.Error(), http.StatusBadRequest)
	}
	return nil
}

func (me SqlMeetingStore) GetMeetingRoom(flag string) (*model.MeetingRoom, *model.AppError) {
	query := `
		SELECT
			b.id,
			b.num
		FROM
			meetingroom b
		WHERE
			b.flag = :flag
           ORDER BY RAND() 
			limit 1
			
	`
	var meetingRoom *model.MeetingRoom
	me.GetReplica().SelectOne(&meetingRoom, query, map[string]interface{}{"flag": flag});
	return meetingRoom,nil
}

func (us SqlMeetingStore) GetAllUpdateMeetings() store.StoreChannel {
	limitTime := utils.TimeBeforeHours("-1m")
	return store.Do(func(result *store.StoreResult) {
		query := us.getQueryBuilder().
			Select("*").
			From("meeting u").Where("CreateAt < ?",limitTime).Where("status='1'")

		queryString, args, err := query.ToSql()
		if err != nil {
			result.Err = model.NewAppError("SqlMeetingStore.GetAllUpdateMeetings", "store.sql_meeting.app_error", nil, err.Error(), http.StatusInternalServerError)
			return
		}

		var meeting []*model.Meeting
		if _, err := us.GetReplica().Select(&meeting, queryString, args...); err != nil {
			result.Err = model.NewAppError("SqlUserStore.GetAllUpdateMeetings", "store.sql_meeting.get_profiles.app_error", nil, err.Error(), http.StatusInternalServerError)
			return
		}
		result.Data = meeting
	})
}

func (us SqlMeetingStore) GetAllOpenMeetings() store.StoreChannel {
	return store.Do(func(result *store.StoreResult) {
		query := us.getQueryBuilder().
			Select("*").
			From("meeting u").Where("status='2'")

		queryString, args, err := query.ToSql()
		if err != nil {
			result.Err = model.NewAppError("SqlMeetingStore.GetAllUpdateMeetings", "store.sql_meeting.app_error", nil, err.Error(), http.StatusInternalServerError)
			return
		}

		var meeting []*model.Meeting
		if _, err := us.GetReplica().Select(&meeting, queryString, args...); err != nil {
			result.Err = model.NewAppError("SqlUserStore.GetAllUpdateMeetings", "store.sql_meeting.get_profiles.app_error", nil, err.Error(), http.StatusInternalServerError)
			return
		}
		result.Data = meeting
	})
}

func (me SqlMeetingStore) LockRoomStatus(room *model.MeetingRoom) (int64, *model.AppError) {
	query := `
		update
			meetingroom b
		SET
           b.flag=:flag,
           b.user_id=:userId
		WHERE
			b.id = :Id
       AND
           b.flag='0'
			
	`
	res,err:=me.GetReplica().Exec(query, map[string]interface{}{"flag": room.Flag,"Id": room.Id,"userId":room.UserId});
	if err!=nil{
		return 0, model.NewAppError("MeetingRoom.update", "store.sql_meeting.update.app_error", nil, err.Error(), http.StatusInternalServerError)
	}
	result,er:=res.RowsAffected()
	if er!=nil{
		return 0, model.NewAppError("MeetingRoom.update", "store.sql_meeting.update.app_error", nil, err.Error(), http.StatusInternalServerError)
	}
	return result,nil
}

func (me SqlMeetingStore) UnLockRoomStatus(room *model.MeetingRoom) (int64, *model.AppError) {

	query := `
		update
			meetingroom b
		SET
           b.flag=:flag
		WHERE
			b.num = :Num
			
	`
	res,err:=me.GetReplica().Exec(query, map[string]interface{}{"flag": room.Flag,"Num": room.Num});
	if err!=nil{
		return 0, model.NewAppError("MeetingRoom.update", "store.sql_meeting.update.app_error", nil, err.Error(), http.StatusInternalServerError)
	}
	result,er:=res.RowsAffected()
	if er!=nil{
		return 0, model.NewAppError("MeetingRoom.update", "store.sql_meeting.update.app_error", nil, err.Error(), http.StatusInternalServerError)
	}
	return result,nil
}

func (me SqlMeetingStore) SaveMeetingMember(member *model.MeetingMembers)(*model.MeetingMembers,*model.AppError) {
	member = member.Clone()
	member.PreSave()
	query := `
		insert into
			meetingmembers 
       (meeting_id,meeting_no,user_name,nick_name,CreateAt,UpdateAt,DeleteAt)
		values
       (:meetingId,:meetingNo,:userName,:nickName,:CreateAt,:UpdateAt,:DeleteAt)
	`
	_,err:=me.GetReplica().Exec(query, map[string]interface{}{"meetingId": member.MeetingId,"meetingNo":member.MeetingNo,
	"userName":member.UserName,"nickName":member.NickName,"CreateAt":member.CreateAt,"UpdateAt":member.UpdateAt,"DeleteAt":member.DeleteAt});
	if err!=nil{
		return nil, model.NewAppError("MeetingMember.insert", "store.sql_meeting.member.insert.app_error", nil, err.Error(), http.StatusInternalServerError)
	}
	return member, nil
}

func (me SqlMeetingStore) DeleteMeetingMember(meetingId,userName string)(*model.AppError) {
	query := `
		delete from
			meetingmembers 
       where 
           meeting_id = :meetingId
       and 
           user_name = :userName
	`
	_,err:=me.GetReplica().Exec(query, map[string]interface{}{"meetingId": meetingId,"userName":userName});
	if err!=nil{
		return model.NewAppError("MeetingMember.delete", "store.sql_meeting.member.delete.app_error", nil, err.Error(), http.StatusInternalServerError)
	}
	return nil
}

func (me SqlMeetingStore) GetMeetingMember(meetingId string)([]*model.MeetingMembers,*model.AppError) {
	query := `
		select id as Id,meeting_id as MeetingId,meeting_no as MeetingNo,user_name as UserName,
           ifnull(nick_name,'') as nickName, CreateAt,UpdateAt from 
			meetingmembers 
         where meeting_id = :meetingId
	`
	var members []*model.MeetingMembers
	_,err:=me.GetReplica().Select(&members,query, map[string]interface{}{"meetingId": meetingId});
	if err!=nil{
		return nil, model.NewAppError("MeetingMember.insert", "store.sql_meeting.member.insert.app_error", nil, err.Error(), http.StatusInternalServerError)
	}
	return members, nil
}

func (me SqlMeetingStore) MeetingMemberHeartBeat(member *model.MeetingMembers)(*model.MeetingMembers,*model.AppError) {
	member.PreUpdate()
	query := `
		update
			meetingmembers 
       set UpdateAt = :updateAt
		where 
       user_name = :userName
       and
       meeting_id = :meetingId
	`
	_,err:=me.GetReplica().Exec(query, map[string]interface{}{"updateAt":member.UpdateAt,"userName":member.UserName,"meetingId":member.MeetingId});
	if err!=nil{
		return nil, model.NewAppError("MeetingMember.heartbeat", "store.sql_meeting.member.heatbeat.app_error", nil, err.Error(), http.StatusInternalServerError)
	}
	return member, nil
}
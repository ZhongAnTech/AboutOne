package app

import (
	"github.com/bitly/go-simplejson"
	"za-white-screen/mlog"
	"strconv"
	"za-white-screen/model"
	"net/http"
)

/**
删除指定会议室人员
 */
func (a *App) RemoveUserFromMeeting(conferenceNum,userName string) error {
	var memberId int64
	//get member
	memberList,err :=a.listRoomPerson(conferenceNum)
	if err!=nil{
		return err
	}
	res, err := simplejson.NewJson([]byte(memberList))
	ss,_:=res.GetIndex(0).Get("members").Array()
	for i,_ := range ss{
		person := res.GetIndex(0).Get("members").GetIndex(i)
		name,_:=person.Get("caller_id_number").String()
		if userName == name{
			memberId,_ = person.Get("id").Int64()
			mlog.Info("remove member from conference,conferenceNum="+conferenceNum+" userName="+userName +" memeberId="+strconv.FormatInt(memberId,10))
		}
	}
	if memberId>0{
		_,err:=a.kickPerson(conferenceNum,strconv.FormatInt(memberId,10))
		if err!=nil{
			mlog.Error("kick person failed! err="+err.Error())
		}
	}
	return nil
}
/**
关闭会议室
 */
func (a *App) CloseMeeting(conferenceNum string)  error{
	_,err := a.closeConference(conferenceNum)
	if err!=nil{
		mlog.Error("close meeting failed! conferenceNum="+conferenceNum+" error="+err.Error())
		return err
	}
	return nil
}

/**
获取当前会议室人员数量
 */
func (a *App) CountRoomPerson(conferenceNum string)  (string,error){
	if conferenceNum == ""{
		mlog.Error("close meeting failed! conferenceNum count be nil")
		return "",model.NewAppError("get_meetingRooms.CountRoomPerson", "CountRoomPerson.app_error", nil, "confereneceNum can not be nil", http.StatusInternalServerError)
	}
	count,err := a.countRoomPerson(conferenceNum)
	if err!=nil{
		mlog.Error("close meeting failed! conferenceNum="+conferenceNum+" error="+err.Error())
		return "",err
	}
	return count,nil
}
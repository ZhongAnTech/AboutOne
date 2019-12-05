package app

import (
	. "github.com/0x19/goesl"
	"fmt"
	"za-white-screen/mlog"
	"net/http"
	"za-white-screen/model"
)

//client.Api("conference count") 总共多少会议室
//client.Api("conference 3500 count") 指定会议室有多少人
//client.Api("conference 3500 list")  指定会议室成员列表
//client.Api("conference 3500 list delim <string>")
//client.Api("conference 3500 json_list") //获取会议人员详情 json格式
//client.Api("conference 3500 hup all") //挂断清空会议室
//client.Api("conference 3500 unvmute all") //关闭视频
//client.Api("conference 3500 kick 16") //踢人

func (a *App) countConference() (string,error){
	command := fmt.Sprintf("conference count")
	mlog.Info("fs command name is"+command)
	return a.exeCommand(command)
}

func (a *App) getConferenceList() (string,error){
	command := fmt.Sprintf("conference json_list")
	mlog.Info("fs command name is"+command)
	return a.exeCommand(command)
}

func (a *App) countRoomPerson(conferenceNum string) (string,error){
	if len(conferenceNum)<=0{
		mlog.Error("conferenceNum can not be nil")
		return "",model.NewAppError("CommandExe", "freeswitch.command.exe.app_error", nil, "body: ", http.StatusInternalServerError)
	}
	conferenceNum=conferenceNum+"-"+a.Config().FreeSwitchSettings.Host
	command := fmt.Sprintf("conference %s count",conferenceNum)
	mlog.Info("fs command name is"+command)
	return a.exeCommand(command)
}

func (a *App) listRoomPerson(conferenceNum string) (string,error){
	if len(conferenceNum)<=0{
		mlog.Error("conferenceNum can not be nil")
		return "",model.NewAppError("CommandExe", "freeswitch.command.exe.app_error", nil, "body: ", http.StatusInternalServerError)
	}
	conferenceNum=conferenceNum+"-"+a.Config().FreeSwitchSettings.Host
	command := fmt.Sprintf("conference %s json_list",conferenceNum)
	mlog.Info("fs command name is"+command)
	return a.exeCommand(command)
}

func (a *App) closeConference(conferenceNum string) (string,error){
	if len(conferenceNum)<=0{
		mlog.Error("conferenceNum can not be nil")
		return "",model.NewAppError("CommandExe", "freeswitch.command.exe.app_error", nil, "body: ", http.StatusInternalServerError)
	}
	conferenceNum=conferenceNum+"-"+a.Config().FreeSwitchSettings.Host
	command := fmt.Sprintf("conference %s hup all",conferenceNum)
	mlog.Info("fs command name is"+command)
	return a.exeCommand(command)
}

func (a *App) kickPerson(conferenceNum ,id string) (string,error){
	if len(conferenceNum)<=0{
		mlog.Error("conferenceNum can not be nil")
		return "",model.NewAppError("CommandExe", "freeswitch.command.exe.app_error", nil, "body: ", http.StatusInternalServerError)
	}
	conferenceNum=conferenceNum+"-"+a.Config().FreeSwitchSettings.Host
	if len(id)<=0{
		mlog.Error("conference personId can not be nil")
		return "",model.NewAppError("CommandExe", "freeswitch.command.exe.app_error", nil, "body: ", http.StatusInternalServerError)
	}
	command := fmt.Sprintf("conference %s kick %s",conferenceNum,id)
	mlog.Info("fs command name is"+command)
	return a.exeCommand(command)
}

func (a *App) getMemberList(conferenceNum string) (string,error) {
	if len(conferenceNum)<=0{
		mlog.Error("conferenceNum can not be nil")
		return "",model.NewAppError("CommandExe", "freeswitch.command.exe.app_error", nil, "body: ", http.StatusInternalServerError)
	}
	conferenceNum=conferenceNum+"-"+a.Config().FreeSwitchSettings.Host
	command := fmt.Sprintf("conference %s list",conferenceNum)
	mlog.Info("fs command name is"+command)
	return a.exeCommand(command)
}

func (a *App) exeCommand(command string)  (string,error) {
	client, err := a.GetClient()
	if err != nil {
		Error("Error while creating new client: %s", err)
		return "",err
	}
	go client.Handle()
	client.Api(command)
	msg, err := client.ReadMessage()
	if err != nil || msg==nil{
		Error("Error while reading Freeswitch message: %s", err)
		return "",err
	}
	result := string(msg.Body)
	if len(result)<=0 {
		mlog.Error("freeswitch command exe failed! result="+result)
		return "",model.NewAppError("CommandExe", "freeswitch.command.exe.app_error", nil, "body: ", http.StatusInternalServerError)
	}
	mlog.Info("fs command name "+command+" result:"+result)
	return result,nil
}

func (a *App) GetClient() (*Client, error)  {
	client, err := NewClient(a.Config().FreeSwitchSettings.Host, a.Config().FreeSwitchSettings.Port,
		a.Config().FreeSwitchSettings.Password, a.Config().FreeSwitchSettings.TimeOut)
	if err != nil {
		Error("Error while creating new client: %s", err)
		return nil,err
	}
	return client,nil
}

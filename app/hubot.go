package app

import (
	"za-white-screen/model"
)

func (a *App) ExecuteHubotWs(commandArgs *model.CommandArgs) (*model.CommandResponse, *model.AppError) {

	hubotPost := &model.Post{
		Message: "from args "+commandArgs.ToJson()+"",
		UserId: a.Session.UserId,
		Type:"hubot",
		ChannelId:commandArgs.ChannelId,
		CardType:"",

	}
	// 通过socket转发表单到hubot
	message := model.NewWebSocketEvent(model.WEBSOCKET_EVENT_POSTED, "", commandArgs.ChannelId, "", nil)
	message.Add("post", hubotPost.ToJson())
	message.Add("channel_type", hubotPost.Type)
	message.Add("card_type",hubotPost.CardType)
	message.Add("sender_name",hubotPost.UserId)
	a.Publish(message)
	return nil,nil
}

package einterfaces

import "za-white-screen/model"

type MsgInterface interface{
	PushMsgToUser(incomingWebhookPayload *model.IncomingWebhookRequest)
}
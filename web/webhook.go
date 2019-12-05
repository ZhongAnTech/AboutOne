


package web

import (
	"github.com/gorilla/mux"
	"github.com/gorilla/schema"
	"io"
	"net/http"
	"strings"

	"za-white-screen/mlog"
	"za-white-screen/model"
)

func (w *Web) InitWebhooks() {
	w.MainRouter.Handle("/hooks/commands/{id:[A-Za-z0-9]+}", w.NewHandler(commandWebhook)).Methods("POST")
	w.MainRouter.Handle("/hooks/{id:[A-Za-z0-9]+}", w.NewHandler(incomingWebhook)).Methods("POST")
	w.MainRouter.Handle("/hooks/user/{username}", w.NewHandler(deleteUserByUsername)).Methods("DELETE")
	w.MainRouter.Handle("/hooks/channel/create", w.NewHandler(createChannel)).Methods("POST")
	w.MainRouter.Handle("/hooks/push/msg", w.NewHandler(pushMsgToPersion)).Methods("POST")

}

/**
 * cml-20190813 创建channel
 */
func createChannel(c *Context, w http.ResponseWriter, r *http.Request)  {

	r.ParseForm()
	contentType := r.Header.Get("Content-Type")
	if !strings.HasPrefix(contentType, "application/json") {
		c.Err= model.NewAppError("creatChannelRequest.IsValid", "model.incoming_hook.content_type.app_error", nil, "Content-Type error", http.StatusBadRequest)
		return
	}

	incomingWebhookPayload := &model.IncomingWebhookRequest{}
	incomingWebhookPayload, err := decodePayload(r.Body)
	if err != nil {
		c.Err = err
		return
	}
	err = incomingWebhookPayload.CreateChannelReqIsValid()
	if err != nil {
		c.Err = err
		return
	}

	defer func() {
		if *c.App.Config().LogSettings.EnableWebhookDebugging {
			if c.Err != nil {
				mlog.Info("Incoming webhook createChannel-req", mlog.String("request_id", c.App.RequestId), mlog.String("payload", incomingWebhookPayload.ToJson()))
			}
		}
	}()
	//1.create team
	teams, err := c.App.GetTeamsByName(incomingWebhookPayload.TeamName)
	if err != nil {
		c.Err = err
		return
	}
	if teams == nil || len(teams) == 0{
			teams = make([]*model.Team, 1)
			// create team
			team := &model.Team{
				CreateAt:model.GetMillis(),
				UpdateAt:model.GetMillis(),
				DeleteAt:int64(0),
				DisplayName:incomingWebhookPayload.TeamDisplayName,
				Name:incomingWebhookPayload.TeamName,
				Description:incomingWebhookPayload.TeamName,
				Type:"O",
				InviteId:model.NewId(),
				AllowOpenInvite:false,
				LastTeamIconUpdate:int64(0),
			}
			c.App.CreateTeam(team)
			teams[0]=team
	}
	//2.create owner user
	var creatorId = ""
	for _,ownername := range incomingWebhookPayload.Owner{
		user,_ := c.App.GetUserByUsername(*ownername)
		if user == nil{
			userAdd := &model.User{
				Roles:"system_user",
				Locale:"zh-CN",
				CreateAt:model.GetMillis(),
				UpdateAt:model.GetMillis(),
				DeleteAt:int64(0),
				Username:*ownername,
				Email:*ownername,
				AuthService:model.USER_AUTH_SERVICE_SSO,
				Ou:incomingWebhookPayload.TeamName,
			}
			user,err := c.App.CreateUser(userAdd)
			if err != nil {
				c.Err = err
				return
			}
			if creatorId == "" {
				creatorId=user.Id
			}
		}
	}
	//3.create participant user
	for _,participant := range incomingWebhookPayload.Participant{
		user,_ := c.App.GetUserByUsername(*participant)
		if user == nil{
			userAdd := &model.User{
				Roles:"system_user",
				Locale:"zh-CN",
				CreateAt:model.GetMillis(),
				UpdateAt:model.GetMillis(),
				DeleteAt:int64(0),
				Username:*participant,
				Email:*participant,
				AuthService:model.USER_AUTH_SERVICE_SSO,
				Ou:incomingWebhookPayload.TeamName,
			}
			user,err = c.App.CreateUser(userAdd)
			if err != nil {
				c.Err = err
				return
			}
		}
	}
	//4.create channel
	channel, _ := c.App.GetChannelByName(incomingWebhookPayload.ChannelName,teams[0].Id,false)
	if channel == nil{
		channelAdd := &model.Channel{
			CreateAt:model.GetMillis(),
			UpdateAt:model.GetMillis(),
			DeleteAt:int64(0),
			TeamId:teams[0].Id,
			Type:incomingWebhookPayload.Type,
			Name:incomingWebhookPayload.ChannelName,
			DisplayName:incomingWebhookPayload.ChannelDisplayName,
			Header:incomingWebhookPayload.Header,
			Purpose:incomingWebhookPayload.Purpose,
			LastPostAt:int64(0),
			TotalMsgCount:int64(0),
			ExtraUpdateAt:int64(0),
			CreatorId:creatorId,
		}
		channel,err =c.App.CreateChannel(channelAdd,false)
		if err != nil {
			c.Err = err
			return
		}
	}
	//5.create team/channel and owner user relation
	for _,ownername := range incomingWebhookPayload.Owner{
		user,_ := c.App.GetUserByUsername(*ownername)
		if user != nil && user.Ou == incomingWebhookPayload.TeamName {
			_,err := c.App.AddTeamMember(teams[0].Id,user.Id)
			if err != nil {
				c.Err = err
				return
			}
			err = c.App.AddChannelMemberByUser(channel.Id,user,true)
			if err != nil {
				c.Err = err
				return
			}
		}else{
			mlog.Warn("createChannel-AddTeamMember-fail:",mlog.String("user.Id",user.Id),mlog.String("user.Ou",user.Ou),mlog.String("incomingWebhookPayload.TeamName",incomingWebhookPayload.TeamName))
		}
	}
	//6.create team/channel and participant user relation
	for _,participant := range incomingWebhookPayload.Participant{
		user,_ := c.App.GetUserByUsername(*participant)
		if user != nil && user.Ou == incomingWebhookPayload.TeamName {
			_,err := c.App.AddTeamMember(teams[0].Id,user.Id)
			if err != nil {
				c.Err = err
				return
			}
			err = c.App.AddChannelMemberByUser(channel.Id,user,false)
			if err != nil {
				c.Err = err
				return
			}
		}else {
			mlog.Warn("createChannel-AddTeamMember-fail:",mlog.String("user.Id",user.Id),mlog.String("user.Ou",user.Ou),mlog.String("incomingWebhookPayload.TeamName",incomingWebhookPayload.TeamName))
		}
	}
	ReturnStatusOK(w)
}


/**
 * cml-20190813 根据用户名删除用户
 */
func deleteUserByUsername(c *Context, w http.ResponseWriter, r *http.Request){
	params := mux.Vars(r)
	username := params["username"]

	user, err := c.App.GetUserByUsername(username)
	if err != nil {
		c.Err = err
		return
	}

	defer func() {
		if *c.App.Config().LogSettings.EnableWebhookDebugging {
			if c.Err != nil {
				mlog.Info("Incoming webhook deleteUserByUsername-req", mlog.String("username", username), mlog.String("request_id", c.App.RequestId))
			}
		}
	}()

	if _, err = c.App.UpdateActive(user, false); err != nil {
			c.Err = err
			return
	}

	ReturnStatusOK(w)

}

func incomingWebhook(c *Context, w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	id := params["id"]

	r.ParseForm()

	var err *model.AppError
	incomingWebhookPayload := &model.IncomingWebhookRequest{}
	contentType := r.Header.Get("Content-Type")

	defer func() {
		if *c.App.Config().LogSettings.EnableWebhookDebugging {
			if c.Err != nil {
				mlog.Debug("Incoming webhook received", mlog.String("webhook_id", id), mlog.String("request_id", c.App.RequestId), mlog.String("payload", incomingWebhookPayload.ToJson()))
			}
		}
	}()

	if strings.Split(contentType, "; ")[0] == "application/x-www-form-urlencoded" {
		payload := strings.NewReader(r.FormValue("payload"))

		incomingWebhookPayload, err = decodePayload(payload)
		if err != nil {
			c.Err = err
			return
		}
	} else if strings.HasPrefix(contentType, "multipart/form-data") {
		r.ParseMultipartForm(0)

		decoder := schema.NewDecoder()
		err := decoder.Decode(incomingWebhookPayload, r.PostForm)

		if err != nil {
			c.Err = model.NewAppError("incomingWebhook", "api.webhook.incoming.error", nil, err.Error(), http.StatusBadRequest)
			return
		}
	} else {
		incomingWebhookPayload, err = decodePayload(r.Body)
		if err != nil {
			c.Err = err
			return
		}
	}

	err = c.App.HandleIncomingWebhook(id, incomingWebhookPayload)
	if err != nil {
		c.Err = err
		return
	}

	w.Header().Set("Content-Type", "text/plain")
	w.Write([]byte("ok"))
}

func commandWebhook(c *Context, w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	id := params["id"]

	response, err := model.CommandResponseFromHTTPBody(r.Header.Get("Content-Type"), r.Body)
	if err != nil {
		c.Err = model.NewAppError("commandWebhook", "web.command_webhook.parse.app_error", nil, err.Error(), http.StatusBadRequest)
		return
	}

	appErr := c.App.HandleCommandWebhook(id, response)
	if appErr != nil {
		c.Err = appErr
		return
	}

	w.Header().Set("Content-Type", "text/plain")
	w.Write([]byte("ok"))
}

func decodePayload(payload io.Reader) (*model.IncomingWebhookRequest, *model.AppError) {
	incomingWebhookPayload, decodeError := model.IncomingWebhookRequestFromJson(payload)

	if decodeError != nil {
		return nil, decodeError
	}

	return incomingWebhookPayload, nil
}

func pushMsgToPersion(c *Context, w http.ResponseWriter, r *http.Request) {
	incomingWebhookPayload, err := decodePayload(r.Body)
	if err!=nil{
		mlog.Info("hooks push msg  failed! err="+err.Message)
	}
	incomingWebhookPayload.Username="bot"
	c.App.Msg.PushMsgToUser(incomingWebhookPayload)
	w.Header().Set("Content-Type", "application/json")
	w.Write([]byte("{\"status\": \"OK\"}"))
}



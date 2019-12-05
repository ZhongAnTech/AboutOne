package api4

import (
	"net/http"
	"za-white-screen/model"
	"strings"
)

func (api *API) InitHubot() {
	api.BaseRoutes.Hubot.Handle("/execute", api.ApiSessionRequired(executeHubotWs)).Methods("POST")
}
func executeHubotWs(c *Context, w http.ResponseWriter, r *http.Request) {
	commandArgs := model.CommandArgsFromJson(r.Body)
	if commandArgs == nil {
		c.SetInvalidParam("command_args")
		return
	}

	if len(commandArgs.Command) <= 1 || strings.Index(commandArgs.Command, "/") != 0 || len(commandArgs.ChannelId) != 26 {
		c.Err = model.NewAppError("executeCommand", "api.command.execute_command.start.app_error", nil, "", http.StatusBadRequest)
		return
	}

	// checks that user is a member of the specified channel, and that they have permission to use slash commands in it
	if !c.App.SessionHasPermissionToChannel(c.App.Session, commandArgs.ChannelId, model.PERMISSION_USE_SLASH_COMMANDS) {
		c.SetPermissionError(model.PERMISSION_USE_SLASH_COMMANDS)
		return
	}

	_, err := c.App.GetChannel(commandArgs.ChannelId)
	if err != nil {
		c.Err = err
		return
	}

	//cml-20191025 去掉取channel.TeamId覆盖commandArgs.TeamId逻辑(私有频道已无teamid)
	if c.App.Session.GetTeamByTeamId(commandArgs.TeamId) == nil {
		if !c.App.SessionHasPermissionTo(c.App.Session, model.PERMISSION_USE_SLASH_COMMANDS) {
			c.SetPermissionError(model.PERMISSION_USE_SLASH_COMMANDS)
			return
		}
	}

	commandArgs.UserId = c.App.Session.UserId
	commandArgs.T = c.App.T
	commandArgs.Session = c.App.Session
	commandArgs.SiteURL = c.GetSiteURLHeader()
	response, err := c.App.ExecuteHubotWs(commandArgs)
	if err != nil {
		c.Err = err
		return
	}
	w.Write([]byte(response.ToJson()))
}
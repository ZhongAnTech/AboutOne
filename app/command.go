


package app

import (
	"fmt"
	"io"
	"io/ioutil"
	"net/http"
	"net/url"
	"strings"

	"bytes"
	"encoding/json"
	"github.com/bitly/go-simplejson"
	goi18n "github.com/mattermost/go-i18n/i18n"
	"za-white-screen/mlog"
	"za-white-screen/model"
	"za-white-screen/store"
	"za-white-screen/utils"
)

type CommandProvider interface {
	GetTrigger() string
	GetCommand(a *App, T goi18n.TranslateFunc) *model.Command
	DoCommand(a *App, args *model.CommandArgs, message string) *model.CommandResponse
}

type CommandGetUrlResponse struct {
	Code          int64             `json:"code"`
	Data          string             `json:"data"`
	Message       string             `json:"message"`
}

var commandProviders = make(map[string]CommandProvider)

func RegisterCommandProvider(newProvider CommandProvider) {
	commandProviders[newProvider.GetTrigger()] = newProvider
}

func GetCommandProvider(name string) CommandProvider {
	provider, ok := commandProviders[name]
	if ok {
		return provider
	}

	return nil
}

func (a *App) CreateCommandPost(post *model.Post, teamId string, response *model.CommandResponse) (*model.Post, *model.AppError) {
	post.Message = model.ParseSlackLinksToMarkdown(response.Text)
	post.CreateAt = model.GetMillis()

	if strings.HasPrefix(post.Type, model.POST_SYSTEM_MESSAGE_PREFIX) {
		err := model.NewAppError("CreateCommandPost", "api.context.invalid_param.app_error", map[string]interface{}{"Name": "post.type"}, "", http.StatusBadRequest)
		return nil, err
	}

	if response.Attachments != nil {
		model.ParseSlackAttachment(post, response.Attachments)
	}

	if response.ResponseType == model.COMMAND_RESPONSE_TYPE_IN_CHANNEL {
		return a.CreatePostMissingChannel(post, true)
	}

	if (response.ResponseType == "" || response.ResponseType == model.COMMAND_RESPONSE_TYPE_EPHEMERAL) && (response.Text != "" || response.Attachments != nil) {
		post.ParentId = ""
		a.SendEphemeralPost(post.UserId, post)
	}

	return post, nil
}

// previous ListCommands now ListAutocompleteCommands
func (a *App) ListAutocompleteCommands(teamId string, T goi18n.TranslateFunc) ([]*model.Command, *model.AppError) {
	commands := make([]*model.Command, 0, 32)
	seen := make(map[string]bool)
	for _, value := range commandProviders {
		if cmd := value.GetCommand(a, T); cmd != nil {
			cpy := *cmd
			if cpy.AutoComplete && !seen[cpy.Id] {
				cpy.Sanitize()
				seen[cpy.Trigger] = true
				commands = append(commands, &cpy)
			}
		}
	}

	for _, cmd := range a.PluginCommandsForTeam(teamId) {
		if cmd.AutoComplete && !seen[cmd.Trigger] {
			seen[cmd.Trigger] = true
			commands = append(commands, cmd)
		}
	}

	if *a.Config().ServiceSettings.EnableCommands {
		teamCmds, err := a.Srv.Store.Command().GetByTeam(teamId)
		if err != nil {
			return nil, err
		}

		for _, cmd := range teamCmds {
			if cmd.AutoComplete && !seen[cmd.Id] {
				cmd.Sanitize()
				seen[cmd.Trigger] = true
				commands = append(commands, cmd)
			}
		}
	}

	return commands, nil
}

func (a *App) ListTeamCommands(teamId string) ([]*model.Command, *model.AppError) {
	if !*a.Config().ServiceSettings.EnableCommands {
		return nil, model.NewAppError("ListTeamCommands", "api.command.disabled.app_error", nil, "", http.StatusNotImplemented)
	}

	return a.Srv.Store.Command().GetAllByTeam(teamId)
}

func (a *App) ListTeamCommandsByType(teamId ,commandType string) ([]*model.Command, *model.AppError) {
	if !*a.Config().ServiceSettings.EnableCommands {
		return nil, model.NewAppError("ListTeamCommands", "api.command.disabled.app_error", nil, "", http.StatusNotImplemented)
	}
	if commandType == ""{
		return a.Srv.Store.Command().GetAllByTeam(teamId)
	}
	return a.Srv.Store.Command().GetAllByTeamAndType(teamId,commandType)
}

func (a *App) ListAllCommands(teamId string, T goi18n.TranslateFunc) ([]*model.Command, *model.AppError) {
	commands := make([]*model.Command, 0, 32)
	seen := make(map[string]bool)
	for _, value := range commandProviders {
		if cmd := value.GetCommand(a, T); cmd != nil {
			cpy := *cmd
			if cpy.AutoComplete && !seen[cpy.Trigger] {
				cpy.Sanitize()
				seen[cpy.Trigger] = true
				commands = append(commands, &cpy)
			}
		}
	}

	for _, cmd := range a.PluginCommandsForTeam(teamId) {
		if !seen[cmd.Trigger] {
			seen[cmd.Trigger] = true
			commands = append(commands, cmd)
		}
	}

	if *a.Config().ServiceSettings.EnableCommands {
		teamCmds, err := a.Srv.Store.Command().GetByTeam(teamId)
		if err != nil {
			return nil, err
		}
		for _, cmd := range teamCmds {
			if !seen[cmd.Trigger] {
				cmd.Sanitize()
				seen[cmd.Trigger] = true
				commands = append(commands, cmd)
			}
		}
	}

	return commands, nil
}
func (a *App) GetCommandTypes(teamId string) ([]*string, *model.AppError) {
	return a.Srv.Store.Command().GetCommandTypes(teamId)
}

func (a *App) ExecuteCommand(args *model.CommandArgs) (*model.CommandResponse, *model.AppError) {
	parts := strings.Split(args.Command, " ")
	trigger := parts[0][1:]
	trigger = strings.ToLower(trigger)
	message := strings.Join(parts[1:], " ")

	clientTriggerId, triggerId, appErr := model.GenerateTriggerId(args.UserId, a.AsymmetricSigningKey())
	if appErr != nil {
		mlog.Error(appErr.Error())
	}

	args.TriggerId = triggerId

	cmd, response := a.tryExecuteBuiltInCommand(args, trigger, message)
	if cmd != nil && response != nil {
		return a.HandleCommandResponse(cmd, args, response, true)
	}

	cmd, response, appErr = a.tryExecutePluginCommand(args)
	if appErr != nil {
		return nil, appErr
	} else if cmd != nil && response != nil {
		response.TriggerId = clientTriggerId
		return a.HandleCommandResponse(cmd, args, response, true)
	}

	cmd, response, appErr = a.tryExecuteCustomCommand(args, trigger, message)
	if appErr != nil {
		return nil, appErr
	} else if cmd != nil && response != nil {
		response.TriggerId = clientTriggerId
		return a.HandleCommandResponse(cmd, args, response, false)
	}

	return nil, model.NewAppError("command", "api.command.execute_command.not_found.app_error", map[string]interface{}{"Trigger": trigger}, "", http.StatusNotFound)
}

// tryExecutePluginCommand attempts to run a built in command based on the given arguments. If no such command can be
// found, returns nil for all arguments.
func (a *App) tryExecuteBuiltInCommand(args *model.CommandArgs, trigger string, message string) (*model.Command, *model.CommandResponse) {
	provider := GetCommandProvider(trigger)
	if provider == nil {
		return nil, nil
	}

	cmd := provider.GetCommand(a, args.T)
	if cmd == nil {
		return nil, nil
	}

	return cmd, provider.DoCommand(a, args, message)
}

func (a *App) HandleCommandResponse(command *model.Command, args *model.CommandArgs, response *model.CommandResponse, builtIn bool) (*model.CommandResponse, *model.AppError) {
	trigger := ""
	if len(args.Command) != 0 {
		parts := strings.Split(args.Command, " ")
		trigger = parts[0][1:]
		trigger = strings.ToLower(trigger)
	}

	var lastError *model.AppError
	if command.Trigger != "inner" {
		_, err := a.HandleCommandResponsePost(command, args, response, builtIn)
		if err != nil {
			mlog.Error(err.Error())
			lastError = err
		}
	}

	if response.ExtraResponses != nil && command.Trigger != "inner" {
		for _, resp := range response.ExtraResponses {
			_, err := a.HandleCommandResponsePost(command, args, resp, builtIn)
			if err != nil {
				mlog.Error(err.Error())
				lastError = err
			}
		}
	}

	if lastError != nil {
		return response, model.NewAppError("command", "api.command.execute_command.create_post_failed.app_error", map[string]interface{}{"Trigger": trigger}, "", http.StatusInternalServerError)
	}

	return response, nil
}

func (a *App) HandleCommandResponsePost(command *model.Command, args *model.CommandArgs, response *model.CommandResponse, builtIn bool) (*model.Post, *model.AppError) {
	post := &model.Post{}
	post.ChannelId = args.ChannelId
	post.RootId = args.RootId
	post.ParentId = args.ParentId
	post.UserId = args.UserId
	post.Type = response.Type
	post.Props = response.Props
	post.CardType = response.CardType

	if len(response.ChannelId) != 0 {
		_, err := a.GetChannelMember(response.ChannelId, args.UserId)
		if err != nil {
			err = model.NewAppError("HandleCommandResponsePost", "api.command.command_post.forbidden.app_error", nil, err.Error(), http.StatusForbidden)
			return nil, err
		}
		post.ChannelId = response.ChannelId
	}

	isBotPost := !builtIn

	if *a.Config().ServiceSettings.EnablePostUsernameOverride {
		if len(command.Username) != 0 {
			post.AddProp("override_username", command.Username)
			isBotPost = true
		} else if len(response.Username) != 0 {
			post.AddProp("override_username", response.Username)
			isBotPost = true
		}
	}

	if *a.Config().ServiceSettings.EnablePostIconOverride {
		if len(command.IconURL) != 0 {
			post.AddProp("override_icon_url", command.IconURL)
			isBotPost = true
		} else if len(response.IconURL) != 0 {
			post.AddProp("override_icon_url", response.IconURL)
			isBotPost = true
		} else {
			post.AddProp("override_icon_url", "")
		}
	}

	if isBotPost {
		post.AddProp("from_webhook", "true")
	}

	// Process Slack text replacements
	response.Text = a.ProcessSlackText(response.Text)
	response.Attachments = a.ProcessSlackAttachments(response.Attachments)
	if _, err := a.CreateCommandPost(post, args.TeamId, response); err != nil {
		return post, err
	}

	return post, nil
}

func (a *App) CreateCommand(cmd *model.Command) (*model.Command, *model.AppError) {
	if !*a.Config().ServiceSettings.EnableCommands {
		return nil, model.NewAppError("CreateCommand", "api.command.disabled.app_error", nil, "", http.StatusNotImplemented)
	}

	cmd.Trigger = strings.ToLower(cmd.Trigger)

	teamCmds, err := a.Srv.Store.Command().GetByTeam(cmd.TeamId)
	if err != nil {
		return nil, err
	}

	for _, existingCommand := range teamCmds {
		if cmd.Trigger == existingCommand.Trigger {
			return nil, model.NewAppError("CreateCommand", "api.command.duplicate_trigger.app_error", nil, "", http.StatusBadRequest)
		}
	}

	for _, builtInProvider := range commandProviders {
		builtInCommand := builtInProvider.GetCommand(a, utils.T)
		if builtInCommand != nil && cmd.Trigger == builtInCommand.Trigger {
			return nil, model.NewAppError("CreateCommand", "api.command.duplicate_trigger.app_error", nil, "", http.StatusBadRequest)
		}
	}

	return a.Srv.Store.Command().Save(cmd)
}

func (a *App) GetCommand(commandId string) (*model.Command, *model.AppError) {
	if !*a.Config().ServiceSettings.EnableCommands {
		return nil, model.NewAppError("GetCommand", "api.command.disabled.app_error", nil, "", http.StatusNotImplemented)
	}

	cmd, err := a.Srv.Store.Command().Get(commandId)
	if err != nil {
		err.StatusCode = http.StatusNotFound
		return nil, err
	}

	return cmd, nil
}

func (a *App) UpdateCommand(oldCmd, updatedCmd *model.Command) (*model.Command, *model.AppError) {
	if !*a.Config().ServiceSettings.EnableCommands {
		return nil, model.NewAppError("UpdateCommand", "api.command.disabled.app_error", nil, "", http.StatusNotImplemented)
	}

	updatedCmd.Trigger = strings.ToLower(updatedCmd.Trigger)
	updatedCmd.Id = oldCmd.Id
	updatedCmd.Token = oldCmd.Token
	updatedCmd.CreateAt = oldCmd.CreateAt
	updatedCmd.UpdateAt = model.GetMillis()
	updatedCmd.DeleteAt = oldCmd.DeleteAt
	updatedCmd.CreatorId = oldCmd.CreatorId
	updatedCmd.TeamId = oldCmd.TeamId

	return a.Srv.Store.Command().Update(updatedCmd)
}

func (a *App) MoveCommand(team *model.Team, command *model.Command) *model.AppError {
	command.TeamId = team.Id

	_, err := a.Srv.Store.Command().Update(command)
	if err != nil {
		return err
	}

	return nil
}

func (a *App) RegenCommandToken(cmd *model.Command) (*model.Command, *model.AppError) {
	if !*a.Config().ServiceSettings.EnableCommands {
		return nil, model.NewAppError("RegenCommandToken", "api.command.disabled.app_error", nil, "", http.StatusNotImplemented)
	}

	cmd.Token = model.NewId()

	return a.Srv.Store.Command().Update(cmd)
}

func (a *App) DeleteCommand(commandId string) *model.AppError {
	if !*a.Config().ServiceSettings.EnableCommands {
		return model.NewAppError("DeleteCommand", "api.command.disabled.app_error", nil, "", http.StatusNotImplemented)
	}

	return a.Srv.Store.Command().Delete(commandId, model.GetMillis())
}

func (a *App) tryExecuteCustomCommand(args *model.CommandArgs, trigger string, message string) (*model.Command, *model.CommandResponse, *model.AppError) {
	// Handle custom commands
	if !*a.Config().ServiceSettings.EnableCommands {
		return nil, nil, model.NewAppError("ExecuteCommand", "api.command.disabled.app_error", nil, "", http.StatusNotImplemented)
	}

	chanChan := make(chan store.StoreResult, 1)
	go func() {
		channel, err := a.Srv.Store.Channel().Get(args.ChannelId, true)
		chanChan <- store.StoreResult{Data: channel, Err: err}
		close(chanChan)
	}()

	teamChan := make(chan store.StoreResult, 1)
	go func() {
		team, err := a.Srv.Store.Team().Get(args.TeamId)
		teamChan <- store.StoreResult{Data: team, Err: err}
		close(teamChan)
	}()

	userChan := make(chan store.StoreResult, 1)
	go func() {
		user, err := a.Srv.Store.User().Get(args.UserId)
		userChan <- store.StoreResult{Data: user, Err: err}
		close(userChan)
	}()

	teamCmds, err := a.Srv.Store.Command().GetAllByTeam(args.TeamId)
	if err != nil {
		return nil, nil, err
	}

	tr := <-teamChan
	if tr.Err != nil {
		return nil, nil, tr.Err
	}
	team := tr.Data.(*model.Team)

	ur := <-userChan
	if ur.Err != nil {
		return nil, nil, ur.Err
	}
	user := ur.Data.(*model.User)

	cr := <-chanChan
	if cr.Err != nil {
		return nil, nil, cr.Err
	}
	channel := cr.Data.(*model.Channel)

	var cmd *model.Command

	for _, teamCmd := range teamCmds {
		if trigger == teamCmd.Trigger {
			cmd = teamCmd
		}
	}

	if cmd == nil {
		return nil, nil, nil
	}

	if cmd.Method == model.COMMAND_METHOD_NON {//cml-20190917直接返回url
		commandResp := &model.CommandResponse{
			Text : "指令触发成功，执行内容:/"+cmd.Trigger+" ,已为您在新窗口开启服务。",
			CardType : "9999",
			CommandURL : cmd.URL,
		}
		return cmd, commandResp, nil
	}

	mlog.Debug(fmt.Sprintf(utils.T("api.command.execute_command.debug"), trigger, args.UserId))

	p := url.Values{}
	p.Set("token", cmd.Token)
	p.Set("company_id",team.Name)
	p.Set("company_name",team.CompanyName)
	p.Set("team_id", cmd.TeamId)
	p.Set("team_domain", team.Name)
	p.Set("channel_id", args.ChannelId)
	p.Set("channel_name", channel.Name)

	p.Set("user_id", args.UserId)
	p.Set("user_name", user.Username)

	p.Set("command", trigger)
	p.Set("text", message)

	p.Set("trigger_id", args.TriggerId)

	hook, appErr := a.CreateCommandWebhook(cmd.Id, args)
	if appErr != nil {
		return cmd, nil, model.NewAppError("command", "api.command.execute_command.failed.app_error", map[string]interface{}{"Trigger": trigger}, appErr.Error(), http.StatusInternalServerError)
	}
	if !strings.Contains(args.SiteURL,"https"){
		args.SiteURL = strings.Replace(args.SiteURL,"http","https",-1)
	}
	p.Set("response_url", args.SiteURL+"/hooks/commands/"+hook.Id)
	// update url
	parts := strings.Split(args.Command, " ")
	hint := strings.Split(cmd.AutoCompleteHint, " ")
	url := cmd.URL
	for i,n := range hint{
		if i+1 <= len(parts)-1 {
			if strings.Contains(url, n) {
				url = strings.Replace(url, n, parts[i+1], -1)
			} else {
				key := strings.Replace(n, "{", "", -1)
				key = strings.Replace(key, "}", "", -1)
				p.Set(key, parts[i+1])
			}
		}
	}
	cmd.URL = url
	cmd.AutoCompleteHint = args.Command
	return a.doCommandRequest(cmd, p)
}

func (a *App) doCommandRequest(cmd *model.Command, p url.Values) (*model.Command, *model.CommandResponse, *model.AppError) {
	// Prepare the request
	var req *http.Request
	var err error
	if cmd.Method == model.COMMAND_METHOD_GET {
		req, err = http.NewRequest(http.MethodGet, cmd.URL, nil)
	} else {
		// lgx-20190928 业务请求参数和AO请求独立开。
		if len(p.Get("json")) > 0 {
			mlog.Info("request jsong="+p.Get("json"))
			jsonString :=p.Get("json")
			requestBody := new(bytes.Buffer)
			res, _ := simplejson.NewJson([]byte(jsonString))
			mlog.Info("request body ="+jsonString)
			json.NewEncoder(requestBody).Encode(res)
			//lgx-20170928 返回一个新的request请求
			req, err = http.NewRequest(http.MethodPost, cmd.URL, requestBody)
		} else {
			req, err = http.NewRequest(http.MethodPost, cmd.URL,nil)
		}
	}
	if err != nil {
		return cmd, nil, model.NewAppError("command", "api.command.execute_command.failed.app_error", map[string]interface{}{"Trigger": cmd.Trigger}, err.Error(), http.StatusInternalServerError)
	}

	req.Header.Set("Accept", "application/json")
	//lgx-20190928通用字段塞到header里面
	req.Header.Set("Authorization", p.Encode())
	req.Header.Set("UserId",p.Get("user_id"))
	req.Header.Set("UserName",p.Get("user_name"))
	req.Header.Set("CompanyId",p.Get("company_id"))
	req.Header.Set("CompanyName",p.Get("company_name"))
	req.Header.Set("ChannelId",p.Get("channel_id"))
	req.Header.Set("ChannelName",p.Get("channel_name"))
	req.Header.Set("Content-Type", "application/json")
	mlog.Info("commond request url="+req.URL.String())
	// lgx-20190928通过新的请求去访问cmd.URL等于集成里面配置的命令触发地址
	resp, err := a.HTTPService.MakeClient(false).Do(req)
	cmd.Trigger="inner"
	if err != nil {
		return cmd, nil, model.NewAppError("command", "api.command.execute_command.failed.app_error", map[string]interface{}{"Trigger": cmd.Trigger}, err.Error(), http.StatusInternalServerError)
	}
	defer resp.Body.Close()
	var respMsg string
	var errmsg string
	// Handle the response
	body := io.LimitReader(resp.Body, MaxIntegrationResponseSize)
	var response *model.CommandResponse
	if resp.StatusCode == http.StatusOK {
		bodyBytes, _ := ioutil.ReadAll(body)
		// lgx-20190928 触发命令访问地址返回来的响应
		respMsg = string(bodyBytes)
		mlog.Info("inner service api  response=" + respMsg)
		//将respMsg 响应体放到CommandResponse 命令响应结构体中的Text字段里面。
		response = &model.CommandResponse{
			Text: respMsg,
		}
		return cmd, response, nil
	}else{
		bodyBytes, _ := ioutil.ReadAll(body)
		errmsg = string(bodyBytes)
		response = &model.CommandResponse{
			Text: errmsg,
		}
		return cmd, response, nil
	}
}

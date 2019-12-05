// Copyright (c) 2019-present AboutOne, Inc. All Rights Reserved.


package app

import (
	goi18n "github.com/mattermost/go-i18n/i18n"
	"za-white-screen/model"
)

type SettingsProvider struct {
}

const (
	CMD_SETTINGS = "settings"
)

func init() {
	RegisterCommandProvider(&SettingsProvider{})
}

func (settings *SettingsProvider) GetTrigger() string {
	return CMD_SETTINGS
}

func (settings *SettingsProvider) GetCommand(a *App, T goi18n.TranslateFunc) *model.Command {
	return &model.Command{
		Trigger:          CMD_SETTINGS,
		AutoComplete:     true,
		AutoCompleteDesc: T("api.command_settings.desc"),
		AutoCompleteHint: "",
		DisplayName:      T("api.command_settings.name"),
	}
}

func (settings *SettingsProvider) DoCommand(a *App, args *model.CommandArgs, message string) *model.CommandResponse {
	// This command is handled client-side and shouldn't hit the server.
	return &model.CommandResponse{
		Text:         args.T("api.command_settings.unsupported.app_error"),
		ResponseType: model.COMMAND_RESPONSE_TYPE_EPHEMERAL,
	}
}

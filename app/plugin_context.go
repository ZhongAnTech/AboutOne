// Copyright (c) 2019-present AboutOne, Inc. All Rights Reserved.


package app

import "za-white-screen/plugin"

func (a *App) PluginContext() *plugin.Context {
	context := &plugin.Context{
		RequestId:      a.RequestId,
		SessionId:      a.Session.Id,
		IpAddress:      a.IpAddress,
		AcceptLanguage: a.AcceptLanguage,
		UserAgent:      a.UserAgent,
	}
	return context
}

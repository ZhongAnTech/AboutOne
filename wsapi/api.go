// Copyright (c) 2019-present AboutOne, Inc. All Rights Reserved.


package wsapi

import (
	"za-white-screen/app"
)

type API struct {
	App    *app.App
	Router *app.WebSocketRouter
}

func Init(a *app.App, router *app.WebSocketRouter) {
	api := &API{
		App:    a,
		Router: router,
	}

	api.InitUser()
	api.InitSystem()
	api.InitStatus()
	a.HubStart()
}

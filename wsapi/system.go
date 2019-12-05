// Copyright (c) 2019-present AboutOne, Inc. All Rights Reserved.


package wsapi

import (
	"za-white-screen/model"
)

func (api *API) InitSystem() {
	api.Router.Handle("ping", api.ApiWebSocketHandler(ping))
}

func ping(req *model.WebSocketRequest) (map[string]interface{}, *model.AppError) {
	data := map[string]interface{}{}
	data["text"] = "pong"
	data["version"] = model.CurrentVersion
	data["server_time"] = model.GetMillis()
	data["node_id"] = ""

	return data, nil
}

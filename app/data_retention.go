// Copyright (c) 2019-present AboutOne, Inc. All Rights Reserved.


package app

import (
	"net/http"

	"za-white-screen/model"
)

func (a *App) GetDataRetentionPolicy() (*model.DataRetentionPolicy, *model.AppError) {
	if a.DataRetention == nil {
		return nil, model.NewAppError("App.GetDataRetentionPolicy", "ent.data_retention.generic.license.error", nil, "", http.StatusNotImplemented)
	}

	return a.DataRetention.GetPolicy()
}

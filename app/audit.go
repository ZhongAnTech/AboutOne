// Copyright (c) 2019-present AboutOne, Inc. All Rights Reserved.


package app

import (
	"za-white-screen/model"
)

func (a *App) GetAudits(userId string, limit int) (model.Audits, *model.AppError) {
	return a.Srv.Store.Audit().Get(userId, 0, limit)
}

func (a *App) GetAuditsPage(userId string, page int, perPage int) (model.Audits, *model.AppError) {
	return a.Srv.Store.Audit().Get(userId, page*perPage, perPage)
}

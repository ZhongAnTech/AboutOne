


package app

import (
	"net/http"

	"za-white-screen/model"
)

func (a *App) GetPreferencesForUser(userId string) (model.Preferences, *model.AppError) {
	preferences, err := a.Srv.Store.Preference().GetAll(userId)
	if err != nil {
		err.StatusCode = http.StatusBadRequest
		return nil, err
	}
	return preferences, nil
}

func (a *App) GetPreferenceByCategoryForUser(userId string, category string) (model.Preferences, *model.AppError) {
	preferences, err := a.Srv.Store.Preference().GetCategory(userId, category)
	if err != nil {
		err.StatusCode = http.StatusBadRequest
		return nil, err
	}
	if len(preferences) == 0 {
		err := model.NewAppError("getPreferenceCategory", "api.preference.preferences_category.get.app_error", nil, "", http.StatusNotFound)
		return nil, err
	}
	return preferences, nil
}

func (a *App) GetPreferenceByCategoryAndNameForUser(userId string, category string, preferenceName string) (*model.Preference, *model.AppError) {
	res, err := a.Srv.Store.Preference().Get(userId, category, preferenceName)
	if err != nil {
		err.StatusCode = http.StatusBadRequest
		return nil, err
	}
	return res, nil
}

func (a *App) SaveCollectsHasPostId(collects model.Collects) *model.AppError {
	for _,collect := range collects {
		a.SaveCollectHasPostId(collect)
	}
	return nil
}

func (a *App) SaveCollectHasPostId(collect *model.Collect) *model.AppError {
	collectDb,_ := a.Srv.Store.Collect().Search(collect.Collector,collect.PostId,"","",0,1)
	if len(collectDb)==0 {
		a.Srv.Store.Collect().Insert(collect)
	}
	return nil
}

func (a *App) InsertCollect(collect *model.Collect) (*model.Collect, *model.AppError) {
	return	a.Srv.Store.Collect().Insert(collect)
}

func (a *App) GetCollectById(collectId string) (*model.Collect, *model.AppError){
	return a.Srv.Store.Collect().Get(collectId)
}

func (a *App) DeleteCollect(collectId string) *model.AppError {
	return  a.Srv.Store.Collect().DeleteById(collectId)
}

func (a *App) GetCollect(userId string, page, perPage int) ([]*model.Collect,*model.AppError) {
	return  a.Srv.Store.Collect().Search(userId,"","","",page*perPage,perPage)
}

func (a *App) UpdatePreferences(userId string, preferences model.Preferences) *model.AppError {
	for _, preference := range preferences {
		if userId != preference.UserId {
			return model.NewAppError("savePreferences", "api.preference.update_preferences.set.app_error", nil,
				"userId="+userId+", preference.UserId="+preference.UserId, http.StatusForbidden)
		}
	}

	if err := a.Srv.Store.Preference().Save(&preferences); err != nil {
		err.StatusCode = http.StatusBadRequest
		return err
	}

	message := model.NewWebSocketEvent(model.WEBSOCKET_EVENT_PREFERENCES_CHANGED, "", "", userId, nil)
	message.Add("preferences", preferences.ToJson())
	a.Publish(message)

	return nil
}

func (a *App) DeletePreference(preference *model.Preference) *model.AppError {
	err := a.Srv.Store.Preference().Delete(preference.UserId, preference.Category, preference.Name)
	if err != nil {
		return err
	}
	var preferences model.Preferences
	message := model.NewWebSocketEvent(model.WEBSOCKET_EVENT_PREFERENCES_DELETED, "", "", preference.UserId, nil)
	preferences = append(preferences, *preference)
	message.Add("preferences", preferences.ToJson())
	a.Publish(message)
	return nil
}

func (a *App) DeletePreferences(userId string, preferences model.Preferences) *model.AppError {
	for _, preference := range preferences {
		if userId != preference.UserId {
			err := model.NewAppError("deletePreferences", "api.preference.delete_preferences.delete.app_error", nil,
				"userId="+userId+", preference.UserId="+preference.UserId, http.StatusForbidden)
			return err
		}
	}

	for _, preference := range preferences {
		if err := a.Srv.Store.Preference().Delete(userId, preference.Category, preference.Name); err != nil {
			err.StatusCode = http.StatusBadRequest
			return err
		}else{
			if preference.Category == model.PREFERENCE_CATEGORY_FLAGGED_POST {
				collectDb,_ := a.Srv.Store.Collect().Search(preference.UserId,preference.Name,"", "", 0,  1)
				if len(collectDb) > 0{
					a.Srv.Store.Collect().DeleteById(collectDb[0].Id)
				}
			}
		}
	}

	message := model.NewWebSocketEvent(model.WEBSOCKET_EVENT_PREFERENCES_DELETED, "", "", userId, nil)
	message.Add("preferences", preferences.ToJson())
	a.Publish(message)

	return nil
}

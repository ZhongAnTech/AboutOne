// // Copyright (c) 2019-present AboutOne, Inc. All Rights Reserved.
// 

package api4

import (
	"encoding/json"
	"net/http"
	"za-white-screen/model"
)

func (api *API) InitPreference() {
	api.BaseRoutes.Preferences.Handle("", api.ApiSessionRequired(getPreferences)).Methods("GET")
	api.BaseRoutes.Preferences.Handle("", api.ApiSessionRequired(updatePreferences)).Methods("PUT")
	api.BaseRoutes.Preferences.Handle("/delete", api.ApiSessionRequired(deletePreferences)).Methods("POST")
	api.BaseRoutes.Preferences.Handle("/{category:[A-Za-z0-9_]+}", api.ApiSessionRequired(getPreferencesByCategory)).Methods("GET")
	api.BaseRoutes.Preferences.Handle("/{category:[A-Za-z0-9_]+}/name/{preference_name:[A-Za-z0-9_]+}", api.ApiSessionRequired(getPreferenceByCategoryAndName)).Methods("GET")

	api.BaseRoutes.User.Handle("/collect/merge", api.ApiSessionRequired(mergeCollect)).Methods("POST")//cml-20191031 合并收藏 api/v4/users/{user_id:[A-Za-z0-9]+}/collect/merge
	api.BaseRoutes.User.Handle("/collect", api.ApiSessionRequired(getCollect)).Methods("GET")//cml-20191031 获取用户收藏  api/v4/users/{user_id:[A-Za-z0-9]+}/collect?page=0&per_page=60
	api.BaseRoutes.User.Handle("/collect/{collect_id:[A-Za-z0-9_]+}", api.ApiSessionRequired(deleteCollect)).Methods("DELETE")//cml-20191031 删除用户收藏  api/v4/users/{user_id:[A-Za-z0-9]+}/collect/{collect_id:[A-Za-z0-9_]+}

	api.BaseRoutes.User.Handle("/collect", api.ApiSessionRequired(getCollectPost)).Methods("POST")//cml-20191105 获取用户合并收藏入参数组[]  api/v4/users/{user_id:[A-Za-z0-9]+}/collect/

}

func getCollectPost(c *Context, w http.ResponseWriter, r *http.Request) {
	c.RequireUserId()
	if c.Err != nil {
		return
	}
	if !c.App.SessionHasPermissionToUser(c.App.Session, c.Params.UserId) {
		c.SetPermissionError(model.PERMISSION_EDIT_OTHER_USERS)
		return
	}
	postForwardReq := model.CollectQueryReqFromJson(r.Body)
	if postForwardReq == nil {
		c.SetInvalidParam("body_request_json")
		return
	}
	postIdsSize := len(postForwardReq.PostIds)
	if postIdsSize == 0 {
		c.SetInvalidParam("post_ids")
		return
	}

	var collectsDb []*model.Collect
	if model.TYPE_MERGE_NON == postForwardReq.Type{//非合并
		collectsDb,_ = c.App.Srv.Store.Collect().Search(c.Params.UserId,postForwardReq.PostIds[0],"","",0,1)
	}else{//合并
		posts, err :=c.App.Srv.Store.Post().GetPostsByIdsAsc(postForwardReq.PostIds)
		if err != nil {
			c.Err = err
			return
		}

		var postIds model.StringArray
		for _, post := range posts {
			postIds = append(postIds,post.Id)
		}

		postIdsString,_:= json.Marshal(postIds)
		collectsDb,_ = c.App.Srv.Store.Collect().SearchMerg(c.Params.UserId,string(postIdsString),0,1)
	}

	if len(collectsDb) > 0 {
		collect := collectsDb[0]
		files :=  make(map[string]*model.FileInfo)
		for _,fileId := range collect.FileIds{
			fileInfo,_ := c.App.Srv.Store.FileInfo().GetContainDeleted(fileId)
			if fileInfo != nil {
				files[fileId] = fileInfo
			}
		}
		collect.Files = files
		b, _ := json.Marshal(collect)
		w.Write(b)
	}else{
		w.Write([]byte("{}"))
	}
}

func mergeCollect(c *Context, w http.ResponseWriter, r *http.Request) {
	//1.校验参数
	c.RequireUserId()
	if c.Err != nil {
		return
	}
	postForwardReq := model.PostForwardReqFromJson(r.Body)
	if postForwardReq == nil {
		c.SetInvalidParam("body_request_json")
		return
	}
	postIdsSize := len(postForwardReq.PostIds)
	if postIdsSize == 0 {
		c.SetInvalidParam("post_ids")
		return
	}
	if !c.App.SessionHasPermissionToUser(c.App.Session, c.Params.UserId) {
		c.SetPermissionError(model.PERMISSION_EDIT_OTHER_USERS)
		return
	}
	//2.收藏
	if postIdsSize == 1{//2.1单条
		post, err := c.App.GetSinglePost(postForwardReq.PostIds[0])
		if err != nil {
			c.SetInvalidParam("post_ids")
			return
		}

		//组装collect对象
		user,_ := c.App.GetUser(post.UserId)
		channel,_ := c.App.GetChannel(post.ChannelId)
		var title string
		if channel.Type == "D" {
			title = user.Nickname
		}else {
			title = "群聊会话记录"
		}
		simplePost := &model.SimplePost{
			PostId : post.Id,
			CreateAt : post.CreateAt,
			Message : post.Message,
			CardType : post.CardType,
			UserId : post.UserId,
			UserName : user.Nickname,
			FileIds : post.FileIds,
		}

		var simplePosts model.SimplePosts
		simplePosts = append(simplePosts,*simplePost)
		//合并收藏-选单条 不保存PostId
		collect := &model.Collect {
			Collector : c.Params.UserId,
			UserId : post.UserId,
			ChannelId : post.ChannelId,
			PostIds : model.StringArray{post.Id},
			Message : simplePosts.SimplePostsToJson(),
			Title : title,
			FileIds : post.FileIds,
		}

		postIdsString,_:= json.Marshal(collect.PostIds)
		collectsDb,_ := c.App.Srv.Store.Collect().SearchMerg(c.App.Session.UserId,string(postIdsString),0,1)
		if len(collectsDb) > 0 {
			ReturnStatusOK(w)
			return
		}
		_,err = c.App.InsertCollect(collect)
		if err != nil {
			c.Err = err
			return
		}

	}else{//2.2.合并收藏
		//2.2.1升序获取合并之前的post列表
		beforeMergePosts, err :=c.App.Srv.Store.Post().GetPostsByIdsAsc(postForwardReq.PostIds)
		if err != nil {
			c.Err = err
			return
		}
		//2.2.2校验转发posts是否同属同一个channelId
		for _, beforeMergePostCheck := range beforeMergePosts {
			if beforeMergePostCheck.ChannelId != beforeMergePosts[0].ChannelId{
				c.SetInvalidParam("post_ids")
				return
			}
		}

		var simplePosts model.SimplePosts
		userNameMap := make(map[string]string)
		var postIds model.StringArray
		var fileIds model.StringArray
		for _, beforeMergePost := range beforeMergePosts {
			var userBeforeMergePost *model.User
			if _,ok := userNameMap[beforeMergePost.UserId]; !ok{
				userBeforeMergePost, _ = c.App.GetUser(beforeMergePost.UserId)
				if userBeforeMergePost.Nickname != ""{
					userNameMap[beforeMergePost.UserId] = userBeforeMergePost.Nickname
				}else{
					userNameMap[beforeMergePost.UserId] = userBeforeMergePost.Username
				}
			}
			simplePost := &model.SimplePost{
				PostId : beforeMergePost.Id,
				CreateAt : beforeMergePost.CreateAt,
				Message : beforeMergePost.Message,
				CardType : beforeMergePost.CardType,
				UserId : beforeMergePost.UserId,
				UserName : userNameMap[beforeMergePost.UserId],
				FileIds : beforeMergePost.FileIds,
			}
			simplePosts = append(simplePosts,*simplePost)
			postIds = append(postIds,beforeMergePost.Id)
			for _,fileId := range beforeMergePost.FileIds {
				fileIds = append(fileIds,fileId)
			}
		}

		postIdsString,_:= json.Marshal(postIds)
		collectsDb,_ := c.App.Srv.Store.Collect().Search(c.App.Session.UserId,"",string(postIdsString),"",0,1)
		if len(collectsDb) > 0 {
			ReturnStatusOK(w)
			return
		}

		channel,_ := c.App.GetChannel(beforeMergePosts[0].ChannelId)
		var title string
		if channel.Type == "D"{//私聊
			userA := beforeMergePosts[0].UserId
			if len(beforeMergePosts) == 1{
				title = userNameMap[userA]
			}else{
				isSame := true
				for _, beforeMergePost := range beforeMergePosts{
					if beforeMergePost.UserId != userA{
						title = userNameMap[userA] + "和" + userNameMap[beforeMergePost.UserId] + "的会话记录"
						isSame = false
						break
					}
				}
				if isSame{
					title = userNameMap[userA] + "的会话记录"
				}
			}

		}else{
			title = "群聊会话记录"
		}
		collect := &model.Collect {
			Collector : c.Params.UserId,
			ChannelId : beforeMergePosts[0].ChannelId,
			PostIds : postIds,
			Message : simplePosts.SimplePostsToJson(),
			Title : title,
			FileIds : fileIds,
		}
		_,err = c.App.InsertCollect(collect)
		if err != nil {
			c.Err = err
			return
		}
	}
	message := model.NewWebSocketEvent(model.WEBSOCKET_EVENT_PREFERENCES_CHANGED, "", "", c.App.Session.UserId, nil)
	preference := &model.Preference{
		UserId : c.Params.UserId,
		Category : model.PREFERENCE_CATEGORY_FLAGGED_POST,
		Value : "true",
	}
	var sanitizedPreferences model.Preferences
	sanitizedPreferences = append(sanitizedPreferences, *preference)
	message.Add("preferences", sanitizedPreferences.ToJson())
	c.App.Publish(message)
	ReturnStatusOK(w)
}

func deleteCollect(c *Context, w http.ResponseWriter, r *http.Request) {
	c.RequireUserId()
	if c.Err != nil {
		return
	}
	c.RequireCollectId()
	if c.Err != nil {
		return
	}

	if !c.App.SessionHasPermissionToUser(c.App.Session, c.Params.UserId) {
		c.SetPermissionError(model.PERMISSION_EDIT_OTHER_USERS)
		return
	}

	collectDb,err := c.App.GetCollectById(c.Params.CollectId)
	if err != nil {
		c.Err = err
		return
	}
	if collectDb != nil {
		if collectDb.Collector != c.Params.UserId{
			c.SetPermissionError(model.PERMISSION_EDIT_OTHER_USERS)
			return
		}
		if len(collectDb.PostId) > 0{
			preference,_ := c.App.GetPreferenceByCategoryAndNameForUser(collectDb.Collector,model.PREFERENCE_CATEGORY_FLAGGED_POST,collectDb.PostId)
			if preference != nil {
				c.App.DeletePreference(preference)
			}
		}
		c.App.DeleteCollect(c.Params.CollectId)
	}
	ReturnStatusOK(w)
}

func getCollect(c *Context, w http.ResponseWriter, r *http.Request) {
	c.RequireUserId()
	if c.Err != nil {
		return
	}

	if !c.App.SessionHasPermissionToUser(c.App.Session, c.Params.UserId) {
		c.SetPermissionError(model.PERMISSION_EDIT_OTHER_USERS)
		return
	}

	collects,err := c.App.GetCollect(c.Params.UserId,c.Params.Page, c.Params.PerPage)
	if err != nil {
		c.Err = err
		return
	}

	for _, collect := range collects {
		files :=  make(map[string]*model.FileInfo)
		for _,fileId := range collect.FileIds{
			fileInfo,_ := c.App.Srv.Store.FileInfo().GetContainDeleted(fileId)
			if fileInfo != nil {
				files[fileId] = fileInfo
			}
		}
		collect.Files = files
	}

	b, _ := json.Marshal(collects)
	w.Write(b)
}

func getPreferences(c *Context, w http.ResponseWriter, r *http.Request) {
	c.RequireUserId()
	if c.Err != nil {
		return
	}

	if !c.App.SessionHasPermissionToUser(c.App.Session, c.Params.UserId) {
		c.SetPermissionError(model.PERMISSION_EDIT_OTHER_USERS)
		return
	}

	preferences, err := c.App.GetPreferencesForUser(c.Params.UserId)
	if err != nil {
		c.Err = err
		return
	}

	w.Write([]byte(preferences.ToJson()))
}

func getPreferencesByCategory(c *Context, w http.ResponseWriter, r *http.Request) {
	c.RequireUserId().RequireCategory()
	if c.Err != nil {
		return
	}

	if !c.App.SessionHasPermissionToUser(c.App.Session, c.Params.UserId) {
		c.SetPermissionError(model.PERMISSION_EDIT_OTHER_USERS)
		return
	}

	preferences, err := c.App.GetPreferenceByCategoryForUser(c.Params.UserId, c.Params.Category)
	if err != nil {
		c.Err = err
		return
	}

	w.Write([]byte(preferences.ToJson()))
}

func getPreferenceByCategoryAndName(c *Context, w http.ResponseWriter, r *http.Request) {
	c.RequireUserId().RequireCategory().RequirePreferenceName()
	if c.Err != nil {
		return
	}

	if !c.App.SessionHasPermissionToUser(c.App.Session, c.Params.UserId) {
		c.SetPermissionError(model.PERMISSION_EDIT_OTHER_USERS)
		return
	}

	preferences, err := c.App.GetPreferenceByCategoryAndNameForUser(c.Params.UserId, c.Params.Category, c.Params.PreferenceName)
	if err != nil {
		c.Err = err
		return
	}

	w.Write([]byte(preferences.ToJson()))
}

func updatePreferences(c *Context, w http.ResponseWriter, r *http.Request) {
	c.RequireUserId()
	if c.Err != nil {
		return
	}

	if !c.App.SessionHasPermissionToUser(c.App.Session, c.Params.UserId) {
		c.SetPermissionError(model.PERMISSION_EDIT_OTHER_USERS)
		return
	}

	preferences, err := model.PreferencesFromJson(r.Body)
	if err != nil {
		c.SetInvalidParam("preferences")
		return
	}

	var sanitizedPreferences model.Preferences
	var collects model.Collects

	for _, pref := range preferences {
		if pref.Category == model.PREFERENCE_CATEGORY_FLAGGED_POST {
			post, err := c.App.GetSinglePost(pref.Name)
			if err != nil {
				c.SetInvalidParam("preference.name")
				return
			}

			if !c.App.SessionHasPermissionToChannel(c.App.Session, post.ChannelId, model.PERMISSION_READ_CHANNEL) {
				c.SetPermissionError(model.PERMISSION_READ_CHANNEL)
				return
			}

			//组装collect对象
			user,_ := c.App.GetUser(post.UserId)
			//channel,_ := c.App.GetChannel(post.ChannelId)

			//if channel.Type == "D" {
			//	title = user.Nickname
			//}else {
			//	title = "群聊会话记录"
			//}
			title := user.Nickname

            simplePost := &model.SimplePost{
            	PostId : post.Id,
				CreateAt : post.CreateAt,
				Message : post.Message,
				CardType : post.CardType,
				UserId : post.UserId,
				UserName : user.Nickname,
				FileIds : post.FileIds,
			}
			var simplePosts model.SimplePosts
			simplePosts = append(simplePosts,*simplePost)
			collect := &model.Collect {
				Collector : pref.UserId,
				UserId : post.UserId,
				ChannelId : post.ChannelId,
				PostId : post.Id,
				PostIds : model.StringArray{post.Id},
				Message : simplePosts.SimplePostsToJson(),
				Title : title,
				FileIds : post.FileIds,
			}
			collects = append(collects,collect)
		}

		sanitizedPreferences = append(sanitizedPreferences, pref)
	}

	if err := c.App.UpdatePreferences(c.Params.UserId, sanitizedPreferences); err != nil {
		c.Err = err
		return
	}else{
		c.App.SaveCollectsHasPostId(collects)
	}

	ReturnStatusOK(w)
}


func deletePreferences(c *Context, w http.ResponseWriter, r *http.Request) {
	c.RequireUserId()
	if c.Err != nil {
		return
	}

	if !c.App.SessionHasPermissionToUser(c.App.Session, c.Params.UserId) {
		c.SetPermissionError(model.PERMISSION_EDIT_OTHER_USERS)
		return
	}

	preferences, err := model.PreferencesFromJson(r.Body)
	if err != nil {
		c.SetInvalidParam("preferences")
		return
	}

	if err := c.App.DeletePreferences(c.Params.UserId, preferences); err != nil {
		c.Err = err
		return
	}

	ReturnStatusOK(w)
}

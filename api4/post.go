// Copyright (c) 2019-present AboutOne, Inc. All Rights Reserved.


package api4

import (
	"encoding/json"
	"net/http"
	"strconv"
	"strings"
	"time"
	"za-white-screen/utils"

	"za-white-screen/app"
	"za-white-screen/model"
)

func (api *API) InitPost() {
	api.BaseRoutes.Posts.Handle("", api.ApiSessionRequired(createPost)).Methods("POST")
	api.BaseRoutes.Post.Handle("", api.ApiSessionRequired(getPost)).Methods("GET")
	api.BaseRoutes.Post.Handle("", api.ApiSessionRequired(deletePost)).Methods("DELETE")
	api.BaseRoutes.Posts.Handle("/list", api.ApiSessionRequired(createPostList)).Methods("POST")
	api.BaseRoutes.Posts.Handle("/ephemeral", api.ApiSessionRequired(createEphemeralPost)).Methods("POST")
	api.BaseRoutes.Posts.Handle("/forward", api.ApiSessionRequired(forwardPost)).Methods("POST")
	api.BaseRoutes.Posts.Handle("/forward/merge", api.ApiSessionRequired(mergeForwardPost)).Methods("POST")
	api.BaseRoutes.Post.Handle("/thread", api.ApiSessionRequired(getPostThread)).Methods("GET")
	api.BaseRoutes.Post.Handle("/files/info", api.ApiSessionRequired(getFileInfosForPost)).Methods("GET")
	api.BaseRoutes.PostsForChannel.Handle("", api.ApiSessionRequired(getPostsForChannel)).Methods("GET")
	api.BaseRoutes.PostsForUser.Handle("/flagged", api.ApiSessionRequired(getFlaggedPostsForUser)).Methods("GET")

	api.BaseRoutes.ChannelForUser.Handle("/posts/unread", api.ApiSessionRequired(getPostsForChannelAroundLastUnread)).Methods("GET")

	api.BaseRoutes.Team.Handle("/posts/search", api.ApiSessionRequired(searchPosts)).Methods("POST")
	api.BaseRoutes.Team.Handle("/posts/search/count", api.ApiSessionRequired(searchPostsCount)).Methods("POST")                                   //cml-20190904
	api.BaseRoutes.Team.Handle("/channels/{channel_id:[A-Za-z0-9]+}/posts/search", api.ApiSessionRequired(searchPostsForChannel)).Methods("POST") //cml-20190904
	api.BaseRoutes.Post.Handle("", api.ApiSessionRequired(updatePost)).Methods("PUT")
	api.BaseRoutes.Post.Handle("/patch", api.ApiSessionRequired(patchPost)).Methods("PUT")
	api.BaseRoutes.Post.Handle("/pin", api.ApiSessionRequired(pinPost)).Methods("POST")
	api.BaseRoutes.Post.Handle("/unpin", api.ApiSessionRequired(unpinPost)).Methods("POST")
}


//cml-20191020 合并转发
func mergeForwardPost(c *Context, w http.ResponseWriter, r *http.Request){
	postForwardReq := model.PostForwardReqFromJson(r.Body)
	//1.1简单校验参数
	if postForwardReq == nil {
		c.SetInvalidParam("body_request_json")
		return
	}
	if len(postForwardReq.PostIds)==0 {
		c.SetInvalidParam("post_ids")
		return
	}
	if len(postForwardReq.ChannelIds)==0 && len(postForwardReq.UserIds)==0  {
		c.SetInvalidParam("channel_ids,user_ids")
		return
	}
	//升序获取合并之前的post列表
	beforeMergePosts, err :=c.App.Srv.Store.Post().GetPostsByIdsAsc(postForwardReq.PostIds)
	if err != nil {
		c.Err = err
		return
	}
	//1.2校验转发posts是否同属同一个channelId
	for _, beforeMergePostCheck := range beforeMergePosts {
		if beforeMergePostCheck.ChannelId != beforeMergePosts[0].ChannelId{
			c.SetInvalidParam("post_ids")
			return
		}
	}
	//1.3校验用户对源channel是否有权限
	beforeMergeChannel, errBeforeMergeChannel := c.App.GetChannel(beforeMergePosts[0].ChannelId)
	hasPermissionBeforeMergeChannel := false
	if c.App.SessionHasPermissionToChannel(c.App.Session, beforeMergePosts[0].ChannelId, model.PERMISSION_CREATE_POST) {
		hasPermissionBeforeMergeChannel = true
	} else if errBeforeMergeChannel == nil {
		// Temporary permission check method until advanced permissions, please do not copy
		if beforeMergeChannel.Type == model.CHANNEL_OPEN && c.App.SessionHasPermissionToTeam(c.App.Session, beforeMergeChannel.TeamId, model.PERMISSION_CREATE_POST_PUBLIC) {
			hasPermissionBeforeMergeChannel = true
		}
	}
	if !hasPermissionBeforeMergeChannel {
		c.SetPermissionError(model.PERMISSION_CREATE_POST)
		return
	}

	//title := beforeMergeChannel.DisplayName+"群聊会话记录"
	title := "群聊会话记录"

	//2.获取所有要转发的频道channelId
	channelHashSet := utils.NewHashSet()
	userNameMap := make(map[string]string)
	for _,channelId := range postForwardReq.ChannelIds {//2.1校验传入的channelId以及权限,如果正常添加至channelHashSet
		hasPermission := false
		if c.App.SessionHasPermissionToChannel(c.App.Session, channelId, model.PERMISSION_CREATE_POST) {
			hasPermission = true
		} else if channel, err := c.App.GetChannel(channelId); err == nil {
			// Temporary permission check method until advanced permissions, please do not copy
			if channel.Type == model.CHANNEL_OPEN && c.App.SessionHasPermissionToTeam(c.App.Session, channel.TeamId, model.PERMISSION_CREATE_POST_PUBLIC) {
				hasPermission = true
			}
		}
		if !hasPermission {
			c.SetPermissionError(model.PERMISSION_CREATE_POST)
			return
		}
		channelHashSet.Add(channelId)
	}
	for _, userIdOther := range postForwardReq.UserIds {//2.2由userId转换成channelId(私聊)
		sc, err := c.App.GetOrCreateDirectChannel(c.App.Session.UserId, userIdOther)
		if err != nil {
			c.Err = err
			return
		}
		channelHashSet.Add(sc.Id)
	}
	channelIds := channelHashSet.ElementsToString()


	//3.逐一给每个渠道发送消息
	//afterPosts := make([]*model.Post, 0)
	afterPostIds := make([]string, 0)
	for _,channelIdVule := range channelIds{

		simplePosts := make([]*model.SimplePost, 0)
		fileIdsTotal := make([]string, 0)

		//3.2组装合并后的post对象
		for _, beforeMergePost := range beforeMergePosts {
			//3.2.1获取用户信息
			var userBeforeMergePost *model.User
			if _,ok := userNameMap[beforeMergePost.UserId]; !ok{
				userBeforeMergePost, _ = c.App.GetUser(beforeMergePost.UserId)
				if userBeforeMergePost.Nickname != ""{
					userNameMap[beforeMergePost.UserId] = userBeforeMergePost.Nickname
				}else{
					userNameMap[beforeMergePost.UserId] = userBeforeMergePost.Username
				}
			}
			//3.2.2处理上传的附件
			newFileIds :=  make([]string, 0)
			if len(beforeMergePost.FileIds) >0 {
				newFileIds, _ = c.App.CopyFileInfosToForwardPost(c.App.Session.UserId, channelIdVule, beforeMergePost.FileIds)
			}

			message := beforeMergePost.Message
			for i:=0;i<len(beforeMergePost.FileIds);i++{
				message = strings.Replace(message,beforeMergePost.FileIds[i],newFileIds[i],-1)
			}

			sp := &model.SimplePost{
				PostId :  beforeMergePost.Id,
				CreateAt: beforeMergePost.CreateAt,
				Message : message,
				CardType: beforeMergePost.CardType,
				UserId  : beforeMergePost.UserId,
				UserName: userNameMap[beforeMergePost.UserId],
				//RootId  : beforeMergePost.RootId,
				//ParentId: beforeMergePost.ParentId,
				//ParentMessage: beforeMergePost.ParentMessage,
				FileIds: newFileIds,
			}
			simplePosts = append(simplePosts, sp)
			for _,newFileId := range newFileIds{
				fileIdsTotal = append(fileIdsTotal, newFileId)
			}
		}
		//4.获取title
		if beforeMergeChannel.Type == "D"{//私聊
			userA := beforeMergePosts[0].UserId
			if len(beforeMergePosts) == 1{
				title = userNameMap[userA]+"的会话记录"
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
		}

		//5.组装转发后的message
		newPostsMessage := &model.NewPostsMessage{
			Title :  title,
			Data: simplePosts,
		}
		newPostsMessageBytes,_ := json.Marshal(newPostsMessage)
		fPost := &model.Post{
			UserId:    c.App.Session.UserId,
			Message:   string(newPostsMessageBytes),
			ChannelId: channelIdVule,
			FileIds:   fileIdsTotal,
			CardType: "11-1",
		}
		afterPost, err := c.App.CreatePostAsUser(c.App.PostWithProxyRemovedFromImageURLs(fPost), c.App.Session.Id)
		if err != nil {
			c.Err = err
			return
		}
		//afterPosts = append(afterPosts, afterPost)
		afterPostIds = append(afterPostIds,afterPost.Id)
	}
	afterPostsBytes,_ := json.Marshal(afterPostIds)
	w.WriteHeader(http.StatusCreated)
	w.Write(afterPostsBytes)

	//w.WriteHeader(http.StatusCreated)
	//var res *simplejson.Json
	//res, _ = simplejson.NewJson([]byte("{\"success\":\"ok\"}"))
	//requestBody := new(bytes.Buffer)
	//json.NewEncoder(requestBody).Encode(res)
	//w.Write(requestBody.Bytes())
}

func forwardPost(c *Context, w http.ResponseWriter, r *http.Request) {
	//1.1简单校验参数
	forwardPostBody := model.PostsForwarJson(r.Body)
	if forwardPostBody == nil {
		c.SetInvalidParam("body_request_json")
		return
	}
	if len(forwardPostBody.PostIds)==0 {
		c.SetInvalidParam("post_ids")
		return
	}
	if len(forwardPostBody.ChannelIds)==0 && len(forwardPostBody.UserIds)==0  {
		c.SetInvalidParam("channel_ids,user_ids")
		return
	}
	//升序获取合并之前的post列表
	beforeMergePosts, err :=c.App.Srv.Store.Post().GetPostsByIdsAsc(forwardPostBody.PostIds)
	if err != nil {
		c.Err = err
		return
	}
	//1.2校验转发posts是否同属同一个channelId
	for _, beforeMergePostCheck := range beforeMergePosts {
		if beforeMergePostCheck.ChannelId != beforeMergePosts[0].ChannelId{
			c.SetInvalidParam("post_ids")
			return
		}
	}
	//1.3校验用户对源channel是否有权限
	beforeMergeChannel, errBeforeMergeChannel := c.App.GetChannel(beforeMergePosts[0].ChannelId)
	hasPermissionBeforeMergeChannel := false
	if c.App.SessionHasPermissionToChannel(c.App.Session, beforeMergePosts[0].ChannelId, model.PERMISSION_CREATE_POST) {
		hasPermissionBeforeMergeChannel = true
	} else if errBeforeMergeChannel == nil {
		// Temporary permission check method until advanced permissions, please do not copy
		if beforeMergeChannel.Type == model.CHANNEL_OPEN && c.App.SessionHasPermissionToTeam(c.App.Session, beforeMergeChannel.TeamId, model.PERMISSION_CREATE_POST_PUBLIC) {
			hasPermissionBeforeMergeChannel = true
		}
	}
	if !hasPermissionBeforeMergeChannel {
		c.SetPermissionError(model.PERMISSION_CREATE_POST)
		return
	}


	//2.获取所有要转发的频道channelId
	channelHashSet := utils.NewHashSet()
	for _,channelId := range forwardPostBody.ChannelIds {//2.1校验传入的channelId以及权限,如果正常添加至channelHashSet
		hasPermission := false
		if c.App.SessionHasPermissionToChannel(c.App.Session, channelId, model.PERMISSION_CREATE_POST) {
			hasPermission = true
		} else if channel, err := c.App.GetChannel(channelId); err == nil {
			// Temporary permission check method until advanced permissions, please do not copy
			if channel.Type == model.CHANNEL_OPEN && c.App.SessionHasPermissionToTeam(c.App.Session, channel.TeamId, model.PERMISSION_CREATE_POST_PUBLIC) {
				hasPermission = true
			}
		}
		if !hasPermission {
			c.SetPermissionError(model.PERMISSION_CREATE_POST)
			return
		}
		channelHashSet.Add(channelId)
	}
	for _, userIdOther := range forwardPostBody.UserIds {//2.2由userId转换成channelId(私聊)
		sc, err := c.App.GetOrCreateDirectChannel(c.App.Session.UserId, userIdOther)
		if err != nil {
			c.Err = err
			return
		}
		channelHashSet.Add(sc.Id)
	}
	channelIds := channelHashSet.ElementsToString()


	//3.分channel分post逐一发送
	//afterPosts := make([]*model.Post, 0)
	afterPostIds := make([]string, 0)
	for _,channelIdVule := range channelIds{
		for _, post := range beforeMergePosts {
			newFileIds :=  make([]string, 0)
			if len(post.FileIds) > 0 {
				//lgx-20190923 根据post.FileIds获取要转发的新的FileIds
				newFileIds, err = c.App.CopyFileInfosToForwardPost(c.App.Session.UserId, channelIdVule, post.FileIds)
				if err != nil {
					c.Err = err
				}
			}
			message := post.Message
			for i:=0;i<len(post.FileIds);i++{
				message = strings.Replace(message,post.FileIds[i],newFileIds[i],-1)
			}
			//lgx-20190923 包装新的post对象
			fPost := &model.Post{
				UserId:    c.App.Session.UserId,
				Message:   message,
				ChannelId: channelIdVule,
				FileIds:   newFileIds,
				CardType:  post.CardType,
			}
			//lgx-20190923 根据新的post对象，创建。
			afterPost, err := c.App.CreatePostAsUser(c.App.PostWithProxyRemovedFromImageURLs(fPost), c.App.Session.Id)
			if err != nil {
				c.Err = err
				return
			}
			//afterPosts = append(afterPosts, afterPost)
			afterPostIds = append(afterPostIds,afterPost.Id)
		}
	}
	afterPostsBytes,_ := json.Marshal(afterPostIds)
	w.WriteHeader(http.StatusCreated)
	w.Write(afterPostsBytes)

	//w.WriteHeader(http.StatusCreated)
	//var res *simplejson.Json
	//res, _ = simplejson.NewJson([]byte("{\"success\":\"ok\"}"))
	//requestBody := new(bytes.Buffer)
	//json.NewEncoder(requestBody).Encode(res)
	//w.Write(requestBody.Bytes())
}

func createPost(c *Context, w http.ResponseWriter, r *http.Request) {
	post := model.PostFromJson(r.Body)
	if post == nil {
		c.SetInvalidParam("post")
		return
	}

	post.UserId = c.App.Session.UserId

	hasPermission := false
	if c.App.SessionHasPermissionToChannel(c.App.Session, post.ChannelId, model.PERMISSION_CREATE_POST) {
		hasPermission = true
	} else if channel, err := c.App.GetChannel(post.ChannelId); err == nil {
		// Temporary permission check method until advanced permissions, please do not copy
		if channel.Type == model.CHANNEL_OPEN && c.App.SessionHasPermissionToTeam(c.App.Session, channel.TeamId, model.PERMISSION_CREATE_POST_PUBLIC) {
			hasPermission = true
		}
	}

	if !hasPermission {
		c.SetPermissionError(model.PERMISSION_CREATE_POST)
		return
	}

	if post.CreateAt != 0 && !c.App.SessionHasPermissionTo(c.App.Session, model.PERMISSION_MANAGE_SYSTEM) {
		post.CreateAt = 0
	}

	rp, err := c.App.CreatePostAsUser(c.App.PostWithProxyRemovedFromImageURLs(post), c.App.Session.Id)
	if err != nil {
		c.Err = err
		return
	}

	c.App.SetStatusOnline(c.App.Session.UserId, false)
	c.App.UpdateLastActivityAtIfNeeded(c.App.Session)

	w.WriteHeader(http.StatusCreated)

	// Note that rp has already had PreparePostForClient called on it by App.CreatePost
	w.Write([]byte(rp.ToJson()))
}

func createPostList(c *Context, w http.ResponseWriter, r *http.Request) {
	posts := model.PostFromListJson(r.Body)
	if posts == nil || len(posts.UserNames)<=0{
		c.SetInvalidParam("user_names")
		return
	}
	post := posts.Post
    for _,userName :=range posts.UserNames{
    	post.Id = ""
		post.UserId = c.App.Session.UserId
		// get toUser
		user,_ :=c.App.GetUserByUsername(userName)
		if user==nil{
			continue
		}
		sc, err := c.App.GetOrCreateDirectChannel(c.App.Session.UserId, user.Id)
		if err != nil {
			c.Err = err
			return
		}
		post.ChannelId = sc.Id
		post.PendingPostId= strconv.FormatInt(time.Now().UnixNano(),10)
		hasPermission := false
		if c.App.SessionHasPermissionToChannel(c.App.Session, post.ChannelId, model.PERMISSION_CREATE_POST){
		hasPermission = true
	} else if channel, err := c.App.GetChannel(post.ChannelId); err == nil{
		// Temporary permission check method until advanced permissions, please do not copy
		if channel.Type == model.CHANNEL_OPEN && c.App.SessionHasPermissionToTeam(c.App.Session, channel.TeamId, model.PERMISSION_CREATE_POST_PUBLIC){
		hasPermission = true
	}
	}
		if !hasPermission{
		c.SetPermissionError(model.PERMISSION_CREATE_POST)
		return
	}

		if post.CreateAt != 0 && !c.App.SessionHasPermissionTo(c.App.Session, model.PERMISSION_MANAGE_SYSTEM){
		post.CreateAt = 0
	}

		_,er := c.App.CreatePostAsUser(c.App.PostWithProxyRemovedFromImageURLs(post), c.App.Session.Id)
		if er != nil{
		c.Err = er
		return
	}
		c.App.SetStatusOnline(c.App.Session.UserId, false)
		c.App.UpdateLastActivityAtIfNeeded(c.App.Session)
	}
	w.WriteHeader(http.StatusCreated)

	// Note that rp has already had PreparePostForClient called on it by App.CreatePost
	w.Write([]byte(posts.ToJson()))
}

func createEphemeralPost(c *Context, w http.ResponseWriter, r *http.Request) {
	ephRequest := model.PostEphemeral{}

	json.NewDecoder(r.Body).Decode(&ephRequest)
	if ephRequest.UserID == "" {
		c.SetInvalidParam("user_id")
		return
	}

	if ephRequest.Post == nil {
		c.SetInvalidParam("post")
		return
	}

	ephRequest.Post.UserId = c.App.Session.UserId
	ephRequest.Post.CreateAt = model.GetMillis()

	if !c.App.SessionHasPermissionTo(c.App.Session, model.PERMISSION_CREATE_POST_EPHEMERAL) {
		c.SetPermissionError(model.PERMISSION_CREATE_POST_EPHEMERAL)
		return
	}

	rp := c.App.SendEphemeralPost(ephRequest.UserID, c.App.PostWithProxyRemovedFromImageURLs(ephRequest.Post))

	w.WriteHeader(http.StatusCreated)
	rp = model.AddPostActionCookies(rp, c.App.PostActionCookieSecret())
	rp = c.App.PreparePostForClient(rp, true, false)
	w.Write([]byte(rp.ToJson()))
}

func getPostsForChannel(c *Context, w http.ResponseWriter, r *http.Request) {
	c.RequireChannelId()
	if c.Err != nil {
		return
	}

	afterPost := r.URL.Query().Get("after")
	if len(afterPost) > 0 && !model.IsValidId(afterPost) {
		c.SetInvalidParam("after")
		return
	}

	beforePost := r.URL.Query().Get("before")
	if len(beforePost) > 0 && !model.IsValidId(beforePost) {
		c.SetInvalidParam("before")
		return
	}

	sinceString := r.URL.Query().Get("since")
	var since int64
	var parseError error
	if len(sinceString) > 0 {
		since, parseError = strconv.ParseInt(sinceString, 10, 64)
		if parseError != nil {
			c.SetInvalidParam("since")
			return
		}
	}

	channelId := c.Params.ChannelId
	page := c.Params.Page
	perPage := c.Params.PerPage

	if !c.App.SessionHasPermissionToChannel(c.App.Session, channelId, model.PERMISSION_READ_CHANNEL) {
		c.SetPermissionError(model.PERMISSION_READ_CHANNEL)
		return
	}

	var list *model.PostList
	var err *model.AppError
	etag := ""

	if since > 0 {
		list, err = c.App.GetPostsSince(channelId, since)
	} else if len(afterPost) > 0 {
		etag = c.App.GetPostsEtag(channelId)

		if c.HandleEtag(etag, "Get Posts After", w, r) {
			return
		}

		list, err = c.App.GetPostsAfterPost(channelId, afterPost, page, perPage)
	} else if len(beforePost) > 0 {
		etag = c.App.GetPostsEtag(channelId)

		if c.HandleEtag(etag, "Get Posts Before", w, r) {
			return
		}

		list, err = c.App.GetPostsBeforePost(channelId, beforePost, page, perPage)
	} else {
		etag = c.App.GetPostsEtag(channelId)

		if c.HandleEtag(etag, "Get Posts", w, r) {
			return
		}

		list, err = c.App.GetPostsPage(channelId, page, perPage)
	}

	if err != nil {
		c.Err = err
		return
	}

	if len(etag) > 0 {
		w.Header().Set(model.HEADER_ETAG_SERVER, etag)
	}

	c.App.AddCursorIdsForPostList(list, afterPost, beforePost, since, page, perPage)
	clientPostList := c.App.PreparePostListForClient(list)

	w.Write([]byte(clientPostList.ToJson()))
}

func getPostsForChannelAroundLastUnread(c *Context, w http.ResponseWriter, r *http.Request) {
	c.RequireUserId().RequireChannelId()
	if c.Err != nil {
		return
	}

	userId := c.Params.UserId
	if !c.App.SessionHasPermissionToUser(c.App.Session, userId) {
		c.SetPermissionError(model.PERMISSION_EDIT_OTHER_USERS)
		return
	}

	channelId := c.Params.ChannelId
	if !c.App.SessionHasPermissionToChannel(c.App.Session, channelId, model.PERMISSION_READ_CHANNEL) {
		c.SetPermissionError(model.PERMISSION_READ_CHANNEL)
		return
	}

	postList, err := c.App.GetPostsForChannelAroundLastUnread(channelId, userId, c.Params.LimitBefore, c.Params.LimitAfter)
	if err != nil {
		c.Err = err
		return
	}

	etag := ""
	if len(postList.Order) == 0 {
		etag = c.App.GetPostsEtag(channelId)

		if c.HandleEtag(etag, "Get Posts", w, r) {
			return
		}

		postList, err = c.App.GetPostsPage(channelId, app.PAGE_DEFAULT, c.Params.LimitBefore)
	}

	postList.NextPostId = c.App.GetNextPostIdFromPostList(postList)
	postList.PrevPostId = c.App.GetPrevPostIdFromPostList(postList)

	clientPostList := c.App.PreparePostListForClient(postList)

	if len(etag) > 0 {
		w.Header().Set(model.HEADER_ETAG_SERVER, etag)
	}
	w.Write([]byte(clientPostList.ToJson()))
}

func getFlaggedPostsForUser(c *Context, w http.ResponseWriter, r *http.Request) {
	c.RequireUserId()
	if c.Err != nil {
		return
	}

	if !c.App.SessionHasPermissionToUser(c.App.Session, c.Params.UserId) {
		c.SetPermissionError(model.PERMISSION_EDIT_OTHER_USERS)
		return
	}

	channelId := r.URL.Query().Get("channel_id")
	teamId := r.URL.Query().Get("team_id")

	var posts *model.PostList
	var err *model.AppError

	if len(channelId) > 0 {
		posts, err = c.App.GetFlaggedPostsForChannel(c.Params.UserId, channelId, c.Params.Page, c.Params.PerPage)
	} else if len(teamId) > 0 {
		posts, err = c.App.GetFlaggedPostsForTeam(c.Params.UserId, teamId, c.Params.Page, c.Params.PerPage)
	} else {
		posts, err = c.App.GetFlaggedPosts(c.Params.UserId, c.Params.Page, c.Params.PerPage)
	}

	pl := model.NewPostList()
	channelReadPermission := make(map[string]bool)

	for _, post := range posts.Posts {
		allowed, ok := channelReadPermission[post.ChannelId]

		if !ok {
			allowed = false

			if c.App.SessionHasPermissionToChannel(c.App.Session, post.ChannelId, model.PERMISSION_READ_CHANNEL) {
				allowed = true
			}

			channelReadPermission[post.ChannelId] = allowed
		}

		if !allowed {
			continue
		}

		pl.AddPost(post)
		pl.AddOrder(post.Id)
	}

	pl.SortByCreateAt()

	if err != nil {
		c.Err = err
		return
	}

	w.Write([]byte(c.App.PreparePostListForClient(pl).ToJson()))
}

func getPost(c *Context, w http.ResponseWriter, r *http.Request) {
	c.RequirePostId()
	if c.Err != nil {
		return
	}

	post, err := c.App.GetSinglePost(c.Params.PostId)
	if err != nil {
		c.Err = err
		return
	}

	channel, err := c.App.GetChannel(post.ChannelId)
	if err != nil {
		c.Err = err
		return
	}

	if !c.App.SessionHasPermissionToChannel(c.App.Session, channel.Id, model.PERMISSION_READ_CHANNEL) {
		if channel.Type == model.CHANNEL_OPEN {
			if !c.App.SessionHasPermissionToTeam(c.App.Session, channel.TeamId, model.PERMISSION_READ_PUBLIC_CHANNEL) {
				c.SetPermissionError(model.PERMISSION_READ_PUBLIC_CHANNEL)
				return
			}
		} else {
			c.SetPermissionError(model.PERMISSION_READ_CHANNEL)
			return
		}
	}

	post = c.App.PreparePostForClient(post, false, false)

	if c.HandleEtag(post.Etag(), "Get Post", w, r) {
		return
	}

	w.Header().Set(model.HEADER_ETAG_SERVER, post.Etag())
	w.Write([]byte(post.ToJson()))
}

func deletePost(c *Context, w http.ResponseWriter, r *http.Request) {
	c.RequirePostId()
	if c.Err != nil {
		return
	}

	post, err := c.App.GetSinglePost(c.Params.PostId)
	if err != nil {
		c.SetPermissionError(model.PERMISSION_DELETE_POST)
		return
	}

	if c.App.Session.UserId == post.UserId {
		if !c.App.SessionHasPermissionToChannel(c.App.Session, post.ChannelId, model.PERMISSION_DELETE_POST) {
			c.SetPermissionError(model.PERMISSION_DELETE_POST)
			return
		}
		//个人删除自己发的消息需要在两分钟中内 cml-20191010
		if (model.GetMillis() - post.CreateAt) >= int64(2*60*1000){
			c.SetPermissionError(model.PERMISSION_DELETE_POST)
			return
		}
	} else {
		if !c.App.SessionHasPermissionToChannel(c.App.Session, post.ChannelId, model.PERMISSION_DELETE_OTHERS_POSTS) {
			c.SetPermissionError(model.PERMISSION_DELETE_OTHERS_POSTS)
			return
		}
	}

	if _, err := c.App.DeletePost(c.Params.PostId, c.App.Session.UserId); err != nil {
		c.Err = err
		return
	}

	ReturnStatusOK(w)
}

func getPostThread(c *Context, w http.ResponseWriter, r *http.Request) {
	c.RequirePostId()
	if c.Err != nil {
		return
	}

	list, err := c.App.GetPostThread(c.Params.PostId)
	if err != nil {
		c.Err = err
		return
	}

	post, ok := list.Posts[c.Params.PostId]
	if !ok {
		c.SetInvalidUrlParam("post_id")
		return
	}

	channel, err := c.App.GetChannel(post.ChannelId)
	if err != nil {
		c.Err = err
		return
	}

	if !c.App.SessionHasPermissionToChannel(c.App.Session, channel.Id, model.PERMISSION_READ_CHANNEL) {
		if channel.Type == model.CHANNEL_OPEN {
			if !c.App.SessionHasPermissionToTeam(c.App.Session, channel.TeamId, model.PERMISSION_READ_PUBLIC_CHANNEL) {
				c.SetPermissionError(model.PERMISSION_READ_PUBLIC_CHANNEL)
				return
			}
		} else {
			c.SetPermissionError(model.PERMISSION_READ_CHANNEL)
			return
		}
	}

	if c.HandleEtag(list.Etag(), "Get Post Thread", w, r) {
		return
	}

	clientPostList := c.App.PreparePostListForClient(list)

	w.Header().Set(model.HEADER_ETAG_SERVER, clientPostList.Etag())

	w.Write([]byte(clientPostList.ToJson()))
}

//cml-20190904搜索聊天记录统计接口
func searchPostsCount(c *Context, w http.ResponseWriter, r *http.Request) {
	c.RequireTeamId()
	props := model.ChannelSearchFromJson(r.Body)
	if props == nil || len(props.Term) == 0 {
		c.SetInvalidParam("term")
		return
	}
	channels, _ := c.App.GetChannelsForUser(c.Params.TeamId, c.App.Session.UserId, false)

	channelDisplayNameMap := make(map[string]string)
	channelIds := make([]string, 0)
	for _, channel := range *channels {
		channelIds = append(channelIds, channel.Id)
		if channel.DisplayName != "" {
			channelDisplayNameMap[channel.Id] = channel.DisplayName
		} else {
			otherUserId := strings.Replace(channel.Name, "__"+c.App.Session.UserId, "", 1)
			otherUserId = strings.Replace(otherUserId, c.App.Session.UserId+"__", "", 1)
			otherUser, _ := c.App.GetUser(otherUserId)
			if otherUser != nil {
				channelDisplayNameMap[channel.Id] = otherUser.Username
			}
		}
	}

	if len(channelIds) == 0 {
		w.Write([]byte("[]"))
	}

	searchChatCountRows, err := c.App.SearchPostsCount(channelIds, props.Term)
	if err != nil {
		c.Err = err
		return
	}
	for _, value := range searchChatCountRows {
		value.ChannelDisplayName = channelDisplayNameMap[value.ChannelId]
		for _, channel := range *channels {
			if channel.Id == value.ChannelId {
				value.ChannelType = channel.Type
				value.ChannelIconId = channel.IconId
				break
			}
		}
	}
	w.Write([]byte(searchChatCountRows.ToJson()))
}

//cml-20190904搜索聊天记录接口
func searchPostsForChannel(c *Context, w http.ResponseWriter, r *http.Request) {
	c.RequireTeamId()
	c.RequireChannelId()
	if c.Err != nil {
		return
	}
	props := model.ChannelSearchFromJson(r.Body)
	if props == nil || len(props.Term) == 0 {
		c.SetInvalidParam("term")
		return
	}
	page := 0
	perPage := 10
	if props.Page != 0 {
		page = props.Page
	}
	if props.PerPage != 0 {
		perPage = props.PerPage
	}
	channelIds := []string{c.Params.ChannelId}

	posts, err := c.App.SearchPostsForChannel(channelIds, props.Term, page, perPage)
	if err != nil {
		c.Err = err
		return
	}

	if props.PreTags != "" && props.SufTags != "" {
		newString := props.PreTags + props.Term + props.SufTags
		for _, value := range posts {
			value.Message = strings.ReplaceAll(value.Message, props.Term, newString)
		}
	}

	if b, err := json.Marshal(posts); err != nil {
		w.Write([]byte("[]"))
	} else {
		w.Write(b)
	}

}

func searchPosts(c *Context, w http.ResponseWriter, r *http.Request) {
	c.RequireTeamId()
	if c.Err != nil {
		return
	}

	if !c.App.SessionHasPermissionToTeam(c.App.Session, c.Params.TeamId, model.PERMISSION_VIEW_TEAM) {
		c.SetPermissionError(model.PERMISSION_VIEW_TEAM)
		return
	}

	params := model.SearchParameterFromJson(r.Body)

	if params.Terms == nil || len(*params.Terms) == 0 {
		c.SetInvalidParam("terms")
		return
	}
	terms := *params.Terms

	timeZoneOffset := 0
	if params.TimeZoneOffset != nil {
		timeZoneOffset = *params.TimeZoneOffset
	}

	isOrSearch := false
	if params.IsOrSearch != nil {
		isOrSearch = *params.IsOrSearch
	}

	page := 0
	if params.Page != nil {
		page = *params.Page
	}

	perPage := 60
	if params.PerPage != nil {
		perPage = *params.PerPage
	}

	includeDeletedChannels := false
	if params.IncludeDeletedChannels != nil {
		includeDeletedChannels = *params.IncludeDeletedChannels
	}

	startTime := time.Now()

	results, err := c.App.SearchPostsInTeamForUser(terms, c.App.Session.UserId, c.Params.TeamId, isOrSearch, includeDeletedChannels, int(timeZoneOffset), page, perPage)

	elapsedTime := float64(time.Since(startTime)) / float64(time.Second)
	metrics := c.App.Metrics
	if metrics != nil {
		metrics.IncrementPostsSearchCounter()
		metrics.ObservePostsSearchDuration(elapsedTime)
	}

	if err != nil {
		c.Err = err
		return
	}

	clientPostList := c.App.PreparePostListForClient(results.PostList)

	results = model.MakePostSearchResults(clientPostList, results.Matches)

	w.Header().Set("Cache-Control", "no-cache, no-store, must-revalidate")
	w.Write([]byte(results.ToJson()))
}

func updatePost(c *Context, w http.ResponseWriter, r *http.Request) {
	c.RequirePostId()
	if c.Err != nil {
		return
	}

	post := model.PostFromJson(r.Body)

	if post == nil {
		c.SetInvalidParam("post")
		return
	}

	// The post being updated in the payload must be the same one as indicated in the URL.
	if post.Id != c.Params.PostId {
		c.SetInvalidParam("id")
		return
	}

	// Updating the file_ids of a post is not a supported operation and will be ignored
	post.FileIds = nil

	if !c.App.SessionHasPermissionToChannelByPost(c.App.Session, c.Params.PostId, model.PERMISSION_EDIT_POST) {
		c.SetPermissionError(model.PERMISSION_EDIT_POST)
		return
	}

	originalPost, err := c.App.GetSinglePost(c.Params.PostId)
	if err != nil {
		c.SetPermissionError(model.PERMISSION_EDIT_POST)
		return
	}

	if c.App.Session.UserId != originalPost.UserId {
		if !c.App.SessionHasPermissionToChannelByPost(c.App.Session, c.Params.PostId, model.PERMISSION_EDIT_OTHERS_POSTS) {
			c.SetPermissionError(model.PERMISSION_EDIT_OTHERS_POSTS)
			return
		}
	}

	post.Id = c.Params.PostId

	rpost, err := c.App.UpdatePost(c.App.PostWithProxyRemovedFromImageURLs(post), false)
	if err != nil {
		c.Err = err
		return
	}

	w.Write([]byte(rpost.ToJson()))
}

func patchPost(c *Context, w http.ResponseWriter, r *http.Request) {
	c.RequirePostId()
	if c.Err != nil {
		return
	}

	post := model.PostPatchFromJson(r.Body)

	if post == nil {
		c.SetInvalidParam("post")
		return
	}

	// Updating the file_ids of a post is not a supported operation and will be ignored
	post.FileIds = nil

	if !c.App.SessionHasPermissionToChannelByPost(c.App.Session, c.Params.PostId, model.PERMISSION_EDIT_POST) {
		c.SetPermissionError(model.PERMISSION_EDIT_POST)
		return
	}

	_, err := c.App.GetSinglePost(c.Params.PostId)
	if err != nil {
		c.SetPermissionError(model.PERMISSION_EDIT_POST)
		return
	}

	/*if c.App.Session.UserId != originalPost.UserId {
		if !c.App.SessionHasPermissionToChannelByPost(c.App.Session, c.Params.PostId, model.PERMISSION_EDIT_OTHERS_POSTS) {
			c.SetPermissionError(model.PERMISSION_EDIT_OTHERS_POSTS)
			return
		}
	}*/

	patchedPost, err := c.App.PatchPost(c.Params.PostId, c.App.PostPatchWithProxyRemovedFromImageURLs(post))
	if err != nil {
		c.Err = err
		return
	}

	w.Write([]byte(patchedPost.ToJson()))
}

func saveIsPinnedPost(c *Context, w http.ResponseWriter, r *http.Request, isPinned bool) {
	c.RequirePostId()
	if c.Err != nil {
		return
	}

	if !c.App.SessionHasPermissionToChannelByPost(c.App.Session, c.Params.PostId, model.PERMISSION_READ_CHANNEL) {
		c.SetPermissionError(model.PERMISSION_READ_CHANNEL)
		return
	}

	// Restrict pinning if the experimental read-only-town-square setting is on.
	user, err := c.App.GetUser(c.App.Session.UserId)
	if err != nil {
		c.Err = err
		return
	}

	post, err := c.App.GetSinglePost(c.Params.PostId)
	if err != nil {
		c.Err = err
		return
	}

	channel, err := c.App.GetChannel(post.ChannelId)
	if err != nil {
		c.Err = err
		return
	}

	if c.App.License() != nil &&
		*c.App.Config().TeamSettings.ExperimentalTownSquareIsReadOnly &&
		channel.Name == model.DEFAULT_CHANNEL &&
		!c.App.RolesGrantPermission(user.GetRoles(), model.PERMISSION_MANAGE_SYSTEM.Id) {
		c.Err = model.NewAppError("saveIsPinnedPost", "api.post.save_is_pinned_post.town_square_read_only", nil, "", http.StatusForbidden)
		return
	}

	patch := &model.PostPatch{}
	patch.IsPinned = model.NewBool(isPinned)

	_, err = c.App.PatchPost(c.Params.PostId, patch)
	if err != nil {
		c.Err = err
		return
	}

	ReturnStatusOK(w)
}

func pinPost(c *Context, w http.ResponseWriter, r *http.Request) {
	saveIsPinnedPost(c, w, r, true)
}

func unpinPost(c *Context, w http.ResponseWriter, r *http.Request) {
	saveIsPinnedPost(c, w, r, false)
}

func getFileInfosForPost(c *Context, w http.ResponseWriter, r *http.Request) {
	c.RequirePostId()
	if c.Err != nil {
		return
	}

	if !c.App.SessionHasPermissionToChannelByPost(c.App.Session, c.Params.PostId, model.PERMISSION_READ_CHANNEL) {
		c.SetPermissionError(model.PERMISSION_READ_CHANNEL)
		return
	}

	infos, err := c.App.GetFileInfosForPostWithMigration(c.Params.PostId)
	if err != nil {
		c.Err = err
		return
	}

	if c.HandleEtag(model.GetEtagForFileInfos(infos), "Get File Infos For Post", w, r) {
		return
	}

	w.Header().Set("Cache-Control", "max-age=2592000, public")
	w.Header().Set(model.HEADER_ETAG_SERVER, model.GetEtagForFileInfos(infos))
	w.Write([]byte(model.FileInfosToJson(infos)))
}

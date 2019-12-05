package api4

import (
	"encoding/json"
	"net/http"

	"za-white-screen/mlog"
	"za-white-screen/model"
)

func (api *API) InitFileLog() {
	mlog.Debug("EXPERIMENTAL: Initializing fileLog api")

	api.BaseRoutes.FileLogFileId.Handle("/{file_id:[A-Za-z0-9]+}", api.ApiSessionRequired(getFilelogByFileId)).Methods("GET")
	api.BaseRoutes.FileLogChannelAndFileId.Handle("", api.ApiSessionRequired(getByChannelIdAndFileInfoId)).Methods("GET")
	api.BaseRoutes.FileLogChannelId.Handle("/{channel_id:[A-Za-z0-9]+}", api.ApiSessionRequired(getByChannelId)).Methods("GET")
}

func getFilelogByFileId(c *Context, w http.ResponseWriter, r *http.Request) {
	response, err := c.App.GetFilelogByFileId(c.Params.FileId)
	if err != nil {
		c.Err = err
		return
	}
	result, _ := json.Marshal(response)
	w.Write(result)
}

func getByChannelIdAndFileInfoId(c *Context, w http.ResponseWriter, r *http.Request) {
	type ResultPage struct {
		Infos []*model.FileOperationLogForDisk `json:"infos"`
		Total int64                            `json:"totalPageNum"`
	}

	infos, err := c.App.GetByChannelIdAndFileInfoId(c.Params.ChannelId, c.Params.FileId, c.Params.Page, c.Params.PerPage)
	if err != nil {
		c.Err = err
		return
	}

	total, err := c.App.GetByChannelIdAndFileInfoIdCount(c.Params.ChannelId, c.Params.FileId)
	if err != nil {
		c.Err = err
		return
	}

	//计算总页数
	total = (total + int64(c.Params.PerPage) - 1) / int64(c.Params.PerPage)

	rp := &ResultPage{
		Infos: infos,
		Total: total,
	}

	result, _ := json.Marshal(rp)
	w.Write(result)
}

func getByChannelId(c *Context, w http.ResponseWriter, r *http.Request) {
	response, err := c.App.GetByChannelId(c.Params.ChannelId)
	if err != nil {
		c.Err = err
		return
	}
	result, _ := json.Marshal(response)
	w.Write(result)
}

func SaveFileOperationLog(c *Context, info *model.FileInfo, opeationType string) *model.AppError {
	log := &model.FileOperationLog{
		FileInfoId: info.Id,
		ChannelId:  info.ChannelId,
		Operator:   c.App.Session.UserId,
		Operation:  opeationType,
		CreateAt:   model.GetMillis(),
	}
	_, err2 := c.App.Srv.Store.FileOperation().Save(log)
	if err2 != nil {
		mlog.Warn("Failed to store file_operation_log to post", mlog.String("file_id", info.Id), mlog.String("post_id", info.PostId), mlog.Err(err2))
	}
	return err2
}

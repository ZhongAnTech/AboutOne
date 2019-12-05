package app

import (
	_ "golang.org/x/image/bmp"

	"za-white-screen/model"
)

func (a *App) GetFilelogByFileId(fileId string) ([]*model.FileOperationLog, *model.AppError) {
	return a.Srv.Store.FileOperation().GetByFileInfoId(fileId)
}

func (a *App) GetByChannelIdAndFileInfoId(channelId, fileId string, page int, perPage int) ([]*model.FileOperationLogForDisk, *model.AppError) {
	return a.Srv.Store.FileOperation().GetByChannelIdAndFileInfoId(channelId, fileId, page*perPage, perPage)
}

func (a *App) GetByChannelIdAndFileInfoIdCount(channelId, fileId string) (int64, *model.AppError) {
	return a.Srv.Store.FileOperation().GetByChannelIdAndFileInfoIdCount(channelId, fileId)
}

func (a *App) GetByChannelId(channelId string) ([]*model.FileOperationLog, *model.AppError) {
	return a.Srv.Store.FileOperation().GetByChannelId(channelId)
}

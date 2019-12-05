


package einterfaces

import (
	"context"

	"za-white-screen/model"
)

type MessageExportInterface interface {
	StartSynchronizeJob(ctx context.Context, exportFromTimestamp int64) (*model.Job, *model.AppError)
	RunExport(format string, since int64) *model.AppError
}

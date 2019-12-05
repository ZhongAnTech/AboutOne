// Copyright (c) 2019-present AboutOne, Inc. All Rights Reserved.


package jobs

import (
	"za-white-screen/model"
)

type MessageExportJobInterface interface {
	MakeWorker() model.Worker
	MakeScheduler() model.Scheduler
}

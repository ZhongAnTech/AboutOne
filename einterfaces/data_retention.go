// Copyright (c) 2019-present AboutOne, Inc. All Rights Reserved.


package einterfaces

import (
	"za-white-screen/model"
)

type DataRetentionInterface interface {
	GetPolicy() (*model.DataRetentionPolicy, *model.AppError)
}

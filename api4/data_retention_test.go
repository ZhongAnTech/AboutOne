// Copyright (c) 2019-present AboutOne, Inc. All Rights Reserved.


package api4

import (
	"testing"
)

func TestDataRetentionGetPolicy(t *testing.T) {
	th := Setup().InitBasic()
	defer th.TearDown()

	_, resp := th.Client.GetDataRetentionPolicy()
	CheckNotImplementedStatus(t, resp)
}

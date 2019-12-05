// Copyright (c) 2019-present AboutOne, Inc. All Rights Reserved.


package api4

import (
	"testing"

	"za-white-screen/model"
)

func TestGetClusterStatus(t *testing.T) {
	th := Setup().InitBasic()
	defer th.TearDown()

	t.Run("as system user", func(t *testing.T) {
		_, resp := th.Client.GetClusterStatus()
		CheckForbiddenStatus(t, resp)
	})

	t.Run("as system admin", func(t *testing.T) {
		infos, resp := th.SystemAdminClient.GetClusterStatus()
		CheckNoError(t, resp)

		if infos == nil {
			t.Fatal("should not be nil")
		}
	})

	t.Run("as restricted system admin", func(t *testing.T) {
		th.App.UpdateConfig(func(cfg *model.Config) { *cfg.ExperimentalSettings.RestrictSystemAdmin = true })

		_, resp := th.SystemAdminClient.GetClusterStatus()
		CheckForbiddenStatus(t, resp)
	})
}

// Copyright (c) 2019-present AboutOne, Inc. All Rights Reserved.


package api4

import (
	"testing"

	"za-white-screen/model"
)

func TestElasticsearchTest(t *testing.T) {
	th := Setup().InitBasic()
	defer th.TearDown()

	t.Run("as system user", func(t *testing.T) {
		_, resp := th.Client.TestElasticsearch()
		CheckForbiddenStatus(t, resp)
	})

	t.Run("as system admin", func(t *testing.T) {
		_, resp := th.SystemAdminClient.TestElasticsearch()
		CheckNotImplementedStatus(t, resp)
	})

	t.Run("as restricted system admin", func(t *testing.T) {
		th.App.UpdateConfig(func(cfg *model.Config) { *cfg.ExperimentalSettings.RestrictSystemAdmin = true })

		_, resp := th.SystemAdminClient.TestElasticsearch()
		CheckForbiddenStatus(t, resp)
	})
}

func TestElasticsearchPurgeIndexes(t *testing.T) {
	th := Setup().InitBasic()
	defer th.TearDown()

	t.Run("as system user", func(t *testing.T) {
		_, resp := th.Client.PurgeElasticsearchIndexes()
		CheckForbiddenStatus(t, resp)
	})

	t.Run("as system admin", func(t *testing.T) {
		_, resp := th.SystemAdminClient.PurgeElasticsearchIndexes()
		CheckNotImplementedStatus(t, resp)
	})

	t.Run("as restricted system admin", func(t *testing.T) {
		th.App.UpdateConfig(func(cfg *model.Config) { *cfg.ExperimentalSettings.RestrictSystemAdmin = true })

		_, resp := th.SystemAdminClient.PurgeElasticsearchIndexes()
		CheckForbiddenStatus(t, resp)
	})
}

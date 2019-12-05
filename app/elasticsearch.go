// Copyright (c) 2019-present AboutOne, Inc. All Rights Reserved.


package app

import (
	"net/http"

	"za-white-screen/model"
)

func (a *App) TestElasticsearch(cfg *model.Config) *model.AppError {
	if *cfg.ElasticsearchSettings.Password == model.FAKE_SETTING {
		if *cfg.ElasticsearchSettings.ConnectionUrl == *a.Config().ElasticsearchSettings.ConnectionUrl && *cfg.ElasticsearchSettings.Username == *a.Config().ElasticsearchSettings.Username {
			*cfg.ElasticsearchSettings.Password = *a.Config().ElasticsearchSettings.Password
		} else {
			return model.NewAppError("TestElasticsearch", "ent.elasticsearch.test_config.reenter_password", nil, "", http.StatusBadRequest)
		}
	}

	esI := a.Elasticsearch
	if esI == nil {
		err := model.NewAppError("TestElasticsearch", "ent.elasticsearch.test_config.license.error", nil, "", http.StatusNotImplemented)
		return err
	}
	if err := esI.TestConfig(cfg); err != nil {
		return err
	}

	return nil
}

func (a *App) PurgeElasticsearchIndexes() *model.AppError {
	esI := a.Elasticsearch
	if esI == nil {
		err := model.NewAppError("PurgeElasticsearchIndexes", "ent.elasticsearch.test_config.license.error", nil, "", http.StatusNotImplemented)
		return err
	}

	if err := esI.PurgeIndexes(); err != nil {
		return err
	}

	return nil
}

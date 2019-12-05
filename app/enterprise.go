// Copyright (c) 2019-present AboutOne, Inc. All Rights Reserved.


package app

import (
	"za-white-screen/einterfaces"
	ejobs "za-white-screen/einterfaces/jobs"
	tjobs "za-white-screen/jobs/interfaces"
	"za-white-screen/mlog"
	"za-white-screen/model"
)

var accountMigrationInterface func(*Server) einterfaces.AccountMigrationInterface

func RegisterAccountMigrationInterface(f func(*Server) einterfaces.AccountMigrationInterface) {
	accountMigrationInterface = f
}

var clusterInterface func(*Server) einterfaces.ClusterInterface

func RegisterClusterInterface(f func(*Server) einterfaces.ClusterInterface) {
	clusterInterface = f
}

var complianceInterface func(*App) einterfaces.ComplianceInterface

func RegisterComplianceInterface(f func(*App) einterfaces.ComplianceInterface) {
	complianceInterface = f
}

var dataRetentionInterface func(*App) einterfaces.DataRetentionInterface

func RegisterDataRetentionInterface(f func(*App) einterfaces.DataRetentionInterface) {
	dataRetentionInterface = f
}

var elasticsearchInterface func(*App) einterfaces.ElasticsearchInterface

func RegisterElasticsearchInterface(f func(*App) einterfaces.ElasticsearchInterface) {
	elasticsearchInterface = f
}

var jobsDataRetentionJobInterface func(*App) ejobs.DataRetentionJobInterface

func RegisterJobsDataRetentionJobInterface(f func(*App) ejobs.DataRetentionJobInterface) {
	jobsDataRetentionJobInterface = f
}

var jobsMessageExportJobInterface func(*App) ejobs.MessageExportJobInterface

func RegisterJobsMessageExportJobInterface(f func(*App) ejobs.MessageExportJobInterface) {
	jobsMessageExportJobInterface = f
}

var jobsElasticsearchAggregatorInterface func(*App) ejobs.ElasticsearchAggregatorInterface

func RegisterJobsElasticsearchAggregatorInterface(f func(*App) ejobs.ElasticsearchAggregatorInterface) {
	jobsElasticsearchAggregatorInterface = f
}

var jobsElasticsearchIndexerInterface func(*App) ejobs.ElasticsearchIndexerInterface

func RegisterJobsElasticsearchIndexerInterface(f func(*App) ejobs.ElasticsearchIndexerInterface) {
	jobsElasticsearchIndexerInterface = f
}

var jobsLdapSyncInterface func(*App) ejobs.LdapSyncInterface

func RegisterJobsLdapSyncInterface(f func(*App) ejobs.LdapSyncInterface) {
	jobsLdapSyncInterface = f
}

var jobsMigrationsInterface func(*App) tjobs.MigrationsJobInterface

func RegisterJobsMigrationsJobInterface(f func(*App) tjobs.MigrationsJobInterface) {
	jobsMigrationsInterface = f
}

var jobsPluginsInterface func(*App) tjobs.PluginsJobInterface

func RegisterJobsPluginsJobInterface(f func(*App) tjobs.PluginsJobInterface) {
	jobsPluginsInterface = f
}

var ldapInterface func(*App) einterfaces.LdapInterface

func RegisterLdapInterface(f func(*App) einterfaces.LdapInterface) {
	ldapInterface = f
}
var ssoInterface func(*App) einterfaces.SSOInterface

func RegisterSSOInterface(f func(*App) einterfaces.SSOInterface) {
	ssoInterface = f
}

var cdmsInterface func(*App) einterfaces.CdmsInterface

func RegisterCdmsInterface(f func(*App) einterfaces.CdmsInterface) {
	cdmsInterface = f
}

var msgInterface func(*App) einterfaces.MsgInterface

func RegisterMsgInterface(f func(*App) einterfaces.MsgInterface) {
	msgInterface = f
}

var messageExportInterface func(*App) einterfaces.MessageExportInterface

func RegisterMessageExportInterface(f func(*App) einterfaces.MessageExportInterface) {
	messageExportInterface = f
}

var metricsInterface func(*App) einterfaces.MetricsInterface

func RegisterMetricsInterface(f func(*App) einterfaces.MetricsInterface) {
	metricsInterface = f
}

var samlInterface func(*App) einterfaces.SamlInterface

func RegisterSamlInterface(f func(*App) einterfaces.SamlInterface) {
	samlInterface = f
}

func (s *Server) initEnterprise() {
	if accountMigrationInterface != nil {
		s.AccountMigration = accountMigrationInterface(s)
	}
	if complianceInterface != nil {
		s.Compliance = complianceInterface(s.FakeApp())
	}
	if elasticsearchInterface != nil {
		s.Elasticsearch = elasticsearchInterface(s.FakeApp())
	}
	if ldapInterface != nil {
		s.Ldap = ldapInterface(s.FakeApp())
	}
	if cdmsInterface != nil {
		s.Cdms = cdmsInterface(s.FakeApp())
	}
	if msgInterface != nil {
		s.Msg = msgInterface(s.FakeApp())
	}
	if ssoInterface !=  nil {
		s.SSO = ssoInterface(s.FakeApp())
	}
	if messageExportInterface != nil {
		s.MessageExport = messageExportInterface(s.FakeApp())
	}
	if metricsInterface != nil {
		s.Metrics = metricsInterface(s.FakeApp())
	}
	if samlInterface != nil {
		s.Saml = samlInterface(s.FakeApp())
		s.AddConfigListener(func(_, cfg *model.Config) {
			if err := s.Saml.ConfigureSP(); err != nil {
				mlog.Error("An error occurred while configuring SAML Service Provider", mlog.Err(err))
			}
		})
	}
	if dataRetentionInterface != nil {
		s.DataRetention = dataRetentionInterface(s.FakeApp())
	}
	if clusterInterface != nil {
		s.Cluster = clusterInterface(s)
	}
}

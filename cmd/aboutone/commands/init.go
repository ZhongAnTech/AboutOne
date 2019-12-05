


package commands

import (
	"za-white-screen/app"
	"za-white-screen/model"
	"za-white-screen/utils"
	"github.com/spf13/cobra"
	"github.com/mattermost/viper"
)

func InitDBCommandContextCobra(command *cobra.Command) (*app.App, error) {
	config := viper.GetString("config")

	a, err := InitDBCommandContext(config)

	if err != nil {
		// Returning an error just prints the usage message, so actually panic
		panic(err)
	}

	a.InitPlugins(*a.Config().PluginSettings.Directory, *a.Config().PluginSettings.ClientDirectory)
	a.DoAppMigrations()

	return a, nil
}

func InitDBCommandContext(configDSN string) (*app.App, error) {
	if err := utils.TranslationsPreInit(); err != nil {
		return nil, err
	}
	model.AppErrorInit(utils.T)

	s, err := app.NewServer(
		app.Config(configDSN, false),
		app.StartElasticsearch,
	)
	if err != nil {
		return nil, err
	}

	a := s.FakeApp()

	if model.BuildEnterpriseReady == "true" {
		a.LoadLicense()
	}

	return a, nil
}

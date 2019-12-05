
// See LICENSE.txt for license information.

package scheduler

import (
	"za-white-screen/app"
	tjobs "za-white-screen/jobs/interfaces"
)

type PluginsJobInterfaceImpl struct {
	App *app.App
}

func init() {
	app.RegisterJobsPluginsJobInterface(func(a *app.App) tjobs.PluginsJobInterface {
		return &PluginsJobInterfaceImpl{a}
	})
}

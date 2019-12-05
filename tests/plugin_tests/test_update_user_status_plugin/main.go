
// See LICENSE.txt for license information.

package main

import (
	"fmt"

	"za-white-screen/model"
	"za-white-screen/plugin"
)

type MyPlugin struct {
	plugin.MattermostPlugin
}

func (p *MyPlugin) MessageWillBePosted(c *plugin.Context, post *model.Post) (*model.Post, string) {
	uid := "{{.BasicUser.Id}}"

	statuses := []string{model.STATUS_ONLINE, model.STATUS_AWAY, model.STATUS_DND, model.STATUS_OFFLINE}

	for _, s := range statuses {
		status, err := p.API.UpdateUserStatus(uid, s)
		if err != nil {
			return nil, err.Error()
		}
		if status == nil {
			return nil, "Status was expected, got nil"
		}
		if s != status.Status {
			return nil, fmt.Sprintf("Invalid status returned: %v != %v", s, status.Status)
		}

	}

	status, err := p.API.UpdateUserStatus(uid, "notrealstatus")
	if err == nil {
		return nil, "Expected to get an error while updating invalid user status"
	}
	if status != nil {
		return nil, "Status was expected to be nil, got: " + status.Status
	}

	return nil, ""
}

func main() {
	plugin.ClientMain(&MyPlugin{})
}

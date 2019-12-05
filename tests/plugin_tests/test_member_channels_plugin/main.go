
// See LICENSE.txt for license information.

package main

import (
	"za-white-screen/model"
	"za-white-screen/plugin"
)

type MyPlugin struct {
	plugin.MattermostPlugin
}

func (p *MyPlugin) MessageWillBePosted(c *plugin.Context, post *model.Post) (*model.Post, string) {
	channelMembers, err := p.API.GetChannelMembersForUser("{{.BasicTeam.Id}}", "{{.BasicUser.Id}}", 0, 10)

	if err != nil {
		return nil, err.Error() + "failed to get channel members"
	} else if len(channelMembers) != 3 {
		return nil, "Invalid number of channel members"
	} else if channelMembers[0].UserId != "{{.BasicUser.Id}}" {
		return nil, "Invalid user id returned"
	}

	return nil, ""
}

func main() {
	plugin.ClientMain(&MyPlugin{})
}


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
	teamMembers, err := p.API.GetTeamMembersForUser("{{.BasicUser.Id}}", 0, 10)
	if err != nil {
		return nil, err.Error() + "failed to get team members"
	} else if len(teamMembers) != 1 {
		return nil, "Invalid number of team members"
	} else if teamMembers[0].UserId != "{{.BasicUser.Id}}" || teamMembers[0].TeamId != "{{.BasicTeam.Id}}" {
		return nil, "Invalid user or team id returned"
	}
	return nil, ""
}

func main() {
	plugin.ClientMain(&MyPlugin{})
}

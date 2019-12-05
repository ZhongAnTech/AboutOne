// Copyright (c) 2019-present AboutOne, Inc. All Rights Reserved.


package app

import (
	"os"
	"strings"
	"testing"
	"text/template"
	"time"

	"za-white-screen/model"
)

func TestPluginDeadlock(t *testing.T) {
	t.Run("Single Plugin", func(t *testing.T) {
		th := Setup(t).InitBasic()
		defer th.TearDown()

		pluginPostOnActivate := template.Must(template.New("pluginPostOnActivate").Parse(`
			package main

			import (
				"za-white-screen/plugin"
				"za-white-screen/model"
			)

			type MyPlugin struct {
				plugin.MattermostPlugin
			}

			func (p *MyPlugin) OnActivate() error {
				_, err := p.API.CreatePost(&model.Post{
					UserId: "{{.User.Id}}",
					ChannelId: "{{.Channel.Id}}",
					Message:   "message",
				})
				if err != nil {
					panic(err.Error())
				}

				return nil
			}

			func (p *MyPlugin) MessageWillBePosted(c *plugin.Context, post *model.Post) (*model.Post, string) {
				if _, from_plugin := post.Props["from_plugin"]; from_plugin {
					return nil, ""
				}

				p.API.CreatePost(&model.Post{
					UserId: "{{.User.Id}}",
					ChannelId: "{{.Channel.Id}}",
					Message:   "message",
					Props: map[string]interface{}{
						"from_plugin": true,
					},
				})

				return nil, ""
			}

			func main() {
				plugin.ClientMain(&MyPlugin{})
			}
`,
		))

		templateData := struct {
			User    *model.User
			Channel *model.Channel
		}{
			th.BasicUser,
			th.BasicChannel,
		}

		plugins := []string{}
		pluginTemplates := []*template.Template{
			pluginPostOnActivate,
		}
		for _, pluginTemplate := range pluginTemplates {
			b := &strings.Builder{}
			pluginTemplate.Execute(b, templateData)

			plugins = append(plugins, b.String())
		}

		done := make(chan bool)
		go func() {
			SetAppEnvironmentWithPlugins(t, plugins, th.App, th.App.NewPluginAPI)
			close(done)
		}()

		select {
		case <-done:
		case <-time.After(30 * time.Second):
			t.Fatal("plugin failed to activate: likely deadlocked")
			go func() {
				time.Sleep(5 * time.Second)
				os.Exit(1)
			}()
		}
	})

	t.Run("Multiple Plugins", func(t *testing.T) {
		th := Setup(t).InitBasic()
		defer th.TearDown()

		pluginPostOnHasBeenPosted := template.Must(template.New("pluginPostOnHasBeenPosted").Parse(`
			package main

			import (
				"za-white-screen/plugin"
				"za-white-screen/model"
			)

			type MyPlugin struct {
				plugin.MattermostPlugin
			}

			func (p *MyPlugin) MessageWillBePosted(c *plugin.Context, post *model.Post) (*model.Post, string) {
				if _, from_plugin := post.Props["from_plugin"]; from_plugin {
					return nil, ""
				}

				p.API.CreatePost(&model.Post{
					UserId: "{{.User.Id}}",
					ChannelId: "{{.Channel.Id}}",
					Message:   "message",
					Props: map[string]interface{}{
						"from_plugin": true,
					},
				})

				return nil, ""
			}

			func main() {
				plugin.ClientMain(&MyPlugin{})
			}
`,
		))

		pluginPostOnActivate := template.Must(template.New("pluginPostOnActivate").Parse(`
			package main

			import (
				"za-white-screen/plugin"
				"za-white-screen/model"
			)

			type MyPlugin struct {
				plugin.MattermostPlugin
			}

			func (p *MyPlugin) OnActivate() error {
				_, err := p.API.CreatePost(&model.Post{
					UserId: "{{.User.Id}}",
					ChannelId: "{{.Channel.Id}}",
					Message:   "message",
				})
				if err != nil {
					panic(err.Error())
				}

				return nil
			}

			func main() {
				plugin.ClientMain(&MyPlugin{})
			}
`,
		))

		templateData := struct {
			User    *model.User
			Channel *model.Channel
		}{
			th.BasicUser,
			th.BasicChannel,
		}

		plugins := []string{}
		pluginTemplates := []*template.Template{
			pluginPostOnHasBeenPosted,
			pluginPostOnActivate,
		}
		for _, pluginTemplate := range pluginTemplates {
			b := &strings.Builder{}
			pluginTemplate.Execute(b, templateData)

			plugins = append(plugins, b.String())
		}

		done := make(chan bool)
		go func() {
			SetAppEnvironmentWithPlugins(t, plugins, th.App, th.App.NewPluginAPI)
			close(done)
		}()

		select {
		case <-done:
		case <-time.After(30 * time.Second):
			t.Fatal("plugin failed to activate: likely deadlocked")
			go func() {
				time.Sleep(5 * time.Second)
				os.Exit(1)
			}()
		}
	})
}

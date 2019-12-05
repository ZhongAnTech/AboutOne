


package model

import (
	"encoding/json"
	"io"
)

type PluginInfo struct {
	Manifest
}

type PluginsResponse struct {
	Active   []*PluginInfo `json:"active"`
	Inactive []*PluginInfo `json:"inactive"`
}

func (m *PluginsResponse) ToJson() string {
	b, _ := json.Marshal(m)
	return string(b)
}

func PluginsResponseFromJson(data io.Reader) *PluginsResponse {
	var m *PluginsResponse
	json.NewDecoder(data).Decode(&m)
	return m
}

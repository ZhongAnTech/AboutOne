


package model

import (
	"encoding/json"
	"io"
)

const CHANNEL_SEARCH_DEFAULT_LIMIT = 50

type ChannelSearch struct {
	Term                   string `json:"term"`
	ExcludeDefaultChannels bool   `json:"exclude_default_channels"`
	NotAssociatedToGroup   string `json:"not_associated_to_group"`

	//以下为追加cml-20190902
	Page                   int    `json:"page"`
	PerPage                int    `json:"per_page"`
	PreTags                string `json:"pre_tags"`
	SufTags                string `json:"suf_tags"`
}

// ToJson convert a Channel to a json string
func (c *ChannelSearch) ToJson() string {
	b, _ := json.Marshal(c)
	return string(b)
}

// ChannelSearchFromJson will decode the input and return a Channel
func ChannelSearchFromJson(data io.Reader) *ChannelSearch {
	var cs *ChannelSearch
	json.NewDecoder(data).Decode(&cs)
	return cs
}

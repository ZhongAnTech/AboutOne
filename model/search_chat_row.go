


package model

import (
	"encoding/json"
)

type SearchChatCountRow struct {
	ChannelId  string  `json:"channel_id"`
	Count int `json:"count"`

	//add
	ChannelDisplayName string `json:"channel_display_name"`
	ChannelType string `json:"channel_type"`
	ChannelIconId string `json:"channel_icon_id"`

}

type SearchChatCountRows []*SearchChatCountRow

func (me *SearchChatCountRow) ToJson() string {
	b, _ := json.Marshal(me)
	return string(b)
}

func (me SearchChatCountRows) ToJson() string {
	if b, err := json.Marshal(me); err != nil {
		return "[]"
	} else {
		return string(b)
	}
}


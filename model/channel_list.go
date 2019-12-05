


package model

import (
	"encoding/json"
	"io"
	"strings"
)

type ChannelList []*Channel

func (o *ChannelList) ToJson() string {
	if b, err := json.Marshal(o); err != nil {
		return "[]"
	} else {
		return string(b)
	}
}

func (o *ChannelList) FilteByTerm(term string ) []*Channel{
	newChannels := make([]*Channel,0)
	for _, v := range *o {
		if strings.Index(v.DisplayName,term) != -1{
			newChannels = append(newChannels,v)
		}
	}
	return newChannels
}

func (o *ChannelList) Etag() string {

	id := "0"
	var t int64 = 0
	var delta int64 = 0

	for _, v := range *o {
		if v.LastPostAt > t {
			t = v.LastPostAt
			id = v.Id
		}

		if v.UpdateAt > t {
			t = v.UpdateAt
			id = v.Id
		}

	}

	return Etag(id, t, delta, len(*o))
}

func ChannelListFromJson(data io.Reader) *ChannelList {
	var o *ChannelList
	json.NewDecoder(data).Decode(&o)
	return o
}

func ChannelSliceFromJson(data io.Reader) []*Channel {
	var o []*Channel
	json.NewDecoder(data).Decode(&o)
	return o
}

type ChannelListWithTeamData []*ChannelWithTeamData
type ChannelListWithPostData []*ChannelWithPostData

func (o *ChannelListWithTeamData) ToJson() string {
	if b, err := json.Marshal(o); err != nil {
		return "[]"
	} else {
		return string(b)
	}
}
func (o *ChannelListWithPostData) ToJson() string {
	if b, err := json.Marshal(o); err != nil {
		return "[]"
	} else {
		return string(b)
	}
}

func (o *ChannelListWithTeamData) Etag() string {

	id := "0"
	var t int64 = 0
	var delta int64 = 0

	for _, v := range *o {
		if v.LastPostAt > t {
			t = v.LastPostAt
			id = v.Id
		}

		if v.UpdateAt > t {
			t = v.UpdateAt
			id = v.Id
		}

		if v.TeamUpdateAt > t {
			t = v.TeamUpdateAt
			id = v.Id
		}
	}

	return Etag(id, t, delta, len(*o))
}

func ChannelListWithTeamDataFromJson(data io.Reader) *ChannelListWithTeamData {
	var o *ChannelListWithTeamData
	json.NewDecoder(data).Decode(&o)
	return o
}

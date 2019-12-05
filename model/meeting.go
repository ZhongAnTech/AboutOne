package model

import (
	"io"
	"encoding/json"
	"net/http"
)

type Meeting struct {
	Id             string `json:"id"`
	ChannelId      string `json:"channel_id"`
	MeetingId      string `json:"meeting_id"`
	MeetingNo      string `json:"meeting_no"`
	MeetingName    string `json:"meeting_name"`
	UserId string `json:"user_id"`
	Username string `json:"user_name"`
	NickName string `json:"nick_name"`
	Players     string `json:"players"`
	LeavePlayers     string `json:"leave_players"`
	VideoStatus      string `json:"video_status"`
	VoiceStatus      string `json:"voice_status"`
	ServerHost       string `db:"-" json:"server_host"`
	Status      string `json:"status"`
	CreateAt    int64  `json:"create_at"`
	UpdateAt    int64  `json:"update_at"`
	DeleteAt    int64  `json:"delete_at"`
}

type MeetingRoom struct {
	Id             int64 `json:"id"`
	Num            string `json:"num"`
	Flag           string `json:"flag"`
	UserId         string `json:"user_id"`
}
type MeetingMembers struct {
	Id           int64 `json:"id"`
	MeetingId   string `json:"meeting_id"`
	MeetingNo   string `json:"meeting_no"`
	UserName    string `json:"user_name"`
	NickName    string `json:"nick_name"`
	CreateAt    int64  `json:"create_at"`
	UpdateAt    int64  `json:"update_at"`
	DeleteAt    int64  `json:"delete_at"`
	SystemTime  int64  `db:"-" json:"system_time"`
}
type MeetingInfo struct {
	MeetingMembers   []*MeetingMembers
	Status      string `json:"status"`
	SystemTime  int64  `db:"-" json:"system_time"`
}
 type MeetingBody struct {
	 ChannelId   string `json:"channel_id"`
	 MeetingId   string `json:"meeting_id"`
	 MeetingNo   string `json:"meeting_no"`
	 MeetingName string `json:"meeting_name"`
	 UserId      string `json:"user_id"`
	 Username    string `json:"user_name"`
	 NickName    string `json:"nick_name"`
	 IsJoin      string `json:"is_join"`
	 IsLeave     string `json:"is_leave"`
	 Status      string `json:"status"`
	 CreateAt    int64  `json:"create_at"`
	 UpdateAt    int64  `json:"update_at"`
 }

type IncommingMeeting struct {
	ChannelId      string `json:"channel_id"`
	MeetingId      string `json:"meeting_id"`
	MeetingNo      string `json:"meeting_no"`
	MeetingName    string `json:"meeting_name"`
	UserId string `json:"user_id"`
	Username string `json:"user_name"`
	Players     string `json:"players"`
	Status      string `json:"status"`
}
type MeetingList []*Meeting

// PreSave should be run before saving a new bot to the database.
func (b *Meeting) PreSave() {
	if b.Id == "" {
		b.Id = NewId()
	}
	b.CreateAt = GetMillis()
	b.UpdateAt = b.CreateAt
	b.DeleteAt = 0
}

func (b *MeetingMembers) PreUpdate() {
	b.UpdateAt = GetMillis()
}

func (b *MeetingMembers) PreSave() {
	b.CreateAt = GetMillis()
	b.UpdateAt = b.CreateAt
	b.DeleteAt = 0
}

func (b *Meeting) PreUpdate() {
	b.UpdateAt = GetMillis()
}
// ToJson serializes the meeting to json.
func (b *Meeting) ToJson() []byte {
	data, _ := json.Marshal(b)
	return data
}

func (b *Meeting) Clone() *Meeting {
	copy := *b
	return &copy
}
func (b *MeetingMembers) Clone() *MeetingMembers {
	copy := *b
	return &copy
}
// ToJson serializes the meeting to json.
func (b *MeetingMembers) ToJson() []byte {
	data, _ := json.Marshal(b)
	return data
}
func (b *MeetingInfo) ToJson() []byte {
	data, _ := json.Marshal(b)
	return data
}
func MeetingFromJson(data io.Reader) *Meeting {
	var meeting *Meeting
	json.NewDecoder(data).Decode(&meeting)
	return meeting
}
func (b *Meeting) Trace() map[string]interface{} {
	return map[string]interface{}{"channelId": b.ChannelId}
}
// IsValid validates the bot and returns an error if it isn't configured correctly.
func (b *Meeting) IsValid() *AppError {
	if b.ChannelId =="" {
		return NewAppError("Bot.IsValid", "model.bot.is_valid.user_id.app_error", b.Trace(), "", http.StatusBadRequest)
	}
	/*if b.MeetingId == "" {
		return NewAppError("Bot.IsValid", "model.bot.is_valid.user_id.app_error", b.Trace(), "", http.StatusBadRequest)
	}*/
	if b.MeetingNo == "" {
		return NewAppError("Bot.IsValid", "model.bot.is_valid.user_id.app_error", b.Trace(), "", http.StatusBadRequest)
	}
	if b.MeetingName == "" {
		return NewAppError("Bot.IsValid", "model.bot.is_valid.user_id.app_error", b.Trace(), "", http.StatusBadRequest)
	}
	if b.Username == "" {
		return NewAppError("Bot.IsValid", "model.bot.is_valid.username.app_error", b.Trace(), "", http.StatusBadRequest)
	}
	if b.Status == "" {
		return NewAppError("Bot.IsValid", "model.bot.is_valid.username.app_error", b.Trace(), "", http.StatusBadRequest)
	}
	if b.CreateAt == 0 {
		return NewAppError("Bot.IsValid", "model.bot.is_valid.create_at.app_error", b.Trace(), "", http.StatusBadRequest)
	}

	if b.UpdateAt == 0 {
		return NewAppError("Bot.IsValid", "model.bot.is_valid.update_at.app_error", b.Trace(), "", http.StatusBadRequest)
	}

	return nil
}

type MeetingGetOptions struct {
	ChannelId        string
	UserName         string
	IncludeDeleted bool
	OnlyOrphaned   bool
	Page           int
	PerPage        int
}


func MakeMeetingNotFoundError(id string) *AppError {
	return NewAppError("SqlMeetingStore.Get", "store.sql_meeting.get.missing.app_error", map[string]interface{}{"id": id}, "", http.StatusNotFound)
}

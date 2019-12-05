package model

import (
	"encoding/json"
	"net/http"
	"unicode/utf8"
)

type Collect struct {
	Id         string `json:"id"`
	Collector  string `json:"collector"`				//收集者用户id
	UserId     string `json:"user_id"`  				//消息来源用户id(单条消息)
	ChannelId  string `json:"channel_id"`				//消息来源频道
	PostId  string `json:"post_id"`                     //消息id(如果是多条小合并收藏为空)
	PostIds  StringArray `json:"post_ids,omitempty"`    //消息id数组
	FileIds StringArray `json:"file_ids,omitempty"`    //文件id数组
	Title     string `json:"title"`                     //消息显示的标题
	Message    string `json:"message"`                  //json数组
	CreateAt   int64  `json:"create_at"`
	Files map[string]*FileInfo `json:"files,omitempty" db:"-"`

}

type Collects []*Collect

func (o *Collect) Clone() *Collect {
	copy := *o
	return &copy
}

func (o *Collect) ToJson() string {
	b, _ := json.Marshal(o)
	return string(b)
}


func (o *Collect) PreSave() {
	if o.Id == "" {
		o.Id = NewId()
	}

	if o.CreateAt == 0 {
		o.CreateAt = GetMillis()
	}

	o.PreCommit()
}

func (o *Collect) PreCommit() {
	if o.FileIds == nil {
		o.FileIds = []string{}
	}
	// There's a rare bug where the client sends up duplicate FileIds so protect against that
	o.FileIds = RemoveDuplicateStrings(o.FileIds)

	if o.PostIds == nil {
		o.PostIds = []string{}
	}
	// There's a rare bug where the client sends up duplicate FileIds so protect against that
	o.PostIds = RemoveDuplicateStrings(o.PostIds)

}

func (o *Collect) IsValid(maxPostSize int) *AppError {

	if len(o.Id) != 26 {
		return NewAppError("Collect.IsValid", "model.collect.is_valid.id.app_error", nil, "", http.StatusBadRequest)
	}

	if o.CreateAt == 0 {
		return NewAppError("Collect.IsValid", "model.collect.is_valid.create_at.app_error", nil, "id="+o.Id, http.StatusBadRequest)
	}

	if len(o.UserId) != 26 && len(o.UserId) != 0 {
		return NewAppError("Collect.IsValid", "model.collect.is_valid.user_id.app_error", nil, "", http.StatusBadRequest)
	}

	if len(o.ChannelId) != 26{
		return NewAppError("Collect.IsValid", "model.collect.is_valid.channel_id.app_error", nil, "", http.StatusBadRequest)
	}

	if utf8.RuneCountInString(o.Message) > maxPostSize {
		return NewAppError("Collect.IsValid", "model.collect.is_valid.msg.app_error", nil, "id="+o.Id, http.StatusBadRequest)
	}

	return nil
}
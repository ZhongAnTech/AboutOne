// Copyright (c) 2019-present AboutOne, Inc. All Rights Reserved.


package model

type ChannelMemberHistoryResult struct {
	ChannelId string
	UserId    string
	JoinTime  int64
	LeaveTime *int64

	// these two fields are never set in the database - when we SELECT, we join on Users to get them
	UserEmail string `db:"Email"`
	Username  string
	IsBot     bool
}

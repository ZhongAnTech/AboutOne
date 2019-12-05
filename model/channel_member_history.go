// Copyright (c) 2019-present AboutOne, Inc. All Rights Reserved.


package model

type ChannelMemberHistory struct {
	ChannelId string
	UserId    string
	JoinTime  int64
	LeaveTime *int64
}

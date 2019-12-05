// Copyright (c) 2019-present AboutOne, Inc. All Rights Reserved.


package testlib

import (
	"za-white-screen/store"
)

type TestStore struct {
	store.Store
}

func (s *TestStore) Close() {
	// Don't propagate to the underlying store, since this instance is persistent.
}

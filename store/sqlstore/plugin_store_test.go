// Copyright (c) 2019-present AboutOne, Inc. All Rights Reserved.


package sqlstore

import (
	"testing"

	"za-white-screen/store/storetest"
)

func TestPluginStore(t *testing.T) {
	StoreTest(t, storetest.TestPluginStore)
}

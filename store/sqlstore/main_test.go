// Copyright (c) 2019-present AboutOne, Inc. All Rights Reserved.


package sqlstore_test

import (
	"za-white-screen/store/sqlstore"
	"testing"

	"za-white-screen/testlib"
)

var mainHelper *testlib.MainHelper

func TestMain(m *testing.M) {
	mainHelper = testlib.NewMainHelperWithOptions(nil)
	defer mainHelper.Close()

	sqlstore.InitTest()

	mainHelper.Main(m)
	sqlstore.TearDownTest()
}

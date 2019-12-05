// Copyright (c) 2019-present AboutOne, Inc. All Rights Reserved.


package plugin_test

import (
	"testing"

	"za-white-screen/testlib"
)

var mainHelper *testlib.MainHelper

func TestMain(m *testing.M) {
	mainHelper = testlib.NewMainHelperWithOptions(nil)
	defer mainHelper.Close()

	mainHelper.Main(m)
}

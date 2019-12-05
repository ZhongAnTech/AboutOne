// Copyright (c) 2019-present AboutOne, Inc. All Rights Reserved.


package api4

import (
	"testing"

	"za-white-screen/testlib"
)

var mainHelper *testlib.MainHelper

func TestMain(m *testing.M) {
	var options = testlib.HelperOptions{
		EnableStore:     true,
		EnableResources: true,
	}

	mainHelper = testlib.NewMainHelperWithOptions(&options)
	defer mainHelper.Close()

	UseTestStore(mainHelper.GetStore())
	mainHelper.Main(m)
}

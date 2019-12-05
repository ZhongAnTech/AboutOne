// Copyright (c) 2019-present AboutOne, Inc. All Rights Reserved.


package commands

import (
	"flag"
	"os"
	"testing"

	"za-white-screen/api4"
	"za-white-screen/testlib"
)

func TestMain(m *testing.M) {
	// Command tests are run by re-invoking the test binary in question, so avoid creating
	// another container when we detect same.
	flag.Parse()
	if filter := flag.Lookup("test.run").Value.String(); filter == "ExecCommand" {
		status := m.Run()
		os.Exit(status)
		return
	}

	var options = testlib.HelperOptions{
		EnableStore:     true,
		EnableResources: true,
	}

	mainHelper = testlib.NewMainHelperWithOptions(&options)
	defer mainHelper.Close()

	api4.UseTestStore(mainHelper.GetStore())

	mainHelper.Main(m)
}

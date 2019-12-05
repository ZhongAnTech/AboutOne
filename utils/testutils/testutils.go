// Copyright (c) 2019-present AboutOne, Inc. All Rights Reserved.


package testutils

import (
	"bytes"
	"io"
	"os"
	"path/filepath"

	"za-white-screen/utils/fileutils"
)

func ReadTestFile(name string) ([]byte, error) {
	path, _ := fileutils.FindDir("tests")
	file, err := os.Open(filepath.Join(path, name))
	if err != nil {
		return nil, err
	}
	defer file.Close()

	data := &bytes.Buffer{}
	if _, err := io.Copy(data, file); err != nil {
		return nil, err
	} else {
		return data.Bytes(), nil
	}
}

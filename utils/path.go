// Copyright (c) 2019-present AboutOne, Inc. All Rights Reserved.


package utils

import (
	"path/filepath"
	"strings"
)

// PathTraversesUpward will return true if the path attempts to traverse upwards by using
// ".." in the path.
func PathTraversesUpward(path string) bool {
	return strings.HasPrefix(filepath.Clean(path), "..")
}

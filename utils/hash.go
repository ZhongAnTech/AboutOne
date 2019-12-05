// Copyright (c) 2019-present AboutOne, Inc. All Rights Reserved.


package utils

import (
	"crypto/sha256"
	"fmt"
)

func HashSha256(text string) string {
	hash := sha256.New()
	hash.Write([]byte(text))

	return fmt.Sprintf("%x", hash.Sum(nil))
}

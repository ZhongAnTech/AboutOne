// Copyright (c) 2019-present AboutOne, Inc. All Rights Reserved.


package model

import (
	"strings"
	"testing"
)

func TestMfaSecretJson(t *testing.T) {
	secret := MfaSecret{Secret: NewId(), QRCode: NewId()}
	json := secret.ToJson()
	result := MfaSecretFromJson(strings.NewReader(json))

	if secret.Secret != result.Secret {
		t.Fatal("Secrets do not match")
	}
}

// Copyright (c) 2019-present AboutOne, Inc. All Rights Reserved.


package model

import (
	"strings"
	"testing"
)

func TestSamlCertificateStatusJson(t *testing.T) {
	status := &SamlCertificateStatus{IdpCertificateFile: true, PrivateKeyFile: true, PublicCertificateFile: true}
	json := status.ToJson()
	rstatus := SamlCertificateStatusFromJson(strings.NewReader(json))

	if status.IdpCertificateFile != rstatus.IdpCertificateFile {
		t.Fatal("IdpCertificateFile do not match")
	}

	rstatus = SamlCertificateStatusFromJson(strings.NewReader("junk"))
	if rstatus != nil {
		t.Fatal("should be nil")
	}
}




package model

import (
	"strings"
	"testing"
)

func TestAuditJson(t *testing.T) {
	audit := Audit{Id: NewId(), UserId: NewId(), CreateAt: GetMillis()}
	json := audit.ToJson()
	result := AuditFromJson(strings.NewReader(json))

	if audit.Id != result.Id {
		t.Fatal("Ids do not match")
	}
}

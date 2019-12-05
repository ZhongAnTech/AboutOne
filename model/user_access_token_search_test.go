


package model

import (
	"strings"
	"testing"
)

func TestUserAccessTokenSearchJson(t *testing.T) {
	userAccessTokenSearch := UserAccessTokenSearch{Term: NewId()}
	json := userAccessTokenSearch.ToJson()
	ruserAccessTokenSearch := UserAccessTokenSearchFromJson(strings.NewReader(json))

	if userAccessTokenSearch.Term != ruserAccessTokenSearch.Term {
		t.Fatal("Terms do not match")
	}
}

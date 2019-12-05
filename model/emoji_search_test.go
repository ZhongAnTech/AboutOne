


package model

import (
	"strings"
	"testing"
)

func TestEmojiSearchJson(t *testing.T) {
	emojiSearch := EmojiSearch{Term: NewId()}
	json := emojiSearch.ToJson()
	remojiSearch := EmojiSearchFromJson(strings.NewReader(json))

	if emojiSearch.Term != remojiSearch.Term {
		t.Fatal("Terms do not match")
	}
}

// Copyright (c) 2019-present AboutOne, Inc. All Rights Reserved.


package markdown

import (
	"fmt"
	"strings"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestInspect(t *testing.T) {
	markdown := `
[foo]: bar
- a
  > [![]()]()
  > [![foo]][foo]
- d
`

	visited := []string{}
	level := 0
	Inspect(markdown, func(blockOrInline interface{}) bool {
		if blockOrInline == nil {
			level--
		} else {
			visited = append(visited, strings.Repeat(" ", level*4)+strings.TrimPrefix(fmt.Sprintf("%T", blockOrInline), "*markdown."))
			level++
		}
		return true
	})

	assert.Equal(t, []string{
		"Document",
		"    Paragraph",
		"    List",
		"        ListItem",
		"            Paragraph",
		"                Text",
		"            BlockQuote",
		"                Paragraph",
		"                    InlineLink",
		"                        InlineImage",
		"                    SoftLineBreak",
		"                    ReferenceLink",
		"                        ReferenceImage",
		"                            Text",
		"        ListItem",
		"            Paragraph",
		"                Text",
	}, visited)
}




package commands

import (
	"testing"
)

func TestVersion(t *testing.T) {
	th := Setup()
	defer th.TearDown()

	th.CheckCommand(t, "version")
}

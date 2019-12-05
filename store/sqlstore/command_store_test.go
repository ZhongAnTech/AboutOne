


package sqlstore

import (
	"testing"

	"za-white-screen/store/storetest"
)

func TestCommandStore(t *testing.T) {
	StoreTest(t, storetest.TestCommandStore)
}

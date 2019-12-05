


package sqlstore

import (
	"testing"

	"za-white-screen/store/storetest"
)

func TestSystemStore(t *testing.T) {
	StoreTest(t, storetest.TestSystemStore)
}

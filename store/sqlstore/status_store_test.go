


package sqlstore

import (
	"testing"

	"za-white-screen/store/storetest"
)

func TestStatusStore(t *testing.T) {
	StoreTest(t, storetest.TestStatusStore)
}

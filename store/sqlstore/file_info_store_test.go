


package sqlstore

import (
	"testing"

	"za-white-screen/store/storetest"
)

func TestFileInfoStore(t *testing.T) {
	StoreTest(t, storetest.TestFileInfoStore)
}

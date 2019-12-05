


package sqlstore

import (
	"testing"

	"za-white-screen/store/storetest"
)

func TestJobStore(t *testing.T) {
	StoreTest(t, storetest.TestJobStore)
}

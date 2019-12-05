


package sqlstore

import (
	"testing"

	"za-white-screen/store/storetest"
)

func TestUserStore(t *testing.T) {
	StoreTest(t, storetest.TestUserStore)
}

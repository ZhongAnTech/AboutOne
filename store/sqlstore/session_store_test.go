


package sqlstore

import (
	"testing"

	"za-white-screen/store/storetest"
)

func TestSessionStore(t *testing.T) {
	StoreTest(t, storetest.TestSessionStore)
}

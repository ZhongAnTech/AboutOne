


package sqlstore

import (
	"testing"

	"za-white-screen/store/storetest"
)

func TestOAuthStore(t *testing.T) {
	StoreTest(t, storetest.TestOAuthStore)
}

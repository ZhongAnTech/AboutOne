


package sqlstore

import (
	"testing"

	"za-white-screen/store/storetest"
)

func TestAuditStore(t *testing.T) {
	StoreTest(t, storetest.TestAuditStore)
}

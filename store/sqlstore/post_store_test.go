


package sqlstore

import (
	"testing"

	"za-white-screen/store/storetest"
)

func TestPostStore(t *testing.T) {
	StoreTestWithSqlSupplier(t, storetest.TestPostStore)
}

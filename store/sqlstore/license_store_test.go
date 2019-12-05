


package sqlstore

import (
	"testing"

	"za-white-screen/store/storetest"
)

func TestLicenseStore(t *testing.T) {
	StoreTest(t, storetest.TestLicenseStore)
}

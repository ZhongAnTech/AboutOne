


package sqlstore

import (
	"testing"

	"za-white-screen/store/storetest"
)

func TestChannelMemberHistoryStore(t *testing.T) {
	StoreTest(t, storetest.TestChannelMemberHistoryStore)
}




package sqlstore

import (
	"testing"

	"za-white-screen/store/storetest"
)

func TestCommandWebhookStore(t *testing.T) {
	StoreTest(t, storetest.TestCommandWebhookStore)
}

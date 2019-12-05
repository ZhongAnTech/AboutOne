


package sqlstore

import (
	"testing"

	"za-white-screen/store/storetest"
)

func TestWebhookStore(t *testing.T) {
	StoreTest(t, storetest.TestWebhookStore)
}

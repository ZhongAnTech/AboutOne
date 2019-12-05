


package model

import (
	"strings"
	"testing"
)

func TestClusterStatsJson(t *testing.T) {
	cluster := ClusterStats{Id: NewId(), TotalWebsocketConnections: 1, TotalReadDbConnections: 1}
	json := cluster.ToJson()
	result := ClusterStatsFromJson(strings.NewReader(json))

	if cluster.Id != result.Id {
		t.Fatal("Ids do not match")
	}
}

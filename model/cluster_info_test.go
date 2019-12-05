


package model

import (
	"strings"
	"testing"
)

func TestClusterInfoJson(t *testing.T) {
	cluster := ClusterInfo{IpAddress: NewId(), Hostname: NewId()}
	json := cluster.ToJson()
	result := ClusterInfoFromJson(strings.NewReader(json))

	if cluster.IpAddress != result.IpAddress {
		t.Fatal("Ids do not match")
	}
}

func TestClusterInfosJson(t *testing.T) {
	cluster := ClusterInfo{IpAddress: NewId(), Hostname: NewId()}
	clusterInfos := make([]*ClusterInfo, 1)
	clusterInfos[0] = &cluster
	json := ClusterInfosToJson(clusterInfos)
	result := ClusterInfosFromJson(strings.NewReader(json))

	if clusterInfos[0].IpAddress != result[0].IpAddress {
		t.Fatal("Ids do not match")
	}
}

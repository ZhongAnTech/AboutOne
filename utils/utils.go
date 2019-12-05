


package utils

import (
	"fmt"
	"strconv"
	"time"
	"za-white-screen/mlog"

	"github.com/muesli/cache2go"
	"net"
	"net/http"
	"net/url"
	"strings"
)

var utilsCache = cache2go.Cache("UtilsCache")

const LOCAL_HOST_IP = "LOCAL_HOST_IP"

func StringInSlice(a string, slice []string) bool {
	for _, b := range slice {
		if b == a {
			return true
		}
	}
	return false
}

func StringArrayIntersection(arr1, arr2 []string) []string {
	arrMap := map[string]bool{}
	result := []string{}

	for _, value := range arr1 {
		arrMap[value] = true
	}

	for _, value := range arr2 {
		if arrMap[value] {
			result = append(result, value)
		}
	}

	return result
}

func RemoveDuplicatesFromStringArray(arr []string) []string {
	result := make([]string, 0, len(arr))
	seen := make(map[string]bool)

	for _, item := range arr {
		if !seen[item] {
			result = append(result, item)
			seen[item] = true
		}
	}

	return result
}

func StringSliceDiff(a, b []string) []string {
	m := make(map[string]bool)
	result := []string{}

	for _, item := range b {
		m[item] = true
	}

	for _, item := range a {
		if !m[item] {
			result = append(result, item)
		}
	}
	return result
}

func GetIpAddress(r *http.Request, trustedProxyIPHeader []string) string {
	address := ""

	for _, proxyHeader := range trustedProxyIPHeader {
		header := r.Header.Get(proxyHeader)
		if len(header) > 0 {
			addresses := strings.Fields(header)
			if len(addresses) > 0 {
				address = strings.TrimRight(addresses[0], ",")
			}
		}

		if len(address) > 0 {
			return address
		}
	}

	if len(address) == 0 {
		address, _, _ = net.SplitHostPort(r.RemoteAddr)
	}

	return address
}

func GetHostnameFromSiteURL(siteURL string) string {
	u, err := url.Parse(siteURL)
	if err != nil {
		return ""
	}

	return u.Hostname()
}


func GetLocalIpAddress() string{
	//1.取缓存
	localhostIp := GetUtilsCache(LOCAL_HOST_IP)
	if localhostIp != ""{
		return localhostIp
	}
	//2.缓存中不存在
	localhostIp = GetLocalIpAddressWithoutCache()
	if localhostIp != ""{
		SetUtilsCache(LOCAL_HOST_IP,localhostIp,86400)
	}
	return localhostIp
}

func GetLocalIpAddressWithoutCache() string{
	netInterfaces, err := net.Interfaces()
	if err != nil {
		fmt.Println("net.Interfaces failed, err:", err.Error())
		return ""
	}
	for i := 0; i < len(netInterfaces); i++ {
		if (netInterfaces[i].Flags & net.FlagUp) != 0 {
			addrs, _ := netInterfaces[i].Addrs()
			for _, address := range addrs {
				if ipnet, ok := address.(*net.IPNet); ok && !ipnet.IP.IsLoopback() {
					if ipnet.IP.To4() != nil {
						mlog.Info("LocalIp[本机内网ip]:"+ipnet.IP.String())
						return ipnet.IP.String()
					}
				}
			}
		}
	}
	return ""
}

func GetUtilsCache(key string) string{
	res, err := utilsCache.Value(key)
	if err != nil {
		return ""
	}
	value := res.Data().(string)
	return value
}

func SetUtilsCache(key string,value string,second int64) {
	_, err := utilsCache.Value(key)
	if err == nil {
		return
	} else {
		utilsCache.Add(key, time.Duration(second) * time.Second, value)
		mlog.Info("SetUtilsCache:key="+key+",value="+value+",second="+strconv.FormatInt(second,10))
	}
}
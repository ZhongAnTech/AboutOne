package einterfaces
import (
	"github.com/garyburd/redigo/redis"
)
type RedisService interface {
	RedisPoolInit(server ,password string) *redis.Pool
}

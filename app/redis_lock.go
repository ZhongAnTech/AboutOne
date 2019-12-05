package app

import "github.com/garyburd/redigo/redis"

const (
	redisLockTimeout = 3 * 60 * 60 // 3 hours
)

func (a *App) TryLock(key string) (isLock bool, err error) {
	con := a.Srv.RedisPool.Get()
	defer con.Close()
	_, err = redis.String(con.Do("set", key, 1, "ex", redisLockTimeout, "nx"))
	if err == redis.ErrNil {
		// The lock was not successful, it already exists.
		return false, err
	}
	if err != nil {
		return false, err
	}
	return true, nil
}

func (a *App) Unlock(key string) (err error) {
	con := a.Srv.RedisPool.Get()
	defer con.Close()
	_, err = con.Do("del", key)
	if err != nil {
		return
	}
	return
}

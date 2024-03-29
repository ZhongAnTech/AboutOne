


package einterfaces

import (
	"za-white-screen/model"
)

type LdapInterface interface {
	DoLogin(userId string, password string) (*model.User, *model.AppError)
	GetUser(userId string) (*model.User, *model.AppError)
	GetUserAttributes(id string, attributes []string) (map[string]string, *model.AppError)
	CheckPassword(id string, password string) *model.AppError
	CheckPasswordAuthData(authData string, password string) *model.AppError
	SwitchToLdap(userId, ldapId, ldapPassword string) *model.AppError
	StartSynchronizeJob(waitForJobToFinish bool) (*model.Job, *model.AppError)
	RunTest() *model.AppError
	GetAllLdapUsers() ([]*model.User, *model.AppError)
	MigrateIDAttribute(toAttribute string) error
	GetGroup(groupUID string) (*model.Group, *model.AppError)
	GetAllGroupsPage(page int, perPage int, opts model.LdapGroupSearchOpts) ([]*model.Group, int, *model.AppError)
	FirstLoginSync(userID, userAuthService, userAuthData string) *model.AppError
}


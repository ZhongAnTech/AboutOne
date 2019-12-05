package einterfaces

import "za-white-screen/model"

type SSOInterface interface {
	SSOLogin(ticket string) (*model.User, *model.AppError)
	GetUserCompanyInfo(user *model.User)  (string,*model.AppError)
	GetUserDepartmentInfo(user *model.User)  (string,*model.AppError)
}

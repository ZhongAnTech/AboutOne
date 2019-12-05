// Copyright (c) 2019-present AboutOne, Inc. All Rights Reserved.


package app

import (
	"crypto/md5"
	"fmt"
	"net/http"
	"strings"

	"za-white-screen/mlog"
	"za-white-screen/model"
	"za-white-screen/utils"
)

func (a *App) LoadLicense() {
	customer := model.Customer{
		Id:"hspouu5rn3g7iynihne5kcxfha",
		Name:"BAIPING",
		Email:"zhongan@zhongan.io",
		Company:"zhongan",
		PhoneNumber:"",
	}
	user :=1
	ldap :=true
	features := model.Features{
		Users:&user,
		LDAP: &ldap,
		LDAPGroups:&ldap,
		MFA:&ldap,
		GoogleOAuth:&ldap,
		Office365OAuth:&ldap,
		Compliance:&ldap,
		Cluster:&ldap,
		Metrics:&ldap,
		MHPNS:&ldap,
		SAML:&ldap,
		Elasticsearch:&ldap,
		Announcement:&ldap,
		ThemeManagement:&ldap,
		EmailNotificationContents:&ldap,
		DataRetention:&ldap,
		MessageExport:&ldap,
		CustomPermissionsSchemes:&ldap,
		CustomTermsOfService:&ldap,
	}
	license := model.License{
		Id : "7aasdfsdfdsfad",
		IssuedAt :1561627228971,
		StartsAt :1561627228971,
		ExpiresAt:9999999999999,
		Customer : &customer,
		Features : &features,
		SkuName : "za",
		SkuShortName : "za",
	}
	a.SetLicense(&license)
	mlog.Info("License key valid unlocking enterprise features.")
}

func (a *App) SaveLicense(licenseBytes []byte) (*model.License, *model.AppError) {
	success, licenseStr := utils.ValidateLicense(licenseBytes)
	if !success {
		return nil, model.NewAppError("addLicense", model.INVALID_LICENSE_ERROR, nil, "", http.StatusBadRequest)
	}
	license := model.LicenseFromJson(strings.NewReader(licenseStr))

	uniqueUserCount, err := a.Srv.Store.User().Count(model.UserCountOptions{})
	if err != nil {
		return nil, model.NewAppError("addLicense", "api.license.add_license.invalid_count.app_error", nil, err.Error(), http.StatusBadRequest)
	}

	if uniqueUserCount > int64(*license.Features.Users) {
		return nil, model.NewAppError("addLicense", "api.license.add_license.unique_users.app_error", map[string]interface{}{"Users": *license.Features.Users, "Count": uniqueUserCount}, "", http.StatusBadRequest)
	}

	if license != nil && license.IsExpired() {
		return nil, model.NewAppError("addLicense", model.EXPIRED_LICENSE_ERROR, nil, "", http.StatusBadRequest)
	}

	if ok := a.SetLicense(license); !ok {
		return nil, model.NewAppError("addLicense", model.EXPIRED_LICENSE_ERROR, nil, "", http.StatusBadRequest)
	}

	record := &model.LicenseRecord{}
	record.Id = license.Id
	record.Bytes = string(licenseBytes)

	_, err = a.Srv.Store.License().Save(record)
	if err != nil {
		a.RemoveLicense()
		return nil, model.NewAppError("addLicense", "api.license.add_license.save.app_error", nil, "err="+err.Error(), http.StatusInternalServerError)
	}

	sysVar := &model.System{}
	sysVar.Name = model.SYSTEM_ACTIVE_LICENSE_ID
	sysVar.Value = license.Id
	if err := a.Srv.Store.System().SaveOrUpdate(sysVar); err != nil {
		a.RemoveLicense()
		return nil, model.NewAppError("addLicense", "api.license.add_license.save_active.app_error", nil, "", http.StatusInternalServerError)
	}

	a.ReloadConfig()
	a.InvalidateAllCaches()

	// start job server if necessary - this handles the edge case where a license file is uploaded, but the job server
	// doesn't start until the server is restarted, which prevents the 'run job now' buttons in system console from
	// functioning as expected
	if *a.Config().JobSettings.RunJobs && a.Srv.Jobs != nil && a.Srv.Jobs.Workers != nil {
		a.Srv.Jobs.StartWorkers()
	}
	if *a.Config().JobSettings.RunScheduler && a.Srv.Jobs != nil && a.Srv.Jobs.Schedulers != nil {
		a.Srv.Jobs.StartSchedulers()
	}

	return license, nil
}

// License returns the currently active license or nil if the application is unlicensed.
func (a *App) License() *model.License {
	return a.Srv.License()
}

func (a *App) SetLicense(license *model.License) bool {
	defer func() {
		for _, listener := range a.Srv.licenseListeners {
			listener()
		}
	}()

	if license != nil {
		license.Features.SetDefaults()

		a.Srv.licenseValue.Store(license)
		a.Srv.clientLicenseValue.Store(utils.GetClientLicense(license))
		return true
	}

	a.Srv.licenseValue.Store((*model.License)(nil))
	a.Srv.clientLicenseValue.Store(map[string]string(nil))
	return false
}

func (a *App) ValidateAndSetLicenseBytes(b []byte) {
	if success, licenseStr := utils.ValidateLicense(b); success {
		license := model.LicenseFromJson(strings.NewReader(licenseStr))
		a.SetLicense(license)
		return
	}

	mlog.Warn("No valid enterprise license found")
}

func (a *App) SetClientLicense(m map[string]string) {
	a.Srv.clientLicenseValue.Store(m)
}

func (a *App) ClientLicense() map[string]string {
	if clientLicense, _ := a.Srv.clientLicenseValue.Load().(map[string]string); clientLicense != nil {
		return clientLicense
	}
	return map[string]string{"IsLicensed": "false"}
}

func (a *App) RemoveLicense() *model.AppError {
	if license, _ := a.Srv.licenseValue.Load().(*model.License); license == nil {
		return nil
	}

	sysVar := &model.System{}
	sysVar.Name = model.SYSTEM_ACTIVE_LICENSE_ID
	sysVar.Value = ""

	if err := a.Srv.Store.System().SaveOrUpdate(sysVar); err != nil {
		return err
	}

	a.SetLicense(nil)
	a.ReloadConfig()

	a.InvalidateAllCaches()

	return nil
}

func (s *Server) AddLicenseListener(listener func()) string {
	id := model.NewId()
	s.licenseListeners[id] = listener
	return id
}

func (a *App) AddLicenseListener(listener func()) string {
	id := model.NewId()
	a.Srv.licenseListeners[id] = listener
	return id
}

func (s *Server) RemoveLicenseListener(id string) {
	delete(s.licenseListeners, id)
}

func (a *App) RemoveLicenseListener(id string) {
	delete(a.Srv.licenseListeners, id)
}

func (a *App) GetClientLicenseEtag(useSanitized bool) string {
	value := ""

	lic := a.ClientLicense()

	if useSanitized {
		lic = a.GetSanitizedClientLicense()
	}

	for k, v := range lic {
		value += fmt.Sprintf("%s:%s;", k, v)
	}

	return model.Etag(fmt.Sprintf("%x", md5.Sum([]byte(value))))
}

func (a *App) GetSanitizedClientLicense() map[string]string {
	sanitizedLicense := make(map[string]string)

	for k, v := range a.ClientLicense() {
		sanitizedLicense[k] = v
	}

	delete(sanitizedLicense, "Id")
	delete(sanitizedLicense, "Name")
	delete(sanitizedLicense, "Email")
	delete(sanitizedLicense, "PhoneNumber")
	delete(sanitizedLicense, "IssuedAt")
	delete(sanitizedLicense, "StartsAt")
	delete(sanitizedLicense, "ExpiresAt")
	delete(sanitizedLicense, "SkuName")
	delete(sanitizedLicense, "SkuShortName")

	return sanitizedLicense
}

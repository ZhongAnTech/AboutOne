// Code generated by mockery v1.0.0. DO NOT EDIT.

// Regenerate this file using `make store-mocks`.

package mocks

import mock "github.com/stretchr/testify/mock"
import model "za-white-screen/model"

// LicenseStore is an autogenerated mock type for the LicenseStore type
type LicenseStore struct {
	mock.Mock
}

// Get provides a mock function with given fields: id
func (_m *LicenseStore) Get(id string) (*model.LicenseRecord, *model.AppError) {
	ret := _m.Called(id)

	var r0 *model.LicenseRecord
	if rf, ok := ret.Get(0).(func(string) *model.LicenseRecord); ok {
		r0 = rf(id)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*model.LicenseRecord)
		}
	}

	var r1 *model.AppError
	if rf, ok := ret.Get(1).(func(string) *model.AppError); ok {
		r1 = rf(id)
	} else {
		if ret.Get(1) != nil {
			r1 = ret.Get(1).(*model.AppError)
		}
	}

	return r0, r1
}

// Save provides a mock function with given fields: license
func (_m *LicenseStore) Save(license *model.LicenseRecord) (*model.LicenseRecord, *model.AppError) {
	ret := _m.Called(license)

	var r0 *model.LicenseRecord
	if rf, ok := ret.Get(0).(func(*model.LicenseRecord) *model.LicenseRecord); ok {
		r0 = rf(license)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*model.LicenseRecord)
		}
	}

	var r1 *model.AppError
	if rf, ok := ret.Get(1).(func(*model.LicenseRecord) *model.AppError); ok {
		r1 = rf(license)
	} else {
		if ret.Get(1) != nil {
			r1 = ret.Get(1).(*model.AppError)
		}
	}

	return r0, r1
}

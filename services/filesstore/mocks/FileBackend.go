// Code generated by mockery v1.0.0. DO NOT EDIT.

// Regenerate this file using `make files-store-mocks`.

package mocks

import io "io"
import mock "github.com/stretchr/testify/mock"
import model "za-white-screen/model"

// FileBackend is an autogenerated mock type for the FileBackend type
type FileBackend struct {
	mock.Mock
}

// CopyFile provides a mock function with given fields: oldPath, newPath
func (_m *FileBackend) CopyFile(oldPath string, newPath string) *model.AppError {
	ret := _m.Called(oldPath, newPath)

	var r0 *model.AppError
	if rf, ok := ret.Get(0).(func(string, string) *model.AppError); ok {
		r0 = rf(oldPath, newPath)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*model.AppError)
		}
	}

	return r0
}

// FileExists provides a mock function with given fields: path
func (_m *FileBackend) FileExists(path string) (bool, *model.AppError) {
	ret := _m.Called(path)

	var r0 bool
	if rf, ok := ret.Get(0).(func(string) bool); ok {
		r0 = rf(path)
	} else {
		r0 = ret.Get(0).(bool)
	}

	var r1 *model.AppError
	if rf, ok := ret.Get(1).(func(string) *model.AppError); ok {
		r1 = rf(path)
	} else {
		if ret.Get(1) != nil {
			r1 = ret.Get(1).(*model.AppError)
		}
	}

	return r0, r1
}

// ListDirectory provides a mock function with given fields: path
func (_m *FileBackend) ListDirectory(path string) (*[]string, *model.AppError) {
	ret := _m.Called(path)

	var r0 *[]string
	if rf, ok := ret.Get(0).(func(string) *[]string); ok {
		r0 = rf(path)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*[]string)
		}
	}

	var r1 *model.AppError
	if rf, ok := ret.Get(1).(func(string) *model.AppError); ok {
		r1 = rf(path)
	} else {
		if ret.Get(1) != nil {
			r1 = ret.Get(1).(*model.AppError)
		}
	}

	return r0, r1
}

// MoveFile provides a mock function with given fields: oldPath, newPath
func (_m *FileBackend) MoveFile(oldPath string, newPath string) *model.AppError {
	ret := _m.Called(oldPath, newPath)

	var r0 *model.AppError
	if rf, ok := ret.Get(0).(func(string, string) *model.AppError); ok {
		r0 = rf(oldPath, newPath)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*model.AppError)
		}
	}

	return r0
}

// ReadFile provides a mock function with given fields: path
func (_m *FileBackend) ReadFile(path string) ([]byte, *model.AppError) {
	ret := _m.Called(path)

	var r0 []byte
	if rf, ok := ret.Get(0).(func(string) []byte); ok {
		r0 = rf(path)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).([]byte)
		}
	}

	var r1 *model.AppError
	if rf, ok := ret.Get(1).(func(string) *model.AppError); ok {
		r1 = rf(path)
	} else {
		if ret.Get(1) != nil {
			r1 = ret.Get(1).(*model.AppError)
		}
	}

	return r0, r1
}

// Reader provides a mock function with given fields: path
func (_m *FileBackend) Reader(path string) (io.ReadCloser, *model.AppError) {
	ret := _m.Called(path)

	var r0 io.ReadCloser
	if rf, ok := ret.Get(0).(func(string) io.ReadCloser); ok {
		r0 = rf(path)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(io.ReadCloser)
		}
	}

	var r1 *model.AppError
	if rf, ok := ret.Get(1).(func(string) *model.AppError); ok {
		r1 = rf(path)
	} else {
		if ret.Get(1) != nil {
			r1 = ret.Get(1).(*model.AppError)
		}
	}

	return r0, r1
}

// RemoveDirectory provides a mock function with given fields: path
func (_m *FileBackend) RemoveDirectory(path string) *model.AppError {
	ret := _m.Called(path)

	var r0 *model.AppError
	if rf, ok := ret.Get(0).(func(string) *model.AppError); ok {
		r0 = rf(path)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*model.AppError)
		}
	}

	return r0
}

// RemoveFile provides a mock function with given fields: path
func (_m *FileBackend) RemoveFile(path string) *model.AppError {
	ret := _m.Called(path)

	var r0 *model.AppError
	if rf, ok := ret.Get(0).(func(string) *model.AppError); ok {
		r0 = rf(path)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*model.AppError)
		}
	}

	return r0
}

// TestConnection provides a mock function with given fields:
func (_m *FileBackend) TestConnection() *model.AppError {
	ret := _m.Called()

	var r0 *model.AppError
	if rf, ok := ret.Get(0).(func() *model.AppError); ok {
		r0 = rf()
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*model.AppError)
		}
	}

	return r0
}

// WriteFile provides a mock function with given fields: fr, path
func (_m *FileBackend) WriteFile(fr io.Reader, path string) (int64, *model.AppError) {
	ret := _m.Called(fr, path)

	var r0 int64
	if rf, ok := ret.Get(0).(func(io.Reader, string) int64); ok {
		r0 = rf(fr, path)
	} else {
		r0 = ret.Get(0).(int64)
	}

	var r1 *model.AppError
	if rf, ok := ret.Get(1).(func(io.Reader, string) *model.AppError); ok {
		r1 = rf(fr, path)
	} else {
		if ret.Get(1) != nil {
			r1 = ret.Get(1).(*model.AppError)
		}
	}

	return r0, r1
}

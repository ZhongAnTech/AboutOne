


package model

import (
	"encoding/json"
	"io"
	"net/http"
)

type FileOperationLog struct {
	Id         string `json:"id"`
	FileInfoId string `json:"file_info_id"`
	ChannelId  string `json:"channel_id"`
	Operator   string `json:"operator"`
	Operation  string `json:"operation"`
	CreateAt   int64  `json:"create_at"`
}

//cml-20190731 网盘中用，包含usrname
type FileOperationLogForDisk struct {
	FileOperationLog
	Operatorname string `json:"operator_name"`
}

func (info *FileOperationLog) ToJson() string {
	b, _ := json.Marshal(info)
	return string(b)
}

func FFileOperationLogFromJson(data io.Reader) *FileOperationLog {
	decoder := json.NewDecoder(data)

	var info FileOperationLog
	if err := decoder.Decode(&info); err != nil {
		return nil
	} else {
		return &info
	}
}

func FileOperationLogsToJson(infos []*FileOperationLog) string {
	b, _ := json.Marshal(infos)
	return string(b)
}

func FileOperationLogsFromJson(data io.Reader) []*FileOperationLog {
	decoder := json.NewDecoder(data)

	var infos []*FileOperationLog
	if err := decoder.Decode(&infos); err != nil {
		return nil
	} else {
		return infos
	}
}

func (o *FileOperationLog) PreSave() {
	if o.Id == "" {
		o.Id = NewId()
	}

	if o.CreateAt == 0 {
		o.CreateAt = GetMillis()
	}
}

func (o *FileOperationLog) IsValid() *AppError {
	if len(o.Id) != 26 {
		return NewAppError("FileOperationLog.IsValid", "model.file_info.is_valid.id.app_error", nil, "", http.StatusBadRequest)
	}

	if o.CreateAt == 0 {
		return NewAppError("FileOperationLog.IsValid", "model.file_operation_log.is_valid.create_at.app_error", nil, "id="+o.Id, http.StatusBadRequest)
	}
	return nil
}

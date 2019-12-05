package einterfaces

import (
	"io"
	"za-white-screen/model"
)

const (
	//1.权限由大到小,SOURCE_DOWNLOAD  > PDF_DOWNLOAD > READ
	CDMS_AUTHORITY_SOURCE_DOWNLOAD = "SOURCE_DOWNLOAD"
	CDMS_AUTHORITY_PDF_DOWNLOAD  = "PDF_DOWNLOAD"
	CDMS_AUTHORITY_READ   = "READ"
)

type CdmsInterface interface {
	GetCdmsOauthToken() (*CdmsOauthTokenResp, *model.AppError)
    GetCdmsOauthTokenCache()(string,*model.AppError)
    AuthorizeAdd(hashId string,userId string,authorityType string) (*bool, *model.AppError)
    DocumentRead(channelId string, hashId string,pageNo int64)([]byte, *model.AppError)
    DocumentDownload(channelId string, hashId string, action string)([]byte, *model.AppError)
    CdmsUpload(fileDataReader io.Reader,fileName string,ext string,userName string)(string, *model.AppError)
    CdmsFileInfo(hashId string)(*FileInfoData, *model.AppError)

}

type CdmsOauthTokenResp struct {
	AccessToken string `json:"access_token"`
	TokenType string `json:"token_type"`
	ExpiresIn int64 `json:"expires_in"`
	Scope string `json:"scope"`
}

type CdmsResp struct {
	Success bool `json:"success"`
	Message string `json:"message"`
	Code string `json:"code"`
	Data string `json:"data"`
}

type CdmsFileInfoResp struct {
	Success bool `json:"success"`
	Message string `json:"message"`
	Code string `json:"code"`
	Data FileInfoData `json:"data"`
}

type FileInfoData struct{
	HashId string `json:"hashId"`
	PrefixPath string `json:"prefixPath"`
	SourceName string `json:"sourceName"`
	PdfName string `json:"pdfName"`
	SvgNumber int `json:"svgNumber"`
	Deleted string `json:"deleted"`
	CreateUser string `json:"createUser"`
	CreateTime string `json:"createTime"`
}

type UserPermission struct {
	UserId string `json:"user_id"`
	Permission string `json:"permission"`
}

type CdmsAuthorizeAddReq struct {
	HashId string `json:"hash_id"`
	UserAuthority []*UserPermission `json:"user_authority"`
}

type CdmsDocumentReadReq struct {
	HashId string `json:"hashId"`
	UserId string `json:"userId"`
	PageNo int64 `json:"pageNo"`
}

type CdmsDocumentDownloadReq struct {
	HashId string `json:"hashId"`
	UserId string `json:"userId"`
	Action string `json:"action"`
}

type CdmsErrorResp struct{
	Error string `json:"error"`
	ErrorDescription string `json:"error_description"`
	Message string `json:"message"`
}


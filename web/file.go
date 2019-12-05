package web

import (
	"encoding/json"
	"io"
	"net/http"
	"net/url"
	"strconv"
	"strings"
	"time"
	"za-white-screen/einterfaces"
	"za-white-screen/model"
)

func (w *Web) InitFile() {
	w.MainRouter.Handle("/download/desktop", w.NewHandler(getFile)).Methods("GET")
	w.MainRouter.Handle("/package/info", w.NewHandler(getPackageInfo)).Methods("GET")
}

type PackageInfo struct {
	Version string   `json:"version"`
	MacFileId string   `json:"mac_file_id"`
	WinFileId string   `json:"win_file_id"`
}

func getPackageInfo(c *Context, w http.ResponseWriter, r *http.Request) {

	if c.Err != nil {
		return
	}

	version := ""
	macFileId := ""
	winFileId := ""


	infoMac, err := c.App.GetForChannelIdAll("mac",0,1)
	if err != nil {
		c.Err = err
		return
	}
	if len(infoMac)>0{
		macFileId = infoMac[0].Id
		version = strings.TrimSuffix(infoMac[0].Name,"."+infoMac[0].Extension)
		version = strings.Replace(version,"aboutone_","",1)
	}

	infoWin, err := c.App.GetForChannelIdAll("win",0,1)
	if err != nil {
		c.Err = err
		return
	}
	if len(infoWin)>0{
		winFileId = infoWin[0].Id
		if version==""{
			version = strings.TrimSuffix(infoWin[0].Name,"."+infoWin[0].Extension)
			version = strings.Replace(version,"aboutone_","",1)
		}
	}

	resp := PackageInfo{

		Version: version,

		MacFileId: macFileId,

		WinFileId: winFileId,
	}

	b, _ := json.Marshal(resp)
	w.WriteHeader(http.StatusOK)
	w.Write(b)
}

func getFile(c *Context, w http.ResponseWriter, r *http.Request) {
	c.RequireFileId()
	if c.Err != nil {
		return
	}
	info, err := c.App.GetFileInfo(c.Params.FileId)
	if err != nil {
		c.Err = err
		return
	}
	if *c.App.Config().FileSettings.EnableCdms && info.Hash != ""{
		b,err := c.App.Cdms.DocumentDownload(info.ChannelId,info.Hash,einterfaces.CDMS_AUTHORITY_SOURCE_DOWNLOAD)
		if err != nil {
			c.Err = err
			return
		}
		w.Header().Del("content-type")
		w.Header().Set("x-content-type-options","nosniff")
		w.Header().Set("content-disposition","attachment; filename="+info.Name)
		w.Write(b)
	}else{
		fileReader, err := c.App.FileReader(info.Path)
		defer fileReader.Close()
		if err != nil {
			c.Err = err
			c.Err.StatusCode = http.StatusNotFound
			return
		} else {
			err = writeFileResponse(info.Name, info.MimeType, info.Size, time.Unix(0, info.UpdateAt*int64(1000*1000)), *c.App.Config().ServiceSettings.WebserverMode, fileReader, true, w, r)
			if err != nil {
				c.Err = err
				return
			}
		}
	}
}


func writeFileResponse(filename string, contentType string, contentSize int64, lastModification time.Time, webserverMode string, fileReader io.ReadSeeker, forceDownload bool, w http.ResponseWriter, r *http.Request) *model.AppError {
	w.Header().Set("Cache-Control", "private, no-cache")
	w.Header().Set("X-Content-Type-Options", "nosniff")

	if contentSize > 0 {
		contentSizeStr := strconv.Itoa(int(contentSize))
		if webserverMode == "gzip" {
			w.Header().Set("X-Uncompressed-Content-Length", contentSizeStr)
		} else {
			w.Header().Set("Content-Length", contentSizeStr)
		}
	}

	if contentType == "" {
		contentType = "application/octet-stream"
	}

	w.Header().Set("Content-Type", contentType)

	var toDownload bool
	if forceDownload {
		toDownload = true
	}
	filename = url.PathEscape(filename)

	if toDownload {
		w.Header().Set("Content-Disposition", "attachment;filename=\""+filename+"\"; filename*=UTF-8''"+filename)
	} else {
		w.Header().Set("Content-Disposition", "inline;filename=\""+filename+"\"; filename*=UTF-8''"+filename)
	}

	// prevent file links from being embedded in iframes
	w.Header().Set("X-Frame-Options", "DENY")
	http.ServeContent(w, r, filename, lastModification, fileReader)

	return nil
}


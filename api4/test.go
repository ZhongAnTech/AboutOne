// Copyright (c) 2019-present AboutOne, Inc. All Rights Reserved.


package api4

import (
	"net/http"
	"strconv"
	"strings"
	"za-white-screen/mlog"
	"za-white-screen/model"
)

/**
 *cml-20191017 本类修复数据以及测试使用需要登录使用
 */
func (api *API) InitTest() {
	api.BaseRoutes.Test.Handle("/cdms", api.ApiSessionRequired(testcdms)).Methods("GET") // cml-20190924 测试接口使用 /api/v4/test/cdms
	api.BaseRoutes.Test.Handle("/updateFileClassification", api.ApiSessionRequired(updateFileClassification)).Methods("GET") // cml-20191017 更新文件类型 /api/v4/test/cdms
	api.BaseRoutes.Test.Handle("/collectDeletePreferences", api.ApiSessionRequired(dealCollectDeletePreferences)).Methods("GET")//cml-20191104以前的收藏删除 /api/v4/test/collectDeletePreferences
}

//处理历史数据，如果prefernce中有的，collect中无的，删除掉prefernce中的数据
func dealCollectDeletePreferences(c *Context, w http.ResponseWriter, r *http.Request) {
	preferences, err := c.App.Srv.Store.Preference().GetByCategory(model.PREFERENCE_CATEGORY_FLAGGED_POST, 100)
	if err != nil {
		c.Err = err
		return
	}
	total := len(preferences)
	successNum := 0
	failNum := 0
	for _, pref := range preferences {
		if pref.Category == model.PREFERENCE_CATEGORY_FLAGGED_POST {
			collectDb,_ := c.App.Srv.Store.Collect().Search(pref.UserId,pref.Name,"","",0,1)
			if len(collectDb)==0 {
				err := c.App.Srv.Store.Preference().Delete(pref.UserId,pref.Category,pref.Name)
				if err != nil{
					failNum++
					continue
				}
				successNum++
			}
		}
	}
	str := "total="+strconv.Itoa(total)+",successNum="+strconv.Itoa(successNum)+",failNum="+strconv.Itoa(failNum)
	w.Write([]byte(str))
}

func updateFileClassification(c *Context, w http.ResponseWriter, r *http.Request){
	i := 0
	successNum := 0
	failNum := 0
	str := ""
	for {
			fileInfos, err := c.App.Srv.Store.FileInfo().GetAll(i*100,100)
		    i++
			if len(fileInfos) ==0 {
		    	mlog.Info("updateFileClassification执行完毕")
				break
			}
			if err != nil {
				c.Err = err
				return
			}
			for _,fileInfo := range fileInfos {
				var classification string
				if strings.Contains(*c.App.Config().FileSettings.FileTypeDocument,"."+fileInfo.Extension){
					classification = model.CLASSIFICATION_DOCUMENT
				}else if strings.Contains(*c.App.Config().FileSettings.FileTypeImage,"."+fileInfo.Extension){
					classification = model.CLASSIFICATION_IMAGE
				}else if strings.Contains(*c.App.Config().FileSettings.FileTypeVideo,"."+fileInfo.Extension){
					classification = model.CLASSIFICATION_VIDEO
				}else if strings.Contains(fileInfo.MimeType,model.CLASSIFICATION_IMAGE+"/"){
					classification = model.CLASSIFICATION_IMAGE
				}else if strings.Contains(fileInfo.MimeType,model.CLASSIFICATION_VIDEO+"/"){
					classification = model.CLASSIFICATION_VIDEO
				}else{
					classification = model.CLASSIFICATION_OTHER
				}

				err = c.App.UpdateFileClassification(fileInfo.Id,classification)
				if err != nil{
					failNum ++
					mlog.Err(err)
					continue
				}
				successNum ++
			}
		str = "updateFileClassification执行页数i="+strconv.Itoa(i)+",successNum="+strconv.Itoa(successNum)+",failNum="+strconv.Itoa(failNum)
		mlog.Info(str)
	}

	w.Write([]byte(str))
}

func testcdms(c *Context, w http.ResponseWriter, r *http.Request) {
	/*
		//#####################测试cdms赋权接口
		cdmsOauthTokenResp,_ := c.App.GetCdmsOauthToken()
		isSuccess,_ := c.App.AuthorizeAdd("cea87dd41bbf2f742b1ca419e7daa3a4074a83f93d50a6345780e0b440cd4540","cml",CDMS_AUTHORITY_SOURCE_DOWNLOAD)
		if *isSuccess {
			fmt.Printf("cdms赋权成功")
		}
	*/


	//#####################测试cdms在线预览接口
	/*
		b,err := c.App.DocumentRead("cml","cea87dd41bbf2f742b1ca419e7daa3a4074a83f93d50a6345780e0b440cd4540",1)
		if err != nil {
			c.Err = err
			return
		}
		w.Header().Del("content-type")
		w.Header().Set("x-content-type-options","nosniff")
		w.Write(b)
	*/

	/*
		//#####################测试cdms下载pdf接口
		b,err := c.App.DocumentDownload("cml","cea87dd41bbf2f742b1ca419e7daa3a4074a83f93d50a6345780e0b440cd4540",app.CDMS_AUTHORITY_PDF_DOWNLOAD)
		if err != nil {
			c.Err = err
			return
		}
		w.Header().Del("content-type")
		w.Header().Set("x-content-type-options","nosniff")
		w.Write(b)
	*/

	//#####################测试cdms下载源文件接口
	/*
		b,err := c.App.DocumentDownload("cml","cea87dd41bbf2f742b1ca419e7daa3a4074a83f93d50a6345780e0b440cd4540",app.CDMS_AUTHORITY_SOURCE_DOWNLOAD)
		if err != nil {
			c.Err = err
			return
		}

		w.Header().Del("content-type")
		w.Header().Set("x-content-type-options","nosniff")
		w.Header().Set("content-disposition","attachment; filename=\"cea87dd41b.docx\"")
		w.Write(b)
	*/

	//#####################测试cdms获取文件信息
	//b,err := c.App.CdmsFileInfo("7167e6d00f9cd502dbf12356e111d2d2ff4440e6b640f7c39308d6320927f9e4")
	//if err != nil {
	//	c.Err = err
	//	return
	//}
	//if b != nil {
	//	mlog.Info("测试cdms获取文件信息总页数："+strconv.Itoa(b.SvgNumber))
	//
	//	b2,err := c.App.CdmsFileInfo("7167e6d00f9cd502dbf12356e111d2d2ff4440e6b640f7c39308d6320927f9e41")
	//	if err != nil {
	//		c.Err = err
	//		return
	//	}
	//	if b2 == nil {
	//		mlog.Info("测试cdms的hash无效的情况成功")
	//	}
	//}

}

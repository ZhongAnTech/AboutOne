// Copyright (c) 2019-present AboutOne, Inc. All Rights Reserved.


package api4

import (
	"net/http"
)

func (api *API) InitImage() {
	api.BaseRoutes.Image.Handle("", api.ApiSessionRequiredTrustRequester(getImage)).Methods("GET")
}

func getImage(c *Context, w http.ResponseWriter, r *http.Request) {
	url := r.URL.Query().Get("url")

	if *c.App.Config().ImageProxySettings.Enable {
		c.App.ImageProxy.GetImage(w, r, url)
	} else {
		http.Redirect(w, r, url, http.StatusFound)
	}
}
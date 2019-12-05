package web

import (
	"net/http"
	"za-white-screen/mlog"
)

func (w *Web) InitSso() {
	w.MainRouter.Handle("/sso/login", w.NewHandler(ssoLogin)).Methods("GET")
	w.MainRouter.Handle("/check/client", w.NewHandler(checkClient)).Methods("GET")
	w.MainRouter.Handle("/health", w.NewHandler(health)).Methods("GET")

}

/**
 sso login
 */
func ssoLogin(c *Context, w http.ResponseWriter, r *http.Request) {

	ticket := r.URL.Query().Get("ticket")
	mlog.Info("sso login ticket="+ticket)
	if ticket==""{
		mlog.Error("sso ticket is null!")
		return
	}
	c.LogAuditWithUserId("sso", "attempt - sso_ticket="+ticket)

	user, err := c.App.SSO.SSOLogin(ticket)
	if user==nil || err!= nil{
		mlog.Error("sso ticket is not valid!")
		c.Err = err
		return
	}
	if err != nil {
		c.LogAuditWithUserId("", "failure - sso_ticket="+ticket)
		c.Err = err
		return
	}
	c.LogAuditWithUserId(user.Id, "authenticated")
	mlog.Info("sso login create session  ticket="+ticket)
	session, err := c.App.DoLogin(w, r, user, "deviceId")
	if err != nil {
		c.Err = err
		return
	}

	c.LogAuditWithUserId(user.Id, "success")

	/*if r.Header.Get(model.HEADER_REQUESTED_WITH) == model.HEADER_REQUESTED_WITH_XML {
		c.App.AttachSessionCookies(w, r, session)
	}*/
	userTermsOfService, err := c.App.GetUserTermsOfService(user.Id)
	if err != nil && err.StatusCode != http.StatusNotFound {
		c.Err = err
		return
	}

	if userTermsOfService != nil {
		user.TermsOfServiceId = userTermsOfService.TermsOfServiceId
		user.TermsOfServiceCreateAt = userTermsOfService.CreateAt
	}
	c.App.AttachSessionCookies(w, r, session)
	c.App.Session = *session

	user.Sanitize(map[string]bool{})
	mlog.Info("sso login create end  ticket="+ticket)
	mlog.Info("sso login create end  result="+user.ToJson())
	w.Write([]byte(user.ToJson()))
}
/**
 checkClient
 */
func checkClient(c *Context, w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Content-Type", "application/json")
	flag :=false
	cookie,_ :=r.Cookie("userAgent")
	if cookie!=nil && cookie.Value=="DeskTop"{
		flag=true
	}
	if flag{
		w.Write([]byte("{\"status\": \"true\"}"))
	}else {
		w.Write([]byte("{\"status\": \"false\"}"))
	}
}
/**
 health
 */
func health(c *Context, w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Content-Type", "application/json")
	w.Write([]byte("{\"status\": \"OK\"}"))
}

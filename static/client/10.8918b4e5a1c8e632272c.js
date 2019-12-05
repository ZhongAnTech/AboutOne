(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ 1573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return saveConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return reloadConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return adminResetMfa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return getClusterStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return ldapTest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return invalidateAllCaches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return recycleDatabaseConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return adminResetPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return adminResetEmail; });
/* unused harmony export samlCertificateStatus */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return getOAuthAppInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return allowOAuth2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return emailToLdap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return emailToOAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return oauthToEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return uploadBrandImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return uploadLicenseFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return removeLicenseFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return uploadPublicSamlCertificate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return uploadPrivateSamlCertificate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return uploadIdpSamlCertificate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return removePublicSamlCertificate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return removePrivateSamlCertificate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return removeIdpSamlCertificate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return getStandardAnalytics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return getAdvancedAnalytics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return getPostsPerDayAnalytics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return getUsersPerDayAnalytics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return elasticsearchTest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return testS3Connection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return elasticsearchPurgeIndexes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return setNavigationBlocked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return deferNavigation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return cancelNavigation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return confirmNavigation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return invalidateAllEmailInvites; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return testSmtp; });
/* harmony import */ var mattermost_redux_actions_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1609);
/* harmony import */ var mattermost_redux_actions_admin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_admin__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mattermost_redux_actions_teams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(299);
/* harmony import */ var mattermost_redux_actions_teams__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_teams__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mattermost_redux_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27);
/* harmony import */ var mattermost_redux_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mattermost_redux_actions_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(117);
/* harmony import */ var mattermost_redux_actions_helpers__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_helpers__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var actions_global_actions_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1567);
/* harmony import */ var selectors_views_admin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1645);
/* harmony import */ var stores_redux_store_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14);
/* harmony import */ var utils_constants_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(0);
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.









const dispatch = stores_redux_store_jsx__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].dispatch;
const getState = stores_redux_store_jsx__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].getState;
async function saveConfig(config, success, error) {
  const {
    data,
    error: err
  } = await mattermost_redux_actions_admin__WEBPACK_IMPORTED_MODULE_0__["updateConfig"](config)(dispatch, getState);

  if (data && success) {
    success(data);
  } else if (err && error) {
    error({
      id: err.server_error_id,
      ...err
    });
  }
}
async function reloadConfig(success, error) {
  const {
    data,
    error: err
  } = await dispatch(mattermost_redux_actions_admin__WEBPACK_IMPORTED_MODULE_0__["reloadConfig"]());

  if (data && success) {
    dispatch(mattermost_redux_actions_admin__WEBPACK_IMPORTED_MODULE_0__["getConfig"]());
    dispatch(mattermost_redux_actions_admin__WEBPACK_IMPORTED_MODULE_0__["getEnvironmentConfig"]());
    success(data);
  } else if (err && error) {
    error({
      id: err.server_error_id,
      ...err
    });
  }
}
async function adminResetMfa(userId, success, error) {
  const {
    data,
    error: err
  } = await mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_1__["updateUserMfa"](userId, false)(dispatch, getState);

  if (data && success) {
    success(data);
  } else if (err && error) {
    error({
      id: err.server_error_id,
      ...err
    });
  }
}
async function getClusterStatus(success, error) {
  const {
    data,
    error: err
  } = await mattermost_redux_actions_admin__WEBPACK_IMPORTED_MODULE_0__["getClusterStatus"]()(dispatch, getState);

  if (data && success) {
    success(data);
  } else if (err && error) {
    error({
      id: err.server_error_id,
      ...err
    });
  }
}
async function ldapTest(success, error) {
  const {
    data,
    error: err
  } = await mattermost_redux_actions_admin__WEBPACK_IMPORTED_MODULE_0__["testLdap"]()(dispatch, getState);

  if (data && success) {
    success(data);
  } else if (err && error) {
    error({
      id: err.server_error_id,
      ...err
    });
  }
}
async function invalidateAllCaches(success, error) {
  const {
    data,
    error: err
  } = await mattermost_redux_actions_admin__WEBPACK_IMPORTED_MODULE_0__["invalidateCaches"]()(dispatch, getState);

  if (data && success) {
    success(data);
  } else if (err && error) {
    error({
      id: err.server_error_id,
      ...err
    });
  }
}
async function recycleDatabaseConnection(success, error) {
  const {
    data,
    error: err
  } = await mattermost_redux_actions_admin__WEBPACK_IMPORTED_MODULE_0__["recycleDatabase"]()(dispatch, getState);

  if (data && success) {
    success(data);
  } else if (err && error) {
    error({
      id: err.server_error_id,
      ...err
    });
  }
}
async function adminResetPassword(userId, currentPassword, password, success, error) {
  const {
    data,
    error: err
  } = await mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_1__["updateUserPassword"](userId, currentPassword, password)(dispatch, getState);

  if (data && success) {
    success(data);
  } else if (err && error) {
    error({
      id: err.server_error_id,
      ...err
    });
  }
}
async function adminResetEmail(user, success, error) {
  const {
    data,
    error: err
  } = await mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_1__["patchUser"](user)(dispatch, getState);

  if (data && success) {
    success(data);
  } else if (err && error) {
    error({
      id: err.server_error_id,
      ...err
    });
  }
}
async function samlCertificateStatus(success, error) {
  const {
    data,
    error: err
  } = await mattermost_redux_actions_admin__WEBPACK_IMPORTED_MODULE_0__["getSamlCertificateStatus"]()(dispatch, getState);

  if (data && success) {
    success(data);
  } else if (err && error) {
    error({
      id: err.server_error_id,
      ...err
    });
  }
}
function getOAuthAppInfo(clientId) {
  return Object(mattermost_redux_actions_helpers__WEBPACK_IMPORTED_MODULE_4__["bindClientFunc"])({
    clientFunc: mattermost_redux_client__WEBPACK_IMPORTED_MODULE_3__["Client4"].getOAuthAppInfo,
    params: [clientId]
  });
}
function allowOAuth2({
  responseType,
  clientId,
  redirectUri,
  state,
  scope
}) {
  return Object(mattermost_redux_actions_helpers__WEBPACK_IMPORTED_MODULE_4__["bindClientFunc"])({
    clientFunc: mattermost_redux_client__WEBPACK_IMPORTED_MODULE_3__["Client4"].authorizeOAuthApp,
    params: [responseType, clientId, redirectUri, state, scope]
  });
}
async function emailToLdap(loginId, password, token, ldapId, ldapPassword, success, error) {
  const {
    data,
    error: err
  } = await mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_1__["switchEmailToLdap"](loginId, password, ldapId, ldapPassword, token)(dispatch, getState);

  if (data && success) {
    success(data);
  } else if (err && error) {
    error({
      id: err.server_error_id,
      ...err
    });
  }
}
async function emailToOAuth(loginId, password, token, newType, success, error) {
  const {
    data,
    error: err
  } = await mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_1__["switchEmailToOAuth"](newType, loginId, password, token)(dispatch, getState);

  if (data && success) {
    success(data);
  } else if (err && error) {
    error({
      id: err.server_error_id,
      ...err
    });
  }
}
async function oauthToEmail(currentService, email, password, success, error) {
  const {
    data,
    error: err
  } = await mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_1__["switchOAuthToEmail"](currentService, email, password)(dispatch, getState);

  if (data) {
    if (data.follow_link) {
      Object(actions_global_actions_jsx__WEBPACK_IMPORTED_MODULE_5__[/* emitUserLoggedOutEvent */ "e"])(data.follow_link);
    }

    if (success) {
      success(data);
    }
  } else if (err && error) {
    error({
      id: err.server_error_id,
      ...err
    });
  }
}
async function uploadBrandImage(brandImage, success, error) {
  const {
    data,
    error: err
  } = await mattermost_redux_actions_admin__WEBPACK_IMPORTED_MODULE_0__["uploadBrandImage"](brandImage)(dispatch, getState);

  if (data && success) {
    success(data);
  } else if (err && error) {
    error({
      id: err.server_error_id,
      ...err
    });
  }
}
async function uploadLicenseFile(file, success, error) {
  const {
    data,
    error: err
  } = await mattermost_redux_actions_admin__WEBPACK_IMPORTED_MODULE_0__["uploadLicense"](file)(dispatch, getState);

  if (data && success) {
    success(data);
  } else if (err && error) {
    error({
      id: err.server_error_id,
      ...err
    });
  }
}
async function removeLicenseFile(success, error) {
  const {
    data,
    error: err
  } = await mattermost_redux_actions_admin__WEBPACK_IMPORTED_MODULE_0__["removeLicense"]()(dispatch, getState);

  if (data && success) {
    success(data);
  } else if (err && error) {
    error({
      id: err.server_error_id,
      ...err
    });
  }
}
async function uploadPublicSamlCertificate(file, success, error) {
  const {
    data,
    error: err
  } = await mattermost_redux_actions_admin__WEBPACK_IMPORTED_MODULE_0__["uploadPublicSamlCertificate"](file)(dispatch, getState);

  if (data && success) {
    success('saml-public.crt');
  } else if (err && error) {
    error({
      id: err.server_error_id,
      ...err
    });
  }
}
async function uploadPrivateSamlCertificate(file, success, error) {
  const {
    data,
    error: err
  } = await mattermost_redux_actions_admin__WEBPACK_IMPORTED_MODULE_0__["uploadPrivateSamlCertificate"](file)(dispatch, getState);

  if (data && success) {
    success('saml-private.key');
  } else if (err && error) {
    error({
      id: err.server_error_id,
      ...err
    });
  }
}
async function uploadIdpSamlCertificate(file, success, error) {
  const {
    data,
    error: err
  } = await mattermost_redux_actions_admin__WEBPACK_IMPORTED_MODULE_0__["uploadIdpSamlCertificate"](file)(dispatch, getState);

  if (data && success) {
    success('saml-idp.crt');
  } else if (err && error) {
    error({
      id: err.server_error_id,
      ...err
    });
  }
}
async function removePublicSamlCertificate(success, error) {
  const {
    data,
    error: err
  } = await mattermost_redux_actions_admin__WEBPACK_IMPORTED_MODULE_0__["removePublicSamlCertificate"]()(dispatch, getState);

  if (data && success) {
    success(data);
  } else if (err && error) {
    error({
      id: err.server_error_id,
      ...err
    });
  }
}
async function removePrivateSamlCertificate(success, error) {
  const {
    data,
    error: err
  } = await mattermost_redux_actions_admin__WEBPACK_IMPORTED_MODULE_0__["removePrivateSamlCertificate"]()(dispatch, getState);

  if (data && success) {
    success(data);
  } else if (err && error) {
    error({
      id: err.server_error_id,
      ...err
    });
  }
}
async function removeIdpSamlCertificate(success, error) {
  const {
    data,
    error: err
  } = await mattermost_redux_actions_admin__WEBPACK_IMPORTED_MODULE_0__["removeIdpSamlCertificate"]()(dispatch, getState);

  if (data && success) {
    success(data);
  } else if (err && error) {
    error({
      id: err.server_error_id,
      ...err
    });
  }
}
async function getStandardAnalytics(teamId) {
  await mattermost_redux_actions_admin__WEBPACK_IMPORTED_MODULE_0__["getStandardAnalytics"](teamId)(dispatch, getState);
}
async function getAdvancedAnalytics(teamId) {
  await mattermost_redux_actions_admin__WEBPACK_IMPORTED_MODULE_0__["getAdvancedAnalytics"](teamId)(dispatch, getState);
}
async function getPostsPerDayAnalytics(teamId) {
  await mattermost_redux_actions_admin__WEBPACK_IMPORTED_MODULE_0__["getPostsPerDayAnalytics"](teamId)(dispatch, getState);
}
async function getUsersPerDayAnalytics(teamId) {
  await mattermost_redux_actions_admin__WEBPACK_IMPORTED_MODULE_0__["getUsersPerDayAnalytics"](teamId)(dispatch, getState);
}
async function elasticsearchTest(config, success, error) {
  const {
    data,
    error: err
  } = await mattermost_redux_actions_admin__WEBPACK_IMPORTED_MODULE_0__["testElasticsearch"](config)(dispatch, getState);

  if (data && success) {
    success(data);
  } else if (err && error) {
    error({
      id: err.server_error_id,
      ...err
    });
  }
}
async function testS3Connection(success, error) {
  const {
    data,
    error: err
  } = await mattermost_redux_actions_admin__WEBPACK_IMPORTED_MODULE_0__["testS3Connection"]()(dispatch, getState);

  if (data && success) {
    success(data);
  } else if (err && error) {
    error({
      id: err.server_error_id,
      ...err
    });
  }
}
async function elasticsearchPurgeIndexes(success, error) {
  const {
    data,
    error: err
  } = await mattermost_redux_actions_admin__WEBPACK_IMPORTED_MODULE_0__["purgeElasticsearchIndexes"]()(dispatch, getState);

  if (data && success) {
    success(data);
  } else if (err && error) {
    error({
      id: err.server_error_id,
      ...err
    });
  }
}
function setNavigationBlocked(blocked) {
  return {
    type: utils_constants_jsx__WEBPACK_IMPORTED_MODULE_8__[/* ActionTypes */ "b"].SET_NAVIGATION_BLOCKED,
    blocked
  };
}
function deferNavigation(onNavigationConfirmed) {
  return {
    type: utils_constants_jsx__WEBPACK_IMPORTED_MODULE_8__[/* ActionTypes */ "b"].DEFER_NAVIGATION,
    onNavigationConfirmed
  };
}
function cancelNavigation() {
  return {
    type: utils_constants_jsx__WEBPACK_IMPORTED_MODULE_8__[/* ActionTypes */ "b"].CANCEL_NAVIGATION
  };
}
function confirmNavigation() {
  // have to rename these because of lint no-shadow
  return (thunkDispatch, thunkGetState) => {
    const callback = Object(selectors_views_admin__WEBPACK_IMPORTED_MODULE_6__[/* getOnNavigationConfirmed */ "b"])(thunkGetState());

    if (callback) {
      callback();
    }

    thunkDispatch({
      type: utils_constants_jsx__WEBPACK_IMPORTED_MODULE_8__[/* ActionTypes */ "b"].CONFIRM_NAVIGATION
    });
  };
}
async function invalidateAllEmailInvites(success, error) {
  const {
    data,
    error: err
  } = await dispatch(mattermost_redux_actions_teams__WEBPACK_IMPORTED_MODULE_2__["invalidateAllEmailInvites"]());

  if (data && success) {
    success(data);
  } else if (err && error) {
    error({
      id: err.server_error_id,
      ...err
    });
  }
}
async function testSmtp(success, error) {
  const {
    data,
    error: err
  } = await dispatch(mattermost_redux_actions_admin__WEBPACK_IMPORTED_MODULE_0__["testEmail"]());

  if (data && success) {
    success(data);
  } else if (err && error) {
    error({
      id: err.server_error_id,
      ...err
    });
  }
}

/***/ }),

/***/ 1587:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackButton; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1553);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.




class BackButton extends react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      id: "back_button",
      className: "signup-header"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* Link */ "a"], {
      onClick: this.props.onClick,
      to: this.props.url
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__[/* FormattedMessage */ "c"], {
      id: "generic_icons.back",
      defaultMessage: "Back Icon"
    }, title => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      id: "back_button_icon",
      className: "fa fa-1x fa-angle-left",
      title: title
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__[/* FormattedMessage */ "c"], {
      id: "web.header.back",
      defaultMessage: "Back"
    })));
  }

}

_defineProperty(BackButton, "propTypes", {
  /**
   * URL to return to
   */
  url: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

  /**
   * An optional click handler that will trigger when the user clicks on the back button
   */
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
});

_defineProperty(BackButton, "defaultProps", {
  url: '/'
});

/***/ }),

/***/ 1592:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "files/87b80d01a017833f1357800bfca49cea.png";

/***/ }),

/***/ 1645:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getNavigationBlocked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return showNavigationPrompt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getOnNavigationConfirmed; });
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
function getNavigationBlocked(state) {
  return state.views.admin.navigationBlock.blocked;
}
function showNavigationPrompt(state) {
  return state.views.admin.navigationBlock.showNavigationPrompt;
}
function getOnNavigationConfirmed(state) {
  return state.views.admin.navigationBlock.onNavigationConfirmed;
}

/***/ }),

/***/ 1752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginMfa; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52);
/* harmony import */ var utils_utils_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22);
/* harmony import */ var utils_i18n_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53);
/* harmony import */ var components_save_button_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1612);
/* harmony import */ var components_localized_input_localized_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1577);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.







class LoginMfa extends react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleChange", e => {
      e.preventDefault();
      const token = e.target.value.trim().replace(/\s/g, '');

      if (token !== this.state.token) {
        this.setState({
          token
        });
      }
    });

    _defineProperty(this, "handleSubmit", e => {
      e.preventDefault();
      const state = {};
      state.serverError = '';
      state.saving = true;
      this.setState(state);
      this.props.submit(this.props.loginId, this.props.password, this.state.token);
    });

    this.state = {
      saving: false,
      token: '',
      serverError: ''
    };
  }

  render() {
    let serverError;
    let errorClass = '';

    if (this.state.serverError) {
      serverError = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        className: "control-label"
      }, this.state.serverError);
      errorClass = ' has-error';
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      onSubmit: this.handleSubmit
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "signup__email-container"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__[/* FormattedMessage */ "c"], {
      id: "login_mfa.enterToken",
      defaultMessage: "To complete the sign in process, please enter a token from your smartphone's authenticator"
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: 'form-group' + errorClass
    }, serverError), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: 'form-group' + errorClass
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_localized_input_localized_input__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
      type: "text",
      className: "form-control",
      name: "token",
      placeholder: {
        id: Object(utils_i18n_jsx__WEBPACK_IMPORTED_MODULE_4__[/* t */ "b"])('login_mfa.token'),
        defaultMessage: 'MFA Token'
      },
      spellCheck: "false",
      autoComplete: "off",
      autoFocus: true,
      onChange: this.handleChange
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_save_button_jsx__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
      saving: this.state.saving,
      disabled: this.state.saving,
      onClick: this.handleSubmit,
      defaultMessage: Object(utils_utils_jsx__WEBPACK_IMPORTED_MODULE_3__[/* localizeMessage */ "gb"])('login_mfa.submit', 'Submit'),
      savingMessage: Object(utils_utils_jsx__WEBPACK_IMPORTED_MODULE_3__[/* localizeMessage */ "gb"])('login_mfa.submitting', 'Submitting...')
    }))));
  }

}

_defineProperty(LoginMfa, "propTypes", {
  /*
   * User's login ID
   */
  loginId: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,

  /*
   * User's password
   */
  password: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,

  /*
   * Function to call when submitting user credentials
   */
  submit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
});

/***/ }),

/***/ 3439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 15 modules
var es = __webpack_require__(405);

// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(16);

// EXTERNAL MODULE: ./mattermost-redux/actions/users.js
var users = __webpack_require__(35);

// EXTERNAL MODULE: ./mattermost-redux/selectors/entities/general.js
var general = __webpack_require__(26);

// EXTERNAL MODULE: ./utils/utils.jsx + 1 modules
var utils = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(6);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(1);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(433);

// EXTERNAL MODULE: ./images/logo.png
var logo = __webpack_require__(1592);
var logo_default = /*#__PURE__*/__webpack_require__.n(logo);

// EXTERNAL MODULE: ./components/common/back_button.jsx
var back_button = __webpack_require__(1587);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(33);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.es.js + 1 modules
var index_es = __webpack_require__(52);

// EXTERNAL MODULE: ./actions/admin_actions.jsx
var admin_actions = __webpack_require__(1573);

// EXTERNAL MODULE: ./utils/constants.jsx
var constants = __webpack_require__(0);

// EXTERNAL MODULE: ./utils/i18n.jsx
var i18n = __webpack_require__(53);

// EXTERNAL MODULE: ./components/localized_input/localized_input.jsx
var localized_input = __webpack_require__(1577);

// CONCATENATED MODULE: ./components/claim/components/oauth_to_email.jsx
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.









class oauth_to_email_OAuthToEmail extends react_default.a.PureComponent {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.state = {};
  }

  submit(e) {
    e.preventDefault();
    const state = {};
    const password = react_dom_default.a.findDOMNode(this.refs.password).value;

    if (!password) {
      state.error = utils["gb" /* localizeMessage */]('claim.oauth_to_email.enterPwd', 'Please enter a password.');
      this.setState(state);
      return;
    }

    const {
      valid,
      error
    } = utils["db" /* isValidPassword */](password, this.props.passwordConfig);

    if (!valid && error) {
      this.setState({
        error
      });
      return;
    }

    const confirmPassword = react_dom_default.a.findDOMNode(this.refs.passwordconfirm).value;

    if (!confirmPassword || password !== confirmPassword) {
      state.error = utils["gb" /* localizeMessage */]('claim.oauth_to_email.pwdNotMatch', 'Passwords do not match.');
      this.setState(state);
      return;
    }

    state.error = null;
    this.setState(state);
    Object(admin_actions["u" /* oauthToEmail */])(this.props.currentType, this.props.email, password, data => {
      if (data.follow_link) {
        window.location.href = data.follow_link;
      }
    }, err => {
      this.setState({
        error: err.message
      });
    });
  }

  render() {
    var error = null;

    if (this.state.error) {
      error = react_default.a.createElement("div", {
        className: "form-group has-error"
      }, react_default.a.createElement("label", {
        className: "control-label"
      }, this.state.error));
    }

    var formClass = 'form-group';

    if (error) {
      formClass += ' has-error';
    }

    const uiType = `${this.props.currentType === constants["N" /* default */].SAML_SERVICE ? constants["N" /* default */].SAML_SERVICE.toUpperCase() : utils["qb" /* toTitleCase */](this.props.currentType)} SSO`;
    return react_default.a.createElement("div", null, react_default.a.createElement("h3", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "claim.oauth_to_email.title",
      defaultMessage: "Switch {type} Account to Email",
      values: {
        type: uiType
      }
    })), react_default.a.createElement("form", {
      onSubmit: this.submit
    }, react_default.a.createElement("p", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "claim.oauth_to_email.description",
      defaultMessage: "Upon changing your account type, you will only be able to login with your email and password."
    })), react_default.a.createElement("p", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "claim.oauth_to_email.enterNewPwd",
      defaultMessage: "Enter a new password for your {site} email account",
      values: {
        site: this.props.siteName
      }
    })), react_default.a.createElement("div", {
      className: formClass
    }, react_default.a.createElement(localized_input["a" /* default */], {
      type: "password",
      className: "form-control",
      name: "password",
      ref: "password",
      placeholder: {
        id: Object(i18n["b" /* t */])('claim.oauth_to_email.newPwd'),
        defaultMessage: 'New Password'
      },
      spellCheck: "false"
    })), react_default.a.createElement("div", {
      className: formClass
    }, react_default.a.createElement(localized_input["a" /* default */], {
      type: "password",
      className: "form-control",
      name: "passwordconfirm",
      ref: "passwordconfirm",
      placeholder: {
        id: Object(i18n["b" /* t */])('claim.oauth_to_email.confirm'),
        defaultMessage: 'Confirm Password'
      },
      spellCheck: "false"
    })), error, react_default.a.createElement("button", {
      type: "submit",
      className: "btn btn-primary"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "claim.oauth_to_email.switchTo",
      defaultMessage: "Switch {type} to email and password",
      values: {
        type: uiType
      }
    }))));
  }

}

_defineProperty(oauth_to_email_OAuthToEmail, "propTypes", {
  currentType: prop_types_default.a.string,
  email: prop_types_default.a.string,
  siteName: prop_types_default.a.string,
  passwordConfig: prop_types_default.a.object
});
// EXTERNAL MODULE: ./components/login/login_mfa.jsx
var login_mfa = __webpack_require__(1752);

// CONCATENATED MODULE: ./components/claim/components/email_to_oauth.jsx
function email_to_oauth_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.










class email_to_oauth_EmailToOAuth extends react_default.a.PureComponent {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.preSubmit = this.preSubmit.bind(this);
    this.state = {
      showMfa: false,
      password: ''
    };
  }

  preSubmit(e) {
    e.preventDefault();
    var state = {};
    var password = react_dom_default.a.findDOMNode(this.refs.password).value;

    if (!password) {
      state.error = utils["gb" /* localizeMessage */]('claim.email_to_oauth.pwdError', 'Please enter your password.');
      this.setState(state);
      return;
    }

    this.setState({
      password
    });
    state.error = null;
    this.setState(state);
    this.submit(this.props.email, password, '');
  }

  submit(loginId, password, token) {
    Object(admin_actions["k" /* emailToOAuth */])(loginId, password, token, this.props.newType, data => {
      if (data.follow_link) {
        window.location.href = data.follow_link;
      }
    }, err => {
      if (!this.state.showMfa && err.server_error_id === 'mfa.validate_token.authenticate.app_error') {
        this.setState({
          showMfa: true
        });
      } else {
        this.setState({
          error: err.message,
          showMfa: false
        });
      }
    });
  }

  render() {
    var error = null;

    if (this.state.error) {
      error = react_default.a.createElement("div", {
        className: "form-group has-error"
      }, react_default.a.createElement("label", {
        className: "control-label"
      }, this.state.error));
    }

    var formClass = 'form-group';

    if (error) {
      formClass += ' has-error';
    }

    const type = this.props.newType === constants["N" /* default */].SAML_SERVICE ? constants["N" /* default */].SAML_SERVICE.toUpperCase() : utils["qb" /* toTitleCase */](this.props.newType);
    const uiType = `${type} SSO`;
    let content;

    if (this.state.showMfa) {
      content = react_default.a.createElement(login_mfa["a" /* default */], {
        loginId: this.props.email,
        password: this.state.password,
        submit: this.submit
      });
    } else {
      content = react_default.a.createElement("form", {
        onSubmit: this.preSubmit
      }, react_default.a.createElement("p", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "claim.email_to_oauth.ssoType",
        defaultMessage: "Upon claiming your account, you will only be able to login with {type} SSO",
        values: {
          type
        }
      })), react_default.a.createElement("p", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "claim.email_to_oauth.ssoNote",
        defaultMessage: "You must already have a valid {type} account",
        values: {
          type
        }
      })), react_default.a.createElement("p", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "claim.email_to_oauth.enterPwd",
        defaultMessage: "Enter the password for your {site} account",
        values: {
          site: this.props.siteName
        }
      })), react_default.a.createElement("div", {
        className: formClass
      }, react_default.a.createElement(localized_input["a" /* default */], {
        type: "password",
        className: "form-control",
        name: "password",
        ref: "password",
        placeholder: {
          id: Object(i18n["b" /* t */])('claim.email_to_oauth.pwd'),
          defaultMessage: 'Password'
        },
        spellCheck: "false"
      })), error, react_default.a.createElement("button", {
        type: "submit",
        className: "btn btn-primary"
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "claim.email_to_oauth.switchTo",
        defaultMessage: "Switch account to {uiType}",
        values: {
          uiType
        }
      })));
    }

    return react_default.a.createElement("div", null, react_default.a.createElement("h3", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "claim.email_to_oauth.title",
      defaultMessage: "Switch Email/Password Account to {uiType}",
      values: {
        uiType
      }
    })), content);
  }

}

email_to_oauth_defineProperty(email_to_oauth_EmailToOAuth, "propTypes", {
  newType: prop_types_default.a.string,
  email: prop_types_default.a.string,
  siteName: prop_types_default.a.string
});
// CONCATENATED MODULE: ./components/claim/components/ldap_to_email.jsx
function ldap_to_email_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.







class ldap_to_email_LDAPToEmail extends react_default.a.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.preSubmit = this.preSubmit.bind(this);
    this.state = {
      passwordError: '',
      confirmError: '',
      ldapPasswordError: '',
      serverError: ''
    };
  }

  preSubmit(e) {
    e.preventDefault();
    var state = {
      passwordError: '',
      confirmError: '',
      ldapPasswordError: '',
      serverError: ''
    };
    const ldapPassword = this.refs.ldappassword.value;

    if (!ldapPassword) {
      state.ldapPasswordError = utils["gb" /* localizeMessage */]('claim.ldap_to_email.ldapPasswordError', 'Please enter your AD/LDAP password.');
      this.setState(state);
      return;
    }

    const password = this.refs.password.value;

    if (!password) {
      state.passwordError = utils["gb" /* localizeMessage */]('claim.ldap_to_email.pwdError', 'Please enter your password.');
      this.setState(state);
      return;
    }

    const {
      valid,
      error
    } = utils["db" /* isValidPassword */](password, this.props.passwordConfig);

    if (!valid && error) {
      this.setState({
        passwordError: error
      });
      return;
    }

    const confirmPassword = this.refs.passwordconfirm.value;

    if (!confirmPassword || password !== confirmPassword) {
      state.confirmError = utils["gb" /* localizeMessage */]('claim.ldap_to_email.pwdNotMatch', 'Passwords do not match.');
      this.setState(state);
      return;
    }

    state.password = password;
    state.ldapPassword = ldapPassword;
    this.setState(state);
    this.submit(this.props.email, password, '', ldapPassword);
  }

  submit(loginId, password, token, ldapPassword) {
    this.props.switchLdapToEmail(ldapPassword || this.state.ldapPassword, this.props.email, password, token).then(({
      data,
      error: err
    }) => {
      if (data && data.follow_link) {
        window.location.href = data.follow_link;
      } else if (err) {
        if (err.server_error_id.startsWith('model.user.is_valid.pwd')) {
          this.setState({
            passwordError: err.message,
            showMfa: false
          });
        } else if (err.server_error_id === 'ent.ldap.do_login.invalid_password.app_error') {
          this.setState({
            ldapPasswordError: err.message,
            showMfa: false
          });
        } else if (!this.state.showMfa && err.server_error_id === 'mfa.validate_token.authenticate.app_error') {
          this.setState({
            showMfa: true
          });
        } else {
          this.setState({
            serverError: err.message,
            showMfa: false
          });
        }
      }
    });
  }

  render() {
    let serverError = null;
    let formClass = 'form-group';

    if (this.state.serverError) {
      serverError = react_default.a.createElement("div", {
        className: "form-group has-error"
      }, react_default.a.createElement("label", {
        className: "control-label"
      }, this.state.serverError));
      formClass += ' has-error';
    }

    let passwordError = null;
    let passwordClass = 'form-group';

    if (this.state.passwordError) {
      passwordError = react_default.a.createElement("div", {
        className: "form-group has-error"
      }, react_default.a.createElement("label", {
        className: "control-label"
      }, this.state.passwordError));
      passwordClass += ' has-error';
    }

    let ldapPasswordError = null;
    let ldapPasswordClass = 'form-group';

    if (this.state.ldapPasswordError) {
      ldapPasswordError = react_default.a.createElement("div", {
        className: "form-group has-error"
      }, react_default.a.createElement("label", {
        className: "control-label"
      }, this.state.ldapPasswordError));
      ldapPasswordClass += ' has-error';
    }

    let confirmError = null;
    let confimClass = 'form-group';

    if (this.state.confirmError) {
      confirmError = react_default.a.createElement("div", {
        className: "form-group has-error"
      }, react_default.a.createElement("label", {
        className: "control-label"
      }, this.state.confirmError));
      confimClass += ' has-error';
    }

    const passwordPlaceholder = utils["gb" /* localizeMessage */]('claim.ldap_to_email.ldapPwd', 'AD/LDAP Password');
    let content;

    if (this.state.showMfa) {
      content = react_default.a.createElement(login_mfa["a" /* default */], {
        loginId: this.props.email,
        password: this.state.password,
        submit: this.submit
      });
    } else {
      content = react_default.a.createElement("form", {
        onSubmit: this.preSubmit,
        className: formClass
      }, react_default.a.createElement("p", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "claim.ldap_to_email.email",
        defaultMessage: "After switching your authentication method, you will use {email} to login. Your AD/LDAP credentials will no longer allow access to Mattermost.",
        values: {
          email: this.props.email
        }
      })), react_default.a.createElement("p", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "claim.ldap_to_email.enterLdapPwd",
        defaultMessage: "{ldapPassword}:",
        values: {
          ldapPassword: passwordPlaceholder
        }
      })), react_default.a.createElement("div", {
        className: ldapPasswordClass
      }, react_default.a.createElement("input", {
        type: "password",
        className: "form-control",
        name: "ldapPassword",
        ref: "ldappassword",
        placeholder: passwordPlaceholder,
        spellCheck: "false"
      })), ldapPasswordError, react_default.a.createElement("p", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "claim.ldap_to_email.enterPwd",
        defaultMessage: "New email login password:"
      })), react_default.a.createElement("div", {
        className: passwordClass
      }, react_default.a.createElement(localized_input["a" /* default */], {
        type: "password",
        className: "form-control",
        name: "password",
        ref: "password",
        placeholder: {
          id: Object(i18n["b" /* t */])('claim.ldap_to_email.pwd'),
          defaultMessage: 'Password'
        },
        spellCheck: "false"
      })), passwordError, react_default.a.createElement("div", {
        className: confimClass
      }, react_default.a.createElement(localized_input["a" /* default */], {
        type: "password",
        className: "form-control",
        name: "passwordconfirm",
        ref: "passwordconfirm",
        placeholder: {
          id: Object(i18n["b" /* t */])('claim.ldap_to_email.confirm'),
          defaultMessage: 'Confirm Password'
        },
        spellCheck: "false"
      })), confirmError, react_default.a.createElement("button", {
        type: "submit",
        className: "btn btn-primary"
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "claim.ldap_to_email.switchTo",
        defaultMessage: "Switch account to email/password"
      })), serverError);
    }

    return react_default.a.createElement("div", null, react_default.a.createElement("h3", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "claim.ldap_to_email.title",
      defaultMessage: "Switch AD/LDAP Account to Email/Password"
    })), content);
  }

}

ldap_to_email_defineProperty(ldap_to_email_LDAPToEmail, "propTypes", {
  email: prop_types_default.a.string,
  passwordConfig: prop_types_default.a.object,
  switchLdapToEmail: prop_types_default.a.func.isRequired
});
// CONCATENATED MODULE: ./components/claim/components/email_to_ldap.jsx
function email_to_ldap_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.








class email_to_ldap_EmailToLDAP extends react_default.a.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.preSubmit = this.preSubmit.bind(this);
    this.state = {
      passwordError: '',
      ldapError: '',
      ldapPasswordError: '',
      serverError: '',
      showMfa: false
    };
  }

  preSubmit(e) {
    e.preventDefault();
    var state = {
      passwordError: '',
      ldapError: '',
      ldapPasswordError: '',
      serverError: ''
    };
    const password = this.refs.emailpassword.value;

    if (!password) {
      state.passwordError = utils["gb" /* localizeMessage */]('claim.email_to_ldap.pwdError', 'Please enter your password.');
      this.setState(state);
      return;
    }

    const ldapId = this.refs.ldapid.value.trim();

    if (!ldapId) {
      state.ldapError = utils["gb" /* localizeMessage */]('claim.email_to_ldap.ldapIdError', 'Please enter your AD/LDAP ID.');
      this.setState(state);
      return;
    }

    const ldapPassword = this.refs.ldappassword.value;

    if (!ldapPassword) {
      state.ldapPasswordError = utils["gb" /* localizeMessage */]('claim.email_to_ldap.ldapPasswordError', 'Please enter your AD/LDAP password.');
      this.setState(state);
      return;
    }

    state.password = password;
    state.ldapId = ldapId;
    state.ldapPassword = ldapPassword;
    this.setState(state);
    this.submit(this.props.email, password, '', ldapId, ldapPassword);
  }

  submit(loginId, password, token, ldapId, ldapPassword) {
    Object(admin_actions["j" /* emailToLdap */])(loginId, password, token, ldapId || this.state.ldapId, ldapPassword || this.state.ldapPassword, data => {
      if (data.follow_link) {
        window.location.href = data.follow_link;
      }
    }, err => {
      if (!this.state.showMfa && err.server_error_id === 'mfa.validate_token.authenticate.app_error') {
        this.setState({
          showMfa: true
        });
      } else {
        switch (err.id) {
          case 'ent.ldap.do_login.user_not_registered.app_error':
          case 'ent.ldap.do_login.user_filtered.app_error':
          case 'ent.ldap.do_login.matched_to_many_users.app_error':
            this.setState({
              ldapError: err.message,
              showMfa: false
            });
            break;

          case 'ent.ldap.do_login.invalid_password.app_error':
            this.setState({
              ldapPasswordError: err.message,
              showMfa: false
            });
            break;

          case 'api.user.check_user_password.invalid.app_error':
            this.setState({
              passwordError: err.message,
              showMfa: false
            });
            break;

          default:
            this.setState({
              serverError: err.message,
              showMfa: false
            });
        }
      }
    });
  }

  render() {
    let serverError = null;
    let formClass = 'form-group';

    if (this.state.serverError) {
      serverError = react_default.a.createElement("div", {
        className: "form-group has-error"
      }, react_default.a.createElement("label", {
        className: "control-label"
      }, this.state.serverError));
      formClass += ' has-error';
    }

    let passwordError = null;
    let passwordClass = 'form-group';

    if (this.state.passwordError) {
      passwordError = react_default.a.createElement("div", {
        className: "form-group has-error"
      }, react_default.a.createElement("label", {
        className: "control-label"
      }, this.state.passwordError));
      passwordClass += ' has-error';
    }

    let ldapError = null;
    let ldapClass = 'form-group';

    if (this.state.ldapError) {
      ldapError = react_default.a.createElement("div", {
        className: "form-group has-error"
      }, react_default.a.createElement("label", {
        className: "control-label"
      }, this.state.ldapError));
      ldapClass += ' has-error';
    }

    let ldapPasswordError = null;
    let ldapPasswordClass = 'form-group';

    if (this.state.ldapPasswordError) {
      ldapPasswordError = react_default.a.createElement("div", {
        className: "form-group has-error"
      }, react_default.a.createElement("label", {
        className: "control-label"
      }, this.state.ldapPasswordError));
      ldapPasswordClass += ' has-error';
    }

    let loginPlaceholder;

    if (this.props.ldapLoginFieldName) {
      loginPlaceholder = this.props.ldapLoginFieldName;
    } else {
      loginPlaceholder = utils["gb" /* localizeMessage */]('claim.email_to_ldap.ldapId', 'AD/LDAP ID');
    }

    let content;

    if (this.state.showMfa) {
      content = react_default.a.createElement(login_mfa["a" /* default */], {
        loginId: this.props.email,
        password: this.state.password,
        submit: this.submit
      });
    } else {
      content = react_default.a.createElement("form", {
        onSubmit: this.preSubmit,
        className: formClass
      }, react_default.a.createElement("p", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "claim.email_to_ldap.ssoType",
        defaultMessage: "Upon claiming your account, you will only be able to login with AD/LDAP"
      })), react_default.a.createElement("p", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "claim.email_to_ldap.ssoNote",
        defaultMessage: "You must already have a valid AD/LDAP account"
      })), react_default.a.createElement("p", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "claim.email_to_ldap.enterPwd",
        defaultMessage: "Enter the password for your {site} email account",
        values: {
          site: this.props.siteName
        }
      })), react_default.a.createElement("input", {
        type: "text",
        style: style.usernameInput,
        name: "fakeusernameremembered"
      }), react_default.a.createElement("div", {
        className: passwordClass
      }, react_default.a.createElement(localized_input["a" /* default */], {
        type: "password",
        className: "form-control",
        name: "emailPassword",
        ref: "emailpassword",
        autoComplete: "off",
        placeholder: {
          id: Object(i18n["b" /* t */])('claim.email_to_ldap.pwd'),
          defaultMessage: 'Password'
        },
        spellCheck: "false"
      })), passwordError, react_default.a.createElement("p", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "claim.email_to_ldap.enterLdapPwd",
        defaultMessage: "Enter the ID and password for your AD/LDAP account"
      })), react_default.a.createElement("div", {
        className: ldapClass
      }, react_default.a.createElement("input", {
        type: "text",
        className: "form-control",
        name: "ldapId",
        ref: "ldapid",
        autoComplete: "off",
        placeholder: loginPlaceholder,
        spellCheck: "false"
      })), ldapError, react_default.a.createElement("div", {
        className: ldapPasswordClass
      }, react_default.a.createElement(localized_input["a" /* default */], {
        type: "password",
        className: "form-control",
        name: "ldapPassword",
        ref: "ldappassword",
        autoComplete: "off",
        placeholder: {
          id: Object(i18n["b" /* t */])('claim.email_to_ldap.ldapPwd'),
          defaultMessage: 'AD/LDAP Password'
        },
        spellCheck: "false"
      })), ldapPasswordError, react_default.a.createElement("button", {
        type: "submit",
        className: "btn btn-primary"
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "claim.email_to_ldap.switchTo",
        defaultMessage: "Switch account to AD/LDAP"
      })), serverError);
    }

    return react_default.a.createElement("div", null, react_default.a.createElement("h3", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "claim.email_to_ldap.title",
      defaultMessage: "Switch Email/Password Account to AD/LDAP"
    })), content);
  }

}

email_to_ldap_defineProperty(email_to_ldap_EmailToLDAP, "propTypes", {
  email: prop_types_default.a.string,
  siteName: prop_types_default.a.string,
  ldapLoginFieldName: prop_types_default.a.string
});

const style = {
  usernameInput: {
    display: 'none'
  }
};
// CONCATENATED MODULE: ./components/claim/claim_controller.jsx
function claim_controller_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.









class claim_controller_ClaimController extends react_default.a.PureComponent {
  render() {
    const email = new URLSearchParams(this.props.location.search).get('email');
    const newType = new URLSearchParams(this.props.location.search).get('new_type');
    const currentType = new URLSearchParams(this.props.location.search).get('old_type');
    return react_default.a.createElement("div", null, react_default.a.createElement(back_button["a" /* default */], null), react_default.a.createElement("div", {
      className: "col-sm-12"
    }, react_default.a.createElement("div", {
      className: "signup-team__container"
    }, react_default.a.createElement("img", {
      alt: 'signup logo',
      className: "signup-team-logo",
      src: logo_default.a
    }), react_default.a.createElement("div", {
      id: "claim"
    }, react_default.a.createElement(react_router["d" /* Switch */], null, react_default.a.createElement(react_router["b" /* Route */], {
      path: `${this.props.match.url}/oauth_to_email`,
      render: () => react_default.a.createElement(oauth_to_email_OAuthToEmail, {
        currentType: currentType,
        email: email,
        siteName: this.props.siteName,
        passwordConfig: this.props.passwordConfig
      })
    }), react_default.a.createElement(react_router["b" /* Route */], {
      path: `${this.props.match.url}/email_to_oauth`,
      render: () => react_default.a.createElement(email_to_oauth_EmailToOAuth, {
        newType: newType,
        email: email,
        siteName: this.props.siteName
      })
    }), react_default.a.createElement(react_router["b" /* Route */], {
      path: `${this.props.match.url}/ldap_to_email`,
      render: () => react_default.a.createElement(ldap_to_email_LDAPToEmail, {
        email: email,
        passwordConfig: this.props.passwordConfig,
        switchLdapToEmail: this.props.actions.switchLdapToEmail
      })
    }), react_default.a.createElement(react_router["b" /* Route */], {
      path: `${this.props.match.url}/email_to_ldap`,
      render: () => react_default.a.createElement(email_to_ldap_EmailToLDAP, {
        email: email,
        siteName: this.props.siteName,
        ldapLoginFieldName: this.props.ldapLoginFieldName
      })
    }))))));
  }

}

claim_controller_defineProperty(claim_controller_ClaimController, "propTypes", {
  location: prop_types_default.a.object.isRequired,
  siteName: prop_types_default.a.string,
  ldapLoginFieldName: prop_types_default.a.string,
  passwordConfig: prop_types_default.a.object,

  /*
   * Object from react-router
   */
  match: prop_types_default.a.shape({
    url: prop_types_default.a.string.isRequired
  }).isRequired,
  actions: prop_types_default.a.shape({
    switchLdapToEmail: prop_types_default.a.func.isRequired
  }).isRequired
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4!./components/claim/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.







function mapStateToProps(state) {
  const config = Object(general["getConfig"])(state);
  const siteName = config.SiteName;
  const ldapLoginFieldName = config.LdapLoginFieldName;
  return {
    siteName,
    ldapLoginFieldName,
    passwordConfig: Object(utils["C" /* getPasswordConfig */])(config)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux["bindActionCreators"])({
      switchLdapToEmail: users["switchLdapToEmail"]
    }, dispatch)
  };
}

/* harmony default export */ var claim = __webpack_exports__["default"] = (Object(es["connect"])(mapStateToProps, mapDispatchToProps)(claim_controller_ClaimController));

/***/ })

}]);
//# sourceMappingURL=10.8918b4e5a1c8e632272c.js.map
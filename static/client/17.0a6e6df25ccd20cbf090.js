(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

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

/***/ 3470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 15 modules
var es = __webpack_require__(405);

// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(16);

// EXTERNAL MODULE: ./actions/admin_actions.jsx
var admin_actions = __webpack_require__(1573);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(6);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(1);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.es.js + 1 modules
var index_es = __webpack_require__(52);

// EXTERNAL MODULE: ./images/icon50x50.png
var icon50x50 = __webpack_require__(423);
var icon50x50_default = /*#__PURE__*/__webpack_require__.n(icon50x50);

// EXTERNAL MODULE: ./components/form_error.jsx
var form_error = __webpack_require__(1584);

// EXTERNAL MODULE: ./utils/browser_history.jsx
var browser_history = __webpack_require__(114);

// EXTERNAL MODULE: ./components/formatted_markdown_message.jsx
var formatted_markdown_message = __webpack_require__(1564);

// CONCATENATED MODULE: ./components/authorize/authorize.jsx
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.







class authorize_Authorize extends react_default.a.Component {
  static get propTypes() {
    return {
      location: prop_types_default.a.object.isRequired,
      actions: prop_types_default.a.shape({
        getOAuthAppInfo: prop_types_default.a.func.isRequired,
        allowOAuth2: prop_types_default.a.func.isRequired
      }).isRequired
    };
  }

  constructor(props) {
    super(props);
    this.handleAllow = this.handleAllow.bind(this);
    this.handleDeny = this.handleDeny.bind(this);
    this.state = {};
  }

  UNSAFE_componentWillMount() {
    // eslint-disable-line camelcase
    const clientId = new URLSearchParams(this.props.location.search).get('client_id');

    if (!/^[a-z0-9]+$/.test(clientId)) {
      return;
    }

    this.props.actions.getOAuthAppInfo(clientId).then(({
      data
    }) => {
      if (data) {
        this.setState({
          app: data
        });
      }
    });
  }

  componentDidMount() {
    // if we get to this point remove the antiClickjack blocker
    const blocker = document.getElementById('antiClickjack');

    if (blocker) {
      blocker.parentNode.removeChild(blocker);
    }
  }

  handleAllow() {
    const searchParams = new URLSearchParams(this.props.location.search);
    const params = {
      responseType: searchParams.get('response_type'),
      clientId: searchParams.get('client_id'),
      redirectUri: searchParams.get('redirect_uri'),
      state: searchParams.get('state'),
      scope: searchParams.get('store')
    };
    this.props.actions.allowOAuth2(params).then(({
      data,
      error
    }) => {
      if (data && data.redirect) {
        window.location.href = data.redirect;
      } else if (error) {
        this.setState({
          error: error.message
        });
      }
    });
  }

  handleDeny() {
    const redirectUri = new URLSearchParams(this.props.location.search).get('redirect_uri');

    if (redirectUri.startsWith('https://') || redirectUri.startsWith('http://')) {
      window.location.href = redirectUri + '?error=access_denied';
      return;
    }

    browser_history["a" /* browserHistory */].replace('/error');
  }

  render() {
    const app = this.state.app;

    if (!app) {
      return null;
    }

    let icon;

    if (app.icon_url) {
      icon = app.icon_url;
    } else {
      icon = icon50x50_default.a;
    }

    let error;

    if (this.state.error) {
      error = react_default.a.createElement("div", {
        className: "prompt__error form-group"
      }, react_default.a.createElement(form_error["a" /* default */], {
        error: this.state.error
      }));
    }

    return react_default.a.createElement("div", {
      className: "container-fluid"
    }, react_default.a.createElement("div", {
      className: "prompt"
    }, react_default.a.createElement("div", {
      className: "prompt__heading"
    }, react_default.a.createElement("div", {
      className: "prompt__app-icon"
    }, react_default.a.createElement("img", {
      alt: 'prompt icon',
      src: icon,
      width: "50",
      height: "50"
    })), react_default.a.createElement("div", {
      className: "text"
    }, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
      id: "authorize.title",
      defaultMessage: "**{appName}** would like to connect to your **Mattermost** user account",
      values: {
        appName: app.name
      }
    }))), react_default.a.createElement("p", null, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
      id: "authorize.app",
      defaultMessage: "The app **{appName}** would like the ability to access and modify your basic information.",
      values: {
        appName: app.name
      }
    })), react_default.a.createElement("h2", {
      className: "prompt__allow"
    }, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
      id: "authorize.access",
      defaultMessage: "Allow **{appName}** access?",
      values: {
        appName: app.name
      }
    })), react_default.a.createElement("div", {
      className: "prompt__buttons"
    }, react_default.a.createElement("button", {
      type: "submit",
      className: "btn btn-link authorize-btn",
      onClick: this.handleDeny
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "authorize.deny",
      defaultMessage: "Deny"
    })), react_default.a.createElement("button", {
      type: "submit",
      className: "btn btn-primary authorize-btn",
      onClick: this.handleAllow
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "authorize.allow",
      defaultMessage: "Allow"
    }))), error));
  }

}
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4!./components/authorize/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux["bindActionCreators"])({
      getOAuthAppInfo: admin_actions["n" /* getOAuthAppInfo */],
      allowOAuth2: admin_actions["d" /* allowOAuth2 */]
    }, dispatch)
  };
}

/* harmony default export */ var authorize = __webpack_exports__["default"] = (Object(es["connect"])(null, mapDispatchToProps)(authorize_Authorize));

/***/ })

}]);
//# sourceMappingURL=17.0a6e6df25ccd20cbf090.js.map
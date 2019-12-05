(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

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

/***/ 1682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteNameAndDescription; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.



class SiteNameAndDescription extends react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent {
  render() {
    const {
      customDescriptionText,
      siteName
    } = this.props;
    let description = null;

    if (customDescriptionText) {
      description = customDescriptionText;
    } else {
      description = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__[/* FormattedMessage */ "c"], {
        id: "web.root.signup_info",
        defaultMessage: "All team communication in one place, searchable and accessible anywhere"
      });
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      id: "site_name"
    }, "Aboutone"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
      id: "site_description",
      className: "color--light"
    }, description));
  }

}

_defineProperty(SiteNameAndDescription, "propTypes", {
  customDescriptionText: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  siteName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
});

_defineProperty(SiteNameAndDescription, "defaultProps", {
  siteName: 'Aboutone'
});

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

/***/ 1957:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return loginById; });
/* harmony import */ var mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_0__);
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

function login(loginId, password, mfaToken) {
  return dispatch => {
    return ignoreMfaRequiredError(dispatch(mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_0__["login"](loginId, password, mfaToken)));
  };
}
function loginById(userId, password, mfaToken) {
  return dispatch => {
    return ignoreMfaRequiredError(dispatch(mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_0__["loginById"](userId, password, mfaToken)));
  };
}

async function ignoreMfaRequiredError(promise) {
  let result = await promise;

  if (result.error && result.error.server_error_id === 'api.context.mfa_required.app_error') {
    result = {
      data: true
    };
  }

  return result;
}

/***/ }),

/***/ 3461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 15 modules
var es = __webpack_require__(405);

// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(16);

// EXTERNAL MODULE: ./mattermost-redux/selectors/entities/general.js
var general = __webpack_require__(26);

// EXTERNAL MODULE: ./mattermost-redux/selectors/entities/teams.js
var teams = __webpack_require__(32);

// EXTERNAL MODULE: ./mattermost-redux/selectors/entities/users.js
var users = __webpack_require__(10);

// EXTERNAL MODULE: ./mattermost-redux/constants/index.js
var constants = __webpack_require__(17);

// EXTERNAL MODULE: ./actions/team_actions.jsx
var team_actions = __webpack_require__(1639);

// EXTERNAL MODULE: ./actions/views/login.js
var login = __webpack_require__(1957);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(6);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(1);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.es.js + 1 modules
var index_es = __webpack_require__(52);

// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js + 1 modules
var react_router_dom = __webpack_require__(1553);

// EXTERNAL MODULE: ./mattermost-redux/client/index.js
var client = __webpack_require__(27);

// EXTERNAL MODULE: ./actions/global_actions.jsx
var global_actions = __webpack_require__(1567);

// EXTERNAL MODULE: ./stores/local_storage_store.jsx
var local_storage_store = __webpack_require__(218);

// EXTERNAL MODULE: ./utils/browser_history.jsx
var browser_history = __webpack_require__(114);

// EXTERNAL MODULE: ./utils/constants.jsx
var utils_constants = __webpack_require__(0);

// EXTERNAL MODULE: ./utils/message_html_to_component.jsx + 3 modules
var message_html_to_component = __webpack_require__(1684);

// EXTERNAL MODULE: ./utils/text_formatting.jsx
var text_formatting = __webpack_require__(81);

// EXTERNAL MODULE: ./utils/utils.jsx + 1 modules
var utils = __webpack_require__(22);

// EXTERNAL MODULE: ./utils/notifications.jsx
var notifications = __webpack_require__(831);

// EXTERNAL MODULE: ./utils/i18n.jsx
var i18n = __webpack_require__(53);

// EXTERNAL MODULE: ./images/logo.png
var logo = __webpack_require__(1592);

// EXTERNAL MODULE: ./components/common/site_name_and_description.jsx
var site_name_and_description = __webpack_require__(1682);

// EXTERNAL MODULE: ./components/announcement_bar/index.js + 9 modules
var announcement_bar = __webpack_require__(1664);

// EXTERNAL MODULE: ./components/form_error.jsx
var form_error = __webpack_require__(1584);

// EXTERNAL MODULE: ./components/formatted_markdown_message.jsx
var formatted_markdown_message = __webpack_require__(1564);

// EXTERNAL MODULE: ./components/common/back_button.jsx
var back_button = __webpack_require__(1587);

// EXTERNAL MODULE: ./components/loading_screen.jsx
var loading_screen = __webpack_require__(1569);

// EXTERNAL MODULE: ./components/widgets/loading/loading_wrapper.jsx
var loading_wrapper = __webpack_require__(1608);

// EXTERNAL MODULE: ./components/icon/success_icon.jsx
var success_icon = __webpack_require__(1695);

// EXTERNAL MODULE: ./components/icon/warning_icon.jsx
var warning_icon = __webpack_require__(1621);

// EXTERNAL MODULE: ./components/localized_input/localized_input.jsx
var localized_input = __webpack_require__(1577);

// EXTERNAL MODULE: ./utils/auth.js
var auth = __webpack_require__(428);

// EXTERNAL MODULE: ./components/login/login_mfa.jsx
var login_mfa = __webpack_require__(1752);

// CONCATENATED MODULE: ./components/login/login_controller/login_controller.jsx
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.




























class login_controller_LoginController extends react_default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "configureTitle", () => {
      if (this.state.sessionExpired) {
        document.title = this.props.intl.formatMessage({
          id: 'login.session_expired.title',
          defaultMessage: '* {siteName} - Session Expired'
        }, {
          siteName: this.props.siteName
        });
      } else {
        document.title = this.props.siteName;
      }
    });

    _defineProperty(this, "showSessionExpiredNotificationIfNeeded", () => {
      if (this.state.sessionExpired && !this.closeSessionExpiredNotification) {
        Object(notifications["a" /* showNotification */])({
          title: this.props.siteName,
          body: utils["gb" /* localizeMessage */]('login.session_expired.notification', 'Session Expired: Please sign in to continue receiving notifications.'),
          requireInteraction: true,
          silent: false,
          onClick: () => {
            window.focus();

            if (this.closeSessionExpiredNotification()) {
              this.closeSessionExpiredNotification();
              this.closeSessionExpiredNotification = null;
            }
          }
        }).then(closeNotification => {
          this.closeSessionExpiredNotification = closeNotification;
        }).catch(() => {// Ignore the failure to display the notification.
        });
      } else if (!this.state.sessionExpired && this.closeSessionExpiredNotification) {
        this.closeSessionExpiredNotification();
        this.closeSessionExpiredNotification = null;
      }
    });

    _defineProperty(this, "preSubmit", e => {
      e.preventDefault(); // Discard any session expiry notice once the user interacts with the login page.

      this.onDismissSessionExpired();
      const {
        location
      } = this.props;
      const newQuery = location.search.replace(/(extra=password_change)&?/i, '');

      if (newQuery !== location.search) {
        browser_history["a" /* browserHistory */].replace(`${location.pathname}${newQuery}${location.hash}`);
      } // password managers don't always call onInput handlers for form fields so it's possible
      // for the state to get out of sync with what the user sees in the browser


      let loginId = this.state.loginId;

      if (this.refs.loginId) {
        loginId = this.refs.loginId.value;

        if (loginId !== this.state.loginId) {
          this.setState({
            loginId
          });
        }
      }

      let password = this.state.password;

      if (this.refs.password) {
        password = this.refs.password.value;

        if (password !== this.state.password) {
          this.setState({
            password
          });
        }
      } // don't trim the password since we support spaces in passwords


      loginId = loginId.trim().toLowerCase();

      if (!loginId) {
        Object(i18n["b" /* t */])('login.noEmail');
        Object(i18n["b" /* t */])('login.noEmailLdapUsername');
        Object(i18n["b" /* t */])('login.noEmailUsername');
        Object(i18n["b" /* t */])('login.noEmailUsernameLdapUsername');
        Object(i18n["b" /* t */])('login.noLdapUsername');
        Object(i18n["b" /* t */])('login.noUsername');
        Object(i18n["b" /* t */])('login.noUsernameLdapUsername'); // it's slightly weird to be constructing the message ID, but it's a bit nicer than triply nested if statements

        let msgId = 'login.no';

        if (this.state.emailSigninEnabled) {
          msgId += 'Email';
        }

        if (this.state.usernameSigninEnabled) {
          msgId += 'Username';
        }

        if (this.state.ldapEnabled) {
          msgId += 'LdapUsername';
        }

        this.setState({
          serverError: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: msgId,
            values: {
              ldapUsername: this.props.ldapLoginFieldName || utils["gb" /* localizeMessage */]('login.ldapUsernameLower', 'AD/LDAP username')
            }
          })
        });
        return;
      }

      if (!password) {
        this.setState({
          serverError: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "login.noPassword",
            defaultMessage: "Please enter your password"
          })
        });
        return;
      }

      this.submit(loginId, password, '');
    });

    _defineProperty(this, "submit", (loginId, password, token) => {
      this.setState({
        serverError: null,
        loading: true
      });
      this.props.actions.login(loginId, password, token).then(async ({
        error
      }) => {
        if (error) {
          if (error.server_error_id === 'api.user.login.not_verified.app_error') {
            browser_history["a" /* browserHistory */].push('/should_verify_email?&email=' + encodeURIComponent(loginId));
          } else if (error.server_error_id === 'store.sql_user.get_for_login.app_error' || error.server_error_id === 'ent.ldap.do_login.user_not_registered.app_error') {
            this.setState({
              showMfa: false,
              loading: false,
              serverError: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
                id: "login.userNotFound",
                defaultMessage: "We couldn't find an account matching your login credentials."
              })
            });
          } else if (error.server_error_id === 'api.user.check_user_password.invalid.app_error' || error.server_error_id === 'ent.ldap.do_login.invalid_password.app_error') {
            this.setState({
              showMfa: false,
              loading: false,
              serverError: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
                id: "login.invalidPassword",
                defaultMessage: "Your password is incorrect."
              })
            });
          } else if (!this.state.showMfa && error.server_error_id === 'mfa.validate_token.authenticate.app_error') {
            this.setState({
              showMfa: true
            });
          } else {
            this.setState({
              showMfa: false,
              serverError: error.message,
              loading: false
            });
          }

          return;
        } // check for query params brought over from signup_user_complete


        const params = new URLSearchParams(this.props.location.search);
        const inviteToken = params.get('t') || '';
        const inviteId = params.get('id') || '';

        if (inviteId || inviteToken) {
          const {
            data: team
          } = await this.props.actions.addUserToTeamFromInvite(inviteToken, inviteId);

          if (team) {
            this.finishSignin(team);
          } else {
            // there's not really a good way to deal with this, so just let the user log in like normal
            this.finishSignin();
          }
        } else {
          this.finishSignin();
        }
      });
    });

    _defineProperty(this, "finishSignin", team => {
      const experimentalPrimaryTeam = this.props.experimentalPrimaryTeam;
      const query = new URLSearchParams(this.props.location.search);
      const redirectTo = query.get('redirect_to');
      utils["nb" /* setCSRFFromCookie */](); // Record a successful login to local storage. If an unintentional logout occurs, e.g.
      // via session expiration, this bit won't get reset and we can notify the user as such.

      local_storage_store["a" /* default */].setWasLoggedIn(true);

      if (redirectTo && redirectTo.match(/^\/([^/]|$)/)) {
        browser_history["a" /* browserHistory */].push(redirectTo);
      } else if (team) {
        browser_history["a" /* browserHistory */].push(`/${team.name}`);
      } else if (experimentalPrimaryTeam) {
        browser_history["a" /* browserHistory */].push(`/${experimentalPrimaryTeam}`);
      } else {
        global_actions["f" /* redirectUserToDefaultTeam */]();
      }
    });

    _defineProperty(this, "handleLoginIdChange", e => {
      this.setState({
        loginId: e.target.value
      });
    });

    _defineProperty(this, "handlePasswordChange", e => {
      this.setState({
        password: e.target.value
      });
    });

    _defineProperty(this, "handleBrandImageError", () => {
      this.setState({
        brandImageError: true
      });
    });

    _defineProperty(this, "createCustomLogin", () => {
      if (this.props.enableCustomBrand) {
        const text = this.props.customBrandText || '';
        const formattedText = text_formatting["e" /* formatText */](text);
        const brandImageUrl = client["Client4"].getBrandImageUrl(0);
        const brandImageStyle = this.state.brandImageError ? {
          display: 'none'
        } : {};
        return react_default.a.createElement("div", null, react_default.a.createElement("img", {
          alt: 'brand image',
          src: brandImageUrl,
          onError: this.handleBrandImageError,
          style: brandImageStyle
        }), react_default.a.createElement("div", null, Object(message_html_to_component["a" /* default */])(formattedText, false, {
          mentions: false,
          imagesMetadata: null
        })));
      }

      return null;
    });

    _defineProperty(this, "createLoginPlaceholder", () => {
      const ldapEnabled = this.state.ldapEnabled;
      const usernameSigninEnabled = this.state.usernameSigninEnabled;
      const emailSigninEnabled = this.state.emailSigninEnabled;
      const loginPlaceholders = [];

      if (emailSigninEnabled) {
        loginPlaceholders.push(utils["gb" /* localizeMessage */]('login.email', 'Email'));
      }

      if (usernameSigninEnabled) {
        loginPlaceholders.push(utils["gb" /* localizeMessage */]('login.username', 'Username'));
      }

      if (ldapEnabled) {
        if (this.props.ldapLoginFieldName) {
          loginPlaceholders.push(this.props.ldapLoginFieldName);
        } else {
          loginPlaceholders.push(utils["gb" /* localizeMessage */]('login.ldapUsername', 'AD/LDAP Username'));
        }
      }

      if (loginPlaceholders.length >= 2) {
        return loginPlaceholders.slice(0, loginPlaceholders.length - 1).join(', ') + utils["gb" /* localizeMessage */]('login.placeholderOr', ' or ') + loginPlaceholders[loginPlaceholders.length - 1];
      } else if (loginPlaceholders.length === 1) {
        return loginPlaceholders[0];
      }

      return '';
    });

    _defineProperty(this, "checkSignUpEnabled", () => {
      return this.props.enableSignUpWithEmail || this.props.enableSignUpWithGitLab || this.props.enableSignUpWithOffice365 || this.props.enableSignUpWithGoogle || this.props.enableLdap || this.props.enableSaml;
    });

    _defineProperty(this, "onDismissSessionExpired", () => {
      local_storage_store["a" /* default */].setWasLoggedIn(false);
      this.setState({
        sessionExpired: false
      });
    });

    _defineProperty(this, "createExtraText", () => {
      const extraParam = new URLSearchParams(this.props.location.search).get('extra');

      if (this.state.sessionExpired) {
        return react_default.a.createElement("div", {
          className: "alert alert-warning"
        }, react_default.a.createElement(warning_icon["a" /* default */], null), ' ', react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "login.session_expired",
          defaultMessage: "Your session has expired. Please log in again."
        }), ' ', react_default.a.createElement(react_router_dom["a" /* Link */], {
          className: "btn-close",
          to: "/login",
          onClick: this.onDismissSessionExpired
        }, react_default.a.createElement("span", null, '×')));
      }

      if (extraParam === utils_constants["N" /* default */].GET_TERMS_ERROR) {
        return react_default.a.createElement("div", {
          className: "alert has-error no-padding"
        }, react_default.a.createElement("label", {
          className: "control-label"
        }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "login.get_terms_error",
          defaultMessage: "Unable to load terms of service. If this issue persists, contact your System Administrator."
        })));
      } else if (extraParam === utils_constants["N" /* default */].TERMS_REJECTED) {
        return react_default.a.createElement("div", {
          className: "alert alert-warning"
        }, react_default.a.createElement(warning_icon["a" /* default */], null), react_default.a.createElement(formatted_markdown_message["b" /* default */], {
          id: "login.terms_rejected",
          defaultMessage: "You must agree to the terms of service before accessing {siteName}. Please contact your System Administrator for more details.",
          values: {
            siteName: this.props.siteName
          }
        }));
      } else if (extraParam === utils_constants["N" /* default */].SIGNIN_CHANGE) {
        return react_default.a.createElement("div", {
          className: "alert alert-success"
        }, react_default.a.createElement(success_icon["a" /* default */], null), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "login.changed",
          defaultMessage: " Sign-in method changed successfully"
        }));
      } else if (extraParam === utils_constants["N" /* default */].SIGNIN_VERIFIED) {
        return react_default.a.createElement("div", {
          className: "alert alert-success"
        }, react_default.a.createElement(success_icon["a" /* default */], null), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "login.verified",
          defaultMessage: " Email Verified"
        }));
      } else if (extraParam === utils_constants["N" /* default */].PASSWORD_CHANGE) {
        return react_default.a.createElement("div", {
          id: "passwordUpdatedSuccess",
          className: "alert alert-success"
        }, react_default.a.createElement(success_icon["a" /* default */], null), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "login.passwordChanged",
          defaultMessage: " Password updated successfully"
        }));
      } else if (extraParam === utils_constants["N" /* default */].CREATE_LDAP) {
        return react_default.a.createElement("div", {
          className: "alert alert-grey"
        }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "login.ldapCreate",
          defaultMessage: " Enter your AD/LDAP username and password to create an account."
        }));
      }

      return null;
    });

    _defineProperty(this, "createLoginOptions", () => {
      const loginControls = [];
      const ldapEnabled = this.state.ldapEnabled;
      const gitlabSigninEnabled = this.props.enableSignUpWithGitLab;
      const googleSigninEnabled = this.props.enableSignUpWithGoogle;
      const office365SigninEnabled = this.props.enableSignUpWithOffice365;
      const samlSigninEnabled = this.state.samlEnabled;
      const usernameSigninEnabled = this.state.usernameSigninEnabled;
      const emailSigninEnabled = this.state.emailSigninEnabled;

      if (emailSigninEnabled || usernameSigninEnabled || ldapEnabled) {
        let errorClass = '';

        if (this.state.serverError) {
          errorClass = ' has-error';
        }

        loginControls.push(react_default.a.createElement("form", {
          key: "loginBoxes",
          onSubmit: this.preSubmit
        }, react_default.a.createElement("div", {
          className: "signup__email-container"
        }, react_default.a.createElement(form_error["a" /* default */], {
          error: this.state.serverError,
          margin: true
        }), react_default.a.createElement("div", {
          className: 'form-group' + errorClass
        }, react_default.a.createElement("input", {
          id: "loginId",
          className: "form-control",
          ref: "loginId",
          name: "loginId",
          value: this.state.loginId,
          onChange: this.handleLoginIdChange,
          placeholder: this.createLoginPlaceholder(),
          spellCheck: "false",
          autoCapitalize: "off",
          autoFocus: true
        })), react_default.a.createElement("div", {
          className: 'form-group' + errorClass
        }, react_default.a.createElement(localized_input["a" /* default */], {
          id: "loginPassword",
          type: "password",
          className: "form-control",
          ref: "password",
          name: "password",
          value: this.state.password,
          onChange: this.handlePasswordChange,
          placeholder: {
            id: Object(i18n["b" /* t */])('login.password'),
            defaultMessage: 'Password'
          },
          spellCheck: "false"
        })), react_default.a.createElement("div", {
          className: "form-group"
        }, react_default.a.createElement("button", {
          id: "loginButton",
          type: "submit",
          className: "btn btn-primary"
        }, react_default.a.createElement(loading_wrapper["a" /* default */], {
          id: "login_button_signing",
          loading: this.state.loading,
          text: utils["gb" /* localizeMessage */]('login.signInLoading', 'Signing in...')
        }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "login.signIn",
          defaultMessage: "Sign in"
        })))))));
      }

      if (this.props.enableOpenServer && this.checkSignUpEnabled()) {
        loginControls.push(react_default.a.createElement("div", {
          className: "form-group",
          key: "signup"
        }, react_default.a.createElement("span", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "login.noAccount",
          defaultMessage: "Don't have an account? "
        }), react_default.a.createElement(react_router_dom["a" /* Link */], {
          id: "signup",
          to: '/signup_user_complete' + this.props.location.search,
          className: "signup-team-login"
        }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "login.create",
          defaultMessage: "Create one now"
        })))));
      }

      if (false) {}

      if ((emailSigninEnabled || usernameSigninEnabled || ldapEnabled) && (gitlabSigninEnabled || googleSigninEnabled || samlSigninEnabled || office365SigninEnabled)) {
        loginControls.push(react_default.a.createElement("div", {
          key: "divider",
          className: "or__container"
        }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "login.or",
          defaultMessage: "or"
        })));
        loginControls.push(react_default.a.createElement("h5", {
          key: "oauthHeader"
        }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "login.signInWith",
          defaultMessage: "Sign in with:"
        })));
      }

      if (gitlabSigninEnabled) {
        loginControls.push(react_default.a.createElement("a", {
          className: "btn btn-custom-login gitlab",
          key: "gitlab",
          href: client["Client4"].getOAuthRoute() + '/gitlab/login' + this.props.location.search
        }, react_default.a.createElement("span", null, react_default.a.createElement("span", {
          className: "icon"
        }), react_default.a.createElement("span", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "login.gitlab",
          defaultMessage: "GitLab"
        })))));
      }

      if (googleSigninEnabled) {
        loginControls.push(react_default.a.createElement("a", {
          className: "btn btn-custom-login google",
          key: "google",
          href: client["Client4"].getOAuthRoute() + '/google/login' + this.props.location.search
        }, react_default.a.createElement("span", null, react_default.a.createElement("span", {
          className: "icon"
        }), react_default.a.createElement("span", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "login.google",
          defaultMessage: "Google Apps"
        })))));
      }

      if (office365SigninEnabled) {
        loginControls.push(react_default.a.createElement("a", {
          className: "btn btn-custom-login office365",
          key: "office365",
          href: client["Client4"].getOAuthRoute() + '/office365/login' + this.props.location.search
        }, react_default.a.createElement("span", null, react_default.a.createElement("span", {
          className: "icon"
        }), react_default.a.createElement("span", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "login.office365",
          defaultMessage: "Office 365"
        })))));
      }

      if (samlSigninEnabled) {
        loginControls.push(react_default.a.createElement("a", {
          className: "btn btn-custom-login saml",
          key: "saml",
          href: client["Client4"].getUrl() + '/login/sso/saml' + this.props.location.search
        }, react_default.a.createElement("span", null, react_default.a.createElement("span", {
          className: "icon fa fa-lock fa--margin-top",
          title: "Saml icon"
        }), react_default.a.createElement("span", null, this.props.samlLoginButtonText))));
      }

      if (loginControls.length === 0) {
        loginControls.push(react_default.a.createElement(form_error["a" /* default */], {
          key: "noMethods",
          error: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "login.noMethods",
            defaultMessage: "No sign-in methods are enabled. Please contact your System Administrator."
          }),
          margin: true
        }));
      }

      return react_default.a.createElement("div", null, this.createExtraText(), loginControls);
    });

    _defineProperty(this, "hideMfa", () => {
      this.setState({
        showMfa: false
      });
    });

    let _loginId = '';

    if (new URLSearchParams(this.props.location.search).get('extra') === utils_constants["N" /* default */].SIGNIN_VERIFIED && new URLSearchParams(this.props.location.search).get('email')) {
      _loginId = new URLSearchParams(this.props.location.search).get('email');
    }

    this.state = {
      ldapEnabled: this.props.isLicensed && this.props.enableLdap,
      usernameSigninEnabled: this.props.enableSignInWithUsername,
      emailSigninEnabled: this.props.enableSignInWithEmail,
      samlEnabled: this.props.isLicensed && this.props.enableSaml,
      loginId: _loginId,
      password: '',
      showMfa: false,
      loading: false,
      sessionExpired: false,
      brandImageError: false
    };
  }

  componentDidMount() {
    // const ticket = getUrlTicket("ticket", this.props.location.search);
    // if(ticket){
    //     this.props.actions.ossLogin(ticket)
    //       .then(async res => {
    //         console.log(6666666, res);
    //         //const {data: team} = await addUserToTeamFromInvite(inviteToken, inviteId);
    //         console.log(7777777, window.location.href, this.props);
    //         //window.location.href = "http://localhost:8065/";
    //         //browserHistory.push("/");
    //       })
    //       .finally(() => {});
    // }else{
    //     window.location.href ="http://nsso.zhonganonline.com/login?service=za-white-screen&target=http://localhost:8065/login";
    //     return;
    // }
    this.configureTitle();

    if (this.props.currentUser) {
      global_actions["f" /* redirectUserToDefaultTeam */]();
      return;
    }

    const search = new URLSearchParams(this.props.location.search);
    const extra = search.get('extra');
    const email = search.get('email');

    if (extra === utils_constants["N" /* default */].SIGNIN_VERIFIED && email) {
      this.refs.password.focus();
    } // Determine if the user was unexpectedly logged out.


    if (local_storage_store["a" /* default */].getWasLoggedIn()) {
      if (extra === utils_constants["N" /* default */].SIGNIN_CHANGE) {
        // Assume that if the user triggered a sign in change, it was intended to logout.
        // We can't preflight this, since in some flows it's the server that invalidates
        // our session after we use it to complete the sign in change.
        local_storage_store["a" /* default */].setWasLoggedIn(false);
      } else {
        // Although the authority remains the local sessionExpired bit on the state, set this
        // extra field in the querystring to signal the desktop app. And although eslint
        // complains about this, it is allowed: https://reactjs.org/docs/react-component.html#componentdidmount.
        // eslint-disable-next-line react/no-did-mount-set-state
        this.setState({
          sessionExpired: true
        });
        search.set('extra', utils_constants["N" /* default */].SESSION_EXPIRED);
        browser_history["a" /* browserHistory */].replace(`${this.props.location.pathname}?${search}`);
      }
    }

    this.showSessionExpiredNotificationIfNeeded();
  }

  componentDidUpdate() {
    this.configureTitle();
    this.showSessionExpiredNotificationIfNeeded();
  }

  componentWillUnmount() {
    if (this.closeSessionExpiredNotification) {
      this.closeSessionExpiredNotification();
      this.closeSessionExpiredNotification = null;
    }
  }

  render() {
    const {
      customDescriptionText,
      siteName,
      initializing
    } = this.props;

    if (initializing) {
      return react_default.a.createElement(loading_screen["a" /* default */], null);
    }

    let content;
    let customContent;
    let customClass;
    let backButton;

    if (this.state.showMfa) {
      content = react_default.a.createElement(login_mfa["a" /* default */], {
        loginId: this.state.loginId,
        password: this.state.password,
        submit: this.submit
      });
      backButton = react_default.a.createElement(back_button["a" /* default */], {
        onClick: this.hideMfa
      });
    } else {
      content = this.createLoginOptions();
      customContent = this.createCustomLogin();

      if (customContent) {
        customClass = 'branded';
      }
    }

    return react_default.a.createElement("div", null);
  }

}

_defineProperty(login_controller_LoginController, "propTypes", {
  intl: index_es["i" /* intlShape */].isRequired,
  location: prop_types_default.a.object.isRequired,
  isLicensed: prop_types_default.a.bool.isRequired,
  currentUser: prop_types_default.a.object,
  customBrandText: prop_types_default.a.string,
  customDescriptionText: prop_types_default.a.string,
  enableCustomBrand: prop_types_default.a.bool.isRequired,
  enableLdap: prop_types_default.a.bool.isRequired,
  enableOpenServer: prop_types_default.a.bool.isRequired,
  enableSaml: prop_types_default.a.bool.isRequired,
  enableSignInWithEmail: prop_types_default.a.bool.isRequired,
  enableSignInWithUsername: prop_types_default.a.bool.isRequired,
  enableSignUpWithEmail: prop_types_default.a.bool.isRequired,
  enableSignUpWithGitLab: prop_types_default.a.bool.isRequired,
  enableSignUpWithGoogle: prop_types_default.a.bool.isRequired,
  enableSignUpWithOffice365: prop_types_default.a.bool.isRequired,
  experimentalPrimaryTeam: prop_types_default.a.string,
  ldapLoginFieldName: prop_types_default.a.string,
  samlLoginButtonText: prop_types_default.a.string,
  siteName: prop_types_default.a.string,
  initializing: prop_types_default.a.bool,
  actions: prop_types_default.a.shape({
    login: prop_types_default.a.func.isRequired,
    addUserToTeamFromInvite: prop_types_default.a.func.isRequired,
    ossLogin: prop_types_default.a.func.isRequired
  }).isRequired
});

/* harmony default export */ var login_controller = (Object(index_es["h" /* injectIntl */])(login_controller_LoginController));
// EXTERNAL MODULE: ./api/login.js
var api_login = __webpack_require__(974);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4!./components/login/login_controller/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.











function mapStateToProps(state) {
  const config = Object(general["getConfig"])(state);
  const license = Object(general["getLicense"])(state);
  const isLicensed = license.IsLicensed === "true";
  const customBrandText = config.CustomBrandText;
  const customDescriptionText = config.CustomDescriptionText;
  const enableCustomBrand = config.EnableCustomBrand === "true";
  const enableLdap = config.EnableLdap === "true";
  const enableOpenServer = config.EnableOpenServer === "true";
  const enableSaml = config.EnableSaml === "true";
  const enableSignInWithEmail = config.EnableSignInWithEmail === "true";
  const enableSignInWithUsername = config.EnableSignInWithUsername === "true";
  const enableSignUpWithEmail = config.EnableSignUpWithEmail === "true";
  const enableSignUpWithGitLab = config.EnableSignUpWithGitLab === "true";
  const enableSignUpWithGoogle = config.EnableSignUpWithGoogle === "true";
  const enableSignUpWithOffice365 = config.EnableSignUpWithOffice365 === "true";
  const ldapLoginFieldName = config.LdapLoginFieldName;
  const samlLoginButtonText = config.SamlLoginButtonText;
  const siteName = config.SiteName;
  const initializing = state.requests.users.logout.status === constants["RequestStatus"].SUCCESS || !state.storage.initialized; // Only set experimental team if user is on that team

  let experimentalPrimaryTeam = config.ExperimentalPrimaryTeam;

  if (experimentalPrimaryTeam) {
    const team = Object(teams["getTeamByName"])(state, experimentalPrimaryTeam);

    if (team) {
      const member = Object(teams["getMyTeamMember"])(state, team.id);

      if (!member || !member.team_id) {
        experimentalPrimaryTeam = null;
      }
    } else {
      experimentalPrimaryTeam = null;
    }
  }

  return {
    currentUser: Object(users["getCurrentUser"])(state),
    isLicensed,
    customBrandText,
    customDescriptionText,
    enableCustomBrand,
    enableLdap,
    enableOpenServer,
    enableSaml,
    enableSignInWithEmail,
    enableSignInWithUsername,
    enableSignUpWithEmail,
    enableSignUpWithGitLab,
    enableSignUpWithGoogle,
    enableSignUpWithOffice365,
    experimentalPrimaryTeam,
    ldapLoginFieldName,
    samlLoginButtonText,
    siteName,
    initializing
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux["bindActionCreators"])({
      login: login["a" /* login */],
      ossLogin: api_login["a" /* ossLogin */],
      addUserToTeamFromInvite: team_actions["b" /* addUserToTeamFromInvite */]
    }, dispatch)
  };
}

/* harmony default export */ var login_login_controller = __webpack_exports__["default"] = (Object(es["connect"])(mapStateToProps, mapDispatchToProps)(login_controller));

/***/ })

}]);
//# sourceMappingURL=11.9898f028059ac7f8b130.js.map
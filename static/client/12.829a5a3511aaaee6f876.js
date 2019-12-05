(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

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

/***/ 3469:
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

// EXTERNAL MODULE: ./mattermost-redux/actions/teams.js
var teams = __webpack_require__(299);

// EXTERNAL MODULE: ./actions/storage.js
var storage = __webpack_require__(139);

// EXTERNAL MODULE: ./actions/views/login.js
var login = __webpack_require__(1957);

// EXTERNAL MODULE: ./utils/utils.jsx + 1 modules
var utils = __webpack_require__(22);

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

// EXTERNAL MODULE: ./mattermost-redux/utils/helpers.js
var helpers = __webpack_require__(72);

// EXTERNAL MODULE: ./actions/diagnostics_actions.jsx
var diagnostics_actions = __webpack_require__(300);

// EXTERNAL MODULE: ./actions/global_actions.jsx
var global_actions = __webpack_require__(1567);

// EXTERNAL MODULE: ./utils/browser_history.jsx
var browser_history = __webpack_require__(114);

// EXTERNAL MODULE: ./utils/constants.jsx
var constants = __webpack_require__(0);

// EXTERNAL MODULE: ./images/logo.png
var logo = __webpack_require__(1592);
var logo_default = /*#__PURE__*/__webpack_require__.n(logo);

// EXTERNAL MODULE: ./components/common/back_button.jsx
var back_button = __webpack_require__(1587);

// EXTERNAL MODULE: ./components/loading_screen.jsx
var loading_screen = __webpack_require__(1569);

// EXTERNAL MODULE: ./components/common/site_name_and_description.jsx
var site_name_and_description = __webpack_require__(1682);

// EXTERNAL MODULE: ./components/formatted_markdown_message.jsx
var formatted_markdown_message = __webpack_require__(1564);

// CONCATENATED MODULE: ./components/signup/signup_email/signup_email.jsx
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.















class signup_email_SignupEmail extends react_default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "setDocumentTitle", siteName => {
      if (siteName) {
        document.title = siteName;
      }
    });

    _defineProperty(this, "getTokenData", (token, data) => {
      const parsedData = JSON.parse(data);
      return {
        loading: false,
        token,
        email: parsedData.email,
        teamName: parsedData.name
      };
    });

    _defineProperty(this, "getInviteInfo", async inviteId => {
      const {
        data,
        error
      } = await this.props.actions.getTeamInviteInfo(inviteId);

      if (data) {
        this.setState({
          loading: false,
          noOpenServerError: false,
          serverError: '',
          teamName: data.name
        });
      } else if (error) {
        this.setState({
          loading: false,
          noOpenServerError: true,
          serverError: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "signup_user_completed.invalid_invite",
            defaultMessage: "The invite link was invalid.  Please speak with your Administrator to receive an invitation."
          })
        });
      }
    });

    _defineProperty(this, "handleSignupSuccess", (user, data) => {
      Object(diagnostics_actions["d" /* trackEvent */])('signup', 'signup_user_02_complete');
      this.props.actions.loginById(data.id, user.password, '').then(({
        error
      }) => {
        if (error) {
          if (error.server_error_id === 'api.user.login.not_verified.app_error') {
            browser_history["a" /* browserHistory */].push('/should_verify_email?email=' + encodeURIComponent(user.email) + '&teamname=' + encodeURIComponent(this.state.teamName));
          } else {
            this.setState({
              serverError: error.message,
              isSubmitting: false
            });
          }

          return;
        }

        if (this.state.token > 0) {
          this.props.actions.setGlobalItem(this.state.token, JSON.stringify({
            usedBefore: true
          }));
        }

        const redirectTo = new URLSearchParams(this.props.location.search).get('redirect_to');

        if (redirectTo) {
          browser_history["a" /* browserHistory */].push(redirectTo);
        } else {
          global_actions["f" /* redirectUserToDefaultTeam */]();
        }
      });
    });

    _defineProperty(this, "isUserValid", () => {
      const providedEmail = this.refs.email.value.trim();

      if (!providedEmail) {
        this.setState({
          nameError: '',
          emailError: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "signup_user_completed.required"
          }),
          passwordError: '',
          serverError: ''
        });
        return false;
      }

      if (!Object(helpers["isEmail"])(providedEmail)) {
        this.setState({
          nameError: '',
          emailError: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "signup_user_completed.validEmail"
          }),
          passwordError: '',
          serverError: ''
        });
        return false;
      }

      const providedUsername = this.refs.name.value.trim().toLowerCase();

      if (!providedUsername) {
        this.setState({
          nameError: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "signup_user_completed.required"
          }),
          emailError: '',
          passwordError: '',
          serverError: ''
        });
        return false;
      }

      const usernameError = utils["eb" /* isValidUsername */](providedUsername);

      if (usernameError === 'Cannot use a reserved word as a username.') {
        this.setState({
          nameError: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "signup_user_completed.reserved"
          }),
          emailError: '',
          passwordError: '',
          serverError: ''
        });
        return false;
      } else if (usernameError) {
        this.setState({
          nameError: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "signup_user_completed.usernameLength",
            values: {
              min: constants["N" /* default */].MIN_USERNAME_LENGTH,
              max: constants["N" /* default */].MAX_USERNAME_LENGTH
            }
          }),
          emailError: '',
          passwordError: '',
          serverError: ''
        });
        return false;
      }

      const providedPassword = this.refs.password.value;
      const {
        valid,
        error
      } = utils["db" /* isValidPassword */](providedPassword, this.props.passwordConfig);

      if (!valid && error) {
        this.setState({
          nameError: '',
          emailError: '',
          passwordError: error,
          serverError: ''
        });
        return false;
      }

      return true;
    });

    _defineProperty(this, "handleSubmit", e => {
      e.preventDefault(); // bail out if a submission is already in progress

      if (this.state.isSubmitting) {
        return;
      }

      if (this.isUserValid()) {
        this.setState({
          nameError: '',
          emailError: '',
          passwordError: '',
          serverError: '',
          isSubmitting: true
        });
        const user = {
          email: this.refs.email.value.trim(),
          username: this.refs.name.value.trim().toLowerCase(),
          password: this.refs.password.value,
          allow_marketing: true
        };
        this.props.actions.createUser(user, this.state.token, this.state.inviteId).then(result => {
          if (result.error) {
            this.setState({
              serverError: result.error.message,
              isSubmitting: false
            });
            return;
          }

          this.handleSignupSuccess(user, result.data);
        });
      }
    });

    _defineProperty(this, "renderEmailSignup", () => {
      let emailError = null;
      let emailHelpText = react_default.a.createElement("span", {
        id: "valid_email",
        className: "help-block"
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "signup_user_completed.emailHelp",
        defaultMessage: "Valid email required for sign-up"
      }));
      let emailDivStyle = 'form-group';

      if (this.state.emailError) {
        emailError = react_default.a.createElement("label", {
          className: "control-label"
        }, this.state.emailError);
        emailHelpText = '';
        emailDivStyle += ' has-error';
      }

      let nameError = null;
      let nameHelpText = react_default.a.createElement("span", {
        id: "valid_name",
        className: "help-block"
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "signup_user_completed.userHelp",
        defaultMessage: "You can use lowercase letters, numbers, periods, dashes, and underscores."
      }));
      let nameDivStyle = 'form-group';

      if (this.state.nameError) {
        nameError = react_default.a.createElement("label", {
          className: "control-label"
        }, this.state.nameError);
        nameHelpText = '';
        nameDivStyle += ' has-error';
      }

      let passwordError = null;
      let passwordDivStyle = 'form-group';

      if (this.state.passwordError) {
        passwordError = react_default.a.createElement("label", {
          className: "control-label"
        }, this.state.passwordError);
        passwordDivStyle += ' has-error';
      }

      let yourEmailIs = null;

      if (this.state.email) {
        yourEmailIs = react_default.a.createElement(formatted_markdown_message["b" /* default */], {
          id: "signup_user_completed.emailIs",
          defaultMessage: "Your email address is **{email}**. You'll use this address to sign in to {siteName}.",
          values: {
            email: this.state.email,
            siteName: this.props.siteName
          }
        });
      }

      let emailContainerStyle = 'margin--extra';

      if (this.state.email) {
        emailContainerStyle = 'hidden';
      }

      return react_default.a.createElement("form", null, react_default.a.createElement("div", {
        className: "inner__content"
      }, react_default.a.createElement("div", {
        className: emailContainerStyle
      }, react_default.a.createElement("h5", {
        id: "email_label"
      }, react_default.a.createElement("strong", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "signup_user_completed.whatis",
        defaultMessage: "What's your email address?"
      }))), react_default.a.createElement("div", {
        className: emailDivStyle
      }, react_default.a.createElement("input", {
        id: "email",
        type: "email",
        ref: "email",
        className: "form-control",
        defaultValue: this.state.email,
        placeholder: "",
        maxLength: "128",
        autoFocus: true,
        spellCheck: "false",
        autoCapitalize: "off"
      }), emailError, emailHelpText)), yourEmailIs, react_default.a.createElement("div", {
        className: "margin--extra"
      }, react_default.a.createElement("h5", {
        id: "name_label"
      }, react_default.a.createElement("strong", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "signup_user_completed.chooseUser",
        defaultMessage: "Choose your username"
      }))), react_default.a.createElement("div", {
        className: nameDivStyle
      }, react_default.a.createElement("input", {
        id: "name",
        type: "text",
        ref: "name",
        className: "form-control",
        placeholder: "",
        maxLength: constants["N" /* default */].MAX_USERNAME_LENGTH,
        spellCheck: "false",
        autoCapitalize: "off"
      }), nameError, nameHelpText)), react_default.a.createElement("div", {
        className: "margin--extra"
      }, react_default.a.createElement("h5", {
        id: "password_label"
      }, react_default.a.createElement("strong", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "signup_user_completed.choosePwd",
        defaultMessage: "Choose your password"
      }))), react_default.a.createElement("div", {
        className: passwordDivStyle
      }, react_default.a.createElement("input", {
        id: "password",
        type: "password",
        ref: "password",
        className: "form-control",
        placeholder: "",
        maxLength: "128",
        spellCheck: "false"
      }), passwordError)), react_default.a.createElement("p", {
        className: "margin--extra"
      }, react_default.a.createElement("button", {
        id: "createAccountButton",
        type: "submit",
        onClick: this.handleSubmit,
        className: "btn-primary btn",
        disabled: this.state.isSubmitting
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "signup_user_completed.create",
        defaultMessage: "Create Account"
      })))));
    });

    const _data = new URLSearchParams(this.props.location.search).get('d');

    const _token = new URLSearchParams(this.props.location.search).get('t');

    const _inviteId = new URLSearchParams(this.props.location.search).get('id');

    this.state = {};

    if (_token && _token.length > 0) {
      this.state = this.getTokenData(_token, _data);
    } else if (_inviteId && _inviteId.length > 0) {
      this.state = {
        loading: true,
        inviteId: _inviteId
      };
    }
  }

  componentDidMount() {
    Object(diagnostics_actions["d" /* trackEvent */])('signup', 'signup_user_01_welcome');
    this.setDocumentTitle(this.props.siteName);
    const {
      inviteId
    } = this.state;

    if (inviteId && inviteId.length > 0) {
      this.getInviteInfo(inviteId);
    }
  }

  componentDidUpdate() {
    this.setDocumentTitle(this.props.siteName);
  }

  render() {
    const {
      customDescriptionText,
      enableSignUpWithEmail,
      location,
      privacyPolicyLink,
      siteName,
      termsOfServiceLink
    } = this.props;
    let serverError = null;

    if (this.state.serverError) {
      serverError = react_default.a.createElement("div", {
        id: "existingEmailErrorContainer",
        className: 'form-group has-error'
      }, react_default.a.createElement("label", {
        className: "control-label"
      }, this.state.serverError));
    }

    if (this.state.loading) {
      return react_default.a.createElement(loading_screen["a" /* default */], null);
    }

    let emailSignup;

    if (enableSignUpWithEmail) {
      emailSignup = this.renderEmailSignup();
    } else {
      return null;
    }

    let terms = null;

    if (!this.state.noOpenServerError && emailSignup) {
      terms = react_default.a.createElement("p", {
        id: "signup_agreement"
      }, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
        id: "create_team.agreement",
        defaultMessage: "By proceeding to create your account and use {siteName}, you agree to our [Terms of Service]({TermsOfServiceLink}) and [Privacy Policy]({PrivacyPolicyLink}). If you do not agree, you cannot use {siteName}.",
        values: {
          siteName,
          TermsOfServiceLink: termsOfServiceLink,
          PrivacyPolicyLink: privacyPolicyLink
        }
      }));
    }

    if (this.state.noOpenServerError) {
      emailSignup = null;
    }

    return react_default.a.createElement("div", null, react_default.a.createElement(back_button["a" /* default */], null), react_default.a.createElement("div", {
      id: "signup_email_section",
      className: "col-sm-12"
    }, react_default.a.createElement("div", {
      className: "signup-team__container padding--less"
    }, react_default.a.createElement("img", {
      alt: 'signup team logo',
      className: "signup-team-logo",
      src: logo_default.a
    }), react_default.a.createElement(site_name_and_description["a" /* default */], {
      customDescriptionText: customDescriptionText,
      siteName: siteName
    }), react_default.a.createElement("h4", {
      id: "create_account",
      className: "color--light"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "signup_user_completed.lets",
      defaultMessage: "Let's create your account"
    })), react_default.a.createElement("span", {
      id: "signin_account",
      className: "color--light"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "signup_user_completed.haveAccount",
      defaultMessage: "Already have an account?"
    }), ' ', react_default.a.createElement(react_router_dom["a" /* Link */], {
      id: "signin_account_link",
      to: '/login' + location.search
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "signup_user_completed.signIn",
      defaultMessage: "Click here to sign in."
    }))), emailSignup, serverError, terms)));
  }

}

_defineProperty(signup_email_SignupEmail, "propTypes", {
  location: prop_types_default.a.object,
  enableSignUpWithEmail: prop_types_default.a.bool.isRequired,
  siteName: prop_types_default.a.string,
  termsOfServiceLink: prop_types_default.a.string,
  privacyPolicyLink: prop_types_default.a.string,
  customDescriptionText: prop_types_default.a.string,
  passwordConfig: prop_types_default.a.object,
  actions: prop_types_default.a.shape({
    createUser: prop_types_default.a.func.isRequired,
    loginById: prop_types_default.a.func.isRequired,
    setGlobalItem: prop_types_default.a.func.isRequired,
    getTeamInviteInfo: prop_types_default.a.func.isRequired
  }).isRequired
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4!./components/signup/signup_email/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.










function mapStateToProps(state) {
  const config = Object(general["getConfig"])(state);
  const enableSignUpWithEmail = config.EnableSignUpWithEmail === 'true';
  const siteName = config.SiteName;
  const termsOfServiceLink = config.TermsOfServiceLink;
  const privacyPolicyLink = config.PrivacyPolicyLink;
  const customDescriptionText = config.CustomDescriptionText;
  return {
    enableSignUpWithEmail,
    siteName,
    termsOfServiceLink,
    privacyPolicyLink,
    customDescriptionText,
    passwordConfig: Object(utils["C" /* getPasswordConfig */])(config)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux["bindActionCreators"])({
      createUser: users["createUser"],
      loginById: login["b" /* loginById */],
      setGlobalItem: storage["e" /* setGlobalItem */],
      getTeamInviteInfo: teams["getTeamInviteInfo"]
    }, dispatch)
  };
}

/* harmony default export */ var signup_email = __webpack_exports__["default"] = (Object(es["connect"])(mapStateToProps, mapDispatchToProps)(signup_email_SignupEmail));

/***/ })

}]);
//# sourceMappingURL=12.829a5a3511aaaee6f876.js.map
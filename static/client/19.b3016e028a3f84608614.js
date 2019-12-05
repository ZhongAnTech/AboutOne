(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

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

/***/ 3468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 15 modules
var es = __webpack_require__(405);

// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(16);

// EXTERNAL MODULE: ./mattermost-redux/selectors/entities/general.js
var general = __webpack_require__(26);

// EXTERNAL MODULE: ./mattermost-redux/selectors/entities/users.js
var users = __webpack_require__(10);

// EXTERNAL MODULE: ./mattermost-redux/actions/teams.js
var teams = __webpack_require__(299);

// EXTERNAL MODULE: ./selectors/storage.js
var storage = __webpack_require__(203);

// EXTERNAL MODULE: ./actions/storage.js
var actions_storage = __webpack_require__(139);

// EXTERNAL MODULE: ./actions/team_actions.jsx
var team_actions = __webpack_require__(1639);

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

// EXTERNAL MODULE: ./utils/browser_history.jsx
var browser_history = __webpack_require__(114);

// EXTERNAL MODULE: ./actions/global_actions.jsx
var global_actions = __webpack_require__(1567);

// EXTERNAL MODULE: ./images/logo.png
var logo = __webpack_require__(1592);
var logo_default = /*#__PURE__*/__webpack_require__.n(logo);

// EXTERNAL MODULE: ./components/announcement_bar/index.js + 9 modules
var announcement_bar = __webpack_require__(1664);

// EXTERNAL MODULE: ./components/common/back_button.jsx
var back_button = __webpack_require__(1587);

// EXTERNAL MODULE: ./components/form_error.jsx
var form_error = __webpack_require__(1584);

// EXTERNAL MODULE: ./components/loading_screen.jsx
var loading_screen = __webpack_require__(1569);

// EXTERNAL MODULE: ./utils/constants.jsx
var constants = __webpack_require__(0);

// CONCATENATED MODULE: ./components/signup/signup_controller/signup_controller.jsx
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.













class signup_controller_SignupController extends react_default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "addUserToTeamFromInvite", async (token, inviteId) => {
      const {
        data: team,
        error
      } = await this.props.actions.addUserToTeamFromInvite(token, inviteId);

      if (team) {
        browser_history["a" /* browserHistory */].push('/' + team.name + `/channels/${constants["g" /* Constants */].DEFAULT_CHANNEL}`);
      } else if (error) {
        this.handleInvalidInvite(error);
      }
    });

    _defineProperty(this, "getInviteInfo", async inviteId => {
      const {
        data,
        error
      } = await this.props.actions.getTeamInviteInfo(inviteId);

      if (data) {
        this.setState({
          serverError: '',
          loading: false
        });
      } else if (error) {
        this.handleInvalidInvite(error);
      }
    });

    _defineProperty(this, "handleInvalidInvite", err => {
      let serverError;

      if (err.server_error_id === 'store.sql_user.save.max_accounts.app_error') {
        serverError = err.message;
      } else {
        serverError = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "signup_user_completed.invalid_invite",
          defaultMessage: "The invite link was invalid.  Please speak with your Administrator to receive an invitation."
        });
      }

      this.setState({
        noOpenServerError: true,
        loading: false,
        serverError
      });
    });

    this.renderSignupControls = this.renderSignupControls.bind(this);
    let loading = false;
    let _serverError = '';
    let noOpenServerError = false;
    let usedBefore = false;

    if (this.props.location.search) {
      const params = new URLSearchParams(this.props.location.search);
      let token = params.get('t');

      if (token == null) {
        token = '';
      }

      let inviteId = params.get('id');

      if (inviteId == null) {
        inviteId = '';
      }

      if (inviteId) {
        loading = true;
      } else if (!this.props.loggedIn) {
        usedBefore = props.usedBefore;
      } else if (!inviteId && !this.props.enableOpenServer && !this.props.noAccounts) {
        noOpenServerError = true;
        _serverError = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "signup_user_completed.no_open_server",
          defaultMessage: "This server does not allow open signups.  Please speak with your Administrator to receive an invitation."
        });
      }
    }

    this.state = {
      loading,
      serverError: _serverError,
      noOpenServerError,
      usedBefore
    };
  }

  componentDidMount() {
    this.props.actions.removeGlobalItem('team');

    if (this.props.location.search) {
      const params = new URLSearchParams(this.props.location.search);
      const token = params.get('t') || '';
      const inviteId = params.get('id') || '';
      const userLoggedIn = this.props.loggedIn;

      if ((inviteId || token) && userLoggedIn) {
        this.addUserToTeamFromInvite(token, inviteId);
      } else if (inviteId) {
        this.getInviteInfo(inviteId);
      } else if (userLoggedIn) {
        global_actions["f" /* redirectUserToDefaultTeam */]();
      }
    }
  }

  renderSignupControls() {
    const {
      formatMessage
    } = this.context.intl;
    let signupControls = [];

    if (this.props.enableSignUpWithEmail) {
      signupControls.push(react_default.a.createElement(react_router_dom["a" /* Link */], {
        className: "btn btn-custom-login btn--full email",
        key: "email",
        to: '/signup_email' + window.location.search
      }, react_default.a.createElement("span", null, react_default.a.createElement("span", {
        className: "icon fa fa-envelope",
        title: formatMessage({
          id: 'signup.email.icon',
          defaultMessage: 'Email Icon'
        })
      }), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "signup.email",
        defaultMessage: "Email and Password"
      }))));
    }

    if (this.props.enableSignUpWithGitLab) {
      signupControls.push(react_default.a.createElement("a", {
        className: "btn btn-custom-login btn--full gitlab",
        key: "gitlab",
        href: client["Client4"].getOAuthRoute() + '/gitlab/signup' + window.location.search
      }, react_default.a.createElement("span", null, react_default.a.createElement("span", {
        className: "icon"
      }), react_default.a.createElement("span", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "signup.gitlab",
        defaultMessage: "GitLab Single Sign-On"
      })))));
    }

    if (this.props.isLicensed && this.props.enableSignUpWithGoogle) {
      signupControls.push(react_default.a.createElement("a", {
        className: "btn btn-custom-login btn--full google",
        key: "google",
        href: client["Client4"].getOAuthRoute() + '/google/signup' + window.location.search
      }, react_default.a.createElement("span", null, react_default.a.createElement("span", {
        className: "icon"
      }), react_default.a.createElement("span", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "signup.google",
        defaultMessage: "Google Account"
      })))));
    }

    if (this.props.isLicensed && this.props.enableSignUpWithOffice365) {
      signupControls.push(react_default.a.createElement("a", {
        className: "btn btn-custom-login btn--full office365",
        key: "office365",
        href: client["Client4"].getOAuthRoute() + '/office365/signup' + window.location.search
      }, react_default.a.createElement("span", null, react_default.a.createElement("span", {
        className: "icon"
      }), react_default.a.createElement("span", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "signup.office365",
        defaultMessage: "Office 365"
      })))));
    }

    if (this.props.isLicensed && this.props.enableLDAP) {
      const params = new URLSearchParams(this.props.location.search);
      params.append('extra', 'create_ldap');
      const query = '?' + params.toString();
      let LDAPText = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "signup.ldap",
        defaultMessage: "AD/LDAP Credentials"
      });

      if (this.props.ldapLoginFieldName) {
        LDAPText = this.props.ldapLoginFieldName;
      }

      signupControls.push(react_default.a.createElement(react_router_dom["a" /* Link */], {
        className: "btn btn-custom-login btn--full ldap",
        key: "ldap",
        to: '/login' + query
      }, react_default.a.createElement("span", null, react_default.a.createElement("span", {
        className: "icon fa fa-folder-open fa--margin-top",
        title: formatMessage({
          id: 'signup.ldap.icon',
          defaultMessage: 'AD/LDAP Icon'
        })
      }), react_default.a.createElement("span", null, LDAPText))));
    }

    if (this.props.isLicensed && this.props.enableSAML) {
      let query = '';

      if (window.location.search) {
        query = '&action=signup';
      } else {
        query = '?action=signup';
      }

      signupControls.push(react_default.a.createElement(react_router_dom["a" /* Link */], {
        className: "btn btn-custom-login btn--full saml",
        key: "saml",
        to: '/login/sso/saml' + window.location.search + query
      }, react_default.a.createElement("span", null, react_default.a.createElement("span", {
        className: "icon fa fa-lock fa--margin-top",
        title: formatMessage({
          id: 'signup.saml.icon',
          defaultMessage: 'SAML Icon'
        })
      }), react_default.a.createElement("span", null, this.props.samlLoginButtonText))));
    }

    if (signupControls.length === 0) {
      const signupDisabledError = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "signup_user_completed.none",
        defaultMessage: "No user creation method has been enabled. Please contact an administrator for access."
      });
      signupControls = react_default.a.createElement(form_error["a" /* default */], {
        error: signupDisabledError,
        margin: true
      });
    } else if (signupControls.length === 1) {
      if (this.props.enableSignUpWithEmail) {
        return browser_history["a" /* browserHistory */].push('/signup_email' + window.location.search);
      } else if (this.props.isLicensed && this.props.enableLDAP) {
        return browser_history["a" /* browserHistory */].push('/login' + window.location.search);
      }
    }

    return signupControls;
  }

  render() {
    if (this.state.loading) {
      return react_default.a.createElement(loading_screen["a" /* default */], null);
    }

    if (this.state.usedBefore) {
      return react_default.a.createElement("div", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "signup_user_completed.expired",
        defaultMessage: "You've already completed the signup process for this invitation or this invitation has expired."
      }));
    }

    let serverError = null;

    if (this.state.serverError) {
      serverError = react_default.a.createElement("div", {
        className: 'form-group has-error'
      }, react_default.a.createElement("label", {
        className: "control-label"
      }, this.state.serverError));
    }

    let signupControls;

    if (this.state.noOpenServerError || this.state.usedBefore) {
      signupControls = null;
    } else {
      signupControls = this.renderSignupControls();
    }

    return react_default.a.createElement("div", null, react_default.a.createElement(announcement_bar["a" /* default */], null), react_default.a.createElement(back_button["a" /* default */], null), react_default.a.createElement("div", {
      className: "col-sm-12"
    }, react_default.a.createElement("div", {
      className: "signup-team__container"
    }, react_default.a.createElement("img", {
      alt: 'signup team logo',
      className: "signup-team-logo",
      src: logo_default.a
    }), react_default.a.createElement("div", {
      className: "signup__content"
    }, react_default.a.createElement("h1", null, this.props.siteName), react_default.a.createElement("h4", {
      className: "color--light"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "web.root.signup_info"
    })), react_default.a.createElement("div", {
      className: "margin--extra"
    }, react_default.a.createElement("h5", null, react_default.a.createElement("strong", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "signup.title",
      defaultMessage: "Create an account with:"
    })))), signupControls, serverError), react_default.a.createElement("span", {
      className: "color--light"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "signup_user_completed.haveAccount",
      defaultMessage: "Already have an account?"
    }), ' ', react_default.a.createElement(react_router_dom["a" /* Link */], {
      to: '/login' + this.props.location.search
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "signup_user_completed.signIn",
      defaultMessage: "Click here to sign in."
    }))))));
  }

}

_defineProperty(signup_controller_SignupController, "propTypes", {
  location: prop_types_default.a.object,
  loggedIn: prop_types_default.a.bool.isRequired,
  isLicensed: prop_types_default.a.bool.isRequired,
  enableOpenServer: prop_types_default.a.bool.isRequired,
  noAccounts: prop_types_default.a.bool.isRequired,
  enableSignUpWithEmail: prop_types_default.a.bool.isRequired,
  enableSignUpWithGitLab: prop_types_default.a.bool.isRequired,
  enableSignUpWithGoogle: prop_types_default.a.bool.isRequired,
  enableSignUpWithOffice365: prop_types_default.a.bool.isRequired,
  enableLDAP: prop_types_default.a.bool.isRequired,
  enableSAML: prop_types_default.a.bool.isRequired,
  samlLoginButtonText: prop_types_default.a.string,
  siteName: prop_types_default.a.string,
  usedBefore: prop_types_default.a.string,
  ldapLoginFieldName: prop_types_default.a.string.isRequired,
  actions: prop_types_default.a.shape({
    removeGlobalItem: prop_types_default.a.func.isRequired,
    getTeamInviteInfo: prop_types_default.a.func.isRequired,
    addUserToTeamFromInvite: prop_types_default.a.func.isRequired
  }).isRequired
});

_defineProperty(signup_controller_SignupController, "contextTypes", {
  intl: index_es["i" /* intlShape */].isRequired
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4!./components/signup/signup_controller/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.










function mapStateToProps(state, ownProps) {
  const license = Object(general["getLicense"])(state);
  const config = Object(general["getConfig"])(state);
  const isLicensed = license && license.IsLicensed === 'true';
  const enableOpenServer = config.EnableOpenServer === 'true';
  const noAccounts = config.NoAccounts === 'true';
  const enableSignUpWithEmail = config.EnableSignUpWithEmail === 'true';
  const enableSignUpWithGitLab = config.EnableSignUpWithGitLab === 'true';
  const enableSignUpWithGoogle = config.EnableSignUpWithGoogle === 'true';
  const enableSignUpWithOffice365 = config.EnableSignUpWithOffice365 === 'true';
  const enableLDAP = config.EnableLdap === 'true';
  const enableSAML = config.EnableSaml === 'true';
  const samlLoginButtonText = config.SamlLoginButtonText;
  const ldapLoginFieldName = config.LdapLoginFieldName;
  const siteName = config.SiteName;
  let usedBefore;

  if (ownProps.location.search) {
    const params = new URLSearchParams(ownProps.location.search);
    let token = params.get('t');

    if (token == null) {
      token = '';
    }

    usedBefore = Object(storage["a" /* getGlobalItem */])(state, token, null);
  }

  return {
    loggedIn: Boolean(Object(users["getCurrentUserId"])(state)),
    isLicensed,
    enableOpenServer,
    noAccounts,
    enableSignUpWithEmail,
    enableSignUpWithGitLab,
    enableSignUpWithGoogle,
    enableSignUpWithOffice365,
    enableLDAP,
    enableSAML,
    samlLoginButtonText,
    ldapLoginFieldName,
    siteName,
    usedBefore
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux["bindActionCreators"])({
      removeGlobalItem: actions_storage["c" /* removeGlobalItem */],
      getTeamInviteInfo: teams["getTeamInviteInfo"],
      addUserToTeamFromInvite: team_actions["b" /* addUserToTeamFromInvite */]
    }, dispatch)
  };
}

/* harmony default export */ var signup_controller = __webpack_exports__["default"] = (Object(es["connect"])(mapStateToProps, mapDispatchToProps)(signup_controller_SignupController));

/***/ })

}]);
//# sourceMappingURL=19.b3016e028a3f84608614.js.map
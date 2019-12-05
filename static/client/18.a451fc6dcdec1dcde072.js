(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

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

/***/ 3460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 15 modules
var es = __webpack_require__(405);

// EXTERNAL MODULE: ./mattermost-redux/actions/users.js
var users = __webpack_require__(35);

// EXTERNAL MODULE: ./mattermost-redux/selectors/entities/general.js
var general = __webpack_require__(26);

// EXTERNAL MODULE: ./mattermost-redux/selectors/entities/users.js
var entities_users = __webpack_require__(10);

// EXTERNAL MODULE: ./mattermost-redux/actions/errors.js
var errors = __webpack_require__(105);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(6);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(1);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.es.js + 1 modules
var index_es = __webpack_require__(52);

// EXTERNAL MODULE: ./actions/diagnostics_actions.jsx
var diagnostics_actions = __webpack_require__(300);

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

// EXTERNAL MODULE: ./actions/global_actions.jsx
var global_actions = __webpack_require__(1567);

// CONCATENATED MODULE: ./components/do_verify_email/do_verify_email.jsx
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.










class do_verify_email_DoVerifyEmail extends react_default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "verifyEmail", async () => {
      const {
        actions: {
          verifyUserEmail
        }
      } = this.props;
      const verify = await verifyUserEmail(new URLSearchParams(this.props.location.search).get('token'));

      if (verify && verify.data) {
        this.handleSuccess();
      } else if (verify && verify.error) {
        this.handleError(constants["M" /* VerifyEmailErrors */].FAILED_EMAIL_VERIFICATION);
      }
    });

    this.state = {
      verifyStatus: 'pending',
      serverError: ''
    };
  }

  UNSAFE_componentWillMount() {
    // eslint-disable-line camelcase
    this.verifyEmail();
  }

  handleRedirect() {
    if (this.props.isLoggedIn) {
      global_actions["f" /* redirectUserToDefaultTeam */]();
    } else {
      browser_history["a" /* browserHistory */].push('/login?extra=verified&email=' + encodeURIComponent(new URLSearchParams(this.props.location.search).get('email')));
    }
  }

  handleSuccess() {
    this.setState({
      verifyStatus: 'success'
    });
    this.props.actions.clearErrors();

    if (this.props.isLoggedIn) {
      this.props.actions.logError({
        message: constants["d" /* AnnouncementBarMessages */].EMAIL_VERIFIED,
        type: constants["e" /* AnnouncementBarTypes */].SUCCESS
      }, true);
      Object(diagnostics_actions["d" /* trackEvent */])('settings', 'verify_email');
      this.props.actions.getMe().then(({
        data,
        error: err
      }) => {
        if (data) {
          this.handleRedirect();
        } else if (err) {
          this.handleError(constants["M" /* VerifyEmailErrors */].FAILED_USER_STATE_GET);
        }
      });
    } else {
      this.handleRedirect();
    }
  }

  handleError(type) {
    let serverError = '';

    if (type === constants["M" /* VerifyEmailErrors */].FAILED_EMAIL_VERIFICATION) {
      serverError = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "signup_user_completed.invalid_invite",
        defaultMessage: "The invite link was invalid. Please speak with your Administrator to receive an invitation."
      });
    } else if (type === constants["M" /* VerifyEmailErrors */].FAILED_USER_STATE_GET) {
      serverError = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "signup_user_completed.failed_update_user_state",
        defaultMessage: "Please clear your cache and try to log in."
      });
    }

    this.setState({
      verifyStatus: 'failure',
      serverError
    });
  }

  render() {
    if (this.state.verifyStatus !== 'failure') {
      return react_default.a.createElement(loading_screen["a" /* default */], null);
    }

    let serverError = null;

    if (this.state.serverError) {
      serverError = react_default.a.createElement("div", {
        className: 'form-group has-error'
      }, react_default.a.createElement("label", {
        className: "control-label"
      }, this.state.serverError));
    }

    return react_default.a.createElement("div", null, react_default.a.createElement(back_button["a" /* default */], null), react_default.a.createElement("div", {
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
      id: "web.root.signup_info",
      defaultMessage: "All team communication in one place, searchable and accessible anywhere"
    })), serverError))));
  }

}

_defineProperty(do_verify_email_DoVerifyEmail, "propTypes", {
  /**
   * Object with validation parameters given in link
   */
  location: prop_types_default.a.object.isRequired,

  /**
   * Title of the app or site.
   */
  siteName: prop_types_default.a.string,

  /*
   * Object with redux action creators
   */
  actions: prop_types_default.a.shape({
    /*
     * Action creator to verify the user's email
     */
    verifyUserEmail: prop_types_default.a.func.isRequired,

    /*
     * Action creator to update the user in the redux store
     */
    getMe: prop_types_default.a.func.isRequired,
    logError: prop_types_default.a.func.isRequired,
    clearErrors: prop_types_default.a.func.isRequired
  }).isRequired,

  /**
   * Object reprenseting the current user
   */
  user: prop_types_default.a.shape({
    email_verified: prop_types_default.a.bool
  }),
  isLoggedIn: prop_types_default.a.bool.isRequired
});

do_verify_email_DoVerifyEmail.defaultProps = {
  location: {}
};
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4!./components/do_verify_email/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.








function mapStateToProps(state) {
  const config = Object(general["getConfig"])(state);
  const siteName = config.SiteName;
  return {
    isLoggedIn: Boolean(Object(entities_users["getCurrentUserId"])(state)),
    siteName,
    user: Object(entities_users["getCurrentUser"])(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux["bindActionCreators"])({
      verifyUserEmail: users["verifyUserEmail"],
      getMe: users["getMe"],
      logError: errors["logError"],
      clearErrors: errors["clearErrors"]
    }, dispatch)
  };
}

/* harmony default export */ var do_verify_email = __webpack_exports__["default"] = (Object(es["connect"])(mapStateToProps, mapDispatchToProps)(do_verify_email_DoVerifyEmail));

/***/ })

}]);
//# sourceMappingURL=18.a451fc6dcdec1dcde072.js.map
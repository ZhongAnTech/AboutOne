(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

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

/***/ 3459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 15 modules
var es = __webpack_require__(405);

// EXTERNAL MODULE: ./mattermost-redux/selectors/entities/general.js
var general = __webpack_require__(26);

// EXTERNAL MODULE: ./mattermost-redux/actions/users.js
var users = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(6);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(1);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.es.js + 1 modules
var index_es = __webpack_require__(52);

// EXTERNAL MODULE: ./components/common/back_button.jsx
var back_button = __webpack_require__(1587);

// EXTERNAL MODULE: ./components/icon/success_icon.jsx
var success_icon = __webpack_require__(1695);

// CONCATENATED MODULE: ./components/should_verify_email/should_verify_email.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





class should_verify_email_ShouldVerifyEmail extends react_default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleResend", async () => {
      const email = new URLSearchParams(this.props.location.search).get('email');
      this.setState({
        resendStatus: 'sending'
      });
      const {
        data,
        error
      } = await this.props.actions.sendVerificationEmail(email);

      if (data) {
        this.setState({
          resendStatus: 'success'
        });
      } else if (error) {
        this.setState({
          resendStatus: 'failure'
        });
      }
    });

    this.state = {
      resendStatus: 'none'
    };
  }

  render() {
    let resendConfirm = '';

    if (this.state.resendStatus === 'success') {
      resendConfirm = react_default.a.createElement("div", null, react_default.a.createElement("br", null), react_default.a.createElement("p", {
        className: "alert alert-success"
      }, react_default.a.createElement(success_icon["a" /* default */], null), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "email_verify.sent",
        defaultMessage: " Verification email sent."
      })));
    }

    if (this.state.resendStatus === 'failure') {
      resendConfirm = react_default.a.createElement("div", null, react_default.a.createElement("br", null), react_default.a.createElement("p", {
        className: "alert alert-danger"
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "generic_icons.fail",
        defaultMessage: "Faliure Icon"
      }, title => react_default.a.createElement("i", {
        className: "fa fa-times",
        title: title
      })), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "email_verify.failed"
      })));
    }

    return react_default.a.createElement("div", null, react_default.a.createElement(back_button["a" /* default */], null), react_default.a.createElement("div", {
      className: "col-sm-12"
    }, react_default.a.createElement("div", {
      className: "signup-team__container"
    }, react_default.a.createElement("h3", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "email_verify.almost",
      defaultMessage: "{siteName}: You are almost done",
      values: {
        siteName: this.props.siteName
      }
    })), react_default.a.createElement("div", null, react_default.a.createElement("p", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "email_verify.notVerifiedBody",
      defaultMessage: "Please verify your email address. Check your inbox for an email."
    })), react_default.a.createElement("button", {
      onClick: this.handleResend,
      className: "btn btn-primary"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "email_verify.resend",
      defaultMessage: "Resend Email"
    })), resendConfirm))));
  }

}

_defineProperty(should_verify_email_ShouldVerifyEmail, "propTypes", {
  location: prop_types_default.a.object.isRequired,
  siteName: prop_types_default.a.string.isRequired,
  actions: prop_types_default.a.shape({
    sendVerificationEmail: prop_types_default.a.func.isRequired
  }).isRequired
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4!./components/should_verify_email/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






const mapStateToProps = state => {
  const {
    SiteName: siteName
  } = Object(general["getConfig"])(state);
  return {
    siteName
  };
};

const mapDispatchToProps = dispatch => ({
  actions: Object(redux["bindActionCreators"])({
    sendVerificationEmail: users["sendVerificationEmail"]
  }, dispatch)
});

/* harmony default export */ var should_verify_email = __webpack_exports__["default"] = (Object(es["connect"])(mapStateToProps, mapDispatchToProps)(should_verify_email_ShouldVerifyEmail));

/***/ })

}]);
//# sourceMappingURL=25.ece62ad00e1bfb636b1e.js.map
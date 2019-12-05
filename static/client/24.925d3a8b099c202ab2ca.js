(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

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

/***/ 3463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 15 modules
var es = __webpack_require__(405);

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

// EXTERNAL MODULE: ./mattermost-redux/utils/helpers.js
var helpers = __webpack_require__(72);

// EXTERNAL MODULE: ./components/common/back_button.jsx
var back_button = __webpack_require__(1587);

// EXTERNAL MODULE: ./components/localized_input/localized_input.jsx
var localized_input = __webpack_require__(1577);

// EXTERNAL MODULE: ./utils/i18n.jsx
var i18n = __webpack_require__(53);

// CONCATENATED MODULE: ./components/password_reset_send_link/password_reset_send_link.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.







class password_reset_send_link_PasswordResetSendLink extends react_default.a.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      error: null,
      updateText: null
    });

    _defineProperty(this, "resetForm", react_default.a.createRef());

    _defineProperty(this, "emailInput", react_default.a.createRef());

    _defineProperty(this, "handleSendLink", async e => {
      e.preventDefault();
      const input = this.emailInput.current && this.emailInput.current.input.current;
      const email = input && input.value.trim().toLowerCase();

      if (!email || !Object(helpers["isEmail"])(email)) {
        this.setState({
          error: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: 'password_send.error',
            defaultMessage: 'Please enter a valid email address.'
          })
        });
        return;
      } // End of error checking clear error


      this.setState({
        error: null
      });
      const {
        data,
        error
      } = await this.props.actions.sendPasswordResetEmail(email);

      if (data) {
        this.setState({
          error: null,
          updateText: react_default.a.createElement("div", {
            id: "passwordResetEmailSent",
            className: "reset-form alert alert-success"
          }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "password_send.link",
            defaultMessage: "If the account exists, a password reset email will be sent to:"
          }), react_default.a.createElement("div", null, react_default.a.createElement("b", null, email)), react_default.a.createElement("br", null), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "password_send.checkInbox",
            defaultMessage: "Please check your inbox."
          }))
        });

        if (this.resetForm.current) {
          this.resetForm.current.hidden = true;
        }
      } else if (error) {
        this.setState({
          error: error.message,
          update_text: null
        });
      }
    });
  }

  render() {
    let error = null;

    if (this.state.error) {
      error = react_default.a.createElement("div", {
        className: "form-group has-error"
      }, react_default.a.createElement("label", {
        className: "control-label"
      }, this.state.error));
    }

    let formClass = 'form-group';

    if (error) {
      formClass += ' has-error';
    }

    return react_default.a.createElement("div", null, react_default.a.createElement(back_button["a" /* default */], null), react_default.a.createElement("div", {
      className: "col-sm-12"
    }, react_default.a.createElement("div", {
      className: "signup-team__container"
    }, react_default.a.createElement("h3", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "password_send.title",
      defaultMessage: "Password Reset"
    })), this.state.updateText, react_default.a.createElement("form", {
      onSubmit: this.handleSendLink,
      ref: this.resetForm
    }, react_default.a.createElement("p", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "password_send.description",
      defaultMessage: "To reset your password, enter the email address you used to sign up"
    })), react_default.a.createElement("div", {
      className: formClass
    }, react_default.a.createElement(localized_input["a" /* default */], {
      id: "passwordResetEmailInput",
      type: "email",
      className: "form-control",
      name: "email",
      placeholder: {
        id: Object(i18n["b" /* t */])('password_send.email'),
        defaultMessage: 'Email'
      },
      ref: this.emailInput,
      spellCheck: "false",
      autoFocus: true
    })), error, react_default.a.createElement("button", {
      id: "passwordResetButton",
      type: "submit",
      className: "btn btn-primary"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "password_send.reset",
      defaultMessage: "Reset my password"
    }))))));
  }

}

_defineProperty(password_reset_send_link_PasswordResetSendLink, "propTypes", {
  actions: prop_types_default.a.shape({
    sendPasswordResetEmail: prop_types_default.a.func.isRequired
  }).isRequired
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4!./components/password_reset_send_link/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





const mapDispatchToProps = dispatch => ({
  actions: Object(redux["bindActionCreators"])({
    sendPasswordResetEmail: users["sendPasswordResetEmail"]
  }, dispatch)
});

/* harmony default export */ var password_reset_send_link = __webpack_exports__["default"] = (Object(es["connect"])(null, mapDispatchToProps)(password_reset_send_link_PasswordResetSendLink));

/***/ })

}]);
//# sourceMappingURL=24.925d3a8b099c202ab2ca.js.map
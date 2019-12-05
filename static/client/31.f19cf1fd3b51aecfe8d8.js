(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ 3466:
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

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(33);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.es.js + 1 modules
var index_es = __webpack_require__(52);

// EXTERNAL MODULE: ./utils/browser_history.jsx
var browser_history = __webpack_require__(114);

// EXTERNAL MODULE: ./utils/constants.jsx
var constants = __webpack_require__(0);

// EXTERNAL MODULE: ./components/localized_input/localized_input.jsx
var localized_input = __webpack_require__(1577);

// EXTERNAL MODULE: ./utils/i18n.jsx
var i18n = __webpack_require__(53);

// CONCATENATED MODULE: ./components/password_reset_form/password_reset_form.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.








class password_reset_form_PasswordResetForm extends react_default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "handlePasswordReset", async e => {
      e.preventDefault();
      const password = react_dom_default.a.findDOMNode(this.refs.password).value;

      if (!password || password.length < constants["N" /* default */].MIN_PASSWORD_LENGTH) {
        this.setState({
          error: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "password_form.error",
            defaultMessage: "Please enter at least {chars} characters.",
            values: {
              chars: constants["N" /* default */].MIN_PASSWORD_LENGTH
            }
          })
        });
        return;
      }

      this.setState({
        error: null
      });
      const token = new URLSearchParams(this.props.location.search).get('token');
      const {
        data,
        error
      } = await this.props.actions.resetUserPassword(token, password);

      if (data) {
        browser_history["a" /* browserHistory */].push('/login?extra=' + constants["N" /* default */].PASSWORD_CHANGE);
        this.setState({
          error: null
        });
      } else if (error) {
        this.setState({
          error: error.message
        });
      }
    });

    this.state = {
      error: null
    };
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

    return react_default.a.createElement("div", {
      className: "col-sm-12"
    }, react_default.a.createElement("div", {
      className: "signup-team__container"
    }, react_default.a.createElement("h3", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "password_form.title",
      defaultMessage: "Password Reset"
    })), react_default.a.createElement("form", {
      onSubmit: this.handlePasswordReset
    }, react_default.a.createElement("p", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "password_form.enter",
      defaultMessage: "Enter a new password for your {siteName} account.",
      values: {
        siteName: this.props.siteName
      }
    })), react_default.a.createElement("div", {
      className: formClass
    }, react_default.a.createElement(localized_input["a" /* default */], {
      id: "resetPasswordInput",
      type: "password",
      className: "form-control",
      name: "password",
      ref: "password",
      placeholder: {
        id: Object(i18n["b" /* t */])('password_form.pwd'),
        defaultMessage: 'Password'
      },
      spellCheck: "false",
      autoFocus: true
    })), error, react_default.a.createElement("button", {
      id: "resetPasswordButton",
      type: "submit",
      className: "btn btn-primary"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "password_form.change",
      defaultMessage: "Change my password"
    })))));
  }

}

_defineProperty(password_reset_form_PasswordResetForm, "propTypes", {
  location: prop_types_default.a.object.isRequired,
  siteName: prop_types_default.a.string,
  actions: prop_types_default.a.shape({
    resetUserPassword: prop_types_default.a.func.isRequired
  }).isRequired
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4!./components/password_reset_form/index.js
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
    resetUserPassword: users["resetUserPassword"]
  }, dispatch)
});

/* harmony default export */ var password_reset_form = __webpack_exports__["default"] = (Object(es["connect"])(mapStateToProps, mapDispatchToProps)(password_reset_form_PasswordResetForm));

/***/ })

}]);
//# sourceMappingURL=31.f19cf1fd3b51aecfe8d8.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

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

/***/ 1753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52);
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.


class LogoutIcon extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__[/* FormattedMessage */ "c"], {
      id: "generic_icons.logout",
      defaultMessage: "Logout Icon"
    }, title => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-1x fa-angle-left",
      title: title
    }));
  }

}

/***/ }),

/***/ 1815:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return activateMfa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deactivateMfa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return generateMfaSecret; });
/* harmony import */ var mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_1__);
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.


function activateMfa(code) {
  return (dispatch, getState) => {
    const currentUserId = Object(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_1__["getCurrentUserId"])(getState());
    return dispatch(mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_0__["updateUserMfa"](currentUserId, true, code));
  };
}
function deactivateMfa() {
  return (dispatch, getState) => {
    const currentUserId = Object(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_1__["getCurrentUserId"])(getState());
    return dispatch(mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_0__["updateUserMfa"](currentUserId, false));
  };
}
function generateMfaSecret() {
  return (dispatch, getState) => {
    const currentUserId = Object(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_1__["getCurrentUserId"])(getState());
    return dispatch(mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_0__["generateMfaSecret"](currentUserId));
  };
}

/***/ }),

/***/ 3441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 15 modules
var es = __webpack_require__(405);

// EXTERNAL MODULE: ./mattermost-redux/selectors/entities/general.js
var general = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(6);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(1);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.es.js + 1 modules
var index_es = __webpack_require__(52);

// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(433);

// EXTERNAL MODULE: ./actions/global_actions.jsx
var global_actions = __webpack_require__(1567);

// EXTERNAL MODULE: ./images/logo.png
var logo = __webpack_require__(1592);
var logo_default = /*#__PURE__*/__webpack_require__.n(logo);

// EXTERNAL MODULE: ./components/common/back_button.jsx
var back_button = __webpack_require__(1587);

// EXTERNAL MODULE: ./components/icon/logout_icon.jsx
var logout_icon = __webpack_require__(1753);

// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(16);

// EXTERNAL MODULE: ./mattermost-redux/selectors/entities/users.js
var users = __webpack_require__(10);

// EXTERNAL MODULE: ./actions/views/mfa.js
var views_mfa = __webpack_require__(1815);

// EXTERNAL MODULE: ./utils/utils.jsx + 1 modules
var utils = __webpack_require__(22);

// EXTERNAL MODULE: ./utils/i18n.jsx
var i18n = __webpack_require__(53);

// EXTERNAL MODULE: ./components/formatted_markdown_message.jsx
var formatted_markdown_message = __webpack_require__(1564);

// EXTERNAL MODULE: ./components/localized_input/localized_input.jsx
var localized_input = __webpack_require__(1577);

// CONCATENATED MODULE: ./components/mfa/setup/setup.jsx
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.







class setup_Setup extends react_default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "submit", e => {
      e.preventDefault();
      const code = this.refs.code.value.replace(/\s/g, '');

      if (!code || code.length === 0) {
        this.setState({
          error: utils["gb" /* localizeMessage */]('mfa.setup.codeError', 'Please enter the code from Google Authenticator.')
        });
        return;
      }

      this.setState({
        error: null
      });
      this.props.actions.activateMfa(code).then(({
        error
      }) => {
        if (error) {
          if (error.server_error_id === 'ent.mfa.activate.authenticate.app_error') {
            this.setState({
              error: utils["gb" /* localizeMessage */]('mfa.setup.badCode', 'Invalid code. If this issue persists, contact your System Administrator.')
            });
          } else {
            this.setState({
              error: error.message
            });
          }

          return;
        }

        this.props.history.push('/mfa/confirm');
      });
    });

    this.state = {
      secret: '',
      qrCode: ''
    };
  }

  componentDidMount() {
    const user = this.props.currentUser;

    if (!user || user.mfa_active) {
      this.props.history.push('/');
      return;
    }

    this.props.actions.generateMfaSecret().then(({
      data,
      error
    }) => {
      if (error) {
        this.setState({
          serverError: error.message
        });
        return;
      }

      this.setState({
        secret: data.secret,
        qrCode: data.qr_code
      });
    });
  }

  render() {
    let formClass = 'form-group';
    let errorContent;

    if (this.state.error) {
      errorContent = react_default.a.createElement("div", {
        className: "form-group has-error"
      }, react_default.a.createElement("label", {
        className: "control-label"
      }, this.state.error));
      formClass += ' has-error';
    }

    let mfaRequired;

    if (this.props.enforceMultifactorAuthentication) {
      mfaRequired = react_default.a.createElement("p", null, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
        id: "mfa.setup.required",
        defaultMessage: "**Multi-factor authentication is required on {siteName}.**",
        values: {
          siteName: this.props.siteName
        }
      }));
    }

    return react_default.a.createElement("div", null, react_default.a.createElement("form", {
      onSubmit: this.submit,
      className: formClass
    }, mfaRequired, react_default.a.createElement("p", null, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
      id: "mfa.setup.step1",
      defaultMessage: "**Step 1: **On your phone, download Google Authenticator from [iTunes](!https://itunes.apple.com/us/app/google-authenticator/id388497605?mt=8') or [Google Play](!https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en)"
    })), react_default.a.createElement("p", null, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
      id: "mfa.setup.step2",
      defaultMessage: "**Step 2: **Use Google Authenticator to scan this QR code, or manually type in the secret key"
    })), react_default.a.createElement("div", {
      className: "form-group"
    }, react_default.a.createElement("div", {
      className: "col-sm-12"
    }, react_default.a.createElement("img", {
      alt: 'qr code image',
      style: style.qrCode,
      src: 'data:image/png;base64,' + this.state.qrCode
    }))), react_default.a.createElement("br", null), react_default.a.createElement("div", {
      className: "form-group"
    }, react_default.a.createElement("p", {
      className: "col-sm-12"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "mfa.setup.secret",
      defaultMessage: "Secret: {secret}",
      values: {
        secret: this.state.secret
      }
    }))), react_default.a.createElement("p", null, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
      id: "mfa.setup.step3",
      defaultMessage: "**Step 3: **Enter the code generated by Google Authenticator"
    })), react_default.a.createElement("p", null, react_default.a.createElement(localized_input["a" /* default */], {
      ref: "code",
      className: "form-control",
      placeholder: {
        id: Object(i18n["b" /* t */])('mfa.setup.code'),
        defaultMessage: 'MFA Code'
      },
      autoFocus: true
    })), errorContent, react_default.a.createElement("button", {
      type: "submit",
      className: "btn btn-primary"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "mfa.setup.save",
      defaultMessage: "Save"
    }))));
  }

}

_defineProperty(setup_Setup, "propTypes", {
  currentUser: prop_types_default.a.object,
  siteName: prop_types_default.a.string,
  enforceMultifactorAuthentication: prop_types_default.a.bool.isRequired,
  actions: prop_types_default.a.shape({
    activateMfa: prop_types_default.a.func.isRequired,
    generateMfaSecret: prop_types_default.a.func.isRequired
  }).isRequired
});

const style = {
  qrCode: {
    maxHeight: 170
  }
};
// CONCATENATED MODULE: ./components/mfa/setup/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.







function mapStateToProps(state) {
  const config = Object(general["getConfig"])(state);
  const siteName = config.SiteName;
  const enforceMultifactorAuthentication = config.EnforceMultifactorAuthentication === 'true';
  return {
    currentUser: Object(users["getCurrentUser"])(state),
    siteName,
    enforceMultifactorAuthentication
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux["bindActionCreators"])({
      activateMfa: views_mfa["a" /* activateMfa */],
      generateMfaSecret: views_mfa["c" /* generateMfaSecret */]
    }, dispatch)
  };
}

/* harmony default export */ var setup = (Object(es["connect"])(mapStateToProps, mapDispatchToProps)(setup_Setup));
// EXTERNAL MODULE: ./utils/constants.jsx
var constants = __webpack_require__(0);

// CONCATENATED MODULE: ./components/mfa/confirm.jsx
function confirm_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






const KeyCodes = constants["N" /* default */].KeyCodes;
class confirm_Confirm extends react_default.a.Component {
  constructor(...args) {
    super(...args);

    confirm_defineProperty(this, "submit", e => {
      e.preventDefault();
      Object(global_actions["f" /* redirectUserToDefaultTeam */])();
    });

    confirm_defineProperty(this, "onKeyPress", e => {
      if (Object(utils["V" /* isKeyPressed */])(e, KeyCodes.ENTER)) {
        this.submit(e);
      }
    });
  }

  componentDidMount() {
    document.body.addEventListener('keydown', this.onKeyPress);
  }

  componentWillUnmount() {
    document.body.removeEventListener('keydown', this.onKeyPress);
  }

  render() {
    return react_default.a.createElement("div", null, react_default.a.createElement("form", {
      onSubmit: this.submit,
      onKeyPress: this.onKeyPress,
      className: "form-group"
    }, react_default.a.createElement("p", null, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
      id: "mfa.confirm.complete",
      defaultMessage: "**Set up complete!**"
    })), react_default.a.createElement("p", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "mfa.confirm.secure",
      defaultMessage: "Your account is now secure. Next time you sign in, you will be asked to enter a code from the Google Authenticator app on your phone."
    })), react_default.a.createElement("button", {
      type: "submit",
      className: "btn btn-primary"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "mfa.confirm.okay",
      defaultMessage: "Okay"
    }))));
  }

}
// CONCATENATED MODULE: ./components/mfa/mfa_controller/mfa_controller.jsx
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function mfa_controller_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.










class mfa_controller_MFAController extends react_default.a.Component {
  constructor(...args) {
    super(...args);

    mfa_controller_defineProperty(this, "handleOnClick", e => {
      e.preventDefault();
      Object(global_actions["e" /* emitUserLoggedOutEvent */])('/login');
    });
  }

  componentDidMount() {
    document.body.classList.add('sticky');
    document.getElementById('root').classList.add('container-fluid');

    if (!this.props.enableMultifactorAuthentication) {
      this.props.history.push('/');
    }
  }

  componentWillUnmount() {
    document.body.classList.remove('sticky');
    document.getElementById('root').classList.remove('container-fluid');
  }

  render() {
    let backButton;

    if (this.props.mfa && this.props.enforceMultifactorAuthentication) {
      backButton = react_default.a.createElement("div", {
        className: "signup-header"
      }, react_default.a.createElement("button", {
        className: "style--none color--link",
        onClick: this.handleOnClick
      }, react_default.a.createElement(logout_icon["a" /* default */], null), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "web.header.logout",
        defaultMessage: "Logout"
      })));
    } else {
      backButton = react_default.a.createElement(back_button["a" /* default */], null);
    }

    return react_default.a.createElement("div", {
      className: "inner-wrap"
    }, react_default.a.createElement("div", {
      className: "row content"
    }, react_default.a.createElement("div", null, backButton, react_default.a.createElement("div", {
      className: "col-sm-12"
    }, react_default.a.createElement("div", {
      className: "signup-team__container"
    }, react_default.a.createElement("h3", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "mfa.setupTitle",
      defaultMessage: "Multi-factor Authentication Setup"
    })), react_default.a.createElement("img", {
      alt: 'signup team logo',
      className: "signup-team-logo",
      src: logo_default.a
    }), react_default.a.createElement("div", {
      id: "mfa"
    }, react_default.a.createElement(react_router["d" /* Switch */], null, react_default.a.createElement(react_router["b" /* Route */], {
      path: `${this.props.match.url}/setup`,
      render: props => react_default.a.createElement(setup, _extends({
        state: this.state,
        updateParent: this.updateParent
      }, props))
    }), react_default.a.createElement(react_router["b" /* Route */], {
      path: `${this.props.match.url}/confirm`,
      render: props => react_default.a.createElement(confirm_Confirm, _extends({
        state: this.state,
        updateParent: this.updateParent
      }, props))
    }))))))));
  }

}
mfa_controller_MFAController.propTypes = {
  location: prop_types_default.a.object.isRequired,
  children: prop_types_default.a.node,
  mfa: prop_types_default.a.bool.isRequired,
  enableMultifactorAuthentication: prop_types_default.a.bool.isRequired,
  enforceMultifactorAuthentication: prop_types_default.a.bool.isRequired,

  /*
   * Object from react-router
   */
  match: prop_types_default.a.shape({
    url: prop_types_default.a.string.isRequired
  }).isRequired
};
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4!./components/mfa/mfa_controller/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.




function mfa_controller_mapStateToProps(state) {
  const license = Object(general["getLicense"])(state);
  const config = Object(general["getConfig"])(state);
  const mfa = license.MFA === 'true';
  const enableMultifactorAuthentication = config.EnableMultifactorAuthentication === 'true';
  const enforceMultifactorAuthentication = config.EnforceMultifactorAuthentication === 'true';
  return {
    mfa,
    enableMultifactorAuthentication,
    enforceMultifactorAuthentication
  };
}

/* harmony default export */ var mfa_controller = __webpack_exports__["default"] = (Object(es["connect"])(mfa_controller_mapStateToProps)(mfa_controller_MFAController));

/***/ })

}]);
//# sourceMappingURL=13.25ce591dbd2bad214fc0.js.map
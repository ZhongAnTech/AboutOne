(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

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

/***/ 3457:
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

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(6);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(1);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-bootstrap/es/ButtonGroup.js
var ButtonGroup = __webpack_require__(1771);

// EXTERNAL MODULE: ./node_modules/react-bootstrap/es/Button.js
var Button = __webpack_require__(1693);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.es.js + 1 modules
var index_es = __webpack_require__(52);

// EXTERNAL MODULE: ./mattermost-redux/utils/helpers.js
var helpers = __webpack_require__(72);

// EXTERNAL MODULE: ./actions/global_actions.jsx
var global_actions = __webpack_require__(1567);

// EXTERNAL MODULE: ./components/announcement_bar/index.js + 9 modules
var announcement_bar = __webpack_require__(1664);

// EXTERNAL MODULE: ./components/loading_screen.jsx
var loading_screen = __webpack_require__(1569);

// EXTERNAL MODULE: ./components/widgets/loading/loading_spinner.jsx
var loading_spinner = __webpack_require__(1651);

// EXTERNAL MODULE: ./components/icon/logout_icon.jsx
var logout_icon = __webpack_require__(1753);

// EXTERNAL MODULE: ./components/icon/warning_icon.jsx
var warning_icon = __webpack_require__(1621);

// EXTERNAL MODULE: ./utils/browser_history.jsx
var browser_history = __webpack_require__(114);

// EXTERNAL MODULE: ./utils/message_html_to_component.jsx + 3 modules
var message_html_to_component = __webpack_require__(1684);

// EXTERNAL MODULE: ./utils/text_formatting.jsx
var text_formatting = __webpack_require__(81);

// EXTERNAL MODULE: ./utils/constants.jsx
var constants = __webpack_require__(0);

// CONCATENATED MODULE: ./components/terms_of_service/terms_of_service.jsx
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.















class terms_of_service_TermsOfService extends react_default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "getTermsOfService", async () => {
      this.setState({
        customTermsOfServiceId: '',
        customTermsOfServiceText: '',
        loading: true
      });
      const {
        data
      } = await this.props.actions.getTermsOfService();

      if (data) {
        this.setState({
          customTermsOfServiceId: data.id,
          customTermsOfServiceText: data.text,
          loading: false
        });
      } else {
        global_actions["e" /* emitUserLoggedOutEvent */](`/login?extra=${constants["g" /* Constants */].GET_TERMS_ERROR}`);
      }
    });

    _defineProperty(this, "handleLogoutClick", e => {
      e.preventDefault();
      global_actions["e" /* emitUserLoggedOutEvent */]('/login');
    });

    _defineProperty(this, "handleAcceptTerms", () => {
      this.setState({
        loadingAgree: true,
        serverError: null
      });
      this.registerUserAction(true, () => {
        const query = new URLSearchParams(this.props.location.search);
        const redirectTo = query.get('redirect_to');

        if (redirectTo && redirectTo.match(/^\/([^/]|$)/)) {
          browser_history["a" /* browserHistory */].push(redirectTo);
        } else {
          global_actions["f" /* redirectUserToDefaultTeam */]();
        }
      });
    });

    _defineProperty(this, "handleRejectTerms", () => {
      this.setState({
        loadingDisagree: true,
        serverError: null
      });
      this.registerUserAction(false, () => {
        global_actions["e" /* emitUserLoggedOutEvent */](`/login?extra=${constants["g" /* Constants */].TERMS_REJECTED}`);
      });
    });

    _defineProperty(this, "registerUserAction", async (accepted, success) => {
      const {
        data
      } = await this.props.actions.updateMyTermsOfServiceStatus(this.state.customTermsOfServiceId, accepted);

      if (data) {
        success(data);
      } else {
        this.setState({
          loadingAgree: false,
          loadingDisagree: false,
          serverError: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "terms_of_service.api_error",
            defaultMessage: "Unable to complete the request. If this issue persists, contact your System Administrator."
          })
        });
      }
    });

    this.state = {
      customTermsOfServiceId: '',
      customTermsOfServiceText: '',
      loading: true,
      loadingAgree: false,
      loadingDisagree: false,
      serverError: null
    };
    this.formattedText = Object(helpers["memoizeResult"])(text => Object(text_formatting["e" /* formatText */])(text));
  }

  componentDidMount() {
    if (this.props.termsEnabled) {
      this.getTermsOfService();
    } else {
      global_actions["f" /* redirectUserToDefaultTeam */]();
    }
  }

  render() {
    if (this.state.loading) {
      return react_default.a.createElement(loading_screen["a" /* default */], null);
    }

    let termsMarkdownClasses = 'terms-of-service__markdown';

    if (this.state.serverError) {
      termsMarkdownClasses += ' terms-of-service-error__height--fill';
    } else {
      termsMarkdownClasses += ' terms-of-service__height--fill';
    }

    return react_default.a.createElement("div", null, react_default.a.createElement(announcement_bar["a" /* default */], null), react_default.a.createElement("div", {
      className: "signup-header"
    }, react_default.a.createElement("a", {
      href: "#",
      onClick: this.handleLogoutClick
    }, react_default.a.createElement(logout_icon["a" /* default */], null), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "web.header.logout",
      defaultMessage: "Logout"
    }))), react_default.a.createElement("div", null, react_default.a.createElement("div", {
      className: "signup-team__container terms-of-service__container"
    }, react_default.a.createElement("div", {
      className: termsMarkdownClasses
    }, react_default.a.createElement("div", {
      className: "medium-center"
    }, Object(message_html_to_component["a" /* default */])(this.formattedText(this.state.customTermsOfServiceText), false, {
      mentions: false
    }))), react_default.a.createElement("div", {
      className: "terms-of-service__footer medium-center"
    }, react_default.a.createElement(ButtonGroup["a" /* default */], {
      className: "terms-of-service__button-group"
    }, react_default.a.createElement(Button["a" /* default */], {
      bsStyle: 'primary',
      disabled: this.state.loadingAgree || this.state.loadingDisagree,
      id: "acceptTerms",
      onClick: this.handleAcceptTerms,
      type: "submit"
    }, this.state.loadingAgree && react_default.a.createElement(loading_spinner["a" /* default */], null), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "terms_of_service.agreeButton",
      defaultMessage: 'I Agree'
    })), react_default.a.createElement(Button["a" /* default */], {
      bsStyle: 'link',
      disabled: this.state.loadingAgree || this.state.loadingDisagree,
      id: "rejectTerms",
      onClick: this.handleRejectTerms,
      type: "reset"
    }, this.state.loadingDisagree && react_default.a.createElement(loading_spinner["a" /* default */], null), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "terms_of_service.disagreeButton",
      defaultMessage: 'I Disagree'
    }))), Boolean(this.state.serverError) && react_default.a.createElement("div", {
      className: "terms-of-service__server-error alert alert-warning"
    }, react_default.a.createElement(warning_icon["a" /* default */], null), ' ', this.state.serverError)))));
  }

}

_defineProperty(terms_of_service_TermsOfService, "propTypes", {
  location: prop_types_default.a.object,
  termsEnabled: prop_types_default.a.bool.isRequired,
  actions: prop_types_default.a.shape({
    getTermsOfService: prop_types_default.a.func.isRequired,
    updateMyTermsOfServiceStatus: prop_types_default.a.func.isRequired
  }).isRequired
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4!./components/terms_of_service/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






function mapStateToProps(state) {
  const config = Object(general["getConfig"])(state);
  return {
    termsEnabled: config.EnableCustomTermsOfService === 'true'
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux["bindActionCreators"])({
      getTermsOfService: users["getTermsOfService"],
      updateMyTermsOfServiceStatus: users["updateMyTermsOfServiceStatus"]
    }, dispatch)
  };
}

/* harmony default export */ var terms_of_service = __webpack_exports__["default"] = (Object(es["connect"])(mapStateToProps, mapDispatchToProps)(terms_of_service_TermsOfService));

/***/ })

}]);
//# sourceMappingURL=26.c454ff029aa0c3a33c22.js.map
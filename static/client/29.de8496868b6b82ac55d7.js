(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ 3474:
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

// CONCATENATED MODULE: ./components/header_footer_template/header_footer_template.jsx
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.



class header_footer_template_NotLoggedIn extends react_default.a.PureComponent {
  componentDidMount() {
    document.body.classList.add('sticky');
    document.getElementById('root').classList.add('container-fluid');
  }

  componentWillUnmount() {
    document.body.classList.remove('sticky');
    document.getElementById('root').classList.remove('container-fluid');
  }

  render() {
    const content = [];

    if (this.props.config.AboutLink) {
      content.push(react_default.a.createElement("a", {
        key: "about_link",
        id: "about_link",
        className: "footer-link",
        target: "_blank",
        rel: "noopener noreferrer",
        href: this.props.config.AboutLink
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "web.footer.about"
      })));
    }

    if (this.props.config.PrivacyPolicyLink) {
      content.push(react_default.a.createElement("a", {
        key: "privacy_link",
        id: "privacy_link",
        className: "footer-link",
        target: "_blank",
        rel: "noopener noreferrer",
        href: this.props.config.PrivacyPolicyLink
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "web.footer.privacy"
      })));
    }

    if (this.props.config.TermsOfServiceLink) {
      content.push(react_default.a.createElement("a", {
        key: "terms_link",
        id: "terms_link",
        className: "footer-link",
        target: "_blank",
        rel: "noopener noreferrer",
        href: this.props.config.TermsOfServiceLink
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "web.footer.terms"
      })));
    }

    if (this.props.config.HelpLink) {
      content.push(react_default.a.createElement("a", {
        key: "help_link",
        id: "help_link",
        className: "footer-link",
        target: "_blank",
        rel: "noopener noreferrer",
        href: this.props.config.HelpLink
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "web.footer.help"
      })));
    }

    return react_default.a.createElement("div", {
      className: "inner-wrap"
    }, react_default.a.createElement("div", {
      className: "row content"
    }, this.props.children), react_default.a.createElement("div", {
      className: "row footer"
    }, react_default.a.createElement("div", {
      id: "footer_section",
      className: "footer-pane col-xs-12"
    }, react_default.a.createElement("div", {
      className: "col-xs-12"
    }, react_default.a.createElement("span", {
      id: "company_name",
      className: "pull-right footer-site-name"
    }, 'Aboutone')), react_default.a.createElement("div", {
      className: "col-xs-12"
    }, react_default.a.createElement("span", {
      id: "copyright",
      className: "pull-right footer-link copyright"
    }, `© 2015-${new Date().getFullYear()} Mattermost, Inc.`), react_default.a.createElement("span", {
      className: "pull-right"
    }, content)))));
  }

}

_defineProperty(header_footer_template_NotLoggedIn, "propTypes", {
  /*
   * Content of the page
   */
  children: prop_types_default.a.object,

  /*
   * Mattermost configuration
   */
  config: prop_types_default.a.object
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4!./components/header_footer_template/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.




function mapStateToProps(state) {
  return {
    config: Object(general["getConfig"])(state)
  };
}

/* harmony default export */ var header_footer_template = __webpack_exports__["default"] = (Object(es["connect"])(mapStateToProps)(header_footer_template_NotLoggedIn));

/***/ })

}]);
//# sourceMappingURL=29.de8496868b6b82ac55d7.js.map
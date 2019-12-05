(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ 3336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SettingsSidebar; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(175);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils_user_agent_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39);
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.




class SettingsSidebar extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(tab, e) {
    e.preventDefault();
    this.props.updateTab(tab.name);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).closest('.settings-modal').addClass('display--content');
  }

  componentDidMount() {
    if (utils_user_agent_jsx__WEBPACK_IMPORTED_MODULE_3__[/* isFirefox */ "e"]()) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.settings-modal .settings-table .nav').addClass('position--top');
    }
  }

  render() {
    const tabList = this.props.tabs.map(tab => {
      const key = `${tab.name}_li`;
      let className = '';

      if (this.props.activeTab === tab.name) {
        className = 'active';
      }

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
        id: `${tab.name}Li`,
        key: key,
        className: className
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
        id: `${tab.name}Button`,
        className: "cursor--pointer style--none",
        onClick: this.handleClick.bind(null, tab),
        "aria-label": tab.uiName.toLowerCase()
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
        className: tab.icon,
        title: tab.iconTitle
      }), tab.uiName));
    });
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
      id: "tabList",
      className: "nav nav-pills nav-stacked"
    }, tabList));
  }

}
SettingsSidebar.propTypes = {
  tabs: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    uiName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  })).isRequired,
  activeTab: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  updateTab: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

/***/ })

}]);
//# sourceMappingURL=33.707e82d0ac2a0604b865.js.map
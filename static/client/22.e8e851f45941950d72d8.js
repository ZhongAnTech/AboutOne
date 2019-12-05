(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ 3420:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "files/b0f8a0cc3e361903e4866d17e3a33c29.png";

/***/ }),

/***/ 3421:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "files/fabc8183ff4619599dacbafce858e1f4.png";

/***/ }),

/***/ 3464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 15 modules
var es = __webpack_require__(405);

// EXTERNAL MODULE: ./mattermost-redux/selectors/entities/general.js
var general = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(1);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.es.js + 1 modules
var index_es = __webpack_require__(52);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(6);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./utils/url.jsx + 1 modules
var url = __webpack_require__(298);

// EXTERNAL MODULE: ./images/app-store-button.png
var app_store_button = __webpack_require__(3420);
var app_store_button_default = /*#__PURE__*/__webpack_require__.n(app_store_button);

// EXTERNAL MODULE: ./images/iphone-6-mockup.png
var iphone_6_mockup = __webpack_require__(3421);
var iphone_6_mockup_default = /*#__PURE__*/__webpack_require__.n(iphone_6_mockup);

// CONCATENATED MODULE: ./components/get_ios_app/get_ios_app.jsx
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






function GetIosApp({
  iosAppDownloadLink,
  history,
  location
}) {
  const onContinue = e => {
    e.preventDefault();
    const redirectTo = new URLSearchParams(location.search).get('redirect_to');

    if (redirectTo) {
      history.push(redirectTo);
    } else {
      history.push('/');
    }
  };

  return react_default.a.createElement("div", {
    className: "get-app get-ios-app"
  }, react_default.a.createElement("h1", {
    className: "get-app__header"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "get_app.iosHeader",
    defaultMessage: "Mattermost works best if you switch to our iPhone app"
  })), react_default.a.createElement("hr", null), react_default.a.createElement("a", {
    className: "get-ios-app__app-store-link",
    href: Object(url["g" /* useSafeUrl */])(iosAppDownloadLink),
    rel: "noopener noreferrer"
  }, react_default.a.createElement("img", {
    alt: 'app store button',
    src: app_store_button_default.a
  })), react_default.a.createElement("img", {
    alt: 'get app screenshot',
    className: "get-app__screenshot",
    src: iphone_6_mockup_default.a
  }), react_default.a.createElement("h2", {
    className: "get-ios-app__already-have-it"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "get_app.alreadyHaveIt",
    defaultMessage: "Already have it?"
  })), react_default.a.createElement("a", {
    className: "btn btn-primary get-ios-app__open-mattermost",
    href: "mattermost://"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "get_app.openMattermost",
    defaultMessage: "Open Mattermost"
  })), react_default.a.createElement("span", {
    className: "get-app__continue-with-browser"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "get_app.continueWithBrowser",
    defaultMessage: "Or {link}",
    values: {
      link: react_default.a.createElement("a", {
        onClick: onContinue,
        className: "get-ios-app__continue"
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "get_app.continueWithBrowserLink",
        defaultMessage: "continue with browser"
      }))
    }
  })));
}
GetIosApp.propTypes = {
  iosAppDownloadLink: prop_types_default.a.string
};
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4!./components/get_ios_app/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.




function mapStateToProps(state) {
  const config = Object(general["getConfig"])(state);
  const iosAppDownloadLink = config.IosAppDownloadLink;
  return {
    iosAppDownloadLink
  };
}

/* harmony default export */ var get_ios_app = __webpack_exports__["default"] = (Object(es["connect"])(mapStateToProps)(GetIosApp));

/***/ })

}]);
//# sourceMappingURL=22.e8e851f45941950d72d8.js.map
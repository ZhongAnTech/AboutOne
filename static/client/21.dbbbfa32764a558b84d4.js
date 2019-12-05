(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ 3422:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "files/39a3d4c9dccd0aa99c5c4b360c604946.png";

/***/ }),

/***/ 3423:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "files/7aea9f00056dcb50e4751959fc8711cf.png";

/***/ }),

/***/ 3465:
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

// EXTERNAL MODULE: ./images/favicon/android-chrome-192x192.png
var android_chrome_192x192 = __webpack_require__(3422);
var android_chrome_192x192_default = /*#__PURE__*/__webpack_require__.n(android_chrome_192x192);

// EXTERNAL MODULE: ./images/nexus-6p-mockup.png
var nexus_6p_mockup = __webpack_require__(3423);
var nexus_6p_mockup_default = /*#__PURE__*/__webpack_require__.n(nexus_6p_mockup);

// CONCATENATED MODULE: ./components/get_android_app/get_android_app.jsx
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






function GetAndroidApp({
  androidAppDownloadLink,
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
    className: "get-app get-android-app"
  }, react_default.a.createElement("h1", {
    className: "get-app__header"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "get_app.androidHeader",
    defaultMessage: "Mattermost works best if you switch to our Android app"
  })), react_default.a.createElement("hr", null), react_default.a.createElement("div", null, react_default.a.createElement("img", {
    alt: 'android app icon',
    className: "get-android-app__icon",
    src: android_chrome_192x192_default.a
  }), react_default.a.createElement("div", {
    className: "get-android-app__app-info"
  }, react_default.a.createElement("span", {
    className: "get-android-app__app-name"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "get_app.androidAppName",
    defaultMessage: "Mattermost for Android"
  })), react_default.a.createElement("span", {
    className: "get-android-app__app-creator"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "get_app.mattermostInc",
    defaultMessage: "Mattermost, Inc"
  })))), react_default.a.createElement("a", {
    className: "btn btn-primary get-android-app__app-store-link",
    href: Object(url["g" /* useSafeUrl */])(androidAppDownloadLink)
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "get_app.continue",
    defaultMessage: "Continue"
  })), react_default.a.createElement("img", {
    alt: 'get app screenshot',
    className: "get-app__screenshot",
    src: nexus_6p_mockup_default.a
  }), react_default.a.createElement("span", {
    className: "get-app__continue-with-browser"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "get_app.continueWithBrowser",
    defaultMessage: "Or {link}",
    values: {
      link: react_default.a.createElement("a", {
        onClick: onContinue,
        className: "get-android-app__continue"
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "get_app.continueWithBrowserLink",
        defaultMessage: "continue with browser"
      }))
    }
  })));
}
GetAndroidApp.propTypes = {
  androidAppDownloadLink: prop_types_default.a.string
};
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4!./components/get_android_app/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.




function mapStateToProps(state) {
  const config = Object(general["getConfig"])(state);
  const androidAppDownloadLink = config.AndroidAppDownloadLink;
  return {
    androidAppDownloadLink
  };
}

/* harmony default export */ var get_android_app = __webpack_exports__["default"] = (Object(es["connect"])(mapStateToProps)(GetAndroidApp));

/***/ })

}]);
//# sourceMappingURL=21.dbbbfa32764a558b84d4.js.map
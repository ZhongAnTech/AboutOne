(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ 2234:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2237:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 15 modules
var es = __webpack_require__(405);

// EXTERNAL MODULE: ./mattermost-redux/selectors/entities/general.js
var general = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/crypto-browserify/index.js
var crypto_browserify = __webpack_require__(2217);
var crypto_browserify_default = /*#__PURE__*/__webpack_require__.n(crypto_browserify);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(6);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(1);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.es.js + 1 modules
var index_es = __webpack_require__(52);

// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js + 1 modules
var react_router_dom = __webpack_require__(1553);

// EXTERNAL MODULE: ./utils/constants.jsx
var constants = __webpack_require__(0);

// EXTERNAL MODULE: ./components/icon/warning_icon.jsx
var warning_icon = __webpack_require__(1621);

// EXTERNAL MODULE: ./utils/utils.jsx + 1 modules
var utils = __webpack_require__(22);

// CONCATENATED MODULE: ./components/error_page/error_title.jsx
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





function ErrorTitle({
  type,
  title
}) {
  let errorTitle = null;

  if (type) {
    switch (type) {
      case constants["i" /* ErrorPageTypes */].LOCAL_STORAGE:
        errorTitle = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "error.local_storage.title",
          defaultMessage: "Cannot Load Mattermost"
        });
        break;

      case constants["i" /* ErrorPageTypes */].PERMALINK_NOT_FOUND:
        errorTitle = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "permalink.error.title",
          defaultMessage: "Message Not Found"
        });
        break;

      case constants["i" /* ErrorPageTypes */].OAUTH_ACCESS_DENIED:
        errorTitle = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "error.oauth_access_denied.title",
          defaultMessage: "Authorization Error"
        });
        break;

      case constants["i" /* ErrorPageTypes */].OAUTH_MISSING_CODE:
        errorTitle = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "error.oauth_missing_code.title",
          defaultMessage: "Mattermost needs your help"
        });
        break;

      case constants["i" /* ErrorPageTypes */].TEAM_NOT_FOUND:
        errorTitle = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "error.team_not_found.title",
          defaultMessage: "Team Not Found"
        });
        break;

      case constants["i" /* ErrorPageTypes */].CHANNEL_NOT_FOUND:
        errorTitle = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "error.channel_not_found.title",
          defaultMessage: "Channel Not Found"
        });
        break;

      case constants["i" /* ErrorPageTypes */].PAGE_NOT_FOUND:
      default:
        errorTitle = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "error.not_found.title",
          defaultMessage: "Page Not Found"
        });
    }
  } else if (title) {
    errorTitle = title;
  } else {
    errorTitle = utils["gb" /* localizeMessage */]('error.generic.title', 'Error');
  }

  return errorTitle;
}
ErrorTitle.propTypes = {
  /*
  * Error type
  */
  type: prop_types_default.a.string,

  /*
  * Error title
  */
  title: prop_types_default.a.string
};
// EXTERNAL MODULE: ./utils/i18n.jsx
var i18n = __webpack_require__(53);

// CONCATENATED MODULE: ./components/error_page/error_link.jsx
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.



function ErrorLink({
  url,
  messageId,
  defaultMessage
}) {
  return react_default.a.createElement("a", {
    href: url,
    rel: "noopener noreferrer",
    target: "_blank"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: messageId,
    defaultMessage: defaultMessage
  }));
}
ErrorLink.propTypes = {
  url: prop_types_default.a.string.isRequired,
  messageId: prop_types_default.a.string.isRequired,
  defaultMessage: prop_types_default.a.string.isRequired
};
ErrorLink.defaultProps = {
  url: '',
  messageId: '',
  defaultMessage: ''
};
// CONCATENATED MODULE: ./components/error_page/error_message.jsx
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






function ErrorMessage({
  type,
  message,
  service
}) {
  let errorMessage = null;

  if (type) {
    switch (type) {
      case constants["i" /* ErrorPageTypes */].LOCAL_STORAGE:
        errorMessage = react_default.a.createElement("div", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "error.local_storage.message",
          defaultMessage: "Mattermost was unable to load because a setting in your browser prevents the use of its local storage features. To allow Mattermost to load, try the following actions:"
        }), react_default.a.createElement("ul", null, react_default.a.createElement("li", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "error.local_storage.help1",
          defaultMessage: "Enable cookies"
        })), react_default.a.createElement("li", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "error.local_storage.help2",
          defaultMessage: "Turn off private browsing"
        })), react_default.a.createElement("li", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "error.local_storage.help3",
          defaultMessage: "Use a supported browser (IE 11, Chrome 61+, Firefox 60+, Safari 12+, Edge 42+)"
        }))));
        break;

      case constants["i" /* ErrorPageTypes */].PERMALINK_NOT_FOUND:
        errorMessage = react_default.a.createElement("p", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "permalink.error.access",
          defaultMessage: "Permalink belongs to a deleted message or to a channel to which you do not have access."
        }));
        break;

      case constants["i" /* ErrorPageTypes */].TEAM_NOT_FOUND:
        errorMessage = react_default.a.createElement("p", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "error.team_not_found.message",
          defaultMessage: "The team you're requesting is private or does not exist. Please contact your Administrator for an invitation."
        }));
        break;

      case constants["i" /* ErrorPageTypes */].CHANNEL_NOT_FOUND:
        errorMessage = react_default.a.createElement("p", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "error.channel_not_found.message",
          defaultMessage: "The team you're requesting is private or does not exist. Please contact your Administrator for an invitation."
        }));
        break;

      case constants["i" /* ErrorPageTypes */].OAUTH_MISSING_CODE:
        errorMessage = react_default.a.createElement("div", null, react_default.a.createElement("p", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "error.oauth_missing_code",
          defaultMessage: "The service provider {service} did not provide an authorization code in the redirect URL.",
          values: {
            service
          }
        })), react_default.a.createElement("p", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "error.oauth_missing_code.google",
          defaultMessage: "For {link} make sure your administrator enabled the Google+ API.",
          values: {
            link: react_default.a.createElement(ErrorLink, {
              url: 'https://docs.mattermost.com/deployment/sso-google.html',
              messageId: Object(i18n["b" /* t */])('error.oauth_missing_code.google.link'),
              defaultMessage: 'Google Apps'
            })
          }
        })), react_default.a.createElement("p", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "error.oauth_missing_code.office365",
          defaultMessage: "For {link} make sure the administrator of your Microsoft organization has enabled the Mattermost app.",
          values: {
            link: react_default.a.createElement(ErrorLink, {
              url: 'https://docs.mattermost.com/deployment/sso-office.html',
              messageId: Object(i18n["b" /* t */])('error.oauth_missing_code.office365.link'),
              defaultMessage: 'Office 365'
            })
          }
        })), react_default.a.createElement("p", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "error.oauth_missing_code.gitlab",
          defaultMessage: "For {link} please make sure you followed the setup instructions.",
          values: {
            link: react_default.a.createElement(ErrorLink, {
              url: 'https://docs.mattermost.com/deployment/sso-gitlab.html',
              messageId: Object(i18n["b" /* t */])('error.oauth_missing_code.gitlab.link'),
              defaultMessage: 'GitLab'
            })
          }
        })), react_default.a.createElement("p", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "error.oauth_missing_code.forum",
          defaultMessage: "If you reviewed the above and are still having trouble with configuration, you may post in our {link} where we'll be happy to help with issues during setup.",
          values: {
            link: react_default.a.createElement(ErrorLink, {
              url: 'https://forum.mattermost.org/c/trouble-shoot',
              messageId: Object(i18n["b" /* t */])('error.oauth_missing_code.forum.link'),
              defaultMessage: 'Troubleshooting forum'
            })
          }
        })));
        break;

      case constants["i" /* ErrorPageTypes */].OAUTH_ACCESS_DENIED:
        errorMessage = react_default.a.createElement("p", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "error.oauth_access_denied",
          defaultMessage: "You must authorize Mattermost to log in with {service}.",
          values: {
            service
          }
        }));
        break;

      case constants["i" /* ErrorPageTypes */].PAGE_NOT_FOUND:
      default:
        errorMessage = react_default.a.createElement("p", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "error.not_found.message",
          defaultMessage: "The page you were trying to reach does not exist"
        }));
    }
  } else if (message) {
    errorMessage = react_default.a.createElement("p", null, message);
  } else {
    errorMessage = react_default.a.createElement("p", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "error.generic.message",
      defaultMessage: "An error has occurred."
    }));
  }

  return errorMessage;
}
ErrorMessage.propTypes = {
  /*
  * Error type
  */
  type: prop_types_default.a.string,

  /*
  * Error message
  */
  message: prop_types_default.a.string,

  /*
  * Service provider
  */
  service: prop_types_default.a.string
};
// CONCATENATED MODULE: ./components/error_page/error_page.jsx
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.









class error_page_ErrorPage extends react_default.a.PureComponent {
  componentDidMount() {
    document.body.setAttribute('class', 'sticky error');
  }

  componentWillUnmount() {
    document.body.removeAttribute('class');
  }

  render() {
    const params = new URLSearchParams(this.props.location.search);
    const signature = params.get('s');
    var trustParams = false;

    if (signature) {
      params.delete('s');
      const key = this.props.asymmetricSigningPublicKey;
      const keyPEM = '-----BEGIN PUBLIC KEY-----\n' + key + '\n-----END PUBLIC KEY-----';
      const verify = crypto_browserify_default.a.createVerify('sha256');
      verify.update('/error?' + params.toString());
      trustParams = verify.verify(keyPEM, signature, 'base64');
    }

    const type = params.get('type');
    const title = trustParams && params.get('title') || '';
    const message = trustParams && params.get('message') || '';
    const service = trustParams && params.get('service') || '';
    const returnTo = trustParams && params.get('returnTo') || '';
    let backButton;

    if (type === constants["i" /* ErrorPageTypes */].PERMALINK_NOT_FOUND && returnTo) {
      backButton = react_default.a.createElement(react_router_dom["a" /* Link */], {
        to: returnTo
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "error.generic.link",
        defaultMessage: "Back to Mattermost"
      }));
    } else if (type === constants["i" /* ErrorPageTypes */].TEAM_NOT_FOUND) {
      backButton = react_default.a.createElement(react_router_dom["a" /* Link */], {
        to: "/"
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "error.generic.link",
        defaultMessage: "Back to {siteName}",
        values: {
          siteName: this.props.siteName
        }
      }));
    } else if (type === constants["i" /* ErrorPageTypes */].CHANNEL_NOT_FOUND) {
      backButton = react_default.a.createElement(react_router_dom["a" /* Link */], {
        to: params.get('returnTo')
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "error.channelNotFound.link",
        defaultMessage: "Back to {defaultChannelName}",
        values: {
          defaultChannelName: constants["g" /* Constants */].DEFAULT_CHANNEL_UI_NAME
        }
      }));
    } else if (type === constants["i" /* ErrorPageTypes */].OAUTH_ACCESS_DENIED || type === constants["i" /* ErrorPageTypes */].OAUTH_MISSING_CODE) {
      backButton = react_default.a.createElement(react_router_dom["a" /* Link */], {
        to: "/"
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "error.generic.link_login",
        defaultMessage: "Back to login page"
      }));
    } else {
      backButton = react_default.a.createElement(react_router_dom["a" /* Link */], {
        to: "/"
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "error.generic.link",
        defaultMessage: "Back to {siteName}",
        values: {
          siteName: this.props.siteName
        }
      }));
    }

    return react_default.a.createElement("div", {
      className: "container-fluid"
    }, react_default.a.createElement("div", {
      className: "error__container"
    }, react_default.a.createElement("div", {
      className: "error__icon"
    }, react_default.a.createElement(warning_icon["a" /* default */], null)), react_default.a.createElement("h2", null, react_default.a.createElement(ErrorTitle, {
      type: type,
      title: title
    })), react_default.a.createElement(ErrorMessage, {
      type: type,
      message: message,
      service: service
    }), backButton));
  }

}

_defineProperty(error_page_ErrorPage, "propTypes", {
  location: prop_types_default.a.object.isRequired,
  asymmetricSigningPublicKey: prop_types_default.a.string,
  siteName: prop_types_default.a.string
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4!./components/error_page/index.jsx
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.




function mapStateToProps(state) {
  const config = Object(general["getConfig"])(state);
  return {
    siteName: config.SiteName,
    asymmetricSigningPublicKey: config.AsymmetricSigningPublicKey
  };
}

/* harmony default export */ var error_page = __webpack_exports__["default"] = (Object(es["connect"])(mapStateToProps)(error_page_ErrorPage));

/***/ })

}]);
//# sourceMappingURL=20.b15ee0facfaf1eb8b4fa.js.map
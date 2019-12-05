(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ 1814:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.autoUpdateTimezone = autoUpdateTimezone;

__webpack_require__(23);

__webpack_require__(12);

__webpack_require__(13);

__webpack_require__(18);

__webpack_require__(83);

__webpack_require__(84);

var _users = __webpack_require__(10);

var _timezone = __webpack_require__(308);

var _users2 = __webpack_require__(35);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function autoUpdateTimezone(deviceTimezone
/*: string*/
) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(dispatch
      /*: DispatchFunc*/
      , getState
      /*: GetStateFunc*/
      ) {
        var currentUer, currentTimezone, newTimezoneExists, timezone, updatedUser;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                currentUer = (0, _users.getCurrentUser)(getState());
                currentTimezone = (0, _timezone.getUserTimezone)(getState(), currentUer.id);
                newTimezoneExists = currentTimezone.automaticTimezone !== deviceTimezone;

                if (currentTimezone.useAutomaticTimezone && newTimezoneExists) {
                  timezone = {
                    useAutomaticTimezone: 'true',
                    automaticTimezone: deviceTimezone,
                    manualTimezone: currentTimezone.manualTimezone
                  };
                  updatedUser = _objectSpread({}, currentUer, {
                    timezone: timezone
                  });
                  (0, _users2.updateMe)(updatedUser)(dispatch, getState);
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }()
  );
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

/***/ 1966:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 15 modules
var es = __webpack_require__(405);

// EXTERNAL MODULE: ./mattermost-redux/selectors/entities/users.js
var users = __webpack_require__(10);

// EXTERNAL MODULE: ./mattermost-redux/selectors/entities/channels.js
var channels = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(6);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(1);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.es.js + 1 modules
var index_es = __webpack_require__(52);

// EXTERNAL MODULE: ./utils/utils.jsx + 1 modules
var utils = __webpack_require__(22);

// EXTERNAL MODULE: ./utils/i18n.jsx
var i18n = __webpack_require__(53);

// CONCATENATED MODULE: ./components/audit_table/audit_table.jsx
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





const holders = Object(index_es["g" /* defineMessages */])({
  sessionRevoked: {
    id: Object(i18n["b" /* t */])('audit_table.sessionRevoked'),
    defaultMessage: 'The session with id {sessionId} was revoked'
  },
  channelCreated: {
    id: Object(i18n["b" /* t */])('audit_table.channelCreated'),
    defaultMessage: 'Created the {channelName} channel'
  },
  establishedDM: {
    id: Object(i18n["b" /* t */])('audit_table.establishedDM'),
    defaultMessage: 'Established a direct message channel with {username}'
  },
  nameUpdated: {
    id: Object(i18n["b" /* t */])('audit_table.nameUpdated'),
    defaultMessage: 'Updated the {channelName} channel name'
  },
  headerUpdated: {
    id: Object(i18n["b" /* t */])('audit_table.headerUpdated'),
    defaultMessage: 'Updated the {channelName} channel header'
  },
  channelDeleted: {
    id: Object(i18n["b" /* t */])('audit_table.channelDeleted'),
    defaultMessage: 'Archived the channel with the URL {url}'
  },
  userAdded: {
    id: Object(i18n["b" /* t */])('audit_table.userAdded'),
    defaultMessage: 'Added {username} to the {channelName} channel'
  },
  userRemoved: {
    id: Object(i18n["b" /* t */])('audit_table.userRemoved'),
    defaultMessage: 'Removed {username} to the {channelName} channel'
  },
  attemptedRegisterApp: {
    id: Object(i18n["b" /* t */])('audit_table.attemptedRegisterApp'),
    defaultMessage: 'Attempted to register a new OAuth Application with ID {id}'
  },
  attemptedAllowOAuthAccess: {
    id: Object(i18n["b" /* t */])('audit_table.attemptedAllowOAuthAccess'),
    defaultMessage: 'Attempted to allow a new OAuth service access'
  },
  successfullOAuthAccess: {
    id: Object(i18n["b" /* t */])('audit_table.successfullOAuthAccess'),
    defaultMessage: 'Successfully gave a new OAuth service access'
  },
  failedOAuthAccess: {
    id: Object(i18n["b" /* t */])('audit_table.failedOAuthAccess'),
    defaultMessage: 'Failed to allow a new OAuth service access - the redirect URI did not match the previously registered callback'
  },
  attemptedOAuthToken: {
    id: Object(i18n["b" /* t */])('audit_table.attemptedOAuthToken'),
    defaultMessage: 'Attempted to get an OAuth access token'
  },
  successfullOAuthToken: {
    id: Object(i18n["b" /* t */])('audit_table.successfullOAuthToken'),
    defaultMessage: 'Successfully added a new OAuth service'
  },
  oauthTokenFailed: {
    id: Object(i18n["b" /* t */])('audit_table.oauthTokenFailed'),
    defaultMessage: 'Failed to get an OAuth access token - {token}'
  },
  attemptedLogin: {
    id: Object(i18n["b" /* t */])('audit_table.attemptedLogin'),
    defaultMessage: 'Attempted to login'
  },
  authenticated: {
    id: Object(i18n["b" /* t */])('audit_table.authenticated'),
    defauleMessage: 'Successfully authenticated'
  },
  successfullLogin: {
    id: Object(i18n["b" /* t */])('audit_table.successfullLogin'),
    defaultMessage: 'Successfully logged in'
  },
  failedLogin: {
    id: Object(i18n["b" /* t */])('audit_table.failedLogin'),
    defaultMessage: 'FAILED login attempt'
  },
  updatePicture: {
    id: Object(i18n["b" /* t */])('audit_table.updatePicture'),
    defaultMessage: 'Updated your profile picture'
  },
  updateGeneral: {
    id: Object(i18n["b" /* t */])('audit_table.updateGeneral'),
    defaultMessage: 'Updated the general settings of your account'
  },
  attemptedPassword: {
    id: Object(i18n["b" /* t */])('audit_table.attemptedPassword'),
    defaultMessage: 'Attempted to change password'
  },
  successfullPassword: {
    id: Object(i18n["b" /* t */])('audit_table.successfullPassword'),
    defaultMessage: 'Successfully changed password'
  },
  failedPassword: {
    id: Object(i18n["b" /* t */])('audit_table.failedPassword'),
    defaultMessage: 'Failed to change password - tried to update user password who was logged in through OAuth'
  },
  updatedRol: {
    id: Object(i18n["b" /* t */])('audit_table.updatedRol'),
    defaultMessage: 'Updated user role(s) to '
  },
  member: {
    id: Object(i18n["b" /* t */])('audit_table.member'),
    defaultMessage: 'member'
  },
  accountActive: {
    id: Object(i18n["b" /* t */])('audit_table.accountActive'),
    defaultMessage: 'Account activated'
  },
  accountInactive: {
    id: Object(i18n["b" /* t */])('audit_table.accountInactive'),
    defaultMessage: 'Account deactivated'
  },
  by: {
    id: Object(i18n["b" /* t */])('audit_table.by'),
    defaultMessage: ' by {username}'
  },
  byAdmin: {
    id: Object(i18n["b" /* t */])('audit_table.byAdmin'),
    defaultMessage: ' by an admin'
  },
  sentEmail: {
    id: Object(i18n["b" /* t */])('audit_table.sentEmail'),
    defaultMessage: 'Sent an email to {email} to reset your password'
  },
  attemptedReset: {
    id: Object(i18n["b" /* t */])('audit_table.attemptedReset'),
    defaultMessage: 'Attempted to reset password'
  },
  successfullReset: {
    id: Object(i18n["b" /* t */])('audit_table.successfullReset'),
    defaultMessage: 'Successfully reset password'
  },
  updateGlobalNotifications: {
    id: Object(i18n["b" /* t */])('audit_table.updateGlobalNotifications'),
    defaultMessage: 'Updated your global notification settings'
  },
  attemptedWebhookCreate: {
    id: Object(i18n["b" /* t */])('audit_table.attemptedWebhookCreate'),
    defaultMessage: 'Attempted to create a webhook'
  },
  succcessfullWebhookCreate: {
    id: Object(i18n["b" /* t */])('audit_table.successfullWebhookCreate'),
    defaultMessage: 'Successfully created a webhook'
  },
  failedWebhookCreate: {
    id: Object(i18n["b" /* t */])('audit_table.failedWebhookCreate'),
    defaultMessage: 'Failed to create a webhook - bad channel permissions'
  },
  attemptedWebhookDelete: {
    id: Object(i18n["b" /* t */])('audit_table.attemptedWebhookDelete'),
    defaultMessage: 'Attempted to delete a webhook'
  },
  successfullWebhookDelete: {
    id: Object(i18n["b" /* t */])('audit_table.successfullWebhookDelete'),
    defaultMessage: 'Successfully deleted a webhook'
  },
  failedWebhookDelete: {
    id: Object(i18n["b" /* t */])('audit_table.failedWebhookDelete'),
    defaultMessage: 'Failed to delete a webhook - inappropriate conditions'
  },
  logout: {
    id: Object(i18n["b" /* t */])('audit_table.logout'),
    defaultMessage: 'Logged out of your account'
  },
  verified: {
    id: Object(i18n["b" /* t */])('audit_table.verified'),
    defaultMessage: 'Successfully verified your email address'
  },
  revokedAll: {
    id: Object(i18n["b" /* t */])('audit_table.revokedAll'),
    defaultMessage: 'Revoked all current sessions for the team'
  },
  loginAttempt: {
    id: Object(i18n["b" /* t */])('audit_table.loginAttempt'),
    defaultMessage: ' (Login attempt)'
  },
  loginFailure: {
    id: Object(i18n["b" /* t */])('audit_table.loginFailure'),
    defaultMessage: ' (Login failure)'
  },
  attemptedLicenseAdd: {
    id: Object(i18n["b" /* t */])('audit_table.attemptedLicenseAdd'),
    defaultMessage: 'Attempted to add new license'
  },
  successfullLicenseAdd: {
    id: Object(i18n["b" /* t */])('audit_table.successfullLicenseAdd'),
    defaultMessage: 'Successfully added new license'
  },
  failedExpiredLicenseAdd: {
    id: Object(i18n["b" /* t */])('audit_table.failedExpiredLicenseAdd'),
    defaultMessage: 'Failed to add a new license as it has either expired or not yet been started'
  },
  failedInvalidLicenseAdd: {
    id: Object(i18n["b" /* t */])('audit_table.failedInvalidLicenseAdd'),
    defaultMessage: 'Failed to add an invalid license'
  },
  licenseRemoved: {
    id: Object(i18n["b" /* t */])('audit_table.licenseRemoved'),
    defaultMessage: 'Successfully removed a license'
  }
});

function AuditTable(props) {
  var accessList = [];
  const {
    formatMessage
  } = props.intl;

  for (var i = 0; i < props.audits.length; i++) {
    const audit = props.audits[i];
    const auditInfo = formatAuditInfo(audit, formatMessage, props.currentUser, props.getByName, props.getUser);
    let uContent;

    if (props.showUserId) {
      const profile = props.getUser(auditInfo.userId);
      const data = profile ? profile.email : auditInfo.userId;
      uContent = react_default.a.createElement("td", {
        className: "word-break--all"
      }, data);
    }

    let iContent;

    if (props.showIp) {
      iContent = react_default.a.createElement("td", {
        className: "whitespace--nowrap word-break--all"
      }, auditInfo.ip);
    }

    let sContent;

    if (props.showSession) {
      sContent = react_default.a.createElement("td", {
        className: "whitespace--nowrap word-break--all"
      }, auditInfo.sessionId);
    }

    let descStyle = '';

    if (auditInfo.desc.toLowerCase().indexOf('fail') !== -1) {
      descStyle = ' color--error';
    }

    accessList[i] = react_default.a.createElement("tr", {
      key: audit.id
    }, react_default.a.createElement("td", {
      className: "whitespace--nowrap word-break--all"
    }, auditInfo.timestamp), uContent, react_default.a.createElement("td", {
      className: 'word-break--all' + descStyle
    }, auditInfo.desc), iContent, sContent);
  }

  let userIdContent;

  if (props.showUserId) {
    userIdContent = react_default.a.createElement("th", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "audit_table.userId",
      defaultMessage: "User ID"
    }));
  }

  let ipContent;

  if (props.showIp) {
    ipContent = react_default.a.createElement("th", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "audit_table.ip",
      defaultMessage: "IP Address"
    }));
  }

  let sessionContent;

  if (props.showSession) {
    sessionContent = react_default.a.createElement("th", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "audit_table.session",
      defaultMessage: "Session ID"
    }));
  }

  return react_default.a.createElement("table", {
    className: "table"
  }, react_default.a.createElement("thead", null, react_default.a.createElement("tr", null, react_default.a.createElement("th", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "audit_table.timestamp",
    defaultMessage: "Timestamp"
  })), userIdContent, react_default.a.createElement("th", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "audit_table.action",
    defaultMessage: "Action"
  })), ipContent, sessionContent)), react_default.a.createElement("tbody", null, accessList));
}

AuditTable.propTypes = {
  intl: index_es["i" /* intlShape */].isRequired,
  audits: prop_types_default.a.array.isRequired,
  showUserId: prop_types_default.a.bool,
  showIp: prop_types_default.a.bool,
  showSession: prop_types_default.a.bool,
  currentUser: prop_types_default.a.object.isRequired,
  getUser: prop_types_default.a.func.isRequired,
  getByName: prop_types_default.a.func.isRequired
};
/* harmony default export */ var audit_table = (Object(index_es["h" /* injectIntl */])(AuditTable));
function formatAuditInfo(audit, formatMessage, currentUser, getByName, getUser) {
  const actionURL = audit.action.replace(/\/api\/v[1-9]/, '');
  let auditDesc = '';

  if (actionURL.indexOf('/channels') === 0) {
    const channelInfo = audit.extra_info.split(' ');
    const channelNameField = channelInfo[0].split('=');
    let channelURL = '';
    let channelObj;
    let channelName = '';

    if (channelNameField.indexOf('name') >= 0) {
      channelURL = channelNameField[channelNameField.indexOf('name') + 1];
      channelObj = getByName(channelURL);

      if (channelObj) {
        channelName = channelObj.display_name;
      } else {
        channelName = channelURL;
      }
    }

    switch (actionURL) {
      case '/channels/create':
        auditDesc = formatMessage(holders.channelCreated, {
          channelName
        });
        break;

      case '/channels/create_direct':
        auditDesc = formatMessage(holders.establishedDM, {
          username: Object(utils["v" /* getDirectTeammate */])(channelObj.id).username
        });
        break;

      case '/channels/update':
        auditDesc = formatMessage(holders.nameUpdated, {
          channelName
        });
        break;

      case '/channels/update_desc': // support the old path

      case '/channels/update_header':
        auditDesc = formatMessage(holders.headerUpdated, {
          channelName
        });
        break;

      default:
        {
          let userIdField = [];
          let userId = '';
          let username = '';

          if (channelInfo[1]) {
            userIdField = channelInfo[1].split('=');

            if (userIdField.indexOf('user_id') >= 0) {
              userId = userIdField[userIdField.indexOf('user_id') + 1];
              var profile = getUser(userId);

              if (profile) {
                username = profile.username;
              }
            }
          }

          if (/\/channels\/[A-Za-z0-9]+\/delete/.test(actionURL)) {
            auditDesc = formatMessage(holders.channelDeleted, {
              url: channelURL
            });
          } else if (/\/channels\/[A-Za-z0-9]+\/add/.test(actionURL)) {
            auditDesc = formatMessage(holders.userAdded, {
              username,
              channelName
            });
          } else if (/\/channels\/[A-Za-z0-9]+\/remove/.test(actionURL)) {
            auditDesc = formatMessage(holders.userRemoved, {
              username,
              channelName
            });
          }

          break;
        }
    }
  } else if (actionURL.indexOf('/oauth') === 0) {
    const oauthInfo = audit.extra_info.split(' ');

    switch (actionURL) {
      case '/oauth/register':
        {
          const clientIdField = oauthInfo[0].split('=');

          if (clientIdField[0] === 'client_id') {
            auditDesc = formatMessage(holders.attemptedRegisterApp, {
              id: clientIdField[1]
            });
          }

          break;
        }

      case '/oauth/allow':
        if (oauthInfo[0] === 'attempt') {
          auditDesc = formatMessage(holders.attemptedAllowOAuthAccess);
        } else if (oauthInfo[0] === 'success') {
          auditDesc = formatMessage(holders.successfullOAuthAccess);
        } else if (oauthInfo[0] === 'fail - redirect_uri did not match registered callback') {
          auditDesc = formatMessage(holders.failedOAuthAccess);
        }

        break;

      case '/oauth/access_token':
        if (oauthInfo[0] === 'attempt') {
          auditDesc = formatMessage(holders.attemptedOAuthToken);
        } else if (oauthInfo[0] === 'success') {
          auditDesc = formatMessage(holders.successfullOAuthToken);
        } else {
          const oauthTokenFailure = oauthInfo[0].split('-');

          if (oauthTokenFailure[0].trim() === 'fail' && oauthTokenFailure[1]) {
            auditDesc = formatMessage(oauthTokenFailure, {
              token: oauthTokenFailure[1].trim()
            });
          }
        }

        break;

      default:
        break;
    }
  } else if (actionURL.indexOf('/users') === 0) {
    const userInfo = audit.extra_info.split(' ');

    switch (actionURL) {
      case '/users/login':
        if (userInfo[0] === 'attempt') {
          auditDesc = formatMessage(holders.attemptedLogin);
        } else if (userInfo[0] === 'success') {
          auditDesc = formatMessage(holders.successfullLogin);
        } else if (userInfo[0] === 'authenticated') {
          auditDesc = formatMessage(holders.authenticated);
        } else if (userInfo[0]) {
          auditDesc = formatMessage(holders.failedLogin);
        }

        break;

      case '/users/revoke_session':
        auditDesc = formatMessage(holders.sessionRevoked, {
          sessionId: userInfo[0].split('=')[1]
        });
        break;

      case '/users/newimage':
        auditDesc = formatMessage(holders.updatePicture);
        break;

      case '/users/update':
        auditDesc = formatMessage(holders.updateGeneral);
        break;

      case '/users/newpassword':
        if (userInfo[0] === 'attempted') {
          auditDesc = formatMessage(holders.attemptedPassword);
        } else if (userInfo[0] === 'completed') {
          auditDesc = formatMessage(holders.successfullPassword);
        } else if (userInfo[0] === 'failed - tried to update user password who was logged in through oauth') {
          auditDesc = formatMessage(holders.failedPassword);
        }

        break;

      case '/users/update_roles':
        {
          const userRoles = userInfo[0].split('=')[1];
          auditDesc = formatMessage(holders.updatedRol);

          if (userRoles.trim()) {
            auditDesc += userRoles;
          } else {
            auditDesc += formatMessage(holders.member);
          }

          break;
        }

      case '/users/update_active':
        {
          const updateType = userInfo[0].split('=')[0];
          const updateField = userInfo[0].split('=')[1];
          /* Either describes account activation/deactivation or a revoked session as part of an account deactivation */

          if (updateType === 'active') {
            if (updateField === 'true') {
              auditDesc = formatMessage(holders.accountActive);
            } else if (updateField === 'false') {
              auditDesc = formatMessage(holders.accountInactive);
            }

            const actingUserInfo = userInfo[1].split('=');

            if (actingUserInfo[0] === 'session_user') {
              const actingUser = getUser(actingUserInfo[1]);
              const user = currentUser;

              if (user && actingUser && Object(utils["ab" /* isSystemAdmin */])(user.roles)) {
                auditDesc += formatMessage(holders.by, {
                  username: actingUser.username
                });
              } else if (user && actingUser) {
                auditDesc += formatMessage(holders.byAdmin);
              }
            }
          } else if (updateType === 'session_id') {
            auditDesc = formatMessage(holders.sessionRevoked, {
              sessionId: updateField
            });
          }

          break;
        }

      case '/users/send_password_reset':
        auditDesc = formatMessage(holders.sentEmail, {
          email: userInfo[0].split('=')[1]
        });
        break;

      case '/users/reset_password':
        if (userInfo[0] === 'attempt') {
          auditDesc = formatMessage(holders.attemptedReset);
        } else if (userInfo[0] === 'success') {
          auditDesc = formatMessage(holders.successfullReset);
        }

        break;

      case '/users/update_notify':
        auditDesc = formatMessage(holders.updateGlobalNotifications);
        break;

      default:
        break;
    }
  } else if (actionURL.indexOf('/hooks') === 0) {
    const webhookInfo = audit.extra_info;

    switch (actionURL) {
      case '/hooks/incoming/create':
        if (webhookInfo === 'attempt') {
          auditDesc = formatMessage(holders.attemptedWebhookCreate);
        } else if (webhookInfo === 'success') {
          auditDesc = formatMessage(holders.succcessfullWebhookCreate);
        } else if (webhookInfo === 'fail - bad channel permissions') {
          auditDesc = formatMessage(holders.failedWebhookCreate);
        }

        break;

      case '/hooks/incoming/delete':
        if (webhookInfo === 'attempt') {
          auditDesc = formatMessage(holders.attemptedWebhookDelete);
        } else if (webhookInfo === 'success') {
          auditDesc = formatMessage(holders.successfullWebhookDelete);
        } else if (webhookInfo === 'fail - inappropriate conditions') {
          auditDesc = formatMessage(holders.failedWebhookDelete);
        }

        break;

      default:
        break;
    }
  } else if (actionURL.indexOf('/license') === 0) {
    const licenseInfo = audit.extra_info;

    switch (actionURL) {
      case '/license/add':
        if (licenseInfo === 'attempt') {
          auditDesc = formatMessage(holders.attemptedLicenseAdd);
        } else if (licenseInfo === 'success') {
          auditDesc = formatMessage(holders.successfullLicenseAdd);
        } else if (licenseInfo === 'failed - expired or non-started license') {
          auditDesc = formatMessage(holders.failedExpiredLicenseAdd);
        } else if (licenseInfo === 'failed - invalid license') {
          auditDesc = formatMessage(holders.failedInvalidLicenseAdd);
        }

        break;

      case '/license/remove':
        auditDesc = formatMessage(holders.licenseRemoved);
        break;

      default:
        break;
    }
  } else if (actionURL.indexOf('/admin/download_compliance_report') === 0) {
    auditDesc = Object(utils["qb" /* toTitleCase */])(audit.extra_info);
  } else {
    switch (actionURL) {
      case '/logout':
        auditDesc = formatMessage(holders.logout);
        break;

      case '/verify_email':
        auditDesc = formatMessage(holders.verified);
        break;

      default:
        break;
    }
  }
  /* If all else fails... */


  if (!auditDesc) {
    /* Currently not called anywhere */
    if (audit.extra_info.indexOf('revoked_all=') >= 0) {
      auditDesc = formatMessage(holders.revokedAll);
    } else {
      let actionDesc = '';

      if (actionURL && actionURL.lastIndexOf('/') !== -1) {
        actionDesc = actionURL.substring(actionURL.lastIndexOf('/') + 1).replace('_', ' ');
        actionDesc = Object(utils["qb" /* toTitleCase */])(actionDesc);
      }

      let extraInfoDesc = '';

      if (audit.extra_info) {
        extraInfoDesc = audit.extra_info;

        if (extraInfoDesc.indexOf('=') !== -1) {
          extraInfoDesc = extraInfoDesc.substring(extraInfoDesc.indexOf('=') + 1);
        }
      }

      auditDesc = actionDesc + ' ' + extraInfoDesc;
    }
  }

  const date = new Date(audit.create_at);
  const auditInfo = {};
  auditInfo.timestamp = react_default.a.createElement("div", null, react_default.a.createElement("div", null, react_default.a.createElement(index_es["a" /* FormattedDate */], {
    value: date,
    day: "2-digit",
    month: "short",
    year: "numeric"
  })), react_default.a.createElement("div", null, react_default.a.createElement(index_es["d" /* FormattedTime */], {
    value: date,
    hour: "2-digit",
    minute: "2-digit"
  })));
  auditInfo.userId = audit.user_id;
  auditInfo.desc = auditDesc;
  auditInfo.ip = audit.ip_address;
  auditInfo.sessionId = audit.session_id;
  return auditInfo;
}
// CONCATENATED MODULE: ./components/audit_table/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





function mapStateToProps(state) {
  return {
    currentUser: Object(users["getCurrentUser"])(state),
    getUser: userId => Object(users["getUser"])(state, userId),
    getByName: channelName => Object(channels["getChannelByName"])(state, channelName)
  };
}

/* harmony default export */ var components_audit_table = __webpack_exports__["a"] = (Object(es["connect"])(mapStateToProps)(audit_table));

/***/ }),

/***/ 2258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 15 modules
var es = __webpack_require__(405);

// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(16);

// EXTERNAL MODULE: ./mattermost-redux/actions/users.js
var users = __webpack_require__(35);

// EXTERNAL MODULE: ./mattermost-redux/selectors/entities/users.js
var entities_users = __webpack_require__(10);

// EXTERNAL MODULE: ./selectors/i18n.js
var i18n = __webpack_require__(302);

// EXTERNAL MODULE: ./node_modules/jquery/src/jquery.js
var jquery = __webpack_require__(175);
var jquery_default = /*#__PURE__*/__webpack_require__.n(jquery);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(6);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(1);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-bootstrap/es/Modal.js
var Modal = __webpack_require__(1972);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.es.js + 1 modules
var index_es = __webpack_require__(52);

// EXTERNAL MODULE: ./utils/utils.jsx + 1 modules
var utils = __webpack_require__(22);

// EXTERNAL MODULE: ./mattermost-redux/constants/index.js
var constants = __webpack_require__(17);

// EXTERNAL MODULE: ./utils/i18n.jsx
var utils_i18n = __webpack_require__(53);

// CONCATENATED MODULE: ./components/activity_log_modal/components/more_info.jsx
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.




function MoreInfo({
  locale,
  currentSession,
  moreInfo,
  handleMoreInfo
}) {
  if (moreInfo) {
    const firstAccessTime = new Date(currentSession.create_at);
    return react_default.a.createElement("div", null, react_default.a.createElement("div", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "activity_log.firstTime",
      defaultMessage: "First time active: {date}, {time}",
      values: {
        date: react_default.a.createElement(index_es["a" /* FormattedDate */], {
          value: firstAccessTime,
          day: "2-digit",
          month: Object(utils_i18n["a" /* getMonthLong */])(locale),
          year: "numeric"
        }),
        time: react_default.a.createElement(index_es["d" /* FormattedTime */], {
          value: firstAccessTime,
          hour: "2-digit",
          minute: "2-digit"
        })
      }
    })), react_default.a.createElement("div", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "activity_log.os",
      defaultMessage: "OS: {os}",
      values: {
        os: currentSession.props.os
      }
    })), react_default.a.createElement("div", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "activity_log.browser",
      defaultMessage: "Browser: {browser}",
      values: {
        browser: currentSession.props.browser
      }
    })), react_default.a.createElement("div", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "activity_log.sessionId",
      defaultMessage: "Session ID: {id}",
      values: {
        id: currentSession.id
      }
    })));
  }

  return react_default.a.createElement("a", {
    className: "theme",
    href: "#",
    onClick: handleMoreInfo
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "activity_log.moreInfo",
    defaultMessage: "More info"
  }));
}
MoreInfo.propTypes = {
  locale: prop_types_default.a.string.isRequired,
  currentSession: prop_types_default.a.object.isRequired,
  handleMoreInfo: prop_types_default.a.func.isRequired,
  moreInfo: prop_types_default.a.bool.isRequired
};
// CONCATENATED MODULE: ./components/activity_log_modal/components/activity_log.jsx
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.







class activity_log_ActivityLog extends react_default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleMoreInfo", () => {
      this.setState({
        moreInfo: true
      });
    });

    _defineProperty(this, "submitRevoke", e => {
      this.props.submitRevoke(this.props.currentSession.id, e);
    });

    _defineProperty(this, "isMobileSession", session => {
      return session.device_id && (session.device_id.includes('apple') || session.device_id.includes('android'));
    });

    _defineProperty(this, "mobileSessionInfo", session => {
      let deviceTypeId;
      let deviceTypeMessage;
      let devicePicture;
      let deviceTitle;

      if (session.device_id.includes('apple')) {
        devicePicture = 'fa fa-apple';
        deviceTitle = Object(utils["gb" /* localizeMessage */])('device_icons.apple', 'Apple Icon');
        deviceTypeId = Object(utils_i18n["b" /* t */])('activity_log_modal.iphoneNativeClassicApp');
        deviceTypeMessage = 'iPhone Native Classic App';

        if (session.device_id.includes(constants["General"].PUSH_NOTIFY_APPLE_REACT_NATIVE)) {
          deviceTypeId = Object(utils_i18n["b" /* t */])('activity_log_modal.iphoneNativeApp');
          deviceTypeMessage = 'iPhone Native App';
        }
      } else if (session.device_id.includes('android')) {
        devicePicture = 'fa fa-android';
        deviceTitle = Object(utils["gb" /* localizeMessage */])('device_icons.android', 'Android Icon');
        deviceTypeId = Object(utils_i18n["b" /* t */])('activity_log_modal.androidNativeClassicApp');
        deviceTypeMessage = 'Android Native Classic App';

        if (session.device_id.includes(constants["General"].PUSH_NOTIFY_ANDROID_REACT_NATIVE)) {
          deviceTypeId = Object(utils_i18n["b" /* t */])('activity_log_modal.androidNativeApp');
          deviceTypeMessage = 'Android Native App';
        }
      }

      return {
        devicePicture,
        deviceTitle,
        devicePlatform: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: deviceTypeId,
          defaultMessage: deviceTypeMessage
        })
      };
    });

    this.state = {
      moreInfo: false
    };
  }

  render() {
    const {
      index,
      locale,
      currentSession
    } = this.props;
    const lastAccessTime = new Date(currentSession.last_activity_at);
    let devicePlatform = currentSession.props.platform;
    let devicePicture = '';
    let deviceTitle = '';

    if (currentSession.props.platform === 'Windows') {
      devicePicture = 'fa fa-windows';
      deviceTitle = Object(utils["gb" /* localizeMessage */])('device_icons.windows', 'Windows Icon');
    } else if (this.isMobileSession(currentSession)) {
      const sessionInfo = this.mobileSessionInfo(currentSession);
      devicePicture = sessionInfo.devicePicture;
      devicePlatform = sessionInfo.devicePlatform;
    } else if (currentSession.props.platform === 'Macintosh' || currentSession.props.platform === 'iPhone') {
      devicePicture = 'fa fa-apple';
      deviceTitle = Object(utils["gb" /* localizeMessage */])('device_icons.apple', 'Apple Icon');
    } else if (currentSession.props.platform === 'Linux') {
      if (currentSession.props.os.indexOf('Android') >= 0) {
        devicePlatform = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "activity_log_modal.android",
          defaultMessage: "Android"
        });
        devicePicture = 'fa fa-android';
        deviceTitle = Object(utils["gb" /* localizeMessage */])('device_icons.android', 'Android Icon');
      } else {
        devicePicture = 'fa fa-linux';
        deviceTitle = Object(utils["gb" /* localizeMessage */])('device_icons.linux', 'Linux Icon');
      }
    } else if (currentSession.props.os.indexOf('Linux') !== -1) {
      devicePicture = 'fa fa-linux';
      deviceTitle = Object(utils["gb" /* localizeMessage */])('device_icons.linux', 'Linux Icon');
    }

    if (currentSession.props.browser.indexOf('Desktop App') !== -1) {
      devicePlatform = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "activity_log_modal.desktop",
        defaultMessage: "Native Desktop App"
      });
    }

    return react_default.a.createElement("div", {
      key: 'activityLogEntryKey' + index,
      className: "activity-log__table"
    }, react_default.a.createElement("div", {
      className: "activity-log__report"
    }, react_default.a.createElement("div", {
      className: "report__platform"
    }, react_default.a.createElement("i", {
      className: devicePicture,
      title: deviceTitle
    }), devicePlatform), react_default.a.createElement("div", {
      className: "report__info"
    }, react_default.a.createElement("div", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "activity_log.lastActivity",
      defaultMessage: "Last activity: {date}, {time}",
      values: {
        date: react_default.a.createElement(index_es["a" /* FormattedDate */], {
          value: lastAccessTime,
          day: "2-digit",
          month: Object(utils_i18n["a" /* getMonthLong */])(locale),
          year: "numeric"
        }),
        time: react_default.a.createElement(index_es["d" /* FormattedTime */], {
          value: lastAccessTime,
          hour: "2-digit",
          minute: "2-digit"
        })
      }
    })), react_default.a.createElement(MoreInfo, {
      locale: locale,
      currentSession: currentSession,
      moreInfo: this.state.moreInfo,
      handleMoreInfo: this.handleMoreInfo
    }))), react_default.a.createElement("div", {
      className: "activity-log__action"
    }, react_default.a.createElement("button", {
      onClick: this.submitRevoke,
      className: "btn btn-primary"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "activity_log.logout",
      defaultMessage: "Logout"
    }))));
  }

}

_defineProperty(activity_log_ActivityLog, "propTypes", {
  /**
   * The index of this instance within the list
   */
  index: prop_types_default.a.number.isRequired,

  /**
   * The current locale of the user
   */
  locale: prop_types_default.a.string.isRequired,

  /**
   * The session that's to be displayed
   */
  currentSession: prop_types_default.a.object.isRequired,

  /**
   * Function to revoke session
   */
  submitRevoke: prop_types_default.a.func.isRequired
});
// EXTERNAL MODULE: ./components/loading_screen.jsx
var loading_screen = __webpack_require__(1569);

// CONCATENATED MODULE: ./components/activity_log_modal/activity_log_modal.jsx
function activity_log_modal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.








class activity_log_modal_ActivityLogModal extends react_default.a.PureComponent {
  constructor(props) {
    super(props);

    activity_log_modal_defineProperty(this, "submitRevoke", (altId, e) => {
      e.preventDefault();
      var modalContent = jquery_default()(e.target).closest('.modal-content');
      modalContent.addClass('animation--highlight');
      setTimeout(() => {
        modalContent.removeClass('animation--highlight');
      }, 1500);
      this.props.actions.revokeSession(this.props.currentUserId, altId).then(() => {
        this.props.actions.getSessions(this.props.currentUserId);
      });
    });

    activity_log_modal_defineProperty(this, "onShow", () => {
      this.props.actions.getSessions(this.props.currentUserId);

      if (!Object(utils["Y" /* isMobile */])()) {
        jquery_default()('.modal-body').perfectScrollbar();
      }
    });

    activity_log_modal_defineProperty(this, "onHide", () => {
      this.setState({
        show: false
      });
    });

    this.state = {
      show: true
    };
  }

  componentDidMount() {
    this.onShow();
  }

  render() {
    let content;

    if (this.props.sessions.loading) {
      content = react_default.a.createElement(loading_screen["a" /* default */], null);
    } else {
      const activityList = this.props.sessions.reduce((array, currentSession, index) => {
        if (currentSession.props.type === 'UserAccessToken') {
          return array;
        }

        array.push(react_default.a.createElement(activity_log_ActivityLog, {
          key: currentSession.id,
          index: index,
          locale: this.props.locale,
          currentSession: currentSession,
          submitRevoke: this.submitRevoke
        }));
        return array;
      }, []);
      content = react_default.a.createElement("form", {
        role: "form"
      }, activityList);
    }

    return react_default.a.createElement(Modal["a" /* default */], {
      dialogClassName: "modal--scroll",
      show: this.state.show,
      onHide: this.onHide,
      onExited: this.props.onHide,
      bsSize: "large",
      role: "dialog",
      "aria-labelledby": "activityLogModalLabel"
    }, react_default.a.createElement(Modal["a" /* default */].Header, {
      closeButton: true
    }, react_default.a.createElement(Modal["a" /* default */].Title, {
      componentClass: "h1",
      id: "activityLogModalLabel"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "activity_log.activeSessions",
      defaultMessage: "Active Sessions"
    }))), react_default.a.createElement(Modal["a" /* default */].Body, {
      ref: "modalBody"
    }, react_default.a.createElement("p", {
      className: "session-help-text"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "activity_log.sessionsDescription",
      defaultMessage: "Sessions are created when you log in to a new browser on a device. Sessions let you use Mattermost without having to log in again for a time period specified by the System Admin. If you want to log out sooner, use the 'Logout' button below to end a session."
    })), content), react_default.a.createElement(Modal["a" /* default */].Footer, {
      className: "modal-footer--invisible"
    }, react_default.a.createElement("button", {
      id: "closeModalButton",
      type: "button",
      className: "btn btn-link"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "general_button.close",
      defaultMessage: "Close"
    }))));
  }

}

activity_log_modal_defineProperty(activity_log_modal_ActivityLogModal, "propTypes", {
  /**
   * The current user id
   */
  currentUserId: prop_types_default.a.string.isRequired,

  /**
   * Current user's sessions
   */
  sessions: prop_types_default.a.oneOfType([prop_types_default.a.array, prop_types_default.a.object]).isRequired,

  /**
   * Current user's locale
   */
  locale: prop_types_default.a.string.isRequired,

  /**
   * Function that's called when user closes the modal
   */
  onHide: prop_types_default.a.func.isRequired,
  actions: prop_types_default.a.shape({
    /**
     * Function to refresh sessions from server
     */
    getSessions: prop_types_default.a.func.isRequired,

    /**
     * Function to revoke a particular session
     */
    revokeSession: prop_types_default.a.func.isRequired
  }).isRequired
});
// CONCATENATED MODULE: ./components/activity_log_modal/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.







function mapStateToProps(state) {
  return {
    currentUserId: Object(entities_users["getCurrentUserId"])(state),
    sessions: Object(entities_users["getUserSessions"])(state),
    locale: Object(i18n["a" /* getCurrentLocale */])(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux["bindActionCreators"])({
      getSessions: users["getSessions"],
      revokeSession: users["revokeSession"]
    }, dispatch)
  };
}

/* harmony default export */ var activity_log_modal = __webpack_exports__["a"] = (Object(es["connect"])(mapStateToProps, mapDispatchToProps)(activity_log_modal_ActivityLogModal));

/***/ }),

/***/ 2275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 15 modules
var es = __webpack_require__(405);

// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(16);

// EXTERNAL MODULE: ./mattermost-redux/actions/users.js
var users = __webpack_require__(35);

// EXTERNAL MODULE: ./mattermost-redux/selectors/entities/users.js
var entities_users = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/jquery/src/jquery.js
var jquery = __webpack_require__(175);
var jquery_default = /*#__PURE__*/__webpack_require__.n(jquery);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(6);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(1);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-bootstrap/es/Modal.js
var Modal = __webpack_require__(1972);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.es.js + 1 modules
var index_es = __webpack_require__(52);

// EXTERNAL MODULE: ./utils/utils.jsx + 1 modules
var utils = __webpack_require__(22);

// EXTERNAL MODULE: ./components/audit_table/index.js + 1 modules
var audit_table = __webpack_require__(1966);

// EXTERNAL MODULE: ./components/loading_screen.jsx
var loading_screen = __webpack_require__(1569);

// CONCATENATED MODULE: ./components/access_history_modal/access_history_modal.jsx
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.








class access_history_modal_AccessHistoryModal extends react_default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "onShow", () => {
      this.props.actions.getUserAudits(this.props.currentUserId, 0, 200);

      if (!Object(utils["Y" /* isMobile */])()) {
        jquery_default()('.modal-body').perfectScrollbar();
      }
    });

    _defineProperty(this, "onHide", () => {
      this.setState({
        show: false
      });
    });

    this.state = {
      show: true
    };
  }

  componentDidMount() {
    this.onShow();
  }

  render() {
    let content;

    if (this.props.userAudits.length === 0) {
      content = react_default.a.createElement(loading_screen["a" /* default */], null);
    } else {
      content = react_default.a.createElement(audit_table["a" /* default */], {
        audits: this.props.userAudits,
        showIp: true,
        showSession: true
      });
    }

    return react_default.a.createElement(Modal["a" /* default */], {
      dialogClassName: "modal--scroll",
      show: this.state.show,
      onHide: this.onHide,
      onExited: this.props.onHide,
      bsSize: "large",
      role: "dialog",
      "aria-labelledby": "accessHistoryModalLabel"
    }, react_default.a.createElement(Modal["a" /* default */].Header, {
      closeButton: true
    }, react_default.a.createElement(Modal["a" /* default */].Title, {
      componentClass: "h1",
      id: "accessHistoryModalLabel"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "access_history.title",
      defaultMessage: "Access History"
    }))), react_default.a.createElement(Modal["a" /* default */].Body, {
      ref: "modalBody"
    }, content), react_default.a.createElement(Modal["a" /* default */].Footer, {
      className: "modal-footer--invisible"
    }, react_default.a.createElement("button", {
      id: "closeModalButton",
      type: "button",
      className: "btn btn-link"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "general_button.close",
      defaultMessage: "Close"
    }))));
  }

}

_defineProperty(access_history_modal_AccessHistoryModal, "propTypes", {
  /**
   * Function that's called when modal is closed
   */
  onHide: prop_types_default.a.func.isRequired,
  actions: prop_types_default.a.shape({
    /**
     * Function to fetch the user's audits
     */
    getUserAudits: prop_types_default.a.func.isRequired
  }).isRequired,

  /**
   * The current user's audits
   */
  userAudits: prop_types_default.a.array.isRequired,

  /**
   * The current user id
   */
  currentUserId: prop_types_default.a.string.isRequired
});
// CONCATENATED MODULE: ./components/access_history_modal/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






function mapStateToProps(state) {
  return {
    currentUserId: Object(entities_users["getCurrentUserId"])(state),
    userAudits: Object(entities_users["getUserAudits"])(state) || []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux["bindActionCreators"])({
      getUserAudits: users["getUserAudits"]
    }, dispatch)
  };
}

/* harmony default export */ var access_history_modal = __webpack_exports__["a"] = (Object(es["connect"])(mapStateToProps, mapDispatchToProps)(access_history_modal_AccessHistoryModal));

/***/ })

}]);
//# sourceMappingURL=2.8f0a4f1d4c5366fa73df.js.map
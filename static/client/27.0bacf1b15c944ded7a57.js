(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

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

/***/ 3454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 15 modules
var es = __webpack_require__(405);

// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(16);

// EXTERNAL MODULE: ./mattermost-redux/actions/timezone.js
var timezone = __webpack_require__(1814);

// EXTERNAL MODULE: ./mattermost-redux/selectors/entities/channels.js
var channels = __webpack_require__(15);

// EXTERNAL MODULE: ./mattermost-redux/selectors/entities/general.js
var general = __webpack_require__(26);

// EXTERNAL MODULE: ./mattermost-redux/selectors/entities/users.js
var users = __webpack_require__(10);

// EXTERNAL MODULE: ./utils/route.jsx
var route = __webpack_require__(2009);

// EXTERNAL MODULE: ./node_modules/jquery/src/jquery.js
var jquery = __webpack_require__(175);
var jquery_default = /*#__PURE__*/__webpack_require__.n(jquery);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(6);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(1);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(433);

// EXTERNAL MODULE: ./mattermost-redux/actions/channels.js
var actions_channels = __webpack_require__(70);

// EXTERNAL MODULE: ./actions/global_actions.jsx
var global_actions = __webpack_require__(1567);

// EXTERNAL MODULE: ./actions/websocket_actions.jsx
var websocket_actions = __webpack_require__(1723);

// EXTERNAL MODULE: ./utils/user_agent.jsx
var user_agent = __webpack_require__(39);

// EXTERNAL MODULE: ./components/loading_screen.jsx
var loading_screen = __webpack_require__(1569);

// EXTERNAL MODULE: ./utils/timezone.jsx
var utils_timezone = __webpack_require__(315);

// EXTERNAL MODULE: ./stores/redux_store.jsx + 3 modules
var redux_store = __webpack_require__(14);

// CONCATENATED MODULE: ./utils/webapp_connector.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

/**
 * Create a placeholder webappConnector if one doesn't exist. Likely means we're not running in the desktop client.
 */
if (!window.webappConnector) {
  window.webappConnector = {
    active: false,
    on: () => {},
    //eslint-disable-line no-empty-function
    removeListener: () => {},
    //eslint-disable-line no-empty-function
    emit: () => {} //eslint-disable-line no-empty-function

  };
}
/**
* Returns a reference to the webappConnector if available, or a placeholder object to silently ignore any interaction
*/


const webappConnector = window.webappConnector;
// EXTERNAL MODULE: ./client/web_websocket_client.jsx + 1 modules
var web_websocket_client = __webpack_require__(1823);

// CONCATENATED MODULE: ./components/logged_in/logged_in.jsx
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.













const logged_in_dispatch = redux_store["a" /* default */].dispatch;
const getState = redux_store["a" /* default */].getState;
const BACKSPACE_CHAR = 8;
class logged_in_LoggedIn extends react_default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleUserActivityUpdates", ({
      userIsActive,
      manual
    }) => {
      if (!this.props.currentUser) {
        return;
      } // update the server with the users current away status


      web_websocket_client["a" /* default */].userUpdateActiveStatus(userIsActive, manual);
    });

    const root = document.getElementById('root');

    if (root) {
      root.className += ' channel-view';
    }
  }

  isValidState() {
    return this.props.currentUser != null;
  }

  componentDidMount() {
    // Initialize websocket
    websocket_actions["b" /* initialize */]();

    if (this.props.enableTimezone) {
      this.props.actions.autoUpdateTimezone(Object(utils_timezone["a" /* getBrowserTimezone */])());
    } // Make sure the websockets close and reset version


    jquery_default()(window).on('beforeunload', () => {
      // Turn off to prevent getting stuck in a loop
      jquery_default()(window).off('beforeunload');

      if (document.cookie.indexOf('MMUSERID=') > -1) {
        Object(actions_channels["viewChannel"])('', this.props.currentChannelId || '')(logged_in_dispatch, getState);
      }

      websocket_actions["a" /* close */]();
    }); // Listen for focused tab/window state

    window.addEventListener('focus', this.onFocusListener);
    window.addEventListener('blur', this.onBlurListener); // Listen for user activity updates from external sources via the webapp connector

    if (webappConnector.active) {
      webappConnector.on('user-activity-update', this.handleUserActivityUpdates);
    } // Because current CSS requires the root tag to have specific stuff
    // Device tracking setup


    if (user_agent["g" /* isIos */]()) {
      jquery_default()('body').addClass('ios');
    } else if (user_agent["a" /* isAndroid */]()) {
      jquery_default()('body').addClass('android');
    }

    if (!this.props.currentUser) {
      jquery_default()('#root').attr('class', '');
      global_actions["e" /* emitUserLoggedOutEvent */]('/login?redirect_to=' + encodeURIComponent(this.props.location.pathname), true, false);
    }

    jquery_default()('body').on('mouseenter mouseleave', ':not(.post-list__dynamic) .post', function mouseOver(ev) {
      if (ev.type === 'mouseenter') {
        jquery_default()(this).prev('.date-separator, .new-separator').addClass('hovered--after');
        jquery_default()(this).next('.date-separator, .new-separator').addClass('hovered--before');
      } else {
        jquery_default()(this).prev('.date-separator, .new-separator').removeClass('hovered--after');
        jquery_default()(this).next('.date-separator, .new-separator').removeClass('hovered--before');
      }
    });
    jquery_default()('body').on('mouseenter mouseleave', '.search-item__container .post', function mouseOver(ev) {
      if (ev.type === 'mouseenter') {
        jquery_default()(this).closest('.search-item__container').find('.date-separator').addClass('hovered--after');
        jquery_default()(this).closest('.search-item__container').next('div').find('.date-separator').addClass('hovered--before');
      } else {
        jquery_default()(this).closest('.search-item__container').find('.date-separator').removeClass('hovered--after');
        jquery_default()(this).closest('.search-item__container').next('div').find('.date-separator').removeClass('hovered--before');
      }
    });
    jquery_default()('body').on('mouseenter mouseleave', ':not(.post-list__dynamic) .post.post--comment.same--root', function mouseOver(ev) {
      if (ev.type === 'mouseenter') {
        jquery_default()(this).prev('.date-separator, .new-separator').addClass('hovered--comment');
        jquery_default()(this).next('.date-separator, .new-separator').addClass('hovered--comment');
      } else {
        jquery_default()(this).prev('.date-separator, .new-separator').removeClass('hovered--comment');
        jquery_default()(this).next('.date-separator, .new-separator').removeClass('hovered--comment');
      }
    }); // Prevent backspace from navigating back a page

    jquery_default()(window).on('keydown.preventBackspace', e => {
      if (e.which === BACKSPACE_CHAR && !jquery_default()(e.target).is('input, textarea')) {
        e.preventDefault();
      }
    });
  }

  componentWillUnmount() {
    websocket_actions["a" /* close */]();
    jquery_default()('body').off('click.userpopover');
    jquery_default()('body').off('mouseenter mouseleave', '.post');
    jquery_default()('body').off('mouseenter mouseleave', '.post.post--comment.same--root');
    jquery_default()('.modal').off('show.bs.modal');
    jquery_default()(window).off('keydown.preventBackspace');
    window.removeEventListener('focus', this.onFocusListener);
    window.removeEventListener('blur', this.onBlurListener);
    webappConnector.removeListener('user-activity-update', this.handleUserActivityUpdates);
  }

  render() {
    if (!this.isValidState()) {
      return react_default.a.createElement(loading_screen["a" /* default */], null);
    }

    if (this.props.mfaRequired) {
      if (this.props.location.pathname !== '/mfa/setup') {
        return react_default.a.createElement(react_router["a" /* Redirect */], {
          to: '/mfa/setup'
        });
      }
    } else if (this.props.location.pathname === '/mfa/confirm') {// Nothing to do. Wait for MFA flow to complete before prompting TOS.
    } else if (this.props.showTermsOfService) {
      if (this.props.location.pathname !== '/terms_of_service') {
        return react_default.a.createElement(react_router["a" /* Redirect */], {
          to: '/terms_of_service?redirect_to=' + encodeURIComponent(this.props.location.pathname)
        });
      }
    }

    return this.props.children;
  }

  onFocusListener() {
    global_actions["a" /* emitBrowserFocus */](true);
  }

  onBlurListener() {
    global_actions["a" /* emitBrowserFocus */](false);
  }

}

_defineProperty(logged_in_LoggedIn, "propTypes", {
  currentUser: prop_types_default.a.object,
  currentChannelId: prop_types_default.a.string,
  children: prop_types_default.a.object,
  mfaRequired: prop_types_default.a.bool.isRequired,
  enableTimezone: prop_types_default.a.bool.isRequired,
  actions: prop_types_default.a.shape({
    autoUpdateTimezone: prop_types_default.a.func.isRequired
  }).isRequired,
  showTermsOfService: prop_types_default.a.bool.isRequired
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4!./components/logged_in/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.









function mapStateToProps(state, ownProps) {
  const license = Object(general["getLicense"])(state);
  const config = Object(general["getConfig"])(state);
  const showTermsOfService = Object(users["shouldShowTermsOfService"])(state);
  return {
    currentUser: Object(users["getCurrentUser"])(state),
    currentChannelId: Object(channels["getCurrentChannelId"])(state),
    mfaRequired: Object(route["a" /* checkIfMFARequired */])(Object(users["getCurrentUser"])(state), license, config, ownProps.match.url),
    enableTimezone: config.ExperimentalTimezone === 'true',
    showTermsOfService
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux["bindActionCreators"])({
      autoUpdateTimezone: timezone["autoUpdateTimezone"]
    }, dispatch)
  };
}

/* harmony default export */ var logged_in = __webpack_exports__["default"] = (Object(es["connect"])(mapStateToProps, mapDispatchToProps)(logged_in_LoggedIn));

/***/ })

}]);
//# sourceMappingURL=27.0bacf1b15c944ded7a57.js.map
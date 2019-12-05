(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ 1644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NextIcon; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.



class NextIcon extends react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent {
  render() {
    const className = 'fa fa-1x fa-angle-right' + (this.props.additionalClassName ? ' ' + this.props.additionalClassName : '');
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__[/* FormattedMessage */ "c"], {
      id: "generic_icons.next",
      defaultMessage: "Next Icon"
    }, title => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: className,
      title: title
    }));
  }

}

_defineProperty(NextIcon, "propTypes", {
  additionalClassName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
});

_defineProperty(NextIcon, "defaultProps", {
  additionalClassName: null
});

/***/ }),

/***/ 1714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviousIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.



class PreviousIcon extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {
  render() {
    const className = 'fa fa-1x fa-angle-left' + (this.props.additionalClassName ? ' ' + this.props.additionalClassName : '');
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__[/* FormattedMessage */ "c"], {
      id: "generic_icons.previous",
      defaultMessage: "Previous Icon"
    }, title => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: className,
      title: title
    }));
  }

}

_defineProperty(PreviousIcon, "propTypes", {
  additionalClassName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
});

_defineProperty(PreviousIcon, "defaultProps", {
  additionalClassName: null
});

/***/ }),

/***/ 1715:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIncomingHooks = getIncomingHooks;
exports.getOutgoingHooks = getOutgoingHooks;
exports.getCommands = getCommands;
exports.getOAuthApps = getOAuthApps;
exports.getSystemCommands = getSystemCommands;
exports.getAutocompleteCommandsList = exports.getAllCommands = exports.getOutgoingHooksInCurrentTeam = void 0;

__webpack_require__(23);

__webpack_require__(18);

__webpack_require__(12);

__webpack_require__(13);

__webpack_require__(85);

var _reselect = __webpack_require__(94);

var _teams = __webpack_require__(32);

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

function getIncomingHooks(state) {
  return state.entities.integrations.incomingHooks;
}

function getOutgoingHooks(state) {
  return state.entities.integrations.outgoingHooks;
}

function getCommands(state) {
  return state.entities.integrations.commands;
}

function getOAuthApps(state) {
  return state.entities.integrations.oauthApps;
}

function getSystemCommands(state) {
  return state.entities.integrations.systemCommands;
}
/**
 * get outgoing hooks in current team
 */


var getOutgoingHooksInCurrentTeam = (0, _reselect.createSelector)(_teams.getCurrentTeamId, getOutgoingHooks, function (teamId, hooks) {
  return Object.values(hooks).filter(function (o) {
    return o.teamId === teamId;
  });
});
exports.getOutgoingHooksInCurrentTeam = getOutgoingHooksInCurrentTeam;
var getAllCommands = (0, _reselect.createSelector)(getCommands, getSystemCommands, function (commands, systemCommands) {
  return _objectSpread({}, commands, {}, systemCommands);
});
exports.getAllCommands = getAllCommands;
var getAutocompleteCommandsList = (0, _reselect.createSelector)(getAllCommands, _teams.getCurrentTeamId, function (commands, currentTeamId) {
  return Object.values(commands).filter(function (command) {
    return command && (!command.team_id || command.team_id === currentTeamId) && command.auto_complete;
  }).sort(function (a, b) {
    return a.display_name.localeCompare(b.display_name);
  });
});
exports.getAutocompleteCommandsList = getAutocompleteCommandsList;

/***/ }),

/***/ 1746:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBotAccounts = getBotAccounts; // Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

function getBotAccounts(state) {
  return state.entities.bots.accounts;
}

/***/ }),

/***/ 1816:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createBot = createBot;
exports.patchBot = patchBot;
exports.loadBot = loadBot;
exports.loadBots = loadBots;
exports.disableBot = disableBot;
exports.enableBot = enableBot;
exports.assignBot = assignBot;

var _client = __webpack_require__(27);

var _action_types = __webpack_require__(8);

var _helpers = __webpack_require__(117); // Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.


var BOTS_PER_PAGE_DEFAULT = 20;

function createBot(bot) {
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.createBot,
    onSuccess: _action_types.BotTypes.RECEIVED_BOT_ACCOUNT,
    params: [bot]
  });
}

function patchBot(botUserId, botPatch) {
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.patchBot,
    onSuccess: _action_types.BotTypes.RECEIVED_BOT_ACCOUNT,
    params: [botUserId, botPatch]
  });
}

function loadBot(botUserId) {
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.getBot,
    onSuccess: _action_types.BotTypes.RECEIVED_BOT_ACCOUNT,
    params: [botUserId]
  });
}

function loadBots() {
  var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : BOTS_PER_PAGE_DEFAULT;
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.getBotsIncludeDeleted,
    onSuccess: _action_types.BotTypes.RECEIVED_BOT_ACCOUNTS,
    params: [page, perPage]
  });
}

function disableBot(botUserId) {
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.disableBot,
    onSuccess: _action_types.BotTypes.RECEIVED_BOT_ACCOUNT,
    params: [botUserId]
  });
}

function enableBot(botUserId) {
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.enableBot,
    onSuccess: _action_types.BotTypes.RECEIVED_BOT_ACCOUNT,
    params: [botUserId]
  });
}

function assignBot(botUserId, newOwnerId) {
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.assignBot,
    onSuccess: _action_types.BotTypes.RECEIVED_BOT_ACCOUNT,
    params: [botUserId, newOwnerId]
  });
}

/***/ }),

/***/ 2216:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "files/63fafa4ec86b3e689f52806ba5a3cd4f.png";

/***/ }),

/***/ 3337:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "files/e18dcc703feb7046e3b49f91eeebb0e2.png";

/***/ }),

/***/ 3338:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "files/d184fcdb23c1e24bfd7132950ceb4f68.jpg";

/***/ }),

/***/ 3426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 15 modules
var es = __webpack_require__(405);

// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(433);

// EXTERNAL MODULE: ./mattermost-redux/selectors/entities/users.js
var users = __webpack_require__(10);

// EXTERNAL MODULE: ./mattermost-redux/selectors/entities/teams.js
var entities_teams = __webpack_require__(32);

// EXTERNAL MODULE: ./mattermost-redux/selectors/entities/general.js
var general = __webpack_require__(26);

// EXTERNAL MODULE: ./mattermost-redux/selectors/entities/roles.js
var entities_roles = __webpack_require__(90);

// EXTERNAL MODULE: ./mattermost-redux/constants/index.js
var constants = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(1);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(6);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(16);

// EXTERNAL MODULE: ./mattermost-redux/selectors/entities/bots.js
var entities_bots = __webpack_require__(1746);

// EXTERNAL MODULE: ./mattermost-redux/actions/bots.js
var actions_bots = __webpack_require__(1816);

// EXTERNAL MODULE: ./mattermost-redux/actions/users.js
var actions_users = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.es.js + 1 modules
var index_es = __webpack_require__(52);

// EXTERNAL MODULE: ./utils/utils.jsx + 1 modules
var utils = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js + 1 modules
var react_router_dom = __webpack_require__(1553);

// EXTERNAL MODULE: ./components/loading_screen.jsx
var loading_screen = __webpack_require__(1569);

// CONCATENATED MODULE: ./components/icon/search_icon.jsx
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.


class search_icon_SearchIcon extends react_default.a.PureComponent {
  render() {
    return react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "generic_icons.search",
      defaultMessage: "Search Icon"
    }, title => react_default.a.createElement("i", {
      className: "fa fa-search",
      title: title
    }));
  }

}
// CONCATENATED MODULE: ./components/backstage/components/backstage_list.jsx
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






class backstage_list_BackstageList extends react_default.a.Component {
  constructor(props) {
    super(props);
    this.updateFilter = this.updateFilter.bind(this);
    this.state = {
      filter: ''
    };
  }

  updateFilter(e) {
    this.setState({
      filter: e.target.value
    });
  }

  render() {
    const filter = this.state.filter.toLowerCase();
    let children;

    if (this.props.loading) {
      children = react_default.a.createElement(loading_screen["a" /* default */], null);
    } else {
      children = this.props.children;
      let hasChildren = true;

      if (typeof children === 'function') {
        [children, hasChildren] = children(filter);
      }

      children = react_default.a.Children.map(children, child => {
        return react_default.a.cloneElement(child, {
          filter
        });
      });

      if (children.length === 0 || !hasChildren) {
        if (!filter) {
          if (this.props.emptyText) {
            children = react_default.a.createElement("span", {
              className: "backstage-list__item backstage-list__empty"
            }, this.props.emptyText);
          }
        } else if (this.props.emptyTextSearch) {
          children = react_default.a.createElement("span", {
            className: "backstage-list__item backstage-list__empty",
            id: "emptySearchResultsMessage"
          }, react_default.a.cloneElement(this.props.emptyTextSearch, {
            values: {
              searchTerm: filter
            }
          }));
        }
      }
    }

    let addLink = null;

    if (this.props.addLink && this.props.addText) {
      addLink = react_default.a.createElement(react_router_dom["a" /* Link */], {
        className: "add-link",
        to: this.props.addLink
      }, react_default.a.createElement("button", {
        type: "button",
        className: "btn btn-primary",
        id: this.props.addButtonId
      }, react_default.a.createElement("span", null, this.props.addText)));
    }

    return react_default.a.createElement("div", {
      className: "backstage-content"
    }, react_default.a.createElement("div", {
      className: "backstage-header"
    }, react_default.a.createElement("h1", null, this.props.header), addLink), react_default.a.createElement("div", {
      className: "backstage-filters"
    }, react_default.a.createElement("div", {
      className: "backstage-filter__search"
    }, react_default.a.createElement(search_icon_SearchIcon, null), react_default.a.createElement("input", {
      type: "search",
      className: "form-control",
      placeholder: this.props.searchPlaceholder,
      value: this.state.filter,
      onChange: this.updateFilter,
      style: style.search,
      id: "searchInput"
    }))), react_default.a.createElement("span", {
      className: "backstage-list__help"
    }, this.props.helpText), react_default.a.createElement("div", {
      className: "backstage-list"
    }, children));
  }

}

_defineProperty(backstage_list_BackstageList, "propTypes", {
  children: prop_types_default.a.oneOfType([prop_types_default.a.node, prop_types_default.a.func]),
  header: prop_types_default.a.node.isRequired,
  addLink: prop_types_default.a.string,
  addText: prop_types_default.a.node,
  addButtonId: prop_types_default.a.string,
  emptyText: prop_types_default.a.node,
  emptyTextSearch: prop_types_default.a.node,
  helpText: prop_types_default.a.node,
  loading: prop_types_default.a.bool.isRequired,
  searchPlaceholder: prop_types_default.a.string
});

_defineProperty(backstage_list_BackstageList, "defaultProps", {
  searchPlaceholder: utils["gb" /* localizeMessage */]('backstage_list.search', 'Search')
});

const style = {
  search: {
    flexGrow: 0,
    flexShrink: 0
  }
};
// EXTERNAL MODULE: ./utils/constants.jsx
var utils_constants = __webpack_require__(0);

// EXTERNAL MODULE: ./components/formatted_markdown_message.jsx
var formatted_markdown_message = __webpack_require__(1564);

// EXTERNAL MODULE: ./components/confirm_modal.jsx
var confirm_modal = __webpack_require__(1576);

// EXTERNAL MODULE: ./components/markdown/index.js + 1 modules
var markdown = __webpack_require__(1624);

// EXTERNAL MODULE: ./components/save_button.jsx
var save_button = __webpack_require__(1612);

// EXTERNAL MODULE: ./components/icon/warning_icon.jsx
var warning_icon = __webpack_require__(1621);

// CONCATENATED MODULE: ./components/integrations/bots/bot.jsx
function bot_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.









function matchesFilter(bot, filter, owner) {
  if (!filter) {
    return true;
  }

  const username = bot.username || '';
  const description = bot.description || '';
  const displayName = bot.display_name || '';
  let ownerUsername = 'plugin';

  if (owner && owner.username) {
    ownerUsername = owner.username;
  }

  return !(username.toLowerCase().indexOf(filter) === -1 && displayName.toLowerCase().indexOf(filter) === -1 && description.toLowerCase().indexOf(filter) === -1 && ownerUsername.toLowerCase().indexOf(filter) === -1);
}
class bot_Bot extends react_default.a.PureComponent {
  constructor(props) {
    super(props);

    bot_defineProperty(this, "enableBot", () => {
      this.props.actions.enableBot(this.props.bot.user_id);
    });

    bot_defineProperty(this, "disableBot", () => {
      this.props.actions.disableBot(this.props.bot.user_id);
    });

    bot_defineProperty(this, "enableUserAccessToken", id => {
      this.props.actions.enableUserAccessToken(id);
    });

    bot_defineProperty(this, "disableUserAccessToken", id => {
      this.props.actions.disableUserAccessToken(id);
    });

    bot_defineProperty(this, "confirmRevokeToken", id => {
      this.setState({
        confirmingId: id
      });
    });

    bot_defineProperty(this, "revokeTokenConfirmed", () => {
      this.props.actions.revokeUserAccessToken(this.state.confirmingId);
      this.closeConfirm();
    });

    bot_defineProperty(this, "closeConfirm", () => {
      this.setState({
        confirmingId: ''
      });
    });

    bot_defineProperty(this, "openCreateToken", () => {
      this.setState({
        creatingTokenState: 'OPEN',
        token: {
          description: ''
        }
      });
    });

    bot_defineProperty(this, "closeCreateToken", () => {
      this.setState({
        creatingTokenState: 'CLOSED',
        token: {
          description: ''
        }
      });
    });

    bot_defineProperty(this, "handleUpdateDescription", e => {
      this.setState({
        token: Object.assign({}, this.state.token, {
          description: e.target.value
        })
      });
    });

    bot_defineProperty(this, "handleCreateToken", async e => {
      e.preventDefault();

      if (this.state.token.description === '') {
        this.setState({
          error: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "bot.token.error.description",
            defaultMessage: "Please enter a description."
          })
        });
        return;
      }

      const {
        data,
        error
      } = await this.props.actions.createUserAccessToken(this.props.bot.user_id, this.state.token.description);

      if (data) {
        this.setState({
          creatingTokenState: 'CREATED',
          token: data
        });
      } else if (error) {
        this.setState({
          error: error.message
        });
      }
    });

    this.state = {
      confirmingId: '',
      creatingTokenState: 'CLOSED',
      token: {},
      error: ''
    };
  }

  render() {
    const username = this.props.bot.username || '';
    const description = this.props.bot.description || '';
    const displayName = this.props.bot.display_name || '';
    let ownerUsername = 'plugin';

    if (this.props.owner && this.props.owner.username) {
      ownerUsername = this.props.owner.username;
    }

    const filter = this.props.filter ? this.props.filter.toLowerCase() : '';

    if (!matchesFilter(this.props.bot, filter, this.props.owner)) {
      return null;
    }

    const tokenList = [];
    Object.values(this.props.accessTokens).forEach(token => {
      let activeLink;
      let disableClass = '';
      let disabledText;

      if (token.is_active) {
        activeLink = react_default.a.createElement("a", {
          name: token.id + '_deactivate',
          href: "#",
          onClick: e => {
            e.preventDefault();
            this.disableUserAccessToken(token.id);
          }
        }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.tokens.deactivate",
          defaultMessage: "Disable"
        }));
      } else {
        disableClass = 'light';
        disabledText = react_default.a.createElement("span", {
          className: "margin-right light"
        }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.tokens.deactivatedWarning",
          defaultMessage: "(Disabled)"
        }));
        activeLink = react_default.a.createElement("a", {
          name: token.id + '_activate',
          href: "#",
          onClick: e => {
            e.preventDefault();
            this.enableUserAccessToken(token.id);
          }
        }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.tokens.activate",
          defaultMessage: "Enable"
        }));
      }

      tokenList.push(react_default.a.createElement("div", {
        key: token.id,
        className: "bot-list__item"
      }, react_default.a.createElement("div", {
        className: "item-details__row d-flex justify-content-between"
      }, react_default.a.createElement("div", {
        className: disableClass
      }, react_default.a.createElement("div", {
        className: "whitespace--nowrap overflow--ellipsis"
      }, react_default.a.createElement("b", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "user.settings.tokens.tokenDesc",
        defaultMessage: "Token Description: "
      })), token.description), react_default.a.createElement("div", {
        className: "setting-box__token-id whitespace--nowrap overflow--ellipsis"
      }, react_default.a.createElement("b", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "user.settings.tokens.tokenId",
        defaultMessage: "Token ID: "
      })), token.id)), react_default.a.createElement("div", null, disabledText, activeLink, ' - ', react_default.a.createElement("a", {
        name: token.id + '_delete',
        href: "#",
        onClick: e => {
          e.preventDefault();
          this.confirmRevokeToken(token.id);
        }
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "user.settings.tokens.delete",
        defaultMessage: "Delete"
      }))))));
    });
    let options;

    if (ownerUsername !== 'plugin') {
      options = react_default.a.createElement("div", {
        className: "item-actions"
      }, react_default.a.createElement("button", {
        id: "createToken",
        className: "style--none color--link",
        onClick: this.openCreateToken
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "bot.manage.create_token",
        defaultMessage: "Create New Token"
      })), ' - ', react_default.a.createElement(react_router_dom["a" /* Link */], {
        to: `/${this.props.team.name}/integrations/bots/edit?id=${this.props.bot.user_id}`
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "bots.manage.edit",
        defaultMessage: "Edit"
      })), ' - ', react_default.a.createElement("button", {
        className: "style--none color--link",
        onClick: this.disableBot
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "bot.manage.disable",
        defaultMessage: "Disable"
      })));
    }

    if (this.props.bot.delete_at !== 0) {
      options = react_default.a.createElement("div", {
        className: "item-actions"
      }, react_default.a.createElement("button", {
        className: "style--none color--link",
        onClick: this.enableBot
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "bot.manage.enable",
        defaultMessage: "Enable"
      })));
    }

    if (this.state.creatingTokenState === 'OPEN') {
      tokenList.push(react_default.a.createElement("div", {
        key: 'create',
        className: "bot-list__item"
      }, react_default.a.createElement("div", {
        key: 'create'
      }, react_default.a.createElement("form", {
        className: "form-horizontal",
        onSubmit: this.handleCreateToken
      }, react_default.a.createElement("div", {
        className: "row"
      }, react_default.a.createElement("label", {
        className: "col-sm-auto control-label"
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "user.settings.tokens.name",
        defaultMessage: "Token Description: "
      })), react_default.a.createElement("div", {
        className: "col-sm-4"
      }, react_default.a.createElement("input", {
        autoFocus: true,
        className: "form-control form-sm",
        type: "text",
        maxLength: 64,
        value: this.state.token.description,
        onChange: this.handleUpdateDescription
      }))), react_default.a.createElement("div", null, react_default.a.createElement("div", {
        className: "padding-top padding-bottom"
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "user.settings.tokens.nameHelp",
        defaultMessage: "Enter a description for your token to remember what it does."
      })), react_default.a.createElement("label", {
        id: "clientError",
        className: "has-error is-empty"
      }, this.state.error), react_default.a.createElement("div", {
        className: "margin-top"
      }, react_default.a.createElement(save_button["a" /* default */], {
        btnClass: "btn-sm btn-primary",
        savingMessage: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.tokens.save",
          defaultMessage: "Save"
        }),
        saving: false
      }), react_default.a.createElement("button", {
        className: "btn btn-sm btn-link",
        onClick: this.closeCreateToken
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "user.settings.tokens.cancel",
        defaultMessage: "Cancel"
      }))))))));
    } else if (this.state.creatingTokenState === 'CREATED') {
      tokenList.push(react_default.a.createElement("div", {
        key: 'created',
        className: "bot-list__item alert alert-warning"
      }, react_default.a.createElement("div", {
        className: "margin-bottom"
      }, react_default.a.createElement(warning_icon["a" /* default */], {
        additionalClassName: "margin-right"
      }), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "user.settings.tokens.copy",
        defaultMessage: "Please copy the access token below. You won't be able to see it again!"
      })), react_default.a.createElement("div", {
        className: "whitespace--nowrap overflow--ellipsis"
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "user.settings.tokens.name",
        defaultMessage: "Token Description: "
      }), this.state.token.description), react_default.a.createElement("div", {
        className: "whitespace--nowrap overflow--ellipsis"
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "user.settings.tokens.id",
        defaultMessage: "Token ID: "
      }), this.state.token.id), react_default.a.createElement("strong", {
        className: "word-break--all"
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "user.settings.tokens.token",
        defaultMessage: "Access Token: "
      }), this.state.token.token), react_default.a.createElement("div", {
        className: "margin-top"
      }, react_default.a.createElement("button", {
        className: "btn btn-sm btn-primary",
        onClick: this.closeCreateToken
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "bot.create_token.close",
        defaultMessage: "Close"
      })))));
    }

    const imageURL = utils["K" /* imageURLForUser */](this.props.bot.user_id);
    return react_default.a.createElement("div", {
      className: "backstage-list__item"
    }, react_default.a.createElement("div", {
      className: 'bot-list-img-container'
    }, react_default.a.createElement("img", {
      className: 'bot-list-img',
      alt: 'bot image',
      src: imageURL
    })), react_default.a.createElement("div", {
      className: "item-details"
    }, react_default.a.createElement("div", {
      className: "item-details__row d-flex justify-content-between"
    }, react_default.a.createElement("strong", {
      className: "item-details__name"
    }, displayName + ' (@' + username + ')'), options), react_default.a.createElement("div", {
      className: "bot-details__description"
    }, react_default.a.createElement(markdown["a" /* default */], {
      message: description
    })), react_default.a.createElement("div", {
      className: "light small"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "bots.managed_by",
      defaultMessage: "Managed by "
    }), ownerUsername), react_default.a.createElement("div", {
      className: "bot-list is-empty"
    }, tokenList)), react_default.a.createElement(confirm_modal["a" /* default */], {
      title: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "bots.token.delete",
        defaultMessage: "Delete Token"
      }),
      message: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "bots.token.confirm_text",
        defaultMessage: "Are you sure you want to delete the token?"
      }),
      confirmButtonText: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "bots.token.confirm",
        defaultMessage: "Delete"
      }),
      show: this.state.confirmingId !== '',
      onConfirm: this.revokeTokenConfirmed,
      onCancel: this.closeConfirm
    }));
  }

}

bot_defineProperty(bot_Bot, "propTypes", {
  /**
  *  Bot that we are displaying
  */
  bot: prop_types_default.a.object.isRequired,

  /**
  * Owner of the bot we are displaying
  */
  owner: prop_types_default.a.object,

  /**
  * The access tokens of the bot user
  */
  accessTokens: prop_types_default.a.object.isRequired,

  /**
  * String used for filtering bot items
  */
  filter: prop_types_default.a.string,
  actions: prop_types_default.a.shape({
    /**
    * Disable a bot
    */
    disableBot: prop_types_default.a.func.isRequired,

    /**
    * Enable a bot
    */
    enableBot: prop_types_default.a.func.isRequired,

    /**
    * Access token managment
    */
    createUserAccessToken: prop_types_default.a.func.isRequired,
    revokeUserAccessToken: prop_types_default.a.func.isRequired,
    enableUserAccessToken: prop_types_default.a.func.isRequired,
    disableUserAccessToken: prop_types_default.a.func.isRequired
  }),

  /**
  *  Only used for routing since backstage is team based.
  */
  team: prop_types_default.a.object.isRequired
});
// CONCATENATED MODULE: ./components/integrations/bots/bots.jsx
function bots_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.








class bots_Bots extends react_default.a.PureComponent {
  constructor(props) {
    super(props);

    bots_defineProperty(this, "botToJSX", bot => {
      return react_default.a.createElement(bot_Bot, {
        key: bot.user_id,
        bot: bot,
        owner: this.props.owners[bot.user_id],
        accessTokens: this.props.accessTokens[bot.user_id] || {},
        actions: this.props.actions,
        team: this.props.team
      });
    });

    bots_defineProperty(this, "bots", filter => {
      const bots = Object.values(this.props.bots).sort((a, b) => a.username.localeCompare(b.username));

      const match = bot => matchesFilter(bot, filter, this.props.owners[bot.user_id]);

      const enabledBots = bots.filter(bot => bot.delete_at === 0).filter(match).map(this.botToJSX);
      const disabledBots = bots.filter(bot => bot.delete_at > 0).filter(match).map(this.botToJSX);
      const sections = react_default.a.createElement("div", {
        key: "sections"
      }, react_default.a.createElement(this.EnabledSection, {
        enabledBots: enabledBots
      }), react_default.a.createElement(this.DisabledSection, {
        hasDisabled: disabledBots.length > 0,
        disabledBots: disabledBots
      }));
      return [sections, enabledBots.length > 0 || disabledBots.length > 0];
    });

    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.props.actions.loadBots(utils_constants["N" /* default */].Integrations.START_PAGE_NUM, utils_constants["N" /* default */].Integrations.PAGE_SIZE).then(result => {
      if (result.data) {
        const promises = [];

        for (const bot of result.data) {
          // We don't need to wait for this and we need to accept failure in the case where bot.owner_id is a plugin id
          this.props.actions.getUser(bot.owner_id); // We want to wait for these.

          promises.push(this.props.actions.getUser(bot.user_id));
          promises.push(this.props.actions.getUserAccessTokensForUser(bot.user_id));
        }

        Promise.all(promises).then(() => {
          this.setState({
            loading: false
          });
        });
      }
    });
  }

  DisabledSection(props) {
    if (!props.hasDisabled) {
      return null;
    }

    const botsToDisplay = react_default.a.Children.map(props.disabledBots, child => {
      return react_default.a.cloneElement(child, {
        filter: props.filter
      });
    });
    return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement("div", {
      className: "bot-disabled"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "bots.disabled",
      defaultMessage: "Disabled"
    })), react_default.a.createElement("div", {
      className: "bot-list__disabled"
    }, botsToDisplay));
  }

  EnabledSection(props) {
    const botsToDisplay = react_default.a.Children.map(props.enabledBots, child => {
      return react_default.a.cloneElement(child, {
        filter: props.filter
      });
    });
    return react_default.a.createElement("div", null, botsToDisplay);
  }

  render() {
    return react_default.a.createElement(backstage_list_BackstageList, {
      header: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "bots.manage.header",
        defaultMessage: "Bot Accounts"
      }),
      addText: this.props.createBots && react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "bots.manage.add",
        defaultMessage: "Add Bot Account"
      }),
      addLink: '/' + this.props.team.name + '/integrations/bots/add',
      addButtonId: "addBotAccount",
      emptyText: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "bots.manage.empty",
        defaultMessage: "No bot accounts found"
      }),
      emptyTextSearch: react_default.a.createElement(formatted_markdown_message["b" /* default */], {
        id: "bots.manage.emptySearch",
        defaultMessage: "No bot accounts match **{searchTerm}**"
      }),
      helpText: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "bots.manage.help",
        defaultMessage: "Use {botAccounts} to integrate with Mattermost through plugins or the API. Bot accounts are available to everyone on your server.",
        values: {
          botAccounts: react_default.a.createElement("a", {
            target: "_blank",
            rel: "noopener noreferrer",
            href: "https://mattermost.com/pl/default-bot-accounts"
          }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "bots.manage.bot_accounts",
            defaultMessage: "Bot Accounts"
          }))
        }
      }),
      searchPlaceholder: utils["gb" /* localizeMessage */]('bots.manage.search', 'Search Bot Accounts'),
      loading: this.state.loading
    }, this.bots);
  }

}

bots_defineProperty(bots_Bots, "propTypes", {
  /**
  *  Map from botUserId to bot.
  */
  bots: prop_types_default.a.object.isRequired,

  /**
  *  Map from botUserId to accessTokens.
  */
  accessTokens: prop_types_default.a.object.isRequired,

  /**
  *  Map from botUserId to owner.
  */
  owners: prop_types_default.a.object.isRequired,
  createBots: prop_types_default.a.bool,
  actions: prop_types_default.a.shape({
    /**
    * Ensure we have bot accounts
    */
    loadBots: prop_types_default.a.func.isRequired,

    /**
    * Load access tokens for bot accounts
    */
    getUserAccessTokensForUser: prop_types_default.a.func.isRequired,

    /**
    * Access token managment
    */
    createUserAccessToken: prop_types_default.a.func.isRequired,
    revokeUserAccessToken: prop_types_default.a.func.isRequired,
    enableUserAccessToken: prop_types_default.a.func.isRequired,
    disableUserAccessToken: prop_types_default.a.func.isRequired,

    /**
    * Load owner of bot account
    */
    getUser: prop_types_default.a.func.isRequired,

    /**
    * Disable a bot
    */
    disableBot: prop_types_default.a.func.isRequired,

    /**
    * Enable a bot
    */
    enableBot: prop_types_default.a.func.isRequired
  }),

  /**
  *  Only used for routing since backstage is team based.
  */
  team: prop_types_default.a.object.isRequired
});
// CONCATENATED MODULE: ./components/integrations/bots/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.









function mapStateToProps(state) {
  const config = Object(general["getConfig"])(state);
  const createBots = config.EnableBotAccountCreation === 'true';
  const bots = Object(entities_bots["getBotAccounts"])(state);
  const owners = Object.values(bots).reduce((result, bot) => {
    result[bot.user_id] = users["getUser"](state, bot.owner_id);
    return result;
  }, {});
  return {
    createBots,
    bots,
    accessTokens: state.entities.admin.userAccessTokensByUser,
    owners
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux["bindActionCreators"])({
      loadBots: actions_bots["loadBots"],
      getUserAccessTokensForUser: actions_users["getUserAccessTokensForUser"],
      createUserAccessToken: actions_users["createUserAccessToken"],
      revokeUserAccessToken: actions_users["revokeUserAccessToken"],
      enableUserAccessToken: actions_users["enableUserAccessToken"],
      disableUserAccessToken: actions_users["disableUserAccessToken"],
      getUser: actions_users["getUser"],
      disableBot: actions_bots["disableBot"],
      enableBot: actions_bots["enableBot"]
    }, dispatch)
  };
}

/* harmony default export */ var integrations_bots = (Object(es["connect"])(mapStateToProps, mapDispatchToProps)(bots_Bots));
// EXTERNAL MODULE: ./mattermost-redux/selectors/entities/common.js
var common = __webpack_require__(207);

// EXTERNAL MODULE: ./node_modules/react-bootstrap/es/OverlayTrigger.js
var OverlayTrigger = __webpack_require__(1995);

// EXTERNAL MODULE: ./node_modules/react-bootstrap/es/Tooltip.js
var Tooltip = __webpack_require__(1998);

// EXTERNAL MODULE: ./mattermost-redux/utils/user_utils.js
var user_utils = __webpack_require__(104);

// EXTERNAL MODULE: ./images/bot_default_icon.png
var bot_default_icon = __webpack_require__(2216);
var bot_default_icon_default = /*#__PURE__*/__webpack_require__.n(bot_default_icon);

// EXTERNAL MODULE: ./utils/browser_history.jsx
var browser_history = __webpack_require__(114);

// CONCATENATED MODULE: ./components/backstage/components/backstage_header.jsx
function backstage_header_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.



class backstage_header_BackstageHeader extends react_default.a.Component {
  static get propTypes() {
    return {
      children: prop_types_default.a.node
    };
  }

  render() {
    const children = [];
    const {
      formatMessage
    } = this.context.intl;
    react_default.a.Children.forEach(this.props.children, (child, index) => {
      if (index !== 0) {
        children.push(react_default.a.createElement("span", {
          key: 'divider' + index,
          className: "backstage-header__divider"
        }, react_default.a.createElement("i", {
          className: "fa fa-angle-right",
          title: formatMessage({
            id: 'generic_icons.breadcrumb',
            defaultMessage: 'Breadcrumb Icon'
          })
        })));
      }

      children.push(child);
    });
    return react_default.a.createElement("div", {
      className: "backstage-header"
    }, react_default.a.createElement("h1", null, children));
  }

}

backstage_header_defineProperty(backstage_header_BackstageHeader, "contextTypes", {
  intl: index_es["i" /* intlShape */].isRequired
});
// EXTERNAL MODULE: ./components/spinner_button.jsx
var spinner_button = __webpack_require__(1666);

// EXTERNAL MODULE: ./components/form_error.jsx
var form_error = __webpack_require__(1584);

// EXTERNAL MODULE: ./utils/file_utils.jsx
var file_utils = __webpack_require__(1601);

// CONCATENATED MODULE: ./components/integrations/bots/add_bot/add_bot.jsx
function add_bot_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
















const roleOptionSystemAdmin = 'System Admin';
const roleOptionMember = 'Member';
class add_bot_AddBot extends react_default.a.Component {
  constructor(props) {
    super(props);

    add_bot_defineProperty(this, "updateUsername", e => {
      this.setState({
        username: e.target.value
      });
    });

    add_bot_defineProperty(this, "updateDisplayName", e => {
      this.setState({
        displayName: e.target.value
      });
    });

    add_bot_defineProperty(this, "updateDescription", e => {
      this.setState({
        description: e.target.value
      });
    });

    add_bot_defineProperty(this, "updateRole", e => {
      this.setState({
        role: e.target.value
      });
    });

    add_bot_defineProperty(this, "updatePostAll", e => {
      this.setState({
        postAll: e.target.checked
      });
    });

    add_bot_defineProperty(this, "updatePostChannels", e => {
      this.setState({
        postChannels: e.target.checked
      });
    });

    add_bot_defineProperty(this, "updatePicture", e => {
      if (e.target.files && e.target.files[0]) {
        const pictureFile = e.target.files[0];
        this.previewBlob = URL.createObjectURL(pictureFile);
        var reader = new FileReader();

        reader.onload = e2 => {
          const orientation = file_utils["e" /* getExifOrientation */](e2.target.result);
          const orientationStyles = file_utils["g" /* getOrientationStyles */](orientation);
          this.setState({
            image: this.previewBlob,
            orientationStyles
          });
        };

        reader.readAsArrayBuffer(pictureFile);
        e.target.value = null;
        this.setState({
          pictureFile
        });
      } else {
        this.setState({
          pictureFile: null,
          image: null
        });
      }
    });

    add_bot_defineProperty(this, "setDefault", () => {
      this.setState({
        pictureFile: 'default',
        image: bot_default_icon_default.a
      });
    });

    add_bot_defineProperty(this, "updateRoles", async data => {
      let roles = constants["General"].SYSTEM_USER_ROLE;

      if (this.state.role === roleOptionSystemAdmin) {
        roles += ' ' + constants["General"].SYSTEM_ADMIN_ROLE;
      } else if (this.state.postAll) {
        roles += ' ' + constants["General"].SYSTEM_POST_ALL_ROLE;
      } else if (this.state.postChannels) {
        roles += ' ' + constants["General"].SYSTEM_POST_ALL_PUBLIC_ROLE;
      }

      const rolesResult = await this.props.actions.updateUserRoles(data.user_id, roles);

      if (rolesResult) {
        return rolesResult.error;
      }

      return null;
    });

    add_bot_defineProperty(this, "handleSubmit", async e => {
      e.preventDefault();

      if (this.state.adding) {
        return;
      }

      if (!this.state.username || this.state.username.length < 3) {
        this.setState({
          error: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "bots.manage.add.invalid_username",
            defaultMessage: "Usernames have to begin with a lowercase letter and be 3-22 characters long. You can use lowercase letters, numbers, periods, dashes, and underscores."
          })
        });
        return;
      }

      if (this.state.pictureFile) {
        if (!utils_constants["a" /* AcceptedProfileImageTypes */].includes(this.state.pictureFile.type)) {
          this.setState({
            error: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
              id: "user.settings.general.validImage",
              defaultMessage: "Only BMP, JPG or PNG images may be used for profile pictures"
            })
          });
        } else if (this.state.pictureFile.size > this.props.maxFileSize) {
          this.setState({
            error: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
              id: "user.settings.general.imageTooLarge",
              defaultMessage: "Unable to upload profile image. File is too large."
            })
          });
        }
      }

      this.setState({
        adding: true,
        error: ''
      });
      const bot = {
        username: this.state.username.toLowerCase(),
        display_name: this.state.displayName,
        description: this.state.description
      };
      let data;
      let error;

      if (this.props.bot) {
        const result = await this.props.actions.patchBot(this.props.bot.user_id, bot);

        if (result) {
          data = result.data;
          error = result.error;
        } else {
          error = utils["gb" /* localizeMessage */]('bot.edit_failed', 'Failed to edit bot');
        }

        if (!error) {
          if (this.state.pictureFile && this.state.pictureFile !== 'default') {
            const imageResult = await this.props.actions.uploadProfileImage(data.user_id, this.state.pictureFile);
            error = imageResult.error;
          } else {
            await this.props.actions.setDefaultProfileImage(data.user_id);
          }
        }

        if (!error && data) {
          error = this.updateRoles(data);
        }

        if (data) {
          browser_history["a" /* browserHistory */].push(`/${this.props.team.name}/integrations/bots`);
          return;
        }
      } else {
        const usernameError = utils["eb" /* isValidUsername */](bot.username);

        if (usernameError) {
          this.setState({
            adding: false,
            error: usernameError
          });
          return;
        }

        const result = await this.props.actions.createBot(bot);

        if (result) {
          data = result.data;
          error = result.error;
        } else {
          error = utils["gb" /* localizeMessage */]('bot.create_failed', 'Failed to create bot');
        }

        let token = '';

        if (!error) {
          if (this.state.pictureFile && this.state.pictureFile !== 'default') {
            await this.props.actions.uploadProfileImage(data.user_id, this.state.pictureFile);
          } else {
            await this.props.actions.setDefaultProfileImage(data.user_id);
          }

          const tokenResult = await this.props.actions.createUserAccessToken(data.user_id, utils["gb" /* localizeMessage */]('bot.token.default.description', 'Default Token')); // On error just skip the confirmation because we have a bot without a token.

          if (!tokenResult || tokenResult.error) {
            browser_history["a" /* browserHistory */].push(`/${this.props.team.name}/integrations/bots`);
            return;
          }

          token = tokenResult.data.token;
        }

        if (!error && data) {
          error = this.updateRoles(data);
        }

        if (data) {
          browser_history["a" /* browserHistory */].push(`/${this.props.team.name}/integrations/confirm?type=bots&id=${data.user_id}&token=${token}`);
          return;
        }
      }

      this.setState({
        adding: false
      });

      if (error) {
        this.setState({
          error: error.message
        });
      }
    });

    this.state = {
      error: '',
      username: '',
      displayName: '',
      description: '',
      adding: false,
      image: bot_default_icon_default.a,
      role: roleOptionMember,
      postAll: false,
      postChannels: false
    };

    if (this.props.bot) {
      this.state.username = this.props.bot.username;
      this.state.displayName = this.props.bot.display_name;
      this.state.description = this.props.bot.description;
      this.state.role = user_utils["isSystemAdmin"](this.props.roles || '') ? roleOptionSystemAdmin : roleOptionMember;
      this.state.postAll = user_utils["hasPostAllRole"](this.props.roles || '');
      this.state.postChannels = user_utils["hasPostAllPublicRole"](this.props.roles || '');
    }
  }

  render() {
    let subtitle = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "bots.manage.add",
      defaultMessage: "Add"
    });
    let buttonText = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "bots.manage.add.create",
      defaultMessage: "Create Bot Account"
    });
    let buttonActiveText = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "bots.manage.add.creating",
      defaultMessage: "Creating..."
    }); // If we are editing

    if (this.props.bot) {
      subtitle = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "bots.manage.edit",
        defaultMessage: "Edit"
      });
      buttonText = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "bots.manage.edit.title",
        defaultMessage: "Update"
      });
      buttonActiveText = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "bots.manage.edit.editing",
        defaultMessage: "Updating..."
      });
    }

    let imageURL = '';
    let removeImageIcon = react_default.a.createElement(OverlayTrigger["a" /* default */], {
      trigger: ['hover', 'focus'],
      delayShow: utils_constants["OVERLAY_TIME_DELAY"],
      placement: "right",
      overlay: react_default.a.createElement(Tooltip["a" /* default */], {
        id: "removeIcon"
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "bot.remove_profile_picture",
        defaultMessage: "Remove Bot Icon"
      }))
    }, react_default.a.createElement("a", {
      className: 'bot-profile__remove',
      onClick: this.setDefault
    }, react_default.a.createElement("span", null, '×')));
    let imageStyles = null;

    if (this.props.bot && !this.state.pictureFile) {
      imageURL = utils["K" /* imageURLForUser */](this.props.bot.user_id);
    } else {
      imageURL = this.state.image;
      imageStyles = this.state.orientationStyles;

      if (this.state.image === bot_default_icon_default.a) {
        removeImageIcon = null;
      }
    }

    return react_default.a.createElement("div", {
      className: "backstage-content"
    }, react_default.a.createElement(backstage_header_BackstageHeader, null, react_default.a.createElement(react_router_dom["a" /* Link */], {
      to: `/${this.props.team.name}/integrations/bots`
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "bots.manage.header",
      defaultMessage: "Bot Accounts"
    })), subtitle), react_default.a.createElement("div", {
      className: "backstage-form"
    }, react_default.a.createElement("form", {
      className: "form-horizontal",
      onSubmit: this.handleSubmit
    }, react_default.a.createElement("div", {
      className: "form-group"
    }, react_default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "username"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "bots.add.username",
      defaultMessage: "Username"
    })), react_default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react_default.a.createElement("input", {
      id: "username",
      type: "text",
      maxLength: "22",
      className: "form-control",
      value: this.state.username,
      onChange: this.updateUsername
    }), react_default.a.createElement("div", {
      className: "form__help"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "bot.add.username.help",
      defaultMessage: "You can use lowercase letters, numbers, periods, dashes, and underscores."
    })))), react_default.a.createElement("div", {
      className: "form-group"
    }, react_default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "boticon"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "bots.add.icon",
      defaultMessage: "Bot Icon"
    })), react_default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react_default.a.createElement("div", {
      className: 'bot-img-container'
    }, react_default.a.createElement("img", {
      className: 'bot-img',
      alt: 'bot image',
      src: imageURL,
      style: imageStyles
    }), removeImageIcon), react_default.a.createElement("div", {
      className: "btn btn-sm btn-primary btn-file sel-btn"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "bots.image.upload",
      defaultMessage: "Upload an image"
    }), react_default.a.createElement("input", {
      accept: ".jpg,.png,.bmp",
      type: "file",
      onChange: this.updatePicture
    })))), react_default.a.createElement("div", {
      className: "form-group"
    }, react_default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "displayName"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "bots.add.displayName",
      defaultMessage: "Display Name"
    })), react_default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react_default.a.createElement("input", {
      id: "displayName",
      type: "text",
      maxLength: "64",
      className: "form-control",
      value: this.state.displayName,
      onChange: this.updateDisplayName
    }), react_default.a.createElement("div", {
      className: "form__help"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "bot.add.display_name.help",
      defaultMessage: '(Optional) You can choose to display your bot\'s full name rather than its username.'
    })))), react_default.a.createElement("div", {
      className: "form-group"
    }, react_default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "description"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "bot.add.description",
      defaultMessage: "Description"
    })), react_default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react_default.a.createElement("input", {
      id: "description",
      type: "text",
      maxLength: "1024",
      className: "form-control",
      value: this.state.description,
      onChange: this.updateDescription
    }), react_default.a.createElement("div", {
      className: "form__help"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "bot.add.description.help",
      defaultMessage: "(Optional) Let others know what this bot does."
    })))), react_default.a.createElement("div", {
      className: "form-group"
    }, react_default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "role"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "bot.add.role",
      defaultMessage: "Role"
    })), react_default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react_default.a.createElement("select", {
      className: "form-control",
      value: this.state.role,
      disabled: !this.props.editingUserHasManageSystem,
      onChange: this.updateRole
    }, react_default.a.createElement("option", {
      value: roleOptionMember
    }, roleOptionMember), react_default.a.createElement("option", {
      value: roleOptionSystemAdmin
    }, roleOptionSystemAdmin)), react_default.a.createElement("div", {
      className: "form__help"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "bot.add.role.help",
      defaultMessage: "Choose what role the bot should have."
    })))), react_default.a.createElement("div", {
      className: "row bot-profile__section"
    }, react_default.a.createElement("div", {
      className: "col-md-5 col-sm-8 col-sm-offset-4"
    }, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
      id: "admin.manage_roles.additionalRoles",
      defaultMessage: "Select additional permissions for the account. [Read more about roles and permissions](!https://about.mattermost.com/default-permissions)."
    }))), react_default.a.createElement("div", {
      className: "form-group"
    }, react_default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "postAll"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "bot.add.post_all",
      defaultMessage: "post:all"
    })), react_default.a.createElement("div", {
      className: "col-md-5 col-sm-8 checkbox"
    }, react_default.a.createElement("div", {
      className: "checkbox no-padding"
    }, react_default.a.createElement("label", {
      htmlFor: "postAll"
    }, react_default.a.createElement("input", {
      id: "postAll",
      type: "checkbox",
      checked: this.state.postAll || this.state.role === roleOptionSystemAdmin,
      onChange: this.updatePostAll,
      disabled: !this.props.editingUserHasManageSystem || this.state.role === roleOptionSystemAdmin
    }), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "bot.add.post_all.enabled",
      defaultMessage: "Enabled"
    }))), react_default.a.createElement("div", {
      className: "form__help"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "bot.add.post_all.help",
      defaultMessage: "Bot will have access to post to all Mattermost channels including direct messages."
    })))), react_default.a.createElement("div", {
      className: "form-group"
    }, react_default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "postChannels"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "bot.add.post_channels",
      defaultMessage: "post:channels"
    })), react_default.a.createElement("div", {
      className: "col-md-5 col-sm-8 checkbox"
    }, react_default.a.createElement("div", {
      className: "checkbox no-padding"
    }, react_default.a.createElement("label", {
      htmlFor: "postChannels"
    }, react_default.a.createElement("input", {
      id: "postChannels",
      type: "checkbox",
      checked: this.state.postChannels || this.state.role === roleOptionSystemAdmin || this.state.postAll,
      onChange: this.updatePostChannels,
      disabled: !this.props.editingUserHasManageSystem || this.state.role === roleOptionSystemAdmin || this.state.postAll
    }), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "bot.add.post_channels.enabled",
      defaultMessage: "Enabled"
    }))), react_default.a.createElement("div", {
      className: "form__help"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "bot.add.post_channels.help",
      defaultMessage: "Bot will have access to post to all Mattermost public channels."
    })))), react_default.a.createElement("div", {
      className: "backstage-form__footer"
    }, react_default.a.createElement(form_error["a" /* default */], {
      type: "backstage",
      errors: [this.state.error]
    }), react_default.a.createElement(react_router_dom["a" /* Link */], {
      className: "btn btn-link btn-sm",
      to: `/${this.props.team.name}/integrations/bots`
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "bots.manage.add.cancel",
      defaultMessage: "Cancel"
    })), react_default.a.createElement(spinner_button["a" /* default */], {
      className: "btn btn-primary",
      type: "submit",
      spinning: this.state.adding,
      spinningText: buttonActiveText,
      onClick: this.handleSubmit,
      id: "saveBot"
    }, buttonText)))));
  }

}

add_bot_defineProperty(add_bot_AddBot, "propTypes", {
  /**
  *  Only used for routing since backstage is team based.
  */
  team: prop_types_default.a.object.isRequired,

  /**
  *  Bot to edit (if editing)
  */
  bot: prop_types_default.a.object,

  /**
  *  Roles of the bot to edit (if editing)
  */
  roles: prop_types_default.a.string,

  /**
  * Maximum upload file size (for bot account profile picture)
  */
  maxFileSize: prop_types_default.a.number.isRequired,

  /**
   * Editing user has the MANAGE_SYSTEM permission
  */
  editingUserHasManageSystem: prop_types_default.a.bool.isRequired,

  /**
  * Bot to edit
  */
  actions: prop_types_default.a.shape({
    /**
    * Creates a new bot account.
    */
    createBot: prop_types_default.a.func.isRequired,

    /**
    * Patches an existing bot account.
    */
    patchBot: prop_types_default.a.func.isRequired,

    /**
    * Uploads a user profile image
    */
    uploadProfileImage: prop_types_default.a.func.isRequired,

    /**
    * Set profile image to default
    */
    setDefaultProfileImage: prop_types_default.a.func.isRequired,

    /**
    * For creating default access token
    */
    createUserAccessToken: prop_types_default.a.func.isRequired,

    /**
    * For creating setting bot to system admin or special posting permissions
    */
    updateUserRoles: prop_types_default.a.func.isRequired
  })
});
// CONCATENATED MODULE: ./components/integrations/bots/add_bot/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.











function add_bot_mapStateToProps(state, ownProps) {
  const config = Object(general["getConfig"])(state);
  const botId = new URLSearchParams(ownProps.location.search).get('id');
  const bots = Object(entities_bots["getBotAccounts"])(state);
  const bot = bots ? bots[botId] : null;
  const user = bot ? Object(common["getUsers"])(state)[bot.user_id] : null;
  const roles = user ? user.roles : null;
  return {
    maxFileSize: parseInt(config.MaxFileSize, 10),
    bot,
    roles,
    editingUserHasManageSystem: Object(entities_roles["haveISystemPermission"])(state, {
      permission: constants["Permissions"].MANAGE_SYSTEM
    })
  };
}

function add_bot_mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux["bindActionCreators"])({
      createBot: actions_bots["createBot"],
      patchBot: actions_bots["patchBot"],
      uploadProfileImage: actions_users["uploadProfileImage"],
      setDefaultProfileImage: actions_users["setDefaultProfileImage"],
      createUserAccessToken: actions_users["createUserAccessToken"],
      updateUserRoles: actions_users["updateUserRoles"]
    }, dispatch)
  };
}

/* harmony default export */ var add_bot = (Object(es["connect"])(add_bot_mapStateToProps, add_bot_mapDispatchToProps)(add_bot_AddBot));
// EXTERNAL MODULE: ./plugins/pluggable/index.js + 1 modules
var pluggable = __webpack_require__(1647);

// EXTERNAL MODULE: ./components/announcement_bar/index.js + 9 modules
var announcement_bar = __webpack_require__(1664);

// EXTERNAL MODULE: ./components/system_notice/index.js + 2 modules
var system_notice = __webpack_require__(1965);

// EXTERNAL MODULE: ./images/post-robot-icon.png
var post_robot_icon = __webpack_require__(452);
var post_robot_icon_default = /*#__PURE__*/__webpack_require__.n(post_robot_icon);

// EXTERNAL MODULE: ./images/oauth_icon.png
var oauth_icon = __webpack_require__(3337);
var oauth_icon_default = /*#__PURE__*/__webpack_require__.n(oauth_icon);

// EXTERNAL MODULE: ./images/slash_command_icon.jpg
var slash_command_icon = __webpack_require__(3338);
var slash_command_icon_default = /*#__PURE__*/__webpack_require__.n(slash_command_icon);

// EXTERNAL MODULE: ./components/permissions_gates/system_permission_gate/index.js + 1 modules
var system_permission_gate = __webpack_require__(1686);

// EXTERNAL MODULE: ./components/permissions_gates/team_permission_gate/index.js + 1 modules
var team_permission_gate = __webpack_require__(1719);

// CONCATENATED MODULE: ./components/integrations/integration_option.jsx
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.



class integration_option_IntegrationOption extends react_default.a.Component {
  static get propTypes() {
    return {
      image: prop_types_default.a.string.isRequired,
      title: prop_types_default.a.node.isRequired,
      description: prop_types_default.a.node.isRequired,
      link: prop_types_default.a.string.isRequired
    };
  }

  render() {
    const {
      image,
      title,
      description,
      link
    } = this.props;
    return react_default.a.createElement(react_router_dom["a" /* Link */], {
      to: link,
      className: "integration-option"
    }, react_default.a.createElement("img", {
      alt: 'integration image',
      className: "integration-option__image",
      src: image
    }), react_default.a.createElement("div", {
      className: "integration-option__title"
    }, title), react_default.a.createElement("div", {
      className: "integration-option__description"
    }, description));
  }

}
// CONCATENATED MODULE: ./components/integrations/integrations.jsx
function integrations_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.













class integrations_Integrations extends react_default.a.Component {
  constructor(...args) {
    super(...args);

    integrations_defineProperty(this, "updateTitle", () => {
      const currentSiteName = this.props.siteName || '';
      document.title = utils["gb" /* localizeMessage */]('admin.sidebar.integrations', 'Integrations') + ' - ' + this.props.team.display_name + ' ' + currentSiteName;
    });
  }

  static get propTypes() {
    return {
      team: prop_types_default.a.object,
      user: prop_types_default.a.object,
      siteName: prop_types_default.a.string,
      enableIncomingWebhooks: prop_types_default.a.bool,
      enableOutgoingWebhooks: prop_types_default.a.bool,
      enableCommands: prop_types_default.a.bool,
      enableOAuthServiceProvider: prop_types_default.a.bool
    };
  }

  componentDidMount() {
    this.updateTitle();
  }

  render() {
    const options = [];

    if (this.props.enableIncomingWebhooks) {
      options.push(react_default.a.createElement(team_permission_gate["a" /* default */], {
        teamId: this.props.team.id,
        permissions: [constants["Permissions"].MANAGE_INCOMING_WEBHOOKS],
        key: "incomingWebhookPermission"
      }, react_default.a.createElement(integration_option_IntegrationOption, {
        key: "incomingWebhook",
        image: post_robot_icon_default.a,
        title: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "integrations.incomingWebhook.title",
          defaultMessage: "Incoming Webhook"
        }),
        description: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "integrations.incomingWebhook.description",
          defaultMessage: "Incoming webhooks allow external integrations to send messages"
        }),
        link: '/' + this.props.team.name + '/integrations/incoming_webhooks'
      })));
    }

    if (this.props.enableOutgoingWebhooks) {
      options.push(react_default.a.createElement(team_permission_gate["a" /* default */], {
        teamId: this.props.team.id,
        permissions: [constants["Permissions"].MANAGE_OUTGOING_WEBHOOKS],
        key: "outgoingWebhookPermission"
      }, react_default.a.createElement(integration_option_IntegrationOption, {
        key: "outgoingWebhook",
        image: post_robot_icon_default.a,
        title: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "integrations.outgoingWebhook.title",
          defaultMessage: "Outgoing Webhook"
        }),
        description: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "integrations.outgoingWebhook.description",
          defaultMessage: "Outgoing webhooks allow external integrations to receive and respond to messages"
        }),
        link: '/' + this.props.team.name + '/integrations/outgoing_webhooks'
      })));
    }

    if (this.props.enableCommands) {
      options.push(react_default.a.createElement(team_permission_gate["a" /* default */], {
        teamId: this.props.team.id,
        permissions: [constants["Permissions"].MANAGE_SLASH_COMMANDS],
        key: "commandPermission"
      }, react_default.a.createElement(integration_option_IntegrationOption, {
        key: "command",
        image: slash_command_icon_default.a,
        title: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "integrations.command.title",
          defaultMessage: "Slash Command"
        }),
        description: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "integrations.command.description",
          defaultMessage: "Slash commands send events to an external integration"
        }),
        link: '/' + this.props.team.name + '/integrations/commands'
      })));
    }

    if (this.props.enableOAuthServiceProvider) {
      options.push(react_default.a.createElement(system_permission_gate["a" /* default */], {
        permissions: [constants["Permissions"].MANAGE_OAUTH],
        key: "oauth2AppsPermission"
      }, react_default.a.createElement(integration_option_IntegrationOption, {
        key: "oauth2Apps",
        image: oauth_icon_default.a,
        title: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "integrations.oauthApps.title",
          defaultMessage: "OAuth 2.0 Applications"
        }),
        description: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "integrations.oauthApps.description",
          defaultMessage: "Auth 2.0 allows external applications to make authorized requests to the Mattermost API"
        }),
        link: '/' + this.props.team.name + '/integrations/oauth2-apps'
      })));
    }

    options.push(react_default.a.createElement(system_permission_gate["a" /* default */], {
      permissions: ['manage_bots'],
      key: "botsPermissions"
    }, react_default.a.createElement(integration_option_IntegrationOption, {
      image: bot_default_icon_default.a,
      title: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "bots.manage.header",
        defaultMessage: "Bot Accounts"
      }),
      description: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "bots.manage.description",
        defaultMessage: "Use bot accounts to integrate with Mattermost through plugins or the API"
      }),
      link: '/' + this.props.team.name + '/integrations/bots'
    })));
    return react_default.a.createElement("div", {
      className: "backstage-content row"
    }, react_default.a.createElement("div", {
      className: "backstage-header"
    }, react_default.a.createElement("h1", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "integrations.header",
      defaultMessage: "Integrations"
    }))), react_default.a.createElement("div", {
      className: "backstage-list__help"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "integrations.help",
      defaultMessage: "Visit the {appDirectory} to find self-hosted, third-party apps and integrations for Mattermost.",
      values: {
        appDirectory: react_default.a.createElement("a", {
          target: "_blank",
          rel: "noopener noreferrer",
          href: "https://about.mattermost.com/default-app-directory/"
        }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "integrations.help.appDirectory",
          defaultMessage: "App Directory"
        }))
      }
    })), react_default.a.createElement("div", {
      className: "integrations-list d-flex flex-wrap"
    }, options));
  }

}
// CONCATENATED MODULE: ./components/integrations/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.




function integrations_mapStateToProps(state) {
  const config = Object(general["getConfig"])(state);
  const siteName = config.SiteName;
  const enableIncomingWebhooks = config.EnableIncomingWebhooks === 'true';
  const enableOutgoingWebhooks = config.EnableOutgoingWebhooks === 'true';
  const enableCommands = config.EnableCommands === 'true';
  const enableOAuthServiceProvider = config.EnableOAuthServiceProvider === 'true';
  return {
    siteName,
    enableIncomingWebhooks,
    enableOutgoingWebhooks,
    enableCommands,
    enableOAuthServiceProvider
  };
}

/* harmony default export */ var integrations = (Object(es["connect"])(integrations_mapStateToProps)(integrations_Integrations));
// EXTERNAL MODULE: ./mattermost-redux/actions/roles.js
var actions_roles = __webpack_require__(245);

// EXTERNAL MODULE: ./mattermost-redux/constants/permissions.js
var permissions = __webpack_require__(5);
var permissions_default = /*#__PURE__*/__webpack_require__.n(permissions);

// CONCATENATED MODULE: ./components/permissions_gates/any_team_permission_gate/any_team_permission_gate.jsx
function any_team_permission_gate_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.


class any_team_permission_gate_AnyTeamPermissionGate extends react_default.a.Component {
  render() {
    if (this.props.hasPermission && !this.props.invert) {
      return this.props.children;
    }

    if (!this.props.hasPermission && this.props.invert) {
      return this.props.children;
    }

    return null;
  }

}

any_team_permission_gate_defineProperty(any_team_permission_gate_AnyTeamPermissionGate, "defaultProps", {
  invert: false
});

any_team_permission_gate_defineProperty(any_team_permission_gate_AnyTeamPermissionGate, "propTypes", {
  /**
   * Permissions enough to pass the gate (binary OR)
   */
  permissions: prop_types_default.a.arrayOf(prop_types_default.a.string).isRequired,

  /**
   * Has permission
   */
  hasPermission: prop_types_default.a.bool.isRequired,

  /**
   * Invert the permission (used for else)
   */
  invert: prop_types_default.a.bool.isRequired,

  /**
   * Content protected by the permissions gate
   */
  children: prop_types_default.a.node.isRequired
});
// CONCATENATED MODULE: ./components/permissions_gates/any_team_permission_gate/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





function any_team_permission_gate_mapStateToProps(state, ownProps) {
  const teams = Object(entities_teams["getMyTeams"])(state);

  for (const team of teams) {
    for (const permission of ownProps.permissions) {
      if (Object(entities_roles["haveITeamPermission"])(state, {
        team: team.id,
        permission
      })) {
        return {
          hasPermission: true
        };
      }
    }
  }

  return {
    hasPermission: false
  };
}

/* harmony default export */ var any_team_permission_gate = (Object(es["connect"])(any_team_permission_gate_mapStateToProps)(any_team_permission_gate_AnyTeamPermissionGate));
// EXTERNAL MODULE: ./mattermost-redux/selectors/entities/emojis.js
var entities_emojis = __webpack_require__(258);

// EXTERNAL MODULE: ./mattermost-redux/actions/emojis.js
var actions_emojis = __webpack_require__(208);

// EXTERNAL MODULE: ./mattermost-redux/client/index.js
var client = __webpack_require__(27);

// CONCATENATED MODULE: ./components/delete_modal_trigger.jsx
function delete_modal_trigger_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





class delete_modal_trigger_DeleteModalTrigger extends react_default.a.PureComponent {
  constructor(props) {
    super(props);

    delete_modal_trigger_defineProperty(this, "handleOpenModal", e => {
      e.preventDefault();
      this.setState({
        showDeleteModal: true
      });
    });

    delete_modal_trigger_defineProperty(this, "handleConfirm", () => {
      this.props.onDelete();
    });

    delete_modal_trigger_defineProperty(this, "handleCancel", () => {
      this.setState({
        showDeleteModal: false
      });
    });

    delete_modal_trigger_defineProperty(this, "handleKeyDown", e => {
      if (utils["V" /* isKeyPressed */](e, utils_constants["N" /* default */].KeyCodes.ENTER)) {
        this.handleConfirm(e);
      }
    });

    if (this.constructor === delete_modal_trigger_DeleteModalTrigger) {
      throw new TypeError('Can not construct abstract class.');
    }

    this.state = {
      showDeleteModal: false
    };
  }

  render() {
    return react_default.a.createElement("span", null, react_default.a.createElement("button", {
      className: "color--link style--none",
      onClick: this.handleOpenModal
    }, this.triggerTitle), react_default.a.createElement(confirm_modal["a" /* default */], {
      show: this.state.showDeleteModal,
      title: this.modalTitle,
      message: this.modalMessage,
      confirmButtonText: this.modalConfirmButton,
      onConfirm: this.handleConfirm,
      onCancel: this.handleCancel,
      onKeyDown: this.handleKeyDown
    }));
  }

}

delete_modal_trigger_defineProperty(delete_modal_trigger_DeleteModalTrigger, "propTypes", {
  onDelete: prop_types_default.a.func.isRequired
});
// CONCATENATED MODULE: ./components/emoji/delete_emoji_modal.jsx
function delete_emoji_modal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





class delete_emoji_modal_DeleteEmoji extends delete_modal_trigger_DeleteModalTrigger {
  get triggerTitle() {
    return react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "emoji_list.delete",
      defaultMessage: "Delete"
    });
  }

  get modalTitle() {
    return react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "emoji_list.delete.confirm.title",
      defaultMessage: "Delete Custom Emoji"
    });
  }

  get modalMessage() {
    return react_default.a.createElement("div", {
      className: "alert alert-warning"
    }, react_default.a.createElement(warning_icon["a" /* default */], {
      additionalClassName: "fa-margin--right"
    }), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "emoji_list.delete.confirm.msg",
      defaultMessage: "This action permanently deletes the custom emoji. Are you sure you want to delete it?"
    }));
  }

  get modalConfirmButton() {
    return react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "emoji_list.delete.confirm.button",
      defaultMessage: "Delete"
    });
  }

}

delete_emoji_modal_defineProperty(delete_emoji_modal_DeleteEmoji, "propTypes", {
  onDelete: prop_types_default.a.func.isRequired
});
// CONCATENATED MODULE: ./components/emoji/emoji_list_item/emoji_list_item.jsx
function emoji_list_item_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






class emoji_list_item_EmojiListItem extends react_default.a.Component {
  constructor(...args) {
    super(...args);

    emoji_list_item_defineProperty(this, "handleDelete", () => {
      if (this.props.onDelete) {
        this.props.onDelete(this.props.emoji.id);
      }

      this.props.actions.deleteCustomEmoji(this.props.emoji.id);
    });
  }

  render() {
    const emoji = this.props.emoji;
    const creatorUsername = this.props.creatorUsername;
    let creatorDisplayName = this.props.creatorDisplayName;

    if (creatorUsername && creatorUsername !== creatorDisplayName) {
      creatorDisplayName += ' (@' + creatorUsername + ')';
    }

    let deleteButton = null;

    if (emoji.creator_id === this.props.currentUserId) {
      deleteButton = react_default.a.createElement(any_team_permission_gate, {
        permissions: [permissions_default.a.DELETE_EMOJIS]
      }, react_default.a.createElement(delete_emoji_modal_DeleteEmoji, {
        onDelete: this.handleDelete
      }));
    } else {
      deleteButton = react_default.a.createElement(any_team_permission_gate, {
        permissions: [permissions_default.a.DELETE_EMOJIS]
      }, react_default.a.createElement(any_team_permission_gate, {
        permissions: [permissions_default.a.DELETE_OTHERS_EMOJIS]
      }, react_default.a.createElement(delete_emoji_modal_DeleteEmoji, {
        onDelete: this.handleDelete
      })));
    }

    return react_default.a.createElement("tr", {
      className: "backstage-list__item"
    }, react_default.a.createElement("td", {
      className: "emoji-list__name"
    }, ':' + emoji.name + ':'), react_default.a.createElement("td", {
      className: "emoji-list__image"
    }, react_default.a.createElement("span", {
      className: "emoticon",
      style: {
        backgroundImage: 'url(' + client["Client4"].getCustomEmojiImageUrl(emoji.id) + ')'
      }
    })), react_default.a.createElement("td", {
      className: "emoji-list__creator"
    }, creatorDisplayName), react_default.a.createElement("td", {
      className: "emoji-list-item_actions"
    }, deleteButton));
  }

}

emoji_list_item_defineProperty(emoji_list_item_EmojiListItem, "propTypes", {
  emoji: prop_types_default.a.object.isRequired,
  currentUserId: prop_types_default.a.string.isRequired,
  creatorDisplayName: prop_types_default.a.string.isRequired,
  creatorUsername: prop_types_default.a.string,
  currentTeam: prop_types_default.a.object,
  onDelete: prop_types_default.a.func,
  actions: prop_types_default.a.shape({
    deleteCustomEmoji: prop_types_default.a.func.isRequired
  }).isRequired
});

emoji_list_item_defineProperty(emoji_list_item_EmojiListItem, "defaultProps", {
  emoji: {},
  currentUserId: '',
  currentTeam: {},
  creatorDisplayName: ''
});
// CONCATENATED MODULE: ./components/emoji/emoji_list_item/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.








function emoji_list_item_mapStateToProps(state, ownProps) {
  const emoji = state.entities.emojis.customEmoji[ownProps.emojiId];
  const creator = Object(users["getUser"])(state, emoji.creator_id);
  return {
    emoji,
    creatorDisplayName: Object(utils["w" /* getDisplayNameByUser */])(creator),
    creatorUsername: creator ? creator.username : '',
    currentUserId: Object(users["getCurrentUserId"])(state),
    currentTeam: Object(entities_teams["getCurrentTeam"])(state)
  };
}

function emoji_list_item_mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux["bindActionCreators"])({
      deleteCustomEmoji: actions_emojis["deleteCustomEmoji"]
    }, dispatch)
  };
}

/* harmony default export */ var emoji_list_item = (Object(es["connect"])(emoji_list_item_mapStateToProps, emoji_list_item_mapDispatchToProps)(emoji_list_item_EmojiListItem));
// EXTERNAL MODULE: ./components/icon/next_icon.jsx
var next_icon = __webpack_require__(1644);

// EXTERNAL MODULE: ./components/icon/previous_icon.jsx
var previous_icon = __webpack_require__(1714);

// EXTERNAL MODULE: ./components/localized_input/localized_input.jsx
var localized_input = __webpack_require__(1577);

// EXTERNAL MODULE: ./utils/i18n.jsx
var i18n = __webpack_require__(53);

// CONCATENATED MODULE: ./components/emoji/emoji_list/emoji_list.jsx
function emoji_list_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.












const EMOJI_PER_PAGE = 50;
const EMOJI_SEARCH_DELAY_MILLISECONDS = 200;
class emoji_list_EmojiList extends react_default.a.Component {
  constructor(props) {
    super(props);

    emoji_list_defineProperty(this, "nextPage", e => {
      if (e) {
        e.preventDefault();
      }

      const next = this.state.page + 1;
      this.setState({
        nextLoading: true
      });
      this.props.actions.getCustomEmojis(next, EMOJI_PER_PAGE, constants["Emoji"].SORT_BY_NAME, true).then(({
        data
      }) => {
        this.setState({
          page: next,
          nextLoading: false
        });

        if (data && data.length < EMOJI_PER_PAGE) {
          this.setState({
            missingPages: false
          });
        }

        this.props.scrollToTop();
      });
    });

    emoji_list_defineProperty(this, "previousPage", e => {
      if (e) {
        e.preventDefault();
      }

      this.setState({
        page: this.state.page - 1,
        nextLoading: false
      });
      this.props.scrollToTop();
    });

    emoji_list_defineProperty(this, "onSearchChange", e => {
      if (!e || !e.target) {
        return;
      }

      const term = e.target.value || '';
      clearTimeout(this.searchTimeout);
      this.searchTimeout = setTimeout(async () => {
        if (term.trim() === '') {
          this.setState({
            searchEmojis: null,
            page: 0
          });
          return;
        }

        this.setState({
          loading: true
        });
        const {
          data
        } = await this.props.actions.searchCustomEmojis(term, {}, true);

        if (data) {
          this.setState({
            searchEmojis: data.map(em => em.id),
            loading: false
          });
        } else {
          this.setState({
            searchEmojis: [],
            loading: false
          });
        }
      }, EMOJI_SEARCH_DELAY_MILLISECONDS);
    });

    emoji_list_defineProperty(this, "deleteFromSearch", emojiId => {
      if (!this.state.searchEmojis) {
        return;
      }

      const index = this.state.searchEmojis.indexOf(emojiId);

      if (index < 0) {
        return;
      }

      const newSearchEmojis = [...this.state.searchEmojis];
      newSearchEmojis.splice(index, 1);
      this.setState({
        searchEmojis: newSearchEmojis
      });
    });

    this.searchTimeout = null;
    this.state = {
      loading: true,
      page: 0,
      nextLoading: false,
      searchEmojis: null,
      missingPages: true
    };
  }

  componentDidMount() {
    this.props.actions.getCustomEmojis(0, EMOJI_PER_PAGE + 1, constants["Emoji"].SORT_BY_NAME, true).then(({
      data
    }) => {
      this.setState({
        loading: false
      });

      if (data && data.length < EMOJI_PER_PAGE) {
        this.setState({
          missingPages: false
        });
      }
    });
  }

  render() {
    const searchEmojis = this.state.searchEmojis;
    const emojis = [];
    let nextButton;
    let previousButton;

    if (this.state.loading) {
      emojis.push(react_default.a.createElement("tr", {
        key: "loading",
        className: "backstage-list__item backstage-list__empty"
      }, react_default.a.createElement("td", {
        colSpan: "4"
      }, react_default.a.createElement(loading_screen["a" /* default */], {
        key: "loading"
      }))));
    } else if (this.props.emojiIds.length === 0 || searchEmojis && searchEmojis.length === 0) {
      emojis.push(react_default.a.createElement("tr", {
        key: "empty",
        className: "backstage-list__item backstage-list__empty"
      }, react_default.a.createElement("td", {
        colSpan: "4"
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "emoji_list.empty",
        defaultMessage: "No custom emoji found"
      }))));
    } else if (searchEmojis) {
      searchEmojis.forEach(emojiId => {
        emojis.push(react_default.a.createElement(emoji_list_item, {
          key: 'emoji_search_item' + emojiId,
          emojiId: emojiId,
          onDelete: this.deleteFromSearch
        }));
      });
    } else {
      const pageStart = this.state.page * EMOJI_PER_PAGE;
      const pageEnd = pageStart + EMOJI_PER_PAGE;
      const emojisToDisplay = this.props.emojiIds.slice(pageStart, pageEnd);
      emojisToDisplay.forEach(emojiId => {
        emojis.push(react_default.a.createElement(emoji_list_item, {
          key: 'emoji_list_item' + emojiId,
          emojiId: emojiId
        }));
      });

      if (this.state.missingPages) {
        const buttonContents = react_default.a.createElement("span", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "filtered_user_list.next",
          defaultMessage: "Next"
        }), react_default.a.createElement(next_icon["a" /* default */], {
          additionalClassName: "margin-left"
        }));
        nextButton = react_default.a.createElement(save_button["a" /* default */], {
          btnClass: "btn-link",
          extraClasses: "pull-right",
          onClick: this.nextPage,
          saving: this.state.nextLoading,
          disabled: this.state.nextLoading,
          defaultMessage: buttonContents,
          savingMessage: buttonContents
        });
      }

      if (this.state.page > 0) {
        previousButton = react_default.a.createElement("button", {
          className: "btn btn-link",
          onClick: this.previousPage
        }, react_default.a.createElement(previous_icon["a" /* default */], {
          additionalClassName: "margin-right"
        }), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "filtered_user_list.prev",
          defaultMessage: "Previous"
        }));
      }
    }

    return react_default.a.createElement("div", null, react_default.a.createElement("div", {
      className: "backstage-filters"
    }, react_default.a.createElement("div", {
      className: "backstage-filter__search"
    }, react_default.a.createElement(search_icon_SearchIcon, null), react_default.a.createElement(localized_input["a" /* default */], {
      type: "search",
      className: "form-control",
      placeholder: {
        id: Object(i18n["b" /* t */])('emoji_list.search'),
        defaultMessage: 'Search Custom Emoji'
      },
      onChange: this.onSearchChange,
      style: emoji_list_style.search
    }))), react_default.a.createElement("span", {
      className: "backstage-list__help"
    }, react_default.a.createElement("p", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "emoji_list.help",
      defaultMessage: "Custom emoji are available to everyone on your server. Type ':' followed by two characters in a message box to bring up the emoji selection menu."
    })), react_default.a.createElement("p", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "emoji_list.help2",
      defaultMessage: "Tip: If you add #, ##, or ### as the first character on a new line containing emoji, you can use larger sized emoji. To try it out, send a message such as: '# :smile:'."
    }))), react_default.a.createElement("div", {
      className: "backstage-list"
    }, react_default.a.createElement("table", {
      className: "emoji-list__table"
    }, react_default.a.createElement("thead", null, react_default.a.createElement("tr", {
      className: "backstage-list__item emoji-list__table-header"
    }, react_default.a.createElement("th", {
      className: "emoji-list__name"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "emoji_list.name",
      defaultMessage: "Name"
    })), react_default.a.createElement("th", {
      className: "emoji-list__image"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "emoji_list.image",
      defaultMessage: "Image"
    })), react_default.a.createElement("th", {
      className: "emoji-list__creator"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "emoji_list.creator",
      defaultMessage: "Creator"
    })), react_default.a.createElement("th", {
      className: "emoji-list_actions"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "emoji_list.actions",
      defaultMessage: "Actions"
    })))), react_default.a.createElement("tbody", null, emojis))), react_default.a.createElement("div", {
      className: "filter-controls padding-top x2"
    }, previousButton, nextButton));
  }

}

emoji_list_defineProperty(emoji_list_EmojiList, "propTypes", {
  /**
   * Custom emojis on the system.
   */
  emojiIds: prop_types_default.a.arrayOf(prop_types_default.a.string).isRequired,

  /**
   * Function to scroll list to top.
   */
  scrollToTop: prop_types_default.a.func.isRequired,
  actions: prop_types_default.a.shape({
    /**
     * Get pages of custom emojis.
     */
    getCustomEmojis: prop_types_default.a.func.isRequired,

    /**
     * Search custom emojis.
     */
    searchCustomEmojis: prop_types_default.a.func.isRequired
  }).isRequired
});

const emoji_list_style = {
  search: {
    flexGrow: 0,
    flexShrink: 0
  }
};
// CONCATENATED MODULE: ./components/emoji/emoji_list/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






function emoji_list_mapStateToProps(state) {
  return {
    emojiIds: Object(entities_emojis["getCustomEmojiIdsSortedByName"])(state) || []
  };
}

function emoji_list_mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux["bindActionCreators"])({
      getCustomEmojis: actions_emojis["getCustomEmojis"],
      searchCustomEmojis: actions_emojis["searchCustomEmojis"]
    }, dispatch)
  };
}

/* harmony default export */ var emoji_list = (Object(es["connect"])(emoji_list_mapStateToProps, emoji_list_mapDispatchToProps)(emoji_list_EmojiList));
// CONCATENATED MODULE: ./components/emoji/emoji_page.jsx
function emoji_page_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.








class emoji_page_EmojiPage extends react_default.a.Component {
  constructor(...args) {
    super(...args);

    emoji_page_defineProperty(this, "updateTitle", (props = this.props) => {
      document.title = utils["gb" /* localizeMessage */]('custom_emoji.header', 'Custom Emoji') + ' - ' + props.teamDisplayName + ' ' + props.siteName;
    });
  }

  componentDidMount() {
    this.updateTitle();
    this.props.actions.loadRolesIfNeeded(['system_admin', 'team_admin', 'system_user', 'team_user']);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    // eslint-disable-line camelcase
    if (this.props.siteName !== nextProps.siteName) {
      this.updateTitle(nextProps);
    }
  }

  render() {
    return react_default.a.createElement("div", {
      className: "backstage-content emoji-list"
    }, react_default.a.createElement("div", {
      className: "backstage-header"
    }, react_default.a.createElement("h1", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "emoji_list.header",
      defaultMessage: "Custom Emoji"
    })), react_default.a.createElement(any_team_permission_gate, {
      permissions: [permissions_default.a.CREATE_EMOJIS]
    }, react_default.a.createElement(react_router_dom["a" /* Link */], {
      className: "add-link",
      to: '/' + this.props.teamName + '/emoji/add'
    }, react_default.a.createElement("button", {
      type: "button",
      className: "btn btn-primary"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "emoji_list.add",
      defaultMessage: "Add Custom Emoji"
    }))))), react_default.a.createElement(emoji_list, {
      scrollToTop: this.props.scrollToTop
    }));
  }

}

emoji_page_defineProperty(emoji_page_EmojiPage, "propTypes", {
  teamId: prop_types_default.a.string.isRequired,
  teamName: prop_types_default.a.string.isRequired,
  teamDisplayName: prop_types_default.a.string.isRequired,
  siteName: prop_types_default.a.string,
  scrollToTop: prop_types_default.a.func.isRequired,
  actions: prop_types_default.a.shape({
    loadRolesIfNeeded: prop_types_default.a.func.isRequired
  }).isRequired
});

emoji_page_defineProperty(emoji_page_EmojiPage, "defaultProps", {
  teamName: '',
  teamDisplayName: '',
  siteName: ''
});
// CONCATENATED MODULE: ./components/emoji/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






function emoji_mapStateToProps(state) {
  const team = Object(entities_teams["getCurrentTeam"])(state) || {};
  return {
    teamId: team.id,
    teamName: team.name,
    teamDisplayName: team.display_name,
    siteName: state.entities.general.config.SiteName
  };
}

function emoji_mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux["bindActionCreators"])({
      loadRolesIfNeeded: actions_roles["loadRolesIfNeeded"]
    }, dispatch)
  };
}

/* harmony default export */ var components_emoji = (Object(es["connect"])(emoji_mapStateToProps, emoji_mapDispatchToProps)(emoji_page_EmojiPage));
// EXTERNAL MODULE: ./selectors/emojis.js + 1 modules
var selectors_emojis = __webpack_require__(119);

// CONCATENATED MODULE: ./components/emoji/add_emoji/add_emoji.jsx
function add_emoji_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.









class add_emoji_AddEmoji extends react_default.a.Component {
  constructor(props) {
    super(props);

    add_emoji_defineProperty(this, "handleSubmit", async e => {
      const {
        actions,
        emojiMap,
        user,
        team
      } = this.props;
      const {
        image,
        name,
        saving
      } = this.state;
      e.preventDefault();

      if (saving) {
        return;
      }

      this.setState({
        saving: true,
        error: null
      });
      const emoji = {
        creator_id: user.id,
        name: name.trim().toLowerCase()
      }; // trim surrounding colons if the user accidentally included them in the name

      if (emoji.name.startsWith(':') && emoji.name.endsWith(':')) {
        emoji.name = emoji.name.substring(1, emoji.name.length - 1);
      }

      if (!emoji.name) {
        this.setState({
          saving: false,
          error: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "add_emoji.nameRequired",
            defaultMessage: "A name is required for the emoji"
          })
        });
        return;
      } else if (/[^a-z0-9_-]/.test(emoji.name)) {
        this.setState({
          saving: false,
          error: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "add_emoji.nameInvalid",
            defaultMessage: "An emoji's name can only contain lowercase letters, numbers, and the symbols '-' and '_'."
          })
        });
        return;
      } else if (emojiMap.hasSystemEmoji(emoji.name)) {
        this.setState({
          saving: false,
          error: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "add_emoji.nameTaken",
            defaultMessage: "This name is already in use by a system emoji. Please choose another name."
          })
        });
        return;
      }

      if (!image) {
        this.setState({
          saving: false,
          error: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "add_emoji.imageRequired",
            defaultMessage: "An image is required for the emoji"
          })
        });
        return;
      }

      const {
        error
      } = await actions.createCustomEmoji(emoji, image);

      if (error) {
        this.setState({
          saving: false,
          error: error.message
        });
        return;
      }

      browser_history["a" /* browserHistory */].push('/' + team.name + '/emoji');
    });

    add_emoji_defineProperty(this, "updateName", e => {
      this.setState({
        name: e.target.value
      });
    });

    add_emoji_defineProperty(this, "updateImage", e => {
      if (e.target.files.length === 0) {
        this.setState({
          image: null,
          imageUrl: ''
        });
        return;
      }

      const image = e.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.setState({
          image,
          imageUrl: reader.result
        });
      };

      reader.readAsDataURL(image);
    });

    this.state = {
      name: '',
      image: null,
      imageUrl: '',
      saving: false,
      error: null
    };
  }

  render() {
    let filename = null;

    if (this.state.image) {
      filename = react_default.a.createElement("span", {
        className: "add-emoji__filename"
      }, this.state.image.name);
    }

    let preview = null;

    if (this.state.imageUrl) {
      preview = react_default.a.createElement("div", {
        className: "form-group"
      }, react_default.a.createElement("label", {
        className: "control-label col-sm-4",
        htmlFor: "preview"
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "add_emoji.preview",
        defaultMessage: "Preview"
      })), react_default.a.createElement("div", {
        className: "col-md-5 col-sm-8 add-emoji__preview"
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "add_emoji.preview.sentence",
        defaultMessage: "This is a sentence with {image} in it.",
        values: {
          image: react_default.a.createElement("span", {
            className: "emoticon",
            style: {
              backgroundImage: 'url(' + this.state.imageUrl + ')'
            }
          })
        }
      })));
    }

    return react_default.a.createElement("div", {
      className: "backstage-content row"
    }, react_default.a.createElement(backstage_header_BackstageHeader, null, react_default.a.createElement(react_router_dom["a" /* Link */], {
      to: '/' + this.props.team.name + '/emoji'
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "emoji_list.header",
      defaultMessage: "Custom Emoji"
    })), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_emoji.header",
      defaultMessage: "Add"
    })), react_default.a.createElement("div", {
      className: "backstage-form"
    }, react_default.a.createElement("form", {
      className: "form-horizontal",
      onSubmit: this.handleSubmit
    }, react_default.a.createElement("div", {
      className: "form-group"
    }, react_default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "name"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_emoji.name",
      defaultMessage: "Name"
    })), react_default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react_default.a.createElement("input", {
      id: "name",
      type: "text",
      maxLength: "64",
      className: "form-control",
      value: this.state.name,
      onChange: this.updateName
    }), react_default.a.createElement("div", {
      className: "form__help"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_emoji.name.help",
      defaultMessage: "Choose a name for your emoji made of up to 64 characters consisting of lowercase letters, numbers, and the symbols '-' and '_'."
    })))), react_default.a.createElement("div", {
      className: "form-group"
    }, react_default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "image"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_emoji.image",
      defaultMessage: "Image"
    })), react_default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react_default.a.createElement("div", null, react_default.a.createElement("div", {
      className: "add-emoji__upload"
    }, react_default.a.createElement("button", {
      className: "btn btn-primary"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_emoji.image.button",
      defaultMessage: "Select"
    })), react_default.a.createElement("input", {
      id: "select-emoji",
      type: "file",
      accept: ".jpg,.png,.gif",
      multiple: false,
      onChange: this.updateImage
    })), filename, react_default.a.createElement("div", {
      className: "form__help"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_emoji.image.help",
      defaultMessage: "Choose the image for your emoji. The image can be a gif, png, or jpeg file with a max size of 64 KB and dimensions up to 128 by 128 pixels."
    }))))), preview, react_default.a.createElement("div", {
      className: "backstage-form__footer"
    }, react_default.a.createElement(form_error["a" /* default */], {
      type: "backstage",
      error: this.state.error
    }), react_default.a.createElement(react_router_dom["a" /* Link */], {
      className: "btn btn-link btn-sm",
      to: '/' + this.props.team.name + '/emoji'
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_emoji.cancel",
      defaultMessage: "Cancel"
    })), react_default.a.createElement(spinner_button["a" /* default */], {
      className: "btn btn-primary",
      type: "submit",
      spinning: this.state.saving,
      spinningText: Object(utils["gb" /* localizeMessage */])('add_emoji.saving', 'Saving...'),
      onClick: this.handleSubmit
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_emoji.save",
      defaultMessage: "Save"
    }))))));
  }

}

add_emoji_defineProperty(add_emoji_AddEmoji, "propTypes", {
  actions: prop_types_default.a.shape({
    createCustomEmoji: prop_types_default.a.func.isRequired
  }).isRequired,
  emojiMap: prop_types_default.a.object.isRequired,
  team: prop_types_default.a.object,
  user: prop_types_default.a.object
});

add_emoji_defineProperty(add_emoji_AddEmoji, "contextTypes", {
  router: prop_types_default.a.object.isRequired
});
// CONCATENATED MODULE: ./components/emoji/add_emoji/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






function add_emoji_mapStateToProps(state) {
  return {
    emojiMap: Object(selectors_emojis["a" /* getEmojiMap */])(state)
  };
}

function add_emoji_mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux["bindActionCreators"])({
      createCustomEmoji: actions_emojis["createCustomEmoji"]
    }, dispatch)
  };
}

/* harmony default export */ var add_emoji = (Object(es["connect"])(add_emoji_mapStateToProps, add_emoji_mapDispatchToProps)(add_emoji_AddEmoji));
// EXTERNAL MODULE: ./mattermost-redux/actions/integrations.js
var actions_integrations = __webpack_require__(1591);

// EXTERNAL MODULE: ./mattermost-redux/selectors/entities/channels.js
var entities_channels = __webpack_require__(15);

// EXTERNAL MODULE: ./mattermost-redux/selectors/entities/integrations.js
var entities_integrations = __webpack_require__(1715);

// EXTERNAL MODULE: ./actions/integration_actions.jsx
var integration_actions = __webpack_require__(1734);

// EXTERNAL MODULE: ./utils/url.jsx + 1 modules
var url = __webpack_require__(298);

// CONCATENATED MODULE: ./components/copy_text.jsx
function copy_text_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






class copy_text_CopyText extends react_default.a.PureComponent {
  constructor(...args) {
    super(...args);

    copy_text_defineProperty(this, "copyText", e => {
      e.preventDefault();
      Object(utils["g" /* copyToClipboard */])(this.props.value);
    });
  }

  static get defaultProps() {
    return {
      idMessage: 'integrations.copy',
      defaultMessage: 'Copy'
    };
  }

  render() {
    if (!document.queryCommandSupported('copy')) {
      return null;
    }

    const tooltip = react_default.a.createElement(Tooltip["a" /* default */], {
      id: "copy"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: this.props.idMessage,
      defaultMessage: this.props.defaultMessage
    }));
    return react_default.a.createElement(OverlayTrigger["a" /* default */], {
      trigger: ['hover', 'focus'],
      delayShow: utils_constants["N" /* default */].OVERLAY_TIME_DELAY,
      placement: "top",
      overlay: tooltip
    }, react_default.a.createElement("a", {
      href: "#",
      className: "fa fa-copy margin-left",
      onClick: this.copyText
    }));
  }

}

copy_text_defineProperty(copy_text_CopyText, "propTypes", {
  value: prop_types_default.a.string.isRequired,
  defaultMessage: prop_types_default.a.string,
  idMessage: prop_types_default.a.string
});
// CONCATENATED MODULE: ./components/integrations/delete_integration.jsx
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





class delete_integration_DeleteIntegration extends delete_modal_trigger_DeleteModalTrigger {
  get triggerTitle() {
    return react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "installed_integrations.delete",
      defaultMessage: "Delete"
    });
  }

  get modalTitle() {
    return react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "integrations.delete.confirm.title",
      defaultMessage: "Delete Integration"
    });
  }

  get modalMessage() {
    return react_default.a.createElement("div", {
      className: "alert alert-warning"
    }, react_default.a.createElement(warning_icon["a" /* default */], {
      additionalClassName: "fa-margin--right"
    }), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: this.props.messageId,
      defaultMessage: "This action permanently deletes the integration and breaks any integrations using it. Are you sure you want to delete it?"
    }));
  }

  get modalConfirmButton() {
    return react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "integrations.delete.confirm.button",
      defaultMessage: "Delete"
    });
  }

}
delete_integration_DeleteIntegration.propTypes = {
  messageId: prop_types_default.a.string.isRequired,
  onDelete: prop_types_default.a.func.isRequired
};
// CONCATENATED MODULE: ./components/integrations/installed_incoming_webhook.jsx
function installed_incoming_webhook_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.








function installed_incoming_webhook_matchesFilter(incomingWebhook, channel, filter) {
  if (!filter) {
    return true;
  }

  if (incomingWebhook.display_name.toLowerCase().indexOf(filter) !== -1 || incomingWebhook.description.toLowerCase().indexOf(filter) !== -1) {
    return true;
  }

  if (incomingWebhook.channel_id) {
    if (channel && channel.name.toLowerCase().indexOf(filter) !== -1) {
      return true;
    }
  }

  return false;
}
class installed_incoming_webhook_InstalledIncomingWebhook extends react_default.a.PureComponent {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.onDelete(this.props.incomingWebhook);
  }

  render() {
    const incomingWebhook = this.props.incomingWebhook;
    const channel = this.props.channel;
    const filter = this.props.filter ? this.props.filter.toLowerCase() : '';

    if (!installed_incoming_webhook_matchesFilter(incomingWebhook, channel, filter)) {
      return null;
    }

    let displayName;

    if (incomingWebhook.display_name) {
      displayName = incomingWebhook.display_name;
    } else if (channel) {
      displayName = channel.display_name;
    } else {
      displayName = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "installed_incoming_webhooks.unknown_channel",
        defaultMessage: "A Private Webhook"
      });
    }

    let description = null;

    if (incomingWebhook.description) {
      description = react_default.a.createElement("div", {
        className: "item-details__row"
      }, react_default.a.createElement("span", {
        className: "item-details__description"
      }, incomingWebhook.description));
    }

    let actions = null;

    if (this.props.canChange) {
      actions = react_default.a.createElement("div", {
        className: "item-actions"
      }, react_default.a.createElement(react_router_dom["a" /* Link */], {
        to: `/${this.props.team.name}/integrations/incoming_webhooks/edit?id=${incomingWebhook.id}`
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "installed_integrations.edit",
        defaultMessage: "Edit"
      })), ' - ', react_default.a.createElement(delete_integration_DeleteIntegration, {
        messageId: Object(i18n["b" /* t */])('installed_incoming_webhooks.delete.confirm'),
        onDelete: this.handleDelete
      }));
    }

    const incomingWebhookId = Object(url["e" /* getSiteURL */])() + '/hooks/' + incomingWebhook.id;
    return react_default.a.createElement("div", {
      className: "backstage-list__item"
    }, react_default.a.createElement("div", {
      className: "item-details"
    }, react_default.a.createElement("div", {
      className: "item-details__row"
    }, react_default.a.createElement("span", {
      className: "item-details__name"
    }, displayName)), description, react_default.a.createElement("div", {
      className: "item-details__row"
    }, react_default.a.createElement("span", {
      className: "item-details__url"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "installed_integrations.url",
      defaultMessage: "URL: {url}",
      values: {
        url: incomingWebhookId
      }
    }), react_default.a.createElement("span", null, react_default.a.createElement(copy_text_CopyText, {
      value: incomingWebhookId
    })))), react_default.a.createElement("div", {
      className: "item-details__row"
    }, react_default.a.createElement("span", {
      className: "item-details__creation"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "installed_integrations.creation",
      defaultMessage: "Created by {creator} on {createAt, date, full}",
      values: {
        creator: this.props.creator.username,
        createAt: incomingWebhook.create_at
      }
    })))), actions);
  }

}

installed_incoming_webhook_defineProperty(installed_incoming_webhook_InstalledIncomingWebhook, "propTypes", {
  /**
  * Data used for showing webhook details
  */
  incomingWebhook: prop_types_default.a.object.isRequired,

  /**
  * Function to call when webhook delete button is pressed
  */
  onDelete: prop_types_default.a.func.isRequired,

  /**
  * String used for filtering webhook item
  */
  filter: prop_types_default.a.string,

  /**
  * Data used for showing created by details
  */
  creator: prop_types_default.a.object.isRequired,

  /**
  *  Set to show available actions on webhook
  */
  canChange: prop_types_default.a.bool.isRequired,

  /**
  *  Data used in routing of webhook for modifications
  */
  team: prop_types_default.a.object.isRequired,

  /**
  *  Data used for filtering of webhook based on filter prop
  */
  channel: prop_types_default.a.object
});
// CONCATENATED MODULE: ./components/integrations/installed_incoming_webhooks/installed_incoming_webhooks.jsx
function installed_incoming_webhooks_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.








class installed_incoming_webhooks_InstalledIncomingWebhooks extends react_default.a.PureComponent {
  constructor(props) {
    super(props);

    installed_incoming_webhooks_defineProperty(this, "deleteIncomingWebhook", incomingWebhook => {
      this.props.actions.removeIncomingHook(incomingWebhook.id);
    });

    installed_incoming_webhooks_defineProperty(this, "incomingWebhookCompare", (a, b) => {
      let displayNameA = a.display_name;

      if (!displayNameA) {
        const channelA = this.props.channels[a.channel_id];

        if (channelA) {
          displayNameA = channelA.display_name;
        } else {
          displayNameA = utils["gb" /* localizeMessage */]('installed_incoming_webhooks.unknown_channel', 'A Private Webhook');
        }
      }

      const displayNameB = b.display_name;
      return displayNameA.localeCompare(displayNameB);
    });

    installed_incoming_webhooks_defineProperty(this, "incomingWebhooks", filter => this.props.incomingWebhooks.sort(this.incomingWebhookCompare).filter(incomingWebhook => installed_incoming_webhook_matchesFilter(incomingWebhook, this.props.channels[incomingWebhook.channel_id], filter)).map(incomingWebhook => {
      const canChange = this.props.canManageOthersWebhooks || this.props.user.id === incomingWebhook.user_id;
      const channel = this.props.channels[incomingWebhook.channel_id];
      return react_default.a.createElement(installed_incoming_webhook_InstalledIncomingWebhook, {
        key: incomingWebhook.id,
        incomingWebhook: incomingWebhook,
        onDelete: this.deleteIncomingWebhook,
        creator: this.props.users[incomingWebhook.user_id] || {},
        canChange: canChange,
        team: this.props.team,
        channel: channel
      });
    }));

    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    if (this.props.enableIncomingWebhooks) {
      this.props.actions.loadIncomingHooksAndProfilesForTeam(this.props.teamId, utils_constants["N" /* default */].Integrations.START_PAGE_NUM, utils_constants["N" /* default */].Integrations.PAGE_SIZE).then(() => this.setState({
        loading: false
      }));
    }
  }

  render() {
    return react_default.a.createElement(backstage_list_BackstageList, {
      header: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "installed_incoming_webhooks.header",
        defaultMessage: "Installed Incoming Webhooks"
      }),
      addText: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "installed_incoming_webhooks.add",
        defaultMessage: "Add Incoming Webhook"
      }),
      addLink: '/' + this.props.team.name + '/integrations/incoming_webhooks/add',
      addButtonId: "addIncomingWebhook",
      emptyText: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "installed_incoming_webhooks.empty",
        defaultMessage: "No incoming webhooks found"
      }),
      emptyTextSearch: react_default.a.createElement(formatted_markdown_message["b" /* default */], {
        id: "installed_incoming_webhooks.emptySearch",
        defaultMessage: "No incoming webhooks match {searchTerm}"
      }),
      helpText: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "installed_incoming_webhooks.help",
        defaultMessage: "Use incoming webhooks to connect external tools to Mattermost. {buildYourOwn} or visit the {appDirectory} to find self-hosted, third-party apps and integrations.",
        values: {
          buildYourOwn: react_default.a.createElement("a", {
            target: "_blank",
            rel: "noopener noreferrer",
            href: "http://docs.mattermost.com/developer/webhooks-incoming.html"
          }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "installed_incoming_webhooks.help.buildYourOwn",
            defaultMessage: "Build your own"
          })),
          appDirectory: react_default.a.createElement("a", {
            target: "_blank",
            rel: "noopener noreferrer",
            href: "https://about.mattermost.com/default-app-directory/"
          }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "installed_incoming_webhooks.help.appDirectory",
            defaultMessage: "App Directory"
          }))
        }
      }),
      searchPlaceholder: utils["gb" /* localizeMessage */]('installed_incoming_webhooks.search', 'Search Incoming Webhooks'),
      loading: this.state.loading
    }, filter => {
      const children = this.incomingWebhooks(filter);
      return [children, children.length > 0];
    });
  }

}

installed_incoming_webhooks_defineProperty(installed_incoming_webhooks_InstalledIncomingWebhooks, "propTypes", {
  /**
  *  Data used in passing down as props for webhook modifications
  */
  team: prop_types_default.a.object,

  /**
  * Data used for checking if webhook is created by current user
  */
  user: prop_types_default.a.object,

  /**
  *  Data used for checking modification privileges
  */
  canManageOthersWebhooks: prop_types_default.a.bool,

  /**
  * Data used in passing down as props for showing webhook details
  */
  incomingWebhooks: prop_types_default.a.array,

  /**
  * Data used in sorting for displaying list and as props channel details
  */
  channels: prop_types_default.a.object,

  /**
  *  Data used in passing down as props for webhook -created by label
  */
  users: prop_types_default.a.object,

  /**
  *  Data used in passing as argument for loading webhooks
  */
  teamId: prop_types_default.a.string,
  actions: prop_types_default.a.shape({
    /**
    * The function to call for removing incomingWebhook
    */
    removeIncomingHook: prop_types_default.a.func,

    /**
    * The function to call for incomingWebhook List and for the status of api
    */
    loadIncomingHooksAndProfilesForTeam: prop_types_default.a.func
  }),

  /**
  * Whether or not incoming webhooks are enabled.
  */
  enableIncomingWebhooks: prop_types_default.a.bool
});
// CONCATENATED MODULE: ./components/integrations/installed_incoming_webhooks/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.













function installed_incoming_webhooks_mapStateToProps(state) {
  const config = Object(general["getConfig"])(state);
  const teamId = Object(entities_teams["getCurrentTeamId"])(state);
  const canManageOthersWebhooks = Object(entities_roles["haveITeamPermission"])(state, {
    team: teamId,
    permission: constants["Permissions"].MANAGE_OTHERS_INCOMING_WEBHOOKS
  });
  const incomingHooks = Object(entities_integrations["getIncomingHooks"])(state);
  const incomingWebhooks = Object.keys(incomingHooks).map(key => incomingHooks[key]).filter(incomingWebhook => incomingWebhook.team_id === teamId);
  const enableIncomingWebhooks = config.EnableIncomingWebhooks === 'true';
  return {
    incomingWebhooks,
    channels: Object(entities_channels["getAllChannels"])(state),
    users: Object(users["getUsers"])(state),
    teamId,
    canManageOthersWebhooks,
    enableIncomingWebhooks
  };
}

function installed_incoming_webhooks_mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux["bindActionCreators"])({
      loadIncomingHooksAndProfilesForTeam: integration_actions["c" /* loadIncomingHooksAndProfilesForTeam */],
      removeIncomingHook: actions_integrations["removeIncomingHook"]
    }, dispatch)
  };
}

/* harmony default export */ var installed_incoming_webhooks = (Object(es["connect"])(installed_incoming_webhooks_mapStateToProps, installed_incoming_webhooks_mapDispatchToProps)(installed_incoming_webhooks_InstalledIncomingWebhooks));
// EXTERNAL MODULE: ./node_modules/reselect/es/index.js
var reselect_es = __webpack_require__(150);

// EXTERNAL MODULE: ./mattermost-redux/selectors/entities/i18n.js
var entities_i18n = __webpack_require__(432);

// EXTERNAL MODULE: ./mattermost-redux/utils/channel_utils.js
var channel_utils = __webpack_require__(178);

// CONCATENATED MODULE: ./components/channel_select/channel_select.jsx
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.




class channel_select_ChannelSelect extends react_default.a.PureComponent {
  static get propTypes() {
    return {
      channels: prop_types_default.a.array.isRequired,
      onChange: prop_types_default.a.func,
      value: prop_types_default.a.string,
      selectOpen: prop_types_default.a.bool.isRequired,
      selectPrivate: prop_types_default.a.bool.isRequired,
      selectDm: prop_types_default.a.bool.isRequired
    };
  }

  static get defaultProps() {
    return {
      selectOpen: false,
      selectPrivate: false,
      selectDm: false
    };
  }

  render() {
    const options = [react_default.a.createElement("option", {
      key: "",
      value: ""
    }, utils["gb" /* localizeMessage */]('channel_select.placeholder', '--- Select a channel ---'))];
    this.props.channels.forEach(channel => {
      const channelName = channel.display_name || channel.name;

      if (channel.type === utils_constants["N" /* default */].OPEN_CHANNEL && this.props.selectOpen) {
        options.push(react_default.a.createElement("option", {
          key: channel.id,
          value: channel.id
        }, channelName));
      } else if (channel.type === utils_constants["N" /* default */].PRIVATE_CHANNEL && this.props.selectPrivate) {
        options.push(react_default.a.createElement("option", {
          key: channel.id,
          value: channel.id
        }, channelName));
      } else if (channel.type === utils_constants["N" /* default */].DM_CHANNEL && this.props.selectDm) {
        options.push(react_default.a.createElement("option", {
          key: channel.id,
          value: channel.id
        }, channelName));
      }
    });
    return react_default.a.createElement("select", {
      className: "form-control",
      value: this.props.value,
      onChange: this.props.onChange,
      id: "channelSelect"
    }, options);
  }

}
// CONCATENATED MODULE: ./components/channel_select/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






const getMyChannelsSorted = Object(reselect_es["a" /* createSelector */])(entities_channels["getMyChannels"], entities_i18n["getCurrentUserLocale"], (channels, locale) => {
  return [...channels].sort(channel_utils["sortChannelsByTypeAndDisplayName"].bind(null, locale));
});

function channel_select_mapStateToProps(state) {
  return {
    channels: getMyChannelsSorted(state)
  };
}

/* harmony default export */ var channel_select = (Object(es["connect"])(channel_select_mapStateToProps)(channel_select_ChannelSelect));
// CONCATENATED MODULE: ./components/integrations/abstract_incoming_webhook.jsx
function abstract_incoming_webhook_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.









class abstract_incoming_webhook_AbstractIncomingWebhook extends react_default.a.Component {
  constructor(props) {
    super(props);

    abstract_incoming_webhook_defineProperty(this, "getStateFromHook", hook => {
      return {
        displayName: hook.display_name || '',
        description: hook.description || '',
        channelId: hook.channel_id || '',
        channelLocked: hook.channel_locked || false,
        username: hook.username || '',
        iconURL: hook.icon_url || '',
        saving: false,
        serverError: '',
        clientError: null
      };
    });

    abstract_incoming_webhook_defineProperty(this, "handleSubmit", e => {
      e.preventDefault();

      if (this.state.saving) {
        return;
      }

      this.setState({
        saving: true,
        serverError: '',
        clientError: ''
      });

      if (!this.state.channelId) {
        this.setState({
          saving: false,
          clientError: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "add_incoming_webhook.channelRequired",
            defaultMessage: "A valid channel is required"
          })
        });
        return;
      }

      const hook = {
        channel_id: this.state.channelId,
        channel_locked: this.state.channelLocked,
        display_name: this.state.displayName,
        description: this.state.description,
        username: this.state.username,
        icon_url: this.state.iconURL
      };
      this.props.action(hook).then(() => this.setState({
        saving: false
      }));
    });

    abstract_incoming_webhook_defineProperty(this, "updateDisplayName", e => {
      this.setState({
        displayName: e.target.value
      });
    });

    abstract_incoming_webhook_defineProperty(this, "updateDescription", e => {
      this.setState({
        description: e.target.value
      });
    });

    abstract_incoming_webhook_defineProperty(this, "updateChannelId", e => {
      this.setState({
        channelId: e.target.value
      });
    });

    abstract_incoming_webhook_defineProperty(this, "updateChannelLocked", e => {
      this.setState({
        channelLocked: e.target.checked
      });
    });

    abstract_incoming_webhook_defineProperty(this, "updateUsername", e => {
      this.setState({
        username: e.target.value
      });
    });

    abstract_incoming_webhook_defineProperty(this, "updateIconURL", e => {
      this.setState({
        iconURL: e.target.value
      });
    });

    this.state = this.getStateFromHook(this.props.initialHook || {});
  }

  render() {
    var headerToRender = this.props.header;
    var footerToRender = this.props.footer;
    return react_default.a.createElement("div", {
      className: "backstage-content"
    }, react_default.a.createElement(backstage_header_BackstageHeader, null, react_default.a.createElement(react_router_dom["a" /* Link */], {
      to: `/${this.props.team.name}/integrations/incoming_webhooks`
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "installed_incoming_webhooks.header",
      defaultMessage: "Incoming Webhooks"
    })), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: headerToRender.id,
      defaultMessage: headerToRender.defaultMessage
    })), react_default.a.createElement("div", {
      className: "backstage-form"
    }, react_default.a.createElement("form", {
      className: "form-horizontal",
      onSubmit: this.handleSubmit
    }, react_default.a.createElement("div", {
      className: "form-group"
    }, react_default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "displayName"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_incoming_webhook.displayName",
      defaultMessage: "Title"
    })), react_default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react_default.a.createElement("input", {
      id: "displayName",
      type: "text",
      maxLength: "64",
      className: "form-control",
      value: this.state.displayName,
      onChange: this.updateDisplayName
    }), react_default.a.createElement("div", {
      className: "form__help"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_incoming_webhook.displayName.help",
      defaultMessage: "Choose a title to be displayed on the webhook settings page. Maximum 64 characters."
    })))), react_default.a.createElement("div", {
      className: "form-group"
    }, react_default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "description"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_incoming_webhook.description",
      defaultMessage: "Description"
    })), react_default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react_default.a.createElement("input", {
      id: "description",
      type: "text",
      maxLength: "500",
      className: "form-control",
      value: this.state.description,
      onChange: this.updateDescription
    }), react_default.a.createElement("div", {
      className: "form__help"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_incoming_webhook.description.help",
      defaultMessage: "Description for your incoming webhook."
    })))), react_default.a.createElement("div", {
      className: "form-group"
    }, react_default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "channelId"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_incoming_webhook.channel",
      defaultMessage: "Channel"
    })), react_default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react_default.a.createElement(channel_select, {
      id: "channelId",
      value: this.state.channelId,
      onChange: this.updateChannelId,
      selectOpen: true,
      selectPrivate: true
    }), react_default.a.createElement("div", {
      className: "form__help"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_incoming_webhook.channel.help",
      defaultMessage: "The default public or private channel that receives the webhook payloads. You must belong to the private channel when setting up the webhook."
    })))), react_default.a.createElement("div", {
      className: "form-group"
    }, react_default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "channelLocked"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_incoming_webhook.channelLocked",
      defaultMessage: "Lock to this channel"
    })), react_default.a.createElement("div", {
      className: "col-md-5 col-sm-8 checkbox"
    }, react_default.a.createElement("input", {
      id: "channelLocked",
      type: "checkbox",
      checked: this.state.channelLocked,
      onChange: this.updateChannelLocked
    }), react_default.a.createElement("div", {
      className: "form__help"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_incoming_webhook.channelLocked.help",
      defaultMessage: "If set, the incoming webhook can only post to the channel selected above."
    })))), this.props.enablePostUsernameOverride && react_default.a.createElement("div", {
      className: "form-group"
    }, react_default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "username"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_incoming_webhook.username",
      defaultMessage: "Username"
    })), react_default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react_default.a.createElement("input", {
      id: "username",
      type: "text",
      maxLength: "22",
      className: "form-control",
      value: this.state.username,
      onChange: this.updateUsername
    }), react_default.a.createElement("div", {
      className: "form__help"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_incoming_webhook.username.help",
      defaultMessage: "Choose the username this integration will post as. Usernames can be up to 22 characters, and may contain lowercase letters, numbers and the symbols \"-\", \"_\", and \".\"."
    })))), this.props.enablePostIconOverride && react_default.a.createElement("div", {
      className: "form-group"
    }, react_default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "iconURL"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_incoming_webhook.icon_url",
      defaultMessage: "Profile Picture"
    })), react_default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react_default.a.createElement("input", {
      id: "iconURL",
      type: "text",
      maxLength: "1024",
      className: "form-control",
      value: this.state.iconURL,
      onChange: this.updateIconURL
    }), react_default.a.createElement("div", {
      className: "form__help"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_incoming_webhook.icon_url.help",
      defaultMessage: "Choose the profile picture this integration will use when posting. Enter the URL of a .png or .jpg file at least 128 pixels by 128 pixels."
    })))), react_default.a.createElement("div", {
      className: "backstage-form__footer"
    }, react_default.a.createElement(form_error["a" /* default */], {
      type: "backstage",
      errors: [this.props.serverError, this.state.clientError]
    }), react_default.a.createElement(react_router_dom["a" /* Link */], {
      className: "btn btn-link btn-sm",
      to: `/${this.props.team.name}/integrations/incoming_webhooks`
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_incoming_webhook.cancel",
      defaultMessage: "Cancel"
    })), react_default.a.createElement(spinner_button["a" /* default */], {
      className: "btn btn-primary",
      type: "submit",
      spinning: this.state.saving,
      spinningText: Object(utils["gb" /* localizeMessage */])(this.props.loading.id, this.props.loading.defaultMessage),
      onClick: this.handleSubmit,
      id: "saveWebhook"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: footerToRender.id,
      defaultMessage: footerToRender.defaultMessage
    }))))));
  }

}

abstract_incoming_webhook_defineProperty(abstract_incoming_webhook_AbstractIncomingWebhook, "propTypes", {
  /**
  * The current team
  */
  team: prop_types_default.a.object.isRequired,

  /**
  * The header text to render, has id and defaultMessage
  */
  header: prop_types_default.a.object.isRequired,

  /**
  * The footer text to render, has id and defaultMessage
  */
  footer: prop_types_default.a.object.isRequired,

  /**
  * The spinner loading text to render, has id and defaultMessage
  */
  loading: prop_types_default.a.object.isRequired,

  /**
  * The server error text after a failed action
  */
  serverError: prop_types_default.a.string.isRequired,

  /**
  * The hook used to set the initial state
  */
  initialHook: prop_types_default.a.object,

  /**
  * Whether to allow configuration of the default post username.
  */
  enablePostUsernameOverride: prop_types_default.a.bool.isRequired,

  /**
  * Whether to allow configuration of the default post icon.
  */
  enablePostIconOverride: prop_types_default.a.bool.isRequired,

  /**
  * The async function to run when the action button is pressed
  */
  action: prop_types_default.a.func.isRequired
});
// CONCATENATED MODULE: ./components/integrations/add_incoming_webhook/add_incoming_webhook.jsx
function add_incoming_webhook_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





const HEADER = {
  id: Object(i18n["b" /* t */])('integrations.add'),
  defaultMessage: 'Add'
};
const FOOTER = {
  id: Object(i18n["b" /* t */])('add_incoming_webhook.save'),
  defaultMessage: 'Save'
};
const LOADING = {
  id: Object(i18n["b" /* t */])('add_incoming_webhook.saving'),
  defaultMessage: 'Saving...'
};
class add_incoming_webhook_AddIncomingWebhook extends react_default.a.PureComponent {
  constructor(props) {
    super(props);

    add_incoming_webhook_defineProperty(this, "addIncomingHook", async hook => {
      this.setState({
        serverError: ''
      });
      const {
        data
      } = await this.props.actions.createIncomingHook(hook);

      if (data) {
        browser_history["a" /* browserHistory */].push(`/${this.props.team.name}/integrations/confirm?type=incoming_webhooks&id=${data.id}`);
        return;
      }

      if (this.props.createIncomingHookRequest.error) {
        this.setState({
          serverError: this.props.createIncomingHookRequest.error.message
        });
      }
    });

    this.state = {
      serverError: ''
    };
  }

  render() {
    return react_default.a.createElement(abstract_incoming_webhook_AbstractIncomingWebhook, {
      team: this.props.team,
      header: HEADER,
      footer: FOOTER,
      loading: LOADING,
      enablePostUsernameOverride: this.props.enablePostUsernameOverride,
      enablePostIconOverride: this.props.enablePostIconOverride,
      action: this.addIncomingHook,
      serverError: this.state.serverError
    });
  }

}

add_incoming_webhook_defineProperty(add_incoming_webhook_AddIncomingWebhook, "propTypes", {
  /**
  * The current team
  */
  team: prop_types_default.a.object.isRequired,

  /**
  * The request state for createIncomingHook action. Contains status and error
  */
  createIncomingHookRequest: prop_types_default.a.object.isRequired,

  /**
  * Whether to allow configuration of the default post username.
  */
  enablePostUsernameOverride: prop_types_default.a.bool.isRequired,

  /**
  * Whether to allow configuration of the default post icon.
  */
  enablePostIconOverride: prop_types_default.a.bool.isRequired,
  actions: prop_types_default.a.shape({
    /**
    * The function to call to add a new incoming webhook
    */
    createIncomingHook: prop_types_default.a.func.isRequired
  }).isRequired
});
// CONCATENATED MODULE: ./components/integrations/add_incoming_webhook/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






function add_incoming_webhook_mapStateToProps(state) {
  const config = Object(general["getConfig"])(state);
  const enablePostUsernameOverride = config.EnablePostUsernameOverride === 'true';
  const enablePostIconOverride = config.EnablePostIconOverride === 'true';
  return {
    createIncomingHookRequest: state.requests.integrations.createIncomingHook,
    enablePostUsernameOverride,
    enablePostIconOverride
  };
}

function add_incoming_webhook_mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux["bindActionCreators"])({
      createIncomingHook: actions_integrations["createIncomingHook"]
    }, dispatch)
  };
}

/* harmony default export */ var add_incoming_webhook = (Object(es["connect"])(add_incoming_webhook_mapStateToProps, add_incoming_webhook_mapDispatchToProps)(add_incoming_webhook_AddIncomingWebhook));
// CONCATENATED MODULE: ./components/integrations/edit_incoming_webhook/edit_incoming_webhook.jsx
function edit_incoming_webhook_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






const edit_incoming_webhook_HEADER = {
  id: Object(i18n["b" /* t */])('integrations.edit'),
  defaultMessage: 'Edit'
};
const edit_incoming_webhook_FOOTER = {
  id: Object(i18n["b" /* t */])('update_incoming_webhook.update'),
  defaultMessage: 'Update'
};
const edit_incoming_webhook_LOADING = {
  id: Object(i18n["b" /* t */])('update_incoming_webhook.updating'),
  defaultMessage: 'Updating...'
};
class edit_incoming_webhook_EditIncomingWebhook extends react_default.a.PureComponent {
  constructor(props) {
    super(props);

    edit_incoming_webhook_defineProperty(this, "editIncomingHook", async hook => {
      this.newHook = hook;

      if (this.props.hook.id) {
        hook.id = this.props.hook.id;
      }

      if (this.props.hook.token) {
        hook.token = this.props.hook.token;
      }

      await this.submitHook();
    });

    edit_incoming_webhook_defineProperty(this, "submitHook", async () => {
      this.setState({
        serverError: ''
      });
      const {
        data
      } = await this.props.actions.updateIncomingHook(this.newHook);

      if (data) {
        browser_history["a" /* browserHistory */].push(`/${this.props.team.name}/integrations/incoming_webhooks`);
        return;
      }

      if (this.props.updateIncomingHookRequest.error) {
        this.setState({
          serverError: this.props.updateIncomingHookRequest.error.message
        });
      }
    });

    this.state = {
      showConfirmModal: false,
      serverError: ''
    };
  }

  componentDidMount() {
    if (this.props.enableIncomingWebhooks) {
      this.props.actions.getIncomingHook(this.props.hookId);
    }
  }

  render() {
    if (!this.props.hook) {
      return react_default.a.createElement(loading_screen["a" /* default */], null);
    }

    return react_default.a.createElement(abstract_incoming_webhook_AbstractIncomingWebhook, {
      team: this.props.team,
      header: edit_incoming_webhook_HEADER,
      footer: edit_incoming_webhook_FOOTER,
      loading: edit_incoming_webhook_LOADING,
      enablePostUsernameOverride: this.props.enablePostUsernameOverride,
      enablePostIconOverride: this.props.enablePostIconOverride,
      action: this.editIncomingHook,
      serverError: this.state.serverError,
      initialHook: this.props.hook
    });
  }

}

edit_incoming_webhook_defineProperty(edit_incoming_webhook_EditIncomingWebhook, "propTypes", {
  /**
  * The current team
  */
  team: prop_types_default.a.object.isRequired,

  /**
  * The incoming webhook to edit
  */
  hook: prop_types_default.a.object,

  /**
  * The id of the incoming webhook to edit
  */
  hookId: prop_types_default.a.string.isRequired,

  /**
  * The request state for updateIncomingHook action. Contains status and error
  */
  updateIncomingHookRequest: prop_types_default.a.object.isRequired,

  /**
  * Whether or not incoming webhooks are enabled.
  */
  enableIncomingWebhooks: prop_types_default.a.bool.isRequired,

  /**
  * Whether to allow configuration of the default post username.
  */
  enablePostUsernameOverride: prop_types_default.a.bool.isRequired,

  /**
  * Whether to allow configuration of the default post icon.
  */
  enablePostIconOverride: prop_types_default.a.bool.isRequired,
  actions: prop_types_default.a.shape({
    /**
    * The function to call to update an incoming webhook
    */
    updateIncomingHook: prop_types_default.a.func.isRequired,

    /**
    * The function to call to get an incoming webhook
    */
    getIncomingHook: prop_types_default.a.func.isRequired
  }).isRequired
});
// CONCATENATED MODULE: ./components/integrations/edit_incoming_webhook/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






function edit_incoming_webhook_mapStateToProps(state, ownProps) {
  const config = Object(general["getConfig"])(state);
  const enableIncomingWebhooks = config.EnableIncomingWebhooks === 'true';
  const enablePostUsernameOverride = config.EnablePostUsernameOverride === 'true';
  const enablePostIconOverride = config.EnablePostIconOverride === 'true';
  const hookId = new URLSearchParams(ownProps.location.search).get('id');
  return {
    hookId,
    hook: state.entities.integrations.incomingHooks[hookId],
    updateIncomingHookRequest: state.requests.integrations.updateIncomingHook,
    enableIncomingWebhooks,
    enablePostUsernameOverride,
    enablePostIconOverride
  };
}

function edit_incoming_webhook_mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux["bindActionCreators"])({
      updateIncomingHook: actions_integrations["updateIncomingHook"],
      getIncomingHook: actions_integrations["getIncomingHook"]
    }, dispatch)
  };
}

/* harmony default export */ var edit_incoming_webhook = (Object(es["connect"])(edit_incoming_webhook_mapStateToProps, edit_incoming_webhook_mapDispatchToProps)(edit_incoming_webhook_EditIncomingWebhook));
// CONCATENATED MODULE: ./components/integrations/installed_outgoing_webhook.jsx
function installed_outgoing_webhook_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.







function installed_outgoing_webhook_matchesFilter(outgoingWebhook, channel, filter) {
  if (!filter) {
    return true;
  }

  const {
    display_name: displayName,
    description,
    trigger_words: triggerWords
  } = outgoingWebhook;

  if (displayName && displayName.toLowerCase().indexOf(filter) !== -1 || description && description.toLowerCase().indexOf(filter) !== -1) {
    return true;
  }

  if (triggerWords) {
    for (const triggerWord of triggerWords) {
      if (triggerWord.toLowerCase().indexOf(filter) !== -1) {
        return true;
      }
    }
  }

  if (channel && channel.name) {
    if (channel.name.toLowerCase().indexOf(filter) !== -1) {
      return true;
    }
  }

  return false;
}
class installed_outgoing_webhook_InstalledOutgoingWebhook extends react_default.a.PureComponent {
  constructor(props) {
    super(props);
    this.handleRegenToken = this.handleRegenToken.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleRegenToken(e) {
    e.preventDefault();
    this.props.onRegenToken(this.props.outgoingWebhook);
  }

  handleDelete() {
    this.props.onDelete(this.props.outgoingWebhook);
  }

  makeDisplayName(outgoingWebhook, channel) {
    if (outgoingWebhook.display_name) {
      return outgoingWebhook.display_name;
    } else if (channel) {
      return channel.display_name;
    }

    return react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "installed_outgoing_webhooks.unknown_channel",
      defaultMessage: "A Private Webhook"
    });
  }

  render() {
    const outgoingWebhook = this.props.outgoingWebhook;
    const channel = this.props.channel;
    const filter = this.props.filter ? this.props.filter.toLowerCase() : '';
    const triggerWordsFull = 0;
    const triggerWordsStartsWith = 1;

    if (outgoingWebhook && !installed_outgoing_webhook_matchesFilter(outgoingWebhook, channel, filter)) {
      return null;
    }

    const displayName = this.makeDisplayName(outgoingWebhook, channel);
    let description = null;

    if (outgoingWebhook.description) {
      description = react_default.a.createElement("div", {
        className: "item-details__row"
      }, react_default.a.createElement("span", {
        className: "item-details__description"
      }, outgoingWebhook.description));
    }

    let triggerWords = null;

    if (outgoingWebhook.trigger_words && outgoingWebhook.trigger_words.length > 0) {
      triggerWords = react_default.a.createElement("div", {
        className: "item-details__row"
      }, react_default.a.createElement("span", {
        className: "item-details__trigger-words"
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "installed_integrations.triggerWords",
        defaultMessage: "Trigger Words: {triggerWords}",
        values: {
          triggerWords: outgoingWebhook.trigger_words.join(', ')
        }
      })));
    }

    const urls = react_default.a.createElement("div", {
      className: "item-details__row"
    }, react_default.a.createElement("span", {
      className: "item-details__url"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "installed_integrations.callback_urls",
      defaultMessage: "Callback URLs: {urls}",
      values: {
        urls: outgoingWebhook.callback_urls.join(', ')
      }
    })));
    let triggerWhen;

    if (outgoingWebhook.trigger_when === triggerWordsFull) {
      triggerWhen = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "add_outgoing_webhook.triggerWordsTriggerWhenFullWord",
        defaultMessage: "First word matches a trigger word exactly"
      });
    } else if (outgoingWebhook.trigger_when === triggerWordsStartsWith) {
      triggerWhen = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "add_outgoing_webhook.triggerWordsTriggerWhenStartsWith",
        defaultMessage: "First word starts with a trigger word"
      });
    }

    let actions = null;

    if (this.props.canChange) {
      actions = react_default.a.createElement("div", {
        className: "item-actions"
      }, react_default.a.createElement("button", {
        className: "style--none color--link",
        onClick: this.handleRegenToken
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "installed_integrations.regenToken",
        defaultMessage: "Regen Token"
      })), ' - ', react_default.a.createElement(react_router_dom["a" /* Link */], {
        to: `/${this.props.team.name}/integrations/outgoing_webhooks/edit?id=${outgoingWebhook.id}`
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "installed_integrations.edit",
        defaultMessage: "Edit"
      })), ' - ', react_default.a.createElement(delete_integration_DeleteIntegration, {
        messageId: Object(i18n["b" /* t */])('installed_outgoing_webhooks.delete.confirm'),
        onDelete: this.handleDelete
      }));
    }

    return react_default.a.createElement("div", {
      className: "backstage-list__item"
    }, react_default.a.createElement("div", {
      className: "item-details"
    }, react_default.a.createElement("div", {
      className: "item-details__row"
    }, react_default.a.createElement("span", {
      className: "item-details__name"
    }, displayName)), description, react_default.a.createElement("div", {
      className: "item-details__row"
    }, react_default.a.createElement("span", {
      className: "item-details__content_type"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "installed_integrations.content_type",
      defaultMessage: "Content-Type: {contentType}",
      values: {
        contentType: outgoingWebhook.content_type || 'application/x-www-form-urlencoded'
      }
    }))), triggerWords, react_default.a.createElement("div", {
      className: "item-details__row"
    }, react_default.a.createElement("span", {
      className: "item-details__trigger-when"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "installed_integrations.triggerWhen",
      defaultMessage: "Trigger When: {triggerWhen}",
      values: {
        triggerWhen
      }
    }))), react_default.a.createElement("div", {
      className: "item-details__row"
    }, react_default.a.createElement("span", {
      className: "item-details__token"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "installed_integrations.token",
      defaultMessage: "Token: {token}",
      values: {
        token: outgoingWebhook.token
      }
    }), react_default.a.createElement(copy_text_CopyText, {
      value: outgoingWebhook.token
    }))), react_default.a.createElement("div", {
      className: "item-details__row"
    }, react_default.a.createElement("span", {
      className: "item-details__creation"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "installed_integrations.creation",
      defaultMessage: "Created by {creator} on {createAt, date, full}",
      values: {
        creator: this.props.creator.username,
        createAt: outgoingWebhook.create_at
      }
    }))), urls), actions);
  }

}

installed_outgoing_webhook_defineProperty(installed_outgoing_webhook_InstalledOutgoingWebhook, "propTypes", {
  /**
  * Data used for showing webhook details
  */
  outgoingWebhook: prop_types_default.a.object.isRequired,

  /**
  * Function used for webhook token regeneration
  */
  onRegenToken: prop_types_default.a.func.isRequired,

  /**
  * Function to call when webhook delete button is pressed
  */
  onDelete: prop_types_default.a.func.isRequired,

  /**
  * String used for filtering webhook item
  */
  filter: prop_types_default.a.string,

  /**
  * Data used for showing created by details
  */
  creator: prop_types_default.a.object.isRequired,

  /**
  *  Set to show available actions on webhook
  */
  canChange: prop_types_default.a.bool.isRequired,

  /**
  *  Data used in routing of webhook for modifications
  */
  team: prop_types_default.a.object.isRequired,

  /**
  *  Data used for filtering of webhooks based in filter prop
  */
  channel: prop_types_default.a.object
});
// CONCATENATED MODULE: ./components/integrations/installed_outgoing_webhooks/installed_outgoing_webhooks.jsx
function installed_outgoing_webhooks_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.








class installed_outgoing_webhooks_InstalledOutgoingWebhooks extends react_default.a.PureComponent {
  constructor(props) {
    super(props);

    installed_outgoing_webhooks_defineProperty(this, "regenOutgoingWebhookToken", outgoingWebhook => {
      this.props.actions.regenOutgoingHookToken(outgoingWebhook.id);
    });

    installed_outgoing_webhooks_defineProperty(this, "removeOutgoingHook", outgoingWebhook => {
      this.props.actions.removeOutgoingHook(outgoingWebhook.id);
    });

    installed_outgoing_webhooks_defineProperty(this, "outgoingWebhooks", filter => this.props.outgoingWebhooks.sort(this.outgoingWebhookCompare).filter(outgoingWebhook => installed_outgoing_webhook_matchesFilter(outgoingWebhook, this.props.channels[outgoingWebhook.channel_id], filter)).map(outgoingWebhook => {
      const canChange = this.props.canManageOthersWebhooks || this.props.user.id === outgoingWebhook.creator_id;
      const channel = this.props.channels[outgoingWebhook.channel_id];
      return react_default.a.createElement(installed_outgoing_webhook_InstalledOutgoingWebhook, {
        key: outgoingWebhook.id,
        outgoingWebhook: outgoingWebhook,
        onRegenToken: this.regenOutgoingWebhookToken,
        onDelete: this.removeOutgoingHook,
        creator: this.props.users[outgoingWebhook.creator_id] || {},
        canChange: canChange,
        team: this.props.team,
        channel: channel
      });
    }));

    this.outgoingWebhookCompare = this.outgoingWebhookCompare.bind(this);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    if (this.props.enableOutgoingWebhooks) {
      this.props.actions.loadOutgoingHooksAndProfilesForTeam(this.props.teamId, utils_constants["N" /* default */].Integrations.START_PAGE_NUM, utils_constants["N" /* default */].Integrations.PAGE_SIZE).then(() => this.setState({
        loading: false
      }));
    }
  }

  outgoingWebhookCompare(a, b) {
    let displayNameA = a.display_name;

    if (!displayNameA) {
      const channelA = this.props.channels[a.channel_id];

      if (channelA) {
        displayNameA = channelA.display_name;
      } else {
        displayNameA = utils["gb" /* localizeMessage */]('installed_outgoing_webhooks.unknown_channel', 'A Private Webhook');
      }
    }

    let displayNameB = b.display_name;

    if (!displayNameB) {
      const channelB = this.props.channels[b.channel_id];

      if (channelB) {
        displayNameB = channelB.display_name;
      } else {
        displayNameB = utils["gb" /* localizeMessage */]('installed_outgoing_webhooks.unknown_channel', 'A Private Webhook');
      }
    }

    return displayNameA.localeCompare(displayNameB);
  }

  render() {
    return react_default.a.createElement(backstage_list_BackstageList, {
      header: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "installed_outgoing_webhooks.header",
        defaultMessage: "Installed Outgoing Webhooks"
      }),
      addText: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "installed_outgoing_webhooks.add",
        defaultMessage: "Add Outgoing Webhook"
      }),
      addLink: '/' + this.props.team.name + '/integrations/outgoing_webhooks/add',
      addButtonId: "addOutgoingWebhook",
      emptyText: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "installed_outgoing_webhooks.empty",
        defaultMessage: "No outgoing webhooks found"
      }),
      emptyTextSearch: react_default.a.createElement(formatted_markdown_message["b" /* default */], {
        id: "installed_outgoing_webhooks.emptySearch",
        defaultMessage: "No outgoing webhooks match {searchTerm}"
      }),
      helpText: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "installed_outgoing_webhooks.help",
        defaultMessage: "Use outgoing webhooks to connect external tools to Mattermost. {buildYourOwn} or visit the {appDirectory} to find self-hosted, third-party apps and integrations.",
        values: {
          buildYourOwn: react_default.a.createElement("a", {
            target: "_blank",
            rel: "noopener noreferrer",
            href: "http://docs.mattermost.com/developer/webhooks-outgoing.html"
          }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "installed_outgoing_webhooks.help.buildYourOwn",
            defaultMessage: "Build your own"
          })),
          appDirectory: react_default.a.createElement("a", {
            target: "_blank",
            rel: "noopener noreferrer",
            href: "https://about.mattermost.com/default-app-directory/"
          }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "installed_outgoing_webhooks.help.appDirectory",
            defaultMessage: "App Directory"
          }))
        }
      }),
      searchPlaceholder: utils["gb" /* localizeMessage */]('installed_outgoing_webhooks.search', 'Search Outgoing Webhooks'),
      loading: this.state.loading
    }, filter => {
      const children = this.outgoingWebhooks(filter);
      return [children, children.length > 0];
    });
  }

}

installed_outgoing_webhooks_defineProperty(installed_outgoing_webhooks_InstalledOutgoingWebhooks, "propTypes", {
  /**
  *  Data used in passing down as props for webhook modifications
  */
  team: prop_types_default.a.object,

  /**
  * Data used for checking if webhook is created by current user
  */
  user: prop_types_default.a.object,

  /**
  *  Data used for checking modification privileges
  */
  canManageOthersWebhooks: prop_types_default.a.bool,

  /**
  * Data used in passing down as props for showing webhook details
  */
  outgoingWebhooks: prop_types_default.a.array,

  /**
  * Data used in sorting for displaying list and as props channel details
  */
  channels: prop_types_default.a.object,

  /**
  *  Data used in passing down as props for webhook -created by label
  */
  users: prop_types_default.a.object,

  /**
  *  Data used in passing as argument for loading webhooks
  */
  teamId: prop_types_default.a.string,
  actions: prop_types_default.a.shape({
    /**
    * The function to call for removing outgoingWebhook
    */
    removeOutgoingHook: prop_types_default.a.func,

    /**
    * The function to call for outgoingWebhook List and for the status of api
    */
    loadOutgoingHooksAndProfilesForTeam: prop_types_default.a.func,

    /**
    * The function to call for regeneration of webhook token
    */
    regenOutgoingHookToken: prop_types_default.a.func
  }),

  /**
  * Whether or not outgoing webhooks are enabled.
  */
  enableOutgoingWebhooks: prop_types_default.a.bool
});
// CONCATENATED MODULE: ./components/integrations/installed_outgoing_webhooks/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.













function installed_outgoing_webhooks_mapStateToProps(state) {
  const config = Object(general["getConfig"])(state);
  const teamId = Object(entities_teams["getCurrentTeamId"])(state);
  const canManageOthersWebhooks = Object(entities_roles["haveITeamPermission"])(state, {
    team: teamId,
    permission: constants["Permissions"].MANAGE_OTHERS_OUTGOING_WEBHOOKS
  });
  const outgoingHooks = Object(entities_integrations["getOutgoingHooks"])(state);
  const outgoingWebhooks = Object.keys(outgoingHooks).map(key => outgoingHooks[key]).filter(outgoingWebhook => outgoingWebhook.team_id === teamId);
  const enableOutgoingWebhooks = config.EnableOutgoingWebhooks === 'true';
  return {
    outgoingWebhooks,
    channels: Object(entities_channels["getAllChannels"])(state),
    users: Object(users["getUsers"])(state),
    teamId,
    canManageOthersWebhooks,
    enableOutgoingWebhooks
  };
}

function installed_outgoing_webhooks_mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux["bindActionCreators"])({
      loadOutgoingHooksAndProfilesForTeam: integration_actions["e" /* loadOutgoingHooksAndProfilesForTeam */],
      removeOutgoingHook: actions_integrations["removeOutgoingHook"],
      regenOutgoingHookToken: actions_integrations["regenOutgoingHookToken"]
    }, dispatch)
  };
}

/* harmony default export */ var installed_outgoing_webhooks = (Object(es["connect"])(installed_outgoing_webhooks_mapStateToProps, installed_outgoing_webhooks_mapDispatchToProps)(installed_outgoing_webhooks_InstalledOutgoingWebhooks));
// CONCATENATED MODULE: ./components/integrations/abstract_outgoing_webhook.jsx
function abstract_outgoing_webhook_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.









class abstract_outgoing_webhook_AbstractOutgoingWebhook extends react_default.a.Component {
  constructor(props) {
    super(props);

    abstract_outgoing_webhook_defineProperty(this, "getStateFromHook", hook => {
      let triggerWords = '';

      if (hook.trigger_words) {
        let i = 0;

        for (i = 0; i < hook.trigger_words.length; i++) {
          triggerWords += hook.trigger_words[i] + '\n';
        }
      }

      let callbackUrls = '';

      if (hook.callback_urls) {
        let i = 0;

        for (i = 0; i < hook.callback_urls.length; i++) {
          callbackUrls += hook.callback_urls[i] + '\n';
        }
      }

      return {
        displayName: hook.display_name || '',
        description: hook.description || '',
        contentType: hook.content_type || 'application/x-www-form-urlencoded',
        channelId: hook.channel_id || '',
        triggerWords,
        triggerWhen: hook.trigger_when || 0,
        callbackUrls,
        saving: false,
        clientError: null,
        username: hook.username || '',
        iconURL: hook.icon_url || ''
      };
    });

    abstract_outgoing_webhook_defineProperty(this, "handleSubmit", e => {
      e.preventDefault();

      if (this.state.saving) {
        return;
      }

      this.setState({
        saving: true,
        clientError: ''
      });
      const triggerWords = [];

      if (this.state.triggerWords) {
        for (let triggerWord of this.state.triggerWords.split('\n')) {
          triggerWord = triggerWord.trim();

          if (triggerWord.length > 0) {
            triggerWords.push(triggerWord);
          }
        }
      }

      if (!this.state.channelId && triggerWords.length === 0) {
        this.setState({
          saving: false,
          clientError: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "add_outgoing_webhook.triggerWordsOrChannelRequired",
            defaultMessage: "A valid channel or a list of trigger words is required"
          })
        });
        return;
      }

      const callbackUrls = [];

      for (let callbackUrl of this.state.callbackUrls.split('\n')) {
        callbackUrl = callbackUrl.trim();

        if (callbackUrl.length > 0) {
          callbackUrls.push(callbackUrl);
        }
      }

      if (callbackUrls.length === 0) {
        this.setState({
          saving: false,
          clientError: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "add_outgoing_webhook.callbackUrlsRequired",
            defaultMessage: "One or more callback URLs are required"
          })
        });
        return;
      }

      const hook = {
        team_id: this.props.team.id,
        channel_id: this.state.channelId,
        trigger_words: triggerWords,
        trigger_when: parseInt(this.state.triggerWhen, 10),
        callback_urls: callbackUrls,
        display_name: this.state.displayName,
        content_type: this.state.contentType,
        description: this.state.description,
        username: this.state.username,
        icon_url: this.state.iconURL
      };
      this.props.action(hook).then(() => this.setState({
        saving: false
      }));
    });

    abstract_outgoing_webhook_defineProperty(this, "updateDisplayName", e => {
      this.setState({
        displayName: e.target.value
      });
    });

    abstract_outgoing_webhook_defineProperty(this, "updateDescription", e => {
      this.setState({
        description: e.target.value
      });
    });

    abstract_outgoing_webhook_defineProperty(this, "updateContentType", e => {
      this.setState({
        contentType: e.target.value
      });
    });

    abstract_outgoing_webhook_defineProperty(this, "updateChannelId", e => {
      this.setState({
        channelId: e.target.value
      });
    });

    abstract_outgoing_webhook_defineProperty(this, "updateTriggerWords", e => {
      this.setState({
        triggerWords: e.target.value
      });
    });

    abstract_outgoing_webhook_defineProperty(this, "updateTriggerWhen", e => {
      this.setState({
        triggerWhen: e.target.value
      });
    });

    abstract_outgoing_webhook_defineProperty(this, "updateCallbackUrls", e => {
      this.setState({
        callbackUrls: e.target.value
      });
    });

    abstract_outgoing_webhook_defineProperty(this, "updateUsername", e => {
      this.setState({
        username: e.target.value
      });
    });

    abstract_outgoing_webhook_defineProperty(this, "updateIconURL", e => {
      this.setState({
        iconURL: e.target.value
      });
    });

    this.state = this.getStateFromHook(this.props.initialHook || {});
  }

  render() {
    const contentTypeOption1 = 'application/x-www-form-urlencoded';
    const contentTypeOption2 = 'application/json';
    var headerToRender = this.props.header;
    var footerToRender = this.props.footer;
    var renderExtra = this.props.renderExtra;
    return react_default.a.createElement("div", {
      className: "backstage-content"
    }, react_default.a.createElement(backstage_header_BackstageHeader, null, react_default.a.createElement(react_router_dom["a" /* Link */], {
      to: `/${this.props.team.name}/integrations/outgoing_webhooks`
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "installed_outgoing_webhooks.header",
      defaultMessage: "Outgoing Webhooks"
    })), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: headerToRender.id,
      defaultMessage: headerToRender.defaultMessage
    })), react_default.a.createElement("div", {
      className: "backstage-form"
    }, react_default.a.createElement("form", {
      className: "form-horizontal",
      onSubmit: this.handleSubmit
    }, react_default.a.createElement("div", {
      className: "form-group"
    }, react_default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "displayName"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_outgoing_webhook.displayName",
      defaultMessage: "Title"
    })), react_default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react_default.a.createElement("input", {
      id: "displayName",
      type: "text",
      maxLength: "64",
      className: "form-control",
      value: this.state.displayName,
      onChange: this.updateDisplayName
    }), react_default.a.createElement("div", {
      className: "form__help"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_outgoing_webhook.displayName.help",
      defaultMessage: "Choose a title to be displayed on the webhook settings page. Maximum 64 characters."
    })))), react_default.a.createElement("div", {
      className: "form-group"
    }, react_default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "description"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_outgoing_webhook.description",
      defaultMessage: "Description"
    })), react_default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react_default.a.createElement("input", {
      id: "description",
      type: "text",
      maxLength: "500",
      className: "form-control",
      value: this.state.description,
      onChange: this.updateDescription
    }), react_default.a.createElement("div", {
      className: "form__help"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_outgoing_webhook.description.help",
      defaultMessage: "Description for your incoming webhook."
    })))), react_default.a.createElement("div", {
      className: "form-group"
    }, react_default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "contentType"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_outgoing_webhook.content_Type",
      defaultMessage: "Content Type"
    })), react_default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react_default.a.createElement("select", {
      className: "form-control",
      value: this.state.contentType,
      onChange: this.updateContentType
    }, react_default.a.createElement("option", {
      value: contentTypeOption1
    }, contentTypeOption1), react_default.a.createElement("option", {
      value: contentTypeOption2
    }, contentTypeOption2)), react_default.a.createElement("div", {
      className: "form__help"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_outgoing_webhook.contentType.help1",
      defaultMessage: "Choose the content type by which the request will be sent."
    })), react_default.a.createElement("div", {
      className: "form__help"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_outgoing_webhook.contentType.help2",
      defaultMessage: "If application/x-www-form-urlencoded is chosen, the server will encode the parameters in a URL format in the request body."
    })), react_default.a.createElement("div", {
      className: "form__help"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_outgoing_webhook.contentType.help3",
      defaultMessage: "If application/json is chosen, the server will format the request body as JSON."
    })))), react_default.a.createElement("div", {
      className: "form-group"
    }, react_default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "channelId"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_outgoing_webhook.channel",
      defaultMessage: "Channel"
    })), react_default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react_default.a.createElement(channel_select, {
      id: "channelId",
      value: this.state.channelId,
      onChange: this.updateChannelId,
      selectOpen: true
    }), react_default.a.createElement("div", {
      className: "form__help"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_outgoing_webhook.channel.help",
      defaultMessage: "Public channel that delivers payload to webhook. Optional if at least one Trigger Word is specified."
    })))), react_default.a.createElement("div", {
      className: "form-group"
    }, react_default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "triggerWords"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_outgoing_webhook.triggerWords",
      defaultMessage: "Trigger Words (One Per Line)"
    })), react_default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react_default.a.createElement("textarea", {
      id: "triggerWords",
      rows: "3",
      maxLength: "1000",
      className: "form-control",
      value: this.state.triggerWords,
      onChange: this.updateTriggerWords
    }), react_default.a.createElement("div", {
      className: "form__help"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_outgoing_webhook.triggerWords.help",
      defaultMessage: "Messages that start with one of the specified words will trigger the outgoing webhook. Optional if Channel is selected."
    })))), react_default.a.createElement("div", {
      className: "form-group"
    }, react_default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "triggerWords"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_outgoing_webhook.triggerWordsTriggerWhen",
      defaultMessage: "Trigger When"
    })), react_default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react_default.a.createElement("select", {
      className: "form-control",
      value: this.state.triggerWhen,
      onChange: this.updateTriggerWhen
    }, react_default.a.createElement("option", {
      value: "0"
    }, Object(utils["gb" /* localizeMessage */])('add_outgoing_webhook.triggerWordsTriggerWhenFullWord', 'First word matches a trigger word exactly')), react_default.a.createElement("option", {
      value: "1"
    }, Object(utils["gb" /* localizeMessage */])('add_outgoing_webhook.triggerWordsTriggerWhenStartsWith', 'First word starts with a trigger word'))), react_default.a.createElement("div", {
      className: "form__help"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_outgoing_webhook.triggerWordsTriggerWhen.help",
      defaultMessage: "Choose when to trigger the outgoing webhook; if the first word of a message matches a Trigger Word exactly, or if it starts with a Trigger Word."
    })))), react_default.a.createElement("div", {
      className: "form-group"
    }, react_default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "callbackUrls"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_outgoing_webhook.callbackUrls",
      defaultMessage: "Callback URLs (One Per Line)"
    })), react_default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react_default.a.createElement("textarea", {
      id: "callbackUrls",
      rows: "3",
      maxLength: "1000",
      className: "form-control",
      value: this.state.callbackUrls,
      onChange: this.updateCallbackUrls
    }), react_default.a.createElement("div", {
      className: "form__help"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_outgoing_webhook.callbackUrls.help",
      defaultMessage: "The URL that messages will be sent to. If the URL is private, add it as a {link}.",
      values: {
        link: react_default.a.createElement("a", {
          href: "https://about.mattermost.com/default-allow-internal-connections-settings-documentation/",
          target: "_blank",
          rel: "noopener noreferrer"
        }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "add_outgoing_webhook.callbackUrls.helpLinkText",
          defaultMessage: "trusted internal connection"
        }))
      }
    })))), this.props.enablePostUsernameOverride && react_default.a.createElement("div", {
      className: "form-group"
    }, react_default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "username"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_outgoing_webhook.username",
      defaultMessage: "Username"
    })), react_default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react_default.a.createElement("input", {
      id: "username",
      type: "text",
      maxLength: "22",
      className: "form-control",
      value: this.state.username,
      onChange: this.updateUsername
    }), react_default.a.createElement("div", {
      className: "form__help"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_outgoing_webhook.username.help",
      defaultMessage: "Choose the username this integration will post as. Usernames can be up to 22 characters, and may contain lowercase letters, numbers and the symbols \"-\", \"_\", and \".\"."
    })))), this.props.enablePostIconOverride && react_default.a.createElement("div", {
      className: "form-group"
    }, react_default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "iconURL"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_outgoing_webhook.icon_url",
      defaultMessage: "Profile Picture"
    })), react_default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react_default.a.createElement("input", {
      id: "iconURL",
      type: "text",
      maxLength: "1024",
      className: "form-control",
      value: this.state.iconURL,
      onChange: this.updateIconURL
    }), react_default.a.createElement("div", {
      className: "form__help"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_outgoing_webhook.icon_url.help",
      defaultMessage: "Choose the profile picture this integration will use when posting. Enter the URL of a .png or .jpg file at least 128 pixels by 128 pixels."
    })))), react_default.a.createElement("div", {
      className: "backstage-form__footer"
    }, react_default.a.createElement(form_error["a" /* default */], {
      type: "backstage",
      errors: [this.props.serverError, this.state.clientError]
    }), react_default.a.createElement(react_router_dom["a" /* Link */], {
      className: "btn btn-link btn-sm",
      to: `/${this.props.team.name}/integrations/outgoing_webhooks`
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_outgoing_webhook.cancel",
      defaultMessage: "Cancel"
    })), react_default.a.createElement(spinner_button["a" /* default */], {
      className: "btn btn-primary",
      type: "submit",
      spinning: this.state.saving,
      spinningText: Object(utils["gb" /* localizeMessage */])(this.props.loading.id, this.props.loading.defaultMessage),
      onClick: this.handleSubmit,
      id: "saveWebhook"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: footerToRender.id,
      defaultMessage: footerToRender.defaultMessage
    })), renderExtra))));
  }

}

abstract_outgoing_webhook_defineProperty(abstract_outgoing_webhook_AbstractOutgoingWebhook, "propTypes", {
  /**
   * The current team
   */
  team: prop_types_default.a.object.isRequired,

  /**
   * The header text to render, has id and defaultMessage
   */
  header: prop_types_default.a.object.isRequired,

  /**
   * The footer text to render, has id and defaultMessage
   */
  footer: prop_types_default.a.object.isRequired,

  /**
  * The spinner loading text to render, has id and defaultMessage
  */
  loading: prop_types_default.a.object.isRequired,

  /**
   * Any extra component/node to render
   */
  renderExtra: prop_types_default.a.node.isRequired,

  /**
   * The server error text after a failed action
   */
  serverError: prop_types_default.a.string.isRequired,

  /**
   * The hook used to set the initial state
   */
  initialHook: prop_types_default.a.object,

  /**
   * The async function to run when the action button is pressed
   */
  action: prop_types_default.a.func.isRequired,

  /**
   * Whether to allow configuration of the default post username.
   */
  enablePostUsernameOverride: prop_types_default.a.bool.isRequired,

  /**
   * Whether to allow configuration of the default post icon.
   */
  enablePostIconOverride: prop_types_default.a.bool.isRequired
});
// CONCATENATED MODULE: ./components/integrations/add_outgoing_webhook/add_outgoing_webhook.jsx
function add_outgoing_webhook_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





const add_outgoing_webhook_HEADER = {
  id: Object(i18n["b" /* t */])('integrations.add'),
  defaultMessage: 'Add'
};
const add_outgoing_webhook_FOOTER = {
  id: Object(i18n["b" /* t */])('add_outgoing_webhook.save'),
  defaultMessage: 'Save'
};
const add_outgoing_webhook_LOADING = {
  id: Object(i18n["b" /* t */])('add_outgoing_webhook.saving'),
  defaultMessage: 'Saving...'
};
class add_outgoing_webhook_AddOutgoingWebhook extends react_default.a.PureComponent {
  constructor(props) {
    super(props);

    add_outgoing_webhook_defineProperty(this, "addOutgoingHook", async hook => {
      this.setState({
        serverError: ''
      });
      const {
        data
      } = await this.props.actions.createOutgoingHook(hook);

      if (data) {
        browser_history["a" /* browserHistory */].push(`/${this.props.team.name}/integrations/confirm?type=outgoing_webhooks&id=${data.id}`);
        return;
      }

      if (this.props.createOutgoingHookRequest.error) {
        this.setState({
          serverError: this.props.createOutgoingHookRequest.error.message
        });
      }
    });

    this.state = {
      serverError: ''
    };
  }

  render() {
    return react_default.a.createElement(abstract_outgoing_webhook_AbstractOutgoingWebhook, {
      team: this.props.team,
      header: add_outgoing_webhook_HEADER,
      footer: add_outgoing_webhook_FOOTER,
      loading: add_outgoing_webhook_LOADING,
      renderExtra: '',
      action: this.addOutgoingHook,
      serverError: this.state.serverError,
      enablePostUsernameOverride: this.props.enablePostUsernameOverride,
      enablePostIconOverride: this.props.enablePostIconOverride
    });
  }

}

add_outgoing_webhook_defineProperty(add_outgoing_webhook_AddOutgoingWebhook, "propTypes", {
  /**
   * The current team
   */
  team: prop_types_default.a.object.isRequired,

  /**
   * The request state for createOutgoingHook action. Contains status and error
   */
  createOutgoingHookRequest: prop_types_default.a.object.isRequired,
  actions: prop_types_default.a.shape({
    /**
     * The function to call to add a new outgoing webhook
     */
    createOutgoingHook: prop_types_default.a.func.isRequired
  }).isRequired,

  /**
   * Whether to allow configuration of the default post username.
   */
  enablePostUsernameOverride: prop_types_default.a.bool.isRequired,

  /**
   * Whether to allow configuration of the default post icon.
   */
  enablePostIconOverride: prop_types_default.a.bool.isRequired
});
// CONCATENATED MODULE: ./components/integrations/add_outgoing_webhook/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






function add_outgoing_webhook_mapStateToProps(state) {
  const config = Object(general["getConfig"])(state);
  const enablePostUsernameOverride = config.EnablePostUsernameOverride === 'true';
  const enablePostIconOverride = config.EnablePostIconOverride === 'true';
  return {
    createOutgoingHookRequest: state.requests.integrations.createOutgoingHook,
    enablePostUsernameOverride,
    enablePostIconOverride
  };
}

function add_outgoing_webhook_mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux["bindActionCreators"])({
      createOutgoingHook: actions_integrations["createOutgoingHook"]
    }, dispatch)
  };
}

/* harmony default export */ var add_outgoing_webhook = (Object(es["connect"])(add_outgoing_webhook_mapStateToProps, add_outgoing_webhook_mapDispatchToProps)(add_outgoing_webhook_AddOutgoingWebhook));
// CONCATENATED MODULE: ./components/integrations/edit_outgoing_webhook/edit_outgoing_webhook.jsx
function edit_outgoing_webhook_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.







const edit_outgoing_webhook_HEADER = {
  id: 'integrations.edit',
  defaultMessage: 'Edit'
};
const edit_outgoing_webhook_FOOTER = {
  id: 'update_outgoing_webhook.update',
  defaultMessage: 'Update'
};
const edit_outgoing_webhook_LOADING = {
  id: 'update_outgoing_webhook.updating',
  defaultMessage: 'Updating...'
};
class edit_outgoing_webhook_EditOutgoingWebhook extends react_default.a.PureComponent {
  constructor(props) {
    super(props);

    edit_outgoing_webhook_defineProperty(this, "editOutgoingHook", async hook => {
      this.newHook = hook;

      if (this.props.hook.id) {
        hook.id = this.props.hook.id;
      }

      if (this.props.hook.token) {
        hook.token = this.props.hook.token;
      }

      const triggerWordsSame = this.props.hook.trigger_words.length === hook.trigger_words.length && this.props.hook.trigger_words.every((v, i) => v === hook.trigger_words[i]);
      const callbackUrlsSame = this.props.hook.callback_urls.length === hook.callback_urls.length && this.props.hook.callback_urls.every((v, i) => v === hook.callback_urls[i]);

      if (this.props.hook.content_type !== hook.content_type || !triggerWordsSame || !callbackUrlsSame) {
        this.handleConfirmModal();
      } else {
        await this.submitHook();
      }
    });

    edit_outgoing_webhook_defineProperty(this, "handleConfirmModal", () => {
      this.setState({
        showConfirmModal: true
      });
    });

    edit_outgoing_webhook_defineProperty(this, "confirmModalDismissed", () => {
      this.setState({
        showConfirmModal: false
      });
    });

    edit_outgoing_webhook_defineProperty(this, "submitHook", async () => {
      this.setState({
        serverError: ''
      });
      const {
        data
      } = await this.props.actions.updateOutgoingHook(this.newHook);

      if (data) {
        browser_history["a" /* browserHistory */].push(`/${this.props.team.name}/integrations/outgoing_webhooks`);
        return;
      }

      this.setState({
        showConfirmModal: false
      });

      if (this.props.updateOutgoingHookRequest.error) {
        this.setState({
          serverError: this.props.updateOutgoingHookRequest.error.message
        });
      }
    });

    edit_outgoing_webhook_defineProperty(this, "renderExtra", () => {
      const confirmButton = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "update_outgoing_webhook.update",
        defaultMessage: "Update"
      });
      const confirmTitle = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "update_outgoing_webhook.confirm",
        defaultMessage: "Edit Outgoing Webhook"
      });
      const confirmMessage = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "update_outgoing_webhook.question",
        defaultMessage: "Your changes may break the existing outgoing webhook. Are you sure you would like to update it?"
      });
      return react_default.a.createElement(confirm_modal["a" /* default */], {
        title: confirmTitle,
        message: confirmMessage,
        confirmButtonText: confirmButton,
        show: this.state.showConfirmModal,
        onConfirm: this.submitHook,
        onCancel: this.confirmModalDismissed
      });
    });

    this.state = {
      showConfirmModal: false,
      serverError: ''
    };
  }

  componentDidMount() {
    if (this.props.enableOutgoingWebhooks) {
      this.props.actions.getOutgoingHook(this.props.hookId);
    }
  }

  render() {
    if (!this.props.hook) {
      return react_default.a.createElement(loading_screen["a" /* default */], null);
    }

    return react_default.a.createElement(abstract_outgoing_webhook_AbstractOutgoingWebhook, {
      team: this.props.team,
      header: edit_outgoing_webhook_HEADER,
      footer: edit_outgoing_webhook_FOOTER,
      loading: edit_outgoing_webhook_LOADING,
      renderExtra: this.renderExtra(),
      action: this.editOutgoingHook,
      serverError: this.state.serverError,
      initialHook: this.props.hook,
      enablePostUsernameOverride: this.props.enablePostUsernameOverride,
      enablePostIconOverride: this.props.enablePostIconOverride
    });
  }

}

edit_outgoing_webhook_defineProperty(edit_outgoing_webhook_EditOutgoingWebhook, "propTypes", {
  /**
   * The current team
   */
  team: prop_types_default.a.object.isRequired,

  /**
   * The outgoing webhook to edit
   */
  hook: prop_types_default.a.object,

  /**
   * The id of the outgoing webhook to edit
   */
  hookId: prop_types_default.a.string.isRequired,

  /**
   * The request state for updateOutgoingHook action. Contains status and error
   */
  updateOutgoingHookRequest: prop_types_default.a.object.isRequired,
  actions: prop_types_default.a.shape({
    /**
     * The function to call to update an outgoing webhook
     */
    updateOutgoingHook: prop_types_default.a.func.isRequired,

    /**
     * The function to call to get an outgoing webhook
     */
    getOutgoingHook: prop_types_default.a.func.isRequired
  }).isRequired,

  /**
  * Whether or not outgoing webhooks are enabled.
  */
  enableOutgoingWebhooks: prop_types_default.a.bool,

  /**
   * Whether to allow configuration of the default post username.
   */
  enablePostUsernameOverride: prop_types_default.a.bool.isRequired,

  /**
   * Whether to allow configuration of the default post icon.
   */
  enablePostIconOverride: prop_types_default.a.bool.isRequired
});
// CONCATENATED MODULE: ./components/integrations/edit_outgoing_webhook/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






function edit_outgoing_webhook_mapStateToProps(state, ownProps) {
  const config = Object(general["getConfig"])(state);
  const hookId = new URLSearchParams(ownProps.location.search).get('id');
  const enableOutgoingWebhooks = config.EnableOutgoingWebhooks === 'true';
  const enablePostUsernameOverride = config.EnablePostUsernameOverride === 'true';
  const enablePostIconOverride = config.EnablePostIconOverride === 'true';
  return {
    hookId,
    hook: state.entities.integrations.outgoingHooks[hookId],
    updateOutgoingHookRequest: state.requests.integrations.createOutgoingHook,
    enableOutgoingWebhooks,
    enablePostUsernameOverride,
    enablePostIconOverride
  };
}

function edit_outgoing_webhook_mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux["bindActionCreators"])({
      updateOutgoingHook: actions_integrations["updateOutgoingHook"],
      getOutgoingHook: actions_integrations["getOutgoingHook"]
    }, dispatch)
  };
}

/* harmony default export */ var edit_outgoing_webhook = (Object(es["connect"])(edit_outgoing_webhook_mapStateToProps, edit_outgoing_webhook_mapDispatchToProps)(edit_outgoing_webhook_EditOutgoingWebhook));
// CONCATENATED MODULE: ./components/integrations/installed_oauth_app/installed_oauth_app.jsx
function installed_oauth_app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.










const FAKE_SECRET = '***************';
function installed_oauth_app_matchesFilter(oauthApp, filter) {
  if (!filter) {
    return true;
  }

  return oauthApp.name.toLowerCase().indexOf(filter) !== -1;
}
class installed_oauth_app_InstalledOAuthApp extends react_default.a.PureComponent {
  constructor(props) {
    super(props);

    installed_oauth_app_defineProperty(this, "handleShowClientSecret", e => {
      if (e && e.preventDefault) {
        e.preventDefault();
      }

      this.setState({
        clientSecret: this.props.oauthApp.client_secret
      });
    });

    installed_oauth_app_defineProperty(this, "handleHideClientSecret", e => {
      e.preventDefault();
      this.setState({
        clientSecret: FAKE_SECRET
      });
    });

    installed_oauth_app_defineProperty(this, "handleRegenerate", e => {
      e.preventDefault();
      this.props.onRegenerateSecret(this.props.oauthApp.id).then(() => {
        const {
          error
        } = this.props.regenOAuthAppSecretRequest;

        if (error) {
          this.setState({
            error: error.message
          });
        } else {
          this.setState({
            error: null
          });
          this.handleShowClientSecret();
        }
      });
    });

    installed_oauth_app_defineProperty(this, "handleDelete", () => {
      this.props.onDelete(this.props.oauthApp);
    });

    this.state = {
      clientSecret: FAKE_SECRET
    };
  }

  render() {
    const {
      oauthApp,
      creatorName
    } = this.props;
    let error;

    if (this.state.error) {
      error = react_default.a.createElement(form_error["a" /* default */], {
        error: this.state.error
      });
    }

    if (!installed_oauth_app_matchesFilter(oauthApp, this.props.filter)) {
      return null;
    }

    let name;

    if (oauthApp.name) {
      name = oauthApp.name;
    } else {
      name = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "installed_integrations.unnamed_oauth_app",
        defaultMessage: "Unnamed OAuth 2.0 Application"
      });
    }

    let description;

    if (oauthApp.description) {
      description = react_default.a.createElement("div", {
        className: "item-details__row"
      }, react_default.a.createElement("span", {
        className: "item-details__description"
      }, oauthApp.description));
    }

    const urls = react_default.a.createElement("div", {
      className: "item-details__row"
    }, react_default.a.createElement("span", {
      className: "item-details__url"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "installed_integrations.callback_urls",
      defaultMessage: "Callback URLs: {urls}",
      values: {
        urls: oauthApp.callback_urls.join(', ')
      }
    })));
    let isTrusted;

    if (oauthApp.is_trusted) {
      isTrusted = utils["gb" /* localizeMessage */]('installed_oauth_apps.trusted.yes', 'Yes');
    } else {
      isTrusted = utils["gb" /* localizeMessage */]('installed_oauth_apps.trusted.no', 'No');
    }

    let showHide;
    let clientSecret;

    if (this.state.clientSecret === FAKE_SECRET) {
      showHide = react_default.a.createElement("button", {
        id: "showSecretButton",
        className: "style--none color--link",
        onClick: this.handleShowClientSecret
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "installed_integrations.showSecret",
        defaultMessage: "Show Secret"
      }));
      clientSecret = react_default.a.createElement("span", {
        className: "item-details__token"
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "installed_integrations.client_secret",
        defaultMessage: "Client Secret: **{clientSecret}**",
        values: {
          clientSecret: this.state.clientSecret
        }
      }));
    } else {
      showHide = react_default.a.createElement("button", {
        id: "hideSecretButton",
        className: "style--none color--link",
        onClick: this.handleHideClientSecret
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "installed_integrations.hideSecret",
        defaultMessage: "Hide Secret"
      }));
      clientSecret = react_default.a.createElement("span", {
        className: "item-details__token"
      }, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
        id: "installed_integrations.client_secret",
        defaultMessage: "Client Secret: **{clientSecret}**",
        values: {
          clientSecret: this.state.clientSecret
        }
      }), react_default.a.createElement(copy_text_CopyText, {
        idMessage: "integrations.copy_client_secret",
        defaultMessage: "Copy Client Secret",
        value: this.state.clientSecret
      }));
    }

    const regen = react_default.a.createElement("button", {
      id: "regenerateSecretButton",
      className: "style--none color--link",
      onClick: this.handleRegenerate
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "installed_integrations.regenSecret",
      defaultMessage: "Regenerate Secret"
    }));
    let icon;

    if (oauthApp.icon_url) {
      icon = react_default.a.createElement("div", {
        className: "integration__icon integration-list__icon"
      }, react_default.a.createElement("img", {
        alt: 'get app screenshot',
        src: oauthApp.icon_url
      }));
    }

    return react_default.a.createElement("div", {
      className: "backstage-list__item"
    }, icon, react_default.a.createElement("div", {
      className: "item-details"
    }, react_default.a.createElement("div", {
      className: "item-details__row"
    }, react_default.a.createElement("span", {
      className: "item-details__name"
    }, name)), error, description, react_default.a.createElement("div", {
      className: "item-details__row"
    }, react_default.a.createElement("span", {
      className: "item-details__url"
    }, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
      id: "installed_oauth_apps.is_trusted",
      defaultMessage: "Is Trusted: **{isTrusted}**",
      values: {
        isTrusted
      }
    }))), react_default.a.createElement("div", {
      className: "item-details__row"
    }, react_default.a.createElement("span", {
      className: "item-details__token"
    }, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
      id: "installed_integrations.client_id",
      defaultMessage: "Client ID: **{clientId}**",
      values: {
        clientId: oauthApp.id
      }
    }), react_default.a.createElement(copy_text_CopyText, {
      idMessage: "integrations.copy_client_id",
      defaultMessage: "Copy Client Id",
      value: oauthApp.id
    }))), react_default.a.createElement("div", {
      className: "item-details__row"
    }, clientSecret), urls, react_default.a.createElement("div", {
      className: "item-details__row"
    }, react_default.a.createElement("span", {
      className: "item-details__creation"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "installed_integrations.creation",
      defaultMessage: "Created by {creator} on {createAt, date, full}",
      values: {
        creator: creatorName,
        createAt: oauthApp.create_at
      }
    })))), react_default.a.createElement("div", {
      className: "item-actions"
    }, showHide, ' - ', regen, ' - ', react_default.a.createElement(react_router_dom["a" /* Link */], {
      to: `/${this.props.team.name}/integrations/oauth2-apps/edit?id=${oauthApp.id}`
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "installed_integrations.edit",
      defaultMessage: "Edit"
    })), ' - ', react_default.a.createElement(delete_integration_DeleteIntegration, {
      messageId: Object(i18n["b" /* t */])('installed_oauth_apps.delete.confirm'),
      onDelete: this.handleDelete
    })));
  }

}

installed_oauth_app_defineProperty(installed_oauth_app_InstalledOAuthApp, "propTypes", {
  /**
  * The team data
  */
  team: prop_types_default.a.object,

  /**
  * The oauthApp data
  */
  oauthApp: prop_types_default.a.object.isRequired,
  creatorName: prop_types_default.a.string.isRequired,

  /**
  * The request state for regenOAuthAppSecret action. Contains status and error
  */
  regenOAuthAppSecretRequest: prop_types_default.a.object.isRequired,

  /**
  * The function to call when Regenerate Secret link is clicked
  */
  onRegenerateSecret: prop_types_default.a.func.isRequired,

  /**
  * The function to call when Delete link is clicked
  */
  onDelete: prop_types_default.a.func.isRequired,

  /**
  * Set to filter OAuthApp
  */
  filter: prop_types_default.a.string
});
// CONCATENATED MODULE: ./components/integrations/installed_oauth_app/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





function installed_oauth_app_mapStateToProps(state, ownProps) {
  const oauthApp = ownProps.oauthApp || {};
  return {
    creatorName: Object(utils["w" /* getDisplayNameByUser */])(Object(users["getUser"])(state, oauthApp.creator_id))
  };
}

/* harmony default export */ var installed_oauth_app = (Object(es["connect"])(installed_oauth_app_mapStateToProps)(installed_oauth_app_InstalledOAuthApp));
// CONCATENATED MODULE: ./components/integrations/installed_oauth_apps/installed_oauth_apps.jsx
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function installed_oauth_apps_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.








class installed_oauth_apps_InstalledOAuthApps extends react_default.a.PureComponent {
  constructor(props) {
    super(props);

    installed_oauth_apps_defineProperty(this, "deleteOAuthApp", app => {
      if (app && app.id) {
        this.props.actions.deleteOAuthApp(app.id);
      }
    });

    installed_oauth_apps_defineProperty(this, "oauthApps", filter => Object.values(this.props.oauthApps).filter(app => installed_oauth_app_matchesFilter(app, filter)).sort(this.oauthAppCompare).map(app => {
      return react_default.a.createElement(installed_oauth_app, {
        key: app.id,
        team: this.props.team,
        oauthApp: app,
        regenOAuthAppSecretRequest: this.props.regenOAuthAppSecretRequest,
        onRegenerateSecret: this.props.actions.regenOAuthAppSecret,
        onDelete: this.deleteOAuthApp
      });
    }));

    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    if (this.props.enableOAuthServiceProvider) {
      this.props.actions.loadOAuthAppsAndProfiles().then(() => this.setState({
        loading: false
      }));
    }
  }

  oauthAppCompare(a, b) {
    let nameA = a.name;

    if (!nameA) {
      nameA = Object(utils["gb" /* localizeMessage */])('installed_integrations.unnamed_oauth_app', 'Unnamed OAuth 2.0 Application');
    }

    let nameB = b.name;

    if (!nameB) {
      nameB = Object(utils["gb" /* localizeMessage */])('installed_integrations.unnamed_oauth_app', 'Unnamed OAuth 2.0 Application');
    }

    return nameA.localeCompare(nameB);
  }

  render() {
    const integrationsEnabled = this.props.enableOAuthServiceProvider && this.props.canManageOauth;
    let props;

    if (integrationsEnabled) {
      props = {
        addLink: '/' + this.props.team.name + '/integrations/oauth2-apps/add',
        addText: Object(utils["gb" /* localizeMessage */])('installed_oauth_apps.add', 'Add OAuth 2.0 Application'),
        addButtonId: 'addOauthApp'
      };
    }

    return react_default.a.createElement(backstage_list_BackstageList, _extends({
      header: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "installed_oauth_apps.header",
        defaultMessage: "OAuth 2.0 Applications"
      }),
      helpText: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "installed_oauth_apps.help",
        defaultMessage: "Create {oauthApplications} to securely integrate bots and third-party apps with Mattermost. Visit the {appDirectory} to find available self-hosted apps.",
        values: {
          oauthApplications: react_default.a.createElement("a", {
            target: "_blank",
            rel: "noopener noreferrer",
            href: "https://docs.mattermost.com/developer/oauth-2-0-applications.html"
          }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "installed_oauth_apps.help.oauthApplications",
            defaultMessage: "OAuth 2.0 applications"
          })),
          appDirectory: react_default.a.createElement("a", {
            target: "_blank",
            rel: "noopener noreferrer",
            href: "https://about.mattermost.com/default-app-directory/"
          }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "installed_oauth_apps.help.appDirectory",
            defaultMessage: "App Directory"
          }))
        }
      }),
      emptyText: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "installed_oauth_apps.empty",
        defaultMessage: "No OAuth 2.0 Applications found"
      }),
      emptyTextSearch: react_default.a.createElement(formatted_markdown_message["b" /* default */], {
        id: "installed_oauth_apps.emptySearch",
        defaultMessage: "No OAuth 2.0 Applications match {searchTerm}"
      }),
      searchPlaceholder: Object(utils["gb" /* localizeMessage */])('installed_oauth_apps.search', 'Search OAuth 2.0 Applications'),
      loading: this.state.loading
    }, props), filter => {
      const children = this.oauthApps(filter);
      return [children, children.length > 0];
    });
  }

}

installed_oauth_apps_defineProperty(installed_oauth_apps_InstalledOAuthApps, "propTypes", {
  /**
  * The team data
  */
  team: prop_types_default.a.object,

  /**
  * The oauthApps data
  */
  oauthApps: prop_types_default.a.object,

  /**
  * Set if user can manage oath
  */
  canManageOauth: prop_types_default.a.bool,

  /**
  * The request state for regenOAuthAppSecret action. Contains status and error
  */
  regenOAuthAppSecretRequest: prop_types_default.a.object.isRequired,
  actions: prop_types_default.a.shape({
    /**
    * The function to call to fetch OAuth apps
    */
    loadOAuthAppsAndProfiles: prop_types_default.a.func.isRequired,

    /**
    * The function to call when Regenerate Secret link is clicked
    */
    regenOAuthAppSecret: prop_types_default.a.func.isRequired,

    /**
    * The function to call when Delete link is clicked
    */
    deleteOAuthApp: prop_types_default.a.func.isRequired
  }).isRequired,

  /**
  * Whether or not OAuth applications are enabled.
  */
  enableOAuthServiceProvider: prop_types_default.a.bool
});
// CONCATENATED MODULE: ./components/integrations/installed_oauth_apps/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.










function installed_oauth_apps_mapStateToProps(state) {
  const config = Object(general["getConfig"])(state);
  const enableOAuthServiceProvider = config.EnableOAuthServiceProvider === 'true';
  return {
    canManageOauth: Object(entities_roles["haveISystemPermission"])(state, {
      permission: constants["Permissions"].MANAGE_OAUTH
    }),
    oauthApps: Object(entities_integrations["getOAuthApps"])(state),
    regenOAuthAppSecretRequest: state.requests.integrations.updateOAuthApp,
    enableOAuthServiceProvider
  };
}

function installed_oauth_apps_mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux["bindActionCreators"])({
      loadOAuthAppsAndProfiles: integration_actions["d" /* loadOAuthAppsAndProfiles */],
      regenOAuthAppSecret: actions_integrations["regenOAuthAppSecret"],
      deleteOAuthApp: actions_integrations["deleteOAuthApp"]
    }, dispatch)
  };
}

/* harmony default export */ var installed_oauth_apps = (Object(es["connect"])(installed_oauth_apps_mapStateToProps, installed_oauth_apps_mapDispatchToProps)(installed_oauth_apps_InstalledOAuthApps));
// CONCATENATED MODULE: ./components/integrations/abstract_oauth_app.jsx
function abstract_oauth_app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.










class abstract_oauth_app_AbstractOAuthApp extends react_default.a.PureComponent {
  constructor(props) {
    super(props);

    abstract_oauth_app_defineProperty(this, "getStateFromApp", app => {
      return {
        name: app.name || '',
        description: app.description || '',
        homepage: app.homepage || '',
        icon_url: app.icon_url || '',
        callbackUrls: app.callback_urls ? app.callback_urls.join('\n') : '',
        is_trusted: app.is_trusted || false,
        has_icon: Boolean(app.icon_url),
        saving: false,
        clientError: null
      };
    });

    abstract_oauth_app_defineProperty(this, "imageLoaded", () => {
      this.setState({
        has_icon: true,
        icon_url: this.refs.icon_url.value
      });
    });

    abstract_oauth_app_defineProperty(this, "handleSubmit", e => {
      e.preventDefault();

      if (this.state.saving) {
        return;
      }

      this.setState({
        saving: true,
        clientError: ''
      });

      if (!this.state.name) {
        this.setState({
          saving: false,
          clientError: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "add_oauth_app.nameRequired",
            defaultMessage: "Name for the OAuth 2.0 application is required."
          })
        });
        return;
      }

      if (!this.state.description) {
        this.setState({
          saving: false,
          clientError: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "add_oauth_app.descriptionRequired",
            defaultMessage: "Description for the OAuth 2.0 application is required."
          })
        });
        return;
      }

      if (!this.state.homepage) {
        this.setState({
          saving: false,
          clientError: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "add_oauth_app.homepageRequired",
            defaultMessage: "Homepage for the OAuth 2.0 application is required."
          })
        });
        return;
      }

      const callbackUrls = [];

      for (let callbackUrl of this.state.callbackUrls.split('\n')) {
        callbackUrl = callbackUrl.trim();

        if (callbackUrl.length > 0) {
          callbackUrls.push(callbackUrl);
        }
      }

      if (callbackUrls.length === 0) {
        this.setState({
          saving: false,
          clientError: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "add_oauth_app.callbackUrlsRequired",
            defaultMessage: "One or more callback URLs are required."
          })
        });
        return;
      }

      const app = {
        name: this.state.name,
        callback_urls: callbackUrls,
        homepage: this.state.homepage,
        description: this.state.description,
        is_trusted: this.state.is_trusted,
        icon_url: this.state.icon_url
      };
      this.props.action(app).then(() => this.setState({
        saving: false
      }));
    });

    abstract_oauth_app_defineProperty(this, "updateName", e => {
      this.setState({
        name: e.target.value
      });
    });

    abstract_oauth_app_defineProperty(this, "updateTrusted", e => {
      this.setState({
        is_trusted: e.target.value === 'true'
      });
    });

    abstract_oauth_app_defineProperty(this, "updateDescription", e => {
      this.setState({
        description: e.target.value
      });
    });

    abstract_oauth_app_defineProperty(this, "updateHomepage", e => {
      this.setState({
        homepage: e.target.value
      });
    });

    abstract_oauth_app_defineProperty(this, "updateIconUrl", e => {
      this.setState({
        has_icon: false,
        icon_url: e.target.value
      });
      this.image.src = e.target.value;
    });

    abstract_oauth_app_defineProperty(this, "updateCallbackUrls", e => {
      this.setState({
        callbackUrls: e.target.value
      });
    });

    this.image = new Image();
    this.image.onload = this.imageLoaded;
    this.state = this.getStateFromApp(this.props.initialApp || {});
  }

  render() {
    const headerToRender = this.props.header;
    const footerToRender = this.props.footer;
    const renderExtra = this.props.renderExtra;
    let icon;

    if (this.state.has_icon) {
      icon = react_default.a.createElement("div", {
        className: "integration__icon"
      }, react_default.a.createElement("img", {
        alt: 'integration icon',
        src: this.state.icon_url
      }));
    }

    const trusted = react_default.a.createElement(system_permission_gate["a" /* default */], {
      permissions: [constants["Permissions"].MANAGE_SYSTEM]
    }, react_default.a.createElement("div", {
      className: "form-group"
    }, react_default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "is_trusted"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "installed_oauth_apps.trusted",
      defaultMessage: "Is Trusted"
    })), react_default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react_default.a.createElement("label", {
      className: "radio-inline"
    }, react_default.a.createElement("input", {
      type: "radio",
      value: "true",
      name: "is_trusted",
      checked: this.state.is_trusted,
      onChange: this.updateTrusted
    }), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "installed_oauth_apps.trusted.yes",
      defaultMessage: "Yes"
    })), react_default.a.createElement("label", {
      className: "radio-inline"
    }, react_default.a.createElement("input", {
      type: "radio",
      value: "false",
      name: "is_trusted",
      checked: !this.state.is_trusted,
      onChange: this.updateTrusted
    }), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "installed_oauth_apps.trusted.no",
      defaultMessage: "No"
    })), react_default.a.createElement("div", {
      className: "form__help"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_oauth_app.trusted.help",
      defaultMessage: "When true, the OAuth 2.0 application is considered trusted by the Mattermost server and doesn't require the user to accept authorization. When false, an additional window will appear, asking the user to accept or deny the authorization."
    })))));
    return react_default.a.createElement("div", {
      className: "backstage-content"
    }, react_default.a.createElement(backstage_header_BackstageHeader, null, react_default.a.createElement(react_router_dom["a" /* Link */], {
      to: `/${this.props.team.name}/integrations/oauth2-apps`
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "installed_oauth_apps.header",
      defaultMessage: "Installed OAuth2 Apps"
    })), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: headerToRender.id,
      defaultMessage: headerToRender.defaultMessage
    })), react_default.a.createElement("div", {
      className: "backstage-form"
    }, icon, react_default.a.createElement("form", {
      className: "form-horizontal"
    }, trusted, react_default.a.createElement("div", {
      className: "form-group"
    }, react_default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "name"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "installed_oauth_apps.name",
      defaultMessage: "Display Name"
    })), react_default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react_default.a.createElement("input", {
      id: "name",
      type: "text",
      maxLength: "64",
      className: "form-control",
      value: this.state.name,
      onChange: this.updateName
    }), react_default.a.createElement("div", {
      className: "form__help"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_oauth_app.name.help",
      defaultMessage: "Display name for your OAuth 2.0 application made of up to 64 characters."
    })))), react_default.a.createElement("div", {
      className: "form-group"
    }, react_default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "description"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "installed_oauth_apps.description",
      defaultMessage: "Description"
    })), react_default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react_default.a.createElement("input", {
      id: "description",
      type: "text",
      maxLength: "512",
      className: "form-control",
      value: this.state.description,
      onChange: this.updateDescription
    }), react_default.a.createElement("div", {
      className: "form__help"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_oauth_app.description.help",
      defaultMessage: "Description for your OAuth 2.0 application."
    })))), react_default.a.createElement("div", {
      className: "form-group"
    }, react_default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "homepage"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "installed_oauth_apps.homepage",
      defaultMessage: "Homepage"
    })), react_default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react_default.a.createElement("input", {
      id: "homepage",
      type: "url",
      maxLength: "256",
      className: "form-control",
      value: this.state.homepage,
      onChange: this.updateHomepage
    }), react_default.a.createElement("div", {
      className: "form__help"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_oauth_app.homepage.help",
      defaultMessage: "The URL for the homepage of the OAuth 2.0 application. Make sure you use HTTP or HTTPS in your URL depending on your server configuration."
    })))), react_default.a.createElement("div", {
      className: "form-group"
    }, react_default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "icon_url"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "installed_oauth_apps.iconUrl",
      defaultMessage: "Icon URL"
    })), react_default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react_default.a.createElement("input", {
      id: "icon_url",
      ref: "icon_url",
      type: "url",
      maxLength: "512",
      className: "form-control",
      value: this.state.icon_url,
      onChange: this.updateIconUrl
    }), react_default.a.createElement("div", {
      className: "form__help"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_oauth_app.icon.help",
      defaultMessage: "The URL for the homepage of the OAuth 2.0 application. Make sure you use HTTP or HTTPS in your URL depending on your server configuration."
    })))), react_default.a.createElement("div", {
      className: "form-group"
    }, react_default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "callbackUrls"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "installed_oauth_apps.callbackUrls",
      defaultMessage: "Callback URLs (One Per Line)"
    })), react_default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react_default.a.createElement("textarea", {
      id: "callbackUrls",
      rows: "3",
      maxLength: "1024",
      className: "form-control",
      value: this.state.callbackUrls,
      onChange: this.updateCallbackUrls
    }), react_default.a.createElement("div", {
      className: "form__help"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_oauth_app.callbackUrls.help",
      defaultMessage: "The redirect URIs to which the service will redirect users after accepting or denying authorization of your application, and which will handle authorization codes or access tokens. Must be a valid URL and start with http:// or https://."
    })))), react_default.a.createElement("div", {
      className: "backstage-form__footer"
    }, react_default.a.createElement(form_error["a" /* default */], {
      type: "backstage",
      errors: [this.props.serverError, this.state.clientError]
    }), react_default.a.createElement(react_router_dom["a" /* Link */], {
      className: "btn btn-link btn-sm",
      to: `/${this.props.team.name}/integrations/oauth2-apps`
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "installed_oauth_apps.cancel",
      defaultMessage: "Cancel"
    })), react_default.a.createElement(spinner_button["a" /* default */], {
      className: "btn btn-primary",
      type: "submit",
      spinning: this.state.saving,
      spinningText: Object(utils["gb" /* localizeMessage */])(this.props.loading.id, this.props.loading.defaultMessage),
      onClick: this.handleSubmit,
      id: "saveOauthApp"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: footerToRender.id,
      defaultMessage: footerToRender.defaultMessage
    })), renderExtra))));
  }

}

abstract_oauth_app_defineProperty(abstract_oauth_app_AbstractOAuthApp, "propTypes", {
  /**
  * The current team
  */
  team: prop_types_default.a.object.isRequired,

  /**
  * The header text to render, has id and defaultMessage
  */
  header: prop_types_default.a.object.isRequired,

  /**
  * The footer text to render, has id and defaultMessage
  */
  footer: prop_types_default.a.object.isRequired,

  /**
  * The spinner loading text to render, has id and defaultMessage
  */
  loading: prop_types_default.a.object.isRequired,

  /**
   * Any extra component/node to render
   */
  renderExtra: prop_types_default.a.node.isRequired,

  /**
  * The server error text after a failed action
  */
  serverError: prop_types_default.a.string.isRequired,

  /**
  * The OAuthApp used to set the initial state
  */
  initialApp: prop_types_default.a.object,

  /**
  * The async function to run when the action button is pressed
  */
  action: prop_types_default.a.func.isRequired
});
// CONCATENATED MODULE: ./components/integrations/add_oauth_app/add_oauth_app.jsx
function add_oauth_app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





const add_oauth_app_HEADER = {
  id: Object(i18n["b" /* t */])('add_oauth_app.header'),
  defaultMessage: 'Add'
};
const add_oauth_app_FOOTER = {
  id: Object(i18n["b" /* t */])('installed_oauth_apps.save'),
  defaultMessage: 'Save'
};
const add_oauth_app_LOADING = {
  id: Object(i18n["b" /* t */])('installed_oauth_apps.saving'),
  defaultMessage: 'Saving...'
};
class add_oauth_app_AddOAuthApp extends react_default.a.PureComponent {
  constructor(props) {
    super(props);

    add_oauth_app_defineProperty(this, "addOAuthApp", async app => {
      this.setState({
        serverError: ''
      });
      const {
        data
      } = await this.props.actions.addOAuthApp(app);

      if (data) {
        browser_history["a" /* browserHistory */].push(`/${this.props.team.name}/integrations/confirm?type=oauth2-apps&id=${data.id}`);
        return;
      }

      if (this.props.addOAuthAppRequest.error) {
        this.setState({
          serverError: this.props.addOAuthAppRequest.error.message
        });
      }
    });

    this.state = {
      serverError: ''
    };
  }

  render() {
    return react_default.a.createElement(abstract_oauth_app_AbstractOAuthApp, {
      team: this.props.team,
      header: add_oauth_app_HEADER,
      footer: add_oauth_app_FOOTER,
      loading: add_oauth_app_LOADING,
      renderExtra: '',
      action: this.addOAuthApp,
      serverError: this.state.serverError
    });
  }

}

add_oauth_app_defineProperty(add_oauth_app_AddOAuthApp, "propTypes", {
  /**
  * The team data
  */
  team: prop_types_default.a.object,

  /**
  * The request state for addOAuthApp action. Contains status and error
  */
  addOAuthAppRequest: prop_types_default.a.object.isRequired,
  actions: prop_types_default.a.shape({
    /**
    * The function to call to add new OAuthApp
    */
    addOAuthApp: prop_types_default.a.func.isRequired
  }).isRequired
});
// CONCATENATED MODULE: ./components/integrations/add_oauth_app/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





function add_oauth_app_mapStateToProps(state) {
  return {
    addOAuthAppRequest: state.requests.integrations.addOAuthApp
  };
}

function add_oauth_app_mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux["bindActionCreators"])({
      addOAuthApp: actions_integrations["addOAuthApp"]
    }, dispatch)
  };
}

/* harmony default export */ var add_oauth_app = (Object(es["connect"])(add_oauth_app_mapStateToProps, add_oauth_app_mapDispatchToProps)(add_oauth_app_AddOAuthApp));
// CONCATENATED MODULE: ./components/integrations/edit_oauth_app/edit_oauth_app.jsx
function edit_oauth_app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.







const edit_oauth_app_HEADER = {
  id: 'integrations.edit',
  defaultMessage: 'Edit'
};
const edit_oauth_app_FOOTER = {
  id: 'update_incoming_webhook.update',
  defaultMessage: 'Update'
};
const edit_oauth_app_LOADING = {
  id: 'update_incoming_webhook.updating',
  defaultMessage: 'Updating...'
};
class edit_oauth_app_EditOAuthApp extends react_default.a.PureComponent {
  constructor(props) {
    super(props);

    edit_oauth_app_defineProperty(this, "editOAuthApp", async app => {
      this.newApp = app;

      if (this.props.oauthApp.id) {
        app.id = this.props.oauthApp.id;
      }

      if (this.props.oauthApp.token) {
        app.token = this.props.oauthApp.token;
      }

      const callbackUrlsSame = this.props.oauthApp.callback_urls.length === app.callback_urls.length && this.props.oauthApp.callback_urls.every((v, i) => v === app.callback_urls[i]);

      if (callbackUrlsSame === false) {
        this.handleConfirmModal();
      } else {
        await this.submitOAuthApp();
      }
    });

    edit_oauth_app_defineProperty(this, "handleConfirmModal", () => {
      this.setState({
        showConfirmModal: true
      });
    });

    edit_oauth_app_defineProperty(this, "confirmModalDismissed", () => {
      this.setState({
        showConfirmModal: false
      });
    });

    edit_oauth_app_defineProperty(this, "submitOAuthApp", async () => {
      this.setState({
        serverError: ''
      });
      const {
        data,
        error
      } = await this.props.actions.editOAuthApp(this.newApp);

      if (data) {
        browser_history["a" /* browserHistory */].push(`/${this.props.team.name}/integrations/oauth2-apps`);
        return;
      }

      this.setState({
        showConfirmModal: false
      });

      if (error) {
        this.setState({
          serverError: error.message
        });
      }
    });

    edit_oauth_app_defineProperty(this, "renderExtra", () => {
      const confirmButton = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "update_command.update",
        defaultMessage: "Update"
      });
      const confirmTitle = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "update_oauth_app.confirm",
        defaultMessage: "Edit OAuth 2.0 application"
      });
      const confirmMessage = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "update_oauth_app.question",
        defaultMessage: "Your changes may break the existing OAuth 2.0 application. Are you sure you would like to update it?"
      });
      return react_default.a.createElement(confirm_modal["a" /* default */], {
        title: confirmTitle,
        message: confirmMessage,
        confirmButtonText: confirmButton,
        show: this.state.showConfirmModal,
        onConfirm: this.submitOAuthApp,
        onCancel: this.confirmModalDismissed
      });
    });

    this.state = {
      showConfirmModal: false,
      serverError: ''
    };
  }

  componentDidMount() {
    if (this.props.enableOAuthServiceProvider) {
      this.props.actions.getOAuthApp(this.props.oauthAppId);
    }
  }

  render() {
    if (!this.props.oauthApp) {
      return react_default.a.createElement(loading_screen["a" /* default */], null);
    }

    return react_default.a.createElement(abstract_oauth_app_AbstractOAuthApp, {
      team: this.props.team,
      header: edit_oauth_app_HEADER,
      footer: edit_oauth_app_FOOTER,
      loading: edit_oauth_app_LOADING,
      renderExtra: this.renderExtra(),
      action: this.editOAuthApp,
      serverError: this.state.serverError,
      initialApp: this.props.oauthApp
    });
  }

}

edit_oauth_app_defineProperty(edit_oauth_app_EditOAuthApp, "propTypes", {
  /**
  * The current team
  */
  team: prop_types_default.a.object.isRequired,

  /**
  * The id of the OAuthApp to edit
  */
  oauthAppId: prop_types_default.a.string.isRequired,

  /**
  * The OAuthApp data
  */
  oauthApp: prop_types_default.a.object,
  actions: prop_types_default.a.shape({
    /**
    * The function to call to get OAuthApp
    */
    getOAuthApp: prop_types_default.a.func.isRequired,

    /**
    * The function to call to edit OAuthApp
    */
    editOAuthApp: prop_types_default.a.func.isRequired
  }).isRequired,

  /**
  * Whether or not OAuth applications are enabled.
  */
  enableOAuthServiceProvider: prop_types_default.a.bool
});
// CONCATENATED MODULE: ./components/integrations/edit_oauth_app/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






function edit_oauth_app_mapStateToProps(state, ownProps) {
  const config = Object(general["getConfig"])(state);
  const oauthAppId = new URLSearchParams(ownProps.location.search).get('id');
  const enableOAuthServiceProvider = config.EnableOAuthServiceProvider === 'true';
  return {
    oauthAppId,
    oauthApp: state.entities.integrations.oauthApps[oauthAppId],
    enableOAuthServiceProvider
  };
}

function edit_oauth_app_mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux["bindActionCreators"])({
      getOAuthApp: actions_integrations["getOAuthApp"],
      editOAuthApp: actions_integrations["editOAuthApp"]
    }, dispatch)
  };
}

/* harmony default export */ var edit_oauth_app = (Object(es["connect"])(edit_oauth_app_mapStateToProps, edit_oauth_app_mapDispatchToProps)(edit_oauth_app_EditOAuthApp));
// CONCATENATED MODULE: ./components/integrations/installed_command.jsx
function installed_command_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.







function installed_command_matchesFilter(command, filter) {
  if (!filter) {
    return true;
  }

  return command.display_name.toLowerCase().indexOf(filter) !== -1 || command.description.toLowerCase().indexOf(filter) !== -1 || command.trigger.toLowerCase().indexOf(filter) !== -1;
}
class installed_command_InstalledCommand extends react_default.a.PureComponent {
  constructor(...args) {
    super(...args);

    installed_command_defineProperty(this, "handleRegenToken", e => {
      e.preventDefault();
      this.props.onRegenToken(this.props.command);
    });

    installed_command_defineProperty(this, "handleDelete", () => {
      this.props.onDelete(this.props.command);
    });
  }

  render() {
    const command = this.props.command;
    const filter = this.props.filter ? this.props.filter.toLowerCase() : '';

    if (!installed_command_matchesFilter(command, filter)) {
      return null;
    }

    let name;

    if (command.display_name) {
      name = command.display_name;
    } else {
      name = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "installed_commands.unnamed_command",
        defaultMessage: "Unnamed Slash Command"
      });
    }

    let description = null;

    if (command.description) {
      description = react_default.a.createElement("div", {
        className: "item-details__row"
      }, react_default.a.createElement("span", {
        className: "item-details__description"
      }, command.description));
    }

    let trigger = '- /' + command.trigger;

    if (command.auto_complete && command.auto_complete_hint) {
      trigger += ' ' + command.auto_complete_hint;
    }

    let actions = null;

    if (this.props.canChange) {
      actions = react_default.a.createElement("div", {
        className: "item-actions"
      }, react_default.a.createElement("button", {
        className: "style--none color--link",
        onClick: this.handleRegenToken
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "installed_integrations.regenToken",
        defaultMessage: "Regenerate Token"
      })), ' - ', react_default.a.createElement(react_router_dom["a" /* Link */], {
        to: `/${this.props.team.name}/integrations/commands/edit?id=${command.id}`
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "installed_integrations.edit",
        defaultMessage: "Edit"
      })), ' - ', react_default.a.createElement(delete_integration_DeleteIntegration, {
        messageId: Object(i18n["b" /* t */])('installed_commands.delete.confirm'),
        onDelete: this.handleDelete
      }));
    }

    const commandToken = command.token;
    return react_default.a.createElement("div", {
      className: "backstage-list__item"
    }, react_default.a.createElement("div", {
      className: "item-details"
    }, react_default.a.createElement("div", {
      className: "item-details__row"
    }, react_default.a.createElement("span", {
      className: "item-details__name"
    }, name), react_default.a.createElement("span", {
      className: "item-details__trigger"
    }, trigger)), description, react_default.a.createElement("div", {
      className: "item-details__row"
    }, react_default.a.createElement("span", {
      className: "item-details__token"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "installed_integrations.token",
      defaultMessage: "Token: {token}",
      values: {
        token: commandToken
      }
    }), react_default.a.createElement(copy_text_CopyText, {
      value: commandToken
    }))), react_default.a.createElement("div", {
      className: "item-details__row"
    }, react_default.a.createElement("span", {
      className: "item-details__creation"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "installed_integrations.creation",
      defaultMessage: "Created by {creator} on {createAt, date, full}",
      values: {
        creator: this.props.creator.username,
        createAt: command.create_at
      }
    })))), actions);
  }

}

installed_command_defineProperty(installed_command_InstalledCommand, "propTypes", {
  /**
  * The team data
  */
  team: prop_types_default.a.object.isRequired,

  /**
  * Installed slash command to display
  */
  command: prop_types_default.a.object.isRequired,

  /**
  * The function to call when Regenerate Token link is clicked
  */
  onRegenToken: prop_types_default.a.func.isRequired,

  /**
  * The function to call when Delete link is clicked
  */
  onDelete: prop_types_default.a.func.isRequired,

  /**
  * Set to filter command, comes from BackstageList
  */
  filter: prop_types_default.a.string,

  /**
  * The creator user data
  */
  creator: prop_types_default.a.object.isRequired,

  /**
  * Set to show edit link
  */
  canChange: prop_types_default.a.bool.isRequired
});
// CONCATENATED MODULE: ./components/integrations/installed_commands/installed_commands.jsx
function installed_commands_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.







class installed_commands_InstalledCommands extends react_default.a.PureComponent {
  constructor(...args) {
    super(...args);

    installed_commands_defineProperty(this, "regenCommandToken", command => {
      this.props.actions.regenCommandToken(command.id);
    });

    installed_commands_defineProperty(this, "deleteCommand", command => {
      this.props.actions.deleteCommand(command.id);
    });
  }

  commandCompare(a, b) {
    let nameA = a.display_name;

    if (!nameA) {
      nameA = utils["gb" /* localizeMessage */]('installed_commands.unnamed_command', 'Unnamed Slash Command');
    }

    let nameB = b.display_name;

    if (!nameB) {
      nameB = utils["gb" /* localizeMessage */]('installed_commands.unnamed_command', 'Unnamed Slash Command');
    }

    return nameA.localeCompare(nameB);
  }

  render() {
    const commands = filter => this.props.commands.filter(command => command.team_id === this.props.team.id).filter(command => installed_command_matchesFilter(command, filter)).sort(this.commandCompare).map(command => {
      const canChange = this.props.canManageOthersSlashCommands || this.props.user.id === command.creator_id;
      return react_default.a.createElement(installed_command_InstalledCommand, {
        key: command.id,
        team: this.props.team,
        command: command,
        onRegenToken: this.regenCommandToken,
        onDelete: this.deleteCommand,
        creator: this.props.users[command.creator_id] || {},
        canChange: canChange
      });
    });

    return react_default.a.createElement(backstage_list_BackstageList, {
      header: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "installed_commands.header",
        defaultMessage: "Installed Slash Commands"
      }),
      addText: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "installed_commands.add",
        defaultMessage: "Add Slash Command"
      }),
      addLink: '/' + this.props.team.name + '/integrations/commands/add',
      addButtonId: "addSlashCommand",
      emptyText: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "installed_commands.empty",
        defaultMessage: "No slash commands found"
      }),
      emptyTextSearch: react_default.a.createElement(formatted_markdown_message["b" /* default */], {
        id: "installed_commands.emptySearch",
        defaultMessage: "No slash commands match {searchTerm}"
      }),
      helpText: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "installed_commands.help",
        defaultMessage: "Use slash commands to connect external tools to Mattermost. {buildYourOwn} or visit the {appDirectory} to find self-hosted, third-party apps and integrations.",
        values: {
          buildYourOwn: react_default.a.createElement("a", {
            target: "_blank",
            rel: "noopener noreferrer",
            href: "http://docs.mattermost.com/developer/slash-commands.html"
          }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "installed_commands.help.buildYourOwn",
            defaultMessage: "Build your own"
          })),
          appDirectory: react_default.a.createElement("a", {
            target: "_blank",
            rel: "noopener noreferrer",
            href: "https://about.mattermost.com/default-app-directory/"
          }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "installed_commands.help.appDirectory",
            defaultMessage: "App Directory"
          }))
        }
      }),
      searchPlaceholder: utils["gb" /* localizeMessage */]('installed_commands.search', 'Search Slash Commands'),
      loading: this.props.loading
    }, filter => {
      const children = commands(filter);
      return [children, children.length > 0];
    });
  }

}

installed_commands_defineProperty(installed_commands_InstalledCommands, "propTypes", {
  /**
  * The team object
  */
  team: prop_types_default.a.object,

  /**
  * The user object
  */
  user: prop_types_default.a.object,

  /**
  * The users collection
  */
  users: prop_types_default.a.object,

  /**
  * Installed slash commands to display
  */
  commands: prop_types_default.a.array,

  /**
  * Set whether to show the loading... animation or not
  */
  loading: prop_types_default.a.bool,

  /**
  * Set to allow changes to installed slash commands
  */
  canManageOthersSlashCommands: prop_types_default.a.bool,
  actions: prop_types_default.a.shape({
    /**
    * The function to call when Regenerate Token link is clicked
    */
    regenCommandToken: prop_types_default.a.func.isRequired,

    /**
    * The function to call when Delete link is clicked
    */
    deleteCommand: prop_types_default.a.func.isRequired
  }).isRequired
});
// CONCATENATED MODULE: ./components/integrations/installed_commands/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.







function installed_commands_mapStateToProps(state, ownProps) {
  const canManageOthersSlashCommands = Object(entities_roles["haveITeamPermission"])(state, {
    team: ownProps.team.id,
    permission: constants["Permissions"].MANAGE_OTHERS_SLASH_COMMANDS
  });
  return {
    canManageOthersSlashCommands
  };
}

function installed_commands_mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux["bindActionCreators"])({
      regenCommandToken: actions_integrations["regenCommandToken"],
      deleteCommand: actions_integrations["deleteCommand"]
    }, dispatch)
  };
}

/* harmony default export */ var installed_commands = (Object(es["connect"])(installed_commands_mapStateToProps, installed_commands_mapDispatchToProps)(installed_commands_InstalledCommands));
// CONCATENATED MODULE: ./components/integrations/abstract_command.jsx
function abstract_command_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.











const REQUEST_POST = 'P';
const REQUEST_GET = 'G';
const REQUEST_NON = 'N';
class abstract_command_AbstractCommand extends react_default.a.PureComponent {
  constructor(props) {
    super(props);

    abstract_command_defineProperty(this, "componentWillUnmount", () => {
      this.setState = (state, callback) => {
        return;
      };
    });

    abstract_command_defineProperty(this, "getStateFromCommand", command => {
      return {
        displayName: command.display_name || '',
        description: command.description || '',
        trigger: command.trigger || '',
        url: command.url || '',
        method: command.method || REQUEST_POST,
        username: command.username || '',
        iconUrl: command.icon_url || '',
        autocomplete: command.auto_complete || false,
        autocompleteHint: command.auto_complete_hint || '',
        autocompleteDescription: command.auto_complete_desc || '',
        saving: false,
        clientError: null,
        cardType: command.card_type || ''
      };
    });

    abstract_command_defineProperty(this, "handleSubmit", e => {
      e.preventDefault();

      if (this.state.saving) {
        return;
      }

      this.setState({
        saving: true,
        clientError: ''
      });
      let triggerWord = this.state.trigger.trim().toLowerCase();

      if (triggerWord.indexOf('/') === 0) {
        triggerWord = triggerWord.substr(1);
      }

      const command = {
        display_name: this.state.displayName,
        description: this.state.description,
        trigger: triggerWord,
        url: this.state.url.trim(),
        method: this.state.method,
        card_type: this.state.cardType,
        username: this.state.username,
        icon_url: this.state.iconUrl,
        auto_complete: this.state.autocomplete,
        team_id: this.props.team.id
      };

      if (command.auto_complete) {
        command.auto_complete_desc = this.state.autocompleteDescription;
        command.auto_complete_hint = this.state.autocompleteHint;
      }

      if (!command.trigger) {
        this.setState({
          saving: false,
          clientError: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "add_command.triggerRequired",
            defaultMessage: "A trigger word is required"
          })
        });
        return;
      }

      if (command.trigger.indexOf('/') === 0) {
        this.setState({
          saving: false,
          clientError: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "add_command.triggerInvalidSlash",
            defaultMessage: "A trigger word cannot begin with a /"
          })
        });
        return;
      }

      if (command.trigger.indexOf(' ') !== -1) {
        this.setState({
          saving: false,
          clientError: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "add_command.triggerInvalidSpace",
            defaultMessage: "A trigger word must not contain spaces"
          })
        });
        return;
      }

      if (command.trigger.length < utils_constants["N" /* default */].MIN_TRIGGER_LENGTH || command.trigger.length > utils_constants["N" /* default */].MAX_TRIGGER_LENGTH) {
        this.setState({
          saving: false,
          clientError: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "add_command.triggerInvalidLength",
            defaultMessage: "A trigger word must contain between {min} and {max} characters",
            values: {
              min: utils_constants["N" /* default */].MIN_TRIGGER_LENGTH,
              max: utils_constants["N" /* default */].MAX_TRIGGER_LENGTH
            }
          })
        });
        return;
      }

      if (!command.url) {
        this.setState({
          saving: false,
          clientError: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "add_command.urlRequired",
            defaultMessage: "A request URL is required"
          })
        });
        return;
      }

      this.props.action(command).then(() => this.setState({
        saving: false
      }));
    });

    abstract_command_defineProperty(this, "updateDisplayName", e => {
      this.setState({
        displayName: e.target.value
      });
    });

    abstract_command_defineProperty(this, "updateDescription", e => {
      this.setState({
        description: e.target.value
      });
    });

    abstract_command_defineProperty(this, "updateTrigger", e => {
      this.setState({
        trigger: e.target.value
      });
    });

    abstract_command_defineProperty(this, "updateUrl", e => {
      this.setState({
        url: e.target.value
      });
    });

    abstract_command_defineProperty(this, "updateMethod", e => {
      this.setState({
        method: e.target.value
      });
    });

    abstract_command_defineProperty(this, "updateCardType", e => {
      this.setState({
        cardType: e.target.value
      });
    });

    abstract_command_defineProperty(this, "updateUsername", e => {
      this.setState({
        username: e.target.value
      });
    });

    abstract_command_defineProperty(this, "updateIconUrl", e => {
      this.setState({
        iconUrl: e.target.value
      });
    });

    abstract_command_defineProperty(this, "updateAutocomplete", e => {
      this.setState({
        autocomplete: e.target.checked
      });
    });

    abstract_command_defineProperty(this, "updateAutocompleteHint", e => {
      this.setState({
        autocompleteHint: e.target.value
      });
    });

    abstract_command_defineProperty(this, "updateAutocompleteDescription", e => {
      this.setState({
        autocompleteDescription: e.target.value
      });
    });

    this.state = this.getStateFromCommand(this.props.initialCommand || {});
  }

  render() {
    let autocompleteHint = null;
    let autocompleteDescription = null;

    if (this.state.autocomplete) {
      autocompleteHint = react_default.a.createElement("div", {
        className: "form-group"
      }, react_default.a.createElement("label", {
        className: "control-label col-sm-4",
        htmlFor: "autocompleteHint"
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "add_command.autocompleteHint",
        defaultMessage: "Autocomplete Hint"
      })), react_default.a.createElement("div", {
        className: "col-md-5 col-sm-8"
      }, react_default.a.createElement(localized_input["a" /* default */], {
        id: "autocompleteHint",
        type: "text",
        maxLength: "1024",
        className: "form-control",
        value: this.state.autocompleteHint,
        onChange: this.updateAutocompleteHint,
        placeholder: {
          id: Object(i18n["b" /* t */])('add_command.autocompleteHint.placeholder'),
          defaultMessage: 'Example: [Patient Name]'
        }
      }), react_default.a.createElement("div", {
        className: "form__help"
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "add_command.autocompleteHint.help",
        defaultMessage: "(Optional) Arguments associated with your slash command, displayed as help in the autocomplete list."
      }))));
      autocompleteDescription = react_default.a.createElement("div", {
        className: "form-group"
      }, react_default.a.createElement("label", {
        className: "control-label col-sm-4",
        htmlFor: "autocompleteDescription"
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "add_command.autocompleteDescription",
        defaultMessage: "Autocomplete Description"
      })), react_default.a.createElement("div", {
        className: "col-md-5 col-sm-8"
      }, react_default.a.createElement(localized_input["a" /* default */], {
        id: "description",
        type: "text",
        maxLength: "128",
        className: "form-control",
        value: this.state.autocompleteDescription,
        onChange: this.updateAutocompleteDescription,
        placeholder: {
          id: Object(i18n["b" /* t */])('add_command.autocompleteDescription.placeholder'),
          defaultMessage: 'Example: "Returns search results for patient records"'
        }
      }), react_default.a.createElement("div", {
        className: "form__help"
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "add_command.autocompleteDescription.help",
        defaultMessage: "(Optional) Short description of slash command for the autocomplete list."
      }))));
    }

    return react_default.a.createElement("div", {
      className: "backstage-content row"
    }, react_default.a.createElement(backstage_header_BackstageHeader, null, react_default.a.createElement(react_router_dom["a" /* Link */], {
      to: '/' + this.props.team.name + '/integrations/commands'
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "installed_command.header",
      defaultMessage: "Slash Commands"
    })), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: this.props.header.id,
      defaultMessage: this.props.header.defaultMessage
    })), react_default.a.createElement("div", {
      className: "backstage-form"
    }, react_default.a.createElement("form", {
      className: "form-horizontal",
      onSubmit: this.handleSubmit
    }, react_default.a.createElement("div", {
      className: "form-group"
    }, react_default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "displayName"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_command.displayName",
      defaultMessage: "Title"
    })), react_default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react_default.a.createElement("input", {
      id: "displayName",
      type: "text",
      maxLength: "64",
      className: "form-control",
      value: this.state.displayName,
      onChange: this.updateDisplayName
    }), react_default.a.createElement("div", {
      className: "form__help"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_command.displayName.help",
      defaultMessage: "Choose a title to be displayed on the slash command settings page. Maximum 64 characters."
    })))), react_default.a.createElement("div", {
      className: "form-group"
    }, react_default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "description"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_command.description",
      defaultMessage: "Description"
    })), react_default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react_default.a.createElement("input", {
      id: "description",
      type: "text",
      maxLength: "128",
      className: "form-control",
      value: this.state.description,
      onChange: this.updateDescription
    }), react_default.a.createElement("div", {
      className: "form__help"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_command.description.help",
      defaultMessage: "Description for your incoming webhook."
    })))), react_default.a.createElement("div", {
      className: "form-group"
    }, react_default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "trigger"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_command.trigger",
      defaultMessage: "Command Trigger Word"
    })), react_default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react_default.a.createElement(localized_input["a" /* default */], {
      id: "trigger",
      type: "text",
      maxLength: utils_constants["N" /* default */].MAX_TRIGGER_LENGTH,
      className: "form-control",
      value: this.state.trigger,
      onChange: this.updateTrigger,
      placeholder: {
        id: Object(i18n["b" /* t */])('add_command.trigger.placeholder'),
        defaultMessage: 'Command trigger e.g. "hello" not including the slash'
      }
    }), react_default.a.createElement("div", {
      className: "form__help"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_command.trigger.help",
      defaultMessage: "Trigger word must be unique, and cannot begin with a slash or contain any spaces."
    })), react_default.a.createElement("div", {
      className: "form__help"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_command.trigger.helpExamples",
      defaultMessage: "Examples: client, employee, patient, weather"
    })), react_default.a.createElement("div", {
      className: "form__help"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_command.trigger.helpReserved",
      defaultMessage: "Reserved: {link}",
      values: {
        link: react_default.a.createElement("a", {
          href: "https://docs.mattermost.com/help/messaging/executing-commands.html#built-in-commands",
          target: "_blank",
          rel: "noopener noreferrer"
        }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "add_command.trigger.helpReservedLinkText",
          defaultMessage: "see list of built-in slash commands"
        }))
      }
    })))), react_default.a.createElement("div", {
      className: "form-group"
    }, react_default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "url"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_command.url",
      defaultMessage: "Request URL"
    })), react_default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react_default.a.createElement(localized_input["a" /* default */], {
      id: "url",
      type: "text",
      maxLength: "1024",
      className: "form-control",
      value: this.state.url,
      onChange: this.updateUrl,
      placeholder: {
        id: Object(i18n["b" /* t */])('add_command.url.placeholder'),
        defaultMessage: 'Must start with http:// or https://'
      }
    }), react_default.a.createElement("div", {
      className: "form__help"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_command.url.help",
      defaultMessage: "The callback URL to receive the HTTP POST or GET event request when the slash command is run."
    })))), react_default.a.createElement("div", {
      className: "form-group"
    }, react_default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "method"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_command.cardType",
      defaultMessage: "Request Method"
    })), react_default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react_default.a.createElement("select", {
      id: "method",
      className: "form-control",
      value: this.state.cardType,
      onChange: this.updateCardType
    }, react_default.a.createElement("option", {
      value: ""
    }, "\"\""), react_default.a.createElement("option", {
      value: "9999"
    }, "\"9999\"")))), react_default.a.createElement("div", {
      className: "form-group"
    }, react_default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "method"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_command.method",
      defaultMessage: "Request Method"
    })), react_default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react_default.a.createElement("select", {
      id: "method",
      className: "form-control",
      value: this.state.method,
      onChange: this.updateMethod
    }, react_default.a.createElement("option", {
      value: REQUEST_POST
    }, utils["gb" /* localizeMessage */]('add_command.method.post', 'POST')), react_default.a.createElement("option", {
      value: REQUEST_GET
    }, utils["gb" /* localizeMessage */]('add_command.method.get', 'GET')), react_default.a.createElement("option", {
      value: REQUEST_NON
    }, utils["gb" /* localizeMessage */]('add_command.method.non', 'NON'))), react_default.a.createElement("div", {
      className: "form__help"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_command.method.help",
      defaultMessage: "The type of command request issued to the Request URL."
    })))), react_default.a.createElement("div", {
      className: "form-group"
    }, react_default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "username"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_command.username",
      defaultMessage: "Response Username"
    })), react_default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react_default.a.createElement(localized_input["a" /* default */], {
      id: "username",
      type: "text",
      maxLength: "64",
      className: "form-control",
      value: this.state.username,
      onChange: this.updateUsername,
      placeholder: {
        id: Object(i18n["b" /* t */])('add_command.username.placeholder'),
        defaultMessage: 'Username'
      }
    }), react_default.a.createElement("div", {
      className: "form__help"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_command.username.help",
      defaultMessage: "(Optional) Choose a username override for responses for this slash command. Usernames can consist of up to 22 characters consisting of lowercase letters, numbers and they symbols \"-\", \"_\", and \".\" ."
    })))), react_default.a.createElement("div", {
      className: "form-group"
    }, react_default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "iconUrl"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_command.iconUrl",
      defaultMessage: "Response Icon"
    })), react_default.a.createElement("div", {
      className: "col-md-5 col-sm-8"
    }, react_default.a.createElement(localized_input["a" /* default */], {
      id: "iconUrl",
      type: "text",
      maxLength: "1024",
      className: "form-control",
      value: this.state.iconUrl,
      onChange: this.updateIconUrl,
      placeholder: {
        id: Object(i18n["b" /* t */])('add_command.iconUrl.placeholder'),
        defaultMessage: 'https://www.example.com/myicon.png'
      }
    }), react_default.a.createElement("div", {
      className: "form__help"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_command.iconUrl.help",
      defaultMessage: "(Optional) Choose a profile picture override for the post responses to this slash command. Enter the URL of a .png or .jpg file at least 128 pixels by 128 pixels."
    })))), react_default.a.createElement("div", {
      className: "form-group"
    }, react_default.a.createElement("label", {
      className: "control-label col-sm-4",
      htmlFor: "autocomplete"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_command.autocomplete",
      defaultMessage: "Autocomplete"
    })), react_default.a.createElement("div", {
      className: "col-md-5 col-sm-8 checkbox"
    }, react_default.a.createElement("input", {
      id: "autocomplete",
      type: "checkbox",
      checked: this.state.autocomplete,
      onChange: this.updateAutocomplete
    }), react_default.a.createElement("div", {
      className: "form__help"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_command.autocomplete.help",
      defaultMessage: "(Optional) Show slash command in autocomplete list."
    })))), autocompleteHint, autocompleteDescription, react_default.a.createElement("div", {
      className: "backstage-form__footer"
    }, react_default.a.createElement(form_error["a" /* default */], {
      type: "backstage",
      errors: [this.props.serverError, this.state.clientError]
    }), react_default.a.createElement(react_router_dom["a" /* Link */], {
      className: "btn btn-link btn-sm",
      to: '/' + this.props.team.name + '/integrations/commands'
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "add_command.cancel",
      defaultMessage: "Cancel"
    })), react_default.a.createElement(spinner_button["a" /* default */], {
      className: "btn btn-primary",
      type: "submit",
      spinning: this.state.saving,
      spinningText: utils["gb" /* localizeMessage */](this.props.loading.id, this.props.loading.defaultMessage),
      onClick: this.handleSubmit,
      id: "saveCommand"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: this.props.footer.id,
      defaultMessage: this.props.footer.defaultMessage
    })), this.props.renderExtra))));
  }

}

abstract_command_defineProperty(abstract_command_AbstractCommand, "propTypes", {
  /**
  * The current team
  */
  team: prop_types_default.a.object.isRequired,

  /**
  * The header text to render, has id and defaultMessage
  */
  header: prop_types_default.a.object.isRequired,

  /**
  * The footer text to render, has id and defaultMessage
  */
  footer: prop_types_default.a.object.isRequired,

  /**
  * The spinner loading text to render, has id and defaultMessage
  */
  loading: prop_types_default.a.object.isRequired,

  /**
   * Any extra component/node to render
   */
  renderExtra: prop_types_default.a.node.isRequired,

  /**
  * The server error text after a failed action
  */
  serverError: prop_types_default.a.string.isRequired,

  /**
  * The Command used to set the initial state
  */
  initialCommand: prop_types_default.a.object,

  /**
  * The async function to run when the action button is pressed
  */
  action: prop_types_default.a.func.isRequired
});
// CONCATENATED MODULE: ./components/integrations/add_command/add_command.jsx
function add_command_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





const add_command_HEADER = {
  id: Object(i18n["b" /* t */])('integrations.add'),
  defaultMessage: 'Add'
};
const add_command_FOOTER = {
  id: Object(i18n["b" /* t */])('add_command.save'),
  defaultMessage: 'Save'
};
const add_command_LOADING = {
  id: Object(i18n["b" /* t */])('add_command.saving'),
  defaultMessage: 'Saving...'
};
class add_command_AddCommand extends react_default.a.PureComponent {
  constructor(props) {
    super(props);

    add_command_defineProperty(this, "addCommand", async command => {
      this.setState({
        serverError: ''
      });
      const {
        data,
        error
      } = await this.props.actions.addCommand(command);

      if (data) {
        browser_history["a" /* browserHistory */].push(`/${this.props.team.name}/integrations/commands/confirm?type=commands&id=${data.id}`);
        return;
      }

      if (error) {
        this.setState({
          serverError: error.message
        });
      }
    });

    this.state = {
      serverError: ''
    };
  }

  render() {
    return react_default.a.createElement(abstract_command_AbstractCommand, {
      team: this.props.team,
      header: add_command_HEADER,
      footer: add_command_FOOTER,
      loading: add_command_LOADING,
      renderExtra: '',
      action: this.addCommand,
      serverError: this.state.serverError
    });
  }

}

add_command_defineProperty(add_command_AddCommand, "propTypes", {
  /**
  * The team data
  */
  team: prop_types_default.a.object,
  actions: prop_types_default.a.shape({
    /**
    * The function to call to add new command
    */
    addCommand: prop_types_default.a.func.isRequired
  }).isRequired
});
// CONCATENATED MODULE: ./components/integrations/add_command/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





function add_command_mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux["bindActionCreators"])({
      addCommand: actions_integrations["addCommand"]
    }, dispatch)
  };
}

/* harmony default export */ var add_command = (Object(es["connect"])(null, add_command_mapDispatchToProps)(add_command_AddCommand));
// CONCATENATED MODULE: ./components/integrations/edit_command/edit_command.jsx
function edit_command_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.








const edit_command_HEADER = {
  id: Object(i18n["b" /* t */])('integrations.edit'),
  defaultMessage: 'Edit'
};
const edit_command_FOOTER = {
  id: Object(i18n["b" /* t */])('edit_command.update'),
  defaultMessage: 'Update'
};
const edit_command_LOADING = {
  id: Object(i18n["b" /* t */])('edit_command.updating'),
  defaultMessage: 'Updating...'
};
class edit_command_EditCommand extends react_default.a.PureComponent {
  constructor(props) {
    super(props);

    edit_command_defineProperty(this, "editCommand", async command => {
      this.newCommand = command;

      if (this.state.originalCommand.id) {
        command.id = this.state.originalCommand.id;
      }

      if (this.state.originalCommand.url !== this.newCommand.url || this.state.originalCommand.trigger !== this.newCommand.trigger || this.state.originalCommand.method !== this.newCommand.method) {
        this.handleConfirmModal();
      } else {
        await this.submitCommand();
      }
    });

    edit_command_defineProperty(this, "handleConfirmModal", () => {
      this.setState({
        showConfirmModal: true
      });
    });

    edit_command_defineProperty(this, "confirmModalDismissed", () => {
      this.setState({
        showConfirmModal: false
      });
    });

    edit_command_defineProperty(this, "submitCommand", async () => {
      this.setState({
        serverError: ''
      });
      const {
        data,
        error
      } = await this.props.actions.editCommand(this.newCommand);

      if (data) {
        browser_history["a" /* browserHistory */].push(`/${this.props.team.name}/integrations/commands`);
        return;
      }

      this.setState({
        showConfirmModal: false
      });

      if (error) {
        this.setState({
          serverError: error.message
        });
      }
    });

    edit_command_defineProperty(this, "renderExtra", () => {
      const confirmButton = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "update_command.update",
        defaultMessage: "Update"
      });
      const confirmTitle = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "update_command.confirm",
        defaultMessage: "Edit Slash Command"
      });
      const confirmMessage = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "update_command.question",
        defaultMessage: "Your changes may break the existing slash command. Are you sure you would like to update it?"
      });
      return react_default.a.createElement(confirm_modal["a" /* default */], {
        title: confirmTitle,
        message: confirmMessage,
        confirmButtonText: confirmButton,
        show: this.state.showConfirmModal,
        onConfirm: this.submitCommand,
        onCancel: this.confirmModalDismissed
      });
    });

    this.state = {
      originalCommand: null,
      showConfirmModal: false,
      serverError: ''
    };
  }

  componentDidMount() {
    if (this.props.enableCommands) {
      this.props.actions.getCustomTeamCommands(this.props.team.id).then(() => {
        this.setState({
          originalCommand: Object.values(this.props.commands).filter(command => command.id === this.props.commandId)[0]
        });
      });
    }
  }

  render() {
    if (!this.state.originalCommand) {
      return react_default.a.createElement(loading_screen["a" /* default */], null);
    }

    return react_default.a.createElement(abstract_command_AbstractCommand, {
      team: this.props.team,
      header: edit_command_HEADER,
      footer: edit_command_FOOTER,
      loading: edit_command_LOADING,
      renderExtra: this.renderExtra(),
      action: this.editCommand,
      serverError: this.state.serverError,
      initialCommand: this.state.originalCommand
    });
  }

}

edit_command_defineProperty(edit_command_EditCommand, "propTypes", {
  /**
  * The current team
  */
  team: prop_types_default.a.object.isRequired,

  /**
  * The id of the command to edit
  */
  commandId: prop_types_default.a.string.isRequired,

  /**
  * Installed slash commands to display
  */
  commands: prop_types_default.a.object,
  actions: prop_types_default.a.shape({
    /**
    * The function to call to fetch team commands
    */
    getCustomTeamCommands: prop_types_default.a.func.isRequired,

    /**
    * The function to call to edit command
    */
    editCommand: prop_types_default.a.func.isRequired
  }).isRequired,

  /**
  * Whether or not commands are enabled.
  */
  enableCommands: prop_types_default.a.bool
});
// CONCATENATED MODULE: ./components/integrations/edit_command/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.







function edit_command_mapStateToProps(state, ownProps) {
  const config = Object(general["getConfig"])(state);
  const commandId = new URLSearchParams(ownProps.location.search).get('id');
  const enableCommands = config.EnableCommands === 'true';
  return {
    commandId,
    commands: Object(entities_integrations["getCommands"])(state),
    enableCommands
  };
}

function edit_command_mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux["bindActionCreators"])({
      getCustomTeamCommands: actions_integrations["getCustomTeamCommands"],
      editCommand: actions_integrations["editCommand"]
    }, dispatch)
  };
}

/* harmony default export */ var edit_command = (Object(es["connect"])(edit_command_mapStateToProps, edit_command_mapDispatchToProps)(edit_command_EditCommand));
// CONCATENATED MODULE: ./components/integrations/confirm_integration/confirm_integration.jsx
function confirm_integration_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.










class confirm_integration_ConfirmIntegration extends react_default.a.Component {
  static get propTypes() {
    return {
      team: prop_types_default.a.object,
      location: prop_types_default.a.object,
      commands: prop_types_default.a.object,
      oauthApps: prop_types_default.a.object,
      incomingHooks: prop_types_default.a.object,
      outgoingHooks: prop_types_default.a.object,
      bots: prop_types_default.a.object
    };
  }

  constructor(props) {
    super(props);

    confirm_integration_defineProperty(this, "handleKeyPress", e => {
      if (e.key === 'Enter') {
        browser_history["a" /* browserHistory */].push('/' + this.props.team.name + '/integrations/' + this.state.type);
      }
    });

    this.state = {
      type: new URLSearchParams(this.props.location.search).get('type'),
      id: new URLSearchParams(this.props.location.search).get('id')
    };
  }

  componentDidMount() {
    window.addEventListener('keypress', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keypress', this.handleKeyPress);
  }

  render() {
    let headerText = null;
    let helpText = null;
    let tokenText = null;
    const command = this.props.commands[this.state.id];
    const incomingHook = this.props.incomingHooks[this.state.id];
    const outgoingHook = this.props.outgoingHooks[this.state.id];
    const oauthApp = this.props.oauthApps[this.state.id];
    const bot = this.props.bots[this.state.id];

    if (this.state.type === utils_constants["g" /* Constants */].Integrations.COMMAND && command) {
      const commandToken = command.token;
      headerText = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: 'installed_commands.header',
        defaultMessage: "Slash Commands"
      });
      helpText = react_default.a.createElement("p", null, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
        id: "add_command.doneHelp",
        defaultMessage: "Your slash command has been set up. The following token will be sent in the outgoing payload. Please use it to verify the request came from your Mattermost team (see [documentation](!https://docs.mattermost.com/developer/slash-commands.html) for further details)."
      }));
      tokenText = react_default.a.createElement("p", {
        className: "word-break--all"
      }, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
        id: "add_command.token",
        defaultMessage: "**Token**: {token}",
        values: {
          token: commandToken
        }
      }), react_default.a.createElement(copy_text_CopyText, {
        value: commandToken
      }));
    } else if (this.state.type === utils_constants["g" /* Constants */].Integrations.INCOMING_WEBHOOK && incomingHook) {
      const incomingHookToken = Object(url["e" /* getSiteURL */])() + '/hooks/' + incomingHook.id;
      headerText = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: 'installed_incoming_webhooks.header',
        defaultMessage: "Incoming Webhooks"
      });
      helpText = react_default.a.createElement("p", null, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
        id: "add_incoming_webhook.doneHelp",
        defaultMessage: "Your incoming webhook has been set up. Please send data to the following URL (see [documentation](!https://docs.mattermost.com/developer/webhooks-incoming.html) for further details)."
      }));
      tokenText = react_default.a.createElement("p", {
        className: "word-break--all"
      }, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
        id: "add_incoming_webhook.url",
        defaultMessage: "**URL**: {url}",
        values: {
          url: incomingHookToken
        }
      }), react_default.a.createElement(copy_text_CopyText, {
        idMessage: "integrations.copy_client_secret",
        defaultMessage: "Copy Client Secret",
        value: incomingHookToken
      }));
    } else if (this.state.type === utils_constants["g" /* Constants */].Integrations.OUTGOING_WEBHOOK && outgoingHook) {
      const outgoingHookToken = outgoingHook.token;
      headerText = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: 'installed_outgoing_webhooks.header',
        defaultMessage: "Outgoing Webhooks"
      });
      helpText = react_default.a.createElement("p", null, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
        id: "add_outgoing_webhook.doneHelp",
        defaultMessage: "Your outgoing webhook has been set up. The following token will be sent in the outgoing payload. Please use it to verify the request came from your Mattermost team (see [documentation](!https://docs.mattermost.com/developer/webhooks-outgoing.html) for further details)."
      }));
      tokenText = react_default.a.createElement("p", {
        className: "word-break--all"
      }, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
        id: "add_outgoing_webhook.token",
        defaultMessage: "**Token**: {token}",
        values: {
          token: outgoingHookToken
        }
      }), react_default.a.createElement(copy_text_CopyText, {
        value: outgoingHookToken
      }));
    } else if (this.state.type === utils_constants["g" /* Constants */].Integrations.OAUTH_APP && oauthApp) {
      const oauthAppToken = oauthApp.id;
      const oauthAppSecret = oauthApp.client_secret;
      headerText = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: 'installed_oauth_apps.header',
        defaultMessage: "OAuth 2.0 Applications"
      });
      helpText = [];
      helpText.push(react_default.a.createElement("p", {
        key: "add_oauth_app.doneHelp"
      }, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
        id: "add_oauth_app.doneHelp",
        defaultMessage: "Your OAuth 2.0 application has been set up. Please use the following Client ID and Client Secret when requesting authorization for your application (see [documentation](!https://docs.mattermost.com/developer/oauth-2-0-applications.html) for further details)."
      })));
      helpText.push(react_default.a.createElement("p", {
        key: "add_oauth_app.clientId"
      }, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
        id: "add_oauth_app.clientId",
        defaultMessage: "**Client ID**: {id}",
        values: {
          id: oauthAppToken
        }
      }), react_default.a.createElement(copy_text_CopyText, {
        idMessage: "integrations.copy_client_id",
        defaultMessage: "Copy Client Id",
        value: oauthAppToken
      }), react_default.a.createElement("br", null), react_default.a.createElement(formatted_markdown_message["b" /* default */], {
        id: "add_oauth_app.clientSecret",
        defaultMessage: "**Client Secret**: {secret}",
        values: {
          secret: oauthAppSecret
        }
      }), react_default.a.createElement(copy_text_CopyText, {
        idMessage: "integrations.copy_client_secret",
        defaultMessage: "Copy Client Secret",
        value: oauthAppSecret
      })));
      helpText.push(react_default.a.createElement("p", {
        key: "add_oauth_app.doneUrlHelp"
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "add_oauth_app.doneUrlHelp",
        defaultMessage: "The following are your authorized redirect URL(s)."
      })));
      tokenText = react_default.a.createElement("p", {
        className: "word-break--all"
      }, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
        id: "add_oauth_app.url",
        defaultMessage: "**URL(s)**: {url}",
        values: {
          url: oauthApp.callback_urls
        }
      }));
    } else if (this.state.type === utils_constants["g" /* Constants */].Integrations.BOT && bot) {
      const botToken = new URLSearchParams(this.props.location.search).get('token');
      headerText = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "bots.manage.header",
        defaultMessage: "Bot Accounts"
      });
      helpText = react_default.a.createElement("p", null, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
        id: "bots.manage.created.text",
        defaultMessage: "Your bot account **{botname}** has been created successfully. Please use the following access token to connect to the bot (see [documentation](https://mattermost.com/pl/default-bot-accounts) for further details).",
        values: {
          botname: bot.display_name || bot.username
        }
      }));
      tokenText = react_default.a.createElement("p", {
        className: "word-break--all"
      }, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
        id: "add_outgoing_webhook.token",
        defaultMessage: "**Token**: {token}",
        values: {
          token: botToken
        }
      }), react_default.a.createElement(copy_text_CopyText, {
        value: botToken
      }), react_default.a.createElement("br", null), react_default.a.createElement("br", null), react_default.a.createElement(formatted_markdown_message["b" /* default */], {
        id: "add_outgoing_webhook.token.message",
        defaultMessage: "Make sure to add this bot account to teams and channels you want it to interact in. See [documentation](https://mattermost.com/pl/default-bot-accounts) to learn more."
      }));
    } else {
      browser_history["a" /* browserHistory */].replace(`/error?type=${utils_constants["i" /* ErrorPageTypes */].PAGE_NOT_FOUND}`);
      return '';
    }

    return react_default.a.createElement("div", {
      className: "backstage-content row"
    }, react_default.a.createElement(backstage_header_BackstageHeader, null, react_default.a.createElement(react_router_dom["a" /* Link */], {
      to: '/' + this.props.team.name + '/integrations/' + this.state.type
    }, headerText), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "integrations.add",
      defaultMessage: "Add"
    })), react_default.a.createElement("div", {
      className: "backstage-form backstage-form__confirmation"
    }, react_default.a.createElement("h4", {
      className: "backstage-form__title",
      id: "formTitle"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "integrations.successful",
      defaultMessage: "Setup Successful"
    })), helpText, tokenText, react_default.a.createElement("div", {
      className: "backstage-form__footer"
    }, react_default.a.createElement(react_router_dom["a" /* Link */], {
      className: "btn btn-primary",
      type: "submit",
      to: '/' + this.props.team.name + '/integrations/' + this.state.type,
      id: "doneButton"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "integrations.done",
      defaultMessage: "Done"
    })))));
  }

}
// CONCATENATED MODULE: ./components/integrations/confirm_integration/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





function confirm_integration_mapStateToProps(state) {
  return {
    commands: Object(entities_integrations["getCommands"])(state),
    oauthApps: Object(entities_integrations["getOAuthApps"])(state),
    incomingHooks: Object(entities_integrations["getIncomingHooks"])(state),
    outgoingHooks: Object(entities_integrations["getOutgoingHooks"])(state),
    bots: Object(entities_bots["getBotAccounts"])(state)
  };
}

/* harmony default export */ var confirm_integration = (Object(es["connect"])(confirm_integration_mapStateToProps)(confirm_integration_ConfirmIntegration));
// CONCATENATED MODULE: ./components/integrations/commands_container/commands_container.jsx
function commands_container_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function commands_container_extends() { commands_container_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return commands_container_extends.apply(this, arguments); }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.








const CommandRoute = ({
  component: Component,
  extraProps,
  ...rest
}) => //eslint-disable-line react/prop-types
react_default.a.createElement(react_router["b" /* Route */], commands_container_extends({}, rest, {
  render: props => react_default.a.createElement(Component, commands_container_extends({}, extraProps, props))
}));

class commands_container_CommandsContainer extends react_default.a.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    if (this.props.enableCommands) {
      this.props.actions.loadCommandsAndProfilesForTeam(this.props.team.id).then(() => this.setState({
        loading: false
      }));
    }
  }

  render() {
    const extraProps = {
      loading: this.state.loading,
      commands: this.props.commands || [],
      users: this.props.users,
      team: this.props.team,
      user: this.props.user
    };
    return react_default.a.createElement("div", null, react_default.a.createElement(react_router["d" /* Switch */], null, react_default.a.createElement(react_router["b" /* Route */], {
      exact: true,
      path: `${this.props.match.url}/`,
      render: () => react_default.a.createElement(react_router["a" /* Redirect */], {
        to: `${this.props.match.url}/installed`
      })
    }), react_default.a.createElement(CommandRoute, {
      extraProps: extraProps,
      path: `${this.props.match.url}/installed`,
      component: installed_commands
    }), react_default.a.createElement(CommandRoute, {
      extraProps: extraProps,
      path: `${this.props.match.url}/add`,
      component: add_command
    }), react_default.a.createElement(CommandRoute, {
      extraProps: extraProps,
      path: `${this.props.match.url}/edit`,
      component: edit_command
    }), react_default.a.createElement(CommandRoute, {
      extraProps: extraProps,
      path: `${this.props.match.url}/confirm`,
      component: confirm_integration
    })));
  }

}

commands_container_defineProperty(commands_container_CommandsContainer, "propTypes", {
  /**
  * The team data needed to pass into child components
  */
  team: prop_types_default.a.object,

  /**
  * The user data needed to pass into child components
  */
  user: prop_types_default.a.object,

  /**
  * The users collection
  */
  users: prop_types_default.a.object,

  /**
  * Installed slash commands to display
  */
  commands: prop_types_default.a.array,

  /**
  * Object from react-router
  */
  match: prop_types_default.a.shape({
    url: prop_types_default.a.string.isRequired
  }).isRequired,
  actions: prop_types_default.a.shape({
    /**
    * The function to call to fetch team commands
    */
    loadCommandsAndProfilesForTeam: prop_types_default.a.func.isRequired
  }).isRequired,

  /**
  * Whether or not commands are enabled.
  */
  enableCommands: prop_types_default.a.bool
});
// CONCATENATED MODULE: ./components/integrations/commands_container/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.








function commands_container_mapStateToProps(state) {
  const config = Object(general["getConfig"])(state);
  const enableCommands = config.EnableCommands === 'true';
  return {
    commands: Object.values(Object(entities_integrations["getCommands"])(state)),
    users: Object(users["getUsers"])(state),
    enableCommands
  };
}

function commands_container_mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux["bindActionCreators"])({
      loadCommandsAndProfilesForTeam: integration_actions["b" /* loadCommandsAndProfilesForTeam */]
    }, dispatch)
  };
}

/* harmony default export */ var commands_container = (Object(es["connect"])(commands_container_mapStateToProps, commands_container_mapDispatchToProps)(commands_container_CommandsContainer));
// CONCATENATED MODULE: ./components/backstage/components/backstage_category.jsx
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.



class backstage_category_BackstageCategory extends react_default.a.Component {
  static get propTypes() {
    return {
      name: prop_types_default.a.string.isRequired,
      title: prop_types_default.a.node.isRequired,
      icon: prop_types_default.a.string.isRequired,
      parentLink: prop_types_default.a.string,
      children: prop_types_default.a.arrayOf(prop_types_default.a.element)
    };
  }

  static get defaultProps() {
    return {
      parentLink: '',
      children: []
    };
  }

  static get contextTypes() {
    return {
      router: prop_types_default.a.object.isRequired
    };
  }

  render() {
    const {
      name,
      title,
      icon,
      parentLink,
      children
    } = this.props;
    const link = parentLink + '/' + name;
    return react_default.a.createElement("li", {
      className: "backstage-sidebar__category"
    }, react_default.a.createElement(react_router_dom["b" /* NavLink */], {
      to: link,
      className: "category-title",
      activeClassName: "category-title--active"
    }, react_default.a.createElement("i", {
      className: 'fa ' + icon
    }), react_default.a.createElement("span", {
      className: "category-title__text"
    }, title)), react_default.a.createElement(react_router["b" /* Route */], {
      path: link,
      render: () => react_default.a.createElement("ul", {
        className: "sections"
      }, react_default.a.Children.map(children, child => {
        if (!child) {
          return child;
        }

        return react_default.a.cloneElement(child, {
          parentLink: link
        });
      }))
    }));
  }

}
// CONCATENATED MODULE: ./components/backstage/components/backstage_section.jsx
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.



class backstage_section_BackstageSection extends react_default.a.Component {
  static get propTypes() {
    return {
      name: prop_types_default.a.string.isRequired,
      title: prop_types_default.a.node.isRequired,
      parentLink: prop_types_default.a.string,
      subsection: prop_types_default.a.bool,
      children: prop_types_default.a.arrayOf(prop_types_default.a.element),
      id: prop_types_default.a.string
    };
  }

  static get defaultProps() {
    return {
      parentLink: '',
      subsection: false,
      children: []
    };
  }

  static get contextTypes() {
    return {
      router: prop_types_default.a.object.isRequired
    };
  }

  getLink() {
    return this.props.parentLink + '/' + this.props.name;
  }

  render() {
    const {
      title,
      subsection,
      children
    } = this.props;
    const link = this.getLink();
    let clonedChildren = null;

    if (children.length > 0) {
      clonedChildren = react_default.a.createElement("ul", {
        className: "subsections"
      }, react_default.a.Children.map(children, child => {
        return react_default.a.cloneElement(child, {
          parentLink: link,
          subsection: true
        });
      }));
    }

    let className = 'section';

    if (subsection) {
      className = 'subsection';
    }

    return react_default.a.createElement("li", {
      className: className,
      id: this.props.id
    }, react_default.a.createElement(react_router_dom["b" /* NavLink */], {
      className: `${className}-title`,
      activeClassName: `${className}-title--active`,
      to: link
    }, react_default.a.createElement("span", {
      className: `${className}-title__text`
    }, title)), clonedChildren);
  }

}
// CONCATENATED MODULE: ./components/backstage/components/backstage_sidebar.jsx
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.








class backstage_sidebar_BackstageSidebar extends react_default.a.Component {
  static get propTypes() {
    return {
      team: prop_types_default.a.object.isRequired,
      user: prop_types_default.a.object.isRequired,
      enableCustomEmoji: prop_types_default.a.bool.isRequired,
      enableIncomingWebhooks: prop_types_default.a.bool.isRequired,
      enableOutgoingWebhooks: prop_types_default.a.bool.isRequired,
      enableCommands: prop_types_default.a.bool.isRequired,
      enableOAuthServiceProvider: prop_types_default.a.bool.isRequired,
      canCreateOrDeleteCustomEmoji: prop_types_default.a.bool.isRequired
    };
  }

  renderCustomEmoji() {
    if (!this.props.enableCustomEmoji || !this.props.canCreateOrDeleteCustomEmoji) {
      return null;
    }

    return react_default.a.createElement(backstage_category_BackstageCategory, {
      name: "emoji",
      parentLink: '/' + this.props.team.name,
      icon: "fa-smile-o",
      title: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "backstage_sidebar.emoji",
        defaultMessage: "Custom Emoji"
      })
    });
  }

  renderIntegrations() {
    let incomingWebhooks = null;

    if (this.props.enableIncomingWebhooks) {
      incomingWebhooks = react_default.a.createElement(team_permission_gate["a" /* default */], {
        permissions: [constants["Permissions"].MANAGE_INCOMING_WEBHOOKS],
        teamId: this.props.team.id
      }, react_default.a.createElement(backstage_section_BackstageSection, {
        name: "incoming_webhooks",
        parentLink: '/' + this.props.team.name + '/integrations',
        title: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "backstage_sidebar.integrations.incoming_webhooks",
          defaultMessage: "Incoming Webhooks"
        }),
        id: "incomingWebhooks"
      }));
    }

    let outgoingWebhooks = null;

    if (this.props.enableOutgoingWebhooks) {
      outgoingWebhooks = react_default.a.createElement(team_permission_gate["a" /* default */], {
        permissions: [constants["Permissions"].MANAGE_OUTGOING_WEBHOOKS],
        teamId: this.props.team.id
      }, react_default.a.createElement(backstage_section_BackstageSection, {
        name: "outgoing_webhooks",
        parentLink: '/' + this.props.team.name + '/integrations',
        title: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "backstage_sidebar.integrations.outgoing_webhooks",
          defaultMessage: "Outgoing Webhooks"
        }),
        id: "outgoingWebhooks"
      }));
    }

    let commands = null;

    if (this.props.enableCommands) {
      commands = react_default.a.createElement(team_permission_gate["a" /* default */], {
        permissions: [constants["Permissions"].MANAGE_SLASH_COMMANDS],
        teamId: this.props.team.id
      }, react_default.a.createElement(backstage_section_BackstageSection, {
        name: "commands",
        parentLink: '/' + this.props.team.name + '/integrations',
        title: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "backstage_sidebar.integrations.commands",
          defaultMessage: "Slash Commands"
        }),
        id: "slashCommands"
      }));
    }

    let oauthApps = null;

    if (this.props.enableOAuthServiceProvider) {
      oauthApps = react_default.a.createElement(system_permission_gate["a" /* default */], {
        permissions: [constants["Permissions"].MANAGE_OAUTH]
      }, react_default.a.createElement(backstage_section_BackstageSection, {
        name: "oauth2-apps",
        parentLink: '/' + this.props.team.name + '/integrations',
        title: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "backstage_sidebar.integrations.oauthApps",
          defaultMessage: "OAuth 2.0 Applications"
        }),
        id: "oauthApps"
      }));
    }

    const botAccounts = react_default.a.createElement(system_permission_gate["a" /* default */], {
      permissions: ['manage_bots']
    }, react_default.a.createElement(backstage_section_BackstageSection, {
      name: "bots",
      parentLink: '/' + this.props.team.name + '/integrations',
      title: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "backstage_sidebar.bots",
        defaultMessage: "Bot Accounts"
      }),
      id: "botAccounts"
    }));
    return react_default.a.createElement(team_permission_gate["a" /* default */], {
      permissions: [constants["Permissions"].MANAGE_INCOMING_WEBHOOKS, constants["Permissions"].MANAGE_OUTGOING_WEBHOOKS, constants["Permissions"].MANAGE_SLASH_COMMANDS, constants["Permissions"].MANAGE_OAUTH],
      teamId: this.props.team.id
    }, react_default.a.createElement(backstage_category_BackstageCategory, {
      name: "integrations",
      icon: "fa-link",
      parentLink: '/' + this.props.team.name,
      title: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "backstage_sidebar.integrations",
        defaultMessage: "Integrations"
      })
    }, incomingWebhooks, outgoingWebhooks, commands, oauthApps, botAccounts));
  }

  render() {
    return react_default.a.createElement("div", {
      className: "backstage-sidebar"
    }, react_default.a.createElement("ul", null, this.renderCustomEmoji(), this.renderIntegrations()));
  }

}
// EXTERNAL MODULE: ./components/icon/back_icon.jsx
var back_icon = __webpack_require__(1711);

// CONCATENATED MODULE: ./components/backstage/components/backstage_navbar.jsx
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





class backstage_navbar_BackstageNavbar extends react_default.a.Component {
  static get propTypes() {
    return {
      team: prop_types_default.a.object.isRequired,
      siteName: prop_types_default.a.string
    };
  }

  render() {
    if (!this.props.team) {
      return null;
    }

    return react_default.a.createElement("div", {
      className: "backstage-navbar"
    }, react_default.a.createElement(react_router_dom["a" /* Link */], {
      className: "backstage-navbar__back",
      to: `/${this.props.team.name}`
    }, react_default.a.createElement(back_icon["a" /* default */], null), react_default.a.createElement("span", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "backstage_navbar.backToMattermost",
      defaultMessage: "Back to {siteName}",
      values: {
        siteName: this.props.siteName
      }
    }))));
  }

}
// CONCATENATED MODULE: ./components/backstage/backstage_controller.jsx
function backstage_controller_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function backstage_controller_extends() { backstage_controller_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return backstage_controller_extends.apply(this, arguments); }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

























const BackstageRoute = ({
  component: Component,
  extraProps,
  ...rest
}) => //eslint-disable-line react/prop-types
react_default.a.createElement(react_router["b" /* Route */], backstage_controller_extends({}, rest, {
  render: props => react_default.a.createElement(Component, backstage_controller_extends({}, extraProps, props))
}));

class backstage_controller_BackstageController extends react_default.a.Component {
  constructor(...args) {
    super(...args);

    backstage_controller_defineProperty(this, "scrollToTop", () => {
      if (this.listRef) {
        this.listRef.scrollTop = 0;
      }
    });

    backstage_controller_defineProperty(this, "setListRef", ref => {
      this.listRef = ref;
    });
  }

  render() {
    if (this.props.team == null || this.props.user == null) {
      return react_default.a.createElement("div", null);
    }

    const extraProps = {
      team: this.props.team,
      user: this.props.user,
      scrollToTop: this.scrollToTop
    };
    return react_default.a.createElement("div", {
      className: "backstage"
    }, react_default.a.createElement(announcement_bar["a" /* default */], null), react_default.a.createElement(system_notice["a" /* default */], null), react_default.a.createElement(backstage_navbar_BackstageNavbar, {
      team: this.props.team,
      siteName: this.props.siteName
    }), react_default.a.createElement(pluggable["a" /* default */], {
      pluggableName: "Root"
    }), react_default.a.createElement("div", {
      className: "backstage-body",
      ref: this.setListRef
    }, react_default.a.createElement(backstage_sidebar_BackstageSidebar, {
      team: this.props.team,
      user: this.props.user,
      enableCustomEmoji: this.props.enableCustomEmoji,
      enableIncomingWebhooks: this.props.enableIncomingWebhooks,
      enableOutgoingWebhooks: this.props.enableOutgoingWebhooks,
      enableCommands: this.props.enableCommands,
      enableOAuthServiceProvider: this.props.enableOAuthServiceProvider,
      canCreateOrDeleteCustomEmoji: this.props.canCreateOrDeleteCustomEmoji
    }), react_default.a.createElement(react_router["d" /* Switch */], null, react_default.a.createElement(BackstageRoute, {
      extraProps: extraProps,
      exact: true,
      path: '/:team/integrations',
      component: integrations
    }), react_default.a.createElement(BackstageRoute, {
      extraProps: extraProps,
      exact: true,
      path: `${this.props.match.url}/incoming_webhooks`,
      component: installed_incoming_webhooks
    }), react_default.a.createElement(BackstageRoute, {
      extraProps: extraProps,
      path: `${this.props.match.url}/incoming_webhooks/add`,
      component: add_incoming_webhook
    }), react_default.a.createElement(BackstageRoute, {
      extraProps: extraProps,
      path: `${this.props.match.url}/incoming_webhooks/edit`,
      component: edit_incoming_webhook
    }), react_default.a.createElement(BackstageRoute, {
      extraProps: extraProps,
      exact: true,
      path: `${this.props.match.url}/outgoing_webhooks`,
      component: installed_outgoing_webhooks
    }), react_default.a.createElement(BackstageRoute, {
      extraProps: extraProps,
      path: `${this.props.match.url}/outgoing_webhooks/add`,
      component: add_outgoing_webhook
    }), react_default.a.createElement(BackstageRoute, {
      extraProps: extraProps,
      path: `${this.props.match.url}/outgoing_webhooks/edit`,
      component: edit_outgoing_webhook
    }), react_default.a.createElement(BackstageRoute, {
      extraProps: extraProps,
      path: `${this.props.match.url}/commands`,
      component: commands_container
    }), react_default.a.createElement(BackstageRoute, {
      extraProps: extraProps,
      exact: true,
      path: `${this.props.match.url}/oauth2-apps`,
      component: installed_oauth_apps
    }), react_default.a.createElement(BackstageRoute, {
      extraProps: extraProps,
      path: `${this.props.match.url}/oauth2-apps/add`,
      component: add_oauth_app
    }), react_default.a.createElement(BackstageRoute, {
      extraProps: extraProps,
      path: `${this.props.match.url}/oauth2-apps/edit`,
      component: edit_oauth_app
    }), react_default.a.createElement(BackstageRoute, {
      extraProps: extraProps,
      path: `${this.props.match.url}/confirm`,
      component: confirm_integration
    }), react_default.a.createElement(BackstageRoute, {
      extraProps: extraProps,
      exact: true,
      path: '/:team/emoji',
      component: components_emoji
    }), react_default.a.createElement(BackstageRoute, {
      extraProps: extraProps,
      path: `${this.props.match.url}/add`,
      component: add_emoji
    }), react_default.a.createElement(BackstageRoute, {
      extraProps: extraProps,
      path: `${this.props.match.url}/bots/add`,
      component: add_bot
    }), react_default.a.createElement(BackstageRoute, {
      extraProps: extraProps,
      path: `${this.props.match.url}/bots/edit`,
      component: add_bot
    }), react_default.a.createElement(BackstageRoute, {
      extraProps: extraProps,
      path: `${this.props.match.url}/bots`,
      component: integrations_bots
    }))));
  }

}

backstage_controller_defineProperty(backstage_controller_BackstageController, "propTypes", {
  /**
   * Current user.
   */
  user: prop_types_default.a.object,

  /**
   * Current team.
   */
  team: prop_types_default.a.object,

  /**
   * Object from react-router
   */
  match: prop_types_default.a.shape({
    url: prop_types_default.a.string.isRequired
  }).isRequired,
  siteName: prop_types_default.a.string,
  enableCustomEmoji: prop_types_default.a.bool.isRequired,
  enableIncomingWebhooks: prop_types_default.a.bool.isRequired,
  enableOutgoingWebhooks: prop_types_default.a.bool.isRequired,
  enableCommands: prop_types_default.a.bool.isRequired,
  enableOAuthServiceProvider: prop_types_default.a.bool.isRequired,
  canCreateOrDeleteCustomEmoji: prop_types_default.a.bool.isRequired
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4!./components/backstage/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.









function backstage_mapStateToProps(state) {
  const user = Object(users["getCurrentUser"])(state);
  const team = Object(entities_teams["getCurrentTeam"])(state);
  const config = Object(general["getConfig"])(state);
  const siteName = config.SiteName;
  const enableCustomEmoji = config.EnableCustomEmoji === 'true';
  const enableIncomingWebhooks = config.EnableIncomingWebhooks === 'true';
  const enableOutgoingWebhooks = config.EnableOutgoingWebhooks === 'true';
  const enableCommands = config.EnableCommands === 'true';
  const enableOAuthServiceProvider = config.EnableOAuthServiceProvider === 'true';
  let canCreateOrDeleteCustomEmoji = Object(entities_roles["haveISystemPermission"])(state, {
    permission: constants["Permissions"].CREATE_EMOJIS
  }) || Object(entities_roles["haveISystemPermission"])(state, {
    permission: constants["Permissions"].DELETE_EMOJIS
  });

  if (!canCreateOrDeleteCustomEmoji) {
    for (const t of Object(entities_teams["getMyTeams"])(state)) {
      if (Object(entities_roles["haveITeamPermission"])(state, {
        team: t.id,
        permission: constants["Permissions"].CREATE_EMOJIS
      }) || Object(entities_roles["haveITeamPermission"])(state, {
        team: t.id,
        permission: constants["Permissions"].DELETE_EMOJIS
      })) {
        canCreateOrDeleteCustomEmoji = true;
        break;
      }
    }
  }

  return {
    user,
    team,
    siteName,
    enableCustomEmoji,
    enableIncomingWebhooks,
    enableOutgoingWebhooks,
    enableCommands,
    enableOAuthServiceProvider,
    canCreateOrDeleteCustomEmoji
  };
}

/* harmony default export */ var backstage = __webpack_exports__["default"] = (Object(react_router["f" /* withRouter */])(Object(es["connect"])(backstage_mapStateToProps)(backstage_controller_BackstageController)));

/***/ })

}]);
//# sourceMappingURL=8.59d06e5e538582a6a9a5.js.map
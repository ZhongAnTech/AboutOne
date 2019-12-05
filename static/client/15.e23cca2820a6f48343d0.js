(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

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

/***/ 1682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteNameAndDescription; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.



class SiteNameAndDescription extends react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent {
  render() {
    const {
      customDescriptionText,
      siteName
    } = this.props;
    let description = null;

    if (customDescriptionText) {
      description = customDescriptionText;
    } else {
      description = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__[/* FormattedMessage */ "c"], {
        id: "web.root.signup_info",
        defaultMessage: "All team communication in one place, searchable and accessible anywhere"
      });
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      id: "site_name"
    }, "Aboutone"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
      id: "site_description",
      className: "color--light"
    }, description));
  }

}

_defineProperty(SiteNameAndDescription, "propTypes", {
  customDescriptionText: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  siteName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
});

_defineProperty(SiteNameAndDescription, "defaultProps", {
  siteName: 'Aboutone'
});

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

/***/ 3448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 15 modules
var es = __webpack_require__(405);

// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(433);

// EXTERNAL MODULE: ./mattermost-redux/actions/teams.js
var teams = __webpack_require__(299);

// EXTERNAL MODULE: ./mattermost-redux/actions/roles.js
var roles = __webpack_require__(245);

// EXTERNAL MODULE: ./mattermost-redux/selectors/entities/general.js
var general = __webpack_require__(26);

// EXTERNAL MODULE: ./mattermost-redux/constants/index.js
var constants = __webpack_require__(17);

// EXTERNAL MODULE: ./mattermost-redux/selectors/entities/roles.js
var entities_roles = __webpack_require__(90);

// EXTERNAL MODULE: ./mattermost-redux/selectors/entities/teams.js
var entities_teams = __webpack_require__(32);

// EXTERNAL MODULE: ./mattermost-redux/selectors/entities/users.js
var users = __webpack_require__(10);

// EXTERNAL MODULE: ./actions/team_actions.jsx
var team_actions = __webpack_require__(1639);

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

// EXTERNAL MODULE: ./actions/global_actions.jsx
var global_actions = __webpack_require__(1567);

// EXTERNAL MODULE: ./utils/user_agent.jsx
var user_agent = __webpack_require__(39);

// EXTERNAL MODULE: ./utils/constants.jsx
var utils_constants = __webpack_require__(0);

// EXTERNAL MODULE: ./images/logo.png
var logo = __webpack_require__(1592);
var logo_default = /*#__PURE__*/__webpack_require__.n(logo);

// EXTERNAL MODULE: ./components/announcement_bar/index.js + 9 modules
var announcement_bar = __webpack_require__(1664);

// EXTERNAL MODULE: ./components/common/back_button.jsx
var back_button = __webpack_require__(1587);

// EXTERNAL MODULE: ./components/loading_screen.jsx
var loading_screen = __webpack_require__(1569);

// EXTERNAL MODULE: ./components/permissions_gates/system_permission_gate/index.js + 1 modules
var system_permission_gate = __webpack_require__(1686);

// EXTERNAL MODULE: ./components/common/site_name_and_description.jsx
var site_name_and_description = __webpack_require__(1682);

// EXTERNAL MODULE: ./components/icon/logout_icon.jsx
var logout_icon = __webpack_require__(1753);

// EXTERNAL MODULE: ./components/formatted_markdown_message.jsx
var formatted_markdown_message = __webpack_require__(1564);

// EXTERNAL MODULE: ./node_modules/react-bootstrap/es/Tooltip.js
var Tooltip = __webpack_require__(1998);

// EXTERNAL MODULE: ./node_modules/react-bootstrap/es/OverlayTrigger.js
var OverlayTrigger = __webpack_require__(1995);

// CONCATENATED MODULE: ./components/svg/team_info_icon.jsx
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.


class team_info_icon_TeamInfoIcon extends react_default.a.PureComponent {
  render() {
    return react_default.a.createElement("span", this.props, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "generic_icons.info",
      defaultMessage: "Info Icon"
    }, ariaLabel => react_default.a.createElement("svg", {
      width: "100%",
      height: "100%",
      viewBox: "0 0 20 20",
      style: style,
      role: "icon",
      "aria-label": ariaLabel
    }, react_default.a.createElement("g", {
      transform: "matrix(1.17647,0,0,1.17647,-1.55431e-15,-1.00573e-14)"
    }, react_default.a.createElement("path", {
      d: "M8.5,0C3.797,0 0,3.797 0,8.5C0,13.203 3.797,17 8.5,17C13.203,17 17,13.203 17,8.5C17,3.797 13.203,0 8.5,0ZM10,8.5C10,7.672 9.328,7 8.5,7C7.672,7 7,7.672 7,8.5L7,12.45C7,13.278 7.672,13.95 8.5,13.95C9.328,13.95 10,13.278 10,12.45L10,8.5ZM8.5,3C9.328,3 10,3.672 10,4.5C10,5.328 9.328,6 8.5,6C7.672,6 7,5.328 7,4.5C7,3.672 7.672,3 8.5,3Z"
    })))));
  }

}
const style = {
  fillRule: 'evenodd',
  clipRule: 'evenodd',
  strokeLinejoin: 'round',
  strokeMiterlimit: 1.41421
};
// EXTERNAL MODULE: ./utils/utils.jsx + 1 modules
var utils = __webpack_require__(22);

// CONCATENATED MODULE: ./components/select_team/components/select_team_item.jsx
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






class select_team_item_SelectTeamItem extends react_default.a.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleTeamClick", e => {
      e.preventDefault();
      this.props.onTeamClick(this.props.team);
    });

    _defineProperty(this, "renderDescriptionTooltip", () => {
      const team = this.props.team;

      if (!team.description) {
        return null;
      }

      const descriptionTooltip = react_default.a.createElement(Tooltip["a" /* default */], {
        id: "team-description__tooltip"
      }, team.description);
      return react_default.a.createElement(OverlayTrigger["a" /* default */], {
        trigger: ['hover', 'focus', 'click'],
        delayShow: 1000,
        placement: "top",
        overlay: descriptionTooltip,
        ref: "descriptionOverlay",
        rootClose: true,
        container: this
      }, react_default.a.createElement(team_info_icon_TeamInfoIcon, {
        className: "icon icon--info"
      }));
    });
  }

  render() {
    const {
      formatMessage
    } = this.context.intl;
    const {
      canJoinPublicTeams,
      canJoinPrivateTeams,
      loading,
      team
    } = this.props;
    let icon;

    if (loading) {
      icon = react_default.a.createElement("span", {
        className: "fa fa-refresh fa-spin right signup-team__icon",
        title: formatMessage({
          id: 'generic_icons.loading',
          defaultMessage: 'Loading Icon'
        })
      });
    } else {
      icon = react_default.a.createElement("span", {
        className: "fa fa-angle-right right signup-team__icon",
        title: formatMessage({
          id: 'select_team.join.icon',
          defaultMessage: 'Join Team Icon'
        })
      });
    }

    const canJoin = team.allow_open_invite && canJoinPublicTeams || !team.allow_open_invite && canJoinPrivateTeams;
    return react_default.a.createElement("div", {
      className: "signup-team-dir"
    }, this.renderDescriptionTooltip(), react_default.a.createElement("a", {
      href: "#",
      id: utils["h" /* createSafeId */](team.display_name),
      onClick: canJoin ? this.handleTeamClick : null,
      className: canJoin ? '' : 'disabled'
    }, react_default.a.createElement("span", {
      className: "signup-team-dir__name"
    }, team.display_name), !team.allow_open_invite && react_default.a.createElement("span", {
      className: "fa fa-lock light",
      title: formatMessage({
        id: 'select_team.private.icon',
        defaultMessage: 'Private team'
      })
    }), canJoin && icon));
  }

}

_defineProperty(select_team_item_SelectTeamItem, "propTypes", {
  team: prop_types_default.a.object.isRequired,
  onTeamClick: prop_types_default.a.func.isRequired,
  loading: prop_types_default.a.bool.isRequired,
  canJoinPublicTeams: prop_types_default.a.bool.isRequired,
  canJoinPrivateTeams: prop_types_default.a.bool.isRequired
});

_defineProperty(select_team_item_SelectTeamItem, "contextTypes", {
  intl: index_es["i" /* intlShape */].isRequired
});
// CONCATENATED MODULE: ./components/select_team/select_team.jsx
function select_team_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

















const TEAMS_PER_PAGE = 200;
const TEAM_MEMBERSHIP_DENIAL_ERROR_ID = 'api.team.add_members.user_denied';
class select_team_SelectTeam extends react_default.a.Component {
  constructor(props) {
    super(props);

    select_team_defineProperty(this, "handleTeamClick", async team => {
      const {
        siteURL,
        currentUserRoles
      } = this.props;
      this.setState({
        loadingTeamId: team.id
      });
      const {
        data,
        error
      } = await this.props.actions.addUserToTeam(team.id, this.props.currentUserId);

      if (data) {
        this.props.history.push(`/${team.name}/channels/${utils_constants["N" /* default */].DEFAULT_CHANNEL}`);
      } else if (error) {
        let errorMsg = error.message;

        if (error.server_error_id === TEAM_MEMBERSHIP_DENIAL_ERROR_ID) {
          if (currentUserRoles.includes(utils_constants["N" /* default */].PERMISSIONS_SYSTEM_ADMIN)) {
            errorMsg = react_default.a.createElement(formatted_markdown_message["b" /* default */], {
              id: "join_team_group_constrained_denied_admin",
              defaultMessage: `You need to be a member of a linked group to join this team. You can add a group to this team [here](${siteURL}/admin_console/user_management/groups).`,
              values: {
                siteURL
              }
            });
          } else {
            errorMsg = react_default.a.createElement(formatted_markdown_message["b" /* default */], {
              id: "join_team_group_constrained_denied",
              defaultMessage: "You need to be a member of a linked group to join this team."
            });
          }
        }

        this.setState({
          error: errorMsg,
          loadingTeamId: ''
        });
      }
    });

    select_team_defineProperty(this, "handleLogoutClick", e => {
      e.preventDefault();
      Object(global_actions["e" /* emitUserLoggedOutEvent */])('/login');
    });

    select_team_defineProperty(this, "clearError", e => {
      e.preventDefault();
      this.setState({
        error: null
      });
    });

    this.state = {
      loadingTeamId: '',
      error: null
    };
  }

  componentDidMount() {
    this.props.actions.getTeams(0, TEAMS_PER_PAGE);
  }

  UNSAFE_componentWillMount() {
    // eslint-disable-line camelcase
    const {
      actions,
      currentUserRoles
    } = this.props;
    actions.loadRolesIfNeeded(currentUserRoles.split(' '));
  }

  render() {
    const {
      canManageSystem,
      customDescriptionText,
      isMemberOfTeam,
      listableTeams,
      siteName,
      canCreateTeams,
      canJoinPublicTeams,
      canJoinPrivateTeams
    } = this.props;
    let openContent;

    if (this.state.loadingTeamId) {
      openContent = react_default.a.createElement(loading_screen["a" /* default */], null);
    } else if (this.state.error) {
      openContent = react_default.a.createElement("div", {
        className: "signup__content"
      }, react_default.a.createElement("div", {
        className: 'form-group has-error'
      }, react_default.a.createElement("label", {
        className: "control-label"
      }, this.state.error)));
    } else {
      let joinableTeamContents = [];
      listableTeams.forEach(listableTeam => {
        if (listableTeam.allow_open_invite && canJoinPublicTeams || !listableTeam.allow_open_invite && canJoinPrivateTeams) {
          joinableTeamContents.push(react_default.a.createElement(select_team_item_SelectTeamItem, {
            key: 'team_' + listableTeam.name,
            team: listableTeam,
            onTeamClick: this.handleTeamClick,
            loading: this.state.loadingTeamId === listableTeam.id,
            canJoinPublicTeams: canJoinPublicTeams,
            canJoinPrivateTeams: canJoinPrivateTeams
          }));
        }
      });

      if (joinableTeamContents.length === 0 && (canCreateTeams || canManageSystem)) {
        joinableTeamContents = react_default.a.createElement("div", {
          className: "signup-team-dir-err"
        }, react_default.a.createElement("div", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "signup_team.no_open_teams_canCreate",
          defaultMessage: "No teams are available to join. Please create a new team or ask your administrator for an invite."
        })));
      } else if (joinableTeamContents.length === 0) {
        joinableTeamContents = react_default.a.createElement("div", {
          className: "signup-team-dir-err"
        }, react_default.a.createElement("div", null, react_default.a.createElement(system_permission_gate["a" /* default */], {
          permissions: [constants["Permissions"].CREATE_TEAM]
        }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "signup_team.no_open_teams_canCreate",
          defaultMessage: "No teams are available to join. Please create a new team or ask your administrator for an invite."
        })), react_default.a.createElement(system_permission_gate["a" /* default */], {
          permissions: [constants["Permissions"].CREATE_TEAM],
          invert: true
        }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "signup_team.no_open_teams",
          defaultMessage: "No teams are available to join. Please ask your administrator for an invite."
        }))));
      }

      openContent = react_default.a.createElement("div", {
        id: "teamsYouCanJoinContent",
        className: "signup__content"
      }, react_default.a.createElement("h4", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "signup_team.join_open",
        defaultMessage: "Teams you can join: "
      })), react_default.a.createElement("div", {
        className: "signup-team-all"
      }, joinableTeamContents));
    }

    const teamSignUp = react_default.a.createElement(system_permission_gate["a" /* default */], {
      permissions: [constants["Permissions"].CREATE_TEAM]
    }, react_default.a.createElement("div", {
      className: "margin--extra"
    }, react_default.a.createElement(react_router_dom["a" /* Link */], {
      id: "createNewTeamLink",
      to: "/create_team",
      className: "signup-team-login"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "login.createTeam",
      defaultMessage: "Create a new team"
    }))));
    let adminConsoleLink;

    if (!user_agent["n" /* isMobileApp */]()) {
      adminConsoleLink = react_default.a.createElement(system_permission_gate["a" /* default */], {
        permissions: [constants["Permissions"].MANAGE_SYSTEM]
      }, react_default.a.createElement("div", {
        className: "margin--extra hidden-xs"
      }, react_default.a.createElement(react_router_dom["a" /* Link */], {
        to: "/admin_console",
        className: "signup-team-login"
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "signup_team_system_console",
        defaultMessage: "Go to System Console"
      }))));
    }

    let headerButton;

    if (this.state.error) {
      headerButton = react_default.a.createElement(back_button["a" /* default */], {
        onClick: this.clearError
      });
    } else if (isMemberOfTeam) {
      headerButton = react_default.a.createElement(back_button["a" /* default */], null);
    } else {
      headerButton = react_default.a.createElement("div", {
        className: "signup-header"
      }, react_default.a.createElement("a", {
        href: "#",
        id: "logout",
        onClick: this.handleLogoutClick
      }, react_default.a.createElement(logout_icon["a" /* default */], null), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "web.header.logout",
        defaultMessage: "Logout"
      })));
    }

    return react_default.a.createElement("div", null, react_default.a.createElement(announcement_bar["a" /* default */], null), headerButton, react_default.a.createElement("div", {
      className: "col-sm-12"
    }, react_default.a.createElement("div", {
      className: 'signup-team__container'
    }, react_default.a.createElement("img", {
      alt: 'signup team logo',
      className: "signup-team-logo",
      src: logo_default.a
    }), react_default.a.createElement(site_name_and_description["a" /* default */], {
      customDescriptionText: customDescriptionText,
      siteName: siteName
    }), openContent, teamSignUp, adminConsoleLink)));
  }

}

select_team_defineProperty(select_team_SelectTeam, "propTypes", {
  currentUserId: prop_types_default.a.string.isRequired,
  currentUserRoles: prop_types_default.a.string,
  customDescriptionText: prop_types_default.a.string,
  isMemberOfTeam: prop_types_default.a.bool.isRequired,
  listableTeams: prop_types_default.a.array,
  siteName: prop_types_default.a.string,
  canCreateTeams: prop_types_default.a.bool.isRequired,
  canManageSystem: prop_types_default.a.bool.isRequired,
  canJoinPublicTeams: prop_types_default.a.bool.isRequired,
  canJoinPrivateTeams: prop_types_default.a.bool.isRequired,
  history: prop_types_default.a.object,
  siteURL: prop_types_default.a.string,
  actions: prop_types_default.a.shape({
    getTeams: prop_types_default.a.func.isRequired,
    loadRolesIfNeeded: prop_types_default.a.func.isRequired,
    addUserToTeam: prop_types_default.a.func.isRequired
  }).isRequired
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4!./components/select_team/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.













function mapStateToProps(state) {
  const config = Object(general["getConfig"])(state);
  const currentUser = Object(users["getCurrentUser"])(state);
  const myTeamMemberships = Object.values(Object(entities_teams["getTeamMemberships"])(state));
  return {
    currentUserId: currentUser.id,
    currentUserRoles: currentUser.roles || '',
    customDescriptionText: config.CustomDescriptionText,
    isMemberOfTeam: myTeamMemberships && myTeamMemberships.length > 0,
    listableTeams: Object(entities_teams["getSortedListableTeams"])(state, currentUser.locale),
    siteName: config.SiteName,
    canCreateTeams: Object(entities_roles["haveISystemPermission"])(state, {
      permission: constants["Permissions"].CREATE_TEAM
    }),
    canManageSystem: Object(entities_roles["haveISystemPermission"])(state, {
      permission: constants["Permissions"].MANAGE_SYSTEM
    }),
    canJoinPublicTeams: Object(entities_roles["haveISystemPermission"])(state, {
      permission: constants["Permissions"].JOIN_PUBLIC_TEAMS
    }),
    canJoinPrivateTeams: Object(entities_roles["haveISystemPermission"])(state, {
      permission: constants["Permissions"].JOIN_PRIVATE_TEAMS
    }),
    siteURL: config.SiteURL
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux["bindActionCreators"])({
      getTeams: teams["getTeams"],
      loadRolesIfNeeded: roles["loadRolesIfNeeded"],
      addUserToTeam: team_actions["a" /* addUserToTeam */]
    }, dispatch)
  };
}

/* harmony default export */ var select_team = __webpack_exports__["default"] = (Object(react_router["f" /* withRouter */])(Object(es["connect"])(mapStateToProps, mapDispatchToProps)(select_team_SelectTeam)));

/***/ })

}]);
//# sourceMappingURL=15.e23cca2820a6f48343d0.js.map
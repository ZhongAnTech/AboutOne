(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

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

/***/ 3442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 15 modules
var es = __webpack_require__(405);

// EXTERNAL MODULE: ./mattermost-redux/selectors/entities/general.js
var general = __webpack_require__(26);

// EXTERNAL MODULE: ./mattermost-redux/selectors/entities/channels.js
var channels = __webpack_require__(15);

// EXTERNAL MODULE: ./mattermost-redux/selectors/entities/teams.js
var teams = __webpack_require__(32);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(6);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(1);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(433);

// EXTERNAL MODULE: ./components/announcement_bar/index.js + 9 modules
var announcement_bar = __webpack_require__(1664);

// EXTERNAL MODULE: ./components/common/back_button.jsx
var back_button = __webpack_require__(1587);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(33);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.es.js + 1 modules
var index_es = __webpack_require__(52);

// EXTERNAL MODULE: ./actions/diagnostics_actions.jsx
var diagnostics_actions = __webpack_require__(300);

// EXTERNAL MODULE: ./utils/constants.jsx
var constants = __webpack_require__(0);

// EXTERNAL MODULE: ./utils/url.jsx + 1 modules
var utils_url = __webpack_require__(298);

// EXTERNAL MODULE: ./images/logo.png
var logo = __webpack_require__(1592);
var logo_default = /*#__PURE__*/__webpack_require__.n(logo);

// EXTERNAL MODULE: ./components/icon/next_icon.jsx
var next_icon = __webpack_require__(1644);

// CONCATENATED MODULE: ./components/create_team/components/display_name.jsx
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.









class display_name_TeamSignupDisplayNamePage extends react_default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "submitNext", e => {
      e.preventDefault();
      var displayName = react_dom_default.a.findDOMNode(this.refs.name).value.trim();

      if (!displayName) {
        this.setState({
          nameError: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "create_team.display_name.required",
            defaultMessage: "This field is required"
          })
        });
        return;
      } else if (displayName.length < constants["N" /* default */].MIN_TEAMNAME_LENGTH || displayName.length > constants["N" /* default */].MAX_TEAMNAME_LENGTH) {
        this.setState({
          nameError: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "create_team.display_name.charLength",
            defaultMessage: "Name must be {min} or more characters up to a maximum of {max}. You can add a longer team description later.",
            values: {
              min: constants["N" /* default */].MIN_TEAMNAME_LENGTH,
              max: constants["N" /* default */].MAX_TEAMNAME_LENGTH
            }
          })
        });
        return;
      }

      const newState = this.props.state;
      newState.wizard = 'team_url';
      newState.team.display_name = displayName;
      newState.team.name = Object(utils_url["a" /* cleanUpUrlable */])(displayName);
      this.props.updateParent(newState);
    });

    _defineProperty(this, "handleFocus", e => {
      e.preventDefault();
      e.currentTarget.select();
    });

    this.state = {};
  }

  componentDidMount() {
    Object(diagnostics_actions["d" /* trackEvent */])('signup', 'signup_team_01_name');
  }

  render() {
    var nameError = null;
    var nameDivClass = 'form-group';

    if (this.state.nameError) {
      nameError = react_default.a.createElement("label", {
        className: "control-label"
      }, this.state.nameError);
      nameDivClass += ' has-error';
    }

    return react_default.a.createElement("div", null, react_default.a.createElement("form", null, react_default.a.createElement("h2", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "create_team.display_name.teamName",
      defaultMessage: "Team Name"
    })), react_default.a.createElement("div", {
      className: nameDivClass
    }, react_default.a.createElement("div", {
      className: "row"
    }, react_default.a.createElement("div", {
      className: "col-sm-9"
    }, react_default.a.createElement("input", {
      id: "teamNameInput",
      type: "text",
      ref: "name",
      className: "form-control",
      placeholder: "",
      maxLength: "128",
      defaultValue: this.props.state.team.display_name,
      autoFocus: true,
      onFocus: this.handleFocus,
      spellCheck: "false"
    }))), nameError), react_default.a.createElement("div", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "create_team.display_name.nameHelp",
      defaultMessage: "Name your team in any language. Your team name shows in menus and headings."
    })), react_default.a.createElement("button", {
      id: "teamNameNextButton",
      type: "submit",
      className: "btn btn-primary margin--extra",
      onClick: this.submitNext
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "create_team.display_name.next",
      defaultMessage: "Next"
    }), react_default.a.createElement(next_icon["a" /* default */], null))));
  }

}

_defineProperty(display_name_TeamSignupDisplayNamePage, "propTypes", {
  /*
   * Object containing team's display_name and name
   */
  state: prop_types_default.a.object,

  /*
   * Function that updates parent component with state props
   */
  updateParent: prop_types_default.a.func
});
// EXTERNAL MODULE: ./components/common/site_name_and_description.jsx
var site_name_and_description = __webpack_require__(1682);

// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(16);

// EXTERNAL MODULE: ./mattermost-redux/actions/teams.js
var actions_teams = __webpack_require__(299);

// EXTERNAL MODULE: ./node_modules/react-bootstrap/es/Tooltip.js
var Tooltip = __webpack_require__(1998);

// EXTERNAL MODULE: ./node_modules/react-bootstrap/es/OverlayTrigger.js
var OverlayTrigger = __webpack_require__(1995);

// EXTERNAL MODULE: ./node_modules/react-bootstrap/es/Button.js
var Button = __webpack_require__(1693);

// EXTERNAL MODULE: ./components/formatted_markdown_message.jsx
var formatted_markdown_message = __webpack_require__(1564);

// CONCATENATED MODULE: ./components/create_team/components/team_url/team_url.jsx
function team_url_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.










class team_url_TeamUrl extends react_default.a.PureComponent {
  constructor(props) {
    super(props);

    team_url_defineProperty(this, "submitBack", e => {
      e.preventDefault();
      const newState = this.props.state;
      newState.wizard = 'display_name';
      this.props.updateParent(newState);
    });

    team_url_defineProperty(this, "submitNext", async e => {
      e.preventDefault();
      const name = react_dom_default.a.findDOMNode(this.refs.name).value.trim();
      const cleanedName = utils_url["a" /* cleanUpUrlable */](name);
      const urlRegex = /^[a-z]+([a-z\-0-9]+|(__)?)[a-z0-9]+$/g;
      const {
        actions: {
          checkIfTeamExists,
          createTeam
        }
      } = this.props;

      if (!name) {
        this.setState({
          nameError: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "create_team.team_url.required",
            defaultMessage: "This field is required"
          })
        });
        return;
      }

      if (cleanedName.length < constants["N" /* default */].MIN_TEAMNAME_LENGTH || cleanedName.length > constants["N" /* default */].MAX_TEAMNAME_LENGTH) {
        this.setState({
          nameError: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "create_team.team_url.charLength",
            defaultMessage: "Name must be {min} or more characters up to a maximum of {max}",
            values: {
              min: constants["N" /* default */].MIN_TEAMNAME_LENGTH,
              max: constants["N" /* default */].MAX_TEAMNAME_LENGTH
            }
          })
        });
        return;
      }

      if (cleanedName !== name || !urlRegex.test(name)) {
        this.setState({
          nameError: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "create_team.team_url.regex",
            defaultMessage: "Use only lower case letters, numbers and dashes. Must start with a letter and can't end in a dash."
          })
        });
        return;
      }

      for (let index = 0; index < constants["N" /* default */].RESERVED_TEAM_NAMES.length; index++) {
        if (cleanedName.indexOf(constants["N" /* default */].RESERVED_TEAM_NAMES[index]) === 0) {
          this.setState({
            nameError: react_default.a.createElement(formatted_markdown_message["b" /* default */], {
              id: "create_team.team_url.taken",
              defaultMessage: "This URL [starts with a reserved word](!https://docs.mattermost.com/help/getting-started/creating-teams.html#team-url) or is unavailable. Please try another."
            })
          });
          return;
        }
      }

      this.setState({
        isLoading: true
      });
      var teamSignup = JSON.parse(JSON.stringify(this.props.state));
      teamSignup.team.type = 'O';
      teamSignup.team.name = name;
      const {
        exists
      } = await checkIfTeamExists(name);

      if (exists) {
        this.setState({
          nameError: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "create_team.team_url.unavailable",
            defaultMessage: "This URL is taken or unavailable. Please try another."
          })
        });
        this.setState({
          isLoading: false
        });
        return;
      }

      const {
        data,
        error
      } = await createTeam(teamSignup.team);

      if (data) {
        this.props.history.push('/' + data.name + '/channels/' + constants["N" /* default */].DEFAULT_CHANNEL);
        Object(diagnostics_actions["d" /* trackEvent */])('signup', 'signup_team_03_complete');
      } else if (error) {
        this.setState({
          nameError: error.message
        });
        this.setState({
          isLoading: false
        });
      }
    });

    team_url_defineProperty(this, "handleFocus", e => {
      e.preventDefault();
      e.currentTarget.select();
    });

    this.state = {
      nameError: '',
      isLoading: false
    };
  }

  componentDidMount() {
    Object(diagnostics_actions["d" /* trackEvent */])('signup', 'signup_team_02_url');
  }

  render() {
    let nameError = null;
    let nameDivClass = 'form-group';

    if (this.state.nameError) {
      nameError = react_default.a.createElement("label", {
        className: "control-label"
      }, this.state.nameError);
      nameDivClass += ' has-error';
    }

    const title = `${utils_url["e" /* getSiteURL */]()}/`;
    const urlTooltip = react_default.a.createElement(Tooltip["a" /* default */], {
      id: "urlTooltip"
    }, title);
    let finishMessage = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "create_team.team_url.finish",
      defaultMessage: "Finish"
    });

    if (this.state.isLoading) {
      finishMessage = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "create_team.team_url.creatingTeam",
        defaultMessage: "Creating team..."
      });
    }

    return react_default.a.createElement("div", null, react_default.a.createElement("form", null, react_default.a.createElement("img", {
      alt: 'signup team logo',
      className: "signup-team-logo",
      src: logo_default.a
    }), react_default.a.createElement("h2", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "create_team.team_url.teamUrl",
      defaultMessage: "Team URL"
    })), react_default.a.createElement("div", {
      className: nameDivClass
    }, react_default.a.createElement("div", {
      className: "row"
    }, react_default.a.createElement("div", {
      className: "col-sm-11"
    }, react_default.a.createElement("div", {
      className: "input-group input-group--limit"
    }, react_default.a.createElement(OverlayTrigger["a" /* default */], {
      trigger: ['hover', 'focus'],
      delayShow: constants["N" /* default */].OVERLAY_TIME_DELAY,
      placement: "top",
      overlay: urlTooltip
    }, react_default.a.createElement("span", {
      className: "input-group-addon"
    }, title)), react_default.a.createElement("input", {
      id: "teamURLInput",
      type: "text",
      ref: "name",
      className: "form-control",
      placeholder: "",
      maxLength: "128",
      defaultValue: this.props.state.team.name,
      autoFocus: true,
      onFocus: this.handleFocus,
      spellCheck: "false"
    })))), nameError), react_default.a.createElement("p", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "create_team.team_url.webAddress",
      defaultMessage: "Choose the web address of your new team:"
    })), react_default.a.createElement("ul", {
      className: "color--light"
    }, react_default.a.createElement("li", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "create_team.team_url.hint1",
      defaultMessage: "Short and memorable is best"
    })), react_default.a.createElement("li", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "create_team.team_url.hint2",
      defaultMessage: "Use lowercase letters, numbers and dashes"
    })), react_default.a.createElement("li", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "create_team.team_url.hint3",
      defaultMessage: "Must start with a letter and can't end in a dash"
    }))), react_default.a.createElement("div", {
      className: "margin--extra"
    }, react_default.a.createElement(Button["a" /* default */], {
      id: "teamURLFinishButton",
      type: "submit",
      bsStyle: "primary",
      disabled: this.state.isLoading,
      onClick: this.submitNext
    }, finishMessage)), react_default.a.createElement("div", {
      className: "margin--extra"
    }, react_default.a.createElement("a", {
      href: "#",
      onClick: this.submitBack
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "create_team.team_url.back",
      defaultMessage: "Back to previous step"
    })))));
  }

}

team_url_defineProperty(team_url_TeamUrl, "propTypes", {
  /*
   * Object containing team's display_name and name
   */
  state: prop_types_default.a.object,

  /*
   * Function that updates parent component with state props
   */
  updateParent: prop_types_default.a.func,

  /*
   * Object with redux action creators
   */
  actions: prop_types_default.a.shape({
    /*
     * Action creator to check if a team already exists
     */
    checkIfTeamExists: prop_types_default.a.func.isRequired,

    /*
     * Action creator to create a new team
     */
    createTeam: prop_types_default.a.func.isRequired
  }).isRequired
});
// CONCATENATED MODULE: ./components/create_team/components/team_url/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux["bindActionCreators"])({
      checkIfTeamExists: actions_teams["checkIfTeamExists"],
      createTeam: actions_teams["createTeam"]
    }, dispatch)
  };
}

/* harmony default export */ var team_url = (Object(es["connect"])(null, mapDispatchToProps)(team_url_TeamUrl));
// CONCATENATED MODULE: ./components/create_team/create_team.jsx
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function create_team_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.








class create_team_CreateTeam extends react_default.a.PureComponent {
  constructor(props) {
    super(props);

    create_team_defineProperty(this, "updateParent", state => {
      this.setState(state);
      this.props.history.push('/create_team/' + state.wizard);
    });

    const _state = {};
    _state.team = {};
    _state.wizard = 'display_name';
    this.state = _state;
  }

  render() {
    const {
      currentChannel,
      currentTeam,
      customDescriptionText,
      match,
      siteName
    } = this.props;
    let url = '/select_team';

    if (currentTeam) {
      url = `/${currentTeam.name}`;

      if (currentChannel) {
        url += `/channels/${currentChannel.name}`;
      }
    }

    return react_default.a.createElement("div", null, react_default.a.createElement(announcement_bar["a" /* default */], null), react_default.a.createElement(back_button["a" /* default */], {
      url: url
    }), react_default.a.createElement("div", {
      className: "col-sm-12"
    }, react_default.a.createElement("div", {
      className: "signup-team__container"
    }, react_default.a.createElement(site_name_and_description["a" /* default */], {
      customDescriptionText: customDescriptionText,
      siteName: siteName
    }), react_default.a.createElement("div", {
      className: "signup__content"
    }, react_default.a.createElement(react_router["d" /* Switch */], null, react_default.a.createElement(react_router["b" /* Route */], {
      path: `${this.props.match.url}/display_name`,
      render: props => react_default.a.createElement(display_name_TeamSignupDisplayNamePage, _extends({
        state: this.state,
        updateParent: this.updateParent
      }, props))
    }), react_default.a.createElement(react_router["b" /* Route */], {
      path: `${this.props.match.url}/team_url`,
      render: props => react_default.a.createElement(team_url, _extends({
        state: this.state,
        updateParent: this.updateParent
      }, props))
    }), react_default.a.createElement(react_router["a" /* Redirect */], {
      to: `${match.url}/display_name`
    }))))));
  }

}

create_team_defineProperty(create_team_CreateTeam, "propTypes", {
  /*
   * Object containing information on the current team, used to define BackButton's url
   */
  currentTeam: prop_types_default.a.object,

  /*
   * Object containing information on the current selected channel, used to define BackButton's url
   */
  currentChannel: prop_types_default.a.object,

  /*
   * String containing the custom branding's text
   */
  customDescriptionText: prop_types_default.a.string,

  /*
   * String containing the custom branding's Site Name
   */
  siteName: prop_types_default.a.string,

  /*
   * Object from react-router
   */
  match: prop_types_default.a.shape({
    url: prop_types_default.a.string.isRequired
  }).isRequired
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4!./components/create_team/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






function mapStateToProps(state) {
  const config = Object(general["getConfig"])(state);
  const currentChannel = Object(channels["getCurrentChannel"])(state);
  const currentTeam = Object(teams["getCurrentTeam"])(state);
  const customDescriptionText = config.CustomDescriptionText;
  const siteName = config.SiteName;
  return {
    currentChannel,
    currentTeam,
    customDescriptionText,
    siteName
  };
}

/* harmony default export */ var create_team = __webpack_exports__["default"] = (Object(es["connect"])(mapStateToProps)(create_team_CreateTeam));

/***/ })

}]);
//# sourceMappingURL=14.d6aa3b5382055db3642a.js.map
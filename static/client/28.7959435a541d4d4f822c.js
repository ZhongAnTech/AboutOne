(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ 3335:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEmailInterval = getEmailInterval;

var _constants = __webpack_require__(17); // Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
// @flow


function getEmailInterval(enableEmailNotification
/*: boolean*/
, enableEmailBatching
/*: number*/
, emailIntervalPreference
/*: number*/
)
/*: number*/
{
  var INTERVAL_NEVER = _constants.Preferences.INTERVAL_NEVER,
      INTERVAL_IMMEDIATE = _constants.Preferences.INTERVAL_IMMEDIATE,
      INTERVAL_FIFTEEN_MINUTES = _constants.Preferences.INTERVAL_FIFTEEN_MINUTES,
      INTERVAL_HOUR = _constants.Preferences.INTERVAL_HOUR;
  var validValuesWithEmailBatching = [INTERVAL_IMMEDIATE, INTERVAL_NEVER, INTERVAL_FIFTEEN_MINUTES, INTERVAL_HOUR];
  var validValuesWithoutEmailBatching = [INTERVAL_IMMEDIATE, INTERVAL_NEVER];

  if (!enableEmailNotification) {
    return INTERVAL_NEVER;
  } else if (enableEmailBatching && validValuesWithEmailBatching.indexOf(emailIntervalPreference) === -1) {
    // When email batching is enabled, the default interval is 15 minutes
    return INTERVAL_FIFTEEN_MINUTES;
  } else if (!enableEmailBatching && validValuesWithoutEmailBatching.indexOf(emailIntervalPreference) === -1) {
    // When email batching is not enabled, the default interval is immediately
    return INTERVAL_IMMEDIATE;
  }

  return emailIntervalPreference;
}

/***/ }),

/***/ 3427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 15 modules
var es = __webpack_require__(405);

// EXTERNAL MODULE: ./mattermost-redux/selectors/entities/users.js
var users = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(6);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(1);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(16);

// EXTERNAL MODULE: ./mattermost-redux/selectors/entities/general.js
var general = __webpack_require__(26);

// EXTERNAL MODULE: ./mattermost-redux/selectors/entities/preferences.js
var entities_preferences = __webpack_require__(41);

// EXTERNAL MODULE: ./mattermost-redux/actions/preferences.js
var actions_preferences = __webpack_require__(128);

// EXTERNAL MODULE: ./mattermost-redux/actions/users.js
var actions_users = __webpack_require__(35);

// EXTERNAL MODULE: ./utils/constants.jsx
var constants = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.es.js + 1 modules
var index_es = __webpack_require__(52);

// EXTERNAL MODULE: ./actions/global_actions.jsx
var global_actions = __webpack_require__(1567);

// EXTERNAL MODULE: ./utils/utils.jsx + 1 modules
var utils = __webpack_require__(22);

// EXTERNAL MODULE: ./components/setting_item_max.jsx
var setting_item_max = __webpack_require__(1579);

// EXTERNAL MODULE: ./components/setting_item_min.jsx
var setting_item_min = __webpack_require__(1583);

// EXTERNAL MODULE: ./components/confirm_modal.jsx
var confirm_modal = __webpack_require__(1576);

// EXTERNAL MODULE: ./components/icon/back_icon.jsx
var back_icon = __webpack_require__(1711);

// EXTERNAL MODULE: ./mattermost-redux/constants/index.js
var mattermost_redux_constants = __webpack_require__(17);

// CONCATENATED MODULE: ./components/user_settings/advanced/join_leave_section/join_leave_section.jsx
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.







class join_leave_section_JoinLeaveSection extends react_default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleOnChange", e => {
      const value = e.currentTarget.value;
      this.setState({
        joinLeaveState: value
      });
    });

    _defineProperty(this, "handleUpdateSection", section => {
      if (!section) {
        this.setState({
          joinLeaveState: this.props.joinLeave
        });
      }

      this.props.onUpdateSection(section);
    });

    _defineProperty(this, "handleSubmit", () => {
      const {
        actions,
        currentUserId,
        onUpdateSection
      } = this.props;
      const joinLeavePreference = {
        category: mattermost_redux_constants["Preferences"].CATEGORY_ADVANCED_SETTINGS,
        user_id: currentUserId,
        name: mattermost_redux_constants["Preferences"].ADVANCED_FILTER_JOIN_LEAVE,
        value: this.state.joinLeaveState
      };
      actions.savePreferences(currentUserId, [joinLeavePreference]);
      onUpdateSection();
    });

    this.state = {
      joinLeaveState: props.joinLeave
    };
  }

  render() {
    const {
      joinLeaveState
    } = this.state;

    if (this.props.activeSection === constants["c" /* AdvancedSections */].JOIN_LEAVE) {
      return react_default.a.createElement(setting_item_max["a" /* default */], {
        title: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.advance.joinLeaveTitle",
          defaultMessage: "Enable Join/Leave Messages"
        }),
        inputs: [react_default.a.createElement("div", {
          key: "joinLeaveSetting"
        }, react_default.a.createElement("div", {
          className: "radio"
        }, react_default.a.createElement("label", null, react_default.a.createElement("input", {
          id: "joinLeaveOn",
          type: "radio",
          value: 'true',
          name: constants["c" /* AdvancedSections */].JOIN_LEAVE,
          checked: joinLeaveState === 'true',
          onChange: this.handleOnChange
        }), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.advance.on",
          defaultMessage: "On"
        })), react_default.a.createElement("br", null)), react_default.a.createElement("div", {
          className: "radio"
        }, react_default.a.createElement("label", null, react_default.a.createElement("input", {
          id: "joinLeaveOff",
          type: "radio",
          value: 'false',
          name: constants["c" /* AdvancedSections */].JOIN_LEAVE,
          checked: joinLeaveState === 'false',
          onChange: this.handleOnChange
        }), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.advance.off",
          defaultMessage: "Off"
        })), react_default.a.createElement("br", null)), react_default.a.createElement("div", null, react_default.a.createElement("br", null), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.advance.joinLeaveDesc",
          defaultMessage: "When \"On\", System Messages saying a user has joined or left a channel will be visible. When \"Off\", the System Messages about joining or leaving a channel will be hidden. A message will still show up when you are added to a channel, so you can receive a notification."
        })))],
        setting: constants["c" /* AdvancedSections */].JOIN_LEAVE,
        submit: this.handleSubmit,
        saving: this.state.isSaving,
        server_error: this.state.serverError,
        updateSection: this.handleUpdateSection
      });
    }

    return react_default.a.createElement(setting_item_min["a" /* default */], {
      title: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "user.settings.advance.joinLeaveTitle",
        defaultMessage: "Enable Join/Leave Messages"
      }),
      describe: this.props.renderOnOffLabel(joinLeaveState),
      focused: this.props.prevActiveSection === constants["c" /* AdvancedSections */].JOIN_LEAVE,
      section: constants["c" /* AdvancedSections */].JOIN_LEAVE,
      updateSection: this.handleUpdateSection
    });
  }

}

_defineProperty(join_leave_section_JoinLeaveSection, "propTypes", {
  activeSection: prop_types_default.a.string,
  currentUserId: prop_types_default.a.string.isRequired,
  joinLeave: prop_types_default.a.string,
  onUpdateSection: prop_types_default.a.func.isRequired,
  prevActiveSection: prop_types_default.a.string,
  renderOnOffLabel: prop_types_default.a.func.isRequired,
  actions: prop_types_default.a.shape({
    savePreferences: prop_types_default.a.func.isRequired
  }).isRequired
});
// CONCATENATED MODULE: ./components/user_settings/advanced/join_leave_section/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.








function mapStateToProps(state) {
  const joinLeave = Object(entities_preferences["get"])(state, mattermost_redux_constants["Preferences"].CATEGORY_ADVANCED_SETTINGS, mattermost_redux_constants["Preferences"].ADVANCED_FILTER_JOIN_LEAVE, 'true');
  return {
    currentUserId: Object(users["getCurrentUserId"])(state),
    joinLeave
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux["bindActionCreators"])({
      savePreferences: actions_preferences["savePreferences"]
    }, dispatch)
  };
}

/* harmony default export */ var join_leave_section = (Object(es["connect"])(mapStateToProps, mapDispatchToProps)(join_leave_section_JoinLeaveSection));
// CONCATENATED MODULE: ./components/user_settings/advanced/user_settings_advanced.jsx
function user_settings_advanced_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.











const PreReleaseFeatures = constants["N" /* default */].PRE_RELEASE_FEATURES;
class user_settings_advanced_AdvancedSettingsDisplay extends react_default.a.PureComponent {
  constructor(props) {
    super(props);

    user_settings_advanced_defineProperty(this, "getStateFromProps", () => {
      const advancedSettings = this.props.advancedSettingsCategory;
      const settings = {
        send_on_ctrl_enter: this.props.sendOnCtrlEnter,
        code_block_ctrl_enter: this.props.codeBlockOnCtrlEnter,
        formatting: this.props.formatting,
        join_leave: this.props.joinLeave
      };
      const preReleaseFeaturesKeys = Object.keys(PreReleaseFeatures);
      let enabledFeatures = 0;

      for (const as of advancedSettings) {
        for (const key of preReleaseFeaturesKeys) {
          const feature = PreReleaseFeatures[key];

          if (as.name === constants["N" /* default */].FeatureTogglePrefix + feature.label) {
            settings[as.name] = as.value;

            if (as.value === 'true') {
              enabledFeatures += 1;
            }
          }
        }
      }

      const isSaving = false;
      const previewFeaturesEnabled = this.props.enablePreviewFeatures;
      const showDeactivateAccountModal = false;
      return {
        preReleaseFeatures: PreReleaseFeatures,
        settings,
        preReleaseFeaturesKeys,
        enabledFeatures,
        isSaving,
        previewFeaturesEnabled,
        showDeactivateAccountModal
      };
    });

    user_settings_advanced_defineProperty(this, "updateSetting", (setting, value) => {
      const settings = this.state.settings;
      settings[setting] = value;
      this.setState(settings);
    });

    user_settings_advanced_defineProperty(this, "toggleFeature", (feature, checked) => {
      const settings = this.state.settings;
      settings[constants["N" /* default */].FeatureTogglePrefix + feature] = String(checked);
      let enabledFeatures = 0;
      Object.keys(this.state.settings).forEach(setting => {
        if (setting.lastIndexOf(constants["N" /* default */].FeatureTogglePrefix) === 0 && this.state.settings[setting] === 'true') {
          enabledFeatures++;
        }
      });
      this.setState({
        settings,
        enabledFeatures
      });
    });

    user_settings_advanced_defineProperty(this, "saveEnabledFeatures", () => {
      const features = [];
      Object.keys(this.state.settings).forEach(setting => {
        if (setting.lastIndexOf(constants["N" /* default */].FeatureTogglePrefix) === 0) {
          features.push(setting);
        }
      });
      this.handleSubmit(features);
    });

    user_settings_advanced_defineProperty(this, "handleSubmit", async settings => {
      const preferences = [];
      const {
        actions,
        currentUser
      } = this.props;
      const userId = currentUser.id; // this should be refactored so we can actually be certain about what type everything is

      (Array.isArray(settings) ? settings : [settings]).forEach(setting => {
        preferences.push({
          user_id: userId,
          category: constants["N" /* default */].Preferences.CATEGORY_ADVANCED_SETTINGS,
          name: setting,
          value: this.state.settings[setting]
        });
      });
      this.setState({
        isSaving: true
      });
      await actions.savePreferences(userId, preferences);
      this.handleUpdateSection('');
    });

    user_settings_advanced_defineProperty(this, "handleDeactivateAccountSubmit", async () => {
      const userId = this.props.currentUser.id;
      this.setState({
        isSaving: true
      });
      this.props.actions.updateUserActive(userId, false).then(({
        error
      }) => {
        if (error) {
          this.setState({
            serverError: error.message
          });
        }
      });
      const {
        data,
        error
      } = await this.props.actions.revokeAllSessionsForUser(userId);

      if (data) {
        Object(global_actions["e" /* emitUserLoggedOutEvent */])();
      } else if (error) {
        this.setState({
          serverError: error.message
        });
      }
    });

    user_settings_advanced_defineProperty(this, "handleShowDeactivateAccountModal", () => {
      this.setState({
        showDeactivateAccountModal: true
      });
    });

    user_settings_advanced_defineProperty(this, "handleHideDeactivateAccountModal", () => {
      this.setState({
        showDeactivateAccountModal: false
      });
    });

    user_settings_advanced_defineProperty(this, "handleUpdateSection", section => {
      if (!section) {
        this.setState(this.getStateFromProps());
      }

      this.setState({
        isSaving: false
      });
      this.props.updateSection(section);
    });

    user_settings_advanced_defineProperty(this, "renderFormattingSection", () => {
      if (this.props.activeSection === 'formatting') {
        return react_default.a.createElement(setting_item_max["a" /* default */], {
          title: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "user.settings.advance.formattingTitle",
            defaultMessage: "Enable Post Formatting"
          }),
          inputs: [react_default.a.createElement("div", {
            key: "formattingSetting"
          }, react_default.a.createElement("div", {
            className: "radio"
          }, react_default.a.createElement("label", null, react_default.a.createElement("input", {
            id: "postFormattingOn",
            type: "radio",
            name: "formatting",
            checked: this.state.settings.formatting !== 'false',
            onChange: this.updateSetting.bind(this, 'formatting', 'true')
          }), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "user.settings.advance.on",
            defaultMessage: "On"
          })), react_default.a.createElement("br", null)), react_default.a.createElement("div", {
            className: "radio"
          }, react_default.a.createElement("label", null, react_default.a.createElement("input", {
            id: "postFormattingOff",
            type: "radio",
            name: "formatting",
            checked: this.state.settings.formatting === 'false',
            onChange: this.updateSetting.bind(this, 'formatting', 'false')
          }), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "user.settings.advance.off",
            defaultMessage: "Off"
          })), react_default.a.createElement("br", null)), react_default.a.createElement("div", null, react_default.a.createElement("br", null), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "user.settings.advance.formattingDesc",
            defaultMessage: "If enabled, posts will be formatted to create links, show emoji, style the text, and add line breaks. By default, this setting is enabled."
          })))],
          setting: 'formatting',
          submit: this.handleSubmit,
          saving: this.state.isSaving,
          server_error: this.state.serverError,
          updateSection: this.handleUpdateSection
        });
      }

      return react_default.a.createElement(setting_item_min["a" /* default */], {
        title: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.advance.formattingTitle",
          defaultMessage: "Enable Post Formatting"
        }),
        describe: this.renderOnOffLabel(this.state.settings.formatting),
        focused: this.props.prevActiveSection === this.prevSections.formatting,
        section: 'formatting',
        updateSection: this.handleUpdateSection
      });
    });

    this.state = this.getStateFromProps();
    this.prevSections = {
      advancedCtrlSend: 'dummySectionName',
      // dummy value that should never match any section name
      formatting: 'advancedCtrlSend',
      join_leave: 'formatting',
      advancedPreviewFeatures: 'join_leave',
      deactivateAccount: 'advancedPreviewFeatures'
    };
  }

  renderOnOffLabel(enabled) {
    if (enabled === 'false') {
      return react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "user.settings.advance.off",
        defaultMessage: "Off"
      });
    }

    return react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "user.settings.advance.on",
      defaultMessage: "On"
    });
  }

  renderCtrlEnterLabel() {
    const ctrlEnter = this.state.settings.send_on_ctrl_enter;
    const codeBlockCtrlEnter = this.state.settings.code_block_ctrl_enter;

    if (ctrlEnter === 'false' && codeBlockCtrlEnter === 'false') {
      return react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "user.settings.advance.off",
        defaultMessage: "Off"
      });
    } else if (ctrlEnter === 'true' && codeBlockCtrlEnter === 'true') {
      return react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "user.settings.advance.onForAllMessages",
        defaultMessage: "On for all messages"
      });
    }

    return react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "user.settings.advance.onForCode",
      defaultMessage: "On only for code blocks starting with ```"
    });
  }

  renderFeatureLabel(feature) {
    switch (feature) {
      case 'MARKDOWN_PREVIEW':
        return react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.advance.markdown_preview",
          defaultMessage: "Show markdown preview option in message input box"
        });

      default:
        return null;
    }
  }

  render() {
    const serverError = this.state.serverError || null;
    let ctrlSendSection;

    if (this.props.activeSection === 'advancedCtrlSend') {
      const ctrlSendActive = [this.state.settings.send_on_ctrl_enter === 'true', this.state.settings.send_on_ctrl_enter === 'false' && this.state.settings.code_block_ctrl_enter === 'true', this.state.settings.send_on_ctrl_enter === 'false' && this.state.settings.code_block_ctrl_enter === 'false'];
      const inputs = [react_default.a.createElement("div", {
        key: "ctrlSendSetting"
      }, react_default.a.createElement("div", {
        className: "radio"
      }, react_default.a.createElement("label", null, react_default.a.createElement("input", {
        id: "ctrlSendOn",
        type: "radio",
        name: "sendOnCtrlEnter",
        checked: ctrlSendActive[0],
        onChange: () => {
          this.updateSetting('send_on_ctrl_enter', 'true');
          this.updateSetting('code_block_ctrl_enter', 'true');
        }
      }), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "user.settings.advance.onForAllMessages",
        defaultMessage: "On for all messages"
      })), react_default.a.createElement("br", null)), react_default.a.createElement("div", {
        className: "radio"
      }, react_default.a.createElement("label", null, react_default.a.createElement("input", {
        id: "ctrlSendOnForCode",
        type: "radio",
        name: "sendOnCtrlEnter",
        checked: ctrlSendActive[1],
        onChange: () => {
          this.updateSetting('send_on_ctrl_enter', 'false');
          this.updateSetting('code_block_ctrl_enter', 'true');
        }
      }), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "user.settings.advance.onForCode",
        defaultMessage: "On only for code blocks starting with ```"
      })), react_default.a.createElement("br", null)), react_default.a.createElement("div", {
        className: "radio"
      }, react_default.a.createElement("label", null, react_default.a.createElement("input", {
        id: "ctrlSendOff",
        type: "radio",
        name: "sendOnCtrlEnter",
        checked: ctrlSendActive[2],
        onChange: () => {
          this.updateSetting('send_on_ctrl_enter', 'false');
          this.updateSetting('code_block_ctrl_enter', 'false');
        }
      }), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "user.settings.advance.off",
        defaultMessage: "Off"
      })), react_default.a.createElement("br", null)), react_default.a.createElement("div", null, react_default.a.createElement("br", null), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "user.settings.advance.sendDesc",
        defaultMessage: "When enabled, CTRL + ENTER will send the message and ENTER inserts a new line."
      })))];
      ctrlSendSection = react_default.a.createElement(setting_item_max["a" /* default */], {
        title: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.advance.sendTitle",
          defaultMessage: "Send messages on CTRL+ENTER"
        }),
        inputs: inputs,
        submit: this.handleSubmit.bind(this, ['send_on_ctrl_enter', 'code_block_ctrl_enter']),
        saving: this.state.isSaving,
        server_error: serverError,
        updateSection: this.handleUpdateSection
      });
    } else {
      ctrlSendSection = react_default.a.createElement(setting_item_min["a" /* default */], {
        title: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.advance.sendTitle",
          defaultMessage: "Send messages on CTRL+ENTER"
        }),
        describe: this.renderCtrlEnterLabel(),
        focused: this.props.prevActiveSection === this.prevSections.advancedCtrlSend,
        section: 'advancedCtrlSend',
        updateSection: this.handleUpdateSection
      });
    }

    const formattingSection = this.renderFormattingSection();
    let formattingSectionDivider = null;

    if (formattingSection) {
      formattingSectionDivider = react_default.a.createElement("div", {
        className: "divider-light"
      });
    }

    let previewFeaturesSection;
    let previewFeaturesSectionDivider;

    if (this.state.previewFeaturesEnabled && this.state.preReleaseFeaturesKeys.length > 0) {
      previewFeaturesSectionDivider = react_default.a.createElement("div", {
        className: "divider-light"
      });

      if (this.props.activeSection === 'advancedPreviewFeatures') {
        const inputs = [];
        this.state.preReleaseFeaturesKeys.forEach(key => {
          const feature = this.state.preReleaseFeatures[key];
          inputs.push(react_default.a.createElement("div", {
            key: 'advancedPreviewFeatures_' + feature.label
          }, react_default.a.createElement("div", {
            className: "checkbox"
          }, react_default.a.createElement("label", null, react_default.a.createElement("input", {
            id: 'advancedPreviewFeatures' + feature.label,
            type: "checkbox",
            checked: this.state.settings[constants["N" /* default */].FeatureTogglePrefix + feature.label] === 'true',
            onChange: e => {
              this.toggleFeature(feature.label, e.target.checked);
            }
          }), this.renderFeatureLabel(key)))));
        });
        inputs.push(react_default.a.createElement("div", {
          key: "advancedPreviewFeatures_helptext"
        }, react_default.a.createElement("br", null), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.advance.preReleaseDesc",
          defaultMessage: "Check any pre-released features you'd like to preview.  You may also need to refresh the page before the setting will take effect."
        })));
        previewFeaturesSection = react_default.a.createElement(setting_item_max["a" /* default */], {
          title: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "user.settings.advance.preReleaseTitle",
            defaultMessage: "Preview pre-release features"
          }),
          inputs: inputs,
          submit: this.saveEnabledFeatures,
          saving: this.state.isSaving,
          server_error: serverError,
          updateSection: this.handleUpdateSection
        });
      } else {
        previewFeaturesSection = react_default.a.createElement(setting_item_min["a" /* default */], {
          title: utils["gb" /* localizeMessage */]('user.settings.advance.preReleaseTitle', 'Preview pre-release features'),
          describe: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "user.settings.advance.enabledFeatures",
            defaultMessage: "{count, number} {count, plural, one {Feature} other {Features}} Enabled",
            values: {
              count: this.state.enabledFeatures
            }
          }),
          focused: this.props.prevActiveSection === this.prevSections.advancedPreviewFeatures,
          section: 'advancedPreviewFeatures',
          updateSection: this.handleUpdateSection
        });
      }
    }

    let deactivateAccountSection = '';
    let makeConfirmationModal = '';
    const currentUser = this.props.currentUser;

    if (currentUser.auth_service === '' && this.props.enableUserDeactivation) {
      if (this.props.activeSection === 'deactivateAccount') {
        deactivateAccountSection = react_default.a.createElement(setting_item_max["a" /* default */], {
          title: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "user.settings.advance.deactivateAccountTitle",
            defaultMessage: "Deactivate Account"
          }),
          inputs: [react_default.a.createElement("div", {
            key: "formattingSetting"
          }, react_default.a.createElement("div", null, react_default.a.createElement("br", null), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "user.settings.advance.deactivateDesc",
            defaultMessage: "Deactivating your account removes your ability to log in to this server and disables all email and mobile notifications. To reactivate your account, contact your System Administrator."
          })))],
          saveButtonText: 'Deactivate',
          setting: 'deactivateAccount',
          submit: this.handleShowDeactivateAccountModal,
          saving: this.state.isSaving,
          server_error: this.state.serverError,
          updateSection: this.handleUpdateSection
        });
      } else {
        deactivateAccountSection = react_default.a.createElement(setting_item_min["a" /* default */], {
          title: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "user.settings.advance.deactivateAccountTitle",
            defaultMessage: "Deactivate Account"
          }),
          describe: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "user.settings.advance.deactivateDescShort",
            defaultMessage: "Click 'Edit' to deactivate your account"
          }),
          focused: this.props.prevActiveSection === this.prevSections.deactivateAccount,
          section: 'deactivateAccount',
          updateSection: this.handleUpdateSection
        });
      }

      const confirmButtonClass = 'btn btn-danger';
      const deactivateMemberButton = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "user.settings.advance.deactivate_member_modal.deactivateButton",
        defaultMessage: "Yes, deactivate my account"
      });
      makeConfirmationModal = react_default.a.createElement(confirm_modal["a" /* default */], {
        show: this.state.showDeactivateAccountModal,
        title: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.advance.confirmDeactivateAccountTitle",
          defaultMessage: "Confirm Deactivation"
        }),
        message: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.advance.confirmDeactivateDesc",
          defaultMessage: "Are you sure you want to deactivate your account? This can only be reversed by your System Administrator."
        }),
        confirmButtonClass: confirmButtonClass,
        confirmButtonText: deactivateMemberButton,
        onConfirm: this.handleDeactivateAccountSubmit,
        onCancel: this.handleHideDeactivateAccountModal
      });
    }

    return react_default.a.createElement("div", null, react_default.a.createElement("div", {
      className: "modal-header"
    }, react_default.a.createElement("button", {
      id: "closeButton",
      type: "button",
      className: "close",
      "data-dismiss": "modal",
      "aria-label": "Close",
      onClick: this.props.closeModal
    }, react_default.a.createElement("span", {
      "aria-hidden": "true"
    }, '×')), react_default.a.createElement("h4", {
      className: "modal-title",
      ref: "title"
    }, react_default.a.createElement("div", {
      className: "modal-back"
    }, react_default.a.createElement("span", {
      onClick: this.props.collapseModal
    }, react_default.a.createElement(back_icon["a" /* default */], null))), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "user.settings.advance.title",
      defaultMessage: "Advanced Settings"
    }))), react_default.a.createElement("div", {
      className: "user-settings"
    }, react_default.a.createElement("h3", {
      className: "tab-header"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "user.settings.advance.title",
      defaultMessage: "Advanced Settings"
    })), react_default.a.createElement("div", {
      className: "divider-dark first"
    }), ctrlSendSection, formattingSectionDivider, formattingSection, react_default.a.createElement("div", {
      className: "divider-light"
    }), react_default.a.createElement(join_leave_section, {
      activeSection: this.props.activeSection,
      onUpdateSection: this.handleUpdateSection,
      prevActiveSection: this.props.prevActiveSection,
      renderOnOffLabel: this.renderOnOffLabel
    }), previewFeaturesSectionDivider, previewFeaturesSection, formattingSectionDivider, deactivateAccountSection, react_default.a.createElement("div", {
      className: "divider-dark"
    }), makeConfirmationModal));
  }

}

user_settings_advanced_defineProperty(user_settings_advanced_AdvancedSettingsDisplay, "propTypes", {
  currentUser: prop_types_default.a.object.isRequired,
  advancedSettingsCategory: prop_types_default.a.array.isRequired,
  sendOnCtrlEnter: prop_types_default.a.string.isRequired,
  codeBlockOnCtrlEnter: prop_types_default.a.bool,
  formatting: prop_types_default.a.string.isRequired,
  joinLeave: prop_types_default.a.string.isRequired,
  updateSection: prop_types_default.a.func,
  activeSection: prop_types_default.a.string,
  prevActiveSection: prop_types_default.a.string,
  closeModal: prop_types_default.a.func.isRequired,
  collapseModal: prop_types_default.a.func.isRequired,
  enablePreviewFeatures: prop_types_default.a.bool,
  enableUserDeactivation: prop_types_default.a.bool,
  actions: prop_types_default.a.shape({
    savePreferences: prop_types_default.a.func.isRequired,
    updateUserActive: prop_types_default.a.func.isRequired,
    revokeAllSessionsForUser: prop_types_default.a.func.isRequired
  }).isRequired
});
// CONCATENATED MODULE: ./components/user_settings/advanced/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.










function makeMapStateToProps() {
  const getAdvancedSettingsCategory = Object(entities_preferences["makeGetCategory"])();
  return state => {
    const config = Object(general["getConfig"])(state);
    const enablePreviewFeatures = config.EnablePreviewFeatures === 'true';
    const enableUserDeactivation = config.EnableUserDeactivation === 'true';
    return {
      advancedSettingsCategory: getAdvancedSettingsCategory(state, constants["w" /* Preferences */].CATEGORY_ADVANCED_SETTINGS),
      sendOnCtrlEnter: Object(entities_preferences["get"])(state, constants["w" /* Preferences */].CATEGORY_ADVANCED_SETTINGS, 'send_on_ctrl_enter', 'false'),
      codeBlockOnCtrlEnter: Object(entities_preferences["get"])(state, constants["w" /* Preferences */].CATEGORY_ADVANCED_SETTINGS, 'code_block_ctrl_enter', 'true'),
      formatting: Object(entities_preferences["get"])(state, constants["w" /* Preferences */].CATEGORY_ADVANCED_SETTINGS, 'formatting', 'true'),
      joinLeave: Object(entities_preferences["get"])(state, constants["w" /* Preferences */].CATEGORY_ADVANCED_SETTINGS, 'join_leave', 'true'),
      currentUser: Object(users["getCurrentUser"])(state),
      enablePreviewFeatures,
      enableUserDeactivation
    };
  };
}

function advanced_mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux["bindActionCreators"])({
      savePreferences: actions_preferences["savePreferences"],
      updateUserActive: actions_users["updateUserActive"],
      revokeAllSessionsForUser: actions_users["revokeAllSessionsForUser"]
    }, dispatch)
  };
}

/* harmony default export */ var advanced = (Object(es["connect"])(makeMapStateToProps, advanced_mapDispatchToProps)(user_settings_advanced_AdvancedSettingsDisplay));
// EXTERNAL MODULE: ./mattermost-redux/actions/general.js
var actions_general = __webpack_require__(253);

// EXTERNAL MODULE: ./mattermost-redux/actions/timezone.js
var actions_timezone = __webpack_require__(1814);

// EXTERNAL MODULE: ./mattermost-redux/selectors/entities/timezone.js
var entities_timezone = __webpack_require__(308);

// EXTERNAL MODULE: ./mattermost-redux/utils/timezone_utils.js
var timezone_utils = __webpack_require__(306);

// EXTERNAL MODULE: ./utils/timezone.jsx
var utils_timezone = __webpack_require__(315);

// EXTERNAL MODULE: ./i18n/i18n.jsx
var i18n = __webpack_require__(416);

// EXTERNAL MODULE: ./utils/i18n.jsx
var utils_i18n = __webpack_require__(53);

// EXTERNAL MODULE: ./mattermost-redux/selectors/entities/teams.js
var teams = __webpack_require__(32);

// EXTERNAL MODULE: ./node_modules/jquery/src/jquery.js
var jquery = __webpack_require__(175);
var jquery_default = /*#__PURE__*/__webpack_require__.n(jquery);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(33);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./dispatcher/app_dispatcher.jsx
var app_dispatcher = __webpack_require__(1845);

// EXTERNAL MODULE: ./node_modules/react-bootstrap/es/Popover.js
var Popover = __webpack_require__(1999);

// EXTERNAL MODULE: ./node_modules/react-bootstrap/es/OverlayTrigger.js
var OverlayTrigger = __webpack_require__(1995);

// EXTERNAL MODULE: ./node_modules/bootstrap-colorpicker/dist/js/bootstrap-colorpicker.js
var bootstrap_colorpicker = __webpack_require__(3260);

// EXTERNAL MODULE: ./utils/user_agent.jsx
var user_agent = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/react-color/lib/index.js
var lib = __webpack_require__(2208);

// CONCATENATED MODULE: ./components/color_input.jsx
function color_input_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





class color_input_ColorInput extends react_default.a.Component {
  constructor(props) {
    super(props);

    color_input_defineProperty(this, "checkClick", e => {
      const colorPickerDOMNode = react_dom_default.a.findDOMNode(this.colorPicker);

      if (!colorPickerDOMNode || !colorPickerDOMNode.contains(e.target)) {
        this.setState({
          isOpened: false
        });
      }
    });

    color_input_defineProperty(this, "togglePicker", () => {
      this.setState({
        isOpened: !this.state.isOpened
      });
    });

    color_input_defineProperty(this, "handleChange", newColorData => {
      const {
        hex
      } = newColorData;
      const {
        onChange: handleChange
      } = this.props;

      if (handleChange) {
        handleChange(hex);
      }
    });

    color_input_defineProperty(this, "getColorPicker", node => {
      this.colorPicker = node;
    });

    this.state = {
      idOpened: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      isOpened: prevIsOpened
    } = prevState;
    const {
      isOpened
    } = this.state;

    if (isOpened !== prevIsOpened) {
      if (isOpened) {
        document.addEventListener('click', this.checkClick);
      } else {
        document.removeEventListener('click', this.checkClick);
      }
    }
  }

  render() {
    const {
      color
    } = this.props;
    const {
      isOpened
    } = this.state;
    return react_default.a.createElement("div", {
      className: "color-input input-group"
    }, react_default.a.createElement("input", {
      className: "form-control",
      type: "text",
      value: color,
      readOnly: true
    }), react_default.a.createElement("span", {
      className: "input-group-addon",
      onClick: this.togglePicker
    }, react_default.a.createElement("i", {
      className: "color-icon",
      style: {
        backgroundColor: color
      }
    })), isOpened && react_default.a.createElement("div", {
      ref: this.getColorPicker,
      className: "color-popover"
    }, react_default.a.createElement(lib["ChromePicker"], {
      color: color,
      onChange: this.handleChange
    })));
  }

}

color_input_defineProperty(color_input_ColorInput, "propTypes", {
  /*
   * Selected color
   */
  color: prop_types_default.a.string.isRequired,

  /*
   * Function called when color changed. Takes hex format of color Ex: #ffeec0
   */
  onChange: prop_types_default.a.func
});

/* harmony default export */ var color_input = (color_input_ColorInput);
// CONCATENATED MODULE: ./components/user_settings/display/user_settings_theme/color_chooser.jsx
function color_chooser_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.




class color_chooser_ColorChooser extends react_default.a.Component {
  constructor(...args) {
    super(...args);

    color_chooser_defineProperty(this, "handleChange", newColor => {
      const {
        id,
        onChange: handleChange
      } = this.props;

      if (handleChange) {
        handleChange(id, newColor);
      }
    });
  }

  render() {
    const {
      label,
      color
    } = this.props;
    return react_default.a.createElement("div", null, react_default.a.createElement("label", {
      className: "custom-label"
    }, label), react_default.a.createElement(color_input, {
      color: color,
      onChange: this.handleChange
    }));
  }

}

color_chooser_defineProperty(color_chooser_ColorChooser, "propTypes", {
  /*
   * The id of setting that we will change
   */
  id: prop_types_default.a.string.isRequired,

  /*
   * The label of setting that we will choose
   */
  label: prop_types_default.a.string.isRequired,

  /*
   * Selected color
   */
  color: prop_types_default.a.string.isRequired,

  /*
   * Function called when color changed takes 2 arguments: Id of changing setting and new color
   */
  onChange: prop_types_default.a.func
});

/* harmony default export */ var color_chooser = (color_chooser_ColorChooser);
// CONCATENATED MODULE: ./components/user_settings/display/user_settings_theme/custom_theme_chooser.jsx
function custom_theme_chooser_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.










const custom_theme_chooser_messages = Object(index_es["g" /* defineMessages */])({
  sidebarBg: {
    id: Object(utils_i18n["b" /* t */])('user.settings.custom_theme.sidebarBg'),
    defaultMessage: 'Sidebar BG'
  },
  sidebarText: {
    id: Object(utils_i18n["b" /* t */])('user.settings.custom_theme.sidebarText'),
    defaultMessage: 'Sidebar Text'
  },
  sidebarHeaderBg: {
    id: Object(utils_i18n["b" /* t */])('user.settings.custom_theme.sidebarHeaderBg'),
    defaultMessage: 'Sidebar Header BG'
  },
  sidebarHeaderTextColor: {
    id: Object(utils_i18n["b" /* t */])('user.settings.custom_theme.sidebarHeaderTextColor'),
    defaultMessage: 'Sidebar Header Text'
  },
  sidebarUnreadText: {
    id: Object(utils_i18n["b" /* t */])('user.settings.custom_theme.sidebarUnreadText'),
    defaultMessage: 'Sidebar Unread Text'
  },
  sidebarTextHoverBg: {
    id: Object(utils_i18n["b" /* t */])('user.settings.custom_theme.sidebarTextHoverBg'),
    defaultMessage: 'Sidebar Text Hover BG'
  },
  sidebarTextActiveBorder: {
    id: Object(utils_i18n["b" /* t */])('user.settings.custom_theme.sidebarTextActiveBorder'),
    defaultMessage: 'Sidebar Text Active Border'
  },
  sidebarTextActiveColor: {
    id: Object(utils_i18n["b" /* t */])('user.settings.custom_theme.sidebarTextActiveColor'),
    defaultMessage: 'Sidebar Text Active Color'
  },
  onlineIndicator: {
    id: Object(utils_i18n["b" /* t */])('user.settings.custom_theme.onlineIndicator'),
    defaultMessage: 'Online Indicator'
  },
  awayIndicator: {
    id: Object(utils_i18n["b" /* t */])('user.settings.custom_theme.awayIndicator'),
    defaultMessage: 'Away Indicator'
  },
  dndIndicator: {
    id: Object(utils_i18n["b" /* t */])('user.settings.custom_theme.dndIndicator'),
    defaultMessage: 'Do Not Disturb Indicator'
  },
  mentionBg: {
    id: Object(utils_i18n["b" /* t */])('user.settings.custom_theme.mentionBg'),
    defaultMessage: 'Mention Jewel BG'
  },
  mentionColor: {
    id: Object(utils_i18n["b" /* t */])('user.settings.custom_theme.mentionColor'),
    defaultMessage: 'Mention Jewel Text'
  },
  centerChannelBg: {
    id: Object(utils_i18n["b" /* t */])('user.settings.custom_theme.centerChannelBg'),
    defaultMessage: 'Center Channel BG'
  },
  centerChannelColor: {
    id: Object(utils_i18n["b" /* t */])('user.settings.custom_theme.centerChannelColor'),
    defaultMessage: 'Center Channel Text'
  },
  newMessageSeparator: {
    id: Object(utils_i18n["b" /* t */])('user.settings.custom_theme.newMessageSeparator'),
    defaultMessage: 'New Message Separator'
  },
  linkColor: {
    id: Object(utils_i18n["b" /* t */])('user.settings.custom_theme.linkColor'),
    defaultMessage: 'Link Color'
  },
  buttonBg: {
    id: Object(utils_i18n["b" /* t */])('user.settings.custom_theme.buttonBg'),
    defaultMessage: 'Button BG'
  },
  buttonColor: {
    id: Object(utils_i18n["b" /* t */])('user.settings.custom_theme.buttonColor'),
    defaultMessage: 'Button Text'
  },
  errorTextColor: {
    id: Object(utils_i18n["b" /* t */])('user.settings.custom_theme.errorTextColor'),
    defaultMessage: 'Error Text Color'
  },
  mentionHighlightBg: {
    id: Object(utils_i18n["b" /* t */])('user.settings.custom_theme.mentionHighlightBg'),
    defaultMessage: 'Mention Highlight BG'
  },
  mentionHighlightLink: {
    id: Object(utils_i18n["b" /* t */])('user.settings.custom_theme.mentionHighlightLink'),
    defaultMessage: 'Mention Highlight Link'
  },
  codeTheme: {
    id: Object(utils_i18n["b" /* t */])('user.settings.custom_theme.codeTheme'),
    defaultMessage: 'Code Theme'
  }
});
class custom_theme_chooser_CustomThemeChooser extends react_default.a.Component {
  constructor(props) {
    super(props);

    custom_theme_chooser_defineProperty(this, "handleColorChange", (settingId, color) => {
      const {
        updateTheme,
        theme
      } = this.props;

      if (theme[settingId] !== color) {
        const newTheme = { ...theme,
          type: 'custom',
          [settingId]: color
        }; // For backwards compatability

        if (settingId === 'mentionBg') {
          newTheme.mentionBj = color;
        }

        updateTheme(newTheme);
        const copyTheme = this.setCopyTheme(newTheme);
        this.setState({
          copyTheme
        });
      }
    });

    custom_theme_chooser_defineProperty(this, "pasteBoxChange", e => {
      let text = '';

      if (window.clipboardData && window.clipboardData.getData) {
        // IE
        text = window.clipboardData.getData('Text');
      } else {
        text = e.clipboardData.getData('Text'); //e.clipboardData.getData('text/plain');
      }

      if (text.length === 0) {
        return;
      }

      let theme;

      try {
        theme = JSON.parse(text);
      } catch (err) {
        return;
      }

      this.setState({
        copyTheme: JSON.stringify(theme)
      });
      theme.type = 'custom';
      this.props.updateTheme(theme);
    });

    custom_theme_chooser_defineProperty(this, "onChangeHandle", e => {
      e.stopPropagation();
    });

    custom_theme_chooser_defineProperty(this, "selectTheme", () => {
      const textarea = this.refs.textarea;
      textarea.focus();
      textarea.setSelectionRange(0, this.state.copyTheme.length);
    });

    custom_theme_chooser_defineProperty(this, "toggleSidebarStyles", e => {
      e.preventDefault();
      jquery_default()(this.refs.sidebarStylesHeader).toggleClass('open');
      this.toggleSection(this.refs.sidebarStyles);
    });

    custom_theme_chooser_defineProperty(this, "toggleCenterChannelStyles", e => {
      e.preventDefault();
      jquery_default()(this.refs.centerChannelStylesHeader).toggleClass('open');
      this.toggleSection(this.refs.centerChannelStyles);
    });

    custom_theme_chooser_defineProperty(this, "toggleLinkAndButtonStyles", e => {
      e.preventDefault();
      jquery_default()(this.refs.linkAndButtonStylesHeader).toggleClass('open');
      this.toggleSection(this.refs.linkAndButtonStyles);
    });

    custom_theme_chooser_defineProperty(this, "onCodeThemeChange", e => {
      const theme = { ...this.props.theme,
        type: 'custom',
        codeTheme: e.target.value
      };
      this.props.updateTheme(theme);
    });

    const _copyTheme = this.setCopyTheme(this.props.theme);

    this.state = {
      copyTheme: _copyTheme
    };
  }

  componentDidMount() {
    jquery_default()('.group--code').on('change', this.onCodeThemeChange);
  }

  componentWillUnmount() {
    jquery_default()('.group--code').off('change', this.onCodeThemeChange);
  }

  setCopyTheme(theme) {
    const copyTheme = Object.assign({}, theme);
    delete copyTheme.type;
    delete copyTheme.image;
    return JSON.stringify(copyTheme);
  }

  toggleSection(node) {
    if (user_agent["g" /* isIos */]()) {
      // iOS doesn't support jQuery animations
      jquery_default()(node).toggleClass('open');
    } else {
      jquery_default()(node).slideToggle();
    }
  }

  render() {
    const {
      formatMessage
    } = this.context.intl;
    const theme = this.props.theme;
    const sidebarElements = [];
    const centerChannelElements = [];
    const linkAndButtonElements = [];
    constants["N" /* default */].THEME_ELEMENTS.forEach((element, index) => {
      if (element.id === 'codeTheme') {
        const codeThemeOptions = [];
        let codeThemeURL = '';
        element.themes.forEach((codeTheme, codeThemeIndex) => {
          if (codeTheme.id === theme[element.id]) {
            codeThemeURL = codeTheme.iconURL;
          }

          codeThemeOptions.push(react_default.a.createElement("option", {
            key: 'code-theme-key' + codeThemeIndex,
            value: codeTheme.id
          }, codeTheme.uiName));
        });
        var popoverContent = react_default.a.createElement(Popover["a" /* default */], {
          bsStyle: "info",
          id: "code-popover",
          className: "code-popover"
        }, react_default.a.createElement("img", {
          width: "200",
          alt: 'code theme image',
          src: codeThemeURL
        }));
        centerChannelElements.push(react_default.a.createElement("div", {
          className: "col-sm-6 form-group",
          key: 'custom-theme-key' + index
        }, react_default.a.createElement("label", {
          className: "custom-label"
        }, formatMessage(custom_theme_chooser_messages[element.id])), react_default.a.createElement("div", {
          className: "input-group theme-group group--code dropdown",
          id: element.id
        }, react_default.a.createElement("select", {
          id: "codeThemeSelect",
          className: "form-control",
          type: "text",
          defaultValue: theme[element.id]
        }, codeThemeOptions), react_default.a.createElement(OverlayTrigger["a" /* default */], {
          trigger: ['hover', 'focus'],
          placement: "top",
          overlay: popoverContent,
          ref: "headerOverlay"
        }, react_default.a.createElement("span", {
          className: "input-group-addon"
        }, react_default.a.createElement("img", {
          alt: 'code theme image',
          src: codeThemeURL
        }))))));
      } else if (element.group === 'centerChannelElements') {
        centerChannelElements.push(react_default.a.createElement("div", {
          className: "col-sm-6 form-group element",
          key: 'custom-theme-key' + index
        }, react_default.a.createElement(color_chooser, {
          id: element.id,
          label: formatMessage(custom_theme_chooser_messages[element.id]),
          color: theme[element.id],
          onChange: this.handleColorChange
        })));
      } else if (element.group === 'sidebarElements') {
        // Need to support old typo mentionBj element for mentionBg
        let color = theme[element.id];

        if (!color && element.id === 'mentionBg') {
          color = theme.mentionBj;
        }

        sidebarElements.push(react_default.a.createElement("div", {
          className: "col-sm-6 form-group element",
          key: 'custom-theme-key' + index
        }, react_default.a.createElement(color_chooser, {
          id: element.id,
          label: formatMessage(custom_theme_chooser_messages[element.id]),
          color: color,
          onChange: this.handleColorChange
        })));
      } else {
        linkAndButtonElements.push(react_default.a.createElement("div", {
          className: "col-sm-6 form-group element",
          key: 'custom-theme-key' + index
        }, react_default.a.createElement(color_chooser, {
          id: element.id,
          label: formatMessage(custom_theme_chooser_messages[element.id]),
          color: theme[element.id],
          onChange: this.handleColorChange
        })));
      }
    });
    const pasteBox = react_default.a.createElement("div", {
      className: "col-sm-12"
    }, react_default.a.createElement("label", {
      className: "custom-label"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "user.settings.custom_theme.copyPaste",
      defaultMessage: "Copy and paste to share theme colors:"
    })), react_default.a.createElement("textarea", {
      ref: "textarea",
      className: "form-control",
      id: "pasteBox",
      value: this.state.copyTheme,
      onPaste: this.pasteBoxChange,
      onChange: this.onChangeHandle,
      onClick: this.selectTheme
    }));
    return react_default.a.createElement("div", {
      className: "appearance-section padding-top"
    }, react_default.a.createElement("div", {
      className: "theme-elements row"
    }, react_default.a.createElement("div", {
      ref: "sidebarStylesHeader",
      className: "theme-elements__header",
      onClick: this.toggleSidebarStyles
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "user.settings.custom_theme.sidebarTitle",
      defaultMessage: "Sidebar Styles"
    }), react_default.a.createElement("div", {
      className: "header__icon"
    }, react_default.a.createElement("i", {
      className: "fa fa-plus",
      title: formatMessage({
        id: 'generic_icons.expand',
        defaultMessage: 'Expand Icon'
      })
    }), react_default.a.createElement("i", {
      className: "fa fa-minus",
      title: formatMessage({
        id: 'generic_icons.collapse',
        defaultMessage: 'Collapse Icon'
      })
    }))), react_default.a.createElement("div", {
      ref: "sidebarStyles",
      className: "theme-elements__body"
    }, sidebarElements)), react_default.a.createElement("div", {
      id: "centerChannelStyles",
      className: "theme-elements row"
    }, react_default.a.createElement("div", {
      ref: "centerChannelStylesHeader",
      className: "theme-elements__header",
      onClick: this.toggleCenterChannelStyles
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "user.settings.custom_theme.centerChannelTitle",
      defaultMessage: "Center Channel Styles"
    }), react_default.a.createElement("div", {
      className: "header__icon"
    }, react_default.a.createElement("i", {
      className: "fa fa-plus",
      title: formatMessage({
        id: 'generic_icons.expand',
        defaultMessage: 'Expand Icon'
      })
    }), react_default.a.createElement("i", {
      className: "fa fa-minus",
      title: formatMessage({
        id: 'generic_icons.collapse',
        defaultMessage: 'Collapse Icon'
      })
    }))), react_default.a.createElement("div", {
      ref: "centerChannelStyles",
      className: "theme-elements__body"
    }, centerChannelElements)), react_default.a.createElement("div", {
      className: "theme-elements row form-group"
    }, react_default.a.createElement("div", {
      ref: "linkAndButtonStylesHeader",
      className: "theme-elements__header",
      onClick: this.toggleLinkAndButtonStyles
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "user.settings.custom_theme.linkButtonTitle",
      defaultMessage: "Link and Button Styles"
    }), react_default.a.createElement("div", {
      className: "header__icon"
    }, react_default.a.createElement("i", {
      className: "fa fa-plus",
      title: formatMessage({
        id: 'generic_icons.expand',
        defaultMessage: 'Expand Icon'
      })
    }), react_default.a.createElement("i", {
      className: "fa fa-minus",
      title: formatMessage({
        id: 'generic_icons.collapse',
        defaultMessage: 'Collapse Icon'
      })
    }))), react_default.a.createElement("div", {
      ref: "linkAndButtonStyles",
      className: "theme-elements__body"
    }, linkAndButtonElements)), react_default.a.createElement("div", {
      className: "row"
    }, pasteBox));
  }

}

custom_theme_chooser_defineProperty(custom_theme_chooser_CustomThemeChooser, "propTypes", {
  theme: prop_types_default.a.object.isRequired,
  updateTheme: prop_types_default.a.func.isRequired
});

custom_theme_chooser_defineProperty(custom_theme_chooser_CustomThemeChooser, "contextTypes", {
  intl: index_es["i" /* intlShape */].isRequired
});
// CONCATENATED MODULE: ./components/user_settings/display/user_settings_theme/premade_theme_chooser/premade_theme_chooser.jsx
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





class premade_theme_chooser_PremadeThemeChooser extends react_default.a.Component {
  render() {
    const theme = this.props.theme;
    const premadeThemes = [];
    const allowedThemes = this.props.allowedThemes;
    const hasAllowedThemes = allowedThemes.length > 1 || allowedThemes[0] && allowedThemes[0].trim().length > 0;

    for (const k in constants["N" /* default */].THEMES) {
      if (constants["N" /* default */].THEMES.hasOwnProperty(k)) {
        if (hasAllowedThemes && allowedThemes.indexOf(k) < 0) {
          continue;
        }

        const premadeTheme = jquery_default.a.extend(true, {}, constants["N" /* default */].THEMES[k]);
        let activeClass = '';

        if (premadeTheme.type === theme.type) {
          activeClass = 'active';
        }

        premadeThemes.push(react_default.a.createElement("div", {
          className: "col-xs-6 col-sm-3 premade-themes",
          key: 'premade-theme-key' + k
        }, react_default.a.createElement("div", {
          id: `premadeTheme${premadeTheme.type.replace(' ', '')}`,
          className: activeClass,
          onClick: () => this.props.updateTheme(premadeTheme)
        }, react_default.a.createElement("label", null, react_default.a.createElement("img", {
          alt: 'premade theme ' + k,
          className: "img-responsive",
          src: premadeTheme.image
        }), react_default.a.createElement("div", {
          className: "theme-label"
        }, utils["qb" /* toTitleCase */](premadeTheme.type))))));
      }
    }

    return react_default.a.createElement("div", {
      className: "row appearance-section"
    }, react_default.a.createElement("div", {
      className: "clearfix"
    }, premadeThemes));
  }

}
premade_theme_chooser_PremadeThemeChooser.propTypes = {
  theme: prop_types_default.a.object.isRequired,
  updateTheme: prop_types_default.a.func.isRequired,
  allowedThemes: prop_types_default.a.arrayOf(prop_types_default.a.string)
};
premade_theme_chooser_PremadeThemeChooser.defaultProps = {
  allowedThemes: []
};
// CONCATENATED MODULE: ./components/user_settings/display/user_settings_theme/premade_theme_chooser/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.




function premade_theme_chooser_mapStateToProps(state) {
  const config = Object(general["getConfig"])(state);
  const allowedThemes = config.AllowedThemes && config.AllowedThemes.split(',') || [];
  return {
    allowedThemes
  };
}

/* harmony default export */ var premade_theme_chooser = (Object(es["connect"])(premade_theme_chooser_mapStateToProps)(premade_theme_chooser_PremadeThemeChooser));
// CONCATENATED MODULE: ./components/user_settings/display/user_settings_theme/user_settings_theme.jsx
function user_settings_theme_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.












class user_settings_theme_ThemeSetting extends react_default.a.Component {
  constructor(props) {
    super(props);

    user_settings_theme_defineProperty(this, "submitTheme", async () => {
      const teamId = this.state.applyToAllTeams ? '' : this.props.currentTeamId;
      this.setState({
        isSaving: true
      }); // console.log(teamId, this.props, this.state.theme, '------set theme');

      await this.props.actions.saveTheme(teamId, this.state.theme);

      if (this.state.applyToAllTeams) {
        await this.props.actions.deleteTeamSpecificThemes();
      }

      this.props.setRequireConfirm(false);
      this.originalTheme = Object.assign({}, this.state.theme);
      this.scrollToTop();
      this.props.updateSection('');
      this.setState({
        isSaving: false
      });
    });

    user_settings_theme_defineProperty(this, "updateTheme", theme => {
      let themeChanged = this.state.theme.length === theme.length;

      if (!themeChanged) {
        for (const field in theme) {
          if (theme.hasOwnProperty(field)) {
            if (this.state.theme[field] !== theme[field]) {
              themeChanged = true;
              break;
            }
          }
        }
      }

      this.props.setRequireConfirm(themeChanged);
      this.setState({
        theme
      });
      utils["b" /* applyTheme */](theme);
    });

    user_settings_theme_defineProperty(this, "resetFields", () => {
      const state = this.getStateFromProps();
      state.serverError = null;
      this.setState(state);
      this.scrollToTop();
      utils["b" /* applyTheme */](state.theme);
      this.props.setRequireConfirm(false);
    });

    user_settings_theme_defineProperty(this, "handleImportModal", () => {
      app_dispatcher["a" /* default */].handleViewAction({
        type: constants["b" /* ActionTypes */].TOGGLE_IMPORT_THEME_MODAL,
        value: true,
        callback: this.updateTheme
      });
      this.props.setEnforceFocus(false);
    });

    user_settings_theme_defineProperty(this, "handleUpdateSection", section => {
      this.props.updateSection(section);
    });

    this.state = { ...this.getStateFromProps(props),
      isSaving: false
    }; // console.log(props, '---props')

    this.originalTheme = Object.assign({}, this.state.theme);
  }

  componentDidMount() {
    if (this.props.selected) {
      jquery_default()(react_dom_default.a.findDOMNode(this.refs[this.state.theme])).addClass('active-border');
    }
  }

  componentDidUpdate() {
    if (this.props.selected) {
      jquery_default()('.color-btn').removeClass('active-border');
      jquery_default()(react_dom_default.a.findDOMNode(this.refs[this.state.theme])).addClass('active-border');
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    // eslint-disable-line camelcase
    if (this.props.selected && !nextProps.selected) {
      this.resetFields();
    }
  }

  componentWillUnmount() {
    if (this.props.selected) {
      utils["b" /* applyTheme */](this.props.theme);
    }
  }

  getStateFromProps(props = this.props) {
    const theme = { ...props.theme
    };

    if (!theme.codeTheme) {
      theme.codeTheme = constants["g" /* Constants */].DEFAULT_CODE_THEME;
    }

    return {
      theme,
      type: theme.type || 'premade',
      showAllTeamsCheckbox: props.showAllTeamsCheckbox,
      applyToAllTeams: props.applyToAllTeams
    };
  }

  scrollToTop() {
    jquery_default()('.ps-container.modal-body').scrollTop(0);
  }

  updateType(type) {
    this.setState({
      type
    });
  }

  render() {
    let serverError;

    if (this.state.serverError) {
      serverError = this.state.serverError;
    }

    const displayCustom = this.state.type === 'custom';
    let custom;
    let premade;

    if (displayCustom && this.props.allowCustomThemes) {
      custom = react_default.a.createElement("div", {
        key: "customThemeChooser"
      }, react_default.a.createElement(custom_theme_chooser_CustomThemeChooser, {
        theme: this.state.theme,
        updateTheme: this.updateTheme
      }));
    } else {
      premade = react_default.a.createElement("div", {
        key: "premadeThemeChooser"
      }, react_default.a.createElement("br", null), react_default.a.createElement(premade_theme_chooser, {
        theme: this.state.theme,
        updateTheme: this.updateTheme
      }));
    }

    let themeUI;

    if (this.props.selected) {
      const inputs = [];

      if (this.props.allowCustomThemes) {
        inputs.push(react_default.a.createElement("div", {
          className: "radio",
          key: "premadeThemeColorLabel"
        }, react_default.a.createElement("label", null, react_default.a.createElement("input", {
          id: "standardThemes",
          type: "radio",
          name: "theme",
          checked: !displayCustom,
          onChange: this.updateType.bind(this, 'premade')
        }), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.display.theme.themeColors",
          defaultMessage: "Theme Colors"
        })), react_default.a.createElement("br", null)));
      }

      inputs.push(premade);

      if (this.props.allowCustomThemes) {
        inputs.push(react_default.a.createElement("div", {
          className: "radio",
          key: "customThemeColorLabel"
        }, react_default.a.createElement("label", null, react_default.a.createElement("input", {
          id: "customThemes",
          type: "radio",
          name: "theme",
          checked: displayCustom,
          onChange: this.updateType.bind(this, 'custom')
        }), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.display.theme.customTheme",
          defaultMessage: "Custom Theme"
        }))));
        inputs.push(custom);
        inputs.push(react_default.a.createElement("div", {
          key: "otherThemes"
        }, react_default.a.createElement("br", null), react_default.a.createElement("a", {
          id: "otherThemes",
          href: "http://docs.mattermost.com/help/settings/theme-colors.html#custom-theme-examples",
          target: "_blank",
          rel: "noopener noreferrer"
        }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.display.theme.otherThemes",
          defaultMessage: "See other themes"
        }))));
        inputs.push(react_default.a.createElement("div", {
          key: "importSlackThemeButton",
          className: "padding-top"
        }, react_default.a.createElement("a", {
          id: "slackImportTheme",
          className: "theme",
          onClick: this.handleImportModal
        }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.display.theme.import",
          defaultMessage: "Import theme colors from Slack"
        }))));
      }

      let allTeamsCheckbox = null;

      if (this.state.showAllTeamsCheckbox) {
        allTeamsCheckbox = react_default.a.createElement("div", {
          className: "checkbox user-settings__submit-checkbox"
        }, react_default.a.createElement("label", null, react_default.a.createElement("input", {
          id: "applyThemeToAllTeams",
          type: "checkbox",
          checked: this.state.applyToAllTeams,
          onChange: e => this.setState({
            applyToAllTeams: e.target.checked
          })
        }), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.display.theme.applyToAllTeams",
          defaultMessage: "Apply new theme to all my teams"
        })));
      }

      themeUI = react_default.a.createElement(setting_item_max["a" /* default */], {
        inputs: inputs,
        submitExtra: allTeamsCheckbox,
        submit: this.submitTheme,
        saving: this.state.isSaving,
        server_error: serverError,
        width: "full",
        updateSection: this.handleUpdateSection
      });
    } else {
      themeUI = react_default.a.createElement(setting_item_min["a" /* default */], {
        title: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.display.theme.title",
          defaultMessage: "Theme"
        }),
        describe: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.display.theme.describe",
          defaultMessage: "Open to manage your theme"
        }),
        section: 'theme',
        updateSection: this.handleUpdateSection,
        focused: this.props.focused
      });
    }

    return themeUI;
  }

}

user_settings_theme_defineProperty(user_settings_theme_ThemeSetting, "propTypes", {
  actions: prop_types_default.a.shape({
    saveTheme: prop_types_default.a.func.isRequired,
    deleteTeamSpecificThemes: prop_types_default.a.func.isRequired
  }).isRequired,
  currentTeamId: prop_types_default.a.string.isRequired,
  theme: prop_types_default.a.object,
  selected: prop_types_default.a.bool.isRequired,
  updateSection: prop_types_default.a.func.isRequired,
  setRequireConfirm: prop_types_default.a.func.isRequired,
  setEnforceFocus: prop_types_default.a.func.isRequired,
  allowCustomThemes: prop_types_default.a.bool,
  focused: prop_types_default.a.bool.isRequired
});
// CONCATENATED MODULE: ./components/user_settings/display/user_settings_theme/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.








function user_settings_theme_makeMapStateToProps() {
  const getThemeCategory = Object(entities_preferences["makeGetCategory"])();
  return state => {
    return {
      currentTeamId: Object(teams["getCurrentTeamId"])(state),
      theme: Object(entities_preferences["getTheme"])(state),
      applyToAllTeams: getThemeCategory(state, constants["w" /* Preferences */].CATEGORY_THEME).length <= 1,
      showAllTeamsCheckbox: Object(teams["getMyTeamsCount"])(state) > 1
    };
  };
}

function user_settings_theme_mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux["bindActionCreators"])({
      saveTheme: actions_preferences["saveTheme"],
      deleteTeamSpecificThemes: actions_preferences["deleteTeamSpecificThemes"]
    }, dispatch)
  };
}

/* harmony default export */ var user_settings_theme = (Object(es["connect"])(user_settings_theme_makeMapStateToProps, user_settings_theme_mapDispatchToProps)(user_settings_theme_ThemeSetting));
// EXTERNAL MODULE: ./components/suggestion/suggestion_box.jsx
var suggestion_box = __webpack_require__(1652);

// EXTERNAL MODULE: ./components/suggestion/suggestion_list.jsx
var suggestion_list = __webpack_require__(1667);

// EXTERNAL MODULE: ./components/suggestion/provider.jsx
var provider = __webpack_require__(1597);

// EXTERNAL MODULE: ./components/suggestion/suggestion.jsx
var suggestion = __webpack_require__(1598);

// CONCATENATED MODULE: ./components/suggestion/timezone_provider.jsx
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






class timezone_provider_TimezoneSuggestion extends suggestion["a" /* default */] {
  render() {
    const {
      item,
      isSelection
    } = this.props;
    const timezone = item;
    let className = 'mentions__name';

    if (isSelection) {
      className += ' suggestion--selected';
    }

    return react_default.a.createElement("div", _extends({
      onClick: this.handleClick,
      className: className
    }, suggestion["a" /* default */].baseProps), timezone);
  }

}

class timezone_provider_TimezoneProvider extends provider["a" /* default */] {
  handlePretextChanged(timezonePrefix, resultsCallback) {
    if (timezonePrefix.length === 0) {
      this.displayAllTimezones(resultsCallback, timezonePrefix);
      return true;
    }

    if (timezonePrefix) {
      this.filterTimezones(resultsCallback, timezonePrefix);
      return true;
    }

    return false;
  }

  async displayAllTimezones(resultsCallback) {
    resultsCallback({
      matchedPretext: '',
      terms: Object(utils_timezone["c" /* getSupportedTimezones */])(),
      items: Object(utils_timezone["c" /* getSupportedTimezones */])(),
      component: timezone_provider_TimezoneSuggestion
    });
  }

  async filterTimezones(resultsCallback, timezonePrefix) {
    const filteredTimezones = Object(utils_timezone["c" /* getSupportedTimezones */])().filter(t => Object(timezone_utils["getTimezoneRegion"])(t).toLowerCase().indexOf(timezonePrefix) >= 0 || t.toLowerCase().indexOf(timezonePrefix) >= 0);
    resultsCallback({
      matchedPretext: timezonePrefix,
      terms: filteredTimezones,
      items: filteredTimezones,
      component: timezone_provider_TimezoneSuggestion
    });
  }

}
// CONCATENATED MODULE: ./components/user_settings/display/manage_timezones/manage_timezones.jsx
function manage_timezones_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.









class manage_timezones_ManageTimezones extends react_default.a.PureComponent {
  constructor(props) {
    super(props);

    manage_timezones_defineProperty(this, "onChange", e => {
      this.setState({
        manualTimezoneInput: e.target.value
      });
    });

    manage_timezones_defineProperty(this, "handleTimezoneSelected", selected => {
      if (!selected) {
        return;
      }

      this.setState({
        manualTimezone: selected,
        manualTimezoneInput: selected
      });
    });

    manage_timezones_defineProperty(this, "timezoneNotChanged", () => {
      const {
        useAutomaticTimezone,
        automaticTimezone,
        manualTimezone
      } = this.state;
      const {
        useAutomaticTimezone: oldUseAutomaticTimezone,
        automaticTimezone: oldAutomaticTimezone,
        manualTimezone: oldManualTimezone
      } = this.props;
      return useAutomaticTimezone === oldUseAutomaticTimezone && automaticTimezone === oldAutomaticTimezone && manualTimezone === oldManualTimezone;
    });

    manage_timezones_defineProperty(this, "changeTimezone", () => {
      if (this.timezoneNotChanged()) {
        this.props.updateSection('');
        return;
      }

      this.submitUser();
    });

    manage_timezones_defineProperty(this, "submitUser", () => {
      const {
        user,
        actions
      } = this.props;
      const {
        useAutomaticTimezone,
        automaticTimezone,
        manualTimezone
      } = this.state;
      const timezone = {
        useAutomaticTimezone: useAutomaticTimezone.toString(),
        automaticTimezone,
        manualTimezone
      };
      const updatedUser = { ...user,
        timezone
      };
      actions.updateMe(updatedUser).then(({
        data,
        error: err
      }) => {
        if (data) {
          this.props.updateSection('');
        } else if (err) {
          let serverError;

          if (err.message) {
            serverError = err.message;
          } else {
            serverError = err;
          }

          this.setState({
            serverError,
            isSaving: false
          });
        }
      });
    });

    manage_timezones_defineProperty(this, "handleAutomaticTimezone", e => {
      const useAutomaticTimezone = e.target.checked;
      let automaticTimezone = '';

      if (useAutomaticTimezone) {
        automaticTimezone = Object(utils_timezone["a" /* getBrowserTimezone */])();
      }

      this.setState({
        useAutomaticTimezone,
        automaticTimezone
      });
    });

    manage_timezones_defineProperty(this, "handleManualTimezone", e => {
      this.setState({
        manualTimezone: e.target.value
      });
    });

    this.state = {
      useAutomaticTimezone: props.useAutomaticTimezone,
      automaticTimezone: props.automaticTimezone,
      manualTimezone: props.manualTimezone,
      manualTimezoneInput: props.manualTimezone,
      isSaving: false
    };
  }

  render() {
    const {
      timezones
    } = this.props;
    const {
      useAutomaticTimezone,
      automaticTimezone
    } = this.state;
    let serverError;

    if (this.state.serverError) {
      serverError = react_default.a.createElement("label", {
        className: "has-error"
      }, this.state.serverError);
    }

    const inputs = [];
    const timezoneRegion = react_default.a.createElement("div", {
      className: "section-describe padding-top"
    }, useAutomaticTimezone && Object(timezone_utils["getTimezoneRegion"])(automaticTimezone));
    const noTimezonesFromServer = timezones.length === 0;
    const automaticTimezoneInput = react_default.a.createElement("div", {
      className: "checkbox"
    }, react_default.a.createElement("label", null, react_default.a.createElement("input", {
      id: "automaticTimezoneInput",
      type: "checkbox",
      checked: useAutomaticTimezone,
      onChange: this.handleAutomaticTimezone,
      disabled: noTimezonesFromServer
    }), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "user.settings.timezones.automatic",
      defaultMessage: "Set automatically"
    }), timezoneRegion));
    const providers = [new timezone_provider_TimezoneProvider()];
    const manualTimezoneInput = react_default.a.createElement("div", {
      key: "changeTimezone"
    }, react_default.a.createElement("label", {
      className: "control-label"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "user.settings.timezones.change",
      defaultMessage: "Change timezone"
    })), react_default.a.createElement("div", {
      className: "padding-top"
    }, react_default.a.createElement(suggestion_box["a" /* default */], {
      ref: this.setSwitchBoxRef,
      className: "form-control focused",
      type: "search",
      onChange: this.onChange,
      value: this.state.manualTimezoneInput,
      onItemSelected: this.handleTimezoneSelected,
      listComponent: suggestion_list["a" /* default */],
      maxLength: "64",
      requiredCharacters: 0,
      providers: providers,
      listStyle: "bottom",
      completeOnTab: false,
      renderDividers: false,
      openOnFocus: true,
      disabled: noTimezonesFromServer
    }), serverError));
    inputs.push(automaticTimezoneInput);

    if (!useAutomaticTimezone) {
      inputs.push(manualTimezoneInput);
    }

    inputs.push(react_default.a.createElement("div", null, react_default.a.createElement("br", null), react_default.a.createElement(index_es["b" /* FormattedHTMLMessage */], {
      id: "user.settings.timezones.promote",
      defaultMessage: "Select the time zone used for timestamps in the user interface and email notifications."
    })));
    return react_default.a.createElement(setting_item_max["a" /* default */], {
      title: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "user.settings.display.timezone",
        defaultMessage: "Timezone"
      }),
      containerStyle: "timezone-container",
      width: "medium",
      submit: this.changeTimezone,
      saving: this.state.isSaving,
      inputs: inputs,
      updateSection: this.props.updateSection
    });
  }

}

manage_timezones_defineProperty(manage_timezones_ManageTimezones, "propTypes", {
  user: prop_types_default.a.object.isRequired,
  updateSection: prop_types_default.a.func.isRequired,
  useAutomaticTimezone: prop_types_default.a.bool.isRequired,
  automaticTimezone: prop_types_default.a.string.isRequired,
  manualTimezone: prop_types_default.a.string.isRequired,
  timezones: prop_types_default.a.array.isRequired,
  actions: prop_types_default.a.shape({
    updateMe: prop_types_default.a.func.isRequired
  }).isRequired
});
// CONCATENATED MODULE: ./components/user_settings/display/manage_timezones/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





function manage_timezones_mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux["bindActionCreators"])({
      updateMe: actions_users["updateMe"]
    }, dispatch)
  };
}

/* harmony default export */ var manage_timezones = (Object(es["connect"])(null, manage_timezones_mapDispatchToProps)(manage_timezones_ManageTimezones));
// EXTERNAL MODULE: ./components/formatted_markdown_message.jsx
var formatted_markdown_message = __webpack_require__(1564);

// CONCATENATED MODULE: ./components/user_settings/display/manage_languages/manage_languages.jsx
function manage_languages_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






class manage_languages_ManageLanguage extends react_default.a.Component {
  constructor(props) {
    super(props);

    manage_languages_defineProperty(this, "setLanguage", e => {
      this.setState({
        locale: e.target.value
      });
    });

    manage_languages_defineProperty(this, "changeLanguage", () => {
      if (this.props.user.locale === this.state.locale) {
        this.props.updateSection('');
      } else {
        this.submitUser({ ...this.props.user,
          locale: this.state.locale
        });
      }
    });

    manage_languages_defineProperty(this, "submitUser", user => {
      this.setState({
        isSaving: true
      });
      this.props.actions.updateMe(user).then(({
        data,
        error: err
      }) => {
        if (data) {// Do nothing since changing the locale essentially refreshes the page
        } else if (err) {
          let serverError;

          if (err.message) {
            serverError = err.message;
          } else {
            serverError = err;
          }

          this.setState({
            serverError,
            isSaving: false
          });
        }
      });
    });

    this.state = {
      locale: props.locale,
      isSaving: false
    };
  }

  render() {
    let serverError;

    if (this.state.serverError) {
      serverError = react_default.a.createElement("label", {
        className: "has-error"
      }, this.state.serverError);
    }

    const options = [];
    const locales = i18n["d" /* getLanguages */]();
    const languages = Object.keys(locales).map(l => {
      return {
        value: locales[l].value,
        name: locales[l].name,
        order: locales[l].order
      };
    }).sort((a, b) => a.order - b.order);
    languages.forEach(lang => {
      options.push(react_default.a.createElement("option", {
        key: lang.value,
        value: lang.value
      }, lang.name));
    });
    const input = react_default.a.createElement("div", {
      key: "changeLanguage"
    }, react_default.a.createElement("br", null), react_default.a.createElement("label", {
      className: "control-label"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "user.settings.languages.change",
      defaultMessage: "Change interface language"
    })), react_default.a.createElement("div", {
      className: "padding-top"
    }, react_default.a.createElement("select", {
      id: "displayLanguage",
      ref: "language",
      className: "form-control",
      value: this.state.locale,
      onChange: this.setLanguage
    }, options), serverError), react_default.a.createElement("div", null, react_default.a.createElement("br", null), react_default.a.createElement(formatted_markdown_message["b" /* default */], {
      id: "user.settings.languages.promote",
      defaultMessage: "Select which language Mattermost displays in the user interface.\\n \\nWould you like to help with translations? Join the [Mattermost Translation Server](!http://translate.mattermost.com/) to contribute."
    })));
    return react_default.a.createElement(setting_item_max["a" /* default */], {
      title: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "user.settings.display.language",
        defaultMessage: "Language"
      }),
      width: "medium",
      submit: this.changeLanguage,
      saving: this.state.isSaving,
      inputs: [input],
      updateSection: this.props.updateSection
    });
  }

}

manage_languages_defineProperty(manage_languages_ManageLanguage, "propTypes", {
  user: prop_types_default.a.object.isRequired,
  locale: prop_types_default.a.string.isRequired,
  updateSection: prop_types_default.a.func.isRequired,
  actions: prop_types_default.a.shape({
    updateMe: prop_types_default.a.func.isRequired
  }).isRequired
});
// CONCATENATED MODULE: ./components/user_settings/display/manage_languages/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





function manage_languages_mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux["bindActionCreators"])({
      updateMe: actions_users["updateMe"]
    }, dispatch)
  };
}

/* harmony default export */ var manage_languages = (Object(es["connect"])(null, manage_languages_mapDispatchToProps)(manage_languages_ManageLanguage));
// CONCATENATED MODULE: ./components/user_settings/display/user_settings_display.jsx
function user_settings_display_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.















const Preferences = constants["N" /* default */].Preferences;

function getDisplayStateFromProps(props) {
  return {
    militaryTime: props.militaryTime,
    teammateNameDisplay: props.teammateNameDisplay,
    channelDisplayMode: props.channelDisplayMode,
    messageDisplay: props.messageDisplay,
    collapseDisplay: props.collapseDisplay,
    linkPreviewDisplay: props.linkPreviewDisplay
  };
}

class user_settings_display_UserSettingsDisplay extends react_default.a.Component {
  constructor(props) {
    super(props);

    user_settings_display_defineProperty(this, "handleSubmit", async () => {
      const userId = this.props.user.id;
      const timePreference = {
        user_id: userId,
        category: Preferences.CATEGORY_DISPLAY_SETTINGS,
        name: Preferences.USE_MILITARY_TIME,
        value: this.state.militaryTime
      };
      const teammateNameDisplayPreference = {
        user_id: userId,
        category: Preferences.CATEGORY_DISPLAY_SETTINGS,
        name: Preferences.NAME_NAME_FORMAT,
        value: this.state.teammateNameDisplay
      };
      const channelDisplayModePreference = {
        user_id: userId,
        category: Preferences.CATEGORY_DISPLAY_SETTINGS,
        name: Preferences.CHANNEL_DISPLAY_MODE,
        value: this.state.channelDisplayMode
      };
      const messageDisplayPreference = {
        user_id: userId,
        category: Preferences.CATEGORY_DISPLAY_SETTINGS,
        name: Preferences.MESSAGE_DISPLAY,
        value: this.state.messageDisplay
      };
      const collapseDisplayPreference = {
        user_id: userId,
        category: Preferences.CATEGORY_DISPLAY_SETTINGS,
        name: Preferences.COLLAPSE_DISPLAY,
        value: this.state.collapseDisplay
      };
      const linkPreviewDisplayPreference = {
        user_id: userId,
        category: Preferences.CATEGORY_DISPLAY_SETTINGS,
        name: Preferences.LINK_PREVIEW_DISPLAY,
        value: this.state.linkPreviewDisplay
      };
      this.setState({
        isSaving: true
      });
      const preferences = [timePreference, channelDisplayModePreference, messageDisplayPreference, collapseDisplayPreference, linkPreviewDisplayPreference, teammateNameDisplayPreference];
      await this.props.actions.savePreferences(userId, preferences);
      this.updateSection('');
    });

    user_settings_display_defineProperty(this, "handleClockRadio", militaryTime => {
      this.setState({
        militaryTime
      });
    });

    user_settings_display_defineProperty(this, "handleTeammateNameDisplayRadio", teammateNameDisplay => {
      this.setState({
        teammateNameDisplay
      });
    });

    user_settings_display_defineProperty(this, "updateSection", section => {
      this.updateState();
      this.props.updateSection(section);
    });

    user_settings_display_defineProperty(this, "updateState", () => {
      const newState = getDisplayStateFromProps(this.props);

      if (!utils["c" /* areObjectsEqual */](newState, this.state)) {
        this.setState(newState);
      }

      this.setState({
        isSaving: false
      });
    });

    this.state = { ...getDisplayStateFromProps(props),
      isSaving: false
    };

    if (props.timezones.length === 0) {
      props.actions.getSupportedTimezones();
    }

    this.prevSections = {
      theme: 'dummySectionName',
      // dummy value that should never match any section name
      clock: 'theme',
      linkpreview: 'clock',
      message_display: 'linkpreview',
      channel_display_mode: 'message_display',
      languages: 'channel_display_mode'
    };
  }

  componentDidMount() {
    const {
      actions,
      enableTimezone,
      shouldAutoUpdateTimezone
    } = this.props;

    if (enableTimezone && shouldAutoUpdateTimezone) {
      actions.autoUpdateTimezone(Object(utils_timezone["a" /* getBrowserTimezone */])());
    }
  }

  handleChannelDisplayModeRadio(channelDisplayMode) {
    this.setState({
      channelDisplayMode
    });
  }

  handlemessageDisplayRadio(messageDisplay) {
    this.setState({
      messageDisplay
    });
  }

  handleCollapseRadio(collapseDisplay) {
    this.setState({
      collapseDisplay
    });
  }

  handleLinkPreviewRadio(linkPreviewDisplay) {
    this.setState({
      linkPreviewDisplay
    });
  }

  handleOnChange(display) {
    this.setState({ ...display
    });
  }

  createSection(props) {
    const {
      section,
      display,
      value,
      title,
      firstOption,
      secondOption,
      thirdOption,
      description
    } = props;
    const firstMessage = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: firstOption.radionButtonText.id,
      defaultMessage: firstOption.radionButtonText.message
    });
    let moreColon;
    let firstMessageMore;

    if (firstOption.radionButtonText.moreId) {
      moreColon = ': ';
      firstMessageMore = react_default.a.createElement("span", {
        className: "font-weight--normal"
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: firstOption.radionButtonText.moreId,
        defaultMessage: firstOption.radionButtonText.moreMessage
      }));
    }

    const secondMessage = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: secondOption.radionButtonText.id,
      defaultMessage: secondOption.radionButtonText.message
    });
    let secondMessageMore;

    if (secondOption.radionButtonText.moreId) {
      secondMessageMore = react_default.a.createElement("span", {
        className: "font-weight--normal"
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: secondOption.radionButtonText.moreId,
        defaultMessage: secondOption.radionButtonText.moreMessage
      }));
    }

    let thirdMessage;

    if (thirdOption) {
      thirdMessage = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: thirdOption.radionButtonText.id,
        defaultMessage: thirdOption.radionButtonText.message
      });
    }

    const messageTitle = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: title.id,
      defaultMessage: title.message
    });
    const messageDesc = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: description.id,
      defaultMessage: description.message
    });

    if (this.props.activeSection === section) {
      const format = [false, false, false];

      if (value === firstOption.value) {
        format[0] = true;
      } else if (value === secondOption.value) {
        format[1] = true;
      } else {
        format[2] = true;
      }

      const name = section + 'Format';
      const key = section + 'UserDisplay';
      const firstDisplay = {};
      firstDisplay[display] = firstOption.value;
      const secondDisplay = {};
      secondDisplay[display] = secondOption.value;
      const thirdDisplay = {};

      if (thirdOption) {
        thirdDisplay[display] = thirdOption.value;
      }

      let thirdSection;

      if (thirdMessage) {
        thirdSection = react_default.a.createElement("div", {
          className: "radio"
        }, react_default.a.createElement("label", null, react_default.a.createElement("input", {
          id: name + 'C',
          type: "radio",
          name: name,
          checked: format[2],
          onChange: () => this.handleOnChange(thirdDisplay)
        }), thirdMessage), react_default.a.createElement("br", null));
      }

      const inputs = [react_default.a.createElement("div", {
        key: key
      }, react_default.a.createElement("div", {
        className: "radio"
      }, react_default.a.createElement("label", null, react_default.a.createElement("input", {
        id: name + 'A',
        type: "radio",
        name: name,
        checked: format[0],
        onChange: () => this.handleOnChange(firstDisplay)
      }), firstMessage, moreColon, firstMessageMore), react_default.a.createElement("br", null)), react_default.a.createElement("div", {
        className: "radio"
      }, react_default.a.createElement("label", null, react_default.a.createElement("input", {
        id: name + 'B',
        type: "radio",
        name: name,
        checked: format[1],
        onChange: () => this.handleOnChange(secondDisplay)
      }), secondMessage, moreColon, secondMessageMore), react_default.a.createElement("br", null)), thirdSection, react_default.a.createElement("div", null, react_default.a.createElement("br", null), messageDesc))];
      return react_default.a.createElement("div", null, react_default.a.createElement(setting_item_max["a" /* default */], {
        title: messageTitle,
        inputs: inputs,
        submit: this.handleSubmit,
        saving: this.state.isSaving,
        server_error: this.state.serverError,
        updateSection: this.updateSection
      }), react_default.a.createElement("div", {
        className: "divider-dark"
      }));
    }

    let describe;

    if (value === firstOption.value) {
      describe = firstMessage;
    } else if (value === secondOption.value) {
      describe = secondMessage;
    } else {
      describe = thirdMessage;
    }

    return react_default.a.createElement("div", null, react_default.a.createElement(setting_item_min["a" /* default */], {
      title: messageTitle,
      describe: describe,
      focused: this.props.prevActiveSection === this.prevSections[section],
      section: section,
      updateSection: this.updateSection
    }), react_default.a.createElement("div", {
      className: "divider-dark"
    }));
  }

  render() {
    // console.log(this.props, '--------display props');
    const collapseSection = this.createSection({
      section: 'collapse',
      display: 'collapseDisplay',
      value: this.state.collapseDisplay,
      defaultDisplay: 'false',
      title: {
        id: Object(utils_i18n["b" /* t */])('user.settings.display.collapseDisplay'),
        message: 'Default appearance of image previews'
      },
      firstOption: {
        value: 'false',
        radionButtonText: {
          id: Object(utils_i18n["b" /* t */])('user.settings.display.collapseOn'),
          message: 'On'
        }
      },
      secondOption: {
        value: 'true',
        radionButtonText: {
          id: Object(utils_i18n["b" /* t */])('user.settings.display.collapseOff'),
          message: 'Off'
        }
      },
      description: {
        id: Object(utils_i18n["b" /* t */])('user.settings.display.collapseDesc'),
        message: 'Set whether previews of image links and image attachment thumbnails show as expanded or collapsed by default. This setting can also be controlled using the slash commands /expand and /collapse.'
      }
    });
    let linkPreviewSection = null;

    if (this.props.enableLinkPreviews) {
      linkPreviewSection = this.createSection({
        section: 'linkpreview',
        display: 'linkPreviewDisplay',
        value: this.state.linkPreviewDisplay,
        defaultDisplay: 'true',
        title: {
          id: Object(utils_i18n["b" /* t */])('user.settings.display.linkPreviewDisplay'),
          message: 'Website Link Previews'
        },
        firstOption: {
          value: 'true',
          radionButtonText: {
            id: Object(utils_i18n["b" /* t */])('user.settings.display.linkPreviewOn'),
            message: 'On'
          }
        },
        secondOption: {
          value: 'false',
          radionButtonText: {
            id: Object(utils_i18n["b" /* t */])('user.settings.display.linkPreviewOff'),
            message: 'Off'
          }
        },
        description: {
          id: Object(utils_i18n["b" /* t */])('user.settings.display.linkPreviewDesc'),
          message: 'When available, the first web link in a message will show a preview of the website content below the message.'
        }
      });
      this.prevSections.message_display = 'linkpreview';
    } else {
      this.prevSections.message_display = this.prevSections.linkpreview;
    }

    const clockSection = this.createSection({
      section: 'clock',
      display: 'militaryTime',
      value: this.state.militaryTime,
      defaultDisplay: 'false',
      title: {
        id: Object(utils_i18n["b" /* t */])('user.settings.display.clockDisplay'),
        message: 'Clock Display'
      },
      firstOption: {
        value: 'false',
        radionButtonText: {
          id: Object(utils_i18n["b" /* t */])('user.settings.display.normalClock'),
          message: '12-hour clock (example: 4:00 PM)'
        }
      },
      secondOption: {
        value: 'true',
        radionButtonText: {
          id: Object(utils_i18n["b" /* t */])('user.settings.display.militaryClock'),
          message: '24-hour clock (example: 16:00)'
        }
      },
      description: {
        id: Object(utils_i18n["b" /* t */])('user.settings.display.preferTime'),
        message: 'Select how you prefer time displayed.'
      }
    });
    const teammateNameDisplaySection = this.createSection({
      section: Preferences.NAME_NAME_FORMAT,
      display: 'teammateNameDisplay',
      value: this.state.teammateNameDisplay,
      defaultDisplay: this.props.configTeammateNameDisplay,
      title: {
        id: Object(utils_i18n["b" /* t */])('user.settings.display.teammateNameDisplayTitle'),
        message: 'Teammate Name Display'
      },
      firstOption: {
        value: constants["N" /* default */].TEAMMATE_NAME_DISPLAY.SHOW_USERNAME,
        radionButtonText: {
          id: Object(utils_i18n["b" /* t */])('user.settings.display.teammateNameDisplayUsername'),
          message: 'Show username'
        }
      },
      secondOption: {
        value: constants["N" /* default */].TEAMMATE_NAME_DISPLAY.SHOW_NICKNAME_FULLNAME,
        radionButtonText: {
          id: Object(utils_i18n["b" /* t */])('user.settings.display.teammateNameDisplayNicknameFullname'),
          message: 'Show nickname if one exists, otherwise show first and last name'
        }
      },
      thirdOption: {
        value: constants["N" /* default */].TEAMMATE_NAME_DISPLAY.SHOW_FULLNAME,
        radionButtonText: {
          id: Object(utils_i18n["b" /* t */])('user.settings.display.teammateNameDisplayFullname'),
          message: 'Show first and last name'
        }
      },
      description: {
        id: Object(utils_i18n["b" /* t */])('user.settings.display.teammateNameDisplayDescription'),
        message: 'Set how to display other user\'s names in posts and the Direct Messages list.'
      }
    });
    let timezoneSelection;

    if (this.props.enableTimezone && !this.props.shouldAutoUpdateTimezone) {
      const userTimezone = this.props.userTimezone;

      if (this.props.activeSection === 'timezone') {
        timezoneSelection = react_default.a.createElement("div", null, react_default.a.createElement(manage_timezones, {
          user: this.props.user,
          timezones: this.props.timezones,
          useAutomaticTimezone: userTimezone.useAutomaticTimezone,
          automaticTimezone: userTimezone.automaticTimezone,
          manualTimezone: userTimezone.manualTimezone,
          updateSection: this.updateSection
        }), react_default.a.createElement("div", {
          className: "divider-dark"
        }));
      } else {
        timezoneSelection = react_default.a.createElement("div", null, react_default.a.createElement(setting_item_min["a" /* default */], {
          title: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "user.settings.display.timezone",
            defaultMessage: "Timezone"
          }),
          width: "medium",
          describe: Object(timezone_utils["getTimezoneRegion"])(this.props.currentUserTimezone),
          section: 'timezone',
          updateSection: this.updateSection
        }), react_default.a.createElement("div", {
          className: "divider-dark"
        }));
      }
    }

    const messageDisplaySection = this.createSection({
      section: Preferences.MESSAGE_DISPLAY,
      display: 'messageDisplay',
      value: this.state.messageDisplay,
      defaultDisplay: Preferences.MESSAGE_DISPLAY_CLEAN,
      title: {
        id: Object(utils_i18n["b" /* t */])('user.settings.display.messageDisplayTitle'),
        message: 'Message Display'
      },
      firstOption: {
        value: Preferences.MESSAGE_DISPLAY_CLEAN,
        radionButtonText: {
          id: Object(utils_i18n["b" /* t */])('user.settings.display.messageDisplayClean'),
          message: 'Standard',
          moreId: Object(utils_i18n["b" /* t */])('user.settings.display.messageDisplayCleanDes'),
          moreMessage: 'Easy to scan and read.'
        }
      },
      secondOption: {
        value: Preferences.MESSAGE_DISPLAY_COMPACT,
        radionButtonText: {
          id: Object(utils_i18n["b" /* t */])('user.settings.display.messageDisplayCompact'),
          message: 'Compact',
          moreId: Object(utils_i18n["b" /* t */])('user.settings.display.messageDisplayCompactDes'),
          moreMessage: 'Fit as many messages on the screen as we can.'
        }
      },
      description: {
        id: Object(utils_i18n["b" /* t */])('user.settings.display.messageDisplayDescription'),
        message: 'Select how messages in a channel should be displayed.'
      }
    });
    const channelDisplayModeSection = this.createSection({
      section: Preferences.CHANNEL_DISPLAY_MODE,
      display: 'channelDisplayMode',
      value: this.state.channelDisplayMode,
      defaultDisplay: Preferences.CHANNEL_DISPLAY_MODE_FULL_SCREEN,
      title: {
        id: Object(utils_i18n["b" /* t */])('user.settings.display.channelDisplayTitle'),
        message: 'Channel Display'
      },
      firstOption: {
        value: Preferences.CHANNEL_DISPLAY_MODE_FULL_SCREEN,
        radionButtonText: {
          id: Object(utils_i18n["b" /* t */])('user.settings.display.fullScreen'),
          message: 'Full width'
        }
      },
      secondOption: {
        value: Preferences.CHANNEL_DISPLAY_MODE_CENTERED,
        radionButtonText: {
          id: Object(utils_i18n["b" /* t */])('user.settings.display.fixedWidthCentered'),
          message: 'Fixed width, centered'
        }
      },
      description: {
        id: Object(utils_i18n["b" /* t */])('user.settings.display.channeldisplaymode'),
        message: 'Select the width of the center channel.'
      }
    });
    let languagesSection;
    let userLocale = this.props.user.locale;

    if (this.props.activeSection === 'languages') {
      if (!i18n["e" /* isLanguageAvailable */](userLocale)) {
        userLocale = this.props.defaultClientLocale;
      }

      languagesSection = react_default.a.createElement("div", null, react_default.a.createElement(manage_languages, {
        user: this.props.user,
        locale: userLocale,
        updateSection: this.updateSection
      }), react_default.a.createElement("div", {
        className: "divider-dark"
      }));
    } else {
      let locale;

      if (i18n["e" /* isLanguageAvailable */](userLocale)) {
        locale = i18n["c" /* getLanguageInfo */](userLocale).name;
      } else {
        locale = i18n["c" /* getLanguageInfo */](this.props.defaultClientLocale).name;
      }

      languagesSection = react_default.a.createElement("div", null, react_default.a.createElement(setting_item_min["a" /* default */], {
        title: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.display.language",
          defaultMessage: "Language"
        }),
        width: "medium",
        describe: locale,
        focused: this.props.prevActiveSection === this.prevSections.languages,
        section: 'languages',
        updateSection: this.updateSection
      }), react_default.a.createElement("div", {
        className: "divider-dark"
      }));
    }

    if (Object.keys(i18n["d" /* getLanguages */]()).length === 1) {
      languagesSection = null;
    }

    let themeSection;

    if (this.props.enableThemeSelection) {
      themeSection = react_default.a.createElement("div", null, react_default.a.createElement(user_settings_theme, {
        selected: this.props.activeSection === 'theme',
        updateSection: this.updateSection,
        setRequireConfirm: this.props.setRequireConfirm,
        setEnforceFocus: this.props.setEnforceFocus,
        allowCustomThemes: this.props.allowCustomThemes,
        focused: this.props.prevActiveSection === this.prevSections.theme
      }), react_default.a.createElement("div", {
        className: "divider-dark"
      }));
    }

    return react_default.a.createElement("div", {
      id: "displaySettings"
    }, react_default.a.createElement("div", {
      className: "modal-header"
    }, react_default.a.createElement("button", {
      id: "closeButton",
      type: "button",
      className: "close",
      "data-dismiss": "modal",
      "aria-label": "Close",
      onClick: this.props.closeModal
    }, react_default.a.createElement("span", {
      "aria-hidden": "true"
    }, '×')), react_default.a.createElement("h4", {
      className: "modal-title",
      ref: "title"
    }, react_default.a.createElement("div", {
      className: "modal-back"
    }, react_default.a.createElement("span", {
      onClick: this.props.collapseModal
    }, react_default.a.createElement(back_icon["a" /* default */], null))), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "user.settings.display.title",
      defaultMessage: "Display Settings"
    }))), react_default.a.createElement("div", {
      className: "user-settings"
    }, react_default.a.createElement("h3", {
      id: "displaySettingsTitle",
      className: "tab-header"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "user.settings.display.title",
      defaultMessage: "Display Settings"
    })), react_default.a.createElement("div", {
      className: "divider-dark first"
    }), themeSection, clockSection, teammateNameDisplaySection, timezoneSelection, linkPreviewSection, collapseSection, messageDisplaySection, channelDisplayModeSection, languagesSection));
  }

}

user_settings_display_defineProperty(user_settings_display_UserSettingsDisplay, "propTypes", {
  user: prop_types_default.a.object,
  updateSection: prop_types_default.a.func,
  activeSection: prop_types_default.a.string,
  prevActiveSection: prop_types_default.a.string,
  closeModal: prop_types_default.a.func.isRequired,
  collapseModal: prop_types_default.a.func.isRequired,
  setRequireConfirm: prop_types_default.a.func.isRequired,
  setEnforceFocus: prop_types_default.a.func.isRequired,
  timezones: prop_types_default.a.array.isRequired,
  userTimezone: prop_types_default.a.object.isRequired,
  allowCustomThemes: prop_types_default.a.bool,
  enableLinkPreviews: prop_types_default.a.bool,
  defaultClientLocale: prop_types_default.a.string,
  enableThemeSelection: prop_types_default.a.bool,
  configTeammateNameDisplay: prop_types_default.a.string,
  currentUserTimezone: prop_types_default.a.string,
  enableTimezone: prop_types_default.a.bool,
  shouldAutoUpdateTimezone: prop_types_default.a.bool,
  militaryTime: prop_types_default.a.string,
  teammateNameDisplay: prop_types_default.a.string,
  channelDisplayMode: prop_types_default.a.string,
  messageDisplay: prop_types_default.a.string,
  collapseDisplay: prop_types_default.a.string,
  linkPreviewDisplay: prop_types_default.a.string,
  actions: prop_types_default.a.shape({
    getSupportedTimezones: prop_types_default.a.func.isRequired,
    autoUpdateTimezone: prop_types_default.a.func.isRequired,
    savePreferences: prop_types_default.a.func.isRequired
  }).isRequired
});
// CONCATENATED MODULE: ./components/user_settings/display/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.













function display_mapStateToProps(state) {
  const config = Object(general["getConfig"])(state);
  const timezones = Object(general["getSupportedTimezones"])(state);
  const currentUserId = Object(users["getCurrentUserId"])(state);
  const userTimezone = Object(entities_timezone["getUserTimezone"])(state, currentUserId);
  const automaticTimezoneNotSet = userTimezone && userTimezone.useAutomaticTimezone && !userTimezone.automaticTimezone;
  const shouldAutoUpdateTimezone = !userTimezone || automaticTimezoneNotSet;
  const allowCustomThemes = config.AllowCustomThemes === 'true';
  const enableLinkPreviews = config.EnableLinkPreviews === 'true';
  const defaultClientLocale = config.DefaultClientLocale;
  const enableThemeSelection = config.EnableThemeSelection === 'true';
  const enableTimezone = config.ExperimentalTimezone === 'true';
  const configTeammateNameDisplay = config.TeammateNameDisplay;
  return {
    allowCustomThemes,
    configTeammateNameDisplay,
    enableLinkPreviews,
    defaultClientLocale,
    enableThemeSelection,
    enableTimezone,
    timezones,
    userTimezone,
    shouldAutoUpdateTimezone,
    currentUserTimezone: Object(timezone_utils["getUserCurrentTimezone"])(userTimezone),
    militaryTime: Object(entities_preferences["get"])(state, constants["w" /* Preferences */].CATEGORY_DISPLAY_SETTINGS, constants["w" /* Preferences */].USE_MILITARY_TIME, constants["w" /* Preferences */].USE_MILITARY_TIME_DEFAULT),
    teammateNameDisplay: Object(entities_preferences["get"])(state, constants["w" /* Preferences */].CATEGORY_DISPLAY_SETTINGS, constants["w" /* Preferences */].NAME_NAME_FORMAT, configTeammateNameDisplay),
    channelDisplayMode: Object(entities_preferences["get"])(state, constants["w" /* Preferences */].CATEGORY_DISPLAY_SETTINGS, constants["w" /* Preferences */].CHANNEL_DISPLAY_MODE, constants["w" /* Preferences */].CHANNEL_DISPLAY_MODE_DEFAULT),
    messageDisplay: Object(entities_preferences["get"])(state, constants["w" /* Preferences */].CATEGORY_DISPLAY_SETTINGS, constants["w" /* Preferences */].MESSAGE_DISPLAY, constants["w" /* Preferences */].MESSAGE_DISPLAY_DEFAULT),
    collapseDisplay: Object(entities_preferences["get"])(state, constants["w" /* Preferences */].CATEGORY_DISPLAY_SETTINGS, constants["w" /* Preferences */].COLLAPSE_DISPLAY, constants["w" /* Preferences */].COLLAPSE_DISPLAY_DEFAULT),
    linkPreviewDisplay: Object(entities_preferences["get"])(state, constants["w" /* Preferences */].CATEGORY_DISPLAY_SETTINGS, constants["w" /* Preferences */].LINK_PREVIEW_DISPLAY, constants["w" /* Preferences */].LINK_PREVIEW_DISPLAY_DEFAULT)
  };
}

function display_mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux["bindActionCreators"])({
      getSupportedTimezones: actions_general["getSupportedTimezones"],
      autoUpdateTimezone: actions_timezone["autoUpdateTimezone"],
      savePreferences: actions_preferences["savePreferences"]
    }, dispatch)
  };
}

/* harmony default export */ var user_settings_display = (Object(es["connect"])(display_mapStateToProps, display_mapDispatchToProps)(user_settings_display_UserSettingsDisplay));
// EXTERNAL MODULE: ./mattermost-redux/actions/errors.js
var errors = __webpack_require__(105);

// EXTERNAL MODULE: ./mattermost-redux/utils/helpers.js
var helpers = __webpack_require__(72);

// EXTERNAL MODULE: ./actions/diagnostics_actions.jsx
var diagnostics_actions = __webpack_require__(300);

// EXTERNAL MODULE: ./components/setting_picture.jsx
var setting_picture = __webpack_require__(2185);

// EXTERNAL MODULE: ./components/widgets/loading/loading_wrapper.jsx
var loading_wrapper = __webpack_require__(1608);

// CONCATENATED MODULE: ./components/user_settings/general/user_settings_general.jsx
function user_settings_general_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.













const holders = Object(index_es["g" /* defineMessages */])({
  usernameReserved: {
    id: Object(utils_i18n["b" /* t */])('user.settings.general.usernameReserved'),
    defaultMessage: 'This username is reserved, please choose a new one.'
  },
  usernameRestrictions: {
    id: Object(utils_i18n["b" /* t */])('user.settings.general.usernameRestrictions'),
    defaultMessage: "Username must begin with a letter, and contain between {min} to {max} lowercase characters made up of numbers, letters, and the symbols '.', '-', and '_'."
  },
  validEmail: {
    id: Object(utils_i18n["b" /* t */])('user.settings.general.validEmail'),
    defaultMessage: 'Please enter a valid email address.'
  },
  emailMatch: {
    id: Object(utils_i18n["b" /* t */])('user.settings.general.emailMatch'),
    defaultMessage: 'The new emails you entered do not match.'
  },
  incorrectPassword: {
    id: Object(utils_i18n["b" /* t */])('user.settings.general.incorrectPassword'),
    defaultMessage: 'Your password is incorrect.'
  },
  emptyPassword: {
    id: Object(utils_i18n["b" /* t */])('user.settings.general.emptyPassword'),
    defaultMessage: 'Please enter your current password.'
  },
  validImage: {
    id: Object(utils_i18n["b" /* t */])('user.settings.general.validImage'),
    defaultMessage: 'Only BMP, JPG or PNG images may be used for profile pictures'
  },
  imageTooLarge: {
    id: Object(utils_i18n["b" /* t */])('user.settings.general.imageTooLarge'),
    defaultMessage: 'Unable to upload profile image. File is too large.'
  },
  uploadImage: {
    id: Object(utils_i18n["b" /* t */])('user.settings.general.uploadImage'),
    defaultMessage: "Click 'Edit' to upload an image."
  },
  uploadImageMobile: {
    id: Object(utils_i18n["b" /* t */])('user.settings.general.mobile.uploadImage'),
    defaultMessage: 'Click to upload an image.'
  },
  fullName: {
    id: Object(utils_i18n["b" /* t */])('user.settings.general.fullName'),
    defaultMessage: 'Full Name'
  },
  nickname: {
    id: Object(utils_i18n["b" /* t */])('user.settings.general.nickname'),
    defaultMessage: 'Nickname'
  },
  username: {
    id: Object(utils_i18n["b" /* t */])('user.settings.general.username'),
    defaultMessage: 'Username'
  },
  profilePicture: {
    id: Object(utils_i18n["b" /* t */])('user.settings.general.profilePicture'),
    defaultMessage: 'Profile Picture'
  },
  close: {
    id: Object(utils_i18n["b" /* t */])('user.settings.general.close'),
    defaultMessage: 'Close'
  },
  position: {
    id: Object(utils_i18n["b" /* t */])('user.settings.general.position'),
    defaultMessage: 'Position'
  }
});
const prevSections = {
  name: 'dummySectionName',
  // dummy value that should never match any section name
  username: 'name',
  nickname: 'username',
  position: 'nickname',
  email: 'position',
  picture: 'email'
};

class user_settings_general_UserSettingsGeneralTab extends react_default.a.Component {
  constructor(props) {
    super(props);

    user_settings_general_defineProperty(this, "handleEmailResend", email => {
      this.setState({
        resendStatus: 'sending',
        showSpinner: true
      });
      this.props.actions.sendVerificationEmail(email).then(({
        data,
        error: err
      }) => {
        if (data) {
          this.setState({
            resendStatus: 'success'
          });
        } else if (err) {
          this.setState({
            resendStatus: 'failure'
          });
        }
      });
    });

    user_settings_general_defineProperty(this, "createEmailResendLink", email => {
      return react_default.a.createElement("span", {
        className: "resend-verification-wrapper"
      }, react_default.a.createElement(loading_wrapper["a" /* default */], {
        loading: this.state.showSpinner,
        text: utils["gb" /* localizeMessage */]('user.settings.general.sending', 'Sending')
      }, react_default.a.createElement("a", {
        onClick: () => {
          this.handleEmailResend(email);
          setTimeout(() => {
            this.setState({
              showSpinner: false
            });
          }, 500);
        }
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "user.settings.general.sendAgain",
        defaultMessage: "Send again"
      }))));
    });

    user_settings_general_defineProperty(this, "submitUsername", () => {
      const user = Object.assign({}, this.props.user);
      const username = this.state.username.trim().toLowerCase();
      const {
        formatMessage
      } = this.props.intl;
      const usernameError = utils["eb" /* isValidUsername */](username);

      if (usernameError === 'Cannot use a reserved word as a username.') {
        this.setState({
          clientError: formatMessage(holders.usernameReserved),
          serverError: ''
        });
        return;
      } else if (usernameError) {
        this.setState({
          clientError: formatMessage(holders.usernameRestrictions, {
            min: constants["g" /* Constants */].MIN_USERNAME_LENGTH,
            max: constants["g" /* Constants */].MAX_USERNAME_LENGTH
          }),
          serverError: ''
        });
        return;
      }

      if (user.username === username) {
        this.updateSection('');
        return;
      }

      user.username = username;
      Object(diagnostics_actions["d" /* trackEvent */])('settings', 'user_settings_update', {
        field: 'username'
      });
      this.submitUser(user, false);
    });

    user_settings_general_defineProperty(this, "submitNickname", () => {
      const user = Object.assign({}, this.props.user);
      const nickname = this.state.nickname.trim();

      if (user.nickname === nickname) {
        this.updateSection('');
        return;
      }

      user.nickname = nickname;
      Object(diagnostics_actions["d" /* trackEvent */])('settings', 'user_settings_update', {
        field: 'nickname'
      });
      this.submitUser(user, false);
    });

    user_settings_general_defineProperty(this, "submitName", () => {
      const user = Object.assign({}, this.props.user);
      const firstName = this.state.firstName.trim();
      const lastName = this.state.lastName.trim();

      if (user.first_name === firstName && user.last_name === lastName) {
        this.updateSection('');
        return;
      }

      user.first_name = firstName;
      user.last_name = lastName;
      Object(diagnostics_actions["d" /* trackEvent */])('settings', 'user_settings_update', {
        field: 'fullname'
      });
      this.submitUser(user, false);
    });

    user_settings_general_defineProperty(this, "submitEmail", () => {
      const user = Object.assign({}, this.props.user);
      const email = this.state.email.trim().toLowerCase();
      const confirmEmail = this.state.confirmEmail.trim().toLowerCase();
      const currentPassword = this.state.currentPassword;
      const {
        formatMessage
      } = this.props.intl;

      if (email === user.email && (confirmEmail === '' || confirmEmail === user.email)) {
        this.updateSection('');
        return;
      }

      if (email === '' || !Object(helpers["isEmail"])(email)) {
        this.setState({
          emailError: formatMessage(holders.validEmail),
          clientError: '',
          serverError: ''
        });
        return;
      }

      if (email !== confirmEmail) {
        this.setState({
          emailError: formatMessage(holders.emailMatch),
          clientError: '',
          serverError: ''
        });
        return;
      }

      if (currentPassword === '') {
        this.setState({
          emailError: formatMessage(holders.emptyPassword),
          clientError: '',
          serverError: ''
        });
        return;
      }

      user.email = email;
      user.password = currentPassword;
      Object(diagnostics_actions["d" /* trackEvent */])('settings', 'user_settings_update', {
        field: 'email'
      });
      this.submitUser(user, true);
    });

    user_settings_general_defineProperty(this, "submitUser", (user, emailUpdated) => {
      const {
        formatMessage
      } = this.props.intl;
      this.setState({
        sectionIsSaving: true
      });
      this.props.actions.updateMe(user).then(({
        data,
        error: err
      }) => {
        if (data) {
          this.updateSection('');
          this.props.actions.getMe();
          const verificationEnabled = this.props.sendEmailNotifications && this.props.requireEmailVerification && emailUpdated;

          if (verificationEnabled) {
            this.props.actions.clearErrors();
            this.props.actions.logError({
              message: constants["d" /* AnnouncementBarMessages */].EMAIL_VERIFICATION_REQUIRED,
              type: constants["e" /* AnnouncementBarTypes */].SUCCESS
            }, true);
          }
        } else if (err) {
          let serverError;

          if (err.server_error_id && err.server_error_id === 'api.user.check_user_password.invalid.app_error') {
            serverError = formatMessage(holders.incorrectPassword);
          } else if (err.message) {
            serverError = err.message;
          } else {
            serverError = err;
          }

          this.setState({
            serverError,
            emailError: '',
            clientError: '',
            sectionIsSaving: false
          });
        }
      });
    });

    user_settings_general_defineProperty(this, "setDefaultProfilePicture", async () => {
      try {
        await this.props.actions.setDefaultProfileImage(this.props.user.id);
        this.updateSection('');
        this.submitActive = false;
      } catch (err) {
        let serverError;

        if (err.message) {
          serverError = err.message;
        } else {
          serverError = err;
        }

        this.setState({
          serverError,
          emailError: '',
          clientError: '',
          sectionIsSaving: false
        });
      }
    });

    user_settings_general_defineProperty(this, "submitPicture", () => {
      if (!this.state.pictureFile) {
        return;
      }

      if (!this.submitActive) {
        return;
      }

      Object(diagnostics_actions["d" /* trackEvent */])('settings', 'user_settings_update', {
        field: 'picture'
      });
      const {
        formatMessage
      } = this.props.intl;
      const file = this.state.pictureFile;

      if (!constants["a" /* AcceptedProfileImageTypes */].includes(file.type)) {
        this.setState({
          clientError: formatMessage(holders.validImage),
          serverError: ''
        });
        return;
      } else if (file.size > this.props.maxFileSize) {
        this.setState({
          clientError: formatMessage(holders.imageTooLarge),
          serverError: ''
        });
        return;
      }

      this.setState({
        loadingPicture: true
      });
      this.props.actions.uploadProfileImage(this.props.user.id, file).then(({
        data,
        error: err
      }) => {
        if (data) {
          this.updateSection('');
          this.submitActive = false;
        } else if (err) {
          var state = this.setupInitialState(this.props);
          state.serverError = err.message;
          this.setState(state);
        }
      });
    });

    user_settings_general_defineProperty(this, "submitPosition", () => {
      const user = Object.assign({}, this.props.user);
      const position = this.state.position.trim();

      if (user.position === position) {
        this.updateSection('');
        return;
      }

      user.position = position;
      Object(diagnostics_actions["d" /* trackEvent */])('settings', 'user_settings_update', {
        field: 'position'
      });
      this.submitUser(user, false);
    });

    user_settings_general_defineProperty(this, "updateUsername", e => {
      this.setState({
        username: e.target.value
      });
    });

    user_settings_general_defineProperty(this, "updateFirstName", e => {
      this.setState({
        firstName: e.target.value
      });
    });

    user_settings_general_defineProperty(this, "updateLastName", e => {
      this.setState({
        lastName: e.target.value
      });
    });

    user_settings_general_defineProperty(this, "updateNickname", e => {
      this.setState({
        nickname: e.target.value
      });
    });

    user_settings_general_defineProperty(this, "updatePosition", e => {
      this.setState({
        position: e.target.value
      });
    });

    user_settings_general_defineProperty(this, "updateEmail", e => {
      this.setState({
        email: e.target.value
      });
    });

    user_settings_general_defineProperty(this, "updateConfirmEmail", e => {
      this.setState({
        confirmEmail: e.target.value
      });
    });

    user_settings_general_defineProperty(this, "updateCurrentPassword", e => {
      this.setState({
        currentPassword: e.target.value
      });
    });

    user_settings_general_defineProperty(this, "updatePicture", e => {
      if (e.target.files && e.target.files[0]) {
        this.setState({
          pictureFile: e.target.files[0]
        });
        this.submitActive = true;
        this.setState({
          clientError: null
        });
      } else {
        this.setState({
          pictureFile: null
        });
      }
    });

    user_settings_general_defineProperty(this, "updateSection", section => {
      this.setState(Object.assign({}, this.setupInitialState(this.props), {
        clientError: '',
        serverError: '',
        emailError: '',
        sectionIsSaving: false
      }));
      this.submitActive = false;
      this.props.updateSection(section);
    });

    this.submitActive = false;
    this.state = this.setupInitialState(props);
  }

  setupInitialState(props) {
    const user = props.user;
    return {
      username: user.username,
      firstName: user.first_name,
      lastName: user.last_name,
      nickname: user.nickname,
      position: user.position,
      originalEmail: user.email,
      email: '',
      confirmEmail: '',
      currentPassword: '',
      pictureFile: null,
      loadingPicture: false,
      sectionIsSaving: false,
      showSpinner: false
    };
  }

  createEmailSection() {
    let emailSection;

    if (this.props.activeSection === 'email') {
      const emailEnabled = this.props.sendEmailNotifications;
      const emailVerificationEnabled = this.props.requireEmailVerification;
      const inputs = [];
      let helpText = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "user.settings.general.emailHelp1",
        defaultMessage: "Email is used for sign-in, notifications, and password reset. Email requires verification if changed."
      });

      if (!emailEnabled) {
        helpText = react_default.a.createElement("div", {
          className: "setting-list__hint col-sm-12 text-danger"
        }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.general.emailHelp2",
          defaultMessage: "Email has been disabled by your System Administrator. No notification emails will be sent until it is enabled."
        }));
      } else if (!emailVerificationEnabled) {
        helpText = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.general.emailHelp3",
          defaultMessage: "Email is used for sign-in, notifications, and password reset."
        });
      }

      let submit = null;

      if (this.props.user.auth_service === '') {
        inputs.push(react_default.a.createElement("div", {
          key: "currentEmailSetting"
        }, react_default.a.createElement("div", {
          className: "form-group"
        }, react_default.a.createElement("label", {
          className: "col-sm-5 control-label"
        }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.general.currentEmail",
          defaultMessage: "Current Email"
        })), react_default.a.createElement("div", {
          className: "col-sm-7"
        }, react_default.a.createElement("label", {
          className: "control-label word-break--all text-left"
        }, this.state.originalEmail)))));
        inputs.push(react_default.a.createElement("div", {
          key: "emailSetting"
        }, react_default.a.createElement("div", {
          className: "form-group"
        }, react_default.a.createElement("label", {
          className: "col-sm-5 control-label"
        }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.general.newEmail",
          defaultMessage: "New Email"
        })), react_default.a.createElement("div", {
          className: "col-sm-7"
        }, react_default.a.createElement("input", {
          autoFocus: true,
          id: "primaryEmail",
          className: "form-control",
          type: "email",
          onChange: this.updateEmail,
          value: this.state.email
        })))));
        inputs.push(react_default.a.createElement("div", {
          key: "confirmEmailSetting"
        }, react_default.a.createElement("div", {
          className: "form-group"
        }, react_default.a.createElement("label", {
          className: "col-sm-5 control-label"
        }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.general.confirmEmail",
          defaultMessage: "Confirm Email"
        })), react_default.a.createElement("div", {
          className: "col-sm-7"
        }, react_default.a.createElement("input", {
          id: "confirmEmail",
          className: "form-control",
          type: "email",
          onChange: this.updateConfirmEmail,
          value: this.state.confirmEmail
        })))));
        inputs.push(react_default.a.createElement("div", {
          key: "currentPassword"
        }, react_default.a.createElement("div", {
          className: "form-group"
        }, react_default.a.createElement("label", {
          className: "col-sm-5 control-label"
        }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.general.currentPassword",
          defaultMessage: "Current Password"
        })), react_default.a.createElement("div", {
          className: "col-sm-7"
        }, react_default.a.createElement("input", {
          id: "currentPassword",
          className: "form-control",
          type: "password",
          onChange: this.updateCurrentPassword,
          value: this.state.currentPassword
        }))), helpText));
        submit = this.submitEmail;
      } else if (this.props.user.auth_service === constants["g" /* Constants */].GITLAB_SERVICE) {
        inputs.push(react_default.a.createElement("div", {
          key: "oauthEmailInfo",
          className: "form-group"
        }, react_default.a.createElement("div", {
          className: "setting-list__hint padding-bottom x2"
        }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.general.emailGitlabCantUpdate",
          defaultMessage: "Login occurs through GitLab. Email cannot be updated. Email address used for notifications is {email}.",
          values: {
            email: this.state.originalEmail
          }
        })), helpText));
      } else if (this.props.user.auth_service === constants["g" /* Constants */].GOOGLE_SERVICE) {
        inputs.push(react_default.a.createElement("div", {
          key: "oauthEmailInfo",
          className: "form-group"
        }, react_default.a.createElement("div", {
          className: "setting-list__hint padding-bottom x2"
        }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.general.emailGoogleCantUpdate",
          defaultMessage: "Login occurs through Google Apps. Email cannot be updated. Email address used for notifications is {email}.",
          values: {
            email: this.state.originalEmail
          }
        })), helpText));
      } else if (this.props.user.auth_service === constants["g" /* Constants */].OFFICE365_SERVICE) {
        inputs.push(react_default.a.createElement("div", {
          key: "oauthEmailInfo",
          className: "form-group"
        }, react_default.a.createElement("div", {
          className: "setting-list__hint padding-bottom x2"
        }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.general.emailOffice365CantUpdate",
          defaultMessage: "Login occurs through Office 365. Email cannot be updated. Email address used for notifications is {email}.",
          values: {
            email: this.state.originalEmail
          }
        })), helpText));
      } else if (this.props.user.auth_service === constants["g" /* Constants */].LDAP_SERVICE) {
        inputs.push(react_default.a.createElement("div", {
          key: "oauthEmailInfo",
          className: "padding-bottom"
        }, react_default.a.createElement("div", {
          className: "setting-list__hint padding-bottom x2"
        }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.general.emailLdapCantUpdate",
          defaultMessage: "Login occurs through AD/LDAP. Email cannot be updated. Email address used for notifications is {email}.",
          values: {
            email: this.state.originalEmail
          }
        }))));
      } else if (this.props.user.auth_service === constants["g" /* Constants */].SAML_SERVICE) {
        inputs.push(react_default.a.createElement("div", {
          key: "oauthEmailInfo",
          className: "padding-bottom"
        }, react_default.a.createElement("div", {
          className: "setting-list__hint padding-bottom x2"
        }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.general.emailSamlCantUpdate",
          defaultMessage: "Login occurs through SAML. Email cannot be updated. Email address used for notifications is {email}.",
          values: {
            email: this.state.originalEmail
          }
        })), helpText));
      }

      emailSection = react_default.a.createElement(setting_item_max["a" /* default */], {
        title: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.general.email",
          defaultMessage: "Email"
        }),
        inputs: inputs,
        submit: submit,
        saving: this.state.sectionIsSaving,
        serverError: this.state.serverError,
        clientError: this.state.emailError,
        updateSection: this.updateSection
      });
    } else {
      let describe = '';

      if (this.props.user.auth_service === '') {
        describe = this.props.user.email;
      } else if (this.props.user.auth_service === constants["g" /* Constants */].GITLAB_SERVICE) {
        describe = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.general.loginGitlab",
          defaultMessage: "Login done through GitLab ({email})",
          values: {
            email: this.state.originalEmail
          }
        });
      } else if (this.props.user.auth_service === constants["g" /* Constants */].GOOGLE_SERVICE) {
        describe = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.general.loginGoogle",
          defaultMessage: "Login done through Google Apps ({email})",
          values: {
            email: this.state.originalEmail
          }
        });
      } else if (this.props.user.auth_service === constants["g" /* Constants */].OFFICE365_SERVICE) {
        describe = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.general.loginOffice365",
          defaultMessage: "Login done through Office 365 ({email})",
          values: {
            email: this.state.originalEmail
          }
        });
      } else if (this.props.user.auth_service === constants["g" /* Constants */].LDAP_SERVICE) {
        describe = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.general.loginLdap",
          defaultMessage: "Login done through AD/LDAP ({email})",
          values: {
            email: this.state.originalEmail
          }
        });
      } else if (this.props.user.auth_service === constants["g" /* Constants */].SAML_SERVICE) {
        describe = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.general.loginSaml",
          defaultMessage: "Login done through SAML ({email})",
          values: {
            email: this.state.originalEmail
          }
        });
      }

      emailSection = react_default.a.createElement(setting_item_min["a" /* default */], {
        title: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.general.email",
          defaultMessage: "Email"
        }),
        describe: describe,
        focused: this.props.prevActiveSection === prevSections.email,
        section: 'email',
        updateSection: this.updateSection
      });
    }

    return emailSection;
  }

  render() {
    const user = this.props.user;
    const {
      formatMessage
    } = this.props.intl;
    let clientError = null;

    if (this.state.clientError) {
      clientError = this.state.clientError;
    }

    let serverError = null;

    if (this.state.serverError) {
      serverError = this.state.serverError;
    }

    let nameSection;
    const inputs = [];

    if (this.props.activeSection === 'name') {
      let extraInfo;
      let submit = null;

      if (this.props.user.auth_service === 'ldap' && (this.props.ldapFirstNameAttributeSet || this.props.ldapLastNameAttributeSet) || this.props.user.auth_service === constants["g" /* Constants */].SAML_SERVICE && (this.props.samlFirstNameAttributeSet || this.props.samlLastNameAttributeSet)) {
        extraInfo = react_default.a.createElement("span", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.general.field_handled_externally",
          defaultMessage: "This field is handled through your login provider. If you want to change it, you need to do so through your login provider."
        }));
      } else {
        inputs.push(react_default.a.createElement("div", {
          key: "firstNameSetting",
          className: "form-group"
        }, react_default.a.createElement("label", {
          className: "col-sm-5 control-label"
        }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.general.firstName",
          defaultMessage: "First Name"
        })), react_default.a.createElement("div", {
          className: "col-sm-7"
        }, react_default.a.createElement("input", {
          id: "firstName",
          autoFocus: true,
          className: "form-control",
          type: "text",
          onChange: this.updateFirstName,
          value: this.state.firstName,
          onFocus: utils["ib" /* moveCursorToEnd */]
        }))));
        inputs.push(react_default.a.createElement("div", {
          key: "lastNameSetting",
          className: "form-group"
        }, react_default.a.createElement("label", {
          className: "col-sm-5 control-label"
        }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.general.lastName",
          defaultMessage: "Last Name"
        })), react_default.a.createElement("div", {
          className: "col-sm-7"
        }, react_default.a.createElement("input", {
          id: "lastName",
          className: "form-control",
          type: "text",
          onChange: this.updateLastName,
          value: this.state.lastName
        }))));

        function notifClick(e) {
          e.preventDefault();
          this.updateSection('');
          this.props.updateTab('notifications');
        }

        const notifLink = react_default.a.createElement("a", {
          href: "#",
          onClick: notifClick.bind(this)
        }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.general.notificationsLink",
          defaultMessage: "Notifications"
        }));
        extraInfo = react_default.a.createElement("span", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.general.notificationsExtra",
          defaultMessage: "By default, you will receive mention notifications when someone types your first name. Go to {notify} settings to change this default.",
          values: {
            notify: notifLink
          }
        }));
        submit = this.submitName;
      }

      nameSection = react_default.a.createElement(setting_item_max["a" /* default */], {
        title: formatMessage(holders.fullName),
        inputs: inputs,
        submit: submit,
        saving: this.state.sectionIsSaving,
        serverError: serverError,
        clientError: clientError,
        updateSection: this.updateSection,
        extraInfo: extraInfo
      });
    } else {
      let describe = '';

      if (user.first_name && user.last_name) {
        describe = user.first_name + ' ' + user.last_name;
      } else if (user.first_name) {
        describe = user.first_name;
      } else if (user.last_name) {
        describe = user.last_name;
      } else {
        describe = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.general.emptyName",
          defaultMessage: "Click 'Edit' to add your full name"
        });

        if (utils["Y" /* isMobile */]()) {
          describe = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "user.settings.general.mobile.emptyName",
            defaultMessage: "Click to add your full name"
          });
        }
      }

      nameSection = react_default.a.createElement(setting_item_min["a" /* default */], {
        title: formatMessage(holders.fullName),
        describe: describe,
        focused: this.props.prevActiveSection === prevSections.name,
        section: 'name',
        updateSection: this.updateSection
      });
    }

    let nicknameSection;

    if (this.props.activeSection === 'nickname') {
      let extraInfo;
      let submit = null;

      if (this.props.user.auth_service === 'ldap' && this.props.ldapNicknameAttributeSet || this.props.user.auth_service === constants["g" /* Constants */].SAML_SERVICE && this.props.samlNicknameAttributeSet) {
        extraInfo = react_default.a.createElement("span", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.general.field_handled_externally",
          defaultMessage: "This field is handled through your login provider. If you want to change it, you need to do so though your login provider."
        }));
      } else {
        let nicknameLabel = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.general.nickname",
          defaultMessage: "Nickname"
        });

        if (utils["Y" /* isMobile */]()) {
          nicknameLabel = '';
        }

        inputs.push(react_default.a.createElement("div", {
          key: "nicknameSetting",
          className: "form-group"
        }, react_default.a.createElement("label", {
          className: "col-sm-5 control-label"
        }, nicknameLabel), react_default.a.createElement("div", {
          className: "col-sm-7"
        }, react_default.a.createElement("input", {
          id: "nickname",
          autoFocus: true,
          className: "form-control",
          type: "text",
          onChange: this.updateNickname,
          value: this.state.nickname,
          maxLength: constants["g" /* Constants */].MAX_NICKNAME_LENGTH,
          autoCapitalize: "off"
        }))));
        extraInfo = react_default.a.createElement("span", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.general.nicknameExtra",
          defaultMessage: "Use Nickname for a name you might be called that is different from your first name and username. This is most often used when two or more people have similar sounding names and usernames."
        }));
        submit = this.submitNickname;
      }

      nicknameSection = react_default.a.createElement(setting_item_max["a" /* default */], {
        title: formatMessage(holders.nickname),
        inputs: inputs,
        submit: submit,
        saving: this.state.sectionIsSaving,
        serverError: serverError,
        clientError: clientError,
        updateSection: this.updateSection,
        extraInfo: extraInfo
      });
    } else {
      let describe = '';

      if (user.nickname) {
        describe = user.nickname;
      } else {
        describe = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.general.emptyNickname",
          defaultMessage: "Click 'Edit' to add a nickname"
        });

        if (utils["Y" /* isMobile */]()) {
          describe = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "user.settings.general.mobile.emptyNickname",
            defaultMessage: "Click to add a nickname"
          });
        }
      }

      nicknameSection = react_default.a.createElement(setting_item_min["a" /* default */], {
        title: formatMessage(holders.nickname),
        describe: describe,
        focused: this.props.prevActiveSection === prevSections.nickname,
        section: 'nickname',
        updateSection: this.updateSection
      });
    }

    let usernameSection;

    if (this.props.activeSection === 'username') {
      let extraInfo;
      let submit = null;

      if (this.props.user.auth_service === '') {
        let usernameLabel = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.general.username",
          defaultMessage: "Username"
        });

        if (utils["Y" /* isMobile */]()) {
          usernameLabel = '';
        }

        inputs.push(react_default.a.createElement("div", {
          key: "usernameSetting",
          className: "form-group"
        }, react_default.a.createElement("label", {
          className: "col-sm-5 control-label"
        }, usernameLabel), react_default.a.createElement("div", {
          className: "col-sm-7"
        }, react_default.a.createElement("input", {
          id: "username",
          autoFocus: true,
          maxLength: constants["g" /* Constants */].MAX_USERNAME_LENGTH,
          className: "form-control",
          type: "text",
          onChange: this.updateUsername,
          value: this.state.username,
          autoCapitalize: "off",
          onFocus: utils["ib" /* moveCursorToEnd */]
        }))));
        extraInfo = react_default.a.createElement("span", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.general.usernameInfo",
          defaultMessage: "Pick something easy for teammates to recognize and recall."
        }));
        submit = this.submitUsername;
      } else {
        extraInfo = react_default.a.createElement("span", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.general.field_handled_externally",
          defaultMessage: "This field is handled through your login provider. If you want to change it, you need to do so though your login provider."
        }));
      }

      usernameSection = react_default.a.createElement(setting_item_max["a" /* default */], {
        title: formatMessage(holders.username),
        inputs: inputs,
        submit: submit,
        saving: this.state.sectionIsSaving,
        serverError: serverError,
        clientError: clientError,
        updateSection: this.updateSection,
        extraInfo: extraInfo
      });
    } else {
      usernameSection = react_default.a.createElement(setting_item_min["a" /* default */], {
        title: formatMessage(holders.username),
        describe: this.props.user.username,
        focused: this.props.prevActiveSection === prevSections.username,
        section: 'username',
        updateSection: this.updateSection
      });
    }

    let positionSection;

    if (this.props.activeSection === 'position') {
      let extraInfo;
      let submit = null;

      if (this.props.user.auth_service === constants["g" /* Constants */].LDAP_SERVICE && this.props.ldapPositionAttributeSet || this.props.user.auth_service === constants["g" /* Constants */].SAML_SERVICE && this.props.samlPositionAttributeSet) {
        extraInfo = react_default.a.createElement("span", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.general.field_handled_externally",
          defaultMessage: "This field is handled through your login provider. If you want to change it, you need to do so though your login provider."
        }));
      } else {
        let positionLabel = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.general.position",
          defaultMessage: "Position"
        });

        if (utils["Y" /* isMobile */]()) {
          positionLabel = '';
        }

        inputs.push(react_default.a.createElement("div", {
          key: "positionSetting",
          className: "form-group"
        }, react_default.a.createElement("label", {
          className: "col-sm-5 control-label"
        }, positionLabel), react_default.a.createElement("div", {
          className: "col-sm-7"
        }, react_default.a.createElement("input", {
          id: "position",
          autoFocus: true,
          className: "form-control",
          type: "text",
          onChange: this.updatePosition,
          value: this.state.position,
          maxLength: constants["g" /* Constants */].MAX_POSITION_LENGTH,
          autoCapitalize: "off",
          onFocus: utils["ib" /* moveCursorToEnd */]
        }))));
        extraInfo = react_default.a.createElement("span", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.general.positionExtra",
          defaultMessage: "Use Position for your role or job title. This will be shown in your profile popover."
        }));
        submit = this.submitPosition;
      }

      positionSection = react_default.a.createElement(setting_item_max["a" /* default */], {
        title: formatMessage(holders.position),
        inputs: inputs,
        submit: submit,
        saving: this.state.sectionIsSaving,
        serverError: serverError,
        clientError: clientError,
        updateSection: this.updateSection,
        extraInfo: extraInfo
      });
    } else {
      let describe = '';

      if (user.position) {
        describe = user.position;
      } else {
        describe = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.general.emptyPosition",
          defaultMessage: "Click 'Edit' to add your job title / position"
        });

        if (utils["Y" /* isMobile */]()) {
          describe = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "user.settings.general.mobile.emptyPosition",
            defaultMessage: "Click to add your job title / position"
          });
        }
      }

      positionSection = react_default.a.createElement(setting_item_min["a" /* default */], {
        title: formatMessage(holders.position),
        describe: describe,
        focused: this.props.prevActiveSection === prevSections.position,
        section: 'position',
        updateSection: this.updateSection
      });
    }

    const emailSection = this.createEmailSection();
    let pictureSection;

    if (this.props.activeSection === 'picture') {
      pictureSection = react_default.a.createElement(setting_picture["a" /* default */], {
        title: formatMessage(holders.profilePicture),
        onSubmit: this.submitPicture,
        onSetDefault: user.last_picture_update > 0 ? this.setDefaultProfilePicture : null,
        src: utils["K" /* imageURLForUser */](user),
        defaultImageSrc: utils["i" /* defaultImageURLForUser */](user.id),
        serverError: serverError,
        clientError: clientError,
        updateSection: e => {
          this.updateSection('');
          e.preventDefault();
        },
        file: this.state.pictureFile,
        onFileChange: this.updatePicture,
        submitActive: this.submitActive,
        loadingPicture: this.state.loadingPicture,
        maxFileSize: this.props.maxFileSize
      });
    } else {
      let minMessage = formatMessage(holders.uploadImage);

      if (utils["Y" /* isMobile */]()) {
        minMessage = formatMessage(holders.uploadImageMobile);
      }

      if (user.last_picture_update) {
        minMessage = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.general.imageUpdated",
          defaultMessage: "Image last updated {date}",
          values: {
            date: react_default.a.createElement(index_es["a" /* FormattedDate */], {
              value: new Date(user.last_picture_update),
              day: "2-digit",
              month: "short",
              year: "numeric"
            })
          }
        });
      }

      pictureSection = react_default.a.createElement(setting_item_min["a" /* default */], {
        title: formatMessage(holders.profilePicture),
        describe: minMessage,
        focused: this.props.prevActiveSection === prevSections.picture,
        section: 'picture',
        updateSection: this.updateSection
      });
    }

    return react_default.a.createElement("div", {
      id: "generalSettings"
    }, react_default.a.createElement("div", {
      className: "modal-header"
    }, react_default.a.createElement("button", {
      id: "closeUserSettings",
      type: "button",
      className: "close",
      "data-dismiss": "modal",
      "aria-label": formatMessage(holders.close),
      onClick: this.props.closeModal
    }, react_default.a.createElement("span", {
      "aria-hidden": "true"
    }, '×')), react_default.a.createElement("h4", {
      className: "modal-title",
      ref: "title"
    }, react_default.a.createElement("div", {
      className: "modal-back"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "generic_icons.collapse",
      defaultMessage: "Collapse Icon"
    }, title => react_default.a.createElement("i", {
      className: "fa fa-angle-left",
      title: title,
      onClick: this.props.collapseModal
    }))), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "user.settings.general.title",
      defaultMessage: "General Settings"
    }))), react_default.a.createElement("div", {
      className: "user-settings"
    }, react_default.a.createElement("h3", {
      id: "generalSettingsTitle",
      className: "tab-header"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "user.settings.general.title",
      defaultMessage: "General Settings"
    })), react_default.a.createElement("div", {
      className: "divider-dark first"
    }), nameSection, react_default.a.createElement("div", {
      className: "divider-light"
    }), usernameSection, react_default.a.createElement("div", {
      className: "divider-light"
    }), nicknameSection, react_default.a.createElement("div", {
      className: "divider-light"
    }), positionSection, react_default.a.createElement("div", {
      className: "divider-light"
    }), emailSection, react_default.a.createElement("div", {
      className: "divider-light"
    }), pictureSection, react_default.a.createElement("div", {
      className: "divider-dark"
    })));
  }

}

user_settings_general_defineProperty(user_settings_general_UserSettingsGeneralTab, "propTypes", {
  intl: index_es["i" /* intlShape */].isRequired,
  user: prop_types_default.a.object.isRequired,
  updateSection: prop_types_default.a.func.isRequired,
  updateTab: prop_types_default.a.func.isRequired,
  activeSection: prop_types_default.a.string.isRequired,
  prevActiveSection: prop_types_default.a.string.isRequired,
  closeModal: prop_types_default.a.func.isRequired,
  collapseModal: prop_types_default.a.func.isRequired,
  actions: prop_types_default.a.shape({
    logError: prop_types_default.a.func.isRequired,
    clearErrors: prop_types_default.a.func.isRequired,
    getMe: prop_types_default.a.func.isRequired,
    updateMe: prop_types_default.a.func.isRequired,
    sendVerificationEmail: prop_types_default.a.func.isRequired,
    setDefaultProfileImage: prop_types_default.a.func.isRequired,
    uploadProfileImage: prop_types_default.a.func.isRequired
  }).isRequired,
  sendEmailNotifications: prop_types_default.a.bool,
  requireEmailVerification: prop_types_default.a.bool,
  maxFileSize: prop_types_default.a.number,
  ldapFirstNameAttributeSet: prop_types_default.a.bool,
  ldapLastNameAttributeSet: prop_types_default.a.bool,
  samlFirstNameAttributeSet: prop_types_default.a.bool,
  samlLastNameAttributeSet: prop_types_default.a.bool,
  ldapNicknameAttributeSet: prop_types_default.a.bool,
  samlNicknameAttributeSet: prop_types_default.a.bool,
  ldapPositionAttributeSet: prop_types_default.a.bool,
  samlPositionAttributeSet: prop_types_default.a.bool
});

/* harmony default export */ var user_settings_general = (Object(index_es["h" /* injectIntl */])(user_settings_general_UserSettingsGeneralTab));
// CONCATENATED MODULE: ./components/user_settings/general/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.







function general_mapStateToProps(state) {
  const config = Object(general["getConfig"])(state);
  const sendEmailNotifications = config.SendEmailNotifications === 'true';
  const requireEmailVerification = config.RequireEmailVerification === 'true';
  const maxFileSize = parseInt(config.MaxFileSize, 10);
  const ldapFirstNameAttributeSet = config.LdapFirstNameAttributeSet === 'true';
  const ldapLastNameAttributeSet = config.LdapLastNameAttributeSet === 'true';
  const samlFirstNameAttributeSet = config.SamlFirstNameAttributeSet === 'true';
  const samlLastNameAttributeSet = config.SamlLastNameAttributeSet === 'true';
  const ldapNicknameAttributeSet = config.LdapNicknameAttributeSet === 'true';
  const samlNicknameAttributeSet = config.SamlNicknameAttributeSet === 'true';
  const samlPositionAttributeSet = config.SamlPositionAttributeSet === 'true';
  const ldapPositionAttributeSet = config.LdapPositionAttributeSet === 'true';
  return {
    sendEmailNotifications,
    requireEmailVerification,
    maxFileSize,
    ldapFirstNameAttributeSet,
    ldapLastNameAttributeSet,
    samlFirstNameAttributeSet,
    samlLastNameAttributeSet,
    ldapNicknameAttributeSet,
    samlNicknameAttributeSet,
    samlPositionAttributeSet,
    ldapPositionAttributeSet
  };
}

function general_mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux["bindActionCreators"])({
      logError: errors["logError"],
      clearErrors: errors["clearErrors"],
      getMe: actions_users["getMe"],
      updateMe: actions_users["updateMe"],
      sendVerificationEmail: actions_users["sendVerificationEmail"],
      setDefaultProfileImage: actions_users["setDefaultProfileImage"],
      uploadProfileImage: actions_users["uploadProfileImage"]
    }, dispatch)
  };
}

/* harmony default export */ var components_user_settings_general = (Object(es["connect"])(general_mapStateToProps, general_mapDispatchToProps)(user_settings_general));
// CONCATENATED MODULE: ./components/user_settings/notifications/desktop_notification_settings.jsx
function desktop_notification_settings_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.








class desktop_notification_settings_DesktopNotificationSettings extends react_default.a.Component {
  constructor(...args) {
    super(...args);

    desktop_notification_settings_defineProperty(this, "handleMinUpdateSection", section => {
      this.props.updateSection(section);
      this.props.cancel();
    });

    desktop_notification_settings_defineProperty(this, "handleMaxUpdateSection", section => {
      this.props.updateSection(section);
    });

    desktop_notification_settings_defineProperty(this, "handleOnChange", e => {
      const key = e.currentTarget.getAttribute('data-key');
      const value = e.currentTarget.getAttribute('data-value');
      this.props.setParentState(key, value);
    });

    desktop_notification_settings_defineProperty(this, "buildMaximizedSetting", () => {
      const inputs = [];
      const activityRadio = [false, false, false];

      if (this.props.activity === constants["q" /* NotificationLevels */].MENTION) {
        activityRadio[1] = true;
      } else if (this.props.activity === constants["q" /* NotificationLevels */].NONE) {
        activityRadio[2] = true;
      } else {
        activityRadio[0] = true;
      }

      let soundSection;

      if (this.props.activity !== constants["q" /* NotificationLevels */].NONE) {
        const soundRadio = [false, false];

        if (this.props.sound === 'false') {
          soundRadio[1] = true;
        } else {
          soundRadio[0] = true;
        }

        if (utils["I" /* hasSoundOptions */]() && false) {
          soundSection = react_default.a.createElement("div", null, react_default.a.createElement("hr", null), react_default.a.createElement("label", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "user.settings.notifications.desktop.sound",
            defaultMessage: "Notification sound"
          })), react_default.a.createElement("br", null), react_default.a.createElement("div", {
            className: "radio"
          }, react_default.a.createElement("label", null, react_default.a.createElement("input", {
            id: "soundOn",
            type: "radio",
            name: "notificationSounds",
            checked: soundRadio[0],
            "data-key": 'desktopSound',
            "data-value": 'true',
            onChange: this.handleOnChange
          }), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "user.settings.notifications.on",
            defaultMessage: "On"
          })), react_default.a.createElement("br", null)), react_default.a.createElement("div", {
            className: "radio"
          }, react_default.a.createElement("label", null, react_default.a.createElement("input", {
            id: "soundOff",
            type: "radio",
            name: "notificationSounds",
            checked: soundRadio[1],
            "data-key": 'desktopSound',
            "data-value": 'false',
            onChange: this.handleOnChange
          }), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "user.settings.notifications.off",
            defaultMessage: "Off"
          })), react_default.a.createElement("br", null)), react_default.a.createElement("br", null), react_default.a.createElement("span", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "user.settings.notifications.sounds_info",
            defaultMessage: "Notification sounds are available on IE11, Safari, Chrome and Mattermost Desktop Apps."
          })));
        } else {
          soundSection = react_default.a.createElement("div", null, react_default.a.createElement("hr", null), react_default.a.createElement("label", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "user.settings.notifications.desktop.sound",
            defaultMessage: "Notification sound"
          })), react_default.a.createElement("br", null), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "user.settings.notifications.soundConfig",
            defaultMessage: "Please configure notification sounds in your browser settings"
          }));
        }
      }

      inputs.push(react_default.a.createElement("div", {
        key: "userNotificationLevelOption"
      }, react_default.a.createElement("label", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "user.settings.notifications.desktop",
        defaultMessage: "Send desktop notifications"
      })), react_default.a.createElement("br", null), react_default.a.createElement("div", {
        className: "radio"
      }, react_default.a.createElement("label", null, react_default.a.createElement("input", {
        id: "desktopNotificationAllActivity",
        type: "radio",
        name: "desktopNotificationLevel",
        checked: activityRadio[0],
        "data-key": 'desktopActivity',
        "data-value": constants["q" /* NotificationLevels */].ALL,
        onChange: this.handleOnChange
      }), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "user.settings.notifications.allActivity",
        defaultMessage: "For all activity"
      })), react_default.a.createElement("br", null)), react_default.a.createElement("div", {
        className: "radio"
      }, react_default.a.createElement("label", null, react_default.a.createElement("input", {
        id: "desktopNotificationMentions",
        type: "radio",
        name: "desktopNotificationLevel",
        checked: activityRadio[1],
        "data-key": 'desktopActivity',
        "data-value": constants["q" /* NotificationLevels */].MENTION,
        onChange: this.handleOnChange
      }), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "user.settings.notifications.onlyMentions",
        defaultMessage: "Only for mentions and direct messages"
      })), react_default.a.createElement("br", null)), react_default.a.createElement("div", {
        className: "radio"
      }, react_default.a.createElement("label", null, react_default.a.createElement("input", {
        id: "desktopNotificationNever",
        type: "radio",
        name: "desktopNotificationLevel",
        checked: activityRadio[2],
        "data-key": 'desktopActivity',
        "data-value": constants["q" /* NotificationLevels */].NONE,
        onChange: this.handleOnChange
      }), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "user.settings.notifications.never",
        defaultMessage: "Never"
      }))), react_default.a.createElement("br", null), react_default.a.createElement("span", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "user.settings.notifications.info",
        defaultMessage: "Desktop notifications are available on Edge, Firefox, Safari, Chrome and Mattermost Desktop Apps."
      })), soundSection));
      return react_default.a.createElement(setting_item_max["a" /* default */], {
        title: utils["gb" /* localizeMessage */]('user.settings.notifications.desktop.title', 'Desktop notifications'),
        inputs: inputs,
        submit: this.props.submit,
        saving: this.props.saving,
        server_error: this.props.error,
        updateSection: this.handleMaxUpdateSection
      });
    });

    desktop_notification_settings_defineProperty(this, "buildMinimizedSetting", () => {
      let formattedMessageProps;
      const hasSoundOption = utils["I" /* hasSoundOptions */]();

      if (this.props.activity === constants["q" /* NotificationLevels */].MENTION) {
        if (hasSoundOption && this.props.sound !== 'false') {
          formattedMessageProps = {
            id: Object(utils_i18n["b" /* t */])('user.settings.notifications.desktop.mentionsSound'),
            defaultMessage: 'For mentions and direct messages, with sound'
          };
        } else if (hasSoundOption && this.props.sound === 'false') {
          formattedMessageProps = {
            id: Object(utils_i18n["b" /* t */])('user.settings.notifications.desktop.mentionsNoSound'),
            defaultMessage: 'For mentions and direct messages, without sound'
          };
        } else {
          formattedMessageProps = {
            id: Object(utils_i18n["b" /* t */])('user.settings.notifications.desktop.mentionsSoundHidden'),
            defaultMessage: 'For mentions and direct messages'
          };
        }
      } else if (this.props.activity === constants["q" /* NotificationLevels */].NONE) {
        formattedMessageProps = {
          id: Object(utils_i18n["b" /* t */])('user.settings.notifications.off'),
          defaultMessage: 'Off'
        };
      } else {
        if (hasSoundOption && this.props.sound !== 'false') {
          //eslint-disable-line no-lonely-if
          formattedMessageProps = {
            id: Object(utils_i18n["b" /* t */])('user.settings.notifications.desktop.allSound'),
            defaultMessage: 'For all activity, with sound'
          };
        } else if (hasSoundOption && this.props.sound === 'false') {
          formattedMessageProps = {
            id: Object(utils_i18n["b" /* t */])('user.settings.notifications.desktop.allNoSound'),
            defaultMessage: 'For all activity, without sound'
          };
        } else {
          formattedMessageProps = {
            id: Object(utils_i18n["b" /* t */])('user.settings.notifications.desktop.allSoundHidden'),
            defaultMessage: 'For all activity'
          };
        }
      }

      return react_default.a.createElement(setting_item_min["a" /* default */], {
        title: utils["gb" /* localizeMessage */]('user.settings.notifications.desktop.title', 'Desktop notifications'),
        describe: react_default.a.createElement(index_es["c" /* FormattedMessage */], formattedMessageProps),
        focused: this.props.focused,
        section: 'desktop',
        updateSection: this.handleMinUpdateSection
      });
    });
  }

  render() {
    if (this.props.active) {
      return this.buildMaximizedSetting();
    }

    return this.buildMinimizedSetting();
  }

}
desktop_notification_settings_DesktopNotificationSettings.propTypes = {
  activity: prop_types_default.a.string.isRequired,
  sound: prop_types_default.a.string.isRequired,
  updateSection: prop_types_default.a.func,
  setParentState: prop_types_default.a.func,
  submit: prop_types_default.a.func,
  cancel: prop_types_default.a.func,
  error: prop_types_default.a.string,
  active: prop_types_default.a.bool,
  saving: prop_types_default.a.bool,
  focused: prop_types_default.a.bool
};
// EXTERNAL MODULE: ./mattermost-redux/selectors/entities/common.js
var common = __webpack_require__(207);

// EXTERNAL MODULE: ./mattermost-redux/utils/notify_props.js
var notify_props = __webpack_require__(3335);

// CONCATENATED MODULE: ./components/user_settings/notifications/email_notification_setting/email_notification_setting.jsx
function email_notification_setting_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.








const SECONDS_PER_MINUTE = 60;
class email_notification_setting_EmailNotificationSetting extends react_default.a.Component {
  constructor(props) {
    super(props);

    email_notification_setting_defineProperty(this, "handleChange", e => {
      const enableEmail = e.currentTarget.getAttribute('data-enable-email');
      this.setState({
        enableEmail,
        newInterval: parseInt(e.currentTarget.getAttribute('data-email-interval'), 10)
      });
      this.props.onChange(enableEmail);
    });

    email_notification_setting_defineProperty(this, "handleSubmit", async () => {
      const {
        newInterval
      } = this.state;

      if (this.props.emailInterval === newInterval) {
        this.props.updateSection('');
      } else {
        // until the rest of the notification settings are moved to preferences, we have to do this separately
        const {
          currentUserId,
          actions
        } = this.props;
        const emailIntervalPreference = {
          user_id: currentUserId,
          category: constants["w" /* Preferences */].CATEGORY_NOTIFICATIONS,
          name: constants["w" /* Preferences */].EMAIL_INTERVAL,
          value: newInterval.toString()
        };
        await actions.savePreferences(currentUserId, [emailIntervalPreference]);
        this.props.onSubmit();
      }
    });

    email_notification_setting_defineProperty(this, "handleUpdateSection", section => {
      if (section) {
        this.props.updateSection(section);
      } else {
        this.props.updateSection('');
        this.setState({
          enableEmail: this.props.enableEmail,
          newInterval: this.props.emailInterval
        });
        this.props.onCancel();
      }
    });

    email_notification_setting_defineProperty(this, "renderMinSettingView", () => {
      const {
        enableEmail,
        focused,
        sendEmailNotifications
      } = this.props;
      const {
        newInterval
      } = this.state;
      let description;

      if (!sendEmailNotifications) {
        description = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.notifications.email.disabled",
          defaultMessage: "Email notifications are not enabled"
        });
      } else if (enableEmail) {
        switch (newInterval) {
          case constants["w" /* Preferences */].INTERVAL_IMMEDIATE:
            description = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
              id: "user.settings.notifications.email.immediately",
              defaultMessage: "Immediately"
            });
            break;

          case constants["w" /* Preferences */].INTERVAL_HOUR:
            description = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
              id: "user.settings.notifications.email.everyHour",
              defaultMessage: "Every hour"
            });
            break;

          case constants["w" /* Preferences */].INTERVAL_FIFTEEN_MINUTES:
            description = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
              id: "user.settings.notifications.email.everyXMinutes",
              defaultMessage: "Every {count, plural, one {minute} other {{count, number} minutes}}",
              values: {
                count: newInterval / SECONDS_PER_MINUTE
              }
            });
            break;

          default:
            description = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
              id: "user.settings.notifications.email.never",
              defaultMessage: "Never"
            });
        }
      } else {
        description = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.notifications.email.never",
          defaultMessage: "Never"
        });
      }

      return react_default.a.createElement(setting_item_min["a" /* default */], {
        title: Object(utils["gb" /* localizeMessage */])('user.settings.notifications.emailNotifications', 'Email notifications'),
        describe: description,
        focused: focused,
        section: 'email',
        updateSection: this.handleUpdateSection
      });
    });

    email_notification_setting_defineProperty(this, "renderMaxSettingView", () => {
      if (!this.props.sendEmailNotifications) {
        return react_default.a.createElement(setting_item_max["a" /* default */], {
          title: Object(utils["gb" /* localizeMessage */])('user.settings.notifications.emailNotifications', 'Email notifications'),
          inputs: [react_default.a.createElement("div", {
            key: "oauthEmailInfo",
            className: "padding-top"
          }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "user.settings.notifications.email.disabled_long",
            defaultMessage: "Email notifications have not been enabled by your System Administrator."
          }))],
          server_error: this.props.serverError,
          section: 'email',
          updateSection: this.handleUpdateSection
        });
      }

      const {
        newInterval
      } = this.state;
      let batchingOptions = null;
      let batchingInfo = null;

      if (this.props.enableEmailBatching) {
        batchingOptions = react_default.a.createElement("div", null, react_default.a.createElement("div", {
          className: "radio"
        }, react_default.a.createElement("label", null, react_default.a.createElement("input", {
          id: "emailNotificationMinutes",
          type: "radio",
          name: "emailNotifications",
          checked: newInterval === constants["w" /* Preferences */].INTERVAL_FIFTEEN_MINUTES,
          "data-enable-email": 'true',
          "data-email-interval": constants["w" /* Preferences */].INTERVAL_FIFTEEN_MINUTES,
          onChange: this.handleChange
        }), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.notifications.email.everyXMinutes",
          defaultMessage: "Every {count} minutes",
          values: {
            count: constants["w" /* Preferences */].INTERVAL_FIFTEEN_MINUTES / SECONDS_PER_MINUTE
          }
        }))), react_default.a.createElement("div", {
          className: "radio"
        }, react_default.a.createElement("label", null, react_default.a.createElement("input", {
          id: "emailNotificationHour",
          type: "radio",
          name: "emailNotifications",
          checked: newInterval === constants["w" /* Preferences */].INTERVAL_HOUR,
          "data-enable-email": 'true',
          "data-email-interval": constants["w" /* Preferences */].INTERVAL_HOUR,
          onChange: this.handleChange
        }), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.notifications.email.everyHour",
          defaultMessage: "Every hour"
        }))));
        batchingInfo = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.notifications.emailBatchingInfo",
          defaultMessage: "Notifications received over the time period selected are combined and sent in a single email."
        });
      }

      return react_default.a.createElement(setting_item_max["a" /* default */], {
        title: Object(utils["gb" /* localizeMessage */])('user.settings.notifications.emailNotifications', 'Email notifications'),
        inputs: [react_default.a.createElement("div", {
          key: "userNotificationEmailOptions"
        }, react_default.a.createElement("label", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.notifications.email.send",
          defaultMessage: "Send email notifications"
        })), react_default.a.createElement("div", {
          className: "radio"
        }, react_default.a.createElement("label", null, react_default.a.createElement("input", {
          id: "emailNotificationImmediately",
          type: "radio",
          name: "emailNotifications",
          checked: newInterval === constants["w" /* Preferences */].INTERVAL_IMMEDIATE,
          "data-enable-email": 'true',
          "data-email-interval": constants["w" /* Preferences */].INTERVAL_IMMEDIATE,
          onChange: this.handleChange
        }), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.notifications.email.immediately",
          defaultMessage: "Immediately"
        }))), batchingOptions, react_default.a.createElement("div", {
          className: "radio"
        }, react_default.a.createElement("label", null, react_default.a.createElement("input", {
          id: "emailNotificationNever",
          type: "radio",
          name: "emailNotifications",
          checked: newInterval === constants["w" /* Preferences */].INTERVAL_NEVER,
          "data-enable-email": 'false',
          "data-email-interval": constants["w" /* Preferences */].INTERVAL_NEVER,
          onChange: this.handleChange
        }), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.notifications.email.never",
          defaultMessage: "Never"
        }))), react_default.a.createElement("br", null), react_default.a.createElement("div", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.notifications.emailInfo",
          defaultMessage: "Email notifications are sent for mentions and direct messages when you are offline or away from {siteName} for more than 5 minutes.",
          values: {
            siteName: this.props.siteName
          }
        }), ' ', batchingInfo))],
        submit: this.handleSubmit,
        saving: this.props.saving,
        server_error: this.props.serverError,
        updateSection: this.handleUpdateSection
      });
    });

    const {
      emailInterval,
      enableEmail: _enableEmail,
      enableEmailBatching,
      sendEmailNotifications: _sendEmailNotifications
    } = props;
    this.state = {
      emailInterval,
      enableEmailBatching,
      sendEmailNotifications: _sendEmailNotifications,
      newInterval: Object(notify_props["getEmailInterval"])(_enableEmail && _sendEmailNotifications, enableEmailBatching, emailInterval)
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const {
      emailInterval,
      enableEmail,
      enableEmailBatching,
      sendEmailNotifications
    } = nextProps;

    if (sendEmailNotifications !== prevState.sendEmailNotifications || enableEmailBatching !== prevState.enableEmailBatching || emailInterval !== prevState.emailInterval) {
      return {
        emailInterval,
        enableEmailBatching,
        sendEmailNotifications,
        newInterval: Object(notify_props["getEmailInterval"])(enableEmail && sendEmailNotifications, enableEmailBatching, emailInterval)
      };
    }

    return null;
  }

  render() {
    if (this.props.activeSection !== 'email') {
      return this.renderMinSettingView();
    }

    return this.renderMaxSettingView();
  }

}

email_notification_setting_defineProperty(email_notification_setting_EmailNotificationSetting, "propTypes", {
  currentUserId: prop_types_default.a.string.isRequired,
  activeSection: prop_types_default.a.string.isRequired,
  updateSection: prop_types_default.a.func.isRequired,
  enableEmail: prop_types_default.a.bool.isRequired,
  emailInterval: prop_types_default.a.number.isRequired,
  onSubmit: prop_types_default.a.func.isRequired,
  onCancel: prop_types_default.a.func.isRequired,
  onChange: prop_types_default.a.func.isRequired,
  serverError: prop_types_default.a.string,
  saving: prop_types_default.a.bool,
  focused: prop_types_default.a.bool,
  sendEmailNotifications: prop_types_default.a.bool,
  enableEmailBatching: prop_types_default.a.bool,
  siteName: prop_types_default.a.string,
  actions: prop_types_default.a.shape({
    savePreferences: prop_types_default.a.func.isRequired
  }).isRequired
});
// CONCATENATED MODULE: ./components/user_settings/notifications/email_notification_setting/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.









function email_notification_setting_mapStateToProps(state) {
  const config = Object(general["getConfig"])(state);
  const emailInterval = parseInt(Object(entities_preferences["get"])(state, mattermost_redux_constants["Preferences"].CATEGORY_NOTIFICATIONS, mattermost_redux_constants["Preferences"].EMAIL_INTERVAL, mattermost_redux_constants["Preferences"].INTERVAL_NOT_SET.toString()), 10);
  return {
    currentUserId: Object(common["getCurrentUserId"])(state),
    emailInterval,
    enableEmailBatching: config.EnableEmailBatching === 'true',
    sendEmailNotifications: config.SendEmailNotifications === 'true'
  };
}

function email_notification_setting_mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux["bindActionCreators"])({
      savePreferences: actions_preferences["savePreferences"]
    }, dispatch)
  };
}

/* harmony default export */ var email_notification_setting = (Object(es["connect"])(email_notification_setting_mapStateToProps, email_notification_setting_mapDispatchToProps)(email_notification_setting_EmailNotificationSetting));
// EXTERNAL MODULE: ./components/autosize_textarea.jsx
var autosize_textarea = __webpack_require__(2014);

// CONCATENATED MODULE: ./components/user_settings/notifications/manage_auto_responder.jsx
function manage_auto_responder_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






const MESSAGE_MAX_LENGTH = 200;
class manage_auto_responder_ManageAutoResponder extends react_default.a.PureComponent {
  constructor(...args) {
    super(...args);

    manage_auto_responder_defineProperty(this, "handleAutoResponderChecked", e => {
      this.props.setParentState('autoResponderActive', e.target.checked);
    });

    manage_auto_responder_defineProperty(this, "onMessageChanged", e => {
      this.props.setParentState('autoResponderMessage', e.target.value);
    });
  }

  render() {
    const {
      autoResponderActive,
      autoResponderMessage
    } = this.props;
    let serverError;

    if (this.props.error) {
      serverError = react_default.a.createElement("label", {
        className: "has-error"
      }, this.props.error);
    }

    const inputs = [];
    const activeToggle = react_default.a.createElement("div", {
      id: "autoResponderCheckbox",
      key: "autoResponderCheckbox",
      className: "checkbox"
    }, react_default.a.createElement("label", null, react_default.a.createElement("input", {
      id: "autoResponderActive",
      type: "checkbox",
      checked: autoResponderActive,
      onChange: this.handleAutoResponderChecked
    }), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "user.settings.notifications.autoResponderEnabled",
      defaultMessage: "Enabled"
    })));
    const message = react_default.a.createElement("div", {
      id: "autoResponderMessage",
      key: "autoResponderMessage"
    }, react_default.a.createElement("div", {
      className: "padding-top"
    }, react_default.a.createElement(autosize_textarea["a" /* default */], {
      style: {
        resize: 'none'
      },
      id: "autoResponderMessageInput",
      className: "form-control",
      rows: "5",
      placeholder: Object(utils["gb" /* localizeMessage */])('user.settings.notifications.autoResponderPlaceholder', 'Message'),
      value: autoResponderMessage,
      maxLength: MESSAGE_MAX_LENGTH,
      onChange: this.onMessageChanged
    }), serverError));
    inputs.push(activeToggle);

    if (autoResponderActive) {
      inputs.push(message);
    }

    inputs.push(react_default.a.createElement("div", {
      key: "autoResponderHint"
    }, react_default.a.createElement("br", null), react_default.a.createElement(index_es["b" /* FormattedHTMLMessage */], {
      id: "user.settings.notifications.autoResponderHint",
      defaultMessage: "Set a custom message that will be automatically sent in response to Direct Messages. Mentions in Public and Private Channels will not trigger the automated reply. Enabling Automatic Replies sets your status to Out of Office and disables email and push notifications."
    })));
    return react_default.a.createElement(setting_item_max["a" /* default */], {
      title: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "user.settings.notifications.autoResponder",
        defaultMessage: "Automatic Direct Message Replies"
      }),
      width: "medium",
      shiftEnter: true,
      submit: this.props.submit,
      saving: this.props.saving,
      inputs: inputs,
      updateSection: this.props.updateSection
    });
  }

}

manage_auto_responder_defineProperty(manage_auto_responder_ManageAutoResponder, "propTypes", {
  autoResponderActive: prop_types_default.a.bool.isRequired,
  autoResponderMessage: prop_types_default.a.string.isRequired,
  updateSection: prop_types_default.a.func.isRequired,
  setParentState: prop_types_default.a.func.isRequired,
  submit: prop_types_default.a.func.isRequired,
  saving: prop_types_default.a.bool.isRequired,
  error: prop_types_default.a.string
});
// CONCATENATED MODULE: ./components/user_settings/notifications/user_settings_notifications.jsx
function user_settings_notifications_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.











function getNotificationsStateFromProps(props) {
  const user = props.user;
  let desktop = constants["q" /* NotificationLevels */].MENTION;
  let sound = 'true';
  let comments = 'never';
  let enableEmail = 'true';
  let pushActivity = constants["q" /* NotificationLevels */].MENTION;
  let pushStatus = constants["N" /* default */].UserStatuses.AWAY;
  let autoResponderActive = false;
  let autoResponderMessage = utils["gb" /* localizeMessage */]('user.settings.notifications.autoResponderDefault', 'Hello, I am out of office and unable to respond to messages.');

  if (user.notify_props) {
    if (user.notify_props.desktop) {
      desktop = user.notify_props.desktop;
    }

    if (user.notify_props.desktop_sound) {
      sound = user.notify_props.desktop_sound;
    }

    if (user.notify_props.comments) {
      comments = user.notify_props.comments;
    }

    if (user.notify_props.email) {
      enableEmail = user.notify_props.email;
    }

    if (user.notify_props.push) {
      pushActivity = user.notify_props.push;
    }

    if (user.notify_props.push_status) {
      pushStatus = user.notify_props.push_status;
    }

    if (user.notify_props.auto_responder_active) {
      autoResponderActive = user.notify_props.auto_responder_active === 'true';
    }

    if (user.notify_props.auto_responder_message) {
      autoResponderMessage = user.notify_props.auto_responder_message;
    }
  }

  let usernameKey = false;
  let customKeys = '';
  let firstNameKey = false;
  let channelKey = false;

  if (user.notify_props) {
    if (user.notify_props.mention_keys) {
      const keys = user.notify_props.mention_keys.split(',');

      if (keys.indexOf(user.username) === -1) {
        usernameKey = false;
      } else {
        usernameKey = true;
        keys.splice(keys.indexOf(user.username), 1);

        if (keys.indexOf(`@${user.username}`) !== -1) {
          keys.splice(keys.indexOf(`@${user.username}`), 1);
        }
      }

      customKeys = keys.join(',');
    }

    if (user.notify_props.first_name) {
      firstNameKey = user.notify_props.first_name === 'true';
    }

    if (user.notify_props.channel) {
      channelKey = user.notify_props.channel === 'true';
    }
  }

  return {
    desktopActivity: desktop,
    enableEmail,
    pushActivity,
    pushStatus,
    desktopSound: sound,
    usernameKey,
    customKeys,
    customKeysChecked: customKeys.length > 0,
    firstNameKey,
    channelKey,
    autoResponderActive,
    autoResponderMessage,
    notifyCommentsLevel: comments,
    isSaving: false
  };
}

const user_settings_notifications_prevSections = {
  desktop: 'dummySectionName',
  // dummy value that should never match any section name
  email: 'desktop',
  push: 'email',
  keys: 'push',
  comments: 'keys'
};
class user_settings_notifications_NotificationsTab extends react_default.a.Component {
  constructor(props) {
    super(props);

    user_settings_notifications_defineProperty(this, "handleSubmit", () => {
      const data = {};
      data.email = this.state.enableEmail;
      data.desktop_sound = this.state.desktopSound;
      data.desktop = this.state.desktopActivity;
      data.push = this.state.pushActivity;
      data.push_status = this.state.pushStatus;
      data.comments = this.state.notifyCommentsLevel;
      data.auto_responder_active = this.state.autoResponderActive.toString();
      data.auto_responder_message = this.state.autoResponderMessage;

      if (!data.auto_responder_message || data.auto_responder_message === '') {
        data.auto_responder_message = utils["gb" /* localizeMessage */]('user.settings.notifications.autoResponderDefault', 'Hello, I am out of office and unable to respond to messages.');
      }

      const mentionKeys = [];

      if (this.state.usernameKey) {
        mentionKeys.push(this.props.user.username);
      }

      let stringKeys = mentionKeys.join(',');

      if (this.state.customKeys.length > 0 && this.state.customKeysChecked) {
        stringKeys += ',' + this.state.customKeys;
      }

      data.mention_keys = stringKeys;
      data.first_name = this.state.firstNameKey.toString();
      data.channel = this.state.channelKey.toString();
      this.setState({
        isSaving: true
      });
      console.log('----notific', {
        notify_props: data
      });
      this.props.actions.updateMe({
        notify_props: data
      }).then(({
        data: result,
        error: err
      }) => {
        if (result) {
          this.updateSection('');
          this.setState(getNotificationsStateFromProps(this.props));
        } else if (err) {
          this.setState({
            serverError: err.message,
            isSaving: false
          });
        }
      });
    });

    user_settings_notifications_defineProperty(this, "handleCancel", e => {
      if (e) {
        e.preventDefault();
      }

      this.setState(getNotificationsStateFromProps(this.props));
    });

    user_settings_notifications_defineProperty(this, "handleUpdateSection", section => {
      if (section) {
        this.props.updateSection(section);
      } else {
        this.props.updateSection('');
        this.handleCancel();
      }
    });

    user_settings_notifications_defineProperty(this, "setStateValue", (key, value) => {
      const data = {};
      data[key] = value;
      this.setState(data);
    });

    user_settings_notifications_defineProperty(this, "updateSection", section => {
      this.setState({
        isSaving: false
      });
      this.props.updateSection(section);
    });

    user_settings_notifications_defineProperty(this, "handleEmailRadio", enableEmail => {
      this.setState({
        enableEmail
      });
    });

    user_settings_notifications_defineProperty(this, "updateUsernameKey", val => {
      this.setState({
        usernameKey: val
      });
    });

    user_settings_notifications_defineProperty(this, "updateFirstNameKey", val => {
      this.setState({
        firstNameKey: val
      });
    });

    user_settings_notifications_defineProperty(this, "updateChannelKey", val => {
      this.setState({
        channelKey: val
      });
    });

    user_settings_notifications_defineProperty(this, "updateCustomMentionKeys", () => {
      const checked = this.refs.customcheck.checked;

      if (checked) {
        const text = this.refs.custommentions.value; // remove all spaces and split string into individual keys

        this.setState({
          customKeys: text.replace(/ /g, ''),
          customKeysChecked: true
        });
      } else {
        this.setState({
          customKeys: '',
          customKeysChecked: false
        });
      }
    });

    user_settings_notifications_defineProperty(this, "onCustomChange", () => {
      this.refs.customcheck.checked = true;
      this.updateCustomMentionKeys();
    });

    user_settings_notifications_defineProperty(this, "createPushNotificationSection", () => {
      if (this.props.activeSection === 'push') {
        const inputs = [];
        let extraInfo = null;
        let submit = null;

        if (this.props.sendPushNotifications) {
          const pushActivityRadio = [false, false, false];

          if (this.state.pushActivity === constants["q" /* NotificationLevels */].ALL) {
            pushActivityRadio[0] = true;
          } else if (this.state.pushActivity === constants["q" /* NotificationLevels */].NONE) {
            pushActivityRadio[2] = true;
          } else {
            pushActivityRadio[1] = true;
          }

          const pushStatusRadio = [false, false, false];

          if (this.state.pushStatus === constants["N" /* default */].UserStatuses.ONLINE) {
            pushStatusRadio[0] = true;
          } else if (this.state.pushStatus === constants["N" /* default */].UserStatuses.AWAY) {
            pushStatusRadio[1] = true;
          } else {
            pushStatusRadio[2] = true;
          }

          let pushStatusSettings;

          if (this.state.pushActivity !== constants["q" /* NotificationLevels */].NONE) {
            pushStatusSettings = react_default.a.createElement("div", null, react_default.a.createElement("hr", null), react_default.a.createElement("label", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
              id: "user.settings.notifications.push_notification.status",
              defaultMessage: "Trigger push notifications when"
            })), react_default.a.createElement("br", null), react_default.a.createElement("div", {
              className: "radio"
            }, react_default.a.createElement("label", null, react_default.a.createElement("input", {
              id: "pushNotificationOnline",
              type: "radio",
              name: "pushNotificationStatus",
              checked: pushStatusRadio[0],
              onChange: this.handlePushStatusRadio.bind(this, constants["N" /* default */].UserStatuses.ONLINE)
            }), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
              id: "user.settings.push_notification.online",
              defaultMessage: "Online, away or offline"
            })), react_default.a.createElement("br", null)), react_default.a.createElement("div", {
              className: "radio"
            }, react_default.a.createElement("label", null, react_default.a.createElement("input", {
              id: "pushNotificationAway",
              type: "radio",
              name: "pushNotificationStatus",
              checked: pushStatusRadio[1],
              onChange: this.handlePushStatusRadio.bind(this, constants["N" /* default */].UserStatuses.AWAY)
            }), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
              id: "user.settings.push_notification.away",
              defaultMessage: "Away or offline"
            })), react_default.a.createElement("br", null)), react_default.a.createElement("div", {
              className: "radio"
            }, react_default.a.createElement("label", null, react_default.a.createElement("input", {
              id: "pushNotificationOffline",
              type: "radio",
              name: "pushNotificationStatus",
              checked: pushStatusRadio[2],
              onChange: this.handlePushStatusRadio.bind(this, constants["N" /* default */].UserStatuses.OFFLINE)
            }), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
              id: "user.settings.push_notification.offline",
              defaultMessage: "Offline"
            }))));
            extraInfo = react_default.a.createElement("span", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
              id: "user.settings.push_notification.status_info",
              defaultMessage: "Notification alerts are only pushed to your mobile device when your online status matches the selection above."
            }));
          }

          inputs.push(react_default.a.createElement("div", {
            key: "userNotificationLevelOption"
          }, react_default.a.createElement("label", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "user.settings.push_notification.send",
            defaultMessage: "Send mobile push notifications"
          })), react_default.a.createElement("br", null), react_default.a.createElement("div", {
            className: "radio"
          }, react_default.a.createElement("label", null, react_default.a.createElement("input", {
            id: "pushNotificationAllActivity",
            type: "radio",
            name: "pushNotificationLevel",
            checked: pushActivityRadio[0],
            onChange: this.handlePushRadio.bind(this, constants["q" /* NotificationLevels */].ALL)
          }), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "user.settings.push_notification.allActivity",
            defaultMessage: "For all activity"
          })), react_default.a.createElement("br", null)), react_default.a.createElement("div", {
            className: "radio"
          }, react_default.a.createElement("label", null, react_default.a.createElement("input", {
            id: "pushNotificationMentions",
            type: "radio",
            name: "pushNotificationLevel",
            checked: pushActivityRadio[1],
            onChange: this.handlePushRadio.bind(this, constants["q" /* NotificationLevels */].MENTION)
          }), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "user.settings.push_notification.onlyMentions",
            defaultMessage: "For mentions and direct messages"
          })), react_default.a.createElement("br", null)), react_default.a.createElement("div", {
            className: "radio"
          }, react_default.a.createElement("label", null, react_default.a.createElement("input", {
            id: "pushNotificationNever",
            type: "radio",
            name: "pushNotificationLevel",
            checked: pushActivityRadio[2],
            onChange: this.handlePushRadio.bind(this, constants["q" /* NotificationLevels */].NONE)
          }), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "user.settings.notifications.never",
            defaultMessage: "Never"
          }))), react_default.a.createElement("br", null), react_default.a.createElement("span", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "user.settings.push_notification.info",
            defaultMessage: "Notification alerts are pushed to your mobile device when there is activity in Mattermost."
          })), pushStatusSettings));
          submit = this.handleSubmit;
        } else {
          inputs.push(react_default.a.createElement("div", {
            key: "oauthEmailInfo",
            className: "padding-top"
          }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "user.settings.push_notification.disabled_long",
            defaultMessage: "Push notifications have not been enabled by your System Administrator."
          })));
        }

        return react_default.a.createElement(setting_item_max["a" /* default */], {
          title: utils["gb" /* localizeMessage */]('user.settings.notifications.push', 'Mobile push notifications'),
          extraInfo: extraInfo,
          inputs: inputs,
          submit: submit,
          server_error: this.state.serverError,
          updateSection: this.handleUpdateSection
        });
      }

      let describe = '';

      if (this.state.pushActivity === constants["q" /* NotificationLevels */].ALL) {
        if (this.state.pushStatus === constants["N" /* default */].UserStatuses.AWAY) {
          describe = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "user.settings.push_notification.allActivityAway",
            defaultMessage: "For all activity when away or offline"
          });
        } else if (this.state.pushStatus === constants["N" /* default */].UserStatuses.OFFLINE) {
          describe = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "user.settings.push_notification.allActivityOffline",
            defaultMessage: "For all activity when offline"
          });
        } else {
          describe = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "user.settings.push_notification.allActivityOnline",
            defaultMessage: "For all activity when online, away or offline"
          });
        }
      } else if (this.state.pushActivity === constants["q" /* NotificationLevels */].NONE) {
        describe = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.notifications.never",
          defaultMessage: "Never"
        });
      } else if (this.props.sendPushNotifications) {
        if (this.state.pushStatus === constants["N" /* default */].UserStatuses.AWAY) {
          //eslint-disable-line no-lonely-if
          describe = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "user.settings.push_notification.onlyMentionsAway",
            defaultMessage: "For mentions and direct messages when away or offline"
          });
        } else if (this.state.pushStatus === constants["N" /* default */].UserStatuses.OFFLINE) {
          describe = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "user.settings.push_notification.onlyMentionsOffline",
            defaultMessage: "For mentions and direct messages when offline"
          });
        } else {
          describe = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "user.settings.push_notification.onlyMentionsOnline",
            defaultMessage: "For mentions and direct messages when online, away or offline"
          });
        }
      } else {
        describe = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.push_notification.disabled",
          defaultMessage: "Push notifications are not enabled"
        });
      }

      return react_default.a.createElement(setting_item_min["a" /* default */], {
        title: utils["gb" /* localizeMessage */]('user.settings.notifications.push', 'Mobile push notifications'),
        describe: describe,
        focused: this.props.prevActiveSection === user_settings_notifications_prevSections.push,
        section: 'push',
        updateSection: this.handleUpdateSection
      });
    });

    this.state = getNotificationsStateFromProps(props);
  }

  handleNotifyCommentsRadio(notifyCommentsLevel) {
    this.setState({
      notifyCommentsLevel
    });
  }

  handlePushRadio(pushActivity) {
    this.setState({
      pushActivity
    });
  }

  handlePushStatusRadio(pushStatus) {
    this.setState({
      pushStatus
    });
  }

  render() {
    const serverError = this.state.serverError;
    const user = this.props.user;
    let keysSection;

    if (this.props.activeSection === 'keys') {
      const inputs = [];

      if (user.first_name) {
        const handleUpdateFirstNameKey = e => {
          this.updateFirstNameKey(e.target.checked);
        };

        inputs.push(react_default.a.createElement("div", {
          key: "userNotificationFirstNameOption"
        }, react_default.a.createElement("div", {
          className: "checkbox"
        }, react_default.a.createElement("label", null, react_default.a.createElement("input", {
          id: "notificationTriggerFirst",
          type: "checkbox",
          checked: this.state.firstNameKey,
          onChange: handleUpdateFirstNameKey
        }), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.notifications.sensitiveName",
          defaultMessage: "Your case sensitive first name \"{first_name}\"",
          values: {
            first_name: user.first_name
          }
        })))));
      }

      const handleUpdateUsernameKey = e => {
        this.updateUsernameKey(e.target.checked);
      };

      inputs.push(react_default.a.createElement("div", {
        key: "userNotificationUsernameOption"
      }, react_default.a.createElement("div", {
        className: "checkbox"
      }, react_default.a.createElement("label", null, react_default.a.createElement("input", {
        id: "notificationTriggerUsername",
        type: "checkbox",
        checked: this.state.usernameKey,
        onChange: handleUpdateUsernameKey
      }), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "user.settings.notifications.sensitiveUsername",
        defaultMessage: "Your non-case sensitive username \"{username}\"",
        values: {
          username: user.username
        }
      })))));

      const handleUpdateChannelKey = e => {
        this.updateChannelKey(e.target.checked);
      };

      inputs.push(react_default.a.createElement("div", {
        key: "userNotificationChannelOption"
      }, react_default.a.createElement("div", {
        className: "checkbox"
      }, react_default.a.createElement("label", null, react_default.a.createElement("input", {
        id: "notificationTriggerShouts",
        type: "checkbox",
        checked: this.state.channelKey,
        onChange: handleUpdateChannelKey
      }), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "user.settings.notifications.channelWide",
        defaultMessage: "Channel-wide mentions \"@channel\", \"@all\", \"@here\""
      })))));
      inputs.push(react_default.a.createElement("div", {
        key: "userNotificationCustomOption"
      }, react_default.a.createElement("div", {
        className: "checkbox"
      }, react_default.a.createElement("label", null, react_default.a.createElement("input", {
        id: "notificationTriggerCustom",
        ref: "customcheck",
        type: "checkbox",
        checked: this.state.customKeysChecked,
        onChange: this.updateCustomMentionKeys
      }), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "user.settings.notifications.sensitiveWords",
        defaultMessage: "Other non-case sensitive words, separated by commas:"
      }))), react_default.a.createElement("input", {
        id: "notificationTriggerCustomText",
        autoFocus: this.state.customKeysChecked,
        ref: "custommentions",
        className: "form-control mentions-input",
        type: "text",
        defaultValue: this.state.customKeys,
        onChange: this.onCustomChange,
        onFocus: utils["ib" /* moveCursorToEnd */]
      })));
      const extraInfo = react_default.a.createElement("span", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "user.settings.notifications.mentionsInfo",
        defaultMessage: "Mentions trigger when someone sends a message that includes your username (@{username}) or any of the options selected above.",
        values: {
          username: user.username
        }
      }));
      keysSection = react_default.a.createElement(setting_item_max["a" /* default */], {
        title: utils["gb" /* localizeMessage */]('user.settings.notifications.wordsTrigger', 'Words that trigger mentions'),
        inputs: inputs,
        submit: this.handleSubmit,
        saving: this.state.isSaving,
        server_error: serverError,
        updateSection: this.handleUpdateSection,
        extraInfo: extraInfo
      });
    } else {
      let keys = ['@' + user.username];

      if (this.state.firstNameKey) {
        keys.push(user.first_name);
      }

      if (this.state.usernameKey) {
        keys.push(user.username);
      }

      if (this.state.channelKey) {
        keys.push('@channel');
        keys.push('@all');
        keys.push('@here');
      }

      if (this.state.customKeys.length > 0) {
        keys = keys.concat(this.state.customKeys.split(','));
      }

      let describe = '';

      for (let i = 0; i < keys.length; i++) {
        if (keys[i] !== '') {
          describe += '"' + keys[i] + '", ';
        }
      }

      if (describe.length > 0) {
        describe = describe.substring(0, describe.length - 2);
      } else {
        describe = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.notifications.noWords",
          defaultMessage: "No words configured"
        });
      }

      keysSection = react_default.a.createElement(setting_item_min["a" /* default */], {
        title: utils["gb" /* localizeMessage */]('user.settings.notifications.wordsTrigger', 'Words that trigger mentions'),
        describe: describe,
        focused: this.props.prevActiveSection === user_settings_notifications_prevSections.keys,
        section: 'keys',
        updateSection: this.handleUpdateSection
      });
    }

    let commentsSection;

    if (this.props.activeSection === 'comments') {
      const commentsActive = [false, false, false];

      if (this.state.notifyCommentsLevel === 'never') {
        commentsActive[2] = true;
      } else if (this.state.notifyCommentsLevel === 'root') {
        commentsActive[1] = true;
      } else {
        commentsActive[0] = true;
      }

      const inputs = [];
      inputs.push(react_default.a.createElement("div", {
        key: "userNotificationLevelOption"
      }, react_default.a.createElement("div", {
        className: "radio"
      }, react_default.a.createElement("label", null, react_default.a.createElement("input", {
        id: "notificationCommentsAny",
        type: "radio",
        name: "commentsNotificationLevel",
        checked: commentsActive[0],
        onChange: this.handleNotifyCommentsRadio.bind(this, 'any')
      }), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "user.settings.notifications.commentsAny",
        defaultMessage: "Trigger notifications on messages in reply threads that I start or participate in"
      })), react_default.a.createElement("br", null)), react_default.a.createElement("div", {
        className: "radio"
      }, react_default.a.createElement("label", null, react_default.a.createElement("input", {
        id: "notificationCommentsRoot",
        type: "radio",
        name: "commentsNotificationLevel",
        checked: commentsActive[1],
        onChange: this.handleNotifyCommentsRadio.bind(this, 'root')
      }), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "user.settings.notifications.commentsRoot",
        defaultMessage: "Trigger notifications on messages in threads that I start"
      })), react_default.a.createElement("br", null)), react_default.a.createElement("div", {
        className: "radio"
      }, react_default.a.createElement("label", null, react_default.a.createElement("input", {
        id: "notificationCommentsNever",
        type: "radio",
        name: "commentsNotificationLevel",
        checked: commentsActive[2],
        onChange: this.handleNotifyCommentsRadio.bind(this, 'never')
      }), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "user.settings.notifications.commentsNever",
        defaultMessage: "Do not trigger notifications on messages in reply threads unless I'm mentioned"
      })))));
      const extraInfo = react_default.a.createElement("span", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "user.settings.notifications.commentsInfo",
        defaultMessage: "In addition to notifications for when you're mentioned, select if you would like to receive notifications on reply threads."
      }));
      commentsSection = react_default.a.createElement(setting_item_max["a" /* default */], {
        title: utils["gb" /* localizeMessage */]('user.settings.notifications.comments', 'Reply notifications'),
        extraInfo: extraInfo,
        inputs: inputs,
        submit: this.handleSubmit,
        saving: this.state.isSaving,
        server_error: serverError,
        updateSection: this.handleUpdateSection
      });
    } else {
      let describe = '';

      if (this.state.notifyCommentsLevel === 'never') {
        describe = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.notifications.commentsNever",
          defaultMessage: "Do not trigger notifications on messages in reply threads unless I'm mentioned"
        });
      } else if (this.state.notifyCommentsLevel === 'root') {
        describe = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.notifications.commentsRoot",
          defaultMessage: "Trigger notifications on messages in threads that I start"
        });
      } else {
        describe = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.notifications.commentsAny",
          defaultMessage: "Trigger notifications on messages in reply threads that I start or participate in"
        });
      }

      commentsSection = react_default.a.createElement(setting_item_min["a" /* default */], {
        title: utils["gb" /* localizeMessage */]('user.settings.notifications.comments', 'Reply notifications'),
        describe: describe,
        focused: this.props.prevActiveSection === user_settings_notifications_prevSections.comments,
        section: 'comments',
        updateSection: this.handleUpdateSection
      });
    }

    let autoResponderSection;

    if (this.props.enableAutoResponder) {
      if (this.props.activeSection === 'auto-responder') {
        autoResponderSection = react_default.a.createElement("div", null, react_default.a.createElement(manage_auto_responder_ManageAutoResponder, {
          autoResponderActive: this.state.autoResponderActive,
          autoResponderMessage: this.state.autoResponderMessage,
          updateSection: this.updateSection,
          setParentState: this.setStateValue,
          submit: this.handleSubmit,
          error: this.state.serverError,
          saving: this.state.isSaving
        }), react_default.a.createElement("div", {
          className: "divider-dark"
        }));
      } else {
        const describe = this.state.autoResponderActive ? react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.notifications.autoResponderEnabled",
          defaultMessage: "Enabled"
        }) : react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.notifications.autoResponderDisabled",
          defaultMessage: "Disabled"
        });
        autoResponderSection = react_default.a.createElement(setting_item_min["a" /* default */], {
          title: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "user.settings.notifications.autoResponder",
            defaultMessage: "Automatic Direct Message Replies"
          }),
          width: "medium",
          describe: describe,
          section: 'auto-responder',
          updateSection: this.updateSection
        });
      }
    }

    const pushNotificationSection = this.createPushNotificationSection();
    return react_default.a.createElement("div", {
      id: "notificationSettings"
    }, react_default.a.createElement("div", {
      className: "modal-header"
    }, react_default.a.createElement("button", {
      id: "closeButton",
      type: "button",
      className: "close",
      "data-dismiss": "modal",
      onClick: this.props.closeModal
    }, react_default.a.createElement("span", {
      "aria-hidden": "true"
    }, '×')), react_default.a.createElement("h4", {
      className: "modal-title",
      ref: "title"
    }, react_default.a.createElement("div", {
      className: "modal-back"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "generic_icons.collapse",
      defaultMessage: "Collapse Icon"
    }, title => react_default.a.createElement("i", {
      className: "fa fa-angle-left",
      title: title,
      onClick: this.props.collapseModal
    }))), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "user.settings.notifications.title",
      defaultMessage: "Notification Settings"
    }))), react_default.a.createElement("div", {
      ref: "wrapper",
      className: "user-settings"
    }, react_default.a.createElement("h3", {
      id: "notificationSettingsTitle",
      className: "tab-header"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "user.settings.notifications.header",
      defaultMessage: "Notifications"
    })), react_default.a.createElement("div", {
      className: "divider-dark first"
    }), react_default.a.createElement(desktop_notification_settings_DesktopNotificationSettings, {
      activity: this.state.desktopActivity,
      sound: this.state.desktopSound,
      updateSection: this.handleUpdateSection,
      setParentState: this.setStateValue,
      submit: this.handleSubmit,
      saving: this.state.isSaving,
      cancel: this.handleCancel,
      error: this.state.serverError,
      active: this.props.activeSection === 'desktop',
      focused: this.props.prevActiveSection === user_settings_notifications_prevSections.desktop
    }), react_default.a.createElement("div", {
      className: "divider-light"
    }), react_default.a.createElement(email_notification_setting, {
      activeSection: this.props.activeSection,
      updateSection: this.props.updateSection,
      enableEmail: this.state.enableEmail === 'true',
      onSubmit: this.handleSubmit,
      onCancel: this.handleCancel,
      onChange: this.handleEmailRadio,
      saving: this.state.isSaving,
      serverError: this.state.serverError,
      focused: this.props.prevActiveSection === user_settings_notifications_prevSections.email,
      siteName: this.props.siteName
    }), react_default.a.createElement("div", {
      className: "divider-light"
    }), pushNotificationSection, react_default.a.createElement("div", {
      className: "divider-light"
    }), keysSection, react_default.a.createElement("div", {
      className: "divider-light"
    }), commentsSection, react_default.a.createElement("div", {
      className: "divider-light"
    }), autoResponderSection, react_default.a.createElement("div", {
      className: "divider-dark"
    })));
  }

}

user_settings_notifications_defineProperty(user_settings_notifications_NotificationsTab, "propTypes", {
  user: prop_types_default.a.object,
  updateSection: prop_types_default.a.func,
  activeSection: prop_types_default.a.string,
  prevActiveSection: prop_types_default.a.string,
  closeModal: prop_types_default.a.func.isRequired,
  collapseModal: prop_types_default.a.func.isRequired,
  siteName: prop_types_default.a.string,
  sendPushNotifications: prop_types_default.a.bool,
  enableAutoResponder: prop_types_default.a.bool,
  actions: prop_types_default.a.shape({
    updateMe: prop_types_default.a.func.isRequired
  }).isRequired
});

user_settings_notifications_defineProperty(user_settings_notifications_NotificationsTab, "defaultProps", {
  user: null,
  activeSection: '',
  prevActiveSection: '',
  activeTab: ''
});
// CONCATENATED MODULE: ./components/user_settings/notifications/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






function notifications_mapStateToProps(state) {
  const config = Object(general["getConfig"])(state);
  const siteName = config.SiteName;
  const sendPushNotifications = config.SendPushNotifications === 'true';
  const enableAutoResponder = config.ExperimentalEnableAutomaticReplies === 'true';
  return {
    siteName,
    sendPushNotifications,
    enableAutoResponder
  };
}

function notifications_mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux["bindActionCreators"])({
      updateMe: actions_users["updateMe"]
    }, dispatch)
  };
}

/* harmony default export */ var notifications = (Object(es["connect"])(notifications_mapStateToProps, notifications_mapDispatchToProps)(user_settings_notifications_NotificationsTab));
// EXTERNAL MODULE: ./mattermost-redux/actions/integrations.js
var integrations = __webpack_require__(1591);

// EXTERNAL MODULE: ./mattermost-redux/utils/user_utils.js
var user_utils = __webpack_require__(104);

// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js + 1 modules
var react_router_dom = __webpack_require__(1553);

// EXTERNAL MODULE: ./images/icon50x50.png
var icon50x50 = __webpack_require__(423);
var icon50x50_default = /*#__PURE__*/__webpack_require__.n(icon50x50);

// EXTERNAL MODULE: ./components/access_history_modal/index.js + 1 modules
var access_history_modal = __webpack_require__(2275);

// EXTERNAL MODULE: ./components/activity_log_modal/index.js + 3 modules
var activity_log_modal = __webpack_require__(2258);

// EXTERNAL MODULE: ./components/toggle_modal_button.jsx
var toggle_modal_button = __webpack_require__(1712);

// EXTERNAL MODULE: ./actions/views/mfa.js
var mfa = __webpack_require__(1815);

// EXTERNAL MODULE: ./utils/browser_history.jsx
var browser_history = __webpack_require__(114);

// CONCATENATED MODULE: ./components/user_settings/security/mfa_section/mfa_section.jsx
function mfa_section_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






const SECTION_MFA = 'mfa';
class mfa_section_MfaSection extends react_default.a.PureComponent {
  constructor(...args) {
    super(...args);

    mfa_section_defineProperty(this, "state", {
      serverError: null
    });

    mfa_section_defineProperty(this, "setupMfa", e => {
      e.preventDefault();
      browser_history["a" /* browserHistory */].push('/mfa/setup');
    });

    mfa_section_defineProperty(this, "removeMfa", async e => {
      e.preventDefault();
      const {
        error
      } = await this.props.actions.deactivateMfa();

      if (error) {
        this.setState({
          serverError: error.message
        });
        return;
      }

      if (this.props.mfaEnforced) {
        browser_history["a" /* browserHistory */].push('/mfa/setup');
        return;
      }

      this.props.updateSection('');
      this.setState({
        serverError: null
      });
    });

    mfa_section_defineProperty(this, "renderTitle", () => {
      return react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "user.settings.mfa.title",
        defaultMessage: "Multi-factor Authentication"
      });
    });

    mfa_section_defineProperty(this, "renderDescription", () => {
      if (this.props.mfaActive) {
        return react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.security.active",
          defaultMessage: "Active"
        });
      }

      return react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "user.settings.security.inactive",
        defaultMessage: "Inactive"
      });
    });

    mfa_section_defineProperty(this, "renderContent", () => {
      let content;

      if (this.props.mfaActive) {
        let buttonText;

        if (this.props.mfaEnforced) {
          buttonText = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "user.settings.mfa.reset",
            defaultMessage: "Reset MFA on your account"
          });
        } else {
          buttonText = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "user.settings.mfa.remove",
            defaultMessage: "Remove MFA from your account"
          });
        }

        content = react_default.a.createElement("a", {
          className: "btn btn-primary",
          href: "#",
          onClick: this.removeMfa
        }, buttonText);
      } else {
        content = react_default.a.createElement("a", {
          className: "btn btn-primary",
          href: "#",
          onClick: this.setupMfa
        }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.mfa.add",
          defaultMessage: "Add MFA to your account"
        }));
      }

      return react_default.a.createElement("div", {
        className: "padding-top"
      }, content, react_default.a.createElement("br", null));
    });

    mfa_section_defineProperty(this, "renderHelpText", () => {
      if (this.props.mfaActive) {
        if (this.props.mfaEnforced) {
          return react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "user.settings.mfa.requiredHelp",
            defaultMessage: "Multi-factor authentication is required on this server. Resetting is only recommended when you need to switch code generation to a new mobile device. You will be required to set it up again immediately."
          });
        }

        return react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.mfa.removeHelp",
          defaultMessage: "Removing multi-factor authentication means you will no longer require a phone-based passcode to sign-in to your account."
        });
      }

      return react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "user.settings.mfa.addHelp",
        defaultMessage: "Adding multi-factor authentication will make your account more secure by requiring a code from your mobile phone each time you sign in."
      });
    });
  }

  render() {
    const title = this.renderTitle();

    if (!this.props.mfaAvailable) {
      return null;
    }

    if (!this.props.active) {
      return react_default.a.createElement(setting_item_min["a" /* default */], {
        title: title,
        describe: this.renderDescription(),
        section: SECTION_MFA,
        updateSection: this.props.updateSection
      });
    }

    return react_default.a.createElement(setting_item_max["a" /* default */], {
      title: title,
      inputs: this.renderContent(),
      extraInfo: this.renderHelpText(),
      serverError: this.state.serverError,
      updateSection: this.props.updateSection,
      width: "medium"
    });
  }

}

mfa_section_defineProperty(mfa_section_MfaSection, "propTypes", {
  active: prop_types_default.a.bool.isRequired,
  // Whether or not the current user has MFA enabled
  mfaActive: prop_types_default.a.bool.isRequired,
  // Whether or not the current user can enable MFA based on their authentication type and the server's settings
  mfaAvailable: prop_types_default.a.bool.isRequired,
  // Whether or not this server enforces that all users have MFA
  mfaEnforced: prop_types_default.a.bool.isRequired,
  updateSection: prop_types_default.a.func.isRequired,
  actions: prop_types_default.a.shape({
    deactivateMfa: prop_types_default.a.func.isRequired
  })
});
// CONCATENATED MODULE: ./components/user_settings/security/mfa_section/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.








function mfa_section_mapStateToProps(state) {
  const license = Object(general["getLicense"])(state);
  const config = Object(general["getConfig"])(state);
  const mfaLicensed = license && license.IsLicensed === 'true' && license.MFA === 'true';
  const mfaEnabled = config.EnableMultifactorAuthentication === 'true';
  const mfaEnforced = mfaLicensed && config.EnforceMultifactorAuthentication === 'true';
  const user = Object(users["getCurrentUser"])(state);
  let mfaActive = false;
  let mfaAvailable = false;

  if (user) {
    mfaActive = user.mfa_active;
    mfaAvailable = mfaEnabled && (user.auth_service === '' || user.auth_service === constants["N" /* default */].LDAP_SERVICE);
  }

  return {
    mfaActive,
    mfaAvailable,
    mfaEnforced
  };
}

function mfa_section_mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux["bindActionCreators"])({
      deactivateMfa: mfa["b" /* deactivateMfa */]
    }, dispatch)
  };
}

/* harmony default export */ var mfa_section = (Object(es["connect"])(mfa_section_mapStateToProps, mfa_section_mapDispatchToProps)(mfa_section_MfaSection));
// EXTERNAL MODULE: ./components/save_button.jsx
var save_button = __webpack_require__(1612);

// EXTERNAL MODULE: ./components/icon/warning_icon.jsx
var warning_icon = __webpack_require__(1621);

// CONCATENATED MODULE: ./components/user_settings/security/user_access_token_section/user_access_token_section.jsx
function user_access_token_section_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.














const SECTION_TOKENS = 'tokens';
const TOKEN_CREATING = 'creating';
const TOKEN_CREATED = 'created';
const TOKEN_NOT_CREATING = 'not_creating';
class user_access_token_section_UserAccessTokenSection extends react_default.a.Component {
  constructor(props) {
    super(props);

    user_access_token_section_defineProperty(this, "startCreatingToken", () => {
      this.setState({
        tokenCreationState: TOKEN_CREATING
      });
    });

    user_access_token_section_defineProperty(this, "stopCreatingToken", () => {
      this.setState({
        tokenCreationState: TOKEN_NOT_CREATING,
        saving: false
      });
    });

    user_access_token_section_defineProperty(this, "handleCreateToken", async () => {
      this.handleCancelConfirm();
      const description = this.refs.newtokendescription ? this.refs.newtokendescription.value : '';

      if (description === '') {
        this.setState({
          tokenError: utils["gb" /* localizeMessage */]('user.settings.tokens.nameRequired', 'Please enter a description.')
        });
        return;
      }

      this.setState({
        tokenError: '',
        saving: true
      });
      this.props.setRequireConfirm(true, this.confirmCopyToken);
      const userId = this.props.user ? this.props.user.id : '';
      const {
        data,
        error
      } = await this.props.actions.createUserAccessToken(userId, description);

      if (data && this.state.tokenCreationState === TOKEN_CREATING) {
        this.setState({
          tokenCreationState: TOKEN_CREATED,
          newToken: data,
          saving: false
        });
      } else if (error) {
        this.setState({
          serverError: error.message,
          saving: false
        });
      }
    });

    user_access_token_section_defineProperty(this, "confirmCopyToken", confirmAction => {
      this.setState({
        showConfirmModal: true,
        confirmTitle: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.tokens.confirmCopyTitle",
          defaultMessage: "Have you copied your token?"
        }),
        confirmMessage: state => react_default.a.createElement("div", null, react_default.a.createElement(index_es["b" /* FormattedHTMLMessage */], {
          id: "user.settings.tokens.confirmCopyMessage",
          defaultMessage: "Make sure you have copied and saved the access token below. You won't be able to see it again!"
        }), react_default.a.createElement("br", null), react_default.a.createElement("br", null), state.tokenCreationState === TOKEN_CREATING ? react_default.a.createElement("div", null, react_default.a.createElement("strong", {
          className: "word-break--all"
        }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.tokens.token",
          defaultMessage: "Access Token: "
        })), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.tokens.tokenLoading",
          defaultMessage: "Loading..."
        })) : react_default.a.createElement("strong", {
          className: "word-break--all"
        }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.tokens.token",
          defaultMessage: "Access Token: "
        }), state.newToken.token)),
        confirmButton: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.tokens.confirmCopyButton",
          defaultMessage: "Yes, I have copied the token"
        }),
        confirmComplete: () => {
          this.handleCancelConfirm();
          confirmAction();
        },
        confirmHideCancel: true
      });
    });

    user_access_token_section_defineProperty(this, "handleCancelConfirm", () => {
      this.setState({
        showConfirmModal: false,
        confirmTitle: null,
        confirmMessage: null,
        confirmButton: null,
        confirmComplete: null,
        confirmHideCancel: false
      });
    });

    user_access_token_section_defineProperty(this, "confirmCreateToken", () => {
      if (!user_utils["isSystemAdmin"](this.props.user.roles)) {
        this.handleCreateToken();
        return;
      }

      this.setState({
        showConfirmModal: true,
        confirmTitle: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.tokens.confirmCreateTitle",
          defaultMessage: "Create System Admin Personal Access Token"
        }),
        confirmMessage: () => react_default.a.createElement("div", {
          className: "alert alert-danger"
        }, react_default.a.createElement(index_es["b" /* FormattedHTMLMessage */], {
          id: "user.settings.tokens.confirmCreateMessage",
          defaultMessage: "You are generating a personal access token with System Admin permissions. Are you sure want to create this token?"
        })),
        confirmButton: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.tokens.confirmCreateButton",
          defaultMessage: "Yes, Create"
        }),
        confirmComplete: () => {
          this.handleCreateToken();
          Object(diagnostics_actions["d" /* trackEvent */])('settings', 'system_admin_create_user_access_token');
        }
      });
    });

    user_access_token_section_defineProperty(this, "saveTokenKeyPress", e => {
      if (utils["V" /* isKeyPressed */](e, constants["N" /* default */].KeyCodes.ENTER)) {
        this.confirmCreateToken();
      }
    });

    user_access_token_section_defineProperty(this, "confirmRevokeToken", tokenId => {
      const token = this.props.userAccessTokens[tokenId];
      this.setState({
        showConfirmModal: true,
        confirmTitle: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.tokens.confirmDeleteTitle",
          defaultMessage: "Delete Token?"
        }),
        confirmMessage: () => react_default.a.createElement("div", {
          className: "alert alert-danger"
        }, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
          id: "user.settings.tokens.confirmDeleteMessage",
          defaultMessage: "Any integrations using this token will no longer be able to access the Mattermost API. You cannot undo this action. \\n \\nAre you sure want to delete the **{description}** token?",
          values: {
            description: token.description
          }
        })),
        confirmButton: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.tokens.confirmDeleteButton",
          defaultMessage: "Yes, Delete"
        }),
        confirmComplete: () => {
          this.revokeToken(tokenId);
          Object(diagnostics_actions["d" /* trackEvent */])('settings', 'revoke_user_access_token');
        }
      });
    });

    user_access_token_section_defineProperty(this, "revokeToken", async tokenId => {
      const {
        error
      } = await this.props.actions.revokeUserAccessToken(tokenId);

      if (error) {
        this.setState({
          serverError: error.message
        });
      }

      this.handleCancelConfirm();
    });

    user_access_token_section_defineProperty(this, "activateToken", async tokenId => {
      const {
        error
      } = await this.props.actions.enableUserAccessToken(tokenId);

      if (error) {
        this.setState({
          serverError: error.message
        });
      } else {
        Object(diagnostics_actions["d" /* trackEvent */])('settings', 'activate_user_access_token');
      }
    });

    user_access_token_section_defineProperty(this, "deactivateToken", async tokenId => {
      const {
        error
      } = await this.props.actions.disableUserAccessToken(tokenId);

      if (error) {
        this.setState({
          serverError: error.message
        });
      } else {
        Object(diagnostics_actions["d" /* trackEvent */])('settings', 'deactivate_user_access_token');
      }
    });

    this.state = {
      showConfirmModal: false,
      newToken: null,
      tokenCreationState: TOKEN_NOT_CREATING,
      tokenError: '',
      serverError: null,
      saving: false
    };
  }

  componentDidMount() {
    this.props.actions.clearUserAccessTokens();
    const userId = this.props.user ? this.props.user.id : '';
    this.props.actions.getUserAccessTokensForUser(userId, 0, 200);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    // eslint-disable-line camelcase
    if (!nextProps.active && this.props.active) {
      this.setState({
        showConfirmModal: false,
        newToken: null,
        tokenCreationState: TOKEN_NOT_CREATING,
        tokenError: '',
        serverError: null,
        saving: false
      });
    }
  }

  render() {
    let tokenListClass = '';

    if (!this.props.active) {
      const describe = utils["gb" /* localizeMessage */]('user.settings.tokens.clickToEdit', "Click 'Edit' to manage your personal access tokens");
      return react_default.a.createElement(setting_item_min["a" /* default */], {
        title: utils["gb" /* localizeMessage */]('user.settings.tokens.title', 'Personal Access Tokens'),
        describe: describe,
        section: SECTION_TOKENS,
        updateSection: this.props.updateSection
      });
    }

    const tokenList = [];
    Object.values(this.props.userAccessTokens).forEach(token => {
      if (this.state.newToken && this.state.newToken.id === token.id) {
        return;
      }

      let activeLink;
      let activeStatus;

      if (token.is_active) {
        activeLink = react_default.a.createElement("a", {
          name: token.id + '_deactivate',
          href: "#",
          onClick: e => {
            e.preventDefault();
            this.deactivateToken(token.id);
          }
        }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.tokens.deactivate",
          defaultMessage: "Disable"
        }));
      } else {
        activeStatus = react_default.a.createElement("span", {
          className: "has-error setting-box__inline-error"
        }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.tokens.deactivatedWarning",
          defaultMessage: "(Disabled)"
        }));
        activeLink = react_default.a.createElement("a", {
          name: token.id + '_activate',
          href: "#",
          onClick: e => {
            e.preventDefault();
            this.activateToken(token.id);
          }
        }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.tokens.activate",
          defaultMessage: "Enable"
        }));
      }

      tokenList.push(react_default.a.createElement("div", {
        key: token.id,
        className: "setting-box__item"
      }, react_default.a.createElement("div", {
        className: "whitespace--nowrap overflow--ellipsis"
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "user.settings.tokens.tokenDesc",
        defaultMessage: "Token Description: "
      }), token.description, activeStatus), react_default.a.createElement("div", {
        className: "setting-box__token-id whitespace--nowrap overflow--ellipsis"
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "user.settings.tokens.tokenId",
        defaultMessage: "Token ID: "
      }), token.id), react_default.a.createElement("div", null, activeLink, ' - ', react_default.a.createElement("a", {
        name: token.id + '_delete',
        href: "#",
        onClick: e => {
          e.preventDefault();
          this.confirmRevokeToken(token.id);
        }
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "user.settings.tokens.delete",
        defaultMessage: "Delete"
      }))), react_default.a.createElement("hr", {
        className: "margin-bottom margin-top x2"
      })));
    });
    let noTokenText;

    if (tokenList.length === 0) {
      noTokenText = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        key: "notokens",
        id: "user.settings.tokens.userAccessTokensNone",
        defaultMessage: "No personal access tokens."
      });
    }

    let extraInfo;

    if (Object(user_agent["m" /* isMobile */])()) {
      extraInfo = react_default.a.createElement("span", null, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
        id: "user.settings.tokens.description_mobile",
        defaultMessage: "[Personal access tokens](!https://about.mattermost.com/default-user-access-tokens) function similarly to session tokens and can be used by integrations to [authenticate against the REST API](!https://about.mattermost.com/default-api-authentication). Create new tokens on your desktop."
      }));
    } else {
      extraInfo = react_default.a.createElement("span", null, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
        id: "user.settings.tokens.description",
        defaultMessage: "[Personal access tokens](!https://about.mattermost.com/default-user-access-tokens) function similarly to session tokens and can be used by integrations to [authenticate against the REST API](!https://about.mattermost.com/default-api-authentication)."
      }));
    }

    let newTokenSection;

    if (this.state.tokenCreationState === TOKEN_CREATING) {
      newTokenSection = react_default.a.createElement("div", {
        className: "padding-left x2"
      }, react_default.a.createElement("div", {
        className: "row"
      }, react_default.a.createElement("label", {
        className: "col-sm-auto control-label padding-right x2"
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "user.settings.tokens.name",
        defaultMessage: "Token Description: "
      })), react_default.a.createElement("div", {
        className: "col-sm-5"
      }, react_default.a.createElement("input", {
        autoFocus: true,
        ref: "newtokendescription",
        className: "form-control",
        type: "text",
        maxLength: 64,
        onKeyPress: this.saveTokenKeyPress
      }))), react_default.a.createElement("div", null, react_default.a.createElement("div", {
        className: "padding-top x2"
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "user.settings.tokens.nameHelp",
        defaultMessage: "Enter a description for your token to remember what it does."
      })), react_default.a.createElement("div", null, react_default.a.createElement("label", {
        id: "clientError",
        className: "has-error margin-top margin-bottom"
      }, this.state.tokenError)), react_default.a.createElement(save_button["a" /* default */], {
        btnClass: "btn-primary",
        savingMessage: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.tokens.save",
          defaultMessage: "Save"
        }),
        saving: this.state.saving,
        onClick: this.confirmCreateToken
      }), react_default.a.createElement("button", {
        className: "btn btn-link",
        onClick: this.stopCreatingToken
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "user.settings.tokens.cancel",
        defaultMessage: "Cancel"
      }))));
    } else if (this.state.tokenCreationState === TOKEN_CREATED) {
      if (tokenList.length === 0) {
        tokenListClass = ' hidden';
      }

      newTokenSection = react_default.a.createElement("div", {
        className: "alert alert-warning"
      }, react_default.a.createElement(warning_icon["a" /* default */], {
        additionalClassName: "margin-right"
      }), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "user.settings.tokens.copy",
        defaultMessage: "Please copy the access token below. You won't be able to see it again!"
      }), react_default.a.createElement("br", null), react_default.a.createElement("br", null), react_default.a.createElement("div", {
        className: "whitespace--nowrap overflow--ellipsis"
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "user.settings.tokens.name",
        defaultMessage: "Token Description: "
      }), this.state.newToken.description), react_default.a.createElement("div", {
        className: "whitespace--nowrap overflow--ellipsis"
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "user.settings.tokens.id",
        defaultMessage: "Token ID: "
      }), this.state.newToken.id), react_default.a.createElement("strong", {
        className: "word-break--all"
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "user.settings.tokens.token",
        defaultMessage: "Access Token: "
      }), this.state.newToken.token));
    } else {
      newTokenSection = react_default.a.createElement("a", {
        className: "btn btn-primary",
        href: "#",
        onClick: this.startCreatingToken
      }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "user.settings.tokens.create",
        defaultMessage: "Create New Token"
      }));
    }

    const inputs = [];
    inputs.push(react_default.a.createElement("div", {
      key: "tokensSetting",
      className: "padding-top"
    }, react_default.a.createElement("div", {
      key: "tokenList"
    }, react_default.a.createElement("div", {
      className: 'alert alert-transparent' + tokenListClass
    }, tokenList, noTokenText), newTokenSection)));
    return react_default.a.createElement("div", null, react_default.a.createElement(setting_item_max["a" /* default */], {
      title: utils["gb" /* localizeMessage */]('user.settings.tokens.title', 'Personal Access Tokens'),
      inputs: inputs,
      extraInfo: extraInfo,
      infoPosition: "top",
      serverError: this.state.serverError,
      updateSection: this.props.updateSection,
      width: "full",
      saving: this.state.saving,
      cancelButtonText: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "user.settings.security.close",
        defaultMessage: "Close"
      })
    }), react_default.a.createElement(confirm_modal["a" /* default */], {
      title: this.state.confirmTitle,
      message: this.state.confirmMessage ? this.state.confirmMessage(this.state) : null,
      confirmButtonText: this.state.confirmButton,
      show: this.state.showConfirmModal,
      onConfirm: this.state.confirmComplete || (() => {}) //eslint-disable-line no-empty-function
      ,
      onCancel: this.handleCancelConfirm,
      hideCancel: this.state.confirmHideCancel
    }));
  }

}

user_access_token_section_defineProperty(user_access_token_section_UserAccessTokenSection, "propTypes", {
  user: prop_types_default.a.object,
  active: prop_types_default.a.bool,
  updateSection: prop_types_default.a.func,
  userAccessTokens: prop_types_default.a.object,
  setRequireConfirm: prop_types_default.a.func.isRequired,
  actions: prop_types_default.a.shape({
    getUserAccessTokensForUser: prop_types_default.a.func.isRequired,
    createUserAccessToken: prop_types_default.a.func.isRequired,
    revokeUserAccessToken: prop_types_default.a.func.isRequired,
    enableUserAccessToken: prop_types_default.a.func.isRequired,
    disableUserAccessToken: prop_types_default.a.func.isRequired,
    clearUserAccessTokens: prop_types_default.a.func.isRequired
  }).isRequired
});

user_access_token_section_defineProperty(user_access_token_section_UserAccessTokenSection, "defaultProps", {
  user: {},
  active: false
});
// CONCATENATED MODULE: ./components/user_settings/security/user_access_token_section/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





function user_access_token_section_mapStateToProps(state) {
  return {
    userAccessTokens: state.entities.users.myUserAccessTokens
  };
}

function user_access_token_section_mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux["bindActionCreators"])({
      getUserAccessTokensForUser: actions_users["getUserAccessTokensForUser"],
      createUserAccessToken: actions_users["createUserAccessToken"],
      revokeUserAccessToken: actions_users["revokeUserAccessToken"],
      enableUserAccessToken: actions_users["enableUserAccessToken"],
      disableUserAccessToken: actions_users["disableUserAccessToken"],
      clearUserAccessTokens: actions_users["clearUserAccessTokens"]
    }, dispatch)
  };
}

/* harmony default export */ var user_access_token_section = (Object(es["connect"])(user_access_token_section_mapStateToProps, user_access_token_section_mapDispatchToProps)(user_access_token_section_UserAccessTokenSection));
// CONCATENATED MODULE: ./components/user_settings/security/user_settings_security.jsx
function user_settings_security_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.














const user_settings_security_SECTION_MFA = 'mfa';
const SECTION_PASSWORD = 'password';
const SECTION_SIGNIN = 'signin';
const SECTION_APPS = 'apps';
const user_settings_security_SECTION_TOKENS = 'tokens';
class user_settings_security_SecurityTab extends react_default.a.PureComponent {
  constructor(props) {
    super(props);

    user_settings_security_defineProperty(this, "loadAuthorizedOAuthApps", async () => {
      const {
        data,
        error
      } = await this.props.actions.getAuthorizedOAuthApps();

      if (data) {
        this.setState({
          authorizedApps: data,
          serverError: null
        }); //eslint-disable-line react/no-did-mount-set-state
      } else if (error) {
        this.setState({
          serverError: error.message
        }); //eslint-disable-line react/no-did-mount-set-state
      }
    });

    user_settings_security_defineProperty(this, "submitPassword", async () => {
      const user = this.props.user;
      const currentPassword = this.state.currentPassword;
      const newPassword = this.state.newPassword;
      const confirmPassword = this.state.confirmPassword;

      if (currentPassword === '') {
        this.setState({
          passwordError: utils["gb" /* localizeMessage */]('user.settings.security.currentPasswordError', 'Please enter your current password.'),
          serverError: ''
        });
        return;
      }

      const {
        valid,
        error
      } = utils["db" /* isValidPassword */](newPassword, this.props.passwordConfig);

      if (!valid && error) {
        this.setState({
          passwordError: error,
          serverError: ''
        });
        return;
      }

      if (newPassword !== confirmPassword) {
        const defaultState = Object.assign(this.getDefaultState(), {
          passwordError: utils["gb" /* localizeMessage */]('user.settings.security.passwordMatchError', 'The new passwords you entered do not match.'),
          serverError: ''
        });
        this.setState(defaultState);
        return;
      }

      this.setState({
        savingPassword: true
      });
      const {
        data,
        error: err
      } = await this.props.actions.updateUserPassword(user.id, currentPassword, newPassword);

      if (data) {
        this.props.updateSection('');
        this.props.actions.getMe();
        this.setState(this.getDefaultState());
      } else if (err) {
        const state = this.getDefaultState();

        if (err.message) {
          state.serverError = err.message;
        } else {
          state.serverError = err;
        }

        state.passwordError = '';
        this.setState(state);
      }
    });

    user_settings_security_defineProperty(this, "updateCurrentPassword", e => {
      this.setState({
        currentPassword: e.target.value
      });
    });

    user_settings_security_defineProperty(this, "updateNewPassword", e => {
      this.setState({
        newPassword: e.target.value
      });
    });

    user_settings_security_defineProperty(this, "updateConfirmPassword", e => {
      this.setState({
        confirmPassword: e.target.value
      });
    });

    user_settings_security_defineProperty(this, "deauthorizeApp", async e => {
      e.preventDefault();
      const appId = e.currentTarget.getAttribute('data-app');
      const {
        data,
        error
      } = await this.props.actions.deauthorizeOAuthApp(appId);

      if (data) {
        const authorizedApps = this.state.authorizedApps.filter(app => {
          return app.id !== appId;
        });
        this.setState({
          authorizedApps,
          serverError: null
        });
      } else if (error) {
        this.setState({
          serverError: error.message
        });
      }
    });

    user_settings_security_defineProperty(this, "handleUpdateSection", section => {
      if (section) {
        this.props.updateSection(section);
      } else {
        switch (this.props.activeSection) {
          case user_settings_security_SECTION_MFA:
          case SECTION_SIGNIN:
          case user_settings_security_SECTION_TOKENS:
          case SECTION_APPS:
            this.setState({
              serverError: null
            });
            break;

          case SECTION_PASSWORD:
            this.setState({
              currentPassword: '',
              newPassword: '',
              confirmPassword: '',
              serverError: null,
              passwordError: null
            });
            break;

          default:
        }

        this.props.updateSection('');
      }
    });

    user_settings_security_defineProperty(this, "createPasswordSection", () => {
      if (this.props.activeSection === SECTION_PASSWORD) {
        const inputs = [];
        let submit;

        if (this.props.user.auth_service === '') {
          submit = this.submitPassword;
          inputs.push(react_default.a.createElement("div", {
            key: "currentPasswordUpdateForm",
            className: "form-group"
          }, react_default.a.createElement("label", {
            className: "col-sm-5 control-label"
          }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "user.settings.security.currentPassword",
            defaultMessage: "Current Password"
          })), react_default.a.createElement("div", {
            className: "col-sm-7"
          }, react_default.a.createElement("input", {
            id: "currentPassword",
            autoFocus: true,
            className: "form-control",
            type: "password",
            onChange: this.updateCurrentPassword,
            value: this.state.currentPassword
          }))));
          inputs.push(react_default.a.createElement("div", {
            key: "newPasswordUpdateForm",
            className: "form-group"
          }, react_default.a.createElement("label", {
            className: "col-sm-5 control-label"
          }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "user.settings.security.newPassword",
            defaultMessage: "New Password"
          })), react_default.a.createElement("div", {
            className: "col-sm-7"
          }, react_default.a.createElement("input", {
            id: "newPassword",
            className: "form-control",
            type: "password",
            onChange: this.updateNewPassword,
            value: this.state.newPassword
          }))));
          inputs.push(react_default.a.createElement("div", {
            key: "retypeNewPasswordUpdateForm",
            className: "form-group"
          }, react_default.a.createElement("label", {
            className: "col-sm-5 control-label"
          }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "user.settings.security.retypePassword",
            defaultMessage: "Retype New Password"
          })), react_default.a.createElement("div", {
            className: "col-sm-7"
          }, react_default.a.createElement("input", {
            id: "confirmPassword",
            className: "form-control",
            type: "password",
            onChange: this.updateConfirmPassword,
            value: this.state.confirmPassword
          }))));
        } else if (this.props.user.auth_service === constants["N" /* default */].GITLAB_SERVICE) {
          inputs.push(react_default.a.createElement("div", {
            key: "oauthEmailInfo",
            className: "form-group"
          }, react_default.a.createElement("div", {
            className: "padding-bottom x2"
          }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "user.settings.security.passwordGitlabCantUpdate",
            defaultMessage: "Login occurs through GitLab. Password cannot be updated."
          }))));
        } else if (this.props.user.auth_service === constants["N" /* default */].LDAP_SERVICE) {
          inputs.push(react_default.a.createElement("div", {
            key: "oauthEmailInfo",
            className: "form-group"
          }, react_default.a.createElement("div", {
            className: "padding-bottom x2"
          }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "user.settings.security.passwordLdapCantUpdate",
            defaultMessage: "Login occurs through AD/LDAP. Password cannot be updated."
          }))));
        } else if (this.props.user.auth_service === constants["N" /* default */].SAML_SERVICE) {
          inputs.push(react_default.a.createElement("div", {
            key: "oauthEmailInfo",
            className: "form-group"
          }, react_default.a.createElement("div", {
            className: "padding-bottom x2"
          }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "user.settings.security.passwordSamlCantUpdate",
            defaultMessage: "This field is handled through your login provider. If you want to change it, you need to do so through your login provider."
          }))));
        } else if (this.props.user.auth_service === constants["N" /* default */].GOOGLE_SERVICE) {
          inputs.push(react_default.a.createElement("div", {
            key: "oauthEmailInfo",
            className: "form-group"
          }, react_default.a.createElement("div", {
            className: "padding-bottom x2"
          }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "user.settings.security.passwordGoogleCantUpdate",
            defaultMessage: "Login occurs through Google Apps. Password cannot be updated."
          }))));
        } else if (this.props.user.auth_service === constants["N" /* default */].OFFICE365_SERVICE) {
          inputs.push(react_default.a.createElement("div", {
            key: "oauthEmailInfo",
            className: "form-group"
          }, react_default.a.createElement("div", {
            className: "padding-bottom x2"
          }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "user.settings.security.passwordOffice365CantUpdate",
            defaultMessage: "Login occurs through Office 365. Password cannot be updated."
          }))));
        }

        return react_default.a.createElement(setting_item_max["a" /* default */], {
          title: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "user.settings.security.password",
            defaultMessage: "Password"
          }),
          inputs: inputs,
          submit: submit,
          saving: this.state.savingPassword,
          serverError: this.state.serverError,
          clientError: this.state.passwordError,
          updateSection: this.handleUpdateSection
        });
      }

      let describe;

      if (this.props.user.auth_service === '') {
        const d = new Date(this.props.user.last_password_update);
        describe = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.security.lastUpdated",
          defaultMessage: "Last updated {date} at {time}",
          values: {
            date: react_default.a.createElement(index_es["a" /* FormattedDate */], {
              value: d,
              day: "2-digit",
              month: "short",
              year: "numeric"
            }),
            time: react_default.a.createElement(index_es["d" /* FormattedTime */], {
              value: d,
              hour12: !this.props.militaryTime,
              hour: "2-digit",
              minute: "2-digit"
            })
          }
        });
      } else if (this.props.user.auth_service === constants["N" /* default */].GITLAB_SERVICE) {
        describe = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.security.loginGitlab",
          defaultMessage: "Login done through GitLab"
        });
      } else if (this.props.user.auth_service === constants["N" /* default */].LDAP_SERVICE) {
        describe = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.security.loginLdap",
          defaultMessage: "Login done through AD/LDAP"
        });
      } else if (this.props.user.auth_service === constants["N" /* default */].SAML_SERVICE) {
        describe = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.security.loginSaml",
          defaultMessage: "Login done through SAML"
        });
      } else if (this.props.user.auth_service === constants["N" /* default */].GOOGLE_SERVICE) {
        describe = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.security.loginGoogle",
          defaultMessage: "Login done through Google Apps"
        });
      } else if (this.props.user.auth_service === constants["N" /* default */].OFFICE365_SERVICE) {
        describe = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.security.loginOffice365",
          defaultMessage: "Login done through Office 365"
        });
      }

      return react_default.a.createElement(setting_item_min["a" /* default */], {
        title: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.security.password",
          defaultMessage: "Password"
        }),
        describe: describe,
        section: SECTION_PASSWORD,
        updateSection: this.handleUpdateSection,
        focused: true
      });
    });

    user_settings_security_defineProperty(this, "createSignInSection", () => {
      const user = this.props.user;

      if (this.props.activeSection === SECTION_SIGNIN) {
        let emailOption;
        let gitlabOption;
        let googleOption;
        let office365Option;
        let ldapOption;
        let samlOption;

        if (user.auth_service === '') {
          if (this.props.enableSignUpWithGitLab) {
            gitlabOption = react_default.a.createElement("div", {
              className: "padding-bottom x2"
            }, react_default.a.createElement(react_router_dom["a" /* Link */], {
              className: "btn btn-primary",
              to: '/claim/email_to_oauth?email=' + encodeURIComponent(user.email) + '&old_type=' + user.auth_service + '&new_type=' + constants["N" /* default */].GITLAB_SERVICE
            }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
              id: "user.settings.security.switchGitlab",
              defaultMessage: "Switch to using GitLab SSO"
            })), react_default.a.createElement("br", null));
          }

          if (this.props.enableSignUpWithGoogle) {
            googleOption = react_default.a.createElement("div", {
              className: "padding-bottom x2"
            }, react_default.a.createElement(react_router_dom["a" /* Link */], {
              className: "btn btn-primary",
              to: '/claim/email_to_oauth?email=' + encodeURIComponent(user.email) + '&old_type=' + user.auth_service + '&new_type=' + constants["N" /* default */].GOOGLE_SERVICE
            }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
              id: "user.settings.security.switchGoogle",
              defaultMessage: "Switch to using Google SSO"
            })), react_default.a.createElement("br", null));
          }

          if (this.props.enableSignUpWithOffice365) {
            office365Option = react_default.a.createElement("div", {
              className: "padding-bottom x2"
            }, react_default.a.createElement(react_router_dom["a" /* Link */], {
              className: "btn btn-primary",
              to: '/claim/email_to_oauth?email=' + encodeURIComponent(user.email) + '&old_type=' + user.auth_service + '&new_type=' + constants["N" /* default */].OFFICE365_SERVICE
            }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
              id: "user.settings.security.switchOffice365",
              defaultMessage: "Switch to using Office 365 SSO"
            })), react_default.a.createElement("br", null));
          }

          if (this.props.enableLdap) {
            ldapOption = react_default.a.createElement("div", {
              className: "padding-bottom x2"
            }, react_default.a.createElement(react_router_dom["a" /* Link */], {
              className: "btn btn-primary",
              to: '/claim/email_to_ldap?email=' + encodeURIComponent(user.email)
            }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
              id: "user.settings.security.switchLdap",
              defaultMessage: "Switch to using AD/LDAP"
            })), react_default.a.createElement("br", null));
          }

          if (this.props.enableSaml) {
            samlOption = react_default.a.createElement("div", {
              className: "padding-bottom x2"
            }, react_default.a.createElement(react_router_dom["a" /* Link */], {
              className: "btn btn-primary",
              to: '/claim/email_to_oauth?email=' + encodeURIComponent(user.email) + '&old_type=' + user.auth_service + '&new_type=' + constants["N" /* default */].SAML_SERVICE
            }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
              id: "user.settings.security.switchSaml",
              defaultMessage: "Switch to using SAML SSO"
            })), react_default.a.createElement("br", null));
          }
        } else if (this.props.enableSignUpWithEmail) {
          let link;

          if (user.auth_service === constants["N" /* default */].LDAP_SERVICE) {
            link = '/claim/ldap_to_email?email=' + encodeURIComponent(user.email);
          } else {
            link = '/claim/oauth_to_email?email=' + encodeURIComponent(user.email) + '&old_type=' + user.auth_service;
          }

          emailOption = react_default.a.createElement("div", {
            className: "padding-bottom x2"
          }, react_default.a.createElement(react_router_dom["a" /* Link */], {
            className: "btn btn-primary",
            to: link
          }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "user.settings.security.switchEmail",
            defaultMessage: "Switch to using email and password"
          })), react_default.a.createElement("br", null));
        }

        const inputs = [];
        inputs.push(react_default.a.createElement("div", {
          key: "userSignInOption"
        }, emailOption, gitlabOption, googleOption, office365Option, ldapOption, samlOption));
        const extraInfo = react_default.a.createElement("span", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.security.oneSignin",
          defaultMessage: "You may only have one sign-in method at a time. Switching sign-in method will send an email notifying you if the change was successful."
        }));
        return react_default.a.createElement(setting_item_max["a" /* default */], {
          title: utils["gb" /* localizeMessage */]('user.settings.security.method', 'Sign-in Method'),
          extraInfo: extraInfo,
          inputs: inputs,
          serverError: this.state.serverError,
          updateSection: this.handleUpdateSection
        });
      }

      let describe = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "user.settings.security.emailPwd",
        defaultMessage: "Email and Password"
      });

      if (this.props.user.auth_service === constants["N" /* default */].GITLAB_SERVICE) {
        describe = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.security.gitlab",
          defaultMessage: "GitLab"
        });
      } else if (this.props.user.auth_service === constants["N" /* default */].GOOGLE_SERVICE) {
        describe = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.security.google",
          defaultMessage: "Google"
        });
      } else if (this.props.user.auth_service === constants["N" /* default */].OFFICE365_SERVICE) {
        describe = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.security.office365",
          defaultMessage: "Office 365"
        });
      } else if (this.props.user.auth_service === constants["N" /* default */].LDAP_SERVICE) {
        describe = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.security.ldap",
          defaultMessage: "AD/LDAP"
        });
      } else if (this.props.user.auth_service === constants["N" /* default */].SAML_SERVICE) {
        describe = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.security.saml",
          defaultMessage: "SAML"
        });
      }

      return react_default.a.createElement(setting_item_min["a" /* default */], {
        title: utils["gb" /* localizeMessage */]('user.settings.security.method', 'Sign-in Method'),
        describe: describe,
        section: SECTION_SIGNIN,
        updateSection: this.handleUpdateSection
      });
    });

    user_settings_security_defineProperty(this, "createOAuthAppsSection", () => {
      if (this.props.activeSection === SECTION_APPS) {
        let apps;

        if (this.state.authorizedApps && this.state.authorizedApps.length > 0) {
          apps = this.state.authorizedApps.map(app => {
            const homepage = react_default.a.createElement("a", {
              href: app.homepage,
              target: "_blank",
              rel: "noopener noreferrer"
            }, app.homepage);
            return react_default.a.createElement("div", {
              key: app.id,
              className: "padding-bottom x2 authorized-app"
            }, react_default.a.createElement("div", {
              className: "col-sm-10"
            }, react_default.a.createElement("div", {
              className: "authorized-app__name"
            }, app.name, react_default.a.createElement("span", {
              className: "authorized-app__url"
            }, ' -', " ", homepage)), react_default.a.createElement("div", {
              className: "authorized-app__description"
            }, app.description), react_default.a.createElement("div", {
              className: "authorized-app__deauthorize"
            }, react_default.a.createElement("a", {
              href: "#",
              "data-app": app.id,
              onClick: this.deauthorizeApp
            }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
              id: "user.settings.security.deauthorize",
              defaultMessage: "Deauthorize"
            })))), react_default.a.createElement("div", {
              className: "col-sm-2 pull-right"
            }, react_default.a.createElement("img", {
              alt: app.name,
              src: app.icon_url || icon50x50_default.a
            })), react_default.a.createElement("br", null));
          });
        } else {
          apps = react_default.a.createElement("div", {
            className: "padding-bottom x2 authorized-app"
          }, react_default.a.createElement("div", {
            className: "setting-list__hint"
          }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "user.settings.security.noApps",
            defaultMessage: "No OAuth 2.0 Applications are authorized."
          })));
        }

        const inputs = [];
        let wrapperClass;
        let helpText;

        if (Array.isArray(apps)) {
          wrapperClass = 'authorized-apps__wrapper';
          helpText = react_default.a.createElement("div", {
            className: "authorized-apps__help"
          }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "user.settings.security.oauthAppsHelp",
            defaultMessage: "Applications act on your behalf to access your data based on the permissions you grant them."
          }));
        }

        inputs.push(react_default.a.createElement("div", {
          className: wrapperClass,
          key: "authorizedApps"
        }, apps));
        const title = react_default.a.createElement("div", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.security.oauthApps",
          defaultMessage: "OAuth 2.0 Applications"
        }), helpText);
        return react_default.a.createElement(setting_item_max["a" /* default */], {
          title: title,
          inputs: inputs,
          serverError: this.state.serverError,
          updateSection: this.handleUpdateSection,
          width: "full",
          cancelButtonText: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "user.settings.security.close",
            defaultMessage: "Close"
          })
        });
      }

      return react_default.a.createElement(setting_item_min["a" /* default */], {
        title: utils["gb" /* localizeMessage */]('user.settings.security.oauthApps', 'OAuth 2.0 Applications'),
        describe: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.security.oauthAppsDescription",
          defaultMessage: "Click 'Edit' to manage your OAuth 2.0 Applications"
        }),
        section: SECTION_APPS,
        updateSection: this.handleUpdateSection
      });
    });

    this.state = this.getDefaultState();
  }

  getDefaultState() {
    return {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
      passwordError: '',
      serverError: '',
      tokenError: '',
      authService: this.props.user.auth_service,
      savingPassword: false
    };
  }

  componentDidMount() {
    if (this.props.enableOAuthServiceProvider) {
      this.loadAuthorizedOAuthApps();
    }
  }

  render() {
    const user = this.props.user;
    const passwordSection = this.createPasswordSection();
    let numMethods = 0;
    numMethods = this.props.enableSignUpWithGitLab ? numMethods + 1 : numMethods;
    numMethods = this.props.enableSignUpWithGoogle ? numMethods + 1 : numMethods;
    numMethods = this.props.enableSignUpWithOffice365 ? numMethods + 1 : numMethods;
    numMethods = this.props.enableLdap ? numMethods + 1 : numMethods;
    numMethods = this.props.enableSaml ? numMethods + 1 : numMethods; // If there are other sign-in methods and either email is enabled or the user's account is email, then allow switching

    let signInSection;

    if ((this.props.enableSignUpWithEmail || user.auth_service === '') && numMethods > 0 && this.props.experimentalEnableAuthenticationTransfer) {
      signInSection = this.createSignInSection();
    }

    let oauthSection;

    if (this.props.enableOAuthServiceProvider) {
      oauthSection = this.createOAuthAppsSection();
    }

    let tokensSection;

    if (this.props.canUseAccessTokens) {
      tokensSection = react_default.a.createElement(user_access_token_section, {
        user: this.props.user,
        active: this.props.activeSection === user_settings_security_SECTION_TOKENS,
        updateSection: this.handleUpdateSection,
        setRequireConfirm: this.props.setRequireConfirm
      });
    }

    return react_default.a.createElement("div", null, react_default.a.createElement("div", {
      className: "modal-header"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "user.settings.security.close",
      defaultMessage: "Close"
    }, ariaLabel => react_default.a.createElement("button", {
      type: "button",
      className: "close",
      "data-dismiss": "modal",
      "aria-label": ariaLabel,
      onClick: this.props.closeModal
    }, react_default.a.createElement("span", {
      "aria-hidden": "true"
    }, '×'))), react_default.a.createElement("h4", {
      className: "modal-title",
      ref: "title"
    }, react_default.a.createElement("div", {
      className: "modal-back"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "generic_icons.collapse",
      defaultMessage: "Collapse Icon"
    }, title => react_default.a.createElement("i", {
      className: "fa fa-angle-left",
      title: title,
      onClick: this.props.collapseModal
    }))), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "user.settings.security.title",
      defaultMessage: "Security Settings"
    }))), react_default.a.createElement("div", {
      className: "user-settings"
    }, react_default.a.createElement("h3", {
      className: "tab-header"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "user.settings.security.title",
      defaultMessage: "Security Settings"
    })), react_default.a.createElement("div", {
      className: "divider-dark first"
    }), passwordSection, react_default.a.createElement("div", {
      className: "divider-light"
    }), react_default.a.createElement(mfa_section, {
      active: this.props.activeSection === user_settings_security_SECTION_MFA,
      updateSection: this.handleUpdateSection
    }), react_default.a.createElement("div", {
      className: "divider-light"
    }), oauthSection, react_default.a.createElement("div", {
      className: "divider-light"
    }), tokensSection, react_default.a.createElement("div", {
      className: "divider-light"
    }), signInSection, react_default.a.createElement("div", {
      className: "divider-dark"
    }), react_default.a.createElement("br", null), react_default.a.createElement(toggle_modal_button["a" /* default */], {
      className: "security-links color--link",
      dialogType: access_history_modal["a" /* default */]
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "user.settings.security.viewHistory.icon",
      defaultMessage: "Access History Icon"
    }, title => react_default.a.createElement("i", {
      className: "fa fa-clock-o",
      title: title
    })), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "user.settings.security.viewHistory",
      defaultMessage: "View Access History"
    })), react_default.a.createElement(toggle_modal_button["a" /* default */], {
      className: "security-links color--link margin-top",
      dialogType: activity_log_modal["a" /* default */]
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "user.settings.security.logoutActiveSessions.icon",
      defaultMessage: "Active Sessions Icon"
    }, title => react_default.a.createElement("i", {
      className: "fa fa-clock-o",
      title: title
    })), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "user.settings.security.logoutActiveSessions",
      defaultMessage: "View and Logout of Active Sessions"
    }))));
  }

}

user_settings_security_defineProperty(user_settings_security_SecurityTab, "propTypes", {
  user: prop_types_default.a.object,
  activeSection: prop_types_default.a.string,
  updateSection: prop_types_default.a.func,
  closeModal: prop_types_default.a.func.isRequired,
  collapseModal: prop_types_default.a.func.isRequired,
  setRequireConfirm: prop_types_default.a.func.isRequired,

  /*
   * Set if access tokens are enabled and this user can use them
   */
  canUseAccessTokens: prop_types_default.a.bool,
  // Whether or not OAuth applications are enabled.
  enableOAuthServiceProvider: prop_types_default.a.bool,
  // Whether or not sign-up with email is enabled.
  enableSignUpWithEmail: prop_types_default.a.bool,
  // Whether or not sign-up with GitLab is enabled.
  enableSignUpWithGitLab: prop_types_default.a.bool,
  // Whether or not sign-up with Google is enabled.
  enableSignUpWithGoogle: prop_types_default.a.bool,
  // Whether or not sign-up with LDAP is enabled.
  enableLdap: prop_types_default.a.bool,
  // Whether or not sign-up with SAML is enabled.
  enableSaml: prop_types_default.a.bool,
  // Whether or not sign-up with Office 365 is enabled.
  enableSignUpWithOffice365: prop_types_default.a.bool,
  // Whether or not the experimental authentication transfer is enabled.
  experimentalEnableAuthenticationTransfer: prop_types_default.a.bool,
  passwordConfig: prop_types_default.a.object,
  militaryTime: prop_types_default.a.bool,
  actions: prop_types_default.a.shape({
    getMe: prop_types_default.a.func.isRequired,
    updateUserPassword: prop_types_default.a.func.isRequired,
    getAuthorizedOAuthApps: prop_types_default.a.func.isRequired,
    deauthorizeOAuthApp: prop_types_default.a.func.isRequired
  }).isRequired
});

user_settings_security_defineProperty(user_settings_security_SecurityTab, "defaultProps", {
  user: {},
  activeSection: ''
});
// CONCATENATED MODULE: ./components/user_settings/security/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.











function security_mapStateToProps(state, ownProps) {
  const config = Object(general["getConfig"])(state);
  const tokensEnabled = config.EnableUserAccessTokens === 'true';
  const userHasTokenRole = user_utils["hasUserAccessTokenRole"](ownProps.user.roles) || user_utils["isSystemAdmin"](ownProps.user.roles);
  const enableOAuthServiceProvider = config.EnableOAuthServiceProvider === 'true';
  const enableSignUpWithEmail = config.EnableSignUpWithEmail === 'true';
  const enableSignUpWithGitLab = config.EnableSignUpWithGitLab === 'true';
  const enableSignUpWithGoogle = config.EnableSignUpWithGoogle === 'true';
  const enableLdap = config.EnableLdap === 'true';
  const enableSaml = config.EnableSaml === 'true';
  const enableSignUpWithOffice365 = config.EnableSignUpWithOffice365 === 'true';
  const experimentalEnableAuthenticationTransfer = config.ExperimentalEnableAuthenticationTransfer === 'true';
  return {
    canUseAccessTokens: tokensEnabled && userHasTokenRole,
    enableOAuthServiceProvider,
    enableSignUpWithEmail,
    enableSignUpWithGitLab,
    enableSignUpWithGoogle,
    enableLdap,
    enableSaml,
    enableSignUpWithOffice365,
    experimentalEnableAuthenticationTransfer,
    passwordConfig: Object(utils["C" /* getPasswordConfig */])(config),
    militaryTime: Object(entities_preferences["getBool"])(state, constants["w" /* Preferences */].CATEGORY_DISPLAY_SETTINGS, constants["w" /* Preferences */].USE_MILITARY_TIME, false)
  };
}

function security_mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux["bindActionCreators"])({
      getMe: actions_users["getMe"],
      updateUserPassword: actions_users["updateUserPassword"],
      getAuthorizedOAuthApps: integrations["getAuthorizedOAuthApps"],
      deauthorizeOAuthApp: integrations["deauthorizeOAuthApp"]
    }, dispatch)
  };
}

/* harmony default export */ var security = (Object(es["connect"])(security_mapStateToProps, security_mapDispatchToProps)(user_settings_security_SecurityTab));
// CONCATENATED MODULE: ./components/user_settings/sidebar/user_settings_sidebar.jsx
function user_settings_sidebar_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.









class user_settings_sidebar_UserSettingsSidebar extends react_default.a.Component {
  constructor(props) {
    super(props);

    user_settings_sidebar_defineProperty(this, "getStateFromProps", () => {
      const {
        closeUnusedDirectMessages,
        channelSwitcherOption,
        sidebarPreference: {
          grouping,
          sorting
        },
        unreadsAtTop,
        favoriteAtTop
      } = this.props;
      return {
        settings: {
          close_unused_direct_messages: closeUnusedDirectMessages,
          channel_switcher_section: channelSwitcherOption,
          grouping,
          unreadsAtTop,
          favoriteAtTop,
          sorting
        },
        isSaving: false
      };
    });

    user_settings_sidebar_defineProperty(this, "trackSettingChangeIfNecessary", setting => {
      if (this.state.settings[setting] !== this.props.sidebarPreference[setting]) {
        Object(diagnostics_actions["d" /* trackEvent */])('settings', 'user_settings_update', {
          field: 'sidebar.' + setting,
          value: this.state.settings[setting]
        });
      }
    });

    user_settings_sidebar_defineProperty(this, "updateSetting", (setting, value) => {
      const settings = this.state.settings;
      settings[setting] = value;
      this.setState(settings);
    });

    user_settings_sidebar_defineProperty(this, "handleSubmit", setting => {
      const {
        actions,
        user
      } = this.props;
      const preferences = [];

      if (setting === 'channel_grouping' || setting === 'channel_sorting') {
        const updatedSidebarSettings = {
          grouping: this.state.settings.grouping,
          unreads_at_top: this.state.settings.unreadsAtTop,
          favorite_at_top: this.state.settings.favoriteAtTop,
          sorting: this.state.settings.sorting
        };
        preferences.push({
          user_id: user.id,
          category: constants["N" /* default */].Preferences.CATEGORY_SIDEBAR_SETTINGS,
          name: '',
          value: JSON.stringify(updatedSidebarSettings)
        });
        this.trackSettingChangeIfNecessary('grouping');
        this.trackSettingChangeIfNecessary('sorting');
        this.trackSettingChangeIfNecessary('unreadsAtTop');
        this.trackSettingChangeIfNecessary('favoriteAtTop');
      } else {
        preferences.push({
          user_id: user.id,
          category: constants["N" /* default */].Preferences.CATEGORY_SIDEBAR_SETTINGS,
          name: setting,
          value: this.state.settings[setting]
        });
        Object(diagnostics_actions["d" /* trackEvent */])('settings', 'user_settings_update', {
          field: 'sidebar.' + setting,
          value: this.state.settings[setting]
        });
      }

      this.setState({
        isSaving: true
      });
      actions.savePreferences(user.id, preferences).then(() => {
        this.updateSection('');
      });
    });

    user_settings_sidebar_defineProperty(this, "updateSection", section => {
      if (!section) {
        this.setState(this.getStateFromProps());
      }

      this.setState({
        isSaving: false
      });
      this.props.updateSection(section);
    });

    user_settings_sidebar_defineProperty(this, "renderAutoCloseDMLabel", value => {
      if (value === 'after_seven_days') {
        return react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.sidebar.after_seven_days",
          defaultMessage: "After 7 days with no new messages"
        });
      }

      return react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "user.settings.sidebar.never",
        defaultMessage: "Never"
      });
    });

    user_settings_sidebar_defineProperty(this, "renderAutoCloseDMSection", () => {
      let contents;

      if (this.props.activeSection === 'autoCloseDM') {
        contents = react_default.a.createElement(setting_item_max["a" /* default */], {
          title: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "user.settings.sidebar.autoCloseDMTitle",
            defaultMessage: "Automatically Close Direct Messages"
          }),
          inputs: [react_default.a.createElement("div", {
            key: "autoCloseDMSetting"
          }, react_default.a.createElement("div", {
            className: "radio"
          }, react_default.a.createElement("label", null, react_default.a.createElement("input", {
            id: "autoCloseDMAfterSevenDays",
            type: "radio",
            name: "autoCloseDM",
            checked: this.state.settings.close_unused_direct_messages === 'after_seven_days',
            onChange: this.updateSetting.bind(this, 'close_unused_direct_messages', 'after_seven_days')
          }), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "user.settings.sidebar.after_seven_days",
            defaultMessage: "After 7 days with no new messages"
          })), react_default.a.createElement("br", null)), react_default.a.createElement("div", {
            className: "radio"
          }, react_default.a.createElement("label", null, react_default.a.createElement("input", {
            id: "autoCloseDMNever",
            type: "radio",
            name: "autoCloseDM",
            checked: this.state.settings.close_unused_direct_messages === 'never',
            onChange: this.updateSetting.bind(this, 'close_unused_direct_messages', 'never')
          }), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "user.settings.sidebar.never",
            defaultMessage: "Never"
          })), react_default.a.createElement("br", null)), react_default.a.createElement("div", null, react_default.a.createElement("br", null), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "user.settings.sidebar.autoCloseDMDesc",
            defaultMessage: "Direct Message conversations can be reopened with the \u201C+\u201D button in the sidebar or using the Channel Switcher (CTRL+K)."
          })))],
          setting: 'close_unused_direct_messages',
          submit: this.handleSubmit,
          saving: this.state.isSaving,
          server_error: this.state.serverError,
          updateSection: this.updateSection
        });
      } else {
        contents = react_default.a.createElement(setting_item_min["a" /* default */], {
          title: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "user.settings.sidebar.autoCloseDMTitle",
            defaultMessage: "Automatically Close Direct Messages"
          }),
          describe: this.renderAutoCloseDMLabel(this.state.settings.close_unused_direct_messages),
          section: 'autoCloseDM',
          updateSection: this.updateSection
        });
      }

      return react_default.a.createElement(react_default.a.Fragment, null, contents, react_default.a.createElement("div", {
        className: "divider-dark"
      }));
    });

    user_settings_sidebar_defineProperty(this, "renderOrganizationLabel", () => {
      const {
        sidebarPreference: {
          sorting,
          grouping
        },
        unreadsAtTop,
        favoriteAtTop
      } = this.props;
      const messages = [];

      if (grouping === 'by_type') {
        messages.push(react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          key: "by_type",
          id: "user.settings.sidebar.groupByTypeShort",
          defaultMessage: "Group by channel type"
        }));
      } else {
        messages.push(react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          key: "none",
          id: "user.settings.sidebar.groupByNoneShort",
          defaultMessage: "No grouping"
        }));
      }

      let sortingId;
      let sortingDefaultMessage;

      if (sorting === 'alpha') {
        sortingId = Object(utils_i18n["b" /* t */])('user.settings.sidebar.sortAlphaShort');
        sortingDefaultMessage = 'sorted alphabetically';
      } else {
        sortingId = Object(utils_i18n["b" /* t */])('user.settings.sidebar.sortRecentShort');
        sortingDefaultMessage = 'sorted by recency';
      }

      messages.push(react_default.a.createElement("span", {
        key: "comma"
      }, ', '));
      messages.push(react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        key: "sorting",
        id: sortingId,
        defaultMessage: sortingDefaultMessage
      }));
      let atTopId = null;
      let atTopDefaultMessage = null;

      if (unreadsAtTop === 'true' && favoriteAtTop === 'false') {
        atTopId = Object(utils_i18n["b" /* t */])('user.settings.sidebar.unreadsShort');
        atTopDefaultMessage = 'Unreads grouped separately';
      } else if (unreadsAtTop === 'false' && favoriteAtTop === 'true') {
        atTopId = Object(utils_i18n["b" /* t */])('user.settings.sidebar.favoritesShort');
        atTopDefaultMessage = 'Favorites grouped separately';
      } else if (unreadsAtTop === 'true' && favoriteAtTop === 'true') {
        atTopId = Object(utils_i18n["b" /* t */])('user.settings.sidebar.unreadsFavoritesShort');
        atTopDefaultMessage = 'Unreads and favorites grouped separately';
      }

      if (atTopId) {
        messages.push(react_default.a.createElement("br", {
          key: "break"
        }));
        messages.push(react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          key: "atTop",
          id: atTopId,
          defaultMessage: atTopDefaultMessage
        }));
      }

      return messages;
    });

    user_settings_sidebar_defineProperty(this, "renderChannelSwitcherLabel", value => {
      if (value === 'true') {
        return react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.sidebar.on",
          defaultMessage: "On"
        });
      }

      return react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: "user.settings.sidebar.off",
        defaultMessage: "Off"
      });
    });

    user_settings_sidebar_defineProperty(this, "renderChannelOrganizationSection", () => {
      const {
        grouping,
        sorting
      } = this.state.settings;
      let contents;

      if (this.props.activeSection === 'groupChannels') {
        const inputs = [];
        inputs.push(react_default.a.createElement("div", {
          key: "groupingSectionSetting"
        }, react_default.a.createElement("label", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.sidebar.groupChannelsTitle",
          defaultMessage: "Channel grouping"
        })), react_default.a.createElement("br", null), react_default.a.createElement("div", {
          className: "radio"
        }, react_default.a.createElement("label", null, react_default.a.createElement("input", {
          id: "byTypeOption",
          type: "radio",
          name: "groupChannels",
          checked: grouping === 'by_type',
          onChange: this.updateSetting.bind(this, 'grouping', 'by_type')
        }), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.sidebar.groupByType",
          defaultMessage: "Channels grouped by type"
        })), react_default.a.createElement("br", null)), react_default.a.createElement("div", {
          className: "radio"
        }, react_default.a.createElement("label", null, react_default.a.createElement("input", {
          id: "noneOption",
          type: "radio",
          name: "groupChannels",
          checked: grouping === 'none',
          onChange: this.updateSetting.bind(this, 'grouping', 'none')
        }), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.sidebar.groupByNone",
          defaultMessage: "Combine all channel types"
        })), react_default.a.createElement("br", null)), react_default.a.createElement("div", null, react_default.a.createElement("br", null), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.sidebar.groupDesc",
          defaultMessage: "Group channels by type, or combine all types into a list."
        }))));
        inputs.push(react_default.a.createElement("hr", {
          key: "sortingDivider"
        }));
        inputs.push(react_default.a.createElement("div", {
          key: "sortingOptions"
        }, react_default.a.createElement("label", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.sidebar.sortChannelsTitle",
          defaultMessage: "Channel sorting"
        })), react_default.a.createElement("br", null), react_default.a.createElement("div", {
          className: "radio"
        }, react_default.a.createElement("label", null, react_default.a.createElement("input", {
          id: "recentSectionEnabled",
          type: "radio",
          name: "sortChannels",
          checked: sorting === 'recent',
          onChange: this.updateSetting.bind(this, 'sorting', 'recent')
        }), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.sidebar.sortRecent",
          defaultMessage: "Recency"
        })), react_default.a.createElement("br", null)), react_default.a.createElement("div", {
          className: "radio"
        }, react_default.a.createElement("label", null, react_default.a.createElement("input", {
          id: "alphaSectionEnabled",
          type: "radio",
          name: "sortChannels",
          checked: sorting === 'alpha',
          onChange: this.updateSetting.bind(this, 'sorting', 'alpha')
        }), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.sidebar.sortAlpha",
          defaultMessage: "Alphabetically"
        })), react_default.a.createElement("br", null)), react_default.a.createElement("div", null, react_default.a.createElement("br", null), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.sidebar.sortDesc",
          defaultMessage: "Sort channels alphabetically, or by most recent post."
        }))));
        inputs.push(react_default.a.createElement("hr", {
          key: "divider"
        }));
        inputs.push(react_default.a.createElement("div", {
          key: "unreadOption"
        }, react_default.a.createElement("div", {
          className: "checkbox"
        }, react_default.a.createElement("label", null, react_default.a.createElement("input", {
          id: "unreadAtTopOption",
          type: "checkbox",
          checked: this.state.settings.unreadsAtTop === 'true',
          onChange: e => this.updateSetting('unreadsAtTop', e.target.checked.toString())
        }), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.sidebar.unreads",
          defaultMessage: "Unreads grouped separately"
        }))), react_default.a.createElement("div", null, react_default.a.createElement("br", null), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.sidebar.unreadsDesc",
          defaultMessage: "Group unread channels separately until read."
        }))));
        inputs.push(react_default.a.createElement("hr", {
          key: "groupingDivider"
        }));
        inputs.push(react_default.a.createElement("div", {
          key: "favoriteOption"
        }, react_default.a.createElement("div", {
          className: "checkbox"
        }, react_default.a.createElement("label", null, react_default.a.createElement("input", {
          id: "favoriteAtTopOption",
          type: "checkbox",
          checked: this.state.settings.favoriteAtTop === 'true',
          onChange: e => this.updateSetting('favoriteAtTop', e.target.checked.toString())
        }), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.sidebar.favorites",
          defaultMessage: "Favorites grouped separately"
        }))), react_default.a.createElement("div", null, react_default.a.createElement("br", null), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.sidebar.favoritesDesc",
          defaultMessage: "Channels marked as favorites will be grouped separately."
        }))));
        contents = react_default.a.createElement(setting_item_max["a" /* default */], {
          title: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "user.settings.sidebar.groupAndSortChannelsTitle",
            defaultMessage: "Channel grouping and sorting"
          }),
          inputs: inputs,
          setting: 'channel_grouping',
          submit: this.handleSubmit,
          saving: this.state.isSaving,
          server_error: this.state.serverError,
          updateSection: this.updateSection
        });
      } else {
        contents = react_default.a.createElement(setting_item_min["a" /* default */], {
          title: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "user.settings.sidebar.groupAndSortChannelsTitle",
            defaultMessage: "Channel grouping and sorting"
          }),
          describe: this.renderOrganizationLabel(),
          section: 'groupChannels',
          updateSection: this.updateSection
        });
      }

      return react_default.a.createElement(react_default.a.Fragment, null, contents, react_default.a.createElement("div", {
        className: "divider-light"
      }));
    });

    user_settings_sidebar_defineProperty(this, "renderChannelSwitcherSection", () => {
      let channelSwitcherSectionDescId = Object(utils_i18n["b" /* t */])('user.settings.sidebar.channelSwitcherSectionDesc.windows');
      let channelSwitcherSectionDescDefault = 'The channel switcher is shown at the bottom of the sidebar and is used to jump between channels quickly. It can also be accessed using CTRL + K.';

      if (Object(utils["W" /* isMac */])()) {
        channelSwitcherSectionDescId = Object(utils_i18n["b" /* t */])('user.settings.sidebar.channelSwitcherSectionDesc.mac');
        channelSwitcherSectionDescDefault = 'The channel switcher is shown at the bottom of the sidebar and is used to jump between channels quickly. It can also be accessed using CMD + K.';
      }

      const helpChannelSwitcherText = react_default.a.createElement(index_es["c" /* FormattedMessage */], {
        id: channelSwitcherSectionDescId,
        defaultMessage: channelSwitcherSectionDescDefault
      });

      if (this.props.activeSection === 'channelSwitcher') {
        return react_default.a.createElement(setting_item_max["a" /* default */], {
          title: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "user.settings.sidebar.channelSwitcherSectionTitle",
            defaultMessage: "Channel Switcher"
          }),
          inputs: [react_default.a.createElement("div", {
            key: "channelSwitcherSectionSetting"
          }, react_default.a.createElement("div", {
            id: "channelSwitcherRadioOn",
            className: "radio"
          }, react_default.a.createElement("label", null, react_default.a.createElement("input", {
            id: "channelSwitcherSectionEnabled",
            type: "radio",
            name: "channelSwitcher",
            checked: this.state.settings.channel_switcher_section === 'true',
            onChange: this.updateSetting.bind(this, 'channel_switcher_section', 'true')
          }), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "user.settings.sidebar.on",
            defaultMessage: "On"
          })), react_default.a.createElement("br", null)), react_default.a.createElement("div", {
            id: "channelSwitcherRadioOff",
            className: "radio"
          }, react_default.a.createElement("label", null, react_default.a.createElement("input", {
            id: "channelSwitcherSectionOff",
            type: "radio",
            name: "channelSwitcher",
            checked: this.state.settings.channel_switcher_section === 'false',
            onChange: this.updateSetting.bind(this, 'channel_switcher_section', 'false')
          }), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
            id: "user.settings.sidebar.off",
            defaultMessage: "Off"
          })), react_default.a.createElement("br", null)), react_default.a.createElement("div", {
            id: "channelSwitcherHelpText"
          }, react_default.a.createElement("br", null), helpChannelSwitcherText))],
          setting: 'channel_switcher_section',
          submit: this.handleSubmit,
          saving: this.state.isSaving,
          server_error: this.state.serverError,
          updateSection: this.updateSection
        });
      }

      return react_default.a.createElement(setting_item_min["a" /* default */], {
        title: react_default.a.createElement(index_es["c" /* FormattedMessage */], {
          id: "user.settings.sidebar.channelSwitcherSectionTitle",
          defaultMessage: "Channel Switcher"
        }),
        describe: this.renderChannelSwitcherLabel(this.state.settings.channel_switcher_section),
        section: 'channelSwitcher',
        updateSection: this.updateSection,
        focused: true
      });
    });

    this.state = this.getStateFromProps();
  }

  render() {
    const {
      showUnusedOption,
      showChannelOrganization
    } = this.props;
    const {
      formatMessage
    } = this.context.intl;
    const channelOrganizationSection = showChannelOrganization ? this.renderChannelOrganizationSection() : null;
    const autoCloseDMSection = showUnusedOption ? this.renderAutoCloseDMSection() : null;
    const channelSwitcherSection = this.renderChannelSwitcherSection();
    return react_default.a.createElement("div", null, react_default.a.createElement("div", {
      className: "modal-header"
    }, react_default.a.createElement("button", {
      id: "closeButton",
      type: "button",
      className: "close",
      "data-dismiss": "modal",
      "aria-label": "Close",
      onClick: this.props.closeModal
    }, react_default.a.createElement("span", {
      "aria-hidden": "true"
    }, '×')), react_default.a.createElement("h4", {
      className: "modal-title",
      ref: "title"
    }, react_default.a.createElement("div", {
      className: "modal-back"
    }, react_default.a.createElement("i", {
      className: "fa fa-angle-left",
      title: formatMessage({
        id: 'generic_icons.collapse',
        defaultMessage: 'Collapse Icon'
      }),
      onClick: this.props.collapseModal
    })), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "user.settings.sidebar.title",
      defaultMessage: "Sidebar Settings"
    }))), react_default.a.createElement("div", {
      id: "sidebarTitle",
      className: "user-settings"
    }, react_default.a.createElement("h3", {
      className: "tab-header"
    }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "user.settings.sidebar.title",
      defaultMessage: "Sidebar Settings"
    })), react_default.a.createElement("div", {
      className: "divider-dark first"
    }), channelOrganizationSection, channelSwitcherSection, showUnusedOption ? react_default.a.createElement("div", {
      className: "divider-light"
    }) : react_default.a.createElement("div", {
      className: "divider-dark"
    }), autoCloseDMSection));
  }

}

user_settings_sidebar_defineProperty(user_settings_sidebar_UserSettingsSidebar, "propTypes", {
  actions: prop_types_default.a.shape({
    /*
     * Function to save the user's preferences
     */
    savePreferences: prop_types_default.a.func.isRequired
  }).isRequired,

  /**
   * Current user object
   */
  user: prop_types_default.a.object,

  /**
   * The preferences for closing the unused direct messages channels
   */
  closeUnusedDirectMessages: prop_types_default.a.string.isRequired,

  /**
   * Display the close unused direct messages channels options
   */
  showUnusedOption: prop_types_default.a.bool.isRequired,

  /**
   * Display the channel grouping and sorting sections options
   */
  showChannelOrganization: prop_types_default.a.bool.isRequired,

  /**
   * The preferences to show the channel switcher in the sidebar
   */
  channelSwitcherOption: prop_types_default.a.string.isRequired,

  /**
   * Display the unread channels sections options
   * The preferences to display channels in sidebar
   */
  sidebarPreference: prop_types_default.a.shape({
    /**
     * Group channels by type or none
     */
    grouping: prop_types_default.a.string.isRequired,

    /**
     * Sort channels by recency or alphabetical order
     */
    sorting: prop_types_default.a.string.isRequired
  }).isRequired,

  /**
   * Option for including unread channels at top
   */
  unreadsAtTop: prop_types_default.a.string.isRequired,

  /**
   * Option for including favorite channels at top
   */
  favoriteAtTop: prop_types_default.a.string.isRequired,
  updateSection: prop_types_default.a.func,
  activeSection: prop_types_default.a.string,
  closeModal: prop_types_default.a.func.isRequired,
  collapseModal: prop_types_default.a.func.isRequired
});

user_settings_sidebar_defineProperty(user_settings_sidebar_UserSettingsSidebar, "contextTypes", {
  intl: index_es["i" /* intlShape */].isRequired
});
// CONCATENATED MODULE: ./components/user_settings/sidebar/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.









function sidebar_mapStateToProps(state) {
  const config = Object(general["getConfig"])(state);
  const closeUnusedDirectMessages = Object(entities_preferences["get"])(state, mattermost_redux_constants["Preferences"].CATEGORY_SIDEBAR_SETTINGS, 'close_unused_direct_messages', 'after_seven_days');
  const channelSwitcherOption = Object(entities_preferences["get"])(state, mattermost_redux_constants["Preferences"].CATEGORY_SIDEBAR_SETTINGS, 'channel_switcher_section', 'true');
  const sidebarPreference = Object(entities_preferences["getSidebarPreferences"])(state);
  return {
    closeUnusedDirectMessages,
    sidebarPreference,
    unreadsAtTop: sidebarPreference.unreads_at_top,
    favoriteAtTop: sidebarPreference.favorite_at_top,
    channelSwitcherOption,
    showChannelOrganization: config.ExperimentalChannelOrganization === 'true',
    showUnusedOption: config.CloseUnusedDirectMessages === 'true',
    user: Object(users["getCurrentUser"])(state)
  };
}

function sidebar_mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux["bindActionCreators"])({
      savePreferences: actions_preferences["savePreferences"]
    }, dispatch)
  };
}

/* harmony default export */ var sidebar = (Object(es["connect"])(sidebar_mapStateToProps, sidebar_mapDispatchToProps)(user_settings_sidebar_UserSettingsSidebar));
// CONCATENATED MODULE: ./components/user_settings/user_settings.jsx
function user_settings_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.








class user_settings_UserSettings extends react_default.a.PureComponent {
  render() {
    if (this.props.activeTab === 'general') {
      return react_default.a.createElement("div", null, react_default.a.createElement(components_user_settings_general, {
        user: this.props.user,
        activeSection: this.props.activeSection,
        prevActiveSection: this.props.prevActiveSection,
        updateSection: this.props.updateSection,
        updateTab: this.props.updateTab,
        closeModal: this.props.closeModal,
        collapseModal: this.props.collapseModal
      }));
    } else if (this.props.activeTab === 'security') {
      return react_default.a.createElement("div", null, react_default.a.createElement(security, {
        user: this.props.user,
        activeSection: this.props.activeSection,
        prevActiveSection: this.props.prevActiveSection,
        updateSection: this.props.updateSection,
        closeModal: this.props.closeModal,
        collapseModal: this.props.collapseModal,
        setRequireConfirm: this.props.setRequireConfirm
      }));
    } else if (this.props.activeTab === 'notifications') {
      return react_default.a.createElement("div", null, react_default.a.createElement(notifications, {
        user: this.props.user,
        activeSection: this.props.activeSection,
        prevActiveSection: this.props.prevActiveSection,
        updateSection: this.props.updateSection,
        closeModal: this.props.closeModal,
        collapseModal: this.props.collapseModal
      }));
    } else if (this.props.activeTab === 'display') {
      return react_default.a.createElement("div", null, react_default.a.createElement(user_settings_display, {
        user: this.props.user,
        activeSection: this.props.activeSection,
        prevActiveSection: this.props.prevActiveSection,
        updateSection: this.props.updateSection,
        closeModal: this.props.closeModal,
        collapseModal: this.props.collapseModal,
        setEnforceFocus: this.props.setEnforceFocus,
        setRequireConfirm: this.props.setRequireConfirm
      }));
    } else if (this.props.activeTab === 'sidebar') {
      return react_default.a.createElement("div", null, react_default.a.createElement(sidebar, {
        activeSection: this.props.activeSection,
        prevActiveSection: this.props.prevActiveSection,
        updateSection: this.props.updateSection,
        closeModal: this.props.closeModal,
        collapseModal: this.props.collapseModal
      }));
    } else if (this.props.activeTab === 'advanced') {
      return react_default.a.createElement("div", null, react_default.a.createElement(advanced, {
        activeSection: this.props.activeSection,
        prevActiveSection: this.props.prevActiveSection,
        updateSection: this.props.updateSection,
        closeModal: this.props.closeModal,
        collapseModal: this.props.collapseModal
      }));
    }

    return react_default.a.createElement("div", null);
  }

}

user_settings_defineProperty(user_settings_UserSettings, "propTypes", {
  user: prop_types_default.a.object.isRequired,
  activeTab: prop_types_default.a.string,
  activeSection: prop_types_default.a.string,
  prevActiveSection: prop_types_default.a.string,
  updateSection: prop_types_default.a.func,
  updateTab: prop_types_default.a.func,
  closeModal: prop_types_default.a.func.isRequired,
  collapseModal: prop_types_default.a.func.isRequired,
  setEnforceFocus: prop_types_default.a.func.isRequired,
  setRequireConfirm: prop_types_default.a.func.isRequired
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4!./components/user_settings/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.




function user_settings_mapStateToProps(state) {
  return {
    user: Object(users["getCurrentUser"])(state)
  };
}

/* harmony default export */ var user_settings = __webpack_exports__["default"] = (Object(es["connect"])(user_settings_mapStateToProps)(user_settings_UserSettings));

/***/ })

}]);
//# sourceMappingURL=28.7959435a541d4d4f822c.js.map
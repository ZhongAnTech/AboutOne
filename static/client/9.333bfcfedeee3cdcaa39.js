(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ 3340:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 3341:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 3342:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 3429:
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

// CONCATENATED MODULE: ./components/new_user_settings/advanced/join_leave_section/join_leave_section.jsx
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
// CONCATENATED MODULE: ./components/new_user_settings/advanced/join_leave_section/index.js
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
// CONCATENATED MODULE: ./components/new_user_settings/advanced/user_settings_advanced.jsx
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
// CONCATENATED MODULE: ./components/new_user_settings/advanced/index.js
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
var timezone = __webpack_require__(1814);

// EXTERNAL MODULE: ./mattermost-redux/selectors/entities/timezone.js
var entities_timezone = __webpack_require__(308);

// EXTERNAL MODULE: ./mattermost-redux/utils/timezone_utils.js
var timezone_utils = __webpack_require__(306);

// EXTERNAL MODULE: ./node_modules/antd/es/radio/index.js + 3 modules
var es_radio = __webpack_require__(3489);

// CONCATENATED MODULE: ./components/new_user_settings/RadioItems.jsx


/* harmony default export */ var RadioItems = (({
  title,
  options = [],
  ...rest
}) => {
  return react_default.a.createElement("div", {
    className: "radio__item"
  }, react_default.a.createElement("h3", null, title), react_default.a.createElement(es_radio["a" /* default */].Group, rest, options.map(item => react_default.a.createElement(es_radio["a" /* default */], {
    key: item.value,
    value: item.value
  }, item.label))));
});
// EXTERNAL MODULE: ./mattermost-redux/selectors/entities/teams.js
var teams = __webpack_require__(32);

// EXTERNAL MODULE: ./node_modules/uuid/v4.js
var v4 = __webpack_require__(1780);
var v4_default = /*#__PURE__*/__webpack_require__.n(v4);

// CONCATENATED MODULE: ./components/new_user_settings/display/user_settings_theme/theme_skeleton.jsx


/* harmony default export */ var theme_skeleton = (({
  linearGradient = ['#845b74', '#3a3b51']
}) => {
  const id = v4_default()();
  return react_default.a.createElement("svg", {
    height: "85",
    viewBox: "0 0 130 85",
    width: "130",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, react_default.a.createElement("defs", null, react_default.a.createElement("rect", {
    id: "a",
    height: "75",
    rx: "4",
    width: "120"
  }), react_default.a.createElement("filter", {
    id: "b",
    height: "121.3%",
    width: "113.3%",
    x: "-6.7%",
    y: "-9.3%"
  }, react_default.a.createElement("feOffset", {
    dx: "0",
    dy: "1",
    in: "SourceAlpha",
    result: "shadowOffsetOuter1"
  }), react_default.a.createElement("feGaussianBlur", {
    in: "shadowOffsetOuter1",
    result: "shadowBlurOuter1",
    stdDeviation: "2.5"
  }), react_default.a.createElement("feColorMatrix", {
    in: "shadowBlurOuter1",
    type: "matrix",
    values: "0 0 0 0 0.914034194   0 0 0 0 0.914034194   0 0 0 0 0.914034194  0 0 0 1 0"
  })), react_default.a.createElement("linearGradient", {
    id: `${id}-c`,
    x1: "50%",
    x2: "50%",
    y1: "0%",
    y2: "100%"
  }, react_default.a.createElement("stop", {
    offset: "0",
    stopColor: linearGradient[0]
  }), react_default.a.createElement("stop", {
    offset: "1",
    stopColor: linearGradient[1]
  }))), react_default.a.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    transform: "translate(5 4)"
  }, react_default.a.createElement("use", {
    fill: "#000",
    filter: "url(#b)",
    xlinkHref: "#a"
  }), react_default.a.createElement("use", {
    fill: "#fff",
    fillRule: "evenodd",
    xlinkHref: "#a"
  }), react_default.a.createElement("g", {
    fill: "#f5f5f5"
  }, react_default.a.createElement("rect", {
    height: "6",
    rx: "3",
    width: "36",
    x: "30",
    y: "14"
  }), react_default.a.createElement("rect", {
    height: "6",
    rx: "3",
    width: "36",
    x: "30",
    y: "43"
  }), react_default.a.createElement("rect", {
    height: "48",
    rx: "4",
    width: "24",
    x: "86",
    y: "14"
  }), react_default.a.createElement("rect", {
    height: "6",
    rx: "3",
    width: "36",
    x: "40",
    y: "27"
  }), react_default.a.createElement("rect", {
    height: "6",
    rx: "3",
    width: "36",
    x: "40",
    y: "56"
  })), react_default.a.createElement("path", {
    d: "m4 0h20v67c0 4.418278-3.581722 8-8 8h-12c-2.209139 0-4-1.790861-4-4v-67c0-2.209139 1.790861-4 4-4z",
    fill: `url(#${id}-c)`
  })));
});
// CONCATENATED MODULE: ./components/new_user_settings/display/user_settings_theme/user_settings_theme.jsx




const themeStyle = [["#845b74", "#3a3b51"], ["#34776f", "#353d51"], ["#446e80", "#363c52"], ["#5b6a91", "#383d54"]]; // const colorFormat = idx => `linear-gradient(180deg, ${themeStyle[idx][0]} 0%, ${themeStyle[idx][1]} 100%)`;

const colorVal = val => `${val[0]},${val[1]}`;

const user_settings_theme_options = [{
  label: react_default.a.createElement(theme_skeleton, {
    linearGradient: themeStyle[0]
  }),
  value: colorVal(themeStyle[0])
}, {
  label: react_default.a.createElement(theme_skeleton, {
    linearGradient: themeStyle[1]
  }),
  value: colorVal(themeStyle[1])
}, {
  label: react_default.a.createElement(theme_skeleton, {
    linearGradient: themeStyle[2]
  }),
  value: colorVal(themeStyle[2])
}, {
  label: react_default.a.createElement(theme_skeleton, {
    linearGradient: themeStyle[3]
  }),
  value: colorVal(themeStyle[3])
}];
const themeConfig = {
  sidebarBg: '#3a3b51',
  sidebarText: '#ffffff',
  sidebarUnreadText: '#ffffff',
  sidebarTextHoverBg: '#136197',
  sidebarTextActiveBorder: '#7ab0d6',
  sidebarTextActiveColor: '#ffffff',
  sidebarHeaderBg: '#845b74',
  sidebarHeaderTextColor: '#ffffff',
  onlineIndicator: '#7dbe00',
  awayIndicator: '#dcbd4e',
  dndIndicator: '#ff6a6a',
  mentionBj: '#fbfbfb',
  mentionColor: '#2071f7',
  centerChannelBg: '#f2f4f8',
  centerChannelColor: '#333333',
  newMessageSeparator: '#ff8800',
  linkColor: '#2f81b7',
  buttonBg: '#1dacfc',
  buttonColor: '#ffffff',
  errorTextColor: '#a94442',
  mentionHighlightBg: '#f3e197',
  mentionHighlightLink: '#2f81b7',
  codeTheme: "github",
  mentionBg: '#fbfbfb'
};
/* harmony default export */ var user_settings_theme = (props => {
  let _theme = props.theme;

  const handleSetTheme = async e => {
    const val = e.target.value.split(",");
    const theme = { ...themeConfig,
      sidebarHeaderBg: val[0],
      sidebarBg: val[1]
    };
    utils["b" /* applyTheme */](theme);
    await props.actions.saveTheme("", theme);

    if (props.applyToAllTeams) {
      await props.actions.deleteTeamSpecificThemes();
    }
  };

  return react_default.a.createElement(RadioItems, {
    className: "theme",
    title: "\u4E3B\u9898\u989C\u8272",
    name: "theme",
    options: user_settings_theme_options //defaultValue={`${_theme.sidebarHeaderBg},${_theme.sidebarBg}`}
    ,
    defaultValue: _theme.sidebarHeaderBg !== '#5b6a91' || _theme.sidebarBg !== '#383d54' ? '#5b6a91,#383d54' : `${_theme.sidebarHeaderBg},${_theme.sidebarBg}`,
    onChange: handleSetTheme
  });
});
// CONCATENATED MODULE: ./components/new_user_settings/display/user_settings_theme/index.js
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

/* harmony default export */ var display_user_settings_theme = (Object(es["connect"])(user_settings_theme_makeMapStateToProps, user_settings_theme_mapDispatchToProps)(user_settings_theme));
// CONCATENATED MODULE: ./components/new_user_settings/display/manage_timezones/manage_timezones.jsx




const Preferences = constants["N" /* default */].Preferences;
/* harmony default export */ var manage_timezones = (props => {
  const userId = props.user.id;
  let timePreference = {
    user_id: userId,
    category: Preferences.CATEGORY_DISPLAY_SETTINGS,
    name: Preferences.USE_MILITARY_TIME
  };

  const handleChange = e => {
    props.actions.savePreferences(userId, [{ ...timePreference,
      value: e.target.value
    }]);
  };

  return react_default.a.createElement(RadioItems, {
    title: "\u65F6\u949F\u663E\u793A",
    options: [{
      label: "12小时格式（如：4:00pm）",
      value: 'false'
    }, {
      label: "24小时格式（如：16:00）",
      value: 'true'
    }],
    defaultValue: props.militaryTime,
    onChange: handleChange
  });
}); // const userId = this.props.user.id;
// const teammateNameDisplayPreference = {
//     user_id: userId,
//     category: Preferences.CATEGORY_DISPLAY_SETTINGS,
//     name: Preferences.NAME_NAME_FORMAT,
//     value: this.state.teammateNameDisplay,
// };
// const channelDisplayModePreference = {
//     user_id: userId,
//     category: Preferences.CATEGORY_DISPLAY_SETTINGS,
//     name: Preferences.CHANNEL_DISPLAY_MODE,
//     value: this.state.channelDisplayMode,
// };
// const messageDisplayPreference = {
//     user_id: userId,
//     category: Preferences.CATEGORY_DISPLAY_SETTINGS,
//     name: Preferences.MESSAGE_DISPLAY,
//     value: this.state.messageDisplay,
// };
// const collapseDisplayPreference = {
//     user_id: userId,
//     category: Preferences.CATEGORY_DISPLAY_SETTINGS,
//     name: Preferences.COLLAPSE_DISPLAY,
//     value: this.state.collapseDisplay,
// };
// const linkPreviewDisplayPreference = {
//     user_id: userId,
//     category: Preferences.CATEGORY_DISPLAY_SETTINGS,
//     name: Preferences.LINK_PREVIEW_DISPLAY,
//     value: this.state.linkPreviewDisplay,
// };
// this.setState({isSaving: true});
// const preferences = [
//     timePreference,
//     channelDisplayModePreference,
//     messageDisplayPreference,
//     collapseDisplayPreference,
//     linkPreviewDisplayPreference,
//     teammateNameDisplayPreference,
// ];
// await this.props.actions.savePreferences(userId, preferences);
// CONCATENATED MODULE: ./components/new_user_settings/display/manage_timezones/index.js





function manage_timezones_mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux["bindActionCreators"])({
      savePreferences: actions_preferences["savePreferences"]
    }, dispatch)
  };
}

/* harmony default export */ var display_manage_timezones = (Object(es["connect"])(null, manage_timezones_mapDispatchToProps)(manage_timezones));
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js
var message = __webpack_require__(3478);

// CONCATENATED MODULE: ./components/new_user_settings/display/manage_languages/manage_languages.jsx



/* harmony default export */ var manage_languages = (props => {
  const handleChange = e => {
    props.actions.updateMe({ ...props.user,
      locale: e.target.value
    }).then(({
      data,
      error: err
    }) => {
      if (data) {
        console.info('update lanuages ok');
      } else {
        let serverError = err;

        if (err.message) {
          serverError = err.message;
        }

        message["a" /* default */].error(err);
      }
    });
  };

  const {
    locale
  } = props.user;
  return react_default.a.createElement(RadioItems, {
    title: "\u8BED\u8A00",
    defaultValue: locale,
    options: [{
      label: "中文(简体)",
      value: "zh-CN"
    }, {
      label: "English",
      value: "en"
    }],
    onChange: handleChange
  });
});
// CONCATENATED MODULE: ./components/new_user_settings/display/manage_languages/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





function manage_languages_mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux["bindActionCreators"])({
      updateMe: actions_users["updateMe"]
    }, dispatch)
  };
}

/* harmony default export */ var display_manage_languages = (Object(es["connect"])(null, manage_languages_mapDispatchToProps)(manage_languages));
// EXTERNAL MODULE: ./components/new_user_settings/display/display.scss
var display = __webpack_require__(3340);

// CONCATENATED MODULE: ./components/new_user_settings/display/new_user_settings_display.jsx







/* harmony default export */ var new_user_settings_display = (props => {
  //console.log(props);
  return react_default.a.createElement("div", {
    className: "setting__display"
  }, react_default.a.createElement(display_user_settings_theme, props), react_default.a.createElement(display_manage_timezones, props), react_default.a.createElement(display_manage_languages, props));
});
// CONCATENATED MODULE: ./components/new_user_settings/display/index.js
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
      autoUpdateTimezone: timezone["autoUpdateTimezone"],
      savePreferences: actions_preferences["savePreferences"]
    }, dispatch)
  };
}

/* harmony default export */ var components_new_user_settings_display = (Object(es["connect"])(display_mapStateToProps, display_mapDispatchToProps)(new_user_settings_display));
// EXTERNAL MODULE: ./mattermost-redux/actions/errors.js
var errors = __webpack_require__(105);

// EXTERNAL MODULE: ./node_modules/antd/es/row/index.js
var row = __webpack_require__(2551);

// EXTERNAL MODULE: ./node_modules/antd/es/col/index.js
var col = __webpack_require__(2552);

// EXTERNAL MODULE: ./node_modules/antd/es/card/index.js + 2 modules
var card = __webpack_require__(3491);

// EXTERNAL MODULE: ./mattermost-redux/client/index.js
var client = __webpack_require__(27);

// CONCATENATED MODULE: ./components/new_user_settings/general/profile_picture/index.jsx


/* harmony default export */ var profile_picture = (({
  id,
  lastPictureUpdate,
  loadingPicture = false,
  onFileChange
}) => {
  const handleFileChange = e => {
    let pictureFile = null;

    if (e.target.files && e.target.files[0]) {
      pictureFile = e.target.files[0];
    }

    onFileChange && onFileChange(pictureFile);
  };

  return react_default.a.createElement("div", {
    className: "profile-picture"
  }, react_default.a.createElement("img", {
    alt: '',
    className: "user__picture",
    src: client["Client4"].getProfilePictureUrl(id, lastPictureUpdate)
  }), react_default.a.createElement("input", {
    accept: ".jpg,.png,.bmp",
    type: "file",
    onChange: handleFileChange,
    disabled: loadingPicture,
    className: "upload__picture"
  }), react_default.a.createElement("span", null));
});
// EXTERNAL MODULE: ./components/new_user_settings/general/general.scss
var general_general = __webpack_require__(3341);

// CONCATENATED MODULE: ./components/new_user_settings/general/new_user_settings_general.jsx





const Items = ({
  dataSource = []
}) => {
  return react_default.a.createElement(row["a" /* default */], null, dataSource.map((item, idx) => react_default.a.createElement(col["a" /* default */], {
    span: 12,
    key: idx
  }, react_default.a.createElement("label", null, item.label), react_default.a.createElement("span", {
    title: item.value
  }, item.value || ' '))));
};

/* harmony default export */ var new_user_settings_general = (props => {
  // console.log(props);
  const [loadingPicture, setLoadingPicture] = Object(react["useState"])(false);
  const {
    nickname,
    username,
    phone,
    email,
    position,
    sex,
    id,
    last_picture_update,
    department_name,
    job_grade
  } = props.user || {};

  const handleFileChange = file => {
    // console.log(file, '-----profile-picture');
    setLoadingPicture(true);
    props.actions.uploadProfileImage(id, file).then(({
      data,
      error: err
    }) => {
      if (data) {// console.log('file ok');
      } else if (err) {
        console.error('file fail', err);
        message["a" /* default */].error(err);
      }

      setLoadingPicture(false);
    });
  };

  return react_default.a.createElement("div", {
    className: "settings__general"
  }, react_default.a.createElement(card["a" /* default */], null, react_default.a.createElement("div", {
    className: "user_base_info"
  }, react_default.a.createElement("div", null, react_default.a.createElement("h3", null, nickname || username, sex && react_default.a.createElement("span", {
    className: sex === 1 ? 'female' : 'male'
  })), react_default.a.createElement("p", null, department_name)), react_default.a.createElement(profile_picture, {
    id: id,
    lastPictureUpdate: last_picture_update,
    onFileChange: handleFileChange,
    loadingPicture: loadingPicture
  })), react_default.a.createElement(Items, {
    dataSource: [{
      label: '手机',
      value: phone
    }, {
      label: '部门',
      value: department_name
    }, {
      label: '座机',
      value: '无'
    }, {
      label: '岗位',
      value: position
    }, {
      label: '邮箱',
      value: email
    }, {
      label: '职级',
      value: job_grade
    }]
  })));
});
// CONCATENATED MODULE: ./components/new_user_settings/general/index.js
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

/* harmony default export */ var components_new_user_settings_general = (Object(es["connect"])(general_mapStateToProps, general_mapDispatchToProps)(new_user_settings_general));
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(2);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);

// EXTERNAL MODULE: ./node_modules/antd/es/divider/index.js
var divider = __webpack_require__(3482);

// EXTERNAL MODULE: ./node_modules/antd/es/checkbox/index.js + 2 modules
var es_checkbox = __webpack_require__(3492);

// EXTERNAL MODULE: ./node_modules/antd/es/time-picker/index.js + 6 modules
var time_picker = __webpack_require__(3486);

// EXTERNAL MODULE: ./components/new_user_settings/notifications/notific.scss
var notific = __webpack_require__(3342);

// CONCATENATED MODULE: ./components/new_user_settings/notifications/new_user_settings_notifications.jsx





const dateDormat = "HH:mm";
const unreadOpts = [{
  label: "开启",
  value: "true"
}, {
  label: "关闭",
  value: "false"
}];
/* harmony default export */ var new_user_settings_notifications = (props => {
  // console.log(props, '-------notific props');
  const {
    desktop,
    comments,
    desktop_sound,
    start_time = '',
    end_time = '',
    unread,
    meeting_notify_status
  } = props.user.notify_props;
  const [state, setState] = Object(react["useReducer"])((o, n) => ({ ...o,
    ...n
  }), {
    start_time,
    end_time,
    isEnable: start_time.length > 0 && end_time.length > 0,
    meetingNotifyStatus: meeting_notify_status === 'true'
  });

  const handleChange = (e, data) => {
    const name = e.target.name;
    let val;

    if (e.target.type === "checkbox") {
      val = `${e.target.checked}`;
      setState({
        meetingNotifyStatus: e.target.checked
      });
    } else {
      val = e.target.value;
    }

    let d = { ...props.user.notify_props,
      ...data
    };

    if (name) {
      d[name] = val;
    }

    props.actions.updateMe({
      notify_props: d
    }).then(({
      data: result,
      error: err
    }) => {
      if (result) {// console.log("notific update ok", result);
      } else if (err) {
        // console.error("notific update fail", err);
        message["a" /* default */].error(err);
      }
    });
  };

  const handleCheckbox = e => {
    const val = e.target.checked;
    const name = e.target.name;
    handleChange({
      target: {
        name: e.target.name,
        value: `${val}`
      }
    });
  };

  const handleTimePicker = (e, type) => {
    const val = moment_default()(e).format("HH:mm:ss");
    setState({
      [type]: val
    }); // console.log(e, 'time')

    if (e != null) {
      if (type === 'start_time' && state.end_time) {
        handleChange({
          target: {
            name: 'start_time',
            value: val
          }
        }, {
          end_time: state.end_time
        });
      }

      if (type === 'end_time' && state.start_time) {
        handleChange({
          target: {
            name: 'end_time',
            value: val
          }
        }, {
          start_time: state.start_time
        });
      }
    }
  };

  const handlePeriod = e => {
    setState({
      isEnable: e.target.checked
    });

    if (!e.target.checked) {
      setState({
        start_time: '',
        end_time: ''
      });
      handleChange({
        target: {}
      }, {
        start_time: '',
        end_time: ''
      });
    }
  };

  return react_default.a.createElement("div", {
    className: "setting__notific"
  }, react_default.a.createElement(RadioItems, {
    title: "\u672A\u8BFB\u6D88\u606F\u8BA1\u6570",
    name: "unread",
    options: unreadOpts // value={unreadOpts[0].value}
    ,
    defaultValue: unread || 'true',
    onChange: handleChange
  }), react_default.a.createElement(RadioItems, {
    title: "\u684C\u9762\u63A8\u9001\u901A\u77E5",
    name: "desktop",
    options: [{
      label: "所有消息",
      value: "all"
    }, {
      label: "私聊或提及",
      value: "mention"
    }, {
      label: "不提醒",
      value: "none"
    }],
    onChange: handleChange,
    defaultValue: desktop
  }), react_default.a.createElement(RadioItems, {
    title: "\u56DE\u590D\u901A\u77E5",
    name: "comments",
    options: [{
      label: "在我开头或回复过的消息串触发通知",
      value: "any"
    }, {
      label: "在我开头的消息串触发通知",
      value: "root"
    }, {
      label: "回复串信息只有在我被提及时触发通知",
      value: "never"
    }],
    onChange: handleChange,
    defaultValue: comments
  }), react_default.a.createElement(RadioItems, {
    title: "\u6536\u5230\u65B0\u6D88\u606F\u65F6\u64AD\u653E\u58F0\u97F3",
    name: "desktop_sound",
    options: [{
      label: "开启",
      value: "true"
    }, {
      label: "关闭",
      value: "false"
    }],
    onChange: handleChange,
    defaultValue: desktop_sound
  }), react_default.a.createElement(divider["a" /* default */], null), react_default.a.createElement("div", {
    className: "ant-checkbox-group"
  }, react_default.a.createElement("div", {
    className: "time"
  }, react_default.a.createElement(es_checkbox["a" /* default */], {
    name: "period",
    onChange: handlePeriod,
    checked: state.isEnable
  }, "\u514D\u6253\u6270\u65F6\u6BB5\uFF1A"), react_default.a.createElement("div", {
    className: "time-pick"
  }, react_default.a.createElement(time_picker["a" /* default */], {
    value: state.start_time ? moment_default()(state.start_time, 'HH:mm') : null,
    onChange: e => handleTimePicker(e, "start_time"),
    format: dateDormat,
    placeholder: "00:00",
    disabled: !state.isEnable
  }), react_default.a.createElement(time_picker["a" /* default */], {
    value: state.end_time ? moment_default()(state.end_time, 'HH:mm') : null,
    onChange: e => handleTimePicker(e, "end_time"),
    format: dateDormat,
    placeholder: "23:59",
    disabled: !state.isEnable
  }))), react_default.a.createElement(es_checkbox["a" /* default */], {
    name: "meeting_notify_status",
    checked: meeting_notify_status === 'true',
    onChange: handleChange
  }, "\u5F53\u6211\u5728\u5F00\u4F1A\u6216\u5185\u90E8\u901A\u8BDD\u65F6\u5C06\u901A\u77E5\u9759\u97F3")));
}); // auto_responder_active: "false"
// auto_responder_message: "你好，我现在已离开办公室并无法回复消息。"
// channel: "true"
// comments: "root"
// desktop: "mention"
// desktop_sound: "false"
// email: "true"
// first_name: "false"
// mention_keys: ""
// push: "mention"
// push_status: "away"
// CONCATENATED MODULE: ./components/new_user_settings/notifications/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.







function notifications_mapStateToProps(state) {
  const config = Object(general["getConfig"])(state);
  const siteName = config.SiteName;
  const sendPushNotifications = config.SendPushNotifications === 'true';
  const enableAutoResponder = config.ExperimentalEnableAutomaticReplies === 'true';
  const currentUser = Object(users["getCurrentUser"])(state);

  if (!currentUser) {
    return {};
  }

  const userId = currentUser.id;
  return {
    userId,
    siteName,
    sendPushNotifications,
    enableAutoResponder,
    status: Object(users["getStatusForUserId"])(state, userId)
  };
}

function notifications_mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux["bindActionCreators"])({
      updateMe: actions_users["updateMe"],
      setStatus: actions_users["setStatus"]
    }, dispatch)
  };
}

/* harmony default export */ var notifications = (Object(es["connect"])(notifications_mapStateToProps, notifications_mapDispatchToProps)(new_user_settings_notifications));
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

// CONCATENATED MODULE: ./components/new_user_settings/security/mfa_section/mfa_section.jsx
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
// CONCATENATED MODULE: ./components/new_user_settings/security/mfa_section/index.js
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
// EXTERNAL MODULE: ./actions/diagnostics_actions.jsx
var diagnostics_actions = __webpack_require__(300);

// EXTERNAL MODULE: ./utils/user_agent.jsx
var user_agent = __webpack_require__(39);

// EXTERNAL MODULE: ./components/save_button.jsx
var save_button = __webpack_require__(1612);

// EXTERNAL MODULE: ./components/formatted_markdown_message.jsx
var formatted_markdown_message = __webpack_require__(1564);

// EXTERNAL MODULE: ./components/icon/warning_icon.jsx
var warning_icon = __webpack_require__(1621);

// CONCATENATED MODULE: ./components/new_user_settings/security/user_access_token_section/user_access_token_section.jsx
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
// CONCATENATED MODULE: ./components/new_user_settings/security/user_access_token_section/index.js
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
// CONCATENATED MODULE: ./components/new_user_settings/security/user_settings_security.jsx
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
// CONCATENATED MODULE: ./components/new_user_settings/security/index.js
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
// EXTERNAL MODULE: ./utils/i18n.jsx
var i18n = __webpack_require__(53);

// CONCATENATED MODULE: ./components/new_user_settings/sidebar/user_settings_sidebar.jsx
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
        sortingId = Object(i18n["b" /* t */])('user.settings.sidebar.sortAlphaShort');
        sortingDefaultMessage = 'sorted alphabetically';
      } else {
        sortingId = Object(i18n["b" /* t */])('user.settings.sidebar.sortRecentShort');
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
        atTopId = Object(i18n["b" /* t */])('user.settings.sidebar.unreadsShort');
        atTopDefaultMessage = 'Unreads grouped separately';
      } else if (unreadsAtTop === 'false' && favoriteAtTop === 'true') {
        atTopId = Object(i18n["b" /* t */])('user.settings.sidebar.favoritesShort');
        atTopDefaultMessage = 'Favorites grouped separately';
      } else if (unreadsAtTop === 'true' && favoriteAtTop === 'true') {
        atTopId = Object(i18n["b" /* t */])('user.settings.sidebar.unreadsFavoritesShort');
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
      let channelSwitcherSectionDescId = Object(i18n["b" /* t */])('user.settings.sidebar.channelSwitcherSectionDesc.windows');
      let channelSwitcherSectionDescDefault = 'The channel switcher is shown at the bottom of the sidebar and is used to jump between channels quickly. It can also be accessed using CTRL + K.';

      if (Object(utils["W" /* isMac */])()) {
        channelSwitcherSectionDescId = Object(i18n["b" /* t */])('user.settings.sidebar.channelSwitcherSectionDesc.mac');
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
// CONCATENATED MODULE: ./components/new_user_settings/sidebar/index.js
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
// CONCATENATED MODULE: ./components/new_user_settings/user_settings.jsx
function user_settings_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.








class user_settings_UserSettings extends react_default.a.PureComponent {
  render() {
    if (this.props.activeTab === 'general') {
      return react_default.a.createElement("div", null, react_default.a.createElement(components_new_user_settings_general, {
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
      return react_default.a.createElement("div", null, react_default.a.createElement(components_new_user_settings_display, {
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
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4!./components/new_user_settings/index.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.




function new_user_settings_mapStateToProps(state) {
  return {
    user: Object(users["getCurrentUser"])(state)
  };
}

/* harmony default export */ var new_user_settings = __webpack_exports__["default"] = (Object(es["connect"])(new_user_settings_mapStateToProps)(user_settings_UserSettings));

/***/ })

}]);
//# sourceMappingURL=9.333bfcfedeee3cdcaa39.js.map
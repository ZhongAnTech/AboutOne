(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ 3437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(1);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(33);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(433);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(6);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.es.js + 1 modules
var index_es = __webpack_require__(52);

// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js + 1 modules
var react_router_dom = __webpack_require__(1553);

// EXTERNAL MODULE: ./components/formatted_markdown_message.jsx
var formatted_markdown_message = __webpack_require__(1564);

// CONCATENATED MODULE: ./components/help/components/messaging.jsx
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.




function HelpMessaging() {
  return react_default.a.createElement("div", null, react_default.a.createElement("h1", {
    className: "markdown__heading"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.messaging.title",
    defaultMessage: "Messaging Basics"
  })), react_default.a.createElement("hr", null), react_default.a.createElement("p", null, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
    id: "help.messaging.write",
    defaultMessage: "**Write messages** using the text input box at the bottom of Mattermost. Press ENTER to send a message. Use SHIFT+ENTER to create a new line without sending a message."
  })), react_default.a.createElement("p", null, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
    id: "help.messaging.reply",
    defaultMessage: "**Reply to messages** by clicking the reply arrow next to the message text."
  })), react_default.a.createElement("p", null, react_default.a.createElement("img", {
    src: "https://docs.mattermost.com/_images/replyIcon.PNG",
    alt: "reply arrow",
    className: "markdown-inline-img"
  })), react_default.a.createElement("p", null, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
    id: "help.messaging.notify",
    defaultMessage: "**Notify teammates** when they are needed by typing `@username`."
  })), react_default.a.createElement("p", null, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
    id: "help.messaging.format",
    defaultMessage: "**Format your messages** using Markdown that supports text styling, headings, links, emoticons, code blocks, block quotes, tables, lists and in-line images."
  })), react_default.a.createElement("p", null, react_default.a.createElement("img", {
    src: "https://docs.mattermost.com/_images/messagesTable1.PNG",
    alt: "markdown",
    className: "markdown-inline-img"
  })), react_default.a.createElement("p", null, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
    id: "help.messaging.emoji",
    defaultMessage: '**Quickly add emoji** by typing ":", which will open an emoji autocomplete. If the existing emoji don\'t cover what you want to express, you can also create your own [Custom Emoji](!http://docs.mattermost.com/help/settings/custom-emoji.html).'
  })), react_default.a.createElement("p", null, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
    id: "help.messaging.attach",
    defaultMessage: "**Attach files** by dragging and dropping into Mattermost or clicking the attachment icon in the text input box."
  })), react_default.a.createElement("p", {
    className: "links"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.learnMore",
    defaultMessage: "Learn more about:"
  })), react_default.a.createElement("ul", null, react_default.a.createElement("li", null, react_default.a.createElement(react_router_dom["a" /* Link */], {
    to: "/help/composing"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.link.composing",
    defaultMessage: "Composing Messages and Replies"
  }))), react_default.a.createElement("li", null, react_default.a.createElement(react_router_dom["a" /* Link */], {
    to: "/help/mentioning"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.link.mentioning",
    defaultMessage: "Mentioning Teammates"
  }))), react_default.a.createElement("li", null, react_default.a.createElement(react_router_dom["a" /* Link */], {
    to: "/help/formatting"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.link.formatting",
    defaultMessage: "Formatting Messages using Markdown"
  }))), react_default.a.createElement("li", null, react_default.a.createElement(react_router_dom["a" /* Link */], {
    to: "/help/attaching"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.link.attaching",
    defaultMessage: "Attaching Files"
  }))), react_default.a.createElement("li", null, react_default.a.createElement(react_router_dom["a" /* Link */], {
    to: "/help/commands"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.link.commands",
    defaultMessage: "Executing Commands"
  })))));
}
// CONCATENATED MODULE: ./components/help/components/composing.jsx
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.




function HelpComposing() {
  return react_default.a.createElement("div", null, react_default.a.createElement("h1", {
    className: "markdown__heading"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.composing.title",
    defaultMessage: "Sending Messages"
  })), react_default.a.createElement("hr", null), react_default.a.createElement("h2", {
    className: "markdown__heading"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.composing.types.title",
    defaultMessage: "Message Types"
  })), react_default.a.createElement("p", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.composing.types.description",
    defaultMessage: "Reply to posts to keep conversations organized in threads."
  })), react_default.a.createElement("h4", {
    className: "markdown__heading"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.composing.posts.title",
    defaultMessage: "Posts"
  })), react_default.a.createElement("p", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.composing.posts.description",
    defaultMessage: "Posts can be considered parent messages. They are the messages that often start a thread of replies. Posts are composed and sent from the text input box at the bottom of the center pane."
  })), react_default.a.createElement("h4", {
    className: "markdown__heading"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.composing.replies.title",
    defaultMessage: "Replies"
  })), react_default.a.createElement("p", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.composing.replies.description1",
    defaultMessage: "Reply to a message by clicking the reply icon next to any message text. This action opens the right-hand sidebar where you can see the message thread, then compose and send your reply. Replies are indented slightly in the center pane to indicate that they are child messages of a parent post."
  })), react_default.a.createElement("p", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.composing.replies.description2",
    defaultMessage: "When composing a reply in the right-hand side, click the expand/collapse icon with two arrows at the top of the sidebar to make things easier to read."
  })), react_default.a.createElement("h2", {
    className: "markdown__heading"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.composing.posting.title",
    defaultMessage: "Posting a Message"
  })), react_default.a.createElement("p", null, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
    id: "help.composing.posting.description",
    defaultMessage: "Write a message by typing into the text input box, then press ENTER to send it. Use SHIFT+ENTER to create a new line without sending a message. To send messages by pressing CTRL+ENTER go to **Main Menu > Account Settings > Send messages on CTRL+ENTER**."
  })), react_default.a.createElement("h2", {
    className: "markdown__heading"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.composing.editing.title",
    defaultMessage: "Editing a Message"
  })), react_default.a.createElement("p", null, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
    id: "help.composing.editing.description",
    defaultMessage: 'Edit a message by clicking the **[...]** icon next to any message text that you\'ve composed, then click **Edit**. After making modifications to the message text, press **ENTER** to save the modifications. Message edits do not trigger new @mention notifications, desktop notifications or notification sounds.'
  })), react_default.a.createElement("h2", {
    className: "markdown__heading"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.composing.deleting.title",
    defaultMessage: "Deleting a message"
  })), react_default.a.createElement("p", null, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
    id: "help.composing.deleting.description",
    defaultMessage: 'Delete a message by clicking the **[...]** icon next to any message text that you\'ve composed, then click **Delete**. System and Team Admins can delete any message on their system or team.'
  })), react_default.a.createElement("h2", {
    className: "markdown__heading"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.composing.linking.title",
    defaultMessage: "Linking to a message"
  })), react_default.a.createElement("p", null, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
    id: "help.composing.linking.description",
    defaultMessage: "The **Permalink** feature creates a link to any message. Sharing this link with other users in the channel lets them view the linked message in the Message Archives. Users who are not a member of the channel where the message was posted cannot view the permalink. Get the permalink to any message by clicking the **[...]** icon next to the message text > **Permalink** > **Copy Link**."
  })), react_default.a.createElement("p", {
    className: "links"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.learnMore",
    defaultMessage: "Learn more about:"
  })), react_default.a.createElement("ul", null, react_default.a.createElement("li", null, react_default.a.createElement(react_router_dom["a" /* Link */], {
    to: "/help/messaging"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.link.messaging",
    defaultMessage: "Basic Messaging"
  }))), react_default.a.createElement("li", null, react_default.a.createElement(react_router_dom["a" /* Link */], {
    to: "/help/mentioning"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.link.mentioning",
    defaultMessage: "Mentioning Teammates"
  }))), react_default.a.createElement("li", null, react_default.a.createElement(react_router_dom["a" /* Link */], {
    to: "/help/formatting"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.link.formatting",
    defaultMessage: "Formatting Messages using Markdown"
  }))), react_default.a.createElement("li", null, react_default.a.createElement(react_router_dom["a" /* Link */], {
    to: "/help/attaching"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.link.attaching",
    defaultMessage: "Attaching Files"
  }))), react_default.a.createElement("li", null, react_default.a.createElement(react_router_dom["a" /* Link */], {
    to: "/help/commands"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.link.commands",
    defaultMessage: "Executing Commands"
  })))));
}
// CONCATENATED MODULE: ./components/help/components/mentioning.jsx
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.




function HelpMentioning() {
  return react_default.a.createElement("div", null, react_default.a.createElement("h1", {
    className: "markdown__heading"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.mentioning.title",
    defaultMessage: "Mentioning Teammates"
  })), react_default.a.createElement("hr", null), react_default.a.createElement("h2", {
    className: "markdown__heading"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.mentioning.mentions.title",
    defaultMessage: "@Mentions"
  })), react_default.a.createElement("p", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.mentioning.mentions.description",
    defaultMessage: "Use @mentions to get the attention of specific team members."
  })), react_default.a.createElement("h4", {
    className: "markdown__heading"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.mentioning.username.title",
    defaultMessage: "@Username"
  })), react_default.a.createElement("p", null, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
    id: "help.mentioning.username.description1",
    defaultMessage: "You can mention a teammate by using the `@` symbol plus their username to send them a mention notification."
  })), react_default.a.createElement("p", null, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
    id: "help.mentioning.username.description2",
    defaultMessage: "Type `@` to bring up a list of team members who can be mentioned. To filter the list, type the first few letters of any username, first name, last name, or nickname. The **Up** and **Down** arrow keys can then be used to scroll through entries in the list, and pressing **ENTER** will select which user to mention. Once selected, the username will automatically replace the full name or nickname. The following example sends a special mention notification to **alice** that alerts her of the channel and message where she has been mentioned. If **alice** is away from Mattermost and has [email notifications](!http://docs.mattermost.com/help/getting-started/configuring-notifications.html#email-notifications) turned on, then she will receive an email alert of her mention along with the message text."
  })), react_default.a.createElement("div", {
    className: "post-code post-code--wrap"
  }, react_default.a.createElement("code", {
    className: "hljs"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.mentioning.usernameExample",
    defaultMessage: "@alice how did your interview go with the new candidate?"
  }))), react_default.a.createElement("p", null), react_default.a.createElement("p", null, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
    id: "help.mentioning.usernameCont",
    defaultMessage: "If the user you mentioned does not belong to the channel, a System Message will be posted to let you know. This is a temporary message only seen by the person who triggered it. To add the mentioned user to the channel, go to the dropdown menu beside the channel name and select **Add Members**."
  })), react_default.a.createElement("h4", {
    className: "markdown__heading"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.mentioning.channel.title",
    defaultMessage: "@Channel"
  })), react_default.a.createElement("p", null, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
    id: "help.mentioning.channel.description",
    defaultMessage: "You can mention an entire channel by typing `@channel`. All members of the channel will receive a mention notification that behaves the same way as if the members had been mentioned personally."
  })), react_default.a.createElement("div", {
    className: "post-code post-code--wrap"
  }, react_default.a.createElement("code", {
    className: "hljs"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.mentioning.channelExample",
    defaultMessage: "@channel great work on interviews this week. I think we found some excellent potential candidates!"
  }))), react_default.a.createElement("h2", {
    className: "markdown__heading"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.mentioning.triggers.title",
    defaultMessage: "Words That Trigger Mentions"
  })), react_default.a.createElement("p", null, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
    id: "help.mentioning.triggers.description",
    defaultMessage: "In addition to being notified by @username and @channel, you can customize words that trigger mention notifications in **Account Settings** > **Notifications** > **Words that trigger mentions**. By default, you will receive mention notifications on your first name, and you can add more words by typing them into the input box separated by commas. This is useful if you want to be notified of all posts on certain topics, for example, \"interviewing\" or \"marketing\"."
  })), react_default.a.createElement("h2", {
    className: "markdown__heading"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.mentioning.recent.title",
    defaultMessage: "Recent Mentions"
  })), react_default.a.createElement("p", null, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
    id: "help.mentioning.recent.description",
    defaultMessage: "Click `@` next to the search box to query for your most recent @mentions and words that trigger mentions. Click **Jump** next to a search result in the right-hand sidebar to jump the center pane to the channel and location of the message with the mention."
  })), react_default.a.createElement("p", {
    className: "links"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.learnMore",
    defaultMessage: "Learn more about:"
  })), react_default.a.createElement("ul", null, react_default.a.createElement("li", null, react_default.a.createElement(react_router_dom["a" /* Link */], {
    to: "/help/messaging"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.link.messaging",
    defaultMessage: "Basic Messaging"
  }))), react_default.a.createElement("li", null, react_default.a.createElement(react_router_dom["a" /* Link */], {
    to: "/help/composing"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.link.composing",
    defaultMessage: "Composing Messages and Replies"
  }))), react_default.a.createElement("li", null, react_default.a.createElement(react_router_dom["a" /* Link */], {
    to: "/help/formatting"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.link.formatting",
    defaultMessage: "Formatting Messages using Markdown"
  }))), react_default.a.createElement("li", null, react_default.a.createElement(react_router_dom["a" /* Link */], {
    to: "/help/attaching"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.link.attaching",
    defaultMessage: "Attaching Files"
  }))), react_default.a.createElement("li", null, react_default.a.createElement(react_router_dom["a" /* Link */], {
    to: "/help/commands"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.link.commands",
    defaultMessage: "Executing Commands"
  })))));
}
// EXTERNAL MODULE: ./components/markdown/index.js + 1 modules
var markdown = __webpack_require__(1624);

// CONCATENATED MODULE: ./components/help/components/formatting.jsx
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





function HelpFormatting() {
  const renderRawExample = example => {
    return react_default.a.createElement("div", {
      className: "post-code post-code--wrap"
    }, react_default.a.createElement("code", {
      className: "hljs"
    }, example));
  };

  const renderRawExampleWithResult = example => {
    return react_default.a.createElement("div", null, renderRawExample(example), react_default.a.createElement("p", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
      id: "help.formatting.renders",
      defaultMessage: "Renders as:"
    })), ' ', react_default.a.createElement(markdown["a" /* default */], {
      message: example
    }));
  };

  return react_default.a.createElement("div", null, react_default.a.createElement("h1", {
    className: "markdown__heading"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.formatting.title",
    defaultMessage: "Formatting Text"
  })), react_default.a.createElement("hr", null), react_default.a.createElement("p", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.formatting.intro",
    defaultMessage: "Markdown makes it easy to format messages. Type a message as you normally would, and use these rules to render it with special formatting."
  })), react_default.a.createElement("h2", {
    className: "markdown__heading"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.formatting.style.title",
    defaultMessage: "Text Style"
  })), react_default.a.createElement("p", null, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
    id: "help.formatting.style.description",
    defaultMessage: "You can use either `_` or `*` around a word to make it italic. Use two to make it bold."
  })), react_default.a.createElement("ul", null, react_default.a.createElement("li", null, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
    id: "help.formatting.style.listItem1",
    defaultMessage: "`_italics_` renders as _italics_"
  })), react_default.a.createElement("li", null, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
    id: "help.formatting.style.listItem2",
    defaultMessage: "`**bold**` renders as **bold**"
  })), react_default.a.createElement("li", null, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
    id: "help.formatting.style.listItem3",
    defaultMessage: "`**_bold-italic_**` renders as **_bold-italics_**"
  })), react_default.a.createElement("li", null, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
    id: "help.formatting.style.listItem4",
    defaultMessage: "`~~strikethrough~~` renders as ~~strikethrough~~"
  }))), react_default.a.createElement("h2", {
    className: "markdown__heading"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.formatting.code.title",
    defaultMessage: "Code Block"
  })), react_default.a.createElement("p", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.formatting.code.description",
    defaultMessage: "Create a code block by indenting each line by four spaces, or by placing ``` on the line above and below your code."
  })), react_default.a.createElement("p", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.formatting.example",
    defaultMessage: "Example:"
  })), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.formatting.codeBlock",
    defaultMessage: "Code block"
  }, example => renderRawExampleWithResult('```\n' + example + '\n```')), react_default.a.createElement("h3", {
    className: "markdown__heading"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.formatting.syntax.title",
    defaultMessage: "Syntax Highlighting"
  })), react_default.a.createElement("p", null, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
    id: "help.formatting.syntax.description",
    defaultMessage: "To add syntax highlighting, type the language to be highlighted after the ``` at the beginning of the code block. Mattermost also offers four different code themes (GitHub, Solarized Dark, Solarized Light, Monokai) that can be changed in **Account Settings** > **Display** > **Theme** > **Custom Theme** > **Center Channel Styles**"
  })), react_default.a.createElement("p", null, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
    id: "help.formatting.supportedSyntax",
    defaultMessage: 'Supported languages are: `as`, `applescript`, `osascript`, `scpt`, `bash`, `sh`, `zsh`, `clj`, `boot`, `cl2`, `cljc`, `cljs`, `cljs.hl`, `cljscm`, `cljx`, `hic`, `coffee`, `_coffee`, `cake`, `cjsx`, `cson`, `iced`, `cpp`, `c`, `cc`, `h`, `c++`, `h++`, `hpp`, `cs`, `csharp`, `css`, `d`, `di`, `dart`, `delphi`, `dpr`, `dfm`, `pas`, `pascal`, `freepascal`, `lazarus`, `lpr`, `lfm`, `diff`, `django`, `jinja`, `dockerfile`, `docker`, `erl`, `f90`, `f95`, `fsharp`, `fs`, `gcode`, `nc`, `go`, `groovy`, `handlebars`, `hbs`, `html.hbs`, `html.handlebars`, `hs`, `hx`, `java`, `jsp`, `js`, `jsx`, `json`, `jl`, `kt`, `ktm`, `kts`, `less`, `lisp`, `lua`, `mk`, `mak`, `md`, `mkdown`, `mkd`, `matlab`, `m`, `mm`, `objc`, `obj-c`, `ml`, `perl`, `pl`, `php`, `php3`, `php4`, `php5`, `php6`, `ps`, `ps1`, `pp`, `py`, `gyp`, `r`, `ruby`, `rb`, `gemspec`, `podspec`, `thor`, `irb`, `rs`, `scala`, `scm`, `sld`, `scss`, `st`, `styl`, `sql`, `swift`, `tex`, `vbnet`, `vb`, `bas`, `vbs`, `v`, `veo`, `xml`, `html`, `xhtml`, `rss`, `atom`, `xsl`, `plist`, `yaml`'
  })), react_default.a.createElement("p", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.formatting.example",
    defaultMessage: "Example:"
  })), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.formatting.syntaxEx",
    defaultMessage: '```go\npackage main\nimport "fmt"\nfunc main() \\{\n    fmt.Println("Hello, 世界")\n\\}\n```',
    values: {
      dummy: ''
    }
  }, example => renderRawExample(example)), react_default.a.createElement("p", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.formatting.renders",
    defaultMessage: "Renders as:"
  })), react_default.a.createElement("p", null, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
    id: "help.formatting.githubTheme",
    defaultMessage: "**GitHub Theme**"
  })), react_default.a.createElement("p", null, react_default.a.createElement("img", {
    src: "https://docs.mattermost.com/_images/syntax-highlighting-github.PNG",
    alt: "go syntax-highlighting",
    className: "markdown-inline-img"
  })), react_default.a.createElement("p", null, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
    id: "help.formatting.solirizedDarkTheme",
    defaultMessage: "**Solarized Dark Theme**"
  })), react_default.a.createElement("p", null, react_default.a.createElement("img", {
    src: "https://docs.mattermost.com/_images/syntax-highlighting-sol-dark.PNG",
    alt: "go syntax-highlighting",
    className: "markdown-inline-img"
  })), react_default.a.createElement("p", null, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
    id: "help.formatting.solirizedLightTheme",
    defaultMessage: "**Solarized Light Theme**"
  })), react_default.a.createElement("p", null, react_default.a.createElement("img", {
    src: "https://docs.mattermost.com/_images/syntax-highlighting-sol-light.PNG",
    alt: "go syntax-highlighting",
    className: "markdown-inline-img"
  })), react_default.a.createElement("p", null, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
    id: "help.formatting.monokaiTheme",
    defaultMessage: "**Monokai Theme**"
  })), react_default.a.createElement("p", null, react_default.a.createElement("img", {
    src: "https://docs.mattermost.com/_images/syntax-highlighting-monokai.PNG",
    alt: "go syntax-highlighting",
    className: "markdown-inline-img"
  })), react_default.a.createElement("h2", {
    className: "markdown__heading"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.formatting.inline.title",
    defaultMessage: "In-line Code"
  })), react_default.a.createElement("p", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.formatting.inline.description",
    defaultMessage: "Create in-line monospaced font by surrounding it with backticks."
  })), renderRawExample('`monospace`'), react_default.a.createElement("p", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.formatting.renders",
    defaultMessage: "Renders as:"
  }, text => react_default.a.createElement(markdown["a" /* default */], {
    message: text + ' `monospace`'
  }))), react_default.a.createElement("h2", {
    className: "markdown__heading"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.formatting.links.title",
    defaultMessage: "Links"
  })), react_default.a.createElement("p", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.formatting.links.description",
    defaultMessage: "Create labeled links by putting the desired text in square brackets and the associated link in normal brackets."
  })), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.formatting.linkEx",
    defaultMessage: '[Check out Mattermost!](https://about.mattermost.com/)'
  }, example => react_default.a.createElement("div", null, react_default.a.createElement(markdown["a" /* default */], {
    message: '`' + example + '`'
  }), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.formatting.renders",
    defaultMessage: "Renders as:"
  }, text => react_default.a.createElement(markdown["a" /* default */], {
    message: text + ' ' + example
  })))), react_default.a.createElement("h2", {
    className: "markdown__heading"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.formatting.images.title",
    defaultMessage: "In-line Images"
  })), react_default.a.createElement("p", null, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
    id: "help.formatting.images.description",
    defaultMessage: "Create in-line images using an `!` followed by the alt text in square brackets and the link in normal brackets. Add hover text by placing it in quotes after the link."
  })), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.formatting.imagesExample",
    defaultMessage: '![alt text](link "hover text")\n\nand\n\n[![Build Status](https://travis-ci.org/mattermost/mattermost-server.svg?branch=master)](https://travis-ci.org/mattermost/mattermost-server) [![Github](https://assets-cdn.github.com/favicon.ico)](https://github.com/mattermost/mattermost-server)'
  }, example => renderRawExampleWithResult(example)), react_default.a.createElement("h2", {
    className: "markdown__heading"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.formatting.emojis.title",
    defaultMessage: "Emojis"
  })), react_default.a.createElement("p", null, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
    id: "help.formatting.emojis.description",
    defaultMessage: 'Open the emoji autocomplete by typing `:`. A full list of emojis can be found [here](!http://www.emoji-cheat-sheet.com/). It is also possible to create your own [Custom Emoji](!http://docs.mattermost.com/help/settings/custom-emoji.html) if the emoji you want to use doesn\'t exist.'
  })), renderRawExampleWithResult(':smile: :+1: :sheep:'), react_default.a.createElement("h2", {
    className: "markdown__heading"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.formatting.lines.title",
    defaultMessage: "Lines"
  })), react_default.a.createElement("p", null, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
    id: "help.formatting.lines.description",
    defaultMessage: "Create a line by using three `*`, `_`, or `-`."
  })), react_default.a.createElement("p", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.formatting.renders",
    defaultMessage: "Renders as:"
  }, text => react_default.a.createElement(markdown["a" /* default */], {
    message: '`***` ' + text
  }))), react_default.a.createElement(markdown["a" /* default */], {
    message: "***"
  }), react_default.a.createElement("h2", {
    className: "markdown__heading"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.formatting.quotes.title",
    defaultMessage: "Block quotes"
  })), react_default.a.createElement("p", null, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
    id: "help.formatting.quotes.description",
    defaultMessage: "Create block quotes using `>`."
  })), react_default.a.createElement("p", null, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
    id: "help.formatting.quotesExample",
    defaultMessage: "`> block quotes` renders as:"
  })), react_default.a.createElement("p", null, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
    id: "help.formatting.quotesRender",
    defaultMessage: "> block quotes"
  })), react_default.a.createElement("h2", {
    className: "markdown__heading"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.formatting.lists.title",
    defaultMessage: "Lists"
  })), react_default.a.createElement("p", null, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
    id: "help.formatting.lists.description",
    defaultMessage: "Create a list by using `*` or `-` as bullets. Indent a bullet point by adding two spaces in front of it."
  })), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.formatting.listExample",
    defaultMessage: '* list item one\n* list item two\n    * item two sub-point'
  }, example => renderRawExampleWithResult(example)), react_default.a.createElement("p", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.formatting.ordered",
    defaultMessage: "Make it an ordered list by using numbers instead:"
  })), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.formatting.orderedExample",
    defaultMessage: '1. Item one\n2. Item two'
  }, example => renderRawExampleWithResult(example)), react_default.a.createElement("p", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.formatting.checklist",
    defaultMessage: "Make a task list by including square brackets:"
  })), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.formatting.checklistExample",
    defaultMessage: '- [ ] Item one\n- [ ] Item two\n- [x] Completed item'
  }, example => renderRawExampleWithResult(example)), react_default.a.createElement("h2", {
    className: "markdown__heading"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.formatting.tables.title",
    defaultMessage: "Tables"
  })), react_default.a.createElement("p", null, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
    id: "help.formatting.tables.description",
    defaultMessage: 'Create a table by placing a dashed line under the header row and separating the columns with a pipe `|`. (The columns don\'t need to line up exactly for it to work). Choose how to align table columns by including colons `:` within the header row.'
  })), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.formatting.tableExample",
    defaultMessage: '| Left-Aligned  | Center Aligned  | Right Aligned |\n| :------------ |:---------------:| -----:|\n| Left column 1 | this text       |  $100 |\n| Left column 2 | is              |   $10 |\n| Left column 3 | centered        |    $1 |'
  }, example => renderRawExampleWithResult(example)), react_default.a.createElement("h2", {
    className: "markdown__heading"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.formatting.headings.title",
    defaultMessage: "Headings"
  })), react_default.a.createElement("p", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.formatting.headings.description",
    defaultMessage: 'Make a heading by typing # and a space before your title. For smaller headings, use more #\'s.'
  })), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.formatting.headingsExample",
    defaultMessage: '## Large Heading\n### Smaller Heading\n#### Even Smaller Heading'
  }, example => renderRawExampleWithResult(example)), react_default.a.createElement("p", null, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
    id: "help.formatting.headings2",
    defaultMessage: "Alternatively, you can underline the text using `===` or `---` to create headings."
  })), react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.formatting.headings2Example",
    defaultMessage: 'Large Heading\n-------------'
  }, example => renderRawExampleWithResult(example)), react_default.a.createElement("p", {
    className: "links"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.learnMore",
    defaultMessage: "Learn more about:"
  })), react_default.a.createElement("ul", null, react_default.a.createElement("li", null, react_default.a.createElement(react_router_dom["a" /* Link */], {
    to: "/help/messaging"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.link.messaging",
    defaultMessage: "Basic Messaging"
  }))), react_default.a.createElement("li", null, react_default.a.createElement(react_router_dom["a" /* Link */], {
    to: "/help/composing"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.link.composing",
    defaultMessage: "Composing Messages and Replies"
  }))), react_default.a.createElement("li", null, react_default.a.createElement(react_router_dom["a" /* Link */], {
    to: "/help/mentioning"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.link.mentioning",
    defaultMessage: "Mentioning Teammates"
  }))), react_default.a.createElement("li", null, react_default.a.createElement(react_router_dom["a" /* Link */], {
    to: "/help/attaching"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.link.attaching",
    defaultMessage: "Attaching Files"
  }))), react_default.a.createElement("li", null, react_default.a.createElement(react_router_dom["a" /* Link */], {
    to: "/help/commands"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.link.commands",
    defaultMessage: "Executing Commands"
  })))));
}
// CONCATENATED MODULE: ./components/help/components/attaching.jsx
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.




function HelpAttaching() {
  return react_default.a.createElement("div", null, react_default.a.createElement("h1", {
    className: "markdown__heading"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.attaching.title",
    defaultMessage: "Attaching Files"
  })), react_default.a.createElement("hr", null), react_default.a.createElement("h2", {
    className: "markdown__heading"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.attaching.methods.title",
    defaultMessage: "Attachment Methods"
  })), react_default.a.createElement("p", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.attaching.methods.description",
    defaultMessage: "Attach a file by drag and drop or by clicking the attachment icon in the message input box."
  })), react_default.a.createElement("h4", {
    className: "markdown__heading"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.attaching.dragdrop.title",
    defaultMessage: "Drag and Drop"
  })), react_default.a.createElement("p", null, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
    id: "help.attaching.dragdrop.description",
    defaultMessage: "Upload a file or selection of files by dragging the files from your computer into the right-hand sidebar or center pane. Dragging and dropping attaches the files to the message input box, then you can optionally type a message and press **ENTER** to post."
  })), react_default.a.createElement("h4", {
    className: "markdown__heading"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.attaching.icon.title",
    defaultMessage: "Attachment Icon"
  })), react_default.a.createElement("p", null, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
    id: "help.attaching.icon.description",
    defaultMessage: "Alternatively, upload files by clicking the grey paperclip icon inside the message input box. This opens up your system file viewer where you can navigate to the desired files and then click **Open** to upload the files to the message input box. Optionally type a message and then press **ENTER** to post."
  })), react_default.a.createElement("h4", {
    className: "markdown__heading"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.attaching.pasting.title",
    defaultMessage: "Pasting Images"
  })), react_default.a.createElement("p", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.attaching.pasting.description",
    defaultMessage: "On Chrome and Edge browsers, it is also possible to upload files by pasting them from the clipboard. This is not yet supported on other browsers."
  })), react_default.a.createElement("h2", {
    className: "markdown__heading"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.attaching.previewer.title",
    defaultMessage: "File Previewer"
  })), react_default.a.createElement("p", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.attaching.previewer.description",
    defaultMessage: "Mattermost has a built in file previewer that is used to view media, download files and share public links. Click the thumbnail of an attached file to open it in the file previewer."
  })), react_default.a.createElement("h4", {
    className: "markdown__heading"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.attaching.publicLinks.title",
    defaultMessage: "Sharing Public Links"
  })), react_default.a.createElement("p", null, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
    id: "help.attaching.publicLinks.description",
    defaultMessage: "Public links allow you to share file attachments with people outside your Mattermost team. Open the file previewer by clicking on the thumbnail of an attachment, then click **Get Public Link**. This opens a dialog box with a link to copy. When the link is shared and opened by another user, the file will automatically download."
  })), react_default.a.createElement("p", null, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
    id: "help.attaching.publicLinks2",
    defaultMessage: "If **Get Public Link** is not visible in the file previewer and you prefer the feature enabled, you can request that your System Admin enable the feature from the System Console under **Security** > **Public Links**."
  })), react_default.a.createElement("h4", {
    className: "markdown__heading"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.attaching.downloading.title",
    defaultMessage: "Downloading Files"
  })), react_default.a.createElement("p", null, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
    id: "help.attaching.downloading.description",
    defaultMessage: "Download an attached file by clicking the download icon next to the file thumbnail or by opening the file previewer and clicking **Download**."
  })), react_default.a.createElement("h4", {
    className: "markdown__heading"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.attaching.supported.title",
    defaultMessage: "Supported Media Types"
  })), react_default.a.createElement("p", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.attaching.supported.description",
    defaultMessage: "If you are trying to preview a media type that is not supported, the file previewer will open a standard media attachment icon. Supported media formats depend heavily on your browser and operating system, but the following formats are supported by Mattermost on most browsers:"
  })), react_default.a.createElement("ul", null, react_default.a.createElement("li", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.attaching.supportedListItem1",
    defaultMessage: "Images: BMP, GIF, JPG, JPEG, PNG"
  })), react_default.a.createElement("li", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.attaching.supportedListItem2",
    defaultMessage: "Video: MP4"
  })), react_default.a.createElement("li", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.attaching.supportedListItem3",
    defaultMessage: "Audio: MP3, M4A"
  })), react_default.a.createElement("li", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.attaching.supportedListItem4",
    defaultMessage: "Documents: PDF"
  }))), react_default.a.createElement("p", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.attaching.notSupported",
    defaultMessage: "Document preview (Word, Excel, PPT) is not yet supported."
  })), react_default.a.createElement("h2", {
    className: "markdown__heading"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.attaching.limitations.title",
    defaultMessage: "File Size Limitations"
  })), react_default.a.createElement("p", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.attaching.limitations.description",
    defaultMessage: "Mattermost supports a maximum of five attached files per post, each with a maximum file size of 50Mb."
  })), react_default.a.createElement("p", {
    className: "links"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.learnMore",
    defaultMessage: "Learn more about:"
  })), react_default.a.createElement("ul", null, react_default.a.createElement("li", null, react_default.a.createElement(react_router_dom["a" /* Link */], {
    to: "/help/messaging"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.link.messaging",
    defaultMessage: "Basic Messaging"
  }))), react_default.a.createElement("li", null, react_default.a.createElement(react_router_dom["a" /* Link */], {
    to: "/help/composing"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.link.composing",
    defaultMessage: "Composing Messages and Replies"
  }))), react_default.a.createElement("li", null, react_default.a.createElement(react_router_dom["a" /* Link */], {
    to: "/help/mentioning"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.link.mentioning",
    defaultMessage: "Mentioning Teammates"
  }))), react_default.a.createElement("li", null, react_default.a.createElement(react_router_dom["a" /* Link */], {
    to: "/help/formatting"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.link.formatting",
    defaultMessage: "Formatting Messages using Markdown"
  }))), react_default.a.createElement("li", null, react_default.a.createElement(react_router_dom["a" /* Link */], {
    to: "/help/commands"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.link.commands",
    defaultMessage: "Executing Commands"
  })))));
}
// CONCATENATED MODULE: ./components/help/components/commands.jsx
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.




function HelpCommands() {
  return react_default.a.createElement("div", null, react_default.a.createElement("h1", {
    className: "markdown__heading"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.commands.title",
    defaultMessage: "Executing Commands"
  })), react_default.a.createElement("hr", null), react_default.a.createElement("p", null, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
    id: "help.commands.intro1",
    defaultMessage: "Slash commands perform operations in Mattermost by typing into the text input box. Enter a `/` followed by a command and some arguments to perform actions."
  })), react_default.a.createElement("p", null, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
    id: "help.commands.intro2",
    defaultMessage: "Built-in slash commands come with all Mattermost installations and custom slash commands are configurable to interact with external applications. Learn about configuring custom slash commands on the [developer slash command documentation page](!http://docs.mattermost.com/developer/slash-commands.html)."
  })), react_default.a.createElement("h2", {
    className: "markdown__heading"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.commands.builtin.title",
    defaultMessage: "Built-in Commands"
  })), react_default.a.createElement("p", null, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.commands.builtin.description",
    defaultMessage: "The following slash commands are available on all Mattermost installations:"
  })), react_default.a.createElement("p", null, react_default.a.createElement("img", {
    src: "https://s3.amazonaws.com/images.mattermost.com/slashCommandsTable1.png",
    alt: "commands",
    className: "markdown-inline-img"
  })), react_default.a.createElement("p", null, react_default.a.createElement("img", {
    src: "https://s3.amazonaws.com/images.mattermost.com/slashCommandsTable2.png",
    alt: "commands",
    className: "markdown-inline-img"
  })), react_default.a.createElement("p", null, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
    id: "help.commands.builtin2",
    defaultMessage: "Begin by typing `/` and a list of slash command options appears above the text input box. The autocomplete suggestions help by providing a format example in black text and a short description of the slash command in grey text."
  })), react_default.a.createElement("p", null, react_default.a.createElement("img", {
    src: "https://docs.mattermost.com/_images/slashCommandsAutocomplete.PNG",
    alt: "autocomplete",
    className: "markdown-inline-img"
  })), react_default.a.createElement("h2", {
    className: "markdown__heading"
  }, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
    id: "help.commands.custom.title",
    defaultMessage: "Custom Commands"
  })), react_default.a.createElement("p", null, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
    id: "help.commands.custom.description",
    defaultMessage: "Custom slash commands integrate with external applications. For example, a team might configure a custom slash command to check internal health records with `/patient joe smith` or check the weekly weather forecast in a city with `/weather toronto week`. Check with your System Admin or open the autocomplete list by typing `/` to determine if your team configured any custom slash commands."
  })), react_default.a.createElement("p", null, react_default.a.createElement(formatted_markdown_message["b" /* default */], {
    id: "help.commands.custom2",
    defaultMessage: "Custom slash commands are disabled by default and can be enabled by the System Admin in the **System Console** > **Integrations** > **Webhooks and Commands**. Learn about configuring custom slash commands on the [developer slash command documentation page](!http://docs.mattermost.com/developer/slash-commands.html)."
  })), react_default.a.createElement("p", {
    className: "links"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.learnMore",
    defaultMessage: "Learn more about:"
  })), react_default.a.createElement("ul", null, react_default.a.createElement("li", null, react_default.a.createElement(react_router_dom["a" /* Link */], {
    to: "/help/messaging"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.link.messaging",
    defaultMessage: "Basic Messaging"
  }))), react_default.a.createElement("li", null, react_default.a.createElement(react_router_dom["a" /* Link */], {
    to: "/help/composing"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.link.composing",
    defaultMessage: "Composing Messages and Replies"
  }))), react_default.a.createElement("li", null, react_default.a.createElement(react_router_dom["a" /* Link */], {
    to: "/help/mentioning"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.link.mentioning",
    defaultMessage: "Mentioning Teammates"
  }))), react_default.a.createElement("li", null, react_default.a.createElement(react_router_dom["a" /* Link */], {
    to: "/help/formatting"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.link.formatting",
    defaultMessage: "Formatting Messages using Markdown"
  }))), react_default.a.createElement("li", null, react_default.a.createElement(react_router_dom["a" /* Link */], {
    to: "/help/attaching"
  }, react_default.a.createElement(index_es["c" /* FormattedMessage */], {
    id: "help.link.attaching",
    defaultMessage: "Attaching Files"
  })))));
}
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4!./components/help/help_controller.jsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return help_controller_HelpController; });
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.










class help_controller_HelpController extends react_default.a.Component {
  UNSAFE_componentWillUpdate() {
    // eslint-disable-line camelcase
    react_dom_default.a.findDOMNode(this).scrollIntoView();
  }

  render() {
    return react_default.a.createElement("div", {
      className: "help-page"
    }, react_default.a.createElement("div", {
      className: "container col-sm-10 col-sm-offset-1"
    }, react_default.a.createElement(react_router["d" /* Switch */], null, react_default.a.createElement(react_router["b" /* Route */], {
      path: `${this.props.match.url}/messaging`,
      component: HelpMessaging
    }), react_default.a.createElement(react_router["b" /* Route */], {
      path: `${this.props.match.url}/composing`,
      component: HelpComposing
    }), react_default.a.createElement(react_router["b" /* Route */], {
      path: `${this.props.match.url}/mentioning`,
      component: HelpMentioning
    }), react_default.a.createElement(react_router["b" /* Route */], {
      path: `${this.props.match.url}/formatting`,
      component: HelpFormatting
    }), react_default.a.createElement(react_router["b" /* Route */], {
      path: `${this.props.match.url}/attaching`,
      component: HelpAttaching
    }), react_default.a.createElement(react_router["b" /* Route */], {
      path: `${this.props.match.url}/commands`,
      component: HelpCommands
    }))));
  }

}
help_controller_HelpController.propTypes = {
  /*
   * Object from react-router
   */
  match: prop_types_default.a.shape({
    url: prop_types_default.a.string.isRequired
  }).isRequired
};

/***/ })

}]);
//# sourceMappingURL=30.93d6c226701894649e32.js.map
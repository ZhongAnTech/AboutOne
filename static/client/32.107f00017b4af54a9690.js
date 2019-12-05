(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ 3339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PDFPreview; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52);
/* harmony import */ var pdfjs_dist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(448);
/* harmony import */ var pdfjs_dist__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pdfjs_dist__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_widgets_loading_loading_bars_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1776);
/* harmony import */ var components_file_info_preview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1828);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






const MAX_PDF_PAGES = 500;
class PDFPreview extends react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent {
  constructor(props) {
    super(props);
    this.updateStateFromProps = this.updateStateFromProps.bind(this);
    this.onDocumentLoad = this.onDocumentLoad.bind(this);
    this.onDocumentLoadError = this.onDocumentLoadError.bind(this);
    this.onPageLoad = this.onPageLoad.bind(this);
    this.renderPDFPage = this.renderPDFPage.bind(this);
    this.pdfPagesRendered = {};
    this.state = {
      pdf: null,
      pdfPages: {},
      pdfPagesLoaded: {},
      numPages: 0,
      loading: true,
      success: false
    };
  }

  componentDidMount() {
    this.updateStateFromProps(this.props);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    // eslint-disable-line camelcase
    if (this.props.fileUrl !== nextProps.fileUrl) {
      this.updateStateFromProps(nextProps);
      this.pdfPagesRendered = {};
    }
  }

  componentDidUpdate() {
    if (this.state.success) {
      for (let i = 0; i < this.state.numPages; i++) {
        this.renderPDFPage(i);
      }
    }
  }

  renderPDFPage(pageIndex) {
    if (this.pdfPagesRendered[pageIndex] || !this.state.pdfPagesLoaded[pageIndex]) {
      return;
    }

    const canvas = this.refs['pdfCanvas' + pageIndex];
    const context = canvas.getContext('2d');
    const viewport = this.state.pdfPages[pageIndex].getViewport(1);
    canvas.height = viewport.height;
    canvas.width = viewport.width;
    const renderContext = {
      canvasContext: context,
      viewport
    };
    this.state.pdfPages[pageIndex].render(renderContext);
    this.pdfPagesRendered[pageIndex] = true;
  }

  updateStateFromProps(props) {
    this.setState({
      pdf: null,
      pdfPages: {},
      pdfPagesLoaded: {},
      numPages: 0,
      loading: true,
      success: false
    });
    pdfjs_dist__WEBPACK_IMPORTED_MODULE_3___default.a.getDocument(props.fileUrl).then(this.onDocumentLoad, this.onDocumentLoadError);
  }

  onDocumentLoad(pdf) {
    const numPages = pdf.numPages <= MAX_PDF_PAGES ? pdf.numPages : MAX_PDF_PAGES;
    this.setState({
      pdf,
      numPages
    });

    for (let i = 1; i <= pdf.numPages; i++) {
      pdf.getPage(i).then(this.onPageLoad);
    }
  }

  onDocumentLoadError(reason) {
    console.log('Unable to load PDF preview: ' + reason); //eslint-disable-line no-console

    this.setState({
      loading: true,
      success: true
    }); // 有改动，暂时改成 true  true
  }

  onPageLoad(page) {
    const pdfPages = Object.assign({}, this.state.pdfPages);
    pdfPages[page.pageIndex] = page;
    const pdfPagesLoaded = Object.assign({}, this.state.pdfPagesLoaded);
    pdfPagesLoaded[page.pageIndex] = true;
    this.setState({
      pdfPages,
      pdfPagesLoaded
    });

    if (page.pageIndex === 0) {
      this.setState({
        success: true,
        loading: false
      });
    }
  }

  render() {
    if (this.state.loading) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "view-image__loading"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_widgets_loading_loading_bars_jsx__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null));
    }

    if (!this.state.success) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_file_info_preview__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
        fileInfo: this.props.fileInfo,
        fileUrl: this.props.fileUrl
      });
    }

    const pdfCanvases = [];

    for (let i = 0; i < this.state.numPages; i++) {
      pdfCanvases.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("canvas", {
        ref: 'pdfCanvas' + i,
        key: 'previewpdfcanvas' + i
      }));

      if (i < this.state.numPages - 1 && this.state.numPages > 1) {
        pdfCanvases.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          key: 'previewpdfspacer' + i,
          className: "pdf-preview-spacer"
        }));
      }
    }

    if (this.state.pdf.numPages > MAX_PDF_PAGES) {
      pdfCanvases.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        key: "previewpdfmorepages",
        href: this.props.fileUrl,
        className: "pdf-max-pages"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__[/* FormattedMessage */ "c"], {
        id: "pdf_preview.max_pages",
        defaultMessage: "Download to read more pages"
      })));
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "post-code"
    }, pdfCanvases);
  }

}

_defineProperty(PDFPreview, "propTypes", {
  /**
  * Compare file types
  */
  fileInfo: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object.isRequired,

  /**
  *  URL of pdf file to output and compare to update props url
  */
  fileUrl: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired
});

/***/ })

}]);
//# sourceMappingURL=32.107f00017b4af54a9690.js.map
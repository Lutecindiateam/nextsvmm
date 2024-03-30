"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./src/pages/_document.js":
/*!********************************!*\
  !*** ./src/pages/_document.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);\n\n\nclass MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_1___default()) {\n    static async getInitialProps(ctx) {\n        const originalRenderPage = ctx.renderPage;\n        // Run the React rendering logic synchronously\n        ctx.renderPage = ()=>originalRenderPage({\n                // Useful for wrapping the whole react tree\n                enhanceApp: (App)=>App,\n                // Useful for wrapping in a per-page basis\n                enhanceComponent: (Component)=>Component\n            });\n        // Run the parent `getInitialProps`, it now includes the custom `renderPage`\n        const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1___default().getInitialProps(ctx);\n        return initialProps;\n    }\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {\n            lang: \"en\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            charSet: \"UTF-8\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\next-svmm\\\\src\\\\pages\\\\_document.js\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"apple-touch-icon\",\n                            sizes: \"180x180\",\n                            href: \"apple-touch-icon.png\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\next-svmm\\\\src\\\\pages\\\\_document.js\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"icon\",\n                            type: \"image/png\",\n                            sizes: \"32x32\",\n                            href: \"favicon-32x32.png\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\next-svmm\\\\src\\\\pages\\\\_document.js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"icon\",\n                            type: \"image/png\",\n                            sizes: \"16x16\",\n                            href: \"favicon-16x16.png\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\next-svmm\\\\src\\\\pages\\\\_document.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"icon\",\n                            href: \"favicon.ico\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\next-svmm\\\\src\\\\pages\\\\_document.js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"manifest\",\n                            href: \"manifest.json\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\next-svmm\\\\src\\\\pages\\\\_document.js\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\next-svmm\\\\src\\\\pages\\\\_document.js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}, void 0, false, {\n                            fileName: \"D:\\\\next-svmm\\\\src\\\\pages\\\\_document.js\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {}, void 0, false, {\n                            fileName: \"D:\\\\next-svmm\\\\src\\\\pages\\\\_document.js\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\next-svmm\\\\src\\\\pages\\\\_document.js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\next-svmm\\\\src\\\\pages\\\\_document.js\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, this);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyDocument);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2RvY3VtZW50LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF1RTtBQUV2RSxNQUFNSyxtQkFBbUJMLHNEQUFRQTtJQUMvQixhQUFhTSxnQkFBZ0JDLEdBQUcsRUFBRTtRQUNoQyxNQUFNQyxxQkFBcUJELElBQUlFLFVBQVU7UUFFekMsOENBQThDO1FBQzlDRixJQUFJRSxVQUFVLEdBQUcsSUFDZkQsbUJBQW1CO2dCQUNqQiwyQ0FBMkM7Z0JBQzNDRSxZQUFZLENBQUNDLE1BQVFBO2dCQUNyQiwwQ0FBMEM7Z0JBQzFDQyxrQkFBa0IsQ0FBQ0MsWUFBY0E7WUFDbkM7UUFFRiw0RUFBNEU7UUFDNUUsTUFBTUMsZUFBZSxNQUFNZCxvRUFBd0IsQ0FBQ087UUFFcEQsT0FBT087SUFDVDtJQUVBQyxTQUFTO1FBQ1AscUJBQ0UsOERBQUNiLCtDQUFJQTtZQUFDYyxNQUFLOzs4QkFDVCw4REFBQ2YsK0NBQUlBOztzQ0FDSCw4REFBQ2dCOzRCQUFLQyxTQUFROzs7Ozs7c0NBQ2QsOERBQUNDOzRCQUNDQyxLQUFJOzRCQUNKQyxPQUFNOzRCQUNOQyxNQUFLOzs7Ozs7c0NBRVAsOERBQUNIOzRCQUNDQyxLQUFJOzRCQUNKRyxNQUFLOzRCQUNMRixPQUFNOzRCQUNOQyxNQUFLOzs7Ozs7c0NBRVAsOERBQUNIOzRCQUNDQyxLQUFJOzRCQUNKRyxNQUFLOzRCQUNMRixPQUFNOzRCQUNOQyxNQUFLOzs7Ozs7c0NBRVAsOERBQUNIOzRCQUFLQyxLQUFJOzRCQUFPRSxNQUFLOzs7Ozs7c0NBQ3RCLDhEQUFDSDs0QkFBS0MsS0FBSTs0QkFBV0UsTUFBSzs7Ozs7Ozs7Ozs7OzhCQUU1Qiw4REFBQ0U7O3NDQUNDLDhEQUFDckIsK0NBQUlBOzs7OztzQ0FDTCw4REFBQ0MscURBQVVBOzs7Ozs7Ozs7Ozs7Ozs7OztJQUluQjtBQUNGO0FBRUEsaUVBQWVDLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdm1tLy4vc3JjL3BhZ2VzL19kb2N1bWVudC5qcz9jNTA2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEb2N1bWVudCwgeyBIZWFkLCBIdG1sLCBNYWluLCBOZXh0U2NyaXB0IH0gZnJvbSBcIm5leHQvZG9jdW1lbnRcIjtcclxuXHJcbmNsYXNzIE15RG9jdW1lbnQgZXh0ZW5kcyBEb2N1bWVudCB7XHJcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhjdHgpIHtcclxuICAgIGNvbnN0IG9yaWdpbmFsUmVuZGVyUGFnZSA9IGN0eC5yZW5kZXJQYWdlO1xyXG5cclxuICAgIC8vIFJ1biB0aGUgUmVhY3QgcmVuZGVyaW5nIGxvZ2ljIHN5bmNocm9ub3VzbHlcclxuICAgIGN0eC5yZW5kZXJQYWdlID0gKCkgPT5cclxuICAgICAgb3JpZ2luYWxSZW5kZXJQYWdlKHtcclxuICAgICAgICAvLyBVc2VmdWwgZm9yIHdyYXBwaW5nIHRoZSB3aG9sZSByZWFjdCB0cmVlXHJcbiAgICAgICAgZW5oYW5jZUFwcDogKEFwcCkgPT4gQXBwLFxyXG4gICAgICAgIC8vIFVzZWZ1bCBmb3Igd3JhcHBpbmcgaW4gYSBwZXItcGFnZSBiYXNpc1xyXG4gICAgICAgIGVuaGFuY2VDb21wb25lbnQ6IChDb21wb25lbnQpID0+IENvbXBvbmVudCxcclxuICAgICAgfSk7XHJcblxyXG4gICAgLy8gUnVuIHRoZSBwYXJlbnQgYGdldEluaXRpYWxQcm9wc2AsIGl0IG5vdyBpbmNsdWRlcyB0aGUgY3VzdG9tIGByZW5kZXJQYWdlYFxyXG4gICAgY29uc3QgaW5pdGlhbFByb3BzID0gYXdhaXQgRG9jdW1lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XHJcblxyXG4gICAgcmV0dXJuIGluaXRpYWxQcm9wcztcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxIdG1sIGxhbmc9XCJlblwiPlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIgLz5cclxuICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIlxyXG4gICAgICAgICAgICBzaXplcz1cIjE4MHgxODBcIlxyXG4gICAgICAgICAgICBocmVmPVwiYXBwbGUtdG91Y2gtaWNvbi5wbmdcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgIHJlbD1cImljb25cIlxyXG4gICAgICAgICAgICB0eXBlPVwiaW1hZ2UvcG5nXCJcclxuICAgICAgICAgICAgc2l6ZXM9XCIzMngzMlwiXHJcbiAgICAgICAgICAgIGhyZWY9XCJmYXZpY29uLTMyeDMyLnBuZ1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgcmVsPVwiaWNvblwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJpbWFnZS9wbmdcIlxyXG4gICAgICAgICAgICBzaXplcz1cIjE2eDE2XCJcclxuICAgICAgICAgICAgaHJlZj1cImZhdmljb24tMTZ4MTYucG5nXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cImZhdmljb24uaWNvXCIgLz5cclxuICAgICAgICAgIDxsaW5rIHJlbD1cIm1hbmlmZXN0XCIgaHJlZj1cIm1hbmlmZXN0Lmpzb25cIiAvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8Ym9keT5cclxuICAgICAgICAgIDxNYWluIC8+XHJcbiAgICAgICAgICA8TmV4dFNjcmlwdCAvPlxyXG4gICAgICAgIDwvYm9keT5cclxuICAgICAgPC9IdG1sPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15RG9jdW1lbnQ7XHJcbiJdLCJuYW1lcyI6WyJEb2N1bWVudCIsIkhlYWQiLCJIdG1sIiwiTWFpbiIsIk5leHRTY3JpcHQiLCJNeURvY3VtZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4Iiwib3JpZ2luYWxSZW5kZXJQYWdlIiwicmVuZGVyUGFnZSIsImVuaGFuY2VBcHAiLCJBcHAiLCJlbmhhbmNlQ29tcG9uZW50IiwiQ29tcG9uZW50IiwiaW5pdGlhbFByb3BzIiwicmVuZGVyIiwibGFuZyIsIm1ldGEiLCJjaGFyU2V0IiwibGluayIsInJlbCIsInNpemVzIiwiaHJlZiIsInR5cGUiLCJib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_document.js\n");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./src/pages/_document.js")));
module.exports = __webpack_exports__;

})();
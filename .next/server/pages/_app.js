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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/context/ContextProvider.js":
/*!****************************************!*\
  !*** ./src/context/ContextProvider.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context */ \"./src/context/context.js\");\n\n\n\n\nconst ContextProvider = ({ children })=>{\n    const [menuStatus, setMenuStatus] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [openSearch, setOpenSearch] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const { pathname } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const toggleMenu = (value)=>{\n        setMenuStatus((preMenuStatus)=>value === undefined ? !preMenuStatus : typeof value === \"boolean\" ? value : !!value);\n    };\n    const toggleSearch = ()=>{\n        setOpenSearch((preSearch)=>!preSearch);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        toggleMenu(false);\n    }, [\n        pathname\n    ]);\n    const value = {\n        menuStatus,\n        openSearch,\n        toggleMenu,\n        toggleSearch\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\next-svmm\\\\src\\\\context\\\\ContextProvider.js\",\n        lineNumber: 35,\n        columnNumber: 10\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContextProvider);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9Db250ZXh0UHJvdmlkZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ1c7QUFDbkI7QUFFaEMsTUFBTUssa0JBQWtCLENBQUMsRUFBRUMsUUFBUSxFQUFFO0lBQ25DLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNNLFlBQVlDLGNBQWMsR0FBR1AsK0NBQVFBLENBQUM7SUFFN0MsTUFBTSxFQUFFUSxRQUFRLEVBQUUsR0FBR1gsc0RBQVNBO0lBRTlCLE1BQU1ZLGFBQWEsQ0FBQ0M7UUFDbEJMLGNBQWMsQ0FBQ00sZ0JBQ2JELFVBQVVFLFlBQ04sQ0FBQ0QsZ0JBQ0QsT0FBT0QsVUFBVSxZQUNqQkEsUUFDQSxDQUFDLENBQUNBO0lBRVY7SUFFQSxNQUFNRyxlQUFlO1FBQ25CTixjQUFjLENBQUNPLFlBQWMsQ0FBQ0E7SUFDaEM7SUFFQWYsZ0RBQVNBLENBQUM7UUFDUlUsV0FBVztJQUNiLEdBQUc7UUFBQ0Q7S0FBUztJQUViLE1BQU1FLFFBQVE7UUFDWk47UUFDQUU7UUFDQUc7UUFDQUk7SUFDRjtJQUNBLHFCQUFPLDhEQUFDWix5REFBZ0I7UUFBQ1MsT0FBT0E7a0JBQVFQOzs7Ozs7QUFDMUM7QUFFQSxpRUFBZUQsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N2bW0vLi9zcmMvY29udGV4dC9Db250ZXh0UHJvdmlkZXIuanM/MmRiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNvbnRleHQgZnJvbSBcIi4vY29udGV4dFwiO1xyXG5cclxuY29uc3QgQ29udGV4dFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFttZW51U3RhdHVzLCBzZXRNZW51U3RhdHVzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbb3BlblNlYXJjaCwgc2V0T3BlblNlYXJjaF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCB0b2dnbGVNZW51ID0gKHZhbHVlKSA9PiB7XHJcbiAgICBzZXRNZW51U3RhdHVzKChwcmVNZW51U3RhdHVzKSA9PlxyXG4gICAgICB2YWx1ZSA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgPyAhcHJlTWVudVN0YXR1c1xyXG4gICAgICAgIDogdHlwZW9mIHZhbHVlID09PSBcImJvb2xlYW5cIlxyXG4gICAgICAgID8gdmFsdWVcclxuICAgICAgICA6ICEhdmFsdWVcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlU2VhcmNoID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlblNlYXJjaCgocHJlU2VhcmNoKSA9PiAhcHJlU2VhcmNoKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdG9nZ2xlTWVudShmYWxzZSk7XHJcbiAgfSwgW3BhdGhuYW1lXSk7XHJcblxyXG4gIGNvbnN0IHZhbHVlID0ge1xyXG4gICAgbWVudVN0YXR1cyxcclxuICAgIG9wZW5TZWFyY2gsXHJcbiAgICB0b2dnbGVNZW51LFxyXG4gICAgdG9nZ2xlU2VhcmNoLFxyXG4gIH07XHJcbiAgcmV0dXJuIDxjb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+e2NoaWxkcmVufTwvY29udGV4dC5Qcm92aWRlcj47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250ZXh0UHJvdmlkZXI7XHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY29udGV4dCIsIkNvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwibWVudVN0YXR1cyIsInNldE1lbnVTdGF0dXMiLCJvcGVuU2VhcmNoIiwic2V0T3BlblNlYXJjaCIsInBhdGhuYW1lIiwidG9nZ2xlTWVudSIsInZhbHVlIiwicHJlTWVudVN0YXR1cyIsInVuZGVmaW5lZCIsInRvZ2dsZVNlYXJjaCIsInByZVNlYXJjaCIsIlByb3ZpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/ContextProvider.js\n");

/***/ }),

/***/ "./src/context/context.js":
/*!********************************!*\
  !*** ./src/context/context.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   useRootContext: () => (/* binding */ useRootContext)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});\nconst useRootContext = ()=>{\n    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(context);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (context); // context.js\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9jb250ZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBa0Q7QUFFbEQsTUFBTUUsd0JBQVVGLG9EQUFhQSxDQUFDLENBQUM7QUFFeEIsTUFBTUcsaUJBQWlCO0lBQzVCLE9BQU9GLGlEQUFVQSxDQUFDQztBQUNwQixFQUFFO0FBRUYsaUVBQWVBLE9BQU9BLEVBQUMsQ0FFdkIsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL3N2bW0vLi9zcmMvY29udGV4dC9jb250ZXh0LmpzPzQ2YzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgY29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVJvb3RDb250ZXh0ID0gKCkgPT4ge1xyXG4gIHJldHVybiB1c2VDb250ZXh0KGNvbnRleHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29udGV4dDtcclxuXHJcbi8vIGNvbnRleHQuanNcclxuXHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsImNvbnRleHQiLCJ1c2VSb290Q29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context/context.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_ContextProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/ContextProvider */ \"./src/context/ContextProvider.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _vendors_halpes_icons_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/vendors/halpes-icons/style.css */ \"./src/assets/vendors/halpes-icons/style.css\");\n/* harmony import */ var _vendors_halpes_icons_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_vendors_halpes_icons_style_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _vendors_reey_font_stylesheet_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/vendors/reey-font/stylesheet.css */ \"./src/assets/vendors/reey-font/stylesheet.css\");\n/* harmony import */ var _vendors_reey_font_stylesheet_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_vendors_reey_font_stylesheet_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _vendors_fontawesome_css_all_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/vendors/fontawesome/css/all.min.css */ \"./src/assets/vendors/fontawesome/css/all.min.css\");\n/* harmony import */ var _vendors_fontawesome_css_all_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_vendors_fontawesome_css_all_min_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _vendors_animate_animate_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/vendors/animate/animate.min.css */ \"./src/assets/vendors/animate/animate.min.css\");\n/* harmony import */ var _vendors_animate_animate_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_vendors_animate_animate_min_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var node_modules_swiper_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! node_modules/swiper/swiper-bundle.min.css */ \"./node_modules/swiper/swiper-bundle.min.css\");\n/* harmony import */ var node_modules_swiper_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(node_modules_swiper_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var tiny_slider_dist_tiny_slider_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tiny-slider/dist/tiny-slider.css */ \"./node_modules/tiny-slider/dist/tiny-slider.css\");\n/* harmony import */ var tiny_slider_dist_tiny_slider_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(tiny_slider_dist_tiny_slider_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _styles_halpes_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/styles/halpes.css */ \"./src/styles/halpes.css\");\n/* harmony import */ var _styles_halpes_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_halpes_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _styles_halpes_responsive_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/styles/halpes-responsive.css */ \"./src/styles/halpes-responsive.css\");\n/* harmony import */ var _styles_halpes_responsive_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_halpes_responsive_css__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\n\n\n\n\n// extra css\n\n\n\nconst MyApp = ({ Component, pageProps })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_ContextProvider__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"D:\\\\next-svmm\\\\src\\\\pages\\\\_app.js\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\next-svmm\\\\src\\\\pages\\\\_app.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdEO0FBQ1Y7QUFDSjtBQUNFO0FBQ0c7QUFDSjtBQUNRO0FBQ1Q7QUFFMUMsWUFBWTtBQUNrQjtBQUNEO0FBQ1c7QUFNeEMsTUFBTUMsUUFBUSxDQUFDLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ3JDLHFCQUNFLDhEQUFDSCxnRUFBZUE7a0JBQ2QsNEVBQUNFO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHOUI7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N2bW0vLi9zcmMvcGFnZXMvX2FwcC5qcz84ZmRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb250ZXh0UHJvdmlkZXIgZnJvbSBcIkAvY29udGV4dC9Db250ZXh0UHJvdmlkZXJcIjtcclxuaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCI7XHJcbmltcG9ydCBcIkAvdmVuZG9ycy9oYWxwZXMtaWNvbnMvc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBcIkAvdmVuZG9ycy9yZWV5LWZvbnQvc3R5bGVzaGVldC5jc3NcIjtcclxuaW1wb3J0IFwiQC92ZW5kb3JzL2ZvbnRhd2Vzb21lL2Nzcy9hbGwubWluLmNzc1wiO1xyXG5pbXBvcnQgXCJAL3ZlbmRvcnMvYW5pbWF0ZS9hbmltYXRlLm1pbi5jc3NcIjtcclxuaW1wb3J0IFwibm9kZV9tb2R1bGVzL3N3aXBlci9zd2lwZXItYnVuZGxlLm1pbi5jc3NcIjtcclxuaW1wb3J0IFwidGlueS1zbGlkZXIvZGlzdC90aW55LXNsaWRlci5jc3NcIjtcclxuXHJcbi8vIGV4dHJhIGNzc1xyXG5pbXBvcnQgXCJAL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xyXG5pbXBvcnQgXCJAL3N0eWxlcy9oYWxwZXMuY3NzXCI7XHJcbmltcG9ydCBcIkAvc3R5bGVzL2hhbHBlcy1yZXNwb25zaXZlLmNzc1wiO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGV4dFByb3ZpZGVyPlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICA8L0NvbnRleHRQcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiJdLCJuYW1lcyI6WyJDb250ZXh0UHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/assets/vendors/animate/animate.min.css":
/*!****************************************************!*\
  !*** ./src/assets/vendors/animate/animate.min.css ***!
  \****************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/assets/vendors/fontawesome/css/all.min.css":
/*!********************************************************!*\
  !*** ./src/assets/vendors/fontawesome/css/all.min.css ***!
  \********************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/assets/vendors/halpes-icons/style.css":
/*!***************************************************!*\
  !*** ./src/assets/vendors/halpes-icons/style.css ***!
  \***************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/assets/vendors/reey-font/stylesheet.css":
/*!*****************************************************!*\
  !*** ./src/assets/vendors/reey-font/stylesheet.css ***!
  \*****************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/halpes-responsive.css":
/*!******************************************!*\
  !*** ./src/styles/halpes-responsive.css ***!
  \******************************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/halpes.css":
/*!*******************************!*\
  !*** ./src/styles/halpes.css ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/tiny-slider","vendor-chunks/swiper","vendor-chunks/bootstrap"], () => (__webpack_exec__("./src/pages/_app.js")));
module.exports = __webpack_exports__;

})();
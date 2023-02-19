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

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Navbar_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/Navbar.css */ \"./styles/Navbar.css\");\n/* harmony import */ var _styles_Navbar_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Navbar_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_pillbtns_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/pillbtns.css */ \"./styles/pillbtns.css\");\n/* harmony import */ var _styles_pillbtns_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_pillbtns_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_use_cart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-use-cart */ \"react-use-cart\");\n/* harmony import */ var react_use_cart__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_use_cart__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_top_loading_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-top-loading-bar */ \"react-top-loading-bar\");\n/* harmony import */ var react_top_loading_bar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_top_loading_bar__WEBPACK_IMPORTED_MODULE_9__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_5__]);\nreact_toastify__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    const [progress, setProgress] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        router.events.on(\"routeChangeStart\", ()=>{\n            setProgress(77);\n        });\n        router.events.on(\"routeChangeComplete\", ()=>{\n            setProgress(100);\n        });\n    }, [\n        router.events\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_top_loading_bar__WEBPACK_IMPORTED_MODULE_9___default()), {\n                color: \"linear-gradient(90deg, #FAE892 0%, #B3903E 70%)\",\n                height: 4,\n                waitingTime: 400,\n                loaderSpeed: 200,\n                shadow: true,\n                progress: progress,\n                onLoaderFinished: ()=>setProgress(0)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\binar\\\\My Projects\\\\Client Projects\\\\project Urbanfits\\\\Urbanfits\\\\frontend\\\\pages\\\\_app.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_5__.ToastContainer, {\n                className: \"toast\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\binar\\\\My Projects\\\\Client Projects\\\\project Urbanfits\\\\Urbanfits\\\\frontend\\\\pages\\\\_app.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_use_cart__WEBPACK_IMPORTED_MODULE_8__.CartProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\binar\\\\My Projects\\\\Client Projects\\\\project Urbanfits\\\\Urbanfits\\\\frontend\\\\pages\\\\_app.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\binar\\\\My Projects\\\\Client Projects\\\\project Urbanfits\\\\Urbanfits\\\\frontend\\\\pages\\\\_app.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBNkI7QUFDRDtBQUNFO0FBQ29CO0FBQ0g7QUFDQTtBQUNSO0FBQ087QUFDQTtBQUUvQixTQUFTTyxJQUFJLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFFLEVBQUU7SUFDcEQsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU1XLFNBQVNSLHNEQUFTQTtJQUV4QkYsZ0RBQVNBLENBQUMsSUFBTTtRQUNkVSxPQUFPQyxNQUFNLENBQUNDLEVBQUUsQ0FBQyxvQkFBb0IsSUFBTTtZQUN6Q0gsWUFBWTtRQUNkO1FBQ0FDLE9BQU9DLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDLHVCQUF1QixJQUFNO1lBQzVDSCxZQUFZO1FBQ2Q7SUFDRixHQUFHO1FBQUNDLE9BQU9DLE1BQU07S0FBQztJQUNsQixxQkFDRTs7MEJBQ0UsOERBQUNQLDhEQUFVQTtnQkFBQ1MsT0FBTTtnQkFBa0RDLFFBQVE7Z0JBQUdDLGFBQWE7Z0JBQUtDLGFBQWE7Z0JBQUtDLFFBQVEsSUFBSTtnQkFBRVQsVUFBVUE7Z0JBQVVVLGtCQUFrQixJQUFNVCxZQUFZOzs7Ozs7MEJBQ3pMLDhEQUFDUiwwREFBY0E7Z0JBQUNrQixXQUFVOzs7Ozs7MEJBQzFCLDhEQUFDaEIsd0RBQVlBOzBCQUNYLDRFQUFDRztvQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7O0FBSWhDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91cmJhbi1maXRzLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQC9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgJ0Avc3R5bGVzL05hdmJhci5jc3MnXG5pbXBvcnQgJ0Avc3R5bGVzL3BpbGxidG5zLmNzcydcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5J1xuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgQ2FydFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXVzZS1jYXJ0XCI7XG5pbXBvcnQgTG9hZGluZ0JhciBmcm9tICdyZWFjdC10b3AtbG9hZGluZy1iYXInXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3QgW3Byb2dyZXNzLCBzZXRQcm9ncmVzc10gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlU3RhcnRcIiwgKCkgPT4ge1xuICAgICAgc2V0UHJvZ3Jlc3MoNzcpXG4gICAgfSlcbiAgICByb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCAoKSA9PiB7XG4gICAgICBzZXRQcm9ncmVzcygxMDApXG4gICAgfSlcbiAgfSwgW3JvdXRlci5ldmVudHNdKVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TG9hZGluZ0JhciBjb2xvcj0nbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjRkFFODkyIDAlLCAjQjM5MDNFIDcwJSknIGhlaWdodD17NH0gd2FpdGluZ1RpbWU9ezQwMH0gbG9hZGVyU3BlZWQ9ezIwMH0gc2hhZG93PXt0cnVlfSBwcm9ncmVzcz17cHJvZ3Jlc3N9IG9uTG9hZGVyRmluaXNoZWQ9eygpID0+IHNldFByb2dyZXNzKDApfSAvPlxuICAgICAgPFRvYXN0Q29udGFpbmVyIGNsYXNzTmFtZT1cInRvYXN0XCIgLz5cbiAgICAgIDxDYXJ0UHJvdmlkZXI+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvQ2FydFByb3ZpZGVyPlxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlRvYXN0Q29udGFpbmVyIiwidXNlUm91dGVyIiwiQ2FydFByb3ZpZGVyIiwiTG9hZGluZ0JhciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInByb2dyZXNzIiwic2V0UHJvZ3Jlc3MiLCJyb3V0ZXIiLCJldmVudHMiLCJvbiIsImNvbG9yIiwiaGVpZ2h0Iiwid2FpdGluZ1RpbWUiLCJsb2FkZXJTcGVlZCIsInNoYWRvdyIsIm9uTG9hZGVyRmluaXNoZWQiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/Navbar.css":
/*!***************************!*\
  !*** ./styles/Navbar.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/pillbtns.css":
/*!*****************************!*\
  !*** ./styles/pillbtns.css ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-top-loading-bar":
/*!****************************************!*\
  !*** external "react-top-loading-bar" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-top-loading-bar");

/***/ }),

/***/ "react-use-cart":
/*!*********************************!*\
  !*** external "react-use-cart" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-use-cart");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _front_components_SearchEngine_SearchEngine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @front/components/SearchEngine/SearchEngine */ \"./components/SearchEngine/SearchEngine.tsx\");\n/* harmony import */ var _front_layouts_basic_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @front/layouts/basic.layout */ \"./layouts/basic.layout.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ \"../node_modules/reactstrap/dist/reactstrap.modern.js\");\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Index = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''), text = ref[0], setText = ref[1];\n    var handleFind = function(textToFind) {\n        console.log(textToFind);\n        setText(textToFind);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Collapse, {\n            isOpen: !true,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_front_components_SearchEngine_SearchEngine__WEBPACK_IMPORTED_MODULE_1__.SearchEngine, {\n                onFind: handleFind\n            }, void 0, false, {\n                fileName: \"/Users/deybith.simijaca/mine/projects/vertrical/front/pages/index.tsx\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/deybith.simijaca/mine/projects/vertrical/front/pages/index.tsx\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false));\n};\n_s(Index, \"v2x6wirwKCy++9DuW8s383qRkbI=\");\n_c = Index;\nIndex.layout = _front_layouts_basic_layout__WEBPACK_IMPORTED_MODULE_2__.BasicLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTBFO0FBQ2pCO0FBQ3pCO0FBQ0s7OztBQUVyQyxHQUFLLENBQUNJLEtBQUssR0FBRyxRQUNkLEdBRG9CLENBQUM7O0lBQ25CLEdBQUssQ0FBbUJGLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFFLElBQTVCRyxJQUFJLEdBQWFILEdBQVksS0FBdkJJLE9BQU8sR0FBSUosR0FBWTtJQUVwQyxHQUFLLENBQUNLLFVBQVUsR0FBRyxRQUFRLENBQVBDLFVBQVUsRUFBSyxDQUFDO1FBQ2xDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsVUFBVTtRQUN0QkYsT0FBTyxDQUFDRSxVQUFVO0lBQ3BCLENBQUM7SUFFRCxNQUFNOzhGQUVETCxnREFBUTtZQUFDUSxNQUFNLEdBQUcsSUFBSTtrR0FDcEJYLHFGQUFZO2dCQUNYWSxNQUFNLEVBQUVMLFVBQVU7Ozs7Ozs7Ozs7OztBQUk1QixDQUFDO0dBaEJLSCxLQUFLO0tBQUxBLEtBQUs7QUFrQlhBLEtBQUssQ0FBQ1MsTUFBTSxHQUFHWixvRUFBVztBQUUxQiwrREFBZUcsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZWFyY2hFbmdpbmUgfSBmcm9tIFwiQGZyb250L2NvbXBvbmVudHMvU2VhcmNoRW5naW5lL1NlYXJjaEVuZ2luZVwiXG5pbXBvcnQgeyBCYXNpY0xheW91dCB9IGZyb20gXCJAZnJvbnQvbGF5b3V0cy9iYXNpYy5sYXlvdXRcIlxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgQ29sbGFwc2UgfSBmcm9tIFwicmVhY3RzdHJhcFwiXG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZSgnJylcblxuICBjb25zdCBoYW5kbGVGaW5kID0gKHRleHRUb0ZpbmQpID0+IHtcbiAgICBjb25zb2xlLmxvZyh0ZXh0VG9GaW5kKVxuICAgIHNldFRleHQodGV4dFRvRmluZClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxDb2xsYXBzZSBpc09wZW49eyF0cnVlfT5cbiAgICAgICAgPFNlYXJjaEVuZ2luZVxuICAgICAgICAgIG9uRmluZD17aGFuZGxlRmluZH1cbiAgICAgICAgLz48L0NvbGxhcHNlPlxuICAgIDwvPlxuICApXG59XG5cbkluZGV4LmxheW91dCA9IEJhc2ljTGF5b3V0XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4Il0sIm5hbWVzIjpbIlNlYXJjaEVuZ2luZSIsIkJhc2ljTGF5b3V0IiwidXNlU3RhdGUiLCJDb2xsYXBzZSIsIkluZGV4IiwidGV4dCIsInNldFRleHQiLCJoYW5kbGVGaW5kIiwidGV4dFRvRmluZCIsImNvbnNvbGUiLCJsb2ciLCJpc09wZW4iLCJvbkZpbmQiLCJsYXlvdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});
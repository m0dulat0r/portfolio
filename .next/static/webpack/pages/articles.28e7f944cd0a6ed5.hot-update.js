"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/articles",{

/***/ "./components/blogpost.tsx":
/*!*********************************!*\
  !*** ./components/blogpost.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BlogPost; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction BlogPost(param) {\n    var title = param.title, text = param.text, link = param.link, info = param.info;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default().grid),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: link,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"font-bold text-black-700 dark:text-gray-200\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/amanpunia/Code/Web/portfolio/components/blogpost.tsx\",\n                        lineNumber: 9,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-600 dark:text-gray-400 mb-4\",\n                        children: info\n                    }, void 0, false, {\n                        fileName: \"/Users/amanpunia/Code/Web/portfolio/components/blogpost.tsx\",\n                        lineNumber: 10,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/amanpunia/Code/Web/portfolio/components/blogpost.tsx\",\n                        lineNumber: 11,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-600 dark:text-gray-400 mb-4\",\n                        children: text\n                    }, void 0, false, {\n                        fileName: \"/Users/amanpunia/Code/Web/portfolio/components/blogpost.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/amanpunia/Code/Web/portfolio/components/blogpost.tsx\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/amanpunia/Code/Web/portfolio/components/blogpost.tsx\",\n            lineNumber: 7,\n            columnNumber: 1\n        }, this)\n    }, void 0, false);\n}\n_c = BlogPost;\nvar _c;\n$RefreshReg$(_c, \"BlogPost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Jsb2dwb3N0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQTRDO0FBRTdCLFNBQVNDLFFBQVEsQ0FBQyxLQUF5QixFQUFDO1FBQXpCQyxLQUFLLEdBQU4sS0FBeUIsQ0FBeEJBLEtBQUssRUFBRUMsSUFBSSxHQUFaLEtBQXlCLENBQWpCQSxJQUFJLEVBQUVDLElBQUksR0FBbEIsS0FBeUIsQ0FBWEEsSUFBSSxFQUFFQyxJQUFJLEdBQXhCLEtBQXlCLENBQUxBLElBQUk7SUFDckQscUJBQ0o7a0JBRUEsNEVBQUNDLEtBQUc7WUFBQ0MsU0FBUyxFQUFFUCxxRUFBVztzQkFDZiw0RUFBQ1MsR0FBQztnQkFBQ0MsSUFBSSxFQUFHTixJQUFJOztrQ0FDZCw4REFBQ08sSUFBRTt3QkFBQ0osU0FBUyxFQUFDLDZDQUE2QztrQ0FBRUwsS0FBSzs7Ozs7NEJBQU07a0NBQ3hFLDhEQUFDVSxHQUFDO3dCQUFDTCxTQUFTLEVBQUMsdUNBQXVDO2tDQUFFRixJQUFJOzs7Ozs0QkFBSztrQ0FDL0QsOERBQUNRLElBQUU7Ozs7NEJBQU07a0NBRVQsOERBQUNELEdBQUM7d0JBQUNMLFNBQVMsRUFBQyx1Q0FBdUM7a0NBQUVKLElBQUk7Ozs7OzRCQUFLOzs7Ozs7b0JBRTNEOzs7OztnQkFDVjtxQkFDSCxDQUNHO0FBQ04sQ0FBQztBQWhCdUJGLEtBQUFBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ibG9ncG9zdC50c3g/YjQ3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nUG9zdCh7dGl0bGUsIHRleHQsIGxpbmssIGluZm99KXtcbiAgICByZXR1cm4oXG48PiAgXG5cbjxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZH0+XG4gICAgICAgICAgICA8YSBocmVmID17bGlua30+IFxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWJsYWNrLTcwMCBkYXJrOnRleHQtZ3JheS0yMDBcIj57dGl0bGV9PC9oMj4gXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIGRhcms6dGV4dC1ncmF5LTQwMCBtYi00XCI+e2luZm99PC9wPlxuICAgICAgICAgICAgPGJyPjwvYnI+XG5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgZGFyazp0ZXh0LWdyYXktNDAwIG1iLTRcIj57dGV4dH08L3A+XG5cbiAgICAgICAgICAgIDwvYT4gICBcbjwvZGl2PiAgICAgXG48Lz5cbiAgICApO1xufVxuXG4iXSwibmFtZXMiOlsic3R5bGVzIiwiQmxvZ1Bvc3QiLCJ0aXRsZSIsInRleHQiLCJsaW5rIiwiaW5mbyIsImRpdiIsImNsYXNzTmFtZSIsImdyaWQiLCJhIiwiaHJlZiIsImgyIiwicCIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/blogpost.tsx\n"));

/***/ })

});
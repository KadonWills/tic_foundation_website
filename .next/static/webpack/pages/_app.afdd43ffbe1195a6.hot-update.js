"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/scrollToTop.tsx":
/*!************************************!*\
  !*** ./components/scrollToTop.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/cg */ \"./node_modules/.pnpm/react-icons@4.6.0_react@18.2.0/node_modules/react-icons/cg/index.esm.js\");\n/* harmony import */ var _hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks/useScrollPosition */ \"./components/hooks/useScrollPosition.tsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar ScrollToTop = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showOnScroll = ref[0], setShowOnScroll = ref[1];\n    var handleScrollToTop = function() {\n        return window.scrollTo({\n            top: 0,\n            left: 0,\n            behavior: \"smooth\"\n        });\n    };\n    (0,_hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_2__.useScrollPosition)(function(param) {\n        var prevPos = param.prevPos, currPos = param.currPos;\n        var isShow = currPos.y < -300 //prevPos.y\n        ;\n        if (isShow !== showOnScroll) setShowOnScroll(isShow);\n    }, [\n        showOnScroll\n    ]);\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function() {\n        !showOnScroll && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: handleScrollToTop,\n                className: \"fixed cursor-pointer bottom-10 grid place-items-center rounded-br-lg rounded-tl-lg rounded-bl-xl rounded-tr-xl right-5 h-[30px] w-[30px] bg-slate-800 hover:bg-blue-600 text-white hover:scale-125 shadow-xl hover:shadow-blue-800 duration-150 group\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_cg__WEBPACK_IMPORTED_MODULE_3__.CgArrowUp, {\n                    className: \"text-2xl\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\pc7\\\\Documents\\\\DINOVIX ltd\\\\Nos Clients\\\\TiC Foundation\\\\tic_foundation_website\\\\components\\\\scrollToTop.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 25\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\pc7\\\\Documents\\\\DINOVIX ltd\\\\Nos Clients\\\\TiC Foundation\\\\tic_foundation_website\\\\components\\\\scrollToTop.tsx\",\n                lineNumber: 21,\n                columnNumber: 21\n            }, _this)\n        }, \"scrollToTopWidget\", false, {\n            fileName: \"C:\\\\Users\\\\pc7\\\\Documents\\\\DINOVIX ltd\\\\Nos Clients\\\\TiC Foundation\\\\tic_foundation_website\\\\components\\\\scrollToTop.tsx\",\n            lineNumber: 20,\n            columnNumber: 17\n        }, _this);\n    }, [\n        showOnScroll\n    ]);\n};\n_s(ScrollToTop, \"A/KhZVHKlLUBbtOzGzPOkvJy9gA=\", false, function() {\n    return [\n        _hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_2__.useScrollPosition\n    ];\n});\n_c = ScrollToTop;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScrollToTop);\nvar _c;\n$RefreshReg$(_c, \"ScrollToTop\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Njcm9sbFRvVG9wLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7OztBQUFxRTtBQUMzQjtBQUNvQjtBQUU5RCxJQUFNTSxXQUFXLEdBQUcsV0FBTTs7SUFFdEIsSUFBd0NILEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBaERJLFlBQVksR0FBcUJKLEdBQWUsR0FBcEMsRUFBRUssZUFBZSxHQUFJTCxHQUFlLEdBQW5CO0lBRXBDLElBQU1NLGlCQUFpQixHQUFHO2VBQU1DLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDO1lBQUVDLEdBQUcsRUFBRSxDQUFDO1lBQUVDLElBQUksRUFBRSxDQUFDO1lBQUVDLFFBQVEsRUFBRSxRQUFRO1NBQUUsQ0FBQztLQUFBO0lBRXhGVCwyRUFBaUIsQ0FBQyxnQkFBMEI7WUFBdkJVLE9BQU8sU0FBUEEsT0FBTyxFQUFFQyxPQUFPLFNBQVBBLE9BQU87UUFDakMsSUFBTUMsTUFBTSxHQUFJRCxPQUFPLENBQUNFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBRSxXQUFXO1FBQVo7UUFDakMsSUFBSUQsTUFBTSxLQUFLVixZQUFZLEVBQUVDLGVBQWUsQ0FBQ1MsTUFBTSxDQUFDO0lBRXhELENBQUMsRUFBRTtRQUFDVixZQUFZO0tBQUMsQ0FBQztJQUdsQixPQUFPTCw4Q0FBTyxDQUFDLFdBQU07UUFDUixDQUFDSyxZQUFZLGtCQUNkLDhEQUFDTiwyQ0FBUTtzQkFDTCw0RUFBQ2tCLEtBQUc7Z0JBQUVDLE9BQU8sRUFBRVgsaUJBQWlCO2dCQUFFWSxTQUFTLEVBQUMsdVBBQXdQOzBCQUNoUyw0RUFBQ2pCLHFEQUFTO29CQUFDaUIsU0FBUyxFQUFDLFVBQVU7Ozs7O3lCQUFHOzs7OztxQkFDaEM7V0FISyxtQkFBbUI7Ozs7aUJBSXZCO0lBQ2YsQ0FBQyxFQUFFO1FBQUNkLFlBQVk7S0FBQyxDQUNwQjtBQUNULENBQUM7R0F0QktELFdBQVc7O1FBTWJELHVFQUFpQjs7O0FBTmZDLEtBQUFBLFdBQVc7QUF3QmpCLCtEQUFlQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc2Nyb2xsVG9Ub3AudHN4PzM3NmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IENnQXJyb3dVcCB9IGZyb20gJ3JlYWN0LWljb25zL2NnJ1xyXG5pbXBvcnQgeyB1c2VTY3JvbGxQb3NpdGlvbiB9IGZyb20gJy4vaG9va3MvdXNlU2Nyb2xsUG9zaXRpb24nO1xyXG5cclxuY29uc3QgU2Nyb2xsVG9Ub3AgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3Nob3dPblNjcm9sbCwgc2V0U2hvd09uU2Nyb2xsXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbFRvVG9wID0gKCkgPT4gd2luZG93LnNjcm9sbFRvKHsgdG9wOiAwLCBsZWZ0OiAwLCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcblxyXG4gICAgdXNlU2Nyb2xsUG9zaXRpb24oKHsgcHJldlBvcywgY3VyclBvcyB9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaXNTaG93ID0gKGN1cnJQb3MueSA8IC0zMDApIC8vcHJldlBvcy55XHJcbiAgICAgICAgaWYgKGlzU2hvdyAhPT0gc2hvd09uU2Nyb2xsKSBzZXRTaG93T25TY3JvbGwoaXNTaG93KVxyXG4gICAgICAgIFxyXG4gICAgfSwgW3Nob3dPblNjcm9sbF0pXHJcblxyXG5cclxuICAgIHJldHVybiB1c2VNZW1vKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICghc2hvd09uU2Nyb2xsKSAmJlxyXG4gICAgICAgICAgICAgICAgPEZyYWdtZW50IGtleT17XCJzY3JvbGxUb1RvcFdpZGdldFwifT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICBvbkNsaWNrPXtoYW5kbGVTY3JvbGxUb1RvcH0gY2xhc3NOYW1lPSdmaXhlZCBjdXJzb3ItcG9pbnRlciBib3R0b20tMTAgZ3JpZCBwbGFjZS1pdGVtcy1jZW50ZXIgcm91bmRlZC1ici1sZyByb3VuZGVkLXRsLWxnICByb3VuZGVkLWJsLXhsIHJvdW5kZWQtdHIteGwgcmlnaHQtNSBoLVszMHB4XSB3LVszMHB4XSBiZy1zbGF0ZS04MDAgaG92ZXI6YmctYmx1ZS02MDAgdGV4dC13aGl0ZSBob3ZlcjpzY2FsZS0xMjUgc2hhZG93LXhsIGhvdmVyOnNoYWRvdy1ibHVlLTgwMCBkdXJhdGlvbi0xNTAgZ3JvdXAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2dBcnJvd1VwIGNsYXNzTmFtZT0ndGV4dC0yeGwnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgICAgICB9LCBbc2hvd09uU2Nyb2xsXVxyXG4gICAgICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsVG9Ub3AiXSwibmFtZXMiOlsiUmVhY3QiLCJGcmFnbWVudCIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsIkNnQXJyb3dVcCIsInVzZVNjcm9sbFBvc2l0aW9uIiwiU2Nyb2xsVG9Ub3AiLCJzaG93T25TY3JvbGwiLCJzZXRTaG93T25TY3JvbGwiLCJoYW5kbGVTY3JvbGxUb1RvcCIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwibGVmdCIsImJlaGF2aW9yIiwicHJldlBvcyIsImN1cnJQb3MiLCJpc1Nob3ciLCJ5IiwiZGl2Iiwib25DbGljayIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/scrollToTop.tsx\n"));

/***/ })

});
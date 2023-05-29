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

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.scss */ \"./styles/Home.module.scss\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_Start_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Start.jsx */ \"./components/Start.jsx\");\n/* harmony import */ var _components_Product_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Product.jsx */ \"./components/Product.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n// components\n\n\n\nconst logout = async ()=>{\n    try {\n        await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"http://localhost:8000/api/user/logout\", {\n            withCredentials: true\n        });\n        // Once the user has logged out, redirect them to the login page\n        window.location.href = \"/login\";\n    } catch (err) {\n        console.error(err);\n    }\n};\nconst Home = ()=>{\n    _s();\n    const [selectedMenu, setSelectedMenu] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const handleClick = (menu)=>{\n        setSelectedMenu(menu);\n    };\n    let Content;\n    switch(selectedMenu){\n        case \"start\":\n            Content = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Start_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/azizfussek/Desktop/aura_next_davinci/client/pages/index.jsx\",\n                lineNumber: 30,\n                columnNumber: 17\n            }, undefined);\n            break;\n        case \"product\":\n            Content = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Product_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/azizfussek/Desktop/aura_next_davinci/client/pages/index.jsx\",\n                lineNumber: 33,\n                columnNumber: 17\n            }, undefined);\n            break;\n        default:\n            Content = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"W\\xe4hlen Sie ein Men\\xfc auf der linken Seite\"\n            }, void 0, false, {\n                fileName: \"/Users/azizfussek/Desktop/aura_next_davinci/client/pages/index.jsx\",\n                lineNumber: 36,\n                columnNumber: 17\n            }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Ihr eCommerce Shop\"\n                    }, void 0, false, {\n                        fileName: \"/Users/azizfussek/Desktop/aura_next_davinci/client/pages/index.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Willkommen zu unserem eCommerce Shop!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/azizfussek/Desktop/aura_next_davinci/client/pages/index.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/azizfussek/Desktop/aura_next_davinci/client/pages/index.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/azizfussek/Desktop/aura_next_davinci/client/pages/index.jsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().header),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: logout,\n                    children: \"Logout\"\n                }, void 0, false, {\n                    fileName: \"/Users/azizfussek/Desktop/aura_next_davinci/client/pages/index.jsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/azizfussek/Desktop/aura_next_davinci/client/pages/index.jsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().sideNavigation),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleClick(\"start\"),\n                                children: \"Start\"\n                            }, void 0, false, {\n                                fileName: \"/Users/azizfussek/Desktop/aura_next_davinci/client/pages/index.jsx\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleClick(\"product\"),\n                                children: \"Product\"\n                            }, void 0, false, {\n                                fileName: \"/Users/azizfussek/Desktop/aura_next_davinci/client/pages/index.jsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: \"Statistiken\"\n                            }, void 0, false, {\n                                fileName: \"/Users/azizfussek/Desktop/aura_next_davinci/client/pages/index.jsx\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/azizfussek/Desktop/aura_next_davinci/client/pages/index.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().mainContent),\n                        children: Content\n                    }, void 0, false, {\n                        fileName: \"/Users/azizfussek/Desktop/aura_next_davinci/client/pages/index.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/azizfussek/Desktop/aura_next_davinci/client/pages/index.jsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().footer),\n                children: \"\\xa9 2023 Ihr eCommerce Shop\"\n            }, void 0, false, {\n                fileName: \"/Users/azizfussek/Desktop/aura_next_davinci/client/pages/index.jsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/azizfussek/Desktop/aura_next_davinci/client/pages/index.jsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"kqLPbfIcMQ1IDIbDwOyWSCUbFNU=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBNEI7QUFDbUI7QUFDckI7QUFDMUIsYUFBYTtBQUMrQjtBQUNJO0FBQ2Y7QUFFakMsTUFBTU0sU0FBUyxVQUFZO0lBQ3pCLElBQUk7UUFDRixNQUFNSixpREFBUyxDQUFDLHlDQUF5QztZQUFFTSxpQkFBaUIsSUFBSTtRQUFDO1FBQ2pGLGdFQUFnRTtRQUNoRUMsT0FBT0MsUUFBUSxDQUFDQyxJQUFJLEdBQUc7SUFDekIsRUFBRSxPQUFPQyxLQUFLO1FBQ1pDLFFBQVFDLEtBQUssQ0FBQ0Y7SUFDaEI7QUFDRjtBQUVBLE1BQU1HLE9BQU8sSUFBTTs7SUFDakIsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR1osK0NBQVFBLENBQUM7SUFFakQsTUFBTWEsY0FBYyxDQUFDQyxPQUFTO1FBQzVCRixnQkFBZ0JFO0lBQ2xCO0lBRUEsSUFBSUM7SUFFSixPQUFRSjtRQUNOLEtBQUs7WUFDSEksd0JBQVUsOERBQUNqQiw2REFBS0E7Ozs7O1lBQ2hCLEtBQU07UUFDUixLQUFLO1lBQ0hpQix3QkFBVSw4REFBQ2hCLCtEQUFPQTs7Ozs7WUFDbEIsS0FBTTtRQUNSO1lBQ0VnQix3QkFBVSw4REFBQ0M7MEJBQUU7Ozs7OztJQUNqQjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXdEIsMkVBQWdCOzswQkFDOUIsOERBQUNELGtEQUFJQTs7a0NBQ0gsOERBQUN5QjtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9uQixNQUFLOzs7Ozs7Ozs7Ozs7MEJBR3hCLDhEQUFDb0I7Z0JBQU9SLFdBQVd0Qix3RUFBYTswQkFDOUIsNEVBQUMrQjtvQkFBT0MsU0FBUzNCOzhCQUFROzs7Ozs7Ozs7OzswQkFHM0IsOERBQUNnQjtnQkFBSUMsV0FBV3RCLHNFQUFXOztrQ0FDekIsOERBQUNrQzt3QkFBSVosV0FBV3RCLGdGQUFxQjs7MENBQ25DLDhEQUFDK0I7Z0NBQU9DLFNBQVMsSUFBTWYsWUFBWTswQ0FBVTs7Ozs7OzBDQUM3Qyw4REFBQ2M7Z0NBQU9DLFNBQVMsSUFBTWYsWUFBWTswQ0FBWTs7Ozs7OzBDQUMvQyw4REFBQ2M7MENBQU87Ozs7Ozs7Ozs7OztrQ0FHViw4REFBQ0U7d0JBQUtYLFdBQVd0Qiw2RUFBa0I7a0NBQ2hDbUI7Ozs7Ozs7Ozs7OzswQkFJTCw4REFBQ2tCO2dCQUFPZixXQUFXdEIsd0VBQWE7MEJBQUU7Ozs7Ozs7Ozs7OztBQUt4QztHQWpETWM7S0FBQUE7QUFtRE4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzdmZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuc2NzcydcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG4vLyBjb21wb25lbnRzXG5pbXBvcnQgU3RhcnQgZnJvbSAnLi4vY29tcG9uZW50cy9TdGFydC5qc3gnO1xuaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9kdWN0LmpzeCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgbG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS91c2VyL2xvZ291dCcsIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pO1xuICAgIC8vIE9uY2UgdGhlIHVzZXIgaGFzIGxvZ2dlZCBvdXQsIHJlZGlyZWN0IHRoZW0gdG8gdGhlIGxvZ2luIHBhZ2VcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvbG9naW4nO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gIH1cbn1cblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgW3NlbGVjdGVkTWVudSwgc2V0U2VsZWN0ZWRNZW51XSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChtZW51KSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRNZW51KG1lbnUpO1xuICB9O1xuXG4gIGxldCBDb250ZW50O1xuXG4gIHN3aXRjaCAoc2VsZWN0ZWRNZW51KSB7XG4gICAgY2FzZSAnc3RhcnQnOlxuICAgICAgQ29udGVudCA9IDxTdGFydCAvPjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Byb2R1Y3QnOlxuICAgICAgQ29udGVudCA9IDxQcm9kdWN0IC8+O1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIENvbnRlbnQgPSA8cD5Xw6RobGVuIFNpZSBlaW4gTWVuw7wgYXVmIGRlciBsaW5rZW4gU2VpdGU8L3A+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPklociBlQ29tbWVyY2UgU2hvcDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJXaWxsa29tbWVuIHp1IHVuc2VyZW0gZUNvbW1lcmNlIFNob3AhXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17bG9nb3V0fT5Mb2dvdXQ8L2J1dHRvbj5cbiAgICAgIDwvaGVhZGVyPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLnNpZGVOYXZpZ2F0aW9ufT5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKCdzdGFydCcpfT5TdGFydDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soJ3Byb2R1Y3QnKX0+UHJvZHVjdDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24+U3RhdGlzdGlrZW48L2J1dHRvbj5cbiAgICAgICAgPC9uYXY+XG5cbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbkNvbnRlbnR9PlxuICAgICAgICAgIHtDb250ZW50fVxuICAgICAgICA8L21haW4+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICDCqSAyMDIzIElociBlQ29tbWVyY2UgU2hvcFxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiSGVhZCIsInN0eWxlcyIsImF4aW9zIiwiU3RhcnQiLCJQcm9kdWN0IiwidXNlU3RhdGUiLCJsb2dvdXQiLCJnZXQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJIb21lIiwic2VsZWN0ZWRNZW51Iiwic2V0U2VsZWN0ZWRNZW51IiwiaGFuZGxlQ2xpY2siLCJtZW51IiwiQ29udGVudCIsInAiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJoZWFkZXIiLCJidXR0b24iLCJvbkNsaWNrIiwibWFpbiIsIm5hdiIsInNpZGVOYXZpZ2F0aW9uIiwibWFpbkNvbnRlbnQiLCJmb290ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});
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

/***/ "./libs/theme.js":
/*!***********************!*\
  !*** ./libs/theme.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/theme-tools */ \"./node_modules/@chakra-ui/theme-tools/dist/index.mjs\");\n\n\nconst styles = {\n    global: (props)=>({\n            body: {\n                bg: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__.mode)(\"#f0e7db\", \"#202023\")(props)\n            }\n        })\n};\nconst components = {\n    Heading: {\n        variants: {\n            \"section-title\": {\n                fontSize: 20,\n                textDecoration: \"underline\",\n                textDecorationColor: \"#525252\",\n                textUnderlineOffset: 6,\n                textDecorationThickness: 4,\n                marginBottom: 4,\n                marginTop: 3\n            }\n        }\n    },\n    Link: {\n        baseStyle: (props)=>({\n                color: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__.mode)(\"#3d7aed\", \"#ff63c3\")(props),\n                textUnderlineOffset: 3\n            })\n    }\n};\nconst fonts = {\n    heading: \"'M PLUS Rounded 1c'\"\n};\nconst colors = {\n    glassTeal: \"#88ccca\"\n};\nconst config = {\n    initialColorMode: \"dark\",\n    useSystemColorMode: true\n};\nconst theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.extendTheme)({\n    styles,\n    components,\n    fonts,\n    colors,\n    config\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWJzL3RoZW1lLmpzIiwibWFwcGluZ3MiOiI7OztBQUErQztBQUNGO0FBRTdDLE1BQU1FLFNBQVM7SUFDWEMsUUFBUSxDQUFDQyxRQUFXO1lBQ2hCQyxNQUFNO2dCQUNGQyxJQUFJTCw0REFBSUEsQ0FBQyxXQUFXLFdBQVdHO1lBQ25DO1FBQ0o7QUFDSjtBQUVBLE1BQU1HLGFBQWE7SUFDZkMsU0FBUztRQUNMQyxVQUFVO1lBQ04saUJBQWlCO2dCQUNiQyxVQUFVO2dCQUNWQyxnQkFBZ0I7Z0JBQ2hCQyxxQkFBcUI7Z0JBQ3JCQyxxQkFBcUI7Z0JBQ3JCQyx5QkFBeUI7Z0JBQ3pCQyxjQUFjO2dCQUNkQyxXQUFXO1lBQ2Y7UUFDSjtJQUNKO0lBQ0FDLE1BQU07UUFDRkMsV0FBV2QsQ0FBQUEsUUFBVTtnQkFDakJlLE9BQU9sQiw0REFBSUEsQ0FBQyxXQUFXLFdBQVdHO2dCQUNsQ1MscUJBQXFCO1lBQzdCO0lBQ0E7QUFDSjtBQUVBLE1BQU1PLFFBQVE7SUFDVkMsU0FBUztBQUNiO0FBRUEsTUFBTUMsU0FBUztJQUNYQyxXQUFXO0FBQ2Y7QUFFQSxNQUFNQyxTQUFTO0lBQ1hDLGtCQUFrQjtJQUNsQkMsb0JBQW9CO0FBQ3hCO0FBRUEsTUFBTUMsUUFBUTNCLDZEQUFXQSxDQUFDO0lBQ3RCRTtJQUNBSztJQUNBYTtJQUNBRTtJQUNBRTtBQUNKO0FBRUEsK0RBQWVHLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGlicy90aGVtZS5qcz8yMjc2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV4dGVuZFRoZW1lIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHttb2RlIH0gZnJvbSBcIkBjaGFrcmEtdWkvdGhlbWUtdG9vbHNcIjtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIGdsb2JhbDogKHByb3BzKSA9PiAoe1xyXG4gICAgICAgIGJvZHk6IHtcclxuICAgICAgICAgICAgYmc6IG1vZGUoXCIjZjBlN2RiXCIsIFwiIzIwMjAyM1wiKShwcm9wcyksXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3QgY29tcG9uZW50cyA9IHtcclxuICAgIEhlYWRpbmc6IHtcclxuICAgICAgICB2YXJpYW50czoge1xyXG4gICAgICAgICAgICBcInNlY3Rpb24tdGl0bGVcIjoge1xyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246IFwidW5kZXJsaW5lXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbkNvbG9yOiBcIiM1MjUyNTJcIixcclxuICAgICAgICAgICAgICAgIHRleHRVbmRlcmxpbmVPZmZzZXQ6IDYsXHJcbiAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvblRoaWNrbmVzczogNCxcclxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogNCxcclxuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIExpbms6IHtcclxuICAgICAgICBiYXNlU3R5bGU6IHByb3BzID0+ICh7XHJcbiAgICAgICAgICAgIGNvbG9yOiBtb2RlKCcjM2Q3YWVkJywgJyNmZjYzYzMnKShwcm9wcyksXHJcbiAgICAgICAgICAgIHRleHRVbmRlcmxpbmVPZmZzZXQ6IDMsXHJcbiAgICB9KSxcclxuICAgIH0sXHJcbn07XHJcblxyXG5jb25zdCBmb250cyA9IHtcclxuICAgIGhlYWRpbmc6IFwiJ00gUExVUyBSb3VuZGVkIDFjJ1wiLFxyXG59XHJcblxyXG5jb25zdCBjb2xvcnMgPSB7XHJcbiAgICBnbGFzc1RlYWw6ICcjODhjY2NhJ1xyXG59XHJcblxyXG5jb25zdCBjb25maWcgPSB7XHJcbiAgICBpbml0aWFsQ29sb3JNb2RlOiAnZGFyaycsXHJcbiAgICB1c2VTeXN0ZW1Db2xvck1vZGU6IHRydWUsXHJcbn1cclxuXHJcbmNvbnN0IHRoZW1lID0gZXh0ZW5kVGhlbWUoe1xyXG4gICAgc3R5bGVzLFxyXG4gICAgY29tcG9uZW50cyxcclxuICAgIGZvbnRzLFxyXG4gICAgY29sb3JzLFxyXG4gICAgY29uZmlnLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRoZW1lIl0sIm5hbWVzIjpbImV4dGVuZFRoZW1lIiwibW9kZSIsInN0eWxlcyIsImdsb2JhbCIsInByb3BzIiwiYm9keSIsImJnIiwiY29tcG9uZW50cyIsIkhlYWRpbmciLCJ2YXJpYW50cyIsImZvbnRTaXplIiwidGV4dERlY29yYXRpb24iLCJ0ZXh0RGVjb3JhdGlvbkNvbG9yIiwidGV4dFVuZGVybGluZU9mZnNldCIsInRleHREZWNvcmF0aW9uVGhpY2tuZXNzIiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIiwiTGluayIsImJhc2VTdHlsZSIsImNvbG9yIiwiZm9udHMiLCJoZWFkaW5nIiwiY29sb3JzIiwiZ2xhc3NUZWFsIiwiY29uZmlnIiwiaW5pdGlhbENvbG9yTW9kZSIsInVzZVN5c3RlbUNvbG9yTW9kZSIsInRoZW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./libs/theme.js\n"));

/***/ })

});
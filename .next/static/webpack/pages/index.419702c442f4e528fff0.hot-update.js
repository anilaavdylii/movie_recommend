self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/hooks/useTheme.js":
/*!*******************************!*\
  !*** ./src/hooks/useTheme.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _s = $RefreshSig$();



function useTheme() {
  _s();

  var startingTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "light";

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(startingTheme),
      theme = _useState[0],
      setTheme = _useState[1];

  function validateTheme(themeValue) {
    if (themeValue === "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return {
    theme: theme,
    se: se
  };
}

_s(useTheme, "7D3nJYxe783JeXHORkFR9pg9dCU=");

/* harmony default export */ __webpack_exports__["default"] = (useThem);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZVRoZW1lLmpzIl0sIm5hbWVzIjpbInVzZVRoZW1lIiwic3RhcnRpbmdUaGVtZSIsInVzZVN0YXRlIiwidGhlbWUiLCJzZXRUaGVtZSIsInZhbGlkYXRlVGhlbWUiLCJ0aGVtZVZhbHVlIiwic2UiLCJ1c2VUaGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxRQUFULEdBQXdDO0FBQUE7O0FBQUEsTUFBdEJDLGFBQXNCLHVFQUFSLE9BQVE7O0FBQUEsa0JBRVhDLCtDQUFRLENBQUNELGFBQUQsQ0FGRztBQUFBLE1BRTdCRSxLQUY2QjtBQUFBLE1BRXRCQyxRQUZzQjs7QUFJcEMsV0FBU0MsYUFBVCxDQUF1QkMsVUFBdkIsRUFBa0M7QUFDOUIsUUFBR0EsVUFBVSxLQUFLLE1BQWxCLEVBQXlCO0FBQ3JCRixjQUFRLENBQUMsTUFBRCxDQUFSO0FBQ0gsS0FGRCxNQUdJO0FBQ0FBLGNBQVEsQ0FBQyxPQUFELENBQVI7QUFDSDtBQUNKOztBQUVELFNBQU07QUFDRkQsU0FBSyxFQUFMQSxLQURFO0FBRUZJLE1BQUUsRUFBRkE7QUFGRSxHQUFOO0FBSUg7O0dBakJRUCxROztBQWtCVCwrREFBZVEsT0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40MTk3MDJjNDQyZjRlNTI4ZmZmMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiB1c2VUaGVtZShzdGFydGluZ1RoZW1lPVwibGlnaHRcIil7XHJcblxyXG4gICAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPXVzZVN0YXRlKHN0YXJ0aW5nVGhlbWUpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlVGhlbWUodGhlbWVWYWx1ZSl7XHJcbiAgICAgICAgaWYodGhlbWVWYWx1ZSA9PT0gXCJkYXJrXCIpe1xyXG4gICAgICAgICAgICBzZXRUaGVtZShcImRhcmtcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHNldFRoZW1lKFwibGlnaHRcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHRoZW1lLFxyXG4gICAgICAgIHNlXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgdXNlVGhlbSJdLCJzb3VyY2VSb290IjoiIn0=
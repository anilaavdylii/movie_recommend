self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/hooks/useMovieFilter.js":
/*!*************************************!*\
  !*** ./src/hooks/useMovieFilter.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _s = $RefreshSig$();



function useMovieFilter(startingShowRatings, st) {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(startingShowRatings),
      showRatings = _useState[0],
      setShowRatings = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
      ratingValue = _useState2[0],
      setRatingValue = _useState2[1];

  return {
    showRatings: showRatings,
    setShowRatings: setShowRatings
  };
}

_s(useMovieFilter, "/4CEef5bCn4L0fwTK3RpevbzUd8=");

/* harmony default export */ __webpack_exports__["default"] = (useMovieFilter);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZU1vdmllRmlsdGVyLmpzIl0sIm5hbWVzIjpbInVzZU1vdmllRmlsdGVyIiwic3RhcnRpbmdTaG93UmF0aW5ncyIsInN0IiwidXNlU3RhdGUiLCJzaG93UmF0aW5ncyIsInNldFNob3dSYXRpbmdzIiwicmF0aW5nVmFsdWUiLCJzZXRSYXRpbmdWYWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsY0FBVCxDQUF3QkMsbUJBQXhCLEVBQTZDQyxFQUE3QyxFQUFnRDtBQUFBOztBQUFBLGtCQUNOQywrQ0FBUSxDQUFDRixtQkFBRCxDQURGO0FBQUEsTUFDckNHLFdBRHFDO0FBQUEsTUFDeEJDLGNBRHdCOztBQUFBLG1CQUVORiwrQ0FBUSxFQUZGO0FBQUEsTUFFckNHLFdBRnFDO0FBQUEsTUFFeEJDLGNBRndCOztBQUk1QyxTQUFNO0FBQ0ZILGVBQVcsRUFBWEEsV0FERTtBQUVGQyxrQkFBYyxFQUFkQTtBQUZFLEdBQU47QUFJSDs7R0FSUUwsYzs7QUFTVCwrREFBZUEsY0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43ZTc2NDIxODk1ZWI5ODViY2EwMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiB1c2VNb3ZpZUZpbHRlcihzdGFydGluZ1Nob3dSYXRpbmdzLCBzdCl7XHJcbiAgICBjb25zdCBbc2hvd1JhdGluZ3MsIHNldFNob3dSYXRpbmdzXSA9IHVzZVN0YXRlKHN0YXJ0aW5nU2hvd1JhdGluZ3MpO1xyXG4gICAgY29uc3QgW3JhdGluZ1ZhbHVlLCBzZXRSYXRpbmdWYWx1ZV0gPSB1c2VTdGF0ZSgpXHJcblxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHNob3dSYXRpbmdzLFxyXG4gICAgICAgIHNldFNob3dSYXRpbmdzLFxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHVzZU1vdmllRmlsdGVyOyJdLCJzb3VyY2VSb290IjoiIn0=
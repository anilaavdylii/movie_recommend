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



function useMovieFilter(startingShowRatings, startingRatingValue) {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(startingShowRatings),
      showRatings = _useState[0],
      setShowRatings = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(startingRatingValue),
      ratingValue = _useState2[0],
      setRatingValue = _useState2[1];

  return {
    showRatings: showRatings,
    setShowRatings: setShowRatings
  };
}

_s(useMovieFilter, "QcSUhYWwvNjasDxs72ELYOsq8lo=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZU1vdmllRmlsdGVyLmpzIl0sIm5hbWVzIjpbInVzZU1vdmllRmlsdGVyIiwic3RhcnRpbmdTaG93UmF0aW5ncyIsInN0YXJ0aW5nUmF0aW5nVmFsdWUiLCJ1c2VTdGF0ZSIsInNob3dSYXRpbmdzIiwic2V0U2hvd1JhdGluZ3MiLCJyYXRpbmdWYWx1ZSIsInNldFJhdGluZ1ZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxjQUFULENBQXdCQyxtQkFBeEIsRUFBNkNDLG1CQUE3QyxFQUFpRTtBQUFBOztBQUFBLGtCQUN2QkMsK0NBQVEsQ0FBQ0YsbUJBQUQsQ0FEZTtBQUFBLE1BQ3RERyxXQURzRDtBQUFBLE1BQ3pDQyxjQUR5Qzs7QUFBQSxtQkFFdkJGLCtDQUFRLENBQUNELG1CQUFELENBRmU7QUFBQSxNQUV0REksV0FGc0Q7QUFBQSxNQUV6Q0MsY0FGeUM7O0FBSTdELFNBQU07QUFDRkgsZUFBVyxFQUFYQSxXQURFO0FBRUZDLGtCQUFjLEVBQWRBO0FBRkUsR0FBTjtBQUlIOztHQVJRTCxjOztBQVNULCtEQUFlQSxjQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjY5YzA0MzAwMWJmNzg1YWFlODgyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIHVzZU1vdmllRmlsdGVyKHN0YXJ0aW5nU2hvd1JhdGluZ3MsIHN0YXJ0aW5nUmF0aW5nVmFsdWUpe1xyXG4gICAgY29uc3QgW3Nob3dSYXRpbmdzLCBzZXRTaG93UmF0aW5nc10gPSB1c2VTdGF0ZShzdGFydGluZ1Nob3dSYXRpbmdzKTtcclxuICAgIGNvbnN0IFtyYXRpbmdWYWx1ZSwgc2V0UmF0aW5nVmFsdWVdID0gdXNlU3RhdGUoc3RhcnRpbmdSYXRpbmdWYWx1ZSlcclxuXHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgc2hvd1JhdGluZ3MsXHJcbiAgICAgICAgc2V0U2hvd1JhdGluZ3MsXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgdXNlTW92aWVGaWx0ZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==
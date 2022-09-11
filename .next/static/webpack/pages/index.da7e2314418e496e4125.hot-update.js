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

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      searchQuery = _useState3[0],
      setSearchQuery = _useState3[1];

  var RATING_VALUES = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  return {
    showRatings: showRatings,
    setShowRatings: setShowRatings,
    ratingValue: ratingValue,
    setRatingValue: setRatingValue
  };
}

_s(useMovieFilter, "H4YX1yYGFBFQpzI2k9+siw0LPvs=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZU1vdmllRmlsdGVyLmpzIl0sIm5hbWVzIjpbInVzZU1vdmllRmlsdGVyIiwic3RhcnRpbmdTaG93UmF0aW5ncyIsInN0YXJ0aW5nUmF0aW5nVmFsdWUiLCJ1c2VTdGF0ZSIsInNob3dSYXRpbmdzIiwic2V0U2hvd1JhdGluZ3MiLCJyYXRpbmdWYWx1ZSIsInNldFJhdGluZ1ZhbHVlIiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsIlJBVElOR19WQUxVRVMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLGNBQVQsQ0FBd0JDLG1CQUF4QixFQUE2Q0MsbUJBQTdDLEVBQWlFO0FBQUE7O0FBQUEsa0JBQ3ZCQywrQ0FBUSxDQUFDRixtQkFBRCxDQURlO0FBQUEsTUFDdERHLFdBRHNEO0FBQUEsTUFDekNDLGNBRHlDOztBQUFBLG1CQUV2QkYsK0NBQVEsQ0FBQ0QsbUJBQUQsQ0FGZTtBQUFBLE1BRXRESSxXQUZzRDtBQUFBLE1BRXpDQyxjQUZ5Qzs7QUFBQSxtQkFHdEJKLCtDQUFRLENBQUMsRUFBRCxDQUhjO0FBQUEsTUFHckRLLFdBSHFEO0FBQUEsTUFHeENDLGNBSHdDOztBQUs3RCxNQUFNQyxhQUFhLEdBQUMsQ0FDaEIsR0FEZ0IsRUFDWixHQURZLEVBQ1IsR0FEUSxFQUNKLEdBREksRUFDQSxHQURBLEVBQ0ksR0FESixFQUNRLEdBRFIsRUFDWSxHQURaLEVBQ2dCLEdBRGhCLENBQXBCO0FBS0EsU0FBTTtBQUNGTixlQUFXLEVBQVhBLFdBREU7QUFFRkMsa0JBQWMsRUFBZEEsY0FGRTtBQUdGQyxlQUFXLEVBQVhBLFdBSEU7QUFJRkMsa0JBQWMsRUFBZEE7QUFKRSxHQUFOO0FBTUg7O0dBaEJRUCxjOztBQWlCVCwrREFBZUEsY0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kYTdlMjMxNDQxOGU0OTZlNDEyNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiB1c2VNb3ZpZUZpbHRlcihzdGFydGluZ1Nob3dSYXRpbmdzLCBzdGFydGluZ1JhdGluZ1ZhbHVlKXtcclxuICAgIGNvbnN0IFtzaG93UmF0aW5ncywgc2V0U2hvd1JhdGluZ3NdID0gdXNlU3RhdGUoc3RhcnRpbmdTaG93UmF0aW5ncyk7XHJcbiAgICBjb25zdCBbcmF0aW5nVmFsdWUsIHNldFJhdGluZ1ZhbHVlXSA9IHVzZVN0YXRlKHN0YXJ0aW5nUmF0aW5nVmFsdWUpO1xyXG4gICAgY29uc3QgWyBzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgY29uc3QgUkFUSU5HX1ZBTFVFUz1bXHJcbiAgICAgICAgXCIxXCIsXCIyXCIsXCIzXCIsXCI0XCIsXCI1XCIsXCI2XCIsXCI3XCIsXCI4XCIsXCI5XCJcclxuICAgIF07XHJcblxyXG5cclxuICAgIHJldHVybntcclxuICAgICAgICBzaG93UmF0aW5ncyxcclxuICAgICAgICBzZXRTaG93UmF0aW5ncyxcclxuICAgICAgICByYXRpbmdWYWx1ZSxcclxuICAgICAgICBzZXRSYXRpbmdWYWx1ZVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHVzZU1vdmllRmlsdGVyOyJdLCJzb3VyY2VSb290IjoiIn0=
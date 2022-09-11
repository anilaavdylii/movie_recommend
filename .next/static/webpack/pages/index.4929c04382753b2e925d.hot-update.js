self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/contexts/MovieFilterContext.js":
/*!********************************************!*\
  !*** ./src/contexts/MovieFilterContext.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MovieFilterContext": function() { return /* binding */ MovieFilterContext; },
/* harmony export */   "MovieFilterProvider": function() { return /* binding */ MovieFilterProvider; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useMovieFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useMovieFilter */ "./src/hooks/useMovieFilter.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\hp\\Desktop\\react\\movie_recommend\\src\\contexts\\MovieFilterContext.js",
    _s = $RefreshSig$();



var MovieFilterContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();

function MovieFilterProvider(_ref) {
  _s();

  var children = _ref.children,
      _ref$startingShowRati = _ref.startingShowRatings,
      startingShowRatings = _ref$startingShowRati === void 0 ? false : _ref$startingShowRati,
      _ref$startingRatingVa = _ref.startingRatingValue,
      startingRatingValue = _ref$startingRatingVa === void 0 ? "10" : _ref$startingRatingVa;

  var _useMovieFilter = (0,_hooks_useMovieFilter__WEBPACK_IMPORTED_MODULE_2__.default)(startingShowRatings, startingRatingValue),
      showRatings = _useMovieFilter.showRatings,
      setShowRatings = _useMovieFilter.setShowRatings,
      ratingValue = _useMovieFilter.ratingValue,
      setRatingValue = _useMovieFilter.setRatingValue,
      searchQuery = _useMovieFilter.searchQuery,
      setSearchQuery = _useMovieFilter.setSearchQuery,
      RATING_VALUES = _useMovieFilter.RATING_VALUES;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MovieFilterContext.Provider, {
    value: {
      showRatings: showRatings,
      setShowRatings: setShowRatings,
      ratingValue: ratingValue,
      setRatingValue: setRatingValue,
      searchQuery: searchQuery,
      setSearchQuery: setSearchQuery,
      RATING_VALUES: RATING_VALUES
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, this);
}

_s(MovieFilterProvider, "ks1GG8uj9/Rbo4ZQrcpyjbWhUGk=", false, function () {
  return [_hooks_useMovieFilter__WEBPACK_IMPORTED_MODULE_2__.default];
});

_c = MovieFilterProvider;


var _c;

$RefreshReg$(_c, "MovieFilterProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL01vdmllRmlsdGVyQ29udGV4dC5qcyJdLCJuYW1lcyI6WyJNb3ZpZUZpbHRlckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiTW92aWVGaWx0ZXJQcm92aWRlciIsImNoaWxkcmVuIiwic3RhcnRpbmdTaG93UmF0aW5ncyIsInN0YXJ0aW5nUmF0aW5nVmFsdWUiLCJ1c2VNb3ZpZUZpbHRlciIsInNob3dSYXRpbmdzIiwic2V0U2hvd1JhdGluZ3MiLCJyYXRpbmdWYWx1ZSIsInNldFJhdGluZ1ZhbHVlIiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsIlJBVElOR19WQUxVRVMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsa0JBQWtCLGdCQUFFQyxvREFBYSxFQUF2Qzs7QUFFQSxTQUFTQyxtQkFBVCxPQUFnRztBQUFBOztBQUFBLE1BQWpFQyxRQUFpRSxRQUFqRUEsUUFBaUU7QUFBQSxtQ0FBdkRDLG1CQUF1RDtBQUFBLE1BQXZEQSxtQkFBdUQsc0NBQWpDLEtBQWlDO0FBQUEsbUNBQTFCQyxtQkFBMEI7QUFBQSxNQUExQkEsbUJBQTBCLHNDQUFOLElBQU07O0FBQUEsd0JBSXZFQyw4REFBYyxDQUFDRixtQkFBRCxFQUFzQkMsbUJBQXRCLENBSnlEO0FBQUEsTUFDckZFLFdBRHFGLG1CQUNyRkEsV0FEcUY7QUFBQSxNQUN4RUMsY0FEd0UsbUJBQ3hFQSxjQUR3RTtBQUFBLE1BRXhGQyxXQUZ3RixtQkFFeEZBLFdBRndGO0FBQUEsTUFFM0VDLGNBRjJFLG1CQUUzRUEsY0FGMkU7QUFBQSxNQUd4RkMsV0FId0YsbUJBR3hGQSxXQUh3RjtBQUFBLE1BRzNFQyxjQUgyRSxtQkFHM0VBLGNBSDJFO0FBQUEsTUFJeEZDLGFBSndGLG1CQUl4RkEsYUFKd0Y7O0FBTTVGLHNCQUNJLDhEQUFDLGtCQUFELENBQW9CLFFBQXBCO0FBQTZCLFNBQUssRUFBRTtBQUFDTixpQkFBVyxFQUFYQSxXQUFEO0FBQWNDLG9CQUFjLEVBQWRBLGNBQWQ7QUFDcENDLGlCQUFXLEVBQVhBLFdBRG9DO0FBQ3ZCQyxvQkFBYyxFQUFkQSxjQUR1QjtBQUNQQyxpQkFBVyxFQUFYQSxXQURPO0FBQ01DLG9CQUFjLEVBQWRBLGNBRE47QUFDc0JDLG1CQUFhLEVBQWJBO0FBRHRCLEtBQXBDO0FBQUEsY0FFS1Y7QUFGTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFNSDs7R0FaUUQsbUI7VUFJZ0JJLDBEOzs7S0FKaEJKLG1CO0FBYVQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDkyOWMwNDM4Mjc1M2IyZTkyNWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7Y3JlYXRlQ29udGV4dH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB1c2VNb3ZpZUZpbHRlciBmcm9tIFwiLi4vaG9va3MvdXNlTW92aWVGaWx0ZXJcIjtcclxuXHJcbmNvbnN0IE1vdmllRmlsdGVyQ29udGV4dD0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZnVuY3Rpb24gTW92aWVGaWx0ZXJQcm92aWRlciAoe2NoaWxkcmVuLCBzdGFydGluZ1Nob3dSYXRpbmdzID0gZmFsc2UsIHN0YXJ0aW5nUmF0aW5nVmFsdWU9XCIxMFwifSl7XHJcbiAgICBjb25zdCB7c2hvd1JhdGluZ3MsIHNldFNob3dSYXRpbmdzLCBcclxuICAgICAgICByYXRpbmdWYWx1ZSwgc2V0UmF0aW5nVmFsdWUsIFxyXG4gICAgICAgIHNlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeSwgXHJcbiAgICAgICAgUkFUSU5HX1ZBTFVFU30gPSB1c2VNb3ZpZUZpbHRlcihzdGFydGluZ1Nob3dSYXRpbmdzLCBzdGFydGluZ1JhdGluZ1ZhbHVlKTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPE1vdmllRmlsdGVyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e3Nob3dSYXRpbmdzLCBzZXRTaG93UmF0aW5ncywgXHJcbiAgICAgICAgcmF0aW5nVmFsdWUsIHNldFJhdGluZ1ZhbHVlLCBzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnksIFJBVElOR19WQUxVRVN9fT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvTW92aWVGaWx0ZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKTtcclxufVxyXG5leHBvcnQge01vdmllRmlsdGVyQ29udGV4dCwgTW92aWVGaWx0ZXJQcm92aWRlcn0iXSwic291cmNlUm9vdCI6IiJ9
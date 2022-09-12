self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/MoviesList.js":
/*!**************************************!*\
  !*** ./src/components/MoviesList.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Movie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Movie */ "./src/components/Movie.js");
/* harmony import */ var react_placeholder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-placeholder */ "./node_modules/react-placeholder/lib/index.js");
/* harmony import */ var _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useRequestDelay */ "./src/hooks/useRequestDelay.js");
/* harmony import */ var _MovieData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../MovieData */ "./MovieData.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _contexts_MovieFilterContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../contexts/MovieFilterContext */ "./src/contexts/MovieFilterContext.js");
/* harmony import */ var _MovieAdd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MovieAdd */ "./src/components/MovieAdd.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\hp\\Desktop\\react\\movie_recommend\\src\\components\\MoviesList.js",
    _s = $RefreshSig$();









function MoviesList() {
  _s();

  var _useRequestDelay = (0,_hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__.default)(2000, _MovieData__WEBPACK_IMPORTED_MODULE_4__.data),
      moviesData = _useRequestDelay.data,
      requestStatus = _useRequestDelay.requestStatus,
      error = _useRequestDelay.error,
      updateRecord = _useRequestDelay.updateRecord,
      insertRecord = _useRequestDelay.insertRecord,
      deleteRecord = _useRequestDelay.deleteRecord;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_contexts_MovieFilterContext__WEBPACK_IMPORTED_MODULE_6__.MovieFilterContext),
      searchQuery = _useContext.searchQuery,
      ratingValue = _useContext.ratingValue;

  if (requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__.REQUEST_STATUS.FAILURE) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "text-danger",
      children: ["ERROR: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
        children: ["loading Movie Data Failed ", error]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 16
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container movies-list",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_placeholder__WEBPACK_IMPORTED_MODULE_2__.default, {
      type: "media",
      rows: 20,
      className: "movieslist-placeholder",
      ready: requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__.REQUEST_STATUS.SUCCESS,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MovieAdd__WEBPACK_IMPORTED_MODULE_7__.default, {
        ratingValue: ratingValue,
        insertRecord: insertRecord
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: moviesData.filter(function (movie) {
          return speaker.first.toLowerCase().includes(searchQuery);
        }).filter(function (movie) {
          return movie.ratings.find(function (rating) {
            return rating.Value === ratingValue;
          });
        }).map(function (movie) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Movie__WEBPACK_IMPORTED_MODULE_1__.default, {
            movie: movie,
            updateRecord: updateRecord,
            insertRecord: insertRecord,
            deleteRecord: deleteRecord
          }, movie.id, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 15
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

_s(MoviesList, "7JILZZbJv4X9k7rA6W9ucrG97g8=", false, function () {
  return [_hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__.default];
});

_c = MoviesList;
/* harmony default export */ __webpack_exports__["default"] = (MoviesList);

var _c;

$RefreshReg$(_c, "MoviesList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW92aWVzTGlzdC5qcyJdLCJuYW1lcyI6WyJNb3ZpZXNMaXN0IiwidXNlUmVxdWVzdERlbGF5IiwiZGF0YSIsIm1vdmllc0RhdGEiLCJyZXF1ZXN0U3RhdHVzIiwiZXJyb3IiLCJ1cGRhdGVSZWNvcmQiLCJpbnNlcnRSZWNvcmQiLCJkZWxldGVSZWNvcmQiLCJ1c2VDb250ZXh0IiwiTW92aWVGaWx0ZXJDb250ZXh0Iiwic2VhcmNoUXVlcnkiLCJyYXRpbmdWYWx1ZSIsIlJFUVVFU1RfU1RBVFVTIiwiZmlsdGVyIiwibW92aWUiLCJzcGVha2VyIiwiZmlyc3QiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwicmF0aW5ncyIsImZpbmQiLCJyYXRpbmciLCJWYWx1ZSIsIm1hcCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFVBQVQsR0FBc0I7QUFBQTs7QUFBQSx5QkFRaEJDLCtEQUFlLENBQUMsSUFBRCxFQUFPQyw0Q0FBUCxDQVJDO0FBQUEsTUFFWkMsVUFGWSxvQkFFbEJELElBRmtCO0FBQUEsTUFHbEJFLGFBSGtCLG9CQUdsQkEsYUFIa0I7QUFBQSxNQUlsQkMsS0FKa0Isb0JBSWxCQSxLQUprQjtBQUFBLE1BS2xCQyxZQUxrQixvQkFLbEJBLFlBTGtCO0FBQUEsTUFNbEJDLFlBTmtCLG9CQU1sQkEsWUFOa0I7QUFBQSxNQU9sQkMsWUFQa0Isb0JBT2xCQSxZQVBrQjs7QUFBQSxvQkFVaUJDLGlEQUFVLENBQUNDLDRFQUFELENBVjNCO0FBQUEsTUFVWkMsV0FWWSxlQVVaQSxXQVZZO0FBQUEsTUFVQ0MsV0FWRCxlQVVDQSxXQVZEOztBQVlwQixNQUFJUixhQUFhLEtBQUtTLDBFQUF0QixFQUE4QztBQUM1Qyx3QkFDRTtBQUFLLGVBQVMsRUFBQyxhQUFmO0FBQUEseUNBQ1M7QUFBQSxpREFBOEJSLEtBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBS0Q7O0FBR0Qsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsdUJBQWY7QUFBQSwyQkFDRSw4REFBQyxzREFBRDtBQUNFLFVBQUksRUFBQyxPQURQO0FBRUUsVUFBSSxFQUFFLEVBRlI7QUFHRSxlQUFTLEVBQUMsd0JBSFo7QUFJRSxXQUFLLEVBQUVELGFBQWEsS0FBS1MsMEVBSjNCO0FBQUEsOEJBTUUsOERBQUMsOENBQUQ7QUFBVSxtQkFBVyxFQUFFRCxXQUF2QjtBQUFvQyxvQkFBWSxFQUFFTDtBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkYsZUFPRTtBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBLGtCQUNHSixVQUFVLENBQ1ZXLE1BREEsQ0FDTyxVQUFTQyxLQUFULEVBQWU7QUFDckIsaUJBQ0VDLE9BQU8sQ0FBQ0MsS0FBUixDQUFjQyxXQUFkLEdBQTRCQyxRQUE1QixDQUFxQ1IsV0FBckMsQ0FERjtBQUdELFNBTEEsRUFNQUcsTUFOQSxDQU1PLFVBQVNDLEtBQVQsRUFBZTtBQUNyQixpQkFBT0EsS0FBSyxDQUFDSyxPQUFOLENBQWNDLElBQWQsQ0FBbUIsVUFBQ0MsTUFBRCxFQUFVO0FBQ2xDLG1CQUFPQSxNQUFNLENBQUNDLEtBQVAsS0FBaUJYLFdBQXhCO0FBQ0QsV0FGTSxDQUFQO0FBR0QsU0FWQSxFQVlBWSxHQVpBLENBWUksVUFBVVQsS0FBVixFQUFpQjtBQUNwQiw4QkFDRSw4REFBQywyQ0FBRDtBQUVFLGlCQUFLLEVBQUVBLEtBRlQ7QUFHRSx3QkFBWSxFQUFFVCxZQUhoQjtBQUlFLHdCQUFZLEVBQUVDLFlBSmhCO0FBS0Usd0JBQVksRUFBRUM7QUFMaEIsYUFDT08sS0FBSyxDQUFDVSxFQURiO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREY7QUFTRCxTQXRCQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFxQ0Q7O0dBMURRekIsVTtVQVFIQywyRDs7O0tBUkdELFU7QUE0RFQsK0RBQWVBLFVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTI4YWJjZjcyMDI4Y2QwYmEzNTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb3ZpZSBmcm9tIFwiLi9Nb3ZpZVwiO1xyXG5pbXBvcnQgUmVhY3RQbGFjZUhvbGRlciBmcm9tIFwicmVhY3QtcGxhY2Vob2xkZXJcIjtcclxuaW1wb3J0IHVzZVJlcXVlc3REZWxheSwgeyBSRVFVRVNUX1NUQVRVUyB9IGZyb20gXCIuLi9ob29rcy91c2VSZXF1ZXN0RGVsYXlcIjtcclxuaW1wb3J0IHsgZGF0YSB9IGZyb20gXCIuLi8uLi9Nb3ZpZURhdGFcIjtcclxuaW1wb3J0IHt1c2VDb250ZXh0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtNb3ZpZUZpbHRlckNvbnRleHR9IGZyb20gXCIuLy4uL2NvbnRleHRzL01vdmllRmlsdGVyQ29udGV4dFwiO1xyXG5pbXBvcnQgTW92aWVBZGQgZnJvbSBcIi4vTW92aWVBZGRcIjtcclxuXHJcbmZ1bmN0aW9uIE1vdmllc0xpc3QoKSB7XHJcbiAgY29uc3Qge1xyXG4gICAgZGF0YTogbW92aWVzRGF0YSxcclxuICAgIHJlcXVlc3RTdGF0dXMsXHJcbiAgICBlcnJvcixcclxuICAgIHVwZGF0ZVJlY29yZCxcclxuICAgIGluc2VydFJlY29yZCxcclxuICAgIGRlbGV0ZVJlY29yZFxyXG4gIH0gPSB1c2VSZXF1ZXN0RGVsYXkoMjAwMCwgZGF0YSk7XHJcblxyXG4gIGNvbnN0IHsgc2VhcmNoUXVlcnksIHJhdGluZ1ZhbHVlIH0gPSB1c2VDb250ZXh0KE1vdmllRmlsdGVyQ29udGV4dCk7XHJcblxyXG4gIGlmIChyZXF1ZXN0U3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5GQUlMVVJFKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+XHJcbiAgICAgICAgRVJST1I6IDxiPmxvYWRpbmcgTW92aWUgRGF0YSBGYWlsZWQge2Vycm9yfTwvYj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtb3ZpZXMtbGlzdFwiPlxyXG4gICAgICA8UmVhY3RQbGFjZUhvbGRlclxyXG4gICAgICAgIHR5cGU9XCJtZWRpYVwiXHJcbiAgICAgICAgcm93cz17MjB9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibW92aWVzbGlzdC1wbGFjZWhvbGRlclwiXHJcbiAgICAgICAgcmVhZHk9e3JlcXVlc3RTdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLlNVQ0NFU1N9XHJcbiAgICAgID5cclxuICAgICAgICA8TW92aWVBZGQgcmF0aW5nVmFsdWU9e3JhdGluZ1ZhbHVlfSBpbnNlcnRSZWNvcmQ9e2luc2VydFJlY29yZH0vPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICB7bW92aWVzRGF0YVxyXG4gICAgICAgICAgLmZpbHRlcihmdW5jdGlvbihtb3ZpZSl7XHJcbiAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICBzcGVha2VyLmZpcnN0LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoUXVlcnkpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmZpbHRlcihmdW5jdGlvbihtb3ZpZSl7XHJcbiAgICAgICAgICAgIHJldHVybiBtb3ZpZS5yYXRpbmdzLmZpbmQoKHJhdGluZyk9PntcclxuICAgICAgICAgICAgICByZXR1cm4gcmF0aW5nLlZhbHVlID09PSByYXRpbmdWYWx1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAubWFwKGZ1bmN0aW9uIChtb3ZpZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxNb3ZpZVxyXG4gICAgICAgICAgICAgICAga2V5PXttb3ZpZS5pZH1cclxuICAgICAgICAgICAgICAgIG1vdmllPXttb3ZpZX1cclxuICAgICAgICAgICAgICAgIHVwZGF0ZVJlY29yZD17dXBkYXRlUmVjb3JkfVxyXG4gICAgICAgICAgICAgICAgaW5zZXJ0UmVjb3JkPXtpbnNlcnRSZWNvcmR9XHJcbiAgICAgICAgICAgICAgICBkZWxldGVSZWNvcmQ9e2RlbGV0ZVJlY29yZH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvUmVhY3RQbGFjZUhvbGRlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vdmllc0xpc3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
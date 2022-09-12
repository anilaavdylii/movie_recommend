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
        lineNumber: 23,
        columnNumber: 16
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
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
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MovieAdd, {
        ratingValue: ratingValue,
        insertRecord: inse
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: moviesData.filter(function (movie) {
          return movie.title.toLowerCase().includes(searchQuery);
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
            lineNumber: 53,
            columnNumber: 15
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW92aWVzTGlzdC5qcyJdLCJuYW1lcyI6WyJNb3ZpZXNMaXN0IiwidXNlUmVxdWVzdERlbGF5IiwiZGF0YSIsIm1vdmllc0RhdGEiLCJyZXF1ZXN0U3RhdHVzIiwiZXJyb3IiLCJ1cGRhdGVSZWNvcmQiLCJpbnNlcnRSZWNvcmQiLCJkZWxldGVSZWNvcmQiLCJ1c2VDb250ZXh0IiwiTW92aWVGaWx0ZXJDb250ZXh0Iiwic2VhcmNoUXVlcnkiLCJyYXRpbmdWYWx1ZSIsIlJFUVVFU1RfU1RBVFVTIiwiaW5zZSIsImZpbHRlciIsIm1vdmllIiwidGl0bGUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwicmF0aW5ncyIsImZpbmQiLCJyYXRpbmciLCJWYWx1ZSIsIm1hcCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFVBQVQsR0FBc0I7QUFBQTs7QUFBQSx5QkFRaEJDLCtEQUFlLENBQUMsSUFBRCxFQUFPQyw0Q0FBUCxDQVJDO0FBQUEsTUFFWkMsVUFGWSxvQkFFbEJELElBRmtCO0FBQUEsTUFHbEJFLGFBSGtCLG9CQUdsQkEsYUFIa0I7QUFBQSxNQUlsQkMsS0FKa0Isb0JBSWxCQSxLQUprQjtBQUFBLE1BS2xCQyxZQUxrQixvQkFLbEJBLFlBTGtCO0FBQUEsTUFNbEJDLFlBTmtCLG9CQU1sQkEsWUFOa0I7QUFBQSxNQU9sQkMsWUFQa0Isb0JBT2xCQSxZQVBrQjs7QUFBQSxvQkFVaUJDLGlEQUFVLENBQUNDLDRFQUFELENBVjNCO0FBQUEsTUFVWkMsV0FWWSxlQVVaQSxXQVZZO0FBQUEsTUFVQ0MsV0FWRCxlQVVDQSxXQVZEOztBQVlwQixNQUFJUixhQUFhLEtBQUtTLDBFQUF0QixFQUE4QztBQUM1Qyx3QkFDRTtBQUFLLGVBQVMsRUFBQyxhQUFmO0FBQUEseUNBQ1M7QUFBQSxpREFBOEJSLEtBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBS0Q7O0FBR0Qsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsdUJBQWY7QUFBQSwyQkFDRSw4REFBQyxzREFBRDtBQUNFLFVBQUksRUFBQyxPQURQO0FBRUUsVUFBSSxFQUFFLEVBRlI7QUFHRSxlQUFTLEVBQUMsd0JBSFo7QUFJRSxXQUFLLEVBQUVELGFBQWEsS0FBS1MsMEVBSjNCO0FBQUEsOEJBTUUsOERBQUMsUUFBRDtBQUFVLG1CQUFXLEVBQUVELFdBQXZCO0FBQW9DLG9CQUFZLEVBQUVFO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORixlQU9FO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUEsa0JBQ0dYLFVBQVUsQ0FDVlksTUFEQSxDQUNPLFVBQVNDLEtBQVQsRUFBZTtBQUNyQixpQkFDRUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosR0FBMEJDLFFBQTFCLENBQW1DUixXQUFuQyxDQURGO0FBR0QsU0FMQSxFQU1BSSxNQU5BLENBTU8sVUFBU0MsS0FBVCxFQUFlO0FBQ3JCLGlCQUFPQSxLQUFLLENBQUNJLE9BQU4sQ0FBY0MsSUFBZCxDQUFtQixVQUFDQyxNQUFELEVBQVU7QUFDbEMsbUJBQU9BLE1BQU0sQ0FBQ0MsS0FBUCxLQUFpQlgsV0FBeEI7QUFDRCxXQUZNLENBQVA7QUFHRCxTQVZBLEVBWUFZLEdBWkEsQ0FZSSxVQUFVUixLQUFWLEVBQWlCO0FBQ3BCLDhCQUNFLDhEQUFDLDJDQUFEO0FBRUUsaUJBQUssRUFBRUEsS0FGVDtBQUdFLHdCQUFZLEVBQUVWLFlBSGhCO0FBSUUsd0JBQVksRUFBRUMsWUFKaEI7QUFLRSx3QkFBWSxFQUFFQztBQUxoQixhQUNPUSxLQUFLLENBQUNTLEVBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERjtBQVNELFNBdEJBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXFDRDs7R0ExRFF6QixVO1VBUUhDLDJEOzs7S0FSR0QsVTtBQTREVCwrREFBZUEsVUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lMGI4OGMyYmQzNzA2MjEyOGU3Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vdmllIGZyb20gXCIuL01vdmllXCI7XHJcbmltcG9ydCBSZWFjdFBsYWNlSG9sZGVyIGZyb20gXCJyZWFjdC1wbGFjZWhvbGRlclwiO1xyXG5pbXBvcnQgdXNlUmVxdWVzdERlbGF5LCB7IFJFUVVFU1RfU1RBVFVTIH0gZnJvbSBcIi4uL2hvb2tzL3VzZVJlcXVlc3REZWxheVwiO1xyXG5pbXBvcnQgeyBkYXRhIH0gZnJvbSBcIi4uLy4uL01vdmllRGF0YVwiO1xyXG5pbXBvcnQge3VzZUNvbnRleHR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge01vdmllRmlsdGVyQ29udGV4dH0gZnJvbSBcIi4vLi4vY29udGV4dHMvTW92aWVGaWx0ZXJDb250ZXh0XCI7XHJcblxyXG5mdW5jdGlvbiBNb3ZpZXNMaXN0KCkge1xyXG4gIGNvbnN0IHtcclxuICAgIGRhdGE6IG1vdmllc0RhdGEsXHJcbiAgICByZXF1ZXN0U3RhdHVzLFxyXG4gICAgZXJyb3IsXHJcbiAgICB1cGRhdGVSZWNvcmQsXHJcbiAgICBpbnNlcnRSZWNvcmQsXHJcbiAgICBkZWxldGVSZWNvcmRcclxuICB9ID0gdXNlUmVxdWVzdERlbGF5KDIwMDAsIGRhdGEpO1xyXG5cclxuICBjb25zdCB7IHNlYXJjaFF1ZXJ5LCByYXRpbmdWYWx1ZSB9ID0gdXNlQ29udGV4dChNb3ZpZUZpbHRlckNvbnRleHQpO1xyXG5cclxuICBpZiAocmVxdWVzdFN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuRkFJTFVSRSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPlxyXG4gICAgICAgIEVSUk9SOiA8Yj5sb2FkaW5nIE1vdmllIERhdGEgRmFpbGVkIHtlcnJvcn08L2I+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbW92aWVzLWxpc3RcIj5cclxuICAgICAgPFJlYWN0UGxhY2VIb2xkZXJcclxuICAgICAgICB0eXBlPVwibWVkaWFcIlxyXG4gICAgICAgIHJvd3M9ezIwfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1vdmllc2xpc3QtcGxhY2Vob2xkZXJcIlxyXG4gICAgICAgIHJlYWR5PXtyZXF1ZXN0U3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5TVUNDRVNTfVxyXG4gICAgICA+XHJcbiAgICAgICAgPE1vdmllQWRkIHJhdGluZ1ZhbHVlPXtyYXRpbmdWYWx1ZX0gaW5zZXJ0UmVjb3JkPXtpbnNlfS8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIHttb3ZpZXNEYXRhXHJcbiAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uKG1vdmllKXtcclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgIG1vdmllLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoUXVlcnkpIFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24obW92aWUpe1xyXG4gICAgICAgICAgICByZXR1cm4gbW92aWUucmF0aW5ncy5maW5kKChyYXRpbmcpPT57XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHJhdGluZy5WYWx1ZSA9PT0gcmF0aW5nVmFsdWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLm1hcChmdW5jdGlvbiAobW92aWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8TW92aWVcclxuICAgICAgICAgICAgICAgIGtleT17bW92aWUuaWR9XHJcbiAgICAgICAgICAgICAgICBtb3ZpZT17bW92aWV9XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVSZWNvcmQ9e3VwZGF0ZVJlY29yZH1cclxuICAgICAgICAgICAgICAgIGluc2VydFJlY29yZD17aW5zZXJ0UmVjb3JkfVxyXG4gICAgICAgICAgICAgICAgZGVsZXRlUmVjb3JkPXtkZWxldGVSZWNvcmR9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1JlYWN0UGxhY2VIb2xkZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3ZpZXNMaXN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
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
      de = _useRequestDelay.de;

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
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
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
            updateRecord: updateRecord
          }, movie.id, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 15
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this)
    }, void 0, false, {
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

_s(MoviesList, "nAXHDzTkXr/bdGh+kuD6QOUoOWA=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW92aWVzTGlzdC5qcyJdLCJuYW1lcyI6WyJNb3ZpZXNMaXN0IiwidXNlUmVxdWVzdERlbGF5IiwiZGF0YSIsIm1vdmllc0RhdGEiLCJyZXF1ZXN0U3RhdHVzIiwiZXJyb3IiLCJ1cGRhdGVSZWNvcmQiLCJpbnNlcnRSZWNvcmQiLCJkZSIsInVzZUNvbnRleHQiLCJNb3ZpZUZpbHRlckNvbnRleHQiLCJzZWFyY2hRdWVyeSIsInJhdGluZ1ZhbHVlIiwiUkVRVUVTVF9TVEFUVVMiLCJmaWx0ZXIiLCJtb3ZpZSIsInRpdGxlIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInJhdGluZ3MiLCJmaW5kIiwicmF0aW5nIiwiVmFsdWUiLCJtYXAiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxVQUFULEdBQXNCO0FBQUE7O0FBQUEseUJBUWhCQywrREFBZSxDQUFDLElBQUQsRUFBT0MsNENBQVAsQ0FSQztBQUFBLE1BRVpDLFVBRlksb0JBRWxCRCxJQUZrQjtBQUFBLE1BR2xCRSxhQUhrQixvQkFHbEJBLGFBSGtCO0FBQUEsTUFJbEJDLEtBSmtCLG9CQUlsQkEsS0FKa0I7QUFBQSxNQUtsQkMsWUFMa0Isb0JBS2xCQSxZQUxrQjtBQUFBLE1BTWxCQyxZQU5rQixvQkFNbEJBLFlBTmtCO0FBQUEsTUFPbEJDLEVBUGtCLG9CQU9sQkEsRUFQa0I7O0FBQUEsb0JBVWlCQyxpREFBVSxDQUFDQyw0RUFBRCxDQVYzQjtBQUFBLE1BVVpDLFdBVlksZUFVWkEsV0FWWTtBQUFBLE1BVUNDLFdBVkQsZUFVQ0EsV0FWRDs7QUFZcEIsTUFBSVIsYUFBYSxLQUFLUywwRUFBdEIsRUFBOEM7QUFDNUMsd0JBQ0U7QUFBSyxlQUFTLEVBQUMsYUFBZjtBQUFBLHlDQUNTO0FBQUEsaURBQThCUixLQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQUtEOztBQUdELHNCQUNFO0FBQUssYUFBUyxFQUFDLHVCQUFmO0FBQUEsMkJBQ0UsOERBQUMsc0RBQUQ7QUFDRSxVQUFJLEVBQUMsT0FEUDtBQUVFLFVBQUksRUFBRSxFQUZSO0FBR0UsZUFBUyxFQUFDLHdCQUhaO0FBSUUsV0FBSyxFQUFFRCxhQUFhLEtBQUtTLDBFQUozQjtBQUFBLDZCQU1FO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUEsa0JBQ0dWLFVBQVUsQ0FDVlcsTUFEQSxDQUNPLFVBQVNDLEtBQVQsRUFBZTtBQUNyQixpQkFDRUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosR0FBMEJDLFFBQTFCLENBQW1DUCxXQUFuQyxDQURGO0FBR0QsU0FMQSxFQU1BRyxNQU5BLENBTU8sVUFBU0MsS0FBVCxFQUFlO0FBQ3JCLGlCQUFPQSxLQUFLLENBQUNJLE9BQU4sQ0FBY0MsSUFBZCxDQUFtQixVQUFDQyxNQUFELEVBQVU7QUFDbEMsbUJBQU9BLE1BQU0sQ0FBQ0MsS0FBUCxLQUFpQlYsV0FBeEI7QUFDRCxXQUZNLENBQVA7QUFHRCxTQVZBLEVBWUFXLEdBWkEsQ0FZSSxVQUFVUixLQUFWLEVBQWlCO0FBQ3BCLDhCQUNFLDhEQUFDLDJDQUFEO0FBRUUsaUJBQUssRUFBRUEsS0FGVDtBQUdFLHdCQUFZLEVBQUVUO0FBSGhCLGFBQ09TLEtBQUssQ0FBQ1MsRUFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGO0FBT0QsU0FwQkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWtDRDs7R0F2RFF4QixVO1VBUUhDLDJEOzs7S0FSR0QsVTtBQXlEVCwrREFBZUEsVUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hMGEzMTYxYzJlOThkY2Q3OTNmNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vdmllIGZyb20gXCIuL01vdmllXCI7XHJcbmltcG9ydCBSZWFjdFBsYWNlSG9sZGVyIGZyb20gXCJyZWFjdC1wbGFjZWhvbGRlclwiO1xyXG5pbXBvcnQgdXNlUmVxdWVzdERlbGF5LCB7IFJFUVVFU1RfU1RBVFVTIH0gZnJvbSBcIi4uL2hvb2tzL3VzZVJlcXVlc3REZWxheVwiO1xyXG5pbXBvcnQgeyBkYXRhIH0gZnJvbSBcIi4uLy4uL01vdmllRGF0YVwiO1xyXG5pbXBvcnQge3VzZUNvbnRleHR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge01vdmllRmlsdGVyQ29udGV4dH0gZnJvbSBcIi4vLi4vY29udGV4dHMvTW92aWVGaWx0ZXJDb250ZXh0XCI7XHJcblxyXG5mdW5jdGlvbiBNb3ZpZXNMaXN0KCkge1xyXG4gIGNvbnN0IHtcclxuICAgIGRhdGE6IG1vdmllc0RhdGEsXHJcbiAgICByZXF1ZXN0U3RhdHVzLFxyXG4gICAgZXJyb3IsXHJcbiAgICB1cGRhdGVSZWNvcmQsXHJcbiAgICBpbnNlcnRSZWNvcmQsXHJcbiAgICBkZVxyXG4gIH0gPSB1c2VSZXF1ZXN0RGVsYXkoMjAwMCwgZGF0YSk7XHJcblxyXG4gIGNvbnN0IHsgc2VhcmNoUXVlcnksIHJhdGluZ1ZhbHVlIH0gPSB1c2VDb250ZXh0KE1vdmllRmlsdGVyQ29udGV4dCk7XHJcblxyXG4gIGlmIChyZXF1ZXN0U3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5GQUlMVVJFKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+XHJcbiAgICAgICAgRVJST1I6IDxiPmxvYWRpbmcgTW92aWUgRGF0YSBGYWlsZWQge2Vycm9yfTwvYj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtb3ZpZXMtbGlzdFwiPlxyXG4gICAgICA8UmVhY3RQbGFjZUhvbGRlclxyXG4gICAgICAgIHR5cGU9XCJtZWRpYVwiXHJcbiAgICAgICAgcm93cz17MjB9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibW92aWVzbGlzdC1wbGFjZWhvbGRlclwiXHJcbiAgICAgICAgcmVhZHk9e3JlcXVlc3RTdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLlNVQ0NFU1N9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAge21vdmllc0RhdGFcclxuICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24obW92aWUpe1xyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgbW92aWUudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hRdWVyeSkgXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmZpbHRlcihmdW5jdGlvbihtb3ZpZSl7XHJcbiAgICAgICAgICAgIHJldHVybiBtb3ZpZS5yYXRpbmdzLmZpbmQoKHJhdGluZyk9PntcclxuICAgICAgICAgICAgICByZXR1cm4gcmF0aW5nLlZhbHVlID09PSByYXRpbmdWYWx1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAubWFwKGZ1bmN0aW9uIChtb3ZpZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxNb3ZpZVxyXG4gICAgICAgICAgICAgICAga2V5PXttb3ZpZS5pZH1cclxuICAgICAgICAgICAgICAgIG1vdmllPXttb3ZpZX1cclxuICAgICAgICAgICAgICAgIHVwZGF0ZVJlY29yZD17dXBkYXRlUmVjb3JkfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9SZWFjdFBsYWNlSG9sZGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW92aWVzTGlzdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
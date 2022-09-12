self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/MovieAdd.js":
/*!************************************!*\
  !*** ./src/components/MovieAdd.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\hp\\Desktop\\react\\movie_recommend\\src\\components\\MovieAdd.js";

function MovieAdd(_ref) {
  var ratingValue = _ref.ratingValue,
      insertRecord = _ref.insertRecord;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
    href: "#",
    className: "addSes",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
      onClick: function onClick(e) {
        e.preventDefault();
        var title = window.prompt("Enter title:", "");
        insertRecord({
          id: "99999",
          title: title,
          summary: "Bio not entered yet",
          ratings: [{
            Source: "Admin",
            Value: "".concat(ratingValue)
          }]
        });
      },
      children: "+"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 9
  }, this);
}

_c = MovieAdd;
/* harmony default export */ __webpack_exports__["default"] = (MovieAdd);

var _c;

$RefreshReg$(_c, "MovieAdd");

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


/***/ }),

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW92aWVBZGQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01vdmllc0xpc3QuanMiXSwibmFtZXMiOlsiTW92aWVBZGQiLCJyYXRpbmdWYWx1ZSIsImluc2VydFJlY29yZCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRpdGxlIiwid2luZG93IiwicHJvbXB0IiwiaWQiLCJzdW1tYXJ5IiwicmF0aW5ncyIsIlNvdXJjZSIsIlZhbHVlIiwiTW92aWVzTGlzdCIsInVzZVJlcXVlc3REZWxheSIsImRhdGEiLCJtb3ZpZXNEYXRhIiwicmVxdWVzdFN0YXR1cyIsImVycm9yIiwidXBkYXRlUmVjb3JkIiwiZGVsZXRlUmVjb3JkIiwidXNlQ29udGV4dCIsIk1vdmllRmlsdGVyQ29udGV4dCIsInNlYXJjaFF1ZXJ5IiwiUkVRVUVTVF9TVEFUVVMiLCJmaWx0ZXIiLCJtb3ZpZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJmaW5kIiwicmF0aW5nIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsUUFBVCxPQUFnRDtBQUFBLE1BQTNCQyxXQUEyQixRQUEzQkEsV0FBMkI7QUFBQSxNQUFkQyxZQUFjLFFBQWRBLFlBQWM7QUFDNUMsc0JBQ0k7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFZLGFBQVMsRUFBQyxRQUF0QjtBQUFBLDJCQUNJO0FBQ0ksYUFBTyxFQUFFLGlCQUFDQyxDQUFELEVBQU87QUFDaEJBLFNBQUMsQ0FBQ0MsY0FBRjtBQUNBLFlBQU1DLEtBQUssR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWMsY0FBZCxFQUE4QixFQUE5QixDQUFkO0FBQ0FMLG9CQUFZLENBQUM7QUFDVE0sWUFBRSxFQUFFLE9BREs7QUFFVEgsZUFBSyxFQUFFQSxLQUZFO0FBR1RJLGlCQUFPLEVBQUUscUJBSEE7QUFJVEMsaUJBQU8sRUFBRSxDQUNUO0FBQ0lDLGtCQUFNLEVBQUMsT0FEWDtBQUVJQyxpQkFBSyxZQUFJWCxXQUFKO0FBRlQsV0FEUztBQUpBLFNBQUQsQ0FBWjtBQVdDLE9BZkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUF1Qkg7O0tBeEJRRCxRO0FBeUJULCtEQUFlQSxRQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNhLFVBQVQsR0FBc0I7QUFBQTs7QUFBQSx5QkFRaEJDLCtEQUFlLENBQUMsSUFBRCxFQUFPQyw0Q0FBUCxDQVJDO0FBQUEsTUFFWkMsVUFGWSxvQkFFbEJELElBRmtCO0FBQUEsTUFHbEJFLGFBSGtCLG9CQUdsQkEsYUFIa0I7QUFBQSxNQUlsQkMsS0FKa0Isb0JBSWxCQSxLQUprQjtBQUFBLE1BS2xCQyxZQUxrQixvQkFLbEJBLFlBTGtCO0FBQUEsTUFNbEJqQixZQU5rQixvQkFNbEJBLFlBTmtCO0FBQUEsTUFPbEJrQixZQVBrQixvQkFPbEJBLFlBUGtCOztBQUFBLG9CQVVpQkMsaURBQVUsQ0FBQ0MsNEVBQUQsQ0FWM0I7QUFBQSxNQVVaQyxXQVZZLGVBVVpBLFdBVlk7QUFBQSxNQVVDdEIsV0FWRCxlQVVDQSxXQVZEOztBQVlwQixNQUFJZ0IsYUFBYSxLQUFLTywwRUFBdEIsRUFBOEM7QUFDNUMsd0JBQ0U7QUFBSyxlQUFTLEVBQUMsYUFBZjtBQUFBLHlDQUNTO0FBQUEsaURBQThCTixLQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQUtEOztBQUdELHNCQUNFO0FBQUssYUFBUyxFQUFDLHVCQUFmO0FBQUEsMkJBQ0UsOERBQUMsc0RBQUQ7QUFDRSxVQUFJLEVBQUMsT0FEUDtBQUVFLFVBQUksRUFBRSxFQUZSO0FBR0UsZUFBUyxFQUFDLHdCQUhaO0FBSUUsV0FBSyxFQUFFRCxhQUFhLEtBQUtPLDBFQUozQjtBQUFBLDhCQU1FLDhEQUFDLDhDQUFEO0FBQVUsbUJBQVcsRUFBRXZCLFdBQXZCO0FBQW9DLG9CQUFZLEVBQUVDO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORixlQU9FO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUEsa0JBQ0djLFVBQVUsQ0FDVlMsTUFEQSxDQUNPLFVBQVNDLEtBQVQsRUFBZTtBQUNyQixpQkFDRUEsS0FBSyxDQUFDckIsS0FBTixDQUFZc0IsV0FBWixHQUEwQkMsUUFBMUIsQ0FBbUNMLFdBQW5DLENBREY7QUFHRCxTQUxBLEVBTUFFLE1BTkEsQ0FNTyxVQUFTQyxLQUFULEVBQWU7QUFDckIsaUJBQU9BLEtBQUssQ0FBQ2hCLE9BQU4sQ0FBY21CLElBQWQsQ0FBbUIsVUFBQ0MsTUFBRCxFQUFVO0FBQ2xDLG1CQUFPQSxNQUFNLENBQUNsQixLQUFQLEtBQWlCWCxXQUF4QjtBQUNELFdBRk0sQ0FBUDtBQUdELFNBVkEsRUFZQThCLEdBWkEsQ0FZSSxVQUFVTCxLQUFWLEVBQWlCO0FBQ3BCLDhCQUNFLDhEQUFDLDJDQUFEO0FBRUUsaUJBQUssRUFBRUEsS0FGVDtBQUdFLHdCQUFZLEVBQUVQLFlBSGhCO0FBSUUsd0JBQVksRUFBRWpCLFlBSmhCO0FBS0Usd0JBQVksRUFBRWtCO0FBTGhCLGFBQ09NLEtBQUssQ0FBQ2xCLEVBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERjtBQVNELFNBdEJBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXFDRDs7R0ExRFFLLFU7VUFRSEMsMkQ7OztLQVJHRCxVO0FBNERULCtEQUFlQSxVQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI0N2NmZjY1ZTk5NzQ4ZjUwN2Y3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBNb3ZpZUFkZCAoeyByYXRpbmdWYWx1ZSwgaW5zZXJ0UmVjb3JkfSl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJhZGRTZXNcIj5cclxuICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IHdpbmRvdy5wcm9tcHQoXCJFbnRlciB0aXRsZTpcIiwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICBpbnNlcnRSZWNvcmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcIjk5OTk5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1bW1hcnk6IFwiQmlvIG5vdCBlbnRlcmVkIHlldFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJhdGluZ3M6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNvdXJjZTpcIkFkbWluXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlOmAke3JhdGluZ1ZhbHVlfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICArXHJcbiAgICAgICAgICAgIDwvaT5cclxuICAgICAgICA8L2E+XHJcbiAgICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vdmllQWRkOyIsImltcG9ydCBNb3ZpZSBmcm9tIFwiLi9Nb3ZpZVwiO1xyXG5pbXBvcnQgUmVhY3RQbGFjZUhvbGRlciBmcm9tIFwicmVhY3QtcGxhY2Vob2xkZXJcIjtcclxuaW1wb3J0IHVzZVJlcXVlc3REZWxheSwgeyBSRVFVRVNUX1NUQVRVUyB9IGZyb20gXCIuLi9ob29rcy91c2VSZXF1ZXN0RGVsYXlcIjtcclxuaW1wb3J0IHsgZGF0YSB9IGZyb20gXCIuLi8uLi9Nb3ZpZURhdGFcIjtcclxuaW1wb3J0IHt1c2VDb250ZXh0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtNb3ZpZUZpbHRlckNvbnRleHR9IGZyb20gXCIuLy4uL2NvbnRleHRzL01vdmllRmlsdGVyQ29udGV4dFwiO1xyXG5pbXBvcnQgTW92aWVBZGQgZnJvbSBcIi4vTW92aWVBZGRcIjtcclxuXHJcbmZ1bmN0aW9uIE1vdmllc0xpc3QoKSB7XHJcbiAgY29uc3Qge1xyXG4gICAgZGF0YTogbW92aWVzRGF0YSxcclxuICAgIHJlcXVlc3RTdGF0dXMsXHJcbiAgICBlcnJvcixcclxuICAgIHVwZGF0ZVJlY29yZCxcclxuICAgIGluc2VydFJlY29yZCxcclxuICAgIGRlbGV0ZVJlY29yZFxyXG4gIH0gPSB1c2VSZXF1ZXN0RGVsYXkoMjAwMCwgZGF0YSk7XHJcblxyXG4gIGNvbnN0IHsgc2VhcmNoUXVlcnksIHJhdGluZ1ZhbHVlIH0gPSB1c2VDb250ZXh0KE1vdmllRmlsdGVyQ29udGV4dCk7XHJcblxyXG4gIGlmIChyZXF1ZXN0U3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5GQUlMVVJFKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+XHJcbiAgICAgICAgRVJST1I6IDxiPmxvYWRpbmcgTW92aWUgRGF0YSBGYWlsZWQge2Vycm9yfTwvYj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtb3ZpZXMtbGlzdFwiPlxyXG4gICAgICA8UmVhY3RQbGFjZUhvbGRlclxyXG4gICAgICAgIHR5cGU9XCJtZWRpYVwiXHJcbiAgICAgICAgcm93cz17MjB9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibW92aWVzbGlzdC1wbGFjZWhvbGRlclwiXHJcbiAgICAgICAgcmVhZHk9e3JlcXVlc3RTdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLlNVQ0NFU1N9XHJcbiAgICAgID5cclxuICAgICAgICA8TW92aWVBZGQgcmF0aW5nVmFsdWU9e3JhdGluZ1ZhbHVlfSBpbnNlcnRSZWNvcmQ9e2luc2VydFJlY29yZH0vPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICB7bW92aWVzRGF0YVxyXG4gICAgICAgICAgLmZpbHRlcihmdW5jdGlvbihtb3ZpZSl7XHJcbiAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICBtb3ZpZS50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5KSBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uKG1vdmllKXtcclxuICAgICAgICAgICAgcmV0dXJuIG1vdmllLnJhdGluZ3MuZmluZCgocmF0aW5nKT0+e1xyXG4gICAgICAgICAgICAgIHJldHVybiByYXRpbmcuVmFsdWUgPT09IHJhdGluZ1ZhbHVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKG1vdmllKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPE1vdmllXHJcbiAgICAgICAgICAgICAgICBrZXk9e21vdmllLmlkfVxyXG4gICAgICAgICAgICAgICAgbW92aWU9e21vdmllfVxyXG4gICAgICAgICAgICAgICAgdXBkYXRlUmVjb3JkPXt1cGRhdGVSZWNvcmR9XHJcbiAgICAgICAgICAgICAgICBpbnNlcnRSZWNvcmQ9e2luc2VydFJlY29yZH1cclxuICAgICAgICAgICAgICAgIGRlbGV0ZVJlY29yZD17ZGVsZXRlUmVjb3JkfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9SZWFjdFBsYWNlSG9sZGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW92aWVzTGlzdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
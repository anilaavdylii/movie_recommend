self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/MoviesList.js":
/*!**************************************!*\
  !*** ./src/components/MoviesList.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_hp_Desktop_react_movie_recommend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Movie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Movie */ "./src/components/Movie.js");
/* harmony import */ var react_placeholder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-placeholder */ "./node_modules/react-placeholder/lib/index.js");
/* harmony import */ var _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useRequestDelay */ "./src/hooks/useRequestDelay.js");
/* harmony import */ var _MovieData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../MovieData */ "./MovieData.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _contexts_MovieFilterContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../contexts/MovieFilterContext */ "./src/contexts/MovieFilterContext.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\hp\\Desktop\\react\\movie_recommend\\src\\components\\MoviesList.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_hp_Desktop_react_movie_recommend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








function MoviesList() {
  _s();

  var _useRequestDelay = (0,_hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__.default)(2000, _MovieData__WEBPACK_IMPORTED_MODULE_5__.data),
      moviesData = _useRequestDelay.data,
      requestStatus = _useRequestDelay.requestStatus,
      error = _useRequestDelay.error,
      updateRecord = _useRequestDelay.updateRecord;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_6__.useContext)(_contexts_MovieFilterContext__WEBPACK_IMPORTED_MODULE_7__.MovieFilterContext),
      searchQuery = _useContext.searchQuery,
      ratingValue = _useContext.ratingValue;

  if (requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__.REQUEST_STATUS.FAILURE) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "text-danger",
      children: ["ERROR: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("b", {
        children: ["loading Movie Data Failed ", error]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 16
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "container movies-list",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_placeholder__WEBPACK_IMPORTED_MODULE_3__.default, {
      type: "media",
      rows: 20,
      className: "movieslist-placeholder",
      ready: requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__.REQUEST_STATUS.SUCCESS,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "row",
        children: moviesData.filter(function (movie) {
          return movie.title.toLowerCase().includes(searchQuery);
        }).filter(function (movie) {
          return movie.ratings.find(r);
        }).map(function (movie) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Movie__WEBPACK_IMPORTED_MODULE_2__.default, {
            movie: movie,
            onFavoriteToggle: function onFavoriteToggle(doneCallback) {
              updateRecord(_objectSpread(_objectSpread({}, movie), {}, {
                favorite: !movie.favorite
              }), doneCallback);
            }
          }, movie.id, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 15
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

_s(MoviesList, "O0r3Mgy9YTyp0Hv2PEUHWWUZrpo=", false, function () {
  return [_hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__.default];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW92aWVzTGlzdC5qcyJdLCJuYW1lcyI6WyJNb3ZpZXNMaXN0IiwidXNlUmVxdWVzdERlbGF5IiwiZGF0YSIsIm1vdmllc0RhdGEiLCJyZXF1ZXN0U3RhdHVzIiwiZXJyb3IiLCJ1cGRhdGVSZWNvcmQiLCJ1c2VDb250ZXh0IiwiTW92aWVGaWx0ZXJDb250ZXh0Iiwic2VhcmNoUXVlcnkiLCJyYXRpbmdWYWx1ZSIsIlJFUVVFU1RfU1RBVFVTIiwiZmlsdGVyIiwibW92aWUiLCJ0aXRsZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJyYXRpbmdzIiwiZmluZCIsInIiLCJtYXAiLCJkb25lQ2FsbGJhY2siLCJmYXZvcml0ZSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFVBQVQsR0FBc0I7QUFBQTs7QUFBQSx5QkFNaEJDLCtEQUFlLENBQUMsSUFBRCxFQUFPQyw0Q0FBUCxDQU5DO0FBQUEsTUFFWkMsVUFGWSxvQkFFbEJELElBRmtCO0FBQUEsTUFHbEJFLGFBSGtCLG9CQUdsQkEsYUFIa0I7QUFBQSxNQUlsQkMsS0FKa0Isb0JBSWxCQSxLQUprQjtBQUFBLE1BS2xCQyxZQUxrQixvQkFLbEJBLFlBTGtCOztBQUFBLG9CQVFpQkMsaURBQVUsQ0FBQ0MsNEVBQUQsQ0FSM0I7QUFBQSxNQVFaQyxXQVJZLGVBUVpBLFdBUlk7QUFBQSxNQVFDQyxXQVJELGVBUUNBLFdBUkQ7O0FBVXBCLE1BQUlOLGFBQWEsS0FBS08sMEVBQXRCLEVBQThDO0FBQzVDLHdCQUNFO0FBQUssZUFBUyxFQUFDLGFBQWY7QUFBQSx5Q0FDUztBQUFBLGlEQUE4Qk4sS0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFLRDs7QUFHRCxzQkFDRTtBQUFLLGFBQVMsRUFBQyx1QkFBZjtBQUFBLDJCQUNFLDhEQUFDLHNEQUFEO0FBQ0UsVUFBSSxFQUFDLE9BRFA7QUFFRSxVQUFJLEVBQUUsRUFGUjtBQUdFLGVBQVMsRUFBQyx3QkFIWjtBQUlFLFdBQUssRUFBRUQsYUFBYSxLQUFLTywwRUFKM0I7QUFBQSw2QkFNRTtBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBLGtCQUNHUixVQUFVLENBQ1ZTLE1BREEsQ0FDTyxVQUFTQyxLQUFULEVBQWU7QUFDckIsaUJBQ0VBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLEdBQTBCQyxRQUExQixDQUFtQ1AsV0FBbkMsQ0FERjtBQUdELFNBTEEsRUFNQUcsTUFOQSxDQU1PLFVBQVNDLEtBQVQsRUFBZTtBQUNyQixpQkFBT0EsS0FBSyxDQUFDSSxPQUFOLENBQWNDLElBQWQsQ0FBb0JDLENBQXBCLENBQVA7QUFDRCxTQVJBLEVBVUFDLEdBVkEsQ0FVSSxVQUFVUCxLQUFWLEVBQWlCO0FBQ3BCLDhCQUNFLDhEQUFDLDJDQUFEO0FBRUUsaUJBQUssRUFBRUEsS0FGVDtBQUdFLDRCQUFnQixFQUFFLDBCQUFDUSxZQUFELEVBQWtCO0FBQ2xDZiwwQkFBWSxpQ0FFTE8sS0FGSztBQUdSUyx3QkFBUSxFQUFFLENBQUNULEtBQUssQ0FBQ1M7QUFIVCxrQkFLVkQsWUFMVSxDQUFaO0FBT0Q7QUFYSCxhQUNPUixLQUFLLENBQUNVLEVBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERjtBQWVELFNBMUJBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF3Q0Q7O0dBM0RRdkIsVTtVQU1IQywyRDs7O0tBTkdELFU7QUE2RFQsK0RBQWVBLFVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWMxMmJiNjc1NzQ4YTI3YTJmMzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb3ZpZSBmcm9tIFwiLi9Nb3ZpZVwiO1xyXG5pbXBvcnQgUmVhY3RQbGFjZUhvbGRlciBmcm9tIFwicmVhY3QtcGxhY2Vob2xkZXJcIjtcclxuaW1wb3J0IHVzZVJlcXVlc3REZWxheSwgeyBSRVFVRVNUX1NUQVRVUyB9IGZyb20gXCIuLi9ob29rcy91c2VSZXF1ZXN0RGVsYXlcIjtcclxuaW1wb3J0IHsgZGF0YSB9IGZyb20gXCIuLi8uLi9Nb3ZpZURhdGFcIjtcclxuaW1wb3J0IHt1c2VDb250ZXh0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtNb3ZpZUZpbHRlckNvbnRleHR9IGZyb20gXCIuLy4uL2NvbnRleHRzL01vdmllRmlsdGVyQ29udGV4dFwiO1xyXG5cclxuZnVuY3Rpb24gTW92aWVzTGlzdCgpIHtcclxuICBjb25zdCB7XHJcbiAgICBkYXRhOiBtb3ZpZXNEYXRhLFxyXG4gICAgcmVxdWVzdFN0YXR1cyxcclxuICAgIGVycm9yLFxyXG4gICAgdXBkYXRlUmVjb3JkLFxyXG4gIH0gPSB1c2VSZXF1ZXN0RGVsYXkoMjAwMCwgZGF0YSk7XHJcblxyXG4gIGNvbnN0IHsgc2VhcmNoUXVlcnksIHJhdGluZ1ZhbHVlIH0gPSB1c2VDb250ZXh0KE1vdmllRmlsdGVyQ29udGV4dCk7XHJcblxyXG4gIGlmIChyZXF1ZXN0U3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5GQUlMVVJFKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+XHJcbiAgICAgICAgRVJST1I6IDxiPmxvYWRpbmcgTW92aWUgRGF0YSBGYWlsZWQge2Vycm9yfTwvYj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtb3ZpZXMtbGlzdFwiPlxyXG4gICAgICA8UmVhY3RQbGFjZUhvbGRlclxyXG4gICAgICAgIHR5cGU9XCJtZWRpYVwiXHJcbiAgICAgICAgcm93cz17MjB9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibW92aWVzbGlzdC1wbGFjZWhvbGRlclwiXHJcbiAgICAgICAgcmVhZHk9e3JlcXVlc3RTdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLlNVQ0NFU1N9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAge21vdmllc0RhdGFcclxuICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24obW92aWUpe1xyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgbW92aWUudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hRdWVyeSkgXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmZpbHRlcihmdW5jdGlvbihtb3ZpZSl7XHJcbiAgICAgICAgICAgIHJldHVybiBtb3ZpZS5yYXRpbmdzLmZpbmQoKHIpKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLm1hcChmdW5jdGlvbiAobW92aWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8TW92aWVcclxuICAgICAgICAgICAgICAgIGtleT17bW92aWUuaWR9XHJcbiAgICAgICAgICAgICAgICBtb3ZpZT17bW92aWV9XHJcbiAgICAgICAgICAgICAgICBvbkZhdm9yaXRlVG9nZ2xlPXsoZG9uZUNhbGxiYWNrKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHVwZGF0ZVJlY29yZChcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAuLi5tb3ZpZSxcclxuICAgICAgICAgICAgICAgICAgICAgIGZhdm9yaXRlOiAhbW92aWUuZmF2b3JpdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBkb25lQ2FsbGJhY2tcclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1JlYWN0UGxhY2VIb2xkZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3ZpZXNMaXN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
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
          movie.first.toLowerCase()["in"];
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
            lineNumber: 43,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW92aWVzTGlzdC5qcyJdLCJuYW1lcyI6WyJNb3ZpZXNMaXN0IiwidXNlUmVxdWVzdERlbGF5IiwiZGF0YSIsIm1vdmllc0RhdGEiLCJyZXF1ZXN0U3RhdHVzIiwiZXJyb3IiLCJ1cGRhdGVSZWNvcmQiLCJ1c2VDb250ZXh0IiwiTW92aWVGaWx0ZXJDb250ZXh0Iiwic2VhcmNoUXVlcnkiLCJyYXRpbmdWYWx1ZSIsIlJFUVVFU1RfU1RBVFVTIiwiZmlsdGVyIiwibW92aWUiLCJmaXJzdCIsInRvTG93ZXJDYXNlIiwibWFwIiwiZG9uZUNhbGxiYWNrIiwiZmF2b3JpdGUiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxVQUFULEdBQXNCO0FBQUE7O0FBQUEseUJBTWhCQywrREFBZSxDQUFDLElBQUQsRUFBT0MsNENBQVAsQ0FOQztBQUFBLE1BRVpDLFVBRlksb0JBRWxCRCxJQUZrQjtBQUFBLE1BR2xCRSxhQUhrQixvQkFHbEJBLGFBSGtCO0FBQUEsTUFJbEJDLEtBSmtCLG9CQUlsQkEsS0FKa0I7QUFBQSxNQUtsQkMsWUFMa0Isb0JBS2xCQSxZQUxrQjs7QUFBQSxvQkFRaUJDLGlEQUFVLENBQUNDLDRFQUFELENBUjNCO0FBQUEsTUFRWkMsV0FSWSxlQVFaQSxXQVJZO0FBQUEsTUFRQ0MsV0FSRCxlQVFDQSxXQVJEOztBQVVwQixNQUFJTixhQUFhLEtBQUtPLDBFQUF0QixFQUE4QztBQUM1Qyx3QkFDRTtBQUFLLGVBQVMsRUFBQyxhQUFmO0FBQUEseUNBQ1M7QUFBQSxpREFBOEJOLEtBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBS0Q7O0FBR0Qsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsdUJBQWY7QUFBQSwyQkFDRSw4REFBQyxzREFBRDtBQUNFLFVBQUksRUFBQyxPQURQO0FBRUUsVUFBSSxFQUFFLEVBRlI7QUFHRSxlQUFTLEVBQUMsd0JBSFo7QUFJRSxXQUFLLEVBQUVELGFBQWEsS0FBS08sMEVBSjNCO0FBQUEsNkJBTUU7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQSxrQkFDR1IsVUFBVSxDQUNWUyxNQURBLENBQ08sVUFBU0MsS0FBVCxFQUFlO0FBQ3JCQSxlQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWjtBQUNELFNBSEEsRUFLQUMsR0FMQSxDQUtJLFVBQVVILEtBQVYsRUFBaUI7QUFDcEIsOEJBQ0UsOERBQUMsMkNBQUQ7QUFFRSxpQkFBSyxFQUFFQSxLQUZUO0FBR0UsNEJBQWdCLEVBQUUsMEJBQUNJLFlBQUQsRUFBa0I7QUFDbENYLDBCQUFZLGlDQUVMTyxLQUZLO0FBR1JLLHdCQUFRLEVBQUUsQ0FBQ0wsS0FBSyxDQUFDSztBQUhULGtCQUtWRCxZQUxVLENBQVo7QUFPRDtBQVhILGFBQ09KLEtBQUssQ0FBQ00sRUFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGO0FBZUQsU0FyQkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW1DRDs7R0F0RFFuQixVO1VBTUhDLDJEOzs7S0FOR0QsVTtBQXdEVCwrREFBZUEsVUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41ODU0NmYyNDI1YWVkMjBjODFhNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vdmllIGZyb20gXCIuL01vdmllXCI7XHJcbmltcG9ydCBSZWFjdFBsYWNlSG9sZGVyIGZyb20gXCJyZWFjdC1wbGFjZWhvbGRlclwiO1xyXG5pbXBvcnQgdXNlUmVxdWVzdERlbGF5LCB7IFJFUVVFU1RfU1RBVFVTIH0gZnJvbSBcIi4uL2hvb2tzL3VzZVJlcXVlc3REZWxheVwiO1xyXG5pbXBvcnQgeyBkYXRhIH0gZnJvbSBcIi4uLy4uL01vdmllRGF0YVwiO1xyXG5pbXBvcnQge3VzZUNvbnRleHR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge01vdmllRmlsdGVyQ29udGV4dH0gZnJvbSBcIi4vLi4vY29udGV4dHMvTW92aWVGaWx0ZXJDb250ZXh0XCI7XHJcblxyXG5mdW5jdGlvbiBNb3ZpZXNMaXN0KCkge1xyXG4gIGNvbnN0IHtcclxuICAgIGRhdGE6IG1vdmllc0RhdGEsXHJcbiAgICByZXF1ZXN0U3RhdHVzLFxyXG4gICAgZXJyb3IsXHJcbiAgICB1cGRhdGVSZWNvcmQsXHJcbiAgfSA9IHVzZVJlcXVlc3REZWxheSgyMDAwLCBkYXRhKTtcclxuXHJcbiAgY29uc3QgeyBzZWFyY2hRdWVyeSwgcmF0aW5nVmFsdWUgfSA9IHVzZUNvbnRleHQoTW92aWVGaWx0ZXJDb250ZXh0KTtcclxuXHJcbiAgaWYgKHJlcXVlc3RTdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLkZBSUxVUkUpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj5cclxuICAgICAgICBFUlJPUjogPGI+bG9hZGluZyBNb3ZpZSBEYXRhIEZhaWxlZCB7ZXJyb3J9PC9iPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG1vdmllcy1saXN0XCI+XHJcbiAgICAgIDxSZWFjdFBsYWNlSG9sZGVyXHJcbiAgICAgICAgdHlwZT1cIm1lZGlhXCJcclxuICAgICAgICByb3dzPXsyMH1cclxuICAgICAgICBjbGFzc05hbWU9XCJtb3ZpZXNsaXN0LXBsYWNlaG9sZGVyXCJcclxuICAgICAgICByZWFkeT17cmVxdWVzdFN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuU1VDQ0VTU31cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICB7bW92aWVzRGF0YVxyXG4gICAgICAgICAgLmZpbHRlcihmdW5jdGlvbihtb3ZpZSl7XHJcbiAgICAgICAgICAgIG1vdmllLmZpcnN0LnRvTG93ZXJDYXNlKCkuaW5cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKG1vdmllKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPE1vdmllXHJcbiAgICAgICAgICAgICAgICBrZXk9e21vdmllLmlkfVxyXG4gICAgICAgICAgICAgICAgbW92aWU9e21vdmllfVxyXG4gICAgICAgICAgICAgICAgb25GYXZvcml0ZVRvZ2dsZT17KGRvbmVDYWxsYmFjaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB1cGRhdGVSZWNvcmQoXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLi4ubW92aWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBmYXZvcml0ZTogIW1vdmllLmZhdm9yaXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZUNhbGxiYWNrXHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9SZWFjdFBsYWNlSG9sZGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW92aWVzTGlzdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
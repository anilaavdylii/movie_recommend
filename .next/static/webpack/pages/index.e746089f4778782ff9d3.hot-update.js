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
          movie.fi;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW92aWVzTGlzdC5qcyJdLCJuYW1lcyI6WyJNb3ZpZXNMaXN0IiwidXNlUmVxdWVzdERlbGF5IiwiZGF0YSIsIm1vdmllc0RhdGEiLCJyZXF1ZXN0U3RhdHVzIiwiZXJyb3IiLCJ1cGRhdGVSZWNvcmQiLCJ1c2VDb250ZXh0IiwiTW92aWVGaWx0ZXJDb250ZXh0Iiwic2VhcmNoUXVlcnkiLCJyYXRpbmdWYWx1ZSIsIlJFUVVFU1RfU1RBVFVTIiwiZmlsdGVyIiwibW92aWUiLCJmaSIsIm1hcCIsImRvbmVDYWxsYmFjayIsImZhdm9yaXRlIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsVUFBVCxHQUFzQjtBQUFBOztBQUFBLHlCQU1oQkMsK0RBQWUsQ0FBQyxJQUFELEVBQU9DLDRDQUFQLENBTkM7QUFBQSxNQUVaQyxVQUZZLG9CQUVsQkQsSUFGa0I7QUFBQSxNQUdsQkUsYUFIa0Isb0JBR2xCQSxhQUhrQjtBQUFBLE1BSWxCQyxLQUprQixvQkFJbEJBLEtBSmtCO0FBQUEsTUFLbEJDLFlBTGtCLG9CQUtsQkEsWUFMa0I7O0FBQUEsb0JBUWlCQyxpREFBVSxDQUFDQyw0RUFBRCxDQVIzQjtBQUFBLE1BUVpDLFdBUlksZUFRWkEsV0FSWTtBQUFBLE1BUUNDLFdBUkQsZUFRQ0EsV0FSRDs7QUFVcEIsTUFBSU4sYUFBYSxLQUFLTywwRUFBdEIsRUFBOEM7QUFDNUMsd0JBQ0U7QUFBSyxlQUFTLEVBQUMsYUFBZjtBQUFBLHlDQUNTO0FBQUEsaURBQThCTixLQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQUtEOztBQUdELHNCQUNFO0FBQUssYUFBUyxFQUFDLHVCQUFmO0FBQUEsMkJBQ0UsOERBQUMsc0RBQUQ7QUFDRSxVQUFJLEVBQUMsT0FEUDtBQUVFLFVBQUksRUFBRSxFQUZSO0FBR0UsZUFBUyxFQUFDLHdCQUhaO0FBSUUsV0FBSyxFQUFFRCxhQUFhLEtBQUtPLDBFQUozQjtBQUFBLDZCQU1FO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUEsa0JBQ0dSLFVBQVUsQ0FDVlMsTUFEQSxDQUNPLFVBQVNDLEtBQVQsRUFBZTtBQUNyQkEsZUFBSyxDQUFDQyxFQUFOO0FBQ0QsU0FIQSxFQUtBQyxHQUxBLENBS0ksVUFBVUYsS0FBVixFQUFpQjtBQUNwQiw4QkFDRSw4REFBQywyQ0FBRDtBQUVFLGlCQUFLLEVBQUVBLEtBRlQ7QUFHRSw0QkFBZ0IsRUFBRSwwQkFBQ0csWUFBRCxFQUFrQjtBQUNsQ1YsMEJBQVksaUNBRUxPLEtBRks7QUFHUkksd0JBQVEsRUFBRSxDQUFDSixLQUFLLENBQUNJO0FBSFQsa0JBS1ZELFlBTFUsQ0FBWjtBQU9EO0FBWEgsYUFDT0gsS0FBSyxDQUFDSyxFQURiO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREY7QUFlRCxTQXJCQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBbUNEOztHQXREUWxCLFU7VUFNSEMsMkQ7OztLQU5HRCxVO0FBd0RULCtEQUFlQSxVQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmU3NDYwODlmNDc3ODc4MmZmOWQzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW92aWUgZnJvbSBcIi4vTW92aWVcIjtcclxuaW1wb3J0IFJlYWN0UGxhY2VIb2xkZXIgZnJvbSBcInJlYWN0LXBsYWNlaG9sZGVyXCI7XHJcbmltcG9ydCB1c2VSZXF1ZXN0RGVsYXksIHsgUkVRVUVTVF9TVEFUVVMgfSBmcm9tIFwiLi4vaG9va3MvdXNlUmVxdWVzdERlbGF5XCI7XHJcbmltcG9ydCB7IGRhdGEgfSBmcm9tIFwiLi4vLi4vTW92aWVEYXRhXCI7XHJcbmltcG9ydCB7dXNlQ29udGV4dH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7TW92aWVGaWx0ZXJDb250ZXh0fSBmcm9tIFwiLi8uLi9jb250ZXh0cy9Nb3ZpZUZpbHRlckNvbnRleHRcIjtcclxuXHJcbmZ1bmN0aW9uIE1vdmllc0xpc3QoKSB7XHJcbiAgY29uc3Qge1xyXG4gICAgZGF0YTogbW92aWVzRGF0YSxcclxuICAgIHJlcXVlc3RTdGF0dXMsXHJcbiAgICBlcnJvcixcclxuICAgIHVwZGF0ZVJlY29yZCxcclxuICB9ID0gdXNlUmVxdWVzdERlbGF5KDIwMDAsIGRhdGEpO1xyXG5cclxuICBjb25zdCB7IHNlYXJjaFF1ZXJ5LCByYXRpbmdWYWx1ZSB9ID0gdXNlQ29udGV4dChNb3ZpZUZpbHRlckNvbnRleHQpO1xyXG5cclxuICBpZiAocmVxdWVzdFN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuRkFJTFVSRSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPlxyXG4gICAgICAgIEVSUk9SOiA8Yj5sb2FkaW5nIE1vdmllIERhdGEgRmFpbGVkIHtlcnJvcn08L2I+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbW92aWVzLWxpc3RcIj5cclxuICAgICAgPFJlYWN0UGxhY2VIb2xkZXJcclxuICAgICAgICB0eXBlPVwibWVkaWFcIlxyXG4gICAgICAgIHJvd3M9ezIwfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1vdmllc2xpc3QtcGxhY2Vob2xkZXJcIlxyXG4gICAgICAgIHJlYWR5PXtyZXF1ZXN0U3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5TVUNDRVNTfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIHttb3ZpZXNEYXRhXHJcbiAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uKG1vdmllKXtcclxuICAgICAgICAgICAgbW92aWUuZmlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKG1vdmllKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPE1vdmllXHJcbiAgICAgICAgICAgICAgICBrZXk9e21vdmllLmlkfVxyXG4gICAgICAgICAgICAgICAgbW92aWU9e21vdmllfVxyXG4gICAgICAgICAgICAgICAgb25GYXZvcml0ZVRvZ2dsZT17KGRvbmVDYWxsYmFjaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB1cGRhdGVSZWNvcmQoXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLi4ubW92aWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBmYXZvcml0ZTogIW1vdmllLmZhdm9yaXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZUNhbGxiYWNrXHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9SZWFjdFBsYWNlSG9sZGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW92aWVzTGlzdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
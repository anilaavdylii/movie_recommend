self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./MovieData.js":
/*!**********************!*\
  !*** ./MovieData.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": function() { return /* binding */ data; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var data = [{
  id: "1",
  title: "Underdog",
  year: "2007",
  released: "03 Aug 2007",
  runtime: "84 min",
  summary: "Underdog tells the story of two brothers, Lincoln and Booth, who, abandoned by their parents, have had to depend upon each other for survival since they were teenagers. ",
  favorite: true,
  ratings: [{
    "Source": "Internet Movie Database",
    "Value": "10/10"
  }, {
    "Source": "Rotten Tomatoes",
    "Value": "16%"
  }, {
    "Source": "Metacritic",
    "Value": "37/100"
  }]
}, {
  id: "2",
  title: "Honest Thief",
  year: "2020",
  released: "16 Oct 2020",
  runtime: "99 min",
  summary: "Hoping to cut a deal, a professional bank robber agrees to return all the money he stole in exchange for a reduced sentence. When two FBI agents set him up for murder, he is forced to go on the run to clear his name and bring them to justice.",
  favorite: false,
  ratings: [{
    "Source": "Internet Movie Database",
    "Value": "6.0/10"
  }, {
    "Source": "Metacritic",
    "Value": "46/100"
  }]
}, {
  id: "3",
  title: "Deadpool",
  year: "2016",
  released: "12 Feb 2016",
  runtime: "108 min",
  summary: "Is a 2016 American superhero film based on the Marvel Comics character of the same name. Distributed by 20th Century Fox, it is a spin-off in the X-Men film series and the eighth installment overall.",
  favorite: true,
  ratings: [{
    "Source": "Internet Movie Database",
    "Value": "8.0/10"
  }, {
    "Source": "Rotten Tomatoes",
    "Value": "85%"
  }, {
    "Source": "Metacritic",
    "Value": "65/100"
  }]
}, {
  id: "4",
  title: "Bruce Almighty",
  year: "2003",
  released: "23 May 2003",
  runtime: "101 min",
  summary: "Is a 2003 American fantasy comedy film directed by Tom Shadyac and written by Steve Koren, Mark O'Keefe and Steve Oedekerk",
  favorite: true,
  ratings: [{
    "Source": "Internet Movie Database",
    "Value": "6.8/10"
  }, {
    "Source": "Rotten Tomatoes",
    "Value": "48%"
  }, {
    "Source": "Metacritic",
    "Value": "46/100"
  }]
}];

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
/* harmony import */ var C_Users_hp_Desktop_react_movie_recommend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Movie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Movie */ "./src/components/Movie.js");
/* harmony import */ var react_placeholder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-placeholder */ "./node_modules/react-placeholder/lib/index.js");
/* harmony import */ var _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useRequestDelay */ "./src/hooks/useRequestDelay.js");
/* harmony import */ var _MovieData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../MovieData */ "./MovieData.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\hp\\Desktop\\react\\movie_recommend\\src\\components\\MoviesList.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_hp_Desktop_react_movie_recommend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function MoviesList(_ref) {
  _s();

  var showRatings = _ref.showRatings;

  var _useRequestDelay = (0,_hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__.default)(2000, _MovieData__WEBPACK_IMPORTED_MODULE_5__.data),
      moviesData = _useRequestDelay.data,
      requestStatus = _useRequestDelay.requestStatus,
      error = _useRequestDelay.error,
      updateRecord = _useRequestDelay.updateRecord;

  if (requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__.REQUEST_STATUS.FAILURE) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "text-danger",
      children: ["ERROR: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("b", {
        children: ["loading Movie Data Failed ", error]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 16
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
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
        children: moviesData.map(function (movie) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Movie__WEBPACK_IMPORTED_MODULE_2__.default, {
            movie: movie,
            showRatings: showRatings,
            onFavoriteToggle: function onFavoriteToggle(doneCallback) {
              updateRecord(_objectSpread(_objectSpread({}, movie), {}, {
                favorite: !movie.favorite
              }), doneCallback);
            }
          }, movie.id, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 15
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

_s(MoviesList, "nq8zB9DQXdmvhUGK7O2weyrqPSM=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vTW92aWVEYXRhLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Nb3ZpZXNMaXN0LmpzIl0sIm5hbWVzIjpbImRhdGEiLCJpZCIsInRpdGxlIiwieWVhciIsInJlbGVhc2VkIiwicnVudGltZSIsInN1bW1hcnkiLCJmYXZvcml0ZSIsInJhdGluZ3MiLCJNb3ZpZXNMaXN0Iiwic2hvd1JhdGluZ3MiLCJ1c2VSZXF1ZXN0RGVsYXkiLCJtb3ZpZXNEYXRhIiwicmVxdWVzdFN0YXR1cyIsImVycm9yIiwidXBkYXRlUmVjb3JkIiwiUkVRVUVTVF9TVEFUVVMiLCJtYXAiLCJtb3ZpZSIsImRvbmVDYWxsYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxJQUFJLEdBQUcsQ0FDbEI7QUFDRUMsSUFBRSxFQUFFLEdBRE47QUFFRUMsT0FBSyxFQUFFLFVBRlQ7QUFHRUMsTUFBSSxFQUFFLE1BSFI7QUFJRUMsVUFBUSxFQUFFLGFBSlo7QUFLRUMsU0FBTyxFQUFFLFFBTFg7QUFNRUMsU0FBTyxFQUNMLDJLQVBKO0FBUUVDLFVBQVEsRUFBRSxJQVJaO0FBU0VDLFNBQU8sRUFBRSxDQUNQO0FBQ0UsY0FBVSx5QkFEWjtBQUVFLGFBQVM7QUFGWCxHQURPLEVBS1A7QUFDRSxjQUFVLGlCQURaO0FBRUUsYUFBUztBQUZYLEdBTE8sRUFTUDtBQUNFLGNBQVUsWUFEWjtBQUVFLGFBQVM7QUFGWCxHQVRPO0FBVFgsQ0FEa0IsRUF5QmxCO0FBQ0VQLElBQUUsRUFBRSxHQUROO0FBRUVDLE9BQUssRUFBRSxjQUZUO0FBR0VDLE1BQUksRUFBRSxNQUhSO0FBSUVDLFVBQVEsRUFBRSxhQUpaO0FBS0VDLFNBQU8sRUFBRSxRQUxYO0FBTUVDLFNBQU8sRUFDTCxvUEFQSjtBQU82UEMsVUFBUSxFQUFFLEtBUHZRO0FBUUVDLFNBQU8sRUFBRSxDQUNQO0FBQ0UsY0FBVSx5QkFEWjtBQUVFLGFBQVM7QUFGWCxHQURP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c3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDAxNDllMmZjZjVlNzFiMjI1N2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBkYXRhID0gW1xuICB7XG4gICAgaWQ6IFwiMVwiLFxuICAgIHRpdGxlOiBcIlVuZGVyZG9nXCIsXG4gICAgeWVhcjogXCIyMDA3XCIsXG4gICAgcmVsZWFzZWQ6IFwiMDMgQXVnIDIwMDdcIixcbiAgICBydW50aW1lOiBcIjg0IG1pblwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIlVuZGVyZG9nIHRlbGxzIHRoZSBzdG9yeSBvZiB0d28gYnJvdGhlcnMsIExpbmNvbG4gYW5kIEJvb3RoLCB3aG8sIGFiYW5kb25lZCBieSB0aGVpciBwYXJlbnRzLCBoYXZlIGhhZCB0byBkZXBlbmQgdXBvbiBlYWNoIG90aGVyIGZvciBzdXJ2aXZhbCBzaW5jZSB0aGV5IHdlcmUgdGVlbmFnZXJzLiBcIixcbiAgICBmYXZvcml0ZTogdHJ1ZSxcbiAgICByYXRpbmdzOiBbXG4gICAgICB7XG4gICAgICAgIFwiU291cmNlXCI6IFwiSW50ZXJuZXQgTW92aWUgRGF0YWJhc2VcIixcbiAgICAgICAgXCJWYWx1ZVwiOiBcIjEwLzEwXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiU291cmNlXCI6IFwiUm90dGVuIFRvbWF0b2VzXCIsXG4gICAgICAgIFwiVmFsdWVcIjogXCIxNiVcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJTb3VyY2VcIjogXCJNZXRhY3JpdGljXCIsXG4gICAgICAgIFwiVmFsdWVcIjogXCIzNy8xMDBcIlxuICAgICAgfVxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCIyXCIsXG4gICAgdGl0bGU6IFwiSG9uZXN0IFRoaWVmXCIsXG4gICAgeWVhcjogXCIyMDIwXCIsXG4gICAgcmVsZWFzZWQ6IFwiMTYgT2N0IDIwMjBcIixcbiAgICBydW50aW1lOiBcIjk5IG1pblwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIkhvcGluZyB0byBjdXQgYSBkZWFsLCBhIHByb2Zlc3Npb25hbCBiYW5rIHJvYmJlciBhZ3JlZXMgdG8gcmV0dXJuIGFsbCB0aGUgbW9uZXkgaGUgc3RvbGUgaW4gZXhjaGFuZ2UgZm9yIGEgcmVkdWNlZCBzZW50ZW5jZS4gV2hlbiB0d28gRkJJIGFnZW50cyBzZXQgaGltIHVwIGZvciBtdXJkZXIsIGhlIGlzIGZvcmNlZCB0byBnbyBvbiB0aGUgcnVuIHRvIGNsZWFyIGhpcyBuYW1lIGFuZCBicmluZyB0aGVtIHRvIGp1c3RpY2UuXCIsICAgIGZhdm9yaXRlOiBmYWxzZSxcbiAgICByYXRpbmdzOiBbXG4gICAgICB7XG4gICAgICAgIFwiU291cmNlXCI6IFwiSW50ZXJuZXQgTW92aWUgRGF0YWJhc2VcIixcbiAgICAgICAgXCJWYWx1ZVwiOiBcIjYuMC8xMFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIlNvdXJjZVwiOiBcIk1ldGFjcml0aWNcIixcbiAgICAgICAgXCJWYWx1ZVwiOiBcIjQ2LzEwMFwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgaWQ6IFwiM1wiLFxuICAgIHRpdGxlOiBcIkRlYWRwb29sXCIsXG4gICAgeWVhcjogXCIyMDE2XCIsXG4gICAgcmVsZWFzZWQ6IFwiMTIgRmViIDIwMTZcIixcbiAgICBydW50aW1lOiBcIjEwOCBtaW5cIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJJcyBhIDIwMTYgQW1lcmljYW4gc3VwZXJoZXJvIGZpbG0gYmFzZWQgb24gdGhlIE1hcnZlbCBDb21pY3MgY2hhcmFjdGVyIG9mIHRoZSBzYW1lIG5hbWUuIERpc3RyaWJ1dGVkIGJ5IDIwdGggQ2VudHVyeSBGb3gsIGl0IGlzIGEgc3Bpbi1vZmYgaW4gdGhlIFgtTWVuIGZpbG0gc2VyaWVzIGFuZCB0aGUgZWlnaHRoIGluc3RhbGxtZW50IG92ZXJhbGwuXCIsXG4gICAgZmF2b3JpdGU6IHRydWUsXG4gICAgcmF0aW5nczogW1xuICAgICAge1xuICAgICAgICBcIlNvdXJjZVwiOiBcIkludGVybmV0IE1vdmllIERhdGFiYXNlXCIsXG4gICAgICAgIFwiVmFsdWVcIjogXCI4LjAvMTBcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJTb3VyY2VcIjogXCJSb3R0ZW4gVG9tYXRvZXNcIixcbiAgICAgICAgXCJWYWx1ZVwiOiBcIjg1JVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIlNvdXJjZVwiOiBcIk1ldGFjcml0aWNcIixcbiAgICAgICAgXCJWYWx1ZVwiOiBcIjY1LzEwMFwiXG4gICAgICB9XG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcIjRcIixcbiAgICB0aXRsZTogXCJCcnVjZSBBbG1pZ2h0eVwiLFxuICAgIHllYXI6IFwiMjAwM1wiLFxuICAgIHJlbGVhc2VkOiBcIjIzIE1heSAyMDAzXCIsXG4gICAgcnVudGltZTogXCIxMDEgbWluXCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiSXMgYSAyMDAzIEFtZXJpY2FuIGZhbnRhc3kgY29tZWR5IGZpbG0gZGlyZWN0ZWQgYnkgVG9tIFNoYWR5YWMgYW5kIHdyaXR0ZW4gYnkgU3RldmUgS29yZW4sIE1hcmsgTydLZWVmZSBhbmQgU3RldmUgT2VkZWtlcmtcIixcbiAgICBmYXZvcml0ZTogdHJ1ZSxcbiAgICByYXRpbmdzOiBbXG4gICAgICB7XG4gICAgICAgIFwiU291cmNlXCI6IFwiSW50ZXJuZXQgTW92aWUgRGF0YWJhc2VcIixcbiAgICAgICAgXCJWYWx1ZVwiOiBcIjYuOC8xMFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIlNvdXJjZVwiOiBcIlJvdHRlbiBUb21hdG9lc1wiLFxuICAgICAgICBcIlZhbHVlXCI6IFwiNDglXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiU291cmNlXCI6IFwiTWV0YWNyaXRpY1wiLFxuICAgICAgICBcIlZhbHVlXCI6IFwiNDYvMTAwXCJcbiAgICAgIH1cbiAgICBdLFxuICB9LFxuXG5dO1xuIiwiaW1wb3J0IE1vdmllIGZyb20gXCIuL01vdmllXCI7XG5pbXBvcnQgUmVhY3RQbGFjZUhvbGRlciBmcm9tIFwicmVhY3QtcGxhY2Vob2xkZXJcIjtcbmltcG9ydCB1c2VSZXF1ZXN0RGVsYXksIHsgUkVRVUVTVF9TVEFUVVMgfSBmcm9tIFwiLi4vaG9va3MvdXNlUmVxdWVzdERlbGF5XCI7XG5pbXBvcnQgeyBkYXRhIH0gZnJvbSBcIi4uLy4uL01vdmllRGF0YVwiO1xuXG5mdW5jdGlvbiBNb3ZpZXNMaXN0KHsgc2hvd1JhdGluZ3MgfSkge1xuICBjb25zdCB7XG4gICAgZGF0YTogbW92aWVzRGF0YSxcbiAgICByZXF1ZXN0U3RhdHVzLFxuICAgIGVycm9yLFxuICAgIHVwZGF0ZVJlY29yZCxcbiAgfSA9IHVzZVJlcXVlc3REZWxheSgyMDAwLCBkYXRhKTtcblxuICBpZiAocmVxdWVzdFN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuRkFJTFVSRSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+XG4gICAgICAgIEVSUk9SOiA8Yj5sb2FkaW5nIE1vdmllIERhdGEgRmFpbGVkIHtlcnJvcn08L2I+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG1vdmllcy1saXN0XCI+XG4gICAgICA8UmVhY3RQbGFjZUhvbGRlclxuICAgICAgICB0eXBlPVwibWVkaWFcIlxuICAgICAgICByb3dzPXsyMH1cbiAgICAgICAgY2xhc3NOYW1lPVwibW92aWVzbGlzdC1wbGFjZWhvbGRlclwiXG4gICAgICAgIHJlYWR5PXtyZXF1ZXN0U3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5TVUNDRVNTfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIHttb3ZpZXNEYXRhLm1hcChmdW5jdGlvbiAobW92aWUpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxNb3ZpZVxuICAgICAgICAgICAgICAgIGtleT17bW92aWUuaWR9XG4gICAgICAgICAgICAgICAgbW92aWU9e21vdmllfVxuICAgICAgICAgICAgICAgIHNob3dSYXRpbmdzPXtzaG93UmF0aW5nc31cbiAgICAgICAgICAgICAgICBvbkZhdm9yaXRlVG9nZ2xlPXsoZG9uZUNhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgICAgICAgICB1cGRhdGVSZWNvcmQoXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5tb3ZpZSxcbiAgICAgICAgICAgICAgICAgICAgICBmYXZvcml0ZTogIW1vdmllLmZhdm9yaXRlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBkb25lQ2FsbGJhY2tcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9SZWFjdFBsYWNlSG9sZGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZXNMaXN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
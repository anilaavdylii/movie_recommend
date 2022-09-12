self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Movie.js":
/*!*********************************!*\
  !*** ./src/components/Movie.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_hp_Desktop_react_movie_recommend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts_MovieFilterContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../contexts/MovieFilterContext */ "./src/contexts/MovieFilterContext.js");
/* harmony import */ var _contexts_MovieContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../contexts/MovieContext */ "./src/contexts/MovieContext.js");
/* harmony import */ var _MovieDelete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MovieDelete */ "./src/components/MovieDelete.js");
/* harmony import */ var _MovieDelete__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_MovieDelete__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\hp\\Desktop\\react\\movie_recommend\\src\\components\\Movie.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$(),
    _s4 = $RefreshSig$(),
    _s5 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_hp_Desktop_react_movie_recommend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function Rating(_ref) {
  var Source = _ref.Source,
      Value = _ref.Value;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
    className: "rating w-100",
    children: [Source, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("strong", {
      children: ["Value: ", Value, "/10"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 16
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

_c = Rating;

function Ratings() {
  _s();

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_MovieFilterContext__WEBPACK_IMPORTED_MODULE_3__.MovieFilterContext),
      ratingValue = _useContext.ratingValue;

  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_MovieContext__WEBPACK_IMPORTED_MODULE_4__.MovieContext),
      movie = _useContext2.movie;

  var ratings = movie.ratings;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "ratingBox card h-250",
    children: ratings.filter(function (rating) {
      return rating.Value === ratingValue;
    }).map(function (rating) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "rating w-100",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Rating, _objectSpread({}, rating), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 13
        }, this)
      }, rating.id, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }, this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

_s(Ratings, "08kKuboviCTEQHvHvlkctYdGClM=");

_c2 = Ratings;

function MovieImage() {
  _s2();

  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_MovieContext__WEBPACK_IMPORTED_MODULE_4__.MovieContext),
      _useContext3$movie = _useContext3.movie,
      id = _useContext3$movie.id,
      title = _useContext3$movie.title;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "movie-img d-flex flex-row justify-content-center align-items-center h-300",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
      className: "contain-fit",
      src: "/images/movie-".concat(id, ".png"),
      width: "300",
      alt: "".concat(title)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, this);
}

_s2(MovieImage, "2gRXpkZVWX3l8xrvIa/EID8z8vQ=");

_c3 = MovieImage;

function MovieFavorite() {
  _s3();

  var _useContext4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_MovieContext__WEBPACK_IMPORTED_MODULE_4__.MovieContext),
      movie = _useContext4.movie,
      updateRecord = _useContext4.updateRecord;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      inTransition = _useState[0],
      setInTransition = _useState[1];

  function doneCallback() {
    setInTransition(false);
    console.log("In MovieFavorite:doneCallback    ".concat(new Date().getMilliseconds()));
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "action padB1",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
      onClick: function onClick() {
        setInTransition(true);
        updateRecord(_objectSpread(_objectSpread({}, movie), {}, {
          favorite: !movie.favorite
        }), doneCallback);
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("i", {
        className: movie.favorite === true ? "fa fa-star orange" : "fa fa-star-o orange"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, this), " ", "Favorite", " ", inTransition ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
        className: "fas fa-circle-notch fa-spin"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 11
      }, this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 5
  }, this);
}

_s3(MovieFavorite, "8phaYznZMJ2LnvF0jrVzz4EFu+M=");

_c4 = MovieFavorite;

function MovieDemographics() {
  _s4();

  var _useContext5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_MovieContext__WEBPACK_IMPORTED_MODULE_4__.MovieContext),
      movie = _useContext5.movie;

  var title = movie.title,
      released = movie.released,
      runtime = movie.runtime,
      summary = movie.summary,
      link = movie.link,
      favorite = movie.favorite;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "movie-info",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "d-flex justify-content-between mb-3",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
        className: "text-truncate w-200",
        children: [title, "  ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 20
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MovieFavorite, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        className: "card-link",
        children: [" ", released, "  ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 47
        }, this), " ", runtime, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 62
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 67
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
          href: link,
          target: "_blank",
          children: "Watch now on THEFLIXER\""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 72
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        className: "card-description",
        children: summary
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 90,
    columnNumber: 5
  }, this);
}

_s4(MovieDemographics, "ysQZXjBqQefGWWpZUifcTYCuUFc=");

_c5 = MovieDemographics;

function Movie(_ref2) {
  _s5();

  var movie = _ref2.movie,
      updateRecord = _ref2.updateRecord,
      insertRecord = _ref2.insertRecord,
      deleteRecord = _ref2.deleteRecord;

  var _useContext6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_MovieFilterContext__WEBPACK_IMPORTED_MODULE_3__.MovieFilterContext),
      showRatings = _useContext6.showRatings;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_contexts_MovieContext__WEBPACK_IMPORTED_MODULE_4__.MovieProvider, {
    movie: movie,
    updateRecord: updateRecord,
    insertRecord: insertRecord,
    deleteRecord: deleteRecord,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "card card-height p-4 mt-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MovieImage, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MovieDemographics, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 9
      }, this), showRatings === true ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Ratings, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 33
      }, this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((_MovieDelete__WEBPACK_IMPORTED_MODULE_5___default()), {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 113,
    columnNumber: 5
  }, this);
}

_s5(Movie, "TKTcEwFjlO0mfl35x7B4bMl4+lc=");

_c6 = Movie;
/* harmony default export */ __webpack_exports__["default"] = (Movie);

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "Rating");
$RefreshReg$(_c2, "Ratings");
$RefreshReg$(_c3, "MovieImage");
$RefreshReg$(_c4, "MovieFavorite");
$RefreshReg$(_c5, "MovieDemographics");
$RefreshReg$(_c6, "Movie");

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

/***/ "./src/components/MovieDelete.js":
/*!***************************************!*\
  !*** ./src/components/MovieDelete.js ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW92aWUuanMiXSwibmFtZXMiOlsiUmF0aW5nIiwiU291cmNlIiwiVmFsdWUiLCJSYXRpbmdzIiwidXNlQ29udGV4dCIsIk1vdmllRmlsdGVyQ29udGV4dCIsInJhdGluZ1ZhbHVlIiwiTW92aWVDb250ZXh0IiwibW92aWUiLCJyYXRpbmdzIiwiZmlsdGVyIiwicmF0aW5nIiwibWFwIiwiaWQiLCJNb3ZpZUltYWdlIiwidGl0bGUiLCJNb3ZpZUZhdm9yaXRlIiwidXBkYXRlUmVjb3JkIiwidXNlU3RhdGUiLCJpblRyYW5zaXRpb24iLCJzZXRJblRyYW5zaXRpb24iLCJkb25lQ2FsbGJhY2siLCJjb25zb2xlIiwibG9nIiwiRGF0ZSIsImdldE1pbGxpc2Vjb25kcyIsImZhdm9yaXRlIiwiTW92aWVEZW1vZ3JhcGhpY3MiLCJyZWxlYXNlZCIsInJ1bnRpbWUiLCJzdW1tYXJ5IiwibGluayIsIk1vdmllIiwiaW5zZXJ0UmVjb3JkIiwiZGVsZXRlUmVjb3JkIiwic2hvd1JhdGluZ3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxNQUFULE9BQW1DO0FBQUEsTUFBakJDLE1BQWlCLFFBQWpCQSxNQUFpQjtBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUztBQUNqQyxzQkFDRTtBQUFNLGFBQVMsRUFBQyxjQUFoQjtBQUFBLGVBQ0dELE1BREgsb0JBQ1c7QUFBQSw0QkFBZ0JDLEtBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0tBTlFGLE07O0FBUVQsU0FBU0csT0FBVCxHQUFtQjtBQUFBOztBQUFBLG9CQUNLQyxpREFBVSxDQUFDQyw0RUFBRCxDQURmO0FBQUEsTUFDVkMsV0FEVSxlQUNWQSxXQURVOztBQUFBLHFCQUVDRixpREFB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RDs7SUF0QlFILGlCOztNQUFBQSxpQjs7QUF3QlQsU0FBU0ssS0FBVCxRQUFvRTtBQUFBOztBQUFBLE1BQW5EeEIsS0FBbUQsU0FBbkRBLEtBQW1EO0FBQUEsTUFBNUNTLFlBQTRDLFNBQTVDQSxZQUE0QztBQUFBLE1BQTlCZ0IsWUFBOEIsU0FBOUJBLFlBQThCO0FBQUEsTUFBaEJDLFlBQWdCLFNBQWhCQSxZQUFnQjs7QUFBQSxxQkFDNUM5QixpREFBVSxDQUFDQyw0RUFBRCxDQURrQztBQUFBLE1BQzNEOEIsV0FEMkQsZ0JBQzNEQSxXQUQyRDs7QUFFbEUsc0JBQ0UsOERBQUMsaUVBQUQ7QUFBZSxTQUFLLEVBQUUzQixLQUF0QjtBQUE2QixnQkFBWSxFQUFFUyxZQUEzQztBQUF5RCxnQkFBWSxFQUFFZ0IsWUFBdkU7QUFBcUYsZ0JBQVksRUFBRUMsWUFBbkc7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQywyREFBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQywyQkFBZjtBQUFBLGdDQUNBLDhEQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEQSxlQUVFLDhEQUFDLGlCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFLR0MsV0FBVyxLQUFLLElBQWhCLGdCQUF1Qiw4REFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBdkIsR0FBcUMsSUFMeEMsZUFNRSw4REFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBWUQ7O0lBZFFILEs7O01BQUFBLEs7QUFnQlQsK0RBQWVBLEtBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWMwZjM4MWI2ODI3ZGYxYjNlYWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7TW92aWVGaWx0ZXJDb250ZXh0fSBmcm9tIFwiLi8uLi9jb250ZXh0cy9Nb3ZpZUZpbHRlckNvbnRleHRcIjtcclxuaW1wb3J0IHsgTW92aWVQcm92aWRlciwgTW92aWVDb250ZXh0IH0gZnJvbSBcIi4vLi4vY29udGV4dHMvTW92aWVDb250ZXh0XCJcclxuaW1wb3J0IE1vdmllRGVsZXRlIGZyb20gXCIuL01vdmllRGVsZXRlXCJcclxuXHJcbmZ1bmN0aW9uIFJhdGluZyh7IFNvdXJjZSwgVmFsdWUgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJyYXRpbmcgdy0xMDBcIj5cclxuICAgICAge1NvdXJjZX0gPHN0cm9uZz5WYWx1ZToge1ZhbHVlfS8xMDwvc3Ryb25nPlxyXG4gICAgPC9zcGFuPlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFJhdGluZ3MoKSB7XHJcbiAgY29uc3Qge3JhdGluZ1ZhbHVlfSA9IHVzZUNvbnRleHQoTW92aWVGaWx0ZXJDb250ZXh0KTtcclxuICBjb25zdCB7IG1vdmllIH0gPSB1c2VDb250ZXh0KE1vdmllQ29udGV4dCk7IFxyXG4gIGNvbnN0IHJhdGluZ3MgPSBtb3ZpZS5yYXRpbmdzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZ0JveCBjYXJkIGgtMjUwXCI+XHJcbiAgICAgIHtyYXRpbmdzLmZpbHRlcihmdW5jdGlvbihyYXRpbmcpe1xyXG4gICAgICAgIHJldHVybiByYXRpbmcuVmFsdWUgPT09IHJhdGluZ1ZhbHVlO1xyXG4gICAgICB9KVxyXG4gICAgICAubWFwKGZ1bmN0aW9uKHJhdGluZyl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmcgdy0xMDBcIiBrZXk9e3JhdGluZy5pZH0+XHJcbiAgICAgICAgICAgIDxSYXRpbmcgey4uLnJhdGluZ30vPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgICB9KVxyXG4gICAgICB9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBNb3ZpZUltYWdlKCkge1xyXG4gIGNvbnN0IHttb3ZpZToge2lkLCB0aXRsZX19PSB1c2VDb250ZXh0KE1vdmllQ29udGV4dCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWUtaW1nIGQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBoLTMwMFwiPlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbi1maXRcIlxyXG4gICAgICAgIHNyYz17YC9pbWFnZXMvbW92aWUtJHtpZH0ucG5nYH1cclxuICAgICAgICB3aWR0aD1cIjMwMFwiXHJcbiAgICAgICAgYWx0PXtgJHt0aXRsZX1gfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gTW92aWVGYXZvcml0ZSgpIHtcclxuICBjb25zdCB7bW92aWUsIHVwZGF0ZVJlY29yZH0gPSB1c2VDb250ZXh0KE1vdmllQ29udGV4dCk7XHJcbiAgY29uc3QgW2luVHJhbnNpdGlvbiwgc2V0SW5UcmFuc2l0aW9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBmdW5jdGlvbiBkb25lQ2FsbGJhY2soKSB7XHJcbiAgICBzZXRJblRyYW5zaXRpb24oZmFsc2UpO1xyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgIGBJbiBNb3ZpZUZhdm9yaXRlOmRvbmVDYWxsYmFjayAgICAke25ldyBEYXRlKCkuZ2V0TWlsbGlzZWNvbmRzKCl9YFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbiBwYWRCMVwiPlxyXG4gICAgICA8c3BhblxyXG4gICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHNldEluVHJhbnNpdGlvbih0cnVlKTtcclxuICAgICAgICAgdXBkYXRlUmVjb3JkKFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAuLi5tb3ZpZSwgZmF2b3JpdGU6IW1vdmllLmZhdm9yaXRlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGRvbmVDYWxsYmFja1xyXG4gICAgICAgICApXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxpXHJcbiAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICBtb3ZpZS5mYXZvcml0ZSA9PT0gdHJ1ZSA/IFwiZmEgZmEtc3RhciBvcmFuZ2VcIiA6IFwiZmEgZmEtc3Rhci1vIG9yYW5nZVwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgLz57XCIgXCJ9XHJcbiAgICAgICAgRmF2b3JpdGV7XCIgXCJ9XHJcbiAgICAgICAge2luVHJhbnNpdGlvbiA/IChcclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhcyBmYS1jaXJjbGUtbm90Y2ggZmEtc3BpblwiPjwvc3Bhbj5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gTW92aWVEZW1vZ3JhcGhpY3MoKSB7XHJcbiAgY29uc3QgeyBtb3ZpZSB9ID0gdXNlQ29udGV4dCggTW92aWVDb250ZXh0ICk7XHJcbiAgY29uc3Qge3RpdGxlLCByZWxlYXNlZCwgcnVudGltZSwgc3VtbWFyeSwgbGluaywgZmF2b3JpdGV9ID0gbW92aWU7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWUtaW5mb1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtYi0zXCI+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtdHJ1bmNhdGUgdy0yMDBcIj5cclxuICAgICAgICAgIHt0aXRsZX0gIDxici8+IFxyXG4gICAgICAgIDwvaDM+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TW92aWVGYXZvcml0ZSAgLz5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLWxpbmtcIj4ge3JlbGVhc2VkfSAgPGJyLz4ge3J1bnRpbWV9PGJyLz48YnIvPjxhIGhyZWY9e2xpbmt9IHRhcmdldD1cIl9ibGFua1wiPldhdGNoIG5vdyBvbiBUSEVGTElYRVJcIjwvYT48L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YnIvPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtZGVzY3JpcHRpb25cIj57c3VtbWFyeX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YnIvPlxyXG4gICAgICBcclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE1vdmllKHsgbW92aWUsIHVwZGF0ZVJlY29yZCwgaW5zZXJ0UmVjb3JkLCBkZWxldGVSZWNvcmQgfSkge1xyXG4gIGNvbnN0IHtzaG93UmF0aW5nc30gPSB1c2VDb250ZXh0KE1vdmllRmlsdGVyQ29udGV4dCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxNb3ZpZVByb3ZpZGVyIG1vdmllPXttb3ZpZX0gdXBkYXRlUmVjb3JkPXt1cGRhdGVSZWNvcmR9IGluc2VydFJlY29yZD17aW5zZXJ0UmVjb3JkfSBkZWxldGVSZWNvcmQ9e2RlbGV0ZVJlY29yZH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNCBjb2wtc20tMTIgY29sLXhzLTEyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtaGVpZ2h0IHAtNCBtdC00XCI+XHJcbiAgICAgICAgPE1vdmllSW1hZ2UgIC8+XHJcbiAgICAgICAgICA8TW92aWVEZW1vZ3JhcGhpY3MgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge3Nob3dSYXRpbmdzID09PSB0cnVlID8gPFJhdGluZ3MgLz4gOiBudWxsfVxyXG4gICAgICAgIDxNb3ZpZURlbGV0ZS8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Nb3ZpZVByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vdmllO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
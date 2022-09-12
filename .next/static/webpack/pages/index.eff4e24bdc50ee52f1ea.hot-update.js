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
      lineNumber: 8,
      columnNumber: 16
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
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
          lineNumber: 25,
          columnNumber: 13
        }, this)
      }, rating.id, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }, this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
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
      lineNumber: 38,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
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
        lineNumber: 71,
        columnNumber: 9
      }, this), " ", "Favorite", " ", inTransition ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
        className: "fas fa-circle-notch fa-spin"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 11
      }, this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 59,
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
          lineNumber: 92,
          columnNumber: 20
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MovieImage, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
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
    lineNumber: 89,
    columnNumber: 5
  }, this);
}

_s4(MovieDemographics, "65hBadU1X5wvzZWIjn3xw9spZ4Q=");

_c5 = MovieDemographics;

function Movie(_ref2) {
  _s5();

  var movie = _ref2.movie,
      updateRecord = _ref2.updateRecord;
  var id = movie.id,
      title = movie.title,
      year = movie.year,
      ratings = movie.ratings;

  var _useContext6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_MovieFilterContext__WEBPACK_IMPORTED_MODULE_3__.MovieFilterContext),
      showRatings = _useContext6.showRatings;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_contexts_MovieContext__WEBPACK_IMPORTED_MODULE_4__.MovieProvider, {
    movie: movie,
    updateRecord: updateRecord,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "card card-height p-4 mt-4",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MovieDemographics, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }, this), showRatings === true ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Ratings, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 33
      }, this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 114,
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

/***/ "./src/contexts/MovieContext.js":
/*!**************************************!*\
  !*** ./src/contexts/MovieContext.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MovieContext": function() { return /* binding */ MovieContext; },
/* harmony export */   "MovieProvider": function() { return /* binding */ MovieProvider; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\hp\\Desktop\\react\\movie_recommend\\src\\contexts\\MovieContext.js";

var MovieContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();

function MovieProvider(_ref) {
  var children = _ref.children,
      movie = _ref.movie,
      updateRecord = _ref.updateRecord;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MovieContext.Provider, {
    value: "{{movie, updateRecord}}",
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, this);
}

_c = MovieProvider;


var _c;

$RefreshReg$(_c, "MovieProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW92aWUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZXh0cy9Nb3ZpZUNvbnRleHQuanMiXSwibmFtZXMiOlsiUmF0aW5nIiwiU291cmNlIiwiVmFsdWUiLCJSYXRpbmdzIiwidXNlQ29udGV4dCIsIk1vdmllRmlsdGVyQ29udGV4dCIsInJhdGluZ1ZhbHVlIiwiTW92aWVDb250ZXh0IiwibW92aWUiLCJyYXRpbmdzIiwiZmlsdGVyIiwicmF0aW5nIiwibWFwIiwiaWQiLCJNb3ZpZUltYWdlIiwidGl0bGUiLCJNb3ZpZUZhdm9yaXRlIiwidXBkYXRlUmVjb3JkIiwidXNlU3RhdGUiLCJpblRyYW5zaXRpb24iLCJzZXRJblRyYW5zaXRpb24iLCJkb25lQ2FsbGJhY2siLCJjb25zb2xlIiwibG9nIiwiRGF0ZSIsImdldE1pbGxpc2Vjb25kcyIsImZhdm9yaXRlIiwiTW92aWVEZW1vZ3JhcGhpY3MiLCJyZWxlYXNlZCIsInJ1bnRpbWUiLCJzdW1tYXJ5IiwibGluayIsIk1vdmllIiwieWVhciIsInNob3dSYXRpbmdzIiwiY3JlYXRlQ29udGV4dCIsIk1vdmllUHJvdmlkZXIiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxPQUFtQztBQUFBLE1BQWpCQyxNQUFpQixRQUFqQkEsTUFBaUI7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7QUFDakMsc0JBQ0U7QUFBTSxhQUFTLEVBQUMsY0FBaEI7QUFBQSxlQUNHRCxNQURILG9CQUNXO0FBQUEsNEJBQWdCQyxLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEOztLQU5RRixNOztBQVFULFNBQVNHLE9BQVQsR0FBbUI7QUFBQTs7QUFBQSxvQkFDS0MsaURBQVUs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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0hBO0FBRUEsSUFBTXpCLFlBQVksZ0JBQUc0QixvREFBYSxFQUFsQzs7QUFFQSxTQUFTQyxhQUFULE9BQXVEO0FBQUEsTUFBL0JDLFFBQStCLFFBQS9CQSxRQUErQjtBQUFBLE1BQXJCN0IsS0FBcUIsUUFBckJBLEtBQXFCO0FBQUEsTUFBZFMsWUFBYyxRQUFkQSxZQUFjO0FBQ25ELHNCQUNJLDhEQUFDLFlBQUQsQ0FBYyxRQUFkO0FBQXVCLFNBQUssRUFBQyx5QkFBN0I7QUFBQSxjQUNLb0I7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFLSDs7S0FOUUQsYTtBQVFUIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmVmZjRlMjRiZGM1MGVlNTJmMWVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge01vdmllRmlsdGVyQ29udGV4dH0gZnJvbSBcIi4vLi4vY29udGV4dHMvTW92aWVGaWx0ZXJDb250ZXh0XCI7XHJcbmltcG9ydCB7IE1vdmllUHJvdmlkZXIsIE1vdmllQ29udGV4dCB9IGZyb20gXCIuLy4uL2NvbnRleHRzL01vdmllQ29udGV4dFwiXHJcblxyXG5mdW5jdGlvbiBSYXRpbmcoeyBTb3VyY2UsIFZhbHVlIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwicmF0aW5nIHctMTAwXCI+XHJcbiAgICAgIHtTb3VyY2V9IDxzdHJvbmc+VmFsdWU6IHtWYWx1ZX0vMTA8L3N0cm9uZz5cclxuICAgIDwvc3Bhbj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBSYXRpbmdzKCkge1xyXG4gIGNvbnN0IHtyYXRpbmdWYWx1ZX0gPSB1c2VDb250ZXh0KE1vdmllRmlsdGVyQ29udGV4dCk7XHJcbiAgY29uc3QgeyBtb3ZpZSB9ID0gdXNlQ29udGV4dChNb3ZpZUNvbnRleHQpOyBcclxuICBjb25zdCByYXRpbmdzID0gbW92aWUucmF0aW5ncztcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmdCb3ggY2FyZCBoLTI1MFwiPlxyXG4gICAgICB7cmF0aW5ncy5maWx0ZXIoZnVuY3Rpb24ocmF0aW5nKXtcclxuICAgICAgICByZXR1cm4gcmF0aW5nLlZhbHVlID09PSByYXRpbmdWYWx1ZTtcclxuICAgICAgfSlcclxuICAgICAgLm1hcChmdW5jdGlvbihyYXRpbmcpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nIHctMTAwXCIga2V5PXtyYXRpbmcuaWR9PlxyXG4gICAgICAgICAgICA8UmF0aW5nIHsuLi5yYXRpbmd9Lz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gTW92aWVJbWFnZSgpIHtcclxuICBjb25zdCB7bW92aWU6IHtpZCwgdGl0bGV9fT0gdXNlQ29udGV4dChNb3ZpZUNvbnRleHQpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdmllLWltZyBkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgaC0zMDBcIj5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW4tZml0XCJcclxuICAgICAgICBzcmM9e2AvaW1hZ2VzL21vdmllLSR7aWR9LnBuZ2B9XHJcbiAgICAgICAgd2lkdGg9XCIzMDBcIlxyXG4gICAgICAgIGFsdD17YCR7dGl0bGV9YH1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE1vdmllRmF2b3JpdGUoKSB7XHJcbiAgY29uc3Qge21vdmllLCB1cGRhdGVSZWNvcmR9ID0gdXNlQ29udGV4dChNb3ZpZUNvbnRleHQpO1xyXG4gIGNvbnN0IFtpblRyYW5zaXRpb24sIHNldEluVHJhbnNpdGlvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgZnVuY3Rpb24gZG9uZUNhbGxiYWNrKCkge1xyXG4gICAgc2V0SW5UcmFuc2l0aW9uKGZhbHNlKTtcclxuICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICBgSW4gTW92aWVGYXZvcml0ZTpkb25lQ2FsbGJhY2sgICAgJHtuZXcgRGF0ZSgpLmdldE1pbGxpc2Vjb25kcygpfWBcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb24gcGFkQjFcIj5cclxuICAgICAgPHNwYW5cclxuICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBzZXRJblRyYW5zaXRpb24odHJ1ZSk7XHJcbiAgICAgICAgIHVwZGF0ZVJlY29yZChcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgLi4ubW92aWUsIGZhdm9yaXRlOiFtb3ZpZS5mYXZvcml0ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBkb25lQ2FsbGJhY2tcclxuICAgICAgICAgKVxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8aVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgbW92aWUuZmF2b3JpdGUgPT09IHRydWUgPyBcImZhIGZhLXN0YXIgb3JhbmdlXCIgOiBcImZhIGZhLXN0YXItbyBvcmFuZ2VcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIC8+e1wiIFwifVxyXG4gICAgICAgIEZhdm9yaXRle1wiIFwifVxyXG4gICAgICAgIHtpblRyYW5zaXRpb24gPyAoXHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYXMgZmEtY2lyY2xlLW5vdGNoIGZhLXNwaW5cIj48L3NwYW4+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE1vdmllRGVtb2dyYXBoaWNzKCkge1xyXG4gIGNvbnN0IHttb3ZpZX0gPSB1c2VDb250ZXh0KE1vdmllQ29udGV4dCk7XHJcbiAgY29uc3Qge3RpdGxlLCByZWxlYXNlZCwgcnVudGltZSwgc3VtbWFyeSwgbGluaywgZmF2b3JpdGV9ID0gbW92aWU7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWUtaW5mb1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtYi0zXCI+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtdHJ1bmNhdGUgdy0yMDBcIj5cclxuICAgICAgICAgIHt0aXRsZX0gIDxici8+IFxyXG4gICAgICAgIDwvaDM+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TW92aWVJbWFnZSAgLz5cclxuICAgICAgPE1vdmllRmF2b3JpdGUgIC8+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC1saW5rXCI+IHtyZWxlYXNlZH0gIDxici8+IHtydW50aW1lfTxici8+PGJyLz48YSBocmVmPXtsaW5rfSB0YXJnZXQ9XCJfYmxhbmtcIj5XYXRjaCBub3cgb24gVEhFRkxJWEVSXCI8L2E+PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJyLz5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLWRlc2NyaXB0aW9uXCI+e3N1bW1hcnl9PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJyLz5cclxuICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBNb3ZpZSh7IG1vdmllLCB1cGRhdGVSZWNvcmQgfSkge1xyXG4gIGNvbnN0IHsgaWQsIHRpdGxlLCB5ZWFyLCByYXRpbmdzIH0gPSBtb3ZpZTtcclxuICBjb25zdCB7c2hvd1JhdGluZ3N9ID0gdXNlQ29udGV4dChNb3ZpZUZpbHRlckNvbnRleHQpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8TW92aWVQcm92aWRlciBtb3ZpZT17bW92aWV9IHVwZGF0ZVJlY29yZD17dXBkYXRlUmVjb3JkfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy00IGNvbC1zbS0xMiBjb2wteHMtMTJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1oZWlnaHQgcC00IG10LTRcIj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPE1vdmllRGVtb2dyYXBoaWNzICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtzaG93UmF0aW5ncyA9PT0gdHJ1ZSA/IDxSYXRpbmdzIC8+IDogbnVsbH1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L01vdmllUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW92aWU7XHJcbiIsImltcG9ydCB7Y3JlYXRlQ29udGV4dH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBNb3ZpZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5mdW5jdGlvbiBNb3ZpZVByb3ZpZGVyKHtjaGlsZHJlbiwgbW92aWUsIHVwZGF0ZVJlY29yZH0pe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxNb3ZpZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9XCJ7e21vdmllLCB1cGRhdGVSZWNvcmR9fVwiPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9Nb3ZpZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgeyBNb3ZpZUNvbnRleHQsIE1vdmllUHJvdmlkZXIgfTsiXSwic291cmNlUm9vdCI6IiJ9
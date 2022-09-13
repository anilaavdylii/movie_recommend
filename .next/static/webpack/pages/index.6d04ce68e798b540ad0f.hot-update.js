self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Movie.js":
/*!*********************************!*\
  !*** ./src/components/Movie.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_hp_Desktop_react_movie_recommend_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var C_Users_hp_Desktop_react_movie_recommend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _contexts_MovieFilterContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../contexts/MovieFilterContext */ "./src/contexts/MovieFilterContext.js");
/* harmony import */ var _contexts_MovieContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../contexts/MovieContext */ "./src/contexts/MovieContext.js");
/* harmony import */ var _MovieDelete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MovieDelete */ "./src/components/MovieDelete.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\hp\\Desktop\\react\\movie_recommend\\src\\components\\Movie.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$(),
    _s4 = $RefreshSig$(),
    _s5 = $RefreshSig$(),
    _s6 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_hp_Desktop_react_movie_recommend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function Rating(_ref) {
  var Source = _ref.Source,
      Value = _ref.Value;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
    className: "rating w-100",
    children: [Source, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("strong", {
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

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_contexts_MovieFilterContext__WEBPACK_IMPORTED_MODULE_4__.MovieFilterContext),
      ratingValue = _useContext.ratingValue;

  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_contexts_MovieContext__WEBPACK_IMPORTED_MODULE_5__.MovieContext),
      movie = _useContext2.movie;

  var ratings = movie.ratings;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "ratingBox card h-250",
    children: ratings.filter(function (rating) {
      return rating.Value === ratingValue;
    }).map(function (rating) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "rating w-100",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Rating, _objectSpread({}, rating), void 0, false, {
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

function ImageWithFallback(_ref2) {
  _s2();

  var src = _ref2.src,
      props = (0,C_Users_hp_Desktop_react_movie_recommend_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.default)(_ref2, ["src"]);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      error = _useState[0],
      setError = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(src),
      imgSrc = _useState2[0],
      setImgSrc = _useState2[1];

  function onError() {
    if (!error) {
      setImgSrc("/images/movie-99999.png");
      setError(true);
    }
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", _objectSpread(_objectSpread({
    src: imgSrc
  }, props), {}, {
    onError: onError
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 10
  }, this);
}

_s2(ImageWithFallback, "R4UhDpTis3V59uQlUhTj6vAWrfc=");

_c3 = ImageWithFallback;

function MovieImage() {
  _s3();

  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_contexts_MovieContext__WEBPACK_IMPORTED_MODULE_5__.MovieContext),
      _useContext3$movie = _useContext3.movie,
      id = _useContext3$movie.id,
      title = _useContext3$movie.title;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "movie-img d-flex flex-row justify-content-center align-items-center h-300",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(ImageWithFallback, {
      className: "contain-fit",
      src: "/images/movie-".concat(id, ".png"),
      width: "300",
      alt: "".concat(title)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 5
  }, this);
}

_s3(MovieImage, "2gRXpkZVWX3l8xrvIa/EID8z8vQ=");

_c4 = MovieImage;

function MovieFavorite() {
  _s4();

  var _useContext4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_contexts_MovieContext__WEBPACK_IMPORTED_MODULE_5__.MovieContext),
      movie = _useContext4.movie,
      updateRecord = _useContext4.updateRecord;

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      inTransition = _useState3[0],
      setInTransition = _useState3[1];

  function doneCallback() {
    setInTransition(false);
    console.log("In MovieFavorite:doneCallback    ".concat(new Date().getMilliseconds()));
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "action padB1",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
      onClick: function onClick() {
        setInTransition(true);
        updateRecord(_objectSpread(_objectSpread({}, movie), {}, {
          favorite: !movie.favorite
        }), doneCallback);
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
        className: movie.favorite === true ? "fa fa-star orange" : "fa fa-star-o orange"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, this), " ", "Favorite", " ", inTransition ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
        className: "fas fa-circle-notch fa-spin"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 11
      }, this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 5
  }, this);
}

_s4(MovieFavorite, "8phaYznZMJ2LnvF0jrVzz4EFu+M=");

_c5 = MovieFavorite;

function MovieDemographics() {
  _s5();

  var _useContext5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_contexts_MovieContext__WEBPACK_IMPORTED_MODULE_5__.MovieContext),
      movie = _useContext5.movie;

  var title = movie.title,
      released = movie.released,
      runtime = movie.runtime,
      summary = movie.summary,
      link = movie.link,
      favorite = movie.favorite;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "movie-info",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "d-flex justify-content-between mb-3",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
        className: "text-truncate w-200",
        children: [title, "  ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 20
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(MovieFavorite, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
        className: "card-link",
        children: [" ", released, "  ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 47
        }, this), " ", runtime, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 62
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 67
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
          href: link,
          target: "_blank",
          children: "Watch now on THEFLIXER\""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 72
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
        className: "card-description",
        children: summary
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 105,
    columnNumber: 5
  }, this);
}

_s5(MovieDemographics, "ysQZXjBqQefGWWpZUifcTYCuUFc=");

_c6 = MovieDemographics;
var Movie = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(_c7 = _s6(function Movie(_ref3) {
  _s6();

  var movie = _ref3.movie,
      updateRecord = _ref3.updateRecord,
      insertRecord = _ref3.insertRecord,
      deleteRecord = _ref3.deleteRecord;

  var _useContext6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_contexts_MovieFilterContext__WEBPACK_IMPORTED_MODULE_4__.MovieFilterContext),
      showRatings = _useContext6.showRatings;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_contexts_MovieContext__WEBPACK_IMPORTED_MODULE_5__.MovieProvider, {
    movie: movie,
    updateRecord: updateRecord,
    insertRecord: insertRecord,
    deleteRecord: deleteRecord,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "card card-height p-4 mt-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(MovieImage, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(MovieDemographics, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 11
      }, this), showRatings === true ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Ratings, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 35
      }, this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_MovieDelete__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 128,
    columnNumber: 7
  }, this);
}, "TKTcEwFjlO0mfl35x7B4bMl4+lc="));
_c8 = Movie;

function areEqualMovie(prevProps, nextProps) {
  return prevProps.movie;
}

/* harmony default export */ __webpack_exports__["default"] = (Movie);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;

$RefreshReg$(_c, "Rating");
$RefreshReg$(_c2, "Ratings");
$RefreshReg$(_c3, "ImageWithFallback");
$RefreshReg$(_c4, "MovieImage");
$RefreshReg$(_c5, "MovieFavorite");
$RefreshReg$(_c6, "MovieDemographics");
$RefreshReg$(_c7, "Movie$memo");
$RefreshReg$(_c8, "Movie");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW92aWUuanMiXSwibmFtZXMiOlsiUmF0aW5nIiwiU291cmNlIiwiVmFsdWUiLCJSYXRpbmdzIiwidXNlQ29udGV4dCIsIk1vdmllRmlsdGVyQ29udGV4dCIsInJhdGluZ1ZhbHVlIiwiTW92aWVDb250ZXh0IiwibW92aWUiLCJyYXRpbmdzIiwiZmlsdGVyIiwicmF0aW5nIiwibWFwIiwiaWQiLCJJbWFnZVdpdGhGYWxsYmFjayIsInNyYyIsInByb3BzIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwiaW1nU3JjIiwic2V0SW1nU3JjIiwib25FcnJvciIsIk1vdmllSW1hZ2UiLCJ0aXRsZSIsIk1vdmllRmF2b3JpdGUiLCJ1cGRhdGVSZWNvcmQiLCJpblRyYW5zaXRpb24iLCJzZXRJblRyYW5zaXRpb24iLCJkb25lQ2FsbGJhY2siLCJjb25zb2xlIiwibG9nIiwiRGF0ZSIsImdldE1pbGxpc2Vjb25kcyIsImZhdm9yaXRlIiwiTW92aWVEZW1vZ3JhcGhpY3MiLCJyZWxlYXNlZCIsInJ1bnRpbWUiLCJzdW1tYXJ5IiwibGluayIsIk1vdmllIiwibWVtbyIsImluc2VydFJlY29yZCIsImRlbGV0ZVJlY29yZCIsInNob3dSYXRpbmdzIiwiYXJlRXF1YWxNb3ZpZSIsInByZXZQcm9wcyIsIm5leHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxPQUFtQztBQUFBLE1BQWpCQyxNQUFpQixRQUFqQkEsTUFBaUI7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7QUFDakMsc0JBQ0U7QUFBTSxhQUFTLEVBQUMsY0FBaEI7QUFBQSxlQUNHRCxNQURILG9CQUNXO0FBQUEsNEJBQWdCQyxLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFB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REFBQyxpRUFBRDtBQUFlLFNBQUssRUFBRXBDLEtBQXRCO0FBQTZCLGdCQUFZLEVBQUVrQixZQUEzQztBQUF5RCxnQkFBWSxFQUFFZ0IsWUFBdkU7QUFBcUYsZ0JBQVksRUFBRUMsWUFBbkc7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQywyREFBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQywyQkFBZjtBQUFBLGdDQUNBLDhEQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEQSxlQUVFLDhEQUFDLGlCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFLR0MsV0FBVyxLQUFLLElBQWhCLGdCQUF1Qiw4REFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBdkIsR0FBcUMsSUFMeEMsZUFNRSw4REFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBWUQsQ0FkZSxrQ0FBbEI7TUFBTUosSzs7QUFpQk4sU0FBU0ssYUFBVCxDQUF1QkMsU0FBdkIsRUFBa0NDLFNBQWxDLEVBQTRDO0FBQzFDLFNBQU9ELFNBQVMsQ0FBQ3RDLEtBQWpCO0FBQ0Q7O0FBR0QsK0RBQWVnQyxLQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjZkMDRjZTY4ZTc5OGI1NDBhZDBmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIG1lbW99IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge01vdmllRmlsdGVyQ29udGV4dH0gZnJvbSBcIi4vLi4vY29udGV4dHMvTW92aWVGaWx0ZXJDb250ZXh0XCI7XHJcbmltcG9ydCB7IE1vdmllUHJvdmlkZXIsIE1vdmllQ29udGV4dCB9IGZyb20gXCIuLy4uL2NvbnRleHRzL01vdmllQ29udGV4dFwiXHJcbmltcG9ydCBNb3ZpZURlbGV0ZSBmcm9tIFwiLi9Nb3ZpZURlbGV0ZVwiXHJcblxyXG5mdW5jdGlvbiBSYXRpbmcoeyBTb3VyY2UsIFZhbHVlIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwicmF0aW5nIHctMTAwXCI+XHJcbiAgICAgIHtTb3VyY2V9IDxzdHJvbmc+VmFsdWU6IHtWYWx1ZX0vMTA8L3N0cm9uZz5cclxuICAgIDwvc3Bhbj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBSYXRpbmdzKCkge1xyXG4gIGNvbnN0IHtyYXRpbmdWYWx1ZX0gPSB1c2VDb250ZXh0KE1vdmllRmlsdGVyQ29udGV4dCk7XHJcbiAgY29uc3QgeyBtb3ZpZSB9ID0gdXNlQ29udGV4dChNb3ZpZUNvbnRleHQpOyBcclxuICBjb25zdCByYXRpbmdzID0gbW92aWUucmF0aW5ncztcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmdCb3ggY2FyZCBoLTI1MFwiPlxyXG4gICAgICB7cmF0aW5ncy5maWx0ZXIoZnVuY3Rpb24ocmF0aW5nKXtcclxuICAgICAgICByZXR1cm4gcmF0aW5nLlZhbHVlID09PSByYXRpbmdWYWx1ZTtcclxuICAgICAgfSlcclxuICAgICAgLm1hcChmdW5jdGlvbihyYXRpbmcpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nIHctMTAwXCIga2V5PXtyYXRpbmcuaWR9PlxyXG4gICAgICAgICAgICA8UmF0aW5nIHsuLi5yYXRpbmd9Lz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gSW1hZ2VXaXRoRmFsbGJhY2soeyBzcmMsIC4uLnByb3BzIH0pIHtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaW1nU3JjLCBzZXRJbWdTcmNdID0gdXNlU3RhdGUoc3JjKTtcclxuXHJcbiAgZnVuY3Rpb24gb25FcnJvcigpIHtcclxuICAgIGlmICghZXJyb3IpIHtcclxuICAgICAgc2V0SW1nU3JjKFwiL2ltYWdlcy9tb3ZpZS05OTk5OS5wbmdcIik7XHJcbiAgICAgIHNldEVycm9yKHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIDxpbWcgc3JjPXtpbWdTcmN9IHsuLi5wcm9wc30gb25FcnJvcj17b25FcnJvcn0gLz47XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBNb3ZpZUltYWdlKCkge1xyXG4gIGNvbnN0IHttb3ZpZToge2lkLCB0aXRsZX19PSB1c2VDb250ZXh0KE1vdmllQ29udGV4dCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWUtaW1nIGQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBoLTMwMFwiPlxyXG4gICAgICA8SW1hZ2VXaXRoRmFsbGJhY2tcclxuICAgICAgICBjbGFzc05hbWU9XCJjb250YWluLWZpdFwiXHJcbiAgICAgICAgc3JjPXtgL2ltYWdlcy9tb3ZpZS0ke2lkfS5wbmdgfVxyXG4gICAgICAgIHdpZHRoPVwiMzAwXCJcclxuICAgICAgICBhbHQ9e2Ake3RpdGxlfWB9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBNb3ZpZUZhdm9yaXRlKCkge1xyXG4gIGNvbnN0IHttb3ZpZSwgdXBkYXRlUmVjb3JkfSA9IHVzZUNvbnRleHQoTW92aWVDb250ZXh0KTtcclxuICBjb25zdCBbaW5UcmFuc2l0aW9uLCBzZXRJblRyYW5zaXRpb25dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGZ1bmN0aW9uIGRvbmVDYWxsYmFjaygpIHtcclxuICAgIHNldEluVHJhbnNpdGlvbihmYWxzZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgYEluIE1vdmllRmF2b3JpdGU6ZG9uZUNhbGxiYWNrICAgICR7bmV3IERhdGUoKS5nZXRNaWxsaXNlY29uZHMoKX1gXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uIHBhZEIxXCI+XHJcbiAgICAgIDxzcGFuXHJcbiAgICAgICAgb25DbGljaz17ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgc2V0SW5UcmFuc2l0aW9uKHRydWUpO1xyXG4gICAgICAgICB1cGRhdGVSZWNvcmQoXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIC4uLm1vdmllLCBmYXZvcml0ZTohbW92aWUuZmF2b3JpdGUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZG9uZUNhbGxiYWNrXHJcbiAgICAgICAgIClcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGlcclxuICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgIG1vdmllLmZhdm9yaXRlID09PSB0cnVlID8gXCJmYSBmYS1zdGFyIG9yYW5nZVwiIDogXCJmYSBmYS1zdGFyLW8gb3JhbmdlXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICAvPntcIiBcIn1cclxuICAgICAgICBGYXZvcml0ZXtcIiBcIn1cclxuICAgICAgICB7aW5UcmFuc2l0aW9uID8gKFxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmFzIGZhLWNpcmNsZS1ub3RjaCBmYS1zcGluXCI+PC9zcGFuPlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBNb3ZpZURlbW9ncmFwaGljcygpIHtcclxuICBjb25zdCB7IG1vdmllIH0gPSB1c2VDb250ZXh0KCBNb3ZpZUNvbnRleHQgKTtcclxuICBjb25zdCB7dGl0bGUsIHJlbGVhc2VkLCBydW50aW1lLCBzdW1tYXJ5LCBsaW5rLCBmYXZvcml0ZX0gPSBtb3ZpZTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZS1pbmZvXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG1iLTNcIj5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC10cnVuY2F0ZSB3LTIwMFwiPlxyXG4gICAgICAgICAge3RpdGxlfSAgPGJyLz4gXHJcbiAgICAgICAgPC9oMz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxNb3ZpZUZhdm9yaXRlICAvPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtbGlua1wiPiB7cmVsZWFzZWR9ICA8YnIvPiB7cnVudGltZX08YnIvPjxici8+PGEgaHJlZj17bGlua30gdGFyZ2V0PVwiX2JsYW5rXCI+V2F0Y2ggbm93IG9uIFRIRUZMSVhFUlwiPC9hPjwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxici8+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC1kZXNjcmlwdGlvblwiPntzdW1tYXJ5fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxici8+XHJcbiAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgTW92aWUgPSBtZW1vKGZ1bmN0aW9uIE1vdmllKHsgbW92aWUsIHVwZGF0ZVJlY29yZCwgaW5zZXJ0UmVjb3JkLCBkZWxldGVSZWNvcmQgfSkge1xyXG4gICAgY29uc3Qge3Nob3dSYXRpbmdzfSA9IHVzZUNvbnRleHQoTW92aWVGaWx0ZXJDb250ZXh0KTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxNb3ZpZVByb3ZpZGVyIG1vdmllPXttb3ZpZX0gdXBkYXRlUmVjb3JkPXt1cGRhdGVSZWNvcmR9IGluc2VydFJlY29yZD17aW5zZXJ0UmVjb3JkfSBkZWxldGVSZWNvcmQ9e2RlbGV0ZVJlY29yZH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy00IGNvbC1zbS0xMiBjb2wteHMtMTJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWhlaWdodCBwLTQgbXQtNFwiPlxyXG4gICAgICAgICAgPE1vdmllSW1hZ2UgIC8+XHJcbiAgICAgICAgICAgIDxNb3ZpZURlbW9ncmFwaGljcyAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge3Nob3dSYXRpbmdzID09PSB0cnVlID8gPFJhdGluZ3MgLz4gOiBudWxsfVxyXG4gICAgICAgICAgPE1vdmllRGVsZXRlLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Nb3ZpZVByb3ZpZGVyPlxyXG4gICAgKTtcclxuICB9XHJcbilcclxuXHJcbmZ1bmN0aW9uIGFyZUVxdWFsTW92aWUocHJldlByb3BzLCBuZXh0UHJvcHMpe1xyXG4gIHJldHVybihwcmV2UHJvcHMubW92aWUpXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3ZpZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
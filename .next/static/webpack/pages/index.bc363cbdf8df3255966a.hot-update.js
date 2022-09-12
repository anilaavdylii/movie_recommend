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

  return;

  /*#__PURE__*/
  (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", _objectSpread(_objectSpread({
    src: imgSrc
  }, props), {}, {
    onError: onError
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 3
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
      lineNumber: 50,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
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
        lineNumber: 83,
        columnNumber: 9
      }, this), " ", "Favorite", " ", inTransition ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
        className: "fas fa-circle-notch fa-spin"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 11
      }, this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 71,
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
          lineNumber: 104,
          columnNumber: 20
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(MovieFavorite, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
        className: "card-link",
        children: [" ", released, "  ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 47
        }, this), " ", runtime, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 62
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 67
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
          href: link,
          target: "_blank",
          children: "Watch now on THEFLIXER\""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 72
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
        className: "card-description",
        children: summary
      }, void 0, false, {
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
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 101,
    columnNumber: 5
  }, this);
}

_s5(MovieDemographics, "ysQZXjBqQefGWWpZUifcTYCuUFc=");

_c6 = MovieDemographics;

function Movie(_ref3) {
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
          lineNumber: 127,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(MovieDemographics, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 9
      }, this), showRatings === true ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Ratings, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 33
      }, this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_MovieDelete__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 124,
    columnNumber: 5
  }, this);
}

_s6(Movie, "TKTcEwFjlO0mfl35x7B4bMl4+lc=");

_c7 = Movie;
/* harmony default export */ __webpack_exports__["default"] = (Movie);

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

$RefreshReg$(_c, "Rating");
$RefreshReg$(_c2, "Ratings");
$RefreshReg$(_c3, "ImageWithFallback");
$RefreshReg$(_c4, "MovieImage");
$RefreshReg$(_c5, "MovieFavorite");
$RefreshReg$(_c6, "MovieDemographics");
$RefreshReg$(_c7, "Movie");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW92aWUuanMiXSwibmFtZXMiOlsiUmF0aW5nIiwiU291cmNlIiwiVmFsdWUiLCJSYXRpbmdzIiwidXNlQ29udGV4dCIsIk1vdmllRmlsdGVyQ29udGV4dCIsInJhdGluZ1ZhbHVlIiwiTW92aWVDb250ZXh0IiwibW92aWUiLCJyYXRpbmdzIiwiZmlsdGVyIiwicmF0aW5nIiwibWFwIiwiaWQiLCJJbWFnZVdpdGhGYWxsYmFjayIsInNyYyIsInByb3BzIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwiaW1nU3JjIiwic2V0SW1nU3JjIiwib25FcnJvciIsIk1vdmllSW1hZ2UiLCJ0aXRsZSIsIk1vdmllRmF2b3JpdGUiLCJ1cGRhdGVSZWNvcmQiLCJpblRyYW5zaXRpb24iLCJzZXRJblRyYW5zaXRpb24iLCJkb25lQ2FsbGJhY2siLCJjb25zb2xlIiwibG9nIiwiRGF0ZSIsImdldE1pbGxpc2Vjb25kcyIsImZhdm9yaXRlIiwiTW92aWVEZW1vZ3JhcGhpY3MiLCJyZWxlYXNlZCIsInJ1bnRpbWUiLCJzdW1tYXJ5IiwibGluayIsIk1vdmllIiwiaW5zZXJ0UmVjb3JkIiwiZGVsZXRlUmVjb3JkIiwic2hvd1JhdGluZ3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsT0FBbUM7QUFBQSxNQUFqQkMsTUFBaUIsUUFBakJBLE1BQWlCO0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTO0FBQ2pDLHNCQUNFO0FBQU0sYUFBUyxFQUFDLGNBQWhCO0FBQUEsZUFDR0QsTUFESCxvQkFDVztBQUFBLDRCQUFnQkMsS0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7S0FOUUYsTTs7QUFRVCxTQUFTRyxPQUFULEdBQW1C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QUFBO0FBQUE7QUFBQTtBQUFBLGdCQURBLGVBRUUsOERBQUMsaUJBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUtHQyxXQUFXLEtBQUssSUFBaEIsZ0JBQXVCLDhEQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUF2QixHQUFxQyxJQUx4QyxlQU1FLDhEQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFZRDs7SUFkUUgsSzs7TUFBQUEsSztBQWdCVCwrREFBZUEsS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iYzM2M2NiZGY4ZGYzMjU1OTY2YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtNb3ZpZUZpbHRlckNvbnRleHR9IGZyb20gXCIuLy4uL2NvbnRleHRzL01vdmllRmlsdGVyQ29udGV4dFwiO1xyXG5pbXBvcnQgeyBNb3ZpZVByb3ZpZGVyLCBNb3ZpZUNvbnRleHQgfSBmcm9tIFwiLi8uLi9jb250ZXh0cy9Nb3ZpZUNvbnRleHRcIlxyXG5pbXBvcnQgTW92aWVEZWxldGUgZnJvbSBcIi4vTW92aWVEZWxldGVcIlxyXG5cclxuZnVuY3Rpb24gUmF0aW5nKHsgU291cmNlLCBWYWx1ZSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzcGFuIGNsYXNzTmFtZT1cInJhdGluZyB3LTEwMFwiPlxyXG4gICAgICB7U291cmNlfSA8c3Ryb25nPlZhbHVlOiB7VmFsdWV9LzEwPC9zdHJvbmc+XHJcbiAgICA8L3NwYW4+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gUmF0aW5ncygpIHtcclxuICBjb25zdCB7cmF0aW5nVmFsdWV9ID0gdXNlQ29udGV4dChNb3ZpZUZpbHRlckNvbnRleHQpO1xyXG4gIGNvbnN0IHsgbW92aWUgfSA9IHVzZUNvbnRleHQoTW92aWVDb250ZXh0KTsgXHJcbiAgY29uc3QgcmF0aW5ncyA9IG1vdmllLnJhdGluZ3M7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nQm94IGNhcmQgaC0yNTBcIj5cclxuICAgICAge3JhdGluZ3MuZmlsdGVyKGZ1bmN0aW9uKHJhdGluZyl7XHJcbiAgICAgICAgcmV0dXJuIHJhdGluZy5WYWx1ZSA9PT0gcmF0aW5nVmFsdWU7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5tYXAoZnVuY3Rpb24ocmF0aW5nKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZyB3LTEwMFwiIGtleT17cmF0aW5nLmlkfT5cclxuICAgICAgICAgICAgPFJhdGluZyB7Li4ucmF0aW5nfS8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEltYWdlV2l0aEZhbGxiYWNrKHtzcmMsIC4uLnByb3BzfSl7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3RbaW1nU3JjLCBzZXRJbWdTcmNdID0gdXNlU3RhdGUoc3JjKTtcclxuXHJcblxyXG4gIFxyXG5cclxuICByZXR1cm5cclxuICA8aW1nIHNyYz17aW1nU3JjfSB7Li4ucHJvcHN9IG9uRXJyb3I9e29uRXJyb3J9Lz5cclxufVxyXG5cclxuZnVuY3Rpb24gTW92aWVJbWFnZSgpIHtcclxuICBjb25zdCB7bW92aWU6IHtpZCwgdGl0bGV9fT0gdXNlQ29udGV4dChNb3ZpZUNvbnRleHQpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdmllLWltZyBkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgaC0zMDBcIj5cclxuICAgICAgPEltYWdlV2l0aEZhbGxiYWNrXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbi1maXRcIlxyXG4gICAgICAgIHNyYz17YC9pbWFnZXMvbW92aWUtJHtpZH0ucG5nYH1cclxuICAgICAgICB3aWR0aD1cIjMwMFwiXHJcbiAgICAgICAgYWx0PXtgJHt0aXRsZX1gfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gTW92aWVGYXZvcml0ZSgpIHtcclxuICBjb25zdCB7bW92aWUsIHVwZGF0ZVJlY29yZH0gPSB1c2VDb250ZXh0KE1vdmllQ29udGV4dCk7XHJcbiAgY29uc3QgW2luVHJhbnNpdGlvbiwgc2V0SW5UcmFuc2l0aW9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBmdW5jdGlvbiBkb25lQ2FsbGJhY2soKSB7XHJcbiAgICBzZXRJblRyYW5zaXRpb24oZmFsc2UpO1xyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgIGBJbiBNb3ZpZUZhdm9yaXRlOmRvbmVDYWxsYmFjayAgICAke25ldyBEYXRlKCkuZ2V0TWlsbGlzZWNvbmRzKCl9YFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbiBwYWRCMVwiPlxyXG4gICAgICA8c3BhblxyXG4gICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHNldEluVHJhbnNpdGlvbih0cnVlKTtcclxuICAgICAgICAgdXBkYXRlUmVjb3JkKFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAuLi5tb3ZpZSwgZmF2b3JpdGU6IW1vdmllLmZhdm9yaXRlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGRvbmVDYWxsYmFja1xyXG4gICAgICAgICApXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxpXHJcbiAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICBtb3ZpZS5mYXZvcml0ZSA9PT0gdHJ1ZSA/IFwiZmEgZmEtc3RhciBvcmFuZ2VcIiA6IFwiZmEgZmEtc3Rhci1vIG9yYW5nZVwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgLz57XCIgXCJ9XHJcbiAgICAgICAgRmF2b3JpdGV7XCIgXCJ9XHJcbiAgICAgICAge2luVHJhbnNpdGlvbiA/IChcclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhcyBmYS1jaXJjbGUtbm90Y2ggZmEtc3BpblwiPjwvc3Bhbj5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gTW92aWVEZW1vZ3JhcGhpY3MoKSB7XHJcbiAgY29uc3QgeyBtb3ZpZSB9ID0gdXNlQ29udGV4dCggTW92aWVDb250ZXh0ICk7XHJcbiAgY29uc3Qge3RpdGxlLCByZWxlYXNlZCwgcnVudGltZSwgc3VtbWFyeSwgbGluaywgZmF2b3JpdGV9ID0gbW92aWU7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWUtaW5mb1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtYi0zXCI+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtdHJ1bmNhdGUgdy0yMDBcIj5cclxuICAgICAgICAgIHt0aXRsZX0gIDxici8+IFxyXG4gICAgICAgIDwvaDM+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TW92aWVGYXZvcml0ZSAgLz5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLWxpbmtcIj4ge3JlbGVhc2VkfSAgPGJyLz4ge3J1bnRpbWV9PGJyLz48YnIvPjxhIGhyZWY9e2xpbmt9IHRhcmdldD1cIl9ibGFua1wiPldhdGNoIG5vdyBvbiBUSEVGTElYRVJcIjwvYT48L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YnIvPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtZGVzY3JpcHRpb25cIj57c3VtbWFyeX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YnIvPlxyXG4gICAgICBcclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE1vdmllKHsgbW92aWUsIHVwZGF0ZVJlY29yZCwgaW5zZXJ0UmVjb3JkLCBkZWxldGVSZWNvcmQgfSkge1xyXG4gIGNvbnN0IHtzaG93UmF0aW5nc30gPSB1c2VDb250ZXh0KE1vdmllRmlsdGVyQ29udGV4dCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxNb3ZpZVByb3ZpZGVyIG1vdmllPXttb3ZpZX0gdXBkYXRlUmVjb3JkPXt1cGRhdGVSZWNvcmR9IGluc2VydFJlY29yZD17aW5zZXJ0UmVjb3JkfSBkZWxldGVSZWNvcmQ9e2RlbGV0ZVJlY29yZH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNCBjb2wtc20tMTIgY29sLXhzLTEyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtaGVpZ2h0IHAtNCBtdC00XCI+XHJcbiAgICAgICAgPE1vdmllSW1hZ2UgIC8+XHJcbiAgICAgICAgICA8TW92aWVEZW1vZ3JhcGhpY3MgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge3Nob3dSYXRpbmdzID09PSB0cnVlID8gPFJhdGluZ3MgLz4gOiBudWxsfVxyXG4gICAgICAgIDxNb3ZpZURlbGV0ZS8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Nb3ZpZVByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vdmllO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
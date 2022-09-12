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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MovieFavorite, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        className: "card-link",
        children: [" ", released, "  ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 47
        }, this), " ", runtime, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 62
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 67
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
          href: link,
          target: "_blank",
          children: "Watch now on THEFLIXER\""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 72
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        className: "card-description",
        children: summary
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 89,
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
          lineNumber: 115,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MovieDemographics, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }, this), showRatings === true ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Ratings, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 33
      }, this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 112,
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW92aWUuanMiXSwibmFtZXMiOlsiUmF0aW5nIiwiU291cmNlIiwiVmFsdWUiLCJSYXRpbmdzIiwidXNlQ29udGV4dCIsIk1vdmllRmlsdGVyQ29udGV4dCIsInJhdGluZ1ZhbHVlIiwiTW92aWVDb250ZXh0IiwibW92aWUiLCJyYXRpbmdzIiwiZmlsdGVyIiwicmF0aW5nIiwibWFwIiwiaWQiLCJNb3ZpZUltYWdlIiwidGl0bGUiLCJNb3ZpZUZhdm9yaXRlIiwidXBkYXRlUmVjb3JkIiwidXNlU3RhdGUiLCJpblRyYW5zaXRpb24iLCJzZXRJblRyYW5zaXRpb24iLCJkb25lQ2FsbGJhY2siLCJjb25zb2xlIiwibG9nIiwiRGF0ZSIsImdldE1pbGxpc2Vjb25kcyIsImZhdm9yaXRlIiwiTW92aWVEZW1vZ3JhcGhpY3MiLCJyZWxlYXNlZCIsInJ1bnRpbWUiLCJzdW1tYXJ5IiwibGluayIsIk1vdmllIiwiaW5zZXJ0UmVjb3JkIiwiZGVsZXRlUmVjb3JkIiwic2hvd1JhdGluZ3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsT0FBbUM7QUFBQSxNQUFqQkMsTUFBaUIsUUFBakJBLE1BQWlCO0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTO0FBQ2pDLHNCQUNFO0FBQU0sYUFBUyxFQUFDLGNBQWhCO0FBQUEsZUFDR0QsTUFESCxvQkFDVztBQUFBLDRCQUFnQkMsS0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7S0FOUUYsTTs7QUFRVCxTQUFTRyxPQUFULEdBQW1CO0FBQUE7O0FBQUEsb0JBQ0tDLGlEQUFVLENBQUNDLDRFQUFELENBRGY7QUFBQSxNQUNWQyxXQURVLGVBQ1ZBLFdBRFU7O0FBQUEscUJBRUNGLGlEQUFVLENBQUNH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UUgsaUI7O01BQUFBLGlCOztBQXdCVCxTQUFTSyxLQUFULFFBQW9FO0FBQUE7O0FBQUEsTUFBbkR4QixLQUFtRCxTQUFuREEsS0FBbUQ7QUFBQSxNQUE1Q1MsWUFBNEMsU0FBNUNBLFlBQTRDO0FBQUEsTUFBOUJnQixZQUE4QixTQUE5QkEsWUFBOEI7QUFBQSxNQUFoQkMsWUFBZ0IsU0FBaEJBLFlBQWdCOztBQUFBLHFCQUM1QzlCLGlEQUFVLENBQUNDLDRFQUFELENBRGtDO0FBQUEsTUFDM0Q4QixXQUQyRCxnQkFDM0RBLFdBRDJEOztBQUVsRSxzQkFDRSw4REFBQyxpRUFBRDtBQUFlLFNBQUssRUFBRTNCLEtBQXRCO0FBQTZCLGdCQUFZLEVBQUVTLFlBQTNDO0FBQXlELGdCQUFZLEVBQUVnQixZQUF2RTtBQUFxRixnQkFBWSxFQUFFQyxZQUFuRztBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLDJEQUFmO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLDJCQUFmO0FBQUEsZ0NBQ0EsOERBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURBLGVBRUUsOERBQUMsaUJBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUtHQyxXQUFXLEtBQUssSUFBaEIsZ0JBQXVCLDhEQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUF2QixHQUFxQyxJQUx4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFZRDs7SUFkUUgsSzs7TUFBQUEsSztBQWdCVCwrREFBZUEsS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iNjIxMDcxNjRiMmQ4MDBmNDcyNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtNb3ZpZUZpbHRlckNvbnRleHR9IGZyb20gXCIuLy4uL2NvbnRleHRzL01vdmllRmlsdGVyQ29udGV4dFwiO1xyXG5pbXBvcnQgeyBNb3ZpZVByb3ZpZGVyLCBNb3ZpZUNvbnRleHQgfSBmcm9tIFwiLi8uLi9jb250ZXh0cy9Nb3ZpZUNvbnRleHRcIlxyXG5cclxuZnVuY3Rpb24gUmF0aW5nKHsgU291cmNlLCBWYWx1ZSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzcGFuIGNsYXNzTmFtZT1cInJhdGluZyB3LTEwMFwiPlxyXG4gICAgICB7U291cmNlfSA8c3Ryb25nPlZhbHVlOiB7VmFsdWV9LzEwPC9zdHJvbmc+XHJcbiAgICA8L3NwYW4+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gUmF0aW5ncygpIHtcclxuICBjb25zdCB7cmF0aW5nVmFsdWV9ID0gdXNlQ29udGV4dChNb3ZpZUZpbHRlckNvbnRleHQpO1xyXG4gIGNvbnN0IHsgbW92aWUgfSA9IHVzZUNvbnRleHQoTW92aWVDb250ZXh0KTsgXHJcbiAgY29uc3QgcmF0aW5ncyA9IG1vdmllLnJhdGluZ3M7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nQm94IGNhcmQgaC0yNTBcIj5cclxuICAgICAge3JhdGluZ3MuZmlsdGVyKGZ1bmN0aW9uKHJhdGluZyl7XHJcbiAgICAgICAgcmV0dXJuIHJhdGluZy5WYWx1ZSA9PT0gcmF0aW5nVmFsdWU7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5tYXAoZnVuY3Rpb24ocmF0aW5nKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZyB3LTEwMFwiIGtleT17cmF0aW5nLmlkfT5cclxuICAgICAgICAgICAgPFJhdGluZyB7Li4ucmF0aW5nfS8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE1vdmllSW1hZ2UoKSB7XHJcbiAgY29uc3Qge21vdmllOiB7aWQsIHRpdGxlfX09IHVzZUNvbnRleHQoTW92aWVDb250ZXh0KTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZS1pbWcgZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIGgtMzAwXCI+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBjbGFzc05hbWU9XCJjb250YWluLWZpdFwiXHJcbiAgICAgICAgc3JjPXtgL2ltYWdlcy9tb3ZpZS0ke2lkfS5wbmdgfVxyXG4gICAgICAgIHdpZHRoPVwiMzAwXCJcclxuICAgICAgICBhbHQ9e2Ake3RpdGxlfWB9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBNb3ZpZUZhdm9yaXRlKCkge1xyXG4gIGNvbnN0IHttb3ZpZSwgdXBkYXRlUmVjb3JkfSA9IHVzZUNvbnRleHQoTW92aWVDb250ZXh0KTtcclxuICBjb25zdCBbaW5UcmFuc2l0aW9uLCBzZXRJblRyYW5zaXRpb25dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGZ1bmN0aW9uIGRvbmVDYWxsYmFjaygpIHtcclxuICAgIHNldEluVHJhbnNpdGlvbihmYWxzZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgYEluIE1vdmllRmF2b3JpdGU6ZG9uZUNhbGxiYWNrICAgICR7bmV3IERhdGUoKS5nZXRNaWxsaXNlY29uZHMoKX1gXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uIHBhZEIxXCI+XHJcbiAgICAgIDxzcGFuXHJcbiAgICAgICAgb25DbGljaz17ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgc2V0SW5UcmFuc2l0aW9uKHRydWUpO1xyXG4gICAgICAgICB1cGRhdGVSZWNvcmQoXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIC4uLm1vdmllLCBmYXZvcml0ZTohbW92aWUuZmF2b3JpdGUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZG9uZUNhbGxiYWNrXHJcbiAgICAgICAgIClcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGlcclxuICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgIG1vdmllLmZhdm9yaXRlID09PSB0cnVlID8gXCJmYSBmYS1zdGFyIG9yYW5nZVwiIDogXCJmYSBmYS1zdGFyLW8gb3JhbmdlXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICAvPntcIiBcIn1cclxuICAgICAgICBGYXZvcml0ZXtcIiBcIn1cclxuICAgICAgICB7aW5UcmFuc2l0aW9uID8gKFxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmFzIGZhLWNpcmNsZS1ub3RjaCBmYS1zcGluXCI+PC9zcGFuPlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBNb3ZpZURlbW9ncmFwaGljcygpIHtcclxuICBjb25zdCB7IG1vdmllIH0gPSB1c2VDb250ZXh0KCBNb3ZpZUNvbnRleHQgKTtcclxuICBjb25zdCB7dGl0bGUsIHJlbGVhc2VkLCBydW50aW1lLCBzdW1tYXJ5LCBsaW5rLCBmYXZvcml0ZX0gPSBtb3ZpZTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZS1pbmZvXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG1iLTNcIj5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC10cnVuY2F0ZSB3LTIwMFwiPlxyXG4gICAgICAgICAge3RpdGxlfSAgPGJyLz4gXHJcbiAgICAgICAgPC9oMz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxNb3ZpZUZhdm9yaXRlICAvPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtbGlua1wiPiB7cmVsZWFzZWR9ICA8YnIvPiB7cnVudGltZX08YnIvPjxici8+PGEgaHJlZj17bGlua30gdGFyZ2V0PVwiX2JsYW5rXCI+V2F0Y2ggbm93IG9uIFRIRUZMSVhFUlwiPC9hPjwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxici8+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC1kZXNjcmlwdGlvblwiPntzdW1tYXJ5fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxici8+XHJcbiAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gTW92aWUoeyBtb3ZpZSwgdXBkYXRlUmVjb3JkLCBpbnNlcnRSZWNvcmQsIGRlbGV0ZVJlY29yZCB9KSB7XHJcbiAgY29uc3Qge3Nob3dSYXRpbmdzfSA9IHVzZUNvbnRleHQoTW92aWVGaWx0ZXJDb250ZXh0KTtcclxuICByZXR1cm4gKFxyXG4gICAgPE1vdmllUHJvdmlkZXIgbW92aWU9e21vdmllfSB1cGRhdGVSZWNvcmQ9e3VwZGF0ZVJlY29yZH0gaW5zZXJ0UmVjb3JkPXtpbnNlcnRSZWNvcmR9IGRlbGV0ZVJlY29yZD17ZGVsZXRlUmVjb3JkfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy00IGNvbC1zbS0xMiBjb2wteHMtMTJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1oZWlnaHQgcC00IG10LTRcIj5cclxuICAgICAgICA8TW92aWVJbWFnZSAgLz5cclxuICAgICAgICAgIDxNb3ZpZURlbW9ncmFwaGljcyAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7c2hvd1JhdGluZ3MgPT09IHRydWUgPyA8UmF0aW5ncyAvPiA6IG51bGx9XHJcbiAgICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Nb3ZpZVByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vdmllO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
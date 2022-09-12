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
    _s5 = $RefreshSig$();

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
  var src = _ref2.src,
      props = (0,C_Users_hp_Desktop_react_movie_recommend_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.default)(_ref2, ["src"]);

  return;

  /*#__PURE__*/
  (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", _objectSpread({
    src: src
  }, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 3
  }, this);
}

_c3 = ImageWithFallback;

function MovieImage() {
  _s2();

  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_contexts_MovieContext__WEBPACK_IMPORTED_MODULE_5__.MovieContext),
      _useContext3$movie = _useContext3.movie,
      id = _useContext3$movie.id,
      title = _useContext3$movie.title;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "movie-img d-flex flex-row justify-content-center align-items-center h-300",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(I, {
      className: "contain-fit",
      src: "/images/movie-".concat(id, ".png"),
      width: "300",
      alt: "".concat(title)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, this);
}

_s2(MovieImage, "2gRXpkZVWX3l8xrvIa/EID8z8vQ=");

_c4 = MovieImage;

function MovieFavorite() {
  _s3();

  var _useContext4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_contexts_MovieContext__WEBPACK_IMPORTED_MODULE_5__.MovieContext),
      movie = _useContext4.movie,
      updateRecord = _useContext4.updateRecord;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      inTransition = _useState[0],
      setInTransition = _useState[1];

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
        lineNumber: 77,
        columnNumber: 9
      }, this), " ", "Favorite", " ", inTransition ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
        className: "fas fa-circle-notch fa-spin"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 11
      }, this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 5
  }, this);
}

_s3(MovieFavorite, "8phaYznZMJ2LnvF0jrVzz4EFu+M=");

_c5 = MovieFavorite;

function MovieDemographics() {
  _s4();

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
          lineNumber: 98,
          columnNumber: 20
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(MovieFavorite, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
        className: "card-link",
        children: [" ", released, "  ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 47
        }, this), " ", runtime, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 62
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 67
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
          href: link,
          target: "_blank",
          children: "Watch now on THEFLIXER\""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 72
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
        className: "card-description",
        children: summary
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 95,
    columnNumber: 5
  }, this);
}

_s4(MovieDemographics, "ysQZXjBqQefGWWpZUifcTYCuUFc=");

_c6 = MovieDemographics;

function Movie(_ref3) {
  _s5();

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
          lineNumber: 121,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(MovieDemographics, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }, this), showRatings === true ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Ratings, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 33
      }, this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_MovieDelete__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 118,
    columnNumber: 5
  }, this);
}

_s5(Movie, "TKTcEwFjlO0mfl35x7B4bMl4+lc=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW92aWUuanMiXSwibmFtZXMiOlsiUmF0aW5nIiwiU291cmNlIiwiVmFsdWUiLCJSYXRpbmdzIiwidXNlQ29udGV4dCIsIk1vdmllRmlsdGVyQ29udGV4dCIsInJhdGluZ1ZhbHVlIiwiTW92aWVDb250ZXh0IiwibW92aWUiLCJyYXRpbmdzIiwiZmlsdGVyIiwicmF0aW5nIiwibWFwIiwiaWQiLCJJbWFnZVdpdGhGYWxsYmFjayIsInNyYyIsInByb3BzIiwiTW92aWVJbWFnZSIsInRpdGxlIiwiTW92aWVGYXZvcml0ZSIsInVwZGF0ZVJlY29yZCIsInVzZVN0YXRlIiwiaW5UcmFuc2l0aW9uIiwic2V0SW5UcmFuc2l0aW9uIiwiZG9uZUNhbGxiYWNrIiwiY29uc29sZSIsImxvZyIsIkRhdGUiLCJnZXRNaWxsaXNlY29uZHMiLCJmYXZvcml0ZSIsIk1vdmllRGVtb2dyYXBoaWNzIiwicmVsZWFzZWQiLCJydW50aW1lIiwic3VtbWFyeSIsImxpbmsiLCJNb3ZpZSIsImluc2VydFJlY29yZCIsImRlbGV0ZVJlY29yZCIsInNob3dSYXRpbmdzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsT0FBbUM7QUFBQSxNQUFqQkMsTUFBaUIsUUFBakJBLE1BQWlCO0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTO0FBQ2pDLHNCQUNFO0FBQU0sYUFBUyxFQUFDLGNBQWhCO0FBQUEsZUFDR0QsTUFESCxvQkFDVztBQUFBLDRCQUFnQkMsS0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7S0FOUUYsTTs7QUFRVCxTQUFTRyxPQUFULEdBQW1CO0FBQUE7O0FBQUEsb0JBQ0tDLGlEQUFVLENBQUNDLDRFQUFELENBRGY7QUFBQSxNQUNW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QUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBWUQ7O0lBZFFILEs7O01BQUFBLEs7QUFnQlQsK0RBQWVBLEtBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGJlYTBjYWM3OTgwY2EyYjYzNDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7TW92aWVGaWx0ZXJDb250ZXh0fSBmcm9tIFwiLi8uLi9jb250ZXh0cy9Nb3ZpZUZpbHRlckNvbnRleHRcIjtcclxuaW1wb3J0IHsgTW92aWVQcm92aWRlciwgTW92aWVDb250ZXh0IH0gZnJvbSBcIi4vLi4vY29udGV4dHMvTW92aWVDb250ZXh0XCJcclxuaW1wb3J0IE1vdmllRGVsZXRlIGZyb20gXCIuL01vdmllRGVsZXRlXCJcclxuXHJcbmZ1bmN0aW9uIFJhdGluZyh7IFNvdXJjZSwgVmFsdWUgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJyYXRpbmcgdy0xMDBcIj5cclxuICAgICAge1NvdXJjZX0gPHN0cm9uZz5WYWx1ZToge1ZhbHVlfS8xMDwvc3Ryb25nPlxyXG4gICAgPC9zcGFuPlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFJhdGluZ3MoKSB7XHJcbiAgY29uc3Qge3JhdGluZ1ZhbHVlfSA9IHVzZUNvbnRleHQoTW92aWVGaWx0ZXJDb250ZXh0KTtcclxuICBjb25zdCB7IG1vdmllIH0gPSB1c2VDb250ZXh0KE1vdmllQ29udGV4dCk7IFxyXG4gIGNvbnN0IHJhdGluZ3MgPSBtb3ZpZS5yYXRpbmdzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZ0JveCBjYXJkIGgtMjUwXCI+XHJcbiAgICAgIHtyYXRpbmdzLmZpbHRlcihmdW5jdGlvbihyYXRpbmcpe1xyXG4gICAgICAgIHJldHVybiByYXRpbmcuVmFsdWUgPT09IHJhdGluZ1ZhbHVlO1xyXG4gICAgICB9KVxyXG4gICAgICAubWFwKGZ1bmN0aW9uKHJhdGluZyl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmcgdy0xMDBcIiBrZXk9e3JhdGluZy5pZH0+XHJcbiAgICAgICAgICAgIDxSYXRpbmcgey4uLnJhdGluZ30vPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgICB9KVxyXG4gICAgICB9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBJbWFnZVdpdGhGYWxsYmFjayh7c3JjLCAuLi5wcm9wc30pe1xyXG4gIHJldHVyblxyXG4gIDxpbWcgc3JjPXtzcmN9IHsuLi5wcm9wc30vPlxyXG59XHJcblxyXG5mdW5jdGlvbiBNb3ZpZUltYWdlKCkge1xyXG4gIGNvbnN0IHttb3ZpZToge2lkLCB0aXRsZX19PSB1c2VDb250ZXh0KE1vdmllQ29udGV4dCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWUtaW1nIGQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBoLTMwMFwiPlxyXG4gICAgICA8SVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW4tZml0XCJcclxuICAgICAgICBzcmM9e2AvaW1hZ2VzL21vdmllLSR7aWR9LnBuZ2B9XHJcbiAgICAgICAgd2lkdGg9XCIzMDBcIlxyXG4gICAgICAgIGFsdD17YCR7dGl0bGV9YH1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE1vdmllRmF2b3JpdGUoKSB7XHJcbiAgY29uc3Qge21vdmllLCB1cGRhdGVSZWNvcmR9ID0gdXNlQ29udGV4dChNb3ZpZUNvbnRleHQpO1xyXG4gIGNvbnN0IFtpblRyYW5zaXRpb24sIHNldEluVHJhbnNpdGlvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgZnVuY3Rpb24gZG9uZUNhbGxiYWNrKCkge1xyXG4gICAgc2V0SW5UcmFuc2l0aW9uKGZhbHNlKTtcclxuICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICBgSW4gTW92aWVGYXZvcml0ZTpkb25lQ2FsbGJhY2sgICAgJHtuZXcgRGF0ZSgpLmdldE1pbGxpc2Vjb25kcygpfWBcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb24gcGFkQjFcIj5cclxuICAgICAgPHNwYW5cclxuICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBzZXRJblRyYW5zaXRpb24odHJ1ZSk7XHJcbiAgICAgICAgIHVwZGF0ZVJlY29yZChcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgLi4ubW92aWUsIGZhdm9yaXRlOiFtb3ZpZS5mYXZvcml0ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBkb25lQ2FsbGJhY2tcclxuICAgICAgICAgKVxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8aVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgbW92aWUuZmF2b3JpdGUgPT09IHRydWUgPyBcImZhIGZhLXN0YXIgb3JhbmdlXCIgOiBcImZhIGZhLXN0YXItbyBvcmFuZ2VcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIC8+e1wiIFwifVxyXG4gICAgICAgIEZhdm9yaXRle1wiIFwifVxyXG4gICAgICAgIHtpblRyYW5zaXRpb24gPyAoXHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYXMgZmEtY2lyY2xlLW5vdGNoIGZhLXNwaW5cIj48L3NwYW4+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE1vdmllRGVtb2dyYXBoaWNzKCkge1xyXG4gIGNvbnN0IHsgbW92aWUgfSA9IHVzZUNvbnRleHQoIE1vdmllQ29udGV4dCApO1xyXG4gIGNvbnN0IHt0aXRsZSwgcmVsZWFzZWQsIHJ1bnRpbWUsIHN1bW1hcnksIGxpbmssIGZhdm9yaXRlfSA9IG1vdmllO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdmllLWluZm9cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWItM1wiPlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXRydW5jYXRlIHctMjAwXCI+XHJcbiAgICAgICAgICB7dGl0bGV9ICA8YnIvPiBcclxuICAgICAgICA8L2gzPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPE1vdmllRmF2b3JpdGUgIC8+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC1saW5rXCI+IHtyZWxlYXNlZH0gIDxici8+IHtydW50aW1lfTxici8+PGJyLz48YSBocmVmPXtsaW5rfSB0YXJnZXQ9XCJfYmxhbmtcIj5XYXRjaCBub3cgb24gVEhFRkxJWEVSXCI8L2E+PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJyLz5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLWRlc2NyaXB0aW9uXCI+e3N1bW1hcnl9PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJyLz5cclxuICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBNb3ZpZSh7IG1vdmllLCB1cGRhdGVSZWNvcmQsIGluc2VydFJlY29yZCwgZGVsZXRlUmVjb3JkIH0pIHtcclxuICBjb25zdCB7c2hvd1JhdGluZ3N9ID0gdXNlQ29udGV4dChNb3ZpZUZpbHRlckNvbnRleHQpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8TW92aWVQcm92aWRlciBtb3ZpZT17bW92aWV9IHVwZGF0ZVJlY29yZD17dXBkYXRlUmVjb3JkfSBpbnNlcnRSZWNvcmQ9e2luc2VydFJlY29yZH0gZGVsZXRlUmVjb3JkPXtkZWxldGVSZWNvcmR9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTQgY29sLXNtLTEyIGNvbC14cy0xMlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWhlaWdodCBwLTQgbXQtNFwiPlxyXG4gICAgICAgIDxNb3ZpZUltYWdlICAvPlxyXG4gICAgICAgICAgPE1vdmllRGVtb2dyYXBoaWNzICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtzaG93UmF0aW5ncyA9PT0gdHJ1ZSA/IDxSYXRpbmdzIC8+IDogbnVsbH1cclxuICAgICAgICA8TW92aWVEZWxldGUvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTW92aWVQcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3ZpZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
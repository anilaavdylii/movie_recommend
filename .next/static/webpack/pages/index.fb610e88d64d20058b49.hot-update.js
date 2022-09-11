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
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\hp\\Desktop\\react\\movie_recommend\\src\\components\\Movie.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$();

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
      lineNumber: 7,
      columnNumber: 16
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

_c = Rating;

function Ratings(_ref2) {
  _s();

  var ratings = _ref2.ratings;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_MovieFilterContext__WEBPACK_IMPORTED_MODULE_3__.MovieFilterContext),
      ratingValue = _useContext.ratingValue;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "ratingBox card h-250",
    children: ratings.filter(function (rating) {
      return rating.Value === ratingValue;
    }).map(function (rating) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {}, void 0, false);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

_s(Ratings, "OruT3hzDMCsr3mN8ueoDycdytg0=");

_c2 = Ratings;

function MovieImage(_ref3) {
  var id = _ref3.id,
      title = _ref3.title;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "movie-img d-flex flex-row justify-content-center align-items-center h-300",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
      className: "contain-fit",
      src: "/images/movie-".concat(id, ".png"),
      width: "300",
      alt: "".concat(title)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, this);
}

_c3 = MovieImage;

function MovieFavorite(_ref4) {
  _s2();

  var favorite = _ref4.favorite,
      onFavoriteToggle = _ref4.onFavoriteToggle;

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
        return onFavoriteToggle(doneCallback);
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("i", {
        className: favorite === true ? "fa fa-star orange" : "fa fa-star-o orange"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this), " ", "Favorite", " ", inTransition ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
        className: "fas fa-circle-notch fa-spin"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 11
      }, this) : null]
    }, void 0, true, {
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

_s2(MovieFavorite, "gfuw24RZcQ1VLKTCbiMf9MKfd+I=");

_c4 = MovieFavorite;

function MovieDemographics(_ref5) {
  var title = _ref5.title,
      year = _ref5.year,
      released = _ref5.released,
      runtime = _ref5.runtime,
      summary = _ref5.summary,
      favorite = _ref5.favorite,
      onFavoriteToggle = _ref5.onFavoriteToggle;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "movie-info",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "d-flex justify-content-between mb-3",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
        className: "text-truncate w-200",
        children: [title, "  ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 20
        }, this), released, "  ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 23
        }, this), " ", runtime]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MovieFavorite, {
      favorite: favorite,
      onFavoriteToggle: onFavoriteToggle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        className: "card-description",
        children: summary
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 84,
    columnNumber: 5
  }, this);
}

_c5 = MovieDemographics;

function Movie(_ref6) {
  _s3();

  var movie = _ref6.movie,
      onFavoriteToggle = _ref6.onFavoriteToggle;
  var id = movie.id,
      title = movie.title,
      year = movie.year,
      ratings = movie.ratings;

  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_MovieFilterContext__WEBPACK_IMPORTED_MODULE_3__.MovieFilterContext),
      showRatings = _useContext2.showRatings;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "card card-height p-4 mt-4",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MovieImage, {
        id: id,
        title: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MovieDemographics, _objectSpread(_objectSpread({}, movie), {}, {
        onFavoriteToggle: onFavoriteToggle
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }, this), showRatings === true ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Ratings, {
      ratings: ratings
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 31
    }, this) : null]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 106,
    columnNumber: 5
  }, this);
}

_s3(Movie, "TKTcEwFjlO0mfl35x7B4bMl4+lc=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW92aWUuanMiXSwibmFtZXMiOlsiUmF0aW5nIiwiU291cmNlIiwiVmFsdWUiLCJSYXRpbmdzIiwicmF0aW5ncyIsInVzZUNvbnRleHQiLCJNb3ZpZUZpbHRlckNvbnRleHQiLCJyYXRpbmdWYWx1ZSIsImZpbHRlciIsInJhdGluZyIsIm1hcCIsIk1vdmllSW1hZ2UiLCJpZCIsInRpdGxlIiwiTW92aWVGYXZvcml0ZSIsImZhdm9yaXRlIiwib25GYXZvcml0ZVRvZ2dsZSIsInVzZVN0YXRlIiwiaW5UcmFuc2l0aW9uIiwic2V0SW5UcmFuc2l0aW9uIiwiZG9uZUNhbGxiYWNrIiwiY29uc29sZSIsImxvZyIsIkRhdGUiLCJnZXRNaWxsaXNlY29uZHMiLCJNb3ZpZURlbW9ncmFwaGljcyIsInllYXIiLCJyZWxlYXNlZCIsInJ1bnRpbWUiLCJzdW1tYXJ5IiwiTW92aWUiLCJtb3ZpZSIsInNob3dSYXRpbmdzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsT0FBbUM7QUFBQSxNQUFqQkMsTUFBaUIsUUFBakJBLE1BQWlCO0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTO0FBQ2pDLHNCQUNFO0FBQU0sYUFBUyxFQUFDLGNBQWhCO0FBQUEsZUFDR0QsTUFESCxvQkFDVztBQUFBLDRCQUFnQkMsS0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7S0FOUUYsTTs7QUFRVCxTQUFTRyxPQUFULFFBQThCO0FBQUE7O0FBQUEsTUFBWEMsT0FBVyxTQUFYQSxPQUFXOztBQUFBLG9CQUNOQyxpREFBVSxDQUFDQyw0RUFBRCxDQURKO0FBQUEsTUFDckJDLFdBRHFCLGVBQ3JCQSxXQURxQjs7QUFHNUIsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsc0JBQWY7QUFBQSxj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LmZiNjEwZTg4ZDY0ZDIwMDU4YjQ5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge01vdmllRmlsdGVyQ29udGV4dH0gZnJvbSBcIi4vLi4vY29udGV4dHMvTW92aWVGaWx0ZXJDb250ZXh0XCI7XHJcblxyXG5mdW5jdGlvbiBSYXRpbmcoeyBTb3VyY2UsIFZhbHVlIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwicmF0aW5nIHctMTAwXCI+XHJcbiAgICAgIHtTb3VyY2V9IDxzdHJvbmc+VmFsdWU6IHtWYWx1ZX0vMTA8L3N0cm9uZz5cclxuICAgIDwvc3Bhbj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBSYXRpbmdzKHsgcmF0aW5ncyB9KSB7XHJcbiAgY29uc3Qge3JhdGluZ1ZhbHVlfSA9IHVzZUNvbnRleHQoTW92aWVGaWx0ZXJDb250ZXh0KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nQm94IGNhcmQgaC0yNTBcIj5cclxuICAgICAge3JhdGluZ3MuZmlsdGVyKGZ1bmN0aW9uKHJhdGluZyl7XHJcbiAgICAgICAgcmV0dXJuIHJhdGluZy5WYWx1ZSA9PT0gcmF0aW5nVmFsdWU7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5tYXAoZnVuY3Rpb24ocmF0aW5nKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICA8PjwvPlxyXG4gICAgICAgIClcclxuICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gTW92aWVJbWFnZSh7IGlkLCB0aXRsZSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWUtaW1nIGQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBoLTMwMFwiPlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbi1maXRcIlxyXG4gICAgICAgIHNyYz17YC9pbWFnZXMvbW92aWUtJHtpZH0ucG5nYH1cclxuICAgICAgICB3aWR0aD1cIjMwMFwiXHJcbiAgICAgICAgYWx0PXtgJHt0aXRsZX1gfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gTW92aWVGYXZvcml0ZSh7IGZhdm9yaXRlLCBvbkZhdm9yaXRlVG9nZ2xlIH0pIHtcclxuICBjb25zdCBbaW5UcmFuc2l0aW9uLCBzZXRJblRyYW5zaXRpb25dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGZ1bmN0aW9uIGRvbmVDYWxsYmFjaygpIHtcclxuICAgIHNldEluVHJhbnNpdGlvbihmYWxzZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgYEluIE1vdmllRmF2b3JpdGU6ZG9uZUNhbGxiYWNrICAgICR7bmV3IERhdGUoKS5nZXRNaWxsaXNlY29uZHMoKX1gXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uIHBhZEIxXCI+XHJcbiAgICAgIDxzcGFuXHJcbiAgICAgICAgb25DbGljaz17ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgc2V0SW5UcmFuc2l0aW9uKHRydWUpO1xyXG4gICAgICAgICAgcmV0dXJuIG9uRmF2b3JpdGVUb2dnbGUoZG9uZUNhbGxiYWNrKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGlcclxuICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgIGZhdm9yaXRlID09PSB0cnVlID8gXCJmYSBmYS1zdGFyIG9yYW5nZVwiIDogXCJmYSBmYS1zdGFyLW8gb3JhbmdlXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICAvPntcIiBcIn1cclxuICAgICAgICBGYXZvcml0ZXtcIiBcIn1cclxuICAgICAgICB7aW5UcmFuc2l0aW9uID8gKFxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmFzIGZhLWNpcmNsZS1ub3RjaCBmYS1zcGluXCI+PC9zcGFuPlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBNb3ZpZURlbW9ncmFwaGljcyh7XHJcbiAgdGl0bGUsXHJcbiAgeWVhcixcclxuICByZWxlYXNlZCxcclxuICBydW50aW1lLFxyXG4gIHN1bW1hcnksXHJcbiAgZmF2b3JpdGUsXHJcbiAgb25GYXZvcml0ZVRvZ2dsZSxcclxufSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdmllLWluZm9cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWItM1wiPlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXRydW5jYXRlIHctMjAwXCI+XHJcbiAgICAgICAgICB7dGl0bGV9ICA8YnIvPiBcclxuICAgICAgICAgIHtyZWxlYXNlZH0gIDxici8+IHtydW50aW1lfVxyXG4gICAgICAgIDwvaDM+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TW92aWVGYXZvcml0ZVxyXG4gICAgICAgIGZhdm9yaXRlPXtmYXZvcml0ZX1cclxuICAgICAgICBvbkZhdm9yaXRlVG9nZ2xlPXtvbkZhdm9yaXRlVG9nZ2xlfVxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtZGVzY3JpcHRpb25cIj57c3VtbWFyeX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gTW92aWUoeyBtb3ZpZSwgb25GYXZvcml0ZVRvZ2dsZSB9KSB7XHJcbiAgY29uc3QgeyBpZCwgdGl0bGUsIHllYXIsIHJhdGluZ3MgfSA9IG1vdmllO1xyXG4gIGNvbnN0IHtzaG93UmF0aW5nc30gPSB1c2VDb250ZXh0KE1vdmllRmlsdGVyQ29udGV4dCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNCBjb2wtc20tMTIgY29sLXhzLTEyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWhlaWdodCBwLTQgbXQtNFwiPlxyXG4gICAgICAgIDxNb3ZpZUltYWdlIGlkPXtpZH0gdGl0bGU9e3RpdGxlfSAgLz5cclxuICAgICAgICA8TW92aWVEZW1vZ3JhcGhpY3Mgey4uLm1vdmllfSBvbkZhdm9yaXRlVG9nZ2xlPXtvbkZhdm9yaXRlVG9nZ2xlfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3Nob3dSYXRpbmdzID09PSB0cnVlID8gPFJhdGluZ3MgcmF0aW5ncz17cmF0aW5nc30gLz4gOiBudWxsfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW92aWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
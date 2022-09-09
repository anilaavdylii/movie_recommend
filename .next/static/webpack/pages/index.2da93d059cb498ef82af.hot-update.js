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
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\hp\\Desktop\\react\\movie_recommend\\src\\components\\Movie.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_hp_Desktop_react_movie_recommend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



function Rating(_ref) {
  var source = _ref.source,
      value = _ref.value;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
    className: "rating w-100",
    children: [source, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("strong", {
      children: ["Value: ", value]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 16
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

_c = Rating;

function Ratings(_ref2) {
  var ratings = _ref2.ratings;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "ratingBox card h-250",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Rating, _objectSpread({}, ratings[0]), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

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
      lineNumber: 22,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

_c3 = MovieImage;

function MovieFavorite(_ref4) {
  _s();

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
        lineNumber: 49,
        columnNumber: 9
      }, this), " ", "Favorite", " ", inTransition ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
        className: "fas fa-circle-notch fa-spin"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 11
      }, this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, this);
}

_s(MovieFavorite, "gfuw24RZcQ1VLKTCbiMf9MKfd+I=");

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
        children: [title, " - ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }, this), " ", year, released, " -- ", runtime]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MovieFavorite, {
      favorite: favorite,
      onFavoriteToggle: onFavoriteToggle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        className: "card-description",
        children: summary
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 5
  }, this);
}

_c5 = MovieDemographics;

function Movie(_ref6) {
  var movie = _ref6.movie,
      showRatings = _ref6.showRatings,
      onFavoriteToggle = _ref6.onFavoriteToggle;
  var id = movie.id,
      title = movie.title,
      year = movie.year,
      ratings = movie.ratings;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "card card-height p-4 mt-4",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MovieImage, {
        id: id,
        title: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MovieDemographics, _objectSpread(_objectSpread({}, movie), {}, {
        onFavoriteToggle: onFavoriteToggle
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }, this), showRatings === true ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Ratings, {
      ratings: ratings
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 31
    }, this) : null]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 94,
    columnNumber: 5
  }, this);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW92aWUuanMiXSwibmFtZXMiOlsiUmF0aW5nIiwic291cmNlIiwidmFsdWUiLCJSYXRpbmdzIiwicmF0aW5ncyIsIk1vdmllSW1hZ2UiLCJpZCIsInRpdGxlIiwiTW92aWVGYXZvcml0ZSIsImZhdm9yaXRlIiwib25GYXZvcml0ZVRvZ2dsZSIsInVzZVN0YXRlIiwiaW5UcmFuc2l0aW9uIiwic2V0SW5UcmFuc2l0aW9uIiwiZG9uZUNhbGxiYWNrIiwiY29uc29sZSIsImxvZyIsIkRhdGUiLCJnZXRNaWxsaXNlY29uZHMiLCJNb3ZpZURlbW9ncmFwaGljcyIsInllYXIiLCJyZWxlYXNlZCIsInJ1bnRpbWUiLCJzdW1tYXJ5IiwiTW92aWUiLCJtb3ZpZSIsInNob3dSYXRpbmdzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLE1BQVQsT0FBbUM7QUFBQSxNQUFqQkMsTUFBaUIsUUFBakJBLE1BQWlCO0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTO0FBQ2pDLHNCQUNFO0FBQU0sYUFBUyxFQUFDLGNBQWhCO0FBQUEsZUFDR0QsTUFESCxvQkFDVztBQUFBLDRCQUFnQkMsS0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7S0FOUUYsTTs7QUFRVCxTQUFTRyxPQUFULFFBQThCO0FBQUEsTUFBWEMsT0FBVyxTQUFYQSxPQUFXO0FBQzVCLHNCQUNFO0FBQUssYUFBUyxFQUFDLHNCQUFmO0FBQUEsMkJBQ0UsOERBQUMsTUFBRCxvQkFBWUEsT0FBTyxDQUFDLENBQUQsQ0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEOztNQU5RRCxPOztBQVFULFNBQVNFLFVBQVQsUUFBbUM7QUFBQSxNQUFiQyxFQUFhLFNBQWJBLEVB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RGtCLENBQzNDbEIsS0FEMkM7QUFBQSxNQUNwQ2EsSUFEb0MsR0FDbEJLLEtBRGtCLENBQ3BDTCxJQURvQztBQUFBLE1BQzlCaEIsT0FEOEIsR0FDbEJxQixLQURrQixDQUM5QnJCLE9BRDhCO0FBRXZELHNCQUNFO0FBQUssYUFBUyxFQUFDLDJEQUFmO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMsMkJBQWY7QUFBQSw4QkFDRSw4REFBQyxVQUFEO0FBQVksVUFBRSxFQUFFRSxFQUFoQjtBQUFvQixhQUFLLEVBQUVDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLDhEQUFDLGlCQUFELGtDQUF1QmtCLEtBQXZCO0FBQThCLHdCQUFnQixFQUFFZjtBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFLR2dCLFdBQVcsS0FBSyxJQUFoQixnQkFBdUIsOERBQUMsT0FBRDtBQUFTLGFBQU8sRUFBRXRCO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdkIsR0FBdUQsSUFMMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFTRDs7TUFYUW9CLEs7QUFhVCwrREFBZUEsS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yZGE5M2QwNTljYjQ5OGVmODJhZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIFJhdGluZyh7IHNvdXJjZSwgdmFsdWUgfSkge1xuICByZXR1cm4gKFxuICAgIDxzcGFuIGNsYXNzTmFtZT1cInJhdGluZyB3LTEwMFwiPlxuICAgICAge3NvdXJjZX0gPHN0cm9uZz5WYWx1ZToge3ZhbHVlfTwvc3Ryb25nPlxuICAgIDwvc3Bhbj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gUmF0aW5ncyh7IHJhdGluZ3MgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nQm94IGNhcmQgaC0yNTBcIj5cbiAgICAgIDxSYXRpbmcgey4uLnJhdGluZ3NbMF19IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIE1vdmllSW1hZ2UoeyBpZCwgdGl0bGUgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWUtaW1nIGQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBoLTMwMFwiPlxuICAgICAgPGltZ1xuICAgICAgICBjbGFzc05hbWU9XCJjb250YWluLWZpdFwiXG4gICAgICAgIHNyYz17YC9pbWFnZXMvbW92aWUtJHtpZH0ucG5nYH1cbiAgICAgICAgd2lkdGg9XCIzMDBcIlxuICAgICAgICBhbHQ9e2Ake3RpdGxlfWB9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBNb3ZpZUZhdm9yaXRlKHsgZmF2b3JpdGUsIG9uRmF2b3JpdGVUb2dnbGUgfSkge1xuICBjb25zdCBbaW5UcmFuc2l0aW9uLCBzZXRJblRyYW5zaXRpb25dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBmdW5jdGlvbiBkb25lQ2FsbGJhY2soKSB7XG4gICAgc2V0SW5UcmFuc2l0aW9uKGZhbHNlKTtcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIGBJbiBNb3ZpZUZhdm9yaXRlOmRvbmVDYWxsYmFjayAgICAke25ldyBEYXRlKCkuZ2V0TWlsbGlzZWNvbmRzKCl9YFxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uIHBhZEIxXCI+XG4gICAgICA8c3BhblxuICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2V0SW5UcmFuc2l0aW9uKHRydWUpO1xuICAgICAgICAgIHJldHVybiBvbkZhdm9yaXRlVG9nZ2xlKGRvbmVDYWxsYmFjayk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxpXG4gICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgIGZhdm9yaXRlID09PSB0cnVlID8gXCJmYSBmYS1zdGFyIG9yYW5nZVwiIDogXCJmYSBmYS1zdGFyLW8gb3JhbmdlXCJcbiAgICAgICAgICB9XG4gICAgICAgIC8+e1wiIFwifVxuICAgICAgICBGYXZvcml0ZXtcIiBcIn1cbiAgICAgICAge2luVHJhbnNpdGlvbiA/IChcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYXMgZmEtY2lyY2xlLW5vdGNoIGZhLXNwaW5cIj48L3NwYW4+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBNb3ZpZURlbW9ncmFwaGljcyh7XG4gIHRpdGxlLFxuICB5ZWFyLFxuICByZWxlYXNlZCxcbiAgcnVudGltZSxcbiAgc3VtbWFyeSxcbiAgZmF2b3JpdGUsXG4gIG9uRmF2b3JpdGVUb2dnbGUsXG59KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZS1pbmZvXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtYi0zXCI+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXRydW5jYXRlIHctMjAwXCI+XG4gICAgICAgICAge3RpdGxlfSAtIDxici8+IHt5ZWFyfVxuICAgICAgICAgIHtyZWxlYXNlZH0gLS0ge3J1bnRpbWV9XG4gICAgICAgIDwvaDM+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxNb3ZpZUZhdm9yaXRlXG4gICAgICAgIGZhdm9yaXRlPXtmYXZvcml0ZX1cbiAgICAgICAgb25GYXZvcml0ZVRvZ2dsZT17b25GYXZvcml0ZVRvZ2dsZX1cbiAgICAgIC8+XG4gICAgICA8ZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLWRlc2NyaXB0aW9uXCI+e3N1bW1hcnl9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIE1vdmllKHsgbW92aWUsIHNob3dSYXRpbmdzLCBvbkZhdm9yaXRlVG9nZ2xlIH0pIHtcbiAgY29uc3QgeyBpZCwgdGl0bGUsIHllYXIsIHJhdGluZ3MgfSA9IG1vdmllO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNCBjb2wtc20tMTIgY29sLXhzLTEyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1oZWlnaHQgcC00IG10LTRcIj5cbiAgICAgICAgPE1vdmllSW1hZ2UgaWQ9e2lkfSB0aXRsZT17dGl0bGV9ICAvPlxuICAgICAgICA8TW92aWVEZW1vZ3JhcGhpY3Mgey4uLm1vdmllfSBvbkZhdm9yaXRlVG9nZ2xlPXtvbkZhdm9yaXRlVG9nZ2xlfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICB7c2hvd1JhdGluZ3MgPT09IHRydWUgPyA8UmF0aW5ncyByYXRpbmdzPXtyYXRpbmdzfSAvPiA6IG51bGx9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
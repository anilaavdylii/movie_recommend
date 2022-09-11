(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./MovieData.js":
/*!**********************!*\
  !*** ./MovieData.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": function() { return /* binding */ data; }
/* harmony export */ });
const data = [{
  id: "1",
  title: "Underdog",
  year: "2007",
  released: "03 Aug 2007",
  runtime: "84 min",
  summary: "Underdog tells the story of two brothers, Lincoln and Booth, who, abandoned by their parents, have had to depend upon each other for survival since they were teenagers. ",
  favorite: true,
  ratings: [{
    "Source": "Internet Movie Database",
    "Value": "10"
  }, {
    "Source": "Rotten Tomatoes",
    "Value": "7"
  }, {
    "Source": "Metacritic",
    "Value": "8"
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
    "Value": "9"
  }, {
    "Source": "Metacritic",
    "Value": "10"
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
    "Value": "5"
  }, {
    "Source": "Rotten Tomatoes",
    "Value": "10"
  }, {
    "Source": "Metacritic",
    "Value": "9"
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
    "Value": "6"
  }, {
    "Source": "Rotten Tomatoes",
    "Value": "10"
  }, {
    "Source": "Metacritic",
    "Value": "4"
  }]
}];

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/App */ "./src/components/App.js");

var _jsxFileName = "C:\\Users\\hp\\Desktop\\react\\movie_recommend\\pages\\index.js";


const IndexPage = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_App__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./src/components/Header.js");
/* harmony import */ var _Movies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Movies */ "./src/components/Movies.js");
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Layout */ "./src/components/Layout.js");

var _jsxFileName = "C:\\Users\\hp\\Desktop\\react\\movie_recommend\\src\\components\\App.js";




function App() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Layout__WEBPACK_IMPORTED_MODULE_3__.default, {
    startingTheme: "light",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Movies__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/ThemeContext */ "./src/contexts/ThemeContext.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\hp\\Desktop\\react\\movie_recommend\\src\\components\\Header.js";



function Header() {
  const {
    theme
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_1__.ThemeContext);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "padT4 padB4",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container mobile-container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "d-flex justify-content-between",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            alt: "SVCC Home Page",
            src: "/images/logo.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: theme === "light" ? "" : "text-info",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
            className: "header-title",
            children: "Greatest Movies of All Time"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: theme === "light" ? "" : "text-info",
          children: ["Hello Mr. Smith \xA0\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              children: "sign-out"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Layout.js":
/*!**********************************!*\
  !*** ./src/components/Layout.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ThemeContext */ "./src/contexts/ThemeContext.js");

var _jsxFileName = "C:\\Users\\hp\\Desktop\\react\\movie_recommend\\src\\components\\Layout.js";



function Layout({
  startingTheme,
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {
    startingTheme: startingTheme,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LayoutNoThemeProvider, {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

function LayoutNoThemeProvider({
  children
}) {
  const {
    theme
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_2__.ThemeContext);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: theme === "light" ? "container-fluid light" : "container-fluid dark",
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 13
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/components/Movie.js":
/*!*********************************!*\
  !*** ./src/components/Movie.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_MovieFilterContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../contexts/MovieFilterContext */ "./src/contexts/MovieFilterContext.js");

var _jsxFileName = "C:\\Users\\hp\\Desktop\\react\\movie_recommend\\src\\components\\Movie.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function Rating({
  Source,
  Value
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
    className: "rating w-100",
    children: [Source, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
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

function Ratings({
  ratings
}) {
  const {
    ratingValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_MovieFilterContext__WEBPACK_IMPORTED_MODULE_2__.MovieFilterContext);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "ratingBox card h-250",
    children: ratings.filter(function (rating) {
      return rating.Value === ratingValue;
    }).map(function (rating) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "rating w-100",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Rating, _objectSpread({}, rating), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 13
        }, this)
      }, rating.id, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }, this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

function MovieImage({
  id,
  title
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "movie-img d-flex flex-row justify-content-center align-items-center h-300",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      className: "contain-fit",
      src: `/images/movie-${id}.png`,
      width: "300",
      alt: `${title}`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, this);
}

function MovieFavorite({
  favorite,
  onFavoriteToggle
}) {
  const {
    0: inTransition,
    1: setInTransition
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  function doneCallback() {
    setInTransition(false);
    console.log(`In MovieFavorite:doneCallback    ${new Date().getMilliseconds()}`);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "action padB1",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      onClick: function () {
        setInTransition(true);
        return onFavoriteToggle(doneCallback);
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        className: favorite === true ? "fa fa-star orange" : "fa fa-star-o orange"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, this), " ", "Favorite", " ", inTransition ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "fas fa-circle-notch fa-spin"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 11
      }, this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 5
  }, this);
}

function MovieDemographics({
  title,
  year,
  released,
  runtime,
  summary,
  favorite,
  onFavoriteToggle
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "movie-info",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "d-flex justify-content-between mb-3",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        className: "text-truncate w-200",
        children: [title, "  ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 20
        }, this), released, "  ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 23
        }, this), " ", runtime]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MovieFavorite, {
      favorite: favorite,
      onFavoriteToggle: onFavoriteToggle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "card-description",
        children: summary
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 5
  }, this);
}

function Movie({
  movie,
  onFavoriteToggle
}) {
  const {
    id,
    title,
    year,
    ratings
  } = movie;
  const {
    showRatings
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_MovieFilterContext__WEBPACK_IMPORTED_MODULE_2__.MovieFilterContext);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "card card-height p-4 mt-4",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MovieImage, {
        id: id,
        title: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MovieDemographics, _objectSpread(_objectSpread({}, movie), {}, {
        onFavoriteToggle: onFavoriteToggle
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }, this), showRatings === true ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Ratings, {
      ratings: ratings
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 31
    }, this) : null]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 108,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Movie);

/***/ }),

/***/ "./src/components/Movies.js":
/*!**********************************!*\
  !*** ./src/components/Movies.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MoviesToolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MoviesToolbar */ "./src/components/MoviesToolbar.js");
/* harmony import */ var _MoviesList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MoviesList */ "./src/components/MoviesList.js");
/* harmony import */ var _contexts_MovieFilterContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/MovieFilterContext */ "./src/contexts/MovieFilterContext.js");

var _jsxFileName = "C:\\Users\\hp\\Desktop\\react\\movie_recommend\\src\\components\\Movies.js";




function Movies() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_MovieFilterContext__WEBPACK_IMPORTED_MODULE_3__.MovieFilterProvider, {
    startingShowRatings: false,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MoviesToolbar__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MoviesList__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Movies);

/***/ }),

/***/ "./src/components/MoviesList.js":
/*!**************************************!*\
  !*** ./src/components/MoviesList.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Movie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Movie */ "./src/components/Movie.js");
/* harmony import */ var react_placeholder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-placeholder */ "react-placeholder");
/* harmony import */ var react_placeholder__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_placeholder__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useRequestDelay */ "./src/hooks/useRequestDelay.js");
/* harmony import */ var _MovieData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../MovieData */ "./MovieData.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _contexts_MovieFilterContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../contexts/MovieFilterContext */ "./src/contexts/MovieFilterContext.js");

var _jsxFileName = "C:\\Users\\hp\\Desktop\\react\\movie_recommend\\src\\components\\MoviesList.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function MoviesList() {
  const {
    data: moviesData,
    requestStatus,
    error,
    updateRecord
  } = (0,_hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__.default)(2000, _MovieData__WEBPACK_IMPORTED_MODULE_4__.data);
  const {
    searchQuery,
    ratingValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_contexts_MovieFilterContext__WEBPACK_IMPORTED_MODULE_6__.MovieFilterContext);

  if (requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__.REQUEST_STATUS.FAILURE) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "text-danger",
      children: ["ERROR: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container movies-list",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_placeholder__WEBPACK_IMPORTED_MODULE_2___default()), {
      type: "media",
      rows: 20,
      className: "movieslist-placeholder",
      ready: requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__.REQUEST_STATUS.SUCCESS,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: moviesData.filter(function (movie) {
          return movie.title.toLowerCase().includes(searchQuery);
        }).filter(function (movie) {
          return movie.ratings.find(rating => {
            return rating.Value === ratingValue;
          });
        }).map(function (movie) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Movie__WEBPACK_IMPORTED_MODULE_1__.default, {
            movie: movie,
            onFavoriteToggle: doneCallback => {
              updateRecord(_objectSpread(_objectSpread({}, movie), {}, {
                favorite: !movie.favorite
              }), doneCallback);
            }
          }, movie.id, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
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

/* harmony default export */ __webpack_exports__["default"] = (MoviesList);

/***/ }),

/***/ "./src/components/MoviesToolbar.js":
/*!*****************************************!*\
  !*** ./src/components/MoviesToolbar.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/ThemeContext */ "./src/contexts/ThemeContext.js");
/* harmony import */ var _contexts_MovieFilterContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/MovieFilterContext */ "./src/contexts/MovieFilterContext.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\hp\\Desktop\\react\\movie_recommend\\src\\components\\MoviesToolbar.js";




function MoviesToolbar() {
  const {
    theme,
    setTheme
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_1__.ThemeContext);
  const {
    showRatings,
    setShowRatings,
    ratingValue,
    setRatingValue,
    setSearchQuery,
    RATING_VALUES
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_contexts_MovieFilterContext__WEBPACK_IMPORTED_MODULE_2__.MovieFilterContext);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: "toolbar dark-theme-header",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "justify-content-between",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          className: "toolrow d-flex flex-column flex-lg-row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "d-flex flex-column flex-md-row",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
              children: "Show Ratings\xA0\xA0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              className: "fav",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                type: "checkbox",
                checked: showRatings,
                onChange: event => {
                  setShowRatings(event.target.checked);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 18,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "switch"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "d-flex flex-column flex-md-row ml-sm-5 ml-0",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
              children: "Theme"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              className: "dropdown",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
                className: "form-control theme",
                value: theme,
                onChange: event => {
                  setTheme(event.target.value);
                },
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                  value: "light",
                  children: "Light"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 38,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                  value: "dark",
                  children: "Dark"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 39,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 31,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "input-group",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                type: "text",
                className: "form-control",
                placeholder: "Search...",
                onChange: event => {
                  setSearchQuery(event.target.value);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "input-group-append",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                  className: "btn btn-secondary",
                  type: "button",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                    className: "fa fa-search"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 55,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "d-flex flex-column flex-md-row",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
              children: "Rating Value"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              className: "dropmenu",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
                className: "form-control",
                value: ratingValue,
                onChange: ({
                  currentTarget
                }) => {
                  setRatingValue(currentTarget.value);
                },
                children: RATING_VALUES.map(function (ratingv) {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                    value: ratingv,
                    children: ratingv
                  }, ratingv, false, {
                    fileName: _jsxFileName,
                    lineNumber: 69,
                    columnNumber: 29
                  }, this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MoviesToolbar);

/***/ }),

/***/ "./src/contexts/MovieFilterContext.js":
/*!********************************************!*\
  !*** ./src/contexts/MovieFilterContext.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MovieFilterContext": function() { return /* binding */ MovieFilterContext; },
/* harmony export */   "MovieFilterProvider": function() { return /* binding */ MovieFilterProvider; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useMovieFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useMovieFilter */ "./src/hooks/useMovieFilter.js");

var _jsxFileName = "C:\\Users\\hp\\Desktop\\react\\movie_recommend\\src\\contexts\\MovieFilterContext.js";


const MovieFilterContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();

function MovieFilterProvider({
  children,
  startingShowRatings = false,
  startingRatingValue = "10"
}) {
  const {
    showRatings,
    setShowRatings,
    ratingValue,
    setRatingValue,
    searchQuery,
    setSearchQuery,
    RATING_VALUES
  } = (0,_hooks_useMovieFilter__WEBPACK_IMPORTED_MODULE_2__.default)(startingShowRatings, startingRatingValue);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MovieFilterContext.Provider, {
    value: {
      showRatings,
      setShowRatings,
      ratingValue,
      setRatingValue,
      searchQuery,
      setSearchQuery,
      RATING_VALUES
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, this);
}



/***/ }),

/***/ "./src/contexts/ThemeContext.js":
/*!**************************************!*\
  !*** ./src/contexts/ThemeContext.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeContext": function() { return /* binding */ ThemeContext; },
/* harmony export */   "ThemeProvider": function() { return /* binding */ ThemeProvider; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useTheme */ "./src/hooks/useTheme.js");

var _jsxFileName = "C:\\Users\\hp\\Desktop\\react\\movie_recommend\\src\\contexts\\ThemeContext.js";


const ThemeContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();

function ThemeProvider({
  children,
  startingTheme
}) {
  const {
    theme,
    setTheme
  } = (0,_hooks_useTheme__WEBPACK_IMPORTED_MODULE_2__.default)(startingTheme);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ThemeContext.Provider, {
    value: {
      setTheme,
      theme
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}



/***/ }),

/***/ "./src/hooks/useMovieFilter.js":
/*!*************************************!*\
  !*** ./src/hooks/useMovieFilter.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useMovieFilter(startingShowRatings, startingRatingValue) {
  const {
    0: showRatings,
    1: setShowRatings
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(startingShowRatings);
  const {
    0: ratingValue,
    1: setRatingValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(startingRatingValue);
  const {
    0: searchQuery,
    1: setSearchQuery
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const RATING_VALUES = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  return {
    showRatings,
    setShowRatings,
    ratingValue,
    setRatingValue,
    searchQuery,
    setSearchQuery,
    RATING_VALUES
  };
}

/* harmony default export */ __webpack_exports__["default"] = (useMovieFilter);

/***/ }),

/***/ "./src/hooks/useRequestDelay.js":
/*!**************************************!*\
  !*** ./src/hooks/useRequestDelay.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "REQUEST_STATUS": function() { return /* binding */ REQUEST_STATUS; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const REQUEST_STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  FAILURE: "failure"
};

function useRequestDelay(delayTime = 1000, initialData = []) {
  const {
    0: data,
    1: setData
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: requestStatus,
    1: setRequestStatus
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(REQUEST_STATUS.LOADING);
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");

  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    async function delayFunc() {
      try {
        await delay(delayTime);
        setRequestStatus(REQUEST_STATUS.SUCCESS);
        setData(initialData);
      } catch (e) {
        setRequestStatus(REQUEST_STATUS.FAILURE);
        setError(e);
      }
    }

    delayFunc();
  }, []);

  function updateRecord(recordUpdated, doneCallback) {
    const originalRecords = [...data];
    const newRecords = data.map(function (rec) {
      return rec.id === recordUpdated.id ? recordUpdated : rec;
    });

    async function delayFunction() {
      try {
        setData(newRecords);
        await delay(delayTime);

        if (doneCallback) {
          doneCallback();
        }
      } catch (error) {
        console.log("error thrown inside delayFunction", error);

        if (doneCallback) {
          doneCallback();
        }

        setData(originalRecords);
      }
    }

    delayFunction();
  }

  return {
    data,
    requestStatus,
    error,
    updateRecord
  };
}

/* harmony default export */ __webpack_exports__["default"] = (useRequestDelay);

/***/ }),

/***/ "./src/hooks/useTheme.js":
/*!*******************************!*\
  !*** ./src/hooks/useTheme.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useTheme(startingTheme = "light") {
  const {
    0: theme,
    1: setTheme
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(startingTheme);

  function validateTheme(themeValue) {
    if (themeValue === "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return {
    theme,
    setTheme: validateTheme
  };
}

/* harmony default export */ __webpack_exports__["default"] = (useTheme);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-placeholder":
/*!************************************!*\
  !*** external "react-placeholder" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-placeholder");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3ZpZV9yZWNvbW1lbmQvLi9Nb3ZpZURhdGEuanMiLCJ3ZWJwYWNrOi8vbW92aWVfcmVjb21tZW5kLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbW92aWVfcmVjb21tZW5kLy4vc3JjL2NvbXBvbmVudHMvQXBwLmpzIiwid2VicGFjazovL21vdmllX3JlY29tbWVuZC8uL3NyYy9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9tb3ZpZV9yZWNvbW1lbmQvLi9zcmMvY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vbW92aWVfcmVjb21tZW5kLy4vc3JjL2NvbXBvbmVudHMvTW92aWUuanMiLCJ3ZWJwYWNrOi8vbW92aWVfcmVjb21tZW5kLy4vc3JjL2NvbXBvbmVudHMvTW92aWVzLmpzIiwid2VicGFjazovL21vdmllX3JlY29tbWVuZC8uL3NyYy9jb21wb25lbnRzL01vdmllc0xpc3QuanMiLCJ3ZWJwYWNrOi8vbW92aWVfcmVjb21tZW5kLy4vc3JjL2NvbXBvbmVudHMvTW92aWVzVG9vbGJhci5qcyIsIndlYnBhY2s6Ly9tb3ZpZV9yZWNvbW1lbmQvLi9zcmMvY29udGV4dHMvTW92aWVGaWx0ZXJDb250ZXh0LmpzIiwid2VicGFjazovL21vdmllX3JlY29tbWVuZC8uL3NyYy9jb250ZXh0cy9UaGVtZUNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vbW92aWVfcmVjb21tZW5kLy4vc3JjL2hvb2tzL3VzZU1vdmllRmlsdGVyLmpzIiwid2VicGFjazovL21vdmllX3JlY29tbWVuZC8uL3NyYy9ob29rcy91c2VSZXF1ZXN0RGVsYXkuanMiLCJ3ZWJwYWNrOi8vbW92aWVfcmVjb21tZW5kLy4vc3JjL2hvb2tzL3VzZVRoZW1lLmpzIiwid2VicGFjazovL21vdmllX3JlY29tbWVuZC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbW92aWVfcmVjb21tZW5kL2V4dGVybmFsIFwicmVhY3QtcGxhY2Vob2xkZXJcIiIsIndlYnBhY2s6Ly9tb3ZpZV9yZWNvbW1lbmQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJkYXRhIiwiaWQiLCJ0aXRsZSIsInllYXIiLCJyZWxlYXNlZCIsInJ1bnRpbWUiLCJzdW1tYXJ5IiwiZmF2b3JpdGUiLCJyYXRpbmdzIiwiSW5kZXhQYWdlIiwiQXBwIiwiSGVhZGVyIiwidGhlbWUiLCJ1c2VDb250ZXh0IiwiVGhlbWVDb250ZXh0IiwiTGF5b3V0Iiwic3RhcnRpbmdUaGVtZSIsImNoaWxkcmVuIiwiTGF5b3V0Tm9UaGVtZVByb3ZpZGVyIiwiUmF0aW5nIiwiU291cmNlIiwiVmFsdWUiLCJSYXRpbmdzIiwicmF0aW5nVmFsdWUiLCJNb3ZpZUZpbHRlckNvbnRleHQiLCJmaWx0ZXIiLCJyYXRpbmciLCJtYXAiLCJNb3ZpZUltYWdlIiwiTW92aWVGYXZvcml0ZSIsIm9uRmF2b3JpdGVUb2dnbGUiLCJpblRyYW5zaXRpb24iLCJzZXRJblRyYW5zaXRpb24iLCJ1c2VTdGF0ZSIsImRvbmVDYWxsYmFjayIsImNvbnNvbGUiLCJsb2ciLCJEYXRlIiwiZ2V0TWlsbGlzZWNvbmRzIiwiTW92aWVEZW1vZ3JhcGhpY3MiLCJNb3ZpZSIsIm1vdmllIiwic2hvd1JhdGluZ3MiLCJNb3ZpZXMiLCJNb3ZpZXNMaXN0IiwibW92aWVzRGF0YSIsInJlcXVlc3RTdGF0dXMiLCJlcnJvciIsInVwZGF0ZVJlY29yZCIsInVzZVJlcXVlc3REZWxheSIsInNlYXJjaFF1ZXJ5IiwiUkVRVUVTVF9TVEFUVVMiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiZmluZCIsIk1vdmllc1Rvb2xiYXIiLCJzZXRUaGVtZSIsInNldFNob3dSYXRpbmdzIiwic2V0UmF0aW5nVmFsdWUiLCJzZXRTZWFyY2hRdWVyeSIsIlJBVElOR19WQUxVRVMiLCJldmVudCIsInRhcmdldCIsImNoZWNrZWQiLCJ2YWx1ZSIsImN1cnJlbnRUYXJnZXQiLCJyYXRpbmd2IiwiY3JlYXRlQ29udGV4dCIsIk1vdmllRmlsdGVyUHJvdmlkZXIiLCJzdGFydGluZ1Nob3dSYXRpbmdzIiwic3RhcnRpbmdSYXRpbmdWYWx1ZSIsInVzZU1vdmllRmlsdGVyIiwiVGhlbWVQcm92aWRlciIsInVzZVRoZW1lIiwiTE9BRElORyIsIlNVQ0NFU1MiLCJGQUlMVVJFIiwiZGVsYXlUaW1lIiwiaW5pdGlhbERhdGEiLCJzZXREYXRhIiwic2V0UmVxdWVzdFN0YXR1cyIsInNldEVycm9yIiwiZGVsYXkiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsInVzZUVmZmVjdCIsImRlbGF5RnVuYyIsImUiLCJyZWNvcmRVcGRhdGVkIiwib3JpZ2luYWxSZWNvcmRzIiwibmV3UmVjb3JkcyIsInJlYyIsImRlbGF5RnVuY3Rpb24iLCJ2YWxpZGF0ZVRoZW1lIiwidGhlbWVWYWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxNQUFNQSxJQUFJLEdBQUcsQ0FDbEI7QUFDRUMsSUFBRSxFQUFFLEdBRE47QUFFRUMsT0FBSyxFQUFFLFVBRlQ7QUFHRUMsTUFBSSxFQUFFLE1BSFI7QUFJRUMsVUFBUSxFQUFFLGFBSlo7QUFLRUMsU0FBTyxFQUFFLFFBTFg7QUFNRUMsU0FBTyxFQUNMLDJLQVBKO0FBUUVDLFVBQVEsRUFBRSxJQVJaO0FBU0VDLFNBQU8sRUFBRSxDQUNQO0FBQ0UsY0FBVSx5QkFEWjtBQUVFLGFBQVM7QUFGWCxHQURPLEVBS1A7QUFDRSxjQUFVLGlCQURaO0FBRUUsYUFBUztBQUZYLEdBTE8sRUFTUDtBQUNFLGNBQVUsWUFEWjtBQUVFLGFBQVM7QUFGWCxHQVRPO0FBVFgsQ0FEa0IsRUF5QmxCO0FBQ0VQLElBQUUsRUFBRSxHQUROO0FBRUVDLE9BQUssRUFBRSxjQUZUO0FBR0VDLE1BQUksRUFBRSxNQUhSO0FBSUVDLFVBQVEsRUFBRSxhQUpaO0FBS0VDLFNBQU8sRUFBRSxRQUxYO0FBTUVDLFNBQU8sRUFDTCxvUEFQSjtBQU82UEMsVUFBUSxFQUFFLEtBUHZRO0FBUUVDLFNBQU8sRUFB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UixDQUFZLG1DQUFaLEVBQWlEVyxLQUFqRDs7QUFDQSxZQUFJYixZQUFKLEVBQWtCO0FBQ2hCQSxzQkFBWTtBQUNiOztBQUNENkMsZUFBTyxDQUFDWSxlQUFELENBQVA7QUFDRDtBQUNGOztBQUNERyxpQkFBYTtBQUNkOztBQUVELFNBQU87QUFDTDlGLFFBREs7QUFFTDhDLGlCQUZLO0FBR0xDLFNBSEs7QUFJTEM7QUFKSyxHQUFQO0FBTUQ7O0FBRUQsK0RBQWVDLGVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7QUMzREE7O0FBRUEsU0FBU3dCLFFBQVQsQ0FBa0J6RCxhQUFhLEdBQUMsT0FBaEMsRUFBd0M7QUFFcEMsUUFBTTtBQUFBLE9BQUNKLEtBQUQ7QUFBQSxPQUFRNEM7QUFBUixNQUFtQnZCLCtDQUFRLENBQUNqQixhQUFELENBQWpDOztBQUVBLFdBQVMrRSxhQUFULENBQXVCQyxVQUF2QixFQUFrQztBQUM5QixRQUFHQSxVQUFVLEtBQUssTUFBbEIsRUFBeUI7QUFDckJ4QyxjQUFRLENBQUMsTUFBRCxDQUFSO0FBQ0gsS0FGRCxNQUdJO0FBQ0FBLGNBQVEsQ0FBQyxPQUFELENBQVI7QUFDSDtBQUNKOztBQUVELFNBQU07QUFDRjVDLFNBREU7QUFFRjRDLFlBQVEsRUFBRXVDO0FBRlIsR0FBTjtBQUlIOztBQUNELCtEQUFldEIsUUFBZixFOzs7Ozs7Ozs7OztBQ3BCQSxtQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBkYXRhID0gW1xuICB7XG4gICAgaWQ6IFwiMVwiLFxuICAgIHRpdGxlOiBcIlVuZGVyZG9nXCIsXG4gICAgeWVhcjogXCIyMDA3XCIsXG4gICAgcmVsZWFzZWQ6IFwiMDMgQXVnIDIwMDdcIixcbiAgICBydW50aW1lOiBcIjg0IG1pblwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIlVuZGVyZG9nIHRlbGxzIHRoZSBzdG9yeSBvZiB0d28gYnJvdGhlcnMsIExpbmNvbG4gYW5kIEJvb3RoLCB3aG8sIGFiYW5kb25lZCBieSB0aGVpciBwYXJlbnRzLCBoYXZlIGhhZCB0byBkZXBlbmQgdXBvbiBlYWNoIG90aGVyIGZvciBzdXJ2aXZhbCBzaW5jZSB0aGV5IHdlcmUgdGVlbmFnZXJzLiBcIixcbiAgICBmYXZvcml0ZTogdHJ1ZSxcbiAgICByYXRpbmdzOiBbXG4gICAgICB7XG4gICAgICAgIFwiU291cmNlXCI6IFwiSW50ZXJuZXQgTW92aWUgRGF0YWJhc2VcIixcbiAgICAgICAgXCJWYWx1ZVwiOiBcIjEwXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiU291cmNlXCI6IFwiUm90dGVuIFRvbWF0b2VzXCIsXG4gICAgICAgIFwiVmFsdWVcIjogXCI3XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiU291cmNlXCI6IFwiTWV0YWNyaXRpY1wiLFxuICAgICAgICBcIlZhbHVlXCI6IFwiOFwiXG4gICAgICB9XG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcIjJcIixcbiAgICB0aXRsZTogXCJIb25lc3QgVGhpZWZcIixcbiAgICB5ZWFyOiBcIjIwMjBcIixcbiAgICByZWxlYXNlZDogXCIxNiBPY3QgMjAyMFwiLFxuICAgIHJ1bnRpbWU6IFwiOTkgbWluXCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiSG9waW5nIHRvIGN1dCBhIGRlYWwsIGEgcHJvZmVzc2lvbmFsIGJhbmsgcm9iYmVyIGFncmVlcyB0byByZXR1cm4gYWxsIHRoZSBtb25leSBoZSBzdG9sZSBpbiBleGNoYW5nZSBmb3IgYSByZWR1Y2VkIHNlbnRlbmNlLiBXaGVuIHR3byBGQkkgYWdlbnRzIHNldCBoaW0gdXAgZm9yIG11cmRlciwgaGUgaXMgZm9yY2VkIHRvIGdvIG9uIHRoZSBydW4gdG8gY2xlYXIgaGlzIG5hbWUgYW5kIGJyaW5nIHRoZW0gdG8ganVzdGljZS5cIiwgICAgZmF2b3JpdGU6IGZhbHNlLFxuICAgIHJhdGluZ3M6IFtcbiAgICAgIHtcbiAgICAgICAgXCJTb3VyY2VcIjogXCJJbnRlcm5ldCBNb3ZpZSBEYXRhYmFzZVwiLFxuICAgICAgICBcIlZhbHVlXCI6IFwiOVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIlNvdXJjZVwiOiBcIk1ldGFjcml0aWNcIixcbiAgICAgICAgXCJWYWx1ZVwiOiBcIjEwXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBpZDogXCIzXCIsXG4gICAgdGl0bGU6IFwiRGVhZHBvb2xcIixcbiAgICB5ZWFyOiBcIjIwMTZcIixcbiAgICByZWxlYXNlZDogXCIxMiBGZWIgMjAxNlwiLFxuICAgIHJ1bnRpbWU6IFwiMTA4IG1pblwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIklzIGEgMjAxNiBBbWVyaWNhbiBzdXBlcmhlcm8gZmlsbSBiYXNlZCBvbiB0aGUgTWFydmVsIENvbWljcyBjaGFyYWN0ZXIgb2YgdGhlIHNhbWUgbmFtZS4gRGlzdHJpYnV0ZWQgYnkgMjB0aCBDZW50dXJ5IEZveCwgaXQgaXMgYSBzcGluLW9mZiBpbiB0aGUgWC1NZW4gZmlsbSBzZXJpZXMgYW5kIHRoZSBlaWdodGggaW5zdGFsbG1lbnQgb3ZlcmFsbC5cIixcbiAgICBmYXZvcml0ZTogdHJ1ZSxcbiAgICByYXRpbmdzOiBbXG4gICAgICB7XG4gICAgICAgIFwiU291cmNlXCI6IFwiSW50ZXJuZXQgTW92aWUgRGF0YWJhc2VcIixcbiAgICAgICAgXCJWYWx1ZVwiOiBcIjVcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJTb3VyY2VcIjogXCJSb3R0ZW4gVG9tYXRvZXNcIixcbiAgICAgICAgXCJWYWx1ZVwiOiBcIjEwXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiU291cmNlXCI6IFwiTWV0YWNyaXRpY1wiLFxuICAgICAgICBcIlZhbHVlXCI6IFwiOVwiXG4gICAgICB9XG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcIjRcIixcbiAgICB0aXRsZTogXCJCcnVjZSBBbG1pZ2h0eVwiLFxuICAgIHllYXI6IFwiMjAwM1wiLFxuICAgIHJlbGVhc2VkOiBcIjIzIE1heSAyMDAzXCIsXG4gICAgcnVudGltZTogXCIxMDEgbWluXCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiSXMgYSAyMDAzIEFtZXJpY2FuIGZhbnRhc3kgY29tZWR5IGZpbG0gZGlyZWN0ZWQgYnkgVG9tIFNoYWR5YWMgYW5kIHdyaXR0ZW4gYnkgU3RldmUgS29yZW4sIE1hcmsgTydLZWVmZSBhbmQgU3RldmUgT2VkZWtlcmtcIixcbiAgICBmYXZvcml0ZTogdHJ1ZSxcbiAgICByYXRpbmdzOiBbXG4gICAgICB7XG4gICAgICAgIFwiU291cmNlXCI6IFwiSW50ZXJuZXQgTW92aWUgRGF0YWJhc2VcIixcbiAgICAgICAgXCJWYWx1ZVwiOiBcIjZcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJTb3VyY2VcIjogXCJSb3R0ZW4gVG9tYXRvZXNcIixcbiAgICAgICAgXCJWYWx1ZVwiOiBcIjEwXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiU291cmNlXCI6IFwiTWV0YWNyaXRpY1wiLFxuICAgICAgICBcIlZhbHVlXCI6IFwiNFwiXG4gICAgICB9XG4gICAgXSxcbiAgfSxcblxuXTtcbiIsImltcG9ydCBBcHAgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL0FwcFwiO1xuY29uc3QgSW5kZXhQYWdlID0gKCkgPT4ge1xuICByZXR1cm4gPEFwcCAvPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTtcbiIsImltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG5pbXBvcnQgTW92aWVzIGZyb20gXCIuL01vdmllc1wiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi9MYXlvdXRcIjtcblxuXG5mdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPExheW91dCBzdGFydGluZ1RoZW1lPVwibGlnaHRcIj5cbiAgICAgIDxkaXYgPlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxNb3ZpZXMgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQge1RoZW1lQ29udGV4dH0gZnJvbSBcIi4uL2NvbnRleHRzL1RoZW1lQ29udGV4dFwiO1xuaW1wb3J0IHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIEhlYWRlcigpIHtcblxuICBjb25zdCB7dGhlbWV9ID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYWRUNCBwYWRCNFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbW9iaWxlLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW1nIGFsdD1cIlNWQ0MgSG9tZSBQYWdlXCIgc3JjPVwiL2ltYWdlcy9sb2dvLnBuZ1wiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoZW1lID09PSBcImxpZ2h0XCIgPyBcIlwiIDogXCJ0ZXh0LWluZm9cIn0+XG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiaGVhZGVyLXRpdGxlXCI+R3JlYXRlc3QgTW92aWVzIG9mIEFsbCBUaW1lPC9oND5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhlbWUgPT09IFwibGlnaHRcIiA/IFwiXCIgOiBcInRleHQtaW5mb1wifT5cbiAgICAgICAgICAgIEhlbGxvIE1yLiBTbWl0aCAmbmJzcDsmbmJzcDtcbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPnNpZ24tb3V0PC9hPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRoZW1lQ29udGV4dCwgVGhlbWVQcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHRzL1RoZW1lQ29udGV4dCc7XHJcblxyXG5mdW5jdGlvbiBMYXlvdXQoe3N0YXJ0aW5nVGhlbWUsIGNoaWxkcmVufSl7XHJcbiAgcmV0dXJuKFxyXG4gICAgPFRoZW1lUHJvdmlkZXIgc3RhcnRpbmdUaGVtZT17c3RhcnRpbmdUaGVtZX0gID5cclxuICAgICAgPExheW91dE5vVGhlbWVQcm92aWRlcj57Y2hpbGRyZW59PC9MYXlvdXROb1RoZW1lUHJvdmlkZXI+XHJcbiAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gTGF5b3V0Tm9UaGVtZVByb3ZpZGVyKHtjaGlsZHJlbn0pe1xyXG5cclxuICBjb25zdCB7dGhlbWV9ID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgIHRoZW1lID09PSBcImxpZ2h0XCIgPyBcImNvbnRhaW5lci1mbHVpZCBsaWdodFwiIDogXCJjb250YWluZXItZmx1aWQgZGFya1wiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge01vdmllRmlsdGVyQ29udGV4dH0gZnJvbSBcIi4vLi4vY29udGV4dHMvTW92aWVGaWx0ZXJDb250ZXh0XCI7XHJcblxyXG5mdW5jdGlvbiBSYXRpbmcoeyBTb3VyY2UsIFZhbHVlIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwicmF0aW5nIHctMTAwXCI+XHJcbiAgICAgIHtTb3VyY2V9IDxzdHJvbmc+VmFsdWU6IHtWYWx1ZX0vMTA8L3N0cm9uZz5cclxuICAgIDwvc3Bhbj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBSYXRpbmdzKHsgcmF0aW5ncyB9KSB7XHJcbiAgY29uc3Qge3JhdGluZ1ZhbHVlfSA9IHVzZUNvbnRleHQoTW92aWVGaWx0ZXJDb250ZXh0KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nQm94IGNhcmQgaC0yNTBcIj5cclxuICAgICAge3JhdGluZ3MuZmlsdGVyKGZ1bmN0aW9uKHJhdGluZyl7XHJcbiAgICAgICAgcmV0dXJuIHJhdGluZy5WYWx1ZSA9PT0gcmF0aW5nVmFsdWU7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5tYXAoZnVuY3Rpb24ocmF0aW5nKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZyB3LTEwMFwiIGtleT17cmF0aW5nLmlkfT5cclxuICAgICAgICAgICAgPFJhdGluZyB7Li4ucmF0aW5nfS8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE1vdmllSW1hZ2UoeyBpZCwgdGl0bGUgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdmllLWltZyBkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgaC0zMDBcIj5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW4tZml0XCJcclxuICAgICAgICBzcmM9e2AvaW1hZ2VzL21vdmllLSR7aWR9LnBuZ2B9XHJcbiAgICAgICAgd2lkdGg9XCIzMDBcIlxyXG4gICAgICAgIGFsdD17YCR7dGl0bGV9YH1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE1vdmllRmF2b3JpdGUoeyBmYXZvcml0ZSwgb25GYXZvcml0ZVRvZ2dsZSB9KSB7XHJcbiAgY29uc3QgW2luVHJhbnNpdGlvbiwgc2V0SW5UcmFuc2l0aW9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBmdW5jdGlvbiBkb25lQ2FsbGJhY2soKSB7XHJcbiAgICBzZXRJblRyYW5zaXRpb24oZmFsc2UpO1xyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgIGBJbiBNb3ZpZUZhdm9yaXRlOmRvbmVDYWxsYmFjayAgICAke25ldyBEYXRlKCkuZ2V0TWlsbGlzZWNvbmRzKCl9YFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbiBwYWRCMVwiPlxyXG4gICAgICA8c3BhblxyXG4gICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHNldEluVHJhbnNpdGlvbih0cnVlKTtcclxuICAgICAgICAgIHJldHVybiBvbkZhdm9yaXRlVG9nZ2xlKGRvbmVDYWxsYmFjayk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxpXHJcbiAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICBmYXZvcml0ZSA9PT0gdHJ1ZSA/IFwiZmEgZmEtc3RhciBvcmFuZ2VcIiA6IFwiZmEgZmEtc3Rhci1vIG9yYW5nZVwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgLz57XCIgXCJ9XHJcbiAgICAgICAgRmF2b3JpdGV7XCIgXCJ9XHJcbiAgICAgICAge2luVHJhbnNpdGlvbiA/IChcclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhcyBmYS1jaXJjbGUtbm90Y2ggZmEtc3BpblwiPjwvc3Bhbj5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gTW92aWVEZW1vZ3JhcGhpY3Moe1xyXG4gIHRpdGxlLFxyXG4gIHllYXIsXHJcbiAgcmVsZWFzZWQsXHJcbiAgcnVudGltZSxcclxuICBzdW1tYXJ5LFxyXG4gIGZhdm9yaXRlLFxyXG4gIG9uRmF2b3JpdGVUb2dnbGUsXHJcbn0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZS1pbmZvXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG1iLTNcIj5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC10cnVuY2F0ZSB3LTIwMFwiPlxyXG4gICAgICAgICAge3RpdGxlfSAgPGJyLz4gXHJcbiAgICAgICAgICB7cmVsZWFzZWR9ICA8YnIvPiB7cnVudGltZX1cclxuICAgICAgICA8L2gzPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPE1vdmllRmF2b3JpdGVcclxuICAgICAgICBmYXZvcml0ZT17ZmF2b3JpdGV9XHJcbiAgICAgICAgb25GYXZvcml0ZVRvZ2dsZT17b25GYXZvcml0ZVRvZ2dsZX1cclxuICAgICAgLz5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLWRlc2NyaXB0aW9uXCI+e3N1bW1hcnl9PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE1vdmllKHsgbW92aWUsIG9uRmF2b3JpdGVUb2dnbGUgfSkge1xyXG4gIGNvbnN0IHsgaWQsIHRpdGxlLCB5ZWFyLCByYXRpbmdzIH0gPSBtb3ZpZTtcclxuICBjb25zdCB7c2hvd1JhdGluZ3N9ID0gdXNlQ29udGV4dChNb3ZpZUZpbHRlckNvbnRleHQpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTQgY29sLXNtLTEyIGNvbC14cy0xMlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1oZWlnaHQgcC00IG10LTRcIj5cclxuICAgICAgICA8TW92aWVJbWFnZSBpZD17aWR9IHRpdGxlPXt0aXRsZX0gIC8+XHJcbiAgICAgICAgPE1vdmllRGVtb2dyYXBoaWNzIHsuLi5tb3ZpZX0gb25GYXZvcml0ZVRvZ2dsZT17b25GYXZvcml0ZVRvZ2dsZX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtzaG93UmF0aW5ncyA9PT0gdHJ1ZSA/IDxSYXRpbmdzIHJhdGluZ3M9e3JhdGluZ3N9IC8+IDogbnVsbH1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vdmllO1xyXG4iLCJpbXBvcnQgTW92aWVzVG9vbGJhciBmcm9tIFwiLi9Nb3ZpZXNUb29sYmFyXCI7XHJcbmltcG9ydCBNb3ZpZXNMaXN0IGZyb20gXCIuL01vdmllc0xpc3RcIjtcclxuaW1wb3J0IHtNb3ZpZUZpbHRlclByb3ZpZGVyfSBmcm9tIFwiLi4vY29udGV4dHMvTW92aWVGaWx0ZXJDb250ZXh0XCI7XHJcblxyXG5mdW5jdGlvbiBNb3ZpZXMoKSB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TW92aWVGaWx0ZXJQcm92aWRlciBzdGFydGluZ1Nob3dSYXRpbmdzPXtmYWxzZX0+XHJcbiAgICAgIDxNb3ZpZXNUb29sYmFyIC8+XHJcbiAgICAgIDxNb3ZpZXNMaXN0IC8+XHJcbiAgICA8L01vdmllRmlsdGVyUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW92aWVzO1xyXG4iLCJpbXBvcnQgTW92aWUgZnJvbSBcIi4vTW92aWVcIjtcclxuaW1wb3J0IFJlYWN0UGxhY2VIb2xkZXIgZnJvbSBcInJlYWN0LXBsYWNlaG9sZGVyXCI7XHJcbmltcG9ydCB1c2VSZXF1ZXN0RGVsYXksIHsgUkVRVUVTVF9TVEFUVVMgfSBmcm9tIFwiLi4vaG9va3MvdXNlUmVxdWVzdERlbGF5XCI7XHJcbmltcG9ydCB7IGRhdGEgfSBmcm9tIFwiLi4vLi4vTW92aWVEYXRhXCI7XHJcbmltcG9ydCB7dXNlQ29udGV4dH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7TW92aWVGaWx0ZXJDb250ZXh0fSBmcm9tIFwiLi8uLi9jb250ZXh0cy9Nb3ZpZUZpbHRlckNvbnRleHRcIjtcclxuXHJcbmZ1bmN0aW9uIE1vdmllc0xpc3QoKSB7XHJcbiAgY29uc3Qge1xyXG4gICAgZGF0YTogbW92aWVzRGF0YSxcclxuICAgIHJlcXVlc3RTdGF0dXMsXHJcbiAgICBlcnJvcixcclxuICAgIHVwZGF0ZVJlY29yZCxcclxuICB9ID0gdXNlUmVxdWVzdERlbGF5KDIwMDAsIGRhdGEpO1xyXG5cclxuICBjb25zdCB7IHNlYXJjaFF1ZXJ5LCByYXRpbmdWYWx1ZSB9ID0gdXNlQ29udGV4dChNb3ZpZUZpbHRlckNvbnRleHQpO1xyXG5cclxuICBpZiAocmVxdWVzdFN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuRkFJTFVSRSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPlxyXG4gICAgICAgIEVSUk9SOiA8Yj5sb2FkaW5nIE1vdmllIERhdGEgRmFpbGVkIHtlcnJvcn08L2I+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbW92aWVzLWxpc3RcIj5cclxuICAgICAgPFJlYWN0UGxhY2VIb2xkZXJcclxuICAgICAgICB0eXBlPVwibWVkaWFcIlxyXG4gICAgICAgIHJvd3M9ezIwfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1vdmllc2xpc3QtcGxhY2Vob2xkZXJcIlxyXG4gICAgICAgIHJlYWR5PXtyZXF1ZXN0U3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5TVUNDRVNTfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIHttb3ZpZXNEYXRhXHJcbiAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uKG1vdmllKXtcclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgIG1vdmllLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoUXVlcnkpIFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24obW92aWUpe1xyXG4gICAgICAgICAgICByZXR1cm4gbW92aWUucmF0aW5ncy5maW5kKChyYXRpbmcpPT57XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHJhdGluZy5WYWx1ZSA9PT0gcmF0aW5nVmFsdWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLm1hcChmdW5jdGlvbiAobW92aWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8TW92aWVcclxuICAgICAgICAgICAgICAgIGtleT17bW92aWUuaWR9XHJcbiAgICAgICAgICAgICAgICBtb3ZpZT17bW92aWV9XHJcbiAgICAgICAgICAgICAgICBvbkZhdm9yaXRlVG9nZ2xlPXsoZG9uZUNhbGxiYWNrKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHVwZGF0ZVJlY29yZChcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAuLi5tb3ZpZSxcclxuICAgICAgICAgICAgICAgICAgICAgIGZhdm9yaXRlOiAhbW92aWUuZmF2b3JpdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBkb25lQ2FsbGJhY2tcclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1JlYWN0UGxhY2VIb2xkZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3ZpZXNMaXN0O1xyXG4iLCJpbXBvcnQge1RoZW1lQ29udGV4dH0gZnJvbSBcIi4uL2NvbnRleHRzL1RoZW1lQ29udGV4dFwiO1xyXG5pbXBvcnQge01vdmllRmlsdGVyQ29udGV4dH0gZnJvbSBcIi4uL2NvbnRleHRzL01vdmllRmlsdGVyQ29udGV4dFwiO1xyXG5pbXBvcnQge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIE1vdmllc1Rvb2xiYXIoKSB7XHJcblxyXG4gIGNvbnN0IHt0aGVtZSwgc2V0VGhlbWV9ID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xyXG4gIGNvbnN0IHtzaG93UmF0aW5ncywgc2V0U2hvd1JhdGluZ3MsIHJhdGluZ1ZhbHVlLCBzZXRSYXRpbmdWYWx1ZSwgc2V0U2VhcmNoUXVlcnksIFJBVElOR19WQUxVRVN9ID0gdXNlQ29udGV4dChNb3ZpZUZpbHRlckNvbnRleHQpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidG9vbGJhciBkYXJrLXRoZW1lLWhlYWRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0b29scm93IGQtZmxleCBmbGV4LWNvbHVtbiBmbGV4LWxnLXJvd1wiPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGZsZXgtbWQtcm93XCI+XHJcbiAgICAgICAgICAgICAgPGI+U2hvdyBSYXRpbmdzJm5ic3A7Jm5ic3A7PC9iPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmYXZcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXtzaG93UmF0aW5nc31cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFNob3dSYXRpbmdzKGV2ZW50LnRhcmdldC5jaGVja2VkKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzd2l0Y2hcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBmbGV4LW1kLXJvdyBtbC1zbS01IG1sLTBcIj5cclxuICAgICAgICAgICAgICA8c3Ryb25nPlRoZW1lPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCB0aGVtZVwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGVtZX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRoZW1lKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsaWdodFwiPkxpZ2h0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkYXJrXCI+RGFyazwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VhcmNoUXVlcnkoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgdHlwZT1cImJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc2VhcmNoXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGZsZXgtbWQtcm93XCI+XHJcbiAgICAgICAgICAgICAgPHN0cm9uZz5SYXRpbmcgVmFsdWU8L3N0cm9uZz5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZHJvcG1lbnVcIj5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3JhdGluZ1ZhbHVlfSBcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoe2N1cnJlbnRUYXJnZXR9KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRSYXRpbmdWYWx1ZShjdXJyZW50VGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7UkFUSU5HX1ZBTFVFUy5tYXAoZnVuY3Rpb24ocmF0aW5ndil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17cmF0aW5ndn0ga2V5PXtyYXRpbmd2fT57cmF0aW5ndn08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3ZpZXNUb29sYmFyO1xyXG4iLCJpbXBvcnQgUmVhY3Qse2NyZWF0ZUNvbnRleHR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdXNlTW92aWVGaWx0ZXIgZnJvbSBcIi4uL2hvb2tzL3VzZU1vdmllRmlsdGVyXCI7XHJcblxyXG5jb25zdCBNb3ZpZUZpbHRlckNvbnRleHQ9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmZ1bmN0aW9uIE1vdmllRmlsdGVyUHJvdmlkZXIgKHtjaGlsZHJlbiwgc3RhcnRpbmdTaG93UmF0aW5ncyA9IGZhbHNlLCBzdGFydGluZ1JhdGluZ1ZhbHVlPVwiMTBcIn0pe1xyXG4gICAgY29uc3Qge3Nob3dSYXRpbmdzLCBzZXRTaG93UmF0aW5ncywgXHJcbiAgICAgICAgcmF0aW5nVmFsdWUsIHNldFJhdGluZ1ZhbHVlLCBcclxuICAgICAgICBzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnksIFxyXG4gICAgICAgIFJBVElOR19WQUxVRVN9ID0gdXNlTW92aWVGaWx0ZXIoc3RhcnRpbmdTaG93UmF0aW5ncywgc3RhcnRpbmdSYXRpbmdWYWx1ZSk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxNb3ZpZUZpbHRlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tzaG93UmF0aW5ncywgc2V0U2hvd1JhdGluZ3MsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF0aW5nVmFsdWUsIHNldFJhdGluZ1ZhbHVlLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSQVRJTkdfVkFMVUVTfX0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L01vdmllRmlsdGVyQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICk7XHJcbn1cclxuZXhwb3J0IHtNb3ZpZUZpbHRlckNvbnRleHQsIE1vdmllRmlsdGVyUHJvdmlkZXJ9IiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHVzZVRoZW1lIGZyb20gXCIuLi9ob29rcy91c2VUaGVtZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRoZW1lQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmZ1bmN0aW9uIFRoZW1lUHJvdmlkZXIoeyBjaGlsZHJlbiwgc3RhcnRpbmdUaGVtZSB9KSB7XHJcbiAgY29uc3Qge3RoZW1lLCBzZXRUaGVtZX0gPSB1c2VUaGVtZShzdGFydGluZ1RoZW1lKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUaGVtZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgc2V0VGhlbWUsIHRoZW1lIH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1RoZW1lQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgeyBUaGVtZVByb3ZpZGVyIH07XHJcbiIsImltcG9ydCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gdXNlTW92aWVGaWx0ZXIoc3RhcnRpbmdTaG93UmF0aW5ncywgc3RhcnRpbmdSYXRpbmdWYWx1ZSl7XHJcbiAgICBjb25zdCBbc2hvd1JhdGluZ3MsIHNldFNob3dSYXRpbmdzXSA9IHVzZVN0YXRlKHN0YXJ0aW5nU2hvd1JhdGluZ3MpO1xyXG4gICAgY29uc3QgW3JhdGluZ1ZhbHVlLCBzZXRSYXRpbmdWYWx1ZV0gPSB1c2VTdGF0ZShzdGFydGluZ1JhdGluZ1ZhbHVlKTtcclxuICAgIGNvbnN0IFsgc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAgIGNvbnN0IFJBVElOR19WQUxVRVM9W1xyXG4gICAgICAgIFwiMVwiLFwiMlwiLFwiM1wiLFwiNFwiLFwiNVwiLFwiNlwiLFwiN1wiLFwiOFwiLFwiOVwiLFwiMTBcIlxyXG4gICAgXTtcclxuXHJcblxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHNob3dSYXRpbmdzLFxyXG4gICAgICAgIHNldFNob3dSYXRpbmdzLFxyXG4gICAgICAgIHJhdGluZ1ZhbHVlLFxyXG4gICAgICAgIHNldFJhdGluZ1ZhbHVlLFxyXG4gICAgICAgIHNlYXJjaFF1ZXJ5LFxyXG4gICAgICAgIHNldFNlYXJjaFF1ZXJ5LFxyXG4gICAgICAgIFJBVElOR19WQUxVRVNcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCB1c2VNb3ZpZUZpbHRlcjsiLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBSRVFVRVNUX1NUQVRVUyA9IHtcbiAgTE9BRElORzogXCJsb2FkaW5nXCIsXG4gIFNVQ0NFU1M6IFwic3VjY2Vzc1wiLFxuICBGQUlMVVJFOiBcImZhaWx1cmVcIixcbn07XG5cbmZ1bmN0aW9uIHVzZVJlcXVlc3REZWxheShkZWxheVRpbWUgPSAxMDAwLCBpbml0aWFsRGF0YSA9IFtdKSB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3JlcXVlc3RTdGF0dXMsIHNldFJlcXVlc3RTdGF0dXNdID0gdXNlU3RhdGUoUkVRVUVTVF9TVEFUVVMuTE9BRElORyk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IGRlbGF5ID0gKG1zKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGRlbGF5RnVuYygpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGRlbGF5KGRlbGF5VGltZSk7XG4gICAgICAgIHNldFJlcXVlc3RTdGF0dXMoUkVRVUVTVF9TVEFUVVMuU1VDQ0VTUyk7XG4gICAgICAgIHNldERhdGEoaW5pdGlhbERhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBzZXRSZXF1ZXN0U3RhdHVzKFJFUVVFU1RfU1RBVFVTLkZBSUxVUkUpO1xuICAgICAgICBzZXRFcnJvcihlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZGVsYXlGdW5jKCk7XG4gIH0sIFtdKTtcblxuICBmdW5jdGlvbiB1cGRhdGVSZWNvcmQocmVjb3JkVXBkYXRlZCwgZG9uZUNhbGxiYWNrKSB7XG4gICAgY29uc3Qgb3JpZ2luYWxSZWNvcmRzID0gWy4uLmRhdGFdO1xuICAgIGNvbnN0IG5ld1JlY29yZHMgPSBkYXRhLm1hcChmdW5jdGlvbiAocmVjKSB7XG4gICAgICByZXR1cm4gcmVjLmlkID09PSByZWNvcmRVcGRhdGVkLmlkID8gcmVjb3JkVXBkYXRlZCA6IHJlYztcbiAgICB9KTtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGRlbGF5RnVuY3Rpb24oKSB7XG4gICAgICB0cnkge1xuICAgICAgICBzZXREYXRhKG5ld1JlY29yZHMpO1xuICAgICAgICBhd2FpdCBkZWxheShkZWxheVRpbWUpO1xuICAgICAgICBpZiAoZG9uZUNhbGxiYWNrKSB7XG4gICAgICAgICAgZG9uZUNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgdGhyb3duIGluc2lkZSBkZWxheUZ1bmN0aW9uXCIsIGVycm9yKTtcbiAgICAgICAgaWYgKGRvbmVDYWxsYmFjaykge1xuICAgICAgICAgIGRvbmVDYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICAgIHNldERhdGEob3JpZ2luYWxSZWNvcmRzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZGVsYXlGdW5jdGlvbigpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBkYXRhLFxuICAgIHJlcXVlc3RTdGF0dXMsXG4gICAgZXJyb3IsXG4gICAgdXBkYXRlUmVjb3JkLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VSZXF1ZXN0RGVsYXk7XG4iLCJpbXBvcnQge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIHVzZVRoZW1lKHN0YXJ0aW5nVGhlbWU9XCJsaWdodFwiKXtcclxuXHJcbiAgICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9dXNlU3RhdGUoc3RhcnRpbmdUaGVtZSk7XHJcblxyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVUaGVtZSh0aGVtZVZhbHVlKXtcclxuICAgICAgICBpZih0aGVtZVZhbHVlID09PSBcImRhcmtcIil7XHJcbiAgICAgICAgICAgIHNldFRoZW1lKFwiZGFya1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgc2V0VGhlbWUoXCJsaWdodFwiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdGhlbWUsXHJcbiAgICAgICAgc2V0VGhlbWU6IHZhbGlkYXRlVGhlbWVcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCB1c2VUaGVtZTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcGxhY2Vob2xkZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==
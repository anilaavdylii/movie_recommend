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
      children: ["Value: ", Value]
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

function Ratings({
  ratings
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "ratingBox card h-250",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Rating, _objectSpread({}, ratings[0]), void 0, false, {
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
      lineNumber: 22,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
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
        lineNumber: 49,
        columnNumber: 9
      }, this), " ", "Favorite", " ", inTransition ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
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
          lineNumber: 76,
          columnNumber: 20
        }, this), released, "  ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 23
        }, this), " ", runtime]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MovieFavorite, {
      favorite: favorite,
      onFavoriteToggle: onFavoriteToggle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
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

function Movie({
  movie,
  showRatings,
  onFavoriteToggle
}) {
  const {
    id,
    title,
    year,
    ratings
  } = movie;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "card card-height p-4 mt-4",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MovieImage, {
        id: id,
        title: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MovieDemographics, _objectSpread(_objectSpread({}, movie), {}, {
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
    }, this), showRatings === true ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Ratings, {
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\hp\\Desktop\\react\\movie_recommend\\src\\components\\Movies.js";




function Movies() {
  const {
    0: showRatings,
    1: setShowRatings
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MoviesToolbar__WEBPACK_IMPORTED_MODULE_1__.default, {
      showRatings: showRatings,
      setShowRatings: setShowRatings
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MoviesList__WEBPACK_IMPORTED_MODULE_2__.default, {
      showRatings: showRatings
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this)]
  }, void 0, true);
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

var _jsxFileName = "C:\\Users\\hp\\Desktop\\react\\movie_recommend\\src\\components\\MoviesList.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function MoviesList({
  showRatings
}) {
  const {
    data: moviesData,
    requestStatus,
    error,
    updateRecord
  } = (0,_hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__.default)(2000, _MovieData__WEBPACK_IMPORTED_MODULE_4__.data);

  if (requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__.REQUEST_STATUS.FAILURE) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "text-danger",
      children: ["ERROR: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container movies-list",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_placeholder__WEBPACK_IMPORTED_MODULE_2___default()), {
      type: "media",
      rows: 20,
      className: "movieslist-placeholder",
      ready: requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__.REQUEST_STATUS.SUCCESS,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: moviesData.map(function (movie) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Movie__WEBPACK_IMPORTED_MODULE_1__.default, {
            movie: movie,
            showRatings: showRatings,
            onFavoriteToggle: doneCallback => {
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\hp\\Desktop\\react\\movie_recommend\\src\\components\\MoviesToolbar.js";



function MoviesToolbar({
  showRatings,
  setShowRatings
}) {
  const {
    theme,
    setTheme
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_1__.ThemeContext);
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
              lineNumber: 14,
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
                lineNumber: 16,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "switch"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 23,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "d-flex flex-column flex-md-row ml-sm-5 ml-0",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
              children: "Theme"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
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
                  lineNumber: 36,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                  value: "dark",
                  children: "Dark"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 37,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, this)
      }, void 0, false, {
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

/* harmony default export */ __webpack_exports__["default"] = (MoviesToolbar);

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

var _jsxFileName = "C:\\Users\\hp\\Desktop\\react\\movie_recommend\\src\\contexts\\ThemeContext.js";

const ThemeContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();

function ThemeProvider({
  children,
  startingTheme
}) {
  const {
    0: theme,
    1: setTheme
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(startingTheme);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ThemeContext.Provider, {
    value: {
      setTheme,
      theme
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3ZpZV9yZWNvbW1lbmQvLi9Nb3ZpZURhdGEuanMiLCJ3ZWJwYWNrOi8vbW92aWVfcmVjb21tZW5kLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbW92aWVfcmVjb21tZW5kLy4vc3JjL2NvbXBvbmVudHMvQXBwLmpzIiwid2VicGFjazovL21vdmllX3JlY29tbWVuZC8uL3NyYy9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9tb3ZpZV9yZWNvbW1lbmQvLi9zcmMvY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vbW92aWVfcmVjb21tZW5kLy4vc3JjL2NvbXBvbmVudHMvTW92aWUuanMiLCJ3ZWJwYWNrOi8vbW92aWVfcmVjb21tZW5kLy4vc3JjL2NvbXBvbmVudHMvTW92aWVzLmpzIiwid2VicGFjazovL21vdmllX3JlY29tbWVuZC8uL3NyYy9jb21wb25lbnRzL01vdmllc0xpc3QuanMiLCJ3ZWJwYWNrOi8vbW92aWVfcmVjb21tZW5kLy4vc3JjL2NvbXBvbmVudHMvTW92aWVzVG9vbGJhci5qcyIsIndlYnBhY2s6Ly9tb3ZpZV9yZWNvbW1lbmQvLi9zcmMvY29udGV4dHMvVGhlbWVDb250ZXh0LmpzIiwid2VicGFjazovL21vdmllX3JlY29tbWVuZC8uL3NyYy9ob29rcy91c2VSZXF1ZXN0RGVsYXkuanMiLCJ3ZWJwYWNrOi8vbW92aWVfcmVjb21tZW5kL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9tb3ZpZV9yZWNvbW1lbmQvZXh0ZXJuYWwgXCJyZWFjdC1wbGFjZWhvbGRlclwiIiwid2VicGFjazovL21vdmllX3JlY29tbWVuZC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbImRhdGEiLCJpZCIsInRpdGxlIiwieWVhciIsInJlbGVhc2VkIiwicnVudGltZSIsInN1bW1hcnkiLCJmYXZvcml0ZSIsInJhdGluZ3MiLCJJbmRleFBhZ2UiLCJBcHAiLCJIZWFkZXIiLCJ0aGVtZSIsInVzZUNvbnRleHQiLCJUaGVtZUNvbnRleHQiLCJMYXlvdXQiLCJzdGFydGluZ1RoZW1lIiwiY2hpbGRyZW4iLCJMYXlvdXROb1RoZW1lUHJvdmlkZXIiLCJSYXRpbmciLCJTb3VyY2UiLCJWYWx1ZSIsIlJhdGluZ3MiLCJNb3ZpZUltYWdlIiwiTW92aWVGYXZvcml0ZSIsIm9uRmF2b3JpdGVUb2dnbGUiLCJpblRyYW5zaXRpb24iLCJzZXRJblRyYW5zaXRpb24iLCJ1c2VTdGF0ZSIsImRvbmVDYWxsYmFjayIsImNvbnNvbGUiLCJsb2ciLCJEYXRlIiwiZ2V0TWlsbGlzZWNvbmRzIiwiTW92aWVEZW1vZ3JhcGhpY3MiLCJNb3ZpZSIsIm1vdmllIiwic2hvd1JhdGluZ3MiLCJNb3ZpZXMiLCJzZXRTaG93UmF0aW5ncyIsIk1vdmllc0xpc3QiLCJtb3ZpZXNEYXRhIiwicmVxdWVzdFN0YXR1cyIsImVycm9yIiwidXBkYXRlUmVjb3JkIiwidXNlUmVxdWVzdERlbGF5IiwiUkVRVUVTVF9TVEFUVVMiLCJtYXAiLCJNb3ZpZXNUb29sYmFyIiwic2V0VGhlbWUiLCJldmVudCIsInRhcmdldCIsImNoZWNrZWQiLCJ2YWx1ZSIsImNyZWF0ZUNvbnRleHQiLCJUaGVtZVByb3ZpZGVyIiwiTE9BRElORyIsIlNVQ0NFU1MiLCJGQUlMVVJFIiwiZGVsYXlUaW1lIiwiaW5pdGlhbERhdGEiLCJzZXREYXRhIiwic2V0UmVxdWVzdFN0YXR1cyIsInNldEVycm9yIiwiZGVsYXkiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsInVzZUVmZmVjdCIsImRlbGF5RnVuYyIsImUiLCJyZWNvcmRVcGRhdGVkIiwib3JpZ2luYWxSZWNvcmRzIiwibmV3UmVjb3JkcyIsInJlYyIsImRlbGF5RnVuY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sTUFBTUEsSUFBSSxHQUFHLENBQ2xCO0FBQ0VDLElBQUUsRUFBRSxHQUROO0FBRUVDLE9BQUssRUFBRSxVQUZU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Q0FBVDs7QUFjQSxXQUFTMUIsWUFBVCxDQUFzQjRCLGFBQXRCLEVBQXFDM0MsWUFBckMsRUFBbUQ7QUFDakQsVUFBTTRDLGVBQWUsR0FBRyxDQUFDLEdBQUd6RSxJQUFKLENBQXhCO0FBQ0EsVUFBTTBFLFVBQVUsR0FBRzFFLElBQUksQ0FBQytDLEdBQUwsQ0FBUyxVQUFVNEIsR0FBVixFQUFlO0FBQ3pDLGFBQU9BLEdBQUcsQ0FBQzFFLEVBQUosS0FBV3VFLGFBQWEsQ0FBQ3ZFLEVBQXpCLEdBQThCdUUsYUFBOUIsR0FBOENHLEdBQXJEO0FBQ0QsS0FGa0IsQ0FBbkI7O0FBSUEsbUJBQWVDLGFBQWYsR0FBK0I7QUFDN0IsVUFBSTtBQUNGZixlQUFPLENBQUNhLFVBQUQsQ0FBUDtBQUNBLGNBQU1WLEtBQUssQ0FBQ0wsU0FBRCxDQUFYOztBQUNBLFlBQUk5QixZQUFKLEVBQWtCO0FBQ2hCQSxzQkFBWTtBQUNiO0FBQ0YsT0FORCxDQU1FLE9BQU9jLEtBQVAsRUFBYztBQUNkYixlQUFPLENBQUNDLEdBQVIsQ0FBWSxtQ0FBWixFQUFpRFksS0FBakQ7O0FBQ0EsWUFBSWQsWUFBSixFQUFrQjtBQUNoQkEsc0JBQVk7QUFDYjs7QUFDRGdDLGVBQU8sQ0FBQ1ksZUFBRCxDQUFQO0FBQ0Q7QUFDRjs7QUFDREcsaUJBQWE7QUFDZDs7QUFFRCxTQUFPO0FBQ0w1RSxRQURLO0FBRUwwQyxpQkFGSztBQUdMQyxTQUhLO0FBSUxDO0FBSkssR0FBUDtBQU1EOztBQUVELCtEQUFlQyxlQUFmLEU7Ozs7Ozs7Ozs7O0FDM0RBLG1DOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGRhdGEgPSBbXG4gIHtcbiAgICBpZDogXCIxXCIsXG4gICAgdGl0bGU6IFwiVW5kZXJkb2dcIixcbiAgICB5ZWFyOiBcIjIwMDdcIixcbiAgICByZWxlYXNlZDogXCIwMyBBdWcgMjAwN1wiLFxuICAgIHJ1bnRpbWU6IFwiODQgbWluXCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiVW5kZXJkb2cgdGVsbHMgdGhlIHN0b3J5IG9mIHR3byBicm90aGVycywgTGluY29sbiBhbmQgQm9vdGgsIHdobywgYWJhbmRvbmVkIGJ5IHRoZWlyIHBhcmVudHMsIGhhdmUgaGFkIHRvIGRlcGVuZCB1cG9uIGVhY2ggb3RoZXIgZm9yIHN1cnZpdmFsIHNpbmNlIHRoZXkgd2VyZSB0ZWVuYWdlcnMuIFwiLFxuICAgIGZhdm9yaXRlOiB0cnVlLFxuICAgIHJhdGluZ3M6IFtcbiAgICAgIHtcbiAgICAgICAgXCJTb3VyY2VcIjogXCJJbnRlcm5ldCBNb3ZpZSBEYXRhYmFzZVwiLFxuICAgICAgICBcIlZhbHVlXCI6IFwiMTAvMTBcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJTb3VyY2VcIjogXCJSb3R0ZW4gVG9tYXRvZXNcIixcbiAgICAgICAgXCJWYWx1ZVwiOiBcIjE2JVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIlNvdXJjZVwiOiBcIk1ldGFjcml0aWNcIixcbiAgICAgICAgXCJWYWx1ZVwiOiBcIjM3LzEwMFwiXG4gICAgICB9XG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcIjJcIixcbiAgICB0aXRsZTogXCJIb25lc3QgVGhpZWZcIixcbiAgICB5ZWFyOiBcIjIwMjBcIixcbiAgICByZWxlYXNlZDogXCIxNiBPY3QgMjAyMFwiLFxuICAgIHJ1bnRpbWU6IFwiOTkgbWluXCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiSG9waW5nIHRvIGN1dCBhIGRlYWwsIGEgcHJvZmVzc2lvbmFsIGJhbmsgcm9iYmVyIGFncmVlcyB0byByZXR1cm4gYWxsIHRoZSBtb25leSBoZSBzdG9sZSBpbiBleGNoYW5nZSBmb3IgYSByZWR1Y2VkIHNlbnRlbmNlLiBXaGVuIHR3byBGQkkgYWdlbnRzIHNldCBoaW0gdXAgZm9yIG11cmRlciwgaGUgaXMgZm9yY2VkIHRvIGdvIG9uIHRoZSBydW4gdG8gY2xlYXIgaGlzIG5hbWUgYW5kIGJyaW5nIHRoZW0gdG8ganVzdGljZS5cIiwgICAgZmF2b3JpdGU6IGZhbHNlLFxuICAgIHJhdGluZ3M6IFtcbiAgICAgIHtcbiAgICAgICAgXCJTb3VyY2VcIjogXCJJbnRlcm5ldCBNb3ZpZSBEYXRhYmFzZVwiLFxuICAgICAgICBcIlZhbHVlXCI6IFwiNi4wLzEwXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiU291cmNlXCI6IFwiTWV0YWNyaXRpY1wiLFxuICAgICAgICBcIlZhbHVlXCI6IFwiNDYvMTAwXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBpZDogXCIzXCIsXG4gICAgdGl0bGU6IFwiRGVhZHBvb2xcIixcbiAgICB5ZWFyOiBcIjIwMTZcIixcbiAgICByZWxlYXNlZDogXCIxMiBGZWIgMjAxNlwiLFxuICAgIHJ1bnRpbWU6IFwiMTA4IG1pblwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIklzIGEgMjAxNiBBbWVyaWNhbiBzdXBlcmhlcm8gZmlsbSBiYXNlZCBvbiB0aGUgTWFydmVsIENvbWljcyBjaGFyYWN0ZXIgb2YgdGhlIHNhbWUgbmFtZS4gRGlzdHJpYnV0ZWQgYnkgMjB0aCBDZW50dXJ5IEZveCwgaXQgaXMgYSBzcGluLW9mZiBpbiB0aGUgWC1NZW4gZmlsbSBzZXJpZXMgYW5kIHRoZSBlaWdodGggaW5zdGFsbG1lbnQgb3ZlcmFsbC5cIixcbiAgICBmYXZvcml0ZTogdHJ1ZSxcbiAgICByYXRpbmdzOiBbXG4gICAgICB7XG4gICAgICAgIFwiU291cmNlXCI6IFwiSW50ZXJuZXQgTW92aWUgRGF0YWJhc2VcIixcbiAgICAgICAgXCJWYWx1ZVwiOiBcIjguMC8xMFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIlNvdXJjZVwiOiBcIlJvdHRlbiBUb21hdG9lc1wiLFxuICAgICAgICBcIlZhbHVlXCI6IFwiODUlXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiU291cmNlXCI6IFwiTWV0YWNyaXRpY1wiLFxuICAgICAgICBcIlZhbHVlXCI6IFwiNjUvMTAwXCJcbiAgICAgIH1cbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiNFwiLFxuICAgIHRpdGxlOiBcIkJydWNlIEFsbWlnaHR5XCIsXG4gICAgeWVhcjogXCIyMDAzXCIsXG4gICAgcmVsZWFzZWQ6IFwiMjMgTWF5IDIwMDNcIixcbiAgICBydW50aW1lOiBcIjEwMSBtaW5cIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJJcyBhIDIwMDMgQW1lcmljYW4gZmFudGFzeSBjb21lZHkgZmlsbSBkaXJlY3RlZCBieSBUb20gU2hhZHlhYyBhbmQgd3JpdHRlbiBieSBTdGV2ZSBLb3JlbiwgTWFyayBPJ0tlZWZlIGFuZCBTdGV2ZSBPZWRla2Vya1wiLFxuICAgIGZhdm9yaXRlOiB0cnVlLFxuICAgIHJhdGluZ3M6IFtcbiAgICAgIHtcbiAgICAgICAgXCJTb3VyY2VcIjogXCJJbnRlcm5ldCBNb3ZpZSBEYXRhYmFzZVwiLFxuICAgICAgICBcIlZhbHVlXCI6IFwiNi44LzEwXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiU291cmNlXCI6IFwiUm90dGVuIFRvbWF0b2VzXCIsXG4gICAgICAgIFwiVmFsdWVcIjogXCI0OCVcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJTb3VyY2VcIjogXCJNZXRhY3JpdGljXCIsXG4gICAgICAgIFwiVmFsdWVcIjogXCI0Ni8xMDBcIlxuICAgICAgfVxuICAgIF0sXG4gIH0sXG5cbl07XG4iLCJpbXBvcnQgQXBwIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9BcHBcIjtcbmNvbnN0IEluZGV4UGFnZSA9ICgpID0+IHtcbiAgcmV0dXJuIDxBcHAgLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7XG4iLCJpbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xuaW1wb3J0IE1vdmllcyBmcm9tIFwiLi9Nb3ZpZXNcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4vTGF5b3V0XCI7XG5cblxuZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgc3RhcnRpbmdUaGVtZT1cImxpZ2h0XCI+XG4gICAgICA8ZGl2ID5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8TW92aWVzIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IHtUaGVtZUNvbnRleHR9IGZyb20gXCIuLi9jb250ZXh0cy9UaGVtZUNvbnRleHRcIjtcbmltcG9ydCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBIZWFkZXIoKSB7XG5cbiAgY29uc3Qge3RoZW1lfSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFkVDQgcGFkQjRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG1vYmlsZS1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGltZyBhbHQ9XCJTVkNDIEhvbWUgUGFnZVwiIHNyYz1cIi9pbWFnZXMvbG9nby5wbmdcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGVtZSA9PT0gXCJsaWdodFwiID8gXCJcIiA6IFwidGV4dC1pbmZvXCJ9PlxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImhlYWRlci10aXRsZVwiPkdyZWF0ZXN0IE1vdmllcyBvZiBBbGwgVGltZTwvaDQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoZW1lID09PSBcImxpZ2h0XCIgPyBcIlwiIDogXCJ0ZXh0LWluZm9cIn0+XG4gICAgICAgICAgICBIZWxsbyBNci4gU21pdGggJm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5zaWduLW91dDwvYT5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUaGVtZUNvbnRleHQsIFRoZW1lUHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0cy9UaGVtZUNvbnRleHQnO1xyXG5cclxuZnVuY3Rpb24gTGF5b3V0KHtzdGFydGluZ1RoZW1lLCBjaGlsZHJlbn0pe1xyXG4gIHJldHVybihcclxuICAgIDxUaGVtZVByb3ZpZGVyIHN0YXJ0aW5nVGhlbWU9e3N0YXJ0aW5nVGhlbWV9ICA+XHJcbiAgICAgIDxMYXlvdXROb1RoZW1lUHJvdmlkZXI+e2NoaWxkcmVufTwvTGF5b3V0Tm9UaGVtZVByb3ZpZGVyPlxyXG4gICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIExheW91dE5vVGhlbWVQcm92aWRlcih7Y2hpbGRyZW59KXtcclxuXHJcbiAgY29uc3Qge3RoZW1lfSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcclxuICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICB0aGVtZSA9PT0gXCJsaWdodFwiID8gXCJjb250YWluZXItZmx1aWQgbGlnaHRcIiA6IFwiY29udGFpbmVyLWZsdWlkIGRhcmtcIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIFJhdGluZyh7IFNvdXJjZSwgVmFsdWUgfSkge1xuICByZXR1cm4gKFxuICAgIDxzcGFuIGNsYXNzTmFtZT1cInJhdGluZyB3LTEwMFwiPlxuICAgICAge1NvdXJjZX0gPHN0cm9uZz5WYWx1ZToge1ZhbHVlfTwvc3Ryb25nPlxuICAgIDwvc3Bhbj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gUmF0aW5ncyh7IHJhdGluZ3MgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nQm94IGNhcmQgaC0yNTBcIj5cbiAgICAgIDxSYXRpbmcgey4uLnJhdGluZ3NbMF19IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIE1vdmllSW1hZ2UoeyBpZCwgdGl0bGUgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWUtaW1nIGQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBoLTMwMFwiPlxuICAgICAgPGltZ1xuICAgICAgICBjbGFzc05hbWU9XCJjb250YWluLWZpdFwiXG4gICAgICAgIHNyYz17YC9pbWFnZXMvbW92aWUtJHtpZH0ucG5nYH1cbiAgICAgICAgd2lkdGg9XCIzMDBcIlxuICAgICAgICBhbHQ9e2Ake3RpdGxlfWB9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBNb3ZpZUZhdm9yaXRlKHsgZmF2b3JpdGUsIG9uRmF2b3JpdGVUb2dnbGUgfSkge1xuICBjb25zdCBbaW5UcmFuc2l0aW9uLCBzZXRJblRyYW5zaXRpb25dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBmdW5jdGlvbiBkb25lQ2FsbGJhY2soKSB7XG4gICAgc2V0SW5UcmFuc2l0aW9uKGZhbHNlKTtcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIGBJbiBNb3ZpZUZhdm9yaXRlOmRvbmVDYWxsYmFjayAgICAke25ldyBEYXRlKCkuZ2V0TWlsbGlzZWNvbmRzKCl9YFxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uIHBhZEIxXCI+XG4gICAgICA8c3BhblxuICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2V0SW5UcmFuc2l0aW9uKHRydWUpO1xuICAgICAgICAgIHJldHVybiBvbkZhdm9yaXRlVG9nZ2xlKGRvbmVDYWxsYmFjayk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxpXG4gICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgIGZhdm9yaXRlID09PSB0cnVlID8gXCJmYSBmYS1zdGFyIG9yYW5nZVwiIDogXCJmYSBmYS1zdGFyLW8gb3JhbmdlXCJcbiAgICAgICAgICB9XG4gICAgICAgIC8+e1wiIFwifVxuICAgICAgICBGYXZvcml0ZXtcIiBcIn1cbiAgICAgICAge2luVHJhbnNpdGlvbiA/IChcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYXMgZmEtY2lyY2xlLW5vdGNoIGZhLXNwaW5cIj48L3NwYW4+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBNb3ZpZURlbW9ncmFwaGljcyh7XG4gIHRpdGxlLFxuICB5ZWFyLFxuICByZWxlYXNlZCxcbiAgcnVudGltZSxcbiAgc3VtbWFyeSxcbiAgZmF2b3JpdGUsXG4gIG9uRmF2b3JpdGVUb2dnbGUsXG59KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZS1pbmZvXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtYi0zXCI+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXRydW5jYXRlIHctMjAwXCI+XG4gICAgICAgICAge3RpdGxlfSAgPGJyLz4gXG4gICAgICAgICAge3JlbGVhc2VkfSAgPGJyLz4ge3J1bnRpbWV9XG4gICAgICAgIDwvaDM+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxNb3ZpZUZhdm9yaXRlXG4gICAgICAgIGZhdm9yaXRlPXtmYXZvcml0ZX1cbiAgICAgICAgb25GYXZvcml0ZVRvZ2dsZT17b25GYXZvcml0ZVRvZ2dsZX1cbiAgICAgIC8+XG4gICAgICA8ZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLWRlc2NyaXB0aW9uXCI+e3N1bW1hcnl9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIE1vdmllKHsgbW92aWUsIHNob3dSYXRpbmdzLCBvbkZhdm9yaXRlVG9nZ2xlIH0pIHtcbiAgY29uc3QgeyBpZCwgdGl0bGUsIHllYXIsIHJhdGluZ3MgfSA9IG1vdmllO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNCBjb2wtc20tMTIgY29sLXhzLTEyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1oZWlnaHQgcC00IG10LTRcIj5cbiAgICAgICAgPE1vdmllSW1hZ2UgaWQ9e2lkfSB0aXRsZT17dGl0bGV9ICAvPlxuICAgICAgICA8TW92aWVEZW1vZ3JhcGhpY3Mgey4uLm1vdmllfSBvbkZhdm9yaXRlVG9nZ2xlPXtvbkZhdm9yaXRlVG9nZ2xlfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICB7c2hvd1JhdGluZ3MgPT09IHRydWUgPyA8UmF0aW5ncyByYXRpbmdzPXtyYXRpbmdzfSAvPiA6IG51bGx9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllO1xuIiwiaW1wb3J0IE1vdmllc1Rvb2xiYXIgZnJvbSBcIi4vTW92aWVzVG9vbGJhclwiO1xuaW1wb3J0IE1vdmllc0xpc3QgZnJvbSBcIi4vTW92aWVzTGlzdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gTW92aWVzKCkge1xuICBjb25zdCBbc2hvd1JhdGluZ3MsIHNldFNob3dSYXRpbmdzXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxNb3ZpZXNUb29sYmFyXG4gICAgICAgIHNob3dSYXRpbmdzPXtzaG93UmF0aW5nc31cbiAgICAgICAgc2V0U2hvd1JhdGluZ3M9e3NldFNob3dSYXRpbmdzfVxuICAgICAgLz5cbiAgICAgIDxNb3ZpZXNMaXN0IHNob3dSYXRpbmdzPXtzaG93UmF0aW5nc30gLz5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW92aWVzO1xuIiwiaW1wb3J0IE1vdmllIGZyb20gXCIuL01vdmllXCI7XG5pbXBvcnQgUmVhY3RQbGFjZUhvbGRlciBmcm9tIFwicmVhY3QtcGxhY2Vob2xkZXJcIjtcbmltcG9ydCB1c2VSZXF1ZXN0RGVsYXksIHsgUkVRVUVTVF9TVEFUVVMgfSBmcm9tIFwiLi4vaG9va3MvdXNlUmVxdWVzdERlbGF5XCI7XG5pbXBvcnQgeyBkYXRhIH0gZnJvbSBcIi4uLy4uL01vdmllRGF0YVwiO1xuXG5mdW5jdGlvbiBNb3ZpZXNMaXN0KHsgc2hvd1JhdGluZ3MgfSkge1xuICBjb25zdCB7XG4gICAgZGF0YTogbW92aWVzRGF0YSxcbiAgICByZXF1ZXN0U3RhdHVzLFxuICAgIGVycm9yLFxuICAgIHVwZGF0ZVJlY29yZCxcbiAgfSA9IHVzZVJlcXVlc3REZWxheSgyMDAwLCBkYXRhKTtcblxuICBpZiAocmVxdWVzdFN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuRkFJTFVSRSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+XG4gICAgICAgIEVSUk9SOiA8Yj5sb2FkaW5nIE1vdmllIERhdGEgRmFpbGVkIHtlcnJvcn08L2I+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG1vdmllcy1saXN0XCI+XG4gICAgICA8UmVhY3RQbGFjZUhvbGRlclxuICAgICAgICB0eXBlPVwibWVkaWFcIlxuICAgICAgICByb3dzPXsyMH1cbiAgICAgICAgY2xhc3NOYW1lPVwibW92aWVzbGlzdC1wbGFjZWhvbGRlclwiXG4gICAgICAgIHJlYWR5PXtyZXF1ZXN0U3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5TVUNDRVNTfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIHttb3ZpZXNEYXRhLm1hcChmdW5jdGlvbiAobW92aWUpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxNb3ZpZVxuICAgICAgICAgICAgICAgIGtleT17bW92aWUuaWR9XG4gICAgICAgICAgICAgICAgbW92aWU9e21vdmllfVxuICAgICAgICAgICAgICAgIHNob3dSYXRpbmdzPXtzaG93UmF0aW5nc31cbiAgICAgICAgICAgICAgICBvbkZhdm9yaXRlVG9nZ2xlPXsoZG9uZUNhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgICAgICAgICB1cGRhdGVSZWNvcmQoXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5tb3ZpZSxcbiAgICAgICAgICAgICAgICAgICAgICBmYXZvcml0ZTogIW1vdmllLmZhdm9yaXRlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBkb25lQ2FsbGJhY2tcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9SZWFjdFBsYWNlSG9sZGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZXNMaXN0O1xuIiwiaW1wb3J0IHtUaGVtZUNvbnRleHR9IGZyb20gXCIuLi9jb250ZXh0cy9UaGVtZUNvbnRleHRcIjtcbmltcG9ydCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBNb3ZpZXNUb29sYmFyKHsgc2hvd1JhdGluZ3MsIHNldFNob3dSYXRpbmdzIH0pIHtcblxuICBjb25zdCB7dGhlbWUsIHNldFRoZW1lfSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRvb2xiYXIgZGFyay10aGVtZS1oZWFkZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidG9vbHJvdyBkLWZsZXggZmxleC1jb2x1bW4gZmxleC1sZy1yb3dcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gZmxleC1tZC1yb3dcIj5cbiAgICAgICAgICAgICAgPGI+U2hvdyBSYXRpbmdzJm5ic3A7Jm5ic3A7PC9iPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZmF2XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c2hvd1JhdGluZ3N9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFNob3dSYXRpbmdzKGV2ZW50LnRhcmdldC5jaGVja2VkKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzd2l0Y2hcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBmbGV4LW1kLXJvdyBtbC1zbS01IG1sLTBcIj5cbiAgICAgICAgICAgICAgPHN0cm9uZz5UaGVtZTwvc3Ryb25nPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgdGhlbWVcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoZW1lfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaGVtZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibGlnaHRcIj5MaWdodDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRhcmtcIj5EYXJrPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZXNUb29sYmFyO1xuIiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBUaGVtZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmZ1bmN0aW9uIFRoZW1lUHJvdmlkZXIoeyBjaGlsZHJlbiwgc3RhcnRpbmdUaGVtZSB9KSB7XG4gIGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gdXNlU3RhdGUoc3RhcnRpbmdUaGVtZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8VGhlbWVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHNldFRoZW1lLCB0aGVtZSB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1RoZW1lQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IHsgVGhlbWVQcm92aWRlciB9O1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgUkVRVUVTVF9TVEFUVVMgPSB7XG4gIExPQURJTkc6IFwibG9hZGluZ1wiLFxuICBTVUNDRVNTOiBcInN1Y2Nlc3NcIixcbiAgRkFJTFVSRTogXCJmYWlsdXJlXCIsXG59O1xuXG5mdW5jdGlvbiB1c2VSZXF1ZXN0RGVsYXkoZGVsYXlUaW1lID0gMTAwMCwgaW5pdGlhbERhdGEgPSBbXSkge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtyZXF1ZXN0U3RhdHVzLCBzZXRSZXF1ZXN0U3RhdHVzXSA9IHVzZVN0YXRlKFJFUVVFU1RfU1RBVFVTLkxPQURJTkcpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBkZWxheSA9IChtcykgPT4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBkZWxheUZ1bmMoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBkZWxheShkZWxheVRpbWUpO1xuICAgICAgICBzZXRSZXF1ZXN0U3RhdHVzKFJFUVVFU1RfU1RBVFVTLlNVQ0NFU1MpO1xuICAgICAgICBzZXREYXRhKGluaXRpYWxEYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgc2V0UmVxdWVzdFN0YXR1cyhSRVFVRVNUX1NUQVRVUy5GQUlMVVJFKTtcbiAgICAgICAgc2V0RXJyb3IoZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGRlbGF5RnVuYygpO1xuICB9LCBbXSk7XG5cbiAgZnVuY3Rpb24gdXBkYXRlUmVjb3JkKHJlY29yZFVwZGF0ZWQsIGRvbmVDYWxsYmFjaykge1xuICAgIGNvbnN0IG9yaWdpbmFsUmVjb3JkcyA9IFsuLi5kYXRhXTtcbiAgICBjb25zdCBuZXdSZWNvcmRzID0gZGF0YS5tYXAoZnVuY3Rpb24gKHJlYykge1xuICAgICAgcmV0dXJuIHJlYy5pZCA9PT0gcmVjb3JkVXBkYXRlZC5pZCA/IHJlY29yZFVwZGF0ZWQgOiByZWM7XG4gICAgfSk7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBkZWxheUZ1bmN0aW9uKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0RGF0YShuZXdSZWNvcmRzKTtcbiAgICAgICAgYXdhaXQgZGVsYXkoZGVsYXlUaW1lKTtcbiAgICAgICAgaWYgKGRvbmVDYWxsYmFjaykge1xuICAgICAgICAgIGRvbmVDYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIHRocm93biBpbnNpZGUgZGVsYXlGdW5jdGlvblwiLCBlcnJvcik7XG4gICAgICAgIGlmIChkb25lQ2FsbGJhY2spIHtcbiAgICAgICAgICBkb25lQ2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgICBzZXREYXRhKG9yaWdpbmFsUmVjb3Jkcyk7XG4gICAgICB9XG4gICAgfVxuICAgIGRlbGF5RnVuY3Rpb24oKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZGF0YSxcbiAgICByZXF1ZXN0U3RhdHVzLFxuICAgIGVycm9yLFxuICAgIHVwZGF0ZVJlY29yZCxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlUmVxdWVzdERlbGF5O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXBsYWNlaG9sZGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=
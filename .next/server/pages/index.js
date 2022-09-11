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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3ZpZV9yZWNvbW1lbmQvLi9Nb3ZpZURhdGEuanMiLCJ3ZWJwYWNrOi8vbW92aWVfcmVjb21tZW5kLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbW92aWVfcmVjb21tZW5kLy4vc3JjL2NvbXBvbmVudHMvQXBwLmpzIiwid2VicGFjazovL21vdmllX3JlY29tbWVuZC8uL3NyYy9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9tb3ZpZV9yZWNvbW1lbmQvLi9zcmMvY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vbW92aWVfcmVjb21tZW5kLy4vc3JjL2NvbXBvbmVudHMvTW92aWUuanMiLCJ3ZWJwYWNrOi8vbW92aWVfcmVjb21tZW5kLy4vc3JjL2NvbXBvbmVudHMvTW92aWVzLmpzIiwid2VicGFjazovL21vdmllX3JlY29tbWVuZC8uL3NyYy9jb21wb25lbnRzL01vdmllc0xpc3QuanMiLCJ3ZWJwYWNrOi8vbW92aWVfcmVjb21tZW5kLy4vc3JjL2NvbXBvbmVudHMvTW92aWVzVG9vbGJhci5qcyIsIndlYnBhY2s6Ly9tb3ZpZV9yZWNvbW1lbmQvLi9zcmMvY29udGV4dHMvVGhlbWVDb250ZXh0LmpzIiwid2VicGFjazovL21vdmllX3JlY29tbWVuZC8uL3NyYy9ob29rcy91c2VSZXF1ZXN0RGVsYXkuanMiLCJ3ZWJwYWNrOi8vbW92aWVfcmVjb21tZW5kLy4vc3JjL2hvb2tzL3VzZVRoZW1lLmpzIiwid2VicGFjazovL21vdmllX3JlY29tbWVuZC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbW92aWVfcmVjb21tZW5kL2V4dGVybmFsIFwicmVhY3QtcGxhY2Vob2xkZXJcIiIsIndlYnBhY2s6Ly9tb3ZpZV9yZWNvbW1lbmQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJkYXRhIiwiaWQiLCJ0aXRsZSIsInllYXIiLCJyZWxlYXNlZCIsInJ1bnRpbWUiLCJzdW1tYXJ5IiwiZmF2b3JpdGUiLCJyYXRpbmdzIiwiSW5kZXhQYWdlIiwiQXBwIiwiSGVhZGVyIiwidGhlbWUiLCJ1c2VDb250ZXh0IiwiVGhlbWVDb250ZXh0IiwiTGF5b3V0Iiwic3RhcnRpbmdUaGVtZSIsImNoaWxkcmVuIiwiTGF5b3V0Tm9UaGVtZVByb3ZpZGVyIiwiUmF0aW5nIiwiU291cmNlIiwiVmFsdWUiLCJSYXRpbmdzIiwiTW92aWVJbWFnZSIsIk1vdmllRmF2b3JpdGUiLCJvbkZhdm9yaXRlVG9nZ2xlIiwiaW5UcmFuc2l0aW9uIiwic2V0SW5UcmFuc2l0aW9uIiwidXNlU3RhdGUiLCJkb25lQ2FsbGJhY2siLCJjb25zb2xlIiwibG9nIiwiRGF0ZSIsImdldE1pbGxpc2Vjb25kcyIsIk1vdmllRGVtb2dyYXBoaWNzIiwiTW92aWUiLCJtb3ZpZSIsInNob3dSYXRpbmdzIiwiTW92aWVzIiwic2V0U2hvd1JhdGluZ3MiLCJNb3ZpZXNMaXN0IiwibW92aWVzRGF0YSIsInJlcXVlc3RTdGF0dXMiLCJlcnJvciIsInVwZGF0ZVJlY29yZCIsInVzZVJlcXVlc3REZWxheSIsIlJFUVVFU1RfU1RBVFVTIiwibWFwIiwiTW92aWVzVG9vbGJhciIsInNldFRoZW1lIiwiZXZlbnQiLCJ0YXJnZXQiLCJjaGVja2VkIiwidmFsdWUiLCJjcmVhdGVDb250ZXh0IiwiVGhlbWVQcm92aWRlciIsInVzZVRoZW1lIiwiTE9BRElORyIsIlNVQ0NFU1MiLCJGQUlMVVJFIiwiZGVsYXlUaW1lIiwiaW5pdGlhbERhdGEiLCJzZXREYXRhIiwic2V0UmVxdWVzdFN0YXR1cyIsInNldEVycm9yIiwiZGVsYXkiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsInVzZUVmZmVjdCIsImRlbGF5RnVuYyIsImUiLCJyZWNvcmRVcGRhdGVkIiwib3JpZ2luYWxSZWNvcmRzIiwibmV3UmVjb3JkcyIsInJlYyIsImRlbGF5RnVuY3Rpb24iLCJ2YWxpZGF0ZVRoZW1lIiwidGhlbWVWYWx1ZSJdLCJtYXBw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QVM4RCxhQUFULENBQXVCQyxVQUF2QixFQUFrQztBQUM5QixRQUFHQSxVQUFVLEtBQUssTUFBbEIsRUFBeUI7QUFDckI5QixjQUFRLENBQUMsTUFBRCxDQUFSO0FBQ0gsS0FGRCxNQUdJO0FBQ0FBLGNBQVEsQ0FBQyxPQUFELENBQVI7QUFDSDtBQUNKOztBQUVELFNBQU07QUFDRnJDLFNBREU7QUFFRnFDLFlBQVEsRUFBRTZCO0FBRlIsR0FBTjtBQUlIOztBQUNELCtEQUFldEIsUUFBZixFOzs7Ozs7Ozs7OztBQ3BCQSxtQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBkYXRhID0gW1xuICB7XG4gICAgaWQ6IFwiMVwiLFxuICAgIHRpdGxlOiBcIlVuZGVyZG9nXCIsXG4gICAgeWVhcjogXCIyMDA3XCIsXG4gICAgcmVsZWFzZWQ6IFwiMDMgQXVnIDIwMDdcIixcbiAgICBydW50aW1lOiBcIjg0IG1pblwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIlVuZGVyZG9nIHRlbGxzIHRoZSBzdG9yeSBvZiB0d28gYnJvdGhlcnMsIExpbmNvbG4gYW5kIEJvb3RoLCB3aG8sIGFiYW5kb25lZCBieSB0aGVpciBwYXJlbnRzLCBoYXZlIGhhZCB0byBkZXBlbmQgdXBvbiBlYWNoIG90aGVyIGZvciBzdXJ2aXZhbCBzaW5jZSB0aGV5IHdlcmUgdGVlbmFnZXJzLiBcIixcbiAgICBmYXZvcml0ZTogdHJ1ZSxcbiAgICByYXRpbmdzOiBbXG4gICAgICB7XG4gICAgICAgIFwiU291cmNlXCI6IFwiSW50ZXJuZXQgTW92aWUgRGF0YWJhc2VcIixcbiAgICAgICAgXCJWYWx1ZVwiOiBcIjEwLzEwXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiU291cmNlXCI6IFwiUm90dGVuIFRvbWF0b2VzXCIsXG4gICAgICAgIFwiVmFsdWVcIjogXCIxNiVcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJTb3VyY2VcIjogXCJNZXRhY3JpdGljXCIsXG4gICAgICAgIFwiVmFsdWVcIjogXCIzNy8xMDBcIlxuICAgICAgfVxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCIyXCIsXG4gICAgdGl0bGU6IFwiSG9uZXN0IFRoaWVmXCIsXG4gICAgeWVhcjogXCIyMDIwXCIsXG4gICAgcmVsZWFzZWQ6IFwiMTYgT2N0IDIwMjBcIixcbiAgICBydW50aW1lOiBcIjk5IG1pblwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIkhvcGluZyB0byBjdXQgYSBkZWFsLCBhIHByb2Zlc3Npb25hbCBiYW5rIHJvYmJlciBhZ3JlZXMgdG8gcmV0dXJuIGFsbCB0aGUgbW9uZXkgaGUgc3RvbGUgaW4gZXhjaGFuZ2UgZm9yIGEgcmVkdWNlZCBzZW50ZW5jZS4gV2hlbiB0d28gRkJJIGFnZW50cyBzZXQgaGltIHVwIGZvciBtdXJkZXIsIGhlIGlzIGZvcmNlZCB0byBnbyBvbiB0aGUgcnVuIHRvIGNsZWFyIGhpcyBuYW1lIGFuZCBicmluZyB0aGVtIHRvIGp1c3RpY2UuXCIsICAgIGZhdm9yaXRlOiBmYWxzZSxcbiAgICByYXRpbmdzOiBbXG4gICAgICB7XG4gICAgICAgIFwiU291cmNlXCI6IFwiSW50ZXJuZXQgTW92aWUgRGF0YWJhc2VcIixcbiAgICAgICAgXCJWYWx1ZVwiOiBcIjYuMC8xMFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIlNvdXJjZVwiOiBcIk1ldGFjcml0aWNcIixcbiAgICAgICAgXCJWYWx1ZVwiOiBcIjQ2LzEwMFwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgaWQ6IFwiM1wiLFxuICAgIHRpdGxlOiBcIkRlYWRwb29sXCIsXG4gICAgeWVhcjogXCIyMDE2XCIsXG4gICAgcmVsZWFzZWQ6IFwiMTIgRmViIDIwMTZcIixcbiAgICBydW50aW1lOiBcIjEwOCBtaW5cIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJJcyBhIDIwMTYgQW1lcmljYW4gc3VwZXJoZXJvIGZpbG0gYmFzZWQgb24gdGhlIE1hcnZlbCBDb21pY3MgY2hhcmFjdGVyIG9mIHRoZSBzYW1lIG5hbWUuIERpc3RyaWJ1dGVkIGJ5IDIwdGggQ2VudHVyeSBGb3gsIGl0IGlzIGEgc3Bpbi1vZmYgaW4gdGhlIFgtTWVuIGZpbG0gc2VyaWVzIGFuZCB0aGUgZWlnaHRoIGluc3RhbGxtZW50IG92ZXJhbGwuXCIsXG4gICAgZmF2b3JpdGU6IHRydWUsXG4gICAgcmF0aW5nczogW1xuICAgICAge1xuICAgICAgICBcIlNvdXJjZVwiOiBcIkludGVybmV0IE1vdmllIERhdGFiYXNlXCIsXG4gICAgICAgIFwiVmFsdWVcIjogXCI4LjAvMTBcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJTb3VyY2VcIjogXCJSb3R0ZW4gVG9tYXRvZXNcIixcbiAgICAgICAgXCJWYWx1ZVwiOiBcIjg1JVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIlNvdXJjZVwiOiBcIk1ldGFjcml0aWNcIixcbiAgICAgICAgXCJWYWx1ZVwiOiBcIjY1LzEwMFwiXG4gICAgICB9XG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcIjRcIixcbiAgICB0aXRsZTogXCJCcnVjZSBBbG1pZ2h0eVwiLFxuICAgIHllYXI6IFwiMjAwM1wiLFxuICAgIHJlbGVhc2VkOiBcIjIzIE1heSAyMDAzXCIsXG4gICAgcnVudGltZTogXCIxMDEgbWluXCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiSXMgYSAyMDAzIEFtZXJpY2FuIGZhbnRhc3kgY29tZWR5IGZpbG0gZGlyZWN0ZWQgYnkgVG9tIFNoYWR5YWMgYW5kIHdyaXR0ZW4gYnkgU3RldmUgS29yZW4sIE1hcmsgTydLZWVmZSBhbmQgU3RldmUgT2VkZWtlcmtcIixcbiAgICBmYXZvcml0ZTogdHJ1ZSxcbiAgICByYXRpbmdzOiBbXG4gICAgICB7XG4gICAgICAgIFwiU291cmNlXCI6IFwiSW50ZXJuZXQgTW92aWUgRGF0YWJhc2VcIixcbiAgICAgICAgXCJWYWx1ZVwiOiBcIjYuOC8xMFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIlNvdXJjZVwiOiBcIlJvdHRlbiBUb21hdG9lc1wiLFxuICAgICAgICBcIlZhbHVlXCI6IFwiNDglXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiU291cmNlXCI6IFwiTWV0YWNyaXRpY1wiLFxuICAgICAgICBcIlZhbHVlXCI6IFwiNDYvMTAwXCJcbiAgICAgIH1cbiAgICBdLFxuICB9LFxuXG5dO1xuIiwiaW1wb3J0IEFwcCBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvQXBwXCI7XG5jb25zdCBJbmRleFBhZ2UgPSAoKSA9PiB7XG4gIHJldHVybiA8QXBwIC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlO1xuIiwiaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcbmltcG9ydCBNb3ZpZXMgZnJvbSBcIi4vTW92aWVzXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuL0xheW91dFwiO1xuXG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHN0YXJ0aW5nVGhlbWU9XCJsaWdodFwiPlxuICAgICAgPGRpdiA+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPE1vdmllcyAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImltcG9ydCB7VGhlbWVDb250ZXh0fSBmcm9tIFwiLi4vY29udGV4dHMvVGhlbWVDb250ZXh0XCI7XG5pbXBvcnQge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gSGVhZGVyKCkge1xuXG4gIGNvbnN0IHt0aGVtZX0gPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZFQ0IHBhZEI0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtb2JpbGUtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpbWcgYWx0PVwiU1ZDQyBIb21lIFBhZ2VcIiBzcmM9XCIvaW1hZ2VzL2xvZ28ucG5nXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhlbWUgPT09IFwibGlnaHRcIiA/IFwiXCIgOiBcInRleHQtaW5mb1wifT5cbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJoZWFkZXItdGl0bGVcIj5HcmVhdGVzdCBNb3ZpZXMgb2YgQWxsIFRpbWU8L2g0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGVtZSA9PT0gXCJsaWdodFwiID8gXCJcIiA6IFwidGV4dC1pbmZvXCJ9PlxuICAgICAgICAgICAgSGVsbG8gTXIuIFNtaXRoICZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+c2lnbi1vdXQ8L2E+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsImltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVGhlbWVDb250ZXh0LCBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dHMvVGhlbWVDb250ZXh0JztcclxuXHJcbmZ1bmN0aW9uIExheW91dCh7c3RhcnRpbmdUaGVtZSwgY2hpbGRyZW59KXtcclxuICByZXR1cm4oXHJcbiAgICA8VGhlbWVQcm92aWRlciBzdGFydGluZ1RoZW1lPXtzdGFydGluZ1RoZW1lfSAgPlxyXG4gICAgICA8TGF5b3V0Tm9UaGVtZVByb3ZpZGVyPntjaGlsZHJlbn08L0xheW91dE5vVGhlbWVQcm92aWRlcj5cclxuICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBMYXlvdXROb1RoZW1lUHJvdmlkZXIoe2NoaWxkcmVufSl7XHJcblxyXG4gIGNvbnN0IHt0aGVtZX0gPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgdGhlbWUgPT09IFwibGlnaHRcIiA/IFwiY29udGFpbmVyLWZsdWlkIGxpZ2h0XCIgOiBcImNvbnRhaW5lci1mbHVpZCBkYXJrXCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gUmF0aW5nKHsgU291cmNlLCBWYWx1ZSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzcGFuIGNsYXNzTmFtZT1cInJhdGluZyB3LTEwMFwiPlxyXG4gICAgICB7U291cmNlfSA8c3Ryb25nPlZhbHVlOiB7VmFsdWV9PC9zdHJvbmc+XHJcbiAgICA8L3NwYW4+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gUmF0aW5ncyh7IHJhdGluZ3MgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZ0JveCBjYXJkIGgtMjUwXCI+XHJcbiAgICAgIDxSYXRpbmcgey4uLnJhdGluZ3NbMF19IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBNb3ZpZUltYWdlKHsgaWQsIHRpdGxlIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZS1pbWcgZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIGgtMzAwXCI+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBjbGFzc05hbWU9XCJjb250YWluLWZpdFwiXHJcbiAgICAgICAgc3JjPXtgL2ltYWdlcy9tb3ZpZS0ke2lkfS5wbmdgfVxyXG4gICAgICAgIHdpZHRoPVwiMzAwXCJcclxuICAgICAgICBhbHQ9e2Ake3RpdGxlfWB9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBNb3ZpZUZhdm9yaXRlKHsgZmF2b3JpdGUsIG9uRmF2b3JpdGVUb2dnbGUgfSkge1xyXG4gIGNvbnN0IFtpblRyYW5zaXRpb24sIHNldEluVHJhbnNpdGlvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgZnVuY3Rpb24gZG9uZUNhbGxiYWNrKCkge1xyXG4gICAgc2V0SW5UcmFuc2l0aW9uKGZhbHNlKTtcclxuICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICBgSW4gTW92aWVGYXZvcml0ZTpkb25lQ2FsbGJhY2sgICAgJHtuZXcgRGF0ZSgpLmdldE1pbGxpc2Vjb25kcygpfWBcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb24gcGFkQjFcIj5cclxuICAgICAgPHNwYW5cclxuICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBzZXRJblRyYW5zaXRpb24odHJ1ZSk7XHJcbiAgICAgICAgICByZXR1cm4gb25GYXZvcml0ZVRvZ2dsZShkb25lQ2FsbGJhY2spO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8aVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgZmF2b3JpdGUgPT09IHRydWUgPyBcImZhIGZhLXN0YXIgb3JhbmdlXCIgOiBcImZhIGZhLXN0YXItbyBvcmFuZ2VcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIC8+e1wiIFwifVxyXG4gICAgICAgIEZhdm9yaXRle1wiIFwifVxyXG4gICAgICAgIHtpblRyYW5zaXRpb24gPyAoXHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYXMgZmEtY2lyY2xlLW5vdGNoIGZhLXNwaW5cIj48L3NwYW4+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE1vdmllRGVtb2dyYXBoaWNzKHtcclxuICB0aXRsZSxcclxuICB5ZWFyLFxyXG4gIHJlbGVhc2VkLFxyXG4gIHJ1bnRpbWUsXHJcbiAgc3VtbWFyeSxcclxuICBmYXZvcml0ZSxcclxuICBvbkZhdm9yaXRlVG9nZ2xlLFxyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWUtaW5mb1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtYi0zXCI+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtdHJ1bmNhdGUgdy0yMDBcIj5cclxuICAgICAgICAgIHt0aXRsZX0gIDxici8+IFxyXG4gICAgICAgICAge3JlbGVhc2VkfSAgPGJyLz4ge3J1bnRpbWV9XHJcbiAgICAgICAgPC9oMz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxNb3ZpZUZhdm9yaXRlXHJcbiAgICAgICAgZmF2b3JpdGU9e2Zhdm9yaXRlfVxyXG4gICAgICAgIG9uRmF2b3JpdGVUb2dnbGU9e29uRmF2b3JpdGVUb2dnbGV9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC1kZXNjcmlwdGlvblwiPntzdW1tYXJ5fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBNb3ZpZSh7IG1vdmllLCBzaG93UmF0aW5ncywgb25GYXZvcml0ZVRvZ2dsZSB9KSB7XHJcbiAgY29uc3QgeyBpZCwgdGl0bGUsIHllYXIsIHJhdGluZ3MgfSA9IG1vdmllO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTQgY29sLXNtLTEyIGNvbC14cy0xMlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1oZWlnaHQgcC00IG10LTRcIj5cclxuICAgICAgICA8TW92aWVJbWFnZSBpZD17aWR9IHRpdGxlPXt0aXRsZX0gIC8+XHJcbiAgICAgICAgPE1vdmllRGVtb2dyYXBoaWNzIHsuLi5tb3ZpZX0gb25GYXZvcml0ZVRvZ2dsZT17b25GYXZvcml0ZVRvZ2dsZX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtzaG93UmF0aW5ncyA9PT0gdHJ1ZSA/IDxSYXRpbmdzIHJhdGluZ3M9e3JhdGluZ3N9IC8+IDogbnVsbH1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vdmllO1xyXG4iLCJpbXBvcnQgTW92aWVzVG9vbGJhciBmcm9tIFwiLi9Nb3ZpZXNUb29sYmFyXCI7XHJcbmltcG9ydCBNb3ZpZXNMaXN0IGZyb20gXCIuL01vdmllc0xpc3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIE1vdmllcygpIHtcclxuICBjb25zdCBbc2hvd1JhdGluZ3MsIHNldFNob3dSYXRpbmdzXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE1vdmllc1Rvb2xiYXJcclxuICAgICAgICBzaG93UmF0aW5ncz17c2hvd1JhdGluZ3N9XHJcbiAgICAgICAgc2V0U2hvd1JhdGluZ3M9e3NldFNob3dSYXRpbmdzfVxyXG4gICAgICAvPlxyXG4gICAgICA8TW92aWVzTGlzdCBzaG93UmF0aW5ncz17c2hvd1JhdGluZ3N9IC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3ZpZXM7XHJcbiIsImltcG9ydCBNb3ZpZSBmcm9tIFwiLi9Nb3ZpZVwiO1xyXG5pbXBvcnQgUmVhY3RQbGFjZUhvbGRlciBmcm9tIFwicmVhY3QtcGxhY2Vob2xkZXJcIjtcclxuaW1wb3J0IHVzZVJlcXVlc3REZWxheSwgeyBSRVFVRVNUX1NUQVRVUyB9IGZyb20gXCIuLi9ob29rcy91c2VSZXF1ZXN0RGVsYXlcIjtcclxuaW1wb3J0IHsgZGF0YSB9IGZyb20gXCIuLi8uLi9Nb3ZpZURhdGFcIjtcclxuXHJcbmZ1bmN0aW9uIE1vdmllc0xpc3QoeyBzaG93UmF0aW5ncyB9KSB7XHJcbiAgY29uc3Qge1xyXG4gICAgZGF0YTogbW92aWVzRGF0YSxcclxuICAgIHJlcXVlc3RTdGF0dXMsXHJcbiAgICBlcnJvcixcclxuICAgIHVwZGF0ZVJlY29yZCxcclxuICB9ID0gdXNlUmVxdWVzdERlbGF5KDIwMDAsIGRhdGEpO1xyXG5cclxuICBpZiAocmVxdWVzdFN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuRkFJTFVSRSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPlxyXG4gICAgICAgIEVSUk9SOiA8Yj5sb2FkaW5nIE1vdmllIERhdGEgRmFpbGVkIHtlcnJvcn08L2I+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbW92aWVzLWxpc3RcIj5cclxuICAgICAgPFJlYWN0UGxhY2VIb2xkZXJcclxuICAgICAgICB0eXBlPVwibWVkaWFcIlxyXG4gICAgICAgIHJvd3M9ezIwfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1vdmllc2xpc3QtcGxhY2Vob2xkZXJcIlxyXG4gICAgICAgIHJlYWR5PXtyZXF1ZXN0U3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5TVUNDRVNTfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIHttb3ZpZXNEYXRhLm1hcChmdW5jdGlvbiAobW92aWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8TW92aWVcclxuICAgICAgICAgICAgICAgIGtleT17bW92aWUuaWR9XHJcbiAgICAgICAgICAgICAgICBtb3ZpZT17bW92aWV9XHJcbiAgICAgICAgICAgICAgICBzaG93UmF0aW5ncz17c2hvd1JhdGluZ3N9XHJcbiAgICAgICAgICAgICAgICBvbkZhdm9yaXRlVG9nZ2xlPXsoZG9uZUNhbGxiYWNrKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHVwZGF0ZVJlY29yZChcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAuLi5tb3ZpZSxcclxuICAgICAgICAgICAgICAgICAgICAgIGZhdm9yaXRlOiAhbW92aWUuZmF2b3JpdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBkb25lQ2FsbGJhY2tcclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1JlYWN0UGxhY2VIb2xkZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3ZpZXNMaXN0O1xyXG4iLCJpbXBvcnQge1RoZW1lQ29udGV4dH0gZnJvbSBcIi4uL2NvbnRleHRzL1RoZW1lQ29udGV4dFwiO1xyXG5pbXBvcnQge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIE1vdmllc1Rvb2xiYXIoeyBzaG93UmF0aW5ncywgc2V0U2hvd1JhdGluZ3MgfSkge1xyXG5cclxuICBjb25zdCB7dGhlbWUsIHNldFRoZW1lfSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRvb2xiYXIgZGFyay10aGVtZS1oZWFkZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidG9vbHJvdyBkLWZsZXggZmxleC1jb2x1bW4gZmxleC1sZy1yb3dcIj5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBmbGV4LW1kLXJvd1wiPlxyXG4gICAgICAgICAgICAgIDxiPlNob3cgUmF0aW5ncyZuYnNwOyZuYnNwOzwvYj5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZmF2XCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c2hvd1JhdGluZ3N9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTaG93UmF0aW5ncyhldmVudC50YXJnZXQuY2hlY2tlZCk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3dpdGNoXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gZmxleC1tZC1yb3cgbWwtc20tNSBtbC0wXCI+XHJcbiAgICAgICAgICAgICAgPHN0cm9uZz5UaGVtZTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgdGhlbWVcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhlbWV9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaGVtZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibGlnaHRcIj5MaWdodDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGFya1wiPkRhcms8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3ZpZXNUb29sYmFyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdXNlVGhlbWUgZnJvbSBcIi4uL2hvb2tzL3VzZVRoZW1lXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVGhlbWVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZnVuY3Rpb24gVGhlbWVQcm92aWRlcih7IGNoaWxkcmVuLCBzdGFydGluZ1RoZW1lIH0pIHtcclxuICBjb25zdCB7dGhlbWUsIHNldFRoZW1lfSA9IHVzZVRoZW1lKHN0YXJ0aW5nVGhlbWUpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFRoZW1lQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBzZXRUaGVtZSwgdGhlbWUgfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvVGhlbWVDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IFRoZW1lUHJvdmlkZXIgfTtcclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgUkVRVUVTVF9TVEFUVVMgPSB7XG4gIExPQURJTkc6IFwibG9hZGluZ1wiLFxuICBTVUNDRVNTOiBcInN1Y2Nlc3NcIixcbiAgRkFJTFVSRTogXCJmYWlsdXJlXCIsXG59O1xuXG5mdW5jdGlvbiB1c2VSZXF1ZXN0RGVsYXkoZGVsYXlUaW1lID0gMTAwMCwgaW5pdGlhbERhdGEgPSBbXSkge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtyZXF1ZXN0U3RhdHVzLCBzZXRSZXF1ZXN0U3RhdHVzXSA9IHVzZVN0YXRlKFJFUVVFU1RfU1RBVFVTLkxPQURJTkcpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBkZWxheSA9IChtcykgPT4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBkZWxheUZ1bmMoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBkZWxheShkZWxheVRpbWUpO1xuICAgICAgICBzZXRSZXF1ZXN0U3RhdHVzKFJFUVVFU1RfU1RBVFVTLlNVQ0NFU1MpO1xuICAgICAgICBzZXREYXRhKGluaXRpYWxEYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgc2V0UmVxdWVzdFN0YXR1cyhSRVFVRVNUX1NUQVRVUy5GQUlMVVJFKTtcbiAgICAgICAgc2V0RXJyb3IoZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGRlbGF5RnVuYygpO1xuICB9LCBbXSk7XG5cbiAgZnVuY3Rpb24gdXBkYXRlUmVjb3JkKHJlY29yZFVwZGF0ZWQsIGRvbmVDYWxsYmFjaykge1xuICAgIGNvbnN0IG9yaWdpbmFsUmVjb3JkcyA9IFsuLi5kYXRhXTtcbiAgICBjb25zdCBuZXdSZWNvcmRzID0gZGF0YS5tYXAoZnVuY3Rpb24gKHJlYykge1xuICAgICAgcmV0dXJuIHJlYy5pZCA9PT0gcmVjb3JkVXBkYXRlZC5pZCA/IHJlY29yZFVwZGF0ZWQgOiByZWM7XG4gICAgfSk7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBkZWxheUZ1bmN0aW9uKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0RGF0YShuZXdSZWNvcmRzKTtcbiAgICAgICAgYXdhaXQgZGVsYXkoZGVsYXlUaW1lKTtcbiAgICAgICAgaWYgKGRvbmVDYWxsYmFjaykge1xuICAgICAgICAgIGRvbmVDYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIHRocm93biBpbnNpZGUgZGVsYXlGdW5jdGlvblwiLCBlcnJvcik7XG4gICAgICAgIGlmIChkb25lQ2FsbGJhY2spIHtcbiAgICAgICAgICBkb25lQ2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgICBzZXREYXRhKG9yaWdpbmFsUmVjb3Jkcyk7XG4gICAgICB9XG4gICAgfVxuICAgIGRlbGF5RnVuY3Rpb24oKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZGF0YSxcbiAgICByZXF1ZXN0U3RhdHVzLFxuICAgIGVycm9yLFxuICAgIHVwZGF0ZVJlY29yZCxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlUmVxdWVzdERlbGF5O1xuIiwiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiB1c2VUaGVtZShzdGFydGluZ1RoZW1lPVwibGlnaHRcIil7XHJcblxyXG4gICAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPXVzZVN0YXRlKHN0YXJ0aW5nVGhlbWUpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlVGhlbWUodGhlbWVWYWx1ZSl7XHJcbiAgICAgICAgaWYodGhlbWVWYWx1ZSA9PT0gXCJkYXJrXCIpe1xyXG4gICAgICAgICAgICBzZXRUaGVtZShcImRhcmtcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHNldFRoZW1lKFwibGlnaHRcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHRoZW1lLFxyXG4gICAgICAgIHNldFRoZW1lOiB2YWxpZGF0ZVRoZW1lXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgdXNlVGhlbWU7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXBsYWNlaG9sZGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=
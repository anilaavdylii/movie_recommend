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
  summary: "American superhero comedy film based on W. Watts Biggers, Chet Stover, and Joe Harris‘ 1960s animated television series of the same name, which is a spoof on the DC Comics superhero Superman",
  link: "https://theflixer.tv/movie/watch-underdog-full-12002",
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
  summary: "Hoping to cut a deal, a professional bank robber agrees to return all the money he stole in exchange for a reduced sentence. When two FBI agents set him up for murder, he is forced to go on the run to clear his name and bring them to justice",
  link: "https://theflixer.tv/movie/watch-honest-thief-full-63718",
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
  summary: "Deadpool is an American superhero film based on the Marvel Comics character of the same name. Distributed by 20th Century Fox, it is a spin-off in the X-Men film series and the eighth installment overall.",
  link: "https://theflixer.tv/movie/watch-deadpool-full-19694",
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
  summary: "Bruce Almighty is an American fantasy comedy film directed by Tom Shadyac and written by Steve Koren, Mark O'Keefe and Steve Oedekerk.",
  link: "https://theflixer.tv/movie/watch-bruce-almighty-full-19518",
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
  id,
  title,
  released,
  runtime,
  summary,
  link,
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
          lineNumber: 90,
          columnNumber: 20
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MovieImage, {
      id: id,
      title: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MovieFavorite, {
      favorite: favorite,
      onFavoriteToggle: onFavoriteToggle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "card-link",
        children: [" ", released, "  ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 47
        }, this), " ", runtime, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 62
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 67
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: link,
          target: "_blank",
          children: "Watch now on THEFLIXER\""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 72
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "card-description",
        children: summary
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 87,
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
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MovieDemographics, _objectSpread(_objectSpread({}, movie), {}, {
        onFavoriteToggle: onFavoriteToggle
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }, this), showRatings === true ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Ratings, {
      ratings: ratings
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 31
    }, this) : null]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 115,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3ZpZV9yZWNvbW1lbmQvLi9Nb3ZpZURhdGEuanMiLCJ3ZWJwYWNrOi8vbW92aWVfcmVjb21tZW5kLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbW92aWVfcmVjb21tZW5kLy4vc3JjL2NvbXBvbmVudHMvQXBwLmpzIiwid2VicGFjazovL21vdmllX3JlY29tbWVuZC8uL3NyYy9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9tb3ZpZV9yZWNvbW1lbmQvLi9zcmMvY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vbW92aWVfcmVjb21tZW5kLy4vc3JjL2NvbXBvbmVudHMvTW92aWUuanMiLCJ3ZWJwYWNrOi8vbW92aWVfcmVjb21tZW5kLy4vc3JjL2NvbXBvbmVudHMvTW92aWVzLmpzIiwid2VicGFjazovL21vdmllX3JlY29tbWVuZC8uL3NyYy9jb21wb25lbnRzL01vdmllc0xpc3QuanMiLCJ3ZWJwYWNrOi8vbW92aWVfcmVjb21tZW5kLy4vc3JjL2NvbXBvbmVudHMvTW92aWVzVG9vbGJhci5qcyIsIndlYnBhY2s6Ly9tb3ZpZV9yZWNvbW1lbmQvLi9zcmMvY29udGV4dHMvTW92aWVGaWx0ZXJDb250ZXh0LmpzIiwid2VicGFjazovL21vdmllX3JlY29tbWVuZC8uL3NyYy9jb250ZXh0cy9UaGVtZUNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vbW92aWVfcmVjb21tZW5kLy4vc3JjL2hvb2tzL3VzZU1vdmllRmlsdGVyLmpzIiwid2VicGFjazovL21vdmllX3JlY29tbWVuZC8uL3NyYy9ob29rcy91c2VSZXF1ZXN0RGVsYXkuanMiLCJ3ZWJwYWNrOi8vbW92aWVfcmVjb21tZW5kLy4vc3JjL2hvb2tzL3VzZVRoZW1lLmpzIiwid2VicGFjazovL21vdmllX3JlY29tbWVuZC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbW92aWVfcmVjb21tZW5kL2V4dGVybmFsIFwicmVhY3QtcGxhY2Vob2xkZXJcIiIsIndlYnBhY2s6Ly9tb3ZpZV9yZWNvbW1lbmQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJkYXRhIiwiaWQiLCJ0aXRsZSIsInllYXIiLCJyZWxlYXNlZCIsInJ1bnRpbWUiLCJzdW1tYXJ5IiwibGluayIsImZhdm9yaXRlIiwicmF0aW5ncyIsIkluZGV4UGFnZSIsIkFwcCIsIkhlYWRlciIsInRoZW1lIiwidXNlQ29udGV4dCIsIlRoZW1lQ29udGV4dCIsIkxheW91dCIsInN0YXJ0aW5nVGhlbWUiLCJjaGlsZHJlbiIsIkxheW91dE5vVGhlbWVQcm92aWRlciIsIlJhdGluZyIsIlNvdXJjZSIsIlZhbHVlIiwiUmF0aW5ncyIsInJhdGluZ1ZhbHVlIiwiTW92aWVGaWx0ZXJDb250ZXh0IiwiZmlsdGVyIiwicmF0aW5nIiwibWFwIiwiTW92aWVJbWFnZSIsIk1vdmllRmF2b3JpdGUiLCJvbkZhdm9yaXRlVG9nZ2xlIiwiaW5UcmFuc2l0aW9uIiwic2V0SW5UcmFuc2l0aW9uIiwidXNlU3RhdGUiLCJkb25lQ2FsbGJhY2siLCJjb25zb2xlIiwibG9nIiwiRGF0ZSIsImdldE1pbGxpc2Vjb25kcyIsIk1vdmllRGVtb2dyYXBoaWNzIiwiTW92aWUiLCJtb3ZpZSIsInNob3dSYXRpbmdzIiwiTW92aWVzIiwiTW92aWVzTGlzdCIsIm1vdmllc0RhdGEiLCJyZXF1ZXN0U3RhdHVzIiwiZXJyb3IiLCJ1cGRhdGVSZWNvcmQiLCJ1c2VSZXF1ZXN0RGVsYXkiLCJzZWFyY2hRdWVyeSIsIlJFUVVFU1RfU1RBVFVTIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImZpbmQiLCJNb3ZpZXNUb29sYmFyIiwic2V0VGhlbWUiLCJzZXRTaG93UmF0aW5ncyIsInNldFJhdGluZ1ZhbHVlIiwic2V0U2VhcmNoUXVlcnkiLCJSQVRJTkdfVkFMVUVTIiwiZXZlbnQiLCJ0YXJnZXQiLCJjaGVja2VkIiwidmFsdWUiLCJjdXJyZW50VGFyZ2V0IiwicmF0aW5ndiIsImNyZWF0ZUNvbnRleHQiLCJNb3ZpZUZpbHRlclByb3ZpZGVyIiwic3RhcnRpbmdTaG93UmF0aW5ncyIsInN0YXJ0aW5nUmF0aW5nVmFsdWUiLCJ1c2VNb3ZpZUZpbHRlciIsIlRoZW1lUHJvdmlkZXIiLCJ1c2VUaGVtZSIsIkxPQURJTkciLCJTVUNDRVNTIiwiRkFJTFVSRSIsImRlbGF5VGltZSIsImluaXRpYWxEYXRhIiwic2V0RGF0YSIsInNldFJlcXVlc3RTdGF0dXMiLCJzZXRFcnJvciIsImRlbGF5IiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJ1c2VFZmZlY3QiLCJkZWxheUZ1bmMiLCJlIiwicmVjb3JkVXBkYXRlZCIsIm9yaWdpbmFsUmVjb3JkcyIsIm5ld1JlY29yZHMiLCJyZWMiLCJkZWxheUZ1bmN0aW9uIiwidmFsaWRhdGVUaGVtZSIsInRoZW1lVmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sTUFBTUEsSUFBSSxHQUFHLENBQ2xCO0FBQ0VDLElBQUUsRUFBRSxHQUROO0FBRUVDLE9BQUssRUFBRSxVQUZUO0FBR0VDLE1BQUksRUFBRSxNQUhSO0FBSUVDLFVBQVEsRUFBRSxhQUpaO0FBS0VDLFNBQU8sRUFBRSxRQUxYO0FBTUVDLFNBQU8sRUFBQyxnTUFOVjtBQU9FQyxNQUFJLEVBQ0Ysc0RBUko7QUFTRUMsVUFBUSxFQUFFLElBVFo7QUFVRUMsU0FBTyxFQUFFLENBQ1A7QUFDRSxjQUFVLHlCQURaO0FBRUUsYUFBUztBQUZYLEdBRE8sRUFLUDtBQUNFLGNBQVUsaUJBRFo7QUFFRSxhQUFTO0FBRlgsR0FMTyxFQVNQO0FBQ0UsY0FBVSxZQURaO0FBRUUsYUFBUztBQUZYLEdBVE87QUFWWCxDQURrQixFQTBCbEI7QUFDRVIsSUFBRSxFQUFFLEdBRE47QUFFRUMsT0FBSyxFQUFFLGNBRlQ7QUFHRUMsTUFBSSxFQUFFLE1BSFI7QUFJRUMsVUFBUSxFQUFFLGFBSlo7QUFLRUMsU0FBTyxFQUFFLFFBTFg7QUFNRUMsU0FBTyxFQUFDLG1QQU5WO0FBT0VDLE1B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O0FBRUQsU0FBTTtBQUNGNUMsU0FERTtBQUVGNEMsWUFBUSxFQUFFdUM7QUFGUixHQUFOO0FBSUg7O0FBQ0QsK0RBQWV0QixRQUFmLEU7Ozs7Ozs7Ozs7O0FDcEJBLG1DOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGRhdGEgPSBbXG4gIHtcbiAgICBpZDogXCIxXCIsXG4gICAgdGl0bGU6IFwiVW5kZXJkb2dcIixcbiAgICB5ZWFyOiBcIjIwMDdcIixcbiAgICByZWxlYXNlZDogXCIwMyBBdWcgMjAwN1wiLFxuICAgIHJ1bnRpbWU6IFwiODQgbWluXCIsXG4gICAgc3VtbWFyeTpcIkFtZXJpY2FuIHN1cGVyaGVybyBjb21lZHkgZmlsbSBiYXNlZCBvbiBXLiBXYXR0cyBCaWdnZXJzLCBDaGV0IFN0b3ZlciwgYW5kIEpvZSBIYXJyaXPigJggMTk2MHMgYW5pbWF0ZWQgdGVsZXZpc2lvbiBzZXJpZXMgb2YgdGhlIHNhbWUgbmFtZSwgd2hpY2ggaXMgYSBzcG9vZiBvbiB0aGUgREMgQ29taWNzIHN1cGVyaGVybyBTdXBlcm1hblwiLFxuICAgIGxpbms6XG4gICAgICBcImh0dHBzOi8vdGhlZmxpeGVyLnR2L21vdmllL3dhdGNoLXVuZGVyZG9nLWZ1bGwtMTIwMDJcIixcbiAgICBmYXZvcml0ZTogdHJ1ZSxcbiAgICByYXRpbmdzOiBbXG4gICAgICB7XG4gICAgICAgIFwiU291cmNlXCI6IFwiSW50ZXJuZXQgTW92aWUgRGF0YWJhc2VcIixcbiAgICAgICAgXCJWYWx1ZVwiOiBcIjEwXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiU291cmNlXCI6IFwiUm90dGVuIFRvbWF0b2VzXCIsXG4gICAgICAgIFwiVmFsdWVcIjogXCI3XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiU291cmNlXCI6IFwiTWV0YWNyaXRpY1wiLFxuICAgICAgICBcIlZhbHVlXCI6IFwiOFwiXG4gICAgICB9XG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcIjJcIixcbiAgICB0aXRsZTogXCJIb25lc3QgVGhpZWZcIixcbiAgICB5ZWFyOiBcIjIwMjBcIixcbiAgICByZWxlYXNlZDogXCIxNiBPY3QgMjAyMFwiLFxuICAgIHJ1bnRpbWU6IFwiOTkgbWluXCIsXG4gICAgc3VtbWFyeTpcIkhvcGluZyB0byBjdXQgYSBkZWFsLCBhIHByb2Zlc3Npb25hbCBiYW5rIHJvYmJlciBhZ3JlZXMgdG8gcmV0dXJuIGFsbCB0aGUgbW9uZXkgaGUgc3RvbGUgaW4gZXhjaGFuZ2UgZm9yIGEgcmVkdWNlZCBzZW50ZW5jZS4gV2hlbiB0d28gRkJJIGFnZW50cyBzZXQgaGltIHVwIGZvciBtdXJkZXIsIGhlIGlzIGZvcmNlZCB0byBnbyBvbiB0aGUgcnVuIHRvIGNsZWFyIGhpcyBuYW1lIGFuZCBicmluZyB0aGVtIHRvIGp1c3RpY2VcIixcbiAgICBsaW5rOlxuICAgICAgICBcImh0dHBzOi8vdGhlZmxpeGVyLnR2L21vdmllL3dhdGNoLWhvbmVzdC10aGllZi1mdWxsLTYzNzE4XCIsXG4gICAgcmF0aW5nczogW1xuICAgICAge1xuICAgICAgICBcIlNvdXJjZVwiOiBcIkludGVybmV0IE1vdmllIERhdGFiYXNlXCIsXG4gICAgICAgIFwiVmFsdWVcIjogXCI5XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiU291cmNlXCI6IFwiTWV0YWNyaXRpY1wiLFxuICAgICAgICBcIlZhbHVlXCI6IFwiMTBcIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGlkOiBcIjNcIixcbiAgICB0aXRsZTogXCJEZWFkcG9vbFwiLFxuICAgIHllYXI6IFwiMjAxNlwiLFxuICAgIHJlbGVhc2VkOiBcIjEyIEZlYiAyMDE2XCIsXG4gICAgcnVudGltZTogXCIxMDggbWluXCIsXG4gICAgc3VtbWFyeTpcIkRlYWRwb29sIGlzIGFuIEFtZXJpY2FuIHN1cGVyaGVybyBmaWxtIGJhc2VkIG9uIHRoZSBNYXJ2ZWwgQ29taWNzIGNoYXJhY3RlciBvZiB0aGUgc2FtZSBuYW1lLiBEaXN0cmlidXRlZCBieSAyMHRoIENlbnR1cnkgRm94LCBpdCBpcyBhIHNwaW4tb2ZmIGluIHRoZSBYLU1lbiBmaWxtIHNlcmllcyBhbmQgdGhlIGVpZ2h0aCBpbnN0YWxsbWVudCBvdmVyYWxsLlwiLFxuICAgIGxpbms6XG4gICAgICBcImh0dHBzOi8vdGhlZmxpeGVyLnR2L21vdmllL3dhdGNoLWRlYWRwb29sLWZ1bGwtMTk2OTRcIixcbiAgICBmYXZvcml0ZTogdHJ1ZSxcbiAgICByYXRpbmdzOiBbXG4gICAgICB7XG4gICAgICAgIFwiU291cmNlXCI6IFwiSW50ZXJuZXQgTW92aWUgRGF0YWJhc2VcIixcbiAgICAgICAgXCJWYWx1ZVwiOiBcIjVcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJTb3VyY2VcIjogXCJSb3R0ZW4gVG9tYXRvZXNcIixcbiAgICAgICAgXCJWYWx1ZVwiOiBcIjEwXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiU291cmNlXCI6IFwiTWV0YWNyaXRpY1wiLFxuICAgICAgICBcIlZhbHVlXCI6IFwiOVwiXG4gICAgICB9XG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcIjRcIixcbiAgICB0aXRsZTogXCJCcnVjZSBBbG1pZ2h0eVwiLFxuICAgIHllYXI6IFwiMjAwM1wiLFxuICAgIHJlbGVhc2VkOiBcIjIzIE1heSAyMDAzXCIsXG4gICAgcnVudGltZTogXCIxMDEgbWluXCIsXG4gICAgc3VtbWFyeTpcIkJydWNlIEFsbWlnaHR5IGlzIGFuIEFtZXJpY2FuIGZhbnRhc3kgY29tZWR5IGZpbG0gZGlyZWN0ZWQgYnkgVG9tIFNoYWR5YWMgYW5kIHdyaXR0ZW4gYnkgU3RldmUgS29yZW4sIE1hcmsgTydLZWVmZSBhbmQgU3RldmUgT2VkZWtlcmsuXCIsXG4gICAgbGluazpcbiAgICAgIFwiaHR0cHM6Ly90aGVmbGl4ZXIudHYvbW92aWUvd2F0Y2gtYnJ1Y2UtYWxtaWdodHktZnVsbC0xOTUxOFwiLFxuICAgIGZhdm9yaXRlOiB0cnVlLFxuICAgIHJhdGluZ3M6IFtcbiAgICAgIHtcbiAgICAgICAgXCJTb3VyY2VcIjogXCJJbnRlcm5ldCBNb3ZpZSBEYXRhYmFzZVwiLFxuICAgICAgICBcIlZhbHVlXCI6IFwiNlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIlNvdXJjZVwiOiBcIlJvdHRlbiBUb21hdG9lc1wiLFxuICAgICAgICBcIlZhbHVlXCI6IFwiMTBcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJTb3VyY2VcIjogXCJNZXRhY3JpdGljXCIsXG4gICAgICAgIFwiVmFsdWVcIjogXCI0XCJcbiAgICAgIH1cbiAgICBdLFxuICB9LFxuXG5dO1xuIiwiaW1wb3J0IEFwcCBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvQXBwXCI7XG5jb25zdCBJbmRleFBhZ2UgPSAoKSA9PiB7XG4gIHJldHVybiA8QXBwIC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlO1xuIiwiaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcbmltcG9ydCBNb3ZpZXMgZnJvbSBcIi4vTW92aWVzXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuL0xheW91dFwiO1xuXG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHN0YXJ0aW5nVGhlbWU9XCJsaWdodFwiPlxuICAgICAgPGRpdiA+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPE1vdmllcyAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImltcG9ydCB7VGhlbWVDb250ZXh0fSBmcm9tIFwiLi4vY29udGV4dHMvVGhlbWVDb250ZXh0XCI7XG5pbXBvcnQge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gSGVhZGVyKCkge1xuXG4gIGNvbnN0IHt0aGVtZX0gPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZFQ0IHBhZEI0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtb2JpbGUtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpbWcgYWx0PVwiU1ZDQyBIb21lIFBhZ2VcIiBzcmM9XCIvaW1hZ2VzL2xvZ28ucG5nXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhlbWUgPT09IFwibGlnaHRcIiA/IFwiXCIgOiBcInRleHQtaW5mb1wifT5cbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJoZWFkZXItdGl0bGVcIj5HcmVhdGVzdCBNb3ZpZXMgb2YgQWxsIFRpbWU8L2g0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGVtZSA9PT0gXCJsaWdodFwiID8gXCJcIiA6IFwidGV4dC1pbmZvXCJ9PlxuICAgICAgICAgICAgSGVsbG8gTXIuIFNtaXRoICZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+c2lnbi1vdXQ8L2E+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsImltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVGhlbWVDb250ZXh0LCBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dHMvVGhlbWVDb250ZXh0JztcclxuXHJcbmZ1bmN0aW9uIExheW91dCh7c3RhcnRpbmdUaGVtZSwgY2hpbGRyZW59KXtcclxuICByZXR1cm4oXHJcbiAgICA8VGhlbWVQcm92aWRlciBzdGFydGluZ1RoZW1lPXtzdGFydGluZ1RoZW1lfSAgPlxyXG4gICAgICA8TGF5b3V0Tm9UaGVtZVByb3ZpZGVyPntjaGlsZHJlbn08L0xheW91dE5vVGhlbWVQcm92aWRlcj5cclxuICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBMYXlvdXROb1RoZW1lUHJvdmlkZXIoe2NoaWxkcmVufSl7XHJcblxyXG4gIGNvbnN0IHt0aGVtZX0gPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgdGhlbWUgPT09IFwibGlnaHRcIiA/IFwiY29udGFpbmVyLWZsdWlkIGxpZ2h0XCIgOiBcImNvbnRhaW5lci1mbHVpZCBkYXJrXCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7TW92aWVGaWx0ZXJDb250ZXh0fSBmcm9tIFwiLi8uLi9jb250ZXh0cy9Nb3ZpZUZpbHRlckNvbnRleHRcIjtcclxuXHJcbmZ1bmN0aW9uIFJhdGluZyh7IFNvdXJjZSwgVmFsdWUgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJyYXRpbmcgdy0xMDBcIj5cclxuICAgICAge1NvdXJjZX0gPHN0cm9uZz5WYWx1ZToge1ZhbHVlfS8xMDwvc3Ryb25nPlxyXG4gICAgPC9zcGFuPlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFJhdGluZ3MoeyByYXRpbmdzIH0pIHtcclxuICBjb25zdCB7cmF0aW5nVmFsdWV9ID0gdXNlQ29udGV4dChNb3ZpZUZpbHRlckNvbnRleHQpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmdCb3ggY2FyZCBoLTI1MFwiPlxyXG4gICAgICB7cmF0aW5ncy5maWx0ZXIoZnVuY3Rpb24ocmF0aW5nKXtcclxuICAgICAgICByZXR1cm4gcmF0aW5nLlZhbHVlID09PSByYXRpbmdWYWx1ZTtcclxuICAgICAgfSlcclxuICAgICAgLm1hcChmdW5jdGlvbihyYXRpbmcpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nIHctMTAwXCIga2V5PXtyYXRpbmcuaWR9PlxyXG4gICAgICAgICAgICA8UmF0aW5nIHsuLi5yYXRpbmd9Lz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gTW92aWVJbWFnZSh7IGlkLCB0aXRsZSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWUtaW1nIGQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBoLTMwMFwiPlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbi1maXRcIlxyXG4gICAgICAgIHNyYz17YC9pbWFnZXMvbW92aWUtJHtpZH0ucG5nYH1cclxuICAgICAgICB3aWR0aD1cIjMwMFwiXHJcbiAgICAgICAgYWx0PXtgJHt0aXRsZX1gfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gTW92aWVGYXZvcml0ZSh7IGZhdm9yaXRlLCBvbkZhdm9yaXRlVG9nZ2xlIH0pIHtcclxuICBjb25zdCBbaW5UcmFuc2l0aW9uLCBzZXRJblRyYW5zaXRpb25dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGZ1bmN0aW9uIGRvbmVDYWxsYmFjaygpIHtcclxuICAgIHNldEluVHJhbnNpdGlvbihmYWxzZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgYEluIE1vdmllRmF2b3JpdGU6ZG9uZUNhbGxiYWNrICAgICR7bmV3IERhdGUoKS5nZXRNaWxsaXNlY29uZHMoKX1gXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uIHBhZEIxXCI+XHJcbiAgICAgIDxzcGFuXHJcbiAgICAgICAgb25DbGljaz17ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgc2V0SW5UcmFuc2l0aW9uKHRydWUpO1xyXG4gICAgICAgICAgcmV0dXJuIG9uRmF2b3JpdGVUb2dnbGUoZG9uZUNhbGxiYWNrKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGlcclxuICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgIGZhdm9yaXRlID09PSB0cnVlID8gXCJmYSBmYS1zdGFyIG9yYW5nZVwiIDogXCJmYSBmYS1zdGFyLW8gb3JhbmdlXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICAvPntcIiBcIn1cclxuICAgICAgICBGYXZvcml0ZXtcIiBcIn1cclxuICAgICAgICB7aW5UcmFuc2l0aW9uID8gKFxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmFzIGZhLWNpcmNsZS1ub3RjaCBmYS1zcGluXCI+PC9zcGFuPlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBNb3ZpZURlbW9ncmFwaGljcyh7XHJcbiAgaWQsXHJcbiAgdGl0bGUsXHJcbiAgcmVsZWFzZWQsXHJcbiAgcnVudGltZSxcclxuICBzdW1tYXJ5LFxyXG4gIGxpbmssXHJcbiAgZmF2b3JpdGUsXHJcbiAgb25GYXZvcml0ZVRvZ2dsZSxcclxufSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdmllLWluZm9cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWItM1wiPlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXRydW5jYXRlIHctMjAwXCI+XHJcbiAgICAgICAgICB7dGl0bGV9ICA8YnIvPiBcclxuICAgICAgICA8L2gzPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPE1vdmllSW1hZ2UgaWQ9e2lkfSB0aXRsZT17dGl0bGV9ICAvPlxyXG4gICAgICA8TW92aWVGYXZvcml0ZVxyXG4gICAgICAgIGZhdm9yaXRlPXtmYXZvcml0ZX1cclxuICAgICAgICBvbkZhdm9yaXRlVG9nZ2xlPXtvbkZhdm9yaXRlVG9nZ2xlfVxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtbGlua1wiPiB7cmVsZWFzZWR9ICA8YnIvPiB7cnVudGltZX08YnIvPjxici8+PGEgaHJlZj17bGlua30gdGFyZ2V0PVwiX2JsYW5rXCI+V2F0Y2ggbm93IG9uIFRIRUZMSVhFUlwiPC9hPjwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxici8+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC1kZXNjcmlwdGlvblwiPntzdW1tYXJ5fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxici8+XHJcbiAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gTW92aWUoeyBtb3ZpZSwgb25GYXZvcml0ZVRvZ2dsZSB9KSB7XHJcbiAgY29uc3QgeyBpZCwgdGl0bGUsIHllYXIsIHJhdGluZ3MgfSA9IG1vdmllO1xyXG4gIGNvbnN0IHtzaG93UmF0aW5nc30gPSB1c2VDb250ZXh0KE1vdmllRmlsdGVyQ29udGV4dCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNCBjb2wtc20tMTIgY29sLXhzLTEyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWhlaWdodCBwLTQgbXQtNFwiPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxNb3ZpZURlbW9ncmFwaGljcyB7Li4ubW92aWV9IG9uRmF2b3JpdGVUb2dnbGU9e29uRmF2b3JpdGVUb2dnbGV9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7c2hvd1JhdGluZ3MgPT09IHRydWUgPyA8UmF0aW5ncyByYXRpbmdzPXtyYXRpbmdzfSAvPiA6IG51bGx9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3ZpZTtcclxuIiwiaW1wb3J0IE1vdmllc1Rvb2xiYXIgZnJvbSBcIi4vTW92aWVzVG9vbGJhclwiO1xyXG5pbXBvcnQgTW92aWVzTGlzdCBmcm9tIFwiLi9Nb3ZpZXNMaXN0XCI7XHJcbmltcG9ydCB7TW92aWVGaWx0ZXJQcm92aWRlcn0gZnJvbSBcIi4uL2NvbnRleHRzL01vdmllRmlsdGVyQ29udGV4dFwiO1xyXG5cclxuZnVuY3Rpb24gTW92aWVzKCkge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE1vdmllRmlsdGVyUHJvdmlkZXIgc3RhcnRpbmdTaG93UmF0aW5ncz17ZmFsc2V9PlxyXG4gICAgICA8TW92aWVzVG9vbGJhciAvPlxyXG4gICAgICA8TW92aWVzTGlzdCAvPlxyXG4gICAgPC9Nb3ZpZUZpbHRlclByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vdmllcztcclxuIiwiaW1wb3J0IE1vdmllIGZyb20gXCIuL01vdmllXCI7XHJcbmltcG9ydCBSZWFjdFBsYWNlSG9sZGVyIGZyb20gXCJyZWFjdC1wbGFjZWhvbGRlclwiO1xyXG5pbXBvcnQgdXNlUmVxdWVzdERlbGF5LCB7IFJFUVVFU1RfU1RBVFVTIH0gZnJvbSBcIi4uL2hvb2tzL3VzZVJlcXVlc3REZWxheVwiO1xyXG5pbXBvcnQgeyBkYXRhIH0gZnJvbSBcIi4uLy4uL01vdmllRGF0YVwiO1xyXG5pbXBvcnQge3VzZUNvbnRleHR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge01vdmllRmlsdGVyQ29udGV4dH0gZnJvbSBcIi4vLi4vY29udGV4dHMvTW92aWVGaWx0ZXJDb250ZXh0XCI7XHJcblxyXG5mdW5jdGlvbiBNb3ZpZXNMaXN0KCkge1xyXG4gIGNvbnN0IHtcclxuICAgIGRhdGE6IG1vdmllc0RhdGEsXHJcbiAgICByZXF1ZXN0U3RhdHVzLFxyXG4gICAgZXJyb3IsXHJcbiAgICB1cGRhdGVSZWNvcmQsXHJcbiAgfSA9IHVzZVJlcXVlc3REZWxheSgyMDAwLCBkYXRhKTtcclxuXHJcbiAgY29uc3QgeyBzZWFyY2hRdWVyeSwgcmF0aW5nVmFsdWUgfSA9IHVzZUNvbnRleHQoTW92aWVGaWx0ZXJDb250ZXh0KTtcclxuXHJcbiAgaWYgKHJlcXVlc3RTdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLkZBSUxVUkUpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj5cclxuICAgICAgICBFUlJPUjogPGI+bG9hZGluZyBNb3ZpZSBEYXRhIEZhaWxlZCB7ZXJyb3J9PC9iPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG1vdmllcy1saXN0XCI+XHJcbiAgICAgIDxSZWFjdFBsYWNlSG9sZGVyXHJcbiAgICAgICAgdHlwZT1cIm1lZGlhXCJcclxuICAgICAgICByb3dzPXsyMH1cclxuICAgICAgICBjbGFzc05hbWU9XCJtb3ZpZXNsaXN0LXBsYWNlaG9sZGVyXCJcclxuICAgICAgICByZWFkeT17cmVxdWVzdFN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuU1VDQ0VTU31cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICB7bW92aWVzRGF0YVxyXG4gICAgICAgICAgLmZpbHRlcihmdW5jdGlvbihtb3ZpZSl7XHJcbiAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICBtb3ZpZS50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5KSBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uKG1vdmllKXtcclxuICAgICAgICAgICAgcmV0dXJuIG1vdmllLnJhdGluZ3MuZmluZCgocmF0aW5nKT0+e1xyXG4gICAgICAgICAgICAgIHJldHVybiByYXRpbmcuVmFsdWUgPT09IHJhdGluZ1ZhbHVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKG1vdmllKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPE1vdmllXHJcbiAgICAgICAgICAgICAgICBrZXk9e21vdmllLmlkfVxyXG4gICAgICAgICAgICAgICAgbW92aWU9e21vdmllfVxyXG4gICAgICAgICAgICAgICAgb25GYXZvcml0ZVRvZ2dsZT17KGRvbmVDYWxsYmFjaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB1cGRhdGVSZWNvcmQoXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLi4ubW92aWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBmYXZvcml0ZTogIW1vdmllLmZhdm9yaXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZUNhbGxiYWNrXHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9SZWFjdFBsYWNlSG9sZGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW92aWVzTGlzdDtcclxuIiwiaW1wb3J0IHtUaGVtZUNvbnRleHR9IGZyb20gXCIuLi9jb250ZXh0cy9UaGVtZUNvbnRleHRcIjtcclxuaW1wb3J0IHtNb3ZpZUZpbHRlckNvbnRleHR9IGZyb20gXCIuLi9jb250ZXh0cy9Nb3ZpZUZpbHRlckNvbnRleHRcIjtcclxuaW1wb3J0IHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBNb3ZpZXNUb29sYmFyKCkge1xyXG5cclxuICBjb25zdCB7dGhlbWUsIHNldFRoZW1lfSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcclxuICBjb25zdCB7c2hvd1JhdGluZ3MsIHNldFNob3dSYXRpbmdzLCByYXRpbmdWYWx1ZSwgc2V0UmF0aW5nVmFsdWUsIHNldFNlYXJjaFF1ZXJ5LCBSQVRJTkdfVkFMVUVTfSA9IHVzZUNvbnRleHQoTW92aWVGaWx0ZXJDb250ZXh0KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRvb2xiYXIgZGFyay10aGVtZS1oZWFkZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidG9vbHJvdyBkLWZsZXggZmxleC1jb2x1bW4gZmxleC1sZy1yb3dcIj5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBmbGV4LW1kLXJvd1wiPlxyXG4gICAgICAgICAgICAgIDxiPlNob3cgUmF0aW5ncyZuYnNwOyZuYnNwOzwvYj5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZmF2XCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c2hvd1JhdGluZ3N9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTaG93UmF0aW5ncyhldmVudC50YXJnZXQuY2hlY2tlZCk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3dpdGNoXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gZmxleC1tZC1yb3cgbWwtc20tNSBtbC0wXCI+XHJcbiAgICAgICAgICAgICAgPHN0cm9uZz5UaGVtZTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgdGhlbWVcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhlbWV9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaGVtZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibGlnaHRcIj5MaWdodDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGFya1wiPkRhcms8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaC4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlYXJjaFF1ZXJ5KGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIHR5cGU9XCJidXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXNlYXJjaFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBmbGV4LW1kLXJvd1wiPlxyXG4gICAgICAgICAgICAgIDxzdHJvbmc+UmF0aW5nIFZhbHVlPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImRyb3BtZW51XCI+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXtyYXRpbmdWYWx1ZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHtjdXJyZW50VGFyZ2V0fSk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmF0aW5nVmFsdWUoY3VycmVudFRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1JBVElOR19WQUxVRVMubWFwKGZ1bmN0aW9uKHJhdGluZ3Ype1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3JhdGluZ3Z9IGtleT17cmF0aW5ndn0+e3JhdGluZ3Z9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW92aWVzVG9vbGJhcjtcclxuIiwiaW1wb3J0IFJlYWN0LHtjcmVhdGVDb250ZXh0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHVzZU1vdmllRmlsdGVyIGZyb20gXCIuLi9ob29rcy91c2VNb3ZpZUZpbHRlclwiO1xyXG5cclxuY29uc3QgTW92aWVGaWx0ZXJDb250ZXh0PSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5mdW5jdGlvbiBNb3ZpZUZpbHRlclByb3ZpZGVyICh7Y2hpbGRyZW4sIHN0YXJ0aW5nU2hvd1JhdGluZ3MgPSBmYWxzZSwgc3RhcnRpbmdSYXRpbmdWYWx1ZT1cIjEwXCJ9KXtcclxuICAgIGNvbnN0IHtzaG93UmF0aW5ncywgc2V0U2hvd1JhdGluZ3MsIFxyXG4gICAgICAgIHJhdGluZ1ZhbHVlLCBzZXRSYXRpbmdWYWx1ZSwgXHJcbiAgICAgICAgc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5LCBcclxuICAgICAgICBSQVRJTkdfVkFMVUVTfSA9IHVzZU1vdmllRmlsdGVyKHN0YXJ0aW5nU2hvd1JhdGluZ3MsIHN0YXJ0aW5nUmF0aW5nVmFsdWUpO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8TW92aWVGaWx0ZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7c2hvd1JhdGluZ3MsIHNldFNob3dSYXRpbmdzLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhdGluZ1ZhbHVlLCBzZXRSYXRpbmdWYWx1ZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUkFUSU5HX1ZBTFVFU319PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9Nb3ZpZUZpbHRlckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApO1xyXG59XHJcbmV4cG9ydCB7TW92aWVGaWx0ZXJDb250ZXh0LCBNb3ZpZUZpbHRlclByb3ZpZGVyfSIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB1c2VUaGVtZSBmcm9tIFwiLi4vaG9va3MvdXNlVGhlbWVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBUaGVtZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5mdW5jdGlvbiBUaGVtZVByb3ZpZGVyKHsgY2hpbGRyZW4sIHN0YXJ0aW5nVGhlbWUgfSkge1xyXG4gIGNvbnN0IHt0aGVtZSwgc2V0VGhlbWV9ID0gdXNlVGhlbWUoc3RhcnRpbmdUaGVtZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VGhlbWVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHNldFRoZW1lLCB0aGVtZSB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9UaGVtZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IHsgVGhlbWVQcm92aWRlciB9O1xyXG4iLCJpbXBvcnQge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIHVzZU1vdmllRmlsdGVyKHN0YXJ0aW5nU2hvd1JhdGluZ3MsIHN0YXJ0aW5nUmF0aW5nVmFsdWUpe1xyXG4gICAgY29uc3QgW3Nob3dSYXRpbmdzLCBzZXRTaG93UmF0aW5nc10gPSB1c2VTdGF0ZShzdGFydGluZ1Nob3dSYXRpbmdzKTtcclxuICAgIGNvbnN0IFtyYXRpbmdWYWx1ZSwgc2V0UmF0aW5nVmFsdWVdID0gdXNlU3RhdGUoc3RhcnRpbmdSYXRpbmdWYWx1ZSk7XHJcbiAgICBjb25zdCBbIHNlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgICBjb25zdCBSQVRJTkdfVkFMVUVTPVtcclxuICAgICAgICBcIjFcIixcIjJcIixcIjNcIixcIjRcIixcIjVcIixcIjZcIixcIjdcIixcIjhcIixcIjlcIixcIjEwXCJcclxuICAgIF07XHJcblxyXG5cclxuICAgIHJldHVybntcclxuICAgICAgICBzaG93UmF0aW5ncyxcclxuICAgICAgICBzZXRTaG93UmF0aW5ncyxcclxuICAgICAgICByYXRpbmdWYWx1ZSxcclxuICAgICAgICBzZXRSYXRpbmdWYWx1ZSxcclxuICAgICAgICBzZWFyY2hRdWVyeSxcclxuICAgICAgICBzZXRTZWFyY2hRdWVyeSxcclxuICAgICAgICBSQVRJTkdfVkFMVUVTXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgdXNlTW92aWVGaWx0ZXI7IiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgUkVRVUVTVF9TVEFUVVMgPSB7XG4gIExPQURJTkc6IFwibG9hZGluZ1wiLFxuICBTVUNDRVNTOiBcInN1Y2Nlc3NcIixcbiAgRkFJTFVSRTogXCJmYWlsdXJlXCIsXG59O1xuXG5mdW5jdGlvbiB1c2VSZXF1ZXN0RGVsYXkoZGVsYXlUaW1lID0gMTAwMCwgaW5pdGlhbERhdGEgPSBbXSkge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtyZXF1ZXN0U3RhdHVzLCBzZXRSZXF1ZXN0U3RhdHVzXSA9IHVzZVN0YXRlKFJFUVVFU1RfU1RBVFVTLkxPQURJTkcpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBkZWxheSA9IChtcykgPT4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBkZWxheUZ1bmMoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBkZWxheShkZWxheVRpbWUpO1xuICAgICAgICBzZXRSZXF1ZXN0U3RhdHVzKFJFUVVFU1RfU1RBVFVTLlNVQ0NFU1MpO1xuICAgICAgICBzZXREYXRhKGluaXRpYWxEYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgc2V0UmVxdWVzdFN0YXR1cyhSRVFVRVNUX1NUQVRVUy5GQUlMVVJFKTtcbiAgICAgICAgc2V0RXJyb3IoZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGRlbGF5RnVuYygpO1xuICB9LCBbXSk7XG5cbiAgZnVuY3Rpb24gdXBkYXRlUmVjb3JkKHJlY29yZFVwZGF0ZWQsIGRvbmVDYWxsYmFjaykge1xuICAgIGNvbnN0IG9yaWdpbmFsUmVjb3JkcyA9IFsuLi5kYXRhXTtcbiAgICBjb25zdCBuZXdSZWNvcmRzID0gZGF0YS5tYXAoZnVuY3Rpb24gKHJlYykge1xuICAgICAgcmV0dXJuIHJlYy5pZCA9PT0gcmVjb3JkVXBkYXRlZC5pZCA/IHJlY29yZFVwZGF0ZWQgOiByZWM7XG4gICAgfSk7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBkZWxheUZ1bmN0aW9uKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0RGF0YShuZXdSZWNvcmRzKTtcbiAgICAgICAgYXdhaXQgZGVsYXkoZGVsYXlUaW1lKTtcbiAgICAgICAgaWYgKGRvbmVDYWxsYmFjaykge1xuICAgICAgICAgIGRvbmVDYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIHRocm93biBpbnNpZGUgZGVsYXlGdW5jdGlvblwiLCBlcnJvcik7XG4gICAgICAgIGlmIChkb25lQ2FsbGJhY2spIHtcbiAgICAgICAgICBkb25lQ2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgICBzZXREYXRhKG9yaWdpbmFsUmVjb3Jkcyk7XG4gICAgICB9XG4gICAgfVxuICAgIGRlbGF5RnVuY3Rpb24oKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZGF0YSxcbiAgICByZXF1ZXN0U3RhdHVzLFxuICAgIGVycm9yLFxuICAgIHVwZGF0ZVJlY29yZCxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlUmVxdWVzdERlbGF5O1xuIiwiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiB1c2VUaGVtZShzdGFydGluZ1RoZW1lPVwibGlnaHRcIil7XHJcblxyXG4gICAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPXVzZVN0YXRlKHN0YXJ0aW5nVGhlbWUpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlVGhlbWUodGhlbWVWYWx1ZSl7XHJcbiAgICAgICAgaWYodGhlbWVWYWx1ZSA9PT0gXCJkYXJrXCIpe1xyXG4gICAgICAgICAgICBzZXRUaGVtZShcImRhcmtcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHNldFRoZW1lKFwibGlnaHRcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHRoZW1lLFxyXG4gICAgICAgIHNldFRoZW1lOiB2YWxpZGF0ZVRoZW1lXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgdXNlVGhlbWU7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXBsYWNlaG9sZGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=
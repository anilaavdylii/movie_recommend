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
/* harmony import */ var _contexts_MovieContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../contexts/MovieContext */ "./src/contexts/MovieContext.js");
/* harmony import */ var _MovieDelete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MovieDelete */ "./src/components/MovieDelete.js");

var _jsxFileName = "C:\\Users\\hp\\Desktop\\react\\movie_recommend\\src\\components\\Movie.js";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
      lineNumber: 9,
      columnNumber: 16
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

function Ratings() {
  const {
    ratingValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_MovieFilterContext__WEBPACK_IMPORTED_MODULE_2__.MovieFilterContext);
  const {
    movie
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_MovieContext__WEBPACK_IMPORTED_MODULE_3__.MovieContext);
  const ratings = movie.ratings;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "ratingBox card h-250",
    children: ratings.filter(function (rating) {
      return rating.Value === ratingValue;
    }).map(function (rating) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "rating w-100",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Rating, _objectSpread({}, rating), void 0, false, {
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

function ImageWithFallback(_ref) {
  let {
    src
  } = _ref,
      props = _objectWithoutProperties(_ref, ["src"]);

  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: imgSrc,
    1: setImgSrc
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(src);

  function onError() {
    if (!error) {
      setImgSrc("/images/movie-99999.png");
      setError(true);
    }
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", _objectSpread(_objectSpread({
    src: imgSrc
  }, props), {}, {
    onError: onError
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 10
  }, this);
}

function MovieImage() {
  const {
    movie: {
      id,
      title
    }
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_MovieContext__WEBPACK_IMPORTED_MODULE_3__.MovieContext);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "movie-img d-flex flex-row justify-content-center align-items-center h-300",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageWithFallback, {
      className: "contain-fit",
      src: `/images/movie-${id}.png`,
      width: "300",
      alt: `${title}`
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

function MovieFavorite() {
  const {
    movie,
    updateRecord
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_MovieContext__WEBPACK_IMPORTED_MODULE_3__.MovieContext);
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
        updateRecord(_objectSpread(_objectSpread({}, movie), {}, {
          favorite: !movie.favorite
        }), doneCallback);
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        className: movie.favorite === true ? "fa fa-star orange" : "fa fa-star-o orange"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, this), " ", "Favorite", " ", inTransition ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
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

function MovieDemographics() {
  const {
    movie
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_MovieContext__WEBPACK_IMPORTED_MODULE_3__.MovieContext);
  const {
    title,
    released,
    runtime,
    summary,
    link,
    favorite
  } = movie;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "movie-info",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "d-flex justify-content-between mb-3",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        className: "text-truncate w-200",
        children: [title, "  ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MovieFavorite, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "card-link",
        children: [" ", released, "  ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 47
        }, this), " ", runtime, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 62
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 67
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
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

function Movie({
  movie,
  updateRecord,
  insertRecord,
  deleteRecord
}) {
  const {
    showRatings
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_MovieFilterContext__WEBPACK_IMPORTED_MODULE_2__.MovieFilterContext);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_MovieContext__WEBPACK_IMPORTED_MODULE_3__.MovieProvider, {
    movie: movie,
    updateRecord: updateRecord,
    insertRecord: insertRecord,
    deleteRecord: deleteRecord,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "card card-height p-4 mt-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MovieImage, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MovieDemographics, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 9
      }, this), showRatings === true ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Ratings, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 33
      }, this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MovieDelete__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 128,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Movie);

/***/ }),

/***/ "./src/components/MovieAdd.js":
/*!************************************!*\
  !*** ./src/components/MovieAdd.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\hp\\Desktop\\react\\movie_recommend\\src\\components\\MovieAdd.js";

function MovieAdd({
  ratingValue,
  insertRecord
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
    href: "#",
    className: "addSes",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
      onClick: e => {
        e.preventDefault();
        const titleNew = window.prompt("Enter title:");
        insertRecord({
          id: "99999",
          title: titleNew,
          summary: "Summary not entered yet!",
          ratings: [{
            Source: "Admin",
            Value: `${ratingValue}`
          }]
        });
      },
      children: "+"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MovieAdd);

/***/ }),

/***/ "./src/components/MovieDelete.js":
/*!***************************************!*\
  !*** ./src/components/MovieDelete.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_MovieContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/MovieContext */ "./src/contexts/MovieContext.js");

var _jsxFileName = "C:\\Users\\hp\\Desktop\\react\\movie_recommend\\src\\components\\MovieDelete.js";



function MovieDelete() {
  const {
    movie,
    deleteRecord
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_MovieContext__WEBPACK_IMPORTED_MODULE_2__.MovieContext);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
    className: "session w-100",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      href: "#",
      className: "remSes",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        onClick: e => {
          e.preventDefault();

          if (window.confirm("Are you sure you want to delete this movie?")) {
            deleteRecord(movie);
          }
        },
        children: "-"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      className: "padL2",
      children: "Delete Movie"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 7
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MovieDelete);

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
/* harmony import */ var _hooks_useRequestRest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useRequestRest */ "./src/hooks/useRequestRest.js");
/* harmony import */ var _MovieData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../MovieData */ "./MovieData.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _contexts_MovieFilterContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../contexts/MovieFilterContext */ "./src/contexts/MovieFilterContext.js");
/* harmony import */ var _MovieAdd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MovieAdd */ "./src/components/MovieAdd.js");

var _jsxFileName = "C:\\Users\\hp\\Desktop\\react\\movie_recommend\\src\\components\\MoviesList.js";








function MoviesList() {
  const {
    data: moviesData,
    requestStatus,
    error,
    updateRecord,
    insertRecord,
    deleteRecord
  } = (0,_hooks_useRequestRest__WEBPACK_IMPORTED_MODULE_3__.default)();
  const {
    searchQuery,
    ratingValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_contexts_MovieFilterContext__WEBPACK_IMPORTED_MODULE_6__.MovieFilterContext);

  if (requestStatus === _hooks_useRequestRest__WEBPACK_IMPORTED_MODULE_3__.REQUEST_STATUS.FAILURE) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "text-danger",
      children: ["ERROR: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
        children: ["loading Movie Data Failed ", error]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 16
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container movies-list",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_placeholder__WEBPACK_IMPORTED_MODULE_2___default()), {
      type: "media",
      rows: 20,
      className: "movieslist-placeholder",
      ready: requestStatus === _hooks_useRequestRest__WEBPACK_IMPORTED_MODULE_3__.REQUEST_STATUS.SUCCESS,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MovieAdd__WEBPACK_IMPORTED_MODULE_7__.default, {
        ratingValue: ratingValue,
        insertRecord: insertRecord
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
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
            updateRecord: updateRecord,
            insertRecord: insertRecord,
            deleteRecord: deleteRecord
          }, movie.id, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 15
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
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

/***/ "./src/contexts/MovieContext.js":
/*!**************************************!*\
  !*** ./src/contexts/MovieContext.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MovieContext": function() { return /* binding */ MovieContext; },
/* harmony export */   "MovieProvider": function() { return /* binding */ MovieProvider; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\hp\\Desktop\\react\\movie_recommend\\src\\contexts\\MovieContext.js";

const MovieContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();

function MovieProvider({
  children,
  movie,
  updateRecord,
  insertRecord,
  deleteRecord
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MovieContext.Provider, {
    value: {
      movie,
      updateRecord,
      insertRecord,
      deleteRecord
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, this);
}



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

/***/ "./src/hooks/useRequestRest.js":
/*!*************************************!*\
  !*** ./src/hooks/useRequestRest.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "REQUEST_STATUS": function() { return /* binding */ REQUEST_STATUS; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const REQUEST_STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  FAILURE: "failure"
};
const restUrl = "api/movies";

function useRequestRest() {
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
        const result = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(restUrl);
        setRequestStatus(REQUEST_STATUS.SUCCESS);
        setData(result.data);
      } catch (e) {
        setRequestStatus(REQUEST_STATUS.FAILURE);
        setError(e);
      }
    }

    delayFunc();
  }, []);

  function updateRecord(record, doneCallback) {
    const originalRecords = [...data];
    const newRecords = data.map(function (rec) {
      return rec.id === record.id ? record : rec;
    });

    async function delayFunction() {
      try {
        setData(newRecords);
        await axios__WEBPACK_IMPORTED_MODULE_1___default().put(`${restUrl}/${record.id}`, record);

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

  function deleteRecord(record, doneCallback) {
    const originalRecords = [...data];
    const newRecords = data.filter(function (rec) {
      return rec.id != record.id;
    });

    async function delayFunction() {
      try {
        setData(newRecords);
        await axios__WEBPACK_IMPORTED_MODULE_1___default().delete(`${restUrl}/${record.id}`, record);

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

  function insertRecord(record, doneCallback) {
    const originalRecords = [...data];
    const newRecords = [record, ...data];

    async function delayFunction() {
      try {
        setData(newRecords);
        await axios__WEBPACK_IMPORTED_MODULE_1___default().post(`${restUrl}/99999`, record);

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
    updateRecord,
    insertRecord,
    deleteRecord
  };
}

/* harmony default export */ __webpack_exports__["default"] = (useRequestRest);

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

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3ZpZV9yZWNvbW1lbmQvLi9Nb3ZpZURhdGEuanMiLCJ3ZWJwYWNrOi8vbW92aWVfcmVjb21tZW5kLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbW92aWVfcmVjb21tZW5kLy4vc3JjL2NvbXBvbmVudHMvQXBwLmpzIiwid2VicGFjazovL21vdmllX3JlY29tbWVuZC8uL3NyYy9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9tb3ZpZV9yZWNvbW1lbmQvLi9zcmMvY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vbW92aWVfcmVjb21tZW5kLy4vc3JjL2NvbXBvbmVudHMvTW92aWUuanMiLCJ3ZWJwYWNrOi8vbW92aWVfcmVjb21tZW5kLy4vc3JjL2NvbXBvbmVudHMvTW92aWVBZGQuanMiLCJ3ZWJwYWNrOi8vbW92aWVfcmVjb21tZW5kLy4vc3JjL2NvbXBvbmVudHMvTW92aWVEZWxldGUuanMiLCJ3ZWJwYWNrOi8vbW92aWVfcmVjb21tZW5kLy4vc3JjL2NvbXBvbmVudHMvTW92aWVzLmpzIiwid2VicGFjazovL21vdmllX3JlY29tbWVuZC8uL3NyYy9jb21wb25lbnRzL01vdmllc0xpc3QuanMiLCJ3ZWJwYWNrOi8vbW92aWVfcmVjb21tZW5kLy4vc3JjL2NvbXBvbmVudHMvTW92aWVzVG9vbGJhci5qcyIsIndlYnBhY2s6Ly9tb3ZpZV9yZWNvbW1lbmQvLi9zcmMvY29udGV4dHMvTW92aWVDb250ZXh0LmpzIiwid2VicGFjazovL21vdmllX3JlY29tbWVuZC8uL3NyYy9jb250ZXh0cy9Nb3ZpZUZpbHRlckNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vbW92aWVfcmVjb21tZW5kLy4vc3JjL2NvbnRleHRzL1RoZW1lQ29udGV4dC5qcyIsIndlYnBhY2s6Ly9tb3ZpZV9yZWNvbW1lbmQvLi9zcmMvaG9va3MvdXNlTW92aWVGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vbW92aWVfcmVjb21tZW5kLy4vc3JjL2hvb2tzL3VzZVJlcXVlc3RSZXN0LmpzIiwid2VicGFjazovL21vdmllX3JlY29tbWVuZC8uL3NyYy9ob29rcy91c2VUaGVtZS5qcyIsIndlYnBhY2s6Ly9tb3ZpZV9yZWNvbW1lbmQvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL21vdmllX3JlY29tbWVuZC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbW92aWVfcmVjb21tZW5kL2V4dGVybmFsIFwicmVhY3QtcGxhY2Vob2xkZXJcIiIsIndlYnBhY2s6Ly9tb3ZpZV9yZWNvbW1lbmQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJkYXRhIiwiaWQiLCJ0aXRsZSIsInllYXIiLCJyZWxlYXNlZCIsInJ1bnRpbWUiLCJzdW1tYXJ5IiwibGluayIsImZhdm9yaXRlIiwicmF0aW5ncyIsIkluZGV4UGFnZSIsIkFwcCIsIkhlYWRlciIsInRoZW1lIiwidXNlQ29udGV4dCIsIlRoZW1lQ29udGV4dCIsIkxheW91dCIsInN0YXJ0aW5nVGhlbWUiLCJjaGlsZHJlbiIsIkxheW91dE5vVGhlbWVQcm92aWRlciIsIlJhdGluZyIsIlNvdXJjZSIsIlZhbHVlIiwiUmF0aW5ncyIsInJhdGluZ1ZhbHVlIiwiTW92aWVGaWx0ZXJDb250ZXh0IiwibW92aWUiLCJNb3ZpZUNvbnRleHQiLCJmaWx0ZXIiLCJyYXRpbmciLCJtYXAiLCJJbWFnZVdpdGhGYWxsYmFjayIsInNyYyIsInByb3BzIiwiZXJyb3IiLCJzZXRFcnJvciIsInVzZVN0YXRlIiwiaW1nU3JjIiwic2V0SW1nU3JjIiwib25FcnJvciIsIk1vdmllSW1hZ2UiLCJNb3ZpZUZhdm9yaXRlIiwidXBkYXRlUmVjb3JkIiwiaW5UcmFuc2l0aW9uIiwic2V0SW5UcmFuc2l0aW9uIiwiZG9uZUNhbGxiYWNrIiwiY29uc29sZSIsImxvZyIsIkRhdGUiLCJnZXRNaWxsaXNlY29uZHMiLCJNb3ZpZURlbW9ncmFwaGljcyIsIk1vdmllIiwiaW5zZXJ0UmVjb3JkIiwiZGVsZXRlUmVjb3JkIiwic2hvd1JhdGluZ3MiLCJNb3ZpZUFkZCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRpdGxlTmV3Iiwid2luZG93IiwicHJvbXB0IiwiTW92aWVEZWxldGUiLCJjb25maXJtIiwiTW92aWVzIiwiTW92aWVzTGlzdCIsIm1vdmllc0RhdGEiLCJyZXF1ZXN0U3RhdHVzIiwidXNlUmVxdWVzdFJlc3QiLCJzZWFyY2hRdWVyeSIsIlJFUVVFU1RfU1RBVFVTIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImZpbmQiLCJNb3ZpZXNUb29sYmFyIiwic2V0VGhlbWUiLCJzZXRTaG93UmF0aW5ncyIsInNldFJhdGluZ1ZhbHVlIiwic2V0U2VhcmNoUXVlcnkiLCJSQVRJTkdfVkFMVUVTIiwiZXZlbnQiLCJ0YXJnZXQiLCJjaGVja2VkIiwidmFsdWUiLCJjdXJyZW50VGFyZ2V0IiwicmF0aW5ndiIsImNyZWF0ZUNvbnRleHQiLCJNb3ZpZVByb3ZpZGVyIiwiTW92aWVGaWx0ZXJQcm92aWRlciIsInN0YXJ0aW5nU2hvd1JhdGluZ3MiLCJzdGFydGluZ1JhdGluZ1ZhbHVlIiwidXNlTW92aWVGaWx0ZXIiLCJUaGVtZVByb3ZpZGVyIiwidXNlVGhlbWUiLCJMT0FESU5HIiwiU1VDQ0VTUyIsIkZBSUxVUkUiLCJyZXN0VXJsIiwic2V0RGF0YSIsInNldFJlcXVlc3RTdGF0dXMiLCJkZWxheSIsIm1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwidXNlRWZmZWN0IiwiZGVsYXlGdW5jIiwicmVzdWx0IiwiYXhpb3MiLCJyZWNvcmQiLCJvcmlnaW5hbFJlY29yZHMiLCJuZXdSZWNvcmRzIiwicmVjIiwiZGVsYXlGdW5jdGlvbiIsInZhbGlkYXRlVGhlbWUiLCJ0aGVtZVZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLE1BQU1BLElBQUksR0FBRyxDQUNsQjtBQUNFQyxJQUFFLEVBQUUsR0FETjtBQUVFQyxPQUFLLEVBQUUsVUFGVDtBQUdFQyxNQUFJLEVBQUUs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VUFBVSxLQUFLLE1BQWxCLEVBQXlCO0FBQ3JCeEMsY0FBUSxDQUFDLE1BQUQsQ0FBUjtBQUNILEtBRkQsTUFHSTtBQUNBQSxjQUFRLENBQUMsT0FBRCxDQUFSO0FBQ0g7QUFDSjs7QUFFRCxTQUFNO0FBQ0Y3RCxTQURFO0FBRUY2RCxZQUFRLEVBQUV1QztBQUZSLEdBQU47QUFJSDs7QUFDRCwrREFBZXJCLFFBQWYsRTs7Ozs7Ozs7Ozs7QUNwQkEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZGF0YSA9IFtcbiAge1xuICAgIGlkOiBcIjFcIixcbiAgICB0aXRsZTogXCJVbmRlcmRvZ1wiLFxuICAgIHllYXI6IFwiMjAwN1wiLFxuICAgIHJlbGVhc2VkOiBcIjAzIEF1ZyAyMDA3XCIsXG4gICAgcnVudGltZTogXCI4NCBtaW5cIixcbiAgICBzdW1tYXJ5OlwiQW1lcmljYW4gc3VwZXJoZXJvIGNvbWVkeSBmaWxtIGJhc2VkIG9uIFcuIFdhdHRzIEJpZ2dlcnMsIENoZXQgU3RvdmVyLCBhbmQgSm9lIEhhcnJpc+KAmCAxOTYwcyBhbmltYXRlZCB0ZWxldmlzaW9uIHNlcmllcyBvZiB0aGUgc2FtZSBuYW1lLCB3aGljaCBpcyBhIHNwb29mIG9uIHRoZSBEQyBDb21pY3Mgc3VwZXJoZXJvIFN1cGVybWFuXCIsXG4gICAgbGluazpcbiAgICAgIFwiaHR0cHM6Ly90aGVmbGl4ZXIudHYvbW92aWUvd2F0Y2gtdW5kZXJkb2ctZnVsbC0xMjAwMlwiLFxuICAgIGZhdm9yaXRlOiB0cnVlLFxuICAgIHJhdGluZ3M6IFtcbiAgICAgIHtcbiAgICAgICAgXCJTb3VyY2VcIjogXCJJbnRlcm5ldCBNb3ZpZSBEYXRhYmFzZVwiLFxuICAgICAgICBcIlZhbHVlXCI6IFwiMTBcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJTb3VyY2VcIjogXCJSb3R0ZW4gVG9tYXRvZXNcIixcbiAgICAgICAgXCJWYWx1ZVwiOiBcIjdcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJTb3VyY2VcIjogXCJNZXRhY3JpdGljXCIsXG4gICAgICAgIFwiVmFsdWVcIjogXCI4XCJcbiAgICAgIH1cbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiMlwiLFxuICAgIHRpdGxlOiBcIkhvbmVzdCBUaGllZlwiLFxuICAgIHllYXI6IFwiMjAyMFwiLFxuICAgIHJlbGVhc2VkOiBcIjE2IE9jdCAyMDIwXCIsXG4gICAgcnVudGltZTogXCI5OSBtaW5cIixcbiAgICBzdW1tYXJ5OlwiSG9waW5nIHRvIGN1dCBhIGRlYWwsIGEgcHJvZmVzc2lvbmFsIGJhbmsgcm9iYmVyIGFncmVlcyB0byByZXR1cm4gYWxsIHRoZSBtb25leSBoZSBzdG9sZSBpbiBleGNoYW5nZSBmb3IgYSByZWR1Y2VkIHNlbnRlbmNlLiBXaGVuIHR3byBGQkkgYWdlbnRzIHNldCBoaW0gdXAgZm9yIG11cmRlciwgaGUgaXMgZm9yY2VkIHRvIGdvIG9uIHRoZSBydW4gdG8gY2xlYXIgaGlzIG5hbWUgYW5kIGJyaW5nIHRoZW0gdG8ganVzdGljZVwiLFxuICAgIGxpbms6XG4gICAgICAgIFwiaHR0cHM6Ly90aGVmbGl4ZXIudHYvbW92aWUvd2F0Y2gtaG9uZXN0LXRoaWVmLWZ1bGwtNjM3MThcIixcbiAgICByYXRpbmdzOiBbXG4gICAgICB7XG4gICAgICAgIFwiU291cmNlXCI6IFwiSW50ZXJuZXQgTW92aWUgRGF0YWJhc2VcIixcbiAgICAgICAgXCJWYWx1ZVwiOiBcIjlcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJTb3VyY2VcIjogXCJNZXRhY3JpdGljXCIsXG4gICAgICAgIFwiVmFsdWVcIjogXCIxMFwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgaWQ6IFwiM1wiLFxuICAgIHRpdGxlOiBcIkRlYWRwb29sXCIsXG4gICAgeWVhcjogXCIyMDE2XCIsXG4gICAgcmVsZWFzZWQ6IFwiMTIgRmViIDIwMTZcIixcbiAgICBydW50aW1lOiBcIjEwOCBtaW5cIixcbiAgICBzdW1tYXJ5OlwiRGVhZHBvb2wgaXMgYW4gQW1lcmljYW4gc3VwZXJoZXJvIGZpbG0gYmFzZWQgb24gdGhlIE1hcnZlbCBDb21pY3MgY2hhcmFjdGVyIG9mIHRoZSBzYW1lIG5hbWUuIERpc3RyaWJ1dGVkIGJ5IDIwdGggQ2VudHVyeSBGb3gsIGl0IGlzIGEgc3Bpbi1vZmYgaW4gdGhlIFgtTWVuIGZpbG0gc2VyaWVzIGFuZCB0aGUgZWlnaHRoIGluc3RhbGxtZW50IG92ZXJhbGwuXCIsXG4gICAgbGluazpcbiAgICAgIFwiaHR0cHM6Ly90aGVmbGl4ZXIudHYvbW92aWUvd2F0Y2gtZGVhZHBvb2wtZnVsbC0xOTY5NFwiLFxuICAgIGZhdm9yaXRlOiB0cnVlLFxuICAgIHJhdGluZ3M6IFtcbiAgICAgIHtcbiAgICAgICAgXCJTb3VyY2VcIjogXCJJbnRlcm5ldCBNb3ZpZSBEYXRhYmFzZVwiLFxuICAgICAgICBcIlZhbHVlXCI6IFwiNVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIlNvdXJjZVwiOiBcIlJvdHRlbiBUb21hdG9lc1wiLFxuICAgICAgICBcIlZhbHVlXCI6IFwiMTBcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJTb3VyY2VcIjogXCJNZXRhY3JpdGljXCIsXG4gICAgICAgIFwiVmFsdWVcIjogXCI5XCJcbiAgICAgIH1cbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiNFwiLFxuICAgIHRpdGxlOiBcIkJydWNlIEFsbWlnaHR5XCIsXG4gICAgeWVhcjogXCIyMDAzXCIsXG4gICAgcmVsZWFzZWQ6IFwiMjMgTWF5IDIwMDNcIixcbiAgICBydW50aW1lOiBcIjEwMSBtaW5cIixcbiAgICBzdW1tYXJ5OlwiQnJ1Y2UgQWxtaWdodHkgaXMgYW4gQW1lcmljYW4gZmFudGFzeSBjb21lZHkgZmlsbSBkaXJlY3RlZCBieSBUb20gU2hhZHlhYyBhbmQgd3JpdHRlbiBieSBTdGV2ZSBLb3JlbiwgTWFyayBPJ0tlZWZlIGFuZCBTdGV2ZSBPZWRla2Vyay5cIixcbiAgICBsaW5rOlxuICAgICAgXCJodHRwczovL3RoZWZsaXhlci50di9tb3ZpZS93YXRjaC1icnVjZS1hbG1pZ2h0eS1mdWxsLTE5NTE4XCIsXG4gICAgZmF2b3JpdGU6IHRydWUsXG4gICAgcmF0aW5nczogW1xuICAgICAge1xuICAgICAgICBcIlNvdXJjZVwiOiBcIkludGVybmV0IE1vdmllIERhdGFiYXNlXCIsXG4gICAgICAgIFwiVmFsdWVcIjogXCI2XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiU291cmNlXCI6IFwiUm90dGVuIFRvbWF0b2VzXCIsXG4gICAgICAgIFwiVmFsdWVcIjogXCIxMFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIlNvdXJjZVwiOiBcIk1ldGFjcml0aWNcIixcbiAgICAgICAgXCJWYWx1ZVwiOiBcIjRcIlxuICAgICAgfVxuICAgIF0sXG4gIH0sXG5cbl07XG4iLCJpbXBvcnQgQXBwIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9BcHBcIjtcbmNvbnN0IEluZGV4UGFnZSA9ICgpID0+IHtcbiAgcmV0dXJuIDxBcHAgLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7XG4iLCJpbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xuaW1wb3J0IE1vdmllcyBmcm9tIFwiLi9Nb3ZpZXNcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4vTGF5b3V0XCI7XG5cblxuZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgc3RhcnRpbmdUaGVtZT1cImxpZ2h0XCI+XG4gICAgICA8ZGl2ID5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8TW92aWVzIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IHtUaGVtZUNvbnRleHR9IGZyb20gXCIuLi9jb250ZXh0cy9UaGVtZUNvbnRleHRcIjtcbmltcG9ydCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBIZWFkZXIoKSB7XG5cbiAgY29uc3Qge3RoZW1lfSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFkVDQgcGFkQjRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG1vYmlsZS1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGltZyBhbHQ9XCJTVkNDIEhvbWUgUGFnZVwiIHNyYz1cIi9pbWFnZXMvbG9nby5wbmdcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGVtZSA9PT0gXCJsaWdodFwiID8gXCJcIiA6IFwidGV4dC1pbmZvXCJ9PlxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImhlYWRlci10aXRsZVwiPkdyZWF0ZXN0IE1vdmllcyBvZiBBbGwgVGltZTwvaDQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoZW1lID09PSBcImxpZ2h0XCIgPyBcIlwiIDogXCJ0ZXh0LWluZm9cIn0+XG4gICAgICAgICAgICBIZWxsbyBNci4gU21pdGggJm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5zaWduLW91dDwvYT5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUaGVtZUNvbnRleHQsIFRoZW1lUHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0cy9UaGVtZUNvbnRleHQnO1xyXG5cclxuZnVuY3Rpb24gTGF5b3V0KHtzdGFydGluZ1RoZW1lLCBjaGlsZHJlbn0pe1xyXG4gIHJldHVybihcclxuICAgIDxUaGVtZVByb3ZpZGVyIHN0YXJ0aW5nVGhlbWU9e3N0YXJ0aW5nVGhlbWV9ICA+XHJcbiAgICAgIDxMYXlvdXROb1RoZW1lUHJvdmlkZXI+e2NoaWxkcmVufTwvTGF5b3V0Tm9UaGVtZVByb3ZpZGVyPlxyXG4gICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIExheW91dE5vVGhlbWVQcm92aWRlcih7Y2hpbGRyZW59KXtcclxuXHJcbiAgY29uc3Qge3RoZW1lfSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcclxuICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICB0aGVtZSA9PT0gXCJsaWdodFwiID8gXCJjb250YWluZXItZmx1aWQgbGlnaHRcIiA6IFwiY29udGFpbmVyLWZsdWlkIGRhcmtcIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtNb3ZpZUZpbHRlckNvbnRleHR9IGZyb20gXCIuLy4uL2NvbnRleHRzL01vdmllRmlsdGVyQ29udGV4dFwiO1xyXG5pbXBvcnQgeyBNb3ZpZVByb3ZpZGVyLCBNb3ZpZUNvbnRleHQgfSBmcm9tIFwiLi8uLi9jb250ZXh0cy9Nb3ZpZUNvbnRleHRcIlxyXG5pbXBvcnQgTW92aWVEZWxldGUgZnJvbSBcIi4vTW92aWVEZWxldGVcIlxyXG5cclxuZnVuY3Rpb24gUmF0aW5nKHsgU291cmNlLCBWYWx1ZSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzcGFuIGNsYXNzTmFtZT1cInJhdGluZyB3LTEwMFwiPlxyXG4gICAgICB7U291cmNlfSA8c3Ryb25nPlZhbHVlOiB7VmFsdWV9LzEwPC9zdHJvbmc+XHJcbiAgICA8L3NwYW4+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gUmF0aW5ncygpIHtcclxuICBjb25zdCB7cmF0aW5nVmFsdWV9ID0gdXNlQ29udGV4dChNb3ZpZUZpbHRlckNvbnRleHQpO1xyXG4gIGNvbnN0IHsgbW92aWUgfSA9IHVzZUNvbnRleHQoTW92aWVDb250ZXh0KTsgXHJcbiAgY29uc3QgcmF0aW5ncyA9IG1vdmllLnJhdGluZ3M7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nQm94IGNhcmQgaC0yNTBcIj5cclxuICAgICAge3JhdGluZ3MuZmlsdGVyKGZ1bmN0aW9uKHJhdGluZyl7XHJcbiAgICAgICAgcmV0dXJuIHJhdGluZy5WYWx1ZSA9PT0gcmF0aW5nVmFsdWU7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5tYXAoZnVuY3Rpb24ocmF0aW5nKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZyB3LTEwMFwiIGtleT17cmF0aW5nLmlkfT5cclxuICAgICAgICAgICAgPFJhdGluZyB7Li4ucmF0aW5nfS8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEltYWdlV2l0aEZhbGxiYWNrKHsgc3JjLCAuLi5wcm9wcyB9KSB7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2ltZ1NyYywgc2V0SW1nU3JjXSA9IHVzZVN0YXRlKHNyYyk7XHJcblxyXG4gIGZ1bmN0aW9uIG9uRXJyb3IoKSB7XHJcbiAgICBpZiAoIWVycm9yKSB7XHJcbiAgICAgIHNldEltZ1NyYyhcIi9pbWFnZXMvbW92aWUtOTk5OTkucG5nXCIpO1xyXG4gICAgICBzZXRFcnJvcih0cnVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiA8aW1nIHNyYz17aW1nU3JjfSB7Li4ucHJvcHN9IG9uRXJyb3I9e29uRXJyb3J9IC8+O1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gTW92aWVJbWFnZSgpIHtcclxuICBjb25zdCB7bW92aWU6IHtpZCwgdGl0bGV9fT0gdXNlQ29udGV4dChNb3ZpZUNvbnRleHQpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdmllLWltZyBkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgaC0zMDBcIj5cclxuICAgICAgPEltYWdlV2l0aEZhbGxiYWNrXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbi1maXRcIlxyXG4gICAgICAgIHNyYz17YC9pbWFnZXMvbW92aWUtJHtpZH0ucG5nYH1cclxuICAgICAgICB3aWR0aD1cIjMwMFwiXHJcbiAgICAgICAgYWx0PXtgJHt0aXRsZX1gfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gTW92aWVGYXZvcml0ZSgpIHtcclxuICBjb25zdCB7bW92aWUsIHVwZGF0ZVJlY29yZH0gPSB1c2VDb250ZXh0KE1vdmllQ29udGV4dCk7XHJcbiAgY29uc3QgW2luVHJhbnNpdGlvbiwgc2V0SW5UcmFuc2l0aW9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBmdW5jdGlvbiBkb25lQ2FsbGJhY2soKSB7XHJcbiAgICBzZXRJblRyYW5zaXRpb24oZmFsc2UpO1xyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgIGBJbiBNb3ZpZUZhdm9yaXRlOmRvbmVDYWxsYmFjayAgICAke25ldyBEYXRlKCkuZ2V0TWlsbGlzZWNvbmRzKCl9YFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbiBwYWRCMVwiPlxyXG4gICAgICA8c3BhblxyXG4gICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHNldEluVHJhbnNpdGlvbih0cnVlKTtcclxuICAgICAgICAgdXBkYXRlUmVjb3JkKFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAuLi5tb3ZpZSwgZmF2b3JpdGU6IW1vdmllLmZhdm9yaXRlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGRvbmVDYWxsYmFja1xyXG4gICAgICAgICApXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxpXHJcbiAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICBtb3ZpZS5mYXZvcml0ZSA9PT0gdHJ1ZSA/IFwiZmEgZmEtc3RhciBvcmFuZ2VcIiA6IFwiZmEgZmEtc3Rhci1vIG9yYW5nZVwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgLz57XCIgXCJ9XHJcbiAgICAgICAgRmF2b3JpdGV7XCIgXCJ9XHJcbiAgICAgICAge2luVHJhbnNpdGlvbiA/IChcclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhcyBmYS1jaXJjbGUtbm90Y2ggZmEtc3BpblwiPjwvc3Bhbj5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gTW92aWVEZW1vZ3JhcGhpY3MoKSB7XHJcbiAgY29uc3QgeyBtb3ZpZSB9ID0gdXNlQ29udGV4dCggTW92aWVDb250ZXh0ICk7XHJcbiAgY29uc3Qge3RpdGxlLCByZWxlYXNlZCwgcnVudGltZSwgc3VtbWFyeSwgbGluaywgZmF2b3JpdGV9ID0gbW92aWU7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWUtaW5mb1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtYi0zXCI+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtdHJ1bmNhdGUgdy0yMDBcIj5cclxuICAgICAgICAgIHt0aXRsZX0gIDxici8+IFxyXG4gICAgICAgIDwvaDM+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TW92aWVGYXZvcml0ZSAgLz5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLWxpbmtcIj4ge3JlbGVhc2VkfSAgPGJyLz4ge3J1bnRpbWV9PGJyLz48YnIvPjxhIGhyZWY9e2xpbmt9IHRhcmdldD1cIl9ibGFua1wiPldhdGNoIG5vdyBvbiBUSEVGTElYRVJcIjwvYT48L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YnIvPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtZGVzY3JpcHRpb25cIj57c3VtbWFyeX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YnIvPlxyXG4gICAgICBcclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE1vdmllKHsgbW92aWUsIHVwZGF0ZVJlY29yZCwgaW5zZXJ0UmVjb3JkLCBkZWxldGVSZWNvcmQgfSkge1xyXG4gIGNvbnN0IHtzaG93UmF0aW5nc30gPSB1c2VDb250ZXh0KE1vdmllRmlsdGVyQ29udGV4dCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxNb3ZpZVByb3ZpZGVyIG1vdmllPXttb3ZpZX0gdXBkYXRlUmVjb3JkPXt1cGRhdGVSZWNvcmR9IGluc2VydFJlY29yZD17aW5zZXJ0UmVjb3JkfSBkZWxldGVSZWNvcmQ9e2RlbGV0ZVJlY29yZH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNCBjb2wtc20tMTIgY29sLXhzLTEyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtaGVpZ2h0IHAtNCBtdC00XCI+XHJcbiAgICAgICAgPE1vdmllSW1hZ2UgIC8+XHJcbiAgICAgICAgICA8TW92aWVEZW1vZ3JhcGhpY3MgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge3Nob3dSYXRpbmdzID09PSB0cnVlID8gPFJhdGluZ3MgLz4gOiBudWxsfVxyXG4gICAgICAgIDxNb3ZpZURlbGV0ZS8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Nb3ZpZVByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vdmllO1xyXG4iLCJmdW5jdGlvbiBNb3ZpZUFkZCAoeyByYXRpbmdWYWx1ZSwgaW5zZXJ0UmVjb3JkfSl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJhZGRTZXNcIj5cclxuICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0aXRsZU5ldyA9IHdpbmRvdy5wcm9tcHQoXCJFbnRlciB0aXRsZTpcIik7XHJcbiAgICAgICAgICAgICAgICBpbnNlcnRSZWNvcmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcIjk5OTk5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRpdGxlTmV3LFxyXG4gICAgICAgICAgICAgICAgICAgIHN1bW1hcnk6IFwiU3VtbWFyeSBub3QgZW50ZXJlZCB5ZXQhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcmF0aW5nczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgU291cmNlOlwiQWRtaW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWU6YCR7cmF0aW5nVmFsdWV9YCxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICtcclxuICAgICAgICAgICAgPC9pPlxyXG4gICAgICAgIDwvYT5cclxuICAgICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW92aWVBZGQ7IiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBNb3ZpZUNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvTW92aWVDb250ZXh0XCI7XHJcblxyXG5mdW5jdGlvbiBNb3ZpZURlbGV0ZSgpe1xyXG4gICAgY29uc3QgeyBtb3ZpZSwgZGVsZXRlUmVjb3JkIH0gPSB1c2VDb250ZXh0KE1vdmllQ29udGV4dCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2Vzc2lvbiB3LTEwMFwiPlxyXG4gICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwicmVtU2VzXCI+XHJcbiAgICAgICAgICA8aVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuY29uZmlybShcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBtb3ZpZT9cIilcclxuICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZVJlY29yZChtb3ZpZSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICAtXHJcbiAgICAgICAgICA8L2k+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBhZEwyXCI+RGVsZXRlIE1vdmllPC9zcGFuPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3ZpZURlbGV0ZTsiLCJpbXBvcnQgTW92aWVzVG9vbGJhciBmcm9tIFwiLi9Nb3ZpZXNUb29sYmFyXCI7XHJcbmltcG9ydCBNb3ZpZXNMaXN0IGZyb20gXCIuL01vdmllc0xpc3RcIjtcclxuaW1wb3J0IHtNb3ZpZUZpbHRlclByb3ZpZGVyfSBmcm9tIFwiLi4vY29udGV4dHMvTW92aWVGaWx0ZXJDb250ZXh0XCI7XHJcblxyXG5mdW5jdGlvbiBNb3ZpZXMoKSB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TW92aWVGaWx0ZXJQcm92aWRlciBzdGFydGluZ1Nob3dSYXRpbmdzPXtmYWxzZX0+XHJcbiAgICAgIDxNb3ZpZXNUb29sYmFyIC8+XHJcbiAgICAgIDxNb3ZpZXNMaXN0IC8+XHJcbiAgICA8L01vdmllRmlsdGVyUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW92aWVzO1xyXG4iLCJpbXBvcnQgTW92aWUgZnJvbSBcIi4vTW92aWVcIjtcclxuaW1wb3J0IFJlYWN0UGxhY2VIb2xkZXIgZnJvbSBcInJlYWN0LXBsYWNlaG9sZGVyXCI7XHJcbmltcG9ydCB1c2VSZXF1ZXN0UmVzdCwgeyBSRVFVRVNUX1NUQVRVUyB9IGZyb20gXCIuLi9ob29rcy91c2VSZXF1ZXN0UmVzdFwiO1xyXG5pbXBvcnQgeyBkYXRhIH0gZnJvbSBcIi4uLy4uL01vdmllRGF0YVwiO1xyXG5pbXBvcnQge3VzZUNvbnRleHR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge01vdmllRmlsdGVyQ29udGV4dH0gZnJvbSBcIi4vLi4vY29udGV4dHMvTW92aWVGaWx0ZXJDb250ZXh0XCI7XHJcbmltcG9ydCBNb3ZpZUFkZCBmcm9tIFwiLi9Nb3ZpZUFkZFwiO1xyXG5cclxuZnVuY3Rpb24gTW92aWVzTGlzdCgpIHtcclxuICBjb25zdCB7XHJcbiAgICBkYXRhOiBtb3ZpZXNEYXRhLFxyXG4gICAgcmVxdWVzdFN0YXR1cyxcclxuICAgIGVycm9yLFxyXG4gICAgdXBkYXRlUmVjb3JkLFxyXG4gICAgaW5zZXJ0UmVjb3JkLFxyXG4gICAgZGVsZXRlUmVjb3JkXHJcbiAgfSA9IHVzZVJlcXVlc3RSZXN0KCk7XHJcblxyXG4gIGNvbnN0IHsgc2VhcmNoUXVlcnksIHJhdGluZ1ZhbHVlIH0gPSB1c2VDb250ZXh0KE1vdmllRmlsdGVyQ29udGV4dCk7XHJcblxyXG4gIGlmIChyZXF1ZXN0U3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5GQUlMVVJFKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+XHJcbiAgICAgICAgRVJST1I6IDxiPmxvYWRpbmcgTW92aWUgRGF0YSBGYWlsZWQge2Vycm9yfTwvYj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtb3ZpZXMtbGlzdFwiPlxyXG4gICAgICA8UmVhY3RQbGFjZUhvbGRlclxyXG4gICAgICAgIHR5cGU9XCJtZWRpYVwiXHJcbiAgICAgICAgcm93cz17MjB9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibW92aWVzbGlzdC1wbGFjZWhvbGRlclwiXHJcbiAgICAgICAgcmVhZHk9e3JlcXVlc3RTdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLlNVQ0NFU1N9XHJcbiAgICAgID5cclxuICAgICAgICA8TW92aWVBZGQgcmF0aW5nVmFsdWU9e3JhdGluZ1ZhbHVlfSBpbnNlcnRSZWNvcmQ9e2luc2VydFJlY29yZH0vPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICB7bW92aWVzRGF0YVxyXG4gICAgICAgICAgLmZpbHRlcihmdW5jdGlvbihtb3ZpZSl7XHJcbiAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICBtb3ZpZS50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24obW92aWUpe1xyXG4gICAgICAgICAgICByZXR1cm4gbW92aWUucmF0aW5ncy5maW5kKChyYXRpbmcpPT57XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHJhdGluZy5WYWx1ZSA9PT0gcmF0aW5nVmFsdWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLm1hcChmdW5jdGlvbiAobW92aWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8TW92aWVcclxuICAgICAgICAgICAgICAgIGtleT17bW92aWUuaWR9XHJcbiAgICAgICAgICAgICAgICBtb3ZpZT17bW92aWV9XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVSZWNvcmQ9e3VwZGF0ZVJlY29yZH1cclxuICAgICAgICAgICAgICAgIGluc2VydFJlY29yZD17aW5zZXJ0UmVjb3JkfVxyXG4gICAgICAgICAgICAgICAgZGVsZXRlUmVjb3JkPXtkZWxldGVSZWNvcmR9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1JlYWN0UGxhY2VIb2xkZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3ZpZXNMaXN0O1xyXG4iLCJpbXBvcnQge1RoZW1lQ29udGV4dH0gZnJvbSBcIi4uL2NvbnRleHRzL1RoZW1lQ29udGV4dFwiO1xyXG5pbXBvcnQge01vdmllRmlsdGVyQ29udGV4dH0gZnJvbSBcIi4uL2NvbnRleHRzL01vdmllRmlsdGVyQ29udGV4dFwiO1xyXG5pbXBvcnQge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIE1vdmllc1Rvb2xiYXIoKSB7XHJcblxyXG4gIGNvbnN0IHt0aGVtZSwgc2V0VGhlbWV9ID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xyXG4gIGNvbnN0IHtzaG93UmF0aW5ncywgc2V0U2hvd1JhdGluZ3MsIHJhdGluZ1ZhbHVlLCBzZXRSYXRpbmdWYWx1ZSwgc2V0U2VhcmNoUXVlcnksIFJBVElOR19WQUxVRVN9ID0gdXNlQ29udGV4dChNb3ZpZUZpbHRlckNvbnRleHQpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidG9vbGJhciBkYXJrLXRoZW1lLWhlYWRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0b29scm93IGQtZmxleCBmbGV4LWNvbHVtbiBmbGV4LWxnLXJvd1wiPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGZsZXgtbWQtcm93XCI+XHJcbiAgICAgICAgICAgICAgPGI+U2hvdyBSYXRpbmdzJm5ic3A7Jm5ic3A7PC9iPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmYXZcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXtzaG93UmF0aW5nc31cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFNob3dSYXRpbmdzKGV2ZW50LnRhcmdldC5jaGVja2VkKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzd2l0Y2hcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBmbGV4LW1kLXJvdyBtbC1zbS01IG1sLTBcIj5cclxuICAgICAgICAgICAgICA8c3Ryb25nPlRoZW1lPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCB0aGVtZVwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGVtZX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRoZW1lKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsaWdodFwiPkxpZ2h0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkYXJrXCI+RGFyazwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VhcmNoUXVlcnkoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgdHlwZT1cImJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc2VhcmNoXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGZsZXgtbWQtcm93XCI+XHJcbiAgICAgICAgICAgICAgPHN0cm9uZz5SYXRpbmcgVmFsdWU8L3N0cm9uZz5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZHJvcG1lbnVcIj5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3JhdGluZ1ZhbHVlfSBcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoe2N1cnJlbnRUYXJnZXR9KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRSYXRpbmdWYWx1ZShjdXJyZW50VGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7UkFUSU5HX1ZBTFVFUy5tYXAoZnVuY3Rpb24ocmF0aW5ndil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17cmF0aW5ndn0ga2V5PXtyYXRpbmd2fT57cmF0aW5ndn08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3ZpZXNUb29sYmFyO1xyXG4iLCJpbXBvcnQge2NyZWF0ZUNvbnRleHR9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgTW92aWVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZnVuY3Rpb24gTW92aWVQcm92aWRlcih7Y2hpbGRyZW4sIG1vdmllLCB1cGRhdGVSZWNvcmQsIGluc2VydFJlY29yZCwgZGVsZXRlUmVjb3JkfSl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPE1vdmllQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e21vdmllLCB1cGRhdGVSZWNvcmQsIGluc2VydFJlY29yZCwgZGVsZXRlUmVjb3JkfX0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L01vdmllQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IE1vdmllQ29udGV4dCwgTW92aWVQcm92aWRlciB9OyIsImltcG9ydCBSZWFjdCx7Y3JlYXRlQ29udGV4dH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB1c2VNb3ZpZUZpbHRlciBmcm9tIFwiLi4vaG9va3MvdXNlTW92aWVGaWx0ZXJcIjtcclxuXHJcbmNvbnN0IE1vdmllRmlsdGVyQ29udGV4dD0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZnVuY3Rpb24gTW92aWVGaWx0ZXJQcm92aWRlciAoe2NoaWxkcmVuLCBzdGFydGluZ1Nob3dSYXRpbmdzID0gZmFsc2UsIHN0YXJ0aW5nUmF0aW5nVmFsdWU9XCIxMFwifSl7XHJcbiAgICBjb25zdCB7c2hvd1JhdGluZ3MsIHNldFNob3dSYXRpbmdzLCBcclxuICAgICAgICByYXRpbmdWYWx1ZSwgc2V0UmF0aW5nVmFsdWUsIFxyXG4gICAgICAgIHNlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeSwgXHJcbiAgICAgICAgUkFUSU5HX1ZBTFVFU30gPSB1c2VNb3ZpZUZpbHRlcihzdGFydGluZ1Nob3dSYXRpbmdzLCBzdGFydGluZ1JhdGluZ1ZhbHVlKTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPE1vdmllRmlsdGVyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e3Nob3dSYXRpbmdzLCBzZXRTaG93UmF0aW5ncywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXRpbmdWYWx1ZSwgc2V0UmF0aW5nVmFsdWUsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJBVElOR19WQUxVRVN9fT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvTW92aWVGaWx0ZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKTtcclxufVxyXG5leHBvcnQge01vdmllRmlsdGVyQ29udGV4dCwgTW92aWVGaWx0ZXJQcm92aWRlcn0iLCJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdXNlVGhlbWUgZnJvbSBcIi4uL2hvb2tzL3VzZVRoZW1lXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVGhlbWVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZnVuY3Rpb24gVGhlbWVQcm92aWRlcih7IGNoaWxkcmVuLCBzdGFydGluZ1RoZW1lIH0pIHtcclxuICBjb25zdCB7dGhlbWUsIHNldFRoZW1lfSA9IHVzZVRoZW1lKHN0YXJ0aW5nVGhlbWUpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFRoZW1lQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBzZXRUaGVtZSwgdGhlbWUgfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvVGhlbWVDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IFRoZW1lUHJvdmlkZXIgfTtcclxuIiwiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiB1c2VNb3ZpZUZpbHRlcihzdGFydGluZ1Nob3dSYXRpbmdzLCBzdGFydGluZ1JhdGluZ1ZhbHVlKXtcclxuICAgIGNvbnN0IFtzaG93UmF0aW5ncywgc2V0U2hvd1JhdGluZ3NdID0gdXNlU3RhdGUoc3RhcnRpbmdTaG93UmF0aW5ncyk7XHJcbiAgICBjb25zdCBbcmF0aW5nVmFsdWUsIHNldFJhdGluZ1ZhbHVlXSA9IHVzZVN0YXRlKHN0YXJ0aW5nUmF0aW5nVmFsdWUpO1xyXG4gICAgY29uc3QgWyBzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgY29uc3QgUkFUSU5HX1ZBTFVFUz1bXHJcbiAgICAgICAgXCIxXCIsXCIyXCIsXCIzXCIsXCI0XCIsXCI1XCIsXCI2XCIsXCI3XCIsXCI4XCIsXCI5XCIsXCIxMFwiXHJcbiAgICBdO1xyXG5cclxuXHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgc2hvd1JhdGluZ3MsXHJcbiAgICAgICAgc2V0U2hvd1JhdGluZ3MsXHJcbiAgICAgICAgcmF0aW5nVmFsdWUsXHJcbiAgICAgICAgc2V0UmF0aW5nVmFsdWUsXHJcbiAgICAgICAgc2VhcmNoUXVlcnksXHJcbiAgICAgICAgc2V0U2VhcmNoUXVlcnksXHJcbiAgICAgICAgUkFUSU5HX1ZBTFVFU1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHVzZU1vdmllRmlsdGVyOyIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfU1RBVFVTID0ge1xyXG4gIExPQURJTkc6IFwibG9hZGluZ1wiLFxyXG4gIFNVQ0NFU1M6IFwic3VjY2Vzc1wiLFxyXG4gIEZBSUxVUkU6IFwiZmFpbHVyZVwiLFxyXG59O1xyXG5cclxuY29uc3QgcmVzdFVybCA9IFwiYXBpL21vdmllc1wiO1xyXG5cclxuZnVuY3Rpb24gdXNlUmVxdWVzdFJlc3QoKSB7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtyZXF1ZXN0U3RhdHVzLCBzZXRSZXF1ZXN0U3RhdHVzXSA9IHVzZVN0YXRlKFJFUVVFU1RfU1RBVFVTLkxPQURJTkcpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgZGVsYXkgPSAobXMpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGRlbGF5RnVuYygpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQocmVzdFVybCk7XHJcbiAgICAgICAgc2V0UmVxdWVzdFN0YXR1cyhSRVFVRVNUX1NUQVRVUy5TVUNDRVNTKTtcclxuICAgICAgICBzZXREYXRhKHJlc3VsdC5kYXRhKTtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHNldFJlcXVlc3RTdGF0dXMoUkVRVUVTVF9TVEFUVVMuRkFJTFVSRSk7XHJcbiAgICAgICAgc2V0RXJyb3IoZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGRlbGF5RnVuYygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgZnVuY3Rpb24gdXBkYXRlUmVjb3JkKHJlY29yZCwgZG9uZUNhbGxiYWNrKSB7XHJcbiAgICBjb25zdCBvcmlnaW5hbFJlY29yZHMgPSBbLi4uZGF0YV07XHJcbiAgICBjb25zdCBuZXdSZWNvcmRzID0gZGF0YS5tYXAoZnVuY3Rpb24gKHJlYykge1xyXG4gICAgICByZXR1cm4gcmVjLmlkID09PSByZWNvcmQuaWQgPyByZWNvcmQgOiByZWM7XHJcbiAgICB9KTtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGRlbGF5RnVuY3Rpb24oKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgc2V0RGF0YShuZXdSZWNvcmRzKTtcclxuICAgICAgICBhd2FpdCBheGlvcy5wdXQoYCR7cmVzdFVybH0vJHtyZWNvcmQuaWR9YCwgcmVjb3JkKTtcclxuICAgICAgICBpZiAoZG9uZUNhbGxiYWNrKSB7XHJcbiAgICAgICAgICBkb25lQ2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciB0aHJvd24gaW5zaWRlIGRlbGF5RnVuY3Rpb25cIiwgZXJyb3IpO1xyXG4gICAgICAgIGlmIChkb25lQ2FsbGJhY2spIHtcclxuICAgICAgICAgIGRvbmVDYWxsYmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXREYXRhKG9yaWdpbmFsUmVjb3Jkcyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGRlbGF5RnVuY3Rpb24oKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGRlbGV0ZVJlY29yZChyZWNvcmQsIGRvbmVDYWxsYmFjaykge1xyXG4gICAgY29uc3Qgb3JpZ2luYWxSZWNvcmRzID0gWy4uLmRhdGFdO1xyXG4gICAgY29uc3QgbmV3UmVjb3JkcyA9IGRhdGEuZmlsdGVyKGZ1bmN0aW9uIChyZWMpIHtcclxuICAgICAgcmV0dXJuIHJlYy5pZCAhPSByZWNvcmQuaWQ7XHJcbiAgICB9KTtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGRlbGF5RnVuY3Rpb24oKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgc2V0RGF0YShuZXdSZWNvcmRzKTtcclxuICAgICAgICBhd2FpdCBheGlvcy5kZWxldGUoYCR7cmVzdFVybH0vJHtyZWNvcmQuaWR9YCwgcmVjb3JkKTtcclxuICAgICAgICBpZiAoZG9uZUNhbGxiYWNrKSB7XHJcbiAgICAgICAgICBkb25lQ2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciB0aHJvd24gaW5zaWRlIGRlbGF5RnVuY3Rpb25cIiwgZXJyb3IpO1xyXG4gICAgICAgIGlmIChkb25lQ2FsbGJhY2spIHtcclxuICAgICAgICAgIGRvbmVDYWxsYmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXREYXRhKG9yaWdpbmFsUmVjb3Jkcyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGRlbGF5RnVuY3Rpb24oKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGluc2VydFJlY29yZChyZWNvcmQsIGRvbmVDYWxsYmFjaykge1xyXG4gICAgY29uc3Qgb3JpZ2luYWxSZWNvcmRzID0gWy4uLmRhdGFdO1xyXG4gICAgY29uc3QgbmV3UmVjb3JkcyA9IFtyZWNvcmQsIC4uLmRhdGFdO1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gZGVsYXlGdW5jdGlvbigpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBzZXREYXRhKG5ld1JlY29yZHMpO1xyXG4gICAgICAgIGF3YWl0IGF4aW9zLnBvc3QoYCR7cmVzdFVybH0vOTk5OTlgLCByZWNvcmQpO1xyXG4gICAgICAgIGlmIChkb25lQ2FsbGJhY2spIHtcclxuICAgICAgICAgIGRvbmVDYWxsYmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIHRocm93biBpbnNpZGUgZGVsYXlGdW5jdGlvblwiLCBlcnJvcik7XHJcbiAgICAgICAgaWYgKGRvbmVDYWxsYmFjaykge1xyXG4gICAgICAgICAgZG9uZUNhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldERhdGEob3JpZ2luYWxSZWNvcmRzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZGVsYXlGdW5jdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGRhdGEsXHJcbiAgICByZXF1ZXN0U3RhdHVzLFxyXG4gICAgZXJyb3IsXHJcbiAgICB1cGRhdGVSZWNvcmQsXHJcbiAgICBpbnNlcnRSZWNvcmQsXHJcbiAgICBkZWxldGVSZWNvcmQsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlUmVxdWVzdFJlc3Q7IiwiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiB1c2VUaGVtZShzdGFydGluZ1RoZW1lPVwibGlnaHRcIil7XHJcblxyXG4gICAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPXVzZVN0YXRlKHN0YXJ0aW5nVGhlbWUpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlVGhlbWUodGhlbWVWYWx1ZSl7XHJcbiAgICAgICAgaWYodGhlbWVWYWx1ZSA9PT0gXCJkYXJrXCIpe1xyXG4gICAgICAgICAgICBzZXRUaGVtZShcImRhcmtcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHNldFRoZW1lKFwibGlnaHRcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHRoZW1lLFxyXG4gICAgICAgIHNldFRoZW1lOiB2YWxpZGF0ZVRoZW1lXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgdXNlVGhlbWU7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1wbGFjZWhvbGRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9
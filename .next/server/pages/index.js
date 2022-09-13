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
          children: ["Hello \xA0\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
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
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_2__.ThemeContext); //theme not defined wih 1 function

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

const Movie = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function Movie({
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
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MovieDemographics, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 11
      }, this), showRatings === true ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Ratings, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 35
      }, this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MovieDelete__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 128,
    columnNumber: 7
  }, this);
}, areEqualMovie);

function areEqualMovie(prevProps, nextProps) {
  return prevProps.movie.favorite === nextProps.movie.favorite;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3ZpZV9yZWNvbW1lbmQvLi9Nb3ZpZURhdGEuanMiLCJ3ZWJwYWNrOi8vbW92aWVfcmVjb21tZW5kLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbW92aWVfcmVjb21tZW5kLy4vc3JjL2NvbXBvbmVudHMvQXBwLmpzIiwid2VicGFjazovL21vdmllX3JlY29tbWVuZC8uL3NyYy9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9tb3ZpZV9yZWNvbW1lbmQvLi9zcmMvY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vbW92aWVfcmVjb21tZW5kLy4vc3JjL2NvbXBvbmVudHMvTW92aWUuanMiLCJ3ZWJwYWNrOi8vbW92aWVfcmVjb21tZW5kLy4vc3JjL2NvbXBvbmVudHMvTW92aWVBZGQuanMiLCJ3ZWJwYWNrOi8vbW92aWVfcmVjb21tZW5kLy4vc3JjL2NvbXBvbmVudHMvTW92aWVEZWxldGUuanMiLCJ3ZWJwYWNrOi8vbW92aWVfcmVjb21tZW5kLy4vc3JjL2NvbXBvbmVudHMvTW92aWVzLmpzIiwid2VicGFjazovL21vdmllX3JlY29tbWVuZC8uL3NyYy9jb21wb25lbnRzL01vdmllc0xpc3QuanMiLCJ3ZWJwYWNrOi8vbW92aWVfcmVjb21tZW5kLy4vc3JjL2NvbXBvbmVudHMvTW92aWVzVG9vbGJhci5qcyIsIndlYnBhY2s6Ly9tb3ZpZV9yZWNvbW1lbmQvLi9zcmMvY29udGV4dHMvTW92aWVDb250ZXh0LmpzIiwid2VicGFjazovL21vdmllX3JlY29tbWVuZC8uL3NyYy9jb250ZXh0cy9Nb3ZpZUZpbHRlckNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vbW92aWVfcmVjb21tZW5kLy4vc3JjL2NvbnRleHRzL1RoZW1lQ29udGV4dC5qcyIsIndlYnBhY2s6Ly9tb3ZpZV9yZWNvbW1lbmQvLi9zcmMvaG9va3MvdXNlTW92aWVGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vbW92aWVfcmVjb21tZW5kLy4vc3JjL2hvb2tzL3VzZVJlcXVlc3RSZXN0LmpzIiwid2VicGFjazovL21vdmllX3JlY29tbWVuZC8uL3NyYy9ob29rcy91c2VUaGVtZS5qcyIsIndlYnBhY2s6Ly9tb3ZpZV9yZWNvbW1lbmQvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL21vdmllX3JlY29tbWVuZC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbW92aWVfcmVjb21tZW5kL2V4dGVybmFsIFwicmVhY3QtcGxhY2Vob2xkZXJcIiIsIndlYnBhY2s6Ly9tb3ZpZV9yZWNvbW1lbmQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJkYXRhIiwiaWQiLCJ0aXRsZSIsInllYXIiLCJyZWxlYXNlZCIsInJ1bnRpbWUiLCJzdW1tYXJ5IiwibGluayIsImZhdm9yaXRlIiwicmF0aW5ncyIsIkluZGV4UGFnZSIsIkFwcCIsIkhlYWRlciIsInRoZW1lIiwidXNlQ29udGV4dCIsIlRoZW1lQ29udGV4dCIsIkxheW91dCIsInN0YXJ0aW5nVGhlbWUiLCJjaGlsZHJlbiIsIkxheW91dE5vVGhlbWVQcm92aWRlciIsIlJhdGluZyIsIlNvdXJjZSIsIlZhbHVlIiwiUmF0aW5ncyIsInJhdGluZ1ZhbHVlIiwiTW92aWVGaWx0ZXJDb250ZXh0IiwibW92aWUiLCJNb3ZpZUNvbnRleHQiLCJmaWx0ZXIiLCJyYXRpbmciLCJtYXAiLCJJbWFnZVdpdGhGYWxsYmFjayIsInNyYyIsInByb3BzIiwiZXJyb3IiLCJzZXRFcnJvciIsInVzZVN0YXRlIiwiaW1nU3JjIiwic2V0SW1nU3JjIiwib25FcnJvciIsIk1vdmllSW1hZ2UiLCJNb3ZpZUZhdm9yaXRlIiwidXBkYXRlUmVjb3JkIiwiaW5UcmFuc2l0aW9uIiwic2V0SW5UcmFuc2l0aW9uIiwiZG9uZUNhbGxiYWNrIiwiY29uc29sZSIsImxvZyIsIkRhdGUiLCJnZXRNaWxsaXNlY29uZHMiLCJNb3ZpZURlbW9ncmFwaGljcyIsIk1vdmllIiwibWVtbyIsImluc2VydFJlY29yZCIsImRlbGV0ZVJlY29yZCIsInNob3dSYXRpbmdzIiwiYXJlRXF1YWxNb3ZpZSIsInByZXZQcm9wcyIsIm5leHRQcm9wcyIsIk1vdmllQWRkIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGl0bGVOZXciLCJ3aW5kb3ciLCJwcm9tcHQiLCJNb3ZpZURlbGV0ZSIsImNvbmZpcm0iLCJNb3ZpZXMiLCJNb3ZpZXNMaXN0IiwibW92aWVzRGF0YSIsInJlcXVlc3RTdGF0dXMiLCJ1c2VSZXF1ZXN0UmVzdCIsInNlYXJjaFF1ZXJ5IiwiUkVRVUVTVF9TVEFUVVMiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiZmluZCIsIk1vdmllc1Rvb2xiYXIiLCJzZXRUaGVtZSIsInNldFNob3dSYXRpbmdzIiwic2V0UmF0aW5nVmFsdWUiLCJzZXRTZWFyY2hRdWVyeSIsIlJBVElOR19WQUxVRVMiLCJldmVudCIsInRhcmdldCIsImNoZWNrZWQiLCJ2YWx1ZSIsImN1cnJlbnRUYXJnZXQiLCJyYXRpbmd2IiwiY3JlYXRlQ29udGV4dCIsIk1vdmllUHJvdmlkZXIiLCJNb3ZpZUZpbHRlclByb3ZpZGVyIiwic3RhcnRpbmdTaG93UmF0aW5ncyIsInN0YXJ0aW5nUmF0aW5nVmFsdWUiLCJ1c2VNb3ZpZUZpbHRlciIsIlRoZW1lUHJvdmlkZXIiLCJ1c2VUaGVtZSIsIkxPQURJTkciLCJTVUNDRVNTIiwiRkFJTFVSRSIsInJlc3RVcmwiLCJzZXREYXRhIiwic2V0UmVxdWVzdFN0YXR1cyIsImRlbGF5IiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJ1c2VFZmZlY3QiLCJkZWxheUZ1bmMiLCJyZXN1bHQiLCJheGlvcyIsInJlY29yZCIsIm9yaWdpbmFsUmVjb3JkcyIsIm5ld1JlY29yZHMiLCJyZWMiLCJkZWxheUZ1bmN0aW9uIiwidmFsaWRhdGVUaGVtZSIsInRoZW1lVmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sTUFBTUEsSUFBSSxHQUFHLENBQ2xCO0FBQ0VDLElBQUUs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Z0JBSks7QUFLTFcsZ0JBTEs7QUFNTEM7QUFOSyxHQUFQO0FBUUQ7O0FBRUQsK0RBQWVpQixjQUFmLEU7Ozs7Ozs7Ozs7Ozs7O0FDM0dBOztBQUVBLFNBQVN5QixRQUFULENBQWtCL0UsYUFBYSxHQUFDLE9BQWhDLEVBQXdDO0FBRXBDLFFBQU07QUFBQSxPQUFDSixLQUFEO0FBQUEsT0FBUWlFO0FBQVIsTUFBb0IxQywrQ0FBUSxDQUFDbkIsYUFBRCxDQUFsQzs7QUFFQSxXQUFTb0csYUFBVCxDQUF1QkMsVUFBdkIsRUFBa0M7QUFDOUIsUUFBR0EsVUFBVSxLQUFLLE1BQWxCLEVBQXlCO0FBQ3JCeEMsY0FBUSxDQUFDLE1BQUQsQ0FBUjtBQUNILEtBRkQsTUFHSTtBQUNBQSxjQUFRLENBQUMsT0FBRCxDQUFSO0FBQ0g7QUFDSjs7QUFFRCxTQUFNO0FBQ0ZqRSxTQURFO0FBRUZpRSxZQUFRLEVBQUV1QztBQUZSLEdBQU47QUFJSDs7QUFDRCwrREFBZXJCLFFBQWYsRTs7Ozs7Ozs7Ozs7QUNwQkEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZGF0YSA9IFtcbiAge1xuICAgIGlkOiBcIjFcIixcbiAgICB0aXRsZTogXCJVbmRlcmRvZ1wiLFxuICAgIHllYXI6IFwiMjAwN1wiLFxuICAgIHJlbGVhc2VkOiBcIjAzIEF1ZyAyMDA3XCIsXG4gICAgcnVudGltZTogXCI4NCBtaW5cIixcbiAgICBzdW1tYXJ5OlwiQW1lcmljYW4gc3VwZXJoZXJvIGNvbWVkeSBmaWxtIGJhc2VkIG9uIFcuIFdhdHRzIEJpZ2dlcnMsIENoZXQgU3RvdmVyLCBhbmQgSm9lIEhhcnJpc+KAmCAxOTYwcyBhbmltYXRlZCB0ZWxldmlzaW9uIHNlcmllcyBvZiB0aGUgc2FtZSBuYW1lLCB3aGljaCBpcyBhIHNwb29mIG9uIHRoZSBEQyBDb21pY3Mgc3VwZXJoZXJvIFN1cGVybWFuXCIsXG4gICAgbGluazpcbiAgICAgIFwiaHR0cHM6Ly90aGVmbGl4ZXIudHYvbW92aWUvd2F0Y2gtdW5kZXJkb2ctZnVsbC0xMjAwMlwiLFxuICAgIGZhdm9yaXRlOiB0cnVlLFxuICAgIHJhdGluZ3M6IFtcbiAgICAgIHtcbiAgICAgICAgXCJTb3VyY2VcIjogXCJJbnRlcm5ldCBNb3ZpZSBEYXRhYmFzZVwiLFxuICAgICAgICBcIlZhbHVlXCI6IFwiMTBcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJTb3VyY2VcIjogXCJSb3R0ZW4gVG9tYXRvZXNcIixcbiAgICAgICAgXCJWYWx1ZVwiOiBcIjdcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJTb3VyY2VcIjogXCJNZXRhY3JpdGljXCIsXG4gICAgICAgIFwiVmFsdWVcIjogXCI4XCJcbiAgICAgIH1cbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiMlwiLFxuICAgIHRpdGxlOiBcIkhvbmVzdCBUaGllZlwiLFxuICAgIHllYXI6IFwiMjAyMFwiLFxuICAgIHJlbGVhc2VkOiBcIjE2IE9jdCAyMDIwXCIsXG4gICAgcnVudGltZTogXCI5OSBtaW5cIixcbiAgICBzdW1tYXJ5OlwiSG9waW5nIHRvIGN1dCBhIGRlYWwsIGEgcHJvZmVzc2lvbmFsIGJhbmsgcm9iYmVyIGFncmVlcyB0byByZXR1cm4gYWxsIHRoZSBtb25leSBoZSBzdG9sZSBpbiBleGNoYW5nZSBmb3IgYSByZWR1Y2VkIHNlbnRlbmNlLiBXaGVuIHR3byBGQkkgYWdlbnRzIHNldCBoaW0gdXAgZm9yIG11cmRlciwgaGUgaXMgZm9yY2VkIHRvIGdvIG9uIHRoZSBydW4gdG8gY2xlYXIgaGlzIG5hbWUgYW5kIGJyaW5nIHRoZW0gdG8ganVzdGljZVwiLFxuICAgIGxpbms6XG4gICAgICAgIFwiaHR0cHM6Ly90aGVmbGl4ZXIudHYvbW92aWUvd2F0Y2gtaG9uZXN0LXRoaWVmLWZ1bGwtNjM3MThcIixcbiAgICByYXRpbmdzOiBbXG4gICAgICB7XG4gICAgICAgIFwiU291cmNlXCI6IFwiSW50ZXJuZXQgTW92aWUgRGF0YWJhc2VcIixcbiAgICAgICAgXCJWYWx1ZVwiOiBcIjlcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJTb3VyY2VcIjogXCJNZXRhY3JpdGljXCIsXG4gICAgICAgIFwiVmFsdWVcIjogXCIxMFwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgaWQ6IFwiM1wiLFxuICAgIHRpdGxlOiBcIkRlYWRwb29sXCIsXG4gICAgeWVhcjogXCIyMDE2XCIsXG4gICAgcmVsZWFzZWQ6IFwiMTIgRmViIDIwMTZcIixcbiAgICBydW50aW1lOiBcIjEwOCBtaW5cIixcbiAgICBzdW1tYXJ5OlwiRGVhZHBvb2wgaXMgYW4gQW1lcmljYW4gc3VwZXJoZXJvIGZpbG0gYmFzZWQgb24gdGhlIE1hcnZlbCBDb21pY3MgY2hhcmFjdGVyIG9mIHRoZSBzYW1lIG5hbWUuIERpc3RyaWJ1dGVkIGJ5IDIwdGggQ2VudHVyeSBGb3gsIGl0IGlzIGEgc3Bpbi1vZmYgaW4gdGhlIFgtTWVuIGZpbG0gc2VyaWVzIGFuZCB0aGUgZWlnaHRoIGluc3RhbGxtZW50IG92ZXJhbGwuXCIsXG4gICAgbGluazpcbiAgICAgIFwiaHR0cHM6Ly90aGVmbGl4ZXIudHYvbW92aWUvd2F0Y2gtZGVhZHBvb2wtZnVsbC0xOTY5NFwiLFxuICAgIGZhdm9yaXRlOiB0cnVlLFxuICAgIHJhdGluZ3M6IFtcbiAgICAgIHtcbiAgICAgICAgXCJTb3VyY2VcIjogXCJJbnRlcm5ldCBNb3ZpZSBEYXRhYmFzZVwiLFxuICAgICAgICBcIlZhbHVlXCI6IFwiNVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIlNvdXJjZVwiOiBcIlJvdHRlbiBUb21hdG9lc1wiLFxuICAgICAgICBcIlZhbHVlXCI6IFwiMTBcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJTb3VyY2VcIjogXCJNZXRhY3JpdGljXCIsXG4gICAgICAgIFwiVmFsdWVcIjogXCI5XCJcbiAgICAgIH1cbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiNFwiLFxuICAgIHRpdGxlOiBcIkJydWNlIEFsbWlnaHR5XCIsXG4gICAgeWVhcjogXCIyMDAzXCIsXG4gICAgcmVsZWFzZWQ6IFwiMjMgTWF5IDIwMDNcIixcbiAgICBydW50aW1lOiBcIjEwMSBtaW5cIixcbiAgICBzdW1tYXJ5OlwiQnJ1Y2UgQWxtaWdodHkgaXMgYW4gQW1lcmljYW4gZmFudGFzeSBjb21lZHkgZmlsbSBkaXJlY3RlZCBieSBUb20gU2hhZHlhYyBhbmQgd3JpdHRlbiBieSBTdGV2ZSBLb3JlbiwgTWFyayBPJ0tlZWZlIGFuZCBTdGV2ZSBPZWRla2Vyay5cIixcbiAgICBsaW5rOlxuICAgICAgXCJodHRwczovL3RoZWZsaXhlci50di9tb3ZpZS93YXRjaC1icnVjZS1hbG1pZ2h0eS1mdWxsLTE5NTE4XCIsXG4gICAgZmF2b3JpdGU6IHRydWUsXG4gICAgcmF0aW5nczogW1xuICAgICAge1xuICAgICAgICBcIlNvdXJjZVwiOiBcIkludGVybmV0IE1vdmllIERhdGFiYXNlXCIsXG4gICAgICAgIFwiVmFsdWVcIjogXCI2XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiU291cmNlXCI6IFwiUm90dGVuIFRvbWF0b2VzXCIsXG4gICAgICAgIFwiVmFsdWVcIjogXCIxMFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIlNvdXJjZVwiOiBcIk1ldGFjcml0aWNcIixcbiAgICAgICAgXCJWYWx1ZVwiOiBcIjRcIlxuICAgICAgfVxuICAgIF0sXG4gIH0sXG5cbl07XG4iLCJpbXBvcnQgQXBwIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9BcHBcIjtcbmNvbnN0IEluZGV4UGFnZSA9ICgpID0+IHtcbiAgcmV0dXJuIDxBcHAgLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7XG4iLCJpbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xuaW1wb3J0IE1vdmllcyBmcm9tIFwiLi9Nb3ZpZXNcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4vTGF5b3V0XCI7XG5cblxuZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgc3RhcnRpbmdUaGVtZT1cImxpZ2h0XCI+XG4gICAgICA8ZGl2ID5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8TW92aWVzIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IHtUaGVtZUNvbnRleHR9IGZyb20gXCIuLi9jb250ZXh0cy9UaGVtZUNvbnRleHRcIjtcbmltcG9ydCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBIZWFkZXIoKSB7XG5cbiAgY29uc3Qge3RoZW1lfSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFkVDQgcGFkQjRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG1vYmlsZS1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGltZyBhbHQ9XCJTVkNDIEhvbWUgUGFnZVwiIHNyYz1cIi9pbWFnZXMvbG9nby5wbmdcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGVtZSA9PT0gXCJsaWdodFwiID8gXCJcIiA6IFwidGV4dC1pbmZvXCJ9PlxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImhlYWRlci10aXRsZVwiPkdyZWF0ZXN0IE1vdmllcyBvZiBBbGwgVGltZTwvaDQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoZW1lID09PSBcImxpZ2h0XCIgPyBcIlwiIDogXCJ0ZXh0LWluZm9cIn0+XG4gICAgICAgICAgICBIZWxsbyAmbmJzcDsmbmJzcDtcbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPnNpZ24tb3V0PC9hPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRoZW1lQ29udGV4dCwgVGhlbWVQcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHRzL1RoZW1lQ29udGV4dCc7XHJcblxyXG5mdW5jdGlvbiBMYXlvdXQoe3N0YXJ0aW5nVGhlbWUsIGNoaWxkcmVufSl7XHJcbiAgcmV0dXJuKFxyXG4gICAgPFRoZW1lUHJvdmlkZXIgc3RhcnRpbmdUaGVtZT17c3RhcnRpbmdUaGVtZX0gID5cclxuICAgICAgPExheW91dE5vVGhlbWVQcm92aWRlcj57Y2hpbGRyZW59PC9MYXlvdXROb1RoZW1lUHJvdmlkZXI+XHJcbiAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gTGF5b3V0Tm9UaGVtZVByb3ZpZGVyKHtjaGlsZHJlbn0pe1xyXG5cclxuICBjb25zdCB7dGhlbWV9ID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpOyAvL3RoZW1lIG5vdCBkZWZpbmVkIHdpaCAxIGZ1bmN0aW9uXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgdGhlbWUgPT09IFwibGlnaHRcIiA/IFwiY29udGFpbmVyLWZsdWlkIGxpZ2h0XCIgOiBcImNvbnRhaW5lci1mbHVpZCBkYXJrXCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgbWVtb30gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7TW92aWVGaWx0ZXJDb250ZXh0fSBmcm9tIFwiLi8uLi9jb250ZXh0cy9Nb3ZpZUZpbHRlckNvbnRleHRcIjtcclxuaW1wb3J0IHsgTW92aWVQcm92aWRlciwgTW92aWVDb250ZXh0IH0gZnJvbSBcIi4vLi4vY29udGV4dHMvTW92aWVDb250ZXh0XCJcclxuaW1wb3J0IE1vdmllRGVsZXRlIGZyb20gXCIuL01vdmllRGVsZXRlXCJcclxuXHJcbmZ1bmN0aW9uIFJhdGluZyh7IFNvdXJjZSwgVmFsdWUgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJyYXRpbmcgdy0xMDBcIj5cclxuICAgICAge1NvdXJjZX0gPHN0cm9uZz5WYWx1ZToge1ZhbHVlfS8xMDwvc3Ryb25nPlxyXG4gICAgPC9zcGFuPlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFJhdGluZ3MoKSB7XHJcbiAgY29uc3Qge3JhdGluZ1ZhbHVlfSA9IHVzZUNvbnRleHQoTW92aWVGaWx0ZXJDb250ZXh0KTtcclxuICBjb25zdCB7IG1vdmllIH0gPSB1c2VDb250ZXh0KE1vdmllQ29udGV4dCk7IFxyXG4gIGNvbnN0IHJhdGluZ3MgPSBtb3ZpZS5yYXRpbmdzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZ0JveCBjYXJkIGgtMjUwXCI+XHJcbiAgICAgIHtyYXRpbmdzLmZpbHRlcihmdW5jdGlvbihyYXRpbmcpe1xyXG4gICAgICAgIHJldHVybiByYXRpbmcuVmFsdWUgPT09IHJhdGluZ1ZhbHVlO1xyXG4gICAgICB9KVxyXG4gICAgICAubWFwKGZ1bmN0aW9uKHJhdGluZyl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmcgdy0xMDBcIiBrZXk9e3JhdGluZy5pZH0+XHJcbiAgICAgICAgICAgIDxSYXRpbmcgey4uLnJhdGluZ30vPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgICB9KVxyXG4gICAgICB9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBJbWFnZVdpdGhGYWxsYmFjayh7IHNyYywgLi4ucHJvcHMgfSkge1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpbWdTcmMsIHNldEltZ1NyY10gPSB1c2VTdGF0ZShzcmMpO1xyXG5cclxuICBmdW5jdGlvbiBvbkVycm9yKCkge1xyXG4gICAgaWYgKCFlcnJvcikge1xyXG4gICAgICBzZXRJbWdTcmMoXCIvaW1hZ2VzL21vdmllLTk5OTk5LnBuZ1wiKTtcclxuICAgICAgc2V0RXJyb3IodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gPGltZyBzcmM9e2ltZ1NyY30gey4uLnByb3BzfSBvbkVycm9yPXtvbkVycm9yfSAvPjtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIE1vdmllSW1hZ2UoKSB7XHJcbiAgY29uc3Qge21vdmllOiB7aWQsIHRpdGxlfX09IHVzZUNvbnRleHQoTW92aWVDb250ZXh0KTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZS1pbWcgZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIGgtMzAwXCI+XHJcbiAgICAgIDxJbWFnZVdpdGhGYWxsYmFja1xyXG4gICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW4tZml0XCJcclxuICAgICAgICBzcmM9e2AvaW1hZ2VzL21vdmllLSR7aWR9LnBuZ2B9XHJcbiAgICAgICAgd2lkdGg9XCIzMDBcIlxyXG4gICAgICAgIGFsdD17YCR7dGl0bGV9YH1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE1vdmllRmF2b3JpdGUoKSB7XHJcbiAgY29uc3Qge21vdmllLCB1cGRhdGVSZWNvcmR9ID0gdXNlQ29udGV4dChNb3ZpZUNvbnRleHQpO1xyXG4gIGNvbnN0IFtpblRyYW5zaXRpb24sIHNldEluVHJhbnNpdGlvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgZnVuY3Rpb24gZG9uZUNhbGxiYWNrKCkge1xyXG4gICAgc2V0SW5UcmFuc2l0aW9uKGZhbHNlKTtcclxuICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICBgSW4gTW92aWVGYXZvcml0ZTpkb25lQ2FsbGJhY2sgICAgJHtuZXcgRGF0ZSgpLmdldE1pbGxpc2Vjb25kcygpfWBcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb24gcGFkQjFcIj5cclxuICAgICAgPHNwYW5cclxuICAgICAgICBvbkNsaWNrPXtmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBzZXRJblRyYW5zaXRpb24odHJ1ZSk7XHJcbiAgICAgICAgIHVwZGF0ZVJlY29yZChcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgLi4ubW92aWUsIGZhdm9yaXRlOiFtb3ZpZS5mYXZvcml0ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBkb25lQ2FsbGJhY2tcclxuICAgICAgICAgKVxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8aVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgbW92aWUuZmF2b3JpdGUgPT09IHRydWUgPyBcImZhIGZhLXN0YXIgb3JhbmdlXCIgOiBcImZhIGZhLXN0YXItbyBvcmFuZ2VcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIC8+e1wiIFwifVxyXG4gICAgICAgIEZhdm9yaXRle1wiIFwifVxyXG4gICAgICAgIHtpblRyYW5zaXRpb24gPyAoXHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYXMgZmEtY2lyY2xlLW5vdGNoIGZhLXNwaW5cIj48L3NwYW4+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE1vdmllRGVtb2dyYXBoaWNzKCkge1xyXG4gIGNvbnN0IHsgbW92aWUgfSA9IHVzZUNvbnRleHQoIE1vdmllQ29udGV4dCApO1xyXG4gIGNvbnN0IHt0aXRsZSwgcmVsZWFzZWQsIHJ1bnRpbWUsIHN1bW1hcnksIGxpbmssIGZhdm9yaXRlfSA9IG1vdmllO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdmllLWluZm9cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWItM1wiPlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXRydW5jYXRlIHctMjAwXCI+XHJcbiAgICAgICAgICB7dGl0bGV9ICA8YnIvPiBcclxuICAgICAgICA8L2gzPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPE1vdmllRmF2b3JpdGUgIC8+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC1saW5rXCI+IHtyZWxlYXNlZH0gIDxici8+IHtydW50aW1lfTxici8+PGJyLz48YSBocmVmPXtsaW5rfSB0YXJnZXQ9XCJfYmxhbmtcIj5XYXRjaCBub3cgb24gVEhFRkxJWEVSXCI8L2E+PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJyLz5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLWRlc2NyaXB0aW9uXCI+e3N1bW1hcnl9PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJyLz5cclxuICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBNb3ZpZSA9IG1lbW8oZnVuY3Rpb24gTW92aWUoeyBtb3ZpZSwgdXBkYXRlUmVjb3JkLCBpbnNlcnRSZWNvcmQsIGRlbGV0ZVJlY29yZCB9KSB7XHJcbiAgICBjb25zdCB7c2hvd1JhdGluZ3N9ID0gdXNlQ29udGV4dChNb3ZpZUZpbHRlckNvbnRleHQpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPE1vdmllUHJvdmlkZXIgbW92aWU9e21vdmllfSB1cGRhdGVSZWNvcmQ9e3VwZGF0ZVJlY29yZH0gaW5zZXJ0UmVjb3JkPXtpbnNlcnRSZWNvcmR9IGRlbGV0ZVJlY29yZD17ZGVsZXRlUmVjb3JkfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTQgY29sLXNtLTEyIGNvbC14cy0xMlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtaGVpZ2h0IHAtNCBtdC00XCI+XHJcbiAgICAgICAgICA8TW92aWVJbWFnZSAgLz5cclxuICAgICAgICAgICAgPE1vdmllRGVtb2dyYXBoaWNzICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7c2hvd1JhdGluZ3MgPT09IHRydWUgPyA8UmF0aW5ncyAvPiA6IG51bGx9XHJcbiAgICAgICAgICA8TW92aWVEZWxldGUvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L01vdmllUHJvdmlkZXI+XHJcbiAgICApO1xyXG4gIH0sIGFyZUVxdWFsTW92aWVcclxuKTtcclxuXHJcbmZ1bmN0aW9uIGFyZUVxdWFsTW92aWUocHJldlByb3BzLCBuZXh0UHJvcHMpe1xyXG4gIHJldHVybihwcmV2UHJvcHMubW92aWUuZmF2b3JpdGUgPT09IG5leHRQcm9wcy5tb3ZpZS5mYXZvcml0ZSk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3ZpZTtcclxuIiwiZnVuY3Rpb24gTW92aWVBZGQgKHsgcmF0aW5nVmFsdWUsIGluc2VydFJlY29yZH0pe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYWRkU2VzXCI+XHJcbiAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGl0bGVOZXcgPSB3aW5kb3cucHJvbXB0KFwiRW50ZXIgdGl0bGU6XCIpO1xyXG4gICAgICAgICAgICAgICAgaW5zZXJ0UmVjb3JkKHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogXCI5OTk5OVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRsZU5ldyxcclxuICAgICAgICAgICAgICAgICAgICBzdW1tYXJ5OiBcIlN1bW1hcnkgbm90IGVudGVyZWQgeWV0IVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJhdGluZ3M6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNvdXJjZTpcIkFkbWluXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlOmAke3JhdGluZ1ZhbHVlfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICArXHJcbiAgICAgICAgICAgIDwvaT5cclxuICAgICAgICA8L2E+XHJcbiAgICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vdmllQWRkOyIsImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTW92aWVDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL01vdmllQ29udGV4dFwiO1xyXG5cclxuZnVuY3Rpb24gTW92aWVEZWxldGUoKXtcclxuICAgIGNvbnN0IHsgbW92aWUsIGRlbGV0ZVJlY29yZCB9ID0gdXNlQ29udGV4dChNb3ZpZUNvbnRleHQpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlc3Npb24gdy0xMDBcIj5cclxuICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInJlbVNlc1wiPlxyXG4gICAgICAgICAgPGlcclxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgd2luZG93LmNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgbW92aWU/XCIpXHJcbiAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGVSZWNvcmQobW92aWUpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgLVxyXG4gICAgICAgICAgPC9pPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYWRMMlwiPkRlbGV0ZSBNb3ZpZTwvc3Bhbj5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW92aWVEZWxldGU7IiwiaW1wb3J0IE1vdmllc1Rvb2xiYXIgZnJvbSBcIi4vTW92aWVzVG9vbGJhclwiO1xyXG5pbXBvcnQgTW92aWVzTGlzdCBmcm9tIFwiLi9Nb3ZpZXNMaXN0XCI7XHJcbmltcG9ydCB7TW92aWVGaWx0ZXJQcm92aWRlcn0gZnJvbSBcIi4uL2NvbnRleHRzL01vdmllRmlsdGVyQ29udGV4dFwiO1xyXG5cclxuZnVuY3Rpb24gTW92aWVzKCkge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE1vdmllRmlsdGVyUHJvdmlkZXIgc3RhcnRpbmdTaG93UmF0aW5ncz17ZmFsc2V9PlxyXG4gICAgICA8TW92aWVzVG9vbGJhciAvPlxyXG4gICAgICA8TW92aWVzTGlzdCAvPlxyXG4gICAgPC9Nb3ZpZUZpbHRlclByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vdmllcztcclxuIiwiaW1wb3J0IE1vdmllIGZyb20gXCIuL01vdmllXCI7XHJcbmltcG9ydCBSZWFjdFBsYWNlSG9sZGVyIGZyb20gXCJyZWFjdC1wbGFjZWhvbGRlclwiO1xyXG5pbXBvcnQgdXNlUmVxdWVzdFJlc3QsIHsgUkVRVUVTVF9TVEFUVVMgfSBmcm9tIFwiLi4vaG9va3MvdXNlUmVxdWVzdFJlc3RcIjtcclxuaW1wb3J0IHsgZGF0YSB9IGZyb20gXCIuLi8uLi9Nb3ZpZURhdGFcIjtcclxuaW1wb3J0IHt1c2VDb250ZXh0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtNb3ZpZUZpbHRlckNvbnRleHR9IGZyb20gXCIuLy4uL2NvbnRleHRzL01vdmllRmlsdGVyQ29udGV4dFwiO1xyXG5pbXBvcnQgTW92aWVBZGQgZnJvbSBcIi4vTW92aWVBZGRcIjtcclxuXHJcbmZ1bmN0aW9uIE1vdmllc0xpc3QoKSB7XHJcbiAgY29uc3Qge1xyXG4gICAgZGF0YTogbW92aWVzRGF0YSxcclxuICAgIHJlcXVlc3RTdGF0dXMsXHJcbiAgICBlcnJvcixcclxuICAgIHVwZGF0ZVJlY29yZCxcclxuICAgIGluc2VydFJlY29yZCxcclxuICAgIGRlbGV0ZVJlY29yZFxyXG4gIH0gPSB1c2VSZXF1ZXN0UmVzdCgpO1xyXG5cclxuICBjb25zdCB7IHNlYXJjaFF1ZXJ5LCByYXRpbmdWYWx1ZSB9ID0gdXNlQ29udGV4dChNb3ZpZUZpbHRlckNvbnRleHQpO1xyXG5cclxuICBpZiAocmVxdWVzdFN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuRkFJTFVSRSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPlxyXG4gICAgICAgIEVSUk9SOiA8Yj5sb2FkaW5nIE1vdmllIERhdGEgRmFpbGVkIHtlcnJvcn08L2I+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbW92aWVzLWxpc3RcIj5cclxuICAgICAgPFJlYWN0UGxhY2VIb2xkZXJcclxuICAgICAgICB0eXBlPVwibWVkaWFcIlxyXG4gICAgICAgIHJvd3M9ezIwfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1vdmllc2xpc3QtcGxhY2Vob2xkZXJcIlxyXG4gICAgICAgIHJlYWR5PXtyZXF1ZXN0U3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5TVUNDRVNTfVxyXG4gICAgICA+XHJcbiAgICAgICAgPE1vdmllQWRkIHJhdGluZ1ZhbHVlPXtyYXRpbmdWYWx1ZX0gaW5zZXJ0UmVjb3JkPXtpbnNlcnRSZWNvcmR9Lz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAge21vdmllc0RhdGFcclxuICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24obW92aWUpe1xyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgbW92aWUudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hRdWVyeSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uKG1vdmllKXtcclxuICAgICAgICAgICAgcmV0dXJuIG1vdmllLnJhdGluZ3MuZmluZCgocmF0aW5nKT0+e1xyXG4gICAgICAgICAgICAgIHJldHVybiByYXRpbmcuVmFsdWUgPT09IHJhdGluZ1ZhbHVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKG1vdmllKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPE1vdmllXHJcbiAgICAgICAgICAgICAgICBrZXk9e21vdmllLmlkfVxyXG4gICAgICAgICAgICAgICAgbW92aWU9e21vdmllfVxyXG4gICAgICAgICAgICAgICAgdXBkYXRlUmVjb3JkPXt1cGRhdGVSZWNvcmR9XHJcbiAgICAgICAgICAgICAgICBpbnNlcnRSZWNvcmQ9e2luc2VydFJlY29yZH1cclxuICAgICAgICAgICAgICAgIGRlbGV0ZVJlY29yZD17ZGVsZXRlUmVjb3JkfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9SZWFjdFBsYWNlSG9sZGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW92aWVzTGlzdDtcclxuIiwiaW1wb3J0IHtUaGVtZUNvbnRleHR9IGZyb20gXCIuLi9jb250ZXh0cy9UaGVtZUNvbnRleHRcIjtcclxuaW1wb3J0IHtNb3ZpZUZpbHRlckNvbnRleHR9IGZyb20gXCIuLi9jb250ZXh0cy9Nb3ZpZUZpbHRlckNvbnRleHRcIjtcclxuaW1wb3J0IHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBNb3ZpZXNUb29sYmFyKCkge1xyXG5cclxuICBjb25zdCB7dGhlbWUsIHNldFRoZW1lfSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcclxuICBjb25zdCB7c2hvd1JhdGluZ3MsIHNldFNob3dSYXRpbmdzLCByYXRpbmdWYWx1ZSwgc2V0UmF0aW5nVmFsdWUsIHNldFNlYXJjaFF1ZXJ5LCBSQVRJTkdfVkFMVUVTfSA9IHVzZUNvbnRleHQoTW92aWVGaWx0ZXJDb250ZXh0KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRvb2xiYXIgZGFyay10aGVtZS1oZWFkZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidG9vbHJvdyBkLWZsZXggZmxleC1jb2x1bW4gZmxleC1sZy1yb3dcIj5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBmbGV4LW1kLXJvd1wiPlxyXG4gICAgICAgICAgICAgIDxiPlNob3cgUmF0aW5ncyZuYnNwOyZuYnNwOzwvYj5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZmF2XCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c2hvd1JhdGluZ3N9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTaG93UmF0aW5ncyhldmVudC50YXJnZXQuY2hlY2tlZCk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3dpdGNoXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gZmxleC1tZC1yb3cgbWwtc20tNSBtbC0wXCI+XHJcbiAgICAgICAgICAgICAgPHN0cm9uZz5UaGVtZTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgdGhlbWVcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhlbWV9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaGVtZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibGlnaHRcIj5MaWdodDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGFya1wiPkRhcms8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaC4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlYXJjaFF1ZXJ5KGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIHR5cGU9XCJidXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXNlYXJjaFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBmbGV4LW1kLXJvd1wiPlxyXG4gICAgICAgICAgICAgIDxzdHJvbmc+UmF0aW5nIFZhbHVlPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImRyb3BtZW51XCI+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXtyYXRpbmdWYWx1ZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHtjdXJyZW50VGFyZ2V0fSk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmF0aW5nVmFsdWUoY3VycmVudFRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1JBVElOR19WQUxVRVMubWFwKGZ1bmN0aW9uKHJhdGluZ3Ype1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3JhdGluZ3Z9IGtleT17cmF0aW5ndn0+e3JhdGluZ3Z9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW92aWVzVG9vbGJhcjtcclxuIiwiaW1wb3J0IHtjcmVhdGVDb250ZXh0fSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IE1vdmllQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmZ1bmN0aW9uIE1vdmllUHJvdmlkZXIoe2NoaWxkcmVuLCBtb3ZpZSwgdXBkYXRlUmVjb3JkLCBpbnNlcnRSZWNvcmQsIGRlbGV0ZVJlY29yZH0pe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxNb3ZpZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ttb3ZpZSwgdXBkYXRlUmVjb3JkLCBpbnNlcnRSZWNvcmQsIGRlbGV0ZVJlY29yZH19PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9Nb3ZpZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgeyBNb3ZpZUNvbnRleHQsIE1vdmllUHJvdmlkZXIgfTsiLCJpbXBvcnQgUmVhY3Qse2NyZWF0ZUNvbnRleHR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdXNlTW92aWVGaWx0ZXIgZnJvbSBcIi4uL2hvb2tzL3VzZU1vdmllRmlsdGVyXCI7XHJcblxyXG5jb25zdCBNb3ZpZUZpbHRlckNvbnRleHQ9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmZ1bmN0aW9uIE1vdmllRmlsdGVyUHJvdmlkZXIgKHtjaGlsZHJlbiwgc3RhcnRpbmdTaG93UmF0aW5ncyA9IGZhbHNlLCBzdGFydGluZ1JhdGluZ1ZhbHVlPVwiMTBcIn0pe1xyXG4gICAgY29uc3Qge3Nob3dSYXRpbmdzLCBzZXRTaG93UmF0aW5ncywgXHJcbiAgICAgICAgcmF0aW5nVmFsdWUsIHNldFJhdGluZ1ZhbHVlLCBcclxuICAgICAgICBzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnksIFxyXG4gICAgICAgIFJBVElOR19WQUxVRVN9ID0gdXNlTW92aWVGaWx0ZXIoc3RhcnRpbmdTaG93UmF0aW5ncywgc3RhcnRpbmdSYXRpbmdWYWx1ZSk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxNb3ZpZUZpbHRlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tzaG93UmF0aW5ncywgc2V0U2hvd1JhdGluZ3MsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF0aW5nVmFsdWUsIHNldFJhdGluZ1ZhbHVlLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSQVRJTkdfVkFMVUVTfX0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L01vdmllRmlsdGVyQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICk7XHJcbn1cclxuZXhwb3J0IHtNb3ZpZUZpbHRlckNvbnRleHQsIE1vdmllRmlsdGVyUHJvdmlkZXJ9IiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHVzZVRoZW1lIGZyb20gXCIuLi9ob29rcy91c2VUaGVtZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRoZW1lQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmZ1bmN0aW9uIFRoZW1lUHJvdmlkZXIoeyBjaGlsZHJlbiwgc3RhcnRpbmdUaGVtZSB9KSB7XHJcbiAgY29uc3Qge3RoZW1lLCBzZXRUaGVtZX0gPSB1c2VUaGVtZShzdGFydGluZ1RoZW1lKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUaGVtZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgc2V0VGhlbWUsIHRoZW1lIH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1RoZW1lQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgeyBUaGVtZVByb3ZpZGVyIH07XHJcbiIsImltcG9ydCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gdXNlTW92aWVGaWx0ZXIoc3RhcnRpbmdTaG93UmF0aW5ncywgc3RhcnRpbmdSYXRpbmdWYWx1ZSl7XHJcbiAgICBjb25zdCBbc2hvd1JhdGluZ3MsIHNldFNob3dSYXRpbmdzXSA9IHVzZVN0YXRlKHN0YXJ0aW5nU2hvd1JhdGluZ3MpO1xyXG4gICAgY29uc3QgW3JhdGluZ1ZhbHVlLCBzZXRSYXRpbmdWYWx1ZV0gPSB1c2VTdGF0ZShzdGFydGluZ1JhdGluZ1ZhbHVlKTtcclxuICAgIGNvbnN0IFsgc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAgIGNvbnN0IFJBVElOR19WQUxVRVM9W1xyXG4gICAgICAgIFwiMVwiLFwiMlwiLFwiM1wiLFwiNFwiLFwiNVwiLFwiNlwiLFwiN1wiLFwiOFwiLFwiOVwiLFwiMTBcIlxyXG4gICAgXTtcclxuXHJcblxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHNob3dSYXRpbmdzLFxyXG4gICAgICAgIHNldFNob3dSYXRpbmdzLFxyXG4gICAgICAgIHJhdGluZ1ZhbHVlLFxyXG4gICAgICAgIHNldFJhdGluZ1ZhbHVlLFxyXG4gICAgICAgIHNlYXJjaFF1ZXJ5LFxyXG4gICAgICAgIHNldFNlYXJjaFF1ZXJ5LFxyXG4gICAgICAgIFJBVElOR19WQUxVRVNcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCB1c2VNb3ZpZUZpbHRlcjsiLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBSRVFVRVNUX1NUQVRVUyA9IHtcclxuICBMT0FESU5HOiBcImxvYWRpbmdcIixcclxuICBTVUNDRVNTOiBcInN1Y2Nlc3NcIixcclxuICBGQUlMVVJFOiBcImZhaWx1cmVcIixcclxufTtcclxuXHJcbmNvbnN0IHJlc3RVcmwgPSBcImFwaS9tb3ZpZXNcIjtcclxuXHJcbmZ1bmN0aW9uIHVzZVJlcXVlc3RSZXN0KCkge1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcmVxdWVzdFN0YXR1cywgc2V0UmVxdWVzdFN0YXR1c10gPSB1c2VTdGF0ZShSRVFVRVNUX1NUQVRVUy5MT0FESU5HKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IGRlbGF5ID0gKG1zKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBkZWxheUZ1bmMoKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KHJlc3RVcmwpO1xyXG4gICAgICAgIHNldFJlcXVlc3RTdGF0dXMoUkVRVUVTVF9TVEFUVVMuU1VDQ0VTUyk7XHJcbiAgICAgICAgc2V0RGF0YShyZXN1bHQuZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBzZXRSZXF1ZXN0U3RhdHVzKFJFUVVFU1RfU1RBVFVTLkZBSUxVUkUpO1xyXG4gICAgICAgIHNldEVycm9yKGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBkZWxheUZ1bmMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGZ1bmN0aW9uIHVwZGF0ZVJlY29yZChyZWNvcmQsIGRvbmVDYWxsYmFjaykge1xyXG4gICAgY29uc3Qgb3JpZ2luYWxSZWNvcmRzID0gWy4uLmRhdGFdO1xyXG4gICAgY29uc3QgbmV3UmVjb3JkcyA9IGRhdGEubWFwKGZ1bmN0aW9uIChyZWMpIHtcclxuICAgICAgcmV0dXJuIHJlYy5pZCA9PT0gcmVjb3JkLmlkID8gcmVjb3JkIDogcmVjO1xyXG4gICAgfSk7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBkZWxheUZ1bmN0aW9uKCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHNldERhdGEobmV3UmVjb3Jkcyk7XHJcbiAgICAgICAgYXdhaXQgYXhpb3MucHV0KGAke3Jlc3RVcmx9LyR7cmVjb3JkLmlkfWAsIHJlY29yZCk7XHJcbiAgICAgICAgaWYgKGRvbmVDYWxsYmFjaykge1xyXG4gICAgICAgICAgZG9uZUNhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgdGhyb3duIGluc2lkZSBkZWxheUZ1bmN0aW9uXCIsIGVycm9yKTtcclxuICAgICAgICBpZiAoZG9uZUNhbGxiYWNrKSB7XHJcbiAgICAgICAgICBkb25lQ2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0RGF0YShvcmlnaW5hbFJlY29yZHMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBkZWxheUZ1bmN0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBkZWxldGVSZWNvcmQocmVjb3JkLCBkb25lQ2FsbGJhY2spIHtcclxuICAgIGNvbnN0IG9yaWdpbmFsUmVjb3JkcyA9IFsuLi5kYXRhXTtcclxuICAgIGNvbnN0IG5ld1JlY29yZHMgPSBkYXRhLmZpbHRlcihmdW5jdGlvbiAocmVjKSB7XHJcbiAgICAgIHJldHVybiByZWMuaWQgIT0gcmVjb3JkLmlkO1xyXG4gICAgfSk7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBkZWxheUZ1bmN0aW9uKCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHNldERhdGEobmV3UmVjb3Jkcyk7XHJcbiAgICAgICAgYXdhaXQgYXhpb3MuZGVsZXRlKGAke3Jlc3RVcmx9LyR7cmVjb3JkLmlkfWAsIHJlY29yZCk7XHJcbiAgICAgICAgaWYgKGRvbmVDYWxsYmFjaykge1xyXG4gICAgICAgICAgZG9uZUNhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgdGhyb3duIGluc2lkZSBkZWxheUZ1bmN0aW9uXCIsIGVycm9yKTtcclxuICAgICAgICBpZiAoZG9uZUNhbGxiYWNrKSB7XHJcbiAgICAgICAgICBkb25lQ2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0RGF0YShvcmlnaW5hbFJlY29yZHMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBkZWxheUZ1bmN0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBpbnNlcnRSZWNvcmQocmVjb3JkLCBkb25lQ2FsbGJhY2spIHtcclxuICAgIGNvbnN0IG9yaWdpbmFsUmVjb3JkcyA9IFsuLi5kYXRhXTtcclxuICAgIGNvbnN0IG5ld1JlY29yZHMgPSBbcmVjb3JkLCAuLi5kYXRhXTtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGRlbGF5RnVuY3Rpb24oKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgc2V0RGF0YShuZXdSZWNvcmRzKTtcclxuICAgICAgICBhd2FpdCBheGlvcy5wb3N0KGAke3Jlc3RVcmx9Lzk5OTk5YCwgcmVjb3JkKTtcclxuICAgICAgICBpZiAoZG9uZUNhbGxiYWNrKSB7XHJcbiAgICAgICAgICBkb25lQ2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciB0aHJvd24gaW5zaWRlIGRlbGF5RnVuY3Rpb25cIiwgZXJyb3IpO1xyXG4gICAgICAgIGlmIChkb25lQ2FsbGJhY2spIHtcclxuICAgICAgICAgIGRvbmVDYWxsYmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXREYXRhKG9yaWdpbmFsUmVjb3Jkcyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGRlbGF5RnVuY3Rpb24oKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBkYXRhLFxyXG4gICAgcmVxdWVzdFN0YXR1cyxcclxuICAgIGVycm9yLFxyXG4gICAgdXBkYXRlUmVjb3JkLFxyXG4gICAgaW5zZXJ0UmVjb3JkLFxyXG4gICAgZGVsZXRlUmVjb3JkLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZVJlcXVlc3RSZXN0OyIsImltcG9ydCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gdXNlVGhlbWUoc3RhcnRpbmdUaGVtZT1cImxpZ2h0XCIpe1xyXG5cclxuICAgIGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gdXNlU3RhdGUoc3RhcnRpbmdUaGVtZSk7XHJcblxyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVUaGVtZSh0aGVtZVZhbHVlKXtcclxuICAgICAgICBpZih0aGVtZVZhbHVlID09PSBcImRhcmtcIil7XHJcbiAgICAgICAgICAgIHNldFRoZW1lKFwiZGFya1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgc2V0VGhlbWUoXCJsaWdodFwiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdGhlbWUsXHJcbiAgICAgICAgc2V0VGhlbWU6IHZhbGlkYXRlVGhlbWVcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCB1c2VUaGVtZTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXBsYWNlaG9sZGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=
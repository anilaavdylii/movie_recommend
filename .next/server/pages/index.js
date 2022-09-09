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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Movies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Movies */ "./src/components/Movies.js");

var _jsxFileName = "C:\\Users\\hp\\Desktop\\react\\movie_recommend\\src\\components\\App.js";




function App() {
  const {
    0: theme,
    1: setTheme
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("light");
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: theme === "light" ? "container-fluid light" : "container-fluid dark",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_1__.default, {
      theme: theme
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Movies__WEBPACK_IMPORTED_MODULE_3__.default, {
      theme: theme,
      setTheme: setTheme
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
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

var _jsxFileName = "C:\\Users\\hp\\Desktop\\react\\movie_recommend\\src\\components\\Header.js";

function Header({
  theme
}) {
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
            lineNumber: 7,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 6,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: theme === "light" ? "" : "text-info",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
            className: "header-title",
            children: "Greatest Movies of All Time"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: theme === "light" ? "" : "text-info",
          children: ["Hello Mr. Smith \xA0\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              children: "sign-out"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

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




function Movies({
  theme,
  setTheme
}) {
  const {
    0: showRatings,
    1: setShowRatings
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MoviesToolbar__WEBPACK_IMPORTED_MODULE_1__.default, {
      theme: theme,
      setTheme: setTheme,
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
      lineNumber: 16,
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

var _jsxFileName = "C:\\Users\\hp\\Desktop\\react\\movie_recommend\\src\\components\\MoviesToolbar.js";

function MoviesToolbar({
  theme,
  setTheme,
  showRatings,
  setShowRatings
}) {
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
              lineNumber: 8,
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
                lineNumber: 10,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "switch"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 17,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 9,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 7,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "d-flex flex-column flex-md-row ml-sm-5 ml-0",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
              children: "Theme"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
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
                  lineNumber: 30,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                  value: "dark",
                  children: "Dark"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 31,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 23,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 6,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MoviesToolbar);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3ZpZV9yZWNvbW1lbmQvLi9Nb3ZpZURhdGEuanMiLCJ3ZWJwYWNrOi8vbW92aWVfcmVjb21tZW5kLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbW92aWVfcmVjb21tZW5kLy4vc3JjL2NvbXBvbmVudHMvQXBwLmpzIiwid2VicGFjazovL21vdmllX3JlY29tbWVuZC8uL3NyYy9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9tb3ZpZV9yZWNvbW1lbmQvLi9zcmMvY29tcG9uZW50cy9Nb3ZpZS5qcyIsIndlYnBhY2s6Ly9tb3ZpZV9yZWNvbW1lbmQvLi9zcmMvY29tcG9uZW50cy9Nb3ZpZXMuanMiLCJ3ZWJwYWNrOi8vbW92aWVfcmVjb21tZW5kLy4vc3JjL2NvbXBvbmVudHMvTW92aWVzTGlzdC5qcyIsIndlYnBhY2s6Ly9tb3ZpZV9yZWNvbW1lbmQvLi9zcmMvY29tcG9uZW50cy9Nb3ZpZXNUb29sYmFyLmpzIiwid2VicGFjazovL21vdmllX3JlY29tbWVuZC8uL3NyYy9ob29rcy91c2VSZXF1ZXN0RGVsYXkuanMiLCJ3ZWJwYWNrOi8vbW92aWVfcmVjb21tZW5kL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9tb3ZpZV9yZWNvbW1lbmQvZXh0ZXJuYWwgXCJyZWFjdC1wbGFjZWhvbGRlclwiIiwid2VicGFjazovL21vdmllX3JlY29tbWVuZC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbImRhdGEiLCJpZCIsInRpdGxlIiwieWVhciIsInJlbGVhc2VkIiwicnVudGltZSIsInN1bW1hcnkiLCJmYXZvcml0ZSIsInJhdGluZ3MiLCJJbmRleFBhZ2UiLCJBcHAiLCJ0aGVtZSIsInNldFRoZW1lIiwidXNlU3RhdGUiLCJIZWFkZXIiLCJSYXRpbmciLCJTb3VyY2UiLCJWYWx1ZSIsIlJhdGluZ3MiLCJNb3ZpZUltYWdlIiwiTW92aWVGYXZvcml0ZSIsIm9uRmF2b3JpdGVUb2dnbGUiLCJpblRyYW5zaXRpb24iLCJzZXRJblRyYW5zaXRpb24iLCJkb25lQ2FsbGJhY2siLCJjb25zb2xlIiwibG9nIiwiRGF0ZSIsImdldE1pbGxpc2Vjb25kcyIsIk1vdmllRGVtb2dyYXBoaWNzIiwiTW92aWUiLCJtb3ZpZSIsInNob3dSYXRpbmdzIiwiTW92aWVzIiwic2V0U2hvd1JhdGluZ3MiLCJNb3ZpZXNMaXN0IiwibW92aWVzRGF0YSIsInJlcXVlc3RTdGF0dXMiLCJlcnJvciIsInVwZGF0ZVJlY29yZCIsInVzZVJlcXVlc3REZWxheSIsIlJFUVVFU1RfU1RBVFVTIiwibWFwIiwiTW92aWVzVG9vbGJhciIsImV2ZW50IiwidGFyZ2V0IiwiY2hlY2tlZCIsInZhbHVlIiwiTE9BRElORyIsIlNVQ0NFU1MiLCJGQUlMVVJFIiwiZGVsYXlUaW1lIiwiaW5pdGlhbERhdGEiLCJzZXREYXRhIiwic2V0UmVxdWVzdFN0YXR1cyIsInNldEVycm9yIiwiZGVsYXkiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsInVzZUVmZmVjdCIsImRlbGF5RnVuYyIsImUiLCJyZWNvcmRVcGRhdGVkIiwib3JpZ2luYWxSZWNvcmRzIiwibmV3UmVjb3JkcyIsInJlYyIsImRlbGF5RnVuY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sTUFBTUEsSUFBSSxHQUFHLENBQ2xCO0FBQ0VDLElBQUUsRUFBRSxHQUROO0FBRUVDLE9BQUssRUFBRSxVQUZUO0FBR0VDLE1BQUksRUFBRSxNQUhSO0FBSUVDLFVBQVEsRUFBRSxhQUpaO0FBS0VDLFNBQU8sRUFBRSxRQUxYO0FBTUVDLFNBQU8sRUFDTCwyS0FQSjtBQVFFQyxVQUFRLEVBQUUsSUFSWjtBQVNFQyxTQUFPLEVBQUUsQ0FDUDtBQUNFLGNBQVUseUJBRFo7QUFFRSxhQUFTO0FBRlgsR0FETyxFQUtQO0FBQ0UsY0FBVSxpQkFEWjtBQUVFLGFBQVM7QUFGWCxHQUxPLEVBU1A7QUFDRSxjQUFVLFlBRFo7QUFFRSxhQUFT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QixZQUFULENBQXNCeUIsYUFBdEIsRUFBcUN4QyxZQUFyQyxFQUFtRDtBQUNqRCxVQUFNeUMsZUFBZSxHQUFHLENBQUMsR0FBR2pFLElBQUosQ0FBeEI7QUFDQSxVQUFNa0UsVUFBVSxHQUFHbEUsSUFBSSxDQUFDMEMsR0FBTCxDQUFTLFVBQVV5QixHQUFWLEVBQWU7QUFDekMsYUFBT0EsR0FBRyxDQUFDbEUsRUFBSixLQUFXK0QsYUFBYSxDQUFDL0QsRUFBekIsR0FBOEIrRCxhQUE5QixHQUE4Q0csR0FBckQ7QUFDRCxLQUZrQixDQUFuQjs7QUFJQSxtQkFBZUMsYUFBZixHQUErQjtBQUM3QixVQUFJO0FBQ0ZmLGVBQU8sQ0FBQ2EsVUFBRCxDQUFQO0FBQ0EsY0FBTVYsS0FBSyxDQUFDTCxTQUFELENBQVg7O0FBQ0EsWUFBSTNCLFlBQUosRUFBa0I7QUFDaEJBLHNCQUFZO0FBQ2I7QUFDRixPQU5ELENBTUUsT0FBT2MsS0FBUCxFQUFjO0FBQ2RiLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLG1DQUFaLEVBQWlEWSxLQUFqRDs7QUFDQSxZQUFJZCxZQUFKLEVBQWtCO0FBQ2hCQSxzQkFBWTtBQUNiOztBQUNENkIsZUFBTyxDQUFDWSxlQUFELENBQVA7QUFDRDtBQUNGOztBQUNERyxpQkFBYTtBQUNkOztBQUVELFNBQU87QUFDTHBFLFFBREs7QUFFTHFDLGlCQUZLO0FBR0xDLFNBSEs7QUFJTEM7QUFKSyxHQUFQO0FBTUQ7O0FBRUQsK0RBQWVDLGVBQWYsRTs7Ozs7Ozs7Ozs7QUMzREEsbUM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZGF0YSA9IFtcbiAge1xuICAgIGlkOiBcIjFcIixcbiAgICB0aXRsZTogXCJVbmRlcmRvZ1wiLFxuICAgIHllYXI6IFwiMjAwN1wiLFxuICAgIHJlbGVhc2VkOiBcIjAzIEF1ZyAyMDA3XCIsXG4gICAgcnVudGltZTogXCI4NCBtaW5cIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJVbmRlcmRvZyB0ZWxscyB0aGUgc3Rvcnkgb2YgdHdvIGJyb3RoZXJzLCBMaW5jb2xuIGFuZCBCb290aCwgd2hvLCBhYmFuZG9uZWQgYnkgdGhlaXIgcGFyZW50cywgaGF2ZSBoYWQgdG8gZGVwZW5kIHVwb24gZWFjaCBvdGhlciBmb3Igc3Vydml2YWwgc2luY2UgdGhleSB3ZXJlIHRlZW5hZ2Vycy4gXCIsXG4gICAgZmF2b3JpdGU6IHRydWUsXG4gICAgcmF0aW5nczogW1xuICAgICAge1xuICAgICAgICBcIlNvdXJjZVwiOiBcIkludGVybmV0IE1vdmllIERhdGFiYXNlXCIsXG4gICAgICAgIFwiVmFsdWVcIjogXCIxMC8xMFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIlNvdXJjZVwiOiBcIlJvdHRlbiBUb21hdG9lc1wiLFxuICAgICAgICBcIlZhbHVlXCI6IFwiMTYlXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiU291cmNlXCI6IFwiTWV0YWNyaXRpY1wiLFxuICAgICAgICBcIlZhbHVlXCI6IFwiMzcvMTAwXCJcbiAgICAgIH1cbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiMlwiLFxuICAgIHRpdGxlOiBcIkhvbmVzdCBUaGllZlwiLFxuICAgIHllYXI6IFwiMjAyMFwiLFxuICAgIHJlbGVhc2VkOiBcIjE2IE9jdCAyMDIwXCIsXG4gICAgcnVudGltZTogXCI5OSBtaW5cIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJIb3BpbmcgdG8gY3V0IGEgZGVhbCwgYSBwcm9mZXNzaW9uYWwgYmFuayByb2JiZXIgYWdyZWVzIHRvIHJldHVybiBhbGwgdGhlIG1vbmV5IGhlIHN0b2xlIGluIGV4Y2hhbmdlIGZvciBhIHJlZHVjZWQgc2VudGVuY2UuIFdoZW4gdHdvIEZCSSBhZ2VudHMgc2V0IGhpbSB1cCBmb3IgbXVyZGVyLCBoZSBpcyBmb3JjZWQgdG8gZ28gb24gdGhlIHJ1biB0byBjbGVhciBoaXMgbmFtZSBhbmQgYnJpbmcgdGhlbSB0byBqdXN0aWNlLlwiLCAgICBmYXZvcml0ZTogZmFsc2UsXG4gICAgcmF0aW5nczogW1xuICAgICAge1xuICAgICAgICBcIlNvdXJjZVwiOiBcIkludGVybmV0IE1vdmllIERhdGFiYXNlXCIsXG4gICAgICAgIFwiVmFsdWVcIjogXCI2LjAvMTBcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJTb3VyY2VcIjogXCJNZXRhY3JpdGljXCIsXG4gICAgICAgIFwiVmFsdWVcIjogXCI0Ni8xMDBcIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGlkOiBcIjNcIixcbiAgICB0aXRsZTogXCJEZWFkcG9vbFwiLFxuICAgIHllYXI6IFwiMjAxNlwiLFxuICAgIHJlbGVhc2VkOiBcIjEyIEZlYiAyMDE2XCIsXG4gICAgcnVudGltZTogXCIxMDggbWluXCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiSXMgYSAyMDE2IEFtZXJpY2FuIHN1cGVyaGVybyBmaWxtIGJhc2VkIG9uIHRoZSBNYXJ2ZWwgQ29taWNzIGNoYXJhY3RlciBvZiB0aGUgc2FtZSBuYW1lLiBEaXN0cmlidXRlZCBieSAyMHRoIENlbnR1cnkgRm94LCBpdCBpcyBhIHNwaW4tb2ZmIGluIHRoZSBYLU1lbiBmaWxtIHNlcmllcyBhbmQgdGhlIGVpZ2h0aCBpbnN0YWxsbWVudCBvdmVyYWxsLlwiLFxuICAgIGZhdm9yaXRlOiB0cnVlLFxuICAgIHJhdGluZ3M6IFtcbiAgICAgIHtcbiAgICAgICAgXCJTb3VyY2VcIjogXCJJbnRlcm5ldCBNb3ZpZSBEYXRhYmFzZVwiLFxuICAgICAgICBcIlZhbHVlXCI6IFwiOC4wLzEwXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiU291cmNlXCI6IFwiUm90dGVuIFRvbWF0b2VzXCIsXG4gICAgICAgIFwiVmFsdWVcIjogXCI4NSVcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJTb3VyY2VcIjogXCJNZXRhY3JpdGljXCIsXG4gICAgICAgIFwiVmFsdWVcIjogXCI2NS8xMDBcIlxuICAgICAgfVxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCI0XCIsXG4gICAgdGl0bGU6IFwiQnJ1Y2UgQWxtaWdodHlcIixcbiAgICB5ZWFyOiBcIjIwMDNcIixcbiAgICByZWxlYXNlZDogXCIyMyBNYXkgMjAwM1wiLFxuICAgIHJ1bnRpbWU6IFwiMTAxIG1pblwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIklzIGEgMjAwMyBBbWVyaWNhbiBmYW50YXN5IGNvbWVkeSBmaWxtIGRpcmVjdGVkIGJ5IFRvbSBTaGFkeWFjIGFuZCB3cml0dGVuIGJ5IFN0ZXZlIEtvcmVuLCBNYXJrIE8nS2VlZmUgYW5kIFN0ZXZlIE9lZGVrZXJrXCIsXG4gICAgZmF2b3JpdGU6IHRydWUsXG4gICAgcmF0aW5nczogW1xuICAgICAge1xuICAgICAgICBcIlNvdXJjZVwiOiBcIkludGVybmV0IE1vdmllIERhdGFiYXNlXCIsXG4gICAgICAgIFwiVmFsdWVcIjogXCI2LjgvMTBcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJTb3VyY2VcIjogXCJSb3R0ZW4gVG9tYXRvZXNcIixcbiAgICAgICAgXCJWYWx1ZVwiOiBcIjQ4JVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIlNvdXJjZVwiOiBcIk1ldGFjcml0aWNcIixcbiAgICAgICAgXCJWYWx1ZVwiOiBcIjQ2LzEwMFwiXG4gICAgICB9XG4gICAgXSxcbiAgfSxcblxuXTtcbiIsImltcG9ydCBBcHAgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL0FwcFwiO1xuY29uc3QgSW5kZXhQYWdlID0gKCkgPT4ge1xuICByZXR1cm4gPEFwcCAvPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTtcbiIsImltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1vdmllIGZyb20gXCIuL01vdmllc1wiO1xuXG5mdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gdXNlU3RhdGUoXCJsaWdodFwiKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e1xuICAgICAgICB0aGVtZSA9PT0gXCJsaWdodFwiID8gXCJjb250YWluZXItZmx1aWQgbGlnaHRcIiA6IFwiY29udGFpbmVyLWZsdWlkIGRhcmtcIlxuICAgICAgfVxuICAgID5cbiAgICAgIDxIZWFkZXIgdGhlbWU9e3RoZW1lfSAvPlxuICAgICAgPE1vdmllIHRoZW1lPXt0aGVtZX0gc2V0VGhlbWU9e3NldFRoZW1lfSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJmdW5jdGlvbiBIZWFkZXIoeyB0aGVtZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYWRUNCBwYWRCNFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbW9iaWxlLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW1nIGFsdD1cIlNWQ0MgSG9tZSBQYWdlXCIgc3JjPVwiL2ltYWdlcy9sb2dvLnBuZ1wiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoZW1lID09PSBcImxpZ2h0XCIgPyBcIlwiIDogXCJ0ZXh0LWluZm9cIn0+XG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiaGVhZGVyLXRpdGxlXCI+R3JlYXRlc3QgTW92aWVzIG9mIEFsbCBUaW1lPC9oND5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhlbWUgPT09IFwibGlnaHRcIiA/IFwiXCIgOiBcInRleHQtaW5mb1wifT5cbiAgICAgICAgICAgIEhlbGxvIE1yLiBTbWl0aCAmbmJzcDsmbmJzcDtcbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPnNpZ24tb3V0PC9hPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gUmF0aW5nKHsgU291cmNlLCBWYWx1ZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwicmF0aW5nIHctMTAwXCI+XG4gICAgICB7U291cmNlfSA8c3Ryb25nPlZhbHVlOiB7VmFsdWV9PC9zdHJvbmc+XG4gICAgPC9zcGFuPlxuICApO1xufVxuXG5mdW5jdGlvbiBSYXRpbmdzKHsgcmF0aW5ncyB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmdCb3ggY2FyZCBoLTI1MFwiPlxuICAgICAgPFJhdGluZyB7Li4ucmF0aW5nc1swXX0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gTW92aWVJbWFnZSh7IGlkLCB0aXRsZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZS1pbWcgZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIGgtMzAwXCI+XG4gICAgICA8aW1nXG4gICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW4tZml0XCJcbiAgICAgICAgc3JjPXtgL2ltYWdlcy9tb3ZpZS0ke2lkfS5wbmdgfVxuICAgICAgICB3aWR0aD1cIjMwMFwiXG4gICAgICAgIGFsdD17YCR7dGl0bGV9YH1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIE1vdmllRmF2b3JpdGUoeyBmYXZvcml0ZSwgb25GYXZvcml0ZVRvZ2dsZSB9KSB7XG4gIGNvbnN0IFtpblRyYW5zaXRpb24sIHNldEluVHJhbnNpdGlvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGZ1bmN0aW9uIGRvbmVDYWxsYmFjaygpIHtcbiAgICBzZXRJblRyYW5zaXRpb24oZmFsc2UpO1xuICAgIGNvbnNvbGUubG9nKFxuICAgICAgYEluIE1vdmllRmF2b3JpdGU6ZG9uZUNhbGxiYWNrICAgICR7bmV3IERhdGUoKS5nZXRNaWxsaXNlY29uZHMoKX1gXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb24gcGFkQjFcIj5cbiAgICAgIDxzcGFuXG4gICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uICgpIHtcbiAgICAgICAgICBzZXRJblRyYW5zaXRpb24odHJ1ZSk7XG4gICAgICAgICAgcmV0dXJuIG9uRmF2b3JpdGVUb2dnbGUoZG9uZUNhbGxiYWNrKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGlcbiAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgZmF2b3JpdGUgPT09IHRydWUgPyBcImZhIGZhLXN0YXIgb3JhbmdlXCIgOiBcImZhIGZhLXN0YXItbyBvcmFuZ2VcIlxuICAgICAgICAgIH1cbiAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgIEZhdm9yaXRle1wiIFwifVxuICAgICAgICB7aW5UcmFuc2l0aW9uID8gKFxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhcyBmYS1jaXJjbGUtbm90Y2ggZmEtc3BpblwiPjwvc3Bhbj5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIE1vdmllRGVtb2dyYXBoaWNzKHtcbiAgdGl0bGUsXG4gIHllYXIsXG4gIHJlbGVhc2VkLFxuICBydW50aW1lLFxuICBzdW1tYXJ5LFxuICBmYXZvcml0ZSxcbiAgb25GYXZvcml0ZVRvZ2dsZSxcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdmllLWluZm9cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG1iLTNcIj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtdHJ1bmNhdGUgdy0yMDBcIj5cbiAgICAgICAgICB7dGl0bGV9ICA8YnIvPiBcbiAgICAgICAgICB7cmVsZWFzZWR9ICA8YnIvPiB7cnVudGltZX1cbiAgICAgICAgPC9oMz5cbiAgICAgIDwvZGl2PlxuICAgICAgPE1vdmllRmF2b3JpdGVcbiAgICAgICAgZmF2b3JpdGU9e2Zhdm9yaXRlfVxuICAgICAgICBvbkZhdm9yaXRlVG9nZ2xlPXtvbkZhdm9yaXRlVG9nZ2xlfVxuICAgICAgLz5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtZGVzY3JpcHRpb25cIj57c3VtbWFyeX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gTW92aWUoeyBtb3ZpZSwgc2hvd1JhdGluZ3MsIG9uRmF2b3JpdGVUb2dnbGUgfSkge1xuICBjb25zdCB7IGlkLCB0aXRsZSwgeWVhciwgcmF0aW5ncyB9ID0gbW92aWU7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy00IGNvbC1zbS0xMiBjb2wteHMtMTJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWhlaWdodCBwLTQgbXQtNFwiPlxuICAgICAgICA8TW92aWVJbWFnZSBpZD17aWR9IHRpdGxlPXt0aXRsZX0gIC8+XG4gICAgICAgIDxNb3ZpZURlbW9ncmFwaGljcyB7Li4ubW92aWV9IG9uRmF2b3JpdGVUb2dnbGU9e29uRmF2b3JpdGVUb2dnbGV9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtzaG93UmF0aW5ncyA9PT0gdHJ1ZSA/IDxSYXRpbmdzIHJhdGluZ3M9e3JhdGluZ3N9IC8+IDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW92aWU7XG4iLCJpbXBvcnQgTW92aWVzVG9vbGJhciBmcm9tIFwiLi9Nb3ZpZXNUb29sYmFyXCI7XG5pbXBvcnQgTW92aWVzTGlzdCBmcm9tIFwiLi9Nb3ZpZXNMaXN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBNb3ZpZXMoeyB0aGVtZSwgc2V0VGhlbWUgfSkge1xuICBjb25zdCBbc2hvd1JhdGluZ3MsIHNldFNob3dSYXRpbmdzXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxNb3ZpZXNUb29sYmFyXG4gICAgICAgIHRoZW1lPXt0aGVtZX1cbiAgICAgICAgc2V0VGhlbWU9e3NldFRoZW1lfVxuICAgICAgICBzaG93UmF0aW5ncz17c2hvd1JhdGluZ3N9XG4gICAgICAgIHNldFNob3dSYXRpbmdzPXtzZXRTaG93UmF0aW5nc31cbiAgICAgIC8+XG4gICAgICA8TW92aWVzTGlzdCBzaG93UmF0aW5ncz17c2hvd1JhdGluZ3N9IC8+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllcztcbiIsImltcG9ydCBNb3ZpZSBmcm9tIFwiLi9Nb3ZpZVwiO1xuaW1wb3J0IFJlYWN0UGxhY2VIb2xkZXIgZnJvbSBcInJlYWN0LXBsYWNlaG9sZGVyXCI7XG5pbXBvcnQgdXNlUmVxdWVzdERlbGF5LCB7IFJFUVVFU1RfU1RBVFVTIH0gZnJvbSBcIi4uL2hvb2tzL3VzZVJlcXVlc3REZWxheVwiO1xuaW1wb3J0IHsgZGF0YSB9IGZyb20gXCIuLi8uLi9Nb3ZpZURhdGFcIjtcblxuZnVuY3Rpb24gTW92aWVzTGlzdCh7IHNob3dSYXRpbmdzIH0pIHtcbiAgY29uc3Qge1xuICAgIGRhdGE6IG1vdmllc0RhdGEsXG4gICAgcmVxdWVzdFN0YXR1cyxcbiAgICBlcnJvcixcbiAgICB1cGRhdGVSZWNvcmQsXG4gIH0gPSB1c2VSZXF1ZXN0RGVsYXkoMjAwMCwgZGF0YSk7XG5cbiAgaWYgKHJlcXVlc3RTdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLkZBSUxVUkUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPlxuICAgICAgICBFUlJPUjogPGI+bG9hZGluZyBNb3ZpZSBEYXRhIEZhaWxlZCB7ZXJyb3J9PC9iPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtb3ZpZXMtbGlzdFwiPlxuICAgICAgPFJlYWN0UGxhY2VIb2xkZXJcbiAgICAgICAgdHlwZT1cIm1lZGlhXCJcbiAgICAgICAgcm93cz17MjB9XG4gICAgICAgIGNsYXNzTmFtZT1cIm1vdmllc2xpc3QtcGxhY2Vob2xkZXJcIlxuICAgICAgICByZWFkeT17cmVxdWVzdFN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuU1VDQ0VTU31cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICB7bW92aWVzRGF0YS5tYXAoZnVuY3Rpb24gKG1vdmllKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8TW92aWVcbiAgICAgICAgICAgICAgICBrZXk9e21vdmllLmlkfVxuICAgICAgICAgICAgICAgIG1vdmllPXttb3ZpZX1cbiAgICAgICAgICAgICAgICBzaG93UmF0aW5ncz17c2hvd1JhdGluZ3N9XG4gICAgICAgICAgICAgICAgb25GYXZvcml0ZVRvZ2dsZT17KGRvbmVDYWxsYmFjaykgPT4ge1xuICAgICAgICAgICAgICAgICAgdXBkYXRlUmVjb3JkKFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgLi4ubW92aWUsXG4gICAgICAgICAgICAgICAgICAgICAgZmF2b3JpdGU6ICFtb3ZpZS5mYXZvcml0ZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZG9uZUNhbGxiYWNrXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUmVhY3RQbGFjZUhvbGRlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW92aWVzTGlzdDtcbiIsImZ1bmN0aW9uIE1vdmllc1Rvb2xiYXIoeyB0aGVtZSwgc2V0VGhlbWUsIHNob3dSYXRpbmdzLCBzZXRTaG93UmF0aW5ncyB9KSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidG9vbGJhciBkYXJrLXRoZW1lLWhlYWRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0b29scm93IGQtZmxleCBmbGV4LWNvbHVtbiBmbGV4LWxnLXJvd1wiPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBmbGV4LW1kLXJvd1wiPlxuICAgICAgICAgICAgICA8Yj5TaG93IFJhdGluZ3MmbmJzcDsmbmJzcDs8L2I+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmYXZcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXtzaG93UmF0aW5nc31cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0U2hvd1JhdGluZ3MoZXZlbnQudGFyZ2V0LmNoZWNrZWQpO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN3aXRjaFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGZsZXgtbWQtcm93IG1sLXNtLTUgbWwtMFwiPlxuICAgICAgICAgICAgICA8c3Ryb25nPlRoZW1lPC9zdHJvbmc+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxuICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCB0aGVtZVwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhlbWV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRoZW1lKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsaWdodFwiPkxpZ2h0PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGFya1wiPkRhcms8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllc1Rvb2xiYXI7XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBSRVFVRVNUX1NUQVRVUyA9IHtcbiAgTE9BRElORzogXCJsb2FkaW5nXCIsXG4gIFNVQ0NFU1M6IFwic3VjY2Vzc1wiLFxuICBGQUlMVVJFOiBcImZhaWx1cmVcIixcbn07XG5cbmZ1bmN0aW9uIHVzZVJlcXVlc3REZWxheShkZWxheVRpbWUgPSAxMDAwLCBpbml0aWFsRGF0YSA9IFtdKSB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3JlcXVlc3RTdGF0dXMsIHNldFJlcXVlc3RTdGF0dXNdID0gdXNlU3RhdGUoUkVRVUVTVF9TVEFUVVMuTE9BRElORyk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IGRlbGF5ID0gKG1zKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGRlbGF5RnVuYygpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGRlbGF5KGRlbGF5VGltZSk7XG4gICAgICAgIHNldFJlcXVlc3RTdGF0dXMoUkVRVUVTVF9TVEFUVVMuU1VDQ0VTUyk7XG4gICAgICAgIHNldERhdGEoaW5pdGlhbERhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBzZXRSZXF1ZXN0U3RhdHVzKFJFUVVFU1RfU1RBVFVTLkZBSUxVUkUpO1xuICAgICAgICBzZXRFcnJvcihlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZGVsYXlGdW5jKCk7XG4gIH0sIFtdKTtcblxuICBmdW5jdGlvbiB1cGRhdGVSZWNvcmQocmVjb3JkVXBkYXRlZCwgZG9uZUNhbGxiYWNrKSB7XG4gICAgY29uc3Qgb3JpZ2luYWxSZWNvcmRzID0gWy4uLmRhdGFdO1xuICAgIGNvbnN0IG5ld1JlY29yZHMgPSBkYXRhLm1hcChmdW5jdGlvbiAocmVjKSB7XG4gICAgICByZXR1cm4gcmVjLmlkID09PSByZWNvcmRVcGRhdGVkLmlkID8gcmVjb3JkVXBkYXRlZCA6IHJlYztcbiAgICB9KTtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGRlbGF5RnVuY3Rpb24oKSB7XG4gICAgICB0cnkge1xuICAgICAgICBzZXREYXRhKG5ld1JlY29yZHMpO1xuICAgICAgICBhd2FpdCBkZWxheShkZWxheVRpbWUpO1xuICAgICAgICBpZiAoZG9uZUNhbGxiYWNrKSB7XG4gICAgICAgICAgZG9uZUNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgdGhyb3duIGluc2lkZSBkZWxheUZ1bmN0aW9uXCIsIGVycm9yKTtcbiAgICAgICAgaWYgKGRvbmVDYWxsYmFjaykge1xuICAgICAgICAgIGRvbmVDYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICAgIHNldERhdGEob3JpZ2luYWxSZWNvcmRzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZGVsYXlGdW5jdGlvbigpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBkYXRhLFxuICAgIHJlcXVlc3RTdGF0dXMsXG4gICAgZXJyb3IsXG4gICAgdXBkYXRlUmVjb3JkLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VSZXF1ZXN0RGVsYXk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcGxhY2Vob2xkZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==
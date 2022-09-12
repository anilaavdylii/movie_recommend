(function() {
var exports = {};
exports.id = "pages/api/movies";
exports.ids = ["pages/api/movies"];
exports.modules = {

/***/ "./pages/api/movies/index.js":
/*!***********************************!*\
  !*** ./pages/api/movies/index.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ handler; }
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);



const {
  promisify
} = __webpack_require__(/*! util */ "util");

const readFile = promisify((fs__WEBPACK_IMPORTED_MODULE_1___default().readFile));

const delay = ms => new Promise(resolve => {
  setTimeout(resolve, ms);
});

async function handler(req, res) {
  //res.status(200).send(JSON.stringify(data, null, 2));
  const jsonFile = path__WEBPACK_IMPORTED_MODULE_0___default().resolve("./", "db.json");

  try {
    const readFileData = await readFile(jsonFile);
    await delay(1000);
    const movies = JSON.parse(readFileData).movies;

    if (movies) {
      res.setHeader("Content-Type", "application/json");
      res.status(200).send(JSON.stringify(movies, null, 2));
      console.log("GET /api/movies status: 200");
    }
  } catch (e) {
    console.log("/api/movies error", e);
    res.status(404).send("File Not Found on server");
  }
}

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ (function(module) {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("util");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/movies/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3ZpZV9yZWNvbW1lbmQvLi9wYWdlcy9hcGkvbW92aWVzL2luZGV4LmpzIiwid2VicGFjazovL21vdmllX3JlY29tbWVuZC9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vbW92aWVfcmVjb21tZW5kL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovL21vdmllX3JlY29tbWVuZC9leHRlcm5hbCBcInV0aWxcIiJdLCJuYW1lcyI6WyJwcm9taXNpZnkiLCJyZXF1aXJlIiwicmVhZEZpbGUiLCJmcyIsImRlbGF5IiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwianNvbkZpbGUiLCJwYXRoIiwicmVhZEZpbGVEYXRhIiwibW92aWVzIiwiSlNPTiIsInBhcnNlIiwic2V0SGVhZGVyIiwic3RhdHVzIiwic2VuZCIsInN0cmluZ2lmeSIsImNvbnNvbGUiLCJsb2ciLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU07QUFBRUE7QUFBRixJQUFnQkMsbUJBQU8sQ0FBQyxrQkFBRCxDQUE3Qjs7QUFDQSxNQUFNQyxRQUFRLEdBQUdGLFNBQVMsQ0FBQ0csb0RBQUQsQ0FBMUI7O0FBQ0EsTUFBTUMsS0FBSyxHQUFJQyxFQUFELElBQ1osSUFBSUMsT0FBSixDQUFhQyxPQUFELElBQWE7QUFDdkJDLFlBQVUsQ0FBQ0QsT0FBRCxFQUFVRixFQUFWLENBQVY7QUFDRCxDQUZELENBREY7O0FBS2UsZUFBZUksT0FBZixDQUF1QkMsR0FBdkIsRUFBNEJDLEdBQTVCLEVBQWlDO0FBQzlDO0FBRUEsUUFBTUMsUUFBUSxHQUFHQyxtREFBQSxDQUFhLElBQWIsRUFBbUIsU0FBbkIsQ0FBakI7O0FBQ0EsTUFBSTtBQUNGLFVBQU1DLFlBQVksR0FBRyxNQUFNWixRQUFRLENBQUNVLFFBQUQsQ0FBbkM7QUFDQSxVQUFNUixLQUFLLENBQUMsSUFBRCxDQUFYO0FBQ0EsVUFBTVcsTUFBTSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsWUFBWCxFQUF5QkMsTUFBeEM7O0FBQ0EsUUFBSUEsTUFBSixFQUFZO0FBQ1ZKLFNBQUcsQ0FBQ08sU0FBSixDQUFjLGNBQWQsRUFBOEIsa0JBQTlCO0FBQ0FQLFNBQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCSixJQUFJLENBQUNLLFNBQUwsQ0FBZU4sTUFBZixFQUF1QixJQUF2QixFQUE2QixDQUE3QixDQUFyQjtBQUNBTyxhQUFPLENBQUNDLEdBQVIsQ0FBWSw2QkFBWjtBQUNEO0FBQ0YsR0FURCxDQVNFLE9BQU9DLENBQVAsRUFBVTtBQUNWRixXQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWixFQUFpQ0MsQ0FBakM7QUFDQWIsT0FBRyxDQUFDUSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUIsMEJBQXJCO0FBQ0Q7QUFDRixDOzs7Ozs7Ozs7OztBQzNCRCxnQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9hcGkvbW92aWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xyXG5cclxuY29uc3QgeyBwcm9taXNpZnkgfSA9IHJlcXVpcmUoXCJ1dGlsXCIpO1xyXG5jb25zdCByZWFkRmlsZSA9IHByb21pc2lmeShmcy5yZWFkRmlsZSk7XHJcbmNvbnN0IGRlbGF5ID0gKG1zKSA9PlxyXG4gIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKTtcclxuICB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAvL3Jlcy5zdGF0dXMoMjAwKS5zZW5kKEpTT04uc3RyaW5naWZ5KGRhdGEsIG51bGwsIDIpKTtcclxuXHJcbiAgY29uc3QganNvbkZpbGUgPSBwYXRoLnJlc29sdmUoXCIuL1wiLCBcImRiLmpzb25cIik7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlYWRGaWxlRGF0YSA9IGF3YWl0IHJlYWRGaWxlKGpzb25GaWxlKTtcclxuICAgIGF3YWl0IGRlbGF5KDEwMDApO1xyXG4gICAgY29uc3QgbW92aWVzID0gSlNPTi5wYXJzZShyZWFkRmlsZURhdGEpLm1vdmllcztcclxuICAgIGlmIChtb3ZpZXMpIHtcclxuICAgICAgcmVzLnNldEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKEpTT04uc3RyaW5naWZ5KG1vdmllcywgbnVsbCwgMikpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkdFVCAvYXBpL21vdmllcyBzdGF0dXM6IDIwMFwiKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIi9hcGkvbW92aWVzIGVycm9yXCIsIGUpO1xyXG4gICAgcmVzLnN0YXR1cyg0MDQpLnNlbmQoXCJGaWxlIE5vdCBGb3VuZCBvbiBzZXJ2ZXJcIik7XHJcbiAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV0aWxcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=
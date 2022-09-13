(function() {
var exports = {};
exports.id = "pages/api/movies/[id]";
exports.ids = ["pages/api/movies/[id]"];
exports.modules = {

/***/ "./pages/api/movies/[id].js":
/*!**********************************!*\
  !*** ./pages/api/movies/[id].js ***!
  \**********************************/
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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const {
  promisify
} = __webpack_require__(/*! util */ "util");

const readFile = promisify((fs__WEBPACK_IMPORTED_MODULE_1___default().readFile));
const writeFile = promisify((fs__WEBPACK_IMPORTED_MODULE_1___default().writeFile));

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function handler(req, res) {
  //res.status(200).send(JSON.stringify(movieData,null,2));
  const method = req === null || req === void 0 ? void 0 : req.method;
  const id = parseInt(req === null || req === void 0 ? void 0 : req.query.id);
  const recordFromBody = req === null || req === void 0 ? void 0 : req.body;
  const jsonFile = path__WEBPACK_IMPORTED_MODULE_0___default().resolve("./", "moviedb.json");

  switch (method) {
    case "POST":
      await postMethod();
      break;

    case "PUT":
      await putMethod();
      break;

    case "DELETE":
      await deleteMethod();
      break;

    default:
      res.status(501).send(`Method ${method} not implemented`);
      console.log(`Method ${method} not implemented`);
  }

  async function putMethod() {
    try {
      const readFileData = await readFile(jsonFile);
      await delay(1000);
      const movies = JSON.parse(readFileData).movies;

      if (!movies) {
        res.status(404).send("Error: Request failed with status code 404");
      } else {
        const newMoviesArray = movies.map(function (rec) {
          return rec.id == id ? recordFromBody : rec;
        });
        writeFile(jsonFile, JSON.stringify({
          movies: newMoviesArray
        }, null, 2));
        res.setHeader("Content-Type", "application/json");
        res.status(200).send(JSON.stringify(recordFromBody, null, 2));
        console.log(`PUT /api/movies/${id}  status: 200`);
      }
    } catch (e) {
      res.status(500).send(`PUT /api/movies/${id}  status: 500 unexpected error`);
      console.log(`PUT /api/movies/${id}  status: 200`, e);
    }
  }

  async function deleteMethod() {
    try {
      const readFileData = await readFile(jsonFile);
      await delay(1000);
      const movies = JSON.parse(readFileData).movies;

      if (!movies) {
        res.status(404).send("Error: Request failed with status code 404");
      } else {
        const newMoviesArray = movies.filter(function (rec) {
          return rec.id != id;
        });
        writeFile(jsonFile, JSON.stringify({
          movies: newMoviesArray
        }, null, 2));
        res.setHeader("Content-Type", "application/json");
        res.status(200).send(JSON.stringify(movies.find(rec => rec.id == id), null, 2));
        console.log(`DELETE /api/movies/${id}  status: 200`);
      }
    } catch (e) {
      res.status(500).send(`DELETE /api/movies/${id}  status: 500 unexpected error`);
      console.log(`DELETE /api/movies/${id}  status: 200`, e);
    }
  }

  async function postMethod() {
    try {
      const readFileData = await readFile(jsonFile);
      await delay(1000);
      const movies = JSON.parse(readFileData).movies;

      if (!movies) {
        res.status(404).send("Error: Request failed with status code 404");
      } else {
        const idNew = movies.reduce((accumulator, currentValue) => {
          const idCurrent = parseInt(currentValue.id);
          return idCurrent > accumulator ? idCurrent : accumulator;
        }, 0) + 1;

        const newMovieRec = _objectSpread(_objectSpread({}, recordFromBody), {}, {
          id: idNew.toString()
        });

        const newMoviesArray = [newMovieRec, ...movies];
        writeFile(jsonFile, JSON.stringify({
          movies: newMoviesArray
        }, null, 2));
        res.setHeader("Content-Type", "application/json");
        res.status(200).send(JSON.stringify(newMovieRec, null, 2));
        console.log(`POST /api/movies/${id}  status: 200`);
      }
    } catch (e) {
      res.status(500).send(`POST /api/movies/${id}  status: 500 unexpected error`);
      console.log(`POST /api/movies/${id}  status: 200`, e);
    }
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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/movies/[id].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3ZpZV9yZWNvbW1lbmQvLi9wYWdlcy9hcGkvbW92aWVzL1tpZF0uanMiLCJ3ZWJwYWNrOi8vbW92aWVfcmVjb21tZW5kL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly9tb3ZpZV9yZWNvbW1lbmQvZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vbW92aWVfcmVjb21tZW5kL2V4dGVybmFsIFwidXRpbFwiIl0sIm5hbWVzIjpbInByb21pc2lmeSIsInJlcXVpcmUiLCJyZWFkRmlsZSIsImZzIiwid3JpdGVGaWxlIiwiZGVsYXkiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJpZCIsInBhcnNlSW50IiwicXVlcnkiLCJyZWNvcmRGcm9tQm9keSIsImJvZHkiLCJqc29uRmlsZSIsInBhdGgiLCJwb3N0TWV0aG9kIiwicHV0TWV0aG9kIiwiZGVsZXRlTWV0aG9kIiwic3RhdHVzIiwic2VuZCIsImNvbnNvbGUiLCJsb2ciLCJyZWFkRmlsZURhdGEiLCJtb3ZpZXMiLCJKU09OIiwicGFyc2UiLCJuZXdNb3ZpZXNBcnJheSIsIm1hcCIsInJlYyIsInN0cmluZ2lmeSIsInNldEhlYWRlciIsImUiLCJmaWx0ZXIiLCJmaW5kIiwiaWROZXciLCJyZWR1Y2UiLCJhY2N1bXVsYXRvciIsImN1cnJlbnRWYWx1ZSIsImlkQ3VycmVudCIsIm5ld01vdmllUmVjIiwidG9TdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7O0FBRUEsTUFBTTtBQUFFQTtBQUFGLElBQWdCQyxtQkFBTyxDQUFDLGtCQUFELENBQTdCOztBQUNBLE1BQU1DLFFBQVEsR0FBR0YsU0FBUyxDQUFDRyxvREFBRCxDQUExQjtBQUNBLE1BQU1DLFNBQVMsR0FBR0osU0FBUyxDQUFDRyxxREFBRCxDQUEzQjs7QUFDQSxNQUFNRSxLQUFLLEdBQUlD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YUFBTyxDQUFDQyxHQUFSLENBQWEsb0JBQW1CYixFQUFHLGVBQW5DLEVBQW1EdUIsQ0FBbkQ7QUFDRDtBQUNGO0FBQ0YsQzs7Ozs7Ozs7Ozs7QUM1SEQsZ0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoicGFnZXMvYXBpL21vdmllcy9baWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcclxuXHJcbmNvbnN0IHsgcHJvbWlzaWZ5IH0gPSByZXF1aXJlKFwidXRpbFwiKTtcclxuY29uc3QgcmVhZEZpbGUgPSBwcm9taXNpZnkoZnMucmVhZEZpbGUpO1xyXG5jb25zdCB3cml0ZUZpbGUgPSBwcm9taXNpZnkoZnMud3JpdGVGaWxlKTtcclxuY29uc3QgZGVsYXkgPSAobXMpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgLy9yZXMuc3RhdHVzKDIwMCkuc2VuZChKU09OLnN0cmluZ2lmeShtb3ZpZURhdGEsbnVsbCwyKSk7XHJcblxyXG4gIGNvbnN0IG1ldGhvZCA9IHJlcT8ubWV0aG9kO1xyXG4gIGNvbnN0IGlkID0gcGFyc2VJbnQocmVxPy5xdWVyeS5pZCk7XHJcbiAgY29uc3QgcmVjb3JkRnJvbUJvZHkgPSByZXE/LmJvZHk7XHJcbiAgY29uc3QganNvbkZpbGUgPSBwYXRoLnJlc29sdmUoXCIuL1wiLCBcIm1vdmllZGIuanNvblwiKTtcclxuXHJcbiAgc3dpdGNoIChtZXRob2QpIHtcclxuICAgIGNhc2UgXCJQT1NUXCI6XHJcbiAgICAgIGF3YWl0IHBvc3RNZXRob2QoKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiUFVUXCI6XHJcbiAgICAgIGF3YWl0IHB1dE1ldGhvZCgpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJERUxFVEVcIjpcclxuICAgICAgYXdhaXQgZGVsZXRlTWV0aG9kKCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmVzLnN0YXR1cyg1MDEpLnNlbmQoYE1ldGhvZCAke21ldGhvZH0gbm90IGltcGxlbWVudGVkYCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBNZXRob2QgJHttZXRob2R9IG5vdCBpbXBsZW1lbnRlZGApO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gcHV0TWV0aG9kKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVhZEZpbGVEYXRhID0gYXdhaXQgcmVhZEZpbGUoanNvbkZpbGUpO1xyXG4gICAgICBhd2FpdCBkZWxheSgxMDAwKTtcclxuICAgICAgY29uc3QgbW92aWVzID0gSlNPTi5wYXJzZShyZWFkRmlsZURhdGEpLm1vdmllcztcclxuICAgICAgaWYgKCFtb3ZpZXMpIHtcclxuICAgICAgICByZXMuc3RhdHVzKDQwNCkuc2VuZChcIkVycm9yOiBSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlIDQwNFwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBuZXdNb3ZpZXNBcnJheSA9IG1vdmllcy5tYXAoZnVuY3Rpb24gKHJlYykge1xyXG4gICAgICAgICAgcmV0dXJuIHJlYy5pZCA9PSBpZCA/IHJlY29yZEZyb21Cb2R5IDogcmVjO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHdyaXRlRmlsZShcclxuICAgICAgICAgIGpzb25GaWxlLFxyXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyBtb3ZpZXM6IG5ld01vdmllc0FycmF5IH0sIG51bGwsIDIpXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXMuc2V0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChKU09OLnN0cmluZ2lmeShyZWNvcmRGcm9tQm9keSwgbnVsbCwgMikpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBQVVQgL2FwaS9tb3ZpZXMvJHtpZH0gIHN0YXR1czogMjAwYCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmVzXHJcbiAgICAgICAgLnN0YXR1cyg1MDApXHJcbiAgICAgICAgLnNlbmQoYFBVVCAvYXBpL21vdmllcy8ke2lkfSAgc3RhdHVzOiA1MDAgdW5leHBlY3RlZCBlcnJvcmApO1xyXG4gICAgICBjb25zb2xlLmxvZyhgUFVUIC9hcGkvbW92aWVzLyR7aWR9ICBzdGF0dXM6IDIwMGAsIGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gZGVsZXRlTWV0aG9kKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVhZEZpbGVEYXRhID0gYXdhaXQgcmVhZEZpbGUoanNvbkZpbGUpO1xyXG4gICAgICBhd2FpdCBkZWxheSgxMDAwKTtcclxuICAgICAgY29uc3QgbW92aWVzID0gSlNPTi5wYXJzZShyZWFkRmlsZURhdGEpLm1vdmllcztcclxuICAgICAgaWYgKCFtb3ZpZXMpIHtcclxuICAgICAgICByZXMuc3RhdHVzKDQwNCkuc2VuZChcIkVycm9yOiBSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlIDQwNFwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBuZXdNb3ZpZXNBcnJheSA9IG1vdmllcy5maWx0ZXIoZnVuY3Rpb24gKHJlYykge1xyXG4gICAgICAgICAgcmV0dXJuIHJlYy5pZCAhPSBpZDtcclxuICAgICAgICB9KTtcclxuICAgICAgICB3cml0ZUZpbGUoXHJcbiAgICAgICAgICBqc29uRmlsZSxcclxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgbW92aWVzOiBuZXdNb3ZpZXNBcnJheSB9LCBudWxsLCAyKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmVzLnNldEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoXHJcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeShcclxuICAgICAgICAgICAgbW92aWVzLmZpbmQoKHJlYykgPT4gcmVjLmlkID09IGlkKSxcclxuICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgMlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYERFTEVURSAvYXBpL21vdmllcy8ke2lkfSAgc3RhdHVzOiAyMDBgKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICByZXNcclxuICAgICAgICAuc3RhdHVzKDUwMClcclxuICAgICAgICAuc2VuZChgREVMRVRFIC9hcGkvbW92aWVzLyR7aWR9ICBzdGF0dXM6IDUwMCB1bmV4cGVjdGVkIGVycm9yYCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBERUxFVEUgL2FwaS9tb3ZpZXMvJHtpZH0gIHN0YXR1czogMjAwYCwgZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBwb3N0TWV0aG9kKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVhZEZpbGVEYXRhID0gYXdhaXQgcmVhZEZpbGUoanNvbkZpbGUpO1xyXG4gICAgICBhd2FpdCBkZWxheSgxMDAwKTtcclxuICAgICAgY29uc3QgbW92aWVzID0gSlNPTi5wYXJzZShyZWFkRmlsZURhdGEpLm1vdmllcztcclxuICAgICAgaWYgKCFtb3ZpZXMpIHtcclxuICAgICAgICByZXMuc3RhdHVzKDQwNCkuc2VuZChcIkVycm9yOiBSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlIDQwNFwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBpZE5ldyA9XHJcbiAgICAgICAgbW92aWVzLnJlZHVjZSgoYWNjdW11bGF0b3IsIGN1cnJlbnRWYWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpZEN1cnJlbnQgPSBwYXJzZUludChjdXJyZW50VmFsdWUuaWQpO1xyXG4gICAgICAgICAgICByZXR1cm4gaWRDdXJyZW50ID4gYWNjdW11bGF0b3IgPyBpZEN1cnJlbnQgOiBhY2N1bXVsYXRvcjtcclxuICAgICAgICAgIH0sIDApICsgMTtcclxuXHJcbiAgICAgICAgY29uc3QgbmV3TW92aWVSZWMgPSB7IC4uLnJlY29yZEZyb21Cb2R5LCBpZDogaWROZXcudG9TdHJpbmcoKSB9O1xyXG5cclxuICAgICAgICBjb25zdCBuZXdNb3ZpZXNBcnJheSA9IFtuZXdNb3ZpZVJlYywgLi4ubW92aWVzXTtcclxuICAgICAgICB3cml0ZUZpbGUoXHJcbiAgICAgICAgICBqc29uRmlsZSxcclxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgbW92aWVzOiBuZXdNb3ZpZXNBcnJheSB9LCBudWxsLCAyKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmVzLnNldEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoSlNPTi5zdHJpbmdpZnkobmV3TW92aWVSZWMsIG51bGwsIDIpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgUE9TVCAvYXBpL21vdmllcy8ke2lkfSAgc3RhdHVzOiAyMDBgKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICByZXNcclxuICAgICAgICAuc3RhdHVzKDUwMClcclxuICAgICAgICAuc2VuZChgUE9TVCAvYXBpL21vdmllcy8ke2lkfSAgc3RhdHVzOiA1MDAgdW5leHBlY3RlZCBlcnJvcmApO1xyXG4gICAgICBjb25zb2xlLmxvZyhgUE9TVCAvYXBpL21vdmllcy8ke2lkfSAgc3RhdHVzOiAyMDBgLCBlKTtcclxuICAgIH1cclxuICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXRpbFwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==
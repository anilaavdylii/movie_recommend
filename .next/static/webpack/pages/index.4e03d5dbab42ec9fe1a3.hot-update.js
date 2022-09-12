self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/hooks/useRequestDelay.js":
/*!**************************************!*\
  !*** ./src/hooks/useRequestDelay.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "REQUEST_STATUS": function() { return /* binding */ REQUEST_STATUS; }
/* harmony export */ });
/* harmony import */ var C_Users_hp_Desktop_react_movie_recommend_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_hp_Desktop_react_movie_recommend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_hp_Desktop_react_movie_recommend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_hp_Desktop_react_movie_recommend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_hp_Desktop_react_movie_recommend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _s = $RefreshSig$();


var REQUEST_STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  FAILURE: "failure"
};

function useRequestDelay() {
  _s();

  var delayTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;
  var initialData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(REQUEST_STATUS.LOADING),
      requestStatus = _useState2[0],
      setRequestStatus = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      error = _useState3[0],
      setError = _useState3[1];

  var delay = function delay(ms) {
    return new Promise(function (resolve) {
      return setTimeout(resolve, ms);
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    function delayFunc() {
      return _delayFunc.apply(this, arguments);
    }

    function _delayFunc() {
      _delayFunc = (0,C_Users_hp_Desktop_react_movie_recommend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_hp_Desktop_react_movie_recommend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
        return C_Users_hp_Desktop_react_movie_recommend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return delay(delayTime);

              case 3:
                setRequestStatus(REQUEST_STATUS.SUCCESS);
                setData(initialData);
                _context.next = 11;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                setRequestStatus(REQUEST_STATUS.FAILURE);
                setError(_context.t0);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));
      return _delayFunc.apply(this, arguments);
    }

    delayFunc();
  }, []);

  function updateRecord(record, doneCallback) {
    var originalRecords = (0,C_Users_hp_Desktop_react_movie_recommend_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(data);

    var newRecords = data.map(function (rec) {
      return rec.id === recordUpdated.id ? recordUpdated : rec;
    });

    function delayFunction() {
      return _delayFunction.apply(this, arguments);
    }

    function _delayFunction() {
      _delayFunction = (0,C_Users_hp_Desktop_react_movie_recommend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_hp_Desktop_react_movie_recommend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
        return C_Users_hp_Desktop_react_movie_recommend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                setData(newRecords);
                _context2.next = 4;
                return delay(delayTime);

              case 4:
                if (doneCallback) {
                  doneCallback();
                }

                _context2.next = 12;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                console.log("error thrown inside delayFunction", _context2.t0);

                if (doneCallback) {
                  doneCallback();
                }

                setData(originalRecords);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }));
      return _delayFunction.apply(this, arguments);
    }

    delayFunction();
  }

  function insertRecord(record, doneCallback) {
    var originalRecords = (0,C_Users_hp_Desktop_react_movie_recommend_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(data);

    var newRecords = [record].concat((0,C_Users_hp_Desktop_react_movie_recommend_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(data));

    function delayFunction() {
      return _delayFunction2.apply(this, arguments);
    }

    function _delayFunction2() {
      _delayFunction2 = (0,C_Users_hp_Desktop_react_movie_recommend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_hp_Desktop_react_movie_recommend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {
        return C_Users_hp_Desktop_react_movie_recommend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                setData(newRecords);
                _context3.next = 4;
                return delay(delayTime);

              case 4:
                if (doneCallback) {
                  doneCallback();
                }

                _context3.next = 12;
                break;

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);
                console.log("error thrown inside delayFunction", _context3.t0);

                if (doneCallback) {
                  doneCallback();
                }

                setData(originalRecords);

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 7]]);
      }));
      return _delayFunction2.apply(this, arguments);
    }

    delayFunction();
  }

  function deleteRecord(record, doneCallback) {
    var originalRecords = (0,C_Users_hp_Desktop_react_movie_recommend_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(data);

    var newRecords = [record].concat((0,C_Users_hp_Desktop_react_movie_recommend_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(data));

    function delayFunction() {
      return _delayFunction3.apply(this, arguments);
    }

    function _delayFunction3() {
      _delayFunction3 = (0,C_Users_hp_Desktop_react_movie_recommend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_hp_Desktop_react_movie_recommend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4() {
        return C_Users_hp_Desktop_react_movie_recommend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                setData(newRecords);
                _context4.next = 4;
                return delay(delayTime);

              case 4:
                if (doneCallback) {
                  doneCallback();
                }

                _context4.next = 12;
                break;

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](0);
                console.log("error thrown inside delayFunction", _context4.t0);

                if (doneCallback) {
                  doneCallback();
                }

                setData(originalRecords);

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 7]]);
      }));
      return _delayFunction3.apply(this, arguments);
    }

    delayFunction();
  }

  return {
    data: data,
    requestStatus: requestStatus,
    error: error,
    updateRecord: updateRecord
  };
}

_s(useRequestDelay, "uvvVBilWoUeFPXc52bF5AHAvR6Y=");

/* harmony default export */ __webpack_exports__["default"] = (useRequestDelay);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZVJlcXVlc3REZWxheS5qcyJdLCJuYW1lcyI6WyJSRVFVRVNUX1NUQVRVUyIsIkxPQURJTkciLCJTVUNDRVNTIiwiRkFJTFVSRSIsInVzZVJlcXVlc3REZWxheSIsImRlbGF5VGltZSIsImluaXRpYWxEYXRhIiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsInJlcXVlc3RTdGF0dXMiLCJzZXRSZXF1ZXN0U3RhdHVzIiwiZXJyb3IiLCJzZXRFcnJvciIsImRlbGF5IiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJ1c2VFZmZlY3QiLCJkZWxheUZ1bmMiLCJ1cGRhdGVSZWNvcmQiLCJyZWNvcmQiLCJkb25lQ2FsbGJhY2siLCJvcmlnaW5hbFJlY29yZHMiLCJuZXdSZWNvcmRzIiwibWFwIiwicmVjIiwiaWQiLCJyZWNvcmRVcGRhdGVkIiwiZGVsYXlGdW5jdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJpbnNlcnRSZWNvcmQiLCJkZWxldGVSZWNvcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxjQUFjLEdBQUc7QUFDNUJDLFNBQU8sRUFBRSxTQURtQjtBQUU1QkMsU0FBTyxFQUFFLFNBRm1CO0FBRzVCQyxTQUFPLEVBQUU7QUFIbUIsQ0FBdkI7O0FBTVAsU0FBU0MsZUFBVCxHQUE2RDtBQUFBOztBQUFBLE1BQXBDQyxTQUFvQyx1RUFBeEIsSUFBd0I7QUFBQSxNQUFsQkMsV0FBa0IsdUVBQUosRUFBSTs7QUFBQSxrQkFDbkNDLCtDQUFRLENBQUMsRUFBRCxDQUQyQjtBQUFBLE1BQ3BEQyxJQURvRDtBQUFBLE1BQzlDQyxPQUQ4Qzs7QUFBQSxtQkFFakJGLCtDQUFRLENBQUNQLGNBQWMsQ0FBQ0MsT0FBaEIsQ0FGUztBQUFBLE1BRXBEUyxhQUZvRDtBQUFBLE1BRXJDQyxnQkFGcUM7O0FBQUEsbUJBR2pDSiwrQ0FBUSxDQUFD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MUMsUUFBTUMsZUFBZSxHQUFHLDJJQUFJaEIsSUFBUCxDQUFyQjs7QUFDQSxRQUFNaUIsVUFBVSxJQUFJSCxNQUFKLG9KQUFlZCxJQUFmLEVBQWhCOztBQUYwQyxhQUkzQnNCLGFBSjJCO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDRTQUkxQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFSXJCLHVCQUFPLENBQUNnQixVQUFELENBQVA7QUFGSjtBQUFBLHVCQUdVWCxLQUFLLENBQUNULFNBQUQsQ0FIZjs7QUFBQTtBQUlJLG9CQUFJa0IsWUFBSixFQUFrQjtBQUNoQkEsOEJBQVk7QUFDYjs7QUFOTDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVFJUSx1QkFBTyxDQUFDQyxHQUFSLENBQVksbUNBQVo7O0FBQ0Esb0JBQUlULFlBQUosRUFBa0I7QUFDaEJBLDhCQUFZO0FBQ2I7O0FBQ0RkLHVCQUFPLENBQUNlLGVBQUQsQ0FBUDs7QUFaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUowQztBQUFBO0FBQUE7O0FBbUIxQ00saUJBQWE7QUFDZDs7QUFFRCxTQUFPO0FBQ0x0QixRQUFJLEVBQUpBLElBREs7QUFFTEUsaUJBQWEsRUFBYkEsYUFGSztBQUdMRSxTQUFLLEVBQUxBLEtBSEs7QUFJTFMsZ0JBQVksRUFBWkE7QUFKSyxHQUFQO0FBTUQ7O0dBN0ZRakIsZTs7QUErRlQsK0RBQWVBLGVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGUwM2Q1ZGJhYjQyZWM5ZmUxYTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfU1RBVFVTID0ge1xuICBMT0FESU5HOiBcImxvYWRpbmdcIixcbiAgU1VDQ0VTUzogXCJzdWNjZXNzXCIsXG4gIEZBSUxVUkU6IFwiZmFpbHVyZVwiLFxufTtcblxuZnVuY3Rpb24gdXNlUmVxdWVzdERlbGF5KGRlbGF5VGltZSA9IDEwMDAsIGluaXRpYWxEYXRhID0gW10pIHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbcmVxdWVzdFN0YXR1cywgc2V0UmVxdWVzdFN0YXR1c10gPSB1c2VTdGF0ZShSRVFVRVNUX1NUQVRVUy5MT0FESU5HKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgZGVsYXkgPSAobXMpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZGVsYXlGdW5jKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZGVsYXkoZGVsYXlUaW1lKTtcbiAgICAgICAgc2V0UmVxdWVzdFN0YXR1cyhSRVFVRVNUX1NUQVRVUy5TVUNDRVNTKTtcbiAgICAgICAgc2V0RGF0YShpbml0aWFsRGF0YSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHNldFJlcXVlc3RTdGF0dXMoUkVRVUVTVF9TVEFUVVMuRkFJTFVSRSk7XG4gICAgICAgIHNldEVycm9yKGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBkZWxheUZ1bmMoKTtcbiAgfSwgW10pO1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZVJlY29yZChyZWNvcmQsIGRvbmVDYWxsYmFjaykge1xuICAgIGNvbnN0IG9yaWdpbmFsUmVjb3JkcyA9IFsuLi5kYXRhXTtcbiAgICBjb25zdCBuZXdSZWNvcmRzID0gZGF0YS5tYXAoZnVuY3Rpb24gKHJlYykge1xuICAgICAgcmV0dXJuIHJlYy5pZCA9PT0gcmVjb3JkVXBkYXRlZC5pZCA/IHJlY29yZFVwZGF0ZWQgOiByZWM7XG4gICAgfSk7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBkZWxheUZ1bmN0aW9uKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0RGF0YShuZXdSZWNvcmRzKTtcbiAgICAgICAgYXdhaXQgZGVsYXkoZGVsYXlUaW1lKTtcbiAgICAgICAgaWYgKGRvbmVDYWxsYmFjaykge1xuICAgICAgICAgIGRvbmVDYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIHRocm93biBpbnNpZGUgZGVsYXlGdW5jdGlvblwiLCBlcnJvcik7XG4gICAgICAgIGlmIChkb25lQ2FsbGJhY2spIHtcbiAgICAgICAgICBkb25lQ2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgICBzZXREYXRhKG9yaWdpbmFsUmVjb3Jkcyk7XG4gICAgICB9XG4gICAgfVxuICAgIGRlbGF5RnVuY3Rpb24oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluc2VydFJlY29yZChyZWNvcmQsIGRvbmVDYWxsYmFjaykge1xuICAgIGNvbnN0IG9yaWdpbmFsUmVjb3JkcyA9IFsuLi5kYXRhXTtcbiAgICBjb25zdCBuZXdSZWNvcmRzID0gW3JlY29yZCwgLi4uZGF0YV07XG5cbiAgICBhc3luYyBmdW5jdGlvbiBkZWxheUZ1bmN0aW9uKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0RGF0YShuZXdSZWNvcmRzKTtcbiAgICAgICAgYXdhaXQgZGVsYXkoZGVsYXlUaW1lKTtcbiAgICAgICAgaWYgKGRvbmVDYWxsYmFjaykge1xuICAgICAgICAgIGRvbmVDYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIHRocm93biBpbnNpZGUgZGVsYXlGdW5jdGlvblwiLCBlcnJvcik7XG4gICAgICAgIGlmIChkb25lQ2FsbGJhY2spIHtcbiAgICAgICAgICBkb25lQ2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgICBzZXREYXRhKG9yaWdpbmFsUmVjb3Jkcyk7XG4gICAgICB9XG4gICAgfVxuICAgIGRlbGF5RnVuY3Rpb24oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbGV0ZVJlY29yZChyZWNvcmQsIGRvbmVDYWxsYmFjaykge1xuICAgIGNvbnN0IG9yaWdpbmFsUmVjb3JkcyA9IFsuLi5kYXRhXTtcbiAgICBjb25zdCBuZXdSZWNvcmRzID0gW3JlY29yZCwgLi4uZGF0YV07XG5cbiAgICBhc3luYyBmdW5jdGlvbiBkZWxheUZ1bmN0aW9uKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0RGF0YShuZXdSZWNvcmRzKTtcbiAgICAgICAgYXdhaXQgZGVsYXkoZGVsYXlUaW1lKTtcbiAgICAgICAgaWYgKGRvbmVDYWxsYmFjaykge1xuICAgICAgICAgIGRvbmVDYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIHRocm93biBpbnNpZGUgZGVsYXlGdW5jdGlvblwiLCBlcnJvcik7XG4gICAgICAgIGlmIChkb25lQ2FsbGJhY2spIHtcbiAgICAgICAgICBkb25lQ2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgICBzZXREYXRhKG9yaWdpbmFsUmVjb3Jkcyk7XG4gICAgICB9XG4gICAgfVxuICAgIGRlbGF5RnVuY3Rpb24oKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZGF0YSxcbiAgICByZXF1ZXN0U3RhdHVzLFxuICAgIGVycm9yLFxuICAgIHVwZGF0ZVJlY29yZCxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlUmVxdWVzdERlbGF5O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
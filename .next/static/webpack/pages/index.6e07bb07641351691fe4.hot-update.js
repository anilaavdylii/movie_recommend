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

    var newRecords = data.filter(function (rec) {
      return rec.id != re;
    });

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

/* harmony default export */ __webpack_exports__["default"] = (useRequestDela);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZVJlcXVlc3REZWxheS5qcyJdLCJuYW1lcyI6WyJSRVFVRVNUX1NUQVRVUyIsIkxPQURJTkciLCJTVUNDRVNTIiwiRkFJTFVSRSIsInVzZVJlcXVlc3REZWxheSIsImRlbGF5VGltZSIsImluaXRpYWxEYXRhIiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsInJlcXVlc3RTdGF0dXMiLCJzZXRSZXF1ZXN0U3RhdHVzIiwiZXJyb3IiLCJzZXRFcnJvciIsImRlbGF5IiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJ1c2VFZmZlY3QiLCJkZWxheUZ1bmMiLCJ1cGRhdGVSZWNvcmQiLCJyZWNvcmQiLCJkb25lQ2FsbGJhY2siLCJvcmlnaW5hbFJlY29yZHMiLCJuZXdSZWNvcmRzIiwibWFwIiwicmVjIiwiaWQiLCJyZWNvcmRVcGRhdGVkIiwiZGVsYXlGdW5jdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJpbnNlcnRSZWNvcmQiLCJkZWxldGVSZWNvcmQiLCJmaWx0ZXIiLCJyZSIsInVzZVJlcXVlc3REZWxhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsY0FBYyxHQUFHO0FBQzVCQyxTQUFPLEVBQUUsU0FEbUI7QUFFNUJDLFNBQU8sRUFBRSxTQUZtQjtBQUc1QkMsU0FBTyxFQUFFO0FBSG1CLENBQXZCOztBQU1QLFNBQVNDLGVBQVQsR0FBNkQ7QUFBQTs7QUFBQSxNQUFwQ0MsU0FBb0MsdUVBQXhCLElBQXdCO0FBQUEsTUFBbEJDLFdBQWtCLHVFQUFKLEVBQUk7O0FBQUEsa0JBQ25DQywrQ0FBUSxDQUFDLEVBQUQsQ0FEMkI7QUFBQSxNQUNwREMsSUFEb0Q7QUFBQSxNQUM5Q0MsT0FEOEM7O0FBQUEsbUJBRWpCRiwrQ0FBUSxDQUFDUCxjQUFjLENBQUNDLE9BQWhCLENBRlM7QUFBQSxNQUVwRFMsYUFGb0Q7QUFBQSxNQUVyQ0Ms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QlosTUFBdEIsRUFBOEJDLFlBQTlCLEVBQTRDO0FBQzFDLFFBQU1DLGVBQWUsR0FBRywySUFBSWhCLElBQVAsQ0FBckI7O0FBQ0EsUUFBTWlCLFVBQVUsR0FBR2pCLElBQUksQ0FBQzJCLE1BQUwsQ0FBWSxVQUFVUixHQUFWLEVBQWM7QUFDM0MsYUFBT0EsR0FBRyxDQUFDQyxFQUFKLElBQVVRLEVBQWpCO0FBQ0QsS0FGa0IsQ0FBbkI7O0FBRjBDLGFBTTNCTixhQU4yQjtBQUFBO0FBQUE7O0FBQUE7QUFBQSw0U0FNMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUlyQix1QkFBTyxDQUFDZ0IsVUFBRCxDQUFQO0FBRko7QUFBQSx1QkFHVVgsS0FBSyxDQUFDVCxTQUFELENBSGY7O0FBQUE7QUFJSSxvQkFBSWtCLFlBQUosRUFBa0I7QUFDaEJBLDhCQUFZO0FBQ2I7O0FBTkw7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFRSVEsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZLG1DQUFaOztBQUNBLG9CQUFJVCxZQUFKLEVBQWtCO0FBQ2hCQSw4QkFBWTtBQUNiOztBQUNEZCx1QkFBTyxDQUFDZSxlQUFELENBQVA7O0FBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FOMEM7QUFBQTtBQUFBOztBQXFCMUNNLGlCQUFhO0FBQ2Q7O0FBRUQsU0FBTztBQUNMdEIsUUFBSSxFQUFKQSxJQURLO0FBRUxFLGlCQUFhLEVBQWJBLGFBRks7QUFHTEUsU0FBSyxFQUFMQSxLQUhLO0FBSUxTLGdCQUFZLEVBQVpBO0FBSkssR0FBUDtBQU1EOztHQS9GUWpCLGU7O0FBaUdULCtEQUFlaUMsY0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42ZTA3YmIwNzY0MTM1MTY5MWZlNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgUkVRVUVTVF9TVEFUVVMgPSB7XG4gIExPQURJTkc6IFwibG9hZGluZ1wiLFxuICBTVUNDRVNTOiBcInN1Y2Nlc3NcIixcbiAgRkFJTFVSRTogXCJmYWlsdXJlXCIsXG59O1xuXG5mdW5jdGlvbiB1c2VSZXF1ZXN0RGVsYXkoZGVsYXlUaW1lID0gMTAwMCwgaW5pdGlhbERhdGEgPSBbXSkge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtyZXF1ZXN0U3RhdHVzLCBzZXRSZXF1ZXN0U3RhdHVzXSA9IHVzZVN0YXRlKFJFUVVFU1RfU1RBVFVTLkxPQURJTkcpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBkZWxheSA9IChtcykgPT4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBkZWxheUZ1bmMoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBkZWxheShkZWxheVRpbWUpO1xuICAgICAgICBzZXRSZXF1ZXN0U3RhdHVzKFJFUVVFU1RfU1RBVFVTLlNVQ0NFU1MpO1xuICAgICAgICBzZXREYXRhKGluaXRpYWxEYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgc2V0UmVxdWVzdFN0YXR1cyhSRVFVRVNUX1NUQVRVUy5GQUlMVVJFKTtcbiAgICAgICAgc2V0RXJyb3IoZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGRlbGF5RnVuYygpO1xuICB9LCBbXSk7XG5cbiAgZnVuY3Rpb24gdXBkYXRlUmVjb3JkKHJlY29yZCwgZG9uZUNhbGxiYWNrKSB7XG4gICAgY29uc3Qgb3JpZ2luYWxSZWNvcmRzID0gWy4uLmRhdGFdO1xuICAgIGNvbnN0IG5ld1JlY29yZHMgPSBkYXRhLm1hcChmdW5jdGlvbiAocmVjKSB7XG4gICAgICByZXR1cm4gcmVjLmlkID09PSByZWNvcmRVcGRhdGVkLmlkID8gcmVjb3JkVXBkYXRlZCA6IHJlYztcbiAgICB9KTtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGRlbGF5RnVuY3Rpb24oKSB7XG4gICAgICB0cnkge1xuICAgICAgICBzZXREYXRhKG5ld1JlY29yZHMpO1xuICAgICAgICBhd2FpdCBkZWxheShkZWxheVRpbWUpO1xuICAgICAgICBpZiAoZG9uZUNhbGxiYWNrKSB7XG4gICAgICAgICAgZG9uZUNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgdGhyb3duIGluc2lkZSBkZWxheUZ1bmN0aW9uXCIsIGVycm9yKTtcbiAgICAgICAgaWYgKGRvbmVDYWxsYmFjaykge1xuICAgICAgICAgIGRvbmVDYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICAgIHNldERhdGEob3JpZ2luYWxSZWNvcmRzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZGVsYXlGdW5jdGlvbigpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5zZXJ0UmVjb3JkKHJlY29yZCwgZG9uZUNhbGxiYWNrKSB7XG4gICAgY29uc3Qgb3JpZ2luYWxSZWNvcmRzID0gWy4uLmRhdGFdO1xuICAgIGNvbnN0IG5ld1JlY29yZHMgPSBbcmVjb3JkLCAuLi5kYXRhXTtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGRlbGF5RnVuY3Rpb24oKSB7XG4gICAgICB0cnkge1xuICAgICAgICBzZXREYXRhKG5ld1JlY29yZHMpO1xuICAgICAgICBhd2FpdCBkZWxheShkZWxheVRpbWUpO1xuICAgICAgICBpZiAoZG9uZUNhbGxiYWNrKSB7XG4gICAgICAgICAgZG9uZUNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgdGhyb3duIGluc2lkZSBkZWxheUZ1bmN0aW9uXCIsIGVycm9yKTtcbiAgICAgICAgaWYgKGRvbmVDYWxsYmFjaykge1xuICAgICAgICAgIGRvbmVDYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICAgIHNldERhdGEob3JpZ2luYWxSZWNvcmRzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZGVsYXlGdW5jdGlvbigpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVsZXRlUmVjb3JkKHJlY29yZCwgZG9uZUNhbGxiYWNrKSB7XG4gICAgY29uc3Qgb3JpZ2luYWxSZWNvcmRzID0gWy4uLmRhdGFdO1xuICAgIGNvbnN0IG5ld1JlY29yZHMgPSBkYXRhLmZpbHRlcihmdW5jdGlvbiAocmVjKXtcbiAgICAgIHJldHVybiByZWMuaWQgIT0gcmVcbiAgICB9KVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZGVsYXlGdW5jdGlvbigpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNldERhdGEobmV3UmVjb3Jkcyk7XG4gICAgICAgIGF3YWl0IGRlbGF5KGRlbGF5VGltZSk7XG4gICAgICAgIGlmIChkb25lQ2FsbGJhY2spIHtcbiAgICAgICAgICBkb25lQ2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciB0aHJvd24gaW5zaWRlIGRlbGF5RnVuY3Rpb25cIiwgZXJyb3IpO1xuICAgICAgICBpZiAoZG9uZUNhbGxiYWNrKSB7XG4gICAgICAgICAgZG9uZUNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0RGF0YShvcmlnaW5hbFJlY29yZHMpO1xuICAgICAgfVxuICAgIH1cbiAgICBkZWxheUZ1bmN0aW9uKCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGRhdGEsXG4gICAgcmVxdWVzdFN0YXR1cyxcbiAgICBlcnJvcixcbiAgICB1cGRhdGVSZWNvcmQsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVJlcXVlc3REZWxhIl0sInNvdXJjZVJvb3QiOiIifQ==
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ "./src/components/App.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\hp\\Desktop\\react\\movie_recommend\\src\\components\\Header.js",
    _s = $RefreshSig$();




function Header() {
  _s();

  var value = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_App__WEBPACK_IMPORTED_MODULE_1__.ThemeContext);
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
            lineNumber: 12,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: theme === "light" ? "" : "text-info",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
            className: "header-title",
            children: "Greatest Movies of All Time"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: theme === "light" ? "" : "text-info",
          children: ["Hello Mr. Smith \xA0\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              children: "sign-out"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this)
    }, void 0, false, {
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

_s(Header, "ksutO2/Ix3UeCrGnhyM+QEP505Y=");

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkhlYWRlciIsInZhbHVlIiwidXNlQ29udGV4dCIsIlRoZW1lQ29udGV4dCIsInRoZW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFFaEIsTUFBTUMsS0FBSyxHQUFHQyxpREFBVSxDQUFDQyw4Q0FBRCxDQUF4QjtBQUNBLHNCQUNFO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyw0QkFBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxnQ0FBZjtBQUFBLGdDQUNFO0FBQUEsaUNBQ0U7QUFBSyxlQUFHLEVBQUMsZ0JBQVQ7QUFBMEIsZUFBRyxFQUFDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBSUU7QUFBSyxtQkFBUyxFQUFFQyxLQUFLLEtBQUssT0FBVixHQUFvQixFQUFwQixHQUF5QixXQUF6QztBQUFBLGlDQUNFO0FBQUkscUJBQVMsRUFBQyxjQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRixlQU9FO0FBQUssbUJBQVMsRUFBRUEsS0FBSyxLQUFLLE9BQVYsR0FBb0IsRUFBcEIsR0FBeUIsV0FBekM7QUFBQSw4REFFRTtBQUFBLG1DQUNFO0FBQUcsa0JBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW9CRDs7R0F2QlFKLE07O0tBQUFBLE07QUF5QlQsK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWI1NmQ3YTZlMGRjN2MwMmFkM2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VGhlbWVDb250ZXh0fSBmcm9tIFwiLi9BcHBcIjtcbmltcG9ydCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBIZWFkZXIoKSB7XG5cbiAgY29uc3QgdmFsdWUgPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYWRUNCBwYWRCNFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbW9iaWxlLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW1nIGFsdD1cIlNWQ0MgSG9tZSBQYWdlXCIgc3JjPVwiL2ltYWdlcy9sb2dvLnBuZ1wiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoZW1lID09PSBcImxpZ2h0XCIgPyBcIlwiIDogXCJ0ZXh0LWluZm9cIn0+XG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiaGVhZGVyLXRpdGxlXCI+R3JlYXRlc3QgTW92aWVzIG9mIEFsbCBUaW1lPC9oND5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhlbWUgPT09IFwibGlnaHRcIiA/IFwiXCIgOiBcInRleHQtaW5mb1wifT5cbiAgICAgICAgICAgIEhlbGxvIE1yLiBTbWl0aCAmbmJzcDsmbmJzcDtcbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPnNpZ24tb3V0PC9hPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9
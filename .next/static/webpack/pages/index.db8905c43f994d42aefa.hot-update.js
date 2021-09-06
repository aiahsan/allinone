self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/modal.jsx":
/*!******************************!*\
  !*** ./components/modal.jsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "F:\\New GitHub Projects\\done projects\\allinone\\components\\modal.jsx",
    _this = undefined;


var DisplayingErrorMessagesSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().required("Required").email(),
  phone: Yup.string().required("Required"),
  password: Yup.string().required("Required").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"),
  confirmPassword: Yup.string().required("Required").oneOf([Yup.ref("password"), null], "Passwords must match")
});
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var show = _ref.show,
      handleClose = _ref.handleClose,
      handleShow = _ref.handleShow;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Modal, {
      show: show,
      onHide: handleClose,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Modal.Body, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "modal-main",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "img/logo3.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, _this)
  }, void 0, false);
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2RhbC5qc3giXSwibmFtZXMiOlsiRGlzcGxheWluZ0Vycm9yTWVzc2FnZXNTY2hlbWEiLCJZdXAiLCJvYmplY3QiLCJzaGFwZSIsIm5hbWUiLCJzdHJpbmciLCJyZXF1aXJlZCIsImVtYWlsIiwicGhvbmUiLCJwYXNzd29yZCIsIm1hdGNoZXMiLCJjb25maXJtUGFzc3dvcmQiLCJvbmVPZiIsInJlZiIsInNob3ciLCJoYW5kbGVDbG9zZSIsImhhbmRsZVNob3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSw2QkFBNkIsR0FBR0MsR0FBRyxDQUFDQyxNQUFKLEdBQWFDLEtBQWIsQ0FBbUI7QUFDdkRDLE1BQUksRUFBRUgsR0FBRyxDQUFDSSxNQUFKLEdBQWFDLFFBQWIsQ0FBc0IsVUFBdEIsQ0FEaUQ7QUFFdkRDLE9BQUssRUFBRU4sR0FBRyxDQUFDSSxNQUFKLEdBQWFDLFFBQWIsQ0FBc0IsVUFBdEIsRUFBa0NDLEtBQWxDLEVBRmdEO0FBR3ZEQyxPQUFLLEVBQUVQLEdBQUcsQ0FBQ0ksTUFBSixHQUFhQyxRQUFiLENBQXNCLFVBQXRCLENBSGdEO0FBSXZERyxVQUFRLEVBQUVSLEdBQUcsQ0FBQ0ksTUFBSixHQUNQQyxRQURPLENBQ0UsVUFERixFQUVQSSxPQUZPLENBR04sZ0VBSE0sRUFJTixvR0FKTSxDQUo2QztBQVd2REMsaUJBQWUsRUFBRVYsR0FBRyxDQUFDSSxNQUFKLEdBQ2RDLFFBRGMsQ0FDTCxVQURLLEVBRWRNLEtBRmMsQ0FFUixDQUFDWCxHQUFHLENBQUNZLEdBQUosQ0FBUSxVQUFSLENBQUQsRUFBc0IsSUFBdEIsQ0FGUSxFQUVxQixzQkFGckI7QUFYc0MsQ0FBbkIsQ0FBdEM7QUFlQSwrREFBZSxnQkFBdUM7QUFBQSxNQUFwQ0MsSUFBb0MsUUFBcENBLElBQW9DO0FBQUEsTUFBOUJDLFdBQThCLFFBQTlCQSxXQUE4QjtBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7QUFDcEQsc0JBQ0U7QUFBQSwyQkFDRSw4REFBQyxrREFBRDtBQUFPLFVBQUksRUFBRUYsSUFBYjtBQUFtQixZQUFNLEVBQUVDLFdBQTNCO0FBQUEsNkJBQ0UsOERBQUMsdURBQUQ7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMsWUFBZjtBQUFBLGlDQUNFO0FBQUssZUFBRyxFQUFDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBV0QsQ0FaRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kYjg5MDVjNDNmOTk0ZDQyYWVmYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcblxyXG5jb25zdCBEaXNwbGF5aW5nRXJyb3JNZXNzYWdlc1NjaGVtYSA9IFl1cC5vYmplY3QoKS5zaGFwZSh7XHJcbiAgbmFtZTogWXVwLnN0cmluZygpLnJlcXVpcmVkKFwiUmVxdWlyZWRcIiksXHJcbiAgZW1haWw6IFl1cC5zdHJpbmcoKS5yZXF1aXJlZChcIlJlcXVpcmVkXCIpLmVtYWlsKCksXHJcbiAgcGhvbmU6IFl1cC5zdHJpbmcoKS5yZXF1aXJlZChcIlJlcXVpcmVkXCIpLFxyXG4gIHBhc3N3b3JkOiBZdXAuc3RyaW5nKClcclxuICAgIC5yZXF1aXJlZChcIlJlcXVpcmVkXCIpXHJcbiAgICAubWF0Y2hlcyhcclxuICAgICAgL14oPz0uKltBLVphLXpdKSg/PS4qXFxkKSg/PS4qW0AkISUqIz8mXSlbQS1aYS16XFxkQCQhJSojPyZdezgsfSQvLFxyXG4gICAgICBcIk11c3QgQ29udGFpbiA4IENoYXJhY3RlcnMsIE9uZSBVcHBlcmNhc2UsIE9uZSBMb3dlcmNhc2UsIE9uZSBOdW1iZXIgYW5kIG9uZSBzcGVjaWFsIGNhc2UgQ2hhcmFjdGVyXCJcclxuICAgICksXHJcblxyXG4gIGNvbmZpcm1QYXNzd29yZDogWXVwLnN0cmluZygpXHJcbiAgICAucmVxdWlyZWQoXCJSZXF1aXJlZFwiKVxyXG4gICAgLm9uZU9mKFtZdXAucmVmKFwicGFzc3dvcmRcIiksIG51bGxdLCBcIlBhc3N3b3JkcyBtdXN0IG1hdGNoXCIpLFxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgKHsgc2hvdywgaGFuZGxlQ2xvc2UsIGhhbmRsZVNob3cgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TW9kYWwgc2hvdz17c2hvd30gb25IaWRlPXtoYW5kbGVDbG9zZX0+XHJcbiAgICAgICAgPE1vZGFsLkJvZHk+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLW1haW5cIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvbG9nbzMucG5nXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTW9kYWwuQm9keT5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
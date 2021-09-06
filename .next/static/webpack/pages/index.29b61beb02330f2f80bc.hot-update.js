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
/* harmony import */ var F_New_GitHub_Projects_done_projects_allinone_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var F_New_GitHub_Projects_done_projects_allinone_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var F_New_GitHub_Projects_done_projects_allinone_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(F_New_GitHub_Projects_done_projects_allinone_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var F_New_GitHub_Projects_done_projects_allinone_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var react_icons_Io__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/Io */ "./node_modules/react-icons/Io/index.esm.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "F:\\New GitHub Projects\\done projects\\allinone\\components\\modal.jsx",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,F_New_GitHub_Projects_done_projects_allinone_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var DisplayingErrorMessagesSchema = yup__WEBPACK_IMPORTED_MODULE_4__.object().shape({
  name: yup__WEBPACK_IMPORTED_MODULE_4__.string().required("Required"),
  email: yup__WEBPACK_IMPORTED_MODULE_4__.string().required("Required").email(),
  phone: yup__WEBPACK_IMPORTED_MODULE_4__.string().required("Required"),
  password: yup__WEBPACK_IMPORTED_MODULE_4__.string().required("Required").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"),
  confirmPassword: yup__WEBPACK_IMPORTED_MODULE_4__.string().required("Required").oneOf([yup__WEBPACK_IMPORTED_MODULE_4__.ref("password"), null], "Passwords must match")
});
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var show = _ref.show,
      handleClose = _ref.handleClose,
      handleShow = _ref.handleShow,
      showAnimation = _ref.showAnimation;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Modal, {
      show: show,
      onHide: handleClose,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Modal.Body, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "modal-main",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "img/logo3.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_5__.Formik, {
            initialValues: {
              email: ""
            },
            validationSchema: DisplayingErrorMessagesSchema,
            onSubmit: /*#__PURE__*/function () {
              var _ref3 = (0,F_New_GitHub_Projects_done_projects_allinone_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/F_New_GitHub_Projects_done_projects_allinone_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(values, _ref2) {
                var setSubmitting;
                return F_New_GitHub_Projects_done_projects_allinone_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        setSubmitting = _ref2.setSubmitting;
                        add(values.email);

                      case 2:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x, _x2) {
                return _ref3.apply(this, arguments);
              };
            }(),
            children: function children(_ref4) {
              var errors = _ref4.errors,
                  touched = _ref4.touched,
                  getFieldProps = _ref4.getFieldProps,
                  submitForm = _ref4.submitForm,
                  setErrors = _ref4.setErrors,
                  handleBlur = _ref4.handleBlur,
                  values = _ref4.values;
              // cstErrors = errors;
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_5__.Form, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
                  className: "container subscribe",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "pos-res2",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                      className: "pos-abs2",
                      src: "img/mr.png"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 52,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 51,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "flex-between flex-column",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                      className: "sb-box flex-between w-100",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "flex-between inputbox",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_Io__WEBPACK_IMPORTED_MODULE_7__.IoMdMail, {}, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 57,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({}, getFieldProps("email")), {}, {
                          placeholder: "Your email",
                          type: "text"
                        }), void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 58,
                          columnNumber: 29
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 56,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                          onClick: function onClick() {
                            return submitForm();
                          },
                          className: "btn fw600 fs17 lh23",
                          children: showAnimation == true ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Loading, {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 71,
                            columnNumber: 33
                          }, _this) : " Subscribe"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 66,
                          columnNumber: 29
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 64,
                        columnNumber: 27
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 55,
                      columnNumber: 25
                    }, _this), touched.email && errors.email && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                      style: {
                        color: "red",
                        marginTop: 10,
                        maxWidth: 320
                      },
                      children: errors.email
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 80,
                      columnNumber: 27
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 54,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "pos-res1",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                      className: "pos-ab1",
                      src: "img/ml.png"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 92,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 91,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 50,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 19
              }, _this);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2RhbC5qc3giXSwibmFtZXMiOlsiRGlzcGxheWluZ0Vycm9yTWVzc2FnZXNTY2hlbWEiLCJZdXAiLCJzaGFwZSIsIm5hbWUiLCJyZXF1aXJlZCIsImVtYWlsIiwicGhvbmUiLCJwYXNzd29yZCIsIm1hdGNoZXMiLCJjb25maXJtUGFzc3dvcmQiLCJvbmVPZiIsInNob3ciLCJoYW5kbGVDbG9zZSIsImhhbmRsZVNob3ciLCJzaG93QW5pbWF0aW9uIiwidmFsdWVzIiwic2V0U3VibWl0dGluZyIsImFkZCIsImVycm9ycyIsInRvdWNoZWQiLCJnZXRGaWVsZFByb3BzIiwic3VibWl0Rm9ybSIsInNldEVycm9ycyIsImhhbmRsZUJsdXIiLCJjb2xvciIsIm1hcmdpblRvcCIsIm1heFdpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSw2QkFBNkIsR0FBR0MsdUNBQUEsR0FBYUMsS0FBYixDQUFtQjtBQUN2REMsTUFBSSxFQUFFRix1Q0FBQSxHQUFhRyxRQUFiLENBQXNCLFVBQXRCLENBRGlEO0FBRXZEQyxPQUFLLEVBQUVKLHVDQUFBLEdBQWFHLFFBQWIsQ0FBc0IsVUFBdEIsRUFBa0NDLEtBQWxDLEVBRmdEO0FBR3ZEQyxPQUFLLEVBQUVMLHVDQUFBLEdBQWFHLFFBQWIsQ0FBc0IsVUFBdEIsQ0FIZ0Q7QUFJdkRHLFVBQVEsRUFBRU4sdUNBQUEsR0FDUEcsUUFETyxDQUNFLFVBREYsRUFFUEksT0FGTyxDQUdOLGdFQUhNLEVBSU4sb0dBSk0sQ0FKNkM7QUFXdkRDLGlCQUFlLEVBQUVSLHVDQUFBLEdBQ2RHLFFBRGMsQ0FDTCxVQURLLEVBRWRNLEtBRmMsQ0FFUixDQUFDVCxvQ0FBQSxDQUFRLFVBQVIsQ0FBRCxFQUFzQixJQUF0QixDQUZRLEVBRXFCLHNCQUZyQjtBQVhzQyxDQUFuQixDQUF0QztBQWVBLCtE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QVMsRUFBQyxVQUFmO0FBQUEsMkNBQ0U7QUFBSywrQkFBUyxFQUFDLFNBQWY7QUFBeUIseUJBQUcsRUFBQztBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkF6Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERjtBQWlERDtBQXJFSDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFrRkQsQ0FuRkQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjliNjFiZWIwMjMzMGYyZjgwYmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZGFsIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgKiBhcyBZdXAgZnJvbSBcInl1cFwiO1xyXG5pbXBvcnQgeyBJb01kTWFpbCB9IGZyb20gXCJyZWFjdC1pY29ucy9Jb1wiO1xyXG5pbXBvcnQgeyBGb3JtaWssIEZvcm0gfSBmcm9tIFwiZm9ybWlrXCI7XHJcblxyXG5jb25zdCBEaXNwbGF5aW5nRXJyb3JNZXNzYWdlc1NjaGVtYSA9IFl1cC5vYmplY3QoKS5zaGFwZSh7XHJcbiAgbmFtZTogWXVwLnN0cmluZygpLnJlcXVpcmVkKFwiUmVxdWlyZWRcIiksXHJcbiAgZW1haWw6IFl1cC5zdHJpbmcoKS5yZXF1aXJlZChcIlJlcXVpcmVkXCIpLmVtYWlsKCksXHJcbiAgcGhvbmU6IFl1cC5zdHJpbmcoKS5yZXF1aXJlZChcIlJlcXVpcmVkXCIpLFxyXG4gIHBhc3N3b3JkOiBZdXAuc3RyaW5nKClcclxuICAgIC5yZXF1aXJlZChcIlJlcXVpcmVkXCIpXHJcbiAgICAubWF0Y2hlcyhcclxuICAgICAgL14oPz0uKltBLVphLXpdKSg/PS4qXFxkKSg/PS4qW0AkISUqIz8mXSlbQS1aYS16XFxkQCQhJSojPyZdezgsfSQvLFxyXG4gICAgICBcIk11c3QgQ29udGFpbiA4IENoYXJhY3RlcnMsIE9uZSBVcHBlcmNhc2UsIE9uZSBMb3dlcmNhc2UsIE9uZSBOdW1iZXIgYW5kIG9uZSBzcGVjaWFsIGNhc2UgQ2hhcmFjdGVyXCJcclxuICAgICksXHJcblxyXG4gIGNvbmZpcm1QYXNzd29yZDogWXVwLnN0cmluZygpXHJcbiAgICAucmVxdWlyZWQoXCJSZXF1aXJlZFwiKVxyXG4gICAgLm9uZU9mKFtZdXAucmVmKFwicGFzc3dvcmRcIiksIG51bGxdLCBcIlBhc3N3b3JkcyBtdXN0IG1hdGNoXCIpLFxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgKHsgc2hvdywgaGFuZGxlQ2xvc2UsIGhhbmRsZVNob3csIHNob3dBbmltYXRpb24gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TW9kYWwgc2hvdz17c2hvd30gb25IaWRlPXtoYW5kbGVDbG9zZX0+XHJcbiAgICAgICAgPE1vZGFsLkJvZHk+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLW1haW5cIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvbG9nbzMucG5nXCIgLz5cclxuICAgICAgICAgICAgPEZvcm1pa1xyXG4gICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICAgICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgdmFsaWRhdGlvblNjaGVtYT17RGlzcGxheWluZ0Vycm9yTWVzc2FnZXNTY2hlbWF9XHJcbiAgICAgICAgICAgICAgb25TdWJtaXQ9e2FzeW5jICh2YWx1ZXMsIHsgc2V0U3VibWl0dGluZyB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhZGQodmFsdWVzLmVtYWlsKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgeyh7XHJcbiAgICAgICAgICAgICAgICBlcnJvcnMsXHJcbiAgICAgICAgICAgICAgICB0b3VjaGVkLFxyXG4gICAgICAgICAgICAgICAgZ2V0RmllbGRQcm9wcyxcclxuICAgICAgICAgICAgICAgIHN1Ym1pdEZvcm0sXHJcbiAgICAgICAgICAgICAgICBzZXRFcnJvcnMsXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVCbHVyLFxyXG4gICAgICAgICAgICAgICAgdmFsdWVzLFxyXG4gICAgICAgICAgICAgIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGNzdEVycm9ycyA9IGVycm9ycztcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgc3Vic2NyaWJlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcy1yZXMyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicG9zLWFiczJcIiBzcmM9XCJpbWcvbXIucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWJldHdlZW4gZmxleC1jb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYi1ib3ggZmxleC1iZXR3ZWVuIHctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWJldHdlZW4gaW5wdXRib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJb01kTWFpbCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5nZXRGaWVsZFByb3BzKFwiZW1haWxcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc3VibWl0Rm9ybSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gZnc2MDAgZnMxNyBsaDIzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dBbmltYXRpb24gPT0gdHJ1ZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGluZyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFN1YnNjcmliZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dG91Y2hlZC5lbWFpbCAmJiBlcnJvcnMuZW1haWwgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInJlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogMzIwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcy1yZXMxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicG9zLWFiMVwiIHNyYz1cImltZy9tbC5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIDwvRm9ybWlrPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Nb2RhbC5Cb2R5PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
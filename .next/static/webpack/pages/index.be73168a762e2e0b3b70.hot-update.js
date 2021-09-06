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
      handleShow = _ref.handleShow;
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
            lineNumber: 26,
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
                      lineNumber: 51,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 50,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "flex-between flex-column",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
                      className: "fw600 fs33 lh54",
                      children: "Subscribe to get information, latest news and other interesting offers about ALLinOne"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 54,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                      className: "sb-box flex-between w-100",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "flex-between inputbox",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icons, {
                          name: "mail"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 60,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({}, getFieldProps("email")), {}, {
                          placeholder: "Your email",
                          type: "text"
                        }), void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 61,
                          columnNumber: 29
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 59,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                          onClick: function onClick() {
                            return submitForm();
                          },
                          className: "btn fw600 fs17 lh23",
                          children: showAnimation == true ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Loading, {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 74,
                            columnNumber: 33
                          }, _this) : " Subscribe"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 69,
                          columnNumber: 29
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 67,
                        columnNumber: 27
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 58,
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
                      lineNumber: 83,
                      columnNumber: 27
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 53,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "pos-res1",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                      className: "pos-ab1",
                      src: "img/ml.png"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 95,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 94,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 49,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 19
              }, _this);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2RhbC5qc3giXSwibmFtZXMiOlsiRGlzcGxheWluZ0Vycm9yTWVzc2FnZXNTY2hlbWEiLCJZdXAiLCJzaGFwZSIsIm5hbWUiLCJyZXF1aXJlZCIsImVtYWlsIiwicGhvbmUiLCJwYXNzd29yZCIsIm1hdGNoZXMiLCJjb25maXJtUGFzc3dvcmQiLCJvbmVPZiIsInNob3ciLCJoYW5kbGVDbG9zZSIsImhhbmRsZVNob3ciLCJ2YWx1ZXMiLCJzZXRTdWJtaXR0aW5nIiwiYWRkIiwiZXJyb3JzIiwidG91Y2hlZCIsImdldEZpZWxkUHJvcHMiLCJzdWJtaXRGb3JtIiwic2V0RXJyb3JzIiwiaGFuZGxlQmx1ciIsInNob3dBbmltYXRpb24iLCJjb2xvciIsIm1hcmdpblRvcCIsIm1heFdpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSw2QkFBNkIsR0FBR0MsdUNBQUEsR0FBYUMsS0FBYixDQUFtQjtBQUN2REMsTUFBSSxFQUFFRix1Q0FBQSxHQUFhRyxRQUFiLENBQXNCLFVBQXRCLENBRGlEO0FBRXZEQyxPQUFLLEVBQUVKLHVDQUFBLEdBQWFHLFFBQWIsQ0FBc0IsVUFBdEIsRUFBa0NDLEtBQWxDLEVBRmdEO0FBR3ZEQyxPQUFLLEVBQUVMLHVDQUFBLEdBQWFHLFFBQWIsQ0FBc0IsVUFBdEIsQ0FIZ0Q7QUFJdkRHLFVBQVEsRUFBRU4sdUNBQUEsR0FDUEcsUUFETyxDQUNFLFVBREYsRUFFUEksT0FGTyxDQUdOLGdFQUhNLEVBSU4sb0dBSk0sQ0FKNkM7QUFXdkRDLGlCQUFlLEVBQUVSLHVDQUFBLEdBQ2RHLFFBRGMsQ0FDTCxVQURLLEVBRWRNLEtBRmMsQ0FFUixDQUFDVCxvQ0FBQSxDQUFRLFVBQVIsQ0FBRCxFQUFzQixJQUF0QixDQUZRLEVBRXFCLHNCQUZyQjtBQVhzQyxDQUFuQixDQUF0QztBQWVBLCtEQUFlLGdCQUF1QztBQUFBLE1BQXBDVSxJQUFvQyxRQUFwQ0EsSUFBb0M7QUFBQSxNQUE5QkMsV0FBOEIsUUFBOUJBLFdBQThCO0FBQUEsTUFBakJDLFVBQWlCLFFBQWpCQSxVQUFpQjtBQUNwRCxzQkFDRTtBQUFBLDJCQUNFLDhEQUFDLGtEQUFEO0FBQU8sVUFBSSxFQUFFRixJQUFiO0FBQW1CLFlBQU0sRUFBRUMsV0FBM0I7QUFBQSw2QkFDRSw4REFBQyx1REFBRDtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyxZQUFmO0FBQUEsa0NBQ0U7QUFBSyxlQUFHLEVBQUM7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUUsOERBQUMsMENBQUQ7QUFDRSx5QkFBYSxFQUFFO0FBQ2JQLG1CQUFLLEVBQUU7QUFETSxhQURqQjtBQUlFLDRCQUFnQixFQUFFTCw2QkFKcEI7QUFLRSxvQkFBUTtBQUFBLDBWQUFFLGlCQUFPYyxNQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFpQkMscUNBQWpCLFNBQWlCQSxhQUFqQjtBQUNSQywyQkFBRyxDQUFDRixNQUFNLENBQUNULEtBQVIsQ0FBSDs7QUFEUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFGOztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTFY7QUFBQSxzQkFTRyx5QkFRSztBQUFBLGtCQVBKWSxNQU9JLFNBUEpBLE1BT0k7QUFBQSxrQkFOSkMsT0FNSSxTQU5KQSxPQU1JO0FBQUEsa0JBTEpDLGFBS0ksU0FMSkEsYUFLSTtBQUFBLGtCQUpKQyxVQUlJLFNBSkpBLFVBSUk7QUFBQSxrQkFISkMsU0FHSSxTQUhKQSxTQUdJO0FBQUEsa0JBRkpDLFVBRUksU0FGSkEsVUFFSTtBQUFBLGtCQURKUixNQUNJLFNBREpBLE1BQ0k7QUFDSjtBQUVBLGtDQUNFLDhEQUFDLHdDQUFEO0FBQUEsdUNBQ0U7QUFBUywyQkFBUyxFQUFDLHFCQUFuQjtBQUFBLDBDQUNFO0FBQUssNkJBQVMsRUFBQyxVQUFmO0FBQUEsMkNBQ0U7QUFBSywrQkFBUyxFQUFDLFVBQWY7QUFBMEIseUJBQUcsRUFBQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixlQUlFO0FBQUssNkJBQVMsRUFBQywwQkFBZjtBQUFBLDRDQUNFO0FBQUksK0JBQVMsRUFBQyxpQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERixlQUtFO0FBQUssK0JBQVMsRUFBQywyQkFBZjtBQUFBLDhDQUNFO0FBQUssaUNBQVMsRUFBQyx1QkFBZjtBQUFBLGdEQUNFLDhEQUFDLEtBQUQ7QUFBTyw4QkFBSSxFQUFDO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FERixlQUVFLHVHQUNNSyxhQUFhLENBQUMsT0FBRCxDQURuQjtBQUVFLHFDQUFXLEVBQUMsWUFGZDtBQUdFLDhCQUFJLEVBQUM7QUFIUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFERixlQVNFO0FBQUEsbUNBQ0csR0FESCxlQUVFO0FBQ0UsaUNBQU8sRUFBRTtBQUFBLG1DQUFNQyxVQUFVLEVBQWhCO0FBQUEsMkJBRFg7QUFFRSxtQ0FBUyxFQUFDLHFCQUZaO0FBQUEsb0NBSUdHLGFBQWEsSUFBSSxJQUFqQixnQkFDQyw4REFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBREQsR0FHQztBQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFMRixFQTZCR0wsT0FBTyxDQUFDYixLQUFSLElBQWlCWSxNQUFNLENBQUNaLEtBQXhCLGlCQUNDO0FBQ0UsMkJBQUssRUFBRTtBQUNMbUIsNkJBQUssRUFBRSxLQURGO0FBRUxDLGlDQUFTLEVBQUUsRUFGTjtBQUdMQyxnQ0FBUSxFQUFFO0FBSEwsdUJBRFQ7QUFBQSxnQ0FPR1QsTUFBTSxDQUFDWjtBQVBWO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBOUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFKRixlQTZDRTtBQUFLLDZCQUFTLEVBQUMsVUFBZjtBQUFBLDJDQUNFO0FBQUssK0JBQVMsRUFBQyxTQUFmO0FBQXlCLHlCQUFHLEVBQUM7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBN0NGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREY7QUFxREQ7QUF6RUg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBc0ZELENBdkZEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmJlNzMxNjhhNzYyZTJlMGIzYjcwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2RhbCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0ICogYXMgWXVwIGZyb20gXCJ5dXBcIjtcclxuaW1wb3J0IHsgRm9ybWlrLCBGb3JtIH0gZnJvbSBcImZvcm1pa1wiO1xyXG5cclxuY29uc3QgRGlzcGxheWluZ0Vycm9yTWVzc2FnZXNTY2hlbWEgPSBZdXAub2JqZWN0KCkuc2hhcGUoe1xyXG4gIG5hbWU6IFl1cC5zdHJpbmcoKS5yZXF1aXJlZChcIlJlcXVpcmVkXCIpLFxyXG4gIGVtYWlsOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoXCJSZXF1aXJlZFwiKS5lbWFpbCgpLFxyXG4gIHBob25lOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoXCJSZXF1aXJlZFwiKSxcclxuICBwYXNzd29yZDogWXVwLnN0cmluZygpXHJcbiAgICAucmVxdWlyZWQoXCJSZXF1aXJlZFwiKVxyXG4gICAgLm1hdGNoZXMoXHJcbiAgICAgIC9eKD89LipbQS1aYS16XSkoPz0uKlxcZCkoPz0uKltAJCElKiM/Jl0pW0EtWmEtelxcZEAkISUqIz8mXXs4LH0kLyxcclxuICAgICAgXCJNdXN0IENvbnRhaW4gOCBDaGFyYWN0ZXJzLCBPbmUgVXBwZXJjYXNlLCBPbmUgTG93ZXJjYXNlLCBPbmUgTnVtYmVyIGFuZCBvbmUgc3BlY2lhbCBjYXNlIENoYXJhY3RlclwiXHJcbiAgICApLFxyXG5cclxuICBjb25maXJtUGFzc3dvcmQ6IFl1cC5zdHJpbmcoKVxyXG4gICAgLnJlcXVpcmVkKFwiUmVxdWlyZWRcIilcclxuICAgIC5vbmVPZihbWXVwLnJlZihcInBhc3N3b3JkXCIpLCBudWxsXSwgXCJQYXNzd29yZHMgbXVzdCBtYXRjaFwiKSxcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0ICh7IHNob3csIGhhbmRsZUNsb3NlLCBoYW5kbGVTaG93IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE1vZGFsIHNob3c9e3Nob3d9IG9uSGlkZT17aGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgIDxNb2RhbC5Cb2R5PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1tYWluXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2xvZ28zLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgIDxGb3JtaWtcclxuICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHZhbGlkYXRpb25TY2hlbWE9e0Rpc3BsYXlpbmdFcnJvck1lc3NhZ2VzU2NoZW1hfVxyXG4gICAgICAgICAgICAgIG9uU3VibWl0PXthc3luYyAodmFsdWVzLCB7IHNldFN1Ym1pdHRpbmcgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWRkKHZhbHVlcy5lbWFpbCk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHsoe1xyXG4gICAgICAgICAgICAgICAgZXJyb3JzLFxyXG4gICAgICAgICAgICAgICAgdG91Y2hlZCxcclxuICAgICAgICAgICAgICAgIGdldEZpZWxkUHJvcHMsXHJcbiAgICAgICAgICAgICAgICBzdWJtaXRGb3JtLFxyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3JzLFxyXG4gICAgICAgICAgICAgICAgaGFuZGxlQmx1cixcclxuICAgICAgICAgICAgICAgIHZhbHVlcyxcclxuICAgICAgICAgICAgICB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBjc3RFcnJvcnMgPSBlcnJvcnM7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIHN1YnNjcmliZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3MtcmVzMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInBvcy1hYnMyXCIgc3JjPVwiaW1nL21yLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1iZXR3ZWVuIGZsZXgtY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmdzYwMCBmczMzIGxoNTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBTdWJzY3JpYmUgdG8gZ2V0IGluZm9ybWF0aW9uLCBsYXRlc3QgbmV3cyBhbmQgb3RoZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcmVzdGluZyBvZmZlcnMgYWJvdXQgQUxMaW5PbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYi1ib3ggZmxleC1iZXR3ZWVuIHctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWJldHdlZW4gaW5wdXRib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29ucyBuYW1lPVwibWFpbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmdldEZpZWxkUHJvcHMoXCJlbWFpbFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIGVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzdWJtaXRGb3JtKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBmdzYwMCBmczE3IGxoMjNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2hvd0FuaW1hdGlvbiA9PSB0cnVlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgU3Vic2NyaWJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0b3VjaGVkLmVtYWlsICYmIGVycm9ycy5lbWFpbCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwicmVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAzMjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcnMuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zLXJlczFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwb3MtYWIxXCIgc3JjPVwiaW1nL21sLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPC9Gb3JtaWs+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L01vZGFsLkJvZHk+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
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
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_Io__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/Io */ "./node_modules/react-icons/Io/index.esm.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/ri */ "./node_modules/react-icons/ri/index.esm.js");
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
            lineNumber: 28,
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
                className: "w-100",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
                  className: "container subscribe no-bg create-account",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "flex-between flex-column",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                      className: "w-100",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "flex-between inputbox",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaUser, {}, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 55,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({}, getFieldProps("name")), {}, {
                          placeholder: "Your Name",
                          type: "text"
                        }), void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 56,
                          columnNumber: 29
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 54,
                        columnNumber: 27
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 53,
                      columnNumber: 25
                    }, _this), touched.name && errors.name && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                      style: {
                        color: "red",
                        marginTop: 10,
                        maxWidth: 320
                      },
                      children: errors.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 65,
                      columnNumber: 27
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 52,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "flex-between flex-column",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                      className: "w-100",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "flex-between inputbox",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_Io__WEBPACK_IMPORTED_MODULE_8__.IoMdMail, {}, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 79,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({}, getFieldProps("email")), {}, {
                          placeholder: "Your email",
                          type: "text"
                        }), void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 80,
                          columnNumber: 29
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 78,
                        columnNumber: 27
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 77,
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
                      lineNumber: 89,
                      columnNumber: 27
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 76,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "flex-between flex-column",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                      className: "w-100",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "flex-between inputbox",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_Io__WEBPACK_IMPORTED_MODULE_8__.IoIosCall, {}, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 103,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({}, getFieldProps("phone")), {}, {
                          placeholder: "Phone Number",
                          type: "text"
                        }), void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 104,
                          columnNumber: 29
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 102,
                        columnNumber: 27
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 101,
                      columnNumber: 25
                    }, _this), touched.phone && errors.phone && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                      style: {
                        color: "red",
                        marginTop: 10,
                        maxWidth: 320
                      },
                      children: errors.phone
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 113,
                      columnNumber: 27
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 100,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "flex-between flex-column",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                      className: "w-100",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "flex-between inputbox",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ri__WEBPACK_IMPORTED_MODULE_9__.RiKey2Fill, {}, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 128,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({}, getFieldProps("password")), {}, {
                          placeholder: "Password",
                          type: "text"
                        }), void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 129,
                          columnNumber: 29
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 127,
                        columnNumber: 27
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 126,
                      columnNumber: 25
                    }, _this), touched.password && errors.password && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                      style: {
                        color: "red",
                        marginTop: 10,
                        maxWidth: 320
                      },
                      children: errors.password
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 138,
                      columnNumber: 27
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 125,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "flex-between flex-column",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                      className: "w-100",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "flex-between inputbox",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ri__WEBPACK_IMPORTED_MODULE_9__.RiKey2Fill, {}, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 153,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({}, getFieldProps("confirmPassword")), {}, {
                          placeholder: "Confirm Password",
                          type: "text"
                        }), void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 154,
                          columnNumber: 29
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 152,
                        columnNumber: 27
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 151,
                      columnNumber: 25
                    }, _this), touched.confirmPassword && errors.confirmPassword && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                      style: {
                        color: "red",
                        marginTop: 10,
                        maxWidth: 320
                      },
                      children: errors.confirmPassword
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 163,
                      columnNumber: 27
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 150,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "flex-between justify-content-center",
                    children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                      onClick: function onClick() {
                        return submitForm();
                      },
                      className: "btn fw600 fs17 lh23",
                      children: showAnimation == true ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Loading, {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 181,
                        columnNumber: 52
                      }, _this) : " Subscribe"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 177,
                      columnNumber: 25
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 175,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 51,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 19
              }, _this);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2RhbC5qc3giXSwibmFtZXMiOlsiRGlzcGxheWluZ0Vycm9yTWVzc2FnZXNTY2hlbWEiLCJZdXAiLCJzaGFwZSIsIm5hbWUiLCJyZXF1aXJlZCIsImVtYWlsIiwicGhvbmUiLCJwYXNzd29yZCIsIm1hdGNoZXMiLCJjb25maXJtUGFzc3dvcmQiLCJvbmVPZiIsInNob3ciLCJoYW5kbGVDbG9zZSIsImhhbmRsZVNob3ciLCJzaG93QW5pbWF0aW9uIiwidmFsdWVzIiwic2V0U3VibWl0dGluZyIsImFkZCIsImVycm9ycyIsInRvdWNoZWQiLCJnZXRGaWVsZFByb3BzIiwic3VibWl0Rm9ybSIsInNldEVycm9ycyIsImhhbmRsZUJsdXIiLCJjb2xvciIsIm1hcmdpblRvcCIsIm1heFdpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSw2QkFBNkIsR0FBR0MsdUNBQUEsR0FBYUMsS0FBYixDQUFtQjtBQUN2REMsTUFBSSxFQUFFRix1Q0FBQSxHQUFhRyxRQUFiLENBQXNCLFVBQXRCLENBRGlEO0FBRXZEQyxPQUFLLEVBQUVKLHVDQUFBLEdBQWFHLFFBQWIsQ0FBc0IsVUFBdEIsRUFBa0NDLEtBQWxDLEVBRmdEO0FBR3ZEQyxPQUFLLEVBQUVMLHVDQUFBLEdBQWFHLFFBQWIsQ0FBc0IsVUFBdEIsQ0FIZ0Q7QUFJdkRHLFVBQVEsRUFBRU4sdUNBQUEsR0FDUEcsUUFETyxDQUNFLFVBREYsRUFFUEksT0FGTyxDQUdOLGdFQUhNLEVBSU4sb0dBSk0sQ0FKNkM7QUFXdkRDLGlCQUFlLEVBQUVSLHVDQUFBLEdBQ2RHLFFBRGMsQ0FDTCxVQURLLEVBRWRNLEtBRmMsQ0FFUixDQUFDVCxvQ0FBQSxDQUFRLFVBQVIsQ0FBRCxFQUFzQixJQUF0QixDQUZRLEVBRXFCLHNCQUZyQjtBQVhzQyxDQUFuQixD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QUNFLDZCQUFPLEVBQUU7QUFBQSwrQkFBTVksVUFBVSxFQUFoQjtBQUFBLHVCQURYO0FBRUUsK0JBQVMsRUFBQyxxQkFGWjtBQUFBLGdDQUlHUCxhQUFhLElBQUksSUFBakIsZ0JBQXdCLDhEQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFBeEIsR0FBc0M7QUFKekM7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBNUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREY7QUEwSUQ7QUE5Skg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBMktELENBNUtEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjI1ZDc4ZjBiNGZkNzg1Y2JlN2JmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2RhbCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0ICogYXMgWXVwIGZyb20gXCJ5dXBcIjtcclxuaW1wb3J0IHsgRmFVc2VyIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcbmltcG9ydCB7IElvTWRNYWlsLCBJb0lvc0NhbGwgfSBmcm9tIFwicmVhY3QtaWNvbnMvSW9cIjtcclxuaW1wb3J0IHsgRm9ybWlrLCBGb3JtIH0gZnJvbSBcImZvcm1pa1wiO1xyXG5pbXBvcnQgeyBSaUtleTJGaWxsIH0gZnJvbSBcInJlYWN0LWljb25zL3JpXCI7XHJcbmNvbnN0IERpc3BsYXlpbmdFcnJvck1lc3NhZ2VzU2NoZW1hID0gWXVwLm9iamVjdCgpLnNoYXBlKHtcclxuICBuYW1lOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoXCJSZXF1aXJlZFwiKSxcclxuICBlbWFpbDogWXVwLnN0cmluZygpLnJlcXVpcmVkKFwiUmVxdWlyZWRcIikuZW1haWwoKSxcclxuICBwaG9uZTogWXVwLnN0cmluZygpLnJlcXVpcmVkKFwiUmVxdWlyZWRcIiksXHJcbiAgcGFzc3dvcmQ6IFl1cC5zdHJpbmcoKVxyXG4gICAgLnJlcXVpcmVkKFwiUmVxdWlyZWRcIilcclxuICAgIC5tYXRjaGVzKFxyXG4gICAgICAvXig/PS4qW0EtWmEtel0pKD89LipcXGQpKD89LipbQCQhJSojPyZdKVtBLVphLXpcXGRAJCElKiM/Jl17OCx9JC8sXHJcbiAgICAgIFwiTXVzdCBDb250YWluIDggQ2hhcmFjdGVycywgT25lIFVwcGVyY2FzZSwgT25lIExvd2VyY2FzZSwgT25lIE51bWJlciBhbmQgb25lIHNwZWNpYWwgY2FzZSBDaGFyYWN0ZXJcIlxyXG4gICAgKSxcclxuXHJcbiAgY29uZmlybVBhc3N3b3JkOiBZdXAuc3RyaW5nKClcclxuICAgIC5yZXF1aXJlZChcIlJlcXVpcmVkXCIpXHJcbiAgICAub25lT2YoW1l1cC5yZWYoXCJwYXNzd29yZFwiKSwgbnVsbF0sIFwiUGFzc3dvcmRzIG11c3QgbWF0Y2hcIiksXHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCAoeyBzaG93LCBoYW5kbGVDbG9zZSwgaGFuZGxlU2hvdywgc2hvd0FuaW1hdGlvbiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxNb2RhbCBzaG93PXtzaG93fSBvbkhpZGU9e2hhbmRsZUNsb3NlfT5cclxuICAgICAgICA8TW9kYWwuQm9keT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtbWFpblwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cImltZy9sb2dvMy5wbmdcIiAvPlxyXG4gICAgICAgICAgICA8Rm9ybWlrXHJcbiAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgICAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICB2YWxpZGF0aW9uU2NoZW1hPXtEaXNwbGF5aW5nRXJyb3JNZXNzYWdlc1NjaGVtYX1cclxuICAgICAgICAgICAgICBvblN1Ym1pdD17YXN5bmMgKHZhbHVlcywgeyBzZXRTdWJtaXR0aW5nIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGFkZCh2YWx1ZXMuZW1haWwpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7KHtcclxuICAgICAgICAgICAgICAgIGVycm9ycyxcclxuICAgICAgICAgICAgICAgIHRvdWNoZWQsXHJcbiAgICAgICAgICAgICAgICBnZXRGaWVsZFByb3BzLFxyXG4gICAgICAgICAgICAgICAgc3VibWl0Rm9ybSxcclxuICAgICAgICAgICAgICAgIHNldEVycm9ycyxcclxuICAgICAgICAgICAgICAgIGhhbmRsZUJsdXIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZXMsXHJcbiAgICAgICAgICAgICAgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gY3N0RXJyb3JzID0gZXJyb3JzO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cInctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIHN1YnNjcmliZSBuby1iZyBjcmVhdGUtYWNjb3VudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWJldHdlZW4gZmxleC1jb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1iZXR3ZWVuIGlucHV0Ym94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFVc2VyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmdldEZpZWxkUHJvcHMoXCJuYW1lXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RvdWNoZWQubmFtZSAmJiBlcnJvcnMubmFtZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwicmVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAzMjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcnMubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWJldHdlZW4gZmxleC1jb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1iZXR3ZWVuIGlucHV0Ym94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW9NZE1haWwgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZ2V0RmllbGRQcm9wcyhcImVtYWlsXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0b3VjaGVkLmVtYWlsICYmIGVycm9ycy5lbWFpbCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwicmVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAzMjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcnMuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1iZXR3ZWVuIGZsZXgtY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtYmV0d2VlbiBpbnB1dGJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElvSW9zQ2FsbCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5nZXRGaWVsZFByb3BzKFwicGhvbmVcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGhvbmUgTnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dG91Y2hlZC5waG9uZSAmJiBlcnJvcnMucGhvbmUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInJlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogMzIwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLnBob25lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWJldHdlZW4gZmxleC1jb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1iZXR3ZWVuIGlucHV0Ym94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmlLZXkyRmlsbCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5nZXRGaWVsZFByb3BzKFwicGFzc3dvcmRcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0b3VjaGVkLnBhc3N3b3JkICYmIGVycm9ycy5wYXNzd29yZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwicmVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAzMjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcnMucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtYmV0d2VlbiBmbGV4LWNvbHVtblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWJldHdlZW4gaW5wdXRib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSaUtleTJGaWxsIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmdldEZpZWxkUHJvcHMoXCJjb25maXJtUGFzc3dvcmRcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29uZmlybSBQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RvdWNoZWQuY29uZmlybVBhc3N3b3JkICYmIGVycm9ycy5jb25maXJtUGFzc3dvcmQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInJlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogMzIwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLmNvbmZpcm1QYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1iZXR3ZWVuIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc3VibWl0Rm9ybSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBmdzYwMCBmczE3IGxoMjNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dBbmltYXRpb24gPT0gdHJ1ZSA/IDxMb2FkaW5nIC8+IDogXCIgU3Vic2NyaWJlXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIDwvRm9ybWlrPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Nb2RhbC5Cb2R5PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
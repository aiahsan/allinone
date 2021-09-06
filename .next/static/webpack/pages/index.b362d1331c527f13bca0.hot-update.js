self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Index; }
/* harmony export */ });
/* harmony import */ var F_New_GitHub_Projects_done_projects_allinone_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var F_New_GitHub_Projects_done_projects_allinone_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var F_New_GitHub_Projects_done_projects_allinone_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(F_New_GitHub_Projects_done_projects_allinone_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var F_New_GitHub_Projects_done_projects_allinone_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var F_New_GitHub_Projects_done_projects_allinone_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_Icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Icons */ "./styles/Icons.tsx");
/* harmony import */ var _util_firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/firebase */ "./util/firebase.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/loading */ "./components/loading.tsx");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/navbar */ "./components/navbar.jsx");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/footer */ "./components/footer.jsx");
/* harmony import */ var react_reveal_LightSpeed__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-reveal/LightSpeed */ "./node_modules/react-reveal/LightSpeed.js");
/* harmony import */ var react_reveal_LightSpeed__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_reveal_LightSpeed__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/modal */ "./components/modal.jsx");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);







var _jsxFileName = "F:\\New GitHub Projects\\done projects\\allinone\\pages\\index.jsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,F_New_GitHub_Projects_done_projects_allinone_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }















var DisplayingErrorMessagesSchema = yup__WEBPACK_IMPORTED_MODULE_9__.object().shape({
  email: yup__WEBPACK_IMPORTED_MODULE_9__.string().required("Email Required").email()
});
function Index() {
  _s();

  var _this = this;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_5___default().useState(""),
      _React$useState2 = (0,F_New_GitHub_Projects_done_projects_allinone_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__.default)(_React$useState, 2),
      message = _React$useState2[0],
      setmessage = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_5___default().useState(false),
      _React$useState4 = (0,F_New_GitHub_Projects_done_projects_allinone_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__.default)(_React$useState3, 2),
      showmessage = _React$useState4[0],
      setshowmessage = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_5___default().useState(false),
      _React$useState6 = (0,F_New_GitHub_Projects_done_projects_allinone_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__.default)(_React$useState5, 2),
      showAnimation = _React$useState6[0],
      setshowAnimation = _React$useState6[1];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      show = _useState[0],
      setShow = _useState[1];

  var handleClose = function handleClose() {
    return setShow(false);
  };

  var handleShow = function handleShow() {
    return setShow(true);
  };

  function onKeyDown(keyEvent) {
    if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
      keyEvent.preventDefault();
    }
  }

  var add = /*#__PURE__*/function () {
    var _ref = (0,F_New_GitHub_Projects_done_projects_allinone_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/F_New_GitHub_Projects_done_projects_allinone_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(email) {
      return F_New_GitHub_Projects_done_projects_allinone_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              (0,F_New_GitHub_Projects_done_projects_allinone_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/F_New_GitHub_Projects_done_projects_allinone_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
                var docRef;
                return F_New_GitHub_Projects_done_projects_allinone_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        setshowAnimation(true); // Add a new document with a generated id.

                        _context.next = 3;
                        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.collection)(_util_firebase__WEBPACK_IMPORTED_MODULE_7__.db, "emails"), {
                          email: email
                        }).then(function (x) {
                          setmessage("Email Registerd");
                          setshowmessage(true);
                          setshowAnimation(false);
                          setTimeout(function () {
                            setshowmessage(false);
                          }, 3000);
                        })["catch"](function (x) {
                          setmessage("Something wen't wrong try agian");
                          setshowmessage(true);
                          setshowAnimation(false);
                          setTimeout(function () {
                            setshowmessage(false);
                          }, 3000);
                        });

                      case 3:
                        docRef = _context.sent;

                      case 4:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }))();

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function add(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [showmessage ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_18__.Toast, {
      style: {
        position: "fixed",
        top: 10,
        right: 10,
        zIndex: 1
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_18__.Toast.Header, {
        onClick: function onClick() {
          return setshowmessage(false);
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
          src: "holder.js/20x20?text=%20",
          className: "rounded mr-2",
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("strong", {
          className: "mr-auto",
          children: "All in One City"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_18__.Toast.Body, {
        children: message
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {}, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "bg",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "container nav-barcst",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_navbar__WEBPACK_IMPORTED_MODULE_12__.default, {
          show: show,
          handleClose: handleClose,
          handleShow: handleShow
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_17__.Element, {
        name: "home",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "container tripbox",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "d-flex top-section",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react_reveal_Fade__WEBPACK_IMPORTED_MODULE_15___default()), {
                top: true,
                opposite: true,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
                  className: "fw600 fs60 lh90",
                  children: "Get the new AllinOne App for your next trip"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 102,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react_reveal_Fade__WEBPACK_IMPORTED_MODULE_15___default()), {
                right: true,
                opposite: true,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                  className: "fs16 lh24",
                  children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 107,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "flex-mb",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
                  className: "btn fs-16 lh27",
                  children: "Pre-Register"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 116,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                className: "no-dsp",
                src: "img/m1.png",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_17__.Element, {
      name: "features",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("section", {
        className: "container features",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
          className: "fw600 fs50 lh75",
          children: " App Features"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "flex-between w-100",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react_reveal_Fade__WEBPACK_IMPORTED_MODULE_15___default()), {
            left: true,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "fearture-box",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "svg-p bg-svg-1 ",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_Icons__WEBPACK_IMPORTED_MODULE_6__.default, {
                  name: "b1"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 141,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 140,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
                className: "fw600 fs30 lh45",
                children: "Booking"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                className: "fs16 lh24",
                children: ["Lorem Ipsum is simply dummy text of the printing and typesetting indus. Lorem Ipsum", " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 144,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react_reveal_Fade__WEBPACK_IMPORTED_MODULE_15___default()), {
            bottom: true,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "fearture-box mr-no-0",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "svg-p bg-svg-2 ",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_Icons__WEBPACK_IMPORTED_MODULE_6__.default, {
                  name: "b2"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 154,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 153,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
                className: "fw600 fs30 lh45",
                children: "Explore"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 156,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                className: "fs16 lh24",
                children: ["Lorem Ipsum is simply dummy text of the printing and typesetting indus. Lorem Ipsum", " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 157,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react_reveal_Fade__WEBPACK_IMPORTED_MODULE_15___default()), {
            right: true,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "fearture-box",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "svg-p bg-svg-3 ",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_Icons__WEBPACK_IMPORTED_MODULE_6__.default, {
                  name: "b3"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 166,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 165,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
                className: "fw600 fs30 lh45",
                children: "Customer Support"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 168,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                className: "fs16 lh24",
                children: ["Lorem Ipsum is simply dummy text of the printing and typesetting indus. Lorem Ipsum", " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 169,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_17__.Element, {
      name: "howitwork",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("section", {
        className: "container features howitwork",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react_reveal_Fade__WEBPACK_IMPORTED_MODULE_15___default()), {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
            className: "fw600 fs50 lh75",
            children: " How it Works"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "d-flex w-100 howitwork-flex ",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "howitwork-inner",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
              src: "img/vpng.jpg",
              className: "mx-imgplay w-100"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 187,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react_reveal_Fade__WEBPACK_IMPORTED_MODULE_15___default()), {
              left: true,
              children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "d-flex work-text-box  ",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: "mr-20 sm-icon",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_Icons__WEBPACK_IMPORTED_MODULE_6__.default, {
                    name: "download"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 194,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 193,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
                    className: "fw-500 fs30 lh45",
                    children: "Download the App"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 197,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    className: "btnstores",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
                      className: "btn",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_Icons__WEBPACK_IMPORTED_MODULE_6__.default, {
                        name: "a1"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 200,
                        columnNumber: 25
                      }, this), "Pre-Register"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 199,
                      columnNumber: 23
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
                      className: "btn",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_Icons__WEBPACK_IMPORTED_MODULE_6__.default, {
                        name: "a2"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 204,
                        columnNumber: 25
                      }, this), " Pre-Register"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 203,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 198,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 196,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 192,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 190,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react_reveal_Fade__WEBPACK_IMPORTED_MODULE_15___default()), {
              left: true,
              children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "d-flex align-items-center work-text-box mt-40 sm-icon",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: "mr-20",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_Icons__WEBPACK_IMPORTED_MODULE_6__.default, {
                    name: "ntrip"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 214,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 213,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
                    className: "fw-500 fs30 lh45",
                    children: "Find your next trip"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 217,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 216,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 212,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 210,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react_reveal_Fade__WEBPACK_IMPORTED_MODULE_15___default()), {
              left: true,
              children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "d-flex align-items-center work-text-box mt-40 sm-icon",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: "mr-20",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_Icons__WEBPACK_IMPORTED_MODULE_6__.default, {
                    name: "card"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 225,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 224,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
                    className: "fw-500 fs30 lh45",
                    children: "Book within the App"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 228,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 227,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 223,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 221,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react_reveal_Fade__WEBPACK_IMPORTED_MODULE_15___default()), {
              left: true,
              children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "d-flex align-items-center work-text-box mt-40 sm-icon ",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: "mr-20",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_Icons__WEBPACK_IMPORTED_MODULE_6__.default, {
                    name: "hour"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 236,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 235,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
                    className: "fw-500 fs30 lh45",
                    children: "Enjoy your trip"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 239,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 238,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 234,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 232,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "hero",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
          className: "fw500 fs60 lh90",
          children: ["Explore Dubai, London, Mykonos, Ibiza", " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("section", {
      className: "features2",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "flex-between",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
          className: "w-img-cst",
          src: "img/m2.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "f-box",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react_reveal_LightSpeed__WEBPACK_IMPORTED_MODULE_14___default()), {
            left: true,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "flex-between",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "jdkf23",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_Icons__WEBPACK_IMPORTED_MODULE_6__.default, {
                  name: "e1"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 260,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 259,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
                className: "fw600 fs20 lh30",
                children: "Easily find your next Hotel, Restaurant and Activity based on your location"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 263,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 258,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 257,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react_reveal_LightSpeed__WEBPACK_IMPORTED_MODULE_14___default()), {
            right: true,
            opposite: true,
            delay: 800,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "d-flex align-items-center mt-100",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
                className: "fw600 fs20 lh30",
                children: "Best Price Guarantee "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 271,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_Icons__WEBPACK_IMPORTED_MODULE_6__.default, {
                name: "e1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 272,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 270,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 269,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react_reveal_LightSpeed__WEBPACK_IMPORTED_MODULE_14___default()), {
            left: true,
            delay: 800,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "flex-between mt-100",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "jdkf23",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_Icons__WEBPACK_IMPORTED_MODULE_6__.default, {
                  name: "e1"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 278,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 277,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
                className: "fw600 fs20 lh30",
                children: "Available in: Dubai, London, Ibiza"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 280,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 276,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 275,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react_reveal_LightSpeed__WEBPACK_IMPORTED_MODULE_14___default()), {
            right: true,
            opposite: true,
            delay: 800,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "d-flex align-items-center mt-100",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
                className: "fw600 fs20 lh30",
                children: ["Refer friends and earn up to 10%", " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 287,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_Icons__WEBPACK_IMPORTED_MODULE_6__.default, {
                name: "e1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 290,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 286,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 285,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
          className: "w-img-cst m3img",
          src: "img/m3.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 294,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_10__.Formik, {
      initialValues: {
        email: ""
      },
      validationSchema: DisplayingErrorMessagesSchema,
      onSubmit: /*#__PURE__*/function () {
        var _ref4 = (0,F_New_GitHub_Projects_done_projects_allinone_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/F_New_GitHub_Projects_done_projects_allinone_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3(values, _ref3) {
          var setSubmitting;
          return F_New_GitHub_Projects_done_projects_allinone_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  setSubmitting = _ref3.setSubmitting;
                  add(values.email);

                case 2:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        return function (_x2, _x3) {
          return _ref4.apply(this, arguments);
        };
      }(),
      children: function children(_ref5) {
        var errors = _ref5.errors,
            touched = _ref5.touched,
            getFieldProps = _ref5.getFieldProps,
            submitForm = _ref5.submitForm,
            setErrors = _ref5.setErrors,
            handleBlur = _ref5.handleBlur,
            values = _ref5.values;
        // cstErrors = errors;
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_10__.Form, {
          onKeyDown: onKeyDown,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("section", {
            className: "container subscribe",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "pos-res2",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                className: "pos-abs2",
                src: "img/mr.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 321,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 320,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "flex-between flex-column",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
                className: "fw600 fs33 lh54",
                children: "Subscribe to get information, latest news and other interesting offers about ALLinOne"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 324,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "sb-box flex-between w-100",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: "flex-between inputbox",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_Icons__WEBPACK_IMPORTED_MODULE_6__.default, {
                    name: "mail"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 330,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", _objectSpread(_objectSpread({}, getFieldProps("email")), {}, {
                    placeholder: "Your email",
                    type: "text"
                  }), void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 331,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 329,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
                    onClick: function onClick() {
                      return submitForm();
                    },
                    className: "btn fw600 fs17 lh23",
                    children: showAnimation == true ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_loading__WEBPACK_IMPORTED_MODULE_11__.default, {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 343,
                      columnNumber: 50
                    }, _this) : " Subscribe"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 339,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 337,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 328,
                columnNumber: 19
              }, _this), touched.email && errors.email && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                style: {
                  color: "red",
                  marginTop: 10,
                  maxWidth: 320
                },
                children: errors.email
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 349,
                columnNumber: 21
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 323,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "pos-res1",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                className: "pos-ab1",
                src: "img/ml.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 355,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 354,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 319,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 318,
          columnNumber: 13
        }, _this);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_13__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_modal__WEBPACK_IMPORTED_MODULE_16__.default, {
      show: show,
      handleClose: handleClose,
      handleShow: handleShow
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Index, "2bUUtqs8hXgNfbBUbN2x2PD+oLA=");

_c = Index;

var _c;

$RefreshReg$(_c, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbIkRpc3BsYXlpbmdFcnJvck1lc3NhZ2VzU2NoZW1hIiwiWXVwIiwic2hhcGUiLCJlbWFpbCIsInJlcXVpcmVkIiwiSW5kZXgiLCJSZWFjdCIsIm1lc3NhZ2UiLCJzZXRtZXNzYWdlIiwic2hvd21lc3NhZ2UiLCJzZXRzaG93bWVzc2FnZSIsInNob3dBbmltYXRpb24iLCJzZXRzaG93QW5pbWF0aW9uIiwidXNlU3RhdGUiLCJzaG93Iiwic2V0U2hvdyIsImhhbmRsZUNsb3NlIiwiaGFuZGxlU2hvdyIsIm9uS2V5RG93biIsImtleUV2ZW50IiwiY2hhckNvZGUiLCJrZXlDb2RlIiwicHJldmVudERlZmF1bHQiLCJhZGQiLCJhZGREb2MiLCJjb2xsZWN0aW9uIiwiZGIiLCJ0aGVuIiwieCIsInNldFRpbWVvdXQiLCJkb2NSZWYiLCJwb3NpdGlvbiIsInRvcCIsInJpZ2h0IiwiekluZGV4IiwidmFsdWVzIiwic2V0U3VibWl0dGluZyIsImVycm9ycyIsInRvdWNoZWQiLCJnZXRGaWVsZFByb3BzIiwic3VibWl0Rm9ybSIsInNldEVycm9ycyIsImhhbmRsZUJsdXIiLCJjb2xvciIsIm1hcmdpblRvcCIsIm1heFdpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVNBLElBQU1BLDZCQUE2QixHQUFHQyx1Q0FBQSxHQUFhQyxLQUFiLENBQW1CO0FBQ3ZEQyxPQUFLLEVBQUVGLHVDQUFBLEdBQWFHLFFBQWIsQ0FBc0IsZ0JBQXRCLEVBQXdDRCxLQUF4QztBQURnRCxDQUFuQixDQUF0QztBQUdlLFNBQVNFLEtBQVQsR0FBaUI7QUFBQTs7QUFBQTs7QUFBQSx3QkFDQUMscURBQUEsQ0FB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QTtBQUFBO0FBQUEscUJBSkYsZUFtQ0U7QUFBSyx1QkFBUyxFQUFDLFVBQWY7QUFBQSxxQ0FDRTtBQUFLLHlCQUFTLEVBQUMsU0FBZjtBQUF5QixtQkFBRyxFQUFDO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQW5DRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBMkNEO0FBL0RIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4T0YsZUF5U0UsOERBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXpTRixlQTBTRSw4REFBQyx1REFBRDtBQUFPLFVBQUksRUFBRVcsSUFBYjtBQUFtQixpQkFBVyxFQUFFRSxXQUFoQztBQUE2QyxnQkFBVSxFQUFFQztBQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBMVNGO0FBQUEsa0JBREY7QUE4U0Q7O0dBcFZ1QlosSzs7S0FBQUEsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iMzYyZDEzMzFjNTI3ZjEzYmNhMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJY29ucyBmcm9tIFwiLi4vc3R5bGVzL0ljb25zXCI7XHJcbmltcG9ydCB7IGRiIH0gZnJvbSBcIi4uL3V0aWwvZmlyZWJhc2VcIjtcclxuaW1wb3J0IHsgY29sbGVjdGlvbiwgYWRkRG9jIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgeyBUb2FzdCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0ICogYXMgWXVwIGZyb20gXCJ5dXBcIjtcclxuaW1wb3J0IHsgRm9ybWlrLCBGb3JtIH0gZnJvbSBcImZvcm1pa1wiO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vY29tcG9uZW50cy9sb2FkaW5nXCI7XHJcbmltcG9ydCBOYXZCYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbmF2YmFyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9vdGVyXCI7XHJcbmltcG9ydCBMaWdodFNwZWVkIGZyb20gXCJyZWFjdC1yZXZlYWwvTGlnaHRTcGVlZFwiO1xyXG5pbXBvcnQgRmFkZSBmcm9tIFwicmVhY3QtcmV2ZWFsL0ZhZGVcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCIuLi9jb21wb25lbnRzL21vZGFsXCI7XHJcbmltcG9ydCB7XHJcbiAgTGluayxcclxuICBEaXJlY3RMaW5rLFxyXG4gIEVsZW1lbnQsXHJcbiAgRXZlbnRzLFxyXG4gIGFuaW1hdGVTY3JvbGwgYXMgc2Nyb2xsLFxyXG4gIHNjcm9sbFNweSxcclxuICBzY3JvbGxlcixcclxufSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XHJcbmNvbnN0IERpc3BsYXlpbmdFcnJvck1lc3NhZ2VzU2NoZW1hID0gWXVwLm9iamVjdCgpLnNoYXBlKHtcclxuICBlbWFpbDogWXVwLnN0cmluZygpLnJlcXVpcmVkKFwiRW1haWwgUmVxdWlyZWRcIikuZW1haWwoKSxcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xyXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRtZXNzYWdlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzaG93bWVzc2FnZSwgc2V0c2hvd21lc3NhZ2VdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaG93QW5pbWF0aW9uLCBzZXRzaG93QW5pbWF0aW9uXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4gc2V0U2hvdyhmYWxzZSk7XHJcbiAgY29uc3QgaGFuZGxlU2hvdyA9ICgpID0+IHNldFNob3codHJ1ZSk7XHJcbiAgZnVuY3Rpb24gb25LZXlEb3duKGtleUV2ZW50KSB7XHJcbiAgICBpZiAoKGtleUV2ZW50LmNoYXJDb2RlIHx8IGtleUV2ZW50LmtleUNvZGUpID09PSAxMykge1xyXG4gICAgICBrZXlFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBhZGQgPSBhc3luYyAoZW1haWwpID0+IHtcclxuICAgIChhc3luYyAoKSA9PiB7XHJcbiAgICAgIHNldHNob3dBbmltYXRpb24odHJ1ZSk7XHJcbiAgICAgIC8vIEFkZCBhIG5ldyBkb2N1bWVudCB3aXRoIGEgZ2VuZXJhdGVkIGlkLlxyXG4gICAgICBjb25zdCBkb2NSZWYgPSBhd2FpdCBhZGREb2MoY29sbGVjdGlvbihkYiwgXCJlbWFpbHNcIiksIHtcclxuICAgICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHgpID0+IHtcclxuICAgICAgICAgIHNldG1lc3NhZ2UoXCJFbWFpbCBSZWdpc3RlcmRcIik7XHJcbiAgICAgICAgICBzZXRzaG93bWVzc2FnZSh0cnVlKTtcclxuICAgICAgICAgIHNldHNob3dBbmltYXRpb24oZmFsc2UpO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldHNob3dtZXNzYWdlKGZhbHNlKTtcclxuICAgICAgICAgIH0sIDMwMDApO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKCh4KSA9PiB7XHJcbiAgICAgICAgICBzZXRtZXNzYWdlKFwiU29tZXRoaW5nIHdlbid0IHdyb25nIHRyeSBhZ2lhblwiKTtcclxuICAgICAgICAgIHNldHNob3dtZXNzYWdlKHRydWUpO1xyXG4gICAgICAgICAgc2V0c2hvd0FuaW1hdGlvbihmYWxzZSk7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgc2V0c2hvd21lc3NhZ2UoZmFsc2UpO1xyXG4gICAgICAgICAgfSwgMzAwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KSgpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtzaG93bWVzc2FnZSA/IChcclxuICAgICAgICA8VG9hc3RcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXHJcbiAgICAgICAgICAgIHRvcDogMTAsXHJcbiAgICAgICAgICAgIHJpZ2h0OiAxMCxcclxuICAgICAgICAgICAgekluZGV4OiAxLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VG9hc3QuSGVhZGVyIG9uQ2xpY2s9eygpID0+IHNldHNob3dtZXNzYWdlKGZhbHNlKX0+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9XCJob2xkZXIuanMvMjB4MjA/dGV4dD0lMjBcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQgbXItMlwiXHJcbiAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJtci1hdXRvXCI+QWxsIGluIE9uZSBDaXR5PC9zdHJvbmc+XHJcbiAgICAgICAgICA8L1RvYXN0LkhlYWRlcj5cclxuICAgICAgICAgIDxUb2FzdC5Cb2R5PnttZXNzYWdlfTwvVG9hc3QuQm9keT5cclxuICAgICAgICA8L1RvYXN0PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDw+PC8+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbmF2LWJhcmNzdFwiPlxyXG4gICAgICAgICAgPE5hdkJhclxyXG4gICAgICAgICAgICBzaG93PXtzaG93fVxyXG4gICAgICAgICAgICBoYW5kbGVDbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgIGhhbmRsZVNob3c9e2hhbmRsZVNob3d9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxFbGVtZW50IG5hbWU9XCJob21lXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciB0cmlwYm94XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IHRvcC1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxGYWRlIHRvcCBvcHBvc2l0ZT5cclxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZ3NjAwIGZzNjAgbGg5MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEdldCB0aGUgbmV3IEFsbGluT25lIEFwcCBmb3IgeW91ciBuZXh0IHRyaXBcclxuICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDwvRmFkZT5cclxuICAgICAgICAgICAgICAgIDxGYWRlIHJpZ2h0IG9wcG9zaXRlPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmczE2IGxoMjRcIj5cclxuICAgICAgICAgICAgICAgICAgICBMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZXNldHRpbmcgaW5kdXN0cnkuIExvcmVtIElwc3VtIGhhcyBiZWVuIHRoZSBpbmR1c3RyeSdzXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhbmRhcmQgZHVtbXkgdGV4dCBldmVyIHNpbmNlIHRoZSAxNTAwcywgd2hlbiBhbiB1bmtub3duXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpbnRlciB0b29rIGEgZ2FsbGV5IG9mIHR5cGVcclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9GYWRlPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1tYlwiPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBmcy0xNiBsaDI3XCI+UHJlLVJlZ2lzdGVyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBmcy0xNiBsaDI3XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25zIG5hbWU9XCJwbGF5c3RvcmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIFByZS1SZWdpc3RlclxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gZnMtMTYgbGgyN1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29ucyBuYW1lPVwiYXBwc3RvcmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIFByZS1SZWdpc3RlclxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJuby1kc3BcIiBzcmM9XCJpbWcvbTEucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0VsZW1lbnQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8RWxlbWVudCBuYW1lPVwiZmVhdHVyZXNcIj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgZmVhdHVyZXNcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmdzYwMCBmczUwIGxoNzVcIj4gQXBwIEZlYXR1cmVzPC9oMT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1iZXR3ZWVuIHctMTAwXCI+XHJcbiAgICAgICAgICAgIDxGYWRlIGxlZnQ+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWFydHVyZS1ib3hcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ZnLXAgYmctc3ZnLTEgXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJY29ucyBuYW1lPVwiYjFcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZnc2MDAgZnMzMCBsaDQ1XCI+Qm9va2luZzwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmczE2IGxoMjRcIj5cclxuICAgICAgICAgICAgICAgICAgTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZFxyXG4gICAgICAgICAgICAgICAgICB0eXBlc2V0dGluZyBpbmR1cy4gTG9yZW0gSXBzdW17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvRmFkZT5cclxuXHJcbiAgICAgICAgICAgIDxGYWRlIGJvdHRvbT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXJ0dXJlLWJveCBtci1uby0wXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN2Zy1wIGJnLXN2Zy0yIFwiPlxyXG4gICAgICAgICAgICAgICAgICA8SWNvbnMgbmFtZT1cImIyXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZ3NjAwIGZzMzAgbGg0NVwiPkV4cGxvcmU8L2gyPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnMxNiBsaDI0XCI+XHJcbiAgICAgICAgICAgICAgICAgIExvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmRcclxuICAgICAgICAgICAgICAgICAgdHlwZXNldHRpbmcgaW5kdXMuIExvcmVtIElwc3Vte1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0ZhZGU+XHJcbiAgICAgICAgICAgIDxGYWRlIHJpZ2h0PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVhcnR1cmUtYm94XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN2Zy1wIGJnLXN2Zy0zIFwiPlxyXG4gICAgICAgICAgICAgICAgICA8SWNvbnMgbmFtZT1cImIzXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZ3NjAwIGZzMzAgbGg0NVwiPkN1c3RvbWVyIFN1cHBvcnQ8L2gyPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnMxNiBsaDI0XCI+XHJcbiAgICAgICAgICAgICAgICAgIExvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmRcclxuICAgICAgICAgICAgICAgICAgdHlwZXNldHRpbmcgaW5kdXMuIExvcmVtIElwc3Vte1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0ZhZGU+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvRWxlbWVudD5cclxuICAgICAgPEVsZW1lbnQgbmFtZT1cImhvd2l0d29ya1wiPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lciBmZWF0dXJlcyBob3dpdHdvcmtcIj5cclxuICAgICAgICAgIDxGYWRlPlxyXG4gICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmdzYwMCBmczUwIGxoNzVcIj4gSG93IGl0IFdvcmtzPC9oMT5cclxuICAgICAgICAgIDwvRmFkZT5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCB3LTEwMCBob3dpdHdvcmstZmxleCBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3dpdHdvcmstaW5uZXJcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy92cG5nLmpwZ1wiIGNsYXNzTmFtZT1cIm14LWltZ3BsYXkgdy0xMDBcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8RmFkZSBsZWZ0PlxyXG4gICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggd29yay10ZXh0LWJveCAgXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItMjAgc20taWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29ucyBuYW1lPVwiZG93bmxvYWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZnctNTAwIGZzMzAgbGg0NVwiPkRvd25sb2FkIHRoZSBBcHA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuc3RvcmVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbnMgbmFtZT1cImExXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUHJlLVJlZ2lzdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29ucyBuYW1lPVwiYTJcIiAvPiBQcmUtUmVnaXN0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvRmFkZT5cclxuICAgICAgICAgICAgICA8RmFkZSBsZWZ0PlxyXG4gICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHdvcmstdGV4dC1ib3ggbXQtNDAgc20taWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLTIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25zIG5hbWU9XCJudHJpcFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmdy01MDAgZnMzMCBsaDQ1XCI+RmluZCB5b3VyIG5leHQgdHJpcDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9GYWRlPlxyXG4gICAgICAgICAgICAgIDxGYWRlIGxlZnQ+XHJcbiAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgd29yay10ZXh0LWJveCBtdC00MCBzbS1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItMjBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbnMgbmFtZT1cImNhcmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZnctNTAwIGZzMzAgbGg0NVwiPkJvb2sgd2l0aGluIHRoZSBBcHA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvRmFkZT5cclxuICAgICAgICAgICAgICA8RmFkZSBsZWZ0PlxyXG4gICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHdvcmstdGV4dC1ib3ggbXQtNDAgc20taWNvbiBcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci0yMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29ucyBuYW1lPVwiaG91clwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmdy01MDAgZnMzMCBsaDQ1XCI+RW5qb3kgeW91ciB0cmlwPC9oMj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0ZhZGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm9cIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmdzUwMCBmczYwIGxoOTBcIj5cclxuICAgICAgICAgICAgRXhwbG9yZSBEdWJhaSwgTG9uZG9uLCBNeWtvbm9zLCBJYml6YXtcIiBcIn1cclxuICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvRWxlbWVudD5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmVhdHVyZXMyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWJldHdlZW5cIj5cclxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy1pbWctY3N0XCIgc3JjPVwiaW1nL20yLnBuZ1wiIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImYtYm94XCI+XHJcbiAgICAgICAgICAgIDxMaWdodFNwZWVkIGxlZnQ+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiamRrZjIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJY29ucyBuYW1lPVwiZTFcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZ3NjAwIGZzMjAgbGgzMFwiPlxyXG4gICAgICAgICAgICAgICAgICBFYXNpbHkgZmluZCB5b3VyIG5leHQgSG90ZWwsIFJlc3RhdXJhbnQgYW5kIEFjdGl2aXR5IGJhc2VkIG9uXHJcbiAgICAgICAgICAgICAgICAgIHlvdXIgbG9jYXRpb25cclxuICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTGlnaHRTcGVlZD5cclxuICAgICAgICAgICAgPExpZ2h0U3BlZWQgcmlnaHQgb3Bwb3NpdGUgZGVsYXk9ezgwMH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIG10LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZ3NjAwIGZzMjAgbGgzMFwiPkJlc3QgUHJpY2UgR3VhcmFudGVlIDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8SWNvbnMgbmFtZT1cImUxXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9MaWdodFNwZWVkPlxyXG4gICAgICAgICAgICA8TGlnaHRTcGVlZCBsZWZ0IGRlbGF5PXs4MDB9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1iZXR3ZWVuIG10LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqZGtmMjNcIj5cclxuICAgICAgICAgICAgICAgICAgPEljb25zIG5hbWU9XCJlMVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmdzYwMCBmczIwIGxoMzBcIj5cclxuICAgICAgICAgICAgICAgICAgQXZhaWxhYmxlIGluOiBEdWJhaSwgTG9uZG9uLCBJYml6YVxyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9MaWdodFNwZWVkPlxyXG4gICAgICAgICAgICA8TGlnaHRTcGVlZCByaWdodCBvcHBvc2l0ZSBkZWxheT17ODAwfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgbXQtMTAwXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZnc2MDAgZnMyMCBsaDMwXCI+XHJcbiAgICAgICAgICAgICAgICAgIFJlZmVyIGZyaWVuZHMgYW5kIGVhcm4gdXAgdG8gMTAle1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgIDxJY29ucyBuYW1lPVwiZTFcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0xpZ2h0U3BlZWQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy1pbWctY3N0IG0zaW1nXCIgc3JjPVwiaW1nL20zLnBuZ1wiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPEZvcm1pa1xyXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgdmFsaWRhdGlvblNjaGVtYT17RGlzcGxheWluZ0Vycm9yTWVzc2FnZXNTY2hlbWF9XHJcbiAgICAgICAgb25TdWJtaXQ9e2FzeW5jICh2YWx1ZXMsIHsgc2V0U3VibWl0dGluZyB9KSA9PiB7XHJcbiAgICAgICAgICBhZGQodmFsdWVzLmVtYWlsKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgeyh7XHJcbiAgICAgICAgICBlcnJvcnMsXHJcbiAgICAgICAgICB0b3VjaGVkLFxyXG4gICAgICAgICAgZ2V0RmllbGRQcm9wcyxcclxuICAgICAgICAgIHN1Ym1pdEZvcm0sXHJcbiAgICAgICAgICBzZXRFcnJvcnMsXHJcbiAgICAgICAgICBoYW5kbGVCbHVyLFxyXG4gICAgICAgICAgdmFsdWVzLFxyXG4gICAgICAgIH0pID0+IHtcclxuICAgICAgICAgIC8vIGNzdEVycm9ycyA9IGVycm9ycztcclxuXHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Rm9ybSBvbktleURvd249e29uS2V5RG93bn0+XHJcbiAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIHN1YnNjcmliZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3MtcmVzMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInBvcy1hYnMyXCIgc3JjPVwiaW1nL21yLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1iZXR3ZWVuIGZsZXgtY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmdzYwMCBmczMzIGxoNTRcIj5cclxuICAgICAgICAgICAgICAgICAgICBTdWJzY3JpYmUgdG8gZ2V0IGluZm9ybWF0aW9uLCBsYXRlc3QgbmV3cyBhbmQgb3RoZXJcclxuICAgICAgICAgICAgICAgICAgICBpbnRlcmVzdGluZyBvZmZlcnMgYWJvdXQgQUxMaW5PbmVcclxuICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYi1ib3ggZmxleC1iZXR3ZWVuIHctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWJldHdlZW4gaW5wdXRib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJY29ucyBuYW1lPVwibWFpbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLmdldEZpZWxkUHJvcHMoXCJlbWFpbFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIGVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzdWJtaXRGb3JtKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBmdzYwMCBmczE3IGxoMjNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2hvd0FuaW1hdGlvbiA9PSB0cnVlID8gPExvYWRpbmcgLz4gOiBcIiBTdWJzY3JpYmVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIHt0b3VjaGVkLmVtYWlsICYmIGVycm9ycy5lbWFpbCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiwgbWFyZ2luVG9wOiAxMCwgbWF4V2lkdGg6IDMyMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcnMuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zLXJlczFcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwb3MtYWIxXCIgc3JjPVwiaW1nL21sLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPC9Gb3JtaWs+XHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPE1vZGFsIHNob3c9e3Nob3d9IGhhbmRsZUNsb3NlPXtoYW5kbGVDbG9zZX0gaGFuZGxlU2hvdz17aGFuZGxlU2hvd30gLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
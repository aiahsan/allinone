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
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/loading */ "./components/loading.tsx");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/navbar */ "./components/navbar.tsx");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/footer */ "./components/footer.jsx");
/* harmony import */ var react_reveal_LightSpeed__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-reveal/LightSpeed */ "./node_modules/react-reveal/LightSpeed.js");
/* harmony import */ var react_reveal_LightSpeed__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_reveal_LightSpeed__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_15__);
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
    children: [showmessage ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__.Toast, {
      style: {
        position: "fixed",
        top: 10,
        right: 10,
        zIndex: 1
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__.Toast.Header, {
        onClick: function onClick() {
          return setshowmessage(false);
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
          src: "holder.js/20x20?text=%20",
          className: "rounded mr-2",
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("strong", {
          className: "mr-auto",
          children: "All in One City"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__.Toast.Body, {
        children: message
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {}, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "bg",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "container nav-barcst",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_navbar__WEBPACK_IMPORTED_MODULE_12__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
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
                lineNumber: 84,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react_reveal_Fade__WEBPACK_IMPORTED_MODULE_15___default()), {
              right: true,
              opposite: true,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                className: "fs16 lh24",
                children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "flex-mb",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
                className: "btn fs-16 lh27",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_Icons__WEBPACK_IMPORTED_MODULE_6__.default, {
                  name: "playstore"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 99,
                  columnNumber: 19
                }, this), "Pre-Register"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
                className: "btn fs-16 lh27",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_Icons__WEBPACK_IMPORTED_MODULE_6__.default, {
                  name: "appstore"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 103,
                  columnNumber: 19
                }, this), "Pre-Register"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
              className: "no-dsp",
              src: "img/m1.png",
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("section", {
      className: "container features",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
        className: "fw600 fs50 lh75",
        children: " App Features"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 9
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
                lineNumber: 120,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
              className: "fw600 fs30 lh45",
              children: "Booking"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              className: "fs16 lh24",
              children: ["Lorem Ipsum is simply dummy text of the printing and typesetting indus. Lorem Ipsum", " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 11
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
                lineNumber: 133,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
              className: "fw600 fs30 lh45",
              children: "Explore"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              className: "fs16 lh24",
              children: ["Lorem Ipsum is simply dummy text of the printing and typesetting indus. Lorem Ipsum", " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
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
                lineNumber: 145,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
              className: "fw600 fs30 lh45",
              children: "Customer Support"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              className: "fs16 lh24",
              children: ["Lorem Ipsum is simply dummy text of the printing and typesetting indus. Lorem Ipsum", " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("section", {
      className: "container features howitwork",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
        className: "fw600 fs50 lh75",
        children: " How it Works"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "d-flex w-100 howitwork-flex ",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "howitwork-inner",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
            src: "img/vpng.jpg",
            className: "mx-imgplay w-100"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react_reveal_Fade__WEBPACK_IMPORTED_MODULE_15___default()), {
            children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "d-flex work-text-box  ",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "mr-20 sm-icon",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_Icons__WEBPACK_IMPORTED_MODULE_6__.default, {
                  name: "download"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 169,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 168,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
                  className: "fw-500 fs30 lh45",
                  children: "Download the App"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 172,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: "btnstores",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
                    className: "btn",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_Icons__WEBPACK_IMPORTED_MODULE_6__.default, {
                      name: "a1"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 175,
                      columnNumber: 23
                    }, this), "Pre-Register"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 174,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
                    className: "btn",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_Icons__WEBPACK_IMPORTED_MODULE_6__.default, {
                      name: "a2"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 179,
                      columnNumber: 23
                    }, this), " Pre-Register"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 178,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 173,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 171,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react_reveal_Fade__WEBPACK_IMPORTED_MODULE_15___default()), {
            children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "d-flex align-items-center work-text-box mt-40 sm-icon",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "mr-20",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_Icons__WEBPACK_IMPORTED_MODULE_6__.default, {
                  name: "ntrip"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 189,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 188,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
                  className: "fw-500 fs30 lh45",
                  children: "Find your next trip"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 192,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 191,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 187,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react_reveal_Fade__WEBPACK_IMPORTED_MODULE_15___default()), {
            children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "d-flex align-items-center work-text-box mt-40 sm-icon",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "mr-20",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_Icons__WEBPACK_IMPORTED_MODULE_6__.default, {
                  name: "card"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 200,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 199,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
                  className: "fw-500 fs30 lh45",
                  children: "Book within the App"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 203,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 202,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react_reveal_Fade__WEBPACK_IMPORTED_MODULE_15___default()), {
            children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "d-flex align-items-center work-text-box mt-40 sm-icon ",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "mr-20",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_Icons__WEBPACK_IMPORTED_MODULE_6__.default, {
                  name: "hour"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 211,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 210,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
                  className: "fw-500 fs30 lh45",
                  children: "Enjoy your trip"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 214,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 213,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 209,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 207,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "hero",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
        className: "fw500 fs60 lh90",
        children: ["Explore Dubai, London, Mykonos, Ibiza", " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 222,
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
          lineNumber: 229,
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
                  lineNumber: 234,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 233,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
                className: "fw600 fs20 lh30",
                children: "Easily find your next Hotel, Restaurant and Activity based on your location"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 237,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 232,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 231,
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
                lineNumber: 245,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_Icons__WEBPACK_IMPORTED_MODULE_6__.default, {
                name: "e1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 246,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 244,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 243,
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
                  lineNumber: 252,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 251,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
                className: "fw600 fs20 lh30",
                children: "Available in: Dubai, London, Ibiza"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 254,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 250,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 249,
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
                lineNumber: 261,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_Icons__WEBPACK_IMPORTED_MODULE_6__.default, {
                name: "e1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 264,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 260,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 259,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
          className: "w-img-cst m3img",
          src: "img/m3.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 268,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 227,
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
                lineNumber: 295,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 294,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "flex-between flex-column",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
                className: "fw600 fs33 lh54",
                children: "Subscribe to get information, latest news and other interesting offers about ALLinOne"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 298,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "sb-box flex-between w-100",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: "flex-between inputbox",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_Icons__WEBPACK_IMPORTED_MODULE_6__.default, {
                    name: "mail"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 304,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", _objectSpread(_objectSpread({}, getFieldProps("email")), {}, {
                    placeholder: "Your email",
                    type: "text"
                  }), void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 305,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 303,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
                    onClick: function onClick() {
                      return submitForm();
                    },
                    className: "btn fw600 fs17 lh23",
                    children: showAnimation == true ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_loading__WEBPACK_IMPORTED_MODULE_11__.default, {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 317,
                      columnNumber: 50
                    }, _this) : " Subscribe"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 313,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 311,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 302,
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
                lineNumber: 323,
                columnNumber: 21
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 297,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "pos-res1",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                className: "pos-ab1",
                src: "img/ml.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 329,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 328,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 293,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 13
        }, _this);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_13__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Index, "c/9zhvKubUdm5K7MWLx5NGnpwK0=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbIkRpc3BsYXlpbmdFcnJvck1lc3NhZ2VzU2NoZW1hIiwiWXVwIiwic2hhcGUiLCJlbWFpbCIsInJlcXVpcmVkIiwiSW5kZXgiLCJSZWFjdCIsIm1lc3NhZ2UiLCJzZXRtZXNzYWdlIiwic2hvd21lc3NhZ2UiLCJzZXRzaG93bWVzc2FnZSIsInNob3dBbmltYXRpb24iLCJzZXRzaG93QW5pbWF0aW9uIiwib25LZXlEb3duIiwia2V5RXZlbnQiLCJjaGFyQ29kZSIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsImFkZCIsImFkZERvYyIsImNvbGxlY3Rpb24iLCJkYiIsInRoZW4iLCJ4Iiwic2V0VGltZW91dCIsImRvY1JlZiIsInBvc2l0aW9uIiwidG9wIiwicmlnaHQiLCJ6SW5kZXgiLCJ2YWx1ZXMiLCJzZXRTdWJtaXR0aW5nIiwiZXJyb3JzIiwidG91Y2hlZCIsImdldEZpZWxkUHJvcHMiLCJzdWJtaXRGb3JtIiwic2V0RXJyb3JzIiwiaGFuZGxlQmx1ciIsImNvbG9yIiwibWFyZ2luVG9wIiwibWF4V2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsNkJBQTZCLEdBQUdDLHVDQUFBLEdBQWFDLEtBQWIsQ0FBbUI7QUFDdkRDLE9BQUssRUFBRUYsdUNBQUEsR0FBYUcsUUFBYixDQUFzQixnQkFBdEIsRUFBd0NELEtBQXhDO0FBRGdELENBQW5CLENBQXRDO0FBR2UsU0FBU0UsS0FBVCxHQUFpQjtBQUFBOztBQUFBOztBQUFBLHdCQUNBQyxxREFBQSxDQUFlLEVBQWYsQ0FEQTtBQUFBO0FBQUEsTUFDdkJDLE9BRHVCO0FBQUEsTUFDZEMsVUFEYzs7QUFBQSx5QkFFUUYscURB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QUEsOEJBSUd4QixhQUFhLElBQUksSUFBakIsZ0JBQXdCLDhEQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBQXhCLEdBQXNDO0FBSnpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFMRixFQXlCR3NCLE9BQU8sQ0FBQzlCLEtBQVIsSUFBaUI2QixNQUFNLENBQUM3QixLQUF4QixpQkFDQztBQUFLLHFCQUFLLEVBQUU7QUFBRW1DLHVCQUFLLEVBQUUsS0FBVDtBQUFnQkMsMkJBQVMsRUFBRSxFQUEzQjtBQUErQkMsMEJBQVEsRUFBRTtBQUF6QyxpQkFBWjtBQUFBLDBCQUNHUixNQUFNLENBQUM3QjtBQURWO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBMUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRixlQW1DRTtBQUFLLHVCQUFTLEVBQUMsVUFBZjtBQUFBLHFDQUNFO0FBQUsseUJBQVMsRUFBQyxTQUFmO0FBQXlCLG1CQUFHLEVBQUM7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBbkNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUEyQ0Q7QUEvREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTNORixlQTRSRSw4REFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBNVJGO0FBQUEsa0JBREY7QUFnU0Q7O0dBblV1QkUsSzs7S0FBQUEsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42MmYxM2Q4MjVlODE4MTIyMmVhOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSWNvbnMgZnJvbSBcIi4uL3N0eWxlcy9JY29uc1wiO1xyXG5pbXBvcnQgeyBkYiB9IGZyb20gXCIuLi91dGlsL2ZpcmViYXNlXCI7XHJcbmltcG9ydCB7IGNvbGxlY3Rpb24sIGFkZERvYyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuaW1wb3J0IHsgVG9hc3QgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCAqIGFzIFl1cCBmcm9tIFwieXVwXCI7XHJcbmltcG9ydCB7IEZvcm1paywgRm9ybSB9IGZyb20gXCJmb3JtaWtcIjtcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL2NvbXBvbmVudHMvbG9hZGluZ1wiO1xyXG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuLi9jb21wb25lbnRzL25hdmJhclwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2Zvb3RlclwiO1xyXG5pbXBvcnQgTGlnaHRTcGVlZCBmcm9tIFwicmVhY3QtcmV2ZWFsL0xpZ2h0U3BlZWRcIjtcclxuaW1wb3J0IEZhZGUgZnJvbSBcInJlYWN0LXJldmVhbC9GYWRlXCI7XHJcbmNvbnN0IERpc3BsYXlpbmdFcnJvck1lc3NhZ2VzU2NoZW1hID0gWXVwLm9iamVjdCgpLnNoYXBlKHtcclxuICBlbWFpbDogWXVwLnN0cmluZygpLnJlcXVpcmVkKFwiRW1haWwgUmVxdWlyZWRcIikuZW1haWwoKSxcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xyXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRtZXNzYWdlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzaG93bWVzc2FnZSwgc2V0c2hvd21lc3NhZ2VdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaG93QW5pbWF0aW9uLCBzZXRzaG93QW5pbWF0aW9uXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgZnVuY3Rpb24gb25LZXlEb3duKGtleUV2ZW50KSB7XHJcbiAgICBpZiAoKGtleUV2ZW50LmNoYXJDb2RlIHx8IGtleUV2ZW50LmtleUNvZGUpID09PSAxMykge1xyXG4gICAgICBrZXlFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBhZGQgPSBhc3luYyAoZW1haWwpID0+IHtcclxuICAgIChhc3luYyAoKSA9PiB7XHJcbiAgICAgIHNldHNob3dBbmltYXRpb24odHJ1ZSk7XHJcbiAgICAgIC8vIEFkZCBhIG5ldyBkb2N1bWVudCB3aXRoIGEgZ2VuZXJhdGVkIGlkLlxyXG4gICAgICBjb25zdCBkb2NSZWYgPSBhd2FpdCBhZGREb2MoY29sbGVjdGlvbihkYiwgXCJlbWFpbHNcIiksIHtcclxuICAgICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHgpID0+IHtcclxuICAgICAgICAgIHNldG1lc3NhZ2UoXCJFbWFpbCBSZWdpc3RlcmRcIik7XHJcbiAgICAgICAgICBzZXRzaG93bWVzc2FnZSh0cnVlKTtcclxuICAgICAgICAgIHNldHNob3dBbmltYXRpb24oZmFsc2UpO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldHNob3dtZXNzYWdlKGZhbHNlKTtcclxuICAgICAgICAgIH0sIDMwMDApO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKCh4KSA9PiB7XHJcbiAgICAgICAgICBzZXRtZXNzYWdlKFwiU29tZXRoaW5nIHdlbid0IHdyb25nIHRyeSBhZ2lhblwiKTtcclxuICAgICAgICAgIHNldHNob3dtZXNzYWdlKHRydWUpO1xyXG4gICAgICAgICAgc2V0c2hvd0FuaW1hdGlvbihmYWxzZSk7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgc2V0c2hvd21lc3NhZ2UoZmFsc2UpO1xyXG4gICAgICAgICAgfSwgMzAwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KSgpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtzaG93bWVzc2FnZSA/IChcclxuICAgICAgICA8VG9hc3RcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXHJcbiAgICAgICAgICAgIHRvcDogMTAsXHJcbiAgICAgICAgICAgIHJpZ2h0OiAxMCxcclxuICAgICAgICAgICAgekluZGV4OiAxLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VG9hc3QuSGVhZGVyIG9uQ2xpY2s9eygpID0+IHNldHNob3dtZXNzYWdlKGZhbHNlKX0+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9XCJob2xkZXIuanMvMjB4MjA/dGV4dD0lMjBcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQgbXItMlwiXHJcbiAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJtci1hdXRvXCI+QWxsIGluIE9uZSBDaXR5PC9zdHJvbmc+XHJcbiAgICAgICAgICA8L1RvYXN0LkhlYWRlcj5cclxuICAgICAgICAgIDxUb2FzdC5Cb2R5PnttZXNzYWdlfTwvVG9hc3QuQm9keT5cclxuICAgICAgICA8L1RvYXN0PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDw+PC8+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbmF2LWJhcmNzdFwiPlxyXG4gICAgICAgICAgPE5hdkJhciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHRyaXBib3hcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IHRvcC1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPEZhZGUgdG9wIG9wcG9zaXRlPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZ3NjAwIGZzNjAgbGg5MFwiPlxyXG4gICAgICAgICAgICAgICAgICBHZXQgdGhlIG5ldyBBbGxpbk9uZSBBcHAgZm9yIHlvdXIgbmV4dCB0cmlwXHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgIDwvRmFkZT5cclxuICAgICAgICAgICAgICA8RmFkZSByaWdodCBvcHBvc2l0ZT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZzMTYgbGgyNFwiPlxyXG4gICAgICAgICAgICAgICAgICBMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kXHJcbiAgICAgICAgICAgICAgICAgIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnknc1xyXG4gICAgICAgICAgICAgICAgICBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXIgc2luY2UgdGhlIDE1MDBzLCB3aGVuIGFuIHVua25vd25cclxuICAgICAgICAgICAgICAgICAgcHJpbnRlciB0b29rIGEgZ2FsbGV5IG9mIHR5cGVcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L0ZhZGU+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1tYlwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gZnMtMTYgbGgyN1wiPlxyXG4gICAgICAgICAgICAgICAgICA8SWNvbnMgbmFtZT1cInBsYXlzdG9yZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIFByZS1SZWdpc3RlclxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBmcy0xNiBsaDI3XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJY29ucyBuYW1lPVwiYXBwc3RvcmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICBQcmUtUmVnaXN0ZXJcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm5vLWRzcFwiIHNyYz1cImltZy9tMS5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIGZlYXR1cmVzXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZ3NjAwIGZzNTAgbGg3NVwiPiBBcHAgRmVhdHVyZXM8L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1iZXR3ZWVuIHctMTAwXCI+XHJcbiAgICAgICAgICA8RmFkZSBsZWZ0PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXJ0dXJlLWJveFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ZnLXAgYmctc3ZnLTEgXCI+XHJcbiAgICAgICAgICAgICAgICA8SWNvbnMgbmFtZT1cImIxXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZnc2MDAgZnMzMCBsaDQ1XCI+Qm9va2luZzwvaDI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnMxNiBsaDI0XCI+XHJcbiAgICAgICAgICAgICAgICBMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nXHJcbiAgICAgICAgICAgICAgICBpbmR1cy4gTG9yZW0gSXBzdW17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvRmFkZT5cclxuXHJcbiAgICAgICAgICA8RmFkZSBib3R0b20+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVhcnR1cmUtYm94IG1yLW5vLTBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN2Zy1wIGJnLXN2Zy0yIFwiPlxyXG4gICAgICAgICAgICAgICAgPEljb25zIG5hbWU9XCJiMlwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZ3NjAwIGZzMzAgbGg0NVwiPkV4cGxvcmU8L2gyPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZzMTYgbGgyNFwiPlxyXG4gICAgICAgICAgICAgICAgTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZ1xyXG4gICAgICAgICAgICAgICAgaW5kdXMuIExvcmVtIElwc3Vte1wiIFwifVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0ZhZGU+XHJcbiAgICAgICAgICA8RmFkZSByaWdodD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWFydHVyZS1ib3hcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN2Zy1wIGJnLXN2Zy0zIFwiPlxyXG4gICAgICAgICAgICAgICAgPEljb25zIG5hbWU9XCJiM1wiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZ3NjAwIGZzMzAgbGg0NVwiPkN1c3RvbWVyIFN1cHBvcnQ8L2gyPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZzMTYgbGgyNFwiPlxyXG4gICAgICAgICAgICAgICAgTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZ1xyXG4gICAgICAgICAgICAgICAgaW5kdXMuIExvcmVtIElwc3Vte1wiIFwifVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0ZhZGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lciBmZWF0dXJlcyBob3dpdHdvcmtcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZnc2MDAgZnM1MCBsaDc1XCI+IEhvdyBpdCBXb3JrczwvaDE+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IHctMTAwIGhvd2l0d29yay1mbGV4IFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3dpdHdvcmstaW5uZXJcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvdnBuZy5qcGdcIiBjbGFzc05hbWU9XCJteC1pbWdwbGF5IHctMTAwXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEZhZGU+XHJcbiAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IHdvcmstdGV4dC1ib3ggIFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci0yMCBzbS1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJY29ucyBuYW1lPVwiZG93bmxvYWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZnctNTAwIGZzMzAgbGg0NVwiPkRvd25sb2FkIHRoZSBBcHA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bnN0b3Jlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SWNvbnMgbmFtZT1cImExXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIFByZS1SZWdpc3RlclxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SWNvbnMgbmFtZT1cImEyXCIgLz4gUHJlLVJlZ2lzdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvRmFkZT5cclxuICAgICAgICAgICAgPEZhZGU+XHJcbiAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciB3b3JrLXRleHQtYm94IG10LTQwIHNtLWljb25cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItMjBcIj5cclxuICAgICAgICAgICAgICAgICAgPEljb25zIG5hbWU9XCJudHJpcFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmdy01MDAgZnMzMCBsaDQ1XCI+RmluZCB5b3VyIG5leHQgdHJpcDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9GYWRlPlxyXG4gICAgICAgICAgICA8RmFkZT5cclxuICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHdvcmstdGV4dC1ib3ggbXQtNDAgc20taWNvblwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci0yMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8SWNvbnMgbmFtZT1cImNhcmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZnctNTAwIGZzMzAgbGg0NVwiPkJvb2sgd2l0aGluIHRoZSBBcHA8L2gyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvRmFkZT5cclxuICAgICAgICAgICAgPEZhZGU+XHJcbiAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciB3b3JrLXRleHQtYm94IG10LTQwIHNtLWljb24gXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLTIwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJY29ucyBuYW1lPVwiaG91clwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmdy01MDAgZnMzMCBsaDQ1XCI+RW5qb3kgeW91ciB0cmlwPC9oMj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0ZhZGU+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZ3NTAwIGZzNjAgbGg5MFwiPlxyXG4gICAgICAgICAgRXhwbG9yZSBEdWJhaSwgTG9uZG9uLCBNeWtvbm9zLCBJYml6YXtcIiBcIn1cclxuICAgICAgICA8L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmVhdHVyZXMyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWJldHdlZW5cIj5cclxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy1pbWctY3N0XCIgc3JjPVwiaW1nL20yLnBuZ1wiIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImYtYm94XCI+XHJcbiAgICAgICAgICAgIDxMaWdodFNwZWVkIGxlZnQ+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiamRrZjIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJY29ucyBuYW1lPVwiZTFcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZ3NjAwIGZzMjAgbGgzMFwiPlxyXG4gICAgICAgICAgICAgICAgICBFYXNpbHkgZmluZCB5b3VyIG5leHQgSG90ZWwsIFJlc3RhdXJhbnQgYW5kIEFjdGl2aXR5IGJhc2VkIG9uXHJcbiAgICAgICAgICAgICAgICAgIHlvdXIgbG9jYXRpb25cclxuICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTGlnaHRTcGVlZD5cclxuICAgICAgICAgICAgPExpZ2h0U3BlZWQgcmlnaHQgb3Bwb3NpdGUgZGVsYXk9ezgwMH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIG10LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZ3NjAwIGZzMjAgbGgzMFwiPkJlc3QgUHJpY2UgR3VhcmFudGVlIDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8SWNvbnMgbmFtZT1cImUxXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9MaWdodFNwZWVkPlxyXG4gICAgICAgICAgICA8TGlnaHRTcGVlZCBsZWZ0IGRlbGF5PXs4MDB9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1iZXR3ZWVuIG10LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqZGtmMjNcIj5cclxuICAgICAgICAgICAgICAgICAgPEljb25zIG5hbWU9XCJlMVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmdzYwMCBmczIwIGxoMzBcIj5cclxuICAgICAgICAgICAgICAgICAgQXZhaWxhYmxlIGluOiBEdWJhaSwgTG9uZG9uLCBJYml6YVxyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9MaWdodFNwZWVkPlxyXG4gICAgICAgICAgICA8TGlnaHRTcGVlZCByaWdodCBvcHBvc2l0ZSBkZWxheT17ODAwfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgbXQtMTAwXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZnc2MDAgZnMyMCBsaDMwXCI+XHJcbiAgICAgICAgICAgICAgICAgIFJlZmVyIGZyaWVuZHMgYW5kIGVhcm4gdXAgdG8gMTAle1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgIDxJY29ucyBuYW1lPVwiZTFcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0xpZ2h0U3BlZWQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy1pbWctY3N0IG0zaW1nXCIgc3JjPVwiaW1nL20zLnBuZ1wiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPEZvcm1pa1xyXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgdmFsaWRhdGlvblNjaGVtYT17RGlzcGxheWluZ0Vycm9yTWVzc2FnZXNTY2hlbWF9XHJcbiAgICAgICAgb25TdWJtaXQ9e2FzeW5jICh2YWx1ZXMsIHsgc2V0U3VibWl0dGluZyB9KSA9PiB7XHJcbiAgICAgICAgICBhZGQodmFsdWVzLmVtYWlsKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgeyh7XHJcbiAgICAgICAgICBlcnJvcnMsXHJcbiAgICAgICAgICB0b3VjaGVkLFxyXG4gICAgICAgICAgZ2V0RmllbGRQcm9wcyxcclxuICAgICAgICAgIHN1Ym1pdEZvcm0sXHJcbiAgICAgICAgICBzZXRFcnJvcnMsXHJcbiAgICAgICAgICBoYW5kbGVCbHVyLFxyXG4gICAgICAgICAgdmFsdWVzLFxyXG4gICAgICAgIH0pID0+IHtcclxuICAgICAgICAgIC8vIGNzdEVycm9ycyA9IGVycm9ycztcclxuXHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Rm9ybSBvbktleURvd249e29uS2V5RG93bn0+XHJcbiAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIHN1YnNjcmliZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3MtcmVzMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInBvcy1hYnMyXCIgc3JjPVwiaW1nL21yLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1iZXR3ZWVuIGZsZXgtY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmdzYwMCBmczMzIGxoNTRcIj5cclxuICAgICAgICAgICAgICAgICAgICBTdWJzY3JpYmUgdG8gZ2V0IGluZm9ybWF0aW9uLCBsYXRlc3QgbmV3cyBhbmQgb3RoZXJcclxuICAgICAgICAgICAgICAgICAgICBpbnRlcmVzdGluZyBvZmZlcnMgYWJvdXQgQUxMaW5PbmVcclxuICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYi1ib3ggZmxleC1iZXR3ZWVuIHctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWJldHdlZW4gaW5wdXRib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJY29ucyBuYW1lPVwibWFpbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLmdldEZpZWxkUHJvcHMoXCJlbWFpbFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIGVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzdWJtaXRGb3JtKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBmdzYwMCBmczE3IGxoMjNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2hvd0FuaW1hdGlvbiA9PSB0cnVlID8gPExvYWRpbmcgLz4gOiBcIiBTdWJzY3JpYmVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIHt0b3VjaGVkLmVtYWlsICYmIGVycm9ycy5lbWFpbCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiwgbWFyZ2luVG9wOiAxMCwgbWF4V2lkdGg6IDMyMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcnMuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zLXJlczFcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwb3MtYWIxXCIgc3JjPVwiaW1nL21sLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPC9Gb3JtaWs+XHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
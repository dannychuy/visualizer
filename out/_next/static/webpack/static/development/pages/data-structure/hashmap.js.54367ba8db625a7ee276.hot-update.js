webpackHotUpdate("static/development/pages/data-structure/hashmap.js",{

/***/ "./pages/data-structure/hashmap.js":
/*!*****************************************!*\
  !*** ./pages/data-structure/hashmap.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HashMap; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
/* harmony import */ var react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bulma-components/dist */ "./node_modules/react-bulma-components/dist/index.js");
/* harmony import */ var react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _hashmap_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hashmap.module.css */ "./pages/data-structure/hashmap.module.css");
/* harmony import */ var _hashmap_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_hashmap_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _structure_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./structure.module.css */ "./pages/data-structure/structure.module.css");
/* harmony import */ var _structure_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_structure_module_css__WEBPACK_IMPORTED_MODULE_11__);





var _jsxFileName = "/Users/Danny/Documents/next/algo-vis/pages/data-structure/hashmap.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var HashMap = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HashMap, _React$Component);

  var _super = _createSuper(HashMap);

  function HashMap() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HashMap);

    _this = _super.call(this);
    _this.state = {
      'panel': 'create'
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(HashMap, [{
    key: "renderPanel",
    value: function renderPanel() {
      switch (this.state.panel) {
        case 'create':
          return __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_9__["Panel"].Block, {
            renderAs: "a",
            active: true,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 5
            }
          }, __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_9__["Panel"].Icon, {
            renderAs: react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_9__["Icon"],
            icon: "angle-down",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 6
            }
          }), " create");

        case 'edit':
          return __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_9__["Panel"].Block, {
            renderAs: "a",
            active: true,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 5
            }
          }, __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_9__["Panel"].Icon, {
            renderAs: react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_9__["Icon"],
            icon: "angle-down",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 6
            }
          }), " eit");

        case 'destroy':
          return __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_9__["Panel"].Block, {
            renderAs: "a",
            active: true,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 5
            }
          }, __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_9__["Panel"].Icon, {
            renderAs: react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_9__["Icon"],
            icon: "angle-down",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 6
            }
          }), " destroyyy");

        default:
          return __jsx("div", {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 11
            }
          }, " missed ");
      }
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 4
        }
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 5
        }
      }, __jsx("title", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 6
        }
      }, "HashMap")), __jsx("div", {
        className: _structure_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.viewport,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 5
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 6
        }
      }, "First Post"), __jsx("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 6
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 7
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 8
        }
      }, "Back to home"))), __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_9__["Panel"], {
        className: _structure_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.control,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 6
        }
      }, __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_9__["Panel"].Header, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 7
        }
      }, "repositories"), __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_9__["Panel"].Tabs, {
        className: "panel-tabs",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 7
        }
      }, __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_9__["Panel"].Tabs.Tab, {
        active: this.state.panel == 'create',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 8
        }
      }, "create"), __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_9__["Panel"].Tabs.Tab, {
        active: this.state.panel == 'modify',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 8
        }
      }, "modify"), __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_9__["Panel"].Tabs.Tab, {
        active: this.state.panel == 'destroy',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 8
        }
      }, "destroy")), this.renderPanel())));
    }
  }]);

  return HashMap;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ })

})
//# sourceMappingURL=hashmap.js.54367ba8db625a7ee276.hot-update.js.map
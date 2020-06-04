(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/data-structure/hashmap.js"],{

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: siteTitle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siteTitle", function() { return siteTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _navbar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar.js */ "./components/navbar.js");
var _jsxFileName = "/Users/Danny/Documents/next/algo-vis/components/layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var name = 'James Chu';
var siteTitle = 'Visualizer';
function Layout(_ref) {
  var children = _ref.children,
      home = _ref.home;
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 3
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4
    }
  }, __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  })), __jsx(_navbar_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }
  }), __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 4
    }
  }, children));
}

/***/ }),

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bulma-components/dist */ "./node_modules/react-bulma-components/dist/index.js");
/* harmony import */ var react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/Danny/Documents/next/algo-vis/components/navbar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function NavBar() {
  return __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }, __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Brand, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }
  }, __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Item, {
    renderAs: "a",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: "https://bulma.io/images/bulma-logo.png",
    alt: "Bulma: a modern CSS framework based on Flexbox",
    width: "112",
    height: "28",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  })), __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Burger, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  })), __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Menu, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }
  }, __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Container, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Item, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 6
    }
  }, "Home"), __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Item, {
    dropdown: true,
    hoverable: true,
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 6
    }
  }, __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Link, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, "Algorithms"), __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Dropdown, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Item, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 8
    }
  }, "Not Done 1"), __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Item, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 8
    }
  }, "Not Done 2"), __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Item, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 8
    }
  }, "Not Done 3"), __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Item, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 8
    }
  }, "Not Done 4"))), __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Item, {
    dropdown: true,
    hoverable: true,
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 6
    }
  }, __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Link, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, "Data Structures"), __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Dropdown, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Item, {
    href: "/data-structure/hashmap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 8
    }
  }, "HashMap"), __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Item, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 8
    }
  }, "Not Done 2"), __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Item, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 8
    }
  }, "Not Done 3"), __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Item, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 8
    }
  }, "Not Done 4")))), __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Container, {
    position: "end",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Item, {
    href: "https://dannychu.com",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 6
    }
  }, "About"))));
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./pages/data-structure/hashmap.module.css":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./pages/data-structure/hashmap.module.css ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "", "",{"version":3,"sources":[],"names":[],"mappings":"","file":"hashmap.module.css"}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./pages/data-structure/structure.module.css":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./pages/data-structure/structure.module.css ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".structure_control__2s9oe {\n\tposition: absolute;\n\tbottom: 50px;\n\tleft: 50%;\n\ttransform: translateX(-50%);\n\n\twidth: 450px;\n}\n\n.structure_viewport__33v7k {\n\tposition: relative;\n    height: calc(100vh - 60px);\n}\n\n/*.modifyBoard {\n\tscroll-snap-type: mandatory;\n\tscroll-snap-points-y: repeat(150px);\n\tscroll-snap-type: y mandatory;\n\n\theight: 150px;\n\toverflow: scroll;\n}*/\n\n/*\n\tscroll-snap-stop: always;\n\tscroll-snap-align: start;\n*/", "",{"version":3,"sources":["/Users/Danny/Documents/next/algo-vis/pages/data-structure/structure.module.css"],"names":[],"mappings":"AAAA;CACC,kBAAkB;CAClB,YAAY;CACZ,SAAS;CACT,2BAA2B;;CAE3B,YAAY;AACb;;AAEA;CACC,kBAAkB;IACf,0BAA0B;AAC9B;;AAEA;;;;;;;EAOE;;AAEF;;;CAGC","file":"structure.module.css","sourcesContent":[".control {\n\tposition: absolute;\n\tbottom: 50px;\n\tleft: 50%;\n\ttransform: translateX(-50%);\n\n\twidth: 450px;\n}\n\n.viewport {\n\tposition: relative;\n    height: calc(100vh - 60px);\n}\n\n/*.modifyBoard {\n\tscroll-snap-type: mandatory;\n\tscroll-snap-points-y: repeat(150px);\n\tscroll-snap-type: y mandatory;\n\n\theight: 150px;\n\toverflow: scroll;\n}*/\n\n/*\n\tscroll-snap-stop: always;\n\tscroll-snap-align: start;\n*/"]}]);
// Exports
exports.locals = {
	"control": "structure_control__2s9oe",
	"viewport": "structure_viewport__33v7k"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/function-bind/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/function-bind/implementation.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "./node_modules/function-bind/index.js":
/*!*********************************************!*\
  !*** ./node_modules/function-bind/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/function-bind/implementation.js");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "./node_modules/has/src/index.js":
/*!***************************************!*\
  !*** ./node_modules/has/src/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/native-url/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/native-url/dist/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var e,t=(e=__webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js"))&&"object"==typeof e&&"default"in e?e.default:e,r=/https?|ftp|gopher|file/;function o(e){"string"==typeof e&&(e=g(e));var o=function(e,t,r){var o=e.auth,a=e.hostname,s=e.protocol||"",c=e.pathname||"",h=e.hash||"",p=e.query||"",n=!1;o=o?encodeURIComponent(o).replace(/%3A/i,":")+"@":"",e.host?n=o+e.host:a&&(n=o+(~a.indexOf(":")?"["+a+"]":a),e.port&&(n+=":"+e.port)),p&&"object"==typeof p&&(p=t.encode(p));var l=e.search||p&&"?"+p||"";return s&&":"!==s.substr(-1)&&(s+=":"),e.slashes||(!s||r.test(s))&&!1!==n?(n="//"+(n||""),c&&"/"!==c[0]&&(c="/"+c)):n||(n=""),h&&"#"!==h[0]&&(h="#"+h),l&&"?"!==l[0]&&(l="?"+l),{protocol:s,host:n,pathname:c=c.replace(/[?#]/g,encodeURIComponent),search:l=l.replace("#","%23"),hash:h}}(e,t,r);return""+o.protocol+o.host+o.pathname+o.search+o.hash}var a="http://",s="w.w",c=a+s,h=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,p=/https?|ftp|gopher|file/;function n(e,t){var r="string"==typeof e?g(e):e;e="object"==typeof e?o(e):e;var s=g(t),n="";r.protocol&&!r.slashes&&(n=r.protocol,e=e.replace(r.protocol,""),n+="/"===t[0]||"/"===e[0]?"/":""),n&&s.protocol&&(n="",s.slashes||(n=s.protocol,t=t.replace(s.protocol,"")));var l=e.match(h);l&&!s.protocol&&(e=e.substr((n=l[1]+(l[2]||"")).length),/^\/\/[^/]/.test(t)&&(n=n.slice(0,-1)));var i=new URL(e,c+"/"),f=new URL(t,i).toString().replace(c,""),u=s.protocol||r.protocol;return u+=r.slashes||s.slashes?"//":"",!n&&u?f=f.replace(a,u):n&&(f=f.replace(a,"")),p.test(f)||~t.indexOf(".")||"/"===e.slice(-1)||"/"===t.slice(-1)||"/"!==f.slice(-1)||(f=f.slice(0,-1)),n&&(f=n+("/"===f[0]?f.substr(1):f)),f}function l(){}l.parse=g,l.format=o,l.resolve=n,l.resolveObject=n;var i=/^https?|ftp|gopher|file/,f=/^(.*?)([#?].*)/,u=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,m=/^([a-z0-9.+-]*:)?\/\/\/*/i,v=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function d(e){try{return decodeURI(e)}catch(t){return e}}function g(e,r,a){if(void 0===r&&(r=!1),void 0===a&&(a=!1),e&&"object"==typeof e&&e instanceof l)return e;var h=(e=e.trim()).match(f);e=h?d(h[1]).replace(/\\/g,"/")+h[2]:d(e).replace(/\\/g,"/"),v.test(e)&&"/"!==e.slice(-1)&&(e+="/");var p=!/(^javascript)/.test(e)&&e.match(u),n=m.test(e),g="";p&&(i.test(p[1])||(g=p[1].toLowerCase(),e=""+p[2]+p[3]),p[2]||(n=!1,i.test(p[1])?(g=p[1],e=""+p[3]):e="//"+p[3]),3!==p[2].length&&1!==p[2].length||(g=p[1],e="/"+p[3]));var b,y=(h?h[1]:e).match(/(:[0-9]+)/),j="";y&&y[1]&&3===y[1].length&&(e=e.replace(j=y[1],j+"00"));var w=new l,x="",U="";try{b=new URL(e)}catch(t){x=t,g||a||!/^\/\//.test(e)||/^\/\/.+[@.]/.test(e)||(U="/",e=e.substr(1));try{b=new URL(e,c)}catch(e){return w.protocol=g,w.href=g,w}}w.slashes=n&&!U,w.host=b.host===s?"":b.host,w.hostname=b.hostname===s?"":b.hostname.replace(/(\[|\])/g,""),w.protocol=x?g||null:b.protocol,w.search=b.search.replace(/\\/g,"%5C"),w.hash=b.hash.replace(/\\/g,"%5C");var R=e.split("#");!w.search&&~R[0].indexOf("?")&&(w.search="?"),w.hash||""!==R[1]||(w.hash="#"),w.query=r?t.decode(b.search.substr(1)):w.search.substr(1),w.pathname=U+d(b.pathname).replace(/"/g,"%22"),"about:"===w.protocol&&"blank"===w.pathname&&(w.protocol="",w.pathname=""),x&&"/"!==e[0]&&(w.pathname=w.pathname.substr(1)),g&&!i.test(g)&&"/"!==e.slice(-1)&&"/"===w.pathname&&(w.pathname=""),w.path=w.pathname+w.search,w.auth=[b.username,b.password].map(decodeURIComponent).filter(Boolean).join(":"),w.port=b.port,j&&(w.host=w.host.replace(j+"00",j),w.port=w.port.slice(0,-2)),w.href=U?""+w.pathname+w.search+w.hash:o(w);var O=/^(file)/.test(w.href)?["host","hostname"]:[];return Object.keys(w).forEach(function(e){~O.indexOf(e)||(w[e]=w[e]||null)}),w}exports.parse=g,exports.format=o,exports.resolve=n,exports.resolveObject=function(e,t){return g(n(e,t))},exports.Url=l;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!***********************************************************************************************************************!*\
  !*** delegated ./node_modules/next/dist/build/polyfills/object-assign.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/next/dist/build/polyfills/object-assign.js");

/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object.assign/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/object.assign/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var assign=Object.assign.bind(Object);function g(){return assign;}Object.defineProperties(g(),{implementation:{get:g},shim:{value:g},getPolyfill:{value:g}});module.exports=g();

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fdata-structure%2Fhashmap&absolutePagePath=%2FUsers%2FDanny%2FDocuments%2Fnext%2Falgo-vis%2Fpages%2Fdata-structure%2Fhashmap.js!./":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fdata-structure%2Fhashmap&absolutePagePath=%2FUsers%2FDanny%2FDocuments%2Fnext%2Falgo-vis%2Fpages%2Fdata-structure%2Fhashmap.js ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/data-structure/hashmap", function() {
      var mod = __webpack_require__(/*! ./pages/data-structure/hashmap.js */ "./pages/data-structure/hashmap.js")
      if(true) {
        module.hot.accept(/*! ./pages/data-structure/hashmap.js */ "./pages/data-structure/hashmap.js", function() {
          if(!next.router.components["/data-structure/hashmap"]) return
          var updatedPage = __webpack_require__(/*! ./pages/data-structure/hashmap.js */ "./pages/data-structure/hashmap.js")
          next.router.update("/data-structure/hashmap", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _url = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = true ? window.IntersectionObserver : undefined;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners["delete"](entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = function listenToIntersections(el, cb) {
  var observer = getObserver();

  if (!observer) {
    return function () {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return function () {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners["delete"](el);
  };
};

var Link = /*#__PURE__*/function (_react$Component) {
  _inherits(Link, _react$Component);

  var _super = _createSuper(Link);

  function Link(props) {
    var _this;

    _classCallCheck(this, Link);

    _this = _super.call(this, props);
    _this.p = void 0;

    _this.cleanUpListeners = function () {};

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var pathname = window.location.pathname;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router["default"][_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    _this.p = props.prefetch !== false;
    return _this;
  }

  _createClass(Link, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanUpListeners();
    }
  }, {
    key: "getPaths",
    value: function getPaths() {
      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href,
          parsedAs = _this$formatUrls2.as;

      var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
      return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
    }
  }, {
    key: "handleRef",
    value: function handleRef(ref) {
      var _this2 = this;

      if (this.p && IntersectionObserver && ref && ref.tagName) {
        this.cleanUpListeners();
        var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
        '%')];

        if (!isPrefetched) {
          this.cleanUpListeners = listenToIntersections(ref, function () {
            _this2.prefetch();
          });
        }
      }
    } // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

  }, {
    key: "prefetch",
    value: function prefetch(options) {
      if (!this.p || false) return; // Prefetch the JSON page if asked (only in the client)

      var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
      // loading with priority which can reject but we don't
      // want to force navigation since this is only a prefetch

      _router["default"].prefetch(paths[
      /* href */
      0], paths[
      /* asPath */
      1], options)["catch"](function (err) {
        if (true) {
          // rethrow to show invalid URL errors
          throw err;
        }
      });

      prefetched[paths.join( // Join on an invalid URI character
      '%')] = true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = _react["default"].createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = _react.Children.only(children);

      var props = {
        ref: function ref(el) {
          _this3.handleRef(el);

          if (child && typeof child === 'object' && child.ref) {
            if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
              child.ref.current = el;
            }
          }
        },
        onMouseEnter: function onMouseEnter(e) {
          if (child.props && typeof child.props.onMouseEnter === 'function') {
            child.props.onMouseEnter(e);
          }

          _this3.prefetch({
            priority: true
          });
        },
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this3.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (false) { var rewriteUrlForNextExport; }

      return _react["default"].cloneElement(child, props);
    }
  }]);

  return Link;
}(_react.Component);

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

  var exact = __webpack_require__(/*! prop-types-exact */ "./node_modules/prop-types-exact/build/index.js"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _construct = __webpack_require__(/*! @babel/runtime/helpers/construct */ "./node_modules/@babel/runtime/helpers/construct.js");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (true) {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
urlPropertyFields.forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  return _react["default"].useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = _construct(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  var _iterator = _createForOfIteratorHelper(urlPropertyFields),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var property = _step.value;

      if (typeof _router[property] === 'object') {
        instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

        continue;
      }

      instance[property] = _router[property];
    } // Events is a static property on the router, the router doesn't have to be initialized to use it

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  instance.events = _router2["default"].events;
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react["default"].createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.AmpStateContext = React.createContext({});

if (true) {
  exports.AmpStateContext.displayName = 'AmpStateContext';
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

function isInAmpMode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ampFirst = _ref.ampFirst,
      ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return ampFirst || hybrid && hasQuery;
}

exports.isInAmpMode = isInAmpMode;

function useAmp() {
  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(react_1["default"].useContext(amp_context_1.AmpStateContext));
}

exports.useAmp = useAmp;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head-manager-context.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.HeadManagerContext = React.createContext(null);

if (true) {
  exports.HeadManagerContext.displayName = 'HeadManagerContext';
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var side_effect_1 = __importDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/next-server/lib/side-effect.js"));

var amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

var head_manager_context_1 = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

var amp_1 = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/next-server/lib/amp.js");

function defaultHead() {
  var inAmpMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var head = [react_1["default"].createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push(react_1["default"].createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

exports.defaultHead = defaultHead;

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === react_1["default"].Fragment) {
    return list.concat(react_1["default"].Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new Set();
  var tags = new Set();
  var metaTypes = new Set();
  var metaCategories = {};
  return function (h) {
    var unique = true;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      var key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        unique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          unique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              unique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new Set();

            if (categories.has(category)) {
              unique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return unique;
  };
}
/**
 *
 * @param headElements List of multiple <Head> instances
 */


function reduceComponents(headElements, props) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = react_1["default"].Children.toArray(headElement.props.children);
    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map(function (c, i) {
    var key = c.key || i;
    return react_1["default"].cloneElement(c, {
      key: key
    });
  });
}

var Effect = side_effect_1["default"]();
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */

function Head(_ref) {
  var children = _ref.children;
  return react_1["default"].createElement(amp_context_1.AmpStateContext.Consumer, null, function (ampState) {
    return react_1["default"].createElement(head_manager_context_1.HeadManagerContext.Consumer, null, function (updateHead) {
      return react_1["default"].createElement(Effect, {
        reduceComponentsToState: reduceComponents,
        handleStateChange: updateHead,
        inAmpMode: amp_1.isInAmpMode(ampState)
      }, children);
    });
  });
}

Head.rewind = Effect.rewind;
exports["default"] = Head;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  var all = Object.create(null);
  return {
    on: function on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off: function off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit: function emit(type) {
      for (var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        evts[_key - 1] = arguments[_key];
      }

      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(function (handler) {
        handler.apply(void 0, evts);
      });
    }
  };
}

exports["default"] = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.RouterContext = React.createContext(null);

if (true) {
  exports.RouterContext.displayName = 'RouterContext';
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

var mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

var prepareRoute = function prepareRoute(path) {
  return toRoute(!path || path === '/' ? '/index' : path);
};

function fetchNextData(pathname, query, isServerRender, cb) {
  var attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: "/_next/data/".concat(__NEXT_DATA__.buildId).concat(pathname, ".json"),
      query: query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(function (res) {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error("Failed to load static props");
      }

      return res.json();
    });
  }

  return getResponse().then(function (data) {
    return cb ? cb(data) : data;
  })["catch"](function (err) {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

var Router = /*#__PURE__*/function () {
  function Router(pathname, query, as, _ref) {
    var _this = this;

    var initialProps = _ref.initialProps,
        pageLoader = _ref.pageLoader,
        App = _ref.App,
        wrapApp = _ref.wrapApp,
        Component = _ref.Component,
        err = _ref.err,
        subscription = _ref.subscription,
        isFallback = _ref.isFallback;

    _classCallCheck(this, Router);

    // Static Data Cache
    this.sdc = {};

    this.onPopState = function (e) {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        var _pathname = _this.pathname,
            _query = _this.query;

        _this.changeState('replaceState', utils_1.formatWithValidation({
          pathname: _pathname,
          query: _query
        }), utils_1.getURL());

        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && _this.isSsr && e.state.as === _this.asPath && url_1.parse(e.state.url).pathname === _this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (_this._bps && !_this._bps(e.state)) {
        return;
      }

      var _e$state = e.state,
          url = _e$state.url,
          as = _e$state.as,
          options = _e$state.options;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      _this.replace(url, as, options);
    };

    this._getStaticData = function (asPath) {
      var pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, _this.isSsr, function (data) {
        return _this.sdc[pathname] = data;
      });
    };

    this._getServerData = function (asPath) {
      var _url_1$parse = url_1.parse(asPath, true),
          pathname = _url_1$parse.pathname,
          query = _url_1$parse.query;

      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, _this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component: Component,
        props: initialProps,
        err: err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (true) {
      // in order for `e.state` to work on the `onpopstate` event
      // we have to register the initial route upon initialization
      this.changeState('replaceState', utils_1.formatWithValidation({
        pathname: pathname,
        query: query
      }), as);
      window.addEventListener('popstate', this.onPopState);
    }
  } // @deprecated backwards compatibility even though it's a private method.


  _createClass(Router, [{
    key: "update",
    value: function update(route, mod) {
      var Component = mod["default"] || mod;
      var data = this.components[route];

      if (!data) {
        throw new Error("Cannot update unavailable route: ".concat(route));
      }

      var newData = Object.assign(Object.assign({}, data), {
        Component: Component,
        __N_SSG: mod.__N_SSG,
        __N_SSP: mod.__N_SSP
      });
      this.components[route] = newData; // pages/_app.js updated

      if (route === '/_app') {
        this.notify(this.components[this.route]);
        return;
      }

      if (route === this.route) {
        this.notify(newData);
      }
    }
  }, {
    key: "reload",
    value: function reload() {
      window.location.reload();
    }
    /**
     * Go back in history
     */

  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
    /**
     * Performs a `pushState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "push",
    value: function push(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('pushState', url, as, options);
    }
    /**
     * Performs a `replaceState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "replace",
    value: function replace(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('replaceState', url, as, options);
    }
  }, {
    key: "change",
    value: function change(method, _url, _as, options) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        if (!options._h) {
          _this2.isSsr = false;
        } // marking route changes as a navigation start entry


        if (utils_1.ST) {
          performance.mark('routeChange');
        } // If url and as provided as an object representation,
        // we'll format them into the string version here.


        var url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
        var as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
        url = addBasePath(url);
        as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
        // "<page>/index.html" directly for the SSR page.

        if (false) { var rewriteUrlForNextExport; }

        _this2.abortComponentLoad(as); // If the url change is only related to a hash change
        // We should not proceed. We should only change the state.
        // WARNING: `_h` is an internal option for handing Next.js client-side
        // hydration. Your app should _never_ use this property. It may change at
        // any time without notice.


        if (!options._h && _this2.onlyAHashChange(as)) {
          _this2.asPath = as;
          Router.events.emit('hashChangeStart', as);

          _this2.changeState(method, url, as, options);

          _this2.scrollToHash(as);

          Router.events.emit('hashChangeComplete', as);
          return resolve(true);
        }

        var _url_1$parse2 = url_1.parse(url, true),
            pathname = _url_1$parse2.pathname,
            query = _url_1$parse2.query,
            protocol = _url_1$parse2.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return resolve(false);
        } // If asked to change the current URL we should reload the current page
        // (not location.reload() but reload getInitialProps and other Next.js stuffs)
        // We also need to set the method = replaceState always
        // as this should not go into the history (That's how browsers work)
        // We should compare the new asPath to the current asPath, not the url


        if (!_this2.urlIsNew(as)) {
          method = 'replaceState';
        }

        var route = toRoute(pathname);
        var _options$shallow = options.shallow,
            shallow = _options$shallow === void 0 ? false : _options$shallow;

        if (is_dynamic_1.isDynamicRoute(route)) {
          var _url_1$parse3 = url_1.parse(as),
              asPathname = _url_1$parse3.pathname;

          var routeRegex = route_regex_1.getRouteRegex(route);
          var routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

          if (!routeMatch) {
            var missingParams = Object.keys(routeRegex.groups).filter(function (param) {
              return !query[param];
            });

            if (missingParams.length > 0) {
              if (true) {
                console.warn("Mismatching `as` and `href` failed to manually provide " + "the params: ".concat(missingParams.join(', '), " in the `href`'s `query`"));
              }

              return reject(new Error("The provided `as` value (".concat(asPathname, ") is incompatible with the `href` value (").concat(route, "). ") + "Read more: https://err.sh/zeit/next.js/incompatible-href-as"));
            }
          } else {
            // Merge params into `query`, overwriting any specified in search
            Object.assign(query, routeMatch);
          }
        }

        Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

        _this2.getRouteInfo(route, pathname, query, as, shallow).then(function (routeInfo) {
          var error = routeInfo.error;

          if (error && error.cancelled) {
            return resolve(false);
          }

          Router.events.emit('beforeHistoryChange', as);

          _this2.changeState(method, url, as, options);

          if (true) {
            var appComp = _this2.components['/_app'].Component;
            window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
          }

          _this2.set(route, pathname, query, as, routeInfo);

          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        }, reject);
      });
    }
  }, {
    key: "changeState",
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (true) {
        if (typeof window.history === 'undefined') {
          console.error("Warning: window.history is not available.");
          return;
        }

        if (typeof window.history[method] === 'undefined') {
          console.error("Warning: window.history.".concat(method, " is not available"));
          return;
        }
      }

      if (method !== 'pushState' || utils_1.getURL() !== as) {
        window.history[method]({
          url: url,
          as: as,
          options: options
        }, // Most browsers currently ignores this parameter, although they may use it in the future.
        // Passing the empty string here should be safe against future changes to the method.
        // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
        '', as);
      }
    }
  }, {
    key: "getRouteInfo",
    value: function getRouteInfo(route, pathname, query, as) {
      var _this3 = this;

      var shallow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
      // If the route is already rendered on the screen.

      if (shallow && cachedRouteInfo && this.route === route) {
        return Promise.resolve(cachedRouteInfo);
      }

      var handleError = function handleError(err, loadErrorFail) {
        return new Promise(function (resolve) {
          if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
            // If we can't load the page it could be one of following reasons
            //  1. Page doesn't exists
            //  2. Page does exist in a different zone
            //  3. Internal error while loading the page
            // So, doing a hard reload is the proper way to deal with this.
            window.location.href = as; // Changing the URL doesn't block executing the current code path.
            // So, we need to mark it as a cancelled error and stop the routing logic.

            err.cancelled = true; // @ts-ignore TODO: fix the control flow here

            return resolve({
              error: err
            });
          }

          if (err.cancelled) {
            // @ts-ignore TODO: fix the control flow here
            return resolve({
              error: err
            });
          }

          resolve(_this3.fetchComponent('/_error').then(function (res) {
            var Component = res.page;
            var routeInfo = {
              Component: Component,
              err: err
            };
            return new Promise(function (resolve) {
              _this3.getInitialProps(Component, {
                err: err,
                pathname: pathname,
                query: query
              }).then(function (props) {
                routeInfo.props = props;
                routeInfo.error = err;
                resolve(routeInfo);
              }, function (gipErr) {
                console.error('Error in error page `getInitialProps`: ', gipErr);
                routeInfo.error = err;
                routeInfo.props = {};
                resolve(routeInfo);
              });
            });
          })["catch"](function (err) {
            return handleError(err, true);
          }));
        });
      };

      return new Promise(function (resolve, reject) {
        if (cachedRouteInfo) {
          return resolve(cachedRouteInfo);
        }

        _this3.fetchComponent(route).then(function (res) {
          return resolve({
            Component: res.page,
            __N_SSG: res.mod.__N_SSG,
            __N_SSP: res.mod.__N_SSP
          });
        }, reject);
      }).then(function (routeInfo) {
        var Component = routeInfo.Component,
            __N_SSG = routeInfo.__N_SSG,
            __N_SSP = routeInfo.__N_SSP;

        if (true) {
          var _require = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js"),
              isValidElementType = _require.isValidElementType;

          if (!isValidElementType(Component)) {
            throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));
          }
        }

        return _this3._getData(function () {
          return __N_SSG ? _this3._getStaticData(as) : __N_SSP ? _this3._getServerData(as) : _this3.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
          {
            pathname: pathname,
            query: query,
            asPath: as
          });
        }).then(function (props) {
          routeInfo.props = props;
          _this3.components[route] = routeInfo;
          return routeInfo;
        });
      })["catch"](handleError);
    }
  }, {
    key: "set",
    value: function set(route, pathname, query, as, data) {
      this.isFallback = false;
      this.route = route;
      this.pathname = pathname;
      this.query = query;
      this.asPath = as;
      this.notify(data);
    }
    /**
     * Callback to execute before replacing router state
     * @param cb callback to be executed
     */

  }, {
    key: "beforePopState",
    value: function beforePopState(cb) {
      this._bps = cb;
    }
  }, {
    key: "onlyAHashChange",
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _this$asPath$split = this.asPath.split('#'),
          _this$asPath$split2 = _slicedToArray(_this$asPath$split, 2),
          oldUrlNoHash = _this$asPath$split2[0],
          oldHash = _this$asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = _slicedToArray(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


      if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
        return true;
      } // If the urls are change, there's more than a hash change


      if (oldUrlNoHash !== newUrlNoHash) {
        return false;
      } // If the hash has changed, then it's a hash only change.
      // This check is necessary to handle both the enter and
      // leave hash === '' cases. The identity case falls through
      // and is treated as a next reload.


      return oldHash !== newHash;
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = _slicedToArray(_as$split3, 2),
          hash = _as$split4[1]; // Scroll to top if the hash is just `#` with no value


      if (hash === '') {
        window.scrollTo(0, 0);
        return;
      } // First we check if the element by id is found


      var idEl = document.getElementById(hash);

      if (idEl) {
        idEl.scrollIntoView();
        return;
      } // If there's no element with the id, we check the `name` property
      // To mirror browsers


      var nameEl = document.getElementsByName(hash)[0];

      if (nameEl) {
        nameEl.scrollIntoView();
      }
    }
  }, {
    key: "urlIsNew",
    value: function urlIsNew(asPath) {
      return this.asPath !== asPath;
    }
    /**
     * Prefetch page code, you may wait for the data during page rendering.
     * This feature only works in production!
     * @param url the href of prefetched page
     * @param asPath the as path of the prefetched page
     */

  }, {
    key: "prefetch",
    value: function prefetch(url) {
      var _this4 = this;

      var asPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return new Promise(function (resolve, reject) {
        var _url_1$parse4 = url_1.parse(url),
            pathname = _url_1$parse4.pathname,
            protocol = _url_1$parse4.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return;
        } // Prefetch is not supported in development mode because it would trigger on-demand-entries


        if (true) {
          return;
        }

        var route = delBasePath(toRoute(pathname));
        Promise.all([_this4.pageLoader.prefetchData(url, delBasePath(asPath)), _this4.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(function () {
          return resolve();
        }, reject);
      });
    }
  }, {
    key: "fetchComponent",
    value: function fetchComponent(route) {
      var cancelled, cancel, componentResult, error;
      return _regeneratorRuntime.async(function fetchComponent$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              cancelled = false;

              cancel = this.clc = function () {
                cancelled = true;
              };

              route = delBasePath(route);
              _context.next = 5;
              return _regeneratorRuntime.awrap(this.pageLoader.loadPage(route));

            case 5:
              componentResult = _context.sent;

              if (!cancelled) {
                _context.next = 10;
                break;
              }

              error = new Error("Abort fetching component for route: \"".concat(route, "\""));
              error.cancelled = true;
              throw error;

            case 10:
              if (cancel === this.clc) {
                this.clc = null;
              }

              return _context.abrupt("return", componentResult);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "_getData",
    value: function _getData(fn) {
      var _this5 = this;

      var cancelled = false;

      var cancel = function cancel() {
        cancelled = true;
      };

      this.clc = cancel;
      return fn().then(function (data) {
        if (cancel === _this5.clc) {
          _this5.clc = null;
        }

        if (cancelled) {
          var err = new Error('Loading initial props cancelled');
          err.cancelled = true;
          throw err;
        }

        return data;
      });
    }
  }, {
    key: "getInitialProps",
    value: function getInitialProps(Component, ctx) {
      var App = this.components['/_app'].Component;

      var AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      return utils_1.loadGetInitialProps(App, {
        AppTree: AppTree,
        Component: Component,
        router: this,
        ctx: ctx
      });
    }
  }, {
    key: "abortComponentLoad",
    value: function abortComponentLoad(as) {
      if (this.clc) {
        var e = new Error('Route Cancelled');
        e.cancelled = true;
        Router.events.emit('routeChangeError', e, as);
        this.clc();
        this.clc = null;
      }
    }
  }, {
    key: "notify",
    value: function notify(data) {
      this.sub(data, this.components['/_app'].Component);
    }
  }], [{
    key: "_rewriteUrlForNextExport",
    value: function _rewriteUrlForNextExport(url) {
      if (false) { var rewriteUrlForNextExport; } else {
        return url;
      }
    }
  }]);

  return Router;
}();

exports["default"] = Router;
Router.events = mitt_1["default"]();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

var TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  var re = routeRegex.re,
      groups = routeRegex.groups;
  return function (pathname) {
    var routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    var decode = function decode(param) {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        var err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    var params = {};
    Object.keys(groups).forEach(function (slugName) {
      var g = groups[slugName];
      var m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(function (entry) {
          return decode(entry);
        }) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  var escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  var groups = {};
  var groupIndex = 1;
  var parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, function (_, $1) {
    var isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups: groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _assertThisInitialized = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _toConsumableArray = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var isServer = false;

exports["default"] = function () {
  var mountedInstances = new Set();
  var state;

  function emitChange(component) {
    state = component.props.reduceComponentsToState(_toConsumableArray(mountedInstances), component.props);

    if (component.props.handleStateChange) {
      component.props.handleStateChange(state);
    }
  }

  return /*#__PURE__*/function (_react_1$Component) {
    _inherits(_class, _react_1$Component);

    var _super = _createSuper(_class);

    _createClass(_class, null, [{
      key: "rewind",
      // Used when server rendering
      value: function rewind() {
        var recordedState = state;
        state = undefined;
        mountedInstances.clear();
        return recordedState;
      }
    }]);

    function _class(props) {
      var _this;

      _classCallCheck(this, _class);

      _this = _super.call(this, props);

      if (isServer) {
        mountedInstances.add(_assertThisInitialized(_this));
        emitChange(_assertThisInitialized(_this));
      }

      return _this;
    }

    _createClass(_class, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        mountedInstances.add(this);
        emitChange(this);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        emitChange(this);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        mountedInstances["delete"](this);
        emitChange(this);
      }
    }, {
      key: "render",
      value: function render() {
        return null;
      }
    }]);

    return _class;
  }(react_1.Component);
};

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");
/**
 * Utils
 */


function execOnce(fn) {
  var used = false;
  var result;
  return function () {
    if (!used) {
      used = true;
      result = fn.apply(void 0, arguments);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;
  return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  var href = window.location.href;
  var origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

function loadGetInitialProps(App, ctx) {
  var _a, message, res, props, _message;

  return _regeneratorRuntime.async(function loadGetInitialProps$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          if (!((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps)) {
            _context.next = 4;
            break;
          }

          message = "\"".concat(getDisplayName(App), ".getInitialProps()\" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.");
          throw new Error(message);

        case 4:
          // when called from _app `ctx` is nested in `ctx`
          res = ctx.res || ctx.ctx && ctx.ctx.res;

          if (App.getInitialProps) {
            _context.next = 12;
            break;
          }

          if (!(ctx.ctx && ctx.Component)) {
            _context.next = 11;
            break;
          }

          _context.next = 9;
          return _regeneratorRuntime.awrap(loadGetInitialProps(ctx.Component, ctx.ctx));

        case 9:
          _context.t0 = _context.sent;
          return _context.abrupt("return", {
            pageProps: _context.t0
          });

        case 11:
          return _context.abrupt("return", {});

        case 12:
          _context.next = 14;
          return _regeneratorRuntime.awrap(App.getInitialProps(ctx));

        case 14:
          props = _context.sent;

          if (!(res && isResSent(res))) {
            _context.next = 17;
            break;
          }

          return _context.abrupt("return", props);

        case 17:
          if (props) {
            _context.next = 20;
            break;
          }

          _message = "\"".concat(getDisplayName(App), ".getInitialProps()\" should resolve to an object. But found \"").concat(props, "\" instead.");
          throw new Error(_message);

        case 20:
          if (true) {
            if (Object.keys(props).length === 0 && !ctx.ctx) {
              console.warn("".concat(getDisplayName(App), " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps"));
            }
          }

          return _context.abrupt("return", props);

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(function (key) {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn("Unknown key passed via urlObject into url.format: ".concat(key));
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
/*!**********************************************************************!*\
  !*** ./node_modules/prop-types-exact/build/helpers/isPlainObject.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = isPlainObject;
function isPlainObject(x) {
  return x && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && !Array.isArray(x);
}
module.exports = exports['default'];
//# sourceMappingURL=isPlainObject.js.map

/***/ }),

/***/ "./node_modules/prop-types-exact/build/index.js":
/*!******************************************************!*\
  !*** ./node_modules/prop-types-exact/build/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = forbidExtraProps;

var _object = __webpack_require__(/*! object.assign */ "./node_modules/next/dist/build/polyfills/object.assign/index.js");

var _object2 = _interopRequireDefault(_object);

var _has = __webpack_require__(/*! has */ "./node_modules/has/src/index.js");

var _has2 = _interopRequireDefault(_has);

var _isPlainObject = __webpack_require__(/*! ./helpers/isPlainObject */ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js");

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var zeroWidthSpace = '\u200B';
var specialProperty = 'prop-types-exact: ' + zeroWidthSpace;
var semaphore = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' ? Symbol['for'](specialProperty) : /* istanbul ignore next */specialProperty;

function brand(fn) {
  return (0, _object2['default'])(fn, _defineProperty({}, specialProperty, semaphore));
}

function isBranded(value) {
  return value && value[specialProperty] === semaphore;
}

function forbidExtraProps(propTypes) {
  if (!(0, _isPlainObject2['default'])(propTypes)) {
    throw new TypeError('given propTypes must be an object');
  }
  if ((0, _has2['default'])(propTypes, specialProperty) && !isBranded(propTypes[specialProperty])) {
    throw new TypeError('Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`');
  }

  return (0, _object2['default'])({}, propTypes, _defineProperty({}, specialProperty, brand(function () {
    function forbidUnknownProps(props, _, componentName) {
      var unknownProps = Object.keys(props).filter(function (prop) {
        return !(0, _has2['default'])(propTypes, prop);
      });
      if (unknownProps.length > 0) {
        return new TypeError(String(componentName) + ': unknown props found: ' + String(unknownProps.join(', ')));
      }
      return null;
    }

    return forbidUnknownProps;
  }())));
}
module.exports = exports['default'];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/checkPropTypes.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/react-bulma-components/dist/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-bulma-components/dist/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! react */ "./node_modules/react/index.js");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

/* global define */
(function () {
  'use strict';

  var hasOwn = {}.hasOwnProperty;

  function classNames() {
    var classes = [];

    for (var i = 0; i < arguments.length; i++) {
      var arg = arguments[i];
      if (!arg) continue;

      var argType = _typeof(arg);

      if (argType === 'string' || argType === 'number') {
        classes.push(arg);
      } else if (Array.isArray(arg) && arg.length) {
        var inner = classNames.apply(null, arg);

        if (inner) {
          classes.push(inner);
        }
      } else if (argType === 'object') {
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes.push(key);
          }
        }
      }
    }

    return classes.join(' ');
  }

  if (  true && module.exports) {
    classNames.default = classNames;
    module.exports = classNames;
  } else if (  true && _typeof(__webpack_require__(3)) === 'object' && __webpack_require__(3)) {
    // register as 'classnames', consistent with npm package name
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return classNames;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    window.classNames = classNames;
  }
})();

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var components_form_namespaceObject = {};
__webpack_require__.r(components_form_namespaceObject);
__webpack_require__.d(components_form_namespaceObject, "Field", function() { return field; });
__webpack_require__.d(components_form_namespaceObject, "Control", function() { return control; });
__webpack_require__.d(components_form_namespaceObject, "Input", function() { return input; });
__webpack_require__.d(components_form_namespaceObject, "Label", function() { return components_label; });
__webpack_require__.d(components_form_namespaceObject, "Textarea", function() { return components_textarea; });
__webpack_require__.d(components_form_namespaceObject, "Select", function() { return components_select; });
__webpack_require__.d(components_form_namespaceObject, "Checkbox", function() { return components_checkbox; });
__webpack_require__.d(components_form_namespaceObject, "Radio", function() { return components_radio; });
__webpack_require__.d(components_form_namespaceObject, "Help", function() { return help; });
__webpack_require__.d(components_form_namespaceObject, "InputFile", function() { return input_file_InputFile; });

// EXTERNAL MODULE: ./src/index.sass
var src_0 = __webpack_require__(5);

// EXTERNAL MODULE: ./src/components/form/form.sass
var form_form = __webpack_require__(6);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(0);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var node_modules_classnames = __webpack_require__(2);
var classnames_default = /*#__PURE__*/__webpack_require__.n(node_modules_classnames);

// CONCATENATED MODULE: ./src/modifiers/helpers.js
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ var helpers = ({
  propTypes: {
    clearfix: external_prop_types_default.a.bool,
    pull: external_prop_types_default.a.oneOf([undefined, 'right', 'left']),
    marginless: external_prop_types_default.a.bool,
    paddingless: external_prop_types_default.a.bool,
    overlay: external_prop_types_default.a.bool,
    clipped: external_prop_types_default.a.bool,
    radiusless: external_prop_types_default.a.bool,
    shadowless: external_prop_types_default.a.bool,
    unselectable: external_prop_types_default.a.bool,
    invisible: external_prop_types_default.a.bool,
    hidden: external_prop_types_default.a.bool
  },
  defaultProps: {
    clearfix: undefined,
    pull: undefined,
    marginless: undefined,
    paddingless: undefined,
    overlay: undefined,
    clipped: undefined,
    radiusless: undefined,
    shadowless: undefined,
    unselectable: undefined,
    invisible: undefined,
    hidden: undefined
  },
  classnames: function classnames(props) {
    var _classnames2;

    return classnames_default()((_classnames2 = {
      'is-clearfix': props.clearfix
    }, _defineProperty(_classnames2, "is-pulled-".concat(props.pull), props.pull), _defineProperty(_classnames2, 'is-marginless', props.marginless), _defineProperty(_classnames2, 'is-paddingless', props.paddingless), _defineProperty(_classnames2, 'is-overlay', props.overlay), _defineProperty(_classnames2, 'is-clipped', props.clipped), _defineProperty(_classnames2, 'is-radiusless', props.radiusless), _defineProperty(_classnames2, 'is-shadowless', props.shadowless), _defineProperty(_classnames2, 'is-unselectable', props.unselectable), _defineProperty(_classnames2, 'is-invisible', props.invisible), _defineProperty(_classnames2, 'is-hidden', props.hidden), _classnames2));
  },
  clean: function clean(_ref) {
    var hidden = _ref.hidden,
        clearfix = _ref.clearfix,
        paddingless = _ref.paddingless,
        pull = _ref.pull,
        marginless = _ref.marginless,
        overlay = _ref.overlay,
        clipped = _ref.clipped,
        radiusless = _ref.radiusless,
        shadowless = _ref.shadowless,
        unselectable = _ref.unselectable,
        invisible = _ref.invisible,
        props = _objectWithoutProperties(_ref, ["hidden", "clearfix", "paddingless", "pull", "marginless", "overlay", "clipped", "radiusless", "shadowless", "unselectable", "invisible"]);

    return props;
  }
});
// CONCATENATED MODULE: ./src/modifiers/responsives.js
function responsives_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = responsives_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function responsives_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { responsives_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function responsives_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var displays = ['block', 'flex', 'inline', 'inline-block', 'inline-flex'];

var getSizeClassFromProp = function getSizeClassFromProp(sizes) {
  return Object.keys(sizes).reduce(function (classes, size) {
    var _objectSpread2;

    var display = sizes[size].display || {};
    var hide = sizes[size].hide || {};
    var textSize = sizes[size].textSize || {};
    var textAlignment = sizes[size].textAlignment || {};

    var obj = _objectSpread({}, classes, (_objectSpread2 = {}, responsives_defineProperty(_objectSpread2, "is-".concat(display.value, "-").concat(size).concat(display.only ? '-only' : ''), display.value), responsives_defineProperty(_objectSpread2, "is-hidden-".concat(size).concat(hide.only ? '-only' : ''), hide.value), responsives_defineProperty(_objectSpread2, "has-text-".concat(textAlignment.value, "-").concat(size).concat(textAlignment.only ? '-only' : ''), textAlignment.value), responsives_defineProperty(_objectSpread2, "is-size-".concat(textSize.value, "-").concat(size), textSize.value > 0), _objectSpread2));

    return obj;
  }, {});
};

var sizeShape = external_prop_types_default.a.shape({
  display: external_prop_types_default.a.shape({
    value: external_prop_types_default.a.oneOf(displays),
    only: external_prop_types_default.a.bool
  }),
  hide: external_prop_types_default.a.shape({
    value: external_prop_types_default.a.bool,
    only: external_prop_types_default.a.bool
  }),
  textSize: external_prop_types_default.a.shape({
    value: external_prop_types_default.a.oneOf([1, 2, 3, 4, 5, 6])
  }),
  textAlignment: external_prop_types_default.a.shape({
    value: external_prop_types_default.a.oneOf(['centered', 'justified', 'left', 'right']),
    only: external_prop_types_default.a.bool
  })
});
/* harmony default export */ var responsives = ({
  propTypes: {
    responsive: external_prop_types_default.a.shape({
      mobile: sizeShape,
      tablet: sizeShape,
      desktop: sizeShape,
      widescreen: sizeShape,
      fullhd: sizeShape,
      touch: sizeShape
    })
  },
  defaultProps: {
    responsive: undefined
  },
  classnames: function classnames(props) {
    return classnames_default()(_objectSpread({}, getSizeClassFromProp(props.responsive || {})));
  },
  clean: function clean(_ref) {
    var responsive = _ref.responsive,
        hide = _ref.hide,
        props = responsives_objectWithoutProperties(_ref, ["responsive", "hide"]);

    return props;
  }
});
// CONCATENATED MODULE: ./src/modifiers/colors.js
function colors_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = colors_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function colors_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function colors_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // const colors = ['white', 'black', 'light', 'dark', 'primary', 'info', 'link', 'success', 'warning', 'danger', 'black-bis', 'black-ter', 'grey-darker', 'grey-dark', 'grey', 'grey-light', 'grey-lighter', 'white-ter', 'white-bis'];

/* harmony default export */ var colors = ({
  propTypes: {
    textColor: external_prop_types_default.a.string,
    backgroundColor: external_prop_types_default.a.string,
    colorVariant: external_prop_types_default.a.oneOf(['light', 'dark'])
  },
  defaultProps: {
    textColor: undefined,
    backgroundColor: undefined,
    colorVariant: undefined
  },
  classnames: function classnames(props) {
    var _classnames2;

    return classnames_default()((_classnames2 = {}, colors_defineProperty(_classnames2, "has-text-".concat(props.textColor), props.textColor), colors_defineProperty(_classnames2, "has-background-".concat(props.backgroundColor), props.backgroundColor), colors_defineProperty(_classnames2, "is-".concat(props.colorVariant), props.colorVariant), _classnames2));
  },
  clean: function clean(_ref) {
    var textColor = _ref.textColor,
        backgroundColor = _ref.backgroundColor,
        colorVariant = _ref.colorVariant,
        props = colors_objectWithoutProperties(_ref, ["textColor", "backgroundColor", "colorVariant"]);

    return props;
  }
});
// CONCATENATED MODULE: ./src/modifiers/typography.js
function typography_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = typography_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function typography_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function typography_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ var typography = ({
  propTypes: {
    textSize: external_prop_types_default.a.oneOf([1, 2, 3, 4, 5, 6]),
    textAlignment: external_prop_types_default.a.oneOf(['centered', 'justified', 'left', 'right']),
    textTransform: external_prop_types_default.a.oneOf(['capitalized', 'lowercase', 'uppercase']),
    textWeight: external_prop_types_default.a.oneOf(['light', 'normal', 'semibold', 'bold']),
    italic: external_prop_types_default.a.bool
  },
  defaultProps: {
    textSize: undefined,
    textAlignment: undefined,
    textTransform: undefined,
    italic: undefined,
    textWeight: undefined
  },
  classnames: function classnames(props) {
    var _classnames2;

    return classnames_default()((_classnames2 = {}, typography_defineProperty(_classnames2, "has-text-".concat(props.textAlignment), props.textAlignment), typography_defineProperty(_classnames2, "has-text-weight-".concat(props.textWeight), props.textWeight), typography_defineProperty(_classnames2, "is-size-".concat(props.textSize), props.textSize), typography_defineProperty(_classnames2, "is-".concat(props.textTransform), props.textTransform), typography_defineProperty(_classnames2, 'is-italic', props.italic), _classnames2));
  },
  clean: function clean(_ref) {
    var textWeight = _ref.textWeight,
        textTransform = _ref.textTransform,
        italic = _ref.italic,
        textSize = _ref.textSize,
        textAlignment = _ref.textAlignment,
        props = typography_objectWithoutProperties(_ref, ["textWeight", "textTransform", "italic", "textSize", "textAlignment"]);

    return props;
  }
});
// CONCATENATED MODULE: ./src/modifiers/index.js
function modifiers_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function modifiers_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { modifiers_ownKeys(source, true).forEach(function (key) { modifiers_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { modifiers_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function modifiers_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var compose = function compose() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (args) {
    return fns.reduce(function (arg, fn) {
      return fn(arg);
    }, args);
  };
};

/* harmony default export */ var modifiers = ({
  propTypes: modifiers_objectSpread({}, helpers.propTypes, {}, responsives.propTypes, {}, colors.propTypes, {}, typography.propTypes),
  defaultProps: modifiers_objectSpread({}, helpers.defaultProps, {}, responsives.defaultProps, {}, colors.defaultProps, {}, typography.defaultProps),
  classnames: function classnames(props) {
    return classnames_default()(helpers.classnames(props), responsives.classnames(props), colors.classnames(props), typography.classnames(props));
  },
  clean: function clean(props) {
    return compose(helpers.clean, responsives.clean, colors.clean, typography.clean)(props);
  }
});
// CONCATENATED MODULE: ./src/modifiers/render-as.js

var renderAsShape = external_prop_types_default.a.oneOfType([external_prop_types_default.a.string, external_prop_types_default.a.func, external_prop_types_default.a.object]);
/* harmony default export */ var render_as = (renderAsShape);
// CONCATENATED MODULE: ./src/components/element/element.js
function element_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function element_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { element_ownKeys(source, true).forEach(function (key) { element_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { element_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function element_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function element_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = element_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function element_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var element_Element = function Element(_ref) {
  var className = _ref.className,
      renderAs = _ref.renderAs,
      domRef = _ref.domRef,
      allProps = element_objectWithoutProperties(_ref, ["className", "renderAs", "domRef"]);

  var RenderAs = renderAs;
  var props = modifiers.clean(allProps);
  return external_react_default.a.createElement(RenderAs, _extends({
    ref: domRef,
    className: classnames_default()(className, modifiers.classnames(allProps)) || undefined
  }, props));
};

element_Element.propTypes = element_objectSpread({}, modifiers.propTypes, {
  /**
   * Reference to Dom element
   */
  domRef: external_prop_types_default.a.object,
  className: external_prop_types_default.a.string,
  renderAs: render_as
});
element_Element.defaultProps = element_objectSpread({}, modifiers.defaultProps, {
  domRef: undefined,
  className: undefined,
  style: undefined,
  renderAs: 'div'
});
/* harmony default export */ var element_element = (element_Element);
// CONCATENATED MODULE: ./src/components/element/index.js

/* harmony default export */ var components_element = (element_element);
// CONCATENATED MODULE: ./src/components/form/components/field/field-label.js
function field_label_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function field_label_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { field_label_ownKeys(source, true).forEach(function (key) { field_label_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { field_label_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function field_label_extends() { field_label_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return field_label_extends.apply(this, arguments); }

function field_label_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function field_label_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = field_label_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function field_label_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var field_label_FieldLabel = function FieldLabel(_ref) {
  var children = _ref.children,
      className = _ref.className,
      size = _ref.size,
      props = field_label_objectWithoutProperties(_ref, ["children", "className", "size"]);

  return external_react_default.a.createElement(components_element, field_label_extends({}, props, {
    className: classnames_default()('field-label', className, field_label_defineProperty({}, "is-".concat(size), size))
  }), children);
};

field_label_FieldLabel.propTypes = field_label_objectSpread({}, modifiers.propTypes, {
  children: external_prop_types_default.a.node,
  className: external_prop_types_default.a.string,
  style: external_prop_types_default.a.shape({}),
  renderAs: render_as,
  size: external_prop_types_default.a.oneOf(['small', 'normal', 'medium', 'large'])
});
field_label_FieldLabel.defaultProps = field_label_objectSpread({}, modifiers.defaultProps, {
  children: null,
  className: undefined,
  style: undefined,
  renderAs: 'div',
  size: undefined
});
/* harmony default export */ var field_label = (field_label_FieldLabel);
// CONCATENATED MODULE: ./src/components/form/components/field/field-body.js
function field_body_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function field_body_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { field_body_ownKeys(source, true).forEach(function (key) { field_body_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { field_body_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function field_body_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function field_body_extends() { field_body_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return field_body_extends.apply(this, arguments); }

function field_body_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = field_body_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function field_body_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var field_body_FieldBody = function FieldBody(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = field_body_objectWithoutProperties(_ref, ["children", "className"]);

  return external_react_default.a.createElement(components_element, field_body_extends({}, props, {
    className: classnames_default()('field-body', className, {})
  }), children);
};

field_body_FieldBody.propTypes = field_body_objectSpread({}, modifiers.propTypes, {
  children: external_prop_types_default.a.node,
  className: external_prop_types_default.a.string,
  style: external_prop_types_default.a.shape({}),
  renderAs: render_as
});
field_body_FieldBody.defaultProps = field_body_objectSpread({}, modifiers.defaultProps, {
  children: null,
  className: undefined,
  style: undefined,
  renderAs: 'div'
});
/* harmony default export */ var field_body = (field_body_FieldBody);
// CONCATENATED MODULE: ./src/components/form/components/field/field.js
function field_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function field_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { field_ownKeys(source, true).forEach(function (key) { field_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { field_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function field_extends() { field_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return field_extends.apply(this, arguments); }

function field_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function field_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = field_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function field_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










var field_Field = function Field(_ref) {
  var _classnames;

  var className = _ref.className,
      align = _ref.align,
      multiline = _ref.multiline,
      horizontal = _ref.horizontal,
      kind = _ref.kind,
      props = field_objectWithoutProperties(_ref, ["className", "align", "multiline", "horizontal", "kind"]);

  var k = null;

  if (kind === 'addons') {
    k = 'has-addons';
  } else if (kind === 'group') {
    k = 'is-grouped';
  }

  return external_react_default.a.createElement(components_element, field_extends({}, props, {
    className: classnames_default()('field', className, (_classnames = {}, field_defineProperty(_classnames, "".concat(k), k), field_defineProperty(_classnames, "".concat(k, "-").concat(align), k && align), field_defineProperty(_classnames, "".concat(k, "-multiline"), k === 'is-grouped' && multiline), field_defineProperty(_classnames, 'is-horizontal', horizontal), _classnames))
  }));
};

field_Field.Label = field_label;
field_Field.Body = field_body;
field_Field.propTypes = field_objectSpread({}, modifiers.propTypes, {
  children: external_prop_types_default.a.node,
  className: external_prop_types_default.a.string,
  style: external_prop_types_default.a.shape({}),
  renderAs: render_as,
  align: external_prop_types_default.a.oneOf(['centered', 'right']),
  kind: external_prop_types_default.a.oneOf(['addons', 'group']),
  multiline: external_prop_types_default.a.bool,
  horizontal: external_prop_types_default.a.bool
});
field_Field.defaultProps = field_objectSpread({}, modifiers.defaultProps, {
  children: null,
  className: undefined,
  style: undefined,
  renderAs: 'div',
  align: undefined,
  kind: undefined,
  multiline: undefined,
  horizontal: undefined
});
/* harmony default export */ var field = (field_Field);
// CONCATENATED MODULE: ./src/components/form/components/field/index.js

// CONCATENATED MODULE: ./src/components/form/components/control.js
function control_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function control_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { control_ownKeys(source, true).forEach(function (key) { control_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { control_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function control_extends() { control_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return control_extends.apply(this, arguments); }

function control_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function control_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = control_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function control_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var control_Control = function Control(_ref) {
  var children = _ref.children,
      className = _ref.className,
      fullwidth = _ref.fullwidth,
      iconLeft = _ref.iconLeft,
      iconRight = _ref.iconRight,
      loading = _ref.loading,
      size = _ref.size,
      props = control_objectWithoutProperties(_ref, ["children", "className", "fullwidth", "iconLeft", "iconRight", "loading", "size"]);

  return external_react_default.a.createElement(components_element, control_extends({}, props, {
    className: classnames_default()('control', className, control_defineProperty({
      'is-expanded': fullwidth,
      'has-icons-left': iconLeft,
      'has-icons-right': iconRight,
      'is-loading': loading
    }, "is-".concat(size), size))
  }), children);
};

control_Control.propTypes = control_objectSpread({}, modifiers.propTypes, {
  children: external_prop_types_default.a.node,
  className: external_prop_types_default.a.string,
  style: external_prop_types_default.a.shape({}),
  renderAs: render_as,
  fullwidth: external_prop_types_default.a.bool,
  iconLeft: external_prop_types_default.a.bool,
  iconRight: external_prop_types_default.a.bool,
  loading: external_prop_types_default.a.bool,
  size: external_prop_types_default.a.oneOf(['small', 'medium', 'large'])
});
control_Control.defaultProps = control_objectSpread({}, modifiers.defaultProps, {
  children: null,
  className: undefined,
  style: undefined,
  renderAs: 'div',
  fullwidth: undefined,
  iconLeft: undefined,
  iconRight: undefined,
  loading: undefined,
  size: undefined
});
/* harmony default export */ var control = (control_Control);
// CONCATENATED MODULE: ./src/constants.js
/* harmony default export */ var constants = ({
  BREAKPOINTS: {
    DESKTOP: 'desktop',
    TABLET: 'tablet',
    MOBILE: 'mobile',
    WIDESCREEN: 'widescreen',
    FULLHD: 'fullhd',
    TOUCH: 'touch'
  },
  COLORS: {
    PRIMARY: 'primary',
    SUCCESS: 'success',
    INFO: 'info',
    WARNING: 'warning',
    DANGER: 'danger',
    LIGHT: 'light',
    DARK: 'dark',
    WHITE: 'white',
    BLACK: 'black',
    LINK: 'link'
  },
  COLOR_VARIANT: {
    light: 'light',
    dark: 'dark'
  }
});
// CONCATENATED MODULE: ./src/components/form/components/input.js
function input_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function input_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { input_ownKeys(source, true).forEach(function (key) { input_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { input_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function input_extends() { input_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return input_extends.apply(this, arguments); }

function input_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function input_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = input_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function input_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var input_colors = [null].concat(Object.keys(constants.COLORS).map(function (key) {
  return constants.COLORS[key];
}));

var input_Input = function Input(_ref) {
  var _classnames;

  var className = _ref.className,
      type = _ref.type,
      size = _ref.size,
      color = _ref.color,
      readOnly = _ref.readOnly,
      isStatic = _ref.isStatic,
      disabled = _ref.disabled,
      placeholder = _ref.placeholder,
      value = _ref.value,
      name = _ref.name,
      props = input_objectWithoutProperties(_ref, ["className", "type", "size", "color", "readOnly", "isStatic", "disabled", "placeholder", "value", "name"]);

  return external_react_default.a.createElement(components_element, input_extends({}, props, {
    renderAs: "input",
    name: name,
    value: value,
    type: type,
    placeholder: placeholder,
    readOnly: readOnly || isStatic,
    disabled: disabled,
    className: classnames_default()('input', className, (_classnames = {
      'is-static': isStatic
    }, input_defineProperty(_classnames, "is-".concat(size), size), input_defineProperty(_classnames, "is-".concat(color), color), _classnames))
  }));
};

input_Input.propTypes = input_objectSpread({}, modifiers.propTypes, {
  className: external_prop_types_default.a.string,
  style: external_prop_types_default.a.shape({}),
  type: external_prop_types_default.a.oneOf(['text', 'email', 'tel', 'password', 'number', 'search', 'color', 'date', 'time', 'datetime-local']),
  size: external_prop_types_default.a.oneOf(['small', 'medium', 'large']),
  color: external_prop_types_default.a.oneOf(input_colors),
  readOnly: external_prop_types_default.a.bool,
  isStatic: external_prop_types_default.a.bool,
  disabled: external_prop_types_default.a.bool,
  placeholder: external_prop_types_default.a.string,
  value: external_prop_types_default.a.oneOfType([external_prop_types_default.a.string, external_prop_types_default.a.number]),

  /**
   * The name of the input field Commonly used for [multi-input handling](https://reactjs.org/docs/forms.html#handling-multiple-inputs)
   */
  name: external_prop_types_default.a.string
});
input_Input.defaultProps = input_objectSpread({}, modifiers.defaultProps, {
  className: undefined,
  value: '',
  style: undefined,
  type: 'text',
  size: undefined,
  color: undefined,
  readOnly: false,
  isStatic: false,
  disabled: false,
  placeholder: '',
  name: undefined
});
/* harmony default export */ var input = (input_Input);
// CONCATENATED MODULE: ./src/components/form/components/label.js
function label_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function label_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { label_ownKeys(source, true).forEach(function (key) { label_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { label_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function label_extends() { label_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return label_extends.apply(this, arguments); }

function label_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function label_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = label_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function label_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var label_Label = function Label(_ref) {
  var children = _ref.children,
      className = _ref.className,
      size = _ref.size,
      props = label_objectWithoutProperties(_ref, ["children", "className", "size"]);

  return external_react_default.a.createElement(components_element, label_extends({
    renderAs: "label"
  }, props, {
    className: classnames_default()('label', className, label_defineProperty({}, "is-".concat(size), size))
  }), children);
};

label_Label.propTypes = label_objectSpread({}, modifiers.propTypes, {
  children: external_prop_types_default.a.node,
  className: external_prop_types_default.a.string,
  style: external_prop_types_default.a.shape({}),
  htmlFor: external_prop_types_default.a.string,
  size: external_prop_types_default.a.oneOf(['small', 'medium', 'large'])
});
label_Label.defaultProps = label_objectSpread({}, modifiers.defaultProps, {
  children: null,
  className: undefined,
  style: undefined,
  size: undefined,
  htmlFor: undefined
});
/* harmony default export */ var components_label = (label_Label);
// CONCATENATED MODULE: ./src/components/form/components/textarea.js
function textarea_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function textarea_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { textarea_ownKeys(source, true).forEach(function (key) { textarea_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { textarea_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function textarea_extends() { textarea_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return textarea_extends.apply(this, arguments); }

function textarea_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function textarea_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = textarea_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function textarea_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var textarea_colors = [null].concat(Object.keys(constants.COLORS).map(function (key) {
  return constants.COLORS[key];
}));

var textarea_Textarea = function Textarea(_ref) {
  var _classnames;

  var className = _ref.className,
      size = _ref.size,
      color = _ref.color,
      readOnly = _ref.readOnly,
      disabled = _ref.disabled,
      placeholder = _ref.placeholder,
      rows = _ref.rows,
      value = _ref.value,
      name = _ref.name,
      props = textarea_objectWithoutProperties(_ref, ["className", "size", "color", "readOnly", "disabled", "placeholder", "rows", "value", "name"]);

  return external_react_default.a.createElement(components_element, textarea_extends({
    renderAs: "textarea",
    name: name
  }, props, {
    value: value,
    rows: rows,
    placeholder: placeholder,
    readOnly: readOnly,
    disabled: disabled,
    className: classnames_default()('textarea', className, (_classnames = {}, textarea_defineProperty(_classnames, "is-".concat(size), size), textarea_defineProperty(_classnames, "is-".concat(color), color), _classnames))
  }));
};

textarea_Textarea.propTypes = textarea_objectSpread({}, modifiers.propTypes, {
  className: external_prop_types_default.a.string,
  style: external_prop_types_default.a.shape({}),
  size: external_prop_types_default.a.oneOf(['small', 'medium', 'large']),
  color: external_prop_types_default.a.oneOf(textarea_colors),
  readOnly: external_prop_types_default.a.bool,
  disabled: external_prop_types_default.a.bool,
  placeholder: external_prop_types_default.a.string,
  rows: external_prop_types_default.a.number,
  value: external_prop_types_default.a.string,

  /**
   * The name of the input field Commonly used for [multi-input handling](https://reactjs.org/docs/forms.html#handling-multiple-inputs)
   */
  name: external_prop_types_default.a.string
});
textarea_Textarea.defaultProps = textarea_objectSpread({}, modifiers.defaultProps, {
  className: undefined,
  style: undefined,
  size: undefined,
  color: undefined,
  readOnly: false,
  disabled: false,
  placeholder: '',
  rows: 4,
  value: '',
  name: ''
});
/* harmony default export */ var components_textarea = (textarea_Textarea);
// CONCATENATED MODULE: ./src/components/form/components/select.js
function select_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function select_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { select_ownKeys(source, true).forEach(function (key) { select_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { select_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function select_extends() { select_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return select_extends.apply(this, arguments); }

function select_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function select_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = select_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function select_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var select_colors = [null].concat(Object.keys(constants.COLORS).map(function (key) {
  return constants.COLORS[key];
}));

var select_Select = function Select(_ref) {
  var _classnames;

  var className = _ref.className,
      style = _ref.style,
      size = _ref.size,
      color = _ref.color,
      loading = _ref.loading,
      readOnly = _ref.readOnly,
      disabled = _ref.disabled,
      value = _ref.value,
      multiple = _ref.multiple,
      children = _ref.children,
      name = _ref.name,
      domRef = _ref.domRef,
      props = select_objectWithoutProperties(_ref, ["className", "style", "size", "color", "loading", "readOnly", "disabled", "value", "multiple", "children", "name", "domRef"]);

  return external_react_default.a.createElement(components_element, {
    domRef: domRef,
    className: classnames_default()('select', className, (_classnames = {}, select_defineProperty(_classnames, "is-".concat(size), size), select_defineProperty(_classnames, "is-".concat(color), color), select_defineProperty(_classnames, 'is-loading', loading), select_defineProperty(_classnames, 'is-multiple', multiple), _classnames)),
    style: style
  }, external_react_default.a.createElement(components_element, select_extends({
    renderAs: "select"
  }, props, {
    multiple: multiple,
    value: value,
    readOnly: readOnly,
    disabled: disabled,
    name: name
  }), children));
};

select_Select.propTypes = select_objectSpread({}, modifiers.propTypes, {
  children: external_prop_types_default.a.node,
  className: external_prop_types_default.a.string,
  style: external_prop_types_default.a.shape({}),
  size: external_prop_types_default.a.oneOf(['small', 'medium', 'large']),
  color: external_prop_types_default.a.oneOf(select_colors),
  readOnly: external_prop_types_default.a.bool,
  disabled: external_prop_types_default.a.bool,
  multiple: external_prop_types_default.a.bool,
  loading: external_prop_types_default.a.bool,
  value: external_prop_types_default.a.oneOfType([external_prop_types_default.a.string, external_prop_types_default.a.number]),

  /**
   * The name of the input field Commonly used for [multi-input handling](https://reactjs.org/docs/forms.html#handling-multiple-inputs)
   */
  name: external_prop_types_default.a.string
});
select_Select.defaultProps = select_objectSpread({}, modifiers.defaultProps, {
  children: null,
  className: undefined,
  value: '',
  style: undefined,
  size: undefined,
  color: undefined,
  readOnly: false,
  disabled: false,
  multiple: false,
  loading: false,
  name: undefined
});
/* harmony default export */ var components_select = (select_Select);
// CONCATENATED MODULE: ./src/components/form/components/checkbox.js
function checkbox_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function checkbox_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { checkbox_ownKeys(source, true).forEach(function (key) { checkbox_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { checkbox_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function checkbox_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function checkbox_extends() { checkbox_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return checkbox_extends.apply(this, arguments); }

function checkbox_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = checkbox_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function checkbox_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var checkbox_Checkbox = function Checkbox(_ref) {
  var className = _ref.className,
      style = _ref.style,
      disabled = _ref.disabled,
      value = _ref.value,
      children = _ref.children,
      checked = _ref.checked,
      name = _ref.name,
      domRef = _ref.domRef,
      props = checkbox_objectWithoutProperties(_ref, ["className", "style", "disabled", "value", "children", "checked", "name", "domRef"]);

  return external_react_default.a.createElement(components_element, {
    renderAs: "label",
    domRef: domRef,
    disabled: disabled,
    className: classnames_default()('checkbox', className),
    style: style
  }, external_react_default.a.createElement(components_element, checkbox_extends({}, props, {
    renderAs: "input",
    name: name,
    type: "checkbox",
    value: value,
    disabled: disabled,
    checked: checked
  })), children);
};

checkbox_Checkbox.propTypes = checkbox_objectSpread({}, modifiers.propTypes, {
  children: external_prop_types_default.a.node,
  className: external_prop_types_default.a.string,
  style: external_prop_types_default.a.shape({}),
  disabled: external_prop_types_default.a.bool,
  value: external_prop_types_default.a.string,
  checked: external_prop_types_default.a.bool,

  /**
   * The name of the input field Commonly used for [multi-input handling](https://reactjs.org/docs/forms.html#handling-multiple-inputs)
   */
  name: external_prop_types_default.a.string
});
checkbox_Checkbox.defaultProps = checkbox_objectSpread({}, modifiers.defaultProps, {
  children: null,
  className: undefined,
  value: undefined,
  style: undefined,
  disabled: undefined,
  checked: undefined,
  name: undefined
});
/* harmony default export */ var components_checkbox = (checkbox_Checkbox);
// CONCATENATED MODULE: ./src/components/form/components/radio.js
function radio_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function radio_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { radio_ownKeys(source, true).forEach(function (key) { radio_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { radio_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function radio_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function radio_extends() { radio_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return radio_extends.apply(this, arguments); }

function radio_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = radio_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function radio_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var radio_Radio = function Radio(_ref) {
  var className = _ref.className,
      style = _ref.style,
      disabled = _ref.disabled,
      checked = _ref.checked,
      value = _ref.value,
      name = _ref.name,
      children = _ref.children,
      domRef = _ref.domRef,
      props = radio_objectWithoutProperties(_ref, ["className", "style", "disabled", "checked", "value", "name", "children", "domRef"]);

  return external_react_default.a.createElement(components_element, {
    renderAs: "label",
    domRef: domRef,
    disabled: disabled,
    className: classnames_default()('radio', className),
    style: style
  }, external_react_default.a.createElement(components_element, radio_extends({
    renderAs: "input"
  }, props, {
    name: name,
    checked: checked,
    type: "radio",
    value: value,
    disabled: disabled
  })), children);
};

radio_Radio.propTypes = radio_objectSpread({}, modifiers.propTypes, {
  children: external_prop_types_default.a.node,
  className: external_prop_types_default.a.string,

  /**
   * The name of the input field Commonly used for [multi-input handling](https://reactjs.org/docs/forms.html#handling-multiple-inputs)
   */
  name: external_prop_types_default.a.string.isRequired,
  style: external_prop_types_default.a.shape({}),
  disabled: external_prop_types_default.a.bool,
  checked: external_prop_types_default.a.bool,
  value: external_prop_types_default.a.string
});
radio_Radio.defaultProps = radio_objectSpread({}, modifiers.defaultProps, {
  children: null,
  className: undefined,
  value: '',
  style: undefined,
  disabled: false,
  checked: false
});
/* harmony default export */ var components_radio = (radio_Radio);
// CONCATENATED MODULE: ./src/components/form/components/help.js
function help_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function help_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { help_ownKeys(source, true).forEach(function (key) { help_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { help_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function help_extends() { help_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return help_extends.apply(this, arguments); }

function help_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function help_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = help_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function help_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var help_colors = [null].concat(Object.keys(constants.COLORS).map(function (key) {
  return constants.COLORS[key];
}));

var help_Help = function Help(_ref) {
  var className = _ref.className,
      children = _ref.children,
      color = _ref.color,
      props = help_objectWithoutProperties(_ref, ["className", "children", "color"]);

  return external_react_default.a.createElement(components_element, help_extends({}, props, {
    className: classnames_default()('help', className, help_defineProperty({}, "is-".concat(color), color))
  }), children);
};

help_Help.propTypes = help_objectSpread({}, modifiers.propTypes, {
  className: external_prop_types_default.a.string,
  color: external_prop_types_default.a.oneOf(help_colors),
  children: external_prop_types_default.a.node
});
help_Help.defaultProps = help_objectSpread({}, modifiers.defaultProps, {
  children: null,
  className: undefined,
  color: undefined,
  renderAs: 'p'
});
/* harmony default export */ var help = (help_Help);
// CONCATENATED MODULE: ./src/components/form/components/input-file.js
function input_file_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function input_file_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { input_file_ownKeys(source, true).forEach(function (key) { input_file_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { input_file_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function input_file_extends() { input_file_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return input_file_extends.apply(this, arguments); }

function input_file_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = input_file_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function input_file_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function input_file_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var input_file_colors = [null].concat(Object.keys(constants.COLORS).map(function (key) {
  return constants.COLORS[key];
}));

var input_file_InputFile =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(InputFile, _PureComponent);

  function InputFile(props) {
    var _this;

    _classCallCheck(this, InputFile);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InputFile).call(this, props));

    input_file_defineProperty(_assertThisInitialized(_this), "select", function (event) {
      var files = event.target.files;

      _this.setState({
        filename: files.length > 0 ? files[0].name : undefined
      });

      if (_this.props.onChange) {
        _this.props.onChange(event);
      }
    });

    _this.state = {
      filename: undefined
    };
    return _this;
  }

  _createClass(InputFile, [{
    key: "render",
    value: function render() {
      var _classnames;

      var _this$props = this.props,
          className = _this$props.className,
          style = _this$props.style,
          onChange = _this$props.onChange,
          color = _this$props.color,
          size = _this$props.size,
          fileName = _this$props.fileName,
          fullwidth = _this$props.fullwidth,
          right = _this$props.right,
          boxed = _this$props.boxed,
          name = _this$props.name,
          label = _this$props.label,
          icon = _this$props.icon,
          inputProps = _this$props.inputProps,
          props = input_file_objectWithoutProperties(_this$props, ["className", "style", "onChange", "color", "size", "fileName", "fullwidth", "right", "boxed", "name", "label", "icon", "inputProps"]);

      var filename = this.state.filename;
      return external_react_default.a.createElement(components_element, input_file_extends({
        style: style
      }, props, {
        className: classnames_default()('file', className, (_classnames = {}, input_file_defineProperty(_classnames, "is-".concat(size), size), input_file_defineProperty(_classnames, "is-".concat(color), color), input_file_defineProperty(_classnames, 'has-name', !fileName), input_file_defineProperty(_classnames, 'is-right', right), input_file_defineProperty(_classnames, 'is-boxed', boxed), input_file_defineProperty(_classnames, 'is-fullwidth', fullwidth), _classnames))
      }), external_react_default.a.createElement("label", {
        className: "file-label"
      }, external_react_default.a.createElement("input", input_file_extends({}, inputProps, {
        name: name,
        type: "file",
        className: "file-input",
        onChange: this.select
      })), external_react_default.a.createElement("span", {
        className: "file-cta"
      }, icon && external_react_default.a.createElement("span", {
        className: "file-icon"
      }, icon), external_react_default.a.createElement("span", {
        className: "file-label"
      }, label)), fileName && filename && external_react_default.a.createElement("span", {
        className: "file-name"
      }, filename)));
    }
  }]);

  return InputFile;
}(external_react_["PureComponent"]);


input_file_InputFile.propTypes = input_file_objectSpread({}, modifiers.propTypes, {
  className: external_prop_types_default.a.string,
  style: external_prop_types_default.a.shape({}),
  onChange: external_prop_types_default.a.func,
  color: external_prop_types_default.a.oneOf(input_file_colors),
  size: external_prop_types_default.a.oneOf(['small', 'medium', 'large']),
  fileName: external_prop_types_default.a.bool,
  fullwidth: external_prop_types_default.a.bool,
  right: external_prop_types_default.a.bool,
  boxed: external_prop_types_default.a.bool,

  /**
   * The name of the input field Commonly used for [multi-input handling](https://reactjs.org/docs/forms.html#handling-multiple-inputs)
   */
  name: external_prop_types_default.a.string,
  label: external_prop_types_default.a.string,
  icon: external_prop_types_default.a.element,
  inputProps: external_prop_types_default.a.shape({
    accept: external_prop_types_default.a.string,
    capture: external_prop_types_default.a.string,
    multiple: external_prop_types_default.a.bool
  })
});
input_file_InputFile.defaultProps = input_file_objectSpread({}, modifiers.defaultProps, {
  className: undefined,
  style: undefined,
  onChange: function onChange() {},
  color: undefined,
  size: undefined,
  fileName: true,
  fullwidth: undefined,
  right: undefined,
  boxed: undefined,
  name: undefined,
  icon: undefined,
  label: 'Choose a file...',
  inputProps: {
    accept: undefined,
    capture: undefined,
    multiple: undefined
  }
});
// CONCATENATED MODULE: ./src/components/form/index.js











// CONCATENATED MODULE: ./src/components/box/box.js
function box_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function box_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { box_ownKeys(source, true).forEach(function (key) { box_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { box_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function box_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function box_extends() { box_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return box_extends.apply(this, arguments); }

function box_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = box_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function box_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var box_Box = function Box(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = box_objectWithoutProperties(_ref, ["children", "className"]);

  return external_react_default.a.createElement(components_element, box_extends({}, props, {
    className: classnames_default()('box', className)
  }), children);
};

box_Box.propTypes = box_objectSpread({}, modifiers.propTypes, {
  children: external_prop_types_default.a.node,
  className: external_prop_types_default.a.string,
  style: external_prop_types_default.a.shape({}),
  renderAs: render_as
});
box_Box.defaultProps = box_objectSpread({}, modifiers.defaultProps, {
  children: null,
  className: undefined,
  style: undefined,
  renderAs: 'div'
});
/* harmony default export */ var box = (box_Box);
// EXTERNAL MODULE: ./src/components/box/box.sass
var box_box = __webpack_require__(7);

// CONCATENATED MODULE: ./src/components/box/index.js


/* harmony default export */ var components_box = (box);
// EXTERNAL MODULE: ./src/components/button/button.sass
var button_button = __webpack_require__(8);

// CONCATENATED MODULE: ./src/components/button/components/button-group.js
function button_group_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function button_group_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { button_group_ownKeys(source, true).forEach(function (key) { button_group_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { button_group_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function button_group_extends() { button_group_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return button_group_extends.apply(this, arguments); }

function button_group_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function button_group_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = button_group_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function button_group_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var button_group_ButtonGroup = function ButtonGroup(_ref) {
  var _classnames;

  var children = _ref.children,
      className = _ref.className,
      hasAddons = _ref.hasAddons,
      position = _ref.position,
      size = _ref.size,
      props = button_group_objectWithoutProperties(_ref, ["children", "className", "hasAddons", "position", "size"]);

  return external_react_default.a.createElement(components_element, button_group_extends({}, props, {
    className: classnames_default()('buttons', className, (_classnames = {
      'has-addons': hasAddons
    }, button_group_defineProperty(_classnames, "is-".concat([position]), position), button_group_defineProperty(_classnames, "are-".concat(size), size), _classnames))
  }), children);
};

button_group_ButtonGroup.propTypes = button_group_objectSpread({}, modifiers.propTypes, {
  className: external_prop_types_default.a.string,
  hasAddons: external_prop_types_default.a.bool,
  size: external_prop_types_default.a.string,
  position: external_prop_types_default.a.oneOf(['centered', 'right']),
  renderAs: render_as
});
button_group_ButtonGroup.defaultProps = button_group_objectSpread({}, modifiers.defaultProps, {
  className: undefined,
  hasAddons: undefined,
  position: undefined,
  size: undefined,
  renderAs: 'div'
});
/* harmony default export */ var button_group = (button_group_ButtonGroup);
// CONCATENATED MODULE: ./src/components/button/button.js
function button_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function button_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { button_ownKeys(source, true).forEach(function (key) { button_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { button_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function button_extends() { button_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return button_extends.apply(this, arguments); }

function button_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function button_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = button_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function button_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









var button_colors = [null, ''].concat(Object.keys(constants.COLORS).map(function (key) {
  return constants.COLORS[key];
}));

var button_Button = function Button(_ref) {
  var _classnames;

  var children = _ref.children,
      className = _ref.className,
      renderAs = _ref.renderAs,
      color = _ref.color,
      size = _ref.size,
      outlined = _ref.outlined,
      inverted = _ref.inverted,
      state = _ref.state,
      submit = _ref.submit,
      reset = _ref.reset,
      fullwidth = _ref.fullwidth,
      loading = _ref.loading,
      disabled = _ref.disabled,
      remove = _ref.remove,
      isSelected = _ref.isSelected,
      isStatic = _ref.isStatic,
      rounded = _ref.rounded,
      onClick = _ref.onClick,
      text = _ref.text,
      props = button_objectWithoutProperties(_ref, ["children", "className", "renderAs", "color", "size", "outlined", "inverted", "state", "submit", "reset", "fullwidth", "loading", "disabled", "remove", "isSelected", "isStatic", "rounded", "onClick", "text"]);

  // let Element = isStatic ? 'span' : renderAs;
  var otherProps = {};

  if (submit) {
    otherProps = {
      type: 'submit',
      renderAs: renderAs || 'button'
    };
  }

  if (reset) {
    otherProps = {
      type: 'reset',
      renderAs: renderAs || 'button'
    };
  }

  if (isStatic) {
    otherProps = {
      renderAs: 'span'
    };
  }

  return external_react_default.a.createElement(components_element, button_extends({
    tabIndex: disabled ? -1 : 0,
    renderAs: renderAs
  }, props, otherProps, {
    disabled: disabled,
    onClick: disabled ? undefined : onClick,
    className: classnames_default()(className, (_classnames = {}, button_defineProperty(_classnames, "is-".concat(color), color), button_defineProperty(_classnames, "is-".concat(size), size), button_defineProperty(_classnames, "is-".concat(state), state), button_defineProperty(_classnames, 'is-selected', isSelected), button_defineProperty(_classnames, 'is-static', isStatic), button_defineProperty(_classnames, 'is-rounded', rounded), button_defineProperty(_classnames, 'is-outlined', outlined), button_defineProperty(_classnames, 'is-inverted', inverted), button_defineProperty(_classnames, 'is-fullwidth', fullwidth), button_defineProperty(_classnames, 'is-loading', loading), button_defineProperty(_classnames, 'is-text', text), button_defineProperty(_classnames, "delete", remove), button_defineProperty(_classnames, "button", !remove), _classnames))
  }), children);
};

button_Button.Group = button_group;
button_Button.propTypes = button_objectSpread({}, modifiers.propTypes, {
  children: external_prop_types_default.a.node,
  className: external_prop_types_default.a.string,
  style: external_prop_types_default.a.shape({}),
  renderAs: render_as,
  onClick: external_prop_types_default.a.func,
  color: external_prop_types_default.a.oneOf(button_colors),
  size: external_prop_types_default.a.oneOf(['small', 'medium', 'large']),
  state: external_prop_types_default.a.oneOf(['hover', 'focus', 'active', 'loading']),
  outlined: external_prop_types_default.a.bool,
  inverted: external_prop_types_default.a.bool,
  submit: external_prop_types_default.a.bool,
  reset: external_prop_types_default.a.bool,
  loading: external_prop_types_default.a.bool,
  fullwidth: external_prop_types_default.a.bool,
  disabled: external_prop_types_default.a.bool,
  remove: external_prop_types_default.a.bool,
  isSelected: external_prop_types_default.a.bool,
  isStatic: external_prop_types_default.a.bool,
  rounded: external_prop_types_default.a.bool,
  text: external_prop_types_default.a.bool
});
button_Button.defaultProps = button_objectSpread({}, modifiers.defaultProps, {
  children: null,
  className: undefined,
  style: undefined,
  renderAs: 'button',
  onClick: function onClick() {
    return null;
  },
  color: undefined,
  size: undefined,
  state: undefined,
  outlined: false,
  inverted: false,
  submit: false,
  reset: false,
  fullwidth: false,
  loading: false,
  disabled: false,
  remove: false,
  isSelected: false,
  isStatic: false,
  rounded: false,
  text: false
});
/* harmony default export */ var components_button_button = (button_Button);
// CONCATENATED MODULE: ./src/components/button/index.js


// CONCATENATED MODULE: ./src/components/breadcrumb/breadcrumb.js
function breadcrumb_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function breadcrumb_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { breadcrumb_ownKeys(source, true).forEach(function (key) { breadcrumb_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { breadcrumb_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function breadcrumb_extends() { breadcrumb_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return breadcrumb_extends.apply(this, arguments); }

function breadcrumb_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function breadcrumb_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = breadcrumb_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function breadcrumb_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var breadcrumb_Breadcrumb = function Breadcrumb(_ref) {
  var _classnames;

  var className = _ref.className,
      items = _ref.items,
      renderAs = _ref.renderAs,
      hrefAttr = _ref.hrefAttr,
      separator = _ref.separator,
      size = _ref.size,
      align = _ref.align,
      props = breadcrumb_objectWithoutProperties(_ref, ["className", "items", "renderAs", "hrefAttr", "separator", "size", "align"]);

  return external_react_default.a.createElement(components_element, breadcrumb_extends({
    renderAs: "nav"
  }, props, {
    className: classnames_default()('breadcrumb', className, (_classnames = {}, breadcrumb_defineProperty(_classnames, "has-".concat(separator, "-separator"), separator), breadcrumb_defineProperty(_classnames, "is-".concat(size), size), breadcrumb_defineProperty(_classnames, "is-".concat(align), align), _classnames))
  }), external_react_default.a.createElement("ul", null, items.map(function (item) {
    var p = breadcrumb_defineProperty({
      renderAs: renderAs
    }, hrefAttr, item.url);

    return external_react_default.a.createElement("li", {
      key: item.url,
      className: classnames_default()({
        'is-active': item.active
      })
    }, external_react_default.a.createElement(components_element, p, item.name));
  })));
};

breadcrumb_Breadcrumb.propTypes = breadcrumb_objectSpread({}, modifiers.propTypes, {
  className: external_prop_types_default.a.string,
  style: external_prop_types_default.a.shape({}),
  separator: external_prop_types_default.a.oneOf(['arrow', 'bullet', 'dot', 'succeeds']),
  size: external_prop_types_default.a.oneOf(['small', 'medium', 'large']),
  align: external_prop_types_default.a.oneOf(['right', 'center']),
  items: external_prop_types_default.a.arrayOf(external_prop_types_default.a.shape({
    url: external_prop_types_default.a.string.isRequired,
    active: external_prop_types_default.a.bool,
    name: external_prop_types_default.a.node
  })),
  renderAs: render_as,
  hrefAttr: external_prop_types_default.a.string
});
breadcrumb_Breadcrumb.defaultProps = breadcrumb_objectSpread({}, modifiers.defaultProps, {
  items: [],
  hrefAttr: 'href',
  separator: undefined,
  renderAs: 'a',
  className: undefined,
  style: undefined,
  size: undefined,
  align: undefined
});
/* harmony default export */ var breadcrumb = (breadcrumb_Breadcrumb);
// EXTERNAL MODULE: ./src/components/breadcrumb/breadcrumb.sass
var breadcrumb_breadcrumb = __webpack_require__(9);

// CONCATENATED MODULE: ./src/components/breadcrumb/index.js


/* harmony default export */ var components_breadcrumb = (breadcrumb);
// EXTERNAL MODULE: ./src/components/card/card.sass
var card = __webpack_require__(10);

// EXTERNAL MODULE: ./src/components/image/image.sass
var image_image = __webpack_require__(11);

// CONCATENATED MODULE: ./src/components/image/constants.js
/* harmony default export */ var image_constants = ({
  SIZES: [16, 24, 32, 48, 64, 96, 128, 'square', '1by1', '4by3', '3by2', '16by9', '2by1', '5by4', '5by3', '3by1', '4by5', '3by4', '2by3', '3by5', '9by16', '1by2', '1by3']
});
// CONCATENATED MODULE: ./src/components/image/image.js
function image_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function image_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { image_ownKeys(source, true).forEach(function (key) { image_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { image_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function image_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { image_typeof = function _typeof(obj) { return typeof obj; }; } else { image_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return image_typeof(obj); }

function image_extends() { image_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return image_extends.apply(this, arguments); }

function image_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = image_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function image_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function image_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function image_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function image_createClass(Constructor, protoProps, staticProps) { if (protoProps) image_defineProperties(Constructor.prototype, protoProps); if (staticProps) image_defineProperties(Constructor, staticProps); return Constructor; }

function image_possibleConstructorReturn(self, call) { if (call && (image_typeof(call) === "object" || typeof call === "function")) { return call; } return image_assertThisInitialized(self); }

function image_getPrototypeOf(o) { image_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return image_getPrototypeOf(o); }

function image_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function image_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) image_setPrototypeOf(subClass, superClass); }

function image_setPrototypeOf(o, p) { image_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return image_setPrototypeOf(o, p); }

function image_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var image_Image =
/*#__PURE__*/
function (_PureComponent) {
  image_inherits(Image, _PureComponent);

  function Image(props) {
    var _this;

    image_classCallCheck(this, Image);

    _this = image_possibleConstructorReturn(this, image_getPrototypeOf(Image).call(this, props));

    image_defineProperty(image_assertThisInitialized(_this), "onError", function () {
      _this.setState({
        src: _this.props.fallback
      });
    });

    _this.state = {};
    return _this;
  }

  image_createClass(Image, [{
    key: "render",
    value: function render() {
      var _classnames;

      var _this$props = this.props,
          className = _this$props.className,
          alt = _this$props.alt,
          size = _this$props.size,
          fallback = _this$props.fallback,
          rounded = _this$props.rounded,
          src = _this$props.src,
          fullwidth = _this$props.fullwidth,
          props = image_objectWithoutProperties(_this$props, ["className", "alt", "size", "fallback", "rounded", "src", "fullwidth"]);

      var s = size;

      if (typeof size === 'number') {
        s = "".concat(s, "x").concat(s);
      }

      return external_react_default.a.createElement(components_element, image_extends({}, props, {
        renderAs: "figure",
        className: classnames_default()('image', className, (_classnames = {}, image_defineProperty(_classnames, "is-".concat(s), s), image_defineProperty(_classnames, 'is-fullwidth', fullwidth), _classnames))
      }), external_react_default.a.createElement("img", {
        className: classnames_default()({
          'is-rounded': rounded
        }),
        onError: this.onError,
        src: this.state.src,
        alt: alt
      }));
    }
  }]);

  return Image;
}(external_react_["PureComponent"]);

image_defineProperty(image_Image, "getDerivedStateFromProps", function (props, state) {
  return {
    src: state.default !== props.src ? props.src : state.src,
    default: props.src
  };
});


image_Image.propTypes = image_objectSpread({}, modifiers.propTypes, {
  className: external_prop_types_default.a.string,
  src: external_prop_types_default.a.string,
  alt: external_prop_types_default.a.string,
  rounded: external_prop_types_default.a.bool,
  style: external_prop_types_default.a.shape({}),
  size: external_prop_types_default.a.oneOf(image_constants.SIZES),
  fallback: external_prop_types_default.a.string,
  fullwidth: external_prop_types_default.a.bool
});
image_Image.defaultProps = image_objectSpread({}, modifiers.defaultProps, {
  className: undefined,
  src: '',
  alt: '',
  rounded: false,
  style: undefined,
  size: undefined,
  fallback: 'https://bulma.io/images/placeholders/480x480.png',
  fullwidth: false
});
// CONCATENATED MODULE: ./src/components/image/index.js


// CONCATENATED MODULE: ./src/components/card/components/image.js
function components_image_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function components_image_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { components_image_ownKeys(source, true).forEach(function (key) { components_image_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { components_image_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function components_image_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function components_image_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = components_image_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function components_image_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var image_CardImage = function CardImage(_ref) {
  var className = _ref.className,
      domRef = _ref.domRef,
      props = components_image_objectWithoutProperties(_ref, ["className", "domRef"]);

  return external_react_default.a.createElement(components_element, {
    domRef: domRef,
    className: classnames_default()('card-image', className)
  }, external_react_default.a.createElement(image_Image, props));
};

image_CardImage.propTypes = components_image_objectSpread({}, modifiers.propTypes, {}, image_Image.propTypes);
image_CardImage.defaultProps = components_image_objectSpread({}, modifiers.defaultProps, {}, image_Image.defaultProps);
/* harmony default export */ var components_image = (image_CardImage);
// CONCATENATED MODULE: ./src/components/card/components/content.js
function content_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function content_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { content_ownKeys(source, true).forEach(function (key) { content_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { content_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function content_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function content_extends() { content_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return content_extends.apply(this, arguments); }

function content_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = content_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function content_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var content_CardContent = function CardContent(_ref) {
  var className = _ref.className,
      props = content_objectWithoutProperties(_ref, ["className"]);

  return external_react_default.a.createElement(components_element, content_extends({}, props, {
    className: classnames_default()('card-content', className)
  }));
};

content_CardContent.propTypes = content_objectSpread({}, modifiers.propTypes, {
  className: external_prop_types_default.a.string,
  renderAs: render_as
});
content_CardContent.defaultProps = content_objectSpread({}, modifiers.defaultProps, {
  className: undefined,
  renderAs: 'div'
});
/* harmony default export */ var content = (content_CardContent);
// CONCATENATED MODULE: ./src/components/card/components/header/components/header-title.js
function header_title_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function header_title_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { header_title_ownKeys(source, true).forEach(function (key) { header_title_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { header_title_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function header_title_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function header_title_extends() { header_title_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return header_title_extends.apply(this, arguments); }

function header_title_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = header_title_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function header_title_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var header_title_CardHeaderTitle = function CardHeaderTitle(_ref) {
  var className = _ref.className,
      props = header_title_objectWithoutProperties(_ref, ["className"]);

  return external_react_default.a.createElement(components_element, header_title_extends({}, props, {
    className: classnames_default()('card-header-title', className)
  }));
};

header_title_CardHeaderTitle.propTypes = header_title_objectSpread({}, modifiers.propTypes, {
  className: external_prop_types_default.a.string,
  renderAs: render_as
});
header_title_CardHeaderTitle.defaultProps = header_title_objectSpread({}, modifiers.defaultProps, {
  className: undefined,
  renderAs: 'div'
});
/* harmony default export */ var header_title = (header_title_CardHeaderTitle);
// CONCATENATED MODULE: ./src/components/card/components/header/components/header-icon.js
function header_icon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function header_icon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { header_icon_ownKeys(source, true).forEach(function (key) { header_icon_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { header_icon_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function header_icon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function header_icon_extends() { header_icon_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return header_icon_extends.apply(this, arguments); }

function header_icon_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = header_icon_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function header_icon_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var header_icon_CardHeaderIcon = function CardHeaderIcon(_ref) {
  var className = _ref.className,
      props = header_icon_objectWithoutProperties(_ref, ["className"]);

  return external_react_default.a.createElement(components_element, header_icon_extends({}, props, {
    className: classnames_default()('card-header-icon', className)
  }));
};

header_icon_CardHeaderIcon.propTypes = header_icon_objectSpread({}, modifiers.propTypes, {
  className: external_prop_types_default.a.string,
  renderAs: render_as
});
header_icon_CardHeaderIcon.defaultProps = header_icon_objectSpread({}, modifiers.defaultProps, {
  className: undefined,
  renderAs: 'div'
});
/* harmony default export */ var header_icon = (header_icon_CardHeaderIcon);
// CONCATENATED MODULE: ./src/components/card/components/header/header.js
function header_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function header_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { header_ownKeys(source, true).forEach(function (key) { header_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { header_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function header_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function header_extends() { header_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return header_extends.apply(this, arguments); }

function header_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = header_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function header_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










var header_CardHeader = function CardHeader(_ref) {
  var className = _ref.className,
      props = header_objectWithoutProperties(_ref, ["className"]);

  return external_react_default.a.createElement(components_element, header_extends({}, props, {
    className: classnames_default()('card-header', className)
  }));
};

header_CardHeader.Title = header_title;
header_CardHeader.Icon = header_icon;
header_CardHeader.propTypes = header_objectSpread({}, modifiers.propTypes, {
  className: external_prop_types_default.a.string,
  renderAs: render_as
});
header_CardHeader.defaultProps = header_objectSpread({}, modifiers.defaultProps, {
  className: undefined,
  renderAs: 'div'
});
/* harmony default export */ var header = (header_CardHeader);
// CONCATENATED MODULE: ./src/components/card/components/header/index.js

// CONCATENATED MODULE: ./src/components/card/components/footer/components/footer-item.js
function footer_item_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function footer_item_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { footer_item_ownKeys(source, true).forEach(function (key) { footer_item_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { footer_item_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function footer_item_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function footer_item_extends() { footer_item_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return footer_item_extends.apply(this, arguments); }

function footer_item_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = footer_item_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function footer_item_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var footer_item_CardFooterItem = function CardFooterItem(_ref) {
  var className = _ref.className,
      props = footer_item_objectWithoutProperties(_ref, ["className"]);

  return external_react_default.a.createElement(components_element, footer_item_extends({}, props, {
    className: classnames_default()('card-footer-item', className)
  }));
};

footer_item_CardFooterItem.propTypes = footer_item_objectSpread({}, modifiers.propTypes, {
  className: external_prop_types_default.a.string,
  renderAs: render_as
});
footer_item_CardFooterItem.defaultProps = footer_item_objectSpread({}, modifiers.defaultProps, {
  className: undefined,
  renderAs: 'div'
});
/* harmony default export */ var footer_item = (footer_item_CardFooterItem);
// CONCATENATED MODULE: ./src/components/card/components/footer/footer.js
function footer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function footer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { footer_ownKeys(source, true).forEach(function (key) { footer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { footer_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function footer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function footer_extends() { footer_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return footer_extends.apply(this, arguments); }

function footer_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = footer_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function footer_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









var footer_CardFooter = function CardFooter(_ref) {
  var className = _ref.className,
      props = footer_objectWithoutProperties(_ref, ["className"]);

  return external_react_default.a.createElement(components_element, footer_extends({}, props, {
    className: classnames_default()('card-footer', className)
  }));
};

footer_CardFooter.Item = footer_item;
footer_CardFooter.propTypes = footer_objectSpread({}, modifiers.propTypes, {
  className: external_prop_types_default.a.string,
  renderAs: render_as
});
footer_CardFooter.defaultProps = footer_objectSpread({}, modifiers.defaultProps, {
  className: undefined,
  renderAs: 'div'
});
/* harmony default export */ var footer = (footer_CardFooter);
// CONCATENATED MODULE: ./src/components/card/components/footer/index.js

// CONCATENATED MODULE: ./src/components/card/card.js
function card_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function card_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { card_ownKeys(source, true).forEach(function (key) { card_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { card_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function card_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function card_extends() { card_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return card_extends.apply(this, arguments); }

function card_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = card_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function card_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }












var card_Card = function Card(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = card_objectWithoutProperties(_ref, ["className", "children"]);

  return external_react_default.a.createElement(components_element, card_extends({
    className: classnames_default()('card', className)
  }, props), children);
};

card_Card.Image = components_image;
card_Card.Content = content;
card_Card.Header = header;
card_Card.Footer = footer;
card_Card.propTypes = card_objectSpread({}, modifiers.propTypes, {
  className: external_prop_types_default.a.string,
  children: external_prop_types_default.a.node,
  style: external_prop_types_default.a.shape({}),
  renderAs: render_as
});
card_Card.defaultProps = card_objectSpread({}, modifiers.defaultProps, {
  className: undefined,
  children: null,
  style: undefined,
  renderAs: 'div'
});
/* harmony default export */ var card_card = (card_Card);
// CONCATENATED MODULE: ./src/components/card/index.js


// CONCATENATED MODULE: ./src/components/columns/constants.js
/* harmony default export */ var columns_constants = ({
  SIZES: {
    THREEQUARTERS: 'three-quarters',
    TWOTHIRDS: 'two-thirds',
    HALF: 'half',
    ONETHIRD: 'one-third',
    ONEQUARTER: 'one-quarter',
    ONEFIFTH: 'one-fifth',
    TWOFIFTHS: 'two-fifths',
    THREEFIFTHS: 'three-fifths',
    FOURFIFTHS: 'four-fifths'
  }
});
// CONCATENATED MODULE: ./src/components/columns/components/column.js
function column_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function column_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { column_ownKeys(source, true).forEach(function (key) { column_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { column_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function column_extends() { column_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return column_extends.apply(this, arguments); }

function column_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function column_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = column_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function column_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var sizes = [null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].concat(Object.keys(columns_constants.SIZES).map(function (key) {
  return columns_constants.SIZES[key];
}));

var column_Column = function Column(_ref) {
  var _classNames;

  var children = _ref.children,
      className = _ref.className,
      size = _ref.size,
      offset = _ref.offset,
      narrow = _ref.narrow,
      mobile = _ref.mobile,
      tablet = _ref.tablet,
      desktop = _ref.desktop,
      widescreen = _ref.widescreen,
      fullhd = _ref.fullhd,
      touch = _ref.touch,
      props = column_objectWithoutProperties(_ref, ["children", "className", "size", "offset", "narrow", "mobile", "tablet", "desktop", "widescreen", "fullhd", "touch"]);

  return external_react_default.a.createElement(components_element, column_extends({}, props, {
    className: classnames_default()(className, 'column', (_classNames = {}, column_defineProperty(_classNames, "is-".concat(size), size), column_defineProperty(_classNames, "is-".concat(touch.size, "-mobile"), touch.size), column_defineProperty(_classNames, "is-".concat(mobile.size, "-mobile"), mobile.size), column_defineProperty(_classNames, "is-".concat(tablet.size, "-tablet"), tablet.size), column_defineProperty(_classNames, "is-".concat(desktop.size, "-desktop"), desktop.size), column_defineProperty(_classNames, "is-".concat(widescreen.size, "-widescreen"), widescreen.size), column_defineProperty(_classNames, "is-".concat(fullhd.size, "-fullhd"), fullhd.size), column_defineProperty(_classNames, "is-offset-".concat(touch.offset, "-mobile"), touch.offset), column_defineProperty(_classNames, "is-offset-".concat(mobile.offset, "-mobile"), mobile.offset), column_defineProperty(_classNames, "is-offset-".concat(tablet.offset, "-tablet"), tablet.offset), column_defineProperty(_classNames, "is-offset-".concat(desktop.offset, "-desktop"), desktop.offset), column_defineProperty(_classNames, "is-offset-".concat(widescreen.offset, "-widescreen"), widescreen.offset), column_defineProperty(_classNames, "is-offset-".concat(fullhd.offset, "-fullhd"), fullhd.offset), column_defineProperty(_classNames, "is-offset-".concat(offset), offset), column_defineProperty(_classNames, 'is-narrow', narrow), column_defineProperty(_classNames, 'is-narrow-touch', touch.narrow), column_defineProperty(_classNames, 'is-narrow-mobile', mobile.narrow), column_defineProperty(_classNames, 'is-narrow-tablet', tablet.narrow), column_defineProperty(_classNames, 'is-narrow-desktop', desktop.narrow), column_defineProperty(_classNames, 'is-narrow-widescreen', widescreen.narrow), column_defineProperty(_classNames, 'is-narrow-fullhd', fullhd.narrow), _classNames))
  }), children);
};

column_Column.propTypes = column_objectSpread({}, modifiers.propTypes, {
  children: external_prop_types_default.a.node,
  className: external_prop_types_default.a.string,
  style: external_prop_types_default.a.shape({}),

  /**
   * The size of the column. the maximum size of a row is 12
   */
  size: external_prop_types_default.a.oneOf(sizes),

  /**
   * Create horizontal space around Column elements
   */
  offset: external_prop_types_default.a.oneOf(sizes),

  /**
   * If you want a column to only take the space it needs, use the narrow modifier. The other column(s) will fill up the remaining space.
   */
  narrow: external_prop_types_default.a.bool,

  /**
   * Size, Offset and Narrow props for Mobile devices (Up to 768px)
   */
  touch: external_prop_types_default.a.shape({
    size: external_prop_types_default.a.oneOf(sizes),
    offset: external_prop_types_default.a.oneOf(sizes),
    narrow: external_prop_types_default.a.bool
  }),

  /**
   * Size, Offset and Narrow props for Mobile devices (Up to 768px)
   */
  mobile: external_prop_types_default.a.shape({
    size: external_prop_types_default.a.oneOf(sizes),
    offset: external_prop_types_default.a.oneOf(sizes),
    narrow: external_prop_types_default.a.bool
  }),

  /**
   * Size, Offset and Narrow props for Tablet devices (Between 769px and 1023px)
   */
  tablet: external_prop_types_default.a.shape({
    size: external_prop_types_default.a.oneOf(sizes),
    offset: external_prop_types_default.a.oneOf(sizes),
    narrow: external_prop_types_default.a.bool
  }),

  /**
   * Size, Offset and Narrow props for Desktop devices (Between 1024px and 1215px)
   */
  desktop: external_prop_types_default.a.shape({
    size: external_prop_types_default.a.oneOf(sizes),
    offset: external_prop_types_default.a.oneOf(sizes),
    narrow: external_prop_types_default.a.bool
  }),

  /**
   * Size, Offset and Narrow props for WideScreen devices (Between 1216px and 1407px)
   */
  widescreen: external_prop_types_default.a.shape({
    size: external_prop_types_default.a.oneOf(sizes),
    offset: external_prop_types_default.a.oneOf(sizes),
    narrow: external_prop_types_default.a.bool
  }),

  /**
   * Size, Offset and Narrow props for FullHD devices (1408px and above)
   */
  fullhd: external_prop_types_default.a.shape({
    size: external_prop_types_default.a.oneOf(sizes),
    offset: external_prop_types_default.a.oneOf(sizes),
    narrow: external_prop_types_default.a.bool
  })
});
column_Column.defaultProps = column_objectSpread({}, modifiers.defaultProps, {
  children: undefined,
  className: undefined,
  style: undefined,
  size: undefined,
  offset: undefined,
  narrow: undefined,
  mobile: {
    size: undefined,
    offset: undefined,
    narrow: undefined
  },
  touch: {
    size: undefined,
    offset: undefined,
    narrow: undefined
  },
  tablet: {
    size: undefined,
    offset: undefined,
    narrow: undefined
  },
  desktop: {
    size: undefined,
    offset: undefined,
    narrow: undefined
  },
  widescreen: {
    size: undefined,
    offset: undefined,
    narrow: undefined
  },
  fullhd: {
    size: undefined,
    offset: undefined,
    narrow: undefined
  }
});
/* harmony default export */ var column = (column_Column);
// CONCATENATED MODULE: ./src/components/columns/columns.js
function columns_extends() { columns_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return columns_extends.apply(this, arguments); }

function columns_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function columns_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { columns_ownKeys(source, true).forEach(function (key) { columns_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { columns_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function columns_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function columns_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = columns_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function columns_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









var breakpoints = [null].concat(Object.keys(constants.BREAKPOINTS).map(function (key) {
  return constants.BREAKPOINTS[key];
}));
var columns_sizes = [0, 1, 2, 3, 4, 5, 6, 7, 8];

var columns_Columns = function Columns(_ref) {
  var _objectSpread2, _ref2;

  var className = _ref.className,
      breakpoint = _ref.breakpoint,
      gapless = _ref.gapless,
      multiline = _ref.multiline,
      centered = _ref.centered,
      vCentered = _ref.vCentered,
      variableGap = _ref.variableGap,
      props = columns_objectWithoutProperties(_ref, ["className", "breakpoint", "gapless", "multiline", "centered", "vCentered", "variableGap"]);

  return external_react_default.a.createElement(components_element, columns_extends({}, props, {
    className: classnames_default()(className, 'columns', columns_objectSpread((_objectSpread2 = {}, columns_defineProperty(_objectSpread2, "is-".concat(breakpoint), breakpoint), columns_defineProperty(_objectSpread2, 'is-gapless', gapless), columns_defineProperty(_objectSpread2, 'is-multiline', multiline), columns_defineProperty(_objectSpread2, 'is-centered', centered), columns_defineProperty(_objectSpread2, 'is-vcentered', vCentered), columns_defineProperty(_objectSpread2, 'is-variable', Object.keys(variableGap).length > 0), _objectSpread2), variableGap ? (_ref2 = {}, columns_defineProperty(_ref2, "is-".concat(variableGap.touch, "-touch"), variableGap.touch), columns_defineProperty(_ref2, "is-".concat(variableGap.mobile, "-mobile"), variableGap.mobile), columns_defineProperty(_ref2, "is-".concat(variableGap.tablet, "-tablet"), variableGap.tablet), columns_defineProperty(_ref2, "is-".concat(variableGap.desktop, "-desktop"), variableGap.desktop), columns_defineProperty(_ref2, "is-".concat(variableGap.widescreen, "-widescreen"), variableGap.widescreen), columns_defineProperty(_ref2, "is-".concat(variableGap.fullhd, "-fullhd"), variableGap.fullhd), _ref2) : {}))
  }));
};

columns_Columns.Column = column;
columns_Columns.CONSTANTS = columns_constants;
columns_Columns.propTypes = columns_objectSpread({}, modifiers.propTypes, {
  children: external_prop_types_default.a.node,
  className: external_prop_types_default.a.string,
  style: external_prop_types_default.a.shape({}),
  variableGap: external_prop_types_default.a.shape(columns_objectSpread({}, Object.values(constants.BREAKPOINTS).reduce(function (values, breakpoint) {
    return columns_objectSpread({}, values, columns_defineProperty({}, breakpoint, external_prop_types_default.a.oneOf(columns_sizes)));
  }, {}))),

  /**
   * Breakpoint where columns become stacked.
   */
  breakpoint: external_prop_types_default.a.oneOf(breakpoints),

  /**
   * `true` to remove space between columns
   */
  gapless: external_prop_types_default.a.bool,

  /**
   * `true` if you want to use more than one line if you add more column elements that would fit in a single row.
   */
  multiline: external_prop_types_default.a.bool,

  /**
   * `true` you want the columns inside to be horizontaly centered
   */
  centered: external_prop_types_default.a.bool,

  /**
   * `true` if you want to vertically align columns
   */
  vCentered: external_prop_types_default.a.bool
});
columns_Columns.defaultProps = columns_objectSpread({}, modifiers.defaultProps, {
  children: null,
  className: undefined,
  style: undefined,
  breakpoint: undefined,
  gapless: false,
  centered: false,
  vCentered: false,
  multiline: true,
  variableGap: {}
});
/* harmony default export */ var columns = (columns_Columns);
// EXTERNAL MODULE: ./src/components/columns/columns.sass
var columns_columns = __webpack_require__(12);

// CONCATENATED MODULE: ./src/components/columns/index.js


/* harmony default export */ var components_columns = (columns);
// EXTERNAL MODULE: ./src/components/container/container.sass
var container = __webpack_require__(13);

// CONCATENATED MODULE: ./src/components/container/container.js
function container_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function container_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { container_ownKeys(source, true).forEach(function (key) { container_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { container_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function container_extends() { container_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return container_extends.apply(this, arguments); }

function container_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function container_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = container_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function container_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var container_breakpoints = [null].concat(Object.keys(constants.BREAKPOINTS).map(function (key) {
  return constants.BREAKPOINTS[key];
}));

var container_Container = function Container(_ref) {
  var children = _ref.children,
      fluid = _ref.fluid,
      breakpoint = _ref.breakpoint,
      className = _ref.className,
      props = container_objectWithoutProperties(_ref, ["children", "fluid", "breakpoint", "className"]);

  return external_react_default.a.createElement(components_element, container_extends({}, props, {
    className: classnames_default()('container', className, container_defineProperty({
      'is-fluid': fluid
    }, "is-".concat(breakpoint), breakpoint))
  }), children);
};

container_Container.propTypes = container_objectSpread({}, modifiers.propTypes, {
  children: external_prop_types_default.a.node,
  fluid: external_prop_types_default.a.bool,
  className: external_prop_types_default.a.string,
  style: external_prop_types_default.a.shape({}),
  breakpoint: external_prop_types_default.a.oneOf(container_breakpoints),
  renderAs: render_as
});
container_Container.defaultProps = container_objectSpread({}, modifiers.defaultProps, {
  fluid: false,
  children: null,
  breakpoint: undefined,
  className: undefined,
  style: undefined,
  renderAs: 'div'
});
/* harmony default export */ var container_container = (container_Container);
// CONCATENATED MODULE: ./src/components/container/index.js


// EXTERNAL MODULE: ./src/components/content/content.sass
var content_content = __webpack_require__(14);

// CONCATENATED MODULE: ./src/components/content/content.js
function content_content_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function content_content_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { content_content_ownKeys(source, true).forEach(function (key) { content_content_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { content_content_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function content_content_extends() { content_content_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return content_content_extends.apply(this, arguments); }

function content_content_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function content_content_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = content_content_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function content_content_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var content_Content = function Content(_ref) {
  var children = _ref.children,
      className = _ref.className,
      size = _ref.size,
      props = content_content_objectWithoutProperties(_ref, ["children", "className", "size"]);

  return external_react_default.a.createElement(components_element, content_content_extends({}, props, {
    className: classnames_default()('content', className, content_content_defineProperty({}, "is-".concat(size), size))
  }), children);
};

content_Content.propTypes = content_content_objectSpread({}, modifiers.propTypes, {
  children: external_prop_types_default.a.node,
  className: external_prop_types_default.a.string,
  style: external_prop_types_default.a.shape({}),
  size: external_prop_types_default.a.oneOf(['small', 'medium', 'large']),
  renderAs: render_as
});
content_Content.defaultProps = content_content_objectSpread({}, modifiers.defaultProps, {
  children: null,
  className: undefined,
  style: undefined,
  size: undefined,
  renderAs: 'div'
});
/* harmony default export */ var components_content_content = (content_Content);
// CONCATENATED MODULE: ./src/components/content/index.js


// EXTERNAL MODULE: ./src/components/footer/footer.sass
var footer_footer = __webpack_require__(15);

// CONCATENATED MODULE: ./src/components/footer/footer.js
function footer_footer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function footer_footer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { footer_footer_ownKeys(source, true).forEach(function (key) { footer_footer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { footer_footer_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function footer_footer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function footer_footer_extends() { footer_footer_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return footer_footer_extends.apply(this, arguments); }

function footer_footer_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = footer_footer_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function footer_footer_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var footer_Footer = function Footer(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = footer_footer_objectWithoutProperties(_ref, ["children", "className"]);

  return external_react_default.a.createElement(components_element, footer_footer_extends({}, props, {
    className: classnames_default()('footer', className)
  }), children);
};

footer_Footer.propTypes = footer_footer_objectSpread({}, modifiers.propTypes, {
  children: external_prop_types_default.a.node,
  className: external_prop_types_default.a.string,
  style: external_prop_types_default.a.shape({}),
  renderAs: render_as
});
footer_Footer.defaultProps = footer_footer_objectSpread({}, modifiers.defaultProps, {
  children: null,
  className: undefined,
  style: undefined,
  renderAs: 'div'
});
/* harmony default export */ var components_footer_footer = (footer_Footer);
// CONCATENATED MODULE: ./src/components/footer/index.js


// EXTERNAL MODULE: ./src/components/heading/heading.sass
var heading_heading = __webpack_require__(16);

// CONCATENATED MODULE: ./src/components/heading/heading.js
function heading_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function heading_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { heading_ownKeys(source, true).forEach(function (key) { heading_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { heading_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function heading_extends() { heading_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return heading_extends.apply(this, arguments); }

function heading_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function heading_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = heading_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function heading_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var heading_Heading = function Heading(_ref) {
  var _classnames;

  var children = _ref.children,
      className = _ref.className,
      size = _ref.size,
      subtitle = _ref.subtitle,
      weight = _ref.weight,
      spaced = _ref.spaced,
      heading = _ref.heading,
      props = heading_objectWithoutProperties(_ref, ["children", "className", "size", "subtitle", "weight", "spaced", "heading"]);

  return external_react_default.a.createElement(components_element, heading_extends({}, props, {
    className: classnames_default()(className, (_classnames = {
      title: !subtitle && !heading,
      subtitle: subtitle,
      heading: heading
    }, heading_defineProperty(_classnames, "is-".concat(size), size), heading_defineProperty(_classnames, "has-text-weight-".concat(weight), weight), heading_defineProperty(_classnames, 'is-spaced', spaced && !subtitle), _classnames))
  }), children);
};

heading_Heading.propTypes = heading_objectSpread({}, modifiers.propTypes, {
  children: external_prop_types_default.a.node,
  className: external_prop_types_default.a.string,
  renderAs: render_as,
  size: external_prop_types_default.a.oneOf([1, 2, 3, 4, 5, 6]),
  weight: external_prop_types_default.a.oneOf(['light', 'normal', 'semibold', 'bold']),
  subtitle: external_prop_types_default.a.bool,
  heading: external_prop_types_default.a.bool,
  spaced: external_prop_types_default.a.bool
});
heading_Heading.defaultProps = heading_objectSpread({}, modifiers.defaultProps, {
  children: null,
  className: undefined,
  renderAs: 'h1',
  size: undefined,
  weight: undefined,
  subtitle: false,
  heading: false,
  spaced: false
});
/* harmony default export */ var components_heading_heading = (heading_Heading);
// CONCATENATED MODULE: ./src/components/heading/index.js


// EXTERNAL MODULE: ./src/components/hero/hero.sass
var hero = __webpack_require__(17);

// CONCATENATED MODULE: ./src/components/hero/components/hero-head.js
function hero_head_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function hero_head_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { hero_head_ownKeys(source, true).forEach(function (key) { hero_head_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { hero_head_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function hero_head_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function hero_head_extends() { hero_head_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return hero_head_extends.apply(this, arguments); }

function hero_head_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = hero_head_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function hero_head_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var hero_head_HeroHead = function HeroHead(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = hero_head_objectWithoutProperties(_ref, ["children", "className"]);

  return external_react_default.a.createElement(components_element, hero_head_extends({}, props, {
    className: classnames_default()(className, 'hero-head')
  }), children);
};

hero_head_HeroHead.propTypes = hero_head_objectSpread({}, modifiers.propTypes, {
  children: external_prop_types_default.a.node,
  className: external_prop_types_default.a.string,
  style: external_prop_types_default.a.shape({}),
  renderAs: render_as
});
hero_head_HeroHead.defaultProps = hero_head_objectSpread({}, modifiers.defaultProps, {
  children: null,
  className: undefined,
  style: undefined,
  renderAs: 'div'
});
/* harmony default export */ var hero_head = (hero_head_HeroHead);
// CONCATENATED MODULE: ./src/components/hero/components/hero-body.js
function hero_body_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function hero_body_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { hero_body_ownKeys(source, true).forEach(function (key) { hero_body_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { hero_body_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function hero_body_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function hero_body_extends() { hero_body_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return hero_body_extends.apply(this, arguments); }

function hero_body_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = hero_body_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function hero_body_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var hero_body_HeroBody = function HeroBody(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = hero_body_objectWithoutProperties(_ref, ["children", "className"]);

  return external_react_default.a.createElement(components_element, hero_body_extends({}, props, {
    className: classnames_default()(className, 'hero-body')
  }), children);
};

hero_body_HeroBody.propTypes = hero_body_objectSpread({}, modifiers.propTypes, {
  children: external_prop_types_default.a.node,
  className: external_prop_types_default.a.string,
  style: external_prop_types_default.a.shape({}),
  renderAs: render_as
});
hero_body_HeroBody.defaultProps = hero_body_objectSpread({}, modifiers.defaultProps, {
  children: null,
  className: undefined,
  style: undefined,
  renderAs: 'div'
});
/* harmony default export */ var hero_body = (hero_body_HeroBody);
// CONCATENATED MODULE: ./src/components/hero/components/hero-footer.js
function hero_footer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function hero_footer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { hero_footer_ownKeys(source, true).forEach(function (key) { hero_footer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { hero_footer_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function hero_footer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function hero_footer_extends() { hero_footer_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return hero_footer_extends.apply(this, arguments); }

function hero_footer_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = hero_footer_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function hero_footer_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var hero_footer_HeroFooter = function HeroFooter(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = hero_footer_objectWithoutProperties(_ref, ["children", "className"]);

  return external_react_default.a.createElement(components_element, hero_footer_extends({}, props, {
    className: classnames_default()(className, 'hero-foot')
  }), children);
};

hero_footer_HeroFooter.propTypes = hero_footer_objectSpread({}, modifiers.propTypes, {
  children: external_prop_types_default.a.node,
  className: external_prop_types_default.a.string,
  style: external_prop_types_default.a.shape({}),
  renderAs: render_as
});
hero_footer_HeroFooter.defaultProps = hero_footer_objectSpread({}, modifiers.defaultProps, {
  children: null,
  className: undefined,
  style: undefined,
  renderAs: 'div'
});
/* harmony default export */ var hero_footer = (hero_footer_HeroFooter);
// CONCATENATED MODULE: ./src/components/hero/hero.js
function hero_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function hero_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { hero_ownKeys(source, true).forEach(function (key) { hero_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { hero_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function hero_extends() { hero_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return hero_extends.apply(this, arguments); }

function hero_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function hero_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = hero_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function hero_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











var hero_colors = [null].concat(Object.keys(constants.COLORS).map(function (key) {
  return constants.COLORS[key];
}));

var hero_Hero = function Hero(_ref) {
  var _classnames;

  var children = _ref.children,
      className = _ref.className,
      color = _ref.color,
      gradient = _ref.gradient,
      size = _ref.size,
      hasNavbar = _ref.hasNavbar,
      props = hero_objectWithoutProperties(_ref, ["children", "className", "color", "gradient", "size", "hasNavbar"]);

  return external_react_default.a.createElement(components_element, hero_extends({}, props, {
    className: classnames_default()('hero', className, (_classnames = {}, hero_defineProperty(_classnames, "is-".concat(color), color), hero_defineProperty(_classnames, "is-".concat(size), size), hero_defineProperty(_classnames, 'is-bold', gradient), hero_defineProperty(_classnames, 'is-fullheight-with-navbar', hasNavbar), _classnames))
  }), children);
};

hero_Hero.Head = hero_head;
hero_Hero.Body = hero_body;
hero_Hero.Footer = hero_footer;
hero_Hero.propTypes = hero_objectSpread({}, modifiers.propTypes, {
  children: external_prop_types_default.a.node,
  className: external_prop_types_default.a.string,
  style: external_prop_types_default.a.shape({}),
  renderAs: render_as,
  color: external_prop_types_default.a.oneOf(hero_colors),
  gradient: external_prop_types_default.a.bool,
  size: external_prop_types_default.a.oneOf(['small', 'medium', 'large', 'fullheight']),
  hasNavbar: external_prop_types_default.a.bool
});
hero_Hero.defaultProps = hero_objectSpread({}, modifiers.defaultProps, {
  children: null,
  className: undefined,
  style: undefined,
  renderAs: 'section',
  color: undefined,
  gradient: undefined,
  size: undefined,
  hasNavbar: undefined
});
/* harmony default export */ var hero_hero = (hero_Hero);
// CONCATENATED MODULE: ./src/components/hero/index.js


// EXTERNAL MODULE: ./src/components/level/level.sass
var level = __webpack_require__(18);

// CONCATENATED MODULE: ./src/components/level/components/level-side.js
function level_side_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function level_side_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { level_side_ownKeys(source, true).forEach(function (key) { level_side_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { level_side_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function level_side_extends() { level_side_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return level_side_extends.apply(this, arguments); }

function level_side_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function level_side_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = level_side_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function level_side_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var level_side_LevelSide = function LevelSide(_ref) {
  var children = _ref.children,
      className = _ref.className,
      align = _ref.align,
      props = level_side_objectWithoutProperties(_ref, ["children", "className", "align"]);

  return external_react_default.a.createElement(components_element, level_side_extends({}, props, {
    className: classnames_default()(className, level_side_defineProperty({}, "level-".concat(align), align))
  }), children);
};

level_side_LevelSide.propTypes = level_side_objectSpread({}, modifiers.propTypes, {
  children: external_prop_types_default.a.node,
  className: external_prop_types_default.a.string,
  style: external_prop_types_default.a.shape({}),
  renderAs: render_as,
  align: external_prop_types_default.a.string
});
level_side_LevelSide.defaultProps = level_side_objectSpread({}, modifiers.defaultProps, {
  children: null,
  className: undefined,
  style: undefined,
  renderAs: 'div',
  align: 'left'
});
/* harmony default export */ var level_side = (level_side_LevelSide);
// CONCATENATED MODULE: ./src/components/level/components/level-item.js
function level_item_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function level_item_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { level_item_ownKeys(source, true).forEach(function (key) { level_item_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { level_item_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function level_item_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function level_item_extends() { level_item_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return level_item_extends.apply(this, arguments); }

function level_item_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = level_item_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function level_item_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var level_item_LevelItem = function LevelItem(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = level_item_objectWithoutProperties(_ref, ["children", "className"]);

  return external_react_default.a.createElement(components_element, level_item_extends({}, props, {
    className: classnames_default()('level-item', className, {})
  }), children);
};

level_item_LevelItem.propTypes = level_item_objectSpread({}, modifiers.propTypes, {
  children: external_prop_types_default.a.node,
  className: external_prop_types_default.a.string,
  style: external_prop_types_default.a.shape({}),
  renderAs: render_as
});
level_item_LevelItem.defaultProps = level_item_objectSpread({}, modifiers.defaultProps, {
  children: null,
  className: undefined,
  style: undefined,
  renderAs: 'div'
});
/* harmony default export */ var level_item = (level_item_LevelItem);
// CONCATENATED MODULE: ./src/components/level/level.js
function level_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function level_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { level_ownKeys(source, true).forEach(function (key) { level_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { level_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function level_extends() { level_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return level_extends.apply(this, arguments); }

function level_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function level_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = level_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function level_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










var level_breakpoints = [null].concat(Object.keys(constants.BREAKPOINTS).map(function (key) {
  return constants.BREAKPOINTS[key];
}));

var level_Level = function Level(_ref) {
  var _classnames;

  var children = _ref.children,
      className = _ref.className,
      breakpoint = _ref.breakpoint,
      mobile = _ref.mobile,
      props = level_objectWithoutProperties(_ref, ["children", "className", "breakpoint", "mobile"]);

  return external_react_default.a.createElement(components_element, level_extends({}, props, {
    className: classnames_default()('level', className, (_classnames = {}, level_defineProperty(_classnames, "is-".concat(breakpoint), breakpoint), level_defineProperty(_classnames, 'is-mobile', mobile), _classnames))
  }), children);
};

level_Level.Side = level_side;
level_Level.Item = level_item;
level_Level.propTypes = level_objectSpread({}, modifiers.propTypes, {
  children: external_prop_types_default.a.node,
  className: external_prop_types_default.a.string,
  mobile: external_prop_types_default.a.bool,
  style: external_prop_types_default.a.shape({}),
  breakpoint: external_prop_types_default.a.oneOf(level_breakpoints),
  renderAs: render_as
});
level_Level.defaultProps = level_objectSpread({}, modifiers.defaultProps, {
  children: null,
  className: undefined,
  mobile: false,
  style: undefined,
  breakpoint: undefined,
  renderAs: 'div'
});
/* harmony default export */ var level_level = (level_Level);
// CONCATENATED MODULE: ./src/components/level/index.js


// CONCATENATED MODULE: ./src/components/list/components/list-item.js
function list_item_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function list_item_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { list_item_ownKeys(source, true).forEach(function (key) { list_item_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { list_item_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function list_item_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function list_item_extends() { list_item_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return list_item_extends.apply(this, arguments); }

function list_item_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = list_item_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function list_item_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var list_item_ListItem = function ListItem(_ref) {
  var children = _ref.children,
      className = _ref.className,
      active = _ref.active,
      props = list_item_objectWithoutProperties(_ref, ["children", "className", "active"]);

  return external_react_default.a.createElement(components_element, list_item_extends({}, props, {
    className: classnames_default()('list-item', className, {
      'is-active': active
    })
  }), children);
};

list_item_ListItem.propTypes = list_item_objectSpread({}, modifiers.propTypes, {
  children: external_prop_types_default.a.node,
  className: external_prop_types_default.a.string,
  style: external_prop_types_default.a.shape({}),
  renderAs: render_as
});
list_item_ListItem.defaultProps = list_item_objectSpread({}, modifiers.defaultProps, {
  children: null,
  className: undefined,
  style: undefined,
  renderAs: 'div'
});
/* harmony default export */ var list_item = (list_item_ListItem);
// CONCATENATED MODULE: ./src/components/list/list.js
function list_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function list_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { list_ownKeys(source, true).forEach(function (key) { list_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { list_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function list_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function list_extends() { list_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return list_extends.apply(this, arguments); }

function list_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = list_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function list_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









var list_List = function List(_ref) {
  var children = _ref.children,
      className = _ref.className,
      hoverable = _ref.hoverable,
      props = list_objectWithoutProperties(_ref, ["children", "className", "hoverable"]);

  return external_react_default.a.createElement(components_element, list_extends({}, props, {
    className: classnames_default()('list', className, {
      'is-hoverable': hoverable
    })
  }), children);
};

list_List.propTypes = list_objectSpread({}, modifiers.propTypes, {
  children: external_prop_types_default.a.node,
  className: external_prop_types_default.a.string,
  style: external_prop_types_default.a.shape({}),
  renderAs: render_as
});
list_List.defaultProps = list_objectSpread({}, modifiers.defaultProps, {
  children: null,
  className: undefined,
  style: undefined,
  renderAs: 'div'
});
list_List.Item = list_item;
/* harmony default export */ var list = (list_List);
// EXTERNAL MODULE: ./src/components/list/list.sass
var list_list = __webpack_require__(19);

// CONCATENATED MODULE: ./src/components/list/index.js


/* harmony default export */ var components_list = (list);
// EXTERNAL MODULE: ./src/components/media/media.sass
var media = __webpack_require__(20);

// CONCATENATED MODULE: ./src/components/media/components/media-item.js
function media_item_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function media_item_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { media_item_ownKeys(source, true).forEach(function (key) { media_item_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { media_item_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function media_item_extends() { media_item_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return media_item_extends.apply(this, arguments); }

function media_item_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function media_item_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = media_item_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function media_item_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var media_item_MediaItem = function MediaItem(_ref) {
  var children = _ref.children,
      className = _ref.className,
      position = _ref.position,
      props = media_item_objectWithoutProperties(_ref, ["children", "className", "position"]);

  var p = position === 'center' ? 'content' : position;
  return external_react_default.a.createElement(components_element, media_item_extends({}, props, {
    className: classnames_default()(className, media_item_defineProperty({}, "media-".concat(p), p))
  }), children);
};

media_item_MediaItem.propTypes = media_item_objectSpread({}, modifiers.propTypes, {
  children: external_prop_types_default.a.node,
  className: external_prop_types_default.a.string,
  style: external_prop_types_default.a.shape({}),
  renderAs: render_as,
  position: external_prop_types_default.a.oneOf(['center', 'right', 'left'])
});
media_item_MediaItem.defaultProps = media_item_objectSpread({}, modifiers.defaultProps, {
  children: null,
  className: undefined,
  style: undefined,
  renderAs: 'div',
  position: 'center'
});
/* harmony default export */ var media_item = (media_item_MediaItem);
// CONCATENATED MODULE: ./src/components/media/components/media-content.js
function media_content_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function media_content_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { media_content_ownKeys(source, true).forEach(function (key) { media_content_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { media_content_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function media_content_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function media_content_extends() { media_content_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return media_content_extends.apply(this, arguments); }

function media_content_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = media_content_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function media_content_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var media_content_MediaContent = function MediaContent(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = media_content_objectWithoutProperties(_ref, ["children", "className"]);

  return external_react_default.a.createElement(components_element, media_content_extends({}, props, {
    className: classnames_default()(className, 'content')
  }), children);
};

media_content_MediaContent.propTypes = media_content_objectSpread({}, modifiers.propTypes, {
  children: external_prop_types_default.a.node,
  className: external_prop_types_default.a.string,
  style: external_prop_types_default.a.shape({}),
  renderAs: render_as
});
media_content_MediaContent.defaultProps = media_content_objectSpread({}, modifiers.defaultProps, {
  children: null,
  className: undefined,
  style: undefined,
  renderAs: 'div'
});
/* harmony default export */ var media_content = (media_content_MediaContent);
// CONCATENATED MODULE: ./src/components/media/media.js
function media_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function media_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { media_ownKeys(source, true).forEach(function (key) { media_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { media_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function media_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function media_extends() { media_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return media_extends.apply(this, arguments); }

function media_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = media_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function media_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










var media_Media = function Media(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = media_objectWithoutProperties(_ref, ["children", "className"]);

  return external_react_default.a.createElement(components_element, media_extends({}, props, {
    className: classnames_default()('media', className, {})
  }), children);
};

media_Media.Item = media_item;
media_Media.Content = media_content;
media_Media.propTypes = media_objectSpread({}, modifiers.propTypes, {
  children: external_prop_types_default.a.node,
  className: external_prop_types_default.a.string,
  style: external_prop_types_default.a.shape({}),
  renderAs: render_as
});
media_Media.defaultProps = media_objectSpread({}, modifiers.defaultProps, {
  children: null,
  className: undefined,
  style: undefined,
  renderAs: 'article'
});
/* harmony default export */ var media_media = (media_Media);
// CONCATENATED MODULE: ./src/components/media/index.js


// EXTERNAL MODULE: ./src/components/notification/notification.sass
var notification_notification = __webpack_require__(21);

// CONCATENATED MODULE: ./src/components/notification/notification.js
function notification_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function notification_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { notification_ownKeys(source, true).forEach(function (key) { notification_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { notification_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function notification_extends() { notification_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return notification_extends.apply(this, arguments); }

function notification_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function notification_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = notification_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function notification_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var notification_colors = [null].concat(Object.keys(constants.COLORS).map(function (key) {
  return constants.COLORS[key];
}));

var notification_Notification = function Notification(_ref) {
  var children = _ref.children,
      className = _ref.className,
      color = _ref.color,
      props = notification_objectWithoutProperties(_ref, ["children", "className", "color"]);

  return external_react_default.a.createElement(components_element, notification_extends({}, props, {
    className: classnames_default()('notification', notification_defineProperty({}, "is-".concat(color), color), className)
  }), children);
};

notification_Notification.propTypes = notification_objectSpread({}, modifiers.propTypes, {
  children: external_prop_types_default.a.node,
  className: external_prop_types_default.a.string,
  style: external_prop_types_default.a.shape({}),
  renderAs: render_as,
  color: external_prop_types_default.a.oneOf(notification_colors)
});
notification_Notification.defaultProps = notification_objectSpread({}, modifiers.defaultProps, {
  children: null,
  className: undefined,
  style: undefined,
  renderAs: 'div',
  color: undefined
});
/* harmony default export */ var components_notification_notification = (notification_Notification);
// CONCATENATED MODULE: ./src/components/notification/index.js


// EXTERNAL MODULE: ./src/components/progress/progress.sass
var progress = __webpack_require__(22);

// CONCATENATED MODULE: ./src/components/progress/progress.js
function progress_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function progress_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { progress_ownKeys(source, true).forEach(function (key) { progress_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { progress_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function progress_extends() { progress_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return progress_extends.apply(this, arguments); }

function progress_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function progress_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = progress_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function progress_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var progress_colors = [null].concat(Object.keys(constants.COLORS).map(function (key) {
  return constants.COLORS[key];
}));

var progress_Progress = function Progress(_ref) {
  var _classnames;

  var className = _ref.className,
      value = _ref.value,
      max = _ref.max,
      color = _ref.color,
      size = _ref.size,
      props = progress_objectWithoutProperties(_ref, ["className", "value", "max", "color", "size"]);

  return external_react_default.a.createElement(components_element, progress_extends({
    renderAs: "progress"
  }, props, {
    value: value,
    max: max,
    className: classnames_default()('progress', className, (_classnames = {}, progress_defineProperty(_classnames, "is-".concat(color), color), progress_defineProperty(_classnames, "is-".concat(size), size), _classnames))
  }));
};

progress_Progress.propTypes = progress_objectSpread({}, modifiers.propTypes, {
  className: external_prop_types_default.a.string,
  style: external_prop_types_default.a.shape({}),
  color: external_prop_types_default.a.oneOf(progress_colors),
  size: external_prop_types_default.a.oneOf(['small', 'medium', 'large']),
  value: external_prop_types_default.a.number.isRequired,
  max: external_prop_types_default.a.number.isRequired
});
progress_Progress.defaultProps = progress_objectSpread({}, modifiers.defaultProps, {
  className: undefined,
  style: undefined,
  color: undefined,
  size: undefined
});
/* harmony default export */ var progress_progress = (progress_Progress);
// CONCATENATED MODULE: ./src/components/progress/index.js


// EXTERNAL MODULE: ./src/components/section/section.sass
var section = __webpack_require__(23);

// CONCATENATED MODULE: ./src/components/section/section.js
function section_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function section_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { section_ownKeys(source, true).forEach(function (key) { section_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { section_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function section_extends() { section_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return section_extends.apply(this, arguments); }

function section_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function section_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = section_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function section_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var section_Section = function Section(_ref) {
  var children = _ref.children,
      className = _ref.className,
      size = _ref.size,
      props = section_objectWithoutProperties(_ref, ["children", "className", "size"]);

  return external_react_default.a.createElement(components_element, section_extends({}, props, {
    className: classnames_default()('section', className, section_defineProperty({}, "is-".concat(size), size))
  }), children);
};

section_Section.propTypes = section_objectSpread({}, modifiers.propTypes, {
  children: external_prop_types_default.a.node,
  className: external_prop_types_default.a.string,
  style: external_prop_types_default.a.shape({}),
  renderAs: render_as,
  size: external_prop_types_default.a.oneOf(['medium', 'large'])
});
section_Section.defaultProps = section_objectSpread({}, modifiers.defaultProps, {
  children: null,
  className: undefined,
  style: undefined,
  renderAs: 'section',
  size: undefined
});
/* harmony default export */ var section_section = (section_Section);
// CONCATENATED MODULE: ./src/components/section/index.js


// EXTERNAL MODULE: ./src/components/table/table.sass
var table = __webpack_require__(24);

// CONCATENATED MODULE: ./src/components/table/table.js
function table_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function table_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { table_ownKeys(source, true).forEach(function (key) { table_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { table_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function table_extends() { table_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return table_extends.apply(this, arguments); }

function table_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function table_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = table_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function table_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var table_Table = function Table(_ref) {
  var _classnames;

  var children = _ref.children,
      className = _ref.className,
      size = _ref.size,
      striped = _ref.striped,
      bordered = _ref.bordered,
      props = table_objectWithoutProperties(_ref, ["children", "className", "size", "striped", "bordered"]);

  return external_react_default.a.createElement(components_element, table_extends({
    renderAs: "table"
  }, props, {
    className: classnames_default()('table', className, (_classnames = {}, table_defineProperty(_classnames, "is-".concat(size), size), table_defineProperty(_classnames, 'is-bordered', bordered), table_defineProperty(_classnames, 'is-striped', striped), _classnames))
  }), children);
};

table_Table.propTypes = table_objectSpread({}, modifiers.propTypes, {
  children: external_prop_types_default.a.node,
  className: external_prop_types_default.a.string,
  style: external_prop_types_default.a.shape({}),
  size: external_prop_types_default.a.oneOf(['fullwidth', 'narrow']),
  striped: external_prop_types_default.a.bool,
  bordered: external_prop_types_default.a.bool
});
table_Table.defaultProps = table_objectSpread({}, modifiers.defaultProps, {
  children: null,
  className: undefined,
  style: undefined,
  size: 'fullwidth',
  striped: true,
  bordered: false
});
/* harmony default export */ var table_table = (table_Table);
// CONCATENATED MODULE: ./src/components/table/index.js


// EXTERNAL MODULE: ./src/components/tag/tag.sass
var tag = __webpack_require__(25);

// CONCATENATED MODULE: ./src/components/tag/components/tag-group.js
function tag_group_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function tag_group_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { tag_group_ownKeys(source, true).forEach(function (key) { tag_group_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { tag_group_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function tag_group_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function tag_group_extends() { tag_group_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return tag_group_extends.apply(this, arguments); }

function tag_group_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = tag_group_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function tag_group_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var tag_group_TagGroup = function TagGroup(_ref) {
  var children = _ref.children,
      className = _ref.className,
      gapless = _ref.gapless,
      props = tag_group_objectWithoutProperties(_ref, ["children", "className", "gapless"]);

  return external_react_default.a.createElement(components_element, tag_group_extends({
    renderAs: "span"
  }, props, {
    className: classnames_default()('tags', className, {
      'has-addons': gapless
    })
  }), children);
};

tag_group_TagGroup.propTypes = tag_group_objectSpread({}, modifiers.propTypes, {
  children: external_prop_types_default.a.node,
  className: external_prop_types_default.a.string,
  style: external_prop_types_default.a.shape({}),
  gapless: external_prop_types_default.a.bool
});
tag_group_TagGroup.defaultProps = tag_group_objectSpread({}, modifiers.defaultProps, {
  children: null,
  className: undefined,
  style: undefined,
  gapless: false
});
/* harmony default export */ var tag_group = (tag_group_TagGroup);
// CONCATENATED MODULE: ./src/components/tag/tag.js
function tag_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function tag_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { tag_ownKeys(source, true).forEach(function (key) { tag_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { tag_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function tag_extends() { tag_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return tag_extends.apply(this, arguments); }

function tag_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function tag_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = tag_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function tag_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









var tag_colors = [null].concat(Object.keys(constants.COLORS).map(function (key) {
  return constants.COLORS[key];
}));

var tag_Tag = function Tag(_ref) {
  var _classnames;

  var children = _ref.children,
      className = _ref.className,
      color = _ref.color,
      size = _ref.size,
      rounded = _ref.rounded,
      remove = _ref.remove,
      props = tag_objectWithoutProperties(_ref, ["children", "className", "color", "size", "rounded", "remove"]);

  return external_react_default.a.createElement(components_element, tag_extends({}, props, {
    className: classnames_default()('tag', className, (_classnames = {}, tag_defineProperty(_classnames, "is-".concat(size), size), tag_defineProperty(_classnames, "is-".concat(color), color), tag_defineProperty(_classnames, 'is-rounded', rounded), tag_defineProperty(_classnames, 'is-delete', remove), _classnames))
  }), !remove && children);
};

tag_Tag.Group = tag_group;
tag_Tag.propTypes = tag_objectSpread({}, modifiers.propTypes, {
  children: external_prop_types_default.a.node,
  className: external_prop_types_default.a.string,
  style: external_prop_types_default.a.shape({}),
  color: external_prop_types_default.a.oneOf(tag_colors),
  size: external_prop_types_default.a.oneOf(['medium', 'large']),
  rounded: external_prop_types_default.a.bool,
  remove: external_prop_types_default.a.bool,
  renderAs: render_as
});
tag_Tag.defaultProps = tag_objectSpread({}, modifiers.defaultProps, {
  children: null,
  className: undefined,
  style: undefined,
  color: undefined,
  size: undefined,
  rounded: false,
  remove: false,
  renderAs: 'span'
});
/* harmony default export */ var tag_tag = (tag_Tag);
// CONCATENATED MODULE: ./src/components/tag/index.js


// EXTERNAL MODULE: ./src/components/tile/tile.sass
var tile = __webpack_require__(26);

// CONCATENATED MODULE: ./src/components/tile/tile.js
function tile_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function tile_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { tile_ownKeys(source, true).forEach(function (key) { tile_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { tile_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function tile_extends() { tile_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return tile_extends.apply(this, arguments); }

function tile_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function tile_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = tile_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function tile_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var tile_colors = [null].concat(Object.keys(constants.COLORS).map(function (key) {
  return constants.COLORS[key];
}));

var tile_Tile = function Tile(_ref) {
  var _classnames;

  var children = _ref.children,
      className = _ref.className,
      kind = _ref.kind,
      vertical = _ref.vertical,
      size = _ref.size,
      color = _ref.color,
      notification = _ref.notification,
      props = tile_objectWithoutProperties(_ref, ["children", "className", "kind", "vertical", "size", "color", "notification"]);

  return external_react_default.a.createElement(components_element, tile_extends({}, props, {
    className: classnames_default()('tile', className, (_classnames = {
      notification: notification
    }, tile_defineProperty(_classnames, "is-".concat(kind), kind), tile_defineProperty(_classnames, "is-".concat(size), size), tile_defineProperty(_classnames, "is-".concat(color), color), tile_defineProperty(_classnames, 'is-vertical', vertical), _classnames))
  }), children);
};

tile_Tile.propTypes = tile_objectSpread({}, modifiers.propTypes, {
  children: external_prop_types_default.a.node,
  className: external_prop_types_default.a.string,
  style: external_prop_types_default.a.shape({}),
  renderAs: render_as,
  kind: external_prop_types_default.a.oneOf(['ancestor', 'parent', 'child']),
  vertical: external_prop_types_default.a.bool,
  size: external_prop_types_default.a.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  color: external_prop_types_default.a.oneOf(tile_colors),
  notification: external_prop_types_default.a.bool
});
tile_Tile.defaultProps = tile_objectSpread({}, modifiers.defaultProps, {
  children: null,
  className: undefined,
  style: undefined,
  renderAs: 'div',
  kind: undefined,
  vertical: false,
  size: undefined,
  color: undefined,
  notification: false
});
/* harmony default export */ var tile_tile = (tile_Tile);
// CONCATENATED MODULE: ./src/components/tile/index.js


// EXTERNAL MODULE: ./src/components/modal/modal.sass
var modal = __webpack_require__(27);

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(4);
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_);

// CONCATENATED MODULE: ./src/components/modal/components/content.js
function components_content_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function components_content_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { components_content_ownKeys(source, true).forEach(function (key) { components_content_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { components_content_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function components_content_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function components_content_extends() { components_content_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return components_content_extends.apply(this, arguments); }

function components_content_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = components_content_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function components_content_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var content_ModalContent = function ModalContent(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = components_content_objectWithoutProperties(_ref, ["children", "className"]);

  return external_react_default.a.createElement(components_element, components_content_extends({}, props, {
    className: classnames_default()('modal-content', className)
  }), children);
};

content_ModalContent.propTypes = components_content_objectSpread({}, modifiers.propTypes, {
  children: external_prop_types_default.a.node,
  className: external_prop_types_default.a.string,
  style: external_prop_types_default.a.shape({}),
  renderAs: render_as
});
content_ModalContent.defaultProps = components_content_objectSpread({}, modifiers.defaultProps, {
  children: null,
  className: undefined,
  style: undefined,
  renderAs: 'div'
});
/* harmony default export */ var components_content = (content_ModalContent);
// CONCATENATED MODULE: ./src/components/modal/components/card/head.js
function head_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function head_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { head_ownKeys(source, true).forEach(function (key) { head_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { head_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function head_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function head_extends() { head_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return head_extends.apply(this, arguments); }

function head_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = head_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function head_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var head_ModalCardHead = function ModalCardHead(_ref) {
  var children = _ref.children,
      className = _ref.className,
      showClose = _ref.showClose,
      onClose = _ref.onClose,
      props = head_objectWithoutProperties(_ref, ["children", "className", "showClose", "onClose"]);

  return external_react_default.a.createElement(components_element, head_extends({}, props, {
    className: classnames_default()('modal-card-head', className)
  }), children, showClose && external_react_default.a.createElement(components_button_button, {
    remove: true,
    onClick: onClose
  }));
};

head_ModalCardHead.propTypes = head_objectSpread({}, modifiers.propTypes, {
  children: external_prop_types_default.a.node,
  className: external_prop_types_default.a.string,
  style: external_prop_types_default.a.shape({}),
  showClose: external_prop_types_default.a.bool,
  onClose: external_prop_types_default.a.func
});
head_ModalCardHead.defaultProps = head_objectSpread({}, modifiers.defaultProps, {
  children: null,
  className: undefined,
  style: undefined,
  showClose: true,
  onClose: undefined,
  renderAs: 'header'
});
/* harmony default export */ var head = (head_ModalCardHead);
// CONCATENATED MODULE: ./src/components/modal/components/card/body.js
function body_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function body_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { body_ownKeys(source, true).forEach(function (key) { body_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { body_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function body_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function body_extends() { body_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return body_extends.apply(this, arguments); }

function body_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = body_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function body_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var body_ModalCardBody = function ModalCardBody(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = body_objectWithoutProperties(_ref, ["children", "className"]);

  return external_react_default.a.createElement(components_element, body_extends({}, props, {
    className: classnames_default()('modal-card-body', className)
  }), children);
};

body_ModalCardBody.propTypes = body_objectSpread({}, modifiers.propTypes, {
  children: external_prop_types_default.a.node,
  className: external_prop_types_default.a.string,
  style: external_prop_types_default.a.shape({}),
  renderAs: render_as
});
body_ModalCardBody.defaultProps = body_objectSpread({}, modifiers.defaultProps, {
  children: null,
  className: undefined,
  style: undefined,
  renderAs: 'section'
});
/* harmony default export */ var body = (body_ModalCardBody);
// CONCATENATED MODULE: ./src/components/modal/components/card/foot.js
function foot_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function foot_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { foot_ownKeys(source, true).forEach(function (key) { foot_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { foot_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function foot_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function foot_extends() { foot_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return foot_extends.apply(this, arguments); }

function foot_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = foot_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function foot_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var foot_ModalCardFoot = function ModalCardFoot(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = foot_objectWithoutProperties(_ref, ["children", "className"]);

  return external_react_default.a.createElement(components_element, foot_extends({}, props, {
    className: classnames_default()('modal-card-foot', className)
  }), children);
};

foot_ModalCardFoot.propTypes = foot_objectSpread({}, modifiers.propTypes, {
  children: external_prop_types_default.a.node,
  className: external_prop_types_default.a.string,
  style: external_prop_types_default.a.shape({})
});
foot_ModalCardFoot.defaultProps = foot_objectSpread({}, modifiers.defaultProps, {
  children: null,
  className: undefined,
  style: undefined,
  renderAs: 'footer'
});
/* harmony default export */ var foot = (foot_ModalCardFoot);
// CONCATENATED MODULE: ./src/components/modal/components/card/title.js
function title_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function title_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { title_ownKeys(source, true).forEach(function (key) { title_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { title_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function title_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function title_extends() { title_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return title_extends.apply(this, arguments); }

function title_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = title_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function title_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var title_ModalCardTitle = function ModalCardTitle(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = title_objectWithoutProperties(_ref, ["children", "className"]);

  return external_react_default.a.createElement(components_element, title_extends({}, props, {
    className: classnames_default()('modal-card-title', className)
  }), children);
};

title_ModalCardTitle.propTypes = title_objectSpread({}, modifiers.propTypes, {
  children: external_prop_types_default.a.node,
  className: external_prop_types_default.a.string,
  style: external_prop_types_default.a.shape({})
});
title_ModalCardTitle.defaultProps = title_objectSpread({}, modifiers.defaultProps, {
  children: null,
  className: undefined,
  style: undefined,
  renderAs: 'p'
});
/* harmony default export */ var card_title = (title_ModalCardTitle);
// CONCATENATED MODULE: ./src/components/modal/components/card/card.js
function card_card_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function card_card_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { card_card_ownKeys(source, true).forEach(function (key) { card_card_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { card_card_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function card_card_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function card_card_extends() { card_card_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return card_card_extends.apply(this, arguments); }

function card_card_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = card_card_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function card_card_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











var card_ModalCard = function ModalCard(_ref) {
  var className = _ref.className,
      onClose = _ref.onClose,
      children = _ref.children,
      props = card_card_objectWithoutProperties(_ref, ["className", "onClose", "children"]);

  return external_react_default.a.createElement(components_element, card_card_extends({}, props, {
    className: classnames_default()('modal-card', className)
  }), children);
};

card_ModalCard.Head = head;
card_ModalCard.Body = body;
card_ModalCard.Foot = foot;
card_ModalCard.Title = card_title;
card_ModalCard.propTypes = card_card_objectSpread({}, modifiers.propTypes, {
  children: external_prop_types_default.a.node,
  className: external_prop_types_default.a.string,
  style: external_prop_types_default.a.shape({}),
  onClose: external_prop_types_default.a.func
});
card_ModalCard.defaultProps = card_card_objectSpread({}, modifiers.defaultProps, {
  children: null,
  className: undefined,
  style: undefined,
  onClose: undefined
});
/* harmony default export */ var components_card_card = (card_ModalCard);
// CONCATENATED MODULE: ./src/components/modal/components/card/index.js

/* harmony default export */ var components_card = (components_card_card);
// CONCATENATED MODULE: ./src/components/modal/modal.js
function modal_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { modal_typeof = function _typeof(obj) { return typeof obj; }; } else { modal_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return modal_typeof(obj); }

function modal_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function modal_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function modal_createClass(Constructor, protoProps, staticProps) { if (protoProps) modal_defineProperties(Constructor.prototype, protoProps); if (staticProps) modal_defineProperties(Constructor, staticProps); return Constructor; }

function modal_possibleConstructorReturn(self, call) { if (call && (modal_typeof(call) === "object" || typeof call === "function")) { return call; } return modal_assertThisInitialized(self); }

function modal_getPrototypeOf(o) { modal_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return modal_getPrototypeOf(o); }

function modal_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function modal_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) modal_setPrototypeOf(subClass, superClass); }

function modal_setPrototypeOf(o, p) { modal_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return modal_setPrototypeOf(o, p); }

function modal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var KEYCODES = {
  ESCAPE: 27
};

var modal_Modal =
/*#__PURE__*/
function (_PureComponent) {
  modal_inherits(Modal, _PureComponent);

  function Modal(props) {
    var _this;

    modal_classCallCheck(this, Modal);

    _this = modal_possibleConstructorReturn(this, modal_getPrototypeOf(Modal).call(this, props));

    modal_defineProperty(modal_assertThisInitialized(_this), "portalElement", null);

    modal_defineProperty(modal_assertThisInitialized(_this), "getDocument", function () {
      if (_this.props.document) {
        return _this.props.document;
      }

      if (typeof document !== 'undefined') {
        return document;
      }

      return null;
    });

    modal_defineProperty(modal_assertThisInitialized(_this), "handleKeydown", function (e) {
      if (e.keyCode === KEYCODES.ESCAPE && _this.props.show) {
        _this.props.onClose();
      }
    });

    _this.state = {};
    return _this;
  }

  modal_createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var closeOnEsc = this.props.closeOnEsc;
      var doc = this.getDocument();
      this.portalElement = doc.createElement('div');
      this.portalElement.setAttribute('class', 'modal-container');
      doc.body.appendChild(this.portalElement); // eslint-disable-next-line

      if (closeOnEsc) {
        doc.addEventListener('keydown', this.handleKeydown);
      }

      this.forceUpdate();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var doc = this.getDocument();
      var closeOnEsc = this.props.closeOnEsc;

      if (closeOnEsc && doc) {
        doc.removeEventListener('keydown', this.handleKeydown);
      } // IE11 fix


      this.portalElement.parentNode.removeChild(this.portalElement);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          domRef = _this$props.domRef,
          closeOnBlur = _this$props.closeOnBlur,
          show = _this$props.show,
          className = _this$props.className;

      if (!this.getDocument() || !this.portalElement || !show) {
        return null;
      }

      var children = this.props.children;
      var isCard;

      try {
        isCard = external_react_default.a.Children.only(children).type.toString().indexOf('ModalCard') !== -1;
      } catch (e) {
        isCard = false;
      }

      var showClose = !isCard && this.props.showClose;

      if (isCard) {
        children = external_react_default.a.cloneElement(children, {
          onClose: this.props.onClose
        });
      }

      return external_react_dom_default.a.createPortal(external_react_default.a.createElement("div", {
        ref: domRef,
        className: classnames_default()('modal', className, {
          'is-active': show
        })
      }, external_react_default.a.createElement("div", {
        role: "presentation",
        className: "modal-background",
        onClick: closeOnBlur ? this.props.onClose : undefined
      }), children, showClose && external_react_default.a.createElement("button", {
        type: "button",
        onClick: this.props.onClose,
        className: "modal-close is-large",
        "aria-label": "close"
      })), this.portalElement);
    }
  }]);

  return Modal;
}(external_react_["PureComponent"]);

modal_Modal.Content = components_content;
modal_Modal.Card = components_card;
modal_Modal.propTypes = {
  show: external_prop_types_default.a.bool.isRequired,
  onClose: external_prop_types_default.a.func.isRequired,
  closeOnEsc: external_prop_types_default.a.bool,
  closeOnBlur: external_prop_types_default.a.bool,
  showClose: external_prop_types_default.a.bool,
  children: external_prop_types_default.a.node.isRequired,
  document: external_prop_types_default.a.object,
  className: external_prop_types_default.a.string,
  domRef: external_prop_types_default.a.object
};
modal_Modal.defaultProps = {
  closeOnEsc: true,
  showClose: true,
  closeOnBlur: false,
  className: undefined,
  domRef: external_react_default.a.createRef(),
  // Expose mount point for testing
  document: undefined
};
/* harmony default export */ var modal_modal = (modal_Modal);
// CONCATENATED MODULE: ./src/components/modal/index.js


// EXTERNAL MODULE: ./src/components/dropdown/dropdown.sass
var dropdown_dropdown = __webpack_require__(28);

// CONCATENATED MODULE: ./src/components/dropdown/components/item.js
function item_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function item_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { item_ownKeys(source, true).forEach(function (key) { item_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { item_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function item_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function item_extends() { item_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return item_extends.apply(this, arguments); }

function item_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = item_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function item_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var item_DropdownItem = function DropdownItem(_ref) {
  var active = _ref.active,
      children = _ref.children,
      value = _ref.value,
      props = item_objectWithoutProperties(_ref, ["active", "children", "value"]);

  return external_react_default.a.createElement(components_element, item_extends({
    title: value
  }, props, {
    role: "presentation",
    className: classnames_default()('dropdown-item', {
      'is-active': active
    })
  }), children);
};

item_DropdownItem.propTypes = item_objectSpread({}, modifiers.propTypes, {
  active: external_prop_types_default.a.bool,
  children: external_prop_types_default.a.node,
  value: external_prop_types_default.a.any.isRequired,
  onClick: external_prop_types_default.a.func
});
item_DropdownItem.defaultProps = item_objectSpread({}, modifiers.defaultProps, {
  active: false,
  onClick: undefined,
  children: null
});
/* harmony default export */ var components_item = (item_DropdownItem);
// CONCATENATED MODULE: ./src/components/dropdown/components/divider.js
function divider_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function divider_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { divider_ownKeys(source, true).forEach(function (key) { divider_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { divider_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function divider_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function divider_extends() { divider_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return divider_extends.apply(this, arguments); }

function divider_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = divider_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function divider_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var divider_DropdownDivider = function DropdownDivider(_ref) {
  var className = _ref.className,
      props = divider_objectWithoutProperties(_ref, ["className"]);

  return external_react_default.a.createElement(components_element, divider_extends({
    renderAs: "hr"
  }, props, {
    className: classnames_default()('dropdown-divider', className)
  }));
};

divider_DropdownDivider.propTypes = divider_objectSpread({}, modifiers.propTypes, {
  style: external_prop_types_default.a.shape({}),
  className: external_prop_types_default.a.string
});
divider_DropdownDivider.defaultProps = divider_objectSpread({}, modifiers.defaultProps, {
  style: undefined,
  className: undefined
});
/* harmony default export */ var divider = (divider_DropdownDivider);
// EXTERNAL MODULE: ./src/components/icon/icon.sass
var icon_icon = __webpack_require__(29);

// CONCATENATED MODULE: ./src/components/icon/icon.js
function icon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function icon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { icon_ownKeys(source, true).forEach(function (key) { icon_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { icon_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function icon_extends() { icon_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return icon_extends.apply(this, arguments); }

function icon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function icon_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = icon_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function icon_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var icon_colors = [null].concat(Object.keys(constants.COLORS).map(function (key) {
  return constants.COLORS[key];
}));

var icon_Icon = function Icon(_ref) {
  var _classnames;

  var icon = _ref.icon,
      size = _ref.size,
      color = _ref.color,
      className = _ref.className,
      align = _ref.align,
      children = _ref.children,
      props = icon_objectWithoutProperties(_ref, ["icon", "size", "color", "className", "align", "children"]);

  return external_react_default.a.createElement(components_element, icon_extends({
    renderAs: "span"
  }, props, {
    className: classnames_default()('icon', className, (_classnames = {}, icon_defineProperty(_classnames, "is-".concat(size), size), icon_defineProperty(_classnames, "is-".concat(align), align), icon_defineProperty(_classnames, "has-text-".concat(color), color), _classnames))
  }), children || external_react_default.a.createElement("i", {
    className: classnames_default()('rbc', icon_defineProperty({}, "rbc-".concat(icon), icon))
  }));
};

icon_Icon.propTypes = icon_objectSpread({}, modifiers.propTypes, {
  icon: external_prop_types_default.a.string,
  children: external_prop_types_default.a.element,
  className: external_prop_types_default.a.string,
  style: external_prop_types_default.a.shape({}),
  size: external_prop_types_default.a.oneOf(['small', 'medium', 'large', 'auto']),
  align: external_prop_types_default.a.oneOf(['left', 'right']),
  color: external_prop_types_default.a.oneOf(icon_colors)
});
icon_Icon.defaultProps = icon_objectSpread({}, modifiers.defaultProps, {
  className: undefined,
  style: undefined,
  size: undefined,
  color: undefined,
  children: null,
  align: undefined,
  icon: undefined
});
/* harmony default export */ var components_icon_icon = (icon_Icon);
// CONCATENATED MODULE: ./src/components/icon/index.js


// CONCATENATED MODULE: ./src/components/dropdown/dropdown.js
function dropdown_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function dropdown_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { dropdown_ownKeys(source, true).forEach(function (key) { dropdown_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { dropdown_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function dropdown_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { dropdown_typeof = function _typeof(obj) { return typeof obj; }; } else { dropdown_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return dropdown_typeof(obj); }

function dropdown_extends() { dropdown_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return dropdown_extends.apply(this, arguments); }

function dropdown_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = dropdown_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function dropdown_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function dropdown_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function dropdown_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function dropdown_createClass(Constructor, protoProps, staticProps) { if (protoProps) dropdown_defineProperties(Constructor.prototype, protoProps); if (staticProps) dropdown_defineProperties(Constructor, staticProps); return Constructor; }

function dropdown_possibleConstructorReturn(self, call) { if (call && (dropdown_typeof(call) === "object" || typeof call === "function")) { return call; } return dropdown_assertThisInitialized(self); }

function dropdown_getPrototypeOf(o) { dropdown_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return dropdown_getPrototypeOf(o); }

function dropdown_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function dropdown_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) dropdown_setPrototypeOf(subClass, superClass); }

function dropdown_setPrototypeOf(o, p) { dropdown_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return dropdown_setPrototypeOf(o, p); }

function dropdown_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var dropdown_colors = [null].concat(Object.values(constants.COLORS));

var dropdown_Dropdown =
/*#__PURE__*/
function (_PureComponent) {
  dropdown_inherits(Dropdown, _PureComponent);

  function Dropdown(props) {
    var _this;

    dropdown_classCallCheck(this, Dropdown);

    _this = dropdown_possibleConstructorReturn(this, dropdown_getPrototypeOf(Dropdown).call(this, props));

    dropdown_defineProperty(dropdown_assertThisInitialized(_this), "close", function (evt) {
      // IDK yet how to test using the ref in enzime
      // istanbul ignore if
      if (_this.props.hoverable || evt && _this.domRef && _this.domRef.current && _this.domRef.current.contains(evt.target)) {
        return;
      }

      if (_this.domRef.current) {
        _this.setState({
          open: false
        });
      }
    });

    dropdown_defineProperty(dropdown_assertThisInitialized(_this), "toggle", function (evt) {
      if (_this.props.hoverable) {
        return;
      }

      if (evt) {
        evt.preventDefault();
      }

      _this.setState(function (_ref) {
        var open = _ref.open;
        return {
          open: !open
        };
      });
    });

    dropdown_defineProperty(dropdown_assertThisInitialized(_this), "select", function (value) {
      return function () {
        if (_this.props.onChange) {
          _this.props.onChange(value);
        }

        if (_this.props.closeOnSelect) {
          _this.close();
        }
      };
    });

    _this.domRef = props.domRef || external_react_default.a.createRef();
    _this.state = {
      open: false
    };
    return _this;
  }

  dropdown_createClass(Dropdown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('click', this.close);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.close);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          value = _this$props.value,
          color = _this$props.color,
          align = _this$props.align,
          right = _this$props.right,
          up = _this$props.up,
          hoverable = _this$props.hoverable,
          label = _this$props.label,
          onChange = _this$props.onChange,
          closeOnSelect = _this$props.closeOnSelect,
          props = dropdown_objectWithoutProperties(_this$props, ["className", "children", "value", "color", "align", "right", "up", "hoverable", "label", "onChange", "closeOnSelect"]);

      var current = label;
      var childrenArray = external_react_default.a.Children.map(children, function (child, i) {
        if (child.type === components_item && (i === 0 && !label || child.props.value === value)) {
          current = child.props.children;
        }

        return external_react_default.a.cloneElement(child, child.type === components_item ? {
          active: child.props.value === value,
          onClick: _this2.select(child.props.value)
        } : {});
      });

      if (align === 'right') {
        // eslint-disable-next-line no-console
        console.warn('react-bulma-components: "Align" prop will be replaced by "right" prop in future releases. Please update your code to avoid breaking changes.');
      }

      return external_react_default.a.createElement(components_element, dropdown_extends({}, props, {
        domRef: this.domRef,
        className: classnames_default()('dropdown', className, {
          'is-active': this.state.open,
          'is-up': up,
          'is-right': right || align === 'right',
          'is-hoverable': hoverable
        })
      }), external_react_default.a.createElement("div", {
        className: "dropdown-trigger",
        role: "presentation",
        onClick: this.toggle
      }, external_react_default.a.createElement(components_button_button, {
        color: color
      }, external_react_default.a.createElement("span", null, current), external_react_default.a.createElement(components_icon_icon, {
        icon: "angle-down",
        size: "small"
      }))), external_react_default.a.createElement("div", {
        className: "dropdown-menu",
        id: "dropdown-menu",
        role: "menu"
      }, external_react_default.a.createElement("div", {
        className: "dropdown-content"
      }, childrenArray)));
    }
  }]);

  return Dropdown;
}(external_react_["PureComponent"]);


dropdown_Dropdown.Item = components_item;
dropdown_Dropdown.Divider = divider;
dropdown_Dropdown.propTypes = dropdown_objectSpread({}, modifiers.propTypes, {
  className: external_prop_types_default.a.string,
  style: external_prop_types_default.a.shape({}),
  children: external_prop_types_default.a.node,
  value: external_prop_types_default.a.any,
  onChange: external_prop_types_default.a.func,
  color: external_prop_types_default.a.oneOf(dropdown_colors),
  right: external_prop_types_default.a.bool,
  up: external_prop_types_default.a.bool,
  align: external_prop_types_default.a.oneOf(['right']),
  hoverable: external_prop_types_default.a.bool,
  label: external_prop_types_default.a.node,
  closeOnSelect: external_prop_types_default.a.bool
});
dropdown_Dropdown.defaultProps = dropdown_objectSpread({}, modifiers.defaultProps, {
  closeOnSelect: true,
  className: undefined,
  renderAs: 'div',
  domRef: undefined,
  style: undefined,
  value: undefined,
  children: [],
  onChange: undefined,
  color: undefined,
  align: undefined,
  hoverable: undefined,
  label: undefined
});
// CONCATENATED MODULE: ./src/components/dropdown/index.js


// EXTERNAL MODULE: ./src/components/loader/loader.sass
var loader = __webpack_require__(30);

// CONCATENATED MODULE: ./src/components/loader/loader.js
function loader_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function loader_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { loader_ownKeys(source, true).forEach(function (key) { loader_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { loader_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function loader_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function loader_extends() { loader_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return loader_extends.apply(this, arguments); }

function loader_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = loader_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function loader_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var loader_Loader = function Loader(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = loader_objectWithoutProperties(_ref, ["children", "className"]);

  return external_react_default.a.createElement(components_element, loader_extends({}, props, {
    className: classnames_default()('loader', className)
  }), children);
};

loader_Loader.propTypes = loader_objectSpread({}, modifiers.propTypes, {
  children: external_prop_types_default.a.node,
  className: external_prop_types_default.a.string,
  style: external_prop_types_default.a.shape({}),
  renderAs: render_as
});
loader_Loader.defaultProps = loader_objectSpread({}, modifiers.defaultProps, {
  children: null,
  className: undefined,
  style: undefined,
  renderAs: 'div'
});
/* harmony default export */ var loader_loader = (loader_Loader);
// CONCATENATED MODULE: ./src/components/loader/index.js


// CONCATENATED MODULE: ./src/services/can-use-dom.js
/* harmony default export */ var can_use_dom = (!!(typeof window !== 'undefined' && window.document && window.document.createElement));
// CONCATENATED MODULE: ./src/components/navbar/components/brand.js
function brand_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function brand_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { brand_ownKeys(source, true).forEach(function (key) { brand_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { brand_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function brand_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function brand_extends() { brand_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return brand_extends.apply(this, arguments); }

function brand_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = brand_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function brand_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var brand_NavbarBrand = function NavbarBrand(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = brand_objectWithoutProperties(_ref, ["className", "children"]);

  return external_react_default.a.createElement(components_element, brand_extends({}, props, {
    className: classnames_default()('navbar-brand', className)
  }), children);
};

brand_NavbarBrand.propTypes = brand_objectSpread({}, modifiers.propTypes, {
  style: external_prop_types_default.a.shape({}),
  className: external_prop_types_default.a.string,
  children: external_prop_types_default.a.node
});
brand_NavbarBrand.defaultProps = brand_objectSpread({}, modifiers.defaultProps, {
  style: undefined,
  className: undefined,
  children: null
});
/* harmony default export */ var brand = (brand_NavbarBrand);
// CONCATENATED MODULE: ./src/components/navbar/context.js

var ShowContext = external_react_default.a.createContext(false);
// CONCATENATED MODULE: ./src/components/navbar/components/burger.js
function burger_extends() { burger_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return burger_extends.apply(this, arguments); }

function burger_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function burger_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { burger_ownKeys(source, true).forEach(function (key) { burger_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { burger_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function burger_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function burger_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = burger_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function burger_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var burger_NavbarBurger = function NavbarBurger(_ref) {
  var style = _ref.style,
      className = _ref.className,
      props = burger_objectWithoutProperties(_ref, ["style", "className"]);

  return external_react_default.a.createElement(ShowContext.Consumer, null, function (active) {
    return external_react_default.a.createElement(components_element, burger_extends({
      role: "button",
      tabIndex: "0",
      style: burger_objectSpread({
        outline: 'none'
      }, style),
      className: classnames_default()('navbar-burger', className, {
        'is-active': active
      })
    }, props), external_react_default.a.createElement("span", null), external_react_default.a.createElement("span", null), external_react_default.a.createElement("span", null));
  });
};

burger_NavbarBurger.propTypes = burger_objectSpread({}, modifiers.propTypes, {
  style: external_prop_types_default.a.shape({}),
  className: external_prop_types_default.a.string,
  onClick: external_prop_types_default.a.func
});
burger_NavbarBurger.defaultProps = burger_objectSpread({}, modifiers.defaultProps, {
  style: undefined,
  className: undefined,
  onClick: function onClick() {}
});
/* harmony default export */ var burger = (burger_NavbarBurger);
// CONCATENATED MODULE: ./src/components/navbar/components/menu.js
function menu_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function menu_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { menu_ownKeys(source, true).forEach(function (key) { menu_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { menu_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function menu_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function menu_extends() { menu_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return menu_extends.apply(this, arguments); }

function menu_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = menu_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function menu_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var menu_NavbarMenu = function NavbarMenu(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = menu_objectWithoutProperties(_ref, ["className", "children"]);

  return external_react_default.a.createElement(ShowContext.Consumer, null, function (active) {
    return external_react_default.a.createElement(components_element, menu_extends({}, props, {
      className: classnames_default()('navbar-menu', className, {
        'is-active': active
      })
    }), children);
  });
};

menu_NavbarMenu.propTypes = menu_objectSpread({}, modifiers.propTypes, {
  style: external_prop_types_default.a.shape({}),
  className: external_prop_types_default.a.string,
  children: external_prop_types_default.a.node
});
menu_NavbarMenu.defaultProps = menu_objectSpread({}, modifiers.defaultProps, {
  style: undefined,
  className: undefined,
  children: null
});
/* harmony default export */ var menu = (menu_NavbarMenu);
// CONCATENATED MODULE: ./src/components/navbar/components/item.js
function components_item_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function components_item_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { components_item_ownKeys(source, true).forEach(function (key) { components_item_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { components_item_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function components_item_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function components_item_extends() { components_item_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return components_item_extends.apply(this, arguments); }

function components_item_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = components_item_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function components_item_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var item_NavbarItem = function NavbarItem(_ref) {
  var className = _ref.className,
      active = _ref.active,
      children = _ref.children,
      dropdown = _ref.dropdown,
      dropdownUp = _ref.dropdownUp,
      hoverable = _ref.hoverable,
      renderAs = _ref.renderAs,
      arrowless = _ref.arrowless,
      props = components_item_objectWithoutProperties(_ref, ["className", "active", "children", "dropdown", "dropdownUp", "hoverable", "renderAs", "arrowless"]);

  var as = renderAs;

  if (dropdown && renderAs === 'a') {
    as = 'span';
  }

  return external_react_default.a.createElement(components_element, components_item_extends({}, props, {
    renderAs: as,
    className: classnames_default()('navbar-item', className, {
      'is-active': active,
      'has-dropdown': dropdown,
      'is-hoverable': hoverable,
      'has-dropdown-up': dropdownUp,
      'is-arrowless': arrowless
    })
  }), children);
};

item_NavbarItem.propTypes = components_item_objectSpread({}, modifiers.propTypes, {
  style: external_prop_types_default.a.shape({}),
  className: external_prop_types_default.a.string,
  active: external_prop_types_default.a.bool,
  dropdown: external_prop_types_default.a.bool,
  dropdownUp: external_prop_types_default.a.bool,
  hoverable: external_prop_types_default.a.bool,
  children: external_prop_types_default.a.node,
  arrowless: external_prop_types_default.a.bool,
  renderAs: render_as
});
item_NavbarItem.defaultProps = components_item_objectSpread({}, modifiers.defaultProps, {
  style: undefined,
  className: undefined,
  active: undefined,
  children: null,
  dropdown: undefined,
  hoverable: undefined,
  dropdownUp: undefined,
  arrowless: undefined,
  renderAs: 'a'
});
/* harmony default export */ var navbar_components_item = (item_NavbarItem);
// CONCATENATED MODULE: ./src/components/navbar/components/dropdown.js
function components_dropdown_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function components_dropdown_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { components_dropdown_ownKeys(source, true).forEach(function (key) { components_dropdown_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { components_dropdown_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function components_dropdown_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function components_dropdown_extends() { components_dropdown_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return components_dropdown_extends.apply(this, arguments); }

function components_dropdown_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = components_dropdown_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function components_dropdown_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var dropdown_NavbarDropdown = function NavbarDropdown(_ref) {
  var className = _ref.className,
      boxed = _ref.boxed,
      right = _ref.right,
      children = _ref.children,
      props = components_dropdown_objectWithoutProperties(_ref, ["className", "boxed", "right", "children"]);

  return external_react_default.a.createElement(components_element, components_dropdown_extends({}, props, {
    className: classnames_default()('navbar-dropdown', className, {
      'is-boxed': boxed,
      'is-right': right
    })
  }), children);
};

dropdown_NavbarDropdown.propTypes = components_dropdown_objectSpread({}, modifiers.propTypes, {
  style: external_prop_types_default.a.shape({}),
  className: external_prop_types_default.a.string,
  children: external_prop_types_default.a.node,
  renderAs: render_as,
  boxed: external_prop_types_default.a.bool,
  right: external_prop_types_default.a.bool
});
dropdown_NavbarDropdown.defaultProps = components_dropdown_objectSpread({}, modifiers.defaultProps, {
  className: undefined,
  children: null,
  renderAs: 'span',
  boxed: false,
  right: false
});
/* harmony default export */ var components_dropdown = (dropdown_NavbarDropdown);
// CONCATENATED MODULE: ./src/components/navbar/components/divider.js
function components_divider_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function components_divider_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { components_divider_ownKeys(source, true).forEach(function (key) { components_divider_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { components_divider_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function components_divider_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function components_divider_extends() { components_divider_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return components_divider_extends.apply(this, arguments); }

function components_divider_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = components_divider_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function components_divider_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var divider_NavbarDivider = function NavbarDivider(_ref) {
  var className = _ref.className,
      props = components_divider_objectWithoutProperties(_ref, ["className"]);

  return external_react_default.a.createElement(components_element, components_divider_extends({}, props, {
    className: classnames_default()('navbar-divider', className)
  }));
};

divider_NavbarDivider.propTypes = components_divider_objectSpread({}, modifiers.propTypes, {
  style: external_prop_types_default.a.shape({}),
  className: external_prop_types_default.a.string
});
divider_NavbarDivider.defaultProps = components_divider_objectSpread({}, modifiers.defaultProps, {
  style: undefined,
  className: undefined
});
/* harmony default export */ var components_divider = (divider_NavbarDivider);
// CONCATENATED MODULE: ./src/components/navbar/components/link.js
function link_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function link_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { link_ownKeys(source, true).forEach(function (key) { link_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { link_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function link_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function link_extends() { link_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return link_extends.apply(this, arguments); }

function link_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = link_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function link_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var link_NavbarLink = function NavbarLink(_ref) {
  var className = _ref.className,
      children = _ref.children,
      arrowless = _ref.arrowless,
      props = link_objectWithoutProperties(_ref, ["className", "children", "arrowless"]);

  return external_react_default.a.createElement(components_element, link_extends({}, props, {
    className: classnames_default()('navbar-link', className, {
      'is-arrowless': arrowless
    })
  }), children);
};

link_NavbarLink.propTypes = link_objectSpread({}, modifiers.propTypes, {
  style: external_prop_types_default.a.shape({}),
  className: external_prop_types_default.a.string,
  children: external_prop_types_default.a.node,
  renderAs: render_as,
  arrowless: external_prop_types_default.a.bool
});
link_NavbarLink.defaultProps = link_objectSpread({}, modifiers.defaultProps, {
  style: undefined,
  className: undefined,
  children: null,
  arrowless: undefined,
  renderAs: 'span'
});
/* harmony default export */ var components_link = (link_NavbarLink);
// CONCATENATED MODULE: ./src/components/navbar/components/container.js
function components_container_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function components_container_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { components_container_ownKeys(source, true).forEach(function (key) { components_container_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { components_container_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function components_container_extends() { components_container_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return components_container_extends.apply(this, arguments); }

function components_container_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function components_container_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = components_container_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function components_container_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var container_NavbarContainer = function NavbarContainer(_ref) {
  var className = _ref.className,
      children = _ref.children,
      position = _ref.position,
      props = components_container_objectWithoutProperties(_ref, ["className", "children", "position"]);

  return external_react_default.a.createElement(components_element, components_container_extends({}, props, {
    className: classnames_default()(components_container_defineProperty({}, "navbar-".concat(position), position), className)
  }), children);
};

container_NavbarContainer.propTypes = components_container_objectSpread({}, modifiers.propTypes, {
  style: external_prop_types_default.a.shape({}),
  className: external_prop_types_default.a.string,
  children: external_prop_types_default.a.node,
  renderAs: render_as,
  position: external_prop_types_default.a.oneOf(['start', 'end'])
});
container_NavbarContainer.defaultProps = components_container_objectSpread({}, modifiers.defaultProps, {
  style: undefined,
  className: undefined,
  children: null,
  renderAs: 'div',
  position: 'start'
});
/* harmony default export */ var components_container = (container_NavbarContainer);
// CONCATENATED MODULE: ./src/components/navbar/navbar.js
function navbar_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function navbar_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { navbar_ownKeys(source, true).forEach(function (key) { navbar_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { navbar_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function navbar_extends() { navbar_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return navbar_extends.apply(this, arguments); }

function navbar_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function navbar_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = navbar_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function navbar_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


















var navbar_colors = [null].concat(Object.keys(constants.COLORS).map(function (key) {
  return constants.COLORS[key];
}));
var htmlClass = '';
var getHtmlClasses = function getHtmlClasses() {
  return htmlClass;
};

var navbar_Navbar = function Navbar(_ref) {
  var _classnames;

  var children = _ref.children,
      className = _ref.className,
      fixed = _ref.fixed,
      transparent = _ref.transparent,
      color = _ref.color,
      active = _ref.active,
      props = navbar_objectWithoutProperties(_ref, ["children", "className", "fixed", "transparent", "color", "active"]);

  htmlClass = fixed ? "has-navbar-fixed-".concat(fixed) : '';
  Object(external_react_["useEffect"])(function () {
    if (!can_use_dom) {
      return function () {};
    }

    var html = window.document.querySelector('html');

    if (!html.classList.contains("has-navbar-fixed-".concat(fixed))) {
      html.classList.remove('has-navbar-fixed-top');
      html.classList.remove('has-navbar-fixed-bottom');
    }

    if (fixed) {
      html.classList.add("has-navbar-fixed-".concat(fixed));
    }

    return function () {
      return window.document.querySelector('html').classList.remove("has-navbar-fixed-".concat(fixed));
    };
  }, [fixed]);
  return external_react_default.a.createElement(ShowContext.Provider, {
    value: active
  }, external_react_default.a.createElement(components_element, navbar_extends({}, props, {
    role: "navigation",
    className: classnames_default()('navbar', modifiers.classnames(props), className, (_classnames = {
      'is-transparent': transparent
    }, navbar_defineProperty(_classnames, "is-fixed-".concat(fixed), fixed), navbar_defineProperty(_classnames, "is-".concat(color), color), _classnames))
  }), children));
};

navbar_Navbar.propTypes = navbar_objectSpread({}, modifiers.propTypes, {
  children: external_prop_types_default.a.node,
  className: external_prop_types_default.a.string,
  style: external_prop_types_default.a.shape({}),
  transparent: external_prop_types_default.a.bool,
  renderAs: render_as,
  fixed: external_prop_types_default.a.oneOf(['top', 'bottom']),
  color: external_prop_types_default.a.oneOf(navbar_colors),
  active: external_prop_types_default.a.bool
});
navbar_Navbar.defaultProps = navbar_objectSpread({}, modifiers.defaultProps, {
  children: null,
  className: undefined,
  style: undefined,
  renderAs: 'nav',
  transparent: false,
  active: false,
  fixed: undefined,
  color: undefined
});
navbar_Navbar.Brand = brand;
navbar_Navbar.Burger = burger;
navbar_Navbar.Menu = menu;
navbar_Navbar.Item = navbar_components_item;
navbar_Navbar.Dropdown = components_dropdown;
navbar_Navbar.Link = components_link;
navbar_Navbar.Divider = components_divider;
navbar_Navbar.Container = components_container;
/* harmony default export */ var navbar = (navbar_Navbar);
// EXTERNAL MODULE: ./src/components/navbar/navbar.sass
var navbar_navbar = __webpack_require__(31);

// CONCATENATED MODULE: ./src/components/navbar/index.js


/* harmony default export */ var components_navbar = (navbar);

// EXTERNAL MODULE: ./src/components/tabs/tabs.sass
var tabs = __webpack_require__(32);

// CONCATENATED MODULE: ./src/components/tabs/components/tab.js
function tab_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function tab_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { tab_ownKeys(source, true).forEach(function (key) { tab_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { tab_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function tab_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function tab_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = tab_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function tab_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var tab_Tab = function Tab(_ref) {
  var children = _ref.children,
      className = _ref.className,
      style = _ref.style,
      active = _ref.active,
      domRef = _ref.domRef,
      props = tab_objectWithoutProperties(_ref, ["children", "className", "style", "active", "domRef"]);

  return external_react_default.a.createElement("li", {
    ref: domRef,
    style: style,
    className: classnames_default()(className, {
      'is-active': active
    })
  }, external_react_default.a.createElement(components_element, props, children));
};

tab_Tab.propTypes = tab_objectSpread({}, modifiers.propTypes, {
  children: external_prop_types_default.a.node,
  className: external_prop_types_default.a.string,
  style: external_prop_types_default.a.shape({}),
  renderAs: render_as,
  active: external_prop_types_default.a.bool
});
tab_Tab.defaultProps = tab_objectSpread({}, modifiers.defaultProps, {
  children: null,
  className: undefined,
  style: undefined,
  renderAs: 'a',
  active: false
});
/* harmony default export */ var tab = (tab_Tab);
// CONCATENATED MODULE: ./src/components/tabs/tabs.js
function tabs_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function tabs_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { tabs_ownKeys(source, true).forEach(function (key) { tabs_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { tabs_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function tabs_extends() { tabs_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return tabs_extends.apply(this, arguments); }

function tabs_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function tabs_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = tabs_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function tabs_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









var tabs_Tabs = function Tabs(_ref) {
  var _classnames;

  var children = _ref.children,
      className = _ref.className,
      align = _ref.align,
      size = _ref.size,
      type = _ref.type,
      fullwidth = _ref.fullwidth,
      props = tabs_objectWithoutProperties(_ref, ["children", "className", "align", "size", "type", "fullwidth"]);

  return external_react_default.a.createElement(components_element, tabs_extends({}, props, {
    className: classnames_default()('tabs', className, (_classnames = {}, tabs_defineProperty(_classnames, "is-".concat(align), align), tabs_defineProperty(_classnames, "is-".concat(size), size), tabs_defineProperty(_classnames, 'is-toggle', type === 'toggle-rounded'), tabs_defineProperty(_classnames, "is-".concat(type), type), tabs_defineProperty(_classnames, 'is-fullwidth', fullwidth), _classnames))
  }), external_react_default.a.createElement("ul", null, children));
};

tabs_Tabs.Tab = tab;
tabs_Tabs.propTypes = tabs_objectSpread({}, modifiers.propTypes, {
  children: external_prop_types_default.a.node,
  className: external_prop_types_default.a.string,
  style: external_prop_types_default.a.shape({}),
  renderAs: render_as,
  align: external_prop_types_default.a.oneOf(['centered', 'right']),
  size: external_prop_types_default.a.oneOf(['small', 'medium', 'large']),

  /** This is called style on Bulma documentation */
  type: external_prop_types_default.a.oneOf(['toggle', 'boxed', 'toggle-rounded']),
  fullwidth: external_prop_types_default.a.bool
});
tabs_Tabs.defaultProps = tabs_objectSpread({}, modifiers.defaultProps, {
  children: null,
  className: undefined,
  style: undefined,
  renderAs: 'div',
  align: undefined,
  size: undefined,
  type: undefined,
  fullwidth: false
});
/* harmony default export */ var tabs_tabs = (tabs_Tabs);
// CONCATENATED MODULE: ./src/components/tabs/index.js


// EXTERNAL MODULE: ./src/components/pagination/pagination.sass
var pagination = __webpack_require__(33);

// CONCATENATED MODULE: ./src/components/pagination/pagination.js
function pagination_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function pagination_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { pagination_ownKeys(source, true).forEach(function (key) { pagination_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { pagination_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function pagination_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { pagination_typeof = function _typeof(obj) { return typeof obj; }; } else { pagination_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return pagination_typeof(obj); }

function pagination_extends() { pagination_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return pagination_extends.apply(this, arguments); }

function pagination_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = pagination_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function pagination_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function pagination_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pagination_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function pagination_createClass(Constructor, protoProps, staticProps) { if (protoProps) pagination_defineProperties(Constructor.prototype, protoProps); if (staticProps) pagination_defineProperties(Constructor, staticProps); return Constructor; }

function pagination_possibleConstructorReturn(self, call) { if (call && (pagination_typeof(call) === "object" || typeof call === "function")) { return call; } return pagination_assertThisInitialized(self); }

function pagination_getPrototypeOf(o) { pagination_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return pagination_getPrototypeOf(o); }

function pagination_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function pagination_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) pagination_setPrototypeOf(subClass, superClass); }

function pagination_setPrototypeOf(o, p) { pagination_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return pagination_setPrototypeOf(o, p); }

function pagination_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var pagination_Pagination =
/*#__PURE__*/
function (_React$PureComponent) {
  pagination_inherits(Pagination, _React$PureComponent);

  function Pagination() {
    var _getPrototypeOf2;

    var _this;

    pagination_classCallCheck(this, Pagination);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = pagination_possibleConstructorReturn(this, (_getPrototypeOf2 = pagination_getPrototypeOf(Pagination)).call.apply(_getPrototypeOf2, [this].concat(args)));

    pagination_defineProperty(pagination_assertThisInitialized(_this), "goToPage", function (page) {
      return function (evt) {
        evt.preventDefault();
        var onChange = _this.props.onChange;
        onChange(page);
      };
    });

    pagination_defineProperty(pagination_assertThisInitialized(_this), "firstPage", function (current, last) {
      var delta = _this.props.delta;

      if (current === 1) {
        return 1;
      }

      var minPage = last - delta * 2;
      var page = Math.min(current - delta, minPage);
      return page <= 0 ? 1 : page;
    });

    pagination_defineProperty(pagination_assertThisInitialized(_this), "lastPage", function (current, total) {
      var delta = _this.props.delta;

      if (current === total) {
        return total;
      }

      var maxPage = delta * 2 + 1;
      var page = Math.max(current + delta, maxPage);
      return page > total ? total : page;
    });

    return _this;
  }

  pagination_createClass(Pagination, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          current = _this$props.current,
          disabled = _this$props.disabled,
          total = _this$props.total,
          next = _this$props.next,
          previous = _this$props.previous,
          showPrevNext = _this$props.showPrevNext,
          delta = _this$props.delta,
          autoHide = _this$props.autoHide,
          className = _this$props.className,
          onChange = _this$props.onChange,
          props = pagination_objectWithoutProperties(_this$props, ["current", "disabled", "total", "next", "previous", "showPrevNext", "delta", "autoHide", "className", "onChange"]);

      if (total <= 1 && autoHide) {
        return null;
      }

      if (current > total) {
        return null;
      }

      var lastPage = this.lastPage(current, total);
      var firstPage = this.firstPage(current, lastPage);
      var prevDisabled = current === 1 || disabled;
      var nextDisabled = current === total || disabled;
      return external_react_default.a.createElement(components_element, pagination_extends({}, props, {
        className: classnames_default()('pagination', className),
        "aria-label": "pagination"
      }), showPrevNext && external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("a", {
        role: "button",
        tabIndex: 0,
        onClick: prevDisabled ? undefined : this.goToPage(current - 1),
        className: "pagination-previous",
        title: "This is the first page",
        disabled: prevDisabled
      }, previous), external_react_default.a.createElement("a", {
        role: "button",
        tabIndex: 0,
        onClick: nextDisabled ? undefined : this.goToPage(current + 1),
        className: "pagination-next",
        disabled: nextDisabled
      }, next)), delta > 0 && external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("ul", {
        className: "pagination-list"
      }, Array(lastPage - firstPage + 1).fill(0).map(function (_, i) {
        return (// eslint-disable-next-line react/no-array-index-key
          external_react_default.a.createElement("li", {
            key: i + firstPage
          }, external_react_default.a.createElement("a", {
            role: "button",
            tabIndex: 0,
            className: classnames_default()('pagination-link', {
              'is-current': current === i + firstPage
            }),
            onClick: current === firstPage + i ? undefined : _this2.goToPage(firstPage + i),
            "aria-label": "Page ".concat(i + firstPage),
            "aria-current": "page",
            disabled: disabled
          }, i + firstPage))
        );
      }))));
    }
  }]);

  return Pagination;
}(external_react_default.a.PureComponent);


pagination_Pagination.propTypes = pagination_objectSpread({}, modifiers.propTypes, {
  /** Current page */
  current: external_prop_types_default.a.number,

  /** whether to disable the buttons */
  disabled: external_prop_types_default.a.bool,

  /** Total pages in total */
  total: external_prop_types_default.a.number,

  /** Amount og pages to display at the left and right of the current (if delta 2 and current page is 3, the paginator will display pages from 1 to 5) */
  delta: external_prop_types_default.a.number,
  onChange: external_prop_types_default.a.func,

  /** Text of the Next button */
  next: external_prop_types_default.a.node,

  /** Text of the Previous button */
  previous: external_prop_types_default.a.node,
  showPrevNext: external_prop_types_default.a.bool,
  autoHide: external_prop_types_default.a.bool,

  /**
   * Classname of the container of the pagination, this could be used to customize the inner views
   */
  className: external_prop_types_default.a.string
});
pagination_Pagination.defaultProps = pagination_objectSpread({}, modifiers.defaultProps, {
  total: 1,
  current: 1,
  delta: 1,
  onChange: function onChange() {},
  next: 'Next',
  previous: 'Previous',
  showPrevNext: true,
  disabled: undefined,
  autoHide: true,
  className: undefined,
  renderAs: 'nav'
});
// CONCATENATED MODULE: ./src/components/pagination/index.js


// EXTERNAL MODULE: ./src/components/menu/menu.sass
var menu_menu = __webpack_require__(34);

// CONCATENATED MODULE: ./src/components/menu/components/list/components/item.js
function list_components_item_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function list_components_item_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { list_components_item_ownKeys(source, true).forEach(function (key) { list_components_item_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { list_components_item_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function list_components_item_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function list_components_item_extends() { list_components_item_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return list_components_item_extends.apply(this, arguments); }

function list_components_item_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = list_components_item_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function list_components_item_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




/* eslint-disable-next-line import/no-cycle */






var item_MenuListItem = function MenuListItem(_ref) {
  var children = _ref.children,
      active = _ref.active,
      className = _ref.className,
      ref = _ref.domRef,
      props = list_components_item_objectWithoutProperties(_ref, ["children", "active", "className", "domRef"]);

  if (typeof children !== 'string' && external_react_default.a.Children.toArray(children).length === 1 && external_react_default.a.Children.only(children).type === components_list_list) {
    var child = external_react_default.a.Children.only(children);
    return external_react_default.a.createElement("li", {
      ref: ref
    }, external_react_default.a.createElement(components_element, list_components_item_extends({
      className: classnames_default()(className, {
        'is-active': active
      })
    }, props), child.props.title), external_react_default.a.cloneElement(child, {
      title: undefined
    }));
  }

  return external_react_default.a.createElement("li", {
    ref: ref
  }, external_react_default.a.createElement(components_element, list_components_item_extends({
    className: classnames_default()(className, {
      'is-active': active
    })
  }, props), children));
};

item_MenuListItem.propTypes = list_components_item_objectSpread({}, modifiers.propTypes, {
  className: external_prop_types_default.a.string,
  children: external_prop_types_default.a.oneOfType([external_prop_types_default.a.string, external_prop_types_default.a.element]),
  active: external_prop_types_default.a.bool,
  renderAs: render_as
});
item_MenuListItem.defaultProps = list_components_item_objectSpread({}, modifiers.defaultProps, {
  className: undefined,
  children: null,
  active: false,
  renderAs: 'a'
});
/* harmony default export */ var list_components_item = (item_MenuListItem);
// CONCATENATED MODULE: ./src/components/menu/components/list/list.js
function list_list_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function list_list_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { list_list_ownKeys(source, true).forEach(function (key) { list_list_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { list_list_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function list_list_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function list_list_extends() { list_list_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return list_list_extends.apply(this, arguments); }

function list_list_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = list_list_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function list_list_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




/* eslint-disable-next-line import/no-cycle */





var list_MenuList = function MenuList(_ref) {
  var className = _ref.className,
      title = _ref.title,
      props = list_list_objectWithoutProperties(_ref, ["className", "title"]);

  return external_react_default.a.createElement(external_react_default.a.Fragment, null, title && external_react_default.a.createElement("p", {
    className: "menu-label"
  }, title), external_react_default.a.createElement(components_element, list_list_extends({
    renderAs: "ul",
    className: classnames_default()('menu-list', className)
  }, props)));
};

list_MenuList.Item = list_components_item;
list_MenuList.propTypes = list_list_objectSpread({}, modifiers.propTypes, {
  className: external_prop_types_default.a.string,
  title: external_prop_types_default.a.node
});
list_MenuList.defaultProps = list_list_objectSpread({}, modifiers.defaultProps, {
  className: undefined,
  title: undefined
});
/* harmony default export */ var components_list_list = (list_MenuList);
// CONCATENATED MODULE: ./src/components/menu/components/list/index.js

// CONCATENATED MODULE: ./src/components/menu/menu.js
function menu_menu_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function menu_menu_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { menu_menu_ownKeys(source, true).forEach(function (key) { menu_menu_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { menu_menu_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function menu_menu_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function menu_menu_extends() { menu_menu_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return menu_menu_extends.apply(this, arguments); }

function menu_menu_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = menu_menu_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function menu_menu_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









var menu_Menu = function Menu(_ref) {
  var className = _ref.className,
      props = menu_menu_objectWithoutProperties(_ref, ["className"]);

  return external_react_default.a.createElement(components_element, menu_menu_extends({}, props, {
    className: classnames_default()('menu', className)
  }));
};

menu_Menu.List = components_list_list;
menu_Menu.propTypes = menu_menu_objectSpread({}, modifiers.propTypes, {
  className: external_prop_types_default.a.string,
  renderAs: render_as
});
menu_Menu.defaultProps = menu_menu_objectSpread({}, modifiers.defaultProps, {
  className: undefined,
  renderAs: 'aside'
});
/* harmony default export */ var components_menu_menu = (menu_Menu);
// CONCATENATED MODULE: ./src/components/menu/index.js


// EXTERNAL MODULE: ./src/components/message/message.sass
var message = __webpack_require__(35);

// CONCATENATED MODULE: ./src/components/message/components/body.js
function components_body_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function components_body_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { components_body_ownKeys(source, true).forEach(function (key) { components_body_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { components_body_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function components_body_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function components_body_extends() { components_body_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return components_body_extends.apply(this, arguments); }

function components_body_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = components_body_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function components_body_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var body_MessageBody = function MessageBody(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = components_body_objectWithoutProperties(_ref, ["children", "className"]);

  return external_react_default.a.createElement(components_element, components_body_extends({}, props, {
    className: classnames_default()('message-body', className)
  }), children);
};

body_MessageBody.propTypes = components_body_objectSpread({}, modifiers.propTypes, {
  children: external_prop_types_default.a.node,
  className: external_prop_types_default.a.string,
  renderAs: render_as
});
body_MessageBody.defaultProps = components_body_objectSpread({}, modifiers.defaultProps, {
  children: null,
  className: undefined,
  renderAs: 'div'
});
/* harmony default export */ var components_body = (body_MessageBody);
// CONCATENATED MODULE: ./src/components/message/components/header.js
function components_header_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function components_header_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { components_header_ownKeys(source, true).forEach(function (key) { components_header_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { components_header_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function components_header_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function components_header_extends() { components_header_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return components_header_extends.apply(this, arguments); }

function components_header_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = components_header_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function components_header_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var header_MessageHeader = function MessageHeader(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = components_header_objectWithoutProperties(_ref, ["children", "className"]);

  return external_react_default.a.createElement(components_element, components_header_extends({}, props, {
    className: classnames_default()('message-header', className)
  }), children);
};

header_MessageHeader.propTypes = components_header_objectSpread({}, modifiers.propTypes, {
  children: external_prop_types_default.a.node,
  className: external_prop_types_default.a.string,
  renderAs: render_as
});
header_MessageHeader.defaultProps = components_header_objectSpread({}, modifiers.defaultProps, {
  children: null,
  className: undefined,
  renderAs: 'div'
});
/* harmony default export */ var components_header = (header_MessageHeader);
// CONCATENATED MODULE: ./src/components/message/message.js
function message_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function message_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { message_ownKeys(source, true).forEach(function (key) { message_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { message_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function message_extends() { message_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return message_extends.apply(this, arguments); }

function message_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function message_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = message_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function message_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










var message_colors = [null].concat(Object.keys(constants.COLORS).map(function (key) {
  return constants.COLORS[key];
}));

var message_Message = function Message(_ref) {
  var _classnames;

  var children = _ref.children,
      className = _ref.className,
      color = _ref.color,
      size = _ref.size,
      props = message_objectWithoutProperties(_ref, ["children", "className", "color", "size"]);

  return external_react_default.a.createElement(components_element, message_extends({}, props, {
    className: classnames_default()('message', className, (_classnames = {}, message_defineProperty(_classnames, "is-".concat(color), color), message_defineProperty(_classnames, "is-".concat(size), size), _classnames))
  }), children);
};

message_Message.Body = components_body;
message_Message.Header = components_header;
message_Message.propTypes = message_objectSpread({}, modifiers.propTypes, {
  children: external_prop_types_default.a.node,
  className: external_prop_types_default.a.string,
  style: external_prop_types_default.a.shape({}),
  renderAs: render_as,
  size: external_prop_types_default.a.oneOf(['small', 'medium', 'large']),
  color: external_prop_types_default.a.oneOf(message_colors)
});
message_Message.defaultProps = message_objectSpread({}, modifiers.defaultProps, {
  children: null,
  className: undefined,
  style: undefined,
  renderAs: 'article',
  color: undefined,
  size: undefined
});
/* harmony default export */ var message_message = (message_Message);
// CONCATENATED MODULE: ./src/components/message/index.js


// EXTERNAL MODULE: ./src/components/panel/panel.sass
var panel = __webpack_require__(36);

// CONCATENATED MODULE: ./src/components/panel/components/block.js
function block_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function block_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { block_ownKeys(source, true).forEach(function (key) { block_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { block_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function block_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function block_extends() { block_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return block_extends.apply(this, arguments); }

function block_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = block_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function block_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var block_PanelBlock = function PanelBlock(_ref) {
  var className = _ref.className,
      active = _ref.active,
      props = block_objectWithoutProperties(_ref, ["className", "active"]);

  return external_react_default.a.createElement(components_element, block_extends({}, props, {
    className: classnames_default()('panel-block', className, {
      'is-active': active
    })
  }));
};

block_PanelBlock.propTypes = block_objectSpread({}, modifiers.propTypes, {
  className: external_prop_types_default.a.string,
  renderAs: render_as,
  active: external_prop_types_default.a.bool
});
block_PanelBlock.defaultProps = block_objectSpread({}, modifiers.defaultProps, {
  className: undefined,
  renderAs: 'div',
  active: false
});
/* harmony default export */ var block = (block_PanelBlock);
// CONCATENATED MODULE: ./src/components/panel/components/header.js
function panel_components_header_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function panel_components_header_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { panel_components_header_ownKeys(source, true).forEach(function (key) { panel_components_header_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { panel_components_header_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function panel_components_header_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function panel_components_header_extends() { panel_components_header_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return panel_components_header_extends.apply(this, arguments); }

function panel_components_header_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = panel_components_header_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function panel_components_header_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var header_PanelHeader = function PanelHeader(_ref) {
  var className = _ref.className,
      props = panel_components_header_objectWithoutProperties(_ref, ["className"]);

  return external_react_default.a.createElement(components_element, panel_components_header_extends({}, props, {
    className: classnames_default()('panel-heading', className)
  }));
};

header_PanelHeader.propTypes = panel_components_header_objectSpread({}, modifiers.propTypes, {
  className: external_prop_types_default.a.string,
  renderAs: render_as
});
header_PanelHeader.defaultProps = panel_components_header_objectSpread({}, modifiers.defaultProps, {
  className: undefined,
  renderAs: 'div'
});
/* harmony default export */ var panel_components_header = (header_PanelHeader);
// CONCATENATED MODULE: ./src/components/panel/components/icon.js
function components_icon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function components_icon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { components_icon_ownKeys(source, true).forEach(function (key) { components_icon_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { components_icon_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function components_icon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function components_icon_extends() { components_icon_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return components_icon_extends.apply(this, arguments); }

function components_icon_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = components_icon_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function components_icon_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var icon_PanelIcon = function PanelIcon(_ref) {
  var className = _ref.className,
      props = components_icon_objectWithoutProperties(_ref, ["className"]);

  return external_react_default.a.createElement(components_element, components_icon_extends({}, props, {
    className: classnames_default()('panel-icon', className)
  }));
};

icon_PanelIcon.propTypes = components_icon_objectSpread({}, modifiers.propTypes, {
  className: external_prop_types_default.a.string,
  renderAs: render_as
});
icon_PanelIcon.defaultProps = components_icon_objectSpread({}, modifiers.defaultProps, {
  className: undefined,
  renderAs: 'span'
});
/* harmony default export */ var components_icon = (icon_PanelIcon);
// CONCATENATED MODULE: ./src/components/panel/components/tabs/components/tab.js
function components_tab_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function components_tab_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { components_tab_ownKeys(source, true).forEach(function (key) { components_tab_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { components_tab_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function components_tab_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function tab_extends() { tab_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return tab_extends.apply(this, arguments); }

function components_tab_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = components_tab_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function components_tab_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var tab_PanelTabsTab = function PanelTabsTab(_ref) {
  var className = _ref.className,
      active = _ref.active,
      props = components_tab_objectWithoutProperties(_ref, ["className", "active"]);

  return external_react_default.a.createElement(components_element, tab_extends({}, props, {
    className: classnames_default()(className, {
      'is-active': active
    })
  }));
};

tab_PanelTabsTab.propTypes = components_tab_objectSpread({}, modifiers.propTypes, {
  className: external_prop_types_default.a.string,
  renderAs: render_as,
  active: external_prop_types_default.a.bool
});
tab_PanelTabsTab.defaultProps = components_tab_objectSpread({}, modifiers.defaultProps, {
  className: undefined,
  renderAs: 'a',
  active: false
});
/* harmony default export */ var components_tab = (tab_PanelTabsTab);
// CONCATENATED MODULE: ./src/components/panel/components/tabs/tabs.js
function tabs_tabs_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function tabs_tabs_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { tabs_tabs_ownKeys(source, true).forEach(function (key) { tabs_tabs_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { tabs_tabs_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function tabs_tabs_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function tabs_tabs_extends() { tabs_tabs_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return tabs_tabs_extends.apply(this, arguments); }

function tabs_tabs_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = tabs_tabs_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function tabs_tabs_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









var tabs_PanelTabs = function PanelTabs(_ref) {
  var className = _ref.className,
      props = tabs_tabs_objectWithoutProperties(_ref, ["className"]);

  return external_react_default.a.createElement(components_element, tabs_tabs_extends({}, props, {
    className: classnames_default()('panel-tabs', className)
  }));
};

tabs_PanelTabs.Tab = components_tab;
tabs_PanelTabs.propTypes = tabs_tabs_objectSpread({}, modifiers.propTypes, {
  className: external_prop_types_default.a.string,
  renderAs: render_as
});
tabs_PanelTabs.defaultProps = tabs_tabs_objectSpread({}, modifiers.defaultProps, {
  className: undefined,
  renderAs: 'div'
});
/* harmony default export */ var components_tabs_tabs = (tabs_PanelTabs);
// CONCATENATED MODULE: ./src/components/panel/components/tabs/index.js

// CONCATENATED MODULE: ./src/components/panel/panel.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function panel_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function panel_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { panel_ownKeys(source, true).forEach(function (key) { panel_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { panel_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function panel_extends() { panel_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return panel_extends.apply(this, arguments); }

function panel_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function panel_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = panel_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function panel_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }













var panel_Panel = function Panel(_ref) {
  var color = _ref.color,
      className = _ref.className,
      props = panel_objectWithoutProperties(_ref, ["color", "className"]);

  return external_react_default.a.createElement(components_element, panel_extends({}, props, {
    className: classnames_default()('panel', className, panel_defineProperty({}, "is-".concat(color), color))
  }));
};

panel_Panel.Header = panel_components_header;
panel_Panel.Tabs = components_tabs_tabs;
panel_Panel.Block = block;
panel_Panel.Icon = components_icon;
panel_Panel.propTypes = panel_objectSpread({}, modifiers.propTypes, {
  className: external_prop_types_default.a.string,
  renderAs: render_as,
  colors: [null, ''].concat(_toConsumableArray(Object.values(constants.COLORS)))
});
panel_Panel.defaultProps = panel_objectSpread({}, modifiers.defaultProps, {
  className: undefined,
  renderAs: 'nav',
  color: undefined
});
/* harmony default export */ var panel_panel = (panel_Panel);
// CONCATENATED MODULE: ./src/components/panel/index.js


// CONCATENATED MODULE: ./src/index.js
/* concated harmony reexport Box */__webpack_require__.d(__webpack_exports__, "Box", function() { return components_box; });
/* concated harmony reexport Button */__webpack_require__.d(__webpack_exports__, "Button", function() { return components_button_button; });
/* concated harmony reexport Breadcrumb */__webpack_require__.d(__webpack_exports__, "Breadcrumb", function() { return components_breadcrumb; });
/* concated harmony reexport Card */__webpack_require__.d(__webpack_exports__, "Card", function() { return card_card; });
/* concated harmony reexport Columns */__webpack_require__.d(__webpack_exports__, "Columns", function() { return components_columns; });
/* concated harmony reexport Container */__webpack_require__.d(__webpack_exports__, "Container", function() { return container_container; });
/* concated harmony reexport Content */__webpack_require__.d(__webpack_exports__, "Content", function() { return components_content_content; });
/* concated harmony reexport Footer */__webpack_require__.d(__webpack_exports__, "Footer", function() { return components_footer_footer; });
/* concated harmony reexport Form */__webpack_require__.d(__webpack_exports__, "Form", function() { return components_form_namespaceObject; });
/* concated harmony reexport Heading */__webpack_require__.d(__webpack_exports__, "Heading", function() { return components_heading_heading; });
/* concated harmony reexport Hero */__webpack_require__.d(__webpack_exports__, "Hero", function() { return hero_hero; });
/* concated harmony reexport Image */__webpack_require__.d(__webpack_exports__, "Image", function() { return image_Image; });
/* concated harmony reexport Level */__webpack_require__.d(__webpack_exports__, "Level", function() { return level_level; });
/* concated harmony reexport List */__webpack_require__.d(__webpack_exports__, "List", function() { return components_list; });
/* concated harmony reexport Media */__webpack_require__.d(__webpack_exports__, "Media", function() { return media_media; });
/* concated harmony reexport Notification */__webpack_require__.d(__webpack_exports__, "Notification", function() { return components_notification_notification; });
/* concated harmony reexport Progress */__webpack_require__.d(__webpack_exports__, "Progress", function() { return progress_progress; });
/* concated harmony reexport Section */__webpack_require__.d(__webpack_exports__, "Section", function() { return section_section; });
/* concated harmony reexport Table */__webpack_require__.d(__webpack_exports__, "Table", function() { return table_table; });
/* concated harmony reexport Tag */__webpack_require__.d(__webpack_exports__, "Tag", function() { return tag_tag; });
/* concated harmony reexport Tile */__webpack_require__.d(__webpack_exports__, "Tile", function() { return tile_tile; });
/* concated harmony reexport Modal */__webpack_require__.d(__webpack_exports__, "Modal", function() { return modal_modal; });
/* concated harmony reexport Dropdown */__webpack_require__.d(__webpack_exports__, "Dropdown", function() { return dropdown_Dropdown; });
/* concated harmony reexport Icon */__webpack_require__.d(__webpack_exports__, "Icon", function() { return components_icon_icon; });
/* concated harmony reexport Loader */__webpack_require__.d(__webpack_exports__, "Loader", function() { return loader_loader; });
/* concated harmony reexport Navbar */__webpack_require__.d(__webpack_exports__, "Navbar", function() { return components_navbar; });
/* concated harmony reexport Tabs */__webpack_require__.d(__webpack_exports__, "Tabs", function() { return tabs_tabs; });
/* concated harmony reexport Pagination */__webpack_require__.d(__webpack_exports__, "Pagination", function() { return pagination_Pagination; });
/* concated harmony reexport Menu */__webpack_require__.d(__webpack_exports__, "Menu", function() { return components_menu_menu; });
/* concated harmony reexport Message */__webpack_require__.d(__webpack_exports__, "Message", function() { return message_message; });
/* concated harmony reexport Panel */__webpack_require__.d(__webpack_exports__, "Panel", function() { return panel_panel; });
/* concated harmony reexport Element */__webpack_require__.d(__webpack_exports__, "Element", function() { return components_element; });



































/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!***********************************************************************************************!*\
  !*** delegated ./node_modules/react-dom/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react-dom/index.js");

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

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
    key: "changePanel",
    value: function changePanel(panel) {
      this.setState({
        'panel': panel
      });
    }
  }, {
    key: "renderPanel",
    value: function renderPanel() {
      switch (this.state.panel) {
        case 'create':
          return __jsx("div", {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 5
            }
          }, __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_9__["Panel"].Block, {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 5
            }
          }, " ", __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_9__["Form"].Field, {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 19
            }
          }, __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_9__["Form"].Control, {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 6
            }
          }, __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 7
            }
          }, "Size of Array (initial):"), __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_9__["Form"].Input, {
            placeholder: "Default: 8",
            value: "",
            type: "number",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 7
            }
          }))), " "), __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_9__["Panel"].Block, {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 5
            }
          }, " ", __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_9__["Form"].Field, {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 19
            }
          }, __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_9__["Form"].Control, {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 6
            }
          }, __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 7
            }
          }, "Load Factor: "), __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_9__["Form"].Input, {
            placeholder: "Default: 1/2",
            value: ".5",
            type: "number",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 7
            }
          }))), " "));

        case 'modify':
          return __jsx("div", {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 5
            }
          }, __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_9__["Panel"].Block, {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 5
            }
          }, " ", __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_9__["Form"].Field, {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 19
            }
          }, __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_9__["Form"].Control, {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 6
            }
          }, __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 7
            }
          }, "Add (key/value):"), __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_9__["Form"].Input, {
            placeholder: "Default: 8",
            value: "",
            type: "number",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 7
            }
          }), __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_9__["Form"].Input, {
            placeholder: "Default: 8",
            value: "",
            type: "number",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 7
            }
          }))), " "), __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_9__["Panel"].Block, {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 5
            }
          }, " ", __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_9__["Form"].Field, {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 19
            }
          }, __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_9__["Form"].Control, {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 6
            }
          }, __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 7
            }
          }, "Delete (key):"), __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_9__["Form"].Input, {
            placeholder: "Default: 8",
            value: "",
            type: "number",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 7
            }
          }))), " "), __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_9__["Panel"].Block, {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 5
            }
          }, " ", __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_9__["Form"].Field, {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 19
            }
          }, __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_9__["Form"].Control, {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 6
            }
          }, __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 7
            }
          }, "Search (key):"), __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_9__["Form"].Input, {
            placeholder: "Default: 1/2",
            value: ".5",
            type: "number",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 7
            }
          }))), " "));

        case 'destroy':
          return __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_9__["Panel"].Block, {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 5
            }
          }, __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_9__["Button"], {
            className: "is-fullwidth",
            color: "danger",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 6
            }
          }, " Destroy "));

        default:
          return __jsx("div", {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 11
            }
          });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 4
        }
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 5
        }
      }, __jsx("title", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 6
        }
      }, "HashMap")), __jsx("div", {
        className: _structure_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.viewport,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 5
        }
      }, __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_9__["Panel"], {
        className: _structure_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.control,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 6
        }
      }, this.renderPanel(), __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_9__["Panel"].Tabs, {
        className: "panel-tabs",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 7
        }
      }, __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_9__["Panel"].Tabs.Tab, {
        active: this.state.panel == 'create',
        onClick: function onClick() {
          return _this2.changePanel('create');
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 8
        }
      }, "create"), __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_9__["Panel"].Tabs.Tab, {
        active: this.state.panel == 'modify',
        onClick: function onClick() {
          return _this2.changePanel('modify');
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 8
        }
      }, "modify"), __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_9__["Panel"].Tabs.Tab, {
        active: this.state.panel == 'destroy',
        onClick: function onClick() {
          return _this2.changePanel('destroy');
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 8
        }
      }, "destroy"), __jsx(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_9__["Panel"].Tabs.Tab, {
        onClick: function onClick() {
          return _this2.changePanel('close');
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 8
        }
      }, "close")))));
    }
  }]);

  return HashMap;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ }),

/***/ "./pages/data-structure/hashmap.module.css":
/*!*************************************************!*\
  !*** ./pages/data-structure/hashmap.module.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./hashmap.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./pages/data-structure/hashmap.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./hashmap.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./pages/data-structure/hashmap.module.css",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./hashmap.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./pages/data-structure/hashmap.module.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./pages/data-structure/structure.module.css":
/*!***************************************************!*\
  !*** ./pages/data-structure/structure.module.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./structure.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./pages/data-structure/structure.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./structure.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./pages/data-structure/structure.module.css",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./structure.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./pages/data-structure/structure.module.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ 2:
/*!*****************************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fdata-structure%2Fhashmap&absolutePagePath=%2FUsers%2FDanny%2FDocuments%2Fnext%2Falgo-vis%2Fpages%2Fdata-structure%2Fhashmap.js ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fdata-structure%2Fhashmap&absolutePagePath=%2FUsers%2FDanny%2FDocuments%2Fnext%2Falgo-vis%2Fpages%2Fdata-structure%2Fhashmap.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fdata-structure%2Fhashmap&absolutePagePath=%2FUsers%2FDanny%2FDocuments%2Fnext%2Falgo-vis%2Fpages%2Fdata-structure%2Fhashmap.js!./");


/***/ }),

/***/ "dll-reference dll_2adc2403d89adc16ead0":
/*!*******************************************!*\
  !*** external "dll_2adc2403d89adc16ead0" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_2adc2403d89adc16ead0;

/***/ })

},[[2,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=hashmap.js.map
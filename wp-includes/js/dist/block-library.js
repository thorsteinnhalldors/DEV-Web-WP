this["wp"] = this["wp"] || {}; this["wp"]["blockLibrary"] =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 434);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ }),

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

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

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ 12:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */
 // Disable reason: JSDoc linter doesn't seem to parse the union (`&`) correctly.

/* eslint-disable jsdoc/valid-types */

/** @typedef {{icon: JSX.Element, size?: number} & import('react').ComponentPropsWithoutRef<'SVG'>} IconProps */

/* eslint-enable jsdoc/valid-types */

/**
 * Return an SVG icon.
 *
 * @param {IconProps} props icon is the SVG component to render
 *                          size is a number specifiying the icon size in pixels
 *                          Other props will be passed to wrapped SVG component
 *
 * @return {JSX.Element}  Icon component
 */

function Icon(_ref) {
  var icon = _ref.icon,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref, ["icon", "size"]);

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["cloneElement"])(icon, _objectSpread({
    width: size,
    height: size
  }, props));
}

/* harmony default export */ __webpack_exports__["a"] = (Icon);


/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var close = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"
}));
/* harmony default export */ __webpack_exports__["a"] = (close);


/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectWithoutProperties; });
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _slicedToArray; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
var arrayWithHoles = __webpack_require__(38);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
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
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
var nonIterableRest = __webpack_require__(39);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return Object(arrayWithHoles["a" /* default */])(arr) || _iterableToArrayLimit(arr, i) || Object(unsupportedIterableToArray["a" /* default */])(arr, i) || Object(nonIterableRest["a" /* default */])();
}

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _toConsumableArray; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
var arrayLikeToArray = __webpack_require__(26);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(arrayLikeToArray["a" /* default */])(arr);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
var iterableToArray = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || Object(iterableToArray["a" /* default */])(arr) || Object(unsupportedIterableToArray["a" /* default */])(arr) || _nonIterableSpread();
}

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var link = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"
}));
/* harmony default export */ __webpack_exports__["a"] = (link);


/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
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

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var keyboardReturn = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M16 4h2v9H7v3l-5-4 5-4v3h9V4z"
}));
/* harmony default export */ __webpack_exports__["a"] = (keyboardReturn);


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

(function() { module.exports = this["lodash"]; }());

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _inherits; });

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js

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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(self);
}

/***/ }),

/***/ 22:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["keycodes"]; }());

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["richText"]; }());

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

/*! Fast Average Color | © 2019 Denis Seleznev | MIT License | https://github.com/hcodes/fast-average-color/ */
(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

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

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
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

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var FastAverageColor =
/*#__PURE__*/
function () {
  function FastAverageColor() {
    _classCallCheck(this, FastAverageColor);
  }

  _createClass(FastAverageColor, [{
    key: "getColorAsync",

    /**
     * Get asynchronously the average color from not loaded image.
     *
     * @param {HTMLImageElement} resource
     * @param {Function} callback
     * @param {Object|null} [options]
     * @param {Array}  [options.defaultColor=[255, 255, 255, 255]]
     * @param {*}      [options.data]
     * @param {string} [options.mode="speed"] "precision" or "speed"
     * @param {string} [options.algorithm="sqrt"] "simple", "sqrt" or "dominant"
     * @param {number} [options.step=1]
     * @param {number} [options.left=0]
     * @param {number} [options.top=0]
     * @param {number} [options.width=width of resource]
     * @param {number} [options.height=height of resource]
     */
    value: function getColorAsync(resource, callback, options) {
      if (resource.complete) {
        callback.call(resource, this.getColor(resource, options), options && options.data);
      } else {
        this._bindImageEvents(resource, callback, options);
      }
    }
    /**
     * Get the average color from images, videos and canvas.
     *
     * @param {HTMLImageElement|HTMLVideoElement|HTMLCanvasElement} resource
     * @param {Object|null} [options]
     * @param {Array}  [options.defaultColor=[255, 255, 255, 255]]
     * @param {*}      [options.data]
     * @param {string} [options.mode="speed"] "precision" or "speed"
     * @param {string} [options.algorithm="sqrt"] "simple", "sqrt" or "dominant"
     * @param {number} [options.step=1]
     * @param {number} [options.left=0]
     * @param {number} [options.top=0]
     * @param {number} [options.width=width of resource]
     * @param {number} [options.height=height of resource]
     *
     * @returns {Object}
     */

  }, {
    key: "getColor",
    value: function getColor(resource, options) {
      options = options || {};

      var defaultColor = this._getDefaultColor(options),
          originalSize = this._getOriginalSize(resource),
          size = this._prepareSizeAndPosition(originalSize, options);

      var error = null,
          value = defaultColor;

      if (!size.srcWidth || !size.srcHeight || !size.destWidth || !size.destHeight) {
        return this._prepareResult(defaultColor, new Error('FastAverageColor: Incorrect sizes.'));
      }

      if (!this._ctx) {
        this._canvas = this._makeCanvas();
        this._ctx = this._canvas.getContext && this._canvas.getContext('2d');

        if (!this._ctx) {
          return this._prepareResult(defaultColor, new Error('FastAverageColor: Canvas Context 2D is not supported in this browser.'));
        }
      }

      this._canvas.width = size.destWidth;
      this._canvas.height = size.destHeight;

      try {
        this._ctx.clearRect(0, 0, size.destWidth, size.destHeight);

        this._ctx.drawImage(resource, size.srcLeft, size.srcTop, size.srcWidth, size.srcHeight, 0, 0, size.destWidth, size.destHeight);

        var bitmapData = this._ctx.getImageData(0, 0, size.destWidth, size.destHeight).data;

        value = this.getColorFromArray4(bitmapData, options);
      } catch (e) {
        // Security error, CORS
        // https://developer.mozilla.org/en/docs/Web/HTML/CORS_enabled_image
        error = e;
      }

      return this._prepareResult(value, error);
    }
    /**
     * Get the average color from a array when 1 pixel is 4 bytes.
     *
     * @param {Array|Uint8Array} arr
     * @param {Object} [options]
     * @param {string} [options.algorithm="sqrt"] "simple", "sqrt" or "dominant"
     * @param {Array}  [options.defaultColor=[255, 255, 255, 255]]
     * @param {number} [options.step=1]
     *
     * @returns {Array} [red (0-255), green (0-255), blue (0-255), alpha (0-255)]
     */

  }, {
    key: "getColorFromArray4",
    value: function getColorFromArray4(arr, options) {
      options = options || {};
      var bytesPerPixel = 4,
          arrLength = arr.length;

      if (arrLength < bytesPerPixel) {
        return this._getDefaultColor(options);
      }

      var len = arrLength - arrLength % bytesPerPixel,
          preparedStep = (options.step || 1) * bytesPerPixel,
          algorithm = '_' + (options.algorithm || 'sqrt') + 'Algorithm';

      if (typeof this[algorithm] !== 'function') {
        throw new Error("FastAverageColor: ".concat(options.algorithm, " is unknown algorithm."));
      }

      return this[algorithm](arr, len, preparedStep);
    }
    /**
     * Destroy the instance.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      delete this._canvas;
      delete this._ctx;
    }
  }, {
    key: "_getDefaultColor",
    value: function _getDefaultColor(options) {
      return this._getOption(options, 'defaultColor', [255, 255, 255, 255]);
    }
  }, {
    key: "_getOption",
    value: function _getOption(options, name, defaultValue) {
      return typeof options[name] === 'undefined' ? defaultValue : options[name];
    }
  }, {
    key: "_prepareSizeAndPosition",
    value: function _prepareSizeAndPosition(originalSize, options) {
      var srcLeft = this._getOption(options, 'left', 0),
          srcTop = this._getOption(options, 'top', 0),
          srcWidth = this._getOption(options, 'width', originalSize.width),
          srcHeight = this._getOption(options, 'height', originalSize.height),
          destWidth = srcWidth,
          destHeight = srcHeight;

      if (options.mode === 'precision') {
        return {
          srcLeft: srcLeft,
          srcTop: srcTop,
          srcWidth: srcWidth,
          srcHeight: srcHeight,
          destWidth: destWidth,
          destHeight: destHeight
        };
      }

      var maxSize = 100,
          minSize = 10;
      var factor;

      if (srcWidth > srcHeight) {
        factor = srcWidth / srcHeight;
        destWidth = maxSize;
        destHeight = Math.round(destWidth / factor);
      } else {
        factor = srcHeight / srcWidth;
        destHeight = maxSize;
        destWidth = Math.round(destHeight / factor);
      }

      if (destWidth > srcWidth || destHeight > srcHeight || destWidth < minSize || destHeight < minSize) {
        destWidth = srcWidth;
        destHeight = srcHeight;
      }

      return {
        srcLeft: srcLeft,
        srcTop: srcTop,
        srcWidth: srcWidth,
        srcHeight: srcHeight,
        destWidth: destWidth,
        destHeight: destHeight
      };
    }
  }, {
    key: "_simpleAlgorithm",
    value: function _simpleAlgorithm(arr, len, preparedStep) {
      var redTotal = 0,
          greenTotal = 0,
          blueTotal = 0,
          alphaTotal = 0,
          count = 0;

      for (var i = 0; i < len; i += preparedStep) {
        var alpha = arr[i + 3],
            red = arr[i] * alpha,
            green = arr[i + 1] * alpha,
            blue = arr[i + 2] * alpha;
        redTotal += red;
        greenTotal += green;
        blueTotal += blue;
        alphaTotal += alpha;
        count++;
      }

      return alphaTotal ? [Math.round(redTotal / alphaTotal), Math.round(greenTotal / alphaTotal), Math.round(blueTotal / alphaTotal), Math.round(alphaTotal / count)] : [0, 0, 0, 0];
    }
  }, {
    key: "_sqrtAlgorithm",
    value: function _sqrtAlgorithm(arr, len, preparedStep) {
      var redTotal = 0,
          greenTotal = 0,
          blueTotal = 0,
          alphaTotal = 0,
          count = 0;

      for (var i = 0; i < len; i += preparedStep) {
        var red = arr[i],
            green = arr[i + 1],
            blue = arr[i + 2],
            alpha = arr[i + 3];
        redTotal += red * red * alpha;
        greenTotal += green * green * alpha;
        blueTotal += blue * blue * alpha;
        alphaTotal += alpha;
        count++;
      }

      return alphaTotal ? [Math.round(Math.sqrt(redTotal / alphaTotal)), Math.round(Math.sqrt(greenTotal / alphaTotal)), Math.round(Math.sqrt(blueTotal / alphaTotal)), Math.round(alphaTotal / count)] : [0, 0, 0, 0];
    }
  }, {
    key: "_dominantAlgorithm",
    value: function _dominantAlgorithm(arr, len, preparedStep) {
      var colorHash = {},
          divider = 24;

      for (var i = 0; i < len; i += preparedStep) {
        var red = arr[i],
            green = arr[i + 1],
            blue = arr[i + 2],
            alpha = arr[i + 3],
            key = Math.round(red / divider) + ',' + Math.round(green / divider) + ',' + Math.round(blue / divider);

        if (colorHash[key]) {
          colorHash[key] = [colorHash[key][0] + red * alpha, colorHash[key][1] + green * alpha, colorHash[key][2] + blue * alpha, colorHash[key][3] + alpha, colorHash[key][4] + 1];
        } else {
          colorHash[key] = [red * alpha, green * alpha, blue * alpha, alpha, 1];
        }
      }

      var buffer = Object.keys(colorHash).map(function (key) {
        return colorHash[key];
      }).sort(function (a, b) {
        var countA = a[4],
            countB = b[4];
        return countA > countB ? -1 : countA === countB ? 0 : 1;
      });

      var _buffer$ = _slicedToArray(buffer[0], 5),
          redTotal = _buffer$[0],
          greenTotal = _buffer$[1],
          blueTotal = _buffer$[2],
          alphaTotal = _buffer$[3],
          count = _buffer$[4];

      return alphaTotal ? [Math.round(redTotal / alphaTotal), Math.round(greenTotal / alphaTotal), Math.round(blueTotal / alphaTotal), Math.round(alphaTotal / count)] : [0, 0, 0, 0];
    }
  }, {
    key: "_bindImageEvents",
    value: function _bindImageEvents(resource, callback, options) {
      var _this = this;

      options = options || {};

      var data = options && options.data,
          defaultColor = this._getDefaultColor(options),
          onload = function onload() {
        unbindEvents();
        callback.call(resource, _this.getColor(resource, options), data);
      },
          onerror = function onerror() {
        unbindEvents();
        callback.call(resource, _this._prepareResult(defaultColor, new Error('Image error')), data);
      },
          onabort = function onabort() {
        unbindEvents();
        callback.call(resource, _this._prepareResult(defaultColor, new Error('Image abort')), data);
      },
          unbindEvents = function unbindEvents() {
        resource.removeEventListener('load', onload);
        resource.removeEventListener('error', onerror);
        resource.removeEventListener('abort', onabort);
      };

      resource.addEventListener('load', onload);
      resource.addEventListener('error', onerror);
      resource.addEventListener('abort', onabort);
    }
  }, {
    key: "_prepareResult",
    value: function _prepareResult(value, error) {
      var rgb = value.slice(0, 3),
          rgba = [].concat(rgb, value[3] / 255),
          isDark = this._isDark(value);

      return {
        error: error,
        value: value,
        rgb: 'rgb(' + rgb.join(',') + ')',
        rgba: 'rgba(' + rgba.join(',') + ')',
        hex: this._arrayToHex(rgb),
        hexa: this._arrayToHex(value),
        isDark: isDark,
        isLight: !isDark
      };
    }
  }, {
    key: "_getOriginalSize",
    value: function _getOriginalSize(resource) {
      if (resource instanceof HTMLImageElement) {
        return {
          width: resource.naturalWidth,
          height: resource.naturalHeight
        };
      }

      if (resource instanceof HTMLVideoElement) {
        return {
          width: resource.videoWidth,
          height: resource.videoHeight
        };
      }

      return {
        width: resource.width,
        height: resource.height
      };
    }
  }, {
    key: "_toHex",
    value: function _toHex(num) {
      var str = num.toString(16);
      return str.length === 1 ? '0' + str : str;
    }
  }, {
    key: "_arrayToHex",
    value: function _arrayToHex(arr) {
      return '#' + arr.map(this._toHex).join('');
    }
  }, {
    key: "_isDark",
    value: function _isDark(color) {
      // http://www.w3.org/TR/AERT#color-contrast
      var result = (color[0] * 299 + color[1] * 587 + color[2] * 114) / 1000;
      return result < 128;
    }
  }, {
    key: "_makeCanvas",
    value: function _makeCanvas() {
      return typeof window === 'undefined' ? new OffscreenCanvas(1, 1) : document.createElement('canvas');
    }
  }]);

  return FastAverageColor;
}();

return FastAverageColor;

})));


/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(o, minLen);
}

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var alignLeft = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M4 19.8h8.9v-1.5H4v1.5zm8.9-15.6H4v1.5h8.9V4.2zm-8.9 7v1.5h16v-1.5H4z"
}));
/* harmony default export */ __webpack_exports__["a"] = (alignLeft);


/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var alignCenter = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M16.4 4.2H7.6v1.5h8.9V4.2zM4 11.2v1.5h16v-1.5H4zm3.6 8.6h8.9v-1.5H7.6v1.5z"
}));
/* harmony default export */ __webpack_exports__["a"] = (alignCenter);


/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var alignRight = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M11.1 19.8H20v-1.5h-8.9v1.5zm0-15.6v1.5H20V4.2h-8.9zM4 12.8h16v-1.5H4v1.5z"
}));
/* harmony default export */ __webpack_exports__["a"] = (alignRight);


/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var search = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M13.5 6C10.5 6 8 8.5 8 11.5c0 1.1.3 2.1.9 3l-3.4 3 1 1.1 3.4-2.9c1 .9 2.2 1.4 3.6 1.4 3 0 5.5-2.5 5.5-5.5C19 8.5 16.5 6 13.5 6zm0 9.5c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"
}));
/* harmony default export */ __webpack_exports__["a"] = (search);


/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var chevronRight = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M10.6 6L9.4 7l4.6 5-4.6 5 1.2 1 5.4-6z"
}));
/* harmony default export */ __webpack_exports__["a"] = (chevronRight);


/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var chevronLeft = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M14.6 7l-1.2-1L8 12l5.4 6 1.2-1-4.6-5z"
}));
/* harmony default export */ __webpack_exports__["a"] = (chevronLeft);


/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var pencil = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M13.89 3.39l2.71 2.72c.46.46.42 1.24.03 1.64l-8.01 8.02-5.56 1.16 1.16-5.58s7.6-7.63 7.99-8.03c.39-.39 1.22-.39 1.68.07zm-2.73 2.79l-5.59 5.61 1.11 1.11 5.54-5.65zm-2.97 8.23l5.58-5.6-1.07-1.08-5.59 5.6zM13.89 3.39l2.71 2.72c.46.46.42 1.24.03 1.64l-8.01 8.02-5.56 1.16 1.16-5.58s7.6-7.63 7.99-8.03c.39-.39 1.22-.39 1.68.07zm-2.73 2.79l-5.59 5.61 1.11 1.11 5.54-5.65zm-2.97 8.23l5.58-5.6-1.07-1.08-5.59 5.6z"
}));
/* harmony default export */ __webpack_exports__["a"] = (pencil);


/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var code = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M20.8 10.7l-4.3-4.3-1.1 1.1 4.3 4.3c.1.1.1.3 0 .4l-4.3 4.3 1.1 1.1 4.3-4.3c.7-.8.7-1.9 0-2.6zM4.2 11.8l4.3-4.3-1-1-4.3 4.3c-.7.7-.7 1.8 0 2.5l4.3 4.3 1.1-1.1-4.3-4.3c-.2-.1-.2-.3-.1-.4z"
}));
/* harmony default export */ __webpack_exports__["a"] = (code);


/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var grid = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M9 9V3H3v6h6zm8 0V3h-6v6h6zm-8 8v-6H3v6h6zm8 0v-6h-6v6h6z"
}));
/* harmony default export */ __webpack_exports__["a"] = (grid);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ 30:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["url"]; }());

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

/***/ }),

/***/ 37:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["deprecated"]; }());

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["data"]; }());

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _typeof; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ 43:
/***/ (function(module, exports) {

(function() { module.exports = this["moment"]; }());

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "registerCoreBlocks", function() { return /* binding */ build_module_registerCoreBlocks; });
__webpack_require__.d(__webpack_exports__, "__experimentalRegisterExperimentalCoreBlocks", function() { return /* binding */ __experimentalRegisterExperimentalCoreBlocks; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/paragraph/index.js
var build_module_paragraph_namespaceObject = {};
__webpack_require__.r(build_module_paragraph_namespaceObject);
__webpack_require__.d(build_module_paragraph_namespaceObject, "metadata", function() { return paragraph_metadata; });
__webpack_require__.d(build_module_paragraph_namespaceObject, "name", function() { return paragraph_name; });
__webpack_require__.d(build_module_paragraph_namespaceObject, "settings", function() { return paragraph_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/image/index.js
var build_module_image_namespaceObject = {};
__webpack_require__.r(build_module_image_namespaceObject);
__webpack_require__.d(build_module_image_namespaceObject, "metadata", function() { return image_metadata; });
__webpack_require__.d(build_module_image_namespaceObject, "name", function() { return image_name; });
__webpack_require__.d(build_module_image_namespaceObject, "settings", function() { return image_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/heading/index.js
var build_module_heading_namespaceObject = {};
__webpack_require__.r(build_module_heading_namespaceObject);
__webpack_require__.d(build_module_heading_namespaceObject, "metadata", function() { return heading_metadata; });
__webpack_require__.d(build_module_heading_namespaceObject, "name", function() { return heading_name; });
__webpack_require__.d(build_module_heading_namespaceObject, "settings", function() { return heading_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/quote/index.js
var build_module_quote_namespaceObject = {};
__webpack_require__.r(build_module_quote_namespaceObject);
__webpack_require__.d(build_module_quote_namespaceObject, "metadata", function() { return quote_metadata; });
__webpack_require__.d(build_module_quote_namespaceObject, "name", function() { return quote_name; });
__webpack_require__.d(build_module_quote_namespaceObject, "settings", function() { return quote_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/gallery/index.js
var build_module_gallery_namespaceObject = {};
__webpack_require__.r(build_module_gallery_namespaceObject);
__webpack_require__.d(build_module_gallery_namespaceObject, "metadata", function() { return gallery_metadata; });
__webpack_require__.d(build_module_gallery_namespaceObject, "name", function() { return gallery_name; });
__webpack_require__.d(build_module_gallery_namespaceObject, "settings", function() { return gallery_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/archives/index.js
var archives_namespaceObject = {};
__webpack_require__.r(archives_namespaceObject);
__webpack_require__.d(archives_namespaceObject, "metadata", function() { return archives_metadata; });
__webpack_require__.d(archives_namespaceObject, "name", function() { return archives_name; });
__webpack_require__.d(archives_namespaceObject, "settings", function() { return archives_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/audio/index.js
var build_module_audio_namespaceObject = {};
__webpack_require__.r(build_module_audio_namespaceObject);
__webpack_require__.d(build_module_audio_namespaceObject, "metadata", function() { return audio_metadata; });
__webpack_require__.d(build_module_audio_namespaceObject, "name", function() { return audio_name; });
__webpack_require__.d(build_module_audio_namespaceObject, "settings", function() { return audio_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/button/index.js
var build_module_button_namespaceObject = {};
__webpack_require__.r(build_module_button_namespaceObject);
__webpack_require__.d(build_module_button_namespaceObject, "metadata", function() { return button_metadata; });
__webpack_require__.d(build_module_button_namespaceObject, "name", function() { return button_name; });
__webpack_require__.d(build_module_button_namespaceObject, "settings", function() { return button_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/buttons/index.js
var buttons_namespaceObject = {};
__webpack_require__.r(buttons_namespaceObject);
__webpack_require__.d(buttons_namespaceObject, "metadata", function() { return buttons_metadata; });
__webpack_require__.d(buttons_namespaceObject, "name", function() { return buttons_name; });
__webpack_require__.d(buttons_namespaceObject, "settings", function() { return buttons_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/calendar/index.js
var build_module_calendar_namespaceObject = {};
__webpack_require__.r(build_module_calendar_namespaceObject);
__webpack_require__.d(build_module_calendar_namespaceObject, "metadata", function() { return calendar_metadata; });
__webpack_require__.d(build_module_calendar_namespaceObject, "name", function() { return calendar_name; });
__webpack_require__.d(build_module_calendar_namespaceObject, "settings", function() { return calendar_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/categories/index.js
var categories_namespaceObject = {};
__webpack_require__.r(categories_namespaceObject);
__webpack_require__.d(categories_namespaceObject, "metadata", function() { return categories_metadata; });
__webpack_require__.d(categories_namespaceObject, "name", function() { return categories_name; });
__webpack_require__.d(categories_namespaceObject, "settings", function() { return categories_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/code/index.js
var code_namespaceObject = {};
__webpack_require__.r(code_namespaceObject);
__webpack_require__.d(code_namespaceObject, "metadata", function() { return code_metadata; });
__webpack_require__.d(code_namespaceObject, "name", function() { return code_name; });
__webpack_require__.d(code_namespaceObject, "settings", function() { return code_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/columns/index.js
var build_module_columns_namespaceObject = {};
__webpack_require__.r(build_module_columns_namespaceObject);
__webpack_require__.d(build_module_columns_namespaceObject, "metadata", function() { return columns_metadata; });
__webpack_require__.d(build_module_columns_namespaceObject, "name", function() { return columns_name; });
__webpack_require__.d(build_module_columns_namespaceObject, "settings", function() { return columns_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/column/index.js
var build_module_column_namespaceObject = {};
__webpack_require__.r(build_module_column_namespaceObject);
__webpack_require__.d(build_module_column_namespaceObject, "metadata", function() { return column_metadata; });
__webpack_require__.d(build_module_column_namespaceObject, "name", function() { return column_name; });
__webpack_require__.d(build_module_column_namespaceObject, "settings", function() { return column_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/cover/index.js
var build_module_cover_namespaceObject = {};
__webpack_require__.r(build_module_cover_namespaceObject);
__webpack_require__.d(build_module_cover_namespaceObject, "metadata", function() { return cover_metadata; });
__webpack_require__.d(build_module_cover_namespaceObject, "name", function() { return cover_name; });
__webpack_require__.d(build_module_cover_namespaceObject, "settings", function() { return cover_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/embed/index.js
var embed_namespaceObject = {};
__webpack_require__.r(embed_namespaceObject);
__webpack_require__.d(embed_namespaceObject, "name", function() { return embed_name; });
__webpack_require__.d(embed_namespaceObject, "settings", function() { return embed_settings; });
__webpack_require__.d(embed_namespaceObject, "common", function() { return embed_common; });
__webpack_require__.d(embed_namespaceObject, "others", function() { return embed_others; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/file/index.js
var build_module_file_namespaceObject = {};
__webpack_require__.r(build_module_file_namespaceObject);
__webpack_require__.d(build_module_file_namespaceObject, "metadata", function() { return file_metadata; });
__webpack_require__.d(build_module_file_namespaceObject, "name", function() { return file_name; });
__webpack_require__.d(build_module_file_namespaceObject, "settings", function() { return file_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/html/index.js
var build_module_html_namespaceObject = {};
__webpack_require__.r(build_module_html_namespaceObject);
__webpack_require__.d(build_module_html_namespaceObject, "metadata", function() { return html_metadata; });
__webpack_require__.d(build_module_html_namespaceObject, "name", function() { return html_name; });
__webpack_require__.d(build_module_html_namespaceObject, "settings", function() { return html_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/media-text/index.js
var media_text_namespaceObject = {};
__webpack_require__.r(media_text_namespaceObject);
__webpack_require__.d(media_text_namespaceObject, "metadata", function() { return media_text_metadata; });
__webpack_require__.d(media_text_namespaceObject, "name", function() { return media_text_name; });
__webpack_require__.d(media_text_namespaceObject, "settings", function() { return media_text_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/latest-comments/index.js
var latest_comments_namespaceObject = {};
__webpack_require__.r(latest_comments_namespaceObject);
__webpack_require__.d(latest_comments_namespaceObject, "metadata", function() { return latest_comments_metadata; });
__webpack_require__.d(latest_comments_namespaceObject, "name", function() { return latest_comments_name; });
__webpack_require__.d(latest_comments_namespaceObject, "settings", function() { return latest_comments_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/latest-posts/index.js
var latest_posts_namespaceObject = {};
__webpack_require__.r(latest_posts_namespaceObject);
__webpack_require__.d(latest_posts_namespaceObject, "metadata", function() { return latest_posts_metadata; });
__webpack_require__.d(latest_posts_namespaceObject, "name", function() { return latest_posts_name; });
__webpack_require__.d(latest_posts_namespaceObject, "settings", function() { return latest_posts_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/list/index.js
var build_module_list_namespaceObject = {};
__webpack_require__.r(build_module_list_namespaceObject);
__webpack_require__.d(build_module_list_namespaceObject, "metadata", function() { return list_metadata; });
__webpack_require__.d(build_module_list_namespaceObject, "name", function() { return list_name; });
__webpack_require__.d(build_module_list_namespaceObject, "settings", function() { return list_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/missing/index.js
var missing_namespaceObject = {};
__webpack_require__.r(missing_namespaceObject);
__webpack_require__.d(missing_namespaceObject, "metadata", function() { return missing_metadata; });
__webpack_require__.d(missing_namespaceObject, "name", function() { return missing_name; });
__webpack_require__.d(missing_namespaceObject, "settings", function() { return missing_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/more/index.js
var build_module_more_namespaceObject = {};
__webpack_require__.r(build_module_more_namespaceObject);
__webpack_require__.d(build_module_more_namespaceObject, "metadata", function() { return more_metadata; });
__webpack_require__.d(build_module_more_namespaceObject, "name", function() { return more_name; });
__webpack_require__.d(build_module_more_namespaceObject, "settings", function() { return more_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/nextpage/index.js
var nextpage_namespaceObject = {};
__webpack_require__.r(nextpage_namespaceObject);
__webpack_require__.d(nextpage_namespaceObject, "metadata", function() { return nextpage_metadata; });
__webpack_require__.d(nextpage_namespaceObject, "name", function() { return nextpage_name; });
__webpack_require__.d(nextpage_namespaceObject, "settings", function() { return nextpage_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/preformatted/index.js
var build_module_preformatted_namespaceObject = {};
__webpack_require__.r(build_module_preformatted_namespaceObject);
__webpack_require__.d(build_module_preformatted_namespaceObject, "metadata", function() { return preformatted_metadata; });
__webpack_require__.d(build_module_preformatted_namespaceObject, "name", function() { return preformatted_name; });
__webpack_require__.d(build_module_preformatted_namespaceObject, "settings", function() { return preformatted_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/pullquote/index.js
var build_module_pullquote_namespaceObject = {};
__webpack_require__.r(build_module_pullquote_namespaceObject);
__webpack_require__.d(build_module_pullquote_namespaceObject, "metadata", function() { return pullquote_metadata; });
__webpack_require__.d(build_module_pullquote_namespaceObject, "name", function() { return pullquote_name; });
__webpack_require__.d(build_module_pullquote_namespaceObject, "settings", function() { return pullquote_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/block/index.js
var block_namespaceObject = {};
__webpack_require__.r(block_namespaceObject);
__webpack_require__.d(block_namespaceObject, "metadata", function() { return block_metadata; });
__webpack_require__.d(block_namespaceObject, "name", function() { return block_name; });
__webpack_require__.d(block_namespaceObject, "settings", function() { return block_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/rss/index.js
var build_module_rss_namespaceObject = {};
__webpack_require__.r(build_module_rss_namespaceObject);
__webpack_require__.d(build_module_rss_namespaceObject, "metadata", function() { return rss_metadata; });
__webpack_require__.d(build_module_rss_namespaceObject, "name", function() { return rss_name; });
__webpack_require__.d(build_module_rss_namespaceObject, "settings", function() { return rss_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/search/index.js
var search_namespaceObject = {};
__webpack_require__.r(search_namespaceObject);
__webpack_require__.d(search_namespaceObject, "metadata", function() { return search_metadata; });
__webpack_require__.d(search_namespaceObject, "name", function() { return search_name; });
__webpack_require__.d(search_namespaceObject, "settings", function() { return search_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/group/index.js
var build_module_group_namespaceObject = {};
__webpack_require__.r(build_module_group_namespaceObject);
__webpack_require__.d(build_module_group_namespaceObject, "metadata", function() { return group_metadata; });
__webpack_require__.d(build_module_group_namespaceObject, "name", function() { return group_name; });
__webpack_require__.d(build_module_group_namespaceObject, "settings", function() { return group_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/separator/index.js
var build_module_separator_namespaceObject = {};
__webpack_require__.r(build_module_separator_namespaceObject);
__webpack_require__.d(build_module_separator_namespaceObject, "metadata", function() { return separator_metadata; });
__webpack_require__.d(build_module_separator_namespaceObject, "name", function() { return separator_name; });
__webpack_require__.d(build_module_separator_namespaceObject, "settings", function() { return build_module_separator_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/shortcode/index.js
var build_module_shortcode_namespaceObject = {};
__webpack_require__.r(build_module_shortcode_namespaceObject);
__webpack_require__.d(build_module_shortcode_namespaceObject, "metadata", function() { return shortcode_metadata; });
__webpack_require__.d(build_module_shortcode_namespaceObject, "name", function() { return shortcode_name; });
__webpack_require__.d(build_module_shortcode_namespaceObject, "settings", function() { return shortcode_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/spacer/index.js
var spacer_namespaceObject = {};
__webpack_require__.r(spacer_namespaceObject);
__webpack_require__.d(spacer_namespaceObject, "metadata", function() { return spacer_metadata; });
__webpack_require__.d(spacer_namespaceObject, "name", function() { return spacer_name; });
__webpack_require__.d(spacer_namespaceObject, "settings", function() { return spacer_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/subhead/index.js
var subhead_namespaceObject = {};
__webpack_require__.r(subhead_namespaceObject);
__webpack_require__.d(subhead_namespaceObject, "metadata", function() { return subhead_metadata; });
__webpack_require__.d(subhead_namespaceObject, "name", function() { return subhead_name; });
__webpack_require__.d(subhead_namespaceObject, "settings", function() { return subhead_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/table/index.js
var build_module_table_namespaceObject = {};
__webpack_require__.r(build_module_table_namespaceObject);
__webpack_require__.d(build_module_table_namespaceObject, "metadata", function() { return table_metadata; });
__webpack_require__.d(build_module_table_namespaceObject, "name", function() { return table_name; });
__webpack_require__.d(build_module_table_namespaceObject, "settings", function() { return table_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/text-columns/index.js
var text_columns_namespaceObject = {};
__webpack_require__.r(text_columns_namespaceObject);
__webpack_require__.d(text_columns_namespaceObject, "metadata", function() { return text_columns_metadata; });
__webpack_require__.d(text_columns_namespaceObject, "name", function() { return text_columns_name; });
__webpack_require__.d(text_columns_namespaceObject, "settings", function() { return text_columns_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/verse/index.js
var build_module_verse_namespaceObject = {};
__webpack_require__.r(build_module_verse_namespaceObject);
__webpack_require__.d(build_module_verse_namespaceObject, "metadata", function() { return verse_metadata; });
__webpack_require__.d(build_module_verse_namespaceObject, "name", function() { return verse_name; });
__webpack_require__.d(build_module_verse_namespaceObject, "settings", function() { return verse_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/video/index.js
var build_module_video_namespaceObject = {};
__webpack_require__.r(build_module_video_namespaceObject);
__webpack_require__.d(build_module_video_namespaceObject, "metadata", function() { return video_metadata; });
__webpack_require__.d(build_module_video_namespaceObject, "name", function() { return video_name; });
__webpack_require__.d(build_module_video_namespaceObject, "settings", function() { return video_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/tag-cloud/index.js
var tag_cloud_namespaceObject = {};
__webpack_require__.r(tag_cloud_namespaceObject);
__webpack_require__.d(tag_cloud_namespaceObject, "metadata", function() { return tag_cloud_metadata; });
__webpack_require__.d(tag_cloud_namespaceObject, "name", function() { return tag_cloud_name; });
__webpack_require__.d(tag_cloud_namespaceObject, "settings", function() { return tag_cloud_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/classic/index.js
var build_module_classic_namespaceObject = {};
__webpack_require__.r(build_module_classic_namespaceObject);
__webpack_require__.d(build_module_classic_namespaceObject, "metadata", function() { return classic_metadata; });
__webpack_require__.d(build_module_classic_namespaceObject, "name", function() { return classic_name; });
__webpack_require__.d(build_module_classic_namespaceObject, "settings", function() { return classic_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/social-links/index.js
var social_links_namespaceObject = {};
__webpack_require__.r(social_links_namespaceObject);
__webpack_require__.d(social_links_namespaceObject, "metadata", function() { return social_links_metadata; });
__webpack_require__.d(social_links_namespaceObject, "name", function() { return social_links_name; });
__webpack_require__.d(social_links_namespaceObject, "settings", function() { return social_links_settings; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-library/build-module/social-link/index.js
var social_link_namespaceObject = {};
__webpack_require__.r(social_link_namespaceObject);
__webpack_require__.d(social_link_namespaceObject, "metadata", function() { return social_link_metadata; });
__webpack_require__.d(social_link_namespaceObject, "name", function() { return social_link_name; });
__webpack_require__.d(social_link_namespaceObject, "settings", function() { return social_link_settings; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(5);

// EXTERNAL MODULE: external {"this":["wp","coreData"]}
var external_this_wp_coreData_ = __webpack_require__(89);

// EXTERNAL MODULE: external {"this":["wp","blockEditor"]}
var external_this_wp_blockEditor_ = __webpack_require__(7);

// EXTERNAL MODULE: external {"this":["wp","blocks"]}
var external_this_wp_blocks_ = __webpack_require__(12);

// EXTERNAL MODULE: external {"this":"lodash"}
var external_this_lodash_ = __webpack_require__(2);

// EXTERNAL MODULE: external {"this":["wp","i18n"]}
var external_this_wp_i18n_ = __webpack_require__(1);

// EXTERNAL MODULE: external {"this":["wp","element"]}
var external_this_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external {"this":["wp","primitives"]}
var external_this_wp_primitives_ = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/paragraph.js


/**
 * WordPress dependencies
 */

var paragraph = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M18.3 4H9.9v-.1l-.9.2c-2.3.4-4 2.4-4 4.8s1.7 4.4 4 4.8l.7.1V20h1.5V5.5h2.9V20h1.5V5.5h2.7V4z"
}));
/* harmony default export */ var library_paragraph = (paragraph);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(11);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/paragraph/deprecated.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */



var deprecated_supports = {
  className: false
};
var deprecated_blockAttributes = {
  align: {
    type: 'string'
  },
  content: {
    type: 'string',
    source: 'html',
    selector: 'p',
    default: ''
  },
  dropCap: {
    type: 'boolean',
    default: false
  },
  placeholder: {
    type: 'string'
  },
  textColor: {
    type: 'string'
  },
  backgroundColor: {
    type: 'string'
  },
  fontSize: {
    type: 'string'
  },
  direction: {
    type: 'string',
    enum: ['ltr', 'rtl']
  },
  style: {
    type: 'object'
  }
};

var deprecated_migrateCustomColorsAndFontSizes = function migrateCustomColorsAndFontSizes(attributes) {
  if (!attributes.customTextColor && !attributes.customBackgroundColor && !attributes.customFontSize) {
    return attributes;
  }

  var style = {};

  if (attributes.customTextColor || attributes.customBackgroundColor) {
    style.color = {};
  }

  if (attributes.customTextColor) {
    style.color.text = attributes.customTextColor;
  }

  if (attributes.customBackgroundColor) {
    style.color.background = attributes.customBackgroundColor;
  }

  if (attributes.customFontSize) {
    style.typography = {
      fontSize: attributes.customFontSize
    };
  }

  return _objectSpread({}, Object(external_this_lodash_["omit"])(attributes, ['customTextColor', 'customBackgroundColor', 'customFontSize']), {
    style: style
  });
};

var deprecated = [{
  supports: deprecated_supports,
  attributes: _objectSpread({}, Object(external_this_lodash_["omit"])(deprecated_blockAttributes, ['style']), {
    customTextColor: {
      type: 'string'
    },
    customBackgroundColor: {
      type: 'string'
    },
    customFontSize: {
      type: 'number'
    }
  }),
  migrate: deprecated_migrateCustomColorsAndFontSizes,
  save: function save(_ref) {
    var _classnames;

    var attributes = _ref.attributes;
    var align = attributes.align,
        content = attributes.content,
        dropCap = attributes.dropCap,
        backgroundColor = attributes.backgroundColor,
        textColor = attributes.textColor,
        customBackgroundColor = attributes.customBackgroundColor,
        customTextColor = attributes.customTextColor,
        fontSize = attributes.fontSize,
        customFontSize = attributes.customFontSize,
        direction = attributes.direction;
    var textClass = Object(external_this_wp_blockEditor_["getColorClassName"])('color', textColor);
    var backgroundClass = Object(external_this_wp_blockEditor_["getColorClassName"])('background-color', backgroundColor);
    var fontSizeClass = Object(external_this_wp_blockEditor_["getFontSizeClass"])(fontSize);
    var className = classnames_default()((_classnames = {
      'has-text-color': textColor || customTextColor,
      'has-background': backgroundColor || customBackgroundColor,
      'has-drop-cap': dropCap
    }, Object(defineProperty["a" /* default */])(_classnames, "has-text-align-".concat(align), align), Object(defineProperty["a" /* default */])(_classnames, fontSizeClass, fontSizeClass), Object(defineProperty["a" /* default */])(_classnames, textClass, textClass), Object(defineProperty["a" /* default */])(_classnames, backgroundClass, backgroundClass), _classnames));
    var styles = {
      backgroundColor: backgroundClass ? undefined : customBackgroundColor,
      color: textClass ? undefined : customTextColor,
      fontSize: fontSizeClass ? undefined : customFontSize
    };
    return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      tagName: "p",
      style: styles,
      className: className ? className : undefined,
      value: content,
      dir: direction
    });
  }
}, {
  supports: deprecated_supports,
  attributes: _objectSpread({}, Object(external_this_lodash_["omit"])(deprecated_blockAttributes, ['style']), {
    customTextColor: {
      type: 'string'
    },
    customBackgroundColor: {
      type: 'string'
    },
    customFontSize: {
      type: 'number'
    }
  }),
  migrate: deprecated_migrateCustomColorsAndFontSizes,
  save: function save(_ref2) {
    var _classnames2;

    var attributes = _ref2.attributes;
    var align = attributes.align,
        content = attributes.content,
        dropCap = attributes.dropCap,
        backgroundColor = attributes.backgroundColor,
        textColor = attributes.textColor,
        customBackgroundColor = attributes.customBackgroundColor,
        customTextColor = attributes.customTextColor,
        fontSize = attributes.fontSize,
        customFontSize = attributes.customFontSize,
        direction = attributes.direction;
    var textClass = Object(external_this_wp_blockEditor_["getColorClassName"])('color', textColor);
    var backgroundClass = Object(external_this_wp_blockEditor_["getColorClassName"])('background-color', backgroundColor);
    var fontSizeClass = Object(external_this_wp_blockEditor_["getFontSizeClass"])(fontSize);
    var className = classnames_default()((_classnames2 = {
      'has-text-color': textColor || customTextColor,
      'has-background': backgroundColor || customBackgroundColor,
      'has-drop-cap': dropCap
    }, Object(defineProperty["a" /* default */])(_classnames2, fontSizeClass, fontSizeClass), Object(defineProperty["a" /* default */])(_classnames2, textClass, textClass), Object(defineProperty["a" /* default */])(_classnames2, backgroundClass, backgroundClass), _classnames2));
    var styles = {
      backgroundColor: backgroundClass ? undefined : customBackgroundColor,
      color: textClass ? undefined : customTextColor,
      fontSize: fontSizeClass ? undefined : customFontSize,
      textAlign: align
    };
    return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      tagName: "p",
      style: styles,
      className: className ? className : undefined,
      value: content,
      dir: direction
    });
  }
}, {
  supports: deprecated_supports,
  attributes: _objectSpread({}, Object(external_this_lodash_["omit"])(deprecated_blockAttributes, ['style']), {
    customTextColor: {
      type: 'string'
    },
    customBackgroundColor: {
      type: 'string'
    },
    customFontSize: {
      type: 'number'
    },
    width: {
      type: 'string'
    }
  }),
  migrate: deprecated_migrateCustomColorsAndFontSizes,
  save: function save(_ref3) {
    var _classnames3;

    var attributes = _ref3.attributes;
    var width = attributes.width,
        align = attributes.align,
        content = attributes.content,
        dropCap = attributes.dropCap,
        backgroundColor = attributes.backgroundColor,
        textColor = attributes.textColor,
        customBackgroundColor = attributes.customBackgroundColor,
        customTextColor = attributes.customTextColor,
        fontSize = attributes.fontSize,
        customFontSize = attributes.customFontSize;
    var textClass = Object(external_this_wp_blockEditor_["getColorClassName"])('color', textColor);
    var backgroundClass = Object(external_this_wp_blockEditor_["getColorClassName"])('background-color', backgroundColor);
    var fontSizeClass = fontSize && "is-".concat(fontSize, "-text");
    var className = classnames_default()((_classnames3 = {}, Object(defineProperty["a" /* default */])(_classnames3, "align".concat(width), width), Object(defineProperty["a" /* default */])(_classnames3, 'has-background', backgroundColor || customBackgroundColor), Object(defineProperty["a" /* default */])(_classnames3, 'has-drop-cap', dropCap), Object(defineProperty["a" /* default */])(_classnames3, fontSizeClass, fontSizeClass), Object(defineProperty["a" /* default */])(_classnames3, textClass, textClass), Object(defineProperty["a" /* default */])(_classnames3, backgroundClass, backgroundClass), _classnames3));
    var styles = {
      backgroundColor: backgroundClass ? undefined : customBackgroundColor,
      color: textClass ? undefined : customTextColor,
      fontSize: fontSizeClass ? undefined : customFontSize,
      textAlign: align
    };
    return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      tagName: "p",
      style: styles,
      className: className ? className : undefined,
      value: content
    });
  }
}, {
  supports: deprecated_supports,
  attributes: Object(external_this_lodash_["omit"])(_objectSpread({}, deprecated_blockAttributes, {
    fontSize: {
      type: 'number'
    }
  }), ['style']),
  save: function save(_ref4) {
    var _classnames4;

    var attributes = _ref4.attributes;
    var width = attributes.width,
        align = attributes.align,
        content = attributes.content,
        dropCap = attributes.dropCap,
        backgroundColor = attributes.backgroundColor,
        textColor = attributes.textColor,
        fontSize = attributes.fontSize;
    var className = classnames_default()((_classnames4 = {}, Object(defineProperty["a" /* default */])(_classnames4, "align".concat(width), width), Object(defineProperty["a" /* default */])(_classnames4, 'has-background', backgroundColor), Object(defineProperty["a" /* default */])(_classnames4, 'has-drop-cap', dropCap), _classnames4));
    var styles = {
      backgroundColor: backgroundColor,
      color: textColor,
      fontSize: fontSize,
      textAlign: align
    };
    return Object(external_this_wp_element_["createElement"])("p", {
      style: styles,
      className: className ? className : undefined
    }, content);
  },
  migrate: function migrate(attributes) {
    return deprecated_migrateCustomColorsAndFontSizes(Object(external_this_lodash_["omit"])(_objectSpread({}, attributes, {
      customFontSize: Object(external_this_lodash_["isFinite"])(attributes.fontSize) ? attributes.fontSize : undefined,
      customTextColor: attributes.textColor && '#' === attributes.textColor[0] ? attributes.textColor : undefined,
      customBackgroundColor: attributes.backgroundColor && '#' === attributes.backgroundColor[0] ? attributes.backgroundColor : undefined
    })), ['fontSize', 'textColor', 'backgroundColor', 'style']);
  }
}, {
  supports: deprecated_supports,
  attributes: _objectSpread({}, deprecated_blockAttributes, {
    content: {
      type: 'string',
      source: 'html',
      default: ''
    }
  }),
  save: function save(_ref5) {
    var attributes = _ref5.attributes;
    return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["RawHTML"], null, attributes.content);
  },
  migrate: function migrate(attributes) {
    return attributes;
  }
}];
/* harmony default export */ var paragraph_deprecated = (deprecated);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(15);

// EXTERNAL MODULE: external {"this":["wp","components"]}
var external_this_wp_components_ = __webpack_require__(3);

// EXTERNAL MODULE: external {"this":["wp","data"]}
var external_this_wp_data_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/format-ltr.js


/**
 * WordPress dependencies
 */

var formatLtr = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M5.52 2h7.43c.55 0 1 .45 1 1s-.45 1-1 1h-1v13c0 .55-.45 1-1 1s-1-.45-1-1V5c0-.55-.45-1-1-1s-1 .45-1 1v12c0 .55-.45 1-1 1s-1-.45-1-1v-5.96h-.43C3.02 11.04 1 9.02 1 6.52S3.02 2 5.52 2zM14 14l5-4-5-4v8z"
}));
/* harmony default export */ var format_ltr = (formatLtr);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/paragraph/edit.js




function edit_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function edit_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { edit_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { edit_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */








/**
 * Browser dependencies
 */

var edit_window = window,
    edit_getComputedStyle = edit_window.getComputedStyle;
var querySelector = window.document.querySelector.bind(document);
var edit_name = 'core/paragraph';
var PARAGRAPH_DROP_CAP_SELECTOR = 'p.has-drop-cap';

function ParagraphRTLToolbar(_ref) {
  var direction = _ref.direction,
      setDirection = _ref.setDirection;
  var isRTL = Object(external_this_wp_data_["useSelect"])(function (select) {
    return !!select('core/block-editor').getSettings().isRTL;
  }, []);
  return isRTL && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToolbarGroup"], {
    controls: [{
      icon: format_ltr,
      title: Object(external_this_wp_i18n_["_x"])('Left to right', 'editor button'),
      isActive: direction === 'ltr',
      onClick: function onClick() {
        setDirection(direction === 'ltr' ? undefined : 'ltr');
      }
    }]
  });
}

function useDropCap(isDropCap, fontSize, styleFontSize) {
  var isDisabled = !Object(external_this_wp_blockEditor_["__experimentalUseEditorFeature"])('typography.dropCap');

  var _useState = Object(external_this_wp_element_["useState"])(),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      minimumHeight = _useState2[0],
      setMinimumHeight = _useState2[1];

  var _useSelect = Object(external_this_wp_data_["useSelect"])(function (select) {
    return select('core/block-editor').getSettings();
  }),
      fontSizes = _useSelect.fontSizes;

  var fontSizeObject = Object(external_this_wp_blockEditor_["getFontSize"])(fontSizes, fontSize, styleFontSize);
  Object(external_this_wp_element_["useEffect"])(function () {
    if (isDisabled) {
      return;
    }

    var element = querySelector(PARAGRAPH_DROP_CAP_SELECTOR);

    if (isDropCap && element) {
      setMinimumHeight(edit_getComputedStyle(element, 'first-letter').lineHeight);
    } else if (minimumHeight) {
      setMinimumHeight(undefined);
    }
  }, [isDisabled, isDropCap, minimumHeight, setMinimumHeight, fontSizeObject.size]);
  return [!isDisabled, minimumHeight];
}

function ParagraphBlock(_ref2) {
  var attributes = _ref2.attributes,
      mergeBlocks = _ref2.mergeBlocks,
      onReplace = _ref2.onReplace,
      onRemove = _ref2.onRemove,
      setAttributes = _ref2.setAttributes;
  var align = attributes.align,
      content = attributes.content,
      direction = attributes.direction,
      dropCap = attributes.dropCap,
      placeholder = attributes.placeholder,
      fontSize = attributes.fontSize,
      style = attributes.style;
  var ref = Object(external_this_wp_element_["useRef"])();

  var _useDropCap = useDropCap(dropCap, fontSize, style === null || style === void 0 ? void 0 : style.fontSize),
      _useDropCap2 = Object(slicedToArray["a" /* default */])(_useDropCap, 2),
      isDropCapEnabled = _useDropCap2[0],
      dropCapMinimumHeight = _useDropCap2[1];

  var styles = {
    direction: direction,
    minHeight: dropCapMinimumHeight
  };
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["AlignmentToolbar"], {
    value: align,
    onChange: function onChange(newAlign) {
      return setAttributes({
        align: newAlign
      });
    }
  }), Object(external_this_wp_element_["createElement"])(ParagraphRTLToolbar, {
    direction: direction,
    setDirection: function setDirection(newDirection) {
      return setAttributes({
        direction: newDirection
      });
    }
  })), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InspectorControls"], null, isDropCapEnabled && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
    title: Object(external_this_wp_i18n_["__"])('Text settings')
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
    label: Object(external_this_wp_i18n_["__"])('Drop cap'),
    checked: !!dropCap,
    onChange: function onChange() {
      return setAttributes({
        dropCap: !dropCap
      });
    },
    help: dropCap ? Object(external_this_wp_i18n_["__"])('Showing large initial letter.') : Object(external_this_wp_i18n_["__"])('Toggle to show a large initial letter.')
  }))), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"], {
    ref: ref,
    identifier: "content",
    tagName: external_this_wp_blockEditor_["__experimentalBlock"].p,
    className: classnames_default()(Object(defineProperty["a" /* default */])({
      'has-drop-cap': dropCap
    }, "has-text-align-".concat(align), align)),
    style: styles,
    value: content,
    onChange: function onChange(newContent) {
      return setAttributes({
        content: newContent
      });
    },
    onSplit: function onSplit(value) {
      if (!value) {
        return Object(external_this_wp_blocks_["createBlock"])(edit_name);
      }

      return Object(external_this_wp_blocks_["createBlock"])(edit_name, edit_objectSpread({}, attributes, {
        content: value
      }));
    },
    onMerge: mergeBlocks,
    onReplace: onReplace,
    onRemove: onRemove,
    "aria-label": content ? Object(external_this_wp_i18n_["__"])('Paragraph block') : Object(external_this_wp_i18n_["__"])('Empty block; start writing or type forward slash to choose a block'),
    placeholder: placeholder || Object(external_this_wp_i18n_["__"])('Start writing or type / to choose a block'),
    __unstableEmbedURLOnPaste: true,
    __unstableAllowPrefixTransformations: true
  }));
}

/* harmony default export */ var paragraph_edit = (ParagraphBlock);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/paragraph/save.js



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


function save_save(_ref) {
  var attributes = _ref.attributes;
  var align = attributes.align,
      content = attributes.content,
      dropCap = attributes.dropCap,
      direction = attributes.direction;
  var className = classnames_default()(Object(defineProperty["a" /* default */])({
    'has-drop-cap': dropCap
  }, "has-text-align-".concat(align), align));
  return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
    tagName: "p",
    className: className ? className : undefined,
    value: content,
    dir: direction
  });
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/paragraph/transforms.js
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */

var _name$category$attrib = {
  name: "core/paragraph",
  category: "text",
  attributes: {
    align: {
      type: "string"
    },
    content: {
      type: "string",
      source: "html",
      selector: "p",
      "default": ""
    },
    dropCap: {
      type: "boolean",
      "default": false
    },
    placeholder: {
      type: "string"
    },
    direction: {
      type: "string",
      "enum": ["ltr", "rtl"]
    }
  },
  supports: {
    className: false,
    lightBlockWrapper: true,
    __experimentalColor: {
      linkColor: true
    },
    __experimentalFontSize: true,
    __experimentalLineHeight: true,
    __experimentalFeatures: {
      typography: {
        dropCap: true
      }
    },
    __experimentalSelector: "p",
    __unstablePasteTextInline: true
  }
},
    transforms_name = _name$category$attrib.name;
var transforms_transforms = {
  from: [{
    type: 'raw',
    // Paragraph is a fallback and should be matched last.
    priority: 20,
    selector: 'p',
    schema: function schema(_ref) {
      var phrasingContentSchema = _ref.phrasingContentSchema,
          isPaste = _ref.isPaste;
      return {
        p: {
          children: phrasingContentSchema,
          attributes: isPaste ? [] : ['style']
        }
      };
    },
    transform: function transform(node) {
      var attributes = Object(external_this_wp_blocks_["getBlockAttributes"])(transforms_name, node.outerHTML);

      var _ref2 = node.style || {},
          textAlign = _ref2.textAlign;

      if (textAlign === 'left' || textAlign === 'center' || textAlign === 'right') {
        attributes.align = textAlign;
      }

      return Object(external_this_wp_blocks_["createBlock"])(transforms_name, attributes);
    }
  }]
};
/* harmony default export */ var paragraph_transforms = (transforms_transforms);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/paragraph/index.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



var paragraph_metadata = {
  name: "core/paragraph",
  category: "text",
  attributes: {
    align: {
      type: "string"
    },
    content: {
      type: "string",
      source: "html",
      selector: "p",
      "default": ""
    },
    dropCap: {
      type: "boolean",
      "default": false
    },
    placeholder: {
      type: "string"
    },
    direction: {
      type: "string",
      "enum": ["ltr", "rtl"]
    }
  },
  supports: {
    className: false,
    lightBlockWrapper: true,
    __experimentalColor: {
      linkColor: true
    },
    __experimentalFontSize: true,
    __experimentalLineHeight: true,
    __experimentalFeatures: {
      typography: {
        dropCap: true
      }
    },
    __experimentalSelector: "p",
    __unstablePasteTextInline: true
  }
};


var paragraph_name = paragraph_metadata.name;

var paragraph_settings = {
  title: Object(external_this_wp_i18n_["__"])('Paragraph'),
  description: Object(external_this_wp_i18n_["__"])('Start with the building block of all narrative.'),
  icon: library_paragraph,
  keywords: [Object(external_this_wp_i18n_["__"])('text')],
  example: {
    attributes: {
      content: Object(external_this_wp_i18n_["__"])('In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing.'),
      style: {
        typography: {
          fontSize: 28
        }
      },
      dropCap: true
    }
  },
  __experimentalLabel: function __experimentalLabel(attributes, _ref) {
    var context = _ref.context;

    if (context === 'accessibility') {
      var content = attributes.content;
      return Object(external_this_lodash_["isEmpty"])(content) ? Object(external_this_wp_i18n_["__"])('Empty') : content;
    }
  },
  transforms: paragraph_transforms,
  deprecated: paragraph_deprecated,
  merge: function merge(attributes, attributesToMerge) {
    return {
      content: (attributes.content || '') + (attributesToMerge.content || '')
    };
  },
  edit: paragraph_edit,
  save: save_save
};

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/image.js


/**
 * WordPress dependencies
 */

var image_image = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.5h14c.3 0 .5.2.5.5v8.4l-3-2.9c-.3-.3-.8-.3-1 0L11.9 14 9 12c-.3-.2-.6-.2-.8 0l-3.6 2.6V5c-.1-.3.1-.5.4-.5zm14 15H5c-.3 0-.5-.2-.5-.5v-2.4l4.1-3 3 1.9c.3.2.7.2.9-.1L16 12l3.5 3.4V19c0 .3-.2.5-.5.5z"
}));
/* harmony default export */ var library_image = (image_image);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/image/deprecated.js




/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


var image_deprecated_blockAttributes = {
  align: {
    type: 'string'
  },
  url: {
    type: 'string',
    source: 'attribute',
    selector: 'img',
    attribute: 'src'
  },
  alt: {
    type: 'string',
    source: 'attribute',
    selector: 'img',
    attribute: 'alt',
    default: ''
  },
  caption: {
    type: 'string',
    source: 'html',
    selector: 'figcaption'
  },
  href: {
    type: 'string',
    source: 'attribute',
    selector: 'figure > a',
    attribute: 'href'
  },
  rel: {
    type: 'string',
    source: 'attribute',
    selector: 'figure > a',
    attribute: 'rel'
  },
  linkClass: {
    type: 'string',
    source: 'attribute',
    selector: 'figure > a',
    attribute: 'class'
  },
  id: {
    type: 'number'
  },
  width: {
    type: 'number'
  },
  height: {
    type: 'number'
  },
  linkDestination: {
    type: 'string',
    default: 'none'
  },
  linkTarget: {
    type: 'string',
    source: 'attribute',
    selector: 'figure > a',
    attribute: 'target'
  }
};
var deprecated_deprecated = [{
  attributes: image_deprecated_blockAttributes,
  save: function save(_ref) {
    var _classnames;

    var attributes = _ref.attributes;
    var url = attributes.url,
        alt = attributes.alt,
        caption = attributes.caption,
        align = attributes.align,
        href = attributes.href,
        width = attributes.width,
        height = attributes.height,
        id = attributes.id;
    var classes = classnames_default()((_classnames = {}, Object(defineProperty["a" /* default */])(_classnames, "align".concat(align), align), Object(defineProperty["a" /* default */])(_classnames, 'is-resized', width || height), _classnames));
    var image = Object(external_this_wp_element_["createElement"])("img", {
      src: url,
      alt: alt,
      className: id ? "wp-image-".concat(id) : null,
      width: width,
      height: height
    });
    return Object(external_this_wp_element_["createElement"])("figure", {
      className: classes
    }, href ? Object(external_this_wp_element_["createElement"])("a", {
      href: href
    }, image) : image, !external_this_wp_blockEditor_["RichText"].isEmpty(caption) && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      tagName: "figcaption",
      value: caption
    }));
  }
}, {
  attributes: image_deprecated_blockAttributes,
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    var url = attributes.url,
        alt = attributes.alt,
        caption = attributes.caption,
        align = attributes.align,
        href = attributes.href,
        width = attributes.width,
        height = attributes.height,
        id = attributes.id;
    var image = Object(external_this_wp_element_["createElement"])("img", {
      src: url,
      alt: alt,
      className: id ? "wp-image-".concat(id) : null,
      width: width,
      height: height
    });
    return Object(external_this_wp_element_["createElement"])("figure", {
      className: align ? "align".concat(align) : null
    }, href ? Object(external_this_wp_element_["createElement"])("a", {
      href: href
    }, image) : image, !external_this_wp_blockEditor_["RichText"].isEmpty(caption) && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      tagName: "figcaption",
      value: caption
    }));
  }
}, {
  attributes: image_deprecated_blockAttributes,
  save: function save(_ref3) {
    var attributes = _ref3.attributes;
    var url = attributes.url,
        alt = attributes.alt,
        caption = attributes.caption,
        align = attributes.align,
        href = attributes.href,
        width = attributes.width,
        height = attributes.height;
    var extraImageProps = width || height ? {
      width: width,
      height: height
    } : {};
    var image = Object(external_this_wp_element_["createElement"])("img", Object(esm_extends["a" /* default */])({
      src: url,
      alt: alt
    }, extraImageProps));
    var figureStyle = {};

    if (width) {
      figureStyle = {
        width: width
      };
    } else if (align === 'left' || align === 'right') {
      figureStyle = {
        maxWidth: '50%'
      };
    }

    return Object(external_this_wp_element_["createElement"])("figure", {
      className: align ? "align".concat(align) : null,
      style: figureStyle
    }, href ? Object(external_this_wp_element_["createElement"])("a", {
      href: href
    }, image) : image, !external_this_wp_blockEditor_["RichText"].isEmpty(caption) && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      tagName: "figcaption",
      value: caption
    }));
  }
}];
/* harmony default export */ var image_deprecated = (deprecated_deprecated);

// EXTERNAL MODULE: external {"this":["wp","blob"]}
var external_this_wp_blob_ = __webpack_require__(44);

// EXTERNAL MODULE: external {"this":["wp","compose"]}
var external_this_wp_compose_ = __webpack_require__(9);

// EXTERNAL MODULE: external {"this":["wp","url"]}
var external_this_wp_url_ = __webpack_require__(30);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/crop.js


/**
 * WordPress dependencies
 */

var crop_crop = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M17.5 7v8H19V7c0-1.1-.9-2-2-2H9v1.5h8c.3 0 .5.2.5.5zM7 17.5c-.3 0-.5-.2-.5-.5V1H5v4H1v1.5h4V17c0 1.1.9 2 2 2h10.5v4H19v-4h4v-1.5H7z"
}));
/* harmony default export */ var library_crop = (crop_crop);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/embed/icons.js


/**
 * WordPress dependencies
 */

var embedContentIcon = Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm.5 16c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V9.8l4.7-5.3H19c.3 0 .5.2.5.5v14zm-6-9.5L16 12l-2.5 2.8 1.1 1L18 12l-3.5-3.5-1 1zm-3 0l-1-1L6 12l3.5 3.8 1.1-1L8 12l2.5-2.5z"
}));
var embedAudioIcon = Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm.5 16c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V9.8l4.7-5.3H19c.3 0 .5.2.5.5v14zM13.2 7.7c-.4.4-.7 1.1-.7 1.9v3.7c-.4-.3-.8-.4-1.3-.4-1.2 0-2.2 1-2.2 2.2 0 1.2 1 2.2 2.2 2.2.5 0 1-.2 1.4-.5.9-.6 1.4-1.6 1.4-2.6V9.6c0-.4.1-.6.2-.8.3-.3 1-.3 1.6-.3h.2V7h-.2c-.7 0-1.8 0-2.6.7z"
}));
var embedPhotoIcon = Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9.2 4.5H19c.3 0 .5.2.5.5v8.4l-3-2.9c-.3-.3-.8-.3-1 0L11.9 14 9 12c-.3-.2-.6-.2-.8 0l-3.6 2.6V9.8l4.6-5.3zm9.8 15H5c-.3 0-.5-.2-.5-.5v-2.4l4.1-3 3 1.9c.3.2.7.2.9-.1L16 12l3.5 3.4V19c0 .3-.2.5-.5.5z"
}));
var embedVideoIcon = Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm.5 16c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V9.8l4.7-5.3H19c.3 0 .5.2.5.5v14zM10 15l5-3-5-3v6z"
}));
var embedTwitterIcon = {
  foreground: '#1da1f2',
  src: Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["G"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
    d: "M22.23 5.924c-.736.326-1.527.547-2.357.646.847-.508 1.498-1.312 1.804-2.27-.793.47-1.67.812-2.606.996C18.325 4.498 17.258 4 16.078 4c-2.266 0-4.103 1.837-4.103 4.103 0 .322.036.635.106.935-3.41-.17-6.433-1.804-8.457-4.287-.353.607-.556 1.312-.556 2.064 0 1.424.724 2.68 1.825 3.415-.673-.022-1.305-.207-1.86-.514v.052c0 1.988 1.415 3.647 3.293 4.023-.344.095-.707.145-1.08.145-.265 0-.522-.026-.773-.074.522 1.63 2.038 2.817 3.833 2.85-1.404 1.1-3.174 1.757-5.096 1.757-.332 0-.66-.02-.98-.057 1.816 1.164 3.973 1.843 6.29 1.843 7.547 0 11.675-6.252 11.675-11.675 0-.178-.004-.355-.012-.53.802-.578 1.497-1.3 2.047-2.124z"
  })))
};
var embedYouTubeIcon = {
  foreground: '#ff0000',
  src: Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
    viewBox: "0 0 24 24"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
    d: "M21.8 8s-.195-1.377-.795-1.984c-.76-.797-1.613-.8-2.004-.847-2.798-.203-6.996-.203-6.996-.203h-.01s-4.197 0-6.996.202c-.39.046-1.242.05-2.003.846C2.395 6.623 2.2 8 2.2 8S2 9.62 2 11.24v1.517c0 1.618.2 3.237.2 3.237s.195 1.378.795 1.985c.76.797 1.76.77 2.205.855 1.6.153 6.8.2 6.8.2s4.203-.005 7-.208c.392-.047 1.244-.05 2.005-.847.6-.607.795-1.985.795-1.985s.2-1.618.2-3.237v-1.517C22 9.62 21.8 8 21.8 8zM9.935 14.595v-5.62l5.403 2.82-5.403 2.8z"
  }))
};
var embedFacebookIcon = {
  foreground: '#3b5998',
  src: Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
    viewBox: "0 0 24 24"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
    d: "M20 3H4c-.6 0-1 .4-1 1v16c0 .5.4 1 1 1h8.6v-7h-2.3v-2.7h2.3v-2c0-2.3 1.4-3.6 3.5-3.6 1 0 1.8.1 2.1.1v2.4h-1.4c-1.1 0-1.3.5-1.3 1.3v1.7h2.7l-.4 2.8h-2.3v7H20c.5 0 1-.4 1-1V4c0-.6-.4-1-1-1z"
  }))
};
var embedInstagramIcon = Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["G"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
  d: "M12 4.622c2.403 0 2.688.01 3.637.052.877.04 1.354.187 1.67.31.42.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.67.043.95.052 1.235.052 3.638s-.01 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.42-.358.72-.673 1.036-.315.315-.615.51-1.035.673-.317.123-.794.27-1.67.31-.95.043-1.234.052-3.638.052s-2.688-.01-3.637-.052c-.877-.04-1.354-.187-1.67-.31-.42-.163-.72-.358-1.036-.673-.315-.315-.51-.615-.673-1.035-.123-.317-.27-.794-.31-1.67-.043-.95-.052-1.235-.052-3.638s.01-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.42.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.67-.31.95-.043 1.235-.052 3.638-.052M12 3c-2.444 0-2.75.01-3.71.054s-1.613.196-2.185.418c-.592.23-1.094.538-1.594 1.04-.5.5-.807 1-1.037 1.593-.223.572-.375 1.226-.42 2.184C3.01 9.25 3 9.555 3 12s.01 2.75.054 3.71.196 1.613.418 2.186c.23.592.538 1.094 1.038 1.594s1.002.808 1.594 1.038c.572.222 1.227.375 2.185.418.96.044 1.266.054 3.71.054s2.75-.01 3.71-.054 1.613-.196 2.186-.418c.592-.23 1.094-.538 1.594-1.038s.808-1.002 1.038-1.594c.222-.572.375-1.227.418-2.185.044-.96.054-1.266.054-3.71s-.01-2.75-.054-3.71-.196-1.613-.418-2.186c-.23-.592-.538-1.094-1.038-1.594s-1.002-.808-1.594-1.038c-.572-.222-1.227-.375-2.185-.418C14.75 3.01 14.445 3 12 3zm0 4.378c-2.552 0-4.622 2.07-4.622 4.622s2.07 4.622 4.622 4.622 4.622-2.07 4.622-4.622S14.552 7.378 12 7.378zM12 15c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm4.804-8.884c-.596 0-1.08.484-1.08 1.08s.484 1.08 1.08 1.08c.596 0 1.08-.484 1.08-1.08s-.483-1.08-1.08-1.08z"
})));
var embedWordPressIcon = {
  foreground: '#0073AA',
  src: Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
    viewBox: "0 0 24 24"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["G"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
    d: "M12.158 12.786l-2.698 7.84c.806.236 1.657.365 2.54.365 1.047 0 2.05-.18 2.986-.51-.024-.037-.046-.078-.065-.123l-2.762-7.57zM3.008 12c0 3.56 2.07 6.634 5.068 8.092L3.788 8.342c-.5 1.117-.78 2.354-.78 3.658zm15.06-.454c0-1.112-.398-1.88-.74-2.48-.456-.74-.883-1.368-.883-2.11 0-.825.627-1.595 1.51-1.595.04 0 .078.006.116.008-1.598-1.464-3.73-2.36-6.07-2.36-3.14 0-5.904 1.613-7.512 4.053.21.008.41.012.58.012.94 0 2.395-.114 2.395-.114.484-.028.54.684.057.74 0 0-.487.058-1.03.086l3.275 9.74 1.968-5.902-1.4-3.838c-.485-.028-.944-.085-.944-.085-.486-.03-.43-.77.056-.742 0 0 1.484.114 2.368.114.94 0 2.397-.114 2.397-.114.486-.028.543.684.058.74 0 0-.488.058-1.03.086l3.25 9.665.897-2.997c.456-1.17.684-2.137.684-2.907zm1.82-3.86c.04.286.06.593.06.924 0 .912-.17 1.938-.683 3.22l-2.746 7.94c2.672-1.558 4.47-4.454 4.47-7.77 0-1.564-.4-3.033-1.1-4.314zM12 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"
  })))
};
var embedSpotifyIcon = {
  foreground: '#1db954',
  src: Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
    viewBox: "0 0 24 24"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
    d: "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2m4.586 14.424c-.18.295-.563.387-.857.207-2.35-1.434-5.305-1.76-8.786-.963-.335.077-.67-.133-.746-.47-.077-.334.132-.67.47-.745 3.808-.87 7.076-.496 9.712 1.115.293.18.386.563.206.857M17.81 13.7c-.226.367-.706.482-1.072.257-2.687-1.652-6.785-2.13-9.965-1.166-.413.127-.848-.106-.973-.517-.125-.413.108-.848.52-.973 3.632-1.102 8.147-.568 11.234 1.328.366.226.48.707.256 1.072m.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71c-.493.15-1.016-.13-1.166-.624-.148-.495.13-1.017.625-1.167 3.532-1.073 9.404-.866 13.115 1.337.445.264.59.838.327 1.282-.264.443-.838.59-1.282.325"
  }))
};
var embedFlickrIcon = Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
  d: "m6.5 7c-2.75 0-5 2.25-5 5s2.25 5 5 5 5-2.25 5-5-2.25-5-5-5zm11 0c-2.75 0-5 2.25-5 5s2.25 5 5 5 5-2.25 5-5-2.25-5-5-5z"
}));
var embedVimeoIcon = {
  foreground: '#1ab7ea',
  src: Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["G"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
    d: "M22.396 7.164c-.093 2.026-1.507 4.8-4.245 8.32C15.323 19.16 12.93 21 10.97 21c-1.214 0-2.24-1.12-3.08-3.36-.56-2.052-1.118-4.105-1.68-6.158-.622-2.24-1.29-3.36-2.004-3.36-.156 0-.7.328-1.634.98l-.978-1.26c1.027-.903 2.04-1.806 3.037-2.71C6 3.95 7.03 3.328 7.716 3.265c1.62-.156 2.616.95 2.99 3.32.404 2.558.685 4.148.84 4.77.468 2.12.982 3.18 1.543 3.18.435 0 1.09-.687 1.963-2.064.872-1.376 1.34-2.422 1.402-3.142.125-1.187-.343-1.782-1.4-1.782-.5 0-1.013.115-1.542.34 1.023-3.35 2.977-4.976 5.862-4.883 2.14.063 3.148 1.45 3.024 4.16z"
  })))
};
var embedRedditIcon = Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
  d: "M22 11.816c0-1.256-1.02-2.277-2.277-2.277-.593 0-1.122.24-1.526.613-1.48-.965-3.455-1.594-5.647-1.69l1.17-3.702 3.18.75c.01 1.027.847 1.86 1.877 1.86 1.035 0 1.877-.84 1.877-1.877 0-1.035-.842-1.877-1.877-1.877-.77 0-1.43.466-1.72 1.13L13.55 3.92c-.204-.047-.4.067-.46.26l-1.35 4.27c-2.317.037-4.412.67-5.97 1.67-.402-.355-.917-.58-1.493-.58C3.02 9.54 2 10.56 2 11.815c0 .814.433 1.523 1.078 1.925-.037.222-.06.445-.06.673 0 3.292 4.01 5.97 8.94 5.97s8.94-2.678 8.94-5.97c0-.214-.02-.424-.052-.632.687-.39 1.154-1.12 1.154-1.964zm-3.224-7.422c.606 0 1.1.493 1.1 1.1s-.493 1.1-1.1 1.1-1.1-.494-1.1-1.1.493-1.1 1.1-1.1zm-16 7.422c0-.827.673-1.5 1.5-1.5.313 0 .598.103.838.27-.85.675-1.477 1.478-1.812 2.36-.32-.274-.525-.676-.525-1.13zm9.183 7.79c-4.502 0-8.165-2.33-8.165-5.193S7.457 9.22 11.96 9.22s8.163 2.33 8.163 5.193-3.663 5.193-8.164 5.193zM20.635 13c-.326-.89-.948-1.7-1.797-2.383.247-.186.55-.3.882-.3.827 0 1.5.672 1.5 1.5 0 .482-.23.91-.586 1.184zm-11.64 1.704c-.76 0-1.397-.616-1.397-1.376 0-.76.636-1.397 1.396-1.397.76 0 1.376.638 1.376 1.398 0 .76-.616 1.376-1.376 1.376zm7.405-1.376c0 .76-.615 1.376-1.375 1.376s-1.4-.616-1.4-1.376c0-.76.64-1.397 1.4-1.397.76 0 1.376.638 1.376 1.398zm-1.17 3.38c.15.152.15.398 0 .55-.675.674-1.728 1.002-3.22 1.002l-.01-.002-.012.002c-1.492 0-2.544-.328-3.218-1.002-.152-.152-.152-.398 0-.55.152-.152.4-.15.55 0 .52.52 1.394.775 2.67.775l.01.002.01-.002c1.276 0 2.15-.253 2.67-.775.15-.152.398-.152.55 0z"
}));
var embedTumblrIcon = {
  foreground: '#35465c',
  src: Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
    viewBox: "0 0 24 24"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
    d: "M19 3H5a2 2 0 00-2 2v14c0 1.1.9 2 2 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-5.69 14.66c-2.72 0-3.1-1.9-3.1-3.16v-3.56H8.49V8.99c1.7-.62 2.54-1.99 2.64-2.87 0-.06.06-.41.06-.58h1.9v3.1h2.17v2.3h-2.18v3.1c0 .47.13 1.3 1.2 1.26h1.1v2.36c-1.01.02-2.07 0-2.07 0z"
  }))
};
var embedAmazonIcon = Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
  d: "M18.42 14.58c-.51-.66-1.05-1.23-1.05-2.5V7.87c0-1.8.15-3.45-1.2-4.68-1.05-1.02-2.79-1.35-4.14-1.35-2.6 0-5.52.96-6.12 4.14-.06.36.18.54.4.57l2.66.3c.24-.03.42-.27.48-.5.24-1.12 1.17-1.63 2.2-1.63.56 0 1.22.21 1.55.7.4.56.33 1.31.33 1.97v.36c-1.59.18-3.66.27-5.16.93a4.63 4.63 0 0 0-2.93 4.44c0 2.82 1.8 4.23 4.1 4.23 1.95 0 3.03-.45 4.53-1.98.51.72.66 1.08 1.59 1.83.18.09.45.09.63-.1v.04l2.1-1.8c.24-.21.2-.48.03-.75zm-5.4-1.2c-.45.75-1.14 1.23-1.92 1.23-1.05 0-1.65-.81-1.65-1.98 0-2.31 2.1-2.73 4.08-2.73v.6c0 1.05.03 1.92-.5 2.88z"
}), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
  d: "M21.69 19.2a17.62 17.62 0 0 1-21.6-1.57c-.23-.2 0-.5.28-.33a23.88 23.88 0 0 0 20.93 1.3c.45-.19.84.3.39.6z"
}), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
  d: "M22.8 17.96c-.36-.45-2.22-.2-3.1-.12-.23.03-.3-.18-.05-.36 1.5-1.05 3.96-.75 4.26-.39.3.36-.1 2.82-1.5 4.02-.21.18-.42.1-.3-.15.3-.8 1.02-2.58.69-3z"
}));
var embedAnimotoIcon = Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
  d: "m.0206909 21 19.8160091-13.07806 3.5831 6.20826z",
  fill: "#4bc7ee"
}), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
  d: "m23.7254 19.0205-10.1074-17.18468c-.6421-1.114428-1.7087-1.114428-2.3249 0l-11.2931 19.16418h22.5655c1.279 0 1.8019-.8905 1.1599-1.9795z",
  fill: "#d4cdcb"
}), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
  d: "m.0206909 21 15.2439091-16.38571 4.3029 7.32271z",
  fill: "#c3d82e"
}), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
  d: "m13.618 1.83582c-.6421-1.114428-1.7087-1.114428-2.3249 0l-11.2931 19.16418 15.2646-16.38573z",
  fill: "#e4ecb0"
}), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
  d: "m.0206909 21 19.5468091-9.063 1.6621 2.8344z",
  fill: "#209dbd"
}), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
  d: "m.0206909 21 17.9209091-11.82623 1.6259 2.76323z",
  fill: "#7cb3c9"
}));
var embedDailymotionIcon = Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
  d: "m12.1479 18.5957c-2.4949 0-4.28131-1.7558-4.28131-4.0658 0-2.2176 1.78641-4.0965 4.09651-4.0965 2.2793 0 4.0349 1.7864 4.0349 4.1581 0 2.2794-1.7556 4.0042-3.8501 4.0042zm8.3521-18.5957-4.5329 1v7c-1.1088-1.41691-2.8028-1.8787-4.8049-1.8787-2.09443 0-3.97329.76993-5.5133 2.27917-1.72483 1.66323-2.6489 3.78863-2.6489 6.16033 0 2.5873.98562 4.8049 2.89526 6.499 1.44763 1.2936 3.17251 1.9402 5.17454 1.9402 1.9713 0 3.4498-.5236 4.8973-1.9402v1.9402h4.5329c0-7.6359 0-15.3641 0-23z",
  fill: "#333436"
}));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/embed/core-embeds.js
/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */



var common = [{
  name: 'core-embed/twitter',
  settings: {
    title: 'Twitter',
    icon: embedTwitterIcon,
    keywords: ['tweet', Object(external_this_wp_i18n_["__"])('social')],
    description: Object(external_this_wp_i18n_["__"])('Embed a tweet.')
  },
  patterns: [/^https?:\/\/(www\.)?twitter\.com\/.+/i]
}, {
  name: 'core-embed/youtube',
  settings: {
    title: 'YouTube',
    icon: embedYouTubeIcon,
    keywords: [Object(external_this_wp_i18n_["__"])('music'), Object(external_this_wp_i18n_["__"])('video')],
    description: Object(external_this_wp_i18n_["__"])('Embed a YouTube video.')
  },
  patterns: [/^https?:\/\/((m|www)\.)?youtube\.com\/.+/i, /^https?:\/\/youtu\.be\/.+/i]
}, {
  name: 'core-embed/facebook',
  settings: {
    title: 'Facebook',
    icon: embedFacebookIcon,
    keywords: [Object(external_this_wp_i18n_["__"])('social')],
    description: Object(external_this_wp_i18n_["__"])('Embed a Facebook post.'),
    previewable: false
  },
  patterns: [/^https?:\/\/www\.facebook.com\/.+/i]
}, {
  name: 'core-embed/instagram',
  settings: {
    title: 'Instagram',
    icon: embedInstagramIcon,
    keywords: [Object(external_this_wp_i18n_["__"])('image'), Object(external_this_wp_i18n_["__"])('social')],
    description: Object(external_this_wp_i18n_["__"])('Embed an Instagram post.')
  },
  patterns: [/^https?:\/\/(www\.)?instagr(\.am|am\.com)\/.+/i]
}, {
  name: 'core-embed/wordpress',
  settings: {
    title: 'WordPress',
    icon: embedWordPressIcon,
    keywords: [Object(external_this_wp_i18n_["__"])('post'), Object(external_this_wp_i18n_["__"])('blog')],
    responsive: false,
    description: Object(external_this_wp_i18n_["__"])('Embed a WordPress post.')
  }
}, {
  name: 'core-embed/soundcloud',
  settings: {
    title: 'SoundCloud',
    icon: embedAudioIcon,
    keywords: [Object(external_this_wp_i18n_["__"])('music'), Object(external_this_wp_i18n_["__"])('audio')],
    description: Object(external_this_wp_i18n_["__"])('Embed SoundCloud content.')
  },
  patterns: [/^https?:\/\/(www\.)?soundcloud\.com\/.+/i]
}, {
  name: 'core-embed/spotify',
  settings: {
    title: 'Spotify',
    icon: embedSpotifyIcon,
    keywords: [Object(external_this_wp_i18n_["__"])('music'), Object(external_this_wp_i18n_["__"])('audio')],
    description: Object(external_this_wp_i18n_["__"])('Embed Spotify content.')
  },
  patterns: [/^https?:\/\/(open|play)\.spotify\.com\/.+/i]
}, {
  name: 'core-embed/flickr',
  settings: {
    title: 'Flickr',
    icon: embedFlickrIcon,
    keywords: [Object(external_this_wp_i18n_["__"])('image')],
    description: Object(external_this_wp_i18n_["__"])('Embed Flickr content.')
  },
  patterns: [/^https?:\/\/(www\.)?flickr\.com\/.+/i, /^https?:\/\/flic\.kr\/.+/i]
}, {
  name: 'core-embed/vimeo',
  settings: {
    title: 'Vimeo',
    icon: embedVimeoIcon,
    keywords: [Object(external_this_wp_i18n_["__"])('video')],
    description: Object(external_this_wp_i18n_["__"])('Embed a Vimeo video.')
  },
  patterns: [/^https?:\/\/(www\.)?vimeo\.com\/.+/i]
}];
var others = [{
  name: 'core-embed/animoto',
  settings: {
    title: 'Animoto',
    icon: embedAnimotoIcon,
    description: Object(external_this_wp_i18n_["__"])('Embed an Animoto video.')
  },
  patterns: [/^https?:\/\/(www\.)?(animoto|video214)\.com\/.+/i]
}, {
  name: 'core-embed/cloudup',
  settings: {
    title: 'Cloudup',
    icon: embedContentIcon,
    description: Object(external_this_wp_i18n_["__"])('Embed Cloudup content.')
  },
  patterns: [/^https?:\/\/cloudup\.com\/.+/i]
}, {
  // Deprecated since CollegeHumor content is now powered by YouTube
  name: 'core-embed/collegehumor',
  settings: {
    title: 'CollegeHumor',
    icon: embedVideoIcon,
    description: Object(external_this_wp_i18n_["__"])('Embed CollegeHumor content.'),
    supports: {
      inserter: false
    }
  },
  patterns: []
}, {
  name: 'core-embed/crowdsignal',
  settings: {
    title: 'Crowdsignal',
    icon: embedContentIcon,
    keywords: ['polldaddy', Object(external_this_wp_i18n_["__"])('survey')],
    transform: [{
      type: 'block',
      blocks: ['core-embed/polldaddy'],
      transform: function transform(content) {
        return Object(external_this_wp_blocks_["createBlock"])('core-embed/crowdsignal', {
          content: content
        });
      }
    }],
    description: Object(external_this_wp_i18n_["__"])('Embed Crowdsignal (formerly Polldaddy) content.')
  },
  patterns: [/^https?:\/\/((.+\.)?polldaddy\.com|poll\.fm|.+\.survey\.fm)\/.+/i]
}, {
  name: 'core-embed/dailymotion',
  settings: {
    title: 'Dailymotion',
    icon: embedDailymotionIcon,
    keywords: [Object(external_this_wp_i18n_["__"])('video')],
    description: Object(external_this_wp_i18n_["__"])('Embed a Dailymotion video.')
  },
  patterns: [/^https?:\/\/(www\.)?dailymotion\.com\/.+/i]
}, {
  name: 'core-embed/hulu',
  settings: {
    title: 'Hulu',
    icon: embedVideoIcon,
    keywords: [Object(external_this_wp_i18n_["__"])('video')],
    description: Object(external_this_wp_i18n_["__"])('Embed Hulu content.')
  },
  patterns: [/^https?:\/\/(www\.)?hulu\.com\/.+/i]
}, {
  name: 'core-embed/imgur',
  settings: {
    title: 'Imgur',
    icon: embedPhotoIcon,
    description: Object(external_this_wp_i18n_["__"])('Embed Imgur content.')
  },
  patterns: [/^https?:\/\/(.+\.)?imgur\.com\/.+/i]
}, {
  name: 'core-embed/issuu',
  settings: {
    title: 'Issuu',
    icon: embedContentIcon,
    description: Object(external_this_wp_i18n_["__"])('Embed Issuu content.')
  },
  patterns: [/^https?:\/\/(www\.)?issuu\.com\/.+/i]
}, {
  name: 'core-embed/kickstarter',
  settings: {
    title: 'Kickstarter',
    icon: embedContentIcon,
    description: Object(external_this_wp_i18n_["__"])('Embed Kickstarter content.')
  },
  patterns: [/^https?:\/\/(www\.)?kickstarter\.com\/.+/i, /^https?:\/\/kck\.st\/.+/i]
}, {
  name: 'core-embed/meetup-com',
  settings: {
    title: 'Meetup.com',
    icon: embedContentIcon,
    description: Object(external_this_wp_i18n_["__"])('Embed Meetup.com content.')
  },
  patterns: [/^https?:\/\/(www\.)?meetu(\.ps|p\.com)\/.+/i]
}, {
  name: 'core-embed/mixcloud',
  settings: {
    title: 'Mixcloud',
    icon: embedAudioIcon,
    keywords: [Object(external_this_wp_i18n_["__"])('music'), Object(external_this_wp_i18n_["__"])('audio')],
    description: Object(external_this_wp_i18n_["__"])('Embed Mixcloud content.')
  },
  patterns: [/^https?:\/\/(www\.)?mixcloud\.com\/.+/i]
}, {
  // Deprecated in favour of the core-embed/crowdsignal block
  name: 'core-embed/polldaddy',
  settings: {
    title: 'Polldaddy',
    icon: embedContentIcon,
    description: Object(external_this_wp_i18n_["__"])('Embed Polldaddy content.'),
    supports: {
      inserter: false
    }
  },
  patterns: []
}, {
  name: 'core-embed/reddit',
  settings: {
    title: 'Reddit',
    icon: embedRedditIcon,
    description: Object(external_this_wp_i18n_["__"])('Embed a Reddit thread.')
  },
  patterns: [/^https?:\/\/(www\.)?reddit\.com\/.+/i]
}, {
  name: 'core-embed/reverbnation',
  settings: {
    title: 'ReverbNation',
    icon: embedAudioIcon,
    description: Object(external_this_wp_i18n_["__"])('Embed ReverbNation content.')
  },
  patterns: [/^https?:\/\/(www\.)?reverbnation\.com\/.+/i]
}, {
  name: 'core-embed/screencast',
  settings: {
    title: 'Screencast',
    icon: embedVideoIcon,
    description: Object(external_this_wp_i18n_["__"])('Embed Screencast content.')
  },
  patterns: [/^https?:\/\/(www\.)?screencast\.com\/.+/i]
}, {
  name: 'core-embed/scribd',
  settings: {
    title: 'Scribd',
    icon: embedContentIcon,
    description: Object(external_this_wp_i18n_["__"])('Embed Scribd content.')
  },
  patterns: [/^https?:\/\/(www\.)?scribd\.com\/.+/i]
}, {
  name: 'core-embed/slideshare',
  settings: {
    title: 'Slideshare',
    icon: embedContentIcon,
    description: Object(external_this_wp_i18n_["__"])('Embed Slideshare content.')
  },
  patterns: [/^https?:\/\/(.+?\.)?slideshare\.net\/.+/i]
}, {
  name: 'core-embed/smugmug',
  settings: {
    title: 'SmugMug',
    icon: embedPhotoIcon,
    description: Object(external_this_wp_i18n_["__"])('Embed SmugMug content.'),
    previewable: false
  },
  patterns: [/^https?:\/\/(.+\.)?smugmug\.com\/.*/i]
}, {
  // Deprecated in favour of the core-embed/speaker-deck block.
  name: 'core-embed/speaker',
  settings: {
    title: 'Speaker',
    icon: embedAudioIcon,
    supports: {
      inserter: false
    }
  },
  patterns: []
}, {
  name: 'core-embed/speaker-deck',
  settings: {
    title: 'Speaker Deck',
    icon: embedContentIcon,
    transform: [{
      type: 'block',
      blocks: ['core-embed/speaker'],
      transform: function transform(content) {
        return Object(external_this_wp_blocks_["createBlock"])('core-embed/speaker-deck', {
          content: content
        });
      }
    }],
    description: Object(external_this_wp_i18n_["__"])('Embed Speaker Deck content.')
  },
  patterns: [/^https?:\/\/(www\.)?speakerdeck\.com\/.+/i]
}, {
  name: 'core-embed/tiktok',
  settings: {
    title: 'TikTok',
    icon: embedVideoIcon,
    keywords: [Object(external_this_wp_i18n_["__"])('video')],
    description: Object(external_this_wp_i18n_["__"])('Embed a TikTok video.')
  },
  patterns: [/^https?:\/\/(www\.)?tiktok\.com\/.+/i]
}, {
  name: 'core-embed/ted',
  settings: {
    title: 'TED',
    icon: embedVideoIcon,
    description: Object(external_this_wp_i18n_["__"])('Embed a TED video.')
  },
  patterns: [/^https?:\/\/(www\.|embed\.)?ted\.com\/.+/i]
}, {
  name: 'core-embed/tumblr',
  settings: {
    title: 'Tumblr',
    icon: embedTumblrIcon,
    keywords: [Object(external_this_wp_i18n_["__"])('social')],
    description: Object(external_this_wp_i18n_["__"])('Embed a Tumblr post.')
  },
  patterns: [/^https?:\/\/(www\.)?tumblr\.com\/.+/i]
}, {
  name: 'core-embed/videopress',
  settings: {
    title: 'VideoPress',
    icon: embedVideoIcon,
    keywords: [Object(external_this_wp_i18n_["__"])('video')],
    description: Object(external_this_wp_i18n_["__"])('Embed a VideoPress video.')
  },
  patterns: [/^https?:\/\/videopress\.com\/.+/i]
}, {
  name: 'core-embed/wordpress-tv',
  settings: {
    title: 'WordPress.tv',
    icon: embedVideoIcon,
    description: Object(external_this_wp_i18n_["__"])('Embed a WordPress.tv video.')
  },
  patterns: [/^https?:\/\/wordpress\.tv\/.+/i]
}, {
  name: 'core-embed/amazon-kindle',
  settings: {
    title: 'Amazon Kindle',
    icon: embedAmazonIcon,
    keywords: [Object(external_this_wp_i18n_["__"])('ebook')],
    responsive: false,
    description: Object(external_this_wp_i18n_["__"])('Embed Amazon Kindle content.')
  },
  patterns: [/^https?:\/\/([a-z0-9-]+\.)?(amazon|amzn)(\.[a-z]{2,4})+\/.+/i, /^https?:\/\/(www\.)?(a\.co|z\.cn)\/.+/i]
}];

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/embed/constants.js
var ASPECT_RATIOS = [// Common video resolutions.
{
  ratio: '2.33',
  className: 'wp-embed-aspect-21-9'
}, {
  ratio: '2.00',
  className: 'wp-embed-aspect-18-9'
}, {
  ratio: '1.78',
  className: 'wp-embed-aspect-16-9'
}, {
  ratio: '1.33',
  className: 'wp-embed-aspect-4-3'
}, // Vertical video and instagram square video support.
{
  ratio: '1.00',
  className: 'wp-embed-aspect-1-1'
}, {
  ratio: '0.56',
  className: 'wp-embed-aspect-9-16'
}, {
  ratio: '0.50',
  className: 'wp-embed-aspect-1-2'
}];
var DEFAULT_EMBED_BLOCK = 'core/embed';
var WORDPRESS_EMBED_BLOCK = 'core-embed/wordpress';

// EXTERNAL MODULE: ./node_modules/classnames/dedupe.js
var dedupe = __webpack_require__(95);
var dedupe_default = /*#__PURE__*/__webpack_require__.n(dedupe);

// EXTERNAL MODULE: ./node_modules/memize/index.js
var memize = __webpack_require__(50);
var memize_default = /*#__PURE__*/__webpack_require__.n(memize);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/embed/util.js




function util_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function util_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { util_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { util_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Internal dependencies
 */


/**
 * External dependencies
 */




/**
 * WordPress dependencies
 */



/**
 * Returns true if any of the regular expressions match the URL.
 *
 * @param {string}   url      The URL to test.
 * @param {Array}    patterns The list of regular expressions to test agains.
 * @return {boolean} True if any of the regular expressions match the URL.
 */

var matchesPatterns = function matchesPatterns(url) {
  var patterns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return patterns.some(function (pattern) {
    return url.match(pattern);
  });
};
/**
 * Finds the block name that should be used for the URL, based on the
 * structure of the URL.
 *
 * @param {string}  url The URL to test.
 * @return {string} The name of the block that should be used for this URL, e.g. core-embed/twitter
 */

var util_findBlock = function findBlock(url) {
  for (var _i = 0, _arr = [].concat(Object(toConsumableArray["a" /* default */])(common), Object(toConsumableArray["a" /* default */])(others)); _i < _arr.length; _i++) {
    var block = _arr[_i];

    if (matchesPatterns(url, block.patterns)) {
      return block.name;
    }
  }

  return DEFAULT_EMBED_BLOCK;
};
var util_isFromWordPress = function isFromWordPress(html) {
  return Object(external_this_lodash_["includes"])(html, 'class="wp-embedded-content"');
};
var util_getPhotoHtml = function getPhotoHtml(photo) {
  // 100% width for the preview so it fits nicely into the document, some "thumbnails" are
  // actually the full size photo. If thumbnails not found, use full image.
  var imageUrl = photo.thumbnail_url ? photo.thumbnail_url : photo.url;
  var photoPreview = Object(external_this_wp_element_["createElement"])("p", null, Object(external_this_wp_element_["createElement"])("img", {
    src: imageUrl,
    alt: photo.title,
    width: "100%"
  }));
  return Object(external_this_wp_element_["renderToString"])(photoPreview);
};
/**
 * Creates a more suitable embed block based on the passed in props
 * and attributes generated from an embed block's preview.
 *
 * We require `attributesFromPreview` to be generated from the latest attributes
 * and preview, and because of the way the react lifecycle operates, we can't
 * guarantee that the attributes contained in the block's props are the latest
 * versions, so we require that these are generated separately.
 * See `getAttributesFromPreview` in the generated embed edit component.
 *
 * @param {Object} props                  The block's props.
 * @param {Object} attributesFromPreview  Attributes generated from the block's most up to date preview.
 * @return {Object|undefined} A more suitable embed block if one exists.
 */

var util_createUpgradedEmbedBlock = function createUpgradedEmbedBlock(props, attributesFromPreview) {
  var preview = props.preview,
      name = props.name;
  var url = props.attributes.url;

  if (!url) {
    return;
  }

  var matchingBlock = util_findBlock(url);

  if (!Object(external_this_wp_blocks_["getBlockType"])(matchingBlock)) {
    return;
  } // WordPress blocks can work on multiple sites, and so don't have patterns,
  // so if we're in a WordPress block, assume the user has chosen it for a WordPress URL.


  if (WORDPRESS_EMBED_BLOCK !== name && DEFAULT_EMBED_BLOCK !== matchingBlock) {
    // At this point, we have discovered a more suitable block for this url, so transform it.
    if (name !== matchingBlock) {
      return Object(external_this_wp_blocks_["createBlock"])(matchingBlock, {
        url: url
      });
    }
  }

  if (preview) {
    var html = preview.html; // We can't match the URL for WordPress embeds, we have to check the HTML instead.

    if (util_isFromWordPress(html)) {
      // If this is not the WordPress embed block, transform it into one.
      if (WORDPRESS_EMBED_BLOCK !== name) {
        return Object(external_this_wp_blocks_["createBlock"])(WORDPRESS_EMBED_BLOCK, util_objectSpread({
          url: url
        }, attributesFromPreview));
      }
    }
  }
};
/**
 * Returns class names with any relevant responsive aspect ratio names.
 *
 * @param {string}  html               The preview HTML that possibly contains an iframe with width and height set.
 * @param {string}  existingClassNames Any existing class names.
 * @param {boolean} allowResponsive    If the responsive class names should be added, or removed.
 * @return {string} Deduped class names.
 */

function getClassNames(html) {
  var existingClassNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var allowResponsive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (!allowResponsive) {
    // Remove all of the aspect ratio related class names.
    var aspectRatioClassNames = {
      'wp-has-aspect-ratio': false
    };

    for (var ratioIndex = 0; ratioIndex < ASPECT_RATIOS.length; ratioIndex++) {
      var aspectRatioToRemove = ASPECT_RATIOS[ratioIndex];
      aspectRatioClassNames[aspectRatioToRemove.className] = false;
    }

    return dedupe_default()(existingClassNames, aspectRatioClassNames);
  }

  var previewDocument = document.implementation.createHTMLDocument('');
  previewDocument.body.innerHTML = html;
  var iframe = previewDocument.body.querySelector('iframe'); // If we have a fixed aspect iframe, and it's a responsive embed block.

  if (iframe && iframe.height && iframe.width) {
    var aspectRatio = (iframe.width / iframe.height).toFixed(2); // Given the actual aspect ratio, find the widest ratio to support it.

    for (var _ratioIndex = 0; _ratioIndex < ASPECT_RATIOS.length; _ratioIndex++) {
      var potentialRatio = ASPECT_RATIOS[_ratioIndex];

      if (aspectRatio >= potentialRatio.ratio) {
        var _classnames;

        return dedupe_default()(existingClassNames, (_classnames = {}, Object(defineProperty["a" /* default */])(_classnames, potentialRatio.className, allowResponsive), Object(defineProperty["a" /* default */])(_classnames, 'wp-has-aspect-ratio', allowResponsive), _classnames));
      }
    }
  }

  return existingClassNames;
}
/**
 * Fallback behaviour for unembeddable URLs.
 * Creates a paragraph block containing a link to the URL, and calls `onReplace`.
 *
 * @param {string}   url       The URL that could not be embedded.
 * @param {Function} onReplace Function to call with the created fallback block.
 */

function util_fallback(url, onReplace) {
  var link = Object(external_this_wp_element_["createElement"])("a", {
    href: url
  }, url);
  onReplace(Object(external_this_wp_blocks_["createBlock"])('core/paragraph', {
    content: Object(external_this_wp_element_["renderToString"])(link)
  }));
}
/***
 * Gets block attributes based on the preview and responsive state.
 *
 * @param {Object} preview The preview data.
 * @param {string} title The block's title, e.g. Twitter.
 * @param {Object} currentClassNames The block's current class names.
 * @param {boolean} isResponsive Boolean indicating if the block supports responsive content.
 * @param {boolean} allowResponsive Apply responsive classes to fixed size content.
 * @return {Object} Attributes and values.
 */

var getAttributesFromPreview = memize_default()(function (preview, title, currentClassNames, isResponsive) {
  var allowResponsive = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

  if (!preview) {
    return {};
  }

  var attributes = {}; // Some plugins only return HTML with no type info, so default this to 'rich'.

  var _preview$type = preview.type,
      type = _preview$type === void 0 ? 'rich' : _preview$type; // If we got a provider name from the API, use it for the slug, otherwise we use the title,
  // because not all embed code gives us a provider name.

  var html = preview.html,
      providerName = preview.provider_name;
  var providerNameSlug = Object(external_this_lodash_["kebabCase"])(Object(external_this_lodash_["toLower"])('' !== providerName ? providerName : title));

  if (util_isFromWordPress(html)) {
    type = 'wp-embed';
  }

  if (html || 'photo' === type) {
    attributes.type = type;
    attributes.providerNameSlug = providerNameSlug;
  }

  attributes.className = getClassNames(html, currentClassNames, isResponsive && allowResponsive);
  return attributes;
});

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/image/use-client-width.js


/**
 * WordPress dependencies
 */

function useClientWidth(ref, dependencies) {
  var _useState = Object(external_this_wp_element_["useState"])(),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      clientWidth = _useState2[0],
      setClientWidth = _useState2[1];

  function calculateClientWidth() {
    setClientWidth(ref.current.clientWidth);
  }

  Object(external_this_wp_element_["useEffect"])(calculateClientWidth, dependencies);
  Object(external_this_wp_element_["useEffect"])(function () {
    var defaultView = ref.current.ownerDocument.defaultView;
    defaultView.addEventListener('resize', calculateClientWidth);
    return function () {
      defaultView.removeEventListener('resize', calculateClientWidth);
    };
  }, []);
  return clientWidth;
}

// CONCATENATED MODULE: ./node_modules/react-easy-crop/node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}

// EXTERNAL MODULE: external {"this":"React"}
var external_this_React_ = __webpack_require__(17);
var external_this_React_default = /*#__PURE__*/__webpack_require__.n(external_this_React_);

// CONCATENATED MODULE: ./node_modules/react-easy-crop/index.module.js



/**
 * Compute the dimension of the crop area based on media size,
 * aspect ratio and optionally rotatation
 */

function getCropSize(mediaWidth, mediaHeight, aspect, rotation) {
  if (rotation === void 0) {
    rotation = 0;
  }

  var _a = translateSize(mediaWidth, mediaHeight, rotation),
      width = _a.width,
      height = _a.height;

  if (mediaWidth >= mediaHeight * aspect && width > mediaHeight * aspect) {
    return {
      width: mediaHeight * aspect,
      height: mediaHeight
    };
  }

  if (width > mediaHeight * aspect) {
    return {
      width: mediaWidth,
      height: mediaWidth / aspect
    };
  }

  if (width > height * aspect) {
    return {
      width: height * aspect,
      height: height
    };
  }

  return {
    width: width,
    height: width / aspect
  };
}
/**
 * Ensure a new media position stays in the crop area.
 */

function index_module_restrictPosition(position, mediaSize, cropSize, zoom, rotation) {
  if (rotation === void 0) {
    rotation = 0;
  }

  var _a = translateSize(mediaSize.width, mediaSize.height, rotation),
      width = _a.width,
      height = _a.height;

  return {
    x: restrictPositionCoord(position.x, width, cropSize.width, zoom),
    y: restrictPositionCoord(position.y, height, cropSize.height, zoom)
  };
}

function restrictPositionCoord(position, mediaSize, cropSize, zoom) {
  var maxPosition = mediaSize * zoom / 2 - cropSize / 2;
  return Math.min(maxPosition, Math.max(position, -maxPosition));
}

function getDistanceBetweenPoints(pointA, pointB) {
  return Math.sqrt(Math.pow(pointA.y - pointB.y, 2) + Math.pow(pointA.x - pointB.x, 2));
}
function getRotationBetweenPoints(pointA, pointB) {
  return Math.atan2(pointB.y - pointA.y, pointB.x - pointA.x) * 180 / Math.PI;
}
/**
 * Compute the output cropped area of the media in percentages and pixels.
 * x/y are the top-left coordinates on the src media
 */

function computeCroppedArea(crop, mediaSize, cropSize, aspect, zoom, rotation, restrictPosition) {
  if (rotation === void 0) {
    rotation = 0;
  }

  if (restrictPosition === void 0) {
    restrictPosition = true;
  } // if the media is rotated by the user, we cannot limit the position anymore
  // as it might need to be negative.


  var limitAreaFn = restrictPosition && rotation === 0 ? limitArea : noOp;
  var croppedAreaPercentages = {
    x: limitAreaFn(100, ((mediaSize.width - cropSize.width / zoom) / 2 - crop.x / zoom) / mediaSize.width * 100),
    y: limitAreaFn(100, ((mediaSize.height - cropSize.height / zoom) / 2 - crop.y / zoom) / mediaSize.height * 100),
    width: limitAreaFn(100, cropSize.width / mediaSize.width * 100 / zoom),
    height: limitAreaFn(100, cropSize.height / mediaSize.height * 100 / zoom)
  }; // we compute the pixels size naively

  var widthInPixels = Math.round(limitAreaFn(mediaSize.naturalWidth, croppedAreaPercentages.width * mediaSize.naturalWidth / 100));
  var heightInPixels = Math.round(limitAreaFn(mediaSize.naturalHeight, croppedAreaPercentages.height * mediaSize.naturalHeight / 100));
  var isImgWiderThanHigh = mediaSize.naturalWidth >= mediaSize.naturalHeight * aspect; // then we ensure the width and height exactly match the aspect (to avoid rounding approximations)
  // if the media is wider than high, when zoom is 0, the crop height will be equals to iamge height
  // thus we want to compute the width from the height and aspect for accuracy.
  // Otherwise, we compute the height from width and aspect.

  var sizePixels = isImgWiderThanHigh ? {
    width: Math.round(heightInPixels * aspect),
    height: heightInPixels
  } : {
    width: widthInPixels,
    height: Math.round(widthInPixels / aspect)
  };

  var croppedAreaPixels = __assign(__assign({}, sizePixels), {
    x: Math.round(limitAreaFn(mediaSize.naturalWidth - sizePixels.width, croppedAreaPercentages.x * mediaSize.naturalWidth / 100)),
    y: Math.round(limitAreaFn(mediaSize.naturalHeight - sizePixels.height, croppedAreaPercentages.y * mediaSize.naturalHeight / 100))
  });

  return {
    croppedAreaPercentages: croppedAreaPercentages,
    croppedAreaPixels: croppedAreaPixels
  };
}
/**
 * Ensure the returned value is between 0 and max
 */

function limitArea(max, value) {
  return Math.min(max, Math.max(0, value));
}

function noOp(_max, value) {
  return value;
}
/**
 * Compute the crop and zoom from the croppedAreaPixels
 */


function getZoomFromCroppedAreaPixels(croppedAreaPixels, mediaSize, cropSize) {
  var mediaZoom = mediaSize.width / mediaSize.naturalWidth;

  if (cropSize) {
    var isHeightMaxSize_1 = cropSize.height > cropSize.width;
    return isHeightMaxSize_1 ? cropSize.height / mediaZoom / croppedAreaPixels.height : cropSize.width / mediaZoom / croppedAreaPixels.width;
  }

  var aspect = croppedAreaPixels.width / croppedAreaPixels.height;
  var isHeightMaxSize = mediaSize.naturalWidth >= mediaSize.naturalHeight * aspect;
  return isHeightMaxSize ? mediaSize.naturalHeight / croppedAreaPixels.height : mediaSize.naturalWidth / croppedAreaPixels.width;
}
/**
 * Compute the crop and zoom from the croppedAreaPixels
 */


function getInitialCropFromCroppedAreaPixels(croppedAreaPixels, mediaSize, cropSize) {
  var mediaZoom = mediaSize.width / mediaSize.naturalWidth;
  var zoom = getZoomFromCroppedAreaPixels(croppedAreaPixels, mediaSize, cropSize);
  var cropZoom = mediaZoom * zoom;
  var crop = {
    x: ((mediaSize.naturalWidth - croppedAreaPixels.width) / 2 - croppedAreaPixels.x) * cropZoom,
    y: ((mediaSize.naturalHeight - croppedAreaPixels.height) / 2 - croppedAreaPixels.y) * cropZoom
  };
  return {
    crop: crop,
    zoom: zoom
  };
}
/**
 * Return the point that is the center of point a and b
 */

function getCenter(a, b) {
  return {
    x: (b.x + a.x) / 2,
    y: (b.y + a.y) / 2
  };
}
/**
 *
 * Returns an x,y point once rotated around xMid,yMid
 */

function rotateAroundMidPoint(x, y, xMid, yMid, degrees) {
  var cos = Math.cos;
  var sin = Math.sin;
  var radian = degrees * Math.PI / 180; // Convert to radians
  // Subtract midpoints, so that midpoint is translated to origin
  // and add it in the end again

  var xr = (x - xMid) * cos(radian) - (y - yMid) * sin(radian) + xMid;
  var yr = (x - xMid) * sin(radian) + (y - yMid) * cos(radian) + yMid;
  return [xr, yr];
}
/**
 * Returns the new bounding area of a rotated rectangle.
 */

function translateSize(width, height, rotation) {
  var centerX = width / 2;
  var centerY = height / 2;
  var outerBounds = [rotateAroundMidPoint(0, 0, centerX, centerY, rotation), rotateAroundMidPoint(width, 0, centerX, centerY, rotation), rotateAroundMidPoint(width, height, centerX, centerY, rotation), rotateAroundMidPoint(0, height, centerX, centerY, rotation)];
  var minX = Math.min.apply(Math, outerBounds.map(function (p) {
    return p[0];
  }));
  var maxX = Math.max.apply(Math, outerBounds.map(function (p) {
    return p[0];
  }));
  var minY = Math.min.apply(Math, outerBounds.map(function (p) {
    return p[1];
  }));
  var maxY = Math.max.apply(Math, outerBounds.map(function (p) {
    return p[1];
  }));
  return {
    width: maxX - minX,
    height: maxY - minY
  };
}
/**
 * Combine multiple class names into a single string.
 */

function index_module_classNames() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  return args.filter(function (value) {
    if (typeof value === 'string' && value.length > 0) {
      return true;
    }

    return false;
  }).join(' ').trim();
}

var css = ".reactEasyCrop_Container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  user-select: none;\n  touch-action: none;\n  cursor: move;\n}\n\n.reactEasyCrop_Image,\n.reactEasyCrop_Video {\n  max-width: 100%;\n  max-height: 100%;\n  margin: auto;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  will-change: transform; /* this improves performances and prevent painting issues on iOS Chrome */\n}\n\n.reactEasyCrop_CropArea {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  box-sizing: border-box;\n  box-shadow: 0 0 0 9999em;\n  color: rgba(0, 0, 0, 0.5);\n  overflow: hidden;\n}\n\n.reactEasyCrop_CropAreaRound {\n  border-radius: 50%;\n}\n\n.reactEasyCrop_CropAreaGrid::before {\n  content: ' ';\n  box-sizing: border-box;\n  position: absolute;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  top: 0;\n  bottom: 0;\n  left: 33.33%;\n  right: 33.33%;\n  border-top: 0;\n  border-bottom: 0;\n}\n\n.reactEasyCrop_CropAreaGrid::after {\n  content: ' ';\n  box-sizing: border-box;\n  position: absolute;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  top: 33.33%;\n  bottom: 33.33%;\n  left: 0;\n  right: 0;\n  border-left: 0;\n  border-right: 0;\n}\n";

var MIN_ZOOM = 1;
var MAX_ZOOM = 3;

var index_module_Cropper =
/** @class */
function (_super) {
  __extends(Cropper, _super);

  function Cropper() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.imageRef = null;
    _this.videoRef = null;
    _this.containerRef = null;
    _this.styleRef = null;
    _this.containerRect = null;
    _this.mediaSize = {
      width: 0,
      height: 0,
      naturalWidth: 0,
      naturalHeight: 0
    };
    _this.dragStartPosition = {
      x: 0,
      y: 0
    };
    _this.dragStartCrop = {
      x: 0,
      y: 0
    };
    _this.lastPinchDistance = 0;
    _this.lastPinchRotation = 0;
    _this.rafDragTimeout = null;
    _this.rafPinchTimeout = null;
    _this.wheelTimer = null;
    _this.state = {
      cropSize: null,
      hasWheelJustStarted: false
    }; // this is to prevent Safari on iOS >= 10 to zoom the page

    _this.preventZoomSafari = function (e) {
      return e.preventDefault();
    };

    _this.cleanEvents = function () {
      document.removeEventListener('mousemove', _this.onMouseMove);
      document.removeEventListener('mouseup', _this.onDragStopped);
      document.removeEventListener('touchmove', _this.onTouchMove);
      document.removeEventListener('touchend', _this.onDragStopped);
    };

    _this.clearScrollEvent = function () {
      if (_this.containerRef) _this.containerRef.removeEventListener('wheel', _this.onWheel);

      if (_this.wheelTimer) {
        clearTimeout(_this.wheelTimer);
      }
    };

    _this.onMediaLoad = function () {
      _this.computeSizes();

      _this.emitCropData();

      _this.setInitialCrop();

      if (_this.props.onMediaLoaded) {
        _this.props.onMediaLoaded(_this.mediaSize);
      }
    };

    _this.setInitialCrop = function () {
      var _a = _this.props,
          initialCroppedAreaPixels = _a.initialCroppedAreaPixels,
          cropSize = _a.cropSize;

      if (!initialCroppedAreaPixels) {
        return;
      }

      var _b = getInitialCropFromCroppedAreaPixels(initialCroppedAreaPixels, _this.mediaSize, cropSize),
          crop = _b.crop,
          zoom = _b.zoom;

      _this.props.onCropChange(crop);

      _this.props.onZoomChange && _this.props.onZoomChange(zoom);
    };

    _this.computeSizes = function () {
      var _a, _b, _c, _d;

      var mediaRef = _this.imageRef || _this.videoRef;

      if (mediaRef) {
        _this.mediaSize = {
          width: mediaRef.offsetWidth,
          height: mediaRef.offsetHeight,
          naturalWidth: ((_a = _this.imageRef) === null || _a === void 0 ? void 0 : _a.naturalWidth) || ((_b = _this.videoRef) === null || _b === void 0 ? void 0 : _b.videoWidth) || 0,
          naturalHeight: ((_c = _this.imageRef) === null || _c === void 0 ? void 0 : _c.naturalHeight) || ((_d = _this.videoRef) === null || _d === void 0 ? void 0 : _d.videoHeight) || 0
        };
        var cropSize = _this.props.cropSize ? _this.props.cropSize : getCropSize(mediaRef.offsetWidth, mediaRef.offsetHeight, _this.props.aspect, _this.props.rotation);

        _this.setState({
          cropSize: cropSize
        }, _this.recomputeCropPosition);
      }

      if (_this.containerRef) {
        _this.containerRect = _this.containerRef.getBoundingClientRect();
      }
    };

    _this.onMouseDown = function (e) {
      e.preventDefault();
      document.addEventListener('mousemove', _this.onMouseMove);
      document.addEventListener('mouseup', _this.onDragStopped);

      _this.onDragStart(Cropper.getMousePoint(e));
    };

    _this.onMouseMove = function (e) {
      return _this.onDrag(Cropper.getMousePoint(e));
    };

    _this.onTouchStart = function (e) {
      e.preventDefault();
      document.addEventListener('touchmove', _this.onTouchMove, {
        passive: false
      }); // iOS 11 now defaults to passive: true

      document.addEventListener('touchend', _this.onDragStopped);

      if (e.touches.length === 2) {
        _this.onPinchStart(e);
      } else if (e.touches.length === 1) {
        _this.onDragStart(Cropper.getTouchPoint(e.touches[0]));
      }
    };

    _this.onTouchMove = function (e) {
      // Prevent whole page from scrolling on iOS.
      e.preventDefault();

      if (e.touches.length === 2) {
        _this.onPinchMove(e);
      } else if (e.touches.length === 1) {
        _this.onDrag(Cropper.getTouchPoint(e.touches[0]));
      }
    };

    _this.onDragStart = function (_a) {
      var x = _a.x,
          y = _a.y;

      var _b, _c;

      _this.dragStartPosition = {
        x: x,
        y: y
      };
      _this.dragStartCrop = __assign({}, _this.props.crop);
      (_c = (_b = _this.props).onInteractionStart) === null || _c === void 0 ? void 0 : _c.call(_b);
    };

    _this.onDrag = function (_a) {
      var x = _a.x,
          y = _a.y;
      if (_this.rafDragTimeout) window.cancelAnimationFrame(_this.rafDragTimeout);
      _this.rafDragTimeout = window.requestAnimationFrame(function () {
        if (!_this.state.cropSize) return;
        if (x === undefined || y === undefined) return;
        var offsetX = x - _this.dragStartPosition.x;
        var offsetY = y - _this.dragStartPosition.y;
        var requestedPosition = {
          x: _this.dragStartCrop.x + offsetX,
          y: _this.dragStartCrop.y + offsetY
        };
        var newPosition = _this.props.restrictPosition ? index_module_restrictPosition(requestedPosition, _this.mediaSize, _this.state.cropSize, _this.props.zoom, _this.props.rotation) : requestedPosition;

        _this.props.onCropChange(newPosition);
      });
    };

    _this.onDragStopped = function () {
      var _a, _b;

      _this.cleanEvents();

      _this.emitCropData();

      (_b = (_a = _this.props).onInteractionEnd) === null || _b === void 0 ? void 0 : _b.call(_a);
    };

    _this.onWheel = function (e) {
      e.preventDefault();
      var point = Cropper.getMousePoint(e);
      var newZoom = _this.props.zoom - e.deltaY * _this.props.zoomSpeed / 200;

      _this.setNewZoom(newZoom, point);

      if (!_this.state.hasWheelJustStarted) {
        _this.setState({
          hasWheelJustStarted: true
        }, function () {
          var _a, _b;

          return (_b = (_a = _this.props).onInteractionStart) === null || _b === void 0 ? void 0 : _b.call(_a);
        });
      }

      if (_this.wheelTimer) {
        clearTimeout(_this.wheelTimer);
      }

      _this.wheelTimer = window.setTimeout(function () {
        return _this.setState({
          hasWheelJustStarted: false
        }, function () {
          var _a, _b;

          return (_b = (_a = _this.props).onInteractionEnd) === null || _b === void 0 ? void 0 : _b.call(_a);
        });
      }, 250);
    };

    _this.getPointOnContainer = function (_a) {
      var x = _a.x,
          y = _a.y;

      if (!_this.containerRect) {
        throw new Error('The Cropper is not mounted');
      }

      return {
        x: _this.containerRect.width / 2 - (x - _this.containerRect.left),
        y: _this.containerRect.height / 2 - (y - _this.containerRect.top)
      };
    };

    _this.getPointOnMedia = function (_a) {
      var x = _a.x,
          y = _a.y;
      var _b = _this.props,
          crop = _b.crop,
          zoom = _b.zoom;
      return {
        x: (x + crop.x) / zoom,
        y: (y + crop.y) / zoom
      };
    };

    _this.setNewZoom = function (zoom, point) {
      if (!_this.state.cropSize || !_this.props.onZoomChange) return;

      var zoomPoint = _this.getPointOnContainer(point);

      var zoomTarget = _this.getPointOnMedia(zoomPoint);

      var newZoom = Math.min(_this.props.maxZoom, Math.max(zoom, _this.props.minZoom));
      var requestedPosition = {
        x: zoomTarget.x * newZoom - zoomPoint.x,
        y: zoomTarget.y * newZoom - zoomPoint.y
      };
      var newPosition = _this.props.restrictPosition ? index_module_restrictPosition(requestedPosition, _this.mediaSize, _this.state.cropSize, newZoom, _this.props.rotation) : requestedPosition;

      _this.props.onCropChange(newPosition);

      _this.props.onZoomChange(newZoom);
    };

    _this.emitCropData = function () {
      if (!_this.state.cropSize) return; // this is to ensure the crop is correctly restricted after a zoom back (https://github.com/ricardo-ch/react-easy-crop/issues/6)

      var restrictedPosition = _this.props.restrictPosition ? index_module_restrictPosition(_this.props.crop, _this.mediaSize, _this.state.cropSize, _this.props.zoom, _this.props.rotation) : _this.props.crop;

      var _a = computeCroppedArea(restrictedPosition, _this.mediaSize, _this.state.cropSize, _this.getAspect(), _this.props.zoom, _this.props.rotation, _this.props.restrictPosition),
          croppedAreaPercentages = _a.croppedAreaPercentages,
          croppedAreaPixels = _a.croppedAreaPixels;

      _this.props.onCropComplete && _this.props.onCropComplete(croppedAreaPercentages, croppedAreaPixels);
    };

    _this.recomputeCropPosition = function () {
      if (!_this.state.cropSize) return;
      var newPosition = _this.props.restrictPosition ? index_module_restrictPosition(_this.props.crop, _this.mediaSize, _this.state.cropSize, _this.props.zoom, _this.props.rotation) : _this.props.crop;

      _this.props.onCropChange(newPosition);

      _this.emitCropData();
    };

    return _this;
  }

  Cropper.prototype.componentDidMount = function () {
    window.addEventListener('resize', this.computeSizes);

    if (this.containerRef) {
      this.props.zoomWithScroll && this.containerRef.addEventListener('wheel', this.onWheel, {
        passive: false
      });
      this.containerRef.addEventListener('gesturestart', this.preventZoomSafari);
      this.containerRef.addEventListener('gesturechange', this.preventZoomSafari);
    }

    if (!this.props.disableAutomaticStylesInjection) {
      this.styleRef = document.createElement('style');
      this.styleRef.setAttribute('type', 'text/css');
      this.styleRef.innerHTML = css;
      document.head.appendChild(this.styleRef);
    } // when rendered via SSR, the image can already be loaded and its onLoad callback will never be called


    if (this.imageRef && this.imageRef.complete) {
      this.onMediaLoad();
    }
  };

  Cropper.prototype.componentWillUnmount = function () {
    window.removeEventListener('resize', this.computeSizes);

    if (this.containerRef) {
      this.containerRef.removeEventListener('gesturestart', this.preventZoomSafari);
      this.containerRef.removeEventListener('gesturechange', this.preventZoomSafari);
    }

    if (this.styleRef) {
      this.styleRef.remove();
    }

    this.cleanEvents();
    this.props.zoomWithScroll && this.clearScrollEvent();
  };

  Cropper.prototype.componentDidUpdate = function (prevProps) {
    var _a, _b, _c, _d;

    if (prevProps.rotation !== this.props.rotation) {
      this.computeSizes();
      this.recomputeCropPosition();
    } else if (prevProps.aspect !== this.props.aspect) {
      this.computeSizes();
    } else if (prevProps.zoom !== this.props.zoom) {
      this.recomputeCropPosition();
    } else if (((_a = prevProps.cropSize) === null || _a === void 0 ? void 0 : _a.height) !== ((_b = this.props.cropSize) === null || _b === void 0 ? void 0 : _b.height) || ((_c = prevProps.cropSize) === null || _c === void 0 ? void 0 : _c.width) !== ((_d = this.props.cropSize) === null || _d === void 0 ? void 0 : _d.width)) {
      this.computeSizes();
    }

    if (prevProps.zoomWithScroll !== this.props.zoomWithScroll && this.containerRef) {
      this.props.zoomWithScroll ? this.containerRef.addEventListener('wheel', this.onWheel, {
        passive: false
      }) : this.clearScrollEvent();
    }
  };

  Cropper.prototype.getAspect = function () {
    var _a = this.props,
        cropSize = _a.cropSize,
        aspect = _a.aspect;

    if (cropSize) {
      return cropSize.width / cropSize.height;
    }

    return aspect;
  };

  Cropper.prototype.onPinchStart = function (e) {
    var pointA = Cropper.getTouchPoint(e.touches[0]);
    var pointB = Cropper.getTouchPoint(e.touches[1]);
    this.lastPinchDistance = getDistanceBetweenPoints(pointA, pointB);
    this.lastPinchRotation = getRotationBetweenPoints(pointA, pointB);
    this.onDragStart(getCenter(pointA, pointB));
  };

  Cropper.prototype.onPinchMove = function (e) {
    var _this = this;

    var pointA = Cropper.getTouchPoint(e.touches[0]);
    var pointB = Cropper.getTouchPoint(e.touches[1]);
    var center = getCenter(pointA, pointB);
    this.onDrag(center);
    if (this.rafPinchTimeout) window.cancelAnimationFrame(this.rafPinchTimeout);
    this.rafPinchTimeout = window.requestAnimationFrame(function () {
      var distance = getDistanceBetweenPoints(pointA, pointB);
      var newZoom = _this.props.zoom * (distance / _this.lastPinchDistance);

      _this.setNewZoom(newZoom, center);

      _this.lastPinchDistance = distance;
      var rotation = getRotationBetweenPoints(pointA, pointB);
      var newRotation = _this.props.rotation + (rotation - _this.lastPinchRotation);
      _this.props.onRotationChange && _this.props.onRotationChange(newRotation);
      _this.lastPinchRotation = rotation;
    });
  };

  Cropper.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        image = _a.image,
        video = _a.video,
        mediaProps = _a.mediaProps,
        transform = _a.transform,
        _b = _a.crop,
        x = _b.x,
        y = _b.y,
        rotation = _a.rotation,
        zoom = _a.zoom,
        cropShape = _a.cropShape,
        showGrid = _a.showGrid,
        _c = _a.style,
        containerStyle = _c.containerStyle,
        cropAreaStyle = _c.cropAreaStyle,
        mediaStyle = _c.mediaStyle,
        _d = _a.classes,
        containerClassName = _d.containerClassName,
        cropAreaClassName = _d.cropAreaClassName,
        mediaClassName = _d.mediaClassName;
    return external_this_React_default.a.createElement("div", {
      onMouseDown: this.onMouseDown,
      onTouchStart: this.onTouchStart,
      ref: function ref(el) {
        return _this.containerRef = el;
      },
      "data-testid": "container",
      style: containerStyle,
      className: index_module_classNames('reactEasyCrop_Container', containerClassName)
    }, image ? external_this_React_default.a.createElement("img", __assign({
      alt: "",
      className: index_module_classNames('reactEasyCrop_Image', mediaClassName)
    }, mediaProps, {
      src: image,
      ref: function ref(el) {
        return _this.imageRef = el;
      },
      style: __assign(__assign({}, mediaStyle), {
        transform: transform || "translate(" + x + "px, " + y + "px) rotate(" + rotation + "deg) scale(" + zoom + ")"
      }),
      onLoad: this.onMediaLoad
    })) : video && external_this_React_default.a.createElement("video", __assign({
      autoPlay: true,
      loop: true,
      muted: true,
      className: index_module_classNames('reactEasyCrop_Video', mediaClassName)
    }, mediaProps, {
      src: video,
      ref: function ref(el) {
        return _this.videoRef = el;
      },
      onLoadedMetadata: this.onMediaLoad,
      style: __assign(__assign({}, mediaStyle), {
        transform: transform || "translate(" + x + "px, " + y + "px) rotate(" + rotation + "deg) scale(" + zoom + ")"
      }),
      controls: false
    })), this.state.cropSize && external_this_React_default.a.createElement("div", {
      style: __assign(__assign({}, cropAreaStyle), {
        width: this.state.cropSize.width,
        height: this.state.cropSize.height
      }),
      "data-testid": "cropper",
      className: index_module_classNames('reactEasyCrop_CropArea', cropShape === 'round' && 'reactEasyCrop_CropAreaRound', showGrid && 'reactEasyCrop_CropAreaGrid', cropAreaClassName)
    }));
  };

  Cropper.defaultProps = {
    zoom: 1,
    rotation: 0,
    aspect: 4 / 3,
    maxZoom: MAX_ZOOM,
    minZoom: MIN_ZOOM,
    cropShape: 'rect',
    showGrid: true,
    style: {},
    classes: {},
    mediaProps: {},
    zoomSpeed: 1,
    restrictPosition: true,
    zoomWithScroll: true
  };

  Cropper.getMousePoint = function (e) {
    return {
      x: Number(e.clientX),
      y: Number(e.clientY)
    };
  };

  Cropper.getTouchPoint = function (touch) {
    return {
      x: Number(touch.clientX),
      y: Number(touch.clientY)
    };
  };

  return Cropper;
}(external_this_React_default.a.Component);

/* harmony default export */ var index_module = (index_module_Cropper);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/aspect-ratio.js


/**
 * WordPress dependencies
 */

var aspect_ratio_aspectRatio = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M18.5 5.5h-13c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2zm.5 11c0 .3-.2.5-.5.5h-13c-.3 0-.5-.2-.5-.5v-9c0-.3.2-.5.5-.5h13c.3 0 .5.2.5.5v9zM6.5 12H8v-2h2V8.5H6.5V12zm9.5 2h-2v1.5h3.5V12H16v2z"
}));
/* harmony default export */ var aspect_ratio = (aspect_ratio_aspectRatio);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/rotate-right.js


/**
 * WordPress dependencies
 */

var rotateRight = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M15.1 4.8l-3-2.5V4c-4.4 0-8 3.6-8 8 0 3.7 2.5 6.9 6 7.7.3.1.6.1 1 .2l.2-1.5c-.4 0-.7-.1-1.1-.2l-.1.2v-.2c-2.6-.8-4.5-3.3-4.5-6.2 0-3.6 2.9-6.5 6.5-6.5v1.8l3-2.5zM20 11c-.2-1.4-.7-2.7-1.6-3.8l-1.2.8c.7.9 1.1 2 1.3 3.1L20 11zm-1.5 1.8c-.1.5-.2 1.1-.4 1.6s-.5 1-.8 1.5l1.2.9c.4-.5.8-1.1 1-1.8s.5-1.3.5-2l-1.5-.2zm-5.6 5.6l.2 1.5c1.4-.2 2.7-.7 3.8-1.6l-.9-1.1c-.9.7-2 1.1-3.1 1.2z"
}));
/* harmony default export */ var rotate_right = (rotateRight);

// EXTERNAL MODULE: external {"this":["wp","apiFetch"]}
var external_this_wp_apiFetch_ = __webpack_require__(45);
var external_this_wp_apiFetch_default = /*#__PURE__*/__webpack_require__.n(external_this_wp_apiFetch_);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/image/image-editor.js



/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */








var image_editor_MIN_ZOOM = 100;
var image_editor_MAX_ZOOM = 300;
var POPOVER_PROPS = {
  position: 'bottom right'
};

function AspectGroup(_ref) {
  var aspectRatios = _ref.aspectRatios,
      isDisabled = _ref.isDisabled,
      label = _ref.label,
      _onClick = _ref.onClick;
  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["MenuGroup"], {
    label: label
  }, aspectRatios.map(function (_ref2) {
    var title = _ref2.title,
        aspect = _ref2.aspect;
    return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["MenuItem"], {
      key: aspect,
      isDisabled: isDisabled,
      onClick: function onClick() {
        _onClick(aspect);
      }
    }, title);
  }));
}

function AspectMenu(_ref3) {
  var isDisabled = _ref3.isDisabled,
      _onClick2 = _ref3.onClick,
      toggleProps = _ref3.toggleProps;
  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["DropdownMenu"], {
    icon: aspect_ratio,
    label: Object(external_this_wp_i18n_["__"])('Aspect Ratio'),
    popoverProps: POPOVER_PROPS,
    toggleProps: toggleProps
  }, function (_ref4) {
    var onClose = _ref4.onClose;
    return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(AspectGroup, {
      label: Object(external_this_wp_i18n_["__"])('Landscape'),
      isDisabled: isDisabled,
      onClick: function onClick(aspect) {
        _onClick2(aspect);

        onClose();
      },
      aspectRatios: [{
        title: Object(external_this_wp_i18n_["__"])('16:10'),
        aspect: 16 / 10
      }, {
        title: Object(external_this_wp_i18n_["__"])('16:9'),
        aspect: 16 / 9
      }, {
        title: Object(external_this_wp_i18n_["__"])('4:3'),
        aspect: 4 / 3
      }, {
        title: Object(external_this_wp_i18n_["__"])('3:2'),
        aspect: 3 / 2
      }]
    }), Object(external_this_wp_element_["createElement"])(AspectGroup, {
      label: Object(external_this_wp_i18n_["__"])('Portrait'),
      isDisabled: isDisabled,
      onClick: function onClick(aspect) {
        _onClick2(aspect);

        onClose();
      },
      aspectRatios: [{
        title: Object(external_this_wp_i18n_["__"])('10:16'),
        aspect: 10 / 16
      }, {
        title: Object(external_this_wp_i18n_["__"])('9:16'),
        aspect: 9 / 16
      }, {
        title: Object(external_this_wp_i18n_["__"])('3:4'),
        aspect: 3 / 4
      }, {
        title: Object(external_this_wp_i18n_["__"])('2:3'),
        aspect: 2 / 3
      }]
    }), Object(external_this_wp_element_["createElement"])(AspectGroup, {
      isDisabled: isDisabled,
      onClick: function onClick(aspect) {
        _onClick2(aspect);

        onClose();
      },
      aspectRatios: [{
        title: Object(external_this_wp_i18n_["__"])('Square'),
        aspect: 1
      }]
    }));
  });
}

function ImageEditor(_ref5) {
  var id = _ref5.id,
      url = _ref5.url,
      setAttributes = _ref5.setAttributes,
      naturalWidth = _ref5.naturalWidth,
      naturalHeight = _ref5.naturalHeight,
      width = _ref5.width,
      height = _ref5.height,
      clientWidth = _ref5.clientWidth,
      setIsEditingImage = _ref5.setIsEditingImage;

  var _useDispatch = Object(external_this_wp_data_["useDispatch"])('core/notices'),
      createErrorNotice = _useDispatch.createErrorNotice;

  var _useState = Object(external_this_wp_element_["useState"])(false),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      inProgress = _useState2[0],
      setIsProgress = _useState2[1];

  var _useState3 = Object(external_this_wp_element_["useState"])(null),
      _useState4 = Object(slicedToArray["a" /* default */])(_useState3, 2),
      crop = _useState4[0],
      setCrop = _useState4[1];

  var _useState5 = Object(external_this_wp_element_["useState"])({
    x: 0,
    y: 0
  }),
      _useState6 = Object(slicedToArray["a" /* default */])(_useState5, 2),
      position = _useState6[0],
      setPosition = _useState6[1];

  var _useState7 = Object(external_this_wp_element_["useState"])(100),
      _useState8 = Object(slicedToArray["a" /* default */])(_useState7, 2),
      zoom = _useState8[0],
      setZoom = _useState8[1];

  var _useState9 = Object(external_this_wp_element_["useState"])(naturalWidth / naturalHeight),
      _useState10 = Object(slicedToArray["a" /* default */])(_useState9, 2),
      aspect = _useState10[0],
      setAspect = _useState10[1];

  var _useState11 = Object(external_this_wp_element_["useState"])(0),
      _useState12 = Object(slicedToArray["a" /* default */])(_useState11, 2),
      rotation = _useState12[0],
      setRotation = _useState12[1];

  var _useState13 = Object(external_this_wp_element_["useState"])(),
      _useState14 = Object(slicedToArray["a" /* default */])(_useState13, 2),
      editedUrl = _useState14[0],
      setEditedUrl = _useState14[1];

  var editedWidth = width;
  var editedHeight = height || clientWidth * naturalHeight / naturalWidth;
  var naturalAspectRatio = naturalWidth / naturalHeight;

  if (rotation % 180 === 90) {
    editedHeight = clientWidth * naturalWidth / naturalHeight;
    naturalAspectRatio = naturalHeight / naturalWidth;
  }

  function apply() {
    setIsProgress(true);
    var attrs = crop;

    if (rotation > 0) {
      attrs.rotation = rotation;
    }

    external_this_wp_apiFetch_default()({
      path: "__experimental/richimage/".concat(id, "/apply"),
      headers: {
        'Content-type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(attrs)
    }).then(function (response) {
      setAttributes({
        id: response.media_id,
        url: response.url,
        height: height && width ? width / aspect : undefined
      });
    }).catch(function () {
      createErrorNotice(Object(external_this_wp_i18n_["__"])('Unable to perform the image modification. Please check your media storage.'), {
        id: 'image-editing-error',
        type: 'snackbar'
      });
    }).finally(function () {
      setIsProgress(false);
      setIsEditingImage(false);
    });
  }

  function rotate() {
    var angle = (rotation + 90) % 360;

    if (angle === 0) {
      setEditedUrl();
      setRotation(angle);
      setAspect(1 / aspect);
      setPosition({
        x: -(position.y * naturalAspectRatio),
        y: position.x * naturalAspectRatio
      });
      return;
    }

    function editImage(event) {
      var canvas = document.createElement('canvas');
      var translateX = 0;
      var translateY = 0;

      if (angle % 180) {
        canvas.width = event.target.height;
        canvas.height = event.target.width;
      } else {
        canvas.width = event.target.width;
        canvas.height = event.target.height;
      }

      if (angle === 90 || angle === 180) {
        translateX = canvas.width;
      }

      if (angle === 270 || angle === 180) {
        translateY = canvas.height;
      }

      var context = canvas.getContext('2d');
      context.translate(translateX, translateY);
      context.rotate(angle * Math.PI / 180);
      context.drawImage(event.target, 0, 0);
      canvas.toBlob(function (blob) {
        setEditedUrl(URL.createObjectURL(blob));
        setRotation(angle);
        setAspect(1 / aspect);
        setPosition({
          x: -(position.y * naturalAspectRatio),
          y: position.x * naturalAspectRatio
        });
      });
    }

    var el = new window.Image();
    el.src = url;
    el.onload = editImage;
  }

  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])("div", {
    className: classnames_default()('richimage__crop-area', {
      'is-applying': inProgress
    }),
    style: {
      width: editedWidth,
      height: editedHeight
    }
  }, Object(external_this_wp_element_["createElement"])(index_module, {
    image: editedUrl || url,
    disabled: inProgress,
    minZoom: image_editor_MIN_ZOOM / 100,
    maxZoom: image_editor_MAX_ZOOM / 100,
    crop: position,
    zoom: zoom / 100,
    aspect: aspect,
    onCropChange: setPosition,
    onCropComplete: setCrop,
    onZoomChange: function onZoomChange(newZoom) {
      setZoom(newZoom * 100);
    }
  }), inProgress && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Spinner"], null)), !inProgress && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["RangeControl"], {
    className: "richimage__zoom-control",
    label: Object(external_this_wp_i18n_["__"])('Zoom'),
    min: image_editor_MIN_ZOOM,
    max: image_editor_MAX_ZOOM,
    value: Math.round(zoom),
    onChange: setZoom
  }), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToolbarGroup"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToolbarButton"], {
    icon: rotate_right,
    label: Object(external_this_wp_i18n_["__"])('Rotate'),
    onClick: rotate,
    disabled: inProgress
  })), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToolbarGroup"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["__experimentalToolbarItem"], null, function (toggleProps) {
    return Object(external_this_wp_element_["createElement"])(AspectMenu, {
      toggleProps: toggleProps,
      isDisabled: inProgress,
      onClick: setAspect
    });
  })), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToolbarGroup"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToolbarButton"], {
    onClick: apply,
    disabled: inProgress
  }, Object(external_this_wp_i18n_["__"])('Apply')), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToolbarButton"], {
    onClick: function onClick() {
      return setIsEditingImage(false);
    }
  }, Object(external_this_wp_i18n_["__"])('Cancel')))));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/image/constants.js
var MIN_SIZE = 20;
var LINK_DESTINATION_NONE = 'none';
var LINK_DESTINATION_MEDIA = 'media';
var LINK_DESTINATION_ATTACHMENT = 'attachment';
var LINK_DESTINATION_CUSTOM = 'custom';
var NEW_TAB_REL = ['noreferrer', 'noopener'];
var ALLOWED_MEDIA_TYPES = ['image'];
var DEFAULT_SIZE_SLUG = 'large';

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/image/image.js



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */











/**
 * Internal dependencies
 */




/**
 * Module constants
 */



function getFilename(url) {
  var path = Object(external_this_wp_url_["getPath"])(url);

  if (path) {
    return Object(external_this_lodash_["last"])(path.split('/'));
  }
}

function Image(_ref) {
  var _ref$attributes = _ref.attributes,
      _ref$attributes$url = _ref$attributes.url,
      url = _ref$attributes$url === void 0 ? '' : _ref$attributes$url,
      alt = _ref$attributes.alt,
      caption = _ref$attributes.caption,
      align = _ref$attributes.align,
      id = _ref$attributes.id,
      href = _ref$attributes.href,
      rel = _ref$attributes.rel,
      linkClass = _ref$attributes.linkClass,
      linkDestination = _ref$attributes.linkDestination,
      title = _ref$attributes.title,
      width = _ref$attributes.width,
      height = _ref$attributes.height,
      linkTarget = _ref$attributes.linkTarget,
      sizeSlug = _ref$attributes.sizeSlug,
      setAttributes = _ref.setAttributes,
      isSelected = _ref.isSelected,
      insertBlocksAfter = _ref.insertBlocksAfter,
      onReplace = _ref.onReplace,
      onSelectImage = _ref.onSelectImage,
      onSelectURL = _ref.onSelectURL,
      onUploadError = _ref.onUploadError,
      containerRef = _ref.containerRef;
  var image = Object(external_this_wp_data_["useSelect"])(function (select) {
    var _select = select('core'),
        getMedia = _select.getMedia;

    return id && isSelected ? getMedia(id) : null;
  }, [id, isSelected]);

  var _useSelect = Object(external_this_wp_data_["useSelect"])(function (select) {
    var _select2 = select('core/block-editor'),
        getSettings = _select2.getSettings;

    return Object(external_this_lodash_["pick"])(getSettings(), ['imageSizes', 'isRTL', 'maxWidth']);
  }),
      maxWidth = _useSelect.maxWidth,
      isRTL = _useSelect.isRTL,
      imageSizes = _useSelect.imageSizes;

  var _useDispatch = Object(external_this_wp_data_["useDispatch"])('core/block-editor'),
      toggleSelection = _useDispatch.toggleSelection;

  var isLargeViewport = Object(external_this_wp_compose_["useViewportMatch"])('medium');

  var _useState = Object(external_this_wp_element_["useState"])(false),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      captionFocused = _useState2[0],
      setCaptionFocused = _useState2[1];

  var isWideAligned = Object(external_this_lodash_["includes"])(['wide', 'full'], align);

  var _useState3 = Object(external_this_wp_element_["useState"])({}),
      _useState4 = Object(slicedToArray["a" /* default */])(_useState3, 2),
      _useState4$ = _useState4[0],
      naturalWidth = _useState4$.naturalWidth,
      naturalHeight = _useState4$.naturalHeight,
      setNaturalSize = _useState4[1];

  var _useState5 = Object(external_this_wp_element_["useState"])(false),
      _useState6 = Object(slicedToArray["a" /* default */])(_useState5, 2),
      isEditingImage = _useState6[0],
      setIsEditingImage = _useState6[1];

  var clientWidth = useClientWidth(containerRef, [align]);
  var isResizable = !isWideAligned && isLargeViewport;
  var imageSizeOptions = Object(external_this_lodash_["map"])(Object(external_this_lodash_["filter"])(imageSizes, function (_ref2) {
    var slug = _ref2.slug;
    return Object(external_this_lodash_["get"])(image, ['media_details', 'sizes', slug, 'source_url']);
  }), function (_ref3) {
    var name = _ref3.name,
        slug = _ref3.slug;
    return {
      value: slug,
      label: name
    };
  });
  Object(external_this_wp_element_["useEffect"])(function () {
    if (!isSelected) {
      setCaptionFocused(false);
    }
  }, [isSelected]);

  function onResizeStart() {
    toggleSelection(false);
  }

  function _onResizeStop() {
    toggleSelection(true);
  }

  function onImageError() {
    // Check if there's an embed block that handles this URL.
    var embedBlock = util_createUpgradedEmbedBlock({
      attributes: {
        url: url
      }
    });

    if (undefined !== embedBlock) {
      onReplace(embedBlock);
    }
  }

  function onSetHref(props) {
    setAttributes(props);
  }

  function onSetTitle(value) {
    // This is the HTML title attribute, separate from the media object
    // title.
    setAttributes({
      title: value
    });
  }

  function onFocusCaption() {
    if (!captionFocused) {
      setCaptionFocused(true);
    }
  }

  function onImageClick() {
    if (captionFocused) {
      setCaptionFocused(false);
    }
  }

  function updateAlt(newAlt) {
    setAttributes({
      alt: newAlt
    });
  }

  function updateImage(newSizeSlug) {
    var newUrl = Object(external_this_lodash_["get"])(image, ['media_details', 'sizes', newSizeSlug, 'source_url']);

    if (!newUrl) {
      return null;
    }

    setAttributes({
      url: newUrl,
      width: undefined,
      height: undefined,
      sizeSlug: newSizeSlug
    });
  }

  Object(external_this_wp_element_["useEffect"])(function () {
    if (!isSelected) {
      setIsEditingImage(false);
    }
  }, [isSelected]);
  var canEditImage = id && naturalWidth && naturalHeight;
  var controls = Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockControls"], null, !isEditingImage && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToolbarGroup"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["__experimentalImageURLInputUI"], {
    url: href || '',
    onChangeUrl: onSetHref,
    linkDestination: linkDestination,
    mediaUrl: image && image.source_url,
    mediaLink: image && image.link,
    linkTarget: linkTarget,
    linkClass: linkClass,
    rel: rel
  })), canEditImage && !isEditingImage && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToolbarGroup"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToolbarButton"], {
    onClick: function onClick() {
      return setIsEditingImage(true);
    },
    icon: library_crop,
    label: Object(external_this_wp_i18n_["__"])('Crop')
  })), !isEditingImage && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["MediaReplaceFlow"], {
    mediaId: id,
    mediaURL: url,
    allowedTypes: ALLOWED_MEDIA_TYPES,
    accept: "image/*",
    onSelect: onSelectImage,
    onSelectURL: onSelectURL,
    onError: onUploadError
  })), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InspectorControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
    title: Object(external_this_wp_i18n_["__"])('Image settings')
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["TextareaControl"], {
    label: Object(external_this_wp_i18n_["__"])('Alt text (alternative text)'),
    value: alt,
    onChange: updateAlt,
    help: Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ExternalLink"], {
      href: "https://www.w3.org/WAI/tutorials/images/decision-tree"
    }, Object(external_this_wp_i18n_["__"])('Describe the purpose of the image')), Object(external_this_wp_i18n_["__"])('Leave empty if the image is purely decorative.'))
  }), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["__experimentalImageSizeControl"], {
    onChangeImage: updateImage,
    onChange: function onChange(value) {
      return setAttributes(value);
    },
    slug: sizeSlug,
    width: width,
    height: height,
    imageSizeOptions: imageSizeOptions,
    isResizable: isResizable,
    imageWidth: naturalWidth,
    imageHeight: naturalHeight
  }))), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InspectorAdvancedControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["TextControl"], {
    label: Object(external_this_wp_i18n_["__"])('Title attribute'),
    value: title || '',
    onChange: onSetTitle,
    help: Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_i18n_["__"])('Describe the role of this image on the page.'), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ExternalLink"], {
      href: "https://www.w3.org/TR/html52/dom.html#the-title-attribute"
    }, Object(external_this_wp_i18n_["__"])('(Note: many devices and browsers do not display this text.)')))
  })));
  var filename = getFilename(url);
  var defaultedAlt;

  if (alt) {
    defaultedAlt = alt;
  } else if (filename) {
    defaultedAlt = Object(external_this_wp_i18n_["sprintf"])(
    /* translators: %s: file name */
    Object(external_this_wp_i18n_["__"])('This image has an empty alt attribute; its file name is %s'), filename);
  } else {
    defaultedAlt = Object(external_this_wp_i18n_["__"])('This image has an empty alt attribute');
  }

  var img = // Disable reason: Image itself is not meant to be interactive, but
  // should direct focus to block.

  /* eslint-disable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events */
  Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])("img", {
    src: url,
    alt: defaultedAlt,
    onClick: onImageClick,
    onError: function onError() {
      return onImageError();
    },
    onLoad: function onLoad(event) {
      setNaturalSize(Object(external_this_lodash_["pick"])(event.target, ['naturalWidth', 'naturalHeight']));
    }
  }), Object(external_this_wp_blob_["isBlobURL"])(url) && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Spinner"], null))
  /* eslint-enable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events */
  ;
  var imageWidthWithinContainer;
  var imageHeightWithinContainer;

  if (clientWidth && naturalWidth && naturalHeight) {
    var exceedMaxWidth = naturalWidth > clientWidth;
    var ratio = naturalHeight / naturalWidth;
    imageWidthWithinContainer = exceedMaxWidth ? clientWidth : naturalWidth;
    imageHeightWithinContainer = exceedMaxWidth ? clientWidth * ratio : naturalHeight;
  }

  if (canEditImage && isEditingImage) {
    img = Object(external_this_wp_element_["createElement"])(ImageEditor, {
      id: id,
      url: url,
      setAttributes: setAttributes,
      naturalWidth: naturalWidth,
      naturalHeight: naturalHeight,
      width: width,
      height: height,
      clientWidth: clientWidth,
      setIsEditingImage: setIsEditingImage
    });
  } else if (!isResizable || !imageWidthWithinContainer) {
    img = Object(external_this_wp_element_["createElement"])("div", {
      style: {
        width: width,
        height: height
      }
    }, img);
  } else {
    var currentWidth = width || imageWidthWithinContainer;
    var currentHeight = height || imageHeightWithinContainer;

    var _ratio = naturalWidth / naturalHeight;

    var minWidth = naturalWidth < naturalHeight ? MIN_SIZE : MIN_SIZE * _ratio;
    var minHeight = naturalHeight < naturalWidth ? MIN_SIZE : MIN_SIZE / _ratio; // With the current implementation of ResizableBox, an image needs an
    // explicit pixel value for the max-width. In absence of being able to
    // set the content-width, this max-width is currently dictated by the
    // vanilla editor style. The following variable adds a buffer to this
    // vanilla style, so 3rd party themes have some wiggleroom. This does,
    // in most cases, allow you to scale the image beyond the width of the
    // main column, though not infinitely.
    // @todo It would be good to revisit this once a content-width variable
    // becomes available.

    var maxWidthBuffer = maxWidth * 2.5;
    var showRightHandle = false;
    var showLeftHandle = false;
    /* eslint-disable no-lonely-if */
    // See https://github.com/WordPress/gutenberg/issues/7584.

    if (align === 'center') {
      // When the image is centered, show both handles.
      showRightHandle = true;
      showLeftHandle = true;
    } else if (isRTL) {
      // In RTL mode the image is on the right by default.
      // Show the right handle and hide the left handle only when it is
      // aligned left. Otherwise always show the left handle.
      if (align === 'left') {
        showRightHandle = true;
      } else {
        showLeftHandle = true;
      }
    } else {
      // Show the left handle and hide the right handle only when the
      // image is aligned right. Otherwise always show the right handle.
      if (align === 'right') {
        showLeftHandle = true;
      } else {
        showRightHandle = true;
      }
    }
    /* eslint-enable no-lonely-if */


    img = Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ResizableBox"], {
      size: {
        width: width,
        height: height
      },
      showHandle: isSelected,
      minWidth: minWidth,
      maxWidth: maxWidthBuffer,
      minHeight: minHeight,
      maxHeight: maxWidthBuffer / _ratio,
      lockAspectRatio: true,
      enable: {
        top: false,
        right: showRightHandle,
        bottom: true,
        left: showLeftHandle
      },
      onResizeStart: onResizeStart,
      onResizeStop: function onResizeStop(event, direction, elt, delta) {
        _onResizeStop();

        setAttributes({
          width: parseInt(currentWidth + delta.width, 10),
          height: parseInt(currentHeight + delta.height, 10)
        });
      }
    }, img);
  }

  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, controls, img, (!external_this_wp_blockEditor_["RichText"].isEmpty(caption) || isSelected) && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"], {
    tagName: "figcaption",
    placeholder: Object(external_this_wp_i18n_["__"])('Write caption…'),
    value: caption,
    unstableOnFocus: onFocusCaption,
    onChange: function onChange(value) {
      return setAttributes({
        caption: value
      });
    },
    isSelected: captionFocused,
    inlineToolbar: true,
    __unstableOnSplitAtEnd: function __unstableOnSplitAtEnd() {
      return insertBlocksAfter(Object(external_this_wp_blocks_["createBlock"])('core/paragraph'));
    }
  }));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/image/edit.js




function image_edit_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function image_edit_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { image_edit_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { image_edit_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */


/**
 * Module constants
 */


var edit_pickRelevantMediaFiles = function pickRelevantMediaFiles(image) {
  var imageProps = Object(external_this_lodash_["pick"])(image, ['alt', 'id', 'link', 'caption']);
  imageProps.url = Object(external_this_lodash_["get"])(image, ['sizes', 'large', 'url']) || Object(external_this_lodash_["get"])(image, ['media_details', 'sizes', 'large', 'source_url']) || image.url;
  return imageProps;
};
/**
 * Is the URL a temporary blob URL? A blob URL is one that is used temporarily
 * while the image is being uploaded and will not have an id yet allocated.
 *
 * @param {number=} id The id of the image.
 * @param {string=} url The url of the image.
 *
 * @return {boolean} Is the URL a Blob URL
 */

var edit_isTemporaryImage = function isTemporaryImage(id, url) {
  return !id && Object(external_this_wp_blob_["isBlobURL"])(url);
};
/**
 * Is the url for the image hosted externally. An externally hosted image has no
 * id and is not a blob url.
 *
 * @param {number=} id  The id of the image.
 * @param {string=} url The url of the image.
 *
 * @return {boolean} Is the url an externally hosted url?
 */


var edit_isExternalImage = function isExternalImage(id, url) {
  return url && !id && !Object(external_this_wp_blob_["isBlobURL"])(url);
};

function ImageEdit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes,
      isSelected = _ref.isSelected,
      className = _ref.className,
      noticeUI = _ref.noticeUI,
      insertBlocksAfter = _ref.insertBlocksAfter,
      noticeOperations = _ref.noticeOperations,
      onReplace = _ref.onReplace;
  var _attributes$url = attributes.url,
      url = _attributes$url === void 0 ? '' : _attributes$url,
      alt = attributes.alt,
      caption = attributes.caption,
      align = attributes.align,
      id = attributes.id,
      linkDestination = attributes.linkDestination,
      width = attributes.width,
      height = attributes.height,
      sizeSlug = attributes.sizeSlug;
  var ref = Object(external_this_wp_element_["useRef"])();
  var mediaUpload = Object(external_this_wp_data_["useSelect"])(function (select) {
    var _select = select('core/block-editor'),
        getSettings = _select.getSettings;

    return getSettings().mediaUpload;
  });

  function onUploadError(message) {
    noticeOperations.removeAllNotices();
    noticeOperations.createErrorNotice(message);
  }

  function onSelectImage(media) {
    if (!media || !media.url) {
      setAttributes({
        url: undefined,
        alt: undefined,
        id: undefined,
        title: undefined,
        caption: undefined
      });
      return;
    }

    var mediaAttributes = edit_pickRelevantMediaFiles(media); // If the current image is temporary but an alt text was meanwhile
    // written by the user, make sure the text is not overwritten.

    if (edit_isTemporaryImage(id, url)) {
      if (alt) {
        mediaAttributes = Object(external_this_lodash_["omit"])(mediaAttributes, ['alt']);
      }
    } // If a caption text was meanwhile written by the user,
    // make sure the text is not overwritten by empty captions.


    if (caption && !Object(external_this_lodash_["get"])(mediaAttributes, ['caption'])) {
      mediaAttributes = Object(external_this_lodash_["omit"])(mediaAttributes, ['caption']);
    }

    var additionalAttributes; // Reset the dimension attributes if changing to a different image.

    if (!media.id || media.id !== id) {
      additionalAttributes = {
        width: undefined,
        height: undefined,
        sizeSlug: DEFAULT_SIZE_SLUG
      };
    } else {
      // Keep the same url when selecting the same file, so "Image Size"
      // option is not changed.
      additionalAttributes = {
        url: url
      };
    } // Check if the image is linked to it's media.


    if (linkDestination === LINK_DESTINATION_MEDIA) {
      // Update the media link.
      mediaAttributes.href = media.url;
    } // Check if the image is linked to the attachment page.


    if (linkDestination === LINK_DESTINATION_ATTACHMENT) {
      // Update the media link.
      mediaAttributes.href = media.link;
    }

    setAttributes(image_edit_objectSpread({}, mediaAttributes, {}, additionalAttributes));
  }

  function onSelectURL(newURL) {
    if (newURL !== url) {
      setAttributes({
        url: newURL,
        id: undefined,
        sizeSlug: DEFAULT_SIZE_SLUG
      });
    }
  }

  function updateAlignment(nextAlign) {
    var extraUpdatedAttributes = ['wide', 'full'].includes(nextAlign) ? {
      width: undefined,
      height: undefined
    } : {};
    setAttributes(image_edit_objectSpread({}, extraUpdatedAttributes, {
      align: nextAlign
    }));
  }

  var isTemp = edit_isTemporaryImage(id, url); // Upload a temporary image on mount.

  Object(external_this_wp_element_["useEffect"])(function () {
    if (!isTemp) {
      return;
    }

    var file = Object(external_this_wp_blob_["getBlobByURL"])(url);

    if (file) {
      mediaUpload({
        filesList: [file],
        onFileChange: function onFileChange(_ref2) {
          var _ref3 = Object(slicedToArray["a" /* default */])(_ref2, 1),
              img = _ref3[0];

          onSelectImage(img);
        },
        allowedTypes: ALLOWED_MEDIA_TYPES,
        onError: function onError(message) {
          noticeOperations.createErrorNotice(message);
        }
      });
    }
  }, []); // If an image is temporary, revoke the Blob url when it is uploaded (and is
  // no longer temporary).

  Object(external_this_wp_element_["useEffect"])(function () {
    if (!isTemp) {
      return;
    }

    return function () {
      Object(external_this_wp_blob_["revokeBlobURL"])(url);
    };
  }, [isTemp]);
  var isExternal = edit_isExternalImage(id, url);
  var controls = Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockAlignmentToolbar"], {
    value: align,
    onChange: updateAlignment
  }));
  var src = isExternal ? url : undefined;
  var mediaPreview = !!url && Object(external_this_wp_element_["createElement"])("img", {
    alt: Object(external_this_wp_i18n_["__"])('Edit image'),
    title: Object(external_this_wp_i18n_["__"])('Edit image'),
    className: 'edit-image-preview',
    src: url
  });
  var mediaPlaceholder = Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["MediaPlaceholder"], {
    icon: Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockIcon"], {
      icon: library_image
    }),
    onSelect: onSelectImage,
    onSelectURL: onSelectURL,
    notices: noticeUI,
    onError: onUploadError,
    accept: "image/*",
    allowedTypes: ALLOWED_MEDIA_TYPES,
    value: {
      id: id,
      src: src
    },
    mediaPreview: mediaPreview,
    disableMediaButtons: url
  });
  var classes = classnames_default()(className, Object(defineProperty["a" /* default */])({
    'is-transient': Object(external_this_wp_blob_["isBlobURL"])(url),
    'is-resized': !!width || !!height,
    'is-focused': isSelected
  }, "size-".concat(sizeSlug), sizeSlug)); // Focussing the image caption after inserting an image relies on the
  // component remounting. This needs to be fixed.

  var key = !!url;
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, controls, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["__experimentalBlock"].figure, {
    ref: ref,
    className: classes,
    key: key
  }, url && Object(external_this_wp_element_["createElement"])(Image, {
    attributes: attributes,
    setAttributes: setAttributes,
    isSelected: isSelected,
    insertBlocksAfter: insertBlocksAfter,
    onReplace: onReplace,
    onSelectImage: onSelectImage,
    onSelectURL: onSelectURL,
    onUploadError: onUploadError,
    containerRef: ref
  }), mediaPlaceholder));
}
/* harmony default export */ var image_edit = (Object(external_this_wp_components_["withNotices"])(ImageEdit));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/image/save.js



/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */


function image_save_save(_ref) {
  var _classnames;

  var attributes = _ref.attributes;
  var url = attributes.url,
      alt = attributes.alt,
      caption = attributes.caption,
      align = attributes.align,
      href = attributes.href,
      rel = attributes.rel,
      linkClass = attributes.linkClass,
      width = attributes.width,
      height = attributes.height,
      id = attributes.id,
      linkTarget = attributes.linkTarget,
      sizeSlug = attributes.sizeSlug,
      title = attributes.title;
  var newRel = Object(external_this_lodash_["isEmpty"])(rel) ? undefined : rel;
  var classes = classnames_default()((_classnames = {}, Object(defineProperty["a" /* default */])(_classnames, "align".concat(align), align), Object(defineProperty["a" /* default */])(_classnames, "size-".concat(sizeSlug), sizeSlug), Object(defineProperty["a" /* default */])(_classnames, 'is-resized', width || height), _classnames));
  var image = Object(external_this_wp_element_["createElement"])("img", {
    src: url,
    alt: alt,
    className: id ? "wp-image-".concat(id) : null,
    width: width,
    height: height,
    title: title
  });
  var figure = Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, href ? Object(external_this_wp_element_["createElement"])("a", {
    className: linkClass,
    href: href,
    target: linkTarget,
    rel: newRel
  }, image) : image, !external_this_wp_blockEditor_["RichText"].isEmpty(caption) && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
    tagName: "figcaption",
    value: caption
  }));

  if ('left' === align || 'right' === align || 'center' === align) {
    return Object(external_this_wp_element_["createElement"])("div", null, Object(external_this_wp_element_["createElement"])("figure", {
      className: classes
    }, figure));
  }

  return Object(external_this_wp_element_["createElement"])("figure", {
    className: classes
  }, figure);
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/image/transforms.js


function transforms_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function transforms_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { transforms_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { transforms_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */


function stripFirstImage(attributes, _ref) {
  var shortcode = _ref.shortcode;

  var _document$implementat = document.implementation.createHTMLDocument(''),
      body = _document$implementat.body;

  body.innerHTML = shortcode.content;
  var nodeToRemove = body.querySelector('img'); // if an image has parents, find the topmost node to remove

  while (nodeToRemove && nodeToRemove.parentNode && nodeToRemove.parentNode !== body) {
    nodeToRemove = nodeToRemove.parentNode;
  }

  if (nodeToRemove) {
    nodeToRemove.parentNode.removeChild(nodeToRemove);
  }

  return body.innerHTML.trim();
}

function getFirstAnchorAttributeFormHTML(html, attributeName) {
  var _document$implementat2 = document.implementation.createHTMLDocument(''),
      body = _document$implementat2.body;

  body.innerHTML = html;
  var firstElementChild = body.firstElementChild;

  if (firstElementChild && firstElementChild.nodeName === 'A') {
    return firstElementChild.getAttribute(attributeName) || undefined;
  }
}

var imageSchema = {
  img: {
    attributes: ['src', 'alt', 'title'],
    classes: ['alignleft', 'aligncenter', 'alignright', 'alignnone', /^wp-image-\d+$/]
  }
};

var schema = function schema(_ref2) {
  var phrasingContentSchema = _ref2.phrasingContentSchema;
  return {
    figure: {
      require: ['img'],
      children: transforms_objectSpread({}, imageSchema, {
        a: {
          attributes: ['href', 'rel', 'target'],
          children: imageSchema
        },
        figcaption: {
          children: phrasingContentSchema
        }
      })
    }
  };
};

var image_transforms_transforms = {
  from: [{
    type: 'raw',
    isMatch: function isMatch(node) {
      return node.nodeName === 'FIGURE' && !!node.querySelector('img');
    },
    schema: schema,
    transform: function transform(node) {
      // Search both figure and image classes. Alignment could be
      // set on either. ID is set on the image.
      var className = node.className + ' ' + node.querySelector('img').className;
      var alignMatches = /(?:^|\s)align(left|center|right)(?:$|\s)/.exec(className);
      var align = alignMatches ? alignMatches[1] : undefined;
      var idMatches = /(?:^|\s)wp-image-(\d+)(?:$|\s)/.exec(className);
      var id = idMatches ? Number(idMatches[1]) : undefined;
      var anchorElement = node.querySelector('a');
      var linkDestination = anchorElement && anchorElement.href ? 'custom' : undefined;
      var href = anchorElement && anchorElement.href ? anchorElement.href : undefined;
      var rel = anchorElement && anchorElement.rel ? anchorElement.rel : undefined;
      var linkClass = anchorElement && anchorElement.className ? anchorElement.className : undefined;
      var attributes = Object(external_this_wp_blocks_["getBlockAttributes"])('core/image', node.outerHTML, {
        align: align,
        id: id,
        linkDestination: linkDestination,
        href: href,
        rel: rel,
        linkClass: linkClass
      });
      return Object(external_this_wp_blocks_["createBlock"])('core/image', attributes);
    }
  }, {
    type: 'files',
    isMatch: function isMatch(files) {
      return files.length === 1 && files[0].type.indexOf('image/') === 0;
    },
    transform: function transform(files) {
      var file = files[0]; // We don't need to upload the media directly here
      // It's already done as part of the `componentDidMount`
      // int the image block

      return Object(external_this_wp_blocks_["createBlock"])('core/image', {
        url: Object(external_this_wp_blob_["createBlobURL"])(file)
      });
    }
  }, {
    type: 'shortcode',
    tag: 'caption',
    attributes: {
      url: {
        type: 'string',
        source: 'attribute',
        attribute: 'src',
        selector: 'img'
      },
      alt: {
        type: 'string',
        source: 'attribute',
        attribute: 'alt',
        selector: 'img'
      },
      caption: {
        shortcode: stripFirstImage
      },
      href: {
        shortcode: function shortcode(attributes, _ref3) {
          var _shortcode = _ref3.shortcode;
          return getFirstAnchorAttributeFormHTML(_shortcode.content, 'href');
        }
      },
      rel: {
        shortcode: function shortcode(attributes, _ref4) {
          var _shortcode2 = _ref4.shortcode;
          return getFirstAnchorAttributeFormHTML(_shortcode2.content, 'rel');
        }
      },
      linkClass: {
        shortcode: function shortcode(attributes, _ref5) {
          var _shortcode3 = _ref5.shortcode;
          return getFirstAnchorAttributeFormHTML(_shortcode3.content, 'class');
        }
      },
      id: {
        type: 'number',
        shortcode: function shortcode(_ref6) {
          var id = _ref6.named.id;

          if (!id) {
            return;
          }

          return parseInt(id.replace('attachment_', ''), 10);
        }
      },
      align: {
        type: 'string',
        shortcode: function shortcode(_ref7) {
          var _ref7$named$align = _ref7.named.align,
              align = _ref7$named$align === void 0 ? 'alignnone' : _ref7$named$align;
          return align.replace('align', '');
        }
      }
    }
  }]
};
/* harmony default export */ var image_transforms = (image_transforms_transforms);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/image/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



var image_metadata = {
  name: "core/image",
  category: "media",
  attributes: {
    align: {
      type: "string"
    },
    url: {
      type: "string",
      source: "attribute",
      selector: "img",
      attribute: "src"
    },
    alt: {
      type: "string",
      source: "attribute",
      selector: "img",
      attribute: "alt",
      "default": ""
    },
    caption: {
      type: "string",
      source: "html",
      selector: "figcaption"
    },
    title: {
      type: "string",
      source: "attribute",
      selector: "img",
      attribute: "title"
    },
    href: {
      type: "string",
      source: "attribute",
      selector: "figure > a",
      attribute: "href"
    },
    rel: {
      type: "string",
      source: "attribute",
      selector: "figure > a",
      attribute: "rel"
    },
    linkClass: {
      type: "string",
      source: "attribute",
      selector: "figure > a",
      attribute: "class"
    },
    id: {
      type: "number"
    },
    width: {
      type: "number"
    },
    height: {
      type: "number"
    },
    sizeSlug: {
      type: "string"
    },
    linkDestination: {
      type: "string",
      "default": "none"
    },
    linkTarget: {
      type: "string",
      source: "attribute",
      selector: "figure > a",
      attribute: "target"
    }
  },
  supports: {
    lightBlockWrapper: true
  }
};


var image_name = image_metadata.name;

var image_settings = {
  title: Object(external_this_wp_i18n_["__"])('Image'),
  description: Object(external_this_wp_i18n_["__"])('Insert an image to make a visual statement.'),
  icon: library_image,
  keywords: ['img', // "img" is not translated as it is intended to reflect the HTML <img> tag.
  Object(external_this_wp_i18n_["__"])('photo')],
  example: {
    attributes: {
      sizeSlug: 'large',
      url: 'https://s.w.org/images/core/5.3/MtBlanc1.jpg',
      // translators: Caption accompanying an image of the Mont Blanc, which serves as an example for the Image block.
      caption: Object(external_this_wp_i18n_["__"])('Mont Blanc appears—still, snowy, and serene.')
    }
  },
  styles: [{
    name: 'default',
    label: Object(external_this_wp_i18n_["_x"])('Default', 'block style'),
    isDefault: true
  }, {
    name: 'rounded',
    label: Object(external_this_wp_i18n_["_x"])('Rounded', 'block style')
  }],
  __experimentalLabel: function __experimentalLabel(attributes, _ref) {
    var context = _ref.context;

    if (context === 'accessibility') {
      var caption = attributes.caption,
          alt = attributes.alt,
          url = attributes.url;

      if (!url) {
        return Object(external_this_wp_i18n_["__"])('Empty');
      }

      if (!alt) {
        return caption || '';
      } // This is intended to be read by a screen reader.
      // A period simply means a pause, no need to translate it.


      return alt + (caption ? '. ' + caption : '');
    }
  },
  getEditWrapperProps: function getEditWrapperProps(attributes) {
    return {
      'data-align': attributes.align
    };
  },
  transforms: image_transforms,
  edit: image_edit,
  save: image_save_save,
  deprecated: image_deprecated
};

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/heading.js


/**
 * WordPress dependencies
 */

var heading = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M6.2 5.2v13.4l5.8-4.8 5.8 4.8V5.2z"
}));
/* harmony default export */ var library_heading = (heading);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/heading/deprecated.js



function deprecated_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function deprecated_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { deprecated_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { deprecated_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */


var blockSupports = {
  className: false,
  anchor: true
};
var heading_deprecated_blockAttributes = {
  align: {
    type: 'string'
  },
  content: {
    type: 'string',
    source: 'html',
    selector: 'h1,h2,h3,h4,h5,h6',
    default: ''
  },
  level: {
    type: 'number',
    default: 2
  },
  placeholder: {
    type: 'string'
  }
};

var deprecated_migrateCustomColors = function migrateCustomColors(attributes) {
  if (!attributes.customTextColor) {
    return attributes;
  }

  var style = {
    color: {
      text: attributes.customTextColor
    }
  };
  return deprecated_objectSpread({}, Object(external_this_lodash_["omit"])(attributes, ['customTextColor']), {
    style: style
  });
};

var heading_deprecated_deprecated = [{
  supports: blockSupports,
  attributes: deprecated_objectSpread({}, heading_deprecated_blockAttributes, {
    customTextColor: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    }
  }),
  migrate: deprecated_migrateCustomColors,
  save: function save(_ref) {
    var _classnames;

    var attributes = _ref.attributes;
    var align = attributes.align,
        content = attributes.content,
        customTextColor = attributes.customTextColor,
        level = attributes.level,
        textColor = attributes.textColor;
    var tagName = 'h' + level;
    var textClass = Object(external_this_wp_blockEditor_["getColorClassName"])('color', textColor);
    var className = classnames_default()((_classnames = {}, Object(defineProperty["a" /* default */])(_classnames, textClass, textClass), Object(defineProperty["a" /* default */])(_classnames, 'has-text-color', textColor || customTextColor), Object(defineProperty["a" /* default */])(_classnames, "has-text-align-".concat(align), align), _classnames));
    return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      className: className ? className : undefined,
      tagName: tagName,
      style: {
        color: textClass ? undefined : customTextColor
      },
      value: content
    });
  }
}, {
  attributes: deprecated_objectSpread({}, heading_deprecated_blockAttributes, {
    customTextColor: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    }
  }),
  migrate: deprecated_migrateCustomColors,
  save: function save(_ref2) {
    var _classnames2;

    var attributes = _ref2.attributes;
    var align = attributes.align,
        content = attributes.content,
        customTextColor = attributes.customTextColor,
        level = attributes.level,
        textColor = attributes.textColor;
    var tagName = 'h' + level;
    var textClass = Object(external_this_wp_blockEditor_["getColorClassName"])('color', textColor);
    var className = classnames_default()((_classnames2 = {}, Object(defineProperty["a" /* default */])(_classnames2, textClass, textClass), Object(defineProperty["a" /* default */])(_classnames2, "has-text-align-".concat(align), align), _classnames2));
    return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      className: className ? className : undefined,
      tagName: tagName,
      style: {
        color: textClass ? undefined : customTextColor
      },
      value: content
    });
  },
  supports: blockSupports
}, {
  supports: blockSupports,
  attributes: deprecated_objectSpread({}, heading_deprecated_blockAttributes, {
    customTextColor: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    }
  }),
  migrate: deprecated_migrateCustomColors,
  save: function save(_ref3) {
    var attributes = _ref3.attributes;
    var align = attributes.align,
        level = attributes.level,
        content = attributes.content,
        textColor = attributes.textColor,
        customTextColor = attributes.customTextColor;
    var tagName = 'h' + level;
    var textClass = Object(external_this_wp_blockEditor_["getColorClassName"])('color', textColor);
    var className = classnames_default()(Object(defineProperty["a" /* default */])({}, textClass, textClass));
    return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      className: className ? className : undefined,
      tagName: tagName,
      style: {
        textAlign: align,
        color: textClass ? undefined : customTextColor
      },
      value: content
    });
  }
}];
/* harmony default export */ var heading_deprecated = (heading_deprecated_deprecated);

// EXTERNAL MODULE: external {"this":["wp","keycodes"]}
var external_this_wp_keycodes_ = __webpack_require__(22);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/heading/heading-level-icon.js


/**
 * WordPress dependencies
 */

/** @typedef {import('@wordpress/element').WPComponent} WPComponent */

/**
 * HeadingLevelIcon props.
 *
 * @typedef WPHeadingLevelIconProps
 *
 * @property {number}   level     The heading level to show an icon for.
 * @property {?boolean} isPressed Whether or not the icon should appear pressed; default: false.
 */

/**
 * Heading level icon.
 *
 * @param {WPHeadingLevelIconProps} props Component props.
 *
 * @return {?WPComponent} The icon.
 */

function HeadingLevelIcon(_ref) {
  var level = _ref.level,
      _ref$isPressed = _ref.isPressed,
      isPressed = _ref$isPressed === void 0 ? false : _ref$isPressed;
  var levelToPath = {
    1: 'M9 5h2v10H9v-4H5v4H3V5h2v4h4V5zm6.6 0c-.6.9-1.5 1.7-2.6 2v1h2v7h2V5h-1.4z',
    2: 'M7 5h2v10H7v-4H3v4H1V5h2v4h4V5zm8 8c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6V15h8v-2H15z',
    3: 'M12.1 12.2c.4.3.8.5 1.2.7.4.2.9.3 1.4.3.5 0 1-.1 1.4-.3.3-.1.5-.5.5-.8 0-.2 0-.4-.1-.6-.1-.2-.3-.3-.5-.4-.3-.1-.7-.2-1-.3-.5-.1-1-.1-1.5-.1V9.1c.7.1 1.5-.1 2.2-.4.4-.2.6-.5.6-.9 0-.3-.1-.6-.4-.8-.3-.2-.7-.3-1.1-.3-.4 0-.8.1-1.1.3-.4.2-.7.4-1.1.6l-1.2-1.4c.5-.4 1.1-.7 1.6-.9.5-.2 1.2-.3 1.8-.3.5 0 1 .1 1.6.2.4.1.8.3 1.2.5.3.2.6.5.8.8.2.3.3.7.3 1.1 0 .5-.2.9-.5 1.3-.4.4-.9.7-1.5.9v.1c.6.1 1.2.4 1.6.8.4.4.7.9.7 1.5 0 .4-.1.8-.3 1.2-.2.4-.5.7-.9.9-.4.3-.9.4-1.3.5-.5.1-1 .2-1.6.2-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1l1.1-1.4zM7 9H3V5H1v10h2v-4h4v4h2V5H7v4z',
    4: 'M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm10-2h-1v2h-2v-2h-5v-2l4-6h3v6h1v2zm-3-2V7l-2.8 4H16z',
    5: 'M12.1 12.2c.4.3.7.5 1.1.7.4.2.9.3 1.3.3.5 0 1-.1 1.4-.4.4-.3.6-.7.6-1.1 0-.4-.2-.9-.6-1.1-.4-.3-.9-.4-1.4-.4H14c-.1 0-.3 0-.4.1l-.4.1-.5.2-1-.6.3-5h6.4v1.9h-4.3L14 8.8c.2-.1.5-.1.7-.2.2 0 .5-.1.7-.1.5 0 .9.1 1.4.2.4.1.8.3 1.1.6.3.2.6.6.8.9.2.4.3.9.3 1.4 0 .5-.1 1-.3 1.4-.2.4-.5.8-.9 1.1-.4.3-.8.5-1.3.7-.5.2-1 .3-1.5.3-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1-.1-.1 1-1.5 1-1.5zM9 15H7v-4H3v4H1V5h2v4h4V5h2v10z',
    6: 'M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm8.6-7.5c-.2-.2-.5-.4-.8-.5-.6-.2-1.3-.2-1.9 0-.3.1-.6.3-.8.5l-.6.9c-.2.5-.2.9-.2 1.4.4-.3.8-.6 1.2-.8.4-.2.8-.3 1.3-.3.4 0 .8 0 1.2.2.4.1.7.3 1 .6.3.3.5.6.7.9.2.4.3.8.3 1.3s-.1.9-.3 1.4c-.2.4-.5.7-.8 1-.4.3-.8.5-1.2.6-1 .3-2 .3-3 0-.5-.2-1-.5-1.4-.9-.4-.4-.8-.9-1-1.5-.2-.6-.3-1.3-.3-2.1s.1-1.6.4-2.3c.2-.6.6-1.2 1-1.6.4-.4.9-.7 1.4-.9.6-.3 1.1-.4 1.7-.4.7 0 1.4.1 2 .3.5.2 1 .5 1.4.8 0 .1-1.3 1.4-1.3 1.4zm-2.4 5.8c.2 0 .4 0 .6-.1.2 0 .4-.1.5-.2.1-.1.3-.3.4-.5.1-.2.1-.5.1-.7 0-.4-.1-.8-.4-1.1-.3-.2-.7-.3-1.1-.3-.3 0-.7.1-1 .2-.4.2-.7.4-1 .7 0 .3.1.7.3 1 .1.2.3.4.4.6.2.1.3.3.5.3.2.1.5.2.7.1z'
  };

  if (!levelToPath.hasOwnProperty(level)) {
    return null;
  }

  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
    width: "24",
    height: "24",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    isPressed: isPressed
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
    d: levelToPath[level]
  }));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/heading/heading-level-dropdown.js


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


var HEADING_LEVELS = [1, 2, 3, 4, 5, 6];
var heading_level_dropdown_POPOVER_PROPS = {
  className: 'block-library-heading-level-dropdown',
  isAlternate: true
};
/** @typedef {import('@wordpress/element').WPComponent} WPComponent */

/**
 * HeadingLevelDropdown props.
 *
 * @typedef WPHeadingLevelDropdownProps
 *
 * @property {number}                 selectedLevel The chosen heading level.
 * @property {(newValue:number)=>any} onChange      Callback to run when
 *                                                  toolbar value is changed.
 */

/**
 * Dropdown for selecting a heading level (1 through 6).
 *
 * @param {WPHeadingLevelDropdownProps} props Component props.
 *
 * @return {WPComponent} The toolbar.
 */

function HeadingLevelDropdown(_ref) {
  var selectedLevel = _ref.selectedLevel,
      onChange = _ref.onChange;
  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Dropdown"], {
    popoverProps: heading_level_dropdown_POPOVER_PROPS,
    renderToggle: function renderToggle(_ref2) {
      var onToggle = _ref2.onToggle,
          isOpen = _ref2.isOpen;

      var openOnArrowDown = function openOnArrowDown(event) {
        if (!isOpen && event.keyCode === external_this_wp_keycodes_["DOWN"]) {
          event.preventDefault();
          event.stopPropagation();
          onToggle();
        }
      };

      return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToolbarButton"], {
        "aria-expanded": isOpen,
        "aria-haspopup": "true",
        icon: Object(external_this_wp_element_["createElement"])(HeadingLevelIcon, {
          level: selectedLevel
        }),
        label: Object(external_this_wp_i18n_["__"])('Change heading level'),
        onClick: onToggle,
        onKeyDown: openOnArrowDown,
        showTooltip: true
      });
    },
    renderContent: function renderContent() {
      return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Toolbar"], {
        className: "block-library-heading-level-toolbar",
        __experimentalAccessibilityLabel: Object(external_this_wp_i18n_["__"])('Change heading level')
      }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToolbarGroup"], {
        isCollapsed: false,
        controls: HEADING_LEVELS.map(function (targetLevel) {
          var isActive = targetLevel === selectedLevel;
          return {
            icon: Object(external_this_wp_element_["createElement"])(HeadingLevelIcon, {
              level: targetLevel,
              isPressed: isActive
            }),
            title: Object(external_this_wp_i18n_["sprintf"])( // translators: %s: heading level e.g: "1", "2", "3"
            Object(external_this_wp_i18n_["__"])('Heading %d'), targetLevel),
            isActive: isActive,
            onClick: function onClick() {
              onChange(targetLevel);
            }
          };
        })
      }));
    }
  });
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/heading/edit.js



function heading_edit_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function heading_edit_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { heading_edit_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { heading_edit_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



function HeadingEdit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes,
      mergeBlocks = _ref.mergeBlocks,
      onReplace = _ref.onReplace,
      mergedStyle = _ref.mergedStyle;
  var align = attributes.align,
      content = attributes.content,
      level = attributes.level,
      placeholder = attributes.placeholder;
  var tagName = 'h' + level;
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToolbarGroup"], null, Object(external_this_wp_element_["createElement"])(HeadingLevelDropdown, {
    selectedLevel: level,
    onChange: function onChange(newLevel) {
      return setAttributes({
        level: newLevel
      });
    }
  })), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["AlignmentToolbar"], {
    value: align,
    onChange: function onChange(nextAlign) {
      setAttributes({
        align: nextAlign
      });
    }
  })), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"], {
    identifier: "content",
    tagName: external_this_wp_blockEditor_["__experimentalBlock"][tagName],
    value: content,
    onChange: function onChange(value) {
      return setAttributes({
        content: value
      });
    },
    onMerge: mergeBlocks,
    onSplit: function onSplit(value) {
      if (!value) {
        return Object(external_this_wp_blocks_["createBlock"])('core/paragraph');
      }

      return Object(external_this_wp_blocks_["createBlock"])('core/heading', heading_edit_objectSpread({}, attributes, {
        content: value
      }));
    },
    onReplace: onReplace,
    onRemove: function onRemove() {
      return onReplace([]);
    },
    className: classnames_default()(Object(defineProperty["a" /* default */])({}, "has-text-align-".concat(align), align)),
    placeholder: placeholder || Object(external_this_wp_i18n_["__"])('Write heading…'),
    textAlign: align,
    style: mergedStyle
  }));
}

/* harmony default export */ var heading_edit = (HeadingEdit);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/heading/save.js



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


function heading_save_save(_ref) {
  var attributes = _ref.attributes;
  var align = attributes.align,
      content = attributes.content,
      level = attributes.level;
  var tagName = 'h' + level;
  var className = classnames_default()(Object(defineProperty["a" /* default */])({}, "has-text-align-".concat(align), align));
  return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
    className: className ? className : undefined,
    tagName: tagName,
    value: content
  });
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/heading/shared.js
/**
 * Given a node name string for a heading node, returns its numeric level.
 *
 * @param {string} nodeName Heading node name.
 *
 * @return {number} Heading level.
 */
function getLevelFromHeadingNodeName(nodeName) {
  return Number(nodeName.substr(1));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/heading/transforms.js


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


var transforms_name$category$attrib = {
  name: "core/heading",
  category: "text",
  attributes: {
    align: {
      type: "string"
    },
    content: {
      type: "string",
      source: "html",
      selector: "h1,h2,h3,h4,h5,h6",
      "default": ""
    },
    level: {
      type: "number",
      "default": 2
    },
    placeholder: {
      type: "string"
    }
  },
  supports: {
    anchor: true,
    className: false,
    lightBlockWrapper: true,
    __experimentalColor: {
      linkColor: true
    },
    __experimentalFontSize: true,
    __experimentalLineHeight: true,
    __experimentalSelector: {
      "core/heading/h1": "h1",
      "core/heading/h2": "h2",
      "core/heading/h3": "h3",
      "core/heading/h4": "h4",
      "core/heading/h5": "h5",
      "core/heading/h6": "h6"
    },
    __unstablePasteTextInline: true
  }
},
    heading_transforms_name = transforms_name$category$attrib.name;
var heading_transforms_transforms = {
  from: [{
    type: 'block',
    blocks: ['core/paragraph'],
    transform: function transform(_ref) {
      var content = _ref.content;
      return Object(external_this_wp_blocks_["createBlock"])(heading_transforms_name, {
        content: content
      });
    }
  }, {
    type: 'raw',
    selector: 'h1,h2,h3,h4,h5,h6',
    schema: function schema(_ref2) {
      var phrasingContentSchema = _ref2.phrasingContentSchema,
          isPaste = _ref2.isPaste;
      var schema = {
        children: phrasingContentSchema,
        attributes: isPaste ? [] : ['style']
      };
      return {
        h1: schema,
        h2: schema,
        h3: schema,
        h4: schema,
        h5: schema,
        h6: schema
      };
    },
    transform: function transform(node) {
      var attributes = Object(external_this_wp_blocks_["getBlockAttributes"])(heading_transforms_name, node.outerHTML);

      var _ref3 = node.style || {},
          textAlign = _ref3.textAlign;

      attributes.level = getLevelFromHeadingNodeName(node.nodeName);

      if (textAlign === 'left' || textAlign === 'center' || textAlign === 'right') {
        attributes.align = textAlign;
      }

      return Object(external_this_wp_blocks_["createBlock"])(heading_transforms_name, attributes);
    }
  }].concat(Object(toConsumableArray["a" /* default */])([2, 3, 4, 5, 6].map(function (level) {
    return {
      type: 'prefix',
      prefix: Array(level + 1).join('#'),
      transform: function transform(content) {
        return Object(external_this_wp_blocks_["createBlock"])(heading_transforms_name, {
          level: level,
          content: content
        });
      }
    };
  }))),
  to: [{
    type: 'block',
    blocks: ['core/paragraph'],
    transform: function transform(_ref4) {
      var content = _ref4.content;
      return Object(external_this_wp_blocks_["createBlock"])('core/paragraph', {
        content: content
      });
    }
  }]
};
/* harmony default export */ var heading_transforms = (heading_transforms_transforms);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/heading/index.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



var heading_metadata = {
  name: "core/heading",
  category: "text",
  attributes: {
    align: {
      type: "string"
    },
    content: {
      type: "string",
      source: "html",
      selector: "h1,h2,h3,h4,h5,h6",
      "default": ""
    },
    level: {
      type: "number",
      "default": 2
    },
    placeholder: {
      type: "string"
    }
  },
  supports: {
    anchor: true,
    className: false,
    lightBlockWrapper: true,
    __experimentalColor: {
      linkColor: true
    },
    __experimentalFontSize: true,
    __experimentalLineHeight: true,
    __experimentalSelector: {
      "core/heading/h1": "h1",
      "core/heading/h2": "h2",
      "core/heading/h3": "h3",
      "core/heading/h4": "h4",
      "core/heading/h5": "h5",
      "core/heading/h6": "h6"
    },
    __unstablePasteTextInline: true
  }
};


var heading_name = heading_metadata.name;

var heading_settings = {
  title: Object(external_this_wp_i18n_["__"])('Heading'),
  description: Object(external_this_wp_i18n_["__"])('Introduce new sections and organize content to help visitors (and search engines) understand the structure of your content.'),
  icon: library_heading,
  keywords: [Object(external_this_wp_i18n_["__"])('title'), Object(external_this_wp_i18n_["__"])('subtitle')],
  example: {
    attributes: {
      content: Object(external_this_wp_i18n_["__"])('Code is Poetry'),
      level: 2
    }
  },
  __experimentalLabel: function __experimentalLabel(attributes, _ref) {
    var context = _ref.context;

    if (context === 'accessibility') {
      var content = attributes.content,
          level = attributes.level;
      return Object(external_this_lodash_["isEmpty"])(content) ? Object(external_this_wp_i18n_["sprintf"])(
      /* translators: accessibility text. %s: heading level. */
      Object(external_this_wp_i18n_["__"])('Level %s. Empty.'), level) : Object(external_this_wp_i18n_["sprintf"])(
      /* translators: accessibility text. 1: heading level. 2: heading content. */
      Object(external_this_wp_i18n_["__"])('Level %1$s. %2$s'), level, content);
    }
  },
  transforms: heading_transforms,
  deprecated: heading_deprecated,
  merge: function merge(attributes, attributesToMerge) {
    return {
      content: (attributes.content || '') + (attributesToMerge.content || '')
    };
  },
  edit: heading_edit,
  save: heading_save_save
};

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/quote.js


/**
 * WordPress dependencies
 */

var quote = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M13 6v6h5.2v4c0 .8-.2 1.4-.5 1.7-.6.6-1.6.6-2.5.5h-.3v1.5h.5c1 0 2.3-.1 3.3-1 .6-.6 1-1.6 1-2.8V6H13zm-9 6h5.2v4c0 .8-.2 1.4-.5 1.7-.6.6-1.6.6-2.5.5h-.3v1.5h.5c1 0 2.3-.1 3.3-1 .6-.6 1-1.6 1-2.8V6H4v6z"
}));
/* harmony default export */ var library_quote = (quote);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/quote/deprecated.js



function quote_deprecated_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function quote_deprecated_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { quote_deprecated_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { quote_deprecated_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


var quote_deprecated_blockAttributes = {
  value: {
    type: 'string',
    source: 'html',
    selector: 'blockquote',
    multiline: 'p',
    default: ''
  },
  citation: {
    type: 'string',
    source: 'html',
    selector: 'cite',
    default: ''
  },
  align: {
    type: 'string'
  }
};
var quote_deprecated_deprecated = [{
  attributes: quote_deprecated_blockAttributes,
  save: function save(_ref) {
    var attributes = _ref.attributes;
    var align = attributes.align,
        value = attributes.value,
        citation = attributes.citation;
    return Object(external_this_wp_element_["createElement"])("blockquote", {
      style: {
        textAlign: align ? align : null
      }
    }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      multiline: true,
      value: value
    }), !external_this_wp_blockEditor_["RichText"].isEmpty(citation) && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      tagName: "cite",
      value: citation
    }));
  }
}, {
  attributes: quote_deprecated_objectSpread({}, quote_deprecated_blockAttributes, {
    style: {
      type: 'number',
      default: 1
    }
  }),
  migrate: function migrate(attributes) {
    if (attributes.style === 2) {
      return quote_deprecated_objectSpread({}, Object(external_this_lodash_["omit"])(attributes, ['style']), {
        className: attributes.className ? attributes.className + ' is-style-large' : 'is-style-large'
      });
    }

    return attributes;
  },
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    var align = attributes.align,
        value = attributes.value,
        citation = attributes.citation,
        style = attributes.style;
    return Object(external_this_wp_element_["createElement"])("blockquote", {
      className: style === 2 ? 'is-large' : '',
      style: {
        textAlign: align ? align : null
      }
    }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      multiline: true,
      value: value
    }), !external_this_wp_blockEditor_["RichText"].isEmpty(citation) && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      tagName: "cite",
      value: citation
    }));
  }
}, {
  attributes: quote_deprecated_objectSpread({}, quote_deprecated_blockAttributes, {
    citation: {
      type: 'string',
      source: 'html',
      selector: 'footer',
      default: ''
    },
    style: {
      type: 'number',
      default: 1
    }
  }),
  save: function save(_ref3) {
    var attributes = _ref3.attributes;
    var align = attributes.align,
        value = attributes.value,
        citation = attributes.citation,
        style = attributes.style;
    return Object(external_this_wp_element_["createElement"])("blockquote", {
      className: "blocks-quote-style-".concat(style),
      style: {
        textAlign: align ? align : null
      }
    }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      multiline: true,
      value: value
    }), !external_this_wp_blockEditor_["RichText"].isEmpty(citation) && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      tagName: "footer",
      value: citation
    }));
  }
}];
/* harmony default export */ var quote_deprecated = (quote_deprecated_deprecated);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/quote/edit.js



function quote_edit_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function quote_edit_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { quote_edit_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { quote_edit_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





function QuoteEdit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes,
      isSelected = _ref.isSelected,
      mergeBlocks = _ref.mergeBlocks,
      onReplace = _ref.onReplace,
      className = _ref.className,
      insertBlocksAfter = _ref.insertBlocksAfter;
  var align = attributes.align,
      value = attributes.value,
      citation = attributes.citation;
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["AlignmentToolbar"], {
    value: align,
    onChange: function onChange(nextAlign) {
      setAttributes({
        align: nextAlign
      });
    }
  })), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["BlockQuotation"], {
    className: classnames_default()(className, Object(defineProperty["a" /* default */])({}, "has-text-align-".concat(align), align))
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"], {
    identifier: "value",
    multiline: true,
    value: value,
    onChange: function onChange(nextValue) {
      return setAttributes({
        value: nextValue
      });
    },
    onMerge: mergeBlocks,
    onRemove: function onRemove(forward) {
      var hasEmptyCitation = !citation || citation.length === 0;

      if (!forward && hasEmptyCitation) {
        onReplace([]);
      }
    },
    placeholder: // translators: placeholder text used for the quote
    Object(external_this_wp_i18n_["__"])('Write quote…'),
    onReplace: onReplace,
    onSplit: function onSplit(piece) {
      return Object(external_this_wp_blocks_["createBlock"])('core/quote', quote_edit_objectSpread({}, attributes, {
        value: piece
      }));
    },
    __unstableOnSplitMiddle: function __unstableOnSplitMiddle() {
      return Object(external_this_wp_blocks_["createBlock"])('core/paragraph');
    },
    textAlign: align
  }), (!external_this_wp_blockEditor_["RichText"].isEmpty(citation) || isSelected) && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"], {
    identifier: "citation",
    value: citation,
    onChange: function onChange(nextCitation) {
      return setAttributes({
        citation: nextCitation
      });
    },
    __unstableMobileNoFocusOnMount: true,
    placeholder: // translators: placeholder text used for the citation
    Object(external_this_wp_i18n_["__"])('Write citation…'),
    className: "wp-block-quote__citation",
    textAlign: align,
    __unstableOnSplitAtEnd: function __unstableOnSplitAtEnd() {
      return insertBlocksAfter(Object(external_this_wp_blocks_["createBlock"])('core/paragraph'));
    }
  })));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/quote/save.js



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


function quote_save_save(_ref) {
  var attributes = _ref.attributes;
  var align = attributes.align,
      value = attributes.value,
      citation = attributes.citation;
  var className = classnames_default()(Object(defineProperty["a" /* default */])({}, "has-text-align-".concat(align), align));
  return Object(external_this_wp_element_["createElement"])("blockquote", {
    className: className
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
    multiline: true,
    value: value
  }), !external_this_wp_blockEditor_["RichText"].isEmpty(citation) && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
    tagName: "cite",
    value: citation
  }));
}

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(14);

// EXTERNAL MODULE: external {"this":["wp","richText"]}
var external_this_wp_richText_ = __webpack_require__(25);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/quote/transforms.js




function quote_transforms_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function quote_transforms_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { quote_transforms_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { quote_transforms_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */


var quote_transforms_transforms = {
  from: [{
    type: 'block',
    isMultiBlock: true,
    blocks: ['core/paragraph'],
    transform: function transform(attributes) {
      return Object(external_this_wp_blocks_["createBlock"])('core/quote', {
        value: Object(external_this_wp_richText_["toHTMLString"])({
          value: Object(external_this_wp_richText_["join"])(attributes.map(function (_ref) {
            var content = _ref.content;
            return Object(external_this_wp_richText_["create"])({
              html: content
            });
          }), "\u2028"),
          multilineTag: 'p'
        })
      });
    }
  }, {
    type: 'block',
    blocks: ['core/heading'],
    transform: function transform(_ref2) {
      var content = _ref2.content;
      return Object(external_this_wp_blocks_["createBlock"])('core/quote', {
        value: "<p>".concat(content, "</p>")
      });
    }
  }, {
    type: 'block',
    blocks: ['core/pullquote'],
    transform: function transform(_ref3) {
      var value = _ref3.value,
          citation = _ref3.citation;
      return Object(external_this_wp_blocks_["createBlock"])('core/quote', {
        value: value,
        citation: citation
      });
    }
  }, {
    type: 'prefix',
    prefix: '>',
    transform: function transform(content) {
      return Object(external_this_wp_blocks_["createBlock"])('core/quote', {
        value: "<p>".concat(content, "</p>")
      });
    }
  }, {
    type: 'raw',
    isMatch: function isMatch(node) {
      var isParagraphOrSingleCite = function () {
        var hasCitation = false;
        return function (child) {
          // Child is a paragraph.
          if (child.nodeName === 'P') {
            return true;
          } // Child is a cite and no other cite child exists before it.


          if (!hasCitation && child.nodeName === 'CITE') {
            hasCitation = true;
            return true;
          }
        };
      }();

      return node.nodeName === 'BLOCKQUOTE' && // The quote block can only handle multiline paragraph
      // content with an optional cite child.
      Array.from(node.childNodes).every(isParagraphOrSingleCite);
    },
    schema: function schema(_ref4) {
      var phrasingContentSchema = _ref4.phrasingContentSchema;
      return {
        blockquote: {
          children: {
            p: {
              children: phrasingContentSchema
            },
            cite: {
              children: phrasingContentSchema
            }
          }
        }
      };
    }
  }],
  to: [{
    type: 'block',
    blocks: ['core/paragraph'],
    transform: function transform(_ref5) {
      var value = _ref5.value,
          citation = _ref5.citation;
      var paragraphs = [];

      if (value && value !== '<p></p>') {
        paragraphs.push.apply(paragraphs, Object(toConsumableArray["a" /* default */])(Object(external_this_wp_richText_["split"])(Object(external_this_wp_richText_["create"])({
          html: value,
          multilineTag: 'p'
        }), "\u2028").map(function (piece) {
          return Object(external_this_wp_blocks_["createBlock"])('core/paragraph', {
            content: Object(external_this_wp_richText_["toHTMLString"])({
              value: piece
            })
          });
        })));
      }

      if (citation && citation !== '<p></p>') {
        paragraphs.push(Object(external_this_wp_blocks_["createBlock"])('core/paragraph', {
          content: citation
        }));
      }

      if (paragraphs.length === 0) {
        return Object(external_this_wp_blocks_["createBlock"])('core/paragraph', {
          content: ''
        });
      }

      return paragraphs;
    }
  }, {
    type: 'block',
    blocks: ['core/heading'],
    transform: function transform(_ref6) {
      var value = _ref6.value,
          citation = _ref6.citation,
          attrs = Object(objectWithoutProperties["a" /* default */])(_ref6, ["value", "citation"]);

      // If there is no quote content, use the citation as the
      // content of the resulting heading. A nonexistent citation
      // will result in an empty heading.
      if (value === '<p></p>') {
        return Object(external_this_wp_blocks_["createBlock"])('core/heading', {
          content: citation
        });
      }

      var pieces = Object(external_this_wp_richText_["split"])(Object(external_this_wp_richText_["create"])({
        html: value,
        multilineTag: 'p'
      }), "\u2028");
      var headingBlock = Object(external_this_wp_blocks_["createBlock"])('core/heading', {
        content: Object(external_this_wp_richText_["toHTMLString"])({
          value: pieces[0]
        })
      });

      if (!citation && pieces.length === 1) {
        return headingBlock;
      }

      var quotePieces = pieces.slice(1);
      var quoteBlock = Object(external_this_wp_blocks_["createBlock"])('core/quote', quote_transforms_objectSpread({}, attrs, {
        citation: citation,
        value: Object(external_this_wp_richText_["toHTMLString"])({
          value: quotePieces.length ? Object(external_this_wp_richText_["join"])(pieces.slice(1), "\u2028") : Object(external_this_wp_richText_["create"])(),
          multilineTag: 'p'
        })
      }));
      return [headingBlock, quoteBlock];
    }
  }, {
    type: 'block',
    blocks: ['core/pullquote'],
    transform: function transform(_ref7) {
      var value = _ref7.value,
          citation = _ref7.citation;
      return Object(external_this_wp_blocks_["createBlock"])('core/pullquote', {
        value: value,
        citation: citation
      });
    }
  }]
};
/* harmony default export */ var quote_transforms = (quote_transforms_transforms);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/quote/index.js


function quote_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function quote_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { quote_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { quote_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



var quote_metadata = {
  name: "core/quote",
  category: "text",
  attributes: {
    value: {
      type: "string",
      source: "html",
      selector: "blockquote",
      multiline: "p",
      "default": ""
    },
    citation: {
      type: "string",
      source: "html",
      selector: "cite",
      "default": ""
    },
    align: {
      type: "string"
    }
  }
};


var quote_name = quote_metadata.name;

var quote_settings = {
  title: Object(external_this_wp_i18n_["__"])('Quote'),
  description: Object(external_this_wp_i18n_["__"])('Give quoted text visual emphasis. "In quoting others, we cite ourselves." — Julio Cortázar'),
  icon: library_quote,
  keywords: [Object(external_this_wp_i18n_["__"])('blockquote'), Object(external_this_wp_i18n_["__"])('cite')],
  example: {
    attributes: {
      value: '<p>' + Object(external_this_wp_i18n_["__"])('In quoting others, we cite ourselves.') + '</p>',
      citation: 'Julio Cortázar',
      className: 'is-style-large'
    }
  },
  styles: [{
    name: 'default',
    label: Object(external_this_wp_i18n_["_x"])('Default', 'block style'),
    isDefault: true
  }, {
    name: 'large',
    label: Object(external_this_wp_i18n_["_x"])('Large', 'block style')
  }],
  transforms: quote_transforms,
  edit: QuoteEdit,
  save: quote_save_save,
  merge: function merge(attributes, _ref) {
    var value = _ref.value,
        citation = _ref.citation;

    // Quote citations cannot be merged. Pick the second one unless it's
    // empty.
    if (!citation) {
      citation = attributes.citation;
    }

    if (!value || value === '<p></p>') {
      return quote_objectSpread({}, attributes, {
        citation: citation
      });
    }

    return quote_objectSpread({}, attributes, {
      value: attributes.value + value,
      citation: citation
    });
  },
  deprecated: quote_deprecated
};

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/gallery.js


/**
 * WordPress dependencies
 */

var gallery = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M20.2 8v11c0 .7-.6 1.2-1.2 1.2H6v1.5h13c1.5 0 2.7-1.2 2.7-2.8V8h-1.5zM18 16.4V4.6c0-.9-.7-1.6-1.6-1.6H4.6C3.7 3 3 3.7 3 4.6v11.8c0 .9.7 1.6 1.6 1.6h11.8c.9 0 1.6-.7 1.6-1.6zM4.5 4.6c0-.1.1-.1.1-.1h11.8c.1 0 .1.1.1.1V12l-2.3-1.7c-.3-.2-.6-.2-.9 0l-2.9 2.1L8 11.3c-.2-.1-.5-.1-.7 0l-2.9 1.5V4.6zm0 11.8v-1.8l3.2-1.7 2.4 1.2c.2.1.5.1.8-.1l2.8-2 2.8 2v2.5c0 .1-.1.1-.1.1H4.6c0-.1-.1-.2-.1-.2z"
}));
/* harmony default export */ var library_gallery = (gallery);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/gallery/shared.js
/**
 * External dependencies
 */

function defaultColumnsNumber(attributes) {
  return Math.min(3, attributes.images.length);
}
var shared_pickRelevantMediaFiles = function pickRelevantMediaFiles(image) {
  var sizeSlug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'large';
  var imageProps = Object(external_this_lodash_["pick"])(image, ['alt', 'id', 'link', 'caption']);
  imageProps.url = Object(external_this_lodash_["get"])(image, ['sizes', sizeSlug, 'url']) || Object(external_this_lodash_["get"])(image, ['media_details', 'sizes', sizeSlug, 'source_url']) || image.url;
  var fullUrl = Object(external_this_lodash_["get"])(image, ['sizes', 'full', 'url']) || Object(external_this_lodash_["get"])(image, ['media_details', 'sizes', 'full', 'source_url']);

  if (fullUrl) {
    imageProps.fullUrl = fullUrl;
  }

  return imageProps;
};

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/gallery/deprecated.js



function gallery_deprecated_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function gallery_deprecated_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { gallery_deprecated_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { gallery_deprecated_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


var gallery_deprecated_deprecated = [{
  attributes: {
    images: {
      type: 'array',
      default: [],
      source: 'query',
      selector: '.blocks-gallery-item',
      query: {
        url: {
          source: 'attribute',
          selector: 'img',
          attribute: 'src'
        },
        fullUrl: {
          source: 'attribute',
          selector: 'img',
          attribute: 'data-full-url'
        },
        link: {
          source: 'attribute',
          selector: 'img',
          attribute: 'data-link'
        },
        alt: {
          source: 'attribute',
          selector: 'img',
          attribute: 'alt',
          default: ''
        },
        id: {
          source: 'attribute',
          selector: 'img',
          attribute: 'data-id'
        },
        caption: {
          type: 'string',
          source: 'html',
          selector: '.blocks-gallery-item__caption'
        }
      }
    },
    ids: {
      type: 'array',
      default: []
    },
    columns: {
      type: 'number'
    },
    caption: {
      type: 'string',
      source: 'html',
      selector: '.blocks-gallery-caption'
    },
    imageCrop: {
      type: 'boolean',
      default: true
    },
    linkTo: {
      type: 'string',
      default: 'none'
    }
  },
  supports: {
    align: true
  },
  isEligible: function isEligible(_ref) {
    var ids = _ref.ids;
    return ids && ids.some(function (id) {
      return typeof id === 'string';
    });
  },
  migrate: function migrate(attributes) {
    return gallery_deprecated_objectSpread({}, attributes, {
      ids: Object(external_this_lodash_["map"])(attributes.ids, function (id) {
        var parsedId = parseInt(id, 10);
        return Number.isInteger(parsedId) ? parsedId : null;
      })
    });
  },
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    var images = attributes.images,
        _attributes$columns = attributes.columns,
        columns = _attributes$columns === void 0 ? defaultColumnsNumber(attributes) : _attributes$columns,
        imageCrop = attributes.imageCrop,
        caption = attributes.caption,
        linkTo = attributes.linkTo;
    return Object(external_this_wp_element_["createElement"])("figure", {
      className: "columns-".concat(columns, " ").concat(imageCrop ? 'is-cropped' : '')
    }, Object(external_this_wp_element_["createElement"])("ul", {
      className: "blocks-gallery-grid"
    }, images.map(function (image) {
      var href;

      switch (linkTo) {
        case 'media':
          href = image.fullUrl || image.url;
          break;

        case 'attachment':
          href = image.link;
          break;
      }

      var img = Object(external_this_wp_element_["createElement"])("img", {
        src: image.url,
        alt: image.alt,
        "data-id": image.id,
        "data-full-url": image.fullUrl,
        "data-link": image.link,
        className: image.id ? "wp-image-".concat(image.id) : null
      });
      return Object(external_this_wp_element_["createElement"])("li", {
        key: image.id || image.url,
        className: "blocks-gallery-item"
      }, Object(external_this_wp_element_["createElement"])("figure", null, href ? Object(external_this_wp_element_["createElement"])("a", {
        href: href
      }, img) : img, !external_this_wp_blockEditor_["RichText"].isEmpty(image.caption) && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
        tagName: "figcaption",
        className: "blocks-gallery-item__caption",
        value: image.caption
      })));
    })), !external_this_wp_blockEditor_["RichText"].isEmpty(caption) && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      tagName: "figcaption",
      className: "blocks-gallery-caption",
      value: caption
    }));
  }
}, {
  attributes: {
    images: {
      type: 'array',
      default: [],
      source: 'query',
      selector: 'ul.wp-block-gallery .blocks-gallery-item',
      query: {
        url: {
          source: 'attribute',
          selector: 'img',
          attribute: 'src'
        },
        fullUrl: {
          source: 'attribute',
          selector: 'img',
          attribute: 'data-full-url'
        },
        alt: {
          source: 'attribute',
          selector: 'img',
          attribute: 'alt',
          default: ''
        },
        id: {
          source: 'attribute',
          selector: 'img',
          attribute: 'data-id'
        },
        link: {
          source: 'attribute',
          selector: 'img',
          attribute: 'data-link'
        },
        caption: {
          type: 'array',
          source: 'children',
          selector: 'figcaption'
        }
      }
    },
    ids: {
      type: 'array',
      default: []
    },
    columns: {
      type: 'number'
    },
    imageCrop: {
      type: 'boolean',
      default: true
    },
    linkTo: {
      type: 'string',
      default: 'none'
    }
  },
  supports: {
    align: true
  },
  save: function save(_ref3) {
    var attributes = _ref3.attributes;
    var images = attributes.images,
        _attributes$columns2 = attributes.columns,
        columns = _attributes$columns2 === void 0 ? defaultColumnsNumber(attributes) : _attributes$columns2,
        imageCrop = attributes.imageCrop,
        linkTo = attributes.linkTo;
    return Object(external_this_wp_element_["createElement"])("ul", {
      className: "columns-".concat(columns, " ").concat(imageCrop ? 'is-cropped' : '')
    }, images.map(function (image) {
      var href;

      switch (linkTo) {
        case 'media':
          href = image.fullUrl || image.url;
          break;

        case 'attachment':
          href = image.link;
          break;
      }

      var img = Object(external_this_wp_element_["createElement"])("img", {
        src: image.url,
        alt: image.alt,
        "data-id": image.id,
        "data-full-url": image.fullUrl,
        "data-link": image.link,
        className: image.id ? "wp-image-".concat(image.id) : null
      });
      return Object(external_this_wp_element_["createElement"])("li", {
        key: image.id || image.url,
        className: "blocks-gallery-item"
      }, Object(external_this_wp_element_["createElement"])("figure", null, href ? Object(external_this_wp_element_["createElement"])("a", {
        href: href
      }, img) : img, image.caption && image.caption.length > 0 && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
        tagName: "figcaption",
        value: image.caption
      })));
    }));
  }
}, {
  attributes: {
    images: {
      type: 'array',
      default: [],
      source: 'query',
      selector: 'ul.wp-block-gallery .blocks-gallery-item',
      query: {
        url: {
          source: 'attribute',
          selector: 'img',
          attribute: 'src'
        },
        alt: {
          source: 'attribute',
          selector: 'img',
          attribute: 'alt',
          default: ''
        },
        id: {
          source: 'attribute',
          selector: 'img',
          attribute: 'data-id'
        },
        link: {
          source: 'attribute',
          selector: 'img',
          attribute: 'data-link'
        },
        caption: {
          type: 'array',
          source: 'children',
          selector: 'figcaption'
        }
      }
    },
    columns: {
      type: 'number'
    },
    imageCrop: {
      type: 'boolean',
      default: true
    },
    linkTo: {
      type: 'string',
      default: 'none'
    }
  },
  isEligible: function isEligible(_ref4) {
    var images = _ref4.images,
        ids = _ref4.ids;
    return images && images.length > 0 && (!ids && images || ids && images && ids.length !== images.length || Object(external_this_lodash_["some"])(images, function (id, index) {
      if (!id && ids[index] !== null) {
        return true;
      }

      return parseInt(id, 10) !== ids[index];
    }));
  },
  migrate: function migrate(attributes) {
    return gallery_deprecated_objectSpread({}, attributes, {
      ids: Object(external_this_lodash_["map"])(attributes.images, function (_ref5) {
        var id = _ref5.id;

        if (!id) {
          return null;
        }

        return parseInt(id, 10);
      })
    });
  },
  supports: {
    align: true
  },
  save: function save(_ref6) {
    var attributes = _ref6.attributes;
    var images = attributes.images,
        _attributes$columns3 = attributes.columns,
        columns = _attributes$columns3 === void 0 ? defaultColumnsNumber(attributes) : _attributes$columns3,
        imageCrop = attributes.imageCrop,
        linkTo = attributes.linkTo;
    return Object(external_this_wp_element_["createElement"])("ul", {
      className: "columns-".concat(columns, " ").concat(imageCrop ? 'is-cropped' : '')
    }, images.map(function (image) {
      var href;

      switch (linkTo) {
        case 'media':
          href = image.url;
          break;

        case 'attachment':
          href = image.link;
          break;
      }

      var img = Object(external_this_wp_element_["createElement"])("img", {
        src: image.url,
        alt: image.alt,
        "data-id": image.id,
        "data-link": image.link,
        className: image.id ? "wp-image-".concat(image.id) : null
      });
      return Object(external_this_wp_element_["createElement"])("li", {
        key: image.id || image.url,
        className: "blocks-gallery-item"
      }, Object(external_this_wp_element_["createElement"])("figure", null, href ? Object(external_this_wp_element_["createElement"])("a", {
        href: href
      }, img) : img, image.caption && image.caption.length > 0 && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
        tagName: "figcaption",
        value: image.caption
      })));
    }));
  }
}, {
  attributes: {
    images: {
      type: 'array',
      default: [],
      source: 'query',
      selector: 'div.wp-block-gallery figure.blocks-gallery-image img',
      query: {
        url: {
          source: 'attribute',
          attribute: 'src'
        },
        alt: {
          source: 'attribute',
          attribute: 'alt',
          default: ''
        },
        id: {
          source: 'attribute',
          attribute: 'data-id'
        }
      }
    },
    columns: {
      type: 'number'
    },
    imageCrop: {
      type: 'boolean',
      default: true
    },
    linkTo: {
      type: 'string',
      default: 'none'
    },
    align: {
      type: 'string',
      default: 'none'
    }
  },
  supports: {
    align: true
  },
  save: function save(_ref7) {
    var attributes = _ref7.attributes;
    var images = attributes.images,
        _attributes$columns4 = attributes.columns,
        columns = _attributes$columns4 === void 0 ? defaultColumnsNumber(attributes) : _attributes$columns4,
        align = attributes.align,
        imageCrop = attributes.imageCrop,
        linkTo = attributes.linkTo;
    var className = classnames_default()("columns-".concat(columns), {
      alignnone: align === 'none',
      'is-cropped': imageCrop
    });
    return Object(external_this_wp_element_["createElement"])("div", {
      className: className
    }, images.map(function (image) {
      var href;

      switch (linkTo) {
        case 'media':
          href = image.url;
          break;

        case 'attachment':
          href = image.link;
          break;
      }

      var img = Object(external_this_wp_element_["createElement"])("img", {
        src: image.url,
        alt: image.alt,
        "data-id": image.id
      });
      return Object(external_this_wp_element_["createElement"])("figure", {
        key: image.id || image.url,
        className: "blocks-gallery-image"
      }, href ? Object(external_this_wp_element_["createElement"])("a", {
        href: href
      }, img) : img);
    }));
  }
}];
/* harmony default export */ var gallery_deprecated = (gallery_deprecated_deprecated);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(20);

// EXTERNAL MODULE: external {"this":["wp","viewport"]}
var external_this_wp_viewport_ = __webpack_require__(72);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/gallery/shared-icon.js


/**
 * WordPress dependencies
 */


var sharedIcon = Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockIcon"], {
  icon: library_gallery
});

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/chevron-left.js
var chevron_left = __webpack_require__(290);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/chevron-right.js
var chevron_right = __webpack_require__(289);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/close.js
var library_close = __webpack_require__(133);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/gallery/gallery-image.js








function _createSuper(Derived) { return function () { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */











var gallery_image_GalleryImage = /*#__PURE__*/function (_Component) {
  Object(inherits["a" /* default */])(GalleryImage, _Component);

  var _super = _createSuper(GalleryImage);

  function GalleryImage() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, GalleryImage);

    _this = _super.apply(this, arguments);
    _this.onBlur = _this.onBlur.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onFocus = _this.onFocus.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onSelectImage = _this.onSelectImage.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onSelectCaption = _this.onSelectCaption.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onRemoveImage = _this.onRemoveImage.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.bindContainer = _this.bindContainer.bind(Object(assertThisInitialized["a" /* default */])(_this)); // The onDeselect prop is used to signal that the GalleryImage component
    // has lost focus. We want to call it when focus has been lost
    // by the figure element or any of its children but only if
    // the element that gained focus isn't any of them.
    //
    // debouncedOnSelect is scheduled every time a figure's children
    // is blurred and cancelled when any is focused. If none gain focus,
    // the call to onDeselect will be executed.
    //
    // onBlur / onFocus events are quick operations (<5ms apart in my testing),
    // so 50ms accounts for 10x lagging while feels responsive to the user.

    _this.debouncedOnDeselect = Object(external_this_lodash_["debounce"])(_this.props.onDeselect, 50);
    _this.state = {
      captionSelected: false
    };
    return _this;
  }

  Object(createClass["a" /* default */])(GalleryImage, [{
    key: "bindContainer",
    value: function bindContainer(ref) {
      this.container = ref;
    }
  }, {
    key: "onSelectCaption",
    value: function onSelectCaption() {
      if (!this.state.captionSelected) {
        this.setState({
          captionSelected: true
        });
      }

      if (!this.props.isSelected) {
        this.props.onSelect();
      }
    }
  }, {
    key: "onSelectImage",
    value: function onSelectImage() {
      if (!this.props.isSelected) {
        this.props.onSelect();
      }

      if (this.state.captionSelected) {
        this.setState({
          captionSelected: false
        });
      }
    }
  }, {
    key: "onRemoveImage",
    value: function onRemoveImage(event) {
      if (this.container === document.activeElement && this.props.isSelected && [external_this_wp_keycodes_["BACKSPACE"], external_this_wp_keycodes_["DELETE"]].indexOf(event.keyCode) !== -1) {
        event.stopPropagation();
        event.preventDefault();
        this.props.onRemove();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          isSelected = _this$props.isSelected,
          image = _this$props.image,
          url = _this$props.url,
          __unstableMarkNextChangeAsNotPersistent = _this$props.__unstableMarkNextChangeAsNotPersistent;

      if (image && !url) {
        __unstableMarkNextChangeAsNotPersistent();

        this.props.setAttributes({
          url: image.source_url,
          alt: image.alt_text
        });
      } // unselect the caption so when the user selects other image and comeback
      // the caption is not immediately selected


      if (this.state.captionSelected && !isSelected && prevProps.isSelected) {
        this.setState({
          captionSelected: false
        });
      }
    }
    /**
     * Note that, unlike the DOM, all React events bubble,
     * so this will be called after the onBlur event of any figure's children.
     */

  }, {
    key: "onBlur",
    value: function onBlur() {
      this.debouncedOnDeselect();
    }
    /**
     * Note that, unlike the DOM, all React events bubble,
     * so this will be called after the onBlur event of any figure's children.
     */

  }, {
    key: "onFocus",
    value: function onFocus() {
      this.debouncedOnDeselect.cancel();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          url = _this$props2.url,
          alt = _this$props2.alt,
          id = _this$props2.id,
          linkTo = _this$props2.linkTo,
          link = _this$props2.link,
          isFirstItem = _this$props2.isFirstItem,
          isLastItem = _this$props2.isLastItem,
          isSelected = _this$props2.isSelected,
          caption = _this$props2.caption,
          onRemove = _this$props2.onRemove,
          onMoveForward = _this$props2.onMoveForward,
          onMoveBackward = _this$props2.onMoveBackward,
          setAttributes = _this$props2.setAttributes,
          ariaLabel = _this$props2['aria-label'];
      var href;

      switch (linkTo) {
        case 'media':
          href = url;
          break;

        case 'attachment':
          href = link;
          break;
      }

      var img = // Disable reason: Image itself is not meant to be interactive, but should
      // direct image selection and unfocus caption fields.

      /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
      Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])("img", {
        src: url,
        alt: alt,
        "data-id": id,
        onClick: this.onSelectImage,
        onFocus: this.onSelectImage,
        onKeyDown: this.onRemoveImage,
        tabIndex: "0",
        "aria-label": ariaLabel,
        ref: this.bindContainer
      }), Object(external_this_wp_blob_["isBlobURL"])(url) && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Spinner"], null))
      /* eslint-enable jsx-a11y/no-noninteractive-element-interactions */
      ;
      var className = classnames_default()({
        'is-selected': isSelected,
        'is-transient': Object(external_this_wp_blob_["isBlobURL"])(url)
      });
      return Object(external_this_wp_element_["createElement"])("figure", {
        className: className,
        onBlur: this.onBlur,
        onFocus: this.onFocus
      }, href ? Object(external_this_wp_element_["createElement"])("a", {
        href: href
      }, img) : img, Object(external_this_wp_element_["createElement"])("div", {
        className: "block-library-gallery-item__move-menu"
      }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
        icon: chevron_left["a" /* default */],
        onClick: isFirstItem ? undefined : onMoveBackward,
        className: "blocks-gallery-item__move-backward",
        label: Object(external_this_wp_i18n_["__"])('Move image backward'),
        "aria-disabled": isFirstItem,
        disabled: !isSelected
      }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
        icon: chevron_right["a" /* default */],
        onClick: isLastItem ? undefined : onMoveForward,
        className: "blocks-gallery-item__move-forward",
        label: Object(external_this_wp_i18n_["__"])('Move image forward'),
        "aria-disabled": isLastItem,
        disabled: !isSelected
      })), Object(external_this_wp_element_["createElement"])("div", {
        className: "block-library-gallery-item__inline-menu"
      }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
        icon: library_close["a" /* default */],
        onClick: onRemove,
        className: "blocks-gallery-item__remove",
        label: Object(external_this_wp_i18n_["__"])('Remove image'),
        disabled: !isSelected
      })), (isSelected || caption) && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"], {
        tagName: "figcaption",
        placeholder: isSelected ? Object(external_this_wp_i18n_["__"])('Write caption…') : null,
        value: caption,
        isSelected: this.state.captionSelected,
        onChange: function onChange(newCaption) {
          return setAttributes({
            caption: newCaption
          });
        },
        unstableOnFocus: this.onSelectCaption,
        inlineToolbar: true
      }));
    }
  }]);

  return GalleryImage;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var gallery_image = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select, ownProps) {
  var _select = select('core'),
      getMedia = _select.getMedia;

  var id = ownProps.id;
  return {
    image: id ? getMedia(parseInt(id, 10)) : null
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/block-editor'),
      __unstableMarkNextChangeAsNotPersistent = _dispatch.__unstableMarkNextChangeAsNotPersistent;

  return {
    __unstableMarkNextChangeAsNotPersistent: __unstableMarkNextChangeAsNotPersistent
  };
})])(gallery_image_GalleryImage));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/gallery/gallery.js





/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



var gallery_Gallery = function Gallery(props) {
  var _classnames;

  var attributes = props.attributes,
      className = props.className,
      isSelected = props.isSelected,
      setAttributes = props.setAttributes,
      selectedImage = props.selectedImage,
      mediaPlaceholder = props.mediaPlaceholder,
      onMoveBackward = props.onMoveBackward,
      onMoveForward = props.onMoveForward,
      onRemoveImage = props.onRemoveImage,
      onSelectImage = props.onSelectImage,
      onDeselectImage = props.onDeselectImage,
      onSetImageAttributes = props.onSetImageAttributes,
      onFocusGalleryCaption = props.onFocusGalleryCaption,
      insertBlocksAfter = props.insertBlocksAfter;
  var align = attributes.align,
      _attributes$columns = attributes.columns,
      columns = _attributes$columns === void 0 ? defaultColumnsNumber(attributes) : _attributes$columns,
      caption = attributes.caption,
      imageCrop = attributes.imageCrop,
      images = attributes.images;
  return Object(external_this_wp_element_["createElement"])("figure", {
    className: classnames_default()(className, (_classnames = {}, Object(defineProperty["a" /* default */])(_classnames, "align".concat(align), align), Object(defineProperty["a" /* default */])(_classnames, "columns-".concat(columns), columns), Object(defineProperty["a" /* default */])(_classnames, 'is-cropped', imageCrop), _classnames))
  }, Object(external_this_wp_element_["createElement"])("ul", {
    className: "blocks-gallery-grid"
  }, images.map(function (img, index) {
    var ariaLabel = Object(external_this_wp_i18n_["sprintf"])(
    /* translators: 1: the order number of the image. 2: the total number of images. */
    Object(external_this_wp_i18n_["__"])('image %1$d of %2$d in gallery'), index + 1, images.length);
    return Object(external_this_wp_element_["createElement"])("li", {
      className: "blocks-gallery-item",
      key: img.id || img.url
    }, Object(external_this_wp_element_["createElement"])(gallery_image, {
      url: img.url,
      alt: img.alt,
      id: img.id,
      isFirstItem: index === 0,
      isLastItem: index + 1 === images.length,
      isSelected: isSelected && selectedImage === index,
      onMoveBackward: onMoveBackward(index),
      onMoveForward: onMoveForward(index),
      onRemove: onRemoveImage(index),
      onSelect: onSelectImage(index),
      onDeselect: onDeselectImage(index),
      setAttributes: function setAttributes(attrs) {
        return onSetImageAttributes(index, attrs);
      },
      caption: img.caption,
      "aria-label": ariaLabel
    }));
  })), mediaPlaceholder, Object(external_this_wp_element_["createElement"])(RichTextVisibilityHelper, {
    isHidden: !isSelected && external_this_wp_blockEditor_["RichText"].isEmpty(caption),
    tagName: "figcaption",
    className: "blocks-gallery-caption",
    placeholder: Object(external_this_wp_i18n_["__"])('Write gallery caption…'),
    value: caption,
    unstableOnFocus: onFocusGalleryCaption,
    onChange: function onChange(value) {
      return setAttributes({
        caption: value
      });
    },
    inlineToolbar: true,
    __unstableOnSplitAtEnd: function __unstableOnSplitAtEnd() {
      return insertBlocksAfter(Object(external_this_wp_blocks_["createBlock"])('core/paragraph'));
    }
  }));
};

function RichTextVisibilityHelper(_ref) {
  var isHidden = _ref.isHidden,
      richTextProps = Object(objectWithoutProperties["a" /* default */])(_ref, ["isHidden"]);

  return isHidden ? Object(external_this_wp_element_["createElement"])(external_this_wp_components_["VisuallyHidden"], Object(esm_extends["a" /* default */])({
    as: external_this_wp_blockEditor_["RichText"]
  }, richTextProps)) : Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"], richTextProps);
}

/* harmony default export */ var gallery_gallery = (gallery_Gallery);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/gallery/edit.js











function gallery_edit_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function gallery_edit_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { gallery_edit_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { gallery_edit_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function edit_createSuper(Derived) { return function () { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (edit_isNativeReflectConstruct()) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function edit_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */









/**
 * Internal dependencies
 */




var MAX_COLUMNS = 8;
var linkOptions = [{
  value: 'attachment',
  label: Object(external_this_wp_i18n_["__"])('Attachment Page')
}, {
  value: 'media',
  label: Object(external_this_wp_i18n_["__"])('Media File')
}, {
  value: 'none',
  label: Object(external_this_wp_i18n_["__"])('None')
}];
var edit_ALLOWED_MEDIA_TYPES = ['image'];
var PLACEHOLDER_TEXT = external_this_wp_element_["Platform"].select({
  web: Object(external_this_wp_i18n_["__"])('Drag images, upload new ones or select files from your library.'),
  native: Object(external_this_wp_i18n_["__"])('ADD MEDIA')
});
var MOBILE_CONTROL_PROPS_RANGE_CONTROL = external_this_wp_element_["Platform"].select({
  web: {},
  native: {
    type: 'stepper'
  }
});

var edit_GalleryEdit = /*#__PURE__*/function (_Component) {
  Object(inherits["a" /* default */])(GalleryEdit, _Component);

  var _super = edit_createSuper(GalleryEdit);

  function GalleryEdit() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, GalleryEdit);

    _this = _super.apply(this, arguments);
    _this.onSelectImage = _this.onSelectImage.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onSelectImages = _this.onSelectImages.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onDeselectImage = _this.onDeselectImage.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.setLinkTo = _this.setLinkTo.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.setColumnsNumber = _this.setColumnsNumber.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.toggleImageCrop = _this.toggleImageCrop.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onMove = _this.onMove.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onMoveForward = _this.onMoveForward.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onMoveBackward = _this.onMoveBackward.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onRemoveImage = _this.onRemoveImage.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onUploadError = _this.onUploadError.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.setImageAttributes = _this.setImageAttributes.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.setAttributes = _this.setAttributes.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onFocusGalleryCaption = _this.onFocusGalleryCaption.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.getImagesSizeOptions = _this.getImagesSizeOptions.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.updateImagesSize = _this.updateImagesSize.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.state = {
      selectedImage: null,
      attachmentCaptions: null
    };
    return _this;
  }

  Object(createClass["a" /* default */])(GalleryEdit, [{
    key: "setAttributes",
    value: function setAttributes(attributes) {
      if (attributes.ids) {
        throw new Error('The "ids" attribute should not be changed directly. It is managed automatically when "images" attribute changes');
      }

      if (attributes.images) {
        attributes = gallery_edit_objectSpread({}, attributes, {
          // Unlike images[ n ].id which is a string, always ensure the
          // ids array contains numbers as per its attribute type.
          ids: Object(external_this_lodash_["map"])(attributes.images, function (_ref) {
            var id = _ref.id;
            return parseInt(id, 10);
          })
        });
      }

      this.props.setAttributes(attributes);
    }
  }, {
    key: "onSelectImage",
    value: function onSelectImage(index) {
      var _this2 = this;

      return function () {
        if (_this2.state.selectedImage !== index) {
          _this2.setState({
            selectedImage: index
          });
        }
      };
    }
  }, {
    key: "onDeselectImage",
    value: function onDeselectImage(index) {
      var _this3 = this;

      return function () {
        if (_this3.state.selectedImage === index) {
          _this3.setState({
            selectedImage: null
          });
        }
      };
    }
  }, {
    key: "onMove",
    value: function onMove(oldIndex, newIndex) {
      var images = Object(toConsumableArray["a" /* default */])(this.props.attributes.images);

      images.splice(newIndex, 1, this.props.attributes.images[oldIndex]);
      images.splice(oldIndex, 1, this.props.attributes.images[newIndex]);
      this.setState({
        selectedImage: newIndex
      });
      this.setAttributes({
        images: images
      });
    }
  }, {
    key: "onMoveForward",
    value: function onMoveForward(oldIndex) {
      var _this4 = this;

      return function () {
        if (oldIndex === _this4.props.attributes.images.length - 1) {
          return;
        }

        _this4.onMove(oldIndex, oldIndex + 1);
      };
    }
  }, {
    key: "onMoveBackward",
    value: function onMoveBackward(oldIndex) {
      var _this5 = this;

      return function () {
        if (oldIndex === 0) {
          return;
        }

        _this5.onMove(oldIndex, oldIndex - 1);
      };
    }
  }, {
    key: "onRemoveImage",
    value: function onRemoveImage(index) {
      var _this6 = this;

      return function () {
        var images = Object(external_this_lodash_["filter"])(_this6.props.attributes.images, function (img, i) {
          return index !== i;
        });
        var columns = _this6.props.attributes.columns;

        _this6.setState({
          selectedImage: null
        });

        _this6.setAttributes({
          images: images,
          columns: columns ? Math.min(images.length, columns) : columns
        });
      };
    }
  }, {
    key: "selectCaption",
    value: function selectCaption(newImage, images, attachmentCaptions) {
      // The image id in both the images and attachmentCaptions arrays is a
      // string, so ensure comparison works correctly by converting the
      // newImage.id to a string.
      var newImageId = Object(external_this_lodash_["toString"])(newImage.id);
      var currentImage = Object(external_this_lodash_["find"])(images, {
        id: newImageId
      });
      var currentImageCaption = currentImage ? currentImage.caption : newImage.caption;

      if (!attachmentCaptions) {
        return currentImageCaption;
      }

      var attachment = Object(external_this_lodash_["find"])(attachmentCaptions, {
        id: newImageId
      }); // if the attachment caption is updated

      if (attachment && attachment.caption !== newImage.caption) {
        return newImage.caption;
      }

      return currentImageCaption;
    }
  }, {
    key: "onSelectImages",
    value: function onSelectImages(newImages) {
      var _this7 = this;

      var _this$props$attribute = this.props.attributes,
          columns = _this$props$attribute.columns,
          images = _this$props$attribute.images,
          sizeSlug = _this$props$attribute.sizeSlug;
      var attachmentCaptions = this.state.attachmentCaptions;
      this.setState({
        attachmentCaptions: newImages.map(function (newImage) {
          return {
            // Store the attachmentCaption id as a string for consistency
            // with the type of the id in the images attribute.
            id: Object(external_this_lodash_["toString"])(newImage.id),
            caption: newImage.caption
          };
        })
      });
      this.setAttributes({
        images: newImages.map(function (newImage) {
          return gallery_edit_objectSpread({}, shared_pickRelevantMediaFiles(newImage, sizeSlug), {
            caption: _this7.selectCaption(newImage, images, attachmentCaptions),
            // The id value is stored in a data attribute, so when the
            // block is parsed it's converted to a string. Converting
            // to a string here ensures it's type is consistent.
            id: Object(external_this_lodash_["toString"])(newImage.id)
          });
        }),
        columns: columns ? Math.min(newImages.length, columns) : columns
      });
    }
  }, {
    key: "onUploadError",
    value: function onUploadError(message) {
      var noticeOperations = this.props.noticeOperations;
      noticeOperations.removeAllNotices();
      noticeOperations.createErrorNotice(message);
    }
  }, {
    key: "setLinkTo",
    value: function setLinkTo(value) {
      this.setAttributes({
        linkTo: value
      });
    }
  }, {
    key: "setColumnsNumber",
    value: function setColumnsNumber(value) {
      this.setAttributes({
        columns: value
      });
    }
  }, {
    key: "toggleImageCrop",
    value: function toggleImageCrop() {
      this.setAttributes({
        imageCrop: !this.props.attributes.imageCrop
      });
    }
  }, {
    key: "getImageCropHelp",
    value: function getImageCropHelp(checked) {
      return checked ? Object(external_this_wp_i18n_["__"])('Thumbnails are cropped to align.') : Object(external_this_wp_i18n_["__"])('Thumbnails are not cropped.');
    }
  }, {
    key: "onFocusGalleryCaption",
    value: function onFocusGalleryCaption() {
      this.setState({
        selectedImage: null
      });
    }
  }, {
    key: "setImageAttributes",
    value: function setImageAttributes(index, attributes) {
      var images = this.props.attributes.images;
      var setAttributes = this.setAttributes;

      if (!images[index]) {
        return;
      }

      setAttributes({
        images: [].concat(Object(toConsumableArray["a" /* default */])(images.slice(0, index)), [gallery_edit_objectSpread({}, images[index], {}, attributes)], Object(toConsumableArray["a" /* default */])(images.slice(index + 1)))
      });
    }
  }, {
    key: "getImagesSizeOptions",
    value: function getImagesSizeOptions() {
      var _this$props = this.props,
          imageSizes = _this$props.imageSizes,
          resizedImages = _this$props.resizedImages;
      return Object(external_this_lodash_["map"])(Object(external_this_lodash_["filter"])(imageSizes, function (_ref2) {
        var slug = _ref2.slug;
        return Object(external_this_lodash_["some"])(resizedImages, function (sizes) {
          return sizes[slug];
        });
      }), function (_ref3) {
        var name = _ref3.name,
            slug = _ref3.slug;
        return {
          value: slug,
          label: name
        };
      });
    }
  }, {
    key: "updateImagesSize",
    value: function updateImagesSize(sizeSlug) {
      var _this$props2 = this.props,
          images = _this$props2.attributes.images,
          resizedImages = _this$props2.resizedImages;
      var updatedImages = Object(external_this_lodash_["map"])(images, function (image) {
        if (!image.id) {
          return image;
        }

        var url = Object(external_this_lodash_["get"])(resizedImages, [parseInt(image.id, 10), sizeSlug]);
        return gallery_edit_objectSpread({}, image, {}, url && {
          url: url
        });
      });
      this.setAttributes({
        images: updatedImages,
        sizeSlug: sizeSlug
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props3 = this.props,
          attributes = _this$props3.attributes,
          mediaUpload = _this$props3.mediaUpload;
      var images = attributes.images;

      if (external_this_wp_element_["Platform"].OS === 'web' && images && images.length > 0 && Object(external_this_lodash_["every"])(images, function (_ref4) {
        var url = _ref4.url;
        return Object(external_this_wp_blob_["isBlobURL"])(url);
      })) {
        var filesList = Object(external_this_lodash_["map"])(images, function (_ref5) {
          var url = _ref5.url;
          return Object(external_this_wp_blob_["getBlobByURL"])(url);
        });
        Object(external_this_lodash_["forEach"])(images, function (_ref6) {
          var url = _ref6.url;
          return Object(external_this_wp_blob_["revokeBlobURL"])(url);
        });
        mediaUpload({
          filesList: filesList,
          onFileChange: this.onSelectImages,
          allowedTypes: ['image']
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // Deselect images when deselecting the block
      if (!this.props.isSelected && prevProps.isSelected) {
        this.setState({
          selectedImage: null,
          captionSelected: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          attributes = _this$props4.attributes,
          className = _this$props4.className,
          isSelected = _this$props4.isSelected,
          noticeUI = _this$props4.noticeUI,
          insertBlocksAfter = _this$props4.insertBlocksAfter;
      var _attributes$columns = attributes.columns,
          columns = _attributes$columns === void 0 ? defaultColumnsNumber(attributes) : _attributes$columns,
          imageCrop = attributes.imageCrop,
          images = attributes.images,
          linkTo = attributes.linkTo,
          sizeSlug = attributes.sizeSlug;
      var hasImages = !!images.length;
      var mediaPlaceholder = Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["MediaPlaceholder"], {
        addToGallery: hasImages,
        isAppender: hasImages,
        className: className,
        disableMediaButtons: hasImages && !isSelected,
        icon: !hasImages && sharedIcon,
        labels: {
          title: !hasImages && Object(external_this_wp_i18n_["__"])('Gallery'),
          instructions: !hasImages && PLACEHOLDER_TEXT
        },
        onSelect: this.onSelectImages,
        accept: "image/*",
        allowedTypes: edit_ALLOWED_MEDIA_TYPES,
        multiple: true,
        value: images,
        onError: this.onUploadError,
        notices: hasImages ? undefined : noticeUI,
        onFocus: this.props.onFocus
      });

      if (!hasImages) {
        return mediaPlaceholder;
      }

      var imageSizeOptions = this.getImagesSizeOptions();
      var shouldShowSizeOptions = hasImages && !Object(external_this_lodash_["isEmpty"])(imageSizeOptions);
      return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InspectorControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
        title: Object(external_this_wp_i18n_["__"])('Gallery settings')
      }, images.length > 1 && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["RangeControl"], Object(esm_extends["a" /* default */])({
        label: Object(external_this_wp_i18n_["__"])('Columns'),
        value: columns,
        onChange: this.setColumnsNumber,
        min: 1,
        max: Math.min(MAX_COLUMNS, images.length)
      }, MOBILE_CONTROL_PROPS_RANGE_CONTROL, {
        required: true
      })), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
        label: Object(external_this_wp_i18n_["__"])('Crop images'),
        checked: !!imageCrop,
        onChange: this.toggleImageCrop,
        help: this.getImageCropHelp
      }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SelectControl"], {
        label: Object(external_this_wp_i18n_["__"])('Link to'),
        value: linkTo,
        onChange: this.setLinkTo,
        options: linkOptions
      }), shouldShowSizeOptions && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SelectControl"], {
        label: Object(external_this_wp_i18n_["__"])('Image size'),
        value: sizeSlug,
        options: imageSizeOptions,
        onChange: this.updateImagesSize
      }))), noticeUI, Object(external_this_wp_element_["createElement"])(gallery_gallery, Object(esm_extends["a" /* default */])({}, this.props, {
        selectedImage: this.state.selectedImage,
        mediaPlaceholder: mediaPlaceholder,
        onMoveBackward: this.onMoveBackward,
        onMoveForward: this.onMoveForward,
        onRemoveImage: this.onRemoveImage,
        onSelectImage: this.onSelectImage,
        onDeselectImage: this.onDeselectImage,
        onSetImageAttributes: this.setImageAttributes,
        onFocusGalleryCaption: this.onFocusGalleryCaption,
        insertBlocksAfter: insertBlocksAfter
      })));
    }
  }]);

  return GalleryEdit;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var gallery_edit = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select, _ref7) {
  var ids = _ref7.attributes.ids,
      isSelected = _ref7.isSelected;

  var _select = select('core'),
      getMedia = _select.getMedia;

  var _select2 = select('core/block-editor'),
      getSettings = _select2.getSettings;

  var _getSettings = getSettings(),
      imageSizes = _getSettings.imageSizes,
      mediaUpload = _getSettings.mediaUpload;

  var resizedImages = {};

  if (isSelected) {
    resizedImages = Object(external_this_lodash_["reduce"])(ids, function (currentResizedImages, id) {
      if (!id) {
        return currentResizedImages;
      }

      var image = getMedia(id);
      var sizes = Object(external_this_lodash_["reduce"])(imageSizes, function (currentSizes, size) {
        var defaultUrl = Object(external_this_lodash_["get"])(image, ['sizes', size.slug, 'url']);
        var mediaDetailsUrl = Object(external_this_lodash_["get"])(image, ['media_details', 'sizes', size.slug, 'source_url']);
        return gallery_edit_objectSpread({}, currentSizes, Object(defineProperty["a" /* default */])({}, size.slug, defaultUrl || mediaDetailsUrl));
      }, {});
      return gallery_edit_objectSpread({}, currentResizedImages, Object(defineProperty["a" /* default */])({}, parseInt(id, 10), sizes));
    }, {});
  }

  return {
    imageSizes: imageSizes,
    mediaUpload: mediaUpload,
    resizedImages: resizedImages
  };
}), external_this_wp_components_["withNotices"], Object(external_this_wp_viewport_["withViewportMatch"])({
  isNarrow: '< small'
})])(edit_GalleryEdit));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/gallery/save.js


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


function gallery_save_save(_ref) {
  var attributes = _ref.attributes;
  var images = attributes.images,
      _attributes$columns = attributes.columns,
      columns = _attributes$columns === void 0 ? defaultColumnsNumber(attributes) : _attributes$columns,
      imageCrop = attributes.imageCrop,
      caption = attributes.caption,
      linkTo = attributes.linkTo;
  return Object(external_this_wp_element_["createElement"])("figure", {
    className: "columns-".concat(columns, " ").concat(imageCrop ? 'is-cropped' : '')
  }, Object(external_this_wp_element_["createElement"])("ul", {
    className: "blocks-gallery-grid"
  }, images.map(function (image) {
    var href;

    switch (linkTo) {
      case 'media':
        href = image.fullUrl || image.url;
        break;

      case 'attachment':
        href = image.link;
        break;
    }

    var img = Object(external_this_wp_element_["createElement"])("img", {
      src: image.url,
      alt: image.alt,
      "data-id": image.id,
      "data-full-url": image.fullUrl,
      "data-link": image.link,
      className: image.id ? "wp-image-".concat(image.id) : null
    });
    return Object(external_this_wp_element_["createElement"])("li", {
      key: image.id || image.url,
      className: "blocks-gallery-item"
    }, Object(external_this_wp_element_["createElement"])("figure", null, href ? Object(external_this_wp_element_["createElement"])("a", {
      href: href
    }, img) : img, !external_this_wp_blockEditor_["RichText"].isEmpty(image.caption) && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      tagName: "figcaption",
      className: "blocks-gallery-item__caption",
      value: image.caption
    })));
  })), !external_this_wp_blockEditor_["RichText"].isEmpty(caption) && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
    tagName: "figcaption",
    className: "blocks-gallery-caption",
    value: caption
  }));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/gallery/transforms.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



var parseShortcodeIds = function parseShortcodeIds(ids) {
  if (!ids) {
    return [];
  }

  return ids.split(',').map(function (id) {
    return parseInt(id, 10);
  });
};

var gallery_transforms_transforms = {
  from: [{
    type: 'block',
    isMultiBlock: true,
    blocks: ['core/image'],
    transform: function transform(attributes) {
      // Init the align and size from the first item which may be either the placeholder or an image.
      var _attributes$ = attributes[0],
          align = _attributes$.align,
          sizeSlug = _attributes$.sizeSlug; // Loop through all the images and check if they have the same align and size.

      align = Object(external_this_lodash_["every"])(attributes, ['align', align]) ? align : undefined;
      sizeSlug = Object(external_this_lodash_["every"])(attributes, ['sizeSlug', sizeSlug]) ? sizeSlug : undefined;
      var validImages = Object(external_this_lodash_["filter"])(attributes, function (_ref) {
        var url = _ref.url;
        return url;
      });
      return Object(external_this_wp_blocks_["createBlock"])('core/gallery', {
        images: validImages.map(function (_ref2) {
          var id = _ref2.id,
              url = _ref2.url,
              alt = _ref2.alt,
              caption = _ref2.caption;
          return {
            id: Object(external_this_lodash_["toString"])(id),
            url: url,
            alt: alt,
            caption: caption
          };
        }),
        ids: validImages.map(function (_ref3) {
          var id = _ref3.id;
          return parseInt(id, 10);
        }),
        align: align,
        sizeSlug: sizeSlug
      });
    }
  }, {
    type: 'shortcode',
    tag: 'gallery',
    attributes: {
      images: {
        type: 'array',
        shortcode: function shortcode(_ref4) {
          var ids = _ref4.named.ids;
          return parseShortcodeIds(ids).map(function (id) {
            return {
              id: Object(external_this_lodash_["toString"])(id)
            };
          });
        }
      },
      ids: {
        type: 'array',
        shortcode: function shortcode(_ref5) {
          var ids = _ref5.named.ids;
          return parseShortcodeIds(ids);
        }
      },
      columns: {
        type: 'number',
        shortcode: function shortcode(_ref6) {
          var _ref6$named$columns = _ref6.named.columns,
              columns = _ref6$named$columns === void 0 ? '3' : _ref6$named$columns;
          return parseInt(columns, 10);
        }
      },
      linkTo: {
        type: 'string',
        shortcode: function shortcode(_ref7) {
          var _ref7$named$link = _ref7.named.link,
              link = _ref7$named$link === void 0 ? 'attachment' : _ref7$named$link;
          return link === 'file' ? 'media' : link;
        }
      }
    }
  }, {
    // When created by drag and dropping multiple files on an insertion point
    type: 'files',
    isMatch: function isMatch(files) {
      return files.length !== 1 && Object(external_this_lodash_["every"])(files, function (file) {
        return file.type.indexOf('image/') === 0;
      });
    },
    transform: function transform(files) {
      var block = Object(external_this_wp_blocks_["createBlock"])('core/gallery', {
        images: files.map(function (file) {
          return shared_pickRelevantMediaFiles({
            url: Object(external_this_wp_blob_["createBlobURL"])(file)
          });
        })
      });
      return block;
    }
  }],
  to: [{
    type: 'block',
    blocks: ['core/image'],
    transform: function transform(_ref8) {
      var images = _ref8.images,
          align = _ref8.align,
          sizeSlug = _ref8.sizeSlug,
          ids = _ref8.ids;

      if (images.length > 0) {
        return images.map(function (_ref9, index) {
          var url = _ref9.url,
              alt = _ref9.alt,
              caption = _ref9.caption;
          return Object(external_this_wp_blocks_["createBlock"])('core/image', {
            id: ids[index],
            url: url,
            alt: alt,
            caption: caption,
            align: align,
            sizeSlug: sizeSlug
          });
        });
      }

      return Object(external_this_wp_blocks_["createBlock"])('core/image', {
        align: align
      });
    }
  }]
};
/* harmony default export */ var gallery_transforms = (gallery_transforms_transforms);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/gallery/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



var gallery_metadata = {
  name: "core/gallery",
  category: "media",
  attributes: {
    images: {
      type: "array",
      "default": [],
      source: "query",
      selector: ".blocks-gallery-item",
      query: {
        url: {
          type: "string",
          source: "attribute",
          selector: "img",
          attribute: "src"
        },
        fullUrl: {
          type: "string",
          source: "attribute",
          selector: "img",
          attribute: "data-full-url"
        },
        link: {
          type: "string",
          source: "attribute",
          selector: "img",
          attribute: "data-link"
        },
        alt: {
          type: "string",
          source: "attribute",
          selector: "img",
          attribute: "alt",
          "default": ""
        },
        id: {
          type: "string",
          source: "attribute",
          selector: "img",
          attribute: "data-id"
        },
        caption: {
          type: "string",
          source: "html",
          selector: ".blocks-gallery-item__caption"
        }
      }
    },
    ids: {
      type: "array",
      items: {
        type: "number"
      },
      "default": []
    },
    columns: {
      type: "number",
      minimum: 1,
      maximum: 8
    },
    caption: {
      type: "string",
      source: "html",
      selector: ".blocks-gallery-caption"
    },
    imageCrop: {
      type: "boolean",
      "default": true
    },
    linkTo: {
      type: "string",
      "default": "none"
    },
    sizeSlug: {
      type: "string",
      "default": "large"
    }
  },
  supports: {
    align: true
  }
};


var gallery_name = gallery_metadata.name;

var gallery_settings = {
  title: Object(external_this_wp_i18n_["__"])('Gallery'),
  description: Object(external_this_wp_i18n_["__"])('Display multiple images in a rich gallery.'),
  icon: library_gallery,
  keywords: [Object(external_this_wp_i18n_["__"])('images'), Object(external_this_wp_i18n_["__"])('photos')],
  example: {
    attributes: {
      columns: 2,
      images: [{
        url: 'https://s.w.org/images/core/5.3/Glacial_lakes%2C_Bhutan.jpg'
      }, {
        url: 'https://s.w.org/images/core/5.3/Sediment_off_the_Yucatan_Peninsula.jpg'
      }]
    }
  },
  transforms: gallery_transforms,
  edit: gallery_edit,
  save: gallery_save_save,
  deprecated: gallery_deprecated
};

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/archive.js


/**
 * WordPress dependencies
 */

var archive = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M19 6.2h-5.9l-.6-1.1c-.3-.7-1-1.1-1.8-1.1H5c-1.1 0-2 .9-2 2v11.8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8.2c0-1.1-.9-2-2-2zm.5 11.6c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h5.8c.2 0 .4.1.4.3l1 2H19c.3 0 .5.2.5.5v9.5zM8 12.8h8v-1.5H8v1.5zm0 3h8v-1.5H8v1.5z"
}));
/* harmony default export */ var library_archive = (archive);

// EXTERNAL MODULE: external {"this":["wp","serverSideRender"]}
var external_this_wp_serverSideRender_ = __webpack_require__(74);
var external_this_wp_serverSideRender_default = /*#__PURE__*/__webpack_require__.n(external_this_wp_serverSideRender_);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/archives/edit.js


/**
 * WordPress dependencies
 */




function ArchivesEdit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var showPostCounts = attributes.showPostCounts,
      displayAsDropdown = attributes.displayAsDropdown;
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InspectorControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
    title: Object(external_this_wp_i18n_["__"])('Archives settings')
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
    label: Object(external_this_wp_i18n_["__"])('Display as dropdown'),
    checked: displayAsDropdown,
    onChange: function onChange() {
      return setAttributes({
        displayAsDropdown: !displayAsDropdown
      });
    }
  }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
    label: Object(external_this_wp_i18n_["__"])('Show post counts'),
    checked: showPostCounts,
    onChange: function onChange() {
      return setAttributes({
        showPostCounts: !showPostCounts
      });
    }
  }))), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Disabled"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_serverSideRender_default.a, {
    block: "core/archives",
    attributes: attributes
  })));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/archives/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */

var archives_metadata = {
  name: "core/archives",
  category: "widgets",
  attributes: {
    align: {
      type: "string",
      "enum": ["left", "center", "right", "wide", "full"]
    },
    className: {
      type: "string"
    },
    displayAsDropdown: {
      type: "boolean",
      "default": false
    },
    showPostCounts: {
      type: "boolean",
      "default": false
    }
  },
  supports: {
    align: true,
    html: false
  }
};

var archives_name = archives_metadata.name;

var archives_settings = {
  title: Object(external_this_wp_i18n_["__"])('Archives'),
  description: Object(external_this_wp_i18n_["__"])('Display a monthly archive of your posts.'),
  icon: library_archive,
  example: {},
  edit: ArchivesEdit
};

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/audio.js


/**
 * WordPress dependencies
 */

var audio = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M17.7 4.3c-1.2 0-2.8 0-3.8 1-.6.6-.9 1.5-.9 2.6V14c-.6-.6-1.5-1-2.5-1C8.6 13 7 14.6 7 16.5S8.6 20 10.5 20c1.5 0 2.8-1 3.3-2.3.5-.8.7-1.8.7-2.5V7.9c0-.7.2-1.2.5-1.6.6-.6 1.8-.6 2.8-.6h.3V4.3h-.4z"
}));
/* harmony default export */ var library_audio = (audio);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/audio/deprecated.js


/**
 * WordPress dependencies
 */

/* harmony default export */ var audio_deprecated = ([{
  attributes: {
    src: {
      type: 'string',
      source: 'attribute',
      selector: 'audio',
      attribute: 'src'
    },
    caption: {
      type: 'string',
      source: 'html',
      selector: 'figcaption'
    },
    id: {
      type: 'number'
    },
    autoplay: {
      type: 'boolean',
      source: 'attribute',
      selector: 'audio',
      attribute: 'autoplay'
    },
    loop: {
      type: 'boolean',
      source: 'attribute',
      selector: 'audio',
      attribute: 'loop'
    },
    preload: {
      type: 'string',
      source: 'attribute',
      selector: 'audio',
      attribute: 'preload'
    }
  },
  supports: {
    align: true
  },
  save: function save(_ref) {
    var attributes = _ref.attributes;
    var autoplay = attributes.autoplay,
        caption = attributes.caption,
        loop = attributes.loop,
        preload = attributes.preload,
        src = attributes.src;
    return Object(external_this_wp_element_["createElement"])("figure", null, Object(external_this_wp_element_["createElement"])("audio", {
      controls: "controls",
      src: src,
      autoPlay: autoplay,
      loop: loop,
      preload: preload
    }), !external_this_wp_blockEditor_["RichText"].isEmpty(caption) && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      tagName: "figcaption",
      value: caption
    }));
  }
}]);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/audio/edit.js




/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */


var audio_edit_ALLOWED_MEDIA_TYPES = ['audio'];

function AudioEdit(_ref) {
  var attributes = _ref.attributes,
      noticeOperations = _ref.noticeOperations,
      setAttributes = _ref.setAttributes,
      onReplace = _ref.onReplace,
      isSelected = _ref.isSelected,
      noticeUI = _ref.noticeUI,
      insertBlocksAfter = _ref.insertBlocksAfter;
  var id = attributes.id,
      autoplay = attributes.autoplay,
      caption = attributes.caption,
      loop = attributes.loop,
      preload = attributes.preload,
      src = attributes.src;
  var mediaUpload = Object(external_this_wp_data_["useSelect"])(function (select) {
    var _select = select('core/block-editor'),
        getSettings = _select.getSettings;

    return getSettings().mediaUpload;
  }, []);
  Object(external_this_wp_element_["useEffect"])(function () {
    if (!id && Object(external_this_wp_blob_["isBlobURL"])(src)) {
      var file = Object(external_this_wp_blob_["getBlobByURL"])(src);

      if (file) {
        mediaUpload({
          filesList: [file],
          onFileChange: function onFileChange(_ref2) {
            var _ref3 = Object(slicedToArray["a" /* default */])(_ref2, 1),
                _ref3$ = _ref3[0],
                mediaId = _ref3$.id,
                url = _ref3$.url;

            setAttributes({
              id: mediaId,
              src: url
            });
          },
          onError: function onError(e) {
            setAttributes({
              src: undefined,
              id: undefined
            });
            noticeOperations.createErrorNotice(e);
          },
          allowedTypes: audio_edit_ALLOWED_MEDIA_TYPES
        });
      }
    }
  }, []);

  function toggleAttribute(attribute) {
    return function (newValue) {
      setAttributes(Object(defineProperty["a" /* default */])({}, attribute, newValue));
    };
  }

  function onSelectURL(newSrc) {
    // Set the block's src from the edit component's state, and switch off
    // the editing UI.
    if (newSrc !== src) {
      // Check if there's an embed block that handles this URL.
      var embedBlock = util_createUpgradedEmbedBlock({
        attributes: {
          url: newSrc
        }
      });

      if (undefined !== embedBlock) {
        onReplace(embedBlock);
        return;
      }

      setAttributes({
        src: newSrc,
        id: undefined
      });
    }
  }

  function onUploadError(message) {
    noticeOperations.removeAllNotices();
    noticeOperations.createErrorNotice(message);
  }

  function getAutoplayHelp(checked) {
    return checked ? Object(external_this_wp_i18n_["__"])('Note: Autoplaying audio may cause usability issues for some visitors.') : null;
  } // const { setAttributes, isSelected, noticeUI } = this.props;


  function onSelectAudio(media) {
    if (!media || !media.url) {
      // in this case there was an error and we should continue in the editing state
      // previous attributes should be removed because they may be temporary blob urls
      setAttributes({
        src: undefined,
        id: undefined
      });
      return;
    } // sets the block's attribute and updates the edit component from the
    // selected media, then switches off the editing UI


    setAttributes({
      src: media.url,
      id: media.id
    });
  }

  if (!src) {
    return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["__experimentalBlock"].div, null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["MediaPlaceholder"], {
      icon: Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockIcon"], {
        icon: library_audio
      }),
      onSelect: onSelectAudio,
      onSelectURL: onSelectURL,
      accept: "audio/*",
      allowedTypes: audio_edit_ALLOWED_MEDIA_TYPES,
      value: attributes,
      notices: noticeUI,
      onError: onUploadError
    }));
  }

  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["MediaReplaceFlow"], {
    mediaId: id,
    mediaURL: src,
    allowedTypes: audio_edit_ALLOWED_MEDIA_TYPES,
    accept: "audio/*",
    onSelect: onSelectAudio,
    onSelectURL: onSelectURL,
    onError: onUploadError
  })), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InspectorControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
    title: Object(external_this_wp_i18n_["__"])('Audio settings')
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
    label: Object(external_this_wp_i18n_["__"])('Autoplay'),
    onChange: toggleAttribute('autoplay'),
    checked: autoplay,
    help: getAutoplayHelp
  }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
    label: Object(external_this_wp_i18n_["__"])('Loop'),
    onChange: toggleAttribute('loop'),
    checked: loop
  }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SelectControl"], {
    label: Object(external_this_wp_i18n_["__"])('Preload'),
    value: preload || '' // `undefined` is required for the preload attribute to be unset.
    ,
    onChange: function onChange(value) {
      return setAttributes({
        preload: value || undefined
      });
    },
    options: [{
      value: '',
      label: Object(external_this_wp_i18n_["__"])('Browser default')
    }, {
      value: 'auto',
      label: Object(external_this_wp_i18n_["__"])('Auto')
    }, {
      value: 'metadata',
      label: Object(external_this_wp_i18n_["__"])('Metadata')
    }, {
      value: 'none',
      label: Object(external_this_wp_i18n_["__"])('None')
    }]
  }))), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["__experimentalBlock"].figure, null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Disabled"], null, Object(external_this_wp_element_["createElement"])("audio", {
    controls: "controls",
    src: src
  })), (!external_this_wp_blockEditor_["RichText"].isEmpty(caption) || isSelected) && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"], {
    tagName: "figcaption",
    placeholder: Object(external_this_wp_i18n_["__"])('Write caption…'),
    value: caption,
    onChange: function onChange(value) {
      return setAttributes({
        caption: value
      });
    },
    inlineToolbar: true,
    __unstableOnSplitAtEnd: function __unstableOnSplitAtEnd() {
      return insertBlocksAfter(Object(external_this_wp_blocks_["createBlock"])('core/paragraph'));
    }
  })));
}

/* harmony default export */ var audio_edit = (Object(external_this_wp_components_["withNotices"])(AudioEdit));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/audio/save.js


/**
 * WordPress dependencies
 */

function audio_save_save(_ref) {
  var attributes = _ref.attributes;
  var autoplay = attributes.autoplay,
      caption = attributes.caption,
      loop = attributes.loop,
      preload = attributes.preload,
      src = attributes.src;
  return src && Object(external_this_wp_element_["createElement"])("figure", null, Object(external_this_wp_element_["createElement"])("audio", {
    controls: "controls",
    src: src,
    autoPlay: autoplay,
    loop: loop,
    preload: preload
  }), !external_this_wp_blockEditor_["RichText"].isEmpty(caption) && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
    tagName: "figcaption",
    value: caption
  }));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/audio/transforms.js
/**
 * WordPress dependencies
 */


var audio_transforms_transforms = {
  from: [{
    type: 'files',
    isMatch: function isMatch(files) {
      return files.length === 1 && files[0].type.indexOf('audio/') === 0;
    },
    transform: function transform(files) {
      var file = files[0]; // We don't need to upload the media directly here
      // It's already done as part of the `componentDidMount`
      // in the audio block

      var block = Object(external_this_wp_blocks_["createBlock"])('core/audio', {
        src: Object(external_this_wp_blob_["createBlobURL"])(file)
      });
      return block;
    }
  }, {
    type: 'shortcode',
    tag: 'audio',
    attributes: {
      src: {
        type: 'string',
        shortcode: function shortcode(_ref) {
          var src = _ref.named.src;
          return src;
        }
      },
      loop: {
        type: 'string',
        shortcode: function shortcode(_ref2) {
          var loop = _ref2.named.loop;
          return loop;
        }
      },
      autoplay: {
        type: 'string',
        shortcode: function shortcode(_ref3) {
          var autoplay = _ref3.named.autoplay;
          return autoplay;
        }
      },
      preload: {
        type: 'string',
        shortcode: function shortcode(_ref4) {
          var preload = _ref4.named.preload;
          return preload;
        }
      }
    }
  }]
};
/* harmony default export */ var audio_transforms = (audio_transforms_transforms);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/audio/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



var audio_metadata = {
  name: "core/audio",
  category: "media",
  attributes: {
    src: {
      type: "string",
      source: "attribute",
      selector: "audio",
      attribute: "src"
    },
    caption: {
      type: "string",
      source: "html",
      selector: "figcaption"
    },
    id: {
      type: "number"
    },
    autoplay: {
      type: "boolean",
      source: "attribute",
      selector: "audio",
      attribute: "autoplay"
    },
    loop: {
      type: "boolean",
      source: "attribute",
      selector: "audio",
      attribute: "loop"
    },
    preload: {
      type: "string",
      source: "attribute",
      selector: "audio",
      attribute: "preload"
    }
  },
  supports: {
    align: true,
    lightBlockWrapper: true
  }
};


var audio_name = audio_metadata.name;

var audio_settings = {
  title: Object(external_this_wp_i18n_["__"])('Audio'),
  description: Object(external_this_wp_i18n_["__"])('Embed a simple audio player.'),
  keywords: [Object(external_this_wp_i18n_["__"])('music'), Object(external_this_wp_i18n_["__"])('sound'), Object(external_this_wp_i18n_["__"])('podcast'), Object(external_this_wp_i18n_["__"])('recording')],
  icon: library_audio,
  transforms: audio_transforms,
  deprecated: audio_deprecated,
  edit: audio_edit,
  save: audio_save_save
};

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/button.js


/**
 * WordPress dependencies
 */

var button_button = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M19 6.5H5c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2zm.5 9c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h14c.3 0 .5.2.5.5v7zM8 13h8v-1.5H8V13z"
}));
/* harmony default export */ var library_button = (button_button);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/buttons/transforms.js
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */

var _name$category$suppor = {
  name: "core/buttons",
  category: "design",
  supports: {
    align: true,
    alignWide: false,
    lightBlockWrapper: true
  }
},
    buttons_transforms_name = _name$category$suppor.name;
var buttons_transforms_transforms = {
  from: [{
    type: 'block',
    isMultiBlock: true,
    blocks: ['core/button'],
    transform: function transform(buttons) {
      return (// Creates the buttons block
        Object(external_this_wp_blocks_["createBlock"])(buttons_transforms_name, {}, // Loop the selected buttons
        buttons.map(function (attributes) {
          return (// Create singular button in the buttons block
            Object(external_this_wp_blocks_["createBlock"])('core/button', attributes)
          );
        }))
      );
    }
  }]
};
/* harmony default export */ var buttons_transforms = (buttons_transforms_transforms);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/button/deprecated.js



function button_deprecated_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function button_deprecated_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { button_deprecated_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { button_deprecated_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */



var deprecated_migrateCustomColorsAndGradients = function migrateCustomColorsAndGradients(attributes) {
  if (!attributes.customTextColor && !attributes.customBackgroundColor && !attributes.customGradient) {
    return attributes;
  }

  var style = {
    color: {}
  };

  if (attributes.customTextColor) {
    style.color.text = attributes.customTextColor;
  }

  if (attributes.customBackgroundColor) {
    style.color.background = attributes.customBackgroundColor;
  }

  if (attributes.customGradient) {
    style.color.gradient = attributes.customGradient;
  }

  return button_deprecated_objectSpread({}, Object(external_this_lodash_["omit"])(attributes, ['customTextColor', 'customBackgroundColor', 'customGradient']), {
    style: style
  });
};

var deprecated_oldColorsMigration = function oldColorsMigration(attributes) {
  return deprecated_migrateCustomColorsAndGradients(Object(external_this_lodash_["omit"])(button_deprecated_objectSpread({}, attributes, {
    customTextColor: attributes.textColor && '#' === attributes.textColor[0] ? attributes.textColor : undefined,
    customBackgroundColor: attributes.color && '#' === attributes.color[0] ? attributes.color : undefined
  }), ['color', 'textColor']));
};

var button_deprecated_blockAttributes = {
  url: {
    type: 'string',
    source: 'attribute',
    selector: 'a',
    attribute: 'href'
  },
  title: {
    type: 'string',
    source: 'attribute',
    selector: 'a',
    attribute: 'title'
  },
  text: {
    type: 'string',
    source: 'html',
    selector: 'a'
  }
};
var button_deprecated_deprecated = [{
  supports: {
    align: true,
    alignWide: false,
    __experimentalColor: {
      gradients: true
    }
  },
  attributes: button_deprecated_objectSpread({}, button_deprecated_blockAttributes, {
    linkTarget: {
      type: 'string',
      source: 'attribute',
      selector: 'a',
      attribute: 'target'
    },
    rel: {
      type: 'string',
      source: 'attribute',
      selector: 'a',
      attribute: 'rel'
    },
    placeholder: {
      type: 'string'
    },
    borderRadius: {
      type: 'number'
    },
    backgroundColor: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    },
    gradient: {
      type: 'string'
    },
    style: {
      type: 'object'
    }
  }),
  save: function save(_ref) {
    var attributes = _ref.attributes;
    var borderRadius = attributes.borderRadius,
        linkTarget = attributes.linkTarget,
        rel = attributes.rel,
        text = attributes.text,
        title = attributes.title,
        url = attributes.url;
    var buttonClasses = classnames_default()('wp-block-button__link', {
      'no-border-radius': borderRadius === 0
    });
    var buttonStyle = {
      borderRadius: borderRadius ? borderRadius + 'px' : undefined
    };
    return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      tagName: "a",
      className: buttonClasses,
      href: url,
      title: title,
      style: buttonStyle,
      value: text,
      target: linkTarget,
      rel: rel
    });
  }
}, {
  supports: {
    align: true,
    alignWide: false
  },
  attributes: button_deprecated_objectSpread({}, button_deprecated_blockAttributes, {
    linkTarget: {
      type: 'string',
      source: 'attribute',
      selector: 'a',
      attribute: 'target'
    },
    rel: {
      type: 'string',
      source: 'attribute',
      selector: 'a',
      attribute: 'rel'
    },
    placeholder: {
      type: 'string'
    },
    borderRadius: {
      type: 'number'
    },
    backgroundColor: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    },
    customBackgroundColor: {
      type: 'string'
    },
    customTextColor: {
      type: 'string'
    },
    customGradient: {
      type: 'string'
    },
    gradient: {
      type: 'string'
    }
  }),
  isEligible: function isEligible(attributes) {
    return !!attributes.customTextColor || !!attributes.customBackgroundColor || !!attributes.customGradient;
  },
  migrate: deprecated_migrateCustomColorsAndGradients,
  save: function save(_ref2) {
    var _classnames;

    var attributes = _ref2.attributes;
    var backgroundColor = attributes.backgroundColor,
        borderRadius = attributes.borderRadius,
        customBackgroundColor = attributes.customBackgroundColor,
        customTextColor = attributes.customTextColor,
        customGradient = attributes.customGradient,
        linkTarget = attributes.linkTarget,
        gradient = attributes.gradient,
        rel = attributes.rel,
        text = attributes.text,
        textColor = attributes.textColor,
        title = attributes.title,
        url = attributes.url;
    var textClass = Object(external_this_wp_blockEditor_["getColorClassName"])('color', textColor);
    var backgroundClass = !customGradient && Object(external_this_wp_blockEditor_["getColorClassName"])('background-color', backgroundColor);

    var gradientClass = Object(external_this_wp_blockEditor_["__experimentalGetGradientClass"])(gradient);

    var buttonClasses = classnames_default()('wp-block-button__link', (_classnames = {
      'has-text-color': textColor || customTextColor
    }, Object(defineProperty["a" /* default */])(_classnames, textClass, textClass), Object(defineProperty["a" /* default */])(_classnames, 'has-background', backgroundColor || customBackgroundColor || customGradient || gradient), Object(defineProperty["a" /* default */])(_classnames, backgroundClass, backgroundClass), Object(defineProperty["a" /* default */])(_classnames, 'no-border-radius', borderRadius === 0), Object(defineProperty["a" /* default */])(_classnames, gradientClass, gradientClass), _classnames));
    var buttonStyle = {
      background: customGradient ? customGradient : undefined,
      backgroundColor: backgroundClass || customGradient || gradient ? undefined : customBackgroundColor,
      color: textClass ? undefined : customTextColor,
      borderRadius: borderRadius ? borderRadius + 'px' : undefined
    }; // The use of a `title` attribute here is soft-deprecated, but still applied
    // if it had already been assigned, for the sake of backward-compatibility.
    // A title will no longer be assigned for new or updated button block links.

    return Object(external_this_wp_element_["createElement"])("div", null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      tagName: "a",
      className: buttonClasses,
      href: url,
      title: title,
      style: buttonStyle,
      value: text,
      target: linkTarget,
      rel: rel
    }));
  }
}, {
  attributes: button_deprecated_objectSpread({}, button_deprecated_blockAttributes, {
    align: {
      type: 'string',
      default: 'none'
    },
    backgroundColor: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    },
    customBackgroundColor: {
      type: 'string'
    },
    customTextColor: {
      type: 'string'
    },
    linkTarget: {
      type: 'string',
      source: 'attribute',
      selector: 'a',
      attribute: 'target'
    },
    rel: {
      type: 'string',
      source: 'attribute',
      selector: 'a',
      attribute: 'rel'
    },
    placeholder: {
      type: 'string'
    }
  }),
  isEligible: function isEligible(attribute) {
    return attribute.className && attribute.className.includes('is-style-squared');
  },
  migrate: function migrate(attributes) {
    var newClassName = attributes.className;

    if (newClassName) {
      newClassName = newClassName.replace(/is-style-squared[\s]?/, '').trim();
    }

    return deprecated_migrateCustomColorsAndGradients(button_deprecated_objectSpread({}, attributes, {
      className: newClassName ? newClassName : undefined,
      borderRadius: 0
    }));
  },
  save: function save(_ref3) {
    var _classnames2;

    var attributes = _ref3.attributes;
    var backgroundColor = attributes.backgroundColor,
        customBackgroundColor = attributes.customBackgroundColor,
        customTextColor = attributes.customTextColor,
        linkTarget = attributes.linkTarget,
        rel = attributes.rel,
        text = attributes.text,
        textColor = attributes.textColor,
        title = attributes.title,
        url = attributes.url;
    var textClass = Object(external_this_wp_blockEditor_["getColorClassName"])('color', textColor);
    var backgroundClass = Object(external_this_wp_blockEditor_["getColorClassName"])('background-color', backgroundColor);
    var buttonClasses = classnames_default()('wp-block-button__link', (_classnames2 = {
      'has-text-color': textColor || customTextColor
    }, Object(defineProperty["a" /* default */])(_classnames2, textClass, textClass), Object(defineProperty["a" /* default */])(_classnames2, 'has-background', backgroundColor || customBackgroundColor), Object(defineProperty["a" /* default */])(_classnames2, backgroundClass, backgroundClass), _classnames2));
    var buttonStyle = {
      backgroundColor: backgroundClass ? undefined : customBackgroundColor,
      color: textClass ? undefined : customTextColor
    };
    return Object(external_this_wp_element_["createElement"])("div", null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      tagName: "a",
      className: buttonClasses,
      href: url,
      title: title,
      style: buttonStyle,
      value: text,
      target: linkTarget,
      rel: rel
    }));
  }
}, {
  attributes: button_deprecated_objectSpread({}, button_deprecated_blockAttributes, {
    align: {
      type: 'string',
      default: 'none'
    },
    backgroundColor: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    },
    customBackgroundColor: {
      type: 'string'
    },
    customTextColor: {
      type: 'string'
    }
  }),
  migrate: deprecated_oldColorsMigration,
  save: function save(_ref4) {
    var _classnames3;

    var attributes = _ref4.attributes;
    var url = attributes.url,
        text = attributes.text,
        title = attributes.title,
        backgroundColor = attributes.backgroundColor,
        textColor = attributes.textColor,
        customBackgroundColor = attributes.customBackgroundColor,
        customTextColor = attributes.customTextColor;
    var textClass = Object(external_this_wp_blockEditor_["getColorClassName"])('color', textColor);
    var backgroundClass = Object(external_this_wp_blockEditor_["getColorClassName"])('background-color', backgroundColor);
    var buttonClasses = classnames_default()('wp-block-button__link', (_classnames3 = {
      'has-text-color': textColor || customTextColor
    }, Object(defineProperty["a" /* default */])(_classnames3, textClass, textClass), Object(defineProperty["a" /* default */])(_classnames3, 'has-background', backgroundColor || customBackgroundColor), Object(defineProperty["a" /* default */])(_classnames3, backgroundClass, backgroundClass), _classnames3));
    var buttonStyle = {
      backgroundColor: backgroundClass ? undefined : customBackgroundColor,
      color: textClass ? undefined : customTextColor
    };
    return Object(external_this_wp_element_["createElement"])("div", null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      tagName: "a",
      className: buttonClasses,
      href: url,
      title: title,
      style: buttonStyle,
      value: text
    }));
  }
}, {
  attributes: button_deprecated_objectSpread({}, button_deprecated_blockAttributes, {
    color: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    },
    align: {
      type: 'string',
      default: 'none'
    }
  }),
  save: function save(_ref5) {
    var attributes = _ref5.attributes;
    var url = attributes.url,
        text = attributes.text,
        title = attributes.title,
        align = attributes.align,
        color = attributes.color,
        textColor = attributes.textColor;
    var buttonStyle = {
      backgroundColor: color,
      color: textColor
    };
    var linkClass = 'wp-block-button__link';
    return Object(external_this_wp_element_["createElement"])("div", {
      className: "align".concat(align)
    }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      tagName: "a",
      className: linkClass,
      href: url,
      title: title,
      style: buttonStyle,
      value: text
    }));
  },
  migrate: deprecated_oldColorsMigration
}, {
  attributes: button_deprecated_objectSpread({}, button_deprecated_blockAttributes, {
    color: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    },
    align: {
      type: 'string',
      default: 'none'
    }
  }),
  save: function save(_ref6) {
    var attributes = _ref6.attributes;
    var url = attributes.url,
        text = attributes.text,
        title = attributes.title,
        align = attributes.align,
        color = attributes.color,
        textColor = attributes.textColor;
    return Object(external_this_wp_element_["createElement"])("div", {
      className: "align".concat(align),
      style: {
        backgroundColor: color
      }
    }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      tagName: "a",
      href: url,
      title: title,
      style: {
        color: textColor
      },
      value: text
    }));
  },
  migrate: deprecated_oldColorsMigration
}];
/* harmony default export */ var button_deprecated = (button_deprecated_deprecated);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/link.js
var library_link = __webpack_require__(170);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/button/color-edit.js




function color_edit_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function color_edit_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { color_edit_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { color_edit_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


var isWebPlatform = external_this_wp_element_["Platform"].OS === 'web'; // The code in this file is copied entirely from the "color" and "style" support flags
// The flag can't be used at the moment because of the extra wrapper around
// the button block markup.

function getBlockDOMNode(clientId) {
  return document.getElementById('block-' + clientId);
}
/**
 * Removed undefined values from nested object.
 *
 * @param {*} object
 * @return {*} Object cleaned from undefined values
 */


var color_edit_cleanEmptyObject = function cleanEmptyObject(object) {
  if (!Object(external_this_lodash_["isObject"])(object)) {
    return object;
  }

  var cleanedNestedObjects = Object(external_this_lodash_["pickBy"])(Object(external_this_lodash_["mapValues"])(object, cleanEmptyObject), external_this_lodash_["identity"]);
  return Object(external_this_lodash_["isEqual"])(cleanedNestedObjects, {}) ? undefined : cleanedNestedObjects;
};

function ColorPanel(_ref) {
  var settings = _ref.settings,
      clientId = _ref.clientId,
      _ref$enableContrastCh = _ref.enableContrastChecking,
      enableContrastChecking = _ref$enableContrastCh === void 0 ? true : _ref$enableContrastCh;
  var _window = window,
      getComputedStyle = _window.getComputedStyle,
      Node = _window.Node;

  var _useState = Object(external_this_wp_element_["useState"])(),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      detectedBackgroundColor = _useState2[0],
      setDetectedBackgroundColor = _useState2[1];

  var _useState3 = Object(external_this_wp_element_["useState"])(),
      _useState4 = Object(slicedToArray["a" /* default */])(_useState3, 2),
      detectedColor = _useState4[0],
      setDetectedColor = _useState4[1];

  var title = isWebPlatform ? Object(external_this_wp_i18n_["__"])('Color settings') : Object(external_this_wp_i18n_["__"])('Color Settings');
  Object(external_this_wp_element_["useEffect"])(function () {
    if (isWebPlatform && !enableContrastChecking) {
      return;
    }

    var colorsDetectionElement = getBlockDOMNode(clientId);

    if (!colorsDetectionElement) {
      return;
    }

    setDetectedColor(getComputedStyle(colorsDetectionElement).color);
    var backgroundColorNode = colorsDetectionElement;
    var backgroundColor = getComputedStyle(backgroundColorNode).backgroundColor;

    while (backgroundColor === 'rgba(0, 0, 0, 0)' && backgroundColorNode.parentNode && backgroundColorNode.parentNode.nodeType === Node.ELEMENT_NODE) {
      backgroundColorNode = backgroundColorNode.parentNode;
      backgroundColor = getComputedStyle(backgroundColorNode).backgroundColor;
    }

    setDetectedBackgroundColor(backgroundColor);
  });
  return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InspectorControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["__experimentalPanelColorGradientSettings"], {
    title: title,
    initialOpen: false,
    settings: settings
  }, isWebPlatform && enableContrastChecking && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["ContrastChecker"], {
    backgroundColor: detectedBackgroundColor,
    textColor: detectedColor
  })));
}
/**
 * Inspector control panel containing the color related configuration
 *
 * @param {Object} props
 *
 * @return {WPElement} Color edit element.
 */


function ColorEdit(props) {
  var _style$color2, _style$color3, _style$color4;

  var attributes = props.attributes;

  var _useSelect = Object(external_this_wp_data_["useSelect"])(function (select) {
    return select('core/block-editor').getSettings();
  }, []),
      colors = _useSelect.colors,
      gradients = _useSelect.gradients; // Shouldn't be needed but right now the ColorGradientsPanel
  // can trigger both onChangeColor and onChangeBackground
  // synchronously causing our two callbacks to override changes
  // from each other.


  var localAttributes = Object(external_this_wp_element_["useRef"])(attributes);
  Object(external_this_wp_element_["useEffect"])(function () {
    localAttributes.current = attributes;
  }, [attributes]);
  var style = attributes.style,
      textColor = attributes.textColor,
      backgroundColor = attributes.backgroundColor,
      gradient = attributes.gradient;
  var gradientValue;

  if (gradient) {
    gradientValue = Object(external_this_wp_blockEditor_["getGradientValueBySlug"])(gradients, gradient);
  } else {
    var _style$color;

    gradientValue = style === null || style === void 0 ? void 0 : (_style$color = style.color) === null || _style$color === void 0 ? void 0 : _style$color.gradient;
  }

  var onChangeColor = function onChangeColor(name) {
    return function (value) {
      var _localAttributes$curr, _localAttributes$curr2;

      var colorObject = Object(external_this_wp_blockEditor_["getColorObjectByColorValue"])(colors, value);
      var attributeName = name + 'Color';

      var newStyle = color_edit_objectSpread({}, localAttributes.current.style, {
        color: color_edit_objectSpread({}, (_localAttributes$curr = localAttributes.current) === null || _localAttributes$curr === void 0 ? void 0 : (_localAttributes$curr2 = _localAttributes$curr.style) === null || _localAttributes$curr2 === void 0 ? void 0 : _localAttributes$curr2.color, Object(defineProperty["a" /* default */])({}, name, (colorObject === null || colorObject === void 0 ? void 0 : colorObject.slug) ? undefined : value))
      });

      var newNamedColor = (colorObject === null || colorObject === void 0 ? void 0 : colorObject.slug) ? colorObject.slug : undefined;

      var newAttributes = Object(defineProperty["a" /* default */])({
        style: color_edit_cleanEmptyObject(newStyle)
      }, attributeName, newNamedColor);

      props.setAttributes(newAttributes);
      localAttributes.current = color_edit_objectSpread({}, localAttributes.current, {}, newAttributes);
    };
  };

  var onChangeGradient = function onChangeGradient(value) {
    var slug = Object(external_this_wp_blockEditor_["getGradientSlugByValue"])(gradients, value);
    var newAttributes;

    if (slug) {
      var _localAttributes$curr3, _localAttributes$curr4, _localAttributes$curr5;

      var newStyle = color_edit_objectSpread({}, (_localAttributes$curr3 = localAttributes.current) === null || _localAttributes$curr3 === void 0 ? void 0 : _localAttributes$curr3.style, {
        color: color_edit_objectSpread({}, (_localAttributes$curr4 = localAttributes.current) === null || _localAttributes$curr4 === void 0 ? void 0 : (_localAttributes$curr5 = _localAttributes$curr4.style) === null || _localAttributes$curr5 === void 0 ? void 0 : _localAttributes$curr5.color, {
          gradient: undefined
        })
      });

      newAttributes = {
        style: color_edit_cleanEmptyObject(newStyle),
        gradient: slug
      };
    } else {
      var _localAttributes$curr6, _localAttributes$curr7, _localAttributes$curr8;

      var _newStyle = color_edit_objectSpread({}, (_localAttributes$curr6 = localAttributes.current) === null || _localAttributes$curr6 === void 0 ? void 0 : _localAttributes$curr6.style, {
        color: color_edit_objectSpread({}, (_localAttributes$curr7 = localAttributes.current) === null || _localAttributes$curr7 === void 0 ? void 0 : (_localAttributes$curr8 = _localAttributes$curr7.style) === null || _localAttributes$curr8 === void 0 ? void 0 : _localAttributes$curr8.color, {
          gradient: value
        })
      });

      newAttributes = {
        style: color_edit_cleanEmptyObject(_newStyle),
        gradient: undefined
      };
    }

    props.setAttributes(newAttributes);
    localAttributes.current = color_edit_objectSpread({}, localAttributes.current, {}, newAttributes);
  };

  return Object(external_this_wp_element_["createElement"])(ColorPanel, {
    enableContrastChecking: !gradient && !(style === null || style === void 0 ? void 0 : (_style$color2 = style.color) === null || _style$color2 === void 0 ? void 0 : _style$color2.gradient),
    clientId: props.clientId,
    settings: [{
      label: Object(external_this_wp_i18n_["__"])('Text Color'),
      onColorChange: onChangeColor('text'),
      colorValue: Object(external_this_wp_blockEditor_["getColorObjectByAttributeValues"])(colors, textColor, style === null || style === void 0 ? void 0 : (_style$color3 = style.color) === null || _style$color3 === void 0 ? void 0 : _style$color3.text).color
    }, {
      label: Object(external_this_wp_i18n_["__"])('Background Color'),
      onColorChange: onChangeColor('background'),
      colorValue: Object(external_this_wp_blockEditor_["getColorObjectByAttributeValues"])(colors, backgroundColor, style === null || style === void 0 ? void 0 : (_style$color4 = style.color) === null || _style$color4 === void 0 ? void 0 : _style$color4.background).color,
      gradientValue: gradientValue,
      onGradientChange: onChangeGradient
    }]
  });
}

/* harmony default export */ var color_edit = (ColorEdit);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/button/color-props.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

 // The code in this file is copied entirely from the "color" and "style" support flags
// The flag can't be used at the moment because of the extra wrapper around
// the button block markup.

function getColorAndStyleProps(attributes) {
  var _style$color, _style$color2, _style$color3, _style$color4, _classnames, _style$color5, _style$color6, _style$color7, _style$color8, _style$color9, _style$color10;

  // I'd have prefered to avoid the "style" attribute usage here
  var backgroundColor = attributes.backgroundColor,
      textColor = attributes.textColor,
      gradient = attributes.gradient,
      style = attributes.style;
  var backgroundClass = Object(external_this_wp_blockEditor_["getColorClassName"])('background-color', backgroundColor);

  var gradientClass = Object(external_this_wp_blockEditor_["__experimentalGetGradientClass"])(gradient);

  var textClass = Object(external_this_wp_blockEditor_["getColorClassName"])('color', textColor);
  var className = classnames_default()(textClass, gradientClass, (_classnames = {}, Object(defineProperty["a" /* default */])(_classnames, backgroundClass, !(style === null || style === void 0 ? void 0 : (_style$color = style.color) === null || _style$color === void 0 ? void 0 : _style$color.gradient) && !!backgroundClass), Object(defineProperty["a" /* default */])(_classnames, 'has-text-color', textColor || (style === null || style === void 0 ? void 0 : (_style$color2 = style.color) === null || _style$color2 === void 0 ? void 0 : _style$color2.text)), Object(defineProperty["a" /* default */])(_classnames, 'has-background', backgroundColor || (style === null || style === void 0 ? void 0 : (_style$color3 = style.color) === null || _style$color3 === void 0 ? void 0 : _style$color3.background) || gradient || (style === null || style === void 0 ? void 0 : (_style$color4 = style.color) === null || _style$color4 === void 0 ? void 0 : _style$color4.gradient)), _classnames));
  var styleProp = (style === null || style === void 0 ? void 0 : (_style$color5 = style.color) === null || _style$color5 === void 0 ? void 0 : _style$color5.background) || (style === null || style === void 0 ? void 0 : (_style$color6 = style.color) === null || _style$color6 === void 0 ? void 0 : _style$color6.text) || (style === null || style === void 0 ? void 0 : (_style$color7 = style.color) === null || _style$color7 === void 0 ? void 0 : _style$color7.gradient) ? {
    background: (style === null || style === void 0 ? void 0 : (_style$color8 = style.color) === null || _style$color8 === void 0 ? void 0 : _style$color8.gradient) ? style.color.gradient : undefined,
    backgroundColor: (style === null || style === void 0 ? void 0 : (_style$color9 = style.color) === null || _style$color9 === void 0 ? void 0 : _style$color9.background) ? style.color.background : undefined,
    color: (style === null || style === void 0 ? void 0 : (_style$color10 = style.color) === null || _style$color10 === void 0 ? void 0 : _style$color10.text) ? style.color.text : undefined
  } : {};
  return {
    className: !!className ? className : undefined,
    style: styleProp
  };
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/button/edit.js




function button_edit_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function button_edit_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { button_edit_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { button_edit_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */



var edit_NEW_TAB_REL = 'noreferrer noopener';
var MIN_BORDER_RADIUS_VALUE = 0;
var MAX_BORDER_RADIUS_VALUE = 50;
var INITIAL_BORDER_RADIUS_POSITION = 5;

function BorderPanel(_ref) {
  var _ref$borderRadius = _ref.borderRadius,
      borderRadius = _ref$borderRadius === void 0 ? '' : _ref$borderRadius,
      setAttributes = _ref.setAttributes;
  var setBorderRadius = Object(external_this_wp_element_["useCallback"])(function (newBorderRadius) {
    setAttributes({
      borderRadius: newBorderRadius
    });
  }, [setAttributes]);
  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
    title: Object(external_this_wp_i18n_["__"])('Border settings')
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["RangeControl"], {
    value: borderRadius,
    label: Object(external_this_wp_i18n_["__"])('Border radius'),
    min: MIN_BORDER_RADIUS_VALUE,
    max: MAX_BORDER_RADIUS_VALUE,
    initialPosition: INITIAL_BORDER_RADIUS_POSITION,
    allowReset: true,
    onChange: setBorderRadius
  }));
}

function URLPicker(_ref2) {
  var isSelected = _ref2.isSelected,
      url = _ref2.url,
      setAttributes = _ref2.setAttributes,
      opensInNewTab = _ref2.opensInNewTab,
      onToggleOpenInNewTab = _ref2.onToggleOpenInNewTab;

  var _useState = Object(external_this_wp_element_["useState"])(false),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      isURLPickerOpen = _useState2[0],
      setIsURLPickerOpen = _useState2[1];

  var openLinkControl = function openLinkControl() {
    setIsURLPickerOpen(true); // prevents default behaviour for event

    return false;
  };

  var linkControl = isURLPickerOpen && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Popover"], {
    position: "bottom center",
    onClose: function onClose() {
      return setIsURLPickerOpen(false);
    }
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["__experimentalLinkControl"], {
    className: "wp-block-navigation-link__inline-link-input",
    value: {
      url: url,
      opensInNewTab: opensInNewTab
    },
    onChange: function onChange(_ref3) {
      var _ref3$url = _ref3.url,
          newURL = _ref3$url === void 0 ? '' : _ref3$url,
          newOpensInNewTab = _ref3.opensInNewTab;
      setAttributes({
        url: newURL
      });

      if (opensInNewTab !== newOpensInNewTab) {
        onToggleOpenInNewTab(newOpensInNewTab);
      }
    }
  }));
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToolbarGroup"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToolbarButton"], {
    name: "link",
    icon: library_link["a" /* default */],
    title: Object(external_this_wp_i18n_["__"])('Link'),
    shortcut: external_this_wp_keycodes_["displayShortcut"].primary('k'),
    onClick: openLinkControl
  }))), isSelected && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["KeyboardShortcuts"], {
    bindGlobal: true,
    shortcuts: Object(defineProperty["a" /* default */])({}, external_this_wp_keycodes_["rawShortcut"].primary('k'), openLinkControl)
  }), linkControl);
}

function ButtonEdit(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      className = props.className,
      isSelected = props.isSelected,
      onReplace = props.onReplace,
      mergeBlocks = props.mergeBlocks;
  var borderRadius = attributes.borderRadius,
      linkTarget = attributes.linkTarget,
      placeholder = attributes.placeholder,
      rel = attributes.rel,
      text = attributes.text,
      url = attributes.url;
  var onSetLinkRel = Object(external_this_wp_element_["useCallback"])(function (value) {
    setAttributes({
      rel: value
    });
  }, [setAttributes]);
  var onToggleOpenInNewTab = Object(external_this_wp_element_["useCallback"])(function (value) {
    var newLinkTarget = value ? '_blank' : undefined;
    var updatedRel = rel;

    if (newLinkTarget && !rel) {
      updatedRel = edit_NEW_TAB_REL;
    } else if (!newLinkTarget && rel === edit_NEW_TAB_REL) {
      updatedRel = undefined;
    }

    setAttributes({
      linkTarget: newLinkTarget,
      rel: updatedRel
    });
  }, [rel, setAttributes]);
  var colorProps = getColorAndStyleProps(attributes);
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(color_edit, props), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["__experimentalBlock"].div, null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"], {
    placeholder: placeholder || Object(external_this_wp_i18n_["__"])('Add text…'),
    value: text,
    onChange: function onChange(value) {
      return setAttributes({
        text: value
      });
    },
    withoutInteractiveFormatting: true,
    className: classnames_default()(className, 'wp-block-button__link', colorProps.className, {
      'no-border-radius': borderRadius === 0
    }),
    style: button_edit_objectSpread({
      borderRadius: borderRadius ? borderRadius + 'px' : undefined
    }, colorProps.style),
    onSplit: function onSplit(value) {
      return Object(external_this_wp_blocks_["createBlock"])('core/button', button_edit_objectSpread({}, attributes, {
        text: value
      }));
    },
    onReplace: onReplace,
    onMerge: mergeBlocks,
    identifier: "text"
  })), Object(external_this_wp_element_["createElement"])(URLPicker, {
    url: url,
    setAttributes: setAttributes,
    isSelected: isSelected,
    opensInNewTab: linkTarget === '_blank',
    onToggleOpenInNewTab: onToggleOpenInNewTab
  }), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InspectorControls"], null, Object(external_this_wp_element_["createElement"])(BorderPanel, {
    borderRadius: borderRadius,
    setAttributes: setAttributes
  }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
    title: Object(external_this_wp_i18n_["__"])('Link settings')
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
    label: Object(external_this_wp_i18n_["__"])('Open in new tab'),
    onChange: onToggleOpenInNewTab,
    checked: linkTarget === '_blank'
  }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["TextControl"], {
    label: Object(external_this_wp_i18n_["__"])('Link rel'),
    value: rel || '',
    onChange: onSetLinkRel
  }))));
}

/* harmony default export */ var button_edit = (ButtonEdit);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/button/save.js



function save_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function save_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { save_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { save_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


function button_save_save(_ref) {
  var attributes = _ref.attributes;
  var borderRadius = attributes.borderRadius,
      linkTarget = attributes.linkTarget,
      rel = attributes.rel,
      text = attributes.text,
      title = attributes.title,
      url = attributes.url;
  var colorProps = getColorAndStyleProps(attributes);
  var buttonClasses = classnames_default()('wp-block-button__link', colorProps.className, {
    'no-border-radius': borderRadius === 0
  });

  var buttonStyle = save_objectSpread({
    borderRadius: borderRadius ? borderRadius + 'px' : undefined
  }, colorProps.style); // The use of a `title` attribute here is soft-deprecated, but still applied
  // if it had already been assigned, for the sake of backward-compatibility.
  // A title will no longer be assigned for new or updated button block links.


  return Object(external_this_wp_element_["createElement"])("div", null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
    tagName: "a",
    className: buttonClasses,
    href: url,
    title: title,
    style: buttonStyle,
    value: text,
    target: linkTarget,
    rel: rel
  }));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/button/index.js


function button_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function button_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { button_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { button_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



var button_metadata = {
  name: "core/button",
  category: "design",
  parent: ["core/buttons"],
  attributes: {
    url: {
      type: "string",
      source: "attribute",
      selector: "a",
      attribute: "href"
    },
    title: {
      type: "string",
      source: "attribute",
      selector: "a",
      attribute: "title"
    },
    text: {
      type: "string",
      source: "html",
      selector: "a"
    },
    linkTarget: {
      type: "string",
      source: "attribute",
      selector: "a",
      attribute: "target"
    },
    rel: {
      type: "string",
      source: "attribute",
      selector: "a",
      attribute: "rel"
    },
    placeholder: {
      type: "string"
    },
    borderRadius: {
      type: "number"
    },
    style: {
      type: "object"
    },
    backgroundColor: {
      type: "string"
    },
    textColor: {
      type: "string"
    },
    gradient: {
      type: "string"
    }
  },
  supports: {
    align: true,
    alignWide: false,
    reusable: false,
    lightBlockWrapper: true
  }
};

var button_name = button_metadata.name;

var button_settings = {
  title: Object(external_this_wp_i18n_["__"])('Button'),
  description: Object(external_this_wp_i18n_["__"])('Prompt visitors to take action with a button-style link.'),
  icon: library_button,
  keywords: [Object(external_this_wp_i18n_["__"])('link')],
  example: {
    attributes: {
      className: 'is-style-fill',
      backgroundColor: 'vivid-green-cyan',
      text: Object(external_this_wp_i18n_["__"])('Call to Action')
    }
  },
  styles: [{
    name: 'fill',
    label: Object(external_this_wp_i18n_["__"])('Fill'),
    isDefault: true
  }, {
    name: 'outline',
    label: Object(external_this_wp_i18n_["__"])('Outline')
  }],
  edit: button_edit,
  save: button_save_save,
  deprecated: button_deprecated,
  merge: function merge(a, _ref) {
    var _ref$text = _ref.text,
        text = _ref$text === void 0 ? '' : _ref$text;
    return button_objectSpread({}, a, {
      text: (a.text || '') + text
    });
  }
};

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/buttons/edit.js


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


var ALLOWED_BLOCKS = [button_name];
var BUTTONS_TEMPLATE = [['core/button']]; // Inside buttons block alignment options are not supported.

var alignmentHooksSetting = {
  isEmbedButton: true
};

function ButtonsEdit() {
  return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["__experimentalBlock"].div, null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["__experimentalAlignmentHookSettingsProvider"], {
    value: alignmentHooksSetting
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InnerBlocks"], {
    allowedBlocks: ALLOWED_BLOCKS,
    template: BUTTONS_TEMPLATE,
    __experimentalMoverDirection: "horizontal"
  })));
}

/* harmony default export */ var buttons_edit = (ButtonsEdit);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/buttons/save.js


/**
 * WordPress dependencies
 */

function buttons_save_save() {
  return Object(external_this_wp_element_["createElement"])("div", null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InnerBlocks"].Content, null));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/buttons/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



var buttons_metadata = {
  name: "core/buttons",
  category: "design",
  supports: {
    align: true,
    alignWide: false,
    lightBlockWrapper: true
  }
};

var buttons_name = buttons_metadata.name;

var buttons_settings = {
  title: Object(external_this_wp_i18n_["__"])('Buttons'),
  description: Object(external_this_wp_i18n_["__"])('Prompt visitors to take action with a group of button-style links.'),
  icon: library_button,
  keywords: [Object(external_this_wp_i18n_["__"])('link')],
  transforms: buttons_transforms,
  edit: buttons_edit,
  save: buttons_save_save
};

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/calendar.js


/**
 * WordPress dependencies
 */

var calendar = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm.5 16c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V7h15v12zM9 10H7v2h2v-2zm0 4H7v2h2v-2zm4-4h-2v2h2v-2zm4 0h-2v2h2v-2zm-4 4h-2v2h2v-2zm4 0h-2v2h2v-2z"
}));
/* harmony default export */ var library_calendar = (calendar);

// EXTERNAL MODULE: external {"this":"moment"}
var external_this_moment_ = __webpack_require__(43);
var external_this_moment_default = /*#__PURE__*/__webpack_require__.n(external_this_moment_);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/calendar/edit.js









function calendar_edit_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function calendar_edit_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { calendar_edit_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { calendar_edit_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function calendar_edit_createSuper(Derived) { return function () { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (calendar_edit_isNativeReflectConstruct()) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function calendar_edit_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */






var edit_CalendarEdit = /*#__PURE__*/function (_Component) {
  Object(inherits["a" /* default */])(CalendarEdit, _Component);

  var _super = calendar_edit_createSuper(CalendarEdit);

  function CalendarEdit() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, CalendarEdit);

    _this = _super.apply(this, arguments);
    _this.getYearMonth = memize_default()(_this.getYearMonth.bind(Object(assertThisInitialized["a" /* default */])(_this)), {
      maxSize: 1
    });
    _this.getServerSideAttributes = memize_default()(_this.getServerSideAttributes.bind(Object(assertThisInitialized["a" /* default */])(_this)), {
      maxSize: 1
    });
    return _this;
  }

  Object(createClass["a" /* default */])(CalendarEdit, [{
    key: "getYearMonth",
    value: function getYearMonth(date) {
      if (!date) {
        return {};
      }

      var momentDate = external_this_moment_default()(date);
      return {
        year: momentDate.year(),
        month: momentDate.month() + 1
      };
    }
  }, {
    key: "getServerSideAttributes",
    value: function getServerSideAttributes(attributes, date) {
      return calendar_edit_objectSpread({}, attributes, {}, this.getYearMonth(date));
    }
  }, {
    key: "render",
    value: function render() {
      return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Disabled"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_serverSideRender_default.a, {
        block: "core/calendar",
        attributes: this.getServerSideAttributes(this.props.attributes, this.props.date)
      }));
    }
  }]);

  return CalendarEdit;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var calendar_edit = (Object(external_this_wp_data_["withSelect"])(function (select) {
  var coreEditorSelect = select('core/editor');

  if (!coreEditorSelect) {
    return;
  }

  var getEditedPostAttribute = coreEditorSelect.getEditedPostAttribute;
  var postType = getEditedPostAttribute('type'); // Dates are used to overwrite year and month used on the calendar.
  // This overwrite should only happen for 'post' post types.
  // For other post types the calendar always displays the current month.

  return {
    date: postType === 'post' ? getEditedPostAttribute('date') : undefined
  };
})(edit_CalendarEdit));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/calendar/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */

var calendar_metadata = {
  name: "core/calendar",
  category: "widgets",
  attributes: {
    align: {
      type: "string",
      "enum": ["left", "center", "right", "wide", "full"]
    },
    className: {
      type: "string"
    },
    month: {
      type: "integer"
    },
    year: {
      type: "integer"
    }
  },
  supports: {
    align: true
  }
};

var calendar_name = calendar_metadata.name;

var calendar_settings = {
  title: Object(external_this_wp_i18n_["__"])('Calendar'),
  description: Object(external_this_wp_i18n_["__"])('A calendar of your site’s posts.'),
  icon: library_calendar,
  keywords: [Object(external_this_wp_i18n_["__"])('posts'), Object(external_this_wp_i18n_["__"])('archive')],
  example: {},
  edit: calendar_edit
};

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/category.js


/**
 * WordPress dependencies
 */

var category_category = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm.5 16c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V7h15v12zM9 10H7v2h2v-2zm0 4H7v2h2v-2zm4-4h-2v2h2v-2zm4 0h-2v2h2v-2zm-4 4h-2v2h2v-2zm4 0h-2v2h2v-2z"
}));
/* harmony default export */ var library_category = (category_category);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/pin.js


/**
 * WordPress dependencies
 */

var pin = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M10.44 3.02l1.82-1.82 6.36 6.35-1.83 1.82c-1.05-.68-2.48-.57-3.41.36l-.75.75c-.92.93-1.04 2.35-.35 3.41l-1.83 1.82-2.41-2.41-2.8 2.79c-.42.42-3.38 2.71-3.8 2.29s1.86-3.39 2.28-3.81l2.79-2.79L4.1 9.36l1.83-1.82c1.05.69 2.48.57 3.4-.36l.75-.75c.93-.92 1.05-2.35.36-3.41z"
}));
/* harmony default export */ var library_pin = (pin);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/categories/edit.js








function categories_edit_createSuper(Derived) { return function () { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (categories_edit_isNativeReflectConstruct()) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function categories_edit_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */









var edit_CategoriesEdit = /*#__PURE__*/function (_Component) {
  Object(inherits["a" /* default */])(CategoriesEdit, _Component);

  var _super = categories_edit_createSuper(CategoriesEdit);

  function CategoriesEdit() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, CategoriesEdit);

    _this = _super.apply(this, arguments);
    _this.toggleDisplayAsDropdown = _this.toggleDisplayAsDropdown.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.toggleShowPostCounts = _this.toggleShowPostCounts.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.toggleShowHierarchy = _this.toggleShowHierarchy.bind(Object(assertThisInitialized["a" /* default */])(_this));
    return _this;
  }

  Object(createClass["a" /* default */])(CategoriesEdit, [{
    key: "toggleDisplayAsDropdown",
    value: function toggleDisplayAsDropdown() {
      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes;
      var displayAsDropdown = attributes.displayAsDropdown;
      setAttributes({
        displayAsDropdown: !displayAsDropdown
      });
    }
  }, {
    key: "toggleShowPostCounts",
    value: function toggleShowPostCounts() {
      var _this$props2 = this.props,
          attributes = _this$props2.attributes,
          setAttributes = _this$props2.setAttributes;
      var showPostCounts = attributes.showPostCounts;
      setAttributes({
        showPostCounts: !showPostCounts
      });
    }
  }, {
    key: "toggleShowHierarchy",
    value: function toggleShowHierarchy() {
      var _this$props3 = this.props,
          attributes = _this$props3.attributes,
          setAttributes = _this$props3.setAttributes;
      var showHierarchy = attributes.showHierarchy;
      setAttributes({
        showHierarchy: !showHierarchy
      });
    }
  }, {
    key: "getCategories",
    value: function getCategories() {
      var parentId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var categories = this.props.categories;

      if (!categories || !categories.length) {
        return [];
      }

      if (parentId === null) {
        return categories;
      }

      return categories.filter(function (category) {
        return category.parent === parentId;
      });
    }
  }, {
    key: "getCategoryListClassName",
    value: function getCategoryListClassName(level) {
      return "wp-block-categories__list wp-block-categories__list-level-".concat(level);
    }
  }, {
    key: "renderCategoryName",
    value: function renderCategoryName(category) {
      if (!category.name) {
        return Object(external_this_wp_i18n_["__"])('(Untitled)');
      }

      return Object(external_this_lodash_["unescape"])(category.name).trim();
    }
  }, {
    key: "renderCategoryList",
    value: function renderCategoryList() {
      var _this2 = this;

      var showHierarchy = this.props.attributes.showHierarchy;
      var parentId = showHierarchy ? 0 : null;
      var categories = this.getCategories(parentId);
      return Object(external_this_wp_element_["createElement"])("ul", {
        className: this.getCategoryListClassName(0)
      }, categories.map(function (category) {
        return _this2.renderCategoryListItem(category, 0);
      }));
    }
  }, {
    key: "renderCategoryListItem",
    value: function renderCategoryListItem(category, level) {
      var _this3 = this;

      var _this$props$attribute = this.props.attributes,
          showHierarchy = _this$props$attribute.showHierarchy,
          showPostCounts = _this$props$attribute.showPostCounts;
      var childCategories = this.getCategories(category.id);
      return Object(external_this_wp_element_["createElement"])("li", {
        key: category.id
      }, Object(external_this_wp_element_["createElement"])("a", {
        href: category.link,
        target: "_blank",
        rel: "noreferrer noopener"
      }, this.renderCategoryName(category)), showPostCounts && Object(external_this_wp_element_["createElement"])("span", {
        className: "wp-block-categories__post-count"
      }, ' ', "(", category.count, ")"), showHierarchy && !!childCategories.length && Object(external_this_wp_element_["createElement"])("ul", {
        className: this.getCategoryListClassName(level + 1)
      }, childCategories.map(function (childCategory) {
        return _this3.renderCategoryListItem(childCategory, level + 1);
      })));
    }
  }, {
    key: "renderCategoryDropdown",
    value: function renderCategoryDropdown() {
      var _this4 = this;

      var instanceId = this.props.instanceId;
      var showHierarchy = this.props.attributes.showHierarchy;
      var parentId = showHierarchy ? 0 : null;
      var categories = this.getCategories(parentId);
      var selectId = "blocks-category-select-".concat(instanceId);
      return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["VisuallyHidden"], {
        as: "label",
        htmlFor: selectId
      }, Object(external_this_wp_i18n_["__"])('Categories')), Object(external_this_wp_element_["createElement"])("select", {
        id: selectId,
        className: "wp-block-categories__dropdown"
      }, categories.map(function (category) {
        return _this4.renderCategoryDropdownItem(category, 0);
      })));
    }
  }, {
    key: "renderCategoryDropdownItem",
    value: function renderCategoryDropdownItem(category, level) {
      var _this5 = this;

      var _this$props$attribute2 = this.props.attributes,
          showHierarchy = _this$props$attribute2.showHierarchy,
          showPostCounts = _this$props$attribute2.showPostCounts;
      var childCategories = this.getCategories(category.id);
      return [Object(external_this_wp_element_["createElement"])("option", {
        key: category.id
      }, Object(external_this_lodash_["times"])(level * 3, function () {
        return '\xa0';
      }), this.renderCategoryName(category), !!showPostCounts ? " (".concat(category.count, ")") : ''), showHierarchy && !!childCategories.length && childCategories.map(function (childCategory) {
        return _this5.renderCategoryDropdownItem(childCategory, level + 1);
      })];
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          attributes = _this$props4.attributes,
          isRequesting = _this$props4.isRequesting;
      var displayAsDropdown = attributes.displayAsDropdown,
          showHierarchy = attributes.showHierarchy,
          showPostCounts = attributes.showPostCounts;
      var inspectorControls = Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InspectorControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
        title: Object(external_this_wp_i18n_["__"])('Categories settings')
      }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
        label: Object(external_this_wp_i18n_["__"])('Display as dropdown'),
        checked: displayAsDropdown,
        onChange: this.toggleDisplayAsDropdown
      }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
        label: Object(external_this_wp_i18n_["__"])('Show hierarchy'),
        checked: showHierarchy,
        onChange: this.toggleShowHierarchy
      }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
        label: Object(external_this_wp_i18n_["__"])('Show post counts'),
        checked: showPostCounts,
        onChange: this.toggleShowPostCounts
      })));

      if (isRequesting) {
        return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, inspectorControls, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Placeholder"], {
          icon: library_pin,
          label: Object(external_this_wp_i18n_["__"])('Categories')
        }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Spinner"], null)));
      }

      return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, inspectorControls, Object(external_this_wp_element_["createElement"])("div", {
        className: this.props.className
      }, displayAsDropdown ? this.renderCategoryDropdown() : this.renderCategoryList()));
    }
  }]);

  return CategoriesEdit;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var categories_edit = (Object(external_this_wp_compose_["compose"])(Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select('core'),
      getEntityRecords = _select.getEntityRecords;

  var _select2 = select('core/data'),
      isResolving = _select2.isResolving;

  var query = {
    per_page: -1,
    hide_empty: true
  };
  return {
    categories: getEntityRecords('taxonomy', 'category', query),
    isRequesting: isResolving('core', 'getEntityRecords', ['taxonomy', 'category', query])
  };
}), external_this_wp_compose_["withInstanceId"])(edit_CategoriesEdit));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/categories/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */

var categories_metadata = {
  name: "core/categories",
  category: "widgets",
  attributes: {
    align: {
      type: "string",
      "enum": ["left", "center", "right", "wide", "full"]
    },
    className: {
      type: "string"
    },
    displayAsDropdown: {
      type: "boolean",
      "default": false
    },
    showHierarchy: {
      type: "boolean",
      "default": false
    },
    showPostCounts: {
      type: "boolean",
      "default": false
    }
  },
  supports: {
    align: true,
    html: false
  }
};

var categories_name = categories_metadata.name;

var categories_settings = {
  title: Object(external_this_wp_i18n_["__"])('Categories'),
  description: Object(external_this_wp_i18n_["__"])('Display a list of all categories.'),
  icon: library_category,
  example: {},
  edit: categories_edit
};

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/code.js
var code = __webpack_require__(297);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/code/edit.js


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


function CodeEdit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["__experimentalBlock"].pre, null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["PlainText"], {
    __experimentalVersion: 2,
    tagName: "code",
    value: attributes.content,
    onChange: function onChange(content) {
      return setAttributes({
        content: content
      });
    },
    placeholder: Object(external_this_wp_i18n_["__"])('Write code…'),
    "aria-label": Object(external_this_wp_i18n_["__"])('Code')
  }));
}

// EXTERNAL MODULE: external {"this":["wp","escapeHtml"]}
var external_this_wp_escapeHtml_ = __webpack_require__(79);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/code/utils.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Escapes ampersands, shortcodes, and links.
 *
 * @param {string} content The content of a code block.
 * @return {string} The given content with some characters escaped.
 */

function utils_escape(content) {
  return Object(external_this_lodash_["flow"])(external_this_wp_escapeHtml_["escapeEditableHTML"], escapeOpeningSquareBrackets, escapeProtocolInIsolatedUrls)(content || '');
}
/**
 * Returns the given content with all opening shortcode characters converted
 * into their HTML entity counterpart (i.e. [ => &#91;). For instance, a
 * shortcode like [embed] becomes &#91;embed]
 *
 * This function replicates the escaping of HTML tags, where a tag like
 * <strong> becomes &lt;strong>.
 *
 * @param {string}  content The content of a code block.
 * @return {string} The given content with its opening shortcode characters
 *                  converted into their HTML entity counterpart
 *                  (i.e. [ => &#91;)
 */

function escapeOpeningSquareBrackets(content) {
  return content.replace(/\[/g, '&#91;');
}
/**
 * Converts the first two forward slashes of any isolated URL into their HTML
 * counterparts (i.e. // => &#47;&#47;). For instance, https://youtube.com/watch?x
 * becomes https:&#47;&#47;youtube.com/watch?x.
 *
 * An isolated URL is a URL that sits in its own line, surrounded only by spacing
 * characters.
 *
 * See https://github.com/WordPress/wordpress-develop/blob/5.1.1/src/wp-includes/class-wp-embed.php#L403
 *
 * @param {string}  content The content of a code block.
 * @return {string} The given content with its ampersands converted into
 *                  their HTML entity counterpart (i.e. & => &amp;)
 */


function escapeProtocolInIsolatedUrls(content) {
  return content.replace(/^(\s*https?:)\/\/([^\s<>"]+\s*)$/m, '$1&#47;&#47;$2');
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/code/save.js


/**
 * Internal dependencies
 */

function code_save_save(_ref) {
  var attributes = _ref.attributes;
  return Object(external_this_wp_element_["createElement"])("pre", null, Object(external_this_wp_element_["createElement"])("code", null, utils_escape(attributes.content)));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/code/transforms.js
/**
 * WordPress dependencies
 */

var code_transforms_transforms = {
  from: [{
    type: 'enter',
    regExp: /^```$/,
    transform: function transform() {
      return Object(external_this_wp_blocks_["createBlock"])('core/code');
    }
  }, {
    type: 'block',
    blocks: ['core/html'],
    transform: function transform(_ref) {
      var content = _ref.content;
      return Object(external_this_wp_blocks_["createBlock"])('core/code', {
        content: content
      });
    }
  }, {
    type: 'raw',
    isMatch: function isMatch(node) {
      return node.nodeName === 'PRE' && node.children.length === 1 && node.firstChild.nodeName === 'CODE';
    },
    schema: {
      pre: {
        children: {
          code: {
            children: {
              '#text': {}
            }
          }
        }
      }
    }
  }]
};
/* harmony default export */ var code_transforms = (code_transforms_transforms);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/code/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


var code_metadata = {
  name: "core/code",
  category: "text",
  attributes: {
    content: {
      type: "string",
      source: "text",
      selector: "code"
    }
  },
  supports: {
    html: false,
    lightBlockWrapper: true
  }
};


var code_name = code_metadata.name;

var code_settings = {
  title: Object(external_this_wp_i18n_["__"])('Code'),
  description: Object(external_this_wp_i18n_["__"])('Display code snippets that respect your spacing and tabs.'),
  icon: code["a" /* default */],
  example: {
    attributes: {
      /* eslint-disable @wordpress/i18n-no-collapsible-whitespace */
      // translators: Preserve \n markers for line breaks
      content: Object(external_this_wp_i18n_["__"])('// A "block" is the abstract term used\n// to describe units of markup that\n// when composed together, form the\n// content or layout of a page.\nregisterBlockType( name, settings );')
      /* eslint-enable @wordpress/i18n-no-collapsible-whitespace */

    }
  },
  transforms: code_transforms,
  edit: CodeEdit,
  save: code_save_save
};

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/columns.js


/**
 * WordPress dependencies
 */

var columns_columns = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M19 6H6c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-4.1 1.5v10H10v-10h4.9zM5.5 17V8c0-.3.2-.5.5-.5h2.5v10H6c-.3 0-.5-.2-.5-.5zm14 0c0 .3-.2.5-.5.5h-2.6v-10H19c.3 0 .5.2.5.5v9z"
}));
/* harmony default export */ var library_columns = (columns_columns);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/columns/deprecated.js



function columns_deprecated_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function columns_deprecated_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { columns_deprecated_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { columns_deprecated_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */



/**
 * Given an HTML string for a deprecated columns inner block, returns the
 * column index to which the migrated inner block should be assigned. Returns
 * undefined if the inner block was not assigned to a column.
 *
 * @param {string} originalContent Deprecated Columns inner block HTML.
 *
 * @return {?number} Column to which inner block is to be assigned.
 */

function getDeprecatedLayoutColumn(originalContent) {
  var doc = getDeprecatedLayoutColumn.doc;

  if (!doc) {
    doc = document.implementation.createHTMLDocument('');
    getDeprecatedLayoutColumn.doc = doc;
  }

  var columnMatch;
  doc.body.innerHTML = originalContent;

  var _iterator = _createForOfIteratorHelper(doc.body.firstChild.classList),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var classListItem = _step.value;

      if (columnMatch = classListItem.match(/^layout-column-(\d+)$/)) {
        return Number(columnMatch[1]) - 1;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

var columns_deprecated_migrateCustomColors = function migrateCustomColors(attributes) {
  if (!attributes.customTextColor && !attributes.customBackgroundColor) {
    return attributes;
  }

  var style = {
    color: {}
  };

  if (attributes.customTextColor) {
    style.color.text = attributes.customTextColor;
  }

  if (attributes.customBackgroundColor) {
    style.color.background = attributes.customBackgroundColor;
  }

  return columns_deprecated_objectSpread({}, Object(external_this_lodash_["omit"])(attributes, ['customTextColor', 'customBackgroundColor']), {
    style: style
  });
};

/* harmony default export */ var columns_deprecated = ([{
  attributes: {
    verticalAlignment: {
      type: 'string'
    },
    backgroundColor: {
      type: 'string'
    },
    customBackgroundColor: {
      type: 'string'
    },
    customTextColor: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    }
  },
  migrate: columns_deprecated_migrateCustomColors,
  save: function save(_ref) {
    var _classnames;

    var attributes = _ref.attributes;
    var verticalAlignment = attributes.verticalAlignment,
        backgroundColor = attributes.backgroundColor,
        customBackgroundColor = attributes.customBackgroundColor,
        textColor = attributes.textColor,
        customTextColor = attributes.customTextColor;
    var backgroundClass = Object(external_this_wp_blockEditor_["getColorClassName"])('background-color', backgroundColor);
    var textClass = Object(external_this_wp_blockEditor_["getColorClassName"])('color', textColor);
    var className = classnames_default()((_classnames = {
      'has-background': backgroundColor || customBackgroundColor,
      'has-text-color': textColor || customTextColor
    }, Object(defineProperty["a" /* default */])(_classnames, backgroundClass, backgroundClass), Object(defineProperty["a" /* default */])(_classnames, textClass, textClass), Object(defineProperty["a" /* default */])(_classnames, "are-vertically-aligned-".concat(verticalAlignment), verticalAlignment), _classnames));
    var style = {
      backgroundColor: backgroundClass ? undefined : customBackgroundColor,
      color: textClass ? undefined : customTextColor
    };
    return Object(external_this_wp_element_["createElement"])("div", {
      className: className ? className : undefined,
      style: style
    }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InnerBlocks"].Content, null));
  }
}, {
  attributes: {
    columns: {
      type: 'number',
      default: 2
    }
  },
  isEligible: function isEligible(attributes, innerBlocks) {
    // Since isEligible is called on every valid instance of the
    // Columns block and a deprecation is the unlikely case due to
    // its subsequent migration, optimize for the `false` condition
    // by performing a naive, inaccurate pass at inner blocks.
    var isFastPassEligible = innerBlocks.some(function (innerBlock) {
      return /layout-column-\d+/.test(innerBlock.originalContent);
    });

    if (!isFastPassEligible) {
      return false;
    } // Only if the fast pass is considered eligible is the more
    // accurate, durable, slower condition performed.


    return innerBlocks.some(function (innerBlock) {
      return getDeprecatedLayoutColumn(innerBlock.originalContent) !== undefined;
    });
  },
  migrate: function migrate(attributes, innerBlocks) {
    var columns = innerBlocks.reduce(function (accumulator, innerBlock) {
      var originalContent = innerBlock.originalContent;
      var columnIndex = getDeprecatedLayoutColumn(originalContent);

      if (columnIndex === undefined) {
        columnIndex = 0;
      }

      if (!accumulator[columnIndex]) {
        accumulator[columnIndex] = [];
      }

      accumulator[columnIndex].push(innerBlock);
      return accumulator;
    }, []);
    var migratedInnerBlocks = columns.map(function (columnBlocks) {
      return Object(external_this_wp_blocks_["createBlock"])('core/column', {}, columnBlocks);
    });
    return [Object(external_this_lodash_["omit"])(attributes, ['columns']), migratedInnerBlocks];
  },
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    var columns = attributes.columns;
    return Object(external_this_wp_element_["createElement"])("div", {
      className: "has-".concat(columns, "-columns")
    }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InnerBlocks"].Content, null));
  }
}, {
  attributes: {
    columns: {
      type: 'number',
      default: 2
    }
  },
  migrate: function migrate(attributes, innerBlocks) {
    attributes = Object(external_this_lodash_["omit"])(attributes, ['columns']);
    return [attributes, innerBlocks];
  },
  save: function save(_ref3) {
    var attributes = _ref3.attributes;
    var verticalAlignment = attributes.verticalAlignment,
        columns = attributes.columns;
    var wrapperClasses = classnames_default()("has-".concat(columns, "-columns"), Object(defineProperty["a" /* default */])({}, "are-vertically-aligned-".concat(verticalAlignment), verticalAlignment));
    return Object(external_this_wp_element_["createElement"])("div", {
      className: wrapperClasses
    }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InnerBlocks"].Content, null));
  }
}]);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/columns/utils.js


/**
 * External dependencies
 */

/**
 * Returns a column width attribute value rounded to standard precision.
 * Returns `undefined` if the value is not a valid finite number.
 *
 * @param {?number} value Raw value.
 *
 * @return {number} Value rounded to standard precision.
 */

var toWidthPrecision = function toWidthPrecision(value) {
  return Number.isFinite(value) ? parseFloat(value.toFixed(2)) : undefined;
};
/**
 * Returns an effective width for a given block. An effective width is equal to
 * its attribute value if set, or a computed value assuming equal distribution.
 *
 * @param {WPBlock} block           Block object.
 * @param {number}  totalBlockCount Total number of blocks in Columns.
 *
 * @return {number} Effective column width.
 */

function getEffectiveColumnWidth(block, totalBlockCount) {
  var _block$attributes$wid = block.attributes.width,
      width = _block$attributes$wid === void 0 ? 100 / totalBlockCount : _block$attributes$wid;
  return toWidthPrecision(width);
}
/**
 * Returns the total width occupied by the given set of column blocks.
 *
 * @param {WPBlock[]} blocks          Block objects.
 * @param {?number}   totalBlockCount Total number of blocks in Columns.
 *                                    Defaults to number of blocks passed.
 *
 * @return {number} Total width occupied by blocks.
 */

function getTotalColumnsWidth(blocks) {
  var totalBlockCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : blocks.length;
  return Object(external_this_lodash_["sumBy"])(blocks, function (block) {
    return getEffectiveColumnWidth(block, totalBlockCount);
  });
}
/**
 * Returns an object of `clientId` → `width` of effective column widths.
 *
 * @param {WPBlock[]} blocks          Block objects.
 * @param {?number}   totalBlockCount Total number of blocks in Columns.
 *                                    Defaults to number of blocks passed.
 *
 * @return {Object<string,number>} Column widths.
 */

function getColumnWidths(blocks) {
  var totalBlockCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : blocks.length;
  return blocks.reduce(function (accumulator, block) {
    var width = getEffectiveColumnWidth(block, totalBlockCount);
    return Object.assign(accumulator, Object(defineProperty["a" /* default */])({}, block.clientId, width));
  }, {});
}
/**
 * Returns an object of `clientId` → `width` of column widths as redistributed
 * proportional to their current widths, constrained or expanded to fit within
 * the given available width.
 *
 * @param {WPBlock[]} blocks          Block objects.
 * @param {number}    availableWidth  Maximum width to fit within.
 * @param {?number}   totalBlockCount Total number of blocks in Columns.
 *                                    Defaults to number of blocks passed.
 *
 * @return {Object<string,number>} Redistributed column widths.
 */

function getRedistributedColumnWidths(blocks, availableWidth) {
  var totalBlockCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : blocks.length;
  var totalWidth = getTotalColumnsWidth(blocks, totalBlockCount);
  var difference = availableWidth - totalWidth;
  var adjustment = difference / blocks.length;
  return Object(external_this_lodash_["mapValues"])(getColumnWidths(blocks, totalBlockCount), function (width) {
    return toWidthPrecision(width + adjustment);
  });
}
/**
 * Returns true if column blocks within the provided set are assigned with
 * explicit widths, or false otherwise.
 *
 * @param {WPBlock[]} blocks Block objects.
 *
 * @return {boolean} Whether columns have explicit widths.
 */

function hasExplicitColumnWidths(blocks) {
  return blocks.every(function (block) {
    return Number.isFinite(block.attributes.width);
  });
}
/**
 * Returns a copy of the given set of blocks with new widths assigned from the
 * provided object of redistributed column widths.
 *
 * @param {WPBlock[]}             blocks Block objects.
 * @param {Object<string,number>} widths Redistributed column widths.
 *
 * @return {WPBlock[]} blocks Mapped block objects.
 */

function getMappedColumnWidths(blocks, widths) {
  return blocks.map(function (block) {
    return Object(external_this_lodash_["merge"])({}, block, {
      attributes: {
        width: widths[block.clientId]
      }
    });
  });
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/columns/edit.js





/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */


/**
 * Allowed blocks constant is passed to InnerBlocks precisely as specified here.
 * The contents of the array should never change.
 * The array should contain the name of each block that is allowed.
 * In columns block, the only block we allow is 'core/column'.
 *
 * @constant
 * @type {string[]}
 */

var edit_ALLOWED_BLOCKS = ['core/column'];

function ColumnsEditContainer(_ref) {
  var attributes = _ref.attributes,
      updateAlignment = _ref.updateAlignment,
      updateColumns = _ref.updateColumns,
      clientId = _ref.clientId;
  var verticalAlignment = attributes.verticalAlignment;

  var _useSelect = Object(external_this_wp_data_["useSelect"])(function (select) {
    return {
      count: select('core/block-editor').getBlockCount(clientId)
    };
  }, [clientId]),
      count = _useSelect.count;

  var classes = classnames_default()(Object(defineProperty["a" /* default */])({}, "are-vertically-aligned-".concat(verticalAlignment), verticalAlignment));
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockVerticalAlignmentToolbar"], {
    onChange: updateAlignment,
    value: verticalAlignment
  })), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InspectorControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["RangeControl"], {
    label: Object(external_this_wp_i18n_["__"])('Columns'),
    value: count,
    onChange: function onChange(value) {
      return updateColumns(count, value);
    },
    min: 2,
    max: Math.max(6, count)
  }), count > 6 && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Notice"], {
    status: "warning",
    isDismissible: false
  }, Object(external_this_wp_i18n_["__"])('This column count exceeds the recommended amount and may cause visual breakage.')))), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InnerBlocks"], {
    allowedBlocks: edit_ALLOWED_BLOCKS,
    __experimentalMoverDirection: "horizontal",
    __experimentalTagName: external_this_wp_blockEditor_["__experimentalBlock"].div,
    __experimentalPassedProps: {
      className: classes
    },
    renderAppender: false
  }));
}

var ColumnsEditContainerWrapper = Object(external_this_wp_data_["withDispatch"])(function (dispatch, ownProps, registry) {
  return {
    /**
     * Update all child Column blocks with a new vertical alignment setting
     * based on whatever alignment is passed in. This allows change to parent
     * to overide anything set on a individual column basis.
     *
     * @param {string} verticalAlignment the vertical alignment setting
     */
    updateAlignment: function updateAlignment(verticalAlignment) {
      var clientId = ownProps.clientId,
          setAttributes = ownProps.setAttributes;

      var _dispatch = dispatch('core/block-editor'),
          updateBlockAttributes = _dispatch.updateBlockAttributes;

      var _registry$select = registry.select('core/block-editor'),
          getBlockOrder = _registry$select.getBlockOrder; // Update own alignment.


      setAttributes({
        verticalAlignment: verticalAlignment
      }); // Update all child Column Blocks to match

      var innerBlockClientIds = getBlockOrder(clientId);
      innerBlockClientIds.forEach(function (innerBlockClientId) {
        updateBlockAttributes(innerBlockClientId, {
          verticalAlignment: verticalAlignment
        });
      });
    },

    /**
     * Updates the column count, including necessary revisions to child Column
     * blocks to grant required or redistribute available space.
     *
     * @param {number} previousColumns Previous column count.
     * @param {number} newColumns      New column count.
     */
    updateColumns: function updateColumns(previousColumns, newColumns) {
      var clientId = ownProps.clientId;

      var _dispatch2 = dispatch('core/block-editor'),
          replaceInnerBlocks = _dispatch2.replaceInnerBlocks;

      var _registry$select2 = registry.select('core/block-editor'),
          getBlocks = _registry$select2.getBlocks;

      var innerBlocks = getBlocks(clientId);
      var hasExplicitWidths = hasExplicitColumnWidths(innerBlocks); // Redistribute available width for existing inner blocks.

      var isAddingColumn = newColumns > previousColumns;

      if (isAddingColumn && hasExplicitWidths) {
        // If adding a new column, assign width to the new column equal to
        // as if it were `1 / columns` of the total available space.
        var newColumnWidth = toWidthPrecision(100 / newColumns); // Redistribute in consideration of pending block insertion as
        // constraining the available working width.

        var widths = getRedistributedColumnWidths(innerBlocks, 100 - newColumnWidth);
        innerBlocks = [].concat(Object(toConsumableArray["a" /* default */])(getMappedColumnWidths(innerBlocks, widths)), Object(toConsumableArray["a" /* default */])(Object(external_this_lodash_["times"])(newColumns - previousColumns, function () {
          return Object(external_this_wp_blocks_["createBlock"])('core/column', {
            width: newColumnWidth
          });
        })));
      } else if (isAddingColumn) {
        innerBlocks = [].concat(Object(toConsumableArray["a" /* default */])(innerBlocks), Object(toConsumableArray["a" /* default */])(Object(external_this_lodash_["times"])(newColumns - previousColumns, function () {
          return Object(external_this_wp_blocks_["createBlock"])('core/column');
        })));
      } else {
        // The removed column will be the last of the inner blocks.
        innerBlocks = Object(external_this_lodash_["dropRight"])(innerBlocks, previousColumns - newColumns);

        if (hasExplicitWidths) {
          // Redistribute as if block is already removed.
          var _widths = getRedistributedColumnWidths(innerBlocks, 100);

          innerBlocks = getMappedColumnWidths(innerBlocks, _widths);
        }
      }

      replaceInnerBlocks(clientId, innerBlocks, false);
    }
  };
})(ColumnsEditContainer);

var edit_createBlocksFromInnerBlocksTemplate = function createBlocksFromInnerBlocksTemplate(innerBlocksTemplate) {
  return Object(external_this_lodash_["map"])(innerBlocksTemplate, function (_ref2) {
    var _ref3 = Object(slicedToArray["a" /* default */])(_ref2, 3),
        name = _ref3[0],
        attributes = _ref3[1],
        _ref3$ = _ref3[2],
        innerBlocks = _ref3$ === void 0 ? [] : _ref3$;

    return Object(external_this_wp_blocks_["createBlock"])(name, attributes, createBlocksFromInnerBlocksTemplate(innerBlocks));
  });
};

var edit_ColumnsEdit = function ColumnsEdit(props) {
  var clientId = props.clientId,
      name = props.name;

  var _useSelect2 = Object(external_this_wp_data_["useSelect"])(function (select) {
    var _select = select('core/blocks'),
        getBlockVariations = _select.getBlockVariations,
        getBlockType = _select.getBlockType,
        getDefaultBlockVariation = _select.getDefaultBlockVariation;

    return {
      blockType: getBlockType(name),
      defaultVariation: getDefaultBlockVariation(name, 'block'),
      hasInnerBlocks: select('core/block-editor').getBlocks(clientId).length > 0,
      variations: getBlockVariations(name, 'block')
    };
  }, [clientId, name]),
      blockType = _useSelect2.blockType,
      defaultVariation = _useSelect2.defaultVariation,
      hasInnerBlocks = _useSelect2.hasInnerBlocks,
      variations = _useSelect2.variations;

  var _useDispatch = Object(external_this_wp_data_["useDispatch"])('core/block-editor'),
      replaceInnerBlocks = _useDispatch.replaceInnerBlocks;

  if (hasInnerBlocks) {
    return Object(external_this_wp_element_["createElement"])(ColumnsEditContainerWrapper, props);
  }

  return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["__experimentalBlock"].div, null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["__experimentalBlockVariationPicker"], {
    icon: Object(external_this_lodash_["get"])(blockType, ['icon', 'src']),
    label: Object(external_this_lodash_["get"])(blockType, ['title']),
    variations: variations,
    onSelect: function onSelect() {
      var nextVariation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultVariation;

      if (nextVariation.attributes) {
        props.setAttributes(nextVariation.attributes);
      }

      if (nextVariation.innerBlocks) {
        replaceInnerBlocks(props.clientId, edit_createBlocksFromInnerBlocksTemplate(nextVariation.innerBlocks));
      }
    },
    allowSkip: true
  }));
};

/* harmony default export */ var columns_edit = (edit_ColumnsEdit);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/columns/save.js



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


function columns_save_save(_ref) {
  var attributes = _ref.attributes;
  var verticalAlignment = attributes.verticalAlignment;
  var className = classnames_default()(Object(defineProperty["a" /* default */])({}, "are-vertically-aligned-".concat(verticalAlignment), verticalAlignment));
  return Object(external_this_wp_element_["createElement"])("div", {
    className: className ? className : undefined
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InnerBlocks"].Content, null));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/columns/variations.js


/**
 * WordPress dependencies
 */


/** @typedef {import('@wordpress/blocks').WPBlockVariation} WPBlockVariation */

/**
 * Template option choices for predefined columns layouts.
 *
 * @type {WPBlockVariation[]}
 */

var variations_variations = [{
  name: 'two-columns-equal',
  title: Object(external_this_wp_i18n_["__"])('50 / 50'),
  description: Object(external_this_wp_i18n_["__"])('Two columns; equal split'),
  icon: Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H25V34H39ZM23 34H9V14H23V34Z"
  })),
  isDefault: true,
  innerBlocks: [['core/column'], ['core/column']],
  scope: ['block']
}, {
  name: 'two-columns-one-third-two-thirds',
  title: Object(external_this_wp_i18n_["__"])('30 / 70'),
  description: Object(external_this_wp_i18n_["__"])('Two columns; one-third, two-thirds split'),
  icon: Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H20V34H39ZM18 34H9V14H18V34Z"
  })),
  innerBlocks: [['core/column', {
    width: 33.33
  }], ['core/column', {
    width: 66.66
  }]],
  scope: ['block']
}, {
  name: 'two-columns-two-thirds-one-third',
  title: Object(external_this_wp_i18n_["__"])('70 / 30'),
  description: Object(external_this_wp_i18n_["__"])('Two columns; two-thirds, one-third split'),
  icon: Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H30V34H39ZM28 34H9V14H28V34Z"
  })),
  innerBlocks: [['core/column', {
    width: 66.66
  }], ['core/column', {
    width: 33.33
  }]],
  scope: ['block']
}, {
  name: 'three-columns-equal',
  title: Object(external_this_wp_i18n_["__"])('33 / 33 / 33'),
  description: Object(external_this_wp_i18n_["__"])('Three columns; equal split'),
  icon: Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
    fillRule: "evenodd",
    d: "M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM28.5 34h-9V14h9v20zm2 0V14H39v20h-8.5zm-13 0H9V14h8.5v20z"
  })),
  innerBlocks: [['core/column'], ['core/column'], ['core/column']],
  scope: ['block']
}, {
  name: 'three-columns-wider-center',
  title: Object(external_this_wp_i18n_["__"])('25 / 50 / 25'),
  description: Object(external_this_wp_i18n_["__"])('Three columns; wide center column'),
  icon: Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
    fillRule: "evenodd",
    d: "M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM31 34H17V14h14v20zm2 0V14h6v20h-6zm-18 0H9V14h6v20z"
  })),
  innerBlocks: [['core/column', {
    width: 25
  }], ['core/column', {
    width: 50
  }], ['core/column', {
    width: 25
  }]],
  scope: ['block']
}];
/* harmony default export */ var columns_variations = (variations_variations);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/columns/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



var columns_metadata = {
  name: "core/columns",
  category: "design",
  attributes: {
    verticalAlignment: {
      type: "string"
    }
  },
  supports: {
    align: ["wide", "full"],
    html: false,
    lightBlockWrapper: true,
    __experimentalColor: {
      gradients: true,
      linkColor: true
    }
  }
};


var columns_name = columns_metadata.name;

var columns_settings = {
  title: Object(external_this_wp_i18n_["__"])('Columns'),
  icon: library_columns,
  description: Object(external_this_wp_i18n_["__"])('Add a block that displays content in multiple columns, then add whatever content blocks you’d like.'),
  variations: columns_variations,
  example: {
    innerBlocks: [{
      name: 'core/column',
      innerBlocks: [{
        name: 'core/paragraph',
        attributes: {
          /* translators: example text. */
          content: Object(external_this_wp_i18n_["__"])('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et eros eu felis.')
        }
      }, {
        name: 'core/image',
        attributes: {
          url: 'https://s.w.org/images/core/5.3/Windbuchencom.jpg'
        }
      }, {
        name: 'core/paragraph',
        attributes: {
          /* translators: example text. */
          content: Object(external_this_wp_i18n_["__"])('Suspendisse commodo neque lacus, a dictum orci interdum et.')
        }
      }]
    }, {
      name: 'core/column',
      innerBlocks: [{
        name: 'core/paragraph',
        attributes: {
          /* translators: example text. */
          content: Object(external_this_wp_i18n_["__"])('Etiam et egestas lorem. Vivamus sagittis sit amet dolor quis lobortis. Integer sed fermentum arcu, id vulputate lacus. Etiam fermentum sem eu quam hendrerit.')
        }
      }, {
        name: 'core/paragraph',
        attributes: {
          /* translators: example text. */
          content: Object(external_this_wp_i18n_["__"])('Nam risus massa, ullamcorper consectetur eros fermentum, porta aliquet ligula. Sed vel mauris nec enim.')
        }
      }]
    }]
  },
  deprecated: columns_deprecated,
  edit: columns_edit,
  save: columns_save_save
};

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/column.js


/**
 * WordPress dependencies
 */

var column = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M19 6H6c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM6 17.5c-.3 0-.5-.2-.5-.5V8c0-.3.2-.5.5-.5h3v10H6zm13.5-.5c0 .3-.2.5-.5.5h-3v-10h3c.3 0 .5.2.5.5v9z"
}));
/* harmony default export */ var library_column = (column);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/column/edit.js



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






function ColumnEdit(_ref) {
  var _ref$attributes = _ref.attributes,
      verticalAlignment = _ref$attributes.verticalAlignment,
      width = _ref$attributes.width,
      setAttributes = _ref.setAttributes,
      clientId = _ref.clientId;
  var classes = classnames_default()('block-core-columns', Object(defineProperty["a" /* default */])({}, "is-vertically-aligned-".concat(verticalAlignment), verticalAlignment));

  var _useSelect = Object(external_this_wp_data_["useSelect"])(function (select) {
    var _select = select('core/block-editor'),
        getBlockOrder = _select.getBlockOrder,
        getBlockRootClientId = _select.getBlockRootClientId;

    return {
      hasChildBlocks: getBlockOrder(clientId).length > 0,
      rootClientId: getBlockRootClientId(clientId)
    };
  }, [clientId]),
      hasChildBlocks = _useSelect.hasChildBlocks,
      rootClientId = _useSelect.rootClientId;

  var _useDispatch = Object(external_this_wp_data_["useDispatch"])('core/block-editor'),
      updateBlockAttributes = _useDispatch.updateBlockAttributes;

  var updateAlignment = function updateAlignment(value) {
    // Update own alignment.
    setAttributes({
      verticalAlignment: value
    }); // Reset parent Columns block.

    updateBlockAttributes(rootClientId, {
      verticalAlignment: null
    });
  };

  var hasWidth = Number.isFinite(width);
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockVerticalAlignmentToolbar"], {
    onChange: updateAlignment,
    value: verticalAlignment
  })), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InspectorControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
    title: Object(external_this_wp_i18n_["__"])('Column settings')
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["RangeControl"], {
    label: Object(external_this_wp_i18n_["__"])('Percentage width'),
    value: width || '',
    onChange: function onChange(nextWidth) {
      setAttributes({
        width: nextWidth
      });
    },
    min: 0,
    max: 100,
    step: 0.1,
    required: true,
    allowReset: true,
    placeholder: width === undefined ? Object(external_this_wp_i18n_["__"])('Auto') : undefined
  }))), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InnerBlocks"], {
    templateLock: false,
    renderAppender: hasChildBlocks ? undefined : function () {
      return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InnerBlocks"].ButtonBlockAppender, null);
    },
    __experimentalTagName: external_this_wp_blockEditor_["__experimentalBlock"].div,
    __experimentalPassedProps: {
      className: classes,
      style: hasWidth ? {
        flexBasis: width + '%'
      } : undefined
    }
  }));
}

/* harmony default export */ var column_edit = (ColumnEdit);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/column/save.js



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


function column_save_save(_ref) {
  var attributes = _ref.attributes;
  var verticalAlignment = attributes.verticalAlignment,
      width = attributes.width;
  var wrapperClasses = classnames_default()(Object(defineProperty["a" /* default */])({}, "is-vertically-aligned-".concat(verticalAlignment), verticalAlignment));
  var style;

  if (Number.isFinite(width)) {
    style = {
      flexBasis: width + '%'
    };
  }

  return Object(external_this_wp_element_["createElement"])("div", {
    className: wrapperClasses,
    style: style
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InnerBlocks"].Content, null));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/column/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


var column_metadata = {
  name: "core/column",
  category: "text",
  parent: ["core/columns"],
  attributes: {
    verticalAlignment: {
      type: "string"
    },
    width: {
      type: "number",
      min: 0,
      max: 100
    }
  },
  supports: {
    reusable: false,
    html: false,
    lightBlockWrapper: true
  }
};

var column_name = column_metadata.name;

var column_settings = {
  title: Object(external_this_wp_i18n_["__"])('Column'),
  icon: library_column,
  description: Object(external_this_wp_i18n_["__"])('A single column within a columns block.'),
  edit: column_edit,
  save: column_save_save
};

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/cover.js


/**
 * WordPress dependencies
 */

var cover = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M18.7 3H5.3C4 3 3 4 3 5.3v13.4C3 20 4 21 5.3 21h13.4c1.3 0 2.3-1 2.3-2.3V5.3C21 4 20 3 18.7 3zm.8 15.7c0 .4-.4.8-.8.8H5.3c-.4 0-.8-.4-.8-.8V5.3c0-.4.4-.8.8-.8h6.2v8.9l2.5-3.1 2.5 3.1V4.5h2.2c.4 0 .8.4.8.8v13.4z"
}));
/* harmony default export */ var library_cover = (cover);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/cover/shared.js


function shared_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function shared_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { shared_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { shared_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var POSITION_CLASSNAMES = {
  'top left': 'is-position-top-left',
  'top center': 'is-position-top-center',
  'top right': 'is-position-top-right',
  'center left': 'is-position-center-left',
  'center center': 'is-position-center-center',
  center: 'is-position-center-center',
  'center right': 'is-position-center-right',
  'bottom left': 'is-position-bottom-left',
  'bottom center': 'is-position-bottom-center',
  'bottom right': 'is-position-bottom-right'
};
var IMAGE_BACKGROUND_TYPE = 'image';
var VIDEO_BACKGROUND_TYPE = 'video';
var COVER_MIN_HEIGHT = 50;
function backgroundImageStyles(url) {
  return url ? {
    backgroundImage: "url(".concat(url, ")")
  } : {};
}
var CSS_UNITS = [{
  value: 'px',
  label: 'px',
  default: 430
}, {
  value: 'em',
  label: 'em',
  default: 20
}, {
  value: 'rem',
  label: 'rem',
  default: 20
}, {
  value: 'vw',
  label: 'vw',
  default: 20
}, {
  value: 'vh',
  label: 'vh',
  default: 50
}];
function dimRatioToClass(ratio) {
  return ratio === 0 || ratio === 50 || !ratio ? null : 'has-background-dim-' + 10 * Math.round(ratio / 10);
}
function attributesFromMedia(setAttributes) {
  return function (media) {
    if (!media || !media.url) {
      setAttributes({
        url: undefined,
        id: undefined
      });
      return;
    }

    var mediaType; // for media selections originated from a file upload.

    if (media.media_type) {
      if (media.media_type === IMAGE_BACKGROUND_TYPE) {
        mediaType = IMAGE_BACKGROUND_TYPE;
      } else {
        // only images and videos are accepted so if the media_type is not an image we can assume it is a video.
        // Videos contain the media type of 'file' in the object returned from the rest api.
        mediaType = VIDEO_BACKGROUND_TYPE;
      }
    } else {
      // for media selections originated from existing files in the media library.
      if (media.type !== IMAGE_BACKGROUND_TYPE && media.type !== VIDEO_BACKGROUND_TYPE) {
        return;
      }

      mediaType = media.type;
    }

    setAttributes(shared_objectSpread({
      url: media.url,
      id: media.id,
      backgroundType: mediaType
    }, mediaType === VIDEO_BACKGROUND_TYPE ? {
      focalPoint: undefined,
      hasParallax: undefined
    } : {}));
  };
}
function getPositionClassName(contentPosition) {
  if (contentPosition === undefined) return '';
  return POSITION_CLASSNAMES[contentPosition];
}
function isContentPositionCenter(contentPosition) {
  return !contentPosition || contentPosition === 'center center' || contentPosition === 'center';
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/cover/deprecated.js



function cover_deprecated_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function cover_deprecated_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { cover_deprecated_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { cover_deprecated_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


var cover_deprecated_blockAttributes = {
  url: {
    type: 'string'
  },
  id: {
    type: 'number'
  },
  hasParallax: {
    type: 'boolean',
    default: false
  },
  dimRatio: {
    type: 'number',
    default: 50
  },
  overlayColor: {
    type: 'string'
  },
  customOverlayColor: {
    type: 'string'
  },
  backgroundType: {
    type: 'string',
    default: 'image'
  },
  focalPoint: {
    type: 'object'
  }
};
var cover_deprecated_deprecated = [{
  attributes: cover_deprecated_objectSpread({}, cover_deprecated_blockAttributes, {
    title: {
      type: 'string',
      source: 'html',
      selector: 'p'
    },
    contentAlign: {
      type: 'string',
      default: 'center'
    },
    minHeight: {
      type: 'number'
    },
    gradient: {
      type: 'string'
    },
    customGradient: {
      type: 'string'
    }
  }),
  save: function save(_ref) {
    var attributes = _ref.attributes;
    var backgroundType = attributes.backgroundType,
        gradient = attributes.gradient,
        customGradient = attributes.customGradient,
        customOverlayColor = attributes.customOverlayColor,
        dimRatio = attributes.dimRatio,
        focalPoint = attributes.focalPoint,
        hasParallax = attributes.hasParallax,
        overlayColor = attributes.overlayColor,
        url = attributes.url,
        minHeight = attributes.minHeight;
    var overlayColorClass = Object(external_this_wp_blockEditor_["getColorClassName"])('background-color', overlayColor);

    var gradientClass = Object(external_this_wp_blockEditor_["__experimentalGetGradientClass"])(gradient);

    var style = backgroundType === IMAGE_BACKGROUND_TYPE ? backgroundImageStyles(url) : {};

    if (!overlayColorClass) {
      style.backgroundColor = customOverlayColor;
    }

    if (focalPoint && !hasParallax) {
      style.backgroundPosition = "".concat(Math.round(focalPoint.x * 100), "% ").concat(Math.round(focalPoint.y * 100), "%");
    }

    if (customGradient && !url) {
      style.background = customGradient;
    }

    style.minHeight = minHeight || undefined;
    var classes = classnames_default()(dimRatioToClass(dimRatio), overlayColorClass, Object(defineProperty["a" /* default */])({
      'has-background-dim': dimRatio !== 0,
      'has-parallax': hasParallax,
      'has-background-gradient': customGradient
    }, gradientClass, !url && gradientClass));
    return Object(external_this_wp_element_["createElement"])("div", {
      className: classes,
      style: style
    }, url && (gradient || customGradient) && dimRatio !== 0 && Object(external_this_wp_element_["createElement"])("span", {
      "aria-hidden": "true",
      className: classnames_default()('wp-block-cover__gradient-background', gradientClass),
      style: customGradient ? {
        background: customGradient
      } : undefined
    }), VIDEO_BACKGROUND_TYPE === backgroundType && url && Object(external_this_wp_element_["createElement"])("video", {
      className: "wp-block-cover__video-background",
      autoPlay: true,
      muted: true,
      loop: true,
      src: url
    }), Object(external_this_wp_element_["createElement"])("div", {
      className: "wp-block-cover__inner-container"
    }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InnerBlocks"].Content, null)));
  }
}, {
  attributes: cover_deprecated_objectSpread({}, cover_deprecated_blockAttributes, {
    title: {
      type: 'string',
      source: 'html',
      selector: 'p'
    },
    contentAlign: {
      type: 'string',
      default: 'center'
    },
    minHeight: {
      type: 'number'
    },
    gradient: {
      type: 'string'
    },
    customGradient: {
      type: 'string'
    }
  }),
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    var backgroundType = attributes.backgroundType,
        gradient = attributes.gradient,
        customGradient = attributes.customGradient,
        customOverlayColor = attributes.customOverlayColor,
        dimRatio = attributes.dimRatio,
        focalPoint = attributes.focalPoint,
        hasParallax = attributes.hasParallax,
        overlayColor = attributes.overlayColor,
        url = attributes.url,
        minHeight = attributes.minHeight;
    var overlayColorClass = Object(external_this_wp_blockEditor_["getColorClassName"])('background-color', overlayColor);

    var gradientClass = Object(external_this_wp_blockEditor_["__experimentalGetGradientClass"])(gradient);

    var style = backgroundType === IMAGE_BACKGROUND_TYPE ? backgroundImageStyles(url) : {};

    if (!overlayColorClass) {
      style.backgroundColor = customOverlayColor;
    }

    if (focalPoint && !hasParallax) {
      style.backgroundPosition = "".concat(focalPoint.x * 100, "% ").concat(focalPoint.y * 100, "%");
    }

    if (customGradient && !url) {
      style.background = customGradient;
    }

    style.minHeight = minHeight || undefined;
    var classes = classnames_default()(dimRatioToClass(dimRatio), overlayColorClass, Object(defineProperty["a" /* default */])({
      'has-background-dim': dimRatio !== 0,
      'has-parallax': hasParallax,
      'has-background-gradient': customGradient
    }, gradientClass, !url && gradientClass));
    return Object(external_this_wp_element_["createElement"])("div", {
      className: classes,
      style: style
    }, url && (gradient || customGradient) && dimRatio !== 0 && Object(external_this_wp_element_["createElement"])("span", {
      "aria-hidden": "true",
      className: classnames_default()('wp-block-cover__gradient-background', gradientClass),
      style: customGradient ? {
        background: customGradient
      } : undefined
    }), VIDEO_BACKGROUND_TYPE === backgroundType && url && Object(external_this_wp_element_["createElement"])("video", {
      className: "wp-block-cover__video-background",
      autoPlay: true,
      muted: true,
      loop: true,
      src: url
    }), Object(external_this_wp_element_["createElement"])("div", {
      className: "wp-block-cover__inner-container"
    }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InnerBlocks"].Content, null)));
  }
}, {
  attributes: cover_deprecated_objectSpread({}, cover_deprecated_blockAttributes, {
    title: {
      type: 'string',
      source: 'html',
      selector: 'p'
    },
    contentAlign: {
      type: 'string',
      default: 'center'
    }
  }),
  supports: {
    align: true
  },
  save: function save(_ref3) {
    var attributes = _ref3.attributes;
    var backgroundType = attributes.backgroundType,
        contentAlign = attributes.contentAlign,
        customOverlayColor = attributes.customOverlayColor,
        dimRatio = attributes.dimRatio,
        focalPoint = attributes.focalPoint,
        hasParallax = attributes.hasParallax,
        overlayColor = attributes.overlayColor,
        title = attributes.title,
        url = attributes.url;
    var overlayColorClass = Object(external_this_wp_blockEditor_["getColorClassName"])('background-color', overlayColor);
    var style = backgroundType === IMAGE_BACKGROUND_TYPE ? backgroundImageStyles(url) : {};

    if (!overlayColorClass) {
      style.backgroundColor = customOverlayColor;
    }

    if (focalPoint && !hasParallax) {
      style.backgroundPosition = "".concat(focalPoint.x * 100, "% ").concat(focalPoint.y * 100, "%");
    }

    var classes = classnames_default()(dimRatioToClass(dimRatio), overlayColorClass, Object(defineProperty["a" /* default */])({
      'has-background-dim': dimRatio !== 0,
      'has-parallax': hasParallax
    }, "has-".concat(contentAlign, "-content"), contentAlign !== 'center'));
    return Object(external_this_wp_element_["createElement"])("div", {
      className: classes,
      style: style
    }, VIDEO_BACKGROUND_TYPE === backgroundType && url && Object(external_this_wp_element_["createElement"])("video", {
      className: "wp-block-cover__video-background",
      autoPlay: true,
      muted: true,
      loop: true,
      src: url
    }), !external_this_wp_blockEditor_["RichText"].isEmpty(title) && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      tagName: "p",
      className: "wp-block-cover-text",
      value: title
    }));
  },
  migrate: function migrate(attributes) {
    return [Object(external_this_lodash_["omit"])(attributes, ['title', 'contentAlign']), [Object(external_this_wp_blocks_["createBlock"])('core/paragraph', {
      content: attributes.title,
      align: attributes.contentAlign,
      fontSize: 'large',
      placeholder: Object(external_this_wp_i18n_["__"])('Write title…')
    })]];
  }
}, {
  attributes: cover_deprecated_objectSpread({}, cover_deprecated_blockAttributes, {
    title: {
      type: 'string',
      source: 'html',
      selector: 'p'
    },
    contentAlign: {
      type: 'string',
      default: 'center'
    },
    align: {
      type: 'string'
    }
  }),
  supports: {
    className: false
  },
  save: function save(_ref4) {
    var attributes = _ref4.attributes;
    var url = attributes.url,
        title = attributes.title,
        hasParallax = attributes.hasParallax,
        dimRatio = attributes.dimRatio,
        align = attributes.align,
        contentAlign = attributes.contentAlign,
        overlayColor = attributes.overlayColor,
        customOverlayColor = attributes.customOverlayColor;
    var overlayColorClass = Object(external_this_wp_blockEditor_["getColorClassName"])('background-color', overlayColor);
    var style = backgroundImageStyles(url);

    if (!overlayColorClass) {
      style.backgroundColor = customOverlayColor;
    }

    var classes = classnames_default()('wp-block-cover-image', dimRatioToClass(dimRatio), overlayColorClass, Object(defineProperty["a" /* default */])({
      'has-background-dim': dimRatio !== 0,
      'has-parallax': hasParallax
    }, "has-".concat(contentAlign, "-content"), contentAlign !== 'center'), align ? "align".concat(align) : null);
    return Object(external_this_wp_element_["createElement"])("div", {
      className: classes,
      style: style
    }, !external_this_wp_blockEditor_["RichText"].isEmpty(title) && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      tagName: "p",
      className: "wp-block-cover-image-text",
      value: title
    }));
  },
  migrate: function migrate(attributes) {
    return [Object(external_this_lodash_["omit"])(attributes, ['title', 'contentAlign', 'align']), [Object(external_this_wp_blocks_["createBlock"])('core/paragraph', {
      content: attributes.title,
      align: attributes.contentAlign,
      fontSize: 'large',
      placeholder: Object(external_this_wp_i18n_["__"])('Write title…')
    })]];
  }
}, {
  attributes: cover_deprecated_objectSpread({}, cover_deprecated_blockAttributes, {
    title: {
      type: 'string',
      source: 'html',
      selector: 'h2'
    },
    align: {
      type: 'string'
    },
    contentAlign: {
      type: 'string',
      default: 'center'
    }
  }),
  supports: {
    className: false
  },
  save: function save(_ref5) {
    var attributes = _ref5.attributes;
    var url = attributes.url,
        title = attributes.title,
        hasParallax = attributes.hasParallax,
        dimRatio = attributes.dimRatio,
        align = attributes.align;
    var style = backgroundImageStyles(url);
    var classes = classnames_default()('wp-block-cover-image', dimRatioToClass(dimRatio), {
      'has-background-dim': dimRatio !== 0,
      'has-parallax': hasParallax
    }, align ? "align".concat(align) : null);
    return Object(external_this_wp_element_["createElement"])("section", {
      className: classes,
      style: style
    }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      tagName: "h2",
      value: title
    }));
  },
  migrate: function migrate(attributes) {
    return [Object(external_this_lodash_["omit"])(attributes, ['title', 'contentAlign', 'align']), [Object(external_this_wp_blocks_["createBlock"])('core/paragraph', {
      content: attributes.title,
      align: attributes.contentAlign,
      fontSize: 'large',
      placeholder: Object(external_this_wp_i18n_["__"])('Write title…')
    })]];
  }
}];
/* harmony default export */ var cover_deprecated = (cover_deprecated_deprecated);

// EXTERNAL MODULE: ./node_modules/fast-average-color/dist/index.js
var dist = __webpack_require__(260);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// EXTERNAL MODULE: ./node_modules/tinycolor2/tinycolor.js
var tinycolor = __webpack_require__(56);
var tinycolor_default = /*#__PURE__*/__webpack_require__.n(tinycolor);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/cover/edit.js






function cover_edit_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function cover_edit_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { cover_edit_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { cover_edit_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */


/**
 * Module Constants
 */

var cover_edit_ALLOWED_MEDIA_TYPES = ['image', 'video'];
var INNER_BLOCKS_TEMPLATE = [['core/paragraph', {
  align: 'center',
  fontSize: 'large',
  placeholder: Object(external_this_wp_i18n_["__"])('Write title…')
}]];
var BoxControlVisualizer = external_this_wp_components_["__experimentalBoxControl"].__Visualizer;

function retrieveFastAverageColor() {
  if (!retrieveFastAverageColor.fastAverageColor) {
    retrieveFastAverageColor.fastAverageColor = new dist_default.a();
  }

  return retrieveFastAverageColor.fastAverageColor;
}

function CoverHeightInput(_ref) {
  var onChange = _ref.onChange,
      onUnitChange = _ref.onUnitChange,
      _ref$unit = _ref.unit,
      unit = _ref$unit === void 0 ? 'px' : _ref$unit,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? '' : _ref$value;

  var _useState = Object(external_this_wp_element_["useState"])(null),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      temporaryInput = _useState2[0],
      setTemporaryInput = _useState2[1];

  var instanceId = Object(external_this_wp_compose_["useInstanceId"])(external_this_wp_blockEditor_["__experimentalUnitControl"]);
  var inputId = "block-cover-height-input-".concat(instanceId);
  var isPx = unit === 'px';

  var handleOnChange = function handleOnChange(unprocessedValue) {
    var inputValue = unprocessedValue !== '' ? parseInt(unprocessedValue, 10) : undefined;

    if (isNaN(inputValue) && inputValue !== undefined) {
      setTemporaryInput(unprocessedValue);
      return;
    }

    setTemporaryInput(null);
    onChange(inputValue);
  };

  var handleOnBlur = function handleOnBlur() {
    if (temporaryInput !== null) {
      setTemporaryInput(null);
    }
  };

  var inputValue = temporaryInput !== null ? temporaryInput : value;
  var min = isPx ? COVER_MIN_HEIGHT : 0;
  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["BaseControl"], {
    label: Object(external_this_wp_i18n_["__"])('Minimum height of cover'),
    id: inputId
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["__experimentalUnitControl"], {
    id: inputId,
    isResetValueOnUnitChange: true,
    min: min,
    onBlur: handleOnBlur,
    onChange: handleOnChange,
    onUnitChange: onUnitChange,
    step: "1",
    style: {
      maxWidth: 80
    },
    unit: unit,
    units: CSS_UNITS,
    value: inputValue
  }));
}

var RESIZABLE_BOX_ENABLE_OPTION = {
  top: false,
  right: false,
  bottom: true,
  left: false,
  topRight: false,
  bottomRight: false,
  bottomLeft: false,
  topLeft: false
};

function ResizableCover(_ref2) {
  var className = _ref2.className,
      _onResizeStart = _ref2.onResizeStart,
      _onResize = _ref2.onResize,
      _onResizeStop = _ref2.onResizeStop,
      props = Object(objectWithoutProperties["a" /* default */])(_ref2, ["className", "onResizeStart", "onResize", "onResizeStop"]);

  var _useState3 = Object(external_this_wp_element_["useState"])(false),
      _useState4 = Object(slicedToArray["a" /* default */])(_useState3, 2),
      isResizing = _useState4[0],
      setIsResizing = _useState4[1];

  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ResizableBox"], Object(esm_extends["a" /* default */])({
    className: classnames_default()(className, {
      'is-resizing': isResizing
    }),
    enable: RESIZABLE_BOX_ENABLE_OPTION,
    onResizeStart: function onResizeStart(_event, _direction, elt) {
      _onResizeStart(elt.clientHeight);

      _onResize(elt.clientHeight);
    },
    onResize: function onResize(_event, _direction, elt) {
      _onResize(elt.clientHeight);

      if (!isResizing) {
        setIsResizing(true);
      }
    },
    onResizeStop: function onResizeStop(_event, _direction, elt) {
      _onResizeStop(elt.clientHeight);

      setIsResizing(false);
    },
    minHeight: COVER_MIN_HEIGHT
  }, props));
}
/**
 * useCoverIsDark is a hook that returns a boolean variable specifying if the cover
 * background is dark or not.
 *
 * @param {?string} url          Url of the media background.
 * @param {?number} dimRatio     Transparency of the overlay color. If an image and
 *                               color are set, dimRatio is used to decide what is used
 *                               for background darkness checking purposes.
 * @param {?string} overlayColor String containing the overlay color value if one exists.
 * @param {?Object} elementRef   If a media background is set, elementRef should contain a reference to a
 *                               dom element that renders that media.
 *
 * @return {boolean} True if the cover background is considered "dark" and false otherwise.
 */


function useCoverIsDark(url) {
  var dimRatio = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
  var overlayColor = arguments.length > 2 ? arguments[2] : undefined;
  var elementRef = arguments.length > 3 ? arguments[3] : undefined;

  var _useState5 = Object(external_this_wp_element_["useState"])(false),
      _useState6 = Object(slicedToArray["a" /* default */])(_useState5, 2),
      isDark = _useState6[0],
      setIsDark = _useState6[1];

  Object(external_this_wp_element_["useEffect"])(function () {
    // If opacity is lower than 50 the dominant color is the image or video color,
    // so use that color for the dark mode computation.
    if (url && dimRatio <= 50 && elementRef.current) {
      retrieveFastAverageColor().getColorAsync(elementRef.current, function (color) {
        setIsDark(color.isDark);
      });
    }
  }, [url, url && dimRatio <= 50 && elementRef.current, setIsDark]);
  Object(external_this_wp_element_["useEffect"])(function () {
    // If opacity is greater than 50 the dominant color is the overlay color,
    // so use that color for the dark mode computation.
    if (dimRatio > 50 || !url) {
      if (!overlayColor) {
        // If no overlay color exists the overlay color is black (isDark )
        setIsDark(true);
        return;
      }

      setIsDark(tinycolor_default()(overlayColor).isDark());
    }
  }, [overlayColor, dimRatio > 50 || !url, setIsDark]);
  Object(external_this_wp_element_["useEffect"])(function () {
    if (!url && !overlayColor) {
      // Reset isDark
      setIsDark(false);
    }
  }, [!url && !overlayColor, setIsDark]);
  return isDark;
}

function CoverEdit(_ref3) {
  var _classnames, _styleAttribute$spaci, _styleAttribute$visua;

  var attributes = _ref3.attributes,
      setAttributes = _ref3.setAttributes,
      isSelected = _ref3.isSelected,
      noticeUI = _ref3.noticeUI,
      overlayColor = _ref3.overlayColor,
      setOverlayColor = _ref3.setOverlayColor,
      toggleSelection = _ref3.toggleSelection,
      noticeOperations = _ref3.noticeOperations;
  var contentPosition = attributes.contentPosition,
      id = attributes.id,
      backgroundType = attributes.backgroundType,
      dimRatio = attributes.dimRatio,
      focalPoint = attributes.focalPoint,
      hasParallax = attributes.hasParallax,
      minHeight = attributes.minHeight,
      minHeightUnit = attributes.minHeightUnit,
      styleAttribute = attributes.style,
      url = attributes.url;

  var _experimentalUseGrad = Object(external_this_wp_blockEditor_["__experimentalUseGradient"])(),
      gradientClass = _experimentalUseGrad.gradientClass,
      gradientValue = _experimentalUseGrad.gradientValue,
      setGradient = _experimentalUseGrad.setGradient;

  var onSelectMedia = attributesFromMedia(setAttributes);

  var toggleParallax = function toggleParallax() {
    setAttributes(cover_edit_objectSpread({
      hasParallax: !hasParallax
    }, !hasParallax ? {
      focalPoint: undefined
    } : {}));
  };

  var isDarkElement = Object(external_this_wp_element_["useRef"])();
  var isDark = useCoverIsDark(url, dimRatio, overlayColor.color, isDarkElement);

  var _useState7 = Object(external_this_wp_element_["useState"])(null),
      _useState8 = Object(slicedToArray["a" /* default */])(_useState7, 2),
      temporaryMinHeight = _useState8[0],
      setTemporaryMinHeight = _useState8[1];

  var removeAllNotices = noticeOperations.removeAllNotices,
      createErrorNotice = noticeOperations.createErrorNotice;
  var minHeightWithUnit = minHeightUnit ? "".concat(minHeight).concat(minHeightUnit) : minHeight;

  var style = cover_edit_objectSpread({}, backgroundType === IMAGE_BACKGROUND_TYPE ? backgroundImageStyles(url) : {}, {
    backgroundColor: overlayColor.color,
    minHeight: temporaryMinHeight || minHeightWithUnit || undefined
  });

  if (gradientValue && !url) {
    style.background = gradientValue;
  }

  if (focalPoint) {
    style.backgroundPosition = "".concat(focalPoint.x * 100, "% ").concat(focalPoint.y * 100, "%");
  }

  var hasBackground = !!(url || overlayColor.color || gradientValue);
  var controls = Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["__experimentalBlockAlignmentMatrixToolbar"], {
    label: Object(external_this_wp_i18n_["__"])('Change content position'),
    value: contentPosition,
    onChange: function onChange(nextPosition) {
      return setAttributes({
        contentPosition: nextPosition
      });
    }
  }), hasBackground && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["MediaReplaceFlow"], {
    mediaId: id,
    mediaURL: url,
    allowedTypes: cover_edit_ALLOWED_MEDIA_TYPES,
    accept: "image/*,video/*",
    onSelect: onSelectMedia
  })), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InspectorControls"], null, !!url && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
    title: Object(external_this_wp_i18n_["__"])('Media settings')
  }, IMAGE_BACKGROUND_TYPE === backgroundType && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
    label: Object(external_this_wp_i18n_["__"])('Fixed background'),
    checked: hasParallax,
    onChange: toggleParallax
  }), IMAGE_BACKGROUND_TYPE === backgroundType && !hasParallax && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["FocalPointPicker"], {
    label: Object(external_this_wp_i18n_["__"])('Focal point picker'),
    url: url,
    value: focalPoint,
    onChange: function onChange(newFocalPoint) {
      return setAttributes({
        focalPoint: newFocalPoint
      });
    }
  }), VIDEO_BACKGROUND_TYPE === backgroundType && Object(external_this_wp_element_["createElement"])("video", {
    autoPlay: true,
    muted: true,
    loop: true,
    src: url
  }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelRow"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
    isSecondary: true,
    isSmall: true,
    className: "block-library-cover__reset-button",
    onClick: function onClick() {
      return setAttributes({
        url: undefined,
        id: undefined,
        backgroundType: undefined,
        dimRatio: undefined,
        focalPoint: undefined,
        hasParallax: undefined
      });
    }
  }, Object(external_this_wp_i18n_["__"])('Clear Media')))), hasBackground && Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
    title: Object(external_this_wp_i18n_["__"])('Dimensions')
  }, Object(external_this_wp_element_["createElement"])(CoverHeightInput, {
    value: temporaryMinHeight || minHeight,
    unit: minHeightUnit,
    onChange: function onChange(newMinHeight) {
      return setAttributes({
        minHeight: newMinHeight
      });
    },
    onUnitChange: function onUnitChange(nextUnit) {
      setAttributes({
        minHeightUnit: nextUnit
      });
    }
  })), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["__experimentalPanelColorGradientSettings"], {
    title: Object(external_this_wp_i18n_["__"])('Overlay'),
    initialOpen: true,
    settings: [{
      colorValue: overlayColor.color,
      gradientValue: gradientValue,
      onColorChange: setOverlayColor,
      onGradientChange: setGradient,
      label: Object(external_this_wp_i18n_["__"])('Color')
    }]
  }, !!url && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["RangeControl"], {
    label: Object(external_this_wp_i18n_["__"])('Opacity'),
    value: dimRatio,
    onChange: function onChange(newDimRation) {
      return setAttributes({
        dimRatio: newDimRation
      });
    },
    min: 0,
    max: 100,
    required: true
  })))));

  if (!hasBackground) {
    var placeholderIcon = Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockIcon"], {
      icon: library_cover
    });

    var label = Object(external_this_wp_i18n_["__"])('Cover');

    return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, controls, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["__experimentalBlock"].div, {
      className: "is-placeholder"
    }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["MediaPlaceholder"], {
      icon: placeholderIcon,
      labels: {
        title: label,
        instructions: Object(external_this_wp_i18n_["__"])('Upload an image or video file, or pick one from your media library.')
      },
      onSelect: onSelectMedia,
      accept: "image/*,video/*",
      allowedTypes: cover_edit_ALLOWED_MEDIA_TYPES,
      notices: noticeUI,
      onError: function onError(message) {
        removeAllNotices();
        createErrorNotice(message);
      }
    }, Object(external_this_wp_element_["createElement"])("div", {
      className: "wp-block-cover__placeholder-background-options"
    }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["ColorPalette"], {
      disableCustomColors: true,
      value: overlayColor.color,
      onChange: setOverlayColor,
      clearable: false
    })))));
  }

  var classes = classnames_default()(dimRatioToClass(dimRatio), (_classnames = {
    'is-dark-theme': isDark,
    'has-background-dim': dimRatio !== 0,
    'has-parallax': hasParallax
  }, Object(defineProperty["a" /* default */])(_classnames, overlayColor.class, overlayColor.class), Object(defineProperty["a" /* default */])(_classnames, 'has-background-gradient', gradientValue), Object(defineProperty["a" /* default */])(_classnames, gradientClass, !url && gradientClass), Object(defineProperty["a" /* default */])(_classnames, 'has-custom-content-position', !isContentPositionCenter(contentPosition)), _classnames), getPositionClassName(contentPosition));
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, controls, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["__experimentalBlock"].div, {
    className: classes,
    "data-url": url,
    style: style
  }, Object(external_this_wp_element_["createElement"])(BoxControlVisualizer, {
    values: styleAttribute === null || styleAttribute === void 0 ? void 0 : (_styleAttribute$spaci = styleAttribute.spacing) === null || _styleAttribute$spaci === void 0 ? void 0 : _styleAttribute$spaci.padding,
    showValues: styleAttribute === null || styleAttribute === void 0 ? void 0 : (_styleAttribute$visua = styleAttribute.visualizers) === null || _styleAttribute$visua === void 0 ? void 0 : _styleAttribute$visua.padding
  }), Object(external_this_wp_element_["createElement"])(ResizableCover, {
    className: "block-library-cover__resize-container",
    onResizeStart: function onResizeStart() {
      setAttributes({
        minHeightUnit: 'px'
      });
      toggleSelection(false);
    },
    onResize: setTemporaryMinHeight,
    onResizeStop: function onResizeStop(newMinHeight) {
      toggleSelection(true);
      setAttributes({
        minHeight: newMinHeight
      });
      setTemporaryMinHeight(null);
    },
    showHandle: isSelected
  }), IMAGE_BACKGROUND_TYPE === backgroundType && // Used only to programmatically check if the image is dark or not
  Object(external_this_wp_element_["createElement"])("img", {
    ref: isDarkElement,
    "aria-hidden": true,
    alt: "",
    style: {
      display: 'none'
    },
    src: url
  }), url && gradientValue && dimRatio !== 0 && Object(external_this_wp_element_["createElement"])("span", {
    "aria-hidden": "true",
    className: classnames_default()('wp-block-cover__gradient-background', gradientClass),
    style: {
      background: gradientValue
    }
  }), VIDEO_BACKGROUND_TYPE === backgroundType && Object(external_this_wp_element_["createElement"])("video", {
    ref: isDarkElement,
    className: "wp-block-cover__video-background",
    autoPlay: true,
    muted: true,
    loop: true,
    src: url
  }), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InnerBlocks"], {
    __experimentalTagName: "div",
    __experimentalPassedProps: {
      className: 'wp-block-cover__inner-container'
    },
    template: INNER_BLOCKS_TEMPLATE
  })));
}

/* harmony default export */ var cover_edit = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/block-editor'),
      toggleSelection = _dispatch.toggleSelection;

  return {
    toggleSelection: toggleSelection
  };
}), Object(external_this_wp_blockEditor_["withColors"])({
  overlayColor: 'background-color'
}), external_this_wp_components_["withNotices"], external_this_wp_compose_["withInstanceId"]])(CoverEdit));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/cover/save.js



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


function cover_save_save(_ref) {
  var _classnames;

  var attributes = _ref.attributes;
  var backgroundType = attributes.backgroundType,
      gradient = attributes.gradient,
      contentPosition = attributes.contentPosition,
      customGradient = attributes.customGradient,
      customOverlayColor = attributes.customOverlayColor,
      dimRatio = attributes.dimRatio,
      focalPoint = attributes.focalPoint,
      hasParallax = attributes.hasParallax,
      overlayColor = attributes.overlayColor,
      url = attributes.url,
      minHeightProp = attributes.minHeight,
      minHeightUnit = attributes.minHeightUnit;
  var overlayColorClass = Object(external_this_wp_blockEditor_["getColorClassName"])('background-color', overlayColor);

  var gradientClass = Object(external_this_wp_blockEditor_["__experimentalGetGradientClass"])(gradient);

  var minHeight = minHeightUnit ? "".concat(minHeightProp).concat(minHeightUnit) : minHeightProp;
  var style = backgroundType === IMAGE_BACKGROUND_TYPE ? backgroundImageStyles(url) : {};

  if (!overlayColorClass) {
    style.backgroundColor = customOverlayColor;
  }

  if (focalPoint && !hasParallax) {
    style.backgroundPosition = "".concat(Math.round(focalPoint.x * 100), "% ").concat(Math.round(focalPoint.y * 100), "%");
  }

  if (customGradient && !url) {
    style.background = customGradient;
  }

  style.minHeight = minHeight || undefined;
  var classes = classnames_default()(dimRatioToClass(dimRatio), overlayColorClass, (_classnames = {
    'has-background-dim': dimRatio !== 0,
    'has-parallax': hasParallax,
    'has-background-gradient': gradient || customGradient
  }, Object(defineProperty["a" /* default */])(_classnames, gradientClass, !url && gradientClass), Object(defineProperty["a" /* default */])(_classnames, 'has-custom-content-position', !isContentPositionCenter(contentPosition)), _classnames), getPositionClassName(contentPosition));
  return Object(external_this_wp_element_["createElement"])("div", {
    className: classes,
    style: style
  }, url && (gradient || customGradient) && dimRatio !== 0 && Object(external_this_wp_element_["createElement"])("span", {
    "aria-hidden": "true",
    className: classnames_default()('wp-block-cover__gradient-background', gradientClass),
    style: customGradient ? {
      background: customGradient
    } : undefined
  }), VIDEO_BACKGROUND_TYPE === backgroundType && url && Object(external_this_wp_element_["createElement"])("video", {
    className: "wp-block-cover__video-background",
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    src: url
  }), Object(external_this_wp_element_["createElement"])("div", {
    className: "wp-block-cover__inner-container"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InnerBlocks"].Content, null)));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/cover/transforms.js
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


var cover_transforms_transforms = {
  from: [{
    type: 'block',
    blocks: ['core/image'],
    transform: function transform(_ref) {
      var caption = _ref.caption,
          url = _ref.url,
          align = _ref.align,
          id = _ref.id;
      return Object(external_this_wp_blocks_["createBlock"])('core/cover', {
        title: caption,
        url: url,
        align: align,
        id: id
      });
    }
  }, {
    type: 'block',
    blocks: ['core/video'],
    transform: function transform(_ref2) {
      var caption = _ref2.caption,
          src = _ref2.src,
          align = _ref2.align,
          id = _ref2.id;
      return Object(external_this_wp_blocks_["createBlock"])('core/cover', {
        title: caption,
        url: src,
        align: align,
        id: id,
        backgroundType: VIDEO_BACKGROUND_TYPE
      });
    }
  }],
  to: [{
    type: 'block',
    blocks: ['core/image'],
    isMatch: function isMatch(_ref3) {
      var backgroundType = _ref3.backgroundType,
          url = _ref3.url,
          overlayColor = _ref3.overlayColor,
          customOverlayColor = _ref3.customOverlayColor,
          gradient = _ref3.gradient,
          customGradient = _ref3.customGradient;

      if (url) {
        // If a url exists the transform could happen if that URL represents an image background.
        return backgroundType === IMAGE_BACKGROUND_TYPE;
      } // If a url is not set the transform could happen if the cover has no background color or gradient;


      return !overlayColor && !customOverlayColor && !gradient && !customGradient;
    },
    transform: function transform(_ref4) {
      var title = _ref4.title,
          url = _ref4.url,
          align = _ref4.align,
          id = _ref4.id;
      return Object(external_this_wp_blocks_["createBlock"])('core/image', {
        caption: title,
        url: url,
        align: align,
        id: id
      });
    }
  }, {
    type: 'block',
    blocks: ['core/video'],
    isMatch: function isMatch(_ref5) {
      var backgroundType = _ref5.backgroundType,
          url = _ref5.url,
          overlayColor = _ref5.overlayColor,
          customOverlayColor = _ref5.customOverlayColor,
          gradient = _ref5.gradient,
          customGradient = _ref5.customGradient;

      if (url) {
        // If a url exists the transform could happen if that URL represents a video background.
        return backgroundType === VIDEO_BACKGROUND_TYPE;
      } // If a url is not set the transform could happen if the cover has no background color or gradient;


      return !overlayColor && !customOverlayColor && !gradient && !customGradient;
    },
    transform: function transform(_ref6) {
      var title = _ref6.title,
          url = _ref6.url,
          align = _ref6.align,
          id = _ref6.id;
      return Object(external_this_wp_blocks_["createBlock"])('core/video', {
        caption: title,
        src: url,
        id: id,
        align: align
      });
    }
  }]
};
/* harmony default export */ var cover_transforms = (cover_transforms_transforms);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/cover/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



var cover_metadata = {
  name: "core/cover",
  category: "media",
  attributes: {
    url: {
      type: "string"
    },
    id: {
      type: "number"
    },
    hasParallax: {
      type: "boolean",
      "default": false
    },
    dimRatio: {
      type: "number",
      "default": 50
    },
    overlayColor: {
      type: "string"
    },
    customOverlayColor: {
      type: "string"
    },
    backgroundType: {
      type: "string",
      "default": "image"
    },
    focalPoint: {
      type: "object"
    },
    minHeight: {
      type: "number"
    },
    minHeightUnit: {
      type: "string"
    },
    gradient: {
      type: "string"
    },
    customGradient: {
      type: "string"
    },
    contentPosition: {
      type: "string"
    }
  },
  supports: {
    align: true,
    html: false,
    lightBlockWrapper: true,
    __experimentalPadding: true
  }
};


var cover_name = cover_metadata.name;

var cover_settings = {
  title: Object(external_this_wp_i18n_["__"])('Cover'),
  description: Object(external_this_wp_i18n_["__"])('Add an image or video with a text overlay — great for headers.'),
  icon: library_cover,
  example: {
    attributes: {
      customOverlayColor: '#065174',
      dimRatio: 40,
      url: 'https://s.w.org/images/core/5.3/Windbuchencom.jpg'
    },
    innerBlocks: [{
      name: 'core/paragraph',
      attributes: {
        customFontSize: 48,
        content: Object(external_this_wp_i18n_["__"])('<strong>Snow Patrol</strong>'),
        align: 'center'
      }
    }]
  },
  transforms: cover_transforms,
  save: cover_save_save,
  edit: cover_edit,
  deprecated: cover_deprecated
};

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/pencil.js
var pencil = __webpack_require__(296);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/embed/embed-controls.js


/**
 * WordPress dependencies
 */





var embed_controls_EmbedControls = function EmbedControls(props) {
  var blockSupportsResponsive = props.blockSupportsResponsive,
      showEditButton = props.showEditButton,
      themeSupportsResponsive = props.themeSupportsResponsive,
      allowResponsive = props.allowResponsive,
      getResponsiveHelp = props.getResponsiveHelp,
      toggleResponsive = props.toggleResponsive,
      switchBackToURLInput = props.switchBackToURLInput;
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToolbarGroup"], null, showEditButton && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToolbarButton"], {
    className: "components-toolbar__control",
    label: Object(external_this_wp_i18n_["__"])('Edit URL'),
    icon: pencil["a" /* default */],
    onClick: switchBackToURLInput
  }))), themeSupportsResponsive && blockSupportsResponsive && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InspectorControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
    title: Object(external_this_wp_i18n_["__"])('Media settings'),
    className: "blocks-responsive"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
    label: Object(external_this_wp_i18n_["__"])('Resize for smaller devices'),
    checked: allowResponsive,
    help: getResponsiveHelp,
    onChange: toggleResponsive
  }))));
};

/* harmony default export */ var embed_controls = (embed_controls_EmbedControls);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/embed/embed-loading.js


/**
 * WordPress dependencies
 */



var embed_loading_EmbedLoading = function EmbedLoading() {
  return Object(external_this_wp_element_["createElement"])("div", {
    className: "wp-block-embed is-loading"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Spinner"], null), Object(external_this_wp_element_["createElement"])("p", null, Object(external_this_wp_i18n_["__"])('Embedding…')));
};

/* harmony default export */ var embed_loading = (embed_loading_EmbedLoading);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/embed/embed-placeholder.js


/**
 * WordPress dependencies
 */




var embed_placeholder_EmbedPlaceholder = function EmbedPlaceholder(props) {
  var icon = props.icon,
      label = props.label,
      value = props.value,
      onSubmit = props.onSubmit,
      onChange = props.onChange,
      cannotEmbed = props.cannotEmbed,
      fallback = props.fallback,
      tryAgain = props.tryAgain;
  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Placeholder"], {
    icon: Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockIcon"], {
      icon: icon,
      showColors: true
    }),
    label: label,
    className: "wp-block-embed",
    instructions: Object(external_this_wp_i18n_["__"])('Paste a link to the content you want to display on your site.')
  }, Object(external_this_wp_element_["createElement"])("form", {
    onSubmit: onSubmit
  }, Object(external_this_wp_element_["createElement"])("input", {
    type: "url",
    value: value || '',
    className: "components-placeholder__input",
    "aria-label": label,
    placeholder: Object(external_this_wp_i18n_["__"])('Enter URL to embed here…'),
    onChange: onChange
  }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
    isPrimary: true,
    type: "submit"
  }, Object(external_this_wp_i18n_["_x"])('Embed', 'button label'))), Object(external_this_wp_element_["createElement"])("div", {
    className: "components-placeholder__learn-more"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ExternalLink"], {
    href: Object(external_this_wp_i18n_["__"])('https://wordpress.org/support/article/embeds/')
  }, Object(external_this_wp_i18n_["__"])('Learn more about embeds'))), cannotEmbed && Object(external_this_wp_element_["createElement"])("div", {
    className: "components-placeholder__error"
  }, Object(external_this_wp_element_["createElement"])("div", {
    className: "components-placeholder__instructions"
  }, Object(external_this_wp_i18n_["__"])('Sorry, this content could not be embedded.')), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
    isSecondary: true,
    onClick: tryAgain
  }, Object(external_this_wp_i18n_["_x"])('Try again', 'button label')), ' ', Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
    isSecondary: true,
    onClick: fallback
  }, Object(external_this_wp_i18n_["_x"])('Convert to link', 'button label'))));
};

/* harmony default export */ var embed_placeholder = (embed_placeholder_EmbedPlaceholder);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/embed/wp-embed-preview.js








function wp_embed_preview_createSuper(Derived) { return function () { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (wp_embed_preview_isNativeReflectConstruct()) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function wp_embed_preview_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * WordPress dependencies
 */


/**
 * Browser dependencies
 */

var wp_embed_preview_window = window,
    FocusEvent = wp_embed_preview_window.FocusEvent;

var wp_embed_preview_WpEmbedPreview = /*#__PURE__*/function (_Component) {
  Object(inherits["a" /* default */])(WpEmbedPreview, _Component);

  var _super = wp_embed_preview_createSuper(WpEmbedPreview);

  function WpEmbedPreview() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, WpEmbedPreview);

    _this = _super.apply(this, arguments);
    _this.checkFocus = _this.checkFocus.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.node = Object(external_this_wp_element_["createRef"])();
    return _this;
  }
  /**
   * Checks whether the wp embed iframe is the activeElement,
   * if it is dispatch a focus event.
   */


  Object(createClass["a" /* default */])(WpEmbedPreview, [{
    key: "checkFocus",
    value: function checkFocus() {
      var _document = document,
          activeElement = _document.activeElement;

      if (activeElement.tagName !== 'IFRAME' || activeElement.parentNode !== this.node.current) {
        return;
      }

      var focusEvent = new FocusEvent('focus', {
        bubbles: true
      });
      activeElement.dispatchEvent(focusEvent);
    }
  }, {
    key: "render",
    value: function render() {
      var html = this.props.html;
      return Object(external_this_wp_element_["createElement"])("div", {
        ref: this.node,
        className: "wp-block-embed__wrapper",
        dangerouslySetInnerHTML: {
          __html: html
        }
      });
    }
  }]);

  return WpEmbedPreview;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var wp_embed_preview = (Object(external_this_wp_compose_["withGlobalEvents"])({
  blur: 'checkFocus'
})(wp_embed_preview_WpEmbedPreview));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/embed/embed-preview.js








function embed_preview_createSuper(Derived) { return function () { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (embed_preview_isNativeReflectConstruct()) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function embed_preview_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Internal dependencies
 */

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



var embed_preview_EmbedPreview = /*#__PURE__*/function (_Component) {
  Object(inherits["a" /* default */])(EmbedPreview, _Component);

  var _super = embed_preview_createSuper(EmbedPreview);

  function EmbedPreview() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, EmbedPreview);

    _this = _super.apply(this, arguments);
    _this.hideOverlay = _this.hideOverlay.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.state = {
      interactive: false
    };
    return _this;
  }

  Object(createClass["a" /* default */])(EmbedPreview, [{
    key: "hideOverlay",
    value: function hideOverlay() {
      // This is called onMouseUp on the overlay. We can't respond to the `isSelected` prop
      // changing, because that happens on mouse down, and the overlay immediately disappears,
      // and the mouse event can end up in the preview content. We can't use onClick on
      // the overlay to hide it either, because then the editor misses the mouseup event, and
      // thinks we're multi-selecting blocks.
      this.setState({
        interactive: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          preview = _this$props.preview,
          previewable = _this$props.previewable,
          url = _this$props.url,
          type = _this$props.type,
          caption = _this$props.caption,
          onCaptionChange = _this$props.onCaptionChange,
          isSelected = _this$props.isSelected,
          className = _this$props.className,
          icon = _this$props.icon,
          label = _this$props.label,
          insertBlocksAfter = _this$props.insertBlocksAfter;
      var scripts = preview.scripts;
      var interactive = this.state.interactive;
      var html = 'photo' === type ? util_getPhotoHtml(preview) : preview.html;
      var parsedHost = new URL(url).host.split('.');
      var parsedHostBaseUrl = parsedHost.splice(parsedHost.length - 2, parsedHost.length - 1).join('.');
      var iframeTitle = Object(external_this_wp_i18n_["sprintf"])( // translators: %s: host providing embed content e.g: www.youtube.com
      Object(external_this_wp_i18n_["__"])('Embedded content from %s'), parsedHostBaseUrl);
      var sandboxClassnames = dedupe_default()(type, className, 'wp-block-embed__wrapper'); // Disabled because the overlay div doesn't actually have a role or functionality
      // as far as the user is concerned. We're just catching the first click so that
      // the block can be selected without interacting with the embed preview that the overlay covers.

      /* eslint-disable jsx-a11y/no-static-element-interactions */

      var embedWrapper = 'wp-embed' === type ? Object(external_this_wp_element_["createElement"])(wp_embed_preview, {
        html: html
      }) : Object(external_this_wp_element_["createElement"])("div", {
        className: "wp-block-embed__wrapper"
      }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SandBox"], {
        html: html,
        scripts: scripts,
        title: iframeTitle,
        type: sandboxClassnames,
        onFocus: this.hideOverlay
      }), !interactive && Object(external_this_wp_element_["createElement"])("div", {
        className: "block-library-embed__interactive-overlay",
        onMouseUp: this.hideOverlay
      }));
      /* eslint-enable jsx-a11y/no-static-element-interactions */

      return Object(external_this_wp_element_["createElement"])("figure", {
        className: dedupe_default()(className, 'wp-block-embed', {
          'is-type-video': 'video' === type
        })
      }, previewable ? embedWrapper : Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Placeholder"], {
        icon: Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockIcon"], {
          icon: icon,
          showColors: true
        }),
        label: label
      }, Object(external_this_wp_element_["createElement"])("p", {
        className: "components-placeholder__error"
      }, Object(external_this_wp_element_["createElement"])("a", {
        href: url
      }, url)), Object(external_this_wp_element_["createElement"])("p", {
        className: "components-placeholder__error"
      }, Object(external_this_wp_i18n_["sprintf"])(
      /* translators: %s: host providing embed content e.g: www.youtube.com */
      Object(external_this_wp_i18n_["__"])("Embedded content from %s can't be previewed in the editor."), parsedHostBaseUrl))), (!external_this_wp_blockEditor_["RichText"].isEmpty(caption) || isSelected) && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"], {
        tagName: "figcaption",
        placeholder: Object(external_this_wp_i18n_["__"])('Write caption…'),
        value: caption,
        onChange: onCaptionChange,
        inlineToolbar: true,
        __unstableOnSplitAtEnd: function __unstableOnSplitAtEnd() {
          return insertBlocksAfter(Object(external_this_wp_blocks_["createBlock"])('core/paragraph'));
        }
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, state) {
      if (!nextProps.isSelected && state.interactive) {
        // We only want to change this when the block is not selected, because changing it when
        // the block becomes selected makes the overlap disappear too early. Hiding the overlay
        // happens on mouseup when the overlay is clicked.
        return {
          interactive: false
        };
      }

      return null;
    }
  }]);

  return EmbedPreview;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var embed_preview = (embed_preview_EmbedPreview);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/embed/edit.js









function embed_edit_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function embed_edit_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { embed_edit_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { embed_edit_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function embed_edit_createSuper(Derived) { return function () { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (embed_edit_isNativeReflectConstruct()) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function embed_edit_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Internal dependencies
 */





/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */



function getEmbedEditComponent(title, icon) {
  var responsive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var previewable = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  return /*#__PURE__*/function (_Component) {
    Object(inherits["a" /* default */])(_class, _Component);

    var _super = embed_edit_createSuper(_class);

    function _class() {
      var _this;

      Object(classCallCheck["a" /* default */])(this, _class);

      _this = _super.apply(this, arguments);
      _this.switchBackToURLInput = _this.switchBackToURLInput.bind(Object(assertThisInitialized["a" /* default */])(_this));
      _this.setUrl = _this.setUrl.bind(Object(assertThisInitialized["a" /* default */])(_this));
      _this.getMergedAttributes = _this.getMergedAttributes.bind(Object(assertThisInitialized["a" /* default */])(_this));
      _this.setMergedAttributes = _this.setMergedAttributes.bind(Object(assertThisInitialized["a" /* default */])(_this));
      _this.getResponsiveHelp = _this.getResponsiveHelp.bind(Object(assertThisInitialized["a" /* default */])(_this));
      _this.toggleResponsive = _this.toggleResponsive.bind(Object(assertThisInitialized["a" /* default */])(_this));
      _this.handleIncomingPreview = _this.handleIncomingPreview.bind(Object(assertThisInitialized["a" /* default */])(_this));
      _this.state = {
        editingURL: false,
        url: _this.props.attributes.url
      };

      if (_this.props.preview) {
        _this.handleIncomingPreview();
      }

      return _this;
    }

    Object(createClass["a" /* default */])(_class, [{
      key: "handleIncomingPreview",
      value: function handleIncomingPreview() {
        this.setMergedAttributes();

        if (this.props.onReplace) {
          var upgradedBlock = util_createUpgradedEmbedBlock(this.props, this.getMergedAttributes());

          if (upgradedBlock) {
            this.props.onReplace(upgradedBlock);
          }
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        var hasPreview = undefined !== this.props.preview;
        var hadPreview = undefined !== prevProps.preview;
        var previewChanged = prevProps.preview && this.props.preview && this.props.preview.html !== prevProps.preview.html;
        var switchedPreview = previewChanged || hasPreview && !hadPreview;
        var switchedURL = this.props.attributes.url !== prevProps.attributes.url;

        if (switchedPreview || switchedURL) {
          if (this.props.cannotEmbed) {
            // We either have a new preview or a new URL, but we can't embed it.
            if (!this.props.fetching) {
              // If we're not fetching the preview, then we know it can't be embedded, so try
              // removing any trailing slash, and resubmit.
              this.resubmitWithoutTrailingSlash();
            }

            return;
          }

          this.handleIncomingPreview();
        }
      }
    }, {
      key: "resubmitWithoutTrailingSlash",
      value: function resubmitWithoutTrailingSlash() {
        this.setState(function (prevState) {
          return {
            url: prevState.url.replace(/\/$/, '')
          };
        }, this.setUrl);
      }
    }, {
      key: "setUrl",
      value: function setUrl(event) {
        if (event) {
          event.preventDefault();
        }

        var url = this.state.url;
        var setAttributes = this.props.setAttributes;
        this.setState({
          editingURL: false
        });
        setAttributes({
          url: url
        });
      }
      /***
       * @return {Object} Attributes derived from the preview, merged with the current attributes.
       */

    }, {
      key: "getMergedAttributes",
      value: function getMergedAttributes() {
        var preview = this.props.preview;
        var _this$props$attribute = this.props.attributes,
            className = _this$props$attribute.className,
            allowResponsive = _this$props$attribute.allowResponsive;
        return embed_edit_objectSpread({}, this.props.attributes, {}, getAttributesFromPreview(preview, title, className, responsive, allowResponsive));
      }
      /***
       * Sets block attributes based on the current attributes and preview data.
       */

    }, {
      key: "setMergedAttributes",
      value: function setMergedAttributes() {
        var setAttributes = this.props.setAttributes;
        setAttributes(this.getMergedAttributes());
      }
    }, {
      key: "switchBackToURLInput",
      value: function switchBackToURLInput() {
        this.setState({
          editingURL: true
        });
      }
    }, {
      key: "getResponsiveHelp",
      value: function getResponsiveHelp(checked) {
        return checked ? Object(external_this_wp_i18n_["__"])('This embed will preserve its aspect ratio when the browser is resized.') : Object(external_this_wp_i18n_["__"])('This embed may not preserve its aspect ratio when the browser is resized.');
      }
    }, {
      key: "toggleResponsive",
      value: function toggleResponsive() {
        var _this$props$attribute2 = this.props.attributes,
            allowResponsive = _this$props$attribute2.allowResponsive,
            className = _this$props$attribute2.className;
        var html = this.props.preview.html;
        var newAllowResponsive = !allowResponsive;
        this.props.setAttributes({
          allowResponsive: newAllowResponsive,
          className: getClassNames(html, className, responsive && newAllowResponsive)
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$state = this.state,
            url = _this$state.url,
            editingURL = _this$state.editingURL;
        var _this$props = this.props,
            fetching = _this$props.fetching,
            setAttributes = _this$props.setAttributes,
            isSelected = _this$props.isSelected,
            preview = _this$props.preview,
            cannotEmbed = _this$props.cannotEmbed,
            themeSupportsResponsive = _this$props.themeSupportsResponsive,
            tryAgain = _this$props.tryAgain,
            insertBlocksAfter = _this$props.insertBlocksAfter;

        if (fetching) {
          return Object(external_this_wp_element_["createElement"])(embed_loading, null);
        } // translators: %s: type of embed e.g: "YouTube", "Twitter", etc. "Embed" is used when no specific type exists


        var label = Object(external_this_wp_i18n_["sprintf"])(Object(external_this_wp_i18n_["__"])('%s URL'), title); // No preview, or we can't embed the current URL, or we've clicked the edit button.

        if (!preview || cannotEmbed || editingURL) {
          return Object(external_this_wp_element_["createElement"])(embed_placeholder, {
            icon: icon,
            label: label,
            onSubmit: this.setUrl,
            value: url,
            cannotEmbed: cannotEmbed,
            onChange: function onChange(event) {
              return _this2.setState({
                url: event.target.value
              });
            },
            fallback: function fallback() {
              return util_fallback(url, _this2.props.onReplace);
            },
            tryAgain: tryAgain
          });
        } // Even though we set attributes that get derived from the preview,
        // we don't access them directly because for the initial render,
        // the `setAttributes` call will not have taken effect. If we're
        // rendering responsive content, setting the responsive classes
        // after the preview has been rendered can result in unwanted
        // clipping or scrollbars. The `getAttributesFromPreview` function
        // that `getMergedAttributes` uses is memoized so that we're not
        // calculating them on every render.


        var previewAttributes = this.getMergedAttributes();
        var caption = previewAttributes.caption,
            type = previewAttributes.type,
            allowResponsive = previewAttributes.allowResponsive;
        var className = classnames_default()(previewAttributes.className, this.props.className);
        return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(embed_controls, {
          showEditButton: preview && !cannotEmbed,
          themeSupportsResponsive: themeSupportsResponsive,
          blockSupportsResponsive: responsive,
          allowResponsive: allowResponsive,
          getResponsiveHelp: this.getResponsiveHelp,
          toggleResponsive: this.toggleResponsive,
          switchBackToURLInput: this.switchBackToURLInput
        }), Object(external_this_wp_element_["createElement"])(embed_preview, {
          preview: preview,
          previewable: previewable,
          className: className,
          url: url,
          type: type,
          caption: caption,
          onCaptionChange: function onCaptionChange(value) {
            return setAttributes({
              caption: value
            });
          },
          isSelected: isSelected,
          icon: icon,
          label: label,
          insertBlocksAfter: insertBlocksAfter
        }));
      }
    }]);

    return _class;
  }(external_this_wp_element_["Component"]);
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/embed/settings.js



function settings_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function settings_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { settings_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { settings_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Internal dependencies
 */

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */





var embedAttributes = {
  url: {
    type: 'string'
  },
  caption: {
    type: 'string',
    source: 'html',
    selector: 'figcaption'
  },
  type: {
    type: 'string'
  },
  providerNameSlug: {
    type: 'string'
  },
  allowResponsive: {
    type: 'boolean',
    default: true
  }
};
function getEmbedBlockSettings(_ref) {
  var title = _ref.title,
      description = _ref.description,
      icon = _ref.icon,
      _ref$category = _ref.category,
      category = _ref$category === void 0 ? 'embed' : _ref$category,
      transforms = _ref.transforms,
      _ref$keywords = _ref.keywords,
      keywords = _ref$keywords === void 0 ? [] : _ref$keywords,
      _ref$supports = _ref.supports,
      supports = _ref$supports === void 0 ? {} : _ref$supports,
      _ref$responsive = _ref.responsive,
      responsive = _ref$responsive === void 0 ? true : _ref$responsive,
      _ref$previewable = _ref.previewable,
      previewable = _ref$previewable === void 0 ? true : _ref$previewable;

  var blockDescription = description || Object(external_this_wp_i18n_["__"])('Add a block that displays content pulled from other sites, like Twitter, Instagram or YouTube.');

  var edit = getEmbedEditComponent(title, icon, responsive, previewable);
  return {
    title: title,
    description: blockDescription,
    icon: icon,
    category: category,
    keywords: keywords,
    attributes: embedAttributes,
    supports: settings_objectSpread({
      align: true
    }, supports),
    transforms: transforms,
    edit: Object(external_this_wp_compose_["compose"])(Object(external_this_wp_data_["withSelect"])(function (select, ownProps) {
      var url = ownProps.attributes.url;
      var core = select('core');
      var getEmbedPreview = core.getEmbedPreview,
          isPreviewEmbedFallback = core.isPreviewEmbedFallback,
          isRequestingEmbedPreview = core.isRequestingEmbedPreview,
          getThemeSupports = core.getThemeSupports;
      var preview = undefined !== url && getEmbedPreview(url);
      var previewIsFallback = undefined !== url && isPreviewEmbedFallback(url);
      var fetching = undefined !== url && isRequestingEmbedPreview(url);
      var themeSupports = getThemeSupports(); // The external oEmbed provider does not exist. We got no type info and no html.

      var badEmbedProvider = !!preview && undefined === preview.type && false === preview.html; // Some WordPress URLs that can't be embedded will cause the API to return
      // a valid JSON response with no HTML and `data.status` set to 404, rather
      // than generating a fallback response as other embeds do.

      var wordpressCantEmbed = !!preview && preview.data && preview.data.status === 404;
      var validPreview = !!preview && !badEmbedProvider && !wordpressCantEmbed;
      var cannotEmbed = undefined !== url && (!validPreview || previewIsFallback);
      return {
        preview: validPreview ? preview : undefined,
        fetching: fetching,
        themeSupportsResponsive: themeSupports['responsive-embeds'],
        cannotEmbed: cannotEmbed
      };
    }), Object(external_this_wp_data_["withDispatch"])(function (dispatch, ownProps) {
      var url = ownProps.attributes.url;
      var coreData = dispatch('core/data');

      var tryAgain = function tryAgain() {
        coreData.invalidateResolution('core', 'getEmbedPreview', [url]);
      };

      return {
        tryAgain: tryAgain
      };
    }))(edit),
    save: function save(_ref2) {
      var _classnames;

      var attributes = _ref2.attributes;
      var url = attributes.url,
          caption = attributes.caption,
          type = attributes.type,
          providerNameSlug = attributes.providerNameSlug;

      if (!url) {
        return null;
      }

      var embedClassName = dedupe_default()('wp-block-embed', (_classnames = {}, Object(defineProperty["a" /* default */])(_classnames, "is-type-".concat(type), type), Object(defineProperty["a" /* default */])(_classnames, "is-provider-".concat(providerNameSlug), providerNameSlug), _classnames));
      return Object(external_this_wp_element_["createElement"])("figure", {
        className: embedClassName
      }, Object(external_this_wp_element_["createElement"])("div", {
        className: "wp-block-embed__wrapper"
      }, "\n".concat(url, "\n")
      /* URL needs to be on its own line. */
      ), !external_this_wp_blockEditor_["RichText"].isEmpty(caption) && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
        tagName: "figcaption",
        value: caption
      }));
    },
    deprecated: [{
      attributes: embedAttributes,
      save: function save(_ref3) {
        var _classnames2;

        var attributes = _ref3.attributes;
        var url = attributes.url,
            caption = attributes.caption,
            type = attributes.type,
            providerNameSlug = attributes.providerNameSlug;

        if (!url) {
          return null;
        }

        var embedClassName = dedupe_default()('wp-block-embed', (_classnames2 = {}, Object(defineProperty["a" /* default */])(_classnames2, "is-type-".concat(type), type), Object(defineProperty["a" /* default */])(_classnames2, "is-provider-".concat(providerNameSlug), providerNameSlug), _classnames2));
        return Object(external_this_wp_element_["createElement"])("figure", {
          className: embedClassName
        }, "\n".concat(url, "\n")
        /* URL needs to be on its own line. */
        , !external_this_wp_blockEditor_["RichText"].isEmpty(caption) && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
          tagName: "figcaption",
          value: caption
        }));
      }
    }]
  };
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/embed/transforms.js


/**
 * WordPress dependencies
 */


/**
 * Default transforms for generic embeds.
 */

var embed_transforms_transforms = {
  from: [{
    type: 'raw',
    isMatch: function isMatch(node) {
      return node.nodeName === 'P' && /^\s*(https?:\/\/\S+)\s*$/i.test(node.textContent);
    },
    transform: function transform(node) {
      return Object(external_this_wp_blocks_["createBlock"])('core/embed', {
        url: node.textContent.trim()
      });
    }
  }],
  to: [{
    type: 'block',
    blocks: ['core/paragraph'],
    transform: function transform(_ref) {
      var url = _ref.url,
          caption = _ref.caption;
      var link = Object(external_this_wp_element_["createElement"])("a", {
        href: url
      }, caption || url);
      return Object(external_this_wp_blocks_["createBlock"])('core/paragraph', {
        content: Object(external_this_wp_element_["renderToString"])(link)
      });
    }
  }]
};
/* harmony default export */ var embed_transforms = (embed_transforms_transforms);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/embed/index.js


function embed_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function embed_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { embed_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { embed_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Internal dependencies
 */




/**
 * WordPress dependencies
 */


var embed_name = 'core/embed';
var embed_settings = getEmbedBlockSettings({
  title: Object(external_this_wp_i18n_["_x"])('Embed', 'block title'),
  description: Object(external_this_wp_i18n_["__"])('Embed videos, images, tweets, audio, and other content from external sources.'),
  icon: embedContentIcon,
  // Unknown embeds should not be responsive by default.
  responsive: false,
  transforms: embed_transforms
});
var embed_common = common.map(function (embedDefinition) {
  var embedSettings = getEmbedBlockSettings(embedDefinition.settings);
  return embed_objectSpread({}, embedDefinition, {
    settings: embed_objectSpread({}, embedSettings, {
      transforms: embed_transforms
    })
  });
});
var embed_others = others.map(function (embedDefinition) {
  var embedSettings = getEmbedBlockSettings(embedDefinition.settings);
  return embed_objectSpread({}, embedDefinition, {
    settings: embed_objectSpread({}, embedSettings, {
      transforms: embed_transforms
    })
  });
});

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/file.js


/**
 * WordPress dependencies
 */

var file_file = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M19 6.2h-5.9l-.6-1.1c-.3-.7-1-1.1-1.8-1.1H5c-1.1 0-2 .9-2 2v11.8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8.2c0-1.1-.9-2-2-2zm.5 11.6c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h5.8c.2 0 .4.1.4.3l1 2H19c.3 0 .5.2.5.5v9.5z"
}));
/* harmony default export */ var library_file = (file_file);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/file/inspector.js


/**
 * WordPress dependencies
 */



function FileBlockInspector(_ref) {
  var hrefs = _ref.hrefs,
      openInNewWindow = _ref.openInNewWindow,
      showDownloadButton = _ref.showDownloadButton,
      changeLinkDestinationOption = _ref.changeLinkDestinationOption,
      changeOpenInNewWindow = _ref.changeOpenInNewWindow,
      changeShowDownloadButton = _ref.changeShowDownloadButton;
  var href = hrefs.href,
      textLinkHref = hrefs.textLinkHref,
      attachmentPage = hrefs.attachmentPage;
  var linkDestinationOptions = [{
    value: href,
    label: Object(external_this_wp_i18n_["__"])('URL')
  }];

  if (attachmentPage) {
    linkDestinationOptions = [{
      value: href,
      label: Object(external_this_wp_i18n_["__"])('Media file')
    }, {
      value: attachmentPage,
      label: Object(external_this_wp_i18n_["__"])('Attachment page')
    }];
  }

  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InspectorControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
    title: Object(external_this_wp_i18n_["__"])('Text link settings')
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SelectControl"], {
    label: Object(external_this_wp_i18n_["__"])('Link to'),
    value: textLinkHref,
    options: linkDestinationOptions,
    onChange: changeLinkDestinationOption
  }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
    label: Object(external_this_wp_i18n_["__"])('Open in new tab'),
    checked: openInNewWindow,
    onChange: changeOpenInNewWindow
  })), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
    title: Object(external_this_wp_i18n_["__"])('Download button settings')
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
    label: Object(external_this_wp_i18n_["__"])('Show download button'),
    checked: showDownloadButton,
    onChange: changeShowDownloadButton
  }))));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/file/edit.js










function file_edit_createSuper(Derived) { return function () { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (file_edit_isNativeReflectConstruct()) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function file_edit_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */









/**
 * Internal dependencies
 */



var edit_FileEdit = /*#__PURE__*/function (_Component) {
  Object(inherits["a" /* default */])(FileEdit, _Component);

  var _super = file_edit_createSuper(FileEdit);

  function FileEdit() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, FileEdit);

    _this = _super.apply(this, arguments);
    _this.onSelectFile = _this.onSelectFile.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.confirmCopyURL = _this.confirmCopyURL.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.resetCopyConfirmation = _this.resetCopyConfirmation.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.changeLinkDestinationOption = _this.changeLinkDestinationOption.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.changeOpenInNewWindow = _this.changeOpenInNewWindow.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.changeShowDownloadButton = _this.changeShowDownloadButton.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onUploadError = _this.onUploadError.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.state = {
      hasError: false,
      showCopyConfirmation: false
    };
    return _this;
  }

  Object(createClass["a" /* default */])(FileEdit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props = this.props,
          attributes = _this$props.attributes,
          mediaUpload = _this$props.mediaUpload,
          noticeOperations = _this$props.noticeOperations,
          setAttributes = _this$props.setAttributes;
      var downloadButtonText = attributes.downloadButtonText,
          href = attributes.href; // Upload a file drag-and-dropped into the editor

      if (Object(external_this_wp_blob_["isBlobURL"])(href)) {
        var file = Object(external_this_wp_blob_["getBlobByURL"])(href);
        mediaUpload({
          filesList: [file],
          onFileChange: function onFileChange(_ref) {
            var _ref2 = Object(slicedToArray["a" /* default */])(_ref, 1),
                media = _ref2[0];

            return _this2.onSelectFile(media);
          },
          onError: function onError(message) {
            _this2.setState({
              hasError: true
            });

            noticeOperations.createErrorNotice(message);
          }
        });
        Object(external_this_wp_blob_["revokeBlobURL"])(href);
      }

      if (downloadButtonText === undefined) {
        setAttributes({
          downloadButtonText: Object(external_this_wp_i18n_["_x"])('Download', 'button label')
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // Reset copy confirmation state when block is deselected
      if (prevProps.isSelected && !this.props.isSelected) {
        this.setState({
          showCopyConfirmation: false
        });
      }
    }
  }, {
    key: "onSelectFile",
    value: function onSelectFile(media) {
      if (media && media.url) {
        this.setState({
          hasError: false
        });
        this.props.setAttributes({
          href: media.url,
          fileName: media.title,
          textLinkHref: media.url,
          id: media.id
        });
      }
    }
  }, {
    key: "onUploadError",
    value: function onUploadError(message) {
      var noticeOperations = this.props.noticeOperations;
      noticeOperations.removeAllNotices();
      noticeOperations.createErrorNotice(message);
    }
  }, {
    key: "confirmCopyURL",
    value: function confirmCopyURL() {
      this.setState({
        showCopyConfirmation: true
      });
    }
  }, {
    key: "resetCopyConfirmation",
    value: function resetCopyConfirmation() {
      this.setState({
        showCopyConfirmation: false
      });
    }
  }, {
    key: "changeLinkDestinationOption",
    value: function changeLinkDestinationOption(newHref) {
      // Choose Media File or Attachment Page (when file is in Media Library)
      this.props.setAttributes({
        textLinkHref: newHref
      });
    }
  }, {
    key: "changeOpenInNewWindow",
    value: function changeOpenInNewWindow(newValue) {
      this.props.setAttributes({
        textLinkTarget: newValue ? '_blank' : false
      });
    }
  }, {
    key: "changeShowDownloadButton",
    value: function changeShowDownloadButton(newValue) {
      this.props.setAttributes({
        showDownloadButton: newValue
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          className = _this$props2.className,
          isSelected = _this$props2.isSelected,
          attributes = _this$props2.attributes,
          setAttributes = _this$props2.setAttributes,
          noticeUI = _this$props2.noticeUI,
          media = _this$props2.media;
      var id = attributes.id,
          fileName = attributes.fileName,
          href = attributes.href,
          textLinkHref = attributes.textLinkHref,
          textLinkTarget = attributes.textLinkTarget,
          showDownloadButton = attributes.showDownloadButton,
          downloadButtonText = attributes.downloadButtonText;
      var _this$state = this.state,
          hasError = _this$state.hasError,
          showCopyConfirmation = _this$state.showCopyConfirmation;
      var attachmentPage = media && media.link;

      if (!href || hasError) {
        return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["MediaPlaceholder"], {
          icon: Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockIcon"], {
            icon: library_file
          }),
          labels: {
            title: Object(external_this_wp_i18n_["__"])('File'),
            instructions: Object(external_this_wp_i18n_["__"])('Upload a file or pick one from your media library.')
          },
          onSelect: this.onSelectFile,
          notices: noticeUI,
          onError: this.onUploadError,
          accept: "*"
        });
      }

      var classes = classnames_default()(className, {
        'is-transient': Object(external_this_wp_blob_["isBlobURL"])(href)
      });
      return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(FileBlockInspector, Object(esm_extends["a" /* default */])({
        hrefs: {
          href: href,
          textLinkHref: textLinkHref,
          attachmentPage: attachmentPage
        }
      }, {
        openInNewWindow: !!textLinkTarget,
        showDownloadButton: showDownloadButton,
        changeLinkDestinationOption: this.changeLinkDestinationOption,
        changeOpenInNewWindow: this.changeOpenInNewWindow,
        changeShowDownloadButton: this.changeShowDownloadButton
      })), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["MediaReplaceFlow"], {
        mediaId: id,
        mediaURL: href,
        accept: "*",
        onSelect: this.onSelectFile,
        onError: this.onUploadError
      })), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Animate"], {
        type: Object(external_this_wp_blob_["isBlobURL"])(href) ? 'loading' : null
      }, function (_ref3) {
        var animateClassName = _ref3.className;
        return Object(external_this_wp_element_["createElement"])("div", {
          className: classnames_default()(classes, animateClassName)
        }, Object(external_this_wp_element_["createElement"])("div", {
          className: 'wp-block-file__content-wrapper'
        }, Object(external_this_wp_element_["createElement"])("div", {
          className: "wp-block-file__textlink"
        }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"], {
          tagName: "div" // must be block-level or else cursor disappears
          ,
          value: fileName,
          placeholder: Object(external_this_wp_i18n_["__"])('Write file name…'),
          withoutInteractiveFormatting: true,
          onChange: function onChange(text) {
            return setAttributes({
              fileName: text
            });
          }
        })), showDownloadButton && Object(external_this_wp_element_["createElement"])("div", {
          className: 'wp-block-file__button-richtext-wrapper'
        }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"], {
          tagName: "div" // must be block-level or else cursor disappears
          ,
          className: 'wp-block-file__button',
          value: downloadButtonText,
          withoutInteractiveFormatting: true,
          placeholder: Object(external_this_wp_i18n_["__"])('Add text…'),
          onChange: function onChange(text) {
            return setAttributes({
              downloadButtonText: text
            });
          }
        }))), isSelected && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ClipboardButton"], {
          isSecondary: true,
          text: href,
          className: 'wp-block-file__copy-url-button',
          onCopy: _this3.confirmCopyURL,
          onFinishCopy: _this3.resetCopyConfirmation,
          disabled: Object(external_this_wp_blob_["isBlobURL"])(href)
        }, showCopyConfirmation ? Object(external_this_wp_i18n_["__"])('Copied!') : Object(external_this_wp_i18n_["__"])('Copy URL')));
      }));
    }
  }]);

  return FileEdit;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var file_edit = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select, props) {
  var _select = select('core'),
      getMedia = _select.getMedia;

  var _select2 = select('core/block-editor'),
      getSettings = _select2.getSettings;

  var _getSettings = getSettings(),
      mediaUpload = _getSettings.mediaUpload;

  var id = props.attributes.id;
  return {
    media: id === undefined ? undefined : getMedia(id),
    mediaUpload: mediaUpload
  };
}), external_this_wp_components_["withNotices"]])(edit_FileEdit));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/file/save.js


/**
 * WordPress dependencies
 */

function file_save_save(_ref) {
  var attributes = _ref.attributes;
  var href = attributes.href,
      fileName = attributes.fileName,
      textLinkHref = attributes.textLinkHref,
      textLinkTarget = attributes.textLinkTarget,
      showDownloadButton = attributes.showDownloadButton,
      downloadButtonText = attributes.downloadButtonText;
  return href && Object(external_this_wp_element_["createElement"])("div", null, !external_this_wp_blockEditor_["RichText"].isEmpty(fileName) && Object(external_this_wp_element_["createElement"])("a", {
    href: textLinkHref,
    target: textLinkTarget,
    rel: textLinkTarget ? 'noreferrer noopener' : false
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
    value: fileName
  })), showDownloadButton && Object(external_this_wp_element_["createElement"])("a", {
    href: href,
    className: "wp-block-file__button",
    download: true
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
    value: downloadButtonText
  })));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/file/transforms.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




var file_transforms_transforms = {
  from: [{
    type: 'files',
    isMatch: function isMatch(files) {
      return files.length > 0;
    },
    // We define a lower priorty (higher number) than the default of 10. This
    // ensures that the File block is only created as a fallback.
    priority: 15,
    transform: function transform(files) {
      var blocks = [];
      files.forEach(function (file) {
        var blobURL = Object(external_this_wp_blob_["createBlobURL"])(file); // File will be uploaded in componentDidMount()

        blocks.push(Object(external_this_wp_blocks_["createBlock"])('core/file', {
          href: blobURL,
          fileName: file.name,
          textLinkHref: blobURL
        }));
      });
      return blocks;
    }
  }, {
    type: 'block',
    blocks: ['core/audio'],
    transform: function transform(attributes) {
      return Object(external_this_wp_blocks_["createBlock"])('core/file', {
        href: attributes.src,
        fileName: attributes.caption,
        textLinkHref: attributes.src,
        id: attributes.id
      });
    }
  }, {
    type: 'block',
    blocks: ['core/video'],
    transform: function transform(attributes) {
      return Object(external_this_wp_blocks_["createBlock"])('core/file', {
        href: attributes.src,
        fileName: attributes.caption,
        textLinkHref: attributes.src,
        id: attributes.id
      });
    }
  }, {
    type: 'block',
    blocks: ['core/image'],
    transform: function transform(attributes) {
      return Object(external_this_wp_blocks_["createBlock"])('core/file', {
        href: attributes.url,
        fileName: attributes.caption,
        textLinkHref: attributes.url,
        id: attributes.id
      });
    }
  }],
  to: [{
    type: 'block',
    blocks: ['core/audio'],
    isMatch: function isMatch(_ref) {
      var id = _ref.id;

      if (!id) {
        return false;
      }

      var _select = Object(external_this_wp_data_["select"])('core'),
          getMedia = _select.getMedia;

      var media = getMedia(id);
      return !!media && Object(external_this_lodash_["includes"])(media.mime_type, 'audio');
    },
    transform: function transform(attributes) {
      return Object(external_this_wp_blocks_["createBlock"])('core/audio', {
        src: attributes.href,
        caption: attributes.fileName,
        id: attributes.id
      });
    }
  }, {
    type: 'block',
    blocks: ['core/video'],
    isMatch: function isMatch(_ref2) {
      var id = _ref2.id;

      if (!id) {
        return false;
      }

      var _select2 = Object(external_this_wp_data_["select"])('core'),
          getMedia = _select2.getMedia;

      var media = getMedia(id);
      return !!media && Object(external_this_lodash_["includes"])(media.mime_type, 'video');
    },
    transform: function transform(attributes) {
      return Object(external_this_wp_blocks_["createBlock"])('core/video', {
        src: attributes.href,
        caption: attributes.fileName,
        id: attributes.id
      });
    }
  }, {
    type: 'block',
    blocks: ['core/image'],
    isMatch: function isMatch(_ref3) {
      var id = _ref3.id;

      if (!id) {
        return false;
      }

      var _select3 = Object(external_this_wp_data_["select"])('core'),
          getMedia = _select3.getMedia;

      var media = getMedia(id);
      return !!media && Object(external_this_lodash_["includes"])(media.mime_type, 'image');
    },
    transform: function transform(attributes) {
      return Object(external_this_wp_blocks_["createBlock"])('core/image', {
        url: attributes.href,
        caption: attributes.fileName,
        id: attributes.id
      });
    }
  }]
};
/* harmony default export */ var file_transforms = (file_transforms_transforms);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/file/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


var file_metadata = {
  name: "core/file",
  category: "media",
  attributes: {
    id: {
      type: "number"
    },
    href: {
      type: "string"
    },
    fileName: {
      type: "string",
      source: "html",
      selector: "a:not([download])"
    },
    textLinkHref: {
      type: "string",
      source: "attribute",
      selector: "a:not([download])",
      attribute: "href"
    },
    textLinkTarget: {
      type: "string",
      source: "attribute",
      selector: "a:not([download])",
      attribute: "target"
    },
    showDownloadButton: {
      type: "boolean",
      "default": true
    },
    downloadButtonText: {
      type: "string",
      source: "html",
      selector: "a[download]"
    }
  },
  supports: {
    align: true
  }
};


var file_name = file_metadata.name;

var file_settings = {
  title: Object(external_this_wp_i18n_["__"])('File'),
  description: Object(external_this_wp_i18n_["__"])('Add a link to a downloadable file.'),
  icon: library_file,
  keywords: [Object(external_this_wp_i18n_["__"])('document'), Object(external_this_wp_i18n_["__"])('pdf'), Object(external_this_wp_i18n_["__"])('download')],
  transforms: file_transforms,
  edit: file_edit,
  save: file_save_save
};

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/html.js


/**
 * WordPress dependencies
 */

var html_html = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M4.8 11.4H2.1V9H1v6h1.1v-2.6h2.7V15h1.1V9H4.8v2.4zm1.9-1.3h1.7V15h1.1v-4.9h1.7V9H6.7v1.1zM16.2 9l-1.5 2.7L13.3 9h-.9l-.8 6h1.1l.5-4 1.5 2.8 1.5-2.8.5 4h1.1L17 9h-.8zm3.8 5V9h-1.1v6h3.6v-1H20z"
}));
/* harmony default export */ var library_html = (html_html);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/html/edit.js









function html_edit_createSuper(Derived) { return function () { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (html_edit_isNativeReflectConstruct()) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function html_edit_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * WordPress dependencies
 */






var edit_HTMLEdit = /*#__PURE__*/function (_Component) {
  Object(inherits["a" /* default */])(HTMLEdit, _Component);

  var _super = html_edit_createSuper(HTMLEdit);

  function HTMLEdit() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, HTMLEdit);

    _this = _super.apply(this, arguments);
    _this.state = {
      isPreview: false,
      styles: []
    };
    _this.switchToHTML = _this.switchToHTML.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.switchToPreview = _this.switchToPreview.bind(Object(assertThisInitialized["a" /* default */])(_this));
    return _this;
  }

  Object(createClass["a" /* default */])(HTMLEdit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var styles = this.props.styles; // Default styles used to unset some of the styles
      // that might be inherited from the editor style.

      var defaultStyles = "\n\t\t\thtml,body,:root {\n\t\t\t\tmargin: 0 !important;\n\t\t\t\tpadding: 0 !important;\n\t\t\t\toverflow: visible !important;\n\t\t\t\tmin-height: auto !important;\n\t\t\t}\n\t\t";
      this.setState({
        styles: [defaultStyles].concat(Object(toConsumableArray["a" /* default */])(Object(external_this_wp_blockEditor_["transformStyles"])(styles)))
      });
    }
  }, {
    key: "switchToPreview",
    value: function switchToPreview() {
      this.setState({
        isPreview: true
      });
    }
  }, {
    key: "switchToHTML",
    value: function switchToHTML() {
      this.setState({
        isPreview: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes;
      var _this$state = this.state,
          isPreview = _this$state.isPreview,
          styles = _this$state.styles;
      return Object(external_this_wp_element_["createElement"])("div", {
        className: "wp-block-html"
      }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToolbarGroup"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToolbarButton"], {
        className: "components-tab-button",
        isPressed: !isPreview,
        onClick: this.switchToHTML
      }, Object(external_this_wp_element_["createElement"])("span", null, "HTML")), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToolbarButton"], {
        className: "components-tab-button",
        isPressed: isPreview,
        onClick: this.switchToPreview
      }, Object(external_this_wp_element_["createElement"])("span", null, Object(external_this_wp_i18n_["__"])('Preview'))))), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Disabled"].Consumer, null, function (isDisabled) {
        return isPreview || isDisabled ? Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SandBox"], {
          html: attributes.content,
          styles: styles
        }), !_this2.props.isSelected && Object(external_this_wp_element_["createElement"])("div", {
          className: "block-library-html__preview-overlay"
        })) : Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["PlainText"], {
          value: attributes.content,
          onChange: function onChange(content) {
            return setAttributes({
              content: content
            });
          },
          placeholder: Object(external_this_wp_i18n_["__"])('Write HTML…'),
          "aria-label": Object(external_this_wp_i18n_["__"])('HTML')
        });
      }));
    }
  }]);

  return HTMLEdit;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var html_edit = (Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select('core/block-editor'),
      getSettings = _select.getSettings;

  return {
    styles: getSettings().styles
  };
})(edit_HTMLEdit));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/html/save.js


/**
 * WordPress dependencies
 */

function html_save_save(_ref) {
  var attributes = _ref.attributes;
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["RawHTML"], null, attributes.content);
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/html/transforms.js
/**
 * WordPress dependencies
 */

var html_transforms_transforms = {
  from: [{
    type: 'block',
    blocks: ['core/code'],
    transform: function transform(_ref) {
      var content = _ref.content;
      return Object(external_this_wp_blocks_["createBlock"])('core/html', {
        content: content
      });
    }
  }]
};
/* harmony default export */ var html_transforms = (html_transforms_transforms);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/html/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


var html_metadata = {
  name: "core/html",
  category: "widgets",
  attributes: {
    content: {
      type: "string",
      source: "html"
    }
  },
  supports: {
    customClassName: false,
    className: false,
    html: false
  }
};


var html_name = html_metadata.name;

var html_settings = {
  title: Object(external_this_wp_i18n_["__"])('Custom HTML'),
  description: Object(external_this_wp_i18n_["__"])('Add custom HTML code and preview it as you edit.'),
  icon: library_html,
  keywords: [Object(external_this_wp_i18n_["__"])('embed')],
  example: {
    attributes: {
      content: '<marquee>' + Object(external_this_wp_i18n_["__"])('Welcome to the wonderful world of blocks…') + '</marquee>'
    }
  },
  edit: html_edit,
  save: html_save_save,
  transforms: html_transforms
};

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/media-and-text.js


/**
 * WordPress dependencies
 */

var mediaAndText = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M4 17h7V6H4v11zm9-10v1.5h7V7h-7zm0 5.5h7V11h-7v1.5zm0 4h7V15h-7v1.5z"
}));
/* harmony default export */ var media_and_text = (mediaAndText);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/media-text/media-container-icon.js


/**
 * WordPress dependencies
 */

/* harmony default export */ var media_container_icon = (Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
  d: "M18 2l2 4h-2l-2-4h-3l2 4h-2l-2-4h-1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2zm2 12H10V4.4L11.8 8H20z"
}), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
  d: "M14 20H4V10h3V8H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3h-2z"
}), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
  d: "M5 19h8l-1.59-2H9.24l-.84 1.1L7 16.3 5 19z"
})));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/media-text/media-container.js




/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */


/**
 * Constants
 */

var media_container_ALLOWED_MEDIA_TYPES = ['image', 'video'];
function imageFillStyles(url, focalPoint) {
  return url ? {
    backgroundImage: "url(".concat(url, ")"),
    backgroundPosition: focalPoint ? "".concat(focalPoint.x * 100, "% ").concat(focalPoint.y * 100, "%") : "50% 50%"
  } : {};
}

function ResizableBoxContainer(_ref) {
  var isSelected = _ref.isSelected,
      isStackedOnMobile = _ref.isStackedOnMobile,
      props = Object(objectWithoutProperties["a" /* default */])(_ref, ["isSelected", "isStackedOnMobile"]);

  var isMobile = Object(external_this_wp_compose_["useViewportMatch"])('small', '<');
  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ResizableBox"], Object(esm_extends["a" /* default */])({
    showHandle: isSelected && (!isMobile || !isStackedOnMobile)
  }, props));
}

function ToolbarEditButton(_ref2) {
  var mediaId = _ref2.mediaId,
      mediaUrl = _ref2.mediaUrl,
      onSelectMedia = _ref2.onSelectMedia;
  return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["MediaReplaceFlow"], {
    mediaId: mediaId,
    mediaURL: mediaUrl,
    allowedTypes: media_container_ALLOWED_MEDIA_TYPES,
    accept: "image/*,video/*",
    onSelect: onSelectMedia
  }));
}

function PlaceholderContainer(_ref3) {
  var className = _ref3.className,
      noticeOperations = _ref3.noticeOperations,
      noticeUI = _ref3.noticeUI,
      onSelectMedia = _ref3.onSelectMedia;

  var onUploadError = function onUploadError(message) {
    noticeOperations.removeAllNotices();
    noticeOperations.createErrorNotice(message);
  };

  return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["MediaPlaceholder"], {
    icon: Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockIcon"], {
      icon: media_container_icon
    }),
    labels: {
      title: Object(external_this_wp_i18n_["__"])('Media area')
    },
    className: className,
    onSelect: onSelectMedia,
    accept: "image/*,video/*",
    allowedTypes: media_container_ALLOWED_MEDIA_TYPES,
    notices: noticeUI,
    onError: onUploadError
  });
}

function MediaContainer(props) {
  var className = props.className,
      commitWidthChange = props.commitWidthChange,
      focalPoint = props.focalPoint,
      imageFill = props.imageFill,
      isSelected = props.isSelected,
      isStackedOnMobile = props.isStackedOnMobile,
      mediaAlt = props.mediaAlt,
      mediaId = props.mediaId,
      mediaPosition = props.mediaPosition,
      mediaType = props.mediaType,
      mediaUrl = props.mediaUrl,
      mediaWidth = props.mediaWidth,
      onSelectMedia = props.onSelectMedia,
      onWidthChange = props.onWidthChange;

  var _useDispatch = Object(external_this_wp_data_["useDispatch"])('core/block-editor'),
      toggleSelection = _useDispatch.toggleSelection;

  if (mediaType && mediaUrl) {
    var onResizeStart = function onResizeStart() {
      toggleSelection(false);
    };

    var onResize = function onResize(event, direction, elt) {
      onWidthChange(parseInt(elt.style.width));
    };

    var onResizeStop = function onResizeStop(event, direction, elt) {
      toggleSelection(true);
      commitWidthChange(parseInt(elt.style.width));
    };

    var enablePositions = {
      right: mediaPosition === 'left',
      left: mediaPosition === 'right'
    };
    var backgroundStyles = mediaType === 'image' && imageFill ? imageFillStyles(mediaUrl, focalPoint) : {};
    var mediaTypeRenderers = {
      image: function image() {
        return Object(external_this_wp_element_["createElement"])("img", {
          src: mediaUrl,
          alt: mediaAlt
        });
      },
      video: function video() {
        return Object(external_this_wp_element_["createElement"])("video", {
          controls: true,
          src: mediaUrl
        });
      }
    };
    return Object(external_this_wp_element_["createElement"])(ResizableBoxContainer, {
      as: "figure",
      className: classnames_default()(className, 'editor-media-container__resizer'),
      style: backgroundStyles,
      size: {
        width: mediaWidth + '%'
      },
      minWidth: "10%",
      maxWidth: "100%",
      enable: enablePositions,
      onResizeStart: onResizeStart,
      onResize: onResize,
      onResizeStop: onResizeStop,
      axis: "x",
      isSelected: isSelected,
      isStackedOnMobile: isStackedOnMobile
    }, Object(external_this_wp_element_["createElement"])(ToolbarEditButton, {
      onSelectMedia: onSelectMedia,
      mediaUrl: mediaUrl,
      mediaId: mediaId
    }), (mediaTypeRenderers[mediaType] || external_this_lodash_["noop"])());
  }

  return Object(external_this_wp_element_["createElement"])(PlaceholderContainer, props);
}

/* harmony default export */ var media_container = (Object(external_this_wp_components_["withNotices"])(MediaContainer));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/media-text/deprecated.js



function media_text_deprecated_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function media_text_deprecated_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { media_text_deprecated_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { media_text_deprecated_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


var DEFAULT_MEDIA_WIDTH = 50;

var media_text_deprecated_migrateCustomColors = function migrateCustomColors(attributes) {
  if (!attributes.customBackgroundColor) {
    return attributes;
  }

  var style = {
    color: {
      background: attributes.customBackgroundColor
    }
  };
  return media_text_deprecated_objectSpread({}, Object(external_this_lodash_["omit"])(attributes, ['customBackgroundColor']), {
    style: style
  });
};

var baseAttributes = {
  align: {
    type: 'string',
    default: 'wide'
  },
  backgroundColor: {
    type: 'string'
  },
  mediaAlt: {
    type: 'string',
    source: 'attribute',
    selector: 'figure img',
    attribute: 'alt',
    default: ''
  },
  mediaPosition: {
    type: 'string',
    default: 'left'
  },
  mediaId: {
    type: 'number'
  },
  mediaType: {
    type: 'string'
  },
  mediaWidth: {
    type: 'number',
    default: 50
  },
  isStackedOnMobile: {
    type: 'boolean',
    default: false
  }
};
/* harmony default export */ var media_text_deprecated = ([{
  attributes: media_text_deprecated_objectSpread({}, baseAttributes, {
    customBackgroundColor: {
      type: 'string'
    },
    mediaLink: {
      type: 'string'
    },
    linkDestination: {
      type: 'string'
    },
    linkTarget: {
      type: 'string',
      source: 'attribute',
      selector: 'figure a',
      attribute: 'target'
    },
    href: {
      type: 'string',
      source: 'attribute',
      selector: 'figure a',
      attribute: 'href'
    },
    rel: {
      type: 'string',
      source: 'attribute',
      selector: 'figure a',
      attribute: 'rel'
    },
    linkClass: {
      type: 'string',
      source: 'attribute',
      selector: 'figure a',
      attribute: 'class'
    },
    verticalAlignment: {
      type: 'string'
    },
    imageFill: {
      type: 'boolean'
    },
    focalPoint: {
      type: 'object'
    }
  }),
  migrate: media_text_deprecated_migrateCustomColors,
  save: function save(_ref) {
    var _classnames;

    var attributes = _ref.attributes;
    var backgroundColor = attributes.backgroundColor,
        customBackgroundColor = attributes.customBackgroundColor,
        isStackedOnMobile = attributes.isStackedOnMobile,
        mediaAlt = attributes.mediaAlt,
        mediaPosition = attributes.mediaPosition,
        mediaType = attributes.mediaType,
        mediaUrl = attributes.mediaUrl,
        mediaWidth = attributes.mediaWidth,
        mediaId = attributes.mediaId,
        verticalAlignment = attributes.verticalAlignment,
        imageFill = attributes.imageFill,
        focalPoint = attributes.focalPoint,
        linkClass = attributes.linkClass,
        href = attributes.href,
        linkTarget = attributes.linkTarget,
        rel = attributes.rel;
    var newRel = Object(external_this_lodash_["isEmpty"])(rel) ? undefined : rel;

    var _image = Object(external_this_wp_element_["createElement"])("img", {
      src: mediaUrl,
      alt: mediaAlt,
      className: mediaId && mediaType === 'image' ? "wp-image-".concat(mediaId) : null
    });

    if (href) {
      _image = Object(external_this_wp_element_["createElement"])("a", {
        className: linkClass,
        href: href,
        target: linkTarget,
        rel: newRel
      }, _image);
    }

    var mediaTypeRenders = {
      image: function image() {
        return _image;
      },
      video: function video() {
        return Object(external_this_wp_element_["createElement"])("video", {
          controls: true,
          src: mediaUrl
        });
      }
    };
    var backgroundClass = Object(external_this_wp_blockEditor_["getColorClassName"])('background-color', backgroundColor);
    var className = classnames_default()((_classnames = {
      'has-media-on-the-right': 'right' === mediaPosition,
      'has-background': backgroundClass || customBackgroundColor
    }, Object(defineProperty["a" /* default */])(_classnames, backgroundClass, backgroundClass), Object(defineProperty["a" /* default */])(_classnames, 'is-stacked-on-mobile', isStackedOnMobile), Object(defineProperty["a" /* default */])(_classnames, "is-vertically-aligned-".concat(verticalAlignment), verticalAlignment), Object(defineProperty["a" /* default */])(_classnames, 'is-image-fill', imageFill), _classnames));
    var backgroundStyles = imageFill ? imageFillStyles(mediaUrl, focalPoint) : {};
    var gridTemplateColumns;

    if (mediaWidth !== DEFAULT_MEDIA_WIDTH) {
      gridTemplateColumns = 'right' === mediaPosition ? "auto ".concat(mediaWidth, "%") : "".concat(mediaWidth, "% auto");
    }

    var style = {
      backgroundColor: backgroundClass ? undefined : customBackgroundColor,
      gridTemplateColumns: gridTemplateColumns
    };
    return Object(external_this_wp_element_["createElement"])("div", {
      className: className,
      style: style
    }, Object(external_this_wp_element_["createElement"])("figure", {
      className: "wp-block-media-text__media",
      style: backgroundStyles
    }, (mediaTypeRenders[mediaType] || external_this_lodash_["noop"])()), Object(external_this_wp_element_["createElement"])("div", {
      className: "wp-block-media-text__content"
    }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InnerBlocks"].Content, null)));
  }
}, {
  attributes: media_text_deprecated_objectSpread({}, baseAttributes, {
    customBackgroundColor: {
      type: 'string'
    },
    mediaUrl: {
      type: 'string',
      source: 'attribute',
      selector: 'figure video,figure img',
      attribute: 'src'
    },
    verticalAlignment: {
      type: 'string'
    },
    imageFill: {
      type: 'boolean'
    },
    focalPoint: {
      type: 'object'
    }
  }),
  migrate: media_text_deprecated_migrateCustomColors,
  save: function save(_ref2) {
    var _classnames2;

    var attributes = _ref2.attributes;
    var backgroundColor = attributes.backgroundColor,
        customBackgroundColor = attributes.customBackgroundColor,
        isStackedOnMobile = attributes.isStackedOnMobile,
        mediaAlt = attributes.mediaAlt,
        mediaPosition = attributes.mediaPosition,
        mediaType = attributes.mediaType,
        mediaUrl = attributes.mediaUrl,
        mediaWidth = attributes.mediaWidth,
        mediaId = attributes.mediaId,
        verticalAlignment = attributes.verticalAlignment,
        imageFill = attributes.imageFill,
        focalPoint = attributes.focalPoint;
    var mediaTypeRenders = {
      image: function image() {
        return Object(external_this_wp_element_["createElement"])("img", {
          src: mediaUrl,
          alt: mediaAlt,
          className: mediaId && mediaType === 'image' ? "wp-image-".concat(mediaId) : null
        });
      },
      video: function video() {
        return Object(external_this_wp_element_["createElement"])("video", {
          controls: true,
          src: mediaUrl
        });
      }
    };
    var backgroundClass = Object(external_this_wp_blockEditor_["getColorClassName"])('background-color', backgroundColor);
    var className = classnames_default()((_classnames2 = {
      'has-media-on-the-right': 'right' === mediaPosition
    }, Object(defineProperty["a" /* default */])(_classnames2, backgroundClass, backgroundClass), Object(defineProperty["a" /* default */])(_classnames2, 'is-stacked-on-mobile', isStackedOnMobile), Object(defineProperty["a" /* default */])(_classnames2, "is-vertically-aligned-".concat(verticalAlignment), verticalAlignment), Object(defineProperty["a" /* default */])(_classnames2, 'is-image-fill', imageFill), _classnames2));
    var backgroundStyles = imageFill ? imageFillStyles(mediaUrl, focalPoint) : {};
    var gridTemplateColumns;

    if (mediaWidth !== DEFAULT_MEDIA_WIDTH) {
      gridTemplateColumns = 'right' === mediaPosition ? "auto ".concat(mediaWidth, "%") : "".concat(mediaWidth, "% auto");
    }

    var style = {
      backgroundColor: backgroundClass ? undefined : customBackgroundColor,
      gridTemplateColumns: gridTemplateColumns
    };
    return Object(external_this_wp_element_["createElement"])("div", {
      className: className,
      style: style
    }, Object(external_this_wp_element_["createElement"])("figure", {
      className: "wp-block-media-text__media",
      style: backgroundStyles
    }, (mediaTypeRenders[mediaType] || external_this_lodash_["noop"])()), Object(external_this_wp_element_["createElement"])("div", {
      className: "wp-block-media-text__content"
    }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InnerBlocks"].Content, null)));
  }
}, {
  attributes: media_text_deprecated_objectSpread({}, baseAttributes, {
    customBackgroundColor: {
      type: 'string'
    },
    mediaUrl: {
      type: 'string',
      source: 'attribute',
      selector: 'figure video,figure img',
      attribute: 'src'
    }
  }),
  save: function save(_ref3) {
    var _classnames3;

    var attributes = _ref3.attributes;
    var backgroundColor = attributes.backgroundColor,
        customBackgroundColor = attributes.customBackgroundColor,
        isStackedOnMobile = attributes.isStackedOnMobile,
        mediaAlt = attributes.mediaAlt,
        mediaPosition = attributes.mediaPosition,
        mediaType = attributes.mediaType,
        mediaUrl = attributes.mediaUrl,
        mediaWidth = attributes.mediaWidth;
    var mediaTypeRenders = {
      image: function image() {
        return Object(external_this_wp_element_["createElement"])("img", {
          src: mediaUrl,
          alt: mediaAlt
        });
      },
      video: function video() {
        return Object(external_this_wp_element_["createElement"])("video", {
          controls: true,
          src: mediaUrl
        });
      }
    };
    var backgroundClass = Object(external_this_wp_blockEditor_["getColorClassName"])('background-color', backgroundColor);
    var className = classnames_default()((_classnames3 = {
      'has-media-on-the-right': 'right' === mediaPosition
    }, Object(defineProperty["a" /* default */])(_classnames3, backgroundClass, backgroundClass), Object(defineProperty["a" /* default */])(_classnames3, 'is-stacked-on-mobile', isStackedOnMobile), _classnames3));
    var gridTemplateColumns;

    if (mediaWidth !== DEFAULT_MEDIA_WIDTH) {
      gridTemplateColumns = 'right' === mediaPosition ? "auto ".concat(mediaWidth, "%") : "".concat(mediaWidth, "% auto");
    }

    var style = {
      backgroundColor: backgroundClass ? undefined : customBackgroundColor,
      gridTemplateColumns: gridTemplateColumns
    };
    return Object(external_this_wp_element_["createElement"])("div", {
      className: className,
      style: style
    }, Object(external_this_wp_element_["createElement"])("figure", {
      className: "wp-block-media-text__media"
    }, (mediaTypeRenders[mediaType] || external_this_lodash_["noop"])()), Object(external_this_wp_element_["createElement"])("div", {
      className: "wp-block-media-text__content"
    }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InnerBlocks"].Content, null)));
  }
}]);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/pull-left.js


/**
 * WordPress dependencies
 */

var pullLeft = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M4 18h6V6H4v12zm9-10v1.5h7V8h-7zm0 7.5h7V14h-7v1.5z"
}));
/* harmony default export */ var pull_left = (pullLeft);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/pull-right.js


/**
 * WordPress dependencies
 */

var pullRight = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M14 6v12h6V6h-6zM4 9.5h7V8H4v1.5zm0 6h7V14H4v1.5z"
}));
/* harmony default export */ var pull_right = (pullRight);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/media-text/edit.js





/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */


/**
 * Constants
 */

var TEMPLATE = [['core/paragraph', {
  fontSize: 'large',
  placeholder: Object(external_this_wp_i18n_["_x"])('Content…', 'content placeholder')
}]]; // this limits the resize to a safe zone to avoid making broken layouts

var WIDTH_CONSTRAINT_PERCENTAGE = 15;

var applyWidthConstraints = function applyWidthConstraints(width) {
  return Math.max(WIDTH_CONSTRAINT_PERCENTAGE, Math.min(width, 100 - WIDTH_CONSTRAINT_PERCENTAGE));
};

var edit_LINK_DESTINATION_MEDIA = 'media';
var edit_LINK_DESTINATION_ATTACHMENT = 'attachment';

function edit_attributesFromMedia(_ref) {
  var _ref$attributes = _ref.attributes,
      linkDestination = _ref$attributes.linkDestination,
      href = _ref$attributes.href,
      setAttributes = _ref.setAttributes;
  return function (media) {
    var mediaType;
    var src; // for media selections originated from a file upload.

    if (media.media_type) {
      if (media.media_type === 'image') {
        mediaType = 'image';
      } else {
        // only images and videos are accepted so if the media_type is not an image we can assume it is a video.
        // video contain the media type of 'file' in the object returned from the rest api.
        mediaType = 'video';
      }
    } else {
      // for media selections originated from existing files in the media library.
      mediaType = media.type;
    }

    if (mediaType === 'image') {
      var _media$sizes, _media$sizes$large, _media$media_details, _media$media_details$, _media$media_details$2;

      // Try the "large" size URL, falling back to the "full" size URL below.
      src = ((_media$sizes = media.sizes) === null || _media$sizes === void 0 ? void 0 : (_media$sizes$large = _media$sizes.large) === null || _media$sizes$large === void 0 ? void 0 : _media$sizes$large.url) || ( // eslint-disable-next-line camelcase
      (_media$media_details = media.media_details) === null || _media$media_details === void 0 ? void 0 : (_media$media_details$ = _media$media_details.sizes) === null || _media$media_details$ === void 0 ? void 0 : (_media$media_details$2 = _media$media_details$.large) === null || _media$media_details$2 === void 0 ? void 0 : _media$media_details$2.source_url);
    }

    var newHref = href;

    if (linkDestination === edit_LINK_DESTINATION_MEDIA) {
      // Update the media link.
      newHref = media.url;
    } // Check if the image is linked to the attachment page.


    if (linkDestination === edit_LINK_DESTINATION_ATTACHMENT) {
      // Update the media link.
      newHref = media.link;
    }

    setAttributes({
      mediaAlt: media.alt,
      mediaId: media.id,
      mediaType: mediaType,
      mediaUrl: src || media.url,
      mediaLink: media.link || undefined,
      href: newHref,
      focalPoint: undefined
    });
  };
}

function MediaTextEdit(_ref2) {
  var _classnames;

  var attributes = _ref2.attributes,
      isSelected = _ref2.isSelected,
      setAttributes = _ref2.setAttributes;
  var focalPoint = attributes.focalPoint,
      href = attributes.href,
      imageFill = attributes.imageFill,
      isStackedOnMobile = attributes.isStackedOnMobile,
      linkClass = attributes.linkClass,
      linkDestination = attributes.linkDestination,
      linkTarget = attributes.linkTarget,
      mediaAlt = attributes.mediaAlt,
      mediaId = attributes.mediaId,
      mediaPosition = attributes.mediaPosition,
      mediaType = attributes.mediaType,
      mediaUrl = attributes.mediaUrl,
      mediaWidth = attributes.mediaWidth,
      rel = attributes.rel,
      verticalAlignment = attributes.verticalAlignment;
  var image = Object(external_this_wp_data_["useSelect"])(function (select) {
    return mediaId && isSelected ? select('core').getMedia(mediaId) : null;
  }, [isSelected, mediaId]);

  var _useState = Object(external_this_wp_element_["useState"])(null),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      temporaryMediaWidth = _useState2[0],
      setTemporaryMediaWidth = _useState2[1];

  var onSelectMedia = edit_attributesFromMedia({
    attributes: attributes,
    setAttributes: setAttributes
  });

  var onSetHref = function onSetHref(props) {
    setAttributes(props);
  };

  var onWidthChange = function onWidthChange(width) {
    setTemporaryMediaWidth(applyWidthConstraints(width));
  };

  var commitWidthChange = function commitWidthChange(width) {
    setAttributes({
      mediaWidth: applyWidthConstraints(width)
    });
    setTemporaryMediaWidth(applyWidthConstraints(width));
  };

  var classNames = classnames_default()((_classnames = {
    'has-media-on-the-right': 'right' === mediaPosition,
    'is-selected': isSelected,
    'is-stacked-on-mobile': isStackedOnMobile
  }, Object(defineProperty["a" /* default */])(_classnames, "is-vertically-aligned-".concat(verticalAlignment), verticalAlignment), Object(defineProperty["a" /* default */])(_classnames, 'is-image-fill', imageFill), _classnames));
  var widthString = "".concat(temporaryMediaWidth || mediaWidth, "%");
  var gridTemplateColumns = 'right' === mediaPosition ? "1fr ".concat(widthString) : "".concat(widthString, " 1fr");
  var style = {
    gridTemplateColumns: gridTemplateColumns,
    msGridColumns: gridTemplateColumns
  };
  var toolbarControls = [{
    icon: pull_left,
    title: Object(external_this_wp_i18n_["__"])('Show media on left'),
    isActive: mediaPosition === 'left',
    onClick: function onClick() {
      return setAttributes({
        mediaPosition: 'left'
      });
    }
  }, {
    icon: pull_right,
    title: Object(external_this_wp_i18n_["__"])('Show media on right'),
    isActive: mediaPosition === 'right',
    onClick: function onClick() {
      return setAttributes({
        mediaPosition: 'right'
      });
    }
  }];

  var onMediaAltChange = function onMediaAltChange(newMediaAlt) {
    setAttributes({
      mediaAlt: newMediaAlt
    });
  };

  var onVerticalAlignmentChange = function onVerticalAlignmentChange(alignment) {
    setAttributes({
      verticalAlignment: alignment
    });
  };

  var mediaTextGeneralSettings = Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
    title: Object(external_this_wp_i18n_["__"])('Media & Text settings')
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
    label: Object(external_this_wp_i18n_["__"])('Stack on mobile'),
    checked: isStackedOnMobile,
    onChange: function onChange() {
      return setAttributes({
        isStackedOnMobile: !isStackedOnMobile
      });
    }
  }), mediaType === 'image' && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
    label: Object(external_this_wp_i18n_["__"])('Crop image to fill entire column'),
    checked: imageFill,
    onChange: function onChange() {
      return setAttributes({
        imageFill: !imageFill
      });
    }
  }), imageFill && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["FocalPointPicker"], {
    label: Object(external_this_wp_i18n_["__"])('Focal point picker'),
    url: mediaUrl,
    value: focalPoint,
    onChange: function onChange(value) {
      return setAttributes({
        focalPoint: value
      });
    }
  }), mediaType === 'image' && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["TextareaControl"], {
    label: Object(external_this_wp_i18n_["__"])('Alt text (alternative text)'),
    value: mediaAlt,
    onChange: onMediaAltChange,
    help: Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ExternalLink"], {
      href: "https://www.w3.org/WAI/tutorials/images/decision-tree"
    }, Object(external_this_wp_i18n_["__"])('Describe the purpose of the image')), Object(external_this_wp_i18n_["__"])('Leave empty if the image is purely decorative.'))
  }));
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InspectorControls"], null, mediaTextGeneralSettings), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToolbarGroup"], {
    controls: toolbarControls
  }), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockVerticalAlignmentToolbar"], {
    onChange: onVerticalAlignmentChange,
    value: verticalAlignment
  }), mediaType === 'image' && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToolbarGroup"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["__experimentalImageURLInputUI"], {
    url: href || '',
    onChangeUrl: onSetHref,
    linkDestination: linkDestination,
    mediaType: mediaType,
    mediaUrl: image && image.source_url,
    mediaLink: image && image.link,
    linkTarget: linkTarget,
    linkClass: linkClass,
    rel: rel
  }))), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["__experimentalBlock"].div, {
    className: classNames,
    style: style
  }, Object(external_this_wp_element_["createElement"])(media_container, Object(esm_extends["a" /* default */])({
    className: "wp-block-media-text__media",
    onSelectMedia: onSelectMedia,
    onWidthChange: onWidthChange,
    commitWidthChange: commitWidthChange
  }, {
    focalPoint: focalPoint,
    imageFill: imageFill,
    isSelected: isSelected,
    isStackedOnMobile: isStackedOnMobile,
    mediaAlt: mediaAlt,
    mediaId: mediaId,
    mediaPosition: mediaPosition,
    mediaType: mediaType,
    mediaUrl: mediaUrl,
    mediaWidth: mediaWidth
  })), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InnerBlocks"], {
    __experimentalTagName: "div",
    __experimentalPassedProps: {
      className: 'wp-block-media-text__content'
    },
    template: TEMPLATE,
    templateInsertUpdatesSelection: false
  })));
}

/* harmony default export */ var media_text_edit = (MediaTextEdit);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/media-text/save.js



/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


var save_DEFAULT_MEDIA_WIDTH = 50;
function media_text_save_save(_ref) {
  var _classnames;

  var attributes = _ref.attributes;
  var isStackedOnMobile = attributes.isStackedOnMobile,
      mediaAlt = attributes.mediaAlt,
      mediaPosition = attributes.mediaPosition,
      mediaType = attributes.mediaType,
      mediaUrl = attributes.mediaUrl,
      mediaWidth = attributes.mediaWidth,
      mediaId = attributes.mediaId,
      verticalAlignment = attributes.verticalAlignment,
      imageFill = attributes.imageFill,
      focalPoint = attributes.focalPoint,
      linkClass = attributes.linkClass,
      href = attributes.href,
      linkTarget = attributes.linkTarget,
      rel = attributes.rel;
  var newRel = Object(external_this_lodash_["isEmpty"])(rel) ? undefined : rel;

  var _image = Object(external_this_wp_element_["createElement"])("img", {
    src: mediaUrl,
    alt: mediaAlt,
    className: mediaId && mediaType === 'image' ? "wp-image-".concat(mediaId) : null
  });

  if (href) {
    _image = Object(external_this_wp_element_["createElement"])("a", {
      className: linkClass,
      href: href,
      target: linkTarget,
      rel: newRel
    }, _image);
  }

  var mediaTypeRenders = {
    image: function image() {
      return _image;
    },
    video: function video() {
      return Object(external_this_wp_element_["createElement"])("video", {
        controls: true,
        src: mediaUrl
      });
    }
  };
  var className = classnames_default()((_classnames = {
    'has-media-on-the-right': 'right' === mediaPosition,
    'is-stacked-on-mobile': isStackedOnMobile
  }, Object(defineProperty["a" /* default */])(_classnames, "is-vertically-aligned-".concat(verticalAlignment), verticalAlignment), Object(defineProperty["a" /* default */])(_classnames, 'is-image-fill', imageFill), _classnames));
  var backgroundStyles = imageFill ? imageFillStyles(mediaUrl, focalPoint) : {};
  var gridTemplateColumns;

  if (mediaWidth !== save_DEFAULT_MEDIA_WIDTH) {
    gridTemplateColumns = 'right' === mediaPosition ? "auto ".concat(mediaWidth, "%") : "".concat(mediaWidth, "% auto");
  }

  var style = {
    gridTemplateColumns: gridTemplateColumns
  };
  return Object(external_this_wp_element_["createElement"])("div", {
    className: className,
    style: style
  }, Object(external_this_wp_element_["createElement"])("figure", {
    className: "wp-block-media-text__media",
    style: backgroundStyles
  }, (mediaTypeRenders[mediaType] || external_this_lodash_["noop"])()), Object(external_this_wp_element_["createElement"])("div", {
    className: "wp-block-media-text__content"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InnerBlocks"].Content, null)));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/media-text/transforms.js
/**
 * WordPress dependencies
 */

var media_text_transforms_transforms = {
  from: [{
    type: 'block',
    blocks: ['core/image'],
    transform: function transform(_ref) {
      var alt = _ref.alt,
          url = _ref.url,
          id = _ref.id;
      return Object(external_this_wp_blocks_["createBlock"])('core/media-text', {
        mediaAlt: alt,
        mediaId: id,
        mediaUrl: url,
        mediaType: 'image'
      });
    }
  }, {
    type: 'block',
    blocks: ['core/video'],
    transform: function transform(_ref2) {
      var src = _ref2.src,
          id = _ref2.id;
      return Object(external_this_wp_blocks_["createBlock"])('core/media-text', {
        mediaId: id,
        mediaUrl: src,
        mediaType: 'video'
      });
    }
  }],
  to: [{
    type: 'block',
    blocks: ['core/image'],
    isMatch: function isMatch(_ref3) {
      var mediaType = _ref3.mediaType,
          mediaUrl = _ref3.mediaUrl;
      return !mediaUrl || mediaType === 'image';
    },
    transform: function transform(_ref4) {
      var mediaAlt = _ref4.mediaAlt,
          mediaId = _ref4.mediaId,
          mediaUrl = _ref4.mediaUrl;
      return Object(external_this_wp_blocks_["createBlock"])('core/image', {
        alt: mediaAlt,
        id: mediaId,
        url: mediaUrl
      });
    }
  }, {
    type: 'block',
    blocks: ['core/video'],
    isMatch: function isMatch(_ref5) {
      var mediaType = _ref5.mediaType,
          mediaUrl = _ref5.mediaUrl;
      return !mediaUrl || mediaType === 'video';
    },
    transform: function transform(_ref6) {
      var mediaId = _ref6.mediaId,
          mediaUrl = _ref6.mediaUrl;
      return Object(external_this_wp_blocks_["createBlock"])('core/video', {
        id: mediaId,
        src: mediaUrl
      });
    }
  }]
};
/* harmony default export */ var media_text_transforms = (media_text_transforms_transforms);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/media-text/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



var media_text_metadata = {
  name: "core/media-text",
  category: "media",
  attributes: {
    align: {
      type: "string",
      "default": "wide"
    },
    mediaAlt: {
      type: "string",
      source: "attribute",
      selector: "figure img",
      attribute: "alt",
      "default": ""
    },
    mediaPosition: {
      type: "string",
      "default": "left"
    },
    mediaId: {
      type: "number"
    },
    mediaUrl: {
      type: "string",
      source: "attribute",
      selector: "figure video,figure img",
      attribute: "src"
    },
    mediaLink: {
      type: "string"
    },
    linkDestination: {
      type: "string"
    },
    linkTarget: {
      type: "string",
      source: "attribute",
      selector: "figure a",
      attribute: "target"
    },
    href: {
      type: "string",
      source: "attribute",
      selector: "figure a",
      attribute: "href"
    },
    rel: {
      type: "string",
      source: "attribute",
      selector: "figure a",
      attribute: "rel"
    },
    linkClass: {
      type: "string",
      source: "attribute",
      selector: "figure a",
      attribute: "class"
    },
    mediaType: {
      type: "string"
    },
    mediaWidth: {
      type: "number",
      "default": 50
    },
    isStackedOnMobile: {
      type: "boolean",
      "default": true
    },
    verticalAlignment: {
      type: "string"
    },
    imageFill: {
      type: "boolean"
    },
    focalPoint: {
      type: "object"
    }
  },
  supports: {
    align: ["wide", "full"],
    html: false,
    lightBlockWrapper: true,
    __experimentalColor: {
      gradients: true,
      linkColor: true
    }
  }
};


var media_text_name = media_text_metadata.name;

var media_text_settings = {
  title: Object(external_this_wp_i18n_["__"])('Media & Text'),
  description: Object(external_this_wp_i18n_["__"])('Set media and words side-by-side for a richer layout.'),
  icon: media_and_text,
  keywords: [Object(external_this_wp_i18n_["__"])('image'), Object(external_this_wp_i18n_["__"])('video')],
  example: {
    attributes: {
      mediaType: 'image',
      mediaUrl: 'https://s.w.org/images/core/5.3/Biologia_Centrali-Americana_-_Cantorchilus_semibadius_1902.jpg'
    },
    innerBlocks: [{
      name: 'core/paragraph',
      attributes: {
        content: Object(external_this_wp_i18n_["__"])('The wren<br>Earns his living<br>Noiselessly.')
      }
    }, {
      name: 'core/paragraph',
      attributes: {
        content: Object(external_this_wp_i18n_["__"])('— Kobayashi Issa (一茶)')
      }
    }]
  },
  transforms: media_text_transforms,
  edit: media_text_edit,
  save: media_text_save_save,
  deprecated: media_text_deprecated
};

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/comment.js


/**
 * WordPress dependencies
 */

var comment = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M18 4H6c-1.1 0-2 .9-2 2v12.9c0 .6.5 1.1 1.1 1.1.3 0 .5-.1.8-.3L8.5 17H18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 11c0 .3-.2.5-.5.5H7.9l-2.4 2.4V6c0-.3.2-.5.5-.5h12c.3 0 .5.2.5.5v9z"
}));
/* harmony default export */ var library_comment = (comment);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/latest-comments/edit.js









function latest_comments_edit_createSuper(Derived) { return function () { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (latest_comments_edit_isNativeReflectConstruct()) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function latest_comments_edit_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * WordPress dependencies
 */





/**
 * Minimum number of comments a user can show using this block.
 *
 * @type {number}
 */

var MIN_COMMENTS = 1;
/**
 * Maximum number of comments a user can show using this block.
 *
 * @type {number}
 */

var MAX_COMMENTS = 100;

var edit_LatestComments = /*#__PURE__*/function (_Component) {
  Object(inherits["a" /* default */])(LatestComments, _Component);

  var _super = latest_comments_edit_createSuper(LatestComments);

  function LatestComments() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, LatestComments);

    _this = _super.apply(this, arguments);
    _this.setCommentsToShow = _this.setCommentsToShow.bind(Object(assertThisInitialized["a" /* default */])(_this)); // Create toggles for each attribute; we create them here rather than
    // passing `this.createToggleAttribute( 'displayAvatar' )` directly to
    // `onChange` to avoid re-renders.

    _this.toggleDisplayAvatar = _this.createToggleAttribute('displayAvatar');
    _this.toggleDisplayDate = _this.createToggleAttribute('displayDate');
    _this.toggleDisplayExcerpt = _this.createToggleAttribute('displayExcerpt');
    return _this;
  }

  Object(createClass["a" /* default */])(LatestComments, [{
    key: "createToggleAttribute",
    value: function createToggleAttribute(propName) {
      var _this2 = this;

      return function () {
        var value = _this2.props.attributes[propName];
        var setAttributes = _this2.props.setAttributes;
        setAttributes(Object(defineProperty["a" /* default */])({}, propName, !value));
      };
    }
  }, {
    key: "setCommentsToShow",
    value: function setCommentsToShow(commentsToShow) {
      this.props.setAttributes({
        commentsToShow: commentsToShow
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$attribute = this.props.attributes,
          commentsToShow = _this$props$attribute.commentsToShow,
          displayAvatar = _this$props$attribute.displayAvatar,
          displayDate = _this$props$attribute.displayDate,
          displayExcerpt = _this$props$attribute.displayExcerpt;
      return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InspectorControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
        title: Object(external_this_wp_i18n_["__"])('Latest comments settings')
      }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
        label: Object(external_this_wp_i18n_["__"])('Display avatar'),
        checked: displayAvatar,
        onChange: this.toggleDisplayAvatar
      }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
        label: Object(external_this_wp_i18n_["__"])('Display date'),
        checked: displayDate,
        onChange: this.toggleDisplayDate
      }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
        label: Object(external_this_wp_i18n_["__"])('Display excerpt'),
        checked: displayExcerpt,
        onChange: this.toggleDisplayExcerpt
      }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["RangeControl"], {
        label: Object(external_this_wp_i18n_["__"])('Number of comments'),
        value: commentsToShow,
        onChange: this.setCommentsToShow,
        min: MIN_COMMENTS,
        max: MAX_COMMENTS,
        required: true
      }))), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Disabled"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_serverSideRender_default.a, {
        block: "core/latest-comments",
        attributes: this.props.attributes
      })));
    }
  }]);

  return LatestComments;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var latest_comments_edit = (edit_LatestComments);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/latest-comments/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */

var latest_comments_metadata = {
  name: "core/latest-comments",
  category: "widgets",
  attributes: {
    align: {
      type: "string",
      "enum": ["left", "center", "right", "wide", "full"]
    },
    className: {
      type: "string"
    },
    commentsToShow: {
      type: "number",
      "default": 5,
      minimum: 1,
      maximum: 100
    },
    displayAvatar: {
      type: "boolean",
      "default": true
    },
    displayDate: {
      type: "boolean",
      "default": true
    },
    displayExcerpt: {
      type: "boolean",
      "default": true
    }
  },
  supports: {
    align: true,
    html: false
  }
};

var latest_comments_name = latest_comments_metadata.name;

var latest_comments_settings = {
  title: Object(external_this_wp_i18n_["__"])('Latest Comments'),
  description: Object(external_this_wp_i18n_["__"])('Display a list of your most recent comments.'),
  icon: library_comment,
  keywords: [Object(external_this_wp_i18n_["__"])('recent comments')],
  example: {},
  edit: latest_comments_edit
};

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/post-list.js


/**
 * WordPress dependencies
 */

var postList = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h12c.3 0 .5.2.5.5v12zM7 11h2V9H7v2zm0 4h2v-2H7v2zm3-4h7V9h-7v2zm0 4h7v-2h-7v2z"
}));
/* harmony default export */ var post_list = (postList);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/latest-posts/deprecated.js


function latest_posts_deprecated_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function latest_posts_deprecated_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { latest_posts_deprecated_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { latest_posts_deprecated_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Internal dependencies
 */
var deprecated_metadata = {
  name: "core/latest-posts",
  category: "widgets",
  attributes: {
    align: {
      type: "string",
      "enum": ["left", "center", "right", "wide", "full"]
    },
    className: {
      type: "string"
    },
    categories: {
      type: "array",
      items: {
        type: "object"
      }
    },
    selectedAuthor: {
      type: "number"
    },
    postsToShow: {
      type: "number",
      "default": 5
    },
    displayPostContent: {
      type: "boolean",
      "default": false
    },
    displayPostContentRadio: {
      type: "string",
      "default": "excerpt"
    },
    excerptLength: {
      type: "number",
      "default": 55
    },
    displayAuthor: {
      type: "boolean",
      "default": false
    },
    displayPostDate: {
      type: "boolean",
      "default": false
    },
    postLayout: {
      type: "string",
      "default": "list"
    },
    columns: {
      type: "number",
      "default": 3
    },
    order: {
      type: "string",
      "default": "desc"
    },
    orderBy: {
      type: "string",
      "default": "date"
    },
    displayFeaturedImage: {
      type: "boolean",
      "default": false
    },
    featuredImageAlign: {
      type: "string",
      "enum": ["left", "center", "right"]
    },
    featuredImageSizeSlug: {
      type: "string",
      "default": "thumbnail"
    },
    featuredImageSizeWidth: {
      type: "number",
      "default": null
    },
    featuredImageSizeHeight: {
      type: "number",
      "default": null
    }
  },
  supports: {
    align: true,
    html: false
  }
};
var deprecated_attributes = deprecated_metadata.attributes;
/* harmony default export */ var latest_posts_deprecated = ([{
  attributes: latest_posts_deprecated_objectSpread({}, deprecated_attributes, {
    categories: {
      type: 'string'
    }
  }),
  supports: {
    align: true,
    html: false
  },
  migrate: function migrate(oldAttributes) {
    // This needs the full category object, not just the ID.
    return latest_posts_deprecated_objectSpread({}, oldAttributes, {
      categories: [{
        id: Number(oldAttributes.categories)
      }]
    });
  },
  isEligible: function isEligible(_ref) {
    var categories = _ref.categories;
    return categories && 'string' === typeof categories;
  },
  save: function save() {
    return null;
  }
}]);

// EXTERNAL MODULE: external {"this":["wp","date"]}
var external_this_wp_date_ = __webpack_require__(68);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/list.js


/**
 * WordPress dependencies
 */

var list = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M4 4v1.5h16V4H4zm8 8.5h8V11h-8v1.5zM4 20h16v-1.5H4V20zm4-8c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z"
}));
/* harmony default export */ var library_list = (list);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/grid.js
var grid = __webpack_require__(298);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/latest-posts/constants.js
var MIN_EXCERPT_LENGTH = 10;
var MAX_EXCERPT_LENGTH = 100;
var MAX_POSTS_COLUMNS = 6;

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/latest-posts/edit.js









function latest_posts_edit_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function latest_posts_edit_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { latest_posts_edit_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { latest_posts_edit_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function latest_posts_edit_createSuper(Derived) { return function () { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (latest_posts_edit_isNativeReflectConstruct()) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function latest_posts_edit_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */










/**
 * Internal dependencies
 */


/**
 * Module Constants
 */

var CATEGORIES_LIST_QUERY = {
  per_page: -1
};
var USERS_LIST_QUERY = {
  per_page: -1
};

var edit_LatestPostsEdit = /*#__PURE__*/function (_Component) {
  Object(inherits["a" /* default */])(LatestPostsEdit, _Component);

  var _super = latest_posts_edit_createSuper(LatestPostsEdit);

  function LatestPostsEdit() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, LatestPostsEdit);

    _this = _super.apply(this, arguments);
    _this.state = {
      categoriesList: [],
      authorList: []
    };
    return _this;
  }

  Object(createClass["a" /* default */])(LatestPostsEdit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.isStillMounted = true;
      this.fetchRequest = external_this_wp_apiFetch_default()({
        path: Object(external_this_wp_url_["addQueryArgs"])("/wp/v2/categories", CATEGORIES_LIST_QUERY)
      }).then(function (categoriesList) {
        if (_this2.isStillMounted) {
          _this2.setState({
            categoriesList: categoriesList
          });
        }
      }).catch(function () {
        if (_this2.isStillMounted) {
          _this2.setState({
            categoriesList: []
          });
        }
      });
      this.fetchRequest = external_this_wp_apiFetch_default()({
        path: Object(external_this_wp_url_["addQueryArgs"])("/wp/v2/users", USERS_LIST_QUERY)
      }).then(function (authorList) {
        if (_this2.isStillMounted) {
          _this2.setState({
            authorList: authorList
          });
        }
      }).catch(function () {
        if (_this2.isStillMounted) {
          _this2.setState({
            authorList: []
          });
        }
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isStillMounted = false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes,
          imageSizeOptions = _this$props.imageSizeOptions,
          latestPosts = _this$props.latestPosts,
          defaultImageWidth = _this$props.defaultImageWidth,
          defaultImageHeight = _this$props.defaultImageHeight;
      var _this$state = this.state,
          categoriesList = _this$state.categoriesList,
          authorList = _this$state.authorList;
      var displayFeaturedImage = attributes.displayFeaturedImage,
          displayPostContentRadio = attributes.displayPostContentRadio,
          displayPostContent = attributes.displayPostContent,
          displayPostDate = attributes.displayPostDate,
          displayAuthor = attributes.displayAuthor,
          postLayout = attributes.postLayout,
          columns = attributes.columns,
          order = attributes.order,
          orderBy = attributes.orderBy,
          categories = attributes.categories,
          selectedAuthor = attributes.selectedAuthor,
          postsToShow = attributes.postsToShow,
          excerptLength = attributes.excerptLength,
          featuredImageAlign = attributes.featuredImageAlign,
          featuredImageSizeSlug = attributes.featuredImageSizeSlug,
          featuredImageSizeWidth = attributes.featuredImageSizeWidth,
          featuredImageSizeHeight = attributes.featuredImageSizeHeight;
      var categorySuggestions = categoriesList.reduce(function (accumulator, category) {
        return latest_posts_edit_objectSpread({}, accumulator, Object(defineProperty["a" /* default */])({}, category.name, category));
      }, {});

      var selectCategories = function selectCategories(tokens) {
        var hasNoSuggestion = tokens.some(function (token) {
          return typeof token === 'string' && !categorySuggestions[token];
        });

        if (hasNoSuggestion) {
          return;
        } // Categories that are already will be objects, while new additions will be strings (the name).
        // allCategories nomalizes the array so that they are all objects.


        var allCategories = tokens.map(function (token) {
          return typeof token === 'string' ? categorySuggestions[token] : token;
        }); // We do nothing if the category is not selected
        // from suggestions.

        if (Object(external_this_lodash_["includes"])(allCategories, null)) {
          return false;
        }

        setAttributes({
          categories: allCategories
        });
      };

      var inspectorControls = Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InspectorControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
        title: Object(external_this_wp_i18n_["__"])('Post content settings')
      }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
        label: Object(external_this_wp_i18n_["__"])('Post content'),
        checked: displayPostContent,
        onChange: function onChange(value) {
          return setAttributes({
            displayPostContent: value
          });
        }
      }), displayPostContent && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["RadioControl"], {
        label: Object(external_this_wp_i18n_["__"])('Show:'),
        selected: displayPostContentRadio,
        options: [{
          label: Object(external_this_wp_i18n_["__"])('Excerpt'),
          value: 'excerpt'
        }, {
          label: Object(external_this_wp_i18n_["__"])('Full post'),
          value: 'full_post'
        }],
        onChange: function onChange(value) {
          return setAttributes({
            displayPostContentRadio: value
          });
        }
      }), displayPostContent && displayPostContentRadio === 'excerpt' && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["RangeControl"], {
        label: Object(external_this_wp_i18n_["__"])('Max number of words in excerpt'),
        value: excerptLength,
        onChange: function onChange(value) {
          return setAttributes({
            excerptLength: value
          });
        },
        min: MIN_EXCERPT_LENGTH,
        max: MAX_EXCERPT_LENGTH
      })), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
        title: Object(external_this_wp_i18n_["__"])('Post meta settings')
      }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
        label: Object(external_this_wp_i18n_["__"])('Display author name'),
        checked: displayAuthor,
        onChange: function onChange(value) {
          return setAttributes({
            displayAuthor: value
          });
        }
      }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
        label: Object(external_this_wp_i18n_["__"])('Display post date'),
        checked: displayPostDate,
        onChange: function onChange(value) {
          return setAttributes({
            displayPostDate: value
          });
        }
      })), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
        title: Object(external_this_wp_i18n_["__"])('Featured image settings')
      }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
        label: Object(external_this_wp_i18n_["__"])('Display featured image'),
        checked: displayFeaturedImage,
        onChange: function onChange(value) {
          return setAttributes({
            displayFeaturedImage: value
          });
        }
      }), displayFeaturedImage && Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["__experimentalImageSizeControl"], {
        onChange: function onChange(value) {
          var newAttrs = {};

          if (value.hasOwnProperty('width')) {
            newAttrs.featuredImageSizeWidth = value.width;
          }

          if (value.hasOwnProperty('height')) {
            newAttrs.featuredImageSizeHeight = value.height;
          }

          setAttributes(newAttrs);
        },
        slug: featuredImageSizeSlug,
        width: featuredImageSizeWidth,
        height: featuredImageSizeHeight,
        imageWidth: defaultImageWidth,
        imageHeight: defaultImageHeight,
        imageSizeOptions: imageSizeOptions,
        onChangeImage: function onChangeImage(value) {
          return setAttributes({
            featuredImageSizeSlug: value,
            featuredImageSizeWidth: undefined,
            featuredImageSizeHeight: undefined
          });
        }
      }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["BaseControl"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["BaseControl"].VisualLabel, null, Object(external_this_wp_i18n_["__"])('Image alignment')), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockAlignmentToolbar"], {
        value: featuredImageAlign,
        onChange: function onChange(value) {
          return setAttributes({
            featuredImageAlign: value
          });
        },
        controls: ['left', 'center', 'right'],
        isCollapsed: false
      })))), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
        title: Object(external_this_wp_i18n_["__"])('Sorting and filtering')
      }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["QueryControls"], Object(esm_extends["a" /* default */])({
        order: order,
        orderBy: orderBy
      }, {
        numberOfItems: postsToShow,
        onOrderChange: function onOrderChange(value) {
          return setAttributes({
            order: value
          });
        },
        onOrderByChange: function onOrderByChange(value) {
          return setAttributes({
            orderBy: value
          });
        },
        onNumberOfItemsChange: function onNumberOfItemsChange(value) {
          return setAttributes({
            postsToShow: value
          });
        },
        categorySuggestions: categorySuggestions,
        onCategoryChange: selectCategories,
        selectedCategories: categories,
        onAuthorChange: function onAuthorChange(value) {
          return setAttributes({
            selectedAuthor: '' !== value ? Number(value) : undefined
          });
        },
        authorList: authorList,
        selectedAuthorId: selectedAuthor
      })), postLayout === 'grid' && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["RangeControl"], {
        label: Object(external_this_wp_i18n_["__"])('Columns'),
        value: columns,
        onChange: function onChange(value) {
          return setAttributes({
            columns: value
          });
        },
        min: 2,
        max: !hasPosts ? MAX_POSTS_COLUMNS : Math.min(MAX_POSTS_COLUMNS, latestPosts.length),
        required: true
      })));
      var hasPosts = Array.isArray(latestPosts) && latestPosts.length;

      if (!hasPosts) {
        return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, inspectorControls, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Placeholder"], {
          icon: library_pin,
          label: Object(external_this_wp_i18n_["__"])('Latest Posts')
        }, !Array.isArray(latestPosts) ? Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Spinner"], null) : Object(external_this_wp_i18n_["__"])('No posts found.')));
      } // Removing posts from display should be instant.


      var displayPosts = latestPosts.length > postsToShow ? latestPosts.slice(0, postsToShow) : latestPosts;
      var layoutControls = [{
        icon: library_list,
        title: Object(external_this_wp_i18n_["__"])('List view'),
        onClick: function onClick() {
          return setAttributes({
            postLayout: 'list'
          });
        },
        isActive: postLayout === 'list'
      }, {
        icon: grid["a" /* default */],
        title: Object(external_this_wp_i18n_["__"])('Grid view'),
        onClick: function onClick() {
          return setAttributes({
            postLayout: 'grid'
          });
        },
        isActive: postLayout === 'grid'
      }];

      var dateFormat = Object(external_this_wp_date_["__experimentalGetSettings"])().formats.date;

      return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, inspectorControls, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToolbarGroup"], {
        controls: layoutControls
      })), Object(external_this_wp_element_["createElement"])("ul", {
        className: classnames_default()(this.props.className, Object(defineProperty["a" /* default */])({
          'wp-block-latest-posts__list': true,
          'is-grid': postLayout === 'grid',
          'has-dates': displayPostDate,
          'has-author': displayAuthor
        }, "columns-".concat(columns), postLayout === 'grid'))
      }, displayPosts.map(function (post, i) {
        var titleTrimmed = Object(external_this_lodash_["invoke"])(post, ['title', 'rendered', 'trim']);
        var excerpt = post.excerpt.rendered;
        var currentAuthor = authorList.find(function (author) {
          return author.id === post.author;
        });
        var excerptElement = document.createElement('div');
        excerptElement.innerHTML = excerpt;
        excerpt = excerptElement.textContent || excerptElement.innerText || '';
        var imageSourceUrl = post.featuredImageSourceUrl;
        var imageClasses = classnames_default()(Object(defineProperty["a" /* default */])({
          'wp-block-latest-posts__featured-image': true
        }, "align".concat(featuredImageAlign), !!featuredImageAlign));
        var needsReadMore = excerptLength < excerpt.trim().split(' ').length && post.excerpt.raw === '';
        var postExcerpt = needsReadMore ? Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, excerpt.trim().split(' ', excerptLength).join(' '), Object(external_this_wp_i18n_["__"])(' … '), Object(external_this_wp_element_["createElement"])("a", {
          href: post.link,
          target: "_blank",
          rel: "noopener noreferrer"
        }, Object(external_this_wp_i18n_["__"])('Read more'))) : excerpt;
        return Object(external_this_wp_element_["createElement"])("li", {
          key: i
        }, displayFeaturedImage && Object(external_this_wp_element_["createElement"])("div", {
          className: imageClasses
        }, imageSourceUrl && Object(external_this_wp_element_["createElement"])("img", {
          src: imageSourceUrl,
          alt: "",
          style: {
            maxWidth: featuredImageSizeWidth,
            maxHeight: featuredImageSizeHeight
          }
        })), Object(external_this_wp_element_["createElement"])("a", {
          href: post.link,
          target: "_blank",
          rel: "noreferrer noopener"
        }, titleTrimmed ? Object(external_this_wp_element_["createElement"])(external_this_wp_element_["RawHTML"], null, titleTrimmed) : Object(external_this_wp_i18n_["__"])('(no title)')), displayAuthor && currentAuthor && Object(external_this_wp_element_["createElement"])("div", {
          className: "wp-block-latest-posts__post-author"
        }, Object(external_this_wp_i18n_["sprintf"])(
        /* translators: byline. %s: current author. */
        Object(external_this_wp_i18n_["__"])('by %s'), currentAuthor.name)), displayPostDate && post.date_gmt && Object(external_this_wp_element_["createElement"])("time", {
          dateTime: Object(external_this_wp_date_["format"])('c', post.date_gmt),
          className: "wp-block-latest-posts__post-date"
        }, Object(external_this_wp_date_["dateI18n"])(dateFormat, post.date_gmt)), displayPostContent && displayPostContentRadio === 'excerpt' && Object(external_this_wp_element_["createElement"])("div", {
          className: "wp-block-latest-posts__post-excerpt"
        }, postExcerpt), displayPostContent && displayPostContentRadio === 'full_post' && Object(external_this_wp_element_["createElement"])("div", {
          className: "wp-block-latest-posts__post-full-content"
        }, Object(external_this_wp_element_["createElement"])(external_this_wp_element_["RawHTML"], {
          key: "html"
        }, post.content.raw.trim())));
      })));
    }
  }]);

  return LatestPostsEdit;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var latest_posts_edit = (Object(external_this_wp_data_["withSelect"])(function (select, props) {
  var _props$attributes = props.attributes,
      featuredImageSizeSlug = _props$attributes.featuredImageSizeSlug,
      postsToShow = _props$attributes.postsToShow,
      order = _props$attributes.order,
      orderBy = _props$attributes.orderBy,
      categories = _props$attributes.categories,
      selectedAuthor = _props$attributes.selectedAuthor;

  var _select = select('core'),
      getEntityRecords = _select.getEntityRecords,
      getMedia = _select.getMedia;

  var _select2 = select('core/block-editor'),
      getSettings = _select2.getSettings;

  var _getSettings = getSettings(),
      imageSizes = _getSettings.imageSizes,
      imageDimensions = _getSettings.imageDimensions;

  var catIds = categories && categories.length > 0 ? categories.map(function (cat) {
    return cat.id;
  }) : [];
  var latestPostsQuery = Object(external_this_lodash_["pickBy"])({
    categories: catIds,
    author: selectedAuthor,
    order: order,
    orderby: orderBy,
    per_page: postsToShow
  }, function (value) {
    return !Object(external_this_lodash_["isUndefined"])(value);
  });
  var posts = getEntityRecords('postType', 'post', latestPostsQuery);
  var imageSizeOptions = imageSizes.filter(function (_ref) {
    var slug = _ref.slug;
    return slug !== 'full';
  }).map(function (_ref2) {
    var name = _ref2.name,
        slug = _ref2.slug;
    return {
      value: slug,
      label: name
    };
  });
  return {
    defaultImageWidth: Object(external_this_lodash_["get"])(imageDimensions, [featuredImageSizeSlug, 'width'], 0),
    defaultImageHeight: Object(external_this_lodash_["get"])(imageDimensions, [featuredImageSizeSlug, 'height'], 0),
    imageSizeOptions: imageSizeOptions,
    latestPosts: !Array.isArray(posts) ? posts : posts.map(function (post) {
      if (post.featured_media) {
        var image = getMedia(post.featured_media);
        var url = Object(external_this_lodash_["get"])(image, ['media_details', 'sizes', featuredImageSizeSlug, 'source_url'], null);

        if (!url) {
          url = Object(external_this_lodash_["get"])(image, 'source_url', null);
        }

        return latest_posts_edit_objectSpread({}, post, {
          featuredImageSourceUrl: url
        });
      }

      return post;
    })
  };
})(edit_LatestPostsEdit));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/latest-posts/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



var latest_posts_metadata = {
  name: "core/latest-posts",
  category: "widgets",
  attributes: {
    align: {
      type: "string",
      "enum": ["left", "center", "right", "wide", "full"]
    },
    className: {
      type: "string"
    },
    categories: {
      type: "array",
      items: {
        type: "object"
      }
    },
    selectedAuthor: {
      type: "number"
    },
    postsToShow: {
      type: "number",
      "default": 5
    },
    displayPostContent: {
      type: "boolean",
      "default": false
    },
    displayPostContentRadio: {
      type: "string",
      "default": "excerpt"
    },
    excerptLength: {
      type: "number",
      "default": 55
    },
    displayAuthor: {
      type: "boolean",
      "default": false
    },
    displayPostDate: {
      type: "boolean",
      "default": false
    },
    postLayout: {
      type: "string",
      "default": "list"
    },
    columns: {
      type: "number",
      "default": 3
    },
    order: {
      type: "string",
      "default": "desc"
    },
    orderBy: {
      type: "string",
      "default": "date"
    },
    displayFeaturedImage: {
      type: "boolean",
      "default": false
    },
    featuredImageAlign: {
      type: "string",
      "enum": ["left", "center", "right"]
    },
    featuredImageSizeSlug: {
      type: "string",
      "default": "thumbnail"
    },
    featuredImageSizeWidth: {
      type: "number",
      "default": null
    },
    featuredImageSizeHeight: {
      type: "number",
      "default": null
    }
  },
  supports: {
    align: true,
    html: false
  }
};
var latest_posts_name = latest_posts_metadata.name;

var latest_posts_settings = {
  title: Object(external_this_wp_i18n_["__"])('Latest Posts'),
  description: Object(external_this_wp_i18n_["__"])('Display a list of your most recent posts.'),
  icon: post_list,
  keywords: [Object(external_this_wp_i18n_["__"])('recent posts')],
  example: {},
  edit: latest_posts_edit,
  deprecated: latest_posts_deprecated
};

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/format-list-bullets-rtl.js


/**
 * WordPress dependencies
 */

var formatListBulletsRTL = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M4 8.8h8.9V7.2H4v1.6zm0 7h8.9v-1.5H4v1.5zM18 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
}));
/* harmony default export */ var format_list_bullets_rtl = (formatListBulletsRTL);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/format-list-bullets.js


/**
 * WordPress dependencies
 */

var formatListBullets = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M11.1 15.8H20v-1.5h-8.9v1.5zm0-8.6v1.5H20V7.2h-8.9zM6 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
}));
/* harmony default export */ var format_list_bullets = (formatListBullets);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/format-list-numbered-rtl.js


/**
 * WordPress dependencies
 */

var formatListNumberedRTL = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M3.8 15.8h8.9v-1.5H3.8v1.5zm0-7h8.9V7.2H3.8v1.6zm14.7-2.1V10h1V5.3l-2.2.7.3 1 .9-.3zm1.2 6.1c-.5-.6-1.2-.5-1.7-.4-.3.1-.5.2-.7.3l.1 1.1c.2-.2.5-.4.8-.5.3-.1.6 0 .7.1.2.3 0 .8-.2 1.1-.5.8-.9 1.6-1.4 2.5H20v-1h-.9c.3-.6.8-1.4.9-2.1 0-.3 0-.8-.3-1.1z"
}));
/* harmony default export */ var format_list_numbered_rtl = (formatListNumberedRTL);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/format-list-numbered.js


/**
 * WordPress dependencies
 */

var formatListNumbered = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M11.1 15.8H20v-1.5h-8.9v1.5zm0-8.6v1.5H20V7.2h-8.9zM5 6.7V10h1V5.3L3.8 6l.4 1 .8-.3zm-.4 5.7c-.3.1-.5.2-.7.3l.1 1.1c.2-.2.5-.4.8-.5.3-.1.6 0 .7.1.2.3 0 .8-.2 1.1-.5.8-.9 1.6-1.4 2.5h2.7v-1h-1c.3-.6.8-1.4.9-2.1.1-.3 0-.8-.2-1.1-.5-.6-1.3-.5-1.7-.4z"
}));
/* harmony default export */ var format_list_numbered = (formatListNumbered);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/format-outdent-rtl.js


/**
 * WordPress dependencies
 */

var formatOutdentRTL = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M20 5.5H4V4H20V5.5ZM12 12.5H4V11H12V12.5ZM20 20V18.5H4V20H20ZM15.4697 14.9697L18.4393 12L15.4697 9.03033L16.5303 7.96967L20.0303 11.4697L20.5607 12L20.0303 12.5303L16.5303 16.0303L15.4697 14.9697Z"
}));
/* harmony default export */ var format_outdent_rtl = (formatOutdentRTL);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/format-outdent.js


/**
 * WordPress dependencies
 */

var formatOutdent = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M4 7.2v1.5h16V7.2H4zm8 8.6h8v-1.5h-8v1.5zm-4-4.6l-4 4 4 4 1-1-3-3 3-3-1-1z"
}));
/* harmony default export */ var format_outdent = (formatOutdent);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/format-indent-rtl.js


/**
 * WordPress dependencies
 */

var formatIndentRTL = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M20 5.5H4V4H20V5.5ZM12 12.5H4V11H12V12.5ZM20 20V18.5H4V20H20ZM20.0303 9.03033L17.0607 12L20.0303 14.9697L18.9697 16.0303L15.4697 12.5303L14.9393 12L15.4697 11.4697L18.9697 7.96967L20.0303 9.03033Z"
}));
/* harmony default export */ var format_indent_rtl = (formatIndentRTL);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/format-indent.js


/**
 * WordPress dependencies
 */

var formatIndent = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M4 7.2v1.5h16V7.2H4zm8 8.6h8v-1.5h-8v1.5zm-8-3.5l3 3-3 3 1 1 4-4-4-4-1 1z"
}));
/* harmony default export */ var format_indent = (formatIndent);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/list/ordered-list-settings.js


/**
 * WordPress dependencies
 */




var ordered_list_settings_OrderedListSettings = function OrderedListSettings(_ref) {
  var setAttributes = _ref.setAttributes,
      reversed = _ref.reversed,
      start = _ref.start;
  return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InspectorControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
    title: Object(external_this_wp_i18n_["__"])('Ordered list settings')
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["TextControl"], {
    label: Object(external_this_wp_i18n_["__"])('Start value'),
    type: "number",
    onChange: function onChange(value) {
      var int = parseInt(value, 10);
      setAttributes({
        // It should be possible to unset the value,
        // e.g. with an empty string.
        start: isNaN(int) ? undefined : int
      });
    },
    value: Number.isInteger(start) ? start.toString(10) : '',
    step: "1"
  }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
    label: Object(external_this_wp_i18n_["__"])('Reverse list numbering'),
    checked: reversed || false,
    onChange: function onChange(value) {
      setAttributes({
        // Unset the attribute if not reversed.
        reversed: value || undefined
      });
    }
  })));
};

/* harmony default export */ var ordered_list_settings = (ordered_list_settings_OrderedListSettings);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/list/edit.js



function list_edit_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function list_edit_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { list_edit_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { list_edit_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */



function ListEdit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes,
      mergeBlocks = _ref.mergeBlocks,
      onReplace = _ref.onReplace,
      isSelected = _ref.isSelected;
  var ordered = attributes.ordered,
      values = attributes.values,
      type = attributes.type,
      reversed = attributes.reversed,
      start = attributes.start;
  var tagName = ordered ? 'ol' : 'ul';
  var isRTL = Object(external_this_wp_data_["useSelect"])(function (select) {
    return !!select('core/block-editor').getSettings().isRTL;
  }, []);

  var controls = function controls(_ref2) {
    var value = _ref2.value,
        onChange = _ref2.onChange,
        onFocus = _ref2.onFocus;
    return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, isSelected && Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichTextShortcut"], {
      type: "primary",
      character: "[",
      onUse: function onUse() {
        onChange(Object(external_this_wp_richText_["__unstableOutdentListItems"])(value));
      }
    }), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichTextShortcut"], {
      type: "primary",
      character: "]",
      onUse: function onUse() {
        onChange(Object(external_this_wp_richText_["__unstableIndentListItems"])(value, {
          type: tagName
        }));
      }
    }), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichTextShortcut"], {
      type: "primary",
      character: "m",
      onUse: function onUse() {
        onChange(Object(external_this_wp_richText_["__unstableIndentListItems"])(value, {
          type: tagName
        }));
      }
    }), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichTextShortcut"], {
      type: "primaryShift",
      character: "m",
      onUse: function onUse() {
        onChange(Object(external_this_wp_richText_["__unstableOutdentListItems"])(value));
      }
    })), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToolbarGroup"], {
      controls: [{
        icon: isRTL ? format_list_bullets_rtl : format_list_bullets,
        title: Object(external_this_wp_i18n_["__"])('Convert to unordered list'),
        isActive: Object(external_this_wp_richText_["__unstableIsActiveListType"])(value, 'ul', tagName),
        onClick: function onClick() {
          onChange(Object(external_this_wp_richText_["__unstableChangeListType"])(value, {
            type: 'ul'
          }));
          onFocus();

          if (Object(external_this_wp_richText_["__unstableIsListRootSelected"])(value)) {
            setAttributes({
              ordered: false
            });
          }
        }
      }, {
        icon: isRTL ? format_list_numbered_rtl : format_list_numbered,
        title: Object(external_this_wp_i18n_["__"])('Convert to ordered list'),
        isActive: Object(external_this_wp_richText_["__unstableIsActiveListType"])(value, 'ol', tagName),
        onClick: function onClick() {
          onChange(Object(external_this_wp_richText_["__unstableChangeListType"])(value, {
            type: 'ol'
          }));
          onFocus();

          if (Object(external_this_wp_richText_["__unstableIsListRootSelected"])(value)) {
            setAttributes({
              ordered: true
            });
          }
        }
      }, {
        icon: isRTL ? format_outdent_rtl : format_outdent,
        title: Object(external_this_wp_i18n_["__"])('Outdent list item'),
        shortcut: Object(external_this_wp_i18n_["_x"])('Backspace', 'keyboard key'),
        isDisabled: !Object(external_this_wp_richText_["__unstableCanOutdentListItems"])(value),
        onClick: function onClick() {
          onChange(Object(external_this_wp_richText_["__unstableOutdentListItems"])(value));
          onFocus();
        }
      }, {
        icon: isRTL ? format_indent_rtl : format_indent,
        title: Object(external_this_wp_i18n_["__"])('Indent list item'),
        shortcut: Object(external_this_wp_i18n_["_x"])('Space', 'keyboard key'),
        isDisabled: !Object(external_this_wp_richText_["__unstableCanIndentListItems"])(value),
        onClick: function onClick() {
          onChange(Object(external_this_wp_richText_["__unstableIndentListItems"])(value, {
            type: tagName
          }));
          onFocus();
        }
      }]
    })));
  };

  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"], {
    identifier: "values",
    multiline: "li",
    __unstableMultilineRootTag: tagName,
    tagName: external_this_wp_blockEditor_["__experimentalBlock"][tagName],
    onChange: function onChange(nextValues) {
      return setAttributes({
        values: nextValues
      });
    },
    value: values,
    placeholder: Object(external_this_wp_i18n_["__"])('Write list…'),
    onMerge: mergeBlocks,
    onSplit: function onSplit(value) {
      return Object(external_this_wp_blocks_["createBlock"])(list_name, list_edit_objectSpread({}, attributes, {
        values: value
      }));
    },
    __unstableOnSplitMiddle: function __unstableOnSplitMiddle() {
      return Object(external_this_wp_blocks_["createBlock"])('core/paragraph');
    },
    onReplace: onReplace,
    onRemove: function onRemove() {
      return onReplace([]);
    },
    start: start,
    reversed: reversed,
    type: type
  }, controls), ordered && Object(external_this_wp_element_["createElement"])(ordered_list_settings, {
    setAttributes: setAttributes,
    ordered: ordered,
    reversed: reversed,
    start: start
  }));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/list/save.js


/**
 * WordPress dependencies
 */

function list_save_save(_ref) {
  var attributes = _ref.attributes;
  var ordered = attributes.ordered,
      values = attributes.values,
      type = attributes.type,
      reversed = attributes.reversed,
      start = attributes.start;
  var tagName = ordered ? 'ol' : 'ul';
  return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
    tagName: tagName,
    value: values,
    type: type,
    reversed: reversed,
    start: start,
    multiline: "li"
  });
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/list/transforms.js



function list_transforms_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function list_transforms_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { list_transforms_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { list_transforms_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */



function getListContentSchema(_ref) {
  var phrasingContentSchema = _ref.phrasingContentSchema;

  var listContentSchema = list_transforms_objectSpread({}, phrasingContentSchema, {
    ul: {},
    ol: {
      attributes: ['type', 'start', 'reversed']
    }
  }); // Recursion is needed.
  // Possible: ul > li > ul.
  // Impossible: ul > ul.


  ['ul', 'ol'].forEach(function (tag) {
    listContentSchema[tag].children = {
      li: {
        children: listContentSchema
      }
    };
  });
  return listContentSchema;
}

var list_transforms_transforms = {
  from: [{
    type: 'block',
    isMultiBlock: true,
    blocks: ['core/paragraph'],
    transform: function transform(blockAttributes) {
      return Object(external_this_wp_blocks_["createBlock"])('core/list', {
        values: Object(external_this_wp_richText_["toHTMLString"])({
          value: Object(external_this_wp_richText_["join"])(blockAttributes.map(function (_ref2) {
            var content = _ref2.content;
            var value = Object(external_this_wp_richText_["create"])({
              html: content
            });

            if (blockAttributes.length > 1) {
              return value;
            } // When converting only one block, transform
            // every line to a list item.


            return Object(external_this_wp_richText_["replace"])(value, /\n/g, external_this_wp_richText_["__UNSTABLE_LINE_SEPARATOR"]);
          }), external_this_wp_richText_["__UNSTABLE_LINE_SEPARATOR"]),
          multilineTag: 'li'
        })
      });
    }
  }, {
    type: 'block',
    blocks: ['core/quote'],
    transform: function transform(_ref3) {
      var value = _ref3.value;
      return Object(external_this_wp_blocks_["createBlock"])('core/list', {
        values: Object(external_this_wp_richText_["toHTMLString"])({
          value: Object(external_this_wp_richText_["create"])({
            html: value,
            multilineTag: 'p'
          }),
          multilineTag: 'li'
        })
      });
    }
  }, {
    type: 'raw',
    selector: 'ol,ul',
    schema: function schema(args) {
      return {
        ol: getListContentSchema(args).ol,
        ul: getListContentSchema(args).ul
      };
    },
    transform: function transform(node) {
      var attributes = {
        ordered: node.nodeName === 'OL'
      };

      if (attributes.ordered) {
        var type = node.getAttribute('type');

        if (type) {
          attributes.type = type;
        }

        if (node.getAttribute('reversed') !== null) {
          attributes.reversed = true;
        }

        var start = parseInt(node.getAttribute('start'), 10);

        if (!isNaN(start) && ( // start=1 only makes sense if the list is reversed.
        start !== 1 || attributes.reversed)) {
          attributes.start = start;
        }
      }

      return Object(external_this_wp_blocks_["createBlock"])('core/list', list_transforms_objectSpread({}, Object(external_this_wp_blocks_["getBlockAttributes"])('core/list', node.outerHTML), {}, attributes));
    }
  }].concat(Object(toConsumableArray["a" /* default */])(['*', '-'].map(function (prefix) {
    return {
      type: 'prefix',
      prefix: prefix,
      transform: function transform(content) {
        return Object(external_this_wp_blocks_["createBlock"])('core/list', {
          values: "<li>".concat(content, "</li>")
        });
      }
    };
  })), Object(toConsumableArray["a" /* default */])(['1.', '1)'].map(function (prefix) {
    return {
      type: 'prefix',
      prefix: prefix,
      transform: function transform(content) {
        return Object(external_this_wp_blocks_["createBlock"])('core/list', {
          ordered: true,
          values: "<li>".concat(content, "</li>")
        });
      }
    };
  }))),
  to: [{
    type: 'block',
    blocks: ['core/paragraph'],
    transform: function transform(_ref4) {
      var values = _ref4.values;
      return Object(external_this_wp_richText_["split"])(Object(external_this_wp_richText_["create"])({
        html: values,
        multilineTag: 'li',
        multilineWrapperTags: ['ul', 'ol']
      }), external_this_wp_richText_["__UNSTABLE_LINE_SEPARATOR"]).map(function (piece) {
        return Object(external_this_wp_blocks_["createBlock"])('core/paragraph', {
          content: Object(external_this_wp_richText_["toHTMLString"])({
            value: piece
          })
        });
      });
    }
  }, {
    type: 'block',
    blocks: ['core/quote'],
    transform: function transform(_ref5) {
      var values = _ref5.values;
      return Object(external_this_wp_blocks_["createBlock"])('core/quote', {
        value: Object(external_this_wp_richText_["toHTMLString"])({
          value: Object(external_this_wp_richText_["create"])({
            html: values,
            multilineTag: 'li',
            multilineWrapperTags: ['ul', 'ol']
          }),
          multilineTag: 'p'
        })
      });
    }
  }]
};
/* harmony default export */ var list_transforms = (list_transforms_transforms);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/list/index.js


function list_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function list_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { list_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { list_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


var list_metadata = {
  name: "core/list",
  category: "text",
  attributes: {
    ordered: {
      type: "boolean",
      "default": false
    },
    values: {
      type: "string",
      source: "html",
      selector: "ol,ul",
      multiline: "li",
      __unstableMultilineWrapperTags: ["ol", "ul"],
      "default": ""
    },
    type: {
      type: "string"
    },
    start: {
      type: "number"
    },
    reversed: {
      type: "boolean"
    }
  },
  supports: {
    className: false,
    __unstablePasteTextInline: true,
    lightBlockWrapper: true
  }
};


var list_name = list_metadata.name;

var list_settings = {
  title: Object(external_this_wp_i18n_["__"])('List'),
  description: Object(external_this_wp_i18n_["__"])('Create a bulleted or numbered list.'),
  icon: library_list,
  keywords: [Object(external_this_wp_i18n_["__"])('bullet list'), Object(external_this_wp_i18n_["__"])('ordered list'), Object(external_this_wp_i18n_["__"])('numbered list')],
  example: {
    attributes: {
      values: '<li>Alice.</li><li>The White Rabbit.</li><li>The Cheshire Cat.</li><li>The Mad Hatter.</li><li>The Queen of Hearts.</li>'
    }
  },
  transforms: list_transforms,
  merge: function merge(attributes, attributesToMerge) {
    var values = attributesToMerge.values;

    if (!values || values === '<li></li>') {
      return attributes;
    }

    return list_objectSpread({}, attributes, {
      values: attributes.values + values
    });
  },
  edit: ListEdit,
  save: list_save_save
};

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/missing/edit.js


/**
 * WordPress dependencies
 */







function MissingBlockWarning(_ref) {
  var attributes = _ref.attributes,
      convertToHTML = _ref.convertToHTML;
  var originalName = attributes.originalName,
      originalUndelimitedContent = attributes.originalUndelimitedContent;
  var hasContent = !!originalUndelimitedContent;
  var hasHTMLBlock = Object(external_this_wp_blocks_["getBlockType"])('core/html');
  var actions = [];
  var messageHTML;

  if (hasContent && hasHTMLBlock) {
    messageHTML = Object(external_this_wp_i18n_["sprintf"])(
    /* translators: %s: block name */
    Object(external_this_wp_i18n_["__"])('Your site doesn’t include support for the "%s" block. You can leave this block intact, convert its content to a Custom HTML block, or remove it entirely.'), originalName);
    actions.push(Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
      key: "convert",
      onClick: convertToHTML,
      isLarge: true,
      isPrimary: true
    }, Object(external_this_wp_i18n_["__"])('Keep as HTML')));
  } else {
    messageHTML = Object(external_this_wp_i18n_["sprintf"])(
    /* translators: %s: block name */
    Object(external_this_wp_i18n_["__"])('Your site doesn’t include support for the "%s" block. You can leave this block intact or remove it entirely.'), originalName);
  }

  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["Warning"], {
    actions: actions
  }, messageHTML), Object(external_this_wp_element_["createElement"])(external_this_wp_element_["RawHTML"], null, originalUndelimitedContent));
}

var MissingEdit = Object(external_this_wp_data_["withDispatch"])(function (dispatch, _ref2) {
  var clientId = _ref2.clientId,
      attributes = _ref2.attributes;

  var _dispatch = dispatch('core/block-editor'),
      replaceBlock = _dispatch.replaceBlock;

  return {
    convertToHTML: function convertToHTML() {
      replaceBlock(clientId, Object(external_this_wp_blocks_["createBlock"])('core/html', {
        content: attributes.originalUndelimitedContent
      }));
    }
  };
})(MissingBlockWarning);
/* harmony default export */ var missing_edit = (MissingEdit);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/missing/save.js


/**
 * WordPress dependencies
 */

function missing_save_save(_ref) {
  var attributes = _ref.attributes;
  // Preserve the missing block's content.
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["RawHTML"], null, attributes.originalContent);
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/missing/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


var missing_metadata = {
  name: "core/missing",
  category: "text",
  attributes: {
    originalName: {
      type: "string"
    },
    originalUndelimitedContent: {
      type: "string"
    },
    originalContent: {
      type: "string",
      source: "html"
    }
  },
  supports: {
    className: false,
    customClassName: false,
    inserter: false,
    html: false,
    reusable: false
  }
};

var missing_name = missing_metadata.name;

var missing_settings = {
  name: missing_name,
  title: Object(external_this_wp_i18n_["__"])('Unsupported'),
  description: Object(external_this_wp_i18n_["__"])('Your site doesn’t include support for this block.'),
  __experimentalLabel: function __experimentalLabel(attributes, _ref) {
    var context = _ref.context;

    if (context === 'accessibility') {
      var originalName = attributes.originalName;
      var originalBlockType = originalName ? Object(external_this_wp_blocks_["getBlockType"])(originalName) : undefined;

      if (originalBlockType) {
        return originalBlockType.settings.title || originalName;
      }

      return '';
    }
  },
  edit: missing_edit,
  save: missing_save_save
};

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/more.js


/**
 * WordPress dependencies
 */

var more = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M4 9v1.5h16V9H4zm12 5.5h4V13h-4v1.5zm-6 0h4V13h-4v1.5zm-6 0h4V13H4v1.5z"
}));
/* harmony default export */ var library_more = (more);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/more/edit.js








function more_edit_createSuper(Derived) { return function () { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (more_edit_isNativeReflectConstruct()) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function more_edit_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * WordPress dependencies
 */







var edit_MoreEdit = /*#__PURE__*/function (_Component) {
  Object(inherits["a" /* default */])(MoreEdit, _Component);

  var _super = more_edit_createSuper(MoreEdit);

  function MoreEdit() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, MoreEdit);

    _this = _super.apply(this, arguments);
    _this.onChangeInput = _this.onChangeInput.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onKeyDown = _this.onKeyDown.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.state = {
      defaultText: Object(external_this_wp_i18n_["__"])('Read more')
    };
    return _this;
  }

  Object(createClass["a" /* default */])(MoreEdit, [{
    key: "onChangeInput",
    value: function onChangeInput(event) {
      // Set defaultText to an empty string, allowing the user to clear/replace the input field's text
      this.setState({
        defaultText: ''
      });
      var value = event.target.value.length === 0 ? undefined : event.target.value;
      this.props.setAttributes({
        customText: value
      });
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
      var keyCode = event.keyCode;
      var insertBlocksAfter = this.props.insertBlocksAfter;

      if (keyCode === external_this_wp_keycodes_["ENTER"]) {
        insertBlocksAfter([Object(external_this_wp_blocks_["createBlock"])(Object(external_this_wp_blocks_["getDefaultBlockName"])())]);
      }
    }
  }, {
    key: "getHideExcerptHelp",
    value: function getHideExcerptHelp(checked) {
      return checked ? Object(external_this_wp_i18n_["__"])('The excerpt is hidden.') : Object(external_this_wp_i18n_["__"])('The excerpt is visible.');
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$attribute = this.props.attributes,
          customText = _this$props$attribute.customText,
          noTeaser = _this$props$attribute.noTeaser;
      var setAttributes = this.props.setAttributes;

      var toggleHideExcerpt = function toggleHideExcerpt() {
        return setAttributes({
          noTeaser: !noTeaser
        });
      };

      var defaultText = this.state.defaultText;
      var value = customText !== undefined ? customText : defaultText;
      var inputLength = value.length + 1.2;
      var currentWidth = {
        width: inputLength + 'em'
      };
      return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InspectorControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
        label: Object(external_this_wp_i18n_["__"])('Hide the excerpt on the full content page'),
        checked: !!noTeaser,
        onChange: toggleHideExcerpt,
        help: this.getHideExcerptHelp
      }))), Object(external_this_wp_element_["createElement"])("div", {
        className: "wp-block-more"
      }, Object(external_this_wp_element_["createElement"])("input", {
        type: "text",
        value: value,
        onChange: this.onChangeInput,
        onKeyDown: this.onKeyDown,
        style: currentWidth
      })));
    }
  }]);

  return MoreEdit;
}(external_this_wp_element_["Component"]);



// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/more/save.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


function more_save_save(_ref) {
  var attributes = _ref.attributes;
  var customText = attributes.customText,
      noTeaser = attributes.noTeaser;
  var moreTag = customText ? "<!--more ".concat(customText, "-->") : '<!--more-->';
  var noTeaserTag = noTeaser ? '<!--noteaser-->' : '';
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["RawHTML"], null, Object(external_this_lodash_["compact"])([moreTag, noTeaserTag]).join('\n'));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/more/transforms.js
/**
 * WordPress dependencies
 */

var more_transforms_transforms = {
  from: [{
    type: 'raw',
    schema: {
      'wp-block': {
        attributes: ['data-block']
      }
    },
    isMatch: function isMatch(node) {
      return node.dataset && node.dataset.block === 'core/more';
    },
    transform: function transform(node) {
      var _node$dataset = node.dataset,
          customText = _node$dataset.customText,
          noTeaser = _node$dataset.noTeaser;
      var attrs = {}; // Don't copy unless defined and not an empty string

      if (customText) {
        attrs.customText = customText;
      } // Special handling for boolean


      if (noTeaser === '') {
        attrs.noTeaser = true;
      }

      return Object(external_this_wp_blocks_["createBlock"])('core/more', attrs);
    }
  }]
};
/* harmony default export */ var more_transforms = (more_transforms_transforms);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/more/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


var more_metadata = {
  name: "core/more",
  category: "design",
  attributes: {
    customText: {
      type: "string"
    },
    noTeaser: {
      type: "boolean",
      "default": false
    }
  },
  supports: {
    customClassName: false,
    className: false,
    html: false,
    multiple: false
  }
};


var more_name = more_metadata.name;

var more_settings = {
  title: Object(external_this_wp_i18n_["_x"])('More', 'block name'),
  description: Object(external_this_wp_i18n_["__"])('Content before this block will be shown in the excerpt on your archives page.'),
  icon: library_more,
  example: {},
  __experimentalLabel: function __experimentalLabel(attributes, _ref) {
    var context = _ref.context;

    if (context === 'accessibility') {
      return attributes.customText;
    }
  },
  transforms: more_transforms,
  edit: edit_MoreEdit,
  save: more_save_save
};

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/page-break.js


/**
 * WordPress dependencies
 */

var pageBreak = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M7.8 6c0-.7.6-1.2 1.2-1.2h6c.7 0 1.2.6 1.2 1.2v3h1.5V6c0-1.5-1.2-2.8-2.8-2.8H9C7.5 3.2 6.2 4.5 6.2 6v3h1.5V6zm8.4 11c0 .7-.6 1.2-1.2 1.2H9c-.7 0-1.2-.6-1.2-1.2v-3H6.2v3c0 1.5 1.2 2.8 2.8 2.8h6c1.5 0 2.8-1.2 2.8-2.8v-3h-1.5v3zM4 11v1h16v-1H4z"
}));
/* harmony default export */ var page_break = (pageBreak);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/nextpage/edit.js


/**
 * WordPress dependencies
 */

function NextPageEdit() {
  return Object(external_this_wp_element_["createElement"])("div", {
    className: "wp-block-nextpage"
  }, Object(external_this_wp_element_["createElement"])("span", null, Object(external_this_wp_i18n_["__"])('Page break')));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/nextpage/save.js


/**
 * WordPress dependencies
 */

function nextpage_save_save() {
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["RawHTML"], null, '<!--nextpage-->');
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/nextpage/transforms.js
/**
 * WordPress dependencies
 */

var nextpage_transforms_transforms = {
  from: [{
    type: 'raw',
    schema: {
      'wp-block': {
        attributes: ['data-block']
      }
    },
    isMatch: function isMatch(node) {
      return node.dataset && node.dataset.block === 'core/nextpage';
    },
    transform: function transform() {
      return Object(external_this_wp_blocks_["createBlock"])('core/nextpage', {});
    }
  }]
};
/* harmony default export */ var nextpage_transforms = (nextpage_transforms_transforms);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/nextpage/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


var nextpage_metadata = {
  name: "core/nextpage",
  category: "design",
  parent: ["core/post-content"],
  supports: {
    customClassName: false,
    className: false,
    html: false
  }
};


var nextpage_name = nextpage_metadata.name;

var nextpage_settings = {
  title: Object(external_this_wp_i18n_["__"])('Page Break'),
  description: Object(external_this_wp_i18n_["__"])('Separate your content into a multi-page experience.'),
  icon: page_break,
  keywords: [Object(external_this_wp_i18n_["__"])('next page'), Object(external_this_wp_i18n_["__"])('pagination')],
  example: {},
  transforms: nextpage_transforms,
  edit: NextPageEdit,
  save: nextpage_save_save
};

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/preformatted.js


/**
 * WordPress dependencies
 */

var preformatted = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h12c.3 0 .5.2.5.5v12zM7 16.5h6V15H7v1.5zm4-4h6V11h-6v1.5zM9 11H7v1.5h2V11zm6 5.5h2V15h-2v1.5z"
}));
/* harmony default export */ var library_preformatted = (preformatted);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/preformatted/edit.js


/**
 * WordPress dependencies
 */


function PreformattedEdit(_ref) {
  var attributes = _ref.attributes,
      mergeBlocks = _ref.mergeBlocks,
      setAttributes = _ref.setAttributes,
      className = _ref.className,
      style = _ref.style;
  var content = attributes.content;
  return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"], {
    tagName: external_this_wp_blockEditor_["__experimentalBlock"].pre,
    identifier: "content",
    preserveWhiteSpace: true,
    value: content,
    onChange: function onChange(nextContent) {
      setAttributes({
        content: nextContent
      });
    },
    placeholder: Object(external_this_wp_i18n_["__"])('Write preformatted text…'),
    className: className,
    style: style,
    onMerge: mergeBlocks
  });
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/preformatted/save.js


/**
 * WordPress dependencies
 */

function preformatted_save_save(_ref) {
  var attributes = _ref.attributes;
  var content = attributes.content;
  return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
    tagName: "pre",
    value: content
  });
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/preformatted/transforms.js
/**
 * WordPress dependencies
 */

var preformatted_transforms_transforms = {
  from: [{
    type: 'block',
    blocks: ['core/code', 'core/paragraph'],
    transform: function transform(_ref) {
      var content = _ref.content;
      return Object(external_this_wp_blocks_["createBlock"])('core/preformatted', {
        content: content
      });
    }
  }, {
    type: 'raw',
    isMatch: function isMatch(node) {
      return node.nodeName === 'PRE' && !(node.children.length === 1 && node.firstChild.nodeName === 'CODE');
    },
    schema: function schema(_ref2) {
      var phrasingContentSchema = _ref2.phrasingContentSchema;
      return {
        pre: {
          children: phrasingContentSchema
        }
      };
    }
  }],
  to: [{
    type: 'block',
    blocks: ['core/paragraph'],
    transform: function transform(attributes) {
      return Object(external_this_wp_blocks_["createBlock"])('core/paragraph', attributes);
    }
  }, {
    type: 'block',
    blocks: ['core/code'],
    transform: function transform(attributes) {
      return Object(external_this_wp_blocks_["createBlock"])('core/code', attributes);
    }
  }]
};
/* harmony default export */ var preformatted_transforms = (preformatted_transforms_transforms);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/preformatted/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


var preformatted_metadata = {
  name: "core/preformatted",
  category: "text",
  attributes: {
    content: {
      type: "string",
      source: "html",
      selector: "pre",
      "default": "",
      __unstablePreserveWhiteSpace: true
    }
  },
  supports: {
    lightBlockWrapper: true
  }
};


var preformatted_name = preformatted_metadata.name;

var preformatted_settings = {
  title: Object(external_this_wp_i18n_["__"])('Preformatted'),
  description: Object(external_this_wp_i18n_["__"])('Add text that respects your spacing and tabs, and also allows styling.'),
  icon: library_preformatted,
  example: {
    attributes: {
      /* eslint-disable @wordpress/i18n-no-collapsible-whitespace */
      // translators: Sample content for the Preformatted block. Can be replaced with a more locale-adequate work.
      content: Object(external_this_wp_i18n_["__"])('EXT. XANADU - FAINT DAWN - 1940 (MINIATURE)\nWindow, very small in the distance, illuminated.\nAll around this is an almost totally black screen. Now, as the camera moves slowly towards the window which is almost a postage stamp in the frame, other forms appear;')
      /* eslint-enable @wordpress/i18n-no-collapsible-whitespace */

    }
  },
  transforms: preformatted_transforms,
  edit: PreformattedEdit,
  save: preformatted_save_save,
  merge: function merge(attributes, attributesToMerge) {
    return {
      content: attributes.content + attributesToMerge.content
    };
  }
};

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/pullquote.js


/**
 * WordPress dependencies
 */

var pullquote = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M18 8H6c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zm.5 6c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5v-4c0-.3.2-.5.5-.5h12c.3 0 .5.2.5.5v4zM4 4v1.5h16V4H4zm0 16h16v-1.5H4V20z"
}));
/* harmony default export */ var library_pullquote = (pullquote);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/pullquote/shared.js
var SOLID_COLOR_STYLE_NAME = 'solid-color';
var SOLID_COLOR_CLASS = "is-style-".concat(SOLID_COLOR_STYLE_NAME);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/pullquote/deprecated.js




function pullquote_deprecated_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function pullquote_deprecated_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { pullquote_deprecated_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { pullquote_deprecated_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


var pullquote_deprecated_blockAttributes = {
  value: {
    type: 'string',
    source: 'html',
    selector: 'blockquote',
    multiline: 'p'
  },
  citation: {
    type: 'string',
    source: 'html',
    selector: 'cite',
    default: ''
  },
  mainColor: {
    type: 'string'
  },
  customMainColor: {
    type: 'string'
  },
  textColor: {
    type: 'string'
  },
  customTextColor: {
    type: 'string'
  }
};

function parseBorderColor(styleString) {
  if (!styleString) {
    return;
  }

  var matches = styleString.match(/border-color:([^;]+)[;]?/);

  if (matches && matches[1]) {
    return matches[1];
  }
}

var pullquote_deprecated_deprecated = [{
  attributes: pullquote_deprecated_objectSpread({}, pullquote_deprecated_blockAttributes, {
    // figureStyle is an attribute that never existed.
    // We are using it as a way to access the styles previously applied to the figure.
    figureStyle: {
      source: 'attribute',
      selector: 'figure',
      attribute: 'style'
    }
  }),
  save: function save(_ref) {
    var attributes = _ref.attributes;
    var mainColor = attributes.mainColor,
        customMainColor = attributes.customMainColor,
        textColor = attributes.textColor,
        customTextColor = attributes.customTextColor,
        value = attributes.value,
        citation = attributes.citation,
        className = attributes.className,
        figureStyle = attributes.figureStyle;
    var isSolidColorStyle = Object(external_this_lodash_["includes"])(className, SOLID_COLOR_CLASS);
    var figureClasses, figureStyles; // Is solid color style

    if (isSolidColorStyle) {
      var backgroundClass = Object(external_this_wp_blockEditor_["getColorClassName"])('background-color', mainColor);
      figureClasses = classnames_default()(Object(defineProperty["a" /* default */])({
        'has-background': backgroundClass || customMainColor
      }, backgroundClass, backgroundClass));
      figureStyles = {
        backgroundColor: backgroundClass ? undefined : customMainColor
      }; // Is normal style and a custom color is being used ( we can set a style directly with its value)
    } else if (customMainColor) {
      figureStyles = {
        borderColor: customMainColor
      }; // If normal style and a named color are being used, we need to retrieve the color value to set the style,
      // as there is no expectation that themes create classes that set border colors.
    } else if (mainColor) {
      // Previously here we queried the color settings to know the color value
      // of a named color. This made the save function impure and the block was refactored,
      // because meanwhile a change in the editor made it impossible to query color settings in the save function.
      // Here instead of querying the color settings to know the color value, we retrieve the value
      // directly from the style previously serialized.
      var borderColor = parseBorderColor(figureStyle);
      figureStyles = {
        borderColor: borderColor
      };
    }

    var blockquoteTextColorClass = Object(external_this_wp_blockEditor_["getColorClassName"])('color', textColor);
    var blockquoteClasses = (textColor || customTextColor) && classnames_default()('has-text-color', Object(defineProperty["a" /* default */])({}, blockquoteTextColorClass, blockquoteTextColorClass));
    var blockquoteStyles = blockquoteTextColorClass ? undefined : {
      color: customTextColor
    };
    return Object(external_this_wp_element_["createElement"])("figure", {
      className: figureClasses,
      style: figureStyles
    }, Object(external_this_wp_element_["createElement"])("blockquote", {
      className: blockquoteClasses,
      style: blockquoteStyles
    }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      value: value,
      multiline: true
    }), !external_this_wp_blockEditor_["RichText"].isEmpty(citation) && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      tagName: "cite",
      value: citation
    })));
  },
  migrate: function migrate(_ref2) {
    var className = _ref2.className,
        figureStyle = _ref2.figureStyle,
        mainColor = _ref2.mainColor,
        attributes = Object(objectWithoutProperties["a" /* default */])(_ref2, ["className", "figureStyle", "mainColor"]);

    var isSolidColorStyle = Object(external_this_lodash_["includes"])(className, SOLID_COLOR_CLASS); // If is the default style, and a main color is set,
    // migrate the main color value into a custom color.
    // The custom color value is retrived by parsing the figure styles.

    if (!isSolidColorStyle && mainColor && figureStyle) {
      var borderColor = parseBorderColor(figureStyle);

      if (borderColor) {
        return pullquote_deprecated_objectSpread({}, attributes, {
          className: className,
          customMainColor: borderColor
        });
      }
    }

    return pullquote_deprecated_objectSpread({
      className: className,
      mainColor: mainColor
    }, attributes);
  }
}, {
  attributes: pullquote_deprecated_blockAttributes,
  save: function save(_ref3) {
    var attributes = _ref3.attributes;
    var mainColor = attributes.mainColor,
        customMainColor = attributes.customMainColor,
        textColor = attributes.textColor,
        customTextColor = attributes.customTextColor,
        value = attributes.value,
        citation = attributes.citation,
        className = attributes.className;
    var isSolidColorStyle = Object(external_this_lodash_["includes"])(className, SOLID_COLOR_CLASS);
    var figureClass, figureStyles; // Is solid color style

    if (isSolidColorStyle) {
      figureClass = Object(external_this_wp_blockEditor_["getColorClassName"])('background-color', mainColor);

      if (!figureClass) {
        figureStyles = {
          backgroundColor: customMainColor
        };
      } // Is normal style and a custom color is being used ( we can set a style directly with its value)

    } else if (customMainColor) {
      figureStyles = {
        borderColor: customMainColor
      }; // Is normal style and a named color is being used, we need to retrieve the color value to set the style,
      // as there is no expectation that themes create classes that set border colors.
    } else if (mainColor) {
      var colors = Object(external_this_lodash_["get"])(Object(external_this_wp_data_["select"])('core/block-editor').getSettings(), ['colors'], []);
      var colorObject = Object(external_this_wp_blockEditor_["getColorObjectByAttributeValues"])(colors, mainColor);
      figureStyles = {
        borderColor: colorObject.color
      };
    }

    var blockquoteTextColorClass = Object(external_this_wp_blockEditor_["getColorClassName"])('color', textColor);
    var blockquoteClasses = textColor || customTextColor ? classnames_default()('has-text-color', Object(defineProperty["a" /* default */])({}, blockquoteTextColorClass, blockquoteTextColorClass)) : undefined;
    var blockquoteStyle = blockquoteTextColorClass ? undefined : {
      color: customTextColor
    };
    return Object(external_this_wp_element_["createElement"])("figure", {
      className: figureClass,
      style: figureStyles
    }, Object(external_this_wp_element_["createElement"])("blockquote", {
      className: blockquoteClasses,
      style: blockquoteStyle
    }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      value: value,
      multiline: true
    }), !external_this_wp_blockEditor_["RichText"].isEmpty(citation) && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      tagName: "cite",
      value: citation
    })));
  }
}, {
  attributes: pullquote_deprecated_objectSpread({}, pullquote_deprecated_blockAttributes),
  save: function save(_ref4) {
    var attributes = _ref4.attributes;
    var value = attributes.value,
        citation = attributes.citation;
    return Object(external_this_wp_element_["createElement"])("blockquote", null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      value: value,
      multiline: true
    }), !external_this_wp_blockEditor_["RichText"].isEmpty(citation) && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      tagName: "cite",
      value: citation
    }));
  }
}, {
  attributes: pullquote_deprecated_objectSpread({}, pullquote_deprecated_blockAttributes, {
    citation: {
      type: 'string',
      source: 'html',
      selector: 'footer'
    },
    align: {
      type: 'string',
      default: 'none'
    }
  }),
  save: function save(_ref5) {
    var attributes = _ref5.attributes;
    var value = attributes.value,
        citation = attributes.citation,
        align = attributes.align;
    return Object(external_this_wp_element_["createElement"])("blockquote", {
      className: "align".concat(align)
    }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      value: value,
      multiline: true
    }), !external_this_wp_blockEditor_["RichText"].isEmpty(citation) && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      tagName: "footer",
      value: citation
    }));
  }
}];
/* harmony default export */ var pullquote_deprecated = (pullquote_deprecated_deprecated);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/pullquote/figure.js
var Figure = 'figure';

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/pullquote/blockquote.js
var BlockQuote = 'blockquote';

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/pullquote/edit.js










function pullquote_edit_createSuper(Derived) { return function () { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (pullquote_edit_isNativeReflectConstruct()) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function pullquote_edit_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



/**
 * Internal dependencies
 */



var edit_PullQuoteEdit = /*#__PURE__*/function (_Component) {
  Object(inherits["a" /* default */])(PullQuoteEdit, _Component);

  var _super = pullquote_edit_createSuper(PullQuoteEdit);

  function PullQuoteEdit(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, PullQuoteEdit);

    _this = _super.call(this, props);
    _this.wasTextColorAutomaticallyComputed = false;
    _this.pullQuoteMainColorSetter = _this.pullQuoteMainColorSetter.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.pullQuoteTextColorSetter = _this.pullQuoteTextColorSetter.bind(Object(assertThisInitialized["a" /* default */])(_this));
    return _this;
  }

  Object(createClass["a" /* default */])(PullQuoteEdit, [{
    key: "pullQuoteMainColorSetter",
    value: function pullQuoteMainColorSetter(colorValue) {
      var _this$props = this.props,
          colorUtils = _this$props.colorUtils,
          textColor = _this$props.textColor,
          setAttributes = _this$props.setAttributes,
          setTextColor = _this$props.setTextColor,
          setMainColor = _this$props.setMainColor,
          className = _this$props.className;
      var isSolidColorStyle = Object(external_this_lodash_["includes"])(className, SOLID_COLOR_CLASS);
      var needTextColor = !textColor.color || this.wasTextColorAutomaticallyComputed;
      var shouldSetTextColor = isSolidColorStyle && needTextColor && colorValue;

      if (isSolidColorStyle) {
        // If we use the solid color style, set the color using the normal mechanism.
        setMainColor(colorValue);
      } else {
        // If we use the default style, set the color as a custom color to force the usage of an inline style.
        // Default style uses a border color for which classes are not available.
        setAttributes({
          customMainColor: colorValue
        });
      }

      if (shouldSetTextColor) {
        this.wasTextColorAutomaticallyComputed = true;
        setTextColor(colorUtils.getMostReadableColor(colorValue));
      }
    }
  }, {
    key: "pullQuoteTextColorSetter",
    value: function pullQuoteTextColorSetter(colorValue) {
      var setTextColor = this.props.setTextColor;
      setTextColor(colorValue);
      this.wasTextColorAutomaticallyComputed = false;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props2 = this.props,
          attributes = _this$props2.attributes,
          className = _this$props2.className,
          mainColor = _this$props2.mainColor,
          setAttributes = _this$props2.setAttributes; // If the block includes a named color and we switched from the
      // solid color style to the default style.

      if (attributes.mainColor && !Object(external_this_lodash_["includes"])(className, SOLID_COLOR_CLASS) && Object(external_this_lodash_["includes"])(prevProps.className, SOLID_COLOR_CLASS)) {
        // Remove the named color, and set the color as a custom color.
        // This is done because named colors use classes, in the default style we use a border color,
        // and themes don't set classes for border colors.
        setAttributes({
          mainColor: undefined,
          customMainColor: mainColor.color
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          attributes = _this$props3.attributes,
          mainColor = _this$props3.mainColor,
          textColor = _this$props3.textColor,
          setAttributes = _this$props3.setAttributes,
          isSelected = _this$props3.isSelected,
          className = _this$props3.className,
          insertBlocksAfter = _this$props3.insertBlocksAfter;
      var value = attributes.value,
          citation = attributes.citation;
      var isSolidColorStyle = Object(external_this_lodash_["includes"])(className, SOLID_COLOR_CLASS);
      var figureStyles = isSolidColorStyle ? {
        backgroundColor: mainColor.color
      } : {
        borderColor: mainColor.color
      };
      var figureClasses = classnames_default()(className, Object(defineProperty["a" /* default */])({
        'has-background': isSolidColorStyle && mainColor.color
      }, mainColor.class, isSolidColorStyle && mainColor.class));
      var blockquoteStyles = {
        color: textColor.color
      };
      var blockquoteClasses = textColor.color && classnames_default()('has-text-color', Object(defineProperty["a" /* default */])({}, textColor.class, textColor.class));
      return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(Figure, {
        style: figureStyles,
        className: figureClasses
      }, Object(external_this_wp_element_["createElement"])(BlockQuote, {
        style: blockquoteStyles,
        className: blockquoteClasses
      }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"], {
        identifier: "value",
        multiline: true,
        value: value,
        onChange: function onChange(nextValue) {
          return setAttributes({
            value: nextValue
          });
        },
        placeholder: // translators: placeholder text used for the quote
        Object(external_this_wp_i18n_["__"])('Write quote…'),
        textAlign: "center"
      }), (!external_this_wp_blockEditor_["RichText"].isEmpty(citation) || isSelected) && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"], {
        identifier: "citation",
        value: citation,
        placeholder: // translators: placeholder text used for the citation
        Object(external_this_wp_i18n_["__"])('Write citation…'),
        onChange: function onChange(nextCitation) {
          return setAttributes({
            citation: nextCitation
          });
        },
        className: "wp-block-pullquote__citation",
        __unstableMobileNoFocusOnMount: true,
        textAlign: "center",
        __unstableOnSplitAtEnd: function __unstableOnSplitAtEnd() {
          return insertBlocksAfter(Object(external_this_wp_blocks_["createBlock"])('core/paragraph'));
        }
      }))), external_this_wp_element_["Platform"].OS === 'web' && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InspectorControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["PanelColorSettings"], {
        title: Object(external_this_wp_i18n_["__"])('Color settings'),
        colorSettings: [{
          value: mainColor.color,
          onChange: this.pullQuoteMainColorSetter,
          label: Object(external_this_wp_i18n_["__"])('Main color')
        }, {
          value: textColor.color,
          onChange: this.pullQuoteTextColorSetter,
          label: Object(external_this_wp_i18n_["__"])('Text color')
        }]
      }, isSolidColorStyle && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["ContrastChecker"], Object(esm_extends["a" /* default */])({
        textColor: textColor.color,
        backgroundColor: mainColor.color
      }, {
        isLargeText: false
      })))));
    }
  }]);

  return PullQuoteEdit;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var pullquote_edit = (Object(external_this_wp_blockEditor_["withColors"])({
  mainColor: 'background-color',
  textColor: 'color'
})(edit_PullQuoteEdit));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/pullquote/save.js



/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


function pullquote_save_save(_ref) {
  var attributes = _ref.attributes;
  var mainColor = attributes.mainColor,
      customMainColor = attributes.customMainColor,
      textColor = attributes.textColor,
      customTextColor = attributes.customTextColor,
      value = attributes.value,
      citation = attributes.citation,
      className = attributes.className;
  var isSolidColorStyle = Object(external_this_lodash_["includes"])(className, SOLID_COLOR_CLASS);
  var figureClasses, figureStyles; // Is solid color style

  if (isSolidColorStyle) {
    var backgroundClass = Object(external_this_wp_blockEditor_["getColorClassName"])('background-color', mainColor);
    figureClasses = classnames_default()(Object(defineProperty["a" /* default */])({
      'has-background': backgroundClass || customMainColor
    }, backgroundClass, backgroundClass));
    figureStyles = {
      backgroundColor: backgroundClass ? undefined : customMainColor
    }; // Is normal style and a custom color is being used ( we can set a style directly with its value)
  } else if (customMainColor) {
    figureStyles = {
      borderColor: customMainColor
    };
  }

  var blockquoteTextColorClass = Object(external_this_wp_blockEditor_["getColorClassName"])('color', textColor);
  var blockquoteClasses = (textColor || customTextColor) && classnames_default()('has-text-color', Object(defineProperty["a" /* default */])({}, blockquoteTextColorClass, blockquoteTextColorClass));
  var blockquoteStyles = blockquoteTextColorClass ? undefined : {
    color: customTextColor
  };
  return Object(external_this_wp_element_["createElement"])("figure", {
    className: figureClasses,
    style: figureStyles
  }, Object(external_this_wp_element_["createElement"])("blockquote", {
    className: blockquoteClasses,
    style: blockquoteStyles
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
    value: value,
    multiline: true
  }), !external_this_wp_blockEditor_["RichText"].isEmpty(citation) && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
    tagName: "cite",
    value: citation
  })));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/pullquote/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




var pullquote_metadata = {
  name: "core/pullquote",
  category: "text",
  attributes: {
    value: {
      type: "string",
      source: "html",
      selector: "blockquote",
      multiline: "p"
    },
    citation: {
      type: "string",
      source: "html",
      selector: "cite",
      "default": ""
    },
    mainColor: {
      type: "string"
    },
    customMainColor: {
      type: "string"
    },
    textColor: {
      type: "string"
    },
    customTextColor: {
      type: "string"
    }
  },
  supports: {
    align: ["left", "right", "wide", "full"]
  }
};

var pullquote_name = pullquote_metadata.name;

var pullquote_settings = {
  title: Object(external_this_wp_i18n_["__"])('Pullquote'),
  description: Object(external_this_wp_i18n_["__"])('Give special visual emphasis to a quote from your text.'),
  icon: library_pullquote,
  example: {
    attributes: {
      value: '<p>' + // translators: Quote serving as example for the Pullquote block. Attributed to Matt Mullenweg.
      Object(external_this_wp_i18n_["__"])('One of the hardest things to do in technology is disrupt yourself.') + '</p>',
      citation: Object(external_this_wp_i18n_["__"])('Matt Mullenweg')
    }
  },
  styles: [{
    name: 'default',
    label: Object(external_this_wp_i18n_["_x"])('Default', 'block style'),
    isDefault: true
  }, {
    name: SOLID_COLOR_STYLE_NAME,
    label: Object(external_this_wp_i18n_["__"])('Solid color')
  }],
  edit: pullquote_edit,
  save: pullquote_save_save,
  deprecated: pullquote_deprecated
};

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/block/edit-panel/index.js








function edit_panel_createSuper(Derived) { return function () { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (edit_panel_isNativeReflectConstruct()) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function edit_panel_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * WordPress dependencies
 */






var edit_panel_ReusableBlockEditPanel = /*#__PURE__*/function (_Component) {
  Object(inherits["a" /* default */])(ReusableBlockEditPanel, _Component);

  var _super = edit_panel_createSuper(ReusableBlockEditPanel);

  function ReusableBlockEditPanel() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, ReusableBlockEditPanel);

    _this = _super.apply(this, arguments);
    _this.titleField = Object(external_this_wp_element_["createRef"])();
    _this.editButton = Object(external_this_wp_element_["createRef"])();
    _this.handleFormSubmit = _this.handleFormSubmit.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.handleTitleChange = _this.handleTitleChange.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.handleTitleKeyDown = _this.handleTitleKeyDown.bind(Object(assertThisInitialized["a" /* default */])(_this));
    return _this;
  }

  Object(createClass["a" /* default */])(ReusableBlockEditPanel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Select the input text when the form opens.
      if (this.props.isEditing && this.titleField.current) {
        this.titleField.current.select();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // Select the input text only once when the form opens.
      if (!prevProps.isEditing && this.props.isEditing) {
        this.titleField.current.select();
      } // Move focus back to the Edit button after pressing the Escape key or Save.


      if ((prevProps.isEditing || prevProps.isSaving) && !this.props.isEditing && !this.props.isSaving) {
        this.editButton.current.focus();
      }
    }
  }, {
    key: "handleFormSubmit",
    value: function handleFormSubmit(event) {
      event.preventDefault();
      this.props.onSave();
    }
  }, {
    key: "handleTitleChange",
    value: function handleTitleChange(event) {
      this.props.onChangeTitle(event.target.value);
    }
  }, {
    key: "handleTitleKeyDown",
    value: function handleTitleKeyDown(event) {
      if (event.keyCode === external_this_wp_keycodes_["ESCAPE"]) {
        event.stopPropagation();
        this.props.onCancel();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isEditing = _this$props.isEditing,
          title = _this$props.title,
          isSaving = _this$props.isSaving,
          isEditDisabled = _this$props.isEditDisabled,
          onEdit = _this$props.onEdit,
          instanceId = _this$props.instanceId;
      return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, !isEditing && !isSaving && Object(external_this_wp_element_["createElement"])("div", {
        className: "reusable-block-edit-panel"
      }, Object(external_this_wp_element_["createElement"])("b", {
        className: "reusable-block-edit-panel__info"
      }, title), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
        ref: this.editButton,
        isSecondary: true,
        className: "reusable-block-edit-panel__button",
        disabled: isEditDisabled,
        onClick: onEdit
      }, Object(external_this_wp_i18n_["__"])('Edit'))), (isEditing || isSaving) && Object(external_this_wp_element_["createElement"])("form", {
        className: "reusable-block-edit-panel",
        onSubmit: this.handleFormSubmit
      }, Object(external_this_wp_element_["createElement"])("label", {
        htmlFor: "reusable-block-edit-panel__title-".concat(instanceId),
        className: "reusable-block-edit-panel__label"
      }, Object(external_this_wp_i18n_["__"])('Name:')), Object(external_this_wp_element_["createElement"])("input", {
        ref: this.titleField,
        type: "text",
        disabled: isSaving,
        className: "reusable-block-edit-panel__title",
        value: title,
        onChange: this.handleTitleChange,
        onKeyDown: this.handleTitleKeyDown,
        id: "reusable-block-edit-panel__title-".concat(instanceId)
      }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
        type: "submit",
        isSecondary: true,
        isBusy: isSaving,
        disabled: !title || isSaving,
        className: "reusable-block-edit-panel__button"
      }, Object(external_this_wp_i18n_["__"])('Save'))));
    }
  }]);

  return ReusableBlockEditPanel;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var edit_panel = (Object(external_this_wp_compose_["withInstanceId"])(edit_panel_ReusableBlockEditPanel));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/block/edit.js








function block_edit_createSuper(Derived) { return function () { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (block_edit_isNativeReflectConstruct()) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function block_edit_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */



var edit_ReusableBlockEdit = /*#__PURE__*/function (_Component) {
  Object(inherits["a" /* default */])(ReusableBlockEdit, _Component);

  var _super = block_edit_createSuper(ReusableBlockEdit);

  function ReusableBlockEdit(_ref) {
    var _this;

    var reusableBlock = _ref.reusableBlock;

    Object(classCallCheck["a" /* default */])(this, ReusableBlockEdit);

    _this = _super.apply(this, arguments);
    _this.startEditing = _this.startEditing.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.stopEditing = _this.stopEditing.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.setBlocks = _this.setBlocks.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.setTitle = _this.setTitle.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.save = _this.save.bind(Object(assertThisInitialized["a" /* default */])(_this));

    if (reusableBlock) {
      // Start in edit mode when we're working with a newly created reusable block
      _this.state = {
        isEditing: reusableBlock.isTemporary,
        title: reusableBlock.title,
        blocks: Object(external_this_wp_blocks_["parse"])(reusableBlock.content)
      };
    } else {
      // Start in preview mode when we're working with an existing reusable block
      _this.state = {
        isEditing: false,
        title: null,
        blocks: []
      };
    }

    return _this;
  }

  Object(createClass["a" /* default */])(ReusableBlockEdit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.props.reusableBlock) {
        this.props.fetchReusableBlock();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.reusableBlock !== this.props.reusableBlock && this.state.title === null) {
        this.setState({
          title: this.props.reusableBlock.title,
          blocks: Object(external_this_wp_blocks_["parse"])(this.props.reusableBlock.content)
        });
      }
    }
  }, {
    key: "startEditing",
    value: function startEditing() {
      var reusableBlock = this.props.reusableBlock;
      this.setState({
        isEditing: true,
        title: reusableBlock.title,
        blocks: Object(external_this_wp_blocks_["parse"])(reusableBlock.content)
      });
    }
  }, {
    key: "stopEditing",
    value: function stopEditing() {
      this.setState({
        isEditing: false,
        title: null,
        blocks: []
      });
    }
  }, {
    key: "setBlocks",
    value: function setBlocks(blocks) {
      this.setState({
        blocks: blocks
      });
    }
  }, {
    key: "setTitle",
    value: function setTitle(title) {
      this.setState({
        title: title
      });
    }
  }, {
    key: "save",
    value: function save() {
      var _this$props = this.props,
          onChange = _this$props.onChange,
          onSave = _this$props.onSave;
      var _this$state = this.state,
          blocks = _this$state.blocks,
          title = _this$state.title;
      var content = Object(external_this_wp_blocks_["serialize"])(blocks);
      onChange({
        title: title,
        content: content
      });
      onSave();
      this.stopEditing();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          isSelected = _this$props2.isSelected,
          reusableBlock = _this$props2.reusableBlock,
          isFetching = _this$props2.isFetching,
          isSaving = _this$props2.isSaving,
          canUpdateBlock = _this$props2.canUpdateBlock,
          settings = _this$props2.settings;
      var _this$state2 = this.state,
          isEditing = _this$state2.isEditing,
          title = _this$state2.title,
          blocks = _this$state2.blocks;

      if (!reusableBlock && isFetching) {
        return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Placeholder"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Spinner"], null));
      }

      if (!reusableBlock) {
        return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Placeholder"], null, Object(external_this_wp_i18n_["__"])('Block has been deleted or is unavailable.'));
      }

      var element = Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockEditorProvider"], {
        settings: settings,
        value: blocks,
        onChange: this.setBlocks,
        onInput: this.setBlocks
      }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["WritingFlow"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockList"], null)));

      if (!isEditing) {
        element = Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Disabled"], null, element);
      }

      return Object(external_this_wp_element_["createElement"])("div", {
        className: "block-library-block__reusable-block-container"
      }, (isSelected || isEditing) && Object(external_this_wp_element_["createElement"])(edit_panel, {
        isEditing: isEditing,
        title: title !== null ? title : reusableBlock.title,
        isSaving: isSaving && !reusableBlock.isTemporary,
        isEditDisabled: !canUpdateBlock,
        onEdit: this.startEditing,
        onChangeTitle: this.setTitle,
        onSave: this.save,
        onCancel: this.stopEditing
      }), element);
    }
  }]);

  return ReusableBlockEdit;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var block_edit = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select, ownProps) {
  var _select = select('core/editor'),
      getReusableBlock = _select.__experimentalGetReusableBlock,
      isFetchingReusableBlock = _select.__experimentalIsFetchingReusableBlock,
      isSavingReusableBlock = _select.__experimentalIsSavingReusableBlock;

  var _select2 = select('core'),
      canUser = _select2.canUser;

  var _select3 = select('core/block-editor'),
      __experimentalGetParsedReusableBlock = _select3.__experimentalGetParsedReusableBlock,
      getSettings = _select3.getSettings;

  var ref = ownProps.attributes.ref;
  var reusableBlock = getReusableBlock(ref);
  return {
    reusableBlock: reusableBlock,
    isFetching: isFetchingReusableBlock(ref),
    isSaving: isSavingReusableBlock(ref),
    blocks: reusableBlock ? __experimentalGetParsedReusableBlock(reusableBlock.id) : null,
    canUpdateBlock: !!reusableBlock && !reusableBlock.isTemporary && !!canUser('update', 'blocks', ref),
    settings: getSettings()
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch, ownProps) {
  var _dispatch = dispatch('core/editor'),
      fetchReusableBlocks = _dispatch.__experimentalFetchReusableBlocks,
      updateReusableBlock = _dispatch.__experimentalUpdateReusableBlock,
      saveReusableBlock = _dispatch.__experimentalSaveReusableBlock;

  var ref = ownProps.attributes.ref;
  return {
    fetchReusableBlock: Object(external_this_lodash_["partial"])(fetchReusableBlocks, ref),
    onChange: Object(external_this_lodash_["partial"])(updateReusableBlock, ref),
    onSave: Object(external_this_lodash_["partial"])(saveReusableBlock, ref)
  };
})])(edit_ReusableBlockEdit));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/block/index.js
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */

var block_metadata = {
  name: "core/block",
  category: "reusable",
  attributes: {
    ref: {
      type: "number"
    }
  },
  supports: {
    customClassName: false,
    html: false,
    inserter: false
  }
};

var block_name = block_metadata.name;

var block_settings = {
  title: Object(external_this_wp_i18n_["__"])('Reusable Block'),
  description: Object(external_this_wp_i18n_["__"])('Create and save content to reuse across your site. Update the block, and the changes apply everywhere it’s used.'),
  edit: block_edit
};

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/rss.js


/**
 * WordPress dependencies
 */

var rss = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M5 10.2h-.8v1.5H5c1.9 0 3.8.8 5.1 2.1 1.4 1.4 2.1 3.2 2.1 5.1v.8h1.5V19c0-2.3-.9-4.5-2.6-6.2-1.6-1.6-3.8-2.6-6.1-2.6zm10.4-1.6C12.6 5.8 8.9 4.2 5 4.2h-.8v1.5H5c3.5 0 6.9 1.4 9.4 3.9s3.9 5.8 3.9 9.4v.8h1.5V19c0-3.9-1.6-7.6-4.4-10.4zM4 20h3v-3H4v3z"
}));
/* harmony default export */ var library_rss = (rss);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/rss/edit.js




/**
 * WordPress dependencies
 */






var DEFAULT_MIN_ITEMS = 1;
var DEFAULT_MAX_ITEMS = 10;
function RSSEdit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;

  var _useState = Object(external_this_wp_element_["useState"])(!attributes.feedURL),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      isEditing = _useState2[0],
      setIsEditing = _useState2[1];

  var blockLayout = attributes.blockLayout,
      columns = attributes.columns,
      displayAuthor = attributes.displayAuthor,
      displayDate = attributes.displayDate,
      displayExcerpt = attributes.displayExcerpt,
      excerptLength = attributes.excerptLength,
      feedURL = attributes.feedURL,
      itemsToShow = attributes.itemsToShow;

  function toggleAttribute(propName) {
    return function () {
      var value = attributes[propName];
      setAttributes(Object(defineProperty["a" /* default */])({}, propName, !value));
    };
  }

  function onSubmitURL(event) {
    event.preventDefault();

    if (feedURL) {
      setIsEditing(false);
    }
  }

  if (isEditing) {
    return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Placeholder"], {
      icon: library_rss,
      label: "RSS"
    }, Object(external_this_wp_element_["createElement"])("form", {
      onSubmit: onSubmitURL,
      className: "wp-block-rss__placeholder-form"
    }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["TextControl"], {
      placeholder: Object(external_this_wp_i18n_["__"])('Enter URL here…'),
      value: feedURL,
      onChange: function onChange(value) {
        return setAttributes({
          feedURL: value
        });
      },
      className: "wp-block-rss__placeholder-input"
    }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
      isPrimary: true,
      type: "submit"
    }, Object(external_this_wp_i18n_["__"])('Use URL'))));
  }

  var toolbarControls = [{
    icon: pencil["a" /* default */],
    title: Object(external_this_wp_i18n_["__"])('Edit RSS URL'),
    onClick: function onClick() {
      return setIsEditing(true);
    }
  }, {
    icon: library_list,
    title: Object(external_this_wp_i18n_["__"])('List view'),
    onClick: function onClick() {
      return setAttributes({
        blockLayout: 'list'
      });
    },
    isActive: blockLayout === 'list'
  }, {
    icon: grid["a" /* default */],
    title: Object(external_this_wp_i18n_["__"])('Grid view'),
    onClick: function onClick() {
      return setAttributes({
        blockLayout: 'grid'
      });
    },
    isActive: blockLayout === 'grid'
  }];
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToolbarGroup"], {
    controls: toolbarControls
  })), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InspectorControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
    title: Object(external_this_wp_i18n_["__"])('RSS settings')
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["RangeControl"], {
    label: Object(external_this_wp_i18n_["__"])('Number of items'),
    value: itemsToShow,
    onChange: function onChange(value) {
      return setAttributes({
        itemsToShow: value
      });
    },
    min: DEFAULT_MIN_ITEMS,
    max: DEFAULT_MAX_ITEMS,
    required: true
  }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
    label: Object(external_this_wp_i18n_["__"])('Display author'),
    checked: displayAuthor,
    onChange: toggleAttribute('displayAuthor')
  }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
    label: Object(external_this_wp_i18n_["__"])('Display date'),
    checked: displayDate,
    onChange: toggleAttribute('displayDate')
  }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
    label: Object(external_this_wp_i18n_["__"])('Display excerpt'),
    checked: displayExcerpt,
    onChange: toggleAttribute('displayExcerpt')
  }), displayExcerpt && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["RangeControl"], {
    label: Object(external_this_wp_i18n_["__"])('Max number of words in excerpt'),
    value: excerptLength,
    onChange: function onChange(value) {
      return setAttributes({
        excerptLength: value
      });
    },
    min: 10,
    max: 100,
    required: true
  }), blockLayout === 'grid' && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["RangeControl"], {
    label: Object(external_this_wp_i18n_["__"])('Columns'),
    value: columns,
    onChange: function onChange(value) {
      return setAttributes({
        columns: value
      });
    },
    min: 2,
    max: 6,
    required: true
  }))), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Disabled"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_serverSideRender_default.a, {
    block: "core/rss",
    attributes: attributes
  })));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/rss/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */

var rss_metadata = {
  name: "core/rss",
  category: "widgets",
  attributes: {
    align: {
      type: "string",
      "enum": ["left", "center", "right", "wide", "full"]
    },
    className: {
      type: "string"
    },
    columns: {
      type: "number",
      "default": 2
    },
    blockLayout: {
      type: "string",
      "default": "list"
    },
    feedURL: {
      type: "string",
      "default": ""
    },
    itemsToShow: {
      type: "number",
      "default": 5
    },
    displayExcerpt: {
      type: "boolean",
      "default": false
    },
    displayAuthor: {
      type: "boolean",
      "default": false
    },
    displayDate: {
      type: "boolean",
      "default": false
    },
    excerptLength: {
      type: "number",
      "default": 55
    }
  },
  supports: {
    align: true,
    html: false
  }
};

var rss_name = rss_metadata.name;

var rss_settings = {
  title: Object(external_this_wp_i18n_["__"])('RSS'),
  description: Object(external_this_wp_i18n_["__"])('Display entries from any RSS or Atom feed.'),
  icon: library_rss,
  keywords: [Object(external_this_wp_i18n_["__"])('atom'), Object(external_this_wp_i18n_["__"])('feed')],
  example: {
    attributes: {
      feedURL: 'https://wordpress.org'
    }
  },
  edit: RSSEdit
};

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/search.js
var search = __webpack_require__(287);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/search/edit.js


/**
 * WordPress dependencies
 */


function SearchEdit(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var label = attributes.label,
      placeholder = attributes.placeholder,
      buttonText = attributes.buttonText;
  return Object(external_this_wp_element_["createElement"])("div", {
    className: className
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"], {
    className: "wp-block-search__label",
    "aria-label": Object(external_this_wp_i18n_["__"])('Label text'),
    placeholder: Object(external_this_wp_i18n_["__"])('Add label…'),
    withoutInteractiveFormatting: true,
    value: label,
    onChange: function onChange(html) {
      return setAttributes({
        label: html
      });
    }
  }), Object(external_this_wp_element_["createElement"])("input", {
    className: "wp-block-search__input",
    "aria-label": Object(external_this_wp_i18n_["__"])('Optional placeholder text') // We hide the placeholder field's placeholder when there is a value. This
    // stops screen readers from reading the placeholder field's placeholder
    // which is confusing.
    ,
    placeholder: placeholder ? undefined : Object(external_this_wp_i18n_["__"])('Optional placeholder…'),
    value: placeholder,
    onChange: function onChange(event) {
      return setAttributes({
        placeholder: event.target.value
      });
    }
  }), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"], {
    className: "wp-block-search__button",
    "aria-label": Object(external_this_wp_i18n_["__"])('Button text'),
    placeholder: Object(external_this_wp_i18n_["__"])('Add button text…'),
    withoutInteractiveFormatting: true,
    value: buttonText,
    onChange: function onChange(html) {
      return setAttributes({
        buttonText: html
      });
    }
  }));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/search/variations.js
/**
 * WordPress dependencies
 */

var search_variations_variations = [{
  name: 'default',
  isDefault: true,
  attributes: {
    buttonText: Object(external_this_wp_i18n_["__"])('Search'),
    label: Object(external_this_wp_i18n_["__"])('Search')
  }
}];
/* harmony default export */ var search_variations = (search_variations_variations);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/search/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */

var search_metadata = {
  name: "core/search",
  category: "widgets",
  attributes: {
    align: {
      type: "string",
      "enum": ["left", "center", "right", "wide", "full"]
    },
    className: {
      type: "string"
    },
    label: {
      type: "string"
    },
    placeholder: {
      type: "string",
      "default": ""
    },
    buttonText: {
      type: "string"
    }
  },
  supports: {
    align: true,
    html: false
  }
};


var search_name = search_metadata.name;

var search_settings = {
  title: Object(external_this_wp_i18n_["__"])('Search'),
  description: Object(external_this_wp_i18n_["__"])('Help visitors find your content.'),
  icon: search["a" /* default */],
  keywords: [Object(external_this_wp_i18n_["__"])('find')],
  example: {},
  variations: search_variations,
  edit: SearchEdit
};

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/group.js


/**
 * WordPress dependencies
 */

var group = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M18 4h-7c-1.1 0-2 .9-2 2v3H6c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2v-3h3c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-4.5 14c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h3V13c0 1.1.9 2 2 2h2.5v3zm0-4.5H11c-.3 0-.5-.2-.5-.5v-2.5H13c.3 0 .5.2.5.5v2.5zm5-.5c0 .3-.2.5-.5.5h-3V11c0-1.1-.9-2-2-2h-2.5V6c0-.3.2-.5.5-.5h7c.3 0 .5.2.5.5v7z"
}));
/* harmony default export */ var library_group = (group);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/group/deprecated.js



function group_deprecated_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function group_deprecated_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { group_deprecated_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { group_deprecated_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */



var deprecated_migrateAttributes = function migrateAttributes(attributes) {
  if (!attributes.tagName) {
    attributes = group_deprecated_objectSpread({}, attributes, {
      tagName: 'div'
    });
  }

  if (!attributes.customTextColor && !attributes.customBackgroundColor) {
    return attributes;
  }

  var style = {
    color: {}
  };

  if (attributes.customTextColor) {
    style.color.text = attributes.customTextColor;
  }

  if (attributes.customBackgroundColor) {
    style.color.background = attributes.customBackgroundColor;
  }

  return group_deprecated_objectSpread({}, Object(external_this_lodash_["omit"])(attributes, ['customTextColor', 'customBackgroundColor']), {
    style: style
  });
};

var group_deprecated_deprecated = [// Version of the block without global styles support
{
  attributes: {
    backgroundColor: {
      type: 'string'
    },
    customBackgroundColor: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    },
    customTextColor: {
      type: 'string'
    }
  },
  supports: {
    align: ['wide', 'full'],
    anchor: true,
    html: false
  },
  migrate: deprecated_migrateAttributes,
  save: function save(_ref) {
    var attributes = _ref.attributes;
    var backgroundColor = attributes.backgroundColor,
        customBackgroundColor = attributes.customBackgroundColor,
        textColor = attributes.textColor,
        customTextColor = attributes.customTextColor;
    var backgroundClass = Object(external_this_wp_blockEditor_["getColorClassName"])('background-color', backgroundColor);
    var textClass = Object(external_this_wp_blockEditor_["getColorClassName"])('color', textColor);
    var className = classnames_default()(backgroundClass, textClass, {
      'has-text-color': textColor || customTextColor,
      'has-background': backgroundColor || customBackgroundColor
    });
    var styles = {
      backgroundColor: backgroundClass ? undefined : customBackgroundColor,
      color: textClass ? undefined : customTextColor
    };
    return Object(external_this_wp_element_["createElement"])("div", {
      className: className,
      style: styles
    }, Object(external_this_wp_element_["createElement"])("div", {
      className: "wp-block-group__inner-container"
    }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InnerBlocks"].Content, null)));
  }
}, // Version of the group block with a bug that made text color class not applied.
{
  attributes: {
    backgroundColor: {
      type: 'string'
    },
    customBackgroundColor: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    },
    customTextColor: {
      type: 'string'
    }
  },
  migrate: deprecated_migrateAttributes,
  supports: {
    align: ['wide', 'full'],
    anchor: true,
    html: false
  },
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    var backgroundColor = attributes.backgroundColor,
        customBackgroundColor = attributes.customBackgroundColor,
        textColor = attributes.textColor,
        customTextColor = attributes.customTextColor;
    var backgroundClass = Object(external_this_wp_blockEditor_["getColorClassName"])('background-color', backgroundColor);
    var textClass = Object(external_this_wp_blockEditor_["getColorClassName"])('color', textColor);
    var className = classnames_default()(backgroundClass, {
      'has-text-color': textColor || customTextColor,
      'has-background': backgroundColor || customBackgroundColor
    });
    var styles = {
      backgroundColor: backgroundClass ? undefined : customBackgroundColor,
      color: textClass ? undefined : customTextColor
    };
    return Object(external_this_wp_element_["createElement"])("div", {
      className: className,
      style: styles
    }, Object(external_this_wp_element_["createElement"])("div", {
      className: "wp-block-group__inner-container"
    }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InnerBlocks"].Content, null)));
  }
}, // v1 of group block. Deprecated to add an inner-container div around `InnerBlocks.Content`.
{
  attributes: {
    backgroundColor: {
      type: 'string'
    },
    customBackgroundColor: {
      type: 'string'
    }
  },
  supports: {
    align: ['wide', 'full'],
    anchor: true,
    html: false
  },
  migrate: deprecated_migrateAttributes,
  save: function save(_ref3) {
    var attributes = _ref3.attributes;
    var backgroundColor = attributes.backgroundColor,
        customBackgroundColor = attributes.customBackgroundColor;
    var backgroundClass = Object(external_this_wp_blockEditor_["getColorClassName"])('background-color', backgroundColor);
    var className = classnames_default()(backgroundClass, {
      'has-background': backgroundColor || customBackgroundColor
    });
    var styles = {
      backgroundColor: backgroundClass ? undefined : customBackgroundColor
    };
    return Object(external_this_wp_element_["createElement"])("div", {
      className: className,
      style: styles
    }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InnerBlocks"].Content, null));
  }
}];
/* harmony default export */ var group_deprecated = (group_deprecated_deprecated);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/group/edit.js


/**
 * WordPress dependencies
 */



function GroupEdit(_ref) {
  var attributes = _ref.attributes,
      className = _ref.className,
      clientId = _ref.clientId;
  var hasInnerBlocks = Object(external_this_wp_data_["useSelect"])(function (select) {
    var _select = select('core/block-editor'),
        getBlock = _select.getBlock;

    var block = getBlock(clientId);
    return !!(block && block.innerBlocks.length);
  }, [clientId]);
  var BlockWrapper = external_this_wp_blockEditor_["__experimentalBlock"][attributes.tagName];
  return Object(external_this_wp_element_["createElement"])(BlockWrapper, {
    className: className
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InnerBlocks"], {
    renderAppender: hasInnerBlocks ? undefined : function () {
      return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InnerBlocks"].ButtonBlockAppender, null);
    },
    __experimentalTagName: "div",
    __experimentalPassedProps: {
      className: 'wp-block-group__inner-container'
    }
  }));
}

/* harmony default export */ var group_edit = (GroupEdit);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/group/save.js


/**
 * WordPress dependencies
 */

function group_save_save(_ref) {
  var attributes = _ref.attributes;
  var Tag = attributes.tagName;
  return Object(external_this_wp_element_["createElement"])(Tag, null, Object(external_this_wp_element_["createElement"])("div", {
    className: "wp-block-group__inner-container"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InnerBlocks"].Content, null)));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/group/index.js
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



var group_metadata = {
  name: "core/group",
  category: "design",
  attributes: {
    tagName: {
      type: "string",
      "default": "div"
    }
  },
  supports: {
    align: ["wide", "full"],
    anchor: true,
    html: false,
    lightBlockWrapper: true,
    __experimentalColor: {
      gradients: true,
      linkColor: true
    }
  }
};

var group_name = group_metadata.name;

var group_settings = {
  title: Object(external_this_wp_i18n_["__"])('Group'),
  icon: library_group,
  description: Object(external_this_wp_i18n_["__"])('A block that groups other blocks.'),
  keywords: [Object(external_this_wp_i18n_["__"])('container'), Object(external_this_wp_i18n_["__"])('wrapper'), Object(external_this_wp_i18n_["__"])('row'), Object(external_this_wp_i18n_["__"])('section')],
  example: {
    attributes: {
      style: {
        color: {
          text: '#000000',
          background: '#ffffff'
        }
      }
    },
    innerBlocks: [{
      name: 'core/paragraph',
      attributes: {
        customTextColor: '#cf2e2e',
        fontSize: 'large',
        content: Object(external_this_wp_i18n_["__"])('One.')
      }
    }, {
      name: 'core/paragraph',
      attributes: {
        customTextColor: '#ff6900',
        fontSize: 'large',
        content: Object(external_this_wp_i18n_["__"])('Two.')
      }
    }, {
      name: 'core/paragraph',
      attributes: {
        customTextColor: '#fcb900',
        fontSize: 'large',
        content: Object(external_this_wp_i18n_["__"])('Three.')
      }
    }, {
      name: 'core/paragraph',
      attributes: {
        customTextColor: '#00d084',
        fontSize: 'large',
        content: Object(external_this_wp_i18n_["__"])('Four.')
      }
    }, {
      name: 'core/paragraph',
      attributes: {
        customTextColor: '#0693e3',
        fontSize: 'large',
        content: Object(external_this_wp_i18n_["__"])('Five.')
      }
    }, {
      name: 'core/paragraph',
      attributes: {
        customTextColor: '#9b51e0',
        fontSize: 'large',
        content: Object(external_this_wp_i18n_["__"])('Six.')
      }
    }]
  },
  transforms: {
    from: [{
      type: 'block',
      isMultiBlock: true,
      blocks: ['*'],
      __experimentalConvert: function __experimentalConvert(blocks) {
        // Avoid transforming a single `core/group` Block
        if (blocks.length === 1 && blocks[0].name === 'core/group') {
          return;
        }

        var alignments = ['wide', 'full']; // Determine the widest setting of all the blocks to be grouped

        var widestAlignment = blocks.reduce(function (accumulator, block) {
          var align = block.attributes.align;
          return alignments.indexOf(align) > alignments.indexOf(accumulator) ? align : accumulator;
        }, undefined); // Clone the Blocks to be Grouped
        // Failing to create new block references causes the original blocks
        // to be replaced in the switchToBlockType call thereby meaning they
        // are removed both from their original location and within the
        // new group block.

        var groupInnerBlocks = blocks.map(function (block) {
          return Object(external_this_wp_blocks_["createBlock"])(block.name, block.attributes, block.innerBlocks);
        });
        return Object(external_this_wp_blocks_["createBlock"])('core/group', {
          align: widestAlignment
        }, groupInnerBlocks);
      }
    }]
  },
  edit: group_edit,
  save: group_save_save,
  deprecated: group_deprecated
};

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/separator.js


/**
 * WordPress dependencies
 */

var separator = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M20.2 7v4H3.8V7H2.2v9h1.6v-3.5h16.4V16h1.6V7z"
}));
/* harmony default export */ var library_separator = (separator);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/separator/separator-settings.js


/**
 * WordPress dependencies
 */



var separator_settings_SeparatorSettings = function SeparatorSettings(_ref) {
  var color = _ref.color,
      setColor = _ref.setColor;
  return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InspectorControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["PanelColorSettings"], {
    title: Object(external_this_wp_i18n_["__"])('Color settings'),
    colorSettings: [{
      value: color.color,
      onChange: setColor,
      label: Object(external_this_wp_i18n_["__"])('Color')
    }]
  }));
};

/* harmony default export */ var separator_settings = (separator_settings_SeparatorSettings);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/separator/edit.js



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



function SeparatorEdit(_ref) {
  var color = _ref.color,
      setColor = _ref.setColor,
      className = _ref.className;
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["HorizontalRule"], {
    className: classnames_default()(className, Object(defineProperty["a" /* default */])({
      'has-background': color.color
    }, color.class, color.class)),
    style: {
      backgroundColor: color.color,
      color: color.color
    }
  }), Object(external_this_wp_element_["createElement"])(separator_settings, {
    color: color,
    setColor: setColor
  }));
}

/* harmony default export */ var separator_edit = (Object(external_this_wp_blockEditor_["withColors"])('color', {
  textColor: 'color'
})(SeparatorEdit));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/separator/save.js



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


function separatorSave(_ref) {
  var _classnames;

  var attributes = _ref.attributes;
  var color = attributes.color,
      customColor = attributes.customColor; // the hr support changing color using border-color, since border-color
  // is not yet supported in the color palette, we use background-color

  var backgroundClass = Object(external_this_wp_blockEditor_["getColorClassName"])('background-color', color); // the dots styles uses text for the dots, to change those dots color is
  // using color, not backgroundColor

  var colorClass = Object(external_this_wp_blockEditor_["getColorClassName"])('color', color);
  var separatorClasses = classnames_default()((_classnames = {
    'has-text-color has-background': color || customColor
  }, Object(defineProperty["a" /* default */])(_classnames, backgroundClass, backgroundClass), Object(defineProperty["a" /* default */])(_classnames, colorClass, colorClass), _classnames));
  var separatorStyle = {
    backgroundColor: backgroundClass ? undefined : customColor,
    color: colorClass ? undefined : customColor
  };
  return Object(external_this_wp_element_["createElement"])("hr", {
    className: separatorClasses,
    style: separatorStyle
  });
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/separator/transforms.js
/**
 * WordPress dependencies
 */

var separator_transforms_transforms = {
  from: [{
    type: 'enter',
    regExp: /^-{3,}$/,
    transform: function transform() {
      return Object(external_this_wp_blocks_["createBlock"])('core/separator');
    }
  }, {
    type: 'raw',
    selector: 'hr',
    schema: {
      hr: {}
    }
  }]
};
/* harmony default export */ var separator_transforms = (separator_transforms_transforms);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/separator/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


var separator_metadata = {
  name: "core/separator",
  category: "design",
  attributes: {
    color: {
      type: "string"
    },
    customColor: {
      type: "string"
    }
  }
};


var separator_name = separator_metadata.name;

var build_module_separator_settings = {
  title: Object(external_this_wp_i18n_["__"])('Separator'),
  description: Object(external_this_wp_i18n_["__"])('Create a break between ideas or sections with a horizontal separator.'),
  icon: library_separator,
  keywords: [Object(external_this_wp_i18n_["__"])('horizontal-line'), 'hr', Object(external_this_wp_i18n_["__"])('divider')],
  example: {
    attributes: {
      customColor: '#065174',
      className: 'is-style-wide'
    }
  },
  styles: [{
    name: 'default',
    label: Object(external_this_wp_i18n_["__"])('Default'),
    isDefault: true
  }, {
    name: 'wide',
    label: Object(external_this_wp_i18n_["__"])('Wide Line')
  }, {
    name: 'dots',
    label: Object(external_this_wp_i18n_["__"])('Dots')
  }],
  transforms: separator_transforms,
  edit: separator_edit,
  save: separatorSave
};

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/shortcode.js


/**
 * WordPress dependencies
 */

var shortcode_shortcode = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M16 4.2v1.5h2.5v12.5H16v1.5h4V4.2h-4zM4.2 19.8h4v-1.5H5.8V5.8h2.5V4.2h-4l-.1 15.6zm5.1-3.1l1.4.6 4-10-1.4-.6-4 10z"
}));
/* harmony default export */ var library_shortcode = (shortcode_shortcode);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/icon/index.js
var build_module_icon = __webpack_require__(130);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/shortcode/edit.js


/**
 * WordPress dependencies
 */




function ShortcodeEdit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var instanceId = Object(external_this_wp_compose_["useInstanceId"])(ShortcodeEdit);
  var inputId = "blocks-shortcode-input-".concat(instanceId);
  return Object(external_this_wp_element_["createElement"])("div", {
    className: "wp-block-shortcode components-placeholder"
  }, Object(external_this_wp_element_["createElement"])("label", {
    htmlFor: inputId,
    className: "components-placeholder__label"
  }, Object(external_this_wp_element_["createElement"])(build_module_icon["a" /* default */], {
    icon: library_shortcode
  }), Object(external_this_wp_i18n_["__"])('Shortcode')), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["PlainText"], {
    className: "blocks-shortcode__textarea",
    id: inputId,
    value: attributes.text,
    placeholder: Object(external_this_wp_i18n_["__"])('Write shortcode here…'),
    onChange: function onChange(text) {
      return setAttributes({
        text: text
      });
    }
  }));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/shortcode/save.js


/**
 * WordPress dependencies
 */

function shortcode_save_save(_ref) {
  var attributes = _ref.attributes;
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["RawHTML"], null, attributes.text);
}

// EXTERNAL MODULE: external {"this":["wp","autop"]}
var external_this_wp_autop_ = __webpack_require__(94);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/shortcode/transforms.js
/**
 * WordPress dependencies
 */

var shortcode_transforms_transforms = {
  from: [{
    type: 'shortcode',
    // Per "Shortcode names should be all lowercase and use all
    // letters, but numbers and underscores should work fine too.
    // Be wary of using hyphens (dashes), you'll be better off not
    // using them." in https://codex.wordpress.org/Shortcode_API
    // Require that the first character be a letter. This notably
    // prevents footnote markings ([1]) from being caught as
    // shortcodes.
    tag: '[a-z][a-z0-9_-]*',
    attributes: {
      text: {
        type: 'string',
        shortcode: function shortcode(attrs, _ref) {
          var content = _ref.content;
          return Object(external_this_wp_autop_["removep"])(Object(external_this_wp_autop_["autop"])(content));
        }
      }
    },
    priority: 20
  }]
};
/* harmony default export */ var shortcode_transforms = (shortcode_transforms_transforms);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/shortcode/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




var shortcode_metadata = {
  name: "core/shortcode",
  category: "widgets",
  attributes: {
    text: {
      type: "string",
      source: "html"
    }
  },
  supports: {
    className: false,
    customClassName: false,
    html: false
  }
};
var shortcode_name = shortcode_metadata.name;

var shortcode_settings = {
  title: Object(external_this_wp_i18n_["__"])('Shortcode'),
  description: Object(external_this_wp_i18n_["__"])('Insert additional custom elements with a WordPress shortcode.'),
  icon: library_shortcode,
  transforms: shortcode_transforms,
  edit: ShortcodeEdit,
  save: shortcode_save_save
};

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/resize-corner-n-e.js


/**
 * WordPress dependencies
 */

var resizeCornerNE = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M12.5 4.2v1.6h4.7L5.8 17.2V12H4.2v7.8H12v-1.6H6.8L18.2 6.8v4.7h1.6V4.2z"
}));
/* harmony default export */ var resize_corner_n_e = (resizeCornerNE);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/spacer/edit.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






var MIN_SPACER_HEIGHT = 20;
var MAX_SPACER_HEIGHT = 500;

var edit_SpacerEdit = function SpacerEdit(_ref) {
  var attributes = _ref.attributes,
      isSelected = _ref.isSelected,
      setAttributes = _ref.setAttributes,
      onResizeStart = _ref.onResizeStart,
      _onResizeStop = _ref.onResizeStop;
  var height = attributes.height;

  var updateHeight = function updateHeight(value) {
    setAttributes({
      height: value
    });
  };

  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ResizableBox"], {
    className: classnames_default()('block-library-spacer__resize-container', {
      'is-selected': isSelected
    }),
    size: {
      height: height
    },
    minHeight: MIN_SPACER_HEIGHT,
    enable: {
      top: false,
      right: false,
      bottom: true,
      left: false,
      topRight: false,
      bottomRight: false,
      bottomLeft: false,
      topLeft: false
    },
    onResizeStart: onResizeStart,
    onResizeStop: function onResizeStop(event, direction, elt, delta) {
      _onResizeStop();

      var spacerHeight = Math.min(parseInt(height + delta.height, 10), MAX_SPACER_HEIGHT);
      updateHeight(spacerHeight);
    },
    showHandle: isSelected
  }), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InspectorControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
    title: Object(external_this_wp_i18n_["__"])('Spacer settings')
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["RangeControl"], {
    label: Object(external_this_wp_i18n_["__"])('Height in pixels'),
    min: MIN_SPACER_HEIGHT,
    max: Math.max(MAX_SPACER_HEIGHT, height),
    value: height,
    onChange: updateHeight
  }))));
};

/* harmony default export */ var spacer_edit = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/block-editor'),
      toggleSelection = _dispatch.toggleSelection;

  return {
    onResizeStart: function onResizeStart() {
      return toggleSelection(false);
    },
    onResizeStop: function onResizeStop() {
      return toggleSelection(true);
    }
  };
}), external_this_wp_compose_["withInstanceId"]])(edit_SpacerEdit));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/spacer/save.js

function spacer_save_save(_ref) {
  var attributes = _ref.attributes;
  return Object(external_this_wp_element_["createElement"])("div", {
    style: {
      height: attributes.height
    },
    "aria-hidden": true
  });
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/spacer/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


var spacer_metadata = {
  name: "core/spacer",
  category: "design",
  attributes: {
    height: {
      type: "number",
      "default": 100
    }
  }
};

var spacer_name = spacer_metadata.name;

var spacer_settings = {
  title: Object(external_this_wp_i18n_["__"])('Spacer'),
  description: Object(external_this_wp_i18n_["__"])('Add white space between blocks and customize its height.'),
  icon: resize_corner_n_e,
  edit: spacer_edit,
  save: spacer_save_save
};

// EXTERNAL MODULE: external {"this":["wp","deprecated"]}
var external_this_wp_deprecated_ = __webpack_require__(37);
var external_this_wp_deprecated_default = /*#__PURE__*/__webpack_require__.n(external_this_wp_deprecated_);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/subhead/edit.js


/**
 * WordPress dependencies
 */



function SubheadEdit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes,
      className = _ref.className;
  var align = attributes.align,
      content = attributes.content,
      placeholder = attributes.placeholder;
  external_this_wp_deprecated_default()('The Subheading block', {
    alternative: 'the Paragraph block',
    plugin: 'Gutenberg'
  });
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["AlignmentToolbar"], {
    value: align,
    onChange: function onChange(nextAlign) {
      setAttributes({
        align: nextAlign
      });
    }
  })), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"], {
    tagName: "p",
    value: content,
    onChange: function onChange(nextContent) {
      setAttributes({
        content: nextContent
      });
    },
    style: {
      textAlign: align
    },
    className: className,
    placeholder: placeholder || Object(external_this_wp_i18n_["__"])('Write subheading…')
  }));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/subhead/save.js


/**
 * WordPress dependencies
 */

function subhead_save_save(_ref) {
  var attributes = _ref.attributes;
  var align = attributes.align,
      content = attributes.content;
  return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
    tagName: "p",
    style: {
      textAlign: align
    },
    value: content
  });
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/subhead/transforms.js
/**
 * WordPress dependencies
 */

var subhead_transforms_transforms = {
  to: [{
    type: 'block',
    blocks: ['core/paragraph'],
    transform: function transform(attributes) {
      return Object(external_this_wp_blocks_["createBlock"])('core/paragraph', attributes);
    }
  }]
};
/* harmony default export */ var subhead_transforms = (subhead_transforms_transforms);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/subhead/index.js


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


var subhead_metadata = {
  name: "core/subhead",
  category: "text",
  attributes: {
    align: {
      type: "string"
    },
    content: {
      type: "string",
      source: "html",
      selector: "p"
    }
  },
  supports: {
    inserter: false,
    multiple: false
  }
};


var subhead_name = subhead_metadata.name;

var subhead_settings = {
  title: Object(external_this_wp_i18n_["__"])('Subheading (deprecated)'),
  description: Object(external_this_wp_i18n_["__"])('This block is deprecated. Please use the Paragraph block instead.'),
  icon: Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
    d: "M7.1 6l-.5 3h4.5L9.4 19h3l1.8-10h4.5l.5-3H7.1z"
  })),
  transforms: subhead_transforms,
  edit: SubheadEdit,
  save: subhead_save_save
};

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/block-table.js


/**
 * WordPress dependencies
 */

var blockTable = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.5h14c.3 0 .5.2.5.5v3.5h-15V5c0-.3.2-.5.5-.5zm8 5.5h6.5v3.5H13V10zm-1.5 3.5h-7V10h7v3.5zm-7 5.5v-4h7v4.5H5c-.3 0-.5-.2-.5-.5zm14.5.5h-6V15h6.5v4c0 .3-.2.5-.5.5z"
}));
/* harmony default export */ var block_table = (blockTable);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/table/deprecated.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


var table_deprecated_supports = {
  align: true
};
var table_deprecated_deprecated = [{
  attributes: {
    hasFixedLayout: {
      type: 'boolean',
      default: false
    },
    backgroundColor: {
      type: 'string'
    },
    head: {
      type: 'array',
      default: [],
      source: 'query',
      selector: 'thead tr',
      query: {
        cells: {
          type: 'array',
          default: [],
          source: 'query',
          selector: 'td,th',
          query: {
            content: {
              type: 'string',
              source: 'html'
            },
            tag: {
              type: 'string',
              default: 'td',
              source: 'tag'
            },
            scope: {
              type: 'string',
              source: 'attribute',
              attribute: 'scope'
            }
          }
        }
      }
    },
    body: {
      type: 'array',
      default: [],
      source: 'query',
      selector: 'tbody tr',
      query: {
        cells: {
          type: 'array',
          default: [],
          source: 'query',
          selector: 'td,th',
          query: {
            content: {
              type: 'string',
              source: 'html'
            },
            tag: {
              type: 'string',
              default: 'td',
              source: 'tag'
            },
            scope: {
              type: 'string',
              source: 'attribute',
              attribute: 'scope'
            }
          }
        }
      }
    },
    foot: {
      type: 'array',
      default: [],
      source: 'query',
      selector: 'tfoot tr',
      query: {
        cells: {
          type: 'array',
          default: [],
          source: 'query',
          selector: 'td,th',
          query: {
            content: {
              type: 'string',
              source: 'html'
            },
            tag: {
              type: 'string',
              default: 'td',
              source: 'tag'
            },
            scope: {
              type: 'string',
              source: 'attribute',
              attribute: 'scope'
            }
          }
        }
      }
    }
  },
  supports: table_deprecated_supports,
  save: function save(_ref) {
    var attributes = _ref.attributes;
    var hasFixedLayout = attributes.hasFixedLayout,
        head = attributes.head,
        body = attributes.body,
        foot = attributes.foot,
        backgroundColor = attributes.backgroundColor;
    var isEmpty = !head.length && !body.length && !foot.length;

    if (isEmpty) {
      return null;
    }

    var backgroundClass = Object(external_this_wp_blockEditor_["getColorClassName"])('background-color', backgroundColor);
    var classes = classnames_default()(backgroundClass, {
      'has-fixed-layout': hasFixedLayout,
      'has-background': !!backgroundClass
    });

    var Section = function Section(_ref2) {
      var type = _ref2.type,
          rows = _ref2.rows;

      if (!rows.length) {
        return null;
      }

      var Tag = "t".concat(type);
      return Object(external_this_wp_element_["createElement"])(Tag, null, rows.map(function (_ref3, rowIndex) {
        var cells = _ref3.cells;
        return Object(external_this_wp_element_["createElement"])("tr", {
          key: rowIndex
        }, cells.map(function (_ref4, cellIndex) {
          var content = _ref4.content,
              tag = _ref4.tag,
              scope = _ref4.scope;
          return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
            tagName: tag,
            value: content,
            key: cellIndex,
            scope: tag === 'th' ? scope : undefined
          });
        }));
      }));
    };

    return Object(external_this_wp_element_["createElement"])("table", {
      className: classes
    }, Object(external_this_wp_element_["createElement"])(Section, {
      type: "head",
      rows: head
    }), Object(external_this_wp_element_["createElement"])(Section, {
      type: "body",
      rows: body
    }), Object(external_this_wp_element_["createElement"])(Section, {
      type: "foot",
      rows: foot
    }));
  }
}];
/* harmony default export */ var table_deprecated = (table_deprecated_deprecated);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/align-left.js
var align_left = __webpack_require__(283);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/align-center.js
var align_center = __webpack_require__(284);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/align-right.js
var align_right = __webpack_require__(285);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/table-row-before.js


/**
 * WordPress dependencies
 */

var tableRowBefore = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M6.656 6.464h2.88v2.88h1.408v-2.88h2.88V5.12h-2.88V2.24H9.536v2.88h-2.88zM0 17.92V0h20.48v17.92H0zm7.68-2.56h5.12v-3.84H7.68v3.84zm-6.4 0H6.4v-3.84H1.28v3.84zM19.2 1.28H1.28v9.024H19.2V1.28zm0 10.24h-5.12v3.84h5.12v-3.84zM6.656 6.464h2.88v2.88h1.408v-2.88h2.88V5.12h-2.88V2.24H9.536v2.88h-2.88zM0 17.92V0h20.48v17.92H0zm7.68-2.56h5.12v-3.84H7.68v3.84zm-6.4 0H6.4v-3.84H1.28v3.84zM19.2 1.28H1.28v9.024H19.2V1.28zm0 10.24h-5.12v3.84h5.12v-3.84z"
}));
/* harmony default export */ var table_row_before = (tableRowBefore);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/table-row-after.js


/**
 * WordPress dependencies
 */

var tableRowAfter = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M13.824 10.176h-2.88v-2.88H9.536v2.88h-2.88v1.344h2.88v2.88h1.408v-2.88h2.88zM0 17.92V0h20.48v17.92H0zM6.4 1.28H1.28v3.84H6.4V1.28zm6.4 0H7.68v3.84h5.12V1.28zm6.4 0h-5.12v3.84h5.12V1.28zm0 5.056H1.28v9.024H19.2V6.336z"
}));
/* harmony default export */ var table_row_after = (tableRowAfter);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/table-row-delete.js


/**
 * WordPress dependencies
 */

var tableRowDelete = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M17.728 11.456L14.592 8.32l3.2-3.2-1.536-1.536-3.2 3.2L9.92 3.648 8.384 5.12l3.2 3.2-3.264 3.264 1.536 1.536 3.264-3.264 3.136 3.136 1.472-1.536zM0 17.92V0h20.48v17.92H0zm19.2-6.4h-.448l-1.28-1.28H19.2V6.4h-1.792l1.28-1.28h.512V1.28H1.28v3.84h6.208l1.28 1.28H1.28v3.84h7.424l-1.28 1.28H1.28v3.84H19.2v-3.84z"
}));
/* harmony default export */ var table_row_delete = (tableRowDelete);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/table-column-before.js


/**
 * WordPress dependencies
 */

var tableColumnBefore = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M6.4 3.776v3.648H2.752v1.792H6.4v3.648h1.728V9.216h3.712V7.424H8.128V3.776zM0 17.92V0h20.48v17.92H0zM12.8 1.28H1.28v14.08H12.8V1.28zm6.4 0h-5.12v3.84h5.12V1.28zm0 5.12h-5.12v3.84h5.12V6.4zm0 5.12h-5.12v3.84h5.12v-3.84z"
}));
/* harmony default export */ var table_column_before = (tableColumnBefore);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/table-column-after.js


/**
 * WordPress dependencies
 */

var tableColumnAfter = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M14.08 12.864V9.216h3.648V7.424H14.08V3.776h-1.728v3.648H8.64v1.792h3.712v3.648zM0 17.92V0h20.48v17.92H0zM6.4 1.28H1.28v3.84H6.4V1.28zm0 5.12H1.28v3.84H6.4V6.4zm0 5.12H1.28v3.84H6.4v-3.84zM19.2 1.28H7.68v14.08H19.2V1.28z"
}));
/* harmony default export */ var table_column_after = (tableColumnAfter);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/table-column-delete.js


/**
 * WordPress dependencies
 */

var tableColumnDelete = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M6.4 9.98L7.68 8.7v-.256L6.4 7.164V9.98zm6.4-1.532l1.28-1.28V9.92L12.8 8.64v-.192zm7.68 9.472V0H0v17.92h20.48zm-1.28-2.56h-5.12v-1.024l-.256.256-1.024-1.024v1.792H7.68v-1.792l-1.024 1.024-.256-.256v1.024H1.28V1.28H6.4v2.368l.704-.704.576.576V1.216h5.12V3.52l.96-.96.32.32V1.216h5.12V15.36zm-5.76-2.112l-3.136-3.136-3.264 3.264-1.536-1.536 3.264-3.264L5.632 5.44l1.536-1.536 3.136 3.136 3.2-3.2 1.536 1.536-3.2 3.2 3.136 3.136-1.536 1.536z"
}));
/* harmony default export */ var table_column_delete = (tableColumnDelete);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/table.js


/**
 * WordPress dependencies
 */

var table = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M4 6v11.5h16V6H4zm1.5 1.5h6V11h-6V7.5zm0 8.5v-3.5h6V16h-6zm13 0H13v-3.5h5.5V16zM13 11V7.5h5.5V11H13z"
}));
/* harmony default export */ var library_table = (table);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/table/state.js



function state_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function state_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { state_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { state_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

var INHERITED_COLUMN_ATTRIBUTES = ['align'];
/**
 * Creates a table state.
 *
 * @param {Object} options
 * @param {number} options.rowCount    Row count for the table to create.
 * @param {number} options.columnCount Column count for the table to create.
 *
 * @return {Object} New table state.
 */

function createTable(_ref) {
  var rowCount = _ref.rowCount,
      columnCount = _ref.columnCount;
  return {
    body: Object(external_this_lodash_["times"])(rowCount, function () {
      return {
        cells: Object(external_this_lodash_["times"])(columnCount, function () {
          return {
            content: '',
            tag: 'td'
          };
        })
      };
    })
  };
}
/**
 * Returns the first row in the table.
 *
 * @param {Object} state Current table state.
 *
 * @return {Object} The first table row.
 */

function getFirstRow(state) {
  if (!isEmptyTableSection(state.head)) {
    return state.head[0];
  }

  if (!isEmptyTableSection(state.body)) {
    return state.body[0];
  }

  if (!isEmptyTableSection(state.foot)) {
    return state.foot[0];
  }
}
/**
 * Gets an attribute for a cell.
 *
 * @param {Object} state 		 Current table state.
 * @param {Object} cellLocation  The location of the cell
 * @param {string} attributeName The name of the attribute to get the value of.
 *
 * @return {*} The attribute value.
 */

function getCellAttribute(state, cellLocation, attributeName) {
  var sectionName = cellLocation.sectionName,
      rowIndex = cellLocation.rowIndex,
      columnIndex = cellLocation.columnIndex;
  return Object(external_this_lodash_["get"])(state, [sectionName, rowIndex, 'cells', columnIndex, attributeName]);
}
/**
 * Returns updated cell attributes after applying the `updateCell` function to the selection.
 *
 * @param {Object}   state      The block attributes.
 * @param {Object}   selection  The selection of cells to update.
 * @param {Function} updateCell A function to update the selected cell attributes.
 *
 * @return {Object} New table state including the updated cells.
 */

function updateSelectedCell(state, selection, updateCell) {
  if (!selection) {
    return state;
  }

  var tableSections = Object(external_this_lodash_["pick"])(state, ['head', 'body', 'foot']);
  var selectionSectionName = selection.sectionName,
      selectionRowIndex = selection.rowIndex;
  return Object(external_this_lodash_["mapValues"])(tableSections, function (section, sectionName) {
    if (selectionSectionName && selectionSectionName !== sectionName) {
      return section;
    }

    return section.map(function (row, rowIndex) {
      if (selectionRowIndex && selectionRowIndex !== rowIndex) {
        return row;
      }

      return {
        cells: row.cells.map(function (cellAttributes, columnIndex) {
          var cellLocation = {
            sectionName: sectionName,
            columnIndex: columnIndex,
            rowIndex: rowIndex
          };

          if (!isCellSelected(cellLocation, selection)) {
            return cellAttributes;
          }

          return updateCell(cellAttributes);
        })
      };
    });
  });
}
/**
 * Returns whether the cell at `cellLocation` is included in the selection `selection`.
 *
 * @param {Object} cellLocation An object containing cell location properties.
 * @param {Object} selection    An object containing selection properties.
 *
 * @return {boolean} True if the cell is selected, false otherwise.
 */

function isCellSelected(cellLocation, selection) {
  if (!cellLocation || !selection) {
    return false;
  }

  switch (selection.type) {
    case 'column':
      return selection.type === 'column' && cellLocation.columnIndex === selection.columnIndex;

    case 'cell':
      return selection.type === 'cell' && cellLocation.sectionName === selection.sectionName && cellLocation.columnIndex === selection.columnIndex && cellLocation.rowIndex === selection.rowIndex;
  }
}
/**
 * Inserts a row in the table state.
 *
 * @param {Object} state               Current table state.
 * @param {Object} options
 * @param {string} options.sectionName Section in which to insert the row.
 * @param {number} options.rowIndex    Row index at which to insert the row.
 * @param {number} options.columnCount Column count for the table to create.
 *
 * @return {Object} New table state.
 */

function insertRow(state, _ref2) {
  var sectionName = _ref2.sectionName,
      rowIndex = _ref2.rowIndex,
      columnCount = _ref2.columnCount;
  var firstRow = getFirstRow(state);
  var cellCount = columnCount === undefined ? Object(external_this_lodash_["get"])(firstRow, ['cells', 'length']) : columnCount; // Bail early if the function cannot determine how many cells to add.

  if (!cellCount) {
    return state;
  }

  return Object(defineProperty["a" /* default */])({}, sectionName, [].concat(Object(toConsumableArray["a" /* default */])(state[sectionName].slice(0, rowIndex)), [{
    cells: Object(external_this_lodash_["times"])(cellCount, function (index) {
      var firstCellInColumn = Object(external_this_lodash_["get"])(firstRow, ['cells', index], {});
      var inheritedAttributes = Object(external_this_lodash_["pick"])(firstCellInColumn, INHERITED_COLUMN_ATTRIBUTES);
      return state_objectSpread({}, inheritedAttributes, {
        content: '',
        tag: sectionName === 'head' ? 'th' : 'td'
      });
    })
  }], Object(toConsumableArray["a" /* default */])(state[sectionName].slice(rowIndex))));
}
/**
 * Deletes a row from the table state.
 *
 * @param {Object} state               Current table state.
 * @param {Object} options
 * @param {string} options.sectionName Section in which to delete the row.
 * @param {number} options.rowIndex    Row index to delete.
 *
 * @return {Object} New table state.
 */

function deleteRow(state, _ref4) {
  var sectionName = _ref4.sectionName,
      rowIndex = _ref4.rowIndex;
  return Object(defineProperty["a" /* default */])({}, sectionName, state[sectionName].filter(function (row, index) {
    return index !== rowIndex;
  }));
}
/**
 * Inserts a column in the table state.
 *
 * @param {Object} state               Current table state.
 * @param {Object} options
 * @param {number} options.columnIndex Column index at which to insert the column.
 *
 * @return {Object} New table state.
 */

function insertColumn(state, _ref6) {
  var columnIndex = _ref6.columnIndex;
  var tableSections = Object(external_this_lodash_["pick"])(state, ['head', 'body', 'foot']);
  return Object(external_this_lodash_["mapValues"])(tableSections, function (section, sectionName) {
    // Bail early if the table section is empty.
    if (isEmptyTableSection(section)) {
      return section;
    }

    return section.map(function (row) {
      // Bail early if the row is empty or it's an attempt to insert past
      // the last possible index of the array.
      if (isEmptyRow(row) || row.cells.length < columnIndex) {
        return row;
      }

      return {
        cells: [].concat(Object(toConsumableArray["a" /* default */])(row.cells.slice(0, columnIndex)), [{
          content: '',
          tag: sectionName === 'head' ? 'th' : 'td'
        }], Object(toConsumableArray["a" /* default */])(row.cells.slice(columnIndex)))
      };
    });
  });
}
/**
 * Deletes a column from the table state.
 *
 * @param {Object} state               Current table state.
 * @param {Object} options
 * @param {number} options.columnIndex Column index to delete.
 *
 * @return {Object} New table state.
 */

function deleteColumn(state, _ref7) {
  var columnIndex = _ref7.columnIndex;
  var tableSections = Object(external_this_lodash_["pick"])(state, ['head', 'body', 'foot']);
  return Object(external_this_lodash_["mapValues"])(tableSections, function (section) {
    // Bail early if the table section is empty.
    if (isEmptyTableSection(section)) {
      return section;
    }

    return section.map(function (row) {
      return {
        cells: row.cells.length >= columnIndex ? row.cells.filter(function (cell, index) {
          return index !== columnIndex;
        }) : row.cells
      };
    }).filter(function (row) {
      return row.cells.length;
    });
  });
}
/**
 * Toggles the existance of a section.
 *
 * @param {Object} state       Current table state.
 * @param {string} sectionName Name of the section to toggle.
 *
 * @return {Object} New table state.
 */

function toggleSection(state, sectionName) {
  // Section exists, replace it with an empty row to remove it.
  if (!isEmptyTableSection(state[sectionName])) {
    return Object(defineProperty["a" /* default */])({}, sectionName, []);
  } // Get the length of the first row of the body to use when creating the header.


  var columnCount = Object(external_this_lodash_["get"])(state, ['body', 0, 'cells', 'length'], 1); // Section doesn't exist, insert an empty row to create the section.

  return insertRow(state, {
    sectionName: sectionName,
    rowIndex: 0,
    columnCount: columnCount
  });
}
/**
 * Determines whether a table section is empty.
 *
 * @param {Object} section Table section state.
 *
 * @return {boolean} True if the table section is empty, false otherwise.
 */

function isEmptyTableSection(section) {
  return !section || !section.length || Object(external_this_lodash_["every"])(section, isEmptyRow);
}
/**
 * Determines whether a table row is empty.
 *
 * @param {Object} row Table row state.
 *
 * @return {boolean} True if the table section is empty, false otherwise.
 */

function isEmptyRow(row) {
  return !(row.cells && row.cells.length);
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/table/edit.js









function table_edit_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function table_edit_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { table_edit_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { table_edit_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function table_edit_createSuper(Derived) { return function () { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (table_edit_isNativeReflectConstruct()) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function table_edit_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */


var BACKGROUND_COLORS = [{
  color: '#f3f4f5',
  name: 'Subtle light gray',
  slug: 'subtle-light-gray'
}, {
  color: '#e9fbe5',
  name: 'Subtle pale green',
  slug: 'subtle-pale-green'
}, {
  color: '#e7f5fe',
  name: 'Subtle pale blue',
  slug: 'subtle-pale-blue'
}, {
  color: '#fcf0ef',
  name: 'Subtle pale pink',
  slug: 'subtle-pale-pink'
}];
var ALIGNMENT_CONTROLS = [{
  icon: align_left["a" /* default */],
  title: Object(external_this_wp_i18n_["__"])('Align Column Left'),
  align: 'left'
}, {
  icon: align_center["a" /* default */],
  title: Object(external_this_wp_i18n_["__"])('Align Column Center'),
  align: 'center'
}, {
  icon: align_right["a" /* default */],
  title: Object(external_this_wp_i18n_["__"])('Align Column Right'),
  align: 'right'
}];
var withCustomBackgroundColors = Object(external_this_wp_blockEditor_["createCustomColorsHOC"])(BACKGROUND_COLORS);
var edit_TableEdit = /*#__PURE__*/function (_Component) {
  Object(inherits["a" /* default */])(TableEdit, _Component);

  var _super = table_edit_createSuper(TableEdit);

  function TableEdit() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, TableEdit);

    _this = _super.apply(this, arguments);
    _this.onCreateTable = _this.onCreateTable.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onChangeFixedLayout = _this.onChangeFixedLayout.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onChange = _this.onChange.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onChangeInitialColumnCount = _this.onChangeInitialColumnCount.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onChangeInitialRowCount = _this.onChangeInitialRowCount.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.renderSection = _this.renderSection.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.getTableControls = _this.getTableControls.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onInsertRow = _this.onInsertRow.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onInsertRowBefore = _this.onInsertRowBefore.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onInsertRowAfter = _this.onInsertRowAfter.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onDeleteRow = _this.onDeleteRow.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onInsertColumn = _this.onInsertColumn.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onInsertColumnBefore = _this.onInsertColumnBefore.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onInsertColumnAfter = _this.onInsertColumnAfter.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onDeleteColumn = _this.onDeleteColumn.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onToggleHeaderSection = _this.onToggleHeaderSection.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onToggleFooterSection = _this.onToggleFooterSection.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onChangeColumnAlignment = _this.onChangeColumnAlignment.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.getCellAlignment = _this.getCellAlignment.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.state = {
      initialRowCount: 2,
      initialColumnCount: 2,
      selectedCell: null
    };
    return _this;
  }
  /**
   * Updates the initial column count used for table creation.
   *
   * @param {number} initialColumnCount New initial column count.
   */


  Object(createClass["a" /* default */])(TableEdit, [{
    key: "onChangeInitialColumnCount",
    value: function onChangeInitialColumnCount(initialColumnCount) {
      this.setState({
        initialColumnCount: initialColumnCount
      });
    }
    /**
     * Updates the initial row count used for table creation.
     *
     * @param {number} initialRowCount New initial row count.
     */

  }, {
    key: "onChangeInitialRowCount",
    value: function onChangeInitialRowCount(initialRowCount) {
      this.setState({
        initialRowCount: initialRowCount
      });
    }
    /**
     * Creates a table based on dimensions in local state.
     *
     * @param {Object} event Form submit event.
     */

  }, {
    key: "onCreateTable",
    value: function onCreateTable(event) {
      event.preventDefault();
      var setAttributes = this.props.setAttributes;
      var _this$state = this.state,
          initialRowCount = _this$state.initialRowCount,
          initialColumnCount = _this$state.initialColumnCount;
      initialRowCount = parseInt(initialRowCount, 10) || 2;
      initialColumnCount = parseInt(initialColumnCount, 10) || 2;
      setAttributes(createTable({
        rowCount: initialRowCount,
        columnCount: initialColumnCount
      }));
    }
    /**
     * Toggles whether the table has a fixed layout or not.
     */

  }, {
    key: "onChangeFixedLayout",
    value: function onChangeFixedLayout() {
      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes;
      var hasFixedLayout = attributes.hasFixedLayout;
      setAttributes({
        hasFixedLayout: !hasFixedLayout
      });
    }
    /**
     * Changes the content of the currently selected cell.
     *
     * @param {Array} content A RichText content value.
     */

  }, {
    key: "onChange",
    value: function onChange(content) {
      var selectedCell = this.state.selectedCell;

      if (!selectedCell) {
        return;
      }

      var _this$props2 = this.props,
          attributes = _this$props2.attributes,
          setAttributes = _this$props2.setAttributes;
      setAttributes(updateSelectedCell(attributes, selectedCell, function (cellAttributes) {
        return table_edit_objectSpread({}, cellAttributes, {
          content: content
        });
      }));
    }
    /**
     * Align text within the a column.
     *
     * @param {string} align The new alignment to apply to the column.
     */

  }, {
    key: "onChangeColumnAlignment",
    value: function onChangeColumnAlignment(align) {
      var selectedCell = this.state.selectedCell;

      if (!selectedCell) {
        return;
      } // Convert the cell selection to a column selection so that alignment
      // is applied to the entire column.


      var columnSelection = {
        type: 'column',
        columnIndex: selectedCell.columnIndex
      };
      var _this$props3 = this.props,
          attributes = _this$props3.attributes,
          setAttributes = _this$props3.setAttributes;
      var newAttributes = updateSelectedCell(attributes, columnSelection, function (cellAttributes) {
        return table_edit_objectSpread({}, cellAttributes, {
          align: align
        });
      });
      setAttributes(newAttributes);
    }
    /**
     * Get the alignment of the currently selected cell.
     *
     * @return {string} The new alignment to apply to the column.
     */

  }, {
    key: "getCellAlignment",
    value: function getCellAlignment() {
      var selectedCell = this.state.selectedCell;

      if (!selectedCell) {
        return;
      }

      var attributes = this.props.attributes;
      return getCellAttribute(attributes, selectedCell, 'align');
    }
    /**
     * Add or remove a `head` table section.
     */

  }, {
    key: "onToggleHeaderSection",
    value: function onToggleHeaderSection() {
      var _this$props4 = this.props,
          attributes = _this$props4.attributes,
          setAttributes = _this$props4.setAttributes;
      setAttributes(toggleSection(attributes, 'head'));
    }
    /**
     * Add or remove a `foot` table section.
     */

  }, {
    key: "onToggleFooterSection",
    value: function onToggleFooterSection() {
      var _this$props5 = this.props,
          attributes = _this$props5.attributes,
          setAttributes = _this$props5.setAttributes;
      setAttributes(toggleSection(attributes, 'foot'));
    }
    /**
     * Inserts a row at the currently selected row index, plus `delta`.
     *
     * @param {number} delta Offset for selected row index at which to insert.
     */

  }, {
    key: "onInsertRow",
    value: function onInsertRow(delta) {
      var selectedCell = this.state.selectedCell;

      if (!selectedCell) {
        return;
      }

      var _this$props6 = this.props,
          attributes = _this$props6.attributes,
          setAttributes = _this$props6.setAttributes;
      var sectionName = selectedCell.sectionName,
          rowIndex = selectedCell.rowIndex;
      this.setState({
        selectedCell: null
      });
      setAttributes(insertRow(attributes, {
        sectionName: sectionName,
        rowIndex: rowIndex + delta
      }));
    }
    /**
     * Inserts a row before the currently selected row.
     */

  }, {
    key: "onInsertRowBefore",
    value: function onInsertRowBefore() {
      this.onInsertRow(0);
    }
    /**
     * Inserts a row after the currently selected row.
     */

  }, {
    key: "onInsertRowAfter",
    value: function onInsertRowAfter() {
      this.onInsertRow(1);
    }
    /**
     * Deletes the currently selected row.
     */

  }, {
    key: "onDeleteRow",
    value: function onDeleteRow() {
      var selectedCell = this.state.selectedCell;

      if (!selectedCell) {
        return;
      }

      var _this$props7 = this.props,
          attributes = _this$props7.attributes,
          setAttributes = _this$props7.setAttributes;
      var sectionName = selectedCell.sectionName,
          rowIndex = selectedCell.rowIndex;
      this.setState({
        selectedCell: null
      });
      setAttributes(deleteRow(attributes, {
        sectionName: sectionName,
        rowIndex: rowIndex
      }));
    }
    /**
     * Inserts a column at the currently selected column index, plus `delta`.
     *
     * @param {number} delta Offset for selected column index at which to insert.
     */

  }, {
    key: "onInsertColumn",
    value: function onInsertColumn() {
      var delta = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var selectedCell = this.state.selectedCell;

      if (!selectedCell) {
        return;
      }

      var _this$props8 = this.props,
          attributes = _this$props8.attributes,
          setAttributes = _this$props8.setAttributes;
      var columnIndex = selectedCell.columnIndex;
      this.setState({
        selectedCell: null
      });
      setAttributes(insertColumn(attributes, {
        columnIndex: columnIndex + delta
      }));
    }
    /**
     * Inserts a column before the currently selected column.
     */

  }, {
    key: "onInsertColumnBefore",
    value: function onInsertColumnBefore() {
      this.onInsertColumn(0);
    }
    /**
     * Inserts a column after the currently selected column.
     */

  }, {
    key: "onInsertColumnAfter",
    value: function onInsertColumnAfter() {
      this.onInsertColumn(1);
    }
    /**
     * Deletes the currently selected column.
     */

  }, {
    key: "onDeleteColumn",
    value: function onDeleteColumn() {
      var selectedCell = this.state.selectedCell;

      if (!selectedCell) {
        return;
      }

      var _this$props9 = this.props,
          attributes = _this$props9.attributes,
          setAttributes = _this$props9.setAttributes;
      var sectionName = selectedCell.sectionName,
          columnIndex = selectedCell.columnIndex;
      this.setState({
        selectedCell: null
      });
      setAttributes(deleteColumn(attributes, {
        sectionName: sectionName,
        columnIndex: columnIndex
      }));
    }
    /**
     * Creates an onFocus handler for a specified cell.
     *
     * @param {Object} cellLocation Object with `section`, `rowIndex`, and
     *                              `columnIndex` properties.
     *
     * @return {Function} Function to call on focus.
     */

  }, {
    key: "createOnFocus",
    value: function createOnFocus(cellLocation) {
      var _this2 = this;

      return function () {
        _this2.setState({
          selectedCell: table_edit_objectSpread({}, cellLocation, {
            type: 'cell'
          })
        });
      };
    }
    /**
     * Gets the table controls to display in the block toolbar.
     *
     * @return {Array} Table controls.
     */

  }, {
    key: "getTableControls",
    value: function getTableControls() {
      var selectedCell = this.state.selectedCell;
      return [{
        icon: table_row_before,
        title: Object(external_this_wp_i18n_["__"])('Add Row Before'),
        isDisabled: !selectedCell,
        onClick: this.onInsertRowBefore
      }, {
        icon: table_row_after,
        title: Object(external_this_wp_i18n_["__"])('Add Row After'),
        isDisabled: !selectedCell,
        onClick: this.onInsertRowAfter
      }, {
        icon: table_row_delete,
        title: Object(external_this_wp_i18n_["__"])('Delete Row'),
        isDisabled: !selectedCell,
        onClick: this.onDeleteRow
      }, {
        icon: table_column_before,
        title: Object(external_this_wp_i18n_["__"])('Add Column Before'),
        isDisabled: !selectedCell,
        onClick: this.onInsertColumnBefore
      }, {
        icon: table_column_after,
        title: Object(external_this_wp_i18n_["__"])('Add Column After'),
        isDisabled: !selectedCell,
        onClick: this.onInsertColumnAfter
      }, {
        icon: table_column_delete,
        title: Object(external_this_wp_i18n_["__"])('Delete Column'),
        isDisabled: !selectedCell,
        onClick: this.onDeleteColumn
      }];
    }
    /**
     * Renders a table section.
     *
     * @param {Object} options
     * @param {string} options.name Section type: head, body, or foot.
     * @param {Array}  options.rows The rows to render.
     *
     * @return {Object} React element for the section.
     */

  }, {
    key: "renderSection",
    value: function renderSection(_ref) {
      var _this3 = this;

      var name = _ref.name,
          rows = _ref.rows;

      if (isEmptyTableSection(rows)) {
        return null;
      }

      var Tag = "t".concat(name);
      return Object(external_this_wp_element_["createElement"])(Tag, null, rows.map(function (_ref2, rowIndex) {
        var cells = _ref2.cells;
        return Object(external_this_wp_element_["createElement"])("tr", {
          key: rowIndex
        }, cells.map(function (_ref3, columnIndex) {
          var content = _ref3.content,
              CellTag = _ref3.tag,
              scope = _ref3.scope,
              align = _ref3.align;
          var cellLocation = {
            sectionName: name,
            rowIndex: rowIndex,
            columnIndex: columnIndex
          };
          var cellClasses = classnames_default()(Object(defineProperty["a" /* default */])({}, "has-text-align-".concat(align), align), 'wp-block-table__cell-content');
          var placeholder = '';

          if (name === 'head') {
            placeholder = Object(external_this_wp_i18n_["__"])('Header label');
          } else if (name === 'foot') {
            placeholder = Object(external_this_wp_i18n_["__"])('Footer label');
          }

          return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"], {
            tagName: CellTag,
            key: columnIndex,
            className: cellClasses,
            scope: CellTag === 'th' ? scope : undefined,
            value: content,
            onChange: _this3.onChange,
            unstableOnFocus: _this3.createOnFocus(cellLocation),
            placeholder: placeholder
          });
        }));
      }));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var isSelected = this.props.isSelected;
      var selectedCell = this.state.selectedCell;

      if (!isSelected && selectedCell) {
        this.setState({
          selectedCell: null
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props10 = this.props,
          attributes = _this$props10.attributes,
          className = _this$props10.className,
          backgroundColor = _this$props10.backgroundColor,
          setBackgroundColor = _this$props10.setBackgroundColor,
          setAttributes = _this$props10.setAttributes,
          insertBlocksAfter = _this$props10.insertBlocksAfter;
      var _this$state2 = this.state,
          initialRowCount = _this$state2.initialRowCount,
          initialColumnCount = _this$state2.initialColumnCount;
      var hasFixedLayout = attributes.hasFixedLayout,
          caption = attributes.caption,
          head = attributes.head,
          body = attributes.body,
          foot = attributes.foot;
      var isEmpty = isEmptyTableSection(head) && isEmptyTableSection(body) && isEmptyTableSection(foot);
      var Section = this.renderSection;

      if (isEmpty) {
        return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Placeholder"], {
          label: Object(external_this_wp_i18n_["__"])('Table'),
          icon: Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockIcon"], {
            icon: block_table,
            showColors: true
          }),
          instructions: Object(external_this_wp_i18n_["__"])('Insert a table for sharing data.')
        }, Object(external_this_wp_element_["createElement"])("form", {
          className: "blocks-table__placeholder-form",
          onSubmit: this.onCreateTable
        }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["TextControl"], {
          type: "number",
          label: Object(external_this_wp_i18n_["__"])('Column Count'),
          value: initialColumnCount,
          onChange: this.onChangeInitialColumnCount,
          min: "1",
          className: "blocks-table__placeholder-input"
        }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["TextControl"], {
          type: "number",
          label: Object(external_this_wp_i18n_["__"])('Row Count'),
          value: initialRowCount,
          onChange: this.onChangeInitialRowCount,
          min: "1",
          className: "blocks-table__placeholder-input"
        }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
          className: "blocks-table__placeholder-button",
          isPrimary: true,
          type: "submit"
        }, Object(external_this_wp_i18n_["__"])('Create Table'))));
      }

      var tableClasses = classnames_default()(backgroundColor.class, {
        'has-fixed-layout': hasFixedLayout,
        'has-background': !!backgroundColor.color
      });
      return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToolbarGroup"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["__experimentalToolbarItem"], null, function (toggleProps) {
        return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["DropdownMenu"], {
          hasArrowIndicator: true,
          icon: library_table,
          toggleProps: toggleProps,
          label: Object(external_this_wp_i18n_["__"])('Edit table'),
          controls: _this4.getTableControls()
        });
      })), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["AlignmentToolbar"], {
        label: Object(external_this_wp_i18n_["__"])('Change column alignment'),
        alignmentControls: ALIGNMENT_CONTROLS,
        value: this.getCellAlignment(),
        onChange: function onChange(nextAlign) {
          return _this4.onChangeColumnAlignment(nextAlign);
        },
        onHover: this.onHoverAlignment
      })), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InspectorControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
        title: Object(external_this_wp_i18n_["__"])('Table settings'),
        className: "blocks-table-settings"
      }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
        label: Object(external_this_wp_i18n_["__"])('Fixed width table cells'),
        checked: !!hasFixedLayout,
        onChange: this.onChangeFixedLayout
      }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
        label: Object(external_this_wp_i18n_["__"])('Header section'),
        checked: !!(head && head.length),
        onChange: this.onToggleHeaderSection
      }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
        label: Object(external_this_wp_i18n_["__"])('Footer section'),
        checked: !!(foot && foot.length),
        onChange: this.onToggleFooterSection
      })), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["PanelColorSettings"], {
        title: Object(external_this_wp_i18n_["__"])('Color settings'),
        initialOpen: false,
        colorSettings: [{
          value: backgroundColor.color,
          onChange: setBackgroundColor,
          label: Object(external_this_wp_i18n_["__"])('Background color'),
          disableCustomColors: true,
          colors: BACKGROUND_COLORS
        }]
      })), Object(external_this_wp_element_["createElement"])("figure", {
        className: className
      }, Object(external_this_wp_element_["createElement"])("table", {
        className: tableClasses
      }, Object(external_this_wp_element_["createElement"])(Section, {
        name: "head",
        rows: head
      }), Object(external_this_wp_element_["createElement"])(Section, {
        name: "body",
        rows: body
      }), Object(external_this_wp_element_["createElement"])(Section, {
        name: "foot",
        rows: foot
      })), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"], {
        tagName: "figcaption",
        placeholder: Object(external_this_wp_i18n_["__"])('Write caption…'),
        value: caption,
        onChange: function onChange(value) {
          return setAttributes({
            caption: value
          });
        } // Deselect the selected table cell when the caption is focused.
        ,
        unstableOnFocus: function unstableOnFocus() {
          return _this4.setState({
            selectedCell: null
          });
        },
        __unstableOnSplitAtEnd: function __unstableOnSplitAtEnd() {
          return insertBlocksAfter(Object(external_this_wp_blocks_["createBlock"])('core/paragraph'));
        }
      })));
    }
  }]);

  return TableEdit;
}(external_this_wp_element_["Component"]);
/* harmony default export */ var table_edit = (withCustomBackgroundColors('backgroundColor')(edit_TableEdit));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/table/save.js



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


function table_save_save(_ref) {
  var attributes = _ref.attributes;
  var hasFixedLayout = attributes.hasFixedLayout,
      head = attributes.head,
      body = attributes.body,
      foot = attributes.foot,
      backgroundColor = attributes.backgroundColor,
      caption = attributes.caption;
  var isEmpty = !head.length && !body.length && !foot.length;

  if (isEmpty) {
    return null;
  }

  var backgroundClass = Object(external_this_wp_blockEditor_["getColorClassName"])('background-color', backgroundColor);
  var classes = classnames_default()(backgroundClass, {
    'has-fixed-layout': hasFixedLayout,
    'has-background': !!backgroundClass
  });
  var hasCaption = !external_this_wp_blockEditor_["RichText"].isEmpty(caption);

  var Section = function Section(_ref2) {
    var type = _ref2.type,
        rows = _ref2.rows;

    if (!rows.length) {
      return null;
    }

    var Tag = "t".concat(type);
    return Object(external_this_wp_element_["createElement"])(Tag, null, rows.map(function (_ref3, rowIndex) {
      var cells = _ref3.cells;
      return Object(external_this_wp_element_["createElement"])("tr", {
        key: rowIndex
      }, cells.map(function (_ref4, cellIndex) {
        var content = _ref4.content,
            tag = _ref4.tag,
            scope = _ref4.scope,
            align = _ref4.align;
        var cellClasses = classnames_default()(Object(defineProperty["a" /* default */])({}, "has-text-align-".concat(align), align));
        return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
          className: cellClasses ? cellClasses : undefined,
          "data-align": align,
          tagName: tag,
          value: content,
          key: cellIndex,
          scope: tag === 'th' ? scope : undefined
        });
      }));
    }));
  };

  return Object(external_this_wp_element_["createElement"])("figure", null, Object(external_this_wp_element_["createElement"])("table", {
    className: classes === '' ? undefined : classes
  }, Object(external_this_wp_element_["createElement"])(Section, {
    type: "head",
    rows: head
  }), Object(external_this_wp_element_["createElement"])(Section, {
    type: "body",
    rows: body
  }), Object(external_this_wp_element_["createElement"])(Section, {
    type: "foot",
    rows: foot
  })), hasCaption && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
    tagName: "figcaption",
    value: caption
  }));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/table/transforms.js
var tableContentPasteSchema = function tableContentPasteSchema(_ref) {
  var phrasingContentSchema = _ref.phrasingContentSchema;
  return {
    tr: {
      allowEmpty: true,
      children: {
        th: {
          allowEmpty: true,
          children: phrasingContentSchema,
          attributes: ['scope']
        },
        td: {
          allowEmpty: true,
          children: phrasingContentSchema
        }
      }
    }
  };
};

var tablePasteSchema = function tablePasteSchema(args) {
  return {
    table: {
      children: {
        thead: {
          allowEmpty: true,
          children: tableContentPasteSchema(args)
        },
        tfoot: {
          allowEmpty: true,
          children: tableContentPasteSchema(args)
        },
        tbody: {
          allowEmpty: true,
          children: tableContentPasteSchema(args)
        }
      }
    }
  };
};

var table_transforms_transforms = {
  from: [{
    type: 'raw',
    selector: 'table',
    schema: tablePasteSchema
  }]
};
/* harmony default export */ var table_transforms = (table_transforms_transforms);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/table/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



var table_metadata = {
  name: "core/table",
  category: "text",
  attributes: {
    hasFixedLayout: {
      type: "boolean",
      "default": false
    },
    backgroundColor: {
      type: "string"
    },
    caption: {
      type: "string",
      source: "html",
      selector: "figcaption",
      "default": ""
    },
    head: {
      type: "array",
      "default": [],
      source: "query",
      selector: "thead tr",
      query: {
        cells: {
          type: "array",
          "default": [],
          source: "query",
          selector: "td,th",
          query: {
            content: {
              type: "string",
              source: "html"
            },
            tag: {
              type: "string",
              "default": "td",
              source: "tag"
            },
            scope: {
              type: "string",
              source: "attribute",
              attribute: "scope"
            },
            align: {
              type: "string",
              source: "attribute",
              attribute: "data-align"
            }
          }
        }
      }
    },
    body: {
      type: "array",
      "default": [],
      source: "query",
      selector: "tbody tr",
      query: {
        cells: {
          type: "array",
          "default": [],
          source: "query",
          selector: "td,th",
          query: {
            content: {
              type: "string",
              source: "html"
            },
            tag: {
              type: "string",
              "default": "td",
              source: "tag"
            },
            scope: {
              type: "string",
              source: "attribute",
              attribute: "scope"
            },
            align: {
              type: "string",
              source: "attribute",
              attribute: "data-align"
            }
          }
        }
      }
    },
    foot: {
      type: "array",
      "default": [],
      source: "query",
      selector: "tfoot tr",
      query: {
        cells: {
          type: "array",
          "default": [],
          source: "query",
          selector: "td,th",
          query: {
            content: {
              type: "string",
              source: "html"
            },
            tag: {
              type: "string",
              "default": "td",
              source: "tag"
            },
            scope: {
              type: "string",
              source: "attribute",
              attribute: "scope"
            },
            align: {
              type: "string",
              source: "attribute",
              attribute: "data-align"
            }
          }
        }
      }
    }
  },
  supports: {
    align: true
  }
};


var table_name = table_metadata.name;

var table_settings = {
  title: Object(external_this_wp_i18n_["__"])('Table'),
  description: Object(external_this_wp_i18n_["__"])('Insert a table — perfect for sharing charts and data.'),
  icon: block_table,
  example: {
    attributes: {
      head: [{
        cells: [{
          content: Object(external_this_wp_i18n_["__"])('Version'),
          tag: 'th'
        }, {
          content: Object(external_this_wp_i18n_["__"])('Jazz Musician'),
          tag: 'th'
        }, {
          content: Object(external_this_wp_i18n_["__"])('Release Date'),
          tag: 'th'
        }]
      }],
      body: [{
        cells: [{
          content: '5.2',
          tag: 'td'
        }, {
          content: 'Jaco Pastorius',
          tag: 'td'
        }, {
          content: Object(external_this_wp_i18n_["__"])('May 7, 2019'),
          tag: 'td'
        }]
      }, {
        cells: [{
          content: '5.1',
          tag: 'td'
        }, {
          content: 'Betty Carter',
          tag: 'td'
        }, {
          content: Object(external_this_wp_i18n_["__"])('February 21, 2019'),
          tag: 'td'
        }]
      }, {
        cells: [{
          content: '5.0',
          tag: 'td'
        }, {
          content: 'Bebo Valdés',
          tag: 'td'
        }, {
          content: Object(external_this_wp_i18n_["__"])('December 6, 2018'),
          tag: 'td'
        }]
      }]
    }
  },
  styles: [{
    name: 'regular',
    label: Object(external_this_wp_i18n_["_x"])('Default', 'block style'),
    isDefault: true
  }, {
    name: 'stripes',
    label: Object(external_this_wp_i18n_["__"])('Stripes')
  }],
  transforms: table_transforms,
  edit: table_edit,
  save: table_save_save,
  deprecated: table_deprecated
};

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/text-columns/edit.js



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





function TextColumnsEdit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes,
      className = _ref.className;
  var width = attributes.width,
      content = attributes.content,
      columns = attributes.columns;
  external_this_wp_deprecated_default()('The Text Columns block', {
    alternative: 'the Columns block',
    plugin: 'Gutenberg'
  });
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockAlignmentToolbar"], {
    value: width,
    onChange: function onChange(nextWidth) {
      return setAttributes({
        width: nextWidth
      });
    },
    controls: ['center', 'wide', 'full']
  })), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InspectorControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["RangeControl"], {
    label: Object(external_this_wp_i18n_["__"])('Columns'),
    value: columns,
    onChange: function onChange(value) {
      return setAttributes({
        columns: value
      });
    },
    min: 2,
    max: 4,
    required: true
  }))), Object(external_this_wp_element_["createElement"])("div", {
    className: "".concat(className, " align").concat(width, " columns-").concat(columns)
  }, Object(external_this_lodash_["times"])(columns, function (index) {
    return Object(external_this_wp_element_["createElement"])("div", {
      className: "wp-block-column",
      key: "column-".concat(index)
    }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"], {
      tagName: "p",
      value: Object(external_this_lodash_["get"])(content, [index, 'children']),
      onChange: function onChange(nextContent) {
        setAttributes({
          content: [].concat(Object(toConsumableArray["a" /* default */])(content.slice(0, index)), [{
            children: nextContent
          }], Object(toConsumableArray["a" /* default */])(content.slice(index + 1)))
        });
      },
      placeholder: Object(external_this_wp_i18n_["__"])('New Column')
    }));
  })));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/text-columns/save.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


function text_columns_save_save(_ref) {
  var attributes = _ref.attributes;
  var width = attributes.width,
      content = attributes.content,
      columns = attributes.columns;
  return Object(external_this_wp_element_["createElement"])("div", {
    className: "align".concat(width, " columns-").concat(columns)
  }, Object(external_this_lodash_["times"])(columns, function (index) {
    return Object(external_this_wp_element_["createElement"])("div", {
      className: "wp-block-column",
      key: "column-".concat(index)
    }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      tagName: "p",
      value: Object(external_this_lodash_["get"])(content, [index, 'children'])
    }));
  }));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/text-columns/transforms.js
/**
 * WordPress dependencies
 */

var text_columns_transforms_transforms = {
  to: [{
    type: 'block',
    blocks: ['core/columns'],
    transform: function transform(_ref) {
      var className = _ref.className,
          columns = _ref.columns,
          content = _ref.content,
          width = _ref.width;
      return Object(external_this_wp_blocks_["createBlock"])('core/columns', {
        align: 'wide' === width || 'full' === width ? width : undefined,
        className: className,
        columns: columns
      }, content.map(function (_ref2) {
        var children = _ref2.children;
        return Object(external_this_wp_blocks_["createBlock"])('core/column', {}, [Object(external_this_wp_blocks_["createBlock"])('core/paragraph', {
          content: children
        })]);
      }));
    }
  }]
};
/* harmony default export */ var text_columns_transforms = (text_columns_transforms_transforms);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/text-columns/index.js
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


var text_columns_metadata = {
  name: "core/text-columns",
  icon: "columns",
  category: "design",
  attributes: {
    content: {
      type: "array",
      source: "query",
      selector: "p",
      query: {
        children: {
          type: "string",
          source: "html"
        }
      },
      "default": [{}, {}]
    },
    columns: {
      type: "number",
      "default": 2
    },
    width: {
      type: "string"
    }
  },
  supports: {
    inserter: false
  }
};


var text_columns_name = text_columns_metadata.name;

var text_columns_settings = {
  title: Object(external_this_wp_i18n_["__"])('Text Columns (deprecated)'),
  description: Object(external_this_wp_i18n_["__"])('This block is deprecated. Please use the Columns block instead.'),
  transforms: text_columns_transforms,
  getEditWrapperProps: function getEditWrapperProps(attributes) {
    var width = attributes.width;

    if ('wide' === width || 'full' === width) {
      return {
        'data-align': width
      };
    }
  },
  edit: TextColumnsEdit,
  save: text_columns_save_save
};

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/verse.js


/**
 * WordPress dependencies
 */

var verse = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M17.8 2l-.9.3c-.1 0-3.6 1-5.2 2.1C10 5.5 9.3 6.5 8.9 7.1c-.6.9-1.7 4.7-1.7 6.3l-.9 2.3c-.2.4 0 .8.4 1 .1 0 .2.1.3.1.3 0 .6-.2.7-.5l.6-1.5c.3 0 .7-.1 1.2-.2.7-.1 1.4-.3 2.2-.5.8-.2 1.6-.5 2.4-.8.7-.3 1.4-.7 1.9-1.2s.8-1.2 1-1.9c.2-.7.3-1.6.4-2.4.1-.8.1-1.7.2-2.5 0-.8.1-1.5.2-2.1V2zm-1.9 5.6c-.1.8-.2 1.5-.3 2.1-.2.6-.4 1-.6 1.3-.3.3-.8.6-1.4.9-.7.3-1.4.5-2.2.8-.6.2-1.3.3-1.8.4L15 7.5c.3-.3.6-.7 1-1.1 0 .4 0 .8-.1 1.2zM6 20h8v-1.5H6V20z"
}));
/* harmony default export */ var library_verse = (verse);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/verse/deprecated.js


/**
 * WordPress dependencies
 */

var verse_deprecated_blockAttributes = {
  content: {
    type: 'string',
    source: 'html',
    selector: 'pre',
    default: ''
  },
  textAlign: {
    type: 'string'
  }
};
var verse_deprecated_deprecated = [{
  attributes: verse_deprecated_blockAttributes,
  save: function save(_ref) {
    var attributes = _ref.attributes;
    var textAlign = attributes.textAlign,
        content = attributes.content;
    return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
      tagName: "pre",
      style: {
        textAlign: textAlign
      },
      value: content
    });
  }
}];
/* harmony default export */ var verse_deprecated = (verse_deprecated_deprecated);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/verse/edit.js



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



function VerseEdit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes,
      className = _ref.className,
      mergeBlocks = _ref.mergeBlocks;
  var textAlign = attributes.textAlign,
      content = attributes.content;
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["AlignmentToolbar"], {
    value: textAlign,
    onChange: function onChange(nextAlign) {
      setAttributes({
        textAlign: nextAlign
      });
    }
  })), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"], {
    tagName: external_this_wp_blockEditor_["__experimentalBlock"].pre,
    identifier: "content",
    preserveWhiteSpace: true,
    value: content,
    onChange: function onChange(nextContent) {
      setAttributes({
        content: nextContent
      });
    },
    placeholder: Object(external_this_wp_i18n_["__"])('Write…'),
    className: classnames_default()(className, Object(defineProperty["a" /* default */])({}, "has-text-align-".concat(textAlign), textAlign)),
    onMerge: mergeBlocks,
    textAlign: textAlign
  }));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/verse/save.js



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


function verse_save_save(_ref) {
  var attributes = _ref.attributes;
  var textAlign = attributes.textAlign,
      content = attributes.content;
  var className = classnames_default()(Object(defineProperty["a" /* default */])({}, "has-text-align-".concat(textAlign), textAlign));
  return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
    tagName: "pre",
    className: className,
    value: content
  });
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/verse/transforms.js
/**
 * WordPress dependencies
 */

var verse_transforms_transforms = {
  from: [{
    type: 'block',
    blocks: ['core/paragraph'],
    transform: function transform(attributes) {
      return Object(external_this_wp_blocks_["createBlock"])('core/verse', attributes);
    }
  }],
  to: [{
    type: 'block',
    blocks: ['core/paragraph'],
    transform: function transform(attributes) {
      return Object(external_this_wp_blocks_["createBlock"])('core/paragraph', attributes);
    }
  }]
};
/* harmony default export */ var verse_transforms = (verse_transforms_transforms);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/verse/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



var verse_metadata = {
  name: "core/verse",
  category: "text",
  attributes: {
    content: {
      type: "string",
      source: "html",
      selector: "pre",
      "default": "",
      __unstablePreserveWhiteSpace: true
    },
    textAlign: {
      type: "string"
    }
  },
  supports: {
    lightBlockWrapper: true
  }
};


var verse_name = verse_metadata.name;

var verse_settings = {
  title: Object(external_this_wp_i18n_["__"])('Verse'),
  description: Object(external_this_wp_i18n_["__"])('Insert poetry. Use special spacing formats. Or quote song lyrics.'),
  icon: library_verse,
  example: {
    attributes: {
      /* eslint-disable @wordpress/i18n-no-collapsible-whitespace */
      // translators: Sample content for the Verse block. Can be replaced with a more locale-adequate work.
      content: Object(external_this_wp_i18n_["__"])('WHAT was he doing, the great god Pan,\n	Down in the reeds by the river?\nSpreading ruin and scattering ban,\nSplashing and paddling with hoofs of a goat,\nAnd breaking the golden lilies afloat\n    With the dragon-fly on the river.')
      /* eslint-enable @wordpress/i18n-no-collapsible-whitespace */

    }
  },
  keywords: [Object(external_this_wp_i18n_["__"])('poetry'), Object(external_this_wp_i18n_["__"])('poem')],
  transforms: verse_transforms,
  deprecated: verse_deprecated,
  merge: function merge(attributes, attributesToMerge) {
    return {
      content: attributes.content + attributesToMerge.content
    };
  },
  edit: VerseEdit,
  save: verse_save_save
};

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/video.js


/**
 * WordPress dependencies
 */

var video_video = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M18.7 3H5.3C4 3 3 4 3 5.3v13.4C3 20 4 21 5.3 21h13.4c1.3 0 2.3-1 2.3-2.3V5.3C21 4 20 3 18.7 3zm.8 15.7c0 .4-.4.8-.8.8H5.3c-.4 0-.8-.4-.8-.8V5.3c0-.4.4-.8.8-.8h13.4c.4 0 .8.4.8.8v13.4zM10 15l5-3-5-3v6z"
}));
/* harmony default export */ var library_video = (video_video);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/video/edit-common-settings.js



/**
 * WordPress dependencies
 */



var edit_common_settings_VideoSettings = function VideoSettings(_ref) {
  var setAttributes = _ref.setAttributes,
      attributes = _ref.attributes;
  var autoplay = attributes.autoplay,
      controls = attributes.controls,
      loop = attributes.loop,
      muted = attributes.muted,
      playsInline = attributes.playsInline,
      preload = attributes.preload;

  var getAutoplayHelp = function getAutoplayHelp(checked) {
    return checked ? Object(external_this_wp_i18n_["__"])('Note: Autoplaying videos may cause usability issues for some visitors.') : null;
  };

  var toggleAttribute = function toggleAttribute(attribute) {
    return function (newValue) {
      setAttributes(Object(defineProperty["a" /* default */])({}, attribute, newValue));
    };
  };

  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
    label: Object(external_this_wp_i18n_["__"])('Autoplay'),
    onChange: toggleAttribute('autoplay'),
    checked: autoplay,
    help: getAutoplayHelp
  }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
    label: Object(external_this_wp_i18n_["__"])('Loop'),
    onChange: toggleAttribute('loop'),
    checked: loop
  }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
    label: Object(external_this_wp_i18n_["__"])('Muted'),
    onChange: toggleAttribute('muted'),
    checked: muted
  }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
    label: Object(external_this_wp_i18n_["__"])('Playback controls'),
    onChange: toggleAttribute('controls'),
    checked: controls
  }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
    label: Object(external_this_wp_i18n_["__"])('Play inline'),
    onChange: toggleAttribute('playsInline'),
    checked: playsInline
  }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SelectControl"], {
    label: Object(external_this_wp_i18n_["__"])('Preload'),
    value: preload,
    onChange: function onChange(value) {
      return setAttributes({
        preload: value
      });
    },
    options: [{
      value: 'auto',
      label: Object(external_this_wp_i18n_["__"])('Auto')
    }, {
      value: 'metadata',
      label: Object(external_this_wp_i18n_["__"])('Metadata')
    }, {
      value: 'none',
      label: Object(external_this_wp_i18n_["__"])('None')
    }]
  }));
};

/* harmony default export */ var edit_common_settings = (edit_common_settings_VideoSettings);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/video/edit.js









function video_edit_createSuper(Derived) { return function () { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (video_edit_isNativeReflectConstruct()) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function video_edit_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * WordPress dependencies
 */









/**
 * Internal dependencies
 */



var video_edit_ALLOWED_MEDIA_TYPES = ['video'];
var VIDEO_POSTER_ALLOWED_MEDIA_TYPES = ['image'];

var edit_VideoEdit = /*#__PURE__*/function (_Component) {
  Object(inherits["a" /* default */])(VideoEdit, _Component);

  var _super = video_edit_createSuper(VideoEdit);

  function VideoEdit() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, VideoEdit);

    _this = _super.apply(this, arguments);
    _this.videoPlayer = Object(external_this_wp_element_["createRef"])();
    _this.posterImageButton = Object(external_this_wp_element_["createRef"])();
    _this.onSelectURL = _this.onSelectURL.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onSelectPoster = _this.onSelectPoster.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onRemovePoster = _this.onRemovePoster.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onUploadError = _this.onUploadError.bind(Object(assertThisInitialized["a" /* default */])(_this));
    return _this;
  }

  Object(createClass["a" /* default */])(VideoEdit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          attributes = _this$props.attributes,
          mediaUpload = _this$props.mediaUpload,
          noticeOperations = _this$props.noticeOperations,
          setAttributes = _this$props.setAttributes;
      var id = attributes.id,
          _attributes$src = attributes.src,
          src = _attributes$src === void 0 ? '' : _attributes$src;

      if (!id && Object(external_this_wp_blob_["isBlobURL"])(src)) {
        var file = Object(external_this_wp_blob_["getBlobByURL"])(src);

        if (file) {
          mediaUpload({
            filesList: [file],
            onFileChange: function onFileChange(_ref) {
              var _ref2 = Object(slicedToArray["a" /* default */])(_ref, 1),
                  url = _ref2[0].url;

              setAttributes({
                src: url
              });
            },
            onError: function onError(message) {
              noticeOperations.createErrorNotice(message);
            },
            allowedTypes: video_edit_ALLOWED_MEDIA_TYPES
          });
        }
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.attributes.poster !== prevProps.attributes.poster) {
        this.videoPlayer.current.load();
      }
    }
  }, {
    key: "onSelectURL",
    value: function onSelectURL(newSrc) {
      var _this$props2 = this.props,
          attributes = _this$props2.attributes,
          setAttributes = _this$props2.setAttributes;
      var src = attributes.src;

      if (newSrc !== src) {
        // Check if there's an embed block that handles this URL.
        var embedBlock = util_createUpgradedEmbedBlock({
          attributes: {
            url: newSrc
          }
        });

        if (undefined !== embedBlock) {
          this.props.onReplace(embedBlock);
          return;
        }

        setAttributes({
          src: newSrc,
          id: undefined
        });
      }
    }
  }, {
    key: "onSelectPoster",
    value: function onSelectPoster(image) {
      var setAttributes = this.props.setAttributes;
      setAttributes({
        poster: image.url
      });
    }
  }, {
    key: "onRemovePoster",
    value: function onRemovePoster() {
      var setAttributes = this.props.setAttributes;
      setAttributes({
        poster: ''
      }); // Move focus back to the Media Upload button.

      this.posterImageButton.current.focus();
    }
  }, {
    key: "onUploadError",
    value: function onUploadError(message) {
      var noticeOperations = this.props.noticeOperations;
      noticeOperations.removeAllNotices();
      noticeOperations.createErrorNotice(message);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$attribute = this.props.attributes,
          id = _this$props$attribute.id,
          caption = _this$props$attribute.caption,
          controls = _this$props$attribute.controls,
          poster = _this$props$attribute.poster,
          src = _this$props$attribute.src;
      var _this$props3 = this.props,
          instanceId = _this$props3.instanceId,
          isSelected = _this$props3.isSelected,
          noticeUI = _this$props3.noticeUI,
          attributes = _this$props3.attributes,
          setAttributes = _this$props3.setAttributes,
          insertBlocksAfter = _this$props3.insertBlocksAfter;

      var onSelectVideo = function onSelectVideo(media) {
        if (!media || !media.url) {
          // in this case there was an error
          // previous attributes should be removed
          // because they may be temporary blob urls
          setAttributes({
            src: undefined,
            id: undefined
          });
          return;
        } // sets the block's attribute and updates the edit component from the
        // selected media


        setAttributes({
          src: media.url,
          id: media.id
        });
      };

      if (!src) {
        return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["__experimentalBlock"].div, null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["MediaPlaceholder"], {
          icon: Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockIcon"], {
            icon: library_video
          }),
          onSelect: onSelectVideo,
          onSelectURL: this.onSelectURL,
          accept: "video/*",
          allowedTypes: video_edit_ALLOWED_MEDIA_TYPES,
          value: this.props.attributes,
          notices: noticeUI,
          onError: this.onUploadError
        }));
      }

      var videoPosterDescription = "video-block__poster-image-description-".concat(instanceId);
      return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["MediaReplaceFlow"], {
        mediaId: id,
        mediaURL: src,
        allowedTypes: video_edit_ALLOWED_MEDIA_TYPES,
        accept: "video/*",
        onSelect: onSelectVideo,
        onSelectURL: this.onSelectURL,
        onError: this.onUploadError
      })), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InspectorControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
        title: Object(external_this_wp_i18n_["__"])('Video settings')
      }, Object(external_this_wp_element_["createElement"])(edit_common_settings, {
        setAttributes: setAttributes,
        attributes: attributes
      }), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["MediaUploadCheck"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["BaseControl"], {
        className: "editor-video-poster-control"
      }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["BaseControl"].VisualLabel, null, Object(external_this_wp_i18n_["__"])('Poster image')), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["MediaUpload"], {
        title: Object(external_this_wp_i18n_["__"])('Select poster image'),
        onSelect: this.onSelectPoster,
        allowedTypes: VIDEO_POSTER_ALLOWED_MEDIA_TYPES,
        render: function render(_ref3) {
          var open = _ref3.open;
          return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
            isPrimary: true,
            onClick: open,
            ref: _this2.posterImageButton,
            "aria-describedby": videoPosterDescription
          }, !_this2.props.attributes.poster ? Object(external_this_wp_i18n_["__"])('Select') : Object(external_this_wp_i18n_["__"])('Replace'));
        }
      }), Object(external_this_wp_element_["createElement"])("p", {
        id: videoPosterDescription,
        hidden: true
      }, this.props.attributes.poster ? Object(external_this_wp_i18n_["sprintf"])(
      /* translators: %s: poster image URL. */
      Object(external_this_wp_i18n_["__"])('The current poster image url is %s'), this.props.attributes.poster) : Object(external_this_wp_i18n_["__"])('There is no poster image currently selected')), !!this.props.attributes.poster && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
        onClick: this.onRemovePoster,
        isTertiary: true
      }, Object(external_this_wp_i18n_["__"])('Remove')))))), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["__experimentalBlock"].figure, null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Disabled"], null, Object(external_this_wp_element_["createElement"])("video", {
        controls: controls,
        poster: poster,
        src: src,
        ref: this.videoPlayer
      })), (!external_this_wp_blockEditor_["RichText"].isEmpty(caption) || isSelected) && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"], {
        tagName: "figcaption",
        placeholder: Object(external_this_wp_i18n_["__"])('Write caption…'),
        value: caption,
        onChange: function onChange(value) {
          return setAttributes({
            caption: value
          });
        },
        inlineToolbar: true,
        __unstableOnSplitAtEnd: function __unstableOnSplitAtEnd() {
          return insertBlocksAfter(Object(external_this_wp_blocks_["createBlock"])('core/paragraph'));
        }
      })));
    }
  }]);

  return VideoEdit;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var video_edit = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select('core/block-editor'),
      getSettings = _select.getSettings;

  var _getSettings = getSettings(),
      mediaUpload = _getSettings.mediaUpload;

  return {
    mediaUpload: mediaUpload
  };
}), external_this_wp_components_["withNotices"], external_this_wp_compose_["withInstanceId"]])(edit_VideoEdit));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/video/save.js


/**
 * WordPress dependencies
 */

function video_save_save(_ref) {
  var attributes = _ref.attributes;
  var autoplay = attributes.autoplay,
      caption = attributes.caption,
      controls = attributes.controls,
      loop = attributes.loop,
      muted = attributes.muted,
      poster = attributes.poster,
      preload = attributes.preload,
      src = attributes.src,
      playsInline = attributes.playsInline;
  return Object(external_this_wp_element_["createElement"])("figure", null, src && Object(external_this_wp_element_["createElement"])("video", {
    autoPlay: autoplay,
    controls: controls,
    loop: loop,
    muted: muted,
    poster: poster,
    preload: preload !== 'metadata' ? preload : undefined,
    src: src,
    playsInline: playsInline
  }), !external_this_wp_blockEditor_["RichText"].isEmpty(caption) && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["RichText"].Content, {
    tagName: "figcaption",
    value: caption
  }));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/video/transforms.js
/**
 * WordPress dependencies
 */


var video_transforms_transforms = {
  from: [{
    type: 'files',
    isMatch: function isMatch(files) {
      return files.length === 1 && files[0].type.indexOf('video/') === 0;
    },
    transform: function transform(files) {
      var file = files[0]; // We don't need to upload the media directly here
      // It's already done as part of the `componentDidMount`
      // in the video block

      var block = Object(external_this_wp_blocks_["createBlock"])('core/video', {
        src: Object(external_this_wp_blob_["createBlobURL"])(file)
      });
      return block;
    }
  }, {
    type: 'shortcode',
    tag: 'video',
    attributes: {
      src: {
        type: 'string',
        shortcode: function shortcode(_ref) {
          var _ref$named = _ref.named,
              src = _ref$named.src,
              mp4 = _ref$named.mp4,
              m4v = _ref$named.m4v,
              webm = _ref$named.webm,
              ogv = _ref$named.ogv,
              flv = _ref$named.flv;
          return src || mp4 || m4v || webm || ogv || flv;
        }
      },
      poster: {
        type: 'string',
        shortcode: function shortcode(_ref2) {
          var poster = _ref2.named.poster;
          return poster;
        }
      },
      loop: {
        type: 'string',
        shortcode: function shortcode(_ref3) {
          var loop = _ref3.named.loop;
          return loop;
        }
      },
      autoplay: {
        type: 'string',
        shortcode: function shortcode(_ref4) {
          var autoplay = _ref4.named.autoplay;
          return autoplay;
        }
      },
      preload: {
        type: 'string',
        shortcode: function shortcode(_ref5) {
          var preload = _ref5.named.preload;
          return preload;
        }
      }
    }
  }]
};
/* harmony default export */ var video_transforms = (video_transforms_transforms);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/video/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


var video_metadata = {
  name: "core/video",
  category: "media",
  attributes: {
    autoplay: {
      type: "boolean",
      source: "attribute",
      selector: "video",
      attribute: "autoplay"
    },
    caption: {
      type: "string",
      source: "html",
      selector: "figcaption"
    },
    controls: {
      type: "boolean",
      source: "attribute",
      selector: "video",
      attribute: "controls",
      "default": true
    },
    id: {
      type: "number"
    },
    loop: {
      type: "boolean",
      source: "attribute",
      selector: "video",
      attribute: "loop"
    },
    muted: {
      type: "boolean",
      source: "attribute",
      selector: "video",
      attribute: "muted"
    },
    poster: {
      type: "string",
      source: "attribute",
      selector: "video",
      attribute: "poster"
    },
    preload: {
      type: "string",
      source: "attribute",
      selector: "video",
      attribute: "preload",
      "default": "metadata"
    },
    src: {
      type: "string",
      source: "attribute",
      selector: "video",
      attribute: "src"
    },
    playsInline: {
      type: "boolean",
      source: "attribute",
      selector: "video",
      attribute: "playsinline"
    }
  },
  supports: {
    align: true,
    lightBlockWrapper: true
  }
};


var video_name = video_metadata.name;

var video_settings = {
  title: Object(external_this_wp_i18n_["__"])('Video'),
  description: Object(external_this_wp_i18n_["__"])('Embed a video from your media library or upload a new one.'),
  icon: library_video,
  keywords: [Object(external_this_wp_i18n_["__"])('movie')],
  transforms: video_transforms,
  edit: video_edit,
  save: video_save_save
};

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/tag.js


/**
 * WordPress dependencies
 */

var tag_tag = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M20.1 11.2l-6.7-6.7c-.1-.1-.3-.2-.5-.2H5c-.4-.1-.8.3-.8.7v7.8c0 .2.1.4.2.5l6.7 6.7c.2.2.5.4.7.5s.6.2.9.2c.3 0 .6-.1.9-.2.3-.1.5-.3.8-.5l5.6-5.6c.4-.4.7-1 .7-1.6.1-.6-.2-1.2-.6-1.6zM19 13.4L13.4 19c-.1.1-.2.1-.3.2-.2.1-.4.1-.6 0-.1 0-.2-.1-.3-.2l-6.5-6.5V5.8h6.8l6.5 6.5c.2.2.2.4.2.6 0 .1 0 .3-.2.5zM9 8c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1z"
}));
/* harmony default export */ var library_tag = (tag_tag);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/tag-cloud/edit.js









function tag_cloud_edit_createSuper(Derived) { return function () { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (tag_cloud_edit_isNativeReflectConstruct()) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function tag_cloud_edit_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */








var edit_TagCloudEdit = /*#__PURE__*/function (_Component) {
  Object(inherits["a" /* default */])(TagCloudEdit, _Component);

  var _super = tag_cloud_edit_createSuper(TagCloudEdit);

  function TagCloudEdit() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, TagCloudEdit);

    _this = _super.apply(this, arguments);
    _this.state = {
      editing: !_this.props.attributes.taxonomy
    };
    _this.setTaxonomy = _this.setTaxonomy.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.toggleShowTagCounts = _this.toggleShowTagCounts.bind(Object(assertThisInitialized["a" /* default */])(_this));
    return _this;
  }

  Object(createClass["a" /* default */])(TagCloudEdit, [{
    key: "getTaxonomyOptions",
    value: function getTaxonomyOptions() {
      var taxonomies = Object(external_this_lodash_["filter"])(this.props.taxonomies, 'show_cloud');
      var selectOption = {
        label: Object(external_this_wp_i18n_["__"])('- Select -'),
        value: '',
        disabled: true
      };
      var taxonomyOptions = Object(external_this_lodash_["map"])(taxonomies, function (taxonomy) {
        return {
          value: taxonomy.slug,
          label: taxonomy.name
        };
      });
      return [selectOption].concat(Object(toConsumableArray["a" /* default */])(taxonomyOptions));
    }
  }, {
    key: "setTaxonomy",
    value: function setTaxonomy(taxonomy) {
      var setAttributes = this.props.setAttributes;
      setAttributes({
        taxonomy: taxonomy
      });
    }
  }, {
    key: "toggleShowTagCounts",
    value: function toggleShowTagCounts() {
      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes;
      var showTagCounts = attributes.showTagCounts;
      setAttributes({
        showTagCounts: !showTagCounts
      });
    }
  }, {
    key: "render",
    value: function render() {
      var attributes = this.props.attributes;
      var taxonomy = attributes.taxonomy,
          showTagCounts = attributes.showTagCounts;
      var taxonomyOptions = this.getTaxonomyOptions();
      var inspectorControls = Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InspectorControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
        title: Object(external_this_wp_i18n_["__"])('Tag Cloud settings')
      }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SelectControl"], {
        label: Object(external_this_wp_i18n_["__"])('Taxonomy'),
        options: taxonomyOptions,
        value: taxonomy,
        onChange: this.setTaxonomy
      }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToggleControl"], {
        label: Object(external_this_wp_i18n_["__"])('Show post counts'),
        checked: showTagCounts,
        onChange: this.toggleShowTagCounts
      })));
      return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, inspectorControls, Object(external_this_wp_element_["createElement"])(external_this_wp_serverSideRender_default.a, {
        key: "tag-cloud",
        block: "core/tag-cloud",
        attributes: attributes
      }));
    }
  }]);

  return TagCloudEdit;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var tag_cloud_edit = (Object(external_this_wp_data_["withSelect"])(function (select) {
  return {
    taxonomies: select('core').getTaxonomies()
  };
})(edit_TagCloudEdit));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/tag-cloud/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */

var tag_cloud_metadata = {
  name: "core/tag-cloud",
  category: "widgets",
  attributes: {
    align: {
      type: "string",
      "enum": ["left", "center", "right", "wide", "full"]
    },
    className: {
      type: "string"
    },
    taxonomy: {
      type: "string",
      "default": "post_tag"
    },
    showTagCounts: {
      type: "boolean",
      "default": false
    }
  },
  supports: {
    html: false,
    align: true
  }
};

var tag_cloud_name = tag_cloud_metadata.name;

var tag_cloud_settings = {
  title: Object(external_this_wp_i18n_["__"])('Tag Cloud'),
  description: Object(external_this_wp_i18n_["__"])('A cloud of your most used tags.'),
  icon: library_tag,
  example: {},
  edit: tag_cloud_edit
};

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/classic.js


/**
 * WordPress dependencies
 */

var classic = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M20 6H4c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm.5 11c0 .3-.2.5-.5.5H4c-.3 0-.5-.2-.5-.5V8c0-.3.2-.5.5-.5h16c.3 0 .5.2.5.5v9zM10 10H8v2h2v-2zm-5 2h2v-2H5v2zm8-2h-2v2h2v-2zm-5 6h8v-2H8v2zm6-4h2v-2h-2v2zm3 0h2v-2h-2v2zm0 4h2v-2h-2v2zM5 16h2v-2H5v2z"
}));
/* harmony default export */ var library_classic = (classic);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/classic/edit.js









function classic_edit_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function classic_edit_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { classic_edit_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { classic_edit_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function classic_edit_createSuper(Derived) { return function () { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (classic_edit_isNativeReflectConstruct()) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function classic_edit_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * WordPress dependencies
 */



var classic_edit_window = window,
    wp = classic_edit_window.wp;

function isTmceEmpty(editor) {
  // When tinyMce is empty the content seems to be:
  // <p><br data-mce-bogus="1"></p>
  // avoid expensive checks for large documents
  var body = editor.getBody();

  if (body.childNodes.length > 1) {
    return false;
  } else if (body.childNodes.length === 0) {
    return true;
  }

  if (body.childNodes[0].childNodes.length > 1) {
    return false;
  }

  return /^\n?$/.test(body.innerText || body.textContent);
}

var edit_ClassicEdit = /*#__PURE__*/function (_Component) {
  Object(inherits["a" /* default */])(ClassicEdit, _Component);

  var _super = classic_edit_createSuper(ClassicEdit);

  function ClassicEdit(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, ClassicEdit);

    _this = _super.call(this, props);
    _this.initialize = _this.initialize.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onSetup = _this.onSetup.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.focus = _this.focus.bind(Object(assertThisInitialized["a" /* default */])(_this));
    return _this;
  }

  Object(createClass["a" /* default */])(ClassicEdit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _window$wpEditorL10n$ = window.wpEditorL10n.tinymce,
          baseURL = _window$wpEditorL10n$.baseURL,
          suffix = _window$wpEditorL10n$.suffix;
      window.tinymce.EditorManager.overrideDefaults({
        base_url: baseURL,
        suffix: suffix
      });

      if (document.readyState === 'complete') {
        this.initialize();
      } else {
        window.addEventListener('DOMContentLoaded', this.initialize);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.addEventListener('DOMContentLoaded', this.initialize);
      wp.oldEditor.remove("editor-".concat(this.props.clientId));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          clientId = _this$props.clientId,
          content = _this$props.attributes.content;
      var editor = window.tinymce.get("editor-".concat(clientId));

      if (prevProps.attributes.content !== content) {
        editor.setContent(content || '');
      }
    }
  }, {
    key: "initialize",
    value: function initialize() {
      var clientId = this.props.clientId;
      var settings = window.wpEditorL10n.tinymce.settings;
      wp.oldEditor.initialize("editor-".concat(clientId), {
        tinymce: classic_edit_objectSpread({}, settings, {
          inline: true,
          content_css: false,
          fixed_toolbar_container: "#toolbar-".concat(clientId),
          setup: this.onSetup
        })
      });
    }
  }, {
    key: "onSetup",
    value: function onSetup(editor) {
      var _this2 = this;

      var _this$props2 = this.props,
          content = _this$props2.attributes.content,
          setAttributes = _this$props2.setAttributes;
      var ref = this.ref;
      var bookmark;
      this.editor = editor;

      if (content) {
        editor.on('loadContent', function () {
          return editor.setContent(content);
        });
      }

      editor.on('blur', function () {
        bookmark = editor.selection.getBookmark(2, true);
        setAttributes({
          content: editor.getContent()
        });
        editor.once('focus', function () {
          if (bookmark) {
            editor.selection.moveToBookmark(bookmark);
          }
        });
        return false;
      });
      editor.on('mousedown touchstart', function () {
        bookmark = null;
      });
      editor.on('keydown', function (event) {
        if ((event.keyCode === external_this_wp_keycodes_["BACKSPACE"] || event.keyCode === external_this_wp_keycodes_["DELETE"]) && isTmceEmpty(editor)) {
          // delete the block
          _this2.props.onReplace([]);

          event.preventDefault();
          event.stopImmediatePropagation();
        }

        var altKey = event.altKey;
        /*
         * Prevent Mousetrap from kicking in: TinyMCE already uses its own
         * `alt+f10` shortcut to focus its toolbar.
         */

        if (altKey && event.keyCode === external_this_wp_keycodes_["F10"]) {
          event.stopPropagation();
        }
      }); // TODO: the following is for back-compat with WP 4.9, not needed in WP 5.0. Remove it after the release.

      editor.addButton('kitchensink', {
        tooltip: Object(external_this_wp_i18n_["_x"])('More', 'button to expand options'),
        icon: 'dashicon dashicons-editor-kitchensink',
        onClick: function onClick() {
          var button = this;
          var active = !button.active();
          button.active(active);
          editor.dom.toggleClass(ref, 'has-advanced-toolbar', active);
        }
      }); // Show the second, third, etc. toolbars when the `kitchensink` button is removed by a plugin.

      editor.on('init', function () {
        if (editor.settings.toolbar1 && editor.settings.toolbar1.indexOf('kitchensink') === -1) {
          editor.dom.addClass(ref, 'has-advanced-toolbar');
        }
      });
      editor.addButton('wp_add_media', {
        tooltip: Object(external_this_wp_i18n_["__"])('Insert Media'),
        icon: 'dashicon dashicons-admin-media',
        cmd: 'WP_Medialib'
      }); // End TODO.

      editor.on('init', function () {
        var rootNode = _this2.editor.getBody(); // Create the toolbar by refocussing the editor.


        if (document.activeElement === rootNode) {
          rootNode.blur();

          _this2.editor.focus();
        }
      });
    }
  }, {
    key: "focus",
    value: function focus() {
      if (this.editor) {
        this.editor.focus();
      }
    }
  }, {
    key: "onToolbarKeyDown",
    value: function onToolbarKeyDown(event) {
      // Prevent WritingFlow from kicking in and allow arrows navigation on the toolbar.
      event.stopPropagation(); // Prevent Mousetrap from moving focus to the top toolbar when pressing `alt+f10` on this block toolbar.

      event.nativeEvent.stopImmediatePropagation();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var clientId = this.props.clientId; // Disable reasons:
      //
      // jsx-a11y/no-static-element-interactions
      //  - the toolbar itself is non-interactive, but must capture events
      //    from the KeyboardShortcuts component to stop their propagation.

      /* eslint-disable jsx-a11y/no-static-element-interactions */

      return [Object(external_this_wp_element_["createElement"])("div", {
        key: "toolbar",
        id: "toolbar-".concat(clientId),
        ref: function ref(_ref) {
          return _this3.ref = _ref;
        },
        className: "block-library-classic__toolbar",
        onClick: this.focus,
        "data-placeholder": Object(external_this_wp_i18n_["__"])('Classic'),
        onKeyDown: this.onToolbarKeyDown
      }), Object(external_this_wp_element_["createElement"])("div", {
        key: "editor",
        id: "editor-".concat(clientId),
        className: "wp-block-freeform block-library-rich-text__tinymce"
      })];
      /* eslint-enable jsx-a11y/no-static-element-interactions */
    }
  }]);

  return ClassicEdit;
}(external_this_wp_element_["Component"]);



// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/classic/save.js


/**
 * WordPress dependencies
 */

function classic_save_save(_ref) {
  var attributes = _ref.attributes;
  var content = attributes.content;
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["RawHTML"], null, content);
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/classic/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


var classic_metadata = {
  name: "core/freeform",
  category: "text",
  attributes: {
    content: {
      type: "string",
      source: "html"
    }
  },
  supports: {
    className: false,
    customClassName: false,
    reusable: false
  }
};

var classic_name = classic_metadata.name;

var classic_settings = {
  title: Object(external_this_wp_i18n_["_x"])('Classic', 'block title'),
  description: Object(external_this_wp_i18n_["__"])('Use the classic WordPress editor.'),
  icon: library_classic,
  edit: edit_ClassicEdit,
  save: classic_save_save
};

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/share.js


/**
 * WordPress dependencies
 */

var share = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M9 11.8l6.1-4.5c.1.4.4.7.9.7h2c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1h-2c-.6 0-1 .4-1 1v.4l-6.4 4.8c-.2-.1-.4-.2-.6-.2H6c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1h2c.2 0 .4-.1.6-.2l6.4 4.8v.4c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-2c0-.6-.4-1-1-1h-2c-.5 0-.8.3-.9.7L9 12.2v-.4z"
}));
/* harmony default export */ var library_share = (share);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/social-links/edit.js


/**
 * WordPress dependencies
 */

var social_links_edit_ALLOWED_BLOCKS = ['core/social-link']; // Template contains the links that show when start.

var edit_TEMPLATE = [['core/social-link', {
  service: 'wordpress',
  url: 'https://wordpress.org'
}], ['core/social-link', {
  service: 'facebook'
}], ['core/social-link', {
  service: 'twitter'
}], ['core/social-link', {
  service: 'instagram'
}], ['core/social-link', {
  service: 'linkedin'
}], ['core/social-link', {
  service: 'youtube'
}]];
function SocialLinksEdit() {
  return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InnerBlocks"], {
    allowedBlocks: social_links_edit_ALLOWED_BLOCKS,
    templateLock: false,
    template: edit_TEMPLATE,
    __experimentalMoverDirection: 'horizontal',
    __experimentalTagName: external_this_wp_blockEditor_["__experimentalBlock"].ul,
    __experimentalAppenderTagName: "li"
  });
}
/* harmony default export */ var social_links_edit = (SocialLinksEdit);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/social-links/save.js


/**
 * WordPress dependencies
 */

function social_links_save_save(_ref) {
  var className = _ref.className;
  return Object(external_this_wp_element_["createElement"])("ul", {
    className: className
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InnerBlocks"].Content, null));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/social-links/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


var social_links_metadata = {
  name: "core/social-links",
  category: "widgets",
  supports: {
    align: ["left", "center", "right"],
    lightBlockWrapper: true
  }
};

var social_links_name = social_links_metadata.name;

var social_links_settings = {
  title: Object(external_this_wp_i18n_["__"])('Social Icons'),
  description: Object(external_this_wp_i18n_["__"])('Display icons linking to your social media profiles or websites.'),
  keywords: [Object(external_this_wp_i18n_["_x"])('links', 'block keywords')],
  example: {
    innerBlocks: [{
      name: 'core/social-link',
      attributes: {
        service: 'wordpress',
        url: 'https://wordpress.org'
      }
    }, {
      name: 'core/social-link',
      attributes: {
        service: 'facebook',
        url: 'https://www.facebook.com/WordPress/'
      }
    }, {
      name: 'core/social-link',
      attributes: {
        service: 'twitter',
        url: 'https://twitter.com/WordPress'
      }
    }]
  },
  styles: [{
    name: 'default',
    label: Object(external_this_wp_i18n_["__"])('Default'),
    isDefault: true
  }, {
    name: 'logos-only',
    label: Object(external_this_wp_i18n_["__"])('Logos Only')
  }, {
    name: 'pill-shape',
    label: Object(external_this_wp_i18n_["__"])('Pill Shape')
  }],
  icon: library_share,
  edit: social_links_edit,
  save: social_links_save_save
};

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/keyboard-return.js
var keyboard_return = __webpack_require__(196);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/social-link/icons/wordpress.js


/**
 * WordPress dependencies
 */

var wordpress_WordPressIcon = function WordPressIcon() {
  return Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
    d: "M12.158,12.786L9.46,20.625c0.806,0.237,1.657,0.366,2.54,0.366c1.047,0,2.051-0.181,2.986-0.51 c-0.024-0.038-0.046-0.079-0.065-0.124L12.158,12.786z M3.009,12c0,3.559,2.068,6.634,5.067,8.092L3.788,8.341 C3.289,9.459,3.009,10.696,3.009,12z M18.069,11.546c0-1.112-0.399-1.881-0.741-2.48c-0.456-0.741-0.883-1.368-0.883-2.109 c0-0.826,0.627-1.596,1.51-1.596c0.04,0,0.078,0.005,0.116,0.007C16.472,3.904,14.34,3.009,12,3.009 c-3.141,0-5.904,1.612-7.512,4.052c0.211,0.007,0.41,0.011,0.579,0.011c0.94,0,2.396-0.114,2.396-0.114 C7.947,6.93,8.004,7.642,7.52,7.699c0,0-0.487,0.057-1.029,0.085l3.274,9.739l1.968-5.901l-1.401-3.838 C9.848,7.756,9.389,7.699,9.389,7.699C8.904,7.67,8.961,6.93,9.446,6.958c0,0,1.484,0.114,2.368,0.114 c0.94,0,2.397-0.114,2.397-0.114c0.485-0.028,0.542,0.684,0.057,0.741c0,0-0.488,0.057-1.029,0.085l3.249,9.665l0.897-2.996 C17.841,13.284,18.069,12.316,18.069,11.546z M19.889,7.686c0.039,0.286,0.06,0.593,0.06,0.924c0,0.912-0.171,1.938-0.684,3.22 l-2.746,7.94c2.673-1.558,4.47-4.454,4.47-7.771C20.991,10.436,20.591,8.967,19.889,7.686z M12,22C6.486,22,2,17.514,2,12 C2,6.486,6.486,2,12,2c5.514,0,10,4.486,10,10C22,17.514,17.514,22,12,22z"
  }));
};

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/social-link/icons/fivehundredpx.js


/**
 * WordPress dependencies
 */

var fivehundredpx_FivehundredpxIcon = function FivehundredpxIcon() {
  return Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    version: "1.1"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
    d: "M6.94026,15.1412c.00437.01213.108.29862.168.44064a6.55008,6.55008,0,1,0,6.03191-9.09557,6.68654,6.68654,0,0,0-2.58357.51467A8.53914,8.53914,0,0,0,8.21268,8.61344L8.209,8.61725V3.22948l9.0504-.00008c.32934-.0036.32934-.46353.32934-.61466s0-.61091-.33035-.61467L7.47248,2a.43.43,0,0,0-.43131.42692v7.58355c0,.24466.30476.42131.58793.4819.553.11812.68074-.05864.81617-.2457l.018-.02481A10.52673,10.52673,0,0,1,9.32258,9.258a5.35268,5.35268,0,1,1,7.58985,7.54976,5.417,5.417,0,0,1-3.80867,1.56365,5.17483,5.17483,0,0,1-2.69822-.74478l.00342-4.61111a2.79372,2.79372,0,0,1,.71372-1.78792,2.61611,2.61611,0,0,1,1.98282-.89477,2.75683,2.75683,0,0,1,1.95525.79477,2.66867,2.66867,0,0,1,.79656,1.909,2.724,2.724,0,0,1-2.75849,2.748,4.94651,4.94651,0,0,1-.86254-.13719c-.31234-.093-.44519.34058-.48892.48349-.16811.54966.08453.65862.13687.67489a3.75751,3.75751,0,0,0,1.25234.18375,3.94634,3.94634,0,1,0-2.82444-6.742,3.67478,3.67478,0,0,0-1.13028,2.584l-.00041.02323c-.0035.11667-.00579,2.881-.00644,3.78811l-.00407-.00451a6.18521,6.18521,0,0,1-1.0851-1.86092c-.10544-.27856-.34358-.22925-.66857-.12917-.14192.04372-.57386.17677-.47833.489Zm4.65165-1.08338a.51346.51346,0,0,0,.19513.31818l.02276.022a.52945.52945,0,0,0,.3517.18416.24242.24242,0,0,0,.16577-.0611c.05473-.05082.67382-.67812.73287-.738l.69041.68819a.28978.28978,0,0,0,.21437.11032.53239.53239,0,0,0,.35708-.19486c.29792-.30419.14885-.46821.07676-.54751l-.69954-.69975.72952-.73469c.16-.17311.01874-.35708-.12218-.498-.20461-.20461-.402-.25742-.52855-.14083l-.7254.72665-.73354-.73375a.20128.20128,0,0,0-.14179-.05695.54135.54135,0,0,0-.34379.19648c-.22561.22555-.274.38149-.15656.5059l.73374.7315-.72942.73072A.26589.26589,0,0,0,11.59191,14.05782Zm1.59866-9.915A8.86081,8.86081,0,0,0,9.854,4.776a.26169.26169,0,0,0-.16938.22759.92978.92978,0,0,0,.08619.42094c.05682.14524.20779.531.50006.41955a8.40969,8.40969,0,0,1,2.91968-.55484,7.87875,7.87875,0,0,1,3.086.62286,8.61817,8.61817,0,0,1,2.30562,1.49315.2781.2781,0,0,0,.18318.07586c.15529,0,.30425-.15253.43167-.29551.21268-.23861.35873-.4369.1492-.63538a8.50425,8.50425,0,0,0-2.62312-1.694A9.0177,9.0177,0,0,0,13.19058,4.14283ZM19.50945,18.6236h0a.93171.93171,0,0,0-.36642-.25406.26589.26589,0,0,0-.27613.06613l-.06943.06929A7.90606,7.90606,0,0,1,7.60639,18.505a7.57284,7.57284,0,0,1-1.696-2.51537,8.58715,8.58715,0,0,1-.5147-1.77754l-.00871-.04864c-.04939-.25873-.28755-.27684-.62981-.22448-.14234.02178-.5755.088-.53426.39969l.001.00712a9.08807,9.08807,0,0,0,15.406,4.99094c.00193-.00192.04753-.04718.0725-.07436C19.79425,19.16234,19.87422,18.98728,19.50945,18.6236Z"
  }));
};

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/social-link/icons/amazon.js


/**
 * WordPress dependencies
 */

var amazon_AmazonIcon = function AmazonIcon() {
  return Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    version: "1.1"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
    d: "M13.582,8.182C11.934,8.367,9.78,8.49,8.238,9.166c-1.781,0.769-3.03,2.337-3.03,4.644 c0,2.953,1.86,4.429,4.253,4.429c2.02,0,3.125-0.477,4.685-2.065c0.516,0.747,0.685,1.109,1.629,1.894 c0.212,0.114,0.483,0.103,0.672-0.066l0.006,0.006c0.567-0.505,1.599-1.401,2.18-1.888c0.231-0.188,0.19-0.496,0.009-0.754 c-0.52-0.718-1.072-1.303-1.072-2.634V8.305c0-1.876,0.133-3.599-1.249-4.891C15.23,2.369,13.422,2,12.04,2 C9.336,2,6.318,3.01,5.686,6.351C5.618,6.706,5.877,6.893,6.109,6.945l2.754,0.298C9.121,7.23,9.308,6.977,9.357,6.72 c0.236-1.151,1.2-1.706,2.284-1.706c0.584,0,1.249,0.215,1.595,0.738c0.398,0.584,0.346,1.384,0.346,2.061V8.182z M13.049,14.088 c-0.451,0.8-1.169,1.291-1.967,1.291c-1.09,0-1.728-0.83-1.728-2.061c0-2.42,2.171-2.86,4.227-2.86v0.615 C13.582,12.181,13.608,13.104,13.049,14.088z M20.683,19.339C18.329,21.076,14.917,22,11.979,22c-4.118,0-7.826-1.522-10.632-4.057 c-0.22-0.199-0.024-0.471,0.241-0.317c3.027,1.762,6.771,2.823,10.639,2.823c2.608,0,5.476-0.541,8.115-1.66 C20.739,18.62,21.072,19.051,20.683,19.339z M21.336,21.043c-0.194,0.163-0.379,0.076-0.293-0.139 c0.284-0.71,0.92-2.298,0.619-2.684c-0.301-0.386-1.99-0.183-2.749-0.092c-0.23,0.027-0.266-0.173-0.059-0.319 c1.348-0.946,3.555-0.673,3.811-0.356C22.925,17.773,22.599,19.986,21.336,21.043z"
  }));
};

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/social-link/icons/bandcamp.js


/**
 * WordPress dependencies
 */

var bandcamp_BandcampIcon = function BandcampIcon() {
  return Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    version: "1.1"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
    d: "M15.27 17.289 3 17.289 8.73 6.711 21 6.711 15.27 17.289"
  }));
};

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/social-link/icons/behance.js


/**
 * WordPress dependencies
 */

var behance_BehanceIcon = function BehanceIcon() {
  return Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    version: "1.1"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
    d: "M7.799,5.698c0.589,0,1.12,0.051,1.606,0.156c0.482,0.102,0.894,0.273,1.241,0.507c0.344,0.235,0.612,0.546,0.804,0.938 c0.188,0.387,0.281,0.871,0.281,1.443c0,0.619-0.141,1.137-0.421,1.551c-0.284,0.413-0.7,0.751-1.255,1.014 c0.756,0.218,1.317,0.601,1.689,1.146c0.374,0.549,0.557,1.205,0.557,1.975c0,0.623-0.12,1.161-0.359,1.612 c-0.241,0.457-0.569,0.828-0.973,1.114c-0.408,0.288-0.876,0.5-1.399,0.637C9.052,17.931,8.514,18,7.963,18H2V5.698H7.799 M7.449,10.668c0.481,0,0.878-0.114,1.192-0.345c0.311-0.228,0.463-0.603,0.463-1.119c0-0.286-0.051-0.523-0.152-0.707 C8.848,8.315,8.711,8.171,8.536,8.07C8.362,7.966,8.166,7.894,7.94,7.854c-0.224-0.044-0.457-0.06-0.697-0.06H4.709v2.874H7.449z M7.6,15.905c0.267,0,0.521-0.024,0.759-0.077c0.243-0.053,0.457-0.137,0.637-0.261c0.182-0.12,0.332-0.283,0.441-0.491 C9.547,14.87,9.6,14.602,9.6,14.278c0-0.633-0.18-1.084-0.533-1.357c-0.356-0.27-0.83-0.404-1.413-0.404H4.709v3.388L7.6,15.905z M16.162,15.864c0.367,0.358,0.897,0.538,1.583,0.538c0.493,0,0.92-0.125,1.277-0.374c0.354-0.248,0.571-0.514,0.654-0.79h2.155 c-0.347,1.072-0.872,1.838-1.589,2.299C19.534,18,18.67,18.23,17.662,18.23c-0.701,0-1.332-0.113-1.899-0.337 c-0.567-0.227-1.041-0.544-1.439-0.958c-0.389-0.415-0.689-0.907-0.904-1.484c-0.213-0.574-0.32-1.21-0.32-1.899 c0-0.666,0.11-1.288,0.329-1.863c0.222-0.577,0.529-1.075,0.933-1.492c0.406-0.42,0.885-0.751,1.444-0.994 c0.558-0.241,1.175-0.363,1.857-0.363c0.754,0,1.414,0.145,1.98,0.44c0.563,0.291,1.026,0.686,1.389,1.181 c0.363,0.493,0.622,1.057,0.783,1.69c0.16,0.632,0.217,1.292,0.171,1.983h-6.428C15.557,14.84,15.795,15.506,16.162,15.864 M18.973,11.184c-0.291-0.321-0.783-0.496-1.384-0.496c-0.39,0-0.714,0.066-0.973,0.2c-0.254,0.132-0.461,0.297-0.621,0.491 c-0.157,0.197-0.265,0.405-0.328,0.628c-0.063,0.217-0.101,0.413-0.111,0.587h3.98C19.478,11.969,19.265,11.509,18.973,11.184z M15.057,7.738h4.985V6.524h-4.985L15.057,7.738z"
  }));
};

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/social-link/icons/chain.js


/**
 * WordPress dependencies
 */

var chain_ChainIcon = function ChainIcon() {
  return Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    version: "1.1"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
    d: "M19.647,16.706a1.134,1.134,0,0,0-.343-.833l-2.549-2.549a1.134,1.134,0,0,0-.833-.343,1.168,1.168,0,0,0-.883.392l.233.226q.2.189.264.264a2.922,2.922,0,0,1,.184.233.986.986,0,0,1,.159.312,1.242,1.242,0,0,1,.043.337,1.172,1.172,0,0,1-1.176,1.176,1.237,1.237,0,0,1-.337-.043,1,1,0,0,1-.312-.159,2.76,2.76,0,0,1-.233-.184q-.073-.068-.264-.264l-.226-.233a1.19,1.19,0,0,0-.4.895,1.134,1.134,0,0,0,.343.833L15.837,19.3a1.13,1.13,0,0,0,.833.331,1.18,1.18,0,0,0,.833-.318l1.8-1.789a1.12,1.12,0,0,0,.343-.821Zm-8.615-8.64a1.134,1.134,0,0,0-.343-.833L8.163,4.7a1.134,1.134,0,0,0-.833-.343,1.184,1.184,0,0,0-.833.331L4.7,6.473a1.12,1.12,0,0,0-.343.821,1.134,1.134,0,0,0,.343.833l2.549,2.549a1.13,1.13,0,0,0,.833.331,1.184,1.184,0,0,0,.883-.38L8.728,10.4q-.2-.189-.264-.264A2.922,2.922,0,0,1,8.28,9.9a.986.986,0,0,1-.159-.312,1.242,1.242,0,0,1-.043-.337A1.172,1.172,0,0,1,9.254,8.079a1.237,1.237,0,0,1,.337.043,1,1,0,0,1,.312.159,2.761,2.761,0,0,1,.233.184q.073.068.264.264l.226.233a1.19,1.19,0,0,0,.4-.895ZM22,16.706a3.343,3.343,0,0,1-1.042,2.488l-1.8,1.789a3.536,3.536,0,0,1-4.988-.025l-2.525-2.537a3.384,3.384,0,0,1-1.017-2.488,3.448,3.448,0,0,1,1.078-2.561l-1.078-1.078a3.434,3.434,0,0,1-2.549,1.078,3.4,3.4,0,0,1-2.5-1.029L3.029,9.794A3.4,3.4,0,0,1,2,7.294,3.343,3.343,0,0,1,3.042,4.806l1.8-1.789A3.384,3.384,0,0,1,7.331,2a3.357,3.357,0,0,1,2.5,1.042l2.525,2.537a3.384,3.384,0,0,1,1.017,2.488,3.448,3.448,0,0,1-1.078,2.561l1.078,1.078a3.551,3.551,0,0,1,5.049-.049l2.549,2.549A3.4,3.4,0,0,1,22,16.706Z"
  }));
};

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/social-link/icons/codepen.js


/**
 * WordPress dependencies
 */

var codepen_CodepenIcon = function CodepenIcon() {
  return Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    version: "1.1"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
    d: "M22.016,8.84c-0.002-0.013-0.005-0.025-0.007-0.037c-0.005-0.025-0.008-0.048-0.015-0.072 c-0.003-0.015-0.01-0.028-0.013-0.042c-0.008-0.02-0.015-0.04-0.023-0.062c-0.007-0.015-0.013-0.028-0.02-0.042 c-0.008-0.02-0.018-0.037-0.03-0.057c-0.007-0.013-0.017-0.027-0.025-0.038c-0.012-0.018-0.023-0.035-0.035-0.052 c-0.01-0.013-0.02-0.025-0.03-0.037c-0.015-0.017-0.028-0.032-0.043-0.045c-0.01-0.012-0.022-0.023-0.035-0.035 c-0.015-0.015-0.032-0.028-0.048-0.04c-0.012-0.01-0.025-0.02-0.037-0.03c-0.005-0.003-0.01-0.008-0.015-0.012l-9.161-6.096 c-0.289-0.192-0.666-0.192-0.955,0L2.359,8.237C2.354,8.24,2.349,8.245,2.344,8.249L2.306,8.277 c-0.017,0.013-0.033,0.027-0.048,0.04C2.246,8.331,2.234,8.342,2.222,8.352c-0.015,0.015-0.028,0.03-0.042,0.047 c-0.012,0.013-0.022,0.023-0.03,0.037C2.139,8.453,2.125,8.471,2.115,8.488C2.107,8.501,2.099,8.514,2.09,8.526 C2.079,8.548,2.069,8.565,2.06,8.585C2.054,8.6,2.047,8.613,2.04,8.626C2.032,8.648,2.025,8.67,2.019,8.69 c-0.005,0.013-0.01,0.027-0.013,0.042C1.999,8.755,1.995,8.778,1.99,8.803C1.989,8.817,1.985,8.828,1.984,8.84 C1.978,8.879,1.975,8.915,1.975,8.954v6.093c0,0.037,0.003,0.075,0.008,0.112c0.002,0.012,0.005,0.025,0.007,0.038 c0.005,0.023,0.008,0.047,0.015,0.072c0.003,0.015,0.008,0.028,0.013,0.04c0.007,0.022,0.013,0.042,0.022,0.063 c0.007,0.015,0.013,0.028,0.02,0.04c0.008,0.02,0.018,0.038,0.03,0.058c0.007,0.013,0.015,0.027,0.025,0.038 c0.012,0.018,0.023,0.035,0.035,0.052c0.01,0.013,0.02,0.025,0.03,0.037c0.013,0.015,0.028,0.032,0.042,0.045 c0.012,0.012,0.023,0.023,0.035,0.035c0.015,0.013,0.032,0.028,0.048,0.04l0.038,0.03c0.005,0.003,0.01,0.007,0.013,0.01 l9.163,6.095C11.668,21.953,11.833,22,12,22c0.167,0,0.332-0.047,0.478-0.144l9.163-6.095l0.015-0.01 c0.013-0.01,0.027-0.02,0.037-0.03c0.018-0.013,0.035-0.028,0.048-0.04c0.013-0.012,0.025-0.023,0.035-0.035 c0.017-0.015,0.03-0.032,0.043-0.045c0.01-0.013,0.02-0.025,0.03-0.037c0.013-0.018,0.025-0.035,0.035-0.052 c0.008-0.013,0.018-0.027,0.025-0.038c0.012-0.02,0.022-0.038,0.03-0.058c0.007-0.013,0.013-0.027,0.02-0.04 c0.008-0.022,0.015-0.042,0.023-0.063c0.003-0.013,0.01-0.027,0.013-0.04c0.007-0.025,0.01-0.048,0.015-0.072 c0.002-0.013,0.005-0.027,0.007-0.037c0.003-0.042,0.007-0.079,0.007-0.117V8.954C22.025,8.915,22.022,8.879,22.016,8.84z M12.862,4.464l6.751,4.49l-3.016,2.013l-3.735-2.492V4.464z M11.138,4.464v4.009l-3.735,2.494L4.389,8.954L11.138,4.464z M3.699,10.562L5.853,12l-2.155,1.438V10.562z M11.138,19.536l-6.749-4.491l3.015-2.011l3.735,2.492V19.536z M12,14.035L8.953,12 L12,9.966L15.047,12L12,14.035z M12.862,19.536v-4.009l3.735-2.492l3.016,2.011L12.862,19.536z M20.303,13.438L18.147,12 l2.156-1.438L20.303,13.438z"
  }));
};

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/social-link/icons/deviantart.js


/**
 * WordPress dependencies
 */

var deviantart_DeviantArtIcon = function DeviantArtIcon() {
  return Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    version: "1.1"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
    d: "M 18.19 5.636 18.19 2 18.188 2 14.553 2 14.19 2.366 12.474 5.636 11.935 6 5.81 6 5.81 10.994 9.177 10.994 9.477 11.357 5.81 18.363 5.81 22 5.811 22 9.447 22 9.81 21.634 11.526 18.364 12.065 18 18.19 18 18.19 13.006 14.823 13.006 14.523 12.641 18.19 5.636z"
  }));
};

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/social-link/icons/dribbble.js


/**
 * WordPress dependencies
 */

var dribbble_DribbbleIcon = function DribbbleIcon() {
  return Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    version: "1.1"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
    d: "M12,22C6.486,22,2,17.514,2,12S6.486,2,12,2c5.514,0,10,4.486,10,10S17.514,22,12,22z M20.434,13.369 c-0.292-0.092-2.644-0.794-5.32-0.365c1.117,3.07,1.572,5.57,1.659,6.09C18.689,17.798,20.053,15.745,20.434,13.369z M15.336,19.876c-0.127-0.749-0.623-3.361-1.822-6.477c-0.019,0.006-0.038,0.013-0.056,0.019c-4.818,1.679-6.547,5.02-6.701,5.334 c1.448,1.129,3.268,1.803,5.243,1.803C13.183,20.555,14.311,20.313,15.336,19.876z M5.654,17.724 c0.193-0.331,2.538-4.213,6.943-5.637c0.111-0.036,0.224-0.07,0.337-0.102c-0.214-0.485-0.448-0.971-0.692-1.45 c-4.266,1.277-8.405,1.223-8.778,1.216c-0.003,0.087-0.004,0.174-0.004,0.261C3.458,14.207,4.29,16.21,5.654,17.724z M3.639,10.264 c0.382,0.005,3.901,0.02,7.897-1.041c-1.415-2.516-2.942-4.631-3.167-4.94C5.979,5.41,4.193,7.613,3.639,10.264z M9.998,3.709 c0.236,0.316,1.787,2.429,3.187,5c3.037-1.138,4.323-2.867,4.477-3.085C16.154,4.286,14.17,3.471,12,3.471 C11.311,3.471,10.641,3.554,9.998,3.709z M18.612,6.612C18.432,6.855,17,8.69,13.842,9.979c0.199,0.407,0.389,0.821,0.567,1.237 c0.063,0.148,0.124,0.295,0.184,0.441c2.842-0.357,5.666,0.215,5.948,0.275C20.522,9.916,19.801,8.065,18.612,6.612z"
  }));
};

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/social-link/icons/dropbox.js


/**
 * WordPress dependencies
 */

var dropbox_DropboxIcon = function DropboxIcon() {
  return Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    version: "1.1"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
    d: "M12,6.134L6.069,9.797L2,6.54l5.883-3.843L12,6.134z M2,13.054l5.883,3.843L12,13.459L6.069,9.797L2,13.054z M12,13.459 l4.116,3.439L22,13.054l-4.069-3.257L12,13.459z M22,6.54l-5.884-3.843L12,6.134l5.931,3.663L22,6.54z M12.011,14.2l-4.129,3.426 l-1.767-1.153v1.291l5.896,3.539l5.897-3.539v-1.291l-1.769,1.153L12.011,14.2z"
  }));
};

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/social-link/icons/etsy.js


/**
 * WordPress dependencies
 */

var etsy_EtsyIcon = function EtsyIcon() {
  return Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    version: "1.1"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
    d: "M9.16033,4.038c0-.27174.02717-.43478.48913-.43478h6.22283c1.087,0,1.68478.92391,2.11957,2.663l.35326,1.38587h1.05978C19.59511,3.712,19.75815,2,19.75815,2s-2.663.29891-4.23913.29891h-7.962L3.29076,2.163v1.1413L4.731,3.57609c1.00543.19022,1.25.40761,1.33152,1.33152,0,0,.08152,2.71739.08152,7.20109s-.08152,7.17391-.08152,7.17391c0,.81522-.32609,1.11413-1.33152,1.30435l-1.44022.27174V22l4.2663-.13587h7.11957c1.60326,0,5.32609.13587,5.32609.13587.08152-.97826.625-5.40761.70652-5.89674H19.7038L18.644,18.52174c-.84239,1.90217-2.06522,2.038-3.42391,2.038H11.1712c-1.3587,0-2.01087-.54348-2.01087-1.712V12.65217s3.0163,0,3.99457.08152c.76087.05435,1.22283.27174,1.46739,1.33152l.32609,1.413h1.16848l-.08152-3.55978.163-3.587H15.02989l-.38043,1.57609c-.24457,1.03261-.40761,1.22283-1.46739,1.33152-1.38587.13587-4.02174.1087-4.02174.1087Z"
  }));
};

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/social-link/icons/facebook.js


/**
 * WordPress dependencies
 */

var facebook_FacebookIcon = function FacebookIcon() {
  return Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    version: "1.1"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
    d: "M12 2C6.5 2 2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12c0-5.5-4.5-10-10-10z"
  }));
};

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/social-link/icons/feed.js


/**
 * WordPress dependencies
 */

var feed_FeedIcon = function FeedIcon() {
  return Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    version: "1.1"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
    d: "M2,8.667V12c5.515,0,10,4.485,10,10h3.333C15.333,14.637,9.363,8.667,2,8.667z M2,2v3.333 c9.19,0,16.667,7.477,16.667,16.667H22C22,10.955,13.045,2,2,2z M4.5,17C3.118,17,2,18.12,2,19.5S3.118,22,4.5,22S7,20.88,7,19.5 S5.882,17,4.5,17z"
  }));
};

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/social-link/icons/flickr.js


/**
 * WordPress dependencies
 */

var flickr_FlickrIcon = function FlickrIcon() {
  return Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    version: "1.1"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
    d: "M6.5,7c-2.75,0-5,2.25-5,5s2.25,5,5,5s5-2.25,5-5S9.25,7,6.5,7z M17.5,7c-2.75,0-5,2.25-5,5s2.25,5,5,5s5-2.25,5-5 S20.25,7,17.5,7z"
  }));
};

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/social-link/icons/foursquare.js


/**
 * WordPress dependencies
 */

var foursquare_FoursquareIcon = function FoursquareIcon() {
  return Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    version: "1.1"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
    d: "M17.573,2c0,0-9.197,0-10.668,0S5,3.107,5,3.805s0,16.948,0,16.948c0,0.785,0.422,1.077,0.66,1.172 c0.238,0.097,0.892,0.177,1.285-0.275c0,0,5.035-5.843,5.122-5.93c0.132-0.132,0.132-0.132,0.262-0.132h3.26 c1.368,0,1.588-0.977,1.732-1.552c0.078-0.318,0.692-3.428,1.225-6.122l0.675-3.368C19.56,2.893,19.14,2,17.573,2z M16.495,7.22 c-0.053,0.252-0.372,0.518-0.665,0.518c-0.293,0-4.157,0-4.157,0c-0.467,0-0.802,0.318-0.802,0.787v0.508 c0,0.467,0.337,0.798,0.805,0.798c0,0,3.197,0,3.528,0s0.655,0.362,0.583,0.715c-0.072,0.353-0.407,2.102-0.448,2.295 c-0.04,0.193-0.262,0.523-0.655,0.523c-0.33,0-2.88,0-2.88,0c-0.523,0-0.683,0.068-1.033,0.503 c-0.35,0.437-3.505,4.223-3.505,4.223c-0.032,0.035-0.063,0.027-0.063-0.015V4.852c0-0.298,0.26-0.648,0.648-0.648 c0,0,8.228,0,8.562,0c0.315,0,0.61,0.297,0.528,0.683L16.495,7.22z"
  }));
};

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/social-link/icons/goodreads.js


/**
 * WordPress dependencies
 */

var goodreads_GoodreadsIcon = function GoodreadsIcon() {
  return Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    version: "1.1"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
    d: "M17.3,17.5c-0.2,0.8-0.5,1.4-1,1.9c-0.4,0.5-1,0.9-1.7,1.2C13.9,20.9,13.1,21,12,21c-0.6,0-1.3-0.1-1.9-0.2 c-0.6-0.1-1.1-0.4-1.6-0.7c-0.5-0.3-0.9-0.7-1.2-1.2c-0.3-0.5-0.5-1.1-0.5-1.7h1.5c0.1,0.5,0.2,0.9,0.5,1.2 c0.2,0.3,0.5,0.6,0.9,0.8c0.3,0.2,0.7,0.3,1.1,0.4c0.4,0.1,0.8,0.1,1.2,0.1c1.4,0,2.5-0.4,3.1-1.2c0.6-0.8,1-2,1-3.5v-1.7h0 c-0.4,0.8-0.9,1.4-1.6,1.9c-0.7,0.5-1.5,0.7-2.4,0.7c-1,0-1.9-0.2-2.6-0.5C8.7,15,8.1,14.5,7.7,14c-0.5-0.6-0.8-1.3-1-2.1 c-0.2-0.8-0.3-1.6-0.3-2.5c0-0.9,0.1-1.7,0.4-2.5c0.3-0.8,0.6-1.5,1.1-2c0.5-0.6,1.1-1,1.8-1.4C10.3,3.2,11.1,3,12,3 c0.5,0,0.9,0.1,1.3,0.2c0.4,0.1,0.8,0.3,1.1,0.5c0.3,0.2,0.6,0.5,0.9,0.8c0.3,0.3,0.5,0.6,0.6,1h0V3.4h1.5V15 C17.6,15.9,17.5,16.7,17.3,17.5z M13.8,14.1c0.5-0.3,0.9-0.7,1.3-1.1c0.3-0.5,0.6-1,0.8-1.6c0.2-0.6,0.3-1.2,0.3-1.9 c0-0.6-0.1-1.2-0.2-1.9c-0.1-0.6-0.4-1.2-0.7-1.7c-0.3-0.5-0.7-0.9-1.3-1.2c-0.5-0.3-1.1-0.5-1.9-0.5s-1.4,0.2-1.9,0.5 c-0.5,0.3-1,0.7-1.3,1.2C8.5,6.4,8.3,7,8.1,7.6C8,8.2,7.9,8.9,7.9,9.5c0,0.6,0.1,1.3,0.2,1.9C8.3,12,8.6,12.5,8.9,13 c0.3,0.5,0.8,0.8,1.3,1.1c0.5,0.3,1.1,0.4,1.9,0.4C12.7,14.5,13.3,14.4,13.8,14.1z"
  }));
};

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/social-link/icons/google.js


/**
 * WordPress dependencies
 */

var google_GoogleIcon = function GoogleIcon() {
  return Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    version: "1.1"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
    d: "M12.02,10.18v3.72v0.01h5.51c-0.26,1.57-1.67,4.22-5.5,4.22c-3.31,0-6.01-2.75-6.01-6.12s2.7-6.12,6.01-6.12 c1.87,0,3.13,0.8,3.85,1.48l2.84-2.76C16.99,2.99,14.73,2,12.03,2c-5.52,0-10,4.48-10,10s4.48,10,10,10c5.77,0,9.6-4.06,9.6-9.77 c0-0.83-0.11-1.42-0.25-2.05H12.02z"
  }));
};

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/social-link/icons/github.js


/**
 * WordPress dependencies
 */

var github_GitHubIcon = function GitHubIcon() {
  return Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    version: "1.1"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
    d: "M12,2C6.477,2,2,6.477,2,12c0,4.419,2.865,8.166,6.839,9.489c0.5,0.09,0.682-0.218,0.682-0.484 c0-0.236-0.009-0.866-0.014-1.699c-2.782,0.602-3.369-1.34-3.369-1.34c-0.455-1.157-1.11-1.465-1.11-1.465 c-0.909-0.62,0.069-0.608,0.069-0.608c1.004,0.071,1.532,1.03,1.532,1.03c0.891,1.529,2.341,1.089,2.91,0.833 c0.091-0.647,0.349-1.086,0.635-1.337c-2.22-0.251-4.555-1.111-4.555-4.943c0-1.091,0.39-1.984,1.03-2.682 C6.546,8.54,6.202,7.524,6.746,6.148c0,0,0.84-0.269,2.75,1.025C10.295,6.95,11.15,6.84,12,6.836 c0.85,0.004,1.705,0.114,2.504,0.336c1.909-1.294,2.748-1.025,2.748-1.025c0.546,1.376,0.202,2.394,0.1,2.646 c0.64,0.699,1.026,1.591,1.026,2.682c0,3.841-2.337,4.687-4.565,4.935c0.359,0.307,0.679,0.917,0.679,1.852 c0,1.335-0.012,2.415-0.012,2.741c0,0.269,0.18,0.579,0.688,0.481C19.138,20.161,22,16.416,22,12C22,6.477,17.523,2,12,2z"
  }));
};

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/social-link/icons/instagram.js


/**
 * WordPress dependencies
 */

var instagram_InstagramIcon = function InstagramIcon() {
  return Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    version: "1.1"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
    d: "M12,4.622c2.403,0,2.688,0.009,3.637,0.052c0.877,0.04,1.354,0.187,1.671,0.31c0.42,0.163,0.72,0.358,1.035,0.673 c0.315,0.315,0.51,0.615,0.673,1.035c0.123,0.317,0.27,0.794,0.31,1.671c0.043,0.949,0.052,1.234,0.052,3.637 s-0.009,2.688-0.052,3.637c-0.04,0.877-0.187,1.354-0.31,1.671c-0.163,0.42-0.358,0.72-0.673,1.035 c-0.315,0.315-0.615,0.51-1.035,0.673c-0.317,0.123-0.794,0.27-1.671,0.31c-0.949,0.043-1.233,0.052-3.637,0.052 s-2.688-0.009-3.637-0.052c-0.877-0.04-1.354-0.187-1.671-0.31c-0.42-0.163-0.72-0.358-1.035-0.673 c-0.315-0.315-0.51-0.615-0.673-1.035c-0.123-0.317-0.27-0.794-0.31-1.671C4.631,14.688,4.622,14.403,4.622,12 s0.009-2.688,0.052-3.637c0.04-0.877,0.187-1.354,0.31-1.671c0.163-0.42,0.358-0.72,0.673-1.035 c0.315-0.315,0.615-0.51,1.035-0.673c0.317-0.123,0.794-0.27,1.671-0.31C9.312,4.631,9.597,4.622,12,4.622 M12,3 C9.556,3,9.249,3.01,8.289,3.054C7.331,3.098,6.677,3.25,6.105,3.472C5.513,3.702,5.011,4.01,4.511,4.511 c-0.5,0.5-0.808,1.002-1.038,1.594C3.25,6.677,3.098,7.331,3.054,8.289C3.01,9.249,3,9.556,3,12c0,2.444,0.01,2.751,0.054,3.711 c0.044,0.958,0.196,1.612,0.418,2.185c0.23,0.592,0.538,1.094,1.038,1.594c0.5,0.5,1.002,0.808,1.594,1.038 c0.572,0.222,1.227,0.375,2.185,0.418C9.249,20.99,9.556,21,12,21s2.751-0.01,3.711-0.054c0.958-0.044,1.612-0.196,2.185-0.418 c0.592-0.23,1.094-0.538,1.594-1.038c0.5-0.5,0.808-1.002,1.038-1.594c0.222-0.572,0.375-1.227,0.418-2.185 C20.99,14.751,21,14.444,21,12s-0.01-2.751-0.054-3.711c-0.044-0.958-0.196-1.612-0.418-2.185c-0.23-0.592-0.538-1.094-1.038-1.594 c-0.5-0.5-1.002-0.808-1.594-1.038c-0.572-0.222-1.227-0.375-2.185-0.418C14.751,3.01,14.444,3,12,3L12,3z M12,7.378 c-2.552,0-4.622,2.069-4.622,4.622S9.448,16.622,12,16.622s4.622-2.069,4.622-4.622S14.552,7.378,12,7.378z M12,15 c-1.657,0-3-1.343-3-3s1.343-3,3-3s3,1.343,3,3S13.657,15,12,15z M16.804,6.116c-0.596,0-1.08,0.484-1.08,1.08 s0.484,1.08,1.08,1.08c0.596,0,1.08-0.484,1.08-1.08S17.401,6.116,16.804,6.116z"
  }));
};

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/social-link/icons/lastfm.js


/**
 * WordPress dependencies
 */

var lastfm_LastfmIcon = function LastfmIcon() {
  return Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    version: "1.1"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
    d: "M10.5002,0 C4.7006,0 0,4.70109753 0,10.4998496 C0,16.2989526 4.7006,21 10.5002,21 C16.299,21 21,16.2989526 21,10.4998496 C21,4.70109753 16.299,0 10.5002,0 Z M14.69735,14.7204413 C13.3164,14.7151781 12.4346,14.0870017 11.83445,12.6859357 L11.6816001,12.3451305 L10.35405,9.31011397 C9.92709997,8.26875064 8.85260001,7.57120012 7.68010001,7.57120012 C6.06945001,7.57120012 4.75925001,8.88509738 4.75925001,10.5009524 C4.75925001,12.1164565 6.06945001,13.4303036 7.68010001,13.4303036 C8.77200001,13.4303036 9.76514999,12.827541 10.2719501,11.8567047 C10.2893,11.8235214 10.3239,11.8019673 10.36305,11.8038219 C10.4007,11.8053759 10.43535,11.8287847 10.4504,11.8631709 L10.98655,13.1045863 C11.0016,13.1389726 10.9956,13.17782 10.97225,13.2068931 C10.1605001,14.1995341 8.96020001,14.7683115 7.68010001,14.7683115 C5.33305,14.7683115 3.42340001,12.8535563 3.42340001,10.5009524 C3.42340001,8.14679459 5.33300001,6.23203946 7.68010001,6.23203946 C9.45720002,6.23203946 10.8909,7.19074535 11.6138,8.86359341 C11.6205501,8.88018505 12.3412,10.5707777 12.97445,12.0190621 C13.34865,12.8739575 13.64615,13.3959676 14.6288,13.4291508 C15.5663001,13.4612814 16.25375,12.9121534 16.25375,12.1484869 C16.25375,11.4691321 15.8320501,11.3003585 14.8803,10.98216 C13.2365,10.4397989 12.34495,9.88605929 12.34495,8.51817658 C12.34495,7.1809207 13.26665,6.31615054 14.692,6.31615054 C15.62875,6.31615054 16.3155,6.7286858 16.79215,7.5768142 C16.80495,7.60062396 16.8079001,7.62814302 16.8004001,7.65420843 C16.7929,7.68027384 16.7748,7.70212868 16.7507001,7.713808 L15.86145,8.16900031 C15.8178001,8.19200805 15.7643,8.17807308 15.73565,8.13847371 C15.43295,7.71345711 15.0956,7.52513451 14.6423,7.52513451 C14.05125,7.52513451 13.6220001,7.92899802 13.6220001,8.48649708 C13.6220001,9.17382194 14.1529001,9.34144259 15.0339,9.61923972 C15.14915,9.65578139 15.26955,9.69397731 15.39385,9.73432853 C16.7763,10.1865133 17.57675,10.7311301 17.57675,12.1836251 C17.57685,13.629654 16.3389,14.7204413 14.69735,14.7204413 Z"
  }));
};

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/social-link/icons/linkedin.js


/**
 * WordPress dependencies
 */

var linkedin_LinkedInIcon = function LinkedInIcon() {
  return Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    version: "1.1"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
    d: "M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z"
  }));
};

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/social-link/icons/mail.js


/**
 * WordPress dependencies
 */

var mail_MailIcon = function MailIcon() {
  return Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    version: "1.1"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
    d: "M20,4H4C2.895,4,2,4.895,2,6v12c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2V6C22,4.895,21.105,4,20,4z M20,8.236l-8,4.882 L4,8.236V6h16V8.236z"
  }));
};

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/social-link/icons/mastodon.js


/**
 * WordPress dependencies
 */

var mastodon_MastodonIcon = function MastodonIcon() {
  return Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    version: "1.1"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
    d: "M23.193 7.879c0-5.206-3.411-6.732-3.411-6.732C18.062.357 15.108.025 12.041 0h-.076c-3.068.025-6.02.357-7.74 1.147 0 0-3.411 1.526-3.411 6.732 0 1.192-.023 2.618.015 4.129.124 5.092.934 10.109 5.641 11.355 2.17.574 4.034.695 5.535.612 2.722-.15 4.25-.972 4.25-.972l-.09-1.975s-1.945.613-4.129.539c-2.165-.074-4.449-.233-4.799-2.891a5.499 5.499 0 0 1-.048-.745s2.125.52 4.817.643c1.646.075 3.19-.097 4.758-.283 3.007-.359 5.625-2.212 5.954-3.905.517-2.665.475-6.507.475-6.507zm-4.024 6.709h-2.497V8.469c0-1.29-.543-1.944-1.628-1.944-1.2 0-1.802.776-1.802 2.312v3.349h-2.483v-3.35c0-1.536-.602-2.312-1.802-2.312-1.085 0-1.628.655-1.628 1.944v6.119H4.832V8.284c0-1.289.328-2.313.987-3.07.68-.758 1.569-1.146 2.674-1.146 1.278 0 2.246.491 2.886 1.474L12 6.585l.622-1.043c.64-.983 1.608-1.474 2.886-1.474 1.104 0 1.994.388 2.674 1.146.658.757.986 1.781.986 3.07v6.304z"
  }));
};

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/social-link/icons/meetup.js


/**
 * WordPress dependencies
 */

var meetup_MeetupIcon = function MeetupIcon() {
  return Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    version: "1.1"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
    d: "M19.24775,14.722a3.57032,3.57032,0,0,1-2.94457,3.52073,3.61886,3.61886,0,0,1-.64652.05634c-.07314-.0008-.10187.02846-.12507.09547A2.38881,2.38881,0,0,1,13.49453,20.094a2.33092,2.33092,0,0,1-1.827-.50716.13635.13635,0,0,0-.19878-.00408,3.191,3.191,0,0,1-2.104.60248,3.26309,3.26309,0,0,1-3.00324-2.71993,2.19076,2.19076,0,0,1-.03512-.30865c-.00156-.08579-.03413-.1189-.11608-.13493a2.86421,2.86421,0,0,1-1.23189-.56111,2.945,2.945,0,0,1-1.166-2.05749,2.97484,2.97484,0,0,1,.87524-2.50774.112.112,0,0,0,.02091-.16107,2.7213,2.7213,0,0,1-.36648-1.48A2.81256,2.81256,0,0,1,6.57673,7.58838a.35764.35764,0,0,0,.28869-.22819,4.2208,4.2208,0,0,1,6.02892-1.90111.25161.25161,0,0,0,.22023.0243,3.65608,3.65608,0,0,1,3.76031.90678A3.57244,3.57244,0,0,1,17.95918,8.626a2.97339,2.97339,0,0,1,.01829.57356.10637.10637,0,0,0,.0853.12792,1.97669,1.97669,0,0,1,1.27939,1.33733,2.00266,2.00266,0,0,1-.57112,2.12652c-.05284.05166-.04168.08328-.01173.13489A3.51189,3.51189,0,0,1,19.24775,14.722Zm-6.35959-.27836a1.6984,1.6984,0,0,0,1.14556,1.61113,3.82039,3.82039,0,0,0,1.036.17935,1.46888,1.46888,0,0,0,.73509-.12255.44082.44082,0,0,0,.26057-.44274.45312.45312,0,0,0-.29211-.43375.97191.97191,0,0,0-.20678-.063c-.21326-.03806-.42754-.0701-.63973-.11215a.54787.54787,0,0,1-.50172-.60926,2.75864,2.75864,0,0,1,.1773-.901c.1763-.535.414-1.045.64183-1.55913A12.686,12.686,0,0,0,15.85,10.47863a1.58461,1.58461,0,0,0,.04861-.87208,1.04531,1.04531,0,0,0-.85432-.83981,1.60658,1.60658,0,0,0-1.23654.16594.27593.27593,0,0,1-.36286-.03413c-.085-.0747-.16594-.15379-.24918-.23055a.98682.98682,0,0,0-1.33577-.04933,6.1468,6.1468,0,0,1-.4989.41615.47762.47762,0,0,1-.51535.03566c-.17448-.09307-.35512-.175-.53531-.25665a1.74949,1.74949,0,0,0-.56476-.2016,1.69943,1.69943,0,0,0-1.61654.91787,8.05815,8.05815,0,0,0-.32952.80126c-.45471,1.2557-.82507,2.53825-1.20838,3.81639a1.24151,1.24151,0,0,0,.51532,1.44389,1.42659,1.42659,0,0,0,1.22008.17166,1.09728,1.09728,0,0,0,.66994-.69764c.44145-1.04111.839-2.09989,1.25981-3.14926.11581-.28876.22792-.57874.35078-.86438a.44548.44548,0,0,1,.69189-.19539.50521.50521,0,0,1,.15044.43836,1.75625,1.75625,0,0,1-.14731.50453c-.27379.69219-.55265,1.38236-.82766,2.074a2.0836,2.0836,0,0,0-.14038.42876.50719.50719,0,0,0,.27082.57722.87236.87236,0,0,0,.66145.02739.99137.99137,0,0,0,.53406-.532q.61571-1.20914,1.228-2.42031.28423-.55863.57585-1.1133a.87189.87189,0,0,1,.29055-.35253.34987.34987,0,0,1,.37634-.01265.30291.30291,0,0,1,.12434.31459.56716.56716,0,0,1-.04655.1915c-.05318.12739-.10286.25669-.16183.38156-.34118.71775-.68754,1.43273-1.02568,2.152A2.00213,2.00213,0,0,0,12.88816,14.44366Zm4.78568,5.28972a.88573.88573,0,0,0-1.77139.00465.8857.8857,0,0,0,1.77139-.00465Zm-14.83838-7.296a.84329.84329,0,1,0,.00827-1.68655.8433.8433,0,0,0-.00827,1.68655Zm10.366-9.43673a.83506.83506,0,1,0-.0091,1.67.83505.83505,0,0,0,.0091-1.67Zm6.85014,5.22a.71651.71651,0,0,0-1.433.0093.71656.71656,0,0,0,1.433-.0093ZM5.37528,6.17908A.63823.63823,0,1,0,6.015,5.54483.62292.62292,0,0,0,5.37528,6.17908Zm6.68214,14.80843a.54949.54949,0,1,0-.55052.541A.54556.54556,0,0,0,12.05742,20.98752Zm8.53235-8.49689a.54777.54777,0,0,0-.54027.54023.53327.53327,0,0,0,.532.52293.51548.51548,0,0,0,.53272-.5237A.53187.53187,0,0,0,20.58977,12.49063ZM7.82846,2.4715a.44927.44927,0,1,0,.44484.44766A.43821.43821,0,0,0,7.82846,2.4715Zm13.775,7.60492a.41186.41186,0,0,0-.40065.39623.40178.40178,0,0,0,.40168.40168A.38994.38994,0,0,0,22,10.48172.39946.39946,0,0,0,21.60349,10.07642ZM5.79193,17.96207a.40469.40469,0,0,0-.397-.39646.399.399,0,0,0-.396.405.39234.39234,0,0,0,.39939.389A.39857.39857,0,0,0,5.79193,17.96207Z"
  }));
};

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/social-link/icons/medium.js


/**
 * WordPress dependencies
 */

var medium_MediumIcon = function MediumIcon() {
  return Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    version: "1.1"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
    d: "M20.962,7.257l-5.457,8.867l-3.923-6.375l3.126-5.08c0.112-0.182,0.319-0.286,0.527-0.286c0.05,0,0.1,0.008,0.149,0.02 c0.039,0.01,0.078,0.023,0.114,0.041l5.43,2.715l0.006,0.003c0.004,0.002,0.007,0.006,0.011,0.008 C20.971,7.191,20.98,7.227,20.962,7.257z M9.86,8.592v5.783l5.14,2.57L9.86,8.592z M15.772,17.331l4.231,2.115 C20.554,19.721,21,19.529,21,19.016V8.835L15.772,17.331z M8.968,7.178L3.665,4.527C3.569,4.479,3.478,4.456,3.395,4.456 C3.163,4.456,3,4.636,3,4.938v11.45c0,0.306,0.224,0.669,0.498,0.806l4.671,2.335c0.12,0.06,0.234,0.088,0.337,0.088 c0.29,0,0.494-0.225,0.494-0.602V7.231C9,7.208,8.988,7.188,8.968,7.178z"
  }));
};

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/social-link/icons/pinterest.js


/**
 * WordPress dependencies
 */

var pinterest_PinterestIcon = function PinterestIcon() {
  return Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    version: "1.1"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
    d: "M12.289,2C6.617,2,3.606,5.648,3.606,9.622c0,1.846,1.025,4.146,2.666,4.878c0.25,0.111,0.381,0.063,0.439-0.169 c0.044-0.175,0.267-1.029,0.365-1.428c0.032-0.128,0.017-0.237-0.091-0.362C6.445,11.911,6.01,10.75,6.01,9.668 c0-2.777,2.194-5.464,5.933-5.464c3.23,0,5.49,2.108,5.49,5.122c0,3.407-1.794,5.768-4.13,5.768c-1.291,0-2.257-1.021-1.948-2.277 c0.372-1.495,1.089-3.112,1.089-4.191c0-0.967-0.542-1.775-1.663-1.775c-1.319,0-2.379,1.309-2.379,3.059 c0,1.115,0.394,1.869,0.394,1.869s-1.302,5.279-1.54,6.261c-0.405,1.666,0.053,4.368,0.094,4.604 c0.021,0.126,0.167,0.169,0.25,0.063c0.129-0.165,1.699-2.419,2.142-4.051c0.158-0.59,0.817-2.995,0.817-2.995 c0.43,0.784,1.681,1.446,3.013,1.446c3.963,0,6.822-3.494,6.822-7.833C20.394,5.112,16.849,2,12.289,2"
  }));
};

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/social-link/icons/pocket.js


/**
 * WordPress dependencies
 */

var pocket_PocketIcon = function PocketIcon() {
  return Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    version: "1.1"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
    d: "M21.927,4.194C21.667,3.48,20.982,3,20.222,3h-0.01h-1.721H3.839C3.092,3,2.411,3.47,2.145,4.17 C2.066,4.378,2.026,4.594,2.026,4.814v6.035l0.069,1.2c0.29,2.73,1.707,5.115,3.899,6.778c0.039,0.03,0.079,0.059,0.119,0.089 l0.025,0.018c1.175,0.859,2.491,1.441,3.91,1.727c0.655,0.132,1.325,0.2,1.991,0.2c0.615,0,1.232-0.057,1.839-0.17 c0.073-0.014,0.145-0.028,0.219-0.044c0.02-0.004,0.042-0.012,0.064-0.023c1.359-0.297,2.621-0.864,3.753-1.691l0.025-0.018 c0.04-0.029,0.08-0.058,0.119-0.089c2.192-1.664,3.609-4.049,3.898-6.778l0.069-1.2V4.814C22.026,4.605,22,4.398,21.927,4.194z M17.692,10.481l-4.704,4.512c-0.266,0.254-0.608,0.382-0.949,0.382c-0.342,0-0.684-0.128-0.949-0.382l-4.705-4.512 C5.838,9.957,5.82,9.089,6.344,8.542c0.524-0.547,1.392-0.565,1.939-0.04l3.756,3.601l3.755-3.601 c0.547-0.524,1.415-0.506,1.939,0.04C18.256,9.089,18.238,9.956,17.692,10.481z"
  }));
};

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/social-link/icons/reddit.js


/**
 * WordPress dependencies
 */

var reddit_RedditIcon = function RedditIcon() {
  return Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    version: "1.1"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
    d: "M22,11.816c0-1.256-1.021-2.277-2.277-2.277c-0.593,0-1.122,0.24-1.526,0.614c-1.481-0.965-3.455-1.594-5.647-1.69 l1.171-3.702l3.18,0.748c0.008,1.028,0.846,1.862,1.876,1.862c1.035,0,1.877-0.842,1.877-1.878c0-1.035-0.842-1.877-1.877-1.877 c-0.769,0-1.431,0.466-1.72,1.13l-3.508-0.826c-0.203-0.047-0.399,0.067-0.46,0.261l-1.35,4.268 c-2.316,0.038-4.411,0.67-5.97,1.671C5.368,9.765,4.853,9.539,4.277,9.539C3.021,9.539,2,10.56,2,11.816 c0,0.814,0.433,1.523,1.078,1.925c-0.037,0.221-0.061,0.444-0.061,0.672c0,3.292,4.011,5.97,8.941,5.97s8.941-2.678,8.941-5.97 c0-0.214-0.02-0.424-0.053-0.632C21.533,13.39,22,12.661,22,11.816z M18.776,4.394c0.606,0,1.1,0.493,1.1,1.1s-0.493,1.1-1.1,1.1 s-1.1-0.494-1.1-1.1S18.169,4.394,18.776,4.394z M2.777,11.816c0-0.827,0.672-1.5,1.499-1.5c0.313,0,0.598,0.103,0.838,0.269 c-0.851,0.676-1.477,1.479-1.812,2.36C2.983,12.672,2.777,12.27,2.777,11.816z M11.959,19.606c-4.501,0-8.164-2.329-8.164-5.193 S7.457,9.22,11.959,9.22s8.164,2.329,8.164,5.193S16.46,19.606,11.959,19.606z M20.636,13.001c-0.326-0.89-0.948-1.701-1.797-2.384 c0.248-0.186,0.55-0.301,0.883-0.301c0.827,0,1.5,0.673,1.5,1.5C21.223,12.299,20.992,12.727,20.636,13.001z M8.996,14.704 c-0.76,0-1.397-0.616-1.397-1.376c0-0.76,0.637-1.397,1.397-1.397c0.76,0,1.376,0.637,1.376,1.397 C10.372,14.088,9.756,14.704,8.996,14.704z M16.401,13.328c0,0.76-0.616,1.376-1.376,1.376c-0.76,0-1.399-0.616-1.399-1.376 c0-0.76,0.639-1.397,1.399-1.397C15.785,11.931,16.401,12.568,16.401,13.328z M15.229,16.708c0.152,0.152,0.152,0.398,0,0.55 c-0.674,0.674-1.727,1.002-3.219,1.002c-0.004,0-0.007-0.002-0.011-0.002c-0.004,0-0.007,0.002-0.011,0.002 c-1.492,0-2.544-0.328-3.218-1.002c-0.152-0.152-0.152-0.398,0-0.55c0.152-0.152,0.399-0.151,0.55,0 c0.521,0.521,1.394,0.775,2.669,0.775c0.004,0,0.007,0.002,0.011,0.002c0.004,0,0.007-0.002,0.011-0.002 c1.275,0,2.148-0.253,2.669-0.775C14.831,16.556,15.078,16.556,15.229,16.708z"
  }));
};

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/social-link/icons/skype.js


/**
 * WordPress dependencies
 */

var skype_SkypeIcon = function SkypeIcon() {
  return Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    version: "1.1"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
    d: "M10.113,2.699c0.033-0.006,0.067-0.013,0.1-0.02c0.033,0.017,0.066,0.033,0.098,0.051L10.113,2.699z M2.72,10.223 c-0.006,0.034-0.011,0.069-0.017,0.103c0.018,0.032,0.033,0.064,0.051,0.095L2.72,10.223z M21.275,13.771 c0.007-0.035,0.011-0.071,0.018-0.106c-0.018-0.031-0.033-0.064-0.052-0.095L21.275,13.771z M13.563,21.199 c0.032,0.019,0.065,0.035,0.096,0.053c0.036-0.006,0.071-0.011,0.105-0.017L13.563,21.199z M22,16.386 c0,1.494-0.581,2.898-1.637,3.953c-1.056,1.057-2.459,1.637-3.953,1.637c-0.967,0-1.914-0.251-2.75-0.725 c0.036-0.006,0.071-0.011,0.105-0.017l-0.202-0.035c0.032,0.019,0.065,0.035,0.096,0.053c-0.543,0.096-1.099,0.147-1.654,0.147 c-1.275,0-2.512-0.25-3.676-0.743c-1.125-0.474-2.135-1.156-3.002-2.023c-0.867-0.867-1.548-1.877-2.023-3.002 c-0.493-1.164-0.743-2.401-0.743-3.676c0-0.546,0.049-1.093,0.142-1.628c0.018,0.032,0.033,0.064,0.051,0.095L2.72,10.223 c-0.006,0.034-0.011,0.069-0.017,0.103C2.244,9.5,2,8.566,2,7.615c0-1.493,0.582-2.898,1.637-3.953 c1.056-1.056,2.46-1.638,3.953-1.638c0.915,0,1.818,0.228,2.622,0.655c-0.033,0.007-0.067,0.013-0.1,0.02l0.199,0.031 c-0.032-0.018-0.066-0.034-0.098-0.051c0.002,0,0.003-0.001,0.004-0.001c0.586-0.112,1.187-0.169,1.788-0.169 c1.275,0,2.512,0.249,3.676,0.742c1.124,0.476,2.135,1.156,3.002,2.024c0.868,0.867,1.548,1.877,2.024,3.002 c0.493,1.164,0.743,2.401,0.743,3.676c0,0.575-0.054,1.15-0.157,1.712c-0.018-0.031-0.033-0.064-0.052-0.095l0.034,0.201 c0.007-0.035,0.011-0.071,0.018-0.106C21.754,14.494,22,15.432,22,16.386z M16.817,14.138c0-1.331-0.613-2.743-3.033-3.282 l-2.209-0.49c-0.84-0.192-1.807-0.444-1.807-1.237c0-0.794,0.679-1.348,1.903-1.348c2.468,0,2.243,1.696,3.468,1.696 c0.645,0,1.209-0.379,1.209-1.031c0-1.521-2.435-2.663-4.5-2.663c-2.242,0-4.63,0.952-4.63,3.488c0,1.221,0.436,2.521,2.839,3.123 l2.984,0.745c0.903,0.223,1.129,0.731,1.129,1.189c0,0.762-0.758,1.507-2.129,1.507c-2.679,0-2.307-2.062-3.743-2.062 c-0.645,0-1.113,0.444-1.113,1.078c0,1.236,1.501,2.886,4.856,2.886C15.236,17.737,16.817,16.199,16.817,14.138z"
  }));
};

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/social-link/icons/snapchat.js


/**
 * WordPress dependencies
 */

var snapchat_SnapchatIcon = function SnapchatIcon() {
  return Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    version: "1.1"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
    d: "M12.065,2a5.526,5.526,0,0,1,3.132.892A5.854,5.854,0,0,1,17.326,5.4a5.821,5.821,0,0,1,.351,2.33q0,.612-.117,2.487a.809.809,0,0,0,.365.091,1.93,1.93,0,0,0,.664-.176,1.93,1.93,0,0,1,.664-.176,1.3,1.3,0,0,1,.729.234.7.7,0,0,1,.351.6.839.839,0,0,1-.41.7,2.732,2.732,0,0,1-.9.41,3.192,3.192,0,0,0-.9.378.728.728,0,0,0-.41.618,1.575,1.575,0,0,0,.156.56,6.9,6.9,0,0,0,1.334,1.953,5.6,5.6,0,0,0,1.881,1.315,5.875,5.875,0,0,0,1.042.3.42.42,0,0,1,.365.456q0,.911-2.852,1.341a1.379,1.379,0,0,0-.143.507,1.8,1.8,0,0,1-.182.605.451.451,0,0,1-.429.241,5.878,5.878,0,0,1-.807-.085,5.917,5.917,0,0,0-.833-.085,4.217,4.217,0,0,0-.807.065,2.42,2.42,0,0,0-.82.293,6.682,6.682,0,0,0-.755.5q-.351.267-.755.527a3.886,3.886,0,0,1-.989.436A4.471,4.471,0,0,1,11.831,22a4.307,4.307,0,0,1-1.256-.176,3.784,3.784,0,0,1-.976-.436q-.4-.26-.749-.527a6.682,6.682,0,0,0-.755-.5,2.422,2.422,0,0,0-.807-.293,4.432,4.432,0,0,0-.82-.065,5.089,5.089,0,0,0-.853.1,5,5,0,0,1-.762.1.474.474,0,0,1-.456-.241,1.819,1.819,0,0,1-.182-.618,1.411,1.411,0,0,0-.143-.521q-2.852-.429-2.852-1.341a.42.42,0,0,1,.365-.456,5.793,5.793,0,0,0,1.042-.3,5.524,5.524,0,0,0,1.881-1.315,6.789,6.789,0,0,0,1.334-1.953A1.575,1.575,0,0,0,6,12.9a.728.728,0,0,0-.41-.618,3.323,3.323,0,0,0-.9-.384,2.912,2.912,0,0,1-.9-.41.814.814,0,0,1-.41-.684.71.71,0,0,1,.338-.593,1.208,1.208,0,0,1,.716-.241,1.976,1.976,0,0,1,.625.169,2.008,2.008,0,0,0,.69.169.919.919,0,0,0,.416-.091q-.117-1.849-.117-2.474A5.861,5.861,0,0,1,6.385,5.4,5.516,5.516,0,0,1,8.625,2.819,7.075,7.075,0,0,1,12.062,2Z"
  }));
};

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/social-link/icons/soundcloud.js


/**
 * WordPress dependencies
 */

var soundcloud_SoundCloudIcon = function SoundCloudIcon() {
  return Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    version: "1.1"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
    d: "M8.9,16.1L9,14L8.9,9.5c0-0.1,0-0.1-0.1-0.1c0,0-0.1-0.1-0.1-0.1c-0.1,0-0.1,0-0.1,0.1c0,0-0.1,0.1-0.1,0.1L8.3,14l0.1,2.1 c0,0.1,0,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1C8.8,16.3,8.9,16.3,8.9,16.1z M11.4,15.9l0.1-1.8L11.4,9c0-0.1,0-0.2-0.1-0.2 c0,0-0.1,0-0.1,0s-0.1,0-0.1,0c-0.1,0-0.1,0.1-0.1,0.2l0,0.1l-0.1,5c0,0,0,0.7,0.1,2v0c0,0.1,0,0.1,0.1,0.1c0.1,0.1,0.1,0.1,0.2,0.1 c0.1,0,0.1,0,0.2-0.1c0.1,0,0.1-0.1,0.1-0.2L11.4,15.9z M2.4,12.9L2.5,14l-0.2,1.1c0,0.1,0,0.1-0.1,0.1c0,0-0.1,0-0.1-0.1L2.1,14 l0.1-1.1C2.2,12.9,2.3,12.9,2.4,12.9C2.3,12.9,2.4,12.9,2.4,12.9z M3.1,12.2L3.3,14l-0.2,1.8c0,0.1,0,0.1-0.1,0.1 c-0.1,0-0.1,0-0.1-0.1L2.8,14L3,12.2C3,12.2,3,12.2,3.1,12.2C3.1,12.2,3.1,12.2,3.1,12.2z M3.9,11.9L4.1,14l-0.2,2.1 c0,0.1,0,0.1-0.1,0.1c-0.1,0-0.1,0-0.1-0.1L3.5,14l0.2-2.1c0-0.1,0-0.1,0.1-0.1C3.9,11.8,3.9,11.8,3.9,11.9z M4.7,11.9L4.9,14 l-0.2,2.1c0,0.1-0.1,0.1-0.1,0.1c-0.1,0-0.1,0-0.1-0.1L4.3,14l0.2-2.2c0-0.1,0-0.1,0.1-0.1C4.7,11.7,4.7,11.8,4.7,11.9z M5.6,12 l0.2,2l-0.2,2.1c0,0.1-0.1,0.1-0.1,0.1c0,0-0.1,0-0.1,0c0,0,0-0.1,0-0.1L5.1,14l0.2-2c0,0,0-0.1,0-0.1s0.1,0,0.1,0 C5.5,11.9,5.5,11.9,5.6,12L5.6,12z M6.4,10.7L6.6,14l-0.2,2.1c0,0,0,0.1,0,0.1c0,0-0.1,0-0.1,0c-0.1,0-0.1-0.1-0.2-0.2L5.9,14 l0.2-3.3c0-0.1,0.1-0.2,0.2-0.2c0,0,0.1,0,0.1,0C6.4,10.7,6.4,10.7,6.4,10.7z M7.2,10l0.2,4.1l-0.2,2.1c0,0,0,0.1,0,0.1 c0,0-0.1,0-0.1,0c-0.1,0-0.2-0.1-0.2-0.2l-0.1-2.1L6.8,10c0-0.1,0.1-0.2,0.2-0.2c0,0,0.1,0,0.1,0S7.2,9.9,7.2,10z M8,9.6L8.2,14 L8,16.1c0,0.1-0.1,0.2-0.2,0.2c-0.1,0-0.2-0.1-0.2-0.2L7.5,14l0.1-4.4c0-0.1,0-0.1,0.1-0.1c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0.1 C8,9.6,8,9.6,8,9.6z M11.4,16.1L11.4,16.1L11.4,16.1z M9.7,9.6L9.8,14l-0.1,2.1c0,0.1,0,0.1-0.1,0.2s-0.1,0.1-0.2,0.1 c-0.1,0-0.1,0-0.1-0.1s-0.1-0.1-0.1-0.2L9.2,14l0.1-4.4c0-0.1,0-0.1,0.1-0.2s0.1-0.1,0.2-0.1c0.1,0,0.1,0,0.2,0.1S9.7,9.5,9.7,9.6 L9.7,9.6z M10.6,9.8l0.1,4.3l-0.1,2c0,0.1,0,0.1-0.1,0.2c0,0-0.1,0.1-0.2,0.1c-0.1,0-0.1,0-0.2-0.1c0,0-0.1-0.1-0.1-0.2L10,14 l0.1-4.3c0-0.1,0-0.1,0.1-0.2c0,0,0.1-0.1,0.2-0.1c0.1,0,0.1,0,0.2,0.1S10.6,9.7,10.6,9.8z M12.4,14l-0.1,2c0,0.1,0,0.1-0.1,0.2 c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0-0.1,0-0.2-0.1c-0.1-0.1-0.1-0.1-0.1-0.2l-0.1-1l-0.1-1l0.1-5.5v0c0-0.1,0-0.2,0.1-0.2 c0.1,0,0.1-0.1,0.2-0.1c0,0,0.1,0,0.1,0c0.1,0,0.1,0.1,0.1,0.2L12.4,14z M22.1,13.9c0,0.7-0.2,1.3-0.7,1.7c-0.5,0.5-1.1,0.7-1.7,0.7 h-6.8c-0.1,0-0.1,0-0.2-0.1c-0.1-0.1-0.1-0.1-0.1-0.2V8.2c0-0.1,0.1-0.2,0.2-0.3c0.5-0.2,1-0.3,1.6-0.3c1.1,0,2.1,0.4,2.9,1.1 c0.8,0.8,1.3,1.7,1.4,2.8c0.3-0.1,0.6-0.2,1-0.2c0.7,0,1.3,0.2,1.7,0.7C21.8,12.6,22.1,13.2,22.1,13.9L22.1,13.9z"
  }));
};

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/social-link/icons/spotify.js


/**
 * WordPress dependencies
 */

var spotify_SpotifyIcon = function SpotifyIcon() {
  return Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    version: "1.1"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
    d: "M12,2C6.477,2,2,6.477,2,12c0,5.523,4.477,10,10,10c5.523,0,10-4.477,10-10C22,6.477,17.523,2,12,2 M16.586,16.424 c-0.18,0.295-0.563,0.387-0.857,0.207c-2.348-1.435-5.304-1.76-8.785-0.964c-0.335,0.077-0.67-0.133-0.746-0.469 c-0.077-0.335,0.132-0.67,0.469-0.746c3.809-0.871,7.077-0.496,9.713,1.115C16.673,15.746,16.766,16.13,16.586,16.424 M17.81,13.7 c-0.226,0.367-0.706,0.482-1.072,0.257c-2.687-1.652-6.785-2.131-9.965-1.166C6.36,12.917,5.925,12.684,5.8,12.273 C5.675,11.86,5.908,11.425,6.32,11.3c3.632-1.102,8.147-0.568,11.234,1.328C17.92,12.854,18.035,13.335,17.81,13.7 M17.915,10.865 c-3.223-1.914-8.54-2.09-11.618-1.156C5.804,9.859,5.281,9.58,5.131,9.086C4.982,8.591,5.26,8.069,5.755,7.919 c3.532-1.072,9.404-0.865,13.115,1.338c0.445,0.264,0.59,0.838,0.327,1.282C18.933,10.983,18.359,11.129,17.915,10.865"
  }));
};

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/social-link/icons/tumblr.js


/**
 * WordPress dependencies
 */

var tumblr_TumblrIcon = function TumblrIcon() {
  return Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    version: "1.1"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
    d: "M17.04 21.28h-3.28c-2.84 0-4.94-1.37-4.94-5.02v-5.67H6.08V7.5c2.93-.73 4.11-3.3 4.3-5.48h3.01v4.93h3.47v3.65H13.4v4.93c0 1.47.73 2.01 1.92 2.01h1.73v3.75z"
  }));
};

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/social-link/icons/twitch.js


/**
 * WordPress dependencies
 */

var twitch_TwitchIcon = function TwitchIcon() {
  return Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    version: "1.1"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
    d: "M16.499,8.089h-1.636v4.91h1.636V8.089z M12,8.089h-1.637v4.91H12V8.089z M4.228,3.178L3,6.451v13.092h4.499V22h2.456 l2.454-2.456h3.681L21,14.636V3.178H4.228z M19.364,13.816l-2.864,2.865H12l-2.453,2.453V16.68H5.863V4.814h13.501V13.816z"
  }));
};

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/social-link/icons/twitter.js


/**
 * WordPress dependencies
 */

var twitter_TwitterIcon = function TwitterIcon() {
  return Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    version: "1.1"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
    d: "M22.23,5.924c-0.736,0.326-1.527,0.547-2.357,0.646c0.847-0.508,1.498-1.312,1.804-2.27 c-0.793,0.47-1.671,0.812-2.606,0.996C18.324,4.498,17.257,4,16.077,4c-2.266,0-4.103,1.837-4.103,4.103 c0,0.322,0.036,0.635,0.106,0.935C8.67,8.867,5.647,7.234,3.623,4.751C3.27,5.357,3.067,6.062,3.067,6.814 c0,1.424,0.724,2.679,1.825,3.415c-0.673-0.021-1.305-0.206-1.859-0.513c0,0.017,0,0.034,0,0.052c0,1.988,1.414,3.647,3.292,4.023 c-0.344,0.094-0.707,0.144-1.081,0.144c-0.264,0-0.521-0.026-0.772-0.074c0.522,1.63,2.038,2.816,3.833,2.85 c-1.404,1.1-3.174,1.756-5.096,1.756c-0.331,0-0.658-0.019-0.979-0.057c1.816,1.164,3.973,1.843,6.29,1.843 c7.547,0,11.675-6.252,11.675-11.675c0-0.178-0.004-0.355-0.012-0.531C20.985,7.47,21.68,6.747,22.23,5.924z"
  }));
};

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/social-link/icons/vimeo.js


/**
 * WordPress dependencies
 */

var vimeo_VimeoIcon = function VimeoIcon() {
  return Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    version: "1.1"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
    d: "M22.396,7.164c-0.093,2.026-1.507,4.799-4.245,8.32C15.322,19.161,12.928,21,10.97,21c-1.214,0-2.24-1.119-3.079-3.359 c-0.56-2.053-1.119-4.106-1.68-6.159C5.588,9.243,4.921,8.122,4.206,8.122c-0.156,0-0.701,0.328-1.634,0.98L1.594,7.841 c1.027-0.902,2.04-1.805,3.037-2.708C6.001,3.95,7.03,3.327,7.715,3.264c1.619-0.156,2.616,0.951,2.99,3.321 c0.404,2.557,0.685,4.147,0.841,4.769c0.467,2.121,0.981,3.181,1.542,3.181c0.435,0,1.09-0.688,1.963-2.065 c0.871-1.376,1.338-2.422,1.401-3.142c0.125-1.187-0.343-1.782-1.401-1.782c-0.498,0-1.012,0.115-1.541,0.341 c1.023-3.35,2.977-4.977,5.862-4.884C21.511,3.066,22.52,4.453,22.396,7.164z"
  }));
};

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/social-link/icons/vk.js


/**
 * WordPress dependencies
 */

var vk_VkIcon = function VkIcon() {
  return Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    version: "1.1"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
    d: "M22,7.1c0.2,0.4-0.4,1.5-1.6,3.1c-0.2,0.2-0.4,0.5-0.7,0.9c-0.5,0.7-0.9,1.1-0.9,1.4c-0.1,0.3-0.1,0.6,0.1,0.8 c0.1,0.1,0.4,0.4,0.8,0.9h0l0,0c1,0.9,1.6,1.7,2,2.3c0,0,0,0.1,0.1,0.1c0,0.1,0,0.1,0.1,0.3c0,0.1,0,0.2,0,0.4 c0,0.1-0.1,0.2-0.3,0.3c-0.1,0.1-0.4,0.1-0.6,0.1l-2.7,0c-0.2,0-0.4,0-0.6-0.1c-0.2-0.1-0.4-0.1-0.5-0.2l-0.2-0.1 c-0.2-0.1-0.5-0.4-0.7-0.7s-0.5-0.6-0.7-0.8c-0.2-0.2-0.4-0.4-0.6-0.6C14.8,15,14.6,15,14.4,15c0,0,0,0-0.1,0c0,0-0.1,0.1-0.2,0.2 c-0.1,0.1-0.2,0.2-0.2,0.3c-0.1,0.1-0.1,0.3-0.2,0.5c-0.1,0.2-0.1,0.5-0.1,0.8c0,0.1,0,0.2,0,0.3c0,0.1-0.1,0.2-0.1,0.2l0,0.1 c-0.1,0.1-0.3,0.2-0.6,0.2h-1.2c-0.5,0-1,0-1.5-0.2c-0.5-0.1-1-0.3-1.4-0.6s-0.7-0.5-1.1-0.7s-0.6-0.4-0.7-0.6l-0.3-0.3 c-0.1-0.1-0.2-0.2-0.3-0.3s-0.4-0.5-0.7-0.9s-0.7-1-1.1-1.6c-0.4-0.6-0.8-1.3-1.3-2.2C2.9,9.4,2.5,8.5,2.1,7.5C2,7.4,2,7.3,2,7.2 c0-0.1,0-0.1,0-0.2l0-0.1c0.1-0.1,0.3-0.2,0.6-0.2l2.9,0c0.1,0,0.2,0,0.2,0.1S5.9,6.9,5.9,7L6,7c0.1,0.1,0.2,0.2,0.3,0.3 C6.4,7.7,6.5,8,6.7,8.4C6.9,8.8,7,9,7.1,9.2l0.2,0.3c0.2,0.4,0.4,0.8,0.6,1.1c0.2,0.3,0.4,0.5,0.5,0.7s0.3,0.3,0.4,0.4 c0.1,0.1,0.3,0.1,0.4,0.1c0.1,0,0.2,0,0.3-0.1c0,0,0,0,0.1-0.1c0,0,0.1-0.1,0.1-0.2c0.1-0.1,0.1-0.3,0.1-0.5c0-0.2,0.1-0.5,0.1-0.8 c0-0.4,0-0.8,0-1.3c0-0.3,0-0.5-0.1-0.8c0-0.2-0.1-0.4-0.1-0.5L9.6,7.6C9.4,7.3,9.1,7.2,8.7,7.1C8.6,7.1,8.6,7,8.7,6.9 C8.9,6.7,9,6.6,9.1,6.5c0.4-0.2,1.2-0.3,2.5-0.3c0.6,0,1,0.1,1.4,0.1c0.1,0,0.3,0.1,0.3,0.1c0.1,0.1,0.2,0.1,0.2,0.3 c0,0.1,0.1,0.2,0.1,0.3s0,0.3,0,0.5c0,0.2,0,0.4,0,0.6c0,0.2,0,0.4,0,0.7c0,0.3,0,0.6,0,0.9c0,0.1,0,0.2,0,0.4c0,0.2,0,0.4,0,0.5 c0,0.1,0,0.3,0,0.4s0.1,0.3,0.1,0.4c0.1,0.1,0.1,0.2,0.2,0.3c0.1,0,0.1,0,0.2,0c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.2,0.4-0.4 s0.3-0.4,0.5-0.7c0.2-0.3,0.5-0.7,0.7-1.1c0.4-0.7,0.8-1.5,1.1-2.3c0-0.1,0.1-0.1,0.1-0.2c0-0.1,0.1-0.1,0.1-0.1l0,0l0.1,0 c0,0,0,0,0.1,0s0.2,0,0.2,0l3,0c0.3,0,0.5,0,0.7,0S21.9,7,21.9,7L22,7.1z"
  }));
};

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/social-link/icons/yelp.js


/**
 * WordPress dependencies
 */

var yelp_YelpIcon = function YelpIcon() {
  return Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    version: "1.1"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
    d: "M12.271,16.718v1.417q-.011,3.257-.067,3.4a.707.707,0,0,1-.569.446,4.637,4.637,0,0,1-2.024-.424A4.609,4.609,0,0,1,7.8,20.565a.844.844,0,0,1-.19-.4.692.692,0,0,1,.044-.29,3.181,3.181,0,0,1,.379-.524q.335-.412,2.019-2.409.011,0,.669-.781a.757.757,0,0,1,.44-.274.965.965,0,0,1,.552.039.945.945,0,0,1,.418.324.732.732,0,0,1,.139.468Zm-1.662-2.8a.783.783,0,0,1-.58.781l-1.339.435q-3.067.981-3.257.981a.711.711,0,0,1-.6-.4,2.636,2.636,0,0,1-.19-.836,9.134,9.134,0,0,1,.011-1.857,3.559,3.559,0,0,1,.335-1.389.659.659,0,0,1,.625-.357,22.629,22.629,0,0,1,2.253.859q.781.324,1.283.524l.937.379a.771.771,0,0,1,.4.34A.982.982,0,0,1,10.609,13.917Zm9.213,3.313a4.467,4.467,0,0,1-1.021,1.8,4.559,4.559,0,0,1-1.512,1.417.671.671,0,0,1-.7-.078q-.156-.112-2.052-3.2l-.524-.859a.761.761,0,0,1-.128-.513.957.957,0,0,1,.217-.513.774.774,0,0,1,.926-.29q.011.011,1.327.446,2.264.736,2.7.887a2.082,2.082,0,0,1,.524.229.673.673,0,0,1,.245.68Zm-7.5-7.049q.056,1.137-.6,1.361-.647.19-1.272-.792L6.237,4.08a.7.7,0,0,1,.212-.691,5.788,5.788,0,0,1,2.314-1,5.928,5.928,0,0,1,2.5-.352.681.681,0,0,1,.547.5q.034.2.245,3.407T12.327,10.181Zm7.384,1.2a.679.679,0,0,1-.29.658q-.167.112-3.67.959-.747.167-1.015.257l.011-.022a.769.769,0,0,1-.513-.044.914.914,0,0,1-.413-.357.786.786,0,0,1,0-.971q.011-.011.836-1.137,1.394-1.908,1.673-2.275a2.423,2.423,0,0,1,.379-.435A.7.7,0,0,1,17.435,8a4.482,4.482,0,0,1,1.372,1.489,4.81,4.81,0,0,1,.9,1.868v.034Z"
  }));
};

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/social-link/icons/youtube.js


/**
 * WordPress dependencies
 */

var youtube_YouTubeIcon = function YouTubeIcon() {
  return Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    version: "1.1"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
    d: "M21.8,8.001c0,0-0.195-1.378-0.795-1.985c-0.76-0.797-1.613-0.801-2.004-0.847c-2.799-0.202-6.997-0.202-6.997-0.202 h-0.009c0,0-4.198,0-6.997,0.202C4.608,5.216,3.756,5.22,2.995,6.016C2.395,6.623,2.2,8.001,2.2,8.001S2,9.62,2,11.238v1.517 c0,1.618,0.2,3.237,0.2,3.237s0.195,1.378,0.795,1.985c0.761,0.797,1.76,0.771,2.205,0.855c1.6,0.153,6.8,0.201,6.8,0.201 s4.203-0.006,7.001-0.209c0.391-0.047,1.243-0.051,2.004-0.847c0.6-0.607,0.795-1.985,0.795-1.985s0.2-1.618,0.2-3.237v-1.517 C22,9.62,21.8,8.001,21.8,8.001z M9.935,14.594l-0.001-5.62l5.404,2.82L9.935,14.594z"
  }));
};

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/social-link/variations.js
/**
 * Internal dependencies
 */

var social_link_variations_variations = [{
  isDefault: true,
  name: 'wordpress',
  attributes: {
    service: 'wordpress'
  },
  title: 'WordPress',
  icon: wordpress_WordPressIcon
}, {
  name: 'fivehundredpx',
  attributes: {
    service: 'fivehundredpx'
  },
  title: '500px',
  icon: fivehundredpx_FivehundredpxIcon
}, {
  name: 'amazon',
  attributes: {
    service: 'amazon'
  },
  title: 'Amazon',
  icon: amazon_AmazonIcon
}, {
  name: 'bandcamp',
  attributes: {
    service: 'bandcamp'
  },
  title: 'Bandcamp',
  icon: bandcamp_BandcampIcon
}, {
  name: 'behance',
  attributes: {
    service: 'behance'
  },
  title: 'Behance',
  icon: behance_BehanceIcon
}, {
  name: 'chain',
  attributes: {
    service: 'chain'
  },
  title: 'Link',
  icon: chain_ChainIcon
}, {
  name: 'codepen',
  attributes: {
    service: 'codepen'
  },
  title: 'CodePen',
  icon: codepen_CodepenIcon
}, {
  name: 'deviantart',
  attributes: {
    service: 'deviantart'
  },
  title: 'DeviantArt',
  icon: deviantart_DeviantArtIcon
}, {
  name: 'dribbble',
  attributes: {
    service: 'dribbble'
  },
  title: 'Dribbble',
  icon: dribbble_DribbbleIcon
}, {
  name: 'dropbox',
  attributes: {
    service: 'dropbox'
  },
  title: 'Dropbox',
  icon: dropbox_DropboxIcon
}, {
  name: 'etsy',
  attributes: {
    service: 'etsy'
  },
  title: 'Etsy',
  icon: etsy_EtsyIcon
}, {
  name: 'facebook',
  attributes: {
    service: 'facebook'
  },
  title: 'Facebook',
  icon: facebook_FacebookIcon
}, {
  name: 'feed',
  attributes: {
    service: 'feed'
  },
  title: 'RSS Feed',
  icon: feed_FeedIcon
}, {
  name: 'flickr',
  attributes: {
    service: 'flickr'
  },
  title: 'Flickr',
  icon: flickr_FlickrIcon
}, {
  name: 'foursquare',
  attributes: {
    service: 'foursquare'
  },
  title: 'Foursquare',
  icon: foursquare_FoursquareIcon
}, {
  name: 'goodreads',
  attributes: {
    service: 'goodreads'
  },
  title: 'Goodreads',
  icon: goodreads_GoodreadsIcon
}, {
  name: 'google',
  attributes: {
    service: 'google'
  },
  title: 'Google',
  icon: google_GoogleIcon
}, {
  name: 'github',
  attributes: {
    service: 'github'
  },
  title: 'GitHub',
  icon: github_GitHubIcon
}, {
  name: 'instagram',
  attributes: {
    service: 'instagram'
  },
  title: 'Instagram',
  icon: instagram_InstagramIcon
}, {
  name: 'lastfm',
  attributes: {
    service: 'lastfm'
  },
  title: 'Last.fm',
  icon: lastfm_LastfmIcon
}, {
  name: 'linkedin',
  attributes: {
    service: 'linkedin'
  },
  title: 'LinkedIn',
  icon: linkedin_LinkedInIcon
}, {
  name: 'mail',
  attributes: {
    service: 'mail'
  },
  title: 'Mail',
  icon: mail_MailIcon
}, {
  name: 'mastodon',
  attributes: {
    service: 'mastodon'
  },
  title: 'Mastodon',
  icon: mastodon_MastodonIcon
}, {
  name: 'meetup',
  attributes: {
    service: 'meetup'
  },
  title: 'Meetup',
  icon: meetup_MeetupIcon
}, {
  name: 'medium',
  attributes: {
    service: 'medium'
  },
  title: 'Medium',
  icon: medium_MediumIcon
}, {
  name: 'pinterest',
  attributes: {
    service: 'pinterest'
  },
  title: 'Pinterest',
  icon: pinterest_PinterestIcon
}, {
  name: 'pocket',
  attributes: {
    service: 'pocket'
  },
  title: 'Pocket',
  icon: pocket_PocketIcon
}, {
  name: 'reddit',
  attributes: {
    service: 'reddit'
  },
  title: 'Reddit',
  icon: reddit_RedditIcon
}, {
  name: 'skype',
  attributes: {
    service: 'skype'
  },
  title: 'Skype',
  icon: skype_SkypeIcon
}, {
  name: 'snapchat',
  attributes: {
    service: 'snapchat'
  },
  title: 'Snapchat',
  icon: snapchat_SnapchatIcon
}, {
  name: 'soundcloud',
  attributes: {
    service: 'soundcloud'
  },
  title: 'SoundCloud',
  icon: soundcloud_SoundCloudIcon
}, {
  name: 'spotify',
  attributes: {
    service: 'spotify'
  },
  title: 'Spotify',
  icon: spotify_SpotifyIcon
}, {
  name: 'tumblr',
  attributes: {
    service: 'tumblr'
  },
  title: 'Tumblr',
  icon: tumblr_TumblrIcon
}, {
  name: 'twitch',
  attributes: {
    service: 'twitch'
  },
  title: 'Twitch',
  icon: twitch_TwitchIcon
}, {
  name: 'twitter',
  attributes: {
    service: 'twitter'
  },
  title: 'Twitter',
  icon: twitter_TwitterIcon
}, {
  name: 'vimeo',
  attributes: {
    service: 'vimeo'
  },
  title: 'Vimeo',
  icon: vimeo_VimeoIcon
}, {
  name: 'vk',
  attributes: {
    service: 'vk'
  },
  title: 'VK',
  icon: vk_VkIcon
}, {
  name: 'yelp',
  attributes: {
    service: 'yelp'
  },
  title: 'Yelp',
  icon: yelp_YelpIcon
}, {
  name: 'youtube',
  attributes: {
    service: 'youtube'
  },
  title: 'YouTube',
  icon: youtube_YouTubeIcon
}];
/* harmony default export */ var social_link_variations = (social_link_variations_variations);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/social-link/social-list.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



/**
 * Retrieves the social service's icon component.
 *
 * @param {string} name key for a social service (lowercase slug)
 *
 * @return {WPComponent} Icon component for social service.
 */

var social_list_getIconBySite = function getIconBySite(name) {
  var variation = Object(external_this_lodash_["find"])(social_link_variations, {
    name: name
  });
  return variation ? variation.icon : chain_ChainIcon;
};
/**
 * Retrieves the display name for the social service.
 *
 * @param {string} name key for a social service (lowercase slug)
 *
 * @return {string} Display name for social service
 */

var social_list_getNameBySite = function getNameBySite(name) {
  var variation = Object(external_this_lodash_["find"])(social_link_variations, {
    name: name
  });
  return variation ? variation.title : Object(external_this_wp_i18n_["__"])('Social Icon');
};

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/social-link/edit.js



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



var edit_SocialLinkEdit = function SocialLinkEdit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes,
      isSelected = _ref.isSelected;
  var url = attributes.url,
      service = attributes.service,
      label = attributes.label;

  var _useState = Object(external_this_wp_element_["useState"])(false),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      showURLPopover = _useState2[0],
      setPopover = _useState2[1];

  var classes = classnames_default()('wp-social-link', 'wp-social-link-' + service, {
    'wp-social-link__is-incomplete': !url
  });
  var IconComponent = social_list_getIconBySite(service);
  var socialLinkName = social_list_getNameBySite(service);
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["InspectorControls"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
    title: Object(external_this_wp_i18n_["sprintf"])(
    /* translators: %s: name of the social service. */
    Object(external_this_wp_i18n_["__"])('%s label'), socialLinkName),
    initialOpen: false
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelRow"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["TextControl"], {
    label: Object(external_this_wp_i18n_["__"])('Link label'),
    help: Object(external_this_wp_i18n_["__"])('Briefly describe the link to help screen reader users.'),
    value: label,
    onChange: function onChange(value) {
      return setAttributes({
        label: value
      });
    }
  })))), Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["__experimentalBlock"].li, {
    className: classes
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
    onClick: function onClick() {
      return setPopover(true);
    }
  }, Object(external_this_wp_element_["createElement"])(IconComponent, null), isSelected && showURLPopover && Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["URLPopover"], {
    onClose: function onClose() {
      return setPopover(false);
    }
  }, Object(external_this_wp_element_["createElement"])("form", {
    className: "block-editor-url-popover__link-editor",
    onSubmit: function onSubmit(event) {
      event.preventDefault();
      setPopover(false);
    }
  }, Object(external_this_wp_element_["createElement"])("div", {
    className: "block-editor-url-input"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["URLInput"], {
    value: url,
    onChange: function onChange(nextURL) {
      return setAttributes({
        url: nextURL
      });
    },
    placeholder: Object(external_this_wp_i18n_["__"])('Enter address'),
    disableSuggestions: true
  })), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
    icon: keyboard_return["a" /* default */],
    label: Object(external_this_wp_i18n_["__"])('Apply'),
    type: "submit"
  }))))));
};

/* harmony default export */ var social_link_edit = (edit_SocialLinkEdit);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/social-link/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


var social_link_metadata = {
  name: "core/social-link",
  category: "widgets",
  parent: ["core/social-links"],
  attributes: {
    url: {
      type: "string"
    },
    service: {
      type: "string"
    },
    label: {
      type: "string"
    }
  },
  supports: {
    reusable: false,
    html: false,
    lightBlockWrapper: true
  }
};

var social_link_name = social_link_metadata.name;

var social_link_settings = {
  title: Object(external_this_wp_i18n_["__"])('Social Icon'),
  icon: library_share,
  edit: social_link_edit,
  description: Object(external_this_wp_i18n_["__"])('Display an icon linking to a social media profile or website.'),
  variations: social_link_variations
};

// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/index.js



/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */















































 // Full Site Editing Blocks
















/**
 * Function to register an individual block.
 *
 * @param {Object} block The block to be registered.
 *
 */

var build_module_registerBlock = function registerBlock(block) {
  if (!block) {
    return;
  }

  var metadata = block.metadata,
      settings = block.settings,
      name = block.name;

  if (metadata) {
    Object(external_this_wp_blocks_["unstable__bootstrapServerSideBlockDefinitions"])(Object(defineProperty["a" /* default */])({}, name, metadata));
  }

  Object(external_this_wp_blocks_["registerBlockType"])(name, settings);
};
/**
 * Function to register core blocks provided by the block editor.
 *
 * @example
 * ```js
 * import { registerCoreBlocks } from '@wordpress/block-library';
 *
 * registerCoreBlocks();
 * ```
 */


var build_module_registerCoreBlocks = function registerCoreBlocks() {
  [// Common blocks are grouped at the top to prioritize their display
  // in various contexts — like the inserter and auto-complete components.
  build_module_paragraph_namespaceObject, build_module_image_namespaceObject, build_module_heading_namespaceObject, build_module_gallery_namespaceObject, build_module_list_namespaceObject, build_module_quote_namespaceObject, // Register all remaining core blocks.
  build_module_shortcode_namespaceObject, archives_namespaceObject, build_module_audio_namespaceObject, build_module_button_namespaceObject, buttons_namespaceObject, build_module_calendar_namespaceObject, categories_namespaceObject, code_namespaceObject, build_module_columns_namespaceObject, build_module_column_namespaceObject, build_module_cover_namespaceObject, embed_namespaceObject].concat(Object(toConsumableArray["a" /* default */])(embed_common), Object(toConsumableArray["a" /* default */])(embed_others), [build_module_file_namespaceObject, build_module_group_namespaceObject, window.wp && window.wp.oldEditor ? build_module_classic_namespaceObject : null, // Only add the classic block in WP Context
  build_module_html_namespaceObject, media_text_namespaceObject, latest_comments_namespaceObject, latest_posts_namespaceObject, missing_namespaceObject, build_module_more_namespaceObject, nextpage_namespaceObject, build_module_preformatted_namespaceObject, build_module_pullquote_namespaceObject, build_module_rss_namespaceObject, search_namespaceObject, build_module_separator_namespaceObject, block_namespaceObject, social_links_namespaceObject, social_link_namespaceObject, spacer_namespaceObject, subhead_namespaceObject, build_module_table_namespaceObject, tag_cloud_namespaceObject, text_columns_namespaceObject, build_module_verse_namespaceObject, build_module_video_namespaceObject]).forEach(build_module_registerBlock);
  Object(external_this_wp_blocks_["setDefaultBlockName"])(paragraph_name);

  if (window.wp && window.wp.oldEditor) {
    Object(external_this_wp_blocks_["setFreeformContentHandlerName"])(classic_name);
  }

  Object(external_this_wp_blocks_["setUnregisteredTypeHandlerName"])(missing_name);
  Object(external_this_wp_blocks_["setGroupingBlockName"])(group_name);
};
/**
 * Function to register experimental core blocks depending on editor settings.
 *
 * @param {Object} settings Editor settings.
 *
 * @example
 * ```js
 * import { __experimentalRegisterExperimentalCoreBlocks } from '@wordpress/block-library';
 *
 * __experimentalRegisterExperimentalCoreBlocks( settings );
 * ```
 */

var __experimentalRegisterExperimentalCoreBlocks =  false ? undefined : undefined;


/***/ }),

/***/ 44:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blob"]; }());

/***/ }),

/***/ 45:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["apiFetch"]; }());

/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Memize options object.
 *
 * @typedef MemizeOptions
 *
 * @property {number} [maxSize] Maximum size of the cache.
 */

/**
 * Internal cache entry.
 *
 * @typedef MemizeCacheNode
 *
 * @property {?MemizeCacheNode|undefined} [prev] Previous node.
 * @property {?MemizeCacheNode|undefined} [next] Next node.
 * @property {Array<*>}                   args   Function arguments for cache
 *                                               entry.
 * @property {*}                          val    Function result.
 */

/**
 * Properties of the enhanced function for controlling cache.
 *
 * @typedef MemizeMemoizedFunction
 *
 * @property {()=>void} clear Clear the cache.
 */

/**
 * Accepts a function to be memoized, and returns a new memoized function, with
 * optional options.
 *
 * @template {Function} F
 *
 * @param {F}             fn        Function to memoize.
 * @param {MemizeOptions} [options] Options object.
 *
 * @return {F & MemizeMemoizedFunction} Memoized function.
 */
function memize( fn, options ) {
	var size = 0;

	/** @type {?MemizeCacheNode|undefined} */
	var head;

	/** @type {?MemizeCacheNode|undefined} */
	var tail;

	options = options || {};

	function memoized( /* ...args */ ) {
		var node = head,
			len = arguments.length,
			args, i;

		searchCache: while ( node ) {
			// Perform a shallow equality test to confirm that whether the node
			// under test is a candidate for the arguments passed. Two arrays
			// are shallowly equal if their length matches and each entry is
			// strictly equal between the two sets. Avoid abstracting to a
			// function which could incur an arguments leaking deoptimization.

			// Check whether node arguments match arguments length
			if ( node.args.length !== arguments.length ) {
				node = node.next;
				continue;
			}

			// Check whether node arguments match arguments values
			for ( i = 0; i < len; i++ ) {
				if ( node.args[ i ] !== arguments[ i ] ) {
					node = node.next;
					continue searchCache;
				}
			}

			// At this point we can assume we've found a match

			// Surface matched node to head if not already
			if ( node !== head ) {
				// As tail, shift to previous. Must only shift if not also
				// head, since if both head and tail, there is no previous.
				if ( node === tail ) {
					tail = node.prev;
				}

				// Adjust siblings to point to each other. If node was tail,
				// this also handles new tail's empty `next` assignment.
				/** @type {MemizeCacheNode} */ ( node.prev ).next = node.next;
				if ( node.next ) {
					node.next.prev = node.prev;
				}

				node.next = head;
				node.prev = null;
				/** @type {MemizeCacheNode} */ ( head ).prev = node;
				head = node;
			}

			// Return immediately
			return node.val;
		}

		// No cached value found. Continue to insertion phase:

		// Create a copy of arguments (avoid leaking deoptimization)
		args = new Array( len );
		for ( i = 0; i < len; i++ ) {
			args[ i ] = arguments[ i ];
		}

		node = {
			args: args,

			// Generate the result from original function
			val: fn.apply( null, args ),
		};

		// Don't need to check whether node is already head, since it would
		// have been returned above already if it was

		// Shift existing head down list
		if ( head ) {
			head.prev = node;
			node.next = head;
		} else {
			// If no head, follows that there's no tail (at initial or reset)
			tail = node;
		}

		// Trim tail if we're reached max size and are pending cache insertion
		if ( size === /** @type {MemizeOptions} */ ( options ).maxSize ) {
			tail = /** @type {MemizeCacheNode} */ ( tail ).prev;
			/** @type {MemizeCacheNode} */ ( tail ).next = null;
		} else {
			size++;
		}

		head = node;

		return node.val;
	}

	memoized.clear = function() {
		head = null;
		tail = null;
		size = 0;
	};

	if ( false ) {}

	// Ignore reason: There's not a clear solution to create an intersection of
	// the function with additional properties, where the goal is to retain the
	// function signature of the incoming argument and add control properties
	// on the return value.

	// @ts-ignore
	return memoized;
}

module.exports = memize;


/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;// TinyColor v1.4.1
// https://github.com/bgrins/TinyColor
// Brian Grinstead, MIT License

(function(Math) {

var trimLeft = /^\s+/,
    trimRight = /\s+$/,
    tinyCounter = 0,
    mathRound = Math.round,
    mathMin = Math.min,
    mathMax = Math.max,
    mathRandom = Math.random;

function tinycolor (color, opts) {

    color = (color) ? color : '';
    opts = opts || { };

    // If input is already a tinycolor, return itself
    if (color instanceof tinycolor) {
       return color;
    }
    // If we are called as a function, call using new instead
    if (!(this instanceof tinycolor)) {
        return new tinycolor(color, opts);
    }

    var rgb = inputToRGB(color);
    this._originalInput = color,
    this._r = rgb.r,
    this._g = rgb.g,
    this._b = rgb.b,
    this._a = rgb.a,
    this._roundA = mathRound(100*this._a) / 100,
    this._format = opts.format || rgb.format;
    this._gradientType = opts.gradientType;

    // Don't let the range of [0,255] come back in [0,1].
    // Potentially lose a little bit of precision here, but will fix issues where
    // .5 gets interpreted as half of the total, instead of half of 1
    // If it was supposed to be 128, this was already taken care of by `inputToRgb`
    if (this._r < 1) { this._r = mathRound(this._r); }
    if (this._g < 1) { this._g = mathRound(this._g); }
    if (this._b < 1) { this._b = mathRound(this._b); }

    this._ok = rgb.ok;
    this._tc_id = tinyCounter++;
}

tinycolor.prototype = {
    isDark: function() {
        return this.getBrightness() < 128;
    },
    isLight: function() {
        return !this.isDark();
    },
    isValid: function() {
        return this._ok;
    },
    getOriginalInput: function() {
      return this._originalInput;
    },
    getFormat: function() {
        return this._format;
    },
    getAlpha: function() {
        return this._a;
    },
    getBrightness: function() {
        //http://www.w3.org/TR/AERT#color-contrast
        var rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    },
    getLuminance: function() {
        //http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
        var rgb = this.toRgb();
        var RsRGB, GsRGB, BsRGB, R, G, B;
        RsRGB = rgb.r/255;
        GsRGB = rgb.g/255;
        BsRGB = rgb.b/255;

        if (RsRGB <= 0.03928) {R = RsRGB / 12.92;} else {R = Math.pow(((RsRGB + 0.055) / 1.055), 2.4);}
        if (GsRGB <= 0.03928) {G = GsRGB / 12.92;} else {G = Math.pow(((GsRGB + 0.055) / 1.055), 2.4);}
        if (BsRGB <= 0.03928) {B = BsRGB / 12.92;} else {B = Math.pow(((BsRGB + 0.055) / 1.055), 2.4);}
        return (0.2126 * R) + (0.7152 * G) + (0.0722 * B);
    },
    setAlpha: function(value) {
        this._a = boundAlpha(value);
        this._roundA = mathRound(100*this._a) / 100;
        return this;
    },
    toHsv: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this._a };
    },
    toHsvString: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);
        return (this._a == 1) ?
          "hsv("  + h + ", " + s + "%, " + v + "%)" :
          "hsva(" + h + ", " + s + "%, " + v + "%, "+ this._roundA + ")";
    },
    toHsl: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this._a };
    },
    toHslString: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);
        return (this._a == 1) ?
          "hsl("  + h + ", " + s + "%, " + l + "%)" :
          "hsla(" + h + ", " + s + "%, " + l + "%, "+ this._roundA + ")";
    },
    toHex: function(allow3Char) {
        return rgbToHex(this._r, this._g, this._b, allow3Char);
    },
    toHexString: function(allow3Char) {
        return '#' + this.toHex(allow3Char);
    },
    toHex8: function(allow4Char) {
        return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
    },
    toHex8String: function(allow4Char) {
        return '#' + this.toHex8(allow4Char);
    },
    toRgb: function() {
        return { r: mathRound(this._r), g: mathRound(this._g), b: mathRound(this._b), a: this._a };
    },
    toRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" :
          "rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
    },
    toPercentageRgb: function() {
        return { r: mathRound(bound01(this._r, 255) * 100) + "%", g: mathRound(bound01(this._g, 255) * 100) + "%", b: mathRound(bound01(this._b, 255) * 100) + "%", a: this._a };
    },
    toPercentageRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" :
          "rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
    },
    toName: function() {
        if (this._a === 0) {
            return "transparent";
        }

        if (this._a < 1) {
            return false;
        }

        return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
    },
    toFilter: function(secondColor) {
        var hex8String = '#' + rgbaToArgbHex(this._r, this._g, this._b, this._a);
        var secondHex8String = hex8String;
        var gradientType = this._gradientType ? "GradientType = 1, " : "";

        if (secondColor) {
            var s = tinycolor(secondColor);
            secondHex8String = '#' + rgbaToArgbHex(s._r, s._g, s._b, s._a);
        }

        return "progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr="+hex8String+",endColorstr="+secondHex8String+")";
    },
    toString: function(format) {
        var formatSet = !!format;
        format = format || this._format;

        var formattedString = false;
        var hasAlpha = this._a < 1 && this._a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");

        if (needsAlphaFormat) {
            // Special case for "transparent", all other non-alpha formats
            // will return rgba when there is transparency.
            if (format === "name" && this._a === 0) {
                return this.toName();
            }
            return this.toRgbString();
        }
        if (format === "rgb") {
            formattedString = this.toRgbString();
        }
        if (format === "prgb") {
            formattedString = this.toPercentageRgbString();
        }
        if (format === "hex" || format === "hex6") {
            formattedString = this.toHexString();
        }
        if (format === "hex3") {
            formattedString = this.toHexString(true);
        }
        if (format === "hex4") {
            formattedString = this.toHex8String(true);
        }
        if (format === "hex8") {
            formattedString = this.toHex8String();
        }
        if (format === "name") {
            formattedString = this.toName();
        }
        if (format === "hsl") {
            formattedString = this.toHslString();
        }
        if (format === "hsv") {
            formattedString = this.toHsvString();
        }

        return formattedString || this.toHexString();
    },
    clone: function() {
        return tinycolor(this.toString());
    },

    _applyModification: function(fn, args) {
        var color = fn.apply(null, [this].concat([].slice.call(args)));
        this._r = color._r;
        this._g = color._g;
        this._b = color._b;
        this.setAlpha(color._a);
        return this;
    },
    lighten: function() {
        return this._applyModification(lighten, arguments);
    },
    brighten: function() {
        return this._applyModification(brighten, arguments);
    },
    darken: function() {
        return this._applyModification(darken, arguments);
    },
    desaturate: function() {
        return this._applyModification(desaturate, arguments);
    },
    saturate: function() {
        return this._applyModification(saturate, arguments);
    },
    greyscale: function() {
        return this._applyModification(greyscale, arguments);
    },
    spin: function() {
        return this._applyModification(spin, arguments);
    },

    _applyCombination: function(fn, args) {
        return fn.apply(null, [this].concat([].slice.call(args)));
    },
    analogous: function() {
        return this._applyCombination(analogous, arguments);
    },
    complement: function() {
        return this._applyCombination(complement, arguments);
    },
    monochromatic: function() {
        return this._applyCombination(monochromatic, arguments);
    },
    splitcomplement: function() {
        return this._applyCombination(splitcomplement, arguments);
    },
    triad: function() {
        return this._applyCombination(triad, arguments);
    },
    tetrad: function() {
        return this._applyCombination(tetrad, arguments);
    }
};

// If input is an object, force 1 into "1.0" to handle ratios properly
// String input requires "1.0" as input, so 1 will be treated as 1
tinycolor.fromRatio = function(color, opts) {
    if (typeof color == "object") {
        var newColor = {};
        for (var i in color) {
            if (color.hasOwnProperty(i)) {
                if (i === "a") {
                    newColor[i] = color[i];
                }
                else {
                    newColor[i] = convertToPercentage(color[i]);
                }
            }
        }
        color = newColor;
    }

    return tinycolor(color, opts);
};

// Given a string or object, convert that input to RGB
// Possible string inputs:
//
//     "red"
//     "#f00" or "f00"
//     "#ff0000" or "ff0000"
//     "#ff000000" or "ff000000"
//     "rgb 255 0 0" or "rgb (255, 0, 0)"
//     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
//     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
//     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
//     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
//     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
//     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
//
function inputToRGB(color) {

    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;

    if (typeof color == "string") {
        color = stringInputToObject(color);
    }

    if (typeof color == "object") {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = rgbToRgb(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s = convertToPercentage(color.s);
            v = convertToPercentage(color.v);
            rgb = hsvToRgb(color.h, s, v);
            ok = true;
            format = "hsv";
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s = convertToPercentage(color.s);
            l = convertToPercentage(color.l);
            rgb = hslToRgb(color.h, s, l);
            ok = true;
            format = "hsl";
        }

        if (color.hasOwnProperty("a")) {
            a = color.a;
        }
    }

    a = boundAlpha(a);

    return {
        ok: ok,
        format: color.format || format,
        r: mathMin(255, mathMax(rgb.r, 0)),
        g: mathMin(255, mathMax(rgb.g, 0)),
        b: mathMin(255, mathMax(rgb.b, 0)),
        a: a
    };
}


// Conversion Functions
// --------------------

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>

// `rgbToRgb`
// Handle bounds / percentage checking to conform to CSS color spec
// <http://www.w3.org/TR/css3-color/>
// *Assumes:* r, g, b in [0, 255] or [0, 1]
// *Returns:* { r, g, b } in [0, 255]
function rgbToRgb(r, g, b){
    return {
        r: bound01(r, 255) * 255,
        g: bound01(g, 255) * 255,
        b: bound01(b, 255) * 255
    };
}

// `rgbToHsl`
// Converts an RGB color value to HSL.
// *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
// *Returns:* { h, s, l } in [0,1]
function rgbToHsl(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min) {
        h = s = 0; // achromatic
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }

        h /= 6;
    }

    return { h: h, s: s, l: l };
}

// `hslToRgb`
// Converts an HSL color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
function hslToRgb(h, s, l) {
    var r, g, b;

    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);

    function hue2rgb(p, q, t) {
        if(t < 0) t += 1;
        if(t > 1) t -= 1;
        if(t < 1/6) return p + (q - p) * 6 * t;
        if(t < 1/2) return q;
        if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
    }

    if(s === 0) {
        r = g = b = l; // achromatic
    }
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHsv`
// Converts an RGB color value to HSV
// *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
// *Returns:* { h, s, v } in [0,1]
function rgbToHsv(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, v = max;

    var d = max - min;
    s = max === 0 ? 0 : d / max;

    if(max == min) {
        h = 0; // achromatic
    }
    else {
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return { h: h, s: s, v: v };
}

// `hsvToRgb`
// Converts an HSV color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
 function hsvToRgb(h, s, v) {

    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);

    var i = Math.floor(h),
        f = h - i,
        p = v * (1 - s),
        q = v * (1 - f * s),
        t = v * (1 - (1 - f) * s),
        mod = i % 6,
        r = [v, q, p, p, t, v][mod],
        g = [t, v, v, q, p, p][mod],
        b = [p, p, t, v, v, q][mod];

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHex`
// Converts an RGB color to hex
// Assumes r, g, and b are contained in the set [0, 255]
// Returns a 3 or 6 character hex
function rgbToHex(r, g, b, allow3Char) {

    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];

    // Return a 3 character hex if possible
    if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }

    return hex.join("");
}

// `rgbaToHex`
// Converts an RGBA color plus alpha transparency to hex
// Assumes r, g, b are contained in the set [0, 255] and
// a in [0, 1]. Returns a 4 or 8 character rgba hex
function rgbaToHex(r, g, b, a, allow4Char) {

    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16)),
        pad2(convertDecimalToHex(a))
    ];

    // Return a 4 character hex if possible
    if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }

    return hex.join("");
}

// `rgbaToArgbHex`
// Converts an RGBA color to an ARGB Hex8 string
// Rarely used, but required for "toFilter()"
function rgbaToArgbHex(r, g, b, a) {

    var hex = [
        pad2(convertDecimalToHex(a)),
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];

    return hex.join("");
}

// `equals`
// Can be called with any tinycolor input
tinycolor.equals = function (color1, color2) {
    if (!color1 || !color2) { return false; }
    return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
};

tinycolor.random = function() {
    return tinycolor.fromRatio({
        r: mathRandom(),
        g: mathRandom(),
        b: mathRandom()
    });
};


// Modification Functions
// ----------------------
// Thanks to less.js for some of the basics here
// <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>

function desaturate(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}

function saturate(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}

function greyscale(color) {
    return tinycolor(color).desaturate(100);
}

function lighten (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}

function brighten(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var rgb = tinycolor(color).toRgb();
    rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * - (amount / 100))));
    rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * - (amount / 100))));
    rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * - (amount / 100))));
    return tinycolor(rgb);
}

function darken (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}

// Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
// Values outside of this range will be wrapped into this range.
function spin(color, amount) {
    var hsl = tinycolor(color).toHsl();
    var hue = (hsl.h + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return tinycolor(hsl);
}

// Combination Functions
// ---------------------
// Thanks to jQuery xColor for some of the ideas behind these
// <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>

function complement(color) {
    var hsl = tinycolor(color).toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return tinycolor(hsl);
}

function triad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })
    ];
}

function tetrad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })
    ];
}

function splitcomplement(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l}),
        tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l})
    ];
}

function analogous(color, results, slices) {
    results = results || 6;
    slices = slices || 30;

    var hsl = tinycolor(color).toHsl();
    var part = 360 / slices;
    var ret = [tinycolor(color)];

    for (hsl.h = ((hsl.h - (part * results >> 1)) + 720) % 360; --results; ) {
        hsl.h = (hsl.h + part) % 360;
        ret.push(tinycolor(hsl));
    }
    return ret;
}

function monochromatic(color, results) {
    results = results || 6;
    var hsv = tinycolor(color).toHsv();
    var h = hsv.h, s = hsv.s, v = hsv.v;
    var ret = [];
    var modification = 1 / results;

    while (results--) {
        ret.push(tinycolor({ h: h, s: s, v: v}));
        v = (v + modification) % 1;
    }

    return ret;
}

// Utility Functions
// ---------------------

tinycolor.mix = function(color1, color2, amount) {
    amount = (amount === 0) ? 0 : (amount || 50);

    var rgb1 = tinycolor(color1).toRgb();
    var rgb2 = tinycolor(color2).toRgb();

    var p = amount / 100;

    var rgba = {
        r: ((rgb2.r - rgb1.r) * p) + rgb1.r,
        g: ((rgb2.g - rgb1.g) * p) + rgb1.g,
        b: ((rgb2.b - rgb1.b) * p) + rgb1.b,
        a: ((rgb2.a - rgb1.a) * p) + rgb1.a
    };

    return tinycolor(rgba);
};


// Readability Functions
// ---------------------
// <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)

// `contrast`
// Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)
tinycolor.readability = function(color1, color2) {
    var c1 = tinycolor(color1);
    var c2 = tinycolor(color2);
    return (Math.max(c1.getLuminance(),c2.getLuminance())+0.05) / (Math.min(c1.getLuminance(),c2.getLuminance())+0.05);
};

// `isReadable`
// Ensure that foreground and background color combinations meet WCAG2 guidelines.
// The third argument is an optional Object.
//      the 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA';
//      the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'.
// If the entire object is absent, isReadable defaults to {level:"AA",size:"small"}.

// *Example*
//    tinycolor.isReadable("#000", "#111") => false
//    tinycolor.isReadable("#000", "#111",{level:"AA",size:"large"}) => false
tinycolor.isReadable = function(color1, color2, wcag2) {
    var readability = tinycolor.readability(color1, color2);
    var wcag2Parms, out;

    out = false;

    wcag2Parms = validateWCAG2Parms(wcag2);
    switch (wcag2Parms.level + wcag2Parms.size) {
        case "AAsmall":
        case "AAAlarge":
            out = readability >= 4.5;
            break;
        case "AAlarge":
            out = readability >= 3;
            break;
        case "AAAsmall":
            out = readability >= 7;
            break;
    }
    return out;

};

// `mostReadable`
// Given a base color and a list of possible foreground or background
// colors for that base, returns the most readable color.
// Optionally returns Black or White if the most readable color is unreadable.
// *Example*
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:false}).toHexString(); // "#112255"
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:true}).toHexString();  // "#ffffff"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"large"}).toHexString(); // "#faf3f3"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"small"}).toHexString(); // "#ffffff"
tinycolor.mostReadable = function(baseColor, colorList, args) {
    var bestColor = null;
    var bestScore = 0;
    var readability;
    var includeFallbackColors, level, size ;
    args = args || {};
    includeFallbackColors = args.includeFallbackColors ;
    level = args.level;
    size = args.size;

    for (var i= 0; i < colorList.length ; i++) {
        readability = tinycolor.readability(baseColor, colorList[i]);
        if (readability > bestScore) {
            bestScore = readability;
            bestColor = tinycolor(colorList[i]);
        }
    }

    if (tinycolor.isReadable(baseColor, bestColor, {"level":level,"size":size}) || !includeFallbackColors) {
        return bestColor;
    }
    else {
        args.includeFallbackColors=false;
        return tinycolor.mostReadable(baseColor,["#fff", "#000"],args);
    }
};


// Big List of Colors
// ------------------
// <http://www.w3.org/TR/css3-color/#svg-color>
var names = tinycolor.names = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "0ff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "00f",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    burntsienna: "ea7e5d",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "0ff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "f0f",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "663399",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32"
};

// Make it easy to access colors via `hexNames[hex]`
var hexNames = tinycolor.hexNames = flip(names);


// Utilities
// ---------

// `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
function flip(o) {
    var flipped = { };
    for (var i in o) {
        if (o.hasOwnProperty(i)) {
            flipped[o[i]] = i;
        }
    }
    return flipped;
}

// Return a valid alpha value [0,1] with all invalid values being set to 1
function boundAlpha(a) {
    a = parseFloat(a);

    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }

    return a;
}

// Take input from [0, n] and return it as [0, 1]
function bound01(n, max) {
    if (isOnePointZero(n)) { n = "100%"; }

    var processPercent = isPercentage(n);
    n = mathMin(max, mathMax(0, parseFloat(n)));

    // Automatically convert percentage into number
    if (processPercent) {
        n = parseInt(n * max, 10) / 100;
    }

    // Handle floating point rounding errors
    if ((Math.abs(n - max) < 0.000001)) {
        return 1;
    }

    // Convert into [0, 1] range if it isn't already
    return (n % max) / parseFloat(max);
}

// Force a number between 0 and 1
function clamp01(val) {
    return mathMin(1, mathMax(0, val));
}

// Parse a base-16 hex value into a base-10 integer
function parseIntFromHex(val) {
    return parseInt(val, 16);
}

// Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
// <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
function isOnePointZero(n) {
    return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
}

// Check to see if string passed in is a percentage
function isPercentage(n) {
    return typeof n === "string" && n.indexOf('%') != -1;
}

// Force a hex value to have 2 characters
function pad2(c) {
    return c.length == 1 ? '0' + c : '' + c;
}

// Replace a decimal with it's percentage value
function convertToPercentage(n) {
    if (n <= 1) {
        n = (n * 100) + "%";
    }

    return n;
}

// Converts a decimal to a hex value
function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
}
// Converts a hex value to a decimal
function convertHexToDecimal(h) {
    return (parseIntFromHex(h) / 255);
}

var matchers = (function() {

    // <http://www.w3.org/TR/css3-values/#integers>
    var CSS_INTEGER = "[-\\+]?\\d+%?";

    // <http://www.w3.org/TR/css3-values/#number-value>
    var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";

    // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
    var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";

    // Actual matching.
    // Parentheses and commas are optional, but not required.
    // Whitespace can take the place of commas or opening paren
    var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
    var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";

    return {
        CSS_UNIT: new RegExp(CSS_UNIT),
        rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
        rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
        hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
        hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
        hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
        hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    };
})();

// `isValidCSSUnit`
// Take in a single string / number and check to see if it looks like a CSS unit
// (see `matchers` above for definition).
function isValidCSSUnit(color) {
    return !!matchers.CSS_UNIT.exec(color);
}

// `stringInputToObject`
// Permissive string parsing.  Take in a number of formats, and output an object
// based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
function stringInputToObject(color) {

    color = color.replace(trimLeft,'').replace(trimRight, '').toLowerCase();
    var named = false;
    if (names[color]) {
        color = names[color];
        named = true;
    }
    else if (color == 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: "name" };
    }

    // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.
    var match;
    if ((match = matchers.rgb.exec(color))) {
        return { r: match[1], g: match[2], b: match[3] };
    }
    if ((match = matchers.rgba.exec(color))) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    if ((match = matchers.hsl.exec(color))) {
        return { h: match[1], s: match[2], l: match[3] };
    }
    if ((match = matchers.hsla.exec(color))) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    if ((match = matchers.hsv.exec(color))) {
        return { h: match[1], s: match[2], v: match[3] };
    }
    if ((match = matchers.hsva.exec(color))) {
        return { h: match[1], s: match[2], v: match[3], a: match[4] };
    }
    if ((match = matchers.hex8.exec(color))) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            a: convertHexToDecimal(match[4]),
            format: named ? "name" : "hex8"
        };
    }
    if ((match = matchers.hex6.exec(color))) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            format: named ? "name" : "hex"
        };
    }
    if ((match = matchers.hex4.exec(color))) {
        return {
            r: parseIntFromHex(match[1] + '' + match[1]),
            g: parseIntFromHex(match[2] + '' + match[2]),
            b: parseIntFromHex(match[3] + '' + match[3]),
            a: convertHexToDecimal(match[4] + '' + match[4]),
            format: named ? "name" : "hex8"
        };
    }
    if ((match = matchers.hex3.exec(color))) {
        return {
            r: parseIntFromHex(match[1] + '' + match[1]),
            g: parseIntFromHex(match[2] + '' + match[2]),
            b: parseIntFromHex(match[3] + '' + match[3]),
            format: named ? "name" : "hex"
        };
    }

    return false;
}

function validateWCAG2Parms(parms) {
    // return valid WCAG2 parms for isReadable.
    // If input parms are invalid, return {"level":"AA", "size":"small"}
    var level, size;
    parms = parms || {"level":"AA", "size":"small"};
    level = (parms.level || "AA").toUpperCase();
    size = (parms.size || "small").toLowerCase();
    if (level !== "AA" && level !== "AAA") {
        level = "AA";
    }
    if (size !== "small" && size !== "large") {
        size = "small";
    }
    return {"level":level, "size":size};
}

// Node: Export function
if ( true && module.exports) {
    module.exports = tinycolor;
}
// AMD/requirejs: Define the module
else if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {return tinycolor;}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}
// Browser: Expose to window
else {}

})(Math);


/***/ }),

/***/ 6:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["primitives"]; }());

/***/ }),

/***/ 68:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["date"]; }());

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

/***/ 72:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["viewport"]; }());

/***/ }),

/***/ 74:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["serverSideRender"]; }());

/***/ }),

/***/ 79:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["escapeHtml"]; }());

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ 89:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["coreData"]; }());

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["compose"]; }());

/***/ }),

/***/ 94:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["autop"]; }());

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var classNames = (function () {
		// don't inherit from Object so we can skip hasOwnProperty check later
		// http://stackoverflow.com/questions/15518328/creating-js-object-with-object-createnull#answer-21079232
		function StorageObject() {}
		StorageObject.prototype = Object.create(null);

		function _parseArray (resultSet, array) {
			var length = array.length;

			for (var i = 0; i < length; ++i) {
				_parse(resultSet, array[i]);
			}
		}

		var hasOwn = {}.hasOwnProperty;

		function _parseNumber (resultSet, num) {
			resultSet[num] = true;
		}

		function _parseObject (resultSet, object) {
			for (var k in object) {
				if (hasOwn.call(object, k)) {
					// set value to false instead of deleting it to avoid changing object structure
					// https://www.smashingmagazine.com/2012/11/writing-fast-memory-efficient-javascript/#de-referencing-misconceptions
					resultSet[k] = !!object[k];
				}
			}
		}

		var SPACE = /\s+/;
		function _parseString (resultSet, str) {
			var array = str.split(SPACE);
			var length = array.length;

			for (var i = 0; i < length; ++i) {
				resultSet[array[i]] = true;
			}
		}

		function _parse (resultSet, arg) {
			if (!arg) return;
			var argType = typeof arg;

			// 'foo bar'
			if (argType === 'string') {
				_parseString(resultSet, arg);

			// ['foo', 'bar', ...]
			} else if (Array.isArray(arg)) {
				_parseArray(resultSet, arg);

			// { 'foo': true, ... }
			} else if (argType === 'object') {
				_parseObject(resultSet, arg);

			// '130'
			} else if (argType === 'number') {
				_parseNumber(resultSet, arg);
			}
		}

		function _classNames () {
			// don't leak arguments
			// https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
			var len = arguments.length;
			var args = Array(len);
			for (var i = 0; i < len; i++) {
				args[i] = arguments[i];
			}

			var classSet = new StorageObject();
			_parseArray(classSet, args);

			var list = [];

			for (var k in classSet) {
				if (classSet[k]) {
					list.push(k)
				}
			}

			return list.join(' ');
		}

		return _classNames;
	})();

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ })

/******/ });
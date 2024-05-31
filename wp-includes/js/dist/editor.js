/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 4306:
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	autosize 4.0.4
	license: MIT
	http://www.jacklmoore.com/autosize
*/
(function (global, factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else { var mod; }
})(this, function (module, exports) {
	'use strict';

	var map = typeof Map === "function" ? new Map() : function () {
		var keys = [];
		var values = [];

		return {
			has: function has(key) {
				return keys.indexOf(key) > -1;
			},
			get: function get(key) {
				return values[keys.indexOf(key)];
			},
			set: function set(key, value) {
				if (keys.indexOf(key) === -1) {
					keys.push(key);
					values.push(value);
				}
			},
			delete: function _delete(key) {
				var index = keys.indexOf(key);
				if (index > -1) {
					keys.splice(index, 1);
					values.splice(index, 1);
				}
			}
		};
	}();

	var createEvent = function createEvent(name) {
		return new Event(name, { bubbles: true });
	};
	try {
		new Event('test');
	} catch (e) {
		// IE does not support `new Event()`
		createEvent = function createEvent(name) {
			var evt = document.createEvent('Event');
			evt.initEvent(name, true, false);
			return evt;
		};
	}

	function assign(ta) {
		if (!ta || !ta.nodeName || ta.nodeName !== 'TEXTAREA' || map.has(ta)) return;

		var heightOffset = null;
		var clientWidth = null;
		var cachedHeight = null;

		function init() {
			var style = window.getComputedStyle(ta, null);

			if (style.resize === 'vertical') {
				ta.style.resize = 'none';
			} else if (style.resize === 'both') {
				ta.style.resize = 'horizontal';
			}

			if (style.boxSizing === 'content-box') {
				heightOffset = -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom));
			} else {
				heightOffset = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
			}
			// Fix when a textarea is not on document body and heightOffset is Not a Number
			if (isNaN(heightOffset)) {
				heightOffset = 0;
			}

			update();
		}

		function changeOverflow(value) {
			{
				// Chrome/Safari-specific fix:
				// When the textarea y-overflow is hidden, Chrome/Safari do not reflow the text to account for the space
				// made available by removing the scrollbar. The following forces the necessary text reflow.
				var width = ta.style.width;
				ta.style.width = '0px';
				// Force reflow:
				/* jshint ignore:start */
				ta.offsetWidth;
				/* jshint ignore:end */
				ta.style.width = width;
			}

			ta.style.overflowY = value;
		}

		function getParentOverflows(el) {
			var arr = [];

			while (el && el.parentNode && el.parentNode instanceof Element) {
				if (el.parentNode.scrollTop) {
					arr.push({
						node: el.parentNode,
						scrollTop: el.parentNode.scrollTop
					});
				}
				el = el.parentNode;
			}

			return arr;
		}

		function resize() {
			if (ta.scrollHeight === 0) {
				// If the scrollHeight is 0, then the element probably has display:none or is detached from the DOM.
				return;
			}

			var overflows = getParentOverflows(ta);
			var docTop = document.documentElement && document.documentElement.scrollTop; // Needed for Mobile IE (ticket #240)

			ta.style.height = '';
			ta.style.height = ta.scrollHeight + heightOffset + 'px';

			// used to check if an update is actually necessary on window.resize
			clientWidth = ta.clientWidth;

			// prevents scroll-position jumping
			overflows.forEach(function (el) {
				el.node.scrollTop = el.scrollTop;
			});

			if (docTop) {
				document.documentElement.scrollTop = docTop;
			}
		}

		function update() {
			resize();

			var styleHeight = Math.round(parseFloat(ta.style.height));
			var computed = window.getComputedStyle(ta, null);

			// Using offsetHeight as a replacement for computed.height in IE, because IE does not account use of border-box
			var actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(computed.height)) : ta.offsetHeight;

			// The actual height not matching the style height (set via the resize method) indicates that 
			// the max-height has been exceeded, in which case the overflow should be allowed.
			if (actualHeight < styleHeight) {
				if (computed.overflowY === 'hidden') {
					changeOverflow('scroll');
					resize();
					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
				}
			} else {
				// Normally keep overflow set to hidden, to avoid flash of scrollbar as the textarea expands.
				if (computed.overflowY !== 'hidden') {
					changeOverflow('hidden');
					resize();
					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
				}
			}

			if (cachedHeight !== actualHeight) {
				cachedHeight = actualHeight;
				var evt = createEvent('autosize:resized');
				try {
					ta.dispatchEvent(evt);
				} catch (err) {
					// Firefox will throw an error on dispatchEvent for a detached element
					// https://bugzilla.mozilla.org/show_bug.cgi?id=889376
				}
			}
		}

		var pageResize = function pageResize() {
			if (ta.clientWidth !== clientWidth) {
				update();
			}
		};

		var destroy = function (style) {
			window.removeEventListener('resize', pageResize, false);
			ta.removeEventListener('input', update, false);
			ta.removeEventListener('keyup', update, false);
			ta.removeEventListener('autosize:destroy', destroy, false);
			ta.removeEventListener('autosize:update', update, false);

			Object.keys(style).forEach(function (key) {
				ta.style[key] = style[key];
			});

			map.delete(ta);
		}.bind(ta, {
			height: ta.style.height,
			resize: ta.style.resize,
			overflowY: ta.style.overflowY,
			overflowX: ta.style.overflowX,
			wordWrap: ta.style.wordWrap
		});

		ta.addEventListener('autosize:destroy', destroy, false);

		// IE9 does not fire onpropertychange or oninput for deletions,
		// so binding to onkeyup to catch most of those events.
		// There is no way that I know of to detect something like 'cut' in IE9.
		if ('onpropertychange' in ta && 'oninput' in ta) {
			ta.addEventListener('keyup', update, false);
		}

		window.addEventListener('resize', pageResize, false);
		ta.addEventListener('input', update, false);
		ta.addEventListener('autosize:update', update, false);
		ta.style.overflowX = 'hidden';
		ta.style.wordWrap = 'break-word';

		map.set(ta, {
			destroy: destroy,
			update: update
		});

		init();
	}

	function destroy(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.destroy();
		}
	}

	function update(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.update();
		}
	}

	var autosize = null;

	// Do nothing in Node.js environment and IE8 (or lower)
	if (typeof window === 'undefined' || typeof window.getComputedStyle !== 'function') {
		autosize = function autosize(el) {
			return el;
		};
		autosize.destroy = function (el) {
			return el;
		};
		autosize.update = function (el) {
			return el;
		};
	} else {
		autosize = function autosize(el, options) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], function (x) {
					return assign(x, options);
				});
			}
			return el;
		};
		autosize.destroy = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], destroy);
			}
			return el;
		};
		autosize.update = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], update);
			}
			return el;
		};
	}

	exports.default = autosize;
	module.exports = exports['default'];
});

/***/ }),

/***/ 6109:
/***/ ((module) => {

// This code has been refactored for 140 bytes
// You can see the original here: https://github.com/twolfson/computedStyle/blob/04cd1da2e30fa45844f95f5cb1ac898e9b9ef050/lib/computedStyle.js
var computedStyle = function (el, prop, getComputedStyle) {
  getComputedStyle = window.getComputedStyle;

  // In one fell swoop
  return (
    // If we have getComputedStyle
    getComputedStyle ?
      // Query it
      // TODO: From CSS-Query notes, we might need (node, null) for FF
      getComputedStyle(el) :

    // Otherwise, we are in IE and use currentStyle
      el.currentStyle
  )[
    // Switch to camelCase for CSSOM
    // DEV: Grabbed from jQuery
    // https://github.com/jquery/jquery/blob/1.9-stable/src/css.js#L191-L194
    // https://github.com/jquery/jquery/blob/1.9-stable/src/core.js#L593-L597
    prop.replace(/-(\w)/gi, function (word, letter) {
      return letter.toUpperCase();
    })
  ];
};

module.exports = computedStyle;


/***/ }),

/***/ 66:
/***/ ((module) => {

"use strict";


var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function getMergeFunction(key, options) {
	if (!options.customMerge) {
		return deepmerge
	}
	var customMerge = options.customMerge(key);
	return typeof customMerge === 'function' ? customMerge : deepmerge
}

function getEnumerableOwnPropertySymbols(target) {
	return Object.getOwnPropertySymbols
		? Object.getOwnPropertySymbols(target).filter(function(symbol) {
			return Object.propertyIsEnumerable.call(target, symbol)
		})
		: []
}

function getKeys(target) {
	return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
}

function propertyIsOnObject(object, property) {
	try {
		return property in object
	} catch(_) {
		return false
	}
}

// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target, key) {
	return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
		&& !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
			&& Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		getKeys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	getKeys(source).forEach(function(key) {
		if (propertyIsUnsafe(target, key)) {
			return
		}

		if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
			destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
		} else {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;
	// cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
	// implementations can use it. The caller may not replace it.
	options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

module.exports = deepmerge_1;


/***/ }),

/***/ 5215:
/***/ ((module) => {

"use strict";


// do not edit .js files directly - edit src/index.jst



module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};


/***/ }),

/***/ 461:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Load in dependencies
var computedStyle = __webpack_require__(6109);

/**
 * Calculate the `line-height` of a given node
 * @param {HTMLElement} node Element to calculate line height of. Must be in the DOM.
 * @returns {Number} `line-height` of the element in pixels
 */
function lineHeight(node) {
  // Grab the line-height via style
  var lnHeightStr = computedStyle(node, 'line-height');
  var lnHeight = parseFloat(lnHeightStr, 10);

  // If the lineHeight did not contain a unit (i.e. it was numeric), convert it to ems (e.g. '2.3' === '2.3em')
  if (lnHeightStr === lnHeight + '') {
    // Save the old lineHeight style and update the em unit to the element
    var _lnHeightStyle = node.style.lineHeight;
    node.style.lineHeight = lnHeightStr + 'em';

    // Calculate the em based height
    lnHeightStr = computedStyle(node, 'line-height');
    lnHeight = parseFloat(lnHeightStr, 10);

    // Revert the lineHeight style
    if (_lnHeightStyle) {
      node.style.lineHeight = _lnHeightStyle;
    } else {
      delete node.style.lineHeight;
    }
  }

  // If the lineHeight is in `pt`, convert it to pixels (4px for 3pt)
  // DEV: `em` units are converted to `pt` in IE6
  // Conversion ratio from https://developer.mozilla.org/en-US/docs/Web/CSS/length
  if (lnHeightStr.indexOf('pt') !== -1) {
    lnHeight *= 4;
    lnHeight /= 3;
  // Otherwise, if the lineHeight is in `mm`, convert it to pixels (96px for 25.4mm)
  } else if (lnHeightStr.indexOf('mm') !== -1) {
    lnHeight *= 96;
    lnHeight /= 25.4;
  // Otherwise, if the lineHeight is in `cm`, convert it to pixels (96px for 2.54cm)
  } else if (lnHeightStr.indexOf('cm') !== -1) {
    lnHeight *= 96;
    lnHeight /= 2.54;
  // Otherwise, if the lineHeight is in `in`, convert it to pixels (96px for 1in)
  } else if (lnHeightStr.indexOf('in') !== -1) {
    lnHeight *= 96;
  // Otherwise, if the lineHeight is in `pc`, convert it to pixels (12pt for 1pc)
  } else if (lnHeightStr.indexOf('pc') !== -1) {
    lnHeight *= 16;
  }

  // Continue our computation
  lnHeight = Math.round(lnHeight);

  // If the line-height is "normal", calculate by font-size
  if (lnHeightStr === 'normal') {
    // Create a temporary node
    var nodeName = node.nodeName;
    var _node = document.createElement(nodeName);
    _node.innerHTML = '&nbsp;';

    // If we have a text area, reset it to only 1 row
    // https://github.com/twolfson/line-height/issues/4
    if (nodeName.toUpperCase() === 'TEXTAREA') {
      _node.setAttribute('rows', '1');
    }

    // Set the font-size of the element
    var fontSizeStr = computedStyle(node, 'font-size');
    _node.style.fontSize = fontSizeStr;

    // Remove default padding/border which can affect offset height
    // https://github.com/twolfson/line-height/issues/4
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetHeight
    _node.style.padding = '0px';
    _node.style.border = '0px';

    // Append it to the body
    var body = document.body;
    body.appendChild(_node);

    // Assume the line height of the element is the height
    var height = _node.offsetHeight;
    lnHeight = height;

    // Remove our child from the DOM
    body.removeChild(_node);
  }

  // Return the calculated height
  return lnHeight;
}

// Export lineHeight
module.exports = lineHeight;


/***/ }),

/***/ 628:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(4067);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 5826:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(628)();
}


/***/ }),

/***/ 4067:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ 4462:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
exports.__esModule = true;
var React = __webpack_require__(1609);
var PropTypes = __webpack_require__(5826);
var autosize = __webpack_require__(4306);
var _getLineHeight = __webpack_require__(461);
var getLineHeight = _getLineHeight;
var RESIZED = "autosize:resized";
/**
 * A light replacement for built-in textarea component
 * which automaticaly adjusts its height to match the content
 */
var TextareaAutosizeClass = /** @class */ (function (_super) {
    __extends(TextareaAutosizeClass, _super);
    function TextareaAutosizeClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            lineHeight: null
        };
        _this.textarea = null;
        _this.onResize = function (e) {
            if (_this.props.onResize) {
                _this.props.onResize(e);
            }
        };
        _this.updateLineHeight = function () {
            if (_this.textarea) {
                _this.setState({
                    lineHeight: getLineHeight(_this.textarea)
                });
            }
        };
        _this.onChange = function (e) {
            var onChange = _this.props.onChange;
            _this.currentValue = e.currentTarget.value;
            onChange && onChange(e);
        };
        return _this;
    }
    TextareaAutosizeClass.prototype.componentDidMount = function () {
        var _this = this;
        var _a = this.props, maxRows = _a.maxRows, async = _a.async;
        if (typeof maxRows === "number") {
            this.updateLineHeight();
        }
        if (typeof maxRows === "number" || async) {
            /*
              the defer is needed to:
                - force "autosize" to activate the scrollbar when this.props.maxRows is passed
                - support StyledComponents (see #71)
            */
            setTimeout(function () { return _this.textarea && autosize(_this.textarea); });
        }
        else {
            this.textarea && autosize(this.textarea);
        }
        if (this.textarea) {
            this.textarea.addEventListener(RESIZED, this.onResize);
        }
    };
    TextareaAutosizeClass.prototype.componentWillUnmount = function () {
        if (this.textarea) {
            this.textarea.removeEventListener(RESIZED, this.onResize);
            autosize.destroy(this.textarea);
        }
    };
    TextareaAutosizeClass.prototype.render = function () {
        var _this = this;
        var _a = this, _b = _a.props, onResize = _b.onResize, maxRows = _b.maxRows, onChange = _b.onChange, style = _b.style, innerRef = _b.innerRef, children = _b.children, props = __rest(_b, ["onResize", "maxRows", "onChange", "style", "innerRef", "children"]), lineHeight = _a.state.lineHeight;
        var maxHeight = maxRows && lineHeight ? lineHeight * maxRows : null;
        return (React.createElement("textarea", __assign({}, props, { onChange: this.onChange, style: maxHeight ? __assign({}, style, { maxHeight: maxHeight }) : style, ref: function (element) {
                _this.textarea = element;
                if (typeof _this.props.innerRef === 'function') {
                    _this.props.innerRef(element);
                }
                else if (_this.props.innerRef) {
                    _this.props.innerRef.current = element;
                }
            } }), children));
    };
    TextareaAutosizeClass.prototype.componentDidUpdate = function () {
        this.textarea && autosize.update(this.textarea);
    };
    TextareaAutosizeClass.defaultProps = {
        rows: 1,
        async: false
    };
    TextareaAutosizeClass.propTypes = {
        rows: PropTypes.number,
        maxRows: PropTypes.number,
        onResize: PropTypes.func,
        innerRef: PropTypes.any,
        async: PropTypes.bool
    };
    return TextareaAutosizeClass;
}(React.Component));
exports.TextareaAutosize = React.forwardRef(function (props, ref) {
    return React.createElement(TextareaAutosizeClass, __assign({}, props, { innerRef: ref }));
});


/***/ }),

/***/ 4132:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = true;
var TextareaAutosize_1 = __webpack_require__(4462);
exports.A = TextareaAutosize_1.TextareaAutosize;


/***/ }),

/***/ 9681:
/***/ ((module) => {

var characterMap = {
	"À": "A",
	"Á": "A",
	"Â": "A",
	"Ã": "A",
	"Ä": "A",
	"Å": "A",
	"Ấ": "A",
	"Ắ": "A",
	"Ẳ": "A",
	"Ẵ": "A",
	"Ặ": "A",
	"Æ": "AE",
	"Ầ": "A",
	"Ằ": "A",
	"Ȃ": "A",
	"Ả": "A",
	"Ạ": "A",
	"Ẩ": "A",
	"Ẫ": "A",
	"Ậ": "A",
	"Ç": "C",
	"Ḉ": "C",
	"È": "E",
	"É": "E",
	"Ê": "E",
	"Ë": "E",
	"Ế": "E",
	"Ḗ": "E",
	"Ề": "E",
	"Ḕ": "E",
	"Ḝ": "E",
	"Ȇ": "E",
	"Ẻ": "E",
	"Ẽ": "E",
	"Ẹ": "E",
	"Ể": "E",
	"Ễ": "E",
	"Ệ": "E",
	"Ì": "I",
	"Í": "I",
	"Î": "I",
	"Ï": "I",
	"Ḯ": "I",
	"Ȋ": "I",
	"Ỉ": "I",
	"Ị": "I",
	"Ð": "D",
	"Ñ": "N",
	"Ò": "O",
	"Ó": "O",
	"Ô": "O",
	"Õ": "O",
	"Ö": "O",
	"Ø": "O",
	"Ố": "O",
	"Ṍ": "O",
	"Ṓ": "O",
	"Ȏ": "O",
	"Ỏ": "O",
	"Ọ": "O",
	"Ổ": "O",
	"Ỗ": "O",
	"Ộ": "O",
	"Ờ": "O",
	"Ở": "O",
	"Ỡ": "O",
	"Ớ": "O",
	"Ợ": "O",
	"Ù": "U",
	"Ú": "U",
	"Û": "U",
	"Ü": "U",
	"Ủ": "U",
	"Ụ": "U",
	"Ử": "U",
	"Ữ": "U",
	"Ự": "U",
	"Ý": "Y",
	"à": "a",
	"á": "a",
	"â": "a",
	"ã": "a",
	"ä": "a",
	"å": "a",
	"ấ": "a",
	"ắ": "a",
	"ẳ": "a",
	"ẵ": "a",
	"ặ": "a",
	"æ": "ae",
	"ầ": "a",
	"ằ": "a",
	"ȃ": "a",
	"ả": "a",
	"ạ": "a",
	"ẩ": "a",
	"ẫ": "a",
	"ậ": "a",
	"ç": "c",
	"ḉ": "c",
	"è": "e",
	"é": "e",
	"ê": "e",
	"ë": "e",
	"ế": "e",
	"ḗ": "e",
	"ề": "e",
	"ḕ": "e",
	"ḝ": "e",
	"ȇ": "e",
	"ẻ": "e",
	"ẽ": "e",
	"ẹ": "e",
	"ể": "e",
	"ễ": "e",
	"ệ": "e",
	"ì": "i",
	"í": "i",
	"î": "i",
	"ï": "i",
	"ḯ": "i",
	"ȋ": "i",
	"ỉ": "i",
	"ị": "i",
	"ð": "d",
	"ñ": "n",
	"ò": "o",
	"ó": "o",
	"ô": "o",
	"õ": "o",
	"ö": "o",
	"ø": "o",
	"ố": "o",
	"ṍ": "o",
	"ṓ": "o",
	"ȏ": "o",
	"ỏ": "o",
	"ọ": "o",
	"ổ": "o",
	"ỗ": "o",
	"ộ": "o",
	"ờ": "o",
	"ở": "o",
	"ỡ": "o",
	"ớ": "o",
	"ợ": "o",
	"ù": "u",
	"ú": "u",
	"û": "u",
	"ü": "u",
	"ủ": "u",
	"ụ": "u",
	"ử": "u",
	"ữ": "u",
	"ự": "u",
	"ý": "y",
	"ÿ": "y",
	"Ā": "A",
	"ā": "a",
	"Ă": "A",
	"ă": "a",
	"Ą": "A",
	"ą": "a",
	"Ć": "C",
	"ć": "c",
	"Ĉ": "C",
	"ĉ": "c",
	"Ċ": "C",
	"ċ": "c",
	"Č": "C",
	"č": "c",
	"C̆": "C",
	"c̆": "c",
	"Ď": "D",
	"ď": "d",
	"Đ": "D",
	"đ": "d",
	"Ē": "E",
	"ē": "e",
	"Ĕ": "E",
	"ĕ": "e",
	"Ė": "E",
	"ė": "e",
	"Ę": "E",
	"ę": "e",
	"Ě": "E",
	"ě": "e",
	"Ĝ": "G",
	"Ǵ": "G",
	"ĝ": "g",
	"ǵ": "g",
	"Ğ": "G",
	"ğ": "g",
	"Ġ": "G",
	"ġ": "g",
	"Ģ": "G",
	"ģ": "g",
	"Ĥ": "H",
	"ĥ": "h",
	"Ħ": "H",
	"ħ": "h",
	"Ḫ": "H",
	"ḫ": "h",
	"Ĩ": "I",
	"ĩ": "i",
	"Ī": "I",
	"ī": "i",
	"Ĭ": "I",
	"ĭ": "i",
	"Į": "I",
	"į": "i",
	"İ": "I",
	"ı": "i",
	"Ĳ": "IJ",
	"ĳ": "ij",
	"Ĵ": "J",
	"ĵ": "j",
	"Ķ": "K",
	"ķ": "k",
	"Ḱ": "K",
	"ḱ": "k",
	"K̆": "K",
	"k̆": "k",
	"Ĺ": "L",
	"ĺ": "l",
	"Ļ": "L",
	"ļ": "l",
	"Ľ": "L",
	"ľ": "l",
	"Ŀ": "L",
	"ŀ": "l",
	"Ł": "l",
	"ł": "l",
	"Ḿ": "M",
	"ḿ": "m",
	"M̆": "M",
	"m̆": "m",
	"Ń": "N",
	"ń": "n",
	"Ņ": "N",
	"ņ": "n",
	"Ň": "N",
	"ň": "n",
	"ŉ": "n",
	"N̆": "N",
	"n̆": "n",
	"Ō": "O",
	"ō": "o",
	"Ŏ": "O",
	"ŏ": "o",
	"Ő": "O",
	"ő": "o",
	"Œ": "OE",
	"œ": "oe",
	"P̆": "P",
	"p̆": "p",
	"Ŕ": "R",
	"ŕ": "r",
	"Ŗ": "R",
	"ŗ": "r",
	"Ř": "R",
	"ř": "r",
	"R̆": "R",
	"r̆": "r",
	"Ȓ": "R",
	"ȓ": "r",
	"Ś": "S",
	"ś": "s",
	"Ŝ": "S",
	"ŝ": "s",
	"Ş": "S",
	"Ș": "S",
	"ș": "s",
	"ş": "s",
	"Š": "S",
	"š": "s",
	"Ţ": "T",
	"ţ": "t",
	"ț": "t",
	"Ț": "T",
	"Ť": "T",
	"ť": "t",
	"Ŧ": "T",
	"ŧ": "t",
	"T̆": "T",
	"t̆": "t",
	"Ũ": "U",
	"ũ": "u",
	"Ū": "U",
	"ū": "u",
	"Ŭ": "U",
	"ŭ": "u",
	"Ů": "U",
	"ů": "u",
	"Ű": "U",
	"ű": "u",
	"Ų": "U",
	"ų": "u",
	"Ȗ": "U",
	"ȗ": "u",
	"V̆": "V",
	"v̆": "v",
	"Ŵ": "W",
	"ŵ": "w",
	"Ẃ": "W",
	"ẃ": "w",
	"X̆": "X",
	"x̆": "x",
	"Ŷ": "Y",
	"ŷ": "y",
	"Ÿ": "Y",
	"Y̆": "Y",
	"y̆": "y",
	"Ź": "Z",
	"ź": "z",
	"Ż": "Z",
	"ż": "z",
	"Ž": "Z",
	"ž": "z",
	"ſ": "s",
	"ƒ": "f",
	"Ơ": "O",
	"ơ": "o",
	"Ư": "U",
	"ư": "u",
	"Ǎ": "A",
	"ǎ": "a",
	"Ǐ": "I",
	"ǐ": "i",
	"Ǒ": "O",
	"ǒ": "o",
	"Ǔ": "U",
	"ǔ": "u",
	"Ǖ": "U",
	"ǖ": "u",
	"Ǘ": "U",
	"ǘ": "u",
	"Ǚ": "U",
	"ǚ": "u",
	"Ǜ": "U",
	"ǜ": "u",
	"Ứ": "U",
	"ứ": "u",
	"Ṹ": "U",
	"ṹ": "u",
	"Ǻ": "A",
	"ǻ": "a",
	"Ǽ": "AE",
	"ǽ": "ae",
	"Ǿ": "O",
	"ǿ": "o",
	"Þ": "TH",
	"þ": "th",
	"Ṕ": "P",
	"ṕ": "p",
	"Ṥ": "S",
	"ṥ": "s",
	"X́": "X",
	"x́": "x",
	"Ѓ": "Г",
	"ѓ": "г",
	"Ќ": "К",
	"ќ": "к",
	"A̋": "A",
	"a̋": "a",
	"E̋": "E",
	"e̋": "e",
	"I̋": "I",
	"i̋": "i",
	"Ǹ": "N",
	"ǹ": "n",
	"Ồ": "O",
	"ồ": "o",
	"Ṑ": "O",
	"ṑ": "o",
	"Ừ": "U",
	"ừ": "u",
	"Ẁ": "W",
	"ẁ": "w",
	"Ỳ": "Y",
	"ỳ": "y",
	"Ȁ": "A",
	"ȁ": "a",
	"Ȅ": "E",
	"ȅ": "e",
	"Ȉ": "I",
	"ȉ": "i",
	"Ȍ": "O",
	"ȍ": "o",
	"Ȑ": "R",
	"ȑ": "r",
	"Ȕ": "U",
	"ȕ": "u",
	"B̌": "B",
	"b̌": "b",
	"Č̣": "C",
	"č̣": "c",
	"Ê̌": "E",
	"ê̌": "e",
	"F̌": "F",
	"f̌": "f",
	"Ǧ": "G",
	"ǧ": "g",
	"Ȟ": "H",
	"ȟ": "h",
	"J̌": "J",
	"ǰ": "j",
	"Ǩ": "K",
	"ǩ": "k",
	"M̌": "M",
	"m̌": "m",
	"P̌": "P",
	"p̌": "p",
	"Q̌": "Q",
	"q̌": "q",
	"Ř̩": "R",
	"ř̩": "r",
	"Ṧ": "S",
	"ṧ": "s",
	"V̌": "V",
	"v̌": "v",
	"W̌": "W",
	"w̌": "w",
	"X̌": "X",
	"x̌": "x",
	"Y̌": "Y",
	"y̌": "y",
	"A̧": "A",
	"a̧": "a",
	"B̧": "B",
	"b̧": "b",
	"Ḑ": "D",
	"ḑ": "d",
	"Ȩ": "E",
	"ȩ": "e",
	"Ɛ̧": "E",
	"ɛ̧": "e",
	"Ḩ": "H",
	"ḩ": "h",
	"I̧": "I",
	"i̧": "i",
	"Ɨ̧": "I",
	"ɨ̧": "i",
	"M̧": "M",
	"m̧": "m",
	"O̧": "O",
	"o̧": "o",
	"Q̧": "Q",
	"q̧": "q",
	"U̧": "U",
	"u̧": "u",
	"X̧": "X",
	"x̧": "x",
	"Z̧": "Z",
	"z̧": "z",
	"й":"и",
	"Й":"И",
	"ё":"е",
	"Ё":"Е",
};

var chars = Object.keys(characterMap).join('|');
var allAccents = new RegExp(chars, 'g');
var firstAccent = new RegExp(chars, '');

function matcher(match) {
	return characterMap[match];
}

var removeAccents = function(string) {
	return string.replace(allAccents, matcher);
};

var hasAccents = function(string) {
	return !!string.match(firstAccent);
};

module.exports = removeAccents;
module.exports.has = hasAccents;
module.exports.remove = removeAccents;


/***/ }),

/***/ 1609:
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  AlignmentToolbar: () => (/* reexport */ AlignmentToolbar),
  Autocomplete: () => (/* reexport */ Autocomplete),
  AutosaveMonitor: () => (/* reexport */ autosave_monitor),
  BlockAlignmentToolbar: () => (/* reexport */ BlockAlignmentToolbar),
  BlockControls: () => (/* reexport */ BlockControls),
  BlockEdit: () => (/* reexport */ BlockEdit),
  BlockEditorKeyboardShortcuts: () => (/* reexport */ BlockEditorKeyboardShortcuts),
  BlockFormatControls: () => (/* reexport */ BlockFormatControls),
  BlockIcon: () => (/* reexport */ BlockIcon),
  BlockInspector: () => (/* reexport */ BlockInspector),
  BlockList: () => (/* reexport */ BlockList),
  BlockMover: () => (/* reexport */ BlockMover),
  BlockNavigationDropdown: () => (/* reexport */ BlockNavigationDropdown),
  BlockSelectionClearer: () => (/* reexport */ BlockSelectionClearer),
  BlockSettingsMenu: () => (/* reexport */ BlockSettingsMenu),
  BlockTitle: () => (/* reexport */ BlockTitle),
  BlockToolbar: () => (/* reexport */ BlockToolbar),
  CharacterCount: () => (/* reexport */ CharacterCount),
  ColorPalette: () => (/* reexport */ ColorPalette),
  ContrastChecker: () => (/* reexport */ ContrastChecker),
  CopyHandler: () => (/* reexport */ CopyHandler),
  DefaultBlockAppender: () => (/* reexport */ DefaultBlockAppender),
  DocumentBar: () => (/* reexport */ DocumentBar),
  DocumentOutline: () => (/* reexport */ DocumentOutline),
  DocumentOutlineCheck: () => (/* reexport */ DocumentOutlineCheck),
  EditorHistoryRedo: () => (/* reexport */ editor_history_redo),
  EditorHistoryUndo: () => (/* reexport */ editor_history_undo),
  EditorKeyboardShortcuts: () => (/* reexport */ EditorKeyboardShortcuts),
  EditorKeyboardShortcutsRegister: () => (/* reexport */ register_shortcuts),
  EditorNotices: () => (/* reexport */ editor_notices),
  EditorProvider: () => (/* reexport */ provider),
  EditorSnackbars: () => (/* reexport */ EditorSnackbars),
  EntitiesSavedStates: () => (/* reexport */ EntitiesSavedStates),
  ErrorBoundary: () => (/* reexport */ error_boundary),
  FontSizePicker: () => (/* reexport */ FontSizePicker),
  InnerBlocks: () => (/* reexport */ InnerBlocks),
  Inserter: () => (/* reexport */ Inserter),
  InspectorAdvancedControls: () => (/* reexport */ InspectorAdvancedControls),
  InspectorControls: () => (/* reexport */ InspectorControls),
  LocalAutosaveMonitor: () => (/* reexport */ local_autosave_monitor),
  MediaPlaceholder: () => (/* reexport */ MediaPlaceholder),
  MediaUpload: () => (/* reexport */ MediaUpload),
  MediaUploadCheck: () => (/* reexport */ MediaUploadCheck),
  MultiSelectScrollIntoView: () => (/* reexport */ MultiSelectScrollIntoView),
  NavigableToolbar: () => (/* reexport */ NavigableToolbar),
  ObserveTyping: () => (/* reexport */ ObserveTyping),
  PageAttributesCheck: () => (/* reexport */ page_attributes_check),
  PageAttributesOrder: () => (/* reexport */ PageAttributesOrderWithChecks),
  PageAttributesPanel: () => (/* reexport */ PageAttributesPanel),
  PageAttributesParent: () => (/* reexport */ page_attributes_parent),
  PageTemplate: () => (/* reexport */ classic_theme),
  PanelColorSettings: () => (/* reexport */ PanelColorSettings),
  PlainText: () => (/* reexport */ PlainText),
  PluginBlockSettingsMenuItem: () => (/* reexport */ plugin_block_settings_menu_item),
  PluginDocumentSettingPanel: () => (/* reexport */ plugin_document_setting_panel),
  PluginMoreMenuItem: () => (/* reexport */ plugin_more_menu_item),
  PluginPostPublishPanel: () => (/* reexport */ plugin_post_publish_panel),
  PluginPostStatusInfo: () => (/* reexport */ plugin_post_status_info),
  PluginPrePublishPanel: () => (/* reexport */ plugin_pre_publish_panel),
  PluginSidebar: () => (/* reexport */ PluginSidebar),
  PluginSidebarMoreMenuItem: () => (/* reexport */ PluginSidebarMoreMenuItem),
  PostAuthor: () => (/* reexport */ post_author),
  PostAuthorCheck: () => (/* reexport */ PostAuthorCheck),
  PostAuthorPanel: () => (/* reexport */ panel),
  PostComments: () => (/* reexport */ post_comments),
  PostDiscussionPanel: () => (/* reexport */ PostDiscussionPanel),
  PostExcerpt: () => (/* reexport */ PostExcerpt),
  PostExcerptCheck: () => (/* reexport */ post_excerpt_check),
  PostExcerptPanel: () => (/* reexport */ PostExcerptPanel),
  PostFeaturedImage: () => (/* reexport */ post_featured_image),
  PostFeaturedImageCheck: () => (/* reexport */ post_featured_image_check),
  PostFeaturedImagePanel: () => (/* reexport */ PostFeaturedImagePanel),
  PostFormat: () => (/* reexport */ PostFormat),
  PostFormatCheck: () => (/* reexport */ post_format_check),
  PostLastRevision: () => (/* reexport */ post_last_revision),
  PostLastRevisionCheck: () => (/* reexport */ post_last_revision_check),
  PostLastRevisionPanel: () => (/* reexport */ post_last_revision_panel),
  PostLockedModal: () => (/* reexport */ PostLockedModal),
  PostPendingStatus: () => (/* reexport */ post_pending_status),
  PostPendingStatusCheck: () => (/* reexport */ post_pending_status_check),
  PostPingbacks: () => (/* reexport */ post_pingbacks),
  PostPreviewButton: () => (/* reexport */ PostPreviewButton),
  PostPublishButton: () => (/* reexport */ post_publish_button),
  PostPublishButtonLabel: () => (/* reexport */ PublishButtonLabel),
  PostPublishPanel: () => (/* reexport */ post_publish_panel),
  PostSavedState: () => (/* reexport */ PostSavedState),
  PostSchedule: () => (/* reexport */ PostSchedule),
  PostScheduleCheck: () => (/* reexport */ PostScheduleCheck),
  PostScheduleLabel: () => (/* reexport */ PostScheduleLabel),
  PostSchedulePanel: () => (/* reexport */ PostSchedulePanel),
  PostSlug: () => (/* reexport */ PostSlug),
  PostSlugCheck: () => (/* reexport */ PostSlugCheck),
  PostSticky: () => (/* reexport */ PostSticky),
  PostStickyCheck: () => (/* reexport */ PostStickyCheck),
  PostSwitchToDraftButton: () => (/* reexport */ PostSwitchToDraftButton),
  PostSyncStatus: () => (/* reexport */ PostSyncStatus),
  PostTaxonomies: () => (/* reexport */ post_taxonomies),
  PostTaxonomiesCheck: () => (/* reexport */ PostTaxonomiesCheck),
  PostTaxonomiesFlatTermSelector: () => (/* reexport */ FlatTermSelector),
  PostTaxonomiesHierarchicalTermSelector: () => (/* reexport */ HierarchicalTermSelector),
  PostTaxonomiesPanel: () => (/* reexport */ post_taxonomies_panel),
  PostTemplatePanel: () => (/* reexport */ PostTemplatePanel),
  PostTextEditor: () => (/* reexport */ PostTextEditor),
  PostTitle: () => (/* reexport */ post_title),
  PostTitleRaw: () => (/* reexport */ post_title_raw),
  PostTrash: () => (/* reexport */ PostTrash),
  PostTrashCheck: () => (/* reexport */ PostTrashCheck),
  PostTypeSupportCheck: () => (/* reexport */ post_type_support_check),
  PostURL: () => (/* reexport */ PostURL),
  PostURLCheck: () => (/* reexport */ PostURLCheck),
  PostURLLabel: () => (/* reexport */ PostURLLabel),
  PostURLPanel: () => (/* reexport */ PostURLPanel),
  PostVisibility: () => (/* reexport */ PostVisibility),
  PostVisibilityCheck: () => (/* reexport */ PostVisibilityCheck),
  PostVisibilityLabel: () => (/* reexport */ PostVisibilityLabel),
  RichText: () => (/* reexport */ RichText),
  RichTextShortcut: () => (/* reexport */ RichTextShortcut),
  RichTextToolbarButton: () => (/* reexport */ RichTextToolbarButton),
  ServerSideRender: () => (/* reexport */ (external_wp_serverSideRender_default())),
  SkipToSelectedBlock: () => (/* reexport */ SkipToSelectedBlock),
  TableOfContents: () => (/* reexport */ table_of_contents),
  TextEditorGlobalKeyboardShortcuts: () => (/* reexport */ TextEditorGlobalKeyboardShortcuts),
  ThemeSupportCheck: () => (/* reexport */ ThemeSupportCheck),
  TimeToRead: () => (/* reexport */ TimeToRead),
  URLInput: () => (/* reexport */ URLInput),
  URLInputButton: () => (/* reexport */ URLInputButton),
  URLPopover: () => (/* reexport */ URLPopover),
  UnsavedChangesWarning: () => (/* reexport */ UnsavedChangesWarning),
  VisualEditorGlobalKeyboardShortcuts: () => (/* reexport */ VisualEditorGlobalKeyboardShortcuts),
  Warning: () => (/* reexport */ Warning),
  WordCount: () => (/* reexport */ WordCount),
  WritingFlow: () => (/* reexport */ WritingFlow),
  __unstableRichTextInputEvent: () => (/* reexport */ __unstableRichTextInputEvent),
  cleanForSlug: () => (/* reexport */ cleanForSlug),
  createCustomColorsHOC: () => (/* reexport */ createCustomColorsHOC),
  getColorClassName: () => (/* reexport */ getColorClassName),
  getColorObjectByAttributeValues: () => (/* reexport */ getColorObjectByAttributeValues),
  getColorObjectByColorValue: () => (/* reexport */ getColorObjectByColorValue),
  getFontSize: () => (/* reexport */ getFontSize),
  getFontSizeClass: () => (/* reexport */ getFontSizeClass),
  getTemplatePartIcon: () => (/* reexport */ getTemplatePartIcon),
  mediaUpload: () => (/* reexport */ mediaUpload),
  privateApis: () => (/* reexport */ privateApis),
  store: () => (/* reexport */ store_store),
  storeConfig: () => (/* reexport */ storeConfig),
  transformStyles: () => (/* reexport */ external_wp_blockEditor_namespaceObject.transformStyles),
  useEntitiesSavedStatesIsDirty: () => (/* reexport */ useIsDirty),
  usePostScheduleLabel: () => (/* reexport */ usePostScheduleLabel),
  usePostURLLabel: () => (/* reexport */ usePostURLLabel),
  usePostVisibilityLabel: () => (/* reexport */ usePostVisibilityLabel),
  userAutocompleter: () => (/* reexport */ user),
  withColorContext: () => (/* reexport */ withColorContext),
  withColors: () => (/* reexport */ withColors),
  withFontSizes: () => (/* reexport */ withFontSizes)
});

// NAMESPACE OBJECT: ./node_modules/@wordpress/editor/build-module/store/selectors.js
var selectors_namespaceObject = {};
__webpack_require__.r(selectors_namespaceObject);
__webpack_require__.d(selectors_namespaceObject, {
  __experimentalGetDefaultTemplatePartAreas: () => (__experimentalGetDefaultTemplatePartAreas),
  __experimentalGetDefaultTemplateType: () => (__experimentalGetDefaultTemplateType),
  __experimentalGetDefaultTemplateTypes: () => (__experimentalGetDefaultTemplateTypes),
  __experimentalGetTemplateInfo: () => (__experimentalGetTemplateInfo),
  __unstableIsEditorReady: () => (__unstableIsEditorReady),
  canInsertBlockType: () => (canInsertBlockType),
  canUserUseUnfilteredHTML: () => (canUserUseUnfilteredHTML),
  didPostSaveRequestFail: () => (didPostSaveRequestFail),
  didPostSaveRequestSucceed: () => (didPostSaveRequestSucceed),
  getActivePostLock: () => (getActivePostLock),
  getAdjacentBlockClientId: () => (getAdjacentBlockClientId),
  getAutosaveAttribute: () => (getAutosaveAttribute),
  getBlock: () => (getBlock),
  getBlockAttributes: () => (getBlockAttributes),
  getBlockCount: () => (getBlockCount),
  getBlockHierarchyRootClientId: () => (getBlockHierarchyRootClientId),
  getBlockIndex: () => (getBlockIndex),
  getBlockInsertionPoint: () => (getBlockInsertionPoint),
  getBlockListSettings: () => (getBlockListSettings),
  getBlockMode: () => (getBlockMode),
  getBlockName: () => (getBlockName),
  getBlockOrder: () => (getBlockOrder),
  getBlockRootClientId: () => (getBlockRootClientId),
  getBlockSelectionEnd: () => (getBlockSelectionEnd),
  getBlockSelectionStart: () => (getBlockSelectionStart),
  getBlocks: () => (getBlocks),
  getBlocksByClientId: () => (getBlocksByClientId),
  getClientIdsOfDescendants: () => (getClientIdsOfDescendants),
  getClientIdsWithDescendants: () => (getClientIdsWithDescendants),
  getCurrentPost: () => (getCurrentPost),
  getCurrentPostAttribute: () => (getCurrentPostAttribute),
  getCurrentPostId: () => (getCurrentPostId),
  getCurrentPostLastRevisionId: () => (getCurrentPostLastRevisionId),
  getCurrentPostRevisionsCount: () => (getCurrentPostRevisionsCount),
  getCurrentPostType: () => (getCurrentPostType),
  getCurrentTemplateId: () => (getCurrentTemplateId),
  getDeviceType: () => (getDeviceType),
  getEditedPostAttribute: () => (getEditedPostAttribute),
  getEditedPostContent: () => (getEditedPostContent),
  getEditedPostPreviewLink: () => (getEditedPostPreviewLink),
  getEditedPostSlug: () => (getEditedPostSlug),
  getEditedPostVisibility: () => (getEditedPostVisibility),
  getEditorBlocks: () => (getEditorBlocks),
  getEditorMode: () => (getEditorMode),
  getEditorSelection: () => (getEditorSelection),
  getEditorSelectionEnd: () => (getEditorSelectionEnd),
  getEditorSelectionStart: () => (getEditorSelectionStart),
  getEditorSettings: () => (getEditorSettings),
  getFirstMultiSelectedBlockClientId: () => (getFirstMultiSelectedBlockClientId),
  getGlobalBlockCount: () => (getGlobalBlockCount),
  getInserterItems: () => (getInserterItems),
  getLastMultiSelectedBlockClientId: () => (getLastMultiSelectedBlockClientId),
  getMultiSelectedBlockClientIds: () => (getMultiSelectedBlockClientIds),
  getMultiSelectedBlocks: () => (getMultiSelectedBlocks),
  getMultiSelectedBlocksEndClientId: () => (getMultiSelectedBlocksEndClientId),
  getMultiSelectedBlocksStartClientId: () => (getMultiSelectedBlocksStartClientId),
  getNextBlockClientId: () => (getNextBlockClientId),
  getPermalink: () => (getPermalink),
  getPermalinkParts: () => (getPermalinkParts),
  getPostEdits: () => (getPostEdits),
  getPostLockUser: () => (getPostLockUser),
  getPostTypeLabel: () => (getPostTypeLabel),
  getPreviousBlockClientId: () => (getPreviousBlockClientId),
  getRenderingMode: () => (getRenderingMode),
  getSelectedBlock: () => (getSelectedBlock),
  getSelectedBlockClientId: () => (getSelectedBlockClientId),
  getSelectedBlockCount: () => (getSelectedBlockCount),
  getSelectedBlocksInitialCaretPosition: () => (getSelectedBlocksInitialCaretPosition),
  getStateBeforeOptimisticTransaction: () => (getStateBeforeOptimisticTransaction),
  getSuggestedPostFormat: () => (getSuggestedPostFormat),
  getTemplate: () => (getTemplate),
  getTemplateLock: () => (getTemplateLock),
  hasChangedContent: () => (hasChangedContent),
  hasEditorRedo: () => (hasEditorRedo),
  hasEditorUndo: () => (hasEditorUndo),
  hasInserterItems: () => (hasInserterItems),
  hasMultiSelection: () => (hasMultiSelection),
  hasNonPostEntityChanges: () => (hasNonPostEntityChanges),
  hasSelectedBlock: () => (hasSelectedBlock),
  hasSelectedInnerBlock: () => (hasSelectedInnerBlock),
  inSomeHistory: () => (inSomeHistory),
  isAncestorMultiSelected: () => (isAncestorMultiSelected),
  isAutosavingPost: () => (isAutosavingPost),
  isBlockInsertionPointVisible: () => (isBlockInsertionPointVisible),
  isBlockMultiSelected: () => (isBlockMultiSelected),
  isBlockSelected: () => (isBlockSelected),
  isBlockValid: () => (isBlockValid),
  isBlockWithinSelection: () => (isBlockWithinSelection),
  isCaretWithinFormattedText: () => (isCaretWithinFormattedText),
  isCleanNewPost: () => (isCleanNewPost),
  isCurrentPostPending: () => (isCurrentPostPending),
  isCurrentPostPublished: () => (isCurrentPostPublished),
  isCurrentPostScheduled: () => (isCurrentPostScheduled),
  isDeletingPost: () => (isDeletingPost),
  isEditedPostAutosaveable: () => (isEditedPostAutosaveable),
  isEditedPostBeingScheduled: () => (isEditedPostBeingScheduled),
  isEditedPostDateFloating: () => (isEditedPostDateFloating),
  isEditedPostDirty: () => (isEditedPostDirty),
  isEditedPostEmpty: () => (isEditedPostEmpty),
  isEditedPostNew: () => (isEditedPostNew),
  isEditedPostPublishable: () => (isEditedPostPublishable),
  isEditedPostSaveable: () => (isEditedPostSaveable),
  isEditorPanelEnabled: () => (isEditorPanelEnabled),
  isEditorPanelOpened: () => (isEditorPanelOpened),
  isEditorPanelRemoved: () => (isEditorPanelRemoved),
  isFirstMultiSelectedBlock: () => (isFirstMultiSelectedBlock),
  isInserterOpened: () => (isInserterOpened),
  isListViewOpened: () => (isListViewOpened),
  isMultiSelecting: () => (isMultiSelecting),
  isPermalinkEditable: () => (isPermalinkEditable),
  isPostAutosavingLocked: () => (isPostAutosavingLocked),
  isPostLockTakeover: () => (isPostLockTakeover),
  isPostLocked: () => (isPostLocked),
  isPostSavingLocked: () => (isPostSavingLocked),
  isPreviewingPost: () => (isPreviewingPost),
  isPublishSidebarEnabled: () => (isPublishSidebarEnabled),
  isPublishSidebarOpened: () => (isPublishSidebarOpened),
  isPublishingPost: () => (isPublishingPost),
  isSavingNonPostEntityChanges: () => (isSavingNonPostEntityChanges),
  isSavingPost: () => (isSavingPost),
  isSelectionEnabled: () => (isSelectionEnabled),
  isTyping: () => (isTyping),
  isValidTemplate: () => (isValidTemplate)
});

// NAMESPACE OBJECT: ./node_modules/@wordpress/editor/build-module/store/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, {
  __experimentalTearDownEditor: () => (__experimentalTearDownEditor),
  __unstableSaveForPreview: () => (__unstableSaveForPreview),
  autosave: () => (autosave),
  clearSelectedBlock: () => (clearSelectedBlock),
  closePublishSidebar: () => (closePublishSidebar),
  createUndoLevel: () => (createUndoLevel),
  disablePublishSidebar: () => (disablePublishSidebar),
  editPost: () => (editPost),
  enablePublishSidebar: () => (enablePublishSidebar),
  enterFormattedText: () => (enterFormattedText),
  exitFormattedText: () => (exitFormattedText),
  hideInsertionPoint: () => (hideInsertionPoint),
  insertBlock: () => (insertBlock),
  insertBlocks: () => (insertBlocks),
  insertDefaultBlock: () => (insertDefaultBlock),
  lockPostAutosaving: () => (lockPostAutosaving),
  lockPostSaving: () => (lockPostSaving),
  mergeBlocks: () => (mergeBlocks),
  moveBlockToPosition: () => (moveBlockToPosition),
  moveBlocksDown: () => (moveBlocksDown),
  moveBlocksUp: () => (moveBlocksUp),
  multiSelect: () => (multiSelect),
  openPublishSidebar: () => (openPublishSidebar),
  receiveBlocks: () => (receiveBlocks),
  redo: () => (redo),
  refreshPost: () => (refreshPost),
  removeBlock: () => (removeBlock),
  removeBlocks: () => (removeBlocks),
  removeEditorPanel: () => (removeEditorPanel),
  replaceBlock: () => (replaceBlock),
  replaceBlocks: () => (replaceBlocks),
  resetBlocks: () => (resetBlocks),
  resetEditorBlocks: () => (resetEditorBlocks),
  resetPost: () => (resetPost),
  savePost: () => (savePost),
  selectBlock: () => (selectBlock),
  setDeviceType: () => (setDeviceType),
  setEditedPost: () => (setEditedPost),
  setIsInserterOpened: () => (setIsInserterOpened),
  setIsListViewOpened: () => (setIsListViewOpened),
  setRenderingMode: () => (setRenderingMode),
  setTemplateValidity: () => (setTemplateValidity),
  setupEditor: () => (setupEditor),
  setupEditorState: () => (setupEditorState),
  showInsertionPoint: () => (showInsertionPoint),
  startMultiSelect: () => (startMultiSelect),
  startTyping: () => (startTyping),
  stopMultiSelect: () => (stopMultiSelect),
  stopTyping: () => (stopTyping),
  switchEditorMode: () => (switchEditorMode),
  synchronizeTemplate: () => (synchronizeTemplate),
  toggleBlockMode: () => (toggleBlockMode),
  toggleDistractionFree: () => (toggleDistractionFree),
  toggleEditorPanelEnabled: () => (toggleEditorPanelEnabled),
  toggleEditorPanelOpened: () => (toggleEditorPanelOpened),
  togglePublishSidebar: () => (togglePublishSidebar),
  toggleSelection: () => (toggleSelection),
  trashPost: () => (trashPost),
  undo: () => (undo),
  unlockPostAutosaving: () => (unlockPostAutosaving),
  unlockPostSaving: () => (unlockPostSaving),
  updateBlock: () => (updateBlock),
  updateBlockAttributes: () => (updateBlockAttributes),
  updateBlockListSettings: () => (updateBlockListSettings),
  updateEditorSettings: () => (updateEditorSettings),
  updatePost: () => (updatePost),
  updatePostLock: () => (updatePostLock)
});

// NAMESPACE OBJECT: ./node_modules/@wordpress/editor/build-module/store/private-actions.js
var private_actions_namespaceObject = {};
__webpack_require__.r(private_actions_namespaceObject);
__webpack_require__.d(private_actions_namespaceObject, {
  createTemplate: () => (createTemplate),
  hideBlockTypes: () => (hideBlockTypes),
  removeTemplates: () => (removeTemplates),
  revertTemplate: () => (revertTemplate),
  saveDirtyEntities: () => (saveDirtyEntities),
  setCurrentTemplateId: () => (setCurrentTemplateId),
  showBlockTypes: () => (showBlockTypes)
});

// NAMESPACE OBJECT: ./node_modules/@wordpress/editor/build-module/store/private-selectors.js
var private_selectors_namespaceObject = {};
__webpack_require__.r(private_selectors_namespaceObject);
__webpack_require__.d(private_selectors_namespaceObject, {
  getCurrentTemplateTemplateParts: () => (getCurrentTemplateTemplateParts),
  getInserterSidebarToggleRef: () => (getInserterSidebarToggleRef),
  getInsertionPoint: () => (getInsertionPoint),
  getListViewToggleRef: () => (getListViewToggleRef),
  getPostIcon: () => (getPostIcon),
  hasPostMetaChanges: () => (hasPostMetaChanges)
});

// NAMESPACE OBJECT: ./node_modules/@wordpress/interface/build-module/store/actions.js
var store_actions_namespaceObject = {};
__webpack_require__.r(store_actions_namespaceObject);
__webpack_require__.d(store_actions_namespaceObject, {
  closeModal: () => (closeModal),
  disableComplementaryArea: () => (disableComplementaryArea),
  enableComplementaryArea: () => (enableComplementaryArea),
  openModal: () => (openModal),
  pinItem: () => (pinItem),
  setDefaultComplementaryArea: () => (setDefaultComplementaryArea),
  setFeatureDefaults: () => (setFeatureDefaults),
  setFeatureValue: () => (setFeatureValue),
  toggleFeature: () => (toggleFeature),
  unpinItem: () => (unpinItem)
});

// NAMESPACE OBJECT: ./node_modules/@wordpress/interface/build-module/store/selectors.js
var store_selectors_namespaceObject = {};
__webpack_require__.r(store_selectors_namespaceObject);
__webpack_require__.d(store_selectors_namespaceObject, {
  getActiveComplementaryArea: () => (getActiveComplementaryArea),
  isComplementaryAreaLoading: () => (isComplementaryAreaLoading),
  isFeatureActive: () => (isFeatureActive),
  isItemPinned: () => (isItemPinned),
  isModalActive: () => (isModalActive)
});

// NAMESPACE OBJECT: ./node_modules/@wordpress/interface/build-module/index.js
var build_module_namespaceObject = {};
__webpack_require__.r(build_module_namespaceObject);
__webpack_require__.d(build_module_namespaceObject, {
  ActionItem: () => (action_item),
  ComplementaryArea: () => (complementary_area),
  ComplementaryAreaMoreMenuItem: () => (ComplementaryAreaMoreMenuItem),
  FullscreenMode: () => (fullscreen_mode),
  InterfaceSkeleton: () => (interface_skeleton),
  NavigableRegion: () => (NavigableRegion),
  PinnedItems: () => (pinned_items),
  store: () => (store)
});

;// CONCATENATED MODULE: external ["wp","blocks"]
const external_wp_blocks_namespaceObject = window["wp"]["blocks"];
;// CONCATENATED MODULE: external ["wp","data"]
const external_wp_data_namespaceObject = window["wp"]["data"];
;// CONCATENATED MODULE: external ["wp","privateApis"]
const external_wp_privateApis_namespaceObject = window["wp"]["privateApis"];
;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/lock-unlock.js
/**
 * WordPress dependencies
 */

const {
  lock,
  unlock
} = (0,external_wp_privateApis_namespaceObject.__dangerousOptInToUnstableAPIsOnlyForCoreModules)('I know using unstable features means my theme or plugin will inevitably break in the next version of WordPress.', '@wordpress/editor');

;// CONCATENATED MODULE: external ["wp","i18n"]
const external_wp_i18n_namespaceObject = window["wp"]["i18n"];
;// CONCATENATED MODULE: external ["wp","blockEditor"]
const external_wp_blockEditor_namespaceObject = window["wp"]["blockEditor"];
;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/bindings/pattern-overrides.js
/**
 * WordPress dependencies
 */


const CONTENT = 'content';
/* harmony default export */ const pattern_overrides = ({
  name: 'core/pattern-overrides',
  label: (0,external_wp_i18n_namespaceObject._x)('Pattern Overrides', 'block bindings source'),
  getValue({
    registry,
    clientId,
    attributeName
  }) {
    const {
      getBlockAttributes,
      getBlockParentsByBlockName
    } = registry.select(external_wp_blockEditor_namespaceObject.store);
    const currentBlockAttributes = getBlockAttributes(clientId);
    const [patternClientId] = getBlockParentsByBlockName(clientId, 'core/block', true);
    const overridableValue = getBlockAttributes(patternClientId)?.[CONTENT]?.[currentBlockAttributes?.metadata?.name]?.[attributeName];

    // If there is no pattern client ID, or it is not overwritten, return the default value.
    if (!patternClientId || overridableValue === undefined) {
      return currentBlockAttributes[attributeName];
    }
    return overridableValue === '' ? undefined : overridableValue;
  },
  setValues({
    registry,
    clientId,
    attributes
  }) {
    const {
      getBlockAttributes,
      getBlockParentsByBlockName,
      getBlocks
    } = registry.select(external_wp_blockEditor_namespaceObject.store);
    const currentBlockAttributes = getBlockAttributes(clientId);
    const blockName = currentBlockAttributes?.metadata?.name;
    if (!blockName) {
      return;
    }
    const [patternClientId] = getBlockParentsByBlockName(clientId, 'core/block', true);

    // If there is no pattern client ID, sync blocks with the same name and same attributes.
    if (!patternClientId) {
      const syncBlocksWithSameName = blocks => {
        for (const block of blocks) {
          if (block.attributes?.metadata?.name === blockName) {
            registry.dispatch(external_wp_blockEditor_namespaceObject.store).updateBlockAttributes(block.clientId, attributes);
          }
          syncBlocksWithSameName(block.innerBlocks);
        }
      };
      syncBlocksWithSameName(getBlocks());
      return;
    }
    const currentBindingValue = getBlockAttributes(patternClientId)?.[CONTENT];
    registry.dispatch(external_wp_blockEditor_namespaceObject.store).updateBlockAttributes(patternClientId, {
      [CONTENT]: {
        ...currentBindingValue,
        [blockName]: {
          ...currentBindingValue?.[blockName],
          ...Object.entries(attributes).reduce((acc, [key, value]) => {
            // TODO: We need a way to represent `undefined` in the serialized overrides.
            // Also see: https://github.com/WordPress/gutenberg/pull/57249#discussion_r1452987871
            // We use an empty string to represent undefined for now until
            // we support a richer format for overrides and the block bindings API.
            acc[key] = value === undefined ? '' : value;
            return acc;
          }, {})
        }
      }
    });
  },
  canUserEditValue: () => true
});

;// CONCATENATED MODULE: external ["wp","coreData"]
const external_wp_coreData_namespaceObject = window["wp"]["coreData"];
;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/store/defaults.js
/**
 * WordPress dependencies
 */


/**
 * The default post editor settings.
 *
 * @property {boolean|Array} allowedBlockTypes     Allowed block types
 * @property {boolean}       richEditingEnabled    Whether rich editing is enabled or not
 * @property {boolean}       codeEditingEnabled    Whether code editing is enabled or not
 * @property {boolean}       fontLibraryEnabled    Whether the font library is enabled or not.
 * @property {boolean}       enableCustomFields    Whether the WordPress custom fields are enabled or not.
 *                                                 true  = the user has opted to show the Custom Fields panel at the bottom of the editor.
 *                                                 false = the user has opted to hide the Custom Fields panel at the bottom of the editor.
 *                                                 undefined = the current environment does not support Custom Fields, so the option toggle in Preferences -> Panels to enable the Custom Fields panel is not displayed.
 * @property {number}        autosaveInterval      How often in seconds the post will be auto-saved via the REST API.
 * @property {number}        localAutosaveInterval How often in seconds the post will be backed up to sessionStorage.
 * @property {Array?}        availableTemplates    The available post templates
 * @property {boolean}       disablePostFormats    Whether or not the post formats are disabled
 * @property {Array?}        allowedMimeTypes      List of allowed mime types and file extensions
 * @property {number}        maxUploadFileSize     Maximum upload file size
 * @property {boolean}       supportsLayout        Whether the editor supports layouts.
 */
const EDITOR_SETTINGS_DEFAULTS = {
  ...external_wp_blockEditor_namespaceObject.SETTINGS_DEFAULTS,
  richEditingEnabled: true,
  codeEditingEnabled: true,
  fontLibraryEnabled: true,
  enableCustomFields: undefined,
  defaultRenderingMode: 'post-only'
};

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/store/reducer.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/**
 * Returns a post attribute value, flattening nested rendered content using its
 * raw value in place of its original object form.
 *
 * @param {*} value Original value.
 *
 * @return {*} Raw value.
 */
function getPostRawValue(value) {
  if (value && 'object' === typeof value && 'raw' in value) {
    return value.raw;
  }
  return value;
}

/**
 * Returns true if the two object arguments have the same keys, or false
 * otherwise.
 *
 * @param {Object} a First object.
 * @param {Object} b Second object.
 *
 * @return {boolean} Whether the two objects have the same keys.
 */
function hasSameKeys(a, b) {
  const keysA = Object.keys(a).sort();
  const keysB = Object.keys(b).sort();
  return keysA.length === keysB.length && keysA.every((key, index) => keysB[index] === key);
}

/**
 * Returns true if, given the currently dispatching action and the previously
 * dispatched action, the two actions are editing the same post property, or
 * false otherwise.
 *
 * @param {Object} action         Currently dispatching action.
 * @param {Object} previousAction Previously dispatched action.
 *
 * @return {boolean} Whether actions are updating the same post property.
 */
function isUpdatingSamePostProperty(action, previousAction) {
  return action.type === 'EDIT_POST' && hasSameKeys(action.edits, previousAction.edits);
}

/**
 * Returns true if, given the currently dispatching action and the previously
 * dispatched action, the two actions are modifying the same property such that
 * undo history should be batched.
 *
 * @param {Object} action         Currently dispatching action.
 * @param {Object} previousAction Previously dispatched action.
 *
 * @return {boolean} Whether to overwrite present state.
 */
function shouldOverwriteState(action, previousAction) {
  if (action.type === 'RESET_EDITOR_BLOCKS') {
    return !action.shouldCreateUndoLevel;
  }
  if (!previousAction || action.type !== previousAction.type) {
    return false;
  }
  return isUpdatingSamePostProperty(action, previousAction);
}
function postId(state = null, action) {
  switch (action.type) {
    case 'SET_EDITED_POST':
      return action.postId;
  }
  return state;
}
function templateId(state = null, action) {
  switch (action.type) {
    case 'SET_CURRENT_TEMPLATE_ID':
      return action.id;
  }
  return state;
}
function postType(state = null, action) {
  switch (action.type) {
    case 'SET_EDITED_POST':
      return action.postType;
  }
  return state;
}

/**
 * Reducer returning whether the post blocks match the defined template or not.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {boolean} Updated state.
 */
function template(state = {
  isValid: true
}, action) {
  switch (action.type) {
    case 'SET_TEMPLATE_VALIDITY':
      return {
        ...state,
        isValid: action.isValid
      };
  }
  return state;
}

/**
 * Reducer returning current network request state (whether a request to
 * the WP REST API is in progress, successful, or failed).
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */
function saving(state = {}, action) {
  switch (action.type) {
    case 'REQUEST_POST_UPDATE_START':
    case 'REQUEST_POST_UPDATE_FINISH':
      return {
        pending: action.type === 'REQUEST_POST_UPDATE_START',
        options: action.options || {}
      };
  }
  return state;
}

/**
 * Reducer returning deleting post request state.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */
function deleting(state = {}, action) {
  switch (action.type) {
    case 'REQUEST_POST_DELETE_START':
    case 'REQUEST_POST_DELETE_FINISH':
      return {
        pending: action.type === 'REQUEST_POST_DELETE_START'
      };
  }
  return state;
}

/**
 * Post Lock State.
 *
 * @typedef {Object} PostLockState
 *
 * @property {boolean}  isLocked       Whether the post is locked.
 * @property {?boolean} isTakeover     Whether the post editing has been taken over.
 * @property {?boolean} activePostLock Active post lock value.
 * @property {?Object}  user           User that took over the post.
 */

/**
 * Reducer returning the post lock status.
 *
 * @param {PostLockState} state  Current state.
 * @param {Object}        action Dispatched action.
 *
 * @return {PostLockState} Updated state.
 */
function postLock(state = {
  isLocked: false
}, action) {
  switch (action.type) {
    case 'UPDATE_POST_LOCK':
      return action.lock;
  }
  return state;
}

/**
 * Post saving lock.
 *
 * When post saving is locked, the post cannot be published or updated.
 *
 * @param {PostLockState} state  Current state.
 * @param {Object}        action Dispatched action.
 *
 * @return {PostLockState} Updated state.
 */
function postSavingLock(state = {}, action) {
  switch (action.type) {
    case 'LOCK_POST_SAVING':
      return {
        ...state,
        [action.lockName]: true
      };
    case 'UNLOCK_POST_SAVING':
      {
        const {
          [action.lockName]: removedLockName,
          ...restState
        } = state;
        return restState;
      }
  }
  return state;
}

/**
 * Post autosaving lock.
 *
 * When post autosaving is locked, the post will not autosave.
 *
 * @param {PostLockState} state  Current state.
 * @param {Object}        action Dispatched action.
 *
 * @return {PostLockState} Updated state.
 */
function postAutosavingLock(state = {}, action) {
  switch (action.type) {
    case 'LOCK_POST_AUTOSAVING':
      return {
        ...state,
        [action.lockName]: true
      };
    case 'UNLOCK_POST_AUTOSAVING':
      {
        const {
          [action.lockName]: removedLockName,
          ...restState
        } = state;
        return restState;
      }
  }
  return state;
}

/**
 * Reducer returning the post editor setting.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */
function editorSettings(state = EDITOR_SETTINGS_DEFAULTS, action) {
  switch (action.type) {
    case 'UPDATE_EDITOR_SETTINGS':
      return {
        ...state,
        ...action.settings
      };
  }
  return state;
}
function renderingMode(state = 'post-only', action) {
  switch (action.type) {
    case 'SET_RENDERING_MODE':
      return action.mode;
  }
  return state;
}

/**
 * Reducer returning the editing canvas device type.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */
function deviceType(state = 'Desktop', action) {
  switch (action.type) {
    case 'SET_DEVICE_TYPE':
      return action.deviceType;
  }
  return state;
}

/**
 * Reducer storing the list of all programmatically removed panels.
 *
 * @param {Array}  state  Current state.
 * @param {Object} action Action object.
 *
 * @return {Array} Updated state.
 */
function removedPanels(state = [], action) {
  switch (action.type) {
    case 'REMOVE_PANEL':
      if (!state.includes(action.panelName)) {
        return [...state, action.panelName];
      }
  }
  return state;
}

/**
 * Reducer to set the block inserter panel open or closed.
 *
 * Note: this reducer interacts with the list view panel reducer
 * to make sure that only one of the two panels is open at the same time.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 */
function blockInserterPanel(state = false, action) {
  switch (action.type) {
    case 'SET_IS_LIST_VIEW_OPENED':
      return action.isOpen ? false : state;
    case 'SET_IS_INSERTER_OPENED':
      return action.value;
  }
  return state;
}

/**
 * Reducer to set the list view panel open or closed.
 *
 * Note: this reducer interacts with the inserter panel reducer
 * to make sure that only one of the two panels is open at the same time.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 */
function listViewPanel(state = false, action) {
  switch (action.type) {
    case 'SET_IS_INSERTER_OPENED':
      return action.value ? false : state;
    case 'SET_IS_LIST_VIEW_OPENED':
      return action.isOpen;
  }
  return state;
}

/**
 * This reducer does nothing aside initializing a ref to the list view toggle.
 * We will have a unique ref per "editor" instance.
 *
 * @param {Object} state
 * @return {Object} Reference to the list view toggle button.
 */
function listViewToggleRef(state = {
  current: null
}) {
  return state;
}

/**
 * This reducer does nothing aside initializing a ref to the inserter sidebar toggle.
 * We will have a unique ref per "editor" instance.
 *
 * @param {Object} state
 * @return {Object} Reference to the inserter sidebar toggle button.
 */
function inserterSidebarToggleRef(state = {
  current: null
}) {
  return state;
}
function publishSidebarActive(state = false, action) {
  switch (action.type) {
    case 'OPEN_PUBLISH_SIDEBAR':
      return true;
    case 'CLOSE_PUBLISH_SIDEBAR':
      return false;
    case 'TOGGLE_PUBLISH_SIDEBAR':
      return !state;
  }
  return state;
}
/* harmony default export */ const reducer = ((0,external_wp_data_namespaceObject.combineReducers)({
  postId,
  postType,
  templateId,
  saving,
  deleting,
  postLock,
  template,
  postSavingLock,
  editorSettings,
  postAutosavingLock,
  renderingMode,
  deviceType,
  removedPanels,
  blockInserterPanel,
  inserterSidebarToggleRef,
  listViewPanel,
  listViewToggleRef,
  publishSidebarActive
}));

;// CONCATENATED MODULE: external ["wp","date"]
const external_wp_date_namespaceObject = window["wp"]["date"];
;// CONCATENATED MODULE: external ["wp","url"]
const external_wp_url_namespaceObject = window["wp"]["url"];
;// CONCATENATED MODULE: external ["wp","deprecated"]
const external_wp_deprecated_namespaceObject = window["wp"]["deprecated"];
var external_wp_deprecated_default = /*#__PURE__*/__webpack_require__.n(external_wp_deprecated_namespaceObject);
;// CONCATENATED MODULE: external ["wp","element"]
const external_wp_element_namespaceObject = window["wp"]["element"];
;// CONCATENATED MODULE: external ["wp","primitives"]
const external_wp_primitives_namespaceObject = window["wp"]["primitives"];
;// CONCATENATED MODULE: external "ReactJSXRuntime"
const external_ReactJSXRuntime_namespaceObject = window["ReactJSXRuntime"];
;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/layout.js
/**
 * WordPress dependencies
 */


const layout = /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.Path, {
    d: "M18 5.5H6a.5.5 0 00-.5.5v3h13V6a.5.5 0 00-.5-.5zm.5 5H10v8h8a.5.5 0 00.5-.5v-7.5zm-10 0h-3V18a.5.5 0 00.5.5h2.5v-8zM6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"
  })
});
/* harmony default export */ const library_layout = (layout);

;// CONCATENATED MODULE: external ["wp","preferences"]
const external_wp_preferences_namespaceObject = window["wp"]["preferences"];
;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/store/constants.js
/**
 * Set of post properties for which edits should assume a merging behavior,
 * assuming an object value.
 *
 * @type {Set}
 */
const EDIT_MERGE_PROPERTIES = new Set(['meta']);

/**
 * Constant for the store module (or reducer) key.
 *
 * @type {string}
 */
const STORE_NAME = 'core/editor';
const SAVE_POST_NOTICE_ID = 'SAVE_POST_NOTICE_ID';
const TRASH_POST_NOTICE_ID = 'TRASH_POST_NOTICE_ID';
const PERMALINK_POSTNAME_REGEX = /%(?:postname|pagename)%/;
const ONE_MINUTE_IN_MS = 60 * 1000;
const AUTOSAVE_PROPERTIES = ['title', 'excerpt', 'content'];
const TEMPLATE_PART_AREA_DEFAULT_CATEGORY = 'uncategorized';
const TEMPLATE_POST_TYPE = 'wp_template';
const TEMPLATE_PART_POST_TYPE = 'wp_template_part';
const PATTERN_POST_TYPE = 'wp_block';
const NAVIGATION_POST_TYPE = 'wp_navigation';
const TEMPLATE_ORIGINS = {
  custom: 'custom',
  theme: 'theme',
  plugin: 'plugin'
};
const TEMPLATE_POST_TYPES = ['wp_template', 'wp_template_part'];
const GLOBAL_POST_TYPES = [...TEMPLATE_POST_TYPES, 'wp_block', 'wp_navigation'];

;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/header.js
/**
 * WordPress dependencies
 */


const header = /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.Path, {
    d: "M18.5 10.5H10v8h8a.5.5 0 00.5-.5v-7.5zm-10 0h-3V18a.5.5 0 00.5.5h2.5v-8zM6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"
  })
});
/* harmony default export */ const library_header = (header);

;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/footer.js
/**
 * WordPress dependencies
 */


const footer = /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.Path, {
    fillRule: "evenodd",
    d: "M18 5.5h-8v8h8.5V6a.5.5 0 00-.5-.5zm-9.5 8h-3V6a.5.5 0 01.5-.5h2.5v8zM6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"
  })
});
/* harmony default export */ const library_footer = (footer);

;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/sidebar.js
/**
 * WordPress dependencies
 */


const sidebar = /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.Path, {
    d: "M18 5.5H6a.5.5 0 00-.5.5v3h13V6a.5.5 0 00-.5-.5zm.5 5H10v8h8a.5.5 0 00.5-.5v-7.5zM6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"
  })
});
/* harmony default export */ const library_sidebar = (sidebar);

;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/symbol-filled.js
/**
 * WordPress dependencies
 */


const symbolFilled = /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.Path, {
    d: "M21.3 10.8l-5.6-5.6c-.7-.7-1.8-.7-2.5 0l-5.6 5.6c-.7.7-.7 1.8 0 2.5l5.6 5.6c.3.3.8.5 1.2.5s.9-.2 1.2-.5l5.6-5.6c.8-.7.8-1.9.1-2.5zm-17.6 1L10 5.5l-1-1-6.3 6.3c-.7.7-.7 1.8 0 2.5L9 19.5l1.1-1.1-6.3-6.3c-.2 0-.2-.2-.1-.3z"
  })
});
/* harmony default export */ const symbol_filled = (symbolFilled);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/utils/get-template-part-icon.js
/**
 * WordPress dependencies
 */

/**
 * Helper function to retrieve the corresponding icon by name.
 *
 * @param {string} iconName The name of the icon.
 *
 * @return {Object} The corresponding icon.
 */
function getTemplatePartIcon(iconName) {
  if ('header' === iconName) {
    return library_header;
  } else if ('footer' === iconName) {
    return library_footer;
  } else if ('sidebar' === iconName) {
    return library_sidebar;
  }
  return symbol_filled;
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/store/selectors.js
/**
 * WordPress dependencies
 */











/**
 * Internal dependencies
 */




/**
 * Shared reference to an empty object for cases where it is important to avoid
 * returning a new object reference on every invocation, as in a connected or
 * other pure component which performs `shouldComponentUpdate` check on props.
 * This should be used as a last resort, since the normalized data should be
 * maintained by the reducer result in state.
 */
const EMPTY_OBJECT = {};

/**
 * Returns true if any past editor history snapshots exist, or false otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether undo history exists.
 */
const hasEditorUndo = (0,external_wp_data_namespaceObject.createRegistrySelector)(select => () => {
  return select(external_wp_coreData_namespaceObject.store).hasUndo();
});

/**
 * Returns true if any future editor history snapshots exist, or false
 * otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether redo history exists.
 */
const hasEditorRedo = (0,external_wp_data_namespaceObject.createRegistrySelector)(select => () => {
  return select(external_wp_coreData_namespaceObject.store).hasRedo();
});

/**
 * Returns true if the currently edited post is yet to be saved, or false if
 * the post has been saved.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the post is new.
 */
function isEditedPostNew(state) {
  return getCurrentPost(state).status === 'auto-draft';
}

/**
 * Returns true if content includes unsaved changes, or false otherwise.
 *
 * @param {Object} state Editor state.
 *
 * @return {boolean} Whether content includes unsaved changes.
 */
function hasChangedContent(state) {
  const edits = getPostEdits(state);
  return 'content' in edits;
}

/**
 * Returns true if there are unsaved values for the current edit session, or
 * false if the editing state matches the saved or new post.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether unsaved values exist.
 */
const isEditedPostDirty = (0,external_wp_data_namespaceObject.createRegistrySelector)(select => state => {
  // Edits should contain only fields which differ from the saved post (reset
  // at initial load and save complete). Thus, a non-empty edits state can be
  // inferred to contain unsaved values.
  const postType = getCurrentPostType(state);
  const postId = getCurrentPostId(state);
  return select(external_wp_coreData_namespaceObject.store).hasEditsForEntityRecord('postType', postType, postId);
});

/**
 * Returns true if there are unsaved edits for entities other than
 * the editor's post, and false otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether there are edits or not.
 */
const hasNonPostEntityChanges = (0,external_wp_data_namespaceObject.createRegistrySelector)(select => state => {
  const dirtyEntityRecords = select(external_wp_coreData_namespaceObject.store).__experimentalGetDirtyEntityRecords();
  const {
    type,
    id
  } = getCurrentPost(state);
  return dirtyEntityRecords.some(entityRecord => entityRecord.kind !== 'postType' || entityRecord.name !== type || entityRecord.key !== id);
});

/**
 * Returns true if there are no unsaved values for the current edit session and
 * if the currently edited post is new (has never been saved before).
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether new post and unsaved values exist.
 */
function isCleanNewPost(state) {
  return !isEditedPostDirty(state) && isEditedPostNew(state);
}

/**
 * Returns the post currently being edited in its last known saved state, not
 * including unsaved edits. Returns an object containing relevant default post
 * values if the post has not yet been saved.
 *
 * @param {Object} state Global application state.
 *
 * @return {Object} Post object.
 */
const getCurrentPost = (0,external_wp_data_namespaceObject.createRegistrySelector)(select => state => {
  const postId = getCurrentPostId(state);
  const postType = getCurrentPostType(state);
  const post = select(external_wp_coreData_namespaceObject.store).getRawEntityRecord('postType', postType, postId);
  if (post) {
    return post;
  }

  // This exists for compatibility with the previous selector behavior
  // which would guarantee an object return based on the editor reducer's
  // default empty object state.
  return EMPTY_OBJECT;
});

/**
 * Returns the post type of the post currently being edited.
 *
 * @param {Object} state Global application state.
 *
 * @return {string} Post type.
 */
function getCurrentPostType(state) {
  return state.postType;
}

/**
 * Returns the ID of the post currently being edited, or null if the post has
 * not yet been saved.
 *
 * @param {Object} state Global application state.
 *
 * @return {?number} ID of current post.
 */
function getCurrentPostId(state) {
  return state.postId;
}

/**
 * Returns the template ID currently being rendered/edited
 *
 * @param {Object} state Global application state.
 *
 * @return {string?} Template ID.
 */
function getCurrentTemplateId(state) {
  return state.templateId;
}

/**
 * Returns the number of revisions of the post currently being edited.
 *
 * @param {Object} state Global application state.
 *
 * @return {number} Number of revisions.
 */
function getCurrentPostRevisionsCount(state) {
  var _getCurrentPost$_link;
  return (_getCurrentPost$_link = getCurrentPost(state)._links?.['version-history']?.[0]?.count) !== null && _getCurrentPost$_link !== void 0 ? _getCurrentPost$_link : 0;
}

/**
 * Returns the last revision ID of the post currently being edited,
 * or null if the post has no revisions.
 *
 * @param {Object} state Global application state.
 *
 * @return {?number} ID of the last revision.
 */
function getCurrentPostLastRevisionId(state) {
  var _getCurrentPost$_link2;
  return (_getCurrentPost$_link2 = getCurrentPost(state)._links?.['predecessor-version']?.[0]?.id) !== null && _getCurrentPost$_link2 !== void 0 ? _getCurrentPost$_link2 : null;
}

/**
 * Returns any post values which have been changed in the editor but not yet
 * been saved.
 *
 * @param {Object} state Global application state.
 *
 * @return {Object} Object of key value pairs comprising unsaved edits.
 */
const getPostEdits = (0,external_wp_data_namespaceObject.createRegistrySelector)(select => state => {
  const postType = getCurrentPostType(state);
  const postId = getCurrentPostId(state);
  return select(external_wp_coreData_namespaceObject.store).getEntityRecordEdits('postType', postType, postId) || EMPTY_OBJECT;
});

/**
 * Returns an attribute value of the saved post.
 *
 * @param {Object} state         Global application state.
 * @param {string} attributeName Post attribute name.
 *
 * @return {*} Post attribute value.
 */
function getCurrentPostAttribute(state, attributeName) {
  switch (attributeName) {
    case 'type':
      return getCurrentPostType(state);
    case 'id':
      return getCurrentPostId(state);
    default:
      const post = getCurrentPost(state);
      if (!post.hasOwnProperty(attributeName)) {
        break;
      }
      return getPostRawValue(post[attributeName]);
  }
}

/**
 * Returns a single attribute of the post being edited, preferring the unsaved
 * edit if one exists, but merging with the attribute value for the last known
 * saved state of the post (this is needed for some nested attributes like meta).
 *
 * @param {Object} state         Global application state.
 * @param {string} attributeName Post attribute name.
 *
 * @return {*} Post attribute value.
 */
const getNestedEditedPostProperty = (0,external_wp_data_namespaceObject.createSelector)((state, attributeName) => {
  const edits = getPostEdits(state);
  if (!edits.hasOwnProperty(attributeName)) {
    return getCurrentPostAttribute(state, attributeName);
  }
  return {
    ...getCurrentPostAttribute(state, attributeName),
    ...edits[attributeName]
  };
}, (state, attributeName) => [getCurrentPostAttribute(state, attributeName), getPostEdits(state)[attributeName]]);

/**
 * Returns a single attribute of the post being edited, preferring the unsaved
 * edit if one exists, but falling back to the attribute for the last known
 * saved state of the post.
 *
 * @param {Object} state         Global application state.
 * @param {string} attributeName Post attribute name.
 *
 * @return {*} Post attribute value.
 */
function getEditedPostAttribute(state, attributeName) {
  // Special cases.
  switch (attributeName) {
    case 'content':
      return getEditedPostContent(state);
  }

  // Fall back to saved post value if not edited.
  const edits = getPostEdits(state);
  if (!edits.hasOwnProperty(attributeName)) {
    return getCurrentPostAttribute(state, attributeName);
  }

  // Merge properties are objects which contain only the patch edit in state,
  // and thus must be merged with the current post attribute.
  if (EDIT_MERGE_PROPERTIES.has(attributeName)) {
    return getNestedEditedPostProperty(state, attributeName);
  }
  return edits[attributeName];
}

/**
 * Returns an attribute value of the current autosave revision for a post, or
 * null if there is no autosave for the post.
 *
 * @deprecated since 5.6. Callers should use the `getAutosave( postType, postId, userId )` selector
 * 			   from the '@wordpress/core-data' package and access properties on the returned
 * 			   autosave object using getPostRawValue.
 *
 * @param {Object} state         Global application state.
 * @param {string} attributeName Autosave attribute name.
 *
 * @return {*} Autosave attribute value.
 */
const getAutosaveAttribute = (0,external_wp_data_namespaceObject.createRegistrySelector)(select => (state, attributeName) => {
  if (!AUTOSAVE_PROPERTIES.includes(attributeName) && attributeName !== 'preview_link') {
    return;
  }
  const postType = getCurrentPostType(state);

  // Currently template autosaving is not supported.
  if (postType === 'wp_template') {
    return false;
  }
  const postId = getCurrentPostId(state);
  const currentUserId = select(external_wp_coreData_namespaceObject.store).getCurrentUser()?.id;
  const autosave = select(external_wp_coreData_namespaceObject.store).getAutosave(postType, postId, currentUserId);
  if (autosave) {
    return getPostRawValue(autosave[attributeName]);
  }
});

/**
 * Returns the current visibility of the post being edited, preferring the
 * unsaved value if different than the saved post. The return value is one of
 * "private", "password", or "public".
 *
 * @param {Object} state Global application state.
 *
 * @return {string} Post visibility.
 */
function getEditedPostVisibility(state) {
  const status = getEditedPostAttribute(state, 'status');
  if (status === 'private') {
    return 'private';
  }
  const password = getEditedPostAttribute(state, 'password');
  if (password) {
    return 'password';
  }
  return 'public';
}

/**
 * Returns true if post is pending review.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether current post is pending review.
 */
function isCurrentPostPending(state) {
  return getCurrentPost(state).status === 'pending';
}

/**
 * Return true if the current post has already been published.
 *
 * @param {Object}  state       Global application state.
 * @param {Object?} currentPost Explicit current post for bypassing registry selector.
 *
 * @return {boolean} Whether the post has been published.
 */
function isCurrentPostPublished(state, currentPost) {
  const post = currentPost || getCurrentPost(state);
  return ['publish', 'private'].indexOf(post.status) !== -1 || post.status === 'future' && !(0,external_wp_date_namespaceObject.isInTheFuture)(new Date(Number((0,external_wp_date_namespaceObject.getDate)(post.date)) - ONE_MINUTE_IN_MS));
}

/**
 * Returns true if post is already scheduled.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether current post is scheduled to be posted.
 */
function isCurrentPostScheduled(state) {
  return getCurrentPost(state).status === 'future' && !isCurrentPostPublished(state);
}

/**
 * Return true if the post being edited can be published.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the post can been published.
 */
function isEditedPostPublishable(state) {
  const post = getCurrentPost(state);

  // TODO: Post being publishable should be superset of condition of post
  // being saveable. Currently this restriction is imposed at UI.
  //
  //  See: <PostPublishButton /> (`isButtonEnabled` assigned by `isSaveable`).

  return isEditedPostDirty(state) || ['publish', 'private', 'future'].indexOf(post.status) === -1;
}

/**
 * Returns true if the post can be saved, or false otherwise. A post must
 * contain a title, an excerpt, or non-empty content to be valid for save.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the post can be saved.
 */
function isEditedPostSaveable(state) {
  if (isSavingPost(state)) {
    return false;
  }

  // TODO: Post should not be saveable if not dirty. Cannot be added here at
  // this time since posts where meta boxes are present can be saved even if
  // the post is not dirty. Currently this restriction is imposed at UI, but
  // should be moved here.
  //
  //  See: `isEditedPostPublishable` (includes `isEditedPostDirty` condition)
  //  See: <PostSavedState /> (`forceIsDirty` prop)
  //  See: <PostPublishButton /> (`forceIsDirty` prop)
  //  See: https://github.com/WordPress/gutenberg/pull/4184.

  return !!getEditedPostAttribute(state, 'title') || !!getEditedPostAttribute(state, 'excerpt') || !isEditedPostEmpty(state) || external_wp_element_namespaceObject.Platform.OS === 'native';
}

/**
 * Returns true if the edited post has content. A post has content if it has at
 * least one saveable block or otherwise has a non-empty content property
 * assigned.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether post has content.
 */
const isEditedPostEmpty = (0,external_wp_data_namespaceObject.createRegistrySelector)(select => state => {
  // While the condition of truthy content string is sufficient to determine
  // emptiness, testing saveable blocks length is a trivial operation. Since
  // this function can be called frequently, optimize for the fast case as a
  // condition of the mere existence of blocks. Note that the value of edited
  // content takes precedent over block content, and must fall through to the
  // default logic.
  const postId = getCurrentPostId(state);
  const postType = getCurrentPostType(state);
  const record = select(external_wp_coreData_namespaceObject.store).getEditedEntityRecord('postType', postType, postId);
  if (typeof record.content !== 'function') {
    return !record.content;
  }
  const blocks = getEditedPostAttribute(state, 'blocks');
  if (blocks.length === 0) {
    return true;
  }

  // Pierce the abstraction of the serializer in knowing that blocks are
  // joined with newlines such that even if every individual block
  // produces an empty save result, the serialized content is non-empty.
  if (blocks.length > 1) {
    return false;
  }

  // There are two conditions under which the optimization cannot be
  // assumed, and a fallthrough to getEditedPostContent must occur:
  //
  // 1. getBlocksForSerialization has special treatment in omitting a
  //    single unmodified default block.
  // 2. Comment delimiters are omitted for a freeform or unregistered
  //    block in its serialization. The freeform block specifically may
  //    produce an empty string in its saved output.
  //
  // For all other content, the single block is assumed to make a post
  // non-empty, if only by virtue of its own comment delimiters.
  const blockName = blocks[0].name;
  if (blockName !== (0,external_wp_blocks_namespaceObject.getDefaultBlockName)() && blockName !== (0,external_wp_blocks_namespaceObject.getFreeformContentHandlerName)()) {
    return false;
  }
  return !getEditedPostContent(state);
});

/**
 * Returns true if the post can be autosaved, or false otherwise.
 *
 * @param {Object} state    Global application state.
 * @param {Object} autosave A raw autosave object from the REST API.
 *
 * @return {boolean} Whether the post can be autosaved.
 */
const isEditedPostAutosaveable = (0,external_wp_data_namespaceObject.createRegistrySelector)(select => state => {
  // A post must contain a title, an excerpt, or non-empty content to be valid for autosaving.
  if (!isEditedPostSaveable(state)) {
    return false;
  }

  // A post is not autosavable when there is a post autosave lock.
  if (isPostAutosavingLocked(state)) {
    return false;
  }
  const postType = getCurrentPostType(state);

  // Currently template autosaving is not supported.
  if (postType === 'wp_template') {
    return false;
  }
  const postId = getCurrentPostId(state);
  const hasFetchedAutosave = select(external_wp_coreData_namespaceObject.store).hasFetchedAutosaves(postType, postId);
  const currentUserId = select(external_wp_coreData_namespaceObject.store).getCurrentUser()?.id;

  // Disable reason - this line causes the side-effect of fetching the autosave
  // via a resolver, moving below the return would result in the autosave never
  // being fetched.
  // eslint-disable-next-line @wordpress/no-unused-vars-before-return
  const autosave = select(external_wp_coreData_namespaceObject.store).getAutosave(postType, postId, currentUserId);

  // If any existing autosaves have not yet been fetched, this function is
  // unable to determine if the post is autosaveable, so return false.
  if (!hasFetchedAutosave) {
    return false;
  }

  // If we don't already have an autosave, the post is autosaveable.
  if (!autosave) {
    return true;
  }

  // To avoid an expensive content serialization, use the content dirtiness
  // flag in place of content field comparison against the known autosave.
  // This is not strictly accurate, and relies on a tolerance toward autosave
  // request failures for unnecessary saves.
  if (hasChangedContent(state)) {
    return true;
  }

  // If title, excerpt, or meta have changed, the post is autosaveable.
  return ['title', 'excerpt', 'meta'].some(field => getPostRawValue(autosave[field]) !== getEditedPostAttribute(state, field));
});

/**
 * Return true if the post being edited is being scheduled. Preferring the
 * unsaved status values.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the post has been published.
 */
function isEditedPostBeingScheduled(state) {
  const date = getEditedPostAttribute(state, 'date');
  // Offset the date by one minute (network latency).
  const checkedDate = new Date(Number((0,external_wp_date_namespaceObject.getDate)(date)) - ONE_MINUTE_IN_MS);
  return (0,external_wp_date_namespaceObject.isInTheFuture)(checkedDate);
}

/**
 * Returns whether the current post should be considered to have a "floating"
 * date (i.e. that it would publish "Immediately" rather than at a set time).
 *
 * Unlike in the PHP backend, the REST API returns a full date string for posts
 * where the 0000-00-00T00:00:00 placeholder is present in the database. To
 * infer that a post is set to publish "Immediately" we check whether the date
 * and modified date are the same.
 *
 * @param {Object} state Editor state.
 *
 * @return {boolean} Whether the edited post has a floating date value.
 */
function isEditedPostDateFloating(state) {
  const date = getEditedPostAttribute(state, 'date');
  const modified = getEditedPostAttribute(state, 'modified');

  // This should be the status of the persisted post
  // It shouldn't use the "edited" status otherwise it breaks the
  // inferred post data floating status
  // See https://github.com/WordPress/gutenberg/issues/28083.
  const status = getCurrentPost(state).status;
  if (status === 'draft' || status === 'auto-draft' || status === 'pending') {
    return date === modified || date === null;
  }
  return false;
}

/**
 * Returns true if the post is currently being deleted, or false otherwise.
 *
 * @param {Object} state Editor state.
 *
 * @return {boolean} Whether post is being deleted.
 */
function isDeletingPost(state) {
  return !!state.deleting.pending;
}

/**
 * Returns true if the post is currently being saved, or false otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether post is being saved.
 */
function isSavingPost(state) {
  return !!state.saving.pending;
}

/**
 * Returns true if non-post entities are currently being saved, or false otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether non-post entities are being saved.
 */
const isSavingNonPostEntityChanges = (0,external_wp_data_namespaceObject.createRegistrySelector)(select => state => {
  const entitiesBeingSaved = select(external_wp_coreData_namespaceObject.store).__experimentalGetEntitiesBeingSaved();
  const {
    type,
    id
  } = getCurrentPost(state);
  return entitiesBeingSaved.some(entityRecord => entityRecord.kind !== 'postType' || entityRecord.name !== type || entityRecord.key !== id);
});

/**
 * Returns true if a previous post save was attempted successfully, or false
 * otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the post was saved successfully.
 */
const didPostSaveRequestSucceed = (0,external_wp_data_namespaceObject.createRegistrySelector)(select => state => {
  const postType = getCurrentPostType(state);
  const postId = getCurrentPostId(state);
  return !select(external_wp_coreData_namespaceObject.store).getLastEntitySaveError('postType', postType, postId);
});

/**
 * Returns true if a previous post save was attempted but failed, or false
 * otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the post save failed.
 */
const didPostSaveRequestFail = (0,external_wp_data_namespaceObject.createRegistrySelector)(select => state => {
  const postType = getCurrentPostType(state);
  const postId = getCurrentPostId(state);
  return !!select(external_wp_coreData_namespaceObject.store).getLastEntitySaveError('postType', postType, postId);
});

/**
 * Returns true if the post is autosaving, or false otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the post is autosaving.
 */
function isAutosavingPost(state) {
  return isSavingPost(state) && Boolean(state.saving.options?.isAutosave);
}

/**
 * Returns true if the post is being previewed, or false otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the post is being previewed.
 */
function isPreviewingPost(state) {
  return isSavingPost(state) && Boolean(state.saving.options?.isPreview);
}

/**
 * Returns the post preview link
 *
 * @param {Object} state Global application state.
 *
 * @return {string | undefined} Preview Link.
 */
function getEditedPostPreviewLink(state) {
  if (state.saving.pending || isSavingPost(state)) {
    return;
  }
  let previewLink = getAutosaveAttribute(state, 'preview_link');
  // Fix for issue: https://github.com/WordPress/gutenberg/issues/33616
  // If the post is draft, ignore the preview link from the autosave record,
  // because the preview could be a stale autosave if the post was switched from
  // published to draft.
  // See: https://github.com/WordPress/gutenberg/pull/37952.
  if (!previewLink || 'draft' === getCurrentPost(state).status) {
    previewLink = getEditedPostAttribute(state, 'link');
    if (previewLink) {
      previewLink = (0,external_wp_url_namespaceObject.addQueryArgs)(previewLink, {
        preview: true
      });
    }
  }
  const featuredImageId = getEditedPostAttribute(state, 'featured_media');
  if (previewLink && featuredImageId) {
    return (0,external_wp_url_namespaceObject.addQueryArgs)(previewLink, {
      _thumbnail_id: featuredImageId
    });
  }
  return previewLink;
}

/**
 * Returns a suggested post format for the current post, inferred only if there
 * is a single block within the post and it is of a type known to match a
 * default post format. Returns null if the format cannot be determined.
 *
 * @return {?string} Suggested post format.
 */
const getSuggestedPostFormat = (0,external_wp_data_namespaceObject.createRegistrySelector)(select => () => {
  const blocks = select(external_wp_blockEditor_namespaceObject.store).getBlocks();
  if (blocks.length > 2) {
    return null;
  }
  let name;
  // If there is only one block in the content of the post grab its name
  // so we can derive a suitable post format from it.
  if (blocks.length === 1) {
    name = blocks[0].name;
    // Check for core/embed `video` and `audio` eligible suggestions.
    if (name === 'core/embed') {
      const provider = blocks[0].attributes?.providerNameSlug;
      if (['youtube', 'vimeo'].includes(provider)) {
        name = 'core/video';
      } else if (['spotify', 'soundcloud'].includes(provider)) {
        name = 'core/audio';
      }
    }
  }

  // If there are two blocks in the content and the last one is a text blocks
  // grab the name of the first one to also suggest a post format from it.
  if (blocks.length === 2 && blocks[1].name === 'core/paragraph') {
    name = blocks[0].name;
  }

  // We only convert to default post formats in core.
  switch (name) {
    case 'core/image':
      return 'image';
    case 'core/quote':
    case 'core/pullquote':
      return 'quote';
    case 'core/gallery':
      return 'gallery';
    case 'core/video':
      return 'video';
    case 'core/audio':
      return 'audio';
    default:
      return null;
  }
});

/**
 * Returns the content of the post being edited.
 *
 * @param {Object} state Global application state.
 *
 * @return {string} Post content.
 */
const getEditedPostContent = (0,external_wp_data_namespaceObject.createRegistrySelector)(select => state => {
  const postId = getCurrentPostId(state);
  const postType = getCurrentPostType(state);
  const record = select(external_wp_coreData_namespaceObject.store).getEditedEntityRecord('postType', postType, postId);
  if (record) {
    if (typeof record.content === 'function') {
      return record.content(record);
    } else if (record.blocks) {
      return (0,external_wp_blocks_namespaceObject.__unstableSerializeAndClean)(record.blocks);
    } else if (record.content) {
      return record.content;
    }
  }
  return '';
});

/**
 * Returns true if the post is being published, or false otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether post is being published.
 */
function isPublishingPost(state) {
  return isSavingPost(state) && !isCurrentPostPublished(state) && getEditedPostAttribute(state, 'status') === 'publish';
}

/**
 * Returns whether the permalink is editable or not.
 *
 * @param {Object} state Editor state.
 *
 * @return {boolean} Whether or not the permalink is editable.
 */
function isPermalinkEditable(state) {
  const permalinkTemplate = getEditedPostAttribute(state, 'permalink_template');
  return PERMALINK_POSTNAME_REGEX.test(permalinkTemplate);
}

/**
 * Returns the permalink for the post.
 *
 * @param {Object} state Editor state.
 *
 * @return {?string} The permalink, or null if the post is not viewable.
 */
function getPermalink(state) {
  const permalinkParts = getPermalinkParts(state);
  if (!permalinkParts) {
    return null;
  }
  const {
    prefix,
    postName,
    suffix
  } = permalinkParts;
  if (isPermalinkEditable(state)) {
    return prefix + postName + suffix;
  }
  return prefix;
}

/**
 * Returns the slug for the post being edited, preferring a manually edited
 * value if one exists, then a sanitized version of the current post title, and
 * finally the post ID.
 *
 * @param {Object} state Editor state.
 *
 * @return {string} The current slug to be displayed in the editor
 */
function getEditedPostSlug(state) {
  return getEditedPostAttribute(state, 'slug') || (0,external_wp_url_namespaceObject.cleanForSlug)(getEditedPostAttribute(state, 'title')) || getCurrentPostId(state);
}

/**
 * Returns the permalink for a post, split into its three parts: the prefix,
 * the postName, and the suffix.
 *
 * @param {Object} state Editor state.
 *
 * @return {Object} An object containing the prefix, postName, and suffix for
 *                  the permalink, or null if the post is not viewable.
 */
function getPermalinkParts(state) {
  const permalinkTemplate = getEditedPostAttribute(state, 'permalink_template');
  if (!permalinkTemplate) {
    return null;
  }
  const postName = getEditedPostAttribute(state, 'slug') || getEditedPostAttribute(state, 'generated_slug');
  const [prefix, suffix] = permalinkTemplate.split(PERMALINK_POSTNAME_REGEX);
  return {
    prefix,
    postName,
    suffix
  };
}

/**
 * Returns whether the post is locked.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Is locked.
 */
function isPostLocked(state) {
  return state.postLock.isLocked;
}

/**
 * Returns whether post saving is locked.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Is locked.
 */
function isPostSavingLocked(state) {
  return Object.keys(state.postSavingLock).length > 0;
}

/**
 * Returns whether post autosaving is locked.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Is locked.
 */
function isPostAutosavingLocked(state) {
  return Object.keys(state.postAutosavingLock).length > 0;
}

/**
 * Returns whether the edition of the post has been taken over.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Is post lock takeover.
 */
function isPostLockTakeover(state) {
  return state.postLock.isTakeover;
}

/**
 * Returns details about the post lock user.
 *
 * @param {Object} state Global application state.
 *
 * @return {Object} A user object.
 */
function getPostLockUser(state) {
  return state.postLock.user;
}

/**
 * Returns the active post lock.
 *
 * @param {Object} state Global application state.
 *
 * @return {Object} The lock object.
 */
function getActivePostLock(state) {
  return state.postLock.activePostLock;
}

/**
 * Returns whether or not the user has the unfiltered_html capability.
 *
 * @param {Object} state Editor state.
 *
 * @return {boolean} Whether the user can or can't post unfiltered HTML.
 */
function canUserUseUnfilteredHTML(state) {
  return Boolean(getCurrentPost(state)._links?.hasOwnProperty('wp:action-unfiltered-html'));
}

/**
 * Returns whether the pre-publish panel should be shown
 * or skipped when the user clicks the "publish" button.
 *
 * @return {boolean} Whether the pre-publish panel should be shown or not.
 */
const isPublishSidebarEnabled = (0,external_wp_data_namespaceObject.createRegistrySelector)(select => () => !!select(external_wp_preferences_namespaceObject.store).get('core', 'isPublishSidebarEnabled'));

/**
 * Return the current block list.
 *
 * @param {Object} state
 * @return {Array} Block list.
 */
const getEditorBlocks = (0,external_wp_data_namespaceObject.createSelector)(state => {
  return getEditedPostAttribute(state, 'blocks') || (0,external_wp_blocks_namespaceObject.parse)(getEditedPostContent(state));
}, state => [getEditedPostAttribute(state, 'blocks'), getEditedPostContent(state)]);

/**
 * Returns true if the given panel was programmatically removed, or false otherwise.
 * All panels are not removed by default.
 *
 * @param {Object} state     Global application state.
 * @param {string} panelName A string that identifies the panel.
 *
 * @return {boolean} Whether or not the panel is removed.
 */
function isEditorPanelRemoved(state, panelName) {
  return state.removedPanels.includes(panelName);
}

/**
 * Returns true if the given panel is enabled, or false otherwise. Panels are
 * enabled by default.
 *
 * @param {Object} state     Global application state.
 * @param {string} panelName A string that identifies the panel.
 *
 * @return {boolean} Whether or not the panel is enabled.
 */
const isEditorPanelEnabled = (0,external_wp_data_namespaceObject.createRegistrySelector)(select => (state, panelName) => {
  // For backward compatibility, we check edit-post
  // even though now this is in "editor" package.
  const inactivePanels = select(external_wp_preferences_namespaceObject.store).get('core', 'inactivePanels');
  return !isEditorPanelRemoved(state, panelName) && !inactivePanels?.includes(panelName);
});

/**
 * Returns true if the given panel is open, or false otherwise. Panels are
 * closed by default.
 *
 * @param {Object} state     Global application state.
 * @param {string} panelName A string that identifies the panel.
 *
 * @return {boolean} Whether or not the panel is open.
 */
const isEditorPanelOpened = (0,external_wp_data_namespaceObject.createRegistrySelector)(select => (state, panelName) => {
  // For backward compatibility, we check edit-post
  // even though now this is in "editor" package.
  const openPanels = select(external_wp_preferences_namespaceObject.store).get('core', 'openPanels');
  return !!openPanels?.includes(panelName);
});

/**
 * A block selection object.
 *
 * @typedef {Object} WPBlockSelection
 *
 * @property {string} clientId     A block client ID.
 * @property {string} attributeKey A block attribute key.
 * @property {number} offset       An attribute value offset, based on the rich
 *                                 text value. See `wp.richText.create`.
 */

/**
 * Returns the current selection start.
 *
 * @param {Object} state
 * @return {WPBlockSelection} The selection start.
 *
 * @deprecated since Gutenberg 10.0.0.
 */
function getEditorSelectionStart(state) {
  external_wp_deprecated_default()("select('core/editor').getEditorSelectionStart", {
    since: '5.8',
    alternative: "select('core/editor').getEditorSelection"
  });
  return getEditedPostAttribute(state, 'selection')?.selectionStart;
}

/**
 * Returns the current selection end.
 *
 * @param {Object} state
 * @return {WPBlockSelection} The selection end.
 *
 * @deprecated since Gutenberg 10.0.0.
 */
function getEditorSelectionEnd(state) {
  external_wp_deprecated_default()("select('core/editor').getEditorSelectionStart", {
    since: '5.8',
    alternative: "select('core/editor').getEditorSelection"
  });
  return getEditedPostAttribute(state, 'selection')?.selectionEnd;
}

/**
 * Returns the current selection.
 *
 * @param {Object} state
 * @return {WPBlockSelection} The selection end.
 */
function getEditorSelection(state) {
  return getEditedPostAttribute(state, 'selection');
}

/**
 * Is the editor ready
 *
 * @param {Object} state
 * @return {boolean} is Ready.
 */
function __unstableIsEditorReady(state) {
  return !!state.postId;
}

/**
 * Returns the post editor settings.
 *
 * @param {Object} state Editor state.
 *
 * @return {Object} The editor settings object.
 */
function getEditorSettings(state) {
  return state.editorSettings;
}

/**
 * Returns the post editor's rendering mode.
 *
 * @param {Object} state Editor state.
 *
 * @return {string} Rendering mode.
 */
function getRenderingMode(state) {
  return state.renderingMode;
}

/**
 * Returns the current editing canvas device type.
 *
 * @param {Object} state Global application state.
 *
 * @return {string} Device type.
 */
function getDeviceType(state) {
  return state.deviceType;
}

/**
 * Returns true if the list view is opened.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the list view is opened.
 */
function isListViewOpened(state) {
  return state.listViewPanel;
}

/**
 * Returns true if the inserter is opened.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the inserter is opened.
 */
function isInserterOpened(state) {
  return !!state.blockInserterPanel;
}

/**
 * Returns the current editing mode.
 *
 * @param {Object} state Global application state.
 *
 * @return {string} Editing mode.
 */
const getEditorMode = (0,external_wp_data_namespaceObject.createRegistrySelector)(select => () => {
  var _select$get;
  return (_select$get = select(external_wp_preferences_namespaceObject.store).get('core', 'editorMode')) !== null && _select$get !== void 0 ? _select$get : 'visual';
});

/*
 * Backward compatibility
 */

/**
 * Returns state object prior to a specified optimist transaction ID, or `null`
 * if the transaction corresponding to the given ID cannot be found.
 *
 * @deprecated since Gutenberg 9.7.0.
 */
function getStateBeforeOptimisticTransaction() {
  external_wp_deprecated_default()("select('core/editor').getStateBeforeOptimisticTransaction", {
    since: '5.7',
    hint: 'No state history is kept on this store anymore'
  });
  return null;
}
/**
 * Returns true if an optimistic transaction is pending commit, for which the
 * before state satisfies the given predicate function.
 *
 * @deprecated since Gutenberg 9.7.0.
 */
function inSomeHistory() {
  external_wp_deprecated_default()("select('core/editor').inSomeHistory", {
    since: '5.7',
    hint: 'No state history is kept on this store anymore'
  });
  return false;
}
function getBlockEditorSelector(name) {
  return (0,external_wp_data_namespaceObject.createRegistrySelector)(select => (state, ...args) => {
    external_wp_deprecated_default()("`wp.data.select( 'core/editor' )." + name + '`', {
      since: '5.3',
      alternative: "`wp.data.select( 'core/block-editor' )." + name + '`',
      version: '6.2'
    });
    return select(external_wp_blockEditor_namespaceObject.store)[name](...args);
  });
}

/**
 * @see getBlockName in core/block-editor store.
 */
const getBlockName = getBlockEditorSelector('getBlockName');

/**
 * @see isBlockValid in core/block-editor store.
 */
const isBlockValid = getBlockEditorSelector('isBlockValid');

/**
 * @see getBlockAttributes in core/block-editor store.
 */
const getBlockAttributes = getBlockEditorSelector('getBlockAttributes');

/**
 * @see getBlock in core/block-editor store.
 */
const getBlock = getBlockEditorSelector('getBlock');

/**
 * @see getBlocks in core/block-editor store.
 */
const getBlocks = getBlockEditorSelector('getBlocks');

/**
 * @see getClientIdsOfDescendants in core/block-editor store.
 */
const getClientIdsOfDescendants = getBlockEditorSelector('getClientIdsOfDescendants');

/**
 * @see getClientIdsWithDescendants in core/block-editor store.
 */
const getClientIdsWithDescendants = getBlockEditorSelector('getClientIdsWithDescendants');

/**
 * @see getGlobalBlockCount in core/block-editor store.
 */
const getGlobalBlockCount = getBlockEditorSelector('getGlobalBlockCount');

/**
 * @see getBlocksByClientId in core/block-editor store.
 */
const getBlocksByClientId = getBlockEditorSelector('getBlocksByClientId');

/**
 * @see getBlockCount in core/block-editor store.
 */
const getBlockCount = getBlockEditorSelector('getBlockCount');

/**
 * @see getBlockSelectionStart in core/block-editor store.
 */
const getBlockSelectionStart = getBlockEditorSelector('getBlockSelectionStart');

/**
 * @see getBlockSelectionEnd in core/block-editor store.
 */
const getBlockSelectionEnd = getBlockEditorSelector('getBlockSelectionEnd');

/**
 * @see getSelectedBlockCount in core/block-editor store.
 */
const getSelectedBlockCount = getBlockEditorSelector('getSelectedBlockCount');

/**
 * @see hasSelectedBlock in core/block-editor store.
 */
const hasSelectedBlock = getBlockEditorSelector('hasSelectedBlock');

/**
 * @see getSelectedBlockClientId in core/block-editor store.
 */
const getSelectedBlockClientId = getBlockEditorSelector('getSelectedBlockClientId');

/**
 * @see getSelectedBlock in core/block-editor store.
 */
const getSelectedBlock = getBlockEditorSelector('getSelectedBlock');

/**
 * @see getBlockRootClientId in core/block-editor store.
 */
const getBlockRootClientId = getBlockEditorSelector('getBlockRootClientId');

/**
 * @see getBlockHierarchyRootClientId in core/block-editor store.
 */
const getBlockHierarchyRootClientId = getBlockEditorSelector('getBlockHierarchyRootClientId');

/**
 * @see getAdjacentBlockClientId in core/block-editor store.
 */
const getAdjacentBlockClientId = getBlockEditorSelector('getAdjacentBlockClientId');

/**
 * @see getPreviousBlockClientId in core/block-editor store.
 */
const getPreviousBlockClientId = getBlockEditorSelector('getPreviousBlockClientId');

/**
 * @see getNextBlockClientId in core/block-editor store.
 */
const getNextBlockClientId = getBlockEditorSelector('getNextBlockClientId');

/**
 * @see getSelectedBlocksInitialCaretPosition in core/block-editor store.
 */
const getSelectedBlocksInitialCaretPosition = getBlockEditorSelector('getSelectedBlocksInitialCaretPosition');

/**
 * @see getMultiSelectedBlockClientIds in core/block-editor store.
 */
const getMultiSelectedBlockClientIds = getBlockEditorSelector('getMultiSelectedBlockClientIds');

/**
 * @see getMultiSelectedBlocks in core/block-editor store.
 */
const getMultiSelectedBlocks = getBlockEditorSelector('getMultiSelectedBlocks');

/**
 * @see getFirstMultiSelectedBlockClientId in core/block-editor store.
 */
const getFirstMultiSelectedBlockClientId = getBlockEditorSelector('getFirstMultiSelectedBlockClientId');

/**
 * @see getLastMultiSelectedBlockClientId in core/block-editor store.
 */
const getLastMultiSelectedBlockClientId = getBlockEditorSelector('getLastMultiSelectedBlockClientId');

/**
 * @see isFirstMultiSelectedBlock in core/block-editor store.
 */
const isFirstMultiSelectedBlock = getBlockEditorSelector('isFirstMultiSelectedBlock');

/**
 * @see isBlockMultiSelected in core/block-editor store.
 */
const isBlockMultiSelected = getBlockEditorSelector('isBlockMultiSelected');

/**
 * @see isAncestorMultiSelected in core/block-editor store.
 */
const isAncestorMultiSelected = getBlockEditorSelector('isAncestorMultiSelected');

/**
 * @see getMultiSelectedBlocksStartClientId in core/block-editor store.
 */
const getMultiSelectedBlocksStartClientId = getBlockEditorSelector('getMultiSelectedBlocksStartClientId');

/**
 * @see getMultiSelectedBlocksEndClientId in core/block-editor store.
 */
const getMultiSelectedBlocksEndClientId = getBlockEditorSelector('getMultiSelectedBlocksEndClientId');

/**
 * @see getBlockOrder in core/block-editor store.
 */
const getBlockOrder = getBlockEditorSelector('getBlockOrder');

/**
 * @see getBlockIndex in core/block-editor store.
 */
const getBlockIndex = getBlockEditorSelector('getBlockIndex');

/**
 * @see isBlockSelected in core/block-editor store.
 */
const isBlockSelected = getBlockEditorSelector('isBlockSelected');

/**
 * @see hasSelectedInnerBlock in core/block-editor store.
 */
const hasSelectedInnerBlock = getBlockEditorSelector('hasSelectedInnerBlock');

/**
 * @see isBlockWithinSelection in core/block-editor store.
 */
const isBlockWithinSelection = getBlockEditorSelector('isBlockWithinSelection');

/**
 * @see hasMultiSelection in core/block-editor store.
 */
const hasMultiSelection = getBlockEditorSelector('hasMultiSelection');

/**
 * @see isMultiSelecting in core/block-editor store.
 */
const isMultiSelecting = getBlockEditorSelector('isMultiSelecting');

/**
 * @see isSelectionEnabled in core/block-editor store.
 */
const isSelectionEnabled = getBlockEditorSelector('isSelectionEnabled');

/**
 * @see getBlockMode in core/block-editor store.
 */
const getBlockMode = getBlockEditorSelector('getBlockMode');

/**
 * @see isTyping in core/block-editor store.
 */
const isTyping = getBlockEditorSelector('isTyping');

/**
 * @see isCaretWithinFormattedText in core/block-editor store.
 */
const isCaretWithinFormattedText = getBlockEditorSelector('isCaretWithinFormattedText');

/**
 * @see getBlockInsertionPoint in core/block-editor store.
 */
const getBlockInsertionPoint = getBlockEditorSelector('getBlockInsertionPoint');

/**
 * @see isBlockInsertionPointVisible in core/block-editor store.
 */
const isBlockInsertionPointVisible = getBlockEditorSelector('isBlockInsertionPointVisible');

/**
 * @see isValidTemplate in core/block-editor store.
 */
const isValidTemplate = getBlockEditorSelector('isValidTemplate');

/**
 * @see getTemplate in core/block-editor store.
 */
const getTemplate = getBlockEditorSelector('getTemplate');

/**
 * @see getTemplateLock in core/block-editor store.
 */
const getTemplateLock = getBlockEditorSelector('getTemplateLock');

/**
 * @see canInsertBlockType in core/block-editor store.
 */
const canInsertBlockType = getBlockEditorSelector('canInsertBlockType');

/**
 * @see getInserterItems in core/block-editor store.
 */
const getInserterItems = getBlockEditorSelector('getInserterItems');

/**
 * @see hasInserterItems in core/block-editor store.
 */
const hasInserterItems = getBlockEditorSelector('hasInserterItems');

/**
 * @see getBlockListSettings in core/block-editor store.
 */
const getBlockListSettings = getBlockEditorSelector('getBlockListSettings');

/**
 * Returns the default template types.
 *
 * @param {Object} state Global application state.
 *
 * @return {Object} The template types.
 */
function __experimentalGetDefaultTemplateTypes(state) {
  return getEditorSettings(state)?.defaultTemplateTypes;
}

/**
 * Returns the default template part areas.
 *
 * @param {Object} state Global application state.
 *
 * @return {Array} The template part areas.
 */
const __experimentalGetDefaultTemplatePartAreas = (0,external_wp_data_namespaceObject.createSelector)(state => {
  var _getEditorSettings$de;
  const areas = (_getEditorSettings$de = getEditorSettings(state)?.defaultTemplatePartAreas) !== null && _getEditorSettings$de !== void 0 ? _getEditorSettings$de : [];
  return areas.map(item => {
    return {
      ...item,
      icon: getTemplatePartIcon(item.icon)
    };
  });
}, state => [getEditorSettings(state)?.defaultTemplatePartAreas]);

/**
 * Returns a default template type searched by slug.
 *
 * @param {Object} state Global application state.
 * @param {string} slug  The template type slug.
 *
 * @return {Object} The template type.
 */
const __experimentalGetDefaultTemplateType = (0,external_wp_data_namespaceObject.createSelector)((state, slug) => {
  var _Object$values$find;
  const templateTypes = __experimentalGetDefaultTemplateTypes(state);
  if (!templateTypes) {
    return EMPTY_OBJECT;
  }
  return (_Object$values$find = Object.values(templateTypes).find(type => type.slug === slug)) !== null && _Object$values$find !== void 0 ? _Object$values$find : EMPTY_OBJECT;
}, state => [__experimentalGetDefaultTemplateTypes(state)]);

/**
 * Given a template entity, return information about it which is ready to be
 * rendered, such as the title, description, and icon.
 *
 * @param {Object} state    Global application state.
 * @param {Object} template The template for which we need information.
 * @return {Object} Information about the template, including title, description, and icon.
 */
const __experimentalGetTemplateInfo = (0,external_wp_data_namespaceObject.createSelector)((state, template) => {
  if (!template) {
    return EMPTY_OBJECT;
  }
  const {
    description,
    slug,
    title,
    area
  } = template;
  const {
    title: defaultTitle,
    description: defaultDescription
  } = __experimentalGetDefaultTemplateType(state, slug);
  const templateTitle = typeof title === 'string' ? title : title?.rendered;
  const templateDescription = typeof description === 'string' ? description : description?.raw;
  const templateIcon = __experimentalGetDefaultTemplatePartAreas(state).find(item => area === item.area)?.icon || library_layout;
  return {
    title: templateTitle && templateTitle !== slug ? templateTitle : defaultTitle || slug,
    description: templateDescription || defaultDescription,
    icon: templateIcon
  };
}, state => [__experimentalGetDefaultTemplateTypes(state), __experimentalGetDefaultTemplatePartAreas(state)]);

/**
 * Returns a post type label depending on the current post.
 *
 * @param {Object} state Global application state.
 *
 * @return {string|undefined} The post type label if available, otherwise undefined.
 */
const getPostTypeLabel = (0,external_wp_data_namespaceObject.createRegistrySelector)(select => state => {
  const currentPostType = getCurrentPostType(state);
  const postType = select(external_wp_coreData_namespaceObject.store).getPostType(currentPostType);
  // Disable reason: Post type labels object is shaped like this.
  // eslint-disable-next-line camelcase
  return postType?.labels?.singular_name;
});

/**
 * Returns true if the publish sidebar is opened.
 *
 * @param {Object} state Global application state
 *
 * @return {boolean} Whether the publish sidebar is open.
 */
function isPublishSidebarOpened(state) {
  return state.publishSidebarActive;
}

;// CONCATENATED MODULE: external ["wp","a11y"]
const external_wp_a11y_namespaceObject = window["wp"]["a11y"];
;// CONCATENATED MODULE: external ["wp","apiFetch"]
const external_wp_apiFetch_namespaceObject = window["wp"]["apiFetch"];
var external_wp_apiFetch_default = /*#__PURE__*/__webpack_require__.n(external_wp_apiFetch_namespaceObject);
;// CONCATENATED MODULE: external ["wp","notices"]
const external_wp_notices_namespaceObject = window["wp"]["notices"];
;// CONCATENATED MODULE: external ["wp","hooks"]
const external_wp_hooks_namespaceObject = window["wp"]["hooks"];
;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/store/local-autosave.js
/**
 * Function returning a sessionStorage key to set or retrieve a given post's
 * automatic session backup.
 *
 * Keys are crucially prefixed with 'wp-autosave-' so that wp-login.php's
 * `loggedout` handler can clear sessionStorage of any user-private content.
 *
 * @see https://github.com/WordPress/wordpress-develop/blob/6dad32d2aed47e6c0cf2aee8410645f6d7aba6bd/src/wp-login.php#L103
 *
 * @param {string}  postId    Post ID.
 * @param {boolean} isPostNew Whether post new.
 *
 * @return {string} sessionStorage key
 */
function postKey(postId, isPostNew) {
  return `wp-autosave-block-editor-post-${isPostNew ? 'auto-draft' : postId}`;
}
function localAutosaveGet(postId, isPostNew) {
  return window.sessionStorage.getItem(postKey(postId, isPostNew));
}
function localAutosaveSet(postId, isPostNew, title, content, excerpt) {
  window.sessionStorage.setItem(postKey(postId, isPostNew), JSON.stringify({
    post_title: title,
    content,
    excerpt
  }));
}
function localAutosaveClear(postId, isPostNew) {
  window.sessionStorage.removeItem(postKey(postId, isPostNew));
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/store/utils/notice-builder.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/**
 * Builds the arguments for a success notification dispatch.
 *
 * @param {Object} data Incoming data to build the arguments from.
 *
 * @return {Array} Arguments for dispatch. An empty array signals no
 *                 notification should be sent.
 */
function getNotificationArgumentsForSaveSuccess(data) {
  var _postType$viewable;
  const {
    previousPost,
    post,
    postType
  } = data;
  // Autosaves are neither shown a notice nor redirected.
  if (data.options?.isAutosave) {
    return [];
  }
  const publishStatus = ['publish', 'private', 'future'];
  const isPublished = publishStatus.includes(previousPost.status);
  const willPublish = publishStatus.includes(post.status);
  const willTrash = post.status === 'trash' && previousPost.status !== 'trash';
  let noticeMessage;
  let shouldShowLink = (_postType$viewable = postType?.viewable) !== null && _postType$viewable !== void 0 ? _postType$viewable : false;
  let isDraft;

  // Always should a notice, which will be spoken for accessibility.
  if (willTrash) {
    noticeMessage = postType.labels.item_trashed;
    shouldShowLink = false;
  } else if (!isPublished && !willPublish) {
    // If saving a non-published post, don't show notice.
    noticeMessage = (0,external_wp_i18n_namespaceObject.__)('Draft saved.');
    isDraft = true;
  } else if (isPublished && !willPublish) {
    // If undoing publish status, show specific notice.
    noticeMessage = postType.labels.item_reverted_to_draft;
    shouldShowLink = false;
  } else if (!isPublished && willPublish) {
    // If publishing or scheduling a post, show the corresponding
    // publish message.
    noticeMessage = {
      publish: postType.labels.item_published,
      private: postType.labels.item_published_privately,
      future: postType.labels.item_scheduled
    }[post.status];
  } else {
    // Generic fallback notice.
    noticeMessage = postType.labels.item_updated;
  }
  const actions = [];
  if (shouldShowLink) {
    actions.push({
      label: isDraft ? (0,external_wp_i18n_namespaceObject.__)('View Preview') : postType.labels.view_item,
      url: post.link
    });
  }
  return [noticeMessage, {
    id: SAVE_POST_NOTICE_ID,
    type: 'snackbar',
    actions
  }];
}

/**
 * Builds the fail notification arguments for dispatch.
 *
 * @param {Object} data Incoming data to build the arguments with.
 *
 * @return {Array} Arguments for dispatch. An empty array signals no
 *                 notification should be sent.
 */
function getNotificationArgumentsForSaveFail(data) {
  const {
    post,
    edits,
    error
  } = data;
  if (error && 'rest_autosave_no_changes' === error.code) {
    // Autosave requested a new autosave, but there were no changes. This shouldn't
    // result in an error notice for the user.
    return [];
  }
  const publishStatus = ['publish', 'private', 'future'];
  const isPublished = publishStatus.indexOf(post.status) !== -1;
  // If the post was being published, we show the corresponding publish error message
  // Unless we publish an "updating failed" message.
  const messages = {
    publish: (0,external_wp_i18n_namespaceObject.__)('Publishing failed.'),
    private: (0,external_wp_i18n_namespaceObject.__)('Publishing failed.'),
    future: (0,external_wp_i18n_namespaceObject.__)('Scheduling failed.')
  };
  let noticeMessage = !isPublished && publishStatus.indexOf(edits.status) !== -1 ? messages[edits.status] : (0,external_wp_i18n_namespaceObject.__)('Updating failed.');

  // Check if message string contains HTML. Notice text is currently only
  // supported as plaintext, and stripping the tags may muddle the meaning.
  if (error.message && !/<\/?[^>]*>/.test(error.message)) {
    noticeMessage = [noticeMessage, error.message].join(' ');
  }
  return [noticeMessage, {
    id: SAVE_POST_NOTICE_ID
  }];
}

/**
 * Builds the trash fail notification arguments for dispatch.
 *
 * @param {Object} data
 *
 * @return {Array} Arguments for dispatch.
 */
function getNotificationArgumentsForTrashFail(data) {
  return [data.error.message && data.error.code !== 'unknown_error' ? data.error.message : (0,external_wp_i18n_namespaceObject.__)('Trashing failed'), {
    id: TRASH_POST_NOTICE_ID
  }];
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/store/actions.js
/**
 * WordPress dependencies
 */











/**
 * Internal dependencies
 */




/**
 * Returns an action generator used in signalling that editor has initialized with
 * the specified post object and editor settings.
 *
 * @param {Object} post     Post object.
 * @param {Object} edits    Initial edited attributes object.
 * @param {Array?} template Block Template.
 */
const setupEditor = (post, edits, template) => ({
  dispatch
}) => {
  dispatch.setEditedPost(post.type, post.id);
  // Apply a template for new posts only, if exists.
  const isNewPost = post.status === 'auto-draft';
  if (isNewPost && template) {
    // In order to ensure maximum of a single parse during setup, edits are
    // included as part of editor setup action. Assume edited content as
    // canonical if provided, falling back to post.
    let content;
    if ('content' in edits) {
      content = edits.content;
    } else {
      content = post.content.raw;
    }
    let blocks = (0,external_wp_blocks_namespaceObject.parse)(content);
    blocks = (0,external_wp_blocks_namespaceObject.synchronizeBlocksWithTemplate)(blocks, template);
    dispatch.resetEditorBlocks(blocks, {
      __unstableShouldCreateUndoLevel: false
    });
  }
  if (edits && Object.values(edits).some(([key, edit]) => {
    var _post$key$raw;
    return edit !== ((_post$key$raw = post[key]?.raw) !== null && _post$key$raw !== void 0 ? _post$key$raw : post[key]);
  })) {
    dispatch.editPost(edits);
  }
};

/**
 * Returns an action object signalling that the editor is being destroyed and
 * that any necessary state or side-effect cleanup should occur.
 *
 * @deprecated
 *
 * @return {Object} Action object.
 */
function __experimentalTearDownEditor() {
  external_wp_deprecated_default()("wp.data.dispatch( 'core/editor' ).__experimentalTearDownEditor", {
    since: '6.5'
  });
  return {
    type: 'DO_NOTHING'
  };
}

/**
 * Returns an action object used in signalling that the latest version of the
 * post has been received, either by initialization or save.
 *
 * @deprecated Since WordPress 6.0.
 */
function resetPost() {
  external_wp_deprecated_default()("wp.data.dispatch( 'core/editor' ).resetPost", {
    since: '6.0',
    version: '6.3',
    alternative: 'Initialize the editor with the setupEditorState action'
  });
  return {
    type: 'DO_NOTHING'
  };
}

/**
 * Returns an action object used in signalling that a patch of updates for the
 * latest version of the post have been received.
 *
 * @return {Object} Action object.
 * @deprecated since Gutenberg 9.7.0.
 */
function updatePost() {
  external_wp_deprecated_default()("wp.data.dispatch( 'core/editor' ).updatePost", {
    since: '5.7',
    alternative: 'Use the core entities store instead'
  });
  return {
    type: 'DO_NOTHING'
  };
}

/**
 * Setup the editor state.
 *
 * @deprecated
 *
 * @param {Object} post Post object.
 */
function setupEditorState(post) {
  external_wp_deprecated_default()("wp.data.dispatch( 'core/editor' ).setupEditorState", {
    since: '6.5',
    alternative: "wp.data.dispatch( 'core/editor' ).setEditedPost"
  });
  return setEditedPost(post.type, post.id);
}

/**
 * Returns an action that sets the current post Type and post ID.
 *
 * @param {string} postType Post Type.
 * @param {string} postId   Post ID.
 *
 * @return {Object} Action object.
 */
function setEditedPost(postType, postId) {
  return {
    type: 'SET_EDITED_POST',
    postType,
    postId
  };
}

/**
 * Returns an action object used in signalling that attributes of the post have
 * been edited.
 *
 * @param {Object} edits   Post attributes to edit.
 * @param {Object} options Options for the edit.
 */
const editPost = (edits, options) => ({
  select,
  registry
}) => {
  const {
    id,
    type
  } = select.getCurrentPost();
  registry.dispatch(external_wp_coreData_namespaceObject.store).editEntityRecord('postType', type, id, edits, options);
};

/**
 * Action for saving the current post in the editor.
 *
 * @param {Object} options
 */
const savePost = (options = {}) => async ({
  select,
  dispatch,
  registry
}) => {
  if (!select.isEditedPostSaveable()) {
    return;
  }
  const content = select.getEditedPostContent();
  if (!options.isAutosave) {
    dispatch.editPost({
      content
    }, {
      undoIgnore: true
    });
  }
  const previousRecord = select.getCurrentPost();
  const edits = {
    id: previousRecord.id,
    ...registry.select(external_wp_coreData_namespaceObject.store).getEntityRecordNonTransientEdits('postType', previousRecord.type, previousRecord.id),
    content
  };
  dispatch({
    type: 'REQUEST_POST_UPDATE_START',
    options
  });
  await registry.dispatch(external_wp_coreData_namespaceObject.store).saveEntityRecord('postType', previousRecord.type, edits, options);
  let error = registry.select(external_wp_coreData_namespaceObject.store).getLastEntitySaveError('postType', previousRecord.type, previousRecord.id);
  if (!error) {
    await (0,external_wp_hooks_namespaceObject.applyFilters)('editor.__unstableSavePost', Promise.resolve(), options).catch(err => {
      error = err;
    });
  }
  dispatch({
    type: 'REQUEST_POST_UPDATE_FINISH',
    options
  });
  if (error) {
    const args = getNotificationArgumentsForSaveFail({
      post: previousRecord,
      edits,
      error
    });
    if (args.length) {
      registry.dispatch(external_wp_notices_namespaceObject.store).createErrorNotice(...args);
    }
  } else {
    const updatedRecord = select.getCurrentPost();
    const args = getNotificationArgumentsForSaveSuccess({
      previousPost: previousRecord,
      post: updatedRecord,
      postType: await registry.resolveSelect(external_wp_coreData_namespaceObject.store).getPostType(updatedRecord.type),
      options
    });
    if (args.length) {
      registry.dispatch(external_wp_notices_namespaceObject.store).createSuccessNotice(...args);
    }
    // Make sure that any edits after saving create an undo level and are
    // considered for change detection.
    if (!options.isAutosave) {
      registry.dispatch(external_wp_blockEditor_namespaceObject.store).__unstableMarkLastChangeAsPersistent();
    }
  }
};

/**
 * Action for refreshing the current post.
 *
 * @deprecated Since WordPress 6.0.
 */
function refreshPost() {
  external_wp_deprecated_default()("wp.data.dispatch( 'core/editor' ).refreshPost", {
    since: '6.0',
    version: '6.3',
    alternative: 'Use the core entities store instead'
  });
  return {
    type: 'DO_NOTHING'
  };
}

/**
 * Action for trashing the current post in the editor.
 */
const trashPost = () => async ({
  select,
  dispatch,
  registry
}) => {
  const postTypeSlug = select.getCurrentPostType();
  const postType = await registry.resolveSelect(external_wp_coreData_namespaceObject.store).getPostType(postTypeSlug);
  registry.dispatch(external_wp_notices_namespaceObject.store).removeNotice(TRASH_POST_NOTICE_ID);
  const {
    rest_base: restBase,
    rest_namespace: restNamespace = 'wp/v2'
  } = postType;
  dispatch({
    type: 'REQUEST_POST_DELETE_START'
  });
  try {
    const post = select.getCurrentPost();
    await external_wp_apiFetch_default()({
      path: `/${restNamespace}/${restBase}/${post.id}`,
      method: 'DELETE'
    });
    await dispatch.savePost();
  } catch (error) {
    registry.dispatch(external_wp_notices_namespaceObject.store).createErrorNotice(...getNotificationArgumentsForTrashFail({
      error
    }));
  }
  dispatch({
    type: 'REQUEST_POST_DELETE_FINISH'
  });
};

/**
 * Action that autosaves the current post.  This
 * includes server-side autosaving (default) and client-side (a.k.a. local)
 * autosaving (e.g. on the Web, the post might be committed to Session
 * Storage).
 *
 * @param {Object?} options Extra flags to identify the autosave.
 */
const autosave = ({
  local = false,
  ...options
} = {}) => async ({
  select,
  dispatch
}) => {
  const post = select.getCurrentPost();

  // Currently template autosaving is not supported.
  if (post.type === 'wp_template') {
    return;
  }
  if (local) {
    const isPostNew = select.isEditedPostNew();
    const title = select.getEditedPostAttribute('title');
    const content = select.getEditedPostAttribute('content');
    const excerpt = select.getEditedPostAttribute('excerpt');
    localAutosaveSet(post.id, isPostNew, title, content, excerpt);
  } else {
    await dispatch.savePost({
      isAutosave: true,
      ...options
    });
  }
};
const __unstableSaveForPreview = ({
  forceIsAutosaveable
} = {}) => async ({
  select,
  dispatch
}) => {
  if ((forceIsAutosaveable || select.isEditedPostAutosaveable()) && !select.isPostLocked()) {
    const isDraft = ['draft', 'auto-draft'].includes(select.getEditedPostAttribute('status'));
    if (isDraft) {
      await dispatch.savePost({
        isPreview: true
      });
    } else {
      await dispatch.autosave({
        isPreview: true
      });
    }
  }
  return select.getEditedPostPreviewLink();
};

/**
 * Action that restores last popped state in undo history.
 */
const redo = () => ({
  registry
}) => {
  registry.dispatch(external_wp_coreData_namespaceObject.store).redo();
};

/**
 * Action that pops a record from undo history and undoes the edit.
 */
const undo = () => ({
  registry
}) => {
  registry.dispatch(external_wp_coreData_namespaceObject.store).undo();
};

/**
 * Action that creates an undo history record.
 *
 * @deprecated Since WordPress 6.0
 */
function createUndoLevel() {
  external_wp_deprecated_default()("wp.data.dispatch( 'core/editor' ).createUndoLevel", {
    since: '6.0',
    version: '6.3',
    alternative: 'Use the core entities store instead'
  });
  return {
    type: 'DO_NOTHING'
  };
}

/**
 * Action that locks the editor.
 *
 * @param {Object} lock Details about the post lock status, user, and nonce.
 * @return {Object} Action object.
 */
function updatePostLock(lock) {
  return {
    type: 'UPDATE_POST_LOCK',
    lock
  };
}

/**
 * Enable the publish sidebar.
 */
const enablePublishSidebar = () => ({
  registry
}) => {
  registry.dispatch(external_wp_preferences_namespaceObject.store).set('core', 'isPublishSidebarEnabled', true);
};

/**
 * Disables the publish sidebar.
 */
const disablePublishSidebar = () => ({
  registry
}) => {
  registry.dispatch(external_wp_preferences_namespaceObject.store).set('core', 'isPublishSidebarEnabled', false);
};

/**
 * Action that locks post saving.
 *
 * @param {string} lockName The lock name.
 *
 * @example
 * ```
 * const { subscribe } = wp.data;
 *
 * const initialPostStatus = wp.data.select( 'core/editor' ).getEditedPostAttribute( 'status' );
 *
 * // Only allow publishing posts that are set to a future date.
 * if ( 'publish' !== initialPostStatus ) {
 *
 * 	// Track locking.
 * 	let locked = false;
 *
 * 	// Watch for the publish event.
 * 	let unssubscribe = subscribe( () => {
 * 		const currentPostStatus = wp.data.select( 'core/editor' ).getEditedPostAttribute( 'status' );
 * 		if ( 'publish' !== currentPostStatus ) {
 *
 * 			// Compare the post date to the current date, lock the post if the date isn't in the future.
 * 			const postDate = new Date( wp.data.select( 'core/editor' ).getEditedPostAttribute( 'date' ) );
 * 			const currentDate = new Date();
 * 			if ( postDate.getTime() <= currentDate.getTime() ) {
 * 				if ( ! locked ) {
 * 					locked = true;
 * 					wp.data.dispatch( 'core/editor' ).lockPostSaving( 'futurelock' );
 * 				}
 * 			} else {
 * 				if ( locked ) {
 * 					locked = false;
 * 					wp.data.dispatch( 'core/editor' ).unlockPostSaving( 'futurelock' );
 * 				}
 * 			}
 * 		}
 * 	} );
 * }
 * ```
 *
 * @return {Object} Action object
 */
function lockPostSaving(lockName) {
  return {
    type: 'LOCK_POST_SAVING',
    lockName
  };
}

/**
 * Action that unlocks post saving.
 *
 * @param {string} lockName The lock name.
 *
 * @example
 * ```
 * // Unlock post saving with the lock key `mylock`:
 * wp.data.dispatch( 'core/editor' ).unlockPostSaving( 'mylock' );
 * ```
 *
 * @return {Object} Action object
 */
function unlockPostSaving(lockName) {
  return {
    type: 'UNLOCK_POST_SAVING',
    lockName
  };
}

/**
 * Action that locks post autosaving.
 *
 * @param {string} lockName The lock name.
 *
 * @example
 * ```
 * // Lock post autosaving with the lock key `mylock`:
 * wp.data.dispatch( 'core/editor' ).lockPostAutosaving( 'mylock' );
 * ```
 *
 * @return {Object} Action object
 */
function lockPostAutosaving(lockName) {
  return {
    type: 'LOCK_POST_AUTOSAVING',
    lockName
  };
}

/**
 * Action that unlocks post autosaving.
 *
 * @param {string} lockName The lock name.
 *
 * @example
 * ```
 * // Unlock post saving with the lock key `mylock`:
 * wp.data.dispatch( 'core/editor' ).unlockPostAutosaving( 'mylock' );
 * ```
 *
 * @return {Object} Action object
 */
function unlockPostAutosaving(lockName) {
  return {
    type: 'UNLOCK_POST_AUTOSAVING',
    lockName
  };
}

/**
 * Returns an action object used to signal that the blocks have been updated.
 *
 * @param {Array}   blocks  Block Array.
 * @param {?Object} options Optional options.
 */
const resetEditorBlocks = (blocks, options = {}) => ({
  select,
  dispatch,
  registry
}) => {
  const {
    __unstableShouldCreateUndoLevel,
    selection
  } = options;
  const edits = {
    blocks,
    selection
  };
  if (__unstableShouldCreateUndoLevel !== false) {
    const {
      id,
      type
    } = select.getCurrentPost();
    const noChange = registry.select(external_wp_coreData_namespaceObject.store).getEditedEntityRecord('postType', type, id).blocks === edits.blocks;
    if (noChange) {
      registry.dispatch(external_wp_coreData_namespaceObject.store).__unstableCreateUndoLevel('postType', type, id);
      return;
    }

    // We create a new function here on every persistent edit
    // to make sure the edit makes the post dirty and creates
    // a new undo level.
    edits.content = ({
      blocks: blocksForSerialization = []
    }) => (0,external_wp_blocks_namespaceObject.__unstableSerializeAndClean)(blocksForSerialization);
  }
  dispatch.editPost(edits);
};

/*
 * Returns an action object used in signalling that the post editor settings have been updated.
 *
 * @param {Object} settings Updated settings
 *
 * @return {Object} Action object
 */
function updateEditorSettings(settings) {
  return {
    type: 'UPDATE_EDITOR_SETTINGS',
    settings
  };
}

/**
 * Returns an action used to set the rendering mode of the post editor. We support multiple rendering modes:
 *
 * -   `post-only`: This mode extracts the post blocks from the template and renders only those. The idea is to allow the user to edit the post/page in isolation without the wrapping template.
 * -   `template-locked`: This mode renders both the template and the post blocks but the template blocks are locked and can't be edited. The post blocks are editable.
 *
 * @param {string} mode Mode (one of 'post-only' or 'template-locked').
 */
const setRenderingMode = mode => ({
  dispatch,
  registry,
  select
}) => {
  if (select.__unstableIsEditorReady()) {
    // We clear the block selection but we also need to clear the selection from the core store.
    registry.dispatch(external_wp_blockEditor_namespaceObject.store).clearSelectedBlock();
    dispatch.editPost({
      selection: undefined
    }, {
      undoIgnore: true
    });
  }
  dispatch({
    type: 'SET_RENDERING_MODE',
    mode
  });
};

/**
 * Action that changes the width of the editing canvas.
 *
 * @param {string} deviceType
 *
 * @return {Object} Action object.
 */
function setDeviceType(deviceType) {
  return {
    type: 'SET_DEVICE_TYPE',
    deviceType
  };
}

/**
 * Returns an action object used to enable or disable a panel in the editor.
 *
 * @param {string} panelName A string that identifies the panel to enable or disable.
 *
 * @return {Object} Action object.
 */
const toggleEditorPanelEnabled = panelName => ({
  registry
}) => {
  var _registry$select$get;
  const inactivePanels = (_registry$select$get = registry.select(external_wp_preferences_namespaceObject.store).get('core', 'inactivePanels')) !== null && _registry$select$get !== void 0 ? _registry$select$get : [];
  const isPanelInactive = !!inactivePanels?.includes(panelName);

  // If the panel is inactive, remove it to enable it, else add it to
  // make it inactive.
  let updatedInactivePanels;
  if (isPanelInactive) {
    updatedInactivePanels = inactivePanels.filter(invactivePanelName => invactivePanelName !== panelName);
  } else {
    updatedInactivePanels = [...inactivePanels, panelName];
  }
  registry.dispatch(external_wp_preferences_namespaceObject.store).set('core', 'inactivePanels', updatedInactivePanels);
};

/**
 * Opens a closed panel and closes an open panel.
 *
 * @param {string} panelName A string that identifies the panel to open or close.
 */
const toggleEditorPanelOpened = panelName => ({
  registry
}) => {
  var _registry$select$get2;
  const openPanels = (_registry$select$get2 = registry.select(external_wp_preferences_namespaceObject.store).get('core', 'openPanels')) !== null && _registry$select$get2 !== void 0 ? _registry$select$get2 : [];
  const isPanelOpen = !!openPanels?.includes(panelName);

  // If the panel is open, remove it to close it, else add it to
  // make it open.
  let updatedOpenPanels;
  if (isPanelOpen) {
    updatedOpenPanels = openPanels.filter(openPanelName => openPanelName !== panelName);
  } else {
    updatedOpenPanels = [...openPanels, panelName];
  }
  registry.dispatch(external_wp_preferences_namespaceObject.store).set('core', 'openPanels', updatedOpenPanels);
};

/**
 * Returns an action object used to remove a panel from the editor.
 *
 * @param {string} panelName A string that identifies the panel to remove.
 *
 * @return {Object} Action object.
 */
function removeEditorPanel(panelName) {
  return {
    type: 'REMOVE_PANEL',
    panelName
  };
}

/**
 * Returns an action object used to open/close the inserter.
 *
 * @param {boolean|Object} value                Whether the inserter should be
 *                                              opened (true) or closed (false).
 *                                              To specify an insertion point,
 *                                              use an object.
 * @param {string}         value.rootClientId   The root client ID to insert at.
 * @param {number}         value.insertionIndex The index to insert at.
 *
 * @return {Object} Action object.
 */
function setIsInserterOpened(value) {
  return {
    type: 'SET_IS_INSERTER_OPENED',
    value
  };
}

/**
 * Returns an action object used to open/close the list view.
 *
 * @param {boolean} isOpen A boolean representing whether the list view should be opened or closed.
 * @return {Object} Action object.
 */
function setIsListViewOpened(isOpen) {
  return {
    type: 'SET_IS_LIST_VIEW_OPENED',
    isOpen
  };
}

/**
 * Action that toggles Distraction free mode.
 * Distraction free mode expects there are no sidebars, as due to the
 * z-index values set, you can't close sidebars.
 */
const toggleDistractionFree = () => ({
  dispatch,
  registry
}) => {
  const isDistractionFree = registry.select(external_wp_preferences_namespaceObject.store).get('core', 'distractionFree');
  if (isDistractionFree) {
    registry.dispatch(external_wp_preferences_namespaceObject.store).set('core', 'fixedToolbar', false);
  }
  if (!isDistractionFree) {
    registry.batch(() => {
      registry.dispatch(external_wp_preferences_namespaceObject.store).set('core', 'fixedToolbar', true);
      dispatch.setIsInserterOpened(false);
      dispatch.setIsListViewOpened(false);
    });
  }
  registry.batch(() => {
    registry.dispatch(external_wp_preferences_namespaceObject.store).set('core', 'distractionFree', !isDistractionFree);
    registry.dispatch(external_wp_notices_namespaceObject.store).createInfoNotice(isDistractionFree ? (0,external_wp_i18n_namespaceObject.__)('Distraction free off.') : (0,external_wp_i18n_namespaceObject.__)('Distraction free on.'), {
      id: 'core/editor/distraction-free-mode/notice',
      type: 'snackbar',
      actions: [{
        label: (0,external_wp_i18n_namespaceObject.__)('Undo'),
        onClick: () => {
          registry.batch(() => {
            registry.dispatch(external_wp_preferences_namespaceObject.store).set('core', 'fixedToolbar', isDistractionFree ? true : false);
            registry.dispatch(external_wp_preferences_namespaceObject.store).toggle('core', 'distractionFree');
          });
        }
      }]
    });
  });
};

/**
 * Triggers an action used to switch editor mode.
 *
 * @param {string} mode The editor mode.
 */
const switchEditorMode = mode => ({
  dispatch,
  registry
}) => {
  registry.dispatch(external_wp_preferences_namespaceObject.store).set('core', 'editorMode', mode);

  // Unselect blocks when we switch to a non visual mode.
  if (mode !== 'visual') {
    registry.dispatch(external_wp_blockEditor_namespaceObject.store).clearSelectedBlock();
  }
  if (mode === 'visual') {
    (0,external_wp_a11y_namespaceObject.speak)((0,external_wp_i18n_namespaceObject.__)('Visual editor selected'), 'assertive');
  } else if (mode === 'text') {
    const isDistractionFree = registry.select(external_wp_preferences_namespaceObject.store).get('core', 'distractionFree');
    if (isDistractionFree) {
      dispatch.toggleDistractionFree();
    }
    (0,external_wp_a11y_namespaceObject.speak)((0,external_wp_i18n_namespaceObject.__)('Code editor selected'), 'assertive');
  }
};

/**
 * Returns an action object used in signalling that the user opened the publish
 * sidebar.
 *
 * @return {Object} Action object
 */
function openPublishSidebar() {
  return {
    type: 'OPEN_PUBLISH_SIDEBAR'
  };
}

/**
 * Returns an action object used in signalling that the user closed the
 * publish sidebar.
 *
 * @return {Object} Action object.
 */
function closePublishSidebar() {
  return {
    type: 'CLOSE_PUBLISH_SIDEBAR'
  };
}

/**
 * Returns an action object used in signalling that the user toggles the publish sidebar.
 *
 * @return {Object} Action object
 */
function togglePublishSidebar() {
  return {
    type: 'TOGGLE_PUBLISH_SIDEBAR'
  };
}

/**
 * Backward compatibility
 */

const getBlockEditorAction = name => (...args) => ({
  registry
}) => {
  external_wp_deprecated_default()("`wp.data.dispatch( 'core/editor' )." + name + '`', {
    since: '5.3',
    alternative: "`wp.data.dispatch( 'core/block-editor' )." + name + '`',
    version: '6.2'
  });
  registry.dispatch(external_wp_blockEditor_namespaceObject.store)[name](...args);
};

/**
 * @see resetBlocks in core/block-editor store.
 */
const resetBlocks = getBlockEditorAction('resetBlocks');

/**
 * @see receiveBlocks in core/block-editor store.
 */
const receiveBlocks = getBlockEditorAction('receiveBlocks');

/**
 * @see updateBlock in core/block-editor store.
 */
const updateBlock = getBlockEditorAction('updateBlock');

/**
 * @see updateBlockAttributes in core/block-editor store.
 */
const updateBlockAttributes = getBlockEditorAction('updateBlockAttributes');

/**
 * @see selectBlock in core/block-editor store.
 */
const selectBlock = getBlockEditorAction('selectBlock');

/**
 * @see startMultiSelect in core/block-editor store.
 */
const startMultiSelect = getBlockEditorAction('startMultiSelect');

/**
 * @see stopMultiSelect in core/block-editor store.
 */
const stopMultiSelect = getBlockEditorAction('stopMultiSelect');

/**
 * @see multiSelect in core/block-editor store.
 */
const multiSelect = getBlockEditorAction('multiSelect');

/**
 * @see clearSelectedBlock in core/block-editor store.
 */
const clearSelectedBlock = getBlockEditorAction('clearSelectedBlock');

/**
 * @see toggleSelection in core/block-editor store.
 */
const toggleSelection = getBlockEditorAction('toggleSelection');

/**
 * @see replaceBlocks in core/block-editor store.
 */
const replaceBlocks = getBlockEditorAction('replaceBlocks');

/**
 * @see replaceBlock in core/block-editor store.
 */
const replaceBlock = getBlockEditorAction('replaceBlock');

/**
 * @see moveBlocksDown in core/block-editor store.
 */
const moveBlocksDown = getBlockEditorAction('moveBlocksDown');

/**
 * @see moveBlocksUp in core/block-editor store.
 */
const moveBlocksUp = getBlockEditorAction('moveBlocksUp');

/**
 * @see moveBlockToPosition in core/block-editor store.
 */
const moveBlockToPosition = getBlockEditorAction('moveBlockToPosition');

/**
 * @see insertBlock in core/block-editor store.
 */
const insertBlock = getBlockEditorAction('insertBlock');

/**
 * @see insertBlocks in core/block-editor store.
 */
const insertBlocks = getBlockEditorAction('insertBlocks');

/**
 * @see showInsertionPoint in core/block-editor store.
 */
const showInsertionPoint = getBlockEditorAction('showInsertionPoint');

/**
 * @see hideInsertionPoint in core/block-editor store.
 */
const hideInsertionPoint = getBlockEditorAction('hideInsertionPoint');

/**
 * @see setTemplateValidity in core/block-editor store.
 */
const setTemplateValidity = getBlockEditorAction('setTemplateValidity');

/**
 * @see synchronizeTemplate in core/block-editor store.
 */
const synchronizeTemplate = getBlockEditorAction('synchronizeTemplate');

/**
 * @see mergeBlocks in core/block-editor store.
 */
const mergeBlocks = getBlockEditorAction('mergeBlocks');

/**
 * @see removeBlocks in core/block-editor store.
 */
const removeBlocks = getBlockEditorAction('removeBlocks');

/**
 * @see removeBlock in core/block-editor store.
 */
const removeBlock = getBlockEditorAction('removeBlock');

/**
 * @see toggleBlockMode in core/block-editor store.
 */
const toggleBlockMode = getBlockEditorAction('toggleBlockMode');

/**
 * @see startTyping in core/block-editor store.
 */
const startTyping = getBlockEditorAction('startTyping');

/**
 * @see stopTyping in core/block-editor store.
 */
const stopTyping = getBlockEditorAction('stopTyping');

/**
 * @see enterFormattedText in core/block-editor store.
 */
const enterFormattedText = getBlockEditorAction('enterFormattedText');

/**
 * @see exitFormattedText in core/block-editor store.
 */
const exitFormattedText = getBlockEditorAction('exitFormattedText');

/**
 * @see insertDefaultBlock in core/block-editor store.
 */
const insertDefaultBlock = getBlockEditorAction('insertDefaultBlock');

/**
 * @see updateBlockListSettings in core/block-editor store.
 */
const updateBlockListSettings = getBlockEditorAction('updateBlockListSettings');

;// CONCATENATED MODULE: external ["wp","htmlEntities"]
const external_wp_htmlEntities_namespaceObject = window["wp"]["htmlEntities"];
;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/store/utils/is-template-revertable.js
/**
 * Internal dependencies
 */


// Copy of the function from packages/edit-site/src/utils/is-template-revertable.js

/**
 * Check if a template is revertable to its original theme-provided template file.
 *
 * @param {Object} template The template entity to check.
 * @return {boolean} Whether the template is revertable.
 */
function isTemplateRevertable(template) {
  if (!template) {
    return false;
  }
  /* eslint-disable camelcase */
  return template?.source === TEMPLATE_ORIGINS.custom && template?.has_theme_file;
  /* eslint-enable camelcase */
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/store/private-actions.js
/**
 * WordPress dependencies
 */










/**
 * Internal dependencies
 */


/**
 * Returns an action object used to set which template is currently being used/edited.
 *
 * @param {string} id Template Id.
 *
 * @return {Object} Action object.
 */
function setCurrentTemplateId(id) {
  return {
    type: 'SET_CURRENT_TEMPLATE_ID',
    id
  };
}

/**
 * Create a block based template.
 *
 * @param {Object?} template Template to create and assign.
 */
const createTemplate = template => async ({
  select,
  dispatch,
  registry
}) => {
  const savedTemplate = await registry.dispatch(external_wp_coreData_namespaceObject.store).saveEntityRecord('postType', 'wp_template', template);
  registry.dispatch(external_wp_coreData_namespaceObject.store).editEntityRecord('postType', select.getCurrentPostType(), select.getCurrentPostId(), {
    template: savedTemplate.slug
  });
  registry.dispatch(external_wp_notices_namespaceObject.store).createSuccessNotice((0,external_wp_i18n_namespaceObject.__)("Custom template created. You're in template mode now."), {
    type: 'snackbar',
    actions: [{
      label: (0,external_wp_i18n_namespaceObject.__)('Go back'),
      onClick: () => dispatch.setRenderingMode(select.getEditorSettings().defaultRenderingMode)
    }]
  });
  return savedTemplate;
};

/**
 * Update the provided block types to be visible.
 *
 * @param {string[]} blockNames Names of block types to show.
 */
const showBlockTypes = blockNames => ({
  registry
}) => {
  var _registry$select$get;
  const existingBlockNames = (_registry$select$get = registry.select(external_wp_preferences_namespaceObject.store).get('core', 'hiddenBlockTypes')) !== null && _registry$select$get !== void 0 ? _registry$select$get : [];
  const newBlockNames = existingBlockNames.filter(type => !(Array.isArray(blockNames) ? blockNames : [blockNames]).includes(type));
  registry.dispatch(external_wp_preferences_namespaceObject.store).set('core', 'hiddenBlockTypes', newBlockNames);
};

/**
 * Update the provided block types to be hidden.
 *
 * @param {string[]} blockNames Names of block types to hide.
 */
const hideBlockTypes = blockNames => ({
  registry
}) => {
  var _registry$select$get2;
  const existingBlockNames = (_registry$select$get2 = registry.select(external_wp_preferences_namespaceObject.store).get('core', 'hiddenBlockTypes')) !== null && _registry$select$get2 !== void 0 ? _registry$select$get2 : [];
  const mergedBlockNames = new Set([...existingBlockNames, ...(Array.isArray(blockNames) ? blockNames : [blockNames])]);
  registry.dispatch(external_wp_preferences_namespaceObject.store).set('core', 'hiddenBlockTypes', [...mergedBlockNames]);
};

/**
 * Save entity records marked as dirty.
 *
 * @param {Object}   options                      Options for the action.
 * @param {Function} [options.onSave]             Callback when saving happens.
 * @param {object[]} [options.dirtyEntityRecords] Array of dirty entities.
 * @param {object[]} [options.entitiesToSkip]     Array of entities to skip saving.
 * @param {Function} [options.close]              Callback when the actions is called. It should be consolidated with `onSave`.
 */
const saveDirtyEntities = ({
  onSave,
  dirtyEntityRecords = [],
  entitiesToSkip = [],
  close
} = {}) => ({
  registry
}) => {
  const PUBLISH_ON_SAVE_ENTITIES = [{
    kind: 'postType',
    name: 'wp_navigation'
  }];
  const saveNoticeId = 'site-editor-save-success';
  const homeUrl = registry.select(external_wp_coreData_namespaceObject.store).getUnstableBase()?.home;
  registry.dispatch(external_wp_notices_namespaceObject.store).removeNotice(saveNoticeId);
  const entitiesToSave = dirtyEntityRecords.filter(({
    kind,
    name,
    key,
    property
  }) => {
    return !entitiesToSkip.some(elt => elt.kind === kind && elt.name === name && elt.key === key && elt.property === property);
  });
  close?.(entitiesToSave);
  const siteItemsToSave = [];
  const pendingSavedRecords = [];
  entitiesToSave.forEach(({
    kind,
    name,
    key,
    property
  }) => {
    if ('root' === kind && 'site' === name) {
      siteItemsToSave.push(property);
    } else {
      if (PUBLISH_ON_SAVE_ENTITIES.some(typeToPublish => typeToPublish.kind === kind && typeToPublish.name === name)) {
        registry.dispatch(external_wp_coreData_namespaceObject.store).editEntityRecord(kind, name, key, {
          status: 'publish'
        });
      }
      pendingSavedRecords.push(registry.dispatch(external_wp_coreData_namespaceObject.store).saveEditedEntityRecord(kind, name, key));
    }
  });
  if (siteItemsToSave.length) {
    pendingSavedRecords.push(registry.dispatch(external_wp_coreData_namespaceObject.store).__experimentalSaveSpecifiedEntityEdits('root', 'site', undefined, siteItemsToSave));
  }
  registry.dispatch(external_wp_blockEditor_namespaceObject.store).__unstableMarkLastChangeAsPersistent();
  Promise.all(pendingSavedRecords).then(values => {
    return onSave ? onSave(values) : values;
  }).then(values => {
    if (values.some(value => typeof value === 'undefined')) {
      registry.dispatch(external_wp_notices_namespaceObject.store).createErrorNotice((0,external_wp_i18n_namespaceObject.__)('Saving failed.'));
    } else {
      registry.dispatch(external_wp_notices_namespaceObject.store).createSuccessNotice((0,external_wp_i18n_namespaceObject.__)('Site updated.'), {
        type: 'snackbar',
        id: saveNoticeId,
        actions: [{
          label: (0,external_wp_i18n_namespaceObject.__)('View site'),
          url: homeUrl
        }]
      });
    }
  }).catch(error => registry.dispatch(external_wp_notices_namespaceObject.store).createErrorNotice(`${(0,external_wp_i18n_namespaceObject.__)('Saving failed.')} ${error}`));
};

/**
 * Reverts a template to its original theme-provided file.
 *
 * @param {Object}  template            The template to revert.
 * @param {Object}  [options]
 * @param {boolean} [options.allowUndo] Whether to allow the user to undo
 *                                      reverting the template. Default true.
 */
const revertTemplate = (template, {
  allowUndo = true
} = {}) => async ({
  registry
}) => {
  const noticeId = 'edit-site-template-reverted';
  registry.dispatch(external_wp_notices_namespaceObject.store).removeNotice(noticeId);
  if (!isTemplateRevertable(template)) {
    registry.dispatch(external_wp_notices_namespaceObject.store).createErrorNotice((0,external_wp_i18n_namespaceObject.__)('This template is not revertable.'), {
      type: 'snackbar'
    });
    return;
  }
  try {
    const templateEntityConfig = registry.select(external_wp_coreData_namespaceObject.store).getEntityConfig('postType', template.type);
    if (!templateEntityConfig) {
      registry.dispatch(external_wp_notices_namespaceObject.store).createErrorNotice((0,external_wp_i18n_namespaceObject.__)('The editor has encountered an unexpected error. Please reload.'), {
        type: 'snackbar'
      });
      return;
    }
    const fileTemplatePath = (0,external_wp_url_namespaceObject.addQueryArgs)(`${templateEntityConfig.baseURL}/${template.id}`, {
      context: 'edit',
      source: 'theme'
    });
    const fileTemplate = await external_wp_apiFetch_default()({
      path: fileTemplatePath
    });
    if (!fileTemplate) {
      registry.dispatch(external_wp_notices_namespaceObject.store).createErrorNotice((0,external_wp_i18n_namespaceObject.__)('The editor has encountered an unexpected error. Please reload.'), {
        type: 'snackbar'
      });
      return;
    }
    const serializeBlocks = ({
      blocks: blocksForSerialization = []
    }) => (0,external_wp_blocks_namespaceObject.__unstableSerializeAndClean)(blocksForSerialization);
    const edited = registry.select(external_wp_coreData_namespaceObject.store).getEditedEntityRecord('postType', template.type, template.id);

    // We are fixing up the undo level here to make sure we can undo
    // the revert in the header toolbar correctly.
    registry.dispatch(external_wp_coreData_namespaceObject.store).editEntityRecord('postType', template.type, template.id, {
      content: serializeBlocks,
      // Required to make the `undo` behave correctly.
      blocks: edited.blocks,
      // Required to revert the blocks in the editor.
      source: 'custom' // required to avoid turning the editor into a dirty state
    }, {
      undoIgnore: true // Required to merge this edit with the last undo level.
    });
    const blocks = (0,external_wp_blocks_namespaceObject.parse)(fileTemplate?.content?.raw);
    registry.dispatch(external_wp_coreData_namespaceObject.store).editEntityRecord('postType', template.type, fileTemplate.id, {
      content: serializeBlocks,
      blocks,
      source: 'theme'
    });
    if (allowUndo) {
      const undoRevert = () => {
        registry.dispatch(external_wp_coreData_namespaceObject.store).editEntityRecord('postType', template.type, edited.id, {
          content: serializeBlocks,
          blocks: edited.blocks,
          source: 'custom'
        });
      };
      registry.dispatch(external_wp_notices_namespaceObject.store).createSuccessNotice((0,external_wp_i18n_namespaceObject.__)('Template reset.'), {
        type: 'snackbar',
        id: noticeId,
        actions: [{
          label: (0,external_wp_i18n_namespaceObject.__)('Undo'),
          onClick: undoRevert
        }]
      });
    }
  } catch (error) {
    const errorMessage = error.message && error.code !== 'unknown_error' ? error.message : (0,external_wp_i18n_namespaceObject.__)('Template revert failed. Please reload.');
    registry.dispatch(external_wp_notices_namespaceObject.store).createErrorNotice(errorMessage, {
      type: 'snackbar'
    });
  }
};

/**
 * Action that removes an array of templates, template parts or patterns.
 *
 * @param {Array} items An array of template,template part or pattern objects to remove.
 */
const removeTemplates = items => async ({
  registry
}) => {
  const promiseResult = await Promise.allSettled(items.map(item => {
    return registry.dispatch(external_wp_coreData_namespaceObject.store).deleteEntityRecord('postType', item.type, item.id, {
      force: true
    }, {
      throwOnError: true
    });
  }));

  // If all the promises were fulfilled with sucess.
  if (promiseResult.every(({
    status
  }) => status === 'fulfilled')) {
    let successMessage;
    if (items.length === 1) {
      // Depending on how the entity was retrieved its title might be
      // an object or simple string.
      const title = typeof items[0].title === 'string' ? items[0].title : items[0].title?.rendered;
      successMessage = (0,external_wp_i18n_namespaceObject.sprintf)( /* translators: The template/part's name. */
      (0,external_wp_i18n_namespaceObject.__)('"%s" deleted.'), (0,external_wp_htmlEntities_namespaceObject.decodeEntities)(title));
    } else {
      successMessage = (0,external_wp_i18n_namespaceObject.__)('Items deleted.');
    }
    registry.dispatch(external_wp_notices_namespaceObject.store).createSuccessNotice(successMessage, {
      type: 'snackbar',
      id: 'editor-template-deleted-success'
    });
  } else {
    // If there was at lease one failure.
    let errorMessage;
    // If we were trying to delete a single template.
    if (promiseResult.length === 1) {
      if (promiseResult[0].reason?.message) {
        errorMessage = promiseResult[0].reason.message;
      } else {
        errorMessage = (0,external_wp_i18n_namespaceObject.__)('An error occurred while deleting the item.');
      }
      // If we were trying to delete a multiple templates
    } else {
      const errorMessages = new Set();
      const failedPromises = promiseResult.filter(({
        status
      }) => status === 'rejected');
      for (const failedPromise of failedPromises) {
        if (failedPromise.reason?.message) {
          errorMessages.add(failedPromise.reason.message);
        }
      }
      if (errorMessages.size === 0) {
        errorMessage = (0,external_wp_i18n_namespaceObject.__)('An error occurred while deleting the items.');
      } else if (errorMessages.size === 1) {
        errorMessage = (0,external_wp_i18n_namespaceObject.sprintf)( /* translators: %s: an error message */
        (0,external_wp_i18n_namespaceObject.__)('An error occurred while deleting the items: %s'), [...errorMessages][0]);
      } else {
        (0,external_wp_i18n_namespaceObject.sprintf)( /* translators: %s: a list of comma separated error messages */
        (0,external_wp_i18n_namespaceObject.__)('Some errors occurred while deleting the items: %s'), [...errorMessages].join(','));
      }
    }
    registry.dispatch(external_wp_notices_namespaceObject.store).createErrorNotice(errorMessage, {
      type: 'snackbar'
    });
  }
};

// EXTERNAL MODULE: ./node_modules/fast-deep-equal/index.js
var fast_deep_equal = __webpack_require__(5215);
var fast_deep_equal_default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal);
;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/symbol.js
/**
 * WordPress dependencies
 */


const symbol = /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.Path, {
    d: "M21.3 10.8l-5.6-5.6c-.7-.7-1.8-.7-2.5 0l-5.6 5.6c-.7.7-.7 1.8 0 2.5l5.6 5.6c.3.3.8.5 1.2.5s.9-.2 1.2-.5l5.6-5.6c.8-.7.8-1.9.1-2.5zm-1 1.4l-5.6 5.6c-.1.1-.3.1-.4 0l-5.6-5.6c-.1-.1-.1-.3 0-.4l5.6-5.6s.1-.1.2-.1.1 0 .2.1l5.6 5.6c.1.1.1.3 0 .4zm-16.6-.4L10 5.5l-1-1-6.3 6.3c-.7.7-.7 1.8 0 2.5L9 19.5l1.1-1.1-6.3-6.3c-.2 0-.2-.2-.1-.3z"
  })
});
/* harmony default export */ const library_symbol = (symbol);

;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/navigation.js
/**
 * WordPress dependencies
 */


const navigation = /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.Path, {
    d: "M12 4c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14.5c-3.6 0-6.5-2.9-6.5-6.5S8.4 5.5 12 5.5s6.5 2.9 6.5 6.5-2.9 6.5-6.5 6.5zM9 16l4.5-3L15 8.4l-4.5 3L9 16z"
  })
});
/* harmony default export */ const library_navigation = (navigation);

;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/page.js
/**
 * WordPress dependencies
 */



const page = /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_primitives_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.Path, {
    d: "M15.5 7.5h-7V9h7V7.5Zm-7 3.5h7v1.5h-7V11Zm7 3.5h-7V16h7v-1.5Z"
  }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.Path, {
    d: "M17 4H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM7 5.5h10a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5Z"
  })]
});
/* harmony default export */ const library_page = (page);

;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/verse.js
/**
 * WordPress dependencies
 */


const verse = /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.Path, {
    d: "M17.8 2l-.9.3c-.1 0-3.6 1-5.2 2.1C10 5.5 9.3 6.5 8.9 7.1c-.6.9-1.7 4.7-1.7 6.3l-.9 2.3c-.2.4 0 .8.4 1 .1 0 .2.1.3.1.3 0 .6-.2.7-.5l.6-1.5c.3 0 .7-.1 1.2-.2.7-.1 1.4-.3 2.2-.5.8-.2 1.6-.5 2.4-.8.7-.3 1.4-.7 1.9-1.2s.8-1.2 1-1.9c.2-.7.3-1.6.4-2.4.1-.8.1-1.7.2-2.5 0-.8.1-1.5.2-2.1V2zm-1.9 5.6c-.1.8-.2 1.5-.3 2.1-.2.6-.4 1-.6 1.3-.3.3-.8.6-1.4.9-.7.3-1.4.5-2.2.8-.6.2-1.3.3-1.8.4L15 7.5c.3-.3.6-.7 1-1.1 0 .4 0 .8-.1 1.2zM6 20h8v-1.5H6V20z"
  })
});
/* harmony default export */ const library_verse = (verse);

;// CONCATENATED MODULE: ./node_modules/memize/dist/index.js
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
 * @template {(...args: any[]) => any} F
 *
 * @param {F}             fn        Function to memoize.
 * @param {MemizeOptions} [options] Options object.
 *
 * @return {((...args: Parameters<F>) => ReturnType<F>) & MemizeMemoizedFunction} Memoized function.
 */
function memize(fn, options) {
	var size = 0;

	/** @type {?MemizeCacheNode|undefined} */
	var head;

	/** @type {?MemizeCacheNode|undefined} */
	var tail;

	options = options || {};

	function memoized(/* ...args */) {
		var node = head,
			len = arguments.length,
			args,
			i;

		searchCache: while (node) {
			// Perform a shallow equality test to confirm that whether the node
			// under test is a candidate for the arguments passed. Two arrays
			// are shallowly equal if their length matches and each entry is
			// strictly equal between the two sets. Avoid abstracting to a
			// function which could incur an arguments leaking deoptimization.

			// Check whether node arguments match arguments length
			if (node.args.length !== arguments.length) {
				node = node.next;
				continue;
			}

			// Check whether node arguments match arguments values
			for (i = 0; i < len; i++) {
				if (node.args[i] !== arguments[i]) {
					node = node.next;
					continue searchCache;
				}
			}

			// At this point we can assume we've found a match

			// Surface matched node to head if not already
			if (node !== head) {
				// As tail, shift to previous. Must only shift if not also
				// head, since if both head and tail, there is no previous.
				if (node === tail) {
					tail = node.prev;
				}

				// Adjust siblings to point to each other. If node was tail,
				// this also handles new tail's empty `next` assignment.
				/** @type {MemizeCacheNode} */ (node.prev).next = node.next;
				if (node.next) {
					node.next.prev = node.prev;
				}

				node.next = head;
				node.prev = null;
				/** @type {MemizeCacheNode} */ (head).prev = node;
				head = node;
			}

			// Return immediately
			return node.val;
		}

		// No cached value found. Continue to insertion phase:

		// Create a copy of arguments (avoid leaking deoptimization)
		args = new Array(len);
		for (i = 0; i < len; i++) {
			args[i] = arguments[i];
		}

		node = {
			args: args,

			// Generate the result from original function
			val: fn.apply(null, args),
		};

		// Don't need to check whether node is already head, since it would
		// have been returned above already if it was

		// Shift existing head down list
		if (head) {
			head.prev = node;
			node.next = head;
		} else {
			// If no head, follows that there's no tail (at initial or reset)
			tail = node;
		}

		// Trim tail if we're reached max size and are pending cache insertion
		if (size === /** @type {MemizeOptions} */ (options).maxSize) {
			tail = /** @type {MemizeCacheNode} */ (tail).prev;
			/** @type {MemizeCacheNode} */ (tail).next = null;
		} else {
			size++;
		}

		head = node;

		return node.val;
	}

	memoized.clear = function () {
		head = null;
		tail = null;
		size = 0;
	};

	// Ignore reason: There's not a clear solution to create an intersection of
	// the function with additional properties, where the goal is to retain the
	// function signature of the incoming argument and add control properties
	// on the return value.

	// @ts-ignore
	return memoized;
}



;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/store/utils/get-filtered-template-parts.js
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */

const EMPTY_ARRAY = [];

/**
 * Get a flattened and filtered list of template parts and the matching block for that template part.
 *
 * Takes a list of blocks defined within a template, and a list of template parts, and returns a
 * flattened list of template parts and the matching block for that template part.
 *
 * @param {Array}  blocks        Blocks to flatten.
 * @param {?Array} templateParts Available template parts.
 * @return {Array} An array of template parts and their blocks.
 */
function getFilteredTemplatePartBlocks(blocks = EMPTY_ARRAY, templateParts) {
  const templatePartsById = templateParts ?
  // Key template parts by their ID.
  templateParts.reduce((newTemplateParts, part) => ({
    ...newTemplateParts,
    [part.id]: part
  }), {}) : {};
  const result = [];

  // Iterate over all blocks, recursing into inner blocks.
  // Output will be based on a depth-first traversal.
  const stack = [...blocks];
  while (stack.length) {
    const {
      innerBlocks,
      ...block
    } = stack.shift();
    // Place inner blocks at the beginning of the stack to preserve order.
    stack.unshift(...innerBlocks);
    if ((0,external_wp_blocks_namespaceObject.isTemplatePart)(block)) {
      const {
        attributes: {
          theme,
          slug
        }
      } = block;
      const templatePartId = `${theme}//${slug}`;
      const templatePart = templatePartsById[templatePartId];

      // Only add to output if the found template part block is in the list of available template parts.
      if (templatePart) {
        result.push({
          templatePart,
          block
        });
      }
    }
  }
  return result;
}
const memoizedGetFilteredTemplatePartBlocks = memize(getFilteredTemplatePartBlocks);


;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/store/private-selectors.js
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



const EMPTY_INSERTION_POINT = {
  rootClientId: undefined,
  insertionIndex: undefined,
  filterValue: undefined
};

/**
 * Get the insertion point for the inserter.
 *
 * @param {Object} state Global application state.
 *
 * @return {Object} The root client ID, index to insert at and starting filter value.
 */
const getInsertionPoint = (0,external_wp_data_namespaceObject.createRegistrySelector)(select => (0,external_wp_data_namespaceObject.createSelector)(state => {
  if (typeof state.blockInserterPanel === 'object') {
    return state.blockInserterPanel;
  }
  if (getRenderingMode(state) === 'template-locked') {
    const [postContentClientId] = select(external_wp_blockEditor_namespaceObject.store).getBlocksByName('core/post-content');
    if (postContentClientId) {
      return {
        rootClientId: postContentClientId,
        insertionIndex: undefined,
        filterValue: undefined
      };
    }
  }
  return EMPTY_INSERTION_POINT;
}, state => {
  const [postContentClientId] = select(external_wp_blockEditor_namespaceObject.store).getBlocksByName('core/post-content');
  return [state.blockInserterPanel, getRenderingMode(state), postContentClientId];
}));
function getListViewToggleRef(state) {
  return state.listViewToggleRef;
}
function getInserterSidebarToggleRef(state) {
  return state.inserterSidebarToggleRef;
}
const CARD_ICONS = {
  wp_block: library_symbol,
  wp_navigation: library_navigation,
  page: library_page,
  post: library_verse
};
const getPostIcon = (0,external_wp_data_namespaceObject.createRegistrySelector)(select => (state, postType, options) => {
  {
    if (postType === 'wp_template_part' || postType === 'wp_template') {
      return __experimentalGetDefaultTemplatePartAreas(state).find(item => options.area === item.area)?.icon || library_layout;
    }
    if (CARD_ICONS[postType]) {
      return CARD_ICONS[postType];
    }
    const postTypeEntity = select(external_wp_coreData_namespaceObject.store).getPostType(postType);
    // `icon` is the `menu_icon` property of a post type. We
    // only handle `dashicons` for now, even if the `menu_icon`
    // also supports urls and svg as values.
    if (postTypeEntity?.icon?.startsWith('dashicons-')) {
      return postTypeEntity.icon.slice(10);
    }
    return library_page;
  }
});

/**
 * Returns the template parts and their blocks for the current edited template.
 *
 * @param {Object} state Global application state.
 * @return {Array} Template parts and their blocks in an array.
 */
const getCurrentTemplateTemplateParts = (0,external_wp_data_namespaceObject.createRegistrySelector)(select => () => {
  const templateParts = select(external_wp_coreData_namespaceObject.store).getEntityRecords('postType', TEMPLATE_PART_POST_TYPE, {
    per_page: -1
  });
  const clientIds = select(external_wp_blockEditor_namespaceObject.store).getBlocksByName('core/template-part');
  const blocks = select(external_wp_blockEditor_namespaceObject.store).getBlocksByClientId(clientIds);
  return memoizedGetFilteredTemplatePartBlocks(blocks, templateParts);
});

/**
 * Returns true if there are unsaved changes to the
 * post's meta fields, and false otherwise.
 *
 * @param {Object} state    Global application state.
 * @param {string} postType The post type of the post.
 * @param {number} postId   The ID of the post.
 *
 * @return {boolean} Whether there are edits or not in the meta fields of the relevant post.
 */
const hasPostMetaChanges = (0,external_wp_data_namespaceObject.createRegistrySelector)(select => (state, postType, postId) => {
  const {
    type: currentPostType,
    id: currentPostId
  } = getCurrentPost(state);
  // If no postType or postId is passed, use the current post.
  const edits = select(external_wp_coreData_namespaceObject.store).getEntityRecordNonTransientEdits('postType', postType || currentPostType, postId || currentPostId);
  if (!edits?.meta) {
    return false;
  }

  // Compare if anything apart from `footnotes` has changed.
  const originalPostMeta = select(external_wp_coreData_namespaceObject.store).getEntityRecord('postType', postType || currentPostType, postId || currentPostId)?.meta;
  return !fast_deep_equal_default()({
    ...originalPostMeta,
    footnotes: undefined
  }, {
    ...edits.meta,
    footnotes: undefined
  });
});

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/store/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */








/**
 * Post editor data store configuration.
 *
 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/data/README.md#registerStore
 *
 * @type {Object}
 */
const storeConfig = {
  reducer: reducer,
  selectors: selectors_namespaceObject,
  actions: actions_namespaceObject
};

/**
 * Store definition for the editor namespace.
 *
 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/data/README.md#createReduxStore
 *
 * @type {Object}
 */
const store_store = (0,external_wp_data_namespaceObject.createReduxStore)(STORE_NAME, {
  ...storeConfig
});
(0,external_wp_data_namespaceObject.register)(store_store);
unlock(store_store).registerPrivateActions(private_actions_namespaceObject);
unlock(store_store).registerPrivateSelectors(private_selectors_namespaceObject);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/bindings/post-meta.js
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */

/* harmony default export */ const post_meta = ({
  name: 'core/post-meta',
  label: (0,external_wp_i18n_namespaceObject._x)('Post Meta', 'block bindings source'),
  getPlaceholder({
    args
  }) {
    return args.key;
  },
  getValue({
    registry,
    context,
    args
  }) {
    return registry.select(external_wp_coreData_namespaceObject.store).getEditedEntityRecord('postType', context?.postType, context?.postId).meta?.[args.key];
  },
  setValue({
    registry,
    context,
    args,
    value
  }) {
    registry.dispatch(external_wp_coreData_namespaceObject.store).editEntityRecord('postType', context?.postType, context?.postId, {
      meta: {
        [args.key]: value
      }
    });
  },
  canUserEditValue({
    select,
    context,
    args
  }) {
    const postType = context?.postType || select(store_store).getCurrentPostType();

    // Check that editing is happening in the post editor and not a template.
    if (postType === 'wp_template') {
      return false;
    }

    // Check that the custom field is not protected and available in the REST API.
    const isFieldExposed = !!select(external_wp_coreData_namespaceObject.store).getEntityRecord('postType', postType, context?.postId)?.meta?.[args.key];
    if (!isFieldExposed) {
      return false;
    }

    // Check that the user has the capability to edit post meta.
    const canUserEdit = select(external_wp_coreData_namespaceObject.store).canUserEditEntityRecord('postType', context?.postType, context?.postId);
    if (!canUserEdit) {
      return false;
    }
    return true;
  }
});

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/bindings/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



const {
  registerBlockBindingsSource
} = unlock((0,external_wp_data_namespaceObject.dispatch)(external_wp_blocks_namespaceObject.store));
registerBlockBindingsSource(post_meta);
registerBlockBindingsSource(pattern_overrides);

;// CONCATENATED MODULE: external ["wp","compose"]
const external_wp_compose_namespaceObject = window["wp"]["compose"];
;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/hooks/custom-sources-backwards-compatibility.js
/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */


/** @typedef {import('@wordpress/compose').WPHigherOrderComponent} WPHigherOrderComponent */
/** @typedef {import('@wordpress/blocks').WPBlockSettings} WPBlockSettings */

/**
 * Object whose keys are the names of block attributes, where each value
 * represents the meta key to which the block attribute is intended to save.
 *
 * @see https://developer.wordpress.org/reference/functions/register_meta/
 *
 * @typedef {Object<string,string>} WPMetaAttributeMapping
 */

/**
 * Given a mapping of attribute names (meta source attributes) to their
 * associated meta key, returns a higher order component that overrides its
 * `attributes` and `setAttributes` props to sync any changes with the edited
 * post's meta keys.
 *
 * @param {WPMetaAttributeMapping} metaAttributes Meta attribute mapping.
 *
 * @return {WPHigherOrderComponent} Higher-order component.
 */

const createWithMetaAttributeSource = metaAttributes => (0,external_wp_compose_namespaceObject.createHigherOrderComponent)(BlockEdit => ({
  attributes,
  setAttributes,
  ...props
}) => {
  const postType = (0,external_wp_data_namespaceObject.useSelect)(select => select(store_store).getCurrentPostType(), []);
  const [meta, setMeta] = (0,external_wp_coreData_namespaceObject.useEntityProp)('postType', postType, 'meta');
  const mergedAttributes = (0,external_wp_element_namespaceObject.useMemo)(() => ({
    ...attributes,
    ...Object.fromEntries(Object.entries(metaAttributes).map(([attributeKey, metaKey]) => [attributeKey, meta[metaKey]]))
  }), [attributes, meta]);
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(BlockEdit, {
    attributes: mergedAttributes,
    setAttributes: nextAttributes => {
      const nextMeta = Object.fromEntries(Object.entries(nextAttributes !== null && nextAttributes !== void 0 ? nextAttributes : {}).filter(
      // Filter to intersection of keys between the updated
      // attributes and those with an associated meta key.
      ([key]) => key in metaAttributes).map(([attributeKey, value]) => [
      // Rename the keys to the expected meta key name.
      metaAttributes[attributeKey], value]));
      if (Object.entries(nextMeta).length) {
        setMeta(nextMeta);
      }
      setAttributes(nextAttributes);
    },
    ...props
  });
}, 'withMetaAttributeSource');

/**
 * Filters a registered block's settings to enhance a block's `edit` component
 * to upgrade meta-sourced attributes to use the post's meta entity property.
 *
 * @param {WPBlockSettings} settings Registered block settings.
 *
 * @return {WPBlockSettings} Filtered block settings.
 */
function shimAttributeSource(settings) {
  var _settings$attributes;
  /** @type {WPMetaAttributeMapping} */
  const metaAttributes = Object.fromEntries(Object.entries((_settings$attributes = settings.attributes) !== null && _settings$attributes !== void 0 ? _settings$attributes : {}).filter(([, {
    source
  }]) => source === 'meta').map(([attributeKey, {
    meta
  }]) => [attributeKey, meta]));
  if (Object.entries(metaAttributes).length) {
    settings.edit = createWithMetaAttributeSource(metaAttributes)(settings.edit);
  }
  return settings;
}
(0,external_wp_hooks_namespaceObject.addFilter)('blocks.registerBlockType', 'core/editor/custom-sources-backwards-compatibility/shim-attribute-source', shimAttributeSource);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/autocompleters/user.js
/**
 * WordPress dependencies
 */




/** @typedef {import('@wordpress/components').WPCompleter} WPCompleter */



function getUserLabel(user) {
  const avatar = user.avatar_urls && user.avatar_urls[24] ? /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("img", {
    className: "editor-autocompleters__user-avatar",
    alt: "",
    src: user.avatar_urls[24]
  }) : /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("span", {
    className: "editor-autocompleters__no-avatar"
  });
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
    children: [avatar, /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("span", {
      className: "editor-autocompleters__user-name",
      children: user.name
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("span", {
      className: "editor-autocompleters__user-slug",
      children: user.slug
    })]
  });
}

/**
 * A user mentions completer.
 *
 * @type {WPCompleter}
 */
/* harmony default export */ const user = ({
  name: 'users',
  className: 'editor-autocompleters__user',
  triggerPrefix: '@',
  useItems(filterValue) {
    const users = (0,external_wp_data_namespaceObject.useSelect)(select => {
      const {
        getUsers
      } = select(external_wp_coreData_namespaceObject.store);
      return getUsers({
        context: 'view',
        search: encodeURIComponent(filterValue)
      });
    }, [filterValue]);
    const options = (0,external_wp_element_namespaceObject.useMemo)(() => users ? users.map(user => ({
      key: `user-${user.slug}`,
      value: user,
      label: getUserLabel(user)
    })) : [], [users]);
    return [options];
  },
  getOptionCompletion(user) {
    return `@${user.slug}`;
  }
});

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/hooks/default-autocompleters.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */

function setDefaultCompleters(completers = []) {
  // Provide copies so filters may directly modify them.
  completers.push({
    ...user
  });
  return completers;
}
(0,external_wp_hooks_namespaceObject.addFilter)('editor.Autocomplete.completers', 'editor/autocompleters/set-default-completers', setDefaultCompleters);

;// CONCATENATED MODULE: external ["wp","mediaUtils"]
const external_wp_mediaUtils_namespaceObject = window["wp"]["mediaUtils"];
;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/hooks/media-upload.js
/**
 * WordPress dependencies
 */


(0,external_wp_hooks_namespaceObject.addFilter)('editor.MediaUpload', 'core/editor/components/media-upload', () => external_wp_mediaUtils_namespaceObject.MediaUpload);

;// CONCATENATED MODULE: external ["wp","patterns"]
const external_wp_patterns_namespaceObject = window["wp"]["patterns"];
;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/hooks/pattern-overrides.js
/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */





const {
  PatternOverridesControls,
  ResetOverridesControl,
  PATTERN_TYPES,
  PARTIAL_SYNCING_SUPPORTED_BLOCKS,
  PATTERN_SYNC_TYPES
} = unlock(external_wp_patterns_namespaceObject.privateApis);

/**
 * Override the default edit UI to include a new block inspector control for
 * assigning a partial syncing controls to supported blocks in the pattern editor.
 * Currently, only the `core/paragraph` block is supported.
 *
 * @param {Component} BlockEdit Original component.
 *
 * @return {Component} Wrapped component.
 */
const withPatternOverrideControls = (0,external_wp_compose_namespaceObject.createHigherOrderComponent)(BlockEdit => props => {
  const isSupportedBlock = Object.keys(PARTIAL_SYNCING_SUPPORTED_BLOCKS).includes(props.name);
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
    children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(BlockEdit, {
      ...props
    }), props.isSelected && isSupportedBlock && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(ControlsWithStoreSubscription, {
      ...props
    })]
  });
});

// Split into a separate component to avoid a store subscription
// on every block.
function ControlsWithStoreSubscription(props) {
  const blockEditingMode = (0,external_wp_blockEditor_namespaceObject.useBlockEditingMode)();
  const {
    hasPatternOverridesSource,
    isEditingSyncedPattern
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getBlockBindingsSource
    } = unlock(select(external_wp_blocks_namespaceObject.store));
    const {
      getCurrentPostType,
      getEditedPostAttribute
    } = select(store_store);
    return {
      // For editing link to the site editor if the theme and user permissions support it.
      hasPatternOverridesSource: !!getBlockBindingsSource('core/pattern-overrides'),
      isEditingSyncedPattern: getCurrentPostType() === PATTERN_TYPES.user && getEditedPostAttribute('meta')?.wp_pattern_sync_status !== PATTERN_SYNC_TYPES.unsynced && getEditedPostAttribute('wp_pattern_sync_status') !== PATTERN_SYNC_TYPES.unsynced
    };
  }, []);
  const bindings = props.attributes.metadata?.bindings;
  const hasPatternBindings = !!bindings && Object.values(bindings).some(binding => binding.source === 'core/pattern-overrides');
  const shouldShowPatternOverridesControls = isEditingSyncedPattern && blockEditingMode === 'default';
  const shouldShowResetOverridesControl = !isEditingSyncedPattern && !!props.attributes.metadata?.name && blockEditingMode !== 'disabled' && hasPatternBindings;
  if (!hasPatternOverridesSource) {
    return null;
  }
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
    children: [shouldShowPatternOverridesControls && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PatternOverridesControls, {
      ...props
    }), shouldShowResetOverridesControl && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(ResetOverridesControl, {
      ...props
    })]
  });
}
(0,external_wp_hooks_namespaceObject.addFilter)('editor.BlockEdit', 'core/editor/with-pattern-override-controls', withPatternOverrideControls);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/hooks/index.js
/**
 * Internal dependencies
 */





;// CONCATENATED MODULE: external ["wp","keyboardShortcuts"]
const external_wp_keyboardShortcuts_namespaceObject = window["wp"]["keyboardShortcuts"];
;// CONCATENATED MODULE: ./node_modules/clsx/dist/clsx.mjs
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ const dist_clsx = (clsx);
;// CONCATENATED MODULE: external ["wp","components"]
const external_wp_components_namespaceObject = window["wp"]["components"];
;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/check.js
/**
 * WordPress dependencies
 */


const check = /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.Path, {
    d: "M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"
  })
});
/* harmony default export */ const library_check = (check);

;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/star-filled.js
/**
 * WordPress dependencies
 */


const starFilled = /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.Path, {
    d: "M11.776 4.454a.25.25 0 01.448 0l2.069 4.192a.25.25 0 00.188.137l4.626.672a.25.25 0 01.139.426l-3.348 3.263a.25.25 0 00-.072.222l.79 4.607a.25.25 0 01-.362.263l-4.138-2.175a.25.25 0 00-.232 0l-4.138 2.175a.25.25 0 01-.363-.263l.79-4.607a.25.25 0 00-.071-.222L4.754 9.881a.25.25 0 01.139-.426l4.626-.672a.25.25 0 00.188-.137l2.069-4.192z"
  })
});
/* harmony default export */ const star_filled = (starFilled);

;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/star-empty.js
/**
 * WordPress dependencies
 */


const starEmpty = /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.Path, {
    fillRule: "evenodd",
    d: "M9.706 8.646a.25.25 0 01-.188.137l-4.626.672a.25.25 0 00-.139.427l3.348 3.262a.25.25 0 01.072.222l-.79 4.607a.25.25 0 00.362.264l4.138-2.176a.25.25 0 01.233 0l4.137 2.175a.25.25 0 00.363-.263l-.79-4.607a.25.25 0 01.072-.222l3.347-3.262a.25.25 0 00-.139-.427l-4.626-.672a.25.25 0 01-.188-.137l-2.069-4.192a.25.25 0 00-.448 0L9.706 8.646zM12 7.39l-.948 1.921a1.75 1.75 0 01-1.317.957l-2.12.308 1.534 1.495c.412.402.6.982.503 1.55l-.362 2.11 1.896-.997a1.75 1.75 0 011.629 0l1.895.997-.362-2.11a1.75 1.75 0 01.504-1.55l1.533-1.495-2.12-.308a1.75 1.75 0 01-1.317-.957L12 7.39z",
    clipRule: "evenodd"
  })
});
/* harmony default export */ const star_empty = (starEmpty);

;// CONCATENATED MODULE: external ["wp","viewport"]
const external_wp_viewport_namespaceObject = window["wp"]["viewport"];
;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/close-small.js
/**
 * WordPress dependencies
 */


const closeSmall = /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.Path, {
    d: "M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"
  })
});
/* harmony default export */ const close_small = (closeSmall);

;// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/store/deprecated.js
/**
 * WordPress dependencies
 */

function normalizeComplementaryAreaScope(scope) {
  if (['core/edit-post', 'core/edit-site'].includes(scope)) {
    external_wp_deprecated_default()(`${scope} interface scope`, {
      alternative: 'core interface scope',
      hint: 'core/edit-post and core/edit-site are merging.',
      version: '6.6'
    });
    return 'core';
  }
  return scope;
}
function normalizeComplementaryAreaName(scope, name) {
  if (scope === 'core' && name === 'edit-site/template') {
    external_wp_deprecated_default()(`edit-site/template sidebar`, {
      alternative: 'edit-post/document',
      version: '6.6'
    });
    return 'edit-post/document';
  }
  if (scope === 'core' && name === 'edit-site/block-inspector') {
    external_wp_deprecated_default()(`edit-site/block-inspector sidebar`, {
      alternative: 'edit-post/block',
      version: '6.6'
    });
    return 'edit-post/block';
  }
  return name;
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/store/actions.js
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


/**
 * Set a default complementary area.
 *
 * @param {string} scope Complementary area scope.
 * @param {string} area  Area identifier.
 *
 * @return {Object} Action object.
 */
const setDefaultComplementaryArea = (scope, area) => {
  scope = normalizeComplementaryAreaScope(scope);
  area = normalizeComplementaryAreaName(scope, area);
  return {
    type: 'SET_DEFAULT_COMPLEMENTARY_AREA',
    scope,
    area
  };
};

/**
 * Enable the complementary area.
 *
 * @param {string} scope Complementary area scope.
 * @param {string} area  Area identifier.
 */
const enableComplementaryArea = (scope, area) => ({
  registry,
  dispatch
}) => {
  // Return early if there's no area.
  if (!area) {
    return;
  }
  scope = normalizeComplementaryAreaScope(scope);
  area = normalizeComplementaryAreaName(scope, area);
  const isComplementaryAreaVisible = registry.select(external_wp_preferences_namespaceObject.store).get(scope, 'isComplementaryAreaVisible');
  if (!isComplementaryAreaVisible) {
    registry.dispatch(external_wp_preferences_namespaceObject.store).set(scope, 'isComplementaryAreaVisible', true);
  }
  dispatch({
    type: 'ENABLE_COMPLEMENTARY_AREA',
    scope,
    area
  });
};

/**
 * Disable the complementary area.
 *
 * @param {string} scope Complementary area scope.
 */
const disableComplementaryArea = scope => ({
  registry
}) => {
  scope = normalizeComplementaryAreaScope(scope);
  const isComplementaryAreaVisible = registry.select(external_wp_preferences_namespaceObject.store).get(scope, 'isComplementaryAreaVisible');
  if (isComplementaryAreaVisible) {
    registry.dispatch(external_wp_preferences_namespaceObject.store).set(scope, 'isComplementaryAreaVisible', false);
  }
};

/**
 * Pins an item.
 *
 * @param {string} scope Item scope.
 * @param {string} item  Item identifier.
 *
 * @return {Object} Action object.
 */
const pinItem = (scope, item) => ({
  registry
}) => {
  // Return early if there's no item.
  if (!item) {
    return;
  }
  scope = normalizeComplementaryAreaScope(scope);
  item = normalizeComplementaryAreaName(scope, item);
  const pinnedItems = registry.select(external_wp_preferences_namespaceObject.store).get(scope, 'pinnedItems');

  // The item is already pinned, there's nothing to do.
  if (pinnedItems?.[item] === true) {
    return;
  }
  registry.dispatch(external_wp_preferences_namespaceObject.store).set(scope, 'pinnedItems', {
    ...pinnedItems,
    [item]: true
  });
};

/**
 * Unpins an item.
 *
 * @param {string} scope Item scope.
 * @param {string} item  Item identifier.
 */
const unpinItem = (scope, item) => ({
  registry
}) => {
  // Return early if there's no item.
  if (!item) {
    return;
  }
  scope = normalizeComplementaryAreaScope(scope);
  item = normalizeComplementaryAreaName(scope, item);
  const pinnedItems = registry.select(external_wp_preferences_namespaceObject.store).get(scope, 'pinnedItems');
  registry.dispatch(external_wp_preferences_namespaceObject.store).set(scope, 'pinnedItems', {
    ...pinnedItems,
    [item]: false
  });
};

/**
 * Returns an action object used in signalling that a feature should be toggled.
 *
 * @param {string} scope       The feature scope (e.g. core/edit-post).
 * @param {string} featureName The feature name.
 */
function toggleFeature(scope, featureName) {
  return function ({
    registry
  }) {
    external_wp_deprecated_default()(`dispatch( 'core/interface' ).toggleFeature`, {
      since: '6.0',
      alternative: `dispatch( 'core/preferences' ).toggle`
    });
    registry.dispatch(external_wp_preferences_namespaceObject.store).toggle(scope, featureName);
  };
}

/**
 * Returns an action object used in signalling that a feature should be set to
 * a true or false value
 *
 * @param {string}  scope       The feature scope (e.g. core/edit-post).
 * @param {string}  featureName The feature name.
 * @param {boolean} value       The value to set.
 *
 * @return {Object} Action object.
 */
function setFeatureValue(scope, featureName, value) {
  return function ({
    registry
  }) {
    external_wp_deprecated_default()(`dispatch( 'core/interface' ).setFeatureValue`, {
      since: '6.0',
      alternative: `dispatch( 'core/preferences' ).set`
    });
    registry.dispatch(external_wp_preferences_namespaceObject.store).set(scope, featureName, !!value);
  };
}

/**
 * Returns an action object used in signalling that defaults should be set for features.
 *
 * @param {string}                  scope    The feature scope (e.g. core/edit-post).
 * @param {Object<string, boolean>} defaults A key/value map of feature names to values.
 *
 * @return {Object} Action object.
 */
function setFeatureDefaults(scope, defaults) {
  return function ({
    registry
  }) {
    external_wp_deprecated_default()(`dispatch( 'core/interface' ).setFeatureDefaults`, {
      since: '6.0',
      alternative: `dispatch( 'core/preferences' ).setDefaults`
    });
    registry.dispatch(external_wp_preferences_namespaceObject.store).setDefaults(scope, defaults);
  };
}

/**
 * Returns an action object used in signalling that the user opened a modal.
 *
 * @param {string} name A string that uniquely identifies the modal.
 *
 * @return {Object} Action object.
 */
function openModal(name) {
  return {
    type: 'OPEN_MODAL',
    name
  };
}

/**
 * Returns an action object signalling that the user closed a modal.
 *
 * @return {Object} Action object.
 */
function closeModal() {
  return {
    type: 'CLOSE_MODAL'
  };
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/store/selectors.js
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


/**
 * Returns the complementary area that is active in a given scope.
 *
 * @param {Object} state Global application state.
 * @param {string} scope Item scope.
 *
 * @return {string | null | undefined} The complementary area that is active in the given scope.
 */
const getActiveComplementaryArea = (0,external_wp_data_namespaceObject.createRegistrySelector)(select => (state, scope) => {
  scope = normalizeComplementaryAreaScope(scope);
  const isComplementaryAreaVisible = select(external_wp_preferences_namespaceObject.store).get(scope, 'isComplementaryAreaVisible');

  // Return `undefined` to indicate that the user has never toggled
  // visibility, this is the vanilla default. Other code relies on this
  // nuance in the return value.
  if (isComplementaryAreaVisible === undefined) {
    return undefined;
  }

  // Return `null` to indicate the user hid the complementary area.
  if (isComplementaryAreaVisible === false) {
    return null;
  }
  return state?.complementaryAreas?.[scope];
});
const isComplementaryAreaLoading = (0,external_wp_data_namespaceObject.createRegistrySelector)(select => (state, scope) => {
  scope = normalizeComplementaryAreaScope(scope);
  const isVisible = select(external_wp_preferences_namespaceObject.store).get(scope, 'isComplementaryAreaVisible');
  const identifier = state?.complementaryAreas?.[scope];
  return isVisible && identifier === undefined;
});

/**
 * Returns a boolean indicating if an item is pinned or not.
 *
 * @param {Object} state Global application state.
 * @param {string} scope Scope.
 * @param {string} item  Item to check.
 *
 * @return {boolean} True if the item is pinned and false otherwise.
 */
const isItemPinned = (0,external_wp_data_namespaceObject.createRegistrySelector)(select => (state, scope, item) => {
  var _pinnedItems$item;
  scope = normalizeComplementaryAreaScope(scope);
  item = normalizeComplementaryAreaName(scope, item);
  const pinnedItems = select(external_wp_preferences_namespaceObject.store).get(scope, 'pinnedItems');
  return (_pinnedItems$item = pinnedItems?.[item]) !== null && _pinnedItems$item !== void 0 ? _pinnedItems$item : true;
});

/**
 * Returns a boolean indicating whether a feature is active for a particular
 * scope.
 *
 * @param {Object} state       The store state.
 * @param {string} scope       The scope of the feature (e.g. core/edit-post).
 * @param {string} featureName The name of the feature.
 *
 * @return {boolean} Is the feature enabled?
 */
const isFeatureActive = (0,external_wp_data_namespaceObject.createRegistrySelector)(select => (state, scope, featureName) => {
  external_wp_deprecated_default()(`select( 'core/interface' ).isFeatureActive( scope, featureName )`, {
    since: '6.0',
    alternative: `select( 'core/preferences' ).get( scope, featureName )`
  });
  return !!select(external_wp_preferences_namespaceObject.store).get(scope, featureName);
});

/**
 * Returns true if a modal is active, or false otherwise.
 *
 * @param {Object} state     Global application state.
 * @param {string} modalName A string that uniquely identifies the modal.
 *
 * @return {boolean} Whether the modal is active.
 */
function isModalActive(state, modalName) {
  return state.activeModal === modalName;
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/store/reducer.js
/**
 * WordPress dependencies
 */

function complementaryAreas(state = {}, action) {
  switch (action.type) {
    case 'SET_DEFAULT_COMPLEMENTARY_AREA':
      {
        const {
          scope,
          area
        } = action;

        // If there's already an area, don't overwrite it.
        if (state[scope]) {
          return state;
        }
        return {
          ...state,
          [scope]: area
        };
      }
    case 'ENABLE_COMPLEMENTARY_AREA':
      {
        const {
          scope,
          area
        } = action;
        return {
          ...state,
          [scope]: area
        };
      }
  }
  return state;
}

/**
 * Reducer for storing the name of the open modal, or null if no modal is open.
 *
 * @param {Object} state  Previous state.
 * @param {Object} action Action object containing the `name` of the modal
 *
 * @return {Object} Updated state
 */
function activeModal(state = null, action) {
  switch (action.type) {
    case 'OPEN_MODAL':
      return action.name;
    case 'CLOSE_MODAL':
      return null;
  }
  return state;
}
/* harmony default export */ const store_reducer = ((0,external_wp_data_namespaceObject.combineReducers)({
  complementaryAreas,
  activeModal
}));

;// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/store/constants.js
/**
 * The identifier for the data store.
 *
 * @type {string}
 */
const constants_STORE_NAME = 'core/interface';

;// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/store/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */





/**
 * Store definition for the interface namespace.
 *
 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/data/README.md#createReduxStore
 *
 * @type {Object}
 */
const store = (0,external_wp_data_namespaceObject.createReduxStore)(constants_STORE_NAME, {
  reducer: store_reducer,
  actions: store_actions_namespaceObject,
  selectors: store_selectors_namespaceObject
});

// Once we build a more generic persistence plugin that works across types of stores
// we'd be able to replace this with a register call.
(0,external_wp_data_namespaceObject.register)(store);

;// CONCATENATED MODULE: external ["wp","plugins"]
const external_wp_plugins_namespaceObject = window["wp"]["plugins"];
;// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/components/complementary-area-context/index.js
/**
 * WordPress dependencies
 */

/* harmony default export */ const complementary_area_context = ((0,external_wp_plugins_namespaceObject.withPluginContext)((context, ownProps) => {
  return {
    icon: ownProps.icon || context.icon,
    identifier: ownProps.identifier || `${context.name}/${ownProps.name}`
  };
}));

;// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/components/complementary-area-toggle/index.js
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



function ComplementaryAreaToggle({
  as = external_wp_components_namespaceObject.Button,
  scope,
  identifier,
  icon,
  selectedIcon,
  name,
  ...props
}) {
  const ComponentToUse = as;
  const isSelected = (0,external_wp_data_namespaceObject.useSelect)(select => select(store).getActiveComplementaryArea(scope) === identifier, [identifier, scope]);
  const {
    enableComplementaryArea,
    disableComplementaryArea
  } = (0,external_wp_data_namespaceObject.useDispatch)(store);
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(ComponentToUse, {
    icon: selectedIcon && isSelected ? selectedIcon : icon,
    "aria-controls": identifier.replace('/', ':'),
    onClick: () => {
      if (isSelected) {
        disableComplementaryArea(scope);
      } else {
        enableComplementaryArea(scope, identifier);
      }
    },
    ...props
  });
}
/* harmony default export */ const complementary_area_toggle = (complementary_area_context(ComplementaryAreaToggle));

;// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/components/complementary-area-header/index.js
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




const ComplementaryAreaHeader = ({
  smallScreenTitle,
  children,
  className,
  toggleButtonProps
}) => {
  const toggleButton = /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(complementary_area_toggle, {
    icon: close_small,
    ...toggleButtonProps
  });
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
    children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
      className: "components-panel__header interface-complementary-area-header__small",
      children: [smallScreenTitle && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("h2", {
        className: "interface-complementary-area-header__small-title",
        children: smallScreenTitle
      }), toggleButton]
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
      className: dist_clsx('components-panel__header', 'interface-complementary-area-header', className),
      tabIndex: -1,
      children: [children, toggleButton]
    })]
  });
};
/* harmony default export */ const complementary_area_header = (ComplementaryAreaHeader);

;// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/components/action-item/index.js
/**
 * WordPress dependencies
 */



const noop = () => {};
function ActionItemSlot({
  name,
  as: Component = external_wp_components_namespaceObject.ButtonGroup,
  fillProps = {},
  bubblesVirtually,
  ...props
}) {
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Slot, {
    name: name,
    bubblesVirtually: bubblesVirtually,
    fillProps: fillProps,
    children: fills => {
      if (!external_wp_element_namespaceObject.Children.toArray(fills).length) {
        return null;
      }

      // Special handling exists for backward compatibility.
      // It ensures that menu items created by plugin authors aren't
      // duplicated with automatically injected menu items coming
      // from pinnable plugin sidebars.
      // @see https://github.com/WordPress/gutenberg/issues/14457
      const initializedByPlugins = [];
      external_wp_element_namespaceObject.Children.forEach(fills, ({
        props: {
          __unstableExplicitMenuItem,
          __unstableTarget
        }
      }) => {
        if (__unstableTarget && __unstableExplicitMenuItem) {
          initializedByPlugins.push(__unstableTarget);
        }
      });
      const children = external_wp_element_namespaceObject.Children.map(fills, child => {
        if (!child.props.__unstableExplicitMenuItem && initializedByPlugins.includes(child.props.__unstableTarget)) {
          return null;
        }
        return child;
      });
      return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(Component, {
        ...props,
        children: children
      });
    }
  });
}
function ActionItem({
  name,
  as: Component = external_wp_components_namespaceObject.Button,
  onClick,
  ...props
}) {
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Fill, {
    name: name,
    children: ({
      onClick: fpOnClick
    }) => {
      return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(Component, {
        onClick: onClick || fpOnClick ? (...args) => {
          (onClick || noop)(...args);
          (fpOnClick || noop)(...args);
        } : undefined,
        ...props
      });
    }
  });
}
ActionItem.Slot = ActionItemSlot;
/* harmony default export */ const action_item = (ActionItem);

;// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/components/complementary-area-more-menu-item/index.js
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



const PluginsMenuItem = ({
  // Menu item is marked with unstable prop for backward compatibility.
  // They are removed so they don't leak to DOM elements.
  // @see https://github.com/WordPress/gutenberg/issues/14457
  __unstableExplicitMenuItem,
  __unstableTarget,
  ...restProps
}) => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.MenuItem, {
  ...restProps
});
function ComplementaryAreaMoreMenuItem({
  scope,
  target,
  __unstableExplicitMenuItem,
  ...props
}) {
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(complementary_area_toggle, {
    as: toggleProps => {
      return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(action_item, {
        __unstableExplicitMenuItem: __unstableExplicitMenuItem,
        __unstableTarget: `${scope}/${target}`,
        as: PluginsMenuItem,
        name: `${scope}/plugin-more-menu`,
        ...toggleProps
      });
    },
    role: "menuitemcheckbox",
    selectedIcon: library_check,
    name: target,
    scope: scope,
    ...props
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/components/pinned-items/index.js
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */


function PinnedItems({
  scope,
  ...props
}) {
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Fill, {
    name: `PinnedItems/${scope}`,
    ...props
  });
}
function PinnedItemsSlot({
  scope,
  className,
  ...props
}) {
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Slot, {
    name: `PinnedItems/${scope}`,
    ...props,
    children: fills => fills?.length > 0 && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
      className: dist_clsx(className, 'interface-pinned-items'),
      children: fills
    })
  });
}
PinnedItems.Slot = PinnedItemsSlot;
/* harmony default export */ const pinned_items = (PinnedItems);

;// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/components/complementary-area/index.js
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */









/**
 * Internal dependencies
 */









const ANIMATION_DURATION = 0.3;
function ComplementaryAreaSlot({
  scope,
  ...props
}) {
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Slot, {
    name: `ComplementaryArea/${scope}`,
    ...props
  });
}
const SIDEBAR_WIDTH = 280;
const variants = {
  open: {
    width: SIDEBAR_WIDTH
  },
  closed: {
    width: 0
  },
  mobileOpen: {
    width: '100vw'
  }
};
function ComplementaryAreaFill({
  activeArea,
  isActive,
  scope,
  children,
  className,
  id
}) {
  const disableMotion = (0,external_wp_compose_namespaceObject.useReducedMotion)();
  const isMobileViewport = (0,external_wp_compose_namespaceObject.useViewportMatch)('medium', '<');
  // This is used to delay the exit animation to the next tick.
  // The reason this is done is to allow us to apply the right transition properties
  // When we switch from an open sidebar to another open sidebar.
  // we don't want to animate in this case.
  const previousActiveArea = (0,external_wp_compose_namespaceObject.usePrevious)(activeArea);
  const previousIsActive = (0,external_wp_compose_namespaceObject.usePrevious)(isActive);
  const [, setState] = (0,external_wp_element_namespaceObject.useState)({});
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    setState({});
  }, [isActive]);
  const transition = {
    type: 'tween',
    duration: disableMotion || isMobileViewport || !!previousActiveArea && !!activeArea && activeArea !== previousActiveArea ? 0 : ANIMATION_DURATION,
    ease: [0.6, 0, 0.4, 1]
  };
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Fill, {
    name: `ComplementaryArea/${scope}`,
    children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.__unstableAnimatePresence, {
      initial: false,
      children: (previousIsActive || isActive) && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.__unstableMotion.div, {
        variants: variants,
        initial: "closed",
        animate: isMobileViewport ? 'mobileOpen' : 'open',
        exit: "closed",
        transition: transition,
        className: "interface-complementary-area__fill",
        children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
          id: id,
          className: className,
          style: {
            width: isMobileViewport ? '100vw' : SIDEBAR_WIDTH
          },
          children: children
        })
      })
    })
  });
}
function useAdjustComplementaryListener(scope, identifier, activeArea, isActive, isSmall) {
  const previousIsSmall = (0,external_wp_element_namespaceObject.useRef)(false);
  const shouldOpenWhenNotSmall = (0,external_wp_element_namespaceObject.useRef)(false);
  const {
    enableComplementaryArea,
    disableComplementaryArea
  } = (0,external_wp_data_namespaceObject.useDispatch)(store);
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    // If the complementary area is active and the editor is switching from
    // a big to a small window size.
    if (isActive && isSmall && !previousIsSmall.current) {
      disableComplementaryArea(scope);
      // Flag the complementary area to be reopened when the window size
      // goes from small to big.
      shouldOpenWhenNotSmall.current = true;
    } else if (
    // If there is a flag indicating the complementary area should be
    // enabled when we go from small to big window size and we are going
    // from a small to big window size.
    shouldOpenWhenNotSmall.current && !isSmall && previousIsSmall.current) {
      // Remove the flag indicating the complementary area should be
      // enabled.
      shouldOpenWhenNotSmall.current = false;
      enableComplementaryArea(scope, identifier);
    } else if (
    // If the flag is indicating the current complementary should be
    // reopened but another complementary area becomes active, remove
    // the flag.
    shouldOpenWhenNotSmall.current && activeArea && activeArea !== identifier) {
      shouldOpenWhenNotSmall.current = false;
    }
    if (isSmall !== previousIsSmall.current) {
      previousIsSmall.current = isSmall;
    }
  }, [isActive, isSmall, scope, identifier, activeArea, disableComplementaryArea, enableComplementaryArea]);
}
function ComplementaryArea({
  children,
  className,
  closeLabel = (0,external_wp_i18n_namespaceObject.__)('Close plugin'),
  identifier,
  header,
  headerClassName,
  icon,
  isPinnable = true,
  panelClassName,
  scope,
  name,
  smallScreenTitle,
  title,
  toggleShortcut,
  isActiveByDefault
}) {
  // This state is used to delay the rendering of the Fill
  // until the initial effect runs.
  // This prevents the animation from running on mount if
  // the complementary area is active by default.
  const [isReady, setIsReady] = (0,external_wp_element_namespaceObject.useState)(false);
  const {
    isLoading,
    isActive,
    isPinned,
    activeArea,
    isSmall,
    isLarge,
    showIconLabels
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getActiveComplementaryArea,
      isComplementaryAreaLoading,
      isItemPinned
    } = select(store);
    const {
      get
    } = select(external_wp_preferences_namespaceObject.store);
    const _activeArea = getActiveComplementaryArea(scope);
    return {
      isLoading: isComplementaryAreaLoading(scope),
      isActive: _activeArea === identifier,
      isPinned: isItemPinned(scope, identifier),
      activeArea: _activeArea,
      isSmall: select(external_wp_viewport_namespaceObject.store).isViewportMatch('< medium'),
      isLarge: select(external_wp_viewport_namespaceObject.store).isViewportMatch('large'),
      showIconLabels: get('core', 'showIconLabels')
    };
  }, [identifier, scope]);
  useAdjustComplementaryListener(scope, identifier, activeArea, isActive, isSmall);
  const {
    enableComplementaryArea,
    disableComplementaryArea,
    pinItem,
    unpinItem
  } = (0,external_wp_data_namespaceObject.useDispatch)(store);
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    // Set initial visibility: For large screens, enable if it's active by
    // default. For small screens, always initially disable.
    if (isActiveByDefault && activeArea === undefined && !isSmall) {
      enableComplementaryArea(scope, identifier);
    } else if (activeArea === undefined && isSmall) {
      disableComplementaryArea(scope, identifier);
    }
    setIsReady(true);
  }, [activeArea, isActiveByDefault, scope, identifier, isSmall, enableComplementaryArea, disableComplementaryArea]);
  if (!isReady) {
    return;
  }
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
    children: [isPinnable && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(pinned_items, {
      scope: scope,
      children: isPinned && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(complementary_area_toggle, {
        scope: scope,
        identifier: identifier,
        isPressed: isActive && (!showIconLabels || isLarge),
        "aria-expanded": isActive,
        "aria-disabled": isLoading,
        label: title,
        icon: showIconLabels ? library_check : icon,
        showTooltip: !showIconLabels,
        variant: showIconLabels ? 'tertiary' : undefined,
        size: "compact"
      })
    }), name && isPinnable && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(ComplementaryAreaMoreMenuItem, {
      target: name,
      scope: scope,
      icon: icon,
      children: title
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(ComplementaryAreaFill, {
      activeArea: activeArea,
      isActive: isActive,
      className: dist_clsx('interface-complementary-area', className),
      scope: scope,
      id: identifier.replace('/', ':'),
      children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(complementary_area_header, {
        className: headerClassName,
        closeLabel: closeLabel,
        onClose: () => disableComplementaryArea(scope),
        smallScreenTitle: smallScreenTitle,
        toggleButtonProps: {
          label: closeLabel,
          size: 'small',
          shortcut: toggleShortcut,
          scope,
          identifier
        },
        children: header || /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
          children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("h2", {
            className: "interface-complementary-area-header__title",
            children: title
          }), isPinnable && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
            className: "interface-complementary-area__pin-unpin-item",
            icon: isPinned ? star_filled : star_empty,
            label: isPinned ? (0,external_wp_i18n_namespaceObject.__)('Unpin from toolbar') : (0,external_wp_i18n_namespaceObject.__)('Pin to toolbar'),
            onClick: () => (isPinned ? unpinItem : pinItem)(scope, identifier),
            isPressed: isPinned,
            "aria-expanded": isPinned,
            size: "compact"
          })]
        })
      }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Panel, {
        className: panelClassName,
        children: children
      })]
    })]
  });
}
const ComplementaryAreaWrapped = complementary_area_context(ComplementaryArea);
ComplementaryAreaWrapped.Slot = ComplementaryAreaSlot;
/* harmony default export */ const complementary_area = (ComplementaryAreaWrapped);

;// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/components/fullscreen-mode/index.js
/**
 * WordPress dependencies
 */

const FullscreenMode = ({
  isActive
}) => {
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    let isSticky = false;
    // `is-fullscreen-mode` is set in PHP as a body class by Gutenberg, and this causes
    // `sticky-menu` to be applied by WordPress and prevents the admin menu being scrolled
    // even if `is-fullscreen-mode` is then removed. Let's remove `sticky-menu` here as
    // a consequence of the FullscreenMode setup.
    if (document.body.classList.contains('sticky-menu')) {
      isSticky = true;
      document.body.classList.remove('sticky-menu');
    }
    return () => {
      if (isSticky) {
        document.body.classList.add('sticky-menu');
      }
    };
  }, []);
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    if (isActive) {
      document.body.classList.add('is-fullscreen-mode');
    } else {
      document.body.classList.remove('is-fullscreen-mode');
    }
    return () => {
      if (isActive) {
        document.body.classList.remove('is-fullscreen-mode');
      }
    };
  }, [isActive]);
  return null;
};
/* harmony default export */ const fullscreen_mode = (FullscreenMode);

;// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/components/navigable-region/index.js
/**
 * External dependencies
 */


function NavigableRegion({
  children,
  className,
  ariaLabel,
  as: Tag = 'div',
  ...props
}) {
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(Tag, {
    className: dist_clsx('interface-navigable-region', className),
    "aria-label": ariaLabel,
    role: "region",
    tabIndex: "-1",
    ...props,
    children: children
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/components/interface-skeleton/index.js
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



const interface_skeleton_ANIMATION_DURATION = 0.25;
const commonTransition = {
  type: 'tween',
  duration: interface_skeleton_ANIMATION_DURATION,
  ease: [0.6, 0, 0.4, 1]
};
function useHTMLClass(className) {
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    const element = document && document.querySelector(`html:not(.${className})`);
    if (!element) {
      return;
    }
    element.classList.toggle(className);
    return () => {
      element.classList.toggle(className);
    };
  }, [className]);
}
const headerVariants = {
  hidden: {
    opacity: 1,
    marginTop: -60
  },
  visible: {
    opacity: 1,
    marginTop: 0
  },
  distractionFreeHover: {
    opacity: 1,
    marginTop: 0,
    transition: {
      ...commonTransition,
      delay: 0.2,
      delayChildren: 0.2
    }
  },
  distractionFreeHidden: {
    opacity: 0,
    marginTop: -60
  },
  distractionFreeDisabled: {
    opacity: 0,
    marginTop: 0,
    transition: {
      ...commonTransition,
      delay: 0.8,
      delayChildren: 0.8
    }
  }
};
function InterfaceSkeleton({
  isDistractionFree,
  footer,
  header,
  editorNotices,
  sidebar,
  secondarySidebar,
  content,
  actions,
  labels,
  className,
  enableRegionNavigation = true,
  // Todo: does this need to be a prop.
  // Can we use a dependency to keyboard-shortcuts directly?
  shortcuts
}, ref) {
  const [secondarySidebarResizeListener, secondarySidebarSize] = (0,external_wp_compose_namespaceObject.useResizeObserver)();
  const isMobileViewport = (0,external_wp_compose_namespaceObject.useViewportMatch)('medium', '<');
  const disableMotion = (0,external_wp_compose_namespaceObject.useReducedMotion)();
  const defaultTransition = {
    type: 'tween',
    duration: disableMotion ? 0 : interface_skeleton_ANIMATION_DURATION,
    ease: [0.6, 0, 0.4, 1]
  };
  const navigateRegionsProps = (0,external_wp_components_namespaceObject.__unstableUseNavigateRegions)(shortcuts);
  useHTMLClass('interface-interface-skeleton__html-container');
  const defaultLabels = {
    /* translators: accessibility text for the top bar landmark region. */
    header: (0,external_wp_i18n_namespaceObject._x)('Header', 'header landmark area'),
    /* translators: accessibility text for the content landmark region. */
    body: (0,external_wp_i18n_namespaceObject.__)('Content'),
    /* translators: accessibility text for the secondary sidebar landmark region. */
    secondarySidebar: (0,external_wp_i18n_namespaceObject.__)('Block Library'),
    /* translators: accessibility text for the settings landmark region. */
    sidebar: (0,external_wp_i18n_namespaceObject.__)('Settings'),
    /* translators: accessibility text for the publish landmark region. */
    actions: (0,external_wp_i18n_namespaceObject.__)('Publish'),
    /* translators: accessibility text for the footer landmark region. */
    footer: (0,external_wp_i18n_namespaceObject.__)('Footer')
  };
  const mergedLabels = {
    ...defaultLabels,
    ...labels
  };
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
    ...(enableRegionNavigation ? navigateRegionsProps : {}),
    ref: (0,external_wp_compose_namespaceObject.useMergeRefs)([ref, enableRegionNavigation ? navigateRegionsProps.ref : undefined]),
    className: dist_clsx(className, 'interface-interface-skeleton', navigateRegionsProps.className, !!footer && 'has-footer'),
    children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
      className: "interface-interface-skeleton__editor",
      children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.__unstableAnimatePresence, {
        initial: false,
        children: !!header && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(NavigableRegion, {
          as: external_wp_components_namespaceObject.__unstableMotion.div,
          className: "interface-interface-skeleton__header",
          "aria-label": mergedLabels.header,
          initial: isDistractionFree ? 'distractionFreeHidden' : 'hidden',
          whileHover: isDistractionFree ? 'distractionFreeHover' : 'visible',
          animate: isDistractionFree ? 'distractionFreeDisabled' : 'visible',
          exit: isDistractionFree ? 'distractionFreeHidden' : 'hidden',
          variants: headerVariants,
          transition: defaultTransition,
          children: header
        })
      }), isDistractionFree && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
        className: "interface-interface-skeleton__header",
        children: editorNotices
      }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
        className: "interface-interface-skeleton__body",
        children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.__unstableAnimatePresence, {
          initial: false,
          children: !!secondarySidebar && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(NavigableRegion, {
            className: "interface-interface-skeleton__secondary-sidebar",
            ariaLabel: mergedLabels.secondarySidebar,
            as: external_wp_components_namespaceObject.__unstableMotion.div,
            initial: "closed",
            animate: isMobileViewport ? 'mobileOpen' : 'open',
            exit: "closed",
            variants: {
              open: {
                width: secondarySidebarSize.width
              },
              closed: {
                width: 0
              },
              mobileOpen: {
                width: '100vw'
              }
            },
            transition: defaultTransition,
            children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
              style: {
                position: 'absolute',
                width: isMobileViewport ? '100vw' : 'fit-content',
                height: '100%',
                right: 0
              },
              children: [secondarySidebarResizeListener, secondarySidebar]
            })
          })
        }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(NavigableRegion, {
          className: "interface-interface-skeleton__content",
          ariaLabel: mergedLabels.body,
          children: content
        }), !!sidebar && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(NavigableRegion, {
          className: "interface-interface-skeleton__sidebar",
          ariaLabel: mergedLabels.sidebar,
          children: sidebar
        }), !!actions && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(NavigableRegion, {
          className: "interface-interface-skeleton__actions",
          ariaLabel: mergedLabels.actions,
          children: actions
        })]
      })]
    }), !!footer && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(NavigableRegion, {
      className: "interface-interface-skeleton__footer",
      ariaLabel: mergedLabels.footer,
      children: footer
    })]
  });
}
/* harmony default export */ const interface_skeleton = ((0,external_wp_element_namespaceObject.forwardRef)(InterfaceSkeleton));

;// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/components/index.js








;// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/index.js



;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/global-keyboard-shortcuts/index.js
/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


/**
 * Component handles the keyboard shortcuts for the editor.
 *
 * It provides functionality for various keyboard shortcuts such as toggling editor mode,
 * toggling distraction-free mode, undo/redo, saving the post, toggling list view,
 * and toggling the sidebar.
 */
function EditorKeyboardShortcuts() {
  const isModeToggleDisabled = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      richEditingEnabled,
      codeEditingEnabled
    } = select(store_store).getEditorSettings();
    return !richEditingEnabled || !codeEditingEnabled;
  }, []);
  const {
    getBlockSelectionStart
  } = (0,external_wp_data_namespaceObject.useSelect)(external_wp_blockEditor_namespaceObject.store);
  const {
    getActiveComplementaryArea
  } = (0,external_wp_data_namespaceObject.useSelect)(store);
  const {
    enableComplementaryArea,
    disableComplementaryArea
  } = (0,external_wp_data_namespaceObject.useDispatch)(store);
  const {
    redo,
    undo,
    savePost,
    setIsListViewOpened,
    switchEditorMode,
    toggleDistractionFree
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  const {
    isEditedPostDirty,
    isPostSavingLocked,
    isListViewOpened,
    getEditorMode
  } = (0,external_wp_data_namespaceObject.useSelect)(store_store);
  (0,external_wp_keyboardShortcuts_namespaceObject.useShortcut)('core/editor/toggle-mode', () => {
    switchEditorMode(getEditorMode() === 'visual' ? 'text' : 'visual');
  }, {
    isDisabled: isModeToggleDisabled
  });
  (0,external_wp_keyboardShortcuts_namespaceObject.useShortcut)('core/editor/toggle-distraction-free', () => {
    toggleDistractionFree();
  });
  (0,external_wp_keyboardShortcuts_namespaceObject.useShortcut)('core/editor/undo', event => {
    undo();
    event.preventDefault();
  });
  (0,external_wp_keyboardShortcuts_namespaceObject.useShortcut)('core/editor/redo', event => {
    redo();
    event.preventDefault();
  });
  (0,external_wp_keyboardShortcuts_namespaceObject.useShortcut)('core/editor/save', event => {
    event.preventDefault();

    /**
     * Do not save the post if post saving is locked.
     */
    if (isPostSavingLocked()) {
      return;
    }

    // TODO: This should be handled in the `savePost` effect in
    // considering `isSaveable`. See note on `isEditedPostSaveable`
    // selector about dirtiness and meta-boxes.
    //
    // See: `isEditedPostSaveable`
    if (!isEditedPostDirty()) {
      return;
    }
    savePost();
  });

  // Only opens the list view. Other functionality for this shortcut happens in the rendered sidebar.
  (0,external_wp_keyboardShortcuts_namespaceObject.useShortcut)('core/editor/toggle-list-view', event => {
    if (!isListViewOpened()) {
      event.preventDefault();
      setIsListViewOpened(true);
    }
  });
  (0,external_wp_keyboardShortcuts_namespaceObject.useShortcut)('core/editor/toggle-sidebar', event => {
    // This shortcut has no known clashes, but use preventDefault to prevent any
    // obscure shortcuts from triggering.
    event.preventDefault();
    const isEditorSidebarOpened = ['edit-post/document', 'edit-post/block'].includes(getActiveComplementaryArea('core'));
    if (isEditorSidebarOpened) {
      disableComplementaryArea('core');
    } else {
      const sidebarToOpen = getBlockSelectionStart() ? 'edit-post/block' : 'edit-post/document';
      enableComplementaryArea('core', sidebarToOpen);
    }
  });
  return null;
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/autocompleters/index.js


;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/autosave-monitor/index.js
/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */

class AutosaveMonitor extends external_wp_element_namespaceObject.Component {
  constructor(props) {
    super(props);
    this.needsAutosave = !!(props.isDirty && props.isAutosaveable);
  }
  componentDidMount() {
    if (!this.props.disableIntervalChecks) {
      this.setAutosaveTimer();
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.disableIntervalChecks) {
      if (this.props.editsReference !== prevProps.editsReference) {
        this.props.autosave();
      }
      return;
    }
    if (this.props.interval !== prevProps.interval) {
      clearTimeout(this.timerId);
      this.setAutosaveTimer();
    }
    if (!this.props.isDirty) {
      this.needsAutosave = false;
      return;
    }
    if (this.props.isAutosaving && !prevProps.isAutosaving) {
      this.needsAutosave = false;
      return;
    }
    if (this.props.editsReference !== prevProps.editsReference) {
      this.needsAutosave = true;
    }
  }
  componentWillUnmount() {
    clearTimeout(this.timerId);
  }
  setAutosaveTimer(timeout = this.props.interval * 1000) {
    this.timerId = setTimeout(() => {
      this.autosaveTimerHandler();
    }, timeout);
  }
  autosaveTimerHandler() {
    if (!this.props.isAutosaveable) {
      this.setAutosaveTimer(1000);
      return;
    }
    if (this.needsAutosave) {
      this.needsAutosave = false;
      this.props.autosave();
    }
    this.setAutosaveTimer();
  }
  render() {
    return null;
  }
}

/**
 * Monitors the changes made to the edited post and triggers autosave if necessary.
 *
 * The logic is straightforward: a check is performed every `props.interval` seconds. If any changes are detected, `props.autosave()` is called.
 * The time between the change and the autosave varies but is no larger than `props.interval` seconds. Refer to the code below for more details, such as
 * the specific way of detecting changes.
 *
 * There are two caveats:
 * * If `props.isAutosaveable` happens to be false at a time of checking for changes, the check is retried every second.
 * * The timer may be disabled by setting `props.disableIntervalChecks` to `true`. In that mode, any change will immediately trigger `props.autosave()`.
 *
 * @param {Object}   props                       - The properties passed to the component.
 * @param {Function} props.autosave              - The function to call when changes need to be saved.
 * @param {number}   props.interval              - The maximum time in seconds between an unsaved change and an autosave.
 * @param {boolean}  props.isAutosaveable        - If false, the check for changes is retried every second.
 * @param {boolean}  props.disableIntervalChecks - If true, disables the timer and any change will immediately trigger `props.autosave()`.
 * @param {boolean}  props.isDirty               - Indicates if there are unsaved changes.
 *
 * @example
 * ```jsx
 * <AutosaveMonitor interval={30000} />
 * ```
 */
/* harmony default export */ const autosave_monitor = ((0,external_wp_compose_namespaceObject.compose)([(0,external_wp_data_namespaceObject.withSelect)((select, ownProps) => {
  const {
    getReferenceByDistinctEdits
  } = select(external_wp_coreData_namespaceObject.store);
  const {
    isEditedPostDirty,
    isEditedPostAutosaveable,
    isAutosavingPost,
    getEditorSettings
  } = select(store_store);
  const {
    interval = getEditorSettings().autosaveInterval
  } = ownProps;
  return {
    editsReference: getReferenceByDistinctEdits(),
    isDirty: isEditedPostDirty(),
    isAutosaveable: isEditedPostAutosaveable(),
    isAutosaving: isAutosavingPost(),
    interval
  };
}), (0,external_wp_data_namespaceObject.withDispatch)((dispatch, ownProps) => ({
  autosave() {
    const {
      autosave = dispatch(store_store).autosave
    } = ownProps;
    autosave();
  }
}))])(AutosaveMonitor));

;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/chevron-right-small.js
/**
 * WordPress dependencies
 */


const chevronRightSmall = /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.Path, {
    d: "M10.8622 8.04053L14.2805 12.0286L10.8622 16.0167L9.72327 15.0405L12.3049 12.0286L9.72327 9.01672L10.8622 8.04053Z"
  })
});
/* harmony default export */ const chevron_right_small = (chevronRightSmall);

;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/chevron-left-small.js
/**
 * WordPress dependencies
 */


const chevronLeftSmall = /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.Path, {
    d: "m13.1 16-3.4-4 3.4-4 1.1 1-2.6 3 2.6 3-1.1 1z"
  })
});
/* harmony default export */ const chevron_left_small = (chevronLeftSmall);

;// CONCATENATED MODULE: external ["wp","keycodes"]
const external_wp_keycodes_namespaceObject = window["wp"]["keycodes"];
;// CONCATENATED MODULE: external ["wp","commands"]
const external_wp_commands_namespaceObject = window["wp"]["commands"];
;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/document-bar/index.js
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */












/**
 * Internal dependencies
 */





const TYPE_LABELS = {
  // translators: 1: Pattern title.
  wp_pattern: (0,external_wp_i18n_namespaceObject.__)('Editing pattern: %s'),
  // translators: 1: Navigation menu title.
  wp_navigation: (0,external_wp_i18n_namespaceObject.__)('Editing navigation menu: %s'),
  // translators: 1: Template title.
  wp_template: (0,external_wp_i18n_namespaceObject.__)('Editing template: %s'),
  // translators: 1: Template part title.
  wp_template_part: (0,external_wp_i18n_namespaceObject.__)('Editing template part: %s')
};
const MotionButton = (0,external_wp_components_namespaceObject.__unstableMotion)(external_wp_components_namespaceObject.Button);

/**
 * This component renders a navigation bar at the top of the editor. It displays the title of the current document,
 * a back button (if applicable), and a command center button. It also handles different states of the document,
 * such as "not found" or "unsynced".
 *
 * @example
 * ```jsx
 * <DocumentBar />
 * ```
 *
 * @return {JSX.Element} The rendered DocumentBar component.
 */
function DocumentBar() {
  const {
    postType,
    documentTitle,
    isNotFound,
    isUnsyncedPattern,
    templateIcon,
    templateTitle,
    onNavigateToPreviousEntityRecord
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getCurrentPostType,
      getCurrentPostId,
      getEditorSettings,
      __experimentalGetTemplateInfo: getTemplateInfo
    } = select(store_store);
    const {
      getEditedEntityRecord,
      isResolving: isResolvingSelector
    } = select(external_wp_coreData_namespaceObject.store);
    const _postType = getCurrentPostType();
    const _postId = getCurrentPostId();
    const _document = getEditedEntityRecord('postType', _postType, _postId);
    const _templateInfo = getTemplateInfo(_document);
    return {
      postType: _postType,
      documentTitle: _document.title,
      isNotFound: !_document && !isResolvingSelector('getEditedEntityRecord', 'postType', _postType, _postId),
      isUnsyncedPattern: _document?.wp_pattern_sync_status === 'unsynced',
      templateIcon: unlock(select(store_store)).getPostIcon(_postType, {
        area: _document?.area
      }),
      templateTitle: _templateInfo.title,
      onNavigateToPreviousEntityRecord: getEditorSettings().onNavigateToPreviousEntityRecord
    };
  }, []);
  const {
    open: openCommandCenter
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_commands_namespaceObject.store);
  const isReducedMotion = (0,external_wp_compose_namespaceObject.useReducedMotion)();
  const isTemplate = TEMPLATE_POST_TYPES.includes(postType);
  const isGlobalEntity = GLOBAL_POST_TYPES.includes(postType);
  const hasBackButton = !!onNavigateToPreviousEntityRecord;
  const title = isTemplate ? templateTitle : documentTitle;
  const mounted = (0,external_wp_element_namespaceObject.useRef)(false);
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    mounted.current = true;
  }, []);
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
    className: dist_clsx('editor-document-bar', {
      'has-back-button': hasBackButton,
      'is-global': isGlobalEntity && !isUnsyncedPattern
    }),
    children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.__unstableAnimatePresence, {
      children: hasBackButton && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(MotionButton, {
        className: "editor-document-bar__back",
        icon: (0,external_wp_i18n_namespaceObject.isRTL)() ? chevron_right_small : chevron_left_small,
        onClick: event => {
          event.stopPropagation();
          onNavigateToPreviousEntityRecord();
        },
        size: "compact",
        initial: mounted.current ? {
          opacity: 0,
          transform: 'translateX(15%)'
        } : false // Don't show entry animation when DocumentBar mounts.
        ,
        animate: {
          opacity: 1,
          transform: 'translateX(0%)'
        },
        exit: {
          opacity: 0,
          transform: 'translateX(15%)'
        },
        transition: isReducedMotion ? {
          duration: 0
        } : undefined,
        children: (0,external_wp_i18n_namespaceObject.__)('Back')
      })
    }), isNotFound ? /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.__experimentalText, {
      children: (0,external_wp_i18n_namespaceObject.__)('Document not found')
    }) : /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.Button, {
      className: "editor-document-bar__command",
      onClick: () => openCommandCenter(),
      size: "compact",
      children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.__unstableMotion.div, {
        className: "editor-document-bar__title"
        // Force entry animation when the back button is added or removed.
        ,

        initial: mounted.current ? {
          opacity: 0,
          transform: hasBackButton ? 'translateX(15%)' : 'translateX(-15%)'
        } : false // Don't show entry animation when DocumentBar mounts.
        ,
        animate: {
          opacity: 1,
          transform: 'translateX(0%)'
        },
        transition: isReducedMotion ? {
          duration: 0
        } : undefined,
        children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_blockEditor_namespaceObject.BlockIcon, {
          icon: templateIcon
        }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.__experimentalText, {
          size: "body",
          as: "h1",
          "aria-label": TYPE_LABELS[postType] ?
          // eslint-disable-next-line @wordpress/valid-sprintf
          (0,external_wp_i18n_namespaceObject.sprintf)(TYPE_LABELS[postType], title) : undefined,
          children: title ? (0,external_wp_htmlEntities_namespaceObject.decodeEntities)(title) : (0,external_wp_i18n_namespaceObject.__)('No Title')
        })]
      }, hasBackButton), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("span", {
        className: "editor-document-bar__shortcut",
        children: external_wp_keycodes_namespaceObject.displayShortcut.primary('k')
      })]
    })]
  });
}

;// CONCATENATED MODULE: external ["wp","richText"]
const external_wp_richText_namespaceObject = window["wp"]["richText"];
;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/document-outline/item.js
/**
 * External dependencies
 */



const TableOfContentsItem = ({
  children,
  isValid,
  level,
  href,
  onSelect
}) => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("li", {
  className: dist_clsx('document-outline__item', `is-${level.toLowerCase()}`, {
    'is-invalid': !isValid
  }),
  children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("a", {
    href: href,
    className: "document-outline__button",
    onClick: onSelect,
    children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("span", {
      className: "document-outline__emdash",
      "aria-hidden": "true"
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("strong", {
      className: "document-outline__level",
      children: level
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("span", {
      className: "document-outline__item-content",
      children: children
    })]
  })
});
/* harmony default export */ const document_outline_item = (TableOfContentsItem);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/document-outline/index.js
/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */



/**
 * Module constants
 */


const emptyHeadingContent = /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("em", {
  children: (0,external_wp_i18n_namespaceObject.__)('(Empty heading)')
});
const incorrectLevelContent = [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("br", {}, "incorrect-break"), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("em", {
  children: (0,external_wp_i18n_namespaceObject.__)('(Incorrect heading level)')
}, "incorrect-message")];
const singleH1Headings = [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("br", {}, "incorrect-break-h1"), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("em", {
  children: (0,external_wp_i18n_namespaceObject.__)('(Your theme may already use a H1 for the post title)')
}, "incorrect-message-h1")];
const multipleH1Headings = [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("br", {}, "incorrect-break-multiple-h1"), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("em", {
  children: (0,external_wp_i18n_namespaceObject.__)('(Multiple H1 headings are not recommended)')
}, "incorrect-message-multiple-h1")];
function EmptyOutlineIllustration() {
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.SVG, {
    width: "138",
    height: "148",
    viewBox: "0 0 138 148",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Rect, {
      width: "138",
      height: "148",
      rx: "4",
      fill: "#F0F6FC"
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Line, {
      x1: "44",
      y1: "28",
      x2: "24",
      y2: "28",
      stroke: "#DDDDDD"
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Rect, {
      x: "48",
      y: "16",
      width: "27",
      height: "23",
      rx: "4",
      fill: "#DDDDDD"
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Path, {
      d: "M54.7585 32V23.2727H56.6037V26.8736H60.3494V23.2727H62.1903V32H60.3494V28.3949H56.6037V32H54.7585ZM67.4574 23.2727V32H65.6122V25.0241H65.5611L63.5625 26.277V24.6406L65.723 23.2727H67.4574Z",
      fill: "black"
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Line, {
      x1: "55",
      y1: "59",
      x2: "24",
      y2: "59",
      stroke: "#DDDDDD"
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Rect, {
      x: "59",
      y: "47",
      width: "29",
      height: "23",
      rx: "4",
      fill: "#DDDDDD"
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Path, {
      d: "M65.7585 63V54.2727H67.6037V57.8736H71.3494V54.2727H73.1903V63H71.3494V59.3949H67.6037V63H65.7585ZM74.6605 63V61.6705L77.767 58.794C78.0313 58.5384 78.2528 58.3082 78.4318 58.1037C78.6136 57.8991 78.7514 57.6989 78.8452 57.5028C78.9389 57.304 78.9858 57.0895 78.9858 56.8594C78.9858 56.6037 78.9276 56.3835 78.8111 56.1989C78.6946 56.0114 78.5355 55.8679 78.3338 55.7685C78.1321 55.6662 77.9034 55.6151 77.6477 55.6151C77.3807 55.6151 77.1477 55.669 76.9489 55.777C76.75 55.8849 76.5966 56.0398 76.4886 56.2415C76.3807 56.4432 76.3267 56.6832 76.3267 56.9616H74.5753C74.5753 56.3906 74.7045 55.8949 74.9631 55.4744C75.2216 55.054 75.5838 54.7287 76.0497 54.4986C76.5156 54.2685 77.0526 54.1534 77.6605 54.1534C78.2855 54.1534 78.8295 54.2642 79.2926 54.4858C79.7585 54.7045 80.1207 55.0085 80.3793 55.3977C80.6378 55.7869 80.767 56.233 80.767 56.7358C80.767 57.0653 80.7017 57.3906 80.571 57.7116C80.4432 58.0327 80.2145 58.3892 79.8849 58.7812C79.5554 59.1705 79.0909 59.6378 78.4915 60.1832L77.2173 61.4318V61.4915H80.8821V63H74.6605Z",
      fill: "black"
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Line, {
      x1: "80",
      y1: "90",
      x2: "24",
      y2: "90",
      stroke: "#DDDDDD"
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Rect, {
      x: "84",
      y: "78",
      width: "30",
      height: "23",
      rx: "4",
      fill: "#F0B849"
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Path, {
      d: "M90.7585 94V85.2727H92.6037V88.8736H96.3494V85.2727H98.1903V94H96.3494V90.3949H92.6037V94H90.7585ZM99.5284 92.4659V91.0128L103.172 85.2727H104.425V87.2841H103.683L101.386 90.919V90.9872H106.564V92.4659H99.5284ZM103.717 94V92.0227L103.751 91.3793V85.2727H105.482V94H103.717Z",
      fill: "black"
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Line, {
      x1: "66",
      y1: "121",
      x2: "24",
      y2: "121",
      stroke: "#DDDDDD"
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Rect, {
      x: "70",
      y: "109",
      width: "29",
      height: "23",
      rx: "4",
      fill: "#DDDDDD"
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Path, {
      d: "M76.7585 125V116.273H78.6037V119.874H82.3494V116.273H84.1903V125H82.3494V121.395H78.6037V125H76.7585ZM88.8864 125.119C88.25 125.119 87.6832 125.01 87.1861 124.791C86.6918 124.57 86.3011 124.266 86.0142 123.879C85.7301 123.49 85.5838 123.041 85.5753 122.533H87.4332C87.4446 122.746 87.5142 122.933 87.642 123.095C87.7727 123.254 87.946 123.378 88.1619 123.466C88.3778 123.554 88.6207 123.598 88.8906 123.598C89.1719 123.598 89.4205 123.548 89.6364 123.449C89.8523 123.349 90.0213 123.212 90.1435 123.036C90.2656 122.859 90.3267 122.656 90.3267 122.426C90.3267 122.193 90.2614 121.987 90.1307 121.808C90.0028 121.626 89.8182 121.484 89.5767 121.382C89.3381 121.28 89.054 121.229 88.7244 121.229H87.9105V119.874H88.7244C89.0028 119.874 89.2486 119.825 89.4616 119.729C89.6776 119.632 89.8452 119.499 89.9645 119.328C90.0838 119.155 90.1435 118.953 90.1435 118.723C90.1435 118.504 90.0909 118.312 89.9858 118.148C89.8835 117.98 89.7386 117.849 89.5511 117.756C89.3665 117.662 89.1506 117.615 88.9034 117.615C88.6534 117.615 88.4247 117.661 88.2173 117.751C88.0099 117.839 87.8438 117.966 87.7188 118.131C87.5938 118.295 87.527 118.489 87.5185 118.71H85.75C85.7585 118.207 85.902 117.764 86.1804 117.381C86.4588 116.997 86.8338 116.697 87.3054 116.482C87.7798 116.263 88.3153 116.153 88.9119 116.153C89.5142 116.153 90.0412 116.263 90.4929 116.482C90.9446 116.7 91.2955 116.996 91.5455 117.368C91.7983 117.737 91.9233 118.152 91.9205 118.612C91.9233 119.101 91.7713 119.509 91.4645 119.835C91.1605 120.162 90.7642 120.369 90.2756 120.457V120.526C90.9176 120.608 91.4063 120.831 91.7415 121.195C92.0795 121.555 92.2472 122.007 92.2443 122.55C92.2472 123.047 92.1037 123.489 91.8139 123.875C91.527 124.261 91.1307 124.565 90.625 124.787C90.1193 125.009 89.5398 125.119 88.8864 125.119Z",
      fill: "black"
    })]
  });
}

/**
 * Returns an array of heading blocks enhanced with the following properties:
 * level   - An integer with the heading level.
 * isEmpty - Flag indicating if the heading has no content.
 *
 * @param {?Array} blocks An array of blocks.
 *
 * @return {Array} An array of heading blocks enhanced with the properties described above.
 */
const computeOutlineHeadings = (blocks = []) => {
  return blocks.flatMap((block = {}) => {
    if (block.name === 'core/heading') {
      return {
        ...block,
        level: block.attributes.level,
        isEmpty: isEmptyHeading(block)
      };
    }
    return computeOutlineHeadings(block.innerBlocks);
  });
};
const isEmptyHeading = heading => !heading.attributes.content || heading.attributes.content.trim().length === 0;

/**
 * Renders a document outline component.
 *
 * @param {Object}   props                         Props.
 * @param {Function} props.onSelect                Function to be called when an outline item is selected.
 * @param {boolean}  props.isTitleSupported        Indicates whether the title is supported.
 * @param {boolean}  props.hasOutlineItemsDisabled Indicates whether the outline items are disabled.
 *
 * @return {Component} The component to be rendered.
 */
function DocumentOutline({
  onSelect,
  isTitleSupported,
  hasOutlineItemsDisabled
}) {
  const {
    selectBlock
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_blockEditor_namespaceObject.store);
  const {
    blocks,
    title
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    var _postType$supports$ti;
    const {
      getBlocks
    } = select(external_wp_blockEditor_namespaceObject.store);
    const {
      getEditedPostAttribute
    } = select(store_store);
    const {
      getPostType
    } = select(external_wp_coreData_namespaceObject.store);
    const postType = getPostType(getEditedPostAttribute('type'));
    return {
      title: getEditedPostAttribute('title'),
      blocks: getBlocks(),
      isTitleSupported: (_postType$supports$ti = postType?.supports?.title) !== null && _postType$supports$ti !== void 0 ? _postType$supports$ti : false
    };
  });
  const headings = computeOutlineHeadings(blocks);
  if (headings.length < 1) {
    return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
      className: "editor-document-outline has-no-headings",
      children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(EmptyOutlineIllustration, {}), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("p", {
        children: (0,external_wp_i18n_namespaceObject.__)('Navigate the structure of your document and address issues like empty or incorrect heading levels.')
      })]
    });
  }
  let prevHeadingLevel = 1;

  // Not great but it's the simplest way to locate the title right now.
  const titleNode = document.querySelector('.editor-post-title__input');
  const hasTitle = isTitleSupported && title && titleNode;
  const countByLevel = headings.reduce((acc, heading) => ({
    ...acc,
    [heading.level]: (acc[heading.level] || 0) + 1
  }), {});
  const hasMultipleH1 = countByLevel[1] > 1;
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
    className: "document-outline",
    children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("ul", {
      children: [hasTitle && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(document_outline_item, {
        level: (0,external_wp_i18n_namespaceObject.__)('Title'),
        isValid: true,
        onSelect: onSelect,
        href: `#${titleNode.id}`,
        isDisabled: hasOutlineItemsDisabled,
        children: title
      }), headings.map((item, index) => {
        // Headings remain the same, go up by one, or down by any amount.
        // Otherwise there are missing levels.
        const isIncorrectLevel = item.level > prevHeadingLevel + 1;
        const isValid = !item.isEmpty && !isIncorrectLevel && !!item.level && (item.level !== 1 || !hasMultipleH1 && !hasTitle);
        prevHeadingLevel = item.level;
        return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(document_outline_item, {
          level: `H${item.level}`,
          isValid: isValid,
          isDisabled: hasOutlineItemsDisabled,
          href: `#block-${item.clientId}`,
          onSelect: () => {
            selectBlock(item.clientId);
            onSelect?.();
          },
          children: [item.isEmpty ? emptyHeadingContent : (0,external_wp_richText_namespaceObject.getTextContent)((0,external_wp_richText_namespaceObject.create)({
            html: item.attributes.content
          })), isIncorrectLevel && incorrectLevelContent, item.level === 1 && hasMultipleH1 && multipleH1Headings, hasTitle && item.level === 1 && !hasMultipleH1 && singleH1Headings]
        }, index);
      })]
    })
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/document-outline/check.js
/**
 * WordPress dependencies
 */



/**
 * Component check if there are any headings (core/heading blocks) present in the document.
 *
 * @param {Object}  props          Props.
 * @param {Element} props.children Children to be rendered.
 *
 * @return {Component|null} The component to be rendered or null if there are headings.
 */
function DocumentOutlineCheck({
  children
}) {
  const hasHeadings = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getGlobalBlockCount
    } = select(external_wp_blockEditor_namespaceObject.store);
    return getGlobalBlockCount('core/heading') > 0;
  });
  if (hasHeadings) {
    return null;
  }
  return children;
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/global-keyboard-shortcuts/register-shortcuts.js
/**
 * WordPress dependencies
 */







/**
 * Component for registering editor keyboard shortcuts.
 *
 * @return {Element} The component to be rendered.
 */

function EditorKeyboardShortcutsRegister() {
  // Registering the shortcuts.
  const {
    registerShortcut
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_keyboardShortcuts_namespaceObject.store);
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    registerShortcut({
      name: 'core/editor/toggle-mode',
      category: 'global',
      description: (0,external_wp_i18n_namespaceObject.__)('Switch between visual editor and code editor.'),
      keyCombination: {
        modifier: 'secondary',
        character: 'm'
      }
    });
    registerShortcut({
      name: 'core/editor/save',
      category: 'global',
      description: (0,external_wp_i18n_namespaceObject.__)('Save your changes.'),
      keyCombination: {
        modifier: 'primary',
        character: 's'
      }
    });
    registerShortcut({
      name: 'core/editor/undo',
      category: 'global',
      description: (0,external_wp_i18n_namespaceObject.__)('Undo your last changes.'),
      keyCombination: {
        modifier: 'primary',
        character: 'z'
      }
    });
    registerShortcut({
      name: 'core/editor/redo',
      category: 'global',
      description: (0,external_wp_i18n_namespaceObject.__)('Redo your last undo.'),
      keyCombination: {
        modifier: 'primaryShift',
        character: 'z'
      },
      // Disable on Apple OS because it conflicts with the browser's
      // history shortcut. It's a fine alias for both Windows and Linux.
      // Since there's no conflict for Ctrl+Shift+Z on both Windows and
      // Linux, we keep it as the default for consistency.
      aliases: (0,external_wp_keycodes_namespaceObject.isAppleOS)() ? [] : [{
        modifier: 'primary',
        character: 'y'
      }]
    });
    registerShortcut({
      name: 'core/editor/toggle-list-view',
      category: 'global',
      description: (0,external_wp_i18n_namespaceObject.__)('Open the List View.'),
      keyCombination: {
        modifier: 'access',
        character: 'o'
      }
    });
    registerShortcut({
      name: 'core/editor/toggle-distraction-free',
      category: 'global',
      description: (0,external_wp_i18n_namespaceObject.__)('Toggle distraction free mode.'),
      keyCombination: {
        modifier: 'primaryShift',
        character: '\\'
      }
    });
    registerShortcut({
      name: 'core/editor/toggle-sidebar',
      category: 'global',
      description: (0,external_wp_i18n_namespaceObject.__)('Show or hide the Settings sidebar.'),
      keyCombination: {
        modifier: 'primaryShift',
        character: ','
      }
    });
    registerShortcut({
      name: 'core/editor/keyboard-shortcuts',
      category: 'main',
      description: (0,external_wp_i18n_namespaceObject.__)('Display these keyboard shortcuts.'),
      keyCombination: {
        modifier: 'access',
        character: 'h'
      }
    });
    registerShortcut({
      name: 'core/editor/next-region',
      category: 'global',
      description: (0,external_wp_i18n_namespaceObject.__)('Navigate to the next part of the editor.'),
      keyCombination: {
        modifier: 'ctrl',
        character: '`'
      },
      aliases: [{
        modifier: 'access',
        character: 'n'
      }]
    });
    registerShortcut({
      name: 'core/editor/previous-region',
      category: 'global',
      description: (0,external_wp_i18n_namespaceObject.__)('Navigate to the previous part of the editor.'),
      keyCombination: {
        modifier: 'ctrlShift',
        character: '`'
      },
      aliases: [{
        modifier: 'access',
        character: 'p'
      }, {
        modifier: 'ctrlShift',
        character: '~'
      }]
    });
  }, [registerShortcut]);
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_blockEditor_namespaceObject.BlockEditorKeyboardShortcuts.Register, {});
}
/* harmony default export */ const register_shortcuts = (EditorKeyboardShortcutsRegister);

;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/redo.js
/**
 * WordPress dependencies
 */


const redo_redo = /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.Path, {
    d: "M15.6 6.5l-1.1 1 2.9 3.3H8c-.9 0-1.7.3-2.3.9-1.4 1.5-1.4 4.2-1.4 5.6v.2h1.5v-.3c0-1.1 0-3.5 1-4.5.3-.3.7-.5 1.3-.5h9.2L14.5 15l1.1 1.1 4.6-4.6-4.6-5z"
  })
});
/* harmony default export */ const library_redo = (redo_redo);

;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/undo.js
/**
 * WordPress dependencies
 */


const undo_undo = /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.Path, {
    d: "M18.3 11.7c-.6-.6-1.4-.9-2.3-.9H6.7l2.9-3.3-1.1-1-4.5 5L8.5 16l1-1-2.7-2.7H16c.5 0 .9.2 1.3.5 1 1 1 3.4 1 4.5v.3h1.5v-.2c0-1.5 0-4.3-1.5-5.7z"
  })
});
/* harmony default export */ const library_undo = (undo_undo);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/editor-history/redo.js
/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */


function EditorHistoryRedo(props, ref) {
  const shortcut = (0,external_wp_keycodes_namespaceObject.isAppleOS)() ? external_wp_keycodes_namespaceObject.displayShortcut.primaryShift('z') : external_wp_keycodes_namespaceObject.displayShortcut.primary('y');
  const hasRedo = (0,external_wp_data_namespaceObject.useSelect)(select => select(store_store).hasEditorRedo(), []);
  const {
    redo
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
    ...props,
    ref: ref,
    icon: !(0,external_wp_i18n_namespaceObject.isRTL)() ? library_redo : library_undo
    /* translators: button label text should, if possible, be under 16 characters. */,
    label: (0,external_wp_i18n_namespaceObject.__)('Redo'),
    shortcut: shortcut
    // If there are no redo levels we don't want to actually disable this
    // button, because it will remove focus for keyboard users.
    // See: https://github.com/WordPress/gutenberg/issues/3486
    ,
    "aria-disabled": !hasRedo,
    onClick: hasRedo ? redo : undefined,
    className: "editor-history__redo"
  });
}

/** @typedef {import('react').Ref<HTMLElement>} Ref */

/**
 * Renders the redo button for the editor history.
 *
 * @param {Object} props - Props.
 * @param {Ref}    ref   - Forwarded ref.
 *
 * @return {Component} The component to be rendered.
 */
/* harmony default export */ const editor_history_redo = ((0,external_wp_element_namespaceObject.forwardRef)(EditorHistoryRedo));

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/editor-history/undo.js
/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */


function EditorHistoryUndo(props, ref) {
  const hasUndo = (0,external_wp_data_namespaceObject.useSelect)(select => select(store_store).hasEditorUndo(), []);
  const {
    undo
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
    ...props,
    ref: ref,
    icon: !(0,external_wp_i18n_namespaceObject.isRTL)() ? library_undo : library_redo
    /* translators: button label text should, if possible, be under 16 characters. */,
    label: (0,external_wp_i18n_namespaceObject.__)('Undo'),
    shortcut: external_wp_keycodes_namespaceObject.displayShortcut.primary('z')
    // If there are no undo levels we don't want to actually disable this
    // button, because it will remove focus for keyboard users.
    // See: https://github.com/WordPress/gutenberg/issues/3486
    ,
    "aria-disabled": !hasUndo,
    onClick: hasUndo ? undo : undefined,
    className: "editor-history__undo"
  });
}

/** @typedef {import('react').Ref<HTMLElement>} Ref */

/**
 * Renders the undo button for the editor history.
 *
 * @param {Object} props - Props.
 * @param {Ref}    ref   - Forwarded ref.
 *
 * @return {Component} The component to be rendered.
 */
/* harmony default export */ const editor_history_undo = ((0,external_wp_element_namespaceObject.forwardRef)(EditorHistoryUndo));

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/template-validation-notice/index.js
/**
 * WordPress dependencies
 */








function TemplateValidationNotice() {
  const [showConfirmDialog, setShowConfirmDialog] = (0,external_wp_element_namespaceObject.useState)(false);
  const isValid = (0,external_wp_data_namespaceObject.useSelect)(select => {
    return select(external_wp_blockEditor_namespaceObject.store).isValidTemplate();
  }, []);
  const {
    setTemplateValidity,
    synchronizeTemplate
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_blockEditor_namespaceObject.store);
  if (isValid) {
    return null;
  }
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
    children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Notice, {
      className: "editor-template-validation-notice",
      isDismissible: false,
      status: "warning",
      actions: [{
        label: (0,external_wp_i18n_namespaceObject.__)('Keep it as is'),
        onClick: () => setTemplateValidity(true)
      }, {
        label: (0,external_wp_i18n_namespaceObject.__)('Reset the template'),
        onClick: () => setShowConfirmDialog(true)
      }],
      children: (0,external_wp_i18n_namespaceObject.__)('The content of your post doesn’t match the template assigned to your post type.')
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.__experimentalConfirmDialog, {
      isOpen: showConfirmDialog,
      confirmButtonText: (0,external_wp_i18n_namespaceObject.__)('Reset'),
      onConfirm: () => {
        setShowConfirmDialog(false);
        synchronizeTemplate();
      },
      onCancel: () => setShowConfirmDialog(false),
      children: (0,external_wp_i18n_namespaceObject.__)('Resetting the template may result in loss of content, do you want to continue?')
    })]
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/editor-notices/index.js
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


/**
 * This component renders the notices displayed in the editor. It displays pinned notices first, followed by dismissible
 *
 * @example
 * ```jsx
 * <EditorNotices />
 * ```
 *
 * @return {JSX.Element} The rendered EditorNotices component.
 */



function EditorNotices() {
  const {
    notices
  } = (0,external_wp_data_namespaceObject.useSelect)(select => ({
    notices: select(external_wp_notices_namespaceObject.store).getNotices()
  }), []);
  const {
    removeNotice
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_notices_namespaceObject.store);
  const dismissibleNotices = notices.filter(({
    isDismissible,
    type
  }) => isDismissible && type === 'default');
  const nonDismissibleNotices = notices.filter(({
    isDismissible,
    type
  }) => !isDismissible && type === 'default');
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
    children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.NoticeList, {
      notices: nonDismissibleNotices,
      className: "components-editor-notices__pinned"
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.NoticeList, {
      notices: dismissibleNotices,
      className: "components-editor-notices__dismissible",
      onRemove: removeNotice,
      children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(TemplateValidationNotice, {})
    })]
  });
}
/* harmony default export */ const editor_notices = (EditorNotices);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/editor-snackbars/index.js
/**
 * WordPress dependencies
 */




// Last three notices. Slices from the tail end of the list.

const MAX_VISIBLE_NOTICES = -3;

/**
 * Renders the editor snackbars component.
 *
 * @return {JSX.Element} The rendered component.
 */
function EditorSnackbars() {
  const notices = (0,external_wp_data_namespaceObject.useSelect)(select => select(external_wp_notices_namespaceObject.store).getNotices(), []);
  const {
    removeNotice
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_notices_namespaceObject.store);
  const snackbarNotices = notices.filter(({
    type
  }) => type === 'snackbar').slice(MAX_VISIBLE_NOTICES);
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.SnackbarList, {
    notices: snackbarNotices,
    className: "components-editor-notices__snackbar",
    onRemove: removeNotice
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/connection.js
/**
 * WordPress dependencies
 */


const connection = /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  fillRule: "evenodd",
  children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.Path, {
    d: "M19.53 4.47a.75.75 0 0 1 0 1.06L17.06 8l.77.769a3.155 3.155 0 0 1 .685 3.439 3.15 3.15 0 0 1-.685 1.022v.001L13.23 17.83v.001a3.15 3.15 0 0 1-4.462 0L8 17.06l-2.47 2.47a.75.75 0 0 1-1.06-1.06L6.94 16l-.77-.769a3.154 3.154 0 0 1-.685-3.439 3.15 3.15 0 0 1 .685-1.023l4.599-4.598a3.152 3.152 0 0 1 4.462 0l.769.768 2.47-2.47a.75.75 0 0 1 1.06 0Zm-2.76 7.7L15 13.94 10.06 9l1.771-1.77a1.65 1.65 0 0 1 2.338 0L16.77 9.83a1.649 1.649 0 0 1 0 2.338h-.001ZM13.94 15 9 10.06l-1.77 1.771a1.65 1.65 0 0 0 0 2.338l2.601 2.602a1.649 1.649 0 0 0 2.338 0v-.001L13.94 15Z"
  })
});
/* harmony default export */ const library_connection = (connection);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/entities-saved-states/entity-record-item.js
/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */





function EntityRecordItem({
  record,
  checked,
  onChange
}) {
  const {
    name,
    kind,
    title,
    key
  } = record;

  // Handle templates that might use default descriptive titles.
  const {
    entityRecordTitle,
    hasPostMetaChanges
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    if ('postType' !== kind || 'wp_template' !== name) {
      return {
        entityRecordTitle: title,
        hasPostMetaChanges: unlock(select(store_store)).hasPostMetaChanges(name, key)
      };
    }
    const template = select(external_wp_coreData_namespaceObject.store).getEditedEntityRecord(kind, name, key);
    return {
      entityRecordTitle: select(store_store).__experimentalGetTemplateInfo(template).title,
      hasPostMetaChanges: unlock(select(store_store)).hasPostMetaChanges(name, key)
    };
  }, [name, kind, title, key]);
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
    children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.PanelRow, {
      children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.CheckboxControl, {
        __nextHasNoMarginBottom: true,
        label: (0,external_wp_htmlEntities_namespaceObject.decodeEntities)(entityRecordTitle) || (0,external_wp_i18n_namespaceObject.__)('Untitled'),
        checked: checked,
        onChange: onChange
      })
    }), hasPostMetaChanges && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.PanelRow, {
      children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.Flex, {
        className: "entities-saved-states__post-meta",
        children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Icon, {
          className: "entities-saved-states__connections-icon",
          icon: library_connection,
          size: 24
        }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("span", {
          className: "entities-saved-states__bindings-text",
          children: (0,external_wp_i18n_namespaceObject.__)('Post Meta.')
        })]
      })
    })]
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/entities-saved-states/entity-type-list.js
/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */




const {
  getGlobalStylesChanges,
  GlobalStylesContext
} = unlock(external_wp_blockEditor_namespaceObject.privateApis);
function getEntityDescription(entity, count) {
  switch (entity) {
    case 'site':
      return 1 === count ? (0,external_wp_i18n_namespaceObject.__)('This change will affect your whole site.') : (0,external_wp_i18n_namespaceObject.__)('These changes will affect your whole site.');
    case 'wp_template':
      return (0,external_wp_i18n_namespaceObject.__)('This change will affect pages and posts that use this template.');
    case 'page':
    case 'post':
      return (0,external_wp_i18n_namespaceObject.__)('The following has been modified.');
  }
}
function GlobalStylesDescription({
  record
}) {
  const {
    user: currentEditorGlobalStyles
  } = (0,external_wp_element_namespaceObject.useContext)(GlobalStylesContext);
  const savedRecord = (0,external_wp_data_namespaceObject.useSelect)(select => select(external_wp_coreData_namespaceObject.store).getEntityRecord(record.kind, record.name, record.key), [record.kind, record.name, record.key]);
  const globalStylesChanges = getGlobalStylesChanges(currentEditorGlobalStyles, savedRecord, {
    maxResults: 10
  });
  return globalStylesChanges.length ? /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("ul", {
    className: "entities-saved-states__changes",
    children: globalStylesChanges.map(change => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("li", {
      children: change
    }, change))
  }) : null;
}
function EntityDescription({
  record,
  count
}) {
  if ('globalStyles' === record?.name) {
    return null;
  }
  const description = getEntityDescription(record?.name, count);
  return description ? /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.PanelRow, {
    children: description
  }) : null;
}
function EntityTypeList({
  list,
  unselectedEntities,
  setUnselectedEntities
}) {
  const count = list.length;
  const firstRecord = list[0];
  const entityConfig = (0,external_wp_data_namespaceObject.useSelect)(select => select(external_wp_coreData_namespaceObject.store).getEntityConfig(firstRecord.kind, firstRecord.name), [firstRecord.kind, firstRecord.name]);
  let entityLabel = entityConfig.label;
  if (firstRecord?.name === 'wp_template_part') {
    entityLabel = 1 === count ? (0,external_wp_i18n_namespaceObject.__)('Template Part') : (0,external_wp_i18n_namespaceObject.__)('Template Parts');
  }
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.PanelBody, {
    title: entityLabel,
    initialOpen: true,
    children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(EntityDescription, {
      record: firstRecord,
      count: count
    }), list.map(record => {
      return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(EntityRecordItem, {
        record: record,
        checked: !unselectedEntities.some(elt => elt.kind === record.kind && elt.name === record.name && elt.key === record.key && elt.property === record.property),
        onChange: value => setUnselectedEntities(record, value)
      }, record.key || record.property);
    }), 'globalStyles' === firstRecord?.name && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(GlobalStylesDescription, {
      record: firstRecord
    })]
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/entities-saved-states/hooks/use-is-dirty.js
/**
 * WordPress dependencies
 */



const useIsDirty = () => {
  const {
    editedEntities,
    siteEdits,
    siteEntityConfig
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      __experimentalGetDirtyEntityRecords,
      getEntityRecordEdits,
      getEntityConfig
    } = select(external_wp_coreData_namespaceObject.store);
    return {
      editedEntities: __experimentalGetDirtyEntityRecords(),
      siteEdits: getEntityRecordEdits('root', 'site'),
      siteEntityConfig: getEntityConfig('root', 'site')
    };
  }, []);
  const dirtyEntityRecords = (0,external_wp_element_namespaceObject.useMemo)(() => {
    var _siteEntityConfig$met;
    // Remove site object and decouple into its edited pieces.
    const editedEntitiesWithoutSite = editedEntities.filter(record => !(record.kind === 'root' && record.name === 'site'));
    const siteEntityLabels = (_siteEntityConfig$met = siteEntityConfig?.meta?.labels) !== null && _siteEntityConfig$met !== void 0 ? _siteEntityConfig$met : {};
    const editedSiteEntities = [];
    for (const property in siteEdits) {
      editedSiteEntities.push({
        kind: 'root',
        name: 'site',
        title: siteEntityLabels[property] || property,
        property
      });
    }
    return [...editedEntitiesWithoutSite, ...editedSiteEntities];
  }, [editedEntities, siteEdits, siteEntityConfig]);

  // Unchecked entities to be ignored by save function.
  const [unselectedEntities, _setUnselectedEntities] = (0,external_wp_element_namespaceObject.useState)([]);
  const setUnselectedEntities = ({
    kind,
    name,
    key,
    property
  }, checked) => {
    if (checked) {
      _setUnselectedEntities(unselectedEntities.filter(elt => elt.kind !== kind || elt.name !== name || elt.key !== key || elt.property !== property));
    } else {
      _setUnselectedEntities([...unselectedEntities, {
        kind,
        name,
        key,
        property
      }]);
    }
  };
  const isDirty = dirtyEntityRecords.length - unselectedEntities.length > 0;
  return {
    dirtyEntityRecords,
    isDirty,
    setUnselectedEntities,
    unselectedEntities
  };
};

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/entities-saved-states/index.js
/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */






function identity(values) {
  return values;
}
function EntitiesSavedStates({
  close,
  renderDialog = undefined
}) {
  const isDirtyProps = useIsDirty();
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(EntitiesSavedStatesExtensible, {
    close: close,
    renderDialog: renderDialog,
    ...isDirtyProps
  });
}
function EntitiesSavedStatesExtensible({
  additionalPrompt = undefined,
  close,
  onSave = identity,
  saveEnabled: saveEnabledProp = undefined,
  saveLabel = (0,external_wp_i18n_namespaceObject.__)('Save'),
  renderDialog = undefined,
  dirtyEntityRecords,
  isDirty,
  setUnselectedEntities,
  unselectedEntities
}) {
  const saveButtonRef = (0,external_wp_element_namespaceObject.useRef)();
  const {
    saveDirtyEntities
  } = unlock((0,external_wp_data_namespaceObject.useDispatch)(store_store));
  // To group entities by type.
  const partitionedSavables = dirtyEntityRecords.reduce((acc, record) => {
    const {
      name
    } = record;
    if (!acc[name]) {
      acc[name] = [];
    }
    acc[name].push(record);
    return acc;
  }, {});

  // Sort entity groups.
  const {
    site: siteSavables,
    wp_template: templateSavables,
    wp_template_part: templatePartSavables,
    ...contentSavables
  } = partitionedSavables;
  const sortedPartitionedSavables = [siteSavables, templateSavables, templatePartSavables, ...Object.values(contentSavables)].filter(Array.isArray);
  const saveEnabled = saveEnabledProp !== null && saveEnabledProp !== void 0 ? saveEnabledProp : isDirty;
  // Explicitly define this with no argument passed.  Using `close` on
  // its own will use the event object in place of the expected saved entities.
  const dismissPanel = (0,external_wp_element_namespaceObject.useCallback)(() => close(), [close]);
  const [saveDialogRef, saveDialogProps] = (0,external_wp_compose_namespaceObject.__experimentalUseDialog)({
    onClose: () => dismissPanel()
  });
  const dialogLabel = (0,external_wp_compose_namespaceObject.useInstanceId)(EntitiesSavedStatesExtensible, 'label');
  const dialogDescription = (0,external_wp_compose_namespaceObject.useInstanceId)(EntitiesSavedStatesExtensible, 'description');
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
    ref: saveDialogRef,
    ...saveDialogProps,
    className: "entities-saved-states__panel",
    role: renderDialog ? 'dialog' : undefined,
    "aria-labelledby": renderDialog ? dialogLabel : undefined,
    "aria-describedby": renderDialog ? dialogDescription : undefined,
    children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.Flex, {
      className: "entities-saved-states__panel-header",
      gap: 2,
      children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.FlexItem, {
        isBlock: true,
        as: external_wp_components_namespaceObject.Button,
        ref: saveButtonRef,
        variant: "primary",
        disabled: !saveEnabled,
        __experimentalIsFocusable: true,
        onClick: () => saveDirtyEntities({
          onSave,
          dirtyEntityRecords,
          entitiesToSkip: unselectedEntities,
          close
        }),
        className: "editor-entities-saved-states__save-button",
        children: saveLabel
      }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.FlexItem, {
        isBlock: true,
        as: external_wp_components_namespaceObject.Button,
        variant: "secondary",
        onClick: dismissPanel,
        children: (0,external_wp_i18n_namespaceObject.__)('Cancel')
      })]
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
      className: "entities-saved-states__text-prompt",
      children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
        className: "entities-saved-states__text-prompt--header-wrapper",
        id: renderDialog ? dialogLabel : undefined,
        children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("strong", {
          className: "entities-saved-states__text-prompt--header",
          children: (0,external_wp_i18n_namespaceObject.__)('Are you ready to save?')
        }), additionalPrompt]
      }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("p", {
        id: renderDialog ? dialogDescription : undefined,
        children: isDirty ? (0,external_wp_element_namespaceObject.createInterpolateElement)((0,external_wp_i18n_namespaceObject.sprintf)( /* translators: %d: number of site changes waiting to be saved. */
        (0,external_wp_i18n_namespaceObject._n)('There is <strong>%d site change</strong> waiting to be saved.', 'There are <strong>%d site changes</strong> waiting to be saved.', sortedPartitionedSavables.length), sortedPartitionedSavables.length), {
          strong: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("strong", {})
        }) : (0,external_wp_i18n_namespaceObject.__)('Select the items you want to save.')
      })]
    }), sortedPartitionedSavables.map(list => {
      return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(EntityTypeList, {
        list: list,
        unselectedEntities: unselectedEntities,
        setUnselectedEntities: setUnselectedEntities
      }, list[0].name);
    })]
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/error-boundary/index.js
/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */


function getContent() {
  try {
    // While `select` in a component is generally discouraged, it is
    // used here because it (a) reduces the chance of data loss in the
    // case of additional errors by performing a direct retrieval and
    // (b) avoids the performance cost associated with unnecessary
    // content serialization throughout the lifetime of a non-erroring
    // application.
    return (0,external_wp_data_namespaceObject.select)(store_store).getEditedPostContent();
  } catch (error) {}
}
function CopyButton({
  text,
  children
}) {
  const ref = (0,external_wp_compose_namespaceObject.useCopyToClipboard)(text);
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
    variant: "secondary",
    ref: ref,
    children: children
  });
}
class ErrorBoundary extends external_wp_element_namespaceObject.Component {
  constructor() {
    super(...arguments);
    this.state = {
      error: null
    };
  }
  componentDidCatch(error) {
    (0,external_wp_hooks_namespaceObject.doAction)('editor.ErrorBoundary.errorLogged', error);
  }
  static getDerivedStateFromError(error) {
    return {
      error
    };
  }
  render() {
    const {
      error
    } = this.state;
    if (!error) {
      return this.props.children;
    }
    const actions = [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(CopyButton, {
      text: getContent,
      children: (0,external_wp_i18n_namespaceObject.__)('Copy Post Text')
    }, "copy-post"), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(CopyButton, {
      text: error.stack,
      children: (0,external_wp_i18n_namespaceObject.__)('Copy Error')
    }, "copy-error")];
    return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_blockEditor_namespaceObject.Warning, {
      className: "editor-error-boundary",
      actions: actions,
      children: (0,external_wp_i18n_namespaceObject.__)('The editor has encountered an unexpected error.')
    });
  }
}

/**
 * ErrorBoundary is used to catch JavaScript errors anywhere in a child component tree, log those errors, and display a fallback UI.
 *
 * It uses the lifecycle methods getDerivedStateFromError and componentDidCatch to catch errors in a child component tree.
 *
 * getDerivedStateFromError is used to render a fallback UI after an error has been thrown, and componentDidCatch is used to log error information.
 *
 * @class ErrorBoundary
 * @augments Component
 */
/* harmony default export */ const error_boundary = (ErrorBoundary);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/local-autosave-monitor/index.js
/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */




const requestIdleCallback = window.requestIdleCallback ? window.requestIdleCallback : window.requestAnimationFrame;
let hasStorageSupport;

/**
 * Function which returns true if the current environment supports browser
 * sessionStorage, or false otherwise. The result of this function is cached and
 * reused in subsequent invocations.
 */
const hasSessionStorageSupport = () => {
  if (hasStorageSupport !== undefined) {
    return hasStorageSupport;
  }
  try {
    // Private Browsing in Safari 10 and earlier will throw an error when
    // attempting to set into sessionStorage. The test here is intentional in
    // causing a thrown error as condition bailing from local autosave.
    window.sessionStorage.setItem('__wpEditorTestSessionStorage', '');
    window.sessionStorage.removeItem('__wpEditorTestSessionStorage');
    hasStorageSupport = true;
  } catch {
    hasStorageSupport = false;
  }
  return hasStorageSupport;
};

/**
 * Custom hook which manages the creation of a notice prompting the user to
 * restore a local autosave, if one exists.
 */
function useAutosaveNotice() {
  const {
    postId,
    isEditedPostNew,
    hasRemoteAutosave
  } = (0,external_wp_data_namespaceObject.useSelect)(select => ({
    postId: select(store_store).getCurrentPostId(),
    isEditedPostNew: select(store_store).isEditedPostNew(),
    hasRemoteAutosave: !!select(store_store).getEditorSettings().autosave
  }), []);
  const {
    getEditedPostAttribute
  } = (0,external_wp_data_namespaceObject.useSelect)(store_store);
  const {
    createWarningNotice,
    removeNotice
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_notices_namespaceObject.store);
  const {
    editPost,
    resetEditorBlocks
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    let localAutosave = localAutosaveGet(postId, isEditedPostNew);
    if (!localAutosave) {
      return;
    }
    try {
      localAutosave = JSON.parse(localAutosave);
    } catch {
      // Not usable if it can't be parsed.
      return;
    }
    const {
      post_title: title,
      content,
      excerpt
    } = localAutosave;
    const edits = {
      title,
      content,
      excerpt
    };
    {
      // Only display a notice if there is a difference between what has been
      // saved and that which is stored in sessionStorage.
      const hasDifference = Object.keys(edits).some(key => {
        return edits[key] !== getEditedPostAttribute(key);
      });
      if (!hasDifference) {
        // If there is no difference, it can be safely ejected from storage.
        localAutosaveClear(postId, isEditedPostNew);
        return;
      }
    }
    if (hasRemoteAutosave) {
      return;
    }
    const id = 'wpEditorAutosaveRestore';
    createWarningNotice((0,external_wp_i18n_namespaceObject.__)('The backup of this post in your browser is different from the version below.'), {
      id,
      actions: [{
        label: (0,external_wp_i18n_namespaceObject.__)('Restore the backup'),
        onClick() {
          const {
            content: editsContent,
            ...editsWithoutContent
          } = edits;
          editPost(editsWithoutContent);
          resetEditorBlocks((0,external_wp_blocks_namespaceObject.parse)(edits.content));
          removeNotice(id);
        }
      }]
    });
  }, [isEditedPostNew, postId]);
}

/**
 * Custom hook which ejects a local autosave after a successful save occurs.
 */
function useAutosavePurge() {
  const {
    postId,
    isEditedPostNew,
    isDirty,
    isAutosaving,
    didError
  } = (0,external_wp_data_namespaceObject.useSelect)(select => ({
    postId: select(store_store).getCurrentPostId(),
    isEditedPostNew: select(store_store).isEditedPostNew(),
    isDirty: select(store_store).isEditedPostDirty(),
    isAutosaving: select(store_store).isAutosavingPost(),
    didError: select(store_store).didPostSaveRequestFail()
  }), []);
  const lastIsDirty = (0,external_wp_element_namespaceObject.useRef)(isDirty);
  const lastIsAutosaving = (0,external_wp_element_namespaceObject.useRef)(isAutosaving);
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    if (!didError && (lastIsAutosaving.current && !isAutosaving || lastIsDirty.current && !isDirty)) {
      localAutosaveClear(postId, isEditedPostNew);
    }
    lastIsDirty.current = isDirty;
    lastIsAutosaving.current = isAutosaving;
  }, [isDirty, isAutosaving, didError]);

  // Once the isEditedPostNew changes from true to false, let's clear the auto-draft autosave.
  const wasEditedPostNew = (0,external_wp_compose_namespaceObject.usePrevious)(isEditedPostNew);
  const prevPostId = (0,external_wp_compose_namespaceObject.usePrevious)(postId);
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    if (prevPostId === postId && wasEditedPostNew && !isEditedPostNew) {
      localAutosaveClear(postId, true);
    }
  }, [isEditedPostNew, postId]);
}
function LocalAutosaveMonitor() {
  const {
    autosave
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  const deferredAutosave = (0,external_wp_element_namespaceObject.useCallback)(() => {
    requestIdleCallback(() => autosave({
      local: true
    }));
  }, []);
  useAutosaveNotice();
  useAutosavePurge();
  const localAutosaveInterval = (0,external_wp_data_namespaceObject.useSelect)(select => select(store_store).getEditorSettings().localAutosaveInterval, []);
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(autosave_monitor, {
    interval: localAutosaveInterval,
    autosave: deferredAutosave
  });
}

/**
 * Monitors local autosaves of a post in the editor.
 * It uses several hooks and functions to manage autosave behavior:
 * - `useAutosaveNotice` hook: Manages the creation of a notice prompting the user to restore a local autosave, if one exists.
 * - `useAutosavePurge` hook: Ejects a local autosave after a successful save occurs.
 * - `hasSessionStorageSupport` function: Checks if the current environment supports browser sessionStorage.
 * - `LocalAutosaveMonitor` component: Uses the `AutosaveMonitor` component to perform autosaves at a specified interval.
 *
 * The module also checks for sessionStorage support and conditionally exports the `LocalAutosaveMonitor` component based on that.
 *
 * @module LocalAutosaveMonitor
 */
/* harmony default export */ const local_autosave_monitor = ((0,external_wp_compose_namespaceObject.ifCondition)(hasSessionStorageSupport)(LocalAutosaveMonitor));

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/page-attributes/check.js
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


/**
 * Wrapper component that renders its children only if the post type supports page attributes.
 *
 * @param {Object}  props          - The component props.
 * @param {Element} props.children - The child components to render.
 *
 * @return {Component|null} The rendered child components or null if page attributes are not supported.
 */
function PageAttributesCheck({
  children
}) {
  const supportsPageAttributes = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getEditedPostAttribute
    } = select(store_store);
    const {
      getPostType
    } = select(external_wp_coreData_namespaceObject.store);
    const postType = getPostType(getEditedPostAttribute('type'));
    return !!postType?.supports?.['page-attributes'];
  }, []);

  // Only render fields if post type supports page attributes or available templates exist.
  if (!supportsPageAttributes) {
    return null;
  }
  return children;
}
/* harmony default export */ const page_attributes_check = (PageAttributesCheck);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-panel-row/index.js
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */




const PostPanelRow = (0,external_wp_element_namespaceObject.forwardRef)(({
  className,
  label,
  children
}, ref) => {
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.__experimentalHStack, {
    className: dist_clsx('editor-post-panel__row', className),
    ref: ref,
    children: [label && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
      className: "editor-post-panel__row-label",
      children: label
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
      className: "editor-post-panel__row-control",
      children: children
    })]
  });
});
/* harmony default export */ const post_panel_row = (PostPanelRow);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-type-support-check/index.js
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


/**
 * A component which renders its own children only if the current editor post
 * type supports one of the given `supportKeys` prop.
 *
 * @param {Object}            props             Props.
 * @param {Element}           props.children    Children to be rendered if post
 *                                              type supports.
 * @param {(string|string[])} props.supportKeys String or string array of keys
 *                                              to test.
 *
 * @return {Component} The component to be rendered.
 */
function PostTypeSupportCheck({
  children,
  supportKeys
}) {
  const postType = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getEditedPostAttribute
    } = select(store_store);
    const {
      getPostType
    } = select(external_wp_coreData_namespaceObject.store);
    return getPostType(getEditedPostAttribute('type'));
  }, []);
  let isSupported = !!postType;
  if (postType) {
    isSupported = (Array.isArray(supportKeys) ? supportKeys : [supportKeys]).some(key => !!postType.supports[key]);
  }
  if (!isSupported) {
    return null;
  }
  return children;
}
/* harmony default export */ const post_type_support_check = (PostTypeSupportCheck);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/page-attributes/order.js
/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */





function PageAttributesOrder() {
  const order = (0,external_wp_data_namespaceObject.useSelect)(select => {
    var _select$getEditedPost;
    return (_select$getEditedPost = select(store_store).getEditedPostAttribute('menu_order')) !== null && _select$getEditedPost !== void 0 ? _select$getEditedPost : 0;
  }, []);
  const {
    editPost
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  const [orderInput, setOrderInput] = (0,external_wp_element_namespaceObject.useState)(null);
  const setUpdatedOrder = value => {
    setOrderInput(value);
    const newOrder = Number(value);
    if (Number.isInteger(newOrder) && value.trim?.() !== '') {
      editPost({
        menu_order: newOrder
      });
    }
  };
  const value = orderInput !== null && orderInput !== void 0 ? orderInput : order;
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Flex, {
    children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.FlexBlock, {
      children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.__experimentalNumberControl, {
        __next40pxDefaultSize: true,
        label: (0,external_wp_i18n_namespaceObject.__)('Order'),
        help: (0,external_wp_i18n_namespaceObject.__)('Set the page order.'),
        value: value,
        onChange: setUpdatedOrder,
        hideLabelFromVision: true,
        onBlur: () => {
          setOrderInput(null);
        }
      })
    })
  });
}

/**
 * Renders the Page Attributes Order component. A number input in an editor interface
 * for setting the order of a given page.
 *
 * @return {Component} The component to be rendered.
 */
function PageAttributesOrderWithChecks() {
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(post_type_support_check, {
    supportKeys: "page-attributes",
    children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PageAttributesOrder, {})
  });
}
function PostOrderToggle({
  isOpen,
  onClick
}) {
  const order = (0,external_wp_data_namespaceObject.useSelect)(select => {
    var _select$getEditedPost2;
    return (_select$getEditedPost2 = select(store_store).getEditedPostAttribute('menu_order')) !== null && _select$getEditedPost2 !== void 0 ? _select$getEditedPost2 : 0;
  }, []);
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
    size: "compact",
    className: "editor-post-order__panel-toggle",
    variant: "tertiary",
    "aria-expanded": isOpen
    // translators: %s: Current post parent.
    ,
    "aria-label": (0,external_wp_i18n_namespaceObject.sprintf)((0,external_wp_i18n_namespaceObject.__)('Change order: %s'), order),
    onClick: onClick,
    children: order
  });
}
function OrderRow() {
  // Use internal state instead of a ref to make sure that the component
  // re-renders when the popover's anchor updates.
  const [popoverAnchor, setPopoverAnchor] = (0,external_wp_element_namespaceObject.useState)(null);
  // Memoize popoverProps to avoid returning a new object every time.
  const popoverProps = (0,external_wp_element_namespaceObject.useMemo)(() => ({
    // Anchor the popover to the middle of the entire row so that it doesn't
    // move around when the label changes.
    anchor: popoverAnchor,
    placement: 'left-start',
    offset: 36,
    shift: true
  }), [popoverAnchor]);
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(post_panel_row, {
    label: (0,external_wp_i18n_namespaceObject.__)('Order'),
    ref: setPopoverAnchor,
    children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Dropdown, {
      popoverProps: popoverProps,
      className: "editor-post-order__panel-dropdown",
      contentClassName: "editor-post-order__panel-dialog",
      focusOnMount: true,
      renderToggle: ({
        isOpen,
        onToggle
      }) => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PostOrderToggle, {
        isOpen: isOpen,
        onClick: onToggle
      }),
      renderContent: ({
        onClose
      }) => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
        className: "editor-post-order",
        children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_blockEditor_namespaceObject.__experimentalInspectorPopoverHeader, {
          title: (0,external_wp_i18n_namespaceObject.__)('Order'),
          onClose: onClose
        }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
          children: [(0,external_wp_i18n_namespaceObject.__)('This attribute determines the order of pages in the Pages List block.'), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("p", {
            children: (0,external_wp_i18n_namespaceObject.__)('Pages with the same order value will sorted alphabetically. Negative order values are also supported.')
          })]
        }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PageAttributesOrder, {})]
      })
    })
  });
}

// EXTERNAL MODULE: ./node_modules/remove-accents/index.js
var remove_accents = __webpack_require__(9681);
var remove_accents_default = /*#__PURE__*/__webpack_require__.n(remove_accents);
;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/utils/terms.js
/**
 * WordPress dependencies
 */


/**
 * Returns terms in a tree form.
 *
 * @param {Array} flatTerms Array of terms in flat format.
 *
 * @return {Array} Array of terms in tree format.
 */
function buildTermsTree(flatTerms) {
  const flatTermsWithParentAndChildren = flatTerms.map(term => {
    return {
      children: [],
      parent: null,
      ...term
    };
  });

  // All terms should have a `parent` because we're about to index them by it.
  if (flatTermsWithParentAndChildren.some(({
    parent
  }) => parent === null)) {
    return flatTermsWithParentAndChildren;
  }
  const termsByParent = flatTermsWithParentAndChildren.reduce((acc, term) => {
    const {
      parent
    } = term;
    if (!acc[parent]) {
      acc[parent] = [];
    }
    acc[parent].push(term);
    return acc;
  }, {});
  const fillWithChildren = terms => {
    return terms.map(term => {
      const children = termsByParent[term.id];
      return {
        ...term,
        children: children && children.length ? fillWithChildren(children) : []
      };
    });
  };
  return fillWithChildren(termsByParent['0'] || []);
}
const unescapeString = arg => {
  return (0,external_wp_htmlEntities_namespaceObject.decodeEntities)(arg);
};

/**
 * Returns a term object with name unescaped.
 *
 * @param {Object} term The term object to unescape.
 *
 * @return {Object} Term object with name property unescaped.
 */
const unescapeTerm = term => {
  return {
    ...term,
    name: unescapeString(term.name)
  };
};

/**
 * Returns an array of term objects with names unescaped.
 * The unescape of each term is performed using the unescapeTerm function.
 *
 * @param {Object[]} terms Array of term objects to unescape.
 *
 * @return {Object[]} Array of term objects unescaped.
 */
const unescapeTerms = terms => {
  return (terms !== null && terms !== void 0 ? terms : []).map(unescapeTerm);
};

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/page-attributes/parent.js
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */









/**
 * Internal dependencies
 */





function getTitle(post) {
  return post?.title?.rendered ? (0,external_wp_htmlEntities_namespaceObject.decodeEntities)(post.title.rendered) : `#${post.id} (${(0,external_wp_i18n_namespaceObject.__)('no title')})`;
}
const getItemPriority = (name, searchValue) => {
  const normalizedName = remove_accents_default()(name || '').toLowerCase();
  const normalizedSearch = remove_accents_default()(searchValue || '').toLowerCase();
  if (normalizedName === normalizedSearch) {
    return 0;
  }
  if (normalizedName.startsWith(normalizedSearch)) {
    return normalizedName.length;
  }
  return Infinity;
};

/**
 * Renders the Page Attributes Parent component. A dropdown menu in an editor interface
 * for selecting the parent page of a given page.
 *
 * @return {Component|null} The component to be rendered. Return null if post type is not hierarchical.
 */
function PageAttributesParent() {
  const {
    editPost
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  const [fieldValue, setFieldValue] = (0,external_wp_element_namespaceObject.useState)(false);
  const {
    isHierarchical,
    parentPostId,
    parentPostTitle,
    pageItems
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    var _pType$hierarchical;
    const {
      getPostType,
      getEntityRecords,
      getEntityRecord
    } = select(external_wp_coreData_namespaceObject.store);
    const {
      getCurrentPostId,
      getEditedPostAttribute
    } = select(store_store);
    const postTypeSlug = getEditedPostAttribute('type');
    const pageId = getEditedPostAttribute('parent');
    const pType = getPostType(postTypeSlug);
    const postId = getCurrentPostId();
    const postIsHierarchical = (_pType$hierarchical = pType?.hierarchical) !== null && _pType$hierarchical !== void 0 ? _pType$hierarchical : false;
    const query = {
      per_page: 100,
      exclude: postId,
      parent_exclude: postId,
      orderby: 'menu_order',
      order: 'asc',
      _fields: 'id,title,parent'
    };

    // Perform a search when the field is changed.
    if (!!fieldValue) {
      query.search = fieldValue;
    }
    const parentPost = pageId ? getEntityRecord('postType', postTypeSlug, pageId) : null;
    return {
      isHierarchical: postIsHierarchical,
      parentPostId: pageId,
      parentPostTitle: parentPost ? getTitle(parentPost) : '',
      pageItems: postIsHierarchical ? getEntityRecords('postType', postTypeSlug, query) : null
    };
  }, [fieldValue]);
  const parentOptions = (0,external_wp_element_namespaceObject.useMemo)(() => {
    const getOptionsFromTree = (tree, level = 0) => {
      const mappedNodes = tree.map(treeNode => [{
        value: treeNode.id,
        label: '— '.repeat(level) + (0,external_wp_htmlEntities_namespaceObject.decodeEntities)(treeNode.name),
        rawName: treeNode.name
      }, ...getOptionsFromTree(treeNode.children || [], level + 1)]);
      const sortedNodes = mappedNodes.sort(([a], [b]) => {
        const priorityA = getItemPriority(a.rawName, fieldValue);
        const priorityB = getItemPriority(b.rawName, fieldValue);
        return priorityA >= priorityB ? 1 : -1;
      });
      return sortedNodes.flat();
    };
    if (!pageItems) {
      return [];
    }
    let tree = pageItems.map(item => ({
      id: item.id,
      parent: item.parent,
      name: getTitle(item)
    }));

    // Only build a hierarchical tree when not searching.
    if (!fieldValue) {
      tree = buildTermsTree(tree);
    }
    const opts = getOptionsFromTree(tree);

    // Ensure the current parent is in the options list.
    const optsHasParent = opts.find(item => item.value === parentPostId);
    if (parentPostTitle && !optsHasParent) {
      opts.unshift({
        value: parentPostId,
        label: parentPostTitle
      });
    }
    return opts;
  }, [pageItems, fieldValue, parentPostTitle, parentPostId]);
  if (!isHierarchical) {
    return null;
  }
  /**
   * Handle user input.
   *
   * @param {string} inputValue The current value of the input field.
   */
  const handleKeydown = inputValue => {
    setFieldValue(inputValue);
  };

  /**
   * Handle author selection.
   *
   * @param {Object} selectedPostId The selected Author.
   */
  const handleChange = selectedPostId => {
    editPost({
      parent: selectedPostId
    });
  };
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.ComboboxControl, {
    __nextHasNoMarginBottom: true,
    __next40pxDefaultSize: true,
    className: "editor-page-attributes__parent",
    label: (0,external_wp_i18n_namespaceObject.__)('Parent'),
    help: (0,external_wp_i18n_namespaceObject.__)('Choose a parent page.'),
    value: parentPostId,
    options: parentOptions,
    onFilterValueChange: (0,external_wp_compose_namespaceObject.debounce)(handleKeydown, 300),
    onChange: handleChange,
    hideLabelFromVision: true
  });
}
function PostParentToggle({
  isOpen,
  onClick
}) {
  const parentPost = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getEditedPostAttribute
    } = select(store_store);
    const parentPostId = getEditedPostAttribute('parent');
    if (!parentPostId) {
      return null;
    }
    const {
      getEntityRecord
    } = select(external_wp_coreData_namespaceObject.store);
    const postTypeSlug = getEditedPostAttribute('type');
    return getEntityRecord('postType', postTypeSlug, parentPostId);
  }, []);
  const parentTitle = (0,external_wp_element_namespaceObject.useMemo)(() => !parentPost ? (0,external_wp_i18n_namespaceObject.__)('None') : getTitle(parentPost), [parentPost]);
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
    size: "compact",
    className: "editor-post-parent__panel-toggle",
    variant: "tertiary",
    "aria-expanded": isOpen
    // translators: %s: Current post parent.
    ,
    "aria-label": (0,external_wp_i18n_namespaceObject.sprintf)((0,external_wp_i18n_namespaceObject.__)('Change parent: %s'), parentTitle),
    onClick: onClick,
    children: parentTitle
  });
}
function ParentRow() {
  // Use internal state instead of a ref to make sure that the component
  // re-renders when the popover's anchor updates.
  const [popoverAnchor, setPopoverAnchor] = (0,external_wp_element_namespaceObject.useState)(null);
  // Memoize popoverProps to avoid returning a new object every time.
  const popoverProps = (0,external_wp_element_namespaceObject.useMemo)(() => ({
    // Anchor the popover to the middle of the entire row so that it doesn't
    // move around when the label changes.
    anchor: popoverAnchor,
    placement: 'left-start',
    offset: 36,
    shift: true
  }), [popoverAnchor]);
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(post_panel_row, {
    label: (0,external_wp_i18n_namespaceObject.__)('Parent'),
    ref: setPopoverAnchor,
    children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Dropdown, {
      popoverProps: popoverProps,
      className: "editor-post-parent__panel-dropdown",
      contentClassName: "editor-post-parent__panel-dialog",
      focusOnMount: true,
      renderToggle: ({
        isOpen,
        onToggle
      }) => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PostParentToggle, {
        isOpen: isOpen,
        onClick: onToggle
      }),
      renderContent: ({
        onClose
      }) => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
        className: "editor-post-parent",
        children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_blockEditor_namespaceObject.__experimentalInspectorPopoverHeader, {
          title: (0,external_wp_i18n_namespaceObject.__)('Parent'),
          onClose: onClose
        }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
          children: [(0,external_wp_i18n_namespaceObject.__)("Child pages inherit characteristics from their parent, such as URL structure. For instance, if 'Web Design' is a child of 'Services,' its URL would be mysite.com/services/web-design."), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("p", {
            children: [(0,external_wp_i18n_namespaceObject.__)('They also show up as sub-items in the default navigation menu. '), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.ExternalLink, {
              href: (0,external_wp_i18n_namespaceObject.__)('https://wordpress.org/documentation/article/page-post-settings-sidebar/#page-attributes'),
              children: (0,external_wp_i18n_namespaceObject.__)('Learn more')
            })]
          })]
        }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PageAttributesParent, {})]
      })
    })
  });
}
/* harmony default export */ const page_attributes_parent = (PageAttributesParent);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/page-attributes/panel.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */







const PANEL_NAME = 'page-attributes';
function AttributesPanel() {
  const {
    isEnabled,
    postType
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getEditedPostAttribute,
      isEditorPanelEnabled
    } = select(store_store);
    const {
      getPostType
    } = select(external_wp_coreData_namespaceObject.store);
    return {
      isEnabled: isEditorPanelEnabled(PANEL_NAME),
      postType: getPostType(getEditedPostAttribute('type'))
    };
  }, []);
  if (!isEnabled || !postType) {
    return null;
  }
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
    children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(ParentRow, {}), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(OrderRow, {})]
  });
}

/**
 * Renders the Page Attributes Panel component.
 *
 * @return {Component} The component to be rendered.
 */
function PageAttributesPanel() {
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(page_attributes_check, {
    children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(AttributesPanel, {})
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/add-template.js
/**
 * WordPress dependencies
 */


const addTemplate = /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18.5 5.5V8H20V5.5H22.5V4H20V1.5H18.5V4H16V5.5H18.5ZM13.9624 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V10.0391H18.5V18C18.5 18.2761 18.2761 18.5 18 18.5H10L10 10.4917L16.4589 10.5139L16.4641 9.01389L5.5 8.97618V6C5.5 5.72386 5.72386 5.5 6 5.5H13.9624V4ZM5.5 10.4762V18C5.5 18.2761 5.72386 18.5 6 18.5H8.5L8.5 10.4865L5.5 10.4762Z"
  })
});
/* harmony default export */ const add_template = (addTemplate);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-template/create-new-template-modal.js
/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */




const DEFAULT_TITLE = (0,external_wp_i18n_namespaceObject.__)('Custom Template');
function CreateNewTemplateModal({
  onClose
}) {
  const {
    defaultBlockTemplate,
    onNavigateToEntityRecord
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getEditorSettings,
      getCurrentTemplateId
    } = select(store_store);
    return {
      defaultBlockTemplate: getEditorSettings().defaultBlockTemplate,
      onNavigateToEntityRecord: getEditorSettings().onNavigateToEntityRecord,
      getTemplateId: getCurrentTemplateId
    };
  });
  const {
    createTemplate
  } = unlock((0,external_wp_data_namespaceObject.useDispatch)(store_store));
  const [title, setTitle] = (0,external_wp_element_namespaceObject.useState)('');
  const [isBusy, setIsBusy] = (0,external_wp_element_namespaceObject.useState)(false);
  const cancel = () => {
    setTitle('');
    onClose();
  };
  const submit = async event => {
    event.preventDefault();
    if (isBusy) {
      return;
    }
    setIsBusy(true);
    const newTemplateContent = defaultBlockTemplate !== null && defaultBlockTemplate !== void 0 ? defaultBlockTemplate : (0,external_wp_blocks_namespaceObject.serialize)([(0,external_wp_blocks_namespaceObject.createBlock)('core/group', {
      tagName: 'header',
      layout: {
        inherit: true
      }
    }, [(0,external_wp_blocks_namespaceObject.createBlock)('core/site-title'), (0,external_wp_blocks_namespaceObject.createBlock)('core/site-tagline')]), (0,external_wp_blocks_namespaceObject.createBlock)('core/separator'), (0,external_wp_blocks_namespaceObject.createBlock)('core/group', {
      tagName: 'main'
    }, [(0,external_wp_blocks_namespaceObject.createBlock)('core/group', {
      layout: {
        inherit: true
      }
    }, [(0,external_wp_blocks_namespaceObject.createBlock)('core/post-title')]), (0,external_wp_blocks_namespaceObject.createBlock)('core/post-content', {
      layout: {
        inherit: true
      }
    })])]);
    const newTemplate = await createTemplate({
      slug: (0,external_wp_url_namespaceObject.cleanForSlug)(title || DEFAULT_TITLE),
      content: newTemplateContent,
      title: title || DEFAULT_TITLE
    });
    setIsBusy(false);
    onNavigateToEntityRecord({
      postId: newTemplate.id,
      postType: 'wp_template'
    });
    cancel();
  };
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Modal, {
    title: (0,external_wp_i18n_namespaceObject.__)('Create custom template'),
    onRequestClose: cancel,
    children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("form", {
      className: "editor-post-template__create-form",
      onSubmit: submit,
      children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.__experimentalVStack, {
        spacing: "3",
        children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.TextControl, {
          __nextHasNoMarginBottom: true,
          label: (0,external_wp_i18n_namespaceObject.__)('Name'),
          value: title,
          onChange: setTitle,
          placeholder: DEFAULT_TITLE,
          disabled: isBusy,
          help: (0,external_wp_i18n_namespaceObject.__)('Describe the template, e.g. "Post with sidebar". A custom template can be manually applied to any post or page.')
        }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.__experimentalHStack, {
          justify: "right",
          children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
            variant: "tertiary",
            onClick: cancel,
            children: (0,external_wp_i18n_namespaceObject.__)('Cancel')
          }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
            variant: "primary",
            type: "submit",
            isBusy: isBusy,
            "aria-disabled": isBusy,
            children: (0,external_wp_i18n_namespaceObject.__)('Create')
          })]
        })]
      })
    })
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-template/hooks.js
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */

function useEditedPostContext() {
  return (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getCurrentPostId,
      getCurrentPostType
    } = select(store_store);
    return {
      postId: getCurrentPostId(),
      postType: getCurrentPostType()
    };
  }, []);
}
function useAllowSwitchingTemplates() {
  const {
    postType,
    postId
  } = useEditedPostContext();
  return (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getEntityRecord,
      getEntityRecords
    } = select(external_wp_coreData_namespaceObject.store);
    const siteSettings = getEntityRecord('root', 'site');
    const templates = getEntityRecords('postType', 'wp_template', {
      per_page: -1
    });
    const isPostsPage = +postId === siteSettings?.page_for_posts;
    // If current page is set front page or posts page, we also need
    // to check if the current theme has a template for it. If not
    const isFrontPage = postType === 'page' && +postId === siteSettings?.page_on_front && templates?.some(({
      slug
    }) => slug === 'front-page');
    return !isPostsPage && !isFrontPage;
  }, [postId, postType]);
}
function useTemplates(postType) {
  return (0,external_wp_data_namespaceObject.useSelect)(select => select(external_wp_coreData_namespaceObject.store).getEntityRecords('postType', 'wp_template', {
    per_page: -1,
    post_type: postType
  }), [postType]);
}
function useAvailableTemplates(postType) {
  const currentTemplateSlug = useCurrentTemplateSlug();
  const allowSwitchingTemplate = useAllowSwitchingTemplates();
  const templates = useTemplates(postType);
  return (0,external_wp_element_namespaceObject.useMemo)(() => allowSwitchingTemplate && templates?.filter(template => template.is_custom && template.slug !== currentTemplateSlug && !!template.content.raw // Skip empty templates.
  ), [templates, currentTemplateSlug, allowSwitchingTemplate]);
}
function useCurrentTemplateSlug() {
  const {
    postType,
    postId
  } = useEditedPostContext();
  const templates = useTemplates(postType);
  const entityTemplate = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const post = select(external_wp_coreData_namespaceObject.store).getEditedEntityRecord('postType', postType, postId);
    return post?.template;
  }, [postType, postId]);
  if (!entityTemplate) {
    return;
  }
  // If a page has a `template` set and is not included in the list
  // of the theme's templates, do not return it, in order to resolve
  // to the current theme's default template.
  return templates?.find(template => template.slug === entityTemplate)?.slug;
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-template/classic-theme.js
/**
 * WordPress dependencies
 */









/**
 * Internal dependencies
 */





const POPOVER_PROPS = {
  className: 'editor-post-template__dropdown',
  placement: 'bottom-start'
};
function PostTemplateToggle({
  isOpen,
  onClick
}) {
  const templateTitle = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const templateSlug = select(store_store).getEditedPostAttribute('template');
    const {
      supportsTemplateMode,
      availableTemplates
    } = select(store_store).getEditorSettings();
    if (!supportsTemplateMode && availableTemplates[templateSlug]) {
      return availableTemplates[templateSlug];
    }
    const template = select(external_wp_coreData_namespaceObject.store).canUser('create', 'templates') && select(store_store).getCurrentTemplateId();
    return template?.title || template?.slug || availableTemplates?.[templateSlug];
  }, []);
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
    __next40pxDefaultSize: true,
    variant: "tertiary",
    "aria-expanded": isOpen,
    "aria-label": (0,external_wp_i18n_namespaceObject.__)('Template options'),
    onClick: onClick,
    children: templateTitle !== null && templateTitle !== void 0 ? templateTitle : (0,external_wp_i18n_namespaceObject.__)('Default template')
  });
}

/**
 * Renders the dropdown content for selecting a post template.
 *
 * @param {Object}   props         The component props.
 * @param {Function} props.onClose The function to close the dropdown.
 *
 * @return {JSX.Element} The rendered dropdown content.
 */
function PostTemplateDropdownContent({
  onClose
}) {
  var _options$find, _selectedOption$value;
  const allowSwitchingTemplate = useAllowSwitchingTemplates();
  const {
    availableTemplates,
    fetchedTemplates,
    selectedTemplateSlug,
    canCreate,
    canEdit,
    currentTemplateId,
    onNavigateToEntityRecord,
    getEditorSettings
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      canUser,
      getEntityRecords
    } = select(external_wp_coreData_namespaceObject.store);
    const editorSettings = select(store_store).getEditorSettings();
    const canCreateTemplates = canUser('create', 'templates');
    const _currentTemplateId = select(store_store).getCurrentTemplateId();
    return {
      availableTemplates: editorSettings.availableTemplates,
      fetchedTemplates: canCreateTemplates ? getEntityRecords('postType', 'wp_template', {
        post_type: select(store_store).getCurrentPostType(),
        per_page: -1
      }) : undefined,
      selectedTemplateSlug: select(store_store).getEditedPostAttribute('template'),
      canCreate: allowSwitchingTemplate && canCreateTemplates && editorSettings.supportsTemplateMode,
      canEdit: allowSwitchingTemplate && canCreateTemplates && editorSettings.supportsTemplateMode && !!_currentTemplateId,
      currentTemplateId: _currentTemplateId,
      onNavigateToEntityRecord: editorSettings.onNavigateToEntityRecord,
      getEditorSettings: select(store_store).getEditorSettings
    };
  }, [allowSwitchingTemplate]);
  const options = (0,external_wp_element_namespaceObject.useMemo)(() => Object.entries({
    ...availableTemplates,
    ...Object.fromEntries((fetchedTemplates !== null && fetchedTemplates !== void 0 ? fetchedTemplates : []).map(({
      slug,
      title
    }) => [slug, title.rendered]))
  }).map(([slug, title]) => ({
    value: slug,
    label: title
  })), [availableTemplates, fetchedTemplates]);
  const selectedOption = (_options$find = options.find(option => option.value === selectedTemplateSlug)) !== null && _options$find !== void 0 ? _options$find : options.find(option => !option.value); // The default option has '' value.

  const {
    editPost
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  const {
    createSuccessNotice
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_notices_namespaceObject.store);
  const [isCreateModalOpen, setIsCreateModalOpen] = (0,external_wp_element_namespaceObject.useState)(false);
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
    className: "editor-post-template__classic-theme-dropdown",
    children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_blockEditor_namespaceObject.__experimentalInspectorPopoverHeader, {
      title: (0,external_wp_i18n_namespaceObject.__)('Template'),
      help: (0,external_wp_i18n_namespaceObject.__)('Templates define the way content is displayed when viewing your site.'),
      actions: canCreate ? [{
        icon: add_template,
        label: (0,external_wp_i18n_namespaceObject.__)('Add template'),
        onClick: () => setIsCreateModalOpen(true)
      }] : [],
      onClose: onClose
    }), !allowSwitchingTemplate ? /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Notice, {
      status: "warning",
      isDismissible: false,
      children: (0,external_wp_i18n_namespaceObject.__)('The posts page template cannot be changed.')
    }) : /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.SelectControl, {
      __next40pxDefaultSize: true,
      __nextHasNoMarginBottom: true,
      hideLabelFromVision: true,
      label: (0,external_wp_i18n_namespaceObject.__)('Template'),
      value: (_selectedOption$value = selectedOption?.value) !== null && _selectedOption$value !== void 0 ? _selectedOption$value : '',
      options: options,
      onChange: slug => editPost({
        template: slug || ''
      })
    }), canEdit && onNavigateToEntityRecord && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("p", {
      children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
        variant: "link",
        onClick: () => {
          onNavigateToEntityRecord({
            postId: currentTemplateId,
            postType: 'wp_template'
          });
          onClose();
          createSuccessNotice((0,external_wp_i18n_namespaceObject.__)('Editing template. Changes made here affect all posts and pages that use the template.'), {
            type: 'snackbar',
            actions: [{
              label: (0,external_wp_i18n_namespaceObject.__)('Go back'),
              onClick: () => getEditorSettings().onNavigateToPreviousEntityRecord()
            }]
          });
        },
        children: (0,external_wp_i18n_namespaceObject.__)('Edit template')
      })
    }), isCreateModalOpen && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(CreateNewTemplateModal, {
      onClose: () => setIsCreateModalOpen(false)
    })]
  });
}
function ClassicThemeControl() {
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Dropdown, {
    popoverProps: POPOVER_PROPS,
    focusOnMount: true,
    renderToggle: ({
      isOpen,
      onToggle
    }) => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PostTemplateToggle, {
      isOpen: isOpen,
      onClick: onToggle
    }),
    renderContent: ({
      onClose
    }) => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PostTemplateDropdownContent, {
      onClose: onClose
    })
  });
}

/**
 * Provides a dropdown menu for selecting and managing post templates.
 *
 * The dropdown menu includes a button for toggling the menu, a list of available templates, and options for creating and editing templates.
 *
 * @return {JSX.Element} The rendered ClassicThemeControl component.
 */
/* harmony default export */ const classic_theme = (ClassicThemeControl);

;// CONCATENATED MODULE: external ["wp","warning"]
const external_wp_warning_namespaceObject = window["wp"]["warning"];
var external_wp_warning_default = /*#__PURE__*/__webpack_require__.n(external_wp_warning_namespaceObject);
;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/preferences-modal/enable-panel.js
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


const {
  PreferenceBaseOption
} = unlock(external_wp_preferences_namespaceObject.privateApis);
/* harmony default export */ const enable_panel = ((0,external_wp_compose_namespaceObject.compose)((0,external_wp_data_namespaceObject.withSelect)((select, {
  panelName
}) => {
  const {
    isEditorPanelEnabled,
    isEditorPanelRemoved
  } = select(store_store);
  return {
    isRemoved: isEditorPanelRemoved(panelName),
    isChecked: isEditorPanelEnabled(panelName)
  };
}), (0,external_wp_compose_namespaceObject.ifCondition)(({
  isRemoved
}) => !isRemoved), (0,external_wp_data_namespaceObject.withDispatch)((dispatch, {
  panelName
}) => ({
  onChange: () => dispatch(store_store).toggleEditorPanelEnabled(panelName)
})))(PreferenceBaseOption));

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/preferences-modal/enable-plugin-document-setting-panel.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


const {
  Fill,
  Slot
} = (0,external_wp_components_namespaceObject.createSlotFill)('EnablePluginDocumentSettingPanelOption');
const EnablePluginDocumentSettingPanelOption = ({
  label,
  panelName
}) => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(Fill, {
  children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(enable_panel, {
    label: label,
    panelName: panelName
  })
});
EnablePluginDocumentSettingPanelOption.Slot = Slot;
/* harmony default export */ const enable_plugin_document_setting_panel = (EnablePluginDocumentSettingPanelOption);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/plugin-document-setting-panel/index.js
/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */





const {
  Fill: plugin_document_setting_panel_Fill,
  Slot: plugin_document_setting_panel_Slot
} = (0,external_wp_components_namespaceObject.createSlotFill)('PluginDocumentSettingPanel');

/**
 * Renders items below the Status & Availability panel in the Document Sidebar.
 *
 * @param {Object}                props                                 Component properties.
 * @param {string}                props.name                            Required. A machine-friendly name for the panel.
 * @param {string}                [props.className]                     An optional class name added to the row.
 * @param {string}                [props.title]                         The title of the panel
 * @param {WPBlockTypeIconRender} [props.icon=inherits from the plugin] The [Dashicon](https://developer.wordpress.org/resource/dashicons/) icon slug string, or an SVG WP element, to be rendered when the sidebar is pinned to toolbar.
 * @param {Element}               props.children                        Children to be rendered
 *
 * @example
 * ```js
 * // Using ES5 syntax
 * var el = React.createElement;
 * var __ = wp.i18n.__;
 * var registerPlugin = wp.plugins.registerPlugin;
 * var PluginDocumentSettingPanel = wp.editor.PluginDocumentSettingPanel;
 *
 * function MyDocumentSettingPlugin() {
 * 	return el(
 * 		PluginDocumentSettingPanel,
 * 		{
 * 			className: 'my-document-setting-plugin',
 * 			title: 'My Panel',
 * 			name: 'my-panel',
 * 		},
 * 		__( 'My Document Setting Panel' )
 * 	);
 * }
 *
 * registerPlugin( 'my-document-setting-plugin', {
 * 		render: MyDocumentSettingPlugin
 * } );
 * ```
 *
 * @example
 * ```jsx
 * // Using ESNext syntax
 * import { registerPlugin } from '@wordpress/plugins';
 * import { PluginDocumentSettingPanel } from '@wordpress/editor';
 *
 * const MyDocumentSettingTest = () => (
 * 		<PluginDocumentSettingPanel className="my-document-setting-plugin" title="My Panel" name="my-panel">
 *			<p>My Document Setting Panel</p>
 *		</PluginDocumentSettingPanel>
 *	);
 *
 *  registerPlugin( 'document-setting-test', { render: MyDocumentSettingTest } );
 * ```
 *
 * @return {Component} The component to be rendered.
 */
const PluginDocumentSettingPanel = ({
  name,
  className,
  title,
  icon,
  children
}) => {
  const {
    name: pluginName
  } = (0,external_wp_plugins_namespaceObject.usePluginContext)();
  const panelName = `${pluginName}/${name}`;
  const {
    opened,
    isEnabled
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      isEditorPanelOpened,
      isEditorPanelEnabled
    } = select(store_store);
    return {
      opened: isEditorPanelOpened(panelName),
      isEnabled: isEditorPanelEnabled(panelName)
    };
  }, [panelName]);
  const {
    toggleEditorPanelOpened
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  if (undefined === name) {
     true ? external_wp_warning_default()('PluginDocumentSettingPanel requires a name property.') : 0;
  }
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
    children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(enable_plugin_document_setting_panel, {
      label: title,
      panelName: panelName
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(plugin_document_setting_panel_Fill, {
      children: isEnabled && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.PanelBody, {
        className: className,
        title: title,
        icon: icon,
        opened: opened,
        onToggle: () => toggleEditorPanelOpened(panelName),
        children: children
      })
    })]
  });
};
PluginDocumentSettingPanel.Slot = plugin_document_setting_panel_Slot;
/* harmony default export */ const plugin_document_setting_panel = (PluginDocumentSettingPanel);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/block-settings-menu/plugin-block-settings-menu-item.js
/**
 * WordPress dependencies
 */




const isEverySelectedBlockAllowed = (selected, allowed) => selected.filter(id => !allowed.includes(id)).length === 0;

/**
 * Plugins may want to add an item to the menu either for every block
 * or only for the specific ones provided in the `allowedBlocks` component property.
 *
 * If there are multiple blocks selected the item will be rendered if every block
 * is of one allowed type (not necessarily the same).
 *
 * @param {string[]} selectedBlocks Array containing the names of the blocks selected
 * @param {string[]} allowedBlocks  Array containing the names of the blocks allowed
 * @return {boolean} Whether the item will be rendered or not.
 */
const shouldRenderItem = (selectedBlocks, allowedBlocks) => !Array.isArray(allowedBlocks) || isEverySelectedBlockAllowed(selectedBlocks, allowedBlocks);

/**
 * Renders a new item in the block settings menu.
 *
 * @param {Object}                props                 Component props.
 * @param {Array}                 [props.allowedBlocks] An array containing a list of block names for which the item should be shown. If not present, it'll be rendered for any block. If multiple blocks are selected, it'll be shown if and only if all of them are in the allowed list.
 * @param {WPBlockTypeIconRender} [props.icon]          The [Dashicon](https://developer.wordpress.org/resource/dashicons/) icon slug string, or an SVG WP element.
 * @param {string}                props.label           The menu item text.
 * @param {Function}              props.onClick         Callback function to be executed when the user click the menu item.
 * @param {boolean}               [props.small]         Whether to render the label or not.
 * @param {string}                [props.role]          The ARIA role for the menu item.
 *
 * @example
 * ```js
 * // Using ES5 syntax
 * var __ = wp.i18n.__;
 * var PluginBlockSettingsMenuItem = wp.editor.PluginBlockSettingsMenuItem;
 *
 * function doOnClick(){
 * 	// To be called when the user clicks the menu item.
 * }
 *
 * function MyPluginBlockSettingsMenuItem() {
 * 	return React.createElement(
 * 		PluginBlockSettingsMenuItem,
 * 		{
 * 			allowedBlocks: [ 'core/paragraph' ],
 * 			icon: 'dashicon-name',
 * 			label: __( 'Menu item text' ),
 * 			onClick: doOnClick,
 * 		}
 * 	);
 * }
 * ```
 *
 * @example
 * ```jsx
 * // Using ESNext syntax
 * import { __ } from '@wordpress/i18n';
 * import { PluginBlockSettingsMenuItem } from '@wordpress/editor';
 *
 * const doOnClick = ( ) => {
 *     // To be called when the user clicks the menu item.
 * };
 *
 * const MyPluginBlockSettingsMenuItem = () => (
 *     <PluginBlockSettingsMenuItem
 * 		allowedBlocks={ [ 'core/paragraph' ] }
 * 		icon='dashicon-name'
 * 		label={ __( 'Menu item text' ) }
 * 		onClick={ doOnClick } />
 * );
 * ```
 *
 * @return {Component} The component to be rendered.
 */
const PluginBlockSettingsMenuItem = ({
  allowedBlocks,
  icon,
  label,
  onClick,
  small,
  role
}) => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_blockEditor_namespaceObject.BlockSettingsMenuControls, {
  children: ({
    selectedBlocks,
    onClose
  }) => {
    if (!shouldRenderItem(selectedBlocks, allowedBlocks)) {
      return null;
    }
    return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.MenuItem, {
      onClick: (0,external_wp_compose_namespaceObject.compose)(onClick, onClose),
      icon: icon,
      label: small ? label : undefined,
      role: role,
      children: !small && label
    });
  }
});
/* harmony default export */ const plugin_block_settings_menu_item = (PluginBlockSettingsMenuItem);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/plugin-more-menu-item/index.js
/**
 * WordPress dependencies
 */





/**
 * Renders a menu item in `Plugins` group in `More Menu` drop down, and can be used to as a button or link depending on the props provided.
 * The text within the component appears as the menu item label.
 *
 * @param {Object}                props                                 Component properties.
 * @param {string}                [props.href]                          When `href` is provided then the menu item is represented as an anchor rather than button. It corresponds to the `href` attribute of the anchor.
 * @param {WPBlockTypeIconRender} [props.icon=inherits from the plugin] The [Dashicon](https://developer.wordpress.org/resource/dashicons/) icon slug string, or an SVG WP element, to be rendered to the left of the menu item label.
 * @param {Function}              [props.onClick=noop]                  The callback function to be executed when the user clicks the menu item.
 * @param {...*}                  [props.other]                         Any additional props are passed through to the underlying [Button](/packages/components/src/button/README.md) component.
 *
 * @example
 * ```js
 * // Using ES5 syntax
 * var __ = wp.i18n.__;
 * var PluginMoreMenuItem = wp.editor.PluginMoreMenuItem;
 * var moreIcon = wp.element.createElement( 'svg' ); //... svg element.
 *
 * function onButtonClick() {
 * 	alert( 'Button clicked.' );
 * }
 *
 * function MyButtonMoreMenuItem() {
 * 	return wp.element.createElement(
 * 		PluginMoreMenuItem,
 * 		{
 * 			icon: moreIcon,
 * 			onClick: onButtonClick,
 * 		},
 * 		__( 'My button title' )
 * 	);
 * }
 * ```
 *
 * @example
 * ```jsx
 * // Using ESNext syntax
 * import { __ } from '@wordpress/i18n';
 * import { PluginMoreMenuItem } from '@wordpress/editor';
 * import { more } from '@wordpress/icons';
 *
 * function onButtonClick() {
 * 	alert( 'Button clicked.' );
 * }
 *
 * const MyButtonMoreMenuItem = () => (
 * 	<PluginMoreMenuItem
 * 		icon={ more }
 * 		onClick={ onButtonClick }
 * 	>
 * 		{ __( 'My button title' ) }
 * 	</PluginMoreMenuItem>
 * );
 * ```
 *
 * @return {Component} The component to be rendered.
 */
/* harmony default export */ const plugin_more_menu_item = ((0,external_wp_compose_namespaceObject.compose)((0,external_wp_plugins_namespaceObject.withPluginContext)((context, ownProps) => {
  var _ownProps$as;
  return {
    as: (_ownProps$as = ownProps.as) !== null && _ownProps$as !== void 0 ? _ownProps$as : external_wp_components_namespaceObject.MenuItem,
    icon: ownProps.icon || context.icon,
    name: 'core/plugin-more-menu'
  };
}))(action_item));

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/plugin-post-publish-panel/index.js
/**
 * WordPress dependencies
 */



const {
  Fill: plugin_post_publish_panel_Fill,
  Slot: plugin_post_publish_panel_Slot
} = (0,external_wp_components_namespaceObject.createSlotFill)('PluginPostPublishPanel');

/**
 * Renders provided content to the post-publish panel in the publish flow
 * (side panel that opens after a user publishes the post).
 *
 * @param {Object}                props                                 Component properties.
 * @param {string}                [props.className]                     An optional class name added to the panel.
 * @param {string}                [props.title]                         Title displayed at the top of the panel.
 * @param {boolean}               [props.initialOpen=false]             Whether to have the panel initially opened. When no title is provided it is always opened.
 * @param {WPBlockTypeIconRender} [props.icon=inherits from the plugin] The [Dashicon](https://developer.wordpress.org/resource/dashicons/) icon slug string, or an SVG WP element, to be rendered when the sidebar is pinned to toolbar.
 * @param {Element}               props.children                        Children to be rendered
 *
 * @example
 * ```jsx
 * // Using ESNext syntax
 * import { __ } from '@wordpress/i18n';
 * import { PluginPostPublishPanel } from '@wordpress/editor';
 *
 * const MyPluginPostPublishPanel = () => (
 * 	<PluginPostPublishPanel
 * 		className="my-plugin-post-publish-panel"
 * 		title={ __( 'My panel title' ) }
 * 		initialOpen={ true }
 * 	>
 *         { __( 'My panel content' ) }
 * 	</PluginPostPublishPanel>
 * );
 * ```
 *
 * @return {Component} The component to be rendered.
 */
const PluginPostPublishPanel = ({
  children,
  className,
  title,
  initialOpen = false,
  icon
}) => {
  const {
    icon: pluginIcon
  } = (0,external_wp_plugins_namespaceObject.usePluginContext)();
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(plugin_post_publish_panel_Fill, {
    children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.PanelBody, {
      className: className,
      initialOpen: initialOpen || !title,
      title: title,
      icon: icon !== null && icon !== void 0 ? icon : pluginIcon,
      children: children
    })
  });
};
PluginPostPublishPanel.Slot = plugin_post_publish_panel_Slot;
/* harmony default export */ const plugin_post_publish_panel = (PluginPostPublishPanel);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/plugin-post-status-info/index.js
/**
 * Defines as extensibility slot for the Summary panel.
 */

/**
 * WordPress dependencies
 */


const {
  Fill: plugin_post_status_info_Fill,
  Slot: plugin_post_status_info_Slot
} = (0,external_wp_components_namespaceObject.createSlotFill)('PluginPostStatusInfo');

/**
 * Renders a row in the Summary panel of the Document sidebar.
 * It should be noted that this is named and implemented around the function it serves
 * and not its location, which may change in future iterations.
 *
 * @param {Object}  props             Component properties.
 * @param {string}  [props.className] An optional class name added to the row.
 * @param {Element} props.children    Children to be rendered.
 *
 * @example
 * ```js
 * // Using ES5 syntax
 * var __ = wp.i18n.__;
 * var PluginPostStatusInfo = wp.editor.PluginPostStatusInfo;
 *
 * function MyPluginPostStatusInfo() {
 * 	return React.createElement(
 * 		PluginPostStatusInfo,
 * 		{
 * 			className: 'my-plugin-post-status-info',
 * 		},
 * 		__( 'My post status info' )
 * 	)
 * }
 * ```
 *
 * @example
 * ```jsx
 * // Using ESNext syntax
 * import { __ } from '@wordpress/i18n';
 * import { PluginPostStatusInfo } from '@wordpress/editor';
 *
 * const MyPluginPostStatusInfo = () => (
 * 	<PluginPostStatusInfo
 * 		className="my-plugin-post-status-info"
 * 	>
 * 		{ __( 'My post status info' ) }
 * 	</PluginPostStatusInfo>
 * );
 * ```
 *
 * @return {Component} The component to be rendered.
 */
const PluginPostStatusInfo = ({
  children,
  className
}) => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(plugin_post_status_info_Fill, {
  children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.PanelRow, {
    className: className,
    children: children
  })
});
PluginPostStatusInfo.Slot = plugin_post_status_info_Slot;
/* harmony default export */ const plugin_post_status_info = (PluginPostStatusInfo);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/plugin-pre-publish-panel/index.js
/**
 * WordPress dependencies
 */



const {
  Fill: plugin_pre_publish_panel_Fill,
  Slot: plugin_pre_publish_panel_Slot
} = (0,external_wp_components_namespaceObject.createSlotFill)('PluginPrePublishPanel');

/**
 * Renders provided content to the pre-publish side panel in the publish flow
 * (side panel that opens when a user first pushes "Publish" from the main editor).
 *
 * @param {Object}                props                                 Component props.
 * @param {string}                [props.className]                     An optional class name added to the panel.
 * @param {string}                [props.title]                         Title displayed at the top of the panel.
 * @param {boolean}               [props.initialOpen=false]             Whether to have the panel initially opened.
 *                                                                      When no title is provided it is always opened.
 * @param {WPBlockTypeIconRender} [props.icon=inherits from the plugin] The [Dashicon](https://developer.wordpress.org/resource/dashicons/)
 *                                                                      icon slug string, or an SVG WP element, to be rendered when
 *                                                                      the sidebar is pinned to toolbar.
 * @param {Element}               props.children                        Children to be rendered
 *
 * @example
 * ```jsx
 * // Using ESNext syntax
 * import { __ } from '@wordpress/i18n';
 * import { PluginPrePublishPanel } from '@wordpress/editor';
 *
 * const MyPluginPrePublishPanel = () => (
 * 	<PluginPrePublishPanel
 * 		className="my-plugin-pre-publish-panel"
 * 		title={ __( 'My panel title' ) }
 * 		initialOpen={ true }
 * 	>
 * 	    { __( 'My panel content' ) }
 * 	</PluginPrePublishPanel>
 * );
 * ```
 *
 * @return {Component} The component to be rendered.
 */
const PluginPrePublishPanel = ({
  children,
  className,
  title,
  initialOpen = false,
  icon
}) => {
  const {
    icon: pluginIcon
  } = (0,external_wp_plugins_namespaceObject.usePluginContext)();
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(plugin_pre_publish_panel_Fill, {
    children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.PanelBody, {
      className: className,
      initialOpen: initialOpen || !title,
      title: title,
      icon: icon !== null && icon !== void 0 ? icon : pluginIcon,
      children: children
    })
  });
};
PluginPrePublishPanel.Slot = plugin_pre_publish_panel_Slot;
/* harmony default export */ const plugin_pre_publish_panel = (PluginPrePublishPanel);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/plugin-sidebar/index.js
/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


/**
 * Renders a sidebar when activated. The contents within the `PluginSidebar` will appear as content within the sidebar.
 * It also automatically renders a corresponding `PluginSidebarMenuItem` component when `isPinnable` flag is set to `true`.
 * If you wish to display the sidebar, you can with use the `PluginSidebarMoreMenuItem` component or the `wp.data.dispatch` API:
 *
 * ```js
 * wp.data.dispatch( 'core/edit-post' ).openGeneralSidebar( 'plugin-name/sidebar-name' );
 * ```
 *
 * @see PluginSidebarMoreMenuItem
 *
 * @param {Object}                props                                 Element props.
 * @param {string}                props.name                            A string identifying the sidebar. Must be unique for every sidebar registered within the scope of your plugin.
 * @param {string}                [props.className]                     An optional class name added to the sidebar body.
 * @param {string}                props.title                           Title displayed at the top of the sidebar.
 * @param {boolean}               [props.isPinnable=true]               Whether to allow to pin sidebar to the toolbar. When set to `true` it also automatically renders a corresponding menu item.
 * @param {WPBlockTypeIconRender} [props.icon=inherits from the plugin] The [Dashicon](https://developer.wordpress.org/resource/dashicons/) icon slug string, or an SVG WP element, to be rendered when the sidebar is pinned to toolbar.
 *
 * @example
 * ```js
 * // Using ES5 syntax
 * var __ = wp.i18n.__;
 * var el = React.createElement;
 * var PanelBody = wp.components.PanelBody;
 * var PluginSidebar = wp.editor.PluginSidebar;
 * var moreIcon = React.createElement( 'svg' ); //... svg element.
 *
 * function MyPluginSidebar() {
 * 	return el(
 * 			PluginSidebar,
 * 			{
 * 				name: 'my-sidebar',
 * 				title: 'My sidebar title',
 * 				icon: moreIcon,
 * 			},
 * 			el(
 * 				PanelBody,
 * 				{},
 * 				__( 'My sidebar content' )
 * 			)
 * 	);
 * }
 * ```
 *
 * @example
 * ```jsx
 * // Using ESNext syntax
 * import { __ } from '@wordpress/i18n';
 * import { PanelBody } from '@wordpress/components';
 * import { PluginSidebar } from '@wordpress/editor';
 * import { more } from '@wordpress/icons';
 *
 * const MyPluginSidebar = () => (
 * 	<PluginSidebar
 * 		name="my-sidebar"
 * 		title="My sidebar title"
 * 		icon={ more }
 * 	>
 * 		<PanelBody>
 * 			{ __( 'My sidebar content' ) }
 * 		</PanelBody>
 * 	</PluginSidebar>
 * );
 * ```
 */

function PluginSidebar({
  className,
  ...props
}) {
  const {
    postTitle,
    shortcut
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    return {
      postTitle: select(store_store).getEditedPostAttribute('title'),
      shortcut: select(external_wp_keyboardShortcuts_namespaceObject.store).getShortcutRepresentation('core/editor/toggle-sidebar')
    };
  }, []);
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(complementary_area, {
    panelClassName: className,
    className: "editor-sidebar",
    smallScreenTitle: postTitle || (0,external_wp_i18n_namespaceObject.__)('(no title)'),
    scope: "core",
    toggleShortcut: shortcut,
    ...props
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/plugin-sidebar-more-menu-item/index.js
/**
 * WordPress dependencies
 */


/**
 * Renders a menu item in `Plugins` group in `More Menu` drop down,
 * and can be used to activate the corresponding `PluginSidebar` component.
 * The text within the component appears as the menu item label.
 *
 * @param {Object}                props                                 Component props.
 * @param {string}                props.target                          A string identifying the target sidebar you wish to be activated by this menu item. Must be the same as the `name` prop you have given to that sidebar.
 * @param {WPBlockTypeIconRender} [props.icon=inherits from the plugin] The [Dashicon](https://developer.wordpress.org/resource/dashicons/) icon slug string, or an SVG WP element, to be rendered to the left of the menu item label.
 *
 * @example
 * ```js
 * // Using ES5 syntax
 * var __ = wp.i18n.__;
 * var PluginSidebarMoreMenuItem = wp.editor.PluginSidebarMoreMenuItem;
 * var moreIcon = React.createElement( 'svg' ); //... svg element.
 *
 * function MySidebarMoreMenuItem() {
 * 	return React.createElement(
 * 		PluginSidebarMoreMenuItem,
 * 		{
 * 			target: 'my-sidebar',
 * 			icon: moreIcon,
 * 		},
 * 		__( 'My sidebar title' )
 * 	)
 * }
 * ```
 *
 * @example
 * ```jsx
 * // Using ESNext syntax
 * import { __ } from '@wordpress/i18n';
 * import { PluginSidebarMoreMenuItem } from '@wordpress/editor';
 * import { more } from '@wordpress/icons';
 *
 * const MySidebarMoreMenuItem = () => (
 * 	<PluginSidebarMoreMenuItem
 * 		target="my-sidebar"
 * 		icon={ more }
 * 	>
 * 		{ __( 'My sidebar title' ) }
 * 	</PluginSidebarMoreMenuItem>
 * );
 * ```
 *
 * @return {Component} The component to be rendered.
 */

function PluginSidebarMoreMenuItem(props) {
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(ComplementaryAreaMoreMenuItem
  // Menu item is marked with unstable prop for backward compatibility.
  // @see https://github.com/WordPress/gutenberg/issues/14457
  , {
    __unstableExplicitMenuItem: true,
    scope: "core",
    ...props
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-template/swap-template-button.js
/**
 * WordPress dependencies
 */










/**
 * Internal dependencies
 */




function SwapTemplateButton({
  onClick
}) {
  const [showModal, setShowModal] = (0,external_wp_element_namespaceObject.useState)(false);
  const {
    postType,
    postId
  } = useEditedPostContext();
  const availableTemplates = useAvailableTemplates(postType);
  const {
    editEntityRecord
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_coreData_namespaceObject.store);
  if (!availableTemplates?.length) {
    return null;
  }
  const onTemplateSelect = async template => {
    editEntityRecord('postType', postType, postId, {
      template: template.name
    }, {
      undoIgnore: true
    });
    setShowModal(false); // Close the template suggestions modal first.
    onClick();
  };
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
    children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.MenuItem, {
      onClick: () => setShowModal(true),
      children: (0,external_wp_i18n_namespaceObject.__)('Swap template')
    }), showModal && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Modal, {
      title: (0,external_wp_i18n_namespaceObject.__)('Choose a template'),
      onRequestClose: () => setShowModal(false),
      overlayClassName: "editor-post-template__swap-template-modal",
      isFullScreen: true,
      children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
        className: "editor-post-template__swap-template-modal-content",
        children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(TemplatesList, {
          postType: postType,
          onSelect: onTemplateSelect
        })
      })
    })]
  });
}
function TemplatesList({
  postType,
  onSelect
}) {
  const availableTemplates = useAvailableTemplates(postType);
  const templatesAsPatterns = (0,external_wp_element_namespaceObject.useMemo)(() => availableTemplates.map(template => ({
    name: template.slug,
    blocks: (0,external_wp_blocks_namespaceObject.parse)(template.content.raw),
    title: (0,external_wp_htmlEntities_namespaceObject.decodeEntities)(template.title.rendered),
    id: template.id
  })), [availableTemplates]);
  const shownTemplates = (0,external_wp_compose_namespaceObject.useAsyncList)(templatesAsPatterns);
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_blockEditor_namespaceObject.__experimentalBlockPatternsList, {
    label: (0,external_wp_i18n_namespaceObject.__)('Templates'),
    blockPatterns: templatesAsPatterns,
    shownPatterns: shownTemplates,
    onClickPattern: onSelect
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-template/reset-default-template.js
/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


function ResetDefaultTemplate({
  onClick
}) {
  const currentTemplateSlug = useCurrentTemplateSlug();
  const allowSwitchingTemplate = useAllowSwitchingTemplates();
  const {
    postType,
    postId
  } = useEditedPostContext();
  const {
    editEntityRecord
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_coreData_namespaceObject.store);
  // The default template in a post is indicated by an empty string.
  if (!currentTemplateSlug || !allowSwitchingTemplate) {
    return null;
  }
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.MenuItem, {
    onClick: () => {
      editEntityRecord('postType', postType, postId, {
        template: ''
      }, {
        undoIgnore: true
      });
      onClick();
    },
    children: (0,external_wp_i18n_namespaceObject.__)('Use default template')
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-template/create-new-template.js
/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */





function CreateNewTemplate({
  onClick
}) {
  const {
    canCreateTemplates
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      canUser
    } = select(external_wp_coreData_namespaceObject.store);
    return {
      canCreateTemplates: canUser('create', 'templates')
    };
  }, []);
  const [isCreateModalOpen, setIsCreateModalOpen] = (0,external_wp_element_namespaceObject.useState)(false);
  const allowSwitchingTemplate = useAllowSwitchingTemplates();

  // The default template in a post is indicated by an empty string.
  if (!canCreateTemplates || !allowSwitchingTemplate) {
    return null;
  }
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
    children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.MenuItem, {
      onClick: () => {
        setIsCreateModalOpen(true);
      },
      children: (0,external_wp_i18n_namespaceObject.__)('Create new template')
    }), isCreateModalOpen && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(CreateNewTemplateModal, {
      onClose: () => {
        setIsCreateModalOpen(false);
        onClick();
      }
    })]
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-template/block-theme.js
/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */








const block_theme_POPOVER_PROPS = {
  className: 'editor-post-template__dropdown',
  placement: 'bottom-start'
};
function BlockThemeControl({
  id
}) {
  const {
    isTemplateHidden,
    onNavigateToEntityRecord,
    getEditorSettings,
    hasGoBack
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getRenderingMode,
      getEditorSettings: _getEditorSettings
    } = unlock(select(store_store));
    const editorSettings = _getEditorSettings();
    return {
      isTemplateHidden: getRenderingMode() === 'post-only',
      onNavigateToEntityRecord: editorSettings.onNavigateToEntityRecord,
      getEditorSettings: _getEditorSettings,
      hasGoBack: editorSettings.hasOwnProperty('onNavigateToPreviousEntityRecord')
    };
  }, []);
  const {
    editedRecord: template,
    hasResolved
  } = (0,external_wp_coreData_namespaceObject.useEntityRecord)('postType', 'wp_template', id);
  const {
    createSuccessNotice
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_notices_namespaceObject.store);
  const {
    setRenderingMode
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  const canCreateTemplate = (0,external_wp_data_namespaceObject.useSelect)(select => {
    var _select$canUser;
    return (_select$canUser = select(external_wp_coreData_namespaceObject.store).canUser('create', 'templates')) !== null && _select$canUser !== void 0 ? _select$canUser : false;
  });
  if (!hasResolved) {
    return null;
  }

  // The site editor does not have a `onNavigateToPreviousEntityRecord` setting as it uses its own routing
  // and assigns its own backlink to focusMode pages.
  const notificationAction = hasGoBack ? [{
    label: (0,external_wp_i18n_namespaceObject.__)('Go back'),
    onClick: () => getEditorSettings().onNavigateToPreviousEntityRecord()
  }] : undefined;
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.DropdownMenu, {
    popoverProps: block_theme_POPOVER_PROPS,
    focusOnMount: true,
    toggleProps: {
      size: 'compact',
      variant: 'tertiary',
      tooltipPosition: 'middle left'
    },
    label: (0,external_wp_i18n_namespaceObject.__)('Template options'),
    text: (0,external_wp_htmlEntities_namespaceObject.decodeEntities)(template.title),
    icon: null,
    children: ({
      onClose
    }) => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
      children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.MenuGroup, {
        children: [canCreateTemplate && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.MenuItem, {
          onClick: () => {
            onNavigateToEntityRecord({
              postId: template.id,
              postType: 'wp_template'
            });
            onClose();
            createSuccessNotice((0,external_wp_i18n_namespaceObject.__)('Editing template. Changes made here affect all posts and pages that use the template.'), {
              type: 'snackbar',
              actions: notificationAction
            });
          },
          children: (0,external_wp_i18n_namespaceObject.__)('Edit template')
        }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(SwapTemplateButton, {
          onClick: onClose
        }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(ResetDefaultTemplate, {
          onClick: onClose
        }), canCreateTemplate && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(CreateNewTemplate, {
          onClick: onClose
        })]
      }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.MenuGroup, {
        children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.MenuItem, {
          icon: !isTemplateHidden ? library_check : undefined,
          isSelected: !isTemplateHidden,
          role: "menuitemcheckbox",
          onClick: () => {
            setRenderingMode(isTemplateHidden ? 'template-locked' : 'post-only');
          },
          children: (0,external_wp_i18n_namespaceObject.__)('Show template')
        })
      })]
    })
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-template/panel.js
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */





/**
 * Displays the template controls based on the current editor settings and user permissions.
 *
 * @return {JSX.Element|null} The rendered PostTemplatePanel component.
 */

function PostTemplatePanel() {
  const {
    templateId,
    isBlockTheme
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getCurrentTemplateId,
      getEditorSettings
    } = select(store_store);
    return {
      templateId: getCurrentTemplateId(),
      isBlockTheme: getEditorSettings().__unstableIsBlockBasedTheme
    };
  }, []);
  const isVisible = (0,external_wp_data_namespaceObject.useSelect)(select => {
    var _select$canUser;
    const postTypeSlug = select(store_store).getCurrentPostType();
    const postType = select(external_wp_coreData_namespaceObject.store).getPostType(postTypeSlug);
    if (!postType?.viewable) {
      return false;
    }
    const settings = select(store_store).getEditorSettings();
    const hasTemplates = !!settings.availableTemplates && Object.keys(settings.availableTemplates).length > 0;
    if (hasTemplates) {
      return true;
    }
    if (!settings.supportsTemplateMode) {
      return false;
    }
    const canCreateTemplates = (_select$canUser = select(external_wp_coreData_namespaceObject.store).canUser('create', 'templates')) !== null && _select$canUser !== void 0 ? _select$canUser : false;
    return canCreateTemplates;
  }, []);
  const canViewTemplates = (0,external_wp_data_namespaceObject.useSelect)(select => {
    var _select$canUser2;
    return (_select$canUser2 = select(external_wp_coreData_namespaceObject.store).canUser('read', 'templates')) !== null && _select$canUser2 !== void 0 ? _select$canUser2 : false;
  }, []);
  if ((!isBlockTheme || !canViewTemplates) && isVisible) {
    return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(post_panel_row, {
      label: (0,external_wp_i18n_namespaceObject.__)('Template'),
      children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(classic_theme, {})
    });
  }
  if (isBlockTheme && !!templateId) {
    return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(post_panel_row, {
      label: (0,external_wp_i18n_namespaceObject.__)('Template'),
      children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(BlockThemeControl, {
        id: templateId
      })
    });
  }
  return null;
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-author/constants.js
const BASE_QUERY = {
  _fields: 'id,name',
  context: 'view' // Allows non-admins to perform requests.
};
const AUTHORS_QUERY = {
  who: 'authors',
  per_page: 50,
  ...BASE_QUERY
};

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-author/hook.js
/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


function useAuthorsQuery(search) {
  const {
    authorId,
    authors,
    postAuthor
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getUser,
      getUsers
    } = select(external_wp_coreData_namespaceObject.store);
    const {
      getEditedPostAttribute
    } = select(store_store);
    const _authorId = getEditedPostAttribute('author');
    const query = {
      ...AUTHORS_QUERY
    };
    if (search) {
      query.search = search;
    }
    return {
      authorId: _authorId,
      authors: getUsers(query),
      postAuthor: getUser(_authorId, BASE_QUERY)
    };
  }, [search]);
  const authorOptions = (0,external_wp_element_namespaceObject.useMemo)(() => {
    const fetchedAuthors = (authors !== null && authors !== void 0 ? authors : []).map(author => {
      return {
        value: author.id,
        label: (0,external_wp_htmlEntities_namespaceObject.decodeEntities)(author.name)
      };
    });

    // Ensure the current author is included in the dropdown list.
    const foundAuthor = fetchedAuthors.findIndex(({
      value
    }) => postAuthor?.id === value);
    if (foundAuthor < 0 && postAuthor) {
      return [{
        value: postAuthor.id,
        label: (0,external_wp_htmlEntities_namespaceObject.decodeEntities)(postAuthor.name)
      }, ...fetchedAuthors];
    }
    return fetchedAuthors;
  }, [authors, postAuthor]);
  return {
    authorId,
    authorOptions,
    postAuthor
  };
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-author/combobox.js
/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



function PostAuthorCombobox() {
  const [fieldValue, setFieldValue] = (0,external_wp_element_namespaceObject.useState)();
  const {
    editPost
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  const {
    authorId,
    authorOptions
  } = useAuthorsQuery(fieldValue);

  /**
   * Handle author selection.
   *
   * @param {number} postAuthorId The selected Author.
   */
  const handleSelect = postAuthorId => {
    if (!postAuthorId) {
      return;
    }
    editPost({
      author: postAuthorId
    });
  };

  /**
   * Handle user input.
   *
   * @param {string} inputValue The current value of the input field.
   */
  const handleKeydown = inputValue => {
    setFieldValue(inputValue);
  };
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.ComboboxControl, {
    __nextHasNoMarginBottom: true,
    __next40pxDefaultSize: true,
    label: (0,external_wp_i18n_namespaceObject.__)('Author'),
    options: authorOptions,
    value: authorId,
    onFilterValueChange: (0,external_wp_compose_namespaceObject.debounce)(handleKeydown, 300),
    onChange: handleSelect,
    allowReset: false,
    hideLabelFromVision: true
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-author/select.js
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



function PostAuthorSelect() {
  const {
    editPost
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  const {
    authorId,
    authorOptions
  } = useAuthorsQuery();
  const setAuthorId = value => {
    const author = Number(value);
    editPost({
      author
    });
  };
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.SelectControl, {
    __next40pxDefaultSize: true,
    __nextHasNoMarginBottom: true,
    className: "post-author-selector",
    label: (0,external_wp_i18n_namespaceObject.__)('Author'),
    options: authorOptions,
    onChange: setAuthorId,
    value: authorId,
    hideLabelFromVision: true
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-author/index.js
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */




const minimumUsersForCombobox = 25;

/**
 * Renders the component for selecting the post author.
 *
 * @return {Component} The component to be rendered.
 */
function PostAuthor() {
  const showCombobox = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const authors = select(external_wp_coreData_namespaceObject.store).getUsers(AUTHORS_QUERY);
    return authors?.length >= minimumUsersForCombobox;
  }, []);
  if (showCombobox) {
    return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PostAuthorCombobox, {});
  }
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PostAuthorSelect, {});
}
/* harmony default export */ const post_author = (PostAuthor);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-author/check.js
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */




/**
 * Wrapper component that renders its children only if the post type supports the author.
 *
 * @param {Object}  props          The component props.
 * @param {Element} props.children Children to be rendered.
 *
 * @return {Component|null} The component to be rendered. Return `null` if the post type doesn't
 * supports the author or if there are no authors available.
 */

function PostAuthorCheck({
  children
}) {
  const {
    hasAssignAuthorAction,
    hasAuthors
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    var _post$_links$wpActio;
    const post = select(store_store).getCurrentPost();
    const authors = select(external_wp_coreData_namespaceObject.store).getUsers(AUTHORS_QUERY);
    return {
      hasAssignAuthorAction: (_post$_links$wpActio = post._links?.['wp:action-assign-author']) !== null && _post$_links$wpActio !== void 0 ? _post$_links$wpActio : false,
      hasAuthors: authors?.length >= 1
    };
  }, []);
  if (!hasAssignAuthorAction || !hasAuthors) {
    return null;
  }
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(post_type_support_check, {
    supportKeys: "author",
    children: children
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-author/panel.js
/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */






function PostAuthorToggle({
  isOpen,
  onClick
}) {
  const {
    postAuthor
  } = useAuthorsQuery();
  const authorName = postAuthor?.name || '';
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
    size: "compact",
    className: "editor-post-author__panel-toggle",
    variant: "tertiary",
    "aria-expanded": isOpen
    // translators: %s: Current post link.
    ,
    "aria-label": (0,external_wp_i18n_namespaceObject.sprintf)((0,external_wp_i18n_namespaceObject.__)('Change author: %s'), authorName),
    onClick: onClick,
    children: authorName
  });
}

/**
 * Renders the Post Author Panel component.
 *
 * @return {Component} The component to be rendered.
 */
function panel_PostAuthor() {
  // Use internal state instead of a ref to make sure that the component
  // re-renders when the popover's anchor updates.
  const [popoverAnchor, setPopoverAnchor] = (0,external_wp_element_namespaceObject.useState)(null);
  // Memoize popoverProps to avoid returning a new object every time.
  const popoverProps = (0,external_wp_element_namespaceObject.useMemo)(() => ({
    // Anchor the popover to the middle of the entire row so that it doesn't
    // move around when the label changes.
    anchor: popoverAnchor,
    placement: 'left-start',
    offset: 36,
    shift: true
  }), [popoverAnchor]);
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PostAuthorCheck, {
    children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(post_panel_row, {
      label: (0,external_wp_i18n_namespaceObject.__)('Author'),
      ref: setPopoverAnchor,
      children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Dropdown, {
        popoverProps: popoverProps,
        contentClassName: "editor-post-author__panel-dialog",
        focusOnMount: true,
        renderToggle: ({
          isOpen,
          onToggle
        }) => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PostAuthorToggle, {
          isOpen: isOpen,
          onClick: onToggle
        }),
        renderContent: ({
          onClose
        }) => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
          className: "editor-post-author",
          children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_blockEditor_namespaceObject.__experimentalInspectorPopoverHeader, {
            title: (0,external_wp_i18n_namespaceObject.__)('Author'),
            onClose: onClose
          }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(post_author, {
            onClose: onClose
          })]
        })
      })
    })
  });
}
/* harmony default export */ const panel = (panel_PostAuthor);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-comments/index.js
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */




const COMMENT_OPTIONS = [{
  label: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
    children: [(0,external_wp_i18n_namespaceObject.__)('Open'), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.__experimentalText, {
      variant: "muted",
      size: 12,
      children: (0,external_wp_i18n_namespaceObject.__)('Visitors can add new comments and replies.')
    })]
  }),
  value: 'open'
}, {
  label: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
    children: [(0,external_wp_i18n_namespaceObject.__)('Closed'), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.__experimentalText, {
      variant: "muted",
      size: 12,
      children: (0,external_wp_i18n_namespaceObject.__)('Visitors cannot add new comments or replies.')
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.__experimentalText, {
      variant: "muted",
      size: 12,
      children: (0,external_wp_i18n_namespaceObject.__)('Existing comments remain visible.')
    })]
  }),
  value: 'closed'
}];
function PostComments() {
  const commentStatus = (0,external_wp_data_namespaceObject.useSelect)(select => {
    var _select$getEditedPost;
    return (_select$getEditedPost = select(store_store).getEditedPostAttribute('comment_status')) !== null && _select$getEditedPost !== void 0 ? _select$getEditedPost : 'open';
  }, []);
  const {
    editPost
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  const handleStatus = newCommentStatus => editPost({
    comment_status: newCommentStatus
  });
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("form", {
    children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.__experimentalVStack, {
      spacing: 4,
      children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.RadioControl, {
        className: "editor-change-status__options",
        hideLabelFromVision: true,
        label: (0,external_wp_i18n_namespaceObject.__)('Comment status'),
        options: COMMENT_OPTIONS,
        onChange: handleStatus,
        selected: commentStatus
      })
    })
  });
}

/**
 * A form for managing comment status.
 *
 * @return {JSX.Element} The rendered PostComments component.
 */
/* harmony default export */ const post_comments = (PostComments);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-pingbacks/index.js
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


function PostPingbacks() {
  const pingStatus = (0,external_wp_data_namespaceObject.useSelect)(select => {
    var _select$getEditedPost;
    return (_select$getEditedPost = select(store_store).getEditedPostAttribute('ping_status')) !== null && _select$getEditedPost !== void 0 ? _select$getEditedPost : 'open';
  }, []);
  const {
    editPost
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  const onTogglePingback = () => editPost({
    ping_status: pingStatus === 'open' ? 'closed' : 'open'
  });
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.CheckboxControl, {
    __nextHasNoMarginBottom: true,
    label: (0,external_wp_i18n_namespaceObject.__)('Enable pingbacks & trackbacks'),
    checked: pingStatus === 'open',
    onChange: onTogglePingback,
    help: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.ExternalLink, {
      href: (0,external_wp_i18n_namespaceObject.__)('https://wordpress.org/documentation/article/trackbacks-and-pingbacks/'),
      children: (0,external_wp_i18n_namespaceObject.__)('Learn more about pingbacks & trackbacks')
    })
  });
}

/**
 * Renders a control for enabling or disabling pingbacks and trackbacks
 * in a WordPress post.
 *
 * @module PostPingbacks
 */
/* harmony default export */ const post_pingbacks = (PostPingbacks);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-discussion/panel.js
/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */







const panel_PANEL_NAME = 'discussion-panel';
function ModalContents({
  onClose
}) {
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
    className: "editor-post-discussion",
    children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_blockEditor_namespaceObject.__experimentalInspectorPopoverHeader, {
      title: (0,external_wp_i18n_namespaceObject.__)('Discussion'),
      onClose: onClose
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.__experimentalVStack, {
      spacing: 4,
      children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(post_type_support_check, {
        supportKeys: "comments",
        children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(post_comments, {})
      }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(post_type_support_check, {
        supportKeys: "trackbacks",
        children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(post_pingbacks, {})
      })]
    })]
  });
}
function PostDiscussionToggle({
  isOpen,
  onClick
}) {
  const {
    commentStatus,
    pingStatus,
    commentsSupported,
    trackbacksSupported
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    var _getEditedPostAttribu, _getEditedPostAttribu2;
    const {
      getEditedPostAttribute
    } = select(store_store);
    const {
      getPostType
    } = select(external_wp_coreData_namespaceObject.store);
    const postType = getPostType(getEditedPostAttribute('type'));
    return {
      commentStatus: (_getEditedPostAttribu = getEditedPostAttribute('comment_status')) !== null && _getEditedPostAttribu !== void 0 ? _getEditedPostAttribu : 'open',
      pingStatus: (_getEditedPostAttribu2 = getEditedPostAttribute('ping_status')) !== null && _getEditedPostAttribu2 !== void 0 ? _getEditedPostAttribu2 : 'open',
      commentsSupported: !!postType.supports.comments,
      trackbacksSupported: !!postType.supports.trackbacks
    };
  }, []);
  let label;
  if (commentStatus === 'open') {
    if (pingStatus === 'open') {
      label = (0,external_wp_i18n_namespaceObject.__)('Open');
    } else {
      label = trackbacksSupported ? (0,external_wp_i18n_namespaceObject.__)('Comments only') : (0,external_wp_i18n_namespaceObject.__)('Open');
    }
  } else if (pingStatus === 'open') {
    label = commentsSupported ? (0,external_wp_i18n_namespaceObject.__)('Pings only') : (0,external_wp_i18n_namespaceObject.__)('Pings enabled');
  } else {
    label = (0,external_wp_i18n_namespaceObject.__)('Closed');
  }
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
    size: "compact",
    className: "editor-post-discussion__panel-toggle",
    variant: "tertiary",
    "aria-label": (0,external_wp_i18n_namespaceObject.__)('Change discussion options'),
    "aria-expanded": isOpen,
    onClick: onClick,
    children: label
  });
}

/**
 * This component allows to update comment and pingback
 * settings for the current post. Internally there are
 * checks whether the current post has support for the
 * above and if the `discussion-panel` panel is enabled.
 *
 * @return {JSX.Element|null} The rendered PostDiscussionPanel component.
 */
function PostDiscussionPanel() {
  const {
    isEnabled
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      isEditorPanelEnabled
    } = select(store_store);
    return {
      isEnabled: isEditorPanelEnabled(panel_PANEL_NAME)
    };
  }, []);

  // Use internal state instead of a ref to make sure that the component
  // re-renders when the popover's anchor updates.
  const [popoverAnchor, setPopoverAnchor] = (0,external_wp_element_namespaceObject.useState)(null);
  // Memoize popoverProps to avoid returning a new object every time.
  const popoverProps = (0,external_wp_element_namespaceObject.useMemo)(() => ({
    // Anchor the popover to the middle of the entire row so that it doesn't
    // move around when the label changes.
    anchor: popoverAnchor,
    placement: 'left-start',
    offset: 36,
    shift: true
  }), [popoverAnchor]);
  if (!isEnabled) {
    return null;
  }
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(post_type_support_check, {
    supportKeys: ['comments', 'trackbacks'],
    children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(post_panel_row, {
      label: (0,external_wp_i18n_namespaceObject.__)('Discussion'),
      ref: setPopoverAnchor,
      children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Dropdown, {
        popoverProps: popoverProps,
        className: "editor-post-discussion__panel-dropdown",
        contentClassName: "editor-post-discussion__panel-dialog",
        focusOnMount: true,
        renderToggle: ({
          isOpen,
          onToggle
        }) => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PostDiscussionToggle, {
          isOpen: isOpen,
          onClick: onToggle
        }),
        renderContent: ({
          onClose
        }) => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(ModalContents, {
          onClose: onClose
        })
      })
    })
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-excerpt/index.js
/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


/**
 * Renders an editable textarea for the post excerpt.
 * Templates, template parts and patterns use the `excerpt` field as a description semantically.
 * Additionally templates and template parts override the `excerpt` field as `description` in
 * REST API. So this component handles proper labeling and updating the edited entity.
 *
 * @param {Object}  props                             - Component props.
 * @param {boolean} [props.hideLabelFromVision=false] - Whether to visually hide the textarea's label.
 * @param {boolean} [props.updateOnBlur=false]        - Whether to update the post on change or use local state and update on blur.
 */

function PostExcerpt({
  hideLabelFromVision = false,
  updateOnBlur = false
}) {
  const {
    excerpt,
    shouldUseDescriptionLabel,
    usedAttribute
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getCurrentPostType,
      getEditedPostAttribute
    } = select(store_store);
    const postType = getCurrentPostType();
    // This special case is unfortunate, but the REST API of wp_template and wp_template_part
    // support the excerpt field throught the "description" field rather than "excerpt".
    const _usedAttribute = ['wp_template', 'wp_template_part'].includes(postType) ? 'description' : 'excerpt';
    return {
      excerpt: getEditedPostAttribute(_usedAttribute),
      // There are special cases where we want to label the excerpt as a description.
      shouldUseDescriptionLabel: ['wp_template', 'wp_template_part', 'wp_block'].includes(postType),
      usedAttribute: _usedAttribute
    };
  }, []);
  const {
    editPost
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  const [localExcerpt, setLocalExcerpt] = (0,external_wp_element_namespaceObject.useState)(excerpt);
  const updatePost = value => {
    editPost({
      [usedAttribute]: value
    });
  };
  const label = shouldUseDescriptionLabel ? (0,external_wp_i18n_namespaceObject.__)('Write a description (optional)') : (0,external_wp_i18n_namespaceObject.__)('Write an excerpt (optional)');
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
    className: "editor-post-excerpt",
    children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.TextareaControl, {
      __nextHasNoMarginBottom: true,
      label: label,
      hideLabelFromVision: hideLabelFromVision,
      className: "editor-post-excerpt__textarea",
      onChange: updateOnBlur ? setLocalExcerpt : updatePost,
      onBlur: updateOnBlur ? () => updatePost(localExcerpt) : undefined,
      value: updateOnBlur ? localExcerpt : excerpt,
      help: !shouldUseDescriptionLabel ? /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.ExternalLink, {
        href: (0,external_wp_i18n_namespaceObject.__)('https://wordpress.org/documentation/article/page-post-settings-sidebar/#excerpt'),
        children: (0,external_wp_i18n_namespaceObject.__)('Learn more about manual excerpts')
      }) : (0,external_wp_i18n_namespaceObject.__)('Write a description')
    })
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-excerpt/check.js
/**
 * Internal dependencies
 */


/**
 * Component for checking if the post type supports the excerpt field.
 *
 * @param {Object}  props          Props.
 * @param {Element} props.children Children to be rendered.
 *
 * @return {Component} The component to be rendered.
 */

function PostExcerptCheck({
  children
}) {
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(post_type_support_check, {
    supportKeys: "excerpt",
    children: children
  });
}
/* harmony default export */ const post_excerpt_check = (PostExcerptCheck);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-excerpt/plugin.js
/**
 * Defines as extensibility slot for the Excerpt panel.
 */

/**
 * WordPress dependencies
 */


const {
  Fill: plugin_Fill,
  Slot: plugin_Slot
} = (0,external_wp_components_namespaceObject.createSlotFill)('PluginPostExcerpt');

/**
 * Renders a post excerpt panel in the post sidebar.
 *
 * @param {Object}  props             Component properties.
 * @param {string}  [props.className] An optional class name added to the row.
 * @param {Element} props.children    Children to be rendered.
 *
 * @example
 * ```js
 * // Using ES5 syntax
 * var __ = wp.i18n.__;
 * var PluginPostExcerpt = wp.editPost.__experimentalPluginPostExcerpt;
 *
 * function MyPluginPostExcerpt() {
 * 	return React.createElement(
 * 		PluginPostExcerpt,
 * 		{
 * 			className: 'my-plugin-post-excerpt',
 * 		},
 * 		__( 'Post excerpt custom content' )
 * 	)
 * }
 * ```
 *
 * @example
 * ```jsx
 * // Using ESNext syntax
 * import { __ } from '@wordpress/i18n';
 * import { __experimentalPluginPostExcerpt as PluginPostExcerpt } from '@wordpress/edit-post';
 *
 * const MyPluginPostExcerpt = () => (
 * 	<PluginPostExcerpt className="my-plugin-post-excerpt">
 * 		{ __( 'Post excerpt custom content' ) }
 * 	</PluginPostExcerpt>
 * );
 * ```
 *
 * @return {Component} The component to be rendered.
 */
const PluginPostExcerpt = ({
  children,
  className
}) => {
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(plugin_Fill, {
    children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.PanelRow, {
      className: className,
      children: children
    })
  });
};
PluginPostExcerpt.Slot = plugin_Slot;
/* harmony default export */ const post_excerpt_plugin = (PluginPostExcerpt);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-excerpt/panel.js
/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */






/**
 * Module Constants
 */



const post_excerpt_panel_PANEL_NAME = 'post-excerpt';
function ExcerptPanel() {
  const {
    isOpened,
    isEnabled,
    postType
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      isEditorPanelOpened,
      isEditorPanelEnabled,
      getCurrentPostType
    } = select(store_store);
    return {
      isOpened: isEditorPanelOpened(post_excerpt_panel_PANEL_NAME),
      isEnabled: isEditorPanelEnabled(post_excerpt_panel_PANEL_NAME),
      postType: getCurrentPostType()
    };
  }, []);
  const {
    toggleEditorPanelOpened
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  const toggleExcerptPanel = () => toggleEditorPanelOpened(post_excerpt_panel_PANEL_NAME);
  if (!isEnabled) {
    return null;
  }

  // There are special cases where we want to label the excerpt as a description.
  const shouldUseDescriptionLabel = ['wp_template', 'wp_template_part', 'wp_block'].includes(postType);
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.PanelBody, {
    title: shouldUseDescriptionLabel ? (0,external_wp_i18n_namespaceObject.__)('Description') : (0,external_wp_i18n_namespaceObject.__)('Excerpt'),
    opened: isOpened,
    onToggle: toggleExcerptPanel,
    children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(post_excerpt_plugin.Slot, {
      children: fills => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
        children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PostExcerpt, {}), fills]
      })
    })
  });
}

/**
 * Is rendered if the post type supports excerpts and allows editing the excerpt.
 *
 * @return {JSX.Element} The rendered PostExcerptPanel component.
 */
function PostExcerptPanel() {
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(post_excerpt_check, {
    children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(ExcerptPanel, {})
  });
}
function PrivatePostExcerptPanel() {
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(post_excerpt_check, {
    children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PrivateExcerpt, {})
  });
}
function PrivateExcerpt() {
  const {
    shouldRender,
    excerpt,
    shouldBeUsedAsDescription,
    allowEditing
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getCurrentPostType,
      getCurrentPostId,
      getEditedPostAttribute,
      isEditorPanelEnabled
    } = select(store_store);
    const postType = getCurrentPostType();
    const isTemplateOrTemplatePart = ['wp_template', 'wp_template_part'].includes(postType);
    const isPattern = postType === 'wp_block';
    // These post types use the `excerpt` field as a description semantically, so we need to
    // handle proper labeling and some flows where we should always render them as text.
    const _shouldBeUsedAsDescription = isTemplateOrTemplatePart || isPattern;
    const _usedAttribute = isTemplateOrTemplatePart ? 'description' : 'excerpt';
    // We need to fetch the entity in this case to check if we'll allow editing.
    const template = isTemplateOrTemplatePart && select(external_wp_coreData_namespaceObject.store).getEntityRecord('postType', postType, getCurrentPostId());
    // For post types that use excerpt as description, we do not abide
    // by the `isEnabled` panel flag in order to render them as text.
    const _shouldRender = isEditorPanelEnabled(post_excerpt_panel_PANEL_NAME) || _shouldBeUsedAsDescription;
    return {
      excerpt: getEditedPostAttribute(_usedAttribute),
      shouldRender: _shouldRender,
      shouldBeUsedAsDescription: _shouldBeUsedAsDescription,
      // If we should render, allow editing for all post types that are not used as description.
      // For the rest allow editing only for user generated entities.
      allowEditing: _shouldRender && (!_shouldBeUsedAsDescription || isPattern || template && template.source === TEMPLATE_ORIGINS.custom && !template.has_theme_file)
    };
  }, []);
  const [popoverAnchor, setPopoverAnchor] = (0,external_wp_element_namespaceObject.useState)(null);
  const label = shouldBeUsedAsDescription ? (0,external_wp_i18n_namespaceObject.__)('Description') : (0,external_wp_i18n_namespaceObject.__)('Excerpt');
  // Memoize popoverProps to avoid returning a new object every time.
  const popoverProps = (0,external_wp_element_namespaceObject.useMemo)(() => ({
    // Anchor the popover to the middle of the entire row so that it doesn't
    // move around when the label changes.
    anchor: popoverAnchor,
    'aria-label': label,
    headerTitle: label,
    placement: 'left-start',
    offset: 36,
    shift: true
  }), [popoverAnchor, label]);
  if (!shouldRender) {
    return false;
  }
  const excerptText = !!excerpt && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.__experimentalText, {
    align: "left",
    numberOfLines: 4,
    truncate: true,
    children: excerpt
  });
  if (!allowEditing) {
    return excerptText;
  }
  const excerptPlaceholder = shouldBeUsedAsDescription ? (0,external_wp_i18n_namespaceObject.__)('Add a description…') : (0,external_wp_i18n_namespaceObject.__)('Add an excerpt…');
  const triggerEditLabel = shouldBeUsedAsDescription ? (0,external_wp_i18n_namespaceObject.__)('Edit description') : (0,external_wp_i18n_namespaceObject.__)('Edit excerpt');
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.__experimentalVStack, {
    children: [excerptText, /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Dropdown, {
      className: "editor-post-excerpt__dropdown",
      contentClassName: "editor-post-excerpt__dropdown__content",
      popoverProps: popoverProps,
      focusOnMount: true,
      ref: setPopoverAnchor,
      renderToggle: ({
        onToggle
      }) => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
        className: "editor-post-excerpt__dropdown__trigger",
        onClick: onToggle,
        variant: "link",
        children: excerptText ? triggerEditLabel : excerptPlaceholder
      }),
      renderContent: ({
        onClose
      }) => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
        children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_blockEditor_namespaceObject.__experimentalInspectorPopoverHeader, {
          title: label,
          onClose: onClose
        }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.__experimentalVStack, {
          spacing: 4,
          children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(post_excerpt_plugin.Slot, {
            children: fills => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
              children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PostExcerpt, {
                hideLabelFromVision: true,
                updateOnBlur: true
              }), fills]
            })
          })
        })]
      })
    })]
  });
}

;// CONCATENATED MODULE: external ["wp","blob"]
const external_wp_blob_namespaceObject = window["wp"]["blob"];
;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/theme-support-check/index.js
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */

function ThemeSupportCheck({
  children,
  supportKeys
}) {
  const {
    postType,
    themeSupports
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    return {
      postType: select(store_store).getEditedPostAttribute('type'),
      themeSupports: select(external_wp_coreData_namespaceObject.store).getThemeSupports()
    };
  }, []);
  const isSupported = (Array.isArray(supportKeys) ? supportKeys : [supportKeys]).some(key => {
    var _themeSupports$key;
    const supported = (_themeSupports$key = themeSupports?.[key]) !== null && _themeSupports$key !== void 0 ? _themeSupports$key : false;
    // 'post-thumbnails' can be boolean or an array of post types.
    // In the latter case, we need to verify `postType` exists
    // within `supported`. If `postType` isn't passed, then the check
    // should fail.
    if ('post-thumbnails' === key && Array.isArray(supported)) {
      return supported.includes(postType);
    }
    return supported;
  });
  if (!isSupported) {
    return null;
  }
  return children;
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-featured-image/check.js
/**
 * Internal dependencies
 */



/**
 * Wrapper component that renders its children only if the post type supports a featured image
 * and the theme supports post thumbnails.
 *
 * @param {Object}  props          Props.
 * @param {Element} props.children Children to be rendered.
 *
 * @return {Component} The component to be rendered.
 */

function PostFeaturedImageCheck({
  children
}) {
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(ThemeSupportCheck, {
    supportKeys: "post-thumbnails",
    children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(post_type_support_check, {
      supportKeys: "thumbnail",
      children: children
    })
  });
}
/* harmony default export */ const post_featured_image_check = (PostFeaturedImageCheck);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-featured-image/index.js
/**
 * WordPress dependencies
 */










/**
 * Internal dependencies
 */




const ALLOWED_MEDIA_TYPES = ['image'];

// Used when labels from post type were not yet loaded or when they are not present.
const DEFAULT_FEATURE_IMAGE_LABEL = (0,external_wp_i18n_namespaceObject.__)('Featured image');
const DEFAULT_SET_FEATURE_IMAGE_LABEL = (0,external_wp_i18n_namespaceObject.__)('Add a featured image');
const instructions = /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("p", {
  children: (0,external_wp_i18n_namespaceObject.__)('To edit the featured image, you need permission to upload media.')
});
function getMediaDetails(media, postId) {
  var _media$media_details$, _media$media_details$2;
  if (!media) {
    return {};
  }
  const defaultSize = (0,external_wp_hooks_namespaceObject.applyFilters)('editor.PostFeaturedImage.imageSize', 'large', media.id, postId);
  if (defaultSize in ((_media$media_details$ = media?.media_details?.sizes) !== null && _media$media_details$ !== void 0 ? _media$media_details$ : {})) {
    return {
      mediaWidth: media.media_details.sizes[defaultSize].width,
      mediaHeight: media.media_details.sizes[defaultSize].height,
      mediaSourceUrl: media.media_details.sizes[defaultSize].source_url
    };
  }

  // Use fallbackSize when defaultSize is not available.
  const fallbackSize = (0,external_wp_hooks_namespaceObject.applyFilters)('editor.PostFeaturedImage.imageSize', 'thumbnail', media.id, postId);
  if (fallbackSize in ((_media$media_details$2 = media?.media_details?.sizes) !== null && _media$media_details$2 !== void 0 ? _media$media_details$2 : {})) {
    return {
      mediaWidth: media.media_details.sizes[fallbackSize].width,
      mediaHeight: media.media_details.sizes[fallbackSize].height,
      mediaSourceUrl: media.media_details.sizes[fallbackSize].source_url
    };
  }

  // Use full image size when fallbackSize and defaultSize are not available.
  return {
    mediaWidth: media.media_details.width,
    mediaHeight: media.media_details.height,
    mediaSourceUrl: media.source_url
  };
}
function PostFeaturedImage({
  currentPostId,
  featuredImageId,
  onUpdateImage,
  onRemoveImage,
  media,
  postType,
  noticeUI,
  noticeOperations
}) {
  const toggleRef = (0,external_wp_element_namespaceObject.useRef)();
  const [isLoading, setIsLoading] = (0,external_wp_element_namespaceObject.useState)(false);
  const {
    getSettings
  } = (0,external_wp_data_namespaceObject.useSelect)(external_wp_blockEditor_namespaceObject.store);
  const {
    mediaSourceUrl
  } = getMediaDetails(media, currentPostId);
  function onDropFiles(filesList) {
    getSettings().mediaUpload({
      allowedTypes: ALLOWED_MEDIA_TYPES,
      filesList,
      onFileChange([image]) {
        if ((0,external_wp_blob_namespaceObject.isBlobURL)(image?.url)) {
          setIsLoading(true);
          return;
        }
        if (image) {
          onUpdateImage(image);
        }
        setIsLoading(false);
      },
      onError(message) {
        noticeOperations.removeAllNotices();
        noticeOperations.createErrorNotice(message);
      }
    });
  }
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(post_featured_image_check, {
    children: [noticeUI, /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
      className: "editor-post-featured-image",
      children: [media && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
        id: `editor-post-featured-image-${featuredImageId}-describedby`,
        className: "hidden",
        children: [media.alt_text && (0,external_wp_i18n_namespaceObject.sprintf)(
        // Translators: %s: The selected image alt text.
        (0,external_wp_i18n_namespaceObject.__)('Current image: %s'), media.alt_text), !media.alt_text && (0,external_wp_i18n_namespaceObject.sprintf)(
        // Translators: %s: The selected image filename.
        (0,external_wp_i18n_namespaceObject.__)('The current image has no alternative text. The file name is: %s'), media.media_details.sizes?.full?.file || media.slug)]
      }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_blockEditor_namespaceObject.MediaUploadCheck, {
        fallback: instructions,
        children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_blockEditor_namespaceObject.MediaUpload, {
          title: postType?.labels?.featured_image || DEFAULT_FEATURE_IMAGE_LABEL,
          onSelect: onUpdateImage,
          unstableFeaturedImageFlow: true,
          allowedTypes: ALLOWED_MEDIA_TYPES,
          modalClass: "editor-post-featured-image__media-modal",
          render: ({
            open
          }) => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
            className: "editor-post-featured-image__container",
            children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.Button, {
              ref: toggleRef,
              className: !featuredImageId ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview',
              onClick: open,
              "aria-label": !featuredImageId ? null : (0,external_wp_i18n_namespaceObject.__)('Edit or replace the image'),
              "aria-describedby": !featuredImageId ? null : `editor-post-featured-image-${featuredImageId}-describedby`,
              children: [!!featuredImageId && media && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("img", {
                className: "editor-post-featured-image__preview-image",
                src: mediaSourceUrl,
                alt: ""
              }), isLoading && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Spinner, {}), !featuredImageId && !isLoading && (postType?.labels?.set_featured_image || DEFAULT_SET_FEATURE_IMAGE_LABEL)]
            }), !!featuredImageId && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.__experimentalHStack, {
              className: "editor-post-featured-image__actions",
              children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
                className: "editor-post-featured-image__action",
                onClick: open,
                children: (0,external_wp_i18n_namespaceObject.__)('Replace')
              }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
                className: "editor-post-featured-image__action",
                onClick: () => {
                  onRemoveImage();
                  toggleRef.current.focus();
                },
                children: (0,external_wp_i18n_namespaceObject.__)('Remove')
              })]
            }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.DropZone, {
              onFilesDrop: onDropFiles
            })]
          }),
          value: featuredImageId
        })
      })]
    })]
  });
}
const applyWithSelect = (0,external_wp_data_namespaceObject.withSelect)(select => {
  const {
    getMedia,
    getPostType
  } = select(external_wp_coreData_namespaceObject.store);
  const {
    getCurrentPostId,
    getEditedPostAttribute
  } = select(store_store);
  const featuredImageId = getEditedPostAttribute('featured_media');
  return {
    media: featuredImageId ? getMedia(featuredImageId, {
      context: 'view'
    }) : null,
    currentPostId: getCurrentPostId(),
    postType: getPostType(getEditedPostAttribute('type')),
    featuredImageId
  };
});
const applyWithDispatch = (0,external_wp_data_namespaceObject.withDispatch)((dispatch, {
  noticeOperations
}, {
  select
}) => {
  const {
    editPost
  } = dispatch(store_store);
  return {
    onUpdateImage(image) {
      editPost({
        featured_media: image.id
      });
    },
    onDropImage(filesList) {
      select(external_wp_blockEditor_namespaceObject.store).getSettings().mediaUpload({
        allowedTypes: ['image'],
        filesList,
        onFileChange([image]) {
          editPost({
            featured_media: image.id
          });
        },
        onError(message) {
          noticeOperations.removeAllNotices();
          noticeOperations.createErrorNotice(message);
        }
      });
    },
    onRemoveImage() {
      editPost({
        featured_media: 0
      });
    }
  };
});

/**
 * Renders the component for managing the featured image of a post.
 *
 * @param {Object}   props                  Props.
 * @param {number}   props.currentPostId    ID of the current post.
 * @param {number}   props.featuredImageId  ID of the featured image.
 * @param {Function} props.onUpdateImage    Function to call when the image is updated.
 * @param {Function} props.onRemoveImage    Function to call when the image is removed.
 * @param {Object}   props.media            The media object representing the featured image.
 * @param {string}   props.postType         Post type.
 * @param {Element}  props.noticeUI         UI for displaying notices.
 * @param {Object}   props.noticeOperations Operations for managing notices.
 *
 * @return {Element} Component to be rendered .
 */
/* harmony default export */ const post_featured_image = ((0,external_wp_compose_namespaceObject.compose)(external_wp_components_namespaceObject.withNotices, applyWithSelect, applyWithDispatch, (0,external_wp_components_namespaceObject.withFilters)('editor.PostFeaturedImage'))(PostFeaturedImage));

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-featured-image/panel.js
/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */




const post_featured_image_panel_PANEL_NAME = 'featured-image';

/**
 * Renders the panel for the post featured image.
 *
 * @param {Object}  props               Props.
 * @param {boolean} props.withPanelBody Whether to include the panel body. Default true.
 *
 * @return {Component|null} The component to be rendered.
 * Return Null if the editor panel is disabled for featured image.
 */
function PostFeaturedImagePanel({
  withPanelBody = true
}) {
  var _postType$labels$feat;
  const {
    postType,
    isEnabled,
    isOpened
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getEditedPostAttribute,
      isEditorPanelEnabled,
      isEditorPanelOpened
    } = select(store_store);
    const {
      getPostType
    } = select(external_wp_coreData_namespaceObject.store);
    return {
      postType: getPostType(getEditedPostAttribute('type')),
      isEnabled: isEditorPanelEnabled(post_featured_image_panel_PANEL_NAME),
      isOpened: isEditorPanelOpened(post_featured_image_panel_PANEL_NAME)
    };
  }, []);
  const {
    toggleEditorPanelOpened
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  if (!isEnabled) {
    return null;
  }
  if (!withPanelBody) {
    return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(post_featured_image_check, {
      children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(post_featured_image, {})
    });
  }
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(post_featured_image_check, {
    children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.PanelBody, {
      title: (_postType$labels$feat = postType?.labels?.featured_image) !== null && _postType$labels$feat !== void 0 ? _postType$labels$feat : (0,external_wp_i18n_namespaceObject.__)('Featured image'),
      opened: isOpened,
      onToggle: () => toggleEditorPanelOpened(post_featured_image_panel_PANEL_NAME),
      children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(post_featured_image, {})
    })
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-format/check.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



function PostFormatCheck({
  children
}) {
  const disablePostFormats = (0,external_wp_data_namespaceObject.useSelect)(select => select(store_store).getEditorSettings().disablePostFormats, []);
  if (disablePostFormats) {
    return null;
  }
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(post_type_support_check, {
    supportKeys: "post-formats",
    children: children
  });
}

/**
 * Component check if there are any post formats.
 *
 * @param {Object}  props          The component props.
 * @param {Element} props.children The child elements to render.
 *
 * @return {Component|null} The rendered component or null if post formats are disabled.
 */
/* harmony default export */ const post_format_check = (PostFormatCheck);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-format/index.js
/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



// All WP post formats, sorted alphabetically by translated name.


const POST_FORMATS = [{
  id: 'aside',
  caption: (0,external_wp_i18n_namespaceObject.__)('Aside')
}, {
  id: 'audio',
  caption: (0,external_wp_i18n_namespaceObject.__)('Audio')
}, {
  id: 'chat',
  caption: (0,external_wp_i18n_namespaceObject.__)('Chat')
}, {
  id: 'gallery',
  caption: (0,external_wp_i18n_namespaceObject.__)('Gallery')
}, {
  id: 'image',
  caption: (0,external_wp_i18n_namespaceObject.__)('Image')
}, {
  id: 'link',
  caption: (0,external_wp_i18n_namespaceObject.__)('Link')
}, {
  id: 'quote',
  caption: (0,external_wp_i18n_namespaceObject.__)('Quote')
}, {
  id: 'standard',
  caption: (0,external_wp_i18n_namespaceObject.__)('Standard')
}, {
  id: 'status',
  caption: (0,external_wp_i18n_namespaceObject.__)('Status')
}, {
  id: 'video',
  caption: (0,external_wp_i18n_namespaceObject.__)('Video')
}].sort((a, b) => {
  const normalizedA = a.caption.toUpperCase();
  const normalizedB = b.caption.toUpperCase();
  if (normalizedA < normalizedB) {
    return -1;
  }
  if (normalizedA > normalizedB) {
    return 1;
  }
  return 0;
});

/**
 * `PostFormat` a component that allows changing the post format while also providing a suggestion for the current post.
 *
 * @example
 * ```jsx
 * <PostFormat />
 * ```
 *
 * @return {JSX.Element} The rendered PostFormat component.
 */
function PostFormat() {
  const instanceId = (0,external_wp_compose_namespaceObject.useInstanceId)(PostFormat);
  const postFormatSelectorId = `post-format-selector-${instanceId}`;
  const {
    postFormat,
    suggestedFormat,
    supportedFormats
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getEditedPostAttribute,
      getSuggestedPostFormat
    } = select(store_store);
    const _postFormat = getEditedPostAttribute('format');
    const themeSupports = select(external_wp_coreData_namespaceObject.store).getThemeSupports();
    return {
      postFormat: _postFormat !== null && _postFormat !== void 0 ? _postFormat : 'standard',
      suggestedFormat: getSuggestedPostFormat(),
      supportedFormats: themeSupports.formats
    };
  }, []);
  const formats = POST_FORMATS.filter(format => {
    // Ensure current format is always in the set.
    // The current format may not be a format supported by the theme.
    return supportedFormats?.includes(format.id) || postFormat === format.id;
  });
  const suggestion = formats.find(format => format.id === suggestedFormat);
  const {
    editPost
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  const onUpdatePostFormat = format => editPost({
    format
  });
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(post_format_check, {
    children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
      className: "editor-post-format",
      children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.RadioControl, {
        className: "editor-post-format__options",
        label: (0,external_wp_i18n_namespaceObject.__)('Post Format'),
        selected: postFormat,
        onChange: format => onUpdatePostFormat(format),
        id: postFormatSelectorId,
        options: formats.map(format => ({
          label: format.caption,
          value: format.id
        })),
        hideLabelFromVision: true
      }), suggestion && suggestion.id !== postFormat && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("p", {
        className: "editor-post-format__suggestion",
        children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
          variant: "link",
          onClick: () => onUpdatePostFormat(suggestion.id),
          children: (0,external_wp_i18n_namespaceObject.sprintf)( /* translators: %s: post format */
          (0,external_wp_i18n_namespaceObject.__)('Apply suggested format: %s'), suggestion.caption)
        })
      })]
    })
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/backup.js
/**
 * WordPress dependencies
 */


const backup = /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.Path, {
    d: "M5.5 12h1.75l-2.5 3-2.5-3H4a8 8 0 113.134 6.35l.907-1.194A6.5 6.5 0 105.5 12zm9.53 1.97l-2.28-2.28V8.5a.75.75 0 00-1.5 0V12a.747.747 0 00.218.529l1.282-.84-1.28.842 2.5 2.5a.75.75 0 101.06-1.061z"
  })
});
/* harmony default export */ const library_backup = (backup);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-last-revision/check.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



/**
 * Wrapper component that renders its children if the post has more than one revision.
 *
 * @param {Object}  props          Props.
 * @param {Element} props.children Children to be rendered.
 *
 * @return {Component|null} Rendered child components if post has more than one revision, otherwise null.
 */

function PostLastRevisionCheck({
  children
}) {
  const {
    lastRevisionId,
    revisionsCount
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getCurrentPostLastRevisionId,
      getCurrentPostRevisionsCount
    } = select(store_store);
    return {
      lastRevisionId: getCurrentPostLastRevisionId(),
      revisionsCount: getCurrentPostRevisionsCount()
    };
  }, []);
  if (!lastRevisionId || revisionsCount < 2) {
    return null;
  }
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(post_type_support_check, {
    supportKeys: "revisions",
    children: children
  });
}
/* harmony default export */ const post_last_revision_check = (PostLastRevisionCheck);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-last-revision/index.js
/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



/**
 * Renders the component for displaying the last revision of a post.
 *
 * @return {Component} The component to be rendered.
 */

function PostLastRevision() {
  const {
    lastRevisionId,
    revisionsCount
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getCurrentPostLastRevisionId,
      getCurrentPostRevisionsCount
    } = select(store_store);
    return {
      lastRevisionId: getCurrentPostLastRevisionId(),
      revisionsCount: getCurrentPostRevisionsCount()
    };
  }, []);
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(post_last_revision_check, {
    children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
      href: (0,external_wp_url_namespaceObject.addQueryArgs)('revision.php', {
        revision: lastRevisionId
      }),
      className: "editor-post-last-revision__title",
      icon: library_backup,
      iconPosition: "right",
      text: (0,external_wp_i18n_namespaceObject.sprintf)( /* translators: %s: number of revisions */
      (0,external_wp_i18n_namespaceObject.__)('Revisions (%s)'), revisionsCount)
    })
  });
}
/* harmony default export */ const post_last_revision = (PostLastRevision);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-last-revision/panel.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



/**
 * Renders the panel for displaying the last revision of a post.
 *
 * @return {Component} The component to be rendered.
 */

function PostLastRevisionPanel() {
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(post_last_revision_check, {
    children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.PanelBody, {
      className: "editor-post-last-revision__panel",
      children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(post_last_revision, {})
    })
  });
}
/* harmony default export */ const post_last_revision_panel = (PostLastRevisionPanel);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-locked-modal/index.js
/**
 * WordPress dependencies
 */









/**
 * Internal dependencies
 */


/**
 * A modal component that is displayed when a post is locked for editing by another user.
 * The modal provides information about the lock status and options to take over or exit the editor.
 *
 * @return {JSX.Element|null} The rendered PostLockedModal component.
 */



function PostLockedModal() {
  const instanceId = (0,external_wp_compose_namespaceObject.useInstanceId)(PostLockedModal);
  const hookName = 'core/editor/post-locked-modal-' + instanceId;
  const {
    autosave,
    updatePostLock
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  const {
    isLocked,
    isTakeover,
    user,
    postId,
    postLockUtils,
    activePostLock,
    postType,
    previewLink
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      isPostLocked,
      isPostLockTakeover,
      getPostLockUser,
      getCurrentPostId,
      getActivePostLock,
      getEditedPostAttribute,
      getEditedPostPreviewLink,
      getEditorSettings
    } = select(store_store);
    const {
      getPostType
    } = select(external_wp_coreData_namespaceObject.store);
    return {
      isLocked: isPostLocked(),
      isTakeover: isPostLockTakeover(),
      user: getPostLockUser(),
      postId: getCurrentPostId(),
      postLockUtils: getEditorSettings().postLockUtils,
      activePostLock: getActivePostLock(),
      postType: getPostType(getEditedPostAttribute('type')),
      previewLink: getEditedPostPreviewLink()
    };
  }, []);
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    /**
     * Keep the lock refreshed.
     *
     * When the user does not send a heartbeat in a heartbeat-tick
     * the user is no longer editing and another user can start editing.
     *
     * @param {Object} data Data to send in the heartbeat request.
     */
    function sendPostLock(data) {
      if (isLocked) {
        return;
      }
      data['wp-refresh-post-lock'] = {
        lock: activePostLock,
        post_id: postId
      };
    }

    /**
     * Refresh post locks: update the lock string or show the dialog if somebody has taken over editing.
     *
     * @param {Object} data Data received in the heartbeat request
     */
    function receivePostLock(data) {
      if (!data['wp-refresh-post-lock']) {
        return;
      }
      const received = data['wp-refresh-post-lock'];
      if (received.lock_error) {
        // Auto save and display the takeover modal.
        autosave();
        updatePostLock({
          isLocked: true,
          isTakeover: true,
          user: {
            name: received.lock_error.name,
            avatar: received.lock_error.avatar_src_2x
          }
        });
      } else if (received.new_lock) {
        updatePostLock({
          isLocked: false,
          activePostLock: received.new_lock
        });
      }
    }

    /**
     * Unlock the post before the window is exited.
     */
    function releasePostLock() {
      if (isLocked || !activePostLock) {
        return;
      }
      const data = new window.FormData();
      data.append('action', 'wp-remove-post-lock');
      data.append('_wpnonce', postLockUtils.unlockNonce);
      data.append('post_ID', postId);
      data.append('active_post_lock', activePostLock);
      if (window.navigator.sendBeacon) {
        window.navigator.sendBeacon(postLockUtils.ajaxUrl, data);
      } else {
        const xhr = new window.XMLHttpRequest();
        xhr.open('POST', postLockUtils.ajaxUrl, false);
        xhr.send(data);
      }
    }

    // Details on these events on the Heartbeat API docs
    // https://developer.wordpress.org/plugins/javascript/heartbeat-api/
    (0,external_wp_hooks_namespaceObject.addAction)('heartbeat.send', hookName, sendPostLock);
    (0,external_wp_hooks_namespaceObject.addAction)('heartbeat.tick', hookName, receivePostLock);
    window.addEventListener('beforeunload', releasePostLock);
    return () => {
      (0,external_wp_hooks_namespaceObject.removeAction)('heartbeat.send', hookName);
      (0,external_wp_hooks_namespaceObject.removeAction)('heartbeat.tick', hookName);
      window.removeEventListener('beforeunload', releasePostLock);
    };
  }, []);
  if (!isLocked) {
    return null;
  }
  const userDisplayName = user.name;
  const userAvatar = user.avatar;
  const unlockUrl = (0,external_wp_url_namespaceObject.addQueryArgs)('post.php', {
    'get-post-lock': '1',
    lockKey: true,
    post: postId,
    action: 'edit',
    _wpnonce: postLockUtils.nonce
  });
  const allPostsUrl = (0,external_wp_url_namespaceObject.addQueryArgs)('edit.php', {
    post_type: postType?.slug
  });
  const allPostsLabel = (0,external_wp_i18n_namespaceObject.__)('Exit editor');
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Modal, {
    title: isTakeover ? (0,external_wp_i18n_namespaceObject.__)('Someone else has taken over this post') : (0,external_wp_i18n_namespaceObject.__)('This post is already being edited'),
    focusOnMount: true,
    shouldCloseOnClickOutside: false,
    shouldCloseOnEsc: false,
    isDismissible: false,
    size: "medium",
    children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.__experimentalHStack, {
      alignment: "top",
      spacing: 6,
      children: [!!userAvatar && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("img", {
        src: userAvatar,
        alt: (0,external_wp_i18n_namespaceObject.__)('Avatar'),
        className: "editor-post-locked-modal__avatar",
        width: 64,
        height: 64
      }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
        children: [!!isTakeover && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("p", {
          children: (0,external_wp_element_namespaceObject.createInterpolateElement)(userDisplayName ? (0,external_wp_i18n_namespaceObject.sprintf)( /* translators: %s: user's display name */
          (0,external_wp_i18n_namespaceObject.__)('<strong>%s</strong> now has editing control of this post (<PreviewLink />). Don’t worry, your changes up to this moment have been saved.'), userDisplayName) : (0,external_wp_i18n_namespaceObject.__)('Another user now has editing control of this post (<PreviewLink />). Don’t worry, your changes up to this moment have been saved.'), {
            strong: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("strong", {}),
            PreviewLink: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.ExternalLink, {
              href: previewLink,
              children: (0,external_wp_i18n_namespaceObject.__)('preview')
            })
          })
        }), !isTakeover && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
          children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("p", {
            children: (0,external_wp_element_namespaceObject.createInterpolateElement)(userDisplayName ? (0,external_wp_i18n_namespaceObject.sprintf)( /* translators: %s: user's display name */
            (0,external_wp_i18n_namespaceObject.__)('<strong>%s</strong> is currently working on this post (<PreviewLink />), which means you cannot make changes, unless you take over.'), userDisplayName) : (0,external_wp_i18n_namespaceObject.__)('Another user is currently working on this post (<PreviewLink />), which means you cannot make changes, unless you take over.'), {
              strong: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("strong", {}),
              PreviewLink: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.ExternalLink, {
                href: previewLink,
                children: (0,external_wp_i18n_namespaceObject.__)('preview')
              })
            })
          }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("p", {
            children: (0,external_wp_i18n_namespaceObject.__)('If you take over, the other user will lose editing control to the post, but their changes will be saved.')
          })]
        }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.__experimentalHStack, {
          className: "editor-post-locked-modal__buttons",
          justify: "flex-end",
          children: [!isTakeover && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
            variant: "tertiary",
            href: unlockUrl,
            children: (0,external_wp_i18n_namespaceObject.__)('Take over')
          }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
            variant: "primary",
            href: allPostsUrl,
            children: allPostsLabel
          })]
        })]
      })]
    })
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-pending-status/check.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/**
 * This component checks the publishing status of the current post.
 * If the post is already published or the user doesn't have the
 * capability to publish, it returns null.
 *
 * @param {Object}  props          Component properties.
 * @param {Element} props.children Children to be rendered.
 *
 * @return {JSX.Element|null} The rendered child elements or null if the post is already published or the user doesn't have the capability to publish.
 */
function PostPendingStatusCheck({
  children
}) {
  const {
    hasPublishAction,
    isPublished
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    var _getCurrentPost$_link;
    const {
      isCurrentPostPublished,
      getCurrentPost
    } = select(store_store);
    return {
      hasPublishAction: (_getCurrentPost$_link = getCurrentPost()._links?.['wp:action-publish']) !== null && _getCurrentPost$_link !== void 0 ? _getCurrentPost$_link : false,
      isPublished: isCurrentPostPublished()
    };
  }, []);
  if (isPublished || !hasPublishAction) {
    return null;
  }
  return children;
}
/* harmony default export */ const post_pending_status_check = (PostPendingStatusCheck);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-pending-status/index.js
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



/**
 * A component for displaying and toggling the pending status of a post.
 *
 * @return {JSX.Element} The rendered component.
 */

function PostPendingStatus() {
  const status = (0,external_wp_data_namespaceObject.useSelect)(select => select(store_store).getEditedPostAttribute('status'), []);
  const {
    editPost
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  const togglePendingStatus = () => {
    const updatedStatus = status === 'pending' ? 'draft' : 'pending';
    editPost({
      status: updatedStatus
    });
  };
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(post_pending_status_check, {
    children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.CheckboxControl, {
      __nextHasNoMarginBottom: true,
      label: (0,external_wp_i18n_namespaceObject.__)('Pending review'),
      checked: status === 'pending',
      onChange: togglePendingStatus
    })
  });
}
/* harmony default export */ const post_pending_status = (PostPendingStatus);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-preview-button/index.js
/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */




function writeInterstitialMessage(targetDocument) {
  let markup = (0,external_wp_element_namespaceObject.renderToString)( /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
    className: "editor-post-preview-button__interstitial-message",
    children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.SVG, {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 96 96",
      children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Path, {
        className: "outer",
        d: "M48 12c19.9 0 36 16.1 36 36S67.9 84 48 84 12 67.9 12 48s16.1-36 36-36",
        fill: "none"
      }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Path, {
        className: "inner",
        d: "M69.5 46.4c0-3.9-1.4-6.7-2.6-8.8-1.6-2.6-3.1-4.9-3.1-7.5 0-2.9 2.2-5.7 5.4-5.7h.4C63.9 19.2 56.4 16 48 16c-11.2 0-21 5.7-26.7 14.4h2.1c3.3 0 8.5-.4 8.5-.4 1.7-.1 1.9 2.4.2 2.6 0 0-1.7.2-3.7.3L40 67.5l7-20.9L42 33c-1.7-.1-3.3-.3-3.3-.3-1.7-.1-1.5-2.7.2-2.6 0 0 5.3.4 8.4.4 3.3 0 8.5-.4 8.5-.4 1.7-.1 1.9 2.4.2 2.6 0 0-1.7.2-3.7.3l11.5 34.3 3.3-10.4c1.6-4.5 2.4-7.8 2.4-10.5zM16.1 48c0 12.6 7.3 23.5 18 28.7L18.8 35c-1.7 4-2.7 8.4-2.7 13zm32.5 2.8L39 78.6c2.9.8 5.9 1.3 9 1.3 3.7 0 7.3-.6 10.6-1.8-.1-.1-.2-.3-.2-.4l-9.8-26.9zM76.2 36c0 3.2-.6 6.9-2.4 11.4L64 75.6c9.5-5.5 15.9-15.8 15.9-27.6 0-5.5-1.4-10.8-3.9-15.3.1 1 .2 2.1.2 3.3z",
        fill: "none"
      })]
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("p", {
      children: (0,external_wp_i18n_namespaceObject.__)('Generating preview…')
    })]
  }));
  markup += `
		<style>
			body {
				margin: 0;
			}
			.editor-post-preview-button__interstitial-message {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				height: 100vh;
				width: 100vw;
			}
			@-webkit-keyframes paint {
				0% {
					stroke-dashoffset: 0;
				}
			}
			@-moz-keyframes paint {
				0% {
					stroke-dashoffset: 0;
				}
			}
			@-o-keyframes paint {
				0% {
					stroke-dashoffset: 0;
				}
			}
			@keyframes paint {
				0% {
					stroke-dashoffset: 0;
				}
			}
			.editor-post-preview-button__interstitial-message svg {
				width: 192px;
				height: 192px;
				stroke: #555d66;
				stroke-width: 0.75;
			}
			.editor-post-preview-button__interstitial-message svg .outer,
			.editor-post-preview-button__interstitial-message svg .inner {
				stroke-dasharray: 280;
				stroke-dashoffset: 280;
				-webkit-animation: paint 1.5s ease infinite alternate;
				-moz-animation: paint 1.5s ease infinite alternate;
				-o-animation: paint 1.5s ease infinite alternate;
				animation: paint 1.5s ease infinite alternate;
			}
			p {
				text-align: center;
				font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
			}
		</style>
	`;

  /**
   * Filters the interstitial message shown when generating previews.
   *
   * @param {string} markup The preview interstitial markup.
   */
  markup = (0,external_wp_hooks_namespaceObject.applyFilters)('editor.PostPreview.interstitialMarkup', markup);
  targetDocument.write(markup);
  targetDocument.title = (0,external_wp_i18n_namespaceObject.__)('Generating preview…');
  targetDocument.close();
}

/**
 * Renders a button that opens a new window or tab for the preview,
 * writes the interstitial message to this window, and then navigates
 * to the actual preview link. The button is not rendered if the post
 * is not viewable and disabled if the post is not saveable.
 *
 * @param {Object}   props                     The component props.
 * @param {string}   props.className           The class name for the button.
 * @param {string}   props.textContent         The text content for the button.
 * @param {boolean}  props.forceIsAutosaveable Whether to force autosave.
 * @param {string}   props.role                The role attribute for the button.
 * @param {Function} props.onPreview           The callback function for preview event.
 *
 * @return {JSX.Element|null} The rendered button component.
 */
function PostPreviewButton({
  className,
  textContent,
  forceIsAutosaveable,
  role,
  onPreview
}) {
  const {
    postId,
    currentPostLink,
    previewLink,
    isSaveable,
    isViewable
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    var _postType$viewable;
    const editor = select(store_store);
    const core = select(external_wp_coreData_namespaceObject.store);
    const postType = core.getPostType(editor.getCurrentPostType('type'));
    return {
      postId: editor.getCurrentPostId(),
      currentPostLink: editor.getCurrentPostAttribute('link'),
      previewLink: editor.getEditedPostPreviewLink(),
      isSaveable: editor.isEditedPostSaveable(),
      isViewable: (_postType$viewable = postType?.viewable) !== null && _postType$viewable !== void 0 ? _postType$viewable : false
    };
  }, []);
  const {
    __unstableSaveForPreview
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  if (!isViewable) {
    return null;
  }
  const targetId = `wp-preview-${postId}`;
  const openPreviewWindow = async event => {
    // Our Preview button has its 'href' and 'target' set correctly for a11y
    // purposes. Unfortunately, though, we can't rely on the default 'click'
    // handler since sometimes it incorrectly opens a new tab instead of reusing
    // the existing one.
    // https://github.com/WordPress/gutenberg/pull/8330
    event.preventDefault();

    // Open up a Preview tab if needed. This is where we'll show the preview.
    const previewWindow = window.open('', targetId);

    // Focus the Preview tab. This might not do anything, depending on the browser's
    // and user's preferences.
    // https://html.spec.whatwg.org/multipage/interaction.html#dom-window-focus
    previewWindow.focus();
    writeInterstitialMessage(previewWindow.document);
    const link = await __unstableSaveForPreview({
      forceIsAutosaveable
    });
    previewWindow.location = link;
    onPreview?.();
  };

  // Link to the `?preview=true` URL if we have it, since this lets us see
  // changes that were autosaved since the post was last published. Otherwise,
  // just link to the post's URL.
  const href = previewLink || currentPostLink;
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
    variant: !className ? 'tertiary' : undefined,
    className: className || 'editor-post-preview',
    href: href,
    target: targetId,
    disabled: !isSaveable,
    onClick: openPreviewWindow,
    role: role,
    size: "compact",
    children: textContent || /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
      children: [(0,external_wp_i18n_namespaceObject._x)('Preview', 'imperative verb'), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.VisuallyHidden, {
        as: "span",
        children: /* translators: accessibility text */
        (0,external_wp_i18n_namespaceObject.__)('(opens in a new tab)')
      })]
    })
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-publish-button/label.js
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */

function PublishButtonLabel() {
  const isSmallerThanMediumViewport = (0,external_wp_compose_namespaceObject.useViewportMatch)('medium', '<');
  const {
    isPublished,
    isBeingScheduled,
    isSaving,
    isPublishing,
    hasPublishAction,
    isAutosaving,
    hasNonPostEntityChanges,
    postStatusHasChanged,
    postStatus
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    var _getCurrentPost$_link;
    const {
      isCurrentPostPublished,
      isEditedPostBeingScheduled,
      isSavingPost,
      isPublishingPost,
      getCurrentPost,
      getCurrentPostType,
      isAutosavingPost,
      getPostEdits,
      getEditedPostAttribute
    } = select(store_store);
    return {
      isPublished: isCurrentPostPublished(),
      isBeingScheduled: isEditedPostBeingScheduled(),
      isSaving: isSavingPost(),
      isPublishing: isPublishingPost(),
      hasPublishAction: (_getCurrentPost$_link = getCurrentPost()._links?.['wp:action-publish']) !== null && _getCurrentPost$_link !== void 0 ? _getCurrentPost$_link : false,
      postType: getCurrentPostType(),
      isAutosaving: isAutosavingPost(),
      hasNonPostEntityChanges: select(store_store).hasNonPostEntityChanges(),
      postStatusHasChanged: !!getPostEdits()?.status,
      postStatus: getEditedPostAttribute('status')
    };
  }, []);
  if (isPublishing) {
    /* translators: button label text should, if possible, be under 16 characters. */
    return (0,external_wp_i18n_namespaceObject.__)('Publishing…');
  } else if ((isPublished || isBeingScheduled) && isSaving && !isAutosaving) {
    /* translators: button label text should, if possible, be under 16 characters. */
    return (0,external_wp_i18n_namespaceObject.__)('Saving…');
  }
  if (!hasPublishAction) {
    // TODO: this is because "Submit for review" string is too long in some languages.
    // @see https://github.com/WordPress/gutenberg/issues/10475
    return isSmallerThanMediumViewport ? (0,external_wp_i18n_namespaceObject.__)('Publish') : (0,external_wp_i18n_namespaceObject.__)('Submit for Review');
  }
  if (hasNonPostEntityChanges || isPublished || postStatusHasChanged && !['future', 'publish'].includes(postStatus) || !postStatusHasChanged && postStatus === 'future') {
    return (0,external_wp_i18n_namespaceObject.__)('Save');
  }
  if (isBeingScheduled) {
    return (0,external_wp_i18n_namespaceObject.__)('Schedule');
  }
  return (0,external_wp_i18n_namespaceObject.__)('Publish');
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-publish-button/index.js
/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */





const post_publish_button_noop = () => {};
class PostPublishButton extends external_wp_element_namespaceObject.Component {
  constructor(props) {
    super(props);
    this.buttonNode = (0,external_wp_element_namespaceObject.createRef)();
    this.createOnClick = this.createOnClick.bind(this);
    this.closeEntitiesSavedStates = this.closeEntitiesSavedStates.bind(this);
    this.state = {
      entitiesSavedStatesCallback: false
    };
  }
  componentDidMount() {
    if (this.props.focusOnMount) {
      // This timeout is necessary to make sure the `useEffect` hook of
      // `useFocusReturn` gets the correct element (the button that opens the
      // PostPublishPanel) otherwise it will get this button.
      this.timeoutID = setTimeout(() => {
        this.buttonNode.current.focus();
      }, 0);
    }
  }
  componentWillUnmount() {
    clearTimeout(this.timeoutID);
  }
  createOnClick(callback) {
    return (...args) => {
      const {
        hasNonPostEntityChanges,
        hasPostMetaChanges,
        setEntitiesSavedStatesCallback,
        isPublished
      } = this.props;
      // If a post with non-post entities is published, but the user
      // elects to not save changes to the non-post entities, those
      // entities will still be dirty when the Publish button is clicked.
      // We also need to check that the `setEntitiesSavedStatesCallback`
      // prop was passed. See https://github.com/WordPress/gutenberg/pull/37383
      //
      // TODO: Explore how to manage `hasPostMetaChanges` and pre-publish workflow properly.
      if ((hasNonPostEntityChanges || hasPostMetaChanges && isPublished) && setEntitiesSavedStatesCallback) {
        // The modal for multiple entity saving will open,
        // hold the callback for saving/publishing the post
        // so that we can call it if the post entity is checked.
        this.setState({
          entitiesSavedStatesCallback: () => callback(...args)
        });

        // Open the save panel by setting its callback.
        // To set a function on the useState hook, we must set it
        // with another function (() => myFunction). Passing the
        // function on its own will cause an error when called.
        setEntitiesSavedStatesCallback(() => this.closeEntitiesSavedStates);
        return post_publish_button_noop;
      }
      return callback(...args);
    };
  }
  closeEntitiesSavedStates(savedEntities) {
    const {
      postType,
      postId
    } = this.props;
    const {
      entitiesSavedStatesCallback
    } = this.state;
    this.setState({
      entitiesSavedStatesCallback: false
    }, () => {
      if (savedEntities && savedEntities.some(elt => elt.kind === 'postType' && elt.name === postType && elt.key === postId)) {
        // The post entity was checked, call the held callback from `createOnClick`.
        entitiesSavedStatesCallback();
      }
    });
  }
  render() {
    const {
      forceIsDirty,
      hasPublishAction,
      isBeingScheduled,
      isOpen,
      isPostSavingLocked,
      isPublishable,
      isPublished,
      isSaveable,
      isSaving,
      isAutoSaving,
      isToggle,
      savePostStatus,
      onSubmit = post_publish_button_noop,
      onToggle,
      visibility,
      hasNonPostEntityChanges,
      isSavingNonPostEntityChanges,
      postStatus,
      postStatusHasChanged
    } = this.props;
    const isButtonDisabled = (isSaving || !isSaveable || isPostSavingLocked || !isPublishable && !forceIsDirty) && (!hasNonPostEntityChanges || isSavingNonPostEntityChanges);
    const isToggleDisabled = (isPublished || isSaving || !isSaveable || !isPublishable && !forceIsDirty) && (!hasNonPostEntityChanges || isSavingNonPostEntityChanges);

    // If the new status has not changed explicitely, we derive it from
    // other factors, like having a publish action, etc.. We need to preserve
    // this because it affects when to show the pre and post publish panels.
    // If it has changed though explicitely, we need to respect that.
    let publishStatus = 'publish';
    if (postStatusHasChanged) {
      publishStatus = postStatus;
    } else if (!hasPublishAction) {
      publishStatus = 'pending';
    } else if (visibility === 'private') {
      publishStatus = 'private';
    } else if (isBeingScheduled) {
      publishStatus = 'future';
    }
    const onClickButton = () => {
      if (isButtonDisabled) {
        return;
      }
      onSubmit();
      savePostStatus(publishStatus);
    };

    // Callback to open the publish panel.
    const onClickToggle = () => {
      if (isToggleDisabled) {
        return;
      }
      onToggle();
    };
    const buttonProps = {
      'aria-disabled': isButtonDisabled,
      className: 'editor-post-publish-button',
      isBusy: !isAutoSaving && isSaving,
      variant: 'primary',
      onClick: this.createOnClick(onClickButton)
    };
    const toggleProps = {
      'aria-disabled': isToggleDisabled,
      'aria-expanded': isOpen,
      className: 'editor-post-publish-panel__toggle',
      isBusy: isSaving && isPublished,
      variant: 'primary',
      size: 'compact',
      onClick: this.createOnClick(onClickToggle)
    };
    const componentProps = isToggle ? toggleProps : buttonProps;
    return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_ReactJSXRuntime_namespaceObject.Fragment, {
      children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
        ref: this.buttonNode,
        ...componentProps,
        className: `${componentProps.className} editor-post-publish-button__button`,
        size: "compact",
        children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PublishButtonLabel, {})
      })
    });
  }
}
/* harmony default export */ const post_publish_button = ((0,external_wp_compose_namespaceObject.compose)([(0,external_wp_data_namespaceObject.withSelect)(select => {
  var _getCurrentPost$_link;
  const {
    isSavingPost,
    isAutosavingPost,
    isEditedPostBeingScheduled,
    getEditedPostVisibility,
    isCurrentPostPublished,
    isEditedPostSaveable,
    isEditedPostPublishable,
    isPostSavingLocked,
    getCurrentPost,
    getCurrentPostType,
    getCurrentPostId,
    hasNonPostEntityChanges,
    isSavingNonPostEntityChanges,
    getEditedPostAttribute,
    getPostEdits,
    hasPostMetaChanges
  } = unlock(select(store_store));
  return {
    isSaving: isSavingPost(),
    isAutoSaving: isAutosavingPost(),
    isBeingScheduled: isEditedPostBeingScheduled(),
    visibility: getEditedPostVisibility(),
    isSaveable: isEditedPostSaveable(),
    isPostSavingLocked: isPostSavingLocked(),
    isPublishable: isEditedPostPublishable(),
    isPublished: isCurrentPostPublished(),
    hasPublishAction: (_getCurrentPost$_link = getCurrentPost()._links?.['wp:action-publish']) !== null && _getCurrentPost$_link !== void 0 ? _getCurrentPost$_link : false,
    postType: getCurrentPostType(),
    postId: getCurrentPostId(),
    postStatus: getEditedPostAttribute('status'),
    postStatusHasChanged: getPostEdits()?.status,
    hasNonPostEntityChanges: hasNonPostEntityChanges(),
    hasPostMetaChanges: hasPostMetaChanges(),
    isSavingNonPostEntityChanges: isSavingNonPostEntityChanges()
  };
}), (0,external_wp_data_namespaceObject.withDispatch)(dispatch => {
  const {
    editPost,
    savePost
  } = dispatch(store_store);
  return {
    savePostStatus: status => {
      editPost({
        status
      }, {
        undoIgnore: true
      });
      savePost();
    }
  };
})])(PostPublishButton));

;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/wordpress.js
/**
 * WordPress dependencies
 */


const wordpress = /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24",
  children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.Path, {
    d: "M20 10c0-5.51-4.49-10-10-10C4.48 0 0 4.49 0 10c0 5.52 4.48 10 10 10 5.51 0 10-4.48 10-10zM7.78 15.37L4.37 6.22c.55-.02 1.17-.08 1.17-.08.5-.06.44-1.13-.06-1.11 0 0-1.45.11-2.37.11-.18 0-.37 0-.58-.01C4.12 2.69 6.87 1.11 10 1.11c2.33 0 4.45.87 6.05 2.34-.68-.11-1.65.39-1.65 1.58 0 .74.45 1.36.9 2.1.35.61.55 1.36.55 2.46 0 1.49-1.4 5-1.4 5l-3.03-8.37c.54-.02.82-.17.82-.17.5-.05.44-1.25-.06-1.22 0 0-1.44.12-2.38.12-.87 0-2.33-.12-2.33-.12-.5-.03-.56 1.2-.06 1.22l.92.08 1.26 3.41zM17.41 10c.24-.64.74-1.87.43-4.25.7 1.29 1.05 2.71 1.05 4.25 0 3.29-1.73 6.24-4.4 7.78.97-2.59 1.94-5.2 2.92-7.78zM6.1 18.09C3.12 16.65 1.11 13.53 1.11 10c0-1.3.23-2.48.72-3.59C3.25 10.3 4.67 14.2 6.1 18.09zm4.03-6.63l2.58 6.98c-.86.29-1.76.45-2.71.45-.79 0-1.57-.11-2.29-.33.81-2.38 1.62-4.74 2.42-7.1z"
  })
});
/* harmony default export */ const library_wordpress = (wordpress);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-visibility/utils.js
/**
 * WordPress dependencies
 */

const visibilityOptions = {
  public: {
    label: (0,external_wp_i18n_namespaceObject.__)('Public'),
    info: (0,external_wp_i18n_namespaceObject.__)('Visible to everyone.')
  },
  private: {
    label: (0,external_wp_i18n_namespaceObject.__)('Private'),
    info: (0,external_wp_i18n_namespaceObject.__)('Only visible to site admins and editors.')
  },
  password: {
    label: (0,external_wp_i18n_namespaceObject.__)('Password protected'),
    info: (0,external_wp_i18n_namespaceObject.__)('Only those with the password can view this post.')
  }
};

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-visibility/index.js
/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */



/**
 * Allows users to set the visibility of a post.
 *
 * @param {Object}   props         The component props.
 * @param {Function} props.onClose Function to call when the popover is closed.
 * @return {JSX.Element} The rendered component.
 */


function PostVisibility({
  onClose
}) {
  const instanceId = (0,external_wp_compose_namespaceObject.useInstanceId)(PostVisibility);
  const {
    status,
    visibility,
    password
  } = (0,external_wp_data_namespaceObject.useSelect)(select => ({
    status: select(store_store).getEditedPostAttribute('status'),
    visibility: select(store_store).getEditedPostVisibility(),
    password: select(store_store).getEditedPostAttribute('password')
  }));
  const {
    editPost,
    savePost
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  const [hasPassword, setHasPassword] = (0,external_wp_element_namespaceObject.useState)(!!password);
  const [showPrivateConfirmDialog, setShowPrivateConfirmDialog] = (0,external_wp_element_namespaceObject.useState)(false);
  const setPublic = () => {
    editPost({
      status: visibility === 'private' ? 'draft' : status,
      password: ''
    });
    setHasPassword(false);
  };
  const setPrivate = () => {
    setShowPrivateConfirmDialog(true);
  };
  const confirmPrivate = () => {
    editPost({
      status: 'private',
      password: ''
    });
    setHasPassword(false);
    setShowPrivateConfirmDialog(false);
    savePost();
  };
  const handleDialogCancel = () => {
    setShowPrivateConfirmDialog(false);
  };
  const setPasswordProtected = () => {
    editPost({
      status: visibility === 'private' ? 'draft' : status,
      password: password || ''
    });
    setHasPassword(true);
  };
  const updatePassword = event => {
    editPost({
      password: event.target.value
    });
  };
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
    className: "editor-post-visibility",
    children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_blockEditor_namespaceObject.__experimentalInspectorPopoverHeader, {
      title: (0,external_wp_i18n_namespaceObject.__)('Visibility'),
      help: (0,external_wp_i18n_namespaceObject.__)('Control how this post is viewed.'),
      onClose: onClose
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("fieldset", {
      className: "editor-post-visibility__fieldset",
      children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.VisuallyHidden, {
        as: "legend",
        children: (0,external_wp_i18n_namespaceObject.__)('Visibility')
      }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PostVisibilityChoice, {
        instanceId: instanceId,
        value: "public",
        label: visibilityOptions.public.label,
        info: visibilityOptions.public.info,
        checked: visibility === 'public' && !hasPassword,
        onChange: setPublic
      }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PostVisibilityChoice, {
        instanceId: instanceId,
        value: "private",
        label: visibilityOptions.private.label,
        info: visibilityOptions.private.info,
        checked: visibility === 'private',
        onChange: setPrivate
      }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PostVisibilityChoice, {
        instanceId: instanceId,
        value: "password",
        label: visibilityOptions.password.label,
        info: visibilityOptions.password.info,
        checked: hasPassword,
        onChange: setPasswordProtected
      }), hasPassword && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
        className: "editor-post-visibility__password",
        children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.VisuallyHidden, {
          as: "label",
          htmlFor: `editor-post-visibility__password-input-${instanceId}`,
          children: (0,external_wp_i18n_namespaceObject.__)('Create password')
        }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("input", {
          className: "editor-post-visibility__password-input",
          id: `editor-post-visibility__password-input-${instanceId}`,
          type: "text",
          onChange: updatePassword,
          value: password,
          placeholder: (0,external_wp_i18n_namespaceObject.__)('Use a secure password')
        })]
      })]
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.__experimentalConfirmDialog, {
      isOpen: showPrivateConfirmDialog,
      onConfirm: confirmPrivate,
      onCancel: handleDialogCancel,
      confirmButtonText: (0,external_wp_i18n_namespaceObject.__)('Publish'),
      children: (0,external_wp_i18n_namespaceObject.__)('Would you like to privately publish this post now?')
    })]
  });
}
function PostVisibilityChoice({
  instanceId,
  value,
  label,
  info,
  ...props
}) {
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
    className: "editor-post-visibility__choice",
    children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("input", {
      type: "radio",
      name: `editor-post-visibility__setting-${instanceId}`,
      value: value,
      id: `editor-post-${value}-${instanceId}`,
      "aria-describedby": `editor-post-${value}-${instanceId}-description`,
      className: "editor-post-visibility__radio",
      ...props
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("label", {
      htmlFor: `editor-post-${value}-${instanceId}`,
      className: "editor-post-visibility__label",
      children: label
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("p", {
      id: `editor-post-${value}-${instanceId}-description`,
      className: "editor-post-visibility__info",
      children: info
    })]
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-visibility/label.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



/**
 * Returns the label for the current post visibility setting.
 *
 * @return {string} Post visibility label.
 */
function PostVisibilityLabel() {
  return usePostVisibilityLabel();
}

/**
 * Get the label for the current post visibility setting.
 *
 * @return {string} Post visibility label.
 */
function usePostVisibilityLabel() {
  const visibility = (0,external_wp_data_namespaceObject.useSelect)(select => select(store_store).getEditedPostVisibility());
  return visibilityOptions[visibility]?.label;
}

;// CONCATENATED MODULE: ./node_modules/date-fns/toDate.mjs
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  const argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (
    argument instanceof Date ||
    (typeof argument === "object" && argStr === "[object Date]")
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new argument.constructor(+argument);
  } else if (
    typeof argument === "number" ||
    argStr === "[object Number]" ||
    typeof argument === "string" ||
    argStr === "[object String]"
  ) {
    // TODO: Can we get rid of as?
    return new Date(argument);
  } else {
    // TODO: Can we get rid of as?
    return new Date(NaN);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_toDate = ((/* unused pure expression or super */ null && (toDate)));

;// CONCATENATED MODULE: ./node_modules/date-fns/startOfMonth.mjs


/**
 * @name startOfMonth
 * @category Month Helpers
 * @summary Return the start of a month for the given date.
 *
 * @description
 * Return the start of a month for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a month
 *
 * @example
 * // The start of a month for 2 September 2014 11:55:00:
 * const result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfMonth(date) {
  const _date = toDate(date);
  _date.setDate(1);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_startOfMonth = ((/* unused pure expression or super */ null && (startOfMonth)));

;// CONCATENATED MODULE: ./node_modules/date-fns/endOfMonth.mjs


/**
 * @name endOfMonth
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The end of a month
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */
function endOfMonth(date) {
  const _date = toDate(date);
  const month = _date.getMonth();
  _date.setFullYear(_date.getFullYear(), month + 1, 0);
  _date.setHours(23, 59, 59, 999);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_endOfMonth = ((/* unused pure expression or super */ null && (endOfMonth)));

;// CONCATENATED MODULE: ./node_modules/date-fns/constants.mjs
/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */

/**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */
const daysInWeek = 7;

/**
 * @constant
 * @name daysInYear
 * @summary Days in 1 year.
 *
 * @description
 * How many days in a year.
 *
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 */
const daysInYear = 365.2425;

/**
 * @constant
 * @name maxTime
 * @summary Maximum allowed time.
 *
 * @example
 * import { maxTime } from "./constants/date-fns/constants";
 *
 * const isValid = 8640000000000001 <= maxTime;
 * //=> false
 *
 * new Date(8640000000000001);
 * //=> Invalid Date
 */
const maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;

/**
 * @constant
 * @name minTime
 * @summary Minimum allowed time.
 *
 * @example
 * import { minTime } from "./constants/date-fns/constants";
 *
 * const isValid = -8640000000000001 >= minTime;
 * //=> false
 *
 * new Date(-8640000000000001)
 * //=> Invalid Date
 */
const minTime = -maxTime;

/**
 * @constant
 * @name millisecondsInWeek
 * @summary Milliseconds in 1 week.
 */
const millisecondsInWeek = 604800000;

/**
 * @constant
 * @name millisecondsInDay
 * @summary Milliseconds in 1 day.
 */
const millisecondsInDay = 86400000;

/**
 * @constant
 * @name millisecondsInMinute
 * @summary Milliseconds in 1 minute
 */
const millisecondsInMinute = 60000;

/**
 * @constant
 * @name millisecondsInHour
 * @summary Milliseconds in 1 hour
 */
const millisecondsInHour = 3600000;

/**
 * @constant
 * @name millisecondsInSecond
 * @summary Milliseconds in 1 second
 */
const millisecondsInSecond = 1000;

/**
 * @constant
 * @name minutesInYear
 * @summary Minutes in 1 year.
 */
const minutesInYear = 525600;

/**
 * @constant
 * @name minutesInMonth
 * @summary Minutes in 1 month.
 */
const minutesInMonth = 43200;

/**
 * @constant
 * @name minutesInDay
 * @summary Minutes in 1 day.
 */
const minutesInDay = 1440;

/**
 * @constant
 * @name minutesInHour
 * @summary Minutes in 1 hour.
 */
const minutesInHour = 60;

/**
 * @constant
 * @name monthsInQuarter
 * @summary Months in 1 quarter.
 */
const monthsInQuarter = 3;

/**
 * @constant
 * @name monthsInYear
 * @summary Months in 1 year.
 */
const monthsInYear = 12;

/**
 * @constant
 * @name quartersInYear
 * @summary Quarters in 1 year
 */
const quartersInYear = 4;

/**
 * @constant
 * @name secondsInHour
 * @summary Seconds in 1 hour.
 */
const secondsInHour = 3600;

/**
 * @constant
 * @name secondsInMinute
 * @summary Seconds in 1 minute.
 */
const secondsInMinute = 60;

/**
 * @constant
 * @name secondsInDay
 * @summary Seconds in 1 day.
 */
const secondsInDay = secondsInHour * 24;

/**
 * @constant
 * @name secondsInWeek
 * @summary Seconds in 1 week.
 */
const secondsInWeek = secondsInDay * 7;

/**
 * @constant
 * @name secondsInYear
 * @summary Seconds in 1 year.
 */
const secondsInYear = secondsInDay * daysInYear;

/**
 * @constant
 * @name secondsInMonth
 * @summary Seconds in 1 month
 */
const secondsInMonth = secondsInYear / 12;

/**
 * @constant
 * @name secondsInQuarter
 * @summary Seconds in 1 quarter.
 */
const secondsInQuarter = secondsInMonth * 3;

;// CONCATENATED MODULE: ./node_modules/date-fns/parseISO.mjs


/**
 * The {@link parseISO} function options.
 */

/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param argument - The value to convert
 * @param options - An object with options
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */
function parseISO(argument, options) {
  const additionalDigits = options?.additionalDigits ?? 2;
  const dateStrings = splitDateString(argument);

  let date;
  if (dateStrings.date) {
    const parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }

  const timestamp = date.getTime();
  let time = 0;
  let offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);
    if (isNaN(time)) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);
    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    const dirtyDate = new Date(timestamp + time);
    // JS parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.
    const result = new Date(0);
    result.setFullYear(
      dirtyDate.getUTCFullYear(),
      dirtyDate.getUTCMonth(),
      dirtyDate.getUTCDate(),
    );
    result.setHours(
      dirtyDate.getUTCHours(),
      dirtyDate.getUTCMinutes(),
      dirtyDate.getUTCSeconds(),
      dirtyDate.getUTCMilliseconds(),
    );
    return result;
  }

  return new Date(timestamp + time + offset);
}

const patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/,
};

const dateRegex =
  /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
const timeRegex =
  /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
const timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;

function splitDateString(dateString) {
  const dateStrings = {};
  const array = dateString.split(patterns.dateTimeDelimiter);
  let timeString;

  // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].
  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(
        dateStrings.date.length,
        dateString.length,
      );
    }
  }

  if (timeString) {
    const token = patterns.timezone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], "");
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  const regex = new RegExp(
    "^(?:(\\d{4}|[+-]\\d{" +
      (4 + additionalDigits) +
      "})|(\\d{2}|[+-]\\d{" +
      (2 + additionalDigits) +
      "})$)",
  );

  const captures = dateString.match(regex);
  // Invalid ISO-formatted year
  if (!captures) return { year: NaN, restDateString: "" };

  const year = captures[1] ? parseInt(captures[1]) : null;
  const century = captures[2] ? parseInt(captures[2]) : null;

  // either year or century is null, not both
  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length),
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);

  const captures = dateString.match(dateRegex);
  // Invalid ISO-formatted string
  if (!captures) return new Date(NaN);

  const isWeekDate = !!captures[4];
  const dayOfYear = parseDateUnit(captures[1]);
  const month = parseDateUnit(captures[2]) - 1;
  const day = parseDateUnit(captures[3]);
  const week = parseDateUnit(captures[4]);
  const dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }
    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    const date = new Date(0);
    if (
      !validateDate(year, month, day) ||
      !validateDayOfYearDate(year, dayOfYear)
    ) {
      return new Date(NaN);
    }
    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  const captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  const hours = parseTimeUnit(captures[1]);
  const minutes = parseTimeUnit(captures[2]);
  const seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return (
    hours * millisecondsInHour + minutes * millisecondsInMinute + seconds * 1000
  );
}

function parseTimeUnit(value) {
  return (value && parseFloat(value.replace(",", "."))) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === "Z") return 0;

  const captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;

  const sign = captures[1] === "+" ? -1 : 1;
  const hours = parseInt(captures[2]);
  const minutes = (captures[3] && parseInt(captures[3])) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * millisecondsInHour + minutes * millisecondsInMinute);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  const date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  const fourthOfJanuaryDay = date.getUTCDay() || 7;
  const diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

// Validation functions

// February is null to handle the leap year (using ||)
const daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}

function validateDate(year, month, date) {
  return (
    month >= 0 &&
    month <= 11 &&
    date >= 1 &&
    date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28))
  );
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return (
    seconds >= 0 &&
    seconds < 60 &&
    minutes >= 0 &&
    minutes < 60 &&
    hours >= 0 &&
    hours < 25
  );
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_parseISO = ((/* unused pure expression or super */ null && (parseISO)));

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-schedule/index.js
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



const {
  PrivatePublishDateTimePicker
} = unlock(external_wp_blockEditor_namespaceObject.privateApis);

/**
 * Renders the PostSchedule component. It allows the user to schedule a post.
 *
 * @param {Object}   props         Props.
 * @param {Function} props.onClose Function to close the component.
 *
 * @return {Component} The component to be rendered.
 */
function PostSchedule(props) {
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PrivatePostSchedule, {
    ...props,
    showPopoverHeaderActions: true,
    isCompact: false
  });
}
function PrivatePostSchedule({
  onClose,
  showPopoverHeaderActions,
  isCompact
}) {
  const {
    postDate,
    postType
  } = (0,external_wp_data_namespaceObject.useSelect)(select => ({
    postDate: select(store_store).getEditedPostAttribute('date'),
    postType: select(store_store).getCurrentPostType()
  }), []);
  const {
    editPost
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  const onUpdateDate = date => editPost({
    date
  });
  const [previewedMonth, setPreviewedMonth] = (0,external_wp_element_namespaceObject.useState)(startOfMonth(new Date(postDate)));

  // Pick up published and schduled site posts.
  const eventsByPostType = (0,external_wp_data_namespaceObject.useSelect)(select => select(external_wp_coreData_namespaceObject.store).getEntityRecords('postType', postType, {
    status: 'publish,future',
    after: startOfMonth(previewedMonth).toISOString(),
    before: endOfMonth(previewedMonth).toISOString(),
    exclude: [select(store_store).getCurrentPostId()],
    per_page: 100,
    _fields: 'id,date'
  }), [previewedMonth, postType]);
  const events = (0,external_wp_element_namespaceObject.useMemo)(() => (eventsByPostType || []).map(({
    date: eventDate
  }) => ({
    date: new Date(eventDate)
  })), [eventsByPostType]);
  const settings = (0,external_wp_date_namespaceObject.getSettings)();

  // To know if the current timezone is a 12 hour time with look for "a" in the time format
  // We also make sure this a is not escaped by a "/"
  const is12HourTime = /a(?!\\)/i.test(settings.formats.time.toLowerCase() // Test only the lower case a.
  .replace(/\\\\/g, '') // Replace "//" with empty strings.
  .split('').reverse().join('') // Reverse the string and test for "a" not followed by a slash.
  );
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PrivatePublishDateTimePicker, {
    currentDate: postDate,
    onChange: onUpdateDate,
    is12Hour: is12HourTime,
    events: events,
    onMonthPreviewed: date => setPreviewedMonth(parseISO(date)),
    onClose: onClose,
    isCompact: isCompact,
    showPopoverHeaderActions: showPopoverHeaderActions
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-schedule/label.js
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


/**
 * Renders the PostScheduleLabel component.
 *
 * @param {Object} props Props.
 *
 * @return {Component} The component to be rendered.
 */
function PostScheduleLabel(props) {
  return usePostScheduleLabel(props);
}

/**
 * Custom hook to get the label for post schedule.
 *
 * @param {Object}  options      Options for the hook.
 * @param {boolean} options.full Whether to get the full label or not. Default is false.
 *
 * @return {string} The label for post schedule.
 */
function usePostScheduleLabel({
  full = false
} = {}) {
  const {
    date,
    isFloating
  } = (0,external_wp_data_namespaceObject.useSelect)(select => ({
    date: select(store_store).getEditedPostAttribute('date'),
    isFloating: select(store_store).isEditedPostDateFloating()
  }), []);
  return full ? getFullPostScheduleLabel(date) : getPostScheduleLabel(date, {
    isFloating
  });
}
function getFullPostScheduleLabel(dateAttribute) {
  const date = (0,external_wp_date_namespaceObject.getDate)(dateAttribute);
  const timezoneAbbreviation = getTimezoneAbbreviation();
  const formattedDate = (0,external_wp_date_namespaceObject.dateI18n)(
  // translators: If using a space between 'g:i' and 'a', use a non-breaking space.
  (0,external_wp_i18n_namespaceObject._x)('F j, Y g:i\xa0a', 'post schedule full date format'), date);
  return (0,external_wp_i18n_namespaceObject.isRTL)() ? `${timezoneAbbreviation} ${formattedDate}` : `${formattedDate} ${timezoneAbbreviation}`;
}
function getPostScheduleLabel(dateAttribute, {
  isFloating = false,
  now = new Date()
} = {}) {
  if (!dateAttribute || isFloating) {
    return (0,external_wp_i18n_namespaceObject.__)('Immediately');
  }

  // If the user timezone does not equal the site timezone then using words
  // like 'tomorrow' is confusing, so show the full date.
  if (!isTimezoneSameAsSiteTimezone(now)) {
    return getFullPostScheduleLabel(dateAttribute);
  }
  const date = (0,external_wp_date_namespaceObject.getDate)(dateAttribute);
  if (isSameDay(date, now)) {
    return (0,external_wp_i18n_namespaceObject.sprintf)(
    // translators: %s: Time of day the post is scheduled for.
    (0,external_wp_i18n_namespaceObject.__)('Today at %s'),
    // translators: If using a space between 'g:i' and 'a', use a non-breaking space.
    (0,external_wp_date_namespaceObject.dateI18n)((0,external_wp_i18n_namespaceObject._x)('g:i\xa0a', 'post schedule time format'), date));
  }
  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);
  if (isSameDay(date, tomorrow)) {
    return (0,external_wp_i18n_namespaceObject.sprintf)(
    // translators: %s: Time of day the post is scheduled for.
    (0,external_wp_i18n_namespaceObject.__)('Tomorrow at %s'),
    // translators: If using a space between 'g:i' and 'a', use a non-breaking space.
    (0,external_wp_date_namespaceObject.dateI18n)((0,external_wp_i18n_namespaceObject._x)('g:i\xa0a', 'post schedule time format'), date));
  }
  if (date.getFullYear() === now.getFullYear()) {
    return (0,external_wp_date_namespaceObject.dateI18n)(
    // translators: If using a space between 'g:i' and 'a', use a non-breaking space.
    (0,external_wp_i18n_namespaceObject._x)('F j g:i\xa0a', 'post schedule date format without year'), date);
  }
  return (0,external_wp_date_namespaceObject.dateI18n)(
  // translators: Use a non-breaking space between 'g:i' and 'a' if appropriate.
  (0,external_wp_i18n_namespaceObject._x)('F j, Y g:i\xa0a', 'post schedule full date format'), date);
}
function getTimezoneAbbreviation() {
  const {
    timezone
  } = (0,external_wp_date_namespaceObject.getSettings)();
  if (timezone.abbr && isNaN(Number(timezone.abbr))) {
    return timezone.abbr;
  }
  const symbol = timezone.offset < 0 ? '' : '+';
  return `UTC${symbol}${timezone.offsetFormatted}`;
}
function isTimezoneSameAsSiteTimezone(date) {
  const {
    timezone
  } = (0,external_wp_date_namespaceObject.getSettings)();
  const siteOffset = Number(timezone.offset);
  const dateOffset = -1 * (date.getTimezoneOffset() / 60);
  return siteOffset === dateOffset;
}
function isSameDay(left, right) {
  return left.getDate() === right.getDate() && left.getMonth() === right.getMonth() && left.getFullYear() === right.getFullYear();
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-taxonomies/most-used-terms.js
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



const MIN_MOST_USED_TERMS = 3;
const DEFAULT_QUERY = {
  per_page: 10,
  orderby: 'count',
  order: 'desc',
  hide_empty: true,
  _fields: 'id,name,count',
  context: 'view'
};
function MostUsedTerms({
  onSelect,
  taxonomy
}) {
  const {
    _terms,
    showTerms
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const mostUsedTerms = select(external_wp_coreData_namespaceObject.store).getEntityRecords('taxonomy', taxonomy.slug, DEFAULT_QUERY);
    return {
      _terms: mostUsedTerms,
      showTerms: mostUsedTerms?.length >= MIN_MOST_USED_TERMS
    };
  }, [taxonomy.slug]);
  if (!showTerms) {
    return null;
  }
  const terms = unescapeTerms(_terms);
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
    className: "editor-post-taxonomies__flat-term-most-used",
    children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.BaseControl.VisualLabel, {
      as: "h3",
      className: "editor-post-taxonomies__flat-term-most-used-label",
      children: taxonomy.labels.most_used
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("ul", {
      role: "list",
      className: "editor-post-taxonomies__flat-term-most-used-list",
      children: terms.map(term => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("li", {
        children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
          variant: "link",
          onClick: () => onSelect(term),
          children: term.name
        })
      }, term.id))
    })]
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-taxonomies/flat-term-selector.js
/**
 * WordPress dependencies
 */









/**
 * Internal dependencies
 */




/**
 * Shared reference to an empty array for cases where it is important to avoid
 * returning a new array reference on every invocation.
 *
 * @type {Array<any>}
 */



const flat_term_selector_EMPTY_ARRAY = [];

/**
 * Module constants
 */
const MAX_TERMS_SUGGESTIONS = 20;
const flat_term_selector_DEFAULT_QUERY = {
  per_page: MAX_TERMS_SUGGESTIONS,
  _fields: 'id,name',
  context: 'view'
};
const isSameTermName = (termA, termB) => unescapeString(termA).toLowerCase() === unescapeString(termB).toLowerCase();
const termNamesToIds = (names, terms) => {
  return names.map(termName => terms.find(term => isSameTermName(term.name, termName))?.id).filter(id => id !== undefined);
};
function FlatTermSelector({
  slug
}) {
  var _taxonomy$labels$add_, _taxonomy$labels$sing2;
  const [values, setValues] = (0,external_wp_element_namespaceObject.useState)([]);
  const [search, setSearch] = (0,external_wp_element_namespaceObject.useState)('');
  const debouncedSearch = (0,external_wp_compose_namespaceObject.useDebounce)(setSearch, 500);
  const {
    terms,
    termIds,
    taxonomy,
    hasAssignAction,
    hasCreateAction,
    hasResolvedTerms
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    var _post$_links, _post$_links2;
    const {
      getCurrentPost,
      getEditedPostAttribute
    } = select(store_store);
    const {
      getEntityRecords,
      getTaxonomy,
      hasFinishedResolution
    } = select(external_wp_coreData_namespaceObject.store);
    const post = getCurrentPost();
    const _taxonomy = getTaxonomy(slug);
    const _termIds = _taxonomy ? getEditedPostAttribute(_taxonomy.rest_base) : flat_term_selector_EMPTY_ARRAY;
    const query = {
      ...flat_term_selector_DEFAULT_QUERY,
      include: _termIds.join(','),
      per_page: -1
    };
    return {
      hasCreateAction: _taxonomy ? (_post$_links = post._links?.['wp:action-create-' + _taxonomy.rest_base]) !== null && _post$_links !== void 0 ? _post$_links : false : false,
      hasAssignAction: _taxonomy ? (_post$_links2 = post._links?.['wp:action-assign-' + _taxonomy.rest_base]) !== null && _post$_links2 !== void 0 ? _post$_links2 : false : false,
      taxonomy: _taxonomy,
      termIds: _termIds,
      terms: _termIds.length ? getEntityRecords('taxonomy', slug, query) : flat_term_selector_EMPTY_ARRAY,
      hasResolvedTerms: hasFinishedResolution('getEntityRecords', ['taxonomy', slug, query])
    };
  }, [slug]);
  const {
    searchResults
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getEntityRecords
    } = select(external_wp_coreData_namespaceObject.store);
    return {
      searchResults: !!search ? getEntityRecords('taxonomy', slug, {
        ...flat_term_selector_DEFAULT_QUERY,
        search
      }) : flat_term_selector_EMPTY_ARRAY
    };
  }, [search, slug]);

  // Update terms state only after the selectors are resolved.
  // We're using this to avoid terms temporarily disappearing on slow networks
  // while core data makes REST API requests.
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    if (hasResolvedTerms) {
      const newValues = (terms !== null && terms !== void 0 ? terms : []).map(term => unescapeString(term.name));
      setValues(newValues);
    }
  }, [terms, hasResolvedTerms]);
  const suggestions = (0,external_wp_element_namespaceObject.useMemo)(() => {
    return (searchResults !== null && searchResults !== void 0 ? searchResults : []).map(term => unescapeString(term.name));
  }, [searchResults]);
  const {
    editPost
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  const {
    saveEntityRecord
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_coreData_namespaceObject.store);
  const {
    createErrorNotice
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_notices_namespaceObject.store);
  if (!hasAssignAction) {
    return null;
  }
  async function findOrCreateTerm(term) {
    try {
      const newTerm = await saveEntityRecord('taxonomy', slug, term, {
        throwOnError: true
      });
      return unescapeTerm(newTerm);
    } catch (error) {
      if (error.code !== 'term_exists') {
        throw error;
      }
      return {
        id: error.data.term_id,
        name: term.name
      };
    }
  }
  function onUpdateTerms(newTermIds) {
    editPost({
      [taxonomy.rest_base]: newTermIds
    });
  }
  function onChange(termNames) {
    const availableTerms = [...(terms !== null && terms !== void 0 ? terms : []), ...(searchResults !== null && searchResults !== void 0 ? searchResults : [])];
    const uniqueTerms = termNames.reduce((acc, name) => {
      if (!acc.some(n => n.toLowerCase() === name.toLowerCase())) {
        acc.push(name);
      }
      return acc;
    }, []);
    const newTermNames = uniqueTerms.filter(termName => !availableTerms.find(term => isSameTermName(term.name, termName)));

    // Optimistically update term values.
    // The selector will always re-fetch terms later.
    setValues(uniqueTerms);
    if (newTermNames.length === 0) {
      onUpdateTerms(termNamesToIds(uniqueTerms, availableTerms));
      return;
    }
    if (!hasCreateAction) {
      return;
    }
    Promise.all(newTermNames.map(termName => findOrCreateTerm({
      name: termName
    }))).then(newTerms => {
      const newAvailableTerms = availableTerms.concat(newTerms);
      onUpdateTerms(termNamesToIds(uniqueTerms, newAvailableTerms));
    }).catch(error => {
      createErrorNotice(error.message, {
        type: 'snackbar'
      });
      // In case of a failure, try assigning available terms.
      // This will invalidate the optimistic update.
      onUpdateTerms(termNamesToIds(uniqueTerms, availableTerms));
    });
  }
  function appendTerm(newTerm) {
    var _taxonomy$labels$sing;
    if (termIds.includes(newTerm.id)) {
      return;
    }
    const newTermIds = [...termIds, newTerm.id];
    const defaultName = slug === 'post_tag' ? (0,external_wp_i18n_namespaceObject.__)('Tag') : (0,external_wp_i18n_namespaceObject.__)('Term');
    const termAddedMessage = (0,external_wp_i18n_namespaceObject.sprintf)( /* translators: %s: term name. */
    (0,external_wp_i18n_namespaceObject._x)('%s added', 'term'), (_taxonomy$labels$sing = taxonomy?.labels?.singular_name) !== null && _taxonomy$labels$sing !== void 0 ? _taxonomy$labels$sing : defaultName);
    (0,external_wp_a11y_namespaceObject.speak)(termAddedMessage, 'assertive');
    onUpdateTerms(newTermIds);
  }
  const newTermLabel = (_taxonomy$labels$add_ = taxonomy?.labels?.add_new_item) !== null && _taxonomy$labels$add_ !== void 0 ? _taxonomy$labels$add_ : slug === 'post_tag' ? (0,external_wp_i18n_namespaceObject.__)('Add new tag') : (0,external_wp_i18n_namespaceObject.__)('Add new Term');
  const singularName = (_taxonomy$labels$sing2 = taxonomy?.labels?.singular_name) !== null && _taxonomy$labels$sing2 !== void 0 ? _taxonomy$labels$sing2 : slug === 'post_tag' ? (0,external_wp_i18n_namespaceObject.__)('Tag') : (0,external_wp_i18n_namespaceObject.__)('Term');
  const termAddedLabel = (0,external_wp_i18n_namespaceObject.sprintf)( /* translators: %s: term name. */
  (0,external_wp_i18n_namespaceObject._x)('%s added', 'term'), singularName);
  const termRemovedLabel = (0,external_wp_i18n_namespaceObject.sprintf)( /* translators: %s: term name. */
  (0,external_wp_i18n_namespaceObject._x)('%s removed', 'term'), singularName);
  const removeTermLabel = (0,external_wp_i18n_namespaceObject.sprintf)( /* translators: %s: term name. */
  (0,external_wp_i18n_namespaceObject._x)('Remove %s', 'term'), singularName);
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
    children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.FormTokenField, {
      __next40pxDefaultSize: true,
      value: values,
      suggestions: suggestions,
      onChange: onChange,
      onInputChange: debouncedSearch,
      maxSuggestions: MAX_TERMS_SUGGESTIONS,
      label: newTermLabel,
      messages: {
        added: termAddedLabel,
        removed: termRemovedLabel,
        remove: removeTermLabel
      }
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(MostUsedTerms, {
      taxonomy: taxonomy,
      onSelect: appendTerm
    })]
  });
}
/* harmony default export */ const flat_term_selector = ((0,external_wp_components_namespaceObject.withFilters)('editor.PostTaxonomyType')(FlatTermSelector));

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-publish-panel/maybe-tags-panel.js
/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */




const TagsPanel = () => {
  const panelBodyTitle = [(0,external_wp_i18n_namespaceObject.__)('Suggestion:'), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("span", {
    className: "editor-post-publish-panel__link",
    children: (0,external_wp_i18n_namespaceObject.__)('Add tags')
  }, "label")];
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.PanelBody, {
    initialOpen: false,
    title: panelBodyTitle,
    children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("p", {
      children: (0,external_wp_i18n_namespaceObject.__)('Tags help users and search engines navigate your site and find your content. Add a few keywords to describe your post.')
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(flat_term_selector, {
      slug: "post_tag"
    })]
  });
};
const MaybeTagsPanel = () => {
  const {
    hasTags,
    isPostTypeSupported
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const postType = select(store_store).getCurrentPostType();
    const tagsTaxonomy = select(external_wp_coreData_namespaceObject.store).getTaxonomy('post_tag');
    const _isPostTypeSupported = tagsTaxonomy?.types?.includes(postType);
    const areTagsFetched = tagsTaxonomy !== undefined;
    const tags = tagsTaxonomy && select(store_store).getEditedPostAttribute(tagsTaxonomy.rest_base);
    return {
      hasTags: !!tags?.length,
      isPostTypeSupported: areTagsFetched && _isPostTypeSupported
    };
  }, []);
  const [hadTagsWhenOpeningThePanel] = (0,external_wp_element_namespaceObject.useState)(hasTags);
  if (!isPostTypeSupported) {
    return null;
  }

  /*
   * We only want to show the tag panel if the post didn't have
   * any tags when the user hit the Publish button.
   *
   * We can't use the prop.hasTags because it'll change to true
   * if the user adds a new tag within the pre-publish panel.
   * This would force a re-render and a new prop.hasTags check,
   * hiding this panel and keeping the user from adding
   * more than one tag.
   */
  if (!hadTagsWhenOpeningThePanel) {
    return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(TagsPanel, {});
  }
  return null;
};
/* harmony default export */ const maybe_tags_panel = (MaybeTagsPanel);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-publish-panel/maybe-post-format-panel.js
/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */




const getSuggestion = (supportedFormats, suggestedPostFormat) => {
  const formats = POST_FORMATS.filter(format => supportedFormats?.includes(format.id));
  return formats.find(format => format.id === suggestedPostFormat);
};
const PostFormatSuggestion = ({
  suggestedPostFormat,
  suggestionText,
  onUpdatePostFormat
}) => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
  variant: "link",
  onClick: () => onUpdatePostFormat(suggestedPostFormat),
  children: suggestionText
});
function PostFormatPanel() {
  const {
    currentPostFormat,
    suggestion
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    var _select$getThemeSuppo;
    const {
      getEditedPostAttribute,
      getSuggestedPostFormat
    } = select(store_store);
    const supportedFormats = (_select$getThemeSuppo = select(external_wp_coreData_namespaceObject.store).getThemeSupports().formats) !== null && _select$getThemeSuppo !== void 0 ? _select$getThemeSuppo : [];
    return {
      currentPostFormat: getEditedPostAttribute('format'),
      suggestion: getSuggestion(supportedFormats, getSuggestedPostFormat())
    };
  }, []);
  const {
    editPost
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  const onUpdatePostFormat = format => editPost({
    format
  });
  const panelBodyTitle = [(0,external_wp_i18n_namespaceObject.__)('Suggestion:'), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("span", {
    className: "editor-post-publish-panel__link",
    children: (0,external_wp_i18n_namespaceObject.__)('Use a post format')
  }, "label")];
  if (!suggestion || suggestion.id === currentPostFormat) {
    return null;
  }
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.PanelBody, {
    initialOpen: false,
    title: panelBodyTitle,
    children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("p", {
      children: (0,external_wp_i18n_namespaceObject.__)('Your theme uses post formats to highlight different kinds of content, like images or videos. Apply a post format to see this special styling.')
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("p", {
      children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PostFormatSuggestion, {
        onUpdatePostFormat: onUpdatePostFormat,
        suggestedPostFormat: suggestion.id,
        suggestionText: (0,external_wp_i18n_namespaceObject.sprintf)( /* translators: %s: post format */
        (0,external_wp_i18n_namespaceObject.__)('Apply the "%1$s" format.'), suggestion.caption)
      })
    })]
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-taxonomies/hierarchical-term-selector.js
/**
 * WordPress dependencies
 */










/**
 * Internal dependencies
 */



/**
 * Module Constants
 */


const hierarchical_term_selector_DEFAULT_QUERY = {
  per_page: -1,
  orderby: 'name',
  order: 'asc',
  _fields: 'id,name,parent',
  context: 'view'
};
const MIN_TERMS_COUNT_FOR_FILTER = 8;
const hierarchical_term_selector_EMPTY_ARRAY = [];

/**
 * Sort Terms by Selected.
 *
 * @param {Object[]} termsTree Array of terms in tree format.
 * @param {number[]} terms     Selected terms.
 *
 * @return {Object[]} Sorted array of terms.
 */
function sortBySelected(termsTree, terms) {
  const treeHasSelection = termTree => {
    if (terms.indexOf(termTree.id) !== -1) {
      return true;
    }
    if (undefined === termTree.children) {
      return false;
    }
    return termTree.children.map(treeHasSelection).filter(child => child).length > 0;
  };
  const termOrChildIsSelected = (termA, termB) => {
    const termASelected = treeHasSelection(termA);
    const termBSelected = treeHasSelection(termB);
    if (termASelected === termBSelected) {
      return 0;
    }
    if (termASelected && !termBSelected) {
      return -1;
    }
    if (!termASelected && termBSelected) {
      return 1;
    }
    return 0;
  };
  const newTermTree = [...termsTree];
  newTermTree.sort(termOrChildIsSelected);
  return newTermTree;
}

/**
 * Find term by parent id or name.
 *
 * @param {Object[]}      terms  Array of Terms.
 * @param {number|string} parent id.
 * @param {string}        name   Term name.
 * @return {Object} Term object.
 */
function findTerm(terms, parent, name) {
  return terms.find(term => {
    return (!term.parent && !parent || parseInt(term.parent) === parseInt(parent)) && term.name.toLowerCase() === name.toLowerCase();
  });
}

/**
 * Get filter matcher function.
 *
 * @param {string} filterValue Filter value.
 * @return {(function(Object): (Object|boolean))} Matcher function.
 */
function getFilterMatcher(filterValue) {
  const matchTermsForFilter = originalTerm => {
    if ('' === filterValue) {
      return originalTerm;
    }

    // Shallow clone, because we'll be filtering the term's children and
    // don't want to modify the original term.
    const term = {
      ...originalTerm
    };

    // Map and filter the children, recursive so we deal with grandchildren
    // and any deeper levels.
    if (term.children.length > 0) {
      term.children = term.children.map(matchTermsForFilter).filter(child => child);
    }

    // If the term's name contains the filterValue, or it has children
    // (i.e. some child matched at some point in the tree) then return it.
    if (-1 !== term.name.toLowerCase().indexOf(filterValue.toLowerCase()) || term.children.length > 0) {
      return term;
    }

    // Otherwise, return false. After mapping, the list of terms will need
    // to have false values filtered out.
    return false;
  };
  return matchTermsForFilter;
}

/**
 * Hierarchical term selector.
 *
 * @param {Object} props      Component props.
 * @param {string} props.slug Taxonomy slug.
 * @return {Element}        Hierarchical term selector component.
 */
function HierarchicalTermSelector({
  slug
}) {
  var _taxonomy$labels$sear, _taxonomy$name;
  const [adding, setAdding] = (0,external_wp_element_namespaceObject.useState)(false);
  const [formName, setFormName] = (0,external_wp_element_namespaceObject.useState)('');
  /**
   * @type {[number|'', Function]}
   */
  const [formParent, setFormParent] = (0,external_wp_element_namespaceObject.useState)('');
  const [showForm, setShowForm] = (0,external_wp_element_namespaceObject.useState)(false);
  const [filterValue, setFilterValue] = (0,external_wp_element_namespaceObject.useState)('');
  const [filteredTermsTree, setFilteredTermsTree] = (0,external_wp_element_namespaceObject.useState)([]);
  const debouncedSpeak = (0,external_wp_compose_namespaceObject.useDebounce)(external_wp_a11y_namespaceObject.speak, 500);
  const {
    hasCreateAction,
    hasAssignAction,
    terms,
    loading,
    availableTerms,
    taxonomy
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    var _post$_links, _post$_links2;
    const {
      getCurrentPost,
      getEditedPostAttribute
    } = select(store_store);
    const {
      getTaxonomy,
      getEntityRecords,
      isResolving
    } = select(external_wp_coreData_namespaceObject.store);
    const _taxonomy = getTaxonomy(slug);
    const post = getCurrentPost();
    return {
      hasCreateAction: _taxonomy ? (_post$_links = post._links?.['wp:action-create-' + _taxonomy.rest_base]) !== null && _post$_links !== void 0 ? _post$_links : false : false,
      hasAssignAction: _taxonomy ? (_post$_links2 = post._links?.['wp:action-assign-' + _taxonomy.rest_base]) !== null && _post$_links2 !== void 0 ? _post$_links2 : false : false,
      terms: _taxonomy ? getEditedPostAttribute(_taxonomy.rest_base) : hierarchical_term_selector_EMPTY_ARRAY,
      loading: isResolving('getEntityRecords', ['taxonomy', slug, hierarchical_term_selector_DEFAULT_QUERY]),
      availableTerms: getEntityRecords('taxonomy', slug, hierarchical_term_selector_DEFAULT_QUERY) || hierarchical_term_selector_EMPTY_ARRAY,
      taxonomy: _taxonomy
    };
  }, [slug]);
  const {
    editPost
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  const {
    saveEntityRecord
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_coreData_namespaceObject.store);
  const availableTermsTree = (0,external_wp_element_namespaceObject.useMemo)(() => sortBySelected(buildTermsTree(availableTerms), terms),
  // Remove `terms` from the dependency list to avoid reordering every time
  // checking or unchecking a term.
  [availableTerms]);
  const {
    createErrorNotice
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_notices_namespaceObject.store);
  if (!hasAssignAction) {
    return null;
  }

  /**
   * Append new term.
   *
   * @param {Object} term Term object.
   * @return {Promise} A promise that resolves to save term object.
   */
  const addTerm = term => {
    return saveEntityRecord('taxonomy', slug, term, {
      throwOnError: true
    });
  };

  /**
   * Update terms for post.
   *
   * @param {number[]} termIds Term ids.
   */
  const onUpdateTerms = termIds => {
    editPost({
      [taxonomy.rest_base]: termIds
    });
  };

  /**
   * Handler for checking term.
   *
   * @param {number} termId
   */
  const onChange = termId => {
    const hasTerm = terms.includes(termId);
    const newTerms = hasTerm ? terms.filter(id => id !== termId) : [...terms, termId];
    onUpdateTerms(newTerms);
  };
  const onChangeFormName = value => {
    setFormName(value);
  };

  /**
   * Handler for changing form parent.
   *
   * @param {number|''} parentId Parent post id.
   */
  const onChangeFormParent = parentId => {
    setFormParent(parentId);
  };
  const onToggleForm = () => {
    setShowForm(!showForm);
  };
  const onAddTerm = async event => {
    var _taxonomy$labels$sing;
    event.preventDefault();
    if (formName === '' || adding) {
      return;
    }

    // Check if the term we are adding already exists.
    const existingTerm = findTerm(availableTerms, formParent, formName);
    if (existingTerm) {
      // If the term we are adding exists but is not selected select it.
      if (!terms.some(term => term === existingTerm.id)) {
        onUpdateTerms([...terms, existingTerm.id]);
      }
      setFormName('');
      setFormParent('');
      return;
    }
    setAdding(true);
    let newTerm;
    try {
      newTerm = await addTerm({
        name: formName,
        parent: formParent ? formParent : undefined
      });
    } catch (error) {
      createErrorNotice(error.message, {
        type: 'snackbar'
      });
      return;
    }
    const defaultName = slug === 'category' ? (0,external_wp_i18n_namespaceObject.__)('Category') : (0,external_wp_i18n_namespaceObject.__)('Term');
    const termAddedMessage = (0,external_wp_i18n_namespaceObject.sprintf)( /* translators: %s: taxonomy name */
    (0,external_wp_i18n_namespaceObject._x)('%s added', 'term'), (_taxonomy$labels$sing = taxonomy?.labels?.singular_name) !== null && _taxonomy$labels$sing !== void 0 ? _taxonomy$labels$sing : defaultName);
    (0,external_wp_a11y_namespaceObject.speak)(termAddedMessage, 'assertive');
    setAdding(false);
    setFormName('');
    setFormParent('');
    onUpdateTerms([...terms, newTerm.id]);
  };
  const setFilter = value => {
    const newFilteredTermsTree = availableTermsTree.map(getFilterMatcher(value)).filter(term => term);
    const getResultCount = termsTree => {
      let count = 0;
      for (let i = 0; i < termsTree.length; i++) {
        count++;
        if (undefined !== termsTree[i].children) {
          count += getResultCount(termsTree[i].children);
        }
      }
      return count;
    };
    setFilterValue(value);
    setFilteredTermsTree(newFilteredTermsTree);
    const resultCount = getResultCount(newFilteredTermsTree);
    const resultsFoundMessage = (0,external_wp_i18n_namespaceObject.sprintf)( /* translators: %d: number of results */
    (0,external_wp_i18n_namespaceObject._n)('%d result found.', '%d results found.', resultCount), resultCount);
    debouncedSpeak(resultsFoundMessage, 'assertive');
  };
  const renderTerms = renderedTerms => {
    return renderedTerms.map(term => {
      return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
        className: "editor-post-taxonomies__hierarchical-terms-choice",
        children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.CheckboxControl, {
          __nextHasNoMarginBottom: true,
          checked: terms.indexOf(term.id) !== -1,
          onChange: () => {
            const termId = parseInt(term.id, 10);
            onChange(termId);
          },
          label: (0,external_wp_htmlEntities_namespaceObject.decodeEntities)(term.name)
        }), !!term.children.length && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
          className: "editor-post-taxonomies__hierarchical-terms-subchoices",
          children: renderTerms(term.children)
        })]
      }, term.id);
    });
  };
  const labelWithFallback = (labelProperty, fallbackIsCategory, fallbackIsNotCategory) => {
    var _taxonomy$labels$labe;
    return (_taxonomy$labels$labe = taxonomy?.labels?.[labelProperty]) !== null && _taxonomy$labels$labe !== void 0 ? _taxonomy$labels$labe : slug === 'category' ? fallbackIsCategory : fallbackIsNotCategory;
  };
  const newTermButtonLabel = labelWithFallback('add_new_item', (0,external_wp_i18n_namespaceObject.__)('Add new category'), (0,external_wp_i18n_namespaceObject.__)('Add new term'));
  const newTermLabel = labelWithFallback('new_item_name', (0,external_wp_i18n_namespaceObject.__)('Add new category'), (0,external_wp_i18n_namespaceObject.__)('Add new term'));
  const parentSelectLabel = labelWithFallback('parent_item', (0,external_wp_i18n_namespaceObject.__)('Parent Category'), (0,external_wp_i18n_namespaceObject.__)('Parent Term'));
  const noParentOption = `— ${parentSelectLabel} —`;
  const newTermSubmitLabel = newTermButtonLabel;
  const filterLabel = (_taxonomy$labels$sear = taxonomy?.labels?.search_items) !== null && _taxonomy$labels$sear !== void 0 ? _taxonomy$labels$sear : (0,external_wp_i18n_namespaceObject.__)('Search Terms');
  const groupLabel = (_taxonomy$name = taxonomy?.name) !== null && _taxonomy$name !== void 0 ? _taxonomy$name : (0,external_wp_i18n_namespaceObject.__)('Terms');
  const showFilter = availableTerms.length >= MIN_TERMS_COUNT_FOR_FILTER;
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.Flex, {
    direction: "column",
    gap: "4",
    children: [showFilter && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.TextControl, {
      __nextHasNoMarginBottom: true,
      label: filterLabel,
      value: filterValue,
      onChange: setFilter
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
      className: "editor-post-taxonomies__hierarchical-terms-list",
      tabIndex: "0",
      role: "group",
      "aria-label": groupLabel,
      children: renderTerms('' !== filterValue ? filteredTermsTree : availableTermsTree)
    }), !loading && hasCreateAction && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.FlexItem, {
      children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
        onClick: onToggleForm,
        className: "editor-post-taxonomies__hierarchical-terms-add",
        "aria-expanded": showForm,
        variant: "link",
        children: newTermButtonLabel
      })
    }), showForm && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("form", {
      onSubmit: onAddTerm,
      children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.Flex, {
        direction: "column",
        gap: "4",
        children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.TextControl, {
          __next40pxDefaultSize: true,
          __nextHasNoMarginBottom: true,
          className: "editor-post-taxonomies__hierarchical-terms-input",
          label: newTermLabel,
          value: formName,
          onChange: onChangeFormName,
          required: true
        }), !!availableTerms.length && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.TreeSelect, {
          __next40pxDefaultSize: true,
          __nextHasNoMarginBottom: true,
          label: parentSelectLabel,
          noOptionLabel: noParentOption,
          onChange: onChangeFormParent,
          selectedId: formParent,
          tree: availableTermsTree
        }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.FlexItem, {
          children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
            __next40pxDefaultSize: true,
            variant: "secondary",
            type: "submit",
            className: "editor-post-taxonomies__hierarchical-terms-submit",
            children: newTermSubmitLabel
          })
        })]
      })
    })]
  });
}
/* harmony default export */ const hierarchical_term_selector = ((0,external_wp_components_namespaceObject.withFilters)('editor.PostTaxonomyType')(HierarchicalTermSelector));

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-publish-panel/maybe-category-panel.js
/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */




function MaybeCategoryPanel() {
  const hasNoCategory = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const postType = select(store_store).getCurrentPostType();
    const {
      canUser,
      getEntityRecord,
      getTaxonomy
    } = select(external_wp_coreData_namespaceObject.store);
    const categoriesTaxonomy = getTaxonomy('category');
    const defaultCategoryId = canUser('read', 'settings') ? getEntityRecord('root', 'site')?.default_category : undefined;
    const defaultCategory = defaultCategoryId ? getEntityRecord('taxonomy', 'category', defaultCategoryId) : undefined;
    const postTypeSupportsCategories = categoriesTaxonomy && categoriesTaxonomy.types.some(type => type === postType);
    const categories = categoriesTaxonomy && select(store_store).getEditedPostAttribute(categoriesTaxonomy.rest_base);

    // This boolean should return true if everything is loaded
    // ( categoriesTaxonomy, defaultCategory )
    // and the post has not been assigned a category different than "uncategorized".
    return !!categoriesTaxonomy && !!defaultCategory && postTypeSupportsCategories && (categories?.length === 0 || categories?.length === 1 && defaultCategory?.id === categories[0]);
  }, []);
  const [shouldShowPanel, setShouldShowPanel] = (0,external_wp_element_namespaceObject.useState)(false);
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    // We use state to avoid hiding the panel if the user edits the categories
    // and adds one within the panel itself (while visible).
    if (hasNoCategory) {
      setShouldShowPanel(true);
    }
  }, [hasNoCategory]);
  if (!shouldShowPanel) {
    return null;
  }
  const panelBodyTitle = [(0,external_wp_i18n_namespaceObject.__)('Suggestion:'), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("span", {
    className: "editor-post-publish-panel__link",
    children: (0,external_wp_i18n_namespaceObject.__)('Assign a category')
  }, "label")];
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.PanelBody, {
    initialOpen: false,
    title: panelBodyTitle,
    children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("p", {
      children: (0,external_wp_i18n_namespaceObject.__)('Categories provide a helpful way to group related posts together and to quickly tell readers what a post is about.')
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(hierarchical_term_selector, {
      slug: "category"
    })]
  });
}
/* harmony default export */ const maybe_category_panel = (MaybeCategoryPanel);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-publish-panel/maybe-upload-media.js
/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */



function flattenBlocks(blocks) {
  const result = [];
  blocks.forEach(block => {
    result.push(block);
    result.push(...flattenBlocks(block.innerBlocks));
  });
  return result;
}
function Image(block) {
  const {
    selectBlock
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_blockEditor_namespaceObject.store);
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.__unstableMotion.img, {
    tabIndex: 0,
    role: "button",
    "aria-label": (0,external_wp_i18n_namespaceObject.__)('Select image block.'),
    onClick: () => {
      selectBlock(block.clientId);
    },
    onKeyDown: event => {
      if (event.key === 'Enter' || event.key === ' ') {
        selectBlock(block.clientId);
        event.preventDefault();
      }
    },
    alt: block.attributes.alt,
    src: block.attributes.url,
    animate: {
      opacity: 1
    },
    exit: {
      opacity: 0,
      scale: 0
    },
    style: {
      width: '36px',
      height: '36px',
      objectFit: 'cover',
      borderRadius: '2px',
      cursor: 'pointer'
    },
    whileHover: {
      scale: 1.08
    }
  }, block.clientId);
}
function maybe_upload_media_PostFormatPanel() {
  const [isUploading, setIsUploading] = (0,external_wp_element_namespaceObject.useState)(false);
  const {
    editorBlocks,
    mediaUpload
  } = (0,external_wp_data_namespaceObject.useSelect)(select => ({
    editorBlocks: select(store_store).getEditorBlocks(),
    mediaUpload: select(external_wp_blockEditor_namespaceObject.store).getSettings().mediaUpload
  }), []);
  const externalImages = flattenBlocks(editorBlocks).filter(block => block.name === 'core/image' && block.attributes.url && !block.attributes.id);
  const {
    updateBlockAttributes
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_blockEditor_namespaceObject.store);
  if (!mediaUpload || !externalImages.length) {
    return null;
  }
  const panelBodyTitle = [(0,external_wp_i18n_namespaceObject.__)('Suggestion:'), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("span", {
    className: "editor-post-publish-panel__link",
    children: (0,external_wp_i18n_namespaceObject.__)('External media')
  }, "label")];
  function uploadImages() {
    setIsUploading(true);
    Promise.all(externalImages.map(image => window.fetch(image.attributes.url.includes('?') ? image.attributes.url : image.attributes.url + '?').then(response => response.blob()).then(blob => new Promise((resolve, reject) => {
      mediaUpload({
        filesList: [blob],
        onFileChange: ([media]) => {
          if ((0,external_wp_blob_namespaceObject.isBlobURL)(media.url)) {
            return;
          }
          updateBlockAttributes(image.clientId, {
            id: media.id,
            url: media.url
          });
          resolve();
        },
        onError() {
          reject();
        }
      });
    })))).finally(() => {
      setIsUploading(false);
    });
  }
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.PanelBody, {
    initialOpen: true,
    title: panelBodyTitle,
    children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("p", {
      children: (0,external_wp_i18n_namespaceObject.__)('Upload external images to the Media Library. Images from different domains may load slowly, display incorrectly, or be removed unexpectedly.')
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
      style: {
        display: 'inline-flex',
        flexWrap: 'wrap',
        gap: '8px'
      },
      children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.__unstableAnimatePresence, {
        children: externalImages.map(image => {
          return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(Image, {
            ...image
          }, image.clientId);
        })
      }), isUploading ? /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Spinner, {}) : /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
        variant: "primary",
        onClick: uploadImages,
        children: (0,external_wp_i18n_namespaceObject.__)('Upload')
      })]
    })]
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-publish-panel/prepublish.js
/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */












function PostPublishPanelPrepublish({
  children
}) {
  const {
    isBeingScheduled,
    isRequestingSiteIcon,
    hasPublishAction,
    siteIconUrl,
    siteTitle,
    siteHome
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    var _getCurrentPost$_link;
    const {
      getCurrentPost,
      isEditedPostBeingScheduled
    } = select(store_store);
    const {
      getEntityRecord,
      isResolving
    } = select(external_wp_coreData_namespaceObject.store);
    const siteData = getEntityRecord('root', '__unstableBase', undefined) || {};
    return {
      hasPublishAction: (_getCurrentPost$_link = getCurrentPost()._links?.['wp:action-publish']) !== null && _getCurrentPost$_link !== void 0 ? _getCurrentPost$_link : false,
      isBeingScheduled: isEditedPostBeingScheduled(),
      isRequestingSiteIcon: isResolving('getEntityRecord', ['root', '__unstableBase', undefined]),
      siteIconUrl: siteData.site_icon_url,
      siteTitle: siteData.name,
      siteHome: siteData.home && (0,external_wp_url_namespaceObject.filterURLForDisplay)(siteData.home)
    };
  }, []);
  let siteIcon = /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Icon, {
    className: "components-site-icon",
    size: "36px",
    icon: library_wordpress
  });
  if (siteIconUrl) {
    siteIcon = /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("img", {
      alt: (0,external_wp_i18n_namespaceObject.__)('Site Icon'),
      className: "components-site-icon",
      src: siteIconUrl
    });
  }
  if (isRequestingSiteIcon) {
    siteIcon = null;
  }
  let prePublishTitle, prePublishBodyText;
  if (!hasPublishAction) {
    prePublishTitle = (0,external_wp_i18n_namespaceObject.__)('Are you ready to submit for review?');
    prePublishBodyText = (0,external_wp_i18n_namespaceObject.__)('When you’re ready, submit your work for review, and an Editor will be able to approve it for you.');
  } else if (isBeingScheduled) {
    prePublishTitle = (0,external_wp_i18n_namespaceObject.__)('Are you ready to schedule?');
    prePublishBodyText = (0,external_wp_i18n_namespaceObject.__)('Your work will be published at the specified date and time.');
  } else {
    prePublishTitle = (0,external_wp_i18n_namespaceObject.__)('Are you ready to publish?');
    prePublishBodyText = (0,external_wp_i18n_namespaceObject.__)('Double-check your settings before publishing.');
  }
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
    className: "editor-post-publish-panel__prepublish",
    children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
      children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("strong", {
        children: prePublishTitle
      })
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("p", {
      children: prePublishBodyText
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
      className: "components-site-card",
      children: [siteIcon, /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
        className: "components-site-info",
        children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("span", {
          className: "components-site-name",
          children: (0,external_wp_htmlEntities_namespaceObject.decodeEntities)(siteTitle) || (0,external_wp_i18n_namespaceObject.__)('(Untitled)')
        }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("span", {
          className: "components-site-home",
          children: siteHome
        })]
      })]
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(maybe_upload_media_PostFormatPanel, {}), hasPublishAction && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
      children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.PanelBody, {
        initialOpen: false,
        title: [(0,external_wp_i18n_namespaceObject.__)('Visibility:'), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("span", {
          className: "editor-post-publish-panel__link",
          children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PostVisibilityLabel, {})
        }, "label")],
        children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PostVisibility, {})
      }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.PanelBody, {
        initialOpen: false,
        title: [(0,external_wp_i18n_namespaceObject.__)('Publish:'), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("span", {
          className: "editor-post-publish-panel__link",
          children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PostScheduleLabel, {})
        }, "label")],
        children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PostSchedule, {})
      })]
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PostFormatPanel, {}), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(maybe_tags_panel, {}), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(maybe_category_panel, {}), children]
  });
}
/* harmony default export */ const prepublish = (PostPublishPanelPrepublish);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-publish-panel/postpublish.js
/**
 * WordPress dependencies
 */









/**
 * Internal dependencies
 */





const POSTNAME = '%postname%';
const PAGENAME = '%pagename%';

/**
 * Returns URL for a future post.
 *
 * @param {Object} post Post object.
 *
 * @return {string} PostPublish URL.
 */

const getFuturePostUrl = post => {
  const {
    slug
  } = post;
  if (post.permalink_template.includes(POSTNAME)) {
    return post.permalink_template.replace(POSTNAME, slug);
  }
  if (post.permalink_template.includes(PAGENAME)) {
    return post.permalink_template.replace(PAGENAME, slug);
  }
  return post.permalink_template;
};
function postpublish_CopyButton({
  text,
  onCopy,
  children
}) {
  const ref = (0,external_wp_compose_namespaceObject.useCopyToClipboard)(text, onCopy);
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
    variant: "secondary",
    ref: ref,
    children: children
  });
}
class PostPublishPanelPostpublish extends external_wp_element_namespaceObject.Component {
  constructor() {
    super(...arguments);
    this.state = {
      showCopyConfirmation: false
    };
    this.onCopy = this.onCopy.bind(this);
    this.onSelectInput = this.onSelectInput.bind(this);
    this.postLink = (0,external_wp_element_namespaceObject.createRef)();
  }
  componentDidMount() {
    if (this.props.focusOnMount) {
      this.postLink.current.focus();
    }
  }
  componentWillUnmount() {
    clearTimeout(this.dismissCopyConfirmation);
  }
  onCopy() {
    this.setState({
      showCopyConfirmation: true
    });
    clearTimeout(this.dismissCopyConfirmation);
    this.dismissCopyConfirmation = setTimeout(() => {
      this.setState({
        showCopyConfirmation: false
      });
    }, 4000);
  }
  onSelectInput(event) {
    event.target.select();
  }
  render() {
    const {
      children,
      isScheduled,
      post,
      postType
    } = this.props;
    const postLabel = postType?.labels?.singular_name;
    const viewPostLabel = postType?.labels?.view_item;
    const addNewPostLabel = postType?.labels?.add_new_item;
    const link = post.status === 'future' ? getFuturePostUrl(post) : post.link;
    const addLink = (0,external_wp_url_namespaceObject.addQueryArgs)('post-new.php', {
      post_type: post.type
    });
    const postPublishNonLinkHeader = isScheduled ? /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
      children: [(0,external_wp_i18n_namespaceObject.__)('is now scheduled. It will go live on'), ' ', /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PostScheduleLabel, {}), "."]
    }) : (0,external_wp_i18n_namespaceObject.__)('is now live.');
    return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
      className: "post-publish-panel__postpublish",
      children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.PanelBody, {
        className: "post-publish-panel__postpublish-header",
        children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("a", {
          ref: this.postLink,
          href: link,
          children: (0,external_wp_htmlEntities_namespaceObject.decodeEntities)(post.title) || (0,external_wp_i18n_namespaceObject.__)('(no title)')
        }), ' ', postPublishNonLinkHeader]
      }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.PanelBody, {
        children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("p", {
          className: "post-publish-panel__postpublish-subheader",
          children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("strong", {
            children: (0,external_wp_i18n_namespaceObject.__)('What’s next?')
          })
        }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
          className: "post-publish-panel__postpublish-post-address-container",
          children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.TextControl, {
            __nextHasNoMarginBottom: true,
            className: "post-publish-panel__postpublish-post-address",
            readOnly: true,
            label: (0,external_wp_i18n_namespaceObject.sprintf)( /* translators: %s: post type singular name */
            (0,external_wp_i18n_namespaceObject.__)('%s address'), postLabel),
            value: (0,external_wp_url_namespaceObject.safeDecodeURIComponent)(link),
            onFocus: this.onSelectInput
          }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
            className: "post-publish-panel__postpublish-post-address__copy-button-wrap",
            children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(postpublish_CopyButton, {
              text: link,
              onCopy: this.onCopy,
              children: this.state.showCopyConfirmation ? (0,external_wp_i18n_namespaceObject.__)('Copied!') : (0,external_wp_i18n_namespaceObject.__)('Copy')
            })
          })]
        }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
          className: "post-publish-panel__postpublish-buttons",
          children: [!isScheduled && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
            variant: "primary",
            href: link,
            children: viewPostLabel
          }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
            variant: isScheduled ? 'primary' : 'secondary',
            href: addLink,
            children: addNewPostLabel
          })]
        })]
      }), children]
    });
  }
}
/* harmony default export */ const postpublish = ((0,external_wp_data_namespaceObject.withSelect)(select => {
  const {
    getEditedPostAttribute,
    getCurrentPost,
    isCurrentPostScheduled
  } = select(store_store);
  const {
    getPostType
  } = select(external_wp_coreData_namespaceObject.store);
  return {
    post: getCurrentPost(),
    postType: getPostType(getEditedPostAttribute('type')),
    isScheduled: isCurrentPostScheduled()
  };
})(PostPublishPanelPostpublish));

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-publish-panel/index.js
/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */







class PostPublishPanel extends external_wp_element_namespaceObject.Component {
  constructor() {
    super(...arguments);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidUpdate(prevProps) {
    // Automatically collapse the publish sidebar when a post
    // is published and the user makes an edit.
    if (prevProps.isPublished && !this.props.isSaving && this.props.isDirty) {
      this.props.onClose();
    }
  }
  onSubmit() {
    const {
      onClose,
      hasPublishAction,
      isPostTypeViewable
    } = this.props;
    if (!hasPublishAction || !isPostTypeViewable) {
      onClose();
    }
  }
  render() {
    const {
      forceIsDirty,
      isBeingScheduled,
      isPublished,
      isPublishSidebarEnabled,
      isScheduled,
      isSaving,
      isSavingNonPostEntityChanges,
      onClose,
      onTogglePublishSidebar,
      PostPublishExtension,
      PrePublishExtension,
      ...additionalProps
    } = this.props;
    const {
      hasPublishAction,
      isDirty,
      isPostTypeViewable,
      ...propsForPanel
    } = additionalProps;
    const isPublishedOrScheduled = isPublished || isScheduled && isBeingScheduled;
    const isPrePublish = !isPublishedOrScheduled && !isSaving;
    const isPostPublish = isPublishedOrScheduled && !isSaving;
    return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
      className: "editor-post-publish-panel",
      ...propsForPanel,
      children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
        className: "editor-post-publish-panel__header",
        children: isPostPublish ? /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
          onClick: onClose,
          icon: close_small,
          label: (0,external_wp_i18n_namespaceObject.__)('Close panel')
        }) : /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
          children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
            className: "editor-post-publish-panel__header-publish-button",
            children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(post_publish_button, {
              focusOnMount: true,
              onSubmit: this.onSubmit,
              forceIsDirty: forceIsDirty
            })
          }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
            className: "editor-post-publish-panel__header-cancel-button",
            children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
              disabled: isSavingNonPostEntityChanges,
              onClick: onClose,
              variant: "secondary",
              size: "compact",
              children: (0,external_wp_i18n_namespaceObject.__)('Cancel')
            })
          })]
        })
      }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
        className: "editor-post-publish-panel__content",
        children: [isPrePublish && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(prepublish, {
          children: PrePublishExtension && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PrePublishExtension, {})
        }), isPostPublish && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(postpublish, {
          focusOnMount: true,
          children: PostPublishExtension && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PostPublishExtension, {})
        }), isSaving && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Spinner, {})]
      }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
        className: "editor-post-publish-panel__footer",
        children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.CheckboxControl, {
          __nextHasNoMarginBottom: true,
          label: (0,external_wp_i18n_namespaceObject.__)('Always show pre-publish checks.'),
          checked: isPublishSidebarEnabled,
          onChange: onTogglePublishSidebar
        })
      })]
    });
  }
}
/* harmony default export */ const post_publish_panel = ((0,external_wp_compose_namespaceObject.compose)([(0,external_wp_data_namespaceObject.withSelect)(select => {
  var _getCurrentPost$_link;
  const {
    getPostType
  } = select(external_wp_coreData_namespaceObject.store);
  const {
    getCurrentPost,
    getEditedPostAttribute,
    isCurrentPostPublished,
    isCurrentPostScheduled,
    isEditedPostBeingScheduled,
    isEditedPostDirty,
    isAutosavingPost,
    isSavingPost,
    isSavingNonPostEntityChanges
  } = select(store_store);
  const {
    isPublishSidebarEnabled
  } = select(store_store);
  const postType = getPostType(getEditedPostAttribute('type'));
  return {
    hasPublishAction: (_getCurrentPost$_link = getCurrentPost()._links?.['wp:action-publish']) !== null && _getCurrentPost$_link !== void 0 ? _getCurrentPost$_link : false,
    isPostTypeViewable: postType?.viewable,
    isBeingScheduled: isEditedPostBeingScheduled(),
    isDirty: isEditedPostDirty(),
    isPublished: isCurrentPostPublished(),
    isPublishSidebarEnabled: isPublishSidebarEnabled(),
    isSaving: isSavingPost() && !isAutosavingPost(),
    isSavingNonPostEntityChanges: isSavingNonPostEntityChanges(),
    isScheduled: isCurrentPostScheduled()
  };
}), (0,external_wp_data_namespaceObject.withDispatch)((dispatch, {
  isPublishSidebarEnabled
}) => {
  const {
    disablePublishSidebar,
    enablePublishSidebar
  } = dispatch(store_store);
  return {
    onTogglePublishSidebar: () => {
      if (isPublishSidebarEnabled) {
        disablePublishSidebar();
      } else {
        enablePublishSidebar();
      }
    }
  };
}), external_wp_components_namespaceObject.withFocusReturn, external_wp_components_namespaceObject.withConstrainedTabbing])(PostPublishPanel));

;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/cloud-upload.js
/**
 * WordPress dependencies
 */


const cloudUpload = /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.Path, {
    d: "M17.3 10.1c0-2.5-2.1-4.4-4.8-4.4-2.2 0-4.1 1.4-4.6 3.3h-.2C5.7 9 4 10.7 4 12.8c0 2.1 1.7 3.8 3.7 3.8h9c1.8 0 3.2-1.5 3.2-3.3.1-1.6-1.1-2.9-2.6-3.2zm-.5 5.1h-4v-2.4L14 14l1-1-3-3-3 3 1 1 1.2-1.2v2.4H7.7c-1.2 0-2.2-1.1-2.2-2.3s1-2.4 2.2-2.4H9l.3-1.1c.4-1.3 1.7-2.2 3.2-2.2 1.8 0 3.3 1.3 3.3 2.9v1.3l1.3.2c.8.1 1.4.9 1.4 1.8 0 1-.8 1.8-1.7 1.8z"
  })
});
/* harmony default export */ const cloud_upload = (cloudUpload);

;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/icon/index.js
/**
 * WordPress dependencies
 */


/** @typedef {{icon: JSX.Element, size?: number} & import('@wordpress/primitives').SVGProps} IconProps */

/**
 * Return an SVG icon.
 *
 * @param {IconProps}                                 props icon is the SVG component to render
 *                                                          size is a number specifiying the icon size in pixels
 *                                                          Other props will be passed to wrapped SVG component
 * @param {import('react').ForwardedRef<HTMLElement>} ref   The forwarded ref to the SVG element.
 *
 * @return {JSX.Element}  Icon component
 */
function Icon({
  icon,
  size = 24,
  ...props
}, ref) {
  return (0,external_wp_element_namespaceObject.cloneElement)(icon, {
    width: size,
    height: size,
    ...props,
    ref
  });
}
/* harmony default export */ const icon = ((0,external_wp_element_namespaceObject.forwardRef)(Icon));

;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/cloud.js
/**
 * WordPress dependencies
 */


const cloud = /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.Path, {
    d: "M17.3 10.1c0-2.5-2.1-4.4-4.8-4.4-2.2 0-4.1 1.4-4.6 3.3h-.2C5.7 9 4 10.7 4 12.8c0 2.1 1.7 3.8 3.7 3.8h9c1.8 0 3.2-1.5 3.2-3.3.1-1.6-1.1-2.9-2.6-3.2zm-.5 5.1h-9c-1.2 0-2.2-1.1-2.2-2.3s1-2.4 2.2-2.4h1.3l.3-1.1c.4-1.3 1.7-2.2 3.2-2.2 1.8 0 3.3 1.3 3.3 2.9v1.3l1.3.2c.8.1 1.4.9 1.4 1.8-.1 1-.9 1.8-1.8 1.8z"
  })
});
/* harmony default export */ const library_cloud = (cloud);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-saved-state/index.js
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
 * Component showing whether the post is saved or not and providing save
 * buttons.
 *
 * @param {Object}   props              Component props.
 * @param {?boolean} props.forceIsDirty Whether to force the post to be marked
 *                                      as dirty.
 * @return {import('react').ComponentType} The component.
 */


function PostSavedState({
  forceIsDirty
}) {
  const [forceSavedMessage, setForceSavedMessage] = (0,external_wp_element_namespaceObject.useState)(false);
  const isLargeViewport = (0,external_wp_compose_namespaceObject.useViewportMatch)('small');
  const {
    isAutosaving,
    isDirty,
    isNew,
    isPublished,
    isSaveable,
    isSaving,
    isScheduled,
    hasPublishAction,
    showIconLabels,
    postStatus,
    postStatusHasChanged
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    var _getCurrentPost$_link;
    const {
      isEditedPostNew,
      isCurrentPostPublished,
      isCurrentPostScheduled,
      isEditedPostDirty,
      isSavingPost,
      isEditedPostSaveable,
      getCurrentPost,
      isAutosavingPost,
      getEditedPostAttribute,
      getPostEdits
    } = select(store_store);
    const {
      get
    } = select(external_wp_preferences_namespaceObject.store);
    return {
      isAutosaving: isAutosavingPost(),
      isDirty: forceIsDirty || isEditedPostDirty(),
      isNew: isEditedPostNew(),
      isPublished: isCurrentPostPublished(),
      isSaving: isSavingPost(),
      isSaveable: isEditedPostSaveable(),
      isScheduled: isCurrentPostScheduled(),
      hasPublishAction: (_getCurrentPost$_link = getCurrentPost()?._links?.['wp:action-publish']) !== null && _getCurrentPost$_link !== void 0 ? _getCurrentPost$_link : false,
      showIconLabels: get('core', 'showIconLabels'),
      postStatus: getEditedPostAttribute('status'),
      postStatusHasChanged: !!getPostEdits()?.status
    };
  }, [forceIsDirty]);
  const isPending = postStatus === 'pending';
  const {
    savePost
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  const wasSaving = (0,external_wp_compose_namespaceObject.usePrevious)(isSaving);
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    let timeoutId;
    if (wasSaving && !isSaving) {
      setForceSavedMessage(true);
      timeoutId = setTimeout(() => {
        setForceSavedMessage(false);
      }, 1000);
    }
    return () => clearTimeout(timeoutId);
  }, [isSaving]);

  // Once the post has been submitted for review this button
  // is not needed for the contributor role.
  if (!hasPublishAction && isPending) {
    return null;
  }
  if (isPublished || isScheduled || !['pending', 'draft', 'auto-draft'].includes(postStatus) || postStatusHasChanged && ['pending', 'draft'].includes(postStatus)) {
    return null;
  }

  /* translators: button label text should, if possible, be under 16 characters. */
  const label = isPending ? (0,external_wp_i18n_namespaceObject.__)('Save as pending') : (0,external_wp_i18n_namespaceObject.__)('Save draft');

  /* translators: button label text should, if possible, be under 16 characters. */
  const shortLabel = (0,external_wp_i18n_namespaceObject.__)('Save');
  const isSaved = forceSavedMessage || !isNew && !isDirty;
  const isSavedState = isSaving || isSaved;
  const isDisabled = isSaving || isSaved || !isSaveable;
  let text;
  if (isSaving) {
    text = isAutosaving ? (0,external_wp_i18n_namespaceObject.__)('Autosaving') : (0,external_wp_i18n_namespaceObject.__)('Saving');
  } else if (isSaved) {
    text = (0,external_wp_i18n_namespaceObject.__)('Saved');
  } else if (isLargeViewport) {
    text = label;
  } else if (showIconLabels) {
    text = shortLabel;
  }

  // Use common Button instance for all saved states so that focus is not
  // lost.
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.Button, {
    className: isSaveable || isSaving ? dist_clsx({
      'editor-post-save-draft': !isSavedState,
      'editor-post-saved-state': isSavedState,
      'is-saving': isSaving,
      'is-autosaving': isAutosaving,
      'is-saved': isSaved,
      [(0,external_wp_components_namespaceObject.__unstableGetAnimateClassName)({
        type: 'loading'
      })]: isSaving
    }) : undefined,
    onClick: isDisabled ? undefined : () => savePost()
    /*
     * We want the tooltip to show the keyboard shortcut only when the
     * button does something, i.e. when it's not disabled.
     */,
    shortcut: isDisabled ? undefined : external_wp_keycodes_namespaceObject.displayShortcut.primary('s'),
    variant: "tertiary",
    size: "compact",
    icon: isLargeViewport ? undefined : cloud_upload,
    label: text || label,
    "aria-disabled": isDisabled,
    children: [isSavedState && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(icon, {
      icon: isSaved ? library_check : library_cloud
    }), text]
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-schedule/check.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/**
 * Wrapper component that renders its children only if post has a publish action.
 *
 * @param {Object}  props          Props.
 * @param {Element} props.children Children to be rendered.
 *
 * @return {Component} - The component to be rendered or null if there is no publish action.
 */
function PostScheduleCheck({
  children
}) {
  const hasPublishAction = (0,external_wp_data_namespaceObject.useSelect)(select => {
    var _select$getCurrentPos;
    return (_select$getCurrentPos = select(store_store).getCurrentPost()._links?.['wp:action-publish']) !== null && _select$getCurrentPos !== void 0 ? _select$getCurrentPos : false;
  }, []);
  if (!hasPublishAction) {
    return null;
  }
  return children;
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-schedule/panel.js
/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */







const DESIGN_POST_TYPES = [TEMPLATE_POST_TYPE, TEMPLATE_PART_POST_TYPE, PATTERN_POST_TYPE, NAVIGATION_POST_TYPE];

/**
 * Renders the Post Schedule Panel component.
 *
 * @return {Component} The component to be rendered.
 */
function PostSchedulePanel() {
  const [popoverAnchor, setPopoverAnchor] = (0,external_wp_element_namespaceObject.useState)(null);
  const postType = (0,external_wp_data_namespaceObject.useSelect)(select => select(store_store).getCurrentPostType(), []);
  // Memoize popoverProps to avoid returning a new object every time.
  const popoverProps = (0,external_wp_element_namespaceObject.useMemo)(() => ({
    // Anchor the popover to the middle of the entire row so that it doesn't
    // move around when the label changes.
    anchor: popoverAnchor,
    'aria-label': (0,external_wp_i18n_namespaceObject.__)('Change publish date'),
    placement: 'left-start',
    offset: 36,
    shift: true
  }), [popoverAnchor]);
  const label = usePostScheduleLabel();
  const fullLabel = usePostScheduleLabel({
    full: true
  });
  if (DESIGN_POST_TYPES.includes(postType)) {
    return null;
  }
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PostScheduleCheck, {
    children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(post_panel_row, {
      label: (0,external_wp_i18n_namespaceObject.__)('Publish'),
      ref: setPopoverAnchor,
      children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Dropdown, {
        popoverProps: popoverProps,
        focusOnMount: true,
        className: "editor-post-schedule__panel-dropdown",
        contentClassName: "editor-post-schedule__dialog",
        renderToggle: ({
          onToggle,
          isOpen
        }) => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
          size: "compact",
          className: "editor-post-schedule__dialog-toggle",
          variant: "tertiary",
          tooltipPosition: "middle left",
          onClick: onToggle,
          "aria-label": (0,external_wp_i18n_namespaceObject.sprintf)(
          // translators: %s: Current post date.
          (0,external_wp_i18n_namespaceObject.__)('Change date: %s'), label),
          label: fullLabel,
          showTooltip: label !== fullLabel,
          "aria-expanded": isOpen,
          children: label
        }),
        renderContent: ({
          onClose
        }) => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PostSchedule, {
          onClose: onClose
        })
      })
    })
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-slug/check.js
/**
 * Internal dependencies
 */


function PostSlugCheck({
  children
}) {
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(post_type_support_check, {
    supportKeys: "slug",
    children: children
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-slug/index.js
/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



function PostSlugControl() {
  const postSlug = (0,external_wp_data_namespaceObject.useSelect)(select => {
    return (0,external_wp_url_namespaceObject.safeDecodeURIComponent)(select(store_store).getEditedPostSlug());
  }, []);
  const {
    editPost
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  const [forceEmptyField, setForceEmptyField] = (0,external_wp_element_namespaceObject.useState)(false);
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.TextControl, {
    __nextHasNoMarginBottom: true,
    label: (0,external_wp_i18n_namespaceObject.__)('Slug'),
    autoComplete: "off",
    spellCheck: "false",
    value: forceEmptyField ? '' : postSlug,
    onChange: newValue => {
      editPost({
        slug: newValue
      });
      // When we delete the field the permalink gets
      // reverted to the original value.
      // The forceEmptyField logic allows the user to have
      // the field temporarily empty while typing.
      if (!newValue) {
        if (!forceEmptyField) {
          setForceEmptyField(true);
        }
        return;
      }
      if (forceEmptyField) {
        setForceEmptyField(false);
      }
    },
    onBlur: event => {
      editPost({
        slug: (0,external_wp_url_namespaceObject.cleanForSlug)(event.target.value)
      });
      if (forceEmptyField) {
        setForceEmptyField(false);
      }
    },
    className: "editor-post-slug"
  });
}
function PostSlug() {
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PostSlugCheck, {
    children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PostSlugControl, {})
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-sticky/check.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */

function PostStickyCheck({
  children
}) {
  const {
    hasStickyAction,
    postType
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    var _post$_links$wpActio;
    const post = select(store_store).getCurrentPost();
    return {
      hasStickyAction: (_post$_links$wpActio = post._links?.['wp:action-sticky']) !== null && _post$_links$wpActio !== void 0 ? _post$_links$wpActio : false,
      postType: select(store_store).getCurrentPostType()
    };
  }, []);
  if (postType !== 'post' || !hasStickyAction) {
    return null;
  }
  return children;
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-sticky/index.js
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */




function PostSticky() {
  const postSticky = (0,external_wp_data_namespaceObject.useSelect)(select => {
    var _select$getEditedPost;
    return (_select$getEditedPost = select(store_store).getEditedPostAttribute('sticky')) !== null && _select$getEditedPost !== void 0 ? _select$getEditedPost : false;
  }, []);
  const {
    editPost
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PostStickyCheck, {
    children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(post_panel_row, {
      label: (0,external_wp_i18n_namespaceObject.__)('Sticky'),
      children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.ToggleControl, {
        className: "editor-post-sticky__toggle-control",
        label: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.VisuallyHidden, {
          children: (0,external_wp_i18n_namespaceObject.__)('Sticky')
        }),
        checked: postSticky,
        onChange: () => editPost({
          sticky: !postSticky
        })
      })
    })
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-switch-to-draft-button/index.js
/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


// TODO: deprecate..



function PostSwitchToDraftButton() {
  const [showConfirmDialog, setShowConfirmDialog] = (0,external_wp_element_namespaceObject.useState)(false);
  const {
    editPost,
    savePost
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  const {
    isSaving,
    isPublished,
    isScheduled
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      isSavingPost,
      isCurrentPostPublished,
      isCurrentPostScheduled
    } = select(store_store);
    return {
      isSaving: isSavingPost(),
      isPublished: isCurrentPostPublished(),
      isScheduled: isCurrentPostScheduled()
    };
  }, []);
  const isDisabled = isSaving || !isPublished && !isScheduled;
  let alertMessage;
  let confirmButtonText;
  if (isPublished) {
    alertMessage = (0,external_wp_i18n_namespaceObject.__)('Are you sure you want to unpublish this post?');
    confirmButtonText = (0,external_wp_i18n_namespaceObject.__)('Unpublish');
  } else if (isScheduled) {
    alertMessage = (0,external_wp_i18n_namespaceObject.__)('Are you sure you want to unschedule this post?');
    confirmButtonText = (0,external_wp_i18n_namespaceObject.__)('Unschedule');
  }
  const handleConfirm = () => {
    setShowConfirmDialog(false);
    editPost({
      status: 'draft'
    });
    savePost();
  };
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
    children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
      __next40pxDefaultSize: true,
      className: "editor-post-switch-to-draft",
      onClick: () => {
        if (!isDisabled) {
          setShowConfirmDialog(true);
        }
      },
      "aria-disabled": isDisabled,
      variant: "secondary",
      style: {
        flexGrow: '1',
        justifyContent: 'center'
      },
      children: (0,external_wp_i18n_namespaceObject.__)('Switch to draft')
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.__experimentalConfirmDialog, {
      isOpen: showConfirmDialog,
      onConfirm: handleConfirm,
      onCancel: () => setShowConfirmDialog(false),
      confirmButtonText: confirmButtonText,
      children: alertMessage
    })]
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-sync-status/index.js
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



function PostSyncStatus() {
  const {
    syncStatus,
    postType
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getEditedPostAttribute
    } = select(store_store);
    const meta = getEditedPostAttribute('meta');

    // When the post is first created, the top level wp_pattern_sync_status is not set so get meta value instead.
    const currentSyncStatus = meta?.wp_pattern_sync_status === 'unsynced' ? 'unsynced' : getEditedPostAttribute('wp_pattern_sync_status');
    return {
      syncStatus: currentSyncStatus,
      postType: getEditedPostAttribute('type')
    };
  });
  if (postType !== 'wp_block') {
    return null;
  }
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(post_panel_row, {
    label: (0,external_wp_i18n_namespaceObject.__)('Sync status'),
    children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
      className: "editor-post-sync-status__value",
      children: syncStatus === 'unsynced' ? (0,external_wp_i18n_namespaceObject._x)('Not synced', 'Text that indicates that the pattern is not synchronized') : (0,external_wp_i18n_namespaceObject._x)('Synced', 'Text that indicates that the pattern is synchronized')
    })
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-taxonomies/index.js
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */




const post_taxonomies_identity = x => x;
function PostTaxonomies({
  taxonomyWrapper = post_taxonomies_identity
}) {
  const {
    postType,
    taxonomies
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    return {
      postType: select(store_store).getCurrentPostType(),
      taxonomies: select(external_wp_coreData_namespaceObject.store).getTaxonomies({
        per_page: -1
      })
    };
  }, []);
  const visibleTaxonomies = (taxonomies !== null && taxonomies !== void 0 ? taxonomies : []).filter(taxonomy =>
  // In some circumstances .visibility can end up as undefined so optional chaining operator required.
  // https://github.com/WordPress/gutenberg/issues/40326
  taxonomy.types.includes(postType) && taxonomy.visibility?.show_ui);
  return visibleTaxonomies.map(taxonomy => {
    const TaxonomyComponent = taxonomy.hierarchical ? hierarchical_term_selector : flat_term_selector;
    return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_element_namespaceObject.Fragment, {
      children: taxonomyWrapper( /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(TaxonomyComponent, {
        slug: taxonomy.slug
      }), taxonomy)
    }, `taxonomy-${taxonomy.slug}`);
  });
}
/* harmony default export */ const post_taxonomies = (PostTaxonomies);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-taxonomies/check.js
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */

function PostTaxonomiesCheck({
  children
}) {
  const hasTaxonomies = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const postType = select(store_store).getCurrentPostType();
    const taxonomies = select(external_wp_coreData_namespaceObject.store).getTaxonomies({
      per_page: -1
    });
    return taxonomies?.some(taxonomy => taxonomy.types.includes(postType));
  }, []);
  if (!hasTaxonomies) {
    return null;
  }
  return children;
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-taxonomies/panel.js
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */




function TaxonomyPanel({
  taxonomy,
  children
}) {
  const slug = taxonomy?.slug;
  const panelName = slug ? `taxonomy-panel-${slug}` : '';
  const {
    isEnabled,
    isOpened
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      isEditorPanelEnabled,
      isEditorPanelOpened
    } = select(store_store);
    return {
      isEnabled: slug ? isEditorPanelEnabled(panelName) : false,
      isOpened: slug ? isEditorPanelOpened(panelName) : false
    };
  }, [panelName, slug]);
  const {
    toggleEditorPanelOpened
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  if (!isEnabled) {
    return null;
  }
  const taxonomyMenuName = taxonomy?.labels?.menu_name;
  if (!taxonomyMenuName) {
    return null;
  }
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.PanelBody, {
    title: taxonomyMenuName,
    opened: isOpened,
    onToggle: () => toggleEditorPanelOpened(panelName),
    children: children
  });
}
function panel_PostTaxonomies() {
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PostTaxonomiesCheck, {
    children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(post_taxonomies, {
      taxonomyWrapper: (content, taxonomy) => {
        return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(TaxonomyPanel, {
          taxonomy: taxonomy,
          children: content
        });
      }
    })
  });
}
/* harmony default export */ const post_taxonomies_panel = (panel_PostTaxonomies);

// EXTERNAL MODULE: ./node_modules/react-autosize-textarea/lib/index.js
var lib = __webpack_require__(4132);
;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-text-editor/index.js
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
 * Displays the Post Text Editor along with content in Visual and Text mode.
 *
 * @return {JSX.Element|null} The rendered PostTextEditor component.
 */



function PostTextEditor() {
  const instanceId = (0,external_wp_compose_namespaceObject.useInstanceId)(PostTextEditor);
  const {
    content,
    blocks,
    type,
    id
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getEditedEntityRecord
    } = select(external_wp_coreData_namespaceObject.store);
    const {
      getCurrentPostType,
      getCurrentPostId
    } = select(store_store);
    const _type = getCurrentPostType();
    const _id = getCurrentPostId();
    const editedRecord = getEditedEntityRecord('postType', _type, _id);
    return {
      content: editedRecord?.content,
      blocks: editedRecord?.blocks,
      type: _type,
      id: _id
    };
  }, []);
  const {
    editEntityRecord
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_coreData_namespaceObject.store);
  // Replicates the logic found in getEditedPostContent().
  const value = (0,external_wp_element_namespaceObject.useMemo)(() => {
    if (content instanceof Function) {
      return content({
        blocks
      });
    } else if (blocks) {
      // If we have parsed blocks already, they should be our source of truth.
      // Parsing applies block deprecations and legacy block conversions that
      // unparsed content will not have.
      return (0,external_wp_blocks_namespaceObject.__unstableSerializeAndClean)(blocks);
    }
    return content;
  }, [content, blocks]);
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
    children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.VisuallyHidden, {
      as: "label",
      htmlFor: `post-content-${instanceId}`,
      children: (0,external_wp_i18n_namespaceObject.__)('Type text or HTML')
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(lib/* default */.A, {
      autoComplete: "off",
      dir: "auto",
      value: value,
      onChange: event => {
        editEntityRecord('postType', type, id, {
          content: event.target.value,
          blocks: undefined,
          selection: undefined
        });
      },
      className: "editor-post-text-editor",
      id: `post-content-${instanceId}`,
      placeholder: (0,external_wp_i18n_namespaceObject.__)('Start writing with text or HTML')
    })]
  });
}

;// CONCATENATED MODULE: external ["wp","dom"]
const external_wp_dom_namespaceObject = window["wp"]["dom"];
;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-title/constants.js
const DEFAULT_CLASSNAMES = 'wp-block wp-block-post-title block-editor-block-list__block editor-post-title editor-post-title__input rich-text';
const REGEXP_NEWLINES = /[\r\n]+/g;

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-title/use-post-title-focus.js
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


/**
 * Custom hook that manages the focus behavior of the post title input field.
 *
 * @param {Element} forwardedRef - The forwarded ref for the input field.
 *
 * @return {Object} - The ref object.
 */
function usePostTitleFocus(forwardedRef) {
  const ref = (0,external_wp_element_namespaceObject.useRef)();
  const {
    isCleanNewPost
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      isCleanNewPost: _isCleanNewPost
    } = select(store_store);
    return {
      isCleanNewPost: _isCleanNewPost()
    };
  }, []);
  (0,external_wp_element_namespaceObject.useImperativeHandle)(forwardedRef, () => ({
    focus: () => {
      ref?.current?.focus();
    }
  }));
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    if (!ref.current) {
      return;
    }
    const {
      defaultView
    } = ref.current.ownerDocument;
    const {
      name,
      parent
    } = defaultView;
    const ownerDocument = name === 'editor-canvas' ? parent.document : defaultView.document;
    const {
      activeElement,
      body
    } = ownerDocument;

    // Only autofocus the title when the post is entirely empty. This should
    // only happen for a new post, which means we focus the title on new
    // post so the author can start typing right away, without needing to
    // click anything.
    if (isCleanNewPost && (!activeElement || body === activeElement)) {
      ref.current.focus();
    }
  }, [isCleanNewPost]);
  return {
    ref
  };
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-title/use-post-title.js
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


/**
 * Custom hook for managing the post title in the editor.
 *
 * @return {Object} An object containing the current title and a function to update the title.
 */
function usePostTitle() {
  const {
    editPost
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  const {
    title
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getEditedPostAttribute
    } = select(store_store);
    return {
      title: getEditedPostAttribute('title')
    };
  }, []);
  function updateTitle(newTitle) {
    editPost({
      title: newTitle
    });
  }
  return {
    title,
    setTitle: updateTitle
  };
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-title/index.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */











/**
 * Internal dependencies
 */





function PostTitle(_, forwardedRef) {
  const {
    placeholder,
    hasFixedToolbar
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getSettings
    } = select(external_wp_blockEditor_namespaceObject.store);
    const {
      titlePlaceholder,
      hasFixedToolbar: _hasFixedToolbar
    } = getSettings();
    return {
      placeholder: titlePlaceholder,
      hasFixedToolbar: _hasFixedToolbar
    };
  }, []);
  const [isSelected, setIsSelected] = (0,external_wp_element_namespaceObject.useState)(false);
  const {
    ref: focusRef
  } = usePostTitleFocus(forwardedRef);
  const {
    title,
    setTitle: onUpdate
  } = usePostTitle();
  const [selection, setSelection] = (0,external_wp_element_namespaceObject.useState)({});
  const {
    clearSelectedBlock,
    insertBlocks,
    insertDefaultBlock
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_blockEditor_namespaceObject.store);
  function onChange(value) {
    onUpdate(value.replace(REGEXP_NEWLINES, ' '));
  }
  function onInsertBlockAfter(blocks) {
    insertBlocks(blocks, 0);
  }
  function onSelect() {
    setIsSelected(true);
    clearSelectedBlock();
  }
  function onUnselect() {
    setIsSelected(false);
    setSelection({});
  }
  function onEnterPress() {
    insertDefaultBlock(undefined, undefined, 0);
  }
  function onKeyDown(event) {
    if (event.keyCode === external_wp_keycodes_namespaceObject.ENTER) {
      event.preventDefault();
      onEnterPress();
    }
  }
  function onPaste(event) {
    const clipboardData = event.clipboardData;
    let plainText = '';
    let html = '';

    // IE11 only supports `Text` as an argument for `getData` and will
    // otherwise throw an invalid argument error, so we try the standard
    // arguments first, then fallback to `Text` if they fail.
    try {
      plainText = clipboardData.getData('text/plain');
      html = clipboardData.getData('text/html');
    } catch (error1) {
      try {
        html = clipboardData.getData('Text');
      } catch (error2) {
        // Some browsers like UC Browser paste plain text by default and
        // don't support clipboardData at all, so allow default
        // behaviour.
        return;
      }
    }

    // Allows us to ask for this information when we get a report.
    window.console.log('Received HTML:\n\n', html);
    window.console.log('Received plain text:\n\n', plainText);
    const content = (0,external_wp_blocks_namespaceObject.pasteHandler)({
      HTML: html,
      plainText
    });
    event.preventDefault();
    if (!content.length) {
      return;
    }
    if (typeof content !== 'string') {
      const [firstBlock] = content;
      if (!title && (firstBlock.name === 'core/heading' || firstBlock.name === 'core/paragraph')) {
        // Strip HTML to avoid unwanted HTML being added to the title.
        // In the majority of cases it is assumed that HTML in the title
        // is undesirable.
        const contentNoHTML = (0,external_wp_dom_namespaceObject.__unstableStripHTML)(firstBlock.attributes.content);
        onUpdate(contentNoHTML);
        onInsertBlockAfter(content.slice(1));
      } else {
        onInsertBlockAfter(content);
      }
    } else {
      const value = {
        ...(0,external_wp_richText_namespaceObject.create)({
          html: title
        }),
        ...selection
      };

      // Strip HTML to avoid unwanted HTML being added to the title.
      // In the majority of cases it is assumed that HTML in the title
      // is undesirable.
      const contentNoHTML = (0,external_wp_dom_namespaceObject.__unstableStripHTML)(content);
      const newValue = (0,external_wp_richText_namespaceObject.insert)(value, (0,external_wp_richText_namespaceObject.create)({
        html: contentNoHTML
      }));
      onUpdate((0,external_wp_richText_namespaceObject.toHTMLString)({
        value: newValue
      }));
      setSelection({
        start: newValue.start,
        end: newValue.end
      });
    }
  }
  const decodedPlaceholder = (0,external_wp_htmlEntities_namespaceObject.decodeEntities)(placeholder) || (0,external_wp_i18n_namespaceObject.__)('Add title');
  const {
    ref: richTextRef
  } = (0,external_wp_richText_namespaceObject.__unstableUseRichText)({
    value: title,
    onChange,
    placeholder: decodedPlaceholder,
    selectionStart: selection.start,
    selectionEnd: selection.end,
    onSelectionChange(newStart, newEnd) {
      setSelection(sel => {
        const {
          start,
          end
        } = sel;
        if (start === newStart && end === newEnd) {
          return sel;
        }
        return {
          start: newStart,
          end: newEnd
        };
      });
    },
    __unstableDisableFormats: false
  });

  // The wp-block className is important for editor styles.
  // This same block is used in both the visual and the code editor.
  const className = dist_clsx(DEFAULT_CLASSNAMES, {
    'is-selected': isSelected,
    'has-fixed-toolbar': hasFixedToolbar
  });
  return (
    /*#__PURE__*/
    /* eslint-disable jsx-a11y/heading-has-content, jsx-a11y/no-noninteractive-element-to-interactive-role */
    (0,external_ReactJSXRuntime_namespaceObject.jsx)(post_type_support_check, {
      supportKeys: "title",
      children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("h1", {
        ref: (0,external_wp_compose_namespaceObject.useMergeRefs)([richTextRef, focusRef]),
        contentEditable: true,
        className: className,
        "aria-label": decodedPlaceholder,
        role: "textbox",
        "aria-multiline": "true",
        onFocus: onSelect,
        onBlur: onUnselect,
        onKeyDown: onKeyDown,
        onKeyPress: onUnselect,
        onPaste: onPaste
      })
    })
    /* eslint-enable jsx-a11y/heading-has-content, jsx-a11y/no-noninteractive-element-to-interactive-role */
  );
}

/**
 * Renders the `PostTitle` component.
 *
 * @param {Object}  _            Unused parameter.
 * @param {Element} forwardedRef Forwarded ref for the component.
 *
 * @return {Component} The rendered PostTitle component.
 */
/* harmony default export */ const post_title = ((0,external_wp_element_namespaceObject.forwardRef)(PostTitle));

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-title/post-title-raw.js
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
 * Renders a raw post title input field.
 *
 * @param {Object}  _            Unused parameter.
 * @param {Element} forwardedRef Reference to the component's DOM node.
 *
 * @return {Component} The rendered component.
 */

function PostTitleRaw(_, forwardedRef) {
  const {
    placeholder,
    hasFixedToolbar
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getSettings
    } = select(external_wp_blockEditor_namespaceObject.store);
    const {
      titlePlaceholder,
      hasFixedToolbar: _hasFixedToolbar
    } = getSettings();
    return {
      placeholder: titlePlaceholder,
      hasFixedToolbar: _hasFixedToolbar
    };
  }, []);
  const [isSelected, setIsSelected] = (0,external_wp_element_namespaceObject.useState)(false);
  const {
    title,
    setTitle: onUpdate
  } = usePostTitle();
  const {
    ref: focusRef
  } = usePostTitleFocus(forwardedRef);
  function onChange(value) {
    onUpdate(value.replace(REGEXP_NEWLINES, ' '));
  }
  function onSelect() {
    setIsSelected(true);
  }
  function onUnselect() {
    setIsSelected(false);
  }

  // The wp-block className is important for editor styles.
  // This same block is used in both the visual and the code editor.
  const className = dist_clsx(DEFAULT_CLASSNAMES, {
    'is-selected': isSelected,
    'has-fixed-toolbar': hasFixedToolbar,
    'is-raw-text': true
  });
  const decodedPlaceholder = (0,external_wp_htmlEntities_namespaceObject.decodeEntities)(placeholder) || (0,external_wp_i18n_namespaceObject.__)('Add title');
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.TextareaControl, {
    ref: focusRef,
    value: title,
    onChange: onChange,
    onFocus: onSelect,
    onBlur: onUnselect,
    label: placeholder,
    className: className,
    placeholder: decodedPlaceholder,
    hideLabelFromVision: true,
    autoComplete: "off",
    dir: "auto",
    rows: 1,
    __nextHasNoMarginBottom: true
  });
}
/* harmony default export */ const post_title_raw = ((0,external_wp_element_namespaceObject.forwardRef)(PostTitleRaw));

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-trash/index.js
/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */




function PostTrash() {
  const {
    isNew,
    isDeleting,
    postId
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const store = select(store_store);
    return {
      isNew: store.isEditedPostNew(),
      isDeleting: store.isDeletingPost(),
      postId: store.getCurrentPostId()
    };
  }, []);
  const {
    trashPost
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  const [showConfirmDialog, setShowConfirmDialog] = (0,external_wp_element_namespaceObject.useState)(false);
  if (isNew || !postId) {
    return null;
  }
  const handleConfirm = () => {
    setShowConfirmDialog(false);
    trashPost();
  };
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
    children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
      __next40pxDefaultSize: true,
      className: "editor-post-trash",
      isDestructive: true,
      variant: "secondary",
      isBusy: isDeleting,
      "aria-disabled": isDeleting,
      onClick: isDeleting ? undefined : () => setShowConfirmDialog(true),
      children: (0,external_wp_i18n_namespaceObject.__)('Move to trash')
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.__experimentalConfirmDialog, {
      isOpen: showConfirmDialog,
      onConfirm: handleConfirm,
      onCancel: () => setShowConfirmDialog(false),
      confirmButtonText: (0,external_wp_i18n_namespaceObject.__)('Move to trash'),
      children: (0,external_wp_i18n_namespaceObject.__)('Are you sure you want to move this post to the trash?')
    })]
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-trash/check.js
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */

function PostTrashCheck({
  children
}) {
  const {
    canTrashPost
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      isEditedPostNew,
      getCurrentPostId,
      getCurrentPostType
    } = select(store_store);
    const {
      getPostType,
      canUser
    } = select(external_wp_coreData_namespaceObject.store);
    const postType = getPostType(getCurrentPostType());
    const postId = getCurrentPostId();
    const isNew = isEditedPostNew();
    const resource = postType?.rest_base || ''; // eslint-disable-line camelcase
    const canUserDelete = postId && resource ? canUser('delete', resource, postId) : false;
    return {
      canTrashPost: (!isNew || postId) && canUserDelete
    };
  }, []);
  if (!canTrashPost) {
    return null;
  }
  return children;
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/copy-small.js
/**
 * WordPress dependencies
 */


const copySmall = /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.625 5.5h9.75c.069 0 .125.056.125.125v9.75a.125.125 0 0 1-.125.125h-9.75a.125.125 0 0 1-.125-.125v-9.75c0-.069.056-.125.125-.125ZM4 5.625C4 4.728 4.728 4 5.625 4h9.75C16.273 4 17 4.728 17 5.625v9.75c0 .898-.727 1.625-1.625 1.625h-9.75A1.625 1.625 0 0 1 4 15.375v-9.75Zm14.5 11.656v-9H20v9C20 18.8 18.77 20 17.251 20H6.25v-1.5h11.001c.69 0 1.249-.528 1.249-1.219Z"
  })
});
/* harmony default export */ const copy_small = (copySmall);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-url/index.js
/**
 * WordPress dependencies
 */











/**
 * Internal dependencies
 */


/**
 * Renders the `PostURL` component.
 *
 * @example
 * ```jsx
 * <PostURL />
 * ```
 *
 * @param {Function} onClose Callback function to be executed when the popover is closed.
 *
 * @return {Component} The rendered PostURL component.
 */


function PostURL({
  onClose
}) {
  const {
    isEditable,
    postSlug,
    postLink,
    permalinkPrefix,
    permalinkSuffix,
    permalink
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    var _post$_links$wpActio;
    const post = select(store_store).getCurrentPost();
    const postTypeSlug = select(store_store).getCurrentPostType();
    const postType = select(external_wp_coreData_namespaceObject.store).getPostType(postTypeSlug);
    const permalinkParts = select(store_store).getPermalinkParts();
    const hasPublishAction = (_post$_links$wpActio = post?._links?.['wp:action-publish']) !== null && _post$_links$wpActio !== void 0 ? _post$_links$wpActio : false;
    return {
      isEditable: select(store_store).isPermalinkEditable() && hasPublishAction,
      postSlug: (0,external_wp_url_namespaceObject.safeDecodeURIComponent)(select(store_store).getEditedPostSlug()),
      viewPostLabel: postType?.labels.view_item,
      postLink: post.link,
      permalinkPrefix: permalinkParts?.prefix,
      permalinkSuffix: permalinkParts?.suffix,
      permalink: (0,external_wp_url_namespaceObject.safeDecodeURIComponent)(select(store_store).getPermalink())
    };
  }, []);
  const {
    editPost
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  const {
    createNotice
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_notices_namespaceObject.store);
  const [forceEmptyField, setForceEmptyField] = (0,external_wp_element_namespaceObject.useState)(false);
  const copyButtonRef = (0,external_wp_compose_namespaceObject.useCopyToClipboard)(permalink, () => {
    createNotice('info', (0,external_wp_i18n_namespaceObject.__)('Copied URL to clipboard.'), {
      isDismissible: true,
      type: 'snackbar'
    });
  });
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
    className: "editor-post-url",
    children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_blockEditor_namespaceObject.__experimentalInspectorPopoverHeader, {
      title: (0,external_wp_i18n_namespaceObject.__)('Link'),
      onClose: onClose
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.__experimentalVStack, {
      spacing: 3,
      children: [isEditable && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
        children: [(0,external_wp_i18n_namespaceObject.__)('Customize the last part of the URL. '), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.ExternalLink, {
          href: (0,external_wp_i18n_namespaceObject.__)('https://wordpress.org/documentation/article/page-post-settings-sidebar/#permalink'),
          children: (0,external_wp_i18n_namespaceObject.__)('Learn more.')
        })]
      }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
        children: [isEditable && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.__experimentalInputControl, {
          __next40pxDefaultSize: true,
          prefix: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.__experimentalInputControlPrefixWrapper, {
            children: "/"
          }),
          suffix: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
            icon: copy_small,
            ref: copyButtonRef,
            label: (0,external_wp_i18n_namespaceObject.__)('Copy')
          }),
          label: (0,external_wp_i18n_namespaceObject.__)('Link'),
          hideLabelFromVision: true,
          value: forceEmptyField ? '' : postSlug,
          autoComplete: "off",
          spellCheck: "false",
          type: "text",
          className: "editor-post-url__input",
          onChange: newValue => {
            editPost({
              slug: newValue
            });
            // When we delete the field the permalink gets
            // reverted to the original value.
            // The forceEmptyField logic allows the user to have
            // the field temporarily empty while typing.
            if (!newValue) {
              if (!forceEmptyField) {
                setForceEmptyField(true);
              }
              return;
            }
            if (forceEmptyField) {
              setForceEmptyField(false);
            }
          },
          onBlur: event => {
            editPost({
              slug: (0,external_wp_url_namespaceObject.cleanForSlug)(event.target.value)
            });
            if (forceEmptyField) {
              setForceEmptyField(false);
            }
          },
          help: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.ExternalLink, {
            className: "editor-post-url__link",
            href: postLink,
            target: "_blank",
            children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("span", {
              className: "editor-post-url__link-prefix",
              children: permalinkPrefix
            }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("span", {
              className: "editor-post-url__link-slug",
              children: postSlug
            }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("span", {
              className: "editor-post-url__link-suffix",
              children: permalinkSuffix
            })]
          })
        }), !isEditable && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.ExternalLink, {
          className: "editor-post-url__link",
          href: postLink,
          target: "_blank",
          children: postLink
        })]
      })]
    })]
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-url/check.js
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


/**
 * Check if the post URL is valid and visible.
 *
 * @param {Object}  props          The component props.
 * @param {Element} props.children The child components.
 *
 * @return {Component|null} The child components if the post URL is valid and visible, otherwise null.
 */
function PostURLCheck({
  children
}) {
  const isVisible = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const postTypeSlug = select(store_store).getCurrentPostType();
    const postType = select(external_wp_coreData_namespaceObject.store).getPostType(postTypeSlug);
    if (!postType?.viewable) {
      return false;
    }
    const post = select(store_store).getCurrentPost();
    if (!post.link) {
      return false;
    }
    const permalinkParts = select(store_store).getPermalinkParts();
    if (!permalinkParts) {
      return false;
    }
    return true;
  }, []);
  if (!isVisible) {
    return null;
  }
  return children;
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-url/label.js
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


/**
 * Represents a label component for a post URL.
 *
 * @return {Component} The PostURLLabel component.
 */
function PostURLLabel() {
  return usePostURLLabel();
}

/**
 * Custom hook to get the label for the post URL.
 *
 * @return {string} The filtered and decoded post URL label.
 */
function usePostURLLabel() {
  const postLink = (0,external_wp_data_namespaceObject.useSelect)(select => select(store_store).getPermalink(), []);
  return (0,external_wp_url_namespaceObject.filterURLForDisplay)((0,external_wp_url_namespaceObject.safeDecodeURIComponent)(postLink));
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-url/panel.js
/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */





/**
 * Renders the `PostURLPanel` component.
 *
 * @return {JSX.Element} The rendered PostURLPanel component.
 */


function PostURLPanel() {
  // Use internal state instead of a ref to make sure that the component
  // re-renders when the popover's anchor updates.
  const [popoverAnchor, setPopoverAnchor] = (0,external_wp_element_namespaceObject.useState)(null);
  // Memoize popoverProps to avoid returning a new object every time.
  const popoverProps = (0,external_wp_element_namespaceObject.useMemo)(() => ({
    // Anchor the popover to the middle of the entire row so that it doesn't
    // move around when the label changes.
    anchor: popoverAnchor,
    placement: 'left-start',
    offset: 36,
    shift: true
  }), [popoverAnchor]);
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PostURLCheck, {
    children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(post_panel_row, {
      label: (0,external_wp_i18n_namespaceObject.__)('Link'),
      ref: setPopoverAnchor,
      children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Dropdown, {
        popoverProps: popoverProps,
        className: "editor-post-url__panel-dropdown",
        contentClassName: "editor-post-url__panel-dialog",
        focusOnMount: true,
        renderToggle: ({
          isOpen,
          onToggle
        }) => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PostURLToggle, {
          isOpen: isOpen,
          onClick: onToggle
        }),
        renderContent: ({
          onClose
        }) => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PostURL, {
          onClose: onClose
        })
      })
    })
  });
}
function PostURLToggle({
  isOpen,
  onClick
}) {
  const slug = (0,external_wp_data_namespaceObject.useSelect)(select => select(store_store).getEditedPostSlug(), []);
  const decodedSlug = (0,external_wp_url_namespaceObject.safeDecodeURIComponent)(slug);
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.Button, {
    size: "compact",
    className: "editor-post-url__panel-toggle",
    variant: "tertiary",
    "aria-expanded": isOpen
    // translators: %s: Current post link.
    ,
    "aria-label": (0,external_wp_i18n_namespaceObject.sprintf)((0,external_wp_i18n_namespaceObject.__)('Change link: %s'), decodedSlug),
    onClick: onClick,
    children: ["/", decodedSlug]
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-visibility/check.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/**
 * Determines if the current post can be edited (published)
 * and passes this information to the provided render function.
 *
 * @param {Object}   props        The component props.
 * @param {Function} props.render Function to render the component.
 *                                Receives an object with a `canEdit` property.
 * @return {JSX.Element} The rendered component.
 */
function PostVisibilityCheck({
  render
}) {
  const canEdit = (0,external_wp_data_namespaceObject.useSelect)(select => {
    var _select$getCurrentPos;
    return (_select$getCurrentPos = select(store_store).getCurrentPost()._links?.['wp:action-publish']) !== null && _select$getCurrentPos !== void 0 ? _select$getCurrentPos : false;
  });
  return render({
    canEdit
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/info.js
/**
 * WordPress dependencies
 */


const info = /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.Path, {
    d: "M12 3.2c-4.8 0-8.8 3.9-8.8 8.8 0 4.8 3.9 8.8 8.8 8.8 4.8 0 8.8-3.9 8.8-8.8 0-4.8-4-8.8-8.8-8.8zm0 16c-4 0-7.2-3.3-7.2-7.2C4.8 8 8 4.8 12 4.8s7.2 3.3 7.2 7.2c0 4-3.2 7.2-7.2 7.2zM11 17h2v-6h-2v6zm0-8h2V7h-2v2z"
  })
});
/* harmony default export */ const library_info = (info);

;// CONCATENATED MODULE: external ["wp","wordcount"]
const external_wp_wordcount_namespaceObject = window["wp"]["wordcount"];
;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/word-count/index.js
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


function WordCount() {
  const content = (0,external_wp_data_namespaceObject.useSelect)(select => select(store_store).getEditedPostAttribute('content'), []);

  /*
   * translators: If your word count is based on single characters (e.g. East Asian characters),
   * enter 'characters_excluding_spaces' or 'characters_including_spaces'. Otherwise, enter 'words'.
   * Do not translate into your own language.
   */
  const wordCountType = (0,external_wp_i18n_namespaceObject._x)('words', 'Word count type. Do not translate!');
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("span", {
    className: "word-count",
    children: (0,external_wp_wordcount_namespaceObject.count)(content, wordCountType)
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/time-to-read/index.js
/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


/**
 * Average reading rate - based on average taken from
 * https://irisreading.com/average-reading-speed-in-various-languages/
 * (Characters/minute used for Chinese rather than words).
 *
 * @type {number} A rough estimate of the average reading rate across multiple languages.
 */

const AVERAGE_READING_RATE = 189;
function TimeToRead() {
  const content = (0,external_wp_data_namespaceObject.useSelect)(select => select(store_store).getEditedPostAttribute('content'), []);

  /*
   * translators: If your word count is based on single characters (e.g. East Asian characters),
   * enter 'characters_excluding_spaces' or 'characters_including_spaces'. Otherwise, enter 'words'.
   * Do not translate into your own language.
   */
  const wordCountType = (0,external_wp_i18n_namespaceObject._x)('words', 'Word count type. Do not translate!');
  const minutesToRead = Math.round((0,external_wp_wordcount_namespaceObject.count)(content, wordCountType) / AVERAGE_READING_RATE);
  const minutesToReadString = minutesToRead === 0 ? (0,external_wp_element_namespaceObject.createInterpolateElement)((0,external_wp_i18n_namespaceObject.__)('<span>< 1</span> minute'), {
    span: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("span", {})
  }) : (0,external_wp_element_namespaceObject.createInterpolateElement)((0,external_wp_i18n_namespaceObject.sprintf)( /* translators: %s is the number of minutes the post will take to read. */
  (0,external_wp_i18n_namespaceObject._n)('<span>%d</span> minute', '<span>%d</span> minutes', minutesToRead), minutesToRead), {
    span: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("span", {})
  });
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("span", {
    className: "time-to-read",
    children: minutesToReadString
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/character-count/index.js
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


/**
 * Renders the character count of the post content.
 *
 * @return {number} The character count.
 */
function CharacterCount() {
  const content = (0,external_wp_data_namespaceObject.useSelect)(select => select(store_store).getEditedPostAttribute('content'), []);
  return (0,external_wp_wordcount_namespaceObject.count)(content, 'characters_including_spaces');
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/table-of-contents/panel.js
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */







function TableOfContentsPanel({
  hasOutlineItemsDisabled,
  onRequestClose
}) {
  const {
    headingCount,
    paragraphCount,
    numberOfBlocks
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getGlobalBlockCount
    } = select(external_wp_blockEditor_namespaceObject.store);
    return {
      headingCount: getGlobalBlockCount('core/heading'),
      paragraphCount: getGlobalBlockCount('core/paragraph'),
      numberOfBlocks: getGlobalBlockCount()
    };
  }, []);
  return (
    /*#__PURE__*/
    /*
     * Disable reason: The `list` ARIA role is redundant but
     * Safari+VoiceOver won't announce the list otherwise.
     */
    /* eslint-disable jsx-a11y/no-redundant-roles */
    (0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
      children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
        className: "table-of-contents__wrapper",
        role: "note",
        "aria-label": (0,external_wp_i18n_namespaceObject.__)('Document Statistics'),
        tabIndex: "0",
        children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("ul", {
          role: "list",
          className: "table-of-contents__counts",
          children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("li", {
            className: "table-of-contents__count",
            children: [(0,external_wp_i18n_namespaceObject.__)('Words'), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(WordCount, {})]
          }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("li", {
            className: "table-of-contents__count",
            children: [(0,external_wp_i18n_namespaceObject.__)('Characters'), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("span", {
              className: "table-of-contents__number",
              children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(CharacterCount, {})
            })]
          }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("li", {
            className: "table-of-contents__count",
            children: [(0,external_wp_i18n_namespaceObject.__)('Time to read'), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(TimeToRead, {})]
          }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("li", {
            className: "table-of-contents__count",
            children: [(0,external_wp_i18n_namespaceObject.__)('Headings'), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("span", {
              className: "table-of-contents__number",
              children: headingCount
            })]
          }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("li", {
            className: "table-of-contents__count",
            children: [(0,external_wp_i18n_namespaceObject.__)('Paragraphs'), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("span", {
              className: "table-of-contents__number",
              children: paragraphCount
            })]
          }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("li", {
            className: "table-of-contents__count",
            children: [(0,external_wp_i18n_namespaceObject.__)('Blocks'), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("span", {
              className: "table-of-contents__number",
              children: numberOfBlocks
            })]
          })]
        })
      }), headingCount > 0 && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
        children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("hr", {}), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("h2", {
          className: "table-of-contents__title",
          children: (0,external_wp_i18n_namespaceObject.__)('Document Outline')
        }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(DocumentOutline, {
          onSelect: onRequestClose,
          hasOutlineItemsDisabled: hasOutlineItemsDisabled
        })]
      })]
    })
    /* eslint-enable jsx-a11y/no-redundant-roles */
  );
}
/* harmony default export */ const table_of_contents_panel = (TableOfContentsPanel);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/table-of-contents/index.js
/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */


function TableOfContents({
  hasOutlineItemsDisabled,
  repositionDropdown,
  ...props
}, ref) {
  const hasBlocks = (0,external_wp_data_namespaceObject.useSelect)(select => !!select(external_wp_blockEditor_namespaceObject.store).getBlockCount(), []);
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Dropdown, {
    popoverProps: {
      placement: repositionDropdown ? 'right' : 'bottom'
    },
    className: "table-of-contents",
    contentClassName: "table-of-contents__popover",
    renderToggle: ({
      isOpen,
      onToggle
    }) => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
      ...props,
      ref: ref,
      onClick: hasBlocks ? onToggle : undefined,
      icon: library_info,
      "aria-expanded": isOpen,
      "aria-haspopup": "true"
      /* translators: button label text should, if possible, be under 16 characters. */,
      label: (0,external_wp_i18n_namespaceObject.__)('Details'),
      tooltipPosition: "bottom",
      "aria-disabled": !hasBlocks
    }),
    renderContent: ({
      onClose
    }) => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(table_of_contents_panel, {
      onRequestClose: onClose,
      hasOutlineItemsDisabled: hasOutlineItemsDisabled
    })
  });
}
/* harmony default export */ const table_of_contents = ((0,external_wp_element_namespaceObject.forwardRef)(TableOfContents));

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/unsaved-changes-warning/index.js
/**
 * WordPress dependencies
 */





/**
 * Warns the user if there are unsaved changes before leaving the editor.
 * Compatible with Post Editor and Site Editor.
 *
 * @return {Component} The component.
 */
function UnsavedChangesWarning() {
  const {
    __experimentalGetDirtyEntityRecords
  } = (0,external_wp_data_namespaceObject.useSelect)(external_wp_coreData_namespaceObject.store);
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    /**
     * Warns the user if there are unsaved changes before leaving the editor.
     *
     * @param {Event} event `beforeunload` event.
     *
     * @return {string | undefined} Warning prompt message, if unsaved changes exist.
     */
    const warnIfUnsavedChanges = event => {
      // We need to call the selector directly in the listener to avoid race
      // conditions with `BrowserURL` where `componentDidUpdate` gets the
      // new value of `isEditedPostDirty` before this component does,
      // causing this component to incorrectly think a trashed post is still dirty.
      const dirtyEntityRecords = __experimentalGetDirtyEntityRecords();
      if (dirtyEntityRecords.length > 0) {
        event.returnValue = (0,external_wp_i18n_namespaceObject.__)('You have unsaved changes. If you proceed, they will be lost.');
        return event.returnValue;
      }
    };
    window.addEventListener('beforeunload', warnIfUnsavedChanges);
    return () => {
      window.removeEventListener('beforeunload', warnIfUnsavedChanges);
    };
  }, [__experimentalGetDirtyEntityRecords]);
  return null;
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/provider/with-registry-provider.js
/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


function getSubRegistry(subRegistries, registry, useSubRegistry) {
  if (!useSubRegistry) {
    return registry;
  }
  let subRegistry = subRegistries.get(registry);
  if (!subRegistry) {
    subRegistry = (0,external_wp_data_namespaceObject.createRegistry)({
      'core/block-editor': external_wp_blockEditor_namespaceObject.storeConfig
    }, registry);
    // Todo: The interface store should also be created per instance.
    subRegistry.registerStore('core/editor', storeConfig);
    subRegistries.set(registry, subRegistry);
  }
  return subRegistry;
}
const withRegistryProvider = (0,external_wp_compose_namespaceObject.createHigherOrderComponent)(WrappedComponent => ({
  useSubRegistry = true,
  ...props
}) => {
  const registry = (0,external_wp_data_namespaceObject.useRegistry)();
  const [subRegistries] = (0,external_wp_element_namespaceObject.useState)(() => new WeakMap());
  const subRegistry = getSubRegistry(subRegistries, registry, useSubRegistry);
  if (subRegistry === registry) {
    return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(WrappedComponent, {
      registry: registry,
      ...props
    });
  }
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_data_namespaceObject.RegistryProvider, {
    value: subRegistry,
    children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(WrappedComponent, {
      registry: subRegistry,
      ...props
    })
  });
}, 'withRegistryProvider');
/* harmony default export */ const with_registry_provider = (withRegistryProvider);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/media-categories/index.js
/**
 * The `editor` settings here need to be in sync with the corresponding ones in `editor` package.
 * See `packages/editor/src/components/media-categories/index.js`.
 *
 * In the future we could consider creating an Openvese package that can be used in both `editor` and `site-editor`.
 * The rest of the settings would still need to be in sync though.
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


/** @typedef {import('@wordpress/block-editor').InserterMediaRequest} InserterMediaRequest */
/** @typedef {import('@wordpress/block-editor').InserterMediaItem} InserterMediaItem */
/** @typedef {import('@wordpress/block-editor').InserterMediaCategory} InserterMediaCategory */

const getExternalLink = (url, text) => `<a ${getExternalLinkAttributes(url)}>${text}</a>`;
const getExternalLinkAttributes = url => `href="${url}" target="_blank" rel="noreferrer noopener"`;
const getOpenverseLicense = (license, licenseVersion) => {
  let licenseName = license.trim();
  // PDM has no abbreviation
  if (license !== 'pdm') {
    licenseName = license.toUpperCase().replace('SAMPLING', 'Sampling');
  }
  // If version is known, append version to the name.
  // The license has to have a version to be valid. Only
  // PDM (public domain mark) doesn't have a version.
  if (licenseVersion) {
    licenseName += ` ${licenseVersion}`;
  }
  // For licenses other than public-domain marks, prepend 'CC' to the name.
  if (!['pdm', 'cc0'].includes(license)) {
    licenseName = `CC ${licenseName}`;
  }
  return licenseName;
};
const getOpenverseCaption = item => {
  const {
    title,
    foreign_landing_url: foreignLandingUrl,
    creator,
    creator_url: creatorUrl,
    license,
    license_version: licenseVersion,
    license_url: licenseUrl
  } = item;
  const fullLicense = getOpenverseLicense(license, licenseVersion);
  const _creator = (0,external_wp_htmlEntities_namespaceObject.decodeEntities)(creator);
  let _caption;
  if (_creator) {
    _caption = title ? (0,external_wp_i18n_namespaceObject.sprintf)(
    // translators: %1s: Title of a media work from Openverse; %2s: Name of the work's creator; %3s: Work's licence e.g: "CC0 1.0".
    (0,external_wp_i18n_namespaceObject._x)('"%1$s" by %2$s/ %3$s', 'caption'), getExternalLink(foreignLandingUrl, (0,external_wp_htmlEntities_namespaceObject.decodeEntities)(title)), creatorUrl ? getExternalLink(creatorUrl, _creator) : _creator, licenseUrl ? getExternalLink(`${licenseUrl}?ref=openverse`, fullLicense) : fullLicense) : (0,external_wp_i18n_namespaceObject.sprintf)(
    // translators: %1s: Link attributes for a given Openverse media work; %2s: Name of the work's creator; %3s: Works's licence e.g: "CC0 1.0".
    (0,external_wp_i18n_namespaceObject._x)('<a %1$s>Work</a> by %2$s/ %3$s', 'caption'), getExternalLinkAttributes(foreignLandingUrl), creatorUrl ? getExternalLink(creatorUrl, _creator) : _creator, licenseUrl ? getExternalLink(`${licenseUrl}?ref=openverse`, fullLicense) : fullLicense);
  } else {
    _caption = title ? (0,external_wp_i18n_namespaceObject.sprintf)(
    // translators: %1s: Title of a media work from Openverse; %2s: Work's licence e.g: "CC0 1.0".
    (0,external_wp_i18n_namespaceObject._x)('"%1$s"/ %2$s', 'caption'), getExternalLink(foreignLandingUrl, (0,external_wp_htmlEntities_namespaceObject.decodeEntities)(title)), licenseUrl ? getExternalLink(`${licenseUrl}?ref=openverse`, fullLicense) : fullLicense) : (0,external_wp_i18n_namespaceObject.sprintf)(
    // translators: %1s: Link attributes for a given Openverse media work; %2s: Works's licence e.g: "CC0 1.0".
    (0,external_wp_i18n_namespaceObject._x)('<a %1$s>Work</a>/ %2$s', 'caption'), getExternalLinkAttributes(foreignLandingUrl), licenseUrl ? getExternalLink(`${licenseUrl}?ref=openverse`, fullLicense) : fullLicense);
  }
  return _caption.replace(/\s{2}/g, ' ');
};
const coreMediaFetch = async (query = {}) => {
  const mediaItems = await (0,external_wp_data_namespaceObject.resolveSelect)(external_wp_coreData_namespaceObject.store).getMediaItems({
    ...query,
    orderBy: !!query?.search ? 'relevance' : 'date'
  });
  return mediaItems.map(mediaItem => ({
    ...mediaItem,
    alt: mediaItem.alt_text,
    url: mediaItem.source_url,
    previewUrl: mediaItem.media_details?.sizes?.medium?.source_url,
    caption: mediaItem.caption?.raw
  }));
};

/** @type {InserterMediaCategory[]} */
const inserterMediaCategories = [{
  name: 'images',
  labels: {
    name: (0,external_wp_i18n_namespaceObject.__)('Images'),
    search_items: (0,external_wp_i18n_namespaceObject.__)('Search images')
  },
  mediaType: 'image',
  async fetch(query = {}) {
    return coreMediaFetch({
      ...query,
      media_type: 'image'
    });
  }
}, {
  name: 'videos',
  labels: {
    name: (0,external_wp_i18n_namespaceObject.__)('Videos'),
    search_items: (0,external_wp_i18n_namespaceObject.__)('Search videos')
  },
  mediaType: 'video',
  async fetch(query = {}) {
    return coreMediaFetch({
      ...query,
      media_type: 'video'
    });
  }
}, {
  name: 'audio',
  labels: {
    name: (0,external_wp_i18n_namespaceObject.__)('Audio'),
    search_items: (0,external_wp_i18n_namespaceObject.__)('Search audio')
  },
  mediaType: 'audio',
  async fetch(query = {}) {
    return coreMediaFetch({
      ...query,
      media_type: 'audio'
    });
  }
}, {
  name: 'openverse',
  labels: {
    name: (0,external_wp_i18n_namespaceObject.__)('Openverse'),
    search_items: (0,external_wp_i18n_namespaceObject.__)('Search Openverse')
  },
  mediaType: 'image',
  async fetch(query = {}) {
    const defaultArgs = {
      mature: false,
      excluded_source: 'flickr,inaturalist,wikimedia',
      license: 'pdm,cc0'
    };
    const finalQuery = {
      ...query,
      ...defaultArgs
    };
    const mapFromInserterMediaRequest = {
      per_page: 'page_size',
      search: 'q'
    };
    const url = new URL('https://api.openverse.engineering/v1/images/');
    Object.entries(finalQuery).forEach(([key, value]) => {
      const queryKey = mapFromInserterMediaRequest[key] || key;
      url.searchParams.set(queryKey, value);
    });
    const response = await window.fetch(url, {
      headers: {
        'User-Agent': 'WordPress/inserter-media-fetch'
      }
    });
    const jsonResponse = await response.json();
    const results = jsonResponse.results;
    return results.map(result => ({
      ...result,
      // This is a temp solution for better titles, until Openverse API
      // completes the cleaning up of some titles of their upstream data.
      title: result.title?.toLowerCase().startsWith('file:') ? result.title.slice(5) : result.title,
      sourceId: result.id,
      id: undefined,
      caption: getOpenverseCaption(result),
      previewUrl: result.thumbnail
    }));
  },
  getReportUrl: ({
    sourceId
  }) => `https://wordpress.org/openverse/image/${sourceId}/report/`,
  isExternalResource: true
}];
/* harmony default export */ const media_categories = (inserterMediaCategories);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/utils/media-upload/index.js
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */

const media_upload_noop = () => {};

/**
 * Upload a media file when the file upload button is activated.
 * Wrapper around mediaUpload() that injects the current post ID.
 *
 * @param {Object}   $0                   Parameters object passed to the function.
 * @param {?Object}  $0.additionalData    Additional data to include in the request.
 * @param {string}   $0.allowedTypes      Array with the types of media that can be uploaded, if unset all types are allowed.
 * @param {Array}    $0.filesList         List of files.
 * @param {?number}  $0.maxUploadFileSize Maximum upload size in bytes allowed for the site.
 * @param {Function} $0.onError           Function called when an error happens.
 * @param {Function} $0.onFileChange      Function called each time a file or a temporary representation of the file is available.
 */
function mediaUpload({
  additionalData = {},
  allowedTypes,
  filesList,
  maxUploadFileSize,
  onError = media_upload_noop,
  onFileChange
}) {
  const {
    getCurrentPost,
    getEditorSettings
  } = (0,external_wp_data_namespaceObject.select)(store_store);
  const wpAllowedMimeTypes = getEditorSettings().allowedMimeTypes;
  maxUploadFileSize = maxUploadFileSize || getEditorSettings().maxUploadFileSize;
  const currentPost = getCurrentPost();
  // Templates and template parts' numerical ID is stored in `wp_id`.
  const currentPostId = typeof currentPost?.id === 'number' ? currentPost.id : currentPost?.wp_id;
  const postData = currentPostId ? {
    post: currentPostId
  } : {};
  (0,external_wp_mediaUtils_namespaceObject.uploadMedia)({
    allowedTypes,
    filesList,
    onFileChange,
    additionalData: {
      ...postData,
      ...additionalData
    },
    maxUploadFileSize,
    onError: ({
      message
    }) => onError(message),
    wpAllowedMimeTypes
  });
}

// EXTERNAL MODULE: ./node_modules/deepmerge/dist/cjs.js
var cjs = __webpack_require__(66);
var cjs_default = /*#__PURE__*/__webpack_require__.n(cjs);
;// CONCATENATED MODULE: ./node_modules/is-plain-object/dist/is-plain-object.mjs
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

function isObject(o) {
  return Object.prototype.toString.call(o) === '[object Object]';
}

function isPlainObject(o) {
  var ctor,prot;

  if (isObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (ctor === undefined) return true;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
}



;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/utils/set-nested-value.js
/**
 * Sets the value at path of object.
 * If a portion of path doesn’t exist, it’s created.
 * Arrays are created for missing index properties while objects are created
 * for all other missing properties.
 *
 * This function intentionally mutates the input object.
 *
 * Inspired by _.set().
 *
 * @see https://lodash.com/docs/4.17.15#set
 *
 * @todo Needs to be deduplicated with its copy in `@wordpress/core-data`.
 *
 * @param {Object} object Object to modify
 * @param {Array}  path   Path of the property to set.
 * @param {*}      value  Value to set.
 */
function setNestedValue(object, path, value) {
  if (!object || typeof object !== 'object') {
    return object;
  }
  path.reduce((acc, key, idx) => {
    if (acc[key] === undefined) {
      if (Number.isInteger(path[idx + 1])) {
        acc[key] = [];
      } else {
        acc[key] = {};
      }
    }
    if (idx === path.length - 1) {
      acc[key] = value;
    }
    return acc[key];
  }, object);
  return object;
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/global-styles-provider/index.js
/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



const {
  GlobalStylesContext: global_styles_provider_GlobalStylesContext,
  cleanEmptyObject
} = unlock(external_wp_blockEditor_namespaceObject.privateApis);
function mergeBaseAndUserConfigs(base, user) {
  return cjs_default()(base, user, {
    // We only pass as arrays the presets,
    // in which case we want the new array of values
    // to override the old array (no merging).
    isMergeableObject: isPlainObject
  });
}

/**
 * Resolves shared block style variation definitions from the user origin
 * under their respective block types and registers the block style if required.
 *
 * @param {Object} userConfig Current user origin global styles data.
 * @return {Object} Updated global styles data.
 */
function useResolvedBlockStyleVariationsConfig(userConfig) {
  const {
    getBlockStyles
  } = (0,external_wp_data_namespaceObject.useSelect)(external_wp_blocks_namespaceObject.store);
  const sharedVariations = userConfig?.styles?.blocks?.variations;

  // Collect block style variation definitions to merge and unregistered
  // block styles for automatic registration.
  const [userConfigToMerge, unregisteredStyles] = (0,external_wp_element_namespaceObject.useMemo)(() => {
    if (!sharedVariations) {
      return [];
    }
    const variationsConfigToMerge = {};
    const unregisteredBlockStyles = [];
    Object.entries(sharedVariations).forEach(([variationName, variation]) => {
      if (!variation?.blockTypes?.length) {
        return;
      }
      variation.blockTypes.forEach(blockName => {
        const blockStyles = getBlockStyles(blockName);
        const registeredBlockStyle = blockStyles.find(({
          name
        }) => name === variationName);
        if (!registeredBlockStyle) {
          unregisteredBlockStyles.push([blockName, {
            name: variationName,
            label: variationName
          }]);
        }
        const path = ['styles', 'blocks', blockName, 'variations', variationName];
        setNestedValue(variationsConfigToMerge, path, variation);
      });
    });
    return [variationsConfigToMerge, unregisteredBlockStyles];
  }, [sharedVariations, getBlockStyles]);

  // Automatically register missing block styles from variations.
  (0,external_wp_element_namespaceObject.useEffect)(() => unregisteredStyles?.forEach(unregisteredStyle => (0,external_wp_blocks_namespaceObject.registerBlockStyle)(...unregisteredStyle)), [unregisteredStyles]);

  // Merge shared block style variation definitions into overall user config.
  const updatedConfig = (0,external_wp_element_namespaceObject.useMemo)(() => {
    if (!userConfigToMerge) {
      return userConfig;
    }
    return cjs_default()(userConfigToMerge, userConfig);
  }, [userConfigToMerge, userConfig]);
  return updatedConfig;
}
function useGlobalStylesUserConfig() {
  const {
    globalStylesId,
    isReady,
    settings,
    styles,
    _links
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getEditedEntityRecord,
      hasFinishedResolution
    } = select(external_wp_coreData_namespaceObject.store);
    const _globalStylesId = select(external_wp_coreData_namespaceObject.store).__experimentalGetCurrentGlobalStylesId();
    const record = _globalStylesId ? getEditedEntityRecord('root', 'globalStyles', _globalStylesId) : undefined;
    let hasResolved = false;
    if (hasFinishedResolution('__experimentalGetCurrentGlobalStylesId')) {
      hasResolved = _globalStylesId ? hasFinishedResolution('getEditedEntityRecord', ['root', 'globalStyles', _globalStylesId]) : true;
    }
    return {
      globalStylesId: _globalStylesId,
      isReady: hasResolved,
      settings: record?.settings,
      styles: record?.styles,
      _links: record?._links
    };
  }, []);
  const {
    getEditedEntityRecord
  } = (0,external_wp_data_namespaceObject.useSelect)(external_wp_coreData_namespaceObject.store);
  const {
    editEntityRecord
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_coreData_namespaceObject.store);
  const config = (0,external_wp_element_namespaceObject.useMemo)(() => {
    return {
      settings: settings !== null && settings !== void 0 ? settings : {},
      styles: styles !== null && styles !== void 0 ? styles : {},
      _links: _links !== null && _links !== void 0 ? _links : {}
    };
  }, [settings, styles, _links]);
  const setConfig = (0,external_wp_element_namespaceObject.useCallback)((callback, options = {}) => {
    var _record$styles, _record$settings, _record$_links;
    const record = getEditedEntityRecord('root', 'globalStyles', globalStylesId);
    const currentConfig = {
      styles: (_record$styles = record?.styles) !== null && _record$styles !== void 0 ? _record$styles : {},
      settings: (_record$settings = record?.settings) !== null && _record$settings !== void 0 ? _record$settings : {},
      _links: (_record$_links = record?._links) !== null && _record$_links !== void 0 ? _record$_links : {}
    };
    const updatedConfig = callback(currentConfig);
    editEntityRecord('root', 'globalStyles', globalStylesId, {
      styles: cleanEmptyObject(updatedConfig.styles) || {},
      settings: cleanEmptyObject(updatedConfig.settings) || {},
      _links: cleanEmptyObject(updatedConfig._links) || {}
    }, options);
  }, [globalStylesId]);
  return [isReady, config, setConfig];
}
function useGlobalStylesBaseConfig() {
  const baseConfig = (0,external_wp_data_namespaceObject.useSelect)(select => {
    return select(external_wp_coreData_namespaceObject.store).__experimentalGetCurrentThemeBaseGlobalStyles();
  }, []);
  return [!!baseConfig, baseConfig];
}
function useGlobalStylesContext() {
  const [isUserConfigReady, userConfig, setUserConfig] = useGlobalStylesUserConfig();
  const [isBaseConfigReady, baseConfig] = useGlobalStylesBaseConfig();
  const userConfigWithVariations = useResolvedBlockStyleVariationsConfig(userConfig);
  const mergedConfig = (0,external_wp_element_namespaceObject.useMemo)(() => {
    if (!baseConfig || !userConfigWithVariations) {
      return {};
    }
    return mergeBaseAndUserConfigs(baseConfig, userConfigWithVariations);
  }, [userConfigWithVariations, baseConfig]);
  const context = (0,external_wp_element_namespaceObject.useMemo)(() => {
    return {
      isReady: isUserConfigReady && isBaseConfigReady,
      user: userConfigWithVariations,
      base: baseConfig,
      merged: mergedConfig,
      setUserConfig
    };
  }, [mergedConfig, userConfigWithVariations, baseConfig, setUserConfig, isUserConfigReady, isBaseConfigReady]);
  return context;
}
function GlobalStylesProvider({
  children
}) {
  const context = useGlobalStylesContext();
  if (!context.isReady) {
    return null;
  }
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(global_styles_provider_GlobalStylesContext.Provider, {
    value: context,
    children: children
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/provider/use-block-editor-settings.js
/**
 * WordPress dependencies
 */









/**
 * Internal dependencies
 */





const EMPTY_BLOCKS_LIST = [];
const DEFAULT_STYLES = {};
function __experimentalReusableBlocksSelect(select) {
  var _select$getEntityReco;
  return (_select$getEntityReco = select(external_wp_coreData_namespaceObject.store).getEntityRecords('postType', 'wp_block', {
    per_page: -1
  })) !== null && _select$getEntityReco !== void 0 ? _select$getEntityReco : EMPTY_BLOCKS_LIST;
}
const BLOCK_EDITOR_SETTINGS = ['__experimentalBlockDirectory', '__experimentalDiscussionSettings', '__experimentalFeatures', '__experimentalGlobalStylesBaseStyles', '__unstableGalleryWithImageBlocks', 'alignWide', 'blockInspectorTabs', 'allowedMimeTypes', 'bodyPlaceholder', 'canLockBlocks', 'capabilities', 'clearBlockSelection', 'codeEditingEnabled', 'colors', 'disableCustomColors', 'disableCustomFontSizes', 'disableCustomSpacingSizes', 'disableCustomGradients', 'disableLayoutStyles', 'enableCustomLineHeight', 'enableCustomSpacing', 'enableCustomUnits', 'enableOpenverseMediaCategory', 'fontSizes', 'gradients', 'generateAnchors', 'onNavigateToEntityRecord', 'imageDefaultSize', 'imageDimensions', 'imageEditing', 'imageSizes', 'isRTL', 'locale', 'maxWidth', 'postContentAttributes', 'postsPerPage', 'readOnly', 'sectionRootClientId', 'styles', 'titlePlaceholder', 'supportsLayout', 'widgetTypesToHideFromLegacyWidgetBlock', '__unstableHasCustomAppender', '__unstableIsPreviewMode', '__unstableResolvedAssets', '__unstableIsBlockBasedTheme', '__experimentalArchiveTitleTypeLabel', '__experimentalArchiveTitleNameLabel'];
const {
  globalStylesDataKey,
  selectBlockPatternsKey,
  reusableBlocksSelectKey
} = unlock(external_wp_blockEditor_namespaceObject.privateApis);

/**
 * React hook used to compute the block editor settings to use for the post editor.
 *
 * @param {Object} settings      EditorProvider settings prop.
 * @param {string} postType      Editor root level post type.
 * @param {string} postId        Editor root level post ID.
 * @param {string} renderingMode Editor rendering mode.
 *
 * @return {Object} Block Editor Settings.
 */
function useBlockEditorSettings(settings, postType, postId, renderingMode) {
  var _mergedGlobalStyles$s, _settings$__experimen, _settings$__experimen2;
  const isLargeViewport = (0,external_wp_compose_namespaceObject.useViewportMatch)('medium');
  const {
    allowRightClickOverrides,
    blockTypes,
    focusMode,
    hasFixedToolbar,
    isDistractionFree,
    keepCaretInsideBlock,
    hasUploadPermissions,
    hiddenBlockTypes,
    canUseUnfilteredHTML,
    userCanCreatePages,
    pageOnFront,
    pageForPosts,
    userPatternCategories,
    restBlockPatternCategories,
    sectionRootClientId
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    var _canUser;
    const {
      canUser,
      getRawEntityRecord,
      getEntityRecord,
      getUserPatternCategories,
      getBlockPatternCategories
    } = select(external_wp_coreData_namespaceObject.store);
    const {
      get
    } = select(external_wp_preferences_namespaceObject.store);
    const {
      getBlockTypes
    } = select(external_wp_blocks_namespaceObject.store);
    const {
      getBlocksByName,
      getBlockAttributes
    } = select(external_wp_blockEditor_namespaceObject.store);
    const siteSettings = canUser('read', 'settings') ? getEntityRecord('root', 'site') : undefined;
    function getSectionRootBlock() {
      var _getBlocksByName$find;
      if (renderingMode === 'template-locked') {
        var _getBlocksByName$;
        return (_getBlocksByName$ = getBlocksByName('core/post-content')?.[0]) !== null && _getBlocksByName$ !== void 0 ? _getBlocksByName$ : '';
      }
      return (_getBlocksByName$find = getBlocksByName('core/group').find(clientId => getBlockAttributes(clientId)?.tagName === 'main')) !== null && _getBlocksByName$find !== void 0 ? _getBlocksByName$find : '';
    }
    return {
      allowRightClickOverrides: get('core', 'allowRightClickOverrides'),
      blockTypes: getBlockTypes(),
      canUseUnfilteredHTML: getRawEntityRecord('postType', postType, postId)?._links?.hasOwnProperty('wp:action-unfiltered-html'),
      focusMode: get('core', 'focusMode'),
      hasFixedToolbar: get('core', 'fixedToolbar') || !isLargeViewport,
      hiddenBlockTypes: get('core', 'hiddenBlockTypes'),
      isDistractionFree: get('core', 'distractionFree'),
      keepCaretInsideBlock: get('core', 'keepCaretInsideBlock'),
      hasUploadPermissions: (_canUser = canUser('create', 'media')) !== null && _canUser !== void 0 ? _canUser : true,
      userCanCreatePages: canUser('create', 'pages'),
      pageOnFront: siteSettings?.page_on_front,
      pageForPosts: siteSettings?.page_for_posts,
      userPatternCategories: getUserPatternCategories(),
      restBlockPatternCategories: getBlockPatternCategories(),
      sectionRootClientId: getSectionRootBlock()
    };
  }, [postType, postId, isLargeViewport, renderingMode]);
  const {
    merged: mergedGlobalStyles
  } = useGlobalStylesContext();
  const globalStylesData = (_mergedGlobalStyles$s = mergedGlobalStyles.styles) !== null && _mergedGlobalStyles$s !== void 0 ? _mergedGlobalStyles$s : DEFAULT_STYLES;
  const settingsBlockPatterns = (_settings$__experimen = settings.__experimentalAdditionalBlockPatterns) !== null && _settings$__experimen !== void 0 ? _settings$__experimen :
  // WP 6.0
  settings.__experimentalBlockPatterns; // WP 5.9
  const settingsBlockPatternCategories = (_settings$__experimen2 = settings.__experimentalAdditionalBlockPatternCategories) !== null && _settings$__experimen2 !== void 0 ? _settings$__experimen2 :
  // WP 6.0
  settings.__experimentalBlockPatternCategories; // WP 5.9

  const blockPatterns = (0,external_wp_element_namespaceObject.useMemo)(() => [...(settingsBlockPatterns || [])].filter(({
    postTypes
  }) => {
    return !postTypes || Array.isArray(postTypes) && postTypes.includes(postType);
  }), [settingsBlockPatterns, postType]);
  const blockPatternCategories = (0,external_wp_element_namespaceObject.useMemo)(() => [...(settingsBlockPatternCategories || []), ...(restBlockPatternCategories || [])].filter((x, index, arr) => index === arr.findIndex(y => x.name === y.name)), [settingsBlockPatternCategories, restBlockPatternCategories]);
  const {
    undo,
    setIsInserterOpened
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  const {
    saveEntityRecord
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_coreData_namespaceObject.store);

  /**
   * Creates a Post entity.
   * This is utilised by the Link UI to allow for on-the-fly creation of Posts/Pages.
   *
   * @param {Object} options parameters for the post being created. These mirror those used on 3rd param of saveEntityRecord.
   * @return {Object} the post type object that was created.
   */
  const createPageEntity = (0,external_wp_element_namespaceObject.useCallback)(options => {
    if (!userCanCreatePages) {
      return Promise.reject({
        message: (0,external_wp_i18n_namespaceObject.__)('You do not have permission to create Pages.')
      });
    }
    return saveEntityRecord('postType', 'page', options);
  }, [saveEntityRecord, userCanCreatePages]);
  const allowedBlockTypes = (0,external_wp_element_namespaceObject.useMemo)(() => {
    // Omit hidden block types if exists and non-empty.
    if (hiddenBlockTypes && hiddenBlockTypes.length > 0) {
      // Defer to passed setting for `allowedBlockTypes` if provided as
      // anything other than `true` (where `true` is equivalent to allow
      // all block types).
      const defaultAllowedBlockTypes = true === settings.allowedBlockTypes ? blockTypes.map(({
        name
      }) => name) : settings.allowedBlockTypes || [];
      return defaultAllowedBlockTypes.filter(type => !hiddenBlockTypes.includes(type));
    }
    return settings.allowedBlockTypes;
  }, [settings.allowedBlockTypes, hiddenBlockTypes, blockTypes]);
  const forceDisableFocusMode = settings.focusMode === false;
  return (0,external_wp_element_namespaceObject.useMemo)(() => {
    const blockEditorSettings = {
      ...Object.fromEntries(Object.entries(settings).filter(([key]) => BLOCK_EDITOR_SETTINGS.includes(key))),
      [globalStylesDataKey]: globalStylesData,
      allowedBlockTypes,
      allowRightClickOverrides,
      focusMode: focusMode && !forceDisableFocusMode,
      hasFixedToolbar,
      isDistractionFree,
      keepCaretInsideBlock,
      mediaUpload: hasUploadPermissions ? mediaUpload : undefined,
      __experimentalBlockPatterns: blockPatterns,
      [selectBlockPatternsKey]: select => {
        const {
          hasFinishedResolution,
          getBlockPatternsForPostType
        } = unlock(select(external_wp_coreData_namespaceObject.store));
        const patterns = getBlockPatternsForPostType(postType);
        return hasFinishedResolution('getBlockPatterns') ? patterns : undefined;
      },
      [reusableBlocksSelectKey]: __experimentalReusableBlocksSelect,
      __experimentalBlockPatternCategories: blockPatternCategories,
      __experimentalUserPatternCategories: userPatternCategories,
      __experimentalFetchLinkSuggestions: (search, searchOptions) => (0,external_wp_coreData_namespaceObject.__experimentalFetchLinkSuggestions)(search, searchOptions, settings),
      inserterMediaCategories: media_categories,
      __experimentalFetchRichUrlData: external_wp_coreData_namespaceObject.__experimentalFetchUrlData,
      // Todo: This only checks the top level post, not the post within a template or any other entity that can be edited.
      // This might be better as a generic "canUser" selector.
      __experimentalCanUserUseUnfilteredHTML: canUseUnfilteredHTML,
      //Todo: this is only needed for native and should probably be removed.
      __experimentalUndo: undo,
      // Check whether we want all site editor frames to have outlines
      // including the navigation / pattern / parts editors.
      outlineMode: postType === 'wp_template',
      // Check these two properties: they were not present in the site editor.
      __experimentalCreatePageEntity: createPageEntity,
      __experimentalUserCanCreatePages: userCanCreatePages,
      pageOnFront,
      pageForPosts,
      __experimentalPreferPatternsOnRoot: postType === 'wp_template',
      templateLock: postType === 'wp_navigation' ? 'insert' : settings.templateLock,
      template: postType === 'wp_navigation' ? [['core/navigation', {}, []]] : settings.template,
      __experimentalSetIsInserterOpened: setIsInserterOpened
    };
    lock(blockEditorSettings, {
      sectionRootClientId
    });
    return blockEditorSettings;
  }, [allowedBlockTypes, allowRightClickOverrides, focusMode, forceDisableFocusMode, hasFixedToolbar, isDistractionFree, keepCaretInsideBlock, settings, hasUploadPermissions, userPatternCategories, blockPatterns, blockPatternCategories, canUseUnfilteredHTML, undo, createPageEntity, userCanCreatePages, pageOnFront, pageForPosts, postType, setIsInserterOpened, sectionRootClientId, globalStylesData]);
}
/* harmony default export */ const use_block_editor_settings = (useBlockEditorSettings);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/provider/disable-non-page-content-blocks.js
/**
 * WordPress dependencies
 */




const CONTENT_ONLY_BLOCKS = (0,external_wp_hooks_namespaceObject.applyFilters)('editor.postContentBlockTypes', ['core/post-title', 'core/post-featured-image', 'core/post-content', 'core/template-part']);

/**
 * Component that when rendered, makes it so that the site editor allows only
 * page content to be edited.
 */
function DisableNonPageContentBlocks() {
  // Note that there are two separate subscription because the result for each
  // returns a new array.
  const contentOnlyIds = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getBlocksByName,
      getBlockParents,
      getBlockName
    } = select(external_wp_blockEditor_namespaceObject.store);
    return getBlocksByName(CONTENT_ONLY_BLOCKS).filter(clientId => getBlockParents(clientId).every(parentClientId => {
      const parentBlockName = getBlockName(parentClientId);
      return (
        // Ignore descendents of the query block.
        parentBlockName !== 'core/query' &&
        // Enable only the top-most block.
        !CONTENT_ONLY_BLOCKS.includes(parentBlockName)
      );
    }));
  }, []);
  const disabledIds = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getBlocksByName,
      getBlockOrder
    } = select(external_wp_blockEditor_namespaceObject.store);
    return getBlocksByName(['core/template-part']).flatMap(clientId => getBlockOrder(clientId));
  }, []);
  const registry = (0,external_wp_data_namespaceObject.useRegistry)();
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    const {
      setBlockEditingMode,
      unsetBlockEditingMode
    } = registry.dispatch(external_wp_blockEditor_namespaceObject.store);
    registry.batch(() => {
      setBlockEditingMode('', 'disabled');
      for (const clientId of contentOnlyIds) {
        setBlockEditingMode(clientId, 'contentOnly');
      }
      for (const clientId of disabledIds) {
        setBlockEditingMode(clientId, 'disabled');
      }
    });
    return () => {
      registry.batch(() => {
        unsetBlockEditingMode('');
        for (const clientId of contentOnlyIds) {
          unsetBlockEditingMode(clientId);
        }
        for (const clientId of disabledIds) {
          unsetBlockEditingMode(clientId);
        }
      });
    };
  }, [contentOnlyIds, disabledIds, registry]);
  return null;
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/provider/navigation-block-editing-mode.js
/**
 * WordPress dependencies
 */




/**
 * For the Navigation block editor, we need to force the block editor to contentOnly for that block.
 *
 * Set block editing mode to contentOnly when entering Navigation focus mode.
 * this ensures that non-content controls on the block will be hidden and thus
 * the user can focus on editing the Navigation Menu content only.
 */

function NavigationBlockEditingMode() {
  // In the navigation block editor,
  // the navigation block is the only root block.
  const blockClientId = (0,external_wp_data_namespaceObject.useSelect)(select => select(external_wp_blockEditor_namespaceObject.store).getBlockOrder()?.[0], []);
  const {
    setBlockEditingMode,
    unsetBlockEditingMode
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_blockEditor_namespaceObject.store);
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    if (!blockClientId) {
      return;
    }
    setBlockEditingMode(blockClientId, 'contentOnly');
    return () => {
      unsetBlockEditingMode(blockClientId);
    };
  }, [blockClientId, unsetBlockEditingMode, setBlockEditingMode]);
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/provider/use-hide-blocks-from-inserter.js
/**
 * WordPress dependencies
 */



// These post types are "structural" block lists.
// We should be allowed to use
// the post content and template parts blocks within them.
const POST_TYPES_ALLOWING_POST_CONTENT_TEMPLATE_PART = ['wp_block', 'wp_template', 'wp_template_part'];

/**
 * In some specific contexts,
 * the template part and post content blocks need to be hidden.
 *
 * @param {string} postType Post Type
 * @param {string} mode     Rendering mode
 */
function useHideBlocksFromInserter(postType, mode) {
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    /*
     * Prevent adding template part in the editor.
     */
    (0,external_wp_hooks_namespaceObject.addFilter)('blockEditor.__unstableCanInsertBlockType', 'removeTemplatePartsFromInserter', (canInsert, blockType) => {
      if (!POST_TYPES_ALLOWING_POST_CONTENT_TEMPLATE_PART.includes(postType) && blockType.name === 'core/template-part' && mode === 'post-only') {
        return false;
      }
      return canInsert;
    });

    /*
     * Prevent adding post content block (except in query block) in the editor.
     */
    (0,external_wp_hooks_namespaceObject.addFilter)('blockEditor.__unstableCanInsertBlockType', 'removePostContentFromInserter', (canInsert, blockType, rootClientId, {
      getBlockParentsByBlockName
    }) => {
      if (!POST_TYPES_ALLOWING_POST_CONTENT_TEMPLATE_PART.includes(postType) && blockType.name === 'core/post-content') {
        return getBlockParentsByBlockName(rootClientId, 'core/query').length > 0;
      }
      return canInsert;
    });
    return () => {
      (0,external_wp_hooks_namespaceObject.removeFilter)('blockEditor.__unstableCanInsertBlockType', 'removeTemplatePartsFromInserter');
      (0,external_wp_hooks_namespaceObject.removeFilter)('blockEditor.__unstableCanInsertBlockType', 'removePostContentFromInserter');
    };
  }, [postType, mode]);
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/keyboard.js
/**
 * WordPress dependencies
 */



const keyboard = /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_primitives_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.Path, {
    d: "m16 15.5h-8v-1.5h8zm-7.5-2.5h-2v-2h2zm3 0h-2v-2h2zm3 0h-2v-2h2zm3 0h-2v-2h2zm-9-3h-2v-2h2zm3 0h-2v-2h2zm3 0h-2v-2h2zm3 0h-2v-2h2z"
  }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.Path, {
    d: "m18.5 6.5h-13a.5.5 0 0 0 -.5.5v9.5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9.5a.5.5 0 0 0 -.5-.5zm-13-1.5h13a2 2 0 0 1 2 2v9.5a2 2 0 0 1 -2 2h-13a2 2 0 0 1 -2-2v-9.5a2 2 0 0 1 2-2z"
  })]
});
/* harmony default export */ const library_keyboard = (keyboard);

;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/list-view.js
/**
 * WordPress dependencies
 */


const listView = /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.Path, {
    d: "M3 6h11v1.5H3V6Zm3.5 5.5h11V13h-11v-1.5ZM21 17H10v1.5h11V17Z"
  })
});
/* harmony default export */ const list_view = (listView);

;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/code.js
/**
 * WordPress dependencies
 */


const code = /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.Path, {
    d: "M20.8 10.7l-4.3-4.3-1.1 1.1 4.3 4.3c.1.1.1.3 0 .4l-4.3 4.3 1.1 1.1 4.3-4.3c.7-.8.7-1.9 0-2.6zM4.2 11.8l4.3-4.3-1-1-4.3 4.3c-.7.7-.7 1.8 0 2.5l4.3 4.3 1.1-1.1-4.3-4.3c-.2-.1-.2-.3-.1-.4z"
  })
});
/* harmony default export */ const library_code = (code);

;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/drawer-left.js
/**
 * WordPress dependencies
 */


const drawerLeft = /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.SVG, {
  width: "24",
  height: "24",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM8.5 18.5H6c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h2.5v13zm10-.5c0 .3-.2.5-.5.5h-8v-13h8c.3 0 .5.2.5.5v12z"
  })
});
/* harmony default export */ const drawer_left = (drawerLeft);

;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/drawer-right.js
/**
 * WordPress dependencies
 */


const drawerRight = /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.SVG, {
  width: "24",
  height: "24",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-4 14.5H6c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h8v13zm4.5-.5c0 .3-.2.5-.5.5h-2.5v-13H18c.3 0 .5.2.5.5v12z"
  })
});
/* harmony default export */ const drawer_right = (drawerRight);

;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/block-default.js
/**
 * WordPress dependencies
 */


const blockDefault = /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.Path, {
    d: "M19 8h-1V6h-5v2h-2V6H6v2H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm.5 10c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5v-8c0-.3.2-.5.5-.5h14c.3 0 .5.2.5.5v8z"
  })
});
/* harmony default export */ const block_default = (blockDefault);

;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/format-list-bullets.js
/**
 * WordPress dependencies
 */


const formatListBullets = /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.Path, {
    d: "M11.1 15.8H20v-1.5h-8.9v1.5zm0-8.6v1.5H20V7.2h-8.9zM6 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
  })
});
/* harmony default export */ const format_list_bullets = (formatListBullets);

;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/external.js
/**
 * WordPress dependencies
 */


const external = /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.Path, {
    d: "M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"
  })
});
/* harmony default export */ const library_external = (external);

;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/pencil.js
/**
 * WordPress dependencies
 */


const pencil = /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.Path, {
    d: "m19 7-3-3-8.5 8.5-1 4 4-1L19 7Zm-7 11.5H5V20h7v-1.5Z"
  })
});
/* harmony default export */ const library_pencil = (pencil);

;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/edit.js
/**
 * Internal dependencies
 */


/* harmony default export */ const edit = (library_pencil);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/pattern-rename-modal/index.js
/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */




const {
  RenamePatternModal
} = unlock(external_wp_patterns_namespaceObject.privateApis);
const modalName = 'editor/pattern-rename';
function PatternRenameModal() {
  const {
    record,
    postType
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getCurrentPostType,
      getCurrentPostId
    } = select(store_store);
    const {
      getEditedEntityRecord
    } = select(external_wp_coreData_namespaceObject.store);
    const _postType = getCurrentPostType();
    return {
      record: getEditedEntityRecord('postType', _postType, getCurrentPostId()),
      postType: _postType
    };
  }, []);
  const {
    closeModal
  } = (0,external_wp_data_namespaceObject.useDispatch)(store);
  const isActive = (0,external_wp_data_namespaceObject.useSelect)(select => select(store).isModalActive(modalName));
  if (!isActive || postType !== PATTERN_POST_TYPE) {
    return null;
  }
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(RenamePatternModal, {
    onClose: closeModal,
    pattern: record
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/pattern-duplicate-modal/index.js
/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */




const {
  DuplicatePatternModal
} = unlock(external_wp_patterns_namespaceObject.privateApis);
const pattern_duplicate_modal_modalName = 'editor/pattern-duplicate';
function PatternDuplicateModal() {
  const {
    record,
    postType
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getCurrentPostType,
      getCurrentPostId
    } = select(store_store);
    const {
      getEditedEntityRecord
    } = select(external_wp_coreData_namespaceObject.store);
    const _postType = getCurrentPostType();
    return {
      record: getEditedEntityRecord('postType', _postType, getCurrentPostId()),
      postType: _postType
    };
  }, []);
  const {
    closeModal
  } = (0,external_wp_data_namespaceObject.useDispatch)(store);
  const isActive = (0,external_wp_data_namespaceObject.useSelect)(select => select(store).isModalActive(pattern_duplicate_modal_modalName));
  if (!isActive || postType !== PATTERN_POST_TYPE) {
    return null;
  }
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(DuplicatePatternModal, {
    onClose: closeModal,
    onSuccess: () => closeModal(),
    pattern: record
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/commands/index.js
/**
 * WordPress dependencies
 */










/**
 * Internal dependencies
 */




function useEditorCommandLoader() {
  const {
    editorMode,
    isListViewOpen,
    showBlockBreadcrumbs,
    isDistractionFree,
    isTopToolbar,
    isFocusMode,
    isPreviewMode,
    isViewable,
    isCodeEditingEnabled,
    isRichEditingEnabled,
    isPublishSidebarEnabled
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    var _get, _getPostType$viewable;
    const {
      get
    } = select(external_wp_preferences_namespaceObject.store);
    const {
      isListViewOpened,
      getCurrentPostType,
      getEditorSettings
    } = select(store_store);
    const {
      getSettings
    } = select(external_wp_blockEditor_namespaceObject.store);
    const {
      getPostType
    } = select(external_wp_coreData_namespaceObject.store);
    return {
      editorMode: (_get = get('core', 'editorMode')) !== null && _get !== void 0 ? _get : 'visual',
      isListViewOpen: isListViewOpened(),
      showBlockBreadcrumbs: get('core', 'showBlockBreadcrumbs'),
      isDistractionFree: get('core', 'distractionFree'),
      isFocusMode: get('core', 'focusMode'),
      isTopToolbar: get('core', 'fixedToolbar'),
      isPreviewMode: getSettings().__unstableIsPreviewMode,
      isViewable: (_getPostType$viewable = getPostType(getCurrentPostType())?.viewable) !== null && _getPostType$viewable !== void 0 ? _getPostType$viewable : false,
      isCodeEditingEnabled: getEditorSettings().codeEditingEnabled,
      isRichEditingEnabled: getEditorSettings().richEditingEnabled,
      isPublishSidebarEnabled: select(store_store).isPublishSidebarEnabled()
    };
  }, []);
  const {
    getActiveComplementaryArea
  } = (0,external_wp_data_namespaceObject.useSelect)(store);
  const {
    toggle
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_preferences_namespaceObject.store);
  const {
    createInfoNotice
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_notices_namespaceObject.store);
  const {
    __unstableSaveForPreview,
    setIsListViewOpened,
    switchEditorMode,
    toggleDistractionFree
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  const {
    openModal,
    enableComplementaryArea,
    disableComplementaryArea
  } = (0,external_wp_data_namespaceObject.useDispatch)(store);
  const {
    getCurrentPostId
  } = (0,external_wp_data_namespaceObject.useSelect)(store_store);
  const allowSwitchEditorMode = isCodeEditingEnabled && isRichEditingEnabled;
  if (isPreviewMode) {
    return {
      commands: [],
      isLoading: false
    };
  }
  const commands = [];
  commands.push({
    name: 'core/open-shortcut-help',
    label: (0,external_wp_i18n_namespaceObject.__)('Keyboard shortcuts'),
    icon: library_keyboard,
    callback: () => {
      openModal('editor/keyboard-shortcut-help');
    }
  });
  commands.push({
    name: 'core/toggle-distraction-free',
    label: isDistractionFree ? (0,external_wp_i18n_namespaceObject.__)('Exit Distraction Free') : (0,external_wp_i18n_namespaceObject.__)('Enter Distraction Free'),
    callback: ({
      close
    }) => {
      toggleDistractionFree();
      close();
    }
  });
  commands.push({
    name: 'core/open-preferences',
    label: (0,external_wp_i18n_namespaceObject.__)('Editor preferences'),
    callback: () => {
      openModal('editor/preferences');
    }
  });
  commands.push({
    name: 'core/toggle-spotlight-mode',
    label: (0,external_wp_i18n_namespaceObject.__)('Toggle spotlight'),
    callback: ({
      close
    }) => {
      toggle('core', 'focusMode');
      close();
      createInfoNotice(isFocusMode ? (0,external_wp_i18n_namespaceObject.__)('Spotlight off.') : (0,external_wp_i18n_namespaceObject.__)('Spotlight on.'), {
        id: 'core/editor/toggle-spotlight-mode/notice',
        type: 'snackbar',
        actions: [{
          label: (0,external_wp_i18n_namespaceObject.__)('Undo'),
          onClick: () => {
            toggle('core', 'focusMode');
          }
        }]
      });
    }
  });
  commands.push({
    name: 'core/toggle-list-view',
    label: isListViewOpen ? (0,external_wp_i18n_namespaceObject.__)('Close List View') : (0,external_wp_i18n_namespaceObject.__)('Open List View'),
    icon: list_view,
    callback: ({
      close
    }) => {
      setIsListViewOpened(!isListViewOpen);
      close();
      createInfoNotice(isListViewOpen ? (0,external_wp_i18n_namespaceObject.__)('List View off.') : (0,external_wp_i18n_namespaceObject.__)('List View on.'), {
        id: 'core/editor/toggle-list-view/notice',
        type: 'snackbar'
      });
    }
  });
  commands.push({
    name: 'core/toggle-top-toolbar',
    label: (0,external_wp_i18n_namespaceObject.__)('Toggle top toolbar'),
    callback: ({
      close
    }) => {
      toggle('core', 'fixedToolbar');
      if (isDistractionFree) {
        toggleDistractionFree();
      }
      close();
      createInfoNotice(isTopToolbar ? (0,external_wp_i18n_namespaceObject.__)('Top toolbar off.') : (0,external_wp_i18n_namespaceObject.__)('Top toolbar on.'), {
        id: 'core/editor/toggle-top-toolbar/notice',
        type: 'snackbar',
        actions: [{
          label: (0,external_wp_i18n_namespaceObject.__)('Undo'),
          onClick: () => {
            toggle('core', 'fixedToolbar');
          }
        }]
      });
    }
  });
  if (allowSwitchEditorMode) {
    commands.push({
      name: 'core/toggle-code-editor',
      label: editorMode === 'visual' ? (0,external_wp_i18n_namespaceObject.__)('Open code editor') : (0,external_wp_i18n_namespaceObject.__)('Exit code editor'),
      icon: library_code,
      callback: ({
        close
      }) => {
        switchEditorMode(editorMode === 'visual' ? 'text' : 'visual');
        close();
      }
    });
  }
  commands.push({
    name: 'core/toggle-breadcrumbs',
    label: showBlockBreadcrumbs ? (0,external_wp_i18n_namespaceObject.__)('Hide block breadcrumbs') : (0,external_wp_i18n_namespaceObject.__)('Show block breadcrumbs'),
    callback: ({
      close
    }) => {
      toggle('core', 'showBlockBreadcrumbs');
      close();
      createInfoNotice(showBlockBreadcrumbs ? (0,external_wp_i18n_namespaceObject.__)('Breadcrumbs hidden.') : (0,external_wp_i18n_namespaceObject.__)('Breadcrumbs visible.'), {
        id: 'core/editor/toggle-breadcrumbs/notice',
        type: 'snackbar'
      });
    }
  });
  commands.push({
    name: 'core/open-settings-sidebar',
    label: (0,external_wp_i18n_namespaceObject.__)('Toggle settings sidebar'),
    icon: (0,external_wp_i18n_namespaceObject.isRTL)() ? drawer_left : drawer_right,
    callback: ({
      close
    }) => {
      const activeSidebar = getActiveComplementaryArea('core');
      close();
      if (activeSidebar === 'edit-post/document') {
        disableComplementaryArea('core');
      } else {
        enableComplementaryArea('core', 'edit-post/document');
      }
    }
  });
  commands.push({
    name: 'core/open-block-inspector',
    label: (0,external_wp_i18n_namespaceObject.__)('Toggle block inspector'),
    icon: block_default,
    callback: ({
      close
    }) => {
      const activeSidebar = getActiveComplementaryArea('core');
      close();
      if (activeSidebar === 'edit-post/block') {
        disableComplementaryArea('core');
      } else {
        enableComplementaryArea('core', 'edit-post/block');
      }
    }
  });
  commands.push({
    name: 'core/toggle-publish-sidebar',
    label: isPublishSidebarEnabled ? (0,external_wp_i18n_namespaceObject.__)('Disable pre-publish checks') : (0,external_wp_i18n_namespaceObject.__)('Enable pre-publish checks'),
    icon: format_list_bullets,
    callback: ({
      close
    }) => {
      close();
      toggle('core', 'isPublishSidebarEnabled');
      createInfoNotice(isPublishSidebarEnabled ? (0,external_wp_i18n_namespaceObject.__)('Pre-publish checks disabled.') : (0,external_wp_i18n_namespaceObject.__)('Pre-publish checks enabled.'), {
        id: 'core/editor/publish-sidebar/notice',
        type: 'snackbar'
      });
    }
  });
  if (isViewable) {
    commands.push({
      name: 'core/preview-link',
      label: (0,external_wp_i18n_namespaceObject.__)('Preview in a new tab'),
      icon: library_external,
      callback: async ({
        close
      }) => {
        close();
        const postId = getCurrentPostId();
        const link = await __unstableSaveForPreview();
        window.open(link, `wp-preview-${postId}`);
      }
    });
  }
  return {
    commands,
    isLoading: false
  };
}
function useEditedEntityContextualCommands() {
  const {
    postType
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getCurrentPostType
    } = select(store_store);
    return {
      postType: getCurrentPostType()
    };
  }, []);
  const {
    openModal
  } = (0,external_wp_data_namespaceObject.useDispatch)(store);
  const commands = [];
  if (postType === PATTERN_POST_TYPE) {
    commands.push({
      name: 'core/rename-pattern',
      label: (0,external_wp_i18n_namespaceObject.__)('Rename pattern'),
      icon: edit,
      callback: ({
        close
      }) => {
        openModal(modalName);
        close();
      }
    });
    commands.push({
      name: 'core/duplicate-pattern',
      label: (0,external_wp_i18n_namespaceObject.__)('Duplicate pattern'),
      icon: library_symbol,
      callback: ({
        close
      }) => {
        openModal(pattern_duplicate_modal_modalName);
        close();
      }
    });
  }
  return {
    isLoading: false,
    commands
  };
}
function useCommands() {
  (0,external_wp_commands_namespaceObject.useCommandLoader)({
    name: 'core/editor/edit-ui',
    hook: useEditorCommandLoader
  });
  (0,external_wp_commands_namespaceObject.useCommandLoader)({
    name: 'core/editor/contextual-commands',
    hook: useEditedEntityContextualCommands,
    context: 'entity-edit'
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/block-removal-warnings/index.js
/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



const {
  BlockRemovalWarningModal
} = unlock(external_wp_blockEditor_namespaceObject.privateApis);

// Prevent accidental removal of certain blocks, asking the user for confirmation first.
const TEMPLATE_BLOCKS = ['core/post-content', 'core/post-template', 'core/query'];
const BLOCK_REMOVAL_RULES = [{
  // Template blocks.
  // The warning is only shown when a user manipulates templates or template parts.
  postTypes: ['wp_template', 'wp_template_part'],
  callback(removedBlocks) {
    const removedTemplateBlocks = removedBlocks.filter(({
      name
    }) => TEMPLATE_BLOCKS.includes(name));
    if (removedTemplateBlocks.length) {
      return (0,external_wp_i18n_namespaceObject._n)('Deleting this block will stop your post or page content from displaying on this template. It is not recommended.', 'Some of the deleted blocks will stop your post or page content from displaying on this template. It is not recommended.', removedBlocks.length);
    }
  }
}, {
  // Pattern overrides.
  // The warning is only shown when the user edits a pattern.
  postTypes: ['wp_block'],
  callback(removedBlocks) {
    const removedBlocksWithOverrides = removedBlocks.filter(({
      attributes
    }) => attributes?.metadata?.bindings && Object.values(attributes.metadata.bindings).some(binding => binding.source === 'core/pattern-overrides'));
    if (removedBlocksWithOverrides.length) {
      return (0,external_wp_i18n_namespaceObject._n)('The deleted block allows instance overrides. Removing it may result in content not displaying where this pattern is used. Are you sure you want to proceed?', 'Some of the deleted blocks allow instance overrides. Removing them may result in content not displaying where this pattern is used. Are you sure you want to proceed?', removedBlocks.length);
    }
  }
}];
function BlockRemovalWarnings() {
  const currentPostType = (0,external_wp_data_namespaceObject.useSelect)(select => select(store_store).getCurrentPostType(), []);
  const removalRulesForPostType = (0,external_wp_element_namespaceObject.useMemo)(() => BLOCK_REMOVAL_RULES.filter(rule => rule.postTypes.includes(currentPostType)), [currentPostType]);

  // `BlockRemovalWarnings` is rendered in the editor provider, a shared component
  // across react native and web. However, `BlockRemovalWarningModal` is web only.
  // Check it exists before trying to render it.
  if (!BlockRemovalWarningModal) {
    return null;
  }
  if (!removalRulesForPostType) {
    return null;
  }
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(BlockRemovalWarningModal, {
    rules: removalRulesForPostType
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/start-page-options/index.js
/**
 * WordPress dependencies
 */









/**
 * Internal dependencies
 */



function useStartPatterns() {
  // A pattern is a start pattern if it includes 'core/post-content' in its blockTypes,
  // and it has no postTypes declared and the current post type is page or if
  // the current post type is part of the postTypes declared.
  const {
    blockPatternsWithPostContentBlockType,
    postType
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getPatternsByBlockTypes,
      getBlocksByName
    } = select(external_wp_blockEditor_namespaceObject.store);
    const {
      getCurrentPostType,
      getRenderingMode
    } = select(store_store);
    const rootClientId = getRenderingMode() === 'post-only' ? '' : getBlocksByName('core/post-content')?.[0];
    return {
      blockPatternsWithPostContentBlockType: getPatternsByBlockTypes('core/post-content', rootClientId),
      postType: getCurrentPostType()
    };
  }, []);
  return (0,external_wp_element_namespaceObject.useMemo)(() => {
    // filter patterns without postTypes declared if the current postType is page
    // or patterns that declare the current postType in its post type array.
    return blockPatternsWithPostContentBlockType.filter(pattern => {
      return postType === 'page' && !pattern.postTypes || Array.isArray(pattern.postTypes) && pattern.postTypes.includes(postType);
    });
  }, [postType, blockPatternsWithPostContentBlockType]);
}
function PatternSelection({
  blockPatterns,
  onChoosePattern
}) {
  const shownBlockPatterns = (0,external_wp_compose_namespaceObject.useAsyncList)(blockPatterns);
  const {
    editEntityRecord
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_coreData_namespaceObject.store);
  const {
    postType,
    postId
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getCurrentPostType,
      getCurrentPostId
    } = select(store_store);
    return {
      postType: getCurrentPostType(),
      postId: getCurrentPostId()
    };
  }, []);
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_blockEditor_namespaceObject.__experimentalBlockPatternsList, {
    blockPatterns: blockPatterns,
    shownPatterns: shownBlockPatterns,
    onClickPattern: (_pattern, blocks) => {
      editEntityRecord('postType', postType, postId, {
        blocks,
        content: ({
          blocks: blocksForSerialization = []
        }) => (0,external_wp_blocks_namespaceObject.__unstableSerializeAndClean)(blocksForSerialization)
      });
      onChoosePattern();
    }
  });
}
function StartPageOptionsModal({
  onClose
}) {
  const startPatterns = useStartPatterns();
  const hasStartPattern = startPatterns.length > 0;
  if (!hasStartPattern) {
    return null;
  }
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Modal, {
    title: (0,external_wp_i18n_namespaceObject.__)('Choose a pattern'),
    isFullScreen: true,
    onRequestClose: onClose,
    children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
      className: "editor-start-page-options__modal-content",
      children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PatternSelection, {
        blockPatterns: startPatterns,
        onChoosePattern: onClose
      })
    })
  });
}
function StartPageOptions() {
  const [isClosed, setIsClosed] = (0,external_wp_element_namespaceObject.useState)(false);
  const {
    shouldEnableModal,
    postType,
    postId
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      isEditedPostDirty,
      isEditedPostEmpty,
      getCurrentPostType,
      getCurrentPostId
    } = select(store_store);
    const _postType = getCurrentPostType();
    return {
      shouldEnableModal: !isEditedPostDirty() && isEditedPostEmpty() && TEMPLATE_POST_TYPE !== _postType,
      postType: _postType,
      postId: getCurrentPostId()
    };
  }, []);
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    // Should reset the modal state when navigating to a new page/post.
    setIsClosed(false);
  }, [postType, postId]);
  if (!shouldEnableModal || isClosed) {
    return null;
  }
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(StartPageOptionsModal, {
    onClose: () => setIsClosed(true)
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/keyboard-shortcut-help-modal/config.js
/**
 * WordPress dependencies
 */

const textFormattingShortcuts = [{
  keyCombination: {
    modifier: 'primary',
    character: 'b'
  },
  description: (0,external_wp_i18n_namespaceObject.__)('Make the selected text bold.')
}, {
  keyCombination: {
    modifier: 'primary',
    character: 'i'
  },
  description: (0,external_wp_i18n_namespaceObject.__)('Make the selected text italic.')
}, {
  keyCombination: {
    modifier: 'primary',
    character: 'k'
  },
  description: (0,external_wp_i18n_namespaceObject.__)('Convert the selected text into a link.')
}, {
  keyCombination: {
    modifier: 'primaryShift',
    character: 'k'
  },
  description: (0,external_wp_i18n_namespaceObject.__)('Remove a link.')
}, {
  keyCombination: {
    character: '[['
  },
  description: (0,external_wp_i18n_namespaceObject.__)('Insert a link to a post or page.')
}, {
  keyCombination: {
    modifier: 'primary',
    character: 'u'
  },
  description: (0,external_wp_i18n_namespaceObject.__)('Underline the selected text.')
}, {
  keyCombination: {
    modifier: 'access',
    character: 'd'
  },
  description: (0,external_wp_i18n_namespaceObject.__)('Strikethrough the selected text.')
}, {
  keyCombination: {
    modifier: 'access',
    character: 'x'
  },
  description: (0,external_wp_i18n_namespaceObject.__)('Make the selected text inline code.')
}, {
  keyCombination: {
    modifier: 'access',
    character: '0'
  },
  aliases: [{
    modifier: 'access',
    character: '7'
  }],
  description: (0,external_wp_i18n_namespaceObject.__)('Convert the current heading to a paragraph.')
}, {
  keyCombination: {
    modifier: 'access',
    character: '1-6'
  },
  description: (0,external_wp_i18n_namespaceObject.__)('Convert the current paragraph or heading to a heading of level 1 to 6.')
}, {
  keyCombination: {
    modifier: 'primaryShift',
    character: 'SPACE'
  },
  description: (0,external_wp_i18n_namespaceObject.__)('Add non breaking space.')
}];

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/keyboard-shortcut-help-modal/shortcut.js
/**
 * WordPress dependencies
 */





function KeyCombination({
  keyCombination,
  forceAriaLabel
}) {
  const shortcut = keyCombination.modifier ? external_wp_keycodes_namespaceObject.displayShortcutList[keyCombination.modifier](keyCombination.character) : keyCombination.character;
  const ariaLabel = keyCombination.modifier ? external_wp_keycodes_namespaceObject.shortcutAriaLabel[keyCombination.modifier](keyCombination.character) : keyCombination.character;
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("kbd", {
    className: "editor-keyboard-shortcut-help-modal__shortcut-key-combination",
    "aria-label": forceAriaLabel || ariaLabel,
    children: (Array.isArray(shortcut) ? shortcut : [shortcut]).map((character, index) => {
      if (character === '+') {
        return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_element_namespaceObject.Fragment, {
          children: character
        }, index);
      }
      return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("kbd", {
        className: "editor-keyboard-shortcut-help-modal__shortcut-key",
        children: character
      }, index);
    })
  });
}
function Shortcut({
  description,
  keyCombination,
  aliases = [],
  ariaLabel
}) {
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
    children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
      className: "editor-keyboard-shortcut-help-modal__shortcut-description",
      children: description
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
      className: "editor-keyboard-shortcut-help-modal__shortcut-term",
      children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(KeyCombination, {
        keyCombination: keyCombination,
        forceAriaLabel: ariaLabel
      }), aliases.map((alias, index) => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(KeyCombination, {
        keyCombination: alias,
        forceAriaLabel: ariaLabel
      }, index))]
    })]
  });
}
/* harmony default export */ const keyboard_shortcut_help_modal_shortcut = (Shortcut);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/keyboard-shortcut-help-modal/dynamic-shortcut.js
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


function DynamicShortcut({
  name
}) {
  const {
    keyCombination,
    description,
    aliases
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getShortcutKeyCombination,
      getShortcutDescription,
      getShortcutAliases
    } = select(external_wp_keyboardShortcuts_namespaceObject.store);
    return {
      keyCombination: getShortcutKeyCombination(name),
      aliases: getShortcutAliases(name),
      description: getShortcutDescription(name)
    };
  }, [name]);
  if (!keyCombination) {
    return null;
  }
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(keyboard_shortcut_help_modal_shortcut, {
    keyCombination: keyCombination,
    description: description,
    aliases: aliases
  });
}
/* harmony default export */ const dynamic_shortcut = (DynamicShortcut);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/keyboard-shortcut-help-modal/index.js
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */





const KEYBOARD_SHORTCUT_HELP_MODAL_NAME = 'editor/keyboard-shortcut-help';
const ShortcutList = ({
  shortcuts
}) =>
/*#__PURE__*/
/*
 * Disable reason: The `list` ARIA role is redundant but
 * Safari+VoiceOver won't announce the list otherwise.
 */
/* eslint-disable jsx-a11y/no-redundant-roles */
(0,external_ReactJSXRuntime_namespaceObject.jsx)("ul", {
  className: "editor-keyboard-shortcut-help-modal__shortcut-list",
  role: "list",
  children: shortcuts.map((shortcut, index) => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("li", {
    className: "editor-keyboard-shortcut-help-modal__shortcut",
    children: typeof shortcut === 'string' ? /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(dynamic_shortcut, {
      name: shortcut
    }) : /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(keyboard_shortcut_help_modal_shortcut, {
      ...shortcut
    })
  }, index))
})
/* eslint-enable jsx-a11y/no-redundant-roles */;
const ShortcutSection = ({
  title,
  shortcuts,
  className
}) => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("section", {
  className: dist_clsx('editor-keyboard-shortcut-help-modal__section', className),
  children: [!!title && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("h2", {
    className: "editor-keyboard-shortcut-help-modal__section-title",
    children: title
  }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(ShortcutList, {
    shortcuts: shortcuts
  })]
});
const ShortcutCategorySection = ({
  title,
  categoryName,
  additionalShortcuts = []
}) => {
  const categoryShortcuts = (0,external_wp_data_namespaceObject.useSelect)(select => {
    return select(external_wp_keyboardShortcuts_namespaceObject.store).getCategoryShortcuts(categoryName);
  }, [categoryName]);
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(ShortcutSection, {
    title: title,
    shortcuts: categoryShortcuts.concat(additionalShortcuts)
  });
};
function KeyboardShortcutHelpModal() {
  const isModalActive = (0,external_wp_data_namespaceObject.useSelect)(select => select(store).isModalActive(KEYBOARD_SHORTCUT_HELP_MODAL_NAME), []);
  const {
    openModal,
    closeModal
  } = (0,external_wp_data_namespaceObject.useDispatch)(store);
  const toggleModal = () => {
    if (isModalActive) {
      closeModal();
    } else {
      openModal(KEYBOARD_SHORTCUT_HELP_MODAL_NAME);
    }
  };
  (0,external_wp_keyboardShortcuts_namespaceObject.useShortcut)('core/editor/keyboard-shortcuts', toggleModal);
  if (!isModalActive) {
    return null;
  }
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.Modal, {
    className: "editor-keyboard-shortcut-help-modal",
    title: (0,external_wp_i18n_namespaceObject.__)('Keyboard shortcuts'),
    closeButtonLabel: (0,external_wp_i18n_namespaceObject.__)('Close'),
    onRequestClose: toggleModal,
    children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(ShortcutSection, {
      className: "editor-keyboard-shortcut-help-modal__main-shortcuts",
      shortcuts: ['core/editor/keyboard-shortcuts']
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(ShortcutCategorySection, {
      title: (0,external_wp_i18n_namespaceObject.__)('Global shortcuts'),
      categoryName: "global"
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(ShortcutCategorySection, {
      title: (0,external_wp_i18n_namespaceObject.__)('Selection shortcuts'),
      categoryName: "selection"
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(ShortcutCategorySection, {
      title: (0,external_wp_i18n_namespaceObject.__)('Block shortcuts'),
      categoryName: "block",
      additionalShortcuts: [{
        keyCombination: {
          character: '/'
        },
        description: (0,external_wp_i18n_namespaceObject.__)('Change the block type after adding a new paragraph.'),
        /* translators: The forward-slash character. e.g. '/'. */
        ariaLabel: (0,external_wp_i18n_namespaceObject.__)('Forward-slash')
      }]
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(ShortcutSection, {
      title: (0,external_wp_i18n_namespaceObject.__)('Text formatting'),
      shortcuts: textFormattingShortcuts
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(ShortcutCategorySection, {
      title: (0,external_wp_i18n_namespaceObject.__)('List View shortcuts'),
      categoryName: "list-view"
    })]
  });
}
/* harmony default export */ const keyboard_shortcut_help_modal = (KeyboardShortcutHelpModal);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/block-settings-menu/content-only-settings-menu.js
/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */





function ContentOnlySettingsMenuItems({
  clientId,
  onClose
}) {
  const {
    entity,
    onNavigateToEntityRecord
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getBlockEditingMode,
      getBlockParentsByBlockName,
      getSettings,
      getBlockAttributes
    } = select(external_wp_blockEditor_namespaceObject.store);
    const contentOnly = getBlockEditingMode(clientId) === 'contentOnly';
    if (!contentOnly) {
      return {};
    }
    const patternParent = getBlockParentsByBlockName(clientId, 'core/block', true)[0];
    let record;
    if (patternParent) {
      record = select(external_wp_coreData_namespaceObject.store).getEntityRecord('postType', 'wp_block', getBlockAttributes(patternParent).ref);
    } else {
      const {
        getCurrentPostType,
        getCurrentTemplateId
      } = select(store_store);
      const currentPostType = getCurrentPostType();
      const templateId = getCurrentTemplateId();
      if (currentPostType === 'page' && templateId) {
        record = select(external_wp_coreData_namespaceObject.store).getEntityRecord('postType', 'wp_template', templateId);
      }
    }
    return {
      entity: record,
      onNavigateToEntityRecord: getSettings().onNavigateToEntityRecord
    };
  }, [clientId]);
  if (!entity) {
    return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(TemplateLockContentOnlyMenuItems, {
      clientId: clientId,
      onClose: onClose
    });
  }
  const isPattern = entity.type === 'wp_block';
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
    children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_blockEditor_namespaceObject.__unstableBlockSettingsMenuFirstItem, {
      children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.MenuItem, {
        onClick: () => {
          onNavigateToEntityRecord({
            postId: entity.id,
            postType: entity.type
          });
        },
        children: isPattern ? (0,external_wp_i18n_namespaceObject.__)('Edit pattern') : (0,external_wp_i18n_namespaceObject.__)('Edit template')
      })
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.__experimentalText, {
      variant: "muted",
      as: "p",
      className: "editor-content-only-settings-menu__description",
      children: isPattern ? (0,external_wp_i18n_namespaceObject.__)('Edit the pattern to move, delete, or make further changes to this block.') : (0,external_wp_i18n_namespaceObject.__)('Edit the template to move, delete, or make further changes to this block.')
    })]
  });
}
function TemplateLockContentOnlyMenuItems({
  clientId,
  onClose
}) {
  const {
    contentLockingParent
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getContentLockingParent
    } = unlock(select(external_wp_blockEditor_namespaceObject.store));
    return {
      contentLockingParent: getContentLockingParent(clientId)
    };
  }, [clientId]);
  const blockDisplayInformation = (0,external_wp_blockEditor_namespaceObject.useBlockDisplayInformation)(contentLockingParent);
  // Disable reason: We're using a hook here so it has to be on top-level.
  // eslint-disable-next-line @wordpress/no-unused-vars-before-return
  const {
    modifyContentLockBlock,
    selectBlock
  } = unlock((0,external_wp_data_namespaceObject.useDispatch)(external_wp_blockEditor_namespaceObject.store));
  if (!blockDisplayInformation?.title) {
    return null;
  }
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
    children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_blockEditor_namespaceObject.__unstableBlockSettingsMenuFirstItem, {
      children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.MenuItem, {
        onClick: () => {
          selectBlock(contentLockingParent);
          modifyContentLockBlock(contentLockingParent);
          onClose();
        },
        children: (0,external_wp_i18n_namespaceObject.__)('Unlock')
      })
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.__experimentalText, {
      variant: "muted",
      as: "p",
      className: "editor-content-only-settings-menu__description",
      children: (0,external_wp_i18n_namespaceObject.__)('Temporarily unlock the parent block to edit, delete or make further changes to this block.')
    })]
  });
}
function ContentOnlySettingsMenu() {
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_blockEditor_namespaceObject.BlockSettingsMenuControls, {
    children: ({
      selectedClientIds,
      onClose
    }) => selectedClientIds.length === 1 && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(ContentOnlySettingsMenuItems, {
      clientId: selectedClientIds[0],
      onClose: onClose
    })
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/start-template-options/index.js
/**
 * WordPress dependencies
 */









/**
 * Internal dependencies
 */




function useFallbackTemplateContent(slug, isCustom = false) {
  return (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getEntityRecord,
      getDefaultTemplateId
    } = select(external_wp_coreData_namespaceObject.store);
    const templateId = getDefaultTemplateId({
      slug,
      is_custom: isCustom,
      ignore_empty: true
    });
    return templateId ? getEntityRecord('postType', TEMPLATE_POST_TYPE, templateId)?.content?.raw : undefined;
  }, [slug, isCustom]);
}
function start_template_options_useStartPatterns(fallbackContent) {
  const {
    slug,
    patterns
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getCurrentPostType,
      getCurrentPostId
    } = select(store_store);
    const {
      getEntityRecord,
      getBlockPatterns
    } = select(external_wp_coreData_namespaceObject.store);
    const postId = getCurrentPostId();
    const postType = getCurrentPostType();
    const record = getEntityRecord('postType', postType, postId);
    return {
      slug: record.slug,
      patterns: getBlockPatterns()
    };
  }, []);
  const currentThemeStylesheet = (0,external_wp_data_namespaceObject.useSelect)(select => select(external_wp_coreData_namespaceObject.store).getCurrentTheme().stylesheet);

  // Duplicated from packages/block-library/src/pattern/edit.js.
  function injectThemeAttributeInBlockTemplateContent(block) {
    if (block.innerBlocks.find(innerBlock => innerBlock.name === 'core/template-part')) {
      block.innerBlocks = block.innerBlocks.map(innerBlock => {
        if (innerBlock.name === 'core/template-part' && innerBlock.attributes.theme === undefined) {
          innerBlock.attributes.theme = currentThemeStylesheet;
        }
        return innerBlock;
      });
    }
    if (block.name === 'core/template-part' && block.attributes.theme === undefined) {
      block.attributes.theme = currentThemeStylesheet;
    }
    return block;
  }
  return (0,external_wp_element_namespaceObject.useMemo)(() => {
    // filter patterns that are supposed to be used in the current template being edited.
    return [{
      name: 'fallback',
      blocks: (0,external_wp_blocks_namespaceObject.parse)(fallbackContent),
      title: (0,external_wp_i18n_namespaceObject.__)('Fallback content')
    }, ...patterns.filter(pattern => {
      return Array.isArray(pattern.templateTypes) && pattern.templateTypes.some(templateType => slug.startsWith(templateType));
    }).map(pattern => {
      return {
        ...pattern,
        blocks: (0,external_wp_blocks_namespaceObject.parse)(pattern.content).map(block => injectThemeAttributeInBlockTemplateContent(block))
      };
    })];
  }, [fallbackContent, slug, patterns]);
}
function start_template_options_PatternSelection({
  fallbackContent,
  onChoosePattern,
  postType
}) {
  const [,, onChange] = (0,external_wp_coreData_namespaceObject.useEntityBlockEditor)('postType', postType);
  const blockPatterns = start_template_options_useStartPatterns(fallbackContent);
  const shownBlockPatterns = (0,external_wp_compose_namespaceObject.useAsyncList)(blockPatterns);
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_blockEditor_namespaceObject.__experimentalBlockPatternsList, {
    blockPatterns: blockPatterns,
    shownPatterns: shownBlockPatterns,
    onClickPattern: (pattern, blocks) => {
      onChange(blocks, {
        selection: undefined
      });
      onChoosePattern();
    }
  });
}
function StartModal({
  slug,
  isCustom,
  onClose,
  postType
}) {
  const fallbackContent = useFallbackTemplateContent(slug, isCustom);
  if (!fallbackContent) {
    return null;
  }
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.Modal, {
    className: "editor-start-template-options__modal",
    title: (0,external_wp_i18n_namespaceObject.__)('Choose a pattern'),
    closeLabel: (0,external_wp_i18n_namespaceObject.__)('Cancel'),
    focusOnMount: "firstElement",
    onRequestClose: onClose,
    isFullScreen: true,
    children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
      className: "editor-start-template-options__modal-content",
      children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(start_template_options_PatternSelection, {
        fallbackContent: fallbackContent,
        slug: slug,
        isCustom: isCustom,
        postType: postType,
        onChoosePattern: () => {
          onClose();
        }
      })
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Flex, {
      className: "editor-start-template-options__modal__actions",
      justify: "flex-end",
      expanded: false,
      children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.FlexItem, {
        children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
          variant: "tertiary",
          onClick: onClose,
          children: (0,external_wp_i18n_namespaceObject.__)('Skip')
        })
      })
    })]
  });
}
function StartTemplateOptions() {
  const [isClosed, setIsClosed] = (0,external_wp_element_namespaceObject.useState)(false);
  const {
    shouldOpenModal,
    slug,
    isCustom,
    postType,
    postId
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getCurrentPostType,
      getCurrentPostId
    } = select(store_store);
    const _postType = getCurrentPostType();
    const _postId = getCurrentPostId();
    const {
      getEditedEntityRecord,
      hasEditsForEntityRecord
    } = select(external_wp_coreData_namespaceObject.store);
    const templateRecord = getEditedEntityRecord('postType', _postType, _postId);
    const hasEdits = hasEditsForEntityRecord('postType', _postType, _postId);
    return {
      shouldOpenModal: !hasEdits && '' === templateRecord.content && TEMPLATE_POST_TYPE === _postType,
      slug: templateRecord.slug,
      isCustom: templateRecord.is_custom,
      postType: _postType,
      postId: _postId
    };
  }, []);
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    // Should reset the modal state when navigating to a new page/post.
    setIsClosed(false);
  }, [postType, postId]);
  if (!shouldOpenModal || isClosed) {
    return null;
  }
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(StartModal, {
    slug: slug,
    isCustom: isCustom,
    postType: postType,
    onClose: () => setIsClosed(true)
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/provider/index.js
/**
 * WordPress dependencies
 */









/**
 * Internal dependencies
 */



















const {
  ExperimentalBlockEditorProvider
} = unlock(external_wp_blockEditor_namespaceObject.privateApis);
const {
  PatternsMenuItems
} = unlock(external_wp_patterns_namespaceObject.privateApis);
const provider_noop = () => {};

/**
 * These are global entities that are only there to split blocks into logical units
 * They don't provide a "context" for the current post/page being rendered.
 * So we should not use their ids as post context. This is important to allow post blocks
 * (post content, post title) to be used within them without issues.
 */
const NON_CONTEXTUAL_POST_TYPES = ['wp_block', 'wp_template', 'wp_navigation', 'wp_template_part'];

/**
 * Depending on the post, template and template mode,
 * returns the appropriate blocks and change handlers for the block editor provider.
 *
 * @param {Array}   post     Block list.
 * @param {boolean} template Whether the page content has focus (and the surrounding template is inert). If `true` return page content blocks. Default `false`.
 * @param {string}  mode     Rendering mode.
 *
 * @example
 * ```jsx
 * const [ blocks, onInput, onChange ] = useBlockEditorProps( post, template, mode );
 * ```
 *
 * @return {Array} Block editor props.
 */
function useBlockEditorProps(post, template, mode) {
  const rootLevelPost = mode === 'post-only' || !template ? 'post' : 'template';
  const [postBlocks, onInput, onChange] = (0,external_wp_coreData_namespaceObject.useEntityBlockEditor)('postType', post.type, {
    id: post.id
  });
  const [templateBlocks, onInputTemplate, onChangeTemplate] = (0,external_wp_coreData_namespaceObject.useEntityBlockEditor)('postType', template?.type, {
    id: template?.id
  });
  const maybeNavigationBlocks = (0,external_wp_element_namespaceObject.useMemo)(() => {
    if (post.type === 'wp_navigation') {
      return [(0,external_wp_blocks_namespaceObject.createBlock)('core/navigation', {
        ref: post.id,
        // As the parent editor is locked with `templateLock`, the template locking
        // must be explicitly "unset" on the block itself to allow the user to modify
        // the block's content.
        templateLock: false
      })];
    }
  }, [post.type, post.id]);

  // It is important that we don't create a new instance of blocks on every change
  // We should only create a new instance if the blocks them selves change, not a dependency of them.
  const blocks = (0,external_wp_element_namespaceObject.useMemo)(() => {
    if (maybeNavigationBlocks) {
      return maybeNavigationBlocks;
    }
    if (rootLevelPost === 'template') {
      return templateBlocks;
    }
    return postBlocks;
  }, [maybeNavigationBlocks, rootLevelPost, templateBlocks, postBlocks]);

  // Handle fallback to postBlocks outside of the above useMemo, to ensure
  // that constructed block templates that call `createBlock` are not generated
  // too frequently. This ensures that clientIds are stable.
  const disableRootLevelChanges = !!template && mode === 'template-locked' || post.type === 'wp_navigation';
  if (disableRootLevelChanges) {
    return [blocks, provider_noop, provider_noop];
  }
  return [blocks, rootLevelPost === 'post' ? onInput : onInputTemplate, rootLevelPost === 'post' ? onChange : onChangeTemplate];
}

/**
 * This component provides the editor context and manages the state of the block editor.
 *
 * @param {Object}  props                                The component props.
 * @param {Object}  props.post                           The post object.
 * @param {Object}  props.settings                       The editor settings.
 * @param {boolean} props.recovery                       Indicates if the editor is in recovery mode.
 * @param {Array}   props.initialEdits                   The initial edits for the editor.
 * @param {Object}  props.children                       The child components.
 * @param {Object}  [props.BlockEditorProviderComponent] The block editor provider component to use. Defaults to ExperimentalBlockEditorProvider.
 * @param {Object}  [props.__unstableTemplate]           The template object.
 *
 * @example
 * ```jsx
 * <ExperimentalEditorProvider
 *   post={ post }
 *   settings={ settings }
 *   recovery={ recovery }
 *   initialEdits={ initialEdits }
 *   __unstableTemplate={ template }
 * >
 *   { children }
 * </ExperimentalEditorProvider>
 *
 * @return {Object} The rendered ExperimentalEditorProvider component.
 */
const ExperimentalEditorProvider = with_registry_provider(({
  post,
  settings,
  recovery,
  initialEdits,
  children,
  BlockEditorProviderComponent = ExperimentalBlockEditorProvider,
  __unstableTemplate: template
}) => {
  const mode = (0,external_wp_data_namespaceObject.useSelect)(select => select(store_store).getRenderingMode(), []);
  const shouldRenderTemplate = !!template && mode !== 'post-only';
  const rootLevelPost = shouldRenderTemplate ? template : post;
  const defaultBlockContext = (0,external_wp_element_namespaceObject.useMemo)(() => {
    const postContext = !NON_CONTEXTUAL_POST_TYPES.includes(rootLevelPost.type) || shouldRenderTemplate ? {
      postId: post.id,
      postType: post.type
    } : {};
    return {
      ...postContext,
      templateSlug: rootLevelPost.type === 'wp_template' ? rootLevelPost.slug : undefined
    };
  }, [shouldRenderTemplate, post.id, post.type, rootLevelPost.type, rootLevelPost.slug]);
  const {
    editorSettings,
    selection,
    isReady
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getEditorSettings,
      getEditorSelection,
      __unstableIsEditorReady
    } = select(store_store);
    return {
      editorSettings: getEditorSettings(),
      isReady: __unstableIsEditorReady(),
      selection: getEditorSelection()
    };
  }, []);
  const {
    id,
    type
  } = rootLevelPost;
  const blockEditorSettings = use_block_editor_settings(editorSettings, type, id, mode);
  const [blocks, onInput, onChange] = useBlockEditorProps(post, template, mode);
  const {
    updatePostLock,
    setupEditor,
    updateEditorSettings,
    setCurrentTemplateId,
    setEditedPost,
    setRenderingMode
  } = unlock((0,external_wp_data_namespaceObject.useDispatch)(store_store));
  const {
    createWarningNotice
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_notices_namespaceObject.store);

  // Ideally this should be synced on each change and not just something you do once.
  (0,external_wp_element_namespaceObject.useLayoutEffect)(() => {
    // Assume that we don't need to initialize in the case of an error recovery.
    if (recovery) {
      return;
    }
    updatePostLock(settings.postLock);
    setupEditor(post, initialEdits, settings.template);
    if (settings.autosave) {
      createWarningNotice((0,external_wp_i18n_namespaceObject.__)('There is an autosave of this post that is more recent than the version below.'), {
        id: 'autosave-exists',
        actions: [{
          label: (0,external_wp_i18n_namespaceObject.__)('View the autosave'),
          url: settings.autosave.editLink
        }]
      });
    }
  }, []);

  // Synchronizes the active post with the state
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    setEditedPost(post.type, post.id);
  }, [post.type, post.id, setEditedPost]);

  // Synchronize the editor settings as they change.
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    updateEditorSettings(settings);
  }, [settings, updateEditorSettings]);

  // Synchronizes the active template with the state.
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    setCurrentTemplateId(template?.id);
  }, [template?.id, setCurrentTemplateId]);

  // Sets the right rendering mode when loading the editor.
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    var _settings$defaultRend;
    setRenderingMode((_settings$defaultRend = settings.defaultRenderingMode) !== null && _settings$defaultRend !== void 0 ? _settings$defaultRend : 'post-only');
  }, [settings.defaultRenderingMode, setRenderingMode]);
  useHideBlocksFromInserter(post.type, mode);

  // Register the editor commands.
  useCommands();
  if (!isReady) {
    return null;
  }
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_coreData_namespaceObject.EntityProvider, {
    kind: "root",
    type: "site",
    children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_coreData_namespaceObject.EntityProvider, {
      kind: "postType",
      type: post.type,
      id: post.id,
      children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_blockEditor_namespaceObject.BlockContextProvider, {
        value: defaultBlockContext,
        children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(BlockEditorProviderComponent, {
          value: blocks,
          onChange: onChange,
          onInput: onInput,
          selection: selection,
          settings: blockEditorSettings,
          useSubRegistry: false,
          children: [children, !settings.__unstableIsPreviewMode && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
            children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PatternsMenuItems, {}), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(ContentOnlySettingsMenu, {}), mode === 'template-locked' && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(DisableNonPageContentBlocks, {}), type === 'wp_navigation' && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(NavigationBlockEditingMode, {}), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(EditorKeyboardShortcuts, {}), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(keyboard_shortcut_help_modal, {}), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(BlockRemovalWarnings, {}), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(StartPageOptions, {}), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(StartTemplateOptions, {}), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PatternRenameModal, {}), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PatternDuplicateModal, {})]
          })]
        })
      })
    })
  });
});

/**
 * This component establishes a new post editing context, and serves as the entry point for a new post editor (or post with template editor).
 *
 * It supports a large number of post types, including post, page, templates,
 * custom post types, patterns, template parts.
 *
 * All modification and changes are performed to the `@wordpress/core-data` store.
 *
 * @param {Object}  props                      The component props.
 * @param {Object}  [props.post]               The post object to edit. This is required.
 * @param {Object}  [props.__unstableTemplate] The template object wrapper the edited post.
 *                                             This is optional and can only be used when the post type supports templates (like posts and pages).
 * @param {Object}  [props.settings]           The settings object to use for the editor.
 *                                             This is optional and can be used to override the default settings.
 * @param {Element} [props.children]           Children elements for which the BlockEditorProvider context should apply.
 *                                             This is optional.
 *
 * @example
 * ```jsx
 * <EditorProvider
 *   post={ post }
 *   settings={ settings }
 *   __unstableTemplate={ template }
 * >
 *   { children }
 * </EditorProvider>
 * ```
 *
 * @return {JSX.Element} The rendered EditorProvider component.
 */
function EditorProvider(props) {
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(ExperimentalEditorProvider, {
    ...props,
    BlockEditorProviderComponent: external_wp_blockEditor_namespaceObject.BlockEditorProvider,
    children: props.children
  });
}
/* harmony default export */ const provider = (EditorProvider);

;// CONCATENATED MODULE: external ["wp","serverSideRender"]
const external_wp_serverSideRender_namespaceObject = window["wp"]["serverSideRender"];
var external_wp_serverSideRender_default = /*#__PURE__*/__webpack_require__.n(external_wp_serverSideRender_namespaceObject);
;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/deprecated.js
// Block Creation Components.
/**
 * WordPress dependencies
 */





function deprecateComponent(name, Wrapped, staticsToHoist = []) {
  const Component = (0,external_wp_element_namespaceObject.forwardRef)((props, ref) => {
    external_wp_deprecated_default()('wp.editor.' + name, {
      since: '5.3',
      alternative: 'wp.blockEditor.' + name,
      version: '6.2'
    });
    return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(Wrapped, {
      ref: ref,
      ...props
    });
  });
  staticsToHoist.forEach(staticName => {
    Component[staticName] = deprecateComponent(name + '.' + staticName, Wrapped[staticName]);
  });
  return Component;
}
function deprecateFunction(name, func) {
  return (...args) => {
    external_wp_deprecated_default()('wp.editor.' + name, {
      since: '5.3',
      alternative: 'wp.blockEditor.' + name,
      version: '6.2'
    });
    return func(...args);
  };
}

/**
 * @deprecated since 5.3, use `wp.blockEditor.RichText` instead.
 */
const RichText = deprecateComponent('RichText', external_wp_blockEditor_namespaceObject.RichText, ['Content']);
RichText.isEmpty = deprecateFunction('RichText.isEmpty', external_wp_blockEditor_namespaceObject.RichText.isEmpty);


/**
 * @deprecated since 5.3, use `wp.blockEditor.Autocomplete` instead.
 */
const Autocomplete = deprecateComponent('Autocomplete', external_wp_blockEditor_namespaceObject.Autocomplete);
/**
 * @deprecated since 5.3, use `wp.blockEditor.AlignmentToolbar` instead.
 */
const AlignmentToolbar = deprecateComponent('AlignmentToolbar', external_wp_blockEditor_namespaceObject.AlignmentToolbar);
/**
 * @deprecated since 5.3, use `wp.blockEditor.BlockAlignmentToolbar` instead.
 */
const BlockAlignmentToolbar = deprecateComponent('BlockAlignmentToolbar', external_wp_blockEditor_namespaceObject.BlockAlignmentToolbar);
/**
 * @deprecated since 5.3, use `wp.blockEditor.BlockControls` instead.
 */
const BlockControls = deprecateComponent('BlockControls', external_wp_blockEditor_namespaceObject.BlockControls, ['Slot']);
/**
 * @deprecated since 5.3, use `wp.blockEditor.BlockEdit` instead.
 */
const BlockEdit = deprecateComponent('BlockEdit', external_wp_blockEditor_namespaceObject.BlockEdit);
/**
 * @deprecated since 5.3, use `wp.blockEditor.BlockEditorKeyboardShortcuts` instead.
 */
const BlockEditorKeyboardShortcuts = deprecateComponent('BlockEditorKeyboardShortcuts', external_wp_blockEditor_namespaceObject.BlockEditorKeyboardShortcuts);
/**
 * @deprecated since 5.3, use `wp.blockEditor.BlockFormatControls` instead.
 */
const BlockFormatControls = deprecateComponent('BlockFormatControls', external_wp_blockEditor_namespaceObject.BlockFormatControls, ['Slot']);
/**
 * @deprecated since 5.3, use `wp.blockEditor.BlockIcon` instead.
 */
const BlockIcon = deprecateComponent('BlockIcon', external_wp_blockEditor_namespaceObject.BlockIcon);
/**
 * @deprecated since 5.3, use `wp.blockEditor.BlockInspector` instead.
 */
const BlockInspector = deprecateComponent('BlockInspector', external_wp_blockEditor_namespaceObject.BlockInspector);
/**
 * @deprecated since 5.3, use `wp.blockEditor.BlockList` instead.
 */
const BlockList = deprecateComponent('BlockList', external_wp_blockEditor_namespaceObject.BlockList);
/**
 * @deprecated since 5.3, use `wp.blockEditor.BlockMover` instead.
 */
const BlockMover = deprecateComponent('BlockMover', external_wp_blockEditor_namespaceObject.BlockMover);
/**
 * @deprecated since 5.3, use `wp.blockEditor.BlockNavigationDropdown` instead.
 */
const BlockNavigationDropdown = deprecateComponent('BlockNavigationDropdown', external_wp_blockEditor_namespaceObject.BlockNavigationDropdown);
/**
 * @deprecated since 5.3, use `wp.blockEditor.BlockSelectionClearer` instead.
 */
const BlockSelectionClearer = deprecateComponent('BlockSelectionClearer', external_wp_blockEditor_namespaceObject.BlockSelectionClearer);
/**
 * @deprecated since 5.3, use `wp.blockEditor.BlockSettingsMenu` instead.
 */
const BlockSettingsMenu = deprecateComponent('BlockSettingsMenu', external_wp_blockEditor_namespaceObject.BlockSettingsMenu);
/**
 * @deprecated since 5.3, use `wp.blockEditor.BlockTitle` instead.
 */
const BlockTitle = deprecateComponent('BlockTitle', external_wp_blockEditor_namespaceObject.BlockTitle);
/**
 * @deprecated since 5.3, use `wp.blockEditor.BlockToolbar` instead.
 */
const BlockToolbar = deprecateComponent('BlockToolbar', external_wp_blockEditor_namespaceObject.BlockToolbar);
/**
 * @deprecated since 5.3, use `wp.blockEditor.ColorPalette` instead.
 */
const ColorPalette = deprecateComponent('ColorPalette', external_wp_blockEditor_namespaceObject.ColorPalette);
/**
 * @deprecated since 5.3, use `wp.blockEditor.ContrastChecker` instead.
 */
const ContrastChecker = deprecateComponent('ContrastChecker', external_wp_blockEditor_namespaceObject.ContrastChecker);
/**
 * @deprecated since 5.3, use `wp.blockEditor.CopyHandler` instead.
 */
const CopyHandler = deprecateComponent('CopyHandler', external_wp_blockEditor_namespaceObject.CopyHandler);
/**
 * @deprecated since 5.3, use `wp.blockEditor.DefaultBlockAppender` instead.
 */
const DefaultBlockAppender = deprecateComponent('DefaultBlockAppender', external_wp_blockEditor_namespaceObject.DefaultBlockAppender);
/**
 * @deprecated since 5.3, use `wp.blockEditor.FontSizePicker` instead.
 */
const FontSizePicker = deprecateComponent('FontSizePicker', external_wp_blockEditor_namespaceObject.FontSizePicker);
/**
 * @deprecated since 5.3, use `wp.blockEditor.Inserter` instead.
 */
const Inserter = deprecateComponent('Inserter', external_wp_blockEditor_namespaceObject.Inserter);
/**
 * @deprecated since 5.3, use `wp.blockEditor.InnerBlocks` instead.
 */
const InnerBlocks = deprecateComponent('InnerBlocks', external_wp_blockEditor_namespaceObject.InnerBlocks, ['ButtonBlockAppender', 'DefaultBlockAppender', 'Content']);
/**
 * @deprecated since 5.3, use `wp.blockEditor.InspectorAdvancedControls` instead.
 */
const InspectorAdvancedControls = deprecateComponent('InspectorAdvancedControls', external_wp_blockEditor_namespaceObject.InspectorAdvancedControls, ['Slot']);
/**
 * @deprecated since 5.3, use `wp.blockEditor.InspectorControls` instead.
 */
const InspectorControls = deprecateComponent('InspectorControls', external_wp_blockEditor_namespaceObject.InspectorControls, ['Slot']);
/**
 * @deprecated since 5.3, use `wp.blockEditor.PanelColorSettings` instead.
 */
const PanelColorSettings = deprecateComponent('PanelColorSettings', external_wp_blockEditor_namespaceObject.PanelColorSettings);
/**
 * @deprecated since 5.3, use `wp.blockEditor.PlainText` instead.
 */
const PlainText = deprecateComponent('PlainText', external_wp_blockEditor_namespaceObject.PlainText);
/**
 * @deprecated since 5.3, use `wp.blockEditor.RichTextShortcut` instead.
 */
const RichTextShortcut = deprecateComponent('RichTextShortcut', external_wp_blockEditor_namespaceObject.RichTextShortcut);
/**
 * @deprecated since 5.3, use `wp.blockEditor.RichTextToolbarButton` instead.
 */
const RichTextToolbarButton = deprecateComponent('RichTextToolbarButton', external_wp_blockEditor_namespaceObject.RichTextToolbarButton);
/**
 * @deprecated since 5.3, use `wp.blockEditor.__unstableRichTextInputEvent` instead.
 */
const __unstableRichTextInputEvent = deprecateComponent('__unstableRichTextInputEvent', external_wp_blockEditor_namespaceObject.__unstableRichTextInputEvent);
/**
 * @deprecated since 5.3, use `wp.blockEditor.MediaPlaceholder` instead.
 */
const MediaPlaceholder = deprecateComponent('MediaPlaceholder', external_wp_blockEditor_namespaceObject.MediaPlaceholder);
/**
 * @deprecated since 5.3, use `wp.blockEditor.MediaUpload` instead.
 */
const MediaUpload = deprecateComponent('MediaUpload', external_wp_blockEditor_namespaceObject.MediaUpload);
/**
 * @deprecated since 5.3, use `wp.blockEditor.MediaUploadCheck` instead.
 */
const MediaUploadCheck = deprecateComponent('MediaUploadCheck', external_wp_blockEditor_namespaceObject.MediaUploadCheck);
/**
 * @deprecated since 5.3, use `wp.blockEditor.MultiSelectScrollIntoView` instead.
 */
const MultiSelectScrollIntoView = deprecateComponent('MultiSelectScrollIntoView', external_wp_blockEditor_namespaceObject.MultiSelectScrollIntoView);
/**
 * @deprecated since 5.3, use `wp.blockEditor.NavigableToolbar` instead.
 */
const NavigableToolbar = deprecateComponent('NavigableToolbar', external_wp_blockEditor_namespaceObject.NavigableToolbar);
/**
 * @deprecated since 5.3, use `wp.blockEditor.ObserveTyping` instead.
 */
const ObserveTyping = deprecateComponent('ObserveTyping', external_wp_blockEditor_namespaceObject.ObserveTyping);
/**
 * @deprecated since 5.3, use `wp.blockEditor.SkipToSelectedBlock` instead.
 */
const SkipToSelectedBlock = deprecateComponent('SkipToSelectedBlock', external_wp_blockEditor_namespaceObject.SkipToSelectedBlock);
/**
 * @deprecated since 5.3, use `wp.blockEditor.URLInput` instead.
 */
const URLInput = deprecateComponent('URLInput', external_wp_blockEditor_namespaceObject.URLInput);
/**
 * @deprecated since 5.3, use `wp.blockEditor.URLInputButton` instead.
 */
const URLInputButton = deprecateComponent('URLInputButton', external_wp_blockEditor_namespaceObject.URLInputButton);
/**
 * @deprecated since 5.3, use `wp.blockEditor.URLPopover` instead.
 */
const URLPopover = deprecateComponent('URLPopover', external_wp_blockEditor_namespaceObject.URLPopover);
/**
 * @deprecated since 5.3, use `wp.blockEditor.Warning` instead.
 */
const Warning = deprecateComponent('Warning', external_wp_blockEditor_namespaceObject.Warning);
/**
 * @deprecated since 5.3, use `wp.blockEditor.WritingFlow` instead.
 */
const WritingFlow = deprecateComponent('WritingFlow', external_wp_blockEditor_namespaceObject.WritingFlow);

/**
 * @deprecated since 5.3, use `wp.blockEditor.createCustomColorsHOC` instead.
 */
const createCustomColorsHOC = deprecateFunction('createCustomColorsHOC', external_wp_blockEditor_namespaceObject.createCustomColorsHOC);
/**
 * @deprecated since 5.3, use `wp.blockEditor.getColorClassName` instead.
 */
const getColorClassName = deprecateFunction('getColorClassName', external_wp_blockEditor_namespaceObject.getColorClassName);
/**
 * @deprecated since 5.3, use `wp.blockEditor.getColorObjectByAttributeValues` instead.
 */
const getColorObjectByAttributeValues = deprecateFunction('getColorObjectByAttributeValues', external_wp_blockEditor_namespaceObject.getColorObjectByAttributeValues);
/**
 * @deprecated since 5.3, use `wp.blockEditor.getColorObjectByColorValue` instead.
 */
const getColorObjectByColorValue = deprecateFunction('getColorObjectByColorValue', external_wp_blockEditor_namespaceObject.getColorObjectByColorValue);
/**
 * @deprecated since 5.3, use `wp.blockEditor.getFontSize` instead.
 */
const getFontSize = deprecateFunction('getFontSize', external_wp_blockEditor_namespaceObject.getFontSize);
/**
 * @deprecated since 5.3, use `wp.blockEditor.getFontSizeClass` instead.
 */
const getFontSizeClass = deprecateFunction('getFontSizeClass', external_wp_blockEditor_namespaceObject.getFontSizeClass);
/**
 * @deprecated since 5.3, use `wp.blockEditor.createCustomColorsHOC` instead.
 */
const withColorContext = deprecateFunction('withColorContext', external_wp_blockEditor_namespaceObject.withColorContext);
/**
 * @deprecated since 5.3, use `wp.blockEditor.withColors` instead.
 */
const withColors = deprecateFunction('withColors', external_wp_blockEditor_namespaceObject.withColors);
/**
 * @deprecated since 5.3, use `wp.blockEditor.withFontSizes` instead.
 */
const withFontSizes = deprecateFunction('withFontSizes', external_wp_blockEditor_namespaceObject.withFontSizes);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/index.js
/**
 * Internal dependencies
 */


// Block Creation Components.


// Post Related Components.
























































































// State Related Components.


const VisualEditorGlobalKeyboardShortcuts = EditorKeyboardShortcuts;
const TextEditorGlobalKeyboardShortcuts = EditorKeyboardShortcuts;

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/utils/url.js
/**
 * WordPress dependencies
 */



/**
 * Performs some basic cleanup of a string for use as a post slug
 *
 * This replicates some of what sanitize_title() does in WordPress core, but
 * is only designed to approximate what the slug will be.
 *
 * Converts Latin-1 Supplement and Latin Extended-A letters to basic Latin letters.
 * Removes combining diacritical marks. Converts whitespace, periods,
 * and forward slashes to hyphens. Removes any remaining non-word characters
 * except hyphens and underscores. Converts remaining string to lowercase.
 * It does not account for octets, HTML entities, or other encoded characters.
 *
 * @param {string} string Title or slug to be processed
 *
 * @return {string} Processed string
 */
function cleanForSlug(string) {
  external_wp_deprecated_default()('wp.editor.cleanForSlug', {
    since: '12.7',
    plugin: 'Gutenberg',
    alternative: 'wp.url.cleanForSlug'
  });
  return (0,external_wp_url_namespaceObject.cleanForSlug)(string);
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/utils/index.js
/**
 * Internal dependencies
 */





;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/editor-interface/content-slot-fill.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */

const {
  createPrivateSlotFill
} = unlock(external_wp_components_namespaceObject.privateApis);
const SLOT_FILL_NAME = 'EditCanvasContainerSlot';
const EditorContentSlotFill = createPrivateSlotFill(SLOT_FILL_NAME);
/* harmony default export */ const content_slot_fill = (EditorContentSlotFill);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/header/back-button.js
/**
 * WordPress dependencies
 */


// Keeping an old name for backward compatibility.

const slotName = '__experimentalMainDashboardButton';
const {
  Fill: back_button_Fill,
  Slot: back_button_Slot
} = (0,external_wp_components_namespaceObject.createSlotFill)(slotName);
const BackButton = back_button_Fill;
const BackButtonSlot = ({
  children
}) => {
  const fills = (0,external_wp_components_namespaceObject.__experimentalUseSlotFills)(slotName);
  const hasFills = Boolean(fills && fills.length);
  if (!hasFills) {
    return children;
  }
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(back_button_Slot, {
    bubblesVirtually: true
  });
};
BackButton.Slot = BackButtonSlot;
/* harmony default export */ const back_button = (BackButton);

;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/next.js
/**
 * WordPress dependencies
 */


const next = /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.Path, {
    d: "M6.6 6L5.4 7l4.5 5-4.5 5 1.1 1 5.5-6-5.4-6zm6 0l-1.1 1 4.5 5-4.5 5 1.1 1 5.5-6-5.5-6z"
  })
});
/* harmony default export */ const library_next = (next);

;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/previous.js
/**
 * WordPress dependencies
 */


const previous = /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.Path, {
    d: "M11.6 7l-1.1-1L5 12l5.5 6 1.1-1L7 12l4.6-5zm6 0l-1.1-1-5.5 6 5.5 6 1.1-1-4.6-5 4.6-5z"
  })
});
/* harmony default export */ const library_previous = (previous);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/collapsible-block-toolbar/index.js
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */




const {
  useHasBlockToolbar
} = unlock(external_wp_blockEditor_namespaceObject.privateApis);
function CollapsableBlockToolbar({
  isCollapsed,
  onToggle
}) {
  const {
    blockSelectionStart
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    return {
      blockSelectionStart: select(external_wp_blockEditor_namespaceObject.store).getBlockSelectionStart()
    };
  }, []);
  const hasBlockToolbar = useHasBlockToolbar();
  const hasBlockSelection = !!blockSelectionStart;
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    // If we have a new block selection, show the block tools
    if (blockSelectionStart) {
      onToggle(false);
    }
  }, [blockSelectionStart, onToggle]);
  if (!hasBlockToolbar) {
    return null;
  }
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
    children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
      className: dist_clsx('editor-collapsible-block-toolbar', {
        'is-collapsed': isCollapsed || !hasBlockSelection
      }),
      children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_blockEditor_namespaceObject.BlockToolbar, {
        hideDragHandle: true
      })
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Popover.Slot, {
      name: "block-toolbar"
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
      className: "editor-collapsible-block-toolbar__toggle",
      icon: isCollapsed ? library_next : library_previous,
      onClick: () => {
        onToggle(!isCollapsed);
      },
      label: isCollapsed ? (0,external_wp_i18n_namespaceObject.__)('Show block tools') : (0,external_wp_i18n_namespaceObject.__)('Hide block tools'),
      size: "compact"
    })]
  });
}
/* harmony default export */ const collapsible_block_toolbar = (CollapsableBlockToolbar);

;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/plus.js
/**
 * WordPress dependencies
 */


const plus = /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.Path, {
    d: "M11 12.5V17.5H12.5V12.5H17.5V11H12.5V6H11V11H6V12.5H11Z"
  })
});
/* harmony default export */ const library_plus = (plus);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/document-tools/index.js
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */










/**
 * Internal dependencies
 */







const preventDefault = event => {
  event.preventDefault();
};
function DocumentTools({
  className,
  disableBlockTools = false
}) {
  const {
    setIsInserterOpened,
    setIsListViewOpened
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  const {
    isDistractionFree,
    isInserterOpened,
    isListViewOpen,
    listViewShortcut,
    inserterSidebarToggleRef,
    listViewToggleRef,
    hasFixedToolbar,
    showIconLabels
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getSettings
    } = select(external_wp_blockEditor_namespaceObject.store);
    const {
      get
    } = select(external_wp_preferences_namespaceObject.store);
    const {
      isListViewOpened,
      getEditorMode,
      getInserterSidebarToggleRef,
      getListViewToggleRef
    } = unlock(select(store_store));
    const {
      getShortcutRepresentation
    } = select(external_wp_keyboardShortcuts_namespaceObject.store);
    const {
      __unstableGetEditorMode
    } = select(external_wp_blockEditor_namespaceObject.store);
    return {
      isInserterOpened: select(store_store).isInserterOpened(),
      isListViewOpen: isListViewOpened(),
      listViewShortcut: getShortcutRepresentation('core/editor/toggle-list-view'),
      inserterSidebarToggleRef: getInserterSidebarToggleRef(),
      listViewToggleRef: getListViewToggleRef(),
      hasFixedToolbar: getSettings().hasFixedToolbar,
      showIconLabels: get('core', 'showIconLabels'),
      isDistractionFree: get('core', 'distractionFree'),
      isVisualMode: getEditorMode() === 'visual',
      isZoomedOutView: __unstableGetEditorMode() === 'zoom-out'
    };
  }, []);
  const isLargeViewport = (0,external_wp_compose_namespaceObject.useViewportMatch)('medium');
  const isWideViewport = (0,external_wp_compose_namespaceObject.useViewportMatch)('wide');

  /* translators: accessibility text for the editor toolbar */
  const toolbarAriaLabel = (0,external_wp_i18n_namespaceObject.__)('Document tools');
  const toggleListView = (0,external_wp_element_namespaceObject.useCallback)(() => setIsListViewOpened(!isListViewOpen), [setIsListViewOpened, isListViewOpen]);
  const toggleInserter = (0,external_wp_element_namespaceObject.useCallback)(() => setIsInserterOpened(!isInserterOpened), [isInserterOpened, setIsInserterOpened]);

  /* translators: button label text should, if possible, be under 16 characters. */
  const longLabel = (0,external_wp_i18n_namespaceObject._x)('Toggle block inserter', 'Generic label for block inserter button');
  const shortLabel = !isInserterOpened ? (0,external_wp_i18n_namespaceObject.__)('Add') : (0,external_wp_i18n_namespaceObject.__)('Close');
  return (
    /*#__PURE__*/
    // Some plugins expect and use the `edit-post-header-toolbar` CSS class to
    // find the toolbar and inject UI elements into it. This is not officially
    // supported, but we're keeping it in the list of class names for backwards
    // compatibility.
    (0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_blockEditor_namespaceObject.NavigableToolbar, {
      className: dist_clsx('editor-document-tools', 'edit-post-header-toolbar', className),
      "aria-label": toolbarAriaLabel,
      variant: "unstyled",
      children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
        className: "editor-document-tools__left",
        children: [!isDistractionFree && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.ToolbarItem, {
          ref: inserterSidebarToggleRef,
          as: external_wp_components_namespaceObject.Button,
          className: "editor-document-tools__inserter-toggle",
          variant: "primary",
          isPressed: isInserterOpened,
          onMouseDown: preventDefault,
          onClick: toggleInserter,
          disabled: disableBlockTools,
          icon: library_plus,
          label: showIconLabels ? shortLabel : longLabel,
          showTooltip: !showIconLabels,
          "aria-expanded": isInserterOpened
        }), (isWideViewport || !showIconLabels) && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
          children: [isLargeViewport && !hasFixedToolbar && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.ToolbarItem, {
            as: external_wp_blockEditor_namespaceObject.ToolSelector,
            showTooltip: !showIconLabels,
            variant: showIconLabels ? 'tertiary' : undefined,
            disabled: disableBlockTools,
            size: "compact"
          }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.ToolbarItem, {
            as: editor_history_undo,
            showTooltip: !showIconLabels,
            variant: showIconLabels ? 'tertiary' : undefined,
            size: "compact"
          }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.ToolbarItem, {
            as: editor_history_redo,
            showTooltip: !showIconLabels,
            variant: showIconLabels ? 'tertiary' : undefined,
            size: "compact"
          }), !isDistractionFree && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.ToolbarItem, {
            as: external_wp_components_namespaceObject.Button,
            className: "editor-document-tools__document-overview-toggle",
            icon: list_view,
            disabled: disableBlockTools,
            isPressed: isListViewOpen
            /* translators: button label text should, if possible, be under 16 characters. */,
            label: (0,external_wp_i18n_namespaceObject.__)('Document Overview'),
            onClick: toggleListView,
            shortcut: listViewShortcut,
            showTooltip: !showIconLabels,
            variant: showIconLabels ? 'tertiary' : undefined,
            "aria-expanded": isListViewOpen,
            ref: listViewToggleRef,
            size: "compact"
          })]
        })]
      })
    })
  );
}
/* harmony default export */ const document_tools = (DocumentTools);

;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/more-vertical.js
/**
 * WordPress dependencies
 */


const moreVertical = /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.Path, {
    d: "M13 19h-2v-2h2v2zm0-6h-2v-2h2v2zm0-6h-2V5h2v2z"
  })
});
/* harmony default export */ const more_vertical = (moreVertical);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/more-menu/copy-content-menu-item.js
/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */


function CopyContentMenuItem() {
  const {
    createNotice
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_notices_namespaceObject.store);
  const {
    getCurrentPostId,
    getCurrentPostType
  } = (0,external_wp_data_namespaceObject.useSelect)(store_store);
  const {
    getEditedEntityRecord
  } = (0,external_wp_data_namespaceObject.useSelect)(external_wp_coreData_namespaceObject.store);
  function getText() {
    const record = getEditedEntityRecord('postType', getCurrentPostType(), getCurrentPostId());
    if (!record) {
      return '';
    }
    if (typeof record.content === 'function') {
      return record.content(record);
    } else if (record.blocks) {
      return (0,external_wp_blocks_namespaceObject.__unstableSerializeAndClean)(record.blocks);
    } else if (record.content) {
      return record.content;
    }
  }
  function onSuccess() {
    createNotice('info', (0,external_wp_i18n_namespaceObject.__)('All content copied.'), {
      isDismissible: true,
      type: 'snackbar'
    });
  }
  const ref = (0,external_wp_compose_namespaceObject.useCopyToClipboard)(getText, onSuccess);
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.MenuItem, {
    ref: ref,
    children: (0,external_wp_i18n_namespaceObject.__)('Copy all blocks')
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/mode-switcher/index.js
/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


/**
 * Set of available mode options.
 *
 * @type {Array}
 */

const MODES = [{
  value: 'visual',
  label: (0,external_wp_i18n_namespaceObject.__)('Visual editor')
}, {
  value: 'text',
  label: (0,external_wp_i18n_namespaceObject.__)('Code editor')
}];
function ModeSwitcher() {
  const {
    shortcut,
    isRichEditingEnabled,
    isCodeEditingEnabled,
    mode
  } = (0,external_wp_data_namespaceObject.useSelect)(select => ({
    shortcut: select(external_wp_keyboardShortcuts_namespaceObject.store).getShortcutRepresentation('core/editor/toggle-mode'),
    isRichEditingEnabled: select(store_store).getEditorSettings().richEditingEnabled,
    isCodeEditingEnabled: select(store_store).getEditorSettings().codeEditingEnabled,
    mode: select(store_store).getEditorMode()
  }), []);
  const {
    switchEditorMode
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  let selectedMode = mode;
  if (!isRichEditingEnabled && mode === 'visual') {
    selectedMode = 'text';
  }
  if (!isCodeEditingEnabled && mode === 'text') {
    selectedMode = 'visual';
  }
  const choices = MODES.map(choice => {
    if (!isCodeEditingEnabled && choice.value === 'text') {
      choice = {
        ...choice,
        disabled: true
      };
    }
    if (!isRichEditingEnabled && choice.value === 'visual') {
      choice = {
        ...choice,
        disabled: true,
        info: (0,external_wp_i18n_namespaceObject.__)('You can enable the visual editor in your profile settings.')
      };
    }
    if (choice.value !== selectedMode && !choice.disabled) {
      return {
        ...choice,
        shortcut
      };
    }
    return choice;
  });
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.MenuGroup, {
    label: (0,external_wp_i18n_namespaceObject.__)('Editor'),
    children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.MenuItemsChoice, {
      choices: choices,
      value: selectedMode,
      onSelect: switchEditorMode
    })
  });
}
/* harmony default export */ const mode_switcher = (ModeSwitcher);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/more-menu/tools-more-menu-group.js
/**
 * WordPress dependencies
 */


const {
  Fill: ToolsMoreMenuGroup,
  Slot: tools_more_menu_group_Slot
} = (0,external_wp_components_namespaceObject.createSlotFill)('ToolsMoreMenuGroup');
ToolsMoreMenuGroup.Slot = ({
  fillProps
}) => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(tools_more_menu_group_Slot, {
  fillProps: fillProps
});
/* harmony default export */ const tools_more_menu_group = (ToolsMoreMenuGroup);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/more-menu/view-more-menu-group.js
/**
 * WordPress dependencies
 */



const {
  Fill: ViewMoreMenuGroup,
  Slot: view_more_menu_group_Slot
} = (0,external_wp_components_namespaceObject.createSlotFill)(external_wp_element_namespaceObject.Platform.OS === 'web' ? Symbol('ViewMoreMenuGroup') : 'ViewMoreMenuGroup');
ViewMoreMenuGroup.Slot = ({
  fillProps
}) => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(view_more_menu_group_Slot, {
  fillProps: fillProps
});
/* harmony default export */ const view_more_menu_group = (ViewMoreMenuGroup);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/more-menu/index.js
/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */








function MoreMenu() {
  const {
    openModal
  } = (0,external_wp_data_namespaceObject.useDispatch)(store);
  const {
    set: setPreference
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_preferences_namespaceObject.store);
  const {
    toggleDistractionFree
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  const showIconLabels = (0,external_wp_data_namespaceObject.useSelect)(select => select(external_wp_preferences_namespaceObject.store).get('core', 'showIconLabels'), []);
  const turnOffDistractionFree = () => {
    setPreference('core', 'distractionFree', false);
  };
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_ReactJSXRuntime_namespaceObject.Fragment, {
    children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.DropdownMenu, {
      icon: more_vertical,
      label: (0,external_wp_i18n_namespaceObject.__)('Options'),
      popoverProps: {
        placement: 'bottom-end',
        className: 'more-menu-dropdown__content'
      },
      toggleProps: {
        showTooltip: !showIconLabels,
        ...(showIconLabels && {
          variant: 'tertiary'
        }),
        tooltipPosition: 'bottom',
        size: 'compact'
      },
      children: ({
        onClose
      }) => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
        children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.MenuGroup, {
          label: (0,external_wp_i18n_namespaceObject._x)('View', 'noun'),
          children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_preferences_namespaceObject.PreferenceToggleMenuItem, {
            scope: "core",
            name: "fixedToolbar",
            onToggle: turnOffDistractionFree,
            label: (0,external_wp_i18n_namespaceObject.__)('Top toolbar'),
            info: (0,external_wp_i18n_namespaceObject.__)('Access all block and document tools in a single place'),
            messageActivated: (0,external_wp_i18n_namespaceObject.__)('Top toolbar activated'),
            messageDeactivated: (0,external_wp_i18n_namespaceObject.__)('Top toolbar deactivated')
          }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_preferences_namespaceObject.PreferenceToggleMenuItem, {
            scope: "core",
            name: "distractionFree",
            label: (0,external_wp_i18n_namespaceObject.__)('Distraction free'),
            info: (0,external_wp_i18n_namespaceObject.__)('Write with calmness'),
            handleToggling: false,
            onToggle: toggleDistractionFree,
            messageActivated: (0,external_wp_i18n_namespaceObject.__)('Distraction free mode activated'),
            messageDeactivated: (0,external_wp_i18n_namespaceObject.__)('Distraction free mode deactivated'),
            shortcut: external_wp_keycodes_namespaceObject.displayShortcut.primaryShift('\\')
          }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_preferences_namespaceObject.PreferenceToggleMenuItem, {
            scope: "core",
            name: "focusMode",
            label: (0,external_wp_i18n_namespaceObject.__)('Spotlight mode'),
            info: (0,external_wp_i18n_namespaceObject.__)('Focus on one block at a time'),
            messageActivated: (0,external_wp_i18n_namespaceObject.__)('Spotlight mode activated'),
            messageDeactivated: (0,external_wp_i18n_namespaceObject.__)('Spotlight mode deactivated')
          }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(view_more_menu_group.Slot, {
            fillProps: {
              onClose
            }
          })]
        }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(mode_switcher, {}), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(action_item.Slot, {
          name: "core/plugin-more-menu",
          label: (0,external_wp_i18n_namespaceObject.__)('Plugins'),
          as: external_wp_components_namespaceObject.MenuGroup,
          fillProps: {
            onClick: onClose
          }
        }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.MenuGroup, {
          label: (0,external_wp_i18n_namespaceObject.__)('Tools'),
          children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.MenuItem, {
            onClick: () => openModal('editor/keyboard-shortcut-help'),
            shortcut: external_wp_keycodes_namespaceObject.displayShortcut.access('h'),
            children: (0,external_wp_i18n_namespaceObject.__)('Keyboard shortcuts')
          }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(CopyContentMenuItem, {}), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.MenuItem, {
            icon: library_external,
            href: (0,external_wp_i18n_namespaceObject.__)('https://wordpress.org/documentation/article/wordpress-block-editor/'),
            target: "_blank",
            rel: "noopener noreferrer",
            children: [(0,external_wp_i18n_namespaceObject.__)('Help'), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.VisuallyHidden, {
              as: "span",
              children: /* translators: accessibility text */
              (0,external_wp_i18n_namespaceObject.__)('(opens in a new tab)')
            })]
          }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(tools_more_menu_group.Slot, {
            fillProps: {
              onClose
            }
          })]
        }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.MenuGroup, {
          children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.MenuItem, {
            onClick: () => openModal('editor/preferences'),
            children: (0,external_wp_i18n_namespaceObject.__)('Preferences')
          })
        })]
      })
    })
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-publish-button/post-publish-button-or-toggle.js
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



function PostPublishButtonOrToggle({
  forceIsDirty,
  hasPublishAction,
  isBeingScheduled,
  isPending,
  isPublished,
  isPublishSidebarEnabled,
  isPublishSidebarOpened,
  isScheduled,
  togglePublishSidebar,
  setEntitiesSavedStatesCallback,
  postStatusHasChanged,
  postStatus
}) {
  const IS_TOGGLE = 'toggle';
  const IS_BUTTON = 'button';
  const isSmallerThanMediumViewport = (0,external_wp_compose_namespaceObject.useViewportMatch)('medium', '<');
  let component;

  /**
   * Conditions to show a BUTTON (publish directly) or a TOGGLE (open publish sidebar):
   *
   * 1) We want to show a BUTTON when the post status is at the _final stage_
   * for a particular role (see https://wordpress.org/documentation/article/post-status/):
   *
   * - is published
   * - post status has changed explicitely to something different than 'future' or 'publish'
   * - is scheduled to be published
   * - is pending and can't be published (but only for viewports >= medium).
   * 	 Originally, we considered showing a button for pending posts that couldn't be published
   * 	 (for example, for an author with the contributor role). Some languages can have
   * 	 long translations for "Submit for review", so given the lack of UI real estate available
   * 	 we decided to take into account the viewport in that case.
   *  	 See: https://github.com/WordPress/gutenberg/issues/10475
   *
   * 2) Then, in small viewports, we'll show a TOGGLE.
   *
   * 3) Finally, we'll use the publish sidebar status to decide:
   *
   * - if it is enabled, we show a TOGGLE
   * - if it is disabled, we show a BUTTON
   */
  if (isPublished || postStatusHasChanged && !['future', 'publish'].includes(postStatus) || isScheduled && isBeingScheduled || isPending && !hasPublishAction && !isSmallerThanMediumViewport) {
    component = IS_BUTTON;
  } else if (isSmallerThanMediumViewport || isPublishSidebarEnabled) {
    component = IS_TOGGLE;
  } else {
    component = IS_BUTTON;
  }
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(post_publish_button, {
    forceIsDirty: forceIsDirty,
    isOpen: isPublishSidebarOpened,
    isToggle: component === IS_TOGGLE,
    onToggle: togglePublishSidebar,
    setEntitiesSavedStatesCallback: setEntitiesSavedStatesCallback
  });
}
/* harmony default export */ const post_publish_button_or_toggle = ((0,external_wp_compose_namespaceObject.compose)((0,external_wp_data_namespaceObject.withSelect)(select => {
  var _select$getCurrentPos;
  return {
    hasPublishAction: (_select$getCurrentPos = select(store_store).getCurrentPost()?._links?.['wp:action-publish']) !== null && _select$getCurrentPos !== void 0 ? _select$getCurrentPos : false,
    isBeingScheduled: select(store_store).isEditedPostBeingScheduled(),
    isPending: select(store_store).isCurrentPostPending(),
    isPublished: select(store_store).isCurrentPostPublished(),
    isPublishSidebarEnabled: select(store_store).isPublishSidebarEnabled(),
    isPublishSidebarOpened: select(store_store).isPublishSidebarOpened(),
    isScheduled: select(store_store).isCurrentPostScheduled(),
    postStatus: select(store_store).getEditedPostAttribute('status'),
    postStatusHasChanged: select(store_store).getPostEdits()?.status
  };
}), (0,external_wp_data_namespaceObject.withDispatch)(dispatch => {
  const {
    togglePublishSidebar
  } = dispatch(store_store);
  return {
    togglePublishSidebar
  };
}))(PostPublishButtonOrToggle));

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-view-link/index.js
/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */


function PostViewLink() {
  const {
    hasLoaded,
    permalink,
    isPublished,
    label,
    showIconLabels
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    // Grab post type to retrieve the view_item label.
    const postTypeSlug = select(store_store).getCurrentPostType();
    const postType = select(external_wp_coreData_namespaceObject.store).getPostType(postTypeSlug);
    const {
      get
    } = select(external_wp_preferences_namespaceObject.store);
    return {
      permalink: select(store_store).getPermalink(),
      isPublished: select(store_store).isCurrentPostPublished(),
      label: postType?.labels.view_item,
      hasLoaded: !!postType,
      showIconLabels: get('core', 'showIconLabels')
    };
  }, []);

  // Only render the view button if the post is published and has a permalink.
  if (!isPublished || !permalink || !hasLoaded) {
    return null;
  }
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
    icon: library_external,
    label: label || (0,external_wp_i18n_namespaceObject.__)('View post'),
    href: permalink,
    target: "_blank",
    showTooltip: !showIconLabels,
    size: "compact"
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/mobile.js
/**
 * WordPress dependencies
 */


const mobile = /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.Path, {
    d: "M15 4H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H9c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h6c.3 0 .5.2.5.5v12zm-4.5-.5h2V16h-2v1.5z"
  })
});
/* harmony default export */ const library_mobile = (mobile);

;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/tablet.js
/**
 * WordPress dependencies
 */


const tablet = /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.Path, {
    d: "M17 4H7c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H7c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h10c.3 0 .5.2.5.5v12zm-7.5-.5h4V16h-4v1.5z"
  })
});
/* harmony default export */ const library_tablet = (tablet);

;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/desktop.js
/**
 * WordPress dependencies
 */


const desktop = /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.Path, {
    d: "M20.5 16h-.7V8c0-1.1-.9-2-2-2H6.2c-1.1 0-2 .9-2 2v8h-.7c-.8 0-1.5.7-1.5 1.5h20c0-.8-.7-1.5-1.5-1.5zM5.7 8c0-.3.2-.5.5-.5h11.6c.3 0 .5.2.5.5v7.6H5.7V8z"
  })
});
/* harmony default export */ const library_desktop = (desktop);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/preview-dropdown/index.js
/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */





function PreviewDropdown({
  forceIsAutosaveable,
  disabled
}) {
  const {
    deviceType,
    homeUrl,
    isTemplate,
    isViewable,
    showIconLabels
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    var _getPostType$viewable;
    const {
      getDeviceType,
      getCurrentPostType
    } = select(store_store);
    const {
      getUnstableBase,
      getPostType
    } = select(external_wp_coreData_namespaceObject.store);
    const {
      get
    } = select(external_wp_preferences_namespaceObject.store);
    const _currentPostType = getCurrentPostType();
    return {
      deviceType: getDeviceType(),
      homeUrl: getUnstableBase()?.home,
      isTemplate: _currentPostType === 'wp_template',
      isViewable: (_getPostType$viewable = getPostType(_currentPostType)?.viewable) !== null && _getPostType$viewable !== void 0 ? _getPostType$viewable : false,
      showIconLabels: get('core', 'showIconLabels')
    };
  }, []);
  const {
    setDeviceType
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  const isMobile = (0,external_wp_compose_namespaceObject.useViewportMatch)('medium', '<');
  if (isMobile) {
    return null;
  }
  const popoverProps = {
    placement: 'bottom-end'
  };
  const toggleProps = {
    className: 'editor-preview-dropdown__toggle',
    size: 'compact',
    showTooltip: !showIconLabels,
    disabled,
    __experimentalIsFocusable: disabled
  };
  const menuProps = {
    'aria-label': (0,external_wp_i18n_namespaceObject.__)('View options')
  };
  const deviceIcons = {
    mobile: library_mobile,
    tablet: library_tablet,
    desktop: library_desktop
  };
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.DropdownMenu, {
    className: "editor-preview-dropdown",
    popoverProps: popoverProps,
    toggleProps: toggleProps,
    menuProps: menuProps,
    icon: deviceIcons[deviceType.toLowerCase()],
    label: (0,external_wp_i18n_namespaceObject.__)('View'),
    disableOpenOnArrowDown: disabled,
    children: ({
      onClose
    }) => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
      children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.MenuGroup, {
        children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.MenuItem, {
          onClick: () => setDeviceType('Desktop'),
          icon: deviceType === 'Desktop' && library_check,
          children: (0,external_wp_i18n_namespaceObject.__)('Desktop')
        }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.MenuItem, {
          onClick: () => setDeviceType('Tablet'),
          icon: deviceType === 'Tablet' && library_check,
          children: (0,external_wp_i18n_namespaceObject.__)('Tablet')
        }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.MenuItem, {
          onClick: () => setDeviceType('Mobile'),
          icon: deviceType === 'Mobile' && library_check,
          children: (0,external_wp_i18n_namespaceObject.__)('Mobile')
        })]
      }), isTemplate && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.MenuGroup, {
        children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.MenuItem, {
          href: homeUrl,
          target: "_blank",
          icon: library_external,
          onClick: onClose,
          children: [(0,external_wp_i18n_namespaceObject.__)('View site'), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.VisuallyHidden, {
            as: "span",
            children: /* translators: accessibility text */
            (0,external_wp_i18n_namespaceObject.__)('(opens in a new tab)')
          })]
        })
      }), isViewable && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.MenuGroup, {
        children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PostPreviewButton, {
          className: "editor-preview-dropdown__button-external",
          role: "menuitem",
          forceIsAutosaveable: forceIsAutosaveable,
          textContent: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
            children: [(0,external_wp_i18n_namespaceObject.__)('Preview in new tab'), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Icon, {
              icon: library_external
            })]
          }),
          onPreview: onClose
        })
      })]
    })
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/header/index.js
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */














const toolbarVariations = {
  distractionFreeDisabled: {
    y: '-50px'
  },
  distractionFreeHover: {
    y: 0
  },
  distractionFreeHidden: {
    y: '-50px'
  },
  visible: {
    y: 0
  },
  hidden: {
    y: 0
  }
};
const backButtonVariations = {
  distractionFreeDisabled: {
    x: '-100%'
  },
  distractionFreeHover: {
    x: 0
  },
  distractionFreeHidden: {
    x: '-100%'
  },
  visible: {
    x: 0
  },
  hidden: {
    x: 0
  }
};
function Header({
  customSaveButton,
  forceIsDirty,
  forceDisableBlockTools,
  setEntitiesSavedStatesCallback,
  title
}) {
  const isWideViewport = (0,external_wp_compose_namespaceObject.useViewportMatch)('large');
  const isLargeViewport = (0,external_wp_compose_namespaceObject.useViewportMatch)('medium');
  const {
    isTextEditor,
    isPublishSidebarOpened,
    showIconLabels,
    hasFixedToolbar,
    isNestedEntity,
    isZoomedOutView
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      get: getPreference
    } = select(external_wp_preferences_namespaceObject.store);
    const {
      getEditorMode,
      getEditorSettings,
      isPublishSidebarOpened: _isPublishSidebarOpened
    } = select(store_store);
    const {
      __unstableGetEditorMode
    } = select(external_wp_blockEditor_namespaceObject.store);
    return {
      isTextEditor: getEditorMode() === 'text',
      isPublishSidebarOpened: _isPublishSidebarOpened(),
      showIconLabels: getPreference('core', 'showIconLabels'),
      hasFixedToolbar: getPreference('core', 'fixedToolbar'),
      isNestedEntity: !!getEditorSettings().onNavigateToPreviousEntityRecord,
      isZoomedOutView: __unstableGetEditorMode() === 'zoom-out'
    };
  }, []);
  const hasTopToolbar = isLargeViewport && hasFixedToolbar;
  const [isBlockToolsCollapsed, setIsBlockToolsCollapsed] = (0,external_wp_element_namespaceObject.useState)(true);

  // The edit-post-header classname is only kept for backward compatibilty
  // as some plugins might be relying on its presence.
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
    className: "editor-header edit-post-header",
    children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.__unstableMotion.div, {
      variants: backButtonVariations,
      transition: {
        type: 'tween'
      },
      children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(back_button.Slot, {})
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.__unstableMotion.div, {
      variants: toolbarVariations,
      className: "editor-header__toolbar",
      transition: {
        type: 'tween'
      },
      children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(document_tools, {
        disableBlockTools: forceDisableBlockTools || isTextEditor
      }), hasTopToolbar && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(collapsible_block_toolbar, {
        isCollapsed: isBlockToolsCollapsed,
        onToggle: setIsBlockToolsCollapsed
      }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
        className: dist_clsx('editor-header__center', {
          'is-collapsed': !isBlockToolsCollapsed && hasTopToolbar
        }),
        children: !title ? /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(post_type_support_check, {
          supportKeys: "title",
          children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(DocumentBar, {})
        }) : title
      })]
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.__unstableMotion.div, {
      variants: toolbarVariations,
      transition: {
        type: 'tween'
      },
      className: "editor-header__settings",
      children: [!customSaveButton && !isPublishSidebarOpened &&
      /*#__PURE__*/
      // This button isn't completely hidden by the publish sidebar.
      // We can't hide the whole toolbar when the publish sidebar is open because
      // we want to prevent mounting/unmounting the PostPublishButtonOrToggle DOM node.
      // We track that DOM node to return focus to the PostPublishButtonOrToggle
      // when the publish sidebar has been closed.
      (0,external_ReactJSXRuntime_namespaceObject.jsx)(PostSavedState, {
        forceIsDirty: forceIsDirty
      }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PreviewDropdown, {
        forceIsAutosaveable: forceIsDirty,
        disabled: isNestedEntity || isZoomedOutView
      }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PostPreviewButton, {
        className: "editor-header__post-preview-button",
        forceIsAutosaveable: forceIsDirty
      }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PostViewLink, {}), !customSaveButton && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(post_publish_button_or_toggle, {
        forceIsDirty: forceIsDirty,
        setEntitiesSavedStatesCallback: setEntitiesSavedStatesCallback
      }), customSaveButton, (isWideViewport || !showIconLabels) && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(pinned_items.Slot, {
        scope: "core"
      }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(MoreMenu, {})]
    })]
  });
}
/* harmony default export */ const components_header = (Header);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/inserter-sidebar/index.js
/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */



const {
  PrivateInserterLibrary
} = unlock(external_wp_blockEditor_namespaceObject.privateApis);
function InserterSidebar() {
  const {
    blockSectionRootClientId,
    inserterSidebarToggleRef,
    insertionPoint,
    showMostUsedBlocks,
    sidebarIsOpened
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getInserterSidebarToggleRef,
      getInsertionPoint,
      isPublishSidebarOpened
    } = unlock(select(store_store));
    const {
      getBlockRootClientId,
      __unstableGetEditorMode,
      getSettings
    } = select(external_wp_blockEditor_namespaceObject.store);
    const {
      get
    } = select(external_wp_preferences_namespaceObject.store);
    const {
      getActiveComplementaryArea
    } = select(store);
    const getBlockSectionRootClientId = () => {
      if (__unstableGetEditorMode() === 'zoom-out') {
        const {
          sectionRootClientId
        } = unlock(getSettings());
        if (sectionRootClientId) {
          return sectionRootClientId;
        }
      }
      return getBlockRootClientId();
    };
    return {
      inserterSidebarToggleRef: getInserterSidebarToggleRef(),
      insertionPoint: getInsertionPoint(),
      showMostUsedBlocks: get('core', 'mostUsedBlocks'),
      blockSectionRootClientId: getBlockSectionRootClientId(),
      sidebarIsOpened: !!(getActiveComplementaryArea('core') || isPublishSidebarOpened())
    };
  }, []);
  const {
    setIsInserterOpened
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  const {
    disableComplementaryArea
  } = (0,external_wp_data_namespaceObject.useDispatch)(store);
  const isMobileViewport = (0,external_wp_compose_namespaceObject.useViewportMatch)('medium', '<');
  const [inserterDialogRef, inserterDialogProps] = (0,external_wp_compose_namespaceObject.__experimentalUseDialog)({
    onClose: () => setIsInserterOpened(false),
    focusOnMount: true
  });
  const libraryRef = (0,external_wp_element_namespaceObject.useRef)();

  // When closing the inserter, focus should return to the toggle button.
  const closeInserterSidebar = (0,external_wp_element_namespaceObject.useCallback)(() => {
    setIsInserterOpened(false);
    inserterSidebarToggleRef.current?.focus();
  }, [inserterSidebarToggleRef, setIsInserterOpened]);
  const closeOnEscape = (0,external_wp_element_namespaceObject.useCallback)(event => {
    if (event.keyCode === external_wp_keycodes_namespaceObject.ESCAPE && !event.defaultPrevented) {
      event.preventDefault();
      closeInserterSidebar();
    }
  }, [closeInserterSidebar]);
  const inserterContents = /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
    className: "editor-inserter-sidebar__content",
    children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PrivateInserterLibrary, {
      showMostUsedBlocks: showMostUsedBlocks,
      showInserterHelpPanel: true,
      shouldFocusBlock: isMobileViewport,
      rootClientId: blockSectionRootClientId !== null && blockSectionRootClientId !== void 0 ? blockSectionRootClientId : insertionPoint.rootClientId,
      __experimentalInsertionIndex: insertionPoint.insertionIndex,
      __experimentalInitialTab: insertionPoint.tab,
      __experimentalInitialCategory: insertionPoint.category,
      __experimentalFilterValue: insertionPoint.filterValue,
      onPatternCategorySelection: sidebarIsOpened ? () => disableComplementaryArea('core') : undefined,
      ref: libraryRef,
      onClose: closeInserterSidebar
    })
  });
  if (window.__experimentalEnableZoomedOutPatternsTab) {
    return (
      /*#__PURE__*/
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      (0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
        onKeyDown: closeOnEscape,
        className: "editor-inserter-sidebar",
        children: inserterContents
      })
    );
  }
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
    ref: inserterDialogRef,
    ...inserterDialogProps,
    className: "editor-inserter-sidebar",
    children: inserterContents
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/list-view-sidebar/list-view-outline.js
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */







function ListViewOutline() {
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
    children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
      className: "editor-list-view-sidebar__outline",
      children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
        children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.__experimentalText, {
          children: (0,external_wp_i18n_namespaceObject.__)('Characters:')
        }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.__experimentalText, {
          children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(CharacterCount, {})
        })]
      }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
        children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.__experimentalText, {
          children: (0,external_wp_i18n_namespaceObject.__)('Words:')
        }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(WordCount, {})]
      }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
        children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.__experimentalText, {
          children: (0,external_wp_i18n_namespaceObject.__)('Time to read:')
        }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(TimeToRead, {})]
      })]
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(DocumentOutline, {})]
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/list-view-sidebar/index.js
/**
 * WordPress dependencies
 */











/**
 * Internal dependencies
 */





const {
  Tabs
} = unlock(external_wp_components_namespaceObject.privateApis);
function ListViewSidebar() {
  const {
    setIsListViewOpened
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  const {
    getListViewToggleRef
  } = unlock((0,external_wp_data_namespaceObject.useSelect)(store_store));

  // This hook handles focus when the sidebar first renders.
  const focusOnMountRef = (0,external_wp_compose_namespaceObject.useFocusOnMount)('firstElement');

  // When closing the list view, focus should return to the toggle button.
  const closeListView = (0,external_wp_element_namespaceObject.useCallback)(() => {
    setIsListViewOpened(false);
    getListViewToggleRef().current?.focus();
  }, [getListViewToggleRef, setIsListViewOpened]);
  const closeOnEscape = (0,external_wp_element_namespaceObject.useCallback)(event => {
    if (event.keyCode === external_wp_keycodes_namespaceObject.ESCAPE && !event.defaultPrevented) {
      event.preventDefault();
      closeListView();
    }
  }, [closeListView]);

  // Use internal state instead of a ref to make sure that the component
  // re-renders when the dropZoneElement updates.
  const [dropZoneElement, setDropZoneElement] = (0,external_wp_element_namespaceObject.useState)(null);
  // Tracks our current tab.
  const [tab, setTab] = (0,external_wp_element_namespaceObject.useState)('list-view');

  // This ref refers to the sidebar as a whole.
  const sidebarRef = (0,external_wp_element_namespaceObject.useRef)();
  // This ref refers to the tab panel.
  const tabsRef = (0,external_wp_element_namespaceObject.useRef)();
  // This ref refers to the list view application area.
  const listViewRef = (0,external_wp_element_namespaceObject.useRef)();

  // Must merge the refs together so focus can be handled properly in the next function.
  const listViewContainerRef = (0,external_wp_compose_namespaceObject.useMergeRefs)([focusOnMountRef, listViewRef, setDropZoneElement]);

  /*
   * Callback function to handle list view or outline focus.
   *
   * @param {string} currentTab The current tab. Either list view or outline.
   *
   * @return void
   */
  function handleSidebarFocus(currentTab) {
    // Tab panel focus.
    const tabPanelFocus = external_wp_dom_namespaceObject.focus.tabbable.find(tabsRef.current)[0];
    // List view tab is selected.
    if (currentTab === 'list-view') {
      // Either focus the list view or the tab panel. Must have a fallback because the list view does not render when there are no blocks.
      const listViewApplicationFocus = external_wp_dom_namespaceObject.focus.tabbable.find(listViewRef.current)[0];
      const listViewFocusArea = sidebarRef.current.contains(listViewApplicationFocus) ? listViewApplicationFocus : tabPanelFocus;
      listViewFocusArea.focus();
      // Outline tab is selected.
    } else {
      tabPanelFocus.focus();
    }
  }
  const handleToggleListViewShortcut = (0,external_wp_element_namespaceObject.useCallback)(() => {
    // If the sidebar has focus, it is safe to close.
    if (sidebarRef.current.contains(sidebarRef.current.ownerDocument.activeElement)) {
      closeListView();
    } else {
      // If the list view or outline does not have focus, focus should be moved to it.
      handleSidebarFocus(tab);
    }
  }, [closeListView, tab]);

  // This only fires when the sidebar is open because of the conditional rendering.
  // It is the same shortcut to open but that is defined as a global shortcut and only fires when the sidebar is closed.
  (0,external_wp_keyboardShortcuts_namespaceObject.useShortcut)('core/editor/toggle-list-view', handleToggleListViewShortcut);
  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    (0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
      className: "editor-list-view-sidebar",
      onKeyDown: closeOnEscape,
      ref: sidebarRef,
      children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(Tabs, {
        onSelect: tabName => setTab(tabName),
        selectOnMove: false
        // The initial tab value is set explicitly to avoid an initial
        // render where no tab is selected. This ensures that the
        // tabpanel height is correct so the relevant scroll container
        // can be rendered internally.
        ,
        defaultTabId: "list-view",
        children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
          className: "editor-list-view-sidebar__header",
          children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
            className: "editor-list-view-sidebar__close-button",
            icon: close_small,
            label: (0,external_wp_i18n_namespaceObject.__)('Close'),
            onClick: closeListView,
            size: "small"
          }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(Tabs.TabList, {
            className: "editor-list-view-sidebar__tabs-tablist",
            ref: tabsRef,
            children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(Tabs.Tab, {
              className: "editor-list-view-sidebar__tabs-tab",
              tabId: "list-view",
              children: (0,external_wp_i18n_namespaceObject._x)('List View', 'Post overview')
            }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(Tabs.Tab, {
              className: "editor-list-view-sidebar__tabs-tab",
              tabId: "outline",
              children: (0,external_wp_i18n_namespaceObject._x)('Outline', 'Post overview')
            })]
          })]
        }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(Tabs.TabPanel, {
          ref: listViewContainerRef,
          className: "editor-list-view-sidebar__tabs-tabpanel",
          tabId: "list-view",
          focusable: false,
          children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
            className: "editor-list-view-sidebar__list-view-container",
            children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
              className: "editor-list-view-sidebar__list-view-panel-content",
              children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_blockEditor_namespaceObject.__experimentalListView, {
                dropZoneElement: dropZoneElement
              })
            })
          })
        }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(Tabs.TabPanel, {
          className: "editor-list-view-sidebar__tabs-tabpanel",
          tabId: "outline",
          focusable: false,
          children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
            className: "editor-list-view-sidebar__list-view-container",
            children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(ListViewOutline, {})
          })
        })]
      })
    })
  );
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/save-publish-panels/index.js
/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */









const {
  Fill: save_publish_panels_Fill,
  Slot: save_publish_panels_Slot
} = (0,external_wp_components_namespaceObject.createSlotFill)('ActionsPanel');
const ActionsPanelFill = (/* unused pure expression or super */ null && (save_publish_panels_Fill));
function SavePublishPanels({
  setEntitiesSavedStatesCallback,
  closeEntitiesSavedStates,
  isEntitiesSavedStatesOpen,
  forceIsDirtyPublishPanel
}) {
  const {
    closePublishSidebar,
    togglePublishSidebar
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  const {
    publishSidebarOpened,
    hasNonPostEntityChanges,
    hasPostMetaChanges
  } = (0,external_wp_data_namespaceObject.useSelect)(select => ({
    publishSidebarOpened: select(store_store).isPublishSidebarOpened(),
    hasNonPostEntityChanges: select(store_store).hasNonPostEntityChanges(),
    hasPostMetaChanges: unlock(select(store_store)).hasPostMetaChanges()
  }), []);
  const openEntitiesSavedStates = (0,external_wp_element_namespaceObject.useCallback)(() => setEntitiesSavedStatesCallback(true), []);

  // It is ok for these components to be unmounted when not in visual use.
  // We don't want more than one present at a time, decide which to render.
  let unmountableContent;
  if (publishSidebarOpened) {
    unmountableContent = /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(post_publish_panel, {
      onClose: closePublishSidebar,
      forceIsDirty: forceIsDirtyPublishPanel,
      PrePublishExtension: plugin_pre_publish_panel.Slot,
      PostPublishExtension: plugin_post_publish_panel.Slot
    });
  } else if (hasNonPostEntityChanges || hasPostMetaChanges) {
    unmountableContent = /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
      className: "editor-layout__toggle-entities-saved-states-panel",
      children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
        variant: "secondary",
        className: "editor-layout__toggle-entities-saved-states-panel-button",
        onClick: openEntitiesSavedStates,
        "aria-expanded": false,
        children: (0,external_wp_i18n_namespaceObject.__)('Open save panel')
      })
    });
  } else {
    unmountableContent = /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
      className: "editor-layout__toggle-publish-panel",
      children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
        variant: "secondary",
        className: "editor-layout__toggle-publish-panel-button",
        onClick: togglePublishSidebar,
        "aria-expanded": false,
        children: (0,external_wp_i18n_namespaceObject.__)('Open publish panel')
      })
    });
  }

  // Since EntitiesSavedStates controls its own panel, we can keep it
  // always mounted to retain its own component state (such as checkboxes).
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
    children: [isEntitiesSavedStatesOpen && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(EntitiesSavedStates, {
      close: closeEntitiesSavedStates
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(save_publish_panels_Slot, {
      bubblesVirtually: true
    }), !isEntitiesSavedStatesOpen && unmountableContent]
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/text-editor/index.js
/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */





function TextEditor({
  autoFocus = false
}) {
  const {
    switchEditorMode
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  const {
    shortcut,
    isRichEditingEnabled
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getEditorSettings
    } = select(store_store);
    const {
      getShortcutRepresentation
    } = select(external_wp_keyboardShortcuts_namespaceObject.store);
    return {
      shortcut: getShortcutRepresentation('core/editor/toggle-mode'),
      isRichEditingEnabled: getEditorSettings().richEditingEnabled
    };
  }, []);
  const titleRef = (0,external_wp_element_namespaceObject.useRef)();
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    if (autoFocus) {
      return;
    }
    titleRef?.current?.focus();
  }, [autoFocus]);
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
    className: "editor-text-editor",
    children: [isRichEditingEnabled && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
      className: "editor-text-editor__toolbar",
      children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("h2", {
        children: (0,external_wp_i18n_namespaceObject.__)('Editing code')
      }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
        variant: "tertiary",
        onClick: () => switchEditorMode('visual'),
        shortcut: shortcut,
        children: (0,external_wp_i18n_namespaceObject.__)('Exit code editor')
      })]
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
      className: "editor-text-editor__body",
      children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(post_title_raw, {
        ref: titleRef
      }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PostTextEditor, {})]
    })]
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/visual-editor/edit-template-blocks-notification.js
/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */


/**
 * Component that:
 *
 * - Displays a 'Edit your template to edit this block' notification when the
 *   user is focusing on editing page content and clicks on a disabled template
 *   block.
 * - Displays a 'Edit your template to edit this block' dialog when the user
 *   is focusing on editing page conetnt and double clicks on a disabled
 *   template block.
 *
 * @param {Object}                                 props
 * @param {import('react').RefObject<HTMLElement>} props.contentRef Ref to the block
 *                                                                  editor iframe canvas.
 */

function EditTemplateBlocksNotification({
  contentRef
}) {
  const {
    onNavigateToEntityRecord,
    templateId
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getEditorSettings,
      getCurrentTemplateId
    } = select(store_store);
    return {
      onNavigateToEntityRecord: getEditorSettings().onNavigateToEntityRecord,
      templateId: getCurrentTemplateId()
    };
  }, []);
  const canEditTemplate = (0,external_wp_data_namespaceObject.useSelect)(select => {
    var _select$canUser;
    return (_select$canUser = select(external_wp_coreData_namespaceObject.store).canUser('create', 'templates')) !== null && _select$canUser !== void 0 ? _select$canUser : false;
  });
  const [isDialogOpen, setIsDialogOpen] = (0,external_wp_element_namespaceObject.useState)(false);
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    const handleDblClick = event => {
      if (!canEditTemplate) {
        return;
      }
      if (!event.target.classList.contains('is-root-container')) {
        return;
      }
      setIsDialogOpen(true);
    };
    const canvas = contentRef.current;
    canvas?.addEventListener('dblclick', handleDblClick);
    return () => {
      canvas?.removeEventListener('dblclick', handleDblClick);
    };
  }, [contentRef, canEditTemplate]);
  if (!canEditTemplate) {
    return null;
  }
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.__experimentalConfirmDialog, {
    isOpen: isDialogOpen,
    confirmButtonText: (0,external_wp_i18n_namespaceObject.__)('Edit template'),
    onConfirm: () => {
      setIsDialogOpen(false);
      onNavigateToEntityRecord({
        postId: templateId,
        postType: 'wp_template'
      });
    },
    onCancel: () => setIsDialogOpen(false),
    children: (0,external_wp_i18n_namespaceObject.__)('You’ve tried to select a block that is part of a template, which may be used on other posts and pages. Would you like to edit the template?')
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/resizable-editor/resize-handle.js
/**
 * WordPress dependencies
 */






const DELTA_DISTANCE = 20; // The distance to resize per keydown in pixels.

function ResizeHandle({
  direction,
  resizeWidthBy
}) {
  function handleKeyDown(event) {
    const {
      keyCode
    } = event;
    if (direction === 'left' && keyCode === external_wp_keycodes_namespaceObject.LEFT || direction === 'right' && keyCode === external_wp_keycodes_namespaceObject.RIGHT) {
      resizeWidthBy(DELTA_DISTANCE);
    } else if (direction === 'left' && keyCode === external_wp_keycodes_namespaceObject.RIGHT || direction === 'right' && keyCode === external_wp_keycodes_namespaceObject.LEFT) {
      resizeWidthBy(-DELTA_DISTANCE);
    }
  }
  const resizeHandleVariants = {
    active: {
      opacity: 1,
      scaleY: 1.3
    }
  };
  const resizableHandleHelpId = `resizable-editor__resize-help-${direction}`;
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
    children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Tooltip, {
      text: (0,external_wp_i18n_namespaceObject.__)('Drag to resize'),
      children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.__unstableMotion.button, {
        className: `editor-resizable-editor__resize-handle is-${direction}`,
        "aria-label": (0,external_wp_i18n_namespaceObject.__)('Drag to resize'),
        "aria-describedby": resizableHandleHelpId,
        onKeyDown: handleKeyDown,
        variants: resizeHandleVariants,
        whileFocus: "active",
        whileHover: "active",
        whileTap: "active",
        role: "separator",
        "aria-orientation": "vertical"
      }, "handle")
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.VisuallyHidden, {
      id: resizableHandleHelpId,
      children: (0,external_wp_i18n_namespaceObject.__)('Use left and right arrow keys to resize the canvas.')
    })]
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/resizable-editor/index.js
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


// Removes the inline styles in the drag handles.

const HANDLE_STYLES_OVERRIDE = {
  position: undefined,
  userSelect: undefined,
  cursor: undefined,
  width: undefined,
  height: undefined,
  top: undefined,
  right: undefined,
  bottom: undefined,
  left: undefined
};
function ResizableEditor({
  className,
  enableResizing,
  height,
  children
}) {
  const [width, setWidth] = (0,external_wp_element_namespaceObject.useState)('100%');
  const resizableRef = (0,external_wp_element_namespaceObject.useRef)();
  const resizeWidthBy = (0,external_wp_element_namespaceObject.useCallback)(deltaPixels => {
    if (resizableRef.current) {
      setWidth(resizableRef.current.offsetWidth + deltaPixels);
    }
  }, []);
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.ResizableBox, {
    className: dist_clsx('editor-resizable-editor', className, {
      'is-resizable': enableResizing
    }),
    ref: api => {
      resizableRef.current = api?.resizable;
    },
    size: {
      width: enableResizing ? width : '100%',
      height: enableResizing && height ? height : '100%'
    },
    onResizeStop: (event, direction, element) => {
      setWidth(element.style.width);
    },
    minWidth: 300,
    maxWidth: "100%",
    maxHeight: "100%",
    enable: {
      left: enableResizing,
      right: enableResizing
    },
    showHandle: enableResizing
    // The editor is centered horizontally, resizing it only
    // moves half the distance. Hence double the ratio to correctly
    // align the cursor to the resizer handle.
    ,
    resizeRatio: 2,
    handleComponent: {
      left: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(ResizeHandle, {
        direction: "left",
        resizeWidthBy: resizeWidthBy
      }),
      right: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(ResizeHandle, {
        direction: "right",
        resizeWidthBy: resizeWidthBy
      })
    },
    handleClasses: undefined,
    handleStyles: {
      left: HANDLE_STYLES_OVERRIDE,
      right: HANDLE_STYLES_OVERRIDE
    },
    children: children
  });
}
/* harmony default export */ const resizable_editor = (ResizableEditor);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/hooks/use-select-nearest-editable-block.js
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */

const DISTANCE_THRESHOLD = 500;
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
function distanceFromRect(x, y, rect) {
  const dx = x - clamp(x, rect.left, rect.right);
  const dy = y - clamp(y, rect.top, rect.bottom);
  return Math.sqrt(dx * dx + dy * dy);
}
function useSelectNearestEditableBlock({
  isEnabled = true
} = {}) {
  const {
    getEnabledClientIdsTree,
    getBlockName,
    getBlockOrder
  } = unlock((0,external_wp_data_namespaceObject.useSelect)(external_wp_blockEditor_namespaceObject.store));
  const {
    selectBlock
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_blockEditor_namespaceObject.store);
  return (0,external_wp_compose_namespaceObject.useRefEffect)(element => {
    if (!isEnabled) {
      return;
    }
    const selectNearestEditableBlock = (x, y) => {
      const editableBlockClientIds = getEnabledClientIdsTree().flatMap(({
        clientId
      }) => {
        const blockName = getBlockName(clientId);
        if (blockName === 'core/template-part') {
          return [];
        }
        if (blockName === 'core/post-content') {
          const innerBlocks = getBlockOrder(clientId);
          if (innerBlocks.length) {
            return innerBlocks;
          }
        }
        return [clientId];
      });
      let nearestDistance = Infinity,
        nearestClientId = null;
      for (const clientId of editableBlockClientIds) {
        const block = element.querySelector(`[data-block="${clientId}"]`);
        if (!block) {
          continue;
        }
        const rect = block.getBoundingClientRect();
        const distance = distanceFromRect(x, y, rect);
        if (distance < nearestDistance && distance < DISTANCE_THRESHOLD) {
          nearestDistance = distance;
          nearestClientId = clientId;
        }
      }
      if (nearestClientId) {
        selectBlock(nearestClientId);
      }
    };
    const handleClick = event => {
      const shouldSelect = event.target === element || event.target.classList.contains('is-root-container');
      if (shouldSelect) {
        selectNearestEditableBlock(event.clientX, event.clientY);
      }
    };
    element.addEventListener('click', handleClick);
    return () => element.removeEventListener('click', handleClick);
  }, [isEnabled]);
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/visual-editor/index.js
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */










const {
  LayoutStyle,
  useLayoutClasses,
  useLayoutStyles,
  ExperimentalBlockCanvas: BlockCanvas,
  useFlashEditableBlocks
} = unlock(external_wp_blockEditor_namespaceObject.privateApis);

/**
 * These post types have a special editor where they don't allow you to fill the title
 * and they don't apply the layout styles.
 */
const visual_editor_DESIGN_POST_TYPES = [PATTERN_POST_TYPE, TEMPLATE_POST_TYPE, NAVIGATION_POST_TYPE, TEMPLATE_PART_POST_TYPE];

/**
 * Given an array of nested blocks, find the first Post Content
 * block inside it, recursing through any nesting levels,
 * and return its attributes.
 *
 * @param {Array} blocks A list of blocks.
 *
 * @return {Object | undefined} The Post Content block.
 */
function getPostContentAttributes(blocks) {
  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i].name === 'core/post-content') {
      return blocks[i].attributes;
    }
    if (blocks[i].innerBlocks.length) {
      const nestedPostContent = getPostContentAttributes(blocks[i].innerBlocks);
      if (nestedPostContent) {
        return nestedPostContent;
      }
    }
  }
}
function checkForPostContentAtRootLevel(blocks) {
  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i].name === 'core/post-content') {
      return true;
    }
  }
  return false;
}
function VisualEditor({
  // Ideally as we unify post and site editors, we won't need these props.
  autoFocus,
  styles,
  disableIframe = false,
  iframeProps,
  contentRef,
  className
}) {
  const [resizeObserver, sizes] = (0,external_wp_compose_namespaceObject.useResizeObserver)();
  const isMobileViewport = (0,external_wp_compose_namespaceObject.useViewportMatch)('small', '<');
  const {
    renderingMode,
    postContentAttributes,
    editedPostTemplate = {},
    wrapperBlockName,
    wrapperUniqueId,
    deviceType,
    isFocusedEntity,
    isDesignPostType,
    postType,
    isPreview
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getCurrentPostId,
      getCurrentPostType,
      getCurrentTemplateId,
      getEditorSettings,
      getRenderingMode,
      getDeviceType
    } = select(store_store);
    const {
      getPostType,
      canUser,
      getEditedEntityRecord
    } = select(external_wp_coreData_namespaceObject.store);
    const postTypeSlug = getCurrentPostType();
    const _renderingMode = getRenderingMode();
    let _wrapperBlockName;
    if (postTypeSlug === PATTERN_POST_TYPE) {
      _wrapperBlockName = 'core/block';
    } else if (_renderingMode === 'post-only') {
      _wrapperBlockName = 'core/post-content';
    }
    const editorSettings = getEditorSettings();
    const supportsTemplateMode = editorSettings.supportsTemplateMode;
    const postTypeObject = getPostType(postTypeSlug);
    const canEditTemplate = canUser('create', 'templates');
    const currentTemplateId = getCurrentTemplateId();
    const template = currentTemplateId ? getEditedEntityRecord('postType', TEMPLATE_POST_TYPE, currentTemplateId) : undefined;
    return {
      renderingMode: _renderingMode,
      postContentAttributes: editorSettings.postContentAttributes,
      isDesignPostType: visual_editor_DESIGN_POST_TYPES.includes(postTypeSlug),
      // Post template fetch returns a 404 on classic themes, which
      // messes with e2e tests, so check it's a block theme first.
      editedPostTemplate: postTypeObject?.viewable && supportsTemplateMode && canEditTemplate ? template : undefined,
      wrapperBlockName: _wrapperBlockName,
      wrapperUniqueId: getCurrentPostId(),
      deviceType: getDeviceType(),
      isFocusedEntity: !!editorSettings.onNavigateToPreviousEntityRecord,
      postType: postTypeSlug,
      isPreview: editorSettings.__unstableIsPreviewMode
    };
  }, []);
  const {
    isCleanNewPost
  } = (0,external_wp_data_namespaceObject.useSelect)(store_store);
  const {
    hasRootPaddingAwareAlignments,
    themeHasDisabledLayoutStyles,
    themeSupportsLayout,
    isZoomOutMode
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getSettings,
      __unstableGetEditorMode
    } = select(external_wp_blockEditor_namespaceObject.store);
    const _settings = getSettings();
    return {
      themeHasDisabledLayoutStyles: _settings.disableLayoutStyles,
      themeSupportsLayout: _settings.supportsLayout,
      hasRootPaddingAwareAlignments: _settings.__experimentalFeatures?.useRootPaddingAwareAlignments,
      isZoomOutMode: __unstableGetEditorMode() === 'zoom-out'
    };
  }, []);
  const deviceStyles = (0,external_wp_blockEditor_namespaceObject.__experimentalUseResizeCanvas)(deviceType);
  const [globalLayoutSettings] = (0,external_wp_blockEditor_namespaceObject.useSettings)('layout');

  // fallbackLayout is used if there is no Post Content,
  // and for Post Title.
  const fallbackLayout = (0,external_wp_element_namespaceObject.useMemo)(() => {
    if (renderingMode !== 'post-only' || isDesignPostType) {
      return {
        type: 'default'
      };
    }
    if (themeSupportsLayout) {
      // We need to ensure support for wide and full alignments,
      // so we add the constrained type.
      return {
        ...globalLayoutSettings,
        type: 'constrained'
      };
    }
    // Set default layout for classic themes so all alignments are supported.
    return {
      type: 'default'
    };
  }, [renderingMode, themeSupportsLayout, globalLayoutSettings, isDesignPostType]);
  const newestPostContentAttributes = (0,external_wp_element_namespaceObject.useMemo)(() => {
    if (!editedPostTemplate?.content && !editedPostTemplate?.blocks && postContentAttributes) {
      return postContentAttributes;
    }
    // When in template editing mode, we can access the blocks directly.
    if (editedPostTemplate?.blocks) {
      return getPostContentAttributes(editedPostTemplate?.blocks);
    }
    // If there are no blocks, we have to parse the content string.
    // Best double-check it's a string otherwise the parse function gets unhappy.
    const parseableContent = typeof editedPostTemplate?.content === 'string' ? editedPostTemplate?.content : '';
    return getPostContentAttributes((0,external_wp_blocks_namespaceObject.parse)(parseableContent)) || {};
  }, [editedPostTemplate?.content, editedPostTemplate?.blocks, postContentAttributes]);
  const hasPostContentAtRootLevel = (0,external_wp_element_namespaceObject.useMemo)(() => {
    if (!editedPostTemplate?.content && !editedPostTemplate?.blocks) {
      return false;
    }
    // When in template editing mode, we can access the blocks directly.
    if (editedPostTemplate?.blocks) {
      return checkForPostContentAtRootLevel(editedPostTemplate?.blocks);
    }
    // If there are no blocks, we have to parse the content string.
    // Best double-check it's a string otherwise the parse function gets unhappy.
    const parseableContent = typeof editedPostTemplate?.content === 'string' ? editedPostTemplate?.content : '';
    return checkForPostContentAtRootLevel((0,external_wp_blocks_namespaceObject.parse)(parseableContent)) || false;
  }, [editedPostTemplate?.content, editedPostTemplate?.blocks]);
  const {
    layout = {},
    align = ''
  } = newestPostContentAttributes || {};
  const postContentLayoutClasses = useLayoutClasses(newestPostContentAttributes, 'core/post-content');
  const blockListLayoutClass = dist_clsx({
    'is-layout-flow': !themeSupportsLayout
  }, themeSupportsLayout && postContentLayoutClasses, align && `align${align}`);
  const postContentLayoutStyles = useLayoutStyles(newestPostContentAttributes, 'core/post-content', '.block-editor-block-list__layout.is-root-container');

  // Update type for blocks using legacy layouts.
  const postContentLayout = (0,external_wp_element_namespaceObject.useMemo)(() => {
    return layout && (layout?.type === 'constrained' || layout?.inherit || layout?.contentSize || layout?.wideSize) ? {
      ...globalLayoutSettings,
      ...layout,
      type: 'constrained'
    } : {
      ...globalLayoutSettings,
      ...layout,
      type: 'default'
    };
  }, [layout?.type, layout?.inherit, layout?.contentSize, layout?.wideSize, globalLayoutSettings]);

  // If there is a Post Content block we use its layout for the block list;
  // if not, this must be a classic theme, in which case we use the fallback layout.
  const blockListLayout = postContentAttributes ? postContentLayout : fallbackLayout;
  const postEditorLayout = blockListLayout?.type === 'default' && !hasPostContentAtRootLevel ? fallbackLayout : blockListLayout;
  const observeTypingRef = (0,external_wp_blockEditor_namespaceObject.__unstableUseTypingObserver)();
  const titleRef = (0,external_wp_element_namespaceObject.useRef)();
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    if (!autoFocus || !isCleanNewPost()) {
      return;
    }
    titleRef?.current?.focus();
  }, [autoFocus, isCleanNewPost]);

  // Add some styles for alignwide/alignfull Post Content and its children.
  const alignCSS = `.is-root-container.alignwide { max-width: var(--wp--style--global--wide-size); margin-left: auto; margin-right: auto;}
		.is-root-container.alignwide:where(.is-layout-flow) > :not(.alignleft):not(.alignright) { max-width: var(--wp--style--global--wide-size);}
		.is-root-container.alignfull { max-width: none; margin-left: auto; margin-right: auto;}
		.is-root-container.alignfull:where(.is-layout-flow) > :not(.alignleft):not(.alignright) { max-width: none;}`;
  const localRef = (0,external_wp_element_namespaceObject.useRef)();
  const typewriterRef = (0,external_wp_blockEditor_namespaceObject.__unstableUseTypewriter)();
  contentRef = (0,external_wp_compose_namespaceObject.useMergeRefs)([localRef, contentRef, renderingMode === 'post-only' ? typewriterRef : null, useFlashEditableBlocks({
    isEnabled: renderingMode === 'template-locked'
  }), useSelectNearestEditableBlock({
    isEnabled: renderingMode === 'template-locked'
  })]);
  const zoomOutProps = isZoomOutMode ? {
    scale: 'default',
    frameSize: '20px'
  } : {};
  const forceFullHeight = postType === NAVIGATION_POST_TYPE;
  const enableResizing = [NAVIGATION_POST_TYPE, TEMPLATE_PART_POST_TYPE, PATTERN_POST_TYPE].includes(postType) &&
  // Disable in previews / view mode.
  !isPreview &&
  // Disable resizing in mobile viewport.
  !isMobileViewport &&
  // Dsiable resizing in zoomed-out mode.
  !isZoomOutMode;
  const shouldIframe = !disableIframe || ['Tablet', 'Mobile'].includes(deviceType);
  const iframeStyles = (0,external_wp_element_namespaceObject.useMemo)(() => {
    return [...(styles !== null && styles !== void 0 ? styles : []), {
      css: `.is-root-container{display:flow-root;${
      // Some themes will have `min-height: 100vh` for the root container,
      // which isn't a requirement in auto resize mode.
      enableResizing ? 'min-height:0!important;' : ''}}`
    }];
  }, [styles, enableResizing]);
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
    className: dist_clsx('editor-visual-editor',
    // this class is here for backward compatibility reasons.
    'edit-post-visual-editor', className, {
      'has-padding': isFocusedEntity || enableResizing,
      'is-resizable': enableResizing,
      'is-iframed': shouldIframe
    }),
    children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(resizable_editor, {
      enableResizing: enableResizing,
      height: sizes.height && !forceFullHeight ? sizes.height : '100%',
      children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(BlockCanvas, {
        shouldIframe: shouldIframe,
        contentRef: contentRef,
        styles: iframeStyles,
        height: "100%",
        iframeProps: {
          ...iframeProps,
          ...zoomOutProps,
          style: {
            ...iframeProps?.style,
            ...deviceStyles
          }
        },
        children: [themeSupportsLayout && !themeHasDisabledLayoutStyles && renderingMode === 'post-only' && !isDesignPostType && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
          children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(LayoutStyle, {
            selector: ".editor-visual-editor__post-title-wrapper",
            layout: fallbackLayout
          }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(LayoutStyle, {
            selector: ".block-editor-block-list__layout.is-root-container",
            layout: postEditorLayout
          }), align && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(LayoutStyle, {
            css: alignCSS
          }), postContentLayoutStyles && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(LayoutStyle, {
            layout: postContentLayout,
            css: postContentLayoutStyles
          })]
        }), renderingMode === 'post-only' && !isDesignPostType && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
          className: dist_clsx('editor-visual-editor__post-title-wrapper',
          // The following class is only here for backward comapatibility
          // some themes might be using it to style the post title.
          'edit-post-visual-editor__post-title-wrapper', {
            'has-global-padding': hasRootPaddingAwareAlignments
          }),
          contentEditable: false,
          ref: observeTypingRef,
          style: {
            // This is using inline styles
            // so it's applied for both iframed and non iframed editors.
            marginTop: '4rem'
          },
          children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(post_title, {
            ref: titleRef
          })
        }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_blockEditor_namespaceObject.RecursionProvider, {
          blockName: wrapperBlockName,
          uniqueId: wrapperUniqueId,
          children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_blockEditor_namespaceObject.BlockList, {
            className: dist_clsx('is-' + deviceType.toLowerCase() + '-preview', renderingMode !== 'post-only' || isDesignPostType ? 'wp-site-blocks' : `${blockListLayoutClass} wp-block-post-content` // Ensure root level blocks receive default/flow blockGap styling rules.
            ),
            layout: blockListLayout,
            dropZoneElement:
            // When iframed, pass in the html element of the iframe to
            // ensure the drop zone extends to the edges of the iframe.
            disableIframe ? localRef.current : localRef.current?.parentNode,
            __unstableDisableDropZone:
            // In template preview mode, disable drop zones at the root of the template.
            renderingMode === 'template-locked' ? true : false
          }), renderingMode === 'template-locked' && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(EditTemplateBlocksNotification, {
            contentRef: localRef
          })]
        }),
        // Avoid resize listeners when not needed,
        // these will trigger unnecessary re-renders
        // when animating the iframe width.
        enableResizing && resizeObserver]
      })
    })
  });
}
/* harmony default export */ const visual_editor = (VisualEditor);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/editor-interface/index.js
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */









/**
 * Internal dependencies
 */












const interfaceLabels = {
  /* translators: accessibility text for the editor top bar landmark region. */
  header: (0,external_wp_i18n_namespaceObject.__)('Editor top bar'),
  /* translators: accessibility text for the editor content landmark region. */
  body: (0,external_wp_i18n_namespaceObject.__)('Editor content'),
  /* translators: accessibility text for the editor settings landmark region. */
  sidebar: (0,external_wp_i18n_namespaceObject.__)('Editor settings'),
  /* translators: accessibility text for the editor publish landmark region. */
  actions: (0,external_wp_i18n_namespaceObject.__)('Editor publish'),
  /* translators: accessibility text for the editor footer landmark region. */
  footer: (0,external_wp_i18n_namespaceObject.__)('Editor footer')
};
function EditorInterface({
  className,
  enableRegionNavigation,
  styles,
  children,
  forceIsDirty,
  contentRef,
  disableIframe,
  autoFocus,
  customSaveButton,
  forceDisableBlockTools,
  title,
  iframeProps
}) {
  const {
    mode,
    isRichEditingEnabled,
    isInserterOpened,
    isListViewOpened,
    isDistractionFree,
    isPreviewMode,
    previousShortcut,
    nextShortcut,
    showBlockBreadcrumbs,
    documentLabel,
    blockEditorMode
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      get
    } = select(external_wp_preferences_namespaceObject.store);
    const {
      getEditorSettings,
      getPostTypeLabel
    } = select(store_store);
    const editorSettings = getEditorSettings();
    const postTypeLabel = getPostTypeLabel();
    return {
      mode: select(store_store).getEditorMode(),
      isRichEditingEnabled: editorSettings.richEditingEnabled,
      isInserterOpened: select(store_store).isInserterOpened(),
      isListViewOpened: select(store_store).isListViewOpened(),
      isDistractionFree: get('core', 'distractionFree'),
      isPreviewMode: editorSettings.__unstableIsPreviewMode,
      previousShortcut: select(external_wp_keyboardShortcuts_namespaceObject.store).getAllShortcutKeyCombinations('core/editor/previous-region'),
      nextShortcut: select(external_wp_keyboardShortcuts_namespaceObject.store).getAllShortcutKeyCombinations('core/editor/next-region'),
      showBlockBreadcrumbs: get('core', 'showBlockBreadcrumbs'),
      // translators: Default label for the Document in the Block Breadcrumb.
      documentLabel: postTypeLabel || (0,external_wp_i18n_namespaceObject._x)('Document', 'noun'),
      blockEditorMode: select(external_wp_blockEditor_namespaceObject.store).__unstableGetEditorMode()
    };
  }, []);
  const isWideViewport = (0,external_wp_compose_namespaceObject.useViewportMatch)('large');
  const isLargeViewport = (0,external_wp_compose_namespaceObject.useViewportMatch)('medium');
  const secondarySidebarLabel = isListViewOpened ? (0,external_wp_i18n_namespaceObject.__)('Document Overview') : (0,external_wp_i18n_namespaceObject.__)('Block Library');

  // Local state for save panel.
  // Note 'truthy' callback implies an open panel.
  const [entitiesSavedStatesCallback, setEntitiesSavedStatesCallback] = (0,external_wp_element_namespaceObject.useState)(false);
  const closeEntitiesSavedStates = (0,external_wp_element_namespaceObject.useCallback)(arg => {
    if (typeof entitiesSavedStatesCallback === 'function') {
      entitiesSavedStatesCallback(arg);
    }
    setEntitiesSavedStatesCallback(false);
  }, [entitiesSavedStatesCallback]);
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(interface_skeleton, {
    enableRegionNavigation: enableRegionNavigation,
    isDistractionFree: isDistractionFree && isWideViewport,
    className: dist_clsx(className, {
      'is-entity-save-view-open': !!entitiesSavedStatesCallback
    }),
    labels: {
      ...interfaceLabels,
      secondarySidebar: secondarySidebarLabel
    },
    header: !isPreviewMode && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(components_header, {
      forceIsDirty: forceIsDirty,
      setEntitiesSavedStatesCallback: setEntitiesSavedStatesCallback,
      customSaveButton: customSaveButton,
      forceDisableBlockTools: forceDisableBlockTools,
      title: title
    }),
    editorNotices: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(editor_notices, {}),
    secondarySidebar: !isPreviewMode && mode === 'visual' && (isInserterOpened && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(InserterSidebar, {}) || isListViewOpened && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(ListViewSidebar, {})),
    sidebar: !isPreviewMode && !isDistractionFree && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(complementary_area.Slot, {
      scope: "core"
    }),
    content: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
      children: [!isDistractionFree && !isPreviewMode && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(editor_notices, {}), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(content_slot_fill.Slot, {
        children: ([editorCanvasView]) => !isPreviewMode && editorCanvasView ? editorCanvasView : /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
          children: [!isPreviewMode && (mode === 'text' || !isRichEditingEnabled) && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(TextEditor
          // We should auto-focus the canvas (title) on load.
          // eslint-disable-next-line jsx-a11y/no-autofocus
          , {
            autoFocus: autoFocus
          }), !isPreviewMode && !isLargeViewport && mode === 'visual' && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_blockEditor_namespaceObject.BlockToolbar, {
            hideDragHandle: true
          }), (isPreviewMode || isRichEditingEnabled && mode === 'visual') && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(visual_editor, {
            styles: styles,
            contentRef: contentRef,
            disableIframe: disableIframe
            // We should auto-focus the canvas (title) on load.
            // eslint-disable-next-line jsx-a11y/no-autofocus
            ,
            autoFocus: autoFocus,
            iframeProps: iframeProps
          }), children]
        })
      })]
    }),
    footer: !isPreviewMode && !isDistractionFree && isLargeViewport && showBlockBreadcrumbs && isRichEditingEnabled && blockEditorMode !== 'zoom-out' && mode === 'visual' && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
      className: "edit-post-layout__footer",
      children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_blockEditor_namespaceObject.BlockBreadcrumb, {
        rootLabelText: documentLabel
      })
    }),
    actions: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(SavePublishPanels, {
      closeEntitiesSavedStates: closeEntitiesSavedStates,
      isEntitiesSavedStatesOpen: entitiesSavedStatesCallback,
      setEntitiesSavedStatesCallback: setEntitiesSavedStatesCallback,
      forceIsDirtyPublishPanel: forceIsDirty
    }),
    shortcuts: {
      previous: previousShortcut,
      next: nextShortcut
    }
  });
}

;// CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.mjs
/******************************************************************************
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
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

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
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
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

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
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

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

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
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
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

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose;
    if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  function next() {
    while (env.stack.length) {
      var rec = env.stack.pop();
      try {
        var result = rec.dispose && rec.dispose.call(rec.value);
        if (rec.async) return Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
      }
      catch (e) {
          fail(e);
      }
    }
    if (env.hasError) throw env.error;
  }
  return next();
}

/* harmony default export */ const tslib_es6 = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
});

;// CONCATENATED MODULE: ./node_modules/lower-case/dist.es2015/index.js
/**
 * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt
 */
var SUPPORTED_LOCALE = {
    tr: {
        regexp: /\u0130|\u0049|\u0049\u0307/g,
        map: {
            İ: "\u0069",
            I: "\u0131",
            İ: "\u0069",
        },
    },
    az: {
        regexp: /\u0130/g,
        map: {
            İ: "\u0069",
            I: "\u0131",
            İ: "\u0069",
        },
    },
    lt: {
        regexp: /\u0049|\u004A|\u012E|\u00CC|\u00CD|\u0128/g,
        map: {
            I: "\u0069\u0307",
            J: "\u006A\u0307",
            Į: "\u012F\u0307",
            Ì: "\u0069\u0307\u0300",
            Í: "\u0069\u0307\u0301",
            Ĩ: "\u0069\u0307\u0303",
        },
    },
};
/**
 * Localized lower case.
 */
function localeLowerCase(str, locale) {
    var lang = SUPPORTED_LOCALE[locale.toLowerCase()];
    if (lang)
        return lowerCase(str.replace(lang.regexp, function (m) { return lang.map[m]; }));
    return lowerCase(str);
}
/**
 * Lower case as a function.
 */
function lowerCase(str) {
    return str.toLowerCase();
}

;// CONCATENATED MODULE: ./node_modules/no-case/dist.es2015/index.js

// Support camel case ("camelCase" -> "camel Case" and "CAMELCase" -> "CAMEL Case").
var DEFAULT_SPLIT_REGEXP = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g];
// Remove all non-word characters.
var DEFAULT_STRIP_REGEXP = /[^A-Z0-9]+/gi;
/**
 * Normalize the string into something other libraries can manipulate easier.
 */
function noCase(input, options) {
    if (options === void 0) { options = {}; }
    var _a = options.splitRegexp, splitRegexp = _a === void 0 ? DEFAULT_SPLIT_REGEXP : _a, _b = options.stripRegexp, stripRegexp = _b === void 0 ? DEFAULT_STRIP_REGEXP : _b, _c = options.transform, transform = _c === void 0 ? lowerCase : _c, _d = options.delimiter, delimiter = _d === void 0 ? " " : _d;
    var result = replace(replace(input, splitRegexp, "$1\0$2"), stripRegexp, "\0");
    var start = 0;
    var end = result.length;
    // Trim the delimiter from around the output string.
    while (result.charAt(start) === "\0")
        start++;
    while (result.charAt(end - 1) === "\0")
        end--;
    // Transform each token independently.
    return result.slice(start, end).split("\0").map(transform).join(delimiter);
}
/**
 * Replace `re` in the input string with the replacement value.
 */
function replace(input, re, value) {
    if (re instanceof RegExp)
        return input.replace(re, value);
    return re.reduce(function (input, re) { return input.replace(re, value); }, input);
}

;// CONCATENATED MODULE: ./node_modules/dot-case/dist.es2015/index.js


function dotCase(input, options) {
    if (options === void 0) { options = {}; }
    return noCase(input, __assign({ delimiter: "." }, options));
}

;// CONCATENATED MODULE: ./node_modules/param-case/dist.es2015/index.js


function paramCase(input, options) {
    if (options === void 0) { options = {}; }
    return dotCase(input, __assign({ delimiter: "-" }, options));
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/create-template-part-modal/utils.js
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */

const useExistingTemplateParts = () => {
  return (0,external_wp_data_namespaceObject.useSelect)(select => select(external_wp_coreData_namespaceObject.store).getEntityRecords('postType', TEMPLATE_PART_POST_TYPE, {
    per_page: -1
  }), []);
};

/**
 * Return a unique template part title based on
 * the given title and existing template parts.
 *
 * @param {string} title         The original template part title.
 * @param {Object} templateParts The array of template part entities.
 * @return {string} A unique template part title.
 */
const getUniqueTemplatePartTitle = (title, templateParts) => {
  const lowercaseTitle = title.toLowerCase();
  const existingTitles = templateParts.map(templatePart => templatePart.title.rendered.toLowerCase());
  if (!existingTitles.includes(lowercaseTitle)) {
    return title;
  }
  let suffix = 2;
  while (existingTitles.includes(`${lowercaseTitle} ${suffix}`)) {
    suffix++;
  }
  return `${title} ${suffix}`;
};

/**
 * Get a valid slug for a template part.
 * Currently template parts only allow latin chars.
 * The fallback slug will receive suffix by default.
 *
 * @param {string} title The template part title.
 * @return {string} A valid template part slug.
 */
const getCleanTemplatePartSlug = title => {
  return paramCase(title).replace(/[^\w-]+/g, '') || 'wp-custom-part';
};

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/create-template-part-modal/index.js
/**
 * WordPress dependencies
 */










/**
 * Internal dependencies
 */





function CreateTemplatePartModal({
  modalTitle,
  ...restProps
}) {
  const defaultModalTitle = (0,external_wp_data_namespaceObject.useSelect)(select => select(external_wp_coreData_namespaceObject.store).getPostType(TEMPLATE_PART_POST_TYPE)?.labels?.add_new_item, []);
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Modal, {
    title: modalTitle || defaultModalTitle,
    onRequestClose: restProps.closeModal,
    overlayClassName: "editor-create-template-part-modal",
    children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(CreateTemplatePartModalContents, {
      ...restProps
    })
  });
}
function CreateTemplatePartModalContents({
  defaultArea = TEMPLATE_PART_AREA_DEFAULT_CATEGORY,
  blocks = [],
  confirmLabel = (0,external_wp_i18n_namespaceObject.__)('Add'),
  closeModal,
  onCreate,
  onError,
  defaultTitle = ''
}) {
  const {
    createErrorNotice
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_notices_namespaceObject.store);
  const {
    saveEntityRecord
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_coreData_namespaceObject.store);
  const existingTemplateParts = useExistingTemplateParts();
  const [title, setTitle] = (0,external_wp_element_namespaceObject.useState)(defaultTitle);
  const [area, setArea] = (0,external_wp_element_namespaceObject.useState)(defaultArea);
  const [isSubmitting, setIsSubmitting] = (0,external_wp_element_namespaceObject.useState)(false);
  const instanceId = (0,external_wp_compose_namespaceObject.useInstanceId)(CreateTemplatePartModal);
  const templatePartAreas = (0,external_wp_data_namespaceObject.useSelect)(select => select(store_store).__experimentalGetDefaultTemplatePartAreas(), []);
  async function createTemplatePart() {
    if (!title || isSubmitting) {
      return;
    }
    try {
      setIsSubmitting(true);
      const uniqueTitle = getUniqueTemplatePartTitle(title, existingTemplateParts);
      const cleanSlug = getCleanTemplatePartSlug(uniqueTitle);
      const templatePart = await saveEntityRecord('postType', TEMPLATE_PART_POST_TYPE, {
        slug: cleanSlug,
        title: uniqueTitle,
        content: (0,external_wp_blocks_namespaceObject.serialize)(blocks),
        area
      }, {
        throwOnError: true
      });
      await onCreate(templatePart);

      // TODO: Add a success notice?
    } catch (error) {
      const errorMessage = error.message && error.code !== 'unknown_error' ? error.message : (0,external_wp_i18n_namespaceObject.__)('An error occurred while creating the template part.');
      createErrorNotice(errorMessage, {
        type: 'snackbar'
      });
      onError?.();
    } finally {
      setIsSubmitting(false);
    }
  }
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("form", {
    onSubmit: async event => {
      event.preventDefault();
      await createTemplatePart();
    },
    children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.__experimentalVStack, {
      spacing: "4",
      children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.TextControl, {
        __next40pxDefaultSize: true,
        __nextHasNoMarginBottom: true,
        label: (0,external_wp_i18n_namespaceObject.__)('Name'),
        value: title,
        onChange: setTitle,
        required: true
      }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.BaseControl, {
        label: (0,external_wp_i18n_namespaceObject.__)('Area'),
        id: `editor-create-template-part-modal__area-selection-${instanceId}`,
        className: "editor-create-template-part-modal__area-base-control",
        children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.__experimentalRadioGroup, {
          label: (0,external_wp_i18n_namespaceObject.__)('Area'),
          className: "editor-create-template-part-modal__area-radio-group",
          id: `editor-create-template-part-modal__area-selection-${instanceId}`,
          onChange: setArea,
          checked: area,
          children: templatePartAreas.map(({
            icon,
            label,
            area: value,
            description
          }) => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.__experimentalRadio, {
            value: value,
            className: "editor-create-template-part-modal__area-radio",
            children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.Flex, {
              align: "start",
              justify: "start",
              children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.FlexItem, {
                children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Icon, {
                  icon: icon
                })
              }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.FlexBlock, {
                className: "editor-create-template-part-modal__option-label",
                children: [label, /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
                  children: description
                })]
              }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.FlexItem, {
                className: "editor-create-template-part-modal__checkbox",
                children: area === value && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Icon, {
                  icon: library_check
                })
              })]
            })
          }, label))
        })
      }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.__experimentalHStack, {
        justify: "right",
        children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
          __next40pxDefaultSize: true,
          variant: "tertiary",
          onClick: () => {
            closeModal();
          },
          children: (0,external_wp_i18n_namespaceObject.__)('Cancel')
        }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
          __next40pxDefaultSize: true,
          variant: "primary",
          type: "submit",
          "aria-disabled": !title || isSubmitting,
          isBusy: isSubmitting,
          children: confirmLabel
        })]
      })]
    })
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/preferences-modal/enable-publish-sidebar.js
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


const {
  PreferenceBaseOption: enable_publish_sidebar_PreferenceBaseOption
} = unlock(external_wp_preferences_namespaceObject.privateApis);
/* harmony default export */ const enable_publish_sidebar = ((0,external_wp_compose_namespaceObject.compose)((0,external_wp_data_namespaceObject.withSelect)(select => ({
  isChecked: select(store_store).isPublishSidebarEnabled()
})), (0,external_wp_data_namespaceObject.withDispatch)(dispatch => {
  const {
    enablePublishSidebar,
    disablePublishSidebar
  } = dispatch(store_store);
  return {
    onChange: isEnabled => isEnabled ? enablePublishSidebar() : disablePublishSidebar()
  };
}))(enable_publish_sidebar_PreferenceBaseOption));

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/block-manager/checklist.js
/**
 * WordPress dependencies
 */




function BlockTypesChecklist({
  blockTypes,
  value,
  onItemChange
}) {
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("ul", {
    className: "editor-block-manager__checklist",
    children: blockTypes.map(blockType => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("li", {
      className: "editor-block-manager__checklist-item",
      children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.CheckboxControl, {
        __nextHasNoMarginBottom: true,
        label: blockType.title,
        checked: value.includes(blockType.name),
        onChange: (...args) => onItemChange(blockType.name, ...args)
      }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_blockEditor_namespaceObject.BlockIcon, {
        icon: blockType.icon
      })]
    }, blockType.name))
  });
}
/* harmony default export */ const checklist = (BlockTypesChecklist);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/block-manager/category.js
/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */





function BlockManagerCategory({
  title,
  blockTypes
}) {
  const instanceId = (0,external_wp_compose_namespaceObject.useInstanceId)(BlockManagerCategory);
  const {
    allowedBlockTypes,
    hiddenBlockTypes
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getEditorSettings
    } = select(store_store);
    const {
      get
    } = select(external_wp_preferences_namespaceObject.store);
    return {
      allowedBlockTypes: getEditorSettings().allowedBlockTypes,
      hiddenBlockTypes: get('core', 'hiddenBlockTypes')
    };
  }, []);
  const filteredBlockTypes = (0,external_wp_element_namespaceObject.useMemo)(() => {
    if (allowedBlockTypes === true) {
      return blockTypes;
    }
    return blockTypes.filter(({
      name
    }) => {
      return allowedBlockTypes?.includes(name);
    });
  }, [allowedBlockTypes, blockTypes]);
  const {
    showBlockTypes,
    hideBlockTypes
  } = unlock((0,external_wp_data_namespaceObject.useDispatch)(store_store));
  const toggleVisible = (0,external_wp_element_namespaceObject.useCallback)((blockName, nextIsChecked) => {
    if (nextIsChecked) {
      showBlockTypes(blockName);
    } else {
      hideBlockTypes(blockName);
    }
  }, [showBlockTypes, hideBlockTypes]);
  const toggleAllVisible = (0,external_wp_element_namespaceObject.useCallback)(nextIsChecked => {
    const blockNames = blockTypes.map(({
      name
    }) => name);
    if (nextIsChecked) {
      showBlockTypes(blockNames);
    } else {
      hideBlockTypes(blockNames);
    }
  }, [blockTypes, showBlockTypes, hideBlockTypes]);
  if (!filteredBlockTypes.length) {
    return null;
  }
  const checkedBlockNames = filteredBlockTypes.map(({
    name
  }) => name).filter(type => !(hiddenBlockTypes !== null && hiddenBlockTypes !== void 0 ? hiddenBlockTypes : []).includes(type));
  const titleId = 'editor-block-manager__category-title-' + instanceId;
  const isAllChecked = checkedBlockNames.length === filteredBlockTypes.length;
  const isIndeterminate = !isAllChecked && checkedBlockNames.length > 0;
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
    role: "group",
    "aria-labelledby": titleId,
    className: "editor-block-manager__category",
    children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.CheckboxControl, {
      __nextHasNoMarginBottom: true,
      checked: isAllChecked,
      onChange: toggleAllVisible,
      className: "editor-block-manager__category-title",
      indeterminate: isIndeterminate,
      label: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("span", {
        id: titleId,
        children: title
      })
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(checklist, {
      blockTypes: filteredBlockTypes,
      value: checkedBlockNames,
      onItemChange: toggleVisible
    })]
  });
}
/* harmony default export */ const block_manager_category = (BlockManagerCategory);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/block-manager/index.js
/**
 * WordPress dependencies
 */









/**
 * Internal dependencies
 */





function BlockManager({
  blockTypes,
  categories,
  hasBlockSupport,
  isMatchingSearchTerm,
  numberOfHiddenBlocks,
  enableAllBlockTypes
}) {
  const debouncedSpeak = (0,external_wp_compose_namespaceObject.useDebounce)(external_wp_a11y_namespaceObject.speak, 500);
  const [search, setSearch] = (0,external_wp_element_namespaceObject.useState)('');

  // Filtering occurs here (as opposed to `withSelect`) to avoid
  // wasted renders by consequence of `Array#filter` producing
  // a new value reference on each call.
  blockTypes = blockTypes.filter(blockType => hasBlockSupport(blockType, 'inserter', true) && (!search || isMatchingSearchTerm(blockType, search)) && (!blockType.parent || blockType.parent.includes('core/post-content')));

  // Announce search results on change
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    if (!search) {
      return;
    }
    const count = blockTypes.length;
    const resultsFoundMessage = (0,external_wp_i18n_namespaceObject.sprintf)( /* translators: %d: number of results. */
    (0,external_wp_i18n_namespaceObject._n)('%d result found.', '%d results found.', count), count);
    debouncedSpeak(resultsFoundMessage);
  }, [blockTypes.length, search, debouncedSpeak]);
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
    className: "editor-block-manager__content",
    children: [!!numberOfHiddenBlocks && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
      className: "editor-block-manager__disabled-blocks-count",
      children: [(0,external_wp_i18n_namespaceObject.sprintf)( /* translators: %d: number of blocks. */
      (0,external_wp_i18n_namespaceObject._n)('%d block is hidden.', '%d blocks are hidden.', numberOfHiddenBlocks), numberOfHiddenBlocks), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
        variant: "link",
        onClick: () => enableAllBlockTypes(blockTypes),
        children: (0,external_wp_i18n_namespaceObject.__)('Reset')
      })]
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.SearchControl, {
      __nextHasNoMarginBottom: true,
      label: (0,external_wp_i18n_namespaceObject.__)('Search for a block'),
      placeholder: (0,external_wp_i18n_namespaceObject.__)('Search for a block'),
      value: search,
      onChange: nextSearch => setSearch(nextSearch),
      className: "editor-block-manager__search"
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
      tabIndex: "0",
      role: "region",
      "aria-label": (0,external_wp_i18n_namespaceObject.__)('Available block types'),
      className: "editor-block-manager__results",
      children: [blockTypes.length === 0 && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("p", {
        className: "editor-block-manager__no-results",
        children: (0,external_wp_i18n_namespaceObject.__)('No blocks found.')
      }), categories.map(category => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(block_manager_category, {
        title: category.title,
        blockTypes: blockTypes.filter(blockType => blockType.category === category.slug)
      }, category.slug)), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(block_manager_category, {
        title: (0,external_wp_i18n_namespaceObject.__)('Uncategorized'),
        blockTypes: blockTypes.filter(({
          category
        }) => !category)
      })]
    })]
  });
}
/* harmony default export */ const block_manager = ((0,external_wp_compose_namespaceObject.compose)([(0,external_wp_data_namespaceObject.withSelect)(select => {
  var _get;
  const {
    getBlockTypes,
    getCategories,
    hasBlockSupport,
    isMatchingSearchTerm
  } = select(external_wp_blocks_namespaceObject.store);
  const {
    get
  } = select(external_wp_preferences_namespaceObject.store);

  // Some hidden blocks become unregistered
  // by removing for instance the plugin that registered them, yet
  // they're still remain as hidden by the user's action.
  // We consider "hidden", blocks which were hidden and
  // are still registered.
  const blockTypes = getBlockTypes();
  const hiddenBlockTypes = ((_get = get('core', 'hiddenBlockTypes')) !== null && _get !== void 0 ? _get : []).filter(hiddenBlock => {
    return blockTypes.some(registeredBlock => registeredBlock.name === hiddenBlock);
  });
  const numberOfHiddenBlocks = Array.isArray(hiddenBlockTypes) && hiddenBlockTypes.length;
  return {
    blockTypes,
    categories: getCategories(),
    hasBlockSupport,
    isMatchingSearchTerm,
    numberOfHiddenBlocks
  };
}), (0,external_wp_data_namespaceObject.withDispatch)(dispatch => {
  const {
    showBlockTypes
  } = unlock(dispatch(store_store));
  return {
    enableAllBlockTypes: blockTypes => {
      const blockNames = blockTypes.map(({
        name
      }) => name);
      showBlockTypes(blockNames);
    }
  };
})])(BlockManager));

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/preferences-modal/index.js
/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */














const {
  PreferencesModal,
  PreferencesModalTabs,
  PreferencesModalSection,
  PreferenceToggleControl
} = unlock(external_wp_preferences_namespaceObject.privateApis);
function EditorPreferencesModal({
  extraSections = {}
}) {
  const isLargeViewport = (0,external_wp_compose_namespaceObject.useViewportMatch)('medium');
  const {
    isActive,
    showBlockBreadcrumbsOption
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getEditorSettings
    } = select(store_store);
    const {
      get
    } = select(external_wp_preferences_namespaceObject.store);
    const {
      isModalActive
    } = select(store);
    const isRichEditingEnabled = getEditorSettings().richEditingEnabled;
    const isDistractionFreeEnabled = get('core', 'distractionFree');
    return {
      showBlockBreadcrumbsOption: !isDistractionFreeEnabled && isLargeViewport && isRichEditingEnabled,
      isActive: isModalActive('editor/preferences')
    };
  }, [isLargeViewport]);
  const {
    closeModal
  } = (0,external_wp_data_namespaceObject.useDispatch)(store);
  const {
    setIsListViewOpened,
    setIsInserterOpened
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  const {
    set: setPreference
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_preferences_namespaceObject.store);
  const sections = (0,external_wp_element_namespaceObject.useMemo)(() => [{
    name: 'general',
    tabLabel: (0,external_wp_i18n_namespaceObject.__)('General'),
    content: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
      children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(PreferencesModalSection, {
        title: (0,external_wp_i18n_namespaceObject.__)('Interface'),
        children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PreferenceToggleControl, {
          scope: "core",
          featureName: "showListViewByDefault",
          help: (0,external_wp_i18n_namespaceObject.__)('Opens the List View sidebar by default.'),
          label: (0,external_wp_i18n_namespaceObject.__)('Always open List View')
        }), showBlockBreadcrumbsOption && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PreferenceToggleControl, {
          scope: "core",
          featureName: "showBlockBreadcrumbs",
          help: (0,external_wp_i18n_namespaceObject.__)('Display the block hierarchy trail at the bottom of the editor.'),
          label: (0,external_wp_i18n_namespaceObject.__)('Show block breadcrumbs')
        }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PreferenceToggleControl, {
          scope: "core",
          featureName: "allowRightClickOverrides",
          help: (0,external_wp_i18n_namespaceObject.__)('Allows contextual List View menus via right-click, overriding browser defaults.'),
          label: (0,external_wp_i18n_namespaceObject.__)('Allow right-click contextual menus')
        })]
      }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(PreferencesModalSection, {
        title: (0,external_wp_i18n_namespaceObject.__)('Document settings'),
        description: (0,external_wp_i18n_namespaceObject.__)('Select what settings are shown in the document panel.'),
        children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(enable_plugin_document_setting_panel.Slot, {}), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(post_taxonomies, {
          taxonomyWrapper: (content, taxonomy) => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(enable_panel, {
            label: taxonomy.labels.menu_name,
            panelName: `taxonomy-panel-${taxonomy.slug}`
          })
        }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(post_featured_image_check, {
          children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(enable_panel, {
            label: (0,external_wp_i18n_namespaceObject.__)('Featured image'),
            panelName: "featured-image"
          })
        }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(post_excerpt_check, {
          children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(enable_panel, {
            label: (0,external_wp_i18n_namespaceObject.__)('Excerpt'),
            panelName: "post-excerpt"
          })
        }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(post_type_support_check, {
          supportKeys: ['comments', 'trackbacks'],
          children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(enable_panel, {
            label: (0,external_wp_i18n_namespaceObject.__)('Discussion'),
            panelName: "discussion-panel"
          })
        }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(page_attributes_check, {
          children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(enable_panel, {
            label: (0,external_wp_i18n_namespaceObject.__)('Page attributes'),
            panelName: "page-attributes"
          })
        })]
      }), isLargeViewport && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PreferencesModalSection, {
        title: (0,external_wp_i18n_namespaceObject.__)('Publishing'),
        children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(enable_publish_sidebar, {
          help: (0,external_wp_i18n_namespaceObject.__)('Review settings, such as visibility and tags.'),
          label: (0,external_wp_i18n_namespaceObject.__)('Enable pre-publish checks')
        })
      }), extraSections?.general]
    })
  }, {
    name: 'appearance',
    tabLabel: (0,external_wp_i18n_namespaceObject.__)('Appearance'),
    content: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(PreferencesModalSection, {
      title: (0,external_wp_i18n_namespaceObject.__)('Appearance'),
      description: (0,external_wp_i18n_namespaceObject.__)('Customize the editor interface to suit your needs.'),
      children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PreferenceToggleControl, {
        scope: "core",
        featureName: "fixedToolbar",
        onToggle: () => setPreference('core', 'distractionFree', false),
        help: (0,external_wp_i18n_namespaceObject.__)('Access all block and document tools in a single place.'),
        label: (0,external_wp_i18n_namespaceObject.__)('Top toolbar')
      }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PreferenceToggleControl, {
        scope: "core",
        featureName: "distractionFree",
        onToggle: () => {
          setPreference('core', 'fixedToolbar', true);
          setIsInserterOpened(false);
          setIsListViewOpened(false);
        },
        help: (0,external_wp_i18n_namespaceObject.__)('Reduce visual distractions by hiding the toolbar and other elements to focus on writing.'),
        label: (0,external_wp_i18n_namespaceObject.__)('Distraction free')
      }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PreferenceToggleControl, {
        scope: "core",
        featureName: "focusMode",
        help: (0,external_wp_i18n_namespaceObject.__)('Highlights the current block and fades other content.'),
        label: (0,external_wp_i18n_namespaceObject.__)('Spotlight mode')
      }), extraSections?.appearance]
    })
  }, {
    name: 'accessibility',
    tabLabel: (0,external_wp_i18n_namespaceObject.__)('Accessibility'),
    content: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
      children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PreferencesModalSection, {
        title: (0,external_wp_i18n_namespaceObject.__)('Navigation'),
        description: (0,external_wp_i18n_namespaceObject.__)('Optimize the editing experience for enhanced control.'),
        children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PreferenceToggleControl, {
          scope: "core",
          featureName: "keepCaretInsideBlock",
          help: (0,external_wp_i18n_namespaceObject.__)('Keeps the text cursor within the block boundaries, aiding users with screen readers by preventing unintentional cursor movement outside the block.'),
          label: (0,external_wp_i18n_namespaceObject.__)('Contain text cursor inside block')
        })
      }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PreferencesModalSection, {
        title: (0,external_wp_i18n_namespaceObject.__)('Interface'),
        children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PreferenceToggleControl, {
          scope: "core",
          featureName: "showIconLabels",
          label: (0,external_wp_i18n_namespaceObject.__)('Show button text labels'),
          help: (0,external_wp_i18n_namespaceObject.__)('Show text instead of icons on buttons across the interface.')
        })
      })]
    })
  }, {
    name: 'blocks',
    tabLabel: (0,external_wp_i18n_namespaceObject.__)('Blocks'),
    content: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
      children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PreferencesModalSection, {
        title: (0,external_wp_i18n_namespaceObject.__)('Inserter'),
        children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PreferenceToggleControl, {
          scope: "core",
          featureName: "mostUsedBlocks",
          help: (0,external_wp_i18n_namespaceObject.__)('Adds a category with the most frequently used blocks in the inserter.'),
          label: (0,external_wp_i18n_namespaceObject.__)('Show most used blocks')
        })
      }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PreferencesModalSection, {
        title: (0,external_wp_i18n_namespaceObject.__)('Manage block visibility'),
        description: (0,external_wp_i18n_namespaceObject.__)("Disable blocks that you don't want to appear in the inserter. They can always be toggled back on later."),
        children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(block_manager, {})
      })]
    })
  }], [showBlockBreadcrumbsOption, extraSections, setIsInserterOpened, setIsListViewOpened, setPreference, isLargeViewport]);
  if (!isActive) {
    return null;
  }
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PreferencesModal, {
    closeModal: closeModal,
    children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PreferencesModalTabs, {
      sections: sections
    })
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/trash.js
/**
 * WordPress dependencies
 */


const trash = /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_primitives_namespaceObject.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 5.5A2.25 2.25 0 0 0 9.878 7h4.244A2.251 2.251 0 0 0 12 5.5ZM12 4a3.751 3.751 0 0 0-3.675 3H5v1.5h1.27l.818 8.997a2.75 2.75 0 0 0 2.739 2.501h4.347a2.75 2.75 0 0 0 2.738-2.5L17.73 8.5H19V7h-3.325A3.751 3.751 0 0 0 12 4Zm4.224 4.5H7.776l.806 8.861a1.25 1.25 0 0 0 1.245 1.137h4.347a1.25 1.25 0 0 0 1.245-1.137l.805-8.861Z"
  })
});
/* harmony default export */ const library_trash = (trash);

;// CONCATENATED MODULE: ./node_modules/client-zip/index.js
"stream"in Blob.prototype||Object.defineProperty(Blob.prototype,"stream",{value(){return new Response(this).body}}),"setBigUint64"in DataView.prototype||Object.defineProperty(DataView.prototype,"setBigUint64",{value(e,n,t){const i=Number(0xffffffffn&n),r=Number(n>>32n);this.setUint32(e+(t?0:4),i,t),this.setUint32(e+(t?4:0),r,t)}});var e=e=>new DataView(new ArrayBuffer(e)),n=e=>new Uint8Array(e.buffer||e),t=e=>(new TextEncoder).encode(String(e)),i=e=>Math.min(4294967295,Number(e)),client_zip_r=e=>Math.min(65535,Number(e));function f(e,i){if(void 0===i||i instanceof Date||(i=new Date(i)),e instanceof File)return{isFile:1,t:i||new Date(e.lastModified),i:e.stream()};if(e instanceof Response)return{isFile:1,t:i||new Date(e.headers.get("Last-Modified")||Date.now()),i:e.body};if(void 0===i)i=new Date;else if(isNaN(i))throw new Error("Invalid modification date.");if(void 0===e)return{isFile:0,t:i};if("string"==typeof e)return{isFile:1,t:i,i:t(e)};if(e instanceof Blob)return{isFile:1,t:i,i:e.stream()};if(e instanceof Uint8Array||e instanceof ReadableStream)return{isFile:1,t:i,i:e};if(e instanceof ArrayBuffer||ArrayBuffer.isView(e))return{isFile:1,t:i,i:n(e)};if(Symbol.asyncIterator in e)return{isFile:1,t:i,i:o(e[Symbol.asyncIterator]())};throw new TypeError("Unsupported input format.")}function o(e,n=e){return new ReadableStream({async pull(n){let t=0;for(;n.desiredSize>t;){const i=await e.next();if(!i.value){n.close();break}{const e=a(i.value);n.enqueue(e),t+=e.byteLength}}},cancel(e){n.throw?.(e)}})}function a(e){return"string"==typeof e?t(e):e instanceof Uint8Array?e:n(e)}function s(e,i,r){let[f,o]=function(e){return e?e instanceof Uint8Array?[e,1]:ArrayBuffer.isView(e)||e instanceof ArrayBuffer?[n(e),1]:[t(e),0]:[void 0,0]}(i);if(e instanceof File)return{o:d(f||t(e.name)),u:BigInt(e.size),l:o};if(e instanceof Response){const n=e.headers.get("content-disposition"),i=n&&n.match(/;\s*filename\*?=["']?(.*?)["']?$/i),a=i&&i[1]||e.url&&new URL(e.url).pathname.split("/").findLast(Boolean),s=a&&decodeURIComponent(a),u=r||+e.headers.get("content-length");return{o:d(f||t(s)),u:BigInt(u),l:o}}return f=d(f,void 0!==e||void 0!==r),"string"==typeof e?{o:f,u:BigInt(t(e).length),l:o}:e instanceof Blob?{o:f,u:BigInt(e.size),l:o}:e instanceof ArrayBuffer||ArrayBuffer.isView(e)?{o:f,u:BigInt(e.byteLength),l:o}:{o:f,u:u(e,r),l:o}}function u(e,n){return n>-1?BigInt(n):e?void 0:0n}function d(e,n=1){if(!e||e.every((c=>47===c)))throw new Error("The file must have a name.");if(n)for(;47===e[e.length-1];)e=e.subarray(0,-1);else 47!==e[e.length-1]&&(e=new Uint8Array([...e,47]));return e}var l=new Uint32Array(256);for(let e=0;e<256;++e){let n=e;for(let e=0;e<8;++e)n=n>>>1^(1&n&&3988292384);l[e]=n}function y(e,n=0){n^=-1;for(var t=0,i=e.length;t<i;t++)n=n>>>8^l[255&n^e[t]];return(-1^n)>>>0}function w(e,n,t=0){const i=e.getSeconds()>>1|e.getMinutes()<<5|e.getHours()<<11,r=e.getDate()|e.getMonth()+1<<5|e.getFullYear()-1980<<9;n.setUint16(t,i,1),n.setUint16(t+2,r,1)}function B({o:e,l:n},t){return 8*(!n||(t??function(e){try{b.decode(e)}catch{return 0}return 1}(e)))}var b=new TextDecoder("utf8",{fatal:1});function p(t,i=0){const r=e(30);return r.setUint32(0,1347093252),r.setUint32(4,754976768|i),w(t.t,r,10),r.setUint16(26,t.o.length,1),n(r)}async function*g(e){let{i:n}=e;if("then"in n&&(n=await n),n instanceof Uint8Array)yield n,e.m=y(n,0),e.u=BigInt(n.length);else{e.u=0n;const t=n.getReader();for(;;){const{value:n,done:i}=await t.read();if(i)break;e.m=y(n,e.m),e.u+=BigInt(n.length),yield n}}}function I(t,r){const f=e(16+(r?8:0));return f.setUint32(0,1347094280),f.setUint32(4,t.isFile?t.m:0,1),r?(f.setBigUint64(8,t.u,1),f.setBigUint64(16,t.u,1)):(f.setUint32(8,i(t.u),1),f.setUint32(12,i(t.u),1)),n(f)}function v(t,r,f=0,o=0){const a=e(46);return a.setUint32(0,1347092738),a.setUint32(4,755182848),a.setUint16(8,2048|f),w(t.t,a,12),a.setUint32(16,t.isFile?t.m:0,1),a.setUint32(20,i(t.u),1),a.setUint32(24,i(t.u),1),a.setUint16(28,t.o.length,1),a.setUint16(30,o,1),a.setUint16(40,t.isFile?33204:16893,1),a.setUint32(42,i(r),1),n(a)}function h(t,i,r){const f=e(r);return f.setUint16(0,1,1),f.setUint16(2,r-4,1),16&r&&(f.setBigUint64(4,t.u,1),f.setBigUint64(12,t.u,1)),f.setBigUint64(r-8,i,1),n(f)}function D(e){return e instanceof File||e instanceof Response?[[e],[e]]:[[e.input,e.name,e.size],[e.input,e.lastModified]]}var S=e=>function(e){let n=BigInt(22),t=0n,i=0;for(const r of e){if(!r.o)throw new Error("Every file must have a non-empty name.");if(void 0===r.u)throw new Error(`Missing size for file "${(new TextDecoder).decode(r.o)}".`);const e=r.u>=0xffffffffn,f=t>=0xffffffffn;t+=BigInt(46+r.o.length+(e&&8))+r.u,n+=BigInt(r.o.length+46+(12*f|28*e)),i||(i=e)}return(i||t>=0xffffffffn)&&(n+=BigInt(76)),n+t}(function*(e){for(const n of e)yield s(...D(n)[0])}(e));function A(e,n={}){const t={"Content-Type":"application/zip","Content-Disposition":"attachment"};return("bigint"==typeof n.length||Number.isInteger(n.length))&&n.length>0&&(t["Content-Length"]=String(n.length)),n.metadata&&(t["Content-Length"]=String(S(n.metadata))),new Response(N(e,n),{headers:t})}function N(t,a={}){const u=function(e){const n=e[Symbol.iterator in e?Symbol.iterator:Symbol.asyncIterator]();return{async next(){const e=await n.next();if(e.done)return e;const[t,i]=D(e.value);return{done:0,value:Object.assign(f(...i),s(...t))}},throw:n.throw?.bind(n),[Symbol.asyncIterator](){return this}}}(t);return o(async function*(t,f){const o=[];let a=0n,s=0n,u=0;for await(const e of t){const n=B(e,f.buffersAreUTF8);yield p(e,n),yield new Uint8Array(e.o),e.isFile&&(yield*g(e));const t=e.u>=0xffffffffn,i=12*(a>=0xffffffffn)|28*t;yield I(e,t),o.push(v(e,a,n,i)),o.push(e.o),i&&o.push(h(e,a,i)),t&&(a+=8n),s++,a+=BigInt(46+e.o.length)+e.u,u||(u=t)}let d=0n;for(const e of o)yield e,d+=BigInt(e.length);if(u||a>=0xffffffffn){const t=e(76);t.setUint32(0,1347094022),t.setBigUint64(4,BigInt(44),1),t.setUint32(12,755182848),t.setBigUint64(24,s,1),t.setBigUint64(32,s,1),t.setBigUint64(40,d,1),t.setBigUint64(48,a,1),t.setUint32(56,1347094023),t.setBigUint64(64,a+d,1),t.setUint32(72,1,1),yield n(t)}const l=e(22);l.setUint32(0,1347093766),l.setUint16(8,client_zip_r(s),1),l.setUint16(10,client_zip_r(s),1),l.setUint32(12,i(d),1),l.setUint32(16,i(a),1),yield n(l)}(u,a),u)}
;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-actions/export-pattern-action.js
/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


// Patterns.
const {
  PATTERN_TYPES: export_pattern_action_PATTERN_TYPES
} = unlock(external_wp_patterns_namespaceObject.privateApis);
function getJsonFromItem(item) {
  return JSON.stringify({
    __file: item.type,
    title: item.title || item.name,
    content: item.patternPost.content.raw,
    syncStatus: item.patternPost.wp_pattern_sync_status
  }, null, 2);
}
const exportPatternAsJSONAction = {
  id: 'export-pattern',
  label: (0,external_wp_i18n_namespaceObject.__)('Export as JSON'),
  supportsBulk: true,
  isEligible: item => {
    if (!item.type) {
      return false;
    }
    return item.type === export_pattern_action_PATTERN_TYPES.user;
  },
  callback: async items => {
    if (items.length === 1) {
      return (0,external_wp_blob_namespaceObject.downloadBlob)(`${paramCase(items[0].title || items[0].name)}.json`, getJsonFromItem(items[0]), 'application/json');
    }
    const nameCount = {};
    const filesToZip = items.map(item => {
      const name = paramCase(item.title || item.name);
      nameCount[name] = (nameCount[name] || 0) + 1;
      return {
        name: `${name + (nameCount[name] > 1 ? '-' + (nameCount[name] - 1) : '')}.json`,
        lastModified: new Date(),
        input: getJsonFromItem(item)
      };
    });
    return (0,external_wp_blob_namespaceObject.downloadBlob)((0,external_wp_i18n_namespaceObject.__)('patterns-export') + '.zip', await A(filesToZip).blob(), 'application/zip');
  }
};

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-actions/actions.js
/**
 * WordPress dependencies
 */











/**
 * Internal dependencies
 */







// Patterns.


const {
  PATTERN_TYPES: actions_PATTERN_TYPES,
  CreatePatternModalContents,
  useDuplicatePatternProps
} = unlock(external_wp_patterns_namespaceObject.privateApis);

/**
 * Check if a template is removable.
 *
 * @param {Object} template The template entity to check.
 * @return {boolean} Whether the template is removable.
 */
function isTemplateRemovable(template) {
  if (!template) {
    return false;
  }
  // In patterns list page we map the templates parts to a different object
  // than the one returned from the endpoint. This is why we need to check for
  // two props whether is custom or has a theme file.
  return [template.source, template.templatePart?.source].includes(TEMPLATE_ORIGINS.custom) && !template.has_theme_file && !template.templatePart?.has_theme_file;
}
const canDeleteOrReset = item => {
  const isTemplatePart = item.type === TEMPLATE_PART_POST_TYPE;
  const isUserPattern = item.type === actions_PATTERN_TYPES.user;
  return isUserPattern || isTemplatePart && item.isCustom;
};
function getItemTitle(item) {
  if (typeof item.title === 'string') {
    return (0,external_wp_htmlEntities_namespaceObject.decodeEntities)(item.title);
  }
  return (0,external_wp_htmlEntities_namespaceObject.decodeEntities)(item.title?.rendered || '');
}

// This action is used for templates, patterns and template parts.
// Every other post type uses the similar `trashPostAction` which
// moves the post to trash.
const deletePostAction = {
  id: 'delete-post',
  label: (0,external_wp_i18n_namespaceObject.__)('Delete'),
  isPrimary: true,
  icon: library_trash,
  isEligible(post) {
    if ([TEMPLATE_POST_TYPE, TEMPLATE_PART_POST_TYPE].includes(post.type)) {
      return isTemplateRemovable(post);
    }
    // We can only remove user patterns.
    return post.type === actions_PATTERN_TYPES.user;
  },
  supportsBulk: true,
  hideModalHeader: true,
  RenderModal: ({
    items,
    closeModal,
    onActionStart,
    onActionPerformed
  }) => {
    const [isBusy, setIsBusy] = (0,external_wp_element_namespaceObject.useState)(false);
    const {
      removeTemplates
    } = unlock((0,external_wp_data_namespaceObject.useDispatch)(store_store));
    return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.__experimentalVStack, {
      spacing: "5",
      children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.__experimentalText, {
        children: items.length > 1 ? (0,external_wp_i18n_namespaceObject.sprintf)(
        // translators: %d: number of items to delete.
        (0,external_wp_i18n_namespaceObject._n)('Delete %d item?', 'Delete %d items?', items.length), items.length) : (0,external_wp_i18n_namespaceObject.sprintf)(
        // translators: %s: The template or template part's titles
        (0,external_wp_i18n_namespaceObject.__)('Delete "%s"?'), getItemTitle(items[0]))
      }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.__experimentalHStack, {
        justify: "right",
        children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
          variant: "tertiary",
          onClick: closeModal,
          disabled: isBusy,
          __experimentalIsFocusable: true,
          children: (0,external_wp_i18n_namespaceObject.__)('Cancel')
        }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
          variant: "primary",
          onClick: async () => {
            setIsBusy(true);
            if (onActionStart) {
              onActionStart(items);
            }
            await removeTemplates(items, {
              allowUndo: false
            });
            onActionPerformed?.(items);
            setIsBusy(false);
            closeModal();
          },
          isBusy: isBusy,
          disabled: isBusy,
          __experimentalIsFocusable: true,
          children: (0,external_wp_i18n_namespaceObject.__)('Delete')
        })]
      })]
    });
  }
};
const trashPostAction = {
  id: 'move-to-trash',
  label: (0,external_wp_i18n_namespaceObject.__)('Move to Trash'),
  isPrimary: true,
  icon: library_trash,
  isEligible(item) {
    return !['auto-draft', 'trash'].includes(item.status);
  },
  supportsBulk: true,
  hideModalHeader: true,
  RenderModal: ({
    items,
    closeModal,
    onActionStart,
    onActionPerformed
  }) => {
    const [isBusy, setIsBusy] = (0,external_wp_element_namespaceObject.useState)(false);
    const {
      createSuccessNotice,
      createErrorNotice
    } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_notices_namespaceObject.store);
    const {
      deleteEntityRecord
    } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_coreData_namespaceObject.store);
    return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.__experimentalVStack, {
      spacing: "5",
      children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.__experimentalText, {
        children: items.length === 1 ? (0,external_wp_i18n_namespaceObject.sprintf)(
        // translators: %s: The item's title.
        (0,external_wp_i18n_namespaceObject.__)('Are you sure you want to move to trash "%s"?'), getItemTitle(items[0])) : (0,external_wp_i18n_namespaceObject.sprintf)(
        // translators: %d: The number of items (2 or more).
        (0,external_wp_i18n_namespaceObject._n)('Are you sure you want to move to trash %d item?', 'Are you sure you want to move to trash %d items?', items.length), items.length)
      }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.__experimentalHStack, {
        justify: "right",
        children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
          variant: "tertiary",
          onClick: closeModal,
          disabled: isBusy,
          __experimentalIsFocusable: true,
          children: (0,external_wp_i18n_namespaceObject.__)('Cancel')
        }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
          variant: "primary",
          onClick: async () => {
            setIsBusy(true);
            if (onActionStart) {
              onActionStart(items);
            }
            const promiseResult = await Promise.allSettled(items.map(item => deleteEntityRecord('postType', item.type, item.id, {}, {
              throwOnError: true
            })));
            // If all the promises were fulfilled with success.
            if (promiseResult.every(({
              status
            }) => status === 'fulfilled')) {
              let successMessage;
              if (promiseResult.length === 1) {
                successMessage = (0,external_wp_i18n_namespaceObject.sprintf)( /* translators: The item's title. */
                (0,external_wp_i18n_namespaceObject.__)('"%s" moved to trash.'), getItemTitle(items[0]));
              } else if (items[0].type === 'page') {
                successMessage = (0,external_wp_i18n_namespaceObject.sprintf)( /* translators: The number of items. */
                (0,external_wp_i18n_namespaceObject.__)('%s items moved to trash.'), items.length);
              } else {
                successMessage = (0,external_wp_i18n_namespaceObject.sprintf)( /* translators: The number of posts. */
                (0,external_wp_i18n_namespaceObject.__)('%s items move to trash.'), items.length);
              }
              createSuccessNotice(successMessage, {
                type: 'snackbar',
                id: 'move-to-trash-action'
              });
            } else {
              // If there was at least one failure.
              let errorMessage;
              // If we were trying to delete a single item.
              if (promiseResult.length === 1) {
                if (promiseResult[0].reason?.message) {
                  errorMessage = promiseResult[0].reason.message;
                } else {
                  errorMessage = (0,external_wp_i18n_namespaceObject.__)('An error occurred while moving to trash the item.');
                }
                // If we were trying to delete multiple items.
              } else {
                const errorMessages = new Set();
                const failedPromises = promiseResult.filter(({
                  status
                }) => status === 'rejected');
                for (const failedPromise of failedPromises) {
                  if (failedPromise.reason?.message) {
                    errorMessages.add(failedPromise.reason.message);
                  }
                }
                if (errorMessages.size === 0) {
                  errorMessage = (0,external_wp_i18n_namespaceObject.__)('An error occurred while moving to trash the items.');
                } else if (errorMessages.size === 1) {
                  errorMessage = (0,external_wp_i18n_namespaceObject.sprintf)( /* translators: %s: an error message */
                  (0,external_wp_i18n_namespaceObject.__)('An error occurred while moving to trash the item: %s'), [...errorMessages][0]);
                } else {
                  errorMessage = (0,external_wp_i18n_namespaceObject.sprintf)( /* translators: %s: a list of comma separated error messages */
                  (0,external_wp_i18n_namespaceObject.__)('Some errors occurred while moving to trash the items: %s'), [...errorMessages].join(','));
                }
              }
              createErrorNotice(errorMessage, {
                type: 'snackbar'
              });
            }
            if (onActionPerformed) {
              onActionPerformed(items);
            }
            setIsBusy(false);
            closeModal();
          },
          isBusy: isBusy,
          disabled: isBusy,
          __experimentalIsFocusable: true,
          children: (0,external_wp_i18n_namespaceObject.__)('Trash')
        })]
      })]
    });
  }
};
function usePermanentlyDeletePostAction() {
  const {
    createSuccessNotice,
    createErrorNotice
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_notices_namespaceObject.store);
  const {
    deleteEntityRecord
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_coreData_namespaceObject.store);
  return (0,external_wp_element_namespaceObject.useMemo)(() => ({
    id: 'permanently-delete',
    label: (0,external_wp_i18n_namespaceObject.__)('Permanently delete'),
    supportsBulk: true,
    isEligible({
      status
    }) {
      return status === 'trash';
    },
    async callback(posts, onActionPerformed) {
      const promiseResult = await Promise.allSettled(posts.map(post => {
        return deleteEntityRecord('postType', post.type, post.id, {
          force: true
        }, {
          throwOnError: true
        });
      }));
      // If all the promises were fulfilled with success.
      if (promiseResult.every(({
        status
      }) => status === 'fulfilled')) {
        let successMessage;
        if (promiseResult.length === 1) {
          successMessage = (0,external_wp_i18n_namespaceObject.sprintf)( /* translators: The posts's title. */
          (0,external_wp_i18n_namespaceObject.__)('"%s" permanently deleted.'), getItemTitle(posts[0]));
        } else {
          successMessage = (0,external_wp_i18n_namespaceObject.__)('The posts were permanently deleted.');
        }
        createSuccessNotice(successMessage, {
          type: 'snackbar',
          id: 'permanently-delete-post-action'
        });
        if (onActionPerformed) {
          onActionPerformed(posts);
        }
      } else {
        // If there was at lease one failure.
        let errorMessage;
        // If we were trying to permanently delete a single post.
        if (promiseResult.length === 1) {
          if (promiseResult[0].reason?.message) {
            errorMessage = promiseResult[0].reason.message;
          } else {
            errorMessage = (0,external_wp_i18n_namespaceObject.__)('An error occurred while permanently deleting the post.');
          }
          // If we were trying to permanently delete multiple posts
        } else {
          const errorMessages = new Set();
          const failedPromises = promiseResult.filter(({
            status
          }) => status === 'rejected');
          for (const failedPromise of failedPromises) {
            if (failedPromise.reason?.message) {
              errorMessages.add(failedPromise.reason.message);
            }
          }
          if (errorMessages.size === 0) {
            errorMessage = (0,external_wp_i18n_namespaceObject.__)('An error occurred while permanently deleting the posts.');
          } else if (errorMessages.size === 1) {
            errorMessage = (0,external_wp_i18n_namespaceObject.sprintf)( /* translators: %s: an error message */
            (0,external_wp_i18n_namespaceObject.__)('An error occurred while permanently deleting the posts: %s'), [...errorMessages][0]);
          } else {
            errorMessage = (0,external_wp_i18n_namespaceObject.sprintf)( /* translators: %s: a list of comma separated error messages */
            (0,external_wp_i18n_namespaceObject.__)('Some errors occurred while permanently deleting the posts: %s'), [...errorMessages].join(','));
          }
        }
        createErrorNotice(errorMessage, {
          type: 'snackbar'
        });
      }
    }
  }), [createSuccessNotice, createErrorNotice, deleteEntityRecord]);
}
function useRestorePostAction() {
  const {
    createSuccessNotice,
    createErrorNotice
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_notices_namespaceObject.store);
  const {
    editEntityRecord,
    saveEditedEntityRecord
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_coreData_namespaceObject.store);
  return (0,external_wp_element_namespaceObject.useMemo)(() => ({
    id: 'restore',
    label: (0,external_wp_i18n_namespaceObject.__)('Restore'),
    isPrimary: true,
    icon: library_backup,
    supportsBulk: true,
    isEligible({
      status
    }) {
      return status === 'trash';
    },
    async callback(posts, onActionPerformed) {
      await Promise.allSettled(posts.map(post => {
        return editEntityRecord('postType', post.type, post.id, {
          status: 'draft'
        });
      }));
      const promiseResult = await Promise.allSettled(posts.map(post => {
        return saveEditedEntityRecord('postType', post.type, post.id, {
          throwOnError: true
        });
      }));
      if (promiseResult.every(({
        status
      }) => status === 'fulfilled')) {
        let successMessage;
        if (posts.length === 1) {
          successMessage = (0,external_wp_i18n_namespaceObject.sprintf)( /* translators: The number of posts. */
          (0,external_wp_i18n_namespaceObject.__)('"%s" has been restored.'), getItemTitle(posts[0]));
        } else if (posts[0].type === 'page') {
          successMessage = (0,external_wp_i18n_namespaceObject.sprintf)( /* translators: The number of posts. */
          (0,external_wp_i18n_namespaceObject.__)('%d pages have been restored.'), posts.length);
        } else {
          successMessage = (0,external_wp_i18n_namespaceObject.sprintf)( /* translators: The number of posts. */
          (0,external_wp_i18n_namespaceObject.__)('%d posts have been restored.'), posts.length);
        }
        createSuccessNotice(successMessage, {
          type: 'snackbar',
          id: 'restore-post-action'
        });
        if (onActionPerformed) {
          onActionPerformed(posts);
        }
      } else {
        // If there was at lease one failure.
        let errorMessage;
        // If we were trying to move a single post to the trash.
        if (promiseResult.length === 1) {
          if (promiseResult[0].reason?.message) {
            errorMessage = promiseResult[0].reason.message;
          } else {
            errorMessage = (0,external_wp_i18n_namespaceObject.__)('An error occurred while restoring the post.');
          }
          // If we were trying to move multiple posts to the trash
        } else {
          const errorMessages = new Set();
          const failedPromises = promiseResult.filter(({
            status
          }) => status === 'rejected');
          for (const failedPromise of failedPromises) {
            if (failedPromise.reason?.message) {
              errorMessages.add(failedPromise.reason.message);
            }
          }
          if (errorMessages.size === 0) {
            errorMessage = (0,external_wp_i18n_namespaceObject.__)('An error occurred while restoring the posts.');
          } else if (errorMessages.size === 1) {
            errorMessage = (0,external_wp_i18n_namespaceObject.sprintf)( /* translators: %s: an error message */
            (0,external_wp_i18n_namespaceObject.__)('An error occurred while restoring the posts: %s'), [...errorMessages][0]);
          } else {
            errorMessage = (0,external_wp_i18n_namespaceObject.sprintf)( /* translators: %s: a list of comma separated error messages */
            (0,external_wp_i18n_namespaceObject.__)('Some errors occurred while restoring the posts: %s'), [...errorMessages].join(','));
          }
        }
        createErrorNotice(errorMessage, {
          type: 'snackbar'
        });
      }
    }
  }), [createSuccessNotice, createErrorNotice, editEntityRecord, saveEditedEntityRecord]);
}
const viewPostAction = {
  id: 'view-post',
  label: (0,external_wp_i18n_namespaceObject.__)('View'),
  isPrimary: true,
  icon: library_external,
  isEligible(post) {
    return post.status !== 'trash';
  },
  callback(posts, onActionPerformed) {
    const post = posts[0];
    window.open(post.link, '_blank');
    if (onActionPerformed) {
      onActionPerformed(posts);
    }
  }
};
const postRevisionsAction = {
  id: 'view-post-revisions',
  label(items) {
    var _items$0$_links$versi;
    const revisionsCount = (_items$0$_links$versi = items[0]._links?.['version-history']?.[0]?.count) !== null && _items$0$_links$versi !== void 0 ? _items$0$_links$versi : 0;
    return (0,external_wp_i18n_namespaceObject.sprintf)( /* translators: %s: number of revisions */
    (0,external_wp_i18n_namespaceObject.__)('View revisions (%s)'), revisionsCount);
  },
  isEligible: post => {
    var _post$_links$predeces, _post$_links$version;
    if (post.status === 'trash') {
      return false;
    }
    const lastRevisionId = (_post$_links$predeces = post?._links?.['predecessor-version']?.[0]?.id) !== null && _post$_links$predeces !== void 0 ? _post$_links$predeces : null;
    const revisionsCount = (_post$_links$version = post?._links?.['version-history']?.[0]?.count) !== null && _post$_links$version !== void 0 ? _post$_links$version : 0;
    return lastRevisionId && revisionsCount > 1;
  },
  callback(posts, onActionPerformed) {
    const post = posts[0];
    const href = (0,external_wp_url_namespaceObject.addQueryArgs)('revision.php', {
      revision: post?._links?.['predecessor-version']?.[0]?.id
    });
    document.location.href = href;
    if (onActionPerformed) {
      onActionPerformed(posts);
    }
  }
};
const renamePostAction = {
  id: 'rename-post',
  label: (0,external_wp_i18n_namespaceObject.__)('Rename'),
  isEligible(post) {
    if (post.status === 'trash') {
      return false;
    }
    // Templates, template parts and patterns have special checks for renaming.
    if (![TEMPLATE_POST_TYPE, TEMPLATE_PART_POST_TYPE, ...Object.values(actions_PATTERN_TYPES)].includes(post.type)) {
      return true;
    }
    // In the case of templates, we can only rename custom templates.
    if (post.type === TEMPLATE_POST_TYPE) {
      return isTemplateRemovable(post) && post.is_custom;
    }
    // Make necessary checks for template parts and patterns.
    const isTemplatePart = post.type === TEMPLATE_PART_POST_TYPE;
    const isUserPattern = post.type === actions_PATTERN_TYPES.user;
    // In patterns list page we map the templates parts to a different object
    // than the one returned from the endpoint. This is why we need to check for
    // two props whether is custom or has a theme file.
    const isCustomPattern = isUserPattern || isTemplatePart && (post.isCustom || post.source === TEMPLATE_ORIGINS.custom);
    const hasThemeFile = isTemplatePart && (post.templatePart?.has_theme_file || post.has_theme_file);
    return isCustomPattern && !hasThemeFile;
  },
  RenderModal: ({
    items,
    closeModal,
    onActionPerformed
  }) => {
    const [item] = items;
    const originalTitle = (0,external_wp_htmlEntities_namespaceObject.decodeEntities)(typeof item.title === 'string' ? item.title : item.title.rendered);
    const [title, setTitle] = (0,external_wp_element_namespaceObject.useState)(() => originalTitle);
    const {
      editEntityRecord,
      saveEditedEntityRecord
    } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_coreData_namespaceObject.store);
    const {
      createSuccessNotice,
      createErrorNotice
    } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_notices_namespaceObject.store);
    async function onRename(event) {
      event.preventDefault();
      try {
        await editEntityRecord('postType', item.type, item.id, {
          title
        });
        // Update state before saving rerenders the list.
        setTitle('');
        closeModal();
        // Persist edited entity.
        await saveEditedEntityRecord('postType', item.type, item.id, {
          throwOnError: true
        });
        createSuccessNotice((0,external_wp_i18n_namespaceObject.__)('Name updated'), {
          type: 'snackbar'
        });
        onActionPerformed?.(items);
      } catch (error) {
        const errorMessage = error.message && error.code !== 'unknown_error' ? error.message : (0,external_wp_i18n_namespaceObject.__)('An error occurred while updating the name');
        createErrorNotice(errorMessage, {
          type: 'snackbar'
        });
      }
    }
    return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("form", {
      onSubmit: onRename,
      children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.__experimentalVStack, {
        spacing: "5",
        children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.TextControl, {
          __nextHasNoMarginBottom: true,
          __next40pxDefaultSize: true,
          label: (0,external_wp_i18n_namespaceObject.__)('Name'),
          value: title,
          onChange: setTitle,
          required: true
        }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.__experimentalHStack, {
          justify: "right",
          children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
            __next40pxDefaultSize: true,
            variant: "tertiary",
            onClick: () => {
              closeModal();
            },
            children: (0,external_wp_i18n_namespaceObject.__)('Cancel')
          }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
            __next40pxDefaultSize: true,
            variant: "primary",
            type: "submit",
            children: (0,external_wp_i18n_namespaceObject.__)('Save')
          })]
        })]
      })
    });
  }
};
const duplicatePostAction = {
  id: 'duplicate-post',
  label: (0,external_wp_i18n_namespaceObject._x)('Duplicate', 'action label'),
  isEligible({
    status
  }) {
    return status !== 'trash';
  },
  RenderModal: ({
    items,
    closeModal,
    onActionPerformed
  }) => {
    const [item] = items;
    const [isCreatingPage, setIsCreatingPage] = (0,external_wp_element_namespaceObject.useState)(false);
    const [title, setTitle] = (0,external_wp_element_namespaceObject.useState)((0,external_wp_i18n_namespaceObject.sprintf)( /* translators: %s: Existing item title */
    (0,external_wp_i18n_namespaceObject.__)('%s (Copy)'), getItemTitle(item)));
    const {
      saveEntityRecord
    } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_coreData_namespaceObject.store);
    const {
      createSuccessNotice,
      createErrorNotice
    } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_notices_namespaceObject.store);
    async function createPage(event) {
      event.preventDefault();
      if (isCreatingPage) {
        return;
      }
      setIsCreatingPage(true);
      try {
        const newItem = await saveEntityRecord('postType', item.type, {
          status: 'draft',
          title,
          slug: title || (0,external_wp_i18n_namespaceObject.__)('No title'),
          author: item.author,
          comment_status: item.comment_status,
          content: typeof item.content === 'string' ? item.content : item.content.raw,
          excerpt: item.excerpt.raw,
          meta: item.meta,
          parent: item.parent,
          password: item.password,
          template: item.template,
          format: item.format,
          featured_media: item.featured_media,
          menu_order: item.menu_order,
          ping_status: item.ping_status,
          categories: item.categories,
          tags: item.tags
        }, {
          throwOnError: true
        });
        createSuccessNotice((0,external_wp_i18n_namespaceObject.sprintf)(
        // translators: %s: Title of the created template e.g: "Category".
        (0,external_wp_i18n_namespaceObject.__)('"%s" successfully created.'), newItem.title?.rendered || title), {
          id: 'duplicate-post-action',
          type: 'snackbar'
        });
        if (onActionPerformed) {
          onActionPerformed([newItem]);
        }
      } catch (error) {
        const errorMessage = error.message && error.code !== 'unknown_error' ? error.message : (0,external_wp_i18n_namespaceObject.__)('An error occurred while duplicating the page.');
        createErrorNotice(errorMessage, {
          type: 'snackbar'
        });
      } finally {
        setIsCreatingPage(false);
        closeModal();
      }
    }
    return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("form", {
      onSubmit: createPage,
      children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.__experimentalVStack, {
        spacing: 3,
        children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.TextControl, {
          label: (0,external_wp_i18n_namespaceObject.__)('Title'),
          onChange: setTitle,
          placeholder: (0,external_wp_i18n_namespaceObject.__)('No title'),
          value: title
        }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.__experimentalHStack, {
          spacing: 2,
          justify: "end",
          children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
            variant: "tertiary",
            onClick: closeModal,
            children: (0,external_wp_i18n_namespaceObject.__)('Cancel')
          }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
            variant: "primary",
            type: "submit",
            isBusy: isCreatingPage,
            "aria-disabled": isCreatingPage,
            children: (0,external_wp_i18n_namespaceObject._x)('Duplicate', 'action label')
          })]
        })]
      })
    });
  }
};
const isTemplatePartRevertable = item => {
  if (!item) {
    return false;
  }
  const hasThemeFile = item.templatePart?.has_theme_file;
  return canDeleteOrReset(item) && hasThemeFile;
};
const resetTemplateAction = {
  id: 'reset-template',
  label: (0,external_wp_i18n_namespaceObject.__)('Reset'),
  isEligible: item => {
    return item.type === TEMPLATE_PART_POST_TYPE ? isTemplatePartRevertable(item) : isTemplateRevertable(item);
  },
  icon: library_backup,
  supportsBulk: true,
  hideModalHeader: true,
  RenderModal: ({
    items,
    closeModal,
    onActionStart,
    onActionPerformed
  }) => {
    const [isBusy, setIsBusy] = (0,external_wp_element_namespaceObject.useState)(false);
    const {
      revertTemplate,
      removeTemplates
    } = unlock((0,external_wp_data_namespaceObject.useDispatch)(store_store));
    const {
      saveEditedEntityRecord
    } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_coreData_namespaceObject.store);
    const {
      createSuccessNotice,
      createErrorNotice
    } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_notices_namespaceObject.store);
    const onConfirm = async () => {
      try {
        if (items[0].type === TEMPLATE_PART_POST_TYPE) {
          await removeTemplates(items);
        } else {
          for (const template of items) {
            if (template.type === TEMPLATE_POST_TYPE) {
              await revertTemplate(template, {
                allowUndo: false
              });
              await saveEditedEntityRecord('postType', template.type, template.id);
            }
          }
          createSuccessNotice(items.length > 1 ? (0,external_wp_i18n_namespaceObject.sprintf)( /* translators: The number of items. */
          (0,external_wp_i18n_namespaceObject.__)('%s items reset.'), items.length) : (0,external_wp_i18n_namespaceObject.sprintf)( /* translators: The template/part's name. */
          (0,external_wp_i18n_namespaceObject.__)('"%s" reset.'), (0,external_wp_htmlEntities_namespaceObject.decodeEntities)(getItemTitle(items[0]))), {
            type: 'snackbar',
            id: 'revert-template-action'
          });
        }
      } catch (error) {
        let fallbackErrorMessage;
        if (items[0].type === TEMPLATE_POST_TYPE) {
          fallbackErrorMessage = items.length === 1 ? (0,external_wp_i18n_namespaceObject.__)('An error occurred while reverting the template.') : (0,external_wp_i18n_namespaceObject.__)('An error occurred while reverting the templates.');
        } else {
          fallbackErrorMessage = items.length === 1 ? (0,external_wp_i18n_namespaceObject.__)('An error occurred while reverting the template part.') : (0,external_wp_i18n_namespaceObject.__)('An error occurred while reverting the template parts.');
        }
        const errorMessage = error.message && error.code !== 'unknown_error' ? error.message : fallbackErrorMessage;
        createErrorNotice(errorMessage, {
          type: 'snackbar'
        });
      }
    };
    return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.__experimentalVStack, {
      spacing: "5",
      children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.__experimentalText, {
        children: (0,external_wp_i18n_namespaceObject.__)('Reset to default and clear all customizations?')
      }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.__experimentalHStack, {
        justify: "right",
        children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
          variant: "tertiary",
          onClick: closeModal,
          disabled: isBusy,
          __experimentalIsFocusable: true,
          children: (0,external_wp_i18n_namespaceObject.__)('Cancel')
        }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
          variant: "primary",
          onClick: async () => {
            setIsBusy(true);
            if (onActionStart) {
              onActionStart(items);
            }
            await onConfirm(items);
            onActionPerformed?.(items);
            setIsBusy(false);
            closeModal();
          },
          isBusy: isBusy,
          disabled: isBusy,
          __experimentalIsFocusable: true,
          children: (0,external_wp_i18n_namespaceObject.__)('Reset')
        })]
      })]
    });
  }
};
const duplicatePatternAction = {
  id: 'duplicate-pattern',
  label: (0,external_wp_i18n_namespaceObject._x)('Duplicate', 'action label'),
  isEligible: item => item.type !== TEMPLATE_PART_POST_TYPE,
  modalHeader: (0,external_wp_i18n_namespaceObject._x)('Duplicate pattern', 'action label'),
  RenderModal: ({
    items,
    closeModal
  }) => {
    const [item] = items;
    const isThemePattern = item.type === actions_PATTERN_TYPES.theme;
    const duplicatedProps = useDuplicatePatternProps({
      pattern: isThemePattern || !item.patternPost ? item : item.patternPost,
      onSuccess: () => closeModal()
    });
    return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(CreatePatternModalContents, {
      onClose: closeModal,
      confirmLabel: (0,external_wp_i18n_namespaceObject._x)('Duplicate', 'action label'),
      ...duplicatedProps
    });
  }
};
const duplicateTemplatePartAction = {
  id: 'duplicate-template-part',
  label: (0,external_wp_i18n_namespaceObject._x)('Duplicate', 'action label'),
  isEligible: item => item.type === TEMPLATE_PART_POST_TYPE,
  modalHeader: (0,external_wp_i18n_namespaceObject._x)('Duplicate template part', 'action label'),
  RenderModal: ({
    items,
    closeModal
  }) => {
    const [item] = items;
    const {
      createSuccessNotice
    } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_notices_namespaceObject.store);
    function onTemplatePartSuccess() {
      createSuccessNotice((0,external_wp_i18n_namespaceObject.sprintf)(
      // translators: %s: The new template part's title e.g. 'Call to action (copy)'.
      (0,external_wp_i18n_namespaceObject.__)('"%s" duplicated.'), item.title), {
        type: 'snackbar',
        id: 'edit-site-patterns-success'
      });
      closeModal();
    }
    return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(CreateTemplatePartModalContents, {
      blocks: item.blocks,
      defaultArea: item.templatePart?.area || item.area,
      defaultTitle: (0,external_wp_i18n_namespaceObject.sprintf)( /* translators: %s: Existing template part title */
      (0,external_wp_i18n_namespaceObject.__)('%s (Copy)'), item.title),
      onCreate: onTemplatePartSuccess,
      onError: closeModal,
      confirmLabel: (0,external_wp_i18n_namespaceObject._x)('Duplicate', 'action label')
    });
  }
};
function usePostActions(postType, onActionPerformed) {
  const {
    postTypeObject
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getPostType
    } = select(external_wp_coreData_namespaceObject.store);
    return {
      postTypeObject: getPostType(postType)
    };
  }, [postType]);
  const permanentlyDeletePostAction = usePermanentlyDeletePostAction();
  const restorePostAction = useRestorePostAction();
  const isTemplateOrTemplatePart = [TEMPLATE_POST_TYPE, TEMPLATE_PART_POST_TYPE].includes(postType);
  const isPattern = postType === PATTERN_POST_TYPE;
  const isLoaded = !!postTypeObject;
  const supportsRevisions = !!postTypeObject?.supports?.revisions;
  return (0,external_wp_element_namespaceObject.useMemo)(() => {
    if (!isLoaded) {
      return [];
    }
    const actions = [postTypeObject?.viewable && viewPostAction, supportsRevisions && postRevisionsAction,  false ? 0 : false, isTemplateOrTemplatePart && duplicateTemplatePartAction, isPattern && duplicatePatternAction, renamePostAction, isPattern && exportPatternAsJSONAction, isTemplateOrTemplatePart ? resetTemplateAction : restorePostAction, isTemplateOrTemplatePart || isPattern ? deletePostAction : trashPostAction, !isTemplateOrTemplatePart && permanentlyDeletePostAction].filter(Boolean);
    if (onActionPerformed) {
      for (let i = 0; i < actions.length; ++i) {
        if (actions[i].callback) {
          const existingCallback = actions[i].callback;
          actions[i] = {
            ...actions[i],
            callback: (items, _onActionPerformed) => {
              existingCallback(items, _items => {
                if (_onActionPerformed) {
                  _onActionPerformed(_items);
                }
                onActionPerformed(actions[i].id, _items);
              });
            }
          };
        }
        if (actions[i].RenderModal) {
          const ExistingRenderModal = actions[i].RenderModal;
          actions[i] = {
            ...actions[i],
            RenderModal: props => {
              return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(ExistingRenderModal, {
                ...props,
                onActionPerformed: _items => {
                  if (props.onActionPerformed) {
                    props.onActionPerformed(_items);
                  }
                  onActionPerformed(actions[i].id, _items);
                }
              });
            }
          };
        }
      }
    }
    return actions;
  }, [isTemplateOrTemplatePart, isPattern, postTypeObject?.viewable, permanentlyDeletePostAction, restorePostAction, onActionPerformed, isLoaded, supportsRevisions]);
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/pattern-overrides-panel/index.js
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



const {
  OverridesPanel
} = unlock(external_wp_patterns_namespaceObject.privateApis);
function PatternOverridesPanel() {
  const supportsPatternOverridesPanel = (0,external_wp_data_namespaceObject.useSelect)(select => select(store_store).getCurrentPostType() === 'wp_block', []);
  if (!supportsPatternOverridesPanel) {
    return null;
  }
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(OverridesPanel, {});
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-actions/index.js
/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */






const {
  DropdownMenuV2: DropdownMenu,
  DropdownMenuGroupV2: DropdownMenuGroup,
  DropdownMenuItemV2: DropdownMenuItem,
  DropdownMenuItemLabelV2: DropdownMenuItemLabel,
  kebabCase
} = unlock(external_wp_components_namespaceObject.privateApis);
function PostActions({
  onActionPerformed,
  buttonProps
}) {
  const [isActionsMenuOpen, setIsActionsMenuOpen] = (0,external_wp_element_namespaceObject.useState)(false);
  const {
    item,
    postType
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getCurrentPostType,
      getCurrentPostId
    } = select(store_store);
    const {
      getEditedEntityRecord
    } = select(external_wp_coreData_namespaceObject.store);
    const _postType = getCurrentPostType();
    return {
      item: getEditedEntityRecord('postType', _postType, getCurrentPostId()),
      postType: _postType
    };
  }, []);
  const allActions = usePostActions(postType, onActionPerformed);
  const actions = (0,external_wp_element_namespaceObject.useMemo)(() => {
    return allActions.filter(action => {
      return !action.isEligible || action.isEligible(item);
    });
  }, [allActions, item]);
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(DropdownMenu, {
    open: isActionsMenuOpen,
    trigger: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
      size: "small",
      icon: more_vertical,
      label: (0,external_wp_i18n_namespaceObject.__)('Actions'),
      disabled: !actions.length,
      __experimentalIsFocusable: true,
      className: "editor-all-actions-button",
      onClick: () => setIsActionsMenuOpen(!isActionsMenuOpen),
      ...buttonProps
    }),
    onOpenChange: setIsActionsMenuOpen,
    placement: "bottom-end",
    children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(ActionsDropdownMenuGroup, {
      actions: actions,
      item: item,
      onClose: () => {
        setIsActionsMenuOpen(false);
      }
    })
  });
}

// From now on all the functions on this file are copied as from the dataviews packages,
// The editor packages should not be using the dataviews packages directly,
// and the dataviews package should not be using the editor packages directly,
// so duplicating the code here seems like the least bad option.

// Copied as is from packages/dataviews/src/item-actions.js
function DropdownMenuItemTrigger({
  action,
  onClick,
  items
}) {
  const label = typeof action.label === 'string' ? action.label : action.label(items);
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(DropdownMenuItem, {
    onClick: onClick,
    hideOnClick: !action.RenderModal,
    children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(DropdownMenuItemLabel, {
      children: label
    })
  });
}

// Copied as is from packages/dataviews/src/item-actions.js
// With an added onClose prop.
function ActionWithModal({
  action,
  item,
  ActionTrigger,
  onClose
}) {
  const [isModalOpen, setIsModalOpen] = (0,external_wp_element_namespaceObject.useState)(false);
  const actionTriggerProps = {
    action,
    onClick: () => setIsModalOpen(true),
    items: [item]
  };
  const {
    RenderModal,
    hideModalHeader
  } = action;
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
    children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(ActionTrigger, {
      ...actionTriggerProps
    }), isModalOpen && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Modal, {
      title: action.modalHeader || action.label,
      __experimentalHideHeader: !!hideModalHeader,
      onRequestClose: () => {
        setIsModalOpen(false);
      },
      overlayClassName: `editor-action-modal editor-action-modal__${kebabCase(action.id)}`,
      children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(RenderModal, {
        items: [item],
        closeModal: () => {
          setIsModalOpen(false);
          onClose();
        }
      })
    })]
  });
}

// Copied as is from packages/dataviews/src/item-actions.js
// With an added onClose prop.
function ActionsDropdownMenuGroup({
  actions,
  item,
  onClose
}) {
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(DropdownMenuGroup, {
    children: actions.map(action => {
      if (action.RenderModal) {
        return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(ActionWithModal, {
          action: action,
          item: item,
          ActionTrigger: DropdownMenuItemTrigger,
          onClose: onClose
        }, action.id);
      }
      return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(DropdownMenuItemTrigger, {
        action: action,
        onClick: () => action.callback([item]),
        items: [item]
      }, action.id);
    })
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-card-panel/index.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */





function PostCardPanel({
  actions
}) {
  const {
    isFrontPage,
    isPostsPage,
    title,
    icon,
    isSync
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getEditedPostAttribute,
      getCurrentPostType,
      getCurrentPostId,
      __experimentalGetTemplateInfo
    } = select(store_store);
    const {
      getEditedEntityRecord
    } = select(external_wp_coreData_namespaceObject.store);
    const siteSettings = getEditedEntityRecord('root', 'site');
    const _type = getCurrentPostType();
    const _id = getCurrentPostId();
    const _record = getEditedEntityRecord('postType', _type, _id);
    const _templateInfo = [TEMPLATE_POST_TYPE, TEMPLATE_PART_POST_TYPE].includes(_type) && __experimentalGetTemplateInfo(_record);
    let _isSync = false;
    if (GLOBAL_POST_TYPES.includes(_type)) {
      if (PATTERN_POST_TYPE === _type) {
        // When the post is first created, the top level wp_pattern_sync_status is not set so get meta value instead.
        const currentSyncStatus = getEditedPostAttribute('meta')?.wp_pattern_sync_status === 'unsynced' ? 'unsynced' : getEditedPostAttribute('wp_pattern_sync_status');
        _isSync = currentSyncStatus !== 'unsynced';
      } else {
        _isSync = true;
      }
    }
    return {
      title: _templateInfo?.title || getEditedPostAttribute('title'),
      icon: unlock(select(store_store)).getPostIcon(_type, {
        area: _record?.area
      }),
      isSync: _isSync,
      isFrontPage: siteSettings?.page_on_front === _id,
      isPostsPage: siteSettings?.page_for_posts === _id
    };
  }, []);
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
    className: "editor-post-card-panel",
    children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.__experimentalHStack, {
      spacing: 2,
      className: "editor-post-card-panel__header",
      align: "flex-start",
      children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Icon, {
        className: dist_clsx('editor-post-card-panel__icon', {
          'is-sync': isSync
        }),
        icon: icon
      }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.__experimentalText, {
        numberOfLines: 2,
        truncate: true,
        className: "editor-post-card-panel__title",
        weight: 500,
        as: "h2",
        lineHeight: "20px",
        children: [title ? (0,external_wp_htmlEntities_namespaceObject.decodeEntities)(title) : (0,external_wp_i18n_namespaceObject.__)('No Title'), isFrontPage && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("span", {
          className: "editor-post-card-panel__title-badge",
          children: (0,external_wp_i18n_namespaceObject.__)('Front Page')
        }), isPostsPage && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("span", {
          className: "editor-post-card-panel__title-badge",
          children: (0,external_wp_i18n_namespaceObject.__)('Posts Page')
        })]
      }), actions]
    })
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-content-information/index.js
/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */



// Taken from packages/editor/src/components/time-to-read/index.js.

const post_content_information_AVERAGE_READING_RATE = 189;

// This component renders the wordcount and reading time for the post.
function PostContentInformation() {
  const {
    postContent
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getEditedPostAttribute,
      getCurrentPostType,
      getCurrentPostId
    } = select(store_store);
    const {
      getEntityRecord
    } = select(external_wp_coreData_namespaceObject.store);
    const siteSettings = getEntityRecord('root', 'site');
    const postType = getCurrentPostType();
    const _id = getCurrentPostId();
    const isPostsPage = +_id === siteSettings?.page_for_posts;
    const showPostContentInfo = !isPostsPage && ![TEMPLATE_POST_TYPE, TEMPLATE_PART_POST_TYPE].includes(postType);
    return {
      postContent: showPostContentInfo && getEditedPostAttribute('content')
    };
  }, []);

  /*
   * translators: If your word count is based on single characters (e.g. East Asian characters),
   * enter 'characters_excluding_spaces' or 'characters_including_spaces'. Otherwise, enter 'words'.
   * Do not translate into your own language.
   */
  const wordCountType = (0,external_wp_i18n_namespaceObject._x)('words', 'Word count type. Do not translate!');
  const wordsCounted = (0,external_wp_element_namespaceObject.useMemo)(() => postContent ? (0,external_wp_wordcount_namespaceObject.count)(postContent, wordCountType) : 0, [postContent, wordCountType]);
  if (!wordsCounted) {
    return null;
  }
  const readingTime = Math.round(wordsCounted / post_content_information_AVERAGE_READING_RATE);
  const wordsCountText = (0,external_wp_i18n_namespaceObject.sprintf)(
  // translators: %s: the number of words in the post.
  (0,external_wp_i18n_namespaceObject._n)('%s word', '%s words', wordsCounted), wordsCounted.toLocaleString());
  const minutesText = readingTime <= 1 ? (0,external_wp_i18n_namespaceObject.__)('1 minute') : (0,external_wp_i18n_namespaceObject.sprintf)(
  // translators: %s: the number of minutes to read the post.
  (0,external_wp_i18n_namespaceObject._n)('%s minute', '%s minutes', readingTime), readingTime.toLocaleString());
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
    className: "editor-post-content-information",
    children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.__experimentalText, {
      children: (0,external_wp_i18n_namespaceObject.sprintf)( /* translators: 1: How many words a post has. 2: the number of minutes to read the post (e.g. 130 words, 2 minutes read time.) */
      (0,external_wp_i18n_namespaceObject.__)('%1$s, %2$s read time.'), wordsCountText, minutesText)
    })
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-format/panel.js
/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */





/**
 * Renders the Post Author Panel component.
 *
 * @return {Component} The component to be rendered.
 */


function panel_PostFormat() {
  const {
    postFormat
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getEditedPostAttribute
    } = select(store_store);
    const _postFormat = getEditedPostAttribute('format');
    return {
      postFormat: _postFormat !== null && _postFormat !== void 0 ? _postFormat : 'standard'
    };
  }, []);
  const activeFormat = POST_FORMATS.find(format => format.id === postFormat);

  // Use internal state instead of a ref to make sure that the component
  // re-renders when the popover's anchor updates.
  const [popoverAnchor, setPopoverAnchor] = (0,external_wp_element_namespaceObject.useState)(null);
  // Memoize popoverProps to avoid returning a new object every time.
  const popoverProps = (0,external_wp_element_namespaceObject.useMemo)(() => ({
    // Anchor the popover to the middle of the entire row so that it doesn't
    // move around when the label changes.
    anchor: popoverAnchor,
    placement: 'left-start',
    offset: 36,
    shift: true
  }), [popoverAnchor]);
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(post_format_check, {
    children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(post_panel_row, {
      label: (0,external_wp_i18n_namespaceObject.__)('Format'),
      ref: setPopoverAnchor,
      children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Dropdown, {
        popoverProps: popoverProps,
        contentClassName: "editor-post-format__dialog",
        focusOnMount: true,
        renderToggle: ({
          isOpen,
          onToggle
        }) => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
          size: "compact",
          variant: "tertiary",
          "aria-expanded": isOpen,
          "aria-label": (0,external_wp_i18n_namespaceObject.sprintf)(
          // translators: %s: Current post format.
          (0,external_wp_i18n_namespaceObject.__)('Change format: %s'), activeFormat?.caption),
          onClick: onToggle,
          children: activeFormat?.caption
        }),
        renderContent: ({
          onClose
        }) => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("div", {
          className: "editor-post-format__dialog-content",
          children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_blockEditor_namespaceObject.__experimentalInspectorPopoverHeader, {
            title: (0,external_wp_i18n_namespaceObject.__)('Format'),
            onClose: onClose
          }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PostFormat, {})]
        })
      })
    })
  });
}
/* harmony default export */ const post_format_panel = (panel_PostFormat);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-last-edited-panel/index.js
/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


function PostLastEditedPanel() {
  const modified = (0,external_wp_data_namespaceObject.useSelect)(select => select(store_store).getEditedPostAttribute('modified'), []);
  const lastEditedText = modified && (0,external_wp_i18n_namespaceObject.sprintf)(
  // translators: %s: Human-readable time difference, e.g. "2 days ago".
  (0,external_wp_i18n_namespaceObject.__)('Last edited %s.'), (0,external_wp_date_namespaceObject.humanTimeDiff)(modified));
  if (!lastEditedText) {
    return null;
  }
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
    className: "editor-post-last-edited-panel",
    children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.__experimentalText, {
      children: lastEditedText
    })
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-panel-section/index.js
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */


function PostPanelSection({
  className,
  children
}) {
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.__experimentalVStack, {
    className: dist_clsx('editor-post-panel__section', className),
    children: children
  });
}
/* harmony default export */ const post_panel_section = (PostPanelSection);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-status/index.js
/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */







const labels = {
  'auto-draft': (0,external_wp_i18n_namespaceObject.__)('Draft'),
  draft: (0,external_wp_i18n_namespaceObject.__)('Draft'),
  pending: (0,external_wp_i18n_namespaceObject.__)('Pending'),
  private: (0,external_wp_i18n_namespaceObject.__)('Private'),
  future: (0,external_wp_i18n_namespaceObject.__)('Scheduled'),
  publish: (0,external_wp_i18n_namespaceObject.__)('Published')
};
const STATUS_OPTIONS = [{
  label: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
    children: [(0,external_wp_i18n_namespaceObject.__)('Draft'), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.__experimentalText, {
      variant: "muted",
      size: 12,
      children: (0,external_wp_i18n_namespaceObject.__)('Not ready to publish.')
    })]
  }),
  value: 'draft'
}, {
  label: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
    children: [(0,external_wp_i18n_namespaceObject.__)('Pending'), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.__experimentalText, {
      variant: "muted",
      size: 12,
      children: (0,external_wp_i18n_namespaceObject.__)('Waiting for review before publishing.')
    })]
  }),
  value: 'pending'
}, {
  label: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
    children: [(0,external_wp_i18n_namespaceObject.__)('Private'), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.__experimentalText, {
      variant: "muted",
      size: 12,
      children: (0,external_wp_i18n_namespaceObject.__)('Only visible to site admins and editors.')
    })]
  }),
  value: 'private'
}, {
  label: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
    children: [(0,external_wp_i18n_namespaceObject.__)('Scheduled'), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.__experimentalText, {
      variant: "muted",
      size: 12,
      children: (0,external_wp_i18n_namespaceObject.__)('Publish automatically on a chosen date.')
    })]
  }),
  value: 'future'
}, {
  label: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
    children: [(0,external_wp_i18n_namespaceObject.__)('Published'), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.__experimentalText, {
      variant: "muted",
      size: 12,
      children: (0,external_wp_i18n_namespaceObject.__)('Visible to everyone.')
    })]
  }),
  value: 'publish'
}];
const post_status_DESIGN_POST_TYPES = [TEMPLATE_POST_TYPE, TEMPLATE_PART_POST_TYPE, PATTERN_POST_TYPE, NAVIGATION_POST_TYPE];
function PostStatus() {
  const {
    status,
    date,
    password,
    postId,
    postType,
    canEdit
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    var _getCurrentPost$_link;
    const {
      getEditedPostAttribute,
      getCurrentPostId,
      getCurrentPostType,
      getCurrentPost
    } = select(store_store);
    return {
      status: getEditedPostAttribute('status'),
      date: getEditedPostAttribute('date'),
      password: getEditedPostAttribute('password'),
      postId: getCurrentPostId(),
      postType: getCurrentPostType(),
      canEdit: (_getCurrentPost$_link = getCurrentPost()._links?.['wp:action-publish']) !== null && _getCurrentPost$_link !== void 0 ? _getCurrentPost$_link : false
    };
  }, []);
  const [showPassword, setShowPassword] = (0,external_wp_element_namespaceObject.useState)(!!password);
  const passwordInputId = (0,external_wp_compose_namespaceObject.useInstanceId)(PostStatus, 'editor-change-status__password-input');
  const {
    editEntityRecord
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_coreData_namespaceObject.store);
  const [popoverAnchor, setPopoverAnchor] = (0,external_wp_element_namespaceObject.useState)(null);
  // Memoize popoverProps to avoid returning a new object every time.
  const popoverProps = (0,external_wp_element_namespaceObject.useMemo)(() => ({
    // Anchor the popover to the middle of the entire row so that it doesn't
    // move around when the label changes.
    anchor: popoverAnchor,
    'aria-label': (0,external_wp_i18n_namespaceObject.__)('Status & visibility'),
    headerTitle: (0,external_wp_i18n_namespaceObject.__)('Status & visibility'),
    placement: 'left-start',
    offset: 36,
    shift: true
  }), [popoverAnchor]);
  if (post_status_DESIGN_POST_TYPES.includes(postType)) {
    return null;
  }
  const updatePost = ({
    status: newStatus = status,
    password: newPassword = password,
    date: newDate = date
  }) => {
    editEntityRecord('postType', postType, postId, {
      status: newStatus,
      date: newDate,
      password: newPassword
    });
  };
  const handleTogglePassword = value => {
    setShowPassword(value);
    if (!value) {
      updatePost({
        password: ''
      });
    }
  };
  const handleStatus = value => {
    let newDate = date;
    let newPassword = password;
    if (status === 'future' && new Date(date) > new Date()) {
      newDate = null;
    }
    if (value === 'private' && password) {
      newPassword = '';
    }
    updatePost({
      status: value,
      date: newDate,
      password: newPassword
    });
  };
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(post_panel_row, {
    label: (0,external_wp_i18n_namespaceObject.__)('Status'),
    ref: setPopoverAnchor,
    children: canEdit ? /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Dropdown, {
      className: "editor-post-status",
      contentClassName: "editor-change-status__content",
      popoverProps: popoverProps,
      focusOnMount: true,
      renderToggle: ({
        onToggle
      }) => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
        variant: "tertiary",
        size: "compact",
        onClick: onToggle,
        "aria-label": (0,external_wp_i18n_namespaceObject.sprintf)(
        // translators: %s: Current post status.
        (0,external_wp_i18n_namespaceObject.__)('Change post status: %s'), labels[status]),
        children: labels[status]
      }),
      renderContent: ({
        onClose
      }) => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
        children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_blockEditor_namespaceObject.__experimentalInspectorPopoverHeader, {
          title: (0,external_wp_i18n_namespaceObject.__)('Status & visibility'),
          onClose: onClose
        }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("form", {
          children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.__experimentalVStack, {
            spacing: 4,
            children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.RadioControl, {
              className: "editor-change-status__options",
              hideLabelFromVision: true,
              label: (0,external_wp_i18n_namespaceObject.__)('Status'),
              options: STATUS_OPTIONS,
              onChange: handleStatus,
              selected: status === 'auto-draft' ? 'draft' : status
            }), status === 'future' && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
              className: "editor-change-status__publish-date-wrapper",
              children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PrivatePostSchedule, {
                showPopoverHeaderActions: false,
                isCompact: true
              })
            }), status !== 'private' && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.__experimentalVStack, {
              as: "fieldset",
              spacing: 4,
              className: "editor-change-status__password-fieldset",
              children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.CheckboxControl, {
                __nextHasNoMarginBottom: true,
                label: (0,external_wp_i18n_namespaceObject.__)('Password protected'),
                help: (0,external_wp_i18n_namespaceObject.__)('Only visible to those who know the password'),
                checked: showPassword,
                onChange: handleTogglePassword
              }), showPassword && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
                className: "editor-change-status__password-input",
                children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.TextControl, {
                  label: (0,external_wp_i18n_namespaceObject.__)('Password'),
                  onChange: value => updatePost({
                    password: value
                  }),
                  value: password,
                  placeholder: (0,external_wp_i18n_namespaceObject.__)('Use a secure password'),
                  type: "text",
                  id: passwordInputId,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                })
              })]
            })]
          })
        })]
      })
    }) : /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("div", {
      className: "editor-post-status is-read-only",
      children: labels[status]
    })
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/blog-title/index.js
/**
 * WordPress dependencies
 */









/**
 * Internal dependencies
 */






const blog_title_EMPTY_OBJECT = {};
function BlogTitle() {
  const {
    editEntityRecord
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_coreData_namespaceObject.store);
  const {
    postsPageTitle,
    postsPageId,
    isTemplate,
    postSlug
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getEntityRecord,
      getEditedEntityRecord
    } = select(external_wp_coreData_namespaceObject.store);
    const siteSettings = getEntityRecord('root', 'site');
    const _postsPageRecord = siteSettings?.page_for_posts ? getEditedEntityRecord('postType', 'page', siteSettings?.page_for_posts) : blog_title_EMPTY_OBJECT;
    const {
      getEditedPostAttribute,
      getCurrentPostType
    } = select(store_store);
    return {
      postsPageId: _postsPageRecord?.id,
      postsPageTitle: _postsPageRecord?.title,
      isTemplate: getCurrentPostType() === TEMPLATE_POST_TYPE,
      postSlug: getEditedPostAttribute('slug')
    };
  }, []);
  // Use internal state instead of a ref to make sure that the component
  // re-renders when the popover's anchor updates.
  const [popoverAnchor, setPopoverAnchor] = (0,external_wp_element_namespaceObject.useState)(null);
  // Memoize popoverProps to avoid returning a new object every time.
  const popoverProps = (0,external_wp_element_namespaceObject.useMemo)(() => ({
    // Anchor the popover to the middle of the entire row so that it doesn't
    // move around when the label changes.
    anchor: popoverAnchor,
    placement: 'left-start',
    offset: 36,
    shift: true
  }), [popoverAnchor]);
  if (!isTemplate || !['home', 'index'].includes(postSlug) || !postsPageId) {
    return null;
  }
  const setPostsPageTitle = newValue => {
    editEntityRecord('postType', 'page', postsPageId, {
      title: newValue
    });
  };
  const decodedTitle = (0,external_wp_htmlEntities_namespaceObject.decodeEntities)(postsPageTitle);
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(post_panel_row, {
    label: (0,external_wp_i18n_namespaceObject.__)('Blog title'),
    ref: setPopoverAnchor,
    children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Dropdown, {
      popoverProps: popoverProps,
      contentClassName: "editor-blog-title-dropdown__content",
      focusOnMount: true,
      renderToggle: ({
        isOpen,
        onToggle
      }) => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
        size: "compact",
        variant: "tertiary",
        "aria-expanded": isOpen,
        "aria-label": (0,external_wp_i18n_namespaceObject.sprintf)(
        // translators: %s: Current post link.
        (0,external_wp_i18n_namespaceObject.__)('Change blog title: %s'), decodedTitle),
        onClick: onToggle,
        children: decodedTitle
      }),
      renderContent: ({
        onClose
      }) => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
        children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_blockEditor_namespaceObject.__experimentalInspectorPopoverHeader, {
          title: (0,external_wp_i18n_namespaceObject.__)('Blog title'),
          onClose: onClose
        }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.__experimentalInputControl, {
          placeholder: (0,external_wp_i18n_namespaceObject.__)('No Title'),
          size: "__unstable-large",
          value: postsPageTitle,
          onChange: (0,external_wp_compose_namespaceObject.debounce)(setPostsPageTitle, 300),
          label: (0,external_wp_i18n_namespaceObject.__)('Blog title'),
          help: (0,external_wp_i18n_namespaceObject.__)('Set the Posts Page title. Appears in search results, and when the page is shared on social media.'),
          hideLabelFromVision: true
        })]
      })
    })
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/posts-per-page/index.js
/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */






function PostsPerPage() {
  const {
    editEntityRecord
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_coreData_namespaceObject.store);
  const {
    postsPerPage,
    isTemplate,
    postSlug
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getEditedPostAttribute,
      getCurrentPostType
    } = select(store_store);
    const {
      getEditedEntityRecord
    } = select(external_wp_coreData_namespaceObject.store);
    const siteSettings = getEditedEntityRecord('root', 'site');
    return {
      isTemplate: getCurrentPostType() === TEMPLATE_POST_TYPE,
      postSlug: getEditedPostAttribute('slug'),
      postsPerPage: siteSettings?.posts_per_page || 1
    };
  }, []);
  // Use internal state instead of a ref to make sure that the component
  // re-renders when the popover's anchor updates.
  const [popoverAnchor, setPopoverAnchor] = (0,external_wp_element_namespaceObject.useState)(null);
  // Memoize popoverProps to avoid returning a new object every time.
  const popoverProps = (0,external_wp_element_namespaceObject.useMemo)(() => ({
    // Anchor the popover to the middle of the entire row so that it doesn't
    // move around when the label changes.
    anchor: popoverAnchor,
    placement: 'left-start',
    offset: 36,
    shift: true
  }), [popoverAnchor]);
  if (!isTemplate || !['home', 'index'].includes(postSlug)) {
    return null;
  }
  const setPostsPerPage = newValue => {
    editEntityRecord('root', 'site', undefined, {
      posts_per_page: newValue
    });
  };
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(post_panel_row, {
    label: (0,external_wp_i18n_namespaceObject.__)('Posts per page'),
    ref: setPopoverAnchor,
    children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Dropdown, {
      popoverProps: popoverProps,
      contentClassName: "editor-posts-per-page-dropdown__content",
      focusOnMount: true,
      renderToggle: ({
        isOpen,
        onToggle
      }) => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
        size: "compact",
        variant: "tertiary",
        "aria-expanded": isOpen,
        "aria-label": (0,external_wp_i18n_namespaceObject.__)('Change posts per page'),
        onClick: onToggle,
        children: postsPerPage
      }),
      renderContent: ({
        onClose
      }) => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
        children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_blockEditor_namespaceObject.__experimentalInspectorPopoverHeader, {
          title: (0,external_wp_i18n_namespaceObject.__)('Posts per page'),
          onClose: onClose
        }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.__experimentalNumberControl, {
          placeholder: 0,
          value: postsPerPage,
          size: "__unstable-large",
          spinControls: "custom",
          step: "1",
          min: "1",
          onChange: setPostsPerPage,
          label: (0,external_wp_i18n_namespaceObject.__)('Posts per page'),
          help: (0,external_wp_i18n_namespaceObject.__)('Set the default number of posts to display on blog pages, including categories and tags. Some templates may override this setting.'),
          hideLabelFromVision: true
        })]
      })
    })
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/site-discussion/index.js
/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */






const site_discussion_COMMENT_OPTIONS = [{
  label: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
    children: [(0,external_wp_i18n_namespaceObject.__)('Open'), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.__experimentalText, {
      variant: "muted",
      size: 12,
      children: (0,external_wp_i18n_namespaceObject.__)('Visitors can add new comments and replies.')
    })]
  }),
  value: 'open'
}, {
  label: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
    children: [(0,external_wp_i18n_namespaceObject.__)('Closed'), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.__experimentalText, {
      variant: "muted",
      size: 12,
      children: (0,external_wp_i18n_namespaceObject.__)('Visitors cannot add new comments or replies.')
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.__experimentalText, {
      variant: "muted",
      size: 12,
      children: (0,external_wp_i18n_namespaceObject.__)('Existing comments remain visible.')
    })]
  }),
  value: ''
}];
function SiteDiscussion() {
  const {
    editEntityRecord
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_coreData_namespaceObject.store);
  const {
    allowCommentsOnNewPosts,
    isTemplate,
    postSlug
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getEditedPostAttribute,
      getCurrentPostType
    } = select(store_store);
    const {
      getEditedEntityRecord
    } = select(external_wp_coreData_namespaceObject.store);
    const siteSettings = getEditedEntityRecord('root', 'site');
    return {
      isTemplate: getCurrentPostType() === TEMPLATE_POST_TYPE,
      postSlug: getEditedPostAttribute('slug'),
      allowCommentsOnNewPosts: siteSettings?.default_comment_status || ''
    };
  }, []);
  // Use internal state instead of a ref to make sure that the component
  // re-renders when the popover's anchor updates.
  const [popoverAnchor, setPopoverAnchor] = (0,external_wp_element_namespaceObject.useState)(null);
  // Memoize popoverProps to avoid returning a new object every time.
  const popoverProps = (0,external_wp_element_namespaceObject.useMemo)(() => ({
    // Anchor the popover to the middle of the entire row so that it doesn't
    // move around when the label changes.
    anchor: popoverAnchor,
    placement: 'left-start',
    offset: 36,
    shift: true
  }), [popoverAnchor]);
  if (!isTemplate || !['home', 'index'].includes(postSlug)) {
    return null;
  }
  const setAllowCommentsOnNewPosts = newValue => {
    editEntityRecord('root', 'site', undefined, {
      default_comment_status: newValue ? 'open' : null
    });
  };
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(post_panel_row, {
    label: (0,external_wp_i18n_namespaceObject.__)('Discussion'),
    ref: setPopoverAnchor,
    children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Dropdown, {
      popoverProps: popoverProps,
      contentClassName: "editor-site-discussion-dropdown__content",
      focusOnMount: true,
      renderToggle: ({
        isOpen,
        onToggle
      }) => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
        size: "compact",
        variant: "tertiary",
        "aria-expanded": isOpen,
        "aria-label": (0,external_wp_i18n_namespaceObject.__)('Change discussion settings'),
        onClick: onToggle,
        children: allowCommentsOnNewPosts ? (0,external_wp_i18n_namespaceObject.__)('Comments open') : (0,external_wp_i18n_namespaceObject.__)('Comments closed')
      }),
      renderContent: ({
        onClose
      }) => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_ReactJSXRuntime_namespaceObject.Fragment, {
        children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_blockEditor_namespaceObject.__experimentalInspectorPopoverHeader, {
          title: (0,external_wp_i18n_namespaceObject.__)('Discussion'),
          onClose: onClose
        }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.__experimentalVStack, {
          spacing: 3,
          children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.__experimentalText, {
            children: (0,external_wp_i18n_namespaceObject.__)('Changes will apply to new posts only. Individual posts may override these settings.')
          }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.RadioControl, {
            className: "editor-site-discussion__options",
            hideLabelFromVision: true,
            label: (0,external_wp_i18n_namespaceObject.__)('Comment status'),
            options: site_discussion_COMMENT_OPTIONS,
            onChange: setAllowCommentsOnNewPosts,
            selected: allowCommentsOnNewPosts
          })]
        })]
      })
    })
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/template-areas/index.js
/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */





function TemplateAreaItem({
  area,
  clientId
}) {
  const {
    selectBlock,
    toggleBlockHighlight
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_blockEditor_namespaceObject.store);
  const templatePartArea = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const defaultAreas = select(store_store).__experimentalGetDefaultTemplatePartAreas();
    return defaultAreas.find(defaultArea => defaultArea.area === area);
  }, [area]);
  const highlightBlock = () => toggleBlockHighlight(clientId, true);
  const cancelHighlightBlock = () => toggleBlockHighlight(clientId, false);
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.Button, {
    className: "editor-template-areas__item",
    icon: templatePartArea?.icon,
    onMouseOver: highlightBlock,
    onMouseLeave: cancelHighlightBlock,
    onFocus: highlightBlock,
    onBlur: cancelHighlightBlock,
    onClick: () => {
      selectBlock(clientId);
    },
    children: templatePartArea?.label
  });
}
function TemplateAreas() {
  const {
    isTemplate,
    templateParts
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const _isTemplate = select(store_store).getCurrentPostType() === TEMPLATE_POST_TYPE;
    return {
      isTemplate: _isTemplate,
      templateParts: _isTemplate && unlock(select(store_store)).getCurrentTemplateTemplateParts()
    };
  }, []);
  if (!isTemplate || !templateParts.length) {
    return null;
  }
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)("section", {
    className: "editor-template-areas",
    children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.__experimentalHeading, {
      level: 3,
      className: "editor-template-areas__title",
      children: (0,external_wp_i18n_namespaceObject.__)('Areas')
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("ul", {
      className: "editor-template-areas__list",
      children: templateParts.map(({
        templatePart,
        block
      }) => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)("li", {
        children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(TemplateAreaItem, {
          area: templatePart.area,
          clientId: block.clientId
        })
      }, block.clientId))
    })]
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/sidebar/post-summary.js
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */
























/**
 * Module Constants
 */



const post_summary_PANEL_NAME = 'post-status';
function PostSummary({
  onActionPerformed
}) {
  const {
    isRemovedPostStatusPanel
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    // We use isEditorPanelRemoved to hide the panel if it was programatically removed. We do
    // not use isEditorPanelEnabled since this panel should not be disabled through the UI.
    const {
      isEditorPanelRemoved,
      getCurrentPostType
    } = select(store_store);
    return {
      isRemovedPostStatusPanel: isEditorPanelRemoved(post_summary_PANEL_NAME),
      postType: getCurrentPostType()
    };
  }, []);
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(post_panel_section, {
    className: "editor-post-summary",
    children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(plugin_post_status_info.Slot, {
      children: fills => /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_ReactJSXRuntime_namespaceObject.Fragment, {
        children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.__experimentalVStack, {
          spacing: 4,
          children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PostCardPanel, {
            actions: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PostActions, {
              onActionPerformed: onActionPerformed
            })
          }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PostFeaturedImagePanel, {
            withPanelBody: false
          }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PrivatePostExcerptPanel, {}), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.__experimentalVStack, {
            spacing: 1,
            children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PostContentInformation, {}), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PostLastEditedPanel, {})]
          }), !isRemovedPostStatusPanel && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.__experimentalVStack, {
            spacing: 2,
            children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(external_wp_components_namespaceObject.__experimentalVStack, {
              spacing: 1,
              children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PostStatus, {}), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PostSchedulePanel, {}), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PostURLPanel, {}), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(panel, {}), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PostTemplatePanel, {}), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PostDiscussionPanel, {}), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PageAttributesPanel, {}), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PostSyncStatus, {}), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(BlogTitle, {}), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PostsPerPage, {}), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(SiteDiscussion, {}), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(post_format_panel, {}), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PostSticky, {})]
            }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(TemplateAreas, {}), fills]
          })]
        })
      })
    })
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-transform-panel/hooks.js
/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */


const {
  EXCLUDED_PATTERN_SOURCES,
  PATTERN_TYPES: hooks_PATTERN_TYPES
} = unlock(external_wp_patterns_namespaceObject.privateApis);
function injectThemeAttributeInBlockTemplateContent(block, currentThemeStylesheet) {
  block.innerBlocks = block.innerBlocks.map(innerBlock => {
    return injectThemeAttributeInBlockTemplateContent(innerBlock, currentThemeStylesheet);
  });
  if (block.name === 'core/template-part' && block.attributes.theme === undefined) {
    block.attributes.theme = currentThemeStylesheet;
  }
  return block;
}

/**
 * Filter all patterns and return only the ones that are compatible with the current template.
 *
 * @param {Array}  patterns An array of patterns.
 * @param {Object} template The current template.
 * @return {Array} Array of patterns that are compatible with the current template.
 */
function filterPatterns(patterns, template) {
  // Filter out duplicates.
  const filterOutDuplicatesByName = (currentItem, index, items) => index === items.findIndex(item => currentItem.name === item.name);

  // Filter out core/directory patterns not included in theme.json.
  const filterOutExcludedPatternSources = pattern => !EXCLUDED_PATTERN_SOURCES.includes(pattern.source);

  // Looks for patterns that have the same template type as the current template,
  // or have a block type that matches the current template area.
  const filterCompatiblePatterns = pattern => pattern.templateTypes?.includes(template.slug) || pattern.blockTypes?.includes('core/template-part/' + template.area);
  return patterns.filter((pattern, index, items) => {
    return filterOutDuplicatesByName(pattern, index, items) && filterOutExcludedPatternSources(pattern) && filterCompatiblePatterns(pattern);
  });
}
function preparePatterns(patterns, currentThemeStylesheet) {
  return patterns.map(pattern => ({
    ...pattern,
    keywords: pattern.keywords || [],
    type: hooks_PATTERN_TYPES.theme,
    blocks: (0,external_wp_blocks_namespaceObject.parse)(pattern.content, {
      __unstableSkipMigrationLogs: true
    }).map(block => injectThemeAttributeInBlockTemplateContent(block, currentThemeStylesheet))
  }));
}
function useAvailablePatterns(template) {
  const {
    blockPatterns,
    restBlockPatterns,
    currentThemeStylesheet
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    var _settings$__experimen;
    const {
      getEditorSettings
    } = select(store_store);
    const settings = getEditorSettings();
    return {
      blockPatterns: (_settings$__experimen = settings.__experimentalAdditionalBlockPatterns) !== null && _settings$__experimen !== void 0 ? _settings$__experimen : settings.__experimentalBlockPatterns,
      restBlockPatterns: select(external_wp_coreData_namespaceObject.store).getBlockPatterns(),
      currentThemeStylesheet: select(external_wp_coreData_namespaceObject.store).getCurrentTheme().stylesheet
    };
  }, []);
  return (0,external_wp_element_namespaceObject.useMemo)(() => {
    const mergedPatterns = [...(blockPatterns || []), ...(restBlockPatterns || [])];
    const filteredPatterns = filterPatterns(mergedPatterns, template);
    return preparePatterns(filteredPatterns, template, currentThemeStylesheet);
  }, [blockPatterns, restBlockPatterns, template, currentThemeStylesheet]);
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/post-transform-panel/index.js
/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */




function post_transform_panel_TemplatesList({
  availableTemplates,
  onSelect
}) {
  const shownTemplates = (0,external_wp_compose_namespaceObject.useAsyncList)(availableTemplates);
  if (!availableTemplates || availableTemplates?.length === 0) {
    return null;
  }
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_blockEditor_namespaceObject.__experimentalBlockPatternsList, {
    label: (0,external_wp_i18n_namespaceObject.__)('Templates'),
    blockPatterns: availableTemplates,
    shownPatterns: shownTemplates,
    onClickPattern: onSelect,
    showTitlesAsTooltip: true
  });
}
function PostTransform() {
  const {
    record,
    postType,
    postId
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getCurrentPostType,
      getCurrentPostId
    } = select(store_store);
    const {
      getEditedEntityRecord
    } = select(external_wp_coreData_namespaceObject.store);
    const type = getCurrentPostType();
    const id = getCurrentPostId();
    return {
      postType: type,
      postId: id,
      record: getEditedEntityRecord('postType', type, id)
    };
  }, []);
  const {
    editEntityRecord
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_coreData_namespaceObject.store);
  const availablePatterns = useAvailablePatterns(record);
  const onTemplateSelect = async selectedTemplate => {
    await editEntityRecord('postType', postType, postId, {
      blocks: selectedTemplate.blocks,
      content: (0,external_wp_blocks_namespaceObject.serialize)(selectedTemplate.blocks)
    });
  };
  if (!availablePatterns?.length) {
    return null;
  }
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.PanelBody, {
    title: (0,external_wp_i18n_namespaceObject.__)('Design'),
    initialOpen: record.type === TEMPLATE_PART_POST_TYPE,
    children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(post_transform_panel_TemplatesList, {
      availableTemplates: availablePatterns,
      onSelect: onTemplateSelect
    })
  });
}
function PostTransformPanel() {
  const {
    postType
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getCurrentPostType
    } = select(store_store);
    return {
      postType: getCurrentPostType()
    };
  }, []);
  if (![TEMPLATE_PART_POST_TYPE, TEMPLATE_POST_TYPE].includes(postType)) {
    return null;
  }
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PostTransform, {});
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/sidebar/constants.js
const sidebars = {
  document: 'edit-post/document',
  block: 'edit-post/block'
};

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/sidebar/header.js
/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */





const {
  Tabs: header_Tabs
} = unlock(external_wp_components_namespaceObject.privateApis);
const SidebarHeader = (_, ref) => {
  const {
    documentLabel
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getPostTypeLabel
    } = select(store_store);
    return {
      // translators: Default label for the Document sidebar tab, not selected.
      documentLabel: getPostTypeLabel() || (0,external_wp_i18n_namespaceObject._x)('Document', 'noun')
    };
  }, []);
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(header_Tabs.TabList, {
    ref: ref,
    children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(header_Tabs.Tab, {
      tabId: sidebars.document
      // Used for focus management in the SettingsSidebar component.
      ,
      "data-tab-id": sidebars.document,
      children: documentLabel
    }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(header_Tabs.Tab, {
      tabId: sidebars.block
      // Used for focus management in the SettingsSidebar component.
      ,
      "data-tab-id": sidebars.block,
      children: (0,external_wp_i18n_namespaceObject.__)('Block')
    })]
  });
};
/* harmony default export */ const sidebar_header = ((0,external_wp_element_namespaceObject.forwardRef)(SidebarHeader));

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/template-content-panel/index.js
/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


const {
  BlockQuickNavigation
} = unlock(external_wp_blockEditor_namespaceObject.privateApis);
const PAGE_CONTENT_BLOCKS = ['core/post-content', 'core/post-featured-image', 'core/post-title'];
function TemplateContentPanel() {
  const clientIds = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getBlocksByName
    } = select(external_wp_blockEditor_namespaceObject.store);
    return getBlocksByName(PAGE_CONTENT_BLOCKS);
  }, []);
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_components_namespaceObject.PanelBody, {
    title: (0,external_wp_i18n_namespaceObject.__)('Content'),
    children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(BlockQuickNavigation, {
      clientIds: clientIds
    })
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/provider/use-auto-switch-editor-sidebars.js
/**
 * WordPress dependencies
 */






/**
 * This listener hook monitors for block selection and triggers the appropriate
 * sidebar state.
 */
function useAutoSwitchEditorSidebars() {
  const {
    hasBlockSelection
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    return {
      hasBlockSelection: !!select(external_wp_blockEditor_namespaceObject.store).getBlockSelectionStart()
    };
  }, []);
  const {
    getActiveComplementaryArea
  } = (0,external_wp_data_namespaceObject.useSelect)(store);
  const {
    enableComplementaryArea
  } = (0,external_wp_data_namespaceObject.useDispatch)(store);
  const {
    get: getPreference
  } = (0,external_wp_data_namespaceObject.useSelect)(external_wp_preferences_namespaceObject.store);
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    const activeGeneralSidebar = getActiveComplementaryArea('core');
    const isEditorSidebarOpened = ['edit-post/document', 'edit-post/block'].includes(activeGeneralSidebar);
    const isDistractionFree = getPreference('core', 'distractionFree');
    if (!isEditorSidebarOpened || isDistractionFree) {
      return;
    }
    if (hasBlockSelection) {
      enableComplementaryArea('core', 'edit-post/block');
    } else {
      enableComplementaryArea('core', 'edit-post/document');
    }
  }, [hasBlockSelection, getActiveComplementaryArea, enableComplementaryArea, getPreference]);
}
/* harmony default export */ const use_auto_switch_editor_sidebars = (useAutoSwitchEditorSidebars);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/components/sidebar/index.js
/**
 * WordPress dependencies
 */









/**
 * Internal dependencies
 */















const {
  Tabs: sidebar_Tabs
} = unlock(external_wp_components_namespaceObject.privateApis);
const SIDEBAR_ACTIVE_BY_DEFAULT = external_wp_element_namespaceObject.Platform.select({
  web: true,
  native: false
});
const SidebarContent = ({
  tabName,
  keyboardShortcut,
  renderingMode,
  onActionPerformed,
  extraPanels
}) => {
  const tabListRef = (0,external_wp_element_namespaceObject.useRef)(null);
  // Because `PluginSidebar` renders a `ComplementaryArea`, we
  // need to forward the `Tabs` context so it can be passed through the
  // underlying slot/fill.
  const tabsContextValue = (0,external_wp_element_namespaceObject.useContext)(sidebar_Tabs.Context);

  // This effect addresses a race condition caused by tabbing from the last
  // block in the editor into the settings sidebar. Without this effect, the
  // selected tab and browser focus can become separated in an unexpected way
  // (e.g the "block" tab is focused, but the "post" tab is selected).
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    const tabsElements = Array.from(tabListRef.current?.querySelectorAll('[role="tab"]') || []);
    const selectedTabElement = tabsElements.find(
    // We are purposefully using a custom `data-tab-id` attribute here
    // because we don't want rely on any assumptions about `Tabs`
    // component internals.
    element => element.getAttribute('data-tab-id') === tabName);
    const activeElement = selectedTabElement?.ownerDocument.activeElement;
    const tabsHasFocus = tabsElements.some(element => {
      return activeElement && activeElement.id === element.id;
    });
    if (tabsHasFocus && selectedTabElement && selectedTabElement.id !== activeElement?.id) {
      selectedTabElement?.focus();
    }
  }, [tabName]);
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PluginSidebar, {
    identifier: tabName,
    header: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(sidebar_Tabs.Context.Provider, {
      value: tabsContextValue,
      children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(sidebar_header, {
        ref: tabListRef
      })
    }),
    closeLabel: (0,external_wp_i18n_namespaceObject.__)('Close Settings')
    // This classname is added so we can apply a corrective negative
    // margin to the panel.
    // see https://github.com/WordPress/gutenberg/pull/55360#pullrequestreview-1737671049
    ,
    className: "editor-sidebar__panel",
    headerClassName: "editor-sidebar__panel-tabs"
    /* translators: button label text should, if possible, be under 16 characters. */,
    title: (0,external_wp_i18n_namespaceObject.__)('Settings'),
    toggleShortcut: keyboardShortcut,
    icon: (0,external_wp_i18n_namespaceObject.isRTL)() ? drawer_left : drawer_right,
    isActiveByDefault: SIDEBAR_ACTIVE_BY_DEFAULT,
    children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(sidebar_Tabs.Context.Provider, {
      value: tabsContextValue,
      children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsxs)(sidebar_Tabs.TabPanel, {
        tabId: sidebars.document,
        focusable: false,
        children: [/*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PostSummary, {
          onActionPerformed: onActionPerformed
        }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(plugin_document_setting_panel.Slot, {}), renderingMode !== 'post-only' && /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(TemplateContentPanel, {}), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PostTransformPanel, {}), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(post_taxonomies_panel, {}), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(PatternOverridesPanel, {}), extraPanels]
      }), /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(sidebar_Tabs.TabPanel, {
        tabId: sidebars.block,
        focusable: false,
        children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(external_wp_blockEditor_namespaceObject.BlockInspector, {})
      })]
    })
  });
};
const Sidebar = ({
  extraPanels,
  onActionPerformed
}) => {
  use_auto_switch_editor_sidebars();
  const {
    tabName,
    keyboardShortcut,
    showSummary,
    renderingMode
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const shortcut = select(external_wp_keyboardShortcuts_namespaceObject.store).getShortcutRepresentation('core/editor/toggle-sidebar');
    const sidebar = select(store).getActiveComplementaryArea('core');
    const _isEditorSidebarOpened = [sidebars.block, sidebars.document].includes(sidebar);
    let _tabName = sidebar;
    if (!_isEditorSidebarOpened) {
      _tabName = !!select(external_wp_blockEditor_namespaceObject.store).getBlockSelectionStart() ? sidebars.block : sidebars.document;
    }
    return {
      tabName: _tabName,
      keyboardShortcut: shortcut,
      showSummary: ![TEMPLATE_POST_TYPE, TEMPLATE_PART_POST_TYPE, NAVIGATION_POST_TYPE].includes(select(store_store).getCurrentPostType()),
      renderingMode: select(store_store).getRenderingMode()
    };
  }, []);
  const {
    enableComplementaryArea
  } = (0,external_wp_data_namespaceObject.useDispatch)(store);
  const onTabSelect = (0,external_wp_element_namespaceObject.useCallback)(newSelectedTabId => {
    if (!!newSelectedTabId) {
      enableComplementaryArea('core', newSelectedTabId);
    }
  }, [enableComplementaryArea]);
  return /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(sidebar_Tabs, {
    selectedTabId: tabName,
    onSelect: onTabSelect,
    selectOnMove: false,
    children: /*#__PURE__*/(0,external_ReactJSXRuntime_namespaceObject.jsx)(SidebarContent, {
      tabName: tabName,
      keyboardShortcut: keyboardShortcut,
      showSummary: showSummary,
      renderingMode: renderingMode,
      onActionPerformed: onActionPerformed,
      extraPanels: extraPanels
    })
  });
};
/* harmony default export */ const components_sidebar = (Sidebar);

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/private-apis.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */
















const {
  store: interfaceStore,
  ...remainingInterfaceApis
} = build_module_namespaceObject;
const privateApis = {};
lock(privateApis, {
  CreateTemplatePartModal: CreateTemplatePartModal,
  BackButton: back_button,
  ExperimentalEditorProvider: ExperimentalEditorProvider,
  EntitiesSavedStatesExtensible: EntitiesSavedStatesExtensible,
  EditorInterface: EditorInterface,
  EditorContentSlotFill: content_slot_fill,
  GlobalStylesProvider: GlobalStylesProvider,
  mergeBaseAndUserConfigs: mergeBaseAndUserConfigs,
  PluginPostExcerpt: post_excerpt_plugin,
  PreferencesModal: EditorPreferencesModal,
  usePostActions: usePostActions,
  ToolsMoreMenuGroup: tools_more_menu_group,
  ViewMoreMenuGroup: view_more_menu_group,
  ResizableEditor: resizable_editor,
  Sidebar: components_sidebar,
  // This is a temporary private API while we're updating the site editor to use EditorProvider.
  useBlockEditorSettings: use_block_editor_settings,
  interfaceStore,
  ...remainingInterfaceApis
});

;// CONCATENATED MODULE: ./node_modules/@wordpress/editor/build-module/index.js
/**
 * Internal dependencies
 */







/*
 * Backward compatibility
 */


})();

(window.wp = window.wp || {}).editor = __webpack_exports__;
/******/ })()
;
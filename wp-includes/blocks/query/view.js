import * as __WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__ from "@wordpress/interactivity";
/******/ var __webpack_modules__ = ({

/***/ 978:
/***/ ((module) => {

module.exports = import("@wordpress/interactivity-router");;

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

;// CONCATENATED MODULE: external "@wordpress/interactivity"
var x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var y = x => () => x
const interactivity_namespaceObject = x({ ["getContext"]: () => __WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__.getContext, ["getElement"]: () => __WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__.getElement, ["store"]: () => __WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__.store });
;// CONCATENATED MODULE: ./node_modules/@wordpress/block-library/build-module/query/view.js
/**
 * WordPress dependencies
 */

const isValidLink = ref => ref && ref instanceof window.HTMLAnchorElement && ref.href && (!ref.target || ref.target === '_self') && ref.origin === window.location.origin;
const isValidEvent = event => event.button === 0 &&
// Left clicks only.
!event.metaKey &&
// Open in new tab (Mac).
!event.ctrlKey &&
// Open in new tab (Windows).
!event.altKey &&
// Download.
!event.shiftKey && !event.defaultPrevented;
(0,interactivity_namespaceObject.store)('core/query', {
  state: {
    get startAnimation() {
      return (0,interactivity_namespaceObject.getContext)().animation === 'start';
    },
    get finishAnimation() {
      return (0,interactivity_namespaceObject.getContext)().animation === 'finish';
    }
  },
  actions: {
    *navigate(event) {
      const ctx = (0,interactivity_namespaceObject.getContext)();
      const {
        ref
      } = (0,interactivity_namespaceObject.getElement)();
      const {
        queryRef
      } = ctx;
      const isDisabled = queryRef?.dataset.wpNavigationDisabled;
      if (isValidLink(ref) && isValidEvent(event) && !isDisabled) {
        event.preventDefault();

        // Don't announce the navigation immediately, wait 400 ms.
        const timeout = setTimeout(() => {
          ctx.message = ctx.loadingText;
          ctx.animation = 'start';
        }, 400);
        const {
          actions
        } = yield Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 978));
        yield actions.navigate(ref.href);

        // Dismiss loading message if it hasn't been added yet.
        clearTimeout(timeout);

        // Announce that the page has been loaded. If the message is the
        // same, we use a no-break space similar to the @wordpress/a11y
        // package: https://github.com/WordPress/gutenberg/blob/c395242b8e6ee20f8b06c199e4fc2920d7018af1/packages/a11y/src/filter-message.js#L20-L26
        ctx.message = ctx.loadedText + (ctx.message === ctx.loadedText ? '\u00A0' : '');
        ctx.animation = 'finish';
        ctx.url = ref.href;

        // Focus the first anchor of the Query block.
        const firstAnchor = `.wp-block-post-template a[href]`;
        queryRef.querySelector(firstAnchor)?.focus();
      }
    },
    *prefetch() {
      const {
        queryRef
      } = (0,interactivity_namespaceObject.getContext)();
      const {
        ref
      } = (0,interactivity_namespaceObject.getElement)();
      const isDisabled = queryRef?.dataset.wpNavigationDisabled;
      if (isValidLink(ref) && !isDisabled) {
        const {
          actions
        } = yield Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 978));
        yield actions.prefetch(ref.href);
      }
    }
  },
  callbacks: {
    *prefetch() {
      const {
        url
      } = (0,interactivity_namespaceObject.getContext)();
      const {
        ref
      } = (0,interactivity_namespaceObject.getElement)();
      if (url && isValidLink(ref)) {
        const {
          actions
        } = yield Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 978));
        yield actions.prefetch(ref.href);
      }
    },
    setQueryRef() {
      const ctx = (0,interactivity_namespaceObject.getContext)();
      const {
        ref
      } = (0,interactivity_namespaceObject.getElement)();
      ctx.queryRef = ref;
    }
  }
});

})();


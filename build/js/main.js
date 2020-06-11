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
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/js/modules/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/svg4everybody/dist/svg4everybody.js":
/*!**********************************************************!*\
  !*** ./node_modules/svg4everybody/dist/svg4everybody.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(root, factory) {\n     true ? // AMD. Register as an anonymous module unless amdModuleId is set\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {\n        return root.svg4everybody = factory();\n    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;\n}(this, function() {\n    /*! svg4everybody v2.1.9 | github.com/jonathantneal/svg4everybody */\n    function embed(parent, svg, target) {\n        // if the target exists\n        if (target) {\n            // create a document fragment to hold the contents of the target\n            var fragment = document.createDocumentFragment(), viewBox = !svg.hasAttribute(\"viewBox\") && target.getAttribute(\"viewBox\");\n            // conditionally set the viewBox on the svg\n            viewBox && svg.setAttribute(\"viewBox\", viewBox);\n            // copy the contents of the clone into the fragment\n            for (// clone the target\n            var clone = target.cloneNode(!0); clone.childNodes.length; ) {\n                fragment.appendChild(clone.firstChild);\n            }\n            // append the fragment into the svg\n            parent.appendChild(fragment);\n        }\n    }\n    function loadreadystatechange(xhr) {\n        // listen to changes in the request\n        xhr.onreadystatechange = function() {\n            // if the request is ready\n            if (4 === xhr.readyState) {\n                // get the cached html document\n                var cachedDocument = xhr._cachedDocument;\n                // ensure the cached html document based on the xhr response\n                cachedDocument || (cachedDocument = xhr._cachedDocument = document.implementation.createHTMLDocument(\"\"), \n                cachedDocument.body.innerHTML = xhr.responseText, xhr._cachedTarget = {}), // clear the xhr embeds list and embed each item\n                xhr._embeds.splice(0).map(function(item) {\n                    // get the cached target\n                    var target = xhr._cachedTarget[item.id];\n                    // ensure the cached target\n                    target || (target = xhr._cachedTarget[item.id] = cachedDocument.getElementById(item.id)), \n                    // embed the target into the svg\n                    embed(item.parent, item.svg, target);\n                });\n            }\n        }, // test the ready state change immediately\n        xhr.onreadystatechange();\n    }\n    function svg4everybody(rawopts) {\n        function oninterval() {\n            // while the index exists in the live <use> collection\n            for (// get the cached <use> index\n            var index = 0; index < uses.length; ) {\n                // get the current <use>\n                var use = uses[index], parent = use.parentNode, svg = getSVGAncestor(parent), src = use.getAttribute(\"xlink:href\") || use.getAttribute(\"href\");\n                if (!src && opts.attributeName && (src = use.getAttribute(opts.attributeName)), \n                svg && src) {\n                    if (polyfill) {\n                        if (!opts.validate || opts.validate(src, svg, use)) {\n                            // remove the <use> element\n                            parent.removeChild(use);\n                            // parse the src and get the url and id\n                            var srcSplit = src.split(\"#\"), url = srcSplit.shift(), id = srcSplit.join(\"#\");\n                            // if the link is external\n                            if (url.length) {\n                                // get the cached xhr request\n                                var xhr = requests[url];\n                                // ensure the xhr request exists\n                                xhr || (xhr = requests[url] = new XMLHttpRequest(), xhr.open(\"GET\", url), xhr.send(), \n                                xhr._embeds = []), // add the svg and id as an item to the xhr embeds list\n                                xhr._embeds.push({\n                                    parent: parent,\n                                    svg: svg,\n                                    id: id\n                                }), // prepare the xhr ready state change event\n                                loadreadystatechange(xhr);\n                            } else {\n                                // embed the local id into the svg\n                                embed(parent, svg, document.getElementById(id));\n                            }\n                        } else {\n                            // increase the index when the previous value was not \"valid\"\n                            ++index, ++numberOfSvgUseElementsToBypass;\n                        }\n                    }\n                } else {\n                    // increase the index when the previous value was not \"valid\"\n                    ++index;\n                }\n            }\n            // continue the interval\n            (!uses.length || uses.length - numberOfSvgUseElementsToBypass > 0) && requestAnimationFrame(oninterval, 67);\n        }\n        var polyfill, opts = Object(rawopts), newerIEUA = /\\bTrident\\/[567]\\b|\\bMSIE (?:9|10)\\.0\\b/, webkitUA = /\\bAppleWebKit\\/(\\d+)\\b/, olderEdgeUA = /\\bEdge\\/12\\.(\\d+)\\b/, edgeUA = /\\bEdge\\/.(\\d+)\\b/, inIframe = window.top !== window.self;\n        polyfill = \"polyfill\" in opts ? opts.polyfill : newerIEUA.test(navigator.userAgent) || (navigator.userAgent.match(olderEdgeUA) || [])[1] < 10547 || (navigator.userAgent.match(webkitUA) || [])[1] < 537 || edgeUA.test(navigator.userAgent) && inIframe;\n        // create xhr requests object\n        var requests = {}, requestAnimationFrame = window.requestAnimationFrame || setTimeout, uses = document.getElementsByTagName(\"use\"), numberOfSvgUseElementsToBypass = 0;\n        // conditionally start the interval if the polyfill is active\n        polyfill && oninterval();\n    }\n    function getSVGAncestor(node) {\n        for (var svg = node; \"svg\" !== svg.nodeName.toLowerCase() && (svg = svg.parentNode); ) {}\n        return svg;\n    }\n    return svg4everybody;\n});\n\n//# sourceURL=webpack:///./node_modules/svg4everybody/dist/svg4everybody.js?");

/***/ }),

/***/ "./source/js/modules/footer-menu.js":
/*!******************************************!*\
  !*** ./source/js/modules/footer-menu.js ***!
  \******************************************/
/*! exports provided: getDefaultState, onClickNavToggler, onClickContactsToggler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDefaultState\", function() { return getDefaultState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onClickNavToggler\", function() { return onClickNavToggler; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onClickContactsToggler\", function() { return onClickContactsToggler; });\nvar footerBlock = document.querySelector(\".footer\");\nvar footerNavBlock = footerBlock.querySelector(\".footer__nav\");\nvar footerContactsBlock = footerBlock.querySelector(\".footer__contacts\");\nvar getDefaultState = function getDefaultState() {\n  footerNavBlock.classList.remove(\"footer__nav--nojs\");\n  footerContactsBlock.classList.remove(\"footer__contacts--nojs\");\n  footerNavBlock.classList.add(\"footer__nav--closed\");\n  footerContactsBlock.classList.add(\"footer__contacts--closed\");\n};\n\nvar showFooterNavBlock = function showFooterNavBlock() {\n  footerNavBlock.classList.remove(\"footer__nav--closed\");\n  footerNavBlock.classList.add(\"footer__nav--opened\");\n};\n\nvar hideFooterNavBlock = function hideFooterNavBlock() {\n  footerNavBlock.classList.remove(\"footer__nav--opened\");\n  footerNavBlock.classList.add(\"footer__nav--closed\");\n};\n\nvar showFooterContactsBlock = function showFooterContactsBlock() {\n  footerContactsBlock.classList.remove(\"footer__contacts--closed\");\n  footerContactsBlock.classList.add(\"footer__contacts--opened\");\n};\n\nvar hideFooterContactsBlock = function hideFooterContactsBlock() {\n  footerContactsBlock.classList.remove(\"footer__contacts--opened\");\n  footerContactsBlock.classList.add(\"footer__contacts--closed\");\n};\n\nvar onClickNavToggler = function onClickNavToggler() {\n  if (footerContactsBlock.classList.contains(\"footer__contacts--opened\") || footerNavBlock.classList.contains(\"footer__nav--closed\")) {\n    showFooterNavBlock();\n    hideFooterContactsBlock();\n  } else {\n    hideFooterNavBlock();\n  }\n};\nvar onClickContactsToggler = function onClickContactsToggler() {\n  if (footerNavBlock.classList.contains(\"footer__nav--opened\") || footerContactsBlock.classList.contains(\"footer__contacts--closed\")) {\n    showFooterContactsBlock();\n    hideFooterNavBlock();\n  } else {\n    hideFooterContactsBlock();\n  }\n};\n\n//# sourceURL=webpack:///./source/js/modules/footer-menu.js?");

/***/ }),

/***/ "./source/js/modules/index.js":
/*!************************************!*\
  !*** ./source/js/modules/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svg4everybody */ \"./node_modules/svg4everybody/dist/svg4everybody.js\");\n/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg4everybody__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup.js */ \"./source/js/modules/popup.js\");\n/* harmony import */ var _scroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scroll.js */ \"./source/js/modules/scroll.js\");\n/* harmony import */ var _footer_menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer-menu.js */ \"./source/js/modules/footer-menu.js\");\n\n\n\n\nvar openUserMessageLink = document.querySelector(\".nav__call\");\nvar popupCallForm = document.querySelector(\".form-call\");\nvar submitForm = popupCallForm.querySelector(\"form\");\nvar scrollPreviewLink = document.querySelector(\".preview__link-scroll\");\nvar footerBlock = document.querySelector(\".footer\");\nvar inputInFormCall = document.querySelector(\".form-call input[name=tell]\");\nvar inputInFeedback = document.querySelector(\".feedback__content input[name=tell]\");\nvar footerNavToggler = footerBlock.querySelector(\".footer__input--nav\");\nvar footerContactsToggler = footerBlock.querySelector(\".footer__input--contacts\");\nsvg4everybody__WEBPACK_IMPORTED_MODULE_0___default()();\nObject(_footer_menu_js__WEBPACK_IMPORTED_MODULE_3__[\"getDefaultState\"])();\nvar validatePhoneInForm = new IMask(inputInFormCall, {\n  mask: \"+{7}(000)000-00-00\"\n});\nvar validatePhoneInFeedback = new IMask(inputInFeedback, {\n  mask: \"+{7}(000)000-00-00\"\n});\nfooterNavToggler.addEventListener(\"click\", _footer_menu_js__WEBPACK_IMPORTED_MODULE_3__[\"onClickNavToggler\"]);\nfooterContactsToggler.addEventListener(\"click\", _footer_menu_js__WEBPACK_IMPORTED_MODULE_3__[\"onClickContactsToggler\"]);\n\nif (openUserMessageLink) {\n  openUserMessageLink.addEventListener(\"click\", _popup_js__WEBPACK_IMPORTED_MODULE_1__[\"popupOpenHandler\"]);\n}\n\nif (submitForm) {\n  submitForm.addEventListener(\"submit\", _popup_js__WEBPACK_IMPORTED_MODULE_1__[\"submilFormCall\"]);\n}\n\nif (scrollPreviewLink) {\n  Object(_scroll_js__WEBPACK_IMPORTED_MODULE_2__[\"scrollToContent\"])();\n}\n\n//# sourceURL=webpack:///./source/js/modules/index.js?");

/***/ }),

/***/ "./source/js/modules/popup.js":
/*!************************************!*\
  !*** ./source/js/modules/popup.js ***!
  \************************************/
/*! exports provided: saveInLocalStorage, popupOpenHandler, submilFormCall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveInLocalStorage\", function() { return saveInLocalStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"popupOpenHandler\", function() { return popupOpenHandler; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"submilFormCall\", function() { return submilFormCall; });\n/* harmony import */ var _scroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroll.js */ \"./source/js/modules/scroll.js\");\n\nvar ESC_KEYCODE = 27;\nvar popupElement = document.querySelector(\".popup\");\nvar popupClose = popupElement.querySelector(\".popup__button--closer\");\nvar userName = popupElement.querySelector(\"[name = name]\");\nvar userTell = popupElement.querySelector(\"[name = tell]\");\nvar userMessage = popupElement.querySelector(\"[name = user-message]\");\nvar storageName = localStorage.getItem(\"name\");\nvar storageTell = localStorage.getItem(\"tell\");\nvar storageMessage = localStorage.getItem(\"user-message\");\n\nvar popupCloserHandler = function popupCloserHandler() {\n  popupElement.classList.remove(\"popup--show\");\n  Object(_scroll_js__WEBPACK_IMPORTED_MODULE_0__[\"enableScrolling\"])();\n};\n\nvar saveInLocalStorage = function saveInLocalStorage() {\n  if (userName.value || userTell.value || userMessage.value) {\n    localStorage.setItem(\"name\", userName.value);\n    localStorage.setItem(\"tell\", userTell.value);\n    localStorage.setItem(\"user-message\", userMessage.value);\n    popupCloserHandler();\n  }\n};\n\nvar getInLocalStorage = function getInLocalStorage() {\n  if (storageName || storageTell || storageMessage) {\n    userName.value = storageName;\n    userTell.value = storageTell;\n    userMessage.value = storageMessage;\n  }\n};\n\nvar closeByEsc = function closeByEsc() {\n  document.addEventListener(\"keydown\", function (evt) {\n    if (evt.keyCode === ESC_KEYCODE) {\n      popupCloserHandler();\n    }\n  });\n};\n\nvar closeOnClickOutsideHandler = function closeOnClickOutsideHandler(e) {\n  var target = e.target;\n\n  if (target.classList.contains(\"popup__overlay\")) {\n    popupCloserHandler();\n  }\n};\n\nvar popupOpenHandler = function popupOpenHandler() {\n  if (popupElement) {\n    popupElement.classList.add(\"popup--show\");\n    userName.focus();\n    getInLocalStorage();\n    Object(_scroll_js__WEBPACK_IMPORTED_MODULE_0__[\"disableScrolling\"])();\n  }\n\n  popupClose.addEventListener(\"click\", popupCloserHandler);\n  closeByEsc();\n  document.addEventListener(\"click\", closeOnClickOutsideHandler);\n};\nvar submilFormCall = function submilFormCall() {\n  saveInLocalStorage();\n};\n\n//# sourceURL=webpack:///./source/js/modules/popup.js?");

/***/ }),

/***/ "./source/js/modules/scroll.js":
/*!*************************************!*\
  !*** ./source/js/modules/scroll.js ***!
  \*************************************/
/*! exports provided: disableScrolling, enableScrolling, scrollToContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"disableScrolling\", function() { return disableScrolling; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"enableScrolling\", function() { return enableScrolling; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scrollToContent\", function() { return scrollToContent; });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar body = document.querySelector(\"body\");\n\nvar getScrollbarWidth = function getScrollbarWidth() {\n  var outer = document.createElement(\"div\");\n  outer.style.visibility = \"hidden\";\n  outer.style.overflow = \"scroll\";\n  outer.style.msOverflowStyle = \"scrollbar\";\n  body.appendChild(outer);\n  var inner = document.createElement(\"div\");\n  outer.appendChild(inner);\n  var scrollbarWidth = outer.offsetWidth - inner.offsetWidth;\n  outer.parentNode.removeChild(outer);\n  return scrollbarWidth;\n};\n\nvar disableScrolling = function disableScrolling() {\n  var scrollWidth = getScrollbarWidth();\n  body.setAttribute(\"style\", \"padding-right:\".concat(scrollWidth, \"px;\"));\n  body.classList.add(\"no-scroll\");\n};\nvar enableScrolling = function enableScrolling() {\n  body.removeAttribute(\"style\");\n  body.classList.remove(\"no-scroll\");\n};\nvar scrollToContent = function scrollToContent() {\n  var anchors = document.querySelectorAll(\"a[href*=\\\"#\\\"]\");\n\n  var _iterator = _createForOfIteratorHelper(anchors),\n      _step;\n\n  try {\n    var _loop = function _loop() {\n      var anchor = _step.value;\n      anchor.addEventListener(\"click\", function (evt) {\n        evt.preventDefault();\n        var blockId = anchor.getAttribute(\"href\");\n\n        if (blockId !== \"#\") {\n          document.querySelector(\"\" + blockId).scrollIntoView({\n            behavior: \"smooth\",\n            block: \"start\"\n          });\n        }\n      });\n    };\n\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      _loop();\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n};\n\n//# sourceURL=webpack:///./source/js/modules/scroll.js?");

/***/ })

/******/ });
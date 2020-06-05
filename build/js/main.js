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

/***/ "./source/js/modules/index.js":
/*!************************************!*\
  !*** ./source/js/modules/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup.js */ \"./source/js/modules/popup.js\");\n\nvar openUserMessageLink = document.querySelector(\".nav__call\");\nvar formMessageBlock = document.querySelector(\".form-call\");\nvar submitForm = formMessageBlock.querySelector(\"form\");\n\nif (openUserMessageLink) {\n  openUserMessageLink.addEventListener(\"click\", _popup_js__WEBPACK_IMPORTED_MODULE_0__[\"popupOpenHandler\"]);\n}\n\nif (submitForm) {\n  submitForm.addEventListener(\"submit\", _popup_js__WEBPACK_IMPORTED_MODULE_0__[\"saveInLocalStorage\"]);\n}\n\n//# sourceURL=webpack:///./source/js/modules/index.js?");

/***/ }),

/***/ "./source/js/modules/popup.js":
/*!************************************!*\
  !*** ./source/js/modules/popup.js ***!
  \************************************/
/*! exports provided: saveInLocalStorage, popupOpenHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveInLocalStorage\", function() { return saveInLocalStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"popupOpenHandler\", function() { return popupOpenHandler; });\n/* harmony import */ var _scroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroll.js */ \"./source/js/modules/scroll.js\");\n\nvar ESC_KEYCODE = 27;\nvar popupElement = document.querySelector(\".popup\");\nvar popupClose = popupElement.querySelector(\".popup__button--closer\");\nvar userName = popupElement.querySelector(\"[name = name]\");\nvar userTell = popupElement.querySelector(\"[name = tell]\");\nvar userMessage = popupElement.querySelector(\"[name = user-message]\");\nvar storageName = localStorage.getItem(\"name\");\nvar storageTell = localStorage.getItem(\"tell\");\nvar storageMessage = localStorage.getItem(\"user-message\");\n\nvar popupCloserHandler = function popupCloserHandler() {\n  popupElement.classList.remove(\"popup--show\");\n  Object(_scroll_js__WEBPACK_IMPORTED_MODULE_0__[\"enableScrolling\"])();\n};\n\nvar saveInLocalStorage = function saveInLocalStorage() {\n  if (userName.value || userTell.value || userMessage.value) {\n    localStorage.setItem(\"name\", userName.value);\n    localStorage.setItem(\"tell\", userTell.value);\n    localStorage.setItem(\"user-message\", userMessage.value);\n    popupCloserHandler();\n  }\n};\n\nvar getInLocalStorage = function getInLocalStorage() {\n  if (storageName || storageTell || storageMessage) {\n    userName.value = storageName;\n    userTell.value = storageTell;\n    userMessage.value = storageMessage;\n  }\n};\n\nvar closeByEsc = function closeByEsc() {\n  document.addEventListener(\"keydown\", function (evt) {\n    if (evt.keyCode === ESC_KEYCODE) {\n      popupCloserHandler();\n    }\n  });\n};\n\nvar closeOnClickOutsideHandler = function closeOnClickOutsideHandler(e) {\n  var target = e.target;\n\n  if (target.classList.contains(\"popup__overlay\")) {\n    popupCloserHandler();\n  }\n};\n\nvar popupOpenHandler = function popupOpenHandler() {\n  if (popupElement) {\n    popupElement.classList.add(\"popup--show\");\n    userName.focus();\n    getInLocalStorage();\n    Object(_scroll_js__WEBPACK_IMPORTED_MODULE_0__[\"disableScrolling\"])();\n  }\n\n  popupClose.addEventListener(\"click\", popupCloserHandler);\n  closeByEsc();\n  document.addEventListener(\"click\", closeOnClickOutsideHandler);\n};\n\n//# sourceURL=webpack:///./source/js/modules/popup.js?");

/***/ }),

/***/ "./source/js/modules/scroll.js":
/*!*************************************!*\
  !*** ./source/js/modules/scroll.js ***!
  \*************************************/
/*! exports provided: disableScrolling, enableScrolling */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"disableScrolling\", function() { return disableScrolling; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"enableScrolling\", function() { return enableScrolling; });\nvar body = document.querySelector(\"body\");\n\nvar getScrollbarWidth = function getScrollbarWidth() {\n  var outer = document.createElement(\"div\");\n  outer.style.visibility = \"hidden\";\n  outer.style.overflow = \"scroll\";\n  outer.style.msOverflowStyle = \"scrollbar\";\n  body.appendChild(outer);\n  var inner = document.createElement(\"div\");\n  outer.appendChild(inner);\n  var scrollbarWidth = outer.offsetWidth - inner.offsetWidth;\n  outer.parentNode.removeChild(outer);\n  return scrollbarWidth;\n};\n\nvar disableScrolling = function disableScrolling() {\n  var scrollWidth = getScrollbarWidth();\n  body.setAttribute(\"style\", \"padding-right:\".concat(scrollWidth, \"px;\"));\n  body.classList.add(\"no-scroll\");\n};\nvar enableScrolling = function enableScrolling() {\n  body.removeAttribute(\"style\");\n  body.classList.remove(\"no-scroll\");\n};\n\n//# sourceURL=webpack:///./source/js/modules/scroll.js?");

/***/ })

/******/ });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./front_app/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./front_app/index.js":
/*!****************************!*\
  !*** ./front_app/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const ctrl = __webpack_require__(/*! ../front_app/mvc/controller */ \"./front_app/mvc/controller.js\");\r\n\r\nctrl();\n\n//# sourceURL=webpack:///./front_app/index.js?");

/***/ }),

/***/ "./front_app/mvc/controller.js":
/*!*************************************!*\
  !*** ./front_app/mvc/controller.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const model = __webpack_require__(/*! ./model */ \"./front_app/mvc/model.js\");\r\n\r\nfunction controller(){\r\n    var btn = document.querySelector('#test_btn');\r\n\r\n    btn.addEventListener('click', function(e){\r\n        console.log('works');\r\n        model();\r\n    })\r\n\r\n}\r\n\r\nmodule.exports = controller;\n\n//# sourceURL=webpack:///./front_app/mvc/controller.js?");

/***/ }),

/***/ "./front_app/mvc/model.js":
/*!********************************!*\
  !*** ./front_app/mvc/model.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function model(){\r\n\r\n\r\n    var request = new XMLHttpRequest();\r\n    \r\n    request.open('GET', 'http://localhost:3000/xmlData', true);\r\n\r\n    request.onload = function(data){\r\n        console.log(request.responseText);\r\n        console.log(\"================================================\");\r\n        console.log(request.responseType);\r\n        console.log(\"================================================\");\r\n        console.log(request.responseXML);\r\n\r\n        // var parser = new DOMParser();\r\n        // var xmlDoc = parser.parseFromString(request.responseText,\"text/xml\");\r\n\r\n        // console.log(xmlDoc);\r\n\r\n        \r\n    }\r\n\r\n    request.onerror = function(error){\r\n        console.log('Something went wrong');\r\n        console.log(error);\r\n    }\r\n\r\n    request.send();\r\n}\r\n\r\nmodule.exports = model;\n\n//# sourceURL=webpack:///./front_app/mvc/model.js?");

/***/ })

/******/ });
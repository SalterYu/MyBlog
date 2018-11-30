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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/core/instance/proxy.js":
/*!************************************!*\
  !*** ./src/core/instance/proxy.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = proxy;\nfunction proxy(target, sourceKey, key) {\n  Object.defineProperty(target, key, {\n    configurable: true,\n    get: function proxyGetter() {\n      return target[sourceKey][key];\n    },\n    set: function proxySetter(newVal) {\n      target[sourceKey][key] = newVal;\n    }\n  });\n}\n\n//# sourceURL=webpack:///./src/core/instance/proxy.js?");

/***/ }),

/***/ "./src/core/observer/index.js":
/*!************************************!*\
  !*** ./src/core/observer/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nexports.default = observer;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Observer = function () {\n  function Observer(value) {\n    _classCallCheck(this, Observer);\n\n    this.walk(value);\n  }\n\n  _createClass(Observer, [{\n    key: 'walk',\n    value: function walk(obj) {\n      var _this = this;\n\n      Object.keys(obj).forEach(function (key) {\n        if (_typeof(obj[key]) === 'object') _this.walk(obj[key]);\n        defineReactive(obj, key, obj[key]);\n      });\n    }\n  }]);\n\n  return Observer;\n}();\n\nvar defineReactive = function defineReactive(obj, key, value) {\n  Object.defineProperty(obj, key, {\n    get: function get() {\n      console.log('getter: ' + value);\n      return value;\n    },\n    set: function set(newVal) {\n      if ((typeof newVal === 'undefined' ? 'undefined' : _typeof(newVal)) === value) return;\n      console.log('setter: ' + newVal);\n      value = newVal;\n    }\n  });\n};\nfunction observer(value) {\n  return new Observer(value);\n}\n\n//# sourceURL=webpack:///./src/core/observer/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _proxy = __webpack_require__(/*! ./core/instance/proxy */ \"./src/core/instance/proxy.js\");\n\nvar _proxy2 = _interopRequireDefault(_proxy);\n\nvar _observer = __webpack_require__(/*! ./core/observer */ \"./src/core/observer/index.js\");\n\nvar _observer2 = _interopRequireDefault(_observer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Wue = function Wue(options) {\n  _classCallCheck(this, Wue);\n\n  var vm = this;\n  vm.$options = options;\n  var data = vm._data = vm.$options.data;\n  Object.keys(vm._data).forEach(function (key) {\n    (0, _proxy2.default)(vm, '_data', key);\n  });\n  (0, _observer2.default)(vm._data);\n};\n\nvar app = new Wue({\n  el: '#app',\n  data: {\n    msg: 'hello Wue',\n    deep: {\n      a: 1,\n      b: 2\n    }\n  }\n});\n\nconsole.log(app.msg);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });
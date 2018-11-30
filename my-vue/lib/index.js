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

/***/ "./src/core/compile/index.js":
/*!***********************************!*\
  !*** ./src/core/compile/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Compiler =\n/*#__PURE__*/\nfunction () {\n  function Compiler(el, vm) {\n    _classCallCheck(this, Compiler);\n\n    this.vm = vm;\n    vm.$el = document.querySelector(el);\n    this.replace(vm.$el, vm);\n  }\n\n  _createClass(Compiler, [{\n    key: \"replace\",\n    value: function replace(frag, vm) {\n      var _this = this;\n\n      var childNodesList = Array.from(frag.childNodes);\n      var baseReg = /[{][{]((?:.|\\n)+?)[}][}]/g;\n\n      var keyReg = function keyReg(key) {\n        return new RegExp(\"[{][{](?:(\".concat(key, \")+?)[}][}]\"), 'g');\n      };\n\n      var getVal = function getVal(keys, vm) {\n        var val = vm;\n        keys.forEach(function (key) {\n          val = val[key];\n        });\n        return val;\n      };\n\n      childNodesList.forEach(function (node) {\n        var resultTxt = node.textContent; // 如果是文本节点\n\n        if (node.nodeType === 3) {\n          while (baseReg.exec(node.textContent)) {\n            var matchVal = RegExp.$1;\n            var keys = RegExp.$1.split('.');\n            var val = getVal(keys, vm);\n            resultTxt = resultTxt.replace(keyReg(matchVal), val).trim();\n            vm.$watch(RegExp.$1, function (newValue, oldValue) {\n              resultTxt = resultTxt.replace(oldValue, newValue).trim();\n              node.textContent = resultTxt;\n            });\n          }\n\n          node.textContent = resultTxt;\n        } // 如果是元素节点\n\n\n        if (node.nodeType === 1) {\n          Array.from(node.attributes).forEach(function (attr) {\n            var name = attr.name,\n                exp = attr.value;\n\n            if (name.includes('w-')) {\n              if (name.includes('w-model')) {\n                node.value = vm[exp];\n                vm.$watch(exp, function (newValue, oldValue) {\n                  node.value = newValue;\n                });\n                node.addEventListener('input', function (e) {\n                  vm[exp] = e.target.value;\n                });\n              }\n            }\n          });\n        } // 若还有子节点则递归\n\n\n        if (node.childNodes && node.childNodes.length > 0) {\n          _this.replace(node, vm);\n        }\n      });\n    }\n  }]);\n\n  return Compiler;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Compiler);\n\n//# sourceURL=webpack:///./src/core/compile/index.js?");

/***/ }),

/***/ "./src/core/index.js":
/*!***************************!*\
  !*** ./src/core/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Wue; });\n/* harmony import */ var _instance_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instance/init */ \"./src/core/instance/init.js\");\n/* harmony import */ var _instance_proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instance/proxy */ \"./src/core/instance/proxy.js\");\n/* harmony import */ var _compile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compile */ \"./src/core/compile/index.js\");\n/* harmony import */ var _observer_watcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./observer/watcher */ \"./src/core/observer/watcher.js\");\n/* harmony import */ var _instance_lifecycle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./instance/lifecycle */ \"./src/core/instance/lifecycle.js\");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\n\n\n\n\nvar Wue = function Wue(options) {\n  _classCallCheck(this, Wue);\n\n  var vm = this;\n  vm.$options = options;\n\n  vm.$watch = function (expOrFn, cb) {\n    return new _observer_watcher__WEBPACK_IMPORTED_MODULE_3__[\"default\"](vm, expOrFn, cb);\n  };\n\n  Object(_instance_init__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(vm);\n  Object(_instance_lifecycle__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(vm, 'mounted');\n  Object.keys(vm._data).forEach(function (key) {\n    Object(_instance_proxy__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(vm, '_data', key);\n  });\n  new _compile__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.$options.el, vm);\n};\n\n\n\n//# sourceURL=webpack:///./src/core/index.js?");

/***/ }),

/***/ "./src/core/instance/init.js":
/*!***********************************!*\
  !*** ./src/core/instance/init.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initOptions; });\n/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observer */ \"./src/core/observer/index.js\");\n\n\n\nvar LIFECYCLE_HOOKS = ['created', 'mounted'];\n\nvar noop = function noop() {};\n\nfunction initOptions(vm) {\n  var data = vm._data = vm.$options.data;\n  Object(_observer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(vm._data);\n  LIFECYCLE_HOOKS.forEach(function (hook) {\n    vm.$options[hook] = vm.$options[hook] || noop;\n  });\n}\n\n//# sourceURL=webpack:///./src/core/instance/init.js?");

/***/ }),

/***/ "./src/core/instance/lifecycle.js":
/*!****************************************!*\
  !*** ./src/core/instance/lifecycle.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return callHook; });\n\n\nfunction callHook(vm, hook) {\n  var handler = vm.$options[hook];\n  if (handler) handler.call(vm);\n}\n\n//# sourceURL=webpack:///./src/core/instance/lifecycle.js?");

/***/ }),

/***/ "./src/core/instance/proxy.js":
/*!************************************!*\
  !*** ./src/core/instance/proxy.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return proxy; });\n\n\nfunction proxy(target, sourceKey, key) {\n  Object.defineProperty(target, key, {\n    configurable: true,\n    get: function proxyGetter() {\n      return target[sourceKey][key];\n    },\n    set: function proxySetter(newVal) {\n      target[sourceKey][key] = newVal;\n    }\n  });\n}\n\n//# sourceURL=webpack:///./src/core/instance/proxy.js?");

/***/ }),

/***/ "./src/core/observer/dep.js":
/*!**********************************!*\
  !*** ./src/core/observer/dep.js ***!
  \**********************************/
/*! exports provided: pushTarget, popTarget, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pushTarget\", function() { return pushTarget; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"popTarget\", function() { return popTarget; });\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Dep =\n/*#__PURE__*/\nfunction () {\n  function Dep() {\n    _classCallCheck(this, Dep);\n\n    this.subs = [];\n  }\n\n  _createClass(Dep, [{\n    key: \"addSub\",\n    value: function addSub(sub) {\n      this.subs.push(sub);\n    }\n  }, {\n    key: \"notify\",\n    value: function notify() {\n      this.subs.forEach(function (sub) {\n        return sub.update();\n      });\n    }\n  }, {\n    key: \"depend\",\n    value: function depend() {\n      if (Dep.target) {\n        Dep.target.subscribe(this);\n      }\n    }\n  }]);\n\n  return Dep;\n}();\n\nDep.target = null;\nvar targetStack = [];\nfunction pushTarget(_target) {\n  if (Dep.target) targetStack.push(_target);\n  Dep.target = _target;\n}\nfunction popTarget() {\n  Dep.target = targetStack.pop();\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dep);\n\n//# sourceURL=webpack:///./src/core/observer/dep.js?");

/***/ }),

/***/ "./src/core/observer/index.js":
/*!************************************!*\
  !*** ./src/core/observer/index.js ***!
  \************************************/
/*! exports provided: def, defineReactive, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"def\", function() { return def; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"defineReactive\", function() { return defineReactive; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return observer; });\n/* harmony import */ var _dep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dep */ \"./src/core/observer/dep.js\");\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nfunction def(obj, key, val, enumerable) {\n  Object.defineProperty(obj, key, {\n    value: val,\n    enumerable: !!enumerable,\n    writable: true,\n    configurable: true\n  });\n}\n\nvar Observer =\n/*#__PURE__*/\nfunction () {\n  function Observer(value) {\n    _classCallCheck(this, Observer);\n\n    this.value = value;\n    def(value, '__ob__', this);\n    this.walk(value);\n  }\n\n  _createClass(Observer, [{\n    key: \"walk\",\n    value: function walk(obj) {\n      Object.keys(obj).forEach(function (key) {\n        if (_typeof(obj[key]) === 'object') observer(obj[key]);\n        defineReactive(obj, key, obj[key]);\n      });\n    }\n  }]);\n\n  return Observer;\n}();\n\nvar defineReactive = function defineReactive(obj, key, value) {\n  var dep = new _dep__WEBPACK_IMPORTED_MODULE_0__[\"default\"](); // 如果value值是object则继续observer\n\n  Object.defineProperty(obj, key, {\n    get: function get() {\n      if (_dep__WEBPACK_IMPORTED_MODULE_0__[\"default\"].target) {\n        dep.depend();\n      }\n\n      return value;\n    },\n    set: function set(newVal) {\n      if (newVal === value) return; // console.log(`setter: ${newVal}`)\n\n      value = newVal;\n      dep.notify();\n    }\n  });\n};\nfunction observer(value) {\n  return new Observer(value);\n}\n\n//# sourceURL=webpack:///./src/core/observer/index.js?");

/***/ }),

/***/ "./src/core/observer/watcher.js":
/*!**************************************!*\
  !*** ./src/core/observer/watcher.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dep */ \"./src/core/observer/dep.js\");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Watcher =\n/*#__PURE__*/\nfunction () {\n  // dom里面的花括号表达式{{}}, 当前当作非方法来使用\n  // Vue的组件\n  // 初始值\n  // 被改变的值\n  function Watcher(vm, expOrFn, cb) {\n    _classCallCheck(this, Watcher);\n\n    this.cb = cb;\n    this.vm = vm;\n    this.expOrFn = expOrFn;\n    this.originValue = this.get();\n    this._changeValue = this.originValue;\n  }\n\n  _createClass(Watcher, [{\n    key: \"update\",\n    value: function update() {\n      var newValue = this.vm;\n      var oldValue = this._changeValue;\n      this.expOrFn.split('.').forEach(function (key) {\n        newValue = newValue[key];\n      });\n      this._changeValue = newValue;\n      this.cb.call(this.vm, newValue, oldValue);\n    }\n  }, {\n    key: \"subscribe\",\n    value: function subscribe(dep) {\n      dep.addSub(this);\n    }\n  }, {\n    key: \"get\",\n    value: function get() {\n      Object(_dep__WEBPACK_IMPORTED_MODULE_0__[\"pushTarget\"])(this);\n      var val = this.vm;\n      this.expOrFn.split('.').forEach(function (key) {\n        val = val[key];\n      });\n      Object(_dep__WEBPACK_IMPORTED_MODULE_0__[\"popTarget\"])();\n      return val;\n    }\n  }]);\n\n  return Watcher;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Watcher);\n\n//# sourceURL=webpack:///./src/core/observer/watcher.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ \"./src/core/index.js\");\n\n\n\nwindow.Wue = _core__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });
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
eval("__webpack_require__.r(__webpack_exports__);\n\n\nvar Compiler =\n/*#__PURE__*/\nfunction () {\n  function Compiler(el, vm) {\n    this.vm = vm;\n    vm.$el = document.querySelector(el);\n    console.log(vm.$el);\n    this.replace(vm.$el, vm);\n  }\n\n  var _proto = Compiler.prototype;\n\n  _proto.replace = function replace(frag, vm) {\n    var _this = this;\n\n    var childNodesList = Array.from(frag.childNodes);\n    var baseReg = /[{][{]((?:.|\\n)+?)[}][}]/g;\n\n    var keyReg = function keyReg(key) {\n      return new RegExp(\"[{][{](?:(\" + key + \")+?)[}][}]\", 'g');\n    };\n\n    var getVal = function getVal(keys, vm) {\n      var val = vm;\n      keys.forEach(function (key) {\n        val = val[key];\n      });\n      return val;\n    };\n\n    childNodesList.forEach(function (node) {\n      var resultTxt = node.textContent; // 如果是文本节点\n\n      if (node.nodeType === 3) {\n        while (baseReg.exec(node.textContent)) {\n          var matchVal = RegExp.$1;\n          var keys = RegExp.$1.split('.');\n          var val = getVal(keys, vm);\n          resultTxt = resultTxt.replace(keyReg(matchVal), val).trim();\n          vm.$watch(RegExp.$1, function (newValue, oldValue) {\n            resultTxt = resultTxt.replace(oldValue, newValue).trim();\n            node.textContent = resultTxt;\n          });\n        }\n\n        node.textContent = resultTxt;\n      } // 如果是元素节点\n\n\n      if (node.nodeType === 1) {\n        Array.from(node.attributes).forEach(function (attr) {\n          var name = attr.name,\n              exp = attr.value;\n\n          if (name.includes('w-')) {\n            if (name.includes('w-model')) {\n              node.value = vm[exp];\n              vm.$watch(exp, function (newValue, oldValue) {\n                node.value = newValue;\n              });\n              node.addEventListener('input', function (e) {\n                vm[exp] = e.target.value;\n              });\n            }\n          }\n        });\n      } // 若还有子节点则递归\n\n\n      if (node.childNodes && node.childNodes.length > 0) {\n        _this.replace(node, vm);\n      }\n    });\n  };\n\n  return Compiler;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Compiler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9jb21waWxlL2luZGV4LmpzP2U1Y2QiXSwibmFtZXMiOlsiQ29tcGlsZXIiLCJlbCIsInZtIiwiJGVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29uc29sZSIsImxvZyIsInJlcGxhY2UiLCJmcmFnIiwiY2hpbGROb2Rlc0xpc3QiLCJBcnJheSIsImZyb20iLCJjaGlsZE5vZGVzIiwiYmFzZVJlZyIsImtleVJlZyIsImtleSIsIlJlZ0V4cCIsImdldFZhbCIsImtleXMiLCJ2YWwiLCJmb3JFYWNoIiwibm9kZSIsInJlc3VsdFR4dCIsInRleHRDb250ZW50Iiwibm9kZVR5cGUiLCJleGVjIiwibWF0Y2hWYWwiLCIkMSIsInNwbGl0IiwidHJpbSIsIiR3YXRjaCIsIm5ld1ZhbHVlIiwib2xkVmFsdWUiLCJhdHRyaWJ1dGVzIiwiYXR0ciIsIm5hbWUiLCJleHAiLCJ2YWx1ZSIsImluY2x1ZGVzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0YXJnZXQiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7OztJQUFNQSxROzs7QUFDSixvQkFBWUMsRUFBWixFQUFnQkMsRUFBaEIsRUFBb0I7QUFDbEIsU0FBS0EsRUFBTCxHQUFVQSxFQUFWO0FBQ0FBLE1BQUUsQ0FBQ0MsR0FBSCxHQUFTQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUJKLEVBQXZCLENBQVQ7QUFDQUssV0FBTyxDQUFDQyxHQUFSLENBQVlMLEVBQUUsQ0FBQ0MsR0FBZjtBQUNBLFNBQUtLLE9BQUwsQ0FBYU4sRUFBRSxDQUFDQyxHQUFoQixFQUFxQkQsRUFBckI7QUFDRDs7OztTQUVETSxPLG9CQUFRQyxJLEVBQU1QLEUsRUFBSTtBQUFBOztBQUNoQixRQUFNUSxjQUFjLEdBQUdDLEtBQUssQ0FBQ0MsSUFBTixDQUFXSCxJQUFJLENBQUNJLFVBQWhCLENBQXZCO0FBQ0EsUUFBTUMsT0FBTyxHQUFHLDJCQUFoQjs7QUFDQSxRQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxHQUFELEVBQVM7QUFDdEIsYUFBTyxJQUFJQyxNQUFKLGdCQUF3QkQsR0FBeEIsaUJBQXlDLEdBQXpDLENBQVA7QUFDRCxLQUZEOztBQUdBLFFBQU1FLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLElBQUQsRUFBT2pCLEVBQVAsRUFBYztBQUMzQixVQUFJa0IsR0FBRyxHQUFHbEIsRUFBVjtBQUNBaUIsVUFBSSxDQUFDRSxPQUFMLENBQWEsVUFBQUwsR0FBRyxFQUFJO0FBQ2xCSSxXQUFHLEdBQUdBLEdBQUcsQ0FBQ0osR0FBRCxDQUFUO0FBQ0QsT0FGRDtBQUdBLGFBQU9JLEdBQVA7QUFDRCxLQU5EOztBQU9BVixrQkFBYyxDQUFDVyxPQUFmLENBQXVCLFVBQUFDLElBQUksRUFBSTtBQUM3QixVQUFJQyxTQUFTLEdBQUdELElBQUksQ0FBQ0UsV0FBckIsQ0FENkIsQ0FFN0I7O0FBQ0EsVUFBSUYsSUFBSSxDQUFDRyxRQUFMLEtBQWtCLENBQXRCLEVBQXlCO0FBQ3ZCLGVBQU9YLE9BQU8sQ0FBQ1ksSUFBUixDQUFhSixJQUFJLENBQUNFLFdBQWxCLENBQVAsRUFBdUM7QUFDckMsY0FBSUcsUUFBUSxHQUFHVixNQUFNLENBQUNXLEVBQXRCO0FBQ0EsY0FBSVQsSUFBSSxHQUFHRixNQUFNLENBQUNXLEVBQVAsQ0FBVUMsS0FBVixDQUFnQixHQUFoQixDQUFYO0FBQ0EsY0FBSVQsR0FBRyxHQUFHRixNQUFNLENBQUNDLElBQUQsRUFBT2pCLEVBQVAsQ0FBaEI7QUFDQXFCLG1CQUFTLEdBQUdBLFNBQVMsQ0FBQ2YsT0FBVixDQUFrQk8sTUFBTSxDQUFDWSxRQUFELENBQXhCLEVBQW9DUCxHQUFwQyxFQUF5Q1UsSUFBekMsRUFBWjtBQUNBNUIsWUFBRSxDQUFDNkIsTUFBSCxDQUFVZCxNQUFNLENBQUNXLEVBQWpCLEVBQXFCLFVBQUNJLFFBQUQsRUFBV0MsUUFBWCxFQUF3QjtBQUMzQ1YscUJBQVMsR0FBR0EsU0FBUyxDQUFDZixPQUFWLENBQWtCeUIsUUFBbEIsRUFBNEJELFFBQTVCLEVBQXNDRixJQUF0QyxFQUFaO0FBQ0FSLGdCQUFJLENBQUNFLFdBQUwsR0FBbUJELFNBQW5CO0FBQ0QsV0FIRDtBQUlEOztBQUNERCxZQUFJLENBQUNFLFdBQUwsR0FBbUJELFNBQW5CO0FBQ0QsT0FmNEIsQ0FnQjdCOzs7QUFDQSxVQUFJRCxJQUFJLENBQUNHLFFBQUwsS0FBa0IsQ0FBdEIsRUFBeUI7QUFDdkJkLGFBQUssQ0FBQ0MsSUFBTixDQUFXVSxJQUFJLENBQUNZLFVBQWhCLEVBQTRCYixPQUE1QixDQUFvQyxVQUFBYyxJQUFJLEVBQUk7QUFBQSxjQUNsQ0MsSUFEa0MsR0FDYkQsSUFEYSxDQUNsQ0MsSUFEa0M7QUFBQSxjQUNyQkMsR0FEcUIsR0FDYkYsSUFEYSxDQUM1QkcsS0FENEI7O0FBRTFDLGNBQUlGLElBQUksQ0FBQ0csUUFBTCxDQUFjLElBQWQsQ0FBSixFQUF5QjtBQUN2QixnQkFBSUgsSUFBSSxDQUFDRyxRQUFMLENBQWMsU0FBZCxDQUFKLEVBQThCO0FBQzVCakIsa0JBQUksQ0FBQ2dCLEtBQUwsR0FBYXBDLEVBQUUsQ0FBQ21DLEdBQUQsQ0FBZjtBQUNBbkMsZ0JBQUUsQ0FBQzZCLE1BQUgsQ0FBVU0sR0FBVixFQUFlLFVBQUNMLFFBQUQsRUFBV0MsUUFBWCxFQUF3QjtBQUNyQ1gsb0JBQUksQ0FBQ2dCLEtBQUwsR0FBYU4sUUFBYjtBQUNELGVBRkQ7QUFHQVYsa0JBQUksQ0FBQ2tCLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFVBQUNDLENBQUQsRUFBTztBQUNwQ3ZDLGtCQUFFLENBQUNtQyxHQUFELENBQUYsR0FBVUksQ0FBQyxDQUFDQyxNQUFGLENBQVNKLEtBQW5CO0FBQ0QsZUFGRDtBQUdEO0FBQ0Y7QUFDRixTQWJEO0FBY0QsT0FoQzRCLENBa0M3Qjs7O0FBQ0EsVUFBSWhCLElBQUksQ0FBQ1QsVUFBTCxJQUFtQlMsSUFBSSxDQUFDVCxVQUFMLENBQWdCOEIsTUFBaEIsR0FBeUIsQ0FBaEQsRUFBbUQ7QUFDakQsYUFBSSxDQUFDbkMsT0FBTCxDQUFhYyxJQUFiLEVBQW1CcEIsRUFBbkI7QUFDRDtBQUNGLEtBdENEO0FBdUNELEc7Ozs7O0FBR1lGLHVFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvcmUvY29tcGlsZS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIENvbXBpbGVyIHtcbiAgY29uc3RydWN0b3IoZWwsIHZtKSB7XG4gICAgdGhpcy52bSA9IHZtXG4gICAgdm0uJGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbClcbiAgICBjb25zb2xlLmxvZyh2bS4kZWwpXG4gICAgdGhpcy5yZXBsYWNlKHZtLiRlbCwgdm0pXG4gIH1cblxuICByZXBsYWNlKGZyYWcsIHZtKSB7XG4gICAgY29uc3QgY2hpbGROb2Rlc0xpc3QgPSBBcnJheS5mcm9tKGZyYWcuY2hpbGROb2RlcylcbiAgICBjb25zdCBiYXNlUmVnID0gL1t7XVt7XSgoPzoufFxcbikrPylbfV1bfV0vZ1xuICAgIGNvbnN0IGtleVJlZyA9IChrZXkpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUmVnRXhwKGBbe11be10oPzooJHtrZXl9KSs/KVt9XVt9XWAsICdnJylcbiAgICB9XG4gICAgY29uc3QgZ2V0VmFsID0gKGtleXMsIHZtKSA9PiB7XG4gICAgICBsZXQgdmFsID0gdm1cbiAgICAgIGtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICB2YWwgPSB2YWxba2V5XVxuICAgICAgfSlcbiAgICAgIHJldHVybiB2YWxcbiAgICB9XG4gICAgY2hpbGROb2Rlc0xpc3QuZm9yRWFjaChub2RlID0+IHtcbiAgICAgIGxldCByZXN1bHRUeHQgPSBub2RlLnRleHRDb250ZW50XG4gICAgICAvLyDlpoLmnpzmmK/mlofmnKzoioLngrlcbiAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAzKSB7XG4gICAgICAgIHdoaWxlIChiYXNlUmVnLmV4ZWMobm9kZS50ZXh0Q29udGVudCkpIHtcbiAgICAgICAgICBsZXQgbWF0Y2hWYWwgPSBSZWdFeHAuJDFcbiAgICAgICAgICBsZXQga2V5cyA9IFJlZ0V4cC4kMS5zcGxpdCgnLicpXG4gICAgICAgICAgbGV0IHZhbCA9IGdldFZhbChrZXlzLCB2bSlcbiAgICAgICAgICByZXN1bHRUeHQgPSByZXN1bHRUeHQucmVwbGFjZShrZXlSZWcobWF0Y2hWYWwpLCB2YWwpLnRyaW0oKVxuICAgICAgICAgIHZtLiR3YXRjaChSZWdFeHAuJDEsIChuZXdWYWx1ZSwgb2xkVmFsdWUpID0+IHtcbiAgICAgICAgICAgIHJlc3VsdFR4dCA9IHJlc3VsdFR4dC5yZXBsYWNlKG9sZFZhbHVlLCBuZXdWYWx1ZSkudHJpbSgpXG4gICAgICAgICAgICBub2RlLnRleHRDb250ZW50ID0gcmVzdWx0VHh0XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBub2RlLnRleHRDb250ZW50ID0gcmVzdWx0VHh0XG4gICAgICB9XG4gICAgICAvLyDlpoLmnpzmmK/lhYPntKDoioLngrlcbiAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgIEFycmF5LmZyb20obm9kZS5hdHRyaWJ1dGVzKS5mb3JFYWNoKGF0dHIgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWU6IGV4cCB9ID0gYXR0clxuICAgICAgICAgIGlmIChuYW1lLmluY2x1ZGVzKCd3LScpKSB7XG4gICAgICAgICAgICBpZiAobmFtZS5pbmNsdWRlcygndy1tb2RlbCcpKSB7XG4gICAgICAgICAgICAgIG5vZGUudmFsdWUgPSB2bVtleHBdXG4gICAgICAgICAgICAgIHZtLiR3YXRjaChleHAsIChuZXdWYWx1ZSwgb2xkVmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLnZhbHVlID0gbmV3VmFsdWVcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgdm1bZXhwXSA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICAvLyDoi6Xov5jmnInlrZDoioLngrnliJnpgJLlvZJcbiAgICAgIGlmIChub2RlLmNoaWxkTm9kZXMgJiYgbm9kZS5jaGlsZE5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5yZXBsYWNlKG5vZGUsIHZtKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcGlsZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/core/compile/index.js\n");

/***/ }),

/***/ "./src/core/index.js":
/*!***************************!*\
  !*** ./src/core/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Wue; });\n/* harmony import */ var _instance_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instance/init */ \"./src/core/instance/init.js\");\n/* harmony import */ var _instance_proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instance/proxy */ \"./src/core/instance/proxy.js\");\n/* harmony import */ var _compile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compile */ \"./src/core/compile/index.js\");\n/* harmony import */ var _observer_watcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./observer/watcher */ \"./src/core/observer/watcher.js\");\n/* harmony import */ var _instance_lifecycle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./instance/lifecycle */ \"./src/core/instance/lifecycle.js\");\n\n\n\n\n\n\n\n\nvar Wue = function Wue(options) {\n  var vm = this;\n  vm.$options = options;\n\n  vm.$watch = function (expOrFn, cb) {\n    return new _observer_watcher__WEBPACK_IMPORTED_MODULE_3__[\"default\"](vm, expOrFn, cb);\n  };\n\n  Object(_instance_init__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(vm);\n  Object(_instance_lifecycle__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(vm, 'mounted');\n  Object.keys(vm._data).forEach(function (key) {\n    Object(_instance_proxy__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(vm, '_data', key);\n  });\n  new _compile__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.$options.el, vm);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9pbmRleC5qcz9jN2IyIl0sIm5hbWVzIjpbIld1ZSIsIm9wdGlvbnMiLCJ2bSIsIiRvcHRpb25zIiwiJHdhdGNoIiwiZXhwT3JGbiIsImNiIiwiV2F0Y2hlciIsImluaXRPcHRpb25zIiwiY2FsbEhvb2siLCJPYmplY3QiLCJrZXlzIiwiX2RhdGEiLCJmb3JFYWNoIiwia2V5IiwicHJveHkiLCJDb21waWxlciIsImVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVxQkEsRyxHQUNuQixhQUFZQyxPQUFaLEVBQXFCO0FBQ25CLE1BQU1DLEVBQUUsR0FBRyxJQUFYO0FBQ0FBLElBQUUsQ0FBQ0MsUUFBSCxHQUFjRixPQUFkOztBQUNBQyxJQUFFLENBQUNFLE1BQUgsR0FBWSxVQUFDQyxPQUFELEVBQVVDLEVBQVYsRUFBaUI7QUFDM0IsV0FBTyxJQUFJQyx5REFBSixDQUFZTCxFQUFaLEVBQWdCRyxPQUFoQixFQUF5QkMsRUFBekIsQ0FBUDtBQUNELEdBRkQ7O0FBR0FFLGdFQUFXLENBQUNOLEVBQUQsQ0FBWDtBQUNBTyxxRUFBUSxDQUFDUCxFQUFELEVBQUssU0FBTCxDQUFSO0FBQ0FRLFFBQU0sQ0FBQ0MsSUFBUCxDQUFZVCxFQUFFLENBQUNVLEtBQWYsRUFBc0JDLE9BQXRCLENBQThCLFVBQUFDLEdBQUcsRUFBSTtBQUNuQ0MsbUVBQUssQ0FBQ2IsRUFBRCxFQUFLLE9BQUwsRUFBY1ksR0FBZCxDQUFMO0FBQ0QsR0FGRDtBQUdBLE1BQUlFLGdEQUFKLENBQWEsS0FBS2IsUUFBTCxDQUFjYyxFQUEzQixFQUErQmYsRUFBL0I7QUFDRCxDIiwiZmlsZSI6Ii4vc3JjL2NvcmUvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaW5pdE9wdGlvbnMgZnJvbSAnLi9pbnN0YW5jZS9pbml0J1xuaW1wb3J0IHByb3h5IGZyb20gXCIuL2luc3RhbmNlL3Byb3h5XCI7XG5pbXBvcnQgQ29tcGlsZXIgZnJvbSBcIi4vY29tcGlsZVwiO1xuaW1wb3J0IFdhdGNoZXIgZnJvbSBcIi4vb2JzZXJ2ZXIvd2F0Y2hlclwiO1xuaW1wb3J0IGNhbGxIb29rIGZyb20gJy4vaW5zdGFuY2UvbGlmZWN5Y2xlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXdWUge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgY29uc3Qgdm0gPSB0aGlzXG4gICAgdm0uJG9wdGlvbnMgPSBvcHRpb25zXG4gICAgdm0uJHdhdGNoID0gKGV4cE9yRm4sIGNiKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFdhdGNoZXIodm0sIGV4cE9yRm4sIGNiKVxuICAgIH1cbiAgICBpbml0T3B0aW9ucyh2bSlcbiAgICBjYWxsSG9vayh2bSwgJ21vdW50ZWQnKVxuICAgIE9iamVjdC5rZXlzKHZtLl9kYXRhKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBwcm94eSh2bSwgJ19kYXRhJywga2V5KVxuICAgIH0pXG4gICAgbmV3IENvbXBpbGVyKHRoaXMuJG9wdGlvbnMuZWwsIHZtKVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/core/index.js\n");

/***/ }),

/***/ "./src/core/instance/init.js":
/*!***********************************!*\
  !*** ./src/core/instance/init.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initOptions; });\n/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observer */ \"./src/core/observer/index.js\");\n\n\n\nvar LIFECYCLE_HOOKS = ['created', 'mounted'];\n\nvar noop = function noop() {};\n\nfunction initOptions(vm) {\n  var data = vm._data = vm.$options.data;\n  Object(_observer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(vm._data);\n  LIFECYCLE_HOOKS.forEach(function (hook) {\n    vm.$options[hook] = vm.$options[hook] || noop;\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9pbnN0YW5jZS9pbml0LmpzPzc5YWQiXSwibmFtZXMiOlsiTElGRUNZQ0xFX0hPT0tTIiwibm9vcCIsImluaXRPcHRpb25zIiwidm0iLCJkYXRhIiwiX2RhdGEiLCIkb3B0aW9ucyIsIm9ic2VydmVyIiwiZm9yRWFjaCIsImhvb2siXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQSxJQUFNQSxlQUFlLEdBQUcsQ0FDdEIsU0FEc0IsRUFFdEIsU0FGc0IsQ0FBeEI7O0FBSUEsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBWSxDQUFFLENBQTNCOztBQUNlLFNBQVNDLFdBQVQsQ0FBc0JDLEVBQXRCLEVBQTBCO0FBQ3ZDLE1BQUlDLElBQUksR0FBR0QsRUFBRSxDQUFDRSxLQUFILEdBQVdGLEVBQUUsQ0FBQ0csUUFBSCxDQUFZRixJQUFsQztBQUNBRywyREFBUSxDQUFDSixFQUFFLENBQUNFLEtBQUosQ0FBUjtBQUNBTCxpQkFBZSxDQUFDUSxPQUFoQixDQUF3QixVQUFBQyxJQUFJLEVBQUk7QUFDOUJOLE1BQUUsQ0FBQ0csUUFBSCxDQUFZRyxJQUFaLElBQW9CTixFQUFFLENBQUNHLFFBQUgsQ0FBWUcsSUFBWixLQUFxQlIsSUFBekM7QUFDRCxHQUZEO0FBR0QiLCJmaWxlIjoiLi9zcmMvY29yZS9pbnN0YW5jZS9pbml0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG9ic2VydmVyIGZyb20gXCIuLi9vYnNlcnZlclwiO1xuY29uc3QgTElGRUNZQ0xFX0hPT0tTID0gW1xuICAnY3JlYXRlZCcsXG4gICdtb3VudGVkJ1xuXVxuY29uc3Qgbm9vcCA9IGZ1bmN0aW9uICgpIHt9XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0T3B0aW9ucyAodm0pIHtcbiAgbGV0IGRhdGEgPSB2bS5fZGF0YSA9IHZtLiRvcHRpb25zLmRhdGFcbiAgb2JzZXJ2ZXIodm0uX2RhdGEgKVxuICBMSUZFQ1lDTEVfSE9PS1MuZm9yRWFjaChob29rID0+IHtcbiAgICB2bS4kb3B0aW9uc1tob29rXSA9IHZtLiRvcHRpb25zW2hvb2tdIHx8IG5vb3BcbiAgfSlcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/core/instance/init.js\n");

/***/ }),

/***/ "./src/core/instance/lifecycle.js":
/*!****************************************!*\
  !*** ./src/core/instance/lifecycle.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return callHook; });\n\n\nfunction callHook(vm, hook) {\n  var handler = vm.$options[hook];\n  if (handler) handler.call(vm);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9pbnN0YW5jZS9saWZlY3ljbGUuanM/M2ExMSJdLCJuYW1lcyI6WyJjYWxsSG9vayIsInZtIiwiaG9vayIsImhhbmRsZXIiLCIkb3B0aW9ucyIsImNhbGwiXSwibWFwcGluZ3MiOiI7Ozs7QUFBZSxTQUFTQSxRQUFULENBQWtCQyxFQUFsQixFQUFzQkMsSUFBdEIsRUFBNEI7QUFDekMsTUFBTUMsT0FBTyxHQUFHRixFQUFFLENBQUNHLFFBQUgsQ0FBWUYsSUFBWixDQUFoQjtBQUNBLE1BQUlDLE9BQUosRUFBYUEsT0FBTyxDQUFDRSxJQUFSLENBQWFKLEVBQWI7QUFDZCIsImZpbGUiOiIuL3NyYy9jb3JlL2luc3RhbmNlL2xpZmVjeWNsZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhbGxIb29rKHZtLCBob29rKSB7XG4gIGNvbnN0IGhhbmRsZXIgPSB2bS4kb3B0aW9uc1tob29rXVxuICBpZiAoaGFuZGxlcikgaGFuZGxlci5jYWxsKHZtKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/core/instance/lifecycle.js\n");

/***/ }),

/***/ "./src/core/instance/proxy.js":
/*!************************************!*\
  !*** ./src/core/instance/proxy.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return proxy; });\n\n\nfunction proxy(target, sourceKey, key) {\n  Object.defineProperty(target, key, {\n    configurable: true,\n    get: function proxyGetter() {\n      return target[sourceKey][key];\n    },\n    set: function proxySetter(newVal) {\n      target[sourceKey][key] = newVal;\n    }\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9pbnN0YW5jZS9wcm94eS5qcz8yODMzIl0sIm5hbWVzIjpbInByb3h5IiwidGFyZ2V0Iiwic291cmNlS2V5Iiwia2V5IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJjb25maWd1cmFibGUiLCJnZXQiLCJwcm94eUdldHRlciIsInNldCIsInByb3h5U2V0dGVyIiwibmV3VmFsIl0sIm1hcHBpbmdzIjoiOzs7O0FBQWUsU0FBU0EsS0FBVCxDQUFlQyxNQUFmLEVBQXVCQyxTQUF2QixFQUFrQ0MsR0FBbEMsRUFBdUM7QUFDcERDLFFBQU0sQ0FBQ0MsY0FBUCxDQUFzQkosTUFBdEIsRUFBOEJFLEdBQTlCLEVBQW1DO0FBQ2pDRyxnQkFBWSxFQUFFLElBRG1CO0FBRWpDQyxPQUFHLEVBQUUsU0FBU0MsV0FBVCxHQUF1QjtBQUMxQixhQUFPUCxNQUFNLENBQUNDLFNBQUQsQ0FBTixDQUFrQkMsR0FBbEIsQ0FBUDtBQUNELEtBSmdDO0FBS2pDTSxPQUFHLEVBQUUsU0FBU0MsV0FBVCxDQUFxQkMsTUFBckIsRUFBNkI7QUFDaENWLFlBQU0sQ0FBQ0MsU0FBRCxDQUFOLENBQWtCQyxHQUFsQixJQUF5QlEsTUFBekI7QUFDRDtBQVBnQyxHQUFuQztBQVNEIiwiZmlsZSI6Ii4vc3JjL2NvcmUvaW5zdGFuY2UvcHJveHkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm94eSh0YXJnZXQsIHNvdXJjZUtleSwga2V5KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIHByb3h5R2V0dGVyKCkge1xuICAgICAgcmV0dXJuIHRhcmdldFtzb3VyY2VLZXldW2tleV1cbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gcHJveHlTZXR0ZXIobmV3VmFsKSB7XG4gICAgICB0YXJnZXRbc291cmNlS2V5XVtrZXldID0gbmV3VmFsXG4gICAgfVxuICB9KVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/core/instance/proxy.js\n");

/***/ }),

/***/ "./src/core/observer/dep.js":
/*!**********************************!*\
  !*** ./src/core/observer/dep.js ***!
  \**********************************/
/*! exports provided: pushTarget, popTarget, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pushTarget\", function() { return pushTarget; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"popTarget\", function() { return popTarget; });\n\n\nvar Dep =\n/*#__PURE__*/\nfunction () {\n  function Dep() {\n    this.subs = [];\n  }\n\n  var _proto = Dep.prototype;\n\n  _proto.addSub = function addSub(sub) {\n    this.subs.push(sub);\n  };\n\n  _proto.notify = function notify() {\n    this.subs.forEach(function (sub) {\n      return sub.update();\n    });\n  };\n\n  _proto.depend = function depend() {\n    if (Dep.target) {\n      Dep.target.subscribe(this);\n    }\n  };\n\n  return Dep;\n}();\n\nDep.target = null;\nvar targetStack = [];\nfunction pushTarget(_target) {\n  if (Dep.target) targetStack.push(_target);\n  Dep.target = _target;\n}\nfunction popTarget() {\n  Dep.target = targetStack.pop();\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dep);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9vYnNlcnZlci9kZXAuanM/NDMzMyJdLCJuYW1lcyI6WyJEZXAiLCJzdWJzIiwiYWRkU3ViIiwic3ViIiwicHVzaCIsIm5vdGlmeSIsImZvckVhY2giLCJ1cGRhdGUiLCJkZXBlbmQiLCJ0YXJnZXQiLCJzdWJzY3JpYmUiLCJ0YXJnZXRTdGFjayIsInB1c2hUYXJnZXQiLCJfdGFyZ2V0IiwicG9wVGFyZ2V0IiwicG9wIl0sIm1hcHBpbmdzIjoiOzs7OztJQUlNQSxHOzs7QUFJSixpQkFBYztBQUNaLFNBQUtDLElBQUwsR0FBWSxFQUFaO0FBQ0Q7Ozs7U0FFREMsTSxtQkFBT0MsRyxFQUFjO0FBQ25CLFNBQUtGLElBQUwsQ0FBVUcsSUFBVixDQUFlRCxHQUFmO0FBQ0QsRzs7U0FFREUsTSxxQkFBUztBQUNQLFNBQUtKLElBQUwsQ0FBVUssT0FBVixDQUFrQixVQUFBSCxHQUFHO0FBQUEsYUFBSUEsR0FBRyxDQUFDSSxNQUFKLEVBQUo7QUFBQSxLQUFyQjtBQUNELEc7O1NBRURDLE0scUJBQVM7QUFDUCxRQUFJUixHQUFHLENBQUNTLE1BQVIsRUFBZ0I7QUFDZFQsU0FBRyxDQUFDUyxNQUFKLENBQVdDLFNBQVgsQ0FBcUIsSUFBckI7QUFDRDtBQUNGLEc7Ozs7O0FBR0hWLEdBQUcsQ0FBQ1MsTUFBSixHQUFhLElBQWI7QUFDQSxJQUFNRSxXQUFXLEdBQUcsRUFBcEI7QUFFTyxTQUFTQyxVQUFULENBQW9CQyxPQUFwQixFQUF1QztBQUM1QyxNQUFJYixHQUFHLENBQUNTLE1BQVIsRUFBZ0JFLFdBQVcsQ0FBQ1AsSUFBWixDQUFpQlMsT0FBakI7QUFDaEJiLEtBQUcsQ0FBQ1MsTUFBSixHQUFhSSxPQUFiO0FBQ0Q7QUFFTSxTQUFTQyxTQUFULEdBQXFCO0FBQzFCZCxLQUFHLENBQUNTLE1BQUosR0FBYUUsV0FBVyxDQUFDSSxHQUFaLEVBQWI7QUFDRDtBQUVjZixrRUFBZiIsImZpbGUiOiIuL3NyYy9jb3JlL29ic2VydmVyL2RlcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbmltcG9ydCB0eXBlIFdhdGNoZXIgZnJvbSAnLi93YXRjaGVyJ1xuXG5jbGFzcyBEZXAge1xuICBzdGF0aWMgdGFyZ2V0OiA/V2F0Y2hlclxuICBzdWJzOiBBcnJheTxXYXRjaGVyPlxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc3VicyA9IFtdXG4gIH1cblxuICBhZGRTdWIoc3ViOiBXYXRjaGVyKSB7XG4gICAgdGhpcy5zdWJzLnB1c2goc3ViKVxuICB9XG5cbiAgbm90aWZ5KCkge1xuICAgIHRoaXMuc3Vicy5mb3JFYWNoKHN1YiA9PiBzdWIudXBkYXRlKCkpXG4gIH1cblxuICBkZXBlbmQoKSB7XG4gICAgaWYgKERlcC50YXJnZXQpIHtcbiAgICAgIERlcC50YXJnZXQuc3Vic2NyaWJlKHRoaXMpXG4gICAgfVxuICB9XG59XG5cbkRlcC50YXJnZXQgPSBudWxsXG5jb25zdCB0YXJnZXRTdGFjayA9IFtdXG5cbmV4cG9ydCBmdW5jdGlvbiBwdXNoVGFyZ2V0KF90YXJnZXQ6ID9XYXRjaGVyKSB7XG4gIGlmIChEZXAudGFyZ2V0KSB0YXJnZXRTdGFjay5wdXNoKF90YXJnZXQpXG4gIERlcC50YXJnZXQgPSBfdGFyZ2V0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3BUYXJnZXQoKSB7XG4gIERlcC50YXJnZXQgPSB0YXJnZXRTdGFjay5wb3AoKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZXBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/core/observer/dep.js\n");

/***/ }),

/***/ "./src/core/observer/index.js":
/*!************************************!*\
  !*** ./src/core/observer/index.js ***!
  \************************************/
/*! exports provided: def, defineReactive, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"def\", function() { return def; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"defineReactive\", function() { return defineReactive; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return observer; });\n/* harmony import */ var _dep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dep */ \"./src/core/observer/dep.js\");\n\n\n\nfunction def(obj, key, val, enumerable) {\n  Object.defineProperty(obj, key, {\n    value: val,\n    enumerable: !!enumerable,\n    writable: true,\n    configurable: true\n  });\n}\n\nvar Observer =\n/*#__PURE__*/\nfunction () {\n  function Observer(value) {\n    this.value = value;\n    def(value, '__ob__', this);\n    this.walk(value);\n  }\n\n  var _proto = Observer.prototype;\n\n  _proto.walk = function walk(obj) {\n    Object.keys(obj).forEach(function (key) {\n      if (typeof obj[key] === 'object') observer(obj[key]);\n      defineReactive(obj, key, obj[key]);\n    });\n  };\n\n  return Observer;\n}();\n\nvar defineReactive = function defineReactive(obj, key, value) {\n  var dep = new _dep__WEBPACK_IMPORTED_MODULE_0__[\"default\"](); // 如果value值是object则继续observer\n\n  Object.defineProperty(obj, key, {\n    get: function get() {\n      if (_dep__WEBPACK_IMPORTED_MODULE_0__[\"default\"].target) {\n        dep.depend();\n      }\n\n      return value;\n    },\n    set: function set(newVal) {\n      if (newVal === value) return; // console.log(`setter: ${newVal}`)\n\n      value = newVal;\n      console.log(dep);\n      dep.notify();\n    }\n  });\n};\nfunction observer(value) {\n  return new Observer(value);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9vYnNlcnZlci9pbmRleC5qcz9iODI1Il0sIm5hbWVzIjpbImRlZiIsIm9iaiIsImtleSIsInZhbCIsImVudW1lcmFibGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwid3JpdGFibGUiLCJjb25maWd1cmFibGUiLCJPYnNlcnZlciIsIndhbGsiLCJrZXlzIiwiZm9yRWFjaCIsIm9ic2VydmVyIiwiZGVmaW5lUmVhY3RpdmUiLCJkZXAiLCJEZXAiLCJnZXQiLCJ0YXJnZXQiLCJkZXBlbmQiLCJzZXQiLCJuZXdWYWwiLCJjb25zb2xlIiwibG9nIiwibm90aWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDTyxTQUFTQSxHQUFULENBQWNDLEdBQWQsRUFBMkJDLEdBQTNCLEVBQXdDQyxHQUF4QyxFQUFrREMsVUFBbEQsRUFBd0U7QUFDN0VDLFFBQU0sQ0FBQ0MsY0FBUCxDQUFzQkwsR0FBdEIsRUFBMkJDLEdBQTNCLEVBQWdDO0FBQzlCSyxTQUFLLEVBQUVKLEdBRHVCO0FBRTlCQyxjQUFVLEVBQUUsQ0FBQyxDQUFDQSxVQUZnQjtBQUc5QkksWUFBUSxFQUFFLElBSG9CO0FBSTlCQyxnQkFBWSxFQUFFO0FBSmdCLEdBQWhDO0FBTUQ7O0lBQ0tDLFE7OztBQUNKLG9CQUFZSCxLQUFaLEVBQW1CO0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNBUCxPQUFHLENBQUNPLEtBQUQsRUFBUSxRQUFSLEVBQWtCLElBQWxCLENBQUg7QUFDQSxTQUFLSSxJQUFMLENBQVVKLEtBQVY7QUFDRDs7OztTQUVESSxJLGlCQUFLVixHLEVBQUs7QUFDUkksVUFBTSxDQUFDTyxJQUFQLENBQVlYLEdBQVosRUFBaUJZLE9BQWpCLENBQXlCLFVBQUFYLEdBQUcsRUFBSTtBQUM5QixVQUFJLE9BQU9ELEdBQUcsQ0FBQ0MsR0FBRCxDQUFWLEtBQW9CLFFBQXhCLEVBQWtDWSxRQUFRLENBQUNiLEdBQUcsQ0FBQ0MsR0FBRCxDQUFKLENBQVI7QUFDbENhLG9CQUFjLENBQUNkLEdBQUQsRUFBTUMsR0FBTixFQUFXRCxHQUFHLENBQUNDLEdBQUQsQ0FBZCxDQUFkO0FBQ0QsS0FIRDtBQUlELEc7Ozs7O0FBR0ksSUFBTWEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDZCxHQUFELEVBQU1DLEdBQU4sRUFBV0ssS0FBWCxFQUFxQjtBQUNqRCxNQUFJUyxHQUFHLEdBQUcsSUFBSUMsNENBQUosRUFBVixDQURpRCxDQUVqRDs7QUFFQVosUUFBTSxDQUFDQyxjQUFQLENBQXNCTCxHQUF0QixFQUEyQkMsR0FBM0IsRUFBZ0M7QUFDOUJnQixPQUQ4QixpQkFDeEI7QUFDSixVQUFJRCw0Q0FBRyxDQUFDRSxNQUFSLEVBQWdCO0FBQ2RILFdBQUcsQ0FBQ0ksTUFBSjtBQUNEOztBQUNELGFBQU9iLEtBQVA7QUFDRCxLQU42QjtBQU85QmMsT0FQOEIsZUFPMUJDLE1BUDBCLEVBT2xCO0FBQ1YsVUFBSUEsTUFBTSxLQUFLZixLQUFmLEVBQXNCLE9BRFosQ0FFVjs7QUFDQUEsV0FBSyxHQUFHZSxNQUFSO0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZUixHQUFaO0FBQ0FBLFNBQUcsQ0FBQ1MsTUFBSjtBQUNEO0FBYjZCLEdBQWhDO0FBZ0JELENBcEJNO0FBcUJRLFNBQVNYLFFBQVQsQ0FBa0JQLEtBQWxCLEVBQXlCO0FBQ3RDLFNBQU8sSUFBSUcsUUFBSixDQUFhSCxLQUFiLENBQVA7QUFDRCIsImZpbGUiOiIuL3NyYy9jb3JlL29ic2VydmVyL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERlcCBmcm9tICcuL2RlcCdcbmV4cG9ydCBmdW5jdGlvbiBkZWYgKG9iajogT2JqZWN0LCBrZXk6IHN0cmluZywgdmFsOiBhbnksIGVudW1lcmFibGU/OiBib29sZWFuKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgIHZhbHVlOiB2YWwsXG4gICAgZW51bWVyYWJsZTogISFlbnVtZXJhYmxlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KVxufVxuY2xhc3MgT2JzZXJ2ZXIge1xuICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZVxuICAgIGRlZih2YWx1ZSwgJ19fb2JfXycsIHRoaXMpXG4gICAgdGhpcy53YWxrKHZhbHVlKVxuICB9XG5cbiAgd2FsayhvYmopIHtcbiAgICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGlmICh0eXBlb2Ygb2JqW2tleV0gPT09ICdvYmplY3QnKSBvYnNlcnZlcihvYmpba2V5XSlcbiAgICAgIGRlZmluZVJlYWN0aXZlKG9iaiwga2V5LCBvYmpba2V5XSlcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBkZWZpbmVSZWFjdGl2ZSA9IChvYmosIGtleSwgdmFsdWUpID0+IHtcbiAgbGV0IGRlcCA9IG5ldyBEZXAoKVxuICAvLyDlpoLmnpx2YWx1ZeWAvOaYr29iamVjdOWImee7p+e7rW9ic2VydmVyXG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgZ2V0KCkge1xuICAgICAgaWYgKERlcC50YXJnZXQpIHtcbiAgICAgICAgZGVwLmRlcGVuZCgpXG4gICAgICB9XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9LFxuICAgIHNldChuZXdWYWwpIHtcbiAgICAgIGlmIChuZXdWYWwgPT09IHZhbHVlKSByZXR1cm5cbiAgICAgIC8vIGNvbnNvbGUubG9nKGBzZXR0ZXI6ICR7bmV3VmFsfWApXG4gICAgICB2YWx1ZSA9IG5ld1ZhbFxuICAgICAgY29uc29sZS5sb2coZGVwKVxuICAgICAgZGVwLm5vdGlmeSgpXG4gICAgfVxuICB9KVxuXG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvYnNlcnZlcih2YWx1ZSkge1xuICByZXR1cm4gbmV3IE9ic2VydmVyKHZhbHVlKVxufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/core/observer/index.js\n");

/***/ }),

/***/ "./src/core/observer/watcher.js":
/*!**************************************!*\
  !*** ./src/core/observer/watcher.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dep */ \"./src/core/observer/dep.js\");\n\n\n\n\nvar Watcher =\n/*#__PURE__*/\nfunction () {\n  // dom里面的花括号表达式{{}}, 当前当作非方法来使用\n  // Vue的组件\n  // 初始值\n  // 被改变的值\n  function Watcher(vm, expOrFn, cb) {\n    this.cb = cb;\n    this.vm = vm;\n    this.expOrFn = expOrFn;\n    this.originValue = this.get();\n    this._changeValue = this.originValue;\n  }\n\n  var _proto = Watcher.prototype;\n\n  _proto.update = function update() {\n    var newValue = this.vm;\n    var oldValue = this._changeValue;\n    this.expOrFn.split('.').forEach(function (key) {\n      newValue = newValue[key];\n    });\n    this._changeValue = newValue;\n    this.cb.call(this.vm, newValue, oldValue);\n  };\n\n  _proto.subscribe = function subscribe(dep) {\n    dep.addSub(this);\n  };\n\n  _proto.get = function get() {\n    Object(_dep__WEBPACK_IMPORTED_MODULE_0__[\"pushTarget\"])(this);\n    var val = this.vm;\n    this.expOrFn.split('.').forEach(function (key) {\n      val = val[key];\n    });\n    Object(_dep__WEBPACK_IMPORTED_MODULE_0__[\"popTarget\"])();\n    return val;\n  };\n\n  return Watcher;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Watcher);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9vYnNlcnZlci93YXRjaGVyLmpzPzMwNWEiXSwibmFtZXMiOlsiV2F0Y2hlciIsInZtIiwiZXhwT3JGbiIsImNiIiwib3JpZ2luVmFsdWUiLCJnZXQiLCJfY2hhbmdlVmFsdWUiLCJ1cGRhdGUiLCJuZXdWYWx1ZSIsIm9sZFZhbHVlIiwic3BsaXQiLCJmb3JFYWNoIiwia2V5IiwiY2FsbCIsInN1YnNjcmliZSIsImRlcCIsImFkZFN1YiIsInB1c2hUYXJnZXQiLCJ2YWwiLCJwb3BUYXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7QUFHQTs7SUFFTUEsTzs7O0FBRVk7QUFDUjtBQUNTO0FBQ0M7QUFDbEIsbUJBQVlDLEVBQVosRUFBcUJDLE9BQXJCLEVBQXNDQyxFQUF0QyxFQUFvRDtBQUNsRCxTQUFLQSxFQUFMLEdBQVVBLEVBQVY7QUFDQSxTQUFLRixFQUFMLEdBQVVBLEVBQVY7QUFDQSxTQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLRSxXQUFMLEdBQW1CLEtBQUtDLEdBQUwsRUFBbkI7QUFDQSxTQUFLQyxZQUFMLEdBQW9CLEtBQUtGLFdBQXpCO0FBQ0Q7Ozs7U0FFREcsTSxxQkFBUztBQUNQLFFBQUlDLFFBQVEsR0FBRyxLQUFLUCxFQUFwQjtBQUNBLFFBQUlRLFFBQVEsR0FBRyxLQUFLSCxZQUFwQjtBQUNBLFNBQUtKLE9BQUwsQ0FBYVEsS0FBYixDQUFtQixHQUFuQixFQUF3QkMsT0FBeEIsQ0FBZ0MsVUFBQ0MsR0FBRCxFQUFTO0FBQ3ZDSixjQUFRLEdBQUdBLFFBQVEsQ0FBQ0ksR0FBRCxDQUFuQjtBQUNELEtBRkQ7QUFHQSxTQUFLTixZQUFMLEdBQW9CRSxRQUFwQjtBQUNBLFNBQUtMLEVBQUwsQ0FBUVUsSUFBUixDQUFhLEtBQUtaLEVBQWxCLEVBQXNCTyxRQUF0QixFQUFnQ0MsUUFBaEM7QUFDRCxHOztTQUVESyxTLHNCQUFVQyxHLEVBQVU7QUFDbEJBLE9BQUcsQ0FBQ0MsTUFBSixDQUFXLElBQVg7QUFDRCxHOztTQUVEWCxHLGtCQUFNO0FBQ0pZLDJEQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0EsUUFBSUMsR0FBRyxHQUFHLEtBQUtqQixFQUFmO0FBQ0EsU0FBS0MsT0FBTCxDQUFhUSxLQUFiLENBQW1CLEdBQW5CLEVBQXdCQyxPQUF4QixDQUFnQyxVQUFBQyxHQUFHLEVBQUk7QUFDckNNLFNBQUcsR0FBR0EsR0FBRyxDQUFDTixHQUFELENBQVQ7QUFDRCxLQUZEO0FBR0FPLDBEQUFTO0FBQ1QsV0FBT0QsR0FBUDtBQUNELEc7Ozs7O0FBR1lsQixzRUFBZiIsImZpbGUiOiIuL3NyYy9jb3JlL29ic2VydmVyL3dhdGNoZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5pbXBvcnQgdHlwZSBEZXAgZnJvbSAnLi9kZXAnXG5pbXBvcnQge3B1c2hUYXJnZXQsIHBvcFRhcmdldH0gZnJvbSBcIi4vZGVwXCI7XG5cbmNsYXNzIFdhdGNoZXIge1xuICBjYjogRnVuY3Rpb25cbiAgZXhwT3JGbjogc3RyaW5nIC8vIGRvbemHjOmdoueahOiKseaLrOWPt+ihqOi+vuW8j3t7fX0sIOW9k+WJjeW9k+S9nOmdnuaWueazleadpeS9v+eUqFxuICB2bTogYW55IC8vIFZ1ZeeahOe7hOS7tlxuICBvcmlnaW5WYWx1ZTogYW55IC8vIOWIneWni+WAvFxuICBfY2hhbmdlVmFsdWU6IGFueSAvLyDooqvmlLnlj5jnmoTlgLxcbiAgY29uc3RydWN0b3Iodm06IGFueSwgZXhwT3JGbjogc3RyaW5nLCBjYjogRnVuY3Rpb24pIHtcbiAgICB0aGlzLmNiID0gY2I7XG4gICAgdGhpcy52bSA9IHZtO1xuICAgIHRoaXMuZXhwT3JGbiA9IGV4cE9yRm5cbiAgICB0aGlzLm9yaWdpblZhbHVlID0gdGhpcy5nZXQoKVxuICAgIHRoaXMuX2NoYW5nZVZhbHVlID0gdGhpcy5vcmlnaW5WYWx1ZVxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGxldCBuZXdWYWx1ZSA9IHRoaXMudm1cbiAgICBsZXQgb2xkVmFsdWUgPSB0aGlzLl9jaGFuZ2VWYWx1ZVxuICAgIHRoaXMuZXhwT3JGbi5zcGxpdCgnLicpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgbmV3VmFsdWUgPSBuZXdWYWx1ZVtrZXldXG4gICAgfSlcbiAgICB0aGlzLl9jaGFuZ2VWYWx1ZSA9IG5ld1ZhbHVlXG4gICAgdGhpcy5jYi5jYWxsKHRoaXMudm0sIG5ld1ZhbHVlLCBvbGRWYWx1ZSlcbiAgfVxuXG4gIHN1YnNjcmliZShkZXA6IERlcCkge1xuICAgIGRlcC5hZGRTdWIodGhpcylcbiAgfVxuXG4gIGdldCgpIHtcbiAgICBwdXNoVGFyZ2V0KHRoaXMpXG4gICAgbGV0IHZhbCA9IHRoaXMudm1cbiAgICB0aGlzLmV4cE9yRm4uc3BsaXQoJy4nKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICB2YWwgPSB2YWxba2V5XVxuICAgIH0pXG4gICAgcG9wVGFyZ2V0KClcbiAgICByZXR1cm4gdmFsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgV2F0Y2hlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/core/observer/watcher.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ \"./src/core/index.js\");\n\n\n\nwindow.Wue = _core__WEBPACK_IMPORTED_MODULE_0__[\"default\"];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJXdWUiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBQSxNQUFNLENBQUNDLEdBQVAsR0FBYUEsNkNBQWIiLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV3VlIGZyb20gJy4vY29yZSdcbndpbmRvdy5XdWUgPSBXdWVcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ });
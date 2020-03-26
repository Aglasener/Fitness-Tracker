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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/api.js":
/*!**************************!*\
  !*** ./assets/js/api.js ***!
  \**************************/
/*! exports provided: loadExercises, saveExercise, resetExercise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadExercises\", function() { return loadExercises; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveExercise\", function() { return saveExercise; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resetExercise\", function() { return resetExercise; });\nfunction loadExercises() {\n  return fetch(\"/exercises\").then(function (res) {\n    return res.json();\n  })[\"catch\"](function (err) {\n    return reject(err);\n  });\n}\nfunction saveExercise(data) {\n  return $.ajax({\n    type: \"POST\",\n    url: \"/submit\",\n    dataType: \"json\",\n    data: {\n      exercise: data.exercise,\n      calories: data.calories\n    }\n  }).then(function (results) {\n    console.log(results);\n  });\n}\nfunction resetExercise() {\n  return $.ajax({\n    type: \"DELETE\",\n    url: \"/reset\"\n  });\n}\n\n//# sourceURL=webpack:///./assets/js/api.js?");

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _calculations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculations */ \"./assets/js/calculations.js\");\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements */ \"./assets/js/elements.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ \"./assets/js/api.js\");\n\n\n\n\nfunction addToList(name, calories) {\n  _elements__WEBPACK_IMPORTED_MODULE_1__[\"exerciseListEl\"].innerHTML += \"<li class=\\\"list-group-item\\\">Name: \".concat(name, \"\\n    <span class=\\\"ml-4\\\">Calories burnt: \").concat(calories, \"</span></li>\");\n}\n\nfunction submit(e) {\n  e.preventDefault();\n  _elements__WEBPACK_IMPORTED_MODULE_1__[\"calIntakeEl\"].innerText = _elements__WEBPACK_IMPORTED_MODULE_1__[\"calIntakeEntryEl\"].value;\n  console.log(_elements__WEBPACK_IMPORTED_MODULE_1__[\"calIntakeEl\"].innerText);\n  var total = Object(_calculations__WEBPACK_IMPORTED_MODULE_0__[\"subtract\"])(Number(_elements__WEBPACK_IMPORTED_MODULE_1__[\"calIntakeEl\"].innerText), Number(_elements__WEBPACK_IMPORTED_MODULE_1__[\"caloriesEl\"].value));\n  _elements__WEBPACK_IMPORTED_MODULE_1__[\"totalBurntEl\"].innerText = Object(_calculations__WEBPACK_IMPORTED_MODULE_0__[\"add\"])(Number(_elements__WEBPACK_IMPORTED_MODULE_1__[\"totalBurntEl\"].innerText), Number(_elements__WEBPACK_IMPORTED_MODULE_1__[\"caloriesEl\"].value));\n  _elements__WEBPACK_IMPORTED_MODULE_1__[\"netCalEl\"].innerText = total;\n  addToList(_elements__WEBPACK_IMPORTED_MODULE_1__[\"exerciseEl\"].value, _elements__WEBPACK_IMPORTED_MODULE_1__[\"caloriesEl\"].value);\n  var data = {\n    \"exercise\": _elements__WEBPACK_IMPORTED_MODULE_1__[\"exerciseEl\"].value,\n    \"calories\": _elements__WEBPACK_IMPORTED_MODULE_1__[\"caloriesEl\"].value\n  };\n  Object(_api__WEBPACK_IMPORTED_MODULE_2__[\"saveExercise\"])(data);\n}\n\nfunction reset(e) {\n  e.preventDefault();\n  var total = 0;\n  _elements__WEBPACK_IMPORTED_MODULE_1__[\"totalBurntEl\"].innerText = total;\n  _elements__WEBPACK_IMPORTED_MODULE_1__[\"netCalEl\"].innerText = total;\n  _elements__WEBPACK_IMPORTED_MODULE_1__[\"exerciseListEl\"].innerHTML = \"\";\n  Object(_api__WEBPACK_IMPORTED_MODULE_2__[\"resetExercise\"])();\n}\n\n_elements__WEBPACK_IMPORTED_MODULE_1__[\"submitBtn\"].onclick = submit;\n_elements__WEBPACK_IMPORTED_MODULE_1__[\"resetBtn\"].onclick = reset;\nObject(_api__WEBPACK_IMPORTED_MODULE_2__[\"loadExercises\"])().then(function (results) {\n  console.log(results);\n\n  for (var i = 0; i < results.length; i++) {\n    addToList(results[i].exercise, results[i].calories);\n  } // results.forEach(function(exercise,calories){\n  //   addToList(exercise, calories);\n  // })\n\n});\n\n//# sourceURL=webpack:///./assets/js/app.js?");

/***/ }),

/***/ "./assets/js/calculations.js":
/*!***********************************!*\
  !*** ./assets/js/calculations.js ***!
  \***********************************/
/*! exports provided: subtract, add */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"subtract\", function() { return subtract; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"add\", function() { return add; });\nfunction subtract(a, b) {\n  return a - b;\n}\n;\nfunction add(a, b) {\n  return a + b;\n}\n\n//# sourceURL=webpack:///./assets/js/calculations.js?");

/***/ }),

/***/ "./assets/js/elements.js":
/*!*******************************!*\
  !*** ./assets/js/elements.js ***!
  \*******************************/
/*! exports provided: calIntakeEntryEl, calIntakeEl, totalBurntEl, netCalEl, exerciseEl, caloriesEl, exerciseListEl, submitBtn, resetBtn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calIntakeEntryEl\", function() { return calIntakeEntryEl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calIntakeEl\", function() { return calIntakeEl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"totalBurntEl\", function() { return totalBurntEl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"netCalEl\", function() { return netCalEl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"exerciseEl\", function() { return exerciseEl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"caloriesEl\", function() { return caloriesEl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"exerciseListEl\", function() { return exerciseListEl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"submitBtn\", function() { return submitBtn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resetBtn\", function() { return resetBtn; });\nvar calIntakeEntryEl = document.getElementById(\"calIntakeEntry\");\nvar calIntakeEl = document.getElementById(\"calIntake\");\nvar totalBurntEl = document.getElementById(\"totalBurnt\");\nvar netCalEl = document.getElementById(\"netCal\");\nvar exerciseEl = document.getElementById(\"exercise\");\nvar caloriesEl = document.getElementById(\"calories\");\nvar exerciseListEl = document.getElementById(\"exercise-list\");\nvar submitBtn = document.getElementById(\"submit\");\nvar resetBtn = document.getElementById(\"reset\");\n\n//# sourceURL=webpack:///./assets/js/elements.js?");

/***/ })

/******/ });
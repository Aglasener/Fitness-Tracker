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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/exerciseChart.js");
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

/***/ "./assets/js/exerciseChart.js":
/*!************************************!*\
  !*** ./assets/js/exerciseChart.js ***!
  \************************************/
/*! exports provided: exerciseChart, updateChart, resetChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"exerciseChart\", function() { return exerciseChart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateChart\", function() { return updateChart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resetChart\", function() { return resetChart; });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./assets/js/api.js\");\n\nvar ctx = document.getElementById(\"myChart\").getContext(\"2d\");\nvar exerciseChart = new Chart(ctx, {\n  type: \"bar\",\n  data: {\n    labels: [],\n    datasets: [{\n      label: \"Calories burnt per exercise\",\n      data: [],\n      backgroundColor: [\"rgba(255, 99, 132, 0.2)\", \"rgba(54, 162, 235, 0.2)\", \"rgba(255, 206, 86, 0.2)\", \"rgba(75, 192, 192, 0.2)\", \"rgba(153, 102, 255, 0.2)\", \"rgba(255, 159, 64, 0.2)\"],\n      borderColor: [\"rgba(255, 99, 132, 1)\", \"rgba(54, 162, 235, 1)\", \"rgba(255, 206, 86, 1)\", \"rgba(75, 192, 192, 1)\", \"rgba(153, 102, 255, 1)\", \"rgba(255, 159, 64, 1)\"],\n      borderWidth: 1\n    }]\n  },\n  options: {\n    title: {\n      text: \"Exercises Chart\"\n    },\n    scales: {\n      yAxes: [{\n        ticks: {\n          beginAtZero: true\n        }\n      }]\n    }\n  }\n});\nfunction updateChart(exerciseChart, exercise, calories) {\n  exerciseChart.data.labels.push(exercise);\n  exerciseChart.data.datasets.forEach(function (dataset) {\n    dataset.data.push(calories);\n  });\n  exerciseChart.update();\n}\nfunction resetChart(exerciseChart) {\n  exerciseChart.data.labels = [];\n  exerciseChart.data.datasets.forEach(function (dataset) {\n    dataset.data = [];\n  });\n  exerciseChart.update();\n}\nObject(_api__WEBPACK_IMPORTED_MODULE_0__[\"loadExercises\"])().then(function (results) {\n  console.log(results);\n\n  for (var i = 0; i < results.length; i++) {\n    updateChart(exerciseChart, results[i].exercise, results[i].calories);\n  } //   JSON.stringify(response).then(function(data) {\n  //   data.forEach(function(exercise,calories){\n  //     updateChart(exerciseChart, exercise, calories);\n  //   })\n  // })\n\n});\n\n//# sourceURL=webpack:///./assets/js/exerciseChart.js?");

/***/ })

/******/ });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/charts/chartstyle.scss":
/*!************************************!*\
  !*** ./src/charts/chartstyle.scss ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/charts/somedata.csv":
/*!*********************************!*\
  !*** ./src/charts/somedata.csv ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [{"to":"Mary","from":"John","heading":"Reminder","body":"Call Cindy on Tuesday"},{"to":"Zoe","from":"Bill","heading":"Reminder","body":"Buy orange juice"},{"to":"Autumn","from":"Lindsey","heading":"Letter","body":"I miss you"}]

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _charts_chartstyle_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../charts/chartstyle.scss */ "./src/charts/chartstyle.scss");
/* harmony import */ var _charts_somedata_csv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../charts/somedata.csv */ "./src/charts/somedata.csv");
/* harmony import */ var _charts_somedata_csv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_charts_somedata_csv__WEBPACK_IMPORTED_MODULE_1__);
// import "../css/index.css";
// import "../scss/index.scss";


console.log(_charts_somedata_csv__WEBPACK_IMPORTED_MODULE_1___default.a); // d3.select("svg").style("background-color", "red");
// let chartName = "chartTest1";
// let width = 350;
// let barHeight = 50;
// let x; // = d3.scale.linear().range([0, 350]);
// let chart = d3.select(chartName).attr("width", width);
// let type = function (d) {
//   d.price = +d.price;
//   return d;
// };
// d3.csv("../charts/somedata.csv", type, function (error, data) {
//   x.domain([
//     0,
//     d3.max(data, function (d) {
//       return d.price;
//     }),
//   ]);
//   chart.attr("height", barHeight * data.length);
//   let bar = chart
//     .selectAll("g")
//     .data(data)
//     .enter()
//     .append("g")
//     .attr("transform", function (d, i) {
//       return "translate(0," + i * barHeight + ")";
//     });
//   bar
//     .append("rect")
//     .attr("width", function (d) {
//       return x(d.price);
//     })
//     .attr("height", barHeight - 1);
// });

/***/ })

/******/ });
//# sourceMappingURL=main.js.map
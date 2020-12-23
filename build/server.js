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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCI/M2M2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCI/NWM5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlZHV4XCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*******************************!*\
  !*** ./src/server/server.jsx ***!
  \*******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ 3);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ 4);\n\nvar _store = __webpack_require__(/*! ./../app/store/store.jsx */ 5);\n\nvar _store2 = _interopRequireDefault(_store);\n\nvar _App = __webpack_require__(/*! ../app/components/App.jsx */ 11);\n\nvar _App2 = _interopRequireDefault(_App);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar express = __webpack_require__(/*! express */ 15);\nvar path = __webpack_require__(/*! path */ 16);\n\nvar app = express();\nvar port = 8000;\napp.get(\"/client.js\", function (req, res) {\n\tres.sendFile(\"client.js\", { root: __dirname });\n});\napp.get(\"/*\", function (req, res) {\n\tres.write(\"<!DOCTYPE html><html><head><title>My Page</title></head><body>\");\n\tres.write(\"<div id='app'>\");\n\tres.write((0, _server.renderToString)(_react2.default.createElement(\n\t\t_reactRedux.Provider,\n\t\t{ store: _store2.default },\n\t\t_react2.default.createElement(_App2.default, null)\n\t)));\n\tres.write(\"</div><script src='client.js' type='text/javascript'></script>\");\n\tres.write(\"</body></html>\");\n\tres.end();\n});\napp.listen(port);\nconsole.log(\"Server is running on port \" + port);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvc2VydmVyL3NlcnZlci5qc3g/NmVkZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi8uLi9hcHAvc3RvcmUvc3RvcmUuanN4XCI7XHJcbmltcG9ydCBBcHAgZnJvbSBcIi4uL2FwcC9jb21wb25lbnRzL0FwcC5qc3hcIjtcclxuXHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKVxyXG52YXIgcG9ydCA9IDgwMDA7XHJcbmFwcC5nZXQoXCIvY2xpZW50LmpzXCIsKHJlcSxyZXMpPT57XHJcblx0cmVzLnNlbmRGaWxlKFwiY2xpZW50LmpzXCIseyByb290OiBfX2Rpcm5hbWV9KTtcclxufSk7XHJcbmFwcC5nZXQoXCIvKlwiLCAocmVxLCByZXMpID0+IHtcclxuXHRyZXMud3JpdGUoXCI8IURPQ1RZUEUgaHRtbD48aHRtbD48aGVhZD48dGl0bGU+TXkgUGFnZTwvdGl0bGU+PC9oZWFkPjxib2R5PlwiKTtcclxuXHRyZXMud3JpdGUoXCI8ZGl2IGlkPSdhcHAnPlwiKTsgIFxyXG5cdHJlcy53cml0ZShcclxuXHRcdHJlbmRlclRvU3RyaW5nKFxyXG5cdFx0XHQ8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuXHRcdFx0XHQ8QXBwLz5cclxuXHRcdFx0PC9Qcm92aWRlcj5cclxuXHRcdClcclxuXHQpO1xyXG5cdHJlcy53cml0ZShcIjwvZGl2PjxzY3JpcHQgc3JjPSdjbGllbnQuanMnIHR5cGU9J3RleHQvamF2YXNjcmlwdCc+PC9zY3JpcHQ+XCIpO1xyXG5cdHJlcy53cml0ZShcIjwvYm9keT48L2h0bWw+XCIpO1xyXG5cdHJlcy5lbmQoKTtcclxufSk7XHJcbmFwcC5saXN0ZW4ocG9ydCk7XHJcbmNvbnNvbGUubG9nKFwiU2VydmVyIGlzIHJ1bm5pbmcgb24gcG9ydCBcIitwb3J0KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3NlcnZlci9zZXJ2ZXIuanN4Il0sIm1hcHBpbmdzIjoiOztBQUlBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFUQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIj80MWJkIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1kb20vc2VydmVyXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCI/Y2E2NCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LXJlZHV4XCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!*********************************!*\
  !*** ./src/app/store/store.jsx ***!
  \*********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ 1);\n\nvar _reduxCatch = __webpack_require__(/*! redux-catch */ 6);\n\nvar _reduxCatch2 = _interopRequireDefault(_reduxCatch);\n\nvar _reduxLogger = __webpack_require__(/*! redux-logger */ 7);\n\nvar _reduxLogger2 = _interopRequireDefault(_reduxLogger);\n\nvar _reduxPromiseMiddleware = __webpack_require__(/*! redux-promise-middleware */ 8);\n\nvar _reduxPromiseMiddleware2 = _interopRequireDefault(_reduxPromiseMiddleware);\n\nvar _index = __webpack_require__(/*! ../reducers/index.jsx */ 9);\n\nvar _index2 = _interopRequireDefault(_index);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//import initialState from '../reducers/initialState.jsx'\n\nfunction errorHandler(error, getState, lastAction, dispatch) {\n  console.error(error);\n  console.debug('current state', getState());\n  console.debug('last action was', lastAction);\n}\nvar Middleware = (0, _redux.applyMiddleware)((0, _reduxCatch2.default)(errorHandler), _reduxLogger2.default, (0, _reduxPromiseMiddleware2.default)());\n//export default createStore(todoApp,initialState,Middleware)\nexports.default = (0, _redux.createStore)(_index2.default, Middleware);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvYXBwL3N0b3JlL3N0b3JlLmpzeD83NTMxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHJlZHV4Q2F0Y2ggZnJvbSAncmVkdXgtY2F0Y2gnXHJcbmltcG9ydCBsb2dnZXIgZnJvbSAncmVkdXgtbG9nZ2VyJ1xyXG5pbXBvcnQgcHJvbWlzZSBmcm9tICdyZWR1eC1wcm9taXNlLW1pZGRsZXdhcmUnXHJcblxyXG5pbXBvcnQgdG9kb0FwcCBmcm9tICcuLi9yZWR1Y2Vycy9pbmRleC5qc3gnXHJcbi8vaW1wb3J0IGluaXRpYWxTdGF0ZSBmcm9tICcuLi9yZWR1Y2Vycy9pbml0aWFsU3RhdGUuanN4J1xyXG5cclxuZnVuY3Rpb24gZXJyb3JIYW5kbGVyKGVycm9yLCBnZXRTdGF0ZSwgbGFzdEFjdGlvbiwgZGlzcGF0Y2gpIHtcclxuICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gIGNvbnNvbGUuZGVidWcoJ2N1cnJlbnQgc3RhdGUnLCBnZXRTdGF0ZSgpKVxyXG4gIGNvbnNvbGUuZGVidWcoJ2xhc3QgYWN0aW9uIHdhcycsIGxhc3RBY3Rpb24pXHJcbn1cclxubGV0IE1pZGRsZXdhcmUgPSBhcHBseU1pZGRsZXdhcmUoXHJcblx0cmVkdXhDYXRjaChlcnJvckhhbmRsZXIpLFxyXG5cdGxvZ2dlcixcclxuXHRwcm9taXNlKClcclxuKTtcclxuLy9leHBvcnQgZGVmYXVsdCBjcmVhdGVTdG9yZSh0b2RvQXBwLGluaXRpYWxTdGF0ZSxNaWRkbGV3YXJlKVxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdG9yZSh0b2RvQXBwLE1pZGRsZXdhcmUpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9hcHAvc3RvcmUvc3RvcmUuanN4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!******************************!*\
  !*** external "redux-catch" ***!
  \******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-catch\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWNhdGNoXCI/NWIzYiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1jYXRjaFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlZHV4LWNhdGNoXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-logger\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWxvZ2dlclwiPzMyNDAiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtbG9nZ2VyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVkdXgtbG9nZ2VyXCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!*******************************************!*\
  !*** external "redux-promise-middleware" ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-promise-middleware\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXByb21pc2UtbWlkZGxld2FyZVwiP2YyNjUiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcHJvbWlzZS1taWRkbGV3YXJlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVkdXgtcHJvbWlzZS1taWRkbGV3YXJlXCJcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!************************************!*\
  !*** ./src/app/reducers/index.jsx ***!
  \************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ 1);\n\nvar _postsReducer = __webpack_require__(/*! ./postsReducer.jsx */ 10);\n\nvar _postsReducer2 = _interopRequireDefault(_postsReducer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = (0, _redux.combineReducers)({\n  postsReducer: _postsReducer2.default\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvYXBwL3JlZHVjZXJzL2luZGV4LmpzeD9mNTAwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiXHJcblxyXG5pbXBvcnQgcG9zdHNSZWR1Y2VyIGZyb20gXCIuL3Bvc3RzUmVkdWNlci5qc3hcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcclxuICBwb3N0c1JlZHVjZXJcclxufSlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2FwcC9yZWR1Y2Vycy9pbmRleC5qc3giXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFEQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!*******************************************!*\
  !*** ./src/app/reducers/postsReducer.jsx ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nvar defaultState = {\n\tposts: [],\n\tfetching: false,\n\tfetched: false,\n\terror: null\n};\n\nvar postsReducer = function postsReducer() {\n\tvar state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n\tvar action = arguments[1];\n\n\tswitch (action.type) {\n\t\tcase \"FETCH_POSTS\":\n\t\t\t{\n\t\t\t\treturn null;\n\t\t\t}\n\t\tcase \"FETCH_POSTS_REJECTED\":\n\t\t\t{\n\t\t\t\treturn null;\n\t\t\t}\n\t\tdefault:\n\t\t\treturn state;\n\t}\n};\n\nexports.default = postsReducer;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2FwcC9yZWR1Y2Vycy9wb3N0c1JlZHVjZXIuanN4P2I1ZGYiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGRlZmF1bHRTdGF0ZSA9IHtcclxuXHRwb3N0czogW10sXHJcblx0ZmV0Y2hpbmc6IGZhbHNlLFxyXG5cdGZldGNoZWQ6IGZhbHNlLFxyXG5cdGVycm9yOiBudWxsXHJcbn1cclxuXHJcbmxldCBwb3N0c1JlZHVjZXIgPSAoc3RhdGU9ZGVmYXVsdFN0YXRlLCBhY3Rpb24pID0+IHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIFwiRkVUQ0hfUE9TVFNcIjoge1xyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdH1cclxuXHRcdGNhc2UgXCJGRVRDSF9QT1NUU19SRUpFQ1RFRFwiOntcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHR9XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwb3N0c1JlZHVjZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2FwcC9yZWR1Y2Vycy9wb3N0c1JlZHVjZXIuanN4Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!************************************!*\
  !*** ./src/app/components/App.jsx ***!
  \************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Header = __webpack_require__(/*! ./Header.jsx */ 12);\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nvar _Footer = __webpack_require__(/*! ./Footer.jsx */ 13);\n\nvar _Footer2 = _interopRequireDefault(_Footer);\n\nvar _Wrapper = __webpack_require__(/*! ./Wrapper.jsx */ 14);\n\nvar _Wrapper2 = _interopRequireDefault(_Wrapper);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar App = function App() {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(_Header2.default, null),\n    _react2.default.createElement(_Wrapper2.default, null),\n    _react2.default.createElement(_Footer2.default, null)\n  );\n};\n\nexports.default = App;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2FwcC9jb21wb25lbnRzL0FwcC5qc3g/MDQ4NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyLmpzeCdcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlci5qc3gnXHJcbmltcG9ydCBXcmFwcGVyIGZyb20gJy4vV3JhcHBlci5qc3gnXHJcblxyXG5jb25zdCBBcHAgPSAoKSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxIZWFkZXIgLz5cclxuICAgIDxXcmFwcGVyIC8+XHJcbiAgICA8Rm9vdGVyIC8+XHJcbiAgPC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvYXBwL2NvbXBvbmVudHMvQXBwLmpzeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFDQTtBQU9BIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!***************************************!*\
  !*** ./src/app/components/Header.jsx ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (Header) {\n\treturn _react2.default.createElement(\n\t\t'h1',\n\t\tnull,\n\t\t'HEADER'\n\t);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2FwcC9jb21wb25lbnRzL0hlYWRlci5qc3g/MmJmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXIgPT4ge1xyXG5cdHJldHVybiA8aDE+SEVBREVSPC9oMT5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvYXBwL2NvbXBvbmVudHMvSGVhZGVyLmpzeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!***************************************!*\
  !*** ./src/app/components/Footer.jsx ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (Footer) {\n  return _react2.default.createElement(\n    'h1',\n    null,\n    'Footer'\n  );\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2FwcC9jb21wb25lbnRzL0Zvb3Rlci5qc3g/NGZjNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXIgPT4ge1xyXG4gIHJldHVybiA8aDE+Rm9vdGVyPC9oMT5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvYXBwL2NvbXBvbmVudHMvRm9vdGVyLmpzeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!****************************************!*\
  !*** ./src/app/components/Wrapper.jsx ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (Wrapper) {\n  return _react2.default.createElement(\n    'h1',\n    null,\n    'Wrapper'\n  );\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2FwcC9jb21wb25lbnRzL1dyYXBwZXIuanN4PzYzMGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3JhcHBlciA9PiB7XHJcbiAgcmV0dXJuIDxoMT5XcmFwcGVyPC9oMT5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvYXBwL2NvbXBvbmVudHMvV3JhcHBlci5qc3giXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCI/ZDJkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZXhwcmVzc1wiXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NWIyYSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicGF0aFwiXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///16\n");

/***/ })
/******/ ]);
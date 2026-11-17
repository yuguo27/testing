/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sum.js"
/*!********************!*\
  !*** ./src/sum.js ***!
  \********************/
(module) {

eval("{function sum(a, b) {\n  return a + b;\n}\nmodule.exports = sum;\n\nfunction isAlphaNumeric(){\n  var regExp = /^[A-Za-z0-9]+$/;\n  return (this.match(regExp));\n}\nfunction capitalize(arg){\n  let newString  = (arg[0]-20) + arg.slice(1);\n  console.log((arg[0]-20));\n  return newString;\n}\nmodule.exports = capitalize;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3VtLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdGluZy8uL3NyYy9zdW0uanM/ZjUwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBzdW0oYSwgYikge1xuICByZXR1cm4gYSArIGI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN1bTtcblxuZnVuY3Rpb24gaXNBbHBoYU51bWVyaWMoKXtcbiAgdmFyIHJlZ0V4cCA9IC9eW0EtWmEtejAtOV0rJC87XG4gIHJldHVybiAodGhpcy5tYXRjaChyZWdFeHApKTtcbn1cbmZ1bmN0aW9uIGNhcGl0YWxpemUoYXJnKXtcbiAgbGV0IG5ld1N0cmluZyAgPSAoYXJnWzBdLTIwKSArIGFyZy5zbGljZSgxKTtcbiAgY29uc29sZS5sb2coKGFyZ1swXS0yMCkpO1xuICByZXR1cm4gbmV3U3RyaW5nO1xufVxubW9kdWxlLmV4cG9ydHMgPSBjYXBpdGFsaXplOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/sum.js\n\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	let __webpack_exports__ = __webpack_require__("./src/sum.js");
/******/ 	
/******/ })()
;
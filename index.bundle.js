/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto&family=Square+Peg&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\r\\n  --border: 1px #d6d5d5 solid;\\r\\n  --main-bg: #f8f8f8;\\r\\n  --bg-color: #d6d5d5;\\r\\n  --list-pad: 15px;\\r\\n}\\r\\n\\r\\n* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: var(--main-bg);\\r\\n  font-family: 'Roboto', sans-serif;\\r\\n  font-size: 20px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  min-height: 100vh;\\r\\n}\\r\\n\\r\\n.main-section {\\r\\n  width: 40vw;\\r\\n  min-height: 25rem;\\r\\n}\\r\\n\\r\\n.todo-container {\\r\\n  background-color: #fff;\\r\\n  width: 100%;\\r\\n  box-shadow: 10px 10px 8px;\\r\\n  box-shadow: 0 5px 5px 5px var(--bg-color);\\r\\n}\\r\\n\\r\\n.todos {\\r\\n  list-style-type: none;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.flex {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.todo-title,\\r\\n.todo-input {\\r\\n  padding: 15px;\\r\\n  border-top: var(--border);\\r\\n}\\r\\n\\r\\n.input {\\r\\n  padding: var(--list-pad);\\r\\n  border: 0;\\r\\n  outline: 0;\\r\\n  font-style: italic;\\r\\n  font-size: 20px;\\r\\n  width: 92%;\\r\\n}\\r\\n\\r\\n.single-todo {\\r\\n  display: flex;\\r\\n  border-bottom: var(--border);\\r\\n  padding: 0 15px;\\r\\n}\\r\\n\\r\\n#todo-form {\\r\\n  width: 95%;\\r\\n}\\r\\n\\r\\n::placeholder {\\r\\n  font-size: 20px;\\r\\n  color: #d6d5d5;\\r\\n}\\r\\n\\r\\n.check {\\r\\n  margin-right: 0.5rem;\\r\\n  width: 1rem;\\r\\n  height: 1rem;\\r\\n}\\r\\n\\r\\n.upt-form {\\r\\n  width: 95%;\\r\\n}\\r\\n\\r\\n.todo-input {\\r\\n  padding: 0;\\r\\n  border-bottom: var(--border);\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.form-input {\\r\\n  width: 95%;\\r\\n}\\r\\n\\r\\n.todo-value {\\r\\n  border-top: 0;\\r\\n  display: flex;\\r\\n  width: 98%;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.return {\\r\\n  font-size: 0.8rem;\\r\\n}\\r\\n\\r\\n.btn {\\r\\n  cursor: pointer;\\r\\n  color: var(--bg-color);\\r\\n}\\r\\n\\r\\n.move {\\r\\n  cursor: move;\\r\\n  color: var(--bg-color);\\r\\n  align-self: center;\\r\\n}\\r\\n\\r\\n.trash {\\r\\n  align-self: center;\\r\\n  font-size: 1rem;\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.trash:hover {\\r\\n  color: red;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.todo-footer {\\r\\n  background-color: var(--main-bg);\\r\\n  text-align: center;\\r\\n  padding: var(--list-pad);\\r\\n}\\r\\n\\r\\n.todo-footer a {\\r\\n  text-decoration: none;\\r\\n  color: rgb(154, 154, 154);\\r\\n}\\r\\n\\r\\n.todo-footer a:hover {\\r\\n  text-decoration: underline;\\r\\n}\\r\\n\\r\\n.checked {\\r\\n  text-decoration: line-through;\\r\\n  text-decoration-style: solid;\\r\\n  text-decoration-thickness: 3px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ \"./src/main.css\");\n/* harmony import */ var _modules_rud_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/rud.js */ \"./src/modules/rud.js\");\n\n\n// load data to the document\ndocument.addEventListener('DOMContentLoaded', () => {\n  _modules_rud_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].read();\n  _modules_rud_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].update();\n  _modules_rud_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addTodos();\n  _modules_rud_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"delete\"]();\n  _modules_rud_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].toggleComplete();\n  _modules_rud_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].clearCompleted();\n});\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/Ui.js":
/*!***************************!*\
  !*** ./src/modules/Ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todoList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoList.js */ \"./src/modules/todoList.js\");\n\n\nconst addData = () => {\n  let result = '';\n  _todoList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach((todo) => {\n    const { description, index, completed } = todo;\n    const data = `\n      <li class=\"single-todo\" data-set=${index}>\n        <span class=\"todo-value\">\n          <input type=\"checkbox\" class=\"check\" data-set=${index} ${completed ? 'checked' : ''}>\n         <form class=\"upt-form\" data-set=${index}> \n            <input type=\"text\" class=\"input list-input ${completed ? 'checked' : ''}\" value=\"${description}\" data-set=${index}>\n          </form>\n        </span>\n          <span class=\"move\" data-set=${index}><i class=\"fa-solid fa-ellipsis-vertical\"></i></span>\n          <span class=\"trash\" data-set=${index}><i class=\"fa-solid fa-trash del\"></i></span>\n      </li>\n    `;\n    result += data;\n  });\n  return result;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addData);\n\n//# sourceURL=webpack://todo-list/./src/modules/Ui.js?");

/***/ }),

/***/ "./src/modules/interactive.js":
/*!************************************!*\
  !*** ./src/modules/interactive.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst clearBtn = document.querySelector('#clearBtn');\nconst todoContainer = document.querySelector('.lists');\n\nclass Interactive {\n  constructor(todos) {\n    this.todos = todos;\n  }\n\n  toggleComplete = () => {\n    document.body.addEventListener('click', (e) => {\n      const listInput = document.querySelectorAll('.list-input');\n      if (e.target.classList.contains('check')) {\n        if (e.target.checked) {\n          const id = e.target.dataset.set;\n          listInput.forEach((todo) => {\n            if (todo.dataset.set === id) {\n              todo.classList.add('checked');\n              const dataId = parseInt(e.target.dataset.set, 10);\n              const data = this.todos.find((todo) => todo.index === dataId);\n              data.completed = true;\n              this.todos[dataId - 1] = data;\n              localStorage.setItem('todos', JSON.stringify(this.todos));\n            }\n          });\n        } else if (!e.target.checked) {\n          const id = e.target.dataset.set;\n          listInput.forEach((todo) => {\n            if (todo.dataset.set === id) {\n              todo.classList.remove('checked');\n              const dataId = parseInt(e.target.dataset.set, 10);\n              const data = this.todos.find((todo) => todo.index === dataId);\n              data.completed = false;\n              this.todos[dataId - 1] = data;\n              localStorage.setItem('todos', JSON.stringify(this.todos));\n            }\n          });\n        }\n      }\n    });\n  }\n\n  clearComplete = () => {\n    clearBtn.addEventListener('click', (e) => {\n      const data = this.todos.filter((todo) => todo.completed === false);\n      e.preventDefault();\n      if (data.length) {\n        const newData = data.map((todo, index) => {\n          todo.index = index + 1;\n          return todo;\n        });\n        this.todos = newData;\n        // update the DOM\n        let result = '';\n        this.todos.forEach((todo) => {\n          const { description, index, completed } = todo;\n          const data = `\n        <li class=\"single-todo\" data-set=${index}>\n          <span class=\"todo-value\">\n            <input type=\"checkbox\" class=\"check\" data-set=${index} ${completed ? 'checked' : ''}>\n          <form class=\"upt-form\" data-set=${index}> \n              <input type=\"text\" class=\"input list-input ${completed ? 'checked' : ''}\" value=\"${description}\" data-set=${index}>\n            </form>\n          </span>\n            <span class=\"move\" data-set=${index}><i class=\"fa-solid fa-ellipsis-vertical\"></i></span>\n            <span class=\"trash\" data-set=${index}><i class=\"fa-solid fa-trash del\"></i></span>\n        </li>\n      `;\n          result += data;\n          todoContainer.innerHTML = result;\n        });\n        // save data to local storage\n        localStorage.setItem('todos', JSON.stringify(this.todos));\n        window.location.reload();\n      }\n    });\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Interactive);\n\n//# sourceURL=webpack://todo-list/./src/modules/interactive.js?");

/***/ }),

/***/ "./src/modules/rud.js":
/*!****************************!*\
  !*** ./src/modules/rud.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interactive.js */ \"./src/modules/interactive.js\");\n/* harmony import */ var _todoList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoList.js */ \"./src/modules/todoList.js\");\n/* harmony import */ var _Ui_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Ui.js */ \"./src/modules/Ui.js\");\n\n\n\n// get dom elements\nconst todoContainer = document.querySelector('.lists');\nconst input = document.querySelector('.input');\nconst form = document.querySelector('#todo-form');\n\nlet todos = _todoList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n// update Dom function\nconst upDateFunc = (todos) => {\n  let result = '';\n  todos.forEach((todo) => {\n    const { description, index, completed } = todo;\n    const data = `\n      <li class=\"single-todo\" data-set=${index}>\n        <span class=\"todo-value\">\n        <input type=\"checkbox\" class=\"check\" data-set=${index} ${completed ? 'checked' : ''}>\n        <form class=\"upt-form\" data-set=${index}> \n           <input type=\"text\" class=\"input list-input ${completed ? 'checked' : ''}\" value=\"${description}\" data-set=${index}>\n         </form>\n        </span>\n          <span class=\"move\" data-set=${index}><i class=\"fa-solid fa-ellipsis-vertical\"></i></span>\n          <span class=\"trash\" data-set=${index}><i class=\"fa-solid fa-trash del\"></i></span>\n      </li>\n    `;\n    result += data;\n    todoContainer.innerHTML = result;\n  });\n};\n\nclass Rud {\n  // Read todos\n  static read = () => {\n    todoContainer.innerHTML = (0,_Ui_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  }\n\n  // update todos\n  static update = () => {\n    const move = document.body.querySelectorAll('.move');\n    const trash = document.body.querySelectorAll('.trash');\n    const lists = document.body.querySelectorAll('.list-input');\n    const singleTodos = document.body.querySelectorAll('.single-todo');\n    // update function\n    const updateTodo = (event, set1, set2, bgC) => {\n      document.body.addEventListener(event, (e) => {\n        const id = e.target.dataset.set;\n        lists.forEach((list) => {\n          if (list.dataset.set === id) {\n            list.style.backgroundColor = bgC;\n            move.forEach((element) => {\n              if (element.dataset.set === id) {\n                element.style.display = set1;\n              }\n            });\n            trash.forEach((element) => {\n              if (element.dataset.set === id) {\n                element.style.display = set2;\n              }\n            });\n            singleTodos.forEach((element) => {\n              if (element.dataset.set === id) {\n                element.style.backgroundColor = bgC;\n              }\n            });\n          }\n        });\n      });\n    };\n    // focusout event\n    updateTodo('focusout', 'block', 'none', '');\n    // click event\n    updateTodo('click', 'none', 'block', '#f5efc6');\n\n    document.body.addEventListener('submit', (e) => {\n      e.preventDefault();\n      if (e.target.classList.contains('upt-form')) {\n        const id = parseInt(e.target.dataset.set, 10);\n        const data = todos.find((todo) => todo.index === id);\n        const lsInput = document.querySelectorAll('.list-input');\n        lsInput.forEach((input) => {\n          if (Number(input.dataset.set) === id) {\n            if (input.value !== '') {\n              const info = `${input.value}`;\n              data.description = info;\n              todos[id - 1] = data;\n              // update the DOM\n              upDateFunc(todos);\n              this.update();\n              localStorage.setItem('todos', JSON.stringify(todos));\n            }\n          }\n        });\n      }\n    });\n  }\n\n  // add todos\n  static addTodos = () => {\n    form.addEventListener('submit', (e) => {\n      e.preventDefault();\n      e.preventDefault();\n      if (input.value === '') {\n        todos = [...todos];\n      } else {\n        const newTodo = {\n          index: todos.length + 1,\n          description: input.value,\n          completed: false,\n        };\n        todos.push(newTodo);\n        // clear the input\n        input.value = '';\n        // update the DOM\n        upDateFunc(todos);\n        this.update();\n        localStorage.setItem('todos', JSON.stringify(todos));\n      }\n    });\n  }\n\n  // delete todos\n  static delete = () => {\n    document.body.addEventListener('click', (e) => {\n      if (e.target.classList.contains('single-todo')) {\n        const id = parseInt(e.target.dataset.set, 10);\n        const newData = todos.filter((todo) => todo.index !== id);\n        const datas = newData.map((data, idx) => ({ ...data, index: idx + 1 }));\n        todos = datas;\n        // store data to local storage\n        localStorage.setItem('todos', JSON.stringify(datas));\n        // update UI\n        upDateFunc(todos);\n        window.location.reload();\n      }\n    });\n  };\n\n  static toggleComplete = () => {\n    const interactive = new _interactive_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](todos);\n    interactive.toggleComplete();\n  }\n\n  static clearCompleted = () => {\n    // get the clear function\n    const clear = new _interactive_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](todos);\n    clear.clearComplete();\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Rud);\n\n//# sourceURL=webpack://todo-list/./src/modules/rud.js?");

/***/ }),

/***/ "./src/modules/todoList.js":
/*!*********************************!*\
  !*** ./src/modules/todoList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getTodos = () => JSON.parse(localStorage.getItem('todos'));\nconst todosData = getTodos() === null ? [] : getTodos();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todosData);\n\n//# sourceURL=webpack://todo-list/./src/modules/todoList.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;